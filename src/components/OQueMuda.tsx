"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const beneficios = [
  {
    title: "Pipeline visual, todo dia",
    description:
      "Reuniões marcadas, propostas enviadas, receita prevista. Você sabe o que vem antes de abrir o e-mail.",
  },
  {
    title: "Vendedor novo produzindo em 30 dias",
    description:
      "Playbook completo: como prospectar, qualificar, conduzir e fechar. Ninguém reinventa a roda.",
  },
  {
    title: "Prospecção rodando toda semana",
    description:
      "LinkedIn, e-mail, WhatsApp em cadência — gerando reuniões com quem realmente precisa do seu produto.",
  },
  {
    title: "O processo é da fábrica, não do vendedor",
    description:
      "Alguém sai? CRM preenchido, cadências ativas, leads não somem. Igual sua linha de produção.",
  },
];

export function OQueMuda() {
  return (
    <section className="bg-navy py-20 md:py-[140px]">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-white mb-4 text-center max-w-[720px] mx-auto">
            Imagina abrir o computador na segunda-feira e saber exatamente
            quantas vendas <em className="italic font-bold">vêm esse mês</em>.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-white/45 text-base font-medium text-center mb-16 max-w-[480px] mx-auto">
            Com processo estruturado, isso deixa de ser sorte e vira rotina.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {beneficios.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex items-start gap-5 border border-white/8 rounded-2xl p-7 hover:border-white/15 transition-all duration-500 h-full">
                {/* Check icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E05718]/15 flex items-center justify-center mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3.5 3.5 5.5-6" stroke="#E05718" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
