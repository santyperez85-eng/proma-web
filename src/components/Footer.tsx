import { ArrowUpRight } from "lucide-react";
import { RollingText } from "./RollingText";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      className="relative"
      style={{ background: "var(--proma-surface)", borderTop: "1px solid var(--proma-border)" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 bg-[var(--proma-accent)] flex items-center justify-center"
                style={{ borderRadius: "8px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--proma-display)",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "var(--proma-bg)",
                  }}
                >
                  P
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--proma-display)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--proma-text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                pro.ma
              </span>
            </div>
            <p className="text-[var(--proma-text-secondary)] text-sm max-w-sm mb-5" style={{ lineHeight: 1.7 }}>
              Laboratorio de diseño. Construimos sistemas visuales con precisión, claridad y propósito.
              Cada proyecto es una pieza que funciona.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.8rem" }}>
                Buenos Aires, AR
              </span>
              <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.8rem" }}>
                UTC-3
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[var(--proma-text-tertiary)] uppercase mb-5 tracking-wider"
              style={{ fontFamily: "var(--proma-sans)", fontSize: "0.7rem", fontWeight: 500 }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { id: "home", label: "Inicio" },
                { id: "work", label: "Work" },
                { id: "services", label: "Servicios" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-[var(--proma-text-secondary)] hover:text-[var(--proma-text-primary)] transition-colors text-sm text-left cursor-pointer"
                >
                  <RollingText>{item.label}</RollingText>
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-[var(--proma-text-tertiary)] uppercase mb-5 tracking-wider"
              style={{ fontFamily: "var(--proma-sans)", fontSize: "0.7rem", fontWeight: 500 }}
            >
              Conectar
            </h4>
            <div className="flex flex-col gap-3">
              {["Instagram", "Behance", "LinkedIn", "Dribbble"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[var(--proma-text-secondary)] hover:text-[var(--proma-text-primary)] transition-colors text-sm flex items-center gap-1.5 group"
                >
                  <RollingText>{item}</RollingText>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row — massive year */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-8"
          style={{ borderTop: "1px solid var(--proma-border)" }}
        >
          <span
            style={{
              fontFamily: "var(--proma-display)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 800,
              color: "var(--proma-text-primary)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              opacity: 0.1,
            }}
          >
            © 2026
          </span>
          <span
            className="text-[var(--proma-text-tertiary)]"
            style={{ fontSize: "0.75rem" }}
          >
            pro.ma studio. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
