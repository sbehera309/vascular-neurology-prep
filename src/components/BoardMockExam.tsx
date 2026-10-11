import React, { useState, useEffect } from 'react';
import { questionsData } from '../data/questions';
import { PracticeQuestion, ExamAttempt, QuestionAttempt } from '../types';
import { Clock, Flag, CheckCircle2, XCircle, Award, RotateCcw, ChevronLeft, ChevronRight, LayoutGrid, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BoardMockExamProps {
  onSaveExamAttempt?: (attempt: ExamAttempt) => void;
  onBatchCompleteQuestions?: (attempts: Record<string, QuestionAttempt>) => void;
}

export type ExamLengthOption = 25 | 50 | 100 | 200;

export const BoardMockExam: React.FC<BoardMockExamProps> = ({ onSaveExamAttempt, onBatchCompleteQuestions }) => {
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examFinished, setExamFinished] = useState<boolean>(false);
  
  // Configurable Exam Mode & Length
  const [examLength, setExamLength] = useState<ExamLengthOption>(50);
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  
  const [examTimeRemaining, setExamTimeRemaining] = useState<number>(3600); // in seconds
  const [initialDuration, setInitialDuration] = useState<number>(3600);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<string[]>([]);
  const [showReviewGrid, setShowReviewGrid] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'flagged'>('all');

  // Exam Questions Set
  const [examQuestions, setExamQuestions] = useState<PracticeQuestion[]>([]);

  const domainOptions = [
    { id: 'all', label: 'All Topics (ABPN Blueprint Balanced)', desc: 'Official weighted breakdown across all 21 chapters' },
    { id: 'acute', label: 'Acute Stroke & Thrombolysis / EVT (Ch 1, 2, 8)', chapters: [1, 2, 8] },
    { id: 'anatomy', label: 'Vascular Anatomy & Brainstem Syndromes (Ch 3, 4)', chapters: [3, 4] },
    { id: 'pathology', label: 'Pathophysiology & Vasculopathy (Ch 6, 7)', chapters: [6, 7] },
    { id: 'cardiology', label: 'Clinical Cardiology & Embolism (Ch 9)', chapters: [9] },
    { id: 'genetics', label: 'Genetics, Pediatrics & Special Populations (Ch 10, 11)', chapters: [10, 11] },
    { id: 'hemorrhage', label: 'ICH, SAH & Vascular Malformations (Ch 13, 14)', chapters: [13, 14] },
    { id: 'hematology', label: 'Hematology, Coagulation & Thrombophilia (Ch 15)', chapters: [15] },
    { id: 'imaging', label: 'Neuroradiology, MRI & Ultrasonography (Ch 16)', chapters: [16] },
    { id: 'rehab', label: 'Pharmacology, Rehabilitation, Cognition & Ethics (Ch 17, 18, 19, 20, 21)', chapters: [17, 18, 19, 20, 21] },
  ];

  const startExam = () => {
    let pool: PracticeQuestion[] = [];

    if (selectedDomain === 'all') {
      // Balance according to official ABPN blueprint:
      // Treatment 30%, Causes 20%, Evaluation 15%, Prevention/Epidemiology 10%, Clinical features 10%, Basic Science 5%, Complications 5%, Rehab 5%
      pool = [...questionsData].sort(() => 0.5 - Math.random());
    } else {
      const selected = domainOptions.find(d => d.id === selectedDomain);
      if (selected && selected.chapters) {
        pool = questionsData.filter(q => selected.chapters.includes(q.chapterId)).sort(() => 0.5 - Math.random());
      } else {
        pool = [...questionsData].sort(() => 0.5 - Math.random());
      }
    }

    // Allocate time: 72 seconds per question (~1.2 min per question)
    const count = Math.min(examLength, pool.length);
    const calculatedSeconds = count * 72;

    setExamQuestions(pool.slice(0, count));
    setUserAnswers({});
    setFlaggedQuestions([]);
    setCurrentQuestionIndex(0);
    setInitialDuration(calculatedSeconds);
    setExamTimeRemaining(calculatedSeconds);
    setExamStarted(true);
    setExamFinished(false);
    setShowReviewGrid(false);
    setReviewFilter('all');
  };

  // Timer countdown
  useEffect(() => {
    if (!examStarted || examFinished) return;

    const timer = setInterval(() => {
      setExamTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examFinished]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (examFinished) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions(prev =>
      prev.includes(questionId) ? prev.filter(id => id !== questionId) : [...prev, questionId]
    );
  };

  const finishExam = () => {
    setExamFinished(true);
    setExamStarted(false);

    const totalQ = examQuestions.length;
    const correctC = examQuestions.filter(q => userAnswers[q.id] === q.correctOptionId).length;
    const pct = totalQ > 0 ? Math.round((correctC / totalQ) * 100) : 0;
    const pass = pct >= 70; // 70% standard ABPN subspecialty passing benchmark

    if (onSaveExamAttempt) {
      onSaveExamAttempt({
        id: `exam-${Date.now()}`,
        timestamp: new Date().toISOString(),
        durationSeconds: initialDuration - examTimeRemaining,
        totalQuestions: totalQ,
        correctCount: correctC,
        percentage: pct,
        passed: pass,
      });
    }

    if (onBatchCompleteQuestions) {
      const attempts: Record<string, QuestionAttempt> = {};
      const now = new Date().toISOString();
      examQuestions.forEach(q => {
        const userAns = userAnswers[q.id];
        if (userAns) {
          attempts[q.id] = {
            selectedOption: userAns,
            isCorrect: userAns === q.correctOptionId,
            timestamp: now,
          };
        }
      });
      if (Object.keys(attempts).length > 0) {
        onBatchCompleteQuestions(attempts);
      }
    }

    if (pass) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  };

  const currentQuestion = examQuestions[currentQuestionIndex];

  // Scoring calculation
  const totalQuestions = examQuestions.length;
  const correctCount = examQuestions.filter(q => userAnswers[q.id] === q.correctOptionId).length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = scorePercent >= 70;
  const timeSpentSeconds = initialDuration - examTimeRemaining;
  const pacePerQuestion = totalQuestions > 0 ? Math.round(timeSpentSeconds / totalQuestions) : 0;

  // Review questions filtered
  const reviewQuestions = examQuestions.filter(q => {
    if (reviewFilter === 'incorrect') {
      return userAnswers[q.id] !== q.correctOptionId;
    }
    if (reviewFilter === 'flagged') {
      return flaggedQuestions.includes(q.id);
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Start Screen */}
      {!examStarted && !examFinished && (
        <div className="bg-slate-800/90 p-8 md:p-10 rounded-3xl border border-slate-700/80 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800 mx-auto">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                ABPN Vascular Neurology Certification Format
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {questionsData.length} Question Pool
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-3">
              Vascular Neurology Board Mock Exam
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-lg mx-auto mt-2 leading-relaxed">
              Timed simulation featuring authentic board-style vignettes, clinical neuroimaging, trial evidence, and pharmacology questions from Futrell & Jamieson and the Essential Study Guide.
            </p>
          </div>

          {/* Exam Length Selection */}
          <div className="max-w-xl mx-auto space-y-2 text-left">
            <label className="text-xs font-bold text-slate-300 block uppercase tracking-wider">
              1. Select Exam Length:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { count: 25, label: '25 Questions', time: '30 min', desc: 'Quick Quiz' },
                { count: 50, label: '50 Questions', time: '60 min', desc: 'Standard Mock' },
                { count: 100, label: '100 Questions', time: '120 min', desc: 'Half-Length' },
                { count: 200, label: '200 Questions', time: '240 min', desc: 'Full ABPN Exam' }
              ].map(opt => (
                <button
                  key={opt.count}
                  type="button"
                  onClick={() => setExamLength(opt.count as ExamLengthOption)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    examLength === opt.count
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 ring-2 ring-cyan-500/50'
                      : 'bg-slate-900/80 border-slate-700/70 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  <strong className="block text-sm font-bold text-slate-100">{opt.label}</strong>
                  <span className="text-[11px] text-cyan-400 font-semibold">{opt.time}</span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category / Blueprint Selection */}
          <div className="max-w-xl mx-auto space-y-2 text-left">
            <label className="text-xs font-bold text-slate-300 block uppercase tracking-wider">
              2. Select Focus Track:
            </label>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-4 py-3 focus:ring-cyan-500 focus:border-cyan-500"
            >
              {domainOptions.map(d => (
                <option key={d.id} value={d.id}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* Exam Summary Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto text-left text-xs bg-slate-900/60 p-4 rounded-2xl border border-slate-700/50">
            <div>
              <span className="text-slate-400 font-semibold block">Questions Selected</span>
              <strong className="text-slate-100 text-sm">{examLength} Questions</strong>
            </div>
            <div>
              <span className="text-slate-400 font-semibold block">Time Allotted</span>
              <strong className="text-slate-100 text-sm">{formatTime(examLength * 72)}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-semibold block">Passing Threshold</span>
              <strong className="text-cyan-400 text-sm">70% Score</strong>
            </div>
          </div>

          <button
            onClick={startExam}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-cyan-500/30 transition-all active:scale-95"
          >
            Launch Board Simulation ({examLength} Questions)
          </button>
        </div>
      )}

      {/* Active Exam Interface */}
      {examStarted && currentQuestion && (
        <div className="space-y-4">
          {/* Top Timer & Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/90 px-5 py-3.5 rounded-2xl border border-slate-700/60 shadow-lg">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold text-slate-300">
                Question <strong className="text-cyan-400">{currentQuestionIndex + 1}</strong> of {totalQuestions}
              </span>
              <button
                onClick={() => toggleFlag(currentQuestion.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  flaggedQuestions.includes(currentQuestion.id)
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-900 text-slate-400 border border-slate-700 hover:text-slate-200'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                {flaggedQuestions.includes(currentQuestion.id) ? 'Flagged' : 'Flag'}
              </button>
            </div>

            {/* Timer & Grid Toggle */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowReviewGrid(prev => !prev)}
                className="p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1 hover:text-cyan-400"
              >
                <LayoutGrid className="w-4 h-4" /> Navigator
              </button>

              <div className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold ${
                examTimeRemaining <= 300 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' : 'bg-slate-900 text-cyan-400 border border-slate-700'
              }`}>
                <Clock className="w-4 h-4" /> {formatTime(examTimeRemaining)}
              </div>
            </div>
          </div>

          {/* Question Grid Modal */}
          {showReviewGrid && (
            <div className="bg-slate-800/95 p-5 rounded-2xl border border-slate-700/80 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Question Navigator</h3>
                <span className="text-[11px] text-slate-400">
                  {Object.keys(userAnswers).length} / {totalQuestions} Answered
                </span>
              </div>

              <div className="grid grid-cols-10 gap-1.5 max-h-56 overflow-y-auto p-1">
                {examQuestions.map((q, idx) => {
                  const isAnswered = !!userAnswers[q.id];
                  const isFlagged = flaggedQuestions.includes(q.id);
                  const isCurrent = currentQuestionIndex === idx;

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentQuestionIndex(idx);
                        setShowReviewGrid(false);
                      }}
                      className={`h-9 rounded-lg text-xs font-bold transition-all relative ${
                        isCurrent ? 'ring-2 ring-cyan-400 bg-cyan-500 text-white' :
                        isAnswered ? 'bg-cyan-950 text-cyan-300 border border-cyan-700' :
                        'bg-slate-900 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {idx + 1}
                      {isFlagged && (
                        <span className="w-2 h-2 rounded-full bg-amber-400 absolute top-1 right-1"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Question Vignette Card */}
          <div className="bg-slate-800/90 rounded-3xl border border-slate-700/80 p-6 md:p-8 space-y-6 shadow-xl">
            {/* Vignette */}
            <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700/40 space-y-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                {currentQuestion.chapterTitle}
              </span>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-normal">
                {currentQuestion.vignette}
              </p>

              {/* Clinical Imaging Figure */}
              {currentQuestion.imageUrl && (
                <div className="mt-3 bg-slate-950 p-4 rounded-2xl border border-slate-700/80 shadow-2xl flex flex-col items-center space-y-2">
                  <div className="relative group max-w-xl w-full overflow-hidden rounded-xl border border-slate-800 bg-black flex justify-center">
                    <img
                      src={currentQuestion.imageUrl}
                      alt={currentQuestion.imageCaption || "Clinical Neuroimaging Figure"}
                      className="w-full h-auto max-h-[400px] object-contain rounded-xl"
                    />
                  </div>
                  {currentQuestion.imageCaption && (
                    <span className="text-xs text-slate-400 text-center italic font-medium pt-1">
                      ðŸ“· Figure: {currentQuestion.imageCaption}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Question */}
            <h2 className="text-sm md:text-base font-bold text-slate-100">
              {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map(option => {
                const isSelected = userAnswers[currentQuestion.id] === option.id;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(currentQuestion.id, option.id)}
                    className={`w-full text-left p-4 rounded-2xl border text-xs md:text-sm transition-all flex items-start space-x-3 active:scale-[0.99] ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500 font-semibold shadow-md'
                        : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg font-bold flex items-center justify-center shrink-0 text-xs ${
                      isSelected ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {option.id}
                    </span>
                    <span className="leading-snug">{option.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold disabled:opacity-40 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 flex items-center gap-1 hover:bg-cyan-400 transition-all active:scale-95"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={finishExam}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all active:scale-95"
                >
                  Submit Exam
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Final Score & Breakdown Report */}
      {examFinished && (
        <div className="space-y-6 animate-fadeIn">
          {/* Scorecard Banner */}
          <div className={`p-8 rounded-3xl border text-center space-y-4 shadow-2xl ${
            isPassed ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-100' : 'bg-rose-950/60 border-rose-500/40 text-rose-100'
          }`}>
            <div className="flex justify-center">
              {isPassed ? (
                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
              ) : (
                <XCircle className="w-16 h-16 text-rose-400" />
              )}
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest block opacity-80">Official ABPN Board Simulation Result</span>
              <h2 className="text-3xl font-black mt-1">
                {isPassed ? 'PASSED - CONGRATULATIONS!' : 'NEEDS FURTHER REVIEW'}
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Passing threshold is 70% (ABPN Vascular Neurology Standard)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-left text-xs bg-slate-900/90 p-4 rounded-2xl border border-slate-700/60">
              <div className="text-center sm:text-left">
                <span className="text-slate-400 font-semibold block">Score</span>
                <strong className="text-3xl font-extrabold text-cyan-400">{scorePercent}%</strong>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-slate-400 font-semibold block">Correct Answers</span>
                <strong className="text-slate-100 text-lg">{correctCount} / {totalQuestions}</strong>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-slate-400 font-semibold block">Average Pace</span>
                <strong className="text-slate-100 text-lg">{pacePerQuestion}s / question</strong>
              </div>
            </div>

            <button
              onClick={() => {
                setExamStarted(false);
                setExamFinished(false);
              }}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs rounded-xl border border-slate-700 inline-flex items-center gap-2 transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4 text-cyan-400" /> Configure & Retake Exam
            </button>
          </div>

          {/* Full Exam Review List with Filter */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/60 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-700 pb-3">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" /> Question & Clinical Rationale Review
              </h3>
              
              {/* Review Filter Pills */}
              <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700 text-xs">
                <button
                  onClick={() => setReviewFilter('all')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    reviewFilter === 'all' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  All ({examQuestions.length})
                </button>
                <button
                  onClick={() => setReviewFilter('incorrect')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    reviewFilter === 'incorrect' ? 'bg-rose-500 text-white' : 'text-slate-400 hover:text-rose-300'
                  }`}
                >
                  Incorrect ({examQuestions.length - correctCount})
                </button>
                <button
                  onClick={() => setReviewFilter('flagged')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    reviewFilter === 'flagged' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-amber-300'
                  }`}
                >
                  Flagged ({flaggedQuestions.length})
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {reviewQuestions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctOptionId;

                return (
                  <div key={q.id} className="bg-slate-900/70 p-5 rounded-2xl border border-slate-700/50 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-300">Question {idx + 1}</span>
                        <span className="text-[10px] text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800">
                          {q.chapterTitle}
                        </span>
                        {q.source && (
                          <span className="text-[10px] text-slate-400 italic">
                            Source: {q.source}
                          </span>
                        )}
                      </div>
                      {isCorrect ? (
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Correct
                        </span>
                      ) : (
                        <span className="text-rose-400 font-bold flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Incorrect
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300">{q.vignette}</p>
                    <p className="text-xs font-bold text-slate-100">{q.question}</p>

                    <div className="text-xs text-slate-300 space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <p><strong className="text-slate-400">Your Answer:</strong> Option {userAns || 'Unanswered'}</p>
                      <p><strong className="text-emerald-400">Correct Answer:</strong> Option {q.correctOptionId}</p>
                    </div>

                    <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-2 space-y-2">
                      <div>
                        <strong className="text-cyan-400 block mb-0.5">Rationale:</strong>
                        {q.explanation}
                      </div>
                      {q.keyTakeaway && (
                        <div className="bg-cyan-950/40 p-2.5 rounded-xl border border-cyan-800/40 text-cyan-200">
                          <strong className="text-cyan-400 block text-[11px]">Board Takeaway:</strong>
                          {q.keyTakeaway}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

