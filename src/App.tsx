import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { WhatWeBuild } from "./components/WhatWeBuild";
import { SystemSection } from "./components/SystemSection";
import { Process } from "./components/Process";
import { Conviction } from "./components/Conviction";
import { SelectedWork } from "./components/SelectedWork";
import { WhyPhagentos } from "./components/WhyPhagentos";
import { Pricing } from "./components/Pricing";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-black antialiased">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <WhatWeBuild />
        <SystemSection />
        <Process />
        <Conviction />
        <SelectedWork />
        <WhyPhagentos />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
