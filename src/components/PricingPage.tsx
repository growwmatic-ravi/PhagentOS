import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { FinalCTA } from "./FinalCTA";
import { Reveal, SectionLabel } from "./ui/Reveal";

const pricingData = {
  india: [
    { 
      id: "01", name: "AI AGENT", desc: "Autonomous task execution", 
      essential: { setup: "₹35,000 setup", rec: "₹4,999 / mo" },
      advanced: { setup: "₹50,000 setup", rec: "₹6,999 / mo" }
    },
    { 
      id: "02", name: "VOICE AI", desc: "Conversational agents", 
      essential: { setup: "₹30,000 setup", rec: "₹4,999 / mo" },
      advanced: { setup: "₹45,000 setup", rec: "₹6,999 / mo" }
    },
    { 
      id: "03", name: "WEB DEVELOPMENT", desc: "High-performance systems", 
      essential: { setup: "₹20,000", rec: "" },
      advanced: { setup: "₹30,000", rec: "" }
    },
    { 
      id: "04", name: "APP DEVELOPMENT", desc: "Native applications", 
      essential: { setup: "₹80,000", rec: "" },
      advanced: { setup: "₹1,40,000", rec: "" }
    },
  ],
  international: [
    { 
      id: "01", name: "AI AGENT", desc: "Autonomous task execution", 
      essential: { setup: "$1,500 setup", rec: "$149 / mo" },
      advanced: { setup: "$2,000 setup", rec: "$199 / mo" }
    },
    { 
      id: "02", name: "VOICE AI", desc: "Conversational agents", 
      essential: { setup: "$1,500 setup", rec: "$149 / mo" },
      advanced: { setup: "$2,500 setup", rec: "$249 / mo" }
    },
    { 
      id: "03", name: "WEB DEVELOPMENT", desc: "High-performance systems", 
      essential: { setup: "$700", rec: "" },
      advanced: { setup: "$4,000", rec: "" }
    },
    { 
      id: "04", name: "APP DEVELOPMENT", desc: "Native applications", 
      essential: { setup: "$2,000", rec: "" },
      advanced: { setup: "$3,500", rec: "" }
    },
  ]
};

const ArchitecturalVisual = () => (
  <div className="relative w-full aspect-square max-h-[440px] border border-charcoal/20 mx-auto lg:ml-auto lg:mr-0">
    <div className="absolute top-[33.33%] left-0 w-full h-px bg-charcoal/20"></div>
    <div className="absolute top-[66.66%] left-0 w-full h-px bg-charcoal/20"></div>
    <div className="absolute top-0 left-[33.33%] w-px h-full bg-charcoal/20"></div>
    <div className="absolute top-0 left-[66.66%] w-px h-full bg-charcoal/20"></div>
    
    <div className="absolute top-[33.33%] left-[33.33%] w-[33.33%] h-[33.33%] border border-copper/30 bg-copper/[0.02]"></div>
    
    <div className="absolute top-[33.33%] left-[33.33%] w-1.5 h-1.5 bg-copper -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute top-[66.66%] left-[66.66%] w-1.5 h-1.5 bg-copper -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute top-[33.33%] left-[66.66%] w-1.5 h-1.5 bg-copper -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute top-[66.66%] left-[33.33%] w-1.5 h-1.5 bg-copper -translate-x-1/2 -translate-y-1/2"></div>
  </div>
);

export function PricingPage() {
  const [region, setRegion] = useState<"india" | "international">("india");
  
  return (
    <div className="min-h-screen bg-ivory font-sans text-black antialiased flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-10 max-w-[1400px] mx-auto overflow-hidden">
          <SectionLabel index="06" title="PRICING" />
          
          <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-10 items-center">
            <div>
              <Reveal delay={0.1}>
                <h1 className="font-sans text-[44px] leading-[1.05] tracking-[-0.02em] font-[600] md:text-[68px] lg:text-[76px] xl:text-[88px] text-black pr-4 lg:pr-0">
                  Serious systems.
                  <br />
                  Without the agency machinery.
                </h1>
              </Reveal>
              
              <Reveal delay={0.2} className="mt-10 max-w-[42ch]">
                <p className="text-[17px] md:text-[19px] leading-[1.65] text-charcoal/80">
                  Pricing is structured around the actual system being built, with clear scope and no unnecessary agency overhead.
                </p>
              </Reveal>
            </div>
            
            <div className="hidden md:block w-full max-w-[480px] lg:max-w-none mx-auto">
              <Reveal delay={0.3}>
                <ArchitecturalVisual />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative px-6 md:px-10 pb-32 md:pb-48 max-w-[1400px] mx-auto">
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <h2 className="sr-only">Select Region for Pricing</h2>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal/60" id="region-label">
              Select Your Region
            </div>
            <div 
              className="inline-flex border border-charcoal/30 p-1 self-start" 
              role="tablist" 
              aria-labelledby="region-label"
            >
              {(["india", "international"] as const).map((r) => (
                <button
                  key={r}
                  role="tab"
                  aria-selected={region === r}
                  aria-controls={`pricing-panel-${r}`}
                  id={`tab-${r}`}
                  onClick={() => setRegion(r)}
                  className={`relative px-7 py-3 font-mono text-[12px] uppercase tracking-[0.15em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${
                    region === r ? "text-ivory" : "text-charcoal/60 hover:text-black"
                  }`}
                >
                  {region === r && (
                    <motion.span
                      layoutId="pricing-page-region-pill"
                      className="absolute inset-0 bg-copper"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative z-10">
                    {r}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 md:mt-24 border-t border-charcoal/20 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={region}
                role="tabpanel"
                id={`pricing-panel-${region}`}
                aria-labelledby={`tab-${region}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {pricingData[region].map((row) => (
                  <div
                    key={row.id}
                    className="group flex flex-col xl:flex-row xl:items-start gap-8 xl:gap-12 border-b border-charcoal/20 py-10 md:py-14"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 flex-1">
                      <div className="flex items-baseline gap-6 md:gap-8 min-w-[280px]">
                        <span className="font-mono text-[13px] text-copper shrink-0">{row.id}</span>
                        <span className="font-sans text-[26px] md:text-[32px] font-[600] tracking-[-0.01em] text-black uppercase">
                          {row.name}
                        </span>
                      </div>
                      <div className="text-[16px] md:text-[18px] text-charcoal/70 max-w-[32ch] xl:pt-2">
                        {row.desc}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row xl:justify-end gap-10 md:gap-16 lg:min-w-[480px]">
                      {/* Essential Tier */}
                      <div className="flex flex-col min-w-[140px]">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe mb-4">
                          ESSENTIAL
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[20px] md:text-[22px] font-medium text-black whitespace-nowrap">
                            {row.essential.setup}
                          </span>
                          {row.essential.rec && (
                            <span className="font-mono text-[13px] text-charcoal/60 whitespace-nowrap">
                              · {row.essential.rec}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="hidden sm:block w-px bg-charcoal/20"></div>

                      {/* Advanced Tier */}
                      <div className="flex flex-col min-w-[140px]">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe mb-4">
                          ADVANCED
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[20px] md:text-[22px] font-medium text-black whitespace-nowrap">
                            {row.advanced.setup}
                          </span>
                          {row.advanced.rec && (
                            <span className="font-mono text-[13px] text-charcoal/60 whitespace-nowrap">
                              · {row.advanced.rec}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Custom Scoping Section */}
        <section className="relative px-6 md:px-10 pb-32 md:pb-48 max-w-[1400px] mx-auto border-t border-charcoal/20 pt-20 md:pt-32">
          <Reveal>
            <div className="max-w-[800px]">
              <h2 className="font-sans text-[36px] sm:text-[44px] md:text-[56px] font-[650] leading-[1.05] tracking-[-0.02em] text-black">
                Not every system fits neatly into two tiers. Tell us what you're building.
              </h2>
              <p className="mt-8 text-[17px] md:text-[19px] leading-[1.65] text-charcoal max-w-[600px]">
                If your operational constraints require a custom architecture, we define the scope first and build around the exact requirements of your business.
              </p>
              
              <div className="mt-12">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-black px-8 py-4 text-[14px] font-medium text-ivory transition-colors duration-300 hover:bg-black/80 rounded-[4px]"
                >
                  Start a Project
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
