import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Provocacao } from "@/components/Provocacao";
import { CustoReal } from "@/components/CustoReal";
import { Reenquadramento } from "@/components/Reenquadramento";
import { OQueMuda } from "@/components/OQueMuda";
import { Metodo } from "@/components/Metodo";
import { QuemSomos } from "@/components/QuemSomos";
import { DiagnosticoCTA } from "@/components/DiagnosticoCTA";
import { Formulario } from "@/components/Formulario";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Provocacao />
        <CustoReal />
        <Reenquadramento />
        <OQueMuda />
        <Metodo />
        <QuemSomos />
        <DiagnosticoCTA />
        <Formulario />
      </main>
      <Footer />
    </>
  );
}
