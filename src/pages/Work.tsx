import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { PromaBadge } from "../components/PromaBadge";
import { PROJECTS, CATEGORIES } from "../components/data";

interface WorkProps {
  onSelectProject: (id: string) => void;
}

export function Work({ onSelectProject }: WorkProps) {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-28 pb-24" style={{ background: "var(--proma-bg)" }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-[var(--proma-text-tertiary)] block mb-3"
            style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
          >
            © Work Index
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
            Cada proyecto,
            <br />
            <span className="text-[var(--proma-text-secondary)]" style={{ fontWeight: 300 }}>
              una investigación
            </span>
          </h1>
          <p className="text-[var(--proma-text-secondary)] max-w-lg" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            No hacemos "diseño bonito". Construimos sistemas que resuelven problemas reales,
            con restricciones reales y resultados medibles.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <PromaBadge
              key={cat}
              active={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </PromaBadge>
          ))}
          <span
            className="flex items-center ml-3 text-[var(--proma-text-tertiary)]"
            style={{ fontSize: "0.8rem" }}
          >
            {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* 2-column Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => onSelectProject(project.id)}
              large
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.9rem" }}>
              No hay proyectos en esta categoría todavía.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
