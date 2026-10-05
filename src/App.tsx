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
import { PricingPage } from "./components/PricingPage";
import { ServicesPage } from "./components/ServicesPage";
import { ProcessPage } from "./components/ProcessPage";
import { ContactPage } from "./components/ContactPage";
import { CustomCursor } from "./components/ui/CustomCursor";

export default function App() {
  const path = window.location.pathname;

  let content;

  if (path === "/pricing" || path === "/pricing/") {
    content = <PricingPage />;
  } else if (path === "/services" || path === "/services/") {
    content = <ServicesPage />;
  } else if (path === "/process" || path === "/process/") {
    content = <ProcessPage />;
  } else if (path === "/contact" || path === "/contact/") {
    content = <ContactPage />;
  } else {
    content = (
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

  return (
    <>
      <CustomCursor />
      {content}
    </>
  );
}
