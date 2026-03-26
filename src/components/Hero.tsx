"use client";

import { AnimatedSection } from "./AnimatedSection";

export function Hero() {
  return (
    <section className="relative bg-navy min-h-screen flex items-center justify-center pt-24">
      <div className="mx-auto max-w-[720px] px-6 py-20 md:py-36 text-center relative">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2.5 border border-white/20 rounded-full px-5 py-2.5 mb-10">
            <span className="text-white/60 text-xs">●</span>
            <span className="text-white/70 text-sm font-medium tracking-wide">
              Processo Comercial para Indústrias B2B
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.15] text-white mb-8">
            Sua indústria depende de indicação e de{" "}
            <em className="italic font-bold">vendedor-estrela</em> para fechar
            negócio?
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-[620px] mx-auto mb-12 font-normal">
            A gente ajuda indústrias como a sua a vender todo mês com
            previsibilidade, sem ficar refém de uma pessoa ou esperando o
            telefone tocar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="#formulario"
            className="inline-block bg-white text-navy text-sm font-semibold px-10 py-4 rounded-full hover:bg-navy hover:text-white border-2 border-white transition-all duration-300"
          >
            Quero o Diagnóstico Gratuito
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
