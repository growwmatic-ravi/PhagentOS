import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./ui/Reveal";

const stages = [
  { n: "01", title: "Understand", copy: "Identify the business problem and highest-value opportunity." },
  { n: "02", title: "Architect", copy: "Design workflows, logic, integrations and system structure." },
  { n: "03", title: "Build", copy: "Develop, integrate, test and refine." },
  { n: "04", title: "Deploy", copy: "Put the system into the real operating environment." },
  { n: "05", title: "Optimize", copy: "Improve and expand as the business evolves." },
];

export function Process() {
  return (
    <section id="process" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="04" title="How We Build" />

        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <h2 className="font-sans text-[34px] font-[600] leading-[1.08] tracking-[-0.01em] text-black sm:text-[42px] md:text-[56px]">
            From problem to working system.
          </h2>
        </Reveal>

        {/* Desktop horizontal progression */}
        <div className="relative mt-28 hidden md:block">
          <div className="absolute left-0 right-0 top-3 h-px bg-charcoal/20" />
          <div className="grid grid-cols-5 gap-8">
            {stages.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative pt-10"
              >
                <motion.div
                  className="absolute left-0 top-0 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-copper"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                />
                <span className="font-mono text-[12px] text-copper">{s.n}</span>
                <h3 className="mt-3 font-sans text-[22px] font-[600] tracking-[-0.01em] text-black">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-charcoal/70">
                  {s.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical progression */}
        <div className="relative mt-20 flex flex-col md:hidden">
          <div className="absolute left-[6px] top-2 h-[calc(100%-2rem)] w-px bg-charcoal/20" />
          {stages.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative py-8 pl-9 first:pt-0"
            >
              <div className="absolute left-0 top-9 h-[13px] w-[13px] -translate-x-1/2 rounded-full border-2 border-copper bg-ivory" />
              <span className="font-mono text-[12px] text-copper">{s.n}</span>
              <h3 className="mt-2 font-sans text-[24px] font-[600] tracking-[-0.01em] text-black">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[36ch] text-[15px] leading-[1.65] text-charcoal/70">
                {s.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
