const fs = require('fs');
const html = fs.readFileSync('landpage.html', 'utf8');
const j = require('../artifacts.json');

const landLinks = new Set();
for (const m of html.matchAll(/href="([^"#]+)"/g)) {
  const h = m[1];
  if (!h.startsWith('http') && !h.endsWith('.md') && h !== 'index.html' && h !== 'artifacts.json') {
    landLinks.add(h);
  }
}

const metaByFile = new Map();
(j.artifacts || []).forEach(a => metaByFile.set(a.file, a));

const byFile = new Map();
j.categories.forEach(cat => {
  cat.artifacts.forEach(item => {
    if (!byFile.has(item.file)) {
      const meta = metaByFile.get(item.file);
      byFile.set(item.file, {
        title: (meta && meta.title) || item.title,
        categories: (meta && meta.categories && meta.categories.length)
          ? [...meta.categories]
          : [cat.key],
        type: meta && meta.type
      });
    } else {
      const e = byFile.get(item.file);
      if (!e.categories.includes(cat.key)) e.categories.push(cat.key);
    }
  });
});
(j.artifacts || []).forEach(a => {
  if (!byFile.has(a.file)) {
    byFile.set(a.file, { title: a.title, categories: a.categories || [], type: a.type });
  }
});

const panelOps = [...byFile.entries()]
  .filter(([, d]) => d.categories.includes('operacoes'))
  .sort((a, b) => a[0].localeCompare(b[0]));

const missingOnLandpage = panelOps.filter(([f]) => !landLinks.has(f));

console.log('=== Categoria operacoes no painel, AUSENTES na landpage ===');
console.log('Total:', missingOnLandpage.length);
missingOnLandpage.forEach(([f, d]) => console.log(`  ${f}\n    ${d.title}`));

const opPattern = /operacao|mare-liberum|pandemia-capturada|direita-permitida|dossie-operacao|emaranhamento/i;
const landOpLike = [...landLinks].filter(f => opPattern.test(f));
const landOpMissingPanel = landOpLike.filter(f => !byFile.has(f));

console.log('\n=== Links tipo operacao na landpage, FORA do manifesto/painel ===');
console.log('Total:', landOpMissingPanel.length);
landOpMissingPanel.forEach(f => console.log('  ' + f));
