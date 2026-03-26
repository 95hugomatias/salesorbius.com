"use client";

import { AnimatedSection } from "./AnimatedSection";

export function OQueMuda() {
  return (
    <section className="bg-navy py-20 md:py-30">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] text-white mb-12">
            Imagina abrir o computador na segunda-feira e saber exatamente
            quantas vendas vêm esse mês.
          </h2>
        </AnimatedSection>

        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
          <AnimatedSection>
            <p>
              O pipeline tá ali, visual, atualizado. Você sabe quantas reuniões
              estão marcadas, quantas propostas foram enviadas, quanto de receita
              tá previsto pra cair.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p>
              Entra um vendedor novo e em 30 dias ele já tá produzindo. Porque
              existe um playbook que ensina cada etapa: como prospectar, como
              qualificar, como conduzir a conversa, como responder quando o
              cliente diz &ldquo;tá caro&rdquo;. Ninguém precisa reinventar a
              roda.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p>
              A prospecção roda toda semana gerando reuniões com gente que
              realmente precisa do seu produto. LinkedIn, email, WhatsApp, tudo
              numa cadência que funciona independente de quem executa.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p>
              E quando alguém sai da equipe, o conhecimento fica na empresa. O
              CRM tá preenchido, as cadências continuam, os leads não somem.
              Funciona igual sua linha de produção: o processo é da fábrica, não
              do operador.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
