/**
 * PROJECTS DATA - Portfolio Iván Gutierrez
 * 
 * Estructura modular para gestionar proyectos fácilmente.
 * Simplemente añade nuevos objetos al array para agregar proyectos.
 */

export interface Project {
  id: string;
  titleEs: string;
  titleEn: string;
  titleCa: string;
  descriptionEs: string;
  descriptionEn: string;
  descriptionCa: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "minecraft-servers",
    titleEs: "Administración de Servidores Minecraft",
    titleEn: "Minecraft Server Administration",
    titleCa: "Administració de Servidors Minecraft",
    descriptionEs:
      "Configuración completa de servidores Minecraft con plugins, mods, backups automáticos y gestión remota por SFTP.",
    descriptionEn:
      "Complete Minecraft server configuration with plugins, mods, automatic backups and remote management via SFTP.",
    descriptionCa:
      "Configuració completa de servidors Minecraft amb plugins, mods, còpies de seguretat automàtiques i gestió remota per SFTP.",
    image: "https://images.unsplash.com/photo-1538481143235-5d630a3663d4?w=600&h=400&fit=crop",
    technologies: ["Minecraft", "SFTP", "Linux", "Bash"],
    links: {
      github: "https://github.com/veki123-boop",
    },
    featured: true,
    year: 2024,
  },
  {
    id: "virtual-machines",
    titleEs: "Máquinas Virtuales",
    titleEn: "Virtual Machines",
    titleCa: "Màquines Virtuals",
    descriptionEs:
      "Configuración y administración de máquinas virtuales usando VMware y VirtualBox. Instalación de sistemas operativos y optimización.",
    descriptionEn:
      "Configuration and management of virtual machines using VMware and VirtualBox. Operating system installation and optimization.",
    descriptionCa:
      "Configuració i administració de màquines virtuals usant VMware i VirtualBox. Instal·lació de sistemes operatius i optimització.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    technologies: ["VMware", "VirtualBox", "Linux", "Windows"],
    links: {
      github: "https://github.com/veki123-boop",
    },
    featured: true,
    year: 2024,
  },
  {
    id: "web-creator-ai",
    titleEs: "Creador de Páginas Web con IA",
    titleEn: "Web Pages Creator with AI",
    titleCa: "Creador de Pàgines Web amb IA",
    descriptionEs:
      "Desarrollo de páginas web utilizando inteligencia artificial para optimizar diseño y funcionalidad. Generación automática de contenido HTML.",
    descriptionEn:
      "Web page development using artificial intelligence to optimize design and functionality. Automatic HTML content generation.",
    descriptionCa:
      "Desenvolupament de pàgines web usant intel·ligència artificial per optimitzar disseny i funcionalitat. Generació automàtica de contingut HTML.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441507986/KLXEcGa9PiyhytsRCs8ZDJ/web-ai-isometric-QP9GVsGk8htAajTJLGMYhx.webp",
    technologies: ["HTML", "CSS", "JavaScript", "AI"],
    links: {
      github: "https://github.com/veki123-boop",
    },
    featured: true,
    year: 2024,
  },
  {
    id: "cpp-scripts",
    titleEs: "Scripts y Herramientas en C++",
    titleEn: "Scripts and Tools in C++",
    titleCa: "Scripts i Eines en C++",
    descriptionEs:
      "Desarrollo de scripts y herramientas en C++ para detección de elementos y automatización de acciones. Programas eficientes y optimizados.",
    descriptionEn:
      "Development of scripts and tools in C++ for element detection and action automation. Efficient and optimized programs.",
    descriptionCa:
      "Desenvolupament de scripts i eines en C++ per a detecció d'elements i automatització d'accions. Programes eficients i optimitzats.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663441507986/KLXEcGa9PiyhytsRCs8ZDJ/cpp-scripts-isometric-final-CfCLtn3Rsz5yCczZSBmegA.webp",
    technologies: ["C++", "Programación", "Automatización"],
    links: {
      github: "https://github.com/veki123-boop",
    },
    featured: true,
    year: 2024,
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
