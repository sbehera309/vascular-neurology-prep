import React from 'react';
import { Home, BookOpen, Sparkles, HelpCircle, Calculator, Award, UploadCloud } from 'lucide-react';

interface NavbarProps {
  activeTab: 'dashboard' | 'chapters' | 'flashcards' | 'questions' | 'calculators' | 'trials' | 'deploy';
  onNavigate: (tab: 'dashboard' | 'chapters' | 'flashcards' | 'questions' | 'calculators' | 'trials' | 'deploy') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'flashcards', label: 'Flashcards', icon: Sparkles },
    { id: 'questions', label: 'Q-Bank', icon: HelpCircle },
    { id: 'calculators', label: 'Calculators', icon: Calculator },
    { id: 'trials', label: 'Trials', icon: Award },
    { id: 'chapters', label: 'Notes', icon: BookOpen },
  ] as const;

  return (
    <>
      {/* Top Navbar for Desktop */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => onNavigate('dashboard')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-extrabold text-sm tracking-wider">VN</span>
            </div>
            <div>
              <span className="font-extrabold text-slate-100 text-sm tracking-tight block">VascNeuro <span className="text-cyan-400">Prep</span></span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase block">Board Exam Review</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Deploy Button */}
          <button
            onClick={() => onNavigate('deploy')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'deploy'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750 border border-slate-700'
            }`}
          >
            <UploadCloud className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Vercel Deploy</span>
          </button>
        </div>
      </header>

      {/* Bottom Tab Bar for Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/95 border-t border-slate-800 px-2 py-2 shadow-2xl">
        <div className="grid grid-cols-6 gap-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                  isActive ? 'text-cyan-400 bg-slate-800/80 font-bold' : 'text-slate-400 font-medium'
                }`}
              >
                <Icon className="w-5 h-5 mb-0.5" />
                <span className="text-[9px] truncate w-full text-center">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
