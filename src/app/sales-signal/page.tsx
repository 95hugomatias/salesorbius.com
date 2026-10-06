import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sales Signal | Inteligência comercial para WhatsApp Business",
  description:
    "O Sales Signal organiza conversas comerciais do WhatsApp Business e transforma a operação em prioridades, negociações e visão gerencial.",
  alternates: {
    canonical: "https://www.salesorbius.com/sales-signal",
  },
};

export default function SalesSignalPage() {
  return (
    <>
      <header className="bg-navy">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.22em] text-white"
          >
            Salesorbius
          </Link>

          <a
            href="mailto:contato@salesorbius.com"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            contato@salesorbius.com
          </a>
        </div>
      </header>

      <main>
        <section className="bg-navy pb-24 pt-16 text-white md:pb-32 md:pt-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              Sales Signal
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Inteligência comercial a partir das conversas que já acontecem no
              WhatsApp Business.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
              O Sales Signal é uma ferramenta em desenvolvimento para empresas
              que realizam vendas pelo WhatsApp Business e precisam acompanhar
              negociações, prioridades e próximos passos sem depender do
              preenchimento manual de um CRM.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-orange">
                  O problema
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-navy">
                  Boa parte da operação comercial fica presa nas conversas.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-slate-600">
                <p>
                  Em muitas equipes comerciais, vendedores negociam diretamente
                  pelo WhatsApp Business. Informações como propostas enviadas,
                  retornos prometidos e negociações sem resposta acabam
                  espalhadas entre diferentes conversas.
                </p>

                <p>
                  O Sales Signal transforma essas interações em informações
                  estruturadas para que gestores tenham uma visão mais clara da
                  operação.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-offwhite py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-orange">
              Como funciona
            </p>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-navy">
              A empresa autoriza a conexão da própria conta do WhatsApp
              Business.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-7">
                <p className="mb-4 text-sm font-bold text-orange">01</p>
                <h3 className="mb-3 text-lg font-semibold text-navy">
                  Conexão autorizada
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  A própria empresa cliente autoriza a conexão da sua conta do
                  WhatsApp Business com o Sales Signal.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-7">
                <p className="mb-4 text-sm font-bold text-orange">02</p>
                <h3 className="mb-3 text-lg font-semibold text-navy">
                  Organização comercial
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  As mensagens comerciais autorizadas são analisadas para
                  identificar negociações, propostas, retornos e próximos
                  passos.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-7">
                <p className="mb-4 text-sm font-bold text-orange">03</p>
                <h3 className="mb-3 text-lg font-semibold text-navy">
                  Visão gerencial
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  O gestor visualiza prioridades, negociações em aberto,
                  clientes aguardando retorno e evolução da operação comercial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-orange">
                  Uso dos dados
                </p>

                <h2 className="text-3xl font-semibold leading-tight text-navy">
                  O acesso existe exclusivamente para prestar o serviço
                  contratado pela empresa.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-slate-600">
                <p>
                  O Sales Signal processa somente os dados necessários para
                  organizar a operação comercial autorizada pela empresa
                  cliente.
                </p>

                <p>
                  As informações são utilizadas para identificar contexto de
                  negociações, status comercial, valores, retornos esperados e
                  ações que merecem atenção da equipe.
                </p>

                <p>
                  Na versão atual, a inteligência artificial analisa e organiza
                  informações, mas não responde automaticamente aos clientes e
                  não executa ações comerciais de forma autônoma.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-offwhite py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-orange">
              Controle
            </p>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-navy">
              A empresa mantém o controle sobre a conexão e seus dados.
            </h2>

            <div className="mt-10 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
              <p>
                O acesso à conta do WhatsApp Business ocorre mediante
                autorização da própria empresa cliente.
              </p>

              <p>
                A empresa pode solicitar a desconexão do serviço e a exclusão
                dos dados processados de acordo com os procedimentos de
                privacidade disponibilizados pela Salesorbius.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy py-20 text-white md:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange">
              Produto em validação
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight">
              O Sales Signal está atualmente em fase de desenvolvimento e
              validação privada.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60">
              Para informações sobre o produto, privacidade ou tratamento de
              dados, entre em contato com a Salesorbius.
            </p>

            <a
              href="mailto:contato@salesorbius.com"
              className="mt-8 inline-flex rounded-full bg-orange px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              contato@salesorbius.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
