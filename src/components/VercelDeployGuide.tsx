import React, { useState } from 'react';
import { UploadCloud, ExternalLink, Check, Copy } from 'lucide-react';

export const VercelDeployGuide: React.FC = () => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const projectPath = "/Users/sandeepbehera/.gemini/antigravity/scratch/vascular-neurology-prep";

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-slate-800/80 p-6 rounded-3xl border border-cyan-500/30 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800">
            <UploadCloud className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">Deploy to Vercel via Git Push</h1>
            <p className="text-xs text-slate-400">Step-by-step instructions to push this app to GitHub and deploy live on Vercel</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Step 1 */}
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-cyan-500 text-white font-bold text-xs flex items-center justify-center">1</span>
              <h3 className="text-sm font-bold text-slate-100">Initialize Git Repository & Commit Code</h3>
            </div>
            <button
              onClick={() => copyToClipboard(`cd ${projectPath}\ngit init\ngit add .\ngit commit -m "Initial Vascular Neurology Prep App"`, 1)}
              className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700"
            >
              {copiedStep === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />} Copy Command
            </button>
          </div>

          <pre className="bg-slate-950 p-4 rounded-xl text-xs text-cyan-300 font-mono overflow-x-auto">
{`cd ${projectPath}
git init
git add .
git commit -m "Initial Vascular Neurology Prep App"`}
          </pre>
        </div>

        {/* Step 2 */}
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-cyan-500 text-white font-bold text-xs flex items-center justify-center">2</span>
              <h3 className="text-sm font-bold text-slate-100">Create GitHub Repo & Push Code</h3>
            </div>
            <button
              onClick={() => copyToClipboard(`git remote add origin https://github.com/YOUR_USERNAME/vascular-neurology-prep.git\ngit branch -M main\ngit push -u origin main`, 2)}
              className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700"
            >
              {copiedStep === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />} Copy Command
            </button>
          </div>

          <p className="text-xs text-slate-400">
            Create a new repository on <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-cyan-400 underline">GitHub.com</a>, then run:
          </p>

          <pre className="bg-slate-950 p-4 rounded-xl text-xs text-cyan-300 font-mono overflow-x-auto">
{`git remote add origin https://github.com/YOUR_USERNAME/vascular-neurology-prep.git
git branch -M main
git push -u origin main`}
          </pre>
        </div>

        {/* Step 3 */}
        <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-cyan-500 text-white font-bold text-xs flex items-center justify-center">3</span>
              <h3 className="text-sm font-bold text-slate-100">Connect to Vercel for Automatic Git Deployment</h3>
            </div>
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700"
            >
              Open Vercel Dashboard <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="text-xs text-slate-300 space-y-2">
            <p>1. Go to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-cyan-400 underline font-semibold">Vercel.com/new</a> and log in with your GitHub account.</p>
            <p>2. Select your newly pushed repository <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-300">vascular-neurology-prep</code>.</p>
            <p>3. Vercel automatically detects <strong>Vite + React</strong>. Click <strong>Deploy</strong>!</p>
            <p>4. Every future <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-300">git push origin main</code> will automatically re-deploy your app in seconds!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
