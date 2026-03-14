import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PromaButton } from "../components/PromaButton";
import { MANIFESTO } from "../components/data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen pt-28 pb-24" style={{ background: "var(--proma-bg)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <span
              className="text-[var(--proma-text-tertiary)] block mb-3"
              style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              © About
            </span>
            <h1
              className="text-[var(--proma-text-primary)] mb-8"
              style={{
                fontFamily: "var(--proma-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
            >
              Un laboratorio,
              <br />
              <span className="text-[var(--proma-accent)]">no una agencia</span>
            </h1>
            <div className="space-y-5 text-[var(--proma-text-secondary)]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              <p>
                pro.ma studio nació de una convicción simple: el buen diseño se construye con método,
                no con inspiración aleatoria. Somos un equipo pequeño que trabaja como un laboratorio —
                cada proyecto es una investigación con hipótesis, restricciones y resultados medibles.
              </p>
              <p>
                No tenemos un "estilo propio" que aplicamos a todo. Tenemos un proceso que nos permite
                encontrar el sistema correcto para cada problema. Eso es lo que nos hace consistentes
                sin ser repetitivos.
              </p>
              <p>
                Trabajamos desde Buenos Aires con clientes en Latinoamérica y Europa.
                Nos interesan los proyectos donde el diseño tiene impacto real: no decoramos,
                construimos herramientas visuales.
              </p>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4", borderRadius: "var(--proma-radius-card)" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763833294545-e38e4fab1961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="pro.ma studio"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Caption */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.8rem" }}>
                Studio — Buenos Aires
              </span>
              <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.75rem" }}>
                est. 2021
              </span>
            </div>
          </div>
        </div>

        {/* Manifesto */}
        <div className="mb-24">
          <span
            className="text-[var(--proma-text-tertiary)] block mb-3"
            style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
          >
            © Manifiesto
          </span>
          <h2
            className="text-[var(--proma-text-primary)] mb-10"
            style={{
              fontFamily: "var(--proma-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Lo que nos mueve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MANIFESTO.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 border group hover:border-[var(--proma-accent)] transition-all duration-300"
                style={{
                  borderColor: "var(--proma-border)",
                  background: "var(--proma-surface)",
                  borderRadius: "var(--proma-radius-card)",
                }}
              >
                <span
                  className="text-[var(--proma-accent)] block mb-4"
                  style={{ fontSize: "0.8rem", fontWeight: 600 }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="text-[var(--proma-text-primary)] mb-3 group-hover:text-[var(--proma-accent)] transition-colors"
                  style={{
                    fontFamily: "var(--proma-display)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--proma-text-secondary)] text-sm" style={{ lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Numbers / Data */}
        <div className="mb-24">
          <span
            className="text-[var(--proma-text-tertiary)] block mb-3"
            style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
          >
            © Data
          </span>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "40+", label: "Proyectos completados", note: "2021–2026" },
              { value: "12", label: "Países", note: "LATAM + EU" },
              { value: "98%", label: "Entregas en plazo", note: "promedio" },
              { value: "4", label: "Personas en el equipo", note: "core team" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 lg:p-8 text-center"
                style={{
                  background: "var(--proma-surface)",
                  borderRadius: "var(--proma-radius-card)",
                }}
              >
                <span
                  className="text-[var(--proma-accent)] block mb-2"
                  style={{
                    fontFamily: "var(--proma-display)",
                    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                    fontWeight: 800,
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-[var(--proma-text-primary)] block text-sm mb-1">{stat.label}</span>
                <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.75rem" }}>
                  {stat.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <p className="text-[var(--proma-text-secondary)] mb-4" style={{ fontSize: "1rem" }}>
            Queremos conocer tu proyecto.
          </p>
          <PromaButton variant="primary" size="lg" onClick={() => onNavigate("contact")} icon={<ArrowRight size={16} />}>
            Empezar conversación
          </PromaButton>
        </div>
      </div>
    </div>
  );
}
