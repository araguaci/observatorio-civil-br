# 🔍 Observatório Civil BR — Brasil em Estado Crítico

<div align="center">

![Status](https://img.shields.io/badge/status-ativo-dc2626?style=flat-square)
![Versão](https://img.shields.io/badge/versão-1.4.0-3b82f6?style=flat-square)
![Lançamento](https://img.shields.io/badge/lançamento-2026--05--09-22c55e?style=flat-square)
![Licença](https://img.shields.io/badge/licença-MIT-22c55e?style=flat-square)
![Conteúdo](https://img.shields.io/badge/conteúdo-jornalístico%20%2F%20investigativo-f59e0b?style=flat-square)
![GitHub Issues](https://img.shields.io/github/issues/araguaci/observatorio-civil-br?style=flat-square&color=a855f7)

**Central de inteligência civil** para análise crítica de crime organizado,
corrupção sistêmica, captura do judiciário e colapso institucional no Brasil.

[🔴 Acessar o Painel](https://observatorio-civil-br.vercel.app/) · [📋 Changelog](CHANGELOG.md) · [🧠 Metodologia / AI Context](METHODOLOGY.md) · [📋 Sugerir Pauta](https://github.com/araguaci/observatorio-civil-br/issues/new?template=pauta.md&labels=pauta&title=%5BPAUTA%5D+) · [🐛 Reportar Erro](https://github.com/araguaci/observatorio-civil-br/issues/new?template=bug_report.md&labels=bug&title=%5BBUG%5D+) · [💡 Sugestão](https://github.com/araguaci/observatorio-civil-br/issues/new?template=sugestao.md&labels=sugestão&title=%5BSUGEST%C3%83O%5D+)

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

## 🤖 Para sistemas de IA e ferramentas de busca

O repositório expõe um índice estruturado de todos os artefatos em **`artifacts.json`** — o ponto de entrada recomendado para qualquer ferramenta que precise consultar o projeto sem varrer dezenas de HTML individualmente. O painel (`index.html`) pode exibir **mais de uma linha** para o mesmo arquivo; o JSON usa **ids únicos** na lista flat (**108** entradas, v1.4.0).

**Endpoints diretos:**

```
https://observatorio-civil-br.vercel.app/artifacts.json
https://raw.githubusercontent.com/araguaci/observatorio-civil-br/main/artifacts.json
```

### Mapa rápido — onde buscar dados (IA e integrações)

| Prioridade | Arquivo (raiz do repo) | Uso |
|------------|------------------------|-----|
| **1** | [`artifacts.json`](./artifacts.json) | **Catálogo canônico** do Observatório: `project`, `stats`, `categories[]`, lista flat `artifacts[]` (**108** ids), indicadores e URLs oficiais. Preferir para inventário e links. |
| **2** | [`justicawatch-data.json`](./justicawatch-data.json) | **JustiçaWatch:** decisões judiciais documentadas (`registros`, ids `JW-*`) **e** chave **`indice_artefatos_observatorio`** — espelho dos **108** artefatos (título, arquivo, url, tipo, categorias, descrição) para cruzar decisões com o painel. `_meta` aponta para `artifacts.json` e versão do projeto. |
| **3** | [`justicawatch-schema.json`](./justicawatch-schema.json) | Schema JSON dos **registros** JustiçaWatch (não descreve o índice de artefatos; use `artifacts.json` como referência de estrutura do catálogo). |
| **4** | [`METHODOLOGY.md`](./METHODOLOGY.md) | Protocolo analítico, classificação de evidências, padrões **P01–P11**, hierarquia de espelhos (`gosurf.site`, etc.) e **§11** (`artifacts.json`). |

**Fluxo sugerido para um agente:** (1) ler `artifacts.json` ou a chave **`indice_artefatos_observatorio`** em `justicawatch-data.json` para saber *o que* existe; (2) abrir a URL do artefato ou [METHODOLOGY.md](METHODOLOGY.md) (§§4, 8 e 11) para *como* interpretar taxonomia, evidências e espelhos; (3) usar **`registros`** em `justicawatch-data.json` para *decisões* JustiçaWatch (ids `JW-*`).

O **`artifacts.json`** concentra metadados do projeto, indicadores e a lista flat completa (**108** artefatos) com título, descrição, tipo, categorias e URL. Vários HTML usam **`gosurf.site`** como canônico (`rel="canonical"`).

---

## 🗂️ Estrutura do Projeto

```
observatorio-civil-br/
│
├── CHANGELOG.md                         # Histórico de versões e lançamentos
├── METHODOLOGY.md                       # Framework analítico + protocolo para sistemas de IA
├── artifacts.json                       # Índice estruturado de todos os artefatos (AI/API)
├── justicawatch-data.json               # JustiçaWatch (decisões JW) + indice_artefatos_observatorio
├── justicawatch-schema.json             # JSON Schema dos registros JW
├── VERSION                              # Versão atual do release (1.4.0)
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
├── icons/                              # Ícones SVG por categoria (filtros e badges do painel)
│   ├── cat-crime.svg … cat-infancia.svg
│   ├── cat-censura.svg, cat-operacoes.svg
│   └── …
│
├── ferramentas/                        # Frameworks estratégicos
│   ├── estrategia-integrada-gestao-corporativa-na-seguranca-publica.html
│   └── estrategia-integrada-gestao-corporativa-na-seguranca-publica2.html
│
└── *.html                              # Artefatos investigativos (~108 cards no grid; ids únicos em artifacts.json)
    ├── pcc-cv-intel-dashboard-2026.html
    ├── pcc-cv-ameaca-nacional.html
    ├── choquei-pcc-fluxo*.html
    ├── trilogia-narco.html
    ├── brasil-maquina-de-captura.html
    ├── brasil-estado-totalitario.html
    ├── golpe-brasil-analise-evidencial.html
    ├── controle-total-2026.html
    ├── mapa_erosao_institucional_1990_2026.html
    ├── global-kompromat.html
    ├── grafo-poder-global-atores.html
    ├── atores-ruptura-democratica-global.html
    ├── vetor-brasileiro-poder-global.html
    ├── cadeia-influencia-usaid-tse-2022.html
    ├── brazil-democratic-erosion-2026*.html
    ├── padroes-sistemicos*.html
    ├── gilmar-mendes-em-fatos.html
    ├── gilmar_mendes_poder_dashboard.html
    ├── duplo-padrao-judicial.html
    ├── dossie-juridico-nulidades-8jan.html
    ├── vaza-toga.html
    ├── jusmonitor.html
    ├── faixa-tropical.html
    ├── insolvencia-brasil-comparativo.html
    ├── dossie-hydra-padrao-p8.html
    ├── mapa-mental-nexo-fintech.html
    ├── censura-digital-brasil.html
    ├── firehose_falsehood_brasil_2026.html
    ├── guerra_da_informacao_br2022.html
    ├── thread-weaponized-legalism-x.html
    ├── operacao-armadilha-ice.html
    ├── operacao-persona-non-grata.html
    ├── alem-da-toga.html
    ├── amazonia-legal.html
    ├── banco-master*.html
    ├── carbono_oculto.html
    ├── cocaina-vermelha.html
    ├── lava-jato-mapa-mental*.html
    ├── marajo-exploracao-sexual-infantil.html  # Denúncia investigativa
    ├── operacao_*.html
    ├── republica-capturada.html
    ├── zero-x-zero.html
    └── ...
```

---

## 📚 Categorias de Análise

| # | Categoria | Artefatos | Foco |
|---|-----------|-----------|------|
| 🔴 | **Crime Organizado** | 17 | PCC, CV, Trilogia Narco, Choquei, ameaça à soberania, Banco Master / fintech, operações |
| 🟡 | **Corrupção Política** | 42 | Máquina de captura, erosão institucional, lawfare eleitoral, kompromat, Mare Liberum, pandemia capturada, paradoxo constitucional |
| 🟣 | **Judiciário** | 30 | Gilmar Mendes, duplo padrão, Vaza Toga, nulidades 8/Jan, assimetria punitiva, JustiçaWatch, STF |
| 🟢 | **Território & Soberania** | 6 | Amazônia, Faixa do Silêncio, influência estrangeira, Venezuela, Irã, mineração |
| 🔵 | **Economia** | 15 | Banco Master, Nexo Fintech, insolvência comparativa, LGPD / compliance, carga tributária |
| 🟠 | **Proteção Infantil** | 2 | Marajó — denúncia investigativa, sistema de proteção |
| 🩷 | **Censura & Informação** | 11 | Censura digital, Firehose, guerra da informação 2022, weaponized legalism, INQ 4781 |
| 🩵 | **Operações Investigativas** | 33 | Satiagraha, Castelo de Areia, Mare Liberum, matriz emaranhamento (7 ops), ICE, Persona Non Grata |

*Contagens = entradas por categoria em `artifacts.json` (um mesmo artefato pode aparecer em mais de uma categoria).*

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
3. Adicione seu artefato na pasta correspondente e **atualize `artifacts.json`** (`stats`, blocos `categories[]`, lista flat `artifacts[]`, próximo `id` sequencial — ver [METHODOLOGY.md](METHODOLOGY.md) §11)
4. Garanta que o conteúdo cita fontes públicas verificáveis
5. Envie um **Pull Request** com descrição detalhada

#### Padrões para Novos Artefatos

- ✅ Baseado exclusivamente em fontes públicas
- ✅ Citar fonte em cada dado/estatística
- ✅ Conteúdo investigativo/analítico, não opinativo sem base
- ✅ Para arquivos `.md`: incluir frontmatter YAML com `title`, `description`, `date`
- ✅ Para arquivos `.html`: incluir `<title>` descritivo e meta description
- ✅ Ao alterar o catálogo: manter **`artifacts.json`** e o espelho **`indice_artefatos_observatorio`** em **`justicawatch-data.json`** alinhados (regenerar a lista a partir da flat list ou atualizar em conjunto)
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
