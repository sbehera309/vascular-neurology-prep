import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { BoardMockExam } from './components/BoardMockExam';
import { FlashcardViewer } from './components/FlashcardViewer';
import { QuestionBank } from './components/QuestionBank';
import { Calculators } from './components/Calculators';
import { TrialExplorer } from './components/TrialExplorer';
import { ChapterReader } from './components/ChapterReader';
import { UserProfileModal } from './components/UserProfileModal';
import { UserStats, UserProfile, ExamAttempt } from './types';
import { syncStatsToCloud, subscribeToCloudStats, onAuthChange } from './lib/sync';

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

  // LocalStorage state persistence
  const [userStats, setUserStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem('vascneuro_prep_stats');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_STATS,
          ...parsed,
          profile: {
            ...INITIAL_STATS.profile,
            ...(parsed.profile || {}),
          },
        };
      }
      return INITIAL_STATS;
    } catch {
      return INITIAL_STATS;
    }
  });

  // Save to LocalStorage and Sync to Cloud on change
  useEffect(() => {
    try {
      localStorage.setItem('vascneuro_prep_stats', JSON.stringify(userStats));
      if (userStats.profile.isLoggedIn && userStats.profile.id) {
        syncStatsToCloud(userStats.profile.id, userStats);
      }
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }, [userStats]);

  // Subscribe to Firebase Auth and Cloud Database Sync
  useEffect(() => {
    const unsubscribeAuth = onAuthChange((firebaseUser) => {
      if (firebaseUser) {
        setUserStats(prev => ({
          ...prev,
          profile: {
            ...prev.profile,
            id: firebaseUser.uid,
            name: firebaseUser.displayName || prev.profile.name,
            email: firebaseUser.email || prev.profile.email,
            avatarUrl: firebaseUser.photoURL || undefined,
            isLoggedIn: true,
          },
        }));

        // Subscribe to real-time cloud stats for this user
        const unsubscribeCloud = subscribeToCloudStats(firebaseUser.uid, (cloudStats) => {
          if (cloudStats) {
            setUserStats(prev => ({
              ...prev,
              ...cloudStats,
              profile: {
                ...prev.profile,
                ...(cloudStats.profile || {}),
              },
            }));
          }
        });

        return () => unsubscribeCloud();
      }
    });

    return () => unsubscribeAuth();
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

  // Question Complete
  const handleCompleteQuestion = (questionId: string, selectedOption: string, isCorrect: boolean) => {
    setUserStats(prev => ({
      ...prev,
      completedQuestions: {
        ...prev.completedQuestions,
        [questionId]: {
          selectedOption,
          isCorrect,
          timestamp: new Date().toISOString(),
        },
      },
    }));
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
          <BoardMockExam onSaveExamAttempt={handleSaveExamAttempt} />
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
        onResetProgress={handleResetProgress}
        onImportData={handleImportData}
      />
    </div>
  );
};
