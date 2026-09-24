export const PAPEIS = ["Sócio ou diretor", "Gestor comercial", "Responsável por vendas", "Outro responsável pela decisão"] as const;
export const EQUIPES = ["1", "2 a 3", "4 a 7", "8 ou mais"] as const;
export const DORES = [
  "Dependemos demais de indicação",
  "Perdemos um vendedor e sentimos no faturamento",
  "Investimos em feira e poucos contatos avançam",
  "Queremos crescer e o comercial não acompanha",
  "Outro problema",
] as const;

export type Variante = {
  slug: string;
  titulo: string;
  subtitulo: string;
  cta: string;
  destaque: string;
  foco: string;
  setor?: string;
  dor?: string;
};

export const PADRAO: Variante = {
  slug: "geral",
  titulo: "Diagnóstico para encontrar onde sua indústria perde vendas",
  subtitulo: "Em cerca de 45 minutos, analisamos como sua equipe recebe, qualifica, orça e acompanha oportunidades para definir o que merece atenção primeiro.",
  cta: "Solicitar diagnóstico gratuito",
  destaque: "O processo comercial completo",
  foco: "Da entrada de uma oportunidade ao pedido: entendemos o que acontece hoje e o que merece atenção primeiro.",
};

export const VARIANTES: Record<string, Variante> = {
  consultoria: {
    slug: "consultoria",
    titulo: "Consultoria comercial para indústria começa pelo diagnóstico da operação",
    subtitulo: "Nós revisamos captação, atendimento, orçamento e gestão para localizar onde a operação comercial perde força.",
    cta: "Solicitar diagnóstico comercial",
    destaque: "Método e experiência industrial",
    foco: "A conversa conecta situações reais do seu comercial à experiência em projetos com fabricantes de equipamentos para academias.",
  },
  estruturacao: {
    slug: "estruturacao",
    titulo: "Estruture seu comercial industrial a partir dos gargalos reais",
    subtitulo: "Nós analisamos etapas, critérios, responsabilidades e rotina antes de recomendar mudanças no processo.",
    cta: "Solicitar diagnóstico do processo",
    destaque: "Processo e implantação",
    foco: "O diagnóstico considera quem executa cada etapa e quais mudanças cabem na rotina atual da sua equipe.",
  },
  crm: {
    slug: "crm",
    titulo: "Seu CRM mostra onde cada orçamento está parado?",
    subtitulo: "Nós revisamos CRM, etapas, retorno ao cliente e critérios de avanço antes de recomendar qualquer ajuste.",
    cta: "Solicitar diagnóstico do funil",
    destaque: "CRM como parte do processo",
    foco: "Analisamos como a equipe usa as informações para acompanhar oportunidades e definir o próximo passo de cada negociação.",
  },
  metalurgica: {
    slug: "metalurgica",
    titulo: "Onde sua metalúrgica perde vendas depois da cotação?",
    subtitulo: "Nós analisamos pedidos de cotação, preparação do orçamento, retorno comercial e controle até a decisão.",
    cta: "Solicitar diagnóstico da operação",
    destaque: "Da cotação ao retorno comercial",
    foco: "Revisamos como a demanda chega, como o orçamento é preparado e quem acompanha a cotação até a decisão do cliente.",
    setor: "Metalurgia",
  },
  indicacao: {
    slug: "indicacao",
    titulo: "Sua indústria depende demais de indicação para vender?",
    subtitulo: "Nós revisamos origem dos contatos, perfil atendido, resposta comercial e gestão para localizar outras frentes possíveis.",
    cta: "Solicitar diagnóstico da captação",
    destaque: "Origem de vendas",
    foco: "Entendemos de onde vêm as oportunidades e como a equipe trabalha cada contato antes de discutir outras frentes de captação.",
    dor: DORES[0],
  },
  vendedor: {
    slug: "vendedor",
    titulo: "Quanto do seu comercial depende de um único vendedor?",
    subtitulo: "Nós analisamos carteira, conhecimento, processo e responsabilidades para localizar onde existe concentração comercial.",
    cta: "Solicitar diagnóstico comercial",
    destaque: "Dependência de pessoas",
    foco: "Revisamos onde ficam o histórico dos clientes, as informações das negociações e o conhecimento usado no atendimento.",
    dor: DORES[1],
  },
  feira: {
    slug: "feira",
    titulo: "Sua feira gerou contatos. Quantos viraram oportunidades reais?",
    subtitulo: "Nós revisamos triagem, distribuição, retorno e propostas para identificar onde o interesse comercial esfriou.",
    cta: "Solicitar diagnóstico pós-feira",
    destaque: "Pós-feira e follow-up",
    foco: "Acompanhamos o caminho entre o contato captado na feira, a primeira conversa e o avanço para uma oportunidade comercial.",
    dor: DORES[2],
  },
  orcamentos: {
    slug: "orcamentos",
    titulo: "Quantos orçamentos enviados ainda estão esperando resposta?",
    subtitulo: "Nós analisamos cotação, acompanhamento, próximo passo e controle das oportunidades que continuam abertas.",
    cta: "Solicitar diagnóstico de orçamentos",
    destaque: "Acompanhamento dos orçamentos",
    foco: "Revisamos quando o vendedor retoma o contato, o que combina com o cliente e como registra o próximo passo.",
    dor: DORES[4],
  },
  crescimento: {
    slug: "crescimento",
    titulo: "Seu processo comercial acompanha o crescimento da indústria?",
    subtitulo: "Nós revisamos capacidade, processo, rotina e gestão para localizar o que limita a operação atual.",
    cta: "Solicitar diagnóstico da operação",
    destaque: "Capacidade para crescer",
    foco: "Entendemos como o volume de oportunidades se distribui entre as pessoas e onde a rotina começa a perder capacidade de resposta.",
    dor: DORES[3],
  },
  diretor: {
    slug: "diretor",
    titulo: "O que sua operação precisa antes de contratar gestão comercial?",
    subtitulo: "O diagnóstico revisa escopo, responsabilidades, processo e indicadores antes de uma decisão sobre gestão externa.",
    cta: "Solicitar diagnóstico de estrutura",
    destaque: "Antes de contratar gestão comercial",
    foco: "A conversa ajuda a identificar quais responsabilidades e rotinas precisam de atenção para avaliar o escopo de um possível trabalho.",
  },
  preco: {
    slug: "preco",
    titulo: "Defina o problema comercial antes de comparar propostas",
    subtitulo: "Nós revisamos escopo, diagnóstico, implementação e acompanhamento para identificar o tipo de trabalho que a operação exige.",
    cta: "Solicitar diagnóstico comercial",
    destaque: "Escopo e aderência",
    foco: "Revisamos as prioridades da operação para entender quais entregas e qual acompanhamento precisam entrar na avaliação das propostas.",
  },
};

export function getVariante(value: unknown): Variante {
  if (typeof value !== "string") return PADRAO;
  // Compatibilidade com links antigos da landing page.
  const slug = value === "processo" ? "estruturacao" : value === "conversao" ? "orcamentos" : value;
  return Object.prototype.hasOwnProperty.call(VARIANTES, slug) ? VARIANTES[slug] : PADRAO;
}

export type DadosDiagnostico = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  setor: string;
  papelComercial: string;
  equipeComercial: string;
  desafio: string;
  lgpd: boolean;
};
export type Campo = keyof DadosDiagnostico;
export type Erros = Partial<Record<Campo, string>>;
export const CAMPOS: Campo[] = ["nome", "empresa", "telefone", "email", "setor", "papelComercial", "equipeComercial", "desafio", "lgpd"];

export function normalizar(body: Record<string, unknown>): DadosDiagnostico {
  const str = (key: string) => typeof body[key] === "string" ? (body[key] as string).trim() : "";
  return {
    nome: str("nome"), empresa: str("empresa"), telefone: str("telefone"), email: str("email"),
    setor: str("setor"), papelComercial: str("papelComercial"), equipeComercial: str("equipeComercial"),
    desafio: str("desafio"), lgpd: body.lgpd === true,
  };
}

export function validar(dados: DadosDiagnostico): Erros {
  const erros: Erros = {};
  for (const key of ["nome", "empresa", "setor"] as const) {
    if (!dados[key].trim()) erros[key] = "Preencha este campo.";
    else if (dados[key].length > 160) erros[key] = "Use até 160 caracteres.";
  }
  const digits = dados.telefone.replace(/\D/g, "");
  if (!/^\d{10,11}$/.test(digits) || dados.telefone.length > 24) erros.telefone = "Informe seu WhatsApp com DDD (10 ou 11 números).";
  if (dados.email && (dados.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email))) erros.email = "Confira o e-mail ou deixe o campo vazio.";
  if (!(PAPEIS as readonly string[]).includes(dados.papelComercial)) erros.papelComercial = "Selecione seu papel no comercial.";
  if (!(EQUIPES as readonly string[]).includes(dados.equipeComercial)) erros.equipeComercial = "Selecione quantas pessoas atuam em vendas.";
  if (!(DORES as readonly string[]).includes(dados.desafio)) erros.desafio = "Selecione a situação mais próxima da sua operação.";
  if (!dados.lgpd) erros.lgpd = "Autorize o contato para enviar sua solicitação.";
  return erros;
}
