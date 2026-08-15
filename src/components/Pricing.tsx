import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./ui/Reveal";

const pricing = {
  india: [
    { name: "AI Agent", setup: "₹59,000 setup", rec: "₹9,999/mo" },
    { name: "Voice AI", setup: "₹49,000 setup", rec: "₹11,999/mo" },
    { name: "Web Development", setup: "₹65,000", rec: "one-time" },
    { name: "Mobile Development", setup: "₹2,00,000 – ₹2,50,000", rec: "one-time" },
  ],
  intl: [
    { name: "AI Agent", setup: "$1,250 setup", rec: "$249/mo" },
    { name: "Voice AI", setup: "$1,000 setup", rec: "$199/mo" },
    { name: "Web Development", setup: "$1,500", rec: "one-time" },
    { name: "Mobile Development", setup: "$4,500", rec: "one-time" },
  ],
};

export function Pricing() {
  const [region, setRegion] = useState<"india" | "intl">("india");
  const rows = pricing[region];

  return (
    <section id="pricing" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="06" title="Founding Pricing" />

        <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal delay={0.1} className="max-w-3xl">
            <h2 className="font-sans text-[34px] font-[600] leading-[1.08] tracking-[-0.01em] text-black sm:text-[42px] md:text-[56px]">
              Premium systems.
              <br />
              Priced for ambitious businesses.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-1 border border-charcoal/30 p-1">
              {(["india", "intl"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                    region === r ? "text-ivory" : "text-charcoal/60 hover:text-black"
                  }`}
                >
                  {region === r && (
                    <motion.span
                      layoutId="region-pill"
                      className="absolute inset-0 bg-black"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative z-10">
                    {r === "india" ? "India" : "International"}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-6 max-w-[58ch]">
          <p className="text-[15px] leading-[1.7] text-charcoal/70 md:text-[16px]">
            Founding-client pricing is available for the first 15 clients.
            Pricing increases after the founding stage.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-charcoal/20 md:mt-20">
          {rows.map((row, i) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group grid grid-cols-1 items-baseline gap-2 border-b border-charcoal/20 py-8 md:grid-cols-[64px_1fr_auto] md:gap-8 md:py-10"
            >
              <span className="font-mono text-[12px] text-copper">0{i + 1}</span>
              <span className="font-sans text-[24px] font-[600] tracking-[-0.01em] text-black md:text-[30px]">
                {row.name}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 md:justify-end md:text-right">
                <span className="text-[16px] font-medium text-black md:text-[18px]">
                  {row.setup}
                </span>
                {row.rec !== "one-time" && (
                  <span className="font-mono text-[13px] text-charcoal/60">
                    {row.rec}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 border-b border-black pb-1 text-[15px] font-medium text-black transition-colors duration-300 hover:border-copper hover:text-copper"
          >
            View Full Pricing
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
