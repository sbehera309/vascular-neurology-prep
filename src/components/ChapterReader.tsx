import React, { useState } from 'react';
import { chaptersData } from '../data/chapters';
import { Search, BookOpen, ChevronDown, ChevronRight, Zap, Bookmark } from 'lucide-react';

interface ChapterReaderProps {
  bookmarkedChapters: number[];
  onToggleBookmarkChapter: (chapterId: number) => void;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  bookmarkedChapters,
  onToggleBookmarkChapter,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedChapterId, setExpandedChapterId] = useState<number | null>(1); // Default to Chapter 2

  const filteredChapters = chaptersData.filter(ch => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    const titleMatch = ch.title.toLowerCase().includes(term);
    const topicMatch = ch.topics.some(t =>
      t.title.toLowerCase().includes(term) ||
      t.content.some(c => c.toLowerCase().includes(term))
    );
    return titleMatch || topicMatch;
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header & Search */}
      <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 space-y-4">
        <div>
          <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" /> High-Yield Board Syllabus Notes
          </h1>
          <p className="text-xs text-slate-400">Complete vascular neurology core syllabus notes & clinical pearls</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search neuroanatomy, stroke syndromes, SAMMPRIS, tPA guidelines..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:ring-cyan-500"
          />
        </div>
      </div>

      {/* Chapters List */}
      <div className="space-y-4">
        {filteredChapters.map(chapter => {
          const isExpanded = expandedChapterId === chapter.id;

          return (
            <div
              key={chapter.id}
              className="bg-slate-800/80 rounded-2xl border border-slate-700/60 overflow-hidden transition-all"
            >
              {/* Chapter Title Header */}
              <div
                onClick={() => setExpandedChapterId(isExpanded ? null : chapter.id)}
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-750 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-xl bg-cyan-950 text-cyan-400 font-bold text-xs flex items-center justify-center border border-cyan-800 shrink-0">
                    Ch {chapter.id}
                  </span>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-100">{chapter.title}</h3>
                    <p className="text-xs text-slate-400">{chapter.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      onToggleBookmarkChapter(chapter.id);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedChapters.includes(chapter.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Chapter Content Details */}
              {isExpanded && (
                <div className="p-6 bg-slate-900/60 border-t border-slate-700/50 space-y-6 animate-fadeIn">
                  {chapter.topics.map((topic, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-sm font-bold text-cyan-300 border-b border-slate-800 pb-2">
                        {topic.title}
                      </h4>

                      {/* Main Bullet Content */}
                      <div className="space-y-2 text-xs md:text-sm text-slate-200 leading-relaxed">
                        {topic.content.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>

                      {/* Detailed Bullet Points */}
                      {topic.bullets && topic.bullets.length > 0 && (
                        <ul className="space-y-2 pt-1">
                          {topic.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start space-x-2 text-xs md:text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Clinical Pearls Banner */}
                      {topic.pearls && topic.pearls.length > 0 && (
                        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                            <Zap className="w-4 h-4" /> Board Clinical Pearl
                          </div>
                          {topic.pearls.map((pearl, prlIdx) => (
                            <p key={prlIdx} className="text-xs text-amber-200 leading-relaxed">
                              {pearl}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
