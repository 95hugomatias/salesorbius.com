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
    date: "",
    published: false,
    content: "",
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
    date: "",
    published: false,
    content: "",
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
    date: "",
    published: false,
    content: "",
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
    date: "",
    published: false,
    content: "",
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
