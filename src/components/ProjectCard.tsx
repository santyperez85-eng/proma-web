import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  version: string;
  image: string;
  description: string;
  tags: string[];
  status: string;
}

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  index?: number;
  large?: boolean;
}

export function ProjectCard({ project, onClick, index = 0, large = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image container */}
      <div
        className="relative overflow-hidden mb-5"
        style={{
          aspectRatio: large ? "3/2" : "4/3",
          borderRadius: "var(--proma-radius-card)",
        }}
      >
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-end p-6"
          style={{
            background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%)",
            borderRadius: "var(--proma-radius-card)",
          }}
        >
          <div>
            <span
              className="inline-block px-3 py-1 mb-3 text-xs uppercase tracking-wider"
              style={{
                background: "var(--proma-accent)",
                color: "var(--proma-bg)",
                borderRadius: "var(--proma-radius-pill)",
                fontWeight: 600,
              }}
            >
              Ver proyecto
            </span>
          </div>
        </motion.div>
      </div>

      {/* Card metadata */}
      <div className="space-y-1">
        <h3
          className="text-[var(--proma-text-primary)] group-hover:text-[var(--proma-accent)] transition-colors duration-300"
          style={{
            fontFamily: "var(--proma-display)",
            fontSize: large ? "1.35rem" : "1.1rem",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <span
            className="text-[var(--proma-text-secondary)]"
            style={{ fontSize: "0.85rem" }}
          >
            {project.client}
          </span>
          <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.75rem" }}>
            •
          </span>
          <span
            className="text-[var(--proma-text-tertiary)]"
            style={{ fontSize: "0.8rem" }}
          >
            {project.category}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
