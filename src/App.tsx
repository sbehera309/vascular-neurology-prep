import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { FlashcardViewer } from './components/FlashcardViewer';
import { QuestionBank } from './components/QuestionBank';
import { Calculators } from './components/Calculators';
import { TrialExplorer } from './components/TrialExplorer';
import { ChapterReader } from './components/ChapterReader';
import { UserStats } from './types';

const INITIAL_STATS: UserStats = {
  completedQuestions: {},
  flashcardMastery: {},
  bookmarkedFlashcards: [],
  bookmarkedQuestions: [],
  bookmarkedChapters: [],
  streakDays: 1,
  lastStudyDate: new Date().toISOString().split('T')[0],
};

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'chapters' | 'flashcards' | 'questions' | 'calculators' | 'trials'>('dashboard');

  // LocalStorage state persistence
  const [userStats, setUserStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem('vascneuro_prep_stats');
      return saved ? JSON.parse(saved) : INITIAL_STATS;
    } catch {
      return INITIAL_STATS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vascneuro_prep_stats', JSON.stringify(userStats));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [userStats]);

  // Flashcard Mastery
  const handleUpdateMastery = (cardId: string, rating: 'again' | 'hard' | 'good' | 'easy') => {
    setUserStats(prev => ({
      ...prev,
      flashcardMastery: {
        ...prev.flashcardMastery,
        [cardId]: rating,
      }
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
        [questionId]: { selectedOption, isCorrect },
      }
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20 md:pb-12">
      <Navbar activeTab={activeTab} onNavigate={setActiveTab} />

      <main className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        {activeTab === 'dashboard' && (
          <Dashboard userStats={userStats} onNavigate={setActiveTab} />
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
    </div>
  );
};
