import { motion } from "framer-motion";
import { HeroSystem } from "./visuals/HeroSystem";

const headlineLines = ["AI employees.", "Digital products.", "Systems built to scale."];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ivory pt-24 md:pt-16"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2 border border-charcoal/30 px-3 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal">
              15 Founding Client Spots
            </span>
          </motion.div>

          <h1 className="font-sans text-[44px] font-[650] leading-[1.03] tracking-[-0.02em] text-black sm:text-[56px] md:text-[76px] lg:text-[92px]">
            {headlineLines.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`block ${i === 2 ? "text-copper" : ""}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-[46ch] text-[16px] leading-[1.7] text-charcoal/80 md:text-[18px]"
          >
            PHAGENTOS builds intelligent systems that automate operations,
            reduce repetitive work, and help businesses scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center justify-center gap-2 border border-black bg-black px-7 py-4 text-[14px] font-medium text-ivory transition-colors duration-300 hover:bg-copper hover:border-copper"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center justify-center gap-2 border border-charcoal/30 px-7 py-4 text-[14px] font-medium text-black transition-colors duration-300 hover:border-black"
            >
              Explore What We Build
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <HeroSystem />
        </motion.div>
      </div>
    </section>
  );
}
