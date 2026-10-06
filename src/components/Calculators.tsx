import React, { useState } from 'react';
import { Calculator, CheckSquare, Info, RefreshCw } from 'lucide-react';

export const Calculators: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ich' | 'aspects' | 'chads' | 'rope' | 'abc2'>('ich');

  // ICH Score State
  const [ichGcs, setIchGcs] = useState<number>(15);
  const [ichVol, setIchVol] = useState<boolean>(false);
  const [ichIvh, setIchIvh] = useState<boolean>(false);
  const [ichInfra, setIchInfra] = useState<boolean>(false);
  const [ichAge, setIchAge] = useState<boolean>(false);

  const calculateIchScore = () => {
    let score = 0;
    if (ichGcs >= 3 && ichGcs <= 4) score += 2;
    else if (ichGcs >= 5 && ichGcs <= 12) score += 1;
    if (ichVol) score += 1;
    if (ichIvh) score += 1;
    if (ichInfra) score += 1;
    if (ichAge) score += 1;
    return score;
  };

  const getIchMortality = (score: number) => {
    switch (score) {
      case 0: return { rate: "0%", risk: "Low Risk" };
      case 1: return { rate: "13%", risk: "Low-Moderate Risk" };
      case 2: return { rate: "26%", risk: "Moderate Risk" };
      case 3: return { rate: "72%", risk: "High Risk" };
      case 4: return { rate: "97%", risk: "Severe Risk" };
      case 5:
      case 6: return { rate: "100%", risk: "Extremely High Risk" };
      default: return { rate: "0%", risk: "Unknown" };
    }
  };

  // ASPECTS State (10 regions)
  const [aspectsRegions, setAspectsRegions] = useState<Record<string, boolean>>({
    Caudate: true,
    PLIC: true,
    Lentiform: true,
    InsularRibbon: true,
    M1: true,
    M2: true,
    M3: true,
    M4: true,
    M5: true,
    M6: true,
  });

  const toggleAspectsRegion = (region: string) => {
    setAspectsRegions(prev => ({ ...prev, [region]: !prev[region] }));
  };

  const calculateAspectsScore = () => {
    return Object.values(aspectsRegions).filter(val => val).length;
  };

  // CHA2DS2-VASc State
  const [chadsC, setChadsC] = useState<boolean>(false);
  const [chadsH, setChadsH] = useState<boolean>(false);
  const [chadsA2, setChadsA2] = useState<boolean>(false);
  const [chadsD, setChadsD] = useState<boolean>(false);
  const [chadsS2, setChadsS2] = useState<boolean>(false);
  const [chadsV, setChadsV] = useState<boolean>(false);
  const [chadsA1, setChadsA1] = useState<boolean>(false);
  const [chadsSc, setChadsSc] = useState<boolean>(false);

  const calculateChadsScore = () => {
    let score = 0;
    if (chadsC) score += 1;
    if (chadsH) score += 1;
    if (chadsA2) score += 2;
    if (chadsD) score += 1;
    if (chadsS2) score += 2;
    if (chadsV) score += 1;
    if (chadsA1) score += 1;
    if (chadsSc) score += 1;
    return score;
  };

  // ABC/2 State
  const [dimA, setDimA] = useState<string>('4.0');
  const [dimB, setDimB] = useState<string>('3.0');
  const [dimC, setDimC] = useState<string>('2.5');

  const calculateAbc2Volume = () => {
    const a = parseFloat(dimA) || 0;
    const b = parseFloat(dimB) || 0;
    const c = parseFloat(dimC) || 0;
    return ((a * b * c) / 2).toFixed(1);
  };

  // ROPE Score State
  const [ropeNoHtn, setRopeNoHtn] = useState<boolean>(true);
  const [ropeNoDm, setRopeNoDm] = useState<boolean>(true);
  const [ropeNoStroke, setRopeNoStroke] = useState<boolean>(true);
  const [ropeNonSmoker, setRopeNonSmoker] = useState<boolean>(true);
  const [ropeCortical, setRopeCortical] = useState<boolean>(true);
  const [ropeAgeCategory, setRopeAgeCategory] = useState<number>(5);

  const calculateRopeScore = () => {
    let score = ropeAgeCategory;
    if (ropeNoHtn) score += 1;
    if (ropeNoDm) score += 1;
    if (ropeNoStroke) score += 1;
    if (ropeNonSmoker) score += 1;
    if (ropeCortical) score += 1;
    return score;
  };

  const getRopeAttributableRisk = (score: number) => {
    if (score >= 9) return "99% (PFO highly likely pathogenic)";
    if (score >= 7) return "73-88% (PFO likely pathogenic)";
    if (score === 6) return "62% (Moderate probability)";
    if (score <= 5) return "< 34% (PFO likely incidental)";
    return "";
  };

  const tabs = [
    { id: 'ich', label: 'ICH Score' },
    { id: 'aspects', label: 'ASPECTS Score' },
    { id: 'chads', label: 'CHA₂DS₂-VASc' },
    { id: 'rope', label: 'RoPE Score' },
    { id: 'abc2', label: 'ABC/2 Volume' },
  ] as const;

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-2xl bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800 shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-100">Vascular Neurology Calculators</h1>
          <p className="text-xs text-slate-400">Touch-optimized clinical risk estimators & bedside scoring tools</p>
        </div>
      </div>

      {/* Responsive Horizontally Scrollable Tab Bar for Mobile */}
      <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex space-x-2 min-w-max pb-1">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 ${
                activeTab === t.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/90 text-slate-300 hover:bg-slate-750 border border-slate-700/60'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ICH SCORE CALCULATOR */}
      {activeTab === 'ich' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800/80 rounded-3xl border border-slate-700/60 p-5 md:p-6 space-y-6">
            <h2 className="text-base md:text-lg font-bold text-slate-100 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-cyan-400" />
              ICH Score Criteria
            </h2>

            {/* Responsive GCS Grid (Works on all mobile screen widths!) */}
            <div className="space-y-2">
              <label className="block text-xs md:text-sm font-medium text-slate-300">
                Glasgow Coma Scale (GCS) Score: <span className="text-cyan-400 font-extrabold text-sm md:text-base">{ichGcs}</span>
              </label>
              <div className="grid grid-cols-7 sm:grid-cols-13 gap-1.5">
                {[15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3].map(val => (
                  <button
                    key={val}
                    onClick={() => setIchGcs(val)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                      ichGcs === val
                        ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                        : 'bg-slate-900/90 text-slate-300 hover:bg-slate-700 border border-slate-700/50'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                GCS 13-15 (0 pts) • GCS 5-12 (+1 pt) • GCS 3-4 (+2 pts)
              </p>
            </div>

            {/* Checkboxes with full-row click area */}
            <div className="space-y-3 pt-1">
              {[
                { label: 'ICH Volume ≥ 30 mL (cc)', state: ichVol, set: setIchVol, pts: '+1 pt' },
                { label: 'Intraventricular Hemorrhage (IVH) Present', state: ichIvh, set: setIchIvh, pts: '+1 pt' },
                { label: 'Infratentorial Origin (Brainstem / Cerebellum)', state: ichInfra, set: setIchInfra, pts: '+1 pt' },
                { label: 'Age ≥ 80 years', state: ichAge, set: setIchAge, pts: '+1 pt' },
              ].map((item, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] ${
                    item.state
                      ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                      : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <span className="text-xs md:text-sm font-semibold pr-2">{item.label}</span>
                  <div className="flex items-center space-x-3 shrink-0">
                    <span className="text-xs font-bold text-cyan-400">{item.pts}</span>
                    <input
                      type="checkbox"
                      checked={item.state}
                      onChange={e => item.set(e.target.checked)}
                      className="w-5 h-5 rounded text-cyan-500 bg-slate-800 border-slate-600 focus:ring-cyan-400"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Result Card (Sticky summary on mobile) */}
          <div className="bg-slate-800/80 rounded-3xl border border-slate-700/60 p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">30-Day Mortality Result</h3>
              <div className="p-6 bg-slate-900/90 rounded-2xl border border-cyan-500/30 text-center">
                <span className="text-5xl font-extrabold text-cyan-400">{calculateIchScore()}</span>
                <span className="text-slate-400 text-lg font-medium"> / 6</span>
                <div className="mt-3 text-2xl font-black text-white">
                  {getIchMortality(calculateIchScore()).rate}
                </div>
                <div className="mt-1 text-xs text-slate-400 font-semibold">
                  Category: <span className="text-cyan-300">{getIchMortality(calculateIchScore()).risk}</span>
                </div>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-2xl text-xs text-slate-300 space-y-2 border border-slate-700/40">
                <div className="font-bold text-cyan-400 flex items-center gap-1">
                  <Info className="w-4 h-4" /> Board Clinical Pearl
                </div>
                <p className="leading-relaxed">
                  The ICH Score is a validated 30-day mortality predictor for acute intraparenchymal hemorrhage. Scores range from 0 (0% mortality) to 6 (100% mortality).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ASPECTS CALCULATOR */}
      {activeTab === 'aspects' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800/80 rounded-3xl border border-slate-700/60 p-5 md:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-base md:text-lg font-bold text-slate-100">ASPECTS Score Topographic Regions</h2>
                <p className="text-xs text-slate-400">Uncheck regions showing early ischemic hypoattenuation (-1 pt each)</p>
              </div>
              <button
                onClick={() => setAspectsRegions({
                  Caudate: true, PLIC: true, Lentiform: true, InsularRibbon: true,
                  M1: true, M2: true, M3: true, M4: true, M5: true, M6: true
                })}
                className="self-start sm:self-auto flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 bg-slate-900 px-3 py-2 rounded-xl border border-slate-700/60 active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset (10)
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Ganglionic Level */}
              <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-700/50 space-y-2.5">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                  Ganglionic Level Cuts (4 regions)
                </h3>
                {[
                  { key: 'Caudate', name: 'Caudate Head' },
                  { key: 'Lentiform', name: 'Lentiform Nucleus' },
                  { key: 'PLIC', name: 'Internal Capsule (PLIC)' },
                  { key: 'InsularRibbon', name: 'Insular Cortex (Ribbon)' },
                ].map(item => (
                  <label key={item.key} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/60 cursor-pointer select-none">
                    <span className="text-xs md:text-sm font-medium text-slate-200">{item.name}</span>
                    <input
                      type="checkbox"
                      checked={aspectsRegions[item.key]}
                      onChange={() => toggleAspectsRegion(item.key)}
                      className="w-5 h-5 rounded text-cyan-500 bg-slate-800 border-slate-600 focus:ring-cyan-400"
                    />
                  </label>
                ))}
              </div>

              {/* Supraganglionic Level */}
              <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-700/50 space-y-2.5">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                  Cortical MCA Regions (6 regions)
                </h3>
                {[
                  { key: 'M1', name: 'M1: Anterior MCA cortex' },
                  { key: 'M2', name: 'M2: MCA cortex lateral to insula' },
                  { key: 'M3', name: 'M3: Posterior MCA cortex' },
                  { key: 'M4', name: 'M4: Anterior MCA supraganglionic' },
                  { key: 'M5', name: 'M5: Lateral MCA supraganglionic' },
                  { key: 'M6', name: 'M6: Posterior MCA supraganglionic' },
                ].map(item => (
                  <label key={item.key} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/60 cursor-pointer select-none">
                    <span className="text-xs md:text-sm font-medium text-slate-200">{item.name}</span>
                    <input
                      type="checkbox"
                      checked={aspectsRegions[item.key]}
                      onChange={() => toggleAspectsRegion(item.key)}
                      className="w-5 h-5 rounded text-cyan-500 bg-slate-800 border-slate-600 focus:ring-cyan-400"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/80 rounded-3xl border border-slate-700/60 p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">ASPECTS Score Result</h3>
              <div className="p-6 bg-slate-900/90 rounded-2xl border border-cyan-500/30 text-center">
                <span className="text-5xl font-extrabold text-cyan-400">{calculateAspectsScore()}</span>
                <span className="text-slate-400 text-lg font-medium"> / 10</span>
                <div className={`mt-3 text-xs md:text-sm font-bold p-2.5 rounded-xl ${
                  calculateAspectsScore() >= 8 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                  calculateAspectsScore() >= 6 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}>
                  {calculateAspectsScore() >= 8 ? 'Favorable (Small Core Infarct)' :
                   calculateAspectsScore() >= 6 ? 'Moderate Ischemic Core' : 'Large Ischemic Core (ASPECTS ≤ 5)'}
                </div>
              </div>

              <div className="bg-slate-900/50 p-4 rounded-2xl text-xs text-slate-300 space-y-2 border border-slate-700/40">
                <div className="font-bold text-cyan-400 flex items-center gap-1">
                  <Info className="w-4 h-4" /> Board Exam Pearl
                </div>
                <p className="leading-relaxed">
                  ASPECTS ≤ 7 is associated with poor functional outcome and higher risk of symptomatic intracranial hemorrhage post-revascularization.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CHA2DS2-VASc CALCULATOR */}
      {activeTab === 'chads' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800/80 rounded-3xl border border-slate-700/60 p-5 md:p-6 space-y-4">
            <h2 className="text-base md:text-lg font-bold text-slate-100">CHA₂DS₂-VASc Risk Criteria</h2>
            <div className="space-y-2.5">
              {[
                { label: 'C: Congestive Heart Failure', state: chadsC, set: setChadsC, pts: '+1 pt' },
                { label: 'H: Hypertension history', state: chadsH, set: setChadsH, pts: '+1 pt' },
                { label: 'A₂: Age ≥ 75 years', state: chadsA2, set: setChadsA2, pts: '+2 pts' },
                { label: 'D: Diabetes Mellitus', state: chadsD, set: setChadsD, pts: '+1 pt' },
                { label: 'S₂: Prior Stroke, TIA, or Thromboembolism', state: chadsS2, set: setChadsS2, pts: '+2 pts' },
                { label: 'V: Vascular Disease (prior MI, PAD, aortic plaque)', state: chadsV, set: setChadsV, pts: '+1 pt' },
                { label: 'A: Age 65 - 74 years', state: chadsA1, set: setChadsA1, pts: '+1 pt' },
                { label: 'Sc: Sex Category Female', state: chadsSc, set: setChadsSc, pts: '+1 pt' },
              ].map((item, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] ${
                    item.state
                      ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                      : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <span className="text-xs md:text-sm font-medium pr-2">{item.label}</span>
                  <div className="flex items-center space-x-3 shrink-0">
                    <span className="text-xs text-cyan-400 font-bold">{item.pts}</span>
                    <input
                      type="checkbox"
                      checked={item.state}
                      onChange={e => item.set(e.target.checked)}
                      className="w-5 h-5 rounded text-cyan-500 bg-slate-800 border-slate-600 focus:ring-cyan-400"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/80 rounded-3xl border border-slate-700/60 p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Anticoagulation Recommendation</h3>
              <div className="p-6 bg-slate-900/90 rounded-2xl border border-cyan-500/30 text-center">
                <span className="text-5xl font-extrabold text-cyan-400">{calculateChadsScore()}</span>
                <span className="text-slate-400 text-lg font-medium"> pts</span>
                <div className={`mt-3 text-xs md:text-sm font-bold p-2.5 rounded-xl ${
                  calculateChadsScore() >= 2 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-800 text-slate-300'
                }`}>
                  {calculateChadsScore() >= 2 ? 'Oral Anticoagulation Indicated (Class I)' : 'Low Risk - AC Optional'}
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Any patient with a history of prior Stroke or TIA gets +2 points automatically, placing them in the high-risk anticoagulation category.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ROPE SCORE CALCULATOR */}
      {activeTab === 'rope' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800/80 rounded-3xl border border-slate-700/60 p-5 md:p-6 space-y-4">
            <h2 className="text-base md:text-lg font-bold text-slate-100">Risk of Paradoxical Embolism (RoPE) Score</h2>
            <p className="text-xs text-slate-400">Calculates probability that a PFO is pathogenic rather than incidental in cryptogenic stroke</p>

            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-1">Patient Age at Stroke Onset:</label>
                <select
                  value={ropeAgeCategory}
                  onChange={e => setRopeAgeCategory(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-3 text-xs md:text-sm text-slate-100 focus:ring-cyan-500"
                >
                  <option value={5}>18 - 29 years (+5 points)</option>
                  <option value={4}>30 - 39 years (+4 points)</option>
                  <option value={3}>40 - 49 years (+3 points)</option>
                  <option value={2}>50 - 59 years (+2 points)</option>
                  <option value={1}>60 - 69 years (+1 point)</option>
                  <option value={0}>≥ 70 years (0 points)</option>
                </select>
              </div>

              {[
                { label: 'No history of Hypertension (+1 pt)', state: ropeNoHtn, set: setRopeNoHtn },
                { label: 'No history of Diabetes (+1 pt)', state: ropeNoDm, set: setRopeNoDm },
                { label: 'No history of prior Stroke / TIA (+1 pt)', state: ropeNoStroke, set: setRopeNoStroke },
                { label: 'Non-smoker (+1 pt)', state: ropeNonSmoker, set: setRopeNonSmoker },
                { label: 'Cortical Infarct on Neuroimaging (+1 pt)', state: ropeCortical, set: setRopeCortical },
              ].map((item, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] ${
                    item.state
                      ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200'
                      : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <span className="text-xs md:text-sm font-medium pr-2">{item.label}</span>
                  <input
                    type="checkbox"
                    checked={item.state}
                    onChange={e => item.set(e.target.checked)}
                    className="w-5 h-5 rounded text-cyan-500 bg-slate-800 border-slate-600 focus:ring-cyan-400 shrink-0"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/80 rounded-3xl border border-slate-700/60 p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">PFO Pathogenicity Estimate</h3>
              <div className="p-6 bg-slate-900/90 rounded-2xl border border-cyan-500/30 text-center">
                <span className="text-5xl font-extrabold text-cyan-400">{calculateRopeScore()}</span>
                <span className="text-slate-400 text-lg font-medium"> / 10</span>
                <div className="mt-3 text-xs font-bold text-cyan-300 p-2.5 bg-slate-800 rounded-xl border border-slate-700">
                  Attributable Risk: {getRopeAttributableRisk(calculateRopeScore())}
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Younger patients without traditional vascular risk factors and with cortical infarcts score higher, indicating higher PFO causality.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ABC/2 HEMATOMA VOLUME ESTIMATOR */}
      {activeTab === 'abc2' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800/80 rounded-3xl border border-slate-700/60 p-5 md:p-6 space-y-4">
            <h2 className="text-base md:text-lg font-bold text-slate-100">ABC / 2 Hematoma Volume Estimator</h2>
            <p className="text-xs text-slate-400">Rapid formula for intraparenchymal hematoma volume calculation from head CT</p>

            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-1">A: Maximum Diameter on Largest CT Slice (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  value={dimA}
                  onChange={e => setDimA(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-3 text-slate-100 text-xs md:text-sm focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-1">B: Width Perpendicular to A on Same Slice (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  value={dimB}
                  onChange={e => setDimB(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-3 text-slate-100 text-xs md:text-sm focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-300 mb-1">C: Depth (Slice Thickness x Number of Slices with Blood)</label>
                <input
                  type="number"
                  step="0.1"
                  value={dimC}
                  onChange={e => setDimC(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-3 text-slate-100 text-xs md:text-sm focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-800/80 rounded-3xl border border-slate-700/60 p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated ICH Volume</h3>
              <div className="p-6 bg-slate-900/90 rounded-2xl border border-cyan-500/30 text-center">
                <span className="text-5xl font-extrabold text-cyan-400">{calculateAbc2Volume()}</span>
                <span className="text-slate-400 text-xl font-bold ml-1"> mL (cc)</span>
                <div className={`mt-3 text-xs font-bold p-2.5 rounded-xl ${
                  parseFloat(calculateAbc2Volume()) >= 30 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                }`}>
                  {parseFloat(calculateAbc2Volume()) >= 30 ? 'Volume ≥ 30 mL (+1 ICH Score Point)' : 'Volume < 30 mL'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
