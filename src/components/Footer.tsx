export function Footer() {
  return (
    <footer className="bg-navy py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="text-white text-sm font-bold tracking-[0.35em] uppercase mb-4">
          ORBIUS
        </div>
        <p className="text-white/45 text-sm font-medium mb-8">
          Processo Comercial para Indústrias B2B
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-white/35 text-sm font-medium mb-10">
          <a
            href="mailto:contato@salesorbius.com"
            className="hover:text-white transition-colors duration-300"
          >
            contato@salesorbius.com
          </a>
          <a
            href="https://instagram.com/orbius.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            @orbius.co
          </a>
        </div>

        <div className="h-px bg-white/10 mb-10" />

        <p className="text-white/25 text-xs font-medium">
          &copy; 2026 Orbius. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
