"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

/* Orbital mark — animates slowly in the background */
function OrbitalBg() {
  const size = 420;
  const r = size / 2;
  const rx = r * 0.85;
  const ry = r * 0.38;
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, ease }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox={`${-r} ${-r} ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{ opacity: 0.07 }}
      >
        <path
          d={`M ${-rx} 0 A ${rx} ${ry} 0 0 0 ${rx} 0`}
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d={`M ${-rx} 0 A ${rx} ${ry} 0 0 1 ${rx} 0`}
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d={`M ${-rx} 0 A ${rx} ${ry} 0 0 0 ${rx} 0`}
          fill="none"
          stroke="white"
          strokeWidth="1"
          transform="rotate(68)"
        />
        <path
          d={`M ${-rx} 0 A ${rx} ${ry} 0 0 1 ${rx} 0`}
          fill="none"
          stroke="#E05718"
          strokeWidth="1.5"
          transform="rotate(68)"
        />
        <circle cx={rx} cy={0} r={r * 0.025} fill="white" />
        <circle cx={0} cy={0} r={r * 0.045} fill="#E05718" />
      </motion.svg>
    </motion.div>
  );
}

/* Word-by-word reveal for H1 */
function WordReveal({ text, italic }: { text: string; italic?: boolean }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.28em] ${italic ? "italic" : ""}`}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease, delay: 0.55 + i * 0.07 }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative bg-[#080808] min-h-screen flex items-center justify-center pt-24 overflow-hidden">

      {/* Subtle radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease }}
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(224,87,24,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Orbital background */}
      <OrbitalBg />

      <div className="mx-auto max-w-[720px] px-6 py-20 md:py-36 text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 border border-white/15 rounded-full px-5 py-2.5 mb-10"
        >
          <span className="text-[#E05718] text-xs">●</span>
          <span className="text-white/60 text-sm font-medium tracking-wide">
            Processo Comercial para Indústrias B2B
          </span>
        </motion.div>

        {/* H1 — word by word */}
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.15] text-white mb-8">
          <WordReveal text="Sua indústria depende de indicação e de" />
          {" "}
          <motion.em
            className="italic font-bold"
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease, delay: 0.55 + 8 * 0.07 }}
          >
            vendedor-estrela
          </motion.em>
          {" "}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease, delay: 0.55 + 9 * 0.07 }}
          >
            para fechar negócio?
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-white/50 text-lg md:text-xl leading-relaxed max-w-[580px] mx-auto mb-12 font-normal"
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease, delay: 1.4 }}
        >
          A gente ajuda indústrias como a sua a vender todo mês com
          previsibilidade, sem ficar refém de uma pessoa ou esperando o
          telefone tocar.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.7 }}
        >
          <a
            href="#formulario"
            className="inline-block bg-white text-navy text-sm font-semibold px-10 py-4 rounded-full hover:bg-[#E05718] hover:text-white hover:border-[#E05718] border-2 border-white transition-all duration-500"
          >
            Quero o Diagnóstico Gratuito
          </a>
        </motion.div>

      </div>
    </section>
  );
}
