import { PracticeQuestion } from '../types';

export const questionsData: PracticeQuestion[] = [
  {
    "id": "q-1",
    "chapterId": 1,
    "chapterTitle": "Emergency Code Stroke Assessment",
    "vignette": "A 55-year-old male was last seen normal by his wife at 10:00 PM when going to bed. He woke up at 6:00 AM with dense left hemiplegia and left spatial neglect. What is his official Last Known Normal (LKN) time for acute stroke treatment protocol decisions?",
    "question": "What is the patient's official Last Known Normal (LKN) time?",
    "options": [
      {
        "id": "A",
        "text": "6:00 AM (time of waking up with symptoms)"
      },
      {
        "id": "B",
        "text": "10:00 PM (time last seen normal before sleep)"
      },
      {
        "id": "C",
        "text": "2:00 AM (midpoint of sleep)"
      },
      {
        "id": "D",
        "text": "8:00 AM (time of emergency room arrival)"
      },
      {
        "id": "E",
        "text": "12:00 AM (midnight baseline)"
      }
    ],
    "correctOptionId": "B",
    "explanation": "In wake-up strokes or strokes with unknown onset time, Last Known Normal (LKN) is strictly defined as the time the patient was last seen awake and at neurological baseline by a reliable witness (10:00 PM in this case). Note that advanced perfusion imaging (DAWN/DEFUSE 3 / EXTEND) or MRI DWI-FLAIR mismatch can qualify patients for treatment despite LKN > 4.5 hours.",
    "keyTakeaway": "Last Known Normal (LKN) is defined as the last time the patient was witnessed at baseline before symptom discovery.",
    "tags": [
      "Emergency Triage",
      "LKN",
      "Wake-up Stroke"
    ],
    "hint": "LKN is determined by when the patient was last witnessed at baseline, not when symptoms were first discovered.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-2",
    "chapterId": 1,
    "chapterTitle": "Emergency Code Stroke Assessment",
    "vignette": "A 62-year-old female presents with acute dizziness, gait ataxia, and horizontal nystagmus. Her total NIHSS score is calculated as 1. Non-contrast CT head is normal. MRI brain diffusion weighted imaging reveals a 1.5 cm cerebellar ischemic stroke.",
    "question": "Why can the NIHSS score be misleadingly low in posterior circulation ischemic strokes?",
    "options": [
      {
        "id": "A",
        "text": "The NIHSS measures cognitive function only"
      },
      {
        "id": "B",
        "text": "The NIHSS is heavily weighted toward anterior circulation cortical deficits such as language and hemiparesis"
      },
      {
        "id": "C",
        "text": "Posterior circulation strokes rarely cause functional disability"
      },
      {
        "id": "D",
        "text": "Ataxia items carry 5 points each"
      },
      {
        "id": "E",
        "text": "Visual field items are excluded in posterior circulation strokes"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The NIHSS score is heavily weighted toward anterior circulation and left hemispheric strokes (language and motor items). Posterior circulation strokes (causing ataxia, vertigo, cranial nerve palsies, dysarthria) often score low on NIHSS (0 to 3) despite causing severe functional disability.",
    "keyTakeaway": "NIHSS underestimates stroke severity in posterior circulation ischemic events.",
    "tags": [
      "Emergency Triage",
      "NIHSS",
      "Posterior Circulation"
    ],
    "hint": "Consider which brain regions (anterior vs posterior) contribute the majority of points to motor, speech, and neglect scoring.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-3",
    "chapterId": 1,
    "chapterTitle": "Emergency Code Stroke Assessment",
    "vignette": "A 48-year-old male presents with acute onset right hemiparesis and expressive aphasia. Finger-stick blood glucose is 28 mg/dL. NIHSS score is 14. What is the most immediate initial intervention before calling a stroke code or administering thrombolytics?",
    "question": "What is the mandatory initial diagnostic and therapeutic step?",
    "options": [
      {
        "id": "A",
        "text": "Administer IV 50% Dextrose (D50) immediately and re-evaluate neurological exam"
      },
      {
        "id": "B",
        "text": "Proceed directly to non-contrast head CT"
      },
      {
        "id": "C",
        "text": "Administer IV tPA immediately"
      },
      {
        "id": "D",
        "text": "Obtain stat MRI brain"
      },
      {
        "id": "E",
        "text": "Initiate IV Labetalol for blood pressure control"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Severe hypoglycemia (< 60 mg/dL) is a major stroke mimic that can cause focal neurological deficits including hemiparesis and aphasia. Finger-stick blood glucose MUST be checked immediately in all suspected acute stroke patients, and hypoglycemia corrected with D50 prior to thrombolytic decisions.",
    "keyTakeaway": "Hypoglycemia (< 60 mg/dL) is a focal stroke mimic; check finger-stick glucose & correct with D50 immediately.",
    "tags": [
      "Emergency Triage",
      "Stroke Mimics",
      "Hypoglycemia"
    ],
    "hint": "Identify the mandatory rapid bedside point-of-care test required before any neuroimaging or thrombolytic administration.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-4",
    "chapterId": 2,
    "chapterTitle": "Initial Stroke Evaluation & Thrombolysis",
    "vignette": "A 68-year-old male presents to the ED 2.5 hours after sudden onset of right-sided arm and leg weakness and expressive aphasia. Initial head CT shows no acute hemorrhage or early ischemic changes (ASPECTS 10). Finger-stick blood glucose is 142 mg/dL. His blood pressure on arrival is 196/108 mmHg. He has no prior history of stroke, head trauma, or bleeding.",
    "question": "Which of the following is the most appropriate immediate step in the management of this patient?",
    "options": [
      {
        "id": "A",
        "text": "Administer IV tPA immediately while awaiting lab results"
      },
      {
        "id": "B",
        "text": "Administer IV Labetalol to lower blood pressure below 185/110 mmHg prior to IV tPA"
      },
      {
        "id": "C",
        "text": "Wait for CBC, PT/INR, and PTT results before initiating thrombolytic therapy"
      },
      {
        "id": "D",
        "text": "Initiate Aspirin 325 mg orally and transfer to the stroke step-down unit"
      },
      {
        "id": "E",
        "text": "Perform immediate digital subtraction angiography (DSA)"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Per AHA/ASA guidelines, IV tPA can be administered within 3-4.5 hours of symptom onset in eligible acute ischemic stroke patients. However, blood pressure MUST be lowered to < 185/110 mmHg BEFORE initiating IV tPA (and maintained < 180/105 mmHg for the first 24 hours). Administering tPA at SBP > 185 or DBP > 110 significantly increases the risk of symptomatic intracranial hemorrhage (sICH). Finger-stick blood glucose is the ONLY lab result required before tPA (unless anticoagulation or platelet disorder is suspected).",
    "keyTakeaway": "Blood pressure MUST be lowered below 185/110 mmHg prior to initiating IV thrombolytic therapy.",
    "tags": [
      "Acute Thrombolysis",
      "tPA Protocol",
      "Blood Pressure Control"
    ],
    "hint": "High blood pressure significantly elevates the risk of symptomatic intracranial hemorrhage during thrombolysis.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-5",
    "chapterId": 2,
    "chapterTitle": "Initial Stroke Evaluation & Thrombolysis",
    "vignette": "A 79-year-old female with a history of non-valvular atrial fibrillation on Warfarin presents 90 minutes after acute left hemiparesis. Fingerstick glucose is 110 mg/dL. Stat INR result returns at 1.9.",
    "question": "Can IV tPA be administered to this patient?",
    "options": [
      {
        "id": "A",
        "text": "Yes, because she presented within 3 hours"
      },
      {
        "id": "B",
        "text": "No, because Warfarin therapy with INR > 1.7 is an absolute contraindication to IV tPA"
      },
      {
        "id": "C",
        "text": "Yes, provided Vitamin K is administered concurrently"
      },
      {
        "id": "D",
        "text": "Yes, provided cryoprecipitate is infused"
      },
      {
        "id": "E",
        "text": "Yes, if SBP is maintained < 140 mmHg"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Current AHA/ASA guidelines state that current use of Warfarin with an INR > 1.7 (or PT > 15 seconds) is an absolute contraindication to IV thrombolytic therapy due to prohibitive risk of intracerebral hemorrhage. Note: If INR is <= 1.7, tPA may be given.",
    "keyTakeaway": "Warfarin therapy with INR > 1.7 is an absolute contraindication for IV tPA.",
    "tags": [
      "Thrombolysis Criteria",
      "Anticoagulation",
      "INR"
    ],
    "hint": "Check the therapeutic threshold cutoff for INR beyond which tPA increases sICH risk exponentially.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-6",
    "chapterId": 2,
    "chapterTitle": "Initial Stroke Evaluation & Thrombolysis",
    "vignette": "A 65-year-old male receives IV tPA for acute ischemic stroke. 45 minutes into the tPA infusion, he develops acute swelling of his tongue, lips, and posterior pharynx. Blood pressure is 150/90 mmHg.",
    "question": "What is the most likely cause of this complication and the immediate initial management step?",
    "options": [
      {
        "id": "A",
        "text": "Anaphylaxis to contrast agent; administer IV Epinephrine 1 mg"
      },
      {
        "id": "B",
        "text": "tPA-induced orolingual angioedema; stop tPA infusion immediately and hold ACE inhibitors"
      },
      {
        "id": "C",
        "text": "Hemorrhagic transformation; start Mannitol infusion"
      },
      {
        "id": "D",
        "text": "Acute pulmonary edema; administer IV Furosemide"
      },
      {
        "id": "E",
        "text": "Carotid artery dissection; perform emergent intubation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "tPA-induced orolingual angioedema occurs in 1-5% of patients, with significantly higher incidence in patients taking ACE inhibitors (due to bradykinin accumulation). Immediate management: STOP tPA infusion immediately, secure airway if threatened, administer IV Diphenhydramine (50mg), IV Famotidine, and IV Dexamethasone (10mg).",
    "keyTakeaway": "Orolingual angioedema post-tPA -> STOP infusion immediately, maintain airway, give H1/H2 blockers & steroids.",
    "tags": [
      "Thrombolysis Complications",
      "Angioedema",
      "Emergency Protocol"
    ],
    "hint": "Patients taking ACE inhibitors have impaired bradykinin breakdown, predisposing them to mucosal swelling during tPA infusion.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-7",
    "chapterId": 2,
    "chapterTitle": "Initial Stroke Evaluation & Thrombolysis",
    "vignette": "A 62-year-old female receives IV Alteplase (tPA) for acute ischemic stroke. 12 hours later, her SBP increases to 192 mmHg. What is the goal blood pressure for the first 24 hours post-thrombolysis?",
    "question": "What is the blood pressure threshold for the first 24 hours post-tPA?",
    "options": [
      {
        "id": "A",
        "text": "SBP < 180 mmHg and DBP < 105 mmHg"
      },
      {
        "id": "B",
        "text": "SBP < 140 mmHg and DBP < 90 mmHg"
      },
      {
        "id": "C",
        "text": "SBP < 220 mmHg and DBP < 120 mmHg"
      },
      {
        "id": "D",
        "text": "SBP < 160 mmHg and DBP < 100 mmHg"
      },
      {
        "id": "E",
        "text": "SBP < 120 mmHg and DBP < 80 mmHg"
      }
    ],
    "correctOptionId": "A",
    "explanation": "For the first 24 hours following IV Alteplase or Tenecteplase administration, blood pressure must be monitored frequently and strictly maintained below 180/105 mmHg to reduce the risk of secondary intracranial hemorrhage.",
    "keyTakeaway": "Post-tPA BP target for first 24 hours: SBP < 180 mmHg and DBP < 105 mmHg.",
    "tags": [
      "Thrombolysis Protocol",
      "Blood Pressure Control",
      "Post-tPA Management"
    ],
    "hint": "Pre-tPA limit is < 185/110 mmHg; post-tPA limit for 24 hours is 5 mmHg lower.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-8",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 64-year-old female presents with sudden left leg weakness greater than left arm weakness, accompanied by urinary incontinence and abulia (apathy/lack of initiative). MRI demonstrates an acute ischemic infarction.",
    "question": "Which vascular territory is affected in this patient?",
    "options": [
      {
        "id": "A",
        "text": "Right Middle Cerebral Artery (MCA) M1 segment"
      },
      {
        "id": "B",
        "text": "Right Anterior Cerebral Artery (ACA)"
      },
      {
        "id": "C",
        "text": "Right Posterior Cerebral Artery (PCA)"
      },
      {
        "id": "D",
        "text": "Posterior Inferior Cerebellar Artery (PICA)"
      },
      {
        "id": "E",
        "text": "Anterior Inferior Cerebellar Artery (AICA)"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Anterior Cerebral Artery (ACA) infarctions classically cause contralateral leg weakness > arm/face weakness (due to leg motor cortex representation on the medial homunculus), urinary incontinence (paracentral lobule), and abulia/transcortical motor aphasia (supplementary motor area / frontal lobe).",
    "keyTakeaway": "ACA stroke = Contralateral leg > arm/face weakness + urinary incontinence + frontal abulia.",
    "tags": [
      "Neuroanatomy",
      "Stroke Syndromes",
      "ACA Territory"
    ],
    "hint": "Recall the cortical motor homunculus: medial hemispheric surface supplies the lower extremity.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-9",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "An 80-year-old male presents with sudden homonymous hemianopia with macular sparing. Pupillary reflexes and extraocular movements are normal.",
    "question": "Infarction of which artery causes homonymous hemianopia with macular sparing?",
    "options": [
      {
        "id": "A",
        "text": "Posterior Cerebral Artery (PCA) calcarine branch"
      },
      {
        "id": "B",
        "text": "Middle Cerebral Artery (MCA) inferior division"
      },
      {
        "id": "C",
        "text": "Anterior Choroidal Artery"
      },
      {
        "id": "D",
        "text": "Ophthalmic Artery"
      },
      {
        "id": "E",
        "text": "Superior Cerebellar Artery"
      }
    ],
    "correctOptionId": "A",
    "explanation": "PCA occlusion involving the primary visual cortex (calcarine sulcus) causes contralateral homonymous hemianopia. Macular vision is typically spared due to dual collateral blood supply to the occipital pole from terminal MCA branches.",
    "keyTakeaway": "PCA stroke = Homonymous hemianopia with MACULAR SPARING (due to dual MCA collateral supply at occipital pole).",
    "tags": [
      "Neuroanatomy",
      "PCA Territory",
      "Visual Fields"
    ],
    "hint": "The occipital pole has collateral supply from the terminal branches of another major anterior circulation vessel.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-10",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 72-year-old right-handed male presents with sudden left-sided spatial neglect, anosognosia (unawareness of neurological deficit), hemineglect of left visual space, and right gaze preference. He has mild left hemiparesis.",
    "question": "Which lesion location best accounts for this clinical presentation?",
    "options": [
      {
        "id": "A",
        "text": "Left dominant parietal lobe"
      },
      {
        "id": "B",
        "text": "Right non-dominant inferior parietal lobule / temporal-parietal junction"
      },
      {
        "id": "C",
        "text": "Left anterior cingulate cortex"
      },
      {
        "id": "D",
        "text": "Bilateral occipital lobes"
      },
      {
        "id": "E",
        "text": "Right cerebellar hemisphere"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Hemispatial neglect, anosognosia, and extinction to double simultaneous stimulation are classic signs of non-dominant (typically right) parietal lobe damage, specifically the inferior parietal lobule / temporoparietal junction supplied by the right MCA superior/inferior divisions.",
    "keyTakeaway": "Right MCA / Non-dominant parietal lobe stroke = Hemispatial neglect + Anosognosia + Right gaze preference.",
    "tags": [
      "Neuroanatomy",
      "Cortical Deficits",
      "Neglect"
    ],
    "hint": "Spatial awareness and attention mapping are localized to the non-dominant hemisphere parietal cortex.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-11",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 60-year-old female presents with acute contralateral hemiparesis, hemisensory loss, and homonymous hemianopia, accompanied by ipsilateral Horner syndrome. MRA reveals occlusion of a deep branch arising from the internal carotid artery before its bifurcation.",
    "question": "Which vascular territory is involved in this classic stroke syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Anterior Choroidal Artery (AChA)"
      },
      {
        "id": "B",
        "text": "Posterior Communicating Artery (PCoA)"
      },
      {
        "id": "C",
        "text": "Recurrent Artery of Heubner"
      },
      {
        "id": "D",
        "text": "Ophthalmic Artery"
      },
      {
        "id": "E",
        "text": "Thalamoperforating Artery"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Anterior Choroidal Artery (AChA) stroke classically causes the triad of: 1) Contralateral hemiparesis (posterior limb of internal capsule), 2) Contralateral hemisensory loss (VPL/VPM thalamus or thalamocortical projections), and 3) Contralateral homonymous hemianopia (optic tract / lateral geniculate body). Ipsilateral Horner syndrome may occur due to hypothalamic sympathetic tract involvement.",
    "keyTakeaway": "Anterior Choroidal Artery stroke triad: Hemiparesis + Hemisensory loss + Homonymous hemianopia (+/- Horner's).",
    "tags": [
      "Stroke Syndromes",
      "Neuroanatomy",
      "Anterior Choroidal Artery"
    ],
    "hint": "Deep branch of ICA supplying posterior limb of internal capsule, optic tract, and lateral geniculate body.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-12",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 58-year-old male presents with acute vertigo, hoarseness, dysphagia, right-sided facial numbness (loss of pain and temperature), right-sided Horner syndrome (ptosis, miosis, anhidrosis), ataxia, and left-sided body loss of pain and temperature sensation.",
    "question": "What is the clinical diagnosis and underlying arterial occlusion?",
    "options": [
      {
        "id": "A",
        "text": "Wallenberg Syndrome (Lateral Medullary Syndrome); PICA or Vertebral Artery occlusion"
      },
      {
        "id": "B",
        "text": "Weber Syndrome; P1 PCA occlusion"
      },
      {
        "id": "C",
        "text": "Dejerine Syndrome (Medial Medullary Syndrome); Anterior Spinal Artery occlusion"
      },
      {
        "id": "D",
        "text": "Millard-Gubler Syndrome; Basilar artery paramedian branch occlusion"
      },
      {
        "id": "E",
        "text": "Claude Syndrome; PCA penetrating artery occlusion"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Wallenberg Syndrome (Lateral Medullary Stroke) is caused by occlusion of the PICA or intracranial Vertebral Artery. Features: Ipsilateral facial pain/temp loss (spinal trigeminal nucleus), Ipsilateral Horner syndrome (sympathetic tract), Ipsilateral ataxia (restiform body/cerebellum), Dysphagia/hoarseness (nucleus ambiguus - CN IX/X), and Contralateral body pain/temp loss (spinothalamic tract). Notably, motor strength is SPARED.",
    "keyTakeaway": "Wallenberg Syndrome = Ipsilateral Face + Contralateral Body pain/temp loss + Horner's + Dysphagia/Hoarseness (PICA/VA). Motor strength is spared!",
    "tags": [
      "Brainstem Syndromes",
      "Posterior Circulation",
      "Neuroanatomy"
    ],
    "hint": "Notice ipsilateral CN IX/X involvement (nucleus ambiguus causing dysphagia/hoarseness) with cross body sensory loss and intact motor strength.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-13",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 70-year-old male presents with acute right eye ptosis and down-and-out ocular deviation, accompanied by left-sided hemiplegia of the arm and leg.",
    "question": "What is the diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Weber Syndrome"
      },
      {
        "id": "B",
        "text": "Claude Syndrome"
      },
      {
        "id": "C",
        "text": "Benedikt Syndrome"
      },
      {
        "id": "D",
        "text": "Parinaud Syndrome"
      },
      {
        "id": "E",
        "text": "Wallenberg Syndrome"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Weber Syndrome (ventral midbrain P1 PCA stroke) combines ipsilateral oculomotor nerve (CN III) palsy with contralateral hemiparesis due to damage to fascicular CN III fibers and the corticospinal tract in the cerebral peduncle. Claude syndrome involves red nucleus (ataxia + CN III), Benedikt involves red nucleus/substantia nigra (chorea/athetosis + CN III).",
    "keyTakeaway": "Weber Syndrome = Ipsilateral CN III palsy + Contralateral hemiparesis (ventral midbrain P1 PCA).",
    "tags": [
      "Brainstem Syndromes",
      "Midbrain",
      "Neuroanatomy"
    ],
    "hint": "Focus on the combination of ipsilateral CN III palsy and contralateral hemiparesis involving the ventral cerebral peduncle.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-14",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 63-year-old female presents with acute right facial weakness (lower motor neuron type involving forehead), inability to abduct her right eye (CN VI palsy), and left-sided hemiparesis.",
    "question": "Which pontine brainstem syndrome does this describe?",
    "options": [
      {
        "id": "A",
        "text": "Millard-Gubler Syndrome (Ventral Pontine Syndrome)"
      },
      {
        "id": "B",
        "text": "Foville Syndrome"
      },
      {
        "id": "C",
        "text": "Dejerine Syndrome"
      },
      {
        "id": "D",
        "text": "Weber Syndrome"
      },
      {
        "id": "E",
        "text": "Raymond Syndrome"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Millard-Gubler Syndrome (Ventral Pontine Stroke) results from paramedian basilar branch occlusion. Features: Ipsilateral CN VII palsy (facial weakness including forehead), Ipsilateral CN VI palsy (abducens deficit), and Contralateral hemiparesis (corticospinal tract). Foville syndrome adds horizontal gaze palsy (CN VI nucleus/PPRF).",
    "keyTakeaway": "Millard-Gubler Syndrome = Ipsilateral CN VI & VII nerve palsies + Contralateral hemiparesis (ventral pons).",
    "tags": [
      "Brainstem Syndromes",
      "Pons",
      "Neuroanatomy"
    ],
    "hint": "Facial nerve weakness including forehead combined with abducens palsy and cross body motor hemiparesis localizes to the ventral pons.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-15",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 67-year-old male with long-standing poorly controlled hypertension presents with pure motor hemiparesis involving the right face, arm, and leg equally. Sensory examination, visual fields, and language are completely intact.",
    "question": "Which anatomical structure is most commonly affected in Pure Motor Lacunar Stroke?",
    "options": [
      {
        "id": "A",
        "text": "Posterior limb of the internal capsule (or ventral pons)"
      },
      {
        "id": "B",
        "text": "Ventral posterolateral (VPL) nucleus of the thalamus"
      },
      {
        "id": "C",
        "text": "Medial lemniscus in the medulla"
      },
      {
        "id": "D",
        "text": "Nucleus ambiguus"
      },
      {
        "id": "E",
        "text": "Globus pallidus externus"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Pure motor hemiparesis is the most common lacunar stroke syndrome (approx. 50%). It is caused by lipohyalinosis/microatheroma of lenticulostriate penetrating arteries supplying the posterior limb of the internal capsule or basis pontis.",
    "keyTakeaway": "Pure motor hemiparesis lacunar stroke = Posterior limb of internal capsule (lenticulostriate penetrators).",
    "tags": [
      "Lacunar Stroke",
      "Small Vessel Disease",
      "Neuroanatomy"
    ],
    "hint": "Densely packed corticospinal fibers pass through this capsular region between the thalamus and basal ganglia.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-16",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 42-year-old male with a history of recurrent ischemic strokes, migraine with aura, and early-onset cognitive decline has a brain MRI demonstrating extensive subcortical white matter hyperintensities, particularly involving the anterior temporal lobes and external capsule.",
    "question": "What is the genetic mutation and disease entity in this patient?",
    "options": [
      {
        "id": "A",
        "text": "CADASIL; NOTCH3 gene mutation on chromosome 19"
      },
      {
        "id": "B",
        "text": "Fabry Disease; GLA gene mutation causing alpha-galactosidase A deficiency"
      },
      {
        "id": "C",
        "text": "MELAS; Mitochondrial MT-TL1 A3243G mutation"
      },
      {
        "id": "D",
        "text": "CARASIL; HTRA1 gene mutation"
      },
      {
        "id": "E",
        "text": "Pseudoxanthoma Elasticum; ABCC6 gene mutation"
      }
    ],
    "correctOptionId": "A",
    "explanation": "CADASIL (Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy) is caused by autosomal dominant mutations in NOTCH3 (chr 19). Pathognomonic MRI sign: diffuse white matter disease involving the anterior temporal pole and external capsule.",
    "keyTakeaway": "CADASIL = NOTCH3 mutation + Anterior temporal pole MRI hyperintensity + Migraines + Recurrent lacunar strokes.",
    "tags": [
      "Genetic Vasculopathies",
      "Small Vessel Disease",
      "CADASIL"
    ],
    "hint": "Look for autosomal dominant inheritance, recurrent young strokes, migraines, and anterior temporal lobe MRI changes.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-17",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 52-year-old female presents with acute cortical stroke. MRA head shows string-of-beads appearance of the internal carotid and vertebral arteries bilaterally. Skin exam shows subungual splinter hemorrhages and hyperelastic skin. Catheter angiography confirms multifocal stenoses alternating with aneurysmal ectasia without inflammatory markers.",
    "question": "What is the underlying vasculopathy?",
    "options": [
      {
        "id": "A",
        "text": "Fibromuscular Dysplasia (FMD)"
      },
      {
        "id": "B",
        "text": "Primary Angiitis of the CNS (PACNS)"
      },
      {
        "id": "C",
        "text": "Takayasu Arteritis"
      },
      {
        "id": "D",
        "text": "Temporal Arteritis (GCA)"
      },
      {
        "id": "E",
        "text": "Moyamoya Disease"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Fibromuscular Dysplasia (FMD) is a non-atherosclerotic, non-inflammatory vascular disease predominantly affecting middle-aged females. Classically affects renal and internal carotid/vertebral arteries. Classic angiographic finding: 'String of beads' appearance (medial fibroplasia).",
    "keyTakeaway": "Fibromuscular Dysplasia = 'String-of-beads' angiography in renal & ICA/vertebral arteries of middle-aged women.",
    "tags": [
      "TOAST Classification",
      "Vasculopathy",
      "Non-Atherosclerotic"
    ],
    "hint": "Non-inflammatory arterial dysplasia classically displaying alternating beads and aneurysms on angiography.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-18",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 71-year-old female was last seen normal 14 hours ago. CTA head/neck demonstrates a right M1 MCA occlusion. CTP (CT Perfusion) shows an ischemic core volume of 15 mL and a penumbral perfusion mismatch volume of 85 mL (mismatch ratio > 1.8). Her NIHSS score is 16.",
    "question": "Based on landmark clinical trials (DAWN / DEFUSE 3), what is the appropriate management?",
    "options": [
      {
        "id": "A",
        "text": "Proceed with mechanical thrombectomy immediately"
      },
      {
        "id": "B",
        "text": "Administer IV tPA only"
      },
      {
        "id": "C",
        "text": "Medical therapy with Aspirin and Heparin infusion"
      },
      {
        "id": "D",
        "text": "Decompressive hemicraniectomy within 6 hours"
      },
      {
        "id": "E",
        "text": "Repeat CT head in 24 hours before making treatment decisions"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The DAWN (up to 24h) and DEFUSE 3 (up to 16h) trials proved that mechanical thrombectomy provides dramatic functional benefit for patients presenting in the extended window (6-24 hours) who have an anterior circulation LVO (ICA or M1 MCA) and salvageable penumbral mismatch on perfusion or MRI imaging.",
    "keyTakeaway": "Mechanical thrombectomy is indicated up to 24 hours for anterior circulation LVO with favorable perfusion mismatch (DAWN/DEFUSE 3).",
    "tags": [
      "Thrombectomy",
      "Landmark Trials",
      "LVO"
    ],
    "hint": "Extended window trials (6-24 hours) demonstrate benefit when clinical deficit far outweighs the dead ischemic core.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-19",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 64-year-old male presents with acute right-sided hemiplegia and global aphasia (NIHSS 18) 2 hours after symptom onset. Non-contrast CT shows no hemorrhage, ASPECTS score of 8. CTA reveals an occlusion of the left internal carotid artery terminus (ICA T-occlusion).",
    "question": "What is the recommended standard of care combination therapy?",
    "options": [
      {
        "id": "A",
        "text": "Intravenous thrombolysis (tPA/TNK) AND immediate transfer for mechanical thrombectomy"
      },
      {
        "id": "B",
        "text": "Mechanical thrombectomy alone; skip IV thrombolysis"
      },
      {
        "id": "C",
        "text": "IV tPA alone; mechanical thrombectomy is contraindicated in ICA terminus occlusion"
      },
      {
        "id": "D",
        "text": "IV Heparin bolus plus Aspirin 325 mg"
      },
      {
        "id": "E",
        "text": "Emergent carotid endarterectomy"
      }
    ],
    "correctOptionId": "A",
    "explanation": "In eligible patients presenting within 4.5 hours of LVO stroke, bridging therapy with IV thrombolysis (Alteplase or Tenecteplase) followed immediately by mechanical thrombectomy remains the recommended standard of care.",
    "keyTakeaway": "Bridging therapy (IV Thrombolysis + Mechanical Thrombectomy) is standard for eligible LVO patients presenting < 4.5 hours.",
    "tags": [
      "Thrombectomy",
      "Bridging Therapy",
      "Acute Stroke Protocol"
    ],
    "hint": "Standard guidelines advocate combining IV thrombolysis with endovascular clot retrieval within the early window.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-20",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A 60-year-old male experiences a recurrent TIA despite Aspirin 81 mg. DSA shows 80% stenosis of the left intracranial basilar artery. He is evaluated for management.",
    "question": "Based on the SAMMPRIS trial, which treatment strategy yields superior outcomes for severe symptomatic intracranial atherosclerotic disease (70-99% ICAD)?",
    "options": [
      {
        "id": "A",
        "text": "Aggressive medical therapy (Dual Antiplatelet Therapy for 90 days + high-intensity statin + BP target < 140/90)"
      },
      {
        "id": "B",
        "text": "Percutaneous intracranial angioplasty and stenting (Wingspan stent) plus medical therapy"
      },
      {
        "id": "C",
        "text": "Immediate EC-IC bypass surgery"
      },
      {
        "id": "D",
        "text": "Warfarin anticoagulation (target INR 2.0-3.0)"
      },
      {
        "id": "E",
        "text": "Carotid endarterectomy"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The SAMMPRIS trial demonstrated that aggressive medical management (DAPT with Aspirin + Clopidogrel for 90 days, high-intensity statin, BP < 140/90, lifestyle modification) was vastly SUPERIOR to intracranial stenting for 70-99% symptomatic ICAD. Stenting had a 14.7% 30-day stroke/death rate vs 5.8% in medical management.",
    "keyTakeaway": "SAMMPRIS trial: Aggressive medical therapy > Intracranial stenting for 70-99% symptomatic ICAD.",
    "tags": [
      "Intracranial Atherosclerosis",
      "SAMMPRIS Trial",
      "Secondary Prevention"
    ],
    "hint": "Recall the trial that showed periprocedural stroke risks of stenting outweighed any long-term benefit compared to intensive medical therapy.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-21",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 14-year-old male presents with painful burning paresthesias in his hands and feet (acroparesthesias), dark reddish-purple skin macules in a swimming-trunk distribution (angiokeratomas), hypohidrosis, and early corneal opacity (cornea verticillata). Lab work demonstrates microalbuminuria.",
    "question": "What is the enzyme deficiency and inheritance pattern of this condition?",
    "options": [
      {
        "id": "A",
        "text": "Alpha-galactosidase A deficiency; X-linked recessive (Fabry Disease)"
      },
      {
        "id": "B",
        "text": "Glucocerebrosidase deficiency; Autosomal recessive (Gaucher Disease)"
      },
      {
        "id": "C",
        "text": "Sphingomyelinase deficiency; Autosomal recessive (Niemann-Pick)"
      },
      {
        "id": "D",
        "text": "NOTCH3 mutation; Autosomal dominant (CADASIL)"
      },
      {
        "id": "E",
        "text": "Cystathionine beta-synthase deficiency; Autosomal recessive (Homocystinuria)"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Fabry Disease is an X-linked lysosomal storage disorder caused by deficiency of alpha-galactosidase A (GLA gene), leading to accumulation of globotriaosylceramide (Gb3). Key board triads: Acroparesthesias + Angiokeratomas + Hypohidrosis. Causes early stroke, renal failure, and hypertrophic cardiomyopathy.",
    "keyTakeaway": "Fabry Disease = X-linked Alpha-galactosidase A deficiency -> Acroparesthesias, Angiokeratomas, Young Stroke, Renal Failure.",
    "tags": [
      "Genetic Vasculopathies",
      "Fabry Disease",
      "Pediatric/Young Stroke"
    ],
    "hint": "X-linked storage disorder with characteristic painful neuropathic crises and dark skin lesions in a bathing trunk distribution.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-22",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 9-year-old Japanese female presents with recurrent TIAs triggered by crying or eating hot soup. Cerebral angiography demonstrates bilateral stenosis of the distal ICAs with a dense 'puff of smoke' collateral network at the basal ganglia.",
    "question": "What is the diagnosis and definitive surgical management?",
    "options": [
      {
        "id": "A",
        "text": "Moyamoya Disease; Direct or indirect surgical revascularization (STA-MCA bypass or EDAS)"
      },
      {
        "id": "B",
        "text": "CADASIL; Gene therapy"
      },
      {
        "id": "C",
        "text": "Fibromuscular Dysplasia; Renal angioplasty"
      },
      {
        "id": "D",
        "text": "Takayasu Arteritis; High-dose steroids"
      },
      {
        "id": "E",
        "text": "Primary Angiitis of the CNS; Cyclophosphamide"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Moyamoya Disease features progressive bilateral steno-occlusion of the internal carotid bifurcation and proximal ACA/MCA, with prominent lenticulostriate collaterals ('puff of smoke' / moyamoya appearance on angiography). Hyperventilation (crying, eating hot food) causes cerebral vasoconstriction -> TIA/stroke. Treatment is surgical revascularization (STA-MCA bypass or EDAS/encephaloduroarteriosynangiosis).",
    "keyTakeaway": "Moyamoya Disease = 'Puff of smoke' collaterals on angiography + hyperventilation TIAs -> Treat with surgical revascularization.",
    "tags": [
      "Moyamoya",
      "Pediatric Stroke",
      "Vasculopathy"
    ],
    "hint": "Hyperventilation-induced TIAs in a young patient with basal ganglia collateral vascular net on angiogram.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-23",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 74-year-old male experiences amaurosis fugax (transient monocular vision loss) in his left eye 10 days ago. Carotid duplex ultrasound and CTA confirm 75% symptomatic left internal carotid artery stenosis. Perioperative risk is low.",
    "question": "Based on NASCET criteria, what is the recommended intervention and surgical benefit threshold?",
    "options": [
      {
        "id": "A",
        "text": "Carotid Endarterectomy (CEA) within 2 weeks yields maximum absolute risk reduction for 70-99% symptomatic stenosis"
      },
      {
        "id": "B",
        "text": "Medical therapy alone with Aspirin for 70-99% stenosis"
      },
      {
        "id": "C",
        "text": "Carotid artery stenting is mandatory for all symptomatic patients regardless of age"
      },
      {
        "id": "D",
        "text": "CEA is only indicated if stenosis is 100% (complete occlusion)"
      },
      {
        "id": "E",
        "text": "EC-IC bypass surgery within 24 hours"
      }
    ],
    "correctOptionId": "A",
    "explanation": "NASCET demonstrated that Carotid Endarterectomy (CEA) provides robust absolute risk reduction (17% ARR at 2 years) for symptomatic patients with 70-99% stenosis if performed early (ideally within 2 weeks). CEA is contraindicated in 100% total occlusion.",
    "keyTakeaway": "NASCET: CEA provides high ARR for 70-99% symptomatic carotid stenosis (do early within 14 days!).",
    "tags": [
      "Carotid Stenosis",
      "NASCET Trial",
      "Surgical Management"
    ],
    "hint": "NASCET established clear thresholds for 70-99% vs 50-69% vs < 50% symptomatic ICA stenosis.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-24",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 38-year-old male presents with acute neck pain, Horner syndrome (left ptosis and miosis), and subsequent right hemiparesis following a chiropractic neck manipulation. MRI brain shows acute left MCA cortical stroke.",
    "question": "What is the most likely underlying etiology and initial diagnostic modality of choice?",
    "options": [
      {
        "id": "A",
        "text": "Left Internal Carotid Artery Dissection; CTA or MRA head and neck showing crescent sign / intramural hematoma"
      },
      {
        "id": "B",
        "text": "Fibromuscular Dysplasia; Renal angiogram"
      },
      {
        "id": "C",
        "text": "Takayasu Arteritis; Aortic arch angiography"
      },
      {
        "id": "D",
        "text": "Embolic stroke from cardiac myxoma; TEE"
      },
      {
        "id": "E",
        "text": "Aneurysmal SAH; Lumbar puncture"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Carotid artery dissection is a leading cause of stroke in young patients (< 45 years). The classic clinical triad is: 1) Ipsilateral neck or head pain, 2) Ipsilateral Horner syndrome (due to stretching of sympathetic fibers surrounding the internal carotid wall), and 3) Contralateral retinal or cerebral ischemia hours-to-days later. Diagnosis: CTA or MRA showing crescent sign / intramural hematoma.",
    "keyTakeaway": "Carotid Dissection Triad: Neck pain + Ipsilateral Horner's + Contralateral stroke in a young patient.",
    "tags": [
      "Carotid Dissection",
      "Young Stroke",
      "Horner Syndrome"
    ],
    "hint": "Trauma or neck manipulation triggering localized neck pain, Horner syndrome, and stroke in a young adult.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-25",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 45-year-old male with no prior medical history presents with an embolic-appearing stroke in the right MCA territory. Transthoracic echocardiogram with bubble study reveals a Patent Foramen Ovale (PFO) with an atrial septal aneurysm and significant right-to-left shunt. His RoPE (Risk of Paradoxical Embolism) score is calculated as 8. Extensive workup shows no DVT or other stroke etiology.",
    "question": "Based on landmark trials (RESPECT, CLOSE, DEFENSE-PFO), what is the optimal secondary prevention strategy?",
    "options": [
      {
        "id": "A",
        "text": "Percutaneous PFO closure plus antiplatelet therapy"
      },
      {
        "id": "B",
        "text": "Long-term Warfarin anticoagulation alone without closure"
      },
      {
        "id": "C",
        "text": "Aspirin 81 mg daily alone without closure"
      },
      {
        "id": "D",
        "text": "Left atrial appendage occlusion"
      },
      {
        "id": "E",
        "text": "No intervention required"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Landmark randomized trials (RESPECT long-term, CLOSE, DEFENSE-PFO) proved that percutaneous PFO closure combined with antiplatelet therapy significantly reduces recurrent stroke risk compared to medical therapy alone in young patients (age < 60) with cryptogenic stroke and high-risk PFO features (high RoPE score, atrial septal aneurysm, large shunt).",
    "keyTakeaway": "PFO closure + antiplatelet therapy reduces recurrent stroke in young cryptogenic stroke patients with high shunt / septal aneurysm.",
    "tags": [
      "PFO",
      "Cardioembolic",
      "Landmark Trials"
    ],
    "hint": "High RoPE score in a young patient with an atrial septal aneurysm strongly favors percutaneous structural intervention.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-26",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 74-year-old female with non-valvular atrial fibrillation suffers a non-cardioembolic acute ischemic stroke. Creatinine clearance is 65 mL/min. She has no prior history of ICH.",
    "question": "Based on the ARISTOTLE, RE-LY, and ROCKET-AF trials, why are DOACs preferred over Warfarin for non-valvular AFib secondary prevention?",
    "options": [
      {
        "id": "A",
        "text": "DOACs show superior or non-inferior efficacy for ischemic stroke prevention with a ~50% reduction in intracerebral hemorrhage (ICH)"
      },
      {
        "id": "B",
        "text": "DOACs require frequent INR monitoring"
      },
      {
        "id": "C",
        "text": "Warfarin has a lower rate of major bleeding than DOACs"
      },
      {
        "id": "D",
        "text": "DOACs are indicated in mechanical heart valves"
      },
      {
        "id": "E",
        "text": "Warfarin is superior in patients with end-stage renal disease"
      }
    ],
    "correctOptionId": "A",
    "explanation": "DOACs (Apixaban, Dabigatran, Rivaroxaban, Edoxaban) are preferred over Warfarin in non-valvular AFib because meta-analyses of major RCTs demonstrate that DOACs reduce mortality, stroke risk, and most dramatically cut intracranial hemorrhage (ICH) by approximately 50%. Note: DOACs are CONTRAINDICATED in mechanical heart valves.",
    "keyTakeaway": "DOACs > Warfarin in non-valvular AFib: Equal/better stroke reduction with ~50% LOWER risk of ICH!",
    "tags": [
      "Cardioembolic",
      "Atrial Fibrillation",
      "DOACs"
    ],
    "hint": "Consider the major fatal bleeding complication (intracranial hemorrhage) that DOACs significantly reduce compared to Warfarin.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-27",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 72-year-old female presents with acute right basal ganglia hemorrhage. GCS is 11, volume of hematoma on CT is calculated as 35 mL (using ABC/2), with IVH (intraventricular hemorrhage) extension. Age is 72, supratentorial location.",
    "question": "What is her total ICH Score and corresponding predicted 30-day mortality risk?",
    "options": [
      {
        "id": "A",
        "text": "ICH Score = 3 (GCS 11=1, Volume >= 30=1, IVH=1); approx 72% 30-day mortality"
      },
      {
        "id": "B",
        "text": "ICH Score = 0; 0% mortality"
      },
      {
        "id": "C",
        "text": "ICH Score = 1; 13% mortality"
      },
      {
        "id": "D",
        "text": "ICH Score = 5; 100% mortality"
      },
      {
        "id": "E",
        "text": "ICH Score = 2; 26% mortality"
      }
    ],
    "correctOptionId": "A",
    "explanation": "ICH Score Components: GCS 5-12 = 1 point; Hematoma volume >= 30 mL = 1 point; IVH present = 1 point; Infratentorial origin = 0 (supratentorial); Age >= 80 = 0 (age 72). Total ICH Score = 3. Mortality correlates with score: Score 0=0%, 1=13%, 2=26%, 3=72%, 4=97%, 5-6=100%.",
    "keyTakeaway": "ICH Score components: GCS, Volume (>= 30mL), IVH, Infratentorial location, Age (>= 80). Score 3 = ~72% mortality.",
    "tags": [
      "Intracranial Hemorrhage",
      "ICH Score",
      "Prognostication"
    ],
    "hint": "Add 1 point for GCS 11, 1 point for volume 35 mL, and 1 point for IVH present.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-28",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 68-year-old male taking Dabigatran 150 mg twice daily for atrial fibrillation presents with acute spontaneous intracranial hemorrhage. What is the specific FDA-approved targeted reversal agent for Dabigatran?",
    "question": "What is the specific reversal agent for Dabigatran?",
    "options": [
      {
        "id": "A",
        "text": "Idarucizumab (Praxbind)"
      },
      {
        "id": "B",
        "text": "Andexanet alfa (Andexxa)"
      },
      {
        "id": "C",
        "text": "Prothrombin Complex Concentrate (4-factor PCC / Kcentra)"
      },
      {
        "id": "D",
        "text": "Protamine sulfate"
      },
      {
        "id": "E",
        "text": "Vitamin K1 IV"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Idarucizumab (Praxbind) is a humanized monoclonal antibody fragment that specifically binds Dabigatran (a direct thrombin inhibitor) with 350-fold higher affinity than thrombin, achieving immediate complete reversal. Andexanet alfa is the reversal agent for factor Xa inhibitors (Apixaban, Rivaroxaban).",
    "keyTakeaway": "Dabigatran reversal = Idarucizumab (Praxbind). Factor Xa inhibitor reversal = Andexanet alfa (Andexxa).",
    "tags": [
      "Intracranial Hemorrhage",
      "Anticoagulation Reversal",
      "DOACs"
    ],
    "hint": "Monoclonal antibody fragment targeting direct thrombin inhibitor binding.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-29",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage",
    "vignette": "A 50-year-old female undergoes successful endovascular coiling of a ruptured anterior communicating artery aneurysm following WFNS Grade II SAH. On post-bleed day 6, she develops new subtle left arm drift. Transcranial Doppler (TCD) shows mean flow velocity in the right MCA of 185 cm/s (Lindegaard ratio 4.5).",
    "question": "What is the diagnosis and appropriate pharmacological preventative therapy administered orally to all aneurysmal SAH patients?",
    "options": [
      {
        "id": "A",
        "text": "Cerebral vasospasm / Delayed Cerebral Ischemia (DCI); Nimodipine 60 mg orally every 4 hours for 21 days"
      },
      {
        "id": "B",
        "text": "Hydrocephalus; IV Furosemide"
      },
      {
        "id": "C",
        "text": "Aneurysm rebleeding; IV Aminocaproic acid"
      },
      {
        "id": "D",
        "text": "Seizure activity; IV Levetiracetam loading dose"
      },
      {
        "id": "E",
        "text": "Cerebral salt wasting; IV Hypertonic saline"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Delayed Cerebral Ischemia (DCI) due to vasospasm occurs peak post-bleed days 4-14. Oral Nimodipine (60 mg q4h for 21 days) is the ONLY medication proven to improve neurofunctional outcomes in aneurysmal SAH. TCD mean flow velocity > 120 cm/s indicates vasospasm; > 200 cm/s indicates severe vasospasm.",
    "keyTakeaway": "Oral Nimodipine 60 mg q4h x 21 days is mandatory for ALL aneurysmal SAH patients to reduce DCI deficit.",
    "tags": [
      "Subarachnoid Hemorrhage",
      "Nimodipine",
      "Vasospasm"
    ],
    "hint": "Name the specific oral calcium channel blocker mandated for 21 days post-aneurysmal SAH.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-30",
    "chapterId": 15,
    "chapterTitle": "Pediatric Stroke & Hematology",
    "vignette": "An 8-year-old boy with Sickle Cell Anemia (HbSS) undergoes routine screening Transcranial Doppler (TCD). The time-averaged mean maximum velocity in his internal carotid / middle cerebral artery is measured at 215 cm/s.",
    "question": "Based on the STOP trial, what is the patient's stroke risk status and indication for intervention?",
    "options": [
      {
        "id": "A",
        "text": "Abnormal TCD (TAMMV >= 200 cm/s); initiate chronic blood transfusion therapy to maintain HbS < 30%"
      },
      {
        "id": "B",
        "text": "Normal TCD; continue observation"
      },
      {
        "id": "C",
        "text": "Low risk; administer oral Aspirin 81 mg daily"
      },
      {
        "id": "D",
        "text": "Indication for emergent surgical EC-IC bypass"
      },
      {
        "id": "E",
        "text": "Start Warfarin anticoagulation"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The STOP trial established that pediatric Sickle Cell Disease patients with abnormal TCD velocities (TAMMV >= 200 cm/s) have a > 10% per year risk of primary stroke. Regular chronic exchange/simple blood transfusions (targeting HbS < 30%) reduce stroke risk by over 90%.",
    "keyTakeaway": "STOP Trial: TCD velocity >= 200 cm/s in Sickle Cell Disease -> Start chronic blood transfusions (target HbS < 30%).",
    "tags": [
      "Pediatric Stroke",
      "Sickle Cell Disease",
      "STOP Trial"
    ],
    "hint": "TCD velocity >= 200 cm/s indicates severe intracranial arterial stenosis and high stroke risk requiring transfusion therapy.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-31",
    "chapterId": 16,
    "chapterTitle": "Cerebral Venous Thrombosis",
    "vignette": "A 28-year-old postpartum female presents with severe progressive headache, papilledema, and seizures. MRV reveals superior sagittal sinus thrombosis with a small hemorrhagic venous infarction in the right parietal lobe.",
    "question": "What is the recommended initial antithrombotic management for this patient?",
    "options": [
      {
        "id": "A",
        "text": "Full-dose therapeutic anticoagulation with LMWH or unfractionated Heparin, despite the presence of hemorrhagic transformation"
      },
      {
        "id": "B",
        "text": "Hold all anticoagulation due to the hemorrhagic transformation"
      },
      {
        "id": "C",
        "text": "Administer IV tPA systemically"
      },
      {
        "id": "D",
        "text": "Aspirin 325 mg daily alone"
      },
      {
        "id": "E",
        "text": "Emergent decompressive craniectomy only"
      }
    ],
    "correctOptionId": "A",
    "explanation": "AHA/ASA guidelines explicitly state that therapeutic anticoagulation (LMWH or IV unfractionated heparin) is the first-line treatment for Cerebral Venous Thrombosis (CVT), EVEN IN THE PRESENCE OF hemorrhagic transformation/infarction. Anticoagulation prevents thrombus propagation and restores venous drainage.",
    "keyTakeaway": "Therapeutic anticoagulation is FIRST-LINE for CVT, even if hemorrhagic transformation is present!",
    "tags": [
      "Cerebral Venous Thrombosis",
      "Anticoagulation",
      "Venous Stroke"
    ],
    "hint": "Venous hemorrhagic transformation is driven by outflow obstruction, which anticoagulation resolves.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-32",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 34-year-old female presents with sudden severe thunderclap headache, nausea, and diffuse segmental vasoconstriction of medium and large cerebral arteries on CTA. Brain MRI shows localized convexity subarachnoid hemorrhage. CSF analysis reveals normal protein and cell count without inflammatory markers.",
    "question": "What is the diagnosis and first-line treatment?",
    "options": [
      {
        "id": "A",
        "text": "Reversible Cerebral Vasoconstriction Syndrome (RCVS); Calcium Channel Blockers (Nimodipine/Verapamil) and remove triggering agents"
      },
      {
        "id": "B",
        "text": "Primary Angiitis of the CNS (PACNS); High-dose IV Methylprednisolone + Cyclophosphamide"
      },
      {
        "id": "C",
        "text": "Bacterial Meningitis; IV Ceftriaxone + Vancomycin"
      },
      {
        "id": "D",
        "text": "Temporal Arteritis; Oral Prednisone 60 mg daily"
      },
      {
        "id": "E",
        "text": "Moyamoya Disease; Surgical synangiosis"
      }
    ],
    "correctOptionId": "A",
    "explanation": "RCVS features thunderclap headaches, reversible multifocal cerebral arterial vasoconstriction, and normal CSF. Distinguished from PACNS (which has insidious onset, abnormal inflammatory CSF, and requires aggressive immunosuppression). RCVS is treated with CCBs (Verpamil/Nimodipine) and trigger avoidance (SSRIs, sympathomimetics).",
    "keyTakeaway": "RCVS = Thunderclap headache + Segmental arterial constriction + Normal CSF -> Treat with CCBs (vs PACNS which has abnormal CSF & requires steroids).",
    "tags": [
      "RCVS",
      "Vasculopathy",
      "Differential Diagnosis"
    ],
    "hint": "Normal CSF in a patient with thunderclap headache and reversible arterial spasm strongly favors RCVS over PACNS.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-33",
    "chapterId": 18,
    "chapterTitle": "Neuro-ICU & Hemodynamic Management",
    "vignette": "A 54-year-old male suffers a massive right MCA territory infarction with an initial NIHSS of 20. 36 hours after onset, he exhibits worsening lethargy and anisocoria (right pupil 5mm, sluggish). Head CT shows mass effect with 8mm leftward midline shift and uncal herniation.",
    "question": "Based on clinical trial meta-analyses (DECIMAL, DESTINY, HAMLET), what intervention significantly reduces mortality in malignant MCA infarction when performed within 48 hours?",
    "options": [
      {
        "id": "A",
        "text": "Decompressive hemicraniectomy"
      },
      {
        "id": "B",
        "text": "High-dose IV Dexamethasone"
      },
      {
        "id": "C",
        "text": "Hypothermia to 31 degrees C"
      },
      {
        "id": "D",
        "text": "Intracranial pressure monitoring alone without surgery"
      },
      {
        "id": "E",
        "text": "Immediate intra-arterial tPA infusion"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Surgical decompressive hemicraniectomy (bone flap >= 12 cm) performed within 48 hours of onset for malignant MCA infarction reduces mortality from 80% to 30% in patients aged <= 60 (DECIMAL, DESTINY, HAMLET trials). Steroids are ineffective and harmful in ischemic brain edema.",
    "keyTakeaway": "Decompressive Hemicraniectomy < 48 hours in malignant MCA stroke reduces mortality from 80% to 30%.",
    "tags": [
      "Malignant MCA",
      "Decompressive Hemicraniectomy",
      "Neuro-ICU"
    ],
    "hint": "Large surgical bone flap removal performed within 48 hours relieves life-threatening cerebral herniation.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-34",
    "chapterId": 19,
    "chapterTitle": "Secondary Prevention & Antithrombotics",
    "vignette": "A 65-year-old male experiences a minor ischemic stroke (NIHSS 2). Non-contrast CT is negative for hemorrhage. He presents 12 hours after symptom onset. He has no history of bleeding.",
    "question": "Based on the CHANCE and POINT trials, what is the recommended antiplatelet regimen and duration?",
    "options": [
      {
        "id": "A",
        "text": "Dual Antiplatelet Therapy (Aspirin + Clopidogrel) initiated within 24 hours and continued for 21 days, followed by monotherapy"
      },
      {
        "id": "B",
        "text": "Aspirin monotherapy indefinitely from day 1"
      },
      {
        "id": "C",
        "text": "Aspirin + Clopidogrel continued indefinitely for 1 year"
      },
      {
        "id": "D",
        "text": "Warfarin anticoagulation for 3 months"
      },
      {
        "id": "E",
        "text": "Clopidogrel + Ticagrelor for 90 days"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The CHANCE and POINT trials established that short-term Dual Antiplatelet Therapy (DAPT with Aspirin + Clopidogrel) for 21 days (initiated within 24 hours of high-risk TIA ABCD2 >= 4 or minor stroke NIHSS <= 3) significantly reduces 90-day recurrent ischemic stroke compared to Aspirin alone. Continuing DAPT beyond 21-90 days increases bleeding without additional ischemic benefit.",
    "keyTakeaway": "CHANCE/POINT: DAPT (Aspirin + Clopidogrel) for 21 DAYS in minor stroke (NIHSS <= 3) or high-risk TIA (ABCD2 >= 4).",
    "tags": [
      "Secondary Prevention",
      "Antiplatelet Therapy",
      "CHANCE/POINT Trials"
    ],
    "hint": "Short-term dual antiplatelet window is strictly recommended for 21 days following minor non-cardioembolic stroke.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-35",
    "chapterId": 20,
    "chapterTitle": "Rehabilitation & Prognostication",
    "vignette": "A stroke survivor is evaluated at 90 days post-stroke. He is able to walk unassisted and look after his own affairs without assistance, but has mild residual right hand clumsiness that prevents him from playing the guitar as he did prior to the stroke.",
    "question": "What is his score on the Modified Rankin Scale (mRS)?",
    "options": [
      {
        "id": "A",
        "text": "mRS 1 (Slight disability; unable to carry out all previous activities, but able to look after own affairs without assistance)"
      },
      {
        "id": "B",
        "text": "mRS 0 (No symptoms at all)"
      },
      {
        "id": "C",
        "text": "mRS 2 (Slight disability; unable to look after own affairs)"
      },
      {
        "id": "D",
        "text": "mRS 3 (Moderate disability; requires some help, but able to walk unassisted)"
      },
      {
        "id": "E",
        "text": "mRS 4 (Moderately severe disability; unable to walk unassisted)"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Modified Rankin Scale (mRS) definitions: mRS 0 = No symptoms; mRS 1 = No significant disability despite symptoms (able to carry out all usual duties and activities is mRS 0, unable to carry out all previous activities but independent in daily affairs is mRS 1); mRS 2 = Slight disability (independent in daily living, cannot carry out all previous activities); mRS 3 = Moderate disability (requires help, but walks unassisted); mRS 4 = Moderately severe disability (unable to walk without assistance); mRS 5 = Severe disability (bedridden); mRS 6 = Dead.",
    "keyTakeaway": "mRS 1 = Symptoms present, unable to carry out all previous activities, but fully independent in self-care.",
    "tags": [
      "Rehabilitation",
      "mRS Scoring",
      "Prognosis"
    ],
    "hint": "Independent in daily living and self-care, but unable to resume all pre-stroke complex activities corresponds to mRS 1.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-36",
    "chapterId": 21,
    "chapterTitle": "Landmark Clinical Trials Master Summary",
    "vignette": "A 68-year-old non-cardioembolic ischemic stroke patient with baseline LDL cholesterol of 135 mg/dL is started on Atorvastatin 80 mg daily.",
    "question": "Based on the SPARCL trial, what was the primary finding regarding high-dose statin therapy post-stroke?",
    "options": [
      {
        "id": "A",
        "text": "Atorvastatin 80 mg daily significantly reduced recurrent stroke and major cardiovascular events in patients without known CHD"
      },
      {
        "id": "B",
        "text": "Statins are only beneficial in patients with history of coronary artery disease"
      },
      {
        "id": "C",
        "text": "Statin therapy increases ischemic stroke recurrence"
      },
      {
        "id": "D",
        "text": "Target LDL should be kept above 130 mg/dL"
      },
      {
        "id": "E",
        "text": "Pravastatin 20 mg is superior to Atorvastatin 80 mg"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The SPARCL trial proved that high-dose Atorvastatin (80 mg daily) significantly reduced the absolute risk of recurrent stroke (16% RRR) in patients with recent ischemic stroke or TIA and no known coronary heart disease. Note: target LDL is < 70 mg/dL (or < 55 mg/dL in high-risk patients).",
    "keyTakeaway": "SPARCL trial: High-intensity statin (Atorvastatin 80mg) reduces recurrent stroke in non-cardioembolic stroke.",
    "tags": [
      "Landmark Trials",
      "SPARCL Trial",
      "Statin Therapy"
    ],
    "hint": "The landmark trial that established high-intensity statin therapy for secondary stroke prevention.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-img-1",
    "chapterId": 2,
    "chapterTitle": "Initial Stroke Evaluation & Thrombolysis",
    "vignette": "A 66-year-old male presents 45 minutes after acute right-sided weakness and expressive aphasia. Initial non-contrast head CT is performed immediately upon ED arrival and is shown below.",
    "question": "What radiological sign is present in the right Sylvian fissure, and what is its clinical significance?",
    "options": [
      {
        "id": "A",
        "text": "Hyperdense MCA Sign; indicates acute intraluminal thrombus in the M1 segment"
      },
      {
        "id": "B",
        "text": "Empty Delta Sign; indicates superior sagittal sinus thrombosis"
      },
      {
        "id": "C",
        "text": "Spot Sign; indicates active intracerebral bleeding"
      },
      {
        "id": "D",
        "text": "Crescent Sign; indicates carotid dissection"
      },
      {
        "id": "E",
        "text": "Normal falx cerebri calcification"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The Hyperdense MCA Sign (or Dense Vessel Sign) on non-contrast CT represents acute thromboembolism in the M1 MCA segment. It has > 95% specificity for LVO and predicts poor response to IV tPA alone, strongly supporting endovascular thrombectomy evaluation.",
    "keyTakeaway": "Hyperdense MCA Sign on non-contrast CT = acute M1 occlusion -> high risk for LVO & thrombectomy candidate.",
    "tags": [
      "Neuroimaging",
      "Dense MCA Sign",
      "Acute CT"
    ],
    "hint": "Focus on the high-attenuation bright vessel traveling along the MCA pathway on non-contrast CT.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/ct_dense_mca.jpg",
    "imageCaption": "Non-Contrast Head CT: Hyperdense vessel sign in the right middle cerebral artery (M1 segment)."
  },
  {
    "id": "q-img-2",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 74-year-old female presents 10 hours after last seen normal with dense left hemiplegia. CTA demonstrates a right M1 MCA occlusion. Automated CT Perfusion (CTP) map is shown below.",
    "question": "Based on the CTP mismatch finding (small core, large penumbra), what is the indicated management per DAWN / DEFUSE 3 guidelines?",
    "options": [
      {
        "id": "A",
        "text": "Proceed with mechanical thrombectomy"
      },
      {
        "id": "B",
        "text": "Administer IV Alteplase only"
      },
      {
        "id": "C",
        "text": "Initiate IV Heparin infusion"
      },
      {
        "id": "D",
        "text": "Perform emergent carotid endarterectomy"
      },
      {
        "id": "E",
        "text": "Decompressive hemicraniectomy within 24 hours"
      }
    ],
    "correctOptionId": "A",
    "explanation": "DAWN and DEFUSE 3 established that in the 6-24 hour extended window, mechanical thrombectomy significantly improves functional independence in LVO stroke patients with favorable perfusion mismatch (small ischemic core CBF < 30% vs large hypoperfused penumbra Tmax > 6s).",
    "keyTakeaway": "CT Perfusion Core-Penumbra mismatch in 6-24h window -> Mechanical Thrombectomy (DAWN/DEFUSE 3).",
    "tags": [
      "Neuroimaging",
      "CT Perfusion",
      "Thrombectomy"
    ],
    "hint": "Analyze the size difference between the red ischemic core and the larger green hypoperfused penumbral tissue.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/ct_perfusion_map.jpg",
    "imageCaption": "CT Perfusion Map: Ischemic Core (red) vs Penumbra Tmax Delay (green/yellow)."
  },
  {
    "id": "q-img-3",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 68-year-old male presents with acute left basal ganglia hemorrhage and rapid neurological decline. Stat CTA head is performed and shown below.",
    "question": "What key radiological finding is identified by the arrow within the hematoma, and what does it predict?",
    "options": [
      {
        "id": "A",
        "text": "Spot Sign; indicates active contrast extravasation and predicts high risk of hematoma expansion"
      },
      {
        "id": "B",
        "text": "Empty Delta Sign; indicates venous sinus thrombosis"
      },
      {
        "id": "C",
        "text": "Puff of Smoke; indicates Moyamoya vasculopathy"
      },
      {
        "id": "D",
        "text": "String of Beads; indicates Fibromuscular Dysplasia"
      },
      {
        "id": "E",
        "text": "Asymptomatic choroid plexus calcification"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The CTA Spot Sign is defined as one or more tiny high-attenuation foci of contrast extravasation within an acute ICH. It has > 80% sensitivity for predicting hematoma expansion and correlated with 30-day mortality.",
    "keyTakeaway": "CTA Spot Sign = Active contrast extravasation in ICH -> Predicts rapid hematoma expansion.",
    "tags": [
      "Neuroimaging",
      "Spot Sign",
      "Intracranial Hemorrhage"
    ],
    "hint": "Identify the bright spot of contrast extravasation inside the dark dense blood collection.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/cta_spot_sign.jpg",
    "imageCaption": "CTA Head: Basal ganglia ICH with positive CTA Spot Sign (contrast extravasation)."
  },
  {
    "id": "q-img-4",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 12-year-old female presents with recurrent transient episodes of right arm weakness and speech arrest during crying. Catheter digital subtraction angiography (DSA) is shown below.",
    "question": "What classic angiographic pattern is demonstrated in the basal ganglia region?",
    "options": [
      {
        "id": "A",
        "text": "Moyamoya disease; bilateral distal ICA steno-occlusion with 'puff of smoke' collateral network"
      },
      {
        "id": "B",
        "text": "Fibromuscular Dysplasia; 'string of beads' appearance"
      },
      {
        "id": "C",
        "text": "Arteriovenous Malformation; high-flow nidus"
      },
      {
        "id": "D",
        "text": "Primary Angiitis of the CNS; multifocal beaded stenoses"
      },
      {
        "id": "E",
        "text": "Internal carotid artery dissection"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Moyamoya Disease is characterized on conventional cerebral angiography by progressive occlusion of the internal carotid artery bifurcations and proximal ACA/MCA, with a hazy, net-like proliferation of lenticulostriate collaterals creating a 'puff of smoke' (moyamoya in Japanese).",
    "keyTakeaway": "Moyamoya Angiography = Bilateral ICA bifurcation occlusion + 'Puff of smoke' basal lenticulostriate collaterals.",
    "tags": [
      "Neuroimaging",
      "Moyamoya",
      "Angiography"
    ],
    "hint": "Look for the dense cloud or hazy net of collateral vessels supplying the basal brain region.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/mra_moyamoya.jpg",
    "imageCaption": "Cerebral Angiogram (DSA): Distal ICA occlusion with 'Puff of Smoke' collaterals."
  }
];
