"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const itens = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="#E05718" strokeWidth="1.5"/>
        <path d="M9 5v4l2.5 2.5" stroke="#E05718" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: "30 minutos. Sem apresentação genérica, sem pitch de vendas.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9h12M9 3l6 6-6 6" stroke="#E05718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "A gente mapeia de onde vêm seus clientes e por que isso limita o crescimento.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 14l4-4 3 3 5-6 2 2" stroke="#E05718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Identifica onde o pipeline trava e quanto isso representa em receita perdida por trimestre.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 9l4 4 6-6" stroke="#E05718" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Você sai com clareza sobre o que precisa mudar primeiro pra ver resultado rápido.",
  },
];

export function DiagnosticoCTA() {
  return (
    <section className="bg-[#080808] py-20 md:py-[140px]" id="diagnostico">
      <div className="mx-auto max-w-[680px] px-6 text-center">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-white mb-4">
            Bora conversar 30 minutos sobre a{" "}
            <em className="italic font-bold">operação comercial</em> da sua
            indústria?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-white/45 text-base font-medium mb-14 max-w-[460px] mx-auto">
            Mesmo que você decida seguir sozinho depois, essa conversa vai te dar uma visão que a maioria dos donos de indústria nunca teve.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-4 mb-14 text-left">
          {itens.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                  {item.icon}
                </div>
                <p className="text-white/65 text-base leading-relaxed font-medium pt-1">
                  {item.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.5}>
          <a
            href="#formulario"
            className="inline-block bg-white text-navy text-sm font-semibold px-10 py-4 rounded-full hover:bg-[#E05718] hover:text-white hover:border-[#E05718] border-2 border-white transition-all duration-500"
          >
            Quero o Diagnóstico Gratuito
          </a>
          <p className="text-white/25 text-xs font-medium mt-5">
            Sem compromisso. Respondo em até 24h pelo WhatsApp.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
