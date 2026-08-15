import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./ui/Reveal";

const cases = [
  {
    n: "01",
    tag: "AI Employee",
    title: "Operational workflow automation",
    problem: "A growing business relied on manual handling of repetitive client operations, creating bottlenecks as volume increased.",
    system: "An AI employee was designed to handle structured, repeatable operational tasks and route exceptions to the right people.",
    outcome: "[Placeholder — outcome details to be added as founding client work is completed.]",
  },
  {
    n: "02",
    tag: "Voice AI",
    title: "Inbound conversation handling",
    problem: "High call volume made consistent, timely responses difficult to maintain during peak periods.",
    system: "A voice AI system was built to manage inbound conversations, qualify requests and hand off complex cases.",
    outcome: "[Placeholder — outcome details to be added as founding client work is completed.]",
  },
];

export function SelectedWork() {
  return (
    <section className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="05" title="Selected Work" />

        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <h2 className="font-sans text-[34px] font-[600] leading-[1.08] tracking-[-0.01em] text-black sm:text-[42px] md:text-[56px]">
            Systems built for real problems.
          </h2>
        </Reveal>

        <Reveal delay={0.16} className="mt-6 max-w-[52ch]">
          <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-charcoal/50">
            PHAGENTOS is in its founding-client stage — case studies below
            outline representative system design, with outcomes added as
            engagements complete.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-px bg-charcoal/15 md:mt-28">
          {cases.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-8 bg-ivory p-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:p-14"
            >
              <div>
                <span className="font-mono text-[13px] text-copper">{c.n}</span>
                <div className="mt-3 inline-flex items-center gap-2 border border-signal/40 px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-signal">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-sans text-[26px] font-[600] leading-[1.1] tracking-[-0.01em] text-black md:text-[32px]">
                  {c.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-charcoal/50">
                    The Problem
                  </span>
                  <p className="mt-3 text-[15px] leading-[1.65] text-charcoal/80">
                    {c.problem}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-charcoal/50">
                    The System
                  </span>
                  <p className="mt-3 text-[15px] leading-[1.65] text-charcoal/80">
                    {c.system}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-charcoal/50">
                    The Outcome
                  </span>
                  <p className="mt-3 text-[15px] italic leading-[1.65] text-charcoal/50">
                    {c.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
