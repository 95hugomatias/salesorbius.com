import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salesorbius | Processo Comercial para Indústrias B2B",
  description:
    "A Salesorbius ajuda indústrias B2B a vender todo mês com previsibilidade. Processo comercial estruturado, da prospecção ao fechamento, sem depender de indicação ou vendedor-estrela.",
  keywords: [
    "processo comercial",
    "vendas B2B",
    "indústria",
    "prospecção",
    "pipeline de vendas",
    "diretor comercial terceirizado",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://www.salesorbius.com",
  },
  openGraph: {
    title: "Salesorbius | Processo Comercial para Indústrias B2B",
    description:
      "Ajudamos indústrias a vender todo mês com previsibilidade, sem depender de indicação ou vendedor-estrela.",
    url: "https://www.salesorbius.com",
    siteName: "Salesorbius",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesorbius | Processo Comercial para Indústrias B2B",
    description:
      "Ajudamos indústrias a vender todo mês com previsibilidade, sem depender de indicação ou vendedor-estrela.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.salesorbius.com/#organization",
      name: "Salesorbius",
      url: "https://www.salesorbius.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.salesorbius.com/favicon.svg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contato@salesorbius.com",
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
      sameAs: ["https://instagram.com/orbius.co"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.salesorbius.com/#website",
      url: "https://www.salesorbius.com",
      name: "Salesorbius",
      description:
        "Processo comercial para indústrias B2B. Da prospecção ao fechamento em 90 dias.",
      publisher: { "@id": "https://www.salesorbius.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.salesorbius.com/blog?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
