# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

---

## [1.2.0] - 2026-04-01

### Adicionado

- **`zero-x-zero.html`** — longform editorial *0 × 0 — A Janela Fechada*; filtros **Judiciário** e **Censura**.
- Ícones SVG por categoria em `icons/` (`cat-crime.svg`, `cat-corrupcao.svg`, `cat-judiciario.svg`, `cat-territorio.svg`, `cat-economia.svg`, `cat-infancia.svg`; existentes `cat-censura.svg`, `cat-operacoes.svg`).

### Alterado

- **`index.html`**: badges da grade e botões de filtro usam `<img>` com caminhos relativos alinhados a `data-cat`; total **31 artefatos**; correções nos rótulos (República Capturada → Corrupção; Vaza Toga; Castelo de Areia → `corrupcao operacoes`); INQ 4781 e Lawfare exibem Judiciário + Censura.

---

## [1.1.0] - 2026-04-01

### Adicionado

- **Carbono Oculto — O Mapa Que Falta** (`carbono_oculto.html`): dashboard sobre operações Carbono Oculto, Greenwashing, fintechs e créditos de carbono; filtros **Economia** e **Crime Organizado**.
- **República Capturada** (`republica-capturada.html`): dashboard forense das operações Greenwashing, Carbono Oculto, Compliance Zero, Sem Desconto e conexões com Lava Jato e Panama Papers; filtros **Economia**, **Operações** e **Corrupção**.

### Alterado

- Painel central: total de **30 artefatos** (meta tags, estatística e contador de filtros).
- `carbono_oculto.html`: documento HTML completo (`:root` para tema escuro, correção das abas).
- README: contagens por categoria e estrutura do projeto.

---

## [1.0.0] - 2025-03-21

### Lançado em 21 de março de 2025

Primeira versão estável do **Observatório Civil BR — Brasil em Estado Crítico**, central de inteligência civil sobre crime organizado, corrupção sistêmica e colapso institucional no Brasil.

### Adicionado

- **28 artefatos investigativos** organizados em 8 categorias
- Hub central (`index.html`) com filtros por categoria e navegação
- Viewer universal para arquivos Markdown
- 12 artigos showcase em Markdown com frontmatter
- PWA completo (manifest, service worker, ícones multi-resolução)
- Design responsivo com tema escuro
- 10 projetos Gemini vinculados (Observatório de Gastos, Corrupção Raio-X, Vaza Toga, etc.)
- 2 ferramentas de estratégia integrada em segurança pública
- README com aviso legal, proposta de solução e guia de contribuição
- Documentação de estimativa de desenvolvimento e tokens (`docs/RELATORIO-ESTIMATIVA-DESENVOLVIMENTO.md`)

### Categorias de análise

- Crime Organizado (PCC, CV, rotas internacionais)
- Corrupção Política (Lava Jato, escândalos, ciclos de impunidade)
- Judiciário (STF, lawfare, supersalários, censura)
- Território & Soberania (Amazônia, influência estrangeira)
- Economia (Banco Master, carga tributária, liberdade econômica)
- Proteção Infantil (Marajó — denúncia investigativa)
- Censura & Informação (INQ 4781, guerra da informação)
- Operações Investigativas (Satiagraha, Castelo de Areia, padrões)

### Métricas estimadas (v1.0.0)

| Métrica | Estimativa |
|---------|------------|
| Tempo de desenvolvimento | 120–200 horas |
| Tokens Gemini | ~1,2M–4M |
| Tokens Cursor/Claude | ~500K–2M |

---

[1.2.0]: https://github.com/araguaci/observatorio-civil-br/releases/tag/v1.2.0
[1.1.0]: https://github.com/araguaci/observatorio-civil-br/releases/tag/v1.1.0
[1.0.0]: https://github.com/araguaci/observatorio-civil-br/releases/tag/v1.0.0
