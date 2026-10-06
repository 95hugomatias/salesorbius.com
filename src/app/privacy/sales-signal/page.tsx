import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade do Sales Signal | Salesorbius",
  description:
    "Política de Privacidade aplicável ao Sales Signal e ao tratamento de dados realizado na integração com o WhatsApp Business.",
  alternates: {
    canonical: "https://www.salesorbius.com/privacy/sales-signal",
  },
};

export default function SalesSignalPrivacyPage() {
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
              Política de Privacidade
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
              Esta política explica como o Sales Signal trata dados no contexto
              da integração autorizada com contas do WhatsApp Business.
            </p>

            <p className="mt-4 text-sm text-white/40">
              Última atualização: 6 de outubro de 2026
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <article className="mx-auto max-w-4xl space-y-14 px-6 text-slate-600">
            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                1. Quem somos
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  O Sales Signal é um produto em desenvolvimento da Salesorbius,
                  operado por 60 173 095 HUGO FERNANDO MATIAS ANTONIO.
                </p>

                <p>
                  O produto foi desenvolvido para ajudar empresas a organizar
                  informações comerciais originadas de conversas realizadas
                  pelo WhatsApp Business.
                </p>

                <p>
                  Para questões relacionadas à privacidade ou tratamento de
                  dados, o contato é:
                </p>

                <p>
                  <a
                    href="mailto:contato@salesorbius.com"
                    className="font-medium text-navy underline underline-offset-4"
                  >
                    contato@salesorbius.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                2. Como ocorre a conexão com o WhatsApp Business
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  A conexão entre o Sales Signal e uma conta do WhatsApp
                  Business ocorre mediante autorização realizada pela própria
                  empresa cliente por meio dos mecanismos disponibilizados pela
                  Meta.
                </p>

                <p>
                  O Sales Signal não conecta uma conta do WhatsApp Business sem
                  a participação e autorização da empresa responsável por essa
                  conta.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                3. Dados que podem ser processados
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Dependendo da utilização do produto e das permissões
                  concedidas pela empresa cliente, o Sales Signal pode
                  processar informações relacionadas a conversas comerciais,
                  incluindo:
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>identificador do contato no WhatsApp;</li>
                  <li>nome disponibilizado pelo contato ou pela plataforma;</li>
                  <li>conteúdo textual de mensagens comerciais;</li>
                  <li>data e horário das mensagens;</li>
                  <li>direção da mensagem, como recebida ou enviada;</li>
                  <li>
                    identificadores técnicos relacionados à conta e ao número
                    do WhatsApp Business;
                  </li>
                  <li>
                    informações comerciais identificadas nas conversas, como
                    propostas, valores, etapas da negociação e retornos
                    esperados.
                  </li>
                </ul>

                <p>
                  O escopo do tratamento depende das funcionalidades habilitadas
                  e das informações efetivamente presentes nas conversas
                  processadas.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                4. Para que os dados são utilizados
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Os dados processados pelo Sales Signal são utilizados para
                  prestar o serviço contratado pela empresa cliente e organizar
                  sua operação comercial.
                </p>

                <p>Isso pode incluir:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>identificação de negociações comerciais;</li>
                  <li>organização de propostas e valores;</li>
                  <li>
                    identificação de clientes que aguardam retorno da equipe;
                  </li>
                  <li>
                    identificação de negociações em que a equipe aguarda
                    resposta do cliente;
                  </li>
                  <li>identificação de próximos passos comerciais;</li>
                  <li>organização de prioridades;</li>
                  <li>geração de informações para painéis gerenciais;</li>
                  <li>
                    apoio à análise da operação comercial da empresa cliente.
                  </li>
                </ul>

                <p>
                  Os dados não são utilizados pelo Sales Signal para enviar
                  publicidade própria aos contatos presentes nas conversas da
                  empresa cliente.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                5. Uso de inteligência artificial
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  O Sales Signal utiliza modelos de inteligência artificial
                  para interpretar o contexto comercial das mensagens e
                  transformar conversas em informações estruturadas.
                </p>

                <p>
                  A inteligência artificial pode, por exemplo, identificar que
                  um cliente solicitou uma proposta, informou um valor, prometeu
                  retornar em determinada data ou confirmou o fechamento de uma
                  negociação.
                </p>

                <p>
                  Na versão atual do produto, a inteligência artificial é
                  utilizada para análise e organização das informações. Ela não
                  responde automaticamente aos contatos e não executa ações
                  comerciais de forma autônoma.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                6. Papel da empresa cliente
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  A empresa cliente é responsável pela relação comercial com
                  seus próprios contatos e pelo uso adequado do WhatsApp
                  Business em sua operação.
                </p>

                <p>
                  Quando o Sales Signal processa informações provenientes dessa
                  operação, atua para prestar o serviço solicitado pela empresa
                  que autorizou a integração.
                </p>

                <p>
                  Cabe à empresa cliente observar as obrigações legais
                  aplicáveis à coleta, comunicação e tratamento dos dados de
                  seus clientes e contatos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                7. Compartilhamento com fornecedores de tecnologia
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Para operar o serviço, determinadas informações podem ser
                  processadas por fornecedores tecnológicos necessários ao
                  funcionamento da plataforma.
                </p>

                <p>Esses fornecedores podem incluir serviços de:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>infraestrutura e hospedagem;</li>
                  <li>banco de dados;</li>
                  <li>processamento de inteligência artificial;</li>
                  <li>segurança e monitoramento técnico;</li>
                  <li>
                    integração com a plataforma WhatsApp Business da Meta.
                  </li>
                </ul>

                <p>
                  O compartilhamento é limitado ao necessário para a execução
                  dessas funções e para a prestação do serviço.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                8. Segurança
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  O Sales Signal adota medidas técnicas e organizacionais para
                  reduzir riscos de acesso não autorizado, alteração,
                  divulgação ou perda dos dados tratados pela plataforma.
                </p>

                <p>
                  A arquitetura do sistema é desenvolvida para separar os dados
                  pertencentes a diferentes empresas clientes e limitar o
                  acesso às informações de acordo com as autorizações
                  existentes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                9. Retenção dos dados
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Os dados são mantidos pelo período necessário para a prestação
                  do serviço, cumprimento de obrigações aplicáveis, segurança
                  da plataforma e atendimento de solicitações legítimas da
                  empresa cliente.
                </p>

                <p>
                  A política de retenção poderá variar de acordo com a natureza
                  dos dados, o estágio de desenvolvimento do produto e os
                  requisitos contratuais ou legais aplicáveis.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                10. Desconexão e exclusão de dados
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  A empresa cliente pode solicitar a desconexão de sua conta do
                  WhatsApp Business e a exclusão dos dados processados pelo
                  Sales Signal, observadas eventuais obrigações legais de
                  retenção.
                </p>

                <p>
                  Solicitações podem ser encaminhadas para:
                </p>

                <p>
                  <a
                    href="mailto:contato@salesorbius.com"
                    className="font-medium text-navy underline underline-offset-4"
                  >
                    contato@salesorbius.com
                  </a>
                </p>

                <p>
                  Também será disponibilizada uma página específica com
                  instruções para solicitação de exclusão de dados.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                11. Direitos relacionados aos dados pessoais
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Titulares de dados podem exercer os direitos previstos na
                  legislação aplicável, inclusive solicitações relacionadas a
                  acesso, correção, eliminação ou informações sobre o
                  tratamento de seus dados, quando cabível.
                </p>

                <p>
                  Dependendo da natureza da solicitação, o titular poderá ser
                  orientado a entrar em contato diretamente com a empresa que
                  utiliza o Sales Signal e mantém a relação comercial com ele.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-semibold text-navy">
                12. Alterações desta política
              </h2>

              <div className="space-y-4 leading-7">
                <p>
                  Esta Política de Privacidade poderá ser atualizada para
                  refletir alterações no produto, na legislação ou nos
                  procedimentos de tratamento de dados.
                </p>

                <p>
                  A data da versão mais recente será informada no início desta
                  página.
                </p>
              </div>
            </section>

            <section className="rounded-2xl bg-offwhite p-8">
              <h2 className="mb-4 text-xl font-semibold text-navy">
                Contato
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
            </section>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
