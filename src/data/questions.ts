import { PracticeQuestion } from '../types';

export const questionsData: PracticeQuestion[] = [
  {
    id: "q-1",
    chapterId: 8,
    chapterTitle: "Acute Stroke Management",
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
    id: "q-3",
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
    id: "q-4",
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
    id: "q-5",
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
  {
    id: "q-6",
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
    id: "q-7",
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
    id: "q-8",
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
  }
];
