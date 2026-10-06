import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Exclusão de Dados do Sales Signal | Salesorbius",
  description:
    "Instruções para solicitar a exclusão de dados processados pelo Sales Signal.",
  alternates: {
    canonical:
      "https://www.salesorbius.com/privacy/sales-signal/data-deletion",
  },
};

export default function SalesSignalDataDeletionPage() {
  return (
    <>
      <header className="bg-navy">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.22em] text-white"
          >
            Salesorbius
          </Link>

          <Link
            href="/sales-signal"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Sales Signal
          </Link>
        </div>
      </header>

      <main className="bg-white">
        <section className="bg-navy pb-16 pt-14 text-white md:pb-20 md:pt-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-orange">
              Sales Signal
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Solicitação de exclusão de dados
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
              Esta página explica como empresas e titulares podem solicitar a
              exclusão de dados processados pelo Sales Signal.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <article className="mx-auto max-w-4xl space-y-12 px-6 text-slate-600">
            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                Como solicitar
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Para solicitar a exclusão de dados processados pelo Sales
                  Signal, envie um e-mail para:
                </p>

                <p>
                  <a
                    href="mailto:contato@salesorbius.com"
                    className="font-semibold text-navy underline underline-offset-4"
                  >
                    contato@salesorbius.com
                  </a>
                </p>

                <p>
                  Utilize no assunto do e-mail:
                </p>

                <div className="rounded-xl bg-offwhite p-5 font-medium text-navy">
                  Solicitação de exclusão de dados — Sales Signal
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                Informações necessárias
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Para conseguirmos identificar os dados relacionados à
                  solicitação, informe, quando aplicável:
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>nome da empresa que utiliza o Sales Signal;</li>
                  <li>nome da pessoa responsável pela solicitação;</li>
                  <li>e-mail de contato;</li>
                  <li>
                    número do WhatsApp relacionado à solicitação, quando
                    necessário para localizar os dados;
                  </li>
                  <li>
                    descrição dos dados ou da conta cuja exclusão está sendo
                    solicitada.
                  </li>
                </ul>

                <p>
                  Poderemos solicitar informações adicionais estritamente
                  necessárias para confirmar a identidade ou a legitimidade da
                  solicitação antes de realizar a exclusão.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                O que pode ser excluído
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Conforme o caso, a solicitação poderá abranger dados
                  processados pelo Sales Signal, como:
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>contatos armazenados pela plataforma;</li>
                  <li>mensagens processadas pelo sistema;</li>
                  <li>negociações e informações comerciais derivadas;</li>
                  <li>eventos e análises gerados pelo Sales Signal;</li>
                  <li>
                    identificadores relacionados à integração com o WhatsApp
                    Business.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                Dados que podem precisar ser mantidos
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Determinadas informações poderão ser mantidas quando isso for
                  necessário para cumprimento de obrigação legal, exercício
                  regular de direitos, segurança, prevenção de fraude ou outra
                  hipótese permitida pela legislação aplicável.
                </p>

                <p>
                  Quando isso ocorrer, os dados serão mantidos somente pelo
                  período necessário para a finalidade aplicável.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                Titulares vinculados a empresas clientes
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Quando a solicitação estiver relacionada a uma conversa
                  mantida entre um titular e uma empresa que utiliza o Sales
                  Signal, poderemos encaminhar ou coordenar a solicitação com a
                  empresa responsável pela relação comercial.
                </p>

                <p>
                  Isso ocorre porque, em determinadas situações, a empresa
                  cliente é quem define a finalidade original do tratamento dos
                  dados relacionados à sua operação comercial.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                Desconexão do WhatsApp Business
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Empresas clientes também podem solicitar a desconexão da conta
                  do WhatsApp Business utilizada com o Sales Signal.
                </p>

                <p>
                  A desconexão impede que novas informações dessa integração
                  sejam processadas pelo serviço, sem prejuízo da análise de
                  eventuais solicitações de exclusão dos dados já armazenados.
                </p>
              </div>
            </section>

            <section className="rounded-2xl bg-offwhite p-8">
              <h2 className="mb-4 text-xl font-semibold text-navy">
                Contato para privacidade
              </h2>

              <p className="leading-7">
                Salesorbius
                <br />
                Razão social: 60 173 095 HUGO FERNANDO MATIAS ANTONIO
                <br />
                E-mail:{" "}
                <a
                  href="mailto:contato@salesorbius.com"
                  className="font-medium text-navy underline underline-offset-4"
                >
                  contato@salesorbius.com
                </a>
              </p>

              <p className="mt-5 text-sm leading-6">
                Consulte também a{" "}
                <Link
                  href="/privacy/sales-signal"
                  className="font-medium text-navy underline underline-offset-4"
                >
                  Política de Privacidade do Sales Signal
                </Link>
                .
              </p>
            </section>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
