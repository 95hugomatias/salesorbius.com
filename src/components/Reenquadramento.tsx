"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Reenquadramento() {
  return (
    <section className="bg-white py-20 md:py-[140px]" id="como-funciona">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-navy mb-14">
            Sabe qual o erro que quase toda indústria comete? Tentar resolver
            vendas <em className="italic font-bold">contratando mais gente</em>.
          </h2>
        </AnimatedSection>

        <div className="space-y-7 text-navy/75 text-lg leading-[1.8] text-left max-w-[620px] mx-auto">
          <AnimatedSection>
            <p>
              Eu vejo isso o tempo todo. A venda não tá boa, o reflexo é abrir
              vaga: &ldquo;preciso de um vendedor com carteira&rdquo;,
              &ldquo;preciso de mais um representante&rdquo;.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p>
              Aí o cara entra. Não tem cadência definida, não tem CRM
              funcionando, não tem critério claro do que é um lead bom. Ele faz
              do jeito dele durante uns 6 meses, não consegue bater meta de
              forma consistente, fica frustrado e vai embora.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p>
              Você contrata outro. O ciclo repete. O custo sobe. O crescimento
              emperra.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p>
              As indústrias que saíram desse ciclo fizeram algo na ordem certa:
              construíram o processo antes de contratar gente. Definiram como um
              lead entra no radar, como é qualificado, quando recebe proposta,
              como funciona o follow-up. Montaram o sistema primeiro. Aí sim
              colocaram pessoas pra rodar.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
