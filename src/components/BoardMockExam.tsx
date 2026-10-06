import React, { useState, useEffect } from 'react';
import { questionsData } from '../data/questions';
import { PracticeQuestion } from '../types';
import { Clock, Flag, CheckCircle2, XCircle, Award, RotateCcw, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BoardMockExam: React.FC = () => {
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examFinished, setExamFinished] = useState<boolean>(false);
  const [examTimeRemaining, setExamTimeRemaining] = useState<number>(3600); // 60 minutes (3600s)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<string[]>([]);
  const [showReviewGrid, setShowReviewGrid] = useState<boolean>(false);

  // Exam Questions Set (50 board questions)
  const [examQuestions, setExamQuestions] = useState<PracticeQuestion[]>([]);

  const startExam = () => {
    // Select 50 questions or full set
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled.slice(0, 50));
    setUserAnswers({});
    setFlaggedQuestions([]);
    setCurrentQuestionIndex(0);
    setExamTimeRemaining(3600);
    setExamStarted(true);
    setExamFinished(false);
    setShowReviewGrid(false);
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
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
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
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
  };

  const currentQuestion = examQuestions[currentQuestionIndex];

  // Scoring calculation
  const totalQuestions = examQuestions.length;
  const correctCount = examQuestions.filter(q => userAnswers[q.id] === q.correctOptionId).length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isPassed = scorePercent >= 75;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Start Screen */}
      {!examStarted && !examFinished && (
        <div className="bg-slate-800/90 p-8 md:p-10 rounded-3xl border border-slate-700/80 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800 mx-auto">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
              ABPN Certification Format
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
              Vascular Neurology Board Mock Exam
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-lg mx-auto mt-2 leading-relaxed">
              Simulate the official ABPN Vascular Neurology certification exam. 50 randomized board questions, 60-minute countdown timer, question flagging, and detailed subspecialty breakdown report.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-left text-xs bg-slate-900/60 p-4 rounded-2xl border border-slate-700/50">
            <div>
              <span className="text-slate-400 font-semibold block">Questions</span>
              <strong className="text-slate-100 text-sm">50 Questions</strong>
            </div>
            <div>
              <span className="text-slate-400 font-semibold block">Time Limit</span>
              <strong className="text-slate-100 text-sm">60 Minutes</strong>
            </div>
            <div>
              <span className="text-slate-400 font-semibold block">Passing Score</span>
              <strong className="text-cyan-400 text-sm">75% Score</strong>
            </div>
          </div>

          <button
            onClick={startExam}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-cyan-500/30 transition-all active:scale-95"
          >
            Start Board Simulation Exam
          </button>
        </div>
      )}

      {/* Active Exam Interface */}
      {examStarted && currentQuestion && (
        <div className="space-y-4">
          {/* Top Timer & Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/90 px-5 py-3.5 rounded-2xl border border-slate-700/60">
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
                <LayoutGrid className="w-4 h-4" /> Grid
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

              <div className="grid grid-cols-10 gap-1.5 max-h-48 overflow-y-auto p-1">
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
                      📷 Figure: {currentQuestion.imageCaption}
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
            </div>

            <div className="p-6 bg-slate-900/90 rounded-2xl max-w-sm mx-auto border border-slate-700/60 text-center">
              <span className="text-5xl font-extrabold text-cyan-400">{scorePercent}%</span>
              <div className="mt-1 text-xs text-slate-300 font-semibold">
                {correctCount} / {totalQuestions} Correct Answers
              </div>
            </div>

            <button
              onClick={startExam}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs rounded-xl border border-slate-700 inline-flex items-center gap-2 transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4 text-cyan-400" /> Retake Board Mock Exam
            </button>
          </div>

          {/* Full Exam Review List */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/60 space-y-6">
            <h3 className="text-base font-bold text-slate-100 border-b border-slate-700 pb-3">
              Full Board Exam Question & Rationale Review
            </h3>

            <div className="space-y-6">
              {examQuestions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctOptionId;

                return (
                  <div key={q.id} className="bg-slate-900/70 p-5 rounded-2xl border border-slate-700/50 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-300">Question {idx + 1}</span>
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

                    <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-2">
                      <strong className="text-cyan-400 block mb-0.5">Rationale:</strong>
                      {q.explanation}
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
