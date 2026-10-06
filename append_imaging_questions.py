import json

with open('src/data/questions.ts', 'r') as f:
    content = f.read()

# Load existing questions data
# We parse the JSON part after export const questionsData: PracticeQuestion[] = 
prefix = "import { PracticeQuestion } from '../types';\n\nexport const questionsData: PracticeQuestion[] = "
json_str = content[len(prefix):].rstrip(';\n')

questions = json.loads(json_str)

imaging_questions = [
  {
    "id": "q-img-1",
    "chapterId": 2,
    "chapterTitle": "Initial Stroke Evaluation & Thrombolysis",
    "vignette": "A 66-year-old male presents 45 minutes after acute right-sided weakness and expressive aphasia. Initial non-contrast head CT is performed immediately upon ED arrival and is shown below.",
    "question": "What radiological sign is present in the right Sylvian fissure, and what is its clinical significance?",
    "options": [
      {"id": "A", "text": "Hyperdense MCA Sign; indicates acute intraluminal thrombus in the M1 segment"},
      {"id": "B", "text": "Empty Delta Sign; indicates superior sagittal sinus thrombosis"},
      {"id": "C", "text": "Spot Sign; indicates active intracerebral bleeding"},
      {"id": "D", "text": "Crescent Sign; indicates carotid dissection"},
      {"id": "E", "text": "Normal falx cerebri calcification"}
    ],
    "correctOptionId": "A",
    "explanation": "The Hyperdense MCA Sign (or Dense Vessel Sign) on non-contrast CT represents acute thromboembolism in the M1 MCA segment. It has > 95% specificity for LVO and predicts poor response to IV tPA alone, strongly supporting endovascular thrombectomy evaluation.",
    "keyTakeaway": "Hyperdense MCA Sign on non-contrast CT = acute M1 occlusion -> high risk for LVO & thrombectomy candidate.",
    "tags": ["Neuroimaging", "Dense MCA Sign", "Acute CT"],
    "hint": "Focus on the high-attenuation bright vessel traveling along the MCA pathway on non-contrast CT.",
    "source": "Past Board Exam",
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
      {"id": "A", "text": "Proceed with mechanical thrombectomy"},
      {"id": "B", "text": "Administer IV Alteplase only"},
      {"id": "C", "text": "Initiate IV Heparin infusion"},
      {"id": "D", "text": "Perform emergent carotid endarterectomy"},
      {"id": "E", "text": "Decompressive hemicraniectomy within 24 hours"}
    ],
    "correctOptionId": "A",
    "explanation": "DAWN and DEFUSE 3 established that in the 6-24 hour extended window, mechanical thrombectomy significantly improves functional independence in LVO stroke patients with favorable perfusion mismatch (small ischemic core CBF < 30% vs large hypoperfused penumbra Tmax > 6s).",
    "keyTakeaway": "CT Perfusion Core-Penumbra mismatch in 6-24h window -> Mechanical Thrombectomy (DAWN/DEFUSE 3).",
    "tags": ["Neuroimaging", "CT Perfusion", "Thrombectomy"],
    "hint": "Analyze the size difference between the red ischemic core and the larger green hypoperfused penumbral tissue.",
    "source": "Past Board Exam",
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
      {"id": "A", "text": "Spot Sign; indicates active contrast extravasation and predicts high risk of hematoma expansion"},
      {"id": "B", "text": "Empty Delta Sign; indicates venous sinus thrombosis"},
      {"id": "C", "text": "Puff of Smoke; indicates Moyamoya vasculopathy"},
      {"id": "D", "text": "String of Beads; indicates Fibromuscular Dysplasia"},
      {"id": "E", "text": "Asymptomatic choroid plexus calcification"}
    ],
    "correctOptionId": "A",
    "explanation": "The CTA Spot Sign is defined as one or more tiny high-attenuation foci of contrast extravasation within an acute ICH. It has > 80% sensitivity for predicting hematoma expansion and correlated with 30-day mortality.",
    "keyTakeaway": "CTA Spot Sign = Active contrast extravasation in ICH -> Predicts rapid hematoma expansion.",
    "tags": ["Neuroimaging", "Spot Sign", "Intracranial Hemorrhage"],
    "hint": "Identify the bright spot of contrast extravasation inside the dark dense blood collection.",
    "source": "Past Board Exam",
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
      {"id": "A", "text": "Moyamoya disease; bilateral distal ICA steno-occlusion with 'puff of smoke' collateral network"},
      {"id": "B", "text": "Fibromuscular Dysplasia; 'string of beads' appearance"},
      {"id": "C", "text": "Arteriovenous Malformation; high-flow nidus"},
      {"id": "D", "text": "Primary Angiitis of the CNS; multifocal beaded stenoses"},
      {"id": "E", "text": "Internal carotid artery dissection"}
    ],
    "correctOptionId": "A",
    "explanation": "Moyamoya Disease is characterized on conventional cerebral angiography by progressive occlusion of the internal carotid artery bifurcations and proximal ACA/MCA, with a hazy, net-like proliferation of lenticulostriate collaterals creating a 'puff of smoke' (moyamoya in Japanese).",
    "keyTakeaway": "Moyamoya Angiography = Bilateral ICA bifurcation occlusion + 'Puff of smoke' basal lenticulostriate collaterals.",
    "tags": ["Neuroimaging", "Moyamoya", "Angiography"],
    "hint": "Look for the dense cloud or hazy net of collateral vessels supplying the basal brain region.",
    "source": "Past Board Exam",
    "imageUrl": "/images/mra_moyamoya.jpg",
    "imageCaption": "Cerebral Angiogram (DSA): Distal ICA occlusion with 'Puff of Smoke' collaterals."
  }
]

# Add new imaging questions to the dataset
questions.extend(imaging_questions)

ts_output = "import { PracticeQuestion } from '../types';\n\nexport const questionsData: PracticeQuestion[] = " + json.dumps(questions, indent=2) + ";\n"

with open('src/data/questions.ts', 'w') as f:
    f.write(ts_output)

print(f"Added {len(imaging_questions)} neuroimaging board questions to src/data/questions.ts! Total questions: {len(questions)}")
