import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal, SectionLabel } from "./ui/Reveal";

const capabilities = [
  {
    n: "01",
    title: "AI Employees",
    copy: "Digital workers designed around your actual operations.",
    visual: "grid",
  },
  {
    n: "02",
    title: "Voice AI",
    copy: "Inbound and outbound voice systems that handle conversations at scale.",
    visual: "wave",
  },
  {
    n: "03",
    title: "Digital Products",
    copy: "Websites and applications designed around real business requirements.",
    visual: "frame",
  },
  {
    n: "04",
    title: "Custom Systems",
    copy: "Intelligent systems connecting workflows, tools, data and people.",
    visual: "network",
  },
] as const;

function CapabilityVisual({ type, active }: { type: string; active: boolean }) {
  const stroke = active ? "#C47F5A" : "#2A2926";
  return (
    <svg viewBox="0 0 120 72" className="h-16 w-28 md:h-20 md:w-32">
      {type === "grid" && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.rect
              key={i}
              x={8 + i * 38}
              y={20}
              width="26"
              height="26"
              stroke={stroke}
              strokeWidth="1"
              fill="none"
              animate={{ opacity: active ? 1 : 0.6 }}
              transition={{ duration: 0.4 }}
            />
          ))}
          <line x1="34" y1="33" x2="46" y2="33" stroke={stroke} strokeWidth="1" />
          <line x1="72" y1="33" x2="84" y2="33" stroke={stroke} strokeWidth="1" />
        </>
      )}
      {type === "wave" && (
        <>
          {[16, 8, 22, 4, 26, 12, 18].map((h, i) => (
            <motion.line
              key={i}
              x1={10 + i * 15}
              y1={36 - h / 2}
              x2={10 + i * 15}
              y2={36 + h / 2}
              stroke={stroke}
              strokeWidth="2"
              animate={{ opacity: active ? 1 : 0.6 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            />
          ))}
        </>
      )}
      {type === "frame" && (
        <>
          <rect x="14" y="10" width="92" height="52" stroke={stroke} strokeWidth="1" fill="none" />
          <line x1="14" y1="24" x2="106" y2="24" stroke={stroke} strokeWidth="1" />
          <line x1="34" y1="24" x2="34" y2="62" stroke={stroke} strokeWidth="1" />
        </>
      )}
      {type === "network" && (
        <>
          <circle cx="20" cy="36" r="4" stroke={stroke} strokeWidth="1" fill="none" />
          <circle cx="60" cy="14" r="4" stroke={stroke} strokeWidth="1" fill="none" />
          <circle cx="60" cy="58" r="4" stroke={stroke} strokeWidth="1" fill="none" />
          <circle cx="100" cy="36" r="4" stroke={stroke} strokeWidth="1" fill="none" />
          <line x1="24" y1="36" x2="56" y2="17" stroke={stroke} strokeWidth="1" />
          <line x1="24" y1="36" x2="56" y2="55" stroke={stroke} strokeWidth="1" />
          <line x1="64" y1="16" x2="96" y2="34" stroke={stroke} strokeWidth="1" />
          <line x1="64" y1="56" x2="96" y2="38" stroke={stroke} strokeWidth="1" />
        </>
      )}
    </svg>
  );
}

export function WhatWeBuild() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="02" title="What We Build" />

        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <h2 className="font-sans text-[34px] font-[600] leading-[1.08] tracking-[-0.01em] text-black sm:text-[42px] md:text-[56px]">
            Technology built around the way your business works.
          </h2>
        </Reveal>

        <div className="mt-20 border-t border-charcoal/15 md:mt-28">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(c.n)}
              onMouseLeave={() => setHovered(null)}
              className="group grid grid-cols-1 items-center gap-6 border-b border-charcoal/15 py-10 transition-colors duration-300 md:grid-cols-[80px_1fr_auto_140px] md:gap-10 md:py-14"
            >
              <span className="font-mono text-[13px] text-copper">{c.n}</span>

              <div>
                <h3 className="font-sans text-[26px] font-[600] tracking-[-0.01em] text-black md:text-[34px]">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-[15px] leading-[1.65] text-charcoal/75 md:text-[16px]">
                  {c.copy}
                </p>
              </div>

              <div className="hidden md:block">
                <CapabilityVisual type={c.visual} active={hovered === c.n} />
              </div>

              <div className="flex md:justify-end">
                <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.15em] text-charcoal/50 transition-colors duration-300 group-hover:text-black">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
