import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Send, Calendar, Mail, MapPin } from "lucide-react";
import { PromaButton } from "../components/PromaButton";
import { ProcessStep } from "../components/ProcessStep";
import { supabase } from "../lib/supabase";

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }
      ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setErrorMsg(error.message || "Ocurrió un error al enviar tu mensaje. Por favor, intentá nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles: React.CSSProperties = {
    background: "transparent",
    borderBottom: "1px solid var(--proma-border-strong)",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderRadius: 0,
    fontFamily: "var(--proma-sans)",
  };

  return (
    <div className="min-h-screen pt-28 pb-24" style={{ background: "var(--proma-bg)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-[var(--proma-text-tertiary)] block mb-3"
            style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
          >
            © Get in touch
          </span>
          <h1
            className="text-[var(--proma-text-primary)] mb-4"
            style={{
              fontFamily: "var(--proma-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Empecemos a
            <br />
            <span className="text-[var(--proma-accent)]">construir algo</span>
          </h1>
          <p className="text-[var(--proma-text-secondary)] max-w-lg" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            Completá el formulario con los datos de tu proyecto.
            En 48 horas hábiles te respondemos con una evaluación inicial y próximos pasos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {!submitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      className="block mb-3 text-[var(--proma-text-secondary)]"
                      style={{ fontSize: "0.8rem", fontWeight: 500 }}
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-0 py-3 text-[var(--proma-text-primary)] outline-none transition-colors focus:border-[var(--proma-accent)]"
                      style={inputStyles}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-3 text-[var(--proma-text-secondary)]"
                      style={{ fontSize: "0.8rem", fontWeight: 500 }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-0 py-3 text-[var(--proma-text-primary)] outline-none transition-colors focus:border-[var(--proma-accent)]"
                      style={inputStyles}
                      placeholder="email@ejemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      className="block mb-3 text-[var(--proma-text-secondary)]"
                      style={{ fontSize: "0.8rem", fontWeight: 500 }}
                    >
                      Empresa / Proyecto
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-0 py-3 text-[var(--proma-text-primary)] outline-none transition-colors focus:border-[var(--proma-accent)]"
                      style={inputStyles}
                      placeholder="Nombre de la empresa o proyecto"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-3 text-[var(--proma-text-secondary)]"
                      style={{ fontSize: "0.8rem", fontWeight: 500 }}
                    >
                      Servicio de interés
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-0 py-3 text-[var(--proma-text-primary)] outline-none transition-colors focus:border-[var(--proma-accent)] cursor-pointer appearance-none"
                      style={{
                        ...inputStyles,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M3 5l3 3 3-3z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0 center",
                      }}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="base">Base — Identidad básica</option>
                      <option value="sistema">Sistema — Identidad escalable</option>
                      <option value="lanzamiento">Lanzamiento — Proyecto completo</option>
                      <option value="addon">Add-on específico</option>
                      <option value="otro">Otro / No estoy seguro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-3 text-[var(--proma-text-secondary)]"
                    style={{ fontSize: "0.8rem", fontWeight: 500 }}
                  >
                    Presupuesto orientativo
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-0 py-3 text-[var(--proma-text-primary)] outline-none transition-colors focus:border-[var(--proma-accent)] cursor-pointer appearance-none"
                    style={{
                      ...inputStyles,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M3 5l3 3 3-3z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0 center",
                    }}
                  >
                    <option value="">Seleccionar rango...</option>
                    <option value="2500-5000">$2.500 – $5.000 USD</option>
                    <option value="5000-10000">$5.000 – $10.000 USD</option>
                    <option value="10000-20000">$10.000 – $20.000 USD</option>
                    <option value="20000+">$20.000+ USD</option>
                    <option value="noseguro">No estoy seguro</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block mb-3 text-[var(--proma-text-secondary)]"
                    style={{ fontSize: "0.8rem", fontWeight: 500 }}
                  >
                    Contanos sobre tu proyecto *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-0 py-3 text-[var(--proma-text-primary)] outline-none transition-colors focus:border-[var(--proma-accent)] resize-none"
                    style={inputStyles}
                    placeholder="Qué necesitás, contexto del proyecto, plazos, restricciones..."
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.75rem" }}>
                    * campos requeridos
                  </span>
                  <div className="flex items-center gap-4">
                    {errorMsg && (
                      <span className="text-[var(--proma-accent)]" style={{ fontSize: "0.85rem", maxWidth: "250px", textAlign: "right" }}>
                        {errorMsg}
                      </span>
                    )}
                    <PromaButton variant="primary" size="lg" icon={<Send size={16} />} disabled={loading} loading={loading}>
                      Enviar brief
                    </PromaButton>
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
                style={{
                  border: "1px solid var(--proma-accent)",
                  background: "var(--proma-accent-dim)",
                  borderRadius: "var(--proma-radius-card)",
                }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mx-auto mb-5"
                  style={{ background: "var(--proma-accent)", borderRadius: "50%" }}
                >
                  <Send size={20} className="text-[var(--proma-bg)]" />
                </div>
                <h3
                  className="text-[var(--proma-text-primary)] mb-3"
                  style={{ fontFamily: "var(--proma-display)", fontSize: "1.4rem", fontWeight: 700 }}
                >
                  Brief recibido
                </h3>
                <p className="text-[var(--proma-text-secondary)] text-sm">
                  Te respondemos en máximo 48 horas hábiles con una evaluación inicial.
                </p>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            {/* How we start */}
            <div className="mb-10">
              <span
                className="text-[var(--proma-text-tertiary)] block mb-4"
                style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
              >
                © Cómo arrancamos
              </span>

              <div className="space-y-0">
                {[
                  {
                    number: "01",
                    title: "Enviás tu brief",
                    description: "Completá el formulario con los datos básicos. Cuanto más contexto, mejor.",
                  },
                  {
                    number: "02",
                    title: "Evaluación + propuesta",
                    description: "En 48hs te enviamos una evaluación inicial con scope, timeline y presupuesto estimado.",
                  },
                  {
                    number: "03",
                    title: "Kickoff",
                    description: "Si avanzamos, agendamos una call de kickoff para alinear detalles y arrancar.",
                  },
                ].map((step, i) => (
                  <ProcessStep key={step.number} {...step} isLast={i === 2} index={i} />
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div
              className="p-10"
              style={{
                border: "1px solid var(--proma-border)",
                background: "var(--proma-surface)",
                borderRadius: "var(--proma-radius-card)",
              }}
            >
              <h4
                className="text-[var(--proma-text-primary)] mb-5"
                style={{ fontFamily: "var(--proma-display)", fontSize: "1rem", fontWeight: 600 }}
              >
                Info directa
              </h4>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[var(--proma-accent)]" />
                  <div>
                    <span className="text-[var(--proma-text-tertiary)] block" style={{ fontSize: "0.7rem", marginBottom: "2px" }}>
                      Email
                    </span>
                    <a href="mailto:hola@proma.studio" className="text-[var(--proma-text-primary)] text-sm hover:text-[var(--proma-accent)] transition-colors">
                      hola@proma.studio
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[var(--proma-accent)]" />
                  <div>
                    <span className="text-[var(--proma-text-tertiary)] block" style={{ fontSize: "0.7rem", marginBottom: "2px" }}>
                      Ubicación
                    </span>
                    <span className="text-[var(--proma-text-primary)] text-sm">Buenos Aires, Argentina</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-[var(--proma-accent)]" />
                  <div>
                    <span className="text-[var(--proma-text-tertiary)] block" style={{ fontSize: "0.7rem", marginBottom: "2px" }}>
                      Agendar call
                    </span>
                    <a href="#" className="text-[var(--proma-text-primary)] text-sm hover:text-[var(--proma-accent)] transition-colors">
                      Calendly → proma.studio
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 flex items-center justify-between" style={{ borderTop: "1px solid var(--proma-border)" }}>
                <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.75rem" }}>
                  Horario: Lun–Vie 10:00–19:00 (ART)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}