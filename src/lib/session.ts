import { UserStats, QuestionAttempt, ExamAttempt } from '../types';

export const GUEST_STORAGE_KEY = 'vascneuro_prep_stats_guest';
export const ACTIVE_USER_ID_KEY = 'vascneuro_active_user_id';
export const LEGACY_STORAGE_KEY = 'vascneuro_prep_stats';

/**
 * Returns the storage key corresponding to a given userId (or guest).
 */
export const getUserStorageKey = (userId?: string | null): string => {
  if (userId && userId !== 'user-default' && userId.trim() !== '') {
    return `vascneuro_prep_stats_${userId}`;
  }
  return GUEST_STORAGE_KEY;
};

/**
 * Migrates legacy data if present from the older monolithic storage key.
 */
export const migrateLegacyStorage = (defaultStats: UserStats): void => {
  try {
    const legacyData = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyData) {
      const parsed = JSON.parse(legacyData);
      if (parsed && typeof parsed === 'object') {
        const targetKey = parsed.profile?.isLoggedIn && parsed.profile?.id
          ? getUserStorageKey(parsed.profile.id)
          : GUEST_STORAGE_KEY;

        if (!localStorage.getItem(targetKey)) {
          localStorage.setItem(targetKey, JSON.stringify({
            ...defaultStats,
            ...parsed,
          }));
        }
      }
    }
  } catch (err) {
    console.warn('Failed to migrate legacy storage:', err);
  }
};

/**
 * Loads session stats from localStorage for a specific user ID or guest.
 */
export const loadSessionStats = (userId: string | null, fallback: UserStats): UserStats => {
  try {
    migrateLegacyStorage(fallback);
    const storageKey = getUserStorageKey(userId);
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...fallback,
        ...parsed,
        completedQuestions: parsed.completedQuestions || {},
        flashcardMastery: parsed.flashcardMastery || {},
        bookmarkedFlashcards: parsed.bookmarkedFlashcards || [],
        bookmarkedQuestions: parsed.bookmarkedQuestions || [],
        bookmarkedChapters: parsed.bookmarkedChapters || [],
        examAttempts: parsed.examAttempts || [],
        profile: {
          ...fallback.profile,
          ...(parsed.profile || {}),
        },
      };
    }
  } catch (err) {
    console.warn('Error loading session stats:', err);
  }
  return fallback;
};

/**
 * Saves user stats to the appropriate user or guest slot in localStorage.
 */
export const saveSessionStats = (stats: UserStats): void => {
  try {
    const isLoggedIn = Boolean(stats.profile?.isLoggedIn && stats.profile?.id && stats.profile.id !== 'user-default');
    const storageKey = getUserStorageKey(isLoggedIn ? stats.profile.id : null);
    localStorage.setItem(storageKey, JSON.stringify(stats));

    if (isLoggedIn) {
      localStorage.setItem(ACTIVE_USER_ID_KEY, stats.profile.id);
    } else {
      localStorage.setItem(ACTIVE_USER_ID_KEY, '');
    }
  } catch (err) {
    console.error('Failed to save session stats to localStorage:', err);
  }
};

/**
 * Gets guest session stats if any exist and have tracked activity.
 */
export const getGuestStats = (): UserStats | null => {
  try {
    const saved = localStorage.getItem(GUEST_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as UserStats;
      const hasCompletedQs = parsed.completedQuestions && Object.keys(parsed.completedQuestions).length > 0;
      const hasMastery = parsed.flashcardMastery && Object.keys(parsed.flashcardMastery).length > 0;
      const hasBookmarks = (parsed.bookmarkedQuestions && parsed.bookmarkedQuestions.length > 0) ||
                           (parsed.bookmarkedFlashcards && parsed.bookmarkedFlashcards.length > 0);
      const hasExams = parsed.examAttempts && parsed.examAttempts.length > 0;

      if (hasCompletedQs || hasMastery || hasBookmarks || hasExams) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Error reading guest stats:', err);
  }
  return null;
};

/**
 * Clears guest stats after they have been merged into an account.
 */
export const clearGuestStats = (): void => {
  try {
    localStorage.removeItem(GUEST_STORAGE_KEY);
  } catch (err) {
    console.warn('Error clearing guest stats:', err);
  }
};

/**
 * Calculates updated streak information based on the current date.
 */
export const calculateUpdatedStreak = (currentStats: UserStats): { streakDays: number; lastStudyDate: string } => {
  const today = new Date().toISOString().split('T')[0];
  const lastDate = currentStats.lastStudyDate;

  if (lastDate === today) {
    return {
      streakDays: currentStats.streakDays || 1,
      lastStudyDate: today,
    };
  }

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = yesterdayDate.toISOString().split('T')[0];

  const newStreak = lastDate === yesterday ? (currentStats.streakDays || 1) + 1 : 1;

  return {
    streakDays: newStreak,
    lastStudyDate: today,
  };
};

/**
 * Robustly merges guest/session stats into an account (e.g. upon user login).
 * Never discards progress; unions bookmarks, deduplicates exam attempts,
 * and preserves correct or newer question answers.
 */
export const mergeUserStats = (base: UserStats, incoming: UserStats): UserStats => {
  // 1. Merge completed questions
  const mergedQuestions: Record<string, QuestionAttempt> = {
    ...(base.completedQuestions || {})
  };

  if (incoming.completedQuestions) {
    Object.entries(incoming.completedQuestions).forEach(([qId, incomingAttempt]) => {
      const existing = mergedQuestions[qId];
      if (!existing) {
        mergedQuestions[qId] = incomingAttempt;
      } else {
        // If existing was incorrect but incoming is correct, upgrade it
        if (!existing.isCorrect && incomingAttempt.isCorrect) {
          mergedQuestions[qId] = incomingAttempt;
        } else if (existing.isCorrect === incomingAttempt.isCorrect) {
          // If both have same correctness, pick the newer timestamp if available
          const existingTime = existing.timestamp ? new Date(existing.timestamp).getTime() : 0;
          const incomingTime = incomingAttempt.timestamp ? new Date(incomingAttempt.timestamp).getTime() : 0;
          if (incomingTime >= existingTime) {
            mergedQuestions[qId] = incomingAttempt;
          }
        }
      }
    });
  }

  // 2. Merge flashcard mastery
  const mergedMastery = {
    ...(base.flashcardMastery || {}),
    ...(incoming.flashcardMastery || {})
  };

  // 3. Union bookmarks
  const mergedBookmarkedQuestions = Array.from(new Set([
    ...(base.bookmarkedQuestions || []),
    ...(incoming.bookmarkedQuestions || [])
  ]));

  const mergedBookmarkedFlashcards = Array.from(new Set([
    ...(base.bookmarkedFlashcards || []),
    ...(incoming.bookmarkedFlashcards || [])
  ]));

  const mergedBookmarkedChapters = Array.from(new Set([
    ...(base.bookmarkedChapters || []),
    ...(incoming.bookmarkedChapters || [])
  ]));

  // 4. Merge exam attempts (deduplicate by id, sort descending)
  const examMap = new Map<string, ExamAttempt>();
  (base.examAttempts || []).forEach(e => examMap.set(e.id, e));
  (incoming.examAttempts || []).forEach(e => examMap.set(e.id, e));
  const mergedExamAttempts = Array.from(examMap.values()).sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  // 5. Calculate streak
  const streakDays = Math.max(base.streakDays || 1, incoming.streakDays || 1);
  const today = new Date().toISOString().split('T')[0];

  return {
    ...base,
    completedQuestions: mergedQuestions,
    flashcardMastery: mergedMastery,
    bookmarkedQuestions: mergedBookmarkedQuestions,
    bookmarkedFlashcards: mergedBookmarkedFlashcards,
    bookmarkedChapters: mergedBookmarkedChapters,
    examAttempts: mergedExamAttempts,
    streakDays,
    lastStudyDate: today,
    profile: {
      ...base.profile,
      targetExamDate: base.profile?.targetExamDate || incoming.profile?.targetExamDate,
      role: base.profile?.role || incoming.profile?.role,
      institution: base.profile?.institution || incoming.profile?.institution,
    }
  };
};
