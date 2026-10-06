import { Chapter } from '../types';

export const chaptersData: Chapter[] = [
  {
    id: 1,
    title: "Chapter 1: Overview & Emergency Code Stroke Assessment",
    description: "Code Stroke activation, NIHSS scoring, stroke mimics, and acute triage workflow.",
    iconName: "Clock",
    topics: [
      {
        title: "Emergency Code Stroke Workflow & Triage",
        content: [
          "Rapid assessment of Last Known Normal (LKN) or Time of Symptom Discovery is the single most critical initial timestamp in acute stroke evaluation.",
          "Target Emergency Time Metrics (AHA/ASA Target: Stroke Guidelines):",
          "  - Door-to-CT completion: < 25 minutes",
          "  - Door-to-CT interpretation: < 45 minutes",
          "  - Door-to-Needle time (IV thrombolysis): < 45-60 minutes",
          "  - Door-to-Puncture time (Mechanical Thrombectomy): < 90 minutes (direct presentation) or < 60 minutes (transfer)."
        ],
        pearls: [
          "If the patient woke up with stroke symptoms, Last Known Normal (LKN) is defined as the time the patient was last seen awake and at baseline before going to sleep!"
        ]
      },
      {
        title: "NIHSS (National Institutes of Health Stroke Scale)",
        content: [
          "Quantitative 15-item quantitative stroke severity scale ranging from 0 to 42 points.",
          "Items evaluated:",
          "  1a. Level of Consciousness (0-3)",
          "  1b. LOC Questions (0-2)",
          "  1c. LOC Commands (0-2)",
          "  2. Best Gaze (0-2)",
          "  3. Visual Fields (0-3)",
          "  4. Facial Palsy (0-3)",
          "  5a/b. Motor Arm - Left/Right (0-4)",
          "  6a/b. Motor Leg - Left/Right (0-4)",
          "  7. Limb Ataxia (0-2)",
          "  8. Sensory (0-2)",
          "  9. Best Language / Aphasia (0-3)",
          "  10. Dysarthria (0-2)",
          "  11. Extinction / Inattention (Hemineglect) (0-2)"
        ],
        bullets: [
          "NIHSS Severity Categories: 0-4 (Minor/Mild stroke), 5-15 (Moderate stroke), 16-20 (Moderate-Severe stroke), 21-42 (Severe stroke).",
          "NIHSS Bias: The NIHSS is heavily weighted toward anterior circulation and left hemispheric strokes (language items). Posterior circulation strokes (vertigo, ataxia, isolated cranial neuropathies) may have low NIHSS scores despite high clinical severity!"
        ]
      },
      {
        title: "Stroke Mimics & Differential Diagnosis",
        content: [
          "Approximately 20-30% of emergency code stroke activations are stroke mimics.",
          "Common Mimics:",
          "  - Hypoglycemia / Hyperglycemia: Always check fingerstick blood glucose immediately!",
          "  - Post-ictal Todd's Paralysis: Focal neurological deficit following a seizure (often accompanied by confusion).",
          "  - Complex Migraine / Migraine with Aura: History of headache, scintillating scotomas, spreading sensory symptoms.",
          "  - Functional Neurological Disorder (Conversion Disorder): Non-anatomical motor/sensory deficits (e.g., positive Hoover's sign for leg weakness).",
          "  - Structural Lesions: Brain tumors, subdural hematoma, cerebral abscess, MS plaques."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Chapter 2: Initial Stroke Evaluation & Diagnostics",
    description: "Pre-treatment diagnostic criteria, blood pressure goals, and laboratory requirements.",
    iconName: "Stethoscope",
    topics: [
      {
        title: "Essential Pre-treatment Workup & Laboratory Requirements",
        content: [
          "The ONLY laboratory test required BEFORE initiating treatment with IV tPA (Alteplase) or Tenecteplase (TNK) is a finger-stick blood glucose (unless the patient is known or suspected to be on oral anticoagulants or have a pre-existing severe coagulopathy).",
          "Thrombolysis should NOT be delayed while awaiting routine CBC, PT/INR, PTT, or cardiac markers if there is no clinical suspicion of baseline coagulopathy."
        ],
        bullets: [
          "Fingerstick Blood Glucose: Must be > 50 mg/dL (2.8 mmol/L) to exclude hypoglycemia.",
          "Platelet Count Threshold: Must be ≥ 100,000/μL.",
          "INR Threshold: Must be ≤ 1.7 if on Warfarin.",
          "aPTT Threshold: Must be in normal range if on Unfractionated Heparin (UFH) within 48 hours.",
          "DOAC Exclusion: Full-dose Factor Xa inhibitor or Direct Thrombin Inhibitor within 48 hours is a contraindication to IV tPA/TNK unless specific lab assays (anti-Xa level < 0.5 U/mL or ecarin clotting time) are normal."
        ],
        pearls: [
          "Do not delay tPA/TNK infusion for pending lab results (like PT/INR or troponin) unless the patient is taking anticoagulants or has a known bleeding disorder!"
        ]
      },
      {
        title: "Acute Blood Pressure Management Before & After Thrombolysis",
        content: [
          "Pre-tPA Blood Pressure Target: Blood pressure MUST be lowered to < 185/110 mmHg BEFORE initiating IV tPA/TNK infusion.",
          "Post-tPA Blood Pressure Target: Blood pressure MUST be maintained < 180/105 mmHg for at least the first 24 hours post-thrombolysis.",
          "Monitoring Protocol: Monitor BP every 15 minutes for 2 hours from start of tPA, then every 30 minutes for 6 hours, then every 1 hour for 16 hours (total 24 hours)."
        ],
        bullets: [
          "First-line IV Agents: Labetalol 10-20 mg IV push over 1-2 min (may repeat once), Nicardipine IV infusion (5 mg/hr, titrate by 2.5 mg/hr q5-15 min to max 15 mg/hr), or Clevidipine IV infusion (1-2 mg/hr)."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Chapter 3: Vascular Neuroanatomy",
    description: "Blood-Brain Barrier, Arterial Anatomy, Circle of Willis, and Vasculature.",
    iconName: "Brain",
    topics: [
      {
        title: "Blood-Brain Barrier (BBB)",
        content: [
          "Disrupted with ischemic stroke and vasogenic edema (hyperintense signal seen on T1+ contrast imaging).",
          "Absent in circumventricular organs: Area Postrema (chemoreceptor trigger zone), Hypophysis (pituitary), and Pineal Gland (due to need for extensive neuroendocrine signal crosstalk).",
          "Impermeable to glucose (requires GLUT-1 transporter), hydrophilic molecules, and large proteins."
        ],
        bullets: [
          "Endothelium: Closest layer to lumen. No fenestrations, connected by tight junctions. Disruption -> platelet aggregation + thrombus formation.",
          "cAMP in Endothelium: cAMP causes relaxation of fibers -> endothelial expansion + tight junction compression -> REDUCES permeability. Aggrenox increases cAMP -> vasodilation -> headaches.",
          "VEGF + Protein Kinase C: Contraction of fibers -> endothelial contraction + tight junction expansion -> INCREASES permeability.",
          "Prothrombotic Substances: Factor Va, Factor VIII, tissue factor, PAI-1. Atherosclerotic plaques overexpress PAI-1 (inhibits in-vivo tPA).",
          "Anticoagulant Substances: AT III, NO, prostacyclin, heparin sulfate, endogenous tPA.",
          "Tight Junctions: Limit passive diffusion of solutes across BBB. Dysregulated in MS, Alzheimer's, stroke, seizures.",
          "Adherens Junctions: Cadherins (catenins link cadherins to actin cytoskeleton).",
          "Astrocytes: Regulate water/ionic homeostasis, scavenge ROS, inactivate neurotransmitters. Rich in K+ channels & Aquaporin-4 end-feet (affected in cytotoxic edema -> swelling)."
        ]
      },
      {
        title: "Vessel Formation & Arterial Layers",
        content: [
          "Angiogenesis: Forming new vessels from existing networks. + growth factors: VEGF (induced by hypoxia); - growth factors: angiostatin, endostatin.",
          "Vascular Smooth Muscle: Proliferates in atherosclerosis. Hypertrophy (increase SM size) by Angiotensin II, Thrombin, HTN. Hyperplasia (increase SM cell count) from restenosis post-CEA, inflammatory cytokines."
        ],
        bullets: [
          "Tunica Intima: Endothelial > smooth muscle cells. Primary site of arterial dissection.",
          "Tunica Media: Smooth muscle cells. Medial hyperplasia = most common type of Fibromuscular Dysplasia (FMD).",
          "Tunica Adventitia: Collagen, elastin, fibrinous tissue. Dysfunctional in scurvy (vitamin C required for collagen synthesis).",
          "Intracranial vs Extracranial: Media + adventitia are significantly thinner in intracranial vessels than extracranial vessels -> intracranial dissections carry a much higher risk of Subarachnoid Hemorrhage (SAH)."
        ]
      },
      {
        title: "Anterior Circulation Anatomy",
        content: [
          "Aortic Arch Branches: Brachiocephalic -> R CCA + R Subclavian (gives off R Vertebral). L CCA. L Subclavian -> L Vertebral.",
          "Bovine Arch Variant (20% of population): Shared origin of brachiocephalic artery and L CCA. Usually asymptomatic.",
          "Direct L Vertebral origin from aortic arch occurs in 4% of cases.",
          "Subclavian Steal Syndrome: Stenosis of proximal subclavian artery compromises distal VA perfusion. Pressure distal to stenosis drops below CTL VA/basilar pressure -> retrograde blood flow down ipsilateral vertebral artery. Presentation: IPS arm claudication, BP difference > 20 mmHg between arms (lower on affected side). Dx: Doppler US. Tx: Stenting/angioplasty or bypass.",
          "Carotid Artery: Bifurcates at C3-C5. ICA arises posterolaterally to ECA.",
          "ICA Segments: C1 (Cervical - aberrant ICA causes pulsatile tinnitus), C2 (Petrous), C3 (Lacerum), C4 (Cavernous - contains CN III, IV, V1, V2 in lateral wall, CN VI next to ICA), C5 (Supraclinoid - gives off Ophthalmic, PComm, Anterior Choroidal, MCA/ACA bifurcation)."
        ],
        pearls: [
          "Anterior Choroidal Artery Infarct: Supplies GPi, caudate tail, posterior limb of internal capsule (PLIC), optic tract, LGN, cerebral peduncle. Clinical Triad: Hemiplegia (PLIC), Hemisensory loss (VPL/VPN), Homonymous Hemianopia (LGN)."
        ]
      },
      {
        title: "Circle of Willis & Branch Anatomy",
        content: [
          "Complete Circle of Willis present in only 25% of individuals.",
          "Recurrent Artery of Heubner (Proximal A2 ACA): Supplies caudate head, anterior limb of internal capsule (ALIC), GPi, hypothalamus. Stroke causes: Contralateral face/arm weakness, hemichorea, dysarthria.",
          "Azygous ACA: Single A2 trunk from fused A1 segments. Associated with corpus callosum dysgenesis, lobar holoprosencephaly, AVMs.",
          "Basilar Artery & Branches: AICA (gives internal auditory artery -> IPS hearing loss/tinnitus), Paramedian/pontine perforators, SCA, PCA. Fenestrated basilar artery associated with 7% aneurysm incidence."
        ]
      },
      {
        title: "Spinal Cord Vasculature & Horner's Pathway",
        content: [
          "Anterior Spinal Artery (ASA): Arises from VA, supplies anterior 2/3 of spinal cord (anterior horns + medial medulla).",
          "Artery of Adamkiewicz: Arises from aorta (80% left side between T8-L1), supplies ASA below T8. Occlusion leads to Anterior Spinal Artery Syndrome.",
          "T4-T8 Watershed Zone: Highly vulnerable to hypoperfusion during thoracic/aortic surgery.",
          "Horner's Syndrome 3-Order Pathway: 1st order (Hypothalamus -> C8-T2 Ciliospinal center of Budge); 2nd order (Preganglionic fibers exit SC over lung apex -> Superior Cervical Ganglion at carotid bifurcation); 3rd order (Postganglionic fibers via ICA wall -> CN V1 -> Iris dilator & Muller muscle)."
        ],
        pearls: [
          "Lesion distal to carotid bifurcation (3rd order postganglionic ICA dissection) causes Horner's WITHOUT anhidrosis because sweat gland fibers branch off at SCG and travel with the ECA!"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Chapter 4: Stroke Syndromes",
    description: "Anterior, Posterior, Neuro-ophthalmology, and Lacunar Stroke Syndromes.",
    iconName: "Activity",
    topics: [
      {
        title: "Anterior Circulation Syndromes",
        content: [
          "ACA Stroke: Contralateral leg > arm weakness, loss of voluntary control of micturition.",
          "Right (Non-Dominant) MCA Stroke: Left hemiplegia, left sensory loss, left hemineglect, visual neglect (R inferior frontal gyrus), apraxia.",
          "Visual Agnosia: Inability to recognize visually presented objects (intact vision). Lesion: Occipitotemporal (O-T) lobe.",
          "Prosopagnosia: Inability to recognize familiar faces visually. Lesion: Bilateral fusiform gyrus (O-T cortex). Often associated with achromatopsia (inability to name/match visual colors).",
          "Left (Dominant) MCA Stroke: Right hemiplegia/sensory loss, Broca/Wernicke aphasia.",
          "Gerstmann Syndrome: Agraphia, acalculia, right-left confusion, finger agnosia. Lesion: Dominant inferior parietal lobe (specifically angular gyrus)."
        ]
      },
      {
        title: "Aphasia & Lacunar Syndromes",
        content: [
          "Broca Aphasia: Nonfluent speech, intact comprehension. Lesion: L M2 superior trunk, inferior frontal gyrus.",
          "Wernicke Aphasia: Impaired comprehension, fluent non-sensical speech. Lesion: L M2 inferior trunk, superior temporal gyrus.",
          "Transcortical Motor/Sensory: Similar to Broca/Wernicke BUT repetition is preserved! (Watershed MCA/ACA or MCA/PCA).",
          "Conduction Aphasia: Repetition severely impaired, comprehension & fluency intact. Lesion: Arcuate fasciculus.",
          "Pure Motor Lacunar Stroke: Posterior limb of internal capsule (PLIC), corona radiata, or basis pontis.",
          "Pure Sensory Lacunar Stroke: VPL nucleus of the thalamus.",
          "Ataxic Hemiparesis: PLIC, corona radiata, or pons.",
          "Clumsy-Hand Dysarthria: Contralateral paramedian pons or genu of internal capsule."
        ]
      },
      {
        title: "Neuro-ophthalmology Vascular Disorders",
        content: [
          "Cilioretinal Artery: Present in 15-50% of population. Arises from short posterior ciliary arteries, supplies macula. Preserves macular vision in Central Retinal Artery Occlusion (CRAO)!",
          "Central Retinal Artery Occlusion (CRAO): Sudden, painless, monocular vision loss. Cherry-red spot on macula, pale edematous retina, afferent pupillary defect (RAPD).",
          "Anterior Ischemic Optic Neuropathy (AION): Painless, acute, altitudinal visual field defect. Arteritic (15%, Giant Cell Arteritis - severe optic disc edema, elevated ESR/CRP) vs Non-Arteritic (85%, HTN, DM, sildenafil, post-CABG).",
          "Posterior Ischemic Optic Neuropathy (PION): Ischemia behind optic disc. Perioperative risk post prolonged prone spinal surgery or neck dissection."
        ]
      },
      {
        title: "Posterior Circulation Syndromes",
        content: [
          "Lateral Medullary (Wallenburg) Syndrome: V4 vertebral artery or PICA occlusion.",
          "Wallenburg Symptoms: IPS ataxia (inferior cerebellar peduncle), vertigo/nystagmus (vestibular nuclei), CTL body pain/temp loss (spinothalamic), IPS facial pain/temp loss (spinal trigeminal tract), IPS Horner's (descending SANS), dysphagia/dysphonia/decreased gag (Nucleus Ambiguus - CN X), IPS taste loss (Nucleus solitarius).",
          "Medial Medullary Syndrome: VA or lower Basilar artery occlusion. CTL arm/leg weakness (pyramidal tract), CTL vibration/position loss (medial lemniscus), IPS tongue deviation (CN XII).",
          "Locked-in Syndrome: Bilateral ventral pontine infarct. Quadriplegia, horizontal gaze palsy, preserved vertical eye movement & consciousness.",
          "Weber Syndrome (P1 PCA): IPS CN III palsy + CTL hemiparesis (cerebral peduncle/corticospinal tract).",
          "Claude Syndrome (P1 PCA): IPS CN III palsy + CTL ataxia/tremor (red nucleus, superior cerebellar peduncle).",
          "Benedikt Syndrome (P1 PCA): IPS CN III palsy + CTL hemiparesis + CTL ataxia/chorea/tremor.",
          "Parinaud Syndrome (Dorsal Midbrain): Upgaze palsy, light-near dissociation, convergence-retraction nystagmus (superior colliculus)."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Chapter 5: Epidemiology & Risk Factors",
    description: "Stroke statistics, modifiable vs non-modifiable risk factors, and hypertension trial data.",
    iconName: "PieChart",
    topics: [
      {
        title: "Epidemiology & General Risk Factors",
        content: [
          "Stroke is the 5th leading cause of death in the US and the leading cause of long-term adult disability.",
          "Only 25% of strokes are preceded by TIA or prior stroke.",
          "Age is the strongest single determinant of stroke risk.",
          "Over 90% of all strokes are attributable to modifiable risk factors!"
        ]
      },
      {
        title: "Modifiable Risk Factors & Clinical Guidelines",
        content: [
          "Hypertension: #1 modifiable risk factor for stroke. Every 10 mmHg SBP reduction reduces stroke risk by 33%.",
          "SPRINT Trial (2015): Intensive SBP target < 120 mmHg vs standard < 140 mmHg showed significant reduction in CV events and mortality.",
          "Blood Pressure Targets: AHA recommendation for stroke/TIA patients is SBP < 130/80 mmHg.",
          "Atrial Fibrillation: Increases stroke risk 5-fold.",
          "Diabetes Mellitus: Increases stroke risk 1.5 - 3x. Glycemic target HbA1c < 7.0%.",
          "Hyperlipidemia: AHA target for TIA/stroke patients with atherosclerotic disease is high-potency statin targeting LDL < 70 mg/dL (or ≥50% LDL reduction).",
          "Smoking: 2-4x increased risk of stroke/SAH. Smoking + oral contraceptive pills (OCP) increases stroke risk 7.2x!"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Chapter 6: Stroke Pathophysiology",
    description: "Cerebral blood flow, autoregulation, ischemic penumbra, and secondary injury mechanisms.",
    iconName: "Zap",
    topics: [
      {
        title: "Cerebral Autoregulation & Hemodynamics",
        content: [
          "Cerebral Perfusion Pressure (CPP): CPP = MAP - ICP (Normal range: 50-150 mmHg).",
          "Autoregulation Range: Low BP/CPP or elevated CO2 -> vasodilation. High BP/CPP or low CO2 -> vasoconstriction.",
          "Cerebral Blood Flow (CBF): CBF = CBV / MTT. Normal CBF = 50-55 mL/100g/min.",
          "Ischemic Thresholds:",
          "  - CBF < 25 mL/100g/min: Ischemia / EEG slowing.",
          "  - CBF < 10-15 mL/100g/min: Cellular ion pump failure, irreversible infarction core.",
          "Oxygen Extraction Fraction (OEF): As CBF drops, OEF increases to maintain Cerebral Metabolic Rate of Oxygen (CMRO2)."
        ]
      },
      {
        title: "Ischemic Penumbra vs Core",
        content: [
          "Ischemic Core: Tissue irreversibly injured (CBF 10-25%). Decreased CBF, decreased CBV, increased MTT.",
          "Ischemic Penumbra: Ischemic but still viable tissue - primary target for reperfusion therapy (tPA / Thrombectomy). Decreased CBF, NORMAL or INCREASED CBV (due to compensatory autoregulatory vasodilation), increased MTT."
        ],
        pearls: [
          "Perfusion-Weighted Imaging (PWI) / Diffusion-Weighted Imaging (DWI) Mismatch: DWI measures core (restricted diffusion); PWI perfusion deficit minus DWI core equals the salvageable PENUMBRA!"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Chapter 7: Classification of Stroke & Vasculopathy",
    description: "TOAST classification, arterial dissections, ICAD, vasculitis, CADASIL, Moyamoya, and RCVS.",
    iconName: "GitBranch",
    topics: [
      {
        title: "TOAST Subtypes & Large Vessel Etiology",
        content: [
          "Large Artery Atherosclerosis (LAA): Atherosclerosis occurs in turbulent, low-shear-stress regions (bifurcations). Superoxide production increases, NO decreases.",
          "Intracranial Atherosclerotic Disease (ICAD): Most common stroke etiology worldwide (especially Asian, Black, Hispanic populations). SAMMPRIS Trial: Aggressive medical therapy (DAPT + BP/LDL control) WAS SUPERIOR to intracranial stenting (stenting had 14.7% 30-day stroke/death risk vs 5.8% medical)."
        ]
      },
      {
        title: "Carotid Dissection",
        content: [
          "Most common cause of ischemic stroke in young patients (<50 years, 20% of young strokes). Extracranial (90%) > Intracranial (10%).",
          "Symptoms: Unilateral neck pain, headache, partial Horner's syndrome (ptosis + miosis without anhidrosis).",
          "Diagnosis: CTA/MRA with T1 fat suppression (shows intramural hematoma, crescent sign, flame sign). Gold standard: DSA.",
          "Treatment: Antiplatelet or Anticoagulation for 3-6 months (CADISS trial showed no difference between AP and AC)."
        ]
      },
      {
        title: "Non-Atherosclerotic Vasculopathies",
        content: [
          "Moyamoya Disease: Progressive bilateral supraclinoid ICA stenosis with fine collateral networks ('puff of smoke' on angiography). Bimodal: kids ~4yo (AIS), adults 30-40s (ICH). Associated with RNF213 mutation. Tx: Surgical revascularization (STA-MCA bypass or EDAS).",
          "Reversible Cerebral Vasoconstriction Syndrome (RCVS): Recurrent thunderclap headaches with segmental arterial vasoconstriction ('string of beads' on angiogram). Resolves spontaneously within 8-12 weeks. Triggered by SSRIs, triptans, postpartum. Tx: Verapamil/nimodipine, stop offending drug.",
          "Fibromuscular Dysplasia (FMD): Non-inflammatory vasculopathy of medium/large arteries, mostly middle 1/3 of extracranial ICA in females. Type 1 (80%): Medial hyperplasia ('string of beads' outpouchings)."
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Chapter 8: Acute Stroke Management & Secondary Prevention",
    description: "tPA/TNK administration, endovascular thrombectomy trials, DAPT guidelines, and CEA/CAS.",
    iconName: "Clock",
    topics: [
      {
        title: "Thrombolytic Therapy (IV tPA / TNK)",
        content: [
          "IV tPA Dose: 0.9 mg/kg (max 90 mg). 10% bolus over 1 min, 90% infusion over 60 min.",
          "Tenecteplase (TNK): 0.25 mg/kg single IV bolus. Higher fibrin specificity & longer half-life.",
          "Time Window: 0 - 3 hours (FDA approved), 3 - 4.5 hours (AHA/ASA endorsed per ECASS III).",
          "Blood Pressure Criteria: BP must be < 185/110 mmHg prior to giving tPA, and maintained < 180/105 mmHg for the first 24 hours post-tPA.",
          "First-line IV Anti-hypertensives: Labetalol 10-20 mg IV, Nicardipine infusion (5-15 mg/hr), Clevidipine infusion."
        ],
        bullets: [
          "NINDS tPA Trial: tPA treated patients were 30% more likely to have minimal/no disability at 3 months (NNT = 8). Symptomatic ICH risk was 6.4% vs 0.6% placebo.",
          "Symptomatic ICH Management: Stop tPA, stat non-con head CT, send CBC, PT/INR, PTT, fibrinogen, type & cross. Administer Cryoprecipitate (10 units) to restore fibrinogen (>150 mg/dL), Tranexamic Acid (1g IV) or Aminocaproic Acid."
        ]
      },
      {
        title: "Endovascular Thrombectomy (EVT) Landmark Trials",
        content: [
          "Window 0-6 hours: MR CLEAN, EXTEND-IA, SWIFT-PRIME, REVASCAT, ESCAPE proved benefit of stent retriever EVT + tPA over tPA alone in anterior circulation LVO (ICA, M1). NNT for mRS 0-2 improvement = 2.6!",
          "Window 6-24 hours:",
          "  - DAWN Trial: LVO (ICA or M1) with clinical-core mismatch (NIHSS >= 10, core < 31-51 cc on CTP/DWI). EVT group 49% mRS 0-2 vs 13% medical!",
          "  - DEFUSE 3 Trial: LVO with perfusion-core mismatch at 6-16 hours (core < 70 cc, mismatch ratio >= 1.8, penumbra >= 15 cc). EVT group 45% mRS 0-2 vs 17% medical."
        ]
      },
      {
        title: "Antiplatelet Trials & Guidelines",
        content: [
          "High-Risk TIA (ABCD2 >= 4) or Minor Stroke (NIHSS <= 3):",
          "  - CHANCE Trial: DAPT (Aspirin + Clopidogrel with 300mg loading dose) started within 24h for 21 days, then Clopidogrel monotherapy -> 30% RRR in stroke at 90 days without increased bleeding.",
          "  - POINT Trial: DAPT (Aspirin + Clopidogrel with 600mg loading dose) started within 12h for 90 days -> reduced ischemic stroke but increased major bleeding (0.9% vs 0.4%). Benefit highest in first 21 days!",
          "  - AHA Recommendation: DAPT (ASA + Clopidogrel) started within 24 hours for 21 days is Class I for high-risk TIA / minor stroke."
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Chapter 9: Clinical Cardiology & Stroke",
    description: "Atrial Fibrillation, DOAC trials, PFO closure trials, and Infective Endocarditis.",
    iconName: "Heart",
    topics: [
      {
        title: "Atrial Fibrillation & Anticoagulation",
        content: [
          "AFib increases embolic stroke risk 5-fold (4.5% annual risk without AC). Left Atrial Appendage (LAA) is the site of >90% of thrombi in non-valvular AFib.",
          "CHA₂DS₂-VASc Score: Congestive HF (+1), HTN (+1), Age >= 75 (+2), Diabetes (+1), Stroke/TIA (+2), Vascular disease (+1), Age 65-74 (+1), Sex Category Female (+1). Score >= 2 in men or >= 3 in women requires oral anticoagulation.",
          "DOACs vs Warfarin: DOACs (Apixaban, Rivaroxaban, Dabigatran, Edoxaban) are non-inferior or superior to Warfarin with significantly LOWER rates of Intracranial Hemorrhage (ICH)!"
        ],
        bullets: [
          "ARISTOTLE (Apixaban): Superior to warfarin in stroke prevention & reduced mortality with less bleeding.",
          "RE-LY (Dabigatran): 150mg BID superior to warfarin in stroke prevention. Reversal agent: Idarucizumab (Praxbind).",
          "ROCKET-AF (Rivaroxaban): Non-inferior to warfarin. Reversal agent for Factor Xa inhibitors: Andexanet alfa.",
          "Valvular AFib (Mitral Stenosis or Mechanical Valves): WARFARIN IS MANDATORY. DOACs are contraindicated!"
        ]
      },
      {
        title: "Patent Foramen Ovale (PFO) & Stroke",
        content: [
          "PFO present in ~25% of adults, higher prevalence in cryptogenic stroke patients < 60 years.",
          "ROPE Score (Risk of Paradoxical Embolism): Higher score (7-10) indicates high probability PFO is pathogenic rather than incidental.",
          "PFO Closure Landmark Trials (CLOSE, RESPECT, DEFENSE-PFO, REDUCE): Transcatheter PFO closure + antiplatelets significantly reduced recurrent ischemic stroke compared to antiplatelet therapy alone in young patients (<60yo) with cryptogenic stroke and high-risk PFO features (atrial septal aneurysm or large R-to-L shunt)."
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Chapter 10: Genetic Stroke Syndromes",
    description: "CADASIL, CARASIL, Fabry Disease, RVCL, MELAS, and Marfan Syndrome.",
    iconName: "Dna",
    topics: [
      {
        title: "Monogenic Stroke Disorders",
        content: [
          "CADASIL: Autosomal Dominant, NOTCH3 gene mutation (chrom 19p). Vascular smooth muscle cell degeneration. Presentation: Early-onset recurrent TIA/stroke (median age 50), migraine with aura, progressive cognitive decline. MRI: Symmetric FLAIR hyperintensities in anterior temporal lobes, external capsule, and corpus callosum. Dx: Genetic testing (gold standard) or skin biopsy (Granular Osmiophilic Material - GOM).",
          "CARASIL: Autosomal Recessive, HTRA1 mutation. Lacunar strokes in 30s, premature alopecia (hair loss), severe lumbar spondylosis/back pain.",
          "Fabry Disease: X-linked recessive, alpha-Galactosidase A deficiency -> glycosphingolipid accumulation. Symptoms: Angiokeratomas (blue/black trunk papules), burning acroparesthesias in hands/feet, corneal opacities, early posterior circulation stroke, enlarged basilar artery. Dx: Leukocyte GLA activity in men. Tx: Agalsidase beta.",
          "MELAS: Mitochondrial inheritance, A3243G mutation in tRNA. Recurrent stroke-like episodes before age 40, seizures, lactic acidosis, ragged red fibers on muscle biopsy."
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Chapter 11: Special Populations (Pediatric, Pregnancy & Young Adult)",
    description: "Pediatric stroke, fetal circulation, cyanotic CHD, pregnancy, PRES, RCVS, and CVST.",
    iconName: "User",
    topics: [
      {
        title: "Pediatric Stroke & Fetal Circulation",
        content: [
          "Neonatal Stroke (0-28 days): Highest incidence of pediatric stroke. Most common presentation is focal seizures. Left MCA stroke is most common.",
          "Fetal Circulation Physiology: Oxygenated blood from placenta via umbilical vein -> IVC -> RA -> passes through PFO to LA -> LV -> ascending aorta -> brain. Deoxygenated blood returns via SVC -> RA -> RV -> bypasses lungs via PDA -> descending aorta -> umbilical arteries.",
          "Pediatric Arterial Ischemic Stroke (AIS): Arteriopathy (Focal Cerebral Arteriopathy of Childhood - FCA) is the #1 cause of AIS in children (29d - 18y). VZV vasculopathy causes 30% of childhood AIS!"
        ]
      },
      {
        title: "Pregnancy & Postpartum Cerebrovascular Disorders",
        content: [
          "Pregnancy & postpartum women carry a 3x higher risk of stroke (highest risk in late 3rd trimester and 6 weeks postpartum due to venous stasis, hypercoagulability, and arterial stiffness).",
          "Preeclampsia & Eclampsia: New-onset HTN (BP > 140/90) after 20 weeks with proteinuria/edema. Tx: Delivery, IV Labetalol/Hydralazine, IV Magnesium Sulfate (prevents eclamptic seizures).",
          "Posterior Reversible Encephalopathy Syndrome (PRES): Headaches, altered mental status, visual changes, seizures. MRI: Symmetrical vasogenic edema in parietal and occipital white matter.",
          "Cerebral Venous Sinus Thrombosis (CVST): Transverse & Superior Sagittal Sinus most common. Headaches (90%), seizures, papilledema. CT: Empty delta sign. Tx: Therapeutic LMWH or Heparin even in the presence of venous hemorrhagic infarction!"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Chapter 12: Complications of Stroke",
    description: "Cerebral edema, malignant MCA, DHC, hemorrhagic transformation, and post-stroke epilepsy.",
    iconName: "AlertCircle",
    topics: [
      {
        title: "Cerebral Edema & Decompressive Hemicraniectomy",
        content: [
          "Cytotoxic Edema peaks at days 3-5 post-large cortical stroke (> 1/3 MCA territory).",
          "Management: Head of bed 30°, hyperventilation (PaCO2 target 30-35 mmHg), IV Mannitol (0.5-1 g/kg) or 3% Hypertonic Saline.",
          "Decompressive Hemicraniectomy (DHC): Proven life-saving intervention for Malignant MCA Infarcts in patients < 60 years within 48 hours of onset. ARR 50% reduction in mortality!"
        ]
      },
      {
        title: "Hemorrhagic Transformation (HT1, HT2, PH1, PH2)",
        content: [
          "Classification:",
          "  - HT1 (Hemorrhagic Infarction 1): Small hyperdense petechiae along margins of infarct.",
          "  - HT2: Confluent petechiae within infarct area without mass effect.",
          "  - PH1 (Parenchymal Hematoma 1): Blood occupies < 30% of infarct area with mild mass effect.",
          "  - PH2: Blood occupies > 30% of infarct area with significant mass effect."
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Chapter 13: Intracranial Hemorrhage (ICH)",
    description: "Etiology, ICH score, BP management, spot sign, and ICH clinical trials.",
    iconName: "AlertTriangle",
    topics: [
      {
        title: "Primary Intracranial Hemorrhage",
        content: [
          "Hypertensive ICH (60-70%): Deep structures - Putamen/Basal Ganglia, Thalamus, Pons, Cerebellum. Rupture of Charcot-Bouchard microaneurysms in lenticulostriate arteries.",
          "Cerebral Amyloid Angiopathy (CAA): Most common cause of spontaneous lobar ICH in elderly (>55yo). Beta-amyloid deposition in media/adventitia of cortical/leptomeningeal vessels. Congo red stain shows apple-green birefringence under polarized light.",
          "ICH Volume Calculation: ABC / 2 (A = max diameter in cm, B = diameter perpendicular to A, C = number of 1cm CT slices containing blood).",
          "CTA Spot Sign: Contrast extravasation within hematoma on CTA (>120 HU). Predicts rapid hematoma expansion within 24 hours!"
        ]
      },
      {
        title: "ICH Risk Score & Mortality",
        content: [
          "ICH Score Components (0 - 6 points):",
          "  - GCS Score: 3-4 (+2 points), 5-12 (+1 point), 13-15 (0 points)",
          "  - ICH Volume: >= 30 mL (+1 point)",
          "  - Intraventricular Hemorrhage (IVH): Present (+1 point)",
          "  - Infratentorial Origin: Yes (+1 point)",
          "  - Age: >= 80 years (+1 point)",
          "30-Day Mortality by Score: 0 (0%), 1 (13%), 2 (26%), 3 (72%), 4 (97%), 5-6 (100%)."
        ]
      },
      {
        title: "ICH Acute BP Management & Landmark Trials",
        content: [
          "INTERACT-2 & ATACH-2 Trials: Evaluated rapid SBP lowering in acute ICH.",
          "Target Blood Pressure: For acute ICH with SBP 150-220 mmHg, rapidly lowering SBP to 140 mmHg (range 130-150) is safe and improves functional outcomes, but avoid dropping SBP < 130 mmHg (causes renal adverse events per ATACH-2).",
          "PATCH Trial: Platelet transfusion in acute ICH patients on antiplatelets INCREASED mortality and dependency! Platelet transfusion should NOT be routinely given in antiplatelet-associated ICH."
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Chapter 14: Vascular Malformations & Aneurysms",
    description: "Brain AVMs, Spetzler-Martin Scale, Aneurysms, Subarachnoid Hemorrhage, and Cavernous Malformations.",
    iconName: "ShieldAlert",
    topics: [
      {
        title: "Arteriovenous Malformations (AVMs)",
        content: [
          "AVM: Direct arterial-to-venous connection without intervening capillary bed. Presentation: ICH (70%), seizures, focal headache.",
          "Spetzler-Martin Grading Scale (Grades 1 to 5):",
          "  - Size: Small <3cm (1pt), Medium 3-6cm (2pt), Large >6cm (3pt)",
          "  - Eloquence of Adjacent Cortex: Non-eloquent (0pt), Eloquent - language, motor, visual, thalamus, brainstem, cerebellar (1pt)",
          "  - Venous Drainage Pattern: Superficial only (0pt), Deep venous component (1pt)",
          "ARUBA Trial: Unruptured brain AVMs treated with medical management had significantly LOWER risk of death/stroke than interventional therapy!"
        ]
      },
      {
        title: "Intracranial Aneurysms & SAH",
        content: [
          "Aneurysm Locations: 90% anterior circulation (AComm > PComm > MCA bifurcation > Basilar tip).",
          "Hunt & Hess Scale: Predicts mortality from ruptured aneurysm (Grade 1 mild HA -> Grade 5 deep coma/decerebrate).",
          "Fisher Scale: Predicts risk of cerebral vasospasm based on blood volume on initial CT.",
          "Vasospasm Prevention: Nimodipine 60 mg orally every 4 hours for 21 days (improves neuro outcomes). Daily Transcranial Doppler (TCD) monitoring for MCA mean velocity > 120 cm/s or Lindegaard Index > 6."
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Chapter 15: Hematologic Disorders & Hypercoagulability",
    description: "Coagulation cascade, Factor V Leiden, Antiphospholipid Syndrome, Sickle Cell, and HIT.",
    iconName: "Droplet",
    topics: [
      {
        title: "Inherited & Acquired Thrombophilia",
        content: [
          "Factor V Leiden Mutation: Most common inherited cause of hypercoagulability. Point mutation in Factor V rendering it resistant to cleavage by Activated Protein C (aPC). Primary risk: Venous thromboembolism (VTE).",
          "Prothrombin G20210A Mutation: Increased prothrombin levels -> VTE risk.",
          "Protein C & Protein S Deficiency: Natural vitamin-K dependent anticoagulants that degrade Factors Va and VIIIa. Warfarin skin necrosis occurs when starting warfarin without bridging due to short half-life of Protein C!",
          "Antiphospholipid Antibody Syndrome (APLS): Arterial AND venous thrombosis + pregnancy loss. Requires 1 clinical + 1 lab criteria (Lupus Anticoagulant, Anti-cardiolipin IgG/IgM, Anti-beta2-glycoprotein 1) confirmed > 12 weeks apart. Tx: Warfarin (target INR 2.0-3.0)."
        ]
      },
      {
        title: "Sickle Cell Disease (SCD) & Stroke",
        content: [
          "Sickle Cell Disease: High risk of arterial ischemic stroke in children (progressive stenosis of distal ICA/MCA). Screened with annual Transcranial Doppler (TCD) from ages 2 to 16.",
          "STOP Trial: Transcranial Doppler screening (mean velocity > 200 cm/s indicates high stroke risk). Chronic exchange transfusion to maintain HbS < 30% reduced stroke risk by 92%!",
          "STOP II Trial: Discontinuing chronic transfusion led to high rate of stroke recurrence, even if TCD normalized. Transfusions must be continued long-term."
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Chapter 16: Neuroradiology & Neurovascular Imaging",
    description: "CT density, ASPECTS score, CTP, MRI pulse sequences, Carotid Ultrasound, and TCD.",
    iconName: "Layers",
    topics: [
      {
        title: "CT & ASPECTS Score",
        content: [
          "Hounsfield Units (HU): Air (-1000), Fat (-100 to -50), Water (0), CSF (15), Acute Blood (40 to 100), Bone (400 to 3000).",
          "ASPECTS Score (Alberta Stroke Program Early CT Score): 10-point quantitative topographic CT score for acute MCA territory ischemic stroke.",
          "Two Axial CT Cuts Evaluated: Ganglionic level (Caudate, Internal Capsule, Lentiform nucleus, Insular ribbon, M1, M2, M3) and Supraganglionic level (M4, M5, M6). Subtract 1 point for each area of early hypoattenuation.",
          "ASPECTS <= 7: Predicts worse functional outcome, higher dependency, and increased risk of hemorrhagic transformation."
        ]
      },
      {
        title: "MRI Sequences & Stroke Evolution",
        content: [
          "Diffusion-Weighted Imaging (DWI): Restricted diffusion (cytotoxic edema) causes high signal within minutes of acute ischemia.",
          "Apparent Diffusion Coefficient (ADC): Shows low signal (dark) in acute ischemia. ADC 'pseudonormalizes' at subacute stage (7-21 days).",
          "SWI / T2* Gradient Echo: Exquisitely sensitive for hemosiderin, microhemorrhages, cavernous malformations, and venous thrombi.",
          "Carotid Ultrasound NASCET Criteria: ICA/CCA Peak Systolic Velocity (PSV) ratio > 4.0 and ICA PSV > 230 cm/s indicates > 70% severe carotid stenosis."
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Chapter 17: Vascular Cognitive Disorders",
    description: "Vascular Dementia, Post-stroke dementia, Cerebral Small Vessel Disease, and Hachinski score.",
    iconName: "BookOpen",
    topics: [
      {
        title: "Vascular Cognitive Impairment (VCI)",
        content: [
          "Age is the single primary risk factor for vascular dementia (risk doubles every 5 years). 15-30% of stroke patients develop vascular dementia within 3 months post-stroke.",
          "Subtypes: Multi-infarct dementia (stepwise cognitive decline tied to discrete clinical stroke events) vs Cerebral Small Vessel Disease (insidious progressive executive dysfunction, apathy, gait impairment, vascular parkinsonism).",
          "Hachinski Ischemic Score: High score (> 7) differentiates vascular dementia from Alzheimer's disease (features: abrupt onset, stepwise decline, fluctuating course, HTN, history of stroke)."
        ]
      }
    ]
  },
  {
    id: 18,
    title: "Chapter 18: Stroke Rehabilitation",
    description: "Motor recovery timeline, functional scales (NIHSS, mRS, FIM, BI), CIMT, and gait rehab.",
    iconName: "Activity",
    topics: [
      {
        title: "Mechanisms of Recovery & Functional Scales",
        content: [
          "Proportional Recovery Rule: Most stroke patients recover ~70% of lost motor function within the first 3 months post-stroke.",
          "Constraint-Induced Movement Therapy (CIMT): Constraining the unaffected limb (mitt for 90% of waking hours) while undergoing intensive daily training of the paretic arm for 2 weeks (EXCITE trial demonstrated significant long-term UE functional gain).",
          "Modified Rankin Scale (mRS): 0 (No symptoms) to 5 (Severe disability/bedbound) and 6 (Dead). Good functional outcome defined as mRS 0-2."
        ]
      }
    ]
  },
  {
    id: 19,
    title: "Chapter 19: Pharmacology",
    description: "Anti-hypertensives, Statins, Anticoagulants, Antiplatelets, and Reversal Agents.",
    iconName: "Pill",
    topics: [
      {
        title: "Antiplatelet & Anticoagulant Pharmacology",
        content: [
          "Aspirin: Irreversibly inhibits COX-1 & COX-2 -> blocks Thromboxane A2 (TxA2).",
          "Clopidogrel (Plavix): Prodrug activated by liver CYP2C19. Irreversibly inhibits P2Y12 ADP receptor. CYP2C19 loss-of-function alleles (common in Asian populations) reduce efficacy! Omeprazole inhibits CYP2C19 (use pantoprazole instead).",
          "Ticagrelor (Brilinta): Direct-acting, reversible P2Y12 inhibitor (does not require CYP activation). CHANCE II trial showed lower stroke risk in CYP2C19 loss-of-function carriers treated with ticagrelor + ASA vs clopidogrel + ASA.",
          "Warfarin: Inhibits Vitamin K epoxide reductase (Factors II, VII, IX, X, Protein C & S). Factor VII has shortest half-life (6 hrs), Factor II longest (50 hrs). Reversal: PCC (4-factor prothrombin complex concentrate) + IV Vitamin K.",
          "DOAC Reversal Agents: Idarucizumab (Praxbind) for Dabigatran; Andexanet alfa for Factor Xa inhibitors (Apixaban, Rivaroxaban)."
        ]
      }
    ]
  },
  {
    id: 20,
    title: "Chapter 20: Stroke Systems of Care & Hospital Designations",
    description: "PSC, CSC, Acute Stroke Ready, and Thrombectomy-Capable designations.",
    iconName: "Building",
    topics: [
      {
        title: "Stroke Center Certification Tiers",
        content: [
          "Acute Stroke Ready Hospital (ASRH): Initial evaluation, stabilization, and IV thrombolytic administration before transferring to PSC/CSC.",
          "Primary Stroke Center (PSC): Implemented best practice guidelines, 24/7 stroke team, dedicated stroke unit.",
          "Thrombectomy-Capable Stroke Center (TSC): Performs emergency mechanical thrombectomies 24/7 without needing full CSC status.",
          "Comprehensive Stroke Center (CSC): Highest certification tier. Handles complex stroke, neuro-ICU care, endovascular thrombectomy, neurosurgical clipping/coiling, 24/7 neuro-IR and dedicated NCCU."
        ]
      }
    ]
  },
  {
    id: 21,
    title: "Chapter 21: Perioperative Stroke & Ethics",
    description: "Pre-procedure antiplatelet/anticoagulation hold times, bridging protocols, and bioethics.",
    iconName: "Shield",
    topics: [
      {
        title: "Perioperative Anticoagulant & Antiplatelet Management",
        content: [
          "Warfarin Holding Protocols:",
          "  - Low bleeding risk procedure: Do not stop Warfarin.",
          "  - Intermediate / High bleeding risk: Stop Warfarin 5 days prior (INR 2-3) or 3-4 days prior (INR 1.5-1.9). Check INR day prior to procedure.",
          "  - Bridging with LMWH/UFH: Indicated ONLY if patient has high thromboembolic risk (mechanical heart valve, AFib with high CHADS score, recent VTE < 3 months). Stop LMWH 24h before procedure; stop UFH 4h before.",
          "DOAC Holding Protocols: Stop 1-2 days prior to procedure (longer if renal impairment). Bridging is NOT required due to rapid onset/offset.",
          "Aspirin & Plavix: Continue Aspirin for minor dental, cataract, derm, and GI procedures. Stop Plavix 7-10 days prior to moderate-to-high bleeding risk procedures."
        ]
      },
      {
        title: "Medical Ethics Principles in Stroke Care",
        content: [
          "Beneficence: Acting in the patient's best interest.",
          "Non-maleficence: Do no harm.",
          "Autonomy: Respecting patient self-determination and surrogate decision-making.",
          "Justice: Equitable distribution of healthcare resources."
        ]
      }
    ]
  }
];
