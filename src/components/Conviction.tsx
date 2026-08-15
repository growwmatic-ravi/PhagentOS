import { Reveal } from "./ui/Reveal";

const principles = [
  {
    n: "01",
    text: "Not just chatbots — actual AI employees and systems.",
  },
  {
    n: "02",
    text: "Transparent pricing — clear setup, monthly and usage costs.",
  },
  {
    n: "03",
    text: "Built for outcomes — technology connected to real business needs.",
  },
];

export function Conviction() {
  return (
    <section className="relative bg-black py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-4xl">
          <h2 className="font-sans text-[36px] font-[650] leading-[1.05] tracking-[-0.02em] text-ivory sm:text-[48px] md:text-[68px]">
            Premium execution.
            <br />
            Without unnecessary overhead.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 max-w-[56ch]">
          <p className="text-[16px] leading-[1.7] text-taupe md:text-[18px]">
            PHAGENTOS combines modern technology, engineering discipline and
            business thinking to build systems that are genuinely worth the
            investment.
          </p>
        </Reveal>

        <div className="mt-20 border-t border-charcoal md:mt-28">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={0.08 * i}>
              <div className="flex flex-col gap-3 border-b border-charcoal py-8 md:flex-row md:items-baseline md:gap-10 md:py-10">
                <span className="font-mono text-[13px] text-copper">{p.n}</span>
                <span className="font-sans text-[20px] font-[500] leading-snug tracking-[-0.01em] text-ivory md:text-[26px]">
                  {p.text}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
