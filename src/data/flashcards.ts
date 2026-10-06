import { Flashcard } from '../types';

export const flashcardsData: Flashcard[] = [
  {
    id: "fc-1",
    chapterId: 2,
    chapterTitle: "Initial Stroke Evaluation",
    question: "What is the ONLY mandatory laboratory test required before administering IV tPA or Tenecteplase?",
    answer: "Finger-stick blood glucose (unless the patient is known to be on anticoagulation).",
    explanation: "Hypoglycemia (<50 mg/dL) is a common stroke mimic and must be ruled out immediately.",
    highYieldTag: "Board Classic"
  },
  {
    id: "fc-2",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    question: "Which anatomical structures lack a Blood-Brain Barrier (BBB)?",
    answer: "Circumventricular organs: Area Postrema, Hypophysis (pituitary gland), and Pineal Gland.",
    explanation: "These regions require direct blood contact to sense metabolic signals and secrete hormones into systemic circulation.",
    highYieldTag: "Anatomy"
  },
  {
    id: "fc-3",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    question: "What is the clinical triad of Anterior Choroidal Artery stroke?",
    answer: "1. Contralateral Hemiplegia (PLIC)\n2. Contralateral Hemisensory Loss (VPN/VPL)\n3. Contralateral Homonymous Hemianopia (LGN)",
    explanation: "The Anterior Choroidal Artery supplies the posterior limb of internal capsule, thalamus/LGN, and optic tract.",
    highYieldTag: "High Yield Triad"
  },
  {
    id: "fc-4",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    question: "Which arterial segment gives rise to the Recurrent Artery of Heubner, and what are its clinical deficits?",
    answer: "Proximal A2 ACA. Stroke causes contralateral face/arm weakness, hemichorea, and dysarthria.",
    explanation: "Supplies the caudate head, anterior limb of internal capsule (ALIC), and globus pallidus externus.",
    highYieldTag: "Anatomy"
  },
  {
    id: "fc-5",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    question: "Why does a postganglionic 3rd-order Horner's syndrome from ICA dissection present WITHOUT facial anhidrosis?",
    answer: "Because facial sudomotor (sweat) fibers branch off at the superior cervical ganglion and travel along the External Carotid Artery (ECA).",
    explanation: "Lesions distal to the carotid bifurcation (ICA) affect pupillary dilation and tarsal muscles but spare sweating.",
    highYieldTag: "Pathophysiology"
  },
  {
    id: "fc-6",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    question: "What four clinical features define Gerstmann Syndrome, and where is the lesion located?",
    answer: "Agraphia, Acalculia, Right-Left Confusion, Finger Agnosia.\nLesion: Dominant (left) inferior parietal lobe (angular gyrus).",
    explanation: "Classic Board Question. Superior division of left MCA or parietal branch occlusion.",
    highYieldTag: "Board Classic"
  },
  {
    id: "fc-7",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    question: "How do Transcranial Motor/Sensory Aphasia differ from Broca and Wernicke Aphasia?",
    answer: "REPETITION IS PRESERVED in Transcranial Aphasias!",
    explanation: "Transcranial aphasias are caused by watershed/borderzone infarctions sparing the perisylvian language core.",
    highYieldTag: "Aphasia Differential"
  },
  {
    id: "fc-8",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    question: "What arterial branch preserves macular vision in Central Retinal Artery Occlusion (CRAO)?",
    answer: "The Cilioretinal Artery (present in 15–50% of people).",
    explanation: "Arises from the short posterior ciliary arteries rather than the central retinal artery.",
    highYieldTag: "Neuro-ophthalmology"
  },
  {
    id: "fc-9",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    question: "What key neuro-anatomical nucleus damage causes dysphagia, hoarseness, and loss of gag reflex in Wallenberg (Lateral Medullary) Syndrome?",
    answer: "Nucleus Ambiguus (CN X).",
    explanation: "Lateral medullary syndrome is caused by V4 Vertebral Artery or PICA occlusion.",
    highYieldTag: "Brainstem"
  },
  {
    id: "fc-10",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    question: "Which brainstem stroke syndrome presents with ipsilateral CN III palsy and contralateral ataxia/tremor?",
    answer: "Claude Syndrome (P1 PCA stroke affecting red nucleus and superior cerebellar peduncle).",
    explanation: "Compare with Weber (CN III + hemiparesis) and Benedikt (CN III + hemiparesis + ataxia/chorea).",
    highYieldTag: "Brainstem Syndromes"
  },
  {
    id: "fc-11",
    chapterId: 5,
    chapterTitle: "Epidemiology & Risk Factors",
    question: "What is the single strongest determinant of stroke risk?",
    answer: "Age (stroke risk doubles every decade after age 55).",
    explanation: "Hypertension is the #1 MODIFIABLE risk factor, but age is the strongest overall determinant.",
    highYieldTag: "Epidemiology"
  },
  {
    id: "fc-12",
    chapterId: 6,
    chapterTitle: "Stroke Pathophysiology",
    question: "What are the cerebral blood flow (CBF) thresholds for electrical failure (slowing) versus membrane failure (infarction core)?",
    answer: "CBF < 25 mL/100g/min = Ischemia & EEG slowing.\nCBF < 10-15 mL/100g/min = Ion pump failure & irreversible infarction core.",
    explanation: "Normal CBF is 50–55 mL/100g/min.",
    highYieldTag: "Pathophysiology"
  },
  {
    id: "fc-13",
    chapterId: 7,
    chapterTitle: "Classification of Stroke",
    question: "What did the SAMMPRIS trial establish regarding intracranial stenting vs medical therapy for 70-99% ICAD?",
    answer: "Medical therapy (DAPT + aggressive BP/LDL control) WAS SUPERIOR to intracranial stenting!",
    explanation: "30-day stroke/death rate was 14.7% in the stenting group vs 5.8% in the medical group.",
    highYieldTag: "Landmark Trial"
  },
  {
    id: "fc-14",
    chapterId: 7,
    chapterTitle: "Classification of Stroke",
    question: "What vascular disease presents with thunderclap headaches and segmental arterial 'string of beads' vasoconstriction that spontaneously resolves in 8-12 weeks?",
    answer: "Reversible Cerebral Vasoconstriction Syndrome (RCVS).",
    explanation: "Often triggered by SSRIs, triptans, nasal decongestants, or postpartum state. Treated with verapamil/nimodipine.",
    highYieldTag: "Vasculopathy"
  },
  {
    id: "fc-15",
    chapterId: 8,
    chapterTitle: "Acute Management & Secondary Prevention",
    question: "What blood pressure limit must be maintained PRIOR to and FOR 24 HOURS AFTER administering IV tPA?",
    answer: "Before tPA: SBP < 185 mmHg and DBP < 110 mmHg.\nAfter tPA (first 24h): SBP < 180 mmHg and DBP < 105 mmHg.",
    explanation: "Exceeding these limits significantly increases the risk of symptomatic intracranial hemorrhage (sICH).",
    highYieldTag: "Acute Stroke Protocol"
  },
  {
    id: "fc-16",
    chapterId: 8,
    chapterTitle: "Acute Management & Secondary Prevention",
    question: "What were the inclusion criteria and main findings of the DAWN trial for late-window thrombectomy?",
    answer: "LVO (ICA or M1) at 6-24 hours with clinical-core mismatch.\nResult: EVT group had 49% mRS 0-2 vs 13% standard medical care (NNT ~ 2.8).",
    explanation: "DAWN and DEFUSE 3 expanded the thrombectomy window up to 24 hours based on tissue viability imaging.",
    highYieldTag: "Landmark Trial"
  },
  {
    id: "fc-17",
    chapterId: 8,
    chapterTitle: "Acute Management & Secondary Prevention",
    question: "What is the recommended DAPT duration and regimen following high-risk TIA (ABCD2 >= 4) or minor ischemic stroke (NIHSS <= 3) per CHANCE and POINT?",
    answer: "DAPT (Aspirin + Clopidogrel) started within 24 hours for 21 DAYS, followed by single antiplatelet monotherapy.",
    explanation: "Extending DAPT to 90 days (as in POINT) increased major bleeding without additional ischemic reduction.",
    highYieldTag: "Guidelines"
  },
  {
    id: "fc-18",
    chapterId: 9,
    chapterTitle: "Clinical Cardiology & Stroke",
    question: "What are the components and scoring of the CHA₂DS₂-VASc risk score for Atrial Fibrillation?",
    answer: "C: CHF (1)\nH: HTN (1)\nA2: Age >= 75 (2)\nD: Diabetes (1)\nS2: Stroke/TIA (2)\nV: Vascular disease (1)\nA: Age 65-74 (1)\nSc: Sex category Female (1)",
    explanation: "Score >= 2 in males or >= 3 in females mandates oral anticoagulation.",
    highYieldTag: "Clinical Score"
  },
  {
    id: "fc-19",
    chapterId: 10,
    chapterTitle: "Genetic Stroke Syndromes",
    question: "What is the gene mutation, inheritance pattern, and classic MRI finding in CADASIL?",
    answer: "NOTCH3 gene mutation (Chrom 19p), Autosomal Dominant.\nMRI: Symmetrical FLAIR hyperintensities in the ANTERIOR TEMPORAL LOBES, external capsule, and corpus callosum.",
    explanation: "Gold standard diagnostic test is genetic testing or electron microscopy skin biopsy (Granular Osmiophilic Material - GOM).",
    highYieldTag: "Genetics"
  },
  {
    id: "fc-20",
    chapterId: 13,
    chapterTitle: "Intracranial Hemorrhage",
    question: "How do you calculate hematoma volume using the ABC/2 method?",
    answer: "A = maximum hematoma length on CT (cm)\nB = width perpendicular to A (cm)\nC = slice thickness x number of CT slices containing blood\nVolume = (A x B x C) / 2 (in mL or cc)",
    explanation: "Standard bedside formula for ICH volume estimation.",
    highYieldTag: "Clinical Calculation"
  },
  {
    id: "fc-21",
    chapterId: 13,
    chapterTitle: "Intracranial Hemorrhage",
    question: "What did the PATCH trial conclude regarding platelet transfusion in acute antiplatelet-associated ICH?",
    answer: "Platelet transfusion INCREASED mortality and dependency and should NOT be given!",
    explanation: "Transfused platelets may exacerbate inflammatory vascular injury.",
    highYieldTag: "Landmark Trial"
  },
  {
    id: "fc-22",
    chapterId: 14,
    chapterTitle: "Vascular Malformations",
    question: "What three variables compose the Spetzler-Martin Grading Scale for brain AVM surgical risk?",
    answer: "1. Size (<3cm = 1, 3-6cm = 2, >6cm = 3)\n2. Eloquence of adjacent cortex (1 point if eloquent)\n3. Venous Drainage (1 point if deep venous drainage)",
    explanation: "Grades 1-2 = low surgical risk; Grade 3 = moderate; Grades 4-5 = high risk; Grade 6 = inoperable.",
    highYieldTag: "AVM Grading"
  },
  {
    id: "fc-23",
    chapterId: 15,
    chapterTitle: "Hematologic Disorders",
    question: "What did the STOP trial establish regarding stroke prevention in pediatric Sickle Cell Disease?",
    answer: "Annual Transcranial Doppler (TCD) screening (mean velocity > 200 cm/s = high risk). Chronic exchange transfusion to keep HbS < 30% reduced stroke risk by 92%!",
    explanation: "STOP II showed that stopping transfusions led to rapid stroke recurrence.",
    highYieldTag: "Pediatrics"
  },
  {
    id: "fc-24",
    chapterId: 16,
    chapterTitle: "Neuroradiology",
    question: "What is the ASPECTS CT score, how is it calculated, and what score indicates poor functional outcome?",
    answer: "10-point CT score for acute MCA stroke (10 regions evaluated at ganglionic and supraganglionic levels). Subtract 1 point per ischemic region.\nASPECTS <= 7 indicates poor outcome and higher hemorrhage risk.",
    explanation: "Used for patient selection in acute stroke thrombolytic & thrombectomy trials.",
    highYieldTag: "Neuroradiology"
  },
  {
    id: "fc-25",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    question: "Why is Clopidogrel (Plavix) less effective in patients carrying CYP2C19 loss-of-function alleles?",
    answer: "Clopidogrel is a prodrug requiring hepatic CYP2C19 activation to form its active metabolite.",
    explanation: "Common in Asian populations. Ticagrelor (CHANCE II) or Prasugrel do not rely on CYP2C19.",
    highYieldTag: "Pharmacogenomics"
  }
];
