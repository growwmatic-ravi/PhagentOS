import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({
  index,
  title,
  dark = false,
  className = "",
}: {
  index: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div
        className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] ${
          dark ? "text-taupe" : "text-charcoal"
        }`}
      >
        <span className={dark ? "text-copper" : "text-copper"}>{index}</span>
        <span className="h-px w-8 bg-current opacity-40" />
        <span>{title}</span>
      </div>
    </Reveal>
  );
}
