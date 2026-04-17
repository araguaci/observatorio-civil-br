# JustiçaWatch Brasil — Guia de Contribuição e Uso

**Licença:** CC0 1.0 Universal — Domínio Público  
**Projeto:** [lawfare-timeline.vercel.app](https://lawfare-timeline.vercel.app)  
**Versão do schema:** 1.0.0  
**Data:** 2026-04-12

---

## Arquivos desta base

| Arquivo | Função |
|---|---|
| `justicawatch-schema.json` | Schema de validação (JSON Schema 2020-12) |
| `justicawatch-data.json` | Base de dados principal — todos os registros |
| `justicawatch-brasil.html` | Interface pública de consulta |
| `CONTRIBUTING.md` | Este guia |

---

## Como adicionar um novo registro

### 1. Formato do ID

```
JW-AAAA-NNN
```

- `AAAA` = ano da decisão (ex: 2026)
- `NNN` = sequencial com zero à esquerda (001, 002 ... 999)
- Próximo ID disponível: ver campo `_meta.proximo_id` no JSON de dados

**Exemplos válidos:** `JW-2006-001` `JW-2024-042` `JW-2026-001`

---

### 2. Campos obrigatórios

Todo registro DEVE conter:

```json
{
  "id": "JW-AAAA-NNN",
  "data_registro": "AAAA-MM-DD",
  "ano_decisao": 2024,
  "tribunal": "STF",
  "tipo_decisao": "habeas_corpus_monocratico",
  "crime_categoria": ["trafico_drogas"],
  "resumo": "Máximo 500 caracteres. Factual. Neutro.",
  "impacto_publico": {
    "tipo": "soltura_direta",
    "descricao": "O que concretamente aconteceu após a decisão."
  },
  "fontes": [
    {
      "tipo": "portal_oficial_tribunal",
      "descricao": "Nome da fonte",
      "url": "https://...",
      "verificado": true
    }
  ]
}
```

---

### 3. Hierarquia de fontes (por ordem de confiabilidade)

1. **portal_oficial_tribunal** — Portal do STF, STJ, TRF, TJ
2. **bnmp_cnj** — Banco Nacional de Monitoramento de Prisões
3. **diario_oficial** — Diário da Justiça, DOU
4. **relatorio_cnj** — Relatórios CNJ/INFOPEN
5. **relatorio_parlamentar** — Dossiês e relatórios do Congresso
6. **jornalismo_investigativo** — Reportagens com número de processo identificável
7. **fact_check** — Verificações de agências (Aos Fatos, Lupa, Agência Pública)
8. **jusbrasil** — Inteiro teor de acórdãos

⚠️ Registros sem fonte do tipo 1, 2, 3 ou 4 devem incluir `"status": "pendente_verificacao"`.

---

### 4. Padrões sistêmicos disponíveis

| Código | Padrão |
|---|---|
| `P1_anulacao_vicio_processual` | Anulação de prova ou processo por vício formal, esvaziando condenação com materialidade sólida |
| `P2_investigado_vira_investigador` | Investigador ou promotor torna-se alvo de investigação após avançar em caso sensível |
| `P3_captura_judicial_emergencial` | Decisão judicial de emergência protegendo ator de alto perfil político ou econômico |
| `P4_weaponizacao_midia` | Uso de mídia para destruir reputação de investigadores ou testemunhas |
| `P5_fundos_publicos_como_vetor` | Fundos ou recursos públicos como veículo de desvio ou lavagem |
| `P6_prescricao_estrategica` | Uso de recursos protelatórios até a prescrição do crime |
| `P7_captura_previdenciaria_transgeracional` | Captura de sistemas previdenciários por organizações criminosas |
| `P8_intervalo_fuga_liminar` | Exploração do intervalo entre liminar monocrática e análise colegiada para fuga |
| `P9_trafico_privilegiado_distorcido` | Aplicação do art. 33 §4º (tráfico privilegiado) fora dos critérios originais |
| `P10_ausencia_banco_nacional_solturas` | Falta de monitoramento sistemático pós-soltura como fator de impunidade |

---

### 5. Tipos de decisão disponíveis

| Enum | Descrição |
|---|---|
| `habeas_corpus_monocratico` | HC decidido por ministro individual |
| `habeas_corpus_colegiado` | HC decidido por turma ou plenário |
| `habeas_corpus_coletivo` | HC com efeito para grupo ou nacional |
| `progressao_regime` | Progressão fechado→semiaberto→aberto |
| `liberdade_provisoria` | Aguardar julgamento em liberdade |
| `revogacao_preventiva` | Revogação de prisão preventiva |
| `nulidade_processual` | Anulação de processo por vício formal |
| `nulidade_prova` | Anulação de prova por vício na coleta |
| `absolvicao` | Absolvição (inclui casos de inocentes) |
| `reducao_pena` | Redução de pena por revisão jurisprudencial |
| `extincao_punibilidade` | Prescrição, morte, ou outro |
| `mudanca_jurisprudencial` | Virada de entendimento com impacto sistêmico |
| `acao_direta` | ADI, ADC, ADPF |
| `medida_cautelar` | Liminar suspendendo investigação ou operação |
| `audiencia_custodia` | Soltura em audiência de custódia |
| `trafico_privilegiado` | Aplicação do art. 33 §4º |
| `outro` | Usar campo `tipo_decisao_descricao` |

---

### 6. Regras de redação do resumo

✅ **Correto:**
> "HC monocrático solta líder do PCC condenado a 25 anos. Decisão baseada em prazo de preventiva excedido. Revertida em colegiado. Réu evadiu."

❌ **Evitar:**
> "Em decisão escandalosa, o STF liberou criminoso perigoso, demonstrando conivência com o tráfico."

**Princípio:** Descrever *o que aconteceu*, não *julgamento moral* sobre a decisão.

---

### 7. Campos especiais

#### `foragido: true`
Use apenas quando há mandado de prisão ativo e o paradeiro é desconhecido. Incluir fonte que confirme o status.

#### `reincidencia_documentada: true`
Use apenas quando existe fonte documentada (policial, jornalística ou judicial) de novo crime após a decisão. Descrever em `reincidencia_descricao`.

#### `notas_internas`
Campo privado (não publicado na interface). Use para:
- Dúvidas sobre verificação
- Números de processo pendentes
- Divergências entre fontes
- Tarefas para revisão futura

---

### 8. Atualização de registros existentes

1. Incrementar `versao` (+1)
2. Atualizar `status` se necessário
3. Adicionar entrada em `historico_versoes`:

```json
{
  "data": "2026-04-15",
  "versao": 2,
  "descricao": "Atualizado número do processo após verificação no portal STF.",
  "contribuidor": "contrib_rj_01"
}
```

---

### 9. Contribuidores

Usar identificador anônimo ou pseudônimo. **Nunca dados pessoais.**

Exemplos: `contrib_sp_01`, `redacao_lawfare`, `anonimo_12`, `jornalista_sul`

---

## Uso dos dados

### Carregar em JavaScript

```javascript
const response = await fetch('justicawatch-data.json');
const db = await response.json();

// Todos os registros ativos
const ativos = db.registros.filter(r => r.status === 'ativo');

// Filtrar por categoria de crime
const trafico = db.registros.filter(r => 
  r.crime_categoria.includes('trafico_drogas')
);

// Foragidos
const foragidos = db.registros.filter(r => 
  r.impacto_publico.foragido === true
);

// Por tribunal
const stf = db.registros.filter(r => r.tribunal === 'STF');

// Por padrão sistêmico
const p8 = db.registros.filter(r => 
  r.padrao_sistemico?.includes('P8_intervalo_fuga_liminar')
);
```

### Validar novo registro contra o schema

```bash
npx ajv validate -s justicawatch-schema.json -d novo-registro.json
```

---

## Portais de verificação primária

| Portal | URL | Uso |
|---|---|---|
| STF | https://portal.stf.jus.br | Consulta por número de HC/ADC/ADI |
| STJ | https://www.stj.jus.br | Jurisprudência e notícias |
| BNMP 3.0 | https://bnmp.cnj.jus.br | Mandados de prisão ativos |
| CNJ Painéis | https://paineis.cnj.jus.br | Estatísticas do judiciário |
| SISDEPEN | https://www.gov.br/senappen/pt-br/servicos/sisdepen | População carcerária |
| Jusbrasil | https://www.jusbrasil.com.br/jurisprudencia | Inteiro teor de acórdãos |
| DJe | https://www.stf.jus.br/portal/diarioJustica | Diário da Justiça Eletrônico |

---

## Licença

Esta base de dados é publicada sob **CC0 1.0 Universal**.  
Nenhum direito reservado. Cópia, redistribuição, modificação e uso comercial são livres, sem necessidade de atribuição.

https://creativecommons.org/publicdomain/zero/1.0/

---

*JustiçaWatch Brasil é parte do ecossistema [lawfare-timeline.vercel.app](https://lawfare-timeline.vercel.app)*
