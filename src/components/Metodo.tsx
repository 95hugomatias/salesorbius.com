"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const etapas = [
  {
    numero: "01",
    prazo: "Semanas 1–2",
    titulo: "Diagnóstico e Construção do ICP",
    descricao:
      "Antes de prospectar qualquer um, a gente entende quem são seus melhores compradores — não só quem compra, mas quem compra com mais facilidade e tem resultados de verdade. Mapeamos padrões: setor, porte, perfil decisor, gatilhos de compra. O resultado é um ICP documentado que guia toda a prospecção.",
    entregas: ["Mapeamento dos melhores compradores", "ICP documentado", "Lista de alvos prioritários"],
  },
  {
    numero: "02",
    prazo: "Semanas 3–6",
    titulo: "Montagem e Operacionalização da Equipe",
    descricao:
      "Com o ICP definido, montamos a estrutura que vai fazer o processo rodar. CRM configurado pro ciclo de venda da sua indústria, playbook com cada etapa documentada, cadências de prospecção ativas no LinkedIn, e-mail e WhatsApp, e treinamento do time no novo processo.",
    entregas: ["CRM configurado", "Playbook completo", "Cadências ativas", "Treinamento do time"],
  },
  {
    numero: "03",
    prazo: "Semanas 7–12",
    titulo: "Otimização do Funil",
    descricao:
      "Com o funil rodando, analisamos cada etapa: onde os leads travam, o que atrasa o fechamento, quais abordagens convertem mais. Ajustamos cadências, scripts e critérios de qualificação com base no que os dados mostram. E treinamos o time nas lacunas que aparecem na prática.",
    entregas: ["Análise de conversão por etapa", "Ajustes de cadência e script", "Treinamento contínuo"],
  },
];

export function Metodo() {
  return (
    <section className="bg-white py-20 md:py-[140px]" id="metodo">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16 max-w-[720px] mx-auto">
            <div className="inline-flex items-center gap-2 border border-navy/12 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#E05718] text-xs font-bold tracking-widest uppercase">
                Como funciona
              </span>
            </div>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-navy">
              Método{" "}
              <em className="italic font-bold">Sales Orbius</em>
            </h2>
            <p className="text-navy/50 text-base font-medium mt-4 max-w-[480px] mx-auto">
              Três etapas em 90 dias. Do diagnóstico ao funil otimizado e rodando.
            </p>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-navy/8 z-0" />

          {etapas.map((etapa) => (
            <StaggerItem key={etapa.numero}>
              <div className="relative z-10 h-full flex flex-col">

                {/* Step number bubble */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-full border-2 border-navy/12 bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-[#E05718] text-xs font-bold tracking-wider">
                      {etapa.numero}
                    </span>
                  </div>
                  <span className="text-navy/30 text-xs font-semibold uppercase tracking-widest">
                    {etapa.prazo}
                  </span>
                </div>

                {/* Card */}
                <div className="border border-navy/8 rounded-2xl p-7 hover:border-navy/20 hover:shadow-sm transition-all duration-500 flex flex-col flex-1">
                  <h3 className="text-navy font-bold text-lg leading-snug mb-4">
                    {etapa.titulo}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed font-medium mb-6 flex-1">
                    {etapa.descricao}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-5 border-t border-navy/6">
                    {etapa.entregas.map((entrega) => (
                      <div key={entrega} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#E05718]/10 flex items-center justify-center flex-shrink-0">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4l2 2 3-3" stroke="#E05718" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-navy/50 text-xs font-semibold">{entrega}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
