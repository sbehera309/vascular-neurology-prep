import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { BoardMockExam } from './components/BoardMockExam';
import { FlashcardViewer } from './components/FlashcardViewer';
import { QuestionBank } from './components/QuestionBank';
import { Calculators } from './components/Calculators';
import { TrialExplorer } from './components/TrialExplorer';
import { ChapterReader } from './components/ChapterReader';
import { UserProfileModal } from './components/UserProfileModal';
import { UserStats, UserProfile, ExamAttempt, QuestionAttempt } from './types';
import { syncStatsToCloud, subscribeToCloudStats, onAuthChange } from './lib/sync';
import { 
  loadSessionStats, 
  saveSessionStats, 
  clearGuestStats, 
  mergeUserStats, 
  recoverAllStoredStats,
  calculateUpdatedStreak, 
  ACTIVE_USER_ID_KEY,
  getUserStorageKey 
} from './lib/session';

const INITIAL_STATS: UserStats = {
  profile: {
    id: 'user-default',
    name: 'Dr. Vascular Neurologist',
    email: 'fellow@stroke-prep.org',
    targetExamDate: '2026-10-15',
    role: 'Vascular Neurology Fellow',
    institution: 'Academic Medical Center',
    isLoggedIn: false,
    createdAt: new Date().toISOString(),
  },
  completedQuestions: {},
  flashcardMastery: {},
  bookmarkedFlashcards: [],
  bookmarkedQuestions: [],
  bookmarkedChapters: [],
  examAttempts: [],
  streakDays: 1,
  lastStudyDate: new Date().toISOString().split('T')[0],
};

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'chapters' | 'flashcards' | 'questions' | 'calculators' | 'trials' | 'exam'>('dashboard');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [targetQuestionId, setTargetQuestionId] = useState<string | null>(null);
  const [targetChapterId, setTargetChapterId] = useState<number | null>(null);

  // LocalStorage state persistence keyed by session/user
  const [userStats, setUserStats] = useState<UserStats>(() => {
    try {
      const activeUserId = localStorage.getItem(ACTIVE_USER_ID_KEY);
      return loadSessionStats(activeUserId, INITIAL_STATS);
    } catch {
      return INITIAL_STATS;
    }
  });

  // On startup: ensure all questions across historical sessions are recovered into state
  useEffect(() => {
    try {
      const activeUserId = localStorage.getItem(ACTIVE_USER_ID_KEY);
      const recovered = recoverAllStoredStats(activeUserId, userStats);
      const recoveredCount = Object.keys(recovered.completedQuestions || {}).length;
      const currentCount = Object.keys(userStats.completedQuestions || {}).length;
      if (recoveredCount > currentCount) {
        setUserStats(recovered);
        saveSessionStats(recovered);
      }
    } catch (e) {
      console.warn('Error during startup progress recovery:', e);
    }
  }, []);

  // Save to LocalStorage and Sync to Cloud on change
  useEffect(() => {
    try {
      saveSessionStats(userStats);
      if (userStats.profile.isLoggedIn && userStats.profile.id && userStats.profile.id !== 'user-default') {
        syncStatsToCloud(userStats.profile.id, userStats);
      }
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }, [userStats]);

  // Synchronize state across multiple browser tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (!e.key) return;
      const currentKey = getUserStorageKey(userStats.profile.isLoggedIn ? userStats.profile.id : null);
      if (e.key === currentKey && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setUserStats(prev => ({
            ...prev,
            ...parsed,
          }));
        } catch (err) {
          console.warn('Error syncing storage event across tabs', err);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [userStats.profile.id, userStats.profile.isLoggedIn]);

  // Dedicated function to update stats upon login
  const updateStatsOnLogin = useCallback((profile: UserProfile) => {
    // 1. Recover and aggregate all historical questions and data across all localStorage keys
    const consolidated = recoverAllStoredStats(profile.id, userStats);
    
    // 2. Attach updated profile info
    const finalStats: UserStats = {
      ...consolidated,
      profile: {
        ...consolidated.profile,
        ...profile,
        isLoggedIn: true,
      },
    };

    // 3. Clear guest-only slot since it is now consolidated into this user
    clearGuestStats();

    // 4. Update React state and write to storage
    setUserStats(finalStats);
    saveSessionStats(finalStats);

    // 5. If cloud sync is enabled, sync to Firestore
    if (profile.id && profile.id !== 'user-default') {
      syncStatsToCloud(profile.id, finalStats);
    }

    return finalStats;
  }, [userStats]);

  // Handle explicit user login
  const handleLogin = useCallback((profile: UserProfile) => {
    updateStatsOnLogin(profile);
  }, [updateStatsOnLogin]);

  // Handle user logout (switching to clean guest session and preserving user data)
  const handleLogout = useCallback(() => {
    if (userStats.profile.isLoggedIn && userStats.profile.id) {
      saveSessionStats(userStats);
    }
    localStorage.setItem(ACTIVE_USER_ID_KEY, '');
    clearGuestStats();

    setUserStats({
      ...INITIAL_STATS,
      profile: {
        ...INITIAL_STATS.profile,
        id: 'user-default',
        name: 'Dr. Vascular Neurologist',
        email: 'fellow@stroke-prep.org',
        isLoggedIn: false,
      },
      completedQuestions: {},
      flashcardMastery: {},
      bookmarkedFlashcards: [],
      bookmarkedQuestions: [],
      bookmarkedChapters: [],
      examAttempts: [],
      streakDays: 1,
      lastStudyDate: new Date().toISOString().split('T')[0],
    });
  }, [userStats]);

  // Subscribe to Firebase Auth and Cloud Database Sync
  useEffect(() => {
    let unsubscribeCloud: (() => void) | null = null;

    const unsubscribeAuth = onAuthChange((firebaseUser) => {
      if (unsubscribeCloud) {
        unsubscribeCloud();
        unsubscribeCloud = null;
      }

      if (firebaseUser) {
        const cloudProfile: UserProfile = {
          id: firebaseUser.uid,
          name: firebaseUser.displayName || 'Candidate',
          email: firebaseUser.email || '',
          avatarUrl: firebaseUser.photoURL || undefined,
          isLoggedIn: true,
          createdAt: new Date().toISOString(),
        };

        // When Firebase user signs in, immediately run updateStatsOnLogin
        updateStatsOnLogin(cloudProfile);

        // Real-time Cloud listener with merge protection to prevent overwriting local progress
        unsubscribeCloud = subscribeToCloudStats(firebaseUser.uid, (cloudStats) => {
          if (cloudStats) {
            setUserStats(prev => {
              const mergedWithCloud = mergeUserStats(cloudStats, prev);
              saveSessionStats(mergedWithCloud);
              return mergedWithCloud;
            });
          }
        });
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeCloud) unsubscribeCloud();
    };
  }, [updateStatsOnLogin]);

  // Handle Profile Update
  const handleUpdateProfile = (profileUpdates: Partial<UserProfile>) => {
    setUserStats(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        ...profileUpdates,
      },
    }));
  };

  // Flashcard Mastery
  const handleUpdateMastery = (cardId: string, rating: 'again' | 'hard' | 'good' | 'easy') => {
    setUserStats(prev => ({
      ...prev,
      flashcardMastery: {
        ...prev.flashcardMastery,
        [cardId]: rating,
      },
    }));
  };

  // Toggle Flashcard Bookmark
  const handleToggleBookmarkCard = (cardId: string) => {
    setUserStats(prev => {
      const exists = prev.bookmarkedFlashcards.includes(cardId);
      return {
        ...prev,
        bookmarkedFlashcards: exists
          ? prev.bookmarkedFlashcards.filter(id => id !== cardId)
          : [...prev.bookmarkedFlashcards, cardId],
      };
    });
  };

  // Toggle Question Bookmark
  const handleToggleBookmarkQuestion = (questionId: string) => {
    setUserStats(prev => {
      const exists = prev.bookmarkedQuestions.includes(questionId);
      return {
        ...prev,
        bookmarkedQuestions: exists
          ? prev.bookmarkedQuestions.filter(id => id !== questionId)
          : [...prev.bookmarkedQuestions, questionId],
      };
    });
  };

  // Toggle Chapter Bookmark
  const handleToggleBookmarkChapter = (chapterId: number) => {
    setUserStats(prev => {
      const exists = prev.bookmarkedChapters.includes(chapterId);
      return {
        ...prev,
        bookmarkedChapters: exists
          ? prev.bookmarkedChapters.filter(id => id !== chapterId)
          : [...prev.bookmarkedChapters, chapterId],
      };
    });
  };

  // Question Complete with Streak update
  const handleCompleteQuestion = (questionId: string, selectedOption: string, isCorrect: boolean) => {
    setUserStats(prev => {
      const streakInfo = calculateUpdatedStreak(prev);
      return {
        ...prev,
        ...streakInfo,
        completedQuestions: {
          ...prev.completedQuestions,
          [questionId]: {
            selectedOption,
            isCorrect,
            timestamp: new Date().toISOString(),
          },
        },
      };
    });
  };

  // Batch Question Complete from BoardMockExam
  const handleBatchCompleteQuestions = (attempts: Record<string, QuestionAttempt>) => {
    setUserStats(prev => {
      const streakInfo = calculateUpdatedStreak(prev);
      return {
        ...prev,
        ...streakInfo,
        completedQuestions: {
          ...prev.completedQuestions,
          ...attempts,
        },
      };
    });
  };

  // Save Exam Attempt
  const handleSaveExamAttempt = (attempt: ExamAttempt) => {
    setUserStats(prev => ({
      ...prev,
      examAttempts: [attempt, ...(prev.examAttempts || [])],
    }));
  };

  // Reset Progress Options (with allowExplicitReset flag for storage safety)
  const handleResetProgress = (type: 'all' | 'questions' | 'exams' | 'flashcards') => {
    setUserStats(prev => {
      let newStats: UserStats;
      if (type === 'questions') {
        newStats = { ...prev, completedQuestions: {} };
      } else if (type === 'exams') {
        newStats = { ...prev, examAttempts: [] };
      } else if (type === 'flashcards') {
        newStats = { ...prev, flashcardMastery: {}, bookmarkedFlashcards: [] };
      } else {
        newStats = {
          ...INITIAL_STATS,
          profile: prev.profile,
        };
      }
      saveSessionStats(newStats, true);
      return newStats;
    });
  };

  // Recover historical progress across all sessions
  const handleRecoverProgress = useCallback((): number => {
    const activeId = userStats.profile.isLoggedIn ? userStats.profile.id : null;
    const recovered = recoverAllStoredStats(activeId, userStats);
    setUserStats(recovered);
    saveSessionStats(recovered);
    if (activeId && activeId !== 'user-default') {
      syncStatsToCloud(activeId, recovered);
    }
    return Object.keys(recovered.completedQuestions || {}).length;
  }, [userStats]);

  // Update specific question status or remove it from completed list
  const handleUpdateQuestionStatus = useCallback((questionId: string, isCorrect?: boolean, remove?: boolean) => {
    setUserStats(prev => {
      const updatedCompleted = { ...prev.completedQuestions };
      if (remove) {
        delete updatedCompleted[questionId];
      } else if (isCorrect !== undefined) {
        const existing = updatedCompleted[questionId] || {
          selectedOption: '',
          isCorrect,
          timestamp: new Date().toISOString(),
        };
        updatedCompleted[questionId] = {
          ...existing,
          isCorrect,
          timestamp: new Date().toISOString(),
        };
      }
      const newStats: UserStats = {
        ...prev,
        completedQuestions: updatedCompleted,
      };
      saveSessionStats(newStats, Boolean(remove));
      if (newStats.profile.isLoggedIn && newStats.profile.id && newStats.profile.id !== 'user-default') {
        syncStatsToCloud(newStats.profile.id, newStats);
      }
      return newStats;
    });
  }, []);

  // Import Backup Data
  const handleImportData = (imported: UserStats) => {
    if (imported && typeof imported === 'object') {
      setUserStats(prev => ({
        ...prev,
        ...imported,
        profile: {
          ...prev.profile,
          ...(imported.profile || {}),
        },
      }));
    }
  };

  // Navigate to specific syllabus chapter
  const handleNavigateToChapter = useCallback((chapterId: number) => {
    setTargetChapterId(chapterId);
    setIsProfileModalOpen(false);
    setActiveTab('chapters');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 md:pb-12">
      <Navbar
        activeTab={activeTab}
        onNavigate={setActiveTab}
        userProfile={userStats.profile}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      <main className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        {activeTab === 'dashboard' && (
          <Dashboard userStats={userStats} onNavigate={setActiveTab} />
        )}
        {activeTab === 'exam' && (
          <BoardMockExam 
            onSaveExamAttempt={handleSaveExamAttempt}
            onBatchCompleteQuestions={handleBatchCompleteQuestions}
            onNavigateToChapter={handleNavigateToChapter}
          />
        )}
        {activeTab === 'flashcards' && (
          <FlashcardViewer
            bookmarkedCards={userStats.bookmarkedFlashcards}
            onToggleBookmark={handleToggleBookmarkCard}
            masteryState={userStats.flashcardMastery}
            onUpdateMastery={handleUpdateMastery}
          />
        )}
        {activeTab === 'questions' && (
          <QuestionBank
            completedQuestions={userStats.completedQuestions}
            onCompleteQuestion={handleCompleteQuestion}
            bookmarkedQuestions={userStats.bookmarkedQuestions}
            onToggleBookmarkQuestion={handleToggleBookmarkQuestion}
            targetQuestionId={targetQuestionId}
            onNavigateToChapter={handleNavigateToChapter}
          />
        )}
        {activeTab === 'calculators' && <Calculators />}
        {activeTab === 'trials' && <TrialExplorer />}
        {activeTab === 'chapters' && (
          <ChapterReader
            bookmarkedChapters={userStats.bookmarkedChapters}
            onToggleBookmarkChapter={handleToggleBookmarkChapter}
            targetChapterId={targetChapterId}
          />
        )}
      </main>

      {/* User Profile, Account & Analytics Modal */}
      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        userStats={userStats}
        onUpdateProfile={handleUpdateProfile}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onResetProgress={handleResetProgress}
        onImportData={handleImportData}
        onRecoverProgress={handleRecoverProgress}
        onUpdateQuestionStatus={handleUpdateQuestionStatus}
        onNavigateToQuestion={(qId) => {
          setTargetQuestionId(qId);
          setIsProfileModalOpen(false);
          setActiveTab('questions');
        }}
        onNavigateToChapter={handleNavigateToChapter}
      />
    </div>
  );
};
