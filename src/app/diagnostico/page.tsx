import type { Metadata } from "next";
import { FormularioDiagnostico } from "@/components/FormularioDiagnostico";
import { getVariante } from "@/lib/diagnostico";

export const metadata: Metadata = {
  title: "Diagnóstico comercial gratuito para indústrias B2B | Salesorbius",
  description: "Entenda onde sua indústria perde vendas. Solicite um diagnóstico gratuito sobre atendimento, qualificação, orçamentos e gestão comercial.",
  alternates: { canonical: "https://www.salesorbius.com/diagnostico" },
  openGraph: {
    title: "Diagnóstico comercial gratuito para indústrias B2B",
    description: "Uma conversa sobre a operação comercial da sua indústria e o que merece atenção primeiro.",
    url: "https://www.salesorbius.com/diagnostico", type: "website",
  },
  twitter: { card: "summary", title: "Diagnóstico comercial gratuito | Salesorbius", description: "Entenda onde sua indústria perde vendas." },
};

const resultados = [
  "Onde as oportunidades estão esfriando: entrada, qualificação, orçamento ou retorno.",
  "Qual ponto merece prioridade considerando o tamanho da equipe e a rotina atual.",
  "Quais mudanças cabem na operação que sua empresa já possui.",
  "Se faz sentido rever captação, CRM, playbook ou gestão comercial.",
];
const etapas = [
  ["Entrada e perfil", "De onde vêm os contatos, quem pede cotação e quais empresas realmente combinam com o cliente que sua indústria quer atender."],
  ["Atendimento", "Quem responde, como cada vendedor conduz a conversa e o que precisa estar claro antes do orçamento."],
  ["Orçamento e retorno", "Como a proposta sai, quando o vendedor volta a falar e em que ponto as oportunidades deixam de avançar."],
  ["Gestão", "Etapas, responsabilidades, metas, uso de CRM e visibilidade sobre o que continua aberto."],
];
const aderencia = [
  "Sua empresa vende para outras empresas por orçamento, cotação ou negociação.",
  "Já existe vendedor, representante interno ou equipe responsável por atender oportunidades.",
  "Um sócio, diretor ou responsável comercial participa das decisões sobre mudanças no processo.",
  "Existe disposição para implementar ajustes quando a análise mostrar uma prioridade concreta.",
];
const funcionamento = [
  ["Você solicita o diagnóstico", "O formulário traz as informações necessárias para entendermos o contexto inicial."],
  ["Nós validamos a aderência", "Em até 24h, entramos em contato pelo WhatsApp para confirmar os dados que interferem no diagnóstico."],
  ["Combinamos o horário", "Quando a operação se encaixa no trabalho da Salesorbius, marcamos a conversa com quem participa das decisões comerciais."],
  ["Fazemos o diagnóstico", "Em cerca de 45 minutos, revisamos a operação e definimos onde vale concentrar atenção primeiro."],
];
const perguntas = [
  ["O diagnóstico termina com uma proposta?", "A conversa possui conteúdo próprio e termina com uma leitura das prioridades encontradas. Quando houver aderência para uma implementação acompanhada pela Salesorbius, nós explicamos como funcionaria esse trabalho. Você decide se quer continuar a conversa."],
  ["Quanto tempo preciso separar?", "Reserve aproximadamente 45 minutos. A reunião é feita com base na operação atual da empresa e nas situações comerciais que você já enfrenta."],
  ["O diagnóstico pode recomendar mudanças na equipe?", "Nós avaliamos primeiro como o trabalho é executado. Qualquer recomendação considera processo, responsabilidades, capacidade da equipe e contexto da empresa."],
  ["Meu comercial é pequeno. Ainda faz sentido?", "Pode fazer sentido quando já existe alguém responsável por atender oportunidades e há volume suficiente para justificar organização comercial. O formulário e a validação pelo WhatsApp servem para confirmar essa aderência."],
  ["Já contratamos consultoria antes. O que será analisado aqui?", "Nós começamos pela operação atual: orçamentos abertos, forma de atendimento, histórico de retornos e rotina de gestão. A conversa parte do que sua equipe executa hoje."],
];
const largura = "mx-auto max-w-6xl px-6";
const titulo = "text-3xl font-bold leading-tight tracking-tight md:text-4xl";
const botao = "inline-flex min-h-12 items-center justify-center rounded-full bg-[#b83e09] px-7 py-4 text-center text-base font-semibold text-white transition hover:bg-[#923007] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E05718]";

export default async function DiagnosticoPage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const variante = getVariante(params.mensagem);
  return (
    <div className="bg-[#faf9f6] text-[#171d29]">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3">Pular para o conteúdo</a>
      <header className="border-b border-white/10 bg-[#080808] text-white">
        <div className={`${largura} flex min-h-20 items-center justify-between gap-4`}>
          <a href="/" aria-label="Salesorbius — página inicial" className="text-xl font-bold tracking-tight">Salesorbius<span className="text-[#E05718]">.</span></a>
          <a href="#formulario" className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white/10">Solicitar diagnóstico</a>
        </div>
      </header>
      <main id="conteudo">
        <section className="relative overflow-hidden bg-[#080808] py-16 text-white md:py-24" aria-labelledby="titulo-diagnostico">
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-16 h-[480px] w-[480px] rounded-full border border-white/10" />
          <div className={`${largura} relative grid items-center gap-12 lg:grid-cols-[1.7fr_1fr]`}>
            <div>
              <p className="mb-6 text-xs font-semibold uppercase leading-relaxed tracking-[0.15em] text-[#ffad83]">Diagnóstico comercial gratuito para indústrias B2B</p>
              <h1 id="titulo-diagnostico" className="max-w-3xl text-[clamp(2rem,4.4vw,3.7rem)] font-bold leading-[1.1] tracking-tight">{variante.titulo}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">{variante.subtitulo}</p>
              <a href="#formulario" className={`${botao} mt-9`}>{variante.cta}</a>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70">Nós revisamos sua solicitação e respondemos pelo WhatsApp em até 24h. Havendo aderência, combinamos o horário do diagnóstico.</p>
            </div>
            <aside className="rounded-3xl border border-white/15 bg-white/[0.04] p-7 md:p-9" aria-label="Foco da conversa">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">Foco da conversa</p>
              <h2 className="text-2xl font-semibold leading-tight">{variante.destaque}</h2>
              <p className="mt-4 leading-relaxed text-white/75">{variante.foco}</p>
              <div className="mt-8 border-t border-white/15 pt-6 text-sm text-white/75">Gratuito · Cerca de 45 minutos<br /><span className="mt-2 block">Com Hugo Matias</span></div>
            </aside>
          </div>
        </section>

        <section className={`${largura} py-16 md:py-24`}>
          <h2 className={`${titulo} max-w-xl`}>O que fica claro depois da conversa</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {resultados.map((texto, i) => <li key={texto} className="flex gap-5 rounded-2xl border border-black/10 bg-white p-6"><span aria-hidden="true" className="font-semibold text-[#b83e09]">0{i + 1}</span><p className="leading-relaxed">{texto}</p></li>)}
          </ul>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className={largura}>
            <h2 className={`${titulo} max-w-3xl`}>Nós acompanhamos a venda do primeiro contato ao pedido</h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-[#505867]">O diagnóstico parte da forma como sua indústria vende hoje. Nós usamos situações reais da operação para entender o caminho percorrido por uma oportunidade desde o primeiro contato até a decisão do cliente.</p>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {etapas.map(([nome, texto], i) => <article key={nome} className="border-t-2 border-[#E05718] pt-6"><p className="text-sm text-[#6b7280]">0{i + 1}</p><h3 className="mt-3 text-xl font-semibold">{nome}</h3><p className="mt-4 leading-relaxed text-[#505867]">{texto}</p></article>)}
            </div>
          </div>
        </section>

        <section className={`${largura} py-16 md:py-24`}>
          <h2 className={`${titulo} max-w-3xl`}>Experiência aplicada à operação comercial industrial</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-[#505867]">Em projetos anteriores com fabricantes de equipamentos para academias, atuamos diretamente sobre o processo utilizado pela equipe comercial.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-[#171d29] p-8 text-white"><h3 className="text-xl font-semibold">Mundial Fitness</h3><p className="my-6 text-3xl font-bold md:text-4xl">R$ 50 mil → R$ 600 mil<span className="mt-2 block text-sm font-normal text-white/70">Faturamento mensal durante o projeto</span></p><p className="leading-relaxed text-white/80">O faturamento mensal partiu de aproximadamente R$ 50 mil e chegou a R$ 600 mil durante o projeto. O trabalho estruturou o comercial e implantou playbook com padronização do atendimento.</p></article>
            <article className="rounded-3xl border border-black/10 bg-white p-8"><h3 className="text-xl font-semibold">TNT Fitness</h3><p className="my-6 text-3xl font-bold md:text-4xl">R$ 1,8 milhão<span className="mt-2 block text-sm font-normal text-[#505867]">Faturamento no segundo trimestre do projeto</span></p><p className="leading-relaxed text-[#505867]">A empresa partia de aproximadamente R$ 200 mil por mês. No segundo trimestre do projeto, faturou R$ 1,8 milhão.</p></article>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[#505867]">Esses resultados pertencem a operações e períodos específicos. Eles não representam promessa de faturamento para outros projetos.</p>
        </section>

        <section className="border-y border-black/10 bg-white py-16 md:py-24">
          <div className={`${largura} grid gap-12 lg:grid-cols-[1.3fr_1fr]`}>
            <div><h2 className={titulo}>Para quais indústrias o diagnóstico faz sentido</h2><ul className="mt-8 space-y-5">{aderencia.map(texto => <li key={texto} className="flex gap-3 leading-relaxed"><span aria-hidden="true" className="font-bold text-[#b83e09]">✓</span><span>{texto}</span></li>)}</ul></div>
            <div className="rounded-3xl bg-[#f4f2ed] p-8"><h2 className="text-2xl font-semibold">Quando provavelmente há pouca aderência</h2><ul className="mt-6 list-disc space-y-5 pl-5 leading-relaxed text-[#505867]"><li>Sua empresa procura apenas tráfego, uma lista de contatos ou terceirização integral das vendas.</li><li>Hoje não existe responsável interno disponível para colocar mudanças comerciais em prática.</li></ul></div>
          </div>
        </section>

        <section className={`${largura} py-16 md:py-24`}>
          <h2 className={titulo}>Como funciona</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{funcionamento.map(([nome, texto], i) => <li key={nome}><span aria-hidden="true" className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#171d29] text-white">{i + 1}</span><h3 className="text-xl font-semibold">{nome}</h3><p className="mt-3 leading-relaxed text-[#505867]">{texto}</p></li>)}</ol>
          <a href="#formulario" className={`${botao} mt-10`}>{variante.cta}</a>
        </section>

        <section className="bg-[#171d29] py-16 text-white md:py-20">
          <div className={`${largura} grid gap-8 md:grid-cols-[1fr_1.5fr]`}>
            <div><p className="mb-4 text-sm text-[#ffad83]">Hugo Matias · Salesorbius</p><h2 className={titulo}>Quem conduz a conversa</h2></div>
            <div className="space-y-5 text-lg leading-relaxed text-white/80"><p>Na Salesorbius, o diagnóstico é conduzido por Hugo Matias, com experiência em projetos comerciais para indústrias de equipamentos para academias.</p><p>O trabalho conecta captação, definição de cliente ideal, atendimento, playbook e gestão comercial à operação que os vendedores executam todos os dias.</p></div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <h2 className={titulo}>Dúvidas antes de solicitar</h2>
          <div className="mt-8 divide-y divide-black/15">{perguntas.map(([pergunta, resposta]) => <details key={pergunta} className="group py-6"><summary className="cursor-pointer text-lg font-semibold leading-relaxed marker:text-[#b83e09]">{pergunta}</summary><p className="mt-4 leading-relaxed text-[#505867]">{resposta}</p></details>)}</div>
        </section>

        <section id="formulario" className="scroll-mt-6 border-t border-black/10 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6"><h2 className={titulo}>Solicite o diagnóstico</h2><p className="mb-9 mt-5 leading-relaxed text-[#505867]">Leva poucos minutos. Nós usamos as respostas para avaliar se a conversa pode ser útil para sua operação.</p><FormularioDiagnostico key={variante.slug} variante={variante} /></div>
        </section>
      </main>
      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-[#505867]">Salesorbius · Processo comercial para indústrias B2B<br /><a className="mt-2 inline-block underline underline-offset-4" href="mailto:contato@salesorbius.com">contato@salesorbius.com</a></footer>
    </div>
  );
}
