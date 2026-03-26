"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Hero() {
  return (
    <section className="relative bg-navy min-h-screen flex items-center pt-20">
      {/* Decorative line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />

      <div className="mx-auto max-w-4xl px-6 py-20 md:py-32 text-center relative">
        <AnimatedSection>
          <h1 className="font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] text-white mb-8">
            Sua indústria depende de indicação e de vendedor-estrela para fechar
            negócio?
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            A gente ajuda indústrias como a sua a vender todo mês com
            previsibilidade, sem ficar refém de uma pessoa ou esperando o
            telefone tocar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="#formulario"
            className="inline-block bg-white text-navy text-sm font-semibold px-8 py-4 rounded-[4px] hover:bg-navy hover:text-white border-2 border-white transition-all"
          >
            Quero o Diagnóstico Gratuito
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
