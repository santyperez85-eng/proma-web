import { RegistrationMark } from "./TechLabel";

interface SectionLabelProps {
  label: string;
  number?: string;
  className?: string;
}

export function SectionLabel({ label, number, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-8 ${className}`}>
      <RegistrationMark />
      {number && (
        <span
          className="text-[var(--proma-text-tertiary)]"
          style={{ fontFamily: 'var(--proma-mono)', fontSize: '0.6rem' }}
        >
          {number}
        </span>
      )}
      <span
        className="text-[var(--proma-text-tertiary)] uppercase tracking-widest"
        style={{ fontFamily: 'var(--proma-mono)', fontSize: '0.65rem' }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: 'var(--proma-border)' }} />
    </div>
  );
}
