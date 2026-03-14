export function TechLabel({
  children,
  accent = false,
  className = "",
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm tracking-wider uppercase ${
        accent
          ? "bg-[var(--proma-accent-dim)] text-[var(--proma-accent)]"
          : "bg-[var(--proma-surface-elevated)] text-[var(--proma-text-secondary)]"
      } ${className}`}
      style={{ fontFamily: 'var(--proma-mono)', fontSize: '0.65rem', letterSpacing: '0.08em' }}
    >
      {children}
    </span>
  );
}

export function Coordinate({ x, y, className = "" }: { x: string; y: string; className?: string }) {
  return (
    <span
      className={`text-[var(--proma-text-tertiary)] ${className}`}
      style={{ fontFamily: 'var(--proma-mono)', fontSize: '0.6rem' }}
    >
      [{x}, {y}]
    </span>
  );
}

export function VersionTag({ version, className = "" }: { version: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 ${className}`}
      style={{ fontFamily: 'var(--proma-mono)', fontSize: '0.65rem', color: 'var(--proma-text-tertiary)' }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--proma-accent)]" style={{ opacity: 0.6 }} />
      {version}
    </span>
  );
}

export function DotMarker({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block w-1 h-1 rounded-full bg-[var(--proma-accent)] ${className}`}
      style={{ opacity: 0.7 }}
    />
  );
}

export function RegistrationMark({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" className={className} style={{ opacity: 0.3 }}>
      <circle cx="6" cy="6" r="5" fill="none" stroke="var(--proma-text-tertiary)" strokeWidth="0.5" />
      <line x1="6" y1="0" x2="6" y2="12" stroke="var(--proma-text-tertiary)" strokeWidth="0.5" />
      <line x1="0" y1="6" x2="12" y2="6" stroke="var(--proma-text-tertiary)" strokeWidth="0.5" />
    </svg>
  );
}
