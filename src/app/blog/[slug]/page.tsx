import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts, getAllSlugs } from "@/data/blog-posts";
import { BlogContent } from "@/components/BlogContent";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.titleTag,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.salesorbius.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.titleTag,
      description: post.metaDescription,
      url: `https://www.salesorbius.com/blog/${post.slug}`,
      siteName: "Salesorbius",
      locale: "pt_BR",
      type: "article",
      publishedTime: post.date || undefined,
      modifiedTime: post.date || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.titleTag,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) notFound();

  const relatedPosts = getRelatedPosts(post);

  // JSON-LD BlogPosting schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "pt-BR",
    author: {
      "@type": "Organization",
      "@id": "https://www.salesorbius.com/#organization",
      name: "Salesorbius",
      url: "https://www.salesorbius.com",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.salesorbius.com/#organization",
      name: "Salesorbius",
      url: "https://www.salesorbius.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.salesorbius.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.salesorbius.com/blog/${post.slug}`,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://www.salesorbius.com/blog",
      name: "Blog Salesorbius",
      publisher: { "@id": "https://www.salesorbius.com/#organization" },
    },
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 md:pb-[140px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article className="mx-auto max-w-2xl px-6">
          <Link
            href="/blog"
            className="text-navy/40 text-sm font-medium hover:text-navy transition-colors"
          >
            &larr; Voltar ao blog
          </Link>

          <div className="flex items-center gap-3 mt-8">
            <span className="text-xs font-semibold text-navy/40 uppercase tracking-wider">
              {post.category}
            </span>
            {post.isPillar && (
              <span className="text-[10px] font-bold text-white bg-navy/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Guia Completo
              </span>
            )}
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-navy mt-3 mb-4 leading-tight">
            {post.h1}
          </h1>

          {post.date && (
            <p className="text-navy/30 text-sm font-medium mb-12">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}

          {/* Article content rendered from markdown */}
          <div className="prose prose-lg prose-navy max-w-none">
            <BlogContent content={post.content} />
          </div>

          {/* CTA */}
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

          {/* Related articles (internal linking) */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-navy/10">
              <h2 className="text-navy font-bold text-lg mb-6">
                Artigos relacionados
              </h2>
              <div className="space-y-4">
                {relatedPosts.slice(0, 4).map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block border border-navy/10 rounded-xl p-5 hover:border-navy/30 transition-all duration-300 group"
                  >
                    <span className="text-[10px] font-semibold text-navy/35 uppercase tracking-wider">
                      {related.category}
                    </span>
                    <p className="text-navy font-semibold text-sm mt-1 group-hover:text-navy/70 transition-colors">
                      {related.h1}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
