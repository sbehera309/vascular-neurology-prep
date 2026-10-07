import React, { useState } from 'react';
import { UserStats, UserProfile } from '../types';
import { User, X, LogIn, LogOut, Award, Calendar, BarChart3, Download, Upload, Trash2, Mail, Sparkles, Cloud, Lock, Globe, Eye, EyeOff, KeyRound, CheckCircle2 } from 'lucide-react';
import { questionsData } from '../data/questions';
import { registerWithEmail, loginWithEmail, loginWithGoogle, logoutCloudUser, resetPasswordEmail } from '../lib/sync';
import { isCloudConfigured } from '../lib/firebase';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userStats: UserStats;
  onUpdateProfile: (profile: Partial<UserProfile>) => void;
  onResetProgress: (type: 'all' | 'questions' | 'exams' | 'flashcards') => void;
  onImportData: (data: UserStats) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  userStats,
  onUpdateProfile,
  onResetProgress,
  onImportData
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'analytics' | 'history' | 'data'>('profile');
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot' | 'view'>(userStats.profile.isLoggedIn ? 'view' : 'login');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  
  // Auth Form State
  const [name, setName] = useState(userStats.profile.name || 'Dr. Vascular Neurologist');
  const [email, setEmail] = useState(userStats.profile.email || 'fellow@stroke-prep.org');
  const [password, setPassword] = useState('');
  const [targetDate, setTargetDate] = useState(userStats.profile.targetExamDate || '2026-10-15');
  const [role, setRole] = useState(userStats.profile.role || 'Vascular Neurology Fellow');
  const [institution, setInstitution] = useState(userStats.profile.institution || 'Academic Medical Center');
  
  const [authError, setAuthError] = useState<string | null>(null);
  const [resetSuccess, setResetSuccess] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  // Q-Bank Analytics calculations
  const totalQuestions = questionsData.length;
  const completedEntries = Object.values(userStats.completedQuestions || {});
  const answeredCount = completedEntries.length;
  const correctCount = completedEntries.filter(e => e.isCorrect).length;
  const accuracyPercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const overallCompletionPercent = Math.round((answeredCount / totalQuestions) * 100);

  // Exam Analytics
  const examAttempts = userStats.examAttempts || [];
  const totalExams = examAttempts.length;
  const avgExamScore = totalExams > 0 ? Math.round(examAttempts.reduce((acc, curr) => acc + curr.percentage, 0) / totalExams) : 0;
  const maxExamScore = totalExams > 0 ? Math.max(...examAttempts.map(e => e.percentage)) : 0;
  const passedExams = examAttempts.filter(e => e.passed).length;

  const handleCloudRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setResetSuccess(null);
    setIsAuthLoading(true);

    try {
      if (isCloudConfigured) {
        const user = await registerWithEmail(email, password, name);
        onUpdateProfile({
          id: user.uid,
          name: name || user.displayName || 'Candidate',
          email: user.email || email,
          targetExamDate: targetDate,
          role,
          institution,
          isLoggedIn: true,
        });
      } else {
        // Fallback local persistence mode
        onUpdateProfile({
          name,
          email,
          targetExamDate: targetDate,
          role,
          institution,
          isLoggedIn: true,
        });
      }
      setAuthMode('view');
    } catch (err: any) {
      setAuthError(err.message || 'Authentication error occurred.');
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleCloudLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setResetSuccess(null);
    setIsAuthLoading(true);

    try {
      if (isCloudConfigured) {
        const user = await loginWithEmail(email, password);
        onUpdateProfile({
          id: user.uid,
          name: user.displayName || name || 'Candidate',
          email: user.email || email,
          isLoggedIn: true,
        });
      } else {
        onUpdateProfile({
          name: name || 'Candidate',
          email: email || 'fellow@stroke-prep.org',
          isLoggedIn: true,
        });
      }
      setAuthMode('view');
    } catch (err: any) {
      setAuthError(err.message || 'Invalid email or password credentials.');
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setResetSuccess(null);
    setIsAuthLoading(true);

    try {
      if (isCloudConfigured) {
        await resetPasswordEmail(email);
        setResetSuccess(`Password reset email sent to ${email}. Please check your inbox or spam folder.`);
      } else {
        setResetSuccess('Local storage mode active. Password reset link is not required.');
      }
    } catch (err: any) {
      setAuthError(err.message || 'Failed to send password reset email.');
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setAuthError(null);
    setResetSuccess(null);
    setIsAuthLoading(true);

    try {
      if (isCloudConfigured) {
        const user = await loginWithGoogle();
        onUpdateProfile({
          id: user.uid,
          name: user.displayName || 'Google Candidate',
          email: user.email || '',
          avatarUrl: user.photoURL || undefined,
          isLoggedIn: true,
        });
        setAuthMode('view');
      } else {
        setAuthError('Cloud API keys not active. Switched to local profile mode.');
        onUpdateProfile({
          name: name || 'Local Candidate',
          email,
          isLoggedIn: true,
        });
        setAuthMode('view');
      }
    } catch (err: any) {
      setAuthError(err.message || 'Google sign in failed.');
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await logoutCloudUser();
    onUpdateProfile({ isLoggedIn: false });
    setAuthMode('login');
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userStats, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `vascneuro_progress_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed && typeof parsed === 'object') {
            onImportData(parsed);
            alert("Progress data successfully imported!");
          }
        } catch {
          alert("Invalid backup JSON file.");
        }
      };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-slate-800/90 px-6 py-5 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center shadow-lg text-white font-extrabold text-lg">
              {userStats.profile.name ? userStats.profile.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base font-bold text-white">
                  {userStats.profile.name || 'User Account & Cloud Sync'}
                </h2>
                {userStats.profile.isLoggedIn ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <Cloud className="w-3 h-3" /> Cloud Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Globe className="w-3 h-3" /> Local Storage Mode
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">
                {userStats.profile.role || 'Vascular Neurology Board Candidate'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tab Navigation */}
        <div className="flex items-center border-b border-slate-800 bg-slate-900/60 px-6 pt-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'profile'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10 rounded-t-xl'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-4 h-4" /> Account & Sync
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10 rounded-t-xl'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-4 h-4" /> Study Analytics
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'history'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10 rounded-t-xl'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-4 h-4" /> Exam History ({totalExams})
          </button>

          <button
            onClick={() => setActiveTab('data')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'data'
                ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10 rounded-t-xl'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Download className="w-4 h-4" /> Backup & Reset
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: PROFILE & LOGIN */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {authMode === 'view' && userStats.profile.isLoggedIn ? (
                <div className="space-y-6">
                  {/* Account Summary Card */}
                  <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Candidate Name</span>
                        <p className="text-sm font-semibold text-slate-100 mt-0.5">{userStats.profile.name}</p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Address</span>
                        <p className="text-sm font-semibold text-slate-100 mt-0.5">{userStats.profile.email}</p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Target Board Exam Date</span>
                        <p className="text-sm font-semibold text-cyan-300 mt-0.5 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" /> {userStats.profile.targetExamDate || 'October 2026'}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Specialty / Role</span>
                        <p className="text-sm font-semibold text-slate-100 mt-0.5">{userStats.profile.role}</p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Institution</span>
                        <p className="text-sm font-semibold text-slate-100 mt-0.5">{userStats.profile.institution}</p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Sync Status</span>
                        <p className="text-sm font-semibold text-emerald-400 mt-0.5 flex items-center gap-1">
                          <Cloud className="w-3.5 h-3.5" /> Cloud & Local Persistent
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-700/60 pt-4 mt-2">
                      <button
                        onClick={() => setAuthMode('register')}
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-100 text-xs font-bold rounded-xl transition-colors"
                      >
                        Edit Profile Info
                      </button>

                      <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
                      >
                        <LogOut className="w-3.5 h-3.5" /> Log Out
                      </button>
                    </div>
                  </div>

                  {/* Study Streak Badge */}
                  <div className="bg-gradient-to-r from-cyan-950/50 to-blue-950/50 p-5 rounded-2xl border border-cyan-500/30 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-500/40">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Daily Board Preparation Streak</h4>
                        <p className="text-xs text-cyan-200 mt-0.5">{userStats.streakDays} consecutive study days logged</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-cyan-300">{userStats.streakDays}</span>
                      <span className="text-[10px] text-cyan-400 block font-bold">DAYS</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Auth Mode Navigation Tabs */}
                  {authMode !== 'forgot' && (
                    <div className="flex items-center gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
                      <button
                        type="button"
                        onClick={() => { setAuthMode('login'); setAuthError(null); setResetSuccess(null); }}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                          authMode === 'login' ? 'bg-cyan-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Sign In
                      </button>

                      <button
                        type="button"
                        onClick={() => { setAuthMode('register'); setAuthError(null); setResetSuccess(null); }}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                          authMode === 'register' ? 'bg-cyan-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Create Account
                      </button>
                    </div>
                  )}

                  {authError && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{authError}</span>
                    </div>
                  )}

                  {resetSuccess && (
                    <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{resetSuccess}</span>
                    </div>
                  )}

                  {/* SIGN IN FORM */}
                  {authMode === 'login' && (
                    <form onSubmit={handleCloudLogin} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="doctor@hospital.org"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 focus:ring-cyan-500"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Password
                          </label>
                          <button
                            type="button"
                            onClick={() => { setAuthMode('forgot'); setAuthError(null); setResetSuccess(null); }}
                            className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            Forgot Password?
                          </button>
                        </div>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-10 py-2 text-xs text-slate-100 focus:ring-cyan-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                            className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200 transition-colors p-0.5"
                            title={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isAuthLoading}
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <LogIn className="w-4 h-4" />
                        {isAuthLoading ? 'Signing in...' : 'Sign In to Sync Progress'}
                      </button>
                    </form>
                  )}

                  {/* FORGOT PASSWORD FORM */}
                  {authMode === 'forgot' && (
                    <form onSubmit={handlePasswordReset} className="space-y-4 bg-slate-800/40 p-5 rounded-2xl border border-slate-700/80">
                      <div className="flex items-center space-x-2 border-b border-slate-700/60 pb-3">
                        <KeyRound className="w-5 h-5 text-cyan-400" />
                        <h3 className="text-sm font-bold text-white">Reset Candidate Password</h3>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        Enter your candidate email address below and we will send you an official password recovery link.
                      </p>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="doctor@hospital.org"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 focus:ring-cyan-500"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="submit"
                          disabled={isAuthLoading}
                          className="flex-1 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          {isAuthLoading ? 'Sending link...' : 'Send Password Reset Link'}
                        </button>

                        <button
                          type="button"
                          onClick={() => { setAuthMode('login'); setAuthError(null); setResetSuccess(null); }}
                          className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-colors"
                        >
                          Back to Sign In
                        </button>
                      </div>
                    </form>
                  )}

                  {/* REGISTER FORM */}
                  {authMode === 'register' && (
                    <form onSubmit={handleCloudRegister} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Dr. Jane Doe"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 focus:ring-cyan-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="doctor@hospital.org"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 focus:ring-cyan-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Create password"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-10 py-2 text-xs text-slate-100 focus:ring-cyan-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                            className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200 transition-colors p-0.5"
                            title={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Role / Position
                          </label>
                          <input
                            type="text"
                            value={role}
                            onChange={e => setRole(e.target.value)}
                            placeholder="Vascular Neurology Fellow"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Institution
                          </label>
                          <input
                            type="text"
                            value={institution}
                            onChange={e => setInstitution(e.target.value)}
                            placeholder="Academic Medical Center"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                          Target Board Exam Date
                        </label>
                        <input
                          type="date"
                          value={targetDate}
                          onChange={e => setTargetDate(e.target.value)}
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isAuthLoading}
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
                      >
                        {isAuthLoading ? 'Creating Profile...' : 'Register Account'}
                      </button>
                    </form>
                  )}

                  {/* 1-Click Google Sign In */}
                  {authMode !== 'forgot' && (
                    <div className="pt-2 border-t border-slate-800 space-y-3">
                      <button
                        type="button"
                        onClick={handleGoogleLogin}
                        disabled={isAuthLoading}
                        className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                        Sign In with Google
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: STUDY ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* Q-Bank Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Questions Completed</span>
                  <span className="text-xl font-extrabold text-cyan-300 mt-1 block">{answeredCount} / {totalQuestions}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">{overallCompletionPercent}% Completed</span>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Q-Bank Accuracy</span>
                  <span className={`text-xl font-extrabold mt-1 block ${accuracyPercent >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {accuracyPercent}%
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">{correctCount} Correct</span>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Mock Exams Taken</span>
                  <span className="text-xl font-extrabold text-purple-300 mt-1 block">{totalExams}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">{passedExams} Passed (≥75%)</span>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">High Exam Score</span>
                  <span className="text-xl font-extrabold text-emerald-300 mt-1 block">{maxExamScore}%</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Avg: {avgExamScore}%</span>
                </div>
              </div>

              {/* Progress Bar Visual */}
              <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                  <span>Q-Bank Master Progress</span>
                  <span>{answeredCount} of {totalQuestions} Questions</span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700 flex">
                  <div
                    style={{ width: `${(correctCount / totalQuestions) * 100}%` }}
                    className="h-full bg-emerald-500"
                    title={`Correct: ${correctCount}`}
                  />
                  <div
                    style={{ width: `${((answeredCount - correctCount) / totalQuestions) * 100}%` }}
                    className="h-full bg-rose-500"
                    title={`Incorrect: ${answeredCount - correctCount}`}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-medium text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span>Correct ({correctCount})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span>Incorrect ({answeredCount - correctCount})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
                    <span>Unattempted ({totalQuestions - answeredCount})</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EXAM HISTORY */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              {examAttempts.length === 0 ? (
                <div className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700/60 text-center space-y-2">
                  <Award className="w-8 h-8 text-slate-500 mx-auto" />
                  <p className="text-slate-300 font-semibold text-sm">No Mock Board Exam attempts recorded yet.</p>
                  <p className="text-xs text-slate-400">Complete a 50-question simulation under the Mock Exam tab to track your scores here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {examAttempts.map((attempt, idx) => (
                    <div
                      key={attempt.id || idx}
                      className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-sm text-slate-100">
                            Mock Exam Attempt #{examAttempts.length - idx}
                          </span>
                          {attempt.passed ? (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              PASS (≥75%)
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              DID NOT PASS
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-3 text-xs text-slate-400">
                          <span>📅 {new Date(attempt.timestamp).toLocaleDateString()} at {new Date(attempt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          <span>•</span>
                          <span>⏱️ {Math.round(attempt.durationSeconds / 60)} minutes</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <span className={`text-xl font-extrabold ${attempt.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {attempt.percentage}%
                          </span>
                          <span className="text-[10px] text-slate-400 block font-medium">
                            {attempt.correctCount} / {attempt.totalQuestions} Correct
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: BACKUP & RESET */}
          {activeTab === 'data' && (
            <div className="space-y-6">
              {/* Backup & Import */}
              <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-4">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Download className="w-4 h-4 text-cyan-400" /> Export / Import Local Study Data
                </h4>
                <p className="text-xs text-slate-300">
                  Export your complete progress, flashcard mastery, and exam history to a local JSON backup file to transfer between devices.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={handleExportJSON}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download Backup (JSON)
                  </button>

                  <label className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-colors">
                    <Upload className="w-4 h-4" /> Import Backup File
                    <input type="file" accept=".json" onChange={handleFileImport} className="hidden" />
                  </label>
                </div>
              </div>

              {/* Reset Controls */}
              <div className="bg-rose-950/20 border border-rose-500/30 p-5 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Trash2 className="w-4 h-4 text-rose-400" /> Reset Study Progress
                </h4>
                <p className="text-xs text-rose-200/80">
                  Clear specific study data or reset all progress back to initial state. This action cannot be undone.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={() => {
                      if (confirm("Are you sure you want to reset all Q-Bank completed questions?")) {
                        onResetProgress('questions');
                      }
                    }}
                    className="px-3 py-1.5 bg-rose-900/40 hover:bg-rose-800/60 text-rose-200 border border-rose-500/40 text-xs font-bold rounded-xl transition-colors"
                  >
                    Reset Q-Bank Answers
                  </button>

                  <button
                    onClick={() => {
                      if (confirm("Are you sure you want to clear your Mock Exam history?")) {
                        onResetProgress('exams');
                      }
                    }}
                    className="px-3 py-1.5 bg-rose-900/40 hover:bg-rose-800/60 text-rose-200 border border-rose-500/40 text-xs font-bold rounded-xl transition-colors"
                  >
                    Clear Exam History
                  </button>

                  <button
                    onClick={() => {
                      if (confirm("Are you sure you want to reset ALL study stats, flashcards, questions, and exam history?")) {
                        onResetProgress('all');
                      }
                    }}
                    className="px-3 py-1.5 bg-rose-700 hover:bg-rose-600 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    Reset Everything
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
