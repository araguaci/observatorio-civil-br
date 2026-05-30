const j = require('../artifacts.json');
const metaByFile = new Map();
(j.artifacts || []).forEach(a => metaByFile.set(a.file, a));
const byFile = new Map();
(j.categories || []).forEach(cat => {
  (cat.artifacts || []).forEach(item => {
    const meta = metaByFile.get(item.file);
    if (!byFile.has(item.file)) {
      const cats = (meta && meta.categories && meta.categories.length) ? [...meta.categories] : [cat.key];
      byFile.set(item.file, { id: (meta && meta.id) || item.id, categories: cats });
    } else {
      const e = byFile.get(item.file);
      if (!e.categories.includes(cat.key)) e.categories.push(cat.key);
    }
  });
});
(j.artifacts || []).forEach(a => {
  if (!byFile.has(a.file)) byFile.set(a.file, { id: a.id, categories: a.categories || [] });
});
console.log('unique cards:', byFile.size);
console.log('stats.totalArtifacts:', j.stats.totalArtifacts);
