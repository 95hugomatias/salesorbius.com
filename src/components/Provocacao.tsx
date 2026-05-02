"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const dores = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v20M7 10l7-7 7 7M7 18l7 7 7-7" stroke="#E05718" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Mês bom, mês ruim",
    description:
      "O faturamento oscila porque depende de indicação — algo que você não controla.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="#E05718" strokeWidth="1.8"/>
        <path d="M9 8V6a5 5 0 0 1 10 0v2" stroke="#E05718" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="15" r="2" fill="#E05718"/>
      </svg>
    ),
    title: "R$ 100k em feira, 3 clientes",
    description:
      "Centenas de contatos captados, sem cadência de follow-up. Os leads morrem na primeira semana.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M18 8l4 4-4 4M10 12h12" stroke="#E05718" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 20c-4.418 0-8-3.134-8-7s3.582-7 8-7" stroke="#E05718" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Vendedor saiu, levou tudo",
    description:
      "Relacionamentos, contatos e pipeline foram junto. O faturamento sentiu no trimestre seguinte.",
  },
];

export function Provocacao() {
  return (
    <section className="bg-white py-20 md:py-[140px]" id="sobre">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-navy mb-16 text-center max-w-[720px] mx-auto">
            Você construiu uma indústria sólida. O comercial é o único setor que
            ainda não <em className="italic font-bold">acompanhou</em>.
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dores.map((dor) => (
            <StaggerItem key={dor.title}>
              <div className="border border-navy/8 rounded-2xl p-8 hover:border-navy/20 hover:shadow-sm transition-all duration-500 h-full">
                <div className="mb-5">{dor.icon}</div>
                <h3 className="text-navy text-lg font-bold mb-3">{dor.title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed font-medium">
                  {dor.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <p className="text-navy/50 text-base leading-relaxed text-center mt-12 max-w-[560px] mx-auto font-medium">
            A produção funciona com processo, o financeiro tem DRE, controle de caixa.
            O comercial ainda roda <em className="italic">na raça e na indicação</em>. Isso tem um custo enorme.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
