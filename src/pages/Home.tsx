import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { ProcessStep } from "../components/ProcessStep";
import { PromaButton } from "../components/PromaButton";
import { Marquee } from "../components/Marquee";
import { FAQAccordion } from "../components/FAQAccordion";
import { RollingText } from "../components/RollingText";
import { TextReveal } from "../components/TextReveal";
import { PROJECTS, PROCESS_STEPS } from "../components/data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface HomeProps {
  onNavigate: (page: string) => void;
  onSelectProject: (id: string) => void;
}

const FAQ_ITEMS = [
  {
    question: "¿Con qué tipo de clientes trabajan?",
    answer: "Trabajamos con startups en etapa temprana, marcas en crecimiento y empresas establecidas que necesitan un sistema visual sólido. El denominador común es que valoran la claridad, la precisión y los procesos transparentes.",
  },
  {
    question: "¿Qué servicios ofrecen?",
    answer: "Branding completo, packaging, design systems, UX/UI, motion design y dirección de arte. Cada proyecto se aborda como un sistema, no como piezas sueltas.",
  },
  {
    question: "¿Cómo calculan el precio de un proyecto?",
    answer: "Tenemos tres paquetes base (Base, Sistema, Lanzamiento) con scope, entregables y tiempos definidos. Luego se pueden agregar add-ons específicos según necesidad.",
  },
  {
    question: "¿Cuánto tiempo toma un proyecto típico?",
    answer: "Depende del scope: entre 2 y 14 semanas. Los paquetes Base son 2-4 semanas, Sistema 4-8 semanas, y Lanzamiento 8-14 semanas. Cada fase tiene checkpoints claros.",
  },
  {
    question: "¿Aceptan tareas puntuales o solo proyectos completos?",
    answer: "Preferimos proyectos con scope definido, pero también ofrecemos add-ons modulares que se pueden contratar individualmente si ya tenés un sistema base.",
  },
  {
    question: "¿Cuántas revisiones incluyen?",
    answer: "Depende del paquete: Base incluye 1 ronda, Sistema incluye 3 rondas, y Lanzamiento incluye revisiones ilimitadas durante la fase activa.",
  },
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1636667472926-8f5836089aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1641104300716-4099bc61df1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1564393334603-12704a40a2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
];

export function Home({ onNavigate, onSelectProject }: HomeProps) {
  const [heroImgIdx, setHeroImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImgIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--proma-bg)" }}>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full pt-28 pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Massive title */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <h1
                  className="text-[var(--proma-text-primary)]"
                  style={{
                    fontFamily: "var(--proma-display)",
                    fontSize: "clamp(3rem, 8vw, 7rem)",
                    fontWeight: 800,
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Diseño con
                  <br />
                  <span className="text-[var(--proma-text-secondary)]" style={{ fontWeight: 300 }}>
                    estructura
                  </span>
                  <span className="text-[var(--proma-accent)]">.</span>
                </h1>
              </motion.div>
            </div>

            {/* Right: Image reel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="lg:col-span-5"
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/3", borderRadius: "var(--proma-radius-card)" }}
              >
                {HERO_IMAGES.map((img, i) => (
                  <motion.div
                    key={img}
                    initial={false}
                    animate={{
                      opacity: heroImgIdx === i ? 1 : 0,
                      scale: heroImgIdx === i ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Proyecto ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}

                {/* PLAY REEL button */}
                <div
                  className="absolute bottom-4 right-4 px-4 py-2 cursor-pointer"
                  style={{
                    background: "var(--proma-accent)",
                    borderRadius: "var(--proma-radius-pill)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--proma-display)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--proma-bg)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Ver reel
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom info bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-between mt-12"
          >
            <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.8rem" }}>
              Laboratorio de diseño — Buenos Aires
            </span>
            <div className="hidden lg:flex items-center gap-2">
              <ArrowDown size={12} className="text-[var(--proma-text-tertiary)] animate-bounce" />
              <span className="text-[var(--proma-text-tertiary)]" style={{ fontSize: "0.8rem" }}>
                scroll
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ BRAND MARQUEE ═══════════════════ */}
      <section
        className="py-8 border-t border-b"
        style={{ borderColor: "var(--proma-border)" }}
      >
        <Marquee speed={25}>
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="mx-8"
              style={{
                fontFamily: "var(--proma-display)",
                fontSize: "clamp(5rem, 12vw, 10rem)",
                fontWeight: 800,
                color: "var(--proma-text-primary)",
                opacity: 0.12,
                letterSpacing: "-0.04em",
                textTransform: "lowercase",
              }}
            >
              pro.ma studio&nbsp;&nbsp;•&nbsp;&nbsp;
            </span>
          ))}
        </Marquee>
      </section>

      {/* ═══════════════════ INTRO ═══════════════════ */}
      <section style={{ paddingTop: "var(--proma-section-py)", paddingBottom: "var(--proma-section-py)" }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", lineHeight: 1.7 }}>
                <TextReveal
                  wordDelay={0.035}
                  baseDelay={0.2}
                >
                  Somos un laboratorio de diseño que construye sistemas visuales con precisión, exploración y propósito claro. Cada proyecto es una pieza que funciona — no un template con tu logo encima.
                </TextReveal>
              </p>
              <p className="mt-4" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", lineHeight: 1.7 }}>
                <TextReveal
                  wordDelay={0.035}
                  baseDelay={1.4}
                >
                  Trabajamos desde Buenos Aires con clientes en Latinoamérica y Europa. Nos interesan los proyectos donde el diseño tiene impacto real.
                </TextReveal>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-start lg:justify-end"
            >
              <PromaButton variant="secondary" size="lg" onClick={() => onNavigate("about")} icon={<ArrowRight size={16} />}>
                <RollingText>Conocer el estudio</RollingText>
              </PromaButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED WORKS ═══════════════════ */}
      <section style={{ paddingBottom: "var(--proma-section-py)" }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          {/* Section header marquee */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-2"
            >
              <span
                className="text-[var(--proma-text-tertiary)]"
                style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
              >
                © Featured Projects
              </span>
              <span className="text-[var(--proma-text-tertiary)]" style={{ fontFamily: "var(--proma-mono)", fontSize: "0.65rem" }}>
                (PM® — 03)
              </span>
            </motion.div>
            <h2
              className="text-[var(--proma-text-primary)]"
              style={{
                fontFamily: "var(--proma-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              featured works©
            </h2>
          </div>

          {/* 2-column project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 4).map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => onSelectProject(project.id)}
                large
              />
            ))}
          </div>

          {/* View all CTA */}
          <div className="mt-12 flex justify-center">
            <PromaButton variant="secondary" size="lg" onClick={() => onNavigate("work")} icon={<ArrowRight size={16} />}>
              <RollingText>Ver todos los proyectos</RollingText>
            </PromaButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section
        style={{
          paddingTop: "var(--proma-section-py)",
          paddingBottom: "var(--proma-section-py)",
          background: "var(--proma-surface)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          {/* Section header */}
          <div className="mb-12">
            <span
              className="text-[var(--proma-text-tertiary)] block mb-2"
              style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              © Services — (PM® — 04)
            </span>
            <h2
              className="text-[var(--proma-text-primary)]"
              style={{
                fontFamily: "var(--proma-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
              }}
            >
              services©
            </h2>
          </div>

          {/* Service categories as hover-reveal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--proma-border)" }}>
            {[
              {
                name: "Branding & Identidad",
                subs: ["Identidad visual", "Naming & estrategia", "Brand assets", "Packaging"],
                desc: "Sistemas de marca con claridad y consistencia. Cada decisión de diseño está fundamentada en investigación y propósito.",
              },
              {
                name: "Motion & Campaña",
                subs: ["Animación 2D/3D", "Piezas para redes", "Video de campaña", "Motion shorts"],
                desc: "Contenido audiovisual creado con procesos eficientes. Iteración rápida, output escalable, calidad visual constante.",
              },
              {
                name: "UX / UI",
                subs: ["Investigación de usuario", "Design systems", "Micro interacciones", "Prototipado"],
                desc: "Experiencias digitales diseñadas desde el usuario. Estructura, iteración y validación en cada fase.",
              },
              {
                name: "Web & Desarrollo",
                subs: ["Desarrollo web", "Diseño interactivo", "E-commerce", "Apps"],
                desc: "Sitios y aplicaciones con foco en claridad e interacción. Desarrollo optimizado y sistemas escalables.",
              },
            ].map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 lg:p-12 group cursor-pointer transition-colors duration-300 hover:bg-[var(--proma-surface-hover)]"
                style={{ background: "var(--proma-surface)" }}
              >
                <h3
                  className="text-[var(--proma-text-primary)] group-hover:text-[var(--proma-accent)] transition-colors mb-4"
                  style={{
                    fontFamily: "var(--proma-display)",
                    fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                    fontWeight: 600,
                  }}
                >
                  {service.name}
                </h3>
                <p className="text-[var(--proma-text-secondary)] text-sm mb-6" style={{ lineHeight: 1.7 }}>
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.subs.map((sub) => (
                    <span
                      key={sub}
                      className="text-[var(--proma-text-tertiary)] group-hover:text-[var(--proma-text-secondary)] transition-colors"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explore Services CTA */}
          <div className="mt-12 flex justify-center">
            <PromaButton variant="secondary" size="lg" onClick={() => onNavigate("services")} icon={<ArrowRight size={16} />}>
              <RollingText>Explorar servicios</RollingText>
            </PromaButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROCESS ═══════════════════ */}
      <section style={{ paddingTop: "var(--proma-section-py)", paddingBottom: "var(--proma-section-py)" }}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span
                className="text-[var(--proma-text-tertiary)] block mb-2"
                style={{ fontFamily: "var(--proma-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
              >
                © Proceso
              </span>
              <h2
                className="text-[var(--proma-text-primary)] mb-4"
                style={{
                  fontFamily: "var(--proma-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Proceso como pipeline,
                <br />
                <span className="text-[var(--proma-text-secondary)]" style={{ fontWeight: 300 }}>
                  no como misterio
                </span>
              </h2>
              <p className="text-[var(--proma-text-secondary)] max-w-md" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                Cada fase tiene entregables concretos y checkpoints de validación.
                Sin sorpresas, sin "ya casi". Sabés exactamente dónde estamos en cada momento.
              </p>
            </div>
            <div>
              {PROCESS_STEPS.map((step, i) => (
                <ProcessStep
                  key={step.number}
                  {...step}
                  isLast={i === PROCESS_STEPS.length - 1}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section
        style={{
          paddingTop: "var(--proma-section-py)",
          paddingBottom: "var(--proma-section-py)",
          background: "var(--proma-surface)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: massive FAQ text */}
            <div className="lg:col-span-4 flex items-start">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  fontFamily: "var(--proma-display)",
                  fontSize: "clamp(4rem, 10vw, 8rem)",
                  fontWeight: 800,
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  color: "var(--proma-text-primary)",
                }}
              >
                FAQ.
              </motion.h2>
            </div>
            {/* Right: accordion */}
            <div className="lg:col-span-8">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section
        style={{ paddingTop: "var(--proma-section-py)", paddingBottom: "var(--proma-section-py)" }}
        className="relative overflow-hidden"
      >
        {/* Accent glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, var(--proma-accent-dim) 0%, transparent 70%)",
              filter: "blur(120px)",
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-[var(--proma-text-primary)]"
                style={{
                  fontFamily: "var(--proma-display)",
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                ¿Tenés un proyecto
                <br />
                <span className="text-[var(--proma-accent)]">que necesita sistema</span>?
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <p className="text-[var(--proma-text-secondary)] max-w-md" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Contanos qué necesitás. En 48h te decimos si podemos ayudarte
                y cómo arrancaríamos.
              </p>
              <div className="flex flex-wrap gap-3">
                <PromaButton variant="primary" size="lg" onClick={() => onNavigate("contact")} icon={<ArrowRight size={16} />}>
                  Empezar conversación
                </PromaButton>
                <PromaButton variant="ghost" size="lg" onClick={() => onNavigate("about")}>
                  Conocer el estudio
                </PromaButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
