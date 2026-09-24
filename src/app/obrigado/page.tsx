import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitação recebida | Salesorbius",
  description: "Entenda os próximos passos após solicitar seu diagnóstico comercial.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.salesorbius.com/obrigado" },
};

export default function ObrigadoPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#080808] px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-2xl">
        <a href="/" className="text-xl font-bold">Salesorbius<span className="text-[#ffad83]">.</span></a>
        <p className="mb-5 mt-16 text-sm font-semibold uppercase tracking-widest text-[#ffad83]">Próximos passos</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">Recebemos sua solicitação.</h1>
        <p className="mt-7 text-lg leading-relaxed text-white/80">Nós vamos revisar as informações e entrar em contato pelo WhatsApp em até 24h. Se houver aderência, combinamos o melhor horário para o diagnóstico.</p>
        <div className="mt-10 rounded-2xl border border-white/20 p-6"><h2 className="text-xl font-semibold">O que acontece agora</h2><p className="mt-3 leading-relaxed text-white/80">Hugo vai confirmar o contexto da sua operação antes do agendamento. Para a conversa, tenha em mente como sua equipe atende oportunidades e acompanha os orçamentos em aberto.</p></div>
        <a href="/" className="mt-10 inline-block rounded-full border border-white/40 px-6 py-3 hover:bg-white/10">Voltar ao site</a>
      </div>
    </main>
  );
}
