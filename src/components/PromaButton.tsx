import { motion } from "motion/react";

interface PromaButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export function PromaButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  icon,
}: PromaButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-3 transition-all duration-200 cursor-pointer relative overflow-hidden";

  const variantStyles = {
    primary:
      "bg-[var(--proma-accent)] text-[var(--proma-bg)] hover:shadow-[0_0_30px_var(--proma-accent-glow)]",
    secondary:
      "bg-transparent text-[var(--proma-text-primary)] border border-[var(--proma-border-strong)] hover:border-[var(--proma-accent)] hover:text-[var(--proma-accent)]",
    ghost:
      "bg-transparent text-[var(--proma-text-secondary)] hover:text-[var(--proma-text-primary)] hover:bg-[var(--proma-surface)]",
  };

  const sizeStyles = {
    sm: "px-6 py-3 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-12 py-5 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={{
        fontFamily: "var(--proma-sans)",
        fontWeight: 600,
        borderRadius: variant === "primary" ? "var(--proma-radius-pill)" : "var(--proma-radius-pill)",
        letterSpacing: "0.01em",
      }}
    >
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  );
}
