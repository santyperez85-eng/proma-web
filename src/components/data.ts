import type { Project } from "./ProjectCard";

export const PROJECTS: Project[] = [
  {
    id: "PM-001",
    title: "Alma Botánica",
    client: "Alma Herbs Co.",
    category: "Packaging",
    year: "2025",
    version: "v3.1",
    image: "https://images.unsplash.com/photo-1636667472926-8f5836089aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhY2thZ2luZyUyMGRlc2lnbiUyMGRhcmt8ZW58MXx8fHwxNzcwMzQ2MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sistema de packaging para línea de infusiones premium. 12 SKUs, 3 familias.",
    tags: ["sistema", "packaging", "print"],
    status: "shipped",
  },
  {
    id: "PM-002",
    title: "Forma Editorial",
    client: "Forma Press",
    category: "Branding",
    year: "2025",
    version: "v2.0",
    image: "https://images.unsplash.com/photo-1641104300716-4099bc61df1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdHlwb2dyYXBoeSUyMHBvc3RlciUyMGRlc2lnbnxlbnwxfHx8fDE3NzAzNDYwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Identidad completa para editorial independiente. Logo, sistema tipográfico, colofón.",
    tags: ["identidad", "editorial", "tipografía"],
    status: "shipped",
  },
  {
    id: "PM-003",
    title: "Nexo Arquitectura",
    client: "Nexo Studio",
    category: "Branding",
    year: "2024",
    version: "v1.4",
    image: "https://images.unsplash.com/photo-1564393334603-12704a40a2b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc3R1ZGlvJTIwYXJjaGl0ZWN0dXJlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwMzQ2MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rebranding para estudio de arquitectura. Sistema modular, señalética, web.",
    tags: ["branding", "señalética", "web"],
    status: "shipped",
  },
  {
    id: "PM-004",
    title: "DataScope",
    client: "Scope Analytics",
    category: "Info",
    year: "2025",
    version: "v1.0",
    image: "https://images.unsplash.com/photo-1760239037245-a372db8630f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwZGlhZ3JhbXxlbnwxfHx8fDE3NzAzNDYwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Dashboard y sistema de visualización de datos para plataforma de analytics.",
    tags: ["UI", "dataviz", "sistema"],
    status: "in progress",
  },
  {
    id: "PM-005",
    title: "Pulso Motion",
    client: "Pulso Health",
    category: "Motion",
    year: "2024",
    version: "v2.2",
    image: "https://images.unsplash.com/photo-1764437180200-f0fd57fa15d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFic3RyYWN0JTIwc2hhcGVzfGVufDF8fHx8MTc3MDM0NjAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Piezas de motion para campaña de lanzamiento. 15 assets, 3 formatos.",
    tags: ["motion", "campaña", "social"],
    status: "shipped",
  },
  {
    id: "PM-006",
    title: "Estructura Modular",
    client: "Fábrica Labs",
    category: "UX",
    year: "2025",
    version: "v1.1",
    image: "https://images.unsplash.com/photo-1648989355972-e5fd5ba12a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGVzaWduJTIwc3lzdGVtJTIwbW9kdWxhcnxlbnwxfHx8fDE3NzAzNDYwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Design system y flujos UX para plataforma SaaS de logística.",
    tags: ["UX", "design system", "producto"],
    status: "in progress",
  },
];

export const CATEGORIES = ["Todos", "Packaging", "Branding", "Info", "Motion", "UX"];

export const SERVICES = [
  {
    id: "base",
    name: "Base",
    tagline: "Para quienes arrancan o necesitan una pieza puntual.",
    price: "Desde $2.500 USD",
    timeline: "2–4 semanas",
    features: [
      "Identidad visual básica (logo + paleta + tipo)",
      "Aplicaciones esenciales (tarjeta, firma, avatar)",
      "Manual de marca compacto (PDF)",
      "1 ronda de ajustes",
      "Archivos finales organizados",
    ],
    forWho: "Startups, proyectos personales, MVPs",
  },
  {
    id: "sistema",
    name: "Sistema",
    tagline: "Para marcas que necesitan escalar con coherencia.",
    price: "Desde $6.000 USD",
    timeline: "4–8 semanas",
    features: [
      "Todo lo de Base +",
      "Sistema visual completo (grid, íconos, pattern)",
      "Packaging o UI kit según necesidad",
      "Guideline extenso (uso, restricciones, specs)",
      "3 rondas de ajustes",
      "Soporte post-entrega (30 días)",
    ],
    forWho: "Empresas en crecimiento, lanzamientos de producto",
    highlighted: true,
  },
  {
    id: "lanzamiento",
    name: "Lanzamiento",
    tagline: "Para marcas que van a salir al mundo y necesitan todo.",
    price: "Desde $12.000 USD",
    timeline: "8–14 semanas",
    features: [
      "Todo lo de Sistema +",
      "Estrategia de marca y naming",
      "Diseño web (diseño + prototipo funcional)",
      "Kit de campaña (social, motion basics)",
      "Presentación de marca para inversores",
      "Soporte extendido (90 días)",
      "Revisiones ilimitadas en fase activa",
    ],
    forWho: "Marcas en lanzamiento, rebrandings completos",
  },
];

export const ADDONS = [
  { name: "Motion pack", description: "Animaciones para redes y web", price: "+$1.500" },
  { name: "Guideline extendido", description: "Documento técnico completo", price: "+$800" },
  { name: "Soporte impresión", description: "Supervisión de preprensa y pruebas", price: "+$600" },
  { name: "Social kit", description: "Templates para 3 plataformas", price: "+$1.200" },
  { name: "Señalética", description: "Sistema de wayfinding básico", price: "+$2.000" },
  { name: "Foto dirección", description: "Dirección de arte para sesión fotográfica", price: "+$1.800" },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Brief & Diagnóstico",
    description: "Escuchamos, preguntamos, entendemos el contexto. Definimos scope, constraints y objetivos medibles.",
    deliverables: ["brief doc", "scope", "timeline"],
  },
  {
    number: "02",
    title: "Investigación & Territorio",
    description: "Mapeamos el mercado, la competencia y las oportunidades. Definimos el territorio visual y conceptual.",
    deliverables: ["moodboard", "benchmark", "territorio"],
  },
  {
    number: "03",
    title: "Sistema & Prototipo",
    description: "Construimos el sistema visual. Tipografía, color, grid, componentes. Todo modular, todo con razón.",
    deliverables: ["prototipos", "sistema visual", "specs"],
  },
  {
    number: "04",
    title: "Validación",
    description: "Testeamos las piezas en contexto real. Ajustamos lo que haga falta. Sin vueltas innecesarias.",
    deliverables: ["revisión", "ajustes", "aprobación"],
  },
  {
    number: "05",
    title: "Entrega & Soporte",
    description: "Archivos organizados, guideline claro, y soporte post-entrega para que el sistema funcione sin nosotros.",
    deliverables: ["archivos", "guideline", "soporte"],
  },
];

export const WHAT_WE_AVOID = [
  "Iteraciones sin dirección — cada ronda tiene propósito",
  "Diseño decorativo sin fundamento funcional",
  "Procesos eternos sin checkpoint de validación",
  "Entregables desorganizados o sin documentación",
  "Promesas vagas sobre \"elevar tu marca\"",
  "Cambios de scope sin renegociación transparente",
];

export const MANIFESTO = [
  {
    title: "Claridad",
    text: "Cada decisión de diseño tiene que poder explicarse en una frase. Si no la tiene, no la hacemos.",
  },
  {
    title: "Precisión",
    text: "Los detalles construyen sistemas. Un pixel, un kerning, un color: todo comunica y todo se cuida.",
  },
  {
    title: "Exploración",
    text: "No repetimos fórmulas. Cada proyecto empieza con una pregunta genuina y un territorio por descubrir.",
  },
  {
    title: "Responsabilidad",
    text: "Diseñamos para que funcione sin nosotros. Entregamos herramientas, no dependencia.",
  },
];
