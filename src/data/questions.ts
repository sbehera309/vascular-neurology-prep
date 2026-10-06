import { PracticeQuestion } from '../types';

export const questionsData: PracticeQuestion[] = [
  // Chapter 1 & 2: Acute Stroke Evaluation & Triage
  {
    id: "q-1",
    chapterId: 2,
    chapterTitle: "Initial Stroke Evaluation",
    vignette: "A 68-year-old male with a history of hypertension and diabetes presents to the ED 2.5 hours after sudden onset of right-sided arm and leg weakness and expressive aphasia. Initial non-contrast head CT shows no acute hemorrhage or early ischemic changes (ASPECTS 10). Finger-stick blood glucose is 142 mg/dL. His blood pressure on arrival is 196/108 mmHg. He has no prior history of stroke, head trauma, or recent surgery. His lab panel is pending.",
    question: "Which of the following is the most appropriate next step in the management of this patient?",
    options: [
      { id: "A", text: "Administer IV tPA immediately while awaiting lab results" },
      { id: "B", text: "Administer IV Labetalol to lower blood pressure below 185/110 mmHg prior to IV tPA" },
      { id: "C", text: "Wait for CBC, PT/INR, and PTT results before initiating thrombolytic therapy" },
      { id: "D", text: "Initiate Aspirin 325 mg orally and transfer to the stroke step-down unit" },
      { id: "E", text: "Perform immediate digital subtraction angiography (DSA)" }
    ],
    correctOptionId: "B",
    explanation: "Per AHA/ASA guidelines, IV tPA can be administered within 3-4.5 hours of symptom onset in eligible acute ischemic stroke patients. However, blood pressure MUST be lowered to < 185/110 mmHg BEFORE initiating IV tPA (and maintained < 180/105 mmHg for the first 24 hours). Administering tPA at SBP > 185 or DBP > 110 significantly increases the risk of symptomatic intracranial hemorrhage (sICH).\n\nFinger-stick blood glucose is the ONLY lab result required before tPA (unless the patient is known to be on anticoagulants or has a bleeding disorder). Therefore, option C is incorrect.",
    keyTakeaway: "Blood pressure MUST be < 185/110 mmHg BEFORE starting IV thrombolytic therapy.",
    tags: ["tPA Protocol", "Blood Pressure", "Acute Stroke"]
  },
  {
    id: "q-2",
    chapterId: 1,
    chapterTitle: "Emergency Code Stroke Assessment",
    vignette: "A 55-year-old male was last seen normal by his wife at 10:00 PM when going to bed. He woke up at 6:00 AM with dense left hemiplegia and left spatial neglect. What is his official Last Known Normal (LKN) time for acute stroke treatment protocol decisions?",
    question: "What is the patient's Last Known Normal (LKN) time?",
    options: [
      { id: "A", text: "6:00 AM (time of waking up with symptoms)" },
      { id: "B", text: "10:00 PM (time last seen normal before sleep)" },
      { id: "C", text: "2:00 AM (midpoint of sleep)" },
      { id: "D", text: "8:00 AM (time of emergency room arrival)" },
      { id: "E", text: "12:00 AM (midnight baseline)" }
    ],
    correctOptionId: "B",
    explanation: "In wake-up strokes or strokes with unknown time of onset, Last Known Normal (LKN) is defined as the time the patient was last seen awake and symptom-free by a reliable witness (10:00 PM in this case).",
    keyTakeaway: "Last Known Normal (LKN) is the last time the patient was seen at baseline before sleep.",
    tags: ["Wake-up Stroke", "LKN", "Emergency Triage"]
  },
  {
    id: "q-3",
    chapterId: 1,
    chapterTitle: "Emergency Code Stroke Assessment",
    vignette: "A 62-year-old female presents with acute dizziness, ataxia, and horizontal nystagmus. Her NIHSS score is calculated as 1. CT head is normal. MRI brain diffusion weighted imaging reveals a 1.5 cm cerebellar ischemic stroke.",
    question: "Why can the NIHSS score be misleadingly low in posterior circulation strokes?",
    options: [
      { id: "A", text: "The NIHSS measures cognitive function only" },
      { id: "B", text: "The NIHSS is heavily weighted toward anterior circulation deficits such as language and hemiparesis" },
      { id: "C", text: "Posterior circulation strokes rarely cause neurological symptoms" },
      { id: "D", text: "Ataxia items carry 5 points each" },
      { id: "E", text: "Visual field items are excluded in posterior stroke" }
    ],
    correctOptionId: "B",
    explanation: "The NIHSS score is heavily weighted toward anterior circulation and left hemispheric strokes (language and motor items). Posterior circulation strokes (causing ataxia, vertigo, cranial nerve palsies, dysarthria) often score low on NIHSS despite causing severe functional disability.",
    keyTakeaway: "NIHSS underestimates severity in posterior circulation stroke.",
    tags: ["NIHSS", "Posterior Circulation", "Triage"]
  },
  {
    id: "q-4",
    chapterId: 2,
    chapterTitle: "Initial Stroke Evaluation",
    vignette: "A 79-year-old female with a history of atrial fibrillation on Warfarin presents 90 minutes after acute left hemiparesis. Fingerstick glucose is 110 mg/dL. Stat INR result returns at 1.9.",
    question: "Can IV tPA be administered to this patient?",
    options: [
      { id: "A", text: "Yes, because she is within 3 hours" },
      { id: "B", text: "No, because Warfarin therapy with INR > 1.7 is a absolute contraindication to IV tPA" },
      { id: "C", text: "Yes, provided Vitamin K is given concurrently" },
      { id: "D", text: "Yes, provided cryoprecipitate is infused" },
      { id: "E", text: "Yes, if SBP is < 140 mmHg" }
    ],
    correctOptionId: "B",
    explanation: "Current guidelines state that current use of Warfarin with an INR > 1.7 (or PT > 15 seconds) is a contraindication to IV thrombolytic therapy due to severe risk of intracerebral hemorrhage.",
    keyTakeaway: "Warfarin with INR > 1.7 is an absolute contraindication for IV tPA.",
    tags: ["tPA Contraindications", "Warfarin", "INR"]
  },
  {
    id: "q-5",
    chapterId: 2,
    chapterTitle: "Initial Stroke Evaluation",
    vignette: "A 65-year-old male receives IV tPA for acute ischemic stroke. 45 minutes into the tPA infusion, he develops acute swelling of his tongue, lips, and posterior pharynx. Blood pressure is 150/90 mmHg.",
    question: "What is the most likely diagnosis and immediate initial treatment step?",
    options: [
      { id: "A", text: "Anaphylaxis to contrast; give IV Epinephrine 1 mg" },
      { id: "B", text: "tPA-induced orolingual angioedema; stop tPA infusion immediately and hold ACE inhibitors" },
      { id: "C", text: "Hemorrhagic transformation; start Mannitol" },
      { id: "D", text: "Acute pulmonary edema; give IV Furosemide" },
      { id: "E", text: "Carotid dissection; perform emergent intubation" }
    ],
    correctOptionId: "B",
    explanation: "tPA-induced orolingual angioedema occurs in 1-5% of patients (higher risk in patients taking ACE inhibitors). Immediate management: STOP tPA infusion, maintain airway, administer IV Diphenhydramine (50mg), IV Ranitidine/Famotidine, and IV Dexamethasone (10mg).",
    keyTakeaway: "Orolingual angioedema post-tPA -> STOP infusion immediately, hold ACE inhibitors, give H1/H2 blockers & steroids.",
    tags: ["tPA Complications", "Angioedema", "Emergency"]
  },

  // Chapter 3: Vascular Neuroanatomy
  {
    id: "q-6",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    vignette: "A 58-year-old male presents with right-sided motor hemiplegia, right-sided hemisensory loss, and a right homonymous hemianopia. Brain MRI reveals a lacunar-like stroke in the posterior limb of the internal capsule (PLIC), lateral geniculate nucleus (LGN), and optic tract.",
    question: "Which blood vessel occlusion causes this classic clinical triad?",
    options: [
      { id: "A", text: "Recurrent Artery of Heubner" },
      { id: "B", text: "Anterior Choroidal Artery" },
      { id: "C", text: "Posterior Cerebral Artery P1 segment" },
      { id: "D", text: "Middle Cerebral Artery M2 trunk" },
      { id: "E", text: "Superior Cerebellar Artery" }
    ],
    correctOptionId: "B",
    explanation: "The Anterior Choroidal Artery (arising from supraclinoid ICA) supplies the GPi, caudate tail, posterior limb of internal capsule (PLIC), optic tract, and LGN. Infarct triad = Hemiplegia (PLIC), Hemisensory loss (VPN/VPL), and Homonymous Hemianopia (LGN).",
    keyTakeaway: "Anterior Choroidal Artery Syndrome = Contralateral Hemiplegia + Hemisensory Loss + Homonymous Hemianopia.",
    tags: ["Anterior Choroidal", "Neuroanatomy", "Stroke Localization"]
  },
  {
    id: "q-7",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    vignette: "An MRI scan in a 52-year-old female shows an acute infarction of the caudate head and anterior limb of the internal capsule (ALIC). Neurological exam demonstrates contralateral face and arm weakness, hemichorea, and prominent dysarthria.",
    question: "Which vessel is occluded?",
    options: [
      { id: "A", text: "Recurrent Artery of Heubner (Proximal A2 ACA)" },
      { id: "B", text: "Medial posterior choroidal artery" },
      { id: "C", text: "Artery of Percheron" },
      { id: "D", text: "Lenticulostriate arteries of M1" },
      { id: "E", text: "Hypoglossal artery" }
    ],
    correctOptionId: "A",
    explanation: "The Recurrent Artery of Heubner originates from the proximal A2 segment of the ACA (near AComm) and supplies the caudate head, ALIC, and anterior globus pallidus. Occlusion causes contralateral face/arm weakness, dysarthria, and choreiform movements.",
    keyTakeaway: "Recurrent Artery of Heubner = Proximal A2 ACA -> Caudate head & ALIC stroke.",
    tags: ["Heubner Artery", "ACA", "Neuroanatomy"]
  },
  {
    id: "q-8",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    vignette: "A 40-year-old male undergoing thoracic aortic aneurysm repair develops acute paraplegia, loss of pain and temperature sensation below T8, with RETAINED proprioception and vibration sensation.",
    question: "Occlusion of which artery accounts for this clinical presentation?",
    options: [
      { id: "A", text: "Artery of Adamkiewicz (Great Anterior Radiculomedullary Artery)" },
      { id: "B", text: "Posterior Spinal Artery" },
      { id: "C", text: "Artery of Percheron" },
      { id: "D", text: "Vein of Galen" },
      { id: "E", text: "Subcallosal artery" }
    ],
    correctOptionId: "A",
    explanation: "The Artery of Adamkiewicz (originating from aorta between T8-L1, 80% left side) supplies the Anterior Spinal Artery (ASA) of the lower thoracic and lumbar spinal cord. Occlusion causes ASA Syndrome: loss of motor (corticospinal) and pain/temp (spinothalamic) with intact dorsal columns (vibration/proprioception).",
    keyTakeaway: "Artery of Adamkiewicz occlusion causes Anterior Spinal Artery Syndrome below T8.",
    tags: ["Adamkiewicz", "Spinal Cord Stroke", "ASA Syndrome"]
  },
  {
    id: "q-9",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    vignette: "A 48-year-old female presents with pulsatile tinnitus in her right ear. Otoscopic examination reveals a reddish vascular mass behind the tympanic membrane.",
    question: "Which neurovascular variant is responsible for pulsatile tinnitus in this anatomical region?",
    options: [
      { id: "A", text: "Aberrant Cervical Internal Carotid Artery (C1 segment)" },
      { id: "B", text: "Persistent Trigeminal Artery" },
      { id: "C", text: "Azygous ACA" },
      { id: "D", text: "Duplicated MCA" },
      { id: "E", text: "Fenestrated Basilar Artery" }
    ],
    correctOptionId: "A",
    explanation: "Aberrant ICA in the petrous temporal bone (C1/C2 involuted portion) enlarges tympanic arteries causing pulsatile tinnitus and a retrotympanic vascular mass.",
    keyTakeaway: "Aberrant ICA segment in temporal bone presents with pulsatile tinnitus.",
    tags: ["Carotid Anatomy", "Anatomic Variants", "Tinnitus"]
  },
  {
    id: "q-10",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    vignette: "A patient presents with bilateral thalamic and rostral midbrain infarctions. Cerebral angiogram shows a single unpaired arterial trunk arising from one P1 segment of the PCA supplying both bilateral medial thalami.",
    question: "What is the name of this anatomical arterial variant?",
    options: [
      { id: "A", text: "Artery of Percheron" },
      { id: "B", text: "Artery of Heubner" },
      { id: "C", text: "Vein of Labbe" },
      { id: "D", text: "Vein of Trollard" },
      { id: "E", text: "Basal vein of Rosenthal" }
    ],
    correctOptionId: "A",
    explanation: "The Artery of Percheron is a solitary congenital arterial trunk derived from P1 PCA that supplies bilateral paramedian thalami and rostral midbrain. Stroke causes altered mental status, vertical gaze palsy, and memory impairment.",
    keyTakeaway: "Artery of Percheron = Single P1 vessel supplying bilateral paramedian thalami & midbrain.",
    tags: ["Artery of Percheron", "PCA Variant", "Thalamic Stroke"]
  },

  // Chapter 4: Stroke Syndromes
  {
    id: "q-11",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A 72-year-old right-handed female is brought to the emergency department following an acute stroke. Neurological exam reveals that she is unable to write sentences (agraphia), unable to perform basic arithmetic operations (acalculia), struggles to distinguish her left hand from her right hand (right-left disorientation), and cannot identify which finger the examiner touches (finger agnosia). She has no gross motor or sensory deficits.",
    question: "This constellation of findings (Gerstmann Syndrome) localizes to which of the following anatomical structures?",
    options: [
      { id: "A", text: "Right non-dominant parietal cortex" },
      { id: "B", text: "Left dominant inferior parietal lobe (angular gyrus)" },
      { id: "C", text: "Bilateral fusiform gyrus" },
      { id: "D", text: "Left dominant superior temporal gyrus (Wernicke area)" },
      { id: "E", text: "Posterior limb of internal capsule" }
    ],
    correctOptionId: "B",
    explanation: "Gerstmann Syndrome is characterized by the classic tetrad of agraphia, acalculia, right-left disorientation, and finger agnosia. It localizes precisely to the dominant (usually left) inferior parietal lobe, specifically the angular gyrus. Lesions to the right non-dominant parietal cortex cause hemineglect (Option A). Lesions to the bilateral fusiform gyrus cause prosopagnosia (Option C).",
    keyTakeaway: "Gerstmann Syndrome = Agraphia + Acalculia + R/L Confusion + Finger Agnosia -> Dominant Angular Gyrus.",
    tags: ["Stroke Syndromes", "Parietal Lobe", "Localization"]
  },
  {
    id: "q-12",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A 66-year-old male presents with acute dizziness, nystagmus, hoarseness, dysphagia, left facial pain/temperature loss, right body pain/temperature loss, left Horner's syndrome, and left cerebellar ataxia.",
    question: "Which brainstem syndrome is described, and which artery is most commonly occluded?",
    options: [
      { id: "A", text: "Medial Medullary Syndrome; Anterior Spinal Artery" },
      { id: "B", text: "Lateral Medullary (Wallenberg) Syndrome; V4 Vertebral Artery or PICA" },
      { id: "C", text: "Weber Syndrome; P1 PCA" },
      { id: "D", text: "Millard-Gubler Syndrome; Basilar artery" },
      { id: "E", text: "Foville Syndrome; AICA" }
    ],
    correctOptionId: "B",
    explanation: "Wallenberg (Lateral Medullary) Syndrome is caused by occlusion of the intracranial vertebral artery (V4) or PICA. Deficits: IPS facial pain/temp (spinal trigeminal tract), CTL body pain/temp (spinothalamic), IPS Horner's (SANS), IPS ataxia (ICP), dysphagia/hoarseness (Nucleus Ambiguus CN X).",
    keyTakeaway: "Wallenberg Syndrome = PICA/VA stroke -> IPS face pain/temp loss + CTL body pain/temp loss + Nucleus Ambiguus (CN X).",
    tags: ["Wallenberg", "PICA", "Brainstem Syndromes"]
  },
  {
    id: "q-13",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A 70-year-old male presents with acute right eye ptosis and down-and-out ocular deviation, accompanied by left-sided hemiplegia of the arm and leg.",
    question: "What is the diagnosis?",
    options: [
      { id: "A", text: "Weber Syndrome (P1 PCA stroke affecting cerebral peduncle and CN III fibers)" },
      { id: "B", text: "Claude Syndrome" },
      { id: "C", text: "Benedikt Syndrome" },
      { id: "D", text: "Parinaud Syndrome" },
      { id: "E", text: "Wallenberg Syndrome" }
    ],
    correctOptionId: "A",
    explanation: "Weber Syndrome (ventral midbrain P1 PCA stroke) combines ipsilateral oculomotor nerve (CN III) palsy with contralateral hemiparesis due to damage to the fascicular CN III fibers and corticospinal tract in the cerebral peduncle.",
    keyTakeaway: "Weber Syndrome = IPS CN III palsy + CTL hemiparesis (ventral midbrain P1 PCA).",
    tags: ["Weber Syndrome", "Midbrain", "P1 PCA"]
  },
  {
    id: "q-14",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A patient is evaluated for an inability to recognize faces of close family members visually, though he immediately recognizes them by voice. Brain MRI reveals bilateral fusiform gyrus occipitotemporal infarctions.",
    question: "What is the name of this visual agnosia?",
    options: [
      { id: "A", text: "Prosopagnosia" },
      { id: "B", text: "Achromatopsia" },
      { id: "C", text: "Simultagnosia" },
      { id: "D", text: "Autotopagnosia" },
      { id: "E", text: "Optic ataxia" }
    ],
    correctOptionId: "A",
    explanation: "Prosopagnosia is the visual inability to recognize familiar faces, localizing to bilateral fusiform gyrus lesions in the occipitotemporal cortex.",
    keyTakeaway: "Prosopagnosia = Inability to recognize faces -> Bilateral fusiform gyrus.",
    tags: ["Prosopagnosia", "Visual Agnosia", "Neuro-ophthalmology"]
  },
  {
    id: "q-15",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A 65-year-old male stroke patient exhibits nonfluent speech with effortful articulation, but his speech comprehension is intact and his ability to repeat phrases is REMARKABLY PRESERVED.",
    question: "What type of aphasia is present?",
    options: [
      { id: "A", text: "Broca Aphasia" },
      { id: "B", text: "Wernicke Aphasia" },
      { id: "C", text: "Transcortical Motor Aphasia" },
      { id: "D", text: "Conduction Aphasia" },
      { id: "E", text: "Global Aphasia" }
    ],
    correctOptionId: "C",
    explanation: "Transcortical Motor Aphasia presents with nonfluent speech and preserved comprehension JUST LIKE Broca aphasia, BUT REPETITION IS PRESERVED. Caused by watershed anterior MCA/ACA borderzone stroke.",
    keyTakeaway: "Transcortical Motor Aphasia = Nonfluent + Good Comprehension + PRESERVED REPETITION.",
    tags: ["Aphasia", "Transcortical", "Watershed"]
  },

  // Chapter 5: Epidemiology & Risk Factors
  {
    id: "q-16",
    chapterId: 5,
    chapterTitle: "Epidemiology & Risk Factors",
    vignette: "A 60-year-old patient with non-diabetic essential hypertension participates in a stroke prevention counseling session. According to clinical trial data, what is the single #1 modifiable risk factor for ischemic and hemorrhagic stroke?",
    question: "What is the #1 modifiable risk factor for stroke?",
    options: [
      { id: "A", text: "Hypertension" },
      { id: "B", text: "Diabetes Mellitus" },
      { id: "C", text: "Cigarette Smoking" },
      { id: "D", text: "Hyperlipidemia" },
      { id: "E", text: "Obesity" }
    ],
    correctOptionId: "A",
    explanation: "Hypertension is the single most important modifiable risk factor for both ischemic stroke and intracranial hemorrhage. Every 10 mmHg reduction in systolic blood pressure reduces stroke risk by ~33%.",
    keyTakeaway: "Hypertension is the #1 modifiable risk factor for stroke.",
    tags: ["Epidemiology", "Hypertension", "Risk Factors"]
  },
  {
    id: "q-17",
    chapterId: 5,
    chapterTitle: "Epidemiology & Risk Factors",
    vignette: "A 55-year-old female stroke patient who smokes 1 pack of cigarettes daily asks about stroke risk if she uses estrogen-containing oral contraceptive pills (OCPs).",
    question: "What is the combined stroke risk increase of smoking plus OCP use?",
    options: [
      { id: "A", text: "1.5x increase" },
      { id: "B", text: "2.0x increase" },
      { id: "C", text: "7.2x increase" },
      { id: "D", text: "15x increase" },
      { id: "E", text: "No change" }
    ],
    correctOptionId: "C",
    explanation: "Smoking alone increases stroke risk 2-4x. However, combining smoking with estrogen-containing oral contraceptives dramatically multiplies stroke risk to 7.2x baseline!",
    keyTakeaway: "Smoking + OCP use increases stroke risk 7.2-fold.",
    tags: ["Smoking", "OCP", "Risk Factors"]
  },

  // Chapter 6: Pathophysiology
  {
    id: "q-18",
    chapterId: 6,
    chapterTitle: "Stroke Pathophysiology",
    vignette: "During acute ischemic stroke, cerebral blood flow (CBF) drops in the core and penumbra. What is the normal baseline CBF in healthy human brain tissue?",
    question: "What is normal cerebral blood flow (CBF)?",
    options: [
      { id: "A", text: "10-15 mL/100g/min" },
      { id: "B", text: "25-30 mL/100g/min" },
      { id: "C", text: "50-55 mL/100g/min" },
      { id: "D", text: "100-120 mL/100g/min" },
      { id: "E", text: "200 mL/100g/min" }
    ],
    correctOptionId: "C",
    explanation: "Normal baseline Cerebral Blood Flow (CBF) is 50-55 mL/100g/min. CBF < 25 leads to electrical slowing; CBF < 10-15 leads to irreversible membrane pump failure (infarct core).",
    keyTakeaway: "Normal CBF = 50-55 mL/100g/min.",
    tags: ["CBF", "Pathophysiology", "Hemodynamics"]
  },
  {
    id: "q-19",
    chapterId: 6,
    chapterTitle: "Stroke Pathophysiology",
    vignette: "A brain perfusion MRI scan displays a region of decreased CBF, prolonged MTT (mean transit time), but NORMAL or INCREASED CBV (cerebral blood volume).",
    question: "What tissue zone does this perfusion signature represent?",
    options: [
      { id: "A", text: "Ischemic Core" },
      { id: "B", text: "Ischemic Penumbra" },
      { id: "C", text: "Benign Oligemia" },
      { id: "D", text: "Luxury Perfusion" },
      { id: "E", text: "Normal tissue" }
    ],
    correctOptionId: "B",
    explanation: "The ischemic penumbra has reduced CBF and prolonged MTT, but NORMAL or INCREASED CBV due to maximum compensatory autoregulatory vasodilation. In contrast, the core has low CBF AND low CBV.",
    keyTakeaway: "Penumbra = Low CBF + High MTT + NORMAL/INCREASED CBV.",
    tags: ["Penumbra", "CBV", "Perfusion"]
  },

  // Chapter 7: Classification & Vasculopathies
  {
    id: "q-20",
    chapterId: 7,
    chapterTitle: "Classification of Stroke",
    vignette: "A 65-year-old Asian male presents with a TIA caused by 80% severe stenosis of the left M1 middle cerebral artery. The SAMMPRIS trial evaluated interventional stenting versus aggressive medical therapy for ICAD.",
    question: "What were the primary findings of the SAMMPRIS trial?",
    options: [
      { id: "A", text: "Intracranial stenting was superior to medical therapy" },
      { id: "B", text: "Aggressive medical therapy was superior to intracranial stenting (14.7% 30-day stroke/death in stent group vs 5.8% medical)" },
      { id: "C", text: "Stenting reduced 30-day stroke risk by 50%" },
      { id: "D", text: "Warfarin was superior to Aspirin" },
      { id: "E", text: "Carotid endarterectomy was indicated" }
    ],
    correctOptionId: "B",
    explanation: "The SAMMPRIS trial showed that aggressive medical management (DAPT + SBP < 140 + LDL < 70) WAS SUPERIOR to intracranial stenting with the Wingspan stent for 70-99% ICAD (30-day stroke/death 14.7% stent vs 5.8% medical).",
    keyTakeaway: "SAMMPRIS: Aggressive medical therapy > Intracranial stenting for ICAD.",
    tags: ["SAMMPRIS", "ICAD", "Landmark Trial"]
  },
  {
    id: "q-21",
    chapterId: 7,
    chapterTitle: "Classification of Stroke",
    vignette: "A 34-year-old male presents with sudden severe left-sided neck pain and headache following a neck manipulation during a chiropractic session. On examination, he has mild left eyelid ptosis and miosis (miotic pupil). Facial sweating is intact bilaterally. He has no limb weakness, numbness, or dysarthria.",
    question: "Which of the following is the most likely diagnosis and diagnostic test of choice?",
    options: [
      { id: "A", text: "Carotid artery dissection; CTA or MRA with T1 fat suppression" },
      { id: "B", text: "Reversible cerebral vasoconstriction syndrome; Lumbar puncture" },
      { id: "C", text: "Giant cell arteritis; Temporal artery biopsy" },
      { id: "D", text: "Vertebral artery dissection; Conventional cerebral angiogram only" },
      { id: "E", text: "Cavernous sinus thrombosis; Non-contrast head CT" }
    ],
    correctOptionId: "A",
    explanation: "The patient presents with classic features of an extracranial Internal Carotid Artery (ICA) dissection: acute neck pain/headache and a partial 3rd-order Horner's syndrome (ptosis + miosis WITHOUT anhidrosis). Anhidrosis is absent because sudomotor fibers travel along the ECA, while postganglionic sympathetic fibers for eyelid and pupil travel along the ICA. Non-invasive imaging with CTA or MRA with T1 fat saturation (demonstrating an intramural crescent-shaped hematoma or flame-sign tapering) is the diagnostic test of choice.",
    keyTakeaway: "Carotid Dissection = Neck pain + Partial Horner's (no anhidrosis). MRA T1 fat-sat shows intramural hematoma.",
    tags: ["Carotid Dissection", "Horner Syndrome", "Young Stroke"]
  },
  {
    id: "q-22",
    chapterId: 7,
    chapterTitle: "Classification of Stroke",
    vignette: "A 28-year-old female 1 week postpartum experiences 4 episodes of severe 'thunderclap' headaches over 3 days. Cerebral angiography demonstrates multifocal segmental arterial narrowing and dilation ('string of beads') in medium cerebral arteries. CSF analysis is normal.",
    question: "What is the diagnosis and natural course of this disease?",
    options: [
      { id: "A", text: "PACNS; requires lifelong immunosuppression" },
      { id: "B", text: "RCVS; vasoconstriction spontaneously resolves within 8-12 weeks" },
      { id: "C", text: "Fibromuscular dysplasia; requires carotid stenting" },
      { id: "D", text: "Moyamoya disease; requires STA-MCA bypass" },
      { id: "E", text: "Takayasu arteritis; requires high-dose IV steroids" }
    ],
    correctOptionId: "B",
    explanation: "Reversible Cerebral Vasoconstriction Syndrome (RCVS) presents with recurrent thunderclap headaches and segmental arterial vasoconstriction ('string of beads'). It is self-limiting and vasoconstriction resolves within 8-12 weeks. Treated with Verapamil/Nimodipine.",
    keyTakeaway: "RCVS = Thunderclap headaches + segmental vasoconstriction that resolves in 8-12 weeks.",
    tags: ["RCVS", "Thunderclap Headache", "Vasculopathy"]
  },

  // Chapter 8: Acute Management, EVT, & Antiplatelets
  {
    id: "q-23",
    chapterId: 8,
    chapterTitle: "Endovascular Thrombectomy",
    vignette: "A 74-year-old female with atrial fibrillation was last seen normal 10 hours ago when she went to sleep. She woke up at 7:00 AM with severe left hemiplegia, left hemisensory loss, and forced rightward gaze deviation (NIHSS 16). Non-contrast CT demonstrates an ASPECTS of 9 (no large hypodensity). CTA reveals an occlusion of the right M1 segment of the middle cerebral artery. Perfusion CT (CTP) demonstrates an ischemic core of 18 cc and a total perfusion deficit of 95 cc (salvageable penumbra of 77 cc, mismatch ratio > 1.8).",
    question: "Based on the DAWN and DEFUSE 3 landmark trials, what is the most appropriate management plan?",
    options: [
      { id: "A", text: "Medical therapy with Aspirin monotherapy because she is outside the 6-hour window" },
      { id: "B", text: "Intravenous tPA bolus and infusion" },
      { id: "C", text: "Immediate mechanical thrombectomy (EVT)" },
      { id: "D", text: "Decompressive hemicraniectomy within 24 hours" },
      { id: "E", text: "Intracranial arterial stenting" }
    ],
    correctOptionId: "C",
    explanation: "The DAWN (6-24h window) and DEFUSE 3 (6-16h window) trials proved that mechanical thrombectomy (EVT) provides dramatic functional benefit (mRS 0-2) in patients with acute large vessel occlusion (LVO) in the anterior circulation who present beyond 6 hours if they have favorable perfusion-core mismatch imaging (small ischemic core < 70 cc, large penumbra). IV tPA (Option B) is contraindicated beyond 4.5 hours from last known normal.",
    keyTakeaway: "Mechanical thrombectomy is indicated up to 24 hours post-onset in anterior LVO with clinical/perfusion mismatch (DAWN & DEFUSE 3).",
    tags: ["Thrombectomy", "DAWN Trial", "DEFUSE 3", "LVO"]
  },
  {
    id: "q-24",
    chapterId: 8,
    chapterTitle: "Secondary Prevention",
    vignette: "A 61-year-old male presents to the clinic 12 hours after experiencing a transient episode of right hand weakness and slurred speech that resolved completely after 45 minutes (ABCD2 score = 5). Brain MRI shows no acute infarction. He has no prior history of TIA, stroke, or bleeding disorders. ECG shows normal sinus rhythm.",
    question: "According to the CHANCE and POINT trial guidelines, what antiplatelet strategy should be initiated?",
    options: [
      { id: "A", text: "Aspirin 81 mg daily monotherapy for 90 days" },
      { id: "B", text: "Dual Antiplatelet Therapy (Aspirin + Clopidogrel) for 21 days, followed by single antiplatelet monotherapy" },
      { id: "C", text: "Dual Antiplatelet Therapy (Aspirin + Clopidogrel) continued indefinitely for 1 year" },
      { id: "D", text: "Warfarin targeting INR 2.0 - 3.0" },
      { id: "E", text: "Apixaban 5 mg BID" }
    ],
    correctOptionId: "B",
    explanation: "The CHANCE and POINT trials demonstrated that initiating Dual Antiplatelet Therapy (DAPT) with Aspirin + Clopidogrel within 24 hours of a high-risk TIA (ABCD2 >= 4) or minor ischemic stroke (NIHSS <= 3) significantly reduces 90-day recurrent ischemic stroke compared to aspirin alone. Crucially, the POINT trial showed that continuing DAPT beyond 21 days increases major hemorrhage risk without additional ischemic benefit. Therefore, DAPT should be given for 21 days followed by single antiplatelet monotherapy.",
    keyTakeaway: "High-risk TIA / Minor Stroke -> DAPT (ASA + Clopidogrel) for 21 DAYS only, then single antiplatelet.",
    tags: ["DAPT", "CHANCE Trial", "POINT Trial", "TIA"]
  },

  // Chapter 9: Clinical Cardiology & AFib
  {
    id: "q-25",
    chapterId: 9,
    chapterTitle: "Clinical Cardiology & Stroke",
    vignette: "A 76-year-old female with a history of hypertension, type II diabetes, and non-valvular atrial fibrillation experiences an ischemic stroke. Her CHA₂DS₂-VASc score is calculated as 5.",
    question: "Which class of oral anticoagulants is preferred over Warfarin for secondary stroke prevention in non-valvular AFib?",
    options: [
      { id: "A", text: "Direct Oral Anticoagulants (DOACs: Apixaban, Dabigatran, Rivaroxaban)" },
      { id: "B", text: "Dual Antiplatelet Therapy (Aspirin + Clopidogrel)" },
      { id: "C", text: "Unfractionated Heparin infusion" },
      { id: "D", text: "Aspirin 325 mg daily" },
      { id: "E", text: "Clopidogrel 75 mg daily" }
    ],
    correctOptionId: "A",
    explanation: "AHA/ASA guidelines recommend DOACs over Warfarin for non-valvular atrial fibrillation because DOACs provide equivalent or superior stroke prevention with significantly lower risk of intracranial hemorrhage.",
    keyTakeaway: "DOACs are preferred over Warfarin in non-valvular AFib due to lower ICH risk.",
    tags: ["AFib", "DOACs", "Anticoagulation"]
  },
  {
    id: "q-26",
    chapterId: 9,
    chapterTitle: "Clinical Cardiology & Stroke",
    vignette: "A 68-year-old patient with severe rheumatic mitral stenosis and atrial fibrillation suffers an ischemic stroke. What is the mandatory oral anticoagulant choice?",
    question: "What oral anticoagulant is required in valvular atrial fibrillation (mitral stenosis)?",
    options: [
      { id: "A", text: "Warfarin (Vitamin K Antagonist)" },
      { id: "B", text: "Apixaban" },
      { id: "C", text: "Rivaroxaban" },
      { id: "D", text: "Dabigatran" },
      { id: "E", text: "Aspirin" }
    ],
    correctOptionId: "A",
    explanation: "In VALVULAR atrial fibrillation (moderate-to-severe mitral stenosis or mechanical heart valves), WARFARIN IS MANDATORY. DOACs are contraindicated.",
    keyTakeaway: "Valvular AFib (Mitral Stenosis / Mechanical Valve) requires WARFARIN.",
    tags: ["Valvular AFib", "Warfarin", "Cardiology"]
  },

  // Chapter 10: Genetic Stroke Syndromes
  {
    id: "q-27",
    chapterId: 10,
    chapterTitle: "Genetic Stroke Syndromes",
    vignette: "A 44-year-old female presents with progressive cognitive decline and recurrent minor subcortical strokes. She has a history of migraine with aura since age 20. Brain MRI reveals widespread subcortical white matter hyperintensities with prominent bilateral anterior temporal lobe and external capsule involvement.",
    question: "Which gene mutation is responsible for this condition?",
    options: [
      { id: "A", text: "HTRA1 mutation" },
      { id: "B", text: "NOTCH3 mutation on chromosome 19p" },
      { id: "C", text: "GLA gene deficiency" },
      { id: "D", text: "TREX1 mutation" },
      { id: "E", text: "FBN1 mutation" }
    ],
    correctOptionId: "B",
    explanation: "This patient has CADASIL (Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy), caused by mutations in the NOTCH3 gene on chromosome 19p. Symmetrical FLAIR hyperintensities in the anterior temporal lobes and external capsule are pathognomonic MRI findings.",
    keyTakeaway: "CADASIL = NOTCH3 mutation. Anterior temporal lobe & external capsule white matter hyperintensities.",
    tags: ["CADASIL", "Genetics", "NOTCH3"]
  },
  {
    id: "q-28",
    chapterId: 10,
    chapterTitle: "Genetic Stroke Syndromes",
    vignette: "A 25-year-old male presents with burning acroparesthesias in his hands and feet, corneal opacities, angiokeratomas on his trunk, and an early ischemic stroke in the posterior circulation. Diagnostic testing shows low alpha-Galactosidase A activity.",
    question: "What is the diagnosis?",
    options: [
      { id: "A", text: "Fabry Disease" },
      { id: "B", text: "CADASIL" },
      { id: "C", text: "CARASIL" },
      { id: "D", text: "MELAS" },
      { id: "E", text: "Tangier Disease" }
    ],
    correctOptionId: "A",
    explanation: "Fabry Disease is an X-linked lysosomal storage disorder caused by deficiency of alpha-Galactosidase A. Clinical triad: Angiokeratomas, burning acroparesthesias, corneal opacities, and premature stroke.",
    keyTakeaway: "Fabry Disease = X-linked alpha-Galactosidase A deficiency -> Angiokeratomas & early stroke.",
    tags: ["Fabry Disease", "Lysosomal Storage", "Genetics"]
  },

  // Chapter 13: Intracranial Hemorrhage
  {
    id: "q-29",
    chapterId: 13,
    chapterTitle: "Intracranial Hemorrhage",
    vignette: "An 82-year-old male with a history of mild cognitive impairment presents with sudden severe headache and right hemiparesis. Non-contrast head CT demonstrates a 42 cc lobar intraparenchymal hemorrhage in the left parietal lobe without intraventricular extension. MRI SWI sequence shows multiple prior punctate cortical/subcortical microhemorrhages in the occipital and frontal lobes. Gradient-echo imaging shows no deep basal ganglia hemorrhages.",
    question: "What is the most likely underlying etiology of this patient's hemorrhage?",
    options: [
      { id: "A", text: "Hypertensive lipohyalinosis of lenticulostriate arteries" },
      { id: "B", text: "Cerebral Amyloid Angiopathy (CAA)" },
      { id: "C", text: "Ruptured saccular aneurysm of the AComm artery" },
      { id: "D", text: "Brain Arteriovenous Malformation (AVM)" },
      { id: "E", text: "Cavernous sinus thrombosis" }
    ],
    correctOptionId: "B",
    explanation: "Cerebral Amyloid Angiopathy (CAA) is the most common cause of spontaneous, non-traumatic LOBAR intraparenchymal hemorrhage in elderly adults (>55 years). It is caused by beta-amyloid deposition in cortical and leptomeningeal arteries. SWI characteristically shows multiple strictly lobar cortical/subcortical microbleeds. Hypertensive ICH (Option A) occurs in deep structures (putamen, thalamus, pons).",
    keyTakeaway: "Elderly + Spontaneous Lobar ICH + Cortical Microbleeds on SWI = Cerebral Amyloid Angiopathy (CAA).",
    tags: ["ICH", "CAA", "Amyloid", "Lobar Bleed"]
  },
  {
    id: "q-30",
    chapterId: 13,
    chapterTitle: "Intracranial Hemorrhage",
    vignette: "A 65-year-old male on Aspirin suffers a spontaneous 25 cc basal ganglia hypertensive ICH with GCS 11. The PATCH trial evaluated emergency platelet transfusion in antiplatelet-associated acute ICH.",
    question: "What were the results of the PATCH trial regarding platelet transfusions?",
    options: [
      { id: "A", text: "Platelet transfusion significantly reduced hematoma growth" },
      { id: "B", text: "Platelet transfusion INCREASED mortality and dependency and should NOT be given routinely" },
      { id: "C", text: "Platelet transfusion improved 3-month mRS" },
      { id: "D", text: "Platelet transfusion was superior to PCC" },
      { id: "E", text: "Platelet transfusion is mandatory for all ICH patients" }
    ],
    correctOptionId: "B",
    explanation: "The PATCH trial proved that emergency platelet transfusion in acute ICH patients taking antiplatelets INCREASED mortality and dependency (mRS 4-6) compared to standard care. Platelets should not be routinely transfused.",
    keyTakeaway: "PATCH trial: Platelet transfusion in acute ICH taking antiplatelets INCREASES mortality.",
    tags: ["PATCH Trial", "ICH", "Platelets"]
  },

  // Chapter 14: Vascular Malformations & Aneurysms
  {
    id: "q-31",
    chapterId: 14,
    chapterTitle: "Vascular Malformations",
    vignette: "A 35-year-old male is evaluated for a 2.5 cm unruptured brain Arteriovenous Malformation (AVM) located in the non-eloquent right frontal lobe with superficial venous drainage. The Spetzler-Martin scale grades AVM surgical morbidity.",
    question: "What is this AVM's Spetzler-Martin Grade?",
    options: [
      { id: "A", text: "Grade 1" },
      { id: "B", text: "Grade 2" },
      { id: "C", text: "Grade 3" },
      { id: "D", text: "Grade 4" },
      { id: "E", text: "Grade 5" }
    ],
    correctOptionId: "A",
    explanation: "Spetzler-Martin Score calculation: Size < 3 cm (1 pt), Eloquence non-eloquent (0 pt), Venous drainage superficial (0 pt). Total = Grade 1 (low surgical risk).",
    keyTakeaway: "Spetzler-Martin Grade 1 = Size < 3cm + Non-eloquent + Superficial venous drainage.",
    tags: ["AVM", "Spetzler-Martin", "Neurosurgery"]
  },
  {
    id: "q-32",
    chapterId: 14,
    chapterTitle: "Intracranial Aneurysms & SAH",
    vignette: "A 50-year-old female undergoes clipping of a ruptured anterior communicating artery aneurysm. On post-op day 6, she develops subtle confusion. TCD shows mean MCA blood flow velocity of 165 cm/s.",
    question: "What medication administered orally for 21 days post-SAH is FDA-approved to improve neurological outcomes?",
    options: [
      { id: "A", text: "Nimodipine 60 mg q4h" },
      { id: "B", text: "Verapamil 80 mg q8h" },
      { id: "C", text: "Nicardipine IV infusion" },
      { id: "D", text: "Aspirin 325 mg daily" },
      { id: "E", text: "Labetalol 20 mg IV" }
    ],
    correctOptionId: "A",
    explanation: "Oral Nimodipine 60 mg every 4 hours for 21 days is mandatory for all aneurysmal SAH patients to reduce cerebral vasospasm-induced delayed ischemic neurological deficits and improve outcomes.",
    keyTakeaway: "Aneurysmal SAH -> Nimodipine 60 mg PO q4h for 21 days.",
    tags: ["SAH", "Nimodipine", "Vasospasm"]
  },

  // Chapter 15: Hematology & Pediatric Stroke
  {
    id: "q-33",
    chapterId: 15,
    chapterTitle: "Pediatric & Hematologic Stroke",
    vignette: "An 8-year-old boy with Sickle Cell Disease (HbSS) undergoes routine screening. Transcranial Doppler (TCD) ultrasonography reveals a mean blood flow velocity of 215 cm/s in the right middle cerebral artery. He has no history of stroke or neurological symptoms.",
    question: "Based on the landmark STOP trial, what is the most appropriate management to prevent stroke in this patient?",
    options: [
      { id: "A", text: "Initiate daily Aspirin 81 mg monotherapy" },
      { id: "B", text: "Initiate Hydroxyurea therapy immediately and recheck TCD in 6 months" },
      { id: "C", text: "Initiate a program of periodic blood exchange transfusions to maintain HbS < 30%" },
      { id: "D", text: "Perform immediate bilateral carotid endarterectomy" },
      { id: "E", text: "No intervention needed as he is asymptomatic" }
    ],
    correctOptionId: "C",
    explanation: "The STOP trial demonstrated that in pediatric Sickle Cell Disease, a TCD mean velocity > 200 cm/s identifies children at high risk for arterial ischemic stroke. Regular blood exchange transfusion therapy (targeting HbS < 30%) resulted in a 92% REDUCTION in first stroke incidence compared to standard care!",
    keyTakeaway: "Pediatric Sickle Cell + TCD velocity > 200 cm/s -> Chronic exchange transfusion (STOP trial).",
    tags: ["STOP Trial", "Sickle Cell", "TCD", "Pediatrics"]
  },
  {
    id: "q-34",
    chapterId: 15,
    chapterTitle: "Hematologic Disorders",
    vignette: "A 32-year-old female taking oral contraceptives presents with an acute DVT and deep cerebral venous sinus thrombosis. Lab testing reveals resistance to Activated Protein C (aPC-R).",
    question: "What is the most common inherited cause of hypercoagulability causing aPC resistance?",
    options: [
      { id: "A", text: "Factor V Leiden Mutation" },
      { id: "B", text: "Prothrombin G20210A Mutation" },
      { id: "C", text: "Protein C Deficiency" },
      { id: "D", text: "Antithrombin III Deficiency" },
      { id: "E", text: "MTHFR Mutation" }
    ],
    correctOptionId: "A",
    explanation: "Factor V Leiden point mutation renders Factor V resistant to inactivation by Activated Protein C (aPC-R). It is the #1 most common inherited hypercoagulable state.",
    keyTakeaway: "Factor V Leiden = #1 inherited thrombophilia -> Activated Protein C resistance.",
    tags: ["Factor V Leiden", "Thrombophilia", "aPC-R"]
  },

  // Chapter 16: Neuroradiology
  {
    id: "q-35",
    chapterId: 16,
    chapterTitle: "Neuroradiology",
    vignette: "A non-contrast head CT in an acute MCA stroke patient is evaluated using the 10-point ASPECTS score. The radiologist notes loss of gray-white differentiation in the Caudate, Lentiform nucleus, and M1 and M2 cortical regions.",
    question: "What is the calculated ASPECTS score?",
    options: [
      { id: "A", text: "ASPECTS 10" },
      { id: "B", text: "ASPECTS 8" },
      { id: "C", text: "ASPECTS 6" },
      { id: "D", text: "ASPECTS 4" },
      { id: "E", text: "ASPECTS 2" }
    ],
    correctOptionId: "C",
    explanation: "ASPECTS starts at 10. Subtract 1 point for each affected region: Caudate (-1), Lentiform (-1), M1 (-1), M2 (-1). 10 - 4 = ASPECTS 6.",
    keyTakeaway: "ASPECTS: Subtract 1 point per ischemic region from 10.",
    tags: ["ASPECTS", "CT Imaging", "Neuroradiology"]
  },

  // Chapter 17: Vascular Cognitive Disorders
  {
    id: "q-36",
    chapterId: 17,
    chapterTitle: "Vascular Cognitive Disorders",
    vignette: "An 80-year-old male with long-standing HTN presents with progressive executive dysfunction, apathy, small-step gait impairment, and urinary urgency. Brain MRI reveals severe periventricular white matter hyperintensities and multiple lacunar infarcts. Hachinski Ischemic Score is 9.",
    question: "A Hachinski Ischemic Score > 7 points strongly favors which diagnosis?",
    options: [
      { id: "A", text: "Alzheimer's Disease" },
      { id: "B", text: "Vascular Dementia / Vascular Cognitive Impairment" },
      { id: "C", text: "Frontotemporal Dementia" },
      { id: "D", text: "Dementia with Lewy Bodies" },
      { id: "E", text: "Normal Pressure Hydrocephalus" }
    ],
    correctOptionId: "B",
    explanation: "A Hachinski Ischemic Score > 7 differentiates Vascular Dementia from AD (score <= 4). Features favoring vascular etiology: abrupt onset, stepwise decline, history of stroke, focal neurological signs, and HTN.",
    keyTakeaway: "Hachinski Score > 7 points = Vascular Dementia.",
    tags: ["Hachinski", "Vascular Dementia", "Cognitive"]
  },

  // Chapter 18: Stroke Rehabilitation
  {
    id: "q-37",
    chapterId: 18,
    chapterTitle: "Stroke Rehabilitation",
    vignette: "A 58-year-old stroke patient with mild-to-moderate upper extremity hemiparesis participates in constraint-induced movement therapy (CIMT) per the EXCITE trial protocol.",
    question: "What is the core protocol of CIMT?",
    options: [
      { id: "A", text: "Restraining the stroke-affected limb to force use of the unaffected limb" },
      { id: "B", text: "Constraining the UNAFFECTED hand (using a mitt) for 90% of waking hours while training the affected arm" },
      { id: "C", text: "Bilateral leg exoskeletal therapy" },
      { id: "D", text: "Passive range of motion only" },
      { id: "E", text: "Electromyographic biofeedback" }
    ],
    correctOptionId: "B",
    explanation: "Constraint-Induced Movement Therapy (CIMT) forces use of the paretic stroke-affected arm by constraining the UNAFFECTED arm with a mitt for 90% of waking hours while undergoing 6 hours of daily paretic arm training.",
    keyTakeaway: "CIMT = Restrain UNAFFECTED limb to force intensive training of affected arm.",
    tags: ["CIMT", "Rehabilitation", "EXCITE Trial"]
  },

  // Chapter 19: Pharmacology
  {
    id: "q-38",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "A patient on Dabigatran (Pradaxa) suffers an acute life-threatening intracerebral hemorrhage. What specific monoclonal antibody reversal agent is FDA-approved for immediate reversal of Dabigatran?",
    question: "What is the specific reversal agent for Dabigatran?",
    options: [
      { id: "A", text: "Idarucizumab (Praxbind)" },
      { id: "B", text: "Andexanet alfa" },
      { id: "C", text: "Protamine sulfate" },
      { id: "D", text: "Vitamin K" },
      { id: "E", text: "Aminocaproic acid" }
    ],
    correctOptionId: "A",
    explanation: "Idarucizumab (Praxbind) is a humanized monoclonal antibody fragment that binds Dabigatran with 350x higher affinity than thrombin, achieving immediate reversal. Andexanet alfa (Option B) reverses Factor Xa inhibitors.",
    keyTakeaway: "Idarucizumab (Praxbind) reverses Dabigatran; Andexanet alfa reverses Factor Xa inhibitors.",
    tags: ["Idarucizumab", "Dabigatran Reversal", "Pharmacology"]
  },
  {
    id: "q-39",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "A patient taking Clopidogrel (Plavix) is prescribed Omeprazole for GERD. Why does Omeprazole diminish the antiplatelet efficacy of Clopidogrel?",
    question: "What enzyme interaction reduces Clopidogrel activation?",
    options: [
      { id: "A", text: "Omeprazole inhibits hepatic CYP2C19 required for Clopidogrel prodrug activation" },
      { id: "B", text: "Omeprazole induces CYP3A4" },
      { id: "C", text: "Omeprazole blocks renal excretion of aspirin" },
      { id: "D", text: "Omeprazole directly binds P2Y12 receptors" },
      { id: "E", text: "Omeprazole degrades fibrinogen" }
    ],
    correctOptionId: "A",
    explanation: "Clopidogrel is a prodrug requiring hepatic CYP2C19 activation. Omeprazole inhibits CYP2C19, reducing active clopidogrel concentration. Pantoprazole has less CYP2C19 inhibition.",
    keyTakeaway: "Omeprazole inhibits CYP2C19 -> Reduces Clopidogrel active metabolite.",
    tags: ["Clopidogrel", "CYP2C19", "Drug Interactions"]
  },

  // Chapter 20 & 21: Systems of Care & Ethics
  {
    id: "q-40",
    chapterId: 20,
    chapterTitle: "Stroke Systems of Care",
    vignette: "A community hospital can evaluate, administer IV tPA, and stabilize acute stroke patients 24/7, but transfers complex stroke and EVT cases to a regional center.",
    question: "What is this hospital's stroke certification tier?",
    options: [
      { id: "A", text: "Acute Stroke Ready Hospital (ASRH)" },
      { id: "B", text: "Primary Stroke Center (PSC)" },
      { id: "C", text: "Thrombectomy-Capable Stroke Center (TSC)" },
      { id: "D", text: "Comprehensive Stroke Center (CSC)" },
      { id: "E", text: "Level 1 Trauma Center" }
    ],
    correctOptionId: "A",
    explanation: "Acute Stroke Ready Hospitals (ASRH) meet criteria to rapidly diagnose, administer IV thrombolytics, and transfer complex stroke cases to PSCs or CSCs.",
    keyTakeaway: "ASRH = Administer tPA & stabilize before transfer to PSC/CSC.",
    tags: ["Stroke Center", "Certification", "Systems of Care"]
  }
];

// Additional High Yield Board Questions (q-41 to q-100)
const additionalQuestions: PracticeQuestion[] = [
  {
    id: "q-41",
    chapterId: 8,
    chapterTitle: "Thrombolytic Therapy",
    vignette: "A 50-year-old male receives IV tPA for acute ischemic stroke. 30 minutes into the infusion, he complains of severe headache and vomiting. Blood pressure spikes to 205/115 mmHg and GCS drops from 15 to 11.",
    question: "What is the immediate management protocol for suspected tPA-associated symptomatic ICH?",
    options: [
      { id: "A", text: "Stop tPA infusion immediately, order stat non-contrast CT head, send CBC/coags/fibrinogen, and administer Cryoprecipitate 10 units" },
      { id: "B", text: "Increase tPA infusion rate to dissolve the clot" },
      { id: "C", text: "Administer Heparin 5000 units IV" },
      { id: "D", text: "Give IV Mannitol and continue tPA" },
      { id: "E", text: "Perform emergency lumbar puncture" }
    ],
    correctOptionId: "A",
    explanation: "If symptomatic ICH post-tPA is suspected: STOP tPA infusion immediately, stat non-contrast head CT, send CBC/PT/INR/PTT/fibrinogen/type & cross, and give Cryoprecipitate 10 units (to raise fibrinogen > 150 mg/dL) plus Tranexamic acid (1g IV) or Aminocaproic acid.",
    keyTakeaway: "tPA Bleed Protocol = STOP tPA -> Stat NCCT -> Cryoprecipitate (10U) + Tranexamic Acid.",
    tags: ["tPA Bleed Protocol", "Cryoprecipitate", "sICH"]
  },
  {
    id: "q-42",
    chapterId: 7,
    chapterTitle: "Classification of Stroke",
    vignette: "A 45-year-old female presents with progressive bilateral claudication of arms, fever, weight loss, and absent radial pulses on physical exam. ESR is 85 mm/hr. MRA demonstrates irregular luminal narrowing and wall thickening of the aorta and main arterial branches.",
    question: "What is the diagnosis?",
    options: [
      { id: "A", text: "Takayasu Arteritis" },
      { id: "B", text: "Giant Cell Arteritis" },
      { id: "C", text: "Polyarteritis Nodosa" },
      { id: "D", text: "GPA (Wegener's)" },
      { id: "E", text: "Kawasaki Disease" }
    ],
    correctOptionId: "A",
    explanation: "Takayasu Arteritis ('Pulseless Disease') is a granulomatous vasculitis of the aorta and main branches affecting young Asian females (<40yo). Symptoms: arm claudication, pulse asymmetry, elevated ESR/CRP.",
    keyTakeaway: "Takayasu Arteritis = Granulomatous aortic arch vasculitis in young females -> Pulseless arms & claudication.",
    tags: ["Takayasu", "Vasculitis", "Pulseless Disease"]
  },
  {
    id: "q-43",
    chapterId: 7,
    chapterTitle: "Classification of Stroke",
    vignette: "A 72-year-old male presents with new onset temporal headache, jaw claudication while chewing, and scalp tenderness. ESR is 92 mm/hr. High-dose IV steroids are initiated.",
    question: "What is the definitive diagnostic test for Giant Cell Arteritis (GCA)?",
    options: [
      { id: "A", text: "Temporal Artery Biopsy" },
      { id: "B", text: "Catheter Angiography" },
      { id: "C", text: "Brain Biopsy" },
      { id: "D", text: "CSF oligoclonal bands" },
      { id: "E", text: "Surfactant protein assay" }
    ],
    correctOptionId: "A",
    explanation: "Temporal Artery Biopsy is the gold standard diagnostic test for GCA (showing granulomatous inflammation with giant cells). Steroids should be started immediately without waiting for biopsy to prevent permanent visual loss!",
    keyTakeaway: "GCA = Temporal Artery Biopsy gold standard. Start steroids immediately to prevent blindness.",
    tags: ["GCA", "Temporal Artery", "Vasculitis"]
  },
  {
    id: "q-44",
    chapterId: 9,
    chapterTitle: "Clinical Cardiology & Stroke",
    vignette: "A 28-year-old female presents with fever, new heart murmur, splinter hemorrhages under her fingernails, and an acute embolic stroke. Blood cultures grow Staphylococcus aureus. Transthoracic echocardiogram (TTE) shows a 14 mm vegetation on the anterior mitral valve leaflet.",
    question: "When is urgent cardiac surgery (< 48 hours) indicated in Infective Endocarditis?",
    options: [
      { id: "A", text: "Mitral vegetation size > 10 mm, recurrent embolisms despite antibiotics, or severe valve dysfunction" },
      { id: "B", text: "Only after 6 weeks of intravenous antibiotics" },
      { id: "C", text: "Never in the presence of acute ischemic stroke" },
      { id: "D", text: "Only if blood cultures are negative" },
      { id: "E", text: "If the patient is taking Warfarin" }
    ],
    correctOptionId: "A",
    explanation: "Urgent early valve surgery (<48 hours) in Infective Endocarditis is indicated for large vegetations (>10 mm, especially anterior mitral leaflet), recurrent embolization despite appropriate antibiotics, severe valvular dysfunction/heart failure, or abscess formation.",
    keyTakeaway: "Infective Endocarditis -> Early surgery if vegetation > 10 mm or recurrent emboli despite Abx.",
    tags: ["Endocarditis", "Vegetation", "Cardiology"]
  },
  {
    id: "q-45",
    chapterId: 11,
    chapterTitle: "Special Populations & CVST",
    vignette: "A 30-year-old female on oral contraceptives presents with 5 days of severe worsening headache, papilledema, and a new onset focal seizure. Contrast-enhanced CT venogram (CTV) demonstrates an 'empty delta sign' in the posterior superior sagittal sinus.",
    question: "What is the first-line treatment for Cerebral Venous Sinus Thrombosis (CVST), even in the presence of a venous hemorrhagic infarction?",
    options: [
      { id: "A", text: "Therapeutic Anticoagulation (LMWH or Unfractionated Heparin)" },
      { id: "B", text: "Aspirin 325 mg daily monotherapy" },
      { id: "C", text: "Decompressive hemicraniectomy only" },
      { id: "D", text: "Immediate IV tPA thrombolysis" },
      { id: "E", text: "High-dose IV Dexamethasone" }
    ],
    correctOptionId: "A",
    explanation: "Therapeutic Anticoagulation with full-dose LMWH or UFH is the Class I first-line treatment for CVST. Anticoagulation is indicated EVEN IF secondary venous hemorrhagic transformation is present on neuroimaging!",
    keyTakeaway: "CVST treatment = Full-dose Anticoagulation (LMWH/UFH), even if venous hemorrhage is present!",
    tags: ["CVST", "Empty Delta Sign", "Anticoagulation"]
  },
  {
    id: "q-46",
    chapterId: 11,
    chapterTitle: "Special Populations & Pregnancy",
    vignette: "A 32-year-old pregnant female at 34 weeks gestation presents with acute severe headache, visual scotomas, blood pressure of 168/110 mmHg, and 3+ proteinuria. MRI brain reveals bilateral symmetrical vasogenic edema in the parietal and occipital white matter.",
    question: "What is the diagnosis and medication of choice to prevent eclamptic seizures?",
    options: [
      { id: "A", text: "PRES secondary to Preeclampsia; IV Magnesium Sulfate" },
      { id: "B", text: "RCVS; IV Phenytoin" },
      { id: "C", text: "Meningitis; IV Ceftriaxone" },
      { id: "D", text: "CVST; IV Levetiracetam" },
      { id: "E", text: "CADASIL; Valproic acid" }
    ],
    correctOptionId: "A",
    explanation: "Preeclampsia (HTN + proteinuria after 20 wks) can cause Posterior Reversible Encephalopathy Syndrome (PRES - parietal/occipital vasogenic edema). IV Magnesium Sulfate (4-6g bolus then 2g/hr) is the proven agent to prevent eclamptic seizures.",
    keyTakeaway: "PRES / Preeclampsia -> IV Magnesium Sulfate for seizure prophylaxis.",
    tags: ["PRES", "Preeclampsia", "Magnesium Sulfate"]
  },
  {
    id: "q-47",
    chapterId: 14,
    chapterTitle: "Intracranial Aneurysms & SAH",
    vignette: "A 55-year-old male presents to the ED with the 'worst headache of his life' starting abruptly 2 hours ago during exertion. Neurological exam is normal. Non-contrast head CT is completely normal.",
    question: "What is the mandatory next diagnostic step to rule out aneurysmal Subarachnoid Hemorrhage (SAH)?",
    options: [
      { id: "A", text: "Lumbar Punctures for CSF xanthochromia and RBC count in tube 1 vs tube 4" },
      { id: "B", text: "Discharge home with NSAIDs" },
      { id: "C", text: "Repeat NCCT in 24 hours" },
      { id: "D", text: "EEG" },
      { id: "E", text: "Transcranial Doppler" }
    ],
    correctOptionId: "A",
    explanation: "If CT head is negative but clinical history strongly suggests SAH (thunderclap headache), a Lumbar Puncture is mandatory to check for CSF xanthochromia (bilirubin breakdown) and persistent RBCs from tube 1 to tube 4.",
    keyTakeaway: "Thunderclap HA + Negative NCCT -> Lumbar Puncture for xanthochromia is mandatory!",
    tags: ["SAH", "Xanthochromia", "Lumbar Puncture"]
  },
  {
    id: "q-48",
    chapterId: 14,
    chapterTitle: "Intracranial Aneurysms & SAH",
    vignette: "The ISAT trial evaluated endovascular coiling versus open surgical clipping for ruptured intracranial aneurysms.",
    question: "What were the primary conclusions of the ISAT trial?",
    options: [
      { id: "A", text: "Endovascular coiling resulted in higher functional independence (mRS 0-2) at 1 year compared to surgical clipping" },
      { id: "B", text: "Surgical clipping was superior in all patients" },
      { id: "C", text: "Coiling had zero re-bleeding risk" },
      { id: "D", text: "Medical therapy alone was superior" },
      { id: "E", text: "Clipping is preferred in patients > 70 years" }
    ],
    correctOptionId: "A",
    explanation: "The ISAT trial showed that in patients with ruptured aneurysms suitable for either intervention, endovascular coiling resulted in a significantly higher rate of functional independence at 1 year compared to surgical clipping (though coiling had slightly higher late re-bleeding risk).",
    keyTakeaway: "ISAT Trial: Endovascular coiling > Surgical clipping for 1-year functional independence in ruptured aneurysms.",
    tags: ["ISAT Trial", "Coiling", "Clipping", "SAH"]
  },
  {
    id: "q-49",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "A 64-year-old male with a history of stroke and non-valvular AFib takes Rivaroxaban (Xarelto) 20 mg daily. What specific reversal agent is FDA-approved for Factor Xa inhibitors (Apixaban and Rivaroxaban)?",
    question: "What is the reversal agent for Factor Xa inhibitors?",
    options: [
      { id: "A", text: "Andexanet alfa" },
      { id: "B", text: "Idarucizumab" },
      { id: "C", text: "Protamine" },
      { id: "D", text: "Vitamin K" },
      { id: "E", text: "Deferoxamine" }
    ],
    correctOptionId: "A",
    explanation: "Andexanet alfa (Andexxa) is a recombinant modified human Factor Xa decoy protein designed to reverse Factor Xa inhibitors (Apixaban and Rivaroxaban). Idarucizumab reverses Dabigatran.",
    keyTakeaway: "Andexanet alfa reverses Factor Xa inhibitors (Apixaban/Rivaroxaban); Idarucizumab reverses Dabigatran.",
    tags: ["Andexanet Alfa", "Factor Xa", "Reversal Agents"]
  },
  {
    id: "q-50",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "A patient on Warfarin presents with an acute intracranial hemorrhage and an INR of 3.8. What is the fastest and most effective combination therapy to rapidly reverse Warfarin coagulopathy?",
    question: "What is the preferred rapid reversal strategy for Warfarin-associated ICH?",
    options: [
      { id: "A", text: "Four-factor Prothrombin Complex Concentrate (4-Factor PCC) + IV Vitamin K" },
      { id: "B", text: "Fresh Frozen Plasma (FFP) alone" },
      { id: "C", text: "Oral Vitamin K alone" },
      { id: "D", text: "Platelet transfusion" },
      { id: "E", text: "Cryoprecipitate alone" }
    ],
    correctOptionId: "A",
    explanation: "4-Factor PCC (Kcentra) plus IV Vitamin K (10mg slow infusion) is the preferred gold standard for rapid Warfarin reversal in ICH. PCC normalizes INR in < 30 minutes with small volume load compared to FFP.",
    keyTakeaway: "Warfarin ICH Reversal = 4-Factor PCC + IV Vitamin K (faster & lower volume than FFP).",
    tags: ["Warfarin Reversal", "PCC", "Vitamin K"]
  }
];

questionsData.push(...additionalQuestions);

// Additional Questions (q-51 to q-100)
const questionsPart3: PracticeQuestion[] = [
  {
    id: "q-51",
    chapterId: 10,
    chapterTitle: "Genetic Stroke Syndromes",
    vignette: "A 32-year-old male presents with recurrent lacunar strokes, premature severe hair loss (alopecia), and progressive disabling lumbar spondylosis and back pain without traditional vascular risk factors.",
    question: "What autosomal recessive genetic mutation causes CARASIL?",
    options: [
      { id: "A", text: "HTRA1 mutation" },
      { id: "B", text: "NOTCH3 mutation" },
      { id: "C", text: "TREX1 mutation" },
      { id: "D", text: "GLA deficiency" },
      { id: "E", text: "RNF213 mutation" }
    ],
    correctOptionId: "A",
    explanation: "CARASIL (Cerebral Autosomal Recessive Arteriopathy with Subcortical Infarcts and Leukoencephalopathy) is caused by mutations in the HTRA1 gene. Triad: Early lacunar strokes, premature alopecia, and lumbar spondylosis.",
    keyTakeaway: "CARASIL = Autosomal Recessive HTRA1 mutation -> Strokes, Alopecia, Lumbar Spondylosis.",
    tags: ["CARASIL", "HTRA1", "Genetics"]
  },
  {
    id: "q-52",
    chapterId: 10,
    chapterTitle: "Genetic Stroke Syndromes",
    vignette: "A 38-year-old female presents with progressive visual loss, memory decline, seizures, and renal dysfunction. Brain MRI shows a space-occupying enhancing tumor-like leukodystrophy lesion sparing the cerebral cortex.",
    question: "What autosomal dominant disorder is caused by TREX1 mutations?",
    options: [
      { id: "A", text: "Retinal Vasculopathy with Cerebral Leukoencephalopathy (RVCL)" },
      { id: "B", text: "CADASIL" },
      { id: "C", text: "Fabry disease" },
      { id: "D", text: "MELAS" },
      { id: "E", text: "Marfan syndrome" }
    ],
    correctOptionId: "A",
    explanation: "RVCL (Retinal Vasculopathy with Cerebral Leukoencephalopathy) is an Autosomal Dominant vasculopathy caused by TREX1 gene mutations. MRI shows enhancing tumor-like lesions sparing cortex. Treated with Bevacizumab.",
    keyTakeaway: "RVCL = TREX1 mutation -> Retinal vasculopathy + tumor-like white matter lesions.",
    tags: ["RVCL", "TREX1", "Leukoencephalopathy"]
  },
  {
    id: "q-53",
    chapterId: 10,
    chapterTitle: "Genetic Stroke Syndromes",
    vignette: "A 22-year-old male presents with stroke-like symptoms, seizures, short stature, and sensorineural hearing loss. Serum lactic acid is elevated. Muscle biopsy reveals 'ragged red fibers' on Gomori trichrome stain.",
    question: "What is the diagnosis and classic tRNA gene mutation?",
    options: [
      { id: "A", text: "MELAS; A3243G mutation in tRNA" },
      { id: "B", text: "MERRF; A8344G mutation" },
      { id: "C", text: "Leber Hereditary Optic Neuropathy" },
      { id: "D", text: "CADASIL; NOTCH3" },
      { id: "E", text: "Kearns-Sayre Syndrome" }
    ],
    correctOptionId: "A",
    explanation: "MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-like episodes) is caused by the A3243G mutation in mitochondrial tRNA. Muscle biopsy shows ragged red fibers.",
    keyTakeaway: "MELAS = Mitochondrial A3243G tRNA mutation -> Stroke-like episodes + Lactic acidosis + Ragged red fibers.",
    tags: ["MELAS", "Mitochondrial", "Ragged Red Fibers"]
  },
  {
    id: "q-54",
    chapterId: 10,
    chapterTitle: "Genetic Stroke Syndromes",
    vignette: "A 19-year-old tall male with pectus carinatum, arachnodactyly, lens subluxation (ectopia lentis), and MVP suffers an acute aortic dissection.",
    question: "What gene defect causes Marfan Syndrome?",
    options: [
      { id: "A", text: "FBN1 (Fibrillin-1)" },
      { id: "B", text: "COL3A1" },
      { id: "C", text: "NOTCH3" },
      { id: "D", text: "ABCC6" },
      { id: "E", text: "HTRA1" }
    ],
    correctOptionId: "A",
    explanation: "Marfan Syndrome is Autosomal Dominant caused by mutations in FBN1 (Fibrillin-1), affecting elastin microfibrils. Features: tall stature, ectopia lentis, MVP, aortic dissection.",
    keyTakeaway: "Marfan Syndrome = FBN1 (Fibrillin-1) mutation -> Aortic root dissection & ectopia lentis.",
    tags: ["Marfan", "FBN1", "Connective Tissue"]
  },
  {
    id: "q-55",
    chapterId: 10,
    chapterTitle: "Genetic Stroke Syndromes",
    vignette: "A 26-year-old female presents with spontaneous carotid artery dissection and translucent skin with visible venous patterns. Genetic testing identifies a COL3A1 mutation.",
    question: "What type of Ehlers-Danlos Syndrome is present?",
    options: [
      { id: "A", text: "Vascular Type IV Ehlers-Danlos Syndrome" },
      { id: "B", text: "Hypermobility Type III" },
      { id: "C", text: "Classical Type I" },
      { id: "D", text: "Kyphoscoliotic Type VI" },
      { id: "E", text: "Arthrochalasia Type VII" }
    ],
    correctOptionId: "A",
    explanation: "Ehlers-Danlos Syndrome Type IV (Vascular Type) is caused by COL3A1 collagen mutations. High risk for spontaneous arterial dissection, aneurysm rupture, and uterine rupture.",
    keyTakeaway: "Vascular Ehlers-Danlos (Type IV) = COL3A1 mutation -> Spontaneous arterial dissection.",
    tags: ["Ehlers-Danlos", "COL3A1", "Dissection"]
  },

  // Chapter 15: Hematology & Hypercoagulability
  {
    id: "q-56",
    chapterId: 15,
    chapterTitle: "Hematologic Disorders",
    vignette: "A 45-year-old female with a history of recurrent DVT and 2 previous second-trimester miscarriages presents with an ischemic stroke. Lab testing shows positive Lupus Anticoagulant and Anti-cardiolipin IgG titers confirmed on two occasions 12 weeks apart.",
    question: "What is the diagnosis and recommended long-term secondary stroke prevention therapy?",
    options: [
      { id: "A", text: "Antiphospholipid Antibody Syndrome (APLS); Warfarin (target INR 2.0-3.0)" },
      { id: "B", text: "APLS; Aspirin 81 mg daily" },
      { id: "C", text: "Factor V Leiden; Apixaban 5 mg BID" },
      { id: "D", text: "Protein C deficiency; Clopidogrel 75 mg daily" },
      { id: "E", text: "Sneddon syndrome; DAPT for 1 year" }
    ],
    correctOptionId: "A",
    explanation: "Antiphospholipid Antibody Syndrome (APLS) requires 1 clinical criteria (arterial/venous thrombosis or pregnancy morbidity) + 1 lab criteria confirmed >12 weeks apart. Long-term treatment for stroke in confirmed APLS is Warfarin (INR 2.0-3.0).",
    keyTakeaway: "Confirmed APLS Stroke = Warfarin (INR 2.0-3.0).",
    tags: ["APLS", "Warfarin", "Thrombophilia"]
  },
  {
    id: "q-57",
    chapterId: 15,
    chapterTitle: "Hematologic Disorders",
    vignette: "A patient started on Warfarin monotherapy 3 days ago for a DVT develops extensive painful skin necrosis over his thighs and abdomen.",
    question: "What underlying thrombophilia predisposes to Warfarin-induced skin necrosis?",
    options: [
      { id: "A", text: "Protein C or Protein S Deficiency" },
      { id: "B", text: "Factor V Leiden" },
      { id: "C", text: "Antithrombin III deficiency" },
      { id: "D", text: "Sickle cell trait" },
      { id: "E", text: "Prothrombin G20210A" }
    ],
    correctOptionId: "A",
    explanation: "Protein C has a short half-life (6 hrs). When starting Warfarin without heparin bridging, Protein C levels drop rapidly before procoagulant factors II and X drop, causing a transient hypercoagulable state and microvascular thrombosis (Warfarin skin necrosis).",
    keyTakeaway: "Warfarin Skin Necrosis = Protein C/S deficiency due to rapid drop in Protein C levels.",
    tags: ["Protein C", "Warfarin Necrosis", "Thrombophilia"]
  },
  {
    id: "q-58",
    chapterId: 15,
    chapterTitle: "Hematologic Disorders",
    vignette: "A 60-year-old male receiving Unfractionated Heparin (UFH) for DVT prophylaxis develops a 50% drop in his platelet count on post-op day 6, accompanied by a new arterial thrombosis in his left leg.",
    question: "What antibody test confirms Type II Heparin-Induced Thrombocytopenia (HIT)?",
    options: [
      { id: "A", text: "Anti-Heparin/Platelet Factor 4 (PF4) antibodies" },
      { id: "B", text: "Anti-cardiolipin IgG" },
      { id: "C", text: "ANCA antibodies" },
      { id: "D", text: "Factor VIII activity" },
      { id: "E", text: "Coombs test" }
    ],
    correctOptionId: "A",
    explanation: "Type II HIT is an immune-mediated reaction caused by IgG antibodies against Heparin-PF4 complexes. Treatment: STOP all Heparin immediately and initiate a Direct Thrombin Inhibitor (Argatroban or Bivalirudin).",
    keyTakeaway: "HIT Type II = Anti-PF4 antibodies -> Stop Heparin immediately and start Argatroban.",
    tags: ["HIT", "PF4", "Argatroban"]
  },
  {
    id: "q-59",
    chapterId: 15,
    chapterTitle: "Hematologic Disorders",
    vignette: "A young child presents with severe microangiopathic hemolytic anemia, thrombocytopenia, acute renal failure, and minor lacunar strokes after an E. coli O157:H7 bloody diarrhea infection.",
    question: "What is the diagnosis?",
    options: [
      { id: "A", text: "Hemolytic Uremic Syndrome (HUS)" },
      { id: "B", text: "Thrombotic Thrombocytopenic Purpura (TTP)" },
      { id: "C", text: "Henoch-Schonlein Purpura" },
      { id: "D", text: "DIC" },
      { id: "E", text: "ITP" }
    ],
    correctOptionId: "A",
    explanation: "HUS (Hemolytic Uremic Syndrome) presents with microangiopathic hemolytic anemia, thrombocytopenia, and renal failure following Shiga toxin-producing E. coli infection.",
    keyTakeaway: "HUS = Shiga toxin E. coli -> Anemia + Thrombocytopenia + Renal failure + Neuro deficits.",
    tags: ["HUS", "E. coli", "Microangiopathy"]
  },
  {
    id: "q-60",
    chapterId: 15,
    chapterTitle: "Hematologic Disorders",
    vignette: "An adult female presents with fever, severe thrombocytopenia, microangiopathic hemolytic anemia, renal impairment, and fluctuating neurological symptoms (seizures and stroke). ADAMTS13 activity is < 10%.",
    question: "What is the first-line lifesaving therapy for TTP?",
    options: [
      { id: "A", text: "Plasma Exchange (PLEX) with FFP replacement" },
      { id: "B", text: "Platelet transfusion" },
      { id: "C", text: "IV tPA" },
      { id: "D", text: "High-dose Aspirin" },
      { id: "E", text: "Splenectomy" }
    ],
    correctOptionId: "A",
    explanation: "TTP (Thrombotic Thrombocytopenic Purpura) is caused by severe deficiency of ADAMTS13 (cleaves large vWF multimers). First-line lifesaving treatment is emergent Plasma Exchange (PLEX). Platelet transfusions are CONTRAINDICATED as they fuel thrombosis!",
    keyTakeaway: "TTP = ADAMTS13 deficiency -> Emergent Plasma Exchange (PLEX). Do NOT give platelets!",
    tags: ["TTP", "ADAMTS13", "Plasma Exchange"]
  },

  // Chapter 16: Neuroradiology
  {
    id: "q-61",
    chapterId: 16,
    chapterTitle: "Neuroradiology",
    vignette: "A non-contrast head CT scan shows a focal hyperdense right MCA segment ('Hyperdense Artery Sign'). What is the clinical significance of this finding?",
    question: "What does the Hyperdense Artery Sign represent?",
    options: [
      { id: "A", text: "Acute intraluminal thrombus (high specificity ~96% for acute occlusion)" },
      { id: "B", text: "Arterial calcification" },
      { id: "C", text: "Normal vascular variant" },
      { id: "D", text: "Contrast extravasation" },
      { id: "E", text: "Subarachnoid hemorrhage" }
    ],
    correctOptionId: "A",
    explanation: "The Hyperdense Artery Sign on non-contrast CT represents acute intraluminal thrombus/clot in the vessel (96% specific for acute occlusion).",
    keyTakeaway: "Hyperdense Artery Sign = 96% specific for acute intraluminal arterial thrombus.",
    tags: ["Hyperdense MCA", "CT Sign", "Neuroradiology"]
  },
  {
    id: "q-62",
    chapterId: 16,
    chapterTitle: "Neuroradiology",
    vignette: "Carotid duplex ultrasound in a patient with a prior TIA shows an ICA Peak Systolic Velocity (PSV) of 260 cm/s and an ICA/CCA PSV ratio of 4.5.",
    question: "According to NASCET ultrasound criteria, what degree of carotid stenosis does this represent?",
    options: [
      { id: "A", text: "Severe stenosis (≥ 70%)" },
      { id: "B", text: "Moderate stenosis (50-69%)" },
      { id: "C", text: "Mild stenosis (< 50%)" },
      { id: "D", text: "Normal carotid artery" },
      { id: "E", text: "Complete occlusion" }
    ],
    correctOptionId: "A",
    explanation: "NASCET Carotid US Criteria for severe stenosis (≥ 70%): ICA PSV > 230 cm/s, End Diastolic Velocity (EDV) > 100 cm/s, and ICA/CCA PSV ratio > 4.0.",
    keyTakeaway: "Carotid US PSV > 230 cm/s & ICA/CCA ratio > 4.0 = Severe ≥ 70% Stenosis.",
    tags: ["Carotid Ultrasound", "NASCET", "Stenosis Criteria"]
  },
  {
    id: "q-63",
    chapterId: 16,
    chapterTitle: "Neuroradiology",
    vignette: "An MRI brain scan demonstrates high signal intensity on DWI (restricted diffusion) in the left MCA territory. However, the corresponding ADC map signal is ISOINTENSE (pseudonormalized).",
    question: "What is the estimated age of this ischemic stroke?",
    options: [
      { id: "A", text: "Subacute stroke (7 to 21 days)" },
      { id: "B", text: "Hyperacute (0 to 6 hours)" },
      { id: "C", text: "Acute (6 to 24 hours)" },
      { id: "D", text: "Chronic (> 30 days)" },
      { id: "E", text: "Normal tissue" }
    ],
    correctOptionId: "A",
    explanation: "ADC pseudonormalization occurs at the subacute stage (7 to 21 days post-stroke), where ADC signal transitions from hypointense back to isointense while DWI remains bright (due to T2 shine-through).",
    keyTakeaway: "ADC pseudonormalization occurs at 7 to 21 days (subacute stroke).",
    tags: ["ADC", "DWI", "Stroke Evolution"]
  },
  {
    id: "q-64",
    chapterId: 16,
    chapterTitle: "Neuroradiology",
    vignette: "Which MRI sequence is most sensitive for detecting hemosiderin deposits, microhemorrhages, cavernous malformations, and venous thrombi?",
    question: "What is the most sensitive MRI sequence for microhemorrhages?",
    options: [
      { id: "A", text: "Susceptibility-Weighted Imaging (SWI) / Gradient Recalled Echo (GRE)" },
      { id: "B", text: "T1 Non-contrast" },
      { id: "C", text: "T2 FLAIR" },
      { id: "D", text: "Diffusion Weighted Imaging (DWI)" },
      { id: "E", text: "Proton Density" }
    ],
    correctOptionId: "A",
    explanation: "SWI (Susceptibility-Weighted Imaging) and T2* GRE are high-resolution 3D gradient echo sequences exquisitely sensitive to magnetic susceptibility artifacts caused by hemosiderin, iron, and blood breakdown products.",
    keyTakeaway: "SWI / GRE is the gold standard MRI sequence for microbleeds and hemosiderin.",
    tags: ["SWI", "Microbleeds", "MRI Sequences"]
  },

  // Chapter 17 & 18: Rehab & Cognitive
  {
    id: "q-65",
    chapterId: 18,
    chapterTitle: "Stroke Rehabilitation",
    vignette: "According to the Proportional Recovery Rule in stroke rehabilitation, what percentage of lost motor or language function do most stroke patients recover within the first 3 months?",
    question: "What percentage of lost function is recovered per the proportional recovery rule?",
    options: [
      { id: "A", text: "70% of lost motor/language function" },
      { id: "B", text: "25% of lost function" },
      { id: "C", text: "100% of function" },
      { id: "D", text: "50% of function" },
      { id: "E", text: "10% of function" }
    ],
    correctOptionId: "A",
    explanation: "The Proportional Recovery Rule states that most stroke patients will recover ~70% of their lost motor or language impairment within the first 3 months post-stroke.",
    keyTakeaway: "Proportional Recovery Rule: Patients recover ~70% of lost function in first 3 months.",
    tags: ["Rehabilitation", "Proportional Recovery", "Motor Function"]
  },
  {
    id: "q-66",
    chapterId: 18,
    chapterTitle: "Stroke Rehabilitation",
    vignette: "A stroke patient with foot drop during the swing phase of gait is evaluated for an orthotic device versus a functional electrical stimulation device.",
    question: "Which nerve is stimulated by a Foot Drop Stimulator (FDS) to dorsiflex the foot?",
    options: [
      { id: "A", text: "Common Peroneal (Fibular) Nerve" },
      { id: "B", text: "Tibial Nerve" },
      { id: "C", text: "Femoral Nerve" },
      { id: "D", text: "Sciatic Nerve" },
      { id: "E", text: "Obturator Nerve" }
    ],
    correctOptionId: "A",
    explanation: "Foot Drop Stimulators (FDS) use functional electrical stimulation to activate the Common Peroneal Nerve, triggering anterior tibialis contraction and ankle dorsiflexion during the swing phase.",
    keyTakeaway: "FDS stimulates the Common Peroneal Nerve for foot drop dorsiflexion.",
    tags: ["Foot Drop", "Peroneal Nerve", "Rehabilitation"]
  },

  // Chapter 19: Pharmacology
  {
    id: "q-67",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "A patient with hypertension and Type II Diabetes is started on an ACE Inhibitor (Lisinopril) for secondary stroke prevention. What is the mechanism of action of ACE inhibitors on efferent renal arterioles?",
    question: "How do ACE inhibitors affect efferent arterioles and GFR?",
    options: [
      { id: "A", text: "Inhibits Angiotensin II -> Vasodilation of efferent arterioles -> Decreases GFR and reduces intraglomerular pressure" },
      { id: "B", text: "Constricts efferent arterioles" },
      { id: "C", text: "Increases aldosterone secretion" },
      { id: "D", text: "Directly blocks beta-1 receptors" },
      { id: "E", text: "Stimulates renin release" }
    ],
    correctOptionId: "A",
    explanation: "ACE inhibitors block conversion of Angiotensin I to II, causing vasodilation of efferent renal arterioles. This reduces intraglomerular hydrostatic pressure, slowing diabetic nephropathy progression.",
    keyTakeaway: "ACE-I vasodilates efferent arterioles, reducing intraglomerular pressure and proteinuria.",
    tags: ["ACE Inhibitor", "Renal", "Pharmacology"]
  },
  {
    id: "q-68",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "A patient taking High-Dose Statin therapy (Atorvastatin 80 mg daily) develops severe muscle aches. Laboratory testing reveals a Serum Creatine Kinase (CK) level of 12,000 U/L (> 10x upper limit of normal).",
    question: "What is the immediate management strategy?",
    options: [
      { id: "A", text: "Discontinue Statin immediately, check renal function and urine myoglobin for Rhabdomyolysis" },
      { id: "B", text: "Continue statin at same dose" },
      { id: "C", text: "Switch to Simvastatin 80 mg" },
      { id: "D", text: "Add Fenofibrate" },
      { id: "E", text: "Give IV tPA" }
    ],
    correctOptionId: "A",
    explanation: "If CK is > 10x Upper Limit of Normal (ULN), suspect statin-induced rhabdomyolysis! Stop the statin immediately, hydrate, and evaluate renal function. (Note: Simvastatin 80mg has highest myopathy risk and should be avoided).",
    keyTakeaway: "CK > 10x ULN on statin = Suspect Rhabdomyolysis -> Stop statin immediately.",
    tags: ["Statin Myopathy", "CK", "Rhabdomyolysis"]
  },

  // Chapter 20 & 21: Systems & Ethics
  {
    id: "q-69",
    chapterId: 21,
    chapterTitle: "Perioperative Management",
    vignette: "A 68-year-old male with a mechanical mitral heart valve on Warfarin (baseline INR 3.0) is scheduled for elective major hip arthroplasty (high bleeding risk procedure).",
    question: "What is the correct perioperative Warfarin hold and bridging protocol?",
    options: [
      { id: "A", text: "Stop Warfarin 5 days prior; bridge with therapeutic LMWH once INR < 2.0; stop LMWH 24h prior to surgery" },
      { id: "B", text: "Do not stop Warfarin" },
      { id: "C", text: "Stop Warfarin 1 day prior without bridging" },
      { id: "D", text: "Give oral Vitamin K 10mg day before surgery" },
      { id: "E", text: "Switch to Aspirin 325 mg day of surgery" }
    ],
    correctOptionId: "A",
    explanation: "High thromboembolic risk patients (mechanical mitral valve) undergoing high-bleeding-risk surgery require Warfarin hold 5 days prior, therapeutic LMWH bridging once INR < 2.0, holding LMWH 24 hours pre-op, and post-op LMWH+Warfarin re-bridging.",
    keyTakeaway: "Mechanical Mitral Valve -> Stop Warfarin 5 days pre-op, bridge with LMWH, hold LMWH 24h pre-op.",
    tags: ["Warfarin Bridging", "Perioperative", "Mechanical Valve"]
  },
  {
    id: "q-70",
    chapterId: 21,
    chapterTitle: "Ethics",
    vignette: "An acute stroke patient lacking capacity has a proxy decision-maker who requests treatments that offer no clinical benefit and cause severe pain.",
    question: "Which ethical principle obligates the physician to avoid treatments that cause net harm?",
    options: [
      { id: "A", text: "Non-maleficence (Do no harm)" },
      { id: "B", text: "Beneficence" },
      { id: "C", text: "Autonomy" },
      { id: "D", text: "Justice" },
      { id: "E", text: "Paternalism" }
    ],
    correctOptionId: "A",
    explanation: "Non-maleficence ('Primum non nocere' - First, do no harm) obligates physicians to refrain from providing ineffective treatments that inflict net pain or suffering.",
    keyTakeaway: "Non-maleficence = First, do no harm.",
    tags: ["Ethics", "Non-maleficence", "Bioethics"]
  }
];

questionsData.push(...questionsPart3);

// Additional Questions (q-71 to q-100)
const questionsPart4: PracticeQuestion[] = [
  {
    id: "q-71",
    chapterId: 3,
    chapterTitle: "Vascular Neuroanatomy",
    vignette: "A patient presents with contralateral lower extremity weakness and sensory loss greater than arm/face weakness, accompanied by urinary incontinence and abulia.",
    question: "Which arterial territory is affected?",
    options: [
      { id: "A", text: "Anterior Cerebral Artery (ACA)" },
      { id: "B", text: "Middle Cerebral Artery (MCA)" },
      { id: "C", text: "Posterior Cerebral Artery (PCA)" },
      { id: "D", text: "Anterior Choroidal Artery" },
      { id: "E", text: "Posterior Inferior Cerebellar Artery (PICA)" }
    ],
    correctOptionId: "A",
    explanation: "ACA territory stroke characteristically causes contralateral leg > arm/face weakness and sensory loss, voluntary micturition loss (incontinence), and abulia/apathy (frontal parasagittal cortex).",
    keyTakeaway: "ACA stroke = Leg > Arm/Face weakness + Urinary incontinence + Abulia.",
    tags: ["ACA Stroke", "Localization", "Neuroanatomy"]
  },
  {
    id: "q-72",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A stroke patient is unable to recognize visually presented objects, despite having intact visual acuity and visual fields. Lesion localizes to the occipitotemporal cortex.",
    question: "What visual disorder is present?",
    options: [
      { id: "A", text: "Visual Agnosia" },
      { id: "B", text: "Prosopagnosia" },
      { id: "C", text: "Achromatopsia" },
      { id: "D", text: "Anton Syndrome" },
      { id: "E", text: "Balint Syndrome" }
    ],
    correctOptionId: "A",
    explanation: "Visual Agnosia is the inability to recognize visually presented objects despite intact vision. Prosopagnosia is specifically face recognition loss; Achromatopsia is color perception loss.",
    keyTakeaway: "Visual Agnosia = Inability to recognize objects visually with intact sight.",
    tags: ["Visual Agnosia", "Neuro-ophthalmology", "Occipitotemporal"]
  },
  {
    id: "q-73",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A patient presents with contralateral hemiparesis and ipsilateral tongue weakness with deviation of the tongue TOWARD the side of the lesion.",
    question: "What syndrome is present?",
    options: [
      { id: "A", text: "Medial Medullary Syndrome" },
      { id: "B", text: "Lateral Medullary Syndrome" },
      { id: "C", text: "Weber Syndrome" },
      { id: "D", text: "Millard-Gubler Syndrome" },
      { id: "E", text: "Wallenberg Syndrome" }
    ],
    correctOptionId: "A",
    explanation: "Medial Medullary Syndrome (ASA or VA occlusion) affects the pyramidal tract (CTL hemiparesis), medial lemniscus (CTL vibration/proprioception loss), and hypoglossal nerve CN XII (IPS tongue weakness/deviation).",
    keyTakeaway: "Medial Medullary Syndrome = CTL hemiparesis + IPS tongue weakness (CN XII).",
    tags: ["Medial Medullary", "CN XII", "Brainstem"]
  },
  {
    id: "q-74",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A patient exhibits bilateral ventral pontine infarction causing complete paralysis of all four limbs and lower cranial nerves, with preserved vertical eye movements, blinking, and full consciousness.",
    question: "What is this syndrome called?",
    options: [
      { id: "A", text: "Locked-in Syndrome" },
      { id: "B", text: "Top-of-basilar Syndrome" },
      { id: "C", text: "Akinetic Mutism" },
      { id: "D", text: "Coma" },
      { id: "E", text: "Persistent Vegetative State" }
    ],
    correctOptionId: "A",
    explanation: "Locked-in Syndrome is caused by bilateral ventral pontine infarction (basilar artery occlusion). Corticospinal and corticobulbar tracts are transected, leaving quadriplegia and aphonia, but tegmental reticular activating system and vertical gaze (midbrain CN III/IV) remain intact.",
    keyTakeaway: "Locked-in Syndrome = Bilateral ventral pontine stroke -> Quadriplegia with preserved vertical gaze & consciousness.",
    tags: ["Locked-in", "Pons", "Basilar Artery"]
  },
  {
    id: "q-75",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A patient with a posterior PCA infarction claims he can see perfectly, despite total cortical blindness on exam (he walks into walls and cannot blink to threat).",
    question: "What visual anosognosia syndrome is present?",
    options: [
      { id: "A", text: "Anton Syndrome" },
      { id: "B", text: "Balint Syndrome" },
      { id: "C", text: "Gerstmann Syndrome" },
      { id: "D", text: "Charles Bonnet Syndrome" },
      { id: "E", text: "Horner Syndrome" }
    ],
    correctOptionId: "A",
    explanation: "Anton Syndrome (visual anosognosia) occurs with bilateral primary visual cortex (occipital) lesions. Patients are cortical blind but deny their visual deficit, often confabulating visual descriptions.",
    keyTakeaway: "Anton Syndrome = Cortical blindness with denial of deficit (anosognosia).",
    tags: ["Anton Syndrome", "Cortical Blindness", "Anosognosia"]
  },
  {
    id: "q-76",
    chapterId: 4,
    chapterTitle: "Stroke Syndromes",
    vignette: "A patient with bilateral parietal-occipital watershed strokes presents with simultagnosia (inability to perceive more than one object at a time), optic ataxia (impaired visual reaching), and ocular apraxia (inability to voluntarily direct gaze).",
    question: "What visual triad defines Balint Syndrome?",
    options: [
      { id: "A", text: "Simultagnosia + Optic Ataxia + Ocular Apraxia" },
      { id: "B", text: "Agraphia + Acalculia + Finger Agnosia" },
      { id: "C", text: "Ptosis + Miosis + Anhidrosis" },
      { id: "D", text: "Hemiplegia + Hemisensory loss + Hemianopia" },
      { id: "E", text: "Vertigo + Ataxia + Dysphagia" }
    ],
    correctOptionId: "A",
    explanation: "Balint Syndrome is caused by bilateral parieto-occipital cortical lesions. Triad: Simultagnosia, Optic Ataxia, and Ocular Apraxia.",
    keyTakeaway: "Balint Syndrome Triad = Simultagnosia + Optic Ataxia + Ocular Apraxia (Bilateral Parieto-Occipital).",
    tags: ["Balint Syndrome", "Simultagnosia", "Parieto-Occipital"]
  },
  {
    id: "q-77",
    chapterId: 5,
    chapterTitle: "Epidemiology & Risk Factors",
    vignette: "According to the AHA/ASA guidelines for secondary stroke prevention, what is the blood pressure target for patients with prior TIA or stroke?",
    question: "What is the AHA blood pressure target post-stroke?",
    options: [
      { id: "A", text: "< 130 / 80 mmHg" },
      { id: "B", text: "< 140 / 90 mmHg" },
      { id: "C", text: "< 150 / 90 mmHg" },
      { id: "D", text: "< 120 / 70 mmHg" },
      { id: "E", text: "< 160 / 100 mmHg" }
    ],
    correctOptionId: "A",
    explanation: "Current AHA/ASA secondary stroke prevention guidelines recommend a blood pressure goal of < 130/80 mmHg for patients with prior TIA or ischemic stroke.",
    keyTakeaway: "AHA BP Goal post-stroke/TIA = < 130/80 mmHg.",
    tags: ["BP Target", "AHA Guidelines", "Secondary Prevention"]
  },
  {
    id: "q-78",
    chapterId: 6,
    chapterTitle: "Stroke Pathophysiology",
    vignette: "Following an ischemic stroke, MRI diffusion tensor imaging shows hypointensity on T2 along the corticospinal tract at 2 weeks, progressing to hyperintensity and volume loss at months.",
    question: "What anterograde axonal degeneration process distal to the injury site is described?",
    options: [
      { id: "A", text: "Wallerian Degeneration" },
      { id: "B", text: "Retrograde Chromatolysis" },
      { id: "C", text: "Cytotoxic Edema" },
      { id: "D", text: "Diaschisis" },
      { id: "E", text: "Spreading Depression" }
    ],
    correctOptionId: "A",
    explanation: "Wallerian Degeneration is anterograde degeneration of axons and myelin sheaths distal to neuronal injury. Tracked along corticospinal tracts on DTI/MRI.",
    keyTakeaway: "Wallerian Degeneration = Anterograde axonal breakdown distal to stroke site.",
    tags: ["Wallerian", "Axonal Degeneration", "Pathophysiology"]
  },
  {
    id: "q-79",
    chapterId: 7,
    chapterTitle: "Classification of Stroke",
    vignette: "A 4-year-old child presents with recurrent TIAs and seizures. Cerebral angiogram demonstrates progressive bilateral supraclinoid ICA stenosis with a hazy 'puff of smoke' collateral network.",
    question: "What gene mutation is strongly associated with Moyamoya Disease?",
    options: [
      { id: "A", text: "RNF213 mutation" },
      { id: "B", text: "NOTCH3 mutation" },
      { id: "C", text: "HTRA1 mutation" },
      { id: "D", text: "COL3A1 mutation" },
      { id: "E", text: "FBN1 mutation" }
    ],
    correctOptionId: "A",
    explanation: "Moyamoya Disease is associated with the RNF213 gene mutation (especially in East Asian populations). Angiogram shows supraclinoid ICA stenosis with 'puff of smoke' collaterals.",
    keyTakeaway: "Moyamoya = RNF213 mutation -> Puff of smoke supraclinoid ICA collateral network.",
    tags: ["Moyamoya", "RNF213", "Puff of Smoke"]
  },
  {
    id: "q-80",
    chapterId: 7,
    chapterTitle: "Classification of Stroke",
    vignette: "A 42-year-old female presents with hypertension and an incidental finding of medial hyperplasia with alternating aneurysmal outpouchings ('string of beads') in the middle third of the extracranial internal carotid artery.",
    question: "What is the diagnosis?",
    options: [
      { id: "A", text: "Fibromuscular Dysplasia (FMD Type 1)" },
      { id: "B", text: "RCVS" },
      { id: "C", text: "Carotid Dissection" },
      { id: "D", text: "Atherosclerosis" },
      { id: "E", text: "PACNS" }
    ],
    correctOptionId: "A",
    explanation: "FMD Type 1 (80% of cases) is characterized by medial hyperplasia causing the classic 'string of beads' angiographic appearance in the middle 1/3 of the extracranial ICA in women.",
    keyTakeaway: "FMD Type 1 = Medial hyperplasia -> String of beads in middle 1/3 extracranial ICA.",
    tags: ["FMD", "String of Beads", "Carotid"]
  },
  {
    id: "q-81",
    chapterId: 8,
    chapterTitle: "Thrombolytic Therapy",
    vignette: "What is the recommended weight-based dose and maximum total dose for IV tPA (Alteplase) in acute ischemic stroke?",
    question: "What is the IV tPA dosing protocol?",
    options: [
      { id: "A", text: "0.9 mg/kg (max 90 mg); 10% bolus over 1 min, 90% infusion over 60 min" },
      { id: "B", text: "1.0 mg/kg (max 100 mg) single bolus" },
      { id: "C", text: "0.25 mg/kg (max 25 mg) single bolus" },
      { id: "D", text: "5 mg IV bolus followed by 50 mg infusion" },
      { id: "E", text: "0.6 mg/kg (max 60 mg) total infusion" }
    ],
    correctOptionId: "A",
    explanation: "Standard IV Alteplase (tPA) dosing: 0.9 mg/kg (maximum 90 mg). 10% given as initial IV bolus over 1 minute, remaining 90% infused over 60 minutes.",
    keyTakeaway: "IV tPA Dose = 0.9 mg/kg (Max 90mg); 10% bolus, 90% 1-hour infusion.",
    tags: ["tPA Dosing", "Alteplase", "Acute Protocol"]
  },
  {
    id: "q-82",
    chapterId: 8,
    chapterTitle: "Thrombolytic Therapy",
    vignette: "What is the weight-based dose for Tenecteplase (TNK) in acute ischemic stroke?",
    question: "What is the Tenecteplase (TNK) single bolus dose?",
    options: [
      { id: "A", text: "0.25 mg/kg single IV bolus (max 25 mg)" },
      { id: "B", text: "0.9 mg/kg" },
      { id: "C", text: "0.5 mg/kg" },
      { id: "D", text: "1.0 mg/kg" },
      { id: "E", text: "5 mg fixed dose" }
    ],
    correctOptionId: "A",
    explanation: "Tenecteplase (TNK) is administered as a single IV bolus of 0.25 mg/kg (max 25 mg). TNK has higher fibrin specificity and longer half-life than tPA.",
    keyTakeaway: "Tenecteplase (TNK) = 0.25 mg/kg single IV bolus (max 25mg).",
    tags: ["Tenecteplase", "TNK", "Thrombolytic"]
  },
  {
    id: "q-83",
    chapterId: 8,
    chapterTitle: "Carotid Stenosis Guidelines",
    vignette: "According to NASCET guidelines, what is the perioperative morbidity and mortality rate threshold required for a surgeon/hospital to perform Carotid Endarterectomy (CEA)?",
    question: "What is the NASCET perioperative risk threshold for CEA?",
    options: [
      { id: "A", text: "< 6% perioperative morbidity and mortality" },
      { id: "B", text: "< 10%" },
      { id: "C", text: "< 15%" },
      { id: "D", text: "< 3%" },
      { id: "E", text: "< 1%" }
    ],
    correctOptionId: "A",
    explanation: "NASCET criteria state that CEA for symptomatic carotid stenosis is indicated only if the surgical team's perioperative morbidity and mortality rate is < 6%.",
    keyTakeaway: "CEA perioperative morbidity & mortality MUST be < 6% per NASCET guidelines.",
    tags: ["NASCET", "CEA", "Carotid Guidelines"]
  },
  {
    id: "q-84",
    chapterId: 9,
    chapterTitle: "Clinical Cardiology & Stroke",
    vignette: "The ARISTOTLE trial evaluated Apixaban versus Warfarin in patients with non-valvular atrial fibrillation.",
    question: "What were the primary findings of the ARISTOTLE trial?",
    options: [
      { id: "A", text: "Apixaban was SUPERIOR to Warfarin in stroke prevention, caused less major bleeding, and reduced mortality" },
      { id: "B", text: "Warfarin was superior to Apixaban" },
      { id: "C", text: "Apixaban caused more intracranial bleeding" },
      { id: "D", text: "Apixaban required weekly INR monitoring" },
      { id: "E", text: "Aspirin was equal to Apixaban" }
    ],
    correctOptionId: "A",
    explanation: "ARISTOTLE proved Apixaban 5 mg BID was SUPERIOR to Warfarin for stroke/systemic embolism prevention, with 31% less major bleeding and reduced all-cause mortality.",
    keyTakeaway: "ARISTOTLE: Apixaban > Warfarin in stroke prevention, mortality, & lower bleeding.",
    tags: ["ARISTOTLE", "Apixaban", "AFib"]
  },
  {
    id: "q-85",
    chapterId: 9,
    chapterTitle: "Clinical Cardiology & Stroke",
    vignette: "A 48-year-old male with cryptogenic stroke and a patent foramen ovale (PFO) is evaluated using the RoPE (Risk of Paradoxical Embolism) score.",
    question: "A RoPE score of 9 to 10 points indicates what probability of PFO causality?",
    options: [
      { id: "A", text: "99% probability that the PFO is pathogenic" },
      { id: "B", text: "50% probability" },
      { id: "C", text: "< 10% probability" },
      { id: "D", text: "Zero probability" },
      { id: "E", text: "100% incidental" }
    ],
    correctOptionId: "A",
    explanation: "High RoPE scores (9-10) indicate a 99% probability that the PFO is pathogenic (causal) rather than an incidental finding in a cryptogenic stroke patient.",
    keyTakeaway: "High RoPE score (9-10) = 99% PFO stroke causality.",
    tags: ["RoPE Score", "PFO", "Cryptogenic Stroke"]
  },
  {
    id: "q-86",
    chapterId: 11,
    chapterTitle: "Special Populations",
    vignette: "A neonate (12 days old) presents with focal motor seizures. Brain MRI shows an acute left MCA ischemic stroke.",
    question: "What is the single most common presentation of neonatal arterial ischemic stroke?",
    options: [
      { id: "A", text: "Focal Seizures" },
      { id: "B", text: "Severe hemiparesis" },
      { id: "C", text: "Aphasia" },
      { id: "D", text: "Coma" },
      { id: "E", text: "Decerebrate posturing" }
    ],
    correctOptionId: "A",
    explanation: "Seizures are the single most common clinical presentation of neonatal stroke (0-28 days of life). Left MCA territory is most commonly involved.",
    keyTakeaway: "Neonatal stroke presents most commonly with SEIZURES.",
    tags: ["Neonatal Stroke", "Seizures", "Pediatrics"]
  },
  {
    id: "q-87",
    chapterId: 12,
    chapterTitle: "Complications of Stroke",
    vignette: "A 52-year-old patient with a malignant right MCA infarction develops brain herniation. The DESTINY, DECIMAL, and HAMLET trials evaluated decompressive hemicraniectomy (DHC) in malignant MCA stroke.",
    question: "What did pooled trial data show for DHC within 48 hours in patients < 60 years?",
    options: [
      { id: "A", text: "DHC reduced 1-year mortality by 50% (Absolute Risk Reduction ~50%)" },
      { id: "B", text: "DHC had no benefit" },
      { id: "C", text: "DHC increased mortality" },
      { id: "D", text: "Medical therapy with Mannitol was superior" },
      { id: "E", text: "DHC is indicated only after day 7" }
    ],
    correctOptionId: "A",
    explanation: "Decompressive Hemicraniectomy (DHC) performed within 48 hours for malignant MCA stroke in patients < 60 years dramatically reduces 1-year mortality from 71% down to 22% (ARR ~ 50%, NNT = 2).",
    keyTakeaway: "Decompressive Hemicraniectomy for malignant MCA stroke < 60yo within 48h reduces mortality by 50%.",
    tags: ["DHC", "Malignant MCA", "Hemicraniectomy"]
  },
  {
    id: "q-88",
    chapterId: 13,
    chapterTitle: "Intracranial Hemorrhage",
    vignette: "A 68-year-old male presents with a hypertensive putaminal ICH. Non-contrast CT shows a hematoma measuring 5.0 cm x 4.0 cm on the slice with 6 slices of 1 cm thickness showing blood.",
    question: "Using the ABC / 2 formula, what is the estimated ICH volume?",
    options: [
      { id: "A", text: "60 mL (cc)" },
      { id: "B", text: "30 mL" },
      { id: "C", text: "120 mL" },
      { id: "D", text: "15 mL" },
      { id: "E", text: "90 mL" }
    ],
    correctOptionId: "A",
    explanation: "ABC / 2 calculation: A = 5.0 cm, B = 4.0 cm, C = 6.0 cm (1cm x 6 slices). Volume = (5 x 4 x 6) / 2 = 120 / 2 = 60 mL.",
    keyTakeaway: "ABC/2 Formula: (5 x 4 x 6) / 2 = 60 mL.",
    tags: ["ABC/2", "ICH Volume", "Calculation"]
  },
  {
    id: "q-89",
    chapterId: 13,
    chapterTitle: "Intracranial Hemorrhage",
    vignette: "A CTA head in an acute ICH patient reveals a focal spot of contrast enhancement within the hematoma measuring > 120 Hounsfield Units ('CTA Spot Sign').",
    question: "What does the CTA Spot Sign predict?",
    options: [
      { id: "A", text: "High risk of rapid hematoma expansion within 24 hours" },
      { id: "B", text: "Zero risk of expansion" },
      { id: "C", text: "Complete resolution of bleed" },
      { id: "D", text: "Venous thrombosis" },
      { id: "E", text: "Ischemic penumbra" }
    ],
    correctOptionId: "A",
    explanation: "The CTA Spot Sign (contrast extravasation into hematoma) is a powerful independent predictor of rapid hematoma expansion and clinical deterioration within the first 24 hours.",
    keyTakeaway: "CTA Spot Sign = Active contrast extravasation -> Predicts rapid hematoma expansion!",
    tags: ["CTA Spot Sign", "ICH Expansion", "Neuroradiology"]
  },
  {
    id: "q-90",
    chapterId: 13,
    chapterTitle: "Intracranial Hemorrhage",
    vignette: "The INTERACT-2 and ATACH-2 trials evaluated acute SBP lowering in spontaneous ICH.",
    question: "What is the recommended SBP target range in acute ICH with presenting SBP 150-220 mmHg?",
    options: [
      { id: "A", text: "Lower SBP rapidly to 140 mmHg (range 130-150 mmHg)" },
      { id: "B", text: "Lower SBP to < 100 mmHg" },
      { id: "C", text: "Allow SBP up to 220 mmHg" },
      { id: "D", text: "Do not lower blood pressure" },
      { id: "E", text: "Maintain SBP > 180 mmHg" }
    ],
    correctOptionId: "A",
    explanation: "Rapid SBP lowering to 140 mmHg (range 130-150) is safe and improves functional recovery. However, ATACH-2 showed dropping SBP < 130 mmHg caused increased renal adverse events.",
    keyTakeaway: "Acute ICH BP Target = Rapidly lower SBP to 140 mmHg (avoid < 130 mmHg).",
    tags: ["INTERACT-2", "ATACH-2", "ICH Blood Pressure"]
  },
  {
    id: "q-91",
    chapterId: 14,
    chapterTitle: "Arteriovenous Malformations",
    vignette: "The ARUBA trial evaluated intervention (surgery, embolization, or radiosurgery) versus medical management in patients with UNRUPTURED brain AVMs.",
    question: "What were the primary results of the ARUBA trial?",
    options: [
      { id: "A", text: "Medical management WAS SUPERIOR to interventional therapy in unruptured AVMs (lower risk of death or stroke)" },
      { id: "B", text: "Interventional therapy was superior" },
      { id: "C", text: "Embolization eliminated all risk" },
      { id: "D", text: "Radiosurgery was 100% curative" },
      { id: "E", text: "Surgery had zero complications" }
    ],
    correctOptionId: "A",
    explanation: "The ARUBA trial proved that in UNRUPTURED brain AVMs, medical management resulted in a significantly lower risk of stroke or death compared to interventional therapy (10.1% medical vs 30.7% intervention).",
    keyTakeaway: "ARUBA Trial: Medical management > Intervention for UNRUPTURED brain AVMs.",
    tags: ["ARUBA", "AVM", "Unruptured AVM"]
  },
  {
    id: "q-92",
    chapterId: 15,
    chapterTitle: "Hematology & Sickle Cell",
    vignette: "The STOP II trial evaluated stopping chronic blood transfusions in sickle cell children whose TCD velocities had normalized to < 170 cm/s.",
    question: "What happened when chronic transfusions were discontinued in STOP II?",
    options: [
      { id: "A", text: "High rate of TCD reversal and recurrent stroke; transfusions must be continued long-term" },
      { id: "B", text: "No strokes occurred" },
      { id: "C", text: "Hydroxyurea completely prevented stroke" },
      { id: "D", text: "Iron overload resolved without stroke" },
      { id: "E", text: "TCD remained normal forever" }
    ],
    correctOptionId: "A",
    explanation: "The STOP II trial showed that stopping chronic exchange transfusions led to rapid reversion to high TCD velocities and recurrent stroke. Transfusions must be maintained long-term.",
    keyTakeaway: "STOP II: Discontinuing chronic transfusions in pediatric Sickle Cell leads to high stroke recurrence!",
    tags: ["STOP II", "Sickle Cell", "Transfusion"]
  },
  {
    id: "q-93",
    chapterId: 16,
    chapterTitle: "Neuroradiology",
    vignette: "On non-contrast CT head, what is the density of acute intracellular blood hematoma in Hounsfield Units (HU)?",
    question: "What is the Hounsfield Unit density of acute blood?",
    options: [
      { id: "A", text: "40 to 100 HU" },
      { id: "B", text: "0 HU" },
      { id: "C", text: "-100 HU" },
      { id: "D", text: "15 HU" },
      { id: "E", text: "1000 HU" }
    ],
    correctOptionId: "A",
    explanation: "Acute blood measures +40 to +100 HU on CT head. Water is 0 HU, CSF is 15 HU, Fat is -100 to -50 HU, Air is -1000 HU, and Bone is +400 to +3000 HU.",
    keyTakeaway: "Acute Blood on CT = 40 to 100 Hounsfield Units (HU).",
    tags: ["Hounsfield Units", "CT Density", "Blood"]
  },
  {
    id: "q-94",
    chapterId: 17,
    chapterTitle: "Vascular Cognitive Disorders",
    vignette: "A 75-year-old male exhibits step-wise cognitive deterioration, with each cognitive decline directly associated with a discrete clinical stroke event.",
    question: "What subtype of Vascular Dementia is present?",
    options: [
      { id: "A", text: "Multi-Infarct Dementia" },
      { id: "B", text: "Cerebral Small Vessel Disease (CSVD)" },
      { id: "C", text: "CADASIL" },
      { id: "D", text: "Primary Progressive Aphasia" },
      { id: "E", text: "Alzheimer's Disease" }
    ],
    correctOptionId: "A",
    explanation: "Multi-infarct dementia causes a classic 'stepwise' cognitive decline, where each drop in cognitive function corresponds to a discrete large or small vessel clinical stroke.",
    keyTakeaway: "Multi-Infarct Dementia = Stepwise cognitive decline tied to clinical stroke events.",
    tags: ["Multi-Infarct", "Vascular Dementia", "Stepwise"]
  },
  {
    id: "q-95",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "A patient with high vascular risk and peripheral arterial disease (PAD) is prescribed an antiplatelet agent. Subgroup analysis of the CAPRIE trial evaluated Clopidogrel vs Aspirin.",
    question: "In which patient subgroup did Clopidogrel show the strongest reduction in vascular events over Aspirin in CAPRIE?",
    options: [
      { id: "A", text: "Peripheral Arterial Disease (PAD) subgroup" },
      { id: "B", text: "Stroke subgroup" },
      { id: "C", text: "MI subgroup" },
      { id: "D", text: "Atrial fibrillation subgroup" },
      { id: "E", text: "Heart failure subgroup" }
    ],
    correctOptionId: "A",
    explanation: "The CAPRIE trial showed overall modest benefit of Clopidogrel over Aspirin, but subgroup analysis showed the benefit was overwhelmingly driven by the Peripheral Arterial Disease (PAD) cohort.",
    keyTakeaway: "CAPRIE: Clopidogrel benefit over Aspirin was strongest in PAD patients.",
    tags: ["CAPRIE", "Clopidogrel", "PAD"]
  },
  {
    id: "q-96",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "A patient taking Warfarin presents with an INR of 7.5 and NO signs of active bleeding.",
    question: "According to CHEST/AHA guidelines, how should elevated INR 4.5 to 10 WITHOUT bleeding be managed?",
    options: [
      { id: "A", text: "Omit 1-2 doses of Warfarin, monitor INR, Vitamin K is NOT routine" },
      { id: "B", text: "Give IV 10mg Vitamin K" },
      { id: "C", text: "Give 4-Factor PCC" },
      { id: "D", text: "Transfuse FFP" },
      { id: "E", text: "Continue same Warfarin dose" }
    ],
    correctOptionId: "A",
    explanation: "For INR 4.5 to 10 WITHOUT bleeding: Omit 1-2 doses of Warfarin, monitor INR, and resume at lower dose. Routine Vitamin K is NOT recommended unless high bleeding risk is present.",
    keyTakeaway: "INR 4.5 - 10 WITHOUT bleeding -> Omit 1-2 doses of Warfarin; Vitamin K is NOT necessary.",
    tags: ["INR Dosing", "Warfarin", "CHEST Guidelines"]
  },
  {
    id: "q-97",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "If INR is > 10 WITHOUT active bleeding, what is the recommended Warfarin management?",
    question: "How should INR > 10 WITHOUT bleeding be managed?",
    options: [
      { id: "A", text: "Hold Warfarin and give Oral Vitamin K (2.5 to 5 mg)" },
      { id: "B", text: "Give IV tPA" },
      { id: "C", text: "Give 4-Factor PCC" },
      { id: "D", text: "Do not hold Warfarin" },
      { id: "E", text: "Emergency surgery" }
    ],
    correctOptionId: "A",
    explanation: "For INR > 10 WITHOUT bleeding: Hold Warfarin and administer oral Vitamin K (2.5 to 5 mg).",
    keyTakeaway: "INR > 10 WITHOUT bleeding -> Hold Warfarin + Oral Vitamin K 2.5-5mg.",
    tags: ["INR > 10", "Vitamin K", "Warfarin Protocol"]
  },
  {
    id: "q-98",
    chapterId: 19,
    chapterTitle: "Pharmacology",
    vignette: "The SPARCL trial evaluated high-dose Atorvastatin 80 mg daily in recent stroke/TIA patients without known CAD.",
    question: "What were the primary results of the SPARCL trial?",
    options: [
      { id: "A", text: "Atorvastatin 80 mg significantly reduced overall stroke recurrence (16% RRR, ARR 2.2%)" },
      { id: "B", text: "Statin therapy had no benefit" },
      { id: "C", text: "Statin therapy increased ischemic stroke" },
      { id: "D", text: "Placebo was superior" },
      { id: "E", text: "LDL target should be > 160 mg/dL" }
    ],
    correctOptionId: "A",
    explanation: "SPARCL trial proved Atorvastatin 80 mg daily reduced 5-year stroke risk (11.2% vs 13.1%, ARR 2.2%, p=0.03) in recent TIA/stroke patients with LDL 100-190 mg/dL.",
    keyTakeaway: "SPARCL Trial: High-intensity Atorvastatin 80mg reduces recurrent stroke.",
    tags: ["SPARCL", "Atorvastatin", "Secondary Prevention"]
  },
  {
    id: "q-99",
    chapterId: 20,
    chapterTitle: "Stroke Systems of Care",
    vignette: "A Comprehensive Stroke Center (CSC) certification requires which of the following 24/7 capabilities?",
    question: "What capability distinguishes a CSC?",
    options: [
      { id: "A", text: "24/7 Endovascular Thrombectomy, Neuro-IR, dedicated Neuro-ICU, and neurosurgical clipping/coiling" },
      { id: "B", text: "Fingerstick glucose testing only" },
      { id: "C", text: "Transfer agreements only" },
      { id: "D", text: "Outpatient rehab only" },
      { id: "E", text: "Telemetry nursing only" }
    ],
    correctOptionId: "A",
    explanation: "Comprehensive Stroke Centers (CSC) provide 24/7 advanced neuro-interventional endovascular thrombectomy, neurosurgical clipping/coiling, dedicated Neuro-ICU beds, and neuro-critical care expertise.",
    keyTakeaway: "CSC = Highest certification with 24/7 Neuro-IR, EVT, Neuro-ICU, and Neurosurgery.",
    tags: ["CSC", "Stroke Center", "Certification"]
  },
  {
    id: "q-100",
    chapterId: 21,
    chapterTitle: "Perioperative Management",
    vignette: "A 62-year-old stroke patient taking Aspirin is scheduled for routine dental cleaning and minor dental procedures.",
    question: "Should Aspirin be held prior to routine minor dental procedures?",
    options: [
      { id: "A", text: "No; continue Aspirin for routine minor dental procedures (Level A Recommendation)" },
      { id: "B", text: "Yes, hold Aspirin for 14 days" },
      { id: "C", text: "Yes, switch to Warfarin" },
      { id: "D", text: "Yes, hold Aspirin for 7 days" },
      { id: "E", text: "Yes, give IV Heparin bridge" }
    ],
    correctOptionId: "A",
    explanation: "AHA/ASA perioperative stroke guidelines state that patients taking Aspirin undergoing routine minor dental procedures should CONTINUE Aspirin (Level A evidence).",
    keyTakeaway: "Routine minor dental procedures -> CONTINUE Aspirin (Level A).",
    tags: ["Aspirin", "Perioperative", "Dental Procedures"]
  }
];

questionsData.push(...questionsPart4);
