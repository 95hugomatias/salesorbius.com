export function Footer() {
  return (
    <footer className="bg-navy py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="text-white text-sm font-semibold tracking-[0.3em] uppercase mb-3">
          ORBIUS
        </div>
        <p className="text-white/50 text-sm mb-6">
          Processo Comercial para Indústrias B2B
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/40 text-sm mb-8">
          <a
            href="mailto:contato@salesorbius.com"
            className="hover:text-white transition-colors"
          >
            contato@salesorbius.com
          </a>
          <a
            href="https://instagram.com/orbius.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            @orbius.co
          </a>
        </div>

        <div className="h-px bg-white/10 mb-8" />

        <p className="text-white/30 text-xs">
          &copy; 2026 Orbius. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
