import React, { useState, useEffect } from 'react';
import { questionsData } from '../data/questions';
import { PracticeQuestion, QuestionAttempt } from '../types';
import { CheckCircle2, XCircle, Bookmark, HelpCircle, ArrowRight, Lightbulb, GraduationCap, BookOpen, FlaskConical, ClipboardList, Eye, Filter } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuestionBankProps {
  completedQuestions: Record<string, QuestionAttempt>;
  onCompleteQuestion: (questionId: string, selectedOption: string, isCorrect: boolean) => void;
  bookmarkedQuestions: string[];
  onToggleBookmarkQuestion: (questionId: string) => void;
}

export const QuestionBank: React.FC<QuestionBankProps> = ({
  completedQuestions,
  onCompleteQuestion,
  bookmarkedQuestions,
  onToggleBookmarkQuestion,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Filters State
  const [filterChapter, setFilterChapter] = useState<number | 'all'>('all');
  const [filterSource, setFilterSource] = useState<'all' | 'Past Board Exam' | 'Neuroimaging Case' | 'Syllabus Notes' | 'Landmark Trial' | 'Guideline Recommendation'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unanswered' | 'incorrect' | 'correct'>('all');

  const sourceCounts = {
    all: questionsData.length,
    'Past Board Exam': questionsData.filter(q => q.source === 'Past Board Exam' && !q.imageUrl).length,
    'Neuroimaging Case': questionsData.filter(q => !!q.imageUrl || q.source === 'Neuroimaging Case').length,
    'Landmark Trial': questionsData.filter(q => q.source === 'Landmark Trial').length,
    'Guideline Recommendation': questionsData.filter(q => q.source === 'Guideline Recommendation').length,
    'Syllabus Notes': questionsData.filter(q => q.source === 'Syllabus Notes').length,
  };

  const statusCounts = {
    all: questionsData.length,
    unanswered: questionsData.filter(q => !completedQuestions[q.id]).length,
    correct: questionsData.filter(q => completedQuestions[q.id]?.isCorrect).length,
    incorrect: questionsData.filter(q => completedQuestions[q.id] && !completedQuestions[q.id].isCorrect).length,
  };

  const filteredQuestions = questionsData.filter(q => {
    // Chapter filter
    if (filterChapter !== 'all' && q.chapterId !== filterChapter) return false;

    // Source filter
    if (filterSource !== 'all') {
      if (filterSource === 'Neuroimaging Case') {
        if (!q.imageUrl && q.source !== 'Neuroimaging Case') return false;
      } else if ((q.source || 'Syllabus Notes') !== filterSource) {
        return false;
      }
    }

    // Status filter (unanswered, correct, incorrect)
    const attempt = completedQuestions[q.id];
    if (filterStatus === 'unanswered' && attempt) return false;
    if (filterStatus === 'correct' && (!attempt || !attempt.isCorrect)) return false;
    if (filterStatus === 'incorrect' && (!attempt || attempt.isCorrect)) return false;

    return true;
  });

  const currentQuestion: PracticeQuestion | undefined = filteredQuestions[currentIndex];

  // Auto-restore previous user attempt if already answered
  useEffect(() => {
    if (currentQuestion && completedQuestions[currentQuestion.id]) {
      const attempt = completedQuestions[currentQuestion.id];
      setSelectedOption(attempt.selectedOption);
      setIsSubmitted(true);
      setShowHint(false);
    } else {
      setSelectedOption(null);
      setIsSubmitted(false);
      setShowHint(false);
    }
  }, [currentIndex, currentQuestion?.id, completedQuestions]);

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
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const renderSourceBadge = (source?: string, hasImage?: boolean) => {
    if (hasImage || source === 'Neuroimaging Case') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm">
          <Eye className="w-3.5 h-3.5 text-indigo-400" /> Neuroimaging & Radiology Case
        </span>
      );
    }

    switch (source) {
      case 'Past Board Exam':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <GraduationCap className="w-3.5 h-3.5" /> Past Board Exam Question
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

  // Safe non-spoiler tags display helper
  const getSafeDisplayTags = (q: PracticeQuestion, submitted: boolean) => {
    if (submitted) return q.tags;
    const optionTexts = q.options.map(o => o.text.toLowerCase());
    return q.tags.filter(tag => {
      const lowerTag = tag.toLowerCase();
      const isDirectMatch = optionTexts.some(opt => opt.includes(lowerTag) || lowerTag.includes(opt));
      return !isDirectMatch;
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Question Bank Header & Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 shadow-lg">
        <div>
          <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" /> Vascular Neurology Question Bank
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Board-style clinical vignettes with hints, radiology figures & rationale ({filteredQuestions.length} matching)
          </p>
        </div>

        {/* Filters Grid */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter (Unanswered, Correct, Incorrect) */}
          <select
            value={filterStatus}
            onChange={e => {
              setFilterStatus(e.target.value as any);
              setCurrentIndex(0);
            }}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:ring-cyan-500 font-medium"
          >
            <option value="all">All Progress Statuses ({statusCounts.all})</option>
            <option value="unanswered">⏳ Unanswered ({statusCounts.unanswered})</option>
            <option value="correct">✓ Correct ({statusCounts.correct})</option>
            <option value="incorrect">✗ Incorrect ({statusCounts.incorrect})</option>
          </select>

          {/* Source Filter */}
          <select
            value={filterSource}
            onChange={e => {
              setFilterSource(e.target.value as any);
              setCurrentIndex(0);
            }}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:ring-cyan-500 font-medium"
          >
            <option value="all">All Sources ({sourceCounts.all})</option>
            <option value="Past Board Exam">🎓 Past Board Exams ({sourceCounts['Past Board Exam']})</option>
            <option value="Neuroimaging Case">📷 Neuroimaging & Radiology ({sourceCounts['Neuroimaging Case']})</option>
            <option value="Landmark Trial">🔬 Landmark Trials ({sourceCounts['Landmark Trial']})</option>
            <option value="Guideline Recommendation">📋 AHA/ASA Guidelines ({sourceCounts['Guideline Recommendation']})</option>
            <option value="Syllabus Notes">📚 Syllabus Notes ({sourceCounts['Syllabus Notes']})</option>
          </select>

          {/* Chapter Filter */}
          <select
            value={filterChapter}
            onChange={e => {
              setFilterChapter(e.target.value === 'all' ? 'all' : Number(e.target.value));
              setCurrentIndex(0);
            }}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:ring-cyan-500 font-medium max-w-[190px]"
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
          <Filter className="w-8 h-8 text-slate-500 mx-auto" />
          <p className="text-slate-300 font-semibold text-base">No questions match the selected filter criteria.</p>
          <button
            onClick={() => { setFilterChapter('all'); setFilterSource('all'); setFilterStatus('all'); }}
            className="px-4 py-2 bg-cyan-500 text-white font-bold text-xs rounded-xl hover:bg-cyan-400"
          >
            Reset All Filters
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
              {completedQuestions[currentQuestion.id] && (
                <span className={`inline-flex items-center gap-1 font-bold ${completedQuestions[currentQuestion.id].isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {completedQuestions[currentQuestion.id].isCorrect ? (
                    <><CheckCircle2 className="w-3.5 h-3.5" /> Previously Answered Correctly</>
                  ) : (
                    <><XCircle className="w-3.5 h-3.5" /> Previously Answered Incorrectly</>
                  )}
                </span>
              )}

              <button
                onClick={() => onToggleBookmarkQuestion(currentQuestion.id)}
                className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors font-medium ml-2"
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
              {renderSourceBadge(currentQuestion.source, !!currentQuestion.imageUrl)}

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

                let optionStyle = 'bg-slate-900/90 border-slate-700 hover:border-slate-600 text-slate-200';
                if (isSelected && !isSubmitted) {
                  optionStyle = 'bg-cyan-950/50 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-500/10';
                } else if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-200 font-medium';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-rose-950/50 border-rose-500 text-rose-200';
                  } else {
                    optionStyle = 'bg-slate-900/40 border-slate-800 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={option.id}
                    disabled={isSubmitted}
                    onClick={() => handleSelectOption(option.id)}
                    className={`w-full p-4 rounded-2xl border text-left text-xs md:text-sm transition-all flex items-start space-x-3 ${optionStyle}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border ${
                        isSelected
                          ? isSubmitted
                            ? isCorrect
                              ? 'bg-emerald-500 text-white border-emerald-400'
                              : 'bg-rose-500 text-white border-rose-400'
                            : 'bg-cyan-500 text-white border-cyan-400'
                          : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      {option.id}
                    </span>

                    <span className="flex-1 leading-relaxed">{option.text}</span>

                    {isSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                    )}
                    {isSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Submit Button */}
            {!isSubmitted ? (
              <div className="pt-2">
                <button
                  disabled={!selectedOption}
                  onClick={handleSubmitAnswer}
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all shadow-lg ${
                    selectedOption
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/20'
                      : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                  }`}
                >
                  Confirm Answer & Submit
                </button>
              </div>
            ) : (
              /* Answer Rationale & Key Takeaway */
              <div className="space-y-4 pt-4 border-t border-slate-700/80 animate-fadeIn">
                <div
                  className={`p-5 rounded-2xl border space-y-3 ${
                    selectedOption === currentQuestion.correctOptionId
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                  }`}
                >
                  <div className="flex items-center space-x-2 font-extrabold text-sm">
                    {selectedOption === currentQuestion.correctOptionId ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-300">Correct! Choice {currentQuestion.correctOptionId} is the right answer.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-400" />
                        <span className="text-rose-300">Incorrect. Correct Answer: Choice {currentQuestion.correctOptionId}</span>
                      </>
                    )}
                  </div>

                  <p className="text-xs md:text-sm leading-relaxed text-slate-200">
                    {currentQuestion.explanation}
                  </p>
                </div>

                {/* Key Board Takeaway Box */}
                <div className="bg-cyan-950/40 border border-cyan-500/40 p-4 rounded-2xl text-xs space-y-1.5 shadow-sm">
                  <span className="font-extrabold text-cyan-300 uppercase tracking-wider block text-[11px]">
                    🎓 Key Board Takeaway:
                  </span>
                  <p className="text-slate-100 font-semibold leading-relaxed">
                    {currentQuestion.keyTakeaway}
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-700/60 text-xs">
              <button
                disabled={currentIndex === 0}
                onClick={handlePrevQuestion}
                className={`px-4 py-2 rounded-xl font-bold transition-all ${
                  currentIndex === 0
                    ? 'text-slate-600 cursor-not-allowed'
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                ← Previous Question
              </button>

              <span className="text-slate-400 font-medium">
                {currentIndex + 1} / {filteredQuestions.length}
              </span>

              <button
                disabled={currentIndex === filteredQuestions.length - 1}
                onClick={handleNextQuestion}
                className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                  currentIndex === filteredQuestions.length - 1
                    ? 'text-slate-600 cursor-not-allowed'
                    : 'bg-cyan-500 text-white hover:bg-cyan-400 shadow-md'
                }`}
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
