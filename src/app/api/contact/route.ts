import { NextResponse } from "next/server";

const FREE_EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "yahoo.com.br", "hotmail.com", "hotmail.com.br",
  "outlook.com", "outlook.com.br", "live.com", "aol.com", "icloud.com",
  "protonmail.com", "mail.com", "zoho.com", "yandex.com", "gmx.com",
  "uol.com.br", "bol.com.br", "terra.com.br", "ig.com.br", "globo.com",
  "r7.com", "zipmail.com.br",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nome, telefone, email, empresa, site,
      faturamento, funcionarios, setor, desafio, comoConheceu, lgpd,
    } = body;

    // Required field validation
    if (!nome || !telefone || !email || !empresa || !faturamento || !funcionarios || !setor || !desafio || !comoConheceu) {
      return NextResponse.json(
        { error: "Todos os campos obrigatórios devem ser preenchidos." },
        { status: 400 }
      );
    }

    // Email domain validation
    const emailDomain = email.split("@")[1]?.toLowerCase();
    if (FREE_EMAIL_DOMAINS.includes(emailDomain)) {
      return NextResponse.json(
        { error: "Use seu e-mail corporativo." },
        { status: 400 }
      );
    }

    // Phone validation (10-11 digits)
    const phoneDigits = telefone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return NextResponse.json(
        { error: "Telefone inválido." },
        { status: 400 }
      );
    }

    // LGPD consent
    if (!lgpd) {
      return NextResponse.json(
        { error: "Consentimento LGPD é obrigatório." },
        { status: 400 }
      );
    }

    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (WEB3FORMS_KEY) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Novo lead: ${empresa} — ${setor}`,
          from_name: nome,
          nome,
          telefone,
          email,
          empresa,
          site: site || "(não informado)",
          setor,
          faturamento,
          funcionarios,
          desafio,
          como_conheceu: comoConheceu,
          lgpd_aceito: "Sim",
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
      console.log("=== Novo Lead ===");
      console.log({
        nome, telefone, email, empresa, site,
        setor, faturamento, funcionarios, desafio, comoConheceu,
      });
      console.log("=================");
      console.log("Dica: Configure WEB3FORMS_ACCESS_KEY nas variáveis de ambiente.");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
