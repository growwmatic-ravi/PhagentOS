import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

function detectIsDark(el: Element | null): boolean {
  let curr = el;
  while (curr && curr !== document.body && curr !== document.documentElement) {
    // 1. Check data-theme attribute if specified
    const themeAttr = curr.getAttribute("data-theme");
    if (themeAttr === "dark") return true;
    if (themeAttr === "light") return false;

    // 2. Check CSS classes for locked design system background colors
    const className = curr.className;
    if (typeof className === "string") {
      if (
        /\b(bg-black|bg-graphite|bg-\[#0b0b0a\]|bg-\[#141413\]|bg-\[#0e0e0d\])\b/i.test(
          className
        )
      ) {
        return true;
      }
      if (/\b(bg-ivory|bg-\[#f1ece3\]|bg-white)\b/i.test(className)) {
        return false;
      }
    }

    // 3. Check computed background color
    const style = window.getComputedStyle(curr);
    const bg = style.backgroundColor;
    if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
      const match = bg.match(/\d+/g);
      if (match && match.length >= 3) {
        const r = parseInt(match[0], 10);
        const g = parseInt(match[1], 10);
        const b = parseInt(match[2], 10);
        const a = match[3] !== undefined ? parseFloat(match[3]) : 1;
        if (a > 0.1) {
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          return brightness < 128;
        }
      }
    }

    curr = curr.parentElement;
  }

  // Check body or html background as fallback
  if (typeof window !== "undefined") {
    const bodyBg = window.getComputedStyle(document.body).backgroundColor;
    if (bodyBg && bodyBg !== "transparent" && bodyBg !== "rgba(0, 0, 0, 0)") {
      const match = bodyBg.match(/\d+/g);
      if (match && match.length >= 3) {
        const r = parseInt(match[0], 10);
        const g = parseInt(match[1], 10);
        const b = parseInt(match[2], 10);
        return (r * 299 + g * 587 + b * 114) / 1000 < 128;
      }
    }
  }

  return false;
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const checkState = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 25);

      const navHeight = headerRef.current?.offsetHeight || 80;
      // Sample at the vertical midpoint of the nav's height
      const sampleY = Math.max(10, Math.min(navHeight / 2, 40));

      const elements = document.elementsFromPoint(window.innerWidth / 2, sampleY);
      let behindEl = elements.find(
        (el) =>
          !el.closest("header") &&
          !el.closest("[role='dialog']") &&
          !el.classList.contains("fixed")
      );

      // Fallback check at lateral margin if center is empty
      if (!behindEl) {
        const sideElements = document.elementsFromPoint(24, sampleY);
        behindEl = sideElements.find(
          (el) =>
            !el.closest("header") &&
            !el.closest("[role='dialog']") &&
            !el.classList.contains("fixed")
        );
      }

      // Fallback to top main section if initial load has not settled
      if (!behindEl) {
        behindEl =
          document.querySelector("main section, section, main, [class*='min-h-screen']") ||
          undefined;
      }

      setIsDarkSection(detectIsDark(behindEl || null));
    };

    const onScrollOrUpdate = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkState);
    };

    // Initial check
    checkState();

    window.addEventListener("scroll", onScrollOrUpdate, { passive: true });
    window.addEventListener("resize", onScrollOrUpdate, { passive: true });

    // IntersectionObserver to react immediately to sections intersecting the nav midpoint
    const observer = new IntersectionObserver(
      () => {
        onScrollOrUpdate();
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    const targets = document.querySelectorAll("section, footer, main, [class*='min-h-screen']");
    targets.forEach((t) => observer.observe(t));

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrUpdate);
      window.removeEventListener("resize", onScrollOrUpdate);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && window.location.pathname === "/") {
      const el = document.querySelector(href.substring(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.assign(href);
    } else {
      window.location.assign(href);
    }
  };

  // Dynamic styling based on section behind nav and scroll state
  const headerBgClass = !scrolled
    ? "border-transparent bg-transparent"
    : isDarkSection
    ? "border-ivory/15 bg-black/95 backdrop-blur-sm"
    : "border-charcoal/15 bg-ivory/95 backdrop-blur-sm";

  const logoClass = isDarkSection ? "text-ivory" : "text-black";

  const navLinkClass = isDarkSection
    ? "text-taupe hover:text-ivory"
    : "text-charcoal/70 hover:text-black";

  const ctaButtonClass = isDarkSection
    ? "border-ivory bg-ivory text-black hover:bg-copper hover:border-copper hover:text-black"
    : "border-black bg-black text-ivory hover:bg-copper hover:border-copper hover:text-black";

  const hamburgerClass = isDarkSection || open ? "bg-ivory" : "bg-black";

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ease-out ${headerBgClass}`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          <a
            href="/"
            className={`font-sans text-[15px] font-bold uppercase tracking-[1px] transition-colors duration-300 ease-out ${logoClass}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.location.assign("/");
              }
            }}
          >
            PHAGENTOS
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className={`text-[14px] transition-colors duration-300 ease-out cursor-pointer ${navLinkClass}`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("/contact")}
              className={`group inline-flex items-center gap-2 border px-5 py-2.5 text-[13px] font-medium transition-colors duration-300 ease-out cursor-pointer ${ctaButtonClass}`}
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
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden cursor-pointer"
          >
            <span
              className={`h-px w-6 transition-all duration-300 ${hamburgerClass} ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 transition-all duration-300 ${hamburgerClass} ${
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
                  className="border-b border-charcoal py-5 text-left font-sans text-[40px] leading-none tracking-tight text-ivory cursor-pointer"
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
                onClick={() => handleNavClick("/contact")}
                className="inline-flex w-full items-center justify-center gap-2 border border-copper bg-copper px-5 py-4 text-[14px] font-medium text-black cursor-pointer"
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
