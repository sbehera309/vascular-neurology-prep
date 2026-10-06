import React, { useState } from 'react';
import { questionsData } from '../data/questions';
import { PracticeQuestion } from '../types';
import { CheckCircle2, XCircle, Bookmark, HelpCircle, ArrowRight, Lightbulb, GraduationCap, BookOpen, FlaskConical, ClipboardList, Eye } from 'lucide-react';
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
  const [showHint, setShowHint] = useState<boolean>(false);
  const [filterChapter, setFilterChapter] = useState<number | 'all'>('all');
  const [filterSource, setFilterSource] = useState<'all' | 'Past Board Exam' | 'Syllabus Notes' | 'Landmark Trial' | 'Guideline Recommendation'>('all');

  const filteredQuestions = questionsData.filter(q => {
    if (filterChapter !== 'all' && q.chapterId !== filterChapter) return false;
    if (filterSource !== 'all' && (q.source || 'Syllabus Notes') !== filterSource) return false;
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
    setShowHint(false);
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setSelectedOption(null);
      setIsSubmitted(false);
      setShowHint(false);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const renderSourceBadge = (source?: string) => {
    switch (source) {
      case 'Past Board Exam':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <GraduationCap className="w-3.5 h-3.5" /> Past Board Exam Recall
          </span>
        );
      case 'Landmark Trial':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
            <FlaskConical className="w-3.5 h-3.5" /> Landmark Trial Question
          </span>
        );
      case 'Guideline Recommendation':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <ClipboardList className="w-3.5 h-3.5" /> AHA/ASA Guidelines
          </span>
        );
      case 'Syllabus Notes':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            <BookOpen className="w-3.5 h-3.5" /> Syllabus Notes High-Yield
          </span>
        );
    }
  };

  // Helper to filter out spoiler tags before answer submission
  const getSafeDisplayTags = (q: PracticeQuestion, submitted: boolean) => {
    if (submitted) return q.tags;
    
    // Hide tags that match any option text or contain specific diagnosis answers
    const optionTexts = q.options.map(o => o.text.toLowerCase());
    return q.tags.filter(tag => {
      const lowerTag = tag.toLowerCase();
      const isDirectMatch = optionTexts.some(opt => opt.includes(lowerTag) || lowerTag.includes(opt));
      return !isDirectMatch;
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Question Bank Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 shadow-lg">
        <div>
          <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" /> Vascular Neurology Board Questions
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Board-style clinical vignettes with hints, source badges & rationales ({filteredQuestions.length} matching)
          </p>
        </div>

        {/* Filters Grid */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Source Filter */}
          <select
            value={filterSource}
            onChange={e => {
              setFilterSource(e.target.value as any);
              setCurrentIndex(0);
              setSelectedOption(null);
              setIsSubmitted(false);
              setShowHint(false);
            }}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:ring-cyan-500 font-medium"
          >
            <option value="all">All Sources ({questionsData.length})</option>
            <option value="Past Board Exam">🎓 Past Board Exams</option>
            <option value="Syllabus Notes">📚 Syllabus Notes</option>
            <option value="Landmark Trial">🔬 Landmark Trials</option>
            <option value="Guideline Recommendation">📋 AHA/ASA Guidelines</option>
          </select>

          {/* Chapter Filter */}
          <select
            value={filterChapter}
            onChange={e => {
              setFilterChapter(e.target.value === 'all' ? 'all' : Number(e.target.value));
              setCurrentIndex(0);
              setSelectedOption(null);
              setIsSubmitted(false);
              setShowHint(false);
            }}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:ring-cyan-500 font-medium max-w-[200px]"
          >
            <option value="all">All Chapters</option>
            <option value={1}>Ch 1: Code Stroke Assessment</option>
            <option value={2}>Ch 2: Initial Stroke Evaluation</option>
            <option value={3}>Ch 3: Vascular Neuroanatomy</option>
            <option value={4}>Ch 4: Ischemic Syndromes</option>
            <option value={5}>Ch 5: Posterior Circulation</option>
            <option value={6}>Ch 6: Lacunar Syndromes</option>
            <option value={7}>Ch 7: TOAST Classification</option>
            <option value={8}>Ch 8: Thrombectomy & LVO</option>
            <option value={9}>Ch 9: Intracranial Atherosclerosis</option>
            <option value={10}>Ch 10: Genetic Vasculopathies</option>
            <option value={11}>Ch 11: Carotid Stenosis</option>
            <option value={12}>Ch 12: Cardioembolic & AFib</option>
            <option value={13}>Ch 13: Intracranial Hemorrhage</option>
            <option value={14}>Ch 14: Subarachnoid Hemorrhage</option>
            <option value={15}>Ch 15: Pediatric Stroke</option>
            <option value={16}>Ch 16: Cerebral Venous Thrombosis</option>
            <option value={17}>Ch 17: Vascular Malformations</option>
            <option value={18}>Ch 18: Neuro-ICU & Hemodynamics</option>
            <option value={19}>Ch 19: Secondary Prevention</option>
            <option value={20}>Ch 20: Rehabilitation</option>
            <option value={21}>Ch 21: Clinical Trials</option>
          </select>
        </div>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="bg-slate-800/80 rounded-3xl border border-slate-700 p-12 text-center space-y-3">
          <p className="text-slate-300 font-semibold text-base">No questions match the selected filter criteria.</p>
          <button
            onClick={() => { setFilterChapter('all'); setFilterSource('all'); }}
            className="px-4 py-2 bg-cyan-500 text-white font-bold text-xs rounded-xl hover:bg-cyan-400"
          >
            Reset Filters
          </button>
        </div>
      ) : currentQuestion && (
        <div className="space-y-6">
          {/* Question Status Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-200">
                Question {currentIndex + 1} of {filteredQuestions.length}
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 font-medium">{currentQuestion.chapterTitle}</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => onToggleBookmarkQuestion(currentQuestion.id)}
                className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors font-medium"
              >
                <Bookmark className={`w-4 h-4 ${bookmarkedQuestions.includes(currentQuestion.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                <span>{bookmarkedQuestions.includes(currentQuestion.id) ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>
          </div>

          {/* Vignette & Question Card */}
          <div className="bg-slate-800/90 rounded-3xl border border-slate-700/80 p-6 md:p-8 space-y-6 shadow-xl relative">
            {/* Source & Tags Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-4">
              {/* Question Source Indicator */}
              {renderSourceBadge(currentQuestion.source)}

              {/* Topic Tags (Non-spoiling) */}
              <div className="flex flex-wrap gap-1.5">
                {getSafeDisplayTags(currentQuestion, isSubmitted).map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase bg-slate-900 text-cyan-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Clinical Vignette */}
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-700/50 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block">Clinical Presentation</span>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed font-normal">
                {currentQuestion.vignette}
              </p>

              {/* Clinical Imaging Figure */}
              {currentQuestion.imageUrl && (
                <div className="mt-4 bg-slate-950 p-4 md:p-5 rounded-2xl border border-slate-700/80 shadow-2xl flex flex-col items-center space-y-2">
                  <div className="relative group max-w-xl w-full overflow-hidden rounded-xl border border-slate-800 bg-black flex justify-center">
                    <img
                      src={currentQuestion.imageUrl}
                      alt={currentQuestion.imageCaption || "Board Clinical Radiology Figure"}
                      className="w-full h-auto max-h-[460px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] font-extrabold text-cyan-300 flex items-center gap-1.5 border border-cyan-500/40 shadow-lg">
                      <Eye className="w-3.5 h-3.5" /> Clinical Neuroimaging Figure
                    </div>
                  </div>
                  {currentQuestion.imageCaption && (
                    <span className="text-xs text-slate-400 text-center italic font-medium pt-1">
                      📷 Figure: {currentQuestion.imageCaption}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Question Stem */}
            <h2 className="text-base md:text-lg font-bold text-slate-100 leading-snug">
              {currentQuestion.question}
            </h2>

            {/* Hint Button */}
            {currentQuestion.hint && (
              <div>
                <button
                  onClick={() => setShowHint(prev => !prev)}
                  className="flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 bg-amber-950/40 border border-amber-500/30 px-3.5 py-2 rounded-xl transition-all shadow-sm"
                >
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  {showHint ? 'Hide Hint' : '💡 Need a Hint? Click to reveal clinical clue'}
                </button>

                {showHint && (
                  <div className="mt-3 p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-amber-200 text-xs leading-relaxed flex items-start gap-3 animate-fadeIn shadow-inner">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-300 font-extrabold text-xs uppercase tracking-wider mb-1">
                        Board Exam Hint:
                      </strong>
                      <p className="text-amber-100">{currentQuestion.hint}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Answer Choice Options */}
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

            {/* Navigation & Submit Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
              <button
                onClick={handlePrevQuestion}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-400 text-xs font-semibold disabled:opacity-40 hover:text-slate-200 transition-colors"
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

          {/* Detailed Explanation Banner */}
          {isSubmitted && (
            <div className="bg-slate-800/90 rounded-3xl border border-slate-700/80 p-6 space-y-4 animate-fadeIn shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                {selectedOption === currentQuestion.correctOptionId ? (
                  <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                    <CheckCircle2 className="w-5 h-5" /> Correct Answer!
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-rose-400 font-extrabold text-sm">
                    <XCircle className="w-5 h-5" /> Incorrect — Correct Option is ({currentQuestion.correctOptionId})
                  </div>
                )}
              </div>

              <div className="space-y-3 text-xs md:text-sm text-slate-300 leading-relaxed pt-1">
                <h4 className="font-bold text-slate-100 uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-cyan-400" /> Detailed Board Rationale:
                </h4>
                <p className="whitespace-pre-line text-slate-200 leading-relaxed">{currentQuestion.explanation}</p>
              </div>

              {/* Key Board Takeaway */}
              <div className="bg-cyan-950/60 p-4 rounded-2xl border border-cyan-500/30 text-xs text-cyan-200 font-medium mt-2 shadow-inner">
                <span className="font-extrabold text-cyan-300 block mb-1 uppercase tracking-wider text-[11px]">
                  💡 High-Yield Board Takeaway:
                </span>
                {currentQuestion.keyTakeaway}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
