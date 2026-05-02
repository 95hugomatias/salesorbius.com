"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const ciclo = [
  { step: "01", title: "Abre vaga", description: "Vendas fracas. Reflexo: contratar mais um representante." },
  { step: "02", title: "Sem processo", description: "Sem CRM, sem cadência, sem critério de qualificação." },
  { step: "03", title: "Não bate meta", description: "6 meses tentando do jeito dele. Frustração dos dois lados." },
  { step: "04", title: "Sai. Repete.", description: "Você volta ao início. Custo sobe. Crescimento emperra." },
];

export function Reenquadramento() {
  return (
    <section className="bg-white py-20 md:py-[140px]" id="como-funciona">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-navy mb-4 text-center max-w-[720px] mx-auto">
            Sabe qual o erro que quase toda indústria comete? Tentar resolver
            vendas{" "}
            <em className="italic font-bold">contratando mais gente</em>.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-navy/50 text-base font-medium text-center mb-16 max-w-[480px] mx-auto">
            O ciclo se repete porque o problema não é o vendedor — é a falta de processo.
          </p>
        </AnimatedSection>

        {/* Cycle flow */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {ciclo.map((item, i) => (
            <StaggerItem key={item.step}>
              <div className="relative">
                <div className="border border-navy/10 rounded-2xl p-6 h-full hover:border-navy/20 transition-all duration-500">
                  <div className="text-[#E05718] text-xs font-bold tracking-widest uppercase mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-navy font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-navy/50 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
                {/* Arrow between cards */}
                {i < ciclo.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-6 h-6 bg-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#E05718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Resolution */}
        <AnimatedSection delay={0.4}>
          <div className="border border-navy/8 rounded-2xl p-8 md:p-10 bg-navy/[0.02] text-center max-w-[640px] mx-auto">
            <div className="text-[#E05718] text-xs font-bold tracking-widest uppercase mb-4">
              A saída do ciclo
            </div>
            <p className="text-navy/75 text-base md:text-lg leading-relaxed font-medium">
              As indústrias que crescem com consistência fizeram na ordem certa:{" "}
              <strong className="text-navy font-bold">montaram o processo antes de contratar.</strong>{" "}
              Definiram como um lead entra, é qualificado e vira proposta. Depois colocaram pessoas pra rodar.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
