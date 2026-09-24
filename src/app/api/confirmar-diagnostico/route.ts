import { NextResponse } from "next/server";
import { getVariante } from "@/lib/diagnostico";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    const raw: unknown = await request.json();

    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
      throw new Error("Dados inválidos");
    }

    body = raw as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "Dados inválidos." },
      { status: 400 }
    );
  }

  const solicitacaoId = body.solicitacao_id;

  if (
    typeof solicitacaoId !== "string" ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      solicitacaoId
    )
  ) {
    return NextResponse.json(
      { error: "Identificador inválido." },
      { status: 400 }
    );
  }

  const webhook =
    process.env.MAKE_CONFIRMACAO_WEBHOOK_URL ||
    "https://hook.us1.make.com/kg2i782bn1cktyg372wv6bjn2axbkdcc";

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(20000),
      body: JSON.stringify({
        solicitacao_id: solicitacaoId,
        lp_cluster: getVariante(body.lp_cluster).slug,
        interesse_confirmado: "sim",
        data_confirmacao: new Date().toISOString(),
      }),
    });

    const result = await response.json().catch(() => null);

    // "Accepted" ou entrada na fila não comprovam atualização da planilha.
    if (
      !response.ok ||
      result?.confirmed !== true ||
      result?.solicitacao_id !== solicitacaoId ||
      typeof result?.already_confirmed !== "boolean"
    ) {
      return NextResponse.json(
        { error: "Não foi possível confirmar a atualização do cadastro." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      confirmed: true,
      already_confirmed: result.already_confirmed,
    });
  } catch {
    return NextResponse.json(
      { error: "Não foi possível concluir a confirmação agora." },
      { status: 502 }
    );
  }
}
