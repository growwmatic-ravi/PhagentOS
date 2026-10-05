import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Reveal } from "./ui/Reveal";

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-black antialiased selection:bg-copper selection:text-ivory">
      <Navigation />
      
      <main className="pt-32 md:pt-48">
        {/* SECTION 1 — HERO */}
        <section className="relative px-6 md:px-10 mx-auto max-w-[1400px]">
          <Reveal delay={0.1}>
            <div className="font-mono text-[13px] uppercase tracking-[0.15em] text-taupe font-medium">
              <span className="text-copper">[</span> 02 / WHAT WE BUILD <span className="text-copper">]</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2} className="mt-16 md:mt-24">
            <h1 className="font-sans text-[52px] sm:text-[64px] md:text-[84px] lg:text-[90px] font-bold leading-[1.02] tracking-[-0.03em] text-black max-w-[900px]">
              Not another feature.<br />A working system.
            </h1>
          </Reveal>

          <Reveal delay={0.3} className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end pb-16 md:pb-20">
            <p className="text-[16px] md:text-[18px] leading-[1.65] text-charcoal max-w-[450px]">
              AI employees, voice systems, digital products and custom infrastructure. Built around the workflows that keep your business moving — not beside them.
            </p>
            <div className="md:justify-self-end w-full md:w-auto md:min-w-[400px]">
              <div className="border-t border-charcoal/20 pt-6 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-taupe leading-[1.8]">
                <p>BUSINESS / LOGIC / EXECUTION</p>
                <p className="mt-2">FOUR CAPABILITIES. ONE OPERATIONAL SYSTEM.</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION 2 — CAPABILITY 01 (AI EMPLOYEES) */}
        <section id="ai-employees" className="relative px-6 md:px-10 mx-auto max-w-[1400px] border-t border-charcoal/20 pt-20 md:pt-32 pb-20 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-10 md:gap-16">
            <Reveal delay={0.1}>
              <div className="font-mono text-[110px] lg:text-[140px] font-normal leading-[0.8] tracking-[-0.03em] text-copper md:mt-[54px]">
                01
              </div>
            </Reveal>
            
            <div className="max-w-[700px]">
              <Reveal delay={0.2}>
                <div className="font-mono text-[13px] uppercase tracking-[0.15em] text-taupe mb-8 md:mb-10 font-medium">
                  01 / AI EMPLOYEES
                </div>
                <h2 className="font-sans text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-black">
                  Digital workers built for<br />actual operations.
                </h2>
                <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.65] text-charcoal max-w-[550px]">
                  These systems take on repetitive operational work that normally consumes human time — from handling requests and qualifying information to updating systems and moving tasks through defined workflows. They operate inside the tools your business already uses rather than existing as another disconnected chatbot.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 md:mt-24 border-t border-charcoal/20 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-10 md:gap-16">
              <div className="hidden md:block"></div>
              <Reveal delay={0.3}>
                <div className="font-mono text-[12px] uppercase tracking-[0.15em] text-black font-medium">
                  INPUT → DECISION → ACTION → SYSTEM
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-taupe font-medium">
                  AUTOMATION LAYER / WORK WITHIN YOUR EXISTING TOOLS
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 3 — CAPABILITY 02 (VOICE AI) */}
        <section id="voice-ai" className="relative px-6 md:px-10 mx-auto max-w-[1400px] border-t border-charcoal/20 pt-20 md:pt-32 pb-20 md:pb-32">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-16">
            <div className="max-w-[700px] w-full">
              <Reveal delay={0.2}>
                <div className="font-mono text-[13px] uppercase tracking-[0.15em] text-taupe mb-8 md:mb-10 font-medium">
                  02 / VOICE AI
                </div>
                <h2 className="font-sans text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-black">
                  Conversations that don't<br />need a human every time.
                </h2>
                <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.65] text-charcoal max-w-[550px]">
                  Build inbound and outbound voice systems capable of handling real business conversations at scale. They can qualify leads, answer routine questions, schedule appointments, route calls and follow defined conversation logic — with availability beyond business hours.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="md:ml-auto md:w-[300px] flex md:justify-end">
              <div className="font-mono text-[110px] lg:text-[140px] font-normal leading-[0.8] tracking-[-0.03em] text-copper md:mt-[54px]">
                02
              </div>
            </Reveal>
          </div>

          <div className="mt-16 md:mt-24 border-t border-charcoal/20 pt-8">
            <Reveal delay={0.3}>
              <div className="font-mono text-[12px] uppercase tracking-[0.15em] text-black font-medium">
                CALL → UNDERSTAND → DECIDE → ACT
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-taupe font-medium">
                VOICE / INBOUND + OUTBOUND / ACTION-CONNECTED
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 4 — CAPABILITY 03 (DIGITAL PRODUCTS) */}
        <section id="digital-products" className="relative px-6 md:px-10 mx-auto max-w-[1400px] border-t border-charcoal/20 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-10 md:gap-16">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-6 md:block">
                <div className="font-mono text-[100px] lg:text-[120px] font-normal leading-[0.8] tracking-[-0.03em] text-copper">
                  03
                </div>
                <div className="font-mono text-[13px] uppercase tracking-[0.15em] text-taupe md:hidden font-medium">
                  03 / DIGITAL PRODUCTS
                </div>
              </div>
            </Reveal>
            
            <div className="max-w-[900px]">
              <Reveal delay={0.2}>
                <div className="hidden md:block font-mono text-[13px] uppercase tracking-[0.15em] text-taupe mb-8 md:mb-10 font-medium">
                  03 / DIGITAL PRODUCTS
                </div>
                <h2 className="font-sans text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-black">
                  No template thinking. Just the<br />product.
                </h2>
              </Reveal>

              <Reveal delay={0.3} className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 lg:gap-20">
                <div className="flex flex-col gap-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-black font-medium">
                    INTERFACE / BUSINESS REQUIREMENTS
                  </div>
                  
                  {/* Axonometric architectural sketch */}
                  <svg width="100%" height="90" viewBox="0 0 200 90" className="opacity-90">
                    <g stroke="#2A2926" strokeWidth="1" fill="none">
                      {/* Base wireframe */}
                      <polygon points="100,75 160,45 100,15 40,45" strokeDasharray="2 3" />
                      {/* Vertical structure */}
                      <line x1="40" y1="45" x2="40" y2="25" />
                      <line x1="160" y1="45" x2="160" y2="25" />
                      <line x1="100" y1="75" x2="100" y2="55" />
                      {/* Top wireframe & accents */}
                      <polygon points="100,55 160,25 100,-5 40,25" stroke="#C47F5A" />
                      <circle cx="100" cy="55" r="2.5" fill="#C47F5A" stroke="none" />
                      <circle cx="160" cy="25" r="2" fill="#2A2926" stroke="none" />
                      <circle cx="40" cy="25" r="2" fill="#2A2926" stroke="none" />
                      <circle cx="100" cy="-5" r="2" fill="#2A2926" stroke="none" />
                      {/* Central integration axis */}
                      <line x1="100" y1="15" x2="100" y2="75" strokeDasharray="1 3" />
                    </g>
                  </svg>

                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe font-medium">
                    CUSTOMERS / PROCESS / DATA
                  </div>
                </div>
                <p className="text-[16px] md:text-[18px] leading-[1.65] text-charcoal">
                  Websites and applications designed around the actual requirements of the business — its customers, internal processes, data and operational constraints. No template-first thinking. The interface is designed around what the product needs to accomplish.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 5 — CAPABILITY 04 (CUSTOM SYSTEMS) */}
        <section id="custom-systems" className="relative px-6 md:px-10 mx-auto max-w-[1400px] border-y border-charcoal/20 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-10 md:gap-16">
            <Reveal delay={0.1} className="md:mt-14">
              <div className="font-mono text-[100px] lg:text-[120px] font-normal leading-[0.8] tracking-[-0.03em] text-copper">
                04
              </div>
            </Reveal>
            
            <div className="max-w-[700px]">
              <Reveal delay={0.2}>
                <div className="font-mono text-[13px] uppercase tracking-[0.15em] text-taupe mb-8 md:mb-10 font-medium">
                  04 / CUSTOM SYSTEMS
                </div>
                <h2 className="font-sans text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-black">
                  When the whole workflow is<br />the problem.
                </h2>
                <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.65] text-charcoal max-w-[550px]">
                  For businesses where the existing stack is fragmented, PHAGENTOS connects tools, data, people and automated decisions into one operational system. These are bespoke systems designed around the specific constraints of the business — with integration and leverage at the center.
                </p>
              </Reveal>

              <Reveal delay={0.3} className="mt-10 md:mt-12 border-t border-charcoal/20 pt-8 flex flex-col md:flex-row justify-between md:items-center gap-8">
                <div>
                  <div className="font-mono text-[12px] uppercase tracking-[0.15em] text-black font-medium">
                    TOOLS ↔ DATA ↔ PEOPLE ↔ AUTOMATION
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-taupe font-medium">
                    OPERATIONAL INFRASTRUCTURE / BUILT AROUND YOUR CONSTRAINTS
                  </div>
                </div>
                
                {/* 4-node structural diagram */}
                <svg width="180" height="40" viewBox="0 0 180 40" className="opacity-90 flex-shrink-0">
                  <g stroke="#2A2926" strokeWidth="1" fill="none">
                    {/* Connecting path */}
                    <path d="M 20,20 L 160,20" strokeDasharray="3 3" />
                    
                    {/* Node 1: Tools */}
                    <rect x="15" y="15" width="10" height="10" fill="#F1ECE3" />
                    {/* Node 2: Data */}
                    <polygon points="65,14 72,20 65,26 58,20" fill="#2A2926" />
                    {/* Node 3: People */}
                    <circle cx="115" cy="20" r="4" fill="#F1ECE3" />
                    {/* Node 4: Automation */}
                    <rect x="156" y="16" width="8" height="8" fill="#C47F5A" stroke="none" />
                    
                    {/* Technical accents */}
                    <line x1="20" y1="5" x2="20" y2="10" />
                    <line x1="160" y1="30" x2="160" y2="35" stroke="#C47F5A" />
                    <line x1="65" y1="30" x2="65" y2="38" strokeDasharray="1 2" />
                    <line x1="115" y1="5" x2="115" y2="12" strokeDasharray="1 2" />
                  </g>
                </svg>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CLOSING CTA */}
        <section className="relative bg-black py-24 md:py-32">
          <div className="px-6 md:px-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
            <Reveal delay={0.1}>
              <div className="font-mono text-[13px] uppercase tracking-[0.15em] text-taupe font-medium">
                THE NEXT SYSTEM / YOUR BUSINESS
              </div>
            </Reveal>
            
            <Reveal delay={0.2} className="mt-8">
              <h2 className="font-sans text-[42px] sm:text-[56px] md:text-[72px] font-[650] leading-[1.05] tracking-[-0.02em] text-ivory">
                Show us where the work<br />gets stuck.
              </h2>
            </Reveal>
            
            <Reveal delay={0.3} className="mt-6 md:mt-8">
              <p className="text-[16px] md:text-[18px] leading-[1.65] text-taupe max-w-[500px]">
                We'll define what the system needs to do. Then build it to do exactly that.
              </p>
            </Reveal>
            
            <Reveal delay={0.4} className="mt-12 md:mt-16">
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
