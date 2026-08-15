import { ArchitectureFlow } from "./visuals/ArchitectureFlow";
import { Reveal, SectionLabel } from "./ui/Reveal";

export function SystemSection() {
  return (
    <section id="system" className="relative overflow-hidden bg-black py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.4]" style={{
        backgroundImage:
          "linear-gradient(to right, #1a1a18 1px, transparent 1px), linear-gradient(to bottom, #1a1a18 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel index="03" title="The System" dark />

        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <h2 className="font-sans text-[34px] font-[600] leading-[1.08] tracking-[-0.01em] text-ivory sm:text-[42px] md:text-[56px]">
            Technology should create leverage.
          </h2>
        </Reveal>

        <Reveal delay={0.18} className="mt-6 max-w-[52ch]">
          <p className="text-[16px] leading-[1.7] text-taupe md:text-[18px]">
            Every system we build connects technology to a real business
            need.
          </p>
        </Reveal>

        <div className="mt-24 md:mt-32">
          <ArchitectureFlow />
        </div>
      </div>
    </section>
  );
}
