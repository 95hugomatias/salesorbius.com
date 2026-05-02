"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const pilares = [
  {
    number: "100%",
    title: "Indústria B2B",
    description:
      "Exclusivamente para quem vende pra outras empresas. Equipamentos, insumos, máquinas, componentes. Ciclo longo, ticket alto, múltiplos decisores — é o que a gente entende.",
  },
  {
    number: "90",
    suffix: "dias",
    title: "Do diagnóstico ao pipeline",
    description:
      "Começa mapeando onde trava: como seus clientes chegam, onde o pipeline para, quanto fica pra trás. Termina com processo estruturado da prospecção ao fechamento.",
  },
  {
    number: "0",
    title: "Dependência de vendedor-estrela",
    description:
      "O objetivo é que o processo funcione independente de quem executa. Metodologia, playbook, ferramentas e automação — tudo documentado e replicável.",
  },
];

export function QuemSomos() {
  return (
    <section className="bg-white py-20 md:py-[140px]" id="sobre-nos">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-navy mb-4 text-center max-w-[720px] mx-auto">
            A Salesorbius faz uma coisa só: monta{" "}
            <em className="italic font-bold">processo comercial</em> pra
            indústria B2B.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-navy/50 text-base font-medium text-center mb-16 max-w-[480px] mx-auto">
            Sem consultoria genérica. Sem metodologia de varejo adaptada. Feito pra quem vende pra indústria.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map((pilar) => (
            <StaggerItem key={pilar.title}>
              <div className="border border-navy/8 rounded-2xl p-8 hover:border-navy/20 hover:shadow-sm transition-all duration-500 h-full">
                <div className="mb-5">
                  <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-navy leading-none">
                    {pilar.number}
                  </span>
                  {pilar.suffix && (
                    <span className="text-xl font-bold text-navy/40 ml-1">
                      {pilar.suffix}
                    </span>
                  )}
                </div>
                <h3 className="text-navy font-bold text-base mb-3">{pilar.title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed font-medium">
                  {pilar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
