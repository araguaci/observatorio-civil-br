# 🔍 Observatório Civil BR — Brasil em Estado Crítico

<div align="center">

![Status](https://img.shields.io/badge/status-ativo-dc2626?style=flat-square)
![Versão](https://img.shields.io/badge/versão-1.0.0-3b82f6?style=flat-square)
![Lançamento](https://img.shields.io/badge/lançamento-2025--03--21-22c55e?style=flat-square)
![Licença](https://img.shields.io/badge/licença-MIT-22c55e?style=flat-square)
![Conteúdo](https://img.shields.io/badge/conteúdo-jornalístico%20%2F%20investigativo-f59e0b?style=flat-square)
![GitHub Issues](https://img.shields.io/github/issues/araguaci/observatorio-civil-br?style=flat-square&color=a855f7)

**Central de inteligência civil** para análise crítica de crime organizado,
corrupção sistêmica, captura do judiciário e colapso institucional no Brasil.

[🔴 Acessar o Painel](https://araguaci.github.io/observatorio-civil-br/) · [📋 Changelog](CHANGELOG.md) · [📊 Relatório de Estimativa](docs/RELATORIO-ESTIMATIVA-DESENVOLVIMENTO.md) · [📋 Sugerir Pauta](https://github.com/araguaci/observatorio-civil-br/issues/new?template=pauta.md&labels=pauta&title=%5BPAUTA%5D+) · [🐛 Reportar Erro](https://github.com/araguaci/observatorio-civil-br/issues/new?template=bug_report.md&labels=bug&title=%5BBUG%5D+) · [💡 Sugestão](https://github.com/araguaci/observatorio-civil-br/issues/new?template=sugestao.md&labels=sugestão&title=%5BSUGEST%C3%83O%5D+)

</div>

---

## ⚠️ Aviso Legal e Editorial

> Este repositório contém **material exclusivamente jornalístico e investigativo**, compilado a partir de fontes públicas, processos judiciais acessíveis, dados abertos governamentais e investigações de imprensa verificadas.

- ✅ Finalidade: análise crítica, educação cívica e accountability institucional
- ✅ Todas as informações são baseadas em registros públicos verificáveis
- ✅ Conteúdos sensíveis (exploração infantil, crime organizado) abordados **exclusivamente como denúncia**
- ❌ Nenhum conteúdo instrui, glorifica ou apoia atividades ilegais
- ❌ Nenhum dado pessoal privado de cidadãos comuns
- ❌ Nenhum material que sexualize ou promova violência contra menores

---

## 🎯 Proposta de Solução

O Brasil enfrenta uma **crise institucional multidimensional** onde informações críticas estão dispersas, fragmentadas e raramente conectadas entre si. Este painel propõe:

### O Problema
- Investigações jornalísticas e dados públicos são publicados de forma isolada
- A população não tem acesso fácil a análises integradas e baseadas em evidências
- Padrões sistêmicos de corrupção e impunidade ficam invisíveis sem visão de conjunto
- Ausência de uma central de referência para pesquisa cidadã

### A Solução
**Um hub investigativo open-source** que:

1. **Agrega** artefatos investigativos (dashboards, mapas mentais, timelines) em um único ponto de acesso
2. **Categoriza** por tema (crime organizado, corrupção, judiciário, território, economia, infância, censura, operações)
3. **Contextualiza** com dados quantitativos de fontes oficiais
4. **Identifica padrões** sistêmicos entre diferentes casos e atores
5. **Propõe soluções** baseadas em evidências comparativas internacionais
6. **Permite contribuição** comunitária via issues e pull requests

### Indicadores do Estado Crítico (2025–2026)

| Indicador | Valor | Fonte |
|-----------|-------|-------|
| Território sob influência de facções | **26%** do nacional | FBSP 2025 |
| Impunidade política (processos sem condenação) | **~91%** | CNJ / Transparência Brasil |
| Carga tributária / PIB | **33%** | Receita Federal |
| Taxa de elucidação de homicídios | **<10%** | IPEA / FBSP |
| Posição no CPI (corrupção) | **105°/180** | Transparency International 2024 |
| Posição no Rule of Law Index | **62°/142** | World Justice Project |
| Posição em Liberdade Econômica | **102°/184** | Heritage Foundation |
| Mortes violentas por ano | **~87.000** | Atlas da Violência |

---

## 🗂️ Estrutura do Projeto

```
observatorio-civil-br/
│
├── CHANGELOG.md                         # Histórico de versões e lançamentos
├── VERSION                              # Versão atual (1.0.0)
├── index.html                           # Hub central — painel principal de navegação
├── viewer.html                         # Renderizador universal de arquivos .md
├── README.md                           # Este arquivo
├── LICENSE                             # Licença MIT
│
├── docs/                               # Documentação técnica
│   └── RELATORIO-ESTIMATIVA-DESENVOLVIMENTO.md  # Estimativa tempo/tokens
│
├── showcase/                           # Artigos investigativos em Markdown
│   ├── 2025-08-15-analise-de-supersalarios.md
│   ├── 2025-08-15-arquitetura-do-privilegio.md
│   ├── 2025-08-15-soberania-do-brasil.md
│   ├── 2025-08-17-painel-da-corrupcao-no-brasil.md
│   ├── 2025-09-08-abusosupremo.md
│   ├── 2025-09-08-futuroroubado.md
│   ├── 2025-09-08-governanca-criminal.md
│   ├── 2025-09-08-guerra-da-informacao.md
│   ├── 2025-09-08-lawfare.md
│   ├── 2025-09-08-vazatoga.md
│   ├── 2025-11-11-influencia-estrangeira.md
│   └── 2025-11-11-operacoes-policiais.md
│
├── ferramentas/                        # Frameworks estratégicos
│   ├── estrategia-integrada-gestao-corporativa-na-seguranca-publica.html
│   └── estrategia-integrada-gestao-corporativa-na-seguranca-publica2.html
│
└── *.html                              # Artefatos investigativos individuais (28 total)
    ├── PCC-CV-Intel-Dashboard-2026.html
    ├── alem-da-toga.html
    ├── amazonia-legal.html
    ├── banco-master*.html
    ├── cocaina-vermelha.html
    ├── lava-jato-mapa-mental*.html
    ├── marajo-exploracao-sexual-infantil.html  # Denúncia investigativa
    ├── operacao_*.html
    └── ...
```

---

## 📚 Categorias de Análise

| # | Categoria | Artefatos | Foco |
|---|-----------|-----------|------|
| 🔴 | **Crime Organizado** | 3 | PCC, CV, rotas internacionais, cocaína vermelha |
| 🟡 | **Corrupção Política** | 7 | Lava Jato, escândalos históricos, ciclos de impunidade |
| 🟣 | **Judiciário** | 7 | STF, lawfare, supersalários, vaza toga, censura judicial |
| 🟢 | **Território & Soberania** | 4 | Amazônia, influência estrangeira, Venezuela, Irã |
| 🔵 | **Economia** | 5 | Banco Master, carga tributária, liberdade econômica |
| 🟠 | **Proteção Infantil** | 2 | Marajó — denúncia investigativa, sistema de proteção |
| 🩷 | **Censura & Informação** | 3 | INQ 4781, guerra da informação, Epstein conexões BR |
| 🩵 | **Operações Investigativas** | 4 | Satiagraha, Castelo de Areia, operações policiais |

---

## 🤝 Como Contribuir

Há várias formas de contribuir com este projeto:

### 📋 Sugerir uma Pauta ou Tema
Identificou um padrão de corrupção, uma operação investigativa ou um tema que merece análise?

👉 [**Abrir issue: Sugestão de Pauta**](https://github.com/araguaci/observatorio-civil-br/issues/new?template=pauta.md&labels=pauta&title=%5BPAUTA%5D+)

### 🚨 Reportar uma Ocorrência
Tem informação sobre um fato investigável baseado em fontes públicas?

👉 [**Abrir issue: Reportar Ocorrência**](https://github.com/araguaci/observatorio-civil-br/issues/new?template=ocorrencia.md&labels=ocorrência&title=%5BOCORR%C3%8ANCIA%5D+)

### 🐛 Reportar Erro ou Problema
Encontrou informação incorreta, link quebrado ou problema técnico?

👉 [**Abrir issue: Reportar Erro**](https://github.com/araguaci/observatorio-civil-br/issues/new?template=bug_report.md&labels=bug&title=%5BBUG%5D+)

### 💡 Propor Melhoria
Tem ideia para melhorar o painel, design, dados ou análises?

👉 [**Abrir issue: Sugestão de Melhoria**](https://github.com/araguaci/observatorio-civil-br/issues/new?template=sugestao.md&labels=sugestão&title=%5BSUGEST%C3%83O%5D+)

### 🔧 Contribuir com Código ou Conteúdo

1. Faça um **fork** do repositório
2. Crie uma branch: `git checkout -b feat/minha-contribuicao`
3. Adicione seu artefato na pasta correspondente
4. Garanta que o conteúdo cita fontes públicas verificáveis
5. Envie um **Pull Request** com descrição detalhada

#### Padrões para Novos Artefatos

- ✅ Baseado exclusivamente em fontes públicas
- ✅ Citar fonte em cada dado/estatística
- ✅ Conteúdo investigativo/analítico, não opinativo sem base
- ✅ Para arquivos `.md`: incluir frontmatter YAML com `title`, `description`, `date`
- ✅ Para arquivos `.html`: incluir `<title>` descritivo e meta description
- ❌ Sem dados pessoais privados
- ❌ Sem conteúdo que possa ser interpretado como incitação

---

## 🔗 Principais Fontes Utilizadas

- [FBSP](https://forumseguranca.org.br) — Fórum Brasileiro de Segurança Pública
- [IPEA](https://ipea.gov.br) — Instituto de Pesquisa Econômica Aplicada
- [Atlas da Violência](https://www.ipea.gov.br/atlasviolencia/) — IPEA/FBSP
- [Transparency International](https://www.transparency.org/cpi) — CPI
- [World Justice Project](https://worldjusticeproject.org) — Rule of Law Index
- [Heritage Foundation](https://www.heritage.org/index/) — Economic Freedom Index
- [TCU](https://portal.tcu.gov.br) — Tribunal de Contas da União
- [CNJ](https://www.cnj.jus.br) — Conselho Nacional de Justiça
- [Receita Federal](https://receita.fazenda.gov.br) — Dados tributários

---

## ⚖️ Licença

```
MIT License

Copyright (c) 2026 Araguaci

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Veja o arquivo [LICENSE](./LICENSE) para detalhes completos.

---

## 📌 Sobre o Nome do Projeto

**Observatório Civil BR** — O nome posiciona o projeto como o que ele é: um observatório independente de cidadania ativa, no modelo de organizações como FBSP, IPEA e OSCs reconhecidas.

O sufixo **BR** delimita o escopo geográfico (Brasil) e reforça a identidade nacional. O termo **"Civil"** distingue a iniciativa do aparato estatal — é a sociedade civil observando e documentando, não o Estado agindo.

O projeto **não apoia, glorifica ou instrui** atividades criminosas. É um instrumento de análise cidadã, jornalismo investigativo aberto e accountability democrático.

---

<div align="center">

**Projeto de análise civil independente. Domínio público. Sem fins comerciais.**

*Se este projeto foi útil, considere [⭐ dar uma estrela](https://github.com/araguaci/observatorio-civil-br) ou [abrir uma issue](https://github.com/araguaci/observatorio-civil-br/issues) com sugestões.*

</div>
