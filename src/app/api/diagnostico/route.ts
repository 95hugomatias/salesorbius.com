import { NextResponse } from "next/server";
import { getVariante, normalizar, validar } from "@/lib/diagnostico";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const raw: unknown = await request.json();
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw new Error("Invalid body");
    body = raw as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }
  const data = normalizar(body);
  const errors = validar(data);
  if (Object.keys(errors).length) return NextResponse.json({ error: "Confira os campos indicados.", errors }, { status: 400 });

  const attribution: Record<string, string> = {};
  if (body.atribuicao && typeof body.atribuicao === "object" && !Array.isArray(body.atribuicao)) {
    const source = body.atribuicao as Record<string, unknown>;
    for (const key of ["page_path", "referrer", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gbraid", "wbraid"]) {
      if (typeof source[key] === "string") attribution[key] = source[key].slice(0, 500);
    }
  }
  const now = new Date();
  const solicitacaoId = randomUUID();
  const webhook = process.env.MAKE_DIAGNOSTICO_WEBHOOK_URL || "https://hook.us1.make.com/4lhdoebay1rnifpiifzh9524oosdxrx2";
  try {
    const result = await fetch(webhook, {
      method: "POST", headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        solicitacao_id: solicitacaoId,
interesse_confirmado: "pendente",
        nome: data.nome, telefone: data.telefone.replace(/\D/g, ""), email: data.email,
        empresa: data.empresa, setor: data.setor, desafio: data.desafio,
        papel_comercial: data.papelComercial, pessoas_vendas: data.equipeComercial,
        formulario: "diagnostico_lp", cluster: getVariante(body.cluster).slug,
        lgpd: data.lgpd, consentimento_em: now.toISOString(), consentimento_versao: "diagnostico-2026-09-24",
        data_conversao: now.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        hora_conversao: now.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour12: false }),
        atribuicao: attribution,
      }),
    });
    if (!result.ok) {
      console.error("Falha no webhook do diagnóstico:", result.status);
      return NextResponse.json({ error: "Não foi possível confirmar o envio." }, { status: 502 });
    }
    return NextResponse.json({
  success: true,
  solicitacao_id: solicitacaoId,
  cluster: getVariante(body.cluster).slug,
});
  } catch {
    console.error("Falha de conexão com o webhook do diagnóstico.");
    return NextResponse.json({ error: "Não foi possível confirmar o envio." }, { status: 502 });
  }
}
