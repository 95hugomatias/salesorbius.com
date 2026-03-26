import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orbius | Processo Comercial para Indústrias B2B",
  description:
    "A Orbius ajuda indústrias B2B a vender todo mês com previsibilidade. Processo comercial estruturado, da prospecção ao fechamento, sem depender de indicação ou vendedor-estrela.",
  keywords: [
    "processo comercial",
    "vendas B2B",
    "indústria",
    "prospecção",
    "pipeline de vendas",
  ],
  openGraph: {
    title: "Orbius | Processo Comercial para Indústrias B2B",
    description:
      "Ajudamos indústrias a vender todo mês com previsibilidade, sem depender de indicação ou vendedor-estrela.",
    url: "https://salesorbius.com",
    siteName: "Orbius",
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
    <html lang="pt-BR" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
