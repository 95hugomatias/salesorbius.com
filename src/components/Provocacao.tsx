"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Provocacao() {
  return (
    <section className="bg-white py-20 md:py-[140px]" id="sobre">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-navy mb-14">
            Você construiu uma indústria sólida. O comercial é o único setor que
            ainda não <em className="italic font-bold">acompanhou</em>.
          </h2>
        </AnimatedSection>

        <div className="space-y-7 text-navy/75 text-lg leading-[1.8] text-left max-w-[620px] mx-auto">
          <AnimatedSection>
            <p>
              Olha, eu sei que sua fábrica é boa. O produto tem qualidade, tem
              diferencial técnico, e quem compra volta. Você levou anos
              construindo isso.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p>
              Mas na hora de vender, a história é outra, né? Tem mês que fecha
              bem porque apareceu uma indicação forte. Tem mês que dá um
              silêncio que aperta. Você participa de feira, investe R$ 100, 150
              mil, volta com um monte de cartão de visita... e duas semanas
              depois, ninguém ligou pra nenhum daqueles contatos.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p>
              E aquele vendedor que conhecia todo mundo? O dia que ele decidiu
              sair, levou junto o relacionamento, os contatos e meses de
              trabalho. O faturamento sentiu no trimestre seguinte.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p>
              A produção da sua fábrica funciona com processo, com ficha técnica,
              com controle de qualidade. O financeiro tem fluxo de caixa, DRE,
              tudo certinho. Agora pensa: como funciona o comercial? Na maioria
              das indústrias que eu conheço, a resposta é &ldquo;na raça e na
              indicação&rdquo;. E isso tem um custo enorme.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
