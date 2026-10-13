import { PracticeQuestion } from '../types';

const rawQuestionsData: PracticeQuestion[] = [
  {
    "id": "q-8",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 64-year-old female presents with sudden left leg weakness greater than left arm weakness, accompanied by urinary incontinence and abulia (apathy/lack of initiative). MRI demonstrates an acute ischemic infarction.",
    "question": "Which vascular territory is affected in this patient?",
    "options": [
      {
        "id": "A",
        "text": "Right Posterior Cerebral Artery (PCA)"
      },
      {
        "id": "B",
        "text": "Anterior Inferior Cerebellar Artery (AICA)"
      },
      {
        "id": "C",
        "text": "Right Anterior Cerebral Artery (ACA)"
      },
      {
        "id": "D",
        "text": "Right Middle Cerebral Artery (MCA) M1 segment"
      },
      {
        "id": "E",
        "text": "Posterior Inferior Cerebellar Artery (PICA)"
      }
    ],
    "correctOptionId": "C",
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
        "text": "Ophthalmic Artery"
      },
      {
        "id": "C",
        "text": "Superior Cerebellar Artery"
      },
      {
        "id": "D",
        "text": "Middle Cerebral Artery (MCA) inferior division"
      },
      {
        "id": "E",
        "text": "Anterior Choroidal Artery"
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
    "id": "q-11",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 60-year-old female presents with acute contralateral hemiparesis, hemisensory loss, and homonymous hemianopia, accompanied by ipsilateral Horner syndrome. MRA reveals occlusion of a deep branch arising from the internal carotid artery before its bifurcation.",
    "question": "Which vascular territory is involved in this classic stroke syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Thalamoperforating Artery"
      },
      {
        "id": "B",
        "text": "Anterior Choroidal Artery (AChA)"
      },
      {
        "id": "C",
        "text": "Ophthalmic Artery"
      },
      {
        "id": "D",
        "text": "Recurrent Artery of Heubner"
      },
      {
        "id": "E",
        "text": "Posterior Communicating Artery (PCoA)"
      }
    ],
    "correctOptionId": "B",
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
    "id": "q-114",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 58-year-old male presents with acute left facial and arm weakness with severe dysarthria and abulia. MRI reveals an acute infarction of the anterior caudate head and anterior limb of the internal capsule.",
    "question": "Which penetrating vessel occlusion causes this clinical syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Posterior Communicating Artery"
      },
      {
        "id": "B",
        "text": "Lenticulostriate artery arising from M1 MCA"
      },
      {
        "id": "C",
        "text": "Thalamoperforating artery from P1 PCA"
      },
      {
        "id": "D",
        "text": "Anterior Choroidal Artery"
      },
      {
        "id": "E",
        "text": "Recurrent Artery of Heubner (medial striate artery arising from A1/A2 ACA)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "The Recurrent Artery of Heubner (medial striate artery) arises from the A1/A2 ACA junction and supplies the anterior caudate head, anterior limb of internal capsule, and anterior putamen. Infarction causes contralateral face/arm hemiparesis, dysarthria, and abulia/transcortical motor aphasia.",
    "keyTakeaway": "Recurrent Artery of Heubner stroke = Caudate head & anterior capsular infarct -> face/arm hemiparesis + abulia + dysarthria.",
    "tags": [
      "Neuroanatomy",
      "Heubner Artery",
      "ACA Penetrating"
    ],
    "hint": "Medial striate artery supplying the caudate head and anterior internal capsule.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-115",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 67-year-old male presents with acute right facial and arm hemiparesis and Broca (expressive) non-fluent aphasia. Leg strength and visual fields are completely normal.",
    "question": "Which arterial division is occluded?",
    "options": [
      {
        "id": "A",
        "text": "Left Anterior Cerebral Artery"
      },
      {
        "id": "B",
        "text": "Left Anterior Choroidal Artery"
      },
      {
        "id": "C",
        "text": "Superior division of the left Middle Cerebral Artery (MCA)"
      },
      {
        "id": "D",
        "text": "Inferior division of the left MCA"
      },
      {
        "id": "E",
        "text": "Main trunk M1 MCA"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Superior division MCA strokes supply the frontal and anterior parietal cortices (including Broca's area and precentral motor cortex for face/arm). It causes contralateral face/arm hemiparesis and expressive (Broca) aphasia (if left dominant), sparing leg motor cortex (ACA) and temporal visual/sensory cortex.",
    "keyTakeaway": "Left MCA Superior Division stroke = Contralateral face/arm hemiparesis + Broca's expressive aphasia.",
    "tags": [
      "Neuroanatomy",
      "MCA Superior Division",
      "Broca Aphasia"
    ],
    "hint": "Frontal cortex involvement causing motor weakness of face/arm and non-fluent speech output.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-116",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 71-year-old female presents with fluent, paraphasic speech with severely impaired auditory comprehension (Wernicke aphasia) and a right superior quadrantanopia ('pie in the sky' visual field defect). Motor strength in all four extremities is completely normal (5/5).",
    "question": "Which vascular territory is affected?",
    "options": [
      {
        "id": "A",
        "text": "Superior division of the left MCA"
      },
      {
        "id": "B",
        "text": "Recurrent Artery of Heubner"
      },
      {
        "id": "C",
        "text": "Left Posterior Cerebral Artery"
      },
      {
        "id": "D",
        "text": "Left Anterior Cerebral Artery"
      },
      {
        "id": "E",
        "text": "Inferior division of the left Middle Cerebral Artery (MCA)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Inferior division MCA strokes supply the temporal and inferior parietal cortices (including Wernicke's auditory area and Meyer's loop optic radiation). It causes Wernicke aphasia and superior quadrantanopia ('pie-in-the-sky'), while MOTOR STRENGTH IS SPARED.",
    "keyTakeaway": "Left MCA Inferior Division stroke = Wernicke aphasia + Superior quadrantanopia (Motor strength is SPARED).",
    "tags": [
      "Neuroanatomy",
      "MCA Inferior Division",
      "Wernicke Aphasia"
    ],
    "hint": "Temporal lobe involvement affecting auditory language comprehension and optic radiations without motor weakness.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-117",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 54-year-old male presents with acute vertigo, ipsilateral ataxia, ipsilateral facial numbness, ipsilateral lower motor neuron facial paralysis, and ipsilateral SUDDEN SENSORINEURAL HEARING LOSS. Pain and temperature loss is noted on the contralateral body.",
    "question": "Infarction of which cerebellar artery accounts for the presence of ipsilateral hearing loss?",
    "options": [
      {
        "id": "A",
        "text": "Anterior Spinal Artery (ASA)"
      },
      {
        "id": "B",
        "text": "Posterior Cerebral Artery (PCA)"
      },
      {
        "id": "C",
        "text": "Superior Cerebellar Artery (SCA)"
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
    "correctOptionId": "E",
    "explanation": "AICA supplies the lateral lower pons and gives off the internal auditory (labyrinthine) artery supplying the inner ear. AICA stroke causes lateral pontine syndrome: ipsilateral facial weakness, ataxia, Horner's, contralateral body sensory loss AND IPSILATERAL HEARING LOSS/TINNITUS. Hearing loss distinguishes AICA from PICA stroke!",
    "keyTakeaway": "AICA stroke = Lateral pontine syndrome + IPSILATERAL HEARING LOSS (labyrinthine artery branch).",
    "tags": [
      "Neuroanatomy",
      "AICA Stroke",
      "Hearing Loss"
    ],
    "hint": "Identify the cerebellar artery that gives origin to the internal auditory (labyrinthine) artery supplying the cochlea.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-118",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 73-year-old female presents with sudden stupor/coma, bilateral ptosis, and vertical gaze palsy. MRI brain shows acute bilateral paramedian thalamic infarctions with extension into the rostral midbrain.",
    "question": "What anatomical vascular variant accounts for bilateral thalamic infarction from a single arterial occlusion?",
    "options": [
      {
        "id": "A",
        "text": "Duplicated Anterior Communicating Artery"
      },
      {
        "id": "B",
        "text": "Artery of Percheron (solitary thalmo-perforating trunk arising from one P1 PCA)"
      },
      {
        "id": "C",
        "text": "Aneurysm of Vein of Galen"
      },
      {
        "id": "D",
        "text": "Persistent Trigeminal Artery"
      },
      {
        "id": "E",
        "text": "Bilateral Recurrent Artery of Heubner"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The Artery of Percheron is a rare anatomical variant where a SINGLE solitary paramedian artery arises from one P1 PCA segment to supply BILATERAL paramedian thalami and rostral midbrain. Occlusion causes sudden coma, vertical gaze palsy, and memory impairment.",
    "keyTakeaway": "Artery of Percheron stroke = Solitary P1 branch -> Bilateral paramedian thalamic infarcts -> Sudden coma & vertical gaze palsy.",
    "tags": [
      "Neuroanatomy",
      "Artery of Percheron",
      "Thalamic Stroke"
    ],
    "hint": "Single paramedian artery trunk arising from one PCA supplying both sides of the central thalamus.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-119",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 46-year-old female presents with sudden severe headache and a painful left ptosis, dilated sluggish left pupil (8mm), and left eye abducted and depressed ('down and out').",
    "question": "An unruptured or expanding aneurysm at which arterial junction is the classic cause of pupil-involving Third Nerve (CN III) Palsy?",
    "options": [
      {
        "id": "A",
        "text": "PICA-Vertebral junction"
      },
      {
        "id": "B",
        "text": "Basilar Tip"
      },
      {
        "id": "C",
        "text": "Internal Carotid Artery - Posterior Communicating Artery (ICA-PCoA) junction"
      },
      {
        "id": "D",
        "text": "Anterior Communicating Artery (ACoA)"
      },
      {
        "id": "E",
        "text": "MCA bifurcation"
      }
    ],
    "correctOptionId": "C",
    "explanation": "An expanding aneurysm at the ICA-PCoA junction compresses the adjacent oculomotor nerve (CN III). Because parasympathetic pupilloconstrictor fibers travel on the outer superficial layer of CN III, extrinsic aneurysmal compression causes early PUPIL DILATION (mydriasis) alongside ptosis and 'down-and-out' eye position. This is a medical emergency requiring stat CTA/MRA!",
    "keyTakeaway": "ICA-PCoA Aneurysm = Painful Third Nerve (CN III) palsy WITH PUPIL DILATION (mydriasis). STAT imaging!",
    "tags": [
      "Neuroanatomy",
      "PCoA Aneurysm",
      "CN III Palsy"
    ],
    "hint": "Superficial parasympathetic pupillary fibers are compressed first by an expanding extrinsic berry aneurysm.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-120",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 66-year-old male presents with acute right-sided hemiparesis (sparing the face), loss of vibration and position sense on the right body, and left-sided tongue weakness (tongue deviates to the left when protruded).",
    "question": "What is the diagnosis and underlying arterial occlusion?",
    "options": [
      {
        "id": "A",
        "text": "Medial Medullary Syndrome (Dejerine Syndrome); Anterior Spinal Artery (ASA) or Vertebral Artery branch occlusion"
      },
      {
        "id": "B",
        "text": "Claude Syndrome; PCA perforator"
      },
      {
        "id": "C",
        "text": "Millard-Gubler Syndrome; Basilar paramedian branch"
      },
      {
        "id": "D",
        "text": "Lateral Medullary Syndrome (Wallenberg); PICA occlusion"
      },
      {
        "id": "E",
        "text": "Weber Syndrome; PCA occlusion"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Medial Medullary Syndrome (Dejerine Syndrome) is caused by occlusion of the Anterior Spinal Artery (ASA) or paramedian vertebral branches. Triad: 1) Ipsilateral hypoglossal CN XII palsy (tongue deviates TOWARD lesion), 2) Contralateral corticospinal hemiparesis (sparing face), and 3) Contralateral loss of posterior column vibration/proprioception (medial lemniscus).",
    "keyTakeaway": "Medial Medullary Syndrome (Dejerine) = Ipsilateral CN XII palsy (tongue to lesion) + Contralateral body hemiparesis + Vibration loss (ASA).",
    "tags": [
      "Neuroanatomy",
      "Medial Medullary Syndrome",
      "Dejerine"
    ],
    "hint": "Hypoglossal nerve weakness causing tongue deviation toward the side of the brainstem lesion combined with cross body hemiparesis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-121",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "An 82-year-old male presents with sudden left-sided severe burning dysesthesias and pain triggered by light touch (allodynia). 3 months prior, he had a small thalamic lacunar stroke in the right ventral posterolateral (VPL) nucleus.",
    "question": "What central pain syndrome does this describe?",
    "options": [
      {
        "id": "A",
        "text": "Complex Regional Pain Syndrome"
      },
      {
        "id": "B",
        "text": "Phantom Limb Pain"
      },
      {
        "id": "C",
        "text": "Central Post-Stroke Pain (Dejerine-Roussy Syndrome)"
      },
      {
        "id": "D",
        "text": "Thalamic Astasia"
      },
      {
        "id": "E",
        "text": "Trigeminal Neuralgia"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Central Post-Stroke Pain Syndrome (Dejerine-Roussy Syndrome) results from ischemic or hemorrhagic lesions of the sensory thalamus (VPL/VPM nuclei or spinothalamic tracts). It presents weeks-to-months post-stroke with severe, intractable burning neuropathic pain and allodynia on the contralateral side. Treated with Amitriptyline, Gabapentin, or Pregabalin.",
    "keyTakeaway": "Dejerine-Roussy Syndrome = Thalamic VPL stroke -> Delayed contralateral burning neuropathic pain & allodynia.",
    "tags": [
      "Neuroanatomy",
      "Thalamic Pain",
      "Dejerine-Roussy"
    ],
    "hint": "Thalamic VPL sensory nucleus injury causing delayed intractable burning hemibody pain.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-122",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A CTA head performed on a 50-year-old male shows that both Posterior Cerebral Arteries (PCAs) originate directly from the Internal Carotid Arteries bilaterally, with hypoplastic P1 segments from the basilar tip.",
    "question": "What is the prevalence and significance of a 'Fetal Origin' of the Posterior Cerebral Artery?",
    "options": [
      {
        "id": "A",
        "text": "Fetal PCA eliminates stroke risk in PCA territory"
      },
      {
        "id": "B",
        "text": "Fetal PCA is a vascular malformation requiring surgical coiling"
      },
      {
        "id": "C",
        "text": "Fetal PCA origin occurs in approx 20% of individuals; PCA territory relies on anterior ICA circulation rather than vertebrobasilar system"
      },
      {
        "id": "D",
        "text": "Fetal PCA causes mandatory congenital blindness"
      },
      {
        "id": "E",
        "text": "Fetal PCA is only present in pediatric patients"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Fetal origin of the PCA occurs in 15-20% of people (unilateral or bilateral). In this variant, the PCA arises primarily from the Internal Carotid Artery via a robust PCoA, with an absent/hypoplastic P1 segment. Consequently, ICA emboli or carotid stenosis can cause PCA territory occipital strokes!",
    "keyTakeaway": "Fetal PCA (15-20% population) = PCA supplied by ICA -> Carotid emboli can cause PCA occipital strokes.",
    "tags": [
      "Neuroanatomy",
      "Fetal PCA",
      "Anatomical Variants"
    ],
    "hint": "Consider how carotid artery stenosis can directly embolize into the occipital visual cortex in this variant.",
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
        "text": "Bilateral occipital lobes"
      },
      {
        "id": "B",
        "text": "Right non-dominant inferior parietal lobule / temporal-parietal junction"
      },
      {
        "id": "C",
        "text": "Right cerebellar hemisphere"
      },
      {
        "id": "D",
        "text": "Left dominant parietal lobe"
      },
      {
        "id": "E",
        "text": "Left anterior cingulate cortex"
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
    "id": "q-123",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 65-year-old female presents with acute inability to perform simple calculations (acalculia), inability to write (agraphia), inability to distinguish individual fingers (finger agnosia), and confusion between left and right sides of her body.",
    "question": "What is this classic clinical tetrad called, and where is the lesion located?",
    "options": [
      {
        "id": "A",
        "text": "Gerstmann Syndrome; Left dominant inferior parietal lobule (angular gyrus)"
      },
      {
        "id": "B",
        "text": "Korsakoff Syndrome; Mammillary bodies"
      },
      {
        "id": "C",
        "text": "Anton Syndrome; Bilateral calcarine cortex"
      },
      {
        "id": "D",
        "text": "Balint Syndrome; Bilateral parieto-occipital lobes"
      },
      {
        "id": "E",
        "text": "Alien Hand Syndrome; Corpus callosum"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Gerstmann Syndrome is characterized by the classic tetrad of: 1) Acalculia, 2) Agraphia, 3) Finger agnosia, and 4) Right-left disorientation. It is caused by a lesion in the dominant (usually left) inferior parietal lobule, specifically involving the angular gyrus (left MCA territory).",
    "keyTakeaway": "Gerstmann Syndrome = Acalculia + Agraphia + Finger Agnosia + Right-Left Disorientation (Left Angular Gyrus).",
    "tags": [
      "Stroke Syndromes",
      "Gerstmann Syndrome",
      "Dominant Parietal"
    ],
    "hint": "Tetrad involving calculation, writing, finger identification, and lateral orientation mapped to dominant angular gyrus.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-124",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 76-year-old male with bilateral PCA cortical infarctions denies having any vision impairment, despite bumping into walls and failing bed-side finger testing. When asked what the examiner is wearing, he confabulates detailed descriptions of clothing.",
    "question": "What is the name of this syndrome involving cortical blindness with visual anosognosia?",
    "options": [
      {
        "id": "A",
        "text": "Anton Syndrome (visual anosognosia in cortical blindness)"
      },
      {
        "id": "B",
        "text": "Fregoli Syndrome"
      },
      {
        "id": "C",
        "text": "Capgras Syndrome"
      },
      {
        "id": "D",
        "text": "Charles Bonnet Syndrome"
      },
      {
        "id": "E",
        "text": "Balint Syndrome"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Anton Syndrome (or Anton-Babinski syndrome) is visual anosognosia (denial of blindness) in patients with cortical blindness due to bilateral PCA calcarine cortex infarctions. Patients adamantly insist they can see and confabulate visual surroundings.",
    "keyTakeaway": "Anton Syndrome = Cortical blindness + Visual Anosognosia (denial of blindness with confabulation) from bilateral PCA strokes.",
    "tags": [
      "Stroke Syndromes",
      "Anton Syndrome",
      "Cortical Blindness"
    ],
    "hint": "Unawareness and denial of blindness following bilateral visual cortex infarctions.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-125",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "An 80-year-old male suffers bilateral watershed parieto-occipital infarctions following severe intraoperative hypotension. On exam, he cannot reach accurately for objects under visual guidance (optic ataxia), cannot initiate voluntary eye movements to visual targets (ocular apraxia), and can only perceive one single object in his visual field at a time (simultanagnosia).",
    "question": "What is this triad of clinical signs called?",
    "options": [
      {
        "id": "A",
        "text": "Anton Syndrome"
      },
      {
        "id": "B",
        "text": "Wernicke-Korsakoff Syndrome"
      },
      {
        "id": "C",
        "text": "Kluever-Bucy Syndrome"
      },
      {
        "id": "D",
        "text": "Gerstmann Syndrome"
      },
      {
        "id": "E",
        "text": "Balint Syndrome"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Balint Syndrome is caused by bilateral parieto-occipital watershed infarctions (bilateral MCA-PCA borderzone). Triad: 1) Simultanagnosia (inability to perceive more than one object at once), 2) Optic ataxia (impaired visual-guided reaching), and 3) Ocular apraxia (inability to direct voluntary saccades).",
    "keyTakeaway": "Balint Syndrome Triad = Simultanagnosia + Optic Ataxia + Ocular Apraxia (Bilateral parieto-occipital watershed strokes).",
    "tags": [
      "Stroke Syndromes",
      "Balint Syndrome",
      "Bilateral Watershed"
    ],
    "hint": "Triad of visual-spatial processing deficits resulting from bilateral borderzone parieto-occipital cortical injury.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-126",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 62-year-old male presents with non-fluent, effortful speech. Remarkably, when asked to repeat complex sentences ('No ifs, ands, or buts'), his REPETITION IS ENTIRELY INTACT and effortless. Auditory comprehension is normal.",
    "question": "What type of aphasia does this describe?",
    "options": [
      {
        "id": "A",
        "text": "Conduction Aphasia"
      },
      {
        "id": "B",
        "text": "Wernicke Aphasia"
      },
      {
        "id": "C",
        "text": "Transcortical Sensory Aphasia"
      },
      {
        "id": "D",
        "text": "Transcortical Motor Aphasia"
      },
      {
        "id": "E",
        "text": "Broca Aphasia"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Transcortical Motor Aphasia is characterized by non-fluent speech, preserved comprehension, and INTACT REPETITION. It is caused by lesions in the left frontal supplementary motor area or anterior watershed zone (ACA-MCA borderzone), sparing Broca's area itself and its arcuate fasciculus connection.",
    "keyTakeaway": "Transcortical Motor Aphasia = Non-fluent speech + Good comprehension + INTACT REPETITION (Left ACA-MCA watershed).",
    "tags": [
      "Aphasia",
      "Transcortical Motor",
      "Cortical Syndromes"
    ],
    "hint": "Key diagnostic clue: repetition is strikingly preserved compared to spontaneous non-fluent speech output.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-127",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 70-year-old female speaks fluently with paraphasias, but has severe deficit in understanding spoken language. When asked to repeat 'The cat sat on the mat', she repeats the sentence perfectly without hesitation.",
    "question": "What type of aphasia is present?",
    "options": [
      {
        "id": "A",
        "text": "Wernicke Aphasia"
      },
      {
        "id": "B",
        "text": "Global Aphasia"
      },
      {
        "id": "C",
        "text": "Conduction Aphasia"
      },
      {
        "id": "D",
        "text": "Broca Aphasia"
      },
      {
        "id": "E",
        "text": "Transcortical Sensory Aphasia"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Transcortical Sensory Aphasia features fluent speech, severely impaired comprehension, but INTACT REPETITION. It is caused by lesions in the left posterior parieto-temporal watershed (MCA-PCA borderzone), sparing Wernicke's area itself.",
    "keyTakeaway": "Transcortical Sensory Aphasia = Fluent speech + Poor comprehension + INTACT REPETITION (Left MCA-PCA watershed).",
    "tags": [
      "Aphasia",
      "Transcortical Sensory",
      "Watershed"
    ],
    "hint": "Fluent paraphasic speech with poor comprehension but remarkably preserved repetition.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-128",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 59-year-old male has fluent spontaneous speech and intact auditory comprehension. However, when asked to repeat sentences, he makes repeated phonemic paraphasic errors and CANNOT REPEAT words or sentences.",
    "question": "What is the diagnosis and anatomical site of lesion?",
    "options": [
      {
        "id": "A",
        "text": "Broca Aphasia; Left inferior frontal gyrus"
      },
      {
        "id": "B",
        "text": "Global Aphasia; Total MCA territory"
      },
      {
        "id": "C",
        "text": "Wernicke Aphasia; Left superior temporal gyrus"
      },
      {
        "id": "D",
        "text": "Conduction Aphasia; Left Arcuate Fasciculus / supramarginal gyrus"
      },
      {
        "id": "E",
        "text": "Transcortical Motor Aphasia; Supplementary motor area"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Conduction Aphasia is characterized by fluent speech, intact comprehension, but SEVERELY IMPAIRED REPETITION with frequent phonemic paraphasias. It is caused by damage to the arcuate fasciculus or supramarginal gyrus (connecting Wernicke's and Broca's areas).",
    "keyTakeaway": "Conduction Aphasia = Fluent speech + Good comprehension + SEVERELY IMPAIRED REPETITION (Arcuate Fasciculus).",
    "tags": [
      "Aphasia",
      "Conduction Aphasia",
      "Arcuate Fasciculus"
    ],
    "hint": "Pathognomonic breakdown in repetition despite preserved comprehension and fluent speech.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-129",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "An 82-year-old male presents with severe stupor, fluctuating consciousness, vertical gaze palsy, pupillary abnormalities, and visual hallucinations following acute embolic occlusion of the distal basilar tip.",
    "question": "What is this classic posterior circulation stroke syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Top-of-the-Basilar Syndrome"
      },
      {
        "id": "B",
        "text": "Locked-in Syndrome"
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
        "text": "Wallenberg Syndrome"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Top-of-the-Basilar Syndrome results from embolic occlusion of the distal basilar artery tip. It causes ischemia to the rostral midbrain, thalami, and occipital/temporal lobes. Features: somnolence/coma, vertical gaze palsy, pupillary abnormalities, visual hallucinations, and cortical blindness.",
    "keyTakeaway": "Top-of-the-Basilar Syndrome = Distal basilar tip embolism -> Coma + Vertical gaze palsy + Pupillary abnormalities + Hallucinations.",
    "tags": [
      "Posterior Circulation",
      "Top of Basilar",
      "Midbrain Stroke"
    ],
    "hint": "Distal basilar artery bifurcation embolus affecting rostral midbrain, thalami, and visual cortices.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-130",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 68-year-old male undergoes open aortic valve replacement complicated by intraoperative hypotension (MAP 45 mmHg for 30 minutes). Postoperatively, he exhibits bilateral proximal arm and shoulder weakness, while strength in his hands and legs is completely normal (5/5).",
    "question": "What is the clinical syndrome and vascular mechanism?",
    "options": [
      {
        "id": "A",
        "text": "Bilateral radial nerve palsy"
      },
      {
        "id": "B",
        "text": "Cervical spinal cord transection"
      },
      {
        "id": "C",
        "text": "Man-in-a-barrel Syndrome; Bilateral anterior watershed (ACA-MCA borderzone) ischemic infarction"
      },
      {
        "id": "D",
        "text": "Brachial plexus avulsion bilaterally"
      },
      {
        "id": "E",
        "text": "Guillain-Barre Syndrome"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Man-in-a-Barrel Syndrome (brachial bibrachial paresis) is caused by systemic hypotension leading to bilateral anterior watershed (ACA-MCA borderzone) cortical infarctions. The homunculus region for proximal arm/shoulder motor control lies in this vulnerable watershed zone.",
    "keyTakeaway": "Man-in-a-Barrel Syndrome = Proximal shoulder/arm weakness (hands/legs spared) from bilateral ACA-MCA watershed strokes.",
    "tags": [
      "Watershed Stroke",
      "Hypotension",
      "Man in a Barrel"
    ],
    "hint": "Hypotension causing ischemic injury to the cortical motor representation of the proximal upper extremities.",
    "source": "Past Board Exam"
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
        "text": "Millard-Gubler Syndrome; Basilar artery paramedian branch occlusion"
      },
      {
        "id": "B",
        "text": "Claude Syndrome; PCA penetrating artery occlusion"
      },
      {
        "id": "C",
        "text": "Wallenberg Syndrome (Lateral Medullary Syndrome); PICA or Vertebral Artery occlusion"
      },
      {
        "id": "D",
        "text": "Weber Syndrome; P1 PCA occlusion"
      },
      {
        "id": "E",
        "text": "Dejerine Syndrome (Medial Medullary Syndrome); Anterior Spinal Artery occlusion"
      }
    ],
    "correctOptionId": "C",
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
        "text": "Parinaud Syndrome"
      },
      {
        "id": "B",
        "text": "Wallenberg Syndrome"
      },
      {
        "id": "C",
        "text": "Benedikt Syndrome"
      },
      {
        "id": "D",
        "text": "Weber Syndrome"
      },
      {
        "id": "E",
        "text": "Claude Syndrome"
      }
    ],
    "correctOptionId": "D",
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
        "text": "Dejerine Syndrome"
      },
      {
        "id": "B",
        "text": "Millard-Gubler Syndrome (Ventral Pontine Syndrome)"
      },
      {
        "id": "C",
        "text": "Weber Syndrome"
      },
      {
        "id": "D",
        "text": "Foville Syndrome"
      },
      {
        "id": "E",
        "text": "Raymond Syndrome"
      }
    ],
    "correctOptionId": "B",
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
    "id": "q-131",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 52-year-old female presents with acute right eye ptosis and dilated pupil, accompanied by left-sided intentional tremor and ataxia.",
    "question": "What is the diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Wallenberg Syndrome"
      },
      {
        "id": "B",
        "text": "Claude Syndrome (dorsal midbrain stroke)"
      },
      {
        "id": "C",
        "text": "Weber Syndrome"
      },
      {
        "id": "D",
        "text": "Benedikt Syndrome"
      },
      {
        "id": "E",
        "text": "Millard-Gubler Syndrome"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Claude Syndrome is a dorsal midbrain P1 PCA stroke causing ipsilateral CN III palsy (fascicular fibers) AND contralateral ataxia/intention tremor (dorsal red nucleus and superior cerebellar peduncle). Benedikt syndrome adds substantia nigra choreoathetosis.",
    "keyTakeaway": "Claude Syndrome = Ipsilateral CN III palsy + Contralateral ataxia & intention tremor (dorsal red nucleus).",
    "tags": [
      "Brainstem Syndromes",
      "Claude Syndrome",
      "Midbrain"
    ],
    "hint": "Dorsal midbrain stroke combining third nerve palsy with red nucleus cerebellar ataxia.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-132",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 69-year-old male presents with acute left eye ptosis, dilated pupil, and contralateral violent involuntary choreoathetoid movements of his right arm and leg.",
    "question": "What midbrain stroke syndrome does this describe?",
    "options": [
      {
        "id": "A",
        "text": "Parinaud Syndrome"
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
        "text": "Foville Syndrome"
      },
      {
        "id": "E",
        "text": "Weber Syndrome"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Benedikt Syndrome (paramedian midbrain stroke) combines ipsilateral CN III palsy with contralateral chorea, athetosis, and involuntary movements due to involvement of the red nucleus and substantia nigra.",
    "keyTakeaway": "Benedikt Syndrome = Ipsilateral CN III palsy + Contralateral choreoathetosis & tremor (substantia nigra & red nucleus).",
    "tags": [
      "Brainstem Syndromes",
      "Benedikt Syndrome",
      "Chorea"
    ],
    "hint": "Combination of third nerve palsy and hyperkinetic extrapyramidal movement disorders.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-133",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 64-year-old male presents with acute left facial weakness (including forehead), inability to look to the left with either eye (left horizontal conjugate gaze palsy), and right-sided hemiparesis.",
    "question": "Which pontine syndrome is present?",
    "options": [
      {
        "id": "A",
        "text": "Raymond Syndrome"
      },
      {
        "id": "B",
        "text": "Weber Syndrome"
      },
      {
        "id": "C",
        "text": "Millard-Gubler Syndrome"
      },
      {
        "id": "D",
        "text": "Foville Syndrome"
      },
      {
        "id": "E",
        "text": "Wallenberg Syndrome"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Foville Syndrome (dorsal pontine stroke) features: 1) Ipsilateral facial nerve CN VII palsy, 2) Ipsilateral horizontal conjugate gaze palsy (CN VI nucleus or PPRF), and 3) Contralateral hemiparesis (corticospinal tract). It differs from Millard-Gubler by adding conjugate gaze palsy.",
    "keyTakeaway": "Foville Syndrome = Ipsilateral CN VII palsy + Ipsilateral conjugate gaze palsy + Contralateral hemiparesis (dorsal pons).",
    "tags": [
      "Brainstem Syndromes",
      "Foville Syndrome",
      "Conjugate Gaze"
    ],
    "hint": "Pontine gaze center (PPRF) or abducens nucleus damage causing horizontal conjugate gaze palsy toward the lesion.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-134",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 19-year-old male presents with acute inability to look upward (vertical gaze palsy), light-near pupillary dissociation (pupils constrict on accommodation but not to light), and convergence-retraction nystagmus on attempted upward gaze.",
    "question": "What is the name of this syndrome, and where is the underlying lesion located?",
    "options": [
      {
        "id": "A",
        "text": "Gerstmann Syndrome; Angular gyrus"
      },
      {
        "id": "B",
        "text": "Parinaud Syndrome (Dorsal Midbrain Syndrome); Dorsal tectum / pineal region"
      },
      {
        "id": "C",
        "text": "Wallenberg Syndrome; Lateral medulla"
      },
      {
        "id": "D",
        "text": "Horner Syndrome; Sympathetic chain"
      },
      {
        "id": "E",
        "text": "Weber Syndrome; Ventral midbrain"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Parinaud Syndrome (Dorsal Midbrain / Tectal Syndrome) triad: 1) Impaired upward vertical gaze, 2) Convergence-retraction nystagmus, and 3) Light-near pupillary dissociation. Caused by compression or infarction of the rostral interstitial nucleus of MLF / posterior commissure in the dorsal midbrain.",
    "keyTakeaway": "Parinaud Syndrome = Upward gaze palsy + Convergence-retraction nystagmus + Light-near dissociation (Dorsal Midbrain Tectum).",
    "tags": [
      "Brainstem Syndromes",
      "Parinaud Syndrome",
      "Dorsal Midbrain"
    ],
    "hint": "Tectal midbrain lesion affecting vertical gaze centers and pupillary reflex pathways.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-135",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 58-year-old male presents with acute complete paralysis of all four limbs (quadriplegia) and inability to speak or swallow (aphonia/pseudobulbar palsy). On exam, he communicates by blinking and moving his eyes vertically. He is fully conscious and oriented.",
    "question": "What is the diagnosis and anatomical site of lesion?",
    "options": [
      {
        "id": "A",
        "text": "Locked-in Syndrome; Bilateral ventral pontine infarction (Basilar artery occlusion)"
      },
      {
        "id": "B",
        "text": "Guillain-Barre Syndrome"
      },
      {
        "id": "C",
        "text": "Akinesia mutism"
      },
      {
        "id": "D",
        "text": "Brain death"
      },
      {
        "id": "E",
        "text": "Persistent vegetative state"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Locked-in Syndrome is caused by bilateral ventral pontine infarction (typically basilar artery thrombosis). Corticospinal and corticobulbar tracts are destroyed, causing total quadriplegia and anarthria. Consciousness (reticular activating system) and vertical eye movements (midbrain tectum) are SPARED.",
    "keyTakeaway": "Locked-in Syndrome = Bilateral ventral pontine stroke -> Quadriplegia + Anarthria with SPARED vertical eye movements & consciousness.",
    "tags": [
      "Brainstem Syndromes",
      "Locked-in Syndrome",
      "Basilar Thrombosis"
    ],
    "hint": "Bilateral ventral pontine transaction sparing midbrain vertical eye movements and reticular consciousness.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-136",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 60-year-old female presents with acute right abducens nerve palsy (CN VI) and left hemiparesis. Facial nerve function, sensation, and horizontal gaze are normal.",
    "question": "Which pontine syndrome is present?",
    "options": [
      {
        "id": "A",
        "text": "Weber Syndrome"
      },
      {
        "id": "B",
        "text": "Millard-Gubler Syndrome"
      },
      {
        "id": "C",
        "text": "Foville Syndrome"
      },
      {
        "id": "D",
        "text": "Claude Syndrome"
      },
      {
        "id": "E",
        "text": "Raymond Syndrome"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Raymond Syndrome (ventral pontine stroke) features ipsilateral abducens (CN VI) nerve palsy and contralateral hemiparesis, SPAIRNG the facial nerve (unlike Millard-Gubler).",
    "keyTakeaway": "Raymond Syndrome = Ipsilateral CN VI palsy + Contralateral hemiparesis (Facial nerve SPARED).",
    "tags": [
      "Brainstem Syndromes",
      "Raymond Syndrome",
      "Pontine Stroke"
    ],
    "hint": "Abducens nerve and corticospinal tract involvement sparing the facial nerve nucleus.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-137",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 65-year-old male with acute basilar artery occlusion is found to have pinpoint pupils (1.5 mm bilaterally) that respond briskly to light magnification.",
    "question": "Why are pupils pinpoint but reactive in pontine strokes?",
    "options": [
      {
        "id": "A",
        "text": "Atropine toxicity"
      },
      {
        "id": "B",
        "text": "Occipital lobe ischemia"
      },
      {
        "id": "C",
        "text": "Pupillary light reflex is destroyed in pontine strokes"
      },
      {
        "id": "D",
        "text": "Destruction of descending sympathetic fibers in the pons leaves parasympathetic Edinger-Westphal tone unopposed"
      },
      {
        "id": "E",
        "text": "Direct damage to CN III nucleus"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Pontine lesions interrupt descending sympathetic pathways, producing bilateral Horner-like sympathetic deficit. Parasympathetic pupilloconstrictor fibers (CN III in midbrain) remain intact, resulting in classic 'pinpoint but reactive' pupils.",
    "keyTakeaway": "Pontine lesions cause 'pinpoint but reactive' pupils due to sympathetic tract disruption with intact parasympathetic CN III tone.",
    "tags": [
      "Neuroanatomy",
      "Pupillary Reflexes",
      "Pontine Stroke"
    ],
    "hint": "Interruption of descending sympathetic fibers leaving parasympathetic constrictor tone intact.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-138",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 61-year-old male presents with acute inability to adduct his left eye when looking to the right. The right eye abducts with horizontal nystagmus. Left eye adduction is completely normal during convergence testing.",
    "question": "What is the diagnosis and anatomical location of the lesion?",
    "options": [
      {
        "id": "A",
        "text": "Right MLF lesion"
      },
      {
        "id": "B",
        "text": "Left CN III palsy"
      },
      {
        "id": "C",
        "text": "Left Internuclear Ophthalmophthalmoplegia (INO); Left Medial Longitudinal Fasciculus (MLF)"
      },
      {
        "id": "D",
        "text": "Right CN VI palsy"
      },
      {
        "id": "E",
        "text": "Bilateral PPRF lesion"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Internuclear Ophthalmoplegia (INO) is caused by a lesion in the Medial Longitudinal Fasciculus (MLF) on the side of the adduction deficit. Left MLF lesion -> Left eye cannot adduct on rightward gaze, right eye exhibits abducting nystagmus. Convergence is spared because it bypasses the MLF.",
    "keyTakeaway": "INO = Adduction deficit on side of MLF lesion + Nystagmus of abducting eye (Convergence is SPARED).",
    "tags": [
      "Neuroanatomy",
      "INO",
      "MLF Lesion"
    ],
    "hint": "Interruption of the pathway connecting the abducens nucleus to the contralateral oculomotor nucleus.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-139",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 72-year-old female experiences fluctuating episodes of dysarthria, vertigo, diplopia, and quadriparesis over 48 hours ('stuttering basilar TIA'), followed by sudden coma.",
    "question": "What is the definitive diagnostic modality to confirm acute Basilar Artery Thrombosis?",
    "options": [
      {
        "id": "A",
        "text": "CTA or MRA head and neck showing occlusion of the main basilar trunk"
      },
      {
        "id": "B",
        "text": "Carotid duplex ultrasound"
      },
      {
        "id": "C",
        "text": "EEG"
      },
      {
        "id": "D",
        "text": "Trans-thoracic Echocardiogram"
      },
      {
        "id": "E",
        "text": "Lumbar puncture"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Basilar Artery Thrombosis often presents with a characteristic 'stuttering' or fluctuating prodrome of brainstem TIAs (vertigo, diplopia, dysarthria, quadriparesis) before complete thrombosis causing coma or locked-in syndrome. Emergent CTA/MRA confirms basilar occlusion for EVT evaluation.",
    "keyTakeaway": "Basilar Artery Thrombosis often presents with stuttering prodromal TIAs -> Confirm with STAT CTA/MRA for EVT.",
    "tags": [
      "Basilar Thrombosis",
      "CTA Head",
      "Posterior Circulation"
    ],
    "hint": "Vessel imaging demonstrating main basilar trunk arterial occlusion.",
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
        "text": "Globus pallidus externus"
      },
      {
        "id": "B",
        "text": "Nucleus ambiguus"
      },
      {
        "id": "C",
        "text": "Posterior limb of the internal capsule (or ventral pons)"
      },
      {
        "id": "D",
        "text": "Medial lemniscus in the medulla"
      },
      {
        "id": "E",
        "text": "Ventral posterolateral (VPL) nucleus of the thalamus"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Pure motor hemiparesis is the most common lacunar stroke syndrome (approx. 50%). It is caused by lipohyalinosis/microatheroma of lenticulostriate penetrating arteries supplying the posterior limb of the internal capsule or basis pontis.",
    "keyTakeaway": "Pure motor hemiparesis lacunar stroke = Posterior limb of internal capsule (lenticulostriate penetrators).",
    "tags": [
      "Lacunar Stroke",
      "Small Vessel Disease",
      "Neuroanatomy"
    ],
    "hint": "Densely packed corticospinal fibers pass through this capsular region between the thalamus and basal ganglia.",
    "source": "Past Board Exam"
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
        "text": "Pseudoxanthoma Elasticum; ABCC6 gene mutation"
      },
      {
        "id": "B",
        "text": "CARASIL; HTRA1 gene mutation"
      },
      {
        "id": "C",
        "text": "Fabry Disease; GLA gene mutation"
      },
      {
        "id": "D",
        "text": "MELAS; MT-TL1 mutation"
      },
      {
        "id": "E",
        "text": "CADASIL; NOTCH3 gene mutation on chromosome 19"
      }
    ],
    "correctOptionId": "E",
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
    "id": "q-140",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 70-year-old female presents with sudden numbness and tingling involving her entire left arm, leg, face, and trunk. Motor strength, visual fields, and speech are entirely normal.",
    "question": "Infarction of which nucleus causes Pure Sensory Lacunar Stroke?",
    "options": [
      {
        "id": "A",
        "text": "Caudate nucleus"
      },
      {
        "id": "B",
        "text": "Posterior limb of internal capsule"
      },
      {
        "id": "C",
        "text": "Basis pontis"
      },
      {
        "id": "D",
        "text": "Subthalamic nucleus"
      },
      {
        "id": "E",
        "text": "Ventral Posterolateral (VPL) nucleus of the thalamus"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Pure sensory lacunar stroke is caused by microatheroma of thalamoperforating artery penetrators supplying the VPL (body sensory) or VPM (face sensory) nucleus of the thalamus. Features contralateral sensory loss without motor, visual, or speech deficits.",
    "keyTakeaway": "Pure Sensory Lacunar Stroke = Thalamic VPL/VPM nucleus (thalamoperforating penetrators).",
    "tags": [
      "Lacunar Stroke",
      "Pure Sensory",
      "Thalamus"
    ],
    "hint": "Relay nucleus for body spinothalamic and medial lemniscal sensory pathways.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-141",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 61-year-old male presents with acute right arm and leg weakness accompanied by severe, out-of-proportion cerebellar ataxia in the same right extremities.",
    "question": "What lacunar stroke syndrome does this describe, and what is the typical anatomical location?",
    "options": [
      {
        "id": "A",
        "text": "Gerstmann Syndrome; Angular gyrus"
      },
      {
        "id": "B",
        "text": "Ataxic Hemiparesis; Posterior limb of internal capsule or basis pontis"
      },
      {
        "id": "C",
        "text": "Dejerine Syndrome; Medulla"
      },
      {
        "id": "D",
        "text": "Pure Motor Hemiparesis; Caudate nucleus"
      },
      {
        "id": "E",
        "text": "Wallenberg Syndrome; Lateral medulla"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Ataxic Hemiparesis is a classic lacunar syndrome characterized by weakness and prominent dysmetria/ataxia on the same side. The lesion is located in the posterior limb of the internal capsule, basis pontis, or red nucleus.",
    "keyTakeaway": "Ataxic Hemiparesis = Ipsilateral weakness + cerebellar ataxia (Posterior limb of internal capsule or basis pontis).",
    "tags": [
      "Lacunar Stroke",
      "Ataxic Hemiparesis",
      "Internal Capsule"
    ],
    "hint": "Co-localization of corticospinal and corticopontocerebellar fibers in the capsular or pontine pathway.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-142",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 65-year-old hypertension patient presents with acute severe dysarthria, central facial weakness, tongue deviation, and clumsiness/dysmetria of the hand when writing or buttoning a shirt. Leg strength and sensory exam are normal.",
    "question": "What is this lacunar syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Ataxic Hemiparesis"
      },
      {
        "id": "B",
        "text": "Pure Sensory Stroke"
      },
      {
        "id": "C",
        "text": "Anterior Choroidal Syndrome"
      },
      {
        "id": "D",
        "text": "Clumsy Hand-Dysarthria Syndrome"
      },
      {
        "id": "E",
        "text": "Pure Motor Hemiparesis"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Clumsy Hand-Dysarthria Syndrome is a lacunar syndrome featuring severe dysarthria, facial weakness, and upper extremity clumsy dysmetria. Caused by lacunar infarcts in the paramedian pons or anterior limb / genu of the internal capsule.",
    "keyTakeaway": "Clumsy Hand-Dysarthria = Prominent dysarthria + facial weakness + hand clumsiness (Anterior limb internal capsule or pons).",
    "tags": [
      "Lacunar Stroke",
      "Clumsy Hand Dysarthria",
      "Paramedian Pons"
    ],
    "hint": "Combination of articulation deficit with fine motor hand dysmetria.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-143",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 38-year-old male with no risk factors presents with recurrent lacunar strokes, premature alopecia (hair loss), and severe lumbar spondylosis with disc herniation. Genetic testing confirms an autosomal recessive mutation.",
    "question": "What gene is mutated in CARASIL?",
    "options": [
      {
        "id": "A",
        "text": "ABCC6 gene mutation"
      },
      {
        "id": "B",
        "text": "HTRA1 gene mutation"
      },
      {
        "id": "C",
        "text": "GLA gene mutation"
      },
      {
        "id": "D",
        "text": "COL4A1 gene mutation"
      },
      {
        "id": "E",
        "text": "NOTCH3 gene mutation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "CARASIL (Cerebral Autosomal Recessive Arteriopathy with Subcortical Infarcts and Leukoencephalopathy) is caused by autosomal recessive mutations in HTRA1. Triad: 1) Early-onset lacunar strokes/dementia, 2) Premature alopecia, and 3) Severe lumbar spondylopathy/back pain.",
    "keyTakeaway": "CARASIL = Autosomal Recessive HTRA1 mutation -> Young strokes + Premature Alopecia + Severe Lumbar Spondylosis.",
    "tags": [
      "Genetic Vasculopathies",
      "CARASIL",
      "HTRA1"
    ],
    "hint": "Autosomal recessive arteriopathy with skin appendage (hair) and spinal skeletal involvement.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-144",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "An 80-year-old female presents with progressive cognitive decline, gait apraxia, urinary urgency, and pseudobulbar affect. MRI brain shows extensive confluent white matter leukoaraiosis sparing the subcortical U-fibers.",
    "question": "What is the clinical diagnosis for this subcortical ischemic vascular dementia?",
    "options": [
      {
        "id": "A",
        "text": "Creutzfeldt-Jakob Disease"
      },
      {
        "id": "B",
        "text": "Progressive Supranuclear Palsy"
      },
      {
        "id": "C",
        "text": "Alzheimer Disease"
      },
      {
        "id": "D",
        "text": "Binswanger Disease (Subcortical Arteriosclerotic Encephalopathy)"
      },
      {
        "id": "E",
        "text": "Normal Pressure Hydrocephalus"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Binswanger Disease (Subcortical Arteriosclerotic Encephalopathy) is a severe form of small vessel vascular dementia characterized by diffuse white matter leukoaraiosis, gait impairment, executive dysfunction, and pseudobulbar palsy resulting from chronic arteriolosclerosis.",
    "keyTakeaway": "Binswanger Disease = Subcortical small vessel arteriosclerosis -> Confluent leukoaraiosis + Progressive vascular dementia.",
    "tags": [
      "Small Vessel Disease",
      "Binswanger",
      "Vascular Dementia"
    ],
    "hint": "Chronic arteriolosclerosis causing confluent periventricular white matter rarefaction.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-145",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 78-year-old female presents with multiple recurrent LOBAR intracerebral hemorrhages. T2* Gradient Recalled Echo (GRE) MRI shows dozens of cortical-subcortical microbleeds sparing the basal ganglia.",
    "question": "What is the underlying vascular pathology?",
    "options": [
      {
        "id": "A",
        "text": "Saccular aneurysm rupture"
      },
      {
        "id": "B",
        "text": "AVM malformation"
      },
      {
        "id": "C",
        "text": "Cerebral Amyloid Angiopathy (CAA); Beta-amyloid deposition in small cortical and leptomeningeal arteries"
      },
      {
        "id": "D",
        "text": "Hypertensive arteriolosclerosis"
      },
      {
        "id": "E",
        "text": "Cavernous malformation"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Cerebral Amyloid Angiopathy (CAA) is caused by beta-amyloid deposition in cortical and leptomeningeal arterial walls. It characteristically causes LOBAR (superficial) ICH and cortical microbleeds, strictly sparing deep structures (basal ganglia/thalamus). Associated with ApoE epsilon 2 and 4 alleles.",
    "keyTakeaway": "Cerebral Amyloid Angiopathy (CAA) = Beta-amyloid in cortical arteries -> Recurrent LOBAR ICH & cortical microbleeds (spares basal ganglia).",
    "tags": [
      "CAA",
      "Lobar Hemorrhage",
      "Microbleeds"
    ],
    "hint": "Amyloid deposition strictly targeting superficial cortical and leptomeningeal vessel walls.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-146",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "Pathological examination of small penetrating arterioles (< 200 micrometers) in a patient with hypertension and lacunar stroke demonstrates fibrinoid necrosis, lipid-laden macrophages, and vessel wall disorganization.",
    "question": "What term describes this microscopic vessel pathology?",
    "options": [
      {
        "id": "A",
        "text": "Medial fibroplasia"
      },
      {
        "id": "B",
        "text": "Monomorphic arteritis"
      },
      {
        "id": "C",
        "text": "Granulomatous vasculitis"
      },
      {
        "id": "D",
        "text": "Lipohyalinosis (or microatheroma)"
      },
      {
        "id": "E",
        "text": "Amyloid angiopathy"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Lipohyalinosis (segmental arterial disorganization with fibrinoid deposit and lipid macrophages) and microatheromas are the microscopic arterial pathologies of small penetrating arteries (< 200 micrometers) caused by chronic hypertension leading to lacunar infarction.",
    "keyTakeaway": "Lipohyalinosis & Microatheromas = Microscopic pathology of hypertensive penetrating arterioles causing lacunar strokes.",
    "tags": [
      "Pathology",
      "Lipohyalinosis",
      "Penetrating Arterioles"
    ],
    "hint": "Fibrinoid necrosis and lipid infiltration of small deep cerebral penetrating arterioles.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-147",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 35-year-old female presents with progressive visual loss due to retinal vasculopathy, recurrent strokes, and pseudo-tumoral white matter lesions on MRI. Genetic testing reveals a mutation in TREX1.",
    "question": "What is the diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "CARASIL"
      },
      {
        "id": "B",
        "text": "Fabry Disease"
      },
      {
        "id": "C",
        "text": "Retinal Vasculopathy with Cerebral Leukodystrophy (RVCL)"
      },
      {
        "id": "D",
        "text": "SUSAC Syndrome"
      },
      {
        "id": "E",
        "text": "CADASIL"
      }
    ],
    "correctOptionId": "C",
    "explanation": "RVCL (Retinal Vasculopathy with Cerebral Leukodystrophy) is an autosomal dominant microvasculopathy caused by TREX1 gene mutations. Features: middle-age onset retinal vasculopathy, brain microvascular lesions (often mass-like with rim enhancement), and systemic vascular disease.",
    "keyTakeaway": "RVCL = Autosomal dominant TREX1 mutation -> Retinal vasculopathy + Pseudotumoral brain leukoencephalopathy.",
    "tags": [
      "RVCL",
      "TREX1",
      "Genetic Vasculopathy"
    ],
    "hint": "Microvascular disorder combining retinal vascular obliteration with brain white matter lesions.",
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
        "text": "Temporal Arteritis (GCA)"
      },
      {
        "id": "C",
        "text": "Takayasu Arteritis"
      },
      {
        "id": "D",
        "text": "Primary Angiitis of the CNS (PACNS)"
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
    "id": "q-148",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 58-year-old male presents with non-embolic lacunar stroke (1.0 cm lesion in internal capsule), hypertension, diabetes, normal ECG, normal cardiac telemetry, and carotid ultrasound showing < 30% stenosis.",
    "question": "What is the TOAST subtype classification for this stroke?",
    "options": [
      {
        "id": "A",
        "text": "Other Determined Etiology"
      },
      {
        "id": "B",
        "text": "Undetermined Etiology"
      },
      {
        "id": "C",
        "text": "Large Artery Atherosclerosis"
      },
      {
        "id": "D",
        "text": "Cardioembolism"
      },
      {
        "id": "E",
        "text": "Small Vessel Occlusion (Lacunar)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Under TOAST criteria, Small Vessel Occlusion (Lacunar) requires: 1) Clinical lacunar syndrome, 2) Relevant subcortical/brainstem lesion < 1.5 cm on CT/MRI, and 3) Absence of potential cardioembolic source or ipsilateral large artery stenosis >= 50%.",
    "keyTakeaway": "TOAST Small Vessel Occlusion requires subcortical lesion < 1.5 cm without major cardioembolic or stenosis sources.",
    "tags": [
      "TOAST Classification",
      "Lacunar",
      "Etiology"
    ],
    "hint": "Subcortical lesion < 1.5 cm with absence of > 50% stenosis or cardioembolic source.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-149",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 45-year-old female experiences a non-lacunar ischemic stroke in the right MCA cortex. Workup shows non-stenotic carotid plaque (< 30%), 24-hour Holter monitor normal, TEE without cardiac thrombus, and no hypercoagulable disorder.",
    "question": "What diagnostic category describes this cryptogenic embolic stroke, and what cardiac monitoring is indicated?",
    "options": [
      {
        "id": "A",
        "text": "Definitive cardioembolic stroke; start Warfarin without further testing"
      },
      {
        "id": "B",
        "text": "Small vessel disease; stop workup"
      },
      {
        "id": "C",
        "text": "Venous stroke; order MRV"
      },
      {
        "id": "D",
        "text": "Embolic Stroke of Undetermined Source (ESUS); prolonged outpatient cardiac rhythm monitoring (30-day monitor or ILR)"
      },
      {
        "id": "E",
        "text": "Large artery stroke; schedule CEA immediately"
      }
    ],
    "correctOptionId": "D",
    "explanation": "ESUS (Embolic Stroke of Undetermined Source) refers to non-lacunar embolic-appearing ischemic strokes where standard evaluation fails to identify a clear source. Guidelines recommend prolonged cardiac monitoring (30-day monitoring or implantable loop recorder ILR) because subclinical paroxysmal AFib is detected in 10-30% of ESUS cases.",
    "keyTakeaway": "ESUS = Non-lacunar embolic stroke without clear source -> Order prolonged cardiac monitoring (ILR) to detect occult AFib.",
    "tags": [
      "ESUS",
      "Cryptogenic Stroke",
      "Cardiac Monitoring"
    ],
    "hint": "Non-lacunar embolic stroke pattern requiring extended cardiac telemetry to rule out paroxysmal AFib.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-150",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 30-year-old female with a history of 3 recurrent spontaneous second-trimester miscarriages presents with an acute right MCA ischemic stroke. Lab testing reveals persistent positive Lupus Anticoagulant and high-titer Anti-cardiolipin IgG antibodies on two tests 12 weeks apart.",
    "question": "What is the diagnosis and recommended secondary prevention therapy?",
    "options": [
      {
        "id": "A",
        "text": "Systemic Lupus Erythematosus; High-dose steroids alone"
      },
      {
        "id": "B",
        "text": "Antiphospholipid Syndrome (APLS); Long-term oral anticoagulation with Warfarin (target INR 2.0-3.0)"
      },
      {
        "id": "C",
        "text": "Sepsis; IV antibiotics"
      },
      {
        "id": "D",
        "text": "Factor V Leiden mutation; Aspirin 81 mg daily"
      },
      {
        "id": "E",
        "text": "CADASIL; No treatment available"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Antiphospholipid Syndrome (APLS) is an autoimmune hypercoagulable state defined by arterial/venous thrombosis or pregnancy morbidity + persistent APL antibodies (Lupus Anticoagulant, Anticardiolipin, Anti-beta2 glycoprotein I). Secondary stroke prevention requires long-term Warfarin (target INR 2-3). DOACs are INFERIOR to Warfarin in triple-positive APLS!",
    "keyTakeaway": "Antiphospholipid Syndrome (APLS) = Recurrent thrombosis/miscarriages + Persistent APL antibodies -> Treat with WARFARIN (INR 2-3).",
    "tags": [
      "APLS",
      "Hypercoagulable",
      "Warfarin"
    ],
    "hint": "Autoimmune thrombophilia requiring Vitamin K antagonist therapy rather than DOACs or antiplatelets.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-151",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 50-year-old male with metastatic mucinous adenocarcinoma of the pancreas develops acute multifocal embolic ischemic strokes in multiple vascular territories. Echocardiogram reveals small, sterile, non-bacterial fibrin-platelet vegetations on the mitral valve.",
    "question": "What is this condition called, and what is the first-line antithrombolytic treatment?",
    "options": [
      {
        "id": "A",
        "text": "Libman-Sacks endocarditis; Oral Prednisone"
      },
      {
        "id": "B",
        "text": "Rheumatic heart disease; Valve replacement"
      },
      {
        "id": "C",
        "text": "Infective endocarditis; IV Penicillin"
      },
      {
        "id": "D",
        "text": "Bacterial emboli; IV Vancomycin"
      },
      {
        "id": "E",
        "text": "Trousseau Syndrome / Non-Bacterial Thrombotic Endocarditis (NBTE); Therapeutic Low Molecular Weight Heparin (LMWH)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Trousseau Syndrome (malignancy-associated hypercoagulability) causes Non-Bacterial Thrombotic Endocarditis (NBTE / marantic endocarditis), characterized by sterile fibrin vegetations on cardiac valves leading to multifocal embolic strokes. Treatment is therapeutic LMWH and treating underlying cancer.",
    "keyTakeaway": "Trousseau Syndrome / NBTE = Cancer hypercoagulability + sterile valve vegetations -> Treat with LMWH.",
    "tags": [
      "Trousseau Syndrome",
      "Malignancy",
      "LMWH"
    ],
    "hint": "Sterile cardiac valvular vegetations occurring in setting of advanced systemic adenocarcinoma.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-152",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A TEE performed in a 68-year-old embolic stroke patient demonstrates a large, mobile, complex atherosclerotic plaque measuring 5.5 mm in thickness with mobile components in the ascending aortic arch.",
    "question": "What is the stroke risk associated with complex Aortic Arch Atherosclerosis (plaque >= 4 mm)?",
    "options": [
      {
        "id": "A",
        "text": "Indication for Warfarin anticoagulation over antiplatelet"
      },
      {
        "id": "B",
        "text": "High risk of recurrent embolic stroke (independent stroke risk factor); manage with intensive medical therapy (statin + antiplatelet)"
      },
      {
        "id": "C",
        "text": "Zero stroke risk; incidental finding"
      },
      {
        "id": "D",
        "text": "Indication for emergency open aortic arch resection"
      },
      {
        "id": "E",
        "text": "Low risk requiring no intervention"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Complex Aortic Arch Atherosclerosis (defined as plaque thickness >= 4 mm or mobile debris) is a major independent source of arterial emboli to the brain. Managed with aggressive medical therapy (high-intensity statin + antiplatelet).",
    "keyTakeaway": "Aortic Arch Atherosclerosis (plaque >= 4 mm) is a major source of embolic stroke -> Treat with statin + antiplatelets.",
    "tags": [
      "Aortic Arch",
      "Atherosclerosis",
      "Embolic Risk"
    ],
    "hint": "Thick or mobile plaque in the ascending aorta/arch acting as a embolic source.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-153",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 65-year-old female presents with sudden painless monocular vision loss ('amaurosis fugax') in her left eye. Funduscopic examination reveals a bright, yellow, refractile cholesterol crystal lodged at an arterial bifurcation in a retinal arteriole.",
    "question": "What is the name of this refractile retinal embolus, and where did it originate?",
    "options": [
      {
        "id": "A",
        "text": "Cotton wool spot; Diabetic retinopathy"
      },
      {
        "id": "B",
        "text": "Roth Spot; Bacterial endocarditis"
      },
      {
        "id": "C",
        "text": "Hollenhorst Plaque; Carotid artery bifurcation atherosclerotic plaque"
      },
      {
        "id": "D",
        "text": "Elschnig spot; Hypertensive retinopathy"
      },
      {
        "id": "E",
        "text": "Cherry-red spot; Tay-Sachs disease"
      }
    ],
    "correctOptionId": "C",
    "explanation": "A Hollenhorst Plaque is a bright, yellow, refractile cholesterol microembolus seen in retinal arterioles. It originates from ulcerated atherosclerotic plaque at the ipsilateral carotid artery bifurcation. Mandates immediate carotid duplex ultrasound / CTA evaluation!",
    "keyTakeaway": "Hollenhorst Plaque = Refractile cholesterol microembolus in retinal arteriole -> Indicates ipsilateral carotid atheroma.",
    "tags": [
      "Hollenhorst Plaque",
      "Amaurosis Fugax",
      "Carotid Disease"
    ],
    "hint": "Bright yellow cholesterol crystal visible on funduscopy at a retinal arteriolar bifurcation.",
    "source": "Past Board Exam"
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
        "text": "Decompressive hemicraniectomy within 6 hours"
      },
      {
        "id": "B",
        "text": "Administer IV tPA only"
      },
      {
        "id": "C",
        "text": "Repeat CT head in 24 hours before making treatment decisions"
      },
      {
        "id": "D",
        "text": "Proceed with mechanical thrombectomy immediately"
      },
      {
        "id": "E",
        "text": "Medical therapy with Aspirin and Heparin infusion"
      }
    ],
    "correctOptionId": "D",
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
        "text": "IV tPA alone; mechanical thrombectomy is contraindicated in ICA terminus occlusion"
      },
      {
        "id": "B",
        "text": "IV Heparin bolus plus Aspirin 325 mg"
      },
      {
        "id": "C",
        "text": "Emergent carotid endarterectomy"
      },
      {
        "id": "D",
        "text": "Intravenous thrombolysis (tPA/TNK) AND immediate transfer for mechanical thrombectomy"
      },
      {
        "id": "E",
        "text": "Mechanical thrombectomy alone; skip IV thrombolysis"
      }
    ],
    "correctOptionId": "D",
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
    "id": "q-154",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 68-year-old male undergoes mechanical thrombectomy for a left M1 MCA occlusion. Post-procedure catheter angiogram reveals complete recanalization of the main vessel and all distal branches (100% perfusion of the target territory).",
    "question": "What is the grade on the Thrombolysis in Cerebral Infarction (TICI) scale?",
    "options": [
      {
        "id": "A",
        "text": "TICI 3 (Complete reperfusion)"
      },
      {
        "id": "B",
        "text": "TICI 2a (Partial reperfusion < 50%)"
      },
      {
        "id": "C",
        "text": "TICI 2b (Partial reperfusion >= 50%)"
      },
      {
        "id": "D",
        "text": "TICI 1 (Minimal perfusion)"
      },
      {
        "id": "E",
        "text": "TICI 0 (No perfusion)"
      }
    ],
    "correctOptionId": "A",
    "explanation": "TICI 3 indicates complete recanalization and full reperfusion of the target vascular territory with normal flow. TICI 2b (>= 50% reperfusion) and TICI 3 represent successful technical recanalization.",
    "keyTakeaway": "TICI 3 = Complete 100% reperfusion of target vascular territory following thrombectomy.",
    "tags": [
      "Thrombectomy",
      "TICI Grade",
      "Reperfusion"
    ],
    "hint": "Complete restoration of normal distal parenchymal vessel filling.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-155",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 75-year-old female presents 4 hours after onset of left hemiplegia. CTA reveals a right M1 MCA occlusion. CTP shows an ischemic core volume (rCBF < 30%) of 12 mL and a hypoperfused tissue volume (Tmax > 6s) of 110 mL.",
    "question": "What is the perfusion mismatch volume and mismatch ratio?",
    "options": [
      {
        "id": "A",
        "text": "Mismatch volume = 110 mL, Mismatch ratio = 1.0"
      },
      {
        "id": "B",
        "text": "Mismatch volume = 12 mL, Mismatch ratio = 0.5"
      },
      {
        "id": "C",
        "text": "Mismatch volume = 0 mL, Mismatch ratio = 0"
      },
      {
        "id": "D",
        "text": "Mismatch volume = 50 mL, Mismatch ratio = 2.0"
      },
      {
        "id": "E",
        "text": "Mismatch volume = 98 mL, Mismatch ratio = 9.17"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Mismatch volume = Hypoperfused tissue (Tmax > 6s) minus Ischemic core (rCBF < 30%) = 110 - 12 = 98 mL. Mismatch ratio = 110 / 12 = 9.17. Favorable mismatch criteria (DEFUSE 3: mismatch volume >= 15 mL and mismatch ratio >= 1.8) strongly predict salvageable tissue.",
    "keyTakeaway": "Target Mismatch: Mismatch Volume = Tmax > 6s volume minus Core volume (>= 15 mL); Mismatch Ratio >= 1.8.",
    "tags": [
      "CT Perfusion",
      "Mismatch Volume",
      "Core Penumbra"
    ],
    "hint": "Subtract dead core volume from total hypoperfused penumbral volume.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-156",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 60-year-old male undergoes successful mechanical thrombectomy (TICI 3) for right M1 MCA occlusion 3 hours after onset. Post-procedure BP is 155/90 mmHg.",
    "question": "Per updated guidelines, what is the target blood pressure following SUCCESSFUL complete TICI 3 reperfusion?",
    "options": [
      {
        "id": "A",
        "text": "Keep SBP strictly between 180 and 200 mmHg"
      },
      {
        "id": "B",
        "text": "Allow SBP up to 220/120 mmHg"
      },
      {
        "id": "C",
        "text": "Maintain SBP < 140-180 mmHg to prevent reperfusion injury / sICH while avoiding hypoperfusion"
      },
      {
        "id": "D",
        "text": "No BP monitoring required"
      },
      {
        "id": "E",
        "text": "Lower SBP < 90 mmHg"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Following successful complete reperfusion (TICI 2b/3), lowering SBP targets to < 140-180 mmHg reduces the risk of hyperperfusion syndrome and hemorrhagic transformation, while avoiding excessive hypotension.",
    "keyTakeaway": "Post-successful EVT (TICI 3) BP goal: Maintain SBP < 140-180 mmHg to prevent hyperperfusion hemorrhage.",
    "tags": [
      "Post-EVT",
      "BP Target",
      "Reperfusion Injury"
    ],
    "hint": "Avoid hyperperfusion pressure surges once distal arterial recanalization is complete.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-157",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "Recent 2023 trials (SELECT2, ANGEL-ASPECT, RESCUE-JAPAN LIMIT) evaluated mechanical thrombectomy in patients with LARGE ISCHEMIC CORE (ASPECTS 3 to 5 or core volume 70 to 100 mL).",
    "question": "What was the main finding of these trials regarding EVT in large core strokes?",
    "options": [
      {
        "id": "A",
        "text": "EVT is strictly contraindicated if ASPECTS < 7"
      },
      {
        "id": "B",
        "text": "EVT showed zero benefit"
      },
      {
        "id": "C",
        "text": "EVT was harmful and increased mortality"
      },
      {
        "id": "D",
        "text": "Medical therapy alone was superior"
      },
      {
        "id": "E",
        "text": "EVT plus medical therapy significantly improved functional independence (mRS 0-3) compared to medical therapy alone, despite large core size"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Landmark trials (SELECT2, ANGEL-ASPECT, RESCUE-JAPAN LIMIT, TENSION) proved that mechanical thrombectomy provides significant functional benefit even in patients with large ischemic cores (ASPECTS 3-5 or core >= 50-70 mL), expanding EVT eligibility.",
    "keyTakeaway": "Large Core EVT Trials (SELECT2/ANGEL-ASPECT): Thrombectomy improves functional outcomes even in ASPECTS 3-5 large core strokes!",
    "tags": [
      "Large Core EVT",
      "SELECT2",
      "Landmark Trials"
    ],
    "hint": "Recent 2023 trials expanded thrombectomy indications to patients with large baseline CT core infarts.",
    "source": "Landmark Trial"
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
        "text": "Immediate EC-IC bypass surgery"
      },
      {
        "id": "C",
        "text": "Carotid endarterectomy"
      },
      {
        "id": "D",
        "text": "Percutaneous intracranial angioplasty and stenting (Wingspan stent) plus medical therapy"
      },
      {
        "id": "E",
        "text": "Warfarin anticoagulation (target INR 2.0-3.0)"
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
    "id": "q-158",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A 65-year-old male with 80% symptomatic MCA stenosis is evaluated for secondary prevention. The team compares Warfarin vs Aspirin based on historical evidence.",
    "question": "What did the WASID trial establish regarding Warfarin versus Aspirin in symptomatic intracranial arterial stenosis?",
    "options": [
      {
        "id": "A",
        "text": "Warfarin eliminated all recurrent strokes"
      },
      {
        "id": "B",
        "text": "Warfarin was vastly superior to Aspirin"
      },
      {
        "id": "C",
        "text": "Neither medication provided benefit"
      },
      {
        "id": "D",
        "text": "Aspirin caused higher intracranial hemorrhage rates than Warfarin"
      },
      {
        "id": "E",
        "text": "Aspirin was equally effective as Warfarin for stroke prevention with significantly FEWER major bleeding complications and lower mortality"
      }
    ],
    "correctOptionId": "E",
    "explanation": "The WASID trial (Warfarin vs Aspirin for Symptomatic Intracranial Disease) showed that Aspirin (1300 mg/day tested, now 81-325 mg) was equally effective as Warfarin (target INR 2-3) for stroke prevention, but Warfarin caused significantly higher adverse events (major bleeding and death). Thus antiplatelet therapy is first-line.",
    "keyTakeaway": "WASID trial: Aspirin is preferred over Warfarin for ICAD due to equal efficacy and lower bleeding/mortality.",
    "tags": [
      "WASID Trial",
      "ICAD",
      "Antiplatelets vs Warfarin"
    ],
    "hint": "Avoid anticoagulation in non-cardioembolic intracranial stenosis due to high systemic bleeding risks.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-159",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A patient with 85% basilar artery stenosis experiences recurrent TIAs whenever his SBP drops below 130 mmHg, demonstrating borderzone watershed weakness.",
    "question": "What stroke mechanism is operating in hypoperfusion-driven ICAD?",
    "options": [
      {
        "id": "A",
        "text": "Cardioembolism"
      },
      {
        "id": "B",
        "text": "Venous congestion"
      },
      {
        "id": "C",
        "text": "Arterio-arterial thromboembolism"
      },
      {
        "id": "D",
        "text": "Small vessel lipohyalinosis"
      },
      {
        "id": "E",
        "text": "Hemodynamic failure / watershed hypoperfusion distal to severe stenosis"
      }
    ],
    "correctOptionId": "E",
    "explanation": "ICAD causes stroke via two main mechanisms: 1) Arterio-arterial embolization of plaque thrombus, and 2) Hemodynamic hypoperfusion distal to severe stenosis leading to borderzone watershed infarctions when blood pressure drops.",
    "keyTakeaway": "ICAD mechanisms: Arterio-arterial emboli AND Hemodynamic watershed hypoperfusion.",
    "tags": [
      "ICAD Mechanisms",
      "Hemodynamic Watershed",
      "Hypoperfusion"
    ],
    "hint": "Positional or blood pressure drop-induced neurological deficits indicate hemodynamic insufficiency.",
    "source": "Syllabus Notes"
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
        "text": "Sphingomyelinase deficiency; Autosomal recessive (Niemann-Pick)"
      },
      {
        "id": "B",
        "text": "Cystathionine beta-synthase deficiency; Autosomal recessive (Homocystinuria)"
      },
      {
        "id": "C",
        "text": "Glucocerebrosidase deficiency; Autosomal recessive (Gaucher Disease)"
      },
      {
        "id": "D",
        "text": "NOTCH3 mutation; Autosomal dominant (CADASIL)"
      },
      {
        "id": "E",
        "text": "Alpha-galactosidase A deficiency; X-linked recessive (Fabry Disease)"
      }
    ],
    "correctOptionId": "E",
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
        "text": "Primary Angiitis of the CNS; Cyclophosphamide"
      },
      {
        "id": "B",
        "text": "Fibromuscular Dysplasia; Renal angioplasty"
      },
      {
        "id": "C",
        "text": "Takayasu Arteritis; High-dose steroids"
      },
      {
        "id": "D",
        "text": "CADASIL; Gene therapy"
      },
      {
        "id": "E",
        "text": "Moyamoya Disease; Direct or indirect surgical revascularization (STA-MCA bypass or EDAS)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Moyamoya Disease features progressive bilateral steno-occlusion of the internal carotid bifurcation and proximal ACA/MCA, with prominent lenticulostriate collaterals ('puff of smoke' / moyamoya appearance on angiography). Hyperventilation (crying, eating hot food) causes cerebral vasoconstriction -> TIA/stroke. Treatment is surgical revascularization (STA-MCA bypass or EDAS/encephaloduroarteriosynangiosis).",
    "keyTakeaway": "Moyamoya Disease = 'Puff of smoke' collaterals on angiography + hyperventilation TIAs -> Treat with surgical revascularization.",
    "tags": [
      "Moyamoya",
      "Pediatric Stroke",
      "Vasculopathy"
    ],
    "hint": "Hyperventilation-induced TIAs in a young patient with basal ganglia collateral vascular net on angiogram.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-160",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 24-year-old male presents with stroke-like episodes, seizures, and lactic acidosis. MRI shows non-vascular cortical white matter hyperintensities. Genetic testing reveals an A3243G point mutation in mitochondrial DNA.",
    "question": "What is the diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "CADASIL"
      },
      {
        "id": "B",
        "text": "Leigh Syndrome"
      },
      {
        "id": "C",
        "text": "MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-like episodes)"
      },
      {
        "id": "D",
        "text": "Kearns-Sayre Syndrome"
      },
      {
        "id": "E",
        "text": "Fabry Disease"
      }
    ],
    "correctOptionId": "C",
    "explanation": "MELAS is a mitochondrial disorder caused by the MT-TL1 A3243G point mutation. Features: stroke-like cortical lesions that cross arterial territories, lactic acidosis, seizures, and sensorineural hearing loss.",
    "keyTakeaway": "MELAS = MT-TL1 A3243G mitochondrial mutation -> Stroke-like episodes crossing vascular territories + Lactic Acidosis.",
    "tags": [
      "MELAS",
      "Mitochondrial Stroke",
      "Genetic"
    ],
    "hint": "Mitochondrial mutation causing cortical stroke-like lesions that do not respect arterial vascular territories.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-161",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 16-year-old male with marfanoid habitus, ectopia lentis (downward lens dislocation), and intellectual disability presents with acute carotid artery thrombosis.",
    "question": "What amino acid disorder is present, and what is the treatment?",
    "options": [
      {
        "id": "A",
        "text": "Tyrosinemia"
      },
      {
        "id": "B",
        "text": "Phenylketonuria"
      },
      {
        "id": "C",
        "text": "Maple Syrup Urine Disease"
      },
      {
        "id": "D",
        "text": "Alkaptonuria"
      },
      {
        "id": "E",
        "text": "Homocystinuria (Cystathionine beta-synthase deficiency); Pyridoxine (Vitamin B6) + Folate + Vitamin B12"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Homocystinuria is an autosomal recessive metabolic disorder caused by cystathionine beta-synthase (CBS) deficiency. Features: marfanoid habitus, downward lens dislocation (vs upward in Marfan), intellectual disability, and severe early arterial/venous thromboses. Treated with high-dose Pyridoxine (B6), Folate, and B12.",
    "keyTakeaway": "Homocystinuria = CBS deficiency -> Downward lens ectopia + Marfanoid habitus + Early Thrombosis -> Treat with Vitamin B6 & Folate.",
    "tags": [
      "Homocystinuria",
      "Thrombophilia",
      "Vitamin B6"
    ],
    "hint": "Metabolic disorder causing lens subluxation downwards and early arterial/venous thrombotic events.",
    "source": "Past Board Exam"
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
        "text": "EC-IC bypass surgery within 24 hours"
      },
      {
        "id": "B",
        "text": "CEA is only indicated if stenosis is 100% (complete occlusion)"
      },
      {
        "id": "C",
        "text": "Medical therapy alone with Aspirin for 70-99% stenosis"
      },
      {
        "id": "D",
        "text": "Carotid artery stenting is mandatory for all symptomatic patients regardless of age"
      },
      {
        "id": "E",
        "text": "Carotid Endarterectomy (CEA) within 2 weeks yields maximum absolute risk reduction for 70-99% symptomatic stenosis"
      }
    ],
    "correctOptionId": "E",
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
        "text": "Embolic stroke from cardiac myxoma; TEE"
      },
      {
        "id": "D",
        "text": "Takayasu Arteritis; Aortic arch angiography"
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
    "id": "q-162",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 72-year-old female undergoes evaluation for 80% ASYMPTOMATIC right internal carotid artery stenosis.",
    "question": "What did the ACST and ACAS trials demonstrate regarding CEA in asymptomatic carotid stenosis?",
    "options": [
      {
        "id": "A",
        "text": "CEA provided zero benefit in asymptomatic patients"
      },
      {
        "id": "B",
        "text": "CEA reduced 5-year stroke risk from 11% to 5.1% (approx 1% per year ARR), but modern intensive medical therapy has further reduced medical stroke rates"
      },
      {
        "id": "C",
        "text": "Aspirin is contraindicated"
      },
      {
        "id": "D",
        "text": "CEA was harmful"
      },
      {
        "id": "E",
        "text": "Carotid stenting is superior to CEA in asymptomatic patients"
      }
    ],
    "correctOptionId": "B",
    "explanation": "ACAS and ACST showed that CEA for 60-99% asymptomatic carotid stenosis reduced 5-year stroke risk with a modest ARR of ~1% per year (if perioperative stroke/death risk < 3%). Modern aggressive medical therapy (high-dose statin, DAPT, BP control) has significantly lowered medical stroke rates, making routine revascularization for asymptomatic stenosis controversial.",
    "keyTakeaway": "ACAS/ACST: CEA provides a modest ~1%/year ARR for 60-99% asymptomatic carotid stenosis; modern medical therapy is increasingly preferred.",
    "tags": [
      "ACAS/ACST",
      "Asymptomatic Carotid",
      "Revascularization"
    ],
    "hint": "Trial threshold requiring low perioperative surgical complication rates (< 3%) for modest 5-year stroke reduction.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-163",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 75-year-old male with 80% symptomatic carotid stenosis is evaluated for CEA versus Carotid Artery Stenting (CAS).",
    "question": "Based on the CREST trial, how do CEA and CAS compare regarding periprocedural stroke versus myocardial infarction, particularly in elderly patients?",
    "options": [
      {
        "id": "A",
        "text": "CAS is contraindicated in all males"
      },
      {
        "id": "B",
        "text": "CEA had higher stroke rates than CAS"
      },
      {
        "id": "C",
        "text": "Both procedures have identical complication profiles"
      },
      {
        "id": "D",
        "text": "CAS was superior in all age groups"
      },
      {
        "id": "E",
        "text": "CAS had a higher rate of periprocedural stroke, whereas CEA had a higher rate of periprocedural MI; elderly patients (> 70) had superior outcomes with CEA"
      }
    ],
    "correctOptionId": "E",
    "explanation": "The CREST trial showed overall equal primary endpoint rates between CEA and CAS. However, CAS had a significantly higher rate of periprocedural STROKE, whereas CEA had a higher rate of periprocedural MI. Older patients (> 70 years) achieved significantly better outcomes with CEA (due to aortic arch vascular tortuosity in CAS).",
    "keyTakeaway": "CREST Trial: CAS has higher periprocedural stroke risk; CEA has higher MI risk. Elderly (> 70) fare better with CEA!",
    "tags": [
      "CREST Trial",
      "CEA vs CAS",
      "Carotid Stenosis"
    ],
    "hint": "Consider the procedural access risk of navigating catheter wires through tortuous calcified aortic arches in elderly patients.",
    "source": "Landmark Trial"
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
        "text": "Aspirin 81 mg daily alone without closure"
      },
      {
        "id": "C",
        "text": "No intervention required"
      },
      {
        "id": "D",
        "text": "Long-term Warfarin anticoagulation alone without closure"
      },
      {
        "id": "E",
        "text": "Left atrial appendage occlusion"
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
        "text": "DOACs require frequent INR monitoring"
      },
      {
        "id": "B",
        "text": "DOACs show superior or non-inferior efficacy for ischemic stroke prevention with a ~50% reduction in intracerebral hemorrhage (ICH)"
      },
      {
        "id": "C",
        "text": "Warfarin is superior in patients with end-stage renal disease"
      },
      {
        "id": "D",
        "text": "DOACs are indicated in mechanical heart valves"
      },
      {
        "id": "E",
        "text": "Warfarin has a lower rate of major bleeding than DOACs"
      }
    ],
    "correctOptionId": "B",
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
    "id": "q-164",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 68-year-old male with non-valvular AFib, hypertension, diabetes, and prior ischemic stroke has a calculated CHA2DS2-VASc score.",
    "question": "What is his CHA2DS2-VASc score and indicated antithrombotic therapy?",
    "options": [
      {
        "id": "A",
        "text": "CHA2DS2-VASc = 1; Aspirin alone"
      },
      {
        "id": "B",
        "text": "CHA2DS2-VASc = 8; Triple therapy"
      },
      {
        "id": "C",
        "text": "CHA2DS2-VASc = 5 (HTN 1, DM 1, Age 65-74 1, Stroke 2); Oral Anticoagulation (DOAC) strongly indicated"
      },
      {
        "id": "D",
        "text": "CHA2DS2-VASc = 0; No treatment"
      },
      {
        "id": "E",
        "text": "CHA2DS2-VASc = 2; Clopidogrel"
      }
    ],
    "correctOptionId": "C",
    "explanation": "CHA2DS2-VASc components: CHF (1), HTN (1), Age >= 75 (2), Diabetes (1), Stroke/TIA (2), Vascular disease (1), Age 65-74 (1), Sex category female (1). Here: HTN (1) + DM (1) + Age 68 (1) + Prior Stroke (2) = 5. A score >= 2 in men or >= 3 in women mandates oral anticoagulation (DOAC preferred).",
    "keyTakeaway": "CHA2DS2-VASc >= 2 in men mandates oral anticoagulation with a DOAC.",
    "tags": [
      "CHA2DS2-VASc",
      "AFib Risk",
      "Anticoagulation"
    ],
    "hint": "Calculate points for hypertension, diabetes, age 68, and prior ischemic stroke.",
    "source": "Guideline Recommendation"
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
        "text": "ICH Score = 0; 0% mortality"
      },
      {
        "id": "B",
        "text": "ICH Score = 2; 26% mortality"
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
        "text": "ICH Score = 3 (GCS 11=1, Volume >= 30=1, IVH=1); approx 72% 30-day mortality"
      }
    ],
    "correctOptionId": "E",
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
        "text": "Vitamin K1 IV"
      },
      {
        "id": "B",
        "text": "Protamine sulfate"
      },
      {
        "id": "C",
        "text": "Andexanet alfa (Andexxa)"
      },
      {
        "id": "D",
        "text": "Idarucizumab (Praxbind)"
      },
      {
        "id": "E",
        "text": "Prothrombin Complex Concentrate (4-factor PCC / Kcentra)"
      }
    ],
    "correctOptionId": "D",
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
    "id": "q-165",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 66-year-old male presents with acute left putaminal ICH (volume 20 mL) and initial BP of 195/105 mmHg. GCS is 14.",
    "question": "Based on INTERACT2 and ATACH-2 trials, what is the goal SBP target for acute BP lowering in spontaneous ICH?",
    "options": [
      {
        "id": "A",
        "text": "Keep SBP > 180 mmHg to maintain cerebral perfusion"
      },
      {
        "id": "B",
        "text": "Lower SBP < 90 mmHg"
      },
      {
        "id": "C",
        "text": "Rapidly lower SBP to 130-140 mmHg within 2 hours (target SBP < 140 mmHg)"
      },
      {
        "id": "D",
        "text": "Maintain SBP strictly between 160 and 180 mmHg"
      },
      {
        "id": "E",
        "text": "Hold all antihypertensives for 24 hours"
      }
    ],
    "correctOptionId": "C",
    "explanation": "INTERACT2 and ATACH-2 established that rapidly lowering SBP to a target of 130-140 mmHg within 2 hours of presentation is safe and reduces hematoma expansion. ATACH-2 showed that dropping SBP below 120 mmHg increased renal adverse events, so the sweet spot is SBP 130-140 mmHg.",
    "keyTakeaway": "Acute ICH BP Target: Lower SBP rapidly to 130-140 mmHg within 2 hours (INTERACT2/ATACH-2).",
    "tags": [
      "INTERACT2",
      "ATACH-2",
      "ICH BP Target"
    ],
    "hint": "Identify the proven blood pressure target range that minimizes hematoma growth without inducing renal toxicity.",
    "source": "Landmark Trial"
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
        "text": "Aneurysm rebleeding; IV Aminocaproic acid"
      },
      {
        "id": "B",
        "text": "Cerebral salt wasting; IV Hypertonic saline"
      },
      {
        "id": "C",
        "text": "Cerebral vasospasm / Delayed Cerebral Ischemia (DCI); Nimodipine 60 mg orally every 4 hours for 21 days"
      },
      {
        "id": "D",
        "text": "Hydrocephalus; IV Furosemide"
      },
      {
        "id": "E",
        "text": "Seizure activity; IV Levetiracetam loading dose"
      }
    ],
    "correctOptionId": "C",
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
    "id": "q-166",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage",
    "vignette": "A 52-year-old female presents with ruptured anterior communicating artery aneurysm. The neurovascular team discusses treatment options.",
    "question": "What did the ISAT trial demonstrate regarding endovascular coiling versus surgical clipping for ruptured intracranial aneurysms?",
    "options": [
      {
        "id": "A",
        "text": "Both modalities had identical outcomes"
      },
      {
        "id": "B",
        "text": "Endovascular coiling resulted in a significantly higher rate of disability-free survival at 1 year compared to surgical clipping"
      },
      {
        "id": "C",
        "text": "Coiling increased 1-year mortality"
      },
      {
        "id": "D",
        "text": "Clipping is contraindicated in anterior circulation aneurysms"
      },
      {
        "id": "E",
        "text": "Surgical clipping was superior in all cases"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The ISAT trial (International Subarachnoid Aneurysm Trial) proved that in ruptured intracranial aneurysms suitable for both modalities, endovascular coiling yielded a 7% absolute risk reduction in dependent survival/death at 1 year compared to open surgical clipping.",
    "keyTakeaway": "ISAT Trial: Endovascular coiling > Surgical clipping for 1-year disability-free survival in ruptured aneurysms.",
    "tags": [
      "ISAT Trial",
      "Coiling vs Clipping",
      "SAH"
    ],
    "hint": "Landmark RCT establishing endovascular coiling superiority for eligible ruptured berry aneurysms.",
    "source": "Landmark Trial"
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
        "text": "Start Warfarin anticoagulation"
      },
      {
        "id": "B",
        "text": "Abnormal TCD (TAMMV >= 200 cm/s); initiate chronic blood transfusion therapy to maintain HbS < 30%"
      },
      {
        "id": "C",
        "text": "Low risk; administer oral Aspirin 81 mg daily"
      },
      {
        "id": "D",
        "text": "Normal TCD; continue observation"
      },
      {
        "id": "E",
        "text": "Indication for emergent surgical EC-IC bypass"
      }
    ],
    "correctOptionId": "B",
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
        "text": "Administer IV tPA systemically"
      },
      {
        "id": "B",
        "text": "Full-dose therapeutic anticoagulation with LMWH or unfractionated Heparin, despite the presence of hemorrhagic transformation"
      },
      {
        "id": "C",
        "text": "Aspirin 325 mg daily alone"
      },
      {
        "id": "D",
        "text": "Emergent decompressive craniectomy only"
      },
      {
        "id": "E",
        "text": "Hold all anticoagulation due to the hemorrhagic transformation"
      }
    ],
    "correctOptionId": "B",
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
        "text": "Primary Angiitis of the CNS (PACNS); High-dose IV Methylprednisolone + Cyclophosphamide"
      },
      {
        "id": "B",
        "text": "Reversible Cerebral Vasoconstriction Syndrome (RCVS); Calcium Channel Blockers (Nimodipine/Verapamil) and remove triggering agents"
      },
      {
        "id": "C",
        "text": "Temporal Arteritis; Oral Prednisone 60 mg daily"
      },
      {
        "id": "D",
        "text": "Bacterial Meningitis; IV Ceftriaxone + Vancomycin"
      },
      {
        "id": "E",
        "text": "Moyamoya Disease; Surgical synangiosis"
      }
    ],
    "correctOptionId": "B",
    "explanation": "RCVS features thunderclap headaches, reversible multifocal cerebral arterial vasoconstriction, and normal CSF. Distinguished from PACNS (which has insidious onset, abnormal inflammatory CSF, and requires aggressive immunosuppression). RCVS is treated with CCBs (Verpamil/Nimodipine) and trigger avoidance (SSRIs, sympathomimetics).",
    "keyTakeaway": "RCVS = Thunderclap headache + Segmental arterial constriction + Normal CSF -> Treat with CCBs (vs PACNS which has abnormal CSF & requires steroids).",
    "tags": [
      "RCVS",
      "Vasculopathy",
      "Differential Diagnosis"
    ],
    "hint": "Normal CSF in a patient with thunderclap headache and reversible arterial spasm strongly favors RCVS over PACNS.",
    "source": "Past Board Exam"
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
        "text": "High-dose IV Dexamethasone"
      },
      {
        "id": "B",
        "text": "Hypothermia to 31 degrees C"
      },
      {
        "id": "C",
        "text": "Immediate intra-arterial tPA infusion"
      },
      {
        "id": "D",
        "text": "Intracranial pressure monitoring alone without surgery"
      },
      {
        "id": "E",
        "text": "Decompressive hemicraniectomy"
      }
    ],
    "correctOptionId": "E",
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
        "text": "Clopidogrel + Ticagrelor for 90 days"
      },
      {
        "id": "B",
        "text": "Aspirin + Clopidogrel continued indefinitely for 1 year"
      },
      {
        "id": "C",
        "text": "Aspirin monotherapy indefinitely from day 1"
      },
      {
        "id": "D",
        "text": "Dual Antiplatelet Therapy (Aspirin + Clopidogrel) initiated within 24 hours and continued for 21 days, followed by monotherapy"
      },
      {
        "id": "E",
        "text": "Warfarin anticoagulation for 3 months"
      }
    ],
    "correctOptionId": "D",
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
    "id": "q-36",
    "chapterId": 19,
    "chapterTitle": "Secondary Prevention & Antithrombotics",
    "vignette": "A 68-year-old non-cardioembolic ischemic stroke patient with baseline LDL cholesterol of 135 mg/dL is started on Atorvastatin 80 mg daily.",
    "question": "Based on the SPARCL trial, what was the primary finding regarding high-dose statin therapy post-stroke?",
    "options": [
      {
        "id": "A",
        "text": "Pravastatin 20 mg is superior to Atorvastatin 80 mg"
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
        "text": "Atorvastatin 80 mg daily significantly reduced recurrent stroke and major cardiovascular events in patients without known CHD"
      },
      {
        "id": "E",
        "text": "Target LDL should be kept above 130 mg/dL"
      }
    ],
    "correctOptionId": "D",
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
    "id": "q-35",
    "chapterId": 20,
    "chapterTitle": "Rehabilitation & Prognostication",
    "vignette": "A stroke survivor is evaluated at 90 days post-stroke. He is able to walk unassisted and look after his own affairs without assistance, but has mild residual right hand clumsiness that prevents him from playing the guitar as he did prior to the stroke.",
    "question": "What is his score on the Modified Rankin Scale (mRS)?",
    "options": [
      {
        "id": "A",
        "text": "mRS 4 (Moderately severe disability; unable to walk unassisted)"
      },
      {
        "id": "B",
        "text": "mRS 2 (Slight disability; unable to look after own affairs)"
      },
      {
        "id": "C",
        "text": "mRS 0 (No symptoms at all)"
      },
      {
        "id": "D",
        "text": "mRS 1 (Slight disability; unable to carry out all previous activities, but able to look after own affairs without assistance)"
      },
      {
        "id": "E",
        "text": "mRS 3 (Moderate disability; requires some help, but able to walk unassisted)"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Modified Rankin Scale (mRS) definitions: mRS 0 = No symptoms; mRS 1 = No significant disability despite symptoms (able to carry out all usual duties and activities is mRS 0, unable to carry out all previous activities but independent in daily affairs is mRS 1); mRS 2 = Slight disability (independent in daily living, cannot carry out all previous activities); mRS 3 = Moderate disability (requires help, but walks unassisted); mRS 4 = Moderately severe disability (unable to walk without assistance); mRS 5 = Severe disability (bedridden); mRS 6 = Dead.",
    "keyTakeaway": "mRS 1 = Symptoms present, unable to carry out all previous activities, but fully independent in self-care.",
    "tags": [
      "Rehabilitation",
      "mRS Scoring",
      "Prognosis"
    ],
    "hint": "Independent in daily living and self-care, but unable to resume all pre-stroke complex activities corresponds to mRS 1.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-175",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 45-year-old female with recurrent lacunar strokes and migraines has a brain MRI demonstrating bilateral anterior temporal pole leukoaraiosis. Genetic testing confirms a NOTCH3 mutation.",
    "question": "What is the inheritance pattern and pathognomonic MRI location for CADASIL?",
    "options": [
      {
        "id": "A",
        "text": "Autosomal Recessive; Basal ganglia calcification"
      },
      {
        "id": "B",
        "text": "X-linked Recessive; Cerebellar atrophy"
      },
      {
        "id": "C",
        "text": "Autosomal Dominant; Anterior Temporal Pole & External Capsule hyperintensities"
      },
      {
        "id": "D",
        "text": "Mitochondrial; Occipital lobe lesions"
      },
      {
        "id": "E",
        "text": "Autosomal Dominant; Brainstem infarction"
      }
    ],
    "correctOptionId": "C",
    "explanation": "CADASIL is an Autosomal Dominant disorder caused by NOTCH3 mutations on chromosome 19. The pathognomonic MRI markers are hyperintensities in the anterior temporal poles and external capsules.",
    "keyTakeaway": "CADASIL = Autosomal Dominant NOTCH3 mutation + Anterior temporal pole MRI hyperintensity.",
    "tags": [
      "CADASIL",
      "NOTCH3",
      "Temporal Pole"
    ],
    "hint": "Pathognomonic MRI white matter hyperintensities in the anterior temporal pole.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-176",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 30-year-old female presents with blue sclera, hypermobile joints, and sudden internal carotid artery dissection without trauma.",
    "question": "Which vascular type of Ehlers-Danlos Syndrome (vEDS) is associated with spontaneous arterial rupture and dissection?",
    "options": [
      {
        "id": "A",
        "text": "Loeys-Dietz Syndrome; TGFBR1/2 mutation"
      },
      {
        "id": "B",
        "text": "Marfan Syndrome; FBN1 mutation"
      },
      {
        "id": "C",
        "text": "Vascular Ehlers-Danlos Syndrome Type IV; COL3A1 mutation"
      },
      {
        "id": "D",
        "text": "Type I EDS"
      },
      {
        "id": "E",
        "text": "Osteogenesis Imperfecta"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Vascular Ehlers-Danlos Syndrome (vEDS, Type IV) is caused by autosomal dominant mutations in COL3A1 (type III procollagen). It carries a high risk of spontaneous arterial dissection, aneurysm rupture, and bowel/uterine perforation.",
    "keyTakeaway": "Vascular Ehlers-Danlos (Type IV) = COL3A1 mutation -> High risk of spontaneous arterial dissection and rupture.",
    "tags": [
      "vEDS",
      "COL3A1",
      "Arterial Dissection"
    ],
    "hint": "Type III procollagen gene defect causing arterial fragility and spontaneous dissection.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-180",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 50-year-old male with severe 85% symptomatic left ICA stenosis undergoes TransCarotid Artery Revascularization (TCAR) with dynamic flow reversal.",
    "question": "What is the primary technical advantage of TCAR compared to transfemoral carotid artery stenting (TF-CAS)?",
    "options": [
      {
        "id": "A",
        "text": "Replaces need for CEA in 100% total occlusions"
      },
      {
        "id": "B",
        "text": "Eliminates need for antiplatelet therapy"
      },
      {
        "id": "C",
        "text": "Direct carotid artery access with continuous retrograde flow reversal protects the brain from embolic debris during stent deployment"
      },
      {
        "id": "D",
        "text": "Prevents intracranial stenosis"
      },
      {
        "id": "E",
        "text": "Can be performed without anesthesia"
      }
    ],
    "correctOptionId": "C",
    "explanation": "TCAR (TransCarotid Artery Revascularization) utilizes direct carotid surgical access paired with high-rate retrograde flow reversal, directing embolic debris away from the brain into an arterial filter during stent placement, significantly reducing periprocedural stroke risk.",
    "keyTakeaway": "TCAR uses direct carotid access + dynamic flow reversal to minimize embolic stroke during stenting.",
    "tags": [
      "TCAR",
      "Carotid Stenting",
      "Flow Reversal"
    ],
    "hint": "Direct surgical carotid cutdown paired with retrograde blood flow filtering.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-181",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 54-year-old male presents with left arm pain and fatigue during overhead arm exertion, accompanied by transient dizziness and diplopia when using his left arm.",
    "question": "What vascular phenomenon is present, and what is the underlying subclavian lesion?",
    "options": [
      {
        "id": "A",
        "text": "Thoracic outlet syndrome"
      },
      {
        "id": "B",
        "text": "Carotid artery dissection"
      },
      {
        "id": "C",
        "text": "Subclavian Steal Syndrome; Proximal subclavian artery occlusion causing retrograde flow down the ipsilateral vertebral artery"
      },
      {
        "id": "D",
        "text": "Vertebrobasilar insufficiency from PICA stroke"
      },
      {
        "id": "E",
        "text": "Raynaud phenomenon"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Subclavian Steal Syndrome occurs when proximal subclavian artery occlusion causes blood to be 'stolen' from the brain by flowing retrogradely down the ipsilateral vertebral artery into the arm during arm exercise, precipitating posterior circulation TIAs.",
    "keyTakeaway": "Subclavian Steal = Proximal subclavian occlusion -> Retrograde vertebral artery flow -> Posterior circulation TIAs on arm exercise.",
    "tags": [
      "Subclavian Steal",
      "Vertebral Artery",
      "Retrograde Flow"
    ],
    "hint": "Exercise of the upper extremity precipitating posterior circulation brainstem ischemic symptoms.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-190",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 32-year-old female presents with multiple embolic strokes in different vascular territories, fever, weight loss, and a positional left atrial diastolic murmur ('tumor plop').",
    "question": "What is the most likely diagnosis, and what is the treatment?",
    "options": [
      {
        "id": "A",
        "text": "Libman-Sacks endocarditis; High-dose steroids"
      },
      {
        "id": "B",
        "text": "Left Atrial Myxoma; Surgical resection of cardiac tumor"
      },
      {
        "id": "C",
        "text": "Infective endocarditis; IV Vancomycin"
      },
      {
        "id": "D",
        "text": "Non-bacterial thrombotic endocarditis; LMWH"
      },
      {
        "id": "E",
        "text": "Mitral valve prolapse; Aspirin"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Left Atrial Myxoma is the most common primary cardiac tumor. Features: constitutional symptoms (fever, weight loss), embolic strokes in young patients, and a characteristic diastolic 'tumor plop' murmur. Treated with surgical resection.",
    "keyTakeaway": "Left Atrial Myxoma = Primary cardiac tumor causing embolic strokes + diastolic tumor plop -> Surgical excision.",
    "tags": [
      "Cardiac Myxoma",
      "Cardioembolic",
      "Young Stroke"
    ],
    "hint": "Primary benign cardiac neoplasm presenting with systemic emboli and positional murmur.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-191",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 60-year-old male with acute prosthetic mechanical mitral valve thrombosis presents with an embolic stroke. His INR is 1.5.",
    "question": "Which antithrombotic therapy is strictly MANDATORY for patients with mechanical heart valves?",
    "options": [
      {
        "id": "A",
        "text": "Warfarin (Vitamin K Antagonist) targeting INR 2.5-3.5; DOACs are CONTRAINDICATED in mechanical valves!"
      },
      {
        "id": "B",
        "text": "Apixaban 5 mg twice daily"
      },
      {
        "id": "C",
        "text": "Rivaroxaban 20 mg once daily"
      },
      {
        "id": "D",
        "text": "Aspirin 81 mg daily alone"
      },
      {
        "id": "E",
        "text": "Dabigatran 150 mg twice daily"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The RE-ALIGN trial proved that DOACs (Dabigatran) cause HIGHER rates of thromboembolism and bleeding in patients with mechanical heart valves. Warfarin is strictly MANDATORY for mechanical heart valves (target INR 2.5-3.5 for mechanical mitral; 2.0-3.0 for mechanical aortic).",
    "keyTakeaway": "Mechanical Heart Valves = WARFARIN ONLY (target INR 2.5-3.5 for mechanical mitral). DOACs are CONTRAINDICATED!",
    "tags": [
      "Mechanical Valve",
      "Warfarin",
      "DOAC Contraindication"
    ],
    "hint": "RE-ALIGN trial established that direct oral anticoagulants are strictly contraindicated in mechanical prosthetic valves.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-200",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 72-year-old male taking Warfarin for AFib presents with acute right putaminal ICH (volume 25 mL) and an INR of 3.2.",
    "question": "What is the fastest and most effective protocol for urgent Warfarin reversal in acute ICH?",
    "options": [
      {
        "id": "A",
        "text": "Administer Idarucizumab"
      },
      {
        "id": "B",
        "text": "Administer Fresh Frozen Plasma (FFP) alone"
      },
      {
        "id": "C",
        "text": "Hold Warfarin and observe"
      },
      {
        "id": "D",
        "text": "Administer Cryoprecipitate 10 units"
      },
      {
        "id": "E",
        "text": "Administer 4-Factor Prothrombin Complex Concentrate (4F-PCC / Kcentra 25-50 U/kg IV) AND IV Vitamin K1 (10 mg IV slow push)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Per AHA/ASA ICH guidelines, 4-Factor Prothrombin Complex Concentrate (4F-PCC / Kcentra) combined with IV Vitamin K1 (10 mg IV) is preferred over FFP for urgent Warfarin reversal because 4F-PCC normalizes INR within 15-30 minutes without volume overload.",
    "keyTakeaway": "Warfarin ICH Reversal = 4F-PCC (Kcentra) + IV Vitamin K1 (10 mg). 4F-PCC > FFP due to rapid INR correction.",
    "tags": [
      "Warfarin Reversal",
      "4F-PCC",
      "Kcentra"
    ],
    "hint": "Four-factor prothrombin complex concentrate rapidly restores Vitamin K-dependent clotting factors II, VII, IX, and X.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-201",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 70-year-old female taking Rivaroxaban 20 mg daily presents with spontaneous lobar ICH. What is the specific FDA-approved reversal agent for Factor Xa inhibitors (Apixaban, Rivaroxaban)?",
    "question": "What is the specific reversal agent for Factor Xa inhibitors?",
    "options": [
      {
        "id": "A",
        "text": "Vitamin K1"
      },
      {
        "id": "B",
        "text": "Idarucizumab (Praxbind)"
      },
      {
        "id": "C",
        "text": "Andexanet alfa (Andexxa)"
      },
      {
        "id": "D",
        "text": "Desmopressin"
      },
      {
        "id": "E",
        "text": "Protamine sulfate"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Andexanet alfa (Andexxa) is a recombinant decoy factor Xa molecule designed to bind and sequester direct factor Xa inhibitors (Apixaban, Rivaroxaban), achieving rapid reversal of anti-Xa activity.",
    "keyTakeaway": "Factor Xa Inhibitor Reversal = Andexanet alfa (Andexxa). Direct Thrombin Inhibitor Reversal = Idarucizumab (Praxbind).",
    "tags": [
      "Factor Xa Reversal",
      "Andexanet Alfa",
      "DOAC Reversal"
    ],
    "hint": "Recombinant inactive decoy factor Xa protein sequestering apixaban and rivaroxaban.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-210",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage",
    "vignette": "A 48-year-old female with aneurysmal SAH develops progressive hyponatremia (serum sodium 124 mEq/L) on post-bleed day 5, accompanied by hypovolemia and negative fluid balance.",
    "question": "What is the diagnosis, and how should fluid management be directed?",
    "options": [
      {
        "id": "A",
        "text": "Heart failure; Furosemide"
      },
      {
        "id": "B",
        "text": "Central Diabetes Insipidus; Desmopressin"
      },
      {
        "id": "C",
        "text": "SIADH; Fluid restriction < 1000 mL/day"
      },
      {
        "id": "D",
        "text": "Dehydration; Administer free water D5W"
      },
      {
        "id": "E",
        "text": "Cerebral Salt Wasting (CSW); Maintain EUVOLEMIA / hypertonic 3% saline and oral salt tablets (DO NOT fluid restrict!)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Cerebral Salt Wasting (CSW) causes hyponatremia WITH HYPOVOLEMIA due to renal sodium wasting (brain natriuretic peptide surge). Treatment is fluid resuscitation with isotonic or hypertonic (3%) saline and salt tablets to maintain EUVOLEMIA. Fluid restriction in CSW causes cerebral hypoperfusion and vasospasm infarction!",
    "keyTakeaway": "Cerebral Salt Wasting (CSW) = Hyponatremia + HYPOVOLEMIA in SAH -> Treat with 3% Saline & Salt Tablets (DO NOT fluid restrict!).",
    "tags": [
      "CSW vs SIADH",
      "Hyponatremia",
      "SAH Management"
    ],
    "hint": "Volume-depleted hyponatremic state following aneurysmal SAH requiring volume replacement.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-220",
    "chapterId": 15,
    "chapterTitle": "Pediatric Stroke & Hematology",
    "vignette": "A 6-year-old child presents 2 weeks after varicella (chickenpox) infection with acute right hemiparesis. MRA head demonstrates focal monovascular stenosis of the distal left internal carotid artery.",
    "question": "What is the diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Transient Cerebral Arteriopathy (TCA) of Childhood / Post-Varicella Angiopathy"
      },
      {
        "id": "B",
        "text": "Pediatric Atherosclerosis"
      },
      {
        "id": "C",
        "text": "CADASIL"
      },
      {
        "id": "D",
        "text": "Moyamoya Disease"
      },
      {
        "id": "E",
        "text": "Sickle Cell Stroke"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Transient Cerebral Arteriopathy (TCA) of Childhood (often post-varicella or post-viral) is a monophasic non-inflammatory focal arteriopathy affecting the distal ICA or proximal MCA. It typically stabilizes or improves over months.",
    "keyTakeaway": "Post-Varicella Angiopathy / TCA = Post-viral focal monovascular ICA stenosis in children -> Monophasic self-limiting course.",
    "tags": [
      "Pediatric Stroke",
      "Post-Varicella",
      "TCA"
    ],
    "hint": "Focal childhood intracranial arteriopathy triggered by recent varicella-zoster infection.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-230",
    "chapterId": 16,
    "chapterTitle": "Cerebral Venous Thrombosis",
    "vignette": "A 32-year-old female with superior sagittal sinus thrombosis presents with headache, bilateral papilledema, and sixth nerve palsies. Non-contrast CT demonstrates a non-enhancing thrombus in the posterior sagittal sinus surrounded by enhancing venous collateral walls.",
    "question": "What classic radiological sign is seen on contrast CT / MRV?",
    "options": [
      {
        "id": "A",
        "text": "Empty Delta Sign"
      },
      {
        "id": "B",
        "text": "Hyperdense MCA Sign"
      },
      {
        "id": "C",
        "text": "CTA Spot Sign"
      },
      {
        "id": "D",
        "text": "Puff of Smoke"
      },
      {
        "id": "E",
        "text": "String of Beads"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The Empty Delta Sign (or Empty Triangle Sign) is seen on contrast-enhanced CT or MRV in superior sagittal sinus thrombosis. The triangular central thrombus appears unenhanced ('empty') surrounded by enhancing dural sinus collateral walls.",
    "keyTakeaway": "Empty Delta Sign = Non-enhancing central thrombus in superior sagittal sinus on contrast CT/MRV.",
    "tags": [
      "CVT",
      "Empty Delta Sign",
      "Venous Sinus"
    ],
    "hint": "Triangular non-enhancing filling defect within the posterior dural sinus on contrast neuroimaging.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-240",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 72-year-old female presents with acute scalp tenderness, jaw claudication while chewing, double vision, and elevated ESR (88 mm/hr) and CRP.",
    "question": "What is the most immediate mandatory initial intervention to prevent irreversible blindness?",
    "options": [
      {
        "id": "A",
        "text": "Order stat head CT"
      },
      {
        "id": "B",
        "text": "Wait for temporal artery biopsy results before giving steroids"
      },
      {
        "id": "C",
        "text": "Start Aspirin 81 mg alone"
      },
      {
        "id": "D",
        "text": "Perform cerebral angiography"
      },
      {
        "id": "E",
        "text": "Initiate high-dose systemic corticosteroids (IV Methylprednisolone or oral Prednisone 60 mg) IMMEDIATELY before temporal artery biopsy"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Temporal Arteritis (Giant Cell Arteritis GCA) is a granulomatous vasculitis of medium and large arteries. Jaw claudication has > 90% specificity. Anterior Ischemic Optic Neuropathy (AION) can cause sudden permanent blindness. High-dose corticosteroids MUST be started IMMEDIATELY upon suspicion to protect the contralateral eye, without waiting for temporal artery biopsy!",
    "keyTakeaway": "Temporal Arteritis (GCA) = Jaw claudication + Scalp tenderness + High ESR -> Start HIGH-DOSE STEROIDS IMMEDIATELY to prevent blindness!",
    "tags": [
      "GCA",
      "Temporal Arteritis",
      "Steroid Urgency"
    ],
    "hint": "High-dose corticosteroid administration must not be delayed for bioptic verification when vision is threatened.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-250",
    "chapterId": 18,
    "chapterTitle": "Neuro-ICU & Hemodynamic Management",
    "vignette": "A 50-year-old male with traumatic brain injury and massive cerebral edema has an intracranial pressure (ICP) of 26 mmHg. Mean Arterial Pressure (MAP) is 85 mmHg.",
    "question": "What is his calculated Cerebral Perfusion Pressure (CPP), and is it adequate?",
    "options": [
      {
        "id": "A",
        "text": "CPP = 111 mmHg; CPP is normal"
      },
      {
        "id": "B",
        "text": "CPP = 85 mmHg; normal"
      },
      {
        "id": "C",
        "text": "CPP = 59 mmHg (MAP 85 minus ICP 26); CPP is inadequate (goal CPP 60-70 mmHg)"
      },
      {
        "id": "D",
        "text": "CPP = 26 mmHg; normal"
      },
      {
        "id": "E",
        "text": "CPP = 0 mmHg; brain death"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Cerebral Perfusion Pressure (CPP) = MAP minus ICP. Here: 85 - 26 = 59 mmHg. Per Brain Trauma Foundation and Neuro-ICU guidelines, target CPP is 60 to 70 mmHg. A CPP < 60 mmHg indicates cerebral hypoperfusion and requires immediate ICP lowering or MAP elevation.",
    "keyTakeaway": "CPP = MAP minus ICP. Target CPP goal is 60 to 70 mmHg.",
    "tags": [
      "Neuro-ICU",
      "CPP Calculation",
      "ICP Target"
    ],
    "hint": "Subtract measured intracranial pressure from mean arterial pressure to assess cerebral tissue perfusion adequacy.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-260",
    "chapterId": 19,
    "chapterTitle": "Secondary Prevention & Antithrombotics",
    "vignette": "A 66-year-old male with recent non-cardioembolic ischemic stroke has an LDL cholesterol of 120 mg/dL. Based on the TST (Treat Stroke to Target) trial and AHA guidelines, what is the goal target LDL for secondary stroke prevention?",
    "question": "What is the target LDL cholesterol goal for secondary stroke prevention?",
    "options": [
      {
        "id": "A",
        "text": "Target LDL < 200 mg/dL"
      },
      {
        "id": "B",
        "text": "No LDL target required"
      },
      {
        "id": "C",
        "text": "Target LDL < 160 mg/dL"
      },
      {
        "id": "D",
        "text": "Target LDL < 70 mg/dL (or > 50% LDL reduction)"
      },
      {
        "id": "E",
        "text": "Target LDL < 130 mg/dL"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The TST (Treat Stroke to Target) trial and AHA/ASA guidelines recommend targeting an LDL cholesterol level < 70 mg/dL (or >= 50% reduction) using high-intensity statin therapy (Atorvastatin 80mg / Rosuvastatin 40mg) in patients with atherosclerotic ischemic stroke.",
    "keyTakeaway": "Secondary Stroke Prevention Statin Goal: Target LDL < 70 mg/dL (or >= 50% reduction) with high-intensity statin.",
    "tags": [
      "Secondary Prevention",
      "TST Trial",
      "LDL Goal"
    ],
    "hint": "Target LDL threshold associated with maximal reduction in major vascular events.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-270",
    "chapterId": 20,
    "chapterTitle": "Rehabilitation & Prognostication",
    "vignette": "A 62-year-old stroke survivor 1 month post-stroke develops severe apathy, tearfulness, loss of interest in activities, and poor participation in physical therapy. MRI shows a left frontal cortical stroke.",
    "question": "What is the diagnosis, and what medication class is first-line for post-stroke depression?",
    "options": [
      {
        "id": "A",
        "text": "Psychosis; Haloperidol"
      },
      {
        "id": "B",
        "text": "Dementia; Donepezil"
      },
      {
        "id": "C",
        "text": "Malingering; Discontinue therapy"
      },
      {
        "id": "D",
        "text": "Post-Stroke Depression; Selective Serotonin Reuptake Inhibitors (SSRIs e.g., Escitalopram or Sertraline)"
      },
      {
        "id": "E",
        "text": "Normal post-stroke adjustment; No treatment"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Post-Stroke Depression (PSD) affects ~30% of stroke survivors, most commonly with left frontal or basal ganglia lesions. SSRIs (Escitalopram, Sertraline) are first-line treatment, improving mood, functional rehabilitation participation, and motor recovery (FLAME trial).",
    "keyTakeaway": "Post-Stroke Depression (30% prevalence, Left Frontal) -> Treat with SSRIs (Escitalopram/Sertraline).",
    "tags": [
      "Post-Stroke Depression",
      "Rehabilitation",
      "SSRIs"
    ],
    "hint": "Mood disturbance following left hemispheric frontal lesion responding to serotonergic antidepressants.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-275",
    "chapterId": 21,
    "chapterTitle": "Landmark Clinical Trials Master Summary",
    "vignette": "A 65-year-old male presents within 3 hours of acute ischemic stroke onset. Which landmark clinical trial in 1995 first established the efficacy of IV Alteplase (tPA) for acute ischemic stroke?",
    "question": "Which landmark 1995 trial established the efficacy of IV Alteplase within 3 hours?",
    "options": [
      {
        "id": "A",
        "text": "SAMMPRIS Trial"
      },
      {
        "id": "B",
        "text": "ECASS-3 Trial"
      },
      {
        "id": "C",
        "text": "SPARCL Trial"
      },
      {
        "id": "D",
        "text": "NINDS Recombinant Tissue Plasminogen Activator Stroke Trial"
      },
      {
        "id": "E",
        "text": "MR CLEAN Trial"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The 1995 NINDS tPA Trial was the seminal randomized controlled trial proving that IV Alteplase (0.9 mg/kg) administered within 3 hours of symptom onset significantly improved 3-month functional independence (30% relative increase in minimal/no disability).",
    "keyTakeaway": "1995 NINDS tPA Trial: First landmark trial proving IV tPA efficacy within 3 hours for acute ischemic stroke.",
    "tags": [
      "NINDS Trial",
      "Landmark Trials",
      "Alteplase"
    ],
    "hint": "The foundational 1995 trial that revolutionized hyperacute stroke therapy.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-276",
    "chapterId": 21,
    "chapterTitle": "Landmark Clinical Trials Master Summary",
    "vignette": "Which landmark 2015 trial published in the NEJM led off the modern era of Endovascular Thrombectomy (EVT) by demonstrating massive benefit for LVO stroke within 6 hours?",
    "question": "Which 2015 landmark trial inaugurated the modern era of endovascular thrombectomy for LVO stroke?",
    "options": [
      {
        "id": "A",
        "text": "NINDS Trial"
      },
      {
        "id": "B",
        "text": "MR CLEAN Trial"
      },
      {
        "id": "C",
        "text": "NASCET Trial"
      },
      {
        "id": "D",
        "text": "SAMMPRIS Trial"
      },
      {
        "id": "E",
        "text": "SPARCL Trial"
      }
    ],
    "correctOptionId": "B",
    "explanation": "MR CLEAN (Multicenter Randomized Clinical Trial of Endovascular Treatment for Acute Ischemic Stroke in the Netherlands) published in Jan 2015 was the first positive RCT proving that stent retriever thrombectomy within 6 hours dramatically improves 90-day functional independence (NNT = 2.6). Followed immediately by ESCAPE, EXTEND-IA, SWIFT-PRIME, and REVASCAT.",
    "keyTakeaway": "2015 MR CLEAN Trial: The pivotal landmark trial that inaugurated the modern era of mechanical thrombectomy for LVO!",
    "tags": [
      "MR CLEAN",
      "Landmark Trials",
      "Thrombectomy"
    ],
    "hint": "Dutch multicenter trial that opened the floodgates for endovascular clot retrieval evidence.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-301",
    "chapterId": 1,
    "chapterTitle": "Emergency Code Stroke Assessment",
    "vignette": "A 68-year-old female presents with acute onset MRI-confirmed wake-up ischemic stroke. Last seen normal was 9 hours ago.",
    "question": "Based on the EXTEND and WAKE-UP trials, what advanced imaging modality can be used to select patients for IV thrombolysis despite unknown symptom onset time?",
    "options": [
      {
        "id": "A",
        "text": "Cerebral angiography"
      },
      {
        "id": "B",
        "text": "MRI DWI-FLAIR mismatch (positive DWI lesion with no hyperintensity on FLAIR) or CTP perfusion mismatch"
      },
      {
        "id": "C",
        "text": "Non-contrast CT head alone"
      },
      {
        "id": "D",
        "text": "Carotid duplex ultrasound"
      },
      {
        "id": "E",
        "text": "Electroencephalogram (EEG)"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The WAKE-UP trial demonstrated that patients with wake-up stroke who have MRI DWI-FLAIR mismatch (acute ischemic lesion visible on DWI but not yet visible on FLAIR, indicating onset < 4.5h) derive significant benefit from IV Alteplase. EXTEND proved benefit up to 9 hours using CTP perfusion mismatch.",
    "keyTakeaway": "WAKE-UP Trial: MRI DWI-FLAIR mismatch identifies wake-up stroke patients eligible for IV thrombolysis.",
    "tags": [
      "WAKE-UP Trial",
      "DWI-FLAIR Mismatch",
      "Wake-up Stroke"
    ],
    "hint": "Look for the acute ischemic lesion on DWI that has not yet developed T2/FLAIR hyperintensity.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-302",
    "chapterId": 1,
    "chapterTitle": "Emergency Code Stroke Assessment",
    "vignette": "A 72-year-old male with sudden dense right hemiplegia has an emergency department Door-to-Needle (DTN) time of 22 minutes.",
    "question": "Which workflow optimization step contributes most significantly to achieving ultra-rapid DTN times (< 30 minutes)?",
    "options": [
      {
        "id": "A",
        "text": "Obtaining consent from distant family members before CT"
      },
      {
        "id": "B",
        "text": "Direct transport of the patient from the ambulance stretcher onto the CT scanner table with pre-hospital EMS stroke notification"
      },
      {
        "id": "C",
        "text": "Performing full physical exam before neuroimaging"
      },
      {
        "id": "D",
        "text": "Waiting for lab results before CT scan"
      },
      {
        "id": "E",
        "text": "Obtaining routine chest X-ray before CT"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Pre-hospital EMS notification, direct transport of the patient from the ambulance onto the CT scanner table ('CT direct'), point-of-care glucose testing, and pre-mixing thrombolytic medication at the CT scanner are key evidence-based interventions that reduce DTN times below 30 minutes.",
    "keyTakeaway": "EMS pre-notification and direct transport to CT scanner table ('CT direct') are key drivers of ultra-rapid DTN times.",
    "tags": [
      "Door-to-Needle",
      "Workflow",
      "Target Stroke"
    ],
    "hint": "Bypassing the ED bed to transport the patient straight to the CT suite upon arrival.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-303",
    "chapterId": 2,
    "chapterTitle": "Initial Stroke Evaluation & Thrombolysis",
    "vignette": "A 60-year-old male presents 2 hours after acute stroke onset. He is taking Dabigatran for AFib. Stat lab results show normal Ecarin Clotting Time (ECT) and normal Diluted Thrombin Time (dTT).",
    "question": "Can IV tPA be administered to this patient?",
    "options": [
      {
        "id": "A",
        "text": "Yes, if SBP < 120 mmHg"
      },
      {
        "id": "B",
        "text": "Yes, provided Protamine is given"
      },
      {
        "id": "C",
        "text": "No, Dabigatran intake is an absolute contraindication regardless of labs"
      },
      {
        "id": "D",
        "text": "No, unless INR > 3.0"
      },
      {
        "id": "E",
        "text": "Yes, normal/undetectable dTT and ECT indicate no significant Dabigatran anticoagulant effect, allowing safe tPA administration"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Per AHA/ASA guidelines, if a patient on Dabigatran has documented normal sensitive coagulation tests (dTT or ECT), or anti-Xa activity is undetectable for Xa inhibitors, IV tPA may be considered safe because active anticoagulant effect is absent.",
    "keyTakeaway": "Normal sensitive coagulation assays (dTT/ECT for Dabigatran, anti-Xa for Xa inhibitors) allow safe IV tPA administration.",
    "tags": [
      "DOAC Reversal",
      "dTT",
      "Thrombolysis Criteria"
    ],
    "hint": "Specific laboratory assays measuring direct thrombin inhibitor activity.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-304",
    "chapterId": 2,
    "chapterTitle": "Initial Stroke Evaluation & Thrombolysis",
    "vignette": "A 65-year-old female experiences severe nausea, vomiting, and SBP spike to 210 mmHg 15 minutes after starting IV tPA.",
    "question": "What immediate IV antihypertensive agent is first-line for rapid, titratable blood pressure control during acute stroke thrombolysis?",
    "options": [
      {
        "id": "A",
        "text": "IV Labetalol or IV Nicardipine / Clevidipine infusion"
      },
      {
        "id": "B",
        "text": "IV Nitroprusside bolus"
      },
      {
        "id": "C",
        "text": "Oral Clonidine"
      },
      {
        "id": "D",
        "text": "Sublingual Nifedipine"
      },
      {
        "id": "E",
        "text": "Oral Lisinopril"
      }
    ],
    "correctOptionId": "A",
    "explanation": "IV Labetalol (10-20 mg IV bolus over 1-2 min) and titratable continuous IV infusions of Nicardipine (5-15 mg/h) or Clevidipine (1-2 mg/h) are first-line agents recommended by AHA/ASA guidelines for rapid, safe BP control pre- and post-tPA.",
    "keyTakeaway": "First-line acute post-tPA antihypertensives: IV Labetalol, IV Nicardipine, or IV Clevidipine infusion.",
    "tags": [
      "Hypertension",
      "Labetalol",
      "Nicardipine"
    ],
    "hint": "Rapid-acting IV beta-blocker or IV dihydropyridine calcium channel blocker infusions.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-305",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "An 80-year-old female presents with acute left hemiparesis, sensory loss, and transient urinary incontinence. Brain MRI reveals an infarction in the medial precentral gyrus of the frontal lobe.",
    "question": "Which artery supplies the medial aspect of the cerebral hemisphere motor cortex?",
    "options": [
      {
        "id": "A",
        "text": "Anterior Cerebral Artery (ACA)"
      },
      {
        "id": "B",
        "text": "Superior Cerebellar Artery"
      },
      {
        "id": "C",
        "text": "Posterior Cerebral Artery (PCA)"
      },
      {
        "id": "D",
        "text": "Middle Cerebral Artery (MCA)"
      },
      {
        "id": "E",
        "text": "Anterior Choroidal Artery"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The Anterior Cerebral Artery (ACA) supplies the medial surface of the frontal and parietal lobes, including the leg motor and sensory homunculus and paracentral lobule controlling micturition.",
    "keyTakeaway": "ACA = Medial hemispheric cortex supply (lower extremity motor/sensory cortex + micturition center).",
    "tags": [
      "ACA",
      "Neuroanatomy",
      "Homunculus"
    ],
    "hint": "Recall which artery courses along the pericallosal and callosomarginal sulci on the medial hemispheric surface.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-306",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 62-year-old male presents with acute right homonymous hemianopia. On visual field testing, his central 5 degrees of visual field is entirely preserved bilaterally.",
    "question": "What anatomical mechanism explains Macular Sparing in PCA occipital lobe strokes?",
    "options": [
      {
        "id": "A",
        "text": "Optic nerve decussation at the chiasm"
      },
      {
        "id": "B",
        "text": "Macular representation in the temporal lobe"
      },
      {
        "id": "C",
        "text": "Retinal collateral arteries"
      },
      {
        "id": "D",
        "text": "Dual collateral blood supply to the occipital pole from terminal branches of the Middle Cerebral Artery (MCA)"
      },
      {
        "id": "E",
        "text": "Dual supply from the anterior spinal artery"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Macular vision is represented at the extreme posterior tip of the occipital pole. This region receives dual collateral perfusion from terminal MCA branches in addition to the calcarine branch of the PCA, resulting in classic macular sparing during PCA occlusion.",
    "keyTakeaway": "Macular Sparing in PCA stroke occurs due to dual collateral supply from terminal MCA branches at the occipital pole.",
    "tags": [
      "PCA",
      "Macular Sparing",
      "Visual Cortex"
    ],
    "hint": "Terminal anastomotic network between posterior and middle cerebral artery cortical branches.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-307",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 68-year-old female presents with fluent speech, paraphasias, and severe loss of auditory language comprehension. She is unaware of her language deficits and appears unconcerned.",
    "question": "Where is the lesion located, and what is the primary vascular supply?",
    "options": [
      {
        "id": "A",
        "text": "Wernicke's area (posterior superior temporal gyrus); Left MCA inferior division"
      },
      {
        "id": "B",
        "text": "Broca's area; Left MCA superior division"
      },
      {
        "id": "C",
        "text": "Calcarine sulcus; Left PCA"
      },
      {
        "id": "D",
        "text": "Angular gyrus; Left ACA"
      },
      {
        "id": "E",
        "text": "Basal ganglia; Lenticulostriate penetrators"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Wernicke's aphasia (receptive/fluent aphasia) is caused by damage to Wernicke's area in the posterior superior temporal gyrus of the dominant hemisphere, supplied by the inferior division of the left MCA.",
    "keyTakeaway": "Wernicke Aphasia = Posterior superior temporal gyrus lesion (Left MCA Inferior Division).",
    "tags": [
      "Wernicke Aphasia",
      "Temporal Lobe",
      "MCA Inferior"
    ],
    "hint": "Receptive language center in the posterior temporal lobe supplied by the lower division of the MCA.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-308",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 55-year-old male with acute left MCA stroke presents with non-fluent, effortful, dysprosodic speech, but can comprehend spoken commands and follow multi-step instructions.",
    "question": "Where is the lesion located, and what is the primary vascular supply?",
    "options": [
      {
        "id": "A",
        "text": "Angular gyrus; Left ACA"
      },
      {
        "id": "B",
        "text": "Internal capsule"
      },
      {
        "id": "C",
        "text": "Wernicke's area; Left MCA inferior division"
      },
      {
        "id": "D",
        "text": "Broca's area (inferior frontal gyrus); Left MCA superior division"
      },
      {
        "id": "E",
        "text": "Occipital pole; Left PCA"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Broca's aphasia (expressive/non-fluent aphasia) is caused by damage to Broca's area in the posterior inferior frontal gyrus (Brodmann areas 44/45) of the dominant hemisphere, supplied by the superior division of the left MCA.",
    "keyTakeaway": "Broca Aphasia = Inferior frontal gyrus lesion (Left MCA Superior Division).",
    "tags": [
      "Broca Aphasia",
      "Frontal Lobe",
      "MCA Superior"
    ],
    "hint": "Expressive speech center in the posterior inferior frontal gyrus.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-309",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 58-year-old male presents with acute dizziness, gait unsteadiness, hiccuping, hoarseness, dysphagia, right facial numbness, right Horner syndrome, and left body loss of pain and temperature.",
    "question": "What nucleus damage causes the dysphagia and hoarseness in Wallenberg Syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Inferior Salivatory Nucleus"
      },
      {
        "id": "B",
        "text": "Spinal Trigeminal Nucleus"
      },
      {
        "id": "C",
        "text": "Nucleus Ambiguus (CN IX and X motor fibers)"
      },
      {
        "id": "D",
        "text": "Hypoglossal Nucleus"
      },
      {
        "id": "E",
        "text": "Nucleus Tractus Solitarii"
      }
    ],
    "correctOptionId": "C",
    "explanation": "In Lateral Medullary (Wallenberg) Syndrome, dysphagia, dysarthria, hoarseness, and loss of gag reflex are caused by ischemic damage to the Nucleus Ambiguus (supplying motor innervations to the pharynx and larynx via CN IX and X).",
    "keyTakeaway": "Wallenberg Syndrome dysphagia & hoarseness = Nucleus Ambiguus damage (CN IX / X).",
    "tags": [
      "Wallenberg",
      "Nucleus Ambiguus",
      "Medulla"
    ],
    "hint": "Motor nucleus in the lateral medulla supplying pharyngeal and laryngeal branchial musculature.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-310",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 64-year-old male presents with acute right CN III palsy (ptotic, down-and-out eye) and left body hemiparesis.",
    "question": "What structure in the ventral midbrain is damaged to cause the contralateral hemiparesis in Weber Syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Superior colliculus"
      },
      {
        "id": "B",
        "text": "Medial lemniscus"
      },
      {
        "id": "C",
        "text": "Red nucleus"
      },
      {
        "id": "D",
        "text": "Corticospinal tract in the cerebral peduncle"
      },
      {
        "id": "E",
        "text": "Substantia nigra"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Weber Syndrome is caused by a ventral midbrain P1 PCA stroke damaging the fascicular CN III nerve fibers AND the descending corticospinal fibers in the cerebral peduncle, resulting in ipsilateral CN III palsy and contralateral hemiparesis.",
    "keyTakeaway": "Weber Syndrome = Ipsilateral CN III palsy + Contralateral hemiparesis (Ventral cerebral peduncle corticospinal tract).",
    "tags": [
      "Weber Syndrome",
      "Cerebral Peduncle",
      "Midbrain"
    ],
    "hint": "Ventral midbrain white matter bundle carrying descending motor fibers.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-311",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 72-year-old male with long-standing poorly controlled hypertension presents with pure motor hemiparesis. MRI shows a 0.8 cm lacunar infarct in the posterior limb of the internal capsule.",
    "question": "What specific type of vessel occlusion causes lacunar infarctions?",
    "options": [
      {
        "id": "A",
        "text": "Sagittal sinus thrombosis"
      },
      {
        "id": "B",
        "text": "Atherosclerotic occlusion of the main ICA trunk"
      },
      {
        "id": "C",
        "text": "Carotid artery dissection"
      },
      {
        "id": "D",
        "text": "Embolic clot from left atrium"
      },
      {
        "id": "E",
        "text": "Lipohyalinosis and microatheroma of small penetrating arteries (e.g. lenticulostriate penetrators)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Lacunar strokes (< 1.5 cm) are caused by lipohyalinosis, microatheroma, or fibrinoid necrosis of small deep penetrating arterioles (30 to 300 micrometers in diameter) arising directly from major Circle of Willis arteries.",
    "keyTakeaway": "Lacunar strokes are caused by lipohyalinosis & microatheroma of small deep penetrating arterioles.",
    "tags": [
      "Lacunar Stroke",
      "Lipohyalinosis",
      "Penetrating Arterioles"
    ],
    "hint": "Pathological lipohyalinosis of small subcortical penetrating arterioles driven by chronic hypertension.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-312",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 40-year-old male presents with recurrent young lacunar strokes, severe migraines, and progressive cognitive decline. Genetic testing reveals a mutation in NOTCH3.",
    "question": "What skin biopsy finding is pathognomonic for CADASIL on electron microscopy?",
    "options": [
      {
        "id": "A",
        "text": "Granular Osmiophilic Material (GOM) in the basal lamina of vascular smooth muscle cells"
      },
      {
        "id": "B",
        "text": "Amyloid-beta deposits"
      },
      {
        "id": "C",
        "text": "Fibrinoid necrosis"
      },
      {
        "id": "D",
        "text": "String-of-beads fibroplasia"
      },
      {
        "id": "E",
        "text": "Sphingolipid accumulation in lysosomes"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Pathognomonic skin biopsy finding in CADASIL: Granular Osmiophilic Material (GOM) deposits in the extracellular matrix surrounding vascular smooth muscle cells of small dermal arterioles on transmission electron microscopy.",
    "keyTakeaway": "CADASIL Skin Biopsy Pathognomonic Finding = Granular Osmiophilic Material (GOM) in vascular smooth muscle cells.",
    "tags": [
      "CADASIL",
      "GOM",
      "Skin Biopsy"
    ],
    "hint": "Electron microscopic deposits surrounding dermal vascular smooth muscle cells.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-313",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 65-year-old female presents with acute right MCA cortical stroke. TEE shows no cardioembolic source, CTA shows 75% left ICA stenosis with ulcerated plaque.",
    "question": "Under TOAST criteria, what is the stroke etiology?",
    "options": [
      {
        "id": "A",
        "text": "Large Artery Atherosclerosis"
      },
      {
        "id": "B",
        "text": "Cardioembolism"
      },
      {
        "id": "C",
        "text": "Other Determined Etiology"
      },
      {
        "id": "D",
        "text": "Undetermined Etiology"
      },
      {
        "id": "E",
        "text": "Small Vessel Occlusion"
      }
    ],
    "correctOptionId": "A",
    "explanation": "TOAST Large Artery Atherosclerosis requires clinical/neuroimaging evidence of cortical or cerebellar stroke with > 50% stenosis or occlusion of the responsible brain-supplying artery (carotid or intracranial).",
    "keyTakeaway": "TOAST Large Artery Atherosclerosis requires cortical stroke + > 50% stenosis of responsible supplying artery.",
    "tags": [
      "TOAST Classification",
      "Large Artery Atherosclerosis",
      "Carotid Stenosis"
    ],
    "hint": "Presence of significant arterial stenosis (>= 50%) in the responsible vascular distribution.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-314",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 32-year-old female presents with acute ischemic stroke. She has a history of 2 deep vein thromboses and positive Lupus Anticoagulant on two tests 12 weeks apart.",
    "question": "What is the target INR for secondary stroke prevention in Antiphoplipid Syndrome (APLS) treated with Warfarin?",
    "options": [
      {
        "id": "A",
        "text": "Target INR 1.5 to 2.0"
      },
      {
        "id": "B",
        "text": "Target INR < 1.5"
      },
      {
        "id": "C",
        "text": "Target INR 3.5 to 4.5"
      },
      {
        "id": "D",
        "text": "Target INR 2.0 to 3.0"
      },
      {
        "id": "E",
        "text": "No INR target"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Per AHA/ASA guidelines, secondary prevention of stroke in patients with Antiphospholipid Syndrome (APLS) requires therapeutic oral anticoagulation with Warfarin targeting a standard INR of 2.0 to 3.0 (or 3.0 to 4.0 if recurrent events occur). DOACs are not recommended in triple-positive APLS.",
    "keyTakeaway": "Antiphospholipid Syndrome (APLS) secondary prevention = WARFARIN target INR 2.0-3.0.",
    "tags": [
      "APLS",
      "Warfarin Target",
      "Anticoagulation"
    ],
    "hint": "Target therapeutic INR range for Vitamin K antagonist therapy in autoimmune hypercoagulability.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-315",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 66-year-old male presents 3 hours after onset of left hemiplegia. CTA reveals a right M1 MCA occlusion. Non-contrast CT ASPECTS is 9.",
    "question": "What was the Number Needed to Treat (NNT) for mechanical thrombectomy to achieve functional independence (mRS 0-2) in the HERMES meta-analysis of early-window (0-6h) LVO trials?",
    "options": [
      {
        "id": "A",
        "text": "NNT = 25"
      },
      {
        "id": "B",
        "text": "NNT = 100"
      },
      {
        "id": "C",
        "text": "NNT = 2.6 (dramatically powerful treatment effect)"
      },
      {
        "id": "D",
        "text": "NNT = 10"
      },
      {
        "id": "E",
        "text": "NNT = 50"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The HERMES meta-analysis of 5 landmark 2015 trials (MR CLEAN, ESCAPE, EXTEND-IA, SWIFT-PRIME, REVASCAT) demonstrated an astonishing Number Needed to Treat (NNT) of ONLY 2.6 for mechanical thrombectomy to achieve functional independence (mRS 0-2) at 90 days in anterior circulation LVO.",
    "keyTakeaway": "HERMES Meta-Analysis: Mechanical Thrombectomy within 6h has an NNT = 2.6 for functional independence!",
    "tags": [
      "HERMES Meta-Analysis",
      "NNT",
      "Thrombectomy Benefit"
    ],
    "hint": "Extremely low NNT reflecting one of the most effective interventions in all of clinical medicine.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-316",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 70-year-old female presents 12 hours after last seen normal with dense left hemiplegia. CTP shows core volume 10 mL, Tmax > 6s volume 90 mL.",
    "question": "What were the inclusion criteria for the DAWN trial in the 6-24 hour window?",
    "options": [
      {
        "id": "A",
        "text": "Clinical-core mismatch (severe NIHSS clinical deficit out of proportion to small CT/MRI ischemic core volume)"
      },
      {
        "id": "B",
        "text": "Age < 40 years strictly"
      },
      {
        "id": "C",
        "text": "ASPECTS 10 on non-contrast CT only"
      },
      {
        "id": "D",
        "text": "Normal ECG"
      },
      {
        "id": "E",
        "text": "Absence of all collateral vessels"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The DAWN trial selected patients presenting 6 to 24 hours after last seen normal using Clinical-Core Mismatch (combining NIHSS score >= 10 with small core volume < 21-51 mL on CTP/MRI depending on age), demonstrating massive 90-day functional benefit (49% vs 13% functional independence).",
    "keyTakeaway": "DAWN Trial (6-24h window): Uses Clinical-Core Mismatch to select LVO patients for mechanical thrombectomy.",
    "tags": [
      "DAWN Trial",
      "Clinical Core Mismatch",
      "Extended Window"
    ],
    "hint": "Selection of patients whose clinical neurological deficit is far worse than the small dead tissue core.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-317",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A 62-year-old male with 80% symptomatic MCA stenosis undergoes evaluation for intracranial stenting vs medical therapy.",
    "question": "What was the 30-day stroke/death rate in the stenting arm of the SAMMPRIS trial compared to the medical therapy arm?",
    "options": [
      {
        "id": "A",
        "text": "30% stenting vs 30% medical"
      },
      {
        "id": "B",
        "text": "5.8% stenting vs 14.7% medical"
      },
      {
        "id": "C",
        "text": "14.7% in the stenting arm vs 5.8% in the medical therapy arm (stenting had > 2.5x higher 30-day stroke/death rate)"
      },
      {
        "id": "D",
        "text": "Identical 10% in both arms"
      },
      {
        "id": "E",
        "text": "0% stenting vs 20% medical"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The SAMMPRIS trial was halted early because percutaneous intracranial stenting (Wingspan stent) resulted in a 14.7% 30-day stroke or death rate compared to only 5.8% in the aggressive medical management arm, proving medical therapy is far safer and superior.",
    "keyTakeaway": "SAMMPRIS: Intracranial stenting had a 14.7% 30-day stroke/death rate vs 5.8% for intensive medical therapy.",
    "tags": [
      "SAMMPRIS Trial",
      "Wingspan Stent",
      "ICAD Safety"
    ],
    "hint": "Periprocedural stroke risks from intracranial wire manipulation and perforator occlusion.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-318",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A 58-year-old male with 75% symptomatic basilar artery stenosis is placed on SAMMPRIS aggressive medical therapy.",
    "question": "What are the three core components of the SAMMPRIS aggressive medical therapy regimen?",
    "options": [
      {
        "id": "A",
        "text": "Triple antiplatelet therapy for 1 year"
      },
      {
        "id": "B",
        "text": "Wingspan stenting, Heparin, and BP < 120"
      },
      {
        "id": "C",
        "text": "Warfarin anticoagulation, Aspirin, and BP < 160"
      },
      {
        "id": "D",
        "text": "Dual Antiplatelet Therapy (Aspirin + Clopidogrel) for 90 days, High-intensity Statin (Atorvastatin 80mg), and SBP target < 140 mmHg"
      },
      {
        "id": "E",
        "text": "Aspirin monotherapy alone"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The SAMMPRIS medical regimen comprised: 1) DAPT with Aspirin (325 mg) + Clopidogrel (75 mg) for 90 days, 2) High-intensity statin (Atorvastatin 80 mg daily targeting LDL < 70), and 3) Strict blood pressure control targeting SBP < 140 mmHg (and SBP < 130 if diabetic).",
    "keyTakeaway": "SAMMPRIS Medical Protocol = DAPT (Aspirin + Clopidogrel) x 90 days + High-dose Statin + SBP target < 140 mmHg.",
    "tags": [
      "SAMMPRIS Protocol",
      "DAPT",
      "BP Goal"
    ],
    "hint": "Combination of 90-day dual antiplatelet therapy with intensive statin and antihypertensive control.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-319",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 12-year-old child presents with recurrent infantile hemiparesis and porencephalic cysts on brain MRI. Ophthalmologic exam reveals retinal arterial tortuosity.",
    "question": "What genetic mutation causes Porencephaly Type 1 and infantile hemiparesis?",
    "options": [
      {
        "id": "A",
        "text": "COL4A1 or COL4A2 gene mutations"
      },
      {
        "id": "B",
        "text": "NOTCH3 mutation"
      },
      {
        "id": "C",
        "text": "TREX1 mutation"
      },
      {
        "id": "D",
        "text": "GLA gene mutation"
      },
      {
        "id": "E",
        "text": "HTRA1 mutation"
      }
    ],
    "correctOptionId": "A",
    "explanation": "COL4A1 and COL4A2 gene mutations disrupt basement membrane collagen type IV, leading to fragile cerebral microvessels. Causes porencephaly, infantile hemiparesis, intracranial hemorrhage, retinal arterial tortuosity, and hereditary angiopathy with nephropathy, aneurysm, and cramps (HANAC).",
    "keyTakeaway": "COL4A1/COL4A2 Mutations = Collagen IV basement membrane fragility -> Porencephaly, infantile hemiparesis, & ICH.",
    "tags": [
      "COL4A1",
      "Porencephaly",
      "Genetics"
    ],
    "hint": "Collagen type IV basement membrane genetic defect causing infantile brain cysts and hemorrhage.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-320",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 34-year-old female presents with Livedo Reticularis (net-like violet skin discoloration on legs) and recurrent ischemic strokes in multiple cerebral territories. Workup for vasculitis and antiphospholipid antibodies is negative.",
    "question": "What non-inflammatory neurovascular disorder is defined by Livedo Reticularis + Cerebrovascular Accidents?",
    "options": [
      {
        "id": "A",
        "text": "Fabry Disease"
      },
      {
        "id": "B",
        "text": "Takayasu Arteritis"
      },
      {
        "id": "C",
        "text": "Sneddon Syndrome"
      },
      {
        "id": "D",
        "text": "CADASIL"
      },
      {
        "id": "E",
        "text": "Behcet Disease"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Sneddon Syndrome is a rare non-inflammatory arteriopathy characterized by the combination of Livedo Reticularis (widespread reticular skin discoloration) and recurrent cerebrovascular accidents (strokes/TIAs). Up to 50% have antiphospholipid antibodies.",
    "keyTakeaway": "Sneddon Syndrome = Livedo Reticularis + Recurrent Ischemic Strokes (non-inflammatory arteriopathy).",
    "tags": [
      "Sneddon Syndrome",
      "Livedo Reticularis",
      "Vasculopathy"
    ],
    "hint": "Reticular erythematous skin lesions combined with recurrent ischemic stroke events.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-321",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 66-year-old male with 80% symptomatic left ICA stenosis is evaluated for CEA versus TCAR.",
    "question": "What is the perioperative stroke/death cutoff threshold recommended by AHA guidelines for CEA in SYMPTOMATIC carotid stenosis?",
    "options": [
      {
        "id": "A",
        "text": "Perioperative risk must be < 1%"
      },
      {
        "id": "B",
        "text": "Risk cutoff is 20%"
      },
      {
        "id": "C",
        "text": "No risk cutoff exists"
      },
      {
        "id": "D",
        "text": "Perioperative risk must be < 6% for CEA in symptomatic patients (vs < 3% for asymptomatic patients)"
      },
      {
        "id": "E",
        "text": "Perioperative risk must be < 15%"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Per AHA/ASA guidelines, surgical revascularization (CEA/CAS) for SYMPTOMATIC carotid stenosis is recommended ONLY if the surgeon/center's documented perioperative stroke and death rate is strictly < 6% (< 3% for ASYMPTOMATIC stenosis).",
    "keyTakeaway": "AHA Guidelines: Perioperative stroke/death risk must be < 6% for symptomatic CEA and < 3% for asymptomatic CEA.",
    "tags": [
      "Carotid Guidelines",
      "CEA Risk Cutoff",
      "Surgical Quality"
    ],
    "hint": "Maximum acceptable periprocedural complication rate for symptomatic carotid endarterectomy.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-322",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 72-year-old female with non-valvular AFib and mild acute ischemic stroke (NIHSS 3) is evaluated for oral anticoagulation initiation.",
    "question": "Based on the '1-3-6-12 Day Rule', when should DOAC anticoagulation be initiated following a MINOR ischemic stroke (NIHSS < 8)?",
    "options": [
      {
        "id": "A",
        "text": "Initiate DOAC immediately on Day 0"
      },
      {
        "id": "B",
        "text": "Initiate DOAC at Day 3 post-stroke (Day 1 for TIA, Day 3 for minor stroke, Day 6 for moderate, Day 12 for severe stroke)"
      },
      {
        "id": "C",
        "text": "Wait 6 weeks for all strokes"
      },
      {
        "id": "D",
        "text": "DOACs are contraindicated in minor stroke"
      },
      {
        "id": "E",
        "text": "Wait 6 months"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The '1-3-6-12 Day Rule' (supported by ELAN and SAMURAI studies) guides anticoagulation timing post-ischemic stroke in AFib: TIA -> Day 1; Minor stroke (NIHSS < 8) -> Day 3; Moderate stroke (NIHSS 8-15) -> Day 6; Severe stroke (NIHSS >= 16) -> Day 12 to 14 (after repeat imaging confirms no sICH).",
    "keyTakeaway": "1-3-6-12 Day Rule for AFib Anticoagulation: TIA = Day 1, Minor = Day 3, Moderate = Day 6, Severe = Day 12-14.",
    "tags": [
      "1-3-6-12 Rule",
      "AFib Anticoagulation",
      "Stroke Timing"
    ],
    "hint": "Tiered initiation schedule based on initial neurological deficit severity and secondary hemorrhage risk.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-323",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 50-year-old male with native mitral valve endocarditis (Staph aureus) develops an acute embolic stroke in the right MCA. Head CT shows a small non-hemorrhagic infarction.",
    "question": "What is the recommended antithrombotic management for acute embolic stroke secondary to Infective Endocarditis?",
    "options": [
      {
        "id": "A",
        "text": "Start Warfarin target INR 3.0"
      },
      {
        "id": "B",
        "text": "Start IV Heparin infusion immediately"
      },
      {
        "id": "C",
        "text": "Administer IV tPA"
      },
      {
        "id": "D",
        "text": "Start DAPT for 90 days"
      },
      {
        "id": "E",
        "text": "ANTICOAGULATION IS CONTRAINDICATED in active infective endocarditis due to high risk of fatal intracranial hemorrhage from mycotic aneurysm rupture; treat with IV targeted antibiotics"
      }
    ],
    "correctOptionId": "E",
    "explanation": "AHA/ASA guidelines state that therapeutic anticoagulation (Heparin, Warfarin, DOACs) is CONTRAINDICATED in acute ischemic stroke due to Infective Endocarditis because septic emboli cause mycotic aneurysms and vascular erosion, carrying a massive risk of fatal hemorrhagic transformation. Treat with targeted IV antimicrobial therapy.",
    "keyTakeaway": "Infective Endocarditis Embolic Stroke = ANTICOAGULATION IS CONTRAINDICATED! High risk of mycotic aneurysm rupture.",
    "tags": [
      "Infective Endocarditis",
      "Anticoagulation Contraindicated",
      "Mycotic Aneurysm"
    ],
    "hint": "High risk of septic arteritis and mycotic aneurysm rupture contraindicating full-dose anticoagulation.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-324",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 58-year-old female presents with acute spontaneous cerebellar hemorrhage measuring 3.5 cm in diameter on CT head, accompanied by brainstem compression and fourth ventricle effacement.",
    "question": "What is the definitive initial management for cerebellar hemorrhage > 3 cm with brainstem compression?",
    "options": [
      {
        "id": "A",
        "text": "High-dose IV steroids"
      },
      {
        "id": "B",
        "text": "Medical therapy with IV Mannitol alone"
      },
      {
        "id": "C",
        "text": "IMMEDIATE SURGICAL EVACUATION of the cerebellar hematoma is mandatory"
      },
      {
        "id": "D",
        "text": "Lumbar puncture to relieve pressure"
      },
      {
        "id": "E",
        "text": "Observation in step-down unit"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Per AHA/ASA ICH guidelines, patients with cerebellar hemorrhage measuring > 3 cm in diameter, OR cerebellar ICH causing brainstem compression or obstructive hydrocephalus, should undergo IMMEDIATE SURGICAL EVACUATION to prevent brainstem herniation and death.",
    "keyTakeaway": "Cerebellar ICH > 3 cm OR with brainstem compression/hydrocephalus = IMMEDIATE SURGICAL EVACUATION MANDATORY!",
    "tags": [
      "Cerebellar ICH",
      "Surgical Evacuation",
      "Neuro-ICU Emergency"
    ],
    "hint": "Infratentorial mass effect threshold requiring emergency neurosurgical decompression.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-325",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage",
    "vignette": "A 45-year-old female presents with sudden onset 'worst headache of life' (thunderclap headache). Non-contrast CT head performed 2 hours after onset shows no subarachnoid blood.",
    "question": "What is the next mandatory diagnostic step to rule out aneurysmal SAH when initial head CT is negative?",
    "options": [
      {
        "id": "A",
        "text": "Lumbar Puncture (LP) to evaluate CSF for xanthochromia and RBC count across serial tubes"
      },
      {
        "id": "B",
        "text": "EEG"
      },
      {
        "id": "C",
        "text": "Repeat CT head in 24 hours"
      },
      {
        "id": "D",
        "text": "Discharge home with NSAIDs"
      },
      {
        "id": "E",
        "text": "Carotid ultrasound"
      }
    ],
    "correctOptionId": "A",
    "explanation": "If initial non-contrast head CT is negative in a patient with suspected thunderclap SAH, Lumbar Puncture (LP) is MANDATORY to evaluate CSF for xanthochromia (yellow bilirubin discoloration on spectrophotometry) and elevated RBC count that does not clear from tube 1 to 4.",
    "keyTakeaway": "Negative CT head + Suspicion of SAH -> Mandatory Lumbar Puncture for Xanthochromia!",
    "tags": [
      "Lumbar Puncture",
      "Xanthochromia",
      "Thunderclap Headache"
    ],
    "hint": "Mandatory second-line invasive diagnostic test following a normal initial head CT in thunderclap headache.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-326",
    "chapterId": 15,
    "chapterTitle": "Pediatric Stroke & Hematology",
    "vignette": "An 8-year-old boy with Sickle Cell Disease (HbSS) undergoes routine screening Transcranial Doppler (TCD). His time-averaged mean maximum velocity (TAMMV) in the MCA is 210 cm/s.",
    "question": "Based on the STOP trial, what intervention reduces primary stroke risk by > 90% in children with abnormal TCD velocities (>= 200 cm/s)?",
    "options": [
      {
        "id": "A",
        "text": "Warfarin anticoagulation"
      },
      {
        "id": "B",
        "text": "Aspirin 81 mg daily alone"
      },
      {
        "id": "C",
        "text": "Observation"
      },
      {
        "id": "D",
        "text": "Surgical EC-IC bypass"
      },
      {
        "id": "E",
        "text": "Chronic monthly blood transfusion therapy targeting HbS < 30%"
      }
    ],
    "correctOptionId": "E",
    "explanation": "The landmark STOP trial proved that chronic monthly blood transfusion therapy (targeting HbS < 30%) in children with Sickle Cell Disease and abnormal TCD (TAMMV >= 200 cm/s) reduced primary stroke risk from 10%/year to < 1%/year (over 90% risk reduction).",
    "keyTakeaway": "STOP Trial: Chronic blood transfusions (target HbS < 30%) reduce stroke risk by > 90% in Sickle Cell Disease with abnormal TCD.",
    "tags": [
      "STOP Trial",
      "Sickle Cell Stroke",
      "TCD Screening"
    ],
    "hint": "Landmark pediatric stroke prevention trial establishing chronic blood transfusion protocol.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-327",
    "chapterId": 16,
    "chapterTitle": "Cerebral Venous Thrombosis",
    "vignette": "A 26-year-old female taking oral contraceptives presents with severe headache, bilateral papilledema, and a right parietal hemorrhagic venous infarction due to superior sagittal sinus thrombosis.",
    "question": "Per AHA/ASA guidelines, what is the first-line treatment for Cerebral Venous Thrombosis (CVT), EVEN IN THE PRESENCE OF hemorrhagic transformation?",
    "options": [
      {
        "id": "A",
        "text": "Hold all anticoagulation due to the hemorrhage"
      },
      {
        "id": "B",
        "text": "Perform emergency craniotomy only"
      },
      {
        "id": "C",
        "text": "Aspirin monotherapy"
      },
      {
        "id": "D",
        "text": "Therapeutic full-dose anticoagulation with LMWH or unfractionated Heparin"
      },
      {
        "id": "E",
        "text": "Administer IV tPA"
      }
    ],
    "correctOptionId": "D",
    "explanation": "AHA/ASA CVT guidelines state that therapeutic full-dose anticoagulation (LMWH or IV Heparin) is the FIRST-LINE treatment for CVT, even when hemorrhagic infarction is present, because anticoagulation reverses the venous outflow obstruction driving the hemorrhage.",
    "keyTakeaway": "CVT First-line Treatment = Therapeutic Anticoagulation (LMWH/Heparin), EVEN WITH hemorrhagic transformation!",
    "tags": [
      "CVT",
      "Anticoagulation",
      "Venous Infarct"
    ],
    "hint": "Venous outflow obstruction resolution is required to arrest hemorrhagic venous venous infarction expansion.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-328",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 32-year-old male undergoes brain MRI showing a 1.5 cm well-circumscribed lesion in the right temporal lobe with a characteristic 'popcorn-like' appearance on T1/T2 and a complete hypointense hemosiderin rim on T2* GRE.",
    "question": "What vascular malformation does this classic MRI appearance describe?",
    "options": [
      {
        "id": "A",
        "text": "Developmental Venous Anomaly (DVA)"
      },
      {
        "id": "B",
        "text": "Capillary Telangiectasia"
      },
      {
        "id": "C",
        "text": "Berry Aneurysm"
      },
      {
        "id": "D",
        "text": "Arteriovenous Malformation (AVM)"
      },
      {
        "id": "E",
        "text": "Cerebral Cavernous Malformation (Cavernoma / CCM)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Cerebral Cavernous Malformations (Cavernomas) have a pathognomonic MRI appearance: a 'popcorn-like' or 'mulberry' reticulated core of mixed signal intensity (T1/T2) surrounded by a complete dark rim of hemosiderin deposition on T2/GRE/SWI.",
    "keyTakeaway": "Cavernous Malformation (Cavernoma) = 'Popcorn' reticulated lesion with dark hemosiderin rim on MRI.",
    "tags": [
      "Cavernoma",
      "Popcorn Lesion",
      "Hemosiderin Rim"
    ],
    "hint": "Reticulated lesion with dark hemosiderin halo resulting from recurrent microhemorrhages.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-329",
    "chapterId": 18,
    "chapterTitle": "Neuro-ICU & Hemodynamic Management",
    "vignette": "A 52-year-old male with massive MCA stroke and brain edema develops an ICP surge to 28 mmHg. Serum sodium is 138 mEq/L, serum osmolality is 290 mOsm/kg.",
    "question": "What is the target serum sodium and osmolality range when utilizing 3% Hypertonic Saline for osmotic ICP control?",
    "options": [
      {
        "id": "A",
        "text": "Target serum osmolality > 380 mOsm/kg"
      },
      {
        "id": "B",
        "text": "Target serum sodium 120 mEq/L"
      },
      {
        "id": "C",
        "text": "No sodium monitoring required"
      },
      {
        "id": "D",
        "text": "Target serum sodium 145 to 155 mEq/L and serum osmolality < 320 mOsm/kg"
      },
      {
        "id": "E",
        "text": "Target serum sodium > 170 mEq/L"
      }
    ],
    "correctOptionId": "D",
    "explanation": "When using 3% Hypertonic Saline for cerebral edema and ICP control, guidelines recommend targeting a serum sodium of 145 to 155 mEq/L and maintaining serum osmolality < 320 mOsm/kg to prevent renal toxicity and central pontine myelinolysis.",
    "keyTakeaway": "3% Hypertonic Saline ICP Target: Serum Sodium 145-155 mEq/L & Serum Osmolality < 320 mOsm/kg.",
    "tags": [
      "Hypertonic Saline",
      "ICP Management",
      "Osmotic Goal"
    ],
    "hint": "Therapeutic hypernatremia target range for osmoprotective brain edema reduction.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-330",
    "chapterId": 19,
    "chapterTitle": "Secondary Prevention & Antithrombotics",
    "vignette": "A 64-year-old male with minor ischemic stroke (NIHSS 2) presents 10 hours after symptom onset. He is started on DAPT (Aspirin + Clopidogrel) for 21 days based on the CHANCE and POINT trials.",
    "question": "What was the primary efficacy result of DAPT for 21 days versus Aspirin alone in the POINT trial?",
    "options": [
      {
        "id": "A",
        "text": "DAPT increased recurrent stroke"
      },
      {
        "id": "B",
        "text": "DAPT caused 50% mortality"
      },
      {
        "id": "C",
        "text": "DAPT had zero effect"
      },
      {
        "id": "D",
        "text": "Aspirin alone was superior"
      },
      {
        "id": "E",
        "text": "DAPT significantly reduced 90-day recurrent ischemic stroke (5.0% vs 6.5%, RRR 25%) with a small increase in major bleeding"
      }
    ],
    "correctOptionId": "E",
    "explanation": "The POINT trial proved that initiating DAPT (Aspirin + Clopidogrel) within 12 hours of high-risk TIA or minor stroke for 21 days reduced 90-day recurrent ischemic stroke by 25% (HR 0.75), establishing short-term DAPT as standard of care.",
    "keyTakeaway": "POINT Trial: 21 days of DAPT (Aspirin + Clopidogrel) reduces recurrent stroke by 25% in minor stroke / high-risk TIA.",
    "tags": [
      "POINT Trial",
      "CHANCE Trial",
      "DAPT 21 Days"
    ],
    "hint": "Landmark RCT proving early short-term dual antiplatelet efficacy.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-331",
    "chapterId": 20,
    "chapterTitle": "Rehabilitation & Prognostication",
    "vignette": "A 58-year-old stroke survivor with right hemiparesis undergoes a specialized rehabilitation technique where his UNIMPAIRED left arm is constrained in a mitt for 90% of waking hours while performing intensive task-oriented training with his affected right arm.",
    "question": "What is this evidence-based neurorehabilitation therapy called?",
    "options": [
      {
        "id": "A",
        "text": "Functional Electrical Stimulation"
      },
      {
        "id": "B",
        "text": "Mirror Therapy"
      },
      {
        "id": "C",
        "text": "Constraint-Induced Movement Therapy (CIMT)"
      },
      {
        "id": "D",
        "text": "Transcranial Magnetic Stimulation"
      },
      {
        "id": "E",
        "text": "Robotic Arm Training"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Constraint-Induced Movement Therapy (CIMT) involves constraining the non-paretic upper limb to force intensive use of the affected paretic limb during functional tasks, driving robust cortical neuroplasticity and motor recovery in stroke survivors.",
    "keyTakeaway": "Constraint-Induced Movement Therapy (CIMT) = Constraining unimpaired limb to force use of paretic arm -> Drives cortical neuroplasticity.",
    "tags": [
      "CIMT",
      "Rehabilitation",
      "Neuroplasticity"
    ],
    "hint": "Forced-use rehabilitation paradigm driving upper extremity functional motor cortex reorganization.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-332",
    "chapterId": 21,
    "chapterTitle": "Landmark Clinical Trials Master Summary",
    "vignette": "A 68-year-old male with non-cardioembolic stroke is evaluated for secondary prevention statin therapy.",
    "question": "Which landmark 2006 trial proved that high-dose Atorvastatin (80 mg daily) significantly reduced recurrent stroke in patients without known coronary heart disease?",
    "options": [
      {
        "id": "A",
        "text": "NINDS Trial"
      },
      {
        "id": "B",
        "text": "CHANCE Trial"
      },
      {
        "id": "C",
        "text": "SPARCL Trial (Stroke Prevention by Aggressive Reduction in Cholesterol Levels)"
      },
      {
        "id": "D",
        "text": "WASID Trial"
      },
      {
        "id": "E",
        "text": "SAMMPRIS Trial"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The SPARCL trial (2006) proved that high-dose Atorvastatin 80 mg daily reduced 5-year recurrent stroke by 16% (HR 0.84) in patients with recent TIA/stroke and no known coronary heart disease, establishing statins in secondary stroke prevention.",
    "keyTakeaway": "SPARCL Trial (2006): Proved high-dose Atorvastatin 80 mg daily reduces recurrent stroke in non-cardioembolic stroke.",
    "tags": [
      "SPARCL Trial",
      "Statin Evidence",
      "Secondary Prevention"
    ],
    "hint": "Landmark trial establishing statin therapy for non-cardioembolic stroke secondary prevention.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-3-1",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 62-year-old male presents with acute left homonymous hemianopia with macular sparing.",
    "question": "Occlusion of which arterial branch causes homonymous hemianopia with characteristic macular sparing?",
    "options": [
      {
        "id": "A",
        "text": "Calcarine branch of Posterior Cerebral Artery (PCA)"
      },
      {
        "id": "B",
        "text": "Ophthalmic Artery"
      },
      {
        "id": "C",
        "text": "Posterior Communicating Artery"
      },
      {
        "id": "D",
        "text": "M1 segment of Middle Cerebral Artery"
      },
      {
        "id": "E",
        "text": "Anterior Choroidal Artery"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The occipital pole representing macular vision receives dual blood supply from both the PCA and collaterals from the MCA (middle cerebral artery). Occlusion of the PCA calcarine branch causes contralateral homonymous hemianopia with macular sparing.",
    "keyTakeaway": "PCA calcarine branch occlusion = Contralateral homonymous hemianopia with MACULAR SPARING.",
    "tags": [
      "PCA Territory",
      "Macular Sparing",
      "Visual Field Deficit"
    ],
    "hint": "Dual arterial supply to the occipital pole preserves central vision.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-3-2",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 55-year-old female presents with acute contralateral hemiparesis, contralateral hemisensory loss, and homonymous hemianopia without cortical deficits (aphasia or neglect).",
    "question": "Infarction in which arterial territory produces this classic triad of capsular/thalamic ischemia?",
    "options": [
      {
        "id": "A",
        "text": "Basilar tip"
      },
      {
        "id": "B",
        "text": "Recurrent Artery of Heubner"
      },
      {
        "id": "C",
        "text": "Anterior Cerebral Artery (ACA)"
      },
      {
        "id": "D",
        "text": "Anterior Choroidal Artery (AChA)"
      },
      {
        "id": "E",
        "text": "Posterior Inferior Cerebellar Artery (PICA)"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The Anterior Choroidal Artery (branch of distal internal carotid artery) supplies the posterior limb of internal capsule, optic tract, and lateral geniculate nucleus. AChA syndrome causes hemiparesis, hemisensory loss, and homonymous hemianopia.",
    "keyTakeaway": "Anterior Choroidal Artery stroke = Hemiparesis + Hemisensory loss + Homonymous hemianopia (no aphasia/neglect).",
    "tags": [
      "Anterior Choroidal",
      "Internal Capsule",
      "Optic Tract"
    ],
    "hint": "Distal ICA branch supplying the posterior limb of internal capsule and visual pathway.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-3-3",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 68-year-old male presents with acute contralateral face and arm weakness, arm motor ataxia, and expressive aphasia.",
    "question": "Which specific segment of the Middle Cerebral Artery (MCA) supplies the lateral convexity of the frontal lobe?",
    "options": [
      {
        "id": "A",
        "text": "Superior division of MCA M2 segment"
      },
      {
        "id": "B",
        "text": "M4 cortical penetrating branches"
      },
      {
        "id": "C",
        "text": "Inferior division of MCA M2 segment"
      },
      {
        "id": "D",
        "text": "M1 main trunk"
      },
      {
        "id": "E",
        "text": "Recurrent Artery of Heubner"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The superior division of the MCA M2 segment supplies the frontal motor cortex and Broca's area, causing contralateral face/arm weakness and Broca non-fluent motor aphasia.",
    "keyTakeaway": "Superior division MCA stroke = Contralateral face/arm weakness + Broca's expressive aphasia.",
    "tags": [
      "MCA Superior Division",
      "Broca Aphasia",
      "Motor Cortex"
    ],
    "hint": "Division of MCA supplying Broca's expressive language area and motor strip.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-3-4",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 71-year-old patient presents with acute bilateral leg weakness and urinary incontinence after an anterior communicating artery procedure.",
    "question": "Which artery arises from the ACA (A1/A2 junction) to supply the anterior head of the caudate nucleus and anterior internal capsule?",
    "options": [
      {
        "id": "A",
        "text": "Thalamoperforating arteries"
      },
      {
        "id": "B",
        "text": "Posterior choroidal artery"
      },
      {
        "id": "C",
        "text": "Direct ICA branches"
      },
      {
        "id": "D",
        "text": "Lenticulostriate arteries"
      },
      {
        "id": "E",
        "text": "Recurrent Artery of Heubner (Medial Striate Artery)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "The Recurrent Artery of Heubner (medial striate artery) originates from the ACA near the ACoA junction and supplies the anterior limb of the internal capsule, anterior caudate nucleus, and anterior putamen.",
    "keyTakeaway": "Recurrent Artery of Heubner = Branch of ACA supplying anterior caudate and anterior internal capsule.",
    "tags": [
      "Heubner Artery",
      "Caudate",
      "ACA Branch"
    ],
    "hint": "Distal ACA branch supplying deep anterior basal ganglia structures.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-4-1",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 69-year-old patient presents with fluent speech, impaired auditory comprehension, and impaired repetition.",
    "question": "Infarction of which cortical area (supplied by the inferior division of the left MCA) produces Wernicke's sensory aphasia?",
    "options": [
      {
        "id": "A",
        "text": "Supplementary motor area"
      },
      {
        "id": "B",
        "text": "Angular gyrus"
      },
      {
        "id": "C",
        "text": "Posterior superior temporal gyrus (Wernicke area)"
      },
      {
        "id": "D",
        "text": "Precentral gyrus"
      },
      {
        "id": "E",
        "text": "Inferior frontal gyrus (Broca area)"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Wernicke's sensory aphasia results from inferior MCA division infarction affecting the posterior superior temporal gyrus (Brodmann area 22) of the dominant hemisphere.",
    "keyTakeaway": "Wernicke Aphasia = Dominant posterior superior temporal gyrus (inferior MCA division).",
    "tags": [
      "Wernicke Aphasia",
      "Inferior MCA",
      "Temporal Lobe"
    ],
    "hint": "Language area responsible for auditory speech comprehension.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-4-2",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 74-year-old patient with right parietal stroke exhibits profound unawareness of their left hemiplegia, insisting their paralyzed limb belongs to someone else.",
    "question": "What clinical term describes this total lack of awareness or denial of neurological deficit?",
    "options": [
      {
        "id": "A",
        "text": "Prosopagnosia"
      },
      {
        "id": "B",
        "text": "Autotopagnosia"
      },
      {
        "id": "C",
        "text": "Asomatognosia"
      },
      {
        "id": "D",
        "text": "Anosognosia"
      },
      {
        "id": "E",
        "text": "Astereognosis"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Anosognosia is the lack of awareness or complete denial of deficit (e.g., claiming a paralyzed limb is normal), classically seen in non-dominant (right) parietal lobe strokes.",
    "keyTakeaway": "Anosognosia = Denial/unawareness of neurological deficit (right parietal stroke).",
    "tags": [
      "Anosognosia",
      "Right Parietal",
      "Neglect Syndrome"
    ],
    "hint": "Classical right parietal lobe sign featuring denial of illness.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-4-3",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 58-year-old right-handed female presents with poor repetition, but fully preserved fluency and preserved comprehension.",
    "question": "What stroke syndrome results from disruption of the arcuate fasciculus connecting Broca's and Wernicke's areas?",
    "options": [
      {
        "id": "A",
        "text": "Anomic Aphasia"
      },
      {
        "id": "B",
        "text": "Transcortical Sensory Aphasia"
      },
      {
        "id": "C",
        "text": "Global Aphasia"
      },
      {
        "id": "D",
        "text": "Transcortical Motor Aphasia"
      },
      {
        "id": "E",
        "text": "Conduction Aphasia"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Conduction aphasia is characterized by prominent impairment in repetition with fluent verbal output and intact comprehension, caused by damage to the arcuate fasciculus / deep parietal white matter.",
    "keyTakeaway": "Conduction Aphasia = Damaged Arcuate Fasciculus -> Severe repetition deficit with fluent speech and normal comprehension.",
    "tags": [
      "Conduction Aphasia",
      "Arcuate Fasciculus",
      "Repetition Deficit"
    ],
    "hint": "White matter tract connecting auditory comprehension to speech production.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-4-4",
    "chapterId": 4,
    "chapterTitle": "Ischemic Stroke Syndromes",
    "vignette": "A 66-year-old patient presents with acute bilateral cortical visual loss but firmly insists they can see, describing imaginary surroundings.",
    "question": "What clinical syndrome of visual anosognosia occurs in bilateral occipital lobe (PCA) infarctions?",
    "options": [
      {
        "id": "A",
        "text": "Anton Syndrome (Visual Anosognosia)"
      },
      {
        "id": "B",
        "text": "Horner Syndrome"
      },
      {
        "id": "C",
        "text": "Balint Syndrome"
      },
      {
        "id": "D",
        "text": "Gerstmann Syndrome"
      },
      {
        "id": "E",
        "text": "Charles Bonnet Syndrome"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Anton syndrome (visual anosognosia) is the denial of blindness in patients with cortical visual loss from bilateral PCA occipital lobe infarctions, often accompanied by visual confabulation.",
    "keyTakeaway": "Anton Syndrome = Denial of blindness + visual confabulation in bilateral PCA occipital strokes.",
    "tags": [
      "Anton Syndrome",
      "Cortical Blindness",
      "PCA Stroke"
    ],
    "hint": "Visual anosognosia featuring denial of cortical blindness.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-5-1",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 60-year-old male presents with acute vertigo, hiccups, ipsilateral Horner syndrome, ipsilateral facial numbness, ataxia, and contralateral loss of pain/temperature sensation.",
    "question": "Which brainstem infarction syndrome is caused by occlusion of the Posterior Inferior Cerebellar Artery (PICA) or Vertebral Artery?",
    "options": [
      {
        "id": "A",
        "text": "Foville Syndrome"
      },
      {
        "id": "B",
        "text": "Millard-Gubler Syndrome"
      },
      {
        "id": "C",
        "text": "Dejerine Syndrome (Medial Medullary)"
      },
      {
        "id": "D",
        "text": "Wallenberg Syndrome (Lateral Medullary Syndrome)"
      },
      {
        "id": "E",
        "text": "Weber Syndrome"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Wallenberg (Lateral Medullary) syndrome is caused by PICA or vertebral artery occlusion affecting the lateral medulla (nucleus ambiguus, spinothalamic tract, spinal trigeminal nucleus, sympathetic fibers).",
    "keyTakeaway": "Wallenberg Syndrome = Lateral Medullary stroke (PICA/VA) -> Vertigo, Horner's, ipsilateral face numbness, contralateral body numbness.",
    "tags": [
      "Wallenberg",
      "PICA",
      "Lateral Medulla"
    ],
    "hint": "Classic lateral medullary syndrome with Horner's and cross-body sensory loss.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-5-2",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 64-year-old patient presents with ipsilateral CN VI (abducens) and CN VII (facial) nerve palsies combined with contralateral hemiparesis.",
    "question": "Where does Millard-Gubler Syndrome localize within the brainstem?",
    "options": [
      {
        "id": "A",
        "text": "Lateral Medulla"
      },
      {
        "id": "B",
        "text": "Dorsal Midbrain"
      },
      {
        "id": "C",
        "text": "Ventral Pontine Tegmentum (AICA / Basilar perforators)"
      },
      {
        "id": "D",
        "text": "Medial Medulla"
      },
      {
        "id": "E",
        "text": "Ventral Midbrain"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Millard-Gubler syndrome localizes to the anterolateral lower pons (ventral pontine tegmentum), involving CN VI and VII fascicles and the corticospinal tract.",
    "keyTakeaway": "Millard-Gubler = Ventral lower pons -> Ipsilateral CN VI & VII palsies + Contralateral hemiparesis.",
    "tags": [
      "Millard-Gubler",
      "Pons",
      "CN VI VII"
    ],
    "hint": "Ventral pontine syndrome combining abducens, facial palsy, and crossed hemiplegia.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-5-3",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 67-year-old male presents with ipsilateral CN III palsy, contralateral ataxia, and intention tremor.",
    "question": "Which midbrain stroke syndrome damages the CN III fascicles and the red nucleus / superior cerebellar peduncle?",
    "options": [
      {
        "id": "A",
        "text": "Claude Syndrome"
      },
      {
        "id": "B",
        "text": "Weber Syndrome"
      },
      {
        "id": "C",
        "text": "Benedikt Syndrome"
      },
      {
        "id": "D",
        "text": "Nothnagel Syndrome"
      },
      {
        "id": "E",
        "text": "Wallenberg Syndrome"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Claude syndrome involves dorsal midbrain tegmentum damage (CN III fascicles + superior cerebellar peduncle / red nucleus), producing ipsilateral CN III palsy and contralateral ataxia/tremor.",
    "keyTakeaway": "Claude Syndrome = Midbrain tegmentum -> Ipsilateral CN III palsy + Contralateral ataxia.",
    "tags": [
      "Claude Syndrome",
      "Midbrain",
      "Red Nucleus"
    ],
    "hint": "Midbrain syndrome characterized by 3rd nerve palsy and crossed cerebellar ataxia.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-5-4",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 59-year-old patient presents with acute quadriparesis, aphonia, and horizontal gaze paralysis, with intact vertical eye movements and consciousness.",
    "question": "What condition results from bilateral ventral pontine infarction involving the corticospinal and corticobulbar tracts?",
    "options": [
      {
        "id": "A",
        "text": "Brain death"
      },
      {
        "id": "B",
        "text": "Akinesia"
      },
      {
        "id": "C",
        "text": "Locked-in Syndrome"
      },
      {
        "id": "D",
        "text": "Persistent Vegetative State"
      },
      {
        "id": "E",
        "text": "Stupor"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Locked-in syndrome is caused by bilateral ventral pontine infarction. Patients retain full consciousness, cognition, and vertical eye movements/blinking, but suffer complete deefferentation (quadriparesis, aphonia).",
    "keyTakeaway": "Locked-in Syndrome = Bilateral ventral pontine stroke -> Quadriparesis & aphonia with preserved consciousness and vertical eye movement.",
    "tags": [
      "Locked-in",
      "Ventral Pons",
      "Bilateral Pontine"
    ],
    "hint": "Bilateral ventral pontine lesion preserving consciousness and vertical gaze.",
    "source": "Past Board Exam"
  },
  {
    "id": "img-q-1",
    "chapterId": 1,
    "chapterTitle": "Emergency Code Stroke Assessment",
    "vignette": "A 66-year-old male presents 45 minutes after acute right-sided weakness and expressive aphasia. Initial non-contrast head CT is performed immediately upon ED arrival and is shown below.",
    "question": "What radiological sign is present in the right Sylvian fissure, and what is its acute clinical significance?",
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
        "text": "Insular Ribbon Sign; indicates chronic parenchymal encephalomalacia"
      },
      {
        "id": "D",
        "text": "CTA Spot Sign; indicates active arterial contrast extravasation"
      },
      {
        "id": "E",
        "text": "Puff of Smoke Sign; indicates basal collateral vascular network"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The Hyperdense MCA Sign appears on non-contrast CT as a high-attenuation (bright) linear structure within the Sylvian fissure, caused by acute intraluminal red blood cell-rich thrombus in the M1 segment. It is an early sign of large vessel occlusion (LVO) associated with severe deficits and poor outcomes unless recanalized via thrombolysis or endovascular thrombectomy.",
    "keyTakeaway": "Hyperdense MCA sign on NCCT = Acute intraluminal thrombus in M1 MCA segment -> Screen immediately for mechanical thrombectomy.",
    "tags": [
      "NCCT",
      "Hyperdense MCA",
      "LVO Screening"
    ],
    "hint": "Look for a bright, high-attenuation tubular structure representing acute clot in the proximal middle cerebral artery.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/ct_dense_mca.jpg",
    "imageCaption": "Initial Non-Contrast Head CT axial slice at the level of the basal ganglia."
  },
  {
    "id": "img-q-2",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 71-year-old female presents 9 hours after last known well with right hemiparesis and global aphasia (NIHSS 18). Automated CT perfusion (CTP) software analysis is performed and displayed below.",
    "question": "Based on the CT perfusion parameters, what is the interpretation regarding core vs penumbra, and is the patient eligible for mechanical thrombectomy under DEFUSE-3 / DAWN criteria?",
    "options": [
      {
        "id": "A",
        "text": "Venous congestion secondary to sagittal sinus occlusion"
      },
      {
        "id": "B",
        "text": "Completed infarction with no salvageable penumbra; INELIGIBLE for thrombectomy"
      },
      {
        "id": "C",
        "text": "Normal brain perfusion without focal deficit"
      },
      {
        "id": "D",
        "text": "Target mismatch present (small ischemic core rCBF < 30%, large hypoperfused penumbra Tmax > 6s); ELIGIBLE for mechanical thrombectomy"
      },
      {
        "id": "E",
        "text": "Global cerebral hypoperfusion secondary to cardiogenic shock"
      }
    ],
    "correctOptionId": "D",
    "explanation": "CT Perfusion maps quantify ischemic core (rCBF < 30%) and total hypoperfused territory (Tmax > 6s). The difference represents salvageable ischemic penumbra. Under DEFUSE-3 (6-16h) and DAWN (6-24h) criteria, patients with a target mismatch (mismatch ratio >= 1.8, mismatch volume >= 15 mL, core < 70 mL) derive dramatic clinical benefit from endovascular thrombectomy.",
    "keyTakeaway": "CTP Mismatch = Small core (rCBF < 30%) + Large penumbra (Tmax > 6s) -> Proceed urgently to Mechanical Thrombectomy in 6-24h window.",
    "tags": [
      "CT Perfusion",
      "Ischemic Penumbra",
      "DEFUSE-3"
    ],
    "hint": "Compare the small dark ischemic core volume against the surrounding hypoperfused tissue volume.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/ct_perfusion_map.jpg",
    "imageCaption": "CT Perfusion (CTP) color map showing cerebral blood flow (rCBF) and transit time delay (Tmax)."
  },
  {
    "id": "img-q-3",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 28-year-old female presents with recurrent TIAs and progressive cognitive decline. 3D Time-of-Flight (TOF) Magnetic Resonance Angiography (MRA) is obtained and shown below.",
    "question": "What angiographic pattern is demonstrated, and what is the definitive long-term treatment of choice to prevent stroke recurrence?",
    "options": [
      {
        "id": "A",
        "text": "Carotid Artery Dissection; 6 months of oral anticoagulation"
      },
      {
        "id": "B",
        "text": "Primary CNS Vasculitis; High-dose IV methylprednisolone and cyclophosphamide"
      },
      {
        "id": "C",
        "text": "Atherosclerotic ICA occlusion; High-intensity Atorvastatin 80 mg daily"
      },
      {
        "id": "D",
        "text": "Moyamoya Disease ('Puff of Smoke' collateral network); Surgical revascularization (STA-MCA bypass or EDAS)"
      },
      {
        "id": "E",
        "text": "Fibromuscular Dysplasia ('String of Beads'); Percutaneous balloon angioplasty"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Moyamoya disease is a progressive steno-occlusive arteriopathy of the terminal internal carotid arteries and proximal Circle of Willis. The compensatory lenticulostriate parenchymal collaterals produce the characteristic 'puff of smoke' appearance on angiogram. Surgical revascularization (direct STA-MCA bypass or indirect EDAS/EDAM) is the definitive therapy.",
    "keyTakeaway": "Moyamoya Disease = Terminal ICA occlusion + 'Puff of Smoke' collaterals -> Treat with surgical revascularization.",
    "tags": [
      "Moyamoya",
      "MRA",
      "Puff of Smoke"
    ],
    "hint": "Identify the hazy, cloud-like net of basal lenticulostriate collateral vessels compensating for ICA occlusion.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/mra_moyamoya.jpg",
    "imageCaption": "3D Time-of-Flight (TOF) Magnetic Resonance Angiography (MRA) head max intensity projection."
  },
  {
    "id": "img-q-4",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 58-year-old male with acute hypertensive basal ganglia ICH undergoes emergency CT Angiography (CTA) within 2 hours of arrival, as shown below.",
    "question": "What radiological finding is demonstrated within the parenchymal hematoma, and what clinical risk does it predict?",
    "options": [
      {
        "id": "A",
        "text": "Empty Delta Sign; predicts venous sinus thrombosis"
      },
      {
        "id": "B",
        "text": "Pneumocephalus; predicts skull base fracture"
      },
      {
        "id": "C",
        "text": "CTA Spot Sign; predicts active ongoing hematoma expansion and clinical deterioration"
      },
      {
        "id": "D",
        "text": "Target Sign; predicts brain abscess formation"
      },
      {
        "id": "E",
        "text": "Hyperdense MCA Sign; predicts acute ischemic infarction"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The CTA Spot Sign is defined as one or more foci of contrast extravasation within an acute intraparenchymal hematoma on CTA. It is a strong independent predictor of hematoma expansion, early neurological decline, and 30-day mortality. Its presence guides aggressive blood pressure lowering and intensive monitoring.",
    "keyTakeaway": "CTA Spot Sign = Active contrast extravasation in ICH -> High risk of rapid hematoma expansion.",
    "tags": [
      "CTA Spot Sign",
      "ICH Expansion",
      "Radiology"
    ],
    "hint": "Identify the bright spot of contrast contrast material pooling inside the dense hematoma cavity.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/cta_spot_sign.jpg",
    "imageCaption": "Computed Tomography Angiography (CTA) Head axial slice through the basal ganglia."
  },
  {
    "id": "img-q-5",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 64-year-old female presents 2 hours after acute onset of right face/arm weakness and sensory loss. Diffusion-Weighted Imaging (DWI b=1000) MRI brain is shown below.",
    "question": "What pathophysiology produces the hyperintense signal on DWI, and what is the corresponding signal on the ADC map?",
    "options": [
      {
        "id": "A",
        "text": "Vasogenic edema; Hyperintense (bright) on ADC map"
      },
      {
        "id": "B",
        "text": "Arterial calcification; No signal on ADC map"
      },
      {
        "id": "C",
        "text": "Cytotoxic edema restricting microscopic water diffusion; Hypointense (dark) on ADC map"
      },
      {
        "id": "D",
        "text": "Chronic gliosis; Isointense on ADC map"
      },
      {
        "id": "E",
        "text": "Subarachnoid blood deposition; Hyperintense on ADC map"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Acute cerebral ischemia causes Na+/K+-ATPase pump failure, resulting in influx of extracellular water into cells (cytotoxic edema). This restricts microscopic Brownian motion of water molecules, yielding bright hyperintensity on DWI and dark hypointensity on the corresponding Apparent Diffusion Coefficient (ADC) map.",
    "keyTakeaway": "Restricted Diffusion = Bright on DWI + Dark on ADC map (Cytotoxic edema from acute cell death).",
    "tags": [
      "DWI MRI",
      "Restricted Diffusion",
      "Cytotoxic Edema"
    ],
    "hint": "Recall how cellular energy failure shifts extracellular water into swollen cells, restricting Brownian movement.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/dwi_adc_stroke.jpg",
    "imageCaption": "Diffusion-Weighted Imaging (DWI b=1000) MRI brain axial section."
  },
  {
    "id": "img-q-6",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "An 82-year-old female with progressive mild cognitive impairment presents after a transient episode of numbness. Susceptibility-Weighted Imaging (SWI) MRI is displayed below.",
    "question": "What radiological finding is demonstrated, and what underlying pathology does it indicate under the Boston Criteria v2.0?",
    "options": [
      {
        "id": "A",
        "text": "Deep basal ganglia hypertensive lacunes; Lipohyalinosis"
      },
      {
        "id": "B",
        "text": "Multiple cavernous malformations; Familial Cavernomatosis"
      },
      {
        "id": "C",
        "text": "Multiple lobar cortical/subcortical microbleeds; Cerebral Amyloid Angiopathy (CAA)"
      },
      {
        "id": "D",
        "text": "Multiple sclerosis black holes; Demyelination"
      },
      {
        "id": "E",
        "text": "Neurocysticercosis lesions; Parasitic infection"
      }
    ],
    "correctOptionId": "C",
    "explanation": "SWI and T2*-GRE MRI sequences are highly sensitive to paramagnetic hemosiderin breakdown products ('blooming artifact'). The presence of multiple punctate microbleeds restricted strictly to the lobar cortical and subcortical regions in an elderly patient fulfills the Boston Criteria for Probable Cerebral Amyloid Angiopathy (CAA), carrying a high risk for lobar ICH.",
    "keyTakeaway": "Lobar Microbleeds on SWI/GRE = Cerebral Amyloid Angiopathy (CAA) -> High lobar ICH risk (avoid long-term anticoagulation if possible).",
    "tags": [
      "SWI MRI",
      "Microbleeds",
      "Cerebral Amyloid Angiopathy"
    ],
    "hint": "Note the strict lobar cortical distribution of tiny dark signal dropouts representing old microhemorrhages.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/swi_caa_microbleeds.jpg",
    "imageCaption": "Susceptibility-Weighted Imaging (SWI) MRI brain axial slice."
  },
  {
    "id": "img-q-7",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage & Aneurysms",
    "vignette": "A 49-year-old female presents with sudden onset 'worst headache of life' accompanied by nausea and neck stiffness. Non-contrast head CT is shown below.",
    "question": "What is the diagnosis, and what Modified Fisher Grade / vasospasm risk does this scan represent?",
    "options": [
      {
        "id": "A",
        "text": "Subdural Hematoma; Low vasospasm risk"
      },
      {
        "id": "B",
        "text": "Aneurysmal Subarachnoid Hemorrhage (SAH); Modified Fisher Grade 3 (thick focal subarachnoid blood in basal cisterns with high vasospasm risk)"
      },
      {
        "id": "C",
        "text": "Epidural Hematoma; Low vasospasm risk"
      },
      {
        "id": "D",
        "text": "Normal Non-Contrast CT head; Normal vasospasm risk"
      },
      {
        "id": "E",
        "text": "Acute Ischemic MCA Infarction; No vasospasm risk"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The non-contrast CT shows hyperdense (bright white) acute blood filling the suprasellar and basal subarachnoid cisterns. Dense diffuse subarachnoid blood corresponds to a high Modified Fisher Grade (Grade 3/4), carrying a significant risk of delayed cerebral ischemia (DCI) from arterial vasospasm between days 4-14.",
    "keyTakeaway": "Basal Cistern SAH on NCCT = Aneurysmal SAH -> Start oral Nimodipine 60 mg q4h for 21 days to mitigate DCI.",
    "tags": [
      "SAH",
      "Basal Cisterns",
      "Modified Fisher"
    ],
    "hint": "Look for dense white hyperattenuating blood outlining the star-shaped suprasellar cistern and Sylvian fissures.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/ct_sah_basal_cisterns.jpg",
    "imageCaption": "Non-Contrast Head CT axial slice at the level of the suprasellar cistern."
  },
  {
    "id": "img-q-8",
    "chapterId": 16,
    "chapterTitle": "Cerebral Venous Thrombosis",
    "vignette": "A 31-year-old postpartum female presents with severe progressive headache, papilledema, and new-onset focal motor seizure. Contrast-enhanced CT Venogram (CTV) is shown below.",
    "question": "What pathognomonic radiological sign is present, and what is the immediate treatment of choice even if venous hemorrhagic transformation is noted?",
    "options": [
      {
        "id": "A",
        "text": "Hyperdense MCA Sign; IV Tenecteplase thrombolysis"
      },
      {
        "id": "B",
        "text": "Empty Delta Sign; Therapeutic anticoagulation with LMWH or IV Unfractionated Heparin"
      },
      {
        "id": "C",
        "text": "CTA Spot Sign; Immediate IV Tranexamic Acid"
      },
      {
        "id": "D",
        "text": "Puff of Smoke; Surgical bypass"
      },
      {
        "id": "E",
        "text": "Double Rim Sign; Surgical abscess drainage"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The 'Empty Delta Sign' on contrast CT venography or post-contrast T1 MRI is pathognomonic for Superior Sagittal Sinus Thrombosis. It consists of a central dark triangular non-enhancing filling defect (thrombus) surrounded by contrast-enhancing dural sinus collateral walls. AHA/EFNS guidelines mandate therapeutic anticoagulation (LMWH/heparin) as first-line therapy.",
    "keyTakeaway": "Empty Delta Sign = Superior Sagittal Sinus Thrombosis -> Treat with Full Therapeutic Anticoagulation (LMWH/Heparin).",
    "tags": [
      "Empty Delta Sign",
      "CVST",
      "CT Venogram"
    ],
    "hint": "Identify the central non-enhancing triangular clot defect inside the posterior dural sinus.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/mrv_empty_delta.jpg",
    "imageCaption": "Contrast-enhanced CT Venogram (CTV) axial section."
  },
  {
    "id": "img-q-9",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 42-year-old male presents with recurrent subcortical ischemic strokes, migraine with aura, and mood disturbance. Family history reveals early dementia in his father. Axial FLAIR MRI is shown below.",
    "question": "What neuroimaging hallmark of CADASIL is demonstrated, and what gene mutation confirms the diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Bilateral thalamic hyperintensities; GLA gene mutation"
      },
      {
        "id": "B",
        "text": "Parieto-occipital vasogenic edema; COL4A1 mutation"
      },
      {
        "id": "C",
        "text": "Confluent FLAIR hyperintensities involving the anterior temporal lobes and external capsule; NOTCH3 mutation"
      },
      {
        "id": "D",
        "text": "Cerebellar atrophy; HTRA1 mutation"
      },
      {
        "id": "E",
        "text": "Periventricular Dawson fingers; HLA-DRB1 mutation"
      }
    ],
    "correctOptionId": "C",
    "explanation": "CADASIL (Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy) is caused by missense mutations in the NOTCH3 gene on chromosome 19p13. Characteristically, FLAIR MRI displays symmetric confluent subcortical white matter hyperintensities with pathognomonic involvement of the anterior temporal poles and external capsule.",
    "keyTakeaway": "CADASIL = Temporal pole white matter hyperintensities on FLAIR + NOTCH3 gene mutation.",
    "tags": [
      "CADASIL",
      "FLAIR MRI",
      "NOTCH3"
    ],
    "hint": "Look for prominent hyperintense white matter signal abnormalities localized in the anterior temporal pole.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/flair_cadasil.jpg",
    "imageCaption": "Fluid-Attenuated Inversion Recovery (FLAIR) MRI brain axial section."
  },
  {
    "id": "img-q-10",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 38-year-old male presents with sudden neck pain, right Horner syndrome, and transient left hemiparesis following a chiropractic neck manipulation. Catheter Digital Subtraction Angiogram (DSA) is shown below.",
    "question": "What angiographic feature is demonstrated in the internal carotid artery, and what is the primary pathophysiological mechanism?",
    "options": [
      {
        "id": "A",
        "text": "String of beads appearance; Fibromuscular dysplasia"
      },
      {
        "id": "B",
        "text": "Atherosclerotic ulcerated plaque; Atherosclerosis"
      },
      {
        "id": "C",
        "text": "Concentric arterial stenosis; Takayasu arteritis"
      },
      {
        "id": "D",
        "text": "Flame-shaped arterial occlusion / 'String Sign'; Cervical internal carotid artery dissection"
      },
      {
        "id": "E",
        "text": "Pseudoaneurysm sac; Mycotic aneurysm"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Carotid artery dissection occurs when blood penetrates an intimal tear, creating an intramural hematoma within the vessel wall. On catheter DSA or CTA, this appears as smooth tapering luminal narrowing ('string sign') ending in a flame-shaped distal occlusion. Horner syndrome results from disruption of ascending oculosympathetic fibers.",
    "keyTakeaway": "Flame-shaped tapering / String Sign on Angiography = Cervical Carotid Artery Dissection.",
    "tags": [
      "Dissection",
      "String Sign",
      "DSA Angiography"
    ],
    "hint": "Note the smooth, progressive luminal tapering of the cervical ICA resembling a flame tip.",
    "source": "Neuroimaging Case",
    "imageUrl": "/images/dsa_dissection.jpg",
    "imageCaption": "Digital Subtraction Angiography (DSA) lateral projection of right cervical internal carotid artery."
  },
  {
    "id": "img-q-11",
    "chapterId": 1,
    "chapterTitle": "Emergency Code Stroke Assessment",
    "vignette": "A 59-year-old patient presents 90 minutes post-stroke onset. Non-contrast head CT shows subtle loss of gray-white matter differentiation in the lateral insular cortex.",
    "question": "What early ischemic NCCT radiological sign does this represent, and how does it affect the ASPECTS score?",
    "options": [
      {
        "id": "A",
        "text": "Insular Ribbon Sign; reduces ASPECTS score by 1 point for the insular cortex region"
      },
      {
        "id": "B",
        "text": "Sulcal effacement; indicates hemorrhagic transformation"
      },
      {
        "id": "C",
        "text": "Hyperdense MCA Sign; reduces ASPECTS by 3 points"
      },
      {
        "id": "D",
        "text": "Midline shift; indicates brain death"
      },
      {
        "id": "E",
        "text": "Disappearing Basal Ganglia Sign; reduces ASPECTS by 5 points"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The 'Insular Ribbon Sign' is an early ischemic NCCT sign caused by cytotoxic edema in the insular cortex (supplied by M2 MCA branches). Because the insula has limited collateral blood supply, it becomes hypodense early. On the 10-point ASPECTS scoring system, loss of insular ribbon subtracts 1 point.",
    "keyTakeaway": "Insular Ribbon Sign = Early ischemic hypoattenuation of insular cortex -> Subtract 1 point from ASPECTS.",
    "tags": [
      "Insular Ribbon",
      "NCCT",
      "ASPECTS"
    ],
    "hint": "Loss of normal distinction between the insular cortex gray matter and adjacent extreme capsule white matter.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-12",
    "chapterId": 2,
    "chapterTitle": "Initial Stroke Evaluation & Thrombolysis",
    "vignette": "A patient with unknown time of onset ('Wake-up stroke') is evaluated with MRI. DWI shows a bright hyperintense lesion in the left motor cortex, while FLAIR shows NO signal hyperintensity in the same region.",
    "question": "What is the interpretation of this 'DWI-FLAIR Mismatch', and what did the landmark WAKE-UP trial demonstrate regarding treatment?",
    "options": [
      {
        "id": "A",
        "text": "Lesion represents vasogenic tumor edema; Start IV Dexamethasone"
      },
      {
        "id": "B",
        "text": "Lesion is chronic encephalomalacia; No treatment indicated"
      },
      {
        "id": "C",
        "text": "Lesion represents artifact; Repeat MRI in 48 hours"
      },
      {
        "id": "D",
        "text": "Stroke onset is highly likely < 4.5 hours; IV Thrombolysis (Alteplase) significantly improves functional outcome"
      },
      {
        "id": "E",
        "text": "Stroke onset is > 24 hours; Thrombolysis is strictly contraindicated"
      }
    ],
    "correctOptionId": "D",
    "explanation": "DWI changes occur within minutes of ischemia, whereas FLAIR hyperintensity takes 4.5 to 6 hours to develop. A positive DWI lesion with negative FLAIR ('DWI-FLAIR Mismatch') indicates stroke onset < 4.5h. The WAKE-UP trial proved IV Alteplase improves 90-day functional outcomes in wake-up strokes with DWI-FLAIR mismatch.",
    "keyTakeaway": "DWI-FLAIR Mismatch = Stroke onset < 4.5h in wake-up stroke -> Qualifies for IV Thrombolysis (WAKE-UP trial).",
    "tags": [
      "DWI-FLAIR Mismatch",
      "Wake-up Stroke",
      "WAKE-UP Trial"
    ],
    "hint": "DWI becomes positive immediately while FLAIR requires at least 4.5 hours to turn bright.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-13",
    "chapterId": 18,
    "chapterTitle": "Neuro-ICU & Hemodynamic Management",
    "vignette": "A 52-year-old male with severe MCA infarction develops acute lethargy 30 hours post-onset. NCCT shows dark ischemic hypoattenuation involving > 50% of the MCA territory with compression of the lateral ventricle and sulcal effacement.",
    "question": "What is the diagnosis, and what intervention within 48 hours is life-saving?",
    "options": [
      {
        "id": "A",
        "text": "Central Pontine Myelinolysis; Hypertonic saline"
      },
      {
        "id": "B",
        "text": "Lacunar Infarction; High-dose Aspirin"
      },
      {
        "id": "C",
        "text": "Malignant MCA Infarction; Emergency Decompressive Hemicraniectomy"
      },
      {
        "id": "D",
        "text": "Epidural Hematoma; Burr hole evacuation"
      },
      {
        "id": "E",
        "text": "Normal Pressure Hydrocephalus; Ventriculoperitoneal shunt"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Malignant MCA infarction is severe ischemic stroke involving > 50% MCA territory leading to massive space-occupying edema, midline shift, and uncal herniation. Landmark trials (DECIMAL, DESTINY, HAMLET) proved decompressive hemicraniectomy within 48h reduces mortality from 80% to 30% in patients <= 60 years.",
    "keyTakeaway": "Malignant MCA Stroke = Severe cerebral edema > 50% MCA territory -> Decompressive Hemicraniectomy < 48h.",
    "tags": [
      "Malignant MCA",
      "Decompressive Hemicraniectomy",
      "Neuro-ICU"
    ],
    "hint": "Extensive hemispheric edema causing ventricular compression and herniation risk.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-14",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 35-year-old male presents with a first seizure. T2-weighted MRI brain shows a discrete 2 cm 'popcorn-like' reticulated lesion in the frontal lobe surrounded by a complete rim of dark hypointensity.",
    "question": "What vascular malformation is demonstrated by this classic 'popcorn' appearance with hemosiderin rim?",
    "options": [
      {
        "id": "A",
        "text": "Dural Arteriovenous Fistula (dAVF)"
      },
      {
        "id": "B",
        "text": "Cavernous Malformation (Cavernoma)"
      },
      {
        "id": "C",
        "text": "Arteriovenous Malformation (AVM)"
      },
      {
        "id": "D",
        "text": "Capillary Telangiectasia"
      },
      {
        "id": "E",
        "text": "Developmental Venous Anomaly (DVA)"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Cavernous malformations (cavernomas) consist of dilated sinusoid vascular channels without intervening neural parenchyma. On T2-weighted MRI, they characteristically present as a 'popcorn-like' or 'mulberry-like' reticulated central core of mixed signal intensity surrounded by a dark peripheral ring of hemosiderin blooming.",
    "keyTakeaway": "Cavernoma on MRI = 'Popcorn-like' reticulated core with dark peripheral hemosiderin ring on T2/GRE.",
    "tags": [
      "Cavernoma",
      "T2 MRI",
      "Popcorn Lesion"
    ],
    "hint": "Classic reticulated lesion appearance with surrounding dark hemosiderin signal drop on T2 MRI.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-15",
    "chapterId": 15,
    "chapterTitle": "Pediatric Stroke & Hematology",
    "vignette": "A 9-year-old child with Sickle Cell Disease (HbSS) undergoes routine annual screening Transcranial Doppler (TCD) ultrasound.",
    "question": "What spectral TCD flow velocity threshold in the MCA or distal ICA defines an abnormal result requiring chronic transfusion therapy under STOP trial guidelines?",
    "options": [
      {
        "id": "A",
        "text": "TAMMV >= 100 cm/s"
      },
      {
        "id": "B",
        "text": "TAMMV >= 50 cm/s"
      },
      {
        "id": "C",
        "text": "Resistive Index >= 0.90"
      },
      {
        "id": "D",
        "text": "Time-Averaged Mean Maximum Velocity (TAMMV) >= 200 cm/s"
      },
      {
        "id": "E",
        "text": "Peak Systolic Velocity <= 30 cm/s"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The landmark STOP trial established that TCD screening measuring Time-Averaged Mean Maximum Velocity (TAMMV) >= 200 cm/s in the distal ICA or MCA trunk identifies children with Sickle Cell Disease at high risk for ischemic stroke (> 10%/year). Initiating chronic blood transfusion therapy reduces primary stroke risk by 90%.",
    "keyTakeaway": "STOP Trial TCD Criteria: TAMMV >= 200 cm/s = High stroke risk -> Start Chronic Transfusion Prophylaxis.",
    "tags": [
      "TCD",
      "Sickle Cell",
      "STOP Trial"
    ],
    "hint": "The 200 cm/s flow velocity cutoff defining critical arterial stenosis in sickle cell vasculopathy.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-16",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 44-year-old female with cryptogenic embolic stroke is found on CTA neck to have a thin, shelf-like intimal projection along the posterior wall of the carotid bulb without calcification.",
    "question": "What vascular anomaly is present, and why does it carry a high risk of recurrent stroke in young adults?",
    "options": [
      {
        "id": "A",
        "text": "Atherosclerotic ulcerated plaque; causes lipid core rupture"
      },
      {
        "id": "B",
        "text": "Carotid body tumor; causes mechanical compression"
      },
      {
        "id": "C",
        "text": "Subclavian steal syndrome; causes retrograde vertebral flow"
      },
      {
        "id": "D",
        "text": "Takayasu arteritis; causes diffuse pan-cortical arteritis"
      },
      {
        "id": "E",
        "text": "Carotid Web (Atypical Fibromuscular Dysplasia); causes local blood stasis and thrombosis in the recess downstream"
      }
    ],
    "correctOptionId": "E",
    "explanation": "A Carotid Web is an atypical variant of fibromuscular dysplasia appearing as a thin, shelf-like intimal membrane projecting into the posterior carotid bulb lumen. Blood flow behind the web becomes stagnant, forming thrombi that embolize intracranial arteries. Standard management involves CEA or stenting to prevent recurrences.",
    "keyTakeaway": "Carotid Web = Shelf-like intimal projection in carotid bulb -> Local blood stasis causes recurrent embolic stroke.",
    "tags": [
      "Carotid Web",
      "CTA Neck",
      "Cryptogenic Stroke"
    ],
    "hint": "Identify the thin shelf-like intimal defect in the posterior carotid bulb creating a stagnant vascular pocket.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-17",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 36-year-old male with acute cognitive decline undergoes High-Resolution Vessel Wall MRI (VWMRI). The scan shows smooth, concentric, circumferential vessel wall enhancement and thickening of multiple Circle of Willis branches.",
    "question": "Which neurovascular etiology does concentric smooth vessel wall enhancement on VWMRI differentiate from eccentric plaque enhancement?",
    "options": [
      {
        "id": "A",
        "text": "Intracranial Atherosclerosis (eccentric non-uniform enhancement)"
      },
      {
        "id": "B",
        "text": "Moyamoya Disease (smooth vessel narrowing without enhancement)"
      },
      {
        "id": "C",
        "text": "Arterial Dissection (intramural hematoma crescent)"
      },
      {
        "id": "D",
        "text": "Primary CNS Vasculitis (or active inflammatory arteritis)"
      },
      {
        "id": "E",
        "text": "Reversible Cerebral Vasoconstriction Syndrome (RCVS; no wall enhancement)"
      }
    ],
    "correctOptionId": "D",
    "explanation": "High-Resolution Vessel Wall MRI (VWMRI) distinguishes vasculopathy etiologies: Primary CNS Vasculitis produces smooth, concentric (circumferential) vessel wall enhancement and uniform thickening. In contrast, Intracranial Atherosclerosis causes eccentric (non-uniform) wall thickening with focal plaque enhancement, while RCVS typically lacks wall enhancement.",
    "keyTakeaway": "VWMRI Wall Enhancement: Concentric smooth enhancement = Vasculitis; Eccentric non-uniform enhancement = Atherosclerosis.",
    "tags": [
      "VWMRI",
      "Vasculitis",
      "Vessel Wall Imaging"
    ],
    "hint": "Concentric 360-degree uniform vessel wall enhancement is characteristic of active transmural inflammation.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-18",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 74-year-old comatose patient presents with sudden quadriparesis and pinpoint pupils. Non-contrast head CT demonstrates a bright hyperdense signal along the pre-pontine midline.",
    "question": "What radiological sign is present, and what emergency diagnostic procedure must be performed next?",
    "options": [
      {
        "id": "A",
        "text": "CTA Spot Sign; Hematoma evacuation"
      },
      {
        "id": "B",
        "text": "Hyperdense MCA Sign; CTA for MCA occlusion"
      },
      {
        "id": "C",
        "text": "Insular Ribbon Sign; Lumbar Puncture"
      },
      {
        "id": "D",
        "text": "Dense Basilar Artery Sign; CTA Head/Neck to confirm acute Basilar Artery Occlusion (BAO)"
      },
      {
        "id": "E",
        "text": "Empty Delta Sign; MR Venography"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The 'Dense Basilar Artery Sign' on NCCT indicates acute intraluminal thrombus in the basilar artery. Acute basilar artery occlusion (BAO) is a catastrophic neurovascular emergency causing brainstem ischemia, coma, and high mortality. Immediate CTA/MRA followed by emergency endovascular thrombectomy is required.",
    "keyTakeaway": "Dense Basilar Sign on NCCT = Acute Basilar Artery Occlusion -> Emergency CTA and endovascular thrombectomy.",
    "tags": [
      "Dense Basilar",
      "Basilar Occlusion",
      "Posterior Circulation"
    ],
    "hint": "Hyperdense signal in the prepontine cistern representing acute thrombus in the main basilar trunk.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-19",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage & Aneurysms",
    "vignette": "A 50-year-old patient with prior SAH presents 8 days later with acute left hemiparesis. Catheter cerebral angiography reveals severe segmental narrowing of the M1 MCA and A1 ACA branches.",
    "question": "What condition is present, and what intra-arterial therapy can be administered during catheter angiography for refractory cases?",
    "options": [
      {
        "id": "A",
        "text": "Aneurysmal Vasospasm / Delayed Cerebral Ischemia (DCI); Intra-arterial Verapamil/Nicardipine infusion or balloon angioplasty"
      },
      {
        "id": "B",
        "text": "Moyamoya Disease; EDAS surgery"
      },
      {
        "id": "C",
        "text": "Primary CNS Vasculitis; IV Cyclophosphamide"
      },
      {
        "id": "D",
        "text": "Atherosclerotic stenosis; Intracranial stenting"
      },
      {
        "id": "E",
        "text": "Mycotic aneurysm; High-dose IV Penicillin"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Cerebral vasospasm typically occurs between days 4-14 post-SAH due to spasmogenic breakdown products of subarachnoid blood. When medical management (euvolenia, induced hypertension) fails, endovascular intra-arterial vasodilator infusion (Verapamil, Nicardipine, Milrinone) or transluminal balloon angioplasty is indicated.",
    "keyTakeaway": "Refractory SAH Vasospasm = Treat endovascularly with Intra-arterial Vasodilators or Balloon Angioplasty.",
    "tags": [
      "Vasospasm",
      "Angiography",
      "Intra-arterial Verapamil"
    ],
    "hint": "Severe post-SAH arterial narrowing managed in the neuro-interventional suite with vasodilator infusions.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-20",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "An 80-year-old patient presents with acute lobar intracerebral hemorrhage. Gradient Recoil Echo (GRE) MRI reveals extensive linear signal drop along the cerebral cortical sulci without focal parenchymal hematoma.",
    "question": "What radiological finding is demonstrated by this superficial cortical hemosiderin deposition?",
    "options": [
      {
        "id": "A",
        "text": "Acute subdural hematoma; indicative of bridging vein tear"
      },
      {
        "id": "B",
        "text": "Bacterial meningitis; indicative of leptomeningeal infection"
      },
      {
        "id": "C",
        "text": "Deep lacunar infarction; indicative of lipohyalinosis"
      },
      {
        "id": "D",
        "text": "Cortical Superficial Siderosis (cSS); indicative of Cerebral Amyloid Angiopathy and high future lobar ICH risk"
      },
      {
        "id": "E",
        "text": "Cavernous malformation; indicative of familial cavernomas"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Cortical Superficial Siderosis (cSS) appears on T2*-GRE / SWI MRI as curvilinear hypointense signal drop lining the cerebral convexities, caused by chronic or recurrent bleeding into the subarachnoid space from amyloid-laden cortical vessels. It is a key feature of the Boston Criteria v2.0 for CAA.",
    "keyTakeaway": "Cortical Superficial Siderosis (cSS) on GRE/SWI = High-risk feature of Cerebral Amyloid Angiopathy (CAA).",
    "tags": [
      "Superficial Siderosis",
      "CAA",
      "GRE MRI"
    ],
    "hint": "Curvilinear dark hemosiderin staining along the cortical gyri and sulci.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-21",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 24-year-old male presents with acute intracerebral hemorrhage. Digital Subtraction Angiography (DSA) reveals a complex tangle of abnormal dysplastic blood vessels fed by dilated nutrient arteries and draining prematurely into enlarged cortical veins.",
    "question": "What lesion is demonstrated, and what system is used to grade surgical resection risk?",
    "options": [
      {
        "id": "A",
        "text": "Developmental Venous Anomaly (DVA); ASPECTS Score"
      },
      {
        "id": "B",
        "text": "Cavernous Malformation; ICH Score"
      },
      {
        "id": "C",
        "text": "Brain Arteriovenous Malformation (AVM); Spetzler-Martin Grading System (Size, Eloquence, Venous Drainage)"
      },
      {
        "id": "D",
        "text": "Vein of Galen Malformation; Modified Rankin Scale"
      },
      {
        "id": "E",
        "text": "Dural Arteriovenous Fistula (dAVF); Hunt and Hess Scale"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Brain Arteriovenous Malformations (AVMs) consist of an abnormal vessel tangle (nidus) with direct arteriovenous shunting without an intervening capillary bed. Surgical resection morbidity/mortality is predicted by the Spetzler-Martin Grade (Score 1-5 based on nidus size <3cm/3-6cm/>6cm, eloquent cortex location, and deep venous drainage).",
    "keyTakeaway": "Brain AVM = Arteriovenous nidus with early venous drainage -> Grade using Spetzler-Martin scale.",
    "tags": [
      "AVM",
      "Spetzler-Martin",
      "Angiography"
    ],
    "hint": "High-flow vascular nidus with rapid early filling of hypertrophied draining veins.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-22",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 70-year-old trauma patient presents after a fall. NCCT shows a high-attenuation crescent-shaped extra-axial fluid collection crossing cranial suture lines.",
    "question": "What lesion is present, and what vascular structure is disrupted?",
    "options": [
      {
        "id": "A",
        "text": "Intraparenchymal Hemorrhage; lipohyalinosis of penetrating arteries"
      },
      {
        "id": "B",
        "text": "Cephalohematoma; subperiosteal blood collection"
      },
      {
        "id": "C",
        "text": "Subdural Hematoma (SDH); disruption of cortical bridging veins"
      },
      {
        "id": "D",
        "text": "Subarachnoid Hemorrhage (SAH); rupture of saccular aneurysm"
      },
      {
        "id": "E",
        "text": "Epidural Hematoma (EDH); laceration of Middle Meningeal Artery"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Subdural hematomas (SDH) result from tearing of bridging veins between the cerebral cortex and dural sinuses. On non-contrast CT, SDH appears as a crescentic extra-axial hyperdensity that spreads freely across cranial suture lines (unlike epidural hematomas which are limited by suture attachments).",
    "keyTakeaway": "Subdural Hematoma = Crescentic extra-axial hyperdensity crossing sutures (bridging vein tear).",
    "tags": [
      "Subdural Hematoma",
      "NCCT",
      "Bridging Veins"
    ],
    "hint": "Crescentic shape following the dural contour and crossing cranial suture lines.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-23",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 67-year-old male undergoes mechanical thrombectomy for M1 MCA occlusion. Post-procedure catheter DSA demonstrates complete recanalization of the target vessel with 100% perfusion of the distal vascular territory.",
    "question": "What Thrombolysis in Cerebral Infarction (TICI) score represents this optimal complete angiographic reperfusion?",
    "options": [
      {
        "id": "A",
        "text": "TICI 3 (Complete 100% reperfusion)"
      },
      {
        "id": "B",
        "text": "TICI 1 (Minimal penetration without distal branch perfusion)"
      },
      {
        "id": "C",
        "text": "TICI 0 (No perfusion)"
      },
      {
        "id": "D",
        "text": "TICI 2b (Partial reperfusion >= 50%)"
      },
      {
        "id": "E",
        "text": "TICI 2a (Partial reperfusion < 50%)"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The modified TICI scale evaluates reperfusion post-thrombectomy: TICI 3 indicates 100% complete restoration of perfusion with normal distal branch filling. TICI 2b (>= 50% territory) and TICI 3 represent successful endovascular recanalization.",
    "keyTakeaway": "TICI 3 = Complete 100% angiographic reperfusion after mechanical thrombectomy.",
    "tags": [
      "TICI 3",
      "Thrombectomy",
      "Reperfusion"
    ],
    "hint": "Grade for complete, prompt 100% arterial flow restoration.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-24",
    "chapterId": 18,
    "chapterTitle": "Neuro-ICU & Hemodynamic Management",
    "vignette": "A 45-year-old patient suffering cardiac arrest is resuscitated after 25 minutes. NCCT head at 24 hours displays loss of gray-white differentiation, diffuse cerebral edema, and hyperdensity of the falx and tentorium relative to hypodense brain parenchyma.",
    "question": "What radiological sign of severe hypoxic-ischemic encephalopathy (HIE) is demonstrated?",
    "options": [
      {
        "id": "A",
        "text": "Puff of Smoke Sign"
      },
      {
        "id": "B",
        "text": "Reversal Sign (Pseudo-subarachnoid hemorrhage sign)"
      },
      {
        "id": "C",
        "text": "Empty Delta Sign"
      },
      {
        "id": "D",
        "text": "Insular Ribbon Sign"
      },
      {
        "id": "E",
        "text": "CTA Spot Sign"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The 'Reversal Sign' (or pseudo-subarachnoid hemorrhage sign) on NCCT is seen in severe global hypoxic-ischemic encephalopathy (HIE). Diffuse cerebral edema decreases cerebral cortical attenuation, making the dura, falx, tentorium, and basal cisterns appear abnormally hyperdense by contrast comparison.",
    "keyTakeaway": "Reversal Sign on NCCT = Severe global Hypoxic-Ischemic Encephalopathy (poor neurological prognosis).",
    "tags": [
      "Reversal Sign",
      "Hypoxic Brain Injury",
      "NCCT"
    ],
    "hint": "Diffuse cortical swelling causing cerebral hypodensity relative to the bright dural folds.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "img-q-25",
    "chapterId": 16,
    "chapterTitle": "Cerebral Venous Thrombosis",
    "vignette": "A 33-year-old female taking oral contraceptives presents with parasagittal hemorrhagic infarction and bilateral leg weakness. MRI FLAIR shows non-visualization of the internal cerebral veins and straight sinus flow void.",
    "question": "What deep venous thrombosis entity is present, and what anatomical structures are classically affected?",
    "options": [
      {
        "id": "A",
        "text": "Transverse sinus thrombosis; affects temporal lobe"
      },
      {
        "id": "B",
        "text": "Sigmoid sinus thrombosis; affects cerebellar hemisphere"
      },
      {
        "id": "C",
        "text": "Cavernous sinus thrombosis; affects CN III, IV, VI, V1"
      },
      {
        "id": "D",
        "text": "Deep Cerebral Venous Thrombosis (Vein of Galen / Straight Sinus); affects bilateral thalami and basal ganglia"
      },
      {
        "id": "E",
        "text": "Cortical vein thrombosis; affects isolated gyri"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Deep Cerebral Venous Thrombosis involves the Internal Cerebral Veins, Vein of Galen, and Straight Sinus. Because these veins drain the deep gray structures, thrombosis classically produces bilateral thalamic and basal ganglia edema/infarction (often with hemorrhagic transformation), presenting with rapid coma or movement disorders.",
    "keyTakeaway": "Deep Cerebral Venous Thrombosis = Bilateral thalamic edema/infarction on MRI (Vein of Galen / Straight Sinus occlusion).",
    "tags": [
      "Deep Venous Thrombosis",
      "Bilateral Thalami",
      "Vein of Galen"
    ],
    "hint": "Occlusion of deep venous system draining the bilateral thalami and internal capsules.",
    "source": "Neuroimaging Case"
  },
  {
    "id": "q-fj-1",
    "chapterId": 6,
    "chapterTitle": "Chapter 6: Stroke Pathophysiology",
    "vignette": "A 68-year-old male with septic shock has a mean arterial pressure that drops to 40 mmHg. Transcranial Doppler and cerebral perfusion monitoring demonstrate failure of normal autoregulation.",
    "question": "When decreased cerebral perfusion causes autoregulatory failure, what physiological response occurs to cerebral blood flow (CBF), cerebral blood volume (CBV), mean transit time (MTT), and oxygen extraction fraction (OEF)?",
    "options": [
      {
        "id": "A",
        "text": "CBF decreases, CBV increases, MTT increases, and OEF increases"
      },
      {
        "id": "B",
        "text": "CBF decreases, CBV decreases, MTT decreases, and OEF remains unchanged"
      },
      {
        "id": "C",
        "text": "CBF remains unchanged, CBV increases, MTT increases, and OEF decreases"
      },
      {
        "id": "D",
        "text": "CBF decreases, CBV remains unchanged, MTT decreases, and OEF increases"
      },
      {
        "id": "E",
        "text": "CBF increases, CBV decreases, MTT decreases, and OEF decreases"
      }
    ],
    "correctOptionId": "A",
    "explanation": "With normal cerebral autoregulation, CBF is maintained constant over a mean arterial pressure of 50 to 150 mmHg. Once perfusion pressure falls below the lower limit of autoregulation (autoregulatory failure), CBF drops linearly as a function of pressure. To compensate, maximal vasodilation causes CBV to increase, resulting in increased MTT (MTT = CBV/CBF). To maintain cerebral metabolic rate of oxygen (CMRO2) unchanged, the oxygen extraction fraction (OEF) increases.",
    "keyTakeaway": "Autoregulatory failure = Decreased CBF, Increased CBV, Increased MTT, and Increased OEF to preserve CMRO2.",
    "tags": [
      "Autoregulation",
      "CBF",
      "Pathophysiology",
      "OEF"
    ],
    "hint": "Recall that the brain attempts to maintain oxygen consumption (CMRO2) by extracting more oxygen as blood transit slows.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-2",
    "chapterId": 6,
    "chapterTitle": "Chapter 6: Stroke Pathophysiology",
    "vignette": "During a carotid endarterectomy procedure under electroencephalographic (EEG) monitoring, the internal carotid artery is cross-clamped, causing a sudden reduction in regional cerebral blood flow.",
    "question": "Match the regional cerebral blood flow (rCBF) threshold with its corresponding cellular event during progressive ischemia:",
    "options": [
      {
        "id": "A",
        "text": "50-55 mL/100g/min: Normal homeostasis; 35-25: Decreased protein synthesis and increased glycolysis; 18-25: Electrical failure and EEG slowing; <10-12: Ionic membrane gradient failure and infarction"
      },
      {
        "id": "B",
        "text": "50-55 mL/100g/min: Electrical failure; 35-25: Normal homeostasis; 18-25: Ionic membrane failure; <10-12: Lactic acidosis"
      },
      {
        "id": "C",
        "text": "50-55 mL/100g/min: Normal; 35-25: Normal; 18-25: Normal; <10-12: Electrical failure only"
      },
      {
        "id": "D",
        "text": "50-55 mL/100g/min: Normal; 35-25: Immediate membrane depolarization; 18-25: Increased protein synthesis; <10-12: Apoptosis only"
      },
      {
        "id": "E",
        "text": "50-55 mL/100g/min: Increased glycolysis; 35-25: Normal homeostasis; 18-25: Electrical failure; <10-12: Cytotoxic edema resolution"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Normal cerebral blood flow is 50-55 mL/100 g/min. With a mild decline to 35-25 mL/100 g/min, protein synthesis decreases and anaerobic glycolysis increases. When CBF drops to 18-25 mL/100 g/min (the threshold of electrical failure), synaptic potentials decline and the EEG slows or flattens. Below 10-12 mL/100 g/min (the membrane failure threshold), transmembrane ionic gradients collapse, leading to massive intracellular calcium/sodium influx, cytotoxic edema, and irreversible infarction.",
    "keyTakeaway": "CBF thresholds: 50-55 normal; 35-25 protein synthesis fails; 18-25 electrical failure/EEG slowing; <10-12 membrane pump failure & infarction.",
    "tags": [
      "CBF Thresholds",
      "Pathophysiology",
      "Electrical Failure"
    ],
    "hint": "The penumbra lies between the threshold of electrical failure (~20 mL/100g/min) and membrane failure (~10 mL/100g/min).",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-3",
    "chapterId": 6,
    "chapterTitle": "Chapter 6: Stroke Pathophysiology",
    "vignette": "A basic science researcher is evaluating excitotoxic neuronal injury in a rodent middle cerebral artery occlusion model.",
    "question": "Which of the following statements best describes the role of glutamate in cerebral ischemia?",
    "options": [
      {
        "id": "A",
        "text": "Antagonism of glutamate receptors has translated into robust, highly effective neuroprotection in human clinical trials"
      },
      {
        "id": "B",
        "text": "Glutamate is an excitatory amino acid released when rCBF falls to <20 mL/100g/min, causing neuronal damage via ligand-gated Ca2+ channels"
      },
      {
        "id": "C",
        "text": "Glutamate release occurs only after complete cessation of blood flow to 0 mL/100g/min"
      },
      {
        "id": "D",
        "text": "Glutamate is synthesized and released exclusively by microglial cells during acute ischemia"
      },
      {
        "id": "E",
        "text": "Glutamate produces neuronal damage by opening neuronal K+ efflux channels only"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Glutamate is an excitatory neurotransmitter that is cleared rapidly by astrocytes under normal conditions. When regional CBF falls below ~20 mL/100 g/min, ATP depletion leads to cellular depolarization and failure of astrocytic glutamate reuptake. Massive extracellular glutamate activates postsynaptic NMDA and AMPA receptors, triggering catastrophic intracellular calcium influx that activates destructive proteases, lipases, and endonucleases. Unfortunately, competitive NMDA antagonists failed in human trials due to toxicity and lack of clinical efficacy.",
    "keyTakeaway": "Excitotoxic glutamate release occurs at rCBF <20 mL/100g/min, causing pathological Ca2+ influx via NMDA receptors.",
    "tags": [
      "Excitotoxicity",
      "Glutamate",
      "NMDA",
      "Calcium"
    ],
    "hint": "Think about the excitatory neurotransmitter that binds NMDA receptors and allows lethal calcium entry.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-4",
    "chapterId": 6,
    "chapterTitle": "Chapter 6: Stroke Pathophysiology",
    "vignette": "A stroke fellow is reviewing the biophysical principles of cerebral edema in a patient who presented 90 minutes after stroke onset compared to a patient presenting on day 3.",
    "question": "Which statement correctly distinguishes cytotoxic edema from vasogenic edema in cerebral ischemia?",
    "options": [
      {
        "id": "A",
        "text": "Cytotoxic edema is caused by blood-brain barrier breakdown and responds dramatically to high-dose intravenous dexamethasone"
      },
      {
        "id": "B",
        "text": "Vasogenic edema peaks at 1 hour after stroke onset and completely resolves by 24 hours"
      },
      {
        "id": "C",
        "text": "Vasogenic edema is restricted to the intracellular compartment of gray matter neurons"
      },
      {
        "id": "D",
        "text": "Cytotoxic edema begins minutes after ischemia due to Na+/K+-ATPase failure with an intact blood-brain barrier; vasogenic edema begins hours to days later due to blood-brain barrier disruption"
      },
      {
        "id": "E",
        "text": "Cytotoxic edema is readily visible on non-contrast CT within 15 minutes of symptom onset"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Cytotoxic edema develops immediately (within minutes) upon ATP depletion when Na+/K+-ATPase pumps fail, causing intracellular accumulation of sodium and water (primarily in astrocytes and gray matter) while the blood-brain barrier remains intact. This is detected by DWI. Vasogenic edema occurs 24 to 72 hours later due to endothelial dysfunction and breakdown of tight junctions (mediated by matrix metalloproteinases), allowing plasma proteins and fluid to escape into the extracellular white matter space.",
    "keyTakeaway": "Cytotoxic edema = Minutes, ATP pump failure, intact BBB, intracellular (DWI bright). Vasogenic edema = 24-72h, BBB breakdown, extracellular fluid (white matter swelling).",
    "tags": [
      "Cerebral Edema",
      "Cytotoxic",
      "Vasogenic",
      "BBB"
    ],
    "hint": "Consider which edema form involves an intact BBB vs a leaky, disrupted capillary barrier.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-5",
    "chapterId": 6,
    "chapterTitle": "Chapter 6: Stroke Pathophysiology",
    "vignette": "A 70-year-old male undergoes successful mechanical thrombectomy with TICI 3 recanalization of an occluded M1 segment 8 hours after onset. However, post-procedure perfusion imaging shows persistent capillary hypoperfusion in the ischemic core.",
    "question": "Which pathophysiologic entity explains the failure of microvascular capillary reperfusion despite complete recanalization of the main upstream arterial trunk?",
    "options": [
      {
        "id": "A",
        "text": "Crossed cerebellar diaschisis"
      },
      {
        "id": "B",
        "text": "Wallerian degeneration"
      },
      {
        "id": "C",
        "text": "No-reflow phenomenon"
      },
      {
        "id": "D",
        "text": "Cerebral hyperemic steal"
      },
      {
        "id": "E",
        "text": "Hyperperfusion syndrome"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The 'no-reflow phenomenon' refers to the inability to re-establish microvascular capillary blood flow despite reopening the occluded epicardial or intracranial cerebral artery. It results from ischemic changes in the downstream microvasculature, including endothelial cell swelling, intraluminal endothelial blebs, pericyte constriction, and microthrombi with leukocytes trapped in capillaries.",
    "keyTakeaway": "No-reflow phenomenon = Capillary non-perfusion despite successful epicardial/intracranial arterial recanalization.",
    "tags": [
      "No-Reflow",
      "Reperfusion",
      "Microvasculature"
    ],
    "hint": "Occurs when downstream capillary beds remain obstructed even after the primary large vessel is opened.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-6",
    "chapterId": 3,
    "chapterTitle": "Chapter 3: Vascular Neuroanatomy",
    "vignette": "A 54-year-old male presents with acute vertigo, nausea, gait ataxia, and sudden unilateral sensorineural hearing loss in the right ear.",
    "question": "The internal auditory (labyrinthine) artery responsible for cochleovestibular perfusion most frequently arises from which parent vessel?",
    "options": [
      {
        "id": "A",
        "text": "Anterior Inferior Cerebellar Artery (AICA)"
      },
      {
        "id": "B",
        "text": "Basilar artery"
      },
      {
        "id": "C",
        "text": "Posterior Inferior Cerebellar Artery (PICA)"
      },
      {
        "id": "D",
        "text": "Superior Cerebellar Artery (SCA)"
      },
      {
        "id": "E",
        "text": "Vertebral artery"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The internal auditory (labyrinthine) artery is the exclusive arterial blood supply to the inner ear (cochlea and labyrinth). In approximately 85% of individuals, it arises as a branch of the Anterior Inferior Cerebellar Artery (AICA). In 15% it can arise directly from the basilar artery, and rarely from the vertebral artery (5%). This anatomical relationship explains why AICA territory strokes classically feature sudden unilateral hearing loss accompanied by facial palsy and ataxia.",
    "keyTakeaway": "Internal auditory (labyrinthine) artery originates from AICA in 85% of cases; occlusion causes sudden deafness + vertigo.",
    "tags": [
      "AICA",
      "Labyrinthine Artery",
      "Hearing Loss",
      "Neuroanatomy"
    ],
    "hint": "Which cerebellar artery supplies the anterolateral pons, middle cerebellar peduncle, and inner ear?",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-7",
    "chapterId": 3,
    "chapterTitle": "Chapter 3: Vascular Neuroanatomy",
    "vignette": "A 66-year-old male presents with sudden left hemiparesis and left homonymous hemianopia. On exam, sensation is completely preserved, and higher cortical language/visuospatial function is intact. MRI demonstrates an acute infarct in the posterior limb of the internal capsule and lateral geniculate body.",
    "question": "Which vessel is occluded, and what is its normal vessel of origin?",
    "options": [
      {
        "id": "A",
        "text": "Lateral lenticulostriate artery, arising from the M1 MCA"
      },
      {
        "id": "B",
        "text": "Posterior Communicating Artery, arising from the cavernous ICA"
      },
      {
        "id": "C",
        "text": "Anterior Choroidal Artery (AChA), arising from the supraclinoid Internal Carotid Artery"
      },
      {
        "id": "D",
        "text": "Recurrent Artery of Heubner, arising from the A2 segment of the ACA"
      },
      {
        "id": "E",
        "text": "Thalamoperforating artery, arising from the basilar tip"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The Anterior Choroidal Artery (AChA) classically arises from the posterior aspect of the supraclinoid internal carotid artery (C4/C5 segment), distal to the origin of the PCOM. Its perforating branches supply the posterior two-thirds of the posterior limb of the internal capsule, medial globus pallidus, tail of the caudate, and lateral geniculate body. AChA infarction classically causes contralateral hemiparesis (posterior limb of internal capsule) and contralateral homonymous hemianopia or sectoranopia (lateral geniculate body) without cortical deficits.",
    "keyTakeaway": "Anterior Choroidal Artery (from supraclinoid ICA) stroke = Contralateral hemiparesis + homonymous visual field defect + preserved cognition/language.",
    "tags": [
      "Anterior Choroidal Artery",
      "Supraclinoid ICA",
      "Neuroanatomy"
    ],
    "hint": "Originates from the supraclinoid ICA distal to the PCOM and perfuses the posterior limb of the internal capsule and LGB.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-8",
    "chapterId": 3,
    "chapterTitle": "Chapter 3: Vascular Neuroanatomy",
    "vignette": "A neurosurgeon is dissecting the interpeduncular cistern during clipping of a basilar apex aneurysm.",
    "question": "Which cranial nerve exits the ventral brainstem specifically in the interval between the posterior cerebral artery (PCA) and superior cerebellar artery (SCA)?",
    "options": [
      {
        "id": "A",
        "text": "Cranial Nerve IV (Trochlear nerve)"
      },
      {
        "id": "B",
        "text": "Cranial Nerve VII (Facial nerve)"
      },
      {
        "id": "C",
        "text": "Cranial Nerve III (Oculomotor nerve)"
      },
      {
        "id": "D",
        "text": "Cranial Nerve V (Trigeminal nerve)"
      },
      {
        "id": "E",
        "text": "Cranial Nerve VI (Abducens nerve)"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The Oculomotor Nerve (CN III) emerges from the interpeduncular fossa on the ventral midbrain and courses anteriorly directly between the Posterior Cerebral Artery (PCA) superiorly and the Superior Cerebellar Artery (SCA) inferiorly. Aneurysms at the PCOM-ICA junction or basilar apex frequently compress the oculomotor nerve at this anatomical crossroad, producing a pupil-involved third nerve palsy.",
    "keyTakeaway": "CN III exits the brainstem between the PCA (above) and SCA (below).",
    "tags": [
      "CN III",
      "PCA",
      "SCA",
      "Aneurysm",
      "Neuroanatomy"
    ],
    "hint": "This nerve is intimately associated with the posterior communicating and basilar apex arteries.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-9",
    "chapterId": 3,
    "chapterTitle": "Chapter 3: Vascular Neuroanatomy",
    "vignette": "A 58-year-old male with severe left internal carotid artery stenosis suffers an acute left MCA stroke and an unexpected left occipital lobe infarct.",
    "question": "Which Circle of Willis anatomical variant explains how internal carotid artery disease caused an infarction in the posterior cerebral artery territory?",
    "options": [
      {
        "id": "A",
        "text": "Azygous anterior cerebral artery"
      },
      {
        "id": "B",
        "text": "Duplication of the middle cerebral artery"
      },
      {
        "id": "C",
        "text": "Infraoptic origin of the anterior cerebral artery"
      },
      {
        "id": "D",
        "text": "Persistent trigeminal artery"
      },
      {
        "id": "E",
        "text": "Complete fetal origin of the posterior cerebral artery"
      }
    ],
    "correctOptionId": "E",
    "explanation": "A fetal origin of the PCA occurs when the embryonic origin of the PCA from the ICA fails to regress. In complete fetal PCA (present in ~10% of individuals), the P1 segment of the PCA is absent or atretic, and the entire PCA territory (occipital and inferior temporal lobes) is supplied directly by the ipsilateral internal carotid artery via an enlarged PCOM. In this anatomical setting, carotid disease or emboli can directly produce 'posterior circulation' occipital infarcts.",
    "keyTakeaway": "Fetal PCA (10% complete, 15% partial) = PCA territory perfused directly by ICA; carotid emboli can cause occipital infarcts.",
    "tags": [
      "Fetal PCA",
      "Circle of Willis",
      "Neuroanatomy"
    ],
    "hint": "The P1 segment is atretic, making the occipital lobe entirely dependent on the internal carotid artery.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-10",
    "chapterId": 3,
    "chapterTitle": "Chapter 3: Vascular Neuroanatomy",
    "vignette": "An anatomist is detailing the cranial nerve relationships of the cavernous sinus.",
    "question": "Which of the following cranial nerve structures is NOT located within the cavernous sinus or its lateral dural wall?",
    "options": [
      {
        "id": "A",
        "text": "Cranial Nerve III"
      },
      {
        "id": "B",
        "text": "Cranial Nerve IV"
      },
      {
        "id": "C",
        "text": "Cranial Nerve V1 (Ophthalmic division)"
      },
      {
        "id": "D",
        "text": "Cranial Nerve V2 (Maxillary division)"
      },
      {
        "id": "E",
        "text": "Cranial Nerve V3 (Mandibular division)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "The cavernous sinus contains the internal carotid artery and Cranial Nerve VI (Abducens) within the venous sinus lumen itself. In its lateral dural wall, it carries CN III (Oculomotor), CN IV (Trochlear), CN V1 (Ophthalmic branch), and CN V2 (Maxillary branch). CN V3 (Mandibular branch of the trigeminal nerve) exits the skull through the foramen ovale without ever traversing the cavernous sinus.",
    "keyTakeaway": "Cavernous sinus contains CN VI & ICA inside; CN III, IV, V1, V2 in lateral wall. CN V3 does NOT enter the cavernous sinus.",
    "tags": [
      "Cavernous Sinus",
      "Cranial Nerves",
      "Neuroanatomy"
    ],
    "hint": "Only the third division of the trigeminal nerve bypasses the cavernous sinus completely to exit the foramen ovale.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-11",
    "chapterId": 3,
    "chapterTitle": "Chapter 3: Vascular Neuroanatomy",
    "vignette": "A patient undergoing thoracic aortic stent-graft repair develops acute flaccid paraplegia and loss of pain/temperature below T10.",
    "question": "Which statement regarding the Artery of Adamkiewicz (arteria radicularis magna) is correct?",
    "options": [
      {
        "id": "A",
        "text": "It provides exclusive vascular supply to the cervical spinal cord"
      },
      {
        "id": "B",
        "text": "It typically arises from the right side of the aorta between T2 and T5"
      },
      {
        "id": "C",
        "text": "It is a branch of the superior cerebellar artery"
      },
      {
        "id": "D",
        "text": "It most commonly arises from the aorta on the left side (73%) between T9 and T12, exhibiting a characteristic hairpin turn on angiography"
      },
      {
        "id": "E",
        "text": "It supplies the posterior one-third of the spinal cord and dorsal columns"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The Artery of Adamkiewicz (dominant anterior thoracolumbar radicular artery) arises directly from the aorta, most commonly on the left side (73% of individuals) between T9 and T12 (62%). On digital subtraction spinal angiography, it enters the anterior spinal canal and makes a characteristic sharp hairpin turn before joining the anterior spinal artery to supply the lower two-thirds of the spinal cord (T8 to conus medullaris).",
    "keyTakeaway": "Artery of Adamkiewicz: Left-sided (73%), T9-T12, hairpin turn on angiography; supplies anterior lower thoracic cord and conus.",
    "tags": [
      "Adamkiewicz",
      "Spinal Cord",
      "Neuroanatomy"
    ],
    "hint": "Most common origin is lower thoracic, left side, forming an unmistakable hairpin turn.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-12",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 58-year-old male presents with acute dizziness, vomiting, dysphagia, hoarseness, right facial numbness, and left arm/leg loss of pain and temperature sensation. Exam reveals right ptosis and miosis, right limb ataxia, and absent gag reflex on the right.",
    "question": "Which structure involvement accounts for this patient's hoarseness and severe dysphagia in lateral medullary (Wallenberg) syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Hypoglossal nucleus"
      },
      {
        "id": "B",
        "text": "Inferior olivary nucleus"
      },
      {
        "id": "C",
        "text": "Medial longitudinal fasciculus"
      },
      {
        "id": "D",
        "text": "Spinal trigeminal nucleus"
      },
      {
        "id": "E",
        "text": "Nucleus ambiguus"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Wallenberg (lateral medullary) syndrome involves the dorsolateral medulla, most commonly due to vertebral artery occlusion (67%) or PICA occlusion (33%). Involvement of the nucleus ambiguus (which provides motor fibers to CN IX and X) produces severe dysphagia, hoarseness, and vocal cord paralysis, carrying a high risk of aspiration pneumonia. Facial numbness is due to the spinal trigeminal tract/nucleus; contralateral body pain/temp loss is due to the spinothalamic tract; Horner syndrome is from descending sympathetics.",
    "keyTakeaway": "Nucleus ambiguus damage in Wallenberg syndrome causes severe dysphagia and hoarseness (CN IX/X motor).",
    "tags": [
      "Wallenberg",
      "Nucleus Ambiguus",
      "Brainstem Syndromes"
    ],
    "hint": "The motor nucleus supplying the pharyngeal and laryngeal muscles via glossopharyngeal and vagus nerves.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-13",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 69-year-old male with severe right carotid artery stenosis experiences stereotypic episodes of involuntary rhythmic shaking of his left arm and leg whenever he stands up or walks uphill. EEG during an episode shows no epileptiform activity.",
    "question": "What is the diagnosis, and what is the underlying pathophysiologic mechanism?",
    "options": [
      {
        "id": "A",
        "text": "Focal motor seizures due to cortical ischemia"
      },
      {
        "id": "B",
        "text": "Limb-shaking transient ischemic attack (TIA) due to critical hemodynamic hypoperfusion"
      },
      {
        "id": "C",
        "text": "Chorea-hyperglycemia syndrome"
      },
      {
        "id": "D",
        "text": "Hemiballismus from subthalamic nucleus stroke"
      },
      {
        "id": "E",
        "text": "Functional psychogenic movement disorder"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Limb-shaking TIAs are brief, involuntary, rhythmic or coarse tremulous shaking movements of an extremity caused by hemodynamic hypoperfusion in the territory of a critically stenosed or occluded carotid artery (or Moyamoya disease). They are typically precipitated by maneuvers that lower cerebral perfusion (standing upright, exercise, walking, hyperventilation, or eating a heavy meal). EEG is normal (non-epileptic), and antiplatelet drugs alone do not prevent them; treatment requires hemodynamic blood pressure support and revascularization (CEA or stenting).",
    "keyTakeaway": "Limb-shaking TIA = Orthostatic/exertional shaking without EEG discharges, pathognomonic for severe carotid stenosis/hypoperfusion.",
    "tags": [
      "Limb-Shaking TIA",
      "Hypoperfusion",
      "Carotid Stenosis"
    ],
    "hint": "These are hemodynamic, non-epileptic events triggered by hypoperfusion.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-14",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 64-year-old male status post right occipitotemporal ischemic stroke is unable to recognize the faces of his wife and children when they enter the room, but recognizes them immediately as soon as they speak.",
    "question": "What higher cortical deficit is present, and where is the responsible anatomical lesion located?",
    "options": [
      {
        "id": "A",
        "text": "Simultanagnosia; bilateral parieto-occipital watershed cortex"
      },
      {
        "id": "B",
        "text": "Autotopagnosia; left angular gyrus"
      },
      {
        "id": "C",
        "text": "Prosopagnosia; right fusiform (occipitotemporal) gyrus"
      },
      {
        "id": "D",
        "text": "Visual anosognosia (Anton syndrome); bilateral calcarine fissures"
      },
      {
        "id": "E",
        "text": "Astereognosis; contralateral primary sensory cortex"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Prosopagnosia is the inability to recognize familiar faces with intact voice recognition and visual acuity. When caused by stroke, it typically localizes to the right fusiform gyrus (inferior occipitotemporal cortex) or bilateral fusiform gyri, and is commonly accompanied by a left superior homonymous visual field deficit.",
    "keyTakeaway": "Prosopagnosia (facial agnosia) localizes to the right fusiform (occipitotemporal) gyrus.",
    "tags": [
      "Prosopagnosia",
      "Fusiform Gyrus",
      "Higher Cortical Function"
    ],
    "hint": "Specialized facial recognition area on the ventral inferior surface of the temporal lobe.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-15",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 71-year-old woman with a history of bilateral subcortical strokes exhibits involuntary, uncontrollable episodes of crying or laughing that are incongruent with her actual emotional state. She has severe spastic dysarthria.",
    "question": "What syndrome is present, and what medication combination is FDA-approved for its treatment?",
    "options": [
      {
        "id": "A",
        "text": "Catastrophic reaction; treated with haloperidol"
      },
      {
        "id": "B",
        "text": "Frontotemporal lobar degeneration; treated with memantine"
      },
      {
        "id": "C",
        "text": "Pseudobulbar affect (PBA); treated with dextromethorphan and low-dose quinidine (Nuedexta)"
      },
      {
        "id": "D",
        "text": "Gelastic epilepsy; treated with carbamazepine"
      },
      {
        "id": "E",
        "text": "Poststroke major depression; treated with high-dose fluoxetine"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Pseudobulbar affect (PBA, emotional incontinence, or involuntary emotional expression disorder) occurs in up to 50% of stroke and ALS patients due to disruption of descending corticobulbar and fronto-ponto-cerebellar circuits. It causes episodes of laughing or crying that are unprovoked or exaggerated. The combination of dextromethorphan (NMDA receptor antagonist and sigma-1 agonist) and low-dose quinidine (inhibitor of CYP2D6 to prevent dextromethorphan metabolism) is FDA-approved and reduces episodes by 50%. SSRIs and tricyclics are also effective.",
    "keyTakeaway": "Pseudobulbar affect = Disinhibition of emotional expression; treated with dextromethorphan/quinidine (Nuedexta) or SSRIs.",
    "tags": [
      "Pseudobulbar Affect",
      "PBA",
      "Nuedexta",
      "Brainstem"
    ],
    "hint": "Involves an over-the-counter antitussive paired with an antiarrhythmic CYP2D6 inhibitor.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-16",
    "chapterId": 7,
    "chapterTitle": "Chapter 7: Classification of Stroke & Vasculopathy",
    "vignette": "A 36-year-old woman with no vascular risk factors presents with a transient right-sided hemiparesis. Cerebral angiography demonstrates multifocal areas of alternating luminal narrowing and ectatic widening ('string of beads') involving the middle third of the internal carotid arteries bilaterally.",
    "question": "Which pathologic type of fibromuscular dysplasia (FMD) does this angiographic finding represent, and what wall layer is abnormal?",
    "options": [
      {
        "id": "A",
        "text": "Adventitial fibroplasia; tunica adventitia"
      },
      {
        "id": "B",
        "text": "Endothelial hyperplasia; vascular endothelium"
      },
      {
        "id": "C",
        "text": "Perimedial elastosis; internal elastic lamina"
      },
      {
        "id": "D",
        "text": "Medial fibroplasia; tunica media"
      },
      {
        "id": "E",
        "text": "Intimal fibroplasia; tunica intima"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Medial fibroplasia is the most common form of fibromuscular dysplasia (FMD), accounting for 75% to 80% of all cases. It produces the classic 'string of beads' pattern on angiography, characterized by alternating zones of fibrous ridge thickening in the tunica media and aneurysmal mural thinning. It most commonly affects the middle third (C1-C2 level) of the internal carotid artery, is bilateral in over 60% of cases, and carries an association with intracranial saccular aneurysms.",
    "keyTakeaway": "Medial fibroplasia = 75-80% of FMD, 'string of beads' in mid-cervical ICA, tunica media involvement.",
    "tags": [
      "FMD",
      "Medial Fibroplasia",
      "String of Beads",
      "Vasculopathy"
    ],
    "hint": "The most common form affects the muscular middle layer of the arterial wall.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-17",
    "chapterId": 7,
    "chapterTitle": "Chapter 7: Classification of Stroke & Vasculopathy",
    "vignette": "A 29-year-old female presents on postpartum day 10 with excruciating, explosive 'thunderclap' headaches that recur daily. Non-contrast CT and CSF analysis are completely normal. MRA demonstrates diffuse segmental 'sausage-string' vasoconstriction of the Circle of Willis arteries.",
    "question": "What is the diagnosis, and what is the appropriate management strategy?",
    "options": [
      {
        "id": "A",
        "text": "Aneurysmal subarachnoid hemorrhage; perform urgent surgical craniotomy"
      },
      {
        "id": "B",
        "text": "Reversible Cerebral Vasoconstriction Syndrome (RCVS); discontinue vasoactive agents, observe or treat with oral nimodipine/verapamil, avoid corticosteroids"
      },
      {
        "id": "C",
        "text": "Cerebral venous thrombosis; initiate full-dose heparin anticoagulation"
      },
      {
        "id": "D",
        "text": "Bacterial meningitis; initiate broad-spectrum IV vancomycin and ceftriaxone"
      },
      {
        "id": "E",
        "text": "Primary angiitis of the CNS (PACNS); start high-dose cyclophosphamide and IV methylprednisolone"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Reversible Cerebral Vasoconstriction Syndrome (RCVS, Call-Fleming syndrome) is characterized by severe recurrent thunderclap headaches and reversible multifocal arterial vasoconstriction. It is frequently triggered by pregnancy/postpartum state, vasoactive medications (triptans, SSRIs, nasal decongestants), and illicit drugs (cannabis, cocaine). Unlike CNS vasculitis, CSF is typically normal or near-normal, and the course is self-limited over 1-3 months. Management consists of removing triggers and administering calcium channel blockers (verapamil or nimodipine). Corticosteroids worsen outcomes in RCVS and should be avoided.",
    "keyTakeaway": "RCVS: Recurrent thunderclap headaches, normal CSF, reversible beading on MRA, treated with CCBs (avoid steroids!).",
    "tags": [
      "RCVS",
      "Thunderclap Headache",
      "Vasoconstriction",
      "Vasculopathy"
    ],
    "hint": "A benign, reversible vasospastic disorder where steroids are contraindicated.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-18",
    "chapterId": 7,
    "chapterTitle": "Chapter 7: Classification of Stroke & Vasculopathy",
    "vignette": "A 52-year-old male presents with subacute progressive headache, memory loss, and multifocal ischemic strokes across multiple vascular territories. CSF reveals lymphocytic pleocytosis and elevated protein. Four-vessel cerebral angiography shows nonspecific irregular beading.",
    "question": "Which diagnostic test has the highest specificity for confirming Primary Angiitis of the Central Nervous System (PACNS)?",
    "options": [
      {
        "id": "A",
        "text": "Serum C-reactive protein and ESR"
      },
      {
        "id": "B",
        "text": "Serum antineutrophil cytoplasmic antibodies (ANCA)"
      },
      {
        "id": "C",
        "text": "Transesophageal echocardiogram"
      },
      {
        "id": "D",
        "text": "Targeted brain and leptomeningeal biopsy"
      },
      {
        "id": "E",
        "text": "CT angiography of the head and neck"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Primary Angiitis of the Central Nervous System (PACNS) is a rare, non-infectious, granulomatous vasculitis confined to small and medium vessels of the parenchyma and leptomeninges. Because catheter angiography has limited sensitivity and specificity (only ~50% sensitive due to involvement of vessels below angiographic resolution), targeted surgical biopsy of the leptomeninges and cortex is the gold standard for definitive diagnosis. CSF is abnormal in 80-90% (elevated protein and pleocytosis).",
    "keyTakeaway": "PACNS gold standard diagnosis is leptomeningeal/cortical brain biopsy; CSF is abnormal in 80-90%; angiography is nonspecific.",
    "tags": [
      "PACNS",
      "CNS Vasculitis",
      "Brain Biopsy"
    ],
    "hint": "Tissue confirmation of small-vessel granulomatous inflammation is required.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-19",
    "chapterId": 10,
    "chapterTitle": "Chapter 10: Genetic Stroke Syndromes",
    "vignette": "A 38-year-old male with a family history of early dementia and strokes presents with severe migraine with aura and mild executive dysfunction. Brain MRI shows confluent T2/FLAIR hyperintensity in the bilateral anterior temporal lobes (O'Sullivan sign) and external capsules.",
    "question": "What is the genetic mode of inheritance, gene mutation, and chromosome locus in this disorder?",
    "options": [
      {
        "id": "A",
        "text": "Autosomal recessive, HTRA1 mutation on chromosome 10q26"
      },
      {
        "id": "B",
        "text": "Autosomal dominant, TREX1 mutation on chromosome 3p21"
      },
      {
        "id": "C",
        "text": "Maternal inheritance, MTTL1 mutation in mitochondrial DNA"
      },
      {
        "id": "D",
        "text": "Autosomal dominant, NOTCH3 mutation on chromosome 19p13"
      },
      {
        "id": "E",
        "text": "X-linked recessive, GLA mutation on chromosome Xq22"
      }
    ],
    "correctOptionId": "D",
    "explanation": "CADASIL (Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy) is the most common monogenic cause of ischemic stroke. It is caused by missense mutations in the NOTCH3 gene on chromosome 19p13.2, affecting vascular smooth muscle cells. Characteristic MRI hallmarks include prominent T2/FLAIR white matter hyperintensities in the anterior temporal poles (O'Sullivan sign, 90% sensitivity) and external capsules, sparing the subcortical U-fibers.",
    "keyTakeaway": "CADASIL = Autosomal dominant, NOTCH3 (chr 19p13), anterior temporal pole + external capsule FLAIR hyperintensities.",
    "tags": [
      "CADASIL",
      "NOTCH3",
      "Genetics",
      "OSullivan Sign"
    ],
    "hint": "Chromosome 19, Notch receptor signaling in vascular smooth muscle.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-20",
    "chapterId": 10,
    "chapterTitle": "Chapter 10: Genetic Stroke Syndromes",
    "vignette": "A 26-year-old male presents with premature alopecia, severe low back pain from lumbar spondylosis, and an acute lacunar infarction in the internal capsule. Genetic testing confirms CARASIL.",
    "question": "Which gene mutation is responsible for CARASIL, and how does its pathology differ from CADASIL?",
    "options": [
      {
        "id": "A",
        "text": "COL4A1 gene on chromosome 13; features capillary telangiectasias"
      },
      {
        "id": "B",
        "text": "GLA gene on chromosome X; features lipid accumulation in neural crest cells"
      },
      {
        "id": "C",
        "text": "HTRA1 gene on chromosome 10q; lacks the granular osmophilic material (GOM) characteristic of CADASIL"
      },
      {
        "id": "D",
        "text": "NOTCH3 gene on chromosome 19; features extensive amyloid deposition"
      },
      {
        "id": "E",
        "text": "TREX1 gene on chromosome 3; features pseudotumoral brain masses"
      }
    ],
    "correctOptionId": "C",
    "explanation": "CARASIL (Cerebral Autosomal Recessive Arteriopathy with Subcortical Infarcts and Leukoencephalopathy) is caused by homozygous or compound heterozygous mutations in the HTRA1 gene on chromosome 10q, which encodes a serine protease regulating TGF-beta signaling. Unlike CADASIL, CARASIL is autosomal recessive, lacks the pathognomonic GOM deposits on electron microscopy, and uniquely presents with the triad of premature alopecia (teen years), severe spine spondylosis/back pain, and lacunar strokes in the 20s-30s.",
    "keyTakeaway": "CARASIL = Autosomal recessive HTRA1 mutation (chr 10q); alopecia + back pain + young lacunar strokes; NO GOM deposits.",
    "tags": [
      "CARASIL",
      "HTRA1",
      "Genetics",
      "Alopecia"
    ],
    "hint": "Recessive disorder associated with high-temperature requirement serine peptidase A1.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-21",
    "chapterId": 10,
    "chapterTitle": "Chapter 10: Genetic Stroke Syndromes",
    "vignette": "A 32-year-old male presents with multiple small posterior circulation infarcts. History reveals chronic burning pain in his hands and feet (acroparesthesias), hypohidrosis, angiokeratomas on his trunk, and proteinuria.",
    "question": "What is the diagnosis, and which diagnostic laboratory test is most sensitive in male patients?",
    "options": [
      {
        "id": "A",
        "text": "HHT; genetic sequencing of endoglin"
      },
      {
        "id": "B",
        "text": "CADASIL; skin biopsy for NOTCH3 extracellular domain"
      },
      {
        "id": "C",
        "text": "Fabry disease; measurement of leukocyte alpha-galactosidase A (GLA) activity"
      },
      {
        "id": "D",
        "text": "Homocystinuria; plasma methionine levels"
      },
      {
        "id": "E",
        "text": "MELAS; skeletal muscle biopsy for ragged red fibers"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Fabry disease is an X-linked recessive lysosomal storage disorder caused by deficient activity of alpha-galactosidase A (GLA). This leads to systemic accumulation of globotriaosylceramide (Gb3) in vascular endothelium, smooth muscle, and renal/cardiac tissues. Clinical hallmarks include burning acroparesthesias, angiokeratomas, hypohidrosis, renal failure, hypertrophic cardiomyopathy, and early vertebrobasilar strokes. Measurement of leukocyte GLA activity has 100% sensitivity in males (female carriers often require genetic sequencing).",
    "keyTakeaway": "Fabry disease: X-linked alpha-galactosidase A deficiency; acroparesthesias, angiokeratomas, renal failure, posterior circulation strokes.",
    "tags": [
      "Fabry Disease",
      "GLA",
      "X-linked",
      "Genetics"
    ],
    "hint": "Lysosomal storage disease causing Gb3 accumulation and burning extremity pain.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-22",
    "chapterId": 10,
    "chapterTitle": "Chapter 10: Genetic Stroke Syndromes",
    "vignette": "A 24-year-old female presents with acute right internal carotid artery dissection following yoga. Examination reveals thin, translucent skin with visible subcutaneous veins and hypermobile finger joints.",
    "question": "Which condition and genetic defect carries the highest predisposition for spontaneous arterial dissection and catastrophic arterial rupture?",
    "options": [
      {
        "id": "A",
        "text": "Marfan syndrome (FBN1 mutation)"
      },
      {
        "id": "B",
        "text": "Neurofibromatosis type 1 (NF1 mutation)"
      },
      {
        "id": "C",
        "text": "Classical Ehlers-Danlos syndrome (COL5A1 mutation)"
      },
      {
        "id": "D",
        "text": "Ehlers-Danlos syndrome type IV / vascular type (COL3A1 mutation)"
      },
      {
        "id": "E",
        "text": "Osteogenesis imperfecta (COL1A1 mutation)"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Ehlers-Danlos syndrome Type IV (vascular type) is an autosomal dominant disorder caused by mutations in the COL3A1 gene on chromosome 2q31, which encodes type III procollagen. It is characterized by thin, translucent skin with visible veins, easy bruising, and a severe fragility of medium-to-large muscular arteries. Patients have an extremely high risk of spontaneous arterial dissection, carotid-cavernous fistulae, aneurysm rupture, and rupture of bowel or gravid uterus (80% suffer a vascular catastrophe by age 40).",
    "keyTakeaway": "Ehlers-Danlos Type IV (vascular) = COL3A1 mutation; translucent skin + visible veins + high risk of spontaneous dissection & arterial rupture.",
    "tags": [
      "Ehlers-Danlos",
      "COL3A1",
      "Dissection",
      "Genetics"
    ],
    "hint": "Type III collagen defect causing extreme vascular fragility.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-23",
    "chapterId": 19,
    "chapterTitle": "Chapter 19: Pharmacology",
    "vignette": "A 75-year-old male with a mechanical mitral valve replacement is being treated with warfarin. He asks why he cannot be switched to a direct oral anticoagulant (DOAC) such as dabigatran or apixaban.",
    "question": "What clinical trial evidence dictates the choice of anticoagulation in patients with mechanical prosthetic heart valves?",
    "options": [
      {
        "id": "A",
        "text": "The ROCKET-AF trial demonstrated that rivaroxaban is safe only in mechanical aortic, but not mitral, valves"
      },
      {
        "id": "B",
        "text": "The ARISTOTLE trial showed that apixaban was superior to warfarin in mechanical valves"
      },
      {
        "id": "C",
        "text": "DOACs are approved in mechanical valves if combined with dual antiplatelet therapy"
      },
      {
        "id": "D",
        "text": "Warfarin and DOACs have equivalent safety in mechanical heart valves according to the RELY trial"
      },
      {
        "id": "E",
        "text": "The RE-ALIGN trial showed that dabigatran was associated with excess thromboembolic strokes and major bleeding compared to warfarin; DOACs are contraindicated in mechanical valves"
      }
    ],
    "correctOptionId": "E",
    "explanation": "The RE-ALIGN trial evaluated dabigatran versus warfarin in patients with mechanical heart valves and was stopped prematurely because patients in the dabigatran arm suffered significantly higher rates of thromboembolic stroke, valve thrombosis, and major pericardial/intracranial bleeding. Direct oral anticoagulants (DOACs) are strictly contraindicated in patients with mechanical heart valves. Vitamin K antagonists (warfarin) with an INR goal of 2.5 (aortic) or 3.0 (mitral) plus low-dose aspirin remain mandatory.",
    "keyTakeaway": "DOACs are CONTRAINDICATED in mechanical heart valves (RE-ALIGN trial showed excess stroke and bleeding); Warfarin + Aspirin is required.",
    "tags": [
      "Mechanical Valve",
      "DOACs",
      "Warfarin",
      "RE-ALIGN",
      "Pharmacology"
    ],
    "hint": "The RE-ALIGN trial was stopped early due to excess thrombosis and bleeding on dabigatran.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-24",
    "chapterId": 19,
    "chapterTitle": "Chapter 19: Pharmacology",
    "vignette": "A 78-year-old female taking dabigatran 150 mg BID for nonvalvular atrial fibrillation presents to the emergency department with an acute spontaneous right frontal intraparenchymal hemorrhage (volume 28 cc) and midline shift.",
    "question": "What is the specific, FDA-approved reversal agent for dabigatran, and what is its mechanism?",
    "options": [
      {
        "id": "A",
        "text": "Vitamin K; induces hepatic synthesis of prothrombin"
      },
      {
        "id": "B",
        "text": "Protamine sulfate; directly neutralizes dabigatran via electrostatic binding"
      },
      {
        "id": "C",
        "text": "Fresh frozen plasma; replaces consumed circulating thrombin"
      },
      {
        "id": "D",
        "text": "Idarucizumab (Praxbind); humanized monoclonal antibody Fab fragment that binds dabigatran with 350-fold higher affinity than thrombin"
      },
      {
        "id": "E",
        "text": "Andexanet alfa; acts as a recombinant decoy Factor Xa molecule"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Idarucizumab (Praxbind) is a humanized monoclonal antibody Fab fragment specifically developed to reverse the anticoagulant effect of the direct thrombin inhibitor dabigatran. It binds both free and clot-bound dabigatran with an affinity approximately 350 times greater than that of thrombin, neutralizing its anticoagulant activity within minutes. It is dosed as 5 g IV (two consecutive 2.5 g infusions).",
    "keyTakeaway": "Idarucizumab (Praxbind) 5g IV = Specific reversal agent for dabigatran (direct thrombin inhibitor).",
    "tags": [
      "Idarucizumab",
      "Dabigatran",
      "Anticoagulation Reversal",
      "Pharmacology"
    ],
    "hint": "Monoclonal antibody Fab fragment specifically approved for Praxbind/Pradaxa.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-25",
    "chapterId": 19,
    "chapterTitle": "Chapter 19: Pharmacology",
    "vignette": "An 82-year-old male with atrial fibrillation and chronic kidney disease has a creatinine clearance of 35 mL/min. His physician intends to prescribe rivaroxaban.",
    "question": "What is the appropriate recommended daily dosage of rivaroxaban in this patient?",
    "options": [
      {
        "id": "A",
        "text": "2.5 mg twice daily"
      },
      {
        "id": "B",
        "text": "Rivaroxaban is absolutely contraindicated for CrCl <50 mL/min"
      },
      {
        "id": "C",
        "text": "15 mg once daily with the evening meal"
      },
      {
        "id": "D",
        "text": "10 mg twice daily"
      },
      {
        "id": "E",
        "text": "20 mg once daily with the evening meal"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The standard dose of rivaroxaban (Xarelto) for stroke prevention in nonvalvular atrial fibrillation is 20 mg once daily taken with the evening meal (to ensure optimal bioavailability). In patients with moderate renal impairment (creatinine clearance 15 to 49 mL/min), the dosage must be reduced to 15 mg once daily. Rivaroxaban is avoided if CrCl is <15 mL/min.",
    "keyTakeaway": "Rivaroxaban: 20 mg daily standard; reduce to 15 mg daily if CrCl 15-49 mL/min.",
    "tags": [
      "Rivaroxaban",
      "DOAC",
      "Renal Dosing",
      "Pharmacology"
    ],
    "hint": "The standard 20 mg dose is reduced by 5 mg in moderate renal impairment.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-26",
    "chapterId": 19,
    "chapterTitle": "Chapter 19: Pharmacology",
    "vignette": "A 66-year-old female with acute ischemic stroke and Barrett's esophagus is prescribed clopidogrel 75 mg daily. Her gastroenterologist recommends starting omeprazole 40 mg daily for reflux.",
    "question": "What pharmacokinetic drug-drug interaction occurs between omeprazole and clopidogrel, and what is the safest alternative?",
    "options": [
      {
        "id": "A",
        "text": "Omeprazole chelates clopidogrel directly in the stomach lumen"
      },
      {
        "id": "B",
        "text": "Omeprazole inhibits CYP2C19, decreasing the formation of clopidogrel's active metabolite; switch to pantoprazole or an H2 blocker"
      },
      {
        "id": "C",
        "text": "Omeprazole and clopidogrel have no interaction; both can be co-administered without concern"
      },
      {
        "id": "D",
        "text": "Omeprazole induces CYP3A4, causing dangerously high clopidogrel levels and severe bleeding"
      },
      {
        "id": "E",
        "text": "Clopidogrel prevents omeprazole absorption, causing gastric ulcer perforation"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Clopidogrel is a prodrug requiring two-step hepatic bioactivation by CYP2C19, CYP3A4, and other cytochrome enzymes. Omeprazole and esomeprazole are potent inhibitors of CYP2C19, significantly reducing the generation of clopidogrel's active thiol metabolite and diminishing platelet inhibition. Pantoprazole has much less affinity for CYP2C19 and does not significantly impair clopidogrel activation, making it the preferred PPI when gastric acid suppression is required.",
    "keyTakeaway": "Omeprazole inhibits CYP2C19, reducing clopidogrel activation; Pantoprazole does NOT inhibit CYP2C19 and is safe.",
    "tags": [
      "Clopidogrel",
      "Omeprazole",
      "CYP2C19",
      "Pantoprazole",
      "Pharmacology"
    ],
    "hint": "Omeprazole blocks the specific P450 enzyme responsible for bioactivating clopidogrel.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-27",
    "chapterId": 19,
    "chapterTitle": "Chapter 19: Pharmacology",
    "vignette": "An 80-year-old male on warfarin with an INR of 12.0 presents with acute severe headache and is diagnosed with a subdural hematoma on CT.",
    "question": "Which combination therapy provides the fastest, most durable reversal of warfarin-induced coagulopathy in life-threatening bleeding?",
    "options": [
      {
        "id": "A",
        "text": "Subcutaneous Vitamin K 5 mg combined with FFP"
      },
      {
        "id": "B",
        "text": "Fresh frozen plasma (FFP) alone (2 units)"
      },
      {
        "id": "C",
        "text": "Oral vitamin K 10 mg alone"
      },
      {
        "id": "D",
        "text": "Four-factor prothrombin complex concentrate (4F-PCC) combined with intravenous Vitamin K (10 mg)"
      },
      {
        "id": "E",
        "text": "Recombinant Factor VIIa (rFVIIa) alone"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Four-factor prothrombin complex concentrate (4F-PCC: Kcentra) contains factors II, VII, IX, and X, as well as proteins C and S. It provides the most rapid reversal of warfarin coagulopathy, normalizing the INR in less than 15-30 minutes. However, the half-life of infused Factor VII is short (~6 hours). Therefore, intravenous Vitamin K (10 mg slow IV infusion) MUST be co-administered to stimulate sustained endogenous hepatic synthesis of vitamin K-dependent clotting factors over the subsequent 24 to 48 hours.",
    "keyTakeaway": "Urgent warfarin reversal = 4F-PCC (for rapid immediate reversal) + IV Vitamin K 10 mg (for sustained hepatic synthesis).",
    "tags": [
      "Warfarin Reversal",
      "4F-PCC",
      "Vitamin K",
      "Pharmacology"
    ],
    "hint": "Combine immediate replacement of factors II, VII, IX, X with a stimulus for ongoing hepatic factor production.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-28",
    "chapterId": 14,
    "chapterTitle": "Chapter 14: Vascular Malformations & Aneurysms",
    "vignette": "A 44-year-old woman with an unruptured, incidental 2.5 cm Spetzler-Martin Grade 2 arteriovenous malformation (AVM) in the right frontal lobe is referred for treatment evaluation.",
    "question": "What did the ARUBA (A Randomized Trial of Unruptured Brain Arteriovenous Malformations) trial demonstrate regarding medical management versus interventional eradication?",
    "options": [
      {
        "id": "A",
        "text": "Partial embolization eliminated the risk of future hemorrhage"
      },
      {
        "id": "B",
        "text": "Complete surgical resection had equal outcomes to medical therapy at 1 year"
      },
      {
        "id": "C",
        "text": "Medical management alone was superior; interventional therapy was associated with a significantly higher risk of stroke or death (30% vs 10%)"
      },
      {
        "id": "D",
        "text": "The trial was terminated early because medical management was harmful"
      },
      {
        "id": "E",
        "text": "Interventional therapy (surgery/embolization/radiosurgery) was superior to medical management in preventing stroke and death"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The ARUBA trial was a randomized, multicenter trial comparing medical management alone versus interventional therapy (neurosurgery, embolization, or stereotactic radiosurgery) for unruptured brain AVMs. The trial was halted prematurely after 33 months because the primary endpoint of death or symptomatic stroke was significantly higher in the interventional group (30.7%) compared to the medical group (10.1%, hazard ratio 0.27). The conclusion was that medical management alone is superior to intervention for unruptured brain AVMs over the short-to-medium term.",
    "keyTakeaway": "ARUBA trial: Medical management alone is SUPERIOR to interventional eradication for unruptured brain AVMs.",
    "tags": [
      "ARUBA",
      "AVM",
      "Landmark Trial",
      "Clinical Trials"
    ],
    "hint": "The trial was stopped early because invasive treatment caused significantly more strokes and deaths than conservative care.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-29",
    "chapterId": 13,
    "chapterTitle": "Chapter 13: Intracranial Hemorrhage (ICH)",
    "vignette": "A 71-year-old male on daily aspirin 81 mg presents with an acute spontaneous intracerebral hemorrhage (volume 24 cc) with a Glasgow Coma Scale score of 12. The ICU resident asks whether platelet transfusion should be given to reverse antiplatelet effects.",
    "question": "What did the PATCH (Platelet Transfusion Versus Standard Care After Acute Stroke Due to Spontaneous Cerebral Hemorrhage Associated with Antiplatelet Therapy) trial demonstrate?",
    "options": [
      {
        "id": "A",
        "text": "Platelet transfusion significantly reduced 3-month mortality and hematoma expansion"
      },
      {
        "id": "B",
        "text": "Platelet transfusion was beneficial only if administered within 90 minutes of symptom onset"
      },
      {
        "id": "C",
        "text": "Platelet transfusion increased the odds of death and dependence at 3 months (24% mortality vs 17% in standard care); platelet transfusion is not recommended"
      },
      {
        "id": "D",
        "text": "Platelet transfusion is indicated only in patients with concurrent thrombocytopenia"
      },
      {
        "id": "E",
        "text": "Platelet transfusion had no effect on outcomes and was completely neutral"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The PATCH trial evaluated whether platelet transfusion improved functional outcomes in patients with spontaneous supratentorial ICH who had been taking antiplatelet therapy. The trial showed that patients who received platelet transfusions had significantly HIGHER odds of death or dependence at 3 months (adjusted OR 1.84, p = 0.011) and higher in-hospital mortality (24% vs 17%). Therefore, routine platelet transfusion is NOT recommended for spontaneous ICH associated with antiplatelet therapy.",
    "keyTakeaway": "PATCH trial: Platelet transfusion in acute ICH associated with antiplatelets is HARMFUL (increases death & disability).",
    "tags": [
      "PATCH",
      "ICH",
      "Platelet Transfusion",
      "Landmark Trial"
    ],
    "hint": "Transfusing platelets in this setting was actually found to cause harm rather than benefit.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-30",
    "chapterId": 13,
    "chapterTitle": "Chapter 13: Intracranial Hemorrhage (ICH)",
    "vignette": "A 62-year-old male presents with spontaneous putaminal ICH within 3 hours of symptom onset. Initial blood pressure is 210/115 mmHg.",
    "question": "What did the ATACH-2 (Antihypertensive Treatment of Acute Cerebral Hemorrhage II) trial reveal regarding intensive systolic blood pressure lowering (110-139 mmHg) compared to standard lowering (140-179 mmHg)?",
    "options": [
      {
        "id": "A",
        "text": "Intensive lowering significantly decreased 3-month death and severe disability"
      },
      {
        "id": "B",
        "text": "Intensive lowering did not improve 3-month functional outcome and significantly increased the rate of adverse renal events within 7 days"
      },
      {
        "id": "C",
        "text": "Intensive lowering was superior when achieved with IV labetalol rather than nicardipine"
      },
      {
        "id": "D",
        "text": "Intensive lowering increased hematoma expansion by causing cerebral autoregulatory collapse"
      },
      {
        "id": "E",
        "text": "Intensive lowering is the proven standard of care for all patients with hematomas >60 cc"
      }
    ],
    "correctOptionId": "B",
    "explanation": "In ATACH-2, patients with acute spontaneous ICH presenting within 4.5 hours were randomized to intensive blood pressure lowering (target SBP 110-139 mmHg) versus standard lowering (target SBP 140-179 mmHg) using IV nicardipine. There was no significant difference in death or disability at 3 months (38.7% intensive vs 37.7% standard). However, intensive lowering caused a statistically significant increase in adverse renal events within the first 7 days (9.0% vs 4.0%). Current guidelines recommend targeting SBP ~140 mmHg (range 130-150 mmHg), avoiding drops below 130 mmHg.",
    "keyTakeaway": "ATACH-2: Intensive SBP lowering to <140 mmHg showed no functional benefit and increased renal adverse events in acute ICH.",
    "tags": [
      "ATACH-2",
      "ICH",
      "Blood Pressure",
      "Landmark Trial"
    ],
    "hint": "Aggressive lowering failed to improve outcomes and caused kidney injury.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-31",
    "chapterId": 21,
    "chapterTitle": "Chapter 21: Perioperative Stroke & Ethics",
    "vignette": "A family of an 82-year-old comatose patient with a massive complete right MCA infarction and severe midline shift requests that the medical team administer full-dose intravenous heparin to 'dissolve the clot and restore brain function.' The neurologist explains that heparin has no proven benefit in this setting and carries a high risk of fatal hemorrhagic conversion.",
    "question": "Which foundational principle of biomedical ethics directly justifies the neurologist's decision to decline the family's request for full-dose anticoagulation?",
    "options": [
      {
        "id": "A",
        "text": "Futility doctrine only"
      },
      {
        "id": "B",
        "text": "Paternalism"
      },
      {
        "id": "C",
        "text": "Autonomy"
      },
      {
        "id": "D",
        "text": "Distributive justice"
      },
      {
        "id": "E",
        "text": "Non-maleficence"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Non-maleficence ('primum non nocere' or 'do no harm') requires that healthcare providers refrain from administering interventions that offer no realistic clinical benefit and carry substantial known risks of harm or death. Administering full-dose IV heparin for a massive acute MCA infarct has no proven therapeutic efficacy and exposes the patient to lethal hemorrhagic transformation. Therefore, the principle of non-maleficence ethically obligates the physician to refuse harmful, non-beneficial interventions even when requested by surrogates.",
    "keyTakeaway": "Non-maleficence ('do no harm') ethically justifies withholding treatments with zero proven benefit and substantial potential for harm.",
    "tags": [
      "Ethics",
      "Non-maleficence",
      "Patient Care"
    ],
    "hint": "The ethical duty to avoid inflicting unnecessary harm on patients.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-32",
    "chapterId": 21,
    "chapterTitle": "Chapter 21: Perioperative Stroke & Ethics",
    "vignette": "A 62-year-old competent executive presents 2 hours after acute onset of right hemiparesis and mild expressive aphasia (NIHSS 9). Non-contrast CT is negative for hemorrhage. After a detailed, objective discussion of the risks and benefits of IV alteplase, the patient states: 'I understand the 6% risk of bleeding and the 30% benefit, but I decline thrombolysis and choose to be treated with antiplatelet therapy only.'",
    "question": "What is the physician's ethical obligation regarding this patient's decision?",
    "options": [
      {
        "id": "A",
        "text": "Respect the patient's decision based on the ethical principle of autonomy, document the informed refusal, and provide optimal alternative medical therapy"
      },
      {
        "id": "B",
        "text": "Administer tPA anyway under emergency implied consent"
      },
      {
        "id": "C",
        "text": "Coerce the patient by stating death is imminent without thrombolytic therapy"
      },
      {
        "id": "D",
        "text": "Declare the patient incompetent due to mild aphasia and seek surrogate consent from the spouse"
      },
      {
        "id": "E",
        "text": "Discharge the patient against medical advice immediately"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Autonomy recognizes the fundamental right of a competent adult patient to make informed decisions about their own healthcare, including the right to accept or refuse any medical intervention (even life-saving treatments). Mild aphasia does not imply decisional incapacity if the patient demonstrates understanding of the choices, risks, and benefits. The physician's ethical responsibility is to ensure the refusal is fully informed, avoid coercion, document the discussion thoroughly, and provide compassionate, evidence-based alternative therapy.",
    "keyTakeaway": "Autonomy grants a competent patient the right to refuse recommended interventions after informed discussion; informed refusal must be respected.",
    "tags": [
      "Ethics",
      "Autonomy",
      "Informed Consent"
    ],
    "hint": "The principle of self-determination and the right of competent patients to make their own medical decisions.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-33",
    "chapterId": 18,
    "chapterTitle": "Chapter 18: Stroke Rehabilitation",
    "vignette": "A rehabilitation physician is assessing stroke survivors with upper extremity hemiparesis for constraint-induced movement therapy (CIMT).",
    "question": "What baseline motor criteria were required for inclusion in the landmark EXCITE (Extremity Constraint-Induced Therapy Evaluation) trial?",
    "options": [
      {
        "id": "A",
        "text": "Complete flaccid plegia of the arm with 0/5 strength"
      },
      {
        "id": "B",
        "text": "At least 20 degrees of active wrist extension and 10 degrees of active extension of each finger"
      },
      {
        "id": "C",
        "text": "Severe sensory loss with normal motor strength"
      },
      {
        "id": "D",
        "text": "Full active motor range of motion with only sensory ataxia"
      },
      {
        "id": "E",
        "text": "Presence of severe flexor spasticity with Ashworth score 4"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Constraint-Induced Movement Therapy (CIMT) involves constraining the unaffected upper extremity in a padded mitt (for up to 90% of waking hours over 2 weeks) combined with repetitive, intensive task practice of the paretic arm. In the EXCITE trial, inclusion required minimal voluntary movement ability: at least 20 degrees of active wrist extension and 10 degrees of active extension at the metacarpophalangeal and interphalangeal joints of each finger. CIMT is ineffective in patients with a completely flaccid, plegic limb or severe joint contractures.",
    "keyTakeaway": "CIMT (EXCITE trial) requires minimum baseline movement: >=20 degrees wrist extension and >=10 degrees finger extension.",
    "tags": [
      "CIMT",
      "EXCITE",
      "Rehabilitation",
      "Motor Recovery"
    ],
    "hint": "Requires minimal active extension of the wrist and digits to engage in repetitive task practice.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-34",
    "chapterId": 18,
    "chapterTitle": "Chapter 18: Stroke Rehabilitation",
    "vignette": "A 56-year-old female presents 6 weeks following a right thalamic ischemic stroke with excruciating burning, allodynia, and hyperpathia in the left face, arm, and leg. Gentle touch with clothing triggers severe pain.",
    "question": "What central pain syndrome is present, and which initial pharmacologic therapy is guideline-recommended?",
    "options": [
      {
        "id": "A",
        "text": "Central poststroke pain (Dejerine-Roussy syndrome); tricyclic antidepressants (Amitriptyline) or Gabapentin/Pregabalin"
      },
      {
        "id": "B",
        "text": "Post-stroke shoulder subluxation; steroid joint injection"
      },
      {
        "id": "C",
        "text": "Trigeminal neuralgia; carbamazepine"
      },
      {
        "id": "D",
        "text": "Fibromyalgia; duloxetine"
      },
      {
        "id": "E",
        "text": "Complex regional pain syndrome type I; high-dose opioids"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Central poststroke pain (CPSP, historically known as Dejerine-Roussy syndrome) develops in 2% to 8% of stroke patients, most commonly following lesions of the ventral posterolateral (VPL) nucleus of the thalamus or the lateral medulla. It presents with burning, dysesthetic, spontaneous pain and allodynia on the contralateral body. First-line pharmacologic agents include tricyclic antidepressants (amitriptyline), gabapentin, and pregabalin. Traditional analgesics and opioids are ineffective. Motor cortex stimulation can be considered for refractory cases.",
    "keyTakeaway": "Central Poststroke Pain (Dejerine-Roussy) = Burning pain & allodynia after VPL thalamic or lateral medullary stroke; treat with Amitriptyline or Gabapentin.",
    "tags": [
      "Central Poststroke Pain",
      "Dejerine-Roussy",
      "Thalamus",
      "Rehabilitation"
    ],
    "hint": "Thalamic pain syndrome treated with membrane stabilizers or tricyclics, not opioids.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-35",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 74-year-old woman with severe bilateral carotid atherosclerosis reports that while gardening on bright, sunny afternoons, she experiences an episodic, reversible dimming and dulling of vision in her right eye that resolves upon returning indoors. Fundus examination in the clinic is unremarkable.",
    "question": "What is this classic neurovascular phenomenon described by Furlan, and what does it indicate?",
    "options": [
      {
        "id": "A",
        "text": "Migraine with visual aura"
      },
      {
        "id": "B",
        "text": "Closed-angle glaucoma triggered by pupillary constriction"
      },
      {
        "id": "C",
        "text": "Uhthoff phenomenon, indicative of multiple sclerosis"
      },
      {
        "id": "D",
        "text": "Solar retinitis from direct foveal phototoxicity"
      },
      {
        "id": "E",
        "text": "Retinal claudication (visual dulling in bright light), indicative of severe hemodynamic carotid stenosis"
      }
    ],
    "correctOptionId": "E",
    "explanation": "First described by Anthony Furlan in 1979, unilateral visual dulling or loss upon exposure to bright light ('retinal claudication') is a classic sign of severe hemodynamic internal carotid artery occlusive disease. Exposure to bright light stimulates the retina and markedly increases photoreceptor metabolic oxygen demand. When severe upstream carotid stenosis limits compensatory hyperemia, the retina becomes ischemic, causing temporary visual graying or dimming.",
    "keyTakeaway": "Visual loss on bright light exposure (Furlan's sign) = Hemodynamic retinal claudication from severe ipsilateral carotid stenosis.",
    "tags": [
      "Furlan Sign",
      "Carotid Stenosis",
      "Retinal Claudication",
      "Neuro-Ophthalmology"
    ],
    "hint": "A metabolic mismatch where bright light increases retinal demand beyond what a severely stenosed carotid can deliver.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-36",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 58-year-old female with acute left hemiparesis is receiving IV alteplase (tPA). Thirty minutes into the infusion, she develops acute swelling of the right side of her tongue and lips. Her only daily medication is enalapril for hypertension.",
    "question": "What acute complication has occurred, and why is it lateralized to the hemiparetic side?",
    "options": [
      {
        "id": "A",
        "text": "Hypoglossal nerve compression by an expanding cervical hematoma"
      },
      {
        "id": "B",
        "text": "Acute lingual infarction due to lingual artery thrombosis"
      },
      {
        "id": "C",
        "text": "Direct neurogenic Horner syndrome"
      },
      {
        "id": "D",
        "text": "Orolingual angioedema; caused by synergistic bradykinin accumulation from tPA-mediated plasmin activation and ACE inhibitor inhibition of bradykinin breakdown"
      },
      {
        "id": "E",
        "text": "True anaphylaxis; caused by IgE-mediated histamine release from mast cells"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Orolingual angioedema occurs in 1% to 5% of patients receiving IV alteplase and is substantially more common in patients taking ACE inhibitors (risk increased >5-fold). tPA converts plasminogen to plasmin, which activates the kinin pathway to generate bradykinin; concurrent ACE inhibition impairs bradykinin degradation. The angioedema is classically asymmetrical and lateralized to the hemiparetic (ischemic) side, likely due to localized autonomic dysfunction and neuropeptide release. Management requires immediate cessation of tPA, airway stabilization (intubation if needed), and IV antihistamines/epinephrine.",
    "keyTakeaway": "tPA orolingual angioedema is bradykinin-mediated, strongly associated with ACE inhibitors, and lateralized to the hemiparetic side.",
    "tags": [
      "tPA Complications",
      "Angioedema",
      "ACE Inhibitors",
      "Bradykinin"
    ],
    "hint": "Synergistic excess of bradykinin caused by plasmin generation and ACE inhibition.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-37",
    "chapterId": 11,
    "chapterTitle": "Chapter 11: Special Populations (Pediatric, Pregnancy & Young Adult)",
    "vignette": "A 26-year-old male beginner surfer in Hawaii spends 3 hours repeatedly lying in a prone position with extreme back hyperextension on a surfboard. Upon returning to the beach, he experiences sudden severe mid-back pain, followed by rapidly progressive bilateral lower extremity weakness, sensory loss below T10, and urinary retention. MRI reveals central cord T2 hyperintensity from T8 to T11.",
    "question": "What is the diagnosis, and what is the presumed etiology?",
    "options": [
      {
        "id": "A",
        "text": "Anterior spinal artery dissection"
      },
      {
        "id": "B",
        "text": "Surfer's myelopathy (ischemic spinal cord infarction from fibrocartilaginous embolism or spinal hypoperfusion)"
      },
      {
        "id": "C",
        "text": "Spinal dural arteriovenous fistula"
      },
      {
        "id": "D",
        "text": "Jellyfish envenomation neurotoxicity"
      },
      {
        "id": "E",
        "text": "Acute transverse myelitis"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Surfer's myelopathy is a rare, non-traumatic acute spinal cord infarction predominantly affecting novice surfers. It is caused by prolonged, forced hyperextension of the spine while lying prone on the board, which leads to avulsion of nucleus pulposus material that embolizes into spinal radicular vessels (fibrocartilaginous embolism) or severe mechanical stretching and hypoperfusion of the artery of Adamkiewicz. MRI demonstrates central cord T2 hyperintensity and diffusion restriction in the lower thoracic cord and conus.",
    "keyTakeaway": "Surfer's myelopathy = Acute thoracic spinal cord infarction in novice surfers after prolonged spine hyperextension.",
    "tags": [
      "Surfers Myelopathy",
      "Spinal Cord Infarction",
      "Special Populations"
    ],
    "hint": "Novice surfer syndrome caused by prolonged prone hyperextension and spinal ischemia.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-38",
    "chapterId": 15,
    "chapterTitle": "Chapter 15: Hematologic Disorders & Hypercoagulability",
    "vignette": "A 34-year-old female presents with deep vein thrombosis and a non-hemorrhagic ischemic stroke. Laboratory evaluation reveals a prolonged activated partial thromboplastin time (aPTT) of 56 seconds. A 1:1 mixing study with normal pooled plasma fails to correct the prolonged aPTT. Dilute Russell's viper venom time (dRVVT) is significantly elevated.",
    "question": "What thrombophilic abnormality is present, and why is the elevated aPTT considered a paradox?",
    "options": [
      {
        "id": "A",
        "text": "Factor VIII deficiency; causes bleeding in vitro and in vivo"
      },
      {
        "id": "B",
        "text": "Lupus anticoagulant (antiphospholipid syndrome); prolongs clotting assays in vitro by binding assay phospholipids, but causes thrombosis in vivo"
      },
      {
        "id": "C",
        "text": "Antithrombin III deficiency; inhibits in vitro thrombin generation"
      },
      {
        "id": "D",
        "text": "Factor V Leiden mutation; prolongs intrinsic pathway clotting times"
      },
      {
        "id": "E",
        "text": "Heparin-induced thrombocytopenia; causes in vitro antibody neutralization"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Lupus anticoagulant (LA) is an antiphospholipid antibody directed against phospholipid-protein complexes. In vitro, it binds the reagent phospholipids used in the aPTT and dRVVT assays, artificially delaying clotting and prolonging the clotting time (failing to correct on 1:1 mixing). In vivo, however, lupus anticoagulants promote platelet activation, endothelial dysfunction, and severe hypercoagulability, causing both arterial (stroke, TIA) and venous thrombosis (DVT, PE).",
    "keyTakeaway": "Lupus anticoagulant paradox: Prolongs aPTT in vitro (phospholipid binding), but causes THROMBOSIS in vivo.",
    "tags": [
      "Lupus Anticoagulant",
      "APS",
      "Thrombophilia",
      "Hematology"
    ],
    "hint": "The antibody acts as an in vitro anticoagulant on lab assays but as a potent prothrombotic agent in the body.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-39",
    "chapterId": 15,
    "chapterTitle": "Chapter 15: Hematologic Disorders & Hypercoagulability",
    "vignette": "A stroke patient is started on IV unfractionated heparin. Six days later, his platelet count has dropped from 240,000 to 88,000/uL, and he develops acute pain and coldness in his right foot with absent pulses.",
    "question": "What is the diagnosis, and what is the immediate, mandatory management strategy?",
    "options": [
      {
        "id": "A",
        "text": "Disseminated intravascular coagulation; transfuse fresh frozen plasma and cryoprecipitate"
      },
      {
        "id": "B",
        "text": "Immune thrombocytopenic purpura; administer IV immunoglobulin and transfuse 2 units of platelets"
      },
      {
        "id": "C",
        "text": "Heparin-Induced Thrombocytopenia (HIT Type II); immediately stop all heparin, start a non-heparin direct thrombin inhibitor (Argatroban), and avoid platelet transfusions"
      },
      {
        "id": "D",
        "text": "Warfarin skin necrosis; administer subcutaneous vitamin K"
      },
      {
        "id": "E",
        "text": "Thrombotic thrombocytopenic purpura; perform emergent plasmapheresis"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Heparin-Induced Thrombocytopenia (HIT Type II) is an immune-mediated disorder caused by IgG antibodies against complexes of platelet factor 4 (PF4) and heparin. It typically develops 4 to 10 days after heparin initiation, characterized by a platelet drop >50% and paradoxical life-threatening arterial and venous thrombosis ('white clot syndrome'). Immediate management is: (1) STOP all heparin (including flushes), (2) initiate a non-heparin direct thrombin inhibitor such as Argatroban or Bivalirudin, (3) do NOT transfuse platelets (fuels thrombosis), and (4) do NOT start warfarin until platelets recover to >150,000/uL.",
    "keyTakeaway": "HIT Type II: Platelets drop >50% at 4-10 days + thrombosis. Discontinue ALL heparin, start Argatroban, NO platelets.",
    "tags": [
      "HIT",
      "Platelet Factor 4",
      "Argatroban",
      "Hematology"
    ],
    "hint": "Must switch to a non-heparin direct thrombin inhibitor and avoid transfusing more platelets.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-40",
    "chapterId": 16,
    "chapterTitle": "Chapter 16: Neuroradiology & Neurovascular Imaging",
    "vignette": "A noncontrast CT head obtained 45 minutes after acute left hemiparesis shows a bright, tubular vessel in the right Sylvian fissure with a density of 65 Hounsfield units.",
    "question": "What is the diagnostic significance, sensitivity, and specificity of the 'hyperdense artery sign' on unenhanced CT?",
    "options": [
      {
        "id": "A",
        "text": "It is an artifact caused by bony beam hardening from the sphenoid ridge"
      },
      {
        "id": "B",
        "text": "It is 96% sensitive and indicates chronic atherosclerotic calcification"
      },
      {
        "id": "C",
        "text": "It indicates a ruptured saccular aneurysm in the Sylvian fissure"
      },
      {
        "id": "D",
        "text": "It is 96% specific for an acute luminal thrombus or embolus, but sensitivity is only approximately 54%"
      },
      {
        "id": "E",
        "text": "It is seen in over 90% of all acute middle cerebral artery strokes"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The hyperdense artery sign (most commonly the hyperdense MCA sign) on noncontrast CT represents acute thromboembolism in a large cerebral artery. It has very high specificity (>96%) for acute large vessel occlusion, but its sensitivity is modest (~54%), improving with thin (1-3 mm) slices. Therefore, the absence of a hyperdense vessel does NOT rule out large vessel occlusion, and CTA should be performed immediately.",
    "keyTakeaway": "Hyperdense artery sign on noncontrast CT = >96% specific for acute large vessel thrombus, but sensitivity is only ~54%.",
    "tags": [
      "Hyperdense MCA",
      "CT Head",
      "Neuroradiology",
      "LVO"
    ],
    "hint": "Highly specific for acute clot, but absent in nearly half of LVO cases.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-41",
    "chapterId": 14,
    "chapterTitle": "Chapter 14: Vascular Malformations & Aneurysms",
    "vignette": "A 52-year-old female presents with the sudden onset of 'the worst headache of her life' followed by brief loss of consciousness. Noncontrast CT reveals hyperdense blood in the basal cisterns. On exam, she has severe headache and meningismus, but is alert and oriented with no focal motor deficits.",
    "question": "What is this patient's clinical grade according to the Hunt and Hess classification of subarachnoid hemorrhage (SAH)?",
    "options": [
      {
        "id": "A",
        "text": "Grade IV"
      },
      {
        "id": "B",
        "text": "Grade II"
      },
      {
        "id": "C",
        "text": "Grade V"
      },
      {
        "id": "D",
        "text": "Grade III"
      },
      {
        "id": "E",
        "text": "Grade I"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The Hunt and Hess classification grades clinical severity in aneurysmal SAH: Grade I: Asymptomatic or mild headache, slight nuchal rigidity; Grade II: Moderate to severe headache, nuchal rigidity, no neurological deficit other than cranial nerve palsy; Grade III: Drowsiness, confusion, or mild focal deficit; Grade IV: Stupor, moderate-to-severe hemiparesis, early vegetative disturbance; Grade V: Deep coma, decerebrate posturing, moribund. This patient has severe headache and stiff neck without confusion or motor deficit, fitting Grade II.",
    "keyTakeaway": "Hunt and Hess Grade II = Moderate-to-severe headache + nuchal rigidity, without drowsiness or motor deficit.",
    "tags": [
      "Hunt and Hess",
      "SAH",
      "Clinical Scale",
      "Aneurysm"
    ],
    "hint": "Severe headache and stiff neck without altered consciousness or focal weakness corresponds to Grade 2.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-42",
    "chapterId": 14,
    "chapterTitle": "Chapter 14: Vascular Malformations & Aneurysms",
    "vignette": "A 48-year-old male with an incidental 8 mm saccular aneurysm of the anterior communicating artery (ACOM) asks about his 5-year rupture risk.",
    "question": "According to the landmark International Study of Unruptured Intracranial Aneurysms (ISUIA), how does aneurysm size and circulation location influence rupture risk?",
    "options": [
      {
        "id": "A",
        "text": "Aneurysm location has no effect on rupture risk; only patient age determines outcome"
      },
      {
        "id": "B",
        "text": "Aneurysms under 7 mm in the anterior circulation without prior SAH have a 10% annual rupture risk"
      },
      {
        "id": "C",
        "text": "Prior rupture of a different aneurysm does not alter the natural history of a remaining unruptured aneurysm"
      },
      {
        "id": "D",
        "text": "Aneurysms larger than 25 mm have lower rupture rates than small aneurysms"
      },
      {
        "id": "E",
        "text": "Posterior circulation and PCOM aneurysms have significantly higher rupture rates than anterior circulation aneurysms of the same size"
      }
    ],
    "correctOptionId": "E",
    "explanation": "In ISUIA, the 5-year cumulative rupture rate for unruptured intracranial aneurysms was strongly dependent on size and location. For anterior circulation aneurysms (internal carotid, anterior cerebral, middle cerebral), 5-year rupture rates were 0% for <7 mm, 2.6% for 7-12 mm, 14.5% for 13-24 mm, and 40% for >=25 mm. In contrast, posterior circulation (vertebrobasilar, PCA) and posterior communicating artery aneurysms had substantially higher rupture rates across all sizes (2.5% for <7 mm, 14.5% for 7-12 mm, 18.4% for 13-24 mm, and 50% for >=25 mm).",
    "keyTakeaway": "ISUIA trial: Posterior circulation and PCOM aneurysms carry substantially higher rupture risk than anterior circulation aneurysms of identical size.",
    "tags": [
      "ISUIA",
      "Aneurysm Rupture Risk",
      "Landmark Trial"
    ],
    "hint": "The posterior circulation and PCOM carry a much higher rupture risk across all size tiers.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-43",
    "chapterId": 14,
    "chapterTitle": "Chapter 14: Vascular Malformations & Aneurysms",
    "vignette": "A 35-year-old male presents with two generalized tonic-clonic seizures. Brain MRI reveals a 2.0 cm well-circumscribed, multilobulated 'mulberry' lesion in the right temporal lobe with a peripheral hemosiderin ring on T2 and GRE sequences. Cerebral angiography is completely normal.",
    "question": "What vascular malformation is present, and what is its annual risk of hemorrhage?",
    "options": [
      {
        "id": "A",
        "text": "Capillary telangiectasia; annual risk 20%"
      },
      {
        "id": "B",
        "text": "Arteriovenous malformation; annual risk 10-15%"
      },
      {
        "id": "C",
        "text": "Developmental venous anomaly; annual risk 5%"
      },
      {
        "id": "D",
        "text": "Cavernous malformation (cavernoma); annual risk ~0.5% to 2% for supratentorial lesions"
      },
      {
        "id": "E",
        "text": "Dural arteriovenous fistula; annual risk 50%"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Cavernous malformations (cavernomas) consist of dilated, thin-walled sinusoidal vascular channels lined by endothelium without intervening normal brain parenchyma. Because flow is extremely slow and low pressure, they are angiographically occult (normal cerebral angiogram). MRI demonstrates a classic 'popcorn' or 'mulberry' appearance with core reticulated hyper/hypointensity and a hypointense hemosiderin rim on T2/GRE. The annual risk of hemorrhage in unruptured supratentorial cavernomas is low (~0.5% to 2% per year), but increases up to ~5% per year for brainstem lesions.",
    "keyTakeaway": "Cavernous malformation: Angiographically occult, 'popcorn' MRI with hemosiderin rim, 0.5-2% annual bleed risk (5% in brainstem).",
    "tags": [
      "Cavernoma",
      "Vascular Malformations",
      "MRI",
      "Seizures"
    ],
    "hint": "Angiographically occult sinusoidal lesion with surrounding hemosiderin halo.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-44",
    "chapterId": 14,
    "chapterTitle": "Chapter 14: Vascular Malformations & Aneurysms",
    "vignette": "A contrast-enhanced brain MRI obtained for chronic tension headaches reveals a cluster of radiating dilated medullary veins in the left cerebellar hemisphere converging into a single enlarged trans-cortical draining vein ('caput medusae').",
    "question": "What is this vascular entity, and what is the appropriate management?",
    "options": [
      {
        "id": "A",
        "text": "High-grade Arteriovenous Malformation; perform emergency surgical excision"
      },
      {
        "id": "B",
        "text": "Dural arteriovenous fistula; treat with endovascular transarterial onyx embolization"
      },
      {
        "id": "C",
        "text": "Cavernous malformation; treat with stereotactic Gamma Knife radiosurgery"
      },
      {
        "id": "D",
        "text": "Cerebral amyloid angiopathy; initiate lifelong oral anticoagulation"
      },
      {
        "id": "E",
        "text": "Developmental Venous Anomaly (DVA); leave alone (resection is contraindicated as it drains normal brain parenchyma)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Developmental Venous Anomalies (DVAs, previously called venous angiomas) are the most common intracranial vascular malformations (found in 2.5% to 10% of the population). They consist of radially arranged medullary veins draining into a dilated central vein ('caput medusae' or umbrella appearance). DVAs provide essential physiological venous drainage for normal brain tissue and carry an almost nonexistent risk of hemorrhage. Surgical excision or obliteration is strictly contraindicated because sacrifice of the collecting vein results in catastrophic venous infarction and hemorrhage.",
    "keyTakeaway": "DVA ('caput medusae') = Benign extreme variant of venous drainage; DO NOT RESECT (causes catastrophic venous infarction).",
    "tags": [
      "DVA",
      "Caput Medusae",
      "Vascular Malformations"
    ],
    "hint": "Anomalous veins that drain normal brain tissue - removal leads to venous infarction.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-45",
    "chapterId": 14,
    "chapterTitle": "Chapter 14: Vascular Malformations & Aneurysms",
    "vignette": "A neurovascular surgeon is evaluating a 32-year-old male with an unruptured brain AVM using the Spetzler-Martin grading scale.",
    "question": "Which of the following variables and point allocations comprise the Spetzler-Martin AVM grading system?",
    "options": [
      {
        "id": "A",
        "text": "Size (<2 cm = 1 pt, >2 cm = 2 pts), Location (Cortical = 0 pt, Subcortical = 1 pt), and GCS score"
      },
      {
        "id": "B",
        "text": "Hunt-Hess grade + Fisher CT grade"
      },
      {
        "id": "C",
        "text": "Patient age (<40 = 1 pt), Size (<3 cm = 1 pt), and Number of arterial feeders (>2 = 2 pts)"
      },
      {
        "id": "D",
        "text": "Size (<3 cm = 1 pt, 3-6 cm = 2 pts, >6 cm = 3 pts), Eloquence of adjacent brain (Non-eloquent = 0 pt, Eloquent = 1 pt), and Venous drainage (Superficial only = 0 pt, Deep = 1 pt)"
      },
      {
        "id": "E",
        "text": "History of hemorrhage (Yes = 2 pts), Size (>3 cm = 1 pt), and Presence of aneurysm (1 pt)"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The Spetzler-Martin AVM grading scale estimates operative morbidity and mortality for surgical resection of brain AVMs: 1. Size: Small (<3 cm) = 1 point; Medium (3-6 cm) = 2 points; Large (>6 cm) = 3 points. 2. Eloquence of adjacent brain: Non-eloquent = 0 points; Eloquent (sensorimotor, language, visual cortex, hypothalamus, thalamus, internal capsule, brainstem, cerebellar peduncles/deep nuclei) = 1 point. 3. Venous drainage: Superficial only = 0 points; Deep venous drainage = 1 point. Total score ranges from Grade I (lowest risk, 1 point) to Grade V (highest surgical risk, 5 points). Grade VI represents inoperable lesions.",
    "keyTakeaway": "Spetzler-Martin Scale = Size (1-3 pts) + Eloquence (0-1 pt) + Deep venous drainage (0-1 pt).",
    "tags": [
      "Spetzler-Martin",
      "AVM Grading",
      "Vascular Malformations"
    ],
    "hint": "Evaluates three criteria: nidus size, eloquence of brain tissue, and presence of deep venous drainage.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-46",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 64-year-old male with an acute right MCA ischemic stroke has an initial blood pressure of 196/112 mmHg on arrival in the resuscitation bay 75 minutes after symptom onset. Head CT shows no hemorrhage.",
    "question": "What is the recommended blood pressure threshold and first-line intravenous therapy required prior to administering IV alteplase (tPA)?",
    "options": [
      {
        "id": "A",
        "text": "Withhold all antihypertensives for 24 hours under permissive hypertension guidelines"
      },
      {
        "id": "B",
        "text": "Proceed immediately with tPA infusion regardless of blood pressure"
      },
      {
        "id": "C",
        "text": "Initiate IV sodium nitroprusside immediately with target SBP <120 mmHg"
      },
      {
        "id": "D",
        "text": "Lower blood pressure to <185/110 mmHg using IV labetalol (10-20 mg) or nicardipine infusion (5 mg/h)"
      },
      {
        "id": "E",
        "text": "Lower blood pressure to <140/90 mmHg using sublingual nifedipine"
      }
    ],
    "correctOptionId": "D",
    "explanation": "To receive IV thrombolytic therapy, blood pressure must be safely lowered to Systolic BP <185 mmHg and Diastolic BP <110 mmHg BEFORE initiating alteplase, and maintained <180/105 mmHg for at least 24 hours post-infusion. First-line guideline agents are IV Labetalol (10-20 mg IV push over 1-2 min, may repeat once) or IV Nicardipine (5 mg/h, titrated up by 2.5 mg/h every 5-15 min to max 15 mg/h). If blood pressure cannot be maintained below 185/110 mmHg, thrombolysis must NOT be administered due to excessive risk of fatal symptomatic ICH.",
    "keyTakeaway": "Pre-tPA blood pressure goal is <185/110 mmHg; maintain <180/105 mmHg for 24h. Preferred agents: IV Labetalol or Nicardipine.",
    "tags": [
      "Blood Pressure",
      "tPA",
      "Labetalol",
      "Nicardipine",
      "Acute Stroke"
    ],
    "hint": "Must be below 185/110 before starting lytics, using labetalol or nicardipine.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-47",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 71-year-old female presents 3.5 hours after sudden left hemiparesis. Noncontrast head CT is negative for hemorrhage. She takes warfarin for nonvalvular atrial fibrillation. Point-of-care INR is 1.4.",
    "question": "According to the ECASS III trial criteria for the extended 3 to 4.5-hour thrombolytic window, is this patient eligible for IV alteplase?",
    "options": [
      {
        "id": "A",
        "text": "Eligible, because her INR is <=1.7"
      },
      {
        "id": "B",
        "text": "Ineligible, because ANY oral anticoagulant use is an exclusion criterion in the 3 to 4.5-hour window, regardless of the INR"
      },
      {
        "id": "C",
        "text": "Eligible only if endovascular thrombectomy is not available"
      },
      {
        "id": "D",
        "text": "Eligible if alteplase dose is reduced to 0.6 mg/kg"
      },
      {
        "id": "E",
        "text": "Eligible if she is given 4F-PCC prior to tPA infusion"
      }
    ],
    "correctOptionId": "B",
    "explanation": "In the standard 0 to 3-hour window, patients on warfarin are eligible for IV alteplase if their INR is <=1.7. However, under the stricter criteria established by the ECASS III trial for the extended 3 to 4.5-hour window, ANY oral anticoagulant use is an absolute contraindication, REGARDLESS of the INR. Other additional exclusion criteria in the 3 to 4.5-hour window include: age >80 years, baseline NIHSS >25, combination of previous ischemic stroke and diabetes mellitus, and severe ischemic injury involving >1/3 of the MCA territory.",
    "keyTakeaway": "ECASS III (3-4.5h window) extra exclusions: Any oral anticoagulant (regardless of INR), age >80, prior stroke + diabetes, NIHSS >25.",
    "tags": [
      "ECASS III",
      "tPA Contraindications",
      "Extended Window",
      "Warfarin"
    ],
    "hint": "The 3 to 4.5 hour window has stricter exclusions for oral anticoagulants regardless of INR value.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-48",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 66-year-old female presents 10 hours after last known normal with a dense right hemiplegia and severe global aphasia (NIHSS 18). CTA confirms a left M1 MCA occlusion. Automated CT perfusion reveals an ischemic core of 15 cc and a hypoperfused penumbra (Tmax >6s) of 95 cc.",
    "question": "Which landmark clinical trials established the efficacy of mechanical thrombectomy in this extended 6 to 16/24-hour therapeutic window?",
    "options": [
      {
        "id": "A",
        "text": "DAWN and DEFUSE 3"
      },
      {
        "id": "B",
        "text": "NINDS and ECASS III"
      },
      {
        "id": "C",
        "text": "SYNTHESIS and IMS III"
      },
      {
        "id": "D",
        "text": "SAMMPRIS and WASID"
      },
      {
        "id": "E",
        "text": "MR CLEAN and ESCAPE"
      }
    ],
    "correctOptionId": "A",
    "explanation": "The DAWN trial (up to 24 hours, selecting patients with clinical-core mismatch) and the DEFUSE 3 trial (up to 16 hours, selecting patients with perfusion-core mismatch: ischemic core <70 cc, mismatch ratio >=1.8, and penumbral volume >=15 cc) established that mechanical thrombectomy provides dramatic functional benefits (mRS 0-2 NNT ~2.8) in selected anterior circulation LVO patients presenting in the extended 6 to 24-hour window.",
    "keyTakeaway": "DAWN (up to 24h) and DEFUSE 3 (up to 16h) established thrombectomy efficacy in extended windows using perfusion/clinical-core mismatch.",
    "tags": [
      "DAWN",
      "DEFUSE 3",
      "Thrombectomy",
      "Extended Window",
      "Landmark Trial"
    ],
    "hint": "Pair of 2018 landmark trials extending the EVT window beyond 6 hours.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-49",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 55-year-old male presents with a minor acute ischemic stroke (NIHSS 3) 6 hours after symptom onset. Head CT shows no hemorrhage. He is not currently taking antithrombotic medications.",
    "question": "What is the guideline-recommended antiplatelet strategy and duration based on the CHANCE and POINT clinical trials?",
    "options": [
      {
        "id": "A",
        "text": "Aspirin 325 mg daily alone for 90 days"
      },
      {
        "id": "B",
        "text": "Full-dose anticoagulation with apixaban 5 mg BID for 30 days"
      },
      {
        "id": "C",
        "text": "Dual antiplatelet therapy (DAPT) with Aspirin plus Clopidogrel initiated within 24 hours, continued for 21 days, followed by single antiplatelet therapy"
      },
      {
        "id": "D",
        "text": "Prasugrel 10 mg daily combined with aspirin for 21 days"
      },
      {
        "id": "E",
        "text": "DAPT with Aspirin plus Clopidogrel continued indefinitely for 1 year"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The CHANCE and POINT trials demonstrated that for patients presenting within 12-24 hours of a high-risk TIA (ABCD2 score >=4) or minor ischemic stroke (NIHSS <=3), short-course dual antiplatelet therapy (DAPT) with aspirin plus clopidogrel significantly reduces the risk of recurrent ischemic stroke during the high-risk early period compared to aspirin monotherapy. Prolonging DAPT beyond 21 days increases major bleeding risk without additional ischemic benefit (as seen in the MATCH and CHARISMA trials). Therefore, guidelines recommend DAPT for 21 days, followed by antiplatelet monotherapy.",
    "keyTakeaway": "CHANCE & POINT: DAPT (Aspirin + Clopidogrel) started within 24h for minor stroke (NIHSS <=3) or high-risk TIA should be continued for 21 DAYS.",
    "tags": [
      "DAPT",
      "CHANCE",
      "POINT",
      "Secondary Prevention",
      "Landmark Trial"
    ],
    "hint": "Short-course dual antiplatelet therapy for 3 weeks followed by monotherapy.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-50",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 69-year-old male with a recent nondisabling right hemispheric TIA has 75% internal carotid artery stenosis on digital subtraction angiography. The vascular surgery team considers the timing of carotid endarterectomy (CEA).",
    "question": "What did pooled analyses of NASCET and ECST demonstrate regarding the optimal timing of carotid endarterectomy following a nondisabling stroke or TIA?",
    "options": [
      {
        "id": "A",
        "text": "Surgery should be delayed for at least 6 weeks to allow brain tissue consolidation"
      },
      {
        "id": "B",
        "text": "Revascularization provides maximum benefit if performed within the first 2 weeks (14 days) of symptom onset"
      },
      {
        "id": "C",
        "text": "Emergency surgery within 6 hours of onset is required in all patients regardless of medical stability"
      },
      {
        "id": "D",
        "text": "Timing has no impact on surgical stroke reduction; benefit is identical at 6 months"
      },
      {
        "id": "E",
        "text": "Surgery is indicated only after 3 months of failed medical therapy"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Subgroup analyses of NASCET and ECST pooled data demonstrated that the number needed to treat (NNT) to prevent one ipsilateral stroke at 5 years with CEA is lowest (NNT = 5) when surgery is performed within 2 weeks of the index nondisabling stroke or TIA. If surgery is delayed beyond 2 to 4 weeks, the NNT rises exponentially (NNT = 125 after 2-4 weeks), because the highest risk of recurrent stroke occurs in the immediate days and weeks following the index event. For neurologically stable patients, carotid revascularization should be performed within 14 days.",
    "keyTakeaway": "CEA for symptomatic carotid stenosis (>70%) provides greatest risk reduction when performed within 2 WEEKS (14 days) of symptom onset (NNT = 5).",
    "tags": [
      "NASCET",
      "CEA",
      "Timing",
      "Carotid Stenosis",
      "Landmark Trial"
    ],
    "hint": "The highest rate of early stroke recurrence is in the first 14 days, making early surgery within 2 weeks most effective.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-51",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 71-year-old male with symptomatic severe (80%) internal carotid artery stenosis is being evaluated for Carotid Artery Stenting (CAS) versus Carotid Endarterectomy (CEA).",
    "question": "According to the CREST (Carotid Revascularization Endarterectomy vs. Stenting Trial), how did patient age influence outcomes between CAS and CEA?",
    "options": [
      {
        "id": "A",
        "text": "Age had no interaction with outcome in the CREST trial"
      },
      {
        "id": "B",
        "text": "Patients older than 70 years had lower periprocedural stroke rates with CAS"
      },
      {
        "id": "C",
        "text": "CAS was superior to CEA in all age groups, but caused more cranial nerve injuries"
      },
      {
        "id": "D",
        "text": "Patients older than 70 years had significantly better outcomes with CEA; younger patients (<70 years) had slightly better outcomes with CAS"
      },
      {
        "id": "E",
        "text": "CEA was contraindicated in patients older than 75 years due to prohibitive myocardial infarction risk"
      }
    ],
    "correctOptionId": "D",
    "explanation": "In the CREST trial, carotid endarterectomy and carotid artery stenting had equivalent rates of the primary composite endpoint (periprocedural stroke, MI, death, or subsequent ipsilateral stroke). However, age was a significant effect modifier: patients over 70 years of age had significantly better outcomes and lower periprocedural stroke rates with CEA (due to tortuous vascular anatomy and aortic arch atherosclerosis predisposing to catheter embolization during stenting), whereas younger patients (<70 years) tended to have slightly better outcomes with CAS. Overall, CEA had lower periprocedural stroke rates, while CAS had lower rates of myocardial infarction.",
    "keyTakeaway": "CREST trial age effect: Patients >70 years benefit more from CEA (lower stroke risk); patients <70 years do equally well or slightly better with CAS.",
    "tags": [
      "CREST",
      "CEA vs CAS",
      "Carotid Stenting",
      "Landmark Trial"
    ],
    "hint": "Tortuous aortic arch anatomy in elderly patients increases catheter-related stroke risk during stenting.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-fj-52",
    "chapterId": 9,
    "chapterTitle": "Chapter 9: Clinical Cardiology & Stroke",
    "vignette": "A 72-year-old male with persistent nonvalvular atrial fibrillation has a history of hypertension and diabetes mellitus, with an ejection fraction of 50%. He has never had a prior stroke or TIA.",
    "question": "What is this patient's CHA2DS2-VASc score, and what is the guideline-directed antithrombotic recommendation?",
    "options": [
      {
        "id": "A",
        "text": "Score: 3; Oral anticoagulation (DOAC preferred over warfarin)"
      },
      {
        "id": "B",
        "text": "Score: 4; Dual antiplatelet therapy with aspirin and clopidogrel"
      },
      {
        "id": "C",
        "text": "Score: 0; No antithrombotic therapy required"
      },
      {
        "id": "D",
        "text": "Score: 1; Aspirin 81 mg daily"
      },
      {
        "id": "E",
        "text": "Score: 2; Clopidogrel 75 mg daily"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Calculating CHA2DS2-VASc: Congestive heart failure = 0; Hypertension = 1; Age >=75 (2 pts) or 65-74 (1 pt): age 72 = 1 point; Diabetes = 1; Stroke/TIA/VTE (2 pts) = 0; Vascular disease = 0; Sex category female (1 pt): male = 0. Total score = 1 (HTN) + 1 (Age 65-74) + 1 (DM) = 3. In men with a CHA2DS2-VASc score >=2 (and women >=3), oral anticoagulation is strongly recommended (Class I), with direct oral anticoagulants (DOACs: apixaban, rivaroxaban, dabigatran, edoxaban) preferred over warfarin due to lower intracranial hemorrhage risk.",
    "keyTakeaway": "CHA2DS2-VASc score >=2 in men (>=3 in women) mandates oral anticoagulation; DOACs preferred over warfarin.",
    "tags": [
      "CHA2DS2-VASc",
      "Atrial Fibrillation",
      "Anticoagulation",
      "Cardiology"
    ],
    "hint": "Points: 1 for HTN, 1 for age 65-74, 1 for DM = score 3.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-53",
    "chapterId": 9,
    "chapterTitle": "Chapter 9: Clinical Cardiology & Stroke",
    "vignette": "A 34-year-old male with an embolic cryptogenic stroke has a moderate-sized patent foramen ovale (PFO) with an atrial septal aneurysm. He has no vascular risk factors. He is evaluated under the RoPE (Risk of Paradoxical Embolism) score.",
    "question": "What clinical features contribute points to the 10-point RoPE score?",
    "options": [
      {
        "id": "A",
        "text": "Presence of hypertension, diabetes, smoking, and prior stroke"
      },
      {
        "id": "B",
        "text": "ABSENCE of hypertension, diabetes, smoking, and prior stroke; plus young age and cortical stroke on neuroimaging"
      },
      {
        "id": "C",
        "text": "Atrial septal aneurysm excursion >10 mm and shunt size on bubble study"
      },
      {
        "id": "D",
        "text": "Serum troponin elevation and prolonged telemetry monitoring duration"
      },
      {
        "id": "E",
        "text": "D-dimer elevation and lower extremity venous ultrasound findings"
      }
    ],
    "correctOptionId": "B",
    "explanation": "The Risk of Paradoxical Embolism (RoPE) score (max 10 points) is a clinical index designed to determine whether a PFO discovered in a cryptogenic stroke patient is pathogenic (causal) versus an incidental bystander. Points are awarded for: (1) No history of hypertension (1 pt), (2) No history of diabetes (1 pt), (3) No history of smoking (1 pt), (4) No prior TIA or stroke (1 pt), (5) Cortical stroke on neuroimaging (1 pt), and (6) Younger age (up to 5 points for age 18-29, 4 pts for 30-39, down to 0 for >=70). Higher scores (9-10) correlate with a 73-88% attributable PFO fraction.",
    "keyTakeaway": "RoPE score awards points for the ABSENCE of traditional vascular risks, cortical infarct, and young age; high score = PFO is likely causal.",
    "tags": [
      "RoPE Score",
      "PFO",
      "Cryptogenic Stroke",
      "Cardiology"
    ],
    "hint": "Points are scored for lack of traditional vascular risk factors and young age.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-54",
    "chapterId": 9,
    "chapterTitle": "Chapter 9: Clinical Cardiology & Stroke",
    "vignette": "An 82-year-old male with severe aortic valve stenosis presents with an acute right MCA cortical ischemic stroke. TEE demonstrates an aortic valve area of 0.7 cm2 with heavy calcification.",
    "question": "What is the recommended timing and indication for surgical or transcatheter aortic valve replacement (SAVR or TAVI) in patients with severe aortic stenosis?",
    "options": [
      {
        "id": "A",
        "text": "Valve replacement is indicated for severe aortic stenosis if the patient is symptomatic (angina, syncope, heart failure) or has reduced left ventricular ejection fraction (<50%)"
      },
      {
        "id": "B",
        "text": "Valve replacement should never be considered in patients older than 75 years"
      },
      {
        "id": "C",
        "text": "Immediate emergency valve replacement is required in all asymptomatic patients"
      },
      {
        "id": "D",
        "text": "TAVI is contraindicated if the patient has a history of prior ischemic stroke"
      },
      {
        "id": "E",
        "text": "Anticoagulation with warfarin is the definitive therapy, replacing the need for valve surgery"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Severe aortic stenosis (valve area <1.0 cm2, mean gradient >40 mmHg, or peak velocity >4.0 m/s) is an indication for aortic valve intervention (SAVR or TAVI) when patients become symptomatic (classic triad of exertional dyspnea/heart failure, angina, or syncope) or when asymptomatic patients develop a reduced left ventricular ejection fraction (<50%). Asymptomatic severe AS without LV dysfunction is managed with close clinical and echocardiographic surveillance.",
    "keyTakeaway": "Aortic valve replacement is indicated for severe aortic stenosis when symptomatic or when LVEF drops <50%.",
    "tags": [
      "Aortic Stenosis",
      "TAVI",
      "Valvular Disease",
      "Cardiology"
    ],
    "hint": "Indicated when the patient develops cardinal symptoms or systolic dysfunction.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-55",
    "chapterId": 11,
    "chapterTitle": "Chapter 11: Special Populations (Pediatric, Pregnancy & Young Adult)",
    "vignette": "A 24-year-old female who is 12 weeks pregnant with a mechanical aortic valve is evaluated for antithrombotic management during pregnancy.",
    "question": "What teratogenic congenital malformations are specifically associated with first-trimester warfarin exposure ('warfarin embryopathy')?",
    "options": [
      {
        "id": "A",
        "text": "Renal tubular dysgenesis and pulmonary hypoplasia"
      },
      {
        "id": "B",
        "text": "Phocomelia and limb reduction deformities"
      },
      {
        "id": "C",
        "text": "Nasal hypoplasia (saddle nose), stippled epiphyses (chondrodysplasia punctata), and microcephaly/optic atrophy"
      },
      {
        "id": "D",
        "text": "Neural tube defects (anencephaly, spina bifida)"
      },
      {
        "id": "E",
        "text": "Ebstein anomaly and tricuspid atresia"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Warfarin readily crosses the placental barrier and causes warfarin embryopathy in approximately 6% of fetuses exposed during weeks 6 to 12 of gestation. The classic syndrome consists of nasal hypoplasia ('saddle nose'), depressed nasal bridge, stippled epiphyses on radiographs (chondrodysplasia punctata), microcephaly, optic atrophy, and developmental delay. Low-molecular-weight heparin (LMWH) and unfractionated heparin do NOT cross the placenta and are not teratogenic, making adjusted-dose LMWH with anti-Xa monitoring the preferred anticoagulant in early pregnancy.",
    "keyTakeaway": "Warfarin embryopathy (weeks 6-12) = Nasal hypoplasia + stippled epiphyses (chondrodysplasia punctata) + optic atrophy.",
    "tags": [
      "Warfarin Embryopathy",
      "Pregnancy",
      "Teratogenicity",
      "Special Populations"
    ],
    "hint": "Features nasal hypoplasia and stippled calcifications of the bone epiphyses.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-56",
    "chapterId": 11,
    "chapterTitle": "Chapter 11: Special Populations (Pediatric, Pregnancy & Young Adult)",
    "vignette": "A 32-year-old female at 34 weeks gestation presents with acute onset of severe blood pressure elevation (175/115 mmHg), headache, visual blurring, and 4+ proteinuria. Reflexes are brisk with clonus.",
    "question": "What is the diagnosis, and what are the two immediate drug therapies indicated for acute maternal and fetal protection?",
    "options": [
      {
        "id": "A",
        "text": "RCVS; verapamil infusion and high-dose dexamethasone"
      },
      {
        "id": "B",
        "text": "Pheochromocytoma; phentolamine infusion"
      },
      {
        "id": "C",
        "text": "Essential hypertension; oral lisinopril and furosemide"
      },
      {
        "id": "D",
        "text": "Gestational diabetes; regular insulin infusion and bedrest"
      },
      {
        "id": "E",
        "text": "Severe preeclampsia; Intravenous labetalol (or hydralazine) for acute blood pressure control PLUS intravenous magnesium sulfate for eclampsia seizure prophylaxis"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Severe preeclampsia (new-onset BP >=160/110 mmHg after 20 weeks with proteinuria and end-organ symptoms such as visual disturbance or hyperreflexia) requires urgent dual intervention: (1) Urgent parenteral antihypertensive therapy with IV Labetalol, IV Hydralazine, or oral immediate-release Nifedipine to prevent stroke; and (2) Intravenous Magnesium Sulfate (4-6 g loading dose over 20-30 min, then 1-2 g/h infusion) to prevent eclamptic seizures. Definitive treatment is delivery of the fetus and placenta.",
    "keyTakeaway": "Severe preeclampsia = Urgent BP control (IV Labetalol or Hydralazine) + IV Magnesium Sulfate for seizure prevention.",
    "tags": [
      "Preeclampsia",
      "Magnesium Sulfate",
      "Labetalol",
      "Pregnancy",
      "Special Populations"
    ],
    "hint": "Pair an approved parenteral antihypertensive with an IV agent for seizure prophylaxis.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-57",
    "chapterId": 11,
    "chapterTitle": "Chapter 11: Special Populations (Pediatric, Pregnancy & Young Adult)",
    "vignette": "A pregnant patient receiving an intravenous magnesium sulfate infusion for severe preeclampsia becomes obtunded. Exam reveals absent deep tendon patellar reflexes, respiratory rate of 8 breaths/min, and oliguria (<20 mL/h).",
    "question": "What is the diagnosis, and what is the specific intravenous antidote?",
    "options": [
      {
        "id": "A",
        "text": "Hyperkalemia; Intravenous Insulin and Dextrose"
      },
      {
        "id": "B",
        "text": "Eclamptic coma; Intravenous Lorazepam (4 mg IV)"
      },
      {
        "id": "C",
        "text": "Opioid overdose; Intravenous Naloxone (0.4 mg IV)"
      },
      {
        "id": "D",
        "text": "Malignant hyperthermia; Intravenous Dantrolene"
      },
      {
        "id": "E",
        "text": "Magnesium toxicity; Intravenous Calcium Gluconate (1 g IV slow push over 5-10 minutes)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Magnesium toxicity manifests sequentially: loss of deep tendon reflexes occurs at serum levels of 7-10 mEq/L, followed by respiratory depression at 10-13 mEq/L, and cardiac arrest at >15 mEq/L. Magnesium is cleared renally, so oliguria predisposes to rapid toxic accumulation. The immediate antidote is 1 gram of Intravenous Calcium Gluconate (10 mL of 10% solution administered slowly over 5-10 minutes), along with immediate cessation of the magnesium infusion and respiratory support.",
    "keyTakeaway": "Magnesium toxicity: Loss of DTRs + respiratory depression. Antidote is IV Calcium Gluconate 1 g.",
    "tags": [
      "Magnesium Toxicity",
      "Calcium Gluconate",
      "Preeclampsia",
      "Antidote"
    ],
    "hint": "Calcium acts as the direct physiological antagonist to magnesium at the neuromuscular junction.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-58",
    "chapterId": 16,
    "chapterTitle": "Chapter 16: Neuroradiology & Neurovascular Imaging",
    "vignette": "A 68-year-old male with an acute stroke has a noncontrast head CT that is interpreted as normal. An emergency MRI brain is performed.",
    "question": "According to the physical principles of magnetic resonance imaging, what is the earliest time after ischemic stroke onset that signal abnormalities become visible on Diffusion-Weighted Imaging (DWI) versus T2-weighted MRI?",
    "options": [
      {
        "id": "A",
        "text": "Gadolinium enhancement appears within 30 minutes; DWI appears at 7 days"
      },
      {
        "id": "B",
        "text": "DWI and T2 both appear simultaneously at 48 hours"
      },
      {
        "id": "C",
        "text": "T2 hyperintensity appears within 10 minutes; DWI appears at 24 hours"
      },
      {
        "id": "D",
        "text": "DWI is positive only after 24 hours due to T2 shine-through"
      },
      {
        "id": "E",
        "text": "DWI is positive within 15-30 minutes; T2 hyperintensity appears at ~8 hours"
      }
    ],
    "correctOptionId": "E",
    "explanation": "DWI is the most sensitive imaging sequence for hyperacute ischemic stroke, detecting cytotoxic edema and restricted water motion within 15 to 30 minutes of onset in humans (and within 10 minutes in animal models). In contrast, conventional T2-weighted imaging and FLAIR reflect the accumulation of vasogenic edema and free water, which does not become reliably visible until approximately 6 to 8 hours after stroke onset. T1 parenchymal hypodensity appears between 16 and 24 hours, and parenchymal contrast enhancement from BBB breakdown occurs after 24 hours.",
    "keyTakeaway": "MRI timeline: DWI restricted diffusion within 15-30 min; T2/FLAIR hyperintensity appears at ~8h; contrast enhancement after 24h.",
    "tags": [
      "DWI",
      "T2WI",
      "MRI Timeline",
      "Neuroradiology"
    ],
    "hint": "DWI detects cellular cytotoxic edema within minutes, hours before T2 detects vasogenic water.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-59",
    "chapterId": 16,
    "chapterTitle": "Chapter 16: Neuroradiology & Neurovascular Imaging",
    "vignette": "A neurosonologist performs a transcranial Doppler (TCD) study through the transtemporal acoustic window on a patient with acute neurological deficits.",
    "question": "Which intracranial vessels are insonated through the transtemporal window, and what are their normal directions of blood flow relative to the probe?",
    "options": [
      {
        "id": "A",
        "text": "MCA (flow TOWARD probe, depth 30-60 mm), ACA (flow AWAY from probe, depth 60-70 mm), and PCA (bidirectional flow, depth 60-70 mm)"
      },
      {
        "id": "B",
        "text": "Vertebral artery (flow toward probe) and Superior cerebellar artery (flow away from probe)"
      },
      {
        "id": "C",
        "text": "Ophthalmic artery (flow toward probe) and Carotid siphon (flow away from probe)"
      },
      {
        "id": "D",
        "text": "Distal internal carotid artery only (flow away from probe)"
      },
      {
        "id": "E",
        "text": "Basilar artery (flow toward probe) and Vertebral artery (flow away from probe)"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Through the transtemporal window (anterior and superior to the pinna), the sound beam insonates: (1) Middle Cerebral Artery (MCA) at depth 30-60 mm with flow TOWARD the transducer (displayed above baseline); (2) Anterior Cerebral Artery (ACA, A1 segment) at depth 60-70 mm with flow AWAY from the transducer (displayed below baseline); (3) Posterior Cerebral Artery (PCA) at depth 60-75 mm, where P1 flows toward and P2 flows away from the transducer; and (4) Terminal ICA bifurcation at depth 55-65 mm (bidirectional). Vertebral and basilar arteries are examined through the transforaminal (suboccipital) window; ophthalmic and carotid siphon through the transorbital window.",
    "keyTakeaway": "Transtemporal TCD: MCA flows TOWARD probe (30-60mm); ACA flows AWAY from probe (60-70mm); PCA is bidirectional (60-75mm).",
    "tags": [
      "TCD",
      "Transtemporal Window",
      "Neurosonology",
      "Neuroradiology"
    ],
    "hint": "MCA flows toward the lateral skull probe, while the A1 segment branches medially away from the probe.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-60",
    "chapterId": 16,
    "chapterTitle": "Chapter 16: Neuroradiology & Neurovascular Imaging",
    "vignette": "A 58-year-old male with an acute left MCA stroke undergoes carotid duplex ultrasound. Examination of the left common carotid artery (CCA) shows a high-resistance 'thump' waveform with a sharp systolic spike and complete reversal/absence of diastolic forward flow. No flow is detected in the internal carotid artery (ICA).",
    "question": "What does this high-resistance, low-diastolic waveform in the common carotid artery indicate?",
    "options": [
      {
        "id": "A",
        "text": "Severe aortic regurgitation"
      },
      {
        "id": "B",
        "text": "Normal intracranial low-resistance cerebrovascular bed"
      },
      {
        "id": "C",
        "text": "Subclavian steal syndrome"
      },
      {
        "id": "D",
        "text": "Extracranial-intracranial bypass patency"
      },
      {
        "id": "E",
        "text": "Complete occlusion of the internal carotid artery with absence of low-resistance forward intracranial flow"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Normally, the brain is a low-resistance vascular bed, so the internal carotid artery exhibits continuous forward flow during both systole and diastole (high end-diastolic velocity). The external carotid artery supplies high-resistance muscles and skin, exhibiting sharp systolic peaks and low/absent diastolic flow. The common carotid artery normally carries a hybrid low-resistance waveform. When the internal carotid artery is completely occluded, the CCA loses its low-resistance intracranial outlet, converting its waveform into a purely high-resistance, 'stump thump' pattern with absent or reversed diastolic flow.",
    "keyTakeaway": "Carotid occlusion: CCA develops high-resistance waveform with absent/reversed diastolic flow ('stump thump').",
    "tags": [
      "Carotid Duplex",
      "Carotid Occlusion",
      "Waveform",
      "Neurosonology"
    ],
    "hint": "When the low-resistance ICA pathway is closed, the CCA takes on the high-resistance profile of the external carotid bed.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-61",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 68-year-old male with an acute right hemispheric ischemic stroke presents within 2 hours. His medical history includes hypertension, for which he takes amlodipine, and a history of a hip fracture 2 years ago.",
    "question": "Which of the following is considered an absolute contraindication to intravenous alteplase (tPA) according to official FDA and AHA/ASA guidelines?",
    "options": [
      {
        "id": "A",
        "text": "Recent major non-cardiac surgery 21 days ago"
      },
      {
        "id": "B",
        "text": "Age greater than 80 years in a 2-hour window"
      },
      {
        "id": "C",
        "text": "Current or prior intracranial hemorrhage"
      },
      {
        "id": "D",
        "text": "Arterial puncture at a noncompressible site 5 days ago"
      },
      {
        "id": "E",
        "text": "Concurrent treatment with daily aspirin 325 mg"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Current or historical intraparenchymal hemorrhage, subarachnoid hemorrhage, active internal bleeding, recent (within 3 months) serious head trauma or intracranial/intraspinal surgery, severe uncontrolled hypertension (>185/110 mmHg unresponsive to medication), and known bleeding diatheses (platelets <100,000, INR >1.7, aPTT >40s, or therapeutic DOAC use within 48h) are absolute contraindications. Major surgery within 14 days and noncompressible arterial puncture have been revised to relative contraindications, requiring individualized risk-benefit assessment.",
    "keyTakeaway": "Prior or active intracranial hemorrhage is an absolute contraindication to IV thrombolysis.",
    "tags": [
      "tPA Contraindications",
      "Acute Stroke",
      "Safety"
    ],
    "hint": "Any prior bleeding within the brain parenchyma or subarachnoid space permanently excludes standard IV lytics.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-62",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 73-year-old female presents with acute difficulty reading. When handed a newspaper, she cannot read any sentences or words, but when asked to write a letter to her daughter, she writes a grammatically correct paragraph with flawless spelling. Neuro-ophthalmologic exam confirms a dense right homonymous hemianopia.",
    "question": "Where does visual information normally cross from the right occipital cortex to the left angular gyrus language comprehension center?",
    "options": [
      {
        "id": "A",
        "text": "Fornix"
      },
      {
        "id": "B",
        "text": "Splenium of the corpus callosum"
      },
      {
        "id": "C",
        "text": "Anterior commissure"
      },
      {
        "id": "D",
        "text": "Optic chiasm"
      },
      {
        "id": "E",
        "text": "Genu of the corpus callosum"
      }
    ],
    "correctOptionId": "B",
    "explanation": "In alexia without agraphia (Dejerine syndrome), visual information received by the intact right occipital visual cortex cannot reach the language comprehension areas (left angular gyrus) because transcallosal visual fibers traversing the splenium of the corpus callosum are destroyed, while an infarct of the left calcarine cortex causes the right homonymous hemianopia. Motor writing systems (Exner's area and left premotor cortex) and Broca's area remain connected to language networks, allowing normal spontaneous writing.",
    "keyTakeaway": "Alexia without agraphia: Disconnection of the splenium of the corpus callosum + left occipital visual cortex.",
    "tags": [
      "Alexia without Agraphia",
      "Splenium",
      "Corpus Callosum",
      "Neuroanatomy"
    ],
    "hint": "The posterior-most portion of the corpus callosum that carries interhemispheric visual fibers.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-63",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 62-year-old male with an acute pontine stroke has an examination showing that upon attempted left horizontal gaze, the left eye abducts normally with fine horizontal nystagmus, while the right eye fails to adduct past the midline. Convergence of both eyes is fully preserved.",
    "question": "What is this ocular motility defect, and what brainstem pathway is damaged?",
    "options": [
      {
        "id": "A",
        "text": "Oculomotor nerve palsy; third cranial nerve nucleus"
      },
      {
        "id": "B",
        "text": "Right Internuclear Ophthalmoplegia (INO); lesion of the right Medial Longitudinal Fasciculus (MLF)"
      },
      {
        "id": "C",
        "text": "One-and-a-half syndrome; paramedian pontine reticular formation"
      },
      {
        "id": "D",
        "text": "Abducens nerve palsy; sixth cranial nerve fascicle"
      },
      {
        "id": "E",
        "text": "Left INO; lesion of the left MLF"
      }
    ],
    "correctOptionId": "B",
    "explanation": "An internuclear ophthalmoplegia (INO) is named according to the side of the adduction deficit. Failure of the RIGHT eye to adduct on left horizontal gaze with nystagmus of the abducting left eye indicates a lesion in the RIGHT Medial Longitudinal Fasciculus (MLF), which connects the contralateral abducens nucleus to the ipsilateral oculomotor medial rectus subnucleus. Because convergence pathways bypass the MLF, adduction during convergence is classically preserved.",
    "keyTakeaway": "Right INO = Impaired adduction of the right eye with contralateral abduction nystagmus; lesion in the right MLF.",
    "tags": [
      "INO",
      "MLF",
      "Neuro-Ophthalmology",
      "Brainstem"
    ],
    "hint": "The INO is named for the paretic eye that fails to adduct.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-64",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 58-year-old female presents with acute vertigo and ataxia. Eye movement testing demonstrates that upon attempted horizontal gaze in either direction, neither eye can move to the right, and on left gaze, the right eye fails to adduct while the left eye abducts with nystagmus.",
    "question": "What is this complex ocular motor syndrome, and what combined neuroanatomical structures are damaged in the pons?",
    "options": [
      {
        "id": "A",
        "text": "Bilateral sixth nerve palsies"
      },
      {
        "id": "B",
        "text": "Progressive supranuclear palsy"
      },
      {
        "id": "C",
        "text": "Bilateral internuclear ophthalmoplegia"
      },
      {
        "id": "D",
        "text": "One-and-a-half syndrome; lesion of the ipsilateral PPRF (or abducens nucleus) PLUS ipsilateral MLF"
      },
      {
        "id": "E",
        "text": "Parinaud dorsal midbrain syndrome"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The 'one-and-a-half syndrome' consists of a complete conjugate horizontal gaze palsy in one direction ('one') plus an internuclear ophthalmoplegia on gaze in the opposite direction ('half'). It results from a unilateral pontine lesion involving both the ipsilateral Paramedian Pontine Reticular Formation (PPRF) or abducens nucleus (causing the full ipsilateral conjugate gaze palsy) AND the adjacent ipsilateral Medial Longitudinal Fasciculus (MLF, causing the adduction deficit on contralateral gaze). The only remaining horizontal movement is abduction of the contralateral eye.",
    "keyTakeaway": "One-and-a-half syndrome = Unilateral PPRF/CN VI nucleus lesion + ipsilateral MLF in the dorsal pontine tegmentum.",
    "tags": [
      "One-and-a-Half Syndrome",
      "PPRF",
      "MLF",
      "Neuro-Ophthalmology"
    ],
    "hint": "Combines a lateral conjugate gaze palsy with an internuclear ophthalmoplegia.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-65",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 64-year-old female presents with acute right-sided weakness, impaired sensation, and dyscalculia. On testing, she cannot perform simple subtraction (acalculia), cannot distinguish her left from right hand, cannot identify her fingers (finger agnosia), and cannot write her signature or name (agraphia).",
    "question": "What classical syndrome is present, and where is the responsible cortical lesion located?",
    "options": [
      {
        "id": "A",
        "text": "Korsakoff syndrome; bilateral mammillary bodies"
      },
      {
        "id": "B",
        "text": "Balint syndrome; bilateral posterior parietal cortex"
      },
      {
        "id": "C",
        "text": "Gerstmann syndrome; dominant (left) angular gyrus (inferior parietal lobule)"
      },
      {
        "id": "D",
        "text": "Wernicke-Korsakoff syndrome; medial thalami"
      },
      {
        "id": "E",
        "text": "Anton syndrome; bilateral occipital cortex"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Gerstmann syndrome consists of the tetrad of: 1. Agraphia (dysgraphia), 2. Acalculia, 3. Finger agnosia, and 4. Right-left disorientation. It localizes precisely to the inferior parietal lobule of the dominant hemisphere, specifically the left angular gyrus (Brodmann area 39). It is typically caused by an ischemic stroke in the territory of the angular branch of the left middle cerebral artery.",
    "keyTakeaway": "Gerstmann syndrome tetrad (Agraphia, Acalculia, Finger agnosia, Right-left disorientation) = Dominant angular gyrus lesion.",
    "tags": [
      "Gerstmann Syndrome",
      "Angular Gyrus",
      "Acalculia",
      "Agraphia"
    ],
    "hint": "Dominant inferior parietal lobule lesion causing numerical and body schema confusion.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-66",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 70-year-old male status post bilateral watershed infarctions between the MCA and PCA territories presents with impaired visual behavior. When reaching for a coffee cup, his hand misses it wildly (optic ataxia); he cannot look voluntarily from one object to another (ocular apraxia); and when shown a picture of a crowded street, he can only see one car and misses the rest of the scene (simultanagnosia).",
    "question": "What syndrome is present, and what is its neuroanatomical localization?",
    "options": [
      {
        "id": "A",
        "text": "Gerstmann syndrome; dominant angular gyrus"
      },
      {
        "id": "B",
        "text": "Capgras delusion; right frontal lobe"
      },
      {
        "id": "C",
        "text": "Dejerine-Roussy syndrome; posterolateral thalamus"
      },
      {
        "id": "D",
        "text": "Anton syndrome; bilateral primary visual calcarine cortex"
      },
      {
        "id": "E",
        "text": "Balint syndrome; bilateral posterior parietal-occipital watershed cortex"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Balint syndrome consists of the classical triad of: 1. Simultanagnosia (inability to perceive the visual field as a whole, seeing only one object at a time), 2. Optic ataxia (impaired visual guidance of manual reaching), and 3. Ocular apraxia (inability to initiate voluntary saccades to visual targets). It is classically produced by bilateral border-zone (watershed) infarctions involving the posterior parietal and occipital lobes following severe systemic hypotension, cardiac arrest, or bilateral posterior circulation emboli.",
    "keyTakeaway": "Balint syndrome triad (Simultanagnosia, Optic ataxia, Ocular apraxia) = Bilateral parieto-occipital watershed infarctions.",
    "tags": [
      "Balint Syndrome",
      "Simultanagnosia",
      "Watershed Infarct",
      "Neuro-Ophthalmology"
    ],
    "hint": "Triad of optic ataxia, ocular apraxia, and simultanagnosia from bilateral border-zone strokes.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-67",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "An 82-year-old female presents with acute bilateral visual loss following cardiac catheterization. When tested in the clinic, she denies that she is blind, describing imaginary hospital staff and insisting the lights in the room are merely turned off. Her pupils are 3 mm and briskly reactive to direct and consensual light.",
    "question": "What is the diagnosis, and why are her pupillary light reflexes preserved?",
    "options": [
      {
        "id": "A",
        "text": "Acute bilateral ischemic optic neuropathy; spared Edinger-Westphal nuclei"
      },
      {
        "id": "B",
        "text": "Anton syndrome (visual anosognosia); bilateral occipital lobe infarction spares the pretectal pupillary light reflex arc"
      },
      {
        "id": "C",
        "text": "Functional conversion disorder; normal pathways"
      },
      {
        "id": "D",
        "text": "Bilateral central retinal artery occlusion with cilioretinal sparing"
      },
      {
        "id": "E",
        "text": "Pituitary apoplexy with chiasmal compression"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Anton syndrome (visual anosognosia or cortical blindness with denial of deficit) occurs when bilateral visual calcarine cortices in the occipital lobes are infarcted (typically from basilar apex occlusion or 'top of the basilar' emboli). The patient is completely blind but adamantly denies the deficit and confabulates visual descriptions. Crucially, because the pupillary light reflex fibers leave the optic tract anteriorly to synapse in the midbrain pretectal nuclei, the afferent and efferent pupillary reflex arc is entirely spared in cortical blindness, resulting in normal pupillary light reactions.",
    "keyTakeaway": "Anton syndrome = Cortical blindness with denial of deficit (anosognosia) due to bilateral occipital infarcts; pupillary light reflexes are NORMAL.",
    "tags": [
      "Anton Syndrome",
      "Cortical Blindness",
      "Anosognosia",
      "Pupillary Reflex"
    ],
    "hint": "Bilateral calcarine infarction spares the subcortical midbrain pupillary light reflex arc.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-68",
    "chapterId": 5,
    "chapterTitle": "Chapter 5: Epidemiology & Risk Factors",
    "vignette": "A public health epidemiologist analyzes worldwide stroke burden data from the Global Burden of Disease and INTERSTROKE studies.",
    "question": "Which of the following statements regarding the global epidemiology of stroke is correct?",
    "options": [
      {
        "id": "A",
        "text": "Stroke is currently the leading cause of death in the United States"
      },
      {
        "id": "B",
        "text": "Extracranial carotid atherosclerosis is the most common cause of ischemic stroke worldwide"
      },
      {
        "id": "C",
        "text": "Intracranial atherosclerosis is the most common cause of ischemic stroke worldwide, particularly prevalent in Asian, Hispanic, and African populations"
      },
      {
        "id": "D",
        "text": "Fewer than 30% of all strokes worldwide are attributable to modifiable risk factors"
      },
      {
        "id": "E",
        "text": "Air pollution has no measurable correlation with stroke incidence"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Intracranial atherosclerosis (ICAD) is the single most common cause of ischemic stroke worldwide, accounting for up to 30% to 50% of strokes in Asian countries (China, Korea, Japan, South Asia), as well as significant proportions in Black and Hispanic populations. Given the massive populations of these demographic groups, intracranial disease represents the predominant global vascular burden, whereas extracranial carotid disease is more prevalent in Western Caucasian populations. The INTERSTROKE study showed that 10 modifiable risk factors account for ~90% of stroke risk worldwide.",
    "keyTakeaway": "Intracranial atherosclerosis is the MOST COMMON cause of ischemic stroke worldwide (accounting for up to 50% in Asian populations).",
    "tags": [
      "Epidemiology",
      "Intracranial Atherosclerosis",
      "Global Burden"
    ],
    "hint": "Large population centers in Asia make this intracranial large-vessel disease the most prevalent globally.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-69",
    "chapterId": 5,
    "chapterTitle": "Chapter 5: Epidemiology & Risk Factors",
    "vignette": "A 28-year-old female who smokes one pack of cigarettes per day is prescribed an estrogen-containing oral contraceptive pill.",
    "question": "What is the synergistic impact of combining cigarette smoking and estrogen-containing oral contraceptives on the relative risk of ischemic and hemorrhagic stroke?",
    "options": [
      {
        "id": "A",
        "text": "The combination increases hemorrhagic stroke only, with no effect on ischemic stroke"
      },
      {
        "id": "B",
        "text": "The combination poses no vascular risk in women under age 35"
      },
      {
        "id": "C",
        "text": "The combination synergistically increases the risk of ischemic stroke by approximately 7.2-fold and hemorrhagic stroke by 3.7-fold"
      },
      {
        "id": "D",
        "text": "Oral contraceptives protect against the endothelial damage caused by smoking"
      },
      {
        "id": "E",
        "text": "Smoking and oral contraceptives have an additive effect only, increasing stroke risk by 10%"
      }
    ],
    "correctOptionId": "C",
    "explanation": "While cigarette smoking independently doubles stroke risk and oral contraceptives confer a modest increase in thrombotic risk, their combination has a profound, multiplicative (synergistic) effect. Studies documented in AHA/ASA prevention guidelines show that women who smoke and use oral contraceptives have a 7.2-fold higher relative risk of ischemic stroke and a 3.7-fold higher risk of hemorrhagic stroke compared to non-smoking non-users. Estrogen-containing contraceptives are contraindicated in women who smoke and are >=35 years old.",
    "keyTakeaway": "Smoking + Oral Contraceptives synergistically increase ischemic stroke risk by 7.2x and hemorrhagic stroke risk by 3.7x.",
    "tags": [
      "Smoking",
      "Oral Contraceptives",
      "Synergy",
      "Epidemiology"
    ],
    "hint": "The combination multiplies risk far beyond simple addition.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-70",
    "chapterId": 5,
    "chapterTitle": "Chapter 5: Epidemiology & Risk Factors",
    "vignette": "A 64-year-old asymptomatic male has a completely occluded right internal carotid artery discovered incidentally on carotid duplex.",
    "question": "According to meta-analyses of asymptomatic carotid occlusion, what is the annual risk of ipsilateral ischemic stroke, and what is the primary cause of mortality in these patients?",
    "options": [
      {
        "id": "A",
        "text": "Annual ipsilateral stroke risk is 0%; these patients have zero future stroke risk"
      },
      {
        "id": "B",
        "text": "Annual ipsilateral stroke risk is 15%; majority of deaths are due to fatal cerebral herniation"
      },
      {
        "id": "C",
        "text": "Annual ipsilateral stroke risk is 25%; emergency bypass surgery is mandated"
      },
      {
        "id": "D",
        "text": "Annual ipsilateral stroke risk is ~1.3%; majority of deaths are due to coronary artery disease"
      },
      {
        "id": "E",
        "text": "Annual ipsilateral stroke risk is 8%; primary mortality is cancer"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Meta-analyses demonstrate that patients with asymptomatic carotid artery occlusion have a relatively low annual risk of ipsilateral ischemic stroke (approximately 1.3% per year, and 2.0% for any stroke). However, they have a substantial annual mortality of 7.7%, with more than half of all deaths caused by coronary artery disease and myocardial infarction. Therefore, invasive revascularization (such as EC-IC bypass) is not indicated, and management focuses on aggressive medical therapy and cardiac risk stratification.",
    "keyTakeaway": "Asymptomatic carotid occlusion carries a low annual stroke risk (~1.3%/yr); the primary mortality threat is coronary artery disease.",
    "tags": [
      "Carotid Occlusion",
      "Asymptomatic",
      "Prognosis",
      "Epidemiology"
    ],
    "hint": "The low stroke risk does not justify surgical bypass; cardiovascular death from CAD is the main danger.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-71",
    "chapterId": 9,
    "chapterTitle": "Chapter 9: Clinical Cardiology & Stroke",
    "vignette": "A 62-year-old female with persistent atrial fibrillation undergoes electrical cardioversion to normal sinus rhythm.",
    "question": "What is the incidence of embolic stroke associated with cardioversion in patients with atrial fibrillation who are NOT anticoagulated?",
    "options": [
      {
        "id": "A",
        "text": "50%"
      },
      {
        "id": "B",
        "text": "0%, cardioversion never causes stroke"
      },
      {
        "id": "C",
        "text": "25%"
      },
      {
        "id": "D",
        "text": "<0.1%"
      },
      {
        "id": "E",
        "text": "Approximately 5%"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Without therapeutic anticoagulation, cardioversion (either electrical or pharmacologic) of atrial fibrillation is associated with approximately a 5% risk of thromboembolism and embolic stroke. When sinus rhythm is restored, the stunned fibrillating atrium recovers contractile function and expels pre-existing or freshly formed thrombi from the left atrial appendage into the systemic circulation. Therefore, guidelines mandate at least 3 weeks of therapeutic anticoagulation prior to cardioversion and continued for at least 4 weeks post-procedure, regardless of baseline CHA2DS2-VASc score.",
    "keyTakeaway": "Unanticoagulated cardioversion in atrial fibrillation carries a ~5% risk of embolic stroke due to atrial stunning and thrombus expulsion.",
    "tags": [
      "Cardioversion",
      "Atrial Fibrillation",
      "Stroke Risk",
      "Cardiology"
    ],
    "hint": "About 1 in 20 patients will suffer an embolic stroke without anticoagulation.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-72",
    "chapterId": 9,
    "chapterTitle": "Chapter 9: Clinical Cardiology & Stroke",
    "vignette": "A 48-year-old male with an acute embolic ischemic stroke has a high-grade fever, splinter hemorrhages, and a new systolic murmur. TEE demonstrates a 14 mm mobile mass on the anterior leaflet of the mitral valve. Blood cultures grow Staphylococcus aureus.",
    "question": "What is the guideline-directed management regarding intravenous thrombolysis (tPA) and full-dose anticoagulation in acute stroke secondary to infective endocarditis?",
    "options": [
      {
        "id": "A",
        "text": "Endovascular thrombectomy is absolutely contraindicated in all endocarditis cases"
      },
      {
        "id": "B",
        "text": "Both IV thrombolysis and therapeutic anticoagulation are contraindicated due to high risk of fatal hemorrhagic transformation and mycotic aneurysm rupture"
      },
      {
        "id": "C",
        "text": "Full-dose heparin is indicated to dissolve septic emboli"
      },
      {
        "id": "D",
        "text": "Dual antiplatelet therapy should be given as emergency treatment"
      },
      {
        "id": "E",
        "text": "IV alteplase and full-dose heparin are both first-line therapies"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Infective endocarditis with stroke carries a very high propensity for severe hemorrhagic transformation, septic arteritis, and rupture of distal mycotic aneurysms. Intravenous thrombolysis (tPA) is contraindicated due to an unacceptably high rate of fatal intracerebral hemorrhage (mortality >20% in registry studies). Full-dose anticoagulation is also contraindicated in native valve infective endocarditis. Treatment consists of appropriate IV bactericidal antibiotics and evaluation for early surgical valve repair/replacement. Mechanical thrombectomy can be considered selectively for emergent LVO.",
    "keyTakeaway": "Infective endocarditis stroke: Both IV tPA and therapeutic anticoagulation are CONTRAINDICATED due to high fatal hemorrhage risk.",
    "tags": [
      "Infective Endocarditis",
      "tPA Contraindications",
      "Anticoagulation",
      "Cardiology"
    ],
    "hint": "Septic emboli inflame vessel walls, making both lytics and full anticoagulation extremely dangerous.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-73",
    "chapterId": 11,
    "chapterTitle": "Chapter 11: Special Populations (Pediatric, Pregnancy & Young Adult)",
    "vignette": "A 7-year-old boy presents with acute right hemiparesis and facial weakness. Head CT is normal, but brain MRI DWI confirms an acute left internal capsule infarction.",
    "question": "What did the International Pediatric Stroke Study (IPSS) establish regarding the sensitivity of noncontrast CT compared to MRI in diagnosing pediatric acute ischemic stroke?",
    "options": [
      {
        "id": "A",
        "text": "Angiography is required before any MRI imaging can be attempted"
      },
      {
        "id": "B",
        "text": "CT is 95% sensitive and is the gold standard in children"
      },
      {
        "id": "C",
        "text": "Cranial ultrasound is more sensitive than both CT and MRI in school-aged children"
      },
      {
        "id": "D",
        "text": "Noncontrast CT misses more than 50% of acute ischemic strokes in children; MRI with DWI is the mandatory modality of choice"
      },
      {
        "id": "E",
        "text": "CT and MRI have identical sensitivity in children"
      }
    ],
    "correctOptionId": "D",
    "explanation": "In the International Pediatric Stroke Study (IPSS) and related pediatric stroke registries, initial noncontrast head CT was negative or unrevealing in over 50% of children with confirmed acute arterial ischemic stroke. Children frequently present with non-localizing symptoms (seizures, lethargy, irritability), and smaller lacunar or posterior fossa strokes are easily missed on CT. Brain MRI with DWI is the gold standard and essential imaging modality for rapid, accurate diagnosis in pediatric stroke.",
    "keyTakeaway": "Initial CT misses >50% of pediatric ischemic strokes; brain MRI with DWI is mandatory.",
    "tags": [
      "Pediatric Stroke",
      "IPSS",
      "MRI DWI",
      "Special Populations"
    ],
    "hint": "CT has very poor sensitivity in children, missing over half of acute infarcts.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-74",
    "chapterId": 11,
    "chapterTitle": "Chapter 11: Special Populations (Pediatric, Pregnancy & Young Adult)",
    "vignette": "An 8-year-old girl with a history of chickenpox 6 weeks prior presents with sudden left hemiparesis. MRA reveals focal narrowing and beading of the supraclinoid internal carotid artery and proximal M1 segment.",
    "question": "What is the diagnosis, and which laboratory assay in CSF provides the most sensitive confirmation of Varicella Zoster Virus (VZV) vasculopathy?",
    "options": [
      {
        "id": "A",
        "text": "Tzanck smear of skin scrapings"
      },
      {
        "id": "B",
        "text": "Serum VZV IgM only"
      },
      {
        "id": "C",
        "text": "Anti-VZV IgG and IgM antibody index in CSF"
      },
      {
        "id": "D",
        "text": "Viral culture of the nasopharynx"
      },
      {
        "id": "E",
        "text": "CSF VZV PCR"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Post-varicella arteriopathy (transient cerebral arteriopathy) typically occurs 2 to 6 weeks after primary varicella infection in children, when the virus travels transaxonally via the ophthalmic branch of the trigeminal nerve to infect the adventitia of intracranial arteries at the Circle of Willis. While CSF VZV PCR is frequently negative in late or subacute stages, measuring the CSF anti-VZV IgG/IgM antibody index (intrathecal antibody synthesis) has significantly higher sensitivity (>90%) for confirming VZV vasculopathy. Treatment is IV acyclovir and corticosteroids.",
    "keyTakeaway": "VZV vasculopathy: Anti-VZV antibody in CSF is MORE SENSITIVE than CSF PCR in subacute cases.",
    "tags": [
      "VZV Vasculopathy",
      "Pediatric Stroke",
      "CSF Antibody",
      "Special Populations"
    ],
    "hint": "PCR is often negative weeks after rash; look for locally synthesized antibodies in CSF.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-75",
    "chapterId": 11,
    "chapterTitle": "Chapter 11: Special Populations (Pediatric, Pregnancy & Young Adult)",
    "vignette": "A 9-month-old infant presents with macrocephaly, chronic subdural hematomas of varying ages, and retinal hemorrhages. The team investigates for abusive head trauma (shaken baby syndrome).",
    "question": "Which autosomal recessive metabolic disorder caused by glutaryl-CoA dehydrogenase deficiency can present with spontaneous subdural hematomas and macrocephaly, mimicking nonaccidental trauma?",
    "options": [
      {
        "id": "A",
        "text": "Phenylketonuria"
      },
      {
        "id": "B",
        "text": "Maple syrup urine disease"
      },
      {
        "id": "C",
        "text": "Niemann-Pick disease type C"
      },
      {
        "id": "D",
        "text": "Glutaric aciduria type 1 (GA1)"
      },
      {
        "id": "E",
        "text": "Gaucher disease"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Glutaric aciduria type 1 (GA1) is an autosomal recessive metabolic disorder of lysine, hydroxylysine, and tryptophan metabolism caused by deficiency of glutaryl-CoA dehydrogenase. It produces microencephalic macrocephaly, frontotemporal atrophy, and widening of the subarachnoid cerebrospinal fluid spaces. This anatomical stretching of bridging cortical veins predisposes to spontaneous or minimal-trauma subdural hematomas and retinal hemorrhages, frequently mimicking non-accidental abusive head trauma.",
    "keyTakeaway": "Glutaric aciduria type 1 (GA1) causes macrocephaly and spontaneous subdural hematomas, mimicking child abuse.",
    "tags": [
      "Glutaric Aciduria",
      "Subdural Hematoma",
      "Pediatrics",
      "Special Populations"
    ],
    "hint": "Enzyme defect leads to accumulation of glutaric acid and enlarged subarachnoid spaces with torn bridging veins.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-76",
    "chapterId": 16,
    "chapterTitle": "Chapter 16: Neuroradiology & Neurovascular Imaging",
    "vignette": "A 65-year-old male with an acute stroke undergoes dynamic susceptibility contrast CT perfusion (CTP). The perfusion maps show a region in the right temporal lobe with reduced Cerebral Blood Flow (CBF), prolonged Mean Transit Time (MTT), but preserved/elevated Cerebral Blood Volume (CBV).",
    "question": "What tissue state does this perfusion-volume mismatch pattern represent?",
    "options": [
      {
        "id": "A",
        "text": "Irreversibly infarcted ischemic core"
      },
      {
        "id": "B",
        "text": "Ischemic penumbra (potentially salvageable tissue at risk)"
      },
      {
        "id": "C",
        "text": "Normal autoregulated brain tissue"
      },
      {
        "id": "D",
        "text": "Luxury perfusion with hyperemic reperfusion"
      },
      {
        "id": "E",
        "text": "Intracranial venous hypertension"
      }
    ],
    "correctOptionId": "B",
    "explanation": "On perfusion imaging (CTP or MRP), the ischemic core is defined by severely reduced Cerebral Blood Volume (CBV <30% or <1.2 mL/100g) and severely reduced CBF, representing tissue where microvascular collapse and irreversible cell death have occurred. The ischemic penumbra is characterized by prolonged transit time (increased MTT or Tmax >6 seconds) and reduced CBF, but PRESERVED or elevated CBV due to compensatory autoregulatory vasodilation and leptomeningeal collateral inflow. A mismatch between CBV core and MTT hypoperfusion defines salvageable penumbral tissue.",
    "keyTakeaway": "Ischemic penumbra on perfusion imaging = Prolonged MTT + reduced CBF + PRESERVED or ELEVATED CBV (autoregulatory vasodilation).",
    "tags": [
      "CT Perfusion",
      "Ischemic Penumbra",
      "CBV",
      "MTT",
      "Neuroradiology"
    ],
    "hint": "Collateral vessels dilate to compensate, preserving tissue blood volume even as flow slows.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-77",
    "chapterId": 16,
    "chapterTitle": "Chapter 16: Neuroradiology & Neurovascular Imaging",
    "vignette": "A 40-year-old male with acute right MCA stroke undergoes Transcranial Doppler monitoring. The middle cerebral artery mean flow velocity is measured at 245 cm/s.",
    "question": "According to consensus neurosonology velocity criteria, what degree of MCA stenosis does a peak systolic velocity >210 to 280 cm/s represent?",
    "options": [
      {
        "id": "A",
        "text": "Brain death"
      },
      {
        "id": "B",
        "text": "Total occlusion"
      },
      {
        "id": "C",
        "text": "Mild stenosis"
      },
      {
        "id": "D",
        "text": "Normal velocity (no stenosis)"
      },
      {
        "id": "E",
        "text": "Moderate stenosis"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Normal MCA peak systolic velocity is generally <140 cm/s (mean velocity ~55-65 cm/s). On TCD: Mild stenosis produces a peak systolic velocity of 140 to 209 cm/s; Moderate stenosis produces a PSV of 210 to 280 cm/s; Severe stenosis produces a PSV >280 cm/s with significant increases in end-diastolic velocity. When stenosis progresses to critical near-occlusion, velocities fall sharply prior to total occlusion.",
    "keyTakeaway": "TCD MCA stenosis criteria: Mild = PSV 140-209 cm/s; Moderate = PSV 210-280 cm/s; Severe = PSV >280 cm/s.",
    "tags": [
      "TCD Stenosis Criteria",
      "Neurosonology",
      "Neuroradiology"
    ],
    "hint": "Velocities between 210 and 280 cm/s fall into the intermediate moderate stenosis category.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-78",
    "chapterId": 17,
    "chapterTitle": "Chapter 17: Vascular Cognitive Disorders",
    "vignette": "A 74-year-old hypertensive male has progressive cognitive decline with severe psychomotor slowing, apathy, executive dysfunction, and a wide-based, magnetic shuffling gait. Memory storage and recognition are relatively preserved compared to spontaneous free recall. Brain MRI shows extensive confluent periventricular leukoaraiosis and several subcortical lacunar infarcts.",
    "question": "What is the diagnosis, and which clinical feature distinguishes subcortical vascular dementia from Alzheimer's disease?",
    "options": [
      {
        "id": "A",
        "text": "Normal pressure hydrocephalus; absence of incontinence"
      },
      {
        "id": "B",
        "text": "Dementia with Lewy bodies; absence of hallucinations"
      },
      {
        "id": "C",
        "text": "Alzheimer's disease; rapid progression of rapid eye movement sleep disorder"
      },
      {
        "id": "D",
        "text": "Subcortical ischemic vascular dementia (Binswanger disease); prominent executive dysfunction, retrieval memory deficit with spared recognition, and early gait disorder"
      },
      {
        "id": "E",
        "text": "Frontotemporal dementia; hyperorality and disinhibition"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Subcortical ischemic vascular dementia (Binswanger disease / small vessel vascular dementia) results from lipohyalinosis and arteriolosclerosis of deep penetrating arterioles. It produces disruption of frontosubcortical circuits, manifesting as prominent dysexecutive syndrome, psychomotor slowing, apathy, and early gait apraxia ('vascular parkinsonism'). In contrast to Alzheimer's disease (which impairs memory storage and consolidation in the hippocampus), subcortical vascular dementia causes an executive retrieval deficit where memory improves with cues and recognition is preserved.",
    "keyTakeaway": "Subcortical vascular dementia = Frontosubcortical syndrome with executive dysfunction, retrieval deficit (spared recognition), and early gait impairment.",
    "tags": [
      "Vascular Dementia",
      "Binswanger",
      "Leukoaraiosis",
      "Cognitive Disorders"
    ],
    "hint": "Executive dysfunction with preserved recognition memory and early gait changes indicates subcortical frontostriatal disruption.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-79",
    "chapterId": 18,
    "chapterTitle": "Chapter 18: Stroke Rehabilitation",
    "vignette": "A stroke physiatrist is scoring post-stroke functional independence across different outcome metrics in clinical research.",
    "question": "Which of the following correctly pairs the stroke scale with its specific domain of measurement?",
    "options": [
      {
        "id": "A",
        "text": "Barthel Index: Cognitive and language impairment only; mRS: Acute stroke deficit severity"
      },
      {
        "id": "B",
        "text": "FIM: Primary screening for depression; GOS: Post-stroke spasticity"
      },
      {
        "id": "C",
        "text": "mRS: Visual acuity; NIHSS: Long-term quality of life"
      },
      {
        "id": "D",
        "text": "Stroke Impact Scale: Exclusively measures walking speed on treadmill"
      },
      {
        "id": "E",
        "text": "Barthel Index (BI): Basic activities of daily living (feeding, bathing, grooming, mobility; 0-100 scale); Modified Rankin Scale (mRS): Global disability and functional dependence (0-6 scale)"
      }
    ],
    "correctOptionId": "E",
    "explanation": "The Barthel Index (BI) is a 10-item instrument measuring independence in basic activities of daily living (ADLs: self-care, grooming, dressing, bowel/bladder, transfers, and mobility) scored from 0 to 100 (100 = completely independent). The modified Rankin Scale (mRS) is a 7-point scale (0 = no symptoms, 1 = no significant disability, 2 = slight disability [independent], 3 = moderate disability [requires assistance, walks unassisted], 4 = moderately severe [cannot walk without assistance], 5 = severe [bedridden], 6 = dead) used as the standard global disability endpoint in stroke trials.",
    "keyTakeaway": "Barthel Index = ADL independence (0-100); mRS = Global disability & handicap (0-6); NIHSS = Neurologic impairment (0-42).",
    "tags": [
      "Barthel Index",
      "mRS",
      "Stroke Scales",
      "Rehabilitation"
    ],
    "hint": "Barthel measures daily living tasks (100 is best), while Rankin measures overall disability (0 is best, 6 is death).",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-80",
    "chapterId": 18,
    "chapterTitle": "Chapter 18: Stroke Rehabilitation",
    "vignette": "A 42-year-old male with poststroke hemiplegia develops severe, painful flexor spasticity of the left wrist and fingers (Ashworth Grade 3), interfering with hygiene.",
    "question": "What is the mechanism of action of Botulinum toxin type A in treating post-stroke focal spasticity, and what is a crucial clinical contraindication?",
    "options": [
      {
        "id": "A",
        "text": "Inhibits presynaptic acetylcholine release at the neuromuscular junction; absolutely contraindicated in patients with myasthenia gravis"
      },
      {
        "id": "B",
        "text": "GABA-B receptor agonist; contraindicated in hypertension"
      },
      {
        "id": "C",
        "text": "Direct calcium release inhibitor from sarcoplasmic reticulum; contraindicated in heart block"
      },
      {
        "id": "D",
        "text": "Centrally acting NMDA antagonist; contraindicated in asthma"
      },
      {
        "id": "E",
        "text": "Alpha-2 adrenergic agonist; contraindicated in renal failure"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Botulinum toxin type A cleaves SNAP-25, a SNARE protein essential for synaptic vesicle fusion, thereby blocking the presynaptic release of acetylcholine at the neuromuscular junction. It is FDA-approved for focal upper and lower limb spasticity. Its effects are reversible, lasting 3 to 4 months. Because it causes neuromuscular blockade, it is absolutely contraindicated in patients with underlying neuromuscular junction disorders, specifically Myasthenia Gravis and Lambert-Eaton syndrome, as it can precipitate life-threatening myasthenic crisis.",
    "keyTakeaway": "Botulinum toxin blocks presynaptic acetylcholine release; FDA-approved for focal spasticity; CONTRAINDICATED in myasthenia gravis.",
    "tags": [
      "Botulinum Toxin",
      "Spasticity",
      "Myasthenia Gravis",
      "Rehabilitation"
    ],
    "hint": "Blocks acetylcholine release at motor endplates and worsens autoimmune neuromuscular junction disease.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-81",
    "chapterId": 9,
    "chapterTitle": "Chapter 9: Clinical Cardiology & Stroke",
    "vignette": "A 52-year-old immigrant from rural Bolivia presents with progressive shortness of breath and an acute left MCA ischemic stroke. Echocardiogram demonstrates biventricular dilated cardiomyopathy, apical left ventricular aneurysm with mural thrombus, and conduction system disease with right bundle branch block.",
    "question": "What is the causative organism, and what is the underlying diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Trypanosoma cruzi; Chagas disease"
      },
      {
        "id": "B",
        "text": "Borrelia burgdorferi; Lyme disease"
      },
      {
        "id": "C",
        "text": "Taenia solium; Neurocysticercosis"
      },
      {
        "id": "D",
        "text": "Toxoplasma gondii; Toxoplasmosis"
      },
      {
        "id": "E",
        "text": "Echinococcus granulosus; Hydatid disease"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Chronic Chagas disease (caused by the protozoan parasite Trypanosoma cruzi, endemic in Latin America) produces severe chronic cardiomyopathy characterized by biventricular enlargement, apical aneurysms (particularly left ventricular apex), mural thrombi, and progressive heart failure. Cardioembolism from apical thrombi is a major cause of ischemic stroke in patients from endemic areas.",
    "keyTakeaway": "Chagas disease (Trypanosoma cruzi) = Dilated cardiomyopathy with apical LV aneurysm, mural thrombus, and cardioembolic stroke.",
    "tags": [
      "Chagas Disease",
      "Cardioembolism",
      "Cardiology",
      "Special Populations"
    ],
    "hint": "Reduviid (kissing) bug vector transmits this protozoan causing American trypanosomiasis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-82",
    "chapterId": 13,
    "chapterTitle": "Chapter 13: Intracranial Hemorrhage (ICH)",
    "vignette": "A 62-year-old male with chronic hypertension is admitted to the neuro-ICU with an acute hypertensive thalamic hemorrhage. The stroke fellow calculates the ICH Score to estimate 30-day mortality.",
    "question": "Which of the following prognostic components is included in the validated 6-point ICH Score developed by Hemphill et al.?",
    "options": [
      {
        "id": "A",
        "text": "Presence of CTA spot sign and pupil reactivity"
      },
      {
        "id": "B",
        "text": "Hunt-Hess score and Fisher CT grade"
      },
      {
        "id": "C",
        "text": "Glasgow Coma Scale score, ICH volume (>=30 cc vs <30 cc), Intraventricular hemorrhage, Infratentorial origin, and Age (>=80 years)"
      },
      {
        "id": "D",
        "text": "Serum glucose, systolic blood pressure, and NIHSS score"
      },
      {
        "id": "E",
        "text": "Platelet count, INR, and time to hospital arrival"
      }
    ],
    "correctOptionId": "C",
    "explanation": "The ICH Score (0 to 6 points) predicts 30-day mortality after intracerebral hemorrhage based on: 1. GCS: 3-4 (2 pts), 5-12 (1 pt), 13-15 (0 pts); 2. ICH Volume: >=30 cm3 (1 pt), <30 cm3 (0 pts); 3. Intraventricular hemorrhage (IVH): Yes (1 pt), No (0 pts); 4. Infratentorial origin: Yes (1 pt), No (0 pts); 5. Age: >=80 years (1 pt), <80 years (0 pts). Mortality correlates directly: Score 0 (0%), Score 1 (13%), Score 2 (26%), Score 3 (72%), Score 4 (97%), and Scores 5-6 (100%).",
    "keyTakeaway": "ICH Score components: GCS (0-2), Volume >=30cc (1), IVH (1), Infratentorial (1), Age >=80 (1). Predicts 30-day mortality.",
    "tags": [
      "ICH Score",
      "Intracerebral Hemorrhage",
      "Prognosis",
      "Hemphill"
    ],
    "hint": "Remember the 5 parameters: GCS, volume cutoff 30cc, IVH, brainstem/cerebellar location, and age cutoff 80.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-83",
    "chapterId": 11,
    "chapterTitle": "Chapter 11: Special Populations (Pediatric, Pregnancy & Young Adult)",
    "vignette": "A 31-year-old female taking third-generation oral contraceptives presents with 10 days of progressive headache, bilateral papilledema, and a focal seizure. Brain MRI reveals superior sagittal sinus and left transverse sinus thrombosis with a small left temporal hemorrhagic venous infarction.",
    "question": "What is the guideline-directed initial treatment for acute cerebral venous thrombosis (CVT) presenting with hemorrhagic venous infarction?",
    "options": [
      {
        "id": "A",
        "text": "Intravenous high-dose dexamethasone"
      },
      {
        "id": "B",
        "text": "Full-dose therapeutic anticoagulation with subcutaneous LMWH or IV unfractionated heparin, even in the presence of hemorrhagic venous infarction"
      },
      {
        "id": "C",
        "text": "Aspirin 325 mg daily only"
      },
      {
        "id": "D",
        "text": "Immediate surgical craniotomy for clot evacuation"
      },
      {
        "id": "E",
        "text": "Withhold all anticoagulation due to the presence of intracranial hemorrhage"
      }
    ],
    "correctOptionId": "B",
    "explanation": "AHA/ASA and European stroke guidelines strongly recommend therapeutic anticoagulation (weight-based LMWH or IV unfractionated heparin) as the first-line therapy for acute cerebral venous thrombosis (CVT), EVEN in the presence of hemorrhagic venous infarction. The hemorrhage in CVT is caused by downstream venous hypertension and congestion; opening the venous outflow by preventing thrombus propagation relieves congestion and stops further hemorrhagic transformation. Anticoagulation is followed by oral anticoagulation for 3 to 6 months.",
    "keyTakeaway": "CVT first-line treatment is full therapeutic anticoagulation (LMWH/UFH), EVEN in the presence of hemorrhagic venous infarction.",
    "tags": [
      "CVT",
      "Cerebral Venous Thrombosis",
      "Anticoagulation",
      "Venous Infarct"
    ],
    "hint": "Counterintuitively, anticoagulation is safe and indicated because relieving venous congestion stops the bleeding.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-fj-84",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 44-year-old male presents with right facial pain and mild right ptosis and miosis following minor neck trauma. When testing pupillary responses in dark vs light, the anisocoria is most pronounced in dim light. Pharmacologic testing with topical 0.5% apraclonidine causes reversal of the anisocoria (dilation of the right pupil and narrowing of the left).",
    "question": "What is the diagnosis, and why does apraclonidine reverse anisocoria in Horner's syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Horner syndrome; denervation supersensitivity of alpha-1 adrenergic receptors on the paretic dilator pupillae muscle"
      },
      {
        "id": "B",
        "text": "Third nerve palsy; apraclonidine blocks parasympathetic tone"
      },
      {
        "id": "C",
        "text": "Argyll Robertson pupil; bilateral midbrain deafferentation"
      },
      {
        "id": "D",
        "text": "Physiologic anisocoria; symmetrical response"
      },
      {
        "id": "E",
        "text": "Adie tonic pupil; supersensitivity of muscarinic receptors"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Horner syndrome (oculosympathetic paresis: ptosis, miosis, anhidrosis) exhibits greater anisocoria in the dark because the paretic dilator muscle cannot dilate. Apraclonidine is a weak alpha-1 agonist and strong alpha-2 agonist. In a normal pupil, it has minimal dilating effect (alpha-2 predominates). In a Horner pupil, chronic loss of sympathetic innervation leads to denervation supersensitivity of alpha-1 receptors on the pupillary dilator muscle, causing the abnormal pupil to dilate widely and reverse the anisocoria (a positive apraclonidine test).",
    "keyTakeaway": "Horner syndrome: Apraclonidine causes reversal of anisocoria due to alpha-1 denervation supersensitivity in the affected eye.",
    "tags": [
      "Horner Syndrome",
      "Apraclonidine",
      "Neuro-Ophthalmology",
      "Autonomics"
    ],
    "hint": "Denervated pupil dilator receptors become hypersensitive to weak alpha-1 agonists.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-85",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 61-year-old female presents with acute severe vertigo, vomiting, right limb ataxia, right Horner syndrome, right facial numbness, and left body thermoanalgesia. On exam, she has prominent right lower motor neuron facial weakness and complete loss of hearing in her right ear.",
    "question": "Which cerebellar artery occlusion produces this specific combination of brainstem deficits (including deafness and peripheral facial palsy), differentiating it from Wallenberg syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Posterior Inferior Cerebellar Artery (PICA)"
      },
      {
        "id": "B",
        "text": "Anterior Spinal Artery (ASA)"
      },
      {
        "id": "C",
        "text": "Superior Cerebellar Artery (SCA)"
      },
      {
        "id": "D",
        "text": "Anterior Inferior Cerebellar Artery (AICA)"
      },
      {
        "id": "E",
        "text": "Posterior Cerebral Artery (PCA)"
      }
    ],
    "correctOptionId": "D",
    "explanation": "AICA (Anterior Inferior Cerebellar Artery) lateral pontine syndrome shares many features with PICA lateral medullary (Wallenberg) syndrome (ataxia, Horner syndrome, crossed sensory loss). However, AICA ischemia uniquely causes: (1) Sudden ipsilateral sensorineural deafness (due to internal auditory / labyrinthine artery infarction supplying the cochlea and inner ear), and (2) Ipsilateral lower motor neuron facial palsy (due to involvement of the CN VII nucleus/fascicle in the lateral caudal pons). In contrast, Wallenberg syndrome (PICA) features hoarseness/dysphagia (CN IX/X nucleus ambiguus) without deafness or full LMN facial palsy.",
    "keyTakeaway": "AICA vs PICA: AICA causes DEAFNESS (labyrinthine artery) and LMN FACIAL PALSY (CN VII), while PICA causes DYSPHAGIA/HOARSENESS (nucleus ambiguus).",
    "tags": [
      "AICA vs PICA",
      "Labyrinthine Artery",
      "Brainstem Syndromes"
    ],
    "hint": "The artery supplying the inner ear and lateral lower pons causes deafness and facial weakness.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-86",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 64-year-old male experiences left arm cramping and pain when performing repetitive overhead work, accompanied by transient vertigo and blurred vision. Examination reveals a 35 mmHg difference in systolic blood pressure between his right and left arm, and a left supraclavicular bruit.",
    "question": "What vascular syndrome is present, and what is the hemodynamic mechanism of his brainstem symptoms?",
    "options": [
      {
        "id": "A",
        "text": "Takayasu arteritis with coronary steal"
      },
      {
        "id": "B",
        "text": "Carotid steal syndrome; internal carotid occlusion draws flow from the external carotid"
      },
      {
        "id": "C",
        "text": "Raynaud phenomenon; distal digital vasospasm"
      },
      {
        "id": "D",
        "text": "Thoracic outlet syndrome; compression of the brachial plexus"
      },
      {
        "id": "E",
        "text": "Subclavian steal syndrome; left subclavian stenosis proximal to the left vertebral artery origin causes reversal of flow in the ipsilateral vertebral artery"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Subclavian steal syndrome occurs when severe stenosis or occlusion of the subclavian artery PROXIMAL to the origin of the vertebral artery drops pressure in the distal subclavian bed. During exercise of the ipsilateral arm, muscular vasodilation further lowers distal pressure, causing blood to flow retrogradely (reversed) down the ipsilateral vertebral artery away from the basilar system to supply the working arm. This 'steals' blood from the posterior cerebral circulation, triggering transient vertebrobasilar symptoms (vertigo, ataxia, diplopia). Diagnosis is confirmed by brachial BP asymmetry (>15-20 mmHg) and Doppler showing retrograde vertebral flow.",
    "keyTakeaway": "Subclavian steal = Proximal subclavian stenosis causes retrograde vertebral artery flow, arm claudication, and exercise-induced brainstem ischemia.",
    "tags": [
      "Subclavian Steal",
      "Vertebral Artery",
      "Hemodynamics",
      "Stroke Syndromes"
    ],
    "hint": "Blood is siphoned backwards down the vertebral artery to supply the exercising arm.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-87",
    "chapterId": 4,
    "chapterTitle": "Chapter 4: Stroke Syndromes",
    "vignette": "A 68-year-old male awakes with severe mid-thoracic back pain, followed immediately by complete flaccid paralysis of both legs and loss of pain and temperature sensation below T6. On sensory testing, light touch, vibration sense, and joint position sensation in both legs are entirely intact. He has acute urinary retention.",
    "question": "What spinal cord vascular syndrome is present, and why are vibration and proprioception preserved?",
    "options": [
      {
        "id": "A",
        "text": "Anterior spinal artery syndrome; the anterior two-thirds of the cord are infarcted, while the dorsal columns are perfused by the paired posterior spinal arteries"
      },
      {
        "id": "B",
        "text": "Central cord syndrome; selective cervical cavitation"
      },
      {
        "id": "C",
        "text": "Conus medullaris syndrome; isolated sacral nerve root compression"
      },
      {
        "id": "D",
        "text": "Brown-Sequard syndrome; hemisection of the thoracic cord"
      },
      {
        "id": "E",
        "text": "Posterior spinal artery syndrome; dorsal columns are infarcted"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Anterior Spinal Artery (ASA) syndrome involves infarction of the anterior two-thirds of the spinal cord (corticospinal tracts, spinothalamic tracts, anterior horn cells, and autonomic pathways). This produces acute paraplegia, loss of pain and temperature sensation below the lesion, autonomic instability, and neurogenic bladder. Crucially, the posterior columns (fasciculus gracilis and cuneatus) occupy the posterior third of the cord, which is perfused by the independent, paired Posterior Spinal Arteries (PSAs), resulting in characteristically preserved vibration and proprioception ('dissociated sensory loss').",
    "keyTakeaway": "Anterior spinal artery syndrome: Paraplegia + loss of pain/temp below lesion, with classic PRESERVATION of dorsal column vibration/proprioception.",
    "tags": [
      "Anterior Spinal Artery",
      "Spinal Cord Stroke",
      "Dorsal Columns"
    ],
    "hint": "The paired posterior spinal arteries spare the dorsal columns.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-88",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 69-year-old male presents to the ED with sudden, painless, complete loss of vision in the right eye that began 45 minutes ago. Funduscopy demonstrates retinal edema with an opaque milky retina and a bright cherry-red spot in the fovea.",
    "question": "What is the diagnosis, and which conservative emergency interventions are commonly attempted to dislodge the embolus into distal arterioles?",
    "options": [
      {
        "id": "A",
        "text": "Retinal detachment; urgent laser photocoagulation"
      },
      {
        "id": "B",
        "text": "Central retinal vein occlusion; intravitreal triamcinolone"
      },
      {
        "id": "C",
        "text": "Nonarteritic anterior ischemic optic neuropathy; high-dose oral prednisone"
      },
      {
        "id": "D",
        "text": "Optic neuritis; IV methylprednisolone"
      },
      {
        "id": "E",
        "text": "Central retinal artery occlusion (CRAO); ocular digital massage, anterior chamber paracentesis, and intraocular pressure-lowering agents"
      }
    ],
    "correctOptionId": "E",
    "explanation": "Central Retinal Artery Occlusion (CRAO) is an ophthalmologic and neurovascular emergency equivalent to an acute stroke of the retina. The retina becomes pale and milky due to cellular edema, while the choroidal vascular bed shows through the thin fovea as a 'cherry-red spot'. Conservative measures to lower intraocular pressure and encourage embolic migration to more distal branches include: ocular digital massage, anterior chamber paracentesis, topical beta-blockers, IV acetazolamide, or sublingual nitroglycerin. Urgent systemic evaluation for carotid stenosis and cardiac embolic sources is mandatory.",
    "keyTakeaway": "CRAO ('stroke of the eye') = Sudden painless vision loss + cherry-red spot; treated with ocular massage and intraocular pressure reduction.",
    "tags": [
      "CRAO",
      "Cherry-Red Spot",
      "Ocular Massage",
      "Neuro-Ophthalmology"
    ],
    "hint": "Painless sudden monocular blindness with cherry-red fovea.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-89",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 71-year-old male with hypertension and diabetes presents with subacute blurring and foggy vision in his left eye over several days. Fundus examination reveals diffuse flame-shaped hemorrhages, dilated tortuous retinal veins, and cotton-wool exudates throughout all four quadrants ('blood and thunder' fundus).",
    "question": "What is the diagnosis, and what is a frequent late vision-threatening complication?",
    "options": [
      {
        "id": "A",
        "text": "Giant cell arteritis; ischemic optic neuropathy"
      },
      {
        "id": "B",
        "text": "Central retinal artery occlusion; optic nerve atrophy"
      },
      {
        "id": "C",
        "text": "Hypertensive retinopathy Grade IV; choroidal detachment"
      },
      {
        "id": "D",
        "text": "Central retinal vein occlusion (CRVO); neovascular glaucoma"
      },
      {
        "id": "E",
        "text": "Cytomegalovirus retinitis; retinal necrosis"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Central Retinal Vein Occlusion (CRVO) is caused by thrombosis of the central retinal vein at the lamina cribrosa, resulting in severe venous engorgement, diffuse retinal edema, and extensive flame and blot hemorrhages across all four quadrants (the classic 'blood and thunder' appearance). Unlike CRAO, onset is often subacute over days. A major late complication (typically within 3 months, '90-day glaucoma') is iris and angle neovascularization triggered by retinal ischemia, which can precipitate intractable neovascular glaucoma.",
    "keyTakeaway": "CRVO = 'Blood and thunder' fundus with diffuse hemorrhages; carries high risk of late neovascular glaucoma.",
    "tags": [
      "CRVO",
      "Blood and Thunder",
      "Neovascular Glaucoma",
      "Neuro-Ophthalmology"
    ],
    "hint": "Venous occlusion produces extensive hemorrhages and late neovascularization.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-90",
    "chapterId": 8,
    "chapterTitle": "Chapter 8: Acute Stroke Management & Secondary Prevention",
    "vignette": "A 52-year-old male undergoes a 9-hour complex multilevel lumbar spinal fusion in the prone position with significant intraoperative blood loss (2.5 L) and prolonged systemic hypotension. Upon awakening in the recovery unit, he notes bilateral, painless loss of vision. Funduscopic examination on postoperative day 1 is completely normal.",
    "question": "What is the most likely diagnosis of this patient's postoperative vision loss?",
    "options": [
      {
        "id": "A",
        "text": "Posterior ischemic optic neuropathy (PION)"
      },
      {
        "id": "B",
        "text": "Pituitary apoplexy"
      },
      {
        "id": "C",
        "text": "Cortical blindness from occipital infarcts"
      },
      {
        "id": "D",
        "text": "Central retinal artery occlusion from fat emboli"
      },
      {
        "id": "E",
        "text": "Anterior ischemic optic neuropathy (AION)"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Posterior Ischemic Optic Neuropathy (PION) affects the retrobulbar optic nerve, which receives blood from a pial capillary plexus rather than the short posterior ciliary arteries. Perioperative PION is strongly associated with prolonged spine surgery in the prone position (due to increased orbital venous pressure from dependent head positioning), combined with anemia, hypotension, and large volume fluid resuscitation. Crucially, because the ischemia is retrobulbar, the optic disc appears completely normal on funduscopy during the acute stage, progressing to optic atrophy weeks later.",
    "keyTakeaway": "Perioperative PION = Prone spine surgery + hypotension/blood loss; acute funduscopy is NORMAL (retrobulbar ischemia).",
    "tags": [
      "PION",
      "Perioperative Vision Loss",
      "Spine Surgery",
      "Neuro-Ophthalmology"
    ],
    "hint": "Infarction of the retrobulbar optic nerve leaves the optic disc looking normal initially.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-91",
    "chapterId": 7,
    "chapterTitle": "Chapter 7: Classification of Stroke & Vasculopathy",
    "vignette": "A 26-year-old Asian woman presents with malaise, fever, weight loss, and exercise-induced claudication of her upper extremities. On physical exam, radial pulses are absent bilaterally ('pulseless disease'), and systolic blood pressure is 85/50 mmHg in the right arm and 145/85 mmHg in the right leg. ESR is 88 mm/h.",
    "question": "What chronic large-vessel inflammatory vasculitis is present, and what is the primary medical therapy?",
    "options": [
      {
        "id": "A",
        "text": "Giant cell arteritis; methotrexate monotherapy"
      },
      {
        "id": "B",
        "text": "Fibromuscular dysplasia; balloon angioplasty"
      },
      {
        "id": "C",
        "text": "Kawasaki disease; IVIG and aspirin"
      },
      {
        "id": "D",
        "text": "Takayasu arteritis; high-dose corticosteroids (prednisone 1 mg/kg/day)"
      },
      {
        "id": "E",
        "text": "Polyarteritis nodosa; cyclophosphamide only"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Takayasu arteritis ('pulseless disease') is a chronic granulomatous large-vessel vasculitis predominantly affecting young females (<40 years, highest in Asian populations). It causes progressive transmural inflammation and luminal stenoses of the aorta, aortic arch branch vessels (subclavian, common carotid), and pulmonary arteries. Hallmarks include absent upper extremity pulses, discrepancy in BP between arms (>10 mmHg) or between arms and legs, bruits, and constitutional symptoms. Initial treatment is high-dose corticosteroids, with methotrexate or biologics (anti-TNF, tocilizumab) for refractory disease.",
    "keyTakeaway": "Takayasu arteritis = Granulomatous aortitis in young women; absent pulses ('pulseless disease'), treated with corticosteroids.",
    "tags": [
      "Takayasu",
      "Large Vessel Vasculitis",
      "Pulseless Disease"
    ],
    "hint": "Young Asian female with absent arm pulses and aortic branch stenoses.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-92",
    "chapterId": 7,
    "chapterTitle": "Chapter 7: Classification of Stroke & Vasculopathy",
    "vignette": "A 48-year-old male with chronic hepatitis B presents with foot drop and wrist drop in a multifocal distribution (mononeuritis multiplex), fever, testicular pain, livedo reticularis, and renal infarction without glomerulonephritis.",
    "question": "What is the diagnosis, and which characteristic finding on visceral angiography confirms the disease?",
    "options": [
      {
        "id": "A",
        "text": "Granulomatosis with polyangiitis; c-ANCA pulmonary cavitary lesions"
      },
      {
        "id": "B",
        "text": "Polyarteritis nodosa (PAN); multiple microaneurysms and smooth segmental stenoses in mesenteric or renal arteries"
      },
      {
        "id": "C",
        "text": "Cryoglobulinemic vasculitis; low C4 complement levels"
      },
      {
        "id": "D",
        "text": "Microscopic polyangiitis; diffuse capillaritis"
      },
      {
        "id": "E",
        "text": "Henoch-Schonlein purpura; IgA glomerular deposition"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Polyarteritis nodosa (PAN) is a systemic necrotizing vasculitis of medium-sized muscular arteries that spares the pulmonary circulation and does NOT cause glomerulonephritis. It is strongly associated with hepatitis B infection. Hallmarks include mononeuritis multiplex (ischemic nerve infarction), hypertension, testicular pain, and livedo reticularis. Visceral (renal or mesenteric) angiography classically shows multiple small saccular microaneurysms (1-5 mm) and alternating stenoses, producing a 'beads on a string' vascular tree.",
    "keyTakeaway": "Polyarteritis nodosa (PAN): Medium-vessel necrotizing vasculitis, mononeuritis multiplex, hepatitis B link, visceral microaneurysms on angiogram.",
    "tags": [
      "PAN",
      "Polyarteritis Nodosa",
      "Mononeuritis Multiplex",
      "Vasculitis"
    ],
    "hint": "Medium-vessel necrotizing vasculitis associated with hepatitis B and renal microaneurysms.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-93",
    "chapterId": 7,
    "chapterTitle": "Chapter 7: Classification of Stroke & Vasculopathy",
    "vignette": "A 42-year-old female with long-standing severe asthma, chronic allergic rhinosinusitis, and nasal polyposis presents with foot drop, peripheral eosinophilia (42% eosinophils), and small subcortical cerebral infarcts. Serologies reveal positive perinuclear ANCA (anti-myeloperoxidase).",
    "question": "What is the diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Allergic bronchopulmonary aspergillosis"
      },
      {
        "id": "B",
        "text": "Microscopic polyangiitis"
      },
      {
        "id": "C",
        "text": "Granulomatosis with polyangiitis (GPA)"
      },
      {
        "id": "D",
        "text": "Eosinophilic granulomatosis with polyangiitis (EGPA / Churg-Strauss syndrome)"
      },
      {
        "id": "E",
        "text": "Hypereosinophilic syndrome"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Eosinophilic granulomatosis with polyangiitis (EGPA, formerly Churg-Strauss syndrome) is a necrotizing small-to-medium vessel vasculitis characterized by three phases: (1) Prodromal allergic phase (asthma, allergic rhinitis), (2) Eosinophilic tissue infiltration (peripheral eosinophilia >10% or >1500/uL), and (3) Vasculitic phase (mononeuritis multiplex, purpura, CNS ischemia). Antibodies to myeloperoxidase (p-ANCA) are positive in approximately 40% to 50% of patients. Treatment requires systemic corticosteroids, often combined with cyclophosphamide.",
    "keyTakeaway": "EGPA (Churg-Strauss) = Asthma + severe eosinophilia + mononeuritis multiplex / stroke + p-ANCA (anti-MPO).",
    "tags": [
      "EGPA",
      "Churg-Strauss",
      "Eosinophilia",
      "p-ANCA",
      "Vasculitis"
    ],
    "hint": "Asthma + high eosinophils + vasculitic neuropathy/stroke.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-94",
    "chapterId": 7,
    "chapterTitle": "Chapter 7: Classification of Stroke & Vasculopathy",
    "vignette": "A 36-year-old male with chronic purulent sinusitis, saddle-nose deformity, and recurrent hemoptysis develops right foot drop, hematuria, and an acute cerebral ischemic stroke. Chest radiography reveals multiple bilateral cavitary nodules. Cytoplasmic antineutrophil cytoplasmic antibody (c-ANCA / anti-PR3) is strongly positive.",
    "question": "What is the diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Tuberculosis"
      },
      {
        "id": "B",
        "text": "Goodpasture disease"
      },
      {
        "id": "C",
        "text": "Granulomatosis with polyangiitis (GPA / Wegener granulomatosis)"
      },
      {
        "id": "D",
        "text": "Sarcoidosis"
      },
      {
        "id": "E",
        "text": "Microscopic polyangiitis"
      }
    ],
    "correctOptionId": "C",
    "explanation": "Granulomatosis with polyangiitis (GPA, formerly Wegener granulomatosis) is a necrotizing granulomatous vasculitis predominantly targeting the upper respiratory tract (chronic sinusitis, saddle-nose deformity, otitis media), lower respiratory tract (cavitary pulmonary nodules, hemoptysis), and kidneys (crescentic necrotizing glomerulonephritis). Neurological involvement includes mononeuritis multiplex, cranial neuropathies, and stroke. Serum c-ANCA (directed against proteinase 3, PR3) is highly specific and positive in over 90% of active cases.",
    "keyTakeaway": "GPA (Wegener) = c-ANCA (anti-PR3) + upper/lower respiratory granulomas + glomerulonephritis + vasculitic neuropathy/stroke.",
    "tags": [
      "GPA",
      "Wegener",
      "c-ANCA",
      "PR3",
      "Vasculitis"
    ],
    "hint": "c-ANCA (PR3) positive with respiratory necrotizing granulomas and glomerulonephritis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-95",
    "chapterId": 7,
    "chapterTitle": "Chapter 7: Classification of Stroke & Vasculopathy",
    "vignette": "A 32-year-old male who smokes two packs of cigarettes daily presents with ischemic ulcers and gangrene of his toes, severe claudication, and recurrent migratory superficial thrombophlebitis. Angiography shows non-atherosclerotic segmental occlusion of distal tibial and digital arteries with a 'corkscrew' collateral pattern.",
    "question": "What is the diagnosis, and what is the single most effective therapeutic intervention?",
    "options": [
      {
        "id": "A",
        "text": "Atherosclerosis obliterans; balloon angioplasty"
      },
      {
        "id": "B",
        "text": "Thromboangiitis obliterans (Buerger disease); complete and permanent smoking cessation"
      },
      {
        "id": "C",
        "text": "Polyarteritis nodosa; IV cyclophosphamide"
      },
      {
        "id": "D",
        "text": "Takayasu arteritis; surgical bypass"
      },
      {
        "id": "E",
        "text": "Raynaud phenomenon; calcium channel blockers"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Thromboangiitis obliterans (Buerger disease) is a non-atherosclerotic, highly inflammatory, segmental occlusive vascular disease affecting small- and medium-sized arteries and veins of the extremities in young smokers (<45 years). Hallmarks include distal digital ischemia, rest pain, gangrene, superficial thrombophlebitis, and 'corkscrew' collaterals on angiography. Cerebral involvement can cause transient ischemic attacks or strokes. Complete and absolute cessation of all tobacco and nicotine exposure is the ONLY intervention that halts disease progression and prevents amputation.",
    "keyTakeaway": "Buerger disease (thromboangiitis obliterans): Young heavy smokers, distal gangrene, corkscrew collaterals; treatment is COMPLETE SMOKING CESSATION.",
    "tags": [
      "Buerger Disease",
      "Thromboangiitis Obliterans",
      "Smoking Cessation",
      "Vasculopathy"
    ],
    "hint": "Young male smoker with ischemic digit ulcers and corkscrew collaterals.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-96",
    "chapterId": 10,
    "chapterTitle": "Chapter 10: Genetic Stroke Syndromes",
    "vignette": "A 14-year-old boy with a history of intellectual disability, tall slender build, and kyphoscoliosis presents with an acute middle cerebral artery ischemic stroke. Ophthalmologic exam reveals downward and inward dislocation (ectopia lentis) of both lenses. Serum homocysteine is 185 umol/L.",
    "question": "What enzyme deficiency causes classical homocystinuria, and what is its mode of inheritance?",
    "options": [
      {
        "id": "A",
        "text": "MTHFR deficiency; autosomal dominant"
      },
      {
        "id": "B",
        "text": "Cystathionine beta-synthase (CBS) deficiency; autosomal recessive"
      },
      {
        "id": "C",
        "text": "Methionine synthase deficiency; X-linked recessive"
      },
      {
        "id": "D",
        "text": "Fibrillin-1 deficiency; autosomal dominant"
      },
      {
        "id": "E",
        "text": "Alpha-galactosidase A deficiency; X-linked"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Classical homocystinuria is an autosomal recessive inborn error of methionine metabolism caused by deficiency of Cystathionine Beta-Synthase (CBS), requiring vitamin B6 (pyridoxine) as a cofactor. It causes massive accumulation of homocysteine and methionine in blood and urine. Hallmarks include marfanoid habitus, osteoporosis, intellectual disability, downward and inward lens dislocation (in contrast to Marfan syndrome where lens subluxation is upward and outward), and severe premature arterial and venous thromboembolism.",
    "keyTakeaway": "Homocystinuria = Autosomal recessive CBS deficiency; downward ectopia lentis + marfanoid habitus + early stroke & thrombosis.",
    "tags": [
      "Homocystinuria",
      "CBS",
      "Ectopia Lentis",
      "Genetics"
    ],
    "hint": "Defect in cystathionine beta-synthase with downward lens subluxation.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-97",
    "chapterId": 10,
    "chapterTitle": "Chapter 10: Genetic Stroke Syndromes",
    "vignette": "A 3-year-old boy presents with developmental regression, profound hypotonia, intractable seizures, and distinctive kinky, brittle, hypopigmented hair ('steel wool' hair). MRA demonstrates extreme elongation and tortuosity of all major cerebral arteries.",
    "question": "What is the diagnosis, and which gene and cellular transporter is mutated?",
    "options": [
      {
        "id": "A",
        "text": "Canavan disease; ASPA gene"
      },
      {
        "id": "B",
        "text": "Wilson disease; ATP7B gene"
      },
      {
        "id": "C",
        "text": "Alexander disease; GFAP gene"
      },
      {
        "id": "D",
        "text": "Menkes disease; ATP7A gene encoding an intracellular copper-transporting ATPase"
      },
      {
        "id": "E",
        "text": "Pelizaeus-Merzbacher disease; PLP1 gene"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Menkes disease (kinky hair disease) is an X-linked recessive neurodegenerative disorder of copper metabolism caused by mutations in the ATP7A gene, which encodes a transmembrane copper-transporting P-type ATPase. Defective copper absorption impairs copper-dependent enzymes, including lysyl oxidase (needed for collagen/elastin crosslinking), leading to arterial tortuosity, intracranial aneurysms, and subdural hematomas. Clinical hallmarks are coarse, brittle 'kinky' hair (pili torti), hypotonia, seizures, and early childhood mortality.",
    "keyTakeaway": "Menkes disease = X-linked ATP7A copper transporter defect; brittle/kinky hair + cerebral arterial tortuosity + neurodegeneration.",
    "tags": [
      "Menkes Disease",
      "ATP7A",
      "Copper Metabolism",
      "Genetics"
    ],
    "hint": "X-linked disorder with kinky steel-wool hair and marked vascular tortuosity.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-98",
    "chapterId": 10,
    "chapterTitle": "Chapter 10: Genetic Stroke Syndromes",
    "vignette": "A 36-year-old female presents with recurrent upper gastrointestinal bleeding, premature coronary artery disease, and an acute lacunar stroke. Funduscopic examination reveals prominent 'angioid streaks' radiating from the optic disc, and inspection of her neck and axillae shows yellowish, cobblestone-like papules ('plucked chicken skin').",
    "question": "What genetic disorder is present, and what gene mutation is responsible?",
    "options": [
      {
        "id": "A",
        "text": "Fabry disease; GLA gene"
      },
      {
        "id": "B",
        "text": "Marfan syndrome; FBN1 gene"
      },
      {
        "id": "C",
        "text": "Neurofibromatosis type 1; NF1 gene"
      },
      {
        "id": "D",
        "text": "Pseudoxanthoma elasticum (PXE); ABCC6 gene on chromosome 16p13"
      },
      {
        "id": "E",
        "text": "Ehlers-Danlos syndrome type IV; COL3A1 gene"
      }
    ],
    "correctOptionId": "D",
    "explanation": "Pseudoxanthoma elasticum (PXE) is an autosomal recessive metabolic disorder caused by mutations in the ABCC6 gene on chromosome 16p13.1, which encodes an ATP-binding cassette transporter. It leads to progressive fragmentation and ectopic calcification of elastic fibers in connective tissues. Triad of findings: (1) Skin: yellow, xanthoma-like papules on flexural surfaces ('plucked chicken skin'); (2) Eyes: 'angioid streaks' (breaks in Bruch's membrane) with retinal hemorrhages; and (3) Vasculature: premature arterial calcification, gastrointestinal hemorrhage, and early stroke.",
    "keyTakeaway": "Pseudoxanthoma elasticum (PXE) = Autosomal recessive ABCC6 mutation; 'plucked chicken skin' + angioid streaks + premature arterial occlusive disease.",
    "tags": [
      "PXE",
      "ABCC6",
      "Angioid Streaks",
      "Genetics"
    ],
    "hint": "Look for the classic pairing of 'plucked chicken skin' with retinal angioid streaks.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-99",
    "chapterId": 10,
    "chapterTitle": "Chapter 10: Genetic Stroke Syndromes",
    "vignette": "A 9-year-old child presents with enlarged, bright orange-yellow pharyngeal tonsils, hepatosplenomegaly, and a mild peripheral sensorineural polyneuropathy. Fasting lipid panel reveals virtually absent High-Density Lipoprotein (HDL <2 mg/dL) and apolipoprotein A-I.",
    "question": "What is the diagnosis, and which ATP-binding cassette transporter gene is mutated?",
    "options": [
      {
        "id": "A",
        "text": "Gaucher disease; GBA gene"
      },
      {
        "id": "B",
        "text": "Tangier disease; ABCA1 gene"
      },
      {
        "id": "C",
        "text": "Familial hypercholesterolemia; LDLR gene"
      },
      {
        "id": "D",
        "text": "Abetalipoproteinemia; MTTP gene"
      },
      {
        "id": "E",
        "text": "Niemann-Pick type C; NPC1 gene"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Tangier disease (familial alpha-lipoprotein deficiency) is a rare autosomal codominant disorder caused by mutations in the ABCA1 gene on chromosome 9q31, which encodes the ATP-binding cassette transporter A1 essential for efflux of cellular cholesterol to lipid-free ApoA-I to form mature HDL. Defective transport causes massive accumulation of cholesteryl esters in reticuloendothelial tissues, producing characteristic enlarged, lobulated orange-yellow tonsils, splenomegaly, peripheral neuropathy, and premature cardiovascular and cerebrovascular disease.",
    "keyTakeaway": "Tangier disease = Autosomal codominant ABCA1 mutation; absent HDL (<5 mg/dL) + large orange tonsils + premature stroke/neuropathy.",
    "tags": [
      "Tangier Disease",
      "ABCA1",
      "Orange Tonsils",
      "HDL",
      "Genetics"
    ],
    "hint": "Absence of HDL with striking orange tonsils.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-fj-100",
    "chapterId": 20,
    "chapterTitle": "Chapter 20: Stroke Systems of Care & Hospital Designations",
    "vignette": "Paramedics are dispatched to a 66-year-old male with acute right hemiparesis and speech arrest that began 25 minutes ago. In the field, they calculate a prehospital stroke severity scale to determine hospital routing.",
    "question": "Which of the following prehospital scales was specifically developed based on the NIHSS to identify patients with Large Vessel Occlusions (LVO) suitable for direct triage to a Comprehensive Stroke Center (CSC)?",
    "options": [
      {
        "id": "A",
        "text": "FAST scale (Face, Arm, Speech, Time)"
      },
      {
        "id": "B",
        "text": "Los Angeles Prehospital Stroke Screen (LAPPS)"
      },
      {
        "id": "C",
        "text": "Cincinnati Prehospital Stroke Scale (CPSS)"
      },
      {
        "id": "D",
        "text": "Rapid Arterial oCclusion Evaluation (RACE) scale"
      },
      {
        "id": "E",
        "text": "Glasgow Coma Scale (GCS)"
      }
    ],
    "correctOptionId": "D",
    "explanation": "The RACE (Rapid Arterial oCclusion Evaluation) scale was specifically designed by simplifying items from the NIHSS (facial palsy, arm motor, leg motor, head/gaze deviation, and aphasia/agnosia) to provide emergency medical technicians with a rapid field tool to identify patients with a high likelihood of large vessel occlusion (LVO). A RACE score >=5 has a sensitivity of 85% and specificity of 68% for LVO, allowing EMS to bypass primary stroke centers and transport directly to an endovascular-capable Comprehensive Stroke Center.",
    "keyTakeaway": "RACE scale: Prehospital stroke scale derived from NIHSS specifically designed to triage suspected LVO to Comprehensive Stroke Centers.",
    "tags": [
      "RACE Scale",
      "LVO Triage",
      "Prehospital Care",
      "Systems of Care"
    ],
    "hint": "Scale scoring arm/leg motor, gaze, and aphasia/agnosia to detect large vessel occlusion.",
    "source": "Guideline Recommendation"
  }
];

// Runtime Deduplication & Integrity Guard
const seenIds = new Set<string>();
const seenVignetteStems = new Set<string>();

export const questionsData: PracticeQuestion[] = rawQuestionsData.filter(q => {
  const normVignette = (q.vignette || '').trim().toLowerCase();
  const normStem = q.question.trim().toLowerCase();
  const contentKey = normVignette + ':::' + normStem;

  if (seenIds.has(q.id) || seenVignetteStems.has(contentKey)) {
    console.warn('[VascNeuro Prep] Duplicate question prevented from loading: ID ' + q.id);
    return false;
  }

  seenIds.add(q.id);
  seenVignetteStems.add(contentKey);
  return true;
});
