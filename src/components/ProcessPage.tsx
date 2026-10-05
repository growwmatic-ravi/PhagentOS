import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Reveal } from "./ui/Reveal";

/* ─── AXONOMETRIC SYSTEM VISUALS ─── */

function VisualUnderstand() {
  return (
    <svg viewBox="0 0 400 320" fill="none" className="w-full h-full max-w-[400px]">
      {/* Fragmented disconnected blocks — scattered operational pieces */}
      <rect x="40" y="60" width="60" height="36" stroke="#2A2926" strokeWidth="1" transform="skewX(-12)" />
      <rect x="160" y="100" width="50" height="30" stroke="#2A2926" strokeWidth="1" transform="skewX(-12)" />
      <rect x="280" y="50" width="45" height="28" stroke="#2A2926" strokeWidth="1" transform="skewX(-12)" />
      <rect x="90" y="180" width="55" height="34" stroke="#2A2926" strokeWidth="1" transform="skewX(-12)" />
      <rect x="220" y="200" width="65" height="32" stroke="#0B0B0A" strokeWidth="1" transform="skewX(-12)" />
      <rect x="330" y="160" width="40" height="26" stroke="#2A2926" strokeWidth="1" transform="skewX(-12)" />
      {/* Broken connection lines */}
      <line x1="100" y1="78" x2="130" y2="90" stroke="#2A2926" strokeWidth="0.5" strokeDasharray="4 4" />
      <line x1="210" y1="115" x2="250" y2="80" stroke="#2A2926" strokeWidth="0.5" strokeDasharray="4 4" />
      <line x1="145" y1="197" x2="190" y2="210" stroke="#2A2926" strokeWidth="0.5" strokeDasharray="4 4" />
      {/* Small disconnected dots */}
      <circle cx="150" cy="150" r="2" fill="#C47F5A" />
      <circle cx="260" cy="140" r="2" fill="#C47F5A" />
      <circle cx="100" cy="260" r="1.5" fill="#2A2926" />
      <circle cx="300" cy="240" r="1.5" fill="#2A2926" />
    </svg>
  );
}

function VisualArchitect() {
  return (
    <svg viewBox="0 0 400 320" fill="none" className="w-full h-full max-w-[400px]">
      {/* Ordered grid — aligned structural blocks */}
      <rect x="60" y="40" width="80" height="48" stroke="#0B0B0A" strokeWidth="1" transform="skewX(-12)" />
      <rect x="180" y="40" width="80" height="48" stroke="#0B0B0A" strokeWidth="1" transform="skewX(-12)" />
      <rect x="300" y="40" width="80" height="48" stroke="#2A2926" strokeWidth="1" transform="skewX(-12)" />
      {/* Connecting horizontal pathways */}
      <line x1="140" y1="64" x2="180" y2="64" stroke="#0B0B0A" strokeWidth="1" />
      <line x1="260" y1="64" x2="300" y2="64" stroke="#0B0B0A" strokeWidth="1" />
      {/* Second row — logic layer */}
      <rect x="120" y="130" width="70" height="42" stroke="#0B0B0A" strokeWidth="1" transform="skewX(-12)" />
      <rect x="240" y="130" width="70" height="42" stroke="#0B0B0A" strokeWidth="1" transform="skewX(-12)" />
      {/* Vertical connectors */}
      <line x1="155" y1="88" x2="155" y2="130" stroke="#2A2926" strokeWidth="0.5" />
      <line x1="275" y1="88" x2="275" y2="130" stroke="#2A2926" strokeWidth="0.5" />
      {/* Decision node */}
      <rect x="170" y="210" width="60" height="36" stroke="#C47F5A" strokeWidth="1" transform="skewX(-12)" />
      <line x1="155" y1="172" x2="200" y2="210" stroke="#2A2926" strokeWidth="0.5" />
      <line x1="275" y1="172" x2="230" y2="210" stroke="#2A2926" strokeWidth="0.5" />
      {/* Junction points */}
      <circle cx="155" cy="88" r="2.5" fill="#0B0B0A" />
      <circle cx="275" cy="88" r="2.5" fill="#0B0B0A" />
      <circle cx="200" cy="210" r="2.5" fill="#C47F5A" />
    </svg>
  );
}

function VisualBuild() {
  return (
    <svg viewBox="0 0 440 360" fill="none" className="w-full h-full max-w-[440px]">
      {/* Exploded architectural assembly — most sophisticated */}
      {/* Foundation platform */}
      <path d="M60 240 L220 300 L380 240 L220 180 Z" stroke="#F1ECE3" strokeWidth="1" strokeOpacity="0.8" fill="none" />
      {/* Raised modules assembling */}
      <path d="M120 200 L200 235 L280 200 L200 165 Z" stroke="#F1ECE3" strokeWidth="1" strokeOpacity="0.8" fill="none" />
      <line x1="120" y1="200" x2="120" y2="220" stroke="#F1ECE3" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="200" y1="235" x2="200" y2="258" stroke="#F1ECE3" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="280" y1="200" x2="280" y2="220" stroke="#F1ECE3" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="200" y1="165" x2="200" y2="185" stroke="#F1ECE3" strokeWidth="0.5" strokeOpacity="0.5" />
      {/* Top module — hovering into place */}
      <path d="M160 120 L210 142 L260 120 L210 98 Z" stroke="#C47F5A" strokeWidth="1" fill="none" />
      <line x1="160" y1="120" x2="160" y2="155" stroke="#C47F5A" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="260" y1="120" x2="260" y2="155" stroke="#C47F5A" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="210" y1="98" x2="210" y2="130" stroke="#C47F5A" strokeWidth="0.5" strokeDasharray="3 3" />
      {/* Side structural columns */}
      <rect x="80" y="180" width="24" height="50" stroke="#A8A198" strokeWidth="0.5" strokeOpacity="0.4" transform="skewY(-8)" />
      <rect x="320" y="170" width="24" height="50" stroke="#A8A198" strokeWidth="0.5" strokeOpacity="0.4" transform="skewY(8)" />
      {/* Connection bridges */}
      <line x1="104" y1="195" x2="140" y2="185" stroke="#A8A198" strokeWidth="0.5" strokeOpacity="0.4" />
      <line x1="320" y1="188" x2="280" y2="195" stroke="#A8A198" strokeWidth="0.5" strokeOpacity="0.4" />
      {/* Internal pathways */}
      <line x1="160" y1="200" x2="200" y2="185" stroke="#F1ECE3" strokeWidth="0.5" strokeOpacity="0.6" />
      <line x1="200" y1="185" x2="240" y2="200" stroke="#F1ECE3" strokeWidth="0.5" strokeOpacity="0.6" />
      {/* Assembly guide lines */}
      <line x1="210" y1="55" x2="210" y2="98" stroke="#C47F5A" strokeWidth="0.5" strokeOpacity="0.6" strokeDasharray="2 4" />
      {/* Key junction points */}
      <circle cx="200" cy="185" r="3" fill="#F1ECE3" />
      <circle cx="210" cy="98" r="2.5" fill="#C47F5A" />
      <circle cx="220" cy="300" r="2" fill="#F1ECE3" />
    </svg>
  );
}

function VisualDeploy() {
  return (
    <svg viewBox="0 0 400 320" fill="none" className="w-full h-full max-w-[400px]">
      {/* Complete system — extending into operating environment */}
      {/* Core structure — solid, complete */}
      <path d="M140 160 L200 190 L260 160 L200 130 Z" stroke="#0B0B0A" strokeWidth="1" fill="none" />
      <path d="M140 160 L140 185 L200 215 L200 190 Z" stroke="#0B0B0A" strokeWidth="0.5" fill="none" />
      <path d="M200 190 L200 215 L260 185 L260 160 Z" stroke="#0B0B0A" strokeWidth="0.5" fill="none" />
      {/* Outward extension lines — system reaching into environment */}
      <line x1="140" y1="160" x2="60" y2="120" stroke="#2A2926" strokeWidth="0.5" />
      <line x1="260" y1="160" x2="340" y2="120" stroke="#2A2926" strokeWidth="0.5" />
      <line x1="200" y1="215" x2="200" y2="280" stroke="#2A2926" strokeWidth="0.5" />
      <line x1="200" y1="130" x2="200" y2="70" stroke="#2A2926" strokeWidth="0.5" />
      {/* Operational endpoints */}
      <rect x="40" y="108" width="24" height="16" stroke="#2A2926" strokeWidth="0.5" />
      <rect x="336" y="108" width="24" height="16" stroke="#2A2926" strokeWidth="0.5" />
      <rect x="188" y="60" width="24" height="14" stroke="#2A2926" strokeWidth="0.5" />
      <rect x="188" y="278" width="24" height="14" stroke="#2A2926" strokeWidth="0.5" />
      {/* Signal Green operational indicators */}
      <circle cx="52" cy="104" r="3" fill="#355C4A" />
      <circle cx="348" cy="104" r="3" fill="#355C4A" />
      {/* Data flow arrows */}
      <line x1="64" y1="116" x2="90" y2="130" stroke="#2A2926" strokeWidth="0.5" />
      <line x1="336" y1="116" x2="310" y2="130" stroke="#2A2926" strokeWidth="0.5" />
    </svg>
  );
}

function VisualOptimize() {
  return (
    <svg viewBox="0 0 400 320" fill="none" className="w-full h-full max-w-[400px]">
      {/* Stable core with expanding/adapting pathways */}
      {/* Core — smaller, stable */}
      <path d="M170 150 L200 165 L230 150 L200 135 Z" stroke="#0B0B0A" strokeWidth="1" fill="none" />
      <path d="M170 150 L170 165 L200 180 L200 165 Z" stroke="#0B0B0A" strokeWidth="0.5" fill="none" />
      <path d="M200 165 L200 180 L230 165 L230 150 Z" stroke="#0B0B0A" strokeWidth="0.5" fill="none" />
      {/* Expanding orbital pathways */}
      <ellipse cx="200" cy="158" rx="80" ry="45" stroke="#2A2926" strokeWidth="0.5" fill="none" />
      <ellipse cx="200" cy="158" rx="130" ry="72" stroke="#2A2926" strokeWidth="0.5" strokeDasharray="4 3" fill="none" />
      {/* Rerouting pathway — adaptive */}
      <path d="M70 158 Q 100 100 150 120" stroke="#C47F5A" strokeWidth="0.5" fill="none" />
      <path d="M250 195 Q 310 210 340 180" stroke="#C47F5A" strokeWidth="0.5" fill="none" />
      {/* Pathway continuing beyond composition */}
      <line x1="340" y1="180" x2="400" y2="160" stroke="#2A2926" strokeWidth="0.5" />
      <line x1="200" y1="230" x2="200" y2="320" stroke="#2A2926" strokeWidth="0.5" strokeDasharray="3 4" />
      {/* Iteration nodes */}
      <circle cx="120" cy="130" r="2" fill="#0B0B0A" />
      <circle cx="280" cy="130" r="2" fill="#0B0B0A" />
      <circle cx="200" cy="103" r="2" fill="#0B0B0A" />
      <circle cx="200" cy="230" r="2" fill="#C47F5A" />
      {/* Active expansion indicator */}
      <circle cx="340" cy="180" r="2.5" fill="#C47F5A" />
    </svg>
  );
}

/* ─── CONNECTING SYSTEM LINE ─── */

function SystemLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Desktop — horizontal progressive line */}
      <div ref={ref} className="hidden md:block absolute left-0 right-0 top-0 bottom-0 pointer-events-none z-0">
        <motion.div
          className="absolute left-6 lg:left-10 top-0 h-px bg-charcoal/15 origin-left"
          style={{ width: lineWidth }}
        />
      </div>
      {/* Mobile — vertical progressive line */}
      <div className="md:hidden absolute left-6 top-0 bottom-0 pointer-events-none z-0">
        <motion.div
          className="absolute left-0 top-0 w-px bg-charcoal/15 origin-top"
          style={{ height: lineHeight }}
        />
      </div>
    </>
  );
}

/* ─── PROCESS PAGE ─── */

export function ProcessPage() {
  const stagesRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-ivory font-sans text-black antialiased selection:bg-copper selection:text-ivory">
      <Navigation />

      <main className="pt-32 md:pt-48">

        {/* ━━━ HERO ━━━ */}
        <section className="relative px-6 md:px-10 mx-auto max-w-[1400px] pb-20 md:pb-32">
          <Reveal delay={0.1}>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
              <span className="text-copper">[</span> 04 / HOW WE BUILD <span className="text-copper">]</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 md:mt-24 max-w-[1000px]">
            <h1 className="font-sans text-[48px] sm:text-[64px] md:text-[84px] lg:text-[96px] font-[680] leading-[1.02] tracking-[-0.03em] text-black">
              We start where the<br />workflow breaks down.
            </h1>
          </Reveal>

          <Reveal delay={0.35} className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-24 items-end">
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-charcoal max-w-[500px]">
              We don't begin with a technology choice or an AI pitch. We begin with the operational problem — the friction that's costing time, decisions, and clarity. From there, we architect the logic, build the system, deploy it into real conditions, and keep improving it as reality shifts.
            </p>
            <div className="md:min-w-[340px]">
              <div className="border-t border-charcoal/20 pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-taupe leading-[2]">
                <p>UNCERTAINTY → STRUCTURE → OPERATION</p>
                <p className="mt-1">FIVE STAGES. ONE CONTINUOUS SYSTEM.</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ━━━ FIVE STAGES ━━━ */}
        <div ref={stagesRef} className="relative">
          <SystemLine />

          {/* ────── 01 / UNDERSTAND ────── */}
          <section className="relative px-6 md:px-10 mx-auto max-w-[1400px] border-t border-charcoal/20 py-24 md:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_560px] gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-start gap-8 md:gap-16">
                  <Reveal delay={0.1}>
                    <div className="font-sans text-[100px] md:text-[130px] lg:text-[150px] font-medium leading-[0.75] tracking-[-0.04em] text-copper/90 select-none">
                      01
                    </div>
                  </Reveal>
                  <div className="pt-2 md:pt-4 max-w-[600px]">
                    <Reveal delay={0.15}>
                      <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe mb-6">
                        <span className="text-copper">01</span> / UNDERSTAND
                      </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                      <h2 className="font-sans text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-[650] leading-[1.04] tracking-[-0.02em] text-black">
                        Find the friction before you name the fix.
                      </h2>
                    </Reveal>
                  </div>
                </div>

                <Reveal delay={0.3} className="mt-10 md:mt-14 md:ml-[calc(100px+2rem)] lg:ml-[calc(150px+4rem)] max-w-[550px]">
                  <p className="text-[16px] md:text-[17px] leading-[1.7] text-charcoal">
                    Before any system can be designed, the actual operational problem has to be understood — not the surface symptom. We examine where repetitive work accumulates, where handoffs break, where decisions stall, and where people lose time inside existing tools. The output is clarity: a defined problem that can be solved with architecture rather than guesswork.
                  </p>
                </Reveal>

                <Reveal delay={0.4} className="mt-10 md:mt-14 md:ml-[calc(100px+2rem)] lg:ml-[calc(150px+4rem)] border-t border-charcoal/15 pt-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-copper">
                    PROBLEM DEFINED
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.25} className="flex justify-center lg:justify-end mt-16 lg:mt-0">
                <img 
                  src="/visuals/understand.png" 
                  alt="System Architecture Understand Phase Diagram" 
                  className="w-full max-w-[560px] h-auto object-contain"
                />
              </Reveal>
            </div>
          </section>

          {/* ────── 02 / ARCHITECT ────── */}
          <section className="relative px-6 md:px-10 mx-auto max-w-[1400px] border-t border-charcoal/20 py-24 md:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] xl:grid-cols-[560px_1fr] gap-12 lg:gap-16 items-center">
              <Reveal delay={0.25} className="flex justify-center lg:justify-start order-2 lg:order-1 mt-12 lg:mt-0">
                <img 
                  src="/visuals/architect.png" 
                  alt="System Architecture Architect Phase Diagram" 
                  className="w-full max-w-[560px] h-auto object-contain"
                />
              </Reveal>

              <div className="order-1 lg:order-2">
                <Reveal delay={0.1}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe mb-6">
                    <span className="text-copper">02</span> / ARCHITECT
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
                  <Reveal delay={0.15}>
                    <div className="font-sans text-[80px] md:text-[100px] font-medium leading-[0.75] tracking-[-0.04em] text-copper/90 select-none md:text-right">
                      02
                    </div>
                  </Reveal>
                  <div>
                    <Reveal delay={0.2}>
                      <h2 className="font-sans text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-[650] leading-[1.04] tracking-[-0.02em] text-black">
                        Nothing gets built until the logic is visible.
                      </h2>
                    </Reveal>
                    <Reveal delay={0.3} className="mt-8 md:mt-10 max-w-[550px]">
                      <p className="text-[16px] md:text-[17px] leading-[1.7] text-charcoal">
                        The identified problem becomes a system structure — workflow design, automation boundaries, decision rules, data movement, integration points, and the precise role of human involvement. We define what happens, when it happens, and why. Nothing is left implicit. The architecture is the contract between intention and execution.
                      </p>
                    </Reveal>
                  </div>
                </div>

                {/* Structured grid — visual reinforcement of order */}
                <Reveal delay={0.35} className="mt-12 md:mt-16">
                  <div className="grid grid-cols-3 gap-px bg-charcoal/10">
                    <div className="bg-ivory p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-taupe">WORKFLOW</div>
                    </div>
                    <div className="bg-ivory p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-taupe">DECISION RULES</div>
                    </div>
                    <div className="bg-ivory p-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-taupe">INTEGRATIONS</div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.4} className="mt-8 border-t border-charcoal/15 pt-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-copper">
                    LOGIC MAPPED
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ────── 03 / BUILD ────── */}
          <section className="relative w-full overflow-hidden bg-black py-28 md:py-48 border-y border-charcoal/40">
            {/* Subtle architectural grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #2a2926 1px, transparent 1px), linear-gradient(to bottom, #2a2926 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="w-full">
                <Reveal delay={0.1}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe mb-10">
                    <span className="text-copper">03</span> / BUILD
                  </div>
                </Reveal>

                <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-12 lg:gap-16">
                  <div className="flex-1">
                    <Reveal delay={0.15}>
                      <div className="font-sans text-[110px] md:text-[140px] lg:text-[170px] font-medium leading-[0.72] tracking-[-0.05em] text-copper/90 select-none">
                        03
                      </div>
                    </Reveal>
                    <Reveal delay={0.25} className="mt-8 md:mt-12">
                      <h2 className="font-sans text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-[680] leading-[1.02] tracking-[-0.025em] text-ivory">
                        The system leaves the<br />diagram and starts working.
                      </h2>
                    </Reveal>
                  </div>

                  <Reveal delay={0.2} className="flex justify-center lg:justify-end w-full lg:w-[600px] xl:w-[700px] shrink-0 overflow-x-auto pb-8 lg:pb-0">
                    <img 
                      src="/visuals/build.png" 
                      alt="System Architecture Build Phase Diagram" 
                      className="min-w-[360px] w-full max-w-[700px] h-auto object-contain"
                    />
                  </Reveal>
                </div>

                <Reveal delay={0.35} className="mt-10 md:mt-16 max-w-[600px]">
                  <p className="text-[16px] md:text-[18px] leading-[1.7] text-taupe">
                    Development follows the architecture — not the other way around. AI implementation, integrations, edge-case handling, internal testing, and iterative refinement happen against a defined structure. Every component is built to serve the system logic established in the previous stage. No improvisation. No feature creep.
                  </p>
                </Reveal>

                {/* Micro technical notation — INPUT → LOGIC → OUTPUT */}
                <Reveal delay={0.4} className="mt-14 md:mt-20">
                  <div className="border border-charcoal/40 bg-graphite/40 inline-flex items-center gap-0">
                    <div className="px-5 py-3 border-r border-charcoal/40">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-taupe">INPUT</span>
                    </div>
                    <div className="px-3 py-3">
                      <span className="font-mono text-[10px] text-taupe/60">→</span>
                    </div>
                    <div className="px-5 py-3 border-l border-r border-charcoal/40 bg-charcoal/30">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ivory font-medium">LOGIC</span>
                    </div>
                    <div className="px-3 py-3">
                      <span className="font-mono text-[10px] text-taupe/60">→</span>
                    </div>
                    <div className="px-5 py-3 border-l border-charcoal/40">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-taupe">OUTPUT</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.45} className="mt-8 border-t border-charcoal/40 pt-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-copper">
                    SYSTEM IN CONSTRUCTION
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ────── 04 / DEPLOY ────── */}
          <section className="relative px-6 md:px-10 mx-auto max-w-[1400px] py-24 md:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] xl:grid-cols-[1fr_620px] gap-12 lg:gap-16 items-center">
              <div>
                <Reveal delay={0.1}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe mb-8">
                    <span className="text-copper">04</span> / DEPLOY
                  </div>
                </Reveal>

                <div className="flex items-end gap-6 md:gap-10">
                  <Reveal delay={0.2}>
                    <h2 className="font-sans text-[32px] sm:text-[40px] md:text-[52px] lg:text-[56px] font-[650] leading-[1.04] tracking-[-0.02em] text-black max-w-[600px]">
                      Built is not the same as running.
                    </h2>
                  </Reveal>
                  <Reveal delay={0.15} className="hidden md:block shrink-0">
                    <div className="font-sans text-[80px] lg:text-[100px] font-medium leading-[0.75] tracking-[-0.04em] text-copper/90 select-none">
                      04
                    </div>
                  </Reveal>
                </div>

                <Reveal delay={0.3} className="mt-10 md:mt-14 max-w-[550px]">
                  <p className="text-[16px] md:text-[17px] leading-[1.7] text-charcoal">
                    A system isn't operational until the business is actually using it — under real conditions, with real data, inside real workflows. Deployment means production readiness, workflow adoption, monitoring, reliability under load, and clear human handoff where the system reaches its boundary. This is where construction becomes operation.
                  </p>
                </Reveal>

                <Reveal delay={0.4} className="mt-10 md:mt-14 border-t border-charcoal/15 pt-5 flex items-center gap-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                  </span>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal">
                    SYSTEM LIVE
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.25} className="flex justify-center lg:justify-end mt-16 lg:mt-0 lg:p-4">
                <img 
                  src="/visuals/deploy.png" 
                  alt="System Architecture Deploy Phase Diagram" 
                  className="w-full max-w-[620px] h-auto object-contain"
                />
              </Reveal>
            </div>
          </section>

          {/* ────── 05 / OPTIMIZE ────── */}
          <section className="relative px-6 md:px-10 mx-auto max-w-[1400px] border-t border-charcoal/20 pt-24 pb-16 md:pt-40 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] xl:grid-cols-[620px_1fr] gap-12 lg:gap-16 items-center">
              <Reveal delay={0.25} className="flex justify-center lg:justify-start order-2 lg:order-1 mt-16 lg:mt-0 lg:p-4">
                <img 
                  src="/visuals/optimize.png" 
                  alt="System Architecture Optimize Phase Diagram" 
                  className="w-full max-w-[620px] h-auto object-contain"
                />
              </Reveal>

              <div className="order-1 lg:order-2">
                <Reveal delay={0.1}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe mb-8">
                    <span className="text-copper">05</span> / OPTIMIZE
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="font-sans text-[80px] md:text-[100px] font-medium leading-[0.75] tracking-[-0.04em] text-copper/90 select-none">
                    05
                  </div>
                </Reveal>

                <Reveal delay={0.25} className="mt-6 md:mt-10">
                  <h2 className="font-sans text-[32px] sm:text-[40px] md:text-[52px] lg:text-[56px] font-[650] leading-[1.04] tracking-[-0.02em] text-black max-w-[600px]">
                    Deployment is where useful iteration begins.
                  </h2>
                </Reveal>

                <Reveal delay={0.35} className="mt-8 md:mt-12 max-w-[550px]">
                  <p className="text-[16px] md:text-[17px] leading-[1.7] text-charcoal">
                    Once a system is live, it starts generating real information — about workflows, automation performance, decision accuracy, integration reliability, and capacity limits. We observe, measure, and improve. Workflows are refined. Decision logic is sharpened. Integrations are deepened. The system becomes more capable as the business evolves around it.
                  </p>
                </Reveal>

                <Reveal delay={0.4} className="mt-10 md:mt-14 border-t border-charcoal/15 pt-5">
                  <div className="flex items-center gap-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-copper">
                      ITERATION ACTIVE
                    </div>
                    <span className="font-mono text-[10px] text-taupe">→</span>
                    <span className="font-mono text-[10px] text-taupe tracking-[0.15em]">CONTINUOUS</span>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Visual continuation — line extends beyond */}
            <Reveal delay={0.5} className="mt-16 md:mt-24">
              <div className="border-t border-charcoal/10 relative">
                <motion.div
                  className="absolute right-0 top-0 h-px bg-copper/30 origin-right"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </Reveal>
          </section>
        </div>

        {/* ━━━ CLOSING CTA ━━━ */}
        <section className="relative bg-black py-28 md:py-40">
          <div className="px-6 md:px-10 mx-auto max-w-[1400px]">
            <Reveal delay={0.1}>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                RESULT / SYSTEM
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 md:mt-14 max-w-[900px]">
              <h2 className="font-sans text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] font-[660] leading-[1.04] tracking-[-0.025em] text-ivory">
                The goal was never more technology. It was a system that actually works.
              </h2>
            </Reveal>

            <Reveal delay={0.3} className="mt-8 md:mt-10">
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-taupe max-w-[480px]">
                Five stages. One operational outcome. Built around the constraints of your business — not around ours.
              </p>
            </Reveal>

            <Reveal delay={0.4} className="mt-14 md:mt-18">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 border border-ivory bg-transparent px-8 py-4 text-[14px] font-medium text-ivory transition-colors duration-300 hover:bg-ivory hover:text-black rounded-[4px]"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
