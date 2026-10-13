import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/questions.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const prefix = 'const rawQuestionsData: PracticeQuestion[] = ';
const start = content.indexOf(prefix);

if (start === -1) {
  console.error('❌ Could not locate rawQuestionsData in questions.ts');
  process.exit(1);
}

const end = content.indexOf(';\n\n// Runtime Deduplication');
const jsonString = content.substring(start + prefix.length, end).trim();

try {
  const questions = JSON.parse(jsonString);
  console.log(`🔍 Total Questions in dataset: ${questions.length}`);

  const idMap = new Map();
  const contentMap = new Map();
  const duplicates = [];

  questions.forEach((q, idx) => {
    // Check ID duplicates
    if (idMap.has(q.id)) {
      duplicates.push({ type: 'ID Duplicate', id: q.id, index: idx, prevIndex: idMap.get(q.id) });
    } else {
      idMap.set(q.id, idx);
    }

    // Check Question content duplicates (stem + vignette)
    const normKey = `${(q.vignette || '').trim().toLowerCase()}:::${q.question.trim().toLowerCase()}`;
    if (contentMap.has(normKey)) {
      duplicates.push({ type: 'Content Duplicate', id: q.id, index: idx, prevIndex: contentMap.get(normKey) });
    } else {
      contentMap.set(normKey, idx);
    }
  });

  if (duplicates.length > 0) {
    console.error(`❌ Found ${duplicates.length} duplicate questions:`);
    console.error(duplicates);
    process.exit(1);
  } else {
    console.log('✅ Integrity Check Passed: 0 duplicate IDs, 0 duplicate vignettes/stems. All questions are 100% unique.');
  }
} catch (err) {
  console.error('❌ JSON parse error:', err.message);
  process.exit(1);
}
