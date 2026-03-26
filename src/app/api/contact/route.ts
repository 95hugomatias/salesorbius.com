import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, empresa, whatsapp, desafio } = body;

    if (!nome || !empresa || !whatsapp || !desafio) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // Option 1: Web3Forms (free, no signup needed for testing)
    // Replace YOUR_ACCESS_KEY with a real key from https://web3forms.com
    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (WEB3FORMS_KEY) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Novo lead: ${empresa}`,
          from_name: nome,
          nome,
          empresa,
          whatsapp,
          desafio,
          to: "contato@salesorbius.com",
        }),
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: "Erro ao enviar formulário." },
          { status: 500 }
        );
      }
    } else {
      // Fallback: log to console (for development)
      console.log("=== Novo Lead ===");
      console.log({ nome, empresa, whatsapp, desafio });
      console.log("=================");
      console.log(
        "Dica: Configure WEB3FORMS_ACCESS_KEY nas variáveis de ambiente para envio de email."
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
