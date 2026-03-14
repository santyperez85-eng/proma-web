interface PromaBadgeProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function PromaBadge({ children, active = false, onClick, className = "" }: PromaBadgeProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-2 transition-all duration-200 cursor-pointer ${active
          ? "bg-[var(--proma-accent)] text-[var(--proma-bg)]"
          : "bg-[var(--proma-surface)] text-[var(--proma-text-secondary)] border border-[var(--proma-border)] hover:border-[var(--proma-text-tertiary)] hover:text-[var(--proma-text-primary)]"
        } ${className}`}
      style={{
        fontFamily: "var(--proma-sans)",
        fontSize: "0.8rem",
        fontWeight: active ? 600 : 400,
        borderRadius: "var(--proma-radius-pill)",
      }}
    >
      {children}
    </button>
  );
}
