"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

function useCounter(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  {
    prefix: "R$",
    value: 200,
    suffix: "k+",
    label: "custo médio de perder um vendedor",
    context:
      "Salário, comissão, treinamento e o pipeline que saiu junto. Você volta à estaca zero.",
  },
  {
    prefix: "",
    value: 80,
    suffix: "%",
    label: "dos leads de feira morrem sem follow-up",
    context:
      "300 contatos captados. Sem cadência definida, a maioria esfria na primeira semana.",
  },
  {
    prefix: "",
    value: 3,
    suffix: "x",
    label: "mais rápido cresce quem tem processo",
    context:
      "Concorrente com produto pior crescendo mais. A diferença é um jeito organizado de vender.",
  },
];

export function CustoReal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const c0 = useCounter(stats[0].value, 1400, isInView);
  const c1 = useCounter(stats[1].value, 1600, isInView);
  const c2 = useCounter(stats[2].value, 800, isInView);
  const counts = [c0, c1, c2];

  return (
    <section className="bg-[#080808] py-20 md:py-[140px]">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-white mb-16 text-center max-w-[720px] mx-auto">
            Cada mês sem processo é receita que fica{" "}
            <em className="italic font-bold">na mesa</em>.
          </h2>
        </AnimatedSection>

        <div ref={ref}>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <div className="border border-white/8 rounded-2xl p-8 md:p-10 text-center hover:border-white/15 transition-all duration-500 h-full flex flex-col">
                <div className="text-[clamp(3rem,6vw,4.5rem)] font-bold text-white leading-none mb-3 tabular-nums">
                  {stat.prefix}
                  {counts[i]}
                  {stat.suffix}
                </div>
                <div className="text-[#E05718] text-xs font-semibold uppercase tracking-widest mb-4">
                  {stat.label}
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-medium mt-auto">
                  {stat.context}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
