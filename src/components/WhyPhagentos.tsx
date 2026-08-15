import { Reveal } from "./ui/Reveal";

const principles = [
  "Business-first thinking.",
  "Engineering discipline.",
  "AI-native systems.",
  "Premium execution without unnecessary overhead.",
];

export function WhyPhagentos() {
  return (
    <section className="relative bg-graphite py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-4xl">
          <h2 className="font-sans text-[36px] font-[650] leading-[1.06] tracking-[-0.02em] text-ivory sm:text-[48px] md:text-[64px]">
            Technically capable.
            <br />
            Business aware.
            <br />
            <span className="text-copper">Built to be worth it.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-0 border-t border-charcoal sm:grid-cols-2 md:mt-28">
          {principles.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <div
                className={`flex items-start gap-5 border-b border-charcoal py-9 ${
                  i % 2 === 0 ? "sm:border-r sm:pr-10" : "sm:pl-10"
                }`}
              >
                <span className="font-mono text-[13px] text-copper">
                  0{i + 1}
                </span>
                <span className="font-sans text-[22px] font-[500] leading-snug tracking-[-0.01em] text-ivory md:text-[26px]">
                  {p}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
