import { motion } from "motion/react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  deliverables?: string[];
  isLast?: boolean;
  index?: number;
}

export function ProcessStep({ number, title, description, deliverables, isLast = false, index = 0 }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 group"
    >
      {/* Connector line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-10 h-10 flex items-center justify-center border border-[var(--proma-border-strong)] group-hover:border-[var(--proma-accent)] transition-colors duration-300"
          style={{ borderRadius: "var(--proma-radius-sm)", fontFamily: "var(--proma-mono)", fontSize: "0.75rem" }}
        >
          <span className="text-[var(--proma-accent)]">{number}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 min-h-[40px]" style={{ background: "var(--proma-border)" }} />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <h4
          className="text-[var(--proma-text-primary)] mb-1.5 group-hover:text-[var(--proma-accent)] transition-colors"
          style={{ fontSize: "1rem", fontWeight: 600 }}
        >
          {title}
        </h4>
        <p className="text-[var(--proma-text-secondary)] text-sm mb-3 max-w-md">{description}</p>
        {deliverables && (
          <div className="flex flex-wrap gap-1.5">
            {deliverables.map((d) => (
              <span
                key={d}
                className="inline-flex items-center px-2.5 py-1 text-xs"
                style={{
                  background: "var(--proma-surface-elevated)",
                  color: "var(--proma-text-secondary)",
                  borderRadius: "var(--proma-radius-pill)",
                  fontFamily: "var(--proma-mono)",
                  fontSize: "0.65rem",
                }}
              >
                {d}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
