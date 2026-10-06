import React, { useState, useMemo } from 'react';
import { flashcardsData } from '../data/flashcards';
import { Flashcard } from '../types';
import { RotateCw, Bookmark, Sparkles, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FlashcardViewerProps {
  bookmarkedCards: string[];
  onToggleBookmark: (cardId: string) => void;
  masteryState: Record<string, 'again' | 'hard' | 'good' | 'easy'>;
  onUpdateMastery: (cardId: string, rating: 'again' | 'hard' | 'good' | 'easy') => void;
}

export const FlashcardViewer: React.FC<FlashcardViewerProps> = ({
  bookmarkedCards,
  onToggleBookmark,
  masteryState,
  onUpdateMastery,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState<boolean>(false);

  // Filter cards
  const filteredCards = useMemo(() => {
    return flashcardsData.filter(card => {
      if (showBookmarksOnly && !bookmarkedCards.includes(card.id)) return false;
      if (selectedChapter !== 'all' && card.chapterId !== selectedChapter) return false;
      return true;
    });
  }, [selectedChapter, showBookmarksOnly, bookmarkedCards]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleRate = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;
    onUpdateMastery(currentCard.id, rating);
    handleNext();
  };

  // Chapter options list
  const chapters = useMemo(() => {
    const map = new Map<number, string>();
    flashcardsData.forEach(fc => map.set(fc.chapterId, fc.chapterTitle));
    return Array.from(map.entries()).map(([id, title]) => ({ id, title }));
  }, []);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60">
        <div>
          <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" /> Flashcard Study Deck
          </h1>
          <p className="text-xs text-slate-400">Master high-yield board facts with spaced repetition</p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedChapter}
            onChange={e => {
              setSelectedChapter(e.target.value === 'all' ? 'all' : Number(e.target.value));
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2 focus:ring-cyan-500 max-w-[200px] truncate"
          >
            <option value="all">All Chapters ({flashcardsData.length})</option>
            {chapters.map(ch => (
              <option key={ch.id} value={ch.id}>
                Ch {ch.id}: {ch.title.split(':')[1] || ch.title}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setShowBookmarksOnly(prev => !prev);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              showBookmarksOnly
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-slate-900 text-slate-400 border border-slate-700 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" /> Bookmarked ({bookmarkedCards.length})
          </button>
        </div>
      </div>

      {/* Progress Counter */}
      {filteredCards.length > 0 && (
        <div className="flex items-center justify-between text-xs text-slate-400 px-2">
          <span>
            Card <strong className="text-slate-200">{currentIndex + 1}</strong> of{' '}
            <strong className="text-slate-200">{filteredCards.length}</strong>
          </span>
          {currentCard?.highYieldTag && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {currentCard.highYieldTag}
            </span>
          )}
        </div>
      )}

      {/* FLASHCARD DISPLAY AREA */}
      {filteredCards.length === 0 ? (
        <div className="bg-slate-800/60 p-12 rounded-2xl border border-slate-700/60 text-center space-y-3">
          <Award className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-300">No flashcards found</h3>
          <p className="text-xs text-slate-400">Try clearing your chapter or bookmark filters.</p>
        </div>
      ) : (
        currentCard && (
          <div className="space-y-4">
            {/* The Interactive Flip Card */}
            <div
              onClick={() => setIsFlipped(prev => !prev)}
              className="relative min-h-[320px] md:min-h-[360px] w-full bg-slate-800 rounded-3xl border border-slate-700/80 p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-2xl hover:border-cyan-500/40 group select-none"
            >
              {/* Card Header Info */}
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-4">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Ch {currentCard.chapterId}: {currentCard.chapterTitle}
                </span>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    onToggleBookmark(currentCard.id);
                  }}
                  className="p-1.5 rounded-lg bg-slate-900/60 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Bookmark
                    className={`w-4 h-4 ${bookmarkedCards.includes(currentCard.id) ? 'fill-amber-400 text-amber-400' : ''}`}
                  />
                </button>
              </div>

              {/* Card Content Area */}
              <div className="my-auto py-6 text-center space-y-4">
                {!isFlipped ? (
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">QUESTION</span>
                    <h2 className="text-lg md:text-xl font-bold text-slate-100 leading-relaxed max-w-2xl mx-auto">
                      {currentCard.question}
                    </h2>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block">ANSWER</span>
                    <div className="text-base md:text-lg font-bold text-emerald-300 leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
                      {currentCard.answer}
                    </div>
                    {currentCard.explanation && (
                      <p className="text-xs text-slate-400 pt-2 border-t border-slate-700/40 max-w-xl mx-auto leading-relaxed">
                        {currentCard.explanation}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer Prompt */}
              <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-700/50 pt-3">
                <span className="flex items-center gap-1">
                  <RotateCw className="w-3.5 h-3.5 text-cyan-400" /> Tap card to {isFlipped ? 'see question' : 'reveal answer'}
                </span>
                {masteryState[currentCard.id] && (
                  <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    Status: {masteryState[currentCard.id]}
                  </span>
                )}
              </div>
            </div>

            {/* Response & Navigation Buttons */}
            {isFlipped ? (
              <div className="grid grid-cols-4 gap-2 pt-2 animate-fadeIn">
                <button
                  onClick={() => handleRate('again')}
                  className="py-3 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-bold rounded-2xl border border-rose-500/30 text-xs text-center transition-all"
                >
                  Again
                </button>
                <button
                  onClick={() => handleRate('hard')}
                  className="py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold rounded-2xl border border-amber-500/30 text-xs text-center transition-all"
                >
                  Hard
                </button>
                <button
                  onClick={() => handleRate('good')}
                  className="py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 font-bold rounded-2xl border border-blue-500/30 text-xs text-center transition-all"
                >
                  Good
                </button>
                <button
                  onClick={() => handleRate('easy')}
                  className="py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold rounded-2xl border border-emerald-500/30 text-xs text-center transition-all"
                >
                  Easy
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold disabled:opacity-40 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 flex items-center gap-1 hover:bg-cyan-400 transition-all"
                >
                  Next Card <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};
