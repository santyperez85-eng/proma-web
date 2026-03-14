import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PromaButton } from "../components/PromaButton";
import { PROJECTS } from "../components/data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ProjectDetailProps {
  onNavigate: (page: string) => void;
}

const DETAIL_DATA: Record<string, {
  objective: string;
  constraints: string[];
  system: string;
  deliverables: string[];
  results: string[];
}> = {
  "PM-001": {
    objective: "Diseñar un sistema de packaging coherente para 12 SKUs de infusiones premium, que funcione en retail y e-commerce.",
    constraints: ["Impresión offset 4 tintas", "Sustrato reciclado obligatorio", "Legibilidad a distancia de góndola", "Compatible con 3 familias de producto"],
    system: "Grid modular de 4 columnas con zona de marca fija. Paleta por familia (herbales, frutales, especiados). Tipografía mixta: sans para datos, serif para nombre.",
    deliverables: ["12 artes finales", "Manual de sistema packaging", "Mockups para presentación", "Archivos de preprensa"],
    results: ["Implementación completa en 3 tiendas", "Reconocimiento positivo en góndola", "Consistencia 100% en producción"],
  },
  "PM-002": {
    objective: "Crear la identidad visual completa para una editorial independiente de ensayo y ficción contemporánea.",
    constraints: ["Presupuesto ajustado", "Debe funcionar en B/N y color", "Escalable a colecciones futuras"],
    system: "Sistema basado en tipografía como elemento central. Logo tipográfico con variable weight. Grid editorial para portadas con zona flexible por colección.",
    deliverables: ["Logo + variantes", "Sistema tipográfico", "Colofón", "Templates de portada", "Guideline"],
    results: ["Lanzamiento de 4 títulos", "Cobertura en medios especializados", "Sistema adoptado por el equipo interno"],
  },
  "PM-003": {
    objective: "Rebranding integral de un estudio de arquitectura con 15 años de trayectoria. Actualizar sin perder reconocimiento.",
    constraints: ["Transición gradual (6 meses)", "Señalética física existente", "Sitio web responsive obligatorio"],
    system: "Identidad basada en líneas constructivas y proporción áurea. Paleta reducida: negro, blanco, gris cálido. Tipografía sans geométrica.",
    deliverables: ["Identidad completa", "Señalética interior", "Diseño web", "Papelería", "Manual de marca"],
    results: ["Transición completada sin fricciones", "Aumento de consultas web +40%", "Reconocimiento mantenido con imagen actualizada"],
  },
};

export function ProjectDetail({ onNavigate }: ProjectDetailProps) {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === projectId);
  const detail = DETAIL_DATA[projectId || ""] || DETAIL_DATA["PM-001"];

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen pt-28 pb-24" style={{ background: "var(--proma-bg)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/work")}
          className="flex items-center gap-2 text-[var(--proma-text-secondary)] hover:text-[var(--proma-accent)] transition-colors mb-10 cursor-pointer"
          style={{ fontFamily: "var(--proma-sans)", fontSize: "0.85rem" }}
        >
          <ArrowLeft size={14} />
          Volver a Work
        </motion.button>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 text-xs"
                style={{
                  background: "var(--proma-accent)",
                  color: "var(--proma-bg)",
                  borderRadius: "var(--proma-radius-pill)",
                  fontWeight: 600,
                }}
              >
                {project.id}
              </span>
              <span
                className="px-3 py-1 text-xs"
                style={{
                  background: "var(--proma-surface-elevated)",
                  color: "var(--proma-text-secondary)",
                  borderRadius: "var(--proma-radius-pill)",
                }}
              >
                {project.status}
              </span>
            </div>
            <h1
              className="text-[var(--proma-text-primary)] mb-3"
              style={{
                fontFamily: "var(--proma-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              {project.title}
            </h1>
            <p className="text-[var(--proma-text-secondary)] text-lg">{project.client}</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="space-y-3">
              <div>
                <span className="text-[var(--proma-text-tertiary)] block mb-1" style={{ fontSize: "0.7rem", fontWeight: 500, textTransform: "uppercase" }}>
                  Categoría
                </span>
                <span className="text-[var(--proma-text-primary)] text-sm">{project.category}</span>
              </div>
              <div>
                <span className="text-[var(--proma-text-tertiary)] block mb-1" style={{ fontSize: "0.7rem", fontWeight: 500, textTransform: "uppercase" }}>
                  Año
                </span>
                <span className="text-[var(--proma-text-primary)] text-sm">{project.year}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 lg:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs"
                    style={{
                      background: "var(--proma-surface-elevated)",
                      color: "var(--proma-text-secondary)",
                      borderRadius: "var(--proma-radius-pill)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-20 overflow-hidden"
          style={{
            aspectRatio: "16/9",
            borderRadius: "var(--proma-radius-card)",
          }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Lab sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span
              className="text-[var(--proma-text-tertiary)] block mb-4"
              style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              © Ficha de proyecto
            </span>
            <div className="mb-8">
              <h3 className="text-[var(--proma-text-primary)] mb-2" style={{ fontFamily: "var(--proma-display)", fontSize: "1.1rem", fontWeight: 600 }}>Objetivo</h3>
              <p className="text-[var(--proma-text-secondary)] text-sm" style={{ lineHeight: 1.7 }}>{detail.objective}</p>
            </div>
            <div className="mb-8">
              <h3 className="text-[var(--proma-text-primary)] mb-3" style={{ fontFamily: "var(--proma-display)", fontSize: "1.1rem", fontWeight: 600 }}>Constraints</h3>
              <div className="space-y-2">
                {detail.constraints.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[var(--proma-accent)] flex-shrink-0 mt-0.5" style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[var(--proma-text-secondary)] text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-[var(--proma-text-primary)] mb-2" style={{ fontFamily: "var(--proma-display)", fontSize: "1.1rem", fontWeight: 600 }}>Sistema</h3>
              <p className="text-[var(--proma-text-secondary)] text-sm" style={{ lineHeight: 1.7 }}>{detail.system}</p>
            </div>
          </div>

          <div>
            <span
              className="text-[var(--proma-text-tertiary)] block mb-4"
              style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              © Output
            </span>
            <div className="mb-10">
              <h3 className="text-[var(--proma-text-primary)] mb-3" style={{ fontFamily: "var(--proma-display)", fontSize: "1.1rem", fontWeight: 600 }}>Entregables</h3>
              <div className="flex flex-wrap gap-2">
                {detail.deliverables.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1.5 text-xs"
                    style={{
                      background: "var(--proma-surface-elevated)",
                      color: "var(--proma-text-secondary)",
                      borderRadius: "var(--proma-radius-pill)",
                      fontFamily: "var(--proma-mono)",
                      fontSize: "0.7rem",
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-[var(--proma-text-primary)] mb-3" style={{ fontFamily: "var(--proma-display)", fontSize: "1.1rem", fontWeight: 600 }}>Resultados</h3>
              <div className="space-y-3">
                {detail.results.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 border"
                    style={{
                      borderColor: "var(--proma-border)",
                      background: "var(--proma-surface)",
                      borderRadius: "var(--proma-radius-card)",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--proma-accent)] flex-shrink-0 mt-1.5" />
                    <span className="text-[var(--proma-text-secondary)] text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="p-7 border"
              style={{
                borderColor: "var(--proma-border)",
                background: "var(--proma-surface)",
                borderRadius: "var(--proma-radius-card)",
              }}
            >
              <p className="text-[var(--proma-text-secondary)] text-sm mb-4">¿Tenés un proyecto con desafíos similares?</p>
              <PromaButton variant="primary" size="md" onClick={() => onNavigate("contact")} icon={<ArrowRight size={14} />}>
                Hablemos
              </PromaButton>
            </div>
          </div>
        </div>

        {/* Next project */}
        {nextProject && (
          <div className="pt-12" style={{ borderTop: "1px solid var(--proma-border)" }}>
            <div className="flex items-center justify-between">
              <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.8rem" }}>
                Siguiente proyecto
              </span>
              <button
                onClick={() => navigate(`/work/${nextProject.id}`)}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span
                  className="text-[var(--proma-text-primary)] group-hover:text-[var(--proma-accent)] transition-colors"
                  style={{ fontFamily: "var(--proma-display)", fontSize: "1.1rem", fontWeight: 600 }}
                >
                  {nextProject.title}
                </span>
                <ArrowRight size={16} className="text-[var(--proma-text-tertiary)] group-hover:text-[var(--proma-accent)] transition-colors" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
