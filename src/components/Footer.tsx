const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black pt-20 pb-8">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-12 border-b border-charcoal pb-16 md:flex-row md:items-start">
          <div>
            <span className="font-sans text-[16px] font-bold uppercase tracking-[1px] text-ivory">
              PHAGENTOS
            </span>
            <p className="mt-4 max-w-[32ch] text-[15px] leading-[1.6] text-taupe">
              AI systems that work for your business.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-[14px] text-taupe transition-colors duration-300 hover:text-ivory"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("#contact")}
            className="group inline-flex items-center gap-2 self-start border border-ivory/30 px-5 py-2.5 text-[13px] font-medium text-ivory transition-colors duration-300 hover:border-copper hover:text-copper"
          >
            Start a Project
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe/70">
            © 2026 PHAGENTOS
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe/70">
            Designed &amp; engineered with quiet power.
          </span>
        </div>
      </div>
    </footer>
  );
}
