/**
 * One-shot patch: replace static artifact cards with dynamic grid loader.
 * Run: node scripts/patch-index-dynamic-grid.js
 */
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

html = html.replace(/100\+ artefatos/g, '225+ artefatos');

html = html.replace(
  '<div class="stat-cell-num" style="color: #60a5fa">121</div>',
  '<div class="stat-cell-num" style="color: #60a5fa" id="stat-artifacts">—</div>'
);

html = html.replace(
  '<div class="section-count" id="artifact-count">121 DOCUMENTOS</div>',
  '<div class="section-count" id="artifact-count">… DOCUMENTOS</div>'
);

if (!html.includes('artifact-search')) {
  html = html.replace(
    '    <button class="filter-btn" onclick="filterArtifacts(\'operacoes\', this)"><img src="icons/cat-operacoes.svg"',
    `    <input type="search" id="artifact-search" class="artifact-search" placeholder="Buscar título…" aria-label="Buscar artefatos" autocomplete="off" />
    <button class="filter-btn" onclick="filterArtifacts('operacoes', this)"><img src="icons/cat-operacoes.svg"`
  );
}

if (!html.includes('.artifact-search')) {
  html = html.replace(
    '  .filter-btn.active {',
    `  .artifact-search {
    margin-left: auto;
    min-width: 180px;
    max-width: 280px;
    flex: 1;
    background: var(--bg-raised);
    border: 1px solid var(--border-dim);
    border-radius: 6px;
    color: var(--text-primary);
    font-family: var(--body);
    font-size: 12px;
    padding: 8px 12px;
    outline: none;
    transition: border-color 0.15s;
  }
  .artifact-search:focus { border-color: rgba(220,38,38,0.4); }
  .artifact-search::placeholder { color: var(--text-muted); }
  .artifacts-loading {
    grid-column: 1 / -1;
    text-align: center;
    padding: 48px 24px;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    color: var(--text-muted);
    text-transform: uppercase;
  }
  .artifacts-error {
    grid-column: 1 / -1;
    text-align: center;
    padding: 32px;
    color: var(--red-bright);
    font-family: var(--mono);
    font-size: 12px;
  }

  .filter-btn.active {`
  );
}

const gridRe = /(<div class="artifacts-grid reveal" id="artifacts-grid">)[\s\S]*?(<\/div>\s*\n\s*<div class="sep"><\/div>\s*\n\s*<!-- SOLUTIONS -->)/;
if (!gridRe.test(html)) {
  console.error('Could not find artifacts-grid block');
  process.exit(1);
}

html = html.replace(
  gridRe,
  `$1
    <div class="artifacts-loading" id="artifacts-loading">Carregando manifesto…</div>
  $2`
);

const loaderScript = `
  // ARTIFACTS MANIFEST — dynamic grid
  const CAT_META = {
    crime:      { label: 'Crime Organizado', icon: 'cat-crime.svg' },
    corrupcao:  { label: 'Corrupção', icon: 'cat-corrupcao.svg' },
    judiciario: { label: 'Judiciário', icon: 'cat-judiciario.svg' },
    territorio: { label: 'Território', icon: 'cat-territorio.svg' },
    economia:   { label: 'Economia', icon: 'cat-economia.svg' },
    infancia:   { label: 'Proteção Infantil', icon: 'cat-infancia.svg' },
    censura:    { label: 'Censura', icon: 'cat-censura.svg' },
    operacoes:  { label: 'Operações', icon: 'cat-operacoes.svg' }
  };

  let currentFilter = 'all';
  let searchQuery = '';

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function buildCategoryLabel(cats) {
    return cats.map(k => (CAT_META[k] && CAT_META[k].label) || k).join(' · ');
  }

  function buildAccentStyle(cats, categoryLabel) {
    if (categoryLabel === '★ DESTAQUE') {
      return 'style="background: linear-gradient(90deg, var(--red-core), var(--amber));"';
    }
    if (categoryLabel === '★ MASTER DASHBOARD') {
      return 'style="background: linear-gradient(90deg, var(--purple), var(--red-core));"';
    }
    const first = cats[0] || 'crime';
    return \`class="artifact-accent accent-\${first}"\`;
  }

  function buildCategoryBadge(cats, categoryLabel) {
    if ((!cats || !cats.length) && categoryLabel && categoryLabel.includes('★')) {
      if (categoryLabel.includes('MASTER')) {
        return \`<div class="artifact-cat" style="background: rgba(168, 85, 247, 0.2); color: #c084fc;">\${escapeHtml(categoryLabel)}</div>\`;
      }
      return \`<div class="artifact-cat" style="background: var(--red-glow); color: var(--red-bright);">\${escapeHtml(categoryLabel)}</div>\`;
    }
    const first = cats[0] || 'crime';
    const inner = cats.map(k => {
      const m = CAT_META[k] || { label: k, icon: 'cat-crime.svg' };
      return \`<img src="icons/\${m.icon}" alt="" class="cat-icon" width="14" height="14" decoding="async" /> \${escapeHtml(m.label)}\`;
    }).join(' · ');
    return \`<div class="artifact-cat cat-\${first}">\${inner}</div>\`;
  }

  function mergeManifest(data) {
    const metaByFile = new Map();
    (data.artifacts || []).forEach(a => metaByFile.set(a.file, a));

    const byFile = new Map();

    (data.categories || []).forEach(cat => {
      (cat.artifacts || []).forEach(item => {
        const meta = metaByFile.get(item.file);
        if (!byFile.has(item.file)) {
          const cats = (meta && meta.categories && meta.categories.length)
            ? [...meta.categories]
            : [cat.key];
          byFile.set(item.file, {
            id: (meta && meta.id) || item.id || 9999,
            title: (meta && meta.title) || item.title,
            description: (meta && meta.description) || '',
            type: (meta && meta.type) || 'DOCUMENTO',
            categories: cats,
            categoryLabel: (meta && meta.categoryLabel) || buildCategoryLabel(cats),
            file: item.file,
            featured: meta && meta.categories && !meta.categories.length
          });
        } else {
          const existing = byFile.get(item.file);
          if (!existing.categories.includes(cat.key)) {
            existing.categories.push(cat.key);
            if (!meta || !meta.categoryLabel) {
              existing.categoryLabel = buildCategoryLabel(existing.categories);
            }
          }
        }
      });
    });

    (data.artifacts || []).forEach(a => {
      if (!byFile.has(a.file)) {
        byFile.set(a.file, {
          id: a.id,
          title: a.title,
          description: a.description || '',
          type: a.type || 'DOCUMENTO',
          categories: a.categories || [],
          categoryLabel: a.categoryLabel || buildCategoryLabel(a.categories || []),
          file: a.file,
          featured: a.categories && !a.categories.length
        });
      }
    });

    return [...byFile.values()].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (a.id || 0) - (b.id || 0);
    });
  }

  function renderArtifactCard(a) {
    const cats = a.categories || [];
    const dataCat = a.featured ? 'all' : cats.join(' ');
    const href = escapeHtml(a.file);
    const desc = a.description || 'Artefato investigativo catalogado no manifesto Observatório Civil BR.';
    const accent = buildAccentStyle(cats, a.categoryLabel);
    const badge = buildCategoryBadge(cats, a.categoryLabel);

    return \`
    <a class="artifact-card" href="\${href}" data-cat="\${escapeHtml(dataCat)}" data-title="\${escapeHtml(a.title)}">
      <div class="artifact-accent" \${accent}></div>
      <div class="artifact-body">
        \${badge}
        <div class="artifact-title">\${escapeHtml(a.title)}</div>
        <div class="artifact-desc">\${escapeHtml(desc)}</div>
      </div>
      <div class="artifact-footer">
        <div class="artifact-type">\${escapeHtml(a.type)}</div>
        <div class="artifact-arrow">→</div>
      </div>
    </a>\`;
  }

  async function loadArtifactsGrid() {
    const grid = document.getElementById('artifacts-grid');
    const loading = document.getElementById('artifacts-loading');
    try {
      const res = await fetch('artifacts.json');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const items = mergeManifest(data);
      const total = data.stats && data.stats.totalArtifacts ? data.stats.totalArtifacts : items.length;

      if (loading) loading.remove();
      grid.insertAdjacentHTML('beforeend', items.map(renderArtifactCard).join(''));

      const statEl = document.getElementById('stat-artifacts');
      if (statEl) statEl.textContent = String(items.length);

      const countEl = document.getElementById('artifact-count');
      if (countEl) countEl.textContent = items.length + ' DOCUMENTOS';

      applyFilters();
    } catch (err) {
      console.error('[artifacts]', err);
      if (loading) {
        loading.className = 'artifacts-error';
        loading.textContent = 'Erro ao carregar artifacts.json — ' + err.message;
      }
    }
  }

  function applyFilters() {
    const cards = document.querySelectorAll('.artifact-card');
    const countEl = document.getElementById('artifact-count');
    const q = searchQuery.toLowerCase().trim();
    let visible = 0;

    cards.forEach(card => {
      const cardCat = card.dataset.cat || '';
      const title = (card.dataset.title || '').toLowerCase();
      const catMatch = currentFilter === 'all' || cardCat.includes(currentFilter);
      const searchMatch = !q || title.includes(q);
      const show = catMatch && searchMatch;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    if (countEl) {
      countEl.textContent = visible + ' DOCUMENTO' + (visible !== 1 ? 'S' : '');
    }
  }
`;

const oldFilterScript = `  // FILTER SYSTEM
  function filterArtifacts(cat, btn) {
    const cards = document.querySelectorAll('.artifact-card');
    const btns = document.querySelectorAll('.filter-btn');
    const countEl = document.getElementById('artifact-count');

    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    let visible = 0;
    cards.forEach(card => {
      const cardCat = card.dataset.cat || '';
      const show = cat === 'all' || cardCat.includes(cat);
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    countEl.textContent = \`\${visible} DOCUMENTO\${visible !== 1 ? 'S' : ''}\`;
  }`;

const newFilterScript = loaderScript + `
  // FILTER SYSTEM
  function filterArtifacts(cat, btn) {
    currentFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  }

  document.getElementById('artifact-search')?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    applyFilters();
  });

  loadArtifactsGrid();`;

if (!html.includes('loadArtifactsGrid')) {
  html = html.replace(oldFilterScript, newFilterScript);
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('index.html patched — dynamic artifacts grid');
