import json

# Python script to generate high-yield Vascular Neurology flashcards
# Target: ~100 for Neuroanatomy & Stroke Syndromes, high coverage for all 21 chapters!

flashcards = []

def add_fc(id_num, ch_id, ch_title, q, a, exp="", tag="Board Classic"):
    flashcards.append({
        "id": f"fc-{id_num}",
        "chapterId": ch_id,
        "chapterTitle": ch_title,
        "question": q,
        "answer": a,
        "explanation": exp,
        "highYieldTag": tag
    })

fc_id = 1

# ==============================================================================
# CHAPTER 3: VASCULAR NEUROANATOMY (Target: ~100 Flashcards)
# ==============================================================================
ch3_title = "Vascular Neuroanatomy"
ch3_id = 3

neuroanatomy_cards = [
    # Circle of Willis & Anterior Circulation
    ("What artery connects the right and left Anterior Cerebral Arteries (ACAs)?", 
     "Anterior Communicating Artery (ACoA).", 
     "Most common site of intracranial saccular aneurysms (~30-35%).", "Circle of Willis"),
    ("Which artery connects the Internal Carotid Artery (ICA) to the Posterior Cerebral Artery (PCA)?", 
     "Posterior Communicating Artery (PCoA).", 
     "Aneurysms here classically cause painful ipsilateral CN III palsy with pupil dilation.", "Circle of Willis"),
    ("What are the four segments of the Internal Carotid Artery (ICA) from proximal to distal?", 
     "Cervical (C1), Petrous (C2), Lacerum (C3), Cavernous (C4), Clinoid (C5), Ophthalmic (C6), Communicating (C7).", 
     "Bouthillier ICA classification system.", "Anatomy"),
    ("Which vessel gives rise to the Anterior Choroidal Artery (AChA)?", 
     "Distal Internal Carotid Artery (C7 segment, just before ICA bifurcation).", 
     "Supplies posterior limb of internal capsule, optic tract, and lateral geniculate nucleus.", "Anatomy"),
    ("What is the clinical triad of Anterior Choroidal Artery stroke?", 
     "1. Contralateral Hemiplegia\n2. Contralateral Hemisensory Loss\n3. Contralateral Homonymous Hemianopia", 
     "PLIC = motor, VPL/VPN thalamus = sensory, LGN/optic tract = visual fields.", "High Yield Triad"),
    ("What anatomical structure is supplied by the Recurrent Artery of Heubner?", 
     "Anterior limb of internal capsule (ALIC), head of caudate nucleus, and anterior globus pallidus.", 
     "Arises from proximal A2 (or A1) ACA. Causes contralateral face/arm weakness, dysarthria, and chorea.", "Anatomy"),
    ("Which cortical areas are supplied by the M1 (stem) segment lenticulostriate penetrating arteries?", 
     "Posterior limb of internal capsule, putamen, and globus pallidus externus.", 
     "Occlusion or lipohyalinosis leads to classic Pure Motor Lacunar Stroke.", "Anatomy"),
    ("Which cortical surface of the brain is supplied by the Anterior Cerebral Artery (ACA)?", 
     "Medial surface of the frontal and parietal lobes.", 
     "Includes lower extremity motor and sensory homunculus and paracentral lobule.", "Anatomy"),
    ("Which cortical regions are supplied by the Middle Cerebral Artery (MCA) Superior Division?", 
     "Lateral frontal lobe, precentral gyrus, Broca's area (dominant hemisphere), and anterior parietal lobe.", 
     "Causes contralateral face/arm weakness, Broca's aphasia, and motor deficits.", "Anatomy"),
    ("Which cortical regions are supplied by the Middle Cerebral Artery (MCA) Inferior Division?", 
     "Lateral temporal lobe, Wernicke's area (dominant hemisphere), non-dominant parietal lobule, and optic radiations.", 
     "Causes Wernicke's aphasia, homonymous superior quadrantanopia, or hemispatial neglect.", "Anatomy"),
    ("What artery supplies the primary visual cortex (calcarine sulcus)?", 
     "Calcarine branch of the Posterior Cerebral Artery (PCA).", 
     "Occlusion causes contralateral homonymous hemianopia with macular sparing.", "Anatomy"),
    ("Why is macular vision spared in PCA calcarine branch infarction?", 
     "Because the occipital pole (macular representation) receives dual blood supply from terminal MCA branches.", 
     "Dual supply buffers the macular region against isolated PCA occlusion.", "Visual Fields"),
    ("Which artery supplies the Paracentral Lobule (controlling micturition and leg motor/sensory function)?", 
     "Anterior Cerebral Artery (ACA).", 
     "Occlusion leads to contralateral leg weakness and urinary incontinence.", "Anatomy"),
    ("What artery supplies Broca's area in the dominant frontal lobe?", 
     "Superior division of the Left Middle Cerebral Artery (MCA).", 
     "Brodmann areas 44 and 45 (inferior frontal gyrus).", "Aphasia"),
    ("What artery supplies Wernicke's area in the dominant temporal lobe?", 
     "Inferior division of the Left Middle Cerebral Artery (MCA).", 
     "Brodmann area 22 (posterior superior temporal gyrus).", "Aphasia"),
    ("Which artery supplies the Angular Gyrus in the dominant parietal lobe?", 
     "Inferior division / parietal branch of the Left MCA.", 
     "Damage causes Gerstmann Syndrome (agraphia, acalculia, R-L disorientation, finger agnosia).", "Syndromes"),

    # Brainstem Neuroanatomy & Vascular Supply
    ("What vessel supplies the anteromedial midbrain (cerebral peduncle and CN III fibers)?", 
     "Paramedian penetrating branches of the P1 segment of PCA (and PCoA).", 
     "Occlusion causes Weber Syndrome (IPS CN III palsy + CTL hemiparesis).", "Brainstem Anatomy"),
    ("What structure in the midbrain is damaged in Claude Syndrome to cause ataxia?", 
     "Red nucleus and superior cerebellar peduncle.", 
     "Supplied by P1 PCA penetrating branches. Causes IPS CN III palsy + CTL ataxia.", "Brainstem Anatomy"),
    ("Which structure in the midbrain is damaged in Benedikt Syndrome to cause involuntary movements?", 
     "Substantia nigra and red nucleus.", 
     "Causes IPS CN III palsy + CTL chorea/athetosis/tremor + CTL hemiparesis.", "Brainstem Anatomy"),
    ("What vascular branches supply the anteromedial pons (basis pontis and corticospinal tract)?", 
     "Paramedian penetrating branches of the Basilar Artery.", 
     "Occlusion causes Pure Motor Hemiparesis or Millard-Gubler / Foville syndromes.", "Brainstem Anatomy"),
    ("Which vessel supplies the lateral pons (CN V, VII, VIII nuclei and spinothalamic tract)?", 
     "Anterior Inferior Cerebellar Artery (AICA).", 
     "AICA stroke causes IPS facial palsy, IPS deafness/tinnitus, IPS Horner's, IPS ataxia, and CTL body pain/temp loss.", "Brainstem Anatomy"),
    ("What key sensory feature distinguishes an AICA stroke from a PICA stroke?", 
     "IPS Auditory loss / deafness and tinnitus occur in AICA stroke (cochlear nerve / labyrinthine artery supply).", 
     "PICA stroke does NOT cause hearing loss.", "High Yield Differential"),
    ("Which artery gives rise to the Labyrinthine (Internal Auditory) Artery in > 85% of individuals?", 
     "Anterior Inferior Cerebellar Artery (AICA).", 
     "Occlusion causes sudden sensorineural hearing loss and vertigo.", "Anatomy"),
    ("What arterial territory supplies the lateral medulla?", 
     "Posterior Inferior Cerebellar Artery (PICA) or intracranial Vertebral Artery (V4 segment).", 
     "Occlusion causes Wallenberg Syndrome (Lateral Medullary Syndrome).", "Brainstem Anatomy"),
    ("Why is motor strength SPARED in Wallenberg (Lateral Medullary) Syndrome?", 
     "Because the corticospinal tract is located in the MEDIAL medulla (supplied by the Anterior Spinal Artery).", 
     "PICA supplies the LATERAL medulla only.", "Board Classic"),
    ("What vessel supplies the medial medulla (pyramid, medial lemniscus, CN XII)?", 
     "Anterior Spinal Artery (ASA) or paramedian vertebral artery branches.", 
     "Occlusion causes Dejerine (Medial Medullary) Syndrome: IPS tongue weakness (CN XII) + CTL hemiparesis + CTL loss of vibration/proprioception.", "Brainstem Anatomy"),
    ("What cranial nerve nucleus is located in the dorsomedial midbrain beneath the superior colliculi?", 
     "Oculomotor (CN III) nucleus and Edinger-Westphal nucleus.", 
     "Supplied by PCA paramedian branches.", "Anatomy"),
    ("What structure connects the CN VI nucleus to the contralateral CN III nucleus for coordinated horizontal gaze?", 
     "Medial Longitudinal Fasciculus (MLF).", 
     "Lesion causes Internuclear Ophthalmoplegia (INO): adduction deficit on ipsilateral side of MLF lesion with abducting nystagmus.", "Ocular Motor"),
    ("Which brainstem nucleus controls ipsilateral conjugate horizontal gaze?", 
     "Abducens (CN VI) nucleus / Paramedian Pontine Reticular Formation (PPRF).", 
     "Located in the caudal dorsal pons. Lesion causes inability to look toward side of lesion.", "Ocular Motor"),

    # Thalamic Vascular Anatomy
    ("What are the four major vascular territories of the thalamus?", 
     "1. Tuberothalamic (Anterior)\n2. Paramedian (Percheron)\n3. Thalamogeniculate (Posterolateral)\n4. Posterior Choroidal (Posteromedial)", 
     "Thalamic strokes present with distinct neuro-behavioral and sensory patterns.", "Thalamus"),
    ("What is the Artery of Percheron?", 
     "A rare single variant trunk arising from one P1 PCA segment that supplies BILATERAL paramedian thalami and rostral midbrain.", 
     "Occlusion causes bilateral thalamic infarctions presenting with coma, vertical gaze palsy, and memory deficit.", "Anatomy Variant"),
    ("What sensory loss occurs in Thalamogeniculate Artery stroke?", 
     "Contralateral loss of all sensory modalities (pain, temp, touch, vibration, proprioception) due to VPL/VPM damage.", 
     "Can lead to Dejerine-Roussy Syndrome (thalamic pain syndrome weeks-to-months later).", "Thalamus"),
    ("What clinical syndrome is characterized by severe delayed neuropathic pain following a thalamic stroke?", 
     "Dejerine-Roussy Syndrome (Central Thalamic Pain Syndrome).", 
     "Occurs post-VPL/VPM infarction; treated with Gabapentin, Pregabalin, or TCA.", "Thalamus"),

    # Venous Anatomy
    ("Where do the Superior Sagittal Sinus and Straight Sinus drain?", 
     "Confluence of Sinuses (Torcular Herophili).", 
     "Located at the internal occipital protuberance.", "Venous Anatomy"),
    ("What venous structure is formed by the junction of the Inferior Sagittal Sinus and Great Vein of Galen?", 
     "Straight Sinus (Sinus Rectus).", 
     "Drains deep venous structures (Internal Cerebral Veins).", "Venous Anatomy"),
    ("What structures pass THROUGH the center of the Cavernous Sinus?", 
     "Internal Carotid Artery (ICA) and Abducens Nerve (CN VI).", 
     "CN VI is most vulnerable to cavernous sinus pathology (e.g., thrombosis, ICA aneurysm).", "Cavernous Sinus"),
    ("What structures pass along the LATERAL WALL of the Cavernous Sinus?", 
     "CN III (Oculomotor), CN IV (Trochlear), CN V1 (Ophthalmic), and CN V2 (Maxillary).", 
     "Note: CN V3 and CN VI do NOT run in the lateral wall.", "Cavernous Sinus"),
    ("Where does the Sigmoid Sinus exit the skull to become the Internal Jugular Vein?", 
     "Jugular Foramen.", 
     "Transmits CN IX, X, XI, and Internal Jugular Vein.", "Venous Anatomy"),
    ("Which dural venous sinus runs along the inferior attachment of the falx cerebri?", 
     "Inferior Sagittal Sinus.", 
     "Joins Vein of Galen to form Straight Sinus.", "Venous Anatomy"),
    ("Which brain regions lack a Blood-Brain Barrier (BBB)?", 
     "Circumventricular organs: Area Postrema, Hypophysis (pituitary), Pineal gland, OVLT, Subfornical organ.", 
     "Allows direct sensing of hormones, osmolarity, and toxins (area postrema vomiting center).", "BBB Anatomy"),
    ("What cell type forms the outer physical barrier component of the Blood-Brain Barrier tight junctions?", 
     "Non-fenestrated Endothelial Cells with Claudin/Occludin tight junctions, supported by Astrocyte end-feet.", 
     "Essential for maintaining central nervous system homeostasis.", "BBB Anatomy"),

    # Spinal Cord & Deep Brain Vascularization
    ("What artery supplies the anterior two-thirds of the spinal cord?", 
     "Anterior Spinal Artery (ASA).", 
     "Arises from paired vertebral artery branches. Occlusion causes motor paralysis and loss of pain/temp below lesion.", "Spinal Cord"),
    ("What major radicular artery supplies the lower thoracic and lumbar spinal cord (T9-L2)?", 
     "Artery of Adamkiewicz (Great Anterior Radiculomedullary Artery).", 
     "Usually arises on the left side (T9-T12). Injury during thoracoabdominal aortic surgery causes spinal cord ischemia.", "Spinal Cord"),
    ("What posterior spinal pathways are SPARED in Anterior Spinal Artery Syndrome?", 
     "Dorsal Columns (Gracile and Cuneate fasciculi supplying vibration and proprioception).", 
     "Dorsal columns are supplied by paired Posterior Spinal Arteries (PSA).", "Spinal Cord"),
    ("What deep brain structure is supplied by the Anterior Communicating Artery (ACoA) perforators?", 
     "Anterior hypothalamus, optic chiasm, and septal nuclei.", 
     "ACoA aneurysm rupture/repair can cause anterograde amnesia and confabulation (Korsakoff-like syndrome).", "Anatomy"),
]

for q, a, exp, tag in neuroanatomy_cards:
    add_fc(fc_id, 3, "Vascular Neuroanatomy", q, a, exp, tag)
    fc_id += 1

# ==============================================================================
# CHAPTER 4 & 5: STROKE SYNDROMES (Target: ~100 Flashcards)
# ==============================================================================
ch4_title = "Ischemic & Posterior Circulation Stroke Syndromes"

syndrome_cards = [
    # Anterior Circulation Syndromes
    ("What four clinical features define Gerstmann Syndrome?", 
     "1. Agraphia (inability to write)\n2. Acalculia (inability to calculate)\n3. Right-Left Disorientation\n4. Finger Agnosia", 
     "Lesion: Dominant (left) inferior parietal lobule (angular gyrus).", "Gerstmann"),
    ("What is Anton Syndrome (Visual Anosognosia)?", 
     "Denial of blindness in a patient with cortical blindness due to bilateral PCA occipital lobe infarctions.", 
     "Patients adamantly claim they can see despite complete blindness and confabulate visual descriptions.", "Anton Syndrome"),
    ("What is Balint Syndrome, and what lesion causes it?", 
     "Triad: 1. Simultanagnosia (cannot perceive >1 object at once)\n2. Optic Ataxia (cannot reach for objects under visual guidance)\n3. Ocular Apraxia (cannot voluntarily fixate gaze).\nLesion: Bilateral parieto-occipital watershed infarctions.", "Balint Syndrome"),
    ("What is Alien Hand Syndrome, and which arterial occlusion causes it?", 
     "Involuntary, autonomous non-purposeful movement of one hand.\nLesion: Corpus callosum / medial frontal lobe (ACA stroke).", 
     "Frontal/callosal disconnection syndrome.", "Syndromes"),
    ("How do Transcranial Aphasias differ from Broca and Wernicke Aphasias?", 
     "REPETITION IS PRESERVED in Transcranial Aphasias!", 
     "Caused by watershed borderzone infarctions that isolate the intact perisylvian language core.", "Aphasia"),
    ("What are the key features of Broca's Aphasia?", 
     "Non-fluent, effortful speech, impaired repetition, PRESERVED comprehension.", 
     "Left MCA superior division stroke involving inferior frontal gyrus (Brodmann 44/45).", "Broca Aphasia"),
    ("What are the key features of Wernicke's Aphasia?", 
     "Fluent, paraphasic speech ('word salad'), IMPAIRED comprehension, IMPAIRED repetition.", 
     "Left MCA inferior division stroke involving posterior superior temporal gyrus (Brodmann 22).", "Wernicke Aphasia"),
    ("What are the key features of Global Aphasia?", 
     "Non-fluent speech, IMPAIRED comprehension, IMPAIRED repetition.", 
     "Large left MCA stem (M1) occlusion damaging both Broca's and Wernicke's areas.", "Aphasia"),
    ("What are the key features of Conduction Aphasia?", 
     "Fluent speech, good comprehension, SEVERELY IMPAIRED REPETITION.", 
     "Lesion of the Arcuate Fasciculus connecting Wernicke's and Broca's areas.", "Conduction Aphasia"),
    ("What visual field deficit is caused by a lesion in Meyer's Loop (temporal lobe optic radiation)?", 
     "Contralateral Superior Homonymous Quadrantanopia ('Pie in the Sky').", 
     "Supplied by MCA inferior division.", "Visual Fields"),
    ("What visual field deficit is caused by a lesion in Baum's Loop (parietal lobe optic radiation)?", 
     "Contralateral Inferior Homonymous Quadrantanopia ('Pie on the Floor').", 
     "Supplied by MCA superior division.", "Visual Fields"),

    # Brainstem Syndromes (Midbrain, Pons, Medulla)
    ("What is Weber Syndrome?", 
     "Ventral midbrain stroke.\nTriad: Ipsilateral CN III palsy + Contralateral hemiparesis.", 
     "Lesion: Cerebral peduncle & CN III fascicles (P1 PCA paramedian branches).", "Midbrain Syndrome"),
    ("What is Claude Syndrome?", 
     "Dorsomedial midbrain stroke.\nTriad: Ipsilateral CN III palsy + Contralateral ataxia and intention tremor.", 
     "Lesion: Red nucleus & superior cerebellar peduncle (P1 PCA branches).", "Midbrain Syndrome"),
    ("What is Benedikt Syndrome?", 
     "Tegmental midbrain stroke.\nTriad: Ipsilateral CN III palsy + Contralateral chorea, athetosis, tremor, and hemiparesis.", 
     "Lesion: Red nucleus, substantia nigra, and corticospinal tract.", "Midbrain Syndrome"),
    ("What is Nothnagel Syndrome?", 
     "Midbrain tectal lesion.\nTriad: Ipsilateral CN III palsy + Ipsilateral/Bilateral cerebellar ataxia + Gaze palsy.", 
     "Involves CN III fascicles and superior cerebellar peduncle.", "Midbrain Syndrome"),
    ("What is Parinaud Syndrome (Dorsal Midbrain / Pineal Region Syndrome)?", 
     "Features: 1. Upward gaze palsy\n2. Convergence-retraction nystagmus\n3. Light-near pupillary dissociation (pseudo-Argyll Robertson)\n4. Eyelid retraction (Collier sign).", 
     "Lesion: Dorsal midbrain tectum / superior colliculi (hydrocephalus, pineal tumor, PCA stroke).", "Parinaud"),
    ("What is Wallenberg Syndrome (Lateral Medullary Syndrome)?", 
     "PICA / Vertebral Artery stroke.\nFeatures: IPS facial pain/temp loss (CN V), IPS Horner's, IPS ataxia, IPS dysphagia/hoarseness (CN IX/X nucleus ambiguus), CTL body pain/temp loss. MOTOR SPARED!", "Wallenberg"),
    ("What is Dejerine Syndrome (Medial Medullary Syndrome)?", 
     "Anterior Spinal Artery / Vertebral Artery stroke.\nTriad: 1. IPS tongue weakness/atrophy (CN XII)\n2. CTL hemiparesis (sparing face)\n3. CTL loss of vibration/proprioception (medial lemniscus).", "Dejerine"),
    ("What is Millard-Gubler Syndrome (Ventral Pontine Syndrome)?", 
     "Paramedian basilar artery stroke.\nTriad: 1. IPS CN VII palsy (lower motor neuron, including forehead)\n2. IPS CN VI palsy (abducens)\n3. CTL hemiparesis.", "Millard-Gubler"),
    ("What is Foville Syndrome?", 
     "Caudal pontine tegmental stroke.\nFeatures: IPS facial palsy (CN VII) + IPS conjugate horizontal gaze palsy (CN VI nucleus/PPRF) + CTL hemiparesis.", "Foville"),
    ("What is Raymond Syndrome?", 
     "Ventral pontine stroke.\nTriad: IPS CN VI palsy + CTL hemiparesis (sparing CN VII).", 
     "Involves abducens fascicles and corticospinal tract.", "Pontine Syndrome"),
    ("What is Marie-Foix Syndrome?", 
     "Lateral pontine stroke (AICA branch occlusion).\nFeatures: IPS cerebellar ataxia + IPS facial weakness (CN VII) + IPS hearing loss (CN VIII) + CTL body pain/temp loss.", "Marie-Foix"),
    ("What is Locked-In Syndrome?", 
     "Bilateral ventral pontine infarction due to complete Basilar Artery occlusion.\nFeatures: Quadriplegia & aphonia with SPARED consciousness, vertical eye movements, and blinking.", "Locked-In"),
    ("What brainstem pathway is SPARED in Locked-In Syndrome to allow vertical eye movements?", 
     "Midbrain tectum / Rostral Interstitial Nucleus of MLF (riMLF), located ABOVE the pons.", 
     "Allows communication via vertical eye blinks.", "Locked-In"),
    ("What is Top-of-the-Basilar Syndrome?", 
     "Embolic occlusion of the rostral Basilar Artery bifurcation.\nFeatures: Somnolence/coma, visual field loss, memory deficits, vertical gaze palsies, and pupillary abnormalities.", "Top of Basilar"),

    # Lacunar Syndromes
    ("What are the five classic Lacunar Stroke Syndromes described by C. Miller Fisher?", 
     "1. Pure Motor Hemiparesis\n2. Pure Sensory Stroke\n3. Sensorimotor Stroke\n4. Ataxic Hemiparesis\n5. Clumsy Hand-Dysarthria Syndrome", 
     "Caused by lipohyalinosis of small penetrating arterioles (< 15 mm diameter).", "Lacunar"),
    ("Where is the lesion located in Pure Sensory Lacunar Stroke?", 
     "Ventral Posterolateral (VPL) nucleus of the thalamus.", 
     "Presents with contralateral numbness/tingling involving face, arm, and leg.", "Pure Sensory"),
    ("Where is the lesion located in Ataxic Hemiparesis Lacunar Syndrome?", 
     "Posterior limb of internal capsule, basis pontis, or corona radiata.", 
     "Presents with weakness and out-of-proportion ataxia on the same side.", "Lacunar"),
    ("Where is the lesion located in Clumsy Hand-Dysarthria Lacunar Syndrome?", 
     "Anterior limb of internal capsule or paramedian basis pontis.", 
     "Presents with dysarthria, facial weakness, dysphagia, and hand clumsiness.", "Lacunar"),

    # Ophthalmic & Neuro-vascular Syndromes
    ("What is Amaurosis Fugax?", 
     "Transient monocular vision loss ('curtain dropping down over one eye') lasting minutes.", 
     "Caused by ipsilateral internal carotid artery stenosis / microembolus to retinal artery.", "Amaurosis Fugax"),
    ("What fundoscopic finding indicates cholesterol embolization to retinal arterioles in Amaurosis Fugax?", 
     "Hollenhorst Plaque (bright yellow refractile cholesterol crystal at arterial bifurcation).", "Hollenhorst"),
    ("What fundoscopic finding is classic for Central Retinal Artery Occlusion (CRAO)?", 
     "Cherry-Red Spot at the macula with diffuse pale, edematous retina.", "CRAO"),
    ("What is Subclavian Steal Syndrome?", 
     "Stenosis of proximal Subclavian Artery proximal to Vertebral Artery origin.\nFeatures: Arm exercise causes blood flow reversal in vertebral artery -> posterior circulation TIAs + lower SBP in affected arm (> 15 mmHg difference).", "Subclavian Steal"),
]

for q, a, exp, tag in syndrome_cards:
    add_fc(fc_id, 4, "Ischemic & Posterior Circulation Stroke Syndromes", q, a, exp, tag)
    fc_id += 1

# ==============================================================================
# OTHER CHAPTERS (1, 2, 6-21) HIGH-YIELD FLASHCARDS
# ==============================================================================
other_cards = [
    # Ch 1 & 2: Emergency & Thrombolysis
    (1, "Emergency Code Stroke Assessment", "What is the primary objective of non-contrast head CT in acute stroke code?", 
     "Exclude acute intracranial hemorrhage and assess early ischemic change extent (ASPECTS).", 
     "Must be completed immediately upon ED arrival.", "Code Stroke"),
    (2, "Initial Stroke Evaluation & Thrombolysis", "What is the time window for IV Alteplase (tPA) administration in eligible ischemic stroke?", 
     "Within 0 to 4.5 hours from Last Known Normal (LKN).", 
     "NINDS trial (0-3h) and ECASS III trial (3-4.5h).", "tPA Window"),
    (2, "Initial Stroke Evaluation & Thrombolysis", "What dosing regimen is used for IV Alteplase (tPA)?", 
     "0.9 mg/kg (max 90 mg total): 10% IV bolus over 1 minute, remaining 90% infused over 60 minutes.", 
     "Must maintain SBP < 185/110 prior to start.", "tPA Dosing"),
    (2, "Initial Stroke Evaluation & Thrombolysis", "What single lab test is strictly required prior to tPA infusion?", 
     "Finger-stick blood glucose.", 
     "Unless coagulopathy or active anticoagulant use is suspected.", "tPA Safety"),

    # Ch 7: TOAST Classification
    (7, "TOAST Classification & Stroke Etiologies", "What are the 5 categories of the TOAST stroke classification system?", 
     "1. Large Artery Atherosclerosis\n2. Cardioembolism\n3. Small Vessel Occlusion (Lacunar)\n4. Stroke of Other Determined Etiology\n5. Stroke of Undetermined Etiology (Cryptogenic)", 
     "Standard classification used in clinical trials and boards.", "TOAST"),

    # Ch 8: Thrombectomy & LVO
    (8, "Endovascular Thrombectomy & LVO", "What is the maximum time window for mechanical thrombectomy in LVO with penumbral mismatch?", 
     "Up to 24 hours from Last Known Normal (DAWN and DEFUSE 3 trials).", 
     "Requires CTA/CTP or MRI perfusion core-penumbra mismatch.", "Thrombectomy"),
    (8, "Endovascular Thrombectomy & LVO", "What ASPECTS score threshold on CT head qualifies LVO patients for thrombectomy in standard window?", 
     "ASPECTS >= 6 (SELECT2 and ANGEL-ASPECT show benefit even in large core 3-5 in select cases).", 
     "ASPECTS 10 = normal CT; 0 = total MCA infarction.", "ASPECTS"),

    # Ch 9: Intracranial Atherosclerosis
    (9, "Intracranial Atherosclerosis", "What did the SAMMPRIS trial prove regarding 70-99% symptomatic ICAD?", 
     "Aggressive medical management (DAPT + statin + BP control) is vastly SUPERIOR to intracranial stenting.", 
     "Stenting had a 14.7% 30-day stroke/death rate vs 5.8% for medical therapy.", "SAMMPRIS"),

    # Ch 10: Genetic Vasculopathies
    (10, "Monogenic & Rare Vasculopathies", "What gene is mutated in CADASIL?", 
     "NOTCH3 gene on chromosome 19.", 
     "Autosomal dominant; MRI shows temporal pole hyperintensity.", "CADASIL"),
    (10, "Monogenic & Rare Vasculopathies", "What enzyme is deficient in Fabry Disease?", 
     "Alpha-galactosidase A (GLA gene; X-linked recessive).", 
     "Causes acroparesthesias, angiokeratomas, young stroke, and renal failure.", "Fabry"),

    # Ch 11: Carotid Stenosis
    (11, "Carotid & Vertebral Stenosis", "What is the NASCET indication threshold for early CEA in symptomatic carotid stenosis?", 
     "70% to 99% stenosis (provides 17% absolute risk reduction at 2 years if done within 14 days).", 
     "Do NOT operate on 100% total occlusion.", "NASCET"),

    # Ch 12: Cardioembolic & AFib
    (12, "Cardioembolic Stroke & Atrial Fibrillation", "What are the components of the CHA2DS2-VASc score?", 
     "C: CHF (1)\nH: HTN (1)\nA2: Age >= 75 (2)\nD: Diabetes (1)\nS2: Stroke/TIA (2)\nV: Vascular disease (1)\nA: Age 65-74 (1)\nSc: Sex category Female (1)", 
     "Score >= 2 in men or >= 3 in women mandates anticoagulation.", "CHA2DS2-VASc"),
    (12, "Cardioembolic Stroke & Atrial Fibrillation", "What score on CHA2DS2-VASc mandates oral anticoagulation for non-valvular AFib?", 
     ">= 2 points in men or >= 3 points in women.", 
     "DOACs preferred over Warfarin.", "Anticoagulation"),

    # Ch 13: Intracranial Hemorrhage
    (13, "Spontaneous Intracranial Hemorrhage", "What formula is used to calculate ICH volume on non-contrast CT?", 
     "ABC / 2 (where A = max diameter, B = perpendicular diameter, C = number of 1cm CT slices).", 
     "Volume >= 30 mL adds 1 point to ICH score.", "ICH Volume"),
    (13, "Spontaneous Intracranial Hemorrhage", "What SBP target was evaluated in INTERACT-2 and ATACH-2 for acute spontaneous ICH?", 
     "Target SBP < 140 mmHg within 1 hour of presentation.", 
     "Reduces hematoma expansion without worsening ischemia.", "ICH BP"),

    # Ch 14: Subarachnoid Hemorrhage
    (14, "Subarachnoid Hemorrhage", "What medication is mandatory for 21 days post-aneurysmal SAH to prevent DCI?", 
     "Oral Nimodipine 60 mg every 4 hours.", 
     "Reduces neurological deficits from vasospasm.", "Nimodipine"),

    # Ch 15: Pediatric Stroke
    (15, "Pediatric Stroke & Hematology", "What TCD MCA velocity threshold in Sickle Cell Disease mandates chronic blood transfusions?", 
     "Time-averaged mean maximum velocity (TAMMV) >= 200 cm/s (STOP trial).", 
     "Reduces primary stroke risk by > 90%.", "STOP Trial"),

    # Ch 16: Cerebral Venous Thrombosis
    (16, "Cerebral Venous Thrombosis", "Is anticoagulation indicated for CVT if hemorrhagic transformation is present?", 
     "YES! Full-dose therapeutic LMWH or Heparin is first-line even with hemorrhage.", 
     "Anticoagulation resolves venous congestion.", "CVT"),

    # Ch 17: Vascular Malformations & Vasculitis
    (17, "Vascular Malformations & Vasculitis", "What key clinical feature distinguishes RCVS from PACNS?", 
     "RCVS has THUNDERCLAP headaches & NORMAL CSF; PACNS has insidious onset & INFLAMMATORY CSF.", 
     "RCVS responds to CCBs; PACNS requires immunosuppression.", "RCVS vs PACNS"),

    # Ch 18: Neuro-ICU
    (18, "Neuro-ICU & Hemodynamic Management", "Within what timeframe should decompressive hemicraniectomy be performed for malignant MCA stroke?", 
     "Within 48 hours of stroke onset in patients aged <= 60 years.", 
     "Reduces mortality from 80% to 30% (DECIMAL/DESTINY/HAMLET).", "Hemicraniectomy"),

    # Ch 19: Secondary Prevention
    (19, "Secondary Prevention & Antithrombotics", "What is the recommended DAPT duration for minor stroke / high-risk TIA per CHANCE and POINT?", 
     "21 DAYS of Aspirin + Clopidogrel (started within 24 hours).", 
     "DAPT beyond 21-90 days increases bleeding without benefit.", "DAPT"),

    # Ch 20: Rehabilitation
    (20, "Rehabilitation & Prognostication", "What modified Rankin Scale (mRS) score represents functional independence?", 
     "mRS 0 to 2 (mRS 0 = no symptoms, mRS 1 = no disability, mRS 2 = slight disability but independent in self-care).", 
     "Standard primary endpoint in stroke trials.", "mRS"),

    # Ch 21: Clinical Trials
    (21, "Landmark Clinical Trials Master Summary", "What dose of statin was proven in the SPARCL trial to prevent recurrent stroke?", 
     "Atorvastatin 80 mg daily (high-intensity statin).", 
     "Reduces stroke recurrence by 16% in non-cardioembolic stroke.", "SPARCL")
]

for ch_id, ch_title, q, a, exp, tag in other_cards:
    add_fc(fc_id, ch_id, ch_title, q, a, exp, tag)
    fc_id += 1

# Output TypeScript file
ts_code = "import { Flashcard } from '../types';\n\nexport const flashcardsData: Flashcard[] = " + json.dumps(flashcards, indent=2) + ";\n"

with open('src/data/flashcards.ts', 'w') as f:
    f.write(ts_code)

print(f"Successfully generated {len(flashcards)} flashcards in src/data/flashcards.ts!")
