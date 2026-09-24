"use client";

import { useEffect, useRef, useState } from "react";

type Solicitacao = {
  solicitacao_id: string;
  lp_cluster: string;
};

const STORAGE_KEY = "salesorbius_solicitacao";

function lerSolicitacao(): Solicitacao | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const data = JSON.parse(raw);

    if (
      typeof data.solicitacao_id !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        data.solicitacao_id
      ) ||
      typeof data.lp_cluster !== "string"
    ) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

export function ConfirmarDiagnostico() {
  const locked = useRef(false);
  const [status, setStatus] = useState<
    "loading" | "ready" | "sending" | "confirmed" | "unavailable"
  >("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const data = lerSolicitacao();

    if (!data) {
      setStatus("unavailable");
      return;
    }

    try {
      const confirmed = sessionStorage.getItem(
        `salesorbius_confirmado_${data.solicitacao_id}`
      );

      setStatus(confirmed === "sim" ? "confirmed" : "ready");
    } catch {
      setStatus("ready");
    }
  }, []);

  async function confirmar() {
    if (locked.current || status !== "ready") return;

    const data = lerSolicitacao();

    if (!data) {
      setStatus("unavailable");
      return;
    }

    locked.current = true;
    setStatus("sending");
    setError("");

    let confirmed = false;

    try {
      const response = await fetch("/api/confirmar-diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      // Só confirma quando a API informa que o registro foi atualizado.
      if (!response.ok || result?.confirmed !== true) {
        throw new Error("Confirmação não concluída");
      }

      confirmed = true;
      setStatus("confirmed");

      try {
        sessionStorage.setItem(
          `salesorbius_confirmado_${data.solicitacao_id}`,
          "sim"
        );
      } catch {
        // O registro no servidor continua válido.
      }

      // Uma confirmação já registrada não gera outro evento.
      if (result.already_confirmed !== true) {
        try {
          const target = window as typeof window & {
            dataLayer?: Record<string, unknown>[];
          };

          target.dataLayer = target.dataLayer || [];
          target.dataLayer.push({
            event: "diagnostic_interest_confirmed",
            form_id: "diagnostico_lp",
            lp_cluster: data.lp_cluster,
            field_name: null,
            completed_fields: null,
            error_type: null,
            http_status: null,
          });
        } catch {
          // Falha no analytics não desfaz a confirmação.
        }
      }
    } catch {
      setError(
        "Não consegui registrar sua confirmação agora. Tente novamente em instantes. Seu cadastro já foi enviado."
      );
    } finally {
      if (!confirmed) {
        locked.current = false;
        setStatus("ready");
      }
    }
  }

  if (status === "loading") {
    return <p className="text-white/70">Preparando confirmação…</p>;
  }

  if (status === "unavailable") {
    return (
      <p className="text-sm leading-relaxed text-white/75">
        Não foi possível recuperar sua solicitação nesta aba. Se você já
        preencheu o formulário, não precisa enviar novamente. Podemos confirmar
        seu interesse durante o contato pelo WhatsApp.
      </p>
    );
  }

  if (status === "confirmed") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-white/20 bg-white/5 p-6"
      >
        <p className="text-xl font-semibold">Interesse confirmado.</p>
        <p className="mt-3 leading-relaxed text-white/80">
          Obrigado pela confirmação. Vou revisar suas respostas e entrar em
          contato pelo WhatsApp em até 24h após sua solicitação.
        </p>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={confirmar}
        disabled={status === "sending"}
        className="w-full rounded-full bg-[#b83e09] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#923007] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending"
          ? "Confirmando…"
          : "Confirmar meu interesse no diagnóstico"}
      </button>

      {error && (
        <p role="alert" className="mt-4 text-sm leading-relaxed text-red-200">
          {error}
        </p>
      )}

      <p className="mt-4 text-sm leading-relaxed text-white/65">
        A confirmação indica que você quer seguir para a conversa pelo
        WhatsApp. O horário será combinado depois dessa etapa.
      </p>
    </div>
  );
}
