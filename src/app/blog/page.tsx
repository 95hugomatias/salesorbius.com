import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { getPublishedPosts, categories } from "@/data/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Orbius — Vendas B2B para Indústrias",
  description:
    "Conteúdo prático sobre prospecção, funil de vendas, CRM e gestão comercial para indústrias B2B.",
  openGraph: {
    title: "Blog | Orbius — Vendas B2B para Indústrias",
    description:
      "Conteúdo prático sobre prospecção, funil de vendas, CRM e gestão comercial para indústrias B2B.",
    url: "https://salesorbius.com/blog",
    siteName: "Orbius",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://salesorbius.com/blog",
  },
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 md:pb-[140px]">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-navy text-center mb-4">
            Blog
          </h1>
          <p className="text-navy/50 text-center text-lg font-medium mb-12 max-w-lg mx-auto">
            Conteúdo prático sobre processo comercial, prospecção e vendas para
            indústrias B2B.
          </p>

          {/* Category filter */}
          {posts.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => {
                const count = posts.filter((p) => p.category === cat).length;
                if (count === 0) return null;
                return (
                  <span
                    key={cat}
                    className="text-xs font-semibold text-navy/50 border border-navy/15 px-4 py-2 rounded-full"
                  >
                    {cat} ({count})
                  </span>
                );
              })}
            </div>
          )}

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
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-navy/40 uppercase tracking-wider">
                      {post.category}
                    </span>
                    {post.isPillar && (
                      <span className="text-[10px] font-bold text-white bg-navy/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Guia
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-navy mt-1 mb-3 group-hover:text-navy/70 transition-colors">
                    {post.h1}
                  </h2>
                  <p className="text-navy/50 font-medium text-sm leading-relaxed">
                    {post.metaDescription}
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
