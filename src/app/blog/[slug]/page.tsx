import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

// Placeholder: replace with real data source (CMS, MDX files, database)
const posts: Record<string, { title: string; date: string; category: string; content: string }> = {
  // Example:
  // "como-montar-processo-comercial-industria": {
  //   title: "Como montar um processo comercial na sua indústria B2B",
  //   date: "2026-04-01",
  //   category: "Processo Comercial",
  //   content: "Conteúdo do artigo aqui...",
  // },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 md:pb-[140px]">
        <article className="mx-auto max-w-2xl px-6">
          <Link
            href="/blog"
            className="text-navy/40 text-sm font-medium hover:text-navy transition-colors"
          >
            ← Voltar ao blog
          </Link>

          <span className="block text-xs font-semibold text-navy/40 uppercase tracking-wider mt-8">
            {post.category}
          </span>
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-navy mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-navy/30 text-sm font-medium mb-12">
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="prose prose-navy max-w-none text-navy/70 text-lg leading-relaxed font-medium">
            {post.content}
          </div>

          <div className="mt-16 pt-8 border-t border-navy/10 text-center">
            <p className="text-navy font-bold text-lg mb-4">
              Quer estruturar o comercial da sua indústria?
            </p>
            <Link
              href="/#formulario"
              className="inline-block text-sm font-semibold bg-navy text-white px-8 py-4 rounded-full hover:bg-white hover:text-navy border-2 border-navy transition-all duration-300"
            >
              Quero o Diagnóstico Gratuito
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
