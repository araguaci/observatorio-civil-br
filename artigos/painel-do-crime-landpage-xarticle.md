# Painel do Crime: o mapa que conecta facção, corrupção e lawfare no Brasil

Investigações jornalísticas morrem no dia seguinte. Operações da PF viram manchete de uma semana. Decisões do STF somem no ruído. O que sobra é fragmento — e quem monta o quebra-cabeça sozinho parece paranoico.

O **Observatório Civil BR** nasceu para resolver isso: um hub open-source com **170+ artefatos HTML** standalone e **225+ entradas** catalogadas em `artifacts.json`. Cada dossiê é portátil, baseado em fonte pública verificável, sem paywall e sem servidor obrigatório. A landing page **Painel do Crime** (`landpage.html`) é a porta de entrada curada — crime organizado, operações anticorrupção, lawfare e padrões sistêmicos num só lugar.

## O Brasil em estado crítico — números que não cabem em um tweet

Antes de abrir qualquer dossiê, o painel fixa o contexto quantitativo:

- **~87.000** mortes violentas por ano (Atlas da Violência / IPEA)
- **26%** do território nacional com presença documentada de facções (FBSP)
- **91%** de impunidade em processos contra políticos (CNJ / Transparência Brasil)
- **33%** de carga tributária sobre o PIB (Receita Federal)
- **<10%** de elucidação de homicídios (IPEA / FBSP 2025)
- **105°** no ranking de corrupção (Transparency International 2024)
- **62°** no Rule of Law Index (World Justice Project 2024)
- **28 países** com presença documentada do PCC

Não são alarmismo editorial. São referências que o painel usa para ancorar cada artefato — e que você pode conferir nos relatórios primários citados dentro de cada HTML.

## Crime organizado: além do mapa de calor

A seção de facções concentra oito artefatos centrais:

- **PCC & CV — Relatório de Inteligência 2026**: estrutura de poder, território, financiamento transnacional
- **PCC e CV — Ameaça à Soberania**: dimensão geopolítica das facções brasileiras
- **Cocaína Vermelha**: rotas internacionais (Venezuela, Irã, Europa)
- **Trilogia Narco**: porto → lavagem → rede social
- **Narco Fluxo / Choquei**: campanha 2022, cobertura midiática, impunidade documentada
- **PCC → Choquei → Eleição 2022**: cadeia de influência jurídica via TSE
- **Crime Transnacional — Análise Forense**
- **Dossiê PCC — Salve Geral Nacional**: coerção territorial versus presença estatal

O fio condutor não é sensacionalismo. É mostrar que crime organizado, eleição e sistema financeiro não são silos — são camadas do mesmo padrão.

## Operações anticorrupção: o arquivo que o sistema tenta apagar

Quatorze dossiês cobrem o ciclo completo — da deflagração à reversão:

**Legado e destruição institucional:** Lava Jato, Satiagraha (Gilmar Mendes), Castelo de Areia.

**Ativas ou recentes:** Poço de Lobato (combustíveis / PCC), Sem Desconto (INSS), Mineração (garimpo ilegal), Narco Fluxo, JBS/J&F, **Banco Master / Compliance Zero** (R$ 51 bi no FGC), Carbono Oculto, Greenwashing, República Capturada.

**Captura regulatória:** dossiê Ypê / JBS / ANVISA — seletividade sanitária como padrão P3.

> A pergunta que o painel faz não é "houve corrupção?" — isso está nos autos. A pergunta é: **qual mecanismo garantiu que a mesma operação termine em condenação para uns e habeas corpus monocrático para outros?**

## Lawfare e judiciário: quando o processo vira arma

Dezoito artefatos mapeiam captura institucional:

- Operação Silêncio Digital (censura / P4)
- Armadilha ICE e Persona Non Grata (lawfare transnacional)
- Vaza Toga, INQ 4.781, nulidades do 8 de janeiro
- Duplo Padrão Judicial, TSE vs. mundo, Seleção Antes da Eleição
- **Lawfare Timeline 2026** — dossiê-irmão "O Sistema que Apaga" (memória forense P1–P11)
- Filipe Martins (700+ dias preventiva), Gilmar Mendes em Fatos, Janela 2026

Aqui o painel deixa de contar história isolada e passa a documentar **geometria de impunidade**: 535×1, foro privilegiado, prescrição estratégica, inversão do vetor punitivo.

## Padrões sistêmicos P1–P10: o vocabulário do corpus

O framework METHODOLOGY.md nomeia recorrências que aparecem em operações diferentes, décadas aparte:

| Código | Mecanismo | Gravidade |
|--------|-----------|-----------|
| **P1** | Anulação via defeito processual | Crítico |
| **P2** | Inversão do vetor punitivo | Crítico |
| **P3** | Captura judicial emergencial (STF) | Especial |
| **P4** | Censura por instrumentalização digital | Crítico |
| **P5** | Espoliação de fundos públicos (INSS, FGC) | Alto |
| **P6** | Greenwashing criminoso / carbono | Alto |
| **P7** | Captura eleitoral por redes criminosas | Alto |
| **P8** | Infiltração no sistema de pagamentos | Médio |
| **P9** | Perseguição transnacional de investigadores | Médio |
| **P10** | Interferência externa institucionalizada | Monitorado |

O **Dashboard Mestre** (`padroes-sistemicos-dashboard.html`) cruza padrão × operação × ator. É o artefato que transforma lista de escândalos em matriz analítica.

## Redes sistêmicas: emaranhamento, mídia, influência externa

Dez artefatos de análise transversal:

- Emaranhamento Quântico das Operações
- Paralelos (Lava Jato, Satiagraha, Castelo de Areia, Banestado)
- Rede Recorrente 1999–2026
- Global Kompromat
- Captura da Res Publica
- Donos da Mídia Brasileira
- USAID → TSE (2019–2025 e eleições 2022)
- Institutos Capturados

## Como usar o painel (passo a passo)

1. **Entrada curada:** abra `landpage.html` — visão por seções (facções, operações, lawfare, redes).
2. **Painel completo:** `index.html` — grid dinâmico com filtros por categoria e busca por título (170+ cards).
3. **API / IA:** `artifacts.json` v1.5.0 — metadados estruturados sem varrer HTML manualmente.
4. **Framework:** leia `METHODOLOGY.md` antes de citar padrões P1–P11.
5. **Contribuir:** issues e PRs no GitHub (`observatorio-civil-br`) — pautas, correções, novos artefatos.

Cada HTML funciona offline. Licença MIT. Material jornalístico — fontes públicas, sem incentivo a ilegalidade.

## Links principais

- Painel Central: https://observatorio-civil-br.vercel.app/
- Landing Painel do Crime: https://observatorio-civil-br.vercel.app/landpage.html
- Manifesto: https://observatorio-civil-br.vercel.app/artifacts.json
- Lawfare Timeline: https://observatorio-civil-br.vercel.app/lawfare-timeline.html
- Matriz P1–P11: https://observatorio-civil-br.vercel.app/padroes-sistemicos-dashboard.html
- GitHub: https://github.com/araguaci/observatorio-civil-br

## Fontes institucionais citadas no painel

- FBSP / Atlas da Violência / IPEA
- CNJ / Transparência Brasil
- Receita Federal / IBGE
- Transparency International (CPI 2024)
- World Justice Project (Rule of Law Index 2024)

*Dossiê completo e navegável: https://observatorio-civil-br.vercel.app/landpage.html*
