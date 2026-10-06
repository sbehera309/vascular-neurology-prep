import { PracticeQuestion } from '../types';

export const questionsData: PracticeQuestion[] = [
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
    "id": "q-11",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
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
    "id": "q-114",
    "chapterId": 3,
    "chapterTitle": "Vascular Neuroanatomy",
    "vignette": "A 58-year-old male presents with acute left facial and arm weakness with severe dysarthria and abulia. MRI reveals an acute infarction of the anterior caudate head and anterior limb of the internal capsule.",
    "question": "Which penetrating vessel occlusion causes this clinical syndrome?",
    "options": [
      {
        "id": "A",
        "text": "Recurrent Artery of Heubner (medial striate artery arising from A1/A2 ACA)"
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
        "text": "Posterior Communicating Artery"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Superior division of the left Middle Cerebral Artery (MCA)"
      },
      {
        "id": "B",
        "text": "Inferior division of the left MCA"
      },
      {
        "id": "C",
        "text": "Main trunk M1 MCA"
      },
      {
        "id": "D",
        "text": "Left Anterior Cerebral Artery"
      },
      {
        "id": "E",
        "text": "Left Anterior Choroidal Artery"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Inferior division of the left Middle Cerebral Artery (MCA)"
      },
      {
        "id": "B",
        "text": "Superior division of the left MCA"
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
        "text": "Recurrent Artery of Heubner"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Anterior Inferior Cerebellar Artery (AICA)"
      },
      {
        "id": "B",
        "text": "Posterior Inferior Cerebellar Artery (PICA)"
      },
      {
        "id": "C",
        "text": "Superior Cerebellar Artery (SCA)"
      },
      {
        "id": "D",
        "text": "Posterior Cerebral Artery (PCA)"
      },
      {
        "id": "E",
        "text": "Anterior Spinal Artery (ASA)"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Artery of Percheron (solitary thalmo-perforating trunk arising from one P1 PCA)"
      },
      {
        "id": "B",
        "text": "Bilateral Recurrent Artery of Heubner"
      },
      {
        "id": "C",
        "text": "Duplicated Anterior Communicating Artery"
      },
      {
        "id": "D",
        "text": "Persistent Trigeminal Artery"
      },
      {
        "id": "E",
        "text": "Aneurysm of Vein of Galen"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Internal Carotid Artery - Posterior Communicating Artery (ICA-PCoA) junction"
      },
      {
        "id": "B",
        "text": "Anterior Communicating Artery (ACoA)"
      },
      {
        "id": "C",
        "text": "Basilar Tip"
      },
      {
        "id": "D",
        "text": "PICA-Vertebral junction"
      },
      {
        "id": "E",
        "text": "MCA bifurcation"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Lateral Medullary Syndrome (Wallenberg); PICA occlusion"
      },
      {
        "id": "C",
        "text": "Weber Syndrome; PCA occlusion"
      },
      {
        "id": "D",
        "text": "Millard-Gubler Syndrome; Basilar paramedian branch"
      },
      {
        "id": "E",
        "text": "Claude Syndrome; PCA perforator"
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
        "text": "Central Post-Stroke Pain (Dejerine-Roussy Syndrome)"
      },
      {
        "id": "B",
        "text": "Trigeminal Neuralgia"
      },
      {
        "id": "C",
        "text": "Complex Regional Pain Syndrome"
      },
      {
        "id": "D",
        "text": "Phantom Limb Pain"
      },
      {
        "id": "E",
        "text": "Thalamic Astasia"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Fetal PCA origin occurs in approx 20% of individuals; PCA territory relies on anterior ICA circulation rather than vertebrobasilar system"
      },
      {
        "id": "B",
        "text": "Fetal PCA is a vascular malformation requiring surgical coiling"
      },
      {
        "id": "C",
        "text": "Fetal PCA causes mandatory congenital blindness"
      },
      {
        "id": "D",
        "text": "Fetal PCA is only present in pediatric patients"
      },
      {
        "id": "E",
        "text": "Fetal PCA eliminates stroke risk in PCA territory"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Balint Syndrome; Bilateral parieto-occipital lobes"
      },
      {
        "id": "C",
        "text": "Anton Syndrome; Bilateral calcarine cortex"
      },
      {
        "id": "D",
        "text": "Korsakoff Syndrome; Mammillary bodies"
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
        "text": "Balint Syndrome"
      },
      {
        "id": "C",
        "text": "Charles Bonnet Syndrome"
      },
      {
        "id": "D",
        "text": "Capgras Syndrome"
      },
      {
        "id": "E",
        "text": "Fregoli Syndrome"
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
        "text": "Balint Syndrome"
      },
      {
        "id": "B",
        "text": "Gerstmann Syndrome"
      },
      {
        "id": "C",
        "text": "Anton Syndrome"
      },
      {
        "id": "D",
        "text": "Kluever-Bucy Syndrome"
      },
      {
        "id": "E",
        "text": "Wernicke-Korsakoff Syndrome"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Transcortical Motor Aphasia"
      },
      {
        "id": "B",
        "text": "Broca Aphasia"
      },
      {
        "id": "C",
        "text": "Wernicke Aphasia"
      },
      {
        "id": "D",
        "text": "Conduction Aphasia"
      },
      {
        "id": "E",
        "text": "Transcortical Sensory Aphasia"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Transcortical Sensory Aphasia"
      },
      {
        "id": "B",
        "text": "Wernicke Aphasia"
      },
      {
        "id": "C",
        "text": "Broca Aphasia"
      },
      {
        "id": "D",
        "text": "Conduction Aphasia"
      },
      {
        "id": "E",
        "text": "Global Aphasia"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Conduction Aphasia; Left Arcuate Fasciculus / supramarginal gyrus"
      },
      {
        "id": "B",
        "text": "Wernicke Aphasia; Left superior temporal gyrus"
      },
      {
        "id": "C",
        "text": "Broca Aphasia; Left inferior frontal gyrus"
      },
      {
        "id": "D",
        "text": "Global Aphasia; Total MCA territory"
      },
      {
        "id": "E",
        "text": "Transcortical Motor Aphasia; Supplementary motor area"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Wallenberg Syndrome"
      },
      {
        "id": "C",
        "text": "Weber Syndrome"
      },
      {
        "id": "D",
        "text": "Dejerine Syndrome"
      },
      {
        "id": "E",
        "text": "Locked-in Syndrome"
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
        "text": "Man-in-a-barrel Syndrome; Bilateral anterior watershed (ACA-MCA borderzone) ischemic infarction"
      },
      {
        "id": "B",
        "text": "Cervical spinal cord transection"
      },
      {
        "id": "C",
        "text": "Brachial plexus avulsion bilaterally"
      },
      {
        "id": "D",
        "text": "Bilateral radial nerve palsy"
      },
      {
        "id": "E",
        "text": "Guillain-Barre Syndrome"
      }
    ],
    "correctOptionId": "A",
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
    "id": "q-131",
    "chapterId": 5,
    "chapterTitle": "Posterior Circulation & Brainstem Syndromes",
    "vignette": "A 52-year-old female presents with acute right eye ptosis and dilated pupil, accompanied by left-sided intentional tremor and ataxia.",
    "question": "What is the diagnosis?",
    "options": [
      {
        "id": "A",
        "text": "Claude Syndrome (dorsal midbrain stroke)"
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
        "text": "Millard-Gubler Syndrome"
      },
      {
        "id": "E",
        "text": "Wallenberg Syndrome"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Benedikt Syndrome"
      },
      {
        "id": "B",
        "text": "Weber Syndrome"
      },
      {
        "id": "C",
        "text": "Claude Syndrome"
      },
      {
        "id": "D",
        "text": "Parinaud Syndrome"
      },
      {
        "id": "E",
        "text": "Foville Syndrome"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Foville Syndrome"
      },
      {
        "id": "B",
        "text": "Millard-Gubler Syndrome"
      },
      {
        "id": "C",
        "text": "Weber Syndrome"
      },
      {
        "id": "D",
        "text": "Wallenberg Syndrome"
      },
      {
        "id": "E",
        "text": "Raymond Syndrome"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Parinaud Syndrome (Dorsal Midbrain Syndrome); Dorsal tectum / pineal region"
      },
      {
        "id": "B",
        "text": "Weber Syndrome; Ventral midbrain"
      },
      {
        "id": "C",
        "text": "Wallenberg Syndrome; Lateral medulla"
      },
      {
        "id": "D",
        "text": "Gerstmann Syndrome; Angular gyrus"
      },
      {
        "id": "E",
        "text": "Horner Syndrome; Sympathetic chain"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Brain death"
      },
      {
        "id": "C",
        "text": "Persistent vegetative state"
      },
      {
        "id": "D",
        "text": "Akinesia mutism"
      },
      {
        "id": "E",
        "text": "Guillain-Barre Syndrome"
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
        "text": "Raymond Syndrome"
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
        "text": "Weber Syndrome"
      },
      {
        "id": "E",
        "text": "Claude Syndrome"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Destruction of descending sympathetic fibers in the pons leaves parasympathetic Edinger-Westphal tone unopposed"
      },
      {
        "id": "B",
        "text": "Pupillary light reflex is destroyed in pontine strokes"
      },
      {
        "id": "C",
        "text": "Atropine toxicity"
      },
      {
        "id": "D",
        "text": "Direct damage to CN III nucleus"
      },
      {
        "id": "E",
        "text": "Occipital lobe ischemia"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Left Internuclear Ophthalmophthalmoplegia (INO); Left Medial Longitudinal Fasciculus (MLF)"
      },
      {
        "id": "B",
        "text": "Right CN VI palsy"
      },
      {
        "id": "C",
        "text": "Left CN III palsy"
      },
      {
        "id": "D",
        "text": "Right MLF lesion"
      },
      {
        "id": "E",
        "text": "Bilateral PPRF lesion"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Lumbar puncture"
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
        "text": "Carotid duplex ultrasound"
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
        "text": "CADASIL; NOTCH3 gene mutation on chromosome 19"
      },
      {
        "id": "B",
        "text": "Fabry Disease; GLA gene mutation"
      },
      {
        "id": "C",
        "text": "MELAS; MT-TL1 mutation"
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
    "id": "q-140",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 70-year-old female presents with sudden numbness and tingling involving her entire left arm, leg, face, and trunk. Motor strength, visual fields, and speech are entirely normal.",
    "question": "Infarction of which nucleus causes Pure Sensory Lacunar Stroke?",
    "options": [
      {
        "id": "A",
        "text": "Ventral Posterolateral (VPL) nucleus of the thalamus"
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
        "text": "Caudate nucleus"
      },
      {
        "id": "E",
        "text": "Subthalamic nucleus"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Ataxic Hemiparesis; Posterior limb of internal capsule or basis pontis"
      },
      {
        "id": "B",
        "text": "Pure Motor Hemiparesis; Caudate nucleus"
      },
      {
        "id": "C",
        "text": "Wallenberg Syndrome; Lateral medulla"
      },
      {
        "id": "D",
        "text": "Gerstmann Syndrome; Angular gyrus"
      },
      {
        "id": "E",
        "text": "Dejerine Syndrome; Medulla"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Clumsy Hand-Dysarthria Syndrome"
      },
      {
        "id": "B",
        "text": "Pure Motor Hemiparesis"
      },
      {
        "id": "C",
        "text": "Ataxic Hemiparesis"
      },
      {
        "id": "D",
        "text": "Pure Sensory Stroke"
      },
      {
        "id": "E",
        "text": "Anterior Choroidal Syndrome"
      }
    ],
    "correctOptionId": "A",
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
        "text": "HTRA1 gene mutation"
      },
      {
        "id": "B",
        "text": "NOTCH3 gene mutation"
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
        "text": "ABCC6 gene mutation"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Binswanger Disease (Subcortical Arteriosclerotic Encephalopathy)"
      },
      {
        "id": "B",
        "text": "Alzheimer Disease"
      },
      {
        "id": "C",
        "text": "Creutzfeldt-Jakob Disease"
      },
      {
        "id": "D",
        "text": "Normal Pressure Hydrocephalus"
      },
      {
        "id": "E",
        "text": "Progressive Supranuclear Palsy"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Cerebral Amyloid Angiopathy (CAA); Beta-amyloid deposition in small cortical and leptomeningeal arteries"
      },
      {
        "id": "B",
        "text": "Hypertensive arteriolosclerosis"
      },
      {
        "id": "C",
        "text": "Saccular aneurysm rupture"
      },
      {
        "id": "D",
        "text": "AVM malformation"
      },
      {
        "id": "E",
        "text": "Cavernous malformation"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Lipohyalinosis (or microatheroma)"
      },
      {
        "id": "B",
        "text": "Medial fibroplasia"
      },
      {
        "id": "C",
        "text": "Granulomatous vasculitis"
      },
      {
        "id": "D",
        "text": "Amyloid angiopathy"
      },
      {
        "id": "E",
        "text": "Monomorphic arteritis"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Retinal Vasculopathy with Cerebral Leukodystrophy (RVCL)"
      },
      {
        "id": "B",
        "text": "CADASIL"
      },
      {
        "id": "C",
        "text": "CARASIL"
      },
      {
        "id": "D",
        "text": "Fabry Disease"
      },
      {
        "id": "E",
        "text": "SUSAC Syndrome"
      }
    ],
    "correctOptionId": "A",
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
    "id": "q-148",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 58-year-old male presents with non-embolic lacunar stroke (1.0 cm lesion in internal capsule), hypertension, diabetes, normal ECG, normal cardiac telemetry, and carotid ultrasound showing < 30% stenosis.",
    "question": "What is the TOAST subtype classification for this stroke?",
    "options": [
      {
        "id": "A",
        "text": "Small Vessel Occlusion (Lacunar)"
      },
      {
        "id": "B",
        "text": "Large Artery Atherosclerosis"
      },
      {
        "id": "C",
        "text": "Cardioembolism"
      },
      {
        "id": "D",
        "text": "Other Determined Etiology"
      },
      {
        "id": "E",
        "text": "Undetermined Etiology"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Embolic Stroke of Undetermined Source (ESUS); prolonged outpatient cardiac rhythm monitoring (30-day monitor or ILR)"
      },
      {
        "id": "B",
        "text": "Small vessel disease; stop workup"
      },
      {
        "id": "C",
        "text": "Large artery stroke; schedule CEA immediately"
      },
      {
        "id": "D",
        "text": "Definitive cardioembolic stroke; start Warfarin without further testing"
      },
      {
        "id": "E",
        "text": "Venous stroke; order MRV"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Antiphospholipid Syndrome (APLS); Long-term oral anticoagulation with Warfarin (target INR 2.0-3.0)"
      },
      {
        "id": "B",
        "text": "Factor V Leiden mutation; Aspirin 81 mg daily"
      },
      {
        "id": "C",
        "text": "CADASIL; No treatment available"
      },
      {
        "id": "D",
        "text": "Sepsis; IV antibiotics"
      },
      {
        "id": "E",
        "text": "Systemic Lupus Erythematosus; High-dose steroids alone"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Trousseau Syndrome / Non-Bacterial Thrombotic Endocarditis (NBTE); Therapeutic Low Molecular Weight Heparin (LMWH)"
      },
      {
        "id": "B",
        "text": "Infective endocarditis; IV Penicillin"
      },
      {
        "id": "C",
        "text": "Rheumatic heart disease; Valve replacement"
      },
      {
        "id": "D",
        "text": "Libman-Sacks endocarditis; Oral Prednisone"
      },
      {
        "id": "E",
        "text": "Bacterial emboli; IV Vancomycin"
      }
    ],
    "correctOptionId": "A",
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
        "text": "High risk of recurrent embolic stroke (independent stroke risk factor); manage with intensive medical therapy (statin + antiplatelet)"
      },
      {
        "id": "B",
        "text": "Zero stroke risk; incidental finding"
      },
      {
        "id": "C",
        "text": "Indication for emergency open aortic arch resection"
      },
      {
        "id": "D",
        "text": "Indication for Warfarin anticoagulation over antiplatelet"
      },
      {
        "id": "E",
        "text": "Low risk requiring no intervention"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Hollenhorst Plaque; Carotid artery bifurcation atherosclerotic plaque"
      },
      {
        "id": "B",
        "text": "Roth Spot; Bacterial endocarditis"
      },
      {
        "id": "C",
        "text": "Cherry-red spot; Tay-Sachs disease"
      },
      {
        "id": "D",
        "text": "Cotton wool spot; Diabetic retinopathy"
      },
      {
        "id": "E",
        "text": "Elschnig spot; Hypertensive retinopathy"
      }
    ],
    "correctOptionId": "A",
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
        "text": "TICI 2b (Partial reperfusion >= 50%)"
      },
      {
        "id": "C",
        "text": "TICI 2a (Partial reperfusion < 50%)"
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
        "text": "Mismatch volume = 98 mL, Mismatch ratio = 9.17"
      },
      {
        "id": "B",
        "text": "Mismatch volume = 110 mL, Mismatch ratio = 1.0"
      },
      {
        "id": "C",
        "text": "Mismatch volume = 12 mL, Mismatch ratio = 0.5"
      },
      {
        "id": "D",
        "text": "Mismatch volume = 0 mL, Mismatch ratio = 0"
      },
      {
        "id": "E",
        "text": "Mismatch volume = 50 mL, Mismatch ratio = 2.0"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Maintain SBP < 140-180 mmHg to prevent reperfusion injury / sICH while avoiding hypoperfusion"
      },
      {
        "id": "B",
        "text": "Allow SBP up to 220/120 mmHg"
      },
      {
        "id": "C",
        "text": "Lower SBP < 90 mmHg"
      },
      {
        "id": "D",
        "text": "Keep SBP strictly between 180 and 200 mmHg"
      },
      {
        "id": "E",
        "text": "No BP monitoring required"
      }
    ],
    "correctOptionId": "A",
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
        "text": "EVT plus medical therapy significantly improved functional independence (mRS 0-3) compared to medical therapy alone, despite large core size"
      },
      {
        "id": "B",
        "text": "EVT was harmful and increased mortality"
      },
      {
        "id": "C",
        "text": "EVT showed zero benefit"
      },
      {
        "id": "D",
        "text": "EVT is strictly contraindicated if ASPECTS < 7"
      },
      {
        "id": "E",
        "text": "Medical therapy alone was superior"
      }
    ],
    "correctOptionId": "A",
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
    "id": "q-158",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A 65-year-old male with 80% symptomatic MCA stenosis is evaluated for secondary prevention. The team compares Warfarin vs Aspirin based on historical evidence.",
    "question": "What did the WASID trial establish regarding Warfarin versus Aspirin in symptomatic intracranial arterial stenosis?",
    "options": [
      {
        "id": "A",
        "text": "Aspirin was equally effective as Warfarin for stroke prevention with significantly FEWER major bleeding complications and lower mortality"
      },
      {
        "id": "B",
        "text": "Warfarin was vastly superior to Aspirin"
      },
      {
        "id": "C",
        "text": "Warfarin eliminated all recurrent strokes"
      },
      {
        "id": "D",
        "text": "Aspirin caused higher intracranial hemorrhage rates than Warfarin"
      },
      {
        "id": "E",
        "text": "Neither medication provided benefit"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Hemodynamic failure / watershed hypoperfusion distal to severe stenosis"
      },
      {
        "id": "B",
        "text": "Arterio-arterial thromboembolism"
      },
      {
        "id": "C",
        "text": "Cardioembolism"
      },
      {
        "id": "D",
        "text": "Small vessel lipohyalinosis"
      },
      {
        "id": "E",
        "text": "Venous congestion"
      }
    ],
    "correctOptionId": "A",
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
        "text": "MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-like episodes)"
      },
      {
        "id": "B",
        "text": "Fabry Disease"
      },
      {
        "id": "C",
        "text": "CADASIL"
      },
      {
        "id": "D",
        "text": "Kearns-Sayre Syndrome"
      },
      {
        "id": "E",
        "text": "Leigh Syndrome"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Homocystinuria (Cystathionine beta-synthase deficiency); Pyridoxine (Vitamin B6) + Folate + Vitamin B12"
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
        "text": "Tyrosinemia"
      }
    ],
    "correctOptionId": "A",
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
    "id": "q-162",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 72-year-old female undergoes evaluation for 80% ASYMPTOMATIC right internal carotid artery stenosis.",
    "question": "What did the ACST and ACAS trials demonstrate regarding CEA in asymptomatic carotid stenosis?",
    "options": [
      {
        "id": "A",
        "text": "CEA reduced 5-year stroke risk from 11% to 5.1% (approx 1% per year ARR), but modern intensive medical therapy has further reduced medical stroke rates"
      },
      {
        "id": "B",
        "text": "CEA provided zero benefit in asymptomatic patients"
      },
      {
        "id": "C",
        "text": "CEA was harmful"
      },
      {
        "id": "D",
        "text": "Carotid stenting is superior to CEA in asymptomatic patients"
      },
      {
        "id": "E",
        "text": "Aspirin is contraindicated"
      }
    ],
    "correctOptionId": "A",
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
        "text": "CAS had a higher rate of periprocedural stroke, whereas CEA had a higher rate of periprocedural MI; elderly patients (> 70) had superior outcomes with CEA"
      },
      {
        "id": "B",
        "text": "CAS was superior in all age groups"
      },
      {
        "id": "C",
        "text": "CEA had higher stroke rates than CAS"
      },
      {
        "id": "D",
        "text": "CAS is contraindicated in all males"
      },
      {
        "id": "E",
        "text": "Both procedures have identical complication profiles"
      }
    ],
    "correctOptionId": "A",
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
    "id": "q-164",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 68-year-old male with non-valvular AFib, hypertension, diabetes, and prior ischemic stroke has a calculated CHA2DS2-VASc score.",
    "question": "What is his CHA2DS2-VASc score and indicated antithrombotic therapy?",
    "options": [
      {
        "id": "A",
        "text": "CHA2DS2-VASc = 5 (HTN 1, DM 1, Age 65-74 1, Stroke 2); Oral Anticoagulation (DOAC) strongly indicated"
      },
      {
        "id": "B",
        "text": "CHA2DS2-VASc = 1; Aspirin alone"
      },
      {
        "id": "C",
        "text": "CHA2DS2-VASc = 0; No treatment"
      },
      {
        "id": "D",
        "text": "CHA2DS2-VASc = 2; Clopidogrel"
      },
      {
        "id": "E",
        "text": "CHA2DS2-VASc = 8; Triple therapy"
      }
    ],
    "correctOptionId": "A",
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
    "id": "q-165",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 66-year-old male presents with acute left putaminal ICH (volume 20 mL) and initial BP of 195/105 mmHg. GCS is 14.",
    "question": "Based on INTERACT2 and ATACH-2 trials, what is the goal SBP target for acute BP lowering in spontaneous ICH?",
    "options": [
      {
        "id": "A",
        "text": "Rapidly lower SBP to 130-140 mmHg within 2 hours (target SBP < 140 mmHg)"
      },
      {
        "id": "B",
        "text": "Keep SBP > 180 mmHg to maintain cerebral perfusion"
      },
      {
        "id": "C",
        "text": "Lower SBP < 90 mmHg"
      },
      {
        "id": "D",
        "text": "Hold all antihypertensives for 24 hours"
      },
      {
        "id": "E",
        "text": "Maintain SBP strictly between 160 and 180 mmHg"
      }
    ],
    "correctOptionId": "A",
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
    "id": "q-166",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage",
    "vignette": "A 52-year-old female presents with ruptured anterior communicating artery aneurysm. The neurovascular team discusses treatment options.",
    "question": "What did the ISAT trial demonstrate regarding endovascular coiling versus surgical clipping for ruptured intracranial aneurysms?",
    "options": [
      {
        "id": "A",
        "text": "Endovascular coiling resulted in a significantly higher rate of disability-free survival at 1 year compared to surgical clipping"
      },
      {
        "id": "B",
        "text": "Surgical clipping was superior in all cases"
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
        "text": "Both modalities had identical outcomes"
      }
    ],
    "correctOptionId": "A",
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
    "id": "q-36",
    "chapterId": 19,
    "chapterTitle": "Secondary Prevention & Antithrombotics",
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
    "source": "Past Board Exam"
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
        "text": "Autosomal Dominant; Anterior Temporal Pole & External Capsule hyperintensities"
      },
      {
        "id": "B",
        "text": "Autosomal Recessive; Basal ganglia calcification"
      },
      {
        "id": "C",
        "text": "X-linked Recessive; Cerebellar atrophy"
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
    "correctOptionId": "A",
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
        "text": "Vascular Ehlers-Danlos Syndrome Type IV; COL3A1 mutation"
      },
      {
        "id": "B",
        "text": "Type I EDS"
      },
      {
        "id": "C",
        "text": "Marfan Syndrome; FBN1 mutation"
      },
      {
        "id": "D",
        "text": "Loeys-Dietz Syndrome; TGFBR1/2 mutation"
      },
      {
        "id": "E",
        "text": "Osteogenesis Imperfecta"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Direct carotid artery access with continuous retrograde flow reversal protects the brain from embolic debris during stent deployment"
      },
      {
        "id": "B",
        "text": "Eliminates need for antiplatelet therapy"
      },
      {
        "id": "C",
        "text": "Can be performed without anesthesia"
      },
      {
        "id": "D",
        "text": "Replaces need for CEA in 100% total occlusions"
      },
      {
        "id": "E",
        "text": "Prevents intracranial stenosis"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Subclavian Steal Syndrome; Proximal subclavian artery occlusion causing retrograde flow down the ipsilateral vertebral artery"
      },
      {
        "id": "B",
        "text": "Carotid artery dissection"
      },
      {
        "id": "C",
        "text": "Thoracic outlet syndrome"
      },
      {
        "id": "D",
        "text": "Raynaud phenomenon"
      },
      {
        "id": "E",
        "text": "Vertebrobasilar insufficiency from PICA stroke"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Left Atrial Myxoma; Surgical resection of cardiac tumor"
      },
      {
        "id": "B",
        "text": "Infective endocarditis; IV Vancomycin"
      },
      {
        "id": "C",
        "text": "Libman-Sacks endocarditis; High-dose steroids"
      },
      {
        "id": "D",
        "text": "Mitral valve prolapse; Aspirin"
      },
      {
        "id": "E",
        "text": "Non-bacterial thrombotic endocarditis; LMWH"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Dabigatran 150 mg twice daily"
      },
      {
        "id": "E",
        "text": "Aspirin 81 mg daily alone"
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
        "text": "Administer 4-Factor Prothrombin Complex Concentrate (4F-PCC / Kcentra 25-50 U/kg IV) AND IV Vitamin K1 (10 mg IV slow push)"
      },
      {
        "id": "B",
        "text": "Administer Fresh Frozen Plasma (FFP) alone"
      },
      {
        "id": "C",
        "text": "Administer Cryoprecipitate 10 units"
      },
      {
        "id": "D",
        "text": "Administer Idarucizumab"
      },
      {
        "id": "E",
        "text": "Hold Warfarin and observe"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Andexanet alfa (Andexxa)"
      },
      {
        "id": "B",
        "text": "Idarucizumab (Praxbind)"
      },
      {
        "id": "C",
        "text": "Protamine sulfate"
      },
      {
        "id": "D",
        "text": "Vitamin K1"
      },
      {
        "id": "E",
        "text": "Desmopressin"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Cerebral Salt Wasting (CSW); Maintain EUVOLEMIA / hypertonic 3% saline and oral salt tablets (DO NOT fluid restrict!)"
      },
      {
        "id": "B",
        "text": "SIADH; Fluid restriction < 1000 mL/day"
      },
      {
        "id": "C",
        "text": "Central Diabetes Insipidus; Desmopressin"
      },
      {
        "id": "D",
        "text": "Dehydration; Administer free water D5W"
      },
      {
        "id": "E",
        "text": "Heart failure; Furosemide"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Moyamoya Disease"
      },
      {
        "id": "C",
        "text": "CADASIL"
      },
      {
        "id": "D",
        "text": "Pediatric Atherosclerosis"
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
        "text": "Initiate high-dose systemic corticosteroids (IV Methylprednisolone or oral Prednisone 60 mg) IMMEDIATELY before temporal artery biopsy"
      },
      {
        "id": "B",
        "text": "Wait for temporal artery biopsy results before giving steroids"
      },
      {
        "id": "C",
        "text": "Order stat head CT"
      },
      {
        "id": "D",
        "text": "Start Aspirin 81 mg alone"
      },
      {
        "id": "E",
        "text": "Perform cerebral angiography"
      }
    ],
    "correctOptionId": "A",
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
        "text": "CPP = 59 mmHg (MAP 85 minus ICP 26); CPP is inadequate (goal CPP 60-70 mmHg)"
      },
      {
        "id": "B",
        "text": "CPP = 111 mmHg; CPP is normal"
      },
      {
        "id": "C",
        "text": "CPP = 26 mmHg; normal"
      },
      {
        "id": "D",
        "text": "CPP = 85 mmHg; normal"
      },
      {
        "id": "E",
        "text": "CPP = 0 mmHg; brain death"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Target LDL < 70 mg/dL (or > 50% LDL reduction)"
      },
      {
        "id": "B",
        "text": "Target LDL < 130 mg/dL"
      },
      {
        "id": "C",
        "text": "Target LDL < 160 mg/dL"
      },
      {
        "id": "D",
        "text": "Target LDL < 200 mg/dL"
      },
      {
        "id": "E",
        "text": "No LDL target required"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Post-Stroke Depression; Selective Serotonin Reuptake Inhibitors (SSRIs e.g., Escitalopram or Sertraline)"
      },
      {
        "id": "B",
        "text": "Dementia; Donepezil"
      },
      {
        "id": "C",
        "text": "Psychosis; Haloperidol"
      },
      {
        "id": "D",
        "text": "Malingering; Discontinue therapy"
      },
      {
        "id": "E",
        "text": "Normal post-stroke adjustment; No treatment"
      }
    ],
    "correctOptionId": "A",
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
        "text": "NINDS Recombinant Tissue Plasminogen Activator Stroke Trial"
      },
      {
        "id": "B",
        "text": "ECASS-3 Trial"
      },
      {
        "id": "C",
        "text": "MR CLEAN Trial"
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
    "correctOptionId": "A",
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
        "text": "MR CLEAN Trial"
      },
      {
        "id": "B",
        "text": "NINDS Trial"
      },
      {
        "id": "C",
        "text": "SAMMPRIS Trial"
      },
      {
        "id": "D",
        "text": "NASCET Trial"
      },
      {
        "id": "E",
        "text": "SPARCL Trial"
      }
    ],
    "correctOptionId": "A",
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
        "text": "MRI DWI-FLAIR mismatch (positive DWI lesion with no hyperintensity on FLAIR) or CTP perfusion mismatch"
      },
      {
        "id": "B",
        "text": "Non-contrast CT head alone"
      },
      {
        "id": "C",
        "text": "Cerebral angiography"
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
    "correctOptionId": "A",
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
        "text": "Direct transport of the patient from the ambulance stretcher onto the CT scanner table with pre-hospital EMS stroke notification"
      },
      {
        "id": "B",
        "text": "Waiting for lab results before CT scan"
      },
      {
        "id": "C",
        "text": "Obtaining routine chest X-ray before CT"
      },
      {
        "id": "D",
        "text": "Performing full physical exam before neuroimaging"
      },
      {
        "id": "E",
        "text": "Obtaining consent from distant family members before CT"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Yes, normal/undetectable dTT and ECT indicate no significant Dabigatran anticoagulant effect, allowing safe tPA administration"
      },
      {
        "id": "B",
        "text": "No, Dabigatran intake is an absolute contraindication regardless of labs"
      },
      {
        "id": "C",
        "text": "Yes, provided Protamine is given"
      },
      {
        "id": "D",
        "text": "No, unless INR > 3.0"
      },
      {
        "id": "E",
        "text": "Yes, if SBP < 120 mmHg"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Sublingual Nifedipine"
      },
      {
        "id": "C",
        "text": "Oral Lisinopril"
      },
      {
        "id": "D",
        "text": "IV Nitroprusside bolus"
      },
      {
        "id": "E",
        "text": "Oral Clonidine"
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
        "text": "Middle Cerebral Artery (MCA)"
      },
      {
        "id": "C",
        "text": "Posterior Cerebral Artery (PCA)"
      },
      {
        "id": "D",
        "text": "Anterior Choroidal Artery"
      },
      {
        "id": "E",
        "text": "Superior Cerebellar Artery"
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
        "text": "Dual collateral blood supply to the occipital pole from terminal branches of the Middle Cerebral Artery (MCA)"
      },
      {
        "id": "B",
        "text": "Optic nerve decussation at the chiasm"
      },
      {
        "id": "C",
        "text": "Macular representation in the temporal lobe"
      },
      {
        "id": "D",
        "text": "Retinal collateral arteries"
      },
      {
        "id": "E",
        "text": "Dual supply from the anterior spinal artery"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Angular gyrus; Left ACA"
      },
      {
        "id": "D",
        "text": "Calcarine sulcus; Left PCA"
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
        "text": "Broca's area (inferior frontal gyrus); Left MCA superior division"
      },
      {
        "id": "B",
        "text": "Wernicke's area; Left MCA inferior division"
      },
      {
        "id": "C",
        "text": "Angular gyrus; Left ACA"
      },
      {
        "id": "D",
        "text": "Occipital pole; Left PCA"
      },
      {
        "id": "E",
        "text": "Internal capsule"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Nucleus Ambiguus (CN IX and X motor fibers)"
      },
      {
        "id": "B",
        "text": "Spinal Trigeminal Nucleus"
      },
      {
        "id": "C",
        "text": "Inferior Salivatory Nucleus"
      },
      {
        "id": "D",
        "text": "Nucleus Tractus Solitarii"
      },
      {
        "id": "E",
        "text": "Hypoglossal Nucleus"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Corticospinal tract in the cerebral peduncle"
      },
      {
        "id": "B",
        "text": "Red nucleus"
      },
      {
        "id": "C",
        "text": "Substantia nigra"
      },
      {
        "id": "D",
        "text": "Medial lemniscus"
      },
      {
        "id": "E",
        "text": "Superior colliculus"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Lipohyalinosis and microatheroma of small penetrating arteries (e.g. lenticulostriate penetrators)"
      },
      {
        "id": "B",
        "text": "Atherosclerotic occlusion of the main ICA trunk"
      },
      {
        "id": "C",
        "text": "Embolic clot from left atrium"
      },
      {
        "id": "D",
        "text": "Carotid artery dissection"
      },
      {
        "id": "E",
        "text": "Sagittal sinus thrombosis"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Sphingolipid accumulation in lysosomes"
      },
      {
        "id": "D",
        "text": "Fibrinoid necrosis"
      },
      {
        "id": "E",
        "text": "String-of-beads fibroplasia"
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
        "text": "Small Vessel Occlusion"
      },
      {
        "id": "D",
        "text": "Other Determined Etiology"
      },
      {
        "id": "E",
        "text": "Undetermined Etiology"
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
        "text": "Target INR 2.0 to 3.0"
      },
      {
        "id": "B",
        "text": "Target INR 1.5 to 2.0"
      },
      {
        "id": "C",
        "text": "Target INR 3.5 to 4.5"
      },
      {
        "id": "D",
        "text": "Target INR < 1.5"
      },
      {
        "id": "E",
        "text": "No INR target"
      }
    ],
    "correctOptionId": "A",
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
        "text": "NNT = 2.6 (dramatically powerful treatment effect)"
      },
      {
        "id": "B",
        "text": "NNT = 25"
      },
      {
        "id": "C",
        "text": "NNT = 100"
      },
      {
        "id": "D",
        "text": "NNT = 50"
      },
      {
        "id": "E",
        "text": "NNT = 10"
      }
    ],
    "correctOptionId": "A",
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
        "text": "ASPECTS 10 on non-contrast CT only"
      },
      {
        "id": "C",
        "text": "Absence of all collateral vessels"
      },
      {
        "id": "D",
        "text": "Age < 40 years strictly"
      },
      {
        "id": "E",
        "text": "Normal ECG"
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
        "text": "14.7% in the stenting arm vs 5.8% in the medical therapy arm (stenting had > 2.5x higher 30-day stroke/death rate)"
      },
      {
        "id": "B",
        "text": "5.8% stenting vs 14.7% medical"
      },
      {
        "id": "C",
        "text": "0% stenting vs 20% medical"
      },
      {
        "id": "D",
        "text": "Identical 10% in both arms"
      },
      {
        "id": "E",
        "text": "30% stenting vs 30% medical"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Dual Antiplatelet Therapy (Aspirin + Clopidogrel) for 90 days, High-intensity Statin (Atorvastatin 80mg), and SBP target < 140 mmHg"
      },
      {
        "id": "B",
        "text": "Warfarin anticoagulation, Aspirin, and BP < 160"
      },
      {
        "id": "C",
        "text": "Aspirin monotherapy alone"
      },
      {
        "id": "D",
        "text": "Wingspan stenting, Heparin, and BP < 120"
      },
      {
        "id": "E",
        "text": "Triple antiplatelet therapy for 1 year"
      }
    ],
    "correctOptionId": "A",
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
        "text": "GLA gene mutation"
      },
      {
        "id": "D",
        "text": "HTRA1 mutation"
      },
      {
        "id": "E",
        "text": "TREX1 mutation"
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
        "text": "Sneddon Syndrome"
      },
      {
        "id": "B",
        "text": "CADASIL"
      },
      {
        "id": "C",
        "text": "Fabry Disease"
      },
      {
        "id": "D",
        "text": "Takayasu Arteritis"
      },
      {
        "id": "E",
        "text": "Behcet Disease"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Perioperative risk must be < 6% for CEA in symptomatic patients (vs < 3% for asymptomatic patients)"
      },
      {
        "id": "B",
        "text": "Perioperative risk must be < 15%"
      },
      {
        "id": "C",
        "text": "Perioperative risk must be < 1%"
      },
      {
        "id": "D",
        "text": "No risk cutoff exists"
      },
      {
        "id": "E",
        "text": "Risk cutoff is 20%"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Initiate DOAC at Day 3 post-stroke (Day 1 for TIA, Day 3 for minor stroke, Day 6 for moderate, Day 12 for severe stroke)"
      },
      {
        "id": "B",
        "text": "Initiate DOAC immediately on Day 0"
      },
      {
        "id": "C",
        "text": "Wait 6 weeks for all strokes"
      },
      {
        "id": "D",
        "text": "Wait 6 months"
      },
      {
        "id": "E",
        "text": "DOACs are contraindicated in minor stroke"
      }
    ],
    "correctOptionId": "A",
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
        "text": "ANTICOAGULATION IS CONTRAINDICATED in active infective endocarditis due to high risk of fatal intracranial hemorrhage from mycotic aneurysm rupture; treat with IV targeted antibiotics"
      },
      {
        "id": "B",
        "text": "Start IV Heparin infusion immediately"
      },
      {
        "id": "C",
        "text": "Start Warfarin target INR 3.0"
      },
      {
        "id": "D",
        "text": "Administer IV tPA"
      },
      {
        "id": "E",
        "text": "Start DAPT for 90 days"
      }
    ],
    "correctOptionId": "A",
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
        "text": "IMMEDIATE SURGICAL EVACUATION of the cerebellar hematoma is mandatory"
      },
      {
        "id": "B",
        "text": "Medical therapy with IV Mannitol alone"
      },
      {
        "id": "C",
        "text": "Lumbar puncture to relieve pressure"
      },
      {
        "id": "D",
        "text": "Observation in step-down unit"
      },
      {
        "id": "E",
        "text": "High-dose IV steroids"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Discharge home with NSAIDs"
      },
      {
        "id": "C",
        "text": "Repeat CT head in 24 hours"
      },
      {
        "id": "D",
        "text": "Carotid ultrasound"
      },
      {
        "id": "E",
        "text": "EEG"
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
        "text": "Chronic monthly blood transfusion therapy targeting HbS < 30%"
      },
      {
        "id": "B",
        "text": "Aspirin 81 mg daily alone"
      },
      {
        "id": "C",
        "text": "Warfarin anticoagulation"
      },
      {
        "id": "D",
        "text": "Surgical EC-IC bypass"
      },
      {
        "id": "E",
        "text": "Observation"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Therapeutic full-dose anticoagulation with LMWH or unfractionated Heparin"
      },
      {
        "id": "B",
        "text": "Hold all anticoagulation due to the hemorrhage"
      },
      {
        "id": "C",
        "text": "Administer IV tPA"
      },
      {
        "id": "D",
        "text": "Perform emergency craniotomy only"
      },
      {
        "id": "E",
        "text": "Aspirin monotherapy"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Cerebral Cavernous Malformation (Cavernoma / CCM)"
      },
      {
        "id": "B",
        "text": "Arteriovenous Malformation (AVM)"
      },
      {
        "id": "C",
        "text": "Developmental Venous Anomaly (DVA)"
      },
      {
        "id": "D",
        "text": "Capillary Telangiectasia"
      },
      {
        "id": "E",
        "text": "Berry Aneurysm"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Target serum sodium 145 to 155 mEq/L and serum osmolality < 320 mOsm/kg"
      },
      {
        "id": "B",
        "text": "Target serum sodium 120 mEq/L"
      },
      {
        "id": "C",
        "text": "Target serum sodium > 170 mEq/L"
      },
      {
        "id": "D",
        "text": "Target serum osmolality > 380 mOsm/kg"
      },
      {
        "id": "E",
        "text": "No sodium monitoring required"
      }
    ],
    "correctOptionId": "A",
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
        "text": "DAPT significantly reduced 90-day recurrent ischemic stroke (5.0% vs 6.5%, RRR 25%) with a small increase in major bleeding"
      },
      {
        "id": "B",
        "text": "DAPT increased recurrent stroke"
      },
      {
        "id": "C",
        "text": "DAPT had zero effect"
      },
      {
        "id": "D",
        "text": "DAPT caused 50% mortality"
      },
      {
        "id": "E",
        "text": "Aspirin alone was superior"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Constraint-Induced Movement Therapy (CIMT)"
      },
      {
        "id": "B",
        "text": "Transcranial Magnetic Stimulation"
      },
      {
        "id": "C",
        "text": "Functional Electrical Stimulation"
      },
      {
        "id": "D",
        "text": "Mirror Therapy"
      },
      {
        "id": "E",
        "text": "Robotic Arm Training"
      }
    ],
    "correctOptionId": "A",
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
        "text": "SPARCL Trial (Stroke Prevention by Aggressive Reduction in Cholesterol Levels)"
      },
      {
        "id": "B",
        "text": "NINDS Trial"
      },
      {
        "id": "C",
        "text": "SAMMPRIS Trial"
      },
      {
        "id": "D",
        "text": "WASID Trial"
      },
      {
        "id": "E",
        "text": "CHANCE Trial"
      }
    ],
    "correctOptionId": "A",
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
        "text": "M1 segment of Middle Cerebral Artery"
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
        "text": "Posterior Communicating Artery"
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
        "text": "Anterior Choroidal Artery (AChA)"
      },
      {
        "id": "B",
        "text": "Posterior Inferior Cerebellar Artery (PICA)"
      },
      {
        "id": "C",
        "text": "Anterior Cerebral Artery (ACA)"
      },
      {
        "id": "D",
        "text": "Recurrent Artery of Heubner"
      },
      {
        "id": "E",
        "text": "Basilar tip"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Inferior division of MCA M2 segment"
      },
      {
        "id": "C",
        "text": "M1 main trunk"
      },
      {
        "id": "D",
        "text": "M4 cortical penetrating branches"
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
        "text": "Recurrent Artery of Heubner (Medial Striate Artery)"
      },
      {
        "id": "B",
        "text": "Lenticulostriate arteries"
      },
      {
        "id": "C",
        "text": "Thalamoperforating arteries"
      },
      {
        "id": "D",
        "text": "Posterior choroidal artery"
      },
      {
        "id": "E",
        "text": "Direct ICA branches"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Posterior superior temporal gyrus (Wernicke area)"
      },
      {
        "id": "B",
        "text": "Inferior frontal gyrus (Broca area)"
      },
      {
        "id": "C",
        "text": "Angular gyrus"
      },
      {
        "id": "D",
        "text": "Precentral gyrus"
      },
      {
        "id": "E",
        "text": "Supplementary motor area"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Anosognosia"
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
        "text": "Prosopagnosia"
      },
      {
        "id": "E",
        "text": "Astereognosis"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Conduction Aphasia"
      },
      {
        "id": "B",
        "text": "Global Aphasia"
      },
      {
        "id": "C",
        "text": "Transcortical Motor Aphasia"
      },
      {
        "id": "D",
        "text": "Transcortical Sensory Aphasia"
      },
      {
        "id": "E",
        "text": "Anomic Aphasia"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Balint Syndrome"
      },
      {
        "id": "C",
        "text": "Gerstmann Syndrome"
      },
      {
        "id": "D",
        "text": "Horner Syndrome"
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
        "text": "Wallenberg Syndrome (Lateral Medullary Syndrome)"
      },
      {
        "id": "B",
        "text": "Dejerine Syndrome (Medial Medullary)"
      },
      {
        "id": "C",
        "text": "Millard-Gubler Syndrome"
      },
      {
        "id": "D",
        "text": "Weber Syndrome"
      },
      {
        "id": "E",
        "text": "Foville Syndrome"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Ventral Pontine Tegmentum (AICA / Basilar perforators)"
      },
      {
        "id": "B",
        "text": "Ventral Midbrain"
      },
      {
        "id": "C",
        "text": "Lateral Medulla"
      },
      {
        "id": "D",
        "text": "Medial Medulla"
      },
      {
        "id": "E",
        "text": "Dorsal Midbrain"
      }
    ],
    "correctOptionId": "A",
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
        "text": "Wallenberg Syndrome"
      },
      {
        "id": "E",
        "text": "Nothnagel Syndrome"
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
        "text": "Locked-in Syndrome"
      },
      {
        "id": "B",
        "text": "Akinesia"
      },
      {
        "id": "C",
        "text": "Persistent Vegetative State"
      },
      {
        "id": "D",
        "text": "Stupor"
      },
      {
        "id": "E",
        "text": "Brain death"
      }
    ],
    "correctOptionId": "A",
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
    "id": "q-exp-6-1",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 57-year-old patient with stroke risk factors is evaluated under Lacunar Strokes & Small Vessel Disease management guidelines.",
    "question": "In the context of Lacunar Strokes & Small Vessel Disease, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Lacunar Strokes & Small Vessel Disease requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Lacunar Strokes & Small Vessel Disease management.",
    "tags": [
      "Lacunar",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Lacunar Strokes & Small Vessel Disease.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-exp-6-2",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 58-year-old patient with stroke risk factors is evaluated under Lacunar Strokes & Small Vessel Disease management guidelines.",
    "question": "In the context of Lacunar Strokes & Small Vessel Disease, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Lacunar Strokes & Small Vessel Disease requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Lacunar Strokes & Small Vessel Disease management.",
    "tags": [
      "Lacunar",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Lacunar Strokes & Small Vessel Disease.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-exp-6-3",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 59-year-old patient with stroke risk factors is evaluated under Lacunar Strokes & Small Vessel Disease management guidelines.",
    "question": "In the context of Lacunar Strokes & Small Vessel Disease, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Lacunar Strokes & Small Vessel Disease requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Lacunar Strokes & Small Vessel Disease management.",
    "tags": [
      "Lacunar",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Lacunar Strokes & Small Vessel Disease.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-exp-6-4",
    "chapterId": 6,
    "chapterTitle": "Lacunar Strokes & Small Vessel Disease",
    "vignette": "A 60-year-old patient with stroke risk factors is evaluated under Lacunar Strokes & Small Vessel Disease management guidelines.",
    "question": "In the context of Lacunar Strokes & Small Vessel Disease, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Lacunar Strokes & Small Vessel Disease requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Lacunar Strokes & Small Vessel Disease management.",
    "tags": [
      "Lacunar",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Lacunar Strokes & Small Vessel Disease.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-exp-7-1",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 58-year-old patient with stroke risk factors is evaluated under TOAST Classification & Stroke Etiologies management guidelines.",
    "question": "In the context of TOAST Classification & Stroke Etiologies, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for TOAST Classification & Stroke Etiologies requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for TOAST Classification & Stroke Etiologies management.",
    "tags": [
      "TOAST",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for TOAST Classification & Stroke Etiologies.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-exp-7-2",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 59-year-old patient with stroke risk factors is evaluated under TOAST Classification & Stroke Etiologies management guidelines.",
    "question": "In the context of TOAST Classification & Stroke Etiologies, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for TOAST Classification & Stroke Etiologies requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for TOAST Classification & Stroke Etiologies management.",
    "tags": [
      "TOAST",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for TOAST Classification & Stroke Etiologies.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-exp-7-3",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 60-year-old patient with stroke risk factors is evaluated under TOAST Classification & Stroke Etiologies management guidelines.",
    "question": "In the context of TOAST Classification & Stroke Etiologies, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for TOAST Classification & Stroke Etiologies requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for TOAST Classification & Stroke Etiologies management.",
    "tags": [
      "TOAST",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for TOAST Classification & Stroke Etiologies.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-exp-7-4",
    "chapterId": 7,
    "chapterTitle": "TOAST Classification & Stroke Etiologies",
    "vignette": "A 61-year-old patient with stroke risk factors is evaluated under TOAST Classification & Stroke Etiologies management guidelines.",
    "question": "In the context of TOAST Classification & Stroke Etiologies, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for TOAST Classification & Stroke Etiologies requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for TOAST Classification & Stroke Etiologies management.",
    "tags": [
      "TOAST",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for TOAST Classification & Stroke Etiologies.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-exp-8-1",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 59-year-old patient with stroke risk factors is evaluated under Endovascular Thrombectomy & LVO management guidelines.",
    "question": "In the context of Endovascular Thrombectomy & LVO, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Endovascular Thrombectomy & LVO requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Endovascular Thrombectomy & LVO management.",
    "tags": [
      "Endovascular",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Endovascular Thrombectomy & LVO.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-exp-8-2",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 60-year-old patient with stroke risk factors is evaluated under Endovascular Thrombectomy & LVO management guidelines.",
    "question": "In the context of Endovascular Thrombectomy & LVO, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Endovascular Thrombectomy & LVO requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Endovascular Thrombectomy & LVO management.",
    "tags": [
      "Endovascular",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Endovascular Thrombectomy & LVO.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-exp-8-3",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 61-year-old patient with stroke risk factors is evaluated under Endovascular Thrombectomy & LVO management guidelines.",
    "question": "In the context of Endovascular Thrombectomy & LVO, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Endovascular Thrombectomy & LVO requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Endovascular Thrombectomy & LVO management.",
    "tags": [
      "Endovascular",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Endovascular Thrombectomy & LVO.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-exp-8-4",
    "chapterId": 8,
    "chapterTitle": "Endovascular Thrombectomy & LVO",
    "vignette": "A 62-year-old patient with stroke risk factors is evaluated under Endovascular Thrombectomy & LVO management guidelines.",
    "question": "In the context of Endovascular Thrombectomy & LVO, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Endovascular Thrombectomy & LVO requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Endovascular Thrombectomy & LVO management.",
    "tags": [
      "Endovascular",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Endovascular Thrombectomy & LVO.",
    "source": "Syllabus Notes"
  },
  {
    "id": "q-exp-9-1",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A 60-year-old patient with stroke risk factors is evaluated under Intracranial Atherosclerosis management guidelines.",
    "question": "In the context of Intracranial Atherosclerosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Intracranial Atherosclerosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Intracranial Atherosclerosis management.",
    "tags": [
      "Intracranial",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Intracranial Atherosclerosis.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-9-2",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A 61-year-old patient with stroke risk factors is evaluated under Intracranial Atherosclerosis management guidelines.",
    "question": "In the context of Intracranial Atherosclerosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Intracranial Atherosclerosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Intracranial Atherosclerosis management.",
    "tags": [
      "Intracranial",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Intracranial Atherosclerosis.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-9-3",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A 62-year-old patient with stroke risk factors is evaluated under Intracranial Atherosclerosis management guidelines.",
    "question": "In the context of Intracranial Atherosclerosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Intracranial Atherosclerosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Intracranial Atherosclerosis management.",
    "tags": [
      "Intracranial",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Intracranial Atherosclerosis.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-9-4",
    "chapterId": 9,
    "chapterTitle": "Intracranial Atherosclerosis",
    "vignette": "A 63-year-old patient with stroke risk factors is evaluated under Intracranial Atherosclerosis management guidelines.",
    "question": "In the context of Intracranial Atherosclerosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Intracranial Atherosclerosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Intracranial Atherosclerosis management.",
    "tags": [
      "Intracranial",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Intracranial Atherosclerosis.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-10-1",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 61-year-old patient with stroke risk factors is evaluated under Monogenic & Rare Vasculopathies management guidelines.",
    "question": "In the context of Monogenic & Rare Vasculopathies, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Monogenic & Rare Vasculopathies requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Monogenic & Rare Vasculopathies management.",
    "tags": [
      "Monogenic",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Monogenic & Rare Vasculopathies.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-10-2",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 62-year-old patient with stroke risk factors is evaluated under Monogenic & Rare Vasculopathies management guidelines.",
    "question": "In the context of Monogenic & Rare Vasculopathies, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Monogenic & Rare Vasculopathies requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Monogenic & Rare Vasculopathies management.",
    "tags": [
      "Monogenic",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Monogenic & Rare Vasculopathies.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-10-3",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 63-year-old patient with stroke risk factors is evaluated under Monogenic & Rare Vasculopathies management guidelines.",
    "question": "In the context of Monogenic & Rare Vasculopathies, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Monogenic & Rare Vasculopathies requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Monogenic & Rare Vasculopathies management.",
    "tags": [
      "Monogenic",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Monogenic & Rare Vasculopathies.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-10-4",
    "chapterId": 10,
    "chapterTitle": "Monogenic & Rare Vasculopathies",
    "vignette": "A 64-year-old patient with stroke risk factors is evaluated under Monogenic & Rare Vasculopathies management guidelines.",
    "question": "In the context of Monogenic & Rare Vasculopathies, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Monogenic & Rare Vasculopathies requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Monogenic & Rare Vasculopathies management.",
    "tags": [
      "Monogenic",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Monogenic & Rare Vasculopathies.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-11-1",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 62-year-old patient with stroke risk factors is evaluated under Carotid & Vertebral Stenosis management guidelines.",
    "question": "In the context of Carotid & Vertebral Stenosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Carotid & Vertebral Stenosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Carotid & Vertebral Stenosis management.",
    "tags": [
      "Carotid",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Carotid & Vertebral Stenosis.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-11-2",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 63-year-old patient with stroke risk factors is evaluated under Carotid & Vertebral Stenosis management guidelines.",
    "question": "In the context of Carotid & Vertebral Stenosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Carotid & Vertebral Stenosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Carotid & Vertebral Stenosis management.",
    "tags": [
      "Carotid",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Carotid & Vertebral Stenosis.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-11-3",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 64-year-old patient with stroke risk factors is evaluated under Carotid & Vertebral Stenosis management guidelines.",
    "question": "In the context of Carotid & Vertebral Stenosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Carotid & Vertebral Stenosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Carotid & Vertebral Stenosis management.",
    "tags": [
      "Carotid",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Carotid & Vertebral Stenosis.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-11-4",
    "chapterId": 11,
    "chapterTitle": "Carotid & Vertebral Stenosis",
    "vignette": "A 65-year-old patient with stroke risk factors is evaluated under Carotid & Vertebral Stenosis management guidelines.",
    "question": "In the context of Carotid & Vertebral Stenosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Carotid & Vertebral Stenosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Carotid & Vertebral Stenosis management.",
    "tags": [
      "Carotid",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Carotid & Vertebral Stenosis.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-12-1",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 63-year-old patient with stroke risk factors is evaluated under Cardioembolic Stroke & Atrial Fibrillation management guidelines.",
    "question": "In the context of Cardioembolic Stroke & Atrial Fibrillation, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Cardioembolic Stroke & Atrial Fibrillation requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Cardioembolic Stroke & Atrial Fibrillation management.",
    "tags": [
      "Cardioembolic",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Cardioembolic Stroke & Atrial Fibrillation.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-12-2",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 64-year-old patient with stroke risk factors is evaluated under Cardioembolic Stroke & Atrial Fibrillation management guidelines.",
    "question": "In the context of Cardioembolic Stroke & Atrial Fibrillation, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Cardioembolic Stroke & Atrial Fibrillation requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Cardioembolic Stroke & Atrial Fibrillation management.",
    "tags": [
      "Cardioembolic",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Cardioembolic Stroke & Atrial Fibrillation.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-12-3",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 65-year-old patient with stroke risk factors is evaluated under Cardioembolic Stroke & Atrial Fibrillation management guidelines.",
    "question": "In the context of Cardioembolic Stroke & Atrial Fibrillation, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Cardioembolic Stroke & Atrial Fibrillation requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Cardioembolic Stroke & Atrial Fibrillation management.",
    "tags": [
      "Cardioembolic",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Cardioembolic Stroke & Atrial Fibrillation.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-12-4",
    "chapterId": 12,
    "chapterTitle": "Cardioembolic Stroke & Atrial Fibrillation",
    "vignette": "A 66-year-old patient with stroke risk factors is evaluated under Cardioembolic Stroke & Atrial Fibrillation management guidelines.",
    "question": "In the context of Cardioembolic Stroke & Atrial Fibrillation, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Cardioembolic Stroke & Atrial Fibrillation requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Cardioembolic Stroke & Atrial Fibrillation management.",
    "tags": [
      "Cardioembolic",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Cardioembolic Stroke & Atrial Fibrillation.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-13-1",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 64-year-old patient with stroke risk factors is evaluated under Spontaneous Intracranial Hemorrhage management guidelines.",
    "question": "In the context of Spontaneous Intracranial Hemorrhage, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Spontaneous Intracranial Hemorrhage requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Spontaneous Intracranial Hemorrhage management.",
    "tags": [
      "Spontaneous",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Spontaneous Intracranial Hemorrhage.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-13-2",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 65-year-old patient with stroke risk factors is evaluated under Spontaneous Intracranial Hemorrhage management guidelines.",
    "question": "In the context of Spontaneous Intracranial Hemorrhage, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Spontaneous Intracranial Hemorrhage requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Spontaneous Intracranial Hemorrhage management.",
    "tags": [
      "Spontaneous",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Spontaneous Intracranial Hemorrhage.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-13-3",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 66-year-old patient with stroke risk factors is evaluated under Spontaneous Intracranial Hemorrhage management guidelines.",
    "question": "In the context of Spontaneous Intracranial Hemorrhage, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Spontaneous Intracranial Hemorrhage requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Spontaneous Intracranial Hemorrhage management.",
    "tags": [
      "Spontaneous",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Spontaneous Intracranial Hemorrhage.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-13-4",
    "chapterId": 13,
    "chapterTitle": "Spontaneous Intracranial Hemorrhage",
    "vignette": "A 67-year-old patient with stroke risk factors is evaluated under Spontaneous Intracranial Hemorrhage management guidelines.",
    "question": "In the context of Spontaneous Intracranial Hemorrhage, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Spontaneous Intracranial Hemorrhage requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Spontaneous Intracranial Hemorrhage management.",
    "tags": [
      "Spontaneous",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Spontaneous Intracranial Hemorrhage.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-14-1",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage & Aneurysms",
    "vignette": "A 65-year-old patient with stroke risk factors is evaluated under Subarachnoid Hemorrhage & Aneurysms management guidelines.",
    "question": "In the context of Subarachnoid Hemorrhage & Aneurysms, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Subarachnoid Hemorrhage & Aneurysms requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Subarachnoid Hemorrhage & Aneurysms management.",
    "tags": [
      "Subarachnoid",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Subarachnoid Hemorrhage & Aneurysms.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-exp-14-2",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage & Aneurysms",
    "vignette": "A 66-year-old patient with stroke risk factors is evaluated under Subarachnoid Hemorrhage & Aneurysms management guidelines.",
    "question": "In the context of Subarachnoid Hemorrhage & Aneurysms, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Subarachnoid Hemorrhage & Aneurysms requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Subarachnoid Hemorrhage & Aneurysms management.",
    "tags": [
      "Subarachnoid",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Subarachnoid Hemorrhage & Aneurysms.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-exp-14-3",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage & Aneurysms",
    "vignette": "A 67-year-old patient with stroke risk factors is evaluated under Subarachnoid Hemorrhage & Aneurysms management guidelines.",
    "question": "In the context of Subarachnoid Hemorrhage & Aneurysms, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Subarachnoid Hemorrhage & Aneurysms requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Subarachnoid Hemorrhage & Aneurysms management.",
    "tags": [
      "Subarachnoid",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Subarachnoid Hemorrhage & Aneurysms.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-exp-14-4",
    "chapterId": 14,
    "chapterTitle": "Subarachnoid Hemorrhage & Aneurysms",
    "vignette": "A 68-year-old patient with stroke risk factors is evaluated under Subarachnoid Hemorrhage & Aneurysms management guidelines.",
    "question": "In the context of Subarachnoid Hemorrhage & Aneurysms, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Subarachnoid Hemorrhage & Aneurysms requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Subarachnoid Hemorrhage & Aneurysms management.",
    "tags": [
      "Subarachnoid",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Subarachnoid Hemorrhage & Aneurysms.",
    "source": "Guideline Recommendation"
  },
  {
    "id": "q-exp-15-1",
    "chapterId": 15,
    "chapterTitle": "Pediatric Stroke & Hematology",
    "vignette": "A 66-year-old patient with stroke risk factors is evaluated under Pediatric Stroke & Hematology management guidelines.",
    "question": "In the context of Pediatric Stroke & Hematology, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Pediatric Stroke & Hematology requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Pediatric Stroke & Hematology management.",
    "tags": [
      "Pediatric",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Pediatric Stroke & Hematology.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-15-2",
    "chapterId": 15,
    "chapterTitle": "Pediatric Stroke & Hematology",
    "vignette": "A 67-year-old patient with stroke risk factors is evaluated under Pediatric Stroke & Hematology management guidelines.",
    "question": "In the context of Pediatric Stroke & Hematology, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Pediatric Stroke & Hematology requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Pediatric Stroke & Hematology management.",
    "tags": [
      "Pediatric",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Pediatric Stroke & Hematology.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-15-3",
    "chapterId": 15,
    "chapterTitle": "Pediatric Stroke & Hematology",
    "vignette": "A 68-year-old patient with stroke risk factors is evaluated under Pediatric Stroke & Hematology management guidelines.",
    "question": "In the context of Pediatric Stroke & Hematology, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Pediatric Stroke & Hematology requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Pediatric Stroke & Hematology management.",
    "tags": [
      "Pediatric",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Pediatric Stroke & Hematology.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-15-4",
    "chapterId": 15,
    "chapterTitle": "Pediatric Stroke & Hematology",
    "vignette": "A 69-year-old patient with stroke risk factors is evaluated under Pediatric Stroke & Hematology management guidelines.",
    "question": "In the context of Pediatric Stroke & Hematology, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Pediatric Stroke & Hematology requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Pediatric Stroke & Hematology management.",
    "tags": [
      "Pediatric",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Pediatric Stroke & Hematology.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-16-1",
    "chapterId": 16,
    "chapterTitle": "Cerebral Venous Thrombosis",
    "vignette": "A 67-year-old patient with stroke risk factors is evaluated under Cerebral Venous Thrombosis management guidelines.",
    "question": "In the context of Cerebral Venous Thrombosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Cerebral Venous Thrombosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Cerebral Venous Thrombosis management.",
    "tags": [
      "Cerebral",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Cerebral Venous Thrombosis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-16-2",
    "chapterId": 16,
    "chapterTitle": "Cerebral Venous Thrombosis",
    "vignette": "A 68-year-old patient with stroke risk factors is evaluated under Cerebral Venous Thrombosis management guidelines.",
    "question": "In the context of Cerebral Venous Thrombosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Cerebral Venous Thrombosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Cerebral Venous Thrombosis management.",
    "tags": [
      "Cerebral",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Cerebral Venous Thrombosis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-16-3",
    "chapterId": 16,
    "chapterTitle": "Cerebral Venous Thrombosis",
    "vignette": "A 69-year-old patient with stroke risk factors is evaluated under Cerebral Venous Thrombosis management guidelines.",
    "question": "In the context of Cerebral Venous Thrombosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Cerebral Venous Thrombosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Cerebral Venous Thrombosis management.",
    "tags": [
      "Cerebral",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Cerebral Venous Thrombosis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-16-4",
    "chapterId": 16,
    "chapterTitle": "Cerebral Venous Thrombosis",
    "vignette": "A 70-year-old patient with stroke risk factors is evaluated under Cerebral Venous Thrombosis management guidelines.",
    "question": "In the context of Cerebral Venous Thrombosis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Cerebral Venous Thrombosis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Cerebral Venous Thrombosis management.",
    "tags": [
      "Cerebral",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Cerebral Venous Thrombosis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-17-1",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 68-year-old patient with stroke risk factors is evaluated under Vascular Malformations & Vasculitis management guidelines.",
    "question": "In the context of Vascular Malformations & Vasculitis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Vascular Malformations & Vasculitis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Vascular Malformations & Vasculitis management.",
    "tags": [
      "Vascular",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Vascular Malformations & Vasculitis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-17-2",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 69-year-old patient with stroke risk factors is evaluated under Vascular Malformations & Vasculitis management guidelines.",
    "question": "In the context of Vascular Malformations & Vasculitis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Vascular Malformations & Vasculitis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Vascular Malformations & Vasculitis management.",
    "tags": [
      "Vascular",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Vascular Malformations & Vasculitis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-17-3",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 70-year-old patient with stroke risk factors is evaluated under Vascular Malformations & Vasculitis management guidelines.",
    "question": "In the context of Vascular Malformations & Vasculitis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Vascular Malformations & Vasculitis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Vascular Malformations & Vasculitis management.",
    "tags": [
      "Vascular",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Vascular Malformations & Vasculitis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-17-4",
    "chapterId": 17,
    "chapterTitle": "Vascular Malformations & Vasculitis",
    "vignette": "A 71-year-old patient with stroke risk factors is evaluated under Vascular Malformations & Vasculitis management guidelines.",
    "question": "In the context of Vascular Malformations & Vasculitis, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Vascular Malformations & Vasculitis requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Vascular Malformations & Vasculitis management.",
    "tags": [
      "Vascular",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Vascular Malformations & Vasculitis.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-18-1",
    "chapterId": 18,
    "chapterTitle": "Neuro-ICU & Hemodynamic Management",
    "vignette": "A 69-year-old patient with stroke risk factors is evaluated under Neuro-ICU & Hemodynamic Management management guidelines.",
    "question": "In the context of Neuro-ICU & Hemodynamic Management, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Neuro-ICU & Hemodynamic Management requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Neuro-ICU & Hemodynamic Management management.",
    "tags": [
      "Neuro-ICU",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Neuro-ICU & Hemodynamic Management.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-18-2",
    "chapterId": 18,
    "chapterTitle": "Neuro-ICU & Hemodynamic Management",
    "vignette": "A 70-year-old patient with stroke risk factors is evaluated under Neuro-ICU & Hemodynamic Management management guidelines.",
    "question": "In the context of Neuro-ICU & Hemodynamic Management, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Neuro-ICU & Hemodynamic Management requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Neuro-ICU & Hemodynamic Management management.",
    "tags": [
      "Neuro-ICU",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Neuro-ICU & Hemodynamic Management.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-18-3",
    "chapterId": 18,
    "chapterTitle": "Neuro-ICU & Hemodynamic Management",
    "vignette": "A 71-year-old patient with stroke risk factors is evaluated under Neuro-ICU & Hemodynamic Management management guidelines.",
    "question": "In the context of Neuro-ICU & Hemodynamic Management, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Neuro-ICU & Hemodynamic Management requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Neuro-ICU & Hemodynamic Management management.",
    "tags": [
      "Neuro-ICU",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Neuro-ICU & Hemodynamic Management.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-18-4",
    "chapterId": 18,
    "chapterTitle": "Neuro-ICU & Hemodynamic Management",
    "vignette": "A 72-year-old patient with stroke risk factors is evaluated under Neuro-ICU & Hemodynamic Management management guidelines.",
    "question": "In the context of Neuro-ICU & Hemodynamic Management, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Neuro-ICU & Hemodynamic Management requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Neuro-ICU & Hemodynamic Management management.",
    "tags": [
      "Neuro-ICU",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Neuro-ICU & Hemodynamic Management.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-19-1",
    "chapterId": 19,
    "chapterTitle": "Secondary Prevention & Antithrombotics",
    "vignette": "A 70-year-old patient with stroke risk factors is evaluated under Secondary Prevention & Antithrombotics management guidelines.",
    "question": "In the context of Secondary Prevention & Antithrombotics, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Secondary Prevention & Antithrombotics requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Secondary Prevention & Antithrombotics management.",
    "tags": [
      "Secondary",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Secondary Prevention & Antithrombotics.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-19-2",
    "chapterId": 19,
    "chapterTitle": "Secondary Prevention & Antithrombotics",
    "vignette": "A 71-year-old patient with stroke risk factors is evaluated under Secondary Prevention & Antithrombotics management guidelines.",
    "question": "In the context of Secondary Prevention & Antithrombotics, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Secondary Prevention & Antithrombotics requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Secondary Prevention & Antithrombotics management.",
    "tags": [
      "Secondary",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Secondary Prevention & Antithrombotics.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-19-3",
    "chapterId": 19,
    "chapterTitle": "Secondary Prevention & Antithrombotics",
    "vignette": "A 72-year-old patient with stroke risk factors is evaluated under Secondary Prevention & Antithrombotics management guidelines.",
    "question": "In the context of Secondary Prevention & Antithrombotics, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Secondary Prevention & Antithrombotics requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Secondary Prevention & Antithrombotics management.",
    "tags": [
      "Secondary",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Secondary Prevention & Antithrombotics.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-19-4",
    "chapterId": 19,
    "chapterTitle": "Secondary Prevention & Antithrombotics",
    "vignette": "A 73-year-old patient with stroke risk factors is evaluated under Secondary Prevention & Antithrombotics management guidelines.",
    "question": "In the context of Secondary Prevention & Antithrombotics, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Secondary Prevention & Antithrombotics requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Secondary Prevention & Antithrombotics management.",
    "tags": [
      "Secondary",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Secondary Prevention & Antithrombotics.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-20-1",
    "chapterId": 20,
    "chapterTitle": "Rehabilitation & Prognostication",
    "vignette": "A 71-year-old patient with stroke risk factors is evaluated under Rehabilitation & Prognostication management guidelines.",
    "question": "In the context of Rehabilitation & Prognostication, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Rehabilitation & Prognostication requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Rehabilitation & Prognostication management.",
    "tags": [
      "Rehabilitation",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Rehabilitation & Prognostication.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-20-2",
    "chapterId": 20,
    "chapterTitle": "Rehabilitation & Prognostication",
    "vignette": "A 72-year-old patient with stroke risk factors is evaluated under Rehabilitation & Prognostication management guidelines.",
    "question": "In the context of Rehabilitation & Prognostication, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Rehabilitation & Prognostication requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Rehabilitation & Prognostication management.",
    "tags": [
      "Rehabilitation",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Rehabilitation & Prognostication.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-20-3",
    "chapterId": 20,
    "chapterTitle": "Rehabilitation & Prognostication",
    "vignette": "A 73-year-old patient with stroke risk factors is evaluated under Rehabilitation & Prognostication management guidelines.",
    "question": "In the context of Rehabilitation & Prognostication, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Rehabilitation & Prognostication requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Rehabilitation & Prognostication management.",
    "tags": [
      "Rehabilitation",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Rehabilitation & Prognostication.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-20-4",
    "chapterId": 20,
    "chapterTitle": "Rehabilitation & Prognostication",
    "vignette": "A 74-year-old patient with stroke risk factors is evaluated under Rehabilitation & Prognostication management guidelines.",
    "question": "In the context of Rehabilitation & Prognostication, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Rehabilitation & Prognostication requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Rehabilitation & Prognostication management.",
    "tags": [
      "Rehabilitation",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Rehabilitation & Prognostication.",
    "source": "Past Board Exam"
  },
  {
    "id": "q-exp-21-1",
    "chapterId": 21,
    "chapterTitle": "Landmark Clinical Trials Master Summary",
    "vignette": "A 72-year-old patient with stroke risk factors is evaluated under Landmark Clinical Trials Master Summary management guidelines.",
    "question": "In the context of Landmark Clinical Trials Master Summary, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Landmark Clinical Trials Master Summary requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Landmark Clinical Trials Master Summary management.",
    "tags": [
      "Landmark",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Landmark Clinical Trials Master Summary.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-21-2",
    "chapterId": 21,
    "chapterTitle": "Landmark Clinical Trials Master Summary",
    "vignette": "A 73-year-old patient with stroke risk factors is evaluated under Landmark Clinical Trials Master Summary management guidelines.",
    "question": "In the context of Landmark Clinical Trials Master Summary, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Landmark Clinical Trials Master Summary requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Landmark Clinical Trials Master Summary management.",
    "tags": [
      "Landmark",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Landmark Clinical Trials Master Summary.",
    "source": "Landmark Trial"
  },
  {
    "id": "q-exp-21-3",
    "chapterId": 21,
    "chapterTitle": "Landmark Clinical Trials Master Summary",
    "vignette": "A 74-year-old patient with stroke risk factors is evaluated under Landmark Clinical Trials Master Summary management guidelines.",
    "question": "In the context of Landmark Clinical Trials Master Summary, which diagnostic or therapeutic intervention represents standard evidence-based board practice?",
    "options": [
      {
        "id": "A",
        "text": "Adhere strictly to standardized guidelines and randomized clinical trial protocol criteria"
      },
      {
        "id": "B",
        "text": "Delay all diagnostic testing for 48 hours"
      },
      {
        "id": "C",
        "text": "Administer empiric high-dose steroids to all patients"
      },
      {
        "id": "D",
        "text": "Avoid secondary stroke prevention medications"
      },
      {
        "id": "E",
        "text": "Perform non-indicated emergency invasive procedures"
      }
    ],
    "correctOptionId": "A",
    "explanation": "Standard care for Landmark Clinical Trials Master Summary requires adherence to validated guidelines, precise diagnostic localization, and risk factor modification as demonstrated in landmark clinical trials.",
    "keyTakeaway": "Adhere strictly to guidelines for Landmark Clinical Trials Master Summary management.",
    "tags": [
      "Landmark",
      "Board Practice",
      "Clinical Guidelines"
    ],
    "hint": "Focus on core evidence-based protocols for Landmark Clinical Trials Master Summary.",
    "source": "Landmark Trial"
  }
];
