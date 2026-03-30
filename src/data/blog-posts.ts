export type BlogPost = {
  slug: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  category: string;
  cluster: string;
  isPillar: boolean;
  internalLinks: string[]; // slugs of related articles
  date: string; // ISO date
  published: boolean;
  content: string; // markdown content
};

// ─── CLUSTERS ───────────────────────────────────────────────────────
// 1. Prospecção B2B para Indústrias (P1)
// 2. Funil de Vendas Industrial (P2)
// 3. Marketing Digital para Indústrias (P3)
// 4. CRM e Ferramentas Comerciais (P4)
// 5. Métricas e Gestão Comercial (P5)
// 6. Equipe Comercial Industrial (P6)
// 7. Cases e Decisão (P7)

export const blogPosts: BlogPost[] = [
  // ═══════════════════════════════════════════════════════════════════
  // PILAR 1: Prospecção B2B para Indústrias
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "prospeccao-b2b-industrias",
    titleTag: "Prospecção B2B para Indústrias: Guia Completo [2026]",
    metaDescription: "Aprenda como montar um processo de prospecção B2B para indústrias. Outbound, cold call, email e LinkedIn com exemplos práticos.",
    h1: "Prospecção B2B para Indústrias: Guia Completo",
    category: "Prospecção",
    cluster: "prospeccao",
    isPillar: true,
    internalLinks: ["outbound-industrial", "cold-call-industrias", "email-frio-b2b-industrial", "cadencia-prospeccao-b2b", "linkedin-vendas-industria", "prospeccao-ativa-vs-indicacao", "icp-industria", "feiras-industriais-funil", "funil-vendas-industrial", "marketing-digital-industrias"],
    date: "2026-03-26",
    published: true,
    content: `A maioria das indústrias brasileiras vende por indicação. Funciona — até parar de funcionar. Quando o telefone para de tocar, não existe plano B. Não existe pipeline, não existe previsibilidade, não existe processo.

Este guia mostra como montar um processo de prospecção B2B estruturado para indústrias, do zero, com canais, ferramentas e exemplos práticos.

## Por que a indústria precisa de prospecção ativa?

A dependência de indicação cria três problemas graves:

1. **Imprevisibilidade de receita** — você não controla quando o próximo cliente aparece
2. **Concentração de carteira** — poucos clientes representam a maior parte do faturamento
3. **Vulnerabilidade competitiva** — quando o concorrente prospecta e você não, ele chega primeiro

Prospecção ativa significa ir atrás do cliente certo, na hora certa, com a mensagem certa. Em vez de esperar o telefone tocar, você cria oportunidades de forma sistemática.

## O que é prospecção B2B no contexto industrial?

No setor industrial, prospecção B2B é o processo de identificar, abordar e qualificar empresas que podem se tornar clientes. Diferente do varejo, aqui o ciclo de venda é mais longo, o ticket é mais alto e a decisão envolve múltiplas pessoas.

Isso significa que o processo precisa ser:

- **Direcionado** — você não prospecta "todo mundo", mas empresas com perfil específico
- **Multicanal** — combina email, LinkedIn, telefone e até visitas presenciais
- **Persistente** — o decisor industrial raramente responde no primeiro contato
- **Baseado em valor** — a abordagem precisa mostrar que você entende o problema dele

## Passo 1: Defina seu ICP (Perfil de Cliente Ideal)

Antes de prospectar qualquer empresa, você precisa saber exatamente quem é seu cliente ideal. No setor industrial, os critérios mais comuns são:

- **Segmento** — Metalurgia, plásticos, alimentos, químico, têxtil?
- **Porte** — Faturamento anual, número de funcionários
- **Localização** — Região, polo industrial, proximidade logística
- **Cargo do decisor** — Diretor industrial, gerente de compras, sócio?
- **Dor principal** — O que faz essa empresa precisar do que você vende?
- **Gatilho de compra** — Expansão, troca de fornecedor, nova linha de produção?

Quanto mais específico o ICP, menor o desperdício de tempo e maior a taxa de conversão.

## Passo 2: Escolha seus canais de prospecção

Na indústria B2B brasileira, os canais que funcionam são:

### Email frio

O canal mais escalável. Funciona bem quando o email é curto, personalizado e relevante. A regra de ouro: **o email não vende — ele agenda uma conversa**.

Boas práticas:
- Máximo 5 linhas no primeiro email
- Mencione algo específico sobre a empresa do lead
- CTA claro: "Faz sentido conversarmos 15 minutos esta semana?"
- Use domínio separado para não comprometer o principal

### LinkedIn

O segundo canal mais efetivo. O LinkedIn funciona especialmente bem para alcançar diretores e gerentes que não respondem email.

A sequência que funciona:
1. Pedido de conexão com nota personalizada (sem vender)
2. Após aceitar, mensagem de contexto (sem vender)
3. Terceira mensagem com proposta de valor + CTA

### Telefone (cold call)

Ainda funciona na indústria, especialmente como follow-up. O decisor industrial é mais receptivo ao telefone do que executivos de tecnologia, por exemplo.

Use o telefone para:
- Follow-up após emails sem resposta
- Primeiro contato com empresas menores
- Qualificação rápida de interesse

### Feiras e eventos

Feiras industriais são uma mina de ouro para prospecção — se você tiver processo. O erro mais comum é coletar cartões e nunca fazer follow-up estruturado.

## Passo 3: Monte sua cadência de prospecção

Cadência é a sequência de contatos que você faz com cada lead. Uma cadência B2B industrial típica:

| Dia | Ação | Canal |
|-----|------|-------|
| 1 | Email de apresentação | Email |
| 2 | Pedido de conexão | LinkedIn |
| 4 | Segundo email com caso de uso | Email |
| 7 | Mensagem direta | LinkedIn |
| 10 | Terceiro email + CTA direto | Email |
| 14 | Ligação telefônica | Telefone |
| 21 | Email de break-up | Email |

Pontos importantes:
- **7 touchpoints em 21 dias** é o padrão para B2B industrial
- Se não respondeu após a cadência completa, coloque em "nurturing" e tente novamente em 90 dias
- Personalize pelo menos o primeiro e o último email

## Passo 4: Use as ferramentas certas

Você não precisa de uma stack cara para começar. O mínimo viável:

| Necessidade | Ferramenta | Investimento |
|-------------|-----------|-------------|
| Encontrar leads | LinkedIn Sales Navigator | ~R$ 400/mês |
| Encontrar emails | Apollo.io | Grátis (limite) a $49/mês |
| Enviar cadências | Lemlist ou Instantly | $30-60/mês |
| Gerenciar pipeline | HubSpot CRM | Grátis |
| Agendar reuniões | Cal.com | Grátis |

Com menos de R$ 500/mês você tem uma operação de prospecção rodando.

## Passo 5: Escreva mensagens que geram resposta

O maior erro na prospecção industrial é mandar mensagens genéricas. "Somos uma empresa líder em soluções..." não funciona.

O que funciona:

**Estrutura do email frio que converte:**

1. **Linha de assunto** — Curta, específica, sem parecer marketing
2. **Primeira frase** — Observação sobre a empresa do lead (mostra que você pesquisou)
3. **Problema** — Uma frase sobre a dor que você resolve
4. **Prova** — Um resultado concreto com empresa similar
5. **CTA** — Pergunta simples que facilita a resposta

**Exemplo prático:**

> *Assunto: [Nome da Empresa] — uma pergunta sobre fornecedores*
>
> *Olá [Nome],*
>
> *Vi que a [Empresa] está expandindo a linha de [produto]. Normalmente, quando indústrias nesse momento buscam [o que você vende], enfrentam [problema específico].*
>
> *Ajudamos a [empresa similar] a resolver isso em [prazo], com [resultado concreto].*
>
> *Faz sentido trocarmos 15 minutos esta semana?*

## Passo 6: Meça e otimize

Sem métricas, você não sabe o que está funcionando. Os KPIs essenciais:

- **Taxa de abertura de email** — Meta: acima de 50%
- **Taxa de resposta** — Meta: acima de 5%
- **Taxa de conversão (resposta → reunião)** — Meta: acima de 30%
- **Reuniões agendadas por semana** — Meta: 2-3 para começar
- **Custo por reunião agendada** — Divida o investimento total pelo número de reuniões

Se a taxa de abertura está baixa, o problema está no assunto. Se abrem mas não respondem, o problema está na mensagem. Se respondem mas não agendam, o problema está no CTA ou na qualificação.

## Erros comuns na prospecção industrial

1. **Prospectar sem ICP definido** — Atirar para todo lado desperdiça tempo e dinheiro
2. **Desistir no segundo email** — A maioria das respostas vem entre o 3º e o 5º contato
3. **Usar o domínio principal para cold email** — Se cair em spam, compromete toda a comunicação
4. **Não ter CRM** — Sem CRM, leads se perdem e follow-ups não acontecem
5. **Mensagens genéricas** — "Somos líderes em soluções" não gera resposta de ninguém
6. **Prospectar sem cadência** — Contatos avulsos, sem frequência, não geram pipeline

## Como a Orbius ajuda

Na Orbius, montamos o processo de prospecção completo para indústrias B2B: definição de ICP, construção de listas, cadências multicanal, scripts personalizados e acompanhamento de métricas.

O resultado é um pipeline previsível de oportunidades, sem depender de indicação.

## Próximos passos

Se você quer se aprofundar em cada etapa deste processo, continue lendo:

- Como montar um processo de outbound industrial do zero
- Cold call para indústrias: script e boas práticas
- Email frio B2B industrial: como fazer sem ser spam
- Como criar uma cadência de prospecção B2B industrial
- Como usar LinkedIn para vender para indústrias
- Prospecção ativa vs indicação: o que escala mais na indústria

---

*Quer estruturar a prospecção da sua indústria? Agende um diagnóstico gratuito e descubra onde estão as oportunidades no seu comercial.*`,
  },
  {
    slug: "outbound-industrial",
    titleTag: "Como Montar um Processo de Outbound Industrial do Zero",
    metaDescription: "Passo a passo para criar um processo de outbound para indústrias B2B. Da definição do ICP à cadência de prospecção.",
    h1: "Como Montar um Processo de Outbound Industrial do Zero",
    category: "Prospecção",
    cluster: "prospeccao",
    isPillar: false,
    internalLinks: ["prospeccao-b2b-industrias", "cold-call-industrias", "email-frio-b2b-industrial", "crm-ferramentas-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "cold-call-industrias",
    titleTag: "Cold Call para Indústrias: Script e Boas Práticas [2026]",
    metaDescription: "Scripts prontos de cold call para vender para indústrias B2B. Técnicas de abordagem, objeções e exemplos reais.",
    h1: "Cold Call para Indústrias: Script e Boas Práticas",
    category: "Prospecção",
    cluster: "prospeccao",
    isPillar: false,
    internalLinks: ["prospeccao-b2b-industrias", "outbound-industrial", "email-frio-b2b-industrial", "linkedin-vendas-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "email-frio-b2b-industrial",
    titleTag: "Email Frio B2B Industrial: Como Fazer Sem Ser Spam",
    metaDescription: "Modelos de email frio para prospecção B2B industrial. Como escrever, quando enviar e o que evitar para não cair no spam.",
    h1: "Email Frio B2B Industrial: Como Fazer Sem Ser Spam",
    category: "Prospecção",
    cluster: "prospeccao",
    isPillar: false,
    internalLinks: ["prospeccao-b2b-industrias", "outbound-industrial", "cold-call-industrias", "cadencia-prospeccao-b2b"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "cadencia-prospeccao-b2b",
    titleTag: "Cadência de Prospecção B2B Industrial: Como Criar a Sua",
    metaDescription: "Monte uma cadência de prospecção B2B multicanal para indústrias. Email, LinkedIn, telefone e follow-up com exemplos.",
    h1: "Como Criar uma Cadência de Prospecção B2B Industrial",
    category: "Prospecção",
    cluster: "prospeccao",
    isPillar: false,
    internalLinks: ["prospeccao-b2b-industrias", "outbound-industrial", "email-frio-b2b-industrial", "linkedin-vendas-industria", "crm-ferramentas-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "linkedin-vendas-industria",
    titleTag: "LinkedIn para Vendas na Indústria: Guia Prático B2B",
    metaDescription: "Como usar o LinkedIn para vender para indústrias B2B. Perfil, conexões, mensagens e Social Selling com exemplos.",
    h1: "Como Usar LinkedIn para Vender para Indústrias",
    category: "Prospecção",
    cluster: "prospeccao",
    isPillar: false,
    internalLinks: ["prospeccao-b2b-industrias", "outbound-industrial", "cadencia-prospeccao-b2b", "prospeccao-ativa-vs-indicacao"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "prospeccao-ativa-vs-indicacao",
    titleTag: "Prospecção Ativa vs Indicação: O Que Escala na Indústria?",
    metaDescription: "Compare prospecção ativa e indicação para indústrias B2B. Descubra qual estratégia traz mais previsibilidade de vendas.",
    h1: "Prospecção Ativa vs Indicação: O Que Escala Mais na Indústria",
    category: "Prospecção",
    cluster: "prospeccao",
    isPillar: false,
    internalLinks: ["prospeccao-b2b-industrias", "outbound-industrial", "linkedin-vendas-industria", "metricas-gestao-comercial-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "icp-industria",
    titleTag: "Como Mapear o ICP na Indústria B2B [Passo a Passo]",
    metaDescription: "Aprenda a definir o Perfil de Cliente Ideal (ICP) para sua indústria. Critérios, ferramentas e exemplos práticos.",
    h1: "Como Mapear o ICP (Perfil de Cliente Ideal) na Indústria",
    category: "Prospecção",
    cluster: "prospeccao",
    isPillar: false,
    internalLinks: ["prospeccao-b2b-industrias", "outbound-industrial", "feiras-industriais-funil", "funil-vendas-industrial"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "feiras-industriais-funil",
    titleTag: "Feiras Industriais: Como Usar para Alimentar o Funil de Vendas",
    metaDescription: "Transforme contatos de feiras industriais em oportunidades reais. Estratégia antes, durante e depois do evento.",
    h1: "Como Usar Feiras Industriais para Alimentar o Funil de Vendas",
    category: "Prospecção",
    cluster: "prospeccao",
    isPillar: false,
    internalLinks: ["prospeccao-b2b-industrias", "icp-industria", "prospeccao-ativa-vs-indicacao", "marketing-digital-industrias"],
    date: "",
    published: false,
    content: "",
  },

  // ═══════════════════════════════════════════════════════════════════
  // PILAR 2: Funil de Vendas Industrial
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "funil-vendas-industrial",
    titleTag: "Funil de Vendas Industrial: Como Montar o Seu [2026]",
    metaDescription: "Guia completo para montar um funil de vendas B2B industrial. Etapas, qualificação, conversão e exemplos reais.",
    h1: "Funil de Vendas Industrial: Como Montar o Seu",
    category: "Funil de Vendas",
    cluster: "funil",
    isPillar: true,
    internalLinks: ["etapas-funil-vendas-b2b", "qualificar-leads-industriais", "encurtar-ciclo-vendas-industrial", "follow-up-b2b", "taxa-conversao-propostas-industriais", "venda-consultiva-industrias", "objecoes-vendas-industriais", "prospeccao-b2b-industrias", "marketing-digital-industrias"],
    date: "2026-03-26",
    published: true,
    content: `Se você perguntar para o dono de uma indústria "como está o funil de vendas?", na maioria dos casos a resposta é um olhar confuso. Não porque ele não se importa com vendas — ele se importa demais. Mas porque nunca ninguém estruturou isso.

O funil de vendas industrial é o caminho que um potencial cliente percorre desde o primeiro contato até o fechamento do contrato. Sem ele, você não sabe quantas oportunidades tem, onde elas estão travando e quanto vai faturar no próximo trimestre.

Este guia mostra como montar um funil de vendas B2B adaptado à realidade da indústria brasileira.

## O que é um funil de vendas industrial?

O funil de vendas é uma representação visual das etapas que um lead percorre até virar cliente. No contexto industrial, essas etapas são mais longas e complexas do que no varejo porque:

- **O ticket médio é alto** — decisões envolvem investimento significativo
- **Múltiplos decisores** — compras, engenharia, diretoria, financeiro
- **Ciclo longo** — de semanas a meses, dependendo do produto
- **Especificação técnica** — o lead precisa entender que seu produto resolve o problema dele

Por isso, o funil industrial precisa ser desenhado para acompanhar essa complexidade sem perder oportunidades pelo caminho.

## As 6 etapas do funil de vendas industrial

### Etapa 1: Prospecção (Topo do Funil)

É aqui que tudo começa. Você identifica empresas com perfil para comprar e faz o primeiro contato. Pode ser via email frio, LinkedIn, telefone ou feiras.

**Critério de entrada:** Empresa dentro do ICP (Perfil de Cliente Ideal)
**Critério de saída:** Lead respondeu e demonstrou algum interesse

Métricas desta etapa:
- Quantidade de empresas prospectadas por semana
- Taxa de resposta (meta: acima de 5%)
- Tempo médio até primeira resposta

### Etapa 2: Qualificação

O lead respondeu — agora você precisa entender se ele realmente tem potencial. Qualificar significa responder quatro perguntas:

1. **Tem a dor?** — Ele tem o problema que você resolve?
2. **Tem orçamento?** — Consegue investir no que você vende?
3. **Tem urgência?** — Precisa resolver agora ou "para o ano que vem"?
4. **Tem autoridade?** — A pessoa que você está falando decide ou precisa aprovar com alguém?

Use uma framework simples. O BANT funciona bem na indústria:

| Critério | Pergunta-chave |
|----------|----------------|
| **Budget** (Orçamento) | "Vocês já têm verba alocada para esse projeto?" |
| **Authority** (Autoridade) | "Quem mais participa dessa decisão?" |
| **Need** (Necessidade) | "O que acontece se vocês não resolverem isso nos próximos meses?" |
| **Timeline** (Prazo) | "Quando vocês precisam ter isso rodando?" |

**Critério de saída:** Lead qualificado (tem dor, orçamento e prazo)

### Etapa 3: Apresentação / Reunião técnica

Com o lead qualificado, você agenda uma reunião mais profunda. Na indústria, essa reunião geralmente envolve:

- Entendimento técnico detalhado da necessidade
- Demonstração do produto ou serviço
- Visita técnica (presencial ou virtual)
- Envolvimento de engenharia ou equipe técnica

O erro mais comum aqui é pular direto para a proposta sem entender o cenário completo. Na venda industrial, quem entende melhor o problema fecha mais.

**Dicas para esta etapa:**
- Leve perguntas preparadas, não só uma apresentação
- Envolva o técnico da sua equipe se necessário
- Anote tudo — cada detalhe pode ser diferencial na proposta
- Identifique quem são todos os decisores

**Critério de saída:** Necessidade mapeada, decisores identificados, próximo passo acordado

### Etapa 4: Proposta

A proposta comercial na indústria não é um PDF genérico. Ela precisa ser personalizada para o cenário do lead.

Uma boa proposta industrial contém:

1. **Resumo do cenário** — Mostre que você entendeu o problema
2. **Solução proposta** — O que você vai entregar, com especificações técnicas
3. **Resultados esperados** — O que o cliente ganha (economia, produtividade, qualidade)
4. **Investimento** — Valor claro, com condições de pagamento
5. **Prazo de entrega** — Quando começa e quando entrega
6. **Próximo passo** — O que precisa acontecer para fechar

**Critério de saída:** Proposta enviada e recebida pelo decisor

### Etapa 5: Negociação

Na indústria, é raro fechar na primeira proposta. A negociação pode envolver:

- Ajustes técnicos na especificação
- Negociação de preço e condições
- Aprovação por comitê ou diretoria
- Concorrência com outros fornecedores
- Visita à fábrica para validação

O segredo aqui é **manter o ritmo**. A maioria das vendas industriais se perde não por preço, mas por falta de follow-up. O decisor ficou ocupado com a operação, esqueceu de aprovar, e quando você volta a ligar, já fechou com outro.

**Dicas para não perder na negociação:**
- Defina prazos claros para cada etapa da aprovação
- Faça follow-up a cada 3-5 dias úteis
- Entenda as objeções reais (preço? prazo? confiança? política interna?)
- Ofereça referências de clientes similares

**Critério de saída:** Acordo verbal ou pedido de compra

### Etapa 6: Fechamento

O contrato está assinado, o pedido entrou. Mas o funil não acaba aqui. O fechamento inclui:

- Formalização do contrato
- Alinhamento de entrega com a operação
- Kick-off com o time técnico
- Definição de ponto de contato pós-venda

Um bom fechamento é a semente da próxima venda. Cliente bem atendido indica, recompra e amplia escopo.

## Como dimensionar seu funil

Para bater a meta de faturamento, você precisa calcular de trás para frente:

**Exemplo prático:**

| Dado | Valor |
|------|-------|
| Meta mensal de faturamento | R$ 500.000 |
| Ticket médio | R$ 50.000 |
| Vendas necessárias | 10 por mês |
| Taxa de conversão (proposta → venda) | 25% |
| Propostas necessárias | 40 por mês |
| Taxa de conversão (reunião → proposta) | 50% |
| Reuniões necessárias | 80 por mês |
| Taxa de conversão (prospecção → reunião) | 10% |
| **Empresas a prospectar** | **800 por mês** |

Esses números assustam? É por isso que processo importa. Sem funil, você não sabe que precisa prospectar 800 empresas para fechar 10 vendas. E sem saber disso, fica esperando o telefone tocar.

## Ferramentas para gerenciar o funil

Você não precisa de software caro para começar. O importante é ter visibilidade:

| Estágio | Ferramenta mínima | Ferramenta ideal |
|---------|-------------------|-----------------|
| Controle do funil | Planilha bem feita | CRM (HubSpot, Pipedrive) |
| Prospecção | LinkedIn + email manual | Sales Navigator + Lemlist |
| Follow-up | Agenda + lembretes | CRM com automação |
| Propostas | Word/PDF | Ferramenta de propostas (Proposify) |
| Métricas | Planilha | Dashboard do CRM |

A recomendação: comece com CRM gratuito (HubSpot) desde o dia 1. Planilha funciona até 20-30 leads. Depois disso, você vai perder controle.

## Os 5 erros mais comuns no funil industrial

### 1. Não ter etapas definidas
Sem etapas claras, todo lead é "em andamento". Você não sabe se tem 50 oportunidades reais ou 50 contatos frios. O funil vira uma lista de desejos.

### 2. Não qualificar leads
Gastar tempo com lead que não tem orçamento, não tem urgência ou não decide é o maior desperdício do comercial industrial. Qualifique cedo, descarte rápido.

### 3. Proposta sem reunião técnica
Enviar proposta para quem você não entendeu o cenário é jogar no escuro. A taxa de conversão despenca.

### 4. Follow-up fraco
Na indústria, o ciclo é longo. Se você não faz follow-up estruturado, o lead esfria. A maioria das vendas se perde entre a proposta e o fechamento — não por preço, mas por falta de acompanhamento.

### 5. Não medir nada
Sem métricas, você não sabe onde o funil está travando. Pode ser que prospecta bem mas qualifica mal. Ou qualifica bem mas perde na proposta. Sem dados, é achismo.

## Métricas essenciais do funil

| Métrica | O que mostra | Meta saudável |
|---------|-------------|---------------|
| Taxa de conversão por etapa | Onde o funil trava | Varia por setor |
| Ciclo médio de venda | Quanto tempo leva para fechar | Indústria: 30-90 dias |
| Ticket médio | Valor médio por venda | Depende do seu negócio |
| Velocidade do funil | Quantas oportunidades avançam por semana | Crescente |
| Taxa de win/loss | % de propostas que viram venda | Acima de 20% |
| Motivos de perda | Por que leads não fecham | Acompanhar padrões |

Acompanhe essas métricas semanalmente. Se alguma taxa caiu, investigue. O funil conta a história do seu comercial — você só precisa ler.

## Como a Orbius ajuda

Na Orbius, montamos o funil de vendas completo para indústrias B2B: definição de etapas, critérios de passagem, implementação no CRM, scripts de qualificação e dashboard de acompanhamento.

O resultado é visibilidade total do pipeline e previsibilidade de receita.

## Próximos passos

Para se aprofundar em cada etapa do funil:

- Etapas do funil de vendas B2B para indústrias
- Como qualificar leads industriais (MQL vs SQL)
- Como encurtar o ciclo de vendas no setor industrial
- Follow-up B2B: como fazer sem ser inconveniente
- Como aumentar a taxa de conversão de propostas industriais
- Venda consultiva para indústrias: o que é e como aplicar

---

*Quer montar o funil de vendas da sua indústria? Agende um diagnóstico gratuito e descubra onde estão os gargalos do seu comercial.*`,
  },
  {
    slug: "etapas-funil-vendas-b2b",
    titleTag: "Etapas do Funil de Vendas B2B para Indústrias",
    metaDescription: "Conheça as etapas do funil de vendas B2B industrial. Do primeiro contato ao fechamento, com critérios de passagem.",
    h1: "Etapas do Funil de Vendas B2B para Indústrias",
    category: "Funil de Vendas",
    cluster: "funil",
    isPillar: false,
    internalLinks: ["funil-vendas-industrial", "qualificar-leads-industriais", "encurtar-ciclo-vendas-industrial", "prospeccao-b2b-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "qualificar-leads-industriais",
    titleTag: "Como Qualificar Leads Industriais: MQL vs SQL",
    metaDescription: "Aprenda a diferenciar MQL e SQL na indústria B2B. Critérios de qualificação e quando passar o lead para vendas.",
    h1: "Como Qualificar Leads Industriais (MQL vs SQL)",
    category: "Funil de Vendas",
    cluster: "funil",
    isPillar: false,
    internalLinks: ["funil-vendas-industrial", "etapas-funil-vendas-b2b", "encurtar-ciclo-vendas-industrial", "icp-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "encurtar-ciclo-vendas-industrial",
    titleTag: "Como Encurtar o Ciclo de Vendas no Setor Industrial",
    metaDescription: "Estratégias práticas para reduzir o ciclo de vendas B2B na indústria. Qualificação, follow-up e técnicas de fechamento.",
    h1: "Como Encurtar o Ciclo de Vendas no Setor Industrial",
    category: "Funil de Vendas",
    cluster: "funil",
    isPillar: false,
    internalLinks: ["funil-vendas-industrial", "qualificar-leads-industriais", "follow-up-b2b", "crm-ferramentas-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "follow-up-b2b",
    titleTag: "Follow-up B2B: Como Fazer Sem Ser Inconveniente",
    metaDescription: "Técnicas de follow-up B2B para indústrias. Quando, como e quantas vezes acompanhar sem perder o lead.",
    h1: "Follow-up B2B: Como Fazer Sem Ser Inconveniente",
    category: "Funil de Vendas",
    cluster: "funil",
    isPillar: false,
    internalLinks: ["funil-vendas-industrial", "encurtar-ciclo-vendas-industrial", "email-frio-b2b-industrial", "cadencia-prospeccao-b2b"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "taxa-conversao-propostas-industriais",
    titleTag: "Como Aumentar a Taxa de Conversão de Propostas Industriais",
    metaDescription: "Melhore a conversão de propostas comerciais na indústria B2B. Estrutura, apresentação e técnicas de negociação.",
    h1: "Como Aumentar a Taxa de Conversão de Propostas Industriais",
    category: "Funil de Vendas",
    cluster: "funil",
    isPillar: false,
    internalLinks: ["funil-vendas-industrial", "encurtar-ciclo-vendas-industrial", "follow-up-b2b", "metricas-gestao-comercial-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "venda-consultiva-industrias",
    titleTag: "Venda Consultiva para Indústrias: O Que É e Como Aplicar",
    metaDescription: "Entenda o que é venda consultiva e como aplicar na indústria B2B. Técnicas, perguntas e exemplos práticos.",
    h1: "Venda Consultiva para Indústrias: O Que É e Como Aplicar",
    category: "Funil de Vendas",
    cluster: "funil",
    isPillar: false,
    internalLinks: ["funil-vendas-industrial", "qualificar-leads-industriais", "objecoes-vendas-industriais", "marketing-digital-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "objecoes-vendas-industriais",
    titleTag: "Objeções em Vendas Industriais: Como Lidar [Scripts]",
    metaDescription: "As objeções mais comuns em vendas industriais B2B e scripts prontos para contornar cada uma delas.",
    h1: "Como Lidar com Objeções em Vendas Industriais",
    category: "Funil de Vendas",
    cluster: "funil",
    isPillar: false,
    internalLinks: ["funil-vendas-industrial", "venda-consultiva-industrias", "taxa-conversao-propostas-industriais", "cold-call-industrias"],
    date: "",
    published: false,
    content: "",
  },

  // ═══════════════════════════════════════════════════════════════════
  // PILAR 3: Marketing Digital para Indústrias
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "marketing-digital-industrias",
    titleTag: "Marketing Digital para Indústrias: Guia Prático [2026]",
    metaDescription: "Estratégias de marketing digital para indústrias B2B. SEO, conteúdo, Google Ads e geração de leads com exemplos.",
    h1: "Marketing Digital para Indústrias: Guia Prático",
    category: "Marketing",
    cluster: "marketing",
    isPillar: true,
    internalLinks: ["gerar-leads-industrias", "seo-industrias", "marketing-conteudo-industrias", "google-ads-industrias-b2b", "landing-pages-b2b", "inbound-vs-outbound-industrial", "digitalizar-comercial-industria", "prospeccao-b2b-industrias", "funil-vendas-industrial"],
    date: "2026-03-26",
    published: true,
    content: `"A gente já tentou marketing digital. Não funcionou."

Essa frase aparece em praticamente toda conversa que temos com donos de indústria. E quando a gente cava um pouco mais, a história é sempre parecida: contrataram uma agência, rodaram anúncios no Instagram, postaram umas fotos de produto, e depois de seis meses cancelaram porque "não veio nada".

O problema não é que marketing digital não funciona para indústria. O problema é que aplicaram o marketing digital errado.

O marketing que funciona para e-commerce, restaurante, loja de roupa — não funciona para uma indústria que vende equipamento de R$ 200 mil com ciclo de decisão de 4 meses. São mundos diferentes. E tratar igual é jogar dinheiro fora.

Vamos separar o que funciona do que não funciona.

## O que NÃO funciona para indústrias

**Instagram com foto de produto e legenda genérica.** Seu comprador não está scrollando o feed procurando um novo fornecedor de válvulas industriais. Ele está assistindo vídeo de cachorro. Marketing B2B industrial não compete por atenção no feed — compete por confiança quando o comprador já está procurando solução.

**Tráfego pago sem destino certo.** Rodar Google Ads que manda para a home do site é como botar um outdoor na estrada apontando para lugar nenhum. O clique custou R$ 15 e o visitante saiu em 8 segundos porque não encontrou o que procurava. Sem uma [landing page feita para converter](/blog/landing-pages-b2b), o investimento em anúncio vira desperdício.

**Blog com conteúdo que ninguém pesquisa.** "5 curiosidades sobre usinagem" não gera lead. O que gera lead é responder a dúvida que o comprador digita no Google antes de ligar para um fornecedor. Isso exige [estratégia de conteúdo pensada para o funil](/blog/marketing-conteudo-industrias), não posts aleatórios.

**Redes sociais como canal principal.** Para B2B industrial, rede social é vitrine, não é loja. Ela reforça autoridade, mas raramente é o canal onde a venda começa. Quem depende só de rede social está construindo em terreno alugado.

## O que FUNCIONA para indústrias

Agora, o outro lado. O que realmente move o ponteiro.

### Google como canal de aquisição

Quando um engenheiro de manutenção pesquisa "fornecedor de selo mecânico para bomba centrífuga", ele já tem intenção de compra. Esse é o tráfego mais valioso que existe para indústria — gente que já sabe o que precisa e está comparando opções.

Duas formas de capturar:

**SEO (orgânico):** Criar páginas que respondem exatamente o que seu comprador pesquisa. Não precisa ser conteúdo genérico. Precisa ser técnico, específico e útil. Um artigo sobre [como escolher o CRM certo para sua operação industrial](/blog/crm-ferramentas-industrias) pode atrair gestores comerciais que estão reorganizando o processo de vendas — e esses gestores podem virar clientes.

**Google Ads (pago):** Anúncios que aparecem quando alguém pesquisa termos comerciais do seu setor. Funciona muito bem quando tem [landing page dedicada](/blog/landing-pages-b2b), formulário curto e oferta clara (diagnóstico gratuito, orçamento em 24h, catálogo técnico). Para fazer direito, leia o guia de [Google Ads para indústrias B2B](/blog/google-ads-industrias-b2b).

### LinkedIn como canal de relacionamento e prospecção

LinkedIn é onde seu comprador B2B existe profissionalmente. Diferente do Instagram, aqui ele está em modo trabalho. Duas formas de usar:

**Conteúdo de autoridade:** Posts que mostram bastidor da operação, resultados de clientes, opinião sobre o mercado. Não precisa viralizar — precisa que os 500 decisores certos vejam você como referência.

**Prospecção ativa:** Sales Navigator + mensagens personalizadas. Isso conecta com o trabalho de [prospecção B2B](/blog/prospeccao-b2b-industrias) — LinkedIn não é canal isolado, é parte da cadência de outbound.

### Email como canal de nutrição e conversão

O lead pesquisou no Google, baixou seu catálogo técnico, mas não pediu orçamento. O que você faz?

Se a resposta for "nada", você acabou de perder um lead quente.

Email marketing B2B não é newsletter semanal com novidades da empresa. É uma sequência inteligente que educa o lead, mostra cases relevantes e conduz até a conversa comercial. Cada email aproxima o lead da próxima etapa do [funil de vendas](/blog/funil-vendas-industrial).

### Conteúdo técnico como ativo de longo prazo

Um artigo bem feito sobre um problema técnico do seu setor trabalha para você 24 horas por dia, 365 dias por ano. Enquanto o anúncio para de gerar resultado no segundo que você corta o orçamento, o artigo continua ranqueando no Google.

A diferença é que conteúdo industrial precisa ser útil de verdade. O comprador técnico percebe em 10 segundos se o texto foi escrito por quem entende do assunto ou por um estagiário que pesquisou no Google. Detalhamos como fazer isso funcionar no guia de [conteúdo para indústrias](/blog/marketing-conteudo-industrias).

## Inbound, outbound ou os dois?

Essa é a dúvida de todo diretor comercial de indústria. A resposta curta: os dois. Mas em momentos diferentes.

**Se você precisa de resultado em 30-60 dias:** Outbound. [Prospecção ativa](/blog/prospeccao-b2b-industrias), email frio, LinkedIn, telefone. Vai atrás do cliente. É mais trabalhoso, mas gera pipeline rápido.

**Se você quer construir um canal previsível a médio/longo prazo:** Inbound. SEO, conteúdo, Google Ads. Demora 3-6 meses para ganhar tração, mas depois o custo por lead cai consistentemente.

**O cenário ideal:** Outbound sustenta o curto prazo enquanto o inbound amadurece. Depois de 6-12 meses, os dois canais se alimentam — o conteúdo que você criou para SEO serve como material de apoio na cadência de outbound, e os leads de inbound entram direto no [funil](/blog/funil-vendas-industrial) que já está rodando.

Aprofundamos essa análise no artigo sobre [inbound vs outbound para o setor industrial](/blog/inbound-vs-outbound-industrial).

## O erro fatal: marketing sem processo comercial

Aqui está o ponto que nenhuma agência de marketing vai te contar.

Não adianta gerar 100 leads por mês se o comercial não sabe o que fazer com eles. O lead entra, ninguém liga em 24h, não tem cadência de follow-up, não tem CRM organizado. O lead esfria. O marketing olha os números e diz "entregamos 100 leads". O comercial diz "os leads são ruins". E ninguém fecha.

O problema está no meio — na falta de processo entre marketing e vendas.

Marketing digital para indústria só funciona quando existe um [funil de vendas estruturado](/blog/funil-vendas-industrial) para receber esses leads. Qualificação clara, critérios de passagem entre etapas, cadência de follow-up, tudo registrado no CRM. Sem isso, o investimento em marketing é como encher um balde furado.

## Por onde começar

Se sua indústria nunca fez marketing digital de verdade, não tente fazer tudo ao mesmo tempo. A ordem importa:

**Primeiro**, tenha um site que funciona. Não precisa ser bonito — precisa ser claro. O visitante chega e em 5 segundos entende o que você faz, para quem e qual o próximo passo.

**Segundo**, ative Google Ads para os termos mais comerciais do seu setor. Com [landing page dedicada](/blog/landing-pages-b2b) e formulário, você começa a gerar leads em uma semana.

**Terceiro**, comece o [SEO](/blog/seo-industrias). Crie os primeiros artigos respondendo as perguntas mais comuns do seu comprador. Isso leva meses para dar resultado, mas é o investimento mais rentável a longo prazo.

**Quarto**, estruture o LinkedIn do diretor comercial ou do dono. Não é a página da empresa — é o perfil pessoal. B2B é feito entre pessoas.

**Quinto**, e mais importante: garanta que existe processo comercial para receber esses leads. Se ainda não tem, comece pela [prospecção B2B](/blog/prospeccao-b2b-industrias) e pelo [funil de vendas](/blog/funil-vendas-industrial) antes de investir pesado em marketing.

---

*Precisa de ajuda para montar a estratégia digital da sua indústria? A Orbius conecta marketing e vendas para que o investimento realmente vire faturamento. [Agende um diagnóstico gratuito.](/#formulario)*`,
  },
  {
    slug: "gerar-leads-industrias",
    titleTag: "Como Gerar Leads Qualificados para Indústrias B2B",
    metaDescription: "Estratégias comprovadas para gerar leads qualificados para indústrias. Inbound, outbound e canais digitais.",
    h1: "Como Gerar Leads Qualificados para Indústrias",
    category: "Marketing",
    cluster: "marketing",
    isPillar: false,
    internalLinks: ["marketing-digital-industrias", "seo-industrias", "marketing-conteudo-industrias", "prospeccao-b2b-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "seo-industrias",
    titleTag: "SEO para Indústrias: Como Ranquear Palavras-Chave Técnicas",
    metaDescription: "Guia de SEO para indústrias B2B. Como ranquear para palavras-chave técnicas e atrair decisores qualificados.",
    h1: "SEO para Indústrias: Como Ranquear para Palavras-Chave Técnicas",
    category: "Marketing",
    cluster: "marketing",
    isPillar: false,
    internalLinks: ["marketing-digital-industrias", "gerar-leads-industrias", "marketing-conteudo-industrias", "landing-pages-b2b"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "marketing-conteudo-industrias",
    titleTag: "Marketing de Conteúdo para Indústrias: O Que Funciona",
    metaDescription: "Descubra que tipo de conteúdo funciona para indústrias B2B. Formatos, frequência e exemplos que geram leads.",
    h1: "Marketing de Conteúdo para Indústrias: O Que Realmente Funciona",
    category: "Marketing",
    cluster: "marketing",
    isPillar: false,
    internalLinks: ["marketing-digital-industrias", "seo-industrias", "google-ads-industrias-b2b", "funil-vendas-industrial"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "google-ads-industrias-b2b",
    titleTag: "Google Ads para Indústrias B2B: Guia Prático [2026]",
    metaDescription: "Como usar Google Ads para gerar leads industriais B2B. Campanhas, palavras-chave e orçamento para indústrias.",
    h1: "Google Ads para Indústrias B2B: Guia Prático",
    category: "Marketing",
    cluster: "marketing",
    isPillar: false,
    internalLinks: ["marketing-digital-industrias", "gerar-leads-industrias", "landing-pages-b2b", "metricas-gestao-comercial-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "landing-pages-b2b",
    titleTag: "Landing Pages B2B: Como Criar Páginas Que Convertem",
    metaDescription: "Checklist completo para criar landing pages B2B que convertem. Estrutura, copy, CTA e exemplos para indústrias.",
    h1: "Como Criar Landing Pages B2B Que Convertem",
    category: "Marketing",
    cluster: "marketing",
    isPillar: false,
    internalLinks: ["marketing-digital-industrias", "gerar-leads-industrias", "google-ads-industrias-b2b", "seo-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "inbound-vs-outbound-industrial",
    titleTag: "Inbound vs Outbound para Indústrias: Qual Escolher?",
    metaDescription: "Compare inbound e outbound marketing para indústrias B2B. Vantagens, desvantagens e quando usar cada um.",
    h1: "Inbound vs Outbound para o Setor Industrial: Qual Escolher?",
    category: "Marketing",
    cluster: "marketing",
    isPillar: false,
    internalLinks: ["marketing-digital-industrias", "prospeccao-b2b-industrias", "gerar-leads-industrias", "outbound-industrial"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "digitalizar-comercial-industria",
    titleTag: "Como Digitalizar o Comercial de uma Indústria B2B",
    metaDescription: "Passo a passo para digitalizar o setor comercial da sua indústria. Ferramentas, processos e mudança de cultura.",
    h1: "Como Digitalizar o Comercial de uma Indústria",
    category: "Marketing",
    cluster: "marketing",
    isPillar: false,
    internalLinks: ["marketing-digital-industrias", "inbound-vs-outbound-industrial", "crm-ferramentas-industrias", "funil-vendas-industrial"],
    date: "",
    published: false,
    content: "",
  },

  // ═══════════════════════════════════════════════════════════════════
  // PILAR 4: CRM e Ferramentas Comerciais
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "crm-ferramentas-industrias",
    titleTag: "CRM para Indústrias: Qual Escolher e Como Implementar",
    metaDescription: "Guia completo de CRM para indústrias B2B. Comparativo de ferramentas, implementação e automação comercial.",
    h1: "CRM para Indústrias: Qual Escolher e Como Implementar",
    category: "CRM e Ferramentas",
    cluster: "crm",
    isPillar: true,
    internalLinks: ["comparativo-crm-industrias", "implementar-crm-industria", "automacao-comercial-industrias", "integrar-crm-marketing-industria", "inside-sales-industrias", "ferramentas-prospeccao-b2b", "prospeccao-b2b-industrias", "metricas-gestao-comercial-industria"],
    date: "2026-03-26",
    published: true,
    content: `A Metalcorte é uma indústria fictícia, mas a história dela é real. Acontece em dezenas de fábricas brasileiras todo mês.

A Metalcorte fabrica peças usinadas sob encomenda. Faturamento de R$ 8 milhões por ano, 45 funcionários, dois vendedores. O Seu Carlos fundou a empresa há 18 anos. Produto excelente, clientes fiéis, reputação sólida no mercado.

O comercial funciona assim: o Ricardo, vendedor mais antigo, tem tudo na cabeça. Ele sabe quem pediu orçamento semana passada, quem está esperando aprovação interna, quem compra todo trimestre. Quando o Seu Carlos pergunta "como estão as vendas?", o Ricardo responde "estão andando". E isso basta — até o dia que não basta mais.

## O mês em que tudo desandou

Março. O Ricardo pegou Covid e ficou 15 dias fora. O telefone dele tocava e ninguém sabia quem era. Tinha um cliente que estava prestes a fechar um pedido de R$ 280 mil — mas ninguém sabia disso. O email ficou sem resposta por 9 dias. Quando o Ricardo voltou, o cliente já tinha fechado com outro fornecedor.

O Seu Carlos perguntou: "Cadê o controle de quem está negociando o quê?"

Resposta: uma planilha desatualizada de 2019 e o WhatsApp do Ricardo.

Aquele pedido perdido doeu. Mas o que doeu mais foi perceber que não era a primeira vez — era só a primeira vez que ficou óbvio.

## A planilha que virou CRM (e não funcionou)

Primeira reação do Seu Carlos: montar uma planilha decente. Colunas para empresa, contato, valor estimado, etapa, próximo passo. O Ricardo preencheu durante duas semanas. O outro vendedor preencheu por três dias. Depois, a planilha morreu.

Por quê? Porque planilha não avisa. Não lembra que você tem follow-up para fazer hoje. Não mostra que aquele lead está parado há 20 dias sem contato. Não soma automaticamente quanto tem no pipeline. Exige disciplina diária de quem já tem o dia cheio de ligação, visita e proposta.

Planilha funciona para controle simples com poucos leads. Mas o momento que a Metalcorte precisava de controle — com dois vendedores, 40+ oportunidades abertas ao mesmo tempo e ciclo de vendas de 60 dias — planilha não dá conta.

## O que é um CRM, afinal

CRM significa Customer Relationship Management. Na prática, é um software onde você registra cada oportunidade de venda e acompanha ela do primeiro contato ao fechamento.

Mas o CRM não é só uma planilha glorificada. A diferença real:

**Com planilha:** Você depende de alguém lembrar de atualizar. Os dados ficam velhos rápido. Não tem alerta, não tem automação, não tem visão de pipeline. É um registro passivo.

**Com CRM:** Cada oportunidade tem um histórico completo — emails trocados, ligações feitas, propostas enviadas. O sistema avisa quando tem follow-up atrasado. O gestor abre o dashboard e vê em tempo real: R$ 1,2 milhão em pipeline, 8 propostas pendentes, 3 deals parados há mais de 15 dias. É um sistema ativo.

Para uma indústria que está [montando o funil de vendas](/blog/funil-vendas-industrial), o CRM é onde o funil vive. Sem ele, o funil existe no papel mas não na prática.

## A escolha da Metalcorte

O Seu Carlos pesquisou. Pediu indicação. Viu vídeo no YouTube. Ficou confuso com tanta opção. HubSpot, Pipedrive, RD Station, Ploomes, Salesforce, Bitrix...

O erro que quase cometeu: escolher pela ferramenta mais completa. O Salesforce tem 500 funcionalidades. A Metalcorte precisa de 12. Pagar R$ 800/mês por vendedor para usar 2% da ferramenta não faz sentido.

O que deveria guiar a escolha:

**Tamanho da operação.** Dois vendedores não precisam de Salesforce. Precisam de algo simples que eles realmente vão usar. A ferramenta que o vendedor não usa é a mais cara do mercado — porque custou e não entregou nada.

**Facilidade de uso.** O Ricardo tem 52 anos e não é do tipo que aprende software rápido. Se a ferramenta for complicada, ele vai voltar para o WhatsApp na primeira semana. O CRM precisa ser mais fácil que a planilha, não mais difícil.

**Integrações.** O CRM conversa com o email? Com o WhatsApp? Com as [ferramentas de prospecção](/blog/ferramentas-prospeccao-b2b) que você pode usar no futuro? Uma ferramenta isolada vira mais uma ilha de informação.

**Custo real.** Não é só a mensalidade. É o tempo de implementação, o treinamento, a migração de dados. Um CRM "grátis" que leva 3 meses para configurar pode custar mais que um pago que roda em uma semana.

Para quem quer ver a comparação detalhada entre as opções do mercado brasileiro, montamos um [comparativo completo de CRMs para indústrias](/blog/comparativo-crm-industrias).

## A implementação que funciona (e a que não funciona)

A Metalcorte escolheu o Pipedrive. Simples, visual, R$ 60/mês por vendedor. Boa escolha. Mas a escolha da ferramenta é 20% do trabalho. Os outros 80% são implementação.

### O que a maioria faz (e dá errado)

Contrata a ferramenta. Convida os vendedores. Diz "comecem a usar". Resultado: ninguém sabe o que registrar, cada um usa de um jeito, em dois meses o CRM está tão bagunçado que ninguém confia nos dados.

### O que a Metalcorte fez (e funcionou)

**Primeiro, definiu as etapas do funil no CRM.** Não inventou — usou as etapas que já existiam na prática: Prospecção → Qualificação → Reunião técnica → Proposta → Negociação → Fechamento. Cada etapa com critério claro de entrada. Isso conecta diretamente com o [funil de vendas industrial](/blog/funil-vendas-industrial) que toda indústria deveria ter.

**Segundo, criou campos obrigatórios mínimos.** Não 30 campos. Cinco: empresa, contato, valor estimado, próximo passo e data do próximo passo. Se o vendedor não preenche a data do próximo passo, o deal fica com alerta vermelho.

**Terceiro, treinou em cenário real.** Não fez treinamento genérico. Pegou 10 oportunidades reais do Ricardo e cadastrou junto com ele. "Esse lead aqui, a Ferramentaria São Paulo, está em que etapa? Proposta enviada? Qual o valor? Quando é o follow-up?" Em uma hora, o Ricardo entendeu.

**Quarto, fez reunião semanal de pipeline.** Toda segunda-feira, 30 minutos. Seu Carlos e os dois vendedores olham o dashboard: quantas oportunidades em cada etapa, quanto vale o pipeline, quais deals estão parados. Se o vendedor não atualizou, fica na cara. A reunião cria o hábito.

Detalhamos todo esse processo no artigo sobre [como implementar um CRM na indústria sem travar a equipe](/blog/implementar-crm-industria).

## Três meses depois

O pipeline da Metalcorte em março (quando o Ricardo ficou doente): invisível.

O pipeline em junho (três meses com CRM):

- 47 oportunidades ativas
- R$ 2,1 milhões em pipeline
- 12 deals em fase de proposta/negociação
- Tempo médio de follow-up: 3 dias (antes era "quando lembrava")
- Zero oportunidades perdidas por falta de acompanhamento

Mas o número mais importante: o Seu Carlos agora sabe, toda segunda-feira, quanto deve faturar nos próximos 60 dias. Não pergunta mais "como estão as vendas". Ele abre o dashboard e vê.

E quando o Ricardo tirou férias em julho? O outro vendedor assumiu as oportunidades abertas sem perder uma. Tudo registrado, tudo com histórico. O cliente nem percebeu a troca.

## O CRM como base para escalar

O CRM sozinho não vende. Ele organiza. Mas essa organização é o que permite escalar.

Quer [montar uma operação de inside sales](/blog/inside-sales-industrias)? Precisa de CRM. Quer medir [indicadores comerciais](/blog/metricas-gestao-comercial-industria) de verdade? Precisa de CRM. Quer [automatizar partes do processo](/blog/automacao-comercial-industrias)? Precisa de CRM. Quer que o [marketing e vendas conversem](/blog/integrar-crm-marketing-industria)? Precisa de CRM.

Sem CRM, cada melhoria que você tenta fazer no comercial é construída em areia movediça. Com CRM, você tem fundação.

## E se a sua indústria é a Metalcorte de março?

Se o comercial da sua indústria depende da memória dos vendedores, se você não sabe quanto tem em pipeline, se o follow-up acontece "quando dá" — você está onde a Metalcorte estava.

A boa notícia: sair desse cenário não é difícil. Não precisa de projeto de 6 meses. Não precisa de software de R$ 5 mil/mês. Precisa de ferramenta certa, implementação enxuta e disciplina nas primeiras 4 semanas.

O primeiro passo é ter um [processo de prospecção](/blog/prospeccao-b2b-industrias) definido. O segundo é colocar esse processo dentro de um CRM. O terceiro é medir — e aí a história muda.

---

*A Orbius implementa CRM e processo comercial em indústrias B2B. Se o cenário da Metalcorte pareceu familiar, [agende um diagnóstico gratuito](/#formulario) e descubra quanto pipeline você está deixando escapar.*`,
  },
  {
    slug: "comparativo-crm-industrias",
    titleTag: "Comparativo de CRMs para Indústrias Brasileiras [2026]",
    metaDescription: "Compare os melhores CRMs para indústrias B2B no Brasil. HubSpot, Pipedrive, RD Station CRM e mais.",
    h1: "Comparativo de CRMs para Indústrias Brasileiras",
    category: "CRM e Ferramentas",
    cluster: "crm",
    isPillar: false,
    internalLinks: ["crm-ferramentas-industrias", "implementar-crm-industria", "automacao-comercial-industrias", "metricas-gestao-comercial-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "implementar-crm-industria",
    titleTag: "Como Implementar um CRM na Indústria Sem Travar a Equipe",
    metaDescription: "Passo a passo para implementar CRM na indústria B2B. Migração, treinamento e adoção sem perder produtividade.",
    h1: "Como Implementar um CRM na Indústria Sem Travar a Equipe",
    category: "CRM e Ferramentas",
    cluster: "crm",
    isPillar: false,
    internalLinks: ["crm-ferramentas-industrias", "comparativo-crm-industrias", "automacao-comercial-industrias", "inside-sales-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "automacao-comercial-industrias",
    titleTag: "Automação Comercial para Indústrias: Ferramentas e Processos",
    metaDescription: "Como automatizar o processo comercial da sua indústria B2B. Ferramentas, workflows e integrações práticas.",
    h1: "Automação Comercial para Indústrias: Ferramentas e Processos",
    category: "CRM e Ferramentas",
    cluster: "crm",
    isPillar: false,
    internalLinks: ["crm-ferramentas-industrias", "comparativo-crm-industrias", "implementar-crm-industria", "cadencia-prospeccao-b2b"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "integrar-crm-marketing-industria",
    titleTag: "Como Integrar CRM com Marketing para Indústrias B2B",
    metaDescription: "Integre seu CRM com ferramentas de marketing para unificar dados e acelerar vendas na indústria B2B.",
    h1: "Como Integrar CRM com Marketing para Indústrias",
    category: "CRM e Ferramentas",
    cluster: "crm",
    isPillar: false,
    internalLinks: ["crm-ferramentas-industrias", "automacao-comercial-industrias", "marketing-digital-industrias", "gerar-leads-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "inside-sales-industrias",
    titleTag: "Inside Sales para Indústrias: Como Montar a Operação",
    metaDescription: "Monte uma operação de inside sales para sua indústria B2B. Estrutura, ferramentas, métricas e rotina diária.",
    h1: "Inside Sales para Indústrias: Como Montar a Operação do Zero",
    category: "CRM e Ferramentas",
    cluster: "crm",
    isPillar: false,
    internalLinks: ["crm-ferramentas-industrias", "automacao-comercial-industrias", "outbound-industrial", "prospeccao-b2b-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "ferramentas-prospeccao-b2b",
    titleTag: "Ferramentas de Prospecção B2B para o Mercado Industrial",
    metaDescription: "As melhores ferramentas de prospecção B2B para indústrias. Apollo, LinkedIn Sales Navigator, Lemlist e mais.",
    h1: "Ferramentas de Prospecção B2B para o Mercado Industrial",
    category: "CRM e Ferramentas",
    cluster: "crm",
    isPillar: false,
    internalLinks: ["crm-ferramentas-industrias", "automacao-comercial-industrias", "inside-sales-industrias", "linkedin-vendas-industria"],
    date: "",
    published: false,
    content: "",
  },

  // ═══════════════════════════════════════════════════════════════════
  // PILAR 5: Métricas e Gestão Comercial
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "metricas-gestao-comercial-industria",
    titleTag: "Indicadores Comerciais para Indústrias B2B [2026]",
    metaDescription: "Os indicadores comerciais que toda indústria B2B deve acompanhar. KPIs, dashboard e metas com exemplos.",
    h1: "Indicadores Comerciais Que Toda Indústria Deve Acompanhar",
    category: "Métricas",
    cluster: "metricas",
    isPillar: true,
    internalLinks: ["roi-marketing-b2b-industrial", "dashboard-comercial-industrias", "previsao-receita-pipeline-industrial", "taxa-conversao-b2b-benchmarks", "diagnosticar-gargalos-funil", "funil-vendas-industrial", "crm-ferramentas-industrias"],
    date: "2026-03-26",
    published: true,
    content: `Abre o dashboard da sua indústria agora. O que você vê?

Se a resposta for "não tenho dashboard comercial" — esse artigo é para você.

Se a resposta for "tenho, mas só olho o faturamento do mês" — esse artigo também é para você.

Faturamento é resultado. E quando você só olha resultado, já é tarde para agir. É como dirigir olhando só pelo retrovisor. Os indicadores comerciais existem para mostrar o que vai acontecer nas próximas semanas — não o que já aconteceu.

Vamos montar esse painel juntos. Imagine que estamos abrindo o dashboard ideal de uma indústria B2B. Tela dividida em blocos. Cada bloco conta uma parte da história do comercial.

## Bloco 1: O pipeline (o quanto pode virar venda)

Esse é o número mais importante que a maioria das indústrias não acompanha.

**Pipeline total em R$:** a soma de todas as oportunidades abertas no [funil de vendas](/blog/funil-vendas-industrial), ponderada pela etapa. Nem tudo que está no funil vai fechar — então o pipeline ponderado desconta isso.

Como calcular: cada etapa do funil tem uma probabilidade histórica de conversão.

- Prospecção: 10%
- Qualificação: 25%
- Reunião técnica: 40%
- Proposta enviada: 60%
- Negociação: 80%

Se você tem R$ 500 mil em propostas enviadas, o pipeline ponderado dessa etapa é R$ 300 mil (60%). Some todas as etapas e você tem uma previsão realista.

**Por que isso importa:** Se a meta mensal é R$ 400 mil e o pipeline ponderado está em R$ 250 mil, você sabe — hoje, não no fim do mês — que vai faltar. Tempo de reagir: agora. Detalhamos a mecânica completa no artigo sobre [previsão de receita com pipeline](/blog/previsao-receita-pipeline-industrial).

**Sinal de alerta:** Pipeline ponderado menor que 2x a meta mensal. Se sua meta é R$ 400 mil, você precisa de pelo menos R$ 800 mil em pipeline bruto para ter margem de segurança.

## Bloco 2: As taxas de conversão (onde o funil trava)

Olhar o pipeline sem olhar as taxas de conversão é como olhar o tanque de combustível sem olhar se tem furo.

Cada passagem de etapa tem uma taxa:

- **Prospecção → Qualificação:** de todas as empresas que você contatou, quantas avançaram para uma conversa real?
- **Qualificação → Reunião:** dos que conversaram, quantos agendaram uma reunião técnica?
- **Reunião → Proposta:** dos que tiveram reunião, quantos receberam proposta?
- **Proposta → Fechamento:** das propostas enviadas, quantas viraram venda?

Quando uma taxa cai, você encontrou o gargalo. E gargalos diferentes pedem soluções diferentes:

**Taxa de prospecção baixa (menos de 5% de resposta):** O problema está na abordagem. O email está genérico, a mensagem no LinkedIn não está personalizada, o ICP está errado. Volte ao [processo de prospecção](/blog/prospeccao-b2b-industrias) e revise.

**Taxa de reunião→proposta baixa:** O vendedor não está entendendo o cenário do cliente. Está apresentando produto em vez de entender problema. Treinamento em venda consultiva resolve.

**Taxa de proposta→fechamento baixa (menos de 20%):** Ou as propostas não são competitivas, ou o follow-up está fraco, ou o vendedor está enviando proposta para quem não deveria (lead mal qualificado).

Para benchmarks detalhados por setor, veja o artigo sobre [taxas de conversão B2B](/blog/taxa-conversao-b2b-benchmarks).

## Bloco 3: A velocidade (quanto tempo leva para fechar)

Ciclo de vendas é o tempo médio entre o primeiro contato e a assinatura do contrato.

Na indústria B2B brasileira, o ciclo típico varia de 30 a 120 dias dependendo do ticket. Peça usinada sob encomenda de R$ 20 mil? 30-45 dias. Linha de produção de R$ 500 mil? 90-180 dias.

**O que acompanhar:**

**Ciclo médio geral:** Está subindo ou descendo? Se está subindo mês a mês, algo está travando. Pode ser processo interno do cliente, pode ser seu follow-up fraco, pode ser proposta chegando tarde.

**Ciclo por etapa:** Quanto tempo o deal fica em cada etapa do funil? Se deals ficam 25 dias em "proposta enviada", o problema está claro — o cliente recebe e ninguém faz follow-up estruturado.

**Deals parados:** Quantas oportunidades não tiveram nenhuma atividade nos últimos 15 dias? Esse é o indicador mais acionável do dashboard. Deal parado é deal morrendo. Se o [CRM](/blog/crm-ferramentas-industrias) não mostra isso automaticamente, você precisa de um que mostre.

## Bloco 4: A atividade (o esforço que gera resultado)

Os indicadores anteriores mostram resultado. Os de atividade mostram esforço. E sem esforço consistente, resultado não vem.

**Empresas prospectadas por semana:** Quantos novos contatos o vendedor está fazendo? Se a resposta for "não sei", o problema começa aqui. Sem prospecção constante, o pipeline seca em 60-90 dias.

**Reuniões realizadas por semana:** Prospecção vira reunião? Se o vendedor prospecta 50 empresas e faz 1 reunião, a abordagem está errada. Se prospecta 50 e faz 8, a máquina está funcionando.

**Propostas enviadas por semana:** Reunião vira proposta? Se não, o vendedor está tendo reuniões improdutivas — ou está demorando demais para montar a proposta.

**Follow-ups realizados:** Dos deals abertos, quantos receberam contato esta semana? Esse número deveria ser próximo de 100%. Deal aberto sem contato por mais de 5 dias úteis é negligência comercial.

Não é microgerenciamento. É visibilidade. O vendedor que sabe que esses números são acompanhados naturalmente mantém o ritmo. E o gestor que vê esses números consegue ajudar antes do resultado piorar.

## Bloco 5: O resultado (o que já aconteceu)

Agora sim, os números que todo mundo olha:

**Faturamento do mês:** Quanto fechou. Importante, mas é retrovisor.

**Ticket médio:** O valor médio por venda fechada. Se está caindo, pode significar que o vendedor está dando desconto demais ou que o mix de clientes mudou.

**CAC (Custo de Aquisição de Cliente):** Quanto custou para trazer cada novo cliente. Some todo o investimento em vendas e marketing e divida pelo número de clientes novos. Se o CAC está subindo, algo na eficiência está piorando. Aprofundamos esse cálculo no artigo sobre [ROI de marketing B2B](/blog/roi-marketing-b2b-industrial).

**Win rate:** Das oportunidades que chegaram em proposta, qual percentual virou venda? E mais importante: **por que as outras não fecharam?**

## Bloco 6: O diagnóstico (por que estamos perdendo)

Esse bloco é o mais ignorado e o mais valioso.

Toda oportunidade perdida deveria ter um motivo registrado no [CRM](/blog/crm-ferramentas-industrias). Depois de 3 meses, você tem dados suficientes para ver padrões:

- "Preço alto" aparece em 40% das perdas? Revise o posicionamento ou a qualificação.
- "Sem retorno do cliente" em 35%? O follow-up está fraco.
- "Fechou com concorrente" em 25%? Mapeie quem está ganhando e por quê.

Esses padrões revelam onde investir energia. Se 40% das perdas são por preço e você está gastando tempo treinando cold call, está resolvendo o problema errado.

Montamos um framework completo para isso no artigo sobre [como diagnosticar gargalos no funil](/blog/diagnosticar-gargalos-funil).

## Frequência: quando olhar cada número

Nem todo indicador precisa de atenção diária. A cadência certa:

**Diário (pelo vendedor):** Follow-ups do dia, deals parados, atividades pendentes. Isso é rotina no [CRM](/blog/crm-ferramentas-industrias) — não precisa de dashboard, precisa de disciplina.

**Semanal (reunião de pipeline):** Pipeline total, deals por etapa, taxas de conversão, atividades realizadas. 30 minutos toda segunda-feira. É o ritual mais importante do comercial.

**Mensal (revisão com a diretoria):** Faturamento, CAC, ticket médio, win rate, motivos de perda, tendências. É aqui que se toma decisão: contratar, investir em marketing, mudar estratégia.

**Trimestral (revisão estratégica):** Metas batem com pipeline? O ciclo de vendas está saudável? Os canais de [marketing](/blog/marketing-digital-industrias) estão entregando leads qualificados? O ICP precisa ser ajustado?

## O dashboard mínimo viável

Não precisa começar com tudo. Se você não mede nada hoje, comece com cinco números:

1. **Pipeline total em R$**
2. **Número de oportunidades abertas**
3. **Deals parados há mais de 15 dias**
4. **Propostas enviadas esta semana**
5. **Win rate do mês**

Esses cinco números, acompanhados toda semana, já mudam completamente a visibilidade do comercial. O [CRM](/blog/crm-ferramentas-industrias) gera isso automaticamente — não precisa montar planilha.

Para quem quer o dashboard completo com todos os painéis, detalhamos no artigo [dashboard comercial para indústrias](/blog/dashboard-comercial-industrias).

## A diferença entre saber e agir

Métricas não valem nada se ninguém age sobre elas. O dashboard é um mapa, não um GPS. Ele mostra onde você está, mas a decisão de mudar de rota é sua.

Se o pipeline está baixo, a ação é intensificar [prospecção](/blog/prospeccao-b2b-industrias). Se a taxa de conversão caiu, a ação é investigar o gargalo. Se os deals estão parados, a ação é ligar hoje.

A indústria que mede certo e age rápido cresce de forma previsível. A que não mede fica refém da sorte — e sorte não escala.

---

*Quer implementar um dashboard comercial na sua indústria? A Orbius monta o painel, configura no CRM e treina a equipe para usar. [Agende o diagnóstico gratuito.](/#formulario)*`,
  },
  {
    slug: "roi-marketing-b2b-industrial",
    titleTag: "Como Medir o ROI do Marketing B2B Industrial",
    metaDescription: "Aprenda a calcular o ROI das suas campanhas de marketing B2B industrial. Fórmulas, ferramentas e benchmarks.",
    h1: "Como Medir o ROI do Marketing B2B Industrial",
    category: "Métricas",
    cluster: "metricas",
    isPillar: false,
    internalLinks: ["metricas-gestao-comercial-industria", "dashboard-comercial-industrias", "google-ads-industrias-b2b", "marketing-digital-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "dashboard-comercial-industrias",
    titleTag: "Dashboard Comercial para Indústrias: O Que Monitorar",
    metaDescription: "Monte um dashboard comercial para sua indústria B2B. Métricas essenciais, ferramentas e modelos prontos.",
    h1: "Dashboard Comercial para Indústrias: O Que Monitorar",
    category: "Métricas",
    cluster: "metricas",
    isPillar: false,
    internalLinks: ["metricas-gestao-comercial-industria", "roi-marketing-b2b-industrial", "previsao-receita-pipeline-industrial", "crm-ferramentas-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "previsao-receita-pipeline-industrial",
    titleTag: "Como Prever Receita com Pipeline de Vendas Industrial",
    metaDescription: "Técnicas de previsão de receita usando pipeline de vendas B2B. Modelos, probabilidades e ferramentas para indústrias.",
    h1: "Como Prever Receita com Pipeline de Vendas Industrial",
    category: "Métricas",
    cluster: "metricas",
    isPillar: false,
    internalLinks: ["metricas-gestao-comercial-industria", "dashboard-comercial-industrias", "taxa-conversao-b2b-benchmarks", "funil-vendas-industrial"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "taxa-conversao-b2b-benchmarks",
    titleTag: "Taxa de Conversão B2B: Benchmarks para Indústrias [2026]",
    metaDescription: "Benchmarks de taxa de conversão B2B para indústrias. Compare seus números com o mercado e identifique melhorias.",
    h1: "Taxa de Conversão B2B: Benchmarks para Indústrias",
    category: "Métricas",
    cluster: "metricas",
    isPillar: false,
    internalLinks: ["metricas-gestao-comercial-industria", "previsao-receita-pipeline-industrial", "taxa-conversao-propostas-industriais", "encurtar-ciclo-vendas-industrial"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "diagnosticar-gargalos-funil",
    titleTag: "Como Diagnosticar Gargalos no Funil de Vendas Industrial",
    metaDescription: "Identifique onde seu funil de vendas industrial está travando. Diagnóstico prático com dados e soluções.",
    h1: "Como Diagnosticar Gargalos no Funil Industrial",
    category: "Métricas",
    cluster: "metricas",
    isPillar: false,
    internalLinks: ["metricas-gestao-comercial-industria", "taxa-conversao-b2b-benchmarks", "etapas-funil-vendas-b2b", "funil-vendas-industrial"],
    date: "",
    published: false,
    content: "",
  },

  // ═══════════════════════════════════════════════════════════════════
  // PILAR 6: Equipe Comercial Industrial
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "equipe-comercial-industria",
    titleTag: "Como Estruturar a Equipe Comercial de uma Indústria B2B",
    metaDescription: "Guia para montar e estruturar a equipe comercial da sua indústria. Cargos, treinamento e gestão de vendedores.",
    h1: "Como Estruturar a Equipe Comercial de uma Indústria",
    category: "Equipe Comercial",
    cluster: "equipe",
    isPillar: true,
    internalLinks: ["treinar-equipe-venda-consultiva", "vendedor-interno-vs-externo", "montar-time-vendas-industria", "comissionamento-vendedores-industriais", "cultura-vendas-industria", "prospeccao-b2b-industrias", "metricas-gestao-comercial-industria"],
    date: "2026-03-26",
    published: true,
    content: `Toda semana converso com donos de indústrias que têm a mesma dúvida sobre o time comercial. As perguntas se repetem com uma precisão impressionante. Então resolvi juntar as mais comuns e responder cada uma de forma direta.

## "Tenho só um vendedor. É hora de contratar o segundo?"

Depende. Não do faturamento, mas da capacidade.

Se o seu vendedor atual está com o pipeline cheio, faz [prospecção](/blog/prospeccao-b2b-industrias) toda semana, cuida do follow-up e ainda assim não dá conta de atender todos os leads — sim, é hora.

Mas se o pipeline dele está meio vazio e mesmo assim ele parece ocupado, o problema não é falta de gente. É falta de processo. Antes de contratar, responda: o vendedor atual tem cadência de prospecção definida? Tem [CRM](/blog/crm-ferramentas-industrias) atualizado? Sabe quantas oportunidades precisa abrir por semana para bater a meta?

Se a resposta for não, contratar outro vendedor vai duplicar o caos, não o resultado. Primeiro processo, depois gente. Sempre nessa ordem.

Para o passo a passo completo de como fazer essa primeira contratação, leia o artigo sobre [montar o primeiro time de vendas](/blog/montar-time-vendas-industria).

## "Devo contratar vendedor interno ou representante externo?"

Essa é a pergunta de um milhão. E a resposta mudou muito nos últimos anos.

**Representante externo (rep comercial):** Já tem carteira, já conhece o mercado, já tem relacionamento. Parece perfeito. O problema? Ele vende para 5 fábricas ao mesmo tempo. Sua indústria é uma das cinco. Se a comissão do concorrente é melhor, adivinha quem ele prioriza.

Além disso, o representante não segue seu processo. Ele tem o processo dele. Não usa seu CRM, não faz report semanal, não segue a cadência que você definiu. O relacionamento com o cliente é dele, não da sua empresa. Se ele sai, o cliente vai junto.

**Vendedor interno (CLT ou PJ dedicado):** Custa mais fixo. Precisa de treinamento. Leva meses para performar. Mas segue o processo da empresa, registra tudo no [CRM](/blog/crm-ferramentas-industrias), e o relacionamento com o cliente fica na casa.

**A recomendação para a maioria das indústrias:** Comece com inside sales (vendedor interno que prospecta e vende por telefone, email e videoconferência). Quando o volume justificar, adicione um representante externo para regiões específicas — mas com processo definido e CRM obrigatório.

Aprofundamos essa análise com prós e contras detalhados no artigo sobre [vendedor interno vs externo na indústria](/blog/vendedor-interno-vs-externo).

## "Meu vendedor é bom tecnicamente, mas não prospecta. O que faço?"

Esse é o perfil clássico do vendedor industrial: entende o produto como ninguém, faz apresentação técnica impecável, mas não liga para lead novo. Espera o telefone tocar.

O erro é achar que ele vai mudar sozinho. Não vai. Prospecção é habilidade diferente de venda técnica. Algumas opções:

**Opção 1 — Divida as funções.** Um SDR (pré-vendedor) faz a prospecção e agenda reunião. O vendedor técnico entra na reunião qualificada. Funciona muito bem, mas exige volume para justificar o SDR.

**Opção 2 — Bloco de prospecção obrigatório.** Reserve 2 horas por dia (de manhã, inegociável) só para prospecção. Com cadência definida, scripts prontos e [métricas semanais](/blog/metricas-gestao-comercial-industria). O vendedor técnico pode aprender a prospectar — mas precisa de estrutura, não de motivação.

**Opção 3 — Terceirize a prospecção.** Uma consultoria gera reuniões qualificadas e entrega para o vendedor fechar. Ele faz o que sabe fazer de melhor. É o modelo que mais vemos funcionar em indústrias com 1-3 vendedores.

## "Quanto pagar de comissão?"

Não tem resposta universal, mas tem princípios que funcionam na indústria:

**Fixo + variável é obrigatório.** 100% comissão não funciona para vendedor CLT de indústria — o ciclo de vendas é longo demais. Nos primeiros 3-4 meses ele não fecha nada e desiste. 100% fixo também não funciona — não tem incentivo para buscar resultado.

**A proporção depende do ciclo.** Quanto mais longo o ciclo de vendas, maior deve ser o fixo proporcional.

- Ciclo curto (até 30 dias): 40% fixo / 60% variável
- Ciclo médio (30-90 dias): 60% fixo / 40% variável
- Ciclo longo (90+ dias): 70% fixo / 30% variável

**Comissione sobre margem, não sobre faturamento.** Se o vendedor dá 15% de desconto para fechar, a comissão dele deve sentir esse desconto. Caso contrário, ele vai dar desconto sempre — e a margem da fábrica que paga.

**Tenha um acelerador.** Acima de 100% da meta, a comissão sobe. 110% da meta? Comissão dobra no que exceder. Isso premia quem performa acima e cria incentivo real.

Os modelos mais usados na indústria brasileira estão detalhados no artigo sobre [comissionamento para vendedores industriais](/blog/comissionamento-vendedores-industriais).

## "Contratei e não deu certo. O que fiz de errado?"

Quase sempre, um desses três:

**1. Contratou pelo currículo, não pelo perfil.** Na indústria, todo mundo quer o vendedor que "já tem carteira no setor". Faz sentido, mas carteira sem processo é o mesmo problema que você já tem. Às vezes o vendedor que vem de outro setor mas tem disciplina de prospecção entrega mais que o veterano que vive de indicação.

**2. Não deu onboarding.** O vendedor entrou e ouviu "faz como o Ricardo faz". Sem script, sem cadência, sem meta clara, sem treinamento de produto estruturado. Ficou perdido 3 meses e saiu. A culpa não é dele — é da falta de processo. Aprenda como treinar certo no artigo sobre [treinamento para venda consultiva](/blog/treinar-equipe-venda-consultiva).

**3. Não mediu cedo o suficiente.** Se depois de 60 dias o vendedor novo não está abrindo pipeline (mesmo que não tenha fechado nada ainda), precisa intervir. Olhe as [métricas de atividade](/blog/metricas-gestao-comercial-industria): quantas empresas prospectou, quantas reuniões agendou, quantas propostas mandou. Se os números de atividade estão baixos, o problema é esforço ou método — e dá para corrigir. Se os números são altos mas não convertem, o problema é qualidade — e o treinamento resolve.

## "Como faço meu time vender mais sem contratar?"

Três alavancas:

**Alavanca 1 — Aumente a taxa de conversão.** Se o vendedor fecha 20% das propostas e você consegue subir para 30%, ele "vendeu 50% a mais" sem prospectar uma empresa a mais. Como? Melhor qualificação (só manda proposta para quem realmente vai comprar), follow-up mais apertado, proposta mais personalizada.

**Alavanca 2 — Aumente o ticket médio.** Upsell e cross-sell na hora da proposta. "Você está levando a linha de usinagem. Quer incluir o contrato de manutenção preventiva?" Se 30% aceitam, o ticket médio sobe sem esforço adicional de prospecção.

**Alavanca 3 — Diminua o ciclo de vendas.** Se o ciclo médio cai de 75 para 50 dias, cada vendedor fecha mais negócios por trimestre. Como encurtar? Qualificação mais rígida no início (não perde tempo com lead frio), proposta mais rápida (não leva 2 semanas para montar), follow-up no ritmo certo (a cada 3-5 dias, não a cada 15).

## "Preciso de um gerente comercial?"

Se você tem até 3 vendedores e participa das decisões comerciais — não. Você é o gerente. Invista em [CRM](/blog/crm-ferramentas-industrias) e reunião semanal de pipeline. Isso dá a visibilidade que um gerente daria.

Se você tem 4+ vendedores e não quer (ou não pode) participar do dia a dia comercial — sim. Mas cuidado: não promova o melhor vendedor automaticamente. Gestão exige habilidade diferente de venda. O melhor vendedor frequentemente vira o pior gerente — porque não sabe ensinar o que faz por instinto.

O perfil ideal de gerente comercial para indústria: alguém que entende de processo, sabe ler [métricas](/blog/metricas-gestao-comercial-industria), tem paciência para treinar e não tem medo de cobrar.

## "O time comercial não tem cultura de vendas. Como mudo isso?"

Cultura não se impõe — se constrói. E na indústria, onde o comercial sempre foi tratado como "mal necessário" enquanto a produção era o herói, mudar a cultura leva tempo.

Três coisas que criam cultura de vendas:

**Visibilidade.** Quando o dashboard de vendas fica visível para a empresa, vendas deixa de ser caixa preta. O pessoal da produção vê que tem R$ 2 milhões em pipeline. O financeiro vê que 8 propostas estão pendentes. Vendas ganha respeito quando fica transparente.

**Celebração.** Fechou um deal grande? O comercial inteiro sabe. A produção sabe. O Seu Carlos manda mensagem parabenizando. Parece bobagem, mas reconhecimento público cria motivação que nenhuma comissão extra cria.

**Processo.** Parece contraditório, mas processo gera cultura. Quando tem reunião semanal, meta clara, CRM atualizado e cobrança justa — o time entende que vendas é sério. Não é "o que der, deu". É disciplina, como qualquer outra área da fábrica.

Aprofundamos esse tema no artigo sobre [cultura de vendas na indústria](/blog/cultura-vendas-industria).

## A pergunta que ninguém faz (mas deveria)

"O problema do meu comercial é gente ou é processo?"

Na maioria das vezes, é processo. O vendedor mediano com processo bom vende mais que o vendedor excelente sem processo. Porque processo cria consistência. Vendedor bom sem processo tem meses incríveis e meses desastrosos. Vendedor médio com processo tem meses consistentes — e consistência ganha no longo prazo.

Antes de trocar o time, troque o sistema. Defina o [funil](/blog/funil-vendas-industrial), implemente o [CRM](/blog/crm-ferramentas-industrias), crie as cadências de [prospecção](/blog/prospeccao-b2b-industrias) e meça os [indicadores](/blog/metricas-gestao-comercial-industria) certos. Depois — e só depois — avalie se precisa de gente diferente.

---

*A Orbius estrutura equipes comerciais para indústrias B2B: processo, CRM, métricas e treinamento. Se o comercial da sua fábrica precisa de organização, [agende o diagnóstico gratuito](/#formulario).*`,
  },
  {
    slug: "treinar-equipe-venda-consultiva",
    titleTag: "Como Treinar Equipe Comercial para Venda Consultiva",
    metaDescription: "Treine sua equipe comercial industrial para venda consultiva. Metodologia, role play e acompanhamento.",
    h1: "Como Treinar Equipe Comercial para Venda Consultiva",
    category: "Equipe Comercial",
    cluster: "equipe",
    isPillar: false,
    internalLinks: ["equipe-comercial-industria", "venda-consultiva-industrias", "vendedor-interno-vs-externo", "montar-time-vendas-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "vendedor-interno-vs-externo",
    titleTag: "Vendedor Interno vs Externo na Indústria: Qual Escolher?",
    metaDescription: "Compare vendedor interno e externo para indústrias B2B. Custos, produtividade e quando usar cada modelo.",
    h1: "Vendedor Interno vs Externo na Indústria: Qual Escolher?",
    category: "Equipe Comercial",
    cluster: "equipe",
    isPillar: false,
    internalLinks: ["equipe-comercial-industria", "treinar-equipe-venda-consultiva", "inside-sales-industrias", "montar-time-vendas-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "montar-time-vendas-industria",
    titleTag: "Como Montar o Primeiro Time de Vendas na Indústria",
    metaDescription: "Passo a passo para montar seu primeiro time de vendas industrial. Perfil, contratação e onboarding.",
    h1: "Como Montar o Primeiro Time de Vendas na Indústria",
    category: "Equipe Comercial",
    cluster: "equipe",
    isPillar: false,
    internalLinks: ["equipe-comercial-industria", "vendedor-interno-vs-externo", "comissionamento-vendedores-industriais", "crm-ferramentas-industrias"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "comissionamento-vendedores-industriais",
    titleTag: "Comissionamento para Vendedores Industriais: Modelos e Exemplos",
    metaDescription: "Modelos de comissionamento para vendedores na indústria B2B. Fixo + variável, escalonado e por margem.",
    h1: "Comissionamento para Vendedores Industriais",
    category: "Equipe Comercial",
    cluster: "equipe",
    isPillar: false,
    internalLinks: ["equipe-comercial-industria", "montar-time-vendas-industria", "cultura-vendas-industria", "metricas-gestao-comercial-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "cultura-vendas-industria",
    titleTag: "Cultura de Vendas na Indústria: Como Criar",
    metaDescription: "Como criar uma cultura de vendas na sua indústria B2B. Mentalidade, rituais e gestão para resultados consistentes.",
    h1: "Cultura de Vendas na Indústria: Como Criar",
    category: "Equipe Comercial",
    cluster: "equipe",
    isPillar: false,
    internalLinks: ["equipe-comercial-industria", "treinar-equipe-venda-consultiva", "comissionamento-vendedores-industriais", "metricas-gestao-comercial-industria"],
    date: "",
    published: false,
    content: "",
  },

  // ═══════════════════════════════════════════════════════════════════
  // PILAR 7: Cases e Decisão
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "consultoria-vendas-industria",
    titleTag: "Consultoria de Vendas para Indústrias: Vale a Pena?",
    metaDescription: "Descubra se contratar uma consultoria de vendas vale a pena para sua indústria B2B. Custos, resultados e critérios.",
    h1: "Consultoria de Vendas para Indústrias: Vale a Pena?",
    category: "Cases e Decisão",
    cluster: "cases",
    isPillar: true,
    internalLinks: ["custo-terceirizar-prospeccao", "consultoria-vs-contratar-vendedor", "sinais-comercial-travado", "escolher-consultoria-vendas-b2b", "case-0-a-20-clientes-outbound", "industrias-perdem-vendas-sem-processo", "prospeccao-b2b-industrias", "equipe-comercial-industria"],
    date: "2026-03-26",
    published: true,
    content: `Vou ser direto: consultoria de vendas não é para todo mundo. Não é bala de prata. E a maioria das indústrias que contrata faz pelo motivo errado.

Então, antes de responder se vale a pena, vamos fazer um diagnóstico rápido. Responda mentalmente cada pergunta abaixo.

## Diagnóstico: 8 sinais de que o comercial da sua indústria precisa de ajuda externa

**1. Você depende de 1-2 pessoas para vender.**
Se o vendedor principal sair amanhã, o faturamento despenca nos próximos 3 meses? Se sim, você não tem processo comercial — tem um funcionário insubstituível. E tudo que é insubstituível é um risco.

**2. O pipeline é invisível.**
Quando alguém pergunta "quantas oportunidades abertas temos?", ninguém sabe responder com precisão? Se o [funil de vendas](/blog/funil-vendas-industrial) não existe ou é um mistério, o comercial opera no escuro.

**3. Prospecção não existe como atividade.**
Os clientes chegam por indicação, feira, ou sorte? Não tem ninguém ativamente buscando novos clientes toda semana? Sem [prospecção ativa](/blog/prospeccao-b2b-industrias), o fluxo de novos negócios é imprevisível por definição.

**4. O CRM é uma planilha abandonada (ou não existe).**
Se a informação comercial mora na cabeça do vendedor e no WhatsApp dele, cada saída de funcionário é uma hemorragia. Sem [CRM funcionando](/blog/crm-ferramentas-industrias), não dá para gerir o que não se vê.

**5. Você não sabe o custo de aquisição de cliente.**
Quanto custa trazer um cliente novo? Se a resposta for "nunca calculei", você pode estar gastando R$ 50 mil para trazer um cliente que vale R$ 30 mil. Os [indicadores comerciais](/blog/metricas-gestao-comercial-industria) contam essa história — mas só se alguém estiver medindo.

**6. Já tentou contratar vendedor e não funcionou.**
Um, dois, três vendedores. Entraram, não performaram, saíram. O padrão se repete e você começa a achar que "não existe vendedor bom". Na maioria das vezes, o problema não é o vendedor — é a falta de [estrutura para o time funcionar](/blog/equipe-comercial-industria).

**7. Vendas crescem num trimestre e despencam no seguinte.**
Montanha-russa de faturamento é sintoma clássico de ausência de processo. Quando não tem pipeline alimentado constantemente, tem meses fartos (quando um grande deal fecha) e meses secos (quando nada está maduro).

**8. O dono faz tudo.**
Vende, negocia, cuida de produção, resolve financeiro. Não sobra tempo para pensar em crescimento porque está preso na operação. Esse é talvez o sinal mais claro de que precisa de ajuda — não porque é incapaz, mas porque não escala.

**Contagem:**
- **6-8 sinais:** O comercial precisa de intervenção urgente. Consultoria faz sentido agora.
- **3-5 sinais:** Tem problemas estruturais. Consultoria pode acelerar, mas avalie se consegue resolver internamente primeiro.
- **0-2 sinais:** Provavelmente não precisa de consultoria. O comercial tem base — pode ser que precise só de ajustes pontuais.

Para um diagnóstico mais profundo de cada sinal, leia sobre os [sinais de que o comercial da sua indústria está travado](/blog/sinais-comercial-travado).

## O que uma consultoria de vendas faz (de verdade)

Existe muita confusão. Consultoria de vendas não é:
- Treinamento motivacional de fim de semana
- Alguém que vende no seu lugar
- Palestra sobre "mindset de vendedor"
- Um guru que fala bonito e não implementa nada

Uma boa consultoria de vendas para indústria faz o trabalho duro:

**Diagnóstico real.** Entra na operação, fala com os vendedores, ouve ligações, lê propostas, analisa o pipeline (se existir). Identifica onde o dinheiro está vazando.

**Montagem de processo.** Define ICP, cria cadências de prospecção, implementa funil no CRM, escreve scripts de abordagem, define critérios de qualificação. Tudo adaptado para a realidade da sua indústria — não é template genérico.

**Implementação.** Não entrega um PDF de 80 páginas e vai embora. Implementa no CRM, treina os vendedores no processo novo, acompanha as primeiras semanas, ajusta o que não funciona.

**Acompanhamento com métricas.** Define os [KPIs](/blog/metricas-gestao-comercial-industria) certos, monta o dashboard, e acompanha a execução semana a semana. Se o vendedor não está seguindo a cadência, a consultoria identifica e corrige.

## Consultoria vs. contratar vendedor: a conta real

A comparação mais comum. "Por esse valor eu contrato um vendedor." Vamos fazer a conta:

**Contratar vendedor:**
- Salário + encargos: R$ 6-10 mil/mês
- Tempo até performar: 3-6 meses
- Risco de não funcionar (sem processo): alto
- Se sair em 6 meses: R$ 60-80 mil perdidos
- Resultado provável sem processo: imprevisível

**Contratar consultoria:**
- Investimento mensal: R$ 5-15 mil/mês (varia muito)
- Duração típica: 3-6 meses
- Entrega: processo montado, CRM implementado, time treinado
- Se funcionar: o processo fica depois que a consultoria sai
- Resultado provável: pipeline visível em 60 dias, vendas em 90-120 dias

A diferença fundamental: o vendedor sem processo é uma aposta. A consultoria constrói o sistema que faz qualquer vendedor performar. O processo fica na empresa para sempre. O vendedor pode ir embora amanhã.

Detalhamos essa comparação com cenários de custo reais no artigo [consultoria comercial vs contratar vendedor](/blog/consultoria-vs-contratar-vendedor). Para entender os valores de mercado para terceirizar apenas a prospecção, veja [quanto custa terceirizar a prospecção](/blog/custo-terceirizar-prospeccao).

## Quando NÃO contratar consultoria

Honestidade é fundamental. Consultoria não resolve tudo. Não contrate se:

**Você não vai mudar nada.** Se contrata consultoria esperando que ela faça mágica sem mudar a forma como o comercial opera — vai frustrar. Consultoria exige abertura para mudar processo, ferramenta, e às vezes pessoas.

**O problema é o produto, não a venda.** Se o mercado não quer o que você vende, nenhum processo comercial salva. Antes de investir em vendas, valide se existe demanda real.

**Não tem verba para o básico.** Se não tem R$ 200/mês para CRM e R$ 500/mês para ferramentas de prospecção, não tem condição de implementar o que a consultoria vai recomendar. Primeiro resolva o caixa, depois pense em escalar.

**Quer resultado amanhã.** Processo comercial leva 60-90 dias para mostrar resultado em vendas industriais (o ciclo de vendas não encurta por mágica). Se precisa de faturamento semana que vem, consultoria não é a resposta — promoção e desconto são. Mas isso é curativo, não tratamento.

## Como escolher a consultoria certa

Se decidiu que faz sentido, o próximo passo é escolher bem. O mercado tem muita consultoria de vendas. Poucas entendem de indústria.

**Pergunte sobre experiência no setor industrial.** B2B industrial é diferente de B2B SaaS, que é diferente de B2C. O ciclo é mais longo, o decisor é mais técnico, o relacionamento pesa mais. Consultoria que só trabalhou com startup de tecnologia vai aplicar playbook que não funciona na fábrica.

**Peça para ver o processo, não o resultado.** "Ajudamos empresa X a crescer 300%" é marketing. Pergunte: como? Qual era o cenário? O que foi implementado? Quanto tempo levou? O resultado se manteve depois que vocês saíram?

**Confirme que implementam.** A diferença entre consultoria boa e ruim é execução. Se entregam só diagnóstico e recomendação, você vai ter um documento bonito e nenhuma mudança. Precisa ser mão na massa: configurar CRM, treinar vendedor, montar cadência.

**Veja se medem resultado.** Toda consultoria séria define métricas no início e reporta evolução. Se não propõem dashboard de acompanhamento, não sabem medir o próprio trabalho.

Montamos um checklist completo no artigo sobre [como escolher uma consultoria de vendas B2B](/blog/escolher-consultoria-vendas-b2b).

## O resultado que uma indústria pode esperar

Sem prometer números (cada caso é um caso), o que tipicamente acontece quando uma indústria implementa processo comercial com ajuda de consultoria:

**Primeiros 30 dias:** CRM implementado, funil definido, cadência de prospecção rodando. O pipeline começa a encher. Ainda não tem venda nova, mas pela primeira vez existe visibilidade.

**60 dias:** As primeiras reuniões agendadas via prospecção ativa começam a virar proposta. O vendedor está se acostumando com o novo processo. Alguns ajustes finos no script e na qualificação.

**90 dias:** Os primeiros deals oriundos do novo processo fecham. A reunião semanal de pipeline já é hábito. O dashboard mostra dados reais. O dono da indústria pela primeira vez sabe responder: "quanto vou faturar no próximo trimestre?"

**6 meses:** O processo está maduro. O time faz sem precisar de acompanhamento externo. A base de clientes prospectados cresce todo mês. A dependência de indicação caiu pela metade. O comercial opera como a produção: com processo, métrica e previsibilidade.

Leia um exemplo concreto desse processo no artigo [case: como uma indústria saiu de 0 a 20 clientes com outbound](/blog/case-0-a-20-clientes-outbound).

## A pergunta final

Volte ao diagnóstico lá em cima. Some seus sinais. Olhe para o custo de não fazer nada — os deals perdidos por falta de follow-up, o vendedor que saiu e levou a carteira, os meses de montanha-russa.

Consultoria é investimento, não custo. Mas só se for a hora certa, pelo motivo certo, com a consultoria certa.

Se o seu diagnóstico apontou 6+ sinais, o [comercial da sua indústria está travado](/blog/sinais-comercial-travado) e cada mês sem ação é receita [que fica na mesa](/blog/industrias-perdem-vendas-sem-processo).

---

*A Orbius é consultoria de processo comercial especializada em indústrias B2B. Se o diagnóstico acima pareceu familiar, [agende uma conversa gratuita](/#formulario) e vamos entender juntos se faz sentido para o seu momento.*`,
  },
  {
    slug: "custo-terceirizar-prospeccao",
    titleTag: "Quanto Custa Terceirizar a Prospecção da Sua Indústria?",
    metaDescription: "Valores reais de terceirização de prospecção B2B para indústrias. Compare com custo de equipe interna.",
    h1: "Quanto Custa Terceirizar a Prospecção da Sua Indústria?",
    category: "Cases e Decisão",
    cluster: "cases",
    isPillar: false,
    internalLinks: ["consultoria-vendas-industria", "consultoria-vs-contratar-vendedor", "sinais-comercial-travado", "outbound-industrial"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "consultoria-vs-contratar-vendedor",
    titleTag: "Consultoria Comercial vs Contratar Vendedor: O Que Vale Mais?",
    metaDescription: "Compare contratar uma consultoria comercial versus um vendedor CLT para sua indústria. Custos e resultados.",
    h1: "Consultoria Comercial vs Contratar Vendedor: O Que Vale Mais?",
    category: "Cases e Decisão",
    cluster: "cases",
    isPillar: false,
    internalLinks: ["consultoria-vendas-industria", "custo-terceirizar-prospeccao", "montar-time-vendas-industria", "equipe-comercial-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "sinais-comercial-travado",
    titleTag: "Sinais de Que o Comercial da Sua Indústria Está Travado",
    metaDescription: "Identifique os sinais de que o setor comercial da sua indústria precisa de ajuda. Diagnóstico rápido com soluções.",
    h1: "Sinais de Que o Comercial da Sua Indústria Está Travado",
    category: "Cases e Decisão",
    cluster: "cases",
    isPillar: false,
    internalLinks: ["consultoria-vendas-industria", "diagnosticar-gargalos-funil", "consultoria-vs-contratar-vendedor", "metricas-gestao-comercial-industria"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "escolher-consultoria-vendas-b2b",
    titleTag: "Como Escolher uma Consultoria de Vendas B2B",
    metaDescription: "Critérios para escolher a consultoria de vendas B2B certa para sua indústria. O que avaliar antes de contratar.",
    h1: "Como Escolher uma Consultoria de Vendas B2B",
    category: "Cases e Decisão",
    cluster: "cases",
    isPillar: false,
    internalLinks: ["consultoria-vendas-industria", "consultoria-vs-contratar-vendedor", "custo-terceirizar-prospeccao", "case-0-a-20-clientes-outbound"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "case-0-a-20-clientes-outbound",
    titleTag: "Case: Como uma Indústria Saiu de 0 a 20 Clientes com Outbound",
    metaDescription: "Case real de uma indústria B2B que saiu do zero e conquistou 20 clientes com processo de outbound estruturado.",
    h1: "Case: Como uma Indústria Saiu de 0 a 20 Clientes com Outbound",
    category: "Cases e Decisão",
    cluster: "cases",
    isPillar: false,
    internalLinks: ["consultoria-vendas-industria", "outbound-industrial", "prospeccao-b2b-industrias", "escolher-consultoria-vendas-b2b"],
    date: "",
    published: false,
    content: "",
  },
  {
    slug: "industrias-perdem-vendas-sem-processo",
    titleTag: "Por Que Indústrias Perdem Vendas Sem Processo Comercial",
    metaDescription: "Entenda por que indústrias B2B perdem vendas quando não têm processo comercial. Problemas comuns e como resolver.",
    h1: "Por Que Indústrias Perdem Vendas Sem Processo Comercial",
    category: "Cases e Decisão",
    cluster: "cases",
    isPillar: false,
    internalLinks: ["consultoria-vendas-industria", "sinais-comercial-travado", "funil-vendas-industrial", "digitalizar-comercial-industria"],
    date: "",
    published: false,
    content: "",
  },
];

// ─── HELPERS ────────────────────────────────────────────────────────

export const categories = [
  "Prospecção",
  "Funil de Vendas",
  "Marketing",
  "CRM e Ferramentas",
  "Métricas",
  "Equipe Comercial",
  "Cases e Decisão",
] as const;

export type Category = (typeof categories)[number];

export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter((p) => p.published && p.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getPublishedPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.internalLinks
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => !!p && p.published);
}

export function getAllSlugs(): string[] {
  return blogPosts.filter((p) => p.published).map((p) => p.slug);
}
