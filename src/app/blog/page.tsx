import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

// Placeholder: replace with real data source (CMS, MDX, etc.)
const posts: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}[] = [
  // Example structure — uncomment and add real posts:
  // {
  //   slug: "como-montar-processo-comercial-industria",
  //   title: "Como montar um processo comercial na sua indústria B2B",
  //   excerpt: "O passo a passo para sair da dependência de indicação e criar previsibilidade de vendas.",
  //   date: "2026-04-01",
  //   category: "Processo Comercial",
  // },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 md:pb-[140px]">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-navy text-center mb-4">
            Blog
          </h1>
          <p className="text-navy/50 text-center text-lg font-medium mb-16 max-w-lg mx-auto">
            Conteúdo prático sobre processo comercial, prospecção e vendas para indústrias B2B.
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-20 border border-navy/10 rounded-2xl">
              <p className="text-navy/40 text-lg font-medium">
                Em breve novos conteúdos por aqui.
              </p>
              <Link
                href="/#formulario"
                className="inline-block mt-6 text-sm font-semibold text-navy border-2 border-navy px-6 py-3 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
              >
                Receba novidades
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border border-navy/10 rounded-2xl p-8 hover:border-navy/30 transition-all duration-300 group"
                >
                  <span className="text-xs font-semibold text-navy/40 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-navy mt-2 mb-3 group-hover:text-navy/70 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-navy/50 font-medium text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="text-navy/30 text-xs font-medium mt-4">
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
