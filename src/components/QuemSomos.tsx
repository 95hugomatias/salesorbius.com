"use client";

import { AnimatedSection } from "./AnimatedSection";

export function QuemSomos() {
  return (
    <section className="bg-white py-20 md:py-30">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] text-navy mb-12">
            A Orbius faz uma coisa só: monta processo comercial pra indústria
            B2B.
          </h2>
        </AnimatedSection>

        <div className="space-y-6 text-navy/80 text-lg leading-relaxed">
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
