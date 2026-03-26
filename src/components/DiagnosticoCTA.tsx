"use client";

import { AnimatedSection } from "./AnimatedSection";

export function DiagnosticoCTA() {
  return (
    <section className="bg-navy py-20 md:py-[140px]" id="diagnostico">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-white mb-14">
            Bora conversar 30 minutos sobre a{" "}
            <em className="italic font-bold">operação comercial</em> da sua
            indústria?
          </h2>
        </AnimatedSection>

        <div className="space-y-7 text-white/60 text-lg leading-[1.8] text-left max-w-[620px] mx-auto">
          <AnimatedSection>
            <p>
              Sem apresentação genérica. Sem pitch de vendas. Uma conversa direta
              onde a gente analisa juntos como tá funcionando o comercial da sua
              empresa agora.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p>
              Eu olho de onde vêm seus clientes e por que isso limita o
              crescimento. A gente identifica onde o pipeline trava, se é na
              prospecção, na qualificação ou no fechamento. Discute quanto isso
              representa em receita perdida por trimestre. E você sai com clareza
              sobre o que precisa mudar primeiro pra ver resultado rápido.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p>
              Mesmo que você decida seguir sozinho depois, esses 30 minutos vão
              te dar uma visão que a maioria dos donos de indústria nunca teve
              sobre a própria operação de vendas.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.25}>
          <div className="mt-14 text-center">
            <a
              href="#formulario"
              className="inline-block bg-white text-navy text-sm font-semibold px-10 py-4 rounded-full hover:bg-navy hover:text-white border-2 border-white transition-all duration-300"
            >
              Quero o Diagnóstico Gratuito
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
