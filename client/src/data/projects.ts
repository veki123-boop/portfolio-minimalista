/**
 * PROJECTS DATA - Portfolio Minimalista
 * 
 * Estructura modular para gestionar proyectos fácilmente.
 * Simplemente añade nuevos objetos al array para agregar proyectos.
 * 
 * Campos:
 * - id: Identificador único (string)
 * - title: Título del proyecto
 * - description: Descripción breve
 * - longDescription: Descripción más detallada (opcional)
 * - image: URL de la imagen del proyecto
 * - technologies: Array de tecnologías usadas
 * - links: Enlaces a GitHub y demo
 * - featured: Boolean para destacar en la página
 * - year: Año de creación
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    website?: string;
  };
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico moderna con carrito de compras, pagos integrados y panel de administración.",
    longDescription: "Plataforma completa de e-commerce construida con Next.js, incluye autenticación de usuarios, gestión de productos, carrito de compras, integración de pagos con Stripe y panel administrativo para gestionar inventario.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=500&fit=crop",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    featured: true,
    year: 2024,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "Aplicación de gestión de tareas colaborativa con tiempo real y notificaciones.",
    longDescription: "App de gestión de tareas con soporte para equipos, asignación de tareas, seguimiento de progreso y notificaciones en tiempo real usando WebSockets.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    featured: true,
    year: 2023,
  },
  {
    id: "project-3",
    title: "Analytics Dashboard",
    description: "Dashboard de análisis con gráficos interactivos y reportes en tiempo real.",
    longDescription: "Dashboard profesional para visualizar datos con gráficos interactivos, filtros avanzados y exportación de reportes en múltiples formatos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    technologies: ["React", "D3.js", "TypeScript", "Tailwind CSS", "API REST"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    featured: true,
    year: 2023,
  },
  {
    id: "project-4",
    title: "Mobile App - Fitness Tracker",
    description: "Aplicación móvil para seguimiento de fitness con sincronización en la nube.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    technologies: ["React Native", "Firebase", "JavaScript", "Expo"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    year: 2022,
  },
  {
    id: "project-5",
    title: "AI Content Generator",
    description: "Herramienta para generar contenido usando inteligencia artificial.",
    image: "https://images.unsplash.com/photo-1677442d019cecf8d07695dac4b2aaf28c84df31?w=800&h=500&fit=crop",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    year: 2024,
  },
  {
    id: "project-6",
    title: "Social Media Analytics",
    description: "Plataforma para analizar y optimizar presencia en redes sociales.",
    image: "https://images.unsplash.com/photo-1611925591563-430f63602796?w=800&h=500&fit=crop",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Celery"],
    links: {
      github: "https://github.com",
      demo: "https://example.com",
    },
    year: 2023,
  },
];

/**
 * Función auxiliar para obtener proyectos destacados
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured).slice(0, 3);
};

/**
 * Función auxiliar para obtener proyectos por año
 */
export const getProjectsByYear = (year: number): Project[] => {
  return projects.filter((project) => project.year === year);
};

/**
 * Función auxiliar para obtener proyecto por ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
