# Relatório de Estimativa — Observatório Civil BR

**Data do relatório:** 21/03/2025  
**Versão do projeto:** 1.0.0  
**Status:** Estimativa indireta (sem métricas instrumentadas no desenvolvimento)

---

## 1. Resumo Executivo

Este documento consolida a estimativa de **tempo de desenvolvimento** e **tokens consumidos** para a construção do painel Observatório Civil BR, com base na análise dos artefatos criados e dos links para projetos Gemini hospedados externamente. Não há registros explícitos de métricas no repositório; as cifras são inferidas a partir do volume e da complexidade do acervo.

| Métrica | Estimativa conservadora | Estimativa ampla |
|---------|-------------------------|------------------|
| **Tempo de desenvolvimento** | 120 horas | 200 horas |
| **Tokens (Gemini)** | ~1,2M | ~4M |
| **Tokens (Cursor/Claude)** | ~500K | ~2M |
| **Artefatos no painel** | 28 | 28 |
| **Projetos Gemini vinculados** | 10 | 10 |

---

## 2. Inventário de Artefatos

| Tipo | Quantidade | Descrição |
|------|------------|-----------|
| Artefatos HTML | ~35 | Dashboards, mapas mentais, linhas do tempo |
| Showcase (Markdown) | 12 | Artigos investigativos com frontmatter |
| Base catalogada (index) | 28 | Documentos listados no painel central |
| Ferramentas estratégicas | 2 | Estratégia integrada (2 versões) |

### Categorias de análise

- Crime Organizado (3 artefatos)
- Corrupção Política (7 artefatos)
- Judiciário (7 artefatos)
- Território & Soberania (4 artefatos)
- Economia (5 artefatos)
- Proteção Infantil (2 artefatos)
- Censura & Informação (3 artefatos)
- Operações Investigativas (4 artefatos)

---

## 3. Projetos Gemini Vinculados

| # | Projeto | URL |
|---|---------|-----|
| 1 | Observatório de Gastos Públicos | [gemini.google.com/share/1094a01945cb](https://gemini.google.com/share/1094a01945cb) |
| 2 | Soberania do Brasil (ESG) | [gemini.google.com/share/751e504a5707](https://gemini.google.com/share/f8640347e3cb) |
| 3 | Corrupção Raio-X | [gemini.google.com/share/74f96fa1676c](https://gemini.google.com/share/74f96fa1676c) |
| 4 | Vaza Toga | [gemini.google.com/share/7c753729312b](https://gemini.google.com/share/7c753729312b) |
| 5 | Guerra da Informação | [gemini.google.com/share/4301898ce057](https://gemini.google.com/share/4301898ce057) |
| 6 | Governança Criminal | [gemini.google.com/share/459e2fe745a0](https://gemini.google.com/share/459e2fe745a0) |
| 7 | Operações Policiais | [gemini.google.com/share/18eaf3b8c93e](https://gemini.google.com/share/18eaf3b8c93e) |
| 8 | Influência Estrangeira | [gemini.google.com/share/da8535f2df88](https://gemini.google.com/share/da8535f2df88) |
| 9 | Estratégia Integrada v1 | [gemini.google.com/share/a75fff049e0f](https://gemini.google.com/share/a75fff049e0f) |
| 10 | Estratégia Integrada v2 | [gemini.google.com/share/6ce9e2493740](https://gemini.google.com/share/6ce9e2493740) |

---

## 4. Estimativa de Tempo de Desenvolvimento

| Componente | Horas (min) | Horas (max) |
|------------|-------------|-------------|
| Dashboards complexos (Lava Jato, PCC-CV, INQ 4781, etc.) | 60 | 120 |
| Mapas mentais e análises | 26 | 52 |
| Artigos showcase (pesquisa + redação) | 12 | 36 |
| Infraestrutura (index, viewer, PWA, design) | 15 | 30 |
| **Total** | **113** | **238** |

**Faixa plausível consolidada:** 120–200 horas (15–25 dias úteis de 8h).

---

## 5. Estimativa de Tokens Consumidos

| Cenário | Tokens por unidade | Unidades | Total estimado |
|---------|--------------------|----------|----------------|
| Dashboards HTML (500–1200 linhas) | 15–50K | ~25 artefatos | 375K–1,25M |
| Ferramentas interativas Gemini | 50–200K | 10 projetos | 500K–2M |
| Artigos showcase | 5–20K | 12 itens | 60–240K |
| Refinamentos e iterações | — | — | +30–50% |
| **Total Gemini** | — | — | **~1,2M–4M** |
| **Cursor/Claude (edição, refatoração)** | — | — | **~500K–2M** |

---

## 6. Premissas e Limitações

1. **Gemini**: não expõe API de métricas de tokens; estimativas baseadas em benchmarks gerais.
2. **Cursor**: não há logs de tokens no repositório.
3. **Tempo**: não há registro explícito; a estimativa vem do volume e da complexidade dos artefatos.
4. **Itens considerados**: desenvolvimento assistido por IA (Gemini, Cursor, Claude); não incluídos tempo/tokens de pesquisa manual ou revisão externa.

---

## 7. Recomendações para Métricas Futuras

- Manter log manual de sessões (data, duração, foco).
- Usar histórico de commits para inferir períodos de atividade.
- Se houver uso da API Gemini: instrumentar registro de tokens nas respostas.
- Verificar no Cursor se existem relatórios de uso na conta.
