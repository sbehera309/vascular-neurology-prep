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

/**
 * Scans all candidate localStorage keys across previous sessions and merges them
 * to guarantee that previously completed questions (e.g. 95 questions) are recovered.
 */
export const recoverAllStoredStats = (userId?: string | null, fallbackStats?: UserStats): UserStats => {
  const base: UserStats = fallbackStats ? { ...fallbackStats } : {
    profile: {
      id: userId || 'user-default',
      name: 'Dr. Vascular Neurologist',
      email: 'fellow@stroke-prep.org',
      targetExamDate: '2026-10-15',
      role: 'Vascular Neurology Fellow',
      institution: 'Academic Medical Center',
      isLoggedIn: Boolean(userId && userId !== 'user-default'),
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

  const candidateKeys = new Set<string>();
  candidateKeys.add(LEGACY_STORAGE_KEY);
  candidateKeys.add(GUEST_STORAGE_KEY);
  candidateKeys.add('vascneuro_prep_stats_user-default');
  if (userId) {
    candidateKeys.add(getUserStorageKey(userId));
  }

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && (k.startsWith('vascneuro_prep_stats') || k === LEGACY_STORAGE_KEY)) {
        candidateKeys.add(k);
      }
    }
  } catch (err) {
    console.warn('Error reading localStorage keys for recovery:', err);
  }

  let aggregated = { ...base };

  candidateKeys.forEach(key => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          aggregated = mergeUserStats(aggregated, parsed);
        }
      }
    } catch (e) {
      console.warn(`Error reading key ${key} during recovery:`, e);
    }
  });

  if (userId && userId !== 'user-default') {
    aggregated.profile = {
      ...aggregated.profile,
      id: userId,
      isLoggedIn: true,
      ...(fallbackStats?.profile || {}),
    };
  }

  // Save the consolidated recovery to both the user's slot and the legacy slot
  const targetKey = getUserStorageKey(userId);
  try {
    localStorage.setItem(targetKey, JSON.stringify(aggregated));
    localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(aggregated));
  } catch (e) {
    console.warn('Error saving recovered stats:', e);
  }

  return aggregated;
};

/**
 * Loads session stats from localStorage for a specific user ID or guest.
 * Automatically checks for legacy or multi-session question history across all browser keys
 * to guarantee zero data loss.
 */
export const loadSessionStats = (userId: string | null, fallback: UserStats): UserStats => {
  try {
    const storageKey = getUserStorageKey(userId);
    const saved = localStorage.getItem(storageKey);
    let currentStats: UserStats | null = null;
    
    if (saved) {
      const parsed = JSON.parse(saved);
      currentStats = {
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

    const currentQCount = currentStats?.completedQuestions ? Object.keys(currentStats.completedQuestions).length : 0;

    // Scan all keys in localStorage to detect if any historical session has more progress
    let maxFoundQCount = 0;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('vascneuro_prep_stats') || k === LEGACY_STORAGE_KEY)) {
          const raw = localStorage.getItem(k);
          if (raw) {
            const parsed = JSON.parse(raw);
            const count = parsed?.completedQuestions ? Object.keys(parsed.completedQuestions).length : 0;
            if (count > maxFoundQCount) {
              maxFoundQCount = count;
            }
          }
        }
      }
    } catch {}

    // If another stored session has more completed questions than current slot, auto-recover!
    if (maxFoundQCount > currentQCount) {
      return recoverAllStoredStats(userId, currentStats || fallback);
    }

    if (currentStats) return currentStats;
    return recoverAllStoredStats(userId, fallback);
  } catch (err) {
    console.warn('Error loading session stats:', err);
  }
  return fallback;
};

/**
 * Saves user stats to the appropriate user or guest slot in localStorage.
 * Protects against accidental wipes by ensuring question count does not regress
 * unless an explicit reset is requested.
 */
export const saveSessionStats = (stats: UserStats, allowExplicitReset: boolean = false): void => {
  try {
    const isLoggedIn = Boolean(stats.profile?.isLoggedIn && stats.profile?.id && stats.profile.id !== 'user-default');
    const storageKey = getUserStorageKey(isLoggedIn ? stats.profile.id : null);

    let dataToSave = stats;
    if (!allowExplicitReset) {
      const existingRaw = localStorage.getItem(storageKey);
      if (existingRaw) {
        try {
          const parsed = JSON.parse(existingRaw);
          const existingQCount = parsed.completedQuestions ? Object.keys(parsed.completedQuestions).length : 0;
          const newQCount = stats.completedQuestions ? Object.keys(stats.completedQuestions).length : 0;
          if (existingQCount > newQCount) {
            dataToSave = mergeUserStats(parsed, stats);
          }
        } catch {}
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(dataToSave));

    // Also mirror to legacy key as a master safety net if question count is preserved
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyRaw && !allowExplicitReset) {
      try {
        const legacyParsed = JSON.parse(legacyRaw);
        const legacyQCount = legacyParsed?.completedQuestions ? Object.keys(legacyParsed.completedQuestions).length : 0;
        const newQCount = dataToSave.completedQuestions ? Object.keys(dataToSave.completedQuestions).length : 0;
        if (newQCount >= legacyQCount) {
          localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(dataToSave));
        }
      } catch {
        localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(dataToSave));
      }
    } else {
      localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(dataToSave));
    }

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
