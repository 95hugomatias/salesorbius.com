function OrbitalMark({ size = 26 }: { size?: number }) {
  const r = size / 2;
  const rx = r * 0.85;
  const ry = r * 0.38;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`${-r} ${-r} ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={`M ${-rx} 0 A ${rx} ${ry} 0 0 0 ${rx} 0`}
        fill="none"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.2"
      />
      <path
        d={`M ${-rx} 0 A ${rx} ${ry} 0 0 1 ${rx} 0`}
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.2"
      />
      <path
        d={`M ${-rx} 0 A ${rx} ${ry} 0 0 0 ${rx} 0`}
        fill="none"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.2"
        transform="rotate(68)"
      />
      <path
        d={`M ${-rx} 0 A ${rx} ${ry} 0 0 1 ${rx} 0`}
        fill="none"
        stroke="#E05718"
        strokeWidth="1.6"
        transform="rotate(68)"
      />
      <circle cx={rx} cy={0} r={r * 0.1} fill="rgba(255,255,255,0.35)" />
      <circle cx={0} cy={0} r={r * 0.19} fill="#E05718" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <a href="#" className="inline-flex items-center gap-2.5 mb-4">
          <OrbitalMark size={26} />
          <span className="text-white text-sm font-bold tracking-[0.25em] uppercase">
            Salesorbius
          </span>
        </a>

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
          &copy; 2026 Salesorbius. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
