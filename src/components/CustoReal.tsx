"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const stats = [
  { value: "R$ 200k+", label: "custo médio de perder um vendedor" },
  { value: "80%", label: "dos leads de feira morrem sem follow-up" },
  { value: "3x", label: "mais rápido cresce quem tem processo" },
];

export function CustoReal() {
  return (
    <section className="bg-navy py-20 md:py-[140px]">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-white mb-14">
            Cada mês sem processo é receita que fica{" "}
            <em className="italic font-bold">na mesa</em>.
          </h2>
        </AnimatedSection>

        <div className="space-y-7 text-white/60 text-lg leading-[1.8] text-left max-w-[620px] mx-auto">
          <AnimatedSection>
            <p>Vou te dar uns números pra você sentir o tamanho do problema.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p>
              Aquele vendedor que ficou 12 meses e foi embora? Conta o salário, a
              comissão, o tempo de treinamento e todo o pipeline que saiu junto.
              Facilmente uns R$ 200 mil perdidos. E você volta pra estaca zero,
              procurando o próximo.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p>
              A feira do ano passado gerou 300 contatos. Sem uma cadência de
              follow-up, 80% desses leads morreram na primeira semana. Aquele
              investimento de R$ 100 mil rendeu uma fração do que podia.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p>
              Talvez você até contratou uma agência de marketing. Ela gera leads,
              mas aí os leads chegam e ninguém sabe direito o que fazer com eles.
              Ficam ali, esfriando, enquanto o custo por cliente sobe.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p>
              E enquanto isso acontece, tem concorrente crescendo mais rápido.
              Talvez com produto até pior que o seu. Mas com algo que faz toda a
              diferença: um jeito organizado de transformar desconhecidos em
              clientes toda semana.
            </p>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {stats.map((stat) => (
            <StaggerItem key={stat.value}>
              <div className="border border-white/10 rounded-2xl p-10 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {stat.value}
                </div>
                <div className="text-white/45 text-sm font-medium">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
