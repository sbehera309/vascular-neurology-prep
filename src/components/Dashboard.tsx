import React from 'react';
import { UserStats } from '../types';
import { flashcardsData } from '../data/flashcards';
import { questionsData } from '../data/questions';
import { Sparkles, HelpCircle, Calculator, BookOpen, Flame, Award, Zap } from 'lucide-react';

interface DashboardProps {
  userStats: UserStats;
  onNavigate: (tab: 'dashboard' | 'chapters' | 'flashcards' | 'questions' | 'calculators' | 'trials' | 'exam') => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ userStats, onNavigate }) => {
  const completedQuestionCount = Object.keys(userStats.completedQuestions).length;
  const correctQuestionCount = Object.values(userStats.completedQuestions).filter(q => q.isCorrect).length;
  const accuracyPercentage = completedQuestionCount > 0 ? Math.round((correctQuestionCount / completedQuestionCount) * 100) : 0;

  const masteredFlashcardCount = Object.values(userStats.flashcardMastery).filter(m => m === 'good' || m === 'easy').length;
  const flashcardProgressPercent = Math.round((masteredFlashcardCount / flashcardsData.length) * 100);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900/80 via-slate-800 to-slate-900 p-6 md:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase tracking-wider">
              Vascular Neurology Board Review
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <Flame className="w-3.5 h-3.5" /> {userStats.streakDays} Day Streak
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Vascular Neurology Master Prep
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed">
            High-yield board study system built from comprehensive vascular neurology notes. Master neuroanatomy, stroke syndromes, trial evidence, and emergency protocols.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onNavigate('exam')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all active:scale-95"
            >
              <Award className="w-4 h-4" /> Start Board Simulation Exam
            </button>
            <button
              onClick={() => onNavigate('flashcards')}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4" /> Practice Flashcards
            </button>
          </div>
        </div>
      </div>

      {/* Progress Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Questions Completed */}
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Questions Done</span>
            <HelpCircle className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-3">
            <span className="text-3xl font-black text-white">{completedQuestionCount}</span>
            <span className="text-slate-400 text-xs font-semibold"> / {questionsData.length}</span>
          </div>
          <div className="mt-2 text-[10px] text-cyan-400 font-bold">
            {accuracyPercentage}% Accuracy
          </div>
        </div>

        {/* Flashcards Mastered */}
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Cards Mastered</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-3">
            <span className="text-3xl font-black text-white">{masteredFlashcardCount}</span>
            <span className="text-slate-400 text-xs font-semibold"> / {flashcardsData.length}</span>
          </div>
          <div className="mt-2 text-[10px] text-amber-400 font-bold">
            {flashcardProgressPercent}% Mastered
          </div>
        </div>

        {/* Board Trials */}
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Landmark Trials</span>
            <Award className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-3">
            <span className="text-3xl font-black text-white">15</span>
            <span className="text-slate-400 text-xs font-semibold"> Key Trials</span>
          </div>
          <div className="mt-2 text-[10px] text-emerald-400 font-bold">
            DAWN, DEFUSE 3, SAMMPRIS
          </div>
        </div>

        {/* Syllabus Chapters */}
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Core Chapters</span>
            <BookOpen className="w-4 h-4 text-purple-400" />
          </div>
          <div className="mt-3">
            <span className="text-3xl font-black text-white">20</span>
            <span className="text-slate-400 text-xs font-semibold"> Chapters</span>
          </div>
          <div className="mt-2 text-[10px] text-purple-400 font-bold">
            Complete Notes Included
          </div>
        </div>
      </div>

      {/* Pearl of the Day */}
      <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-3xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <Zap className="w-4 h-4" /> High-Yield Board Pearl of the Day
        </div>
        <p className="text-sm md:text-base font-bold text-slate-100 leading-relaxed">
          In high-risk TIA (ABCD2 ≥ 4) or minor ischemic stroke (NIHSS ≤ 3), Dual Antiplatelet Therapy (DAPT) with Aspirin + Clopidogrel should be started within 24 hours and continued for <span className="text-amber-300 underline underline-offset-4 font-black">21 DAYS ONLY</span> (CHANCE & POINT trials). Extending DAPT to 90 days increases major hemorrhage risk without additional ischemic reduction.
        </p>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <button
          onClick={() => onNavigate('calculators')}
          className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 text-left hover:border-cyan-500/40 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Calculator className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-100 mb-1">Clinical Calculators</h3>
          <p className="text-xs text-slate-400">ICH Score, ASPECTS, CHA₂DS₂-VASc, RoPE Score, ABC/2</p>
        </button>

        <button
          onClick={() => onNavigate('trials')}
          className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 text-left hover:border-amber-500/40 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-100 mb-1">Landmark Trial Database</h3>
          <p className="text-xs text-slate-400">Searchable summaries & takeaways for stroke trials</p>
        </button>

        <button
          onClick={() => onNavigate('chapters')}
          className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 text-left hover:border-purple-500/40 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-100 mb-1">Study Guide & Notes</h3>
          <p className="text-xs text-slate-400">Comprehensive syllabus notes across all 20 chapters</p>
        </button>
      </div>
    </div>
  );
};
