import type { Metadata } from "next";
import { Formulario } from "@/components/Formulario";

export const metadata: Metadata = {
  title: "Diagnóstico Comercial Gratuito para Indústrias | Salesorbius",
  description:
    "Identifique gargalos no comercial da sua indústria B2B e entenda quais ações priorizar. Solicite um diagnóstico gratuito.",
  alternates: {
    canonical: "https://www.salesorbius.com/diagnostico",
  },
  openGraph: {
    title: "Diagnóstico Comercial Gratuito | Salesorbius",
    description:
      "Clareza sobre os gargalos comerciais da sua indústria e os próximos passos para enfrentá-los.",
    url: "https://www.salesorbius.com/diagnostico",
  },
};

const mensagens = {
  padrao: {
    h1: "Onde sua indústria está perdendo oportunidades de venda?",
    h2: "Entenda os gargalos do seu comercial e quais ações priorizar para melhorar o atendimento, os orçamentos e o acompanhamento das oportunidades.",
  },
  processo: {
    h1: "Sua indústria precisa de um processo comercial que a equipe consiga executar.",
    h2: "Descubra o que organizar no atendimento, no CRM e na rotina dos vendedores para acompanhar cada oportunidade até a decisão.",
  },
  conversao: {
    h1: "Sua indústria gera leads, mas fecha poucas vendas?",
    h2: "Identifique onde as oportunidades se perdem entre o primeiro contato e o fechamento — e o que precisa mudar no seu processo comercial.",
  },
  consultoria: {
    h1: "Consultoria de vendas para indústrias B2B: comece pelo diagnóstico.",
    h2: "Antes de contratar, entenda os gargalos da sua operação e quais mudanças fazem sentido para sua equipe comercial.",
  },
};

const pontos = [
  {
    titulo: "Entrada das oportunidades",
    texto:
      "Quem está chegando, como os contatos são qualificados e se marketing e vendas estão buscando o mesmo perfil de cliente.",
  },
  {
    titulo: "Atendimento e orçamentos",
    texto:
      "Como os vendedores conduzem as conversas, apresentam as propostas e acompanham quem ainda não decidiu.",
  },
  {
    titulo: "Gestão e rotina comercial",
    texto:
      "Como a operação usa CRM, etapas, metas e indicadores para identificar problemas e orientar a equipe.",
  },
];

const etapas = [
  {
    titulo: "Solicite o diagnóstico",
    texto: "Preencha o formulário com as informações da sua indústria.",
  },
  {
    titulo: "Confirme os dados pelo WhatsApp",
    texto:
      "Vou conversar com você para validar o contexto e verificar se o diagnóstico faz sentido para sua operação.",
  },
  {
    titulo: "Agende a conversa",
    texto:
      "Havendo aderência, combinamos um horário com você e o responsável pelo comercial.",
  },
  {
    titulo: "Entenda o que priorizar",
    texto:
      "Na reunião, investigamos os gargalos e discutimos ações que você poderá colocar em prática.",
  },
];

const ctaClass =
  "inline-flex items-center justify-center rounded-full bg-[#E05718] px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-[#bc4310] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E05718]";

export default async function DiagnosticoPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const parametro = params.mensagem;

  const chave =
    typeof parametro === "string" &&
    Object.prototype.hasOwnProperty.call(mensagens, parametro)
      ? (parametro as keyof typeof mensagens)
      : "padrao";

  const mensagem = mensagens[chave];

  return (
    <>
      <header className="bg-[#080808] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
          <span className="text-xl font-bold tracking-tight">
            Salesorbius<span className="text-[#E05718]">.</span>
          </span>
          <span className="text-right text-xs text-white/60 sm:text-sm">
            Comercial para indústrias B2B
          </span>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#080808] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 75% 40%, rgba(224,87,24,0.14), transparent 65%)",
            }}
          />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:py-24">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#E05718]">
                Diagnóstico comercial gratuito
              </p>

              <h1 className="mb-6 text-[clamp(2.1rem,4.8vw,3.6rem)] font-bold leading-[1.12]">
                {mensagem.h1}
              </h1>

              <h2 className="mb-8 max-w-2xl text-lg font-normal leading-relaxed text-white/75 md:text-xl">
                {mensagem.h2}
              </h2>

              <a href="#formulario" className={ctaClass}>
                Solicitar diagnóstico gratuito
              </a>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Primeiro, validamos os dados pelo WhatsApp. Depois,
                combinamos o diagnóstico.
              </p>
            </div>

            <aside className="rounded-3xl border border-white/15 bg-white/5 p-7 md:p-9">
              <h3 className="mb-6 text-xl font-bold">
                O que você leva da conversa
              </h3>
              <ul className="space-y-5 text-base leading-relaxed text-white/80">
                <li>✓ Clareza sobre os gargalos identificados.</li>
                <li>✓ Prioridades para organizar seu comercial.</li>
                <li>✓ Primeiras ações recomendadas para sua operação.</li>
              </ul>
              <p className="mt-7 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/60">
                Sem obrigação de contratar. Se fizer sentido, também
                apresento como posso acompanhar a implementação.
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-navy md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
              Antes de gerar mais leads, entenda o que acontece com os
              que já chegam.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pontos.map((ponto) => (
                <article
                  key={ponto.titulo}
                  className="rounded-2xl border border-navy/15 p-7"
                >
                  <h3 className="mb-3 text-xl font-bold">{ponto.titulo}</h3>
                  <p className="leading-relaxed text-navy/75">
                    {ponto.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f3] px-6 py-16 text-navy">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E05718]">
                Para quem faz sentido
              </p>
              <h2 className="text-3xl font-bold leading-tight">
                Indústrias com equipe comercial e disposição para
                melhorar a operação.
              </h2>
            </div>

            <ul className="space-y-4 leading-relaxed text-navy/80">
              <li>✓ Vende para outras empresas por orçamento e negociação.</li>
              <li>✓ Já tem vendedores atendendo oportunidades.</li>
              <li>✓ Quer melhorar conversão, acompanhamento e gestão.</li>
              <li>✓ Tem um sócio ou responsável envolvido nas mudanças.</li>
              <li>
                ✓ Considera investir em implementação se houver aderência.
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-navy md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Como funciona
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {etapas.map((etapa, index) => (
                <article key={etapa.titulo}>
                  <span className="text-sm font-bold text-[#E05718]">
                    0{index + 1}
                  </span>
                  <h3 className="mb-3 mt-3 text-lg font-bold">
                    {etapa.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy/75">
                    {etapa.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080808] px-6 py-16 text-white">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#E05718]">
              Quem conduz
            </p>
            <h2 className="mb-5 text-3xl font-bold">
              Você conversa diretamente com Hugo Matias.
            </h2>
            <p className="text-lg leading-relaxed text-white/75">
              Minha experiência inclui projetos em indústrias de
              equipamentos para academias, conectando captação de leads,
              definição de cliente ideal, atendimento, playbook e gestão
              comercial.
            </p>
            <p className="mt-5 leading-relaxed text-white/75">
              O diagnóstico parte da sua operação: equipe, histórico,
              oportunidades e processo atual. As recomendações são
              construídas a partir desse contexto.
            </p>
            <a href="#formulario" className={`${ctaClass} mt-8`}>
              Solicitar diagnóstico gratuito
            </a>
          </div>
        </section>

        <Formulario />
      </main>

      <footer className="bg-[#080808] px-6 py-8 text-white/65">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:justify-between">
          <span>Salesorbius — Processo comercial para indústrias B2B</span>
          <a href="mailto:contato@salesorbius.com">
            contato@salesorbius.com
          </a>
        </div>
      </footer>
    </>
  );
}
