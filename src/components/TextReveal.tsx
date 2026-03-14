import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface TextRevealProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  /** Color the text starts at (dark, nearly invisible) */
  fromColor?: string;
  /** Color the text ends at (readable) */
  toColor?: string;
  /** Delay between each word in seconds */
  wordDelay?: number;
  /** Base delay before animation starts */
  baseDelay?: number;
}

export function TextReveal({
  children,
  className = "",
  style = {},
  fromColor = "rgba(255, 255, 255, 0.12)",
  toColor = "var(--proma-text-secondary)",
  wordDelay = 0.04,
  baseDelay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const words = children.split(" ");

  return (
    <span ref={ref} className={className} style={{ ...style, display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ color: fromColor }}
          animate={isInView ? { color: toColor } : { color: fromColor }}
          transition={{
            duration: 0.5,
            delay: baseDelay + i * wordDelay,
            ease: "easeOut",
          }}
          style={{ display: "inline" }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
