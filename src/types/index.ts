export interface Flashcard {
  id: string;
  chapterId: number;
  chapterTitle: string;
  question: string;
  answer: string;
  explanation?: string;
  highYieldTag?: string;
  masteryLevel?: 'new' | 'learning' | 'mastered';
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface PracticeQuestion {
  id: string;
  chapterId: number;
  chapterTitle: string;
  vignette: string;
  question: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  keyTakeaway: string;
  tags: string[];
  hint?: string;
  source?: 'Past Board Exam' | 'Syllabus Notes' | 'Landmark Trial' | 'Guideline Recommendation';
}

export interface ClinicalTrial {
  id: string;
  name: string;
  year: number;
  category: 'Acute Ischemic' | 'Thrombectomy' | 'Antiplatelets' | 'Carotid Stenosis' | 'PFO' | 'Cardioembolic/AF' | 'ICH/Stroke Prevention' | 'Pediatrics/Hematology';
  population: string;
  intervention: string;
  control: string;
  primaryOutcome: string;
  keyResults: string;
  boardTakeaway: string;
}

export interface HighYieldTopic {
  title: string;
  content: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  pearls?: string[];
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  iconName: string;
  topics: HighYieldTopic[];
}

export interface UserStats {
  completedQuestions: Record<string, { selectedOption: string; isCorrect: boolean }>;
  flashcardMastery: Record<string, 'again' | 'hard' | 'good' | 'easy'>;
  bookmarkedFlashcards: string[];
  bookmarkedQuestions: string[];
  bookmarkedChapters: number[];
  streakDays: number;
  lastStudyDate: string;
}
