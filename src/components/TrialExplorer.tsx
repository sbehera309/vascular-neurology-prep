import React, { useState } from 'react';
import { trialsData } from '../data/trials';
import { Award, Search, Zap } from 'lucide-react';

export const TrialExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Acute Ischemic',
    'Thrombectomy',
    'Antiplatelets',
    'Carotid Stenosis',
    'PFO',
    'Cardioembolic/AF',
    'ICH/Stroke Prevention',
    'Pediatrics/Hematology'
  ];

  const filteredTrials = trialsData.filter(trial => {
    if (selectedCategory !== 'all' && trial.category !== selectedCategory) return false;
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      trial.name.toLowerCase().includes(term) ||
      trial.population.toLowerCase().includes(term) ||
      trial.boardTakeaway.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Trial Explorer Header */}
      <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 space-y-4">
        <div>
          <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" /> Landmark Stroke Trials Cheat Sheet
          </h1>
          <p className="text-xs text-slate-400">High-yield trial summaries, primary outcomes, and board takeaways</p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search SAMMPRIS, DAWN, CHANCE, NINDS, NASCET..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:ring-cyan-500"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-2.5 focus:ring-cyan-500"
          >
            <option value="all">All Categories ({trialsData.length})</option>
            {categories.filter(c => c !== 'all').map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Trial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTrials.map(trial => (
          <div
            key={trial.id}
            className="bg-slate-800/80 rounded-2xl border border-slate-700/60 p-5 flex flex-col justify-between space-y-4 shadow-lg hover:border-slate-600 transition-all"
          >
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-bold text-slate-100">{trial.name}</h3>
                  <span className="text-xs text-slate-400 font-semibold">({trial.year})</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {trial.category}
                </span>
              </div>

              {/* Population & Intervention */}
              <div className="space-y-1.5 text-xs text-slate-300">
                <p><strong className="text-slate-400">Population:</strong> {trial.population}</p>
                <p><strong className="text-slate-400">Intervention:</strong> {trial.intervention}</p>
                <p><strong className="text-slate-400">Control:</strong> {trial.control}</p>
              </div>

              {/* Key Results */}
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/40 text-xs text-slate-300">
                <strong className="text-cyan-400 block mb-1">Key Results:</strong>
                <p className="leading-relaxed">{trial.keyResults}</p>
              </div>
            </div>

            {/* Board Takeaway Banner */}
            <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/30 text-xs text-amber-200">
              <div className="flex items-center gap-1 font-bold text-amber-400 mb-0.5">
                <Zap className="w-3.5 h-3.5" /> BOARD TAKEAWAY
              </div>
              <p className="font-semibold leading-snug">{trial.boardTakeaway}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
