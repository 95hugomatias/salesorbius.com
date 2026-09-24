import type { Metadata } from "next";
import { ConfirmarDiagnostico } from "@/components/ConfirmarDiagnostico";

export const metadata: Metadata = {
  title: "Solicitação recebida | Salesorbius",
  description:
    "Uma mensagem de Hugo Matias sobre seu diagnóstico comercial e os próximos passos.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.salesorbius.com/obrigado",
  },
};

const sectionTitle = "mb-5 text-2xl font-semibold leading-tight md:text-3xl";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-6 py-12 text-white md:py-20">
      <article className="mx-auto max-w-2xl">
        <a href="/" className="text-xl font-bold">
          Salesorbius<span className="text-[#ffad83]">.</span>
        </a>

        <header className="mb-10 mt-14">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#ffad83]">
            Solicitação recebida
          </p>

          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Antes de conversarmos, quero me apresentar.
          </h1>
        </header>

        <div className="space-y-6 text-lg leading-relaxed text-white/80">
          <p>
            Para muitas empresas, o trabalho do anúncio termina quando alguém
            preenche o formulário. O contato entra numa lista e a equipe
            comercial assume dali.
          </p>

          <p>
            Aqui na Salesorbius, quem vai ler suas respostas, falar com você
            pelo WhatsApp e conduzir o diagnóstico sou eu.
          </p>

          <p>
            Por isso, quero explicar o que você pode esperar da nossa conversa
            e o que vou precisar de você.
          </p>

          <p>
            Meu nome é Hugo Matias. Tenho 31 anos, sou casado com a Amanda e
            temos dois filhos, Benjamin e Saulo. Hoje moramos em Bobbio, uma
            pequena cidade na Itália. Viemos buscando qualidade de vida e
            segurança para nossa família.
          </p>

          <p>
            Continuo trabalhando com empresas brasileiras. Nos últimos dez
            anos, construí minha carreira em marketing e vendas. Nos projetos
            com indústrias, meu trabalho passou por captação de clientes,
            atendimento, implantação de CRM, playbook e acompanhamento da
            equipe comercial.
          </p>

          <p>
            Foi acompanhando o dia a dia dos vendedores e conversando com os
            donos que comecei a entender por que tantas oportunidades acabam
            sem uma venda.
          </p>

          <p>
            Às vezes, o contato chega e demora a receber uma resposta. Em
            outras, o vendedor envia o orçamento sem entender direito o que o
            cliente precisa. Depois, ninguém sabe quando voltar a falar com ele.
          </p>

          <p>
            No fim do mês, aparece a pergunta: precisamos de mais contatos ou
            estamos deixando de vender para quem já nos procurou?
          </p>

          <p>É esse tipo de situação que quero entender com você.</p>
        </div>

        <section className="mt-12">
          <h2 className={sectionTitle}>O que vamos fazer no diagnóstico</h2>

          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>Vamos olhar para a forma como sua empresa vende hoje.</p>

            <p>
              De onde vêm os pedidos de orçamento? Quem atende? Como o
              vendedor conduz a conversa? O que acontece depois que a proposta
              é enviada? Como você acompanha o que ainda pode fechar?
            </p>

            <p>
              Você provavelmente já tem uma opinião sobre o que está
              atrapalhando. Quero ouvir essa opinião e olhar com você para os
              exemplos que ajudam a entender o problema.
            </p>

            <p>
              Se sua indústria recebe muitos contatos e vende pouco, vamos
              observar tanto o perfil de quem chega quanto o atendimento que
              essas pessoas recebem.
            </p>

            <p>
              Se a saída de um vendedor afetou o faturamento, vamos entender
              como estavam distribuídos a carteira, o histórico dos clientes
              e as responsabilidades.
            </p>

            <p>
              Se existem muitos orçamentos sem resposta, vamos revisar como
              foram preparados e o que aconteceu depois do envio.
            </p>

            <p>
              Em cerca de 45 minutos, podemos identificar pontos que merecem
              atenção e discutir por onde começar. Algumas questões vão
              precisar de mais informações antes de qualquer recomendação.
              Quando isso acontecer, vou dizer o que falta saber.
            </p>

            <p className="border-l-2 border-[#ffad83] pl-5 text-white">
              Meu compromisso é que você saia entendendo o que considero
              prioritário, por quê e qual próximo passo faz sentido para sua
              empresa.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className={sectionTitle}>De onde vem essa experiência</h2>

          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Na Mundial Fitness, participei de um projeto que envolveu
              definição do cliente ideal, captação, organização do atendimento
              e criação do playbook comercial. Durante o trabalho, o
              faturamento mensal saiu de aproximadamente R$ 50 mil e chegou
              a R$ 600 mil.
            </p>

            <p>
              Na TNT Fitness, também trabalhamos captação e processo
              comercial, com implantação de CRM e padronização do
              atendimento. A empresa partia de aproximadamente R$ 200 mil
              por mês e faturou R$ 1,8 milhão no segundo trimestre do projeto.
            </p>

            <p>
              Cada empresa tinha sua equipe, seu histórico e suas condições.
              Esses números mostram o que aconteceu naqueles projetos. O
              diagnóstico serve justamente para entender o contexto da sua
              operação antes de falar sobre o que pode ser feito.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className={sectionTitle}>
            E por que oferecer essa conversa gratuitamente?
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Porque ela nos permite avaliar se faz sentido trabalhar juntos.
            </p>

            <p>
              Você conhece minha forma de analisar o comercial. Eu entendo
              sua empresa, as dificuldades da equipe e o que seria necessário
              para acompanhar uma implementação.
            </p>

            <p>
              Se houver espaço para o trabalho da Salesorbius, vou apresentar
              o método, explicar minha participação e conversar sobre uma
              proposta.
            </p>

            <p>
              Você decide se quer seguir. As prioridades discutidas no
              diagnóstico continuam à sua disposição, mesmo que não contrate
              o projeto.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className={sectionTitle}>O que preciso de você</h2>

          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Hoje, eu conduzo a Salesorbius pessoalmente. Meu tempo é dividido
              entre atender clientes, acompanhar projetos e conhecer empresas
              que podem precisar do meu trabalho.
            </p>

            <p>
              Imagino que sua agenda também seja disputada. Então, para
              aproveitarmos a reunião, preciso de alguns cuidados:
            </p>

            <ul className="list-disc space-y-4 pl-6">
              <li>
                Que participe alguém que conheça o comercial e possa decidir
                sobre mudanças.
              </li>
              <li>
                Que você traga exemplos recentes, como um orçamento que não
                avançou ou uma negociação que a equipe teve dificuldade
                para conduzir.
              </li>
              <li>
                Que compartilhe os números disponíveis. Se não souber uma
                informação, pode dizer. Não precisa preparar uma apresentação
                nem preencher lacunas com estimativas.
              </li>
              <li>
                Que avise se não puder comparecer, para encontrarmos outro
                horário.
              </li>
            </ul>

            <p>
              Da minha parte, vou revisar suas respostas antes da conversa,
              ouvir o contexto e explicar minhas recomendações com clareza.
            </p>

            <p>
              Também vou dizer quando algo precisar ser investigado melhor.
              Prefiro sair com uma pergunta importante em aberto a recomendar
              uma mudança sem informação suficiente.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-white/15 pt-10">
          <h2 className={sectionTitle}>Quer seguir com o diagnóstico?</h2>

          <div className="mb-8 space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Se essa conversa faz sentido para o momento da sua empresa,
              confirme seu interesse no botão abaixo.
            </p>

            <p>
              Vou receber essa confirmação junto da sua solicitação. Depois,
              entro em contato pelo WhatsApp em até 24h após o cadastro para
              conferir algumas informações. Havendo aderência, combinamos
              o horário.
            </p>
          </div>

          <ConfirmarDiagnostico />
        </section>

        <footer className="mt-12 border-t border-white/15 pt-8 text-lg">
          <p className="text-white/80">Obrigado por dedicar esse tempo.</p>
          <p className="mt-6 font-semibold">Hugo Matias</p>
          <p className="text-sm text-white/65">Salesorbius</p>
        </footer>
      </article>
    </main>
  );
}
