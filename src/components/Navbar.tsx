"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "/blog", label: "Blog" },
];

function OrbitalMark({ size = 32 }: { size?: number }) {
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
      {/* Horizontal orbit — back arc */}
      <path
        d={`M ${-rx} 0 A ${rx} ${ry} 0 0 0 ${rx} 0`}
        fill="none"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.2"
      />
      {/* Horizontal orbit — front arc */}
      <path
        d={`M ${-rx} 0 A ${rx} ${ry} 0 0 1 ${rx} 0`}
        fill="none"
        stroke="rgba(255,255,255,0.58)"
        strokeWidth="1.2"
      />
      {/* Tilted orbit — back arc */}
      <path
        d={`M ${-rx} 0 A ${rx} ${ry} 0 0 0 ${rx} 0`}
        fill="none"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.2"
        transform="rotate(68)"
      />
      {/* Tilted orbit — front arc (orange) */}
      <path
        d={`M ${-rx} 0 A ${rx} ${ry} 0 0 1 ${rx} 0`}
        fill="none"
        stroke="#E05718"
        strokeWidth="1.6"
        transform="rotate(68)"
      />
      {/* Satellite */}
      <circle cx={rx} cy={0} r={r * 0.1} fill="rgba(255,255,255,0.4)" />
      {/* Core */}
      <circle cx={0} cy={0} r={r * 0.19} fill="#E05718" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 text-white">
          <OrbitalMark size={32} />
          <span className="text-sm font-bold tracking-[0.22em] uppercase">
            Salesorbius
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#formulario"
            className="text-white text-sm font-semibold bg-[#E05718] hover:bg-[#c44d14] px-7 py-3 rounded-full transition-all duration-300"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 px-6 pb-8 pt-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#formulario"
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm font-semibold bg-[#E05718] hover:bg-[#c44d14] px-7 py-3 rounded-full text-center transition-all duration-300"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      )}
    </nav>
  );
}
