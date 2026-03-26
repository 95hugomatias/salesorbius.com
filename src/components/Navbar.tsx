"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#diagnostico", label: "Diagnóstico" },
];

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
        <a
          href="#"
          className="text-white text-sm font-bold tracking-[0.35em] uppercase"
        >
          ORBIUS
        </a>

        {/* Desktop */}
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
            className="text-white text-sm font-semibold border border-white/40 px-7 py-3 rounded-full hover:bg-white hover:text-navy transition-all duration-300"
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
            className="text-white text-sm font-semibold border border-white/40 px-7 py-3 rounded-full text-center hover:bg-white hover:text-navy transition-all duration-300"
          >
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      )}
    </nav>
  );
}
