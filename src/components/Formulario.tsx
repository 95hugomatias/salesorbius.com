"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "./AnimatedSection";

const options = [
  "Dependo de indicação para vender",
  "Perdi vendedor e senti no faturamento",
  "Invisto em feira mas não converto",
  "Quero crescer e o comercial não acompanha",
  "Outro",
];

export function Formulario() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      desafio: (form.elements.namedItem("desafio") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-white py-20 md:py-[140px]" id="formulario">
      <div className="mx-auto max-w-xl px-6 text-center">
        <AnimatedSection>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.2] text-navy mb-14">
            Me conta um pouco sobre sua{" "}
            <em className="italic font-bold">indústria</em>
          </h2>
        </AnimatedSection>

        {status === "sent" ? (
          <AnimatedSection>
            <div className="border border-navy/15 rounded-2xl p-14 text-center">
              <p className="text-navy text-xl font-semibold mb-3">
                Mensagem enviada!
              </p>
              <p className="text-navy/50 font-medium">
                Respondo em até 24h pelo WhatsApp.
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome"
                  className="w-full border border-navy/15 bg-white text-navy placeholder:text-navy/35 px-6 py-4 rounded-full text-base font-medium transition-all duration-300 focus:border-navy focus:shadow-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="empresa"
                  required
                  placeholder="Nome da empresa"
                  className="w-full border border-navy/15 bg-white text-navy placeholder:text-navy/35 px-6 py-4 rounded-full text-base font-medium transition-all duration-300 focus:border-navy focus:shadow-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="WhatsApp"
                  className="w-full border border-navy/15 bg-white text-navy placeholder:text-navy/35 px-6 py-4 rounded-full text-base font-medium transition-all duration-300 focus:border-navy focus:shadow-sm"
                />
              </div>

              <div>
                <select
                  name="desafio"
                  required
                  defaultValue=""
                  className="w-full border border-navy/15 bg-white text-navy px-6 py-4 rounded-full text-base font-medium transition-all duration-300 focus:border-navy focus:shadow-sm appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230f1a2b' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 24px center",
                  }}
                >
                  <option value="" disabled>
                    O que mais trava suas vendas hoje?
                  </option>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-navy text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-navy border-2 border-navy transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Enviando..." : "Quero o Diagnóstico"}
                </button>
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm text-center font-medium">
                  Erro ao enviar. Tente novamente ou envie email para
                  contato@salesorbius.com
                </p>
              )}

              <p className="text-navy/35 text-sm text-center font-medium pt-1">
                Respondo em até 24h pelo WhatsApp.
              </p>
            </form>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
