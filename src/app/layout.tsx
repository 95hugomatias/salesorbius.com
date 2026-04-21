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
  openGraph: {
    title: "Salesorbius | Processo Comercial para Indústrias B2B",
    description:
      "Ajudamos indústrias a vender todo mês com previsibilidade, sem depender de indicação ou vendedor-estrela.",
    url: "https://salesorbius.com",
    siteName: "Salesorbius",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
