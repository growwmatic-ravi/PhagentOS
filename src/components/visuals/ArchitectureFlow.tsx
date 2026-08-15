import { motion } from "framer-motion";

const stages = [
  { label: "INPUT", desc: "Signals from your business" },
  { label: "INTELLIGENCE", desc: "Reasoning, logic, decisions" },
  { label: "ACTION", desc: "Execution across systems" },
  { label: "OUTCOME", desc: "Operational leverage" },
];

export function ArchitectureFlow() {
  return (
    <div className="relative w-full">
      {/* Desktop: horizontal */}
      <div className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-[27px] h-px bg-charcoal">
          <motion.div
            className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-copper"
            initial={{ left: "0%", opacity: 0 }}
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="relative grid grid-cols-4 gap-6">
          {stages.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-charcoal bg-black">
                <span className="font-mono text-[10px] text-copper">
                  0{i + 1}
                </span>
              </div>
              <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-ivory">
                {s.label}
              </div>
              <p className="mt-2 max-w-[16ch] text-[13px] leading-relaxed text-taupe">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="relative flex flex-col md:hidden">
        <div className="absolute left-[27px] top-0 h-full w-px bg-charcoal" />
        {stages.map((s, i) => (
          <motion.div
            key={s.label}
            className="relative flex gap-5 py-6"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-charcoal bg-black">
              <span className="font-mono text-[10px] text-copper">
                0{i + 1}
              </span>
            </div>
            <div className="pt-2">
              <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-ivory">
                {s.label}
              </div>
              <p className="mt-2 max-w-[30ch] text-[13px] leading-relaxed text-taupe">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
