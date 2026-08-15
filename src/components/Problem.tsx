import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./ui/Reveal";

const frictions = [
  "Repetitive work.",
  "Manual processes.",
  "Slow responses.",
  "Disconnected tools.",
  "Operational overhead.",
];

export function Problem() {
  return (
    <section className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="01" title="The Problem" />

        <Reveal delay={0.1} className="mt-8 max-w-4xl">
          <h2 className="font-sans text-[34px] font-[600] leading-[1.08] tracking-[-0.01em] text-black sm:text-[42px] md:text-[56px]">
            Your business doesn&rsquo;t need more technology.
            <br />
            It needs{" "}
            <span className="text-copper">better systems.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1}>
            <p className="max-w-[42ch] text-[16px] leading-[1.7] text-charcoal/75 md:text-[18px]">
              Most businesses aren&rsquo;t short on tools. They are short on
              structure. The friction below shows up quietly, spread across
              teams, tools and time — until it becomes the ceiling on growth.
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-charcoal/15 hidden md:block" />
            {frictions.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-between border-b border-charcoal/15 py-6 pl-0 md:pl-10 first:pt-0"
              >
                <span className="font-sans text-[22px] font-[500] tracking-[-0.01em] text-black transition-colors duration-300 group-hover:text-copper md:text-[28px]">
                  {item}
                </span>
                <span className="font-mono text-[11px] text-charcoal/40">
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
