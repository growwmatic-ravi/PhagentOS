const links = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const go = (href: string) => {
    if (href.startsWith("/#") && window.location.pathname === "/") {
      document.querySelector(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.assign(href);
    }
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

          <div className="flex flex-col gap-8 items-start md:items-end">
            <button
              onClick={() => go("/contact")}
              className="group inline-flex items-center gap-2 border border-ivory/30 px-5 py-2.5 text-[13px] font-medium text-ivory transition-colors duration-300 hover:border-copper hover:text-copper"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </button>

            <div className="flex items-center gap-6">
              <a 
                href="https://wa.me/917737422401" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ivory/70 transition-colors duration-300 hover:text-copper"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/phagentos_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ivory/70 transition-colors duration-300 hover:text-copper"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
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
