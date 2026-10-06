import React, { useState } from 'react';
import { questionsData } from '../data/questions';
import { PracticeQuestion } from '../types';
import { CheckCircle2, XCircle, Bookmark, HelpCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuestionBankProps {
  completedQuestions: Record<string, { selectedOption: string; isCorrect: boolean }>;
  onCompleteQuestion: (questionId: string, selectedOption: string, isCorrect: boolean) => void;
  bookmarkedQuestions: string[];
  onToggleBookmarkQuestion: (questionId: string) => void;
}

export const QuestionBank: React.FC<QuestionBankProps> = ({
  completedQuestions: _completedQuestions,
  onCompleteQuestion,
  bookmarkedQuestions,
  onToggleBookmarkQuestion,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [filterChapter, setFilterChapter] = useState<number | 'all'>('all');

  const filteredQuestions = questionsData.filter(q => {
    if (filterChapter !== 'all' && q.chapterId !== filterChapter) return false;
    return true;
  });

  const currentQuestion: PracticeQuestion | undefined = filteredQuestions[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedOption(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || !currentQuestion) return;
    setIsSubmitted(true);
    const isCorrect = selectedOption === currentQuestion.correctOptionId;
    onCompleteQuestion(currentQuestion.id, selectedOption, isCorrect);

    if (isCorrect) {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setSelectedOption(null);
      setIsSubmitted(false);
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Question Bank Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60">
        <div>
          <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" /> Vascular Neurology Board Questions
          </h1>
          <p className="text-xs text-slate-400">High-yield clinical vignette board practice questions with rationales</p>
        </div>

        {/* Filter */}
        <select
          value={filterChapter}
          onChange={e => {
            setFilterChapter(e.target.value === 'all' ? 'all' : Number(e.target.value));
            setCurrentIndex(0);
            setSelectedOption(null);
            setIsSubmitted(false);
          }}
          className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:ring-cyan-500 max-w-[220px]"
        >
          <option value="all">All Topics ({questionsData.length} questions)</option>
          <option value={8}>Acute Stroke & Thrombectomy</option>
          <option value={4}>Stroke Syndromes</option>
          <option value={7}>Classification & Vasculopathy</option>
          <option value={10}>Genetic Stroke Syndromes</option>
          <option value={13}>Intracranial Hemorrhage</option>
          <option value={15}>Pediatric & Hematology</option>
        </select>
      </div>

      {currentQuestion && (
        <div className="space-y-6">
          {/* Question Status Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="font-semibold text-slate-300">
              Question {currentIndex + 1} of {filteredQuestions.length}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onToggleBookmarkQuestion(currentQuestion.id)}
                className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Bookmark className={`w-4 h-4 ${bookmarkedQuestions.includes(currentQuestion.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                <span>{bookmarkedQuestions.includes(currentQuestion.id) ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>
          </div>

          {/* Vignette & Question Stem Card */}
          <div className="bg-slate-800/90 rounded-3xl border border-slate-700/80 p-6 md:p-8 space-y-6 shadow-xl">
            {/* Topic Tag */}
            <div className="flex flex-wrap gap-1.5">
              {currentQuestion.tags.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {tag}
                </span>
              ))}
            </div>

            {/* Vignette */}
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-normal bg-slate-900/50 p-5 rounded-2xl border border-slate-700/40">
              {currentQuestion.vignette}
            </p>

            {/* Question Prompt */}
            <h2 className="text-base md:text-lg font-bold text-slate-100">
              {currentQuestion.question}
            </h2>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map(option => {
                const isSelected = selectedOption === option.id;
                const isCorrect = option.id === currentQuestion.correctOptionId;

                let optionStyle = 'bg-slate-900/80 text-slate-200 border-slate-700 hover:border-slate-500';

                if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-500/20 text-emerald-200 border-emerald-500 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-500/20 text-rose-200 border-rose-500 font-semibold';
                  } else {
                    optionStyle = 'bg-slate-900/40 text-slate-500 border-slate-800 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-cyan-500/20 text-cyan-200 border-cyan-500 font-semibold shadow-md';
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-4 rounded-2xl border text-xs md:text-sm transition-all flex items-start space-x-3 ${optionStyle}`}
                  >
                    <span className={`w-6 h-6 rounded-lg font-bold flex items-center justify-center shrink-0 text-xs ${
                      isSubmitted && isCorrect ? 'bg-emerald-500 text-white' :
                      isSubmitted && isSelected && !isCorrect ? 'bg-rose-500 text-white' :
                      isSelected ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {option.id}
                    </span>
                    <span className="leading-snug">{option.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Submit / Next Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
              <button
                onClick={handlePrevQuestion}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-xl bg-slate-900 text-slate-400 text-xs font-medium disabled:opacity-40"
              >
                Previous
              </button>

              {!isSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOption}
                  className="px-6 py-3 rounded-xl bg-cyan-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 disabled:opacity-40 hover:bg-cyan-400 transition-all"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  disabled={currentIndex === filteredQuestions.length - 1}
                  className="px-6 py-3 rounded-xl bg-cyan-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 flex items-center gap-1.5 hover:bg-cyan-400 transition-all"
                >
                  Next Question <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Explanation Banner */}
          {isSubmitted && (
            <div className="bg-slate-800/90 rounded-3xl border border-slate-700/80 p-6 space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2">
                {selectedOption === currentQuestion.correctOptionId ? (
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" /> Correct Answer!
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                    <XCircle className="w-5 h-5" /> Incorrect (Option {currentQuestion.correctOptionId} is correct)
                  </div>
                )}
              </div>

              <div className="space-y-3 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-slate-700/50 pt-3">
                <h4 className="font-bold text-slate-100 uppercase tracking-wider text-xs">Detailed Rationale:</h4>
                <p className="whitespace-pre-line">{currentQuestion.explanation}</p>
              </div>

              {/* Key Takeaway Banner */}
              <div className="bg-cyan-950/60 p-4 rounded-xl border border-cyan-500/30 text-xs text-cyan-200 font-medium">
                <span className="font-extrabold text-cyan-300 block mb-1">KEY BOARD TAKEAWAY:</span>
                {currentQuestion.keyTakeaway}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
