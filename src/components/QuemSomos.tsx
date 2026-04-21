"use client";

import { AnimatedSection } from "./AnimatedSection";

export function QuemSomos() {
  return (
    <section className="bg-white py-20 md:py-[140px]">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-navy mb-14">
            A Salesorbius faz uma coisa só: monta{" "}
            <em className="italic font-bold">processo comercial</em> pra indústria
            B2B.
          </h2>
        </AnimatedSection>

        <div className="space-y-7 text-navy/75 text-lg leading-[1.8] text-left max-w-[620px] mx-auto">
          <AnimatedSection>
            <p>
              A gente trabalha exclusivamente com indústrias que vendem pra
              outras empresas. Equipamentos, insumos, máquinas, componentes.
              Entende ciclo longo, ticket alto, múltiplos decisores e a cultura
              industrial brasileira.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p>
              Tudo começa com um diagnóstico: como seus clientes chegam hoje,
              onde o pipeline trava, quanto de receita fica pra trás. A partir
              daí, a gente estrutura o processo inteiro, da prospecção ao
              fechamento, com metodologia, playbook, ferramentas e automação.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p>
              Em 90 dias sua indústria tem um pipeline previsível, cadências de
              prospecção rodando e um time que sabe exatamente o que fazer em
              cada etapa da venda.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
