import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32 md:py-48"
    >
      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-px bg-charcoal"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="pointer-events-none absolute right-10 top-16 hidden h-3 w-3 border-r border-t border-charcoal md:block" />
      <div className="pointer-events-none absolute bottom-16 left-10 hidden h-3 w-3 border-b border-l border-charcoal md:block" />

      <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-taupe">
            Founding Client Stage
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <h2 className="mx-auto max-w-4xl font-sans text-[36px] font-[650] leading-[1.06] tracking-[-0.02em] text-ivory sm:text-[52px] md:text-[72px]">
            Have a problem worth solving?
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-6">
          <p className="mx-auto max-w-2xl font-sans text-[20px] font-[500] tracking-[-0.01em] text-copper md:text-[26px]">
            Let&rsquo;s build the system behind it.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-14">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 border border-ivory bg-ivory px-8 py-4 text-[14px] font-medium text-black transition-colors duration-300 hover:bg-copper hover:border-copper"
          >
            Start a Project
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
