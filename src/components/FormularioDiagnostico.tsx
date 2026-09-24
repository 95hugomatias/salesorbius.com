"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CAMPOS, DORES, EQUIPES, PAPEIS, normalizar, validar, type Campo, type DadosDiagnostico, type Erros, type Variante } from "@/lib/diagnostico";

type Evento = "form_view" | "form_start" | "form_progress" | "form_error" | "form_submit_attempt" | "generate_lead";
function track(event: Evento, cluster: string, extra: Record<string, unknown> = {}) {
  try {
    const target = window as typeof window & { dataLayer?: Record<string, unknown>[] };
    target.dataLayer = target.dataLayer || [];
    target.dataLayer.push({
      event, form_id: "diagnostico_lp", lp_cluster: cluster,
      field_name: null, completed_fields: null, error_type: null, http_status: null,
      ...extra,
    });
  } catch { /* Analytics não deve impedir o envio. */ }
}

function ler(form: HTMLFormElement): DadosDiagnostico {
  const values = Object.fromEntries(new FormData(form).entries());
  return normalizar({ ...values, lgpd: values.lgpd === "on" });
}

function atribuicao() {
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = { page_path: window.location.pathname };
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gbraid", "wbraid"]) {
    const value = params.get(key);
    if (value) result[key] = value.slice(0, 500);
  }
  // Enviado somente à API/Make, nunca como dado pessoal no dataLayer.
  if (document.referrer) {
    try { const url = new URL(document.referrer); result.referrer = url.origin + url.pathname; } catch { /* URL inválida */ }
  }
  return result;
}

export function FormularioDiagnostico({ variante }: { variante: Variante }) {
  const formRef = useRef<HTMLFormElement>(null);
  const started = useRef(false);
  const viewed = useRef(false);
  const completed = useRef(new Set<Campo>());
  const locked = useRef(false);
  const converted = useRef(false);
  const [errors, setErrors] = useState<Erros>({});
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const element = formRef.current;
    if (!element) return;
    const show = () => { if (!viewed.current) { viewed.current = true; track("form_view", variante.slug); } };
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { show(); observer.disconnect(); }
    }, { threshold: 0 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [variante.slug]);

  function start() {
    if (!viewed.current) { viewed.current = true; track("form_view", variante.slug); }
    if (!started.current) { started.current = true; track("form_start", variante.slug); }
  }

  function progress(target: EventTarget | null) {
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
    const key = target.name as Campo;
    if (!CAMPOS.includes(key) || !formRef.current) return;
    const data = ler(formRef.current);
    const currentErrors = validar(data);
    if (!data[key] || currentErrors[key] || completed.current.has(key)) return;
    completed.current.add(key);
    track("form_progress", variante.slug, { field_name: key, completed_fields: completed.current.size });
  }

  function change(target: EventTarget | null) {
    start();
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement) || !formRef.current) return;
    const key = target.name as Campo;
    if (!CAMPOS.includes(key)) return;
    if (errors[key] && !validar(ler(formRef.current))[key]) {
      setErrors(previous => ({ ...previous, [key]: undefined }));
    }
    // Selects e checkbox têm uma mudança discreta; registre sem depender do blur.
    if (target instanceof HTMLSelectElement || target.type === "checkbox") progress(target);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (locked.current || converted.current) return;
    start();
    track("form_submit_attempt", variante.slug);
    const form = event.currentTarget;
    const data = ler(form);
    const validation = validar(data);
    setErrors(validation);
    setMessage("");
    const firstError = CAMPOS.find(key => validation[key]);
    if (firstError) {
      setMessage("Confira os campos indicados abaixo para enviar sua solicitação.");
      track("form_error", variante.slug, { error_type: "validation", field_name: firstError });
      const field = form.elements.namedItem(firstError);
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    locked.current = true;
    setSending(true);
    try {
      const response = await fetch("/api/diagnostico", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, cluster: variante.slug, atribuicao: atribuicao() }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        setMessage(response.status === 400 ? "Confira os dados preenchidos e tente novamente." : "Não foi possível confirmar o envio. Tente novamente em instantes.");
        if (result?.errors && typeof result.errors === "object") {
          const safeErrors: Erros = {};
          for (const key of CAMPOS) if (typeof result.errors[key] === "string") safeErrors[key] = result.errors[key];
          setErrors(safeErrors);
        }
        track("form_error", variante.slug, { error_type: "api", http_status: response.status });
        return;
      }
      // Guarda os dados necessários para confirmar o interesse na página de obrigado.
try {
  sessionStorage.removeItem("salesorbius_solicitacao");

  if (typeof result.solicitacao_id === "string" && result.solicitacao_id) {
    sessionStorage.setItem(
      "salesorbius_solicitacao",
      JSON.stringify({
        solicitacao_id: result.solicitacao_id,
        lp_cluster: variante.slug,
      })
    );
  }
} catch {
  // Uma restrição do navegador não deve impedir a conclusão do cadastro.
  console.warn("Não foi possível guardar os dados para a confirmação.");
}
      converted.current = true;
      setSent(true);
      // Aguarda as tags quando possível; o redirecionamento também funciona sem GTM.
      await new Promise<void>(resolve => {
        const timeout = window.setTimeout(resolve, 1800);
        track("generate_lead", variante.slug, {
          eventCallback: () => { window.clearTimeout(timeout); resolve(); }, eventTimeout: 1500,
        });
      });
      window.location.assign("/obrigado");
    } catch {
      if (!converted.current) {
        setMessage("Não foi possível confirmar o envio. Confira sua conexão e tente novamente.");
        track("form_error", variante.slug, { error_type: "network" });
      }
    } finally {
      if (!converted.current) { locked.current = false; setSending(false); }
    }
  }

  const input = "mt-2 block min-h-12 w-full rounded-xl border border-[#abb0b8] bg-white px-4 py-3 text-base text-[#171d29] focus:border-[#b83e09] focus:outline-2 focus:outline-[#b83e09] aria-[invalid=true]:border-red-700";
  const accessibility = (key: Campo) => ({ id: `diagnostico-${key}`, name: key, "aria-invalid": Boolean(errors[key]), "aria-describedby": errors[key] ? `erro-${key}` : undefined });
  const error = (key: Campo) => errors[key] ? <p id={`erro-${key}`} className="mt-2 text-sm text-red-800">{errors[key]}</p> : null;
  const select = (key: "papelComercial" | "equipeComercial" | "desafio", label: string, options: readonly string[], defaultValue = "") => (
    <div><label htmlFor={`diagnostico-${key}`} className="font-medium">{label} *</label><select {...accessibility(key)} className={input} required defaultValue={defaultValue}><option value="" disabled>Selecione</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select>{error(key)}</div>
  );

  if (sent) return <div role="status" className="rounded-2xl border border-green-700/30 bg-green-50 p-6"><h3 className="text-xl font-semibold">Recebemos sua solicitação.</h3><p className="mt-3 leading-relaxed">Nós vamos revisar as informações e entrar em contato pelo WhatsApp em até 24h. Se houver aderência, combinamos o melhor horário para o diagnóstico.</p><a href="/obrigado" className="mt-4 inline-block underline">Ver próximos passos</a></div>;

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} onChange={event => change(event.target)} onBlur={event => progress(event.target)} className="space-y-8" aria-busy={sending}>
      <p className="text-sm text-[#505867]">Os campos com * são obrigatórios.</p>
      <fieldset disabled={sending} className="space-y-5 disabled:opacity-70">
        <legend className="mb-5 text-xl font-semibold">Etapa inicial</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label htmlFor="diagnostico-nome" className="font-medium">Nome *</label><input {...accessibility("nome")} className={input} autoComplete="name" maxLength={160} required />{error("nome")}</div>
          <div><label htmlFor="diagnostico-empresa" className="font-medium">Empresa *</label><input {...accessibility("empresa")} className={input} autoComplete="organization" maxLength={160} required />{error("empresa")}</div>
          <div><label htmlFor="diagnostico-telefone" className="font-medium">WhatsApp *</label><input {...accessibility("telefone")} className={input} type="tel" autoComplete="tel-national" inputMode="tel" placeholder="DDD + número" maxLength={24} required />{error("telefone")}</div>
          <div><label htmlFor="diagnostico-email" className="font-medium">E-mail <span className="font-normal text-[#505867]">— opcional</span></label><input {...accessibility("email")} className={input} type="email" autoComplete="email" maxLength={254} />{error("email")}</div>
        </div>
      </fieldset>
      <fieldset disabled={sending} className="space-y-5 disabled:opacity-70">
        <legend className="mb-5 text-xl font-semibold">Sobre o comercial</legend>
        {(variante.setor || variante.dor) && <p className="rounded-lg bg-[#f4f2ed] p-3 text-sm leading-relaxed text-[#505867]">Algumas respostas estão sugeridas. Confira e ajuste para refletir a situação da sua empresa.</p>}
        <div><label htmlFor="diagnostico-setor" className="font-medium">Setor da indústria *</label><input {...accessibility("setor")} className={input} defaultValue={variante.setor || ""} placeholder="Ex.: metalurgia, alimentos, equipamentos" maxLength={160} required />{error("setor")}</div>
        {select("papelComercial", "Seu papel no comercial", PAPEIS)}
        {select("equipeComercial", "Quantas pessoas atuam diretamente em vendas?", EQUIPES)}
        {select("desafio", "Qual situação mais se aproxima do comercial hoje?", DORES, variante.dor)}
      </fieldset>
      <div>
        <label htmlFor="diagnostico-lgpd" className="flex items-start gap-3 text-sm leading-relaxed"><input {...accessibility("lgpd")} type="checkbox" required disabled={sending} className="mt-1 h-5 w-5 shrink-0 accent-[#b83e09]" /><span>Autorizo a Salesorbius a usar os dados informados para avaliar minha solicitação e entrar em contato sobre o diagnóstico. *</span></label>
        {error("lgpd")}
      </div>
      {message && <div role="alert" className="rounded-xl border border-red-700/30 bg-red-50 p-4 text-red-900">{message}</div>}
      <button type="submit" disabled={sending} className="min-h-12 w-full rounded-full bg-[#b83e09] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#923007] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b83e09] disabled:cursor-wait disabled:opacity-60">{sending ? "Enviando…" : variante.cta}</button>
      <p className="text-sm leading-relaxed text-[#505867]">Nós respondemos pelo WhatsApp em até 24h. Usamos seus dados para avaliar a solicitação e entrar em contato sobre o diagnóstico.</p>
    </form>
  );
}
