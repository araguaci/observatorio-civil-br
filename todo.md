# TODO — Painel do Crime / Observatório Civil BR
> Atualizado: **2026-05-30** | Dev: `C:\Users\aragu\OneDrive\Documentos\painel-do-crime`  
> Corpus fonte: `D:\ai-projects\gosurf.site` | Relatório: `gosurf.site/docs/relatorio-artefatos-observatorio-civil-br.md`

---

## Estado atual (30/mai/2026)

| Métrica | Valor |
|--------|------:|
| `artifacts.json` — entradas catalogadas | **225** |
| Manifesto com `file` HTML (excl. showcase) | **~158** |
| HTML na raiz do painel | **172** |
| Cards no `index.html` (hardcoded) | **0** — grid dinâmico |
| `project.updated` | 2026-05-30 |
| Versão manifesto | 1.5.0 |

### Sincronização gosurf (30/mai) — feita, sem push Git

- [x] **+69 entradas** Tier B em `artifacts.json` (66 + 3 alias `_` ↔ `-`)
- [x] **52 HTML** copiados gosurf → painel; 14 já existiam
- [x] Metadados: `totalArtifacts`, categorias, descrição
- [ ] **Commit + push** `observatorio-civil-br` (adiado)
- Log: `D:\ai-projects\gosurf.site\docs\sync-observatorio-tier-b-log.json`

---

## Lacuna crítica — dashboard desatualizado ✅ (30/mai)

O `index.html` passou a carregar **~170 cards** dinamicamente a partir de `artifacts.json` (manifesto com **225** entradas categóricas).

**Prioridade #1:** gerar grid a partir de `artifacts.json` (como gosurf.site faz com `pages.json`):

- [x] Fetch `artifacts.json` + render `#artifacts-grid`
- [x] Manter cards especiais (landpage, master dashboard) ou flag no JSON
- [x] Atualizar contadores: hero `121` → dinâmico; meta `100+` → `225+`
- [x] `filterArtifacts()` usar `data-cat` = `category.key` do manifesto
- [x] Busca por título (opcional)

> Implementado em `index.html` (30/mai): grid dinâmico via `mergeManifest()` + `loadArtifactsGrid()`; script auxiliar `scripts/patch-index-dynamic-grid.js`.

Script de referência: `gosurf.site/docs/sync-observatorio-tier-b.py`

---

## Próxima rodada — Tier C (HTML no painel, fora do manifesto)

Indexar em `artifacts.json` + card:

| Arquivo | Nota |
|---------|------|
| `a_captura_da_res_publica_corrupcao_e_o_paradoxo_do.html` | xarticle no gosurf |
| `institutos_capturados_dashboard.html` | dashboard |
| `jbs-dossie-completo.html` | |
| `tse-vs-mundo.html` | |
| `crime-transnacional-forense.html` | |
| `exploracao_vulnerabilidade_brasil.html` | |
| `brasil_desperdicio_captura_institucional.html` | |
| `brasil_institucional_colapso.html` | |
| `lawfare_timeline.html` | duplicata de `lawfare-timeline.html`? |
| `justicawatch-brasil.html` | legado → `jusmonitor`? |
| `operacao_lava_jato.html` | pode já existir no manifesto com outro id |
| `presidencia-capturada.html` | |
| `censura-digital-brasil.html` | |
| `cadeia-influencia-usaid-tse-2022.html` | |
| `operacao-carbono-oculto.html` | ≠ `carbono_oculto.html` |
| `operacao-dakovo-dossie.html` | v2 já indexado |
| `brasil-fabrica-cocaina.html` | v2 indexado |
| `banco-master-maquina-influencia.html` | branding OCB |
| `biazucci-erro-judiciario-cidh.html` | xarticle |
| `crise-diplomatica-brasil-eua-2025-2026.html` | xarticle |
| `reforma-tributaria-captura-regulatoria.html` | xarticle |
| `falencia-de-estado-brasil.html` | xarticle |

---

## Média prioridade — copiar do gosurf + manifesto

| Arquivo | Categoria |
|---------|-----------|
| `lei-dosimetria-ep72.html` | judiciário |
| `operacao-carbono-oculto.html` | operações |
| `pcc-cv-ameaca-nacional-dashboard.html` | crime |
| `xp-banco-master-poder.html` | economia |
| `master-ponte-miami.html` | economia |
| `the-intercept-e-redes.html` | censura |
| `designacao-terrorista-pcc-cv-2026.html` | crime |
| `alto_comando_decadencia_moral.html` | corrupção |
| `operacao-sem-desconto-v2.html` | operações |

---

## Manutenção

- [ ] Revisar `lawfare_timeline.html` vs `lawfare-timeline.html`
- [ ] `manifest.json` / PWA — contagem de artefatos
- [ ] `justicawatch-brasil.html` → redirect `jusmonitor`?
- [ ] Categorias novas: **Eleições**, **Mídia** (filtros)
- [ ] Entradas manifesto sem HTML: `estrategia-integrada-gestao-corporativa-na-seguranca-publica.html`
- [ ] Rascunhos: não indexar `-v1`, `fail`, produtividade

---

## Resumo de cobertura

| Camada | Quantidade |
|--------|----------:|
| Manifesto `artifacts.json` | 225 |
| HTML servível na raiz | 172 |
| Visível no dashboard hoje | **~170** (dinâmico via manifesto) |
| **Gap dashboard ↔ manifesto** | **0** (grid sincronizado; 225 = entradas categóricas com overlap) |

---

*Próximo passo sugerido: commit + push `observatorio-civil-br`; depois Tier C (HTML fora do manifesto).*
