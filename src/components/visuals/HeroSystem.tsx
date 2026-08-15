import { motion } from "framer-motion";

const stages = [
  { label: "BUSINESS", note: "01" },
  { label: "INTELLIGENCE", note: "02" },
  { label: "ACTION", note: "03" },
  { label: "OUTCOME", note: "04" },
];

export function HeroSystem() {
  return (
    <div className="relative mx-auto w-full max-w-sm select-none">
      {/* frame ticks */}
      <div className="pointer-events-none absolute -left-4 -top-4 h-3 w-3 border-l border-t border-charcoal/40" />
      <div className="pointer-events-none absolute -right-4 -top-4 h-3 w-3 border-r border-t border-charcoal/40" />
      <div className="pointer-events-none absolute -bottom-4 -left-4 h-3 w-3 border-b border-l border-charcoal/40" />
      <div className="pointer-events-none absolute -bottom-4 -right-4 h-3 w-3 border-b border-r border-charcoal/40" />

      <div className="relative flex flex-col gap-0">
        {/* vertical spine */}
        <svg
          className="pointer-events-none absolute left-[27px] top-0 h-full w-1"
          width="4"
          height="100%"
          viewBox="0 0 4 400"
          preserveAspectRatio="none"
        >
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="400"
            stroke="#2A2926"
            strokeWidth="1"
          />
          <motion.line
            x1="2"
            y1="0"
            x2="2"
            y2="400"
            stroke="#C47F5A"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
          <motion.circle
            cx="2"
            r="2.5"
            fill="#C47F5A"
            initial={{ cy: 0, opacity: 0 }}
            animate={{ cy: [0, 400], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "easeInOut",
              delay: 1.8,
            }}
          />
        </svg>

        {stages.map((s, i) => (
          <motion.div
            key={s.label}
            className="relative flex items-center gap-5 py-6"
            style={{ marginLeft: i % 2 === 1 ? 28 : 0 }}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-charcoal/50 bg-ivory">
              <span className="font-mono text-[10px] text-copper">{s.note}</span>
            </div>
            <div>
              <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-black">
                {s.label}
              </div>
              <div className="mt-1 h-px w-10 bg-charcoal/30" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
