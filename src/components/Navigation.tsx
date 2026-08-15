import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-charcoal/15 bg-ivory/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          <a
            href="#top"
            className="font-sans text-[15px] font-bold uppercase tracking-[1px] text-black"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            PHAGENTOS
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className="text-[14px] text-charcoal/70 transition-colors duration-300 hover:text-black"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("#contact")}
              className="group inline-flex items-center gap-2 border border-black bg-black px-5 py-2.5 text-[13px] font-medium text-ivory transition-colors duration-300 hover:bg-copper hover:border-copper"
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-px w-6 bg-black transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-black transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-black px-6 pb-10 pt-28 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(l.href)}
                  className="border-b border-charcoal py-5 text-left font-sans text-[40px] leading-none tracking-tight text-ivory"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-col gap-6"
            >
              <button
                onClick={() => handleNavClick("#contact")}
                className="inline-flex w-full items-center justify-center gap-2 border border-copper bg-copper px-5 py-4 text-[14px] font-medium text-black"
              >
                Start a Project →
              </button>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-taupe">
                PHAGENTOS — AI systems that work for your business.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
