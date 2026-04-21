"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "./AnimatedSection";

const desafioOptions = [
  "Dependo de indicação para vender",
  "Perdi vendedor e senti no faturamento",
  "Invisto em feira mas não converto",
  "Quero crescer e o comercial não acompanha",
  "Outro",
];

const faturamentoOptions = [
  "Até R$ 499 mil/ano",
  "R$ 500 mil a R$ 900 mil/ano",
  "R$ 1 a R$ 1,9 milhão/ano",
  "R$ 2 a R$ 4 milhões/ano",
  "R$ 5 a R$ 9 milhões/ano",
  "R$ 10 a R$ 19 milhões/ano",
  "R$ 20 a R$ 49 milhões/ano",
  "Acima de R$ 50 milhões/ano",
];

const funcionariosOptions = [
  "1 a 10 funcionários",
  "11 a 35 funcionários",
  "36 a 50 funcionários",
  "51 a 100 funcionários",
  "101 a 500 funcionários",
  "Acima de 500 funcionários",
];

const comoConheceuOptions = [
  "Indicação",
  "E-mail",
  "Redes Sociais (Instagram, Facebook, Youtube)",
  "Pesquisa no Google",
  "LinkedIn",
];

const setorOptions = [
  "Metalurgia / Siderurgia / Fundição",
  "Máquinas e Equipamentos Industriais / Automação / Ferramentaria",
  "Plásticos / Borracha / Embalagens",
  "Químico / Petroquímico / Tintas e Resinas",
  "Alimentos e Bebidas / Laticínios / Frigoríficos",
  "Têxtil / Confecção / Calçados",
  "Papel e Celulose / Gráfica / Impressão",
  "Eletrônico / Eletroeletrônico / Componentes",
  "Automotivo / Autopeças / Veículos Especiais",
  "Construção Civil / Materiais de Construção / Cerâmica",
  "Móveis / Madeira / Decoração",
  "Farmacêutico / Cosmético / Higiene",
  "Agro-industrial / Fertilizantes / Defensivos",
  "Energia / Solar / Equipamentos Elétricos",
  "Outro",
];

const FREE_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "yahoo.com.br", "hotmail.com", "hotmail.com.br",
  "outlook.com", "outlook.com.br", "live.com", "aol.com", "icloud.com",
  "protonmail.com", "mail.com", "zoho.com", "yandex.com", "gmx.com",
  "uol.com.br", "bol.com.br", "terra.com.br", "ig.com.br", "globo.com",
  "r7.com", "zipmail.com.br",
];

function validateEmail(email: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "E-mail inválido.";
  const domain = email.split("@")[1]?.toLowerCase();
  if (FREE_EMAIL_DOMAINS.includes(domain)) {
    return "Use seu e-mail corporativo (não aceitamos Gmail, Hotmail, etc).";
  }
  return null;
}

function validatePhone(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11) {
    return "Telefone inválido. Inclua o DDD + número (ex: 11 99999-9999).";
  }
  return null;
}

function validateSite(site: string): string | null {
  if (!site) return null;
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;
  if (!urlRegex.test(site)) {
    return "URL inválida. Ex: www.suaempresa.com.br";
  }
  return null;
}

function phoneMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const inputClass =
  "w-full border border-navy/15 bg-white text-navy placeholder:text-navy/35 px-6 py-4 rounded-full text-base font-medium transition-all duration-300 focus:border-navy focus:shadow-sm focus:outline-none";

const selectClass =
  "w-full border border-navy/15 bg-white text-navy px-6 py-4 rounded-full text-base font-medium transition-all duration-300 focus:border-navy focus:shadow-sm appearance-none focus:outline-none";

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230f1a2b' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 24px center",
};

const errorClass = "text-red-500 text-xs font-medium mt-1.5 ml-4";

export function Formulario() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [phone, setPhone] = useState("");
  const [lgpd, setLgpd] = useState(false);

  function validateAll(form: HTMLFormElement): Record<string, string> {
    const errs: Record<string, string> = {};

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const emailErr = validateEmail(email);
    if (emailErr) errs.email = emailErr;

    const phoneErr = validatePhone(phone);
    if (phoneErr) errs.telefone = phoneErr;

    const site = (form.elements.namedItem("site") as HTMLInputElement).value;
    const siteErr = validateSite(site);
    if (siteErr) errs.site = siteErr;

    if (!lgpd) errs.lgpd = "Você precisa aceitar os termos para continuar.";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const validationErrors = validateAll(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    const data = {
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value,
      telefone: phone,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      empresa: (form.elements.namedItem("empresa") as HTMLInputElement).value,
      site: (form.elements.namedItem("site") as HTMLInputElement).value,
      faturamento: (form.elements.namedItem("faturamento") as HTMLSelectElement).value,
      funcionarios: (form.elements.namedItem("funcionarios") as HTMLSelectElement).value,
      setor: (form.elements.namedItem("setor") as HTMLSelectElement).value,
      desafio: (form.elements.namedItem("desafio") as HTMLSelectElement).value,
      comoConheceu: (form.elements.namedItem("comoConheceu") as HTMLSelectElement).value,
      lgpd: true,
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
        setPhone("");
        setLgpd(false);
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
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome *"
                  className={inputClass}
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="telefone"
                  required
                  placeholder="Telefone com DDD *"
                  value={phone}
                  onChange={(e) => {
                    setPhone(phoneMask(e.target.value));
                    if (errors.telefone) setErrors((p) => ({ ...p, telefone: "" }));
                  }}
                  className={inputClass}
                />
                {errors.telefone && <p className={errorClass}>{errors.telefone}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail corporativo *"
                  onChange={() => {
                    if (errors.email) setErrors((p) => ({ ...p, email: "" }));
                  }}
                  className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="empresa"
                  required
                  placeholder="Nome da empresa *"
                  className={inputClass}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="site"
                  placeholder="Site da empresa (opcional)"
                  onChange={() => {
                    if (errors.site) setErrors((p) => ({ ...p, site: "" }));
                  }}
                  className={inputClass}
                />
                {errors.site && <p className={errorClass}>{errors.site}</p>}
              </div>

              <div>
                <select
                  name="setor"
                  required
                  defaultValue=""
                  className={selectClass}
                  style={selectStyle}
                >
                  <option value="" disabled>Setor da indústria *</option>
                  {setorOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="faturamento"
                  required
                  defaultValue=""
                  className={selectClass}
                  style={selectStyle}
                >
                  <option value="" disabled>Faturamento anual da empresa *</option>
                  {faturamentoOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="funcionarios"
                  required
                  defaultValue=""
                  className={selectClass}
                  style={selectStyle}
                >
                  <option value="" disabled>Quantidade de funcionários *</option>
                  {funcionariosOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="desafio"
                  required
                  defaultValue=""
                  className={selectClass}
                  style={selectStyle}
                >
                  <option value="" disabled>O que mais trava suas vendas hoje? *</option>
                  {desafioOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="comoConheceu"
                  required
                  defaultValue=""
                  className={selectClass}
                  style={selectStyle}
                >
                  <option value="" disabled>Como nos conheceu? *</option>
                  {comoConheceuOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={lgpd}
                    onChange={(e) => {
                      setLgpd(e.target.checked);
                      if (errors.lgpd) setErrors((p) => ({ ...p, lgpd: "" }));
                    }}
                    className="mt-1 h-4 w-4 rounded border-navy/30 accent-navy flex-shrink-0"
                  />
                  <span className="text-navy/50 text-xs leading-relaxed">
                    Ao enviar este formulário, autorizo a Salesorbius a entrar em contato
                    comigo por telefone, e-mail ou WhatsApp para fins exclusivamente
                    comerciais. Seus dados não serão compartilhados com terceiros e
                    serão tratados conforme a Lei Geral de Proteção de Dados (LGPD —
                    Lei nº 13.709/2018). Você pode solicitar a exclusão dos seus dados
                    a qualquer momento pelo e-mail contato@salesorbius.com.
                  </span>
                </label>
                {errors.lgpd && <p className={errorClass}>{errors.lgpd}</p>}
              </div>

              <div className="pt-3">
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
