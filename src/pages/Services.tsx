import { motion } from "motion/react";
import { ArrowRight, Check, X, Plus } from "lucide-react";
import { PromaButton } from "../components/PromaButton";
import { SERVICES, ADDONS, WHAT_WE_AVOID } from "../components/data";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen pt-28 pb-24" style={{ background: "var(--proma-bg)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-[var(--proma-text-tertiary)] block mb-3"
            style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
          >
            © Services
          </span>
          <h1
            className="text-[var(--proma-text-primary)] mb-4"
            style={{
              fontFamily: "var(--proma-display)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Paquetes claros,
            <br />
            <span className="text-[var(--proma-accent)]">entregables reales</span>
          </h1>
          <p className="text-[var(--proma-text-secondary)] max-w-lg" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            Tres niveles de servicio diseñados para diferentes etapas de tu proyecto.
            Cada uno con scope definido, tiempos orientativos y deliverables concretos. Sin letra chica.
          </p>
        </div>

        {/* Service tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-8 flex flex-col transition-all duration-300 ${service.highlighted
                  ? "border-2 border-[var(--proma-accent)]"
                  : "border border-[var(--proma-border)] hover:border-[var(--proma-border-strong)]"
                }`}
              style={{
                background: service.highlighted ? "var(--proma-accent-dim)" : "var(--proma-surface)",
                borderRadius: "var(--proma-radius-card)",
              }}
            >
              {service.highlighted && (
                <div
                  className="absolute -top-3 left-6 px-4 py-1"
                  style={{
                    background: "var(--proma-accent)",
                    borderRadius: "var(--proma-radius-pill)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--proma-sans)",
                      fontSize: "0.65rem",
                      color: "var(--proma-bg)",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Recomendado
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <span
                  className="text-[var(--proma-text-tertiary)] block mb-2"
                  style={{ fontSize: "0.75rem" }}
                >
                  0{i + 1}
                </span>
                <h3
                  className={service.highlighted ? "text-[var(--proma-accent)]" : "text-[var(--proma-text-primary)]"}
                  style={{
                    fontFamily: "var(--proma-display)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  {service.name}
                </h3>
                <p className="text-[var(--proma-text-secondary)] text-sm mt-1">{service.tagline}</p>
              </div>

              {/* Price + Timeline */}
              <div className="flex items-baseline justify-between mb-6 pb-4" style={{ borderBottom: "1px solid var(--proma-border)" }}>
                <span className="text-[var(--proma-text-primary)]" style={{ fontSize: "1.15rem", fontWeight: 600 }}>
                  {service.price}
                </span>
                <span
                  className="px-3 py-1 text-xs"
                  style={{
                    background: "var(--proma-surface-elevated)",
                    color: "var(--proma-text-secondary)",
                    borderRadius: "var(--proma-radius-pill)",
                  }}
                >
                  {service.timeline}
                </span>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6 flex-1">
                {service.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-2.5">
                    <Check size={14} className="text-[var(--proma-accent)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--proma-text-secondary)] text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* For who */}
              <div
                className="mb-6 p-4"
                style={{
                  background: "var(--proma-surface-elevated)",
                  borderRadius: "var(--proma-radius-sm)",
                }}
              >
                <span className="text-[var(--proma-text-tertiary)] block mb-1" style={{ fontSize: "0.7rem", fontWeight: 500, textTransform: "uppercase" }}>
                  Para quién
                </span>
                <span className="text-[var(--proma-text-secondary)] text-sm">{service.forWho}</span>
              </div>

              {/* CTA */}
              <PromaButton
                variant={service.highlighted ? "primary" : "secondary"}
                size="md"
                onClick={() => onNavigate("contact")}
                icon={<ArrowRight size={14} />}
                className="w-full justify-center"
              >
                Consultar
              </PromaButton>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-24">
          <span
            className="text-[var(--proma-text-tertiary)] block mb-3"
            style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
          >
            © Add-ons
          </span>
          <h2
            className="text-[var(--proma-text-primary)] mb-4"
            style={{
              fontFamily: "var(--proma-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Complementos <span className="text-[var(--proma-accent)]">a medida</span>
          </h2>
          <p className="text-[var(--proma-text-secondary)] text-sm mb-8 max-w-lg">
            Sumá módulos específicos a cualquier paquete. Cada add-on tiene scope y entregable definido.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDONS.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 border group hover:border-[var(--proma-accent)] transition-colors"
                style={{
                  borderColor: "var(--proma-border)",
                  background: "var(--proma-surface)",
                  borderRadius: "var(--proma-radius-card)",
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Plus size={14} className="text-[var(--proma-accent)]" />
                    <span className="text-[var(--proma-text-primary)] text-sm" style={{ fontWeight: 500 }}>
                      {addon.name}
                    </span>
                  </div>
                  <span className="text-[var(--proma-accent)]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                    {addon.price}
                  </span>
                </div>
                <p className="text-[var(--proma-text-tertiary)] text-xs">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What we avoid */}
        <div className="mb-16">
          <div
            className="p-8 lg:p-10 border"
            style={{
              borderColor: "var(--proma-border)",
              background: "var(--proma-surface)",
              borderRadius: "var(--proma-radius-card)",
            }}
          >
            <h3
              className="text-[var(--proma-text-primary)] mb-8"
              style={{
                fontFamily: "var(--proma-display)",
                fontSize: "1.3rem",
                fontWeight: 600,
              }}
            >
              Fricción típica que <span className="text-[var(--proma-accent)]">eliminamos</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WHAT_WE_AVOID.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X size={14} className="text-[var(--proma-text-tertiary)] flex-shrink-0 mt-0.5" style={{ opacity: 0.5 }} />
                  <span className="text-[var(--proma-text-secondary)] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <p className="text-[var(--proma-text-secondary)] mb-4" style={{ fontSize: "1rem" }}>
            ¿No estás seguro qué paquete necesitás?
          </p>
          <PromaButton variant="primary" size="lg" onClick={() => onNavigate("contact")} icon={<ArrowRight size={16} />}>
            Contanos tu proyecto
          </PromaButton>
        </div>
      </div>
    </div>
  );
}
