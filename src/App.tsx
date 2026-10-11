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
  getGuestStats, 
  clearGuestStats, 
  mergeUserStats, 
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

  // LocalStorage state persistence keyed by session/user
  const [userStats, setUserStats] = useState<UserStats>(() => {
    try {
      const activeUserId = localStorage.getItem(ACTIVE_USER_ID_KEY);
      return loadSessionStats(activeUserId, INITIAL_STATS);
    } catch {
      return INITIAL_STATS;
    }
  });

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

  // Handle explicit user login (merging any active guest/unauthenticated session into their account)
  const handleLogin = useCallback((profile: UserProfile) => {
    const guestData = getGuestStats() || (!userStats.profile.isLoggedIn ? userStats : null);
    const existingUserData = loadSessionStats(profile.id, {
      ...INITIAL_STATS,
      profile,
    });

    let finalStats: UserStats;
    const hasGuestProgress = guestData && (
      (guestData.completedQuestions && Object.keys(guestData.completedQuestions).length > 0) ||
      (guestData.bookmarkedQuestions && guestData.bookmarkedQuestions.length > 0) ||
      (guestData.bookmarkedFlashcards && guestData.bookmarkedFlashcards.length > 0) ||
      (guestData.examAttempts && guestData.examAttempts.length > 0) ||
      (guestData.flashcardMastery && Object.keys(guestData.flashcardMastery).length > 0)
    );

    if (hasGuestProgress) {
      finalStats = mergeUserStats(existingUserData, guestData!);
      finalStats.profile = { ...finalStats.profile, ...profile, isLoggedIn: true };
      clearGuestStats();
    } else {
      finalStats = {
        ...existingUserData,
        profile: { ...existingUserData.profile, ...profile, isLoggedIn: true },
      };
    }

    setUserStats(finalStats);
    saveSessionStats(finalStats);

    if (profile.id && profile.id !== 'user-default') {
      syncStatsToCloud(profile.id, finalStats);
    }
  }, [userStats]);

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

        // Merge any active guest questions/progress into the newly logged-in account
        setUserStats(prev => {
          const guestData = getGuestStats() || (!prev.profile.isLoggedIn ? prev : null);
          const localExisting = loadSessionStats(firebaseUser.uid, { ...INITIAL_STATS, profile: cloudProfile });
          let merged = localExisting;

          const hasGuestProgress = guestData && (
            (guestData.completedQuestions && Object.keys(guestData.completedQuestions).length > 0) ||
            (guestData.bookmarkedQuestions && guestData.bookmarkedQuestions.length > 0) ||
            (guestData.examAttempts && guestData.examAttempts.length > 0) ||
            (guestData.flashcardMastery && Object.keys(guestData.flashcardMastery).length > 0)
          );

          if (hasGuestProgress) {
            merged = mergeUserStats(localExisting, guestData!);
            clearGuestStats();
          }

          merged.profile = { ...merged.profile, ...cloudProfile, isLoggedIn: true };
          saveSessionStats(merged);
          syncStatsToCloud(firebaseUser.uid, merged);
          return merged;
        });

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
  }, []);

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

  // Reset Progress Options
  const handleResetProgress = (type: 'all' | 'questions' | 'exams' | 'flashcards') => {
    setUserStats(prev => {
      if (type === 'questions') {
        return { ...prev, completedQuestions: {} };
      }
      if (type === 'exams') {
        return { ...prev, examAttempts: [] };
      }
      if (type === 'flashcards') {
        return { ...prev, flashcardMastery: {}, bookmarkedFlashcards: [] };
      }
      return {
        ...INITIAL_STATS,
        profile: prev.profile,
      };
    });
  };

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
          />
        )}
        {activeTab === 'calculators' && <Calculators />}
        {activeTab === 'trials' && <TrialExplorer />}
        {activeTab === 'chapters' && (
          <ChapterReader
            bookmarkedChapters={userStats.bookmarkedChapters}
            onToggleBookmarkChapter={handleToggleBookmarkChapter}
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
      />
    </div>
  );
};
