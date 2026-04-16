/**
 * EXPERIENCE DATA - Portfolio Minimalista
 * 
 * Estructura para experiencia laboral y educación.
 * Fácil de extender añadiendo nuevos elementos al array.
 */

export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  title: string;
  company?: string;
  institution?: string;
  position?: string;
  description: string;
  startDate: string; // "2023" o "Mar 2023"
  endDate: string; // "2024" o "Present"
  technologies?: string[];
  location?: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "work-1",
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    position: "Senior Full Stack Developer",
    description: "Lideré el desarrollo de aplicaciones web escalables, mentoreé a desarrolladores junior y optimicé la arquitectura del sistema.",
    startDate: "Jan 2023",
    endDate: "Present",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    location: "Remote",
  },
  {
    id: "work-2",
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    description: "Desarrollé y mantuve múltiples proyectos web, implementé características de frontend y backend, trabajé con APIs REST.",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    location: "Madrid, Spain",
  },
  {
    id: "work-3",
    type: "work",
    title: "Frontend Developer",
    company: "Creative Agency",
    position: "Frontend Developer",
    description: "Creé interfaces de usuario responsivas, optimicé rendimiento y trabajé en proyectos de e-commerce.",
    startDate: "Jan 2020",
    endDate: "May 2021",
    technologies: ["React", "CSS3", "JavaScript", "Webpack", "Figma"],
    location: "Barcelona, Spain",
  },
  {
    id: "education-1",
    type: "education",
    title: "Bachelor's Degree in Computer Science",
    institution: "Universidad Autónoma",
    description: "Grado en Ingeniería Informática con especialización en desarrollo web y aplicaciones móviles.",
    startDate: "2016",
    endDate: "2020",
    location: "Madrid, Spain",
  },
  {
    id: "education-2",
    type: "education",
    title: "Advanced Full Stack Development Bootcamp",
    institution: "Code Academy",
    description: "Bootcamp intensivo de 12 semanas en desarrollo full stack con proyectos reales.",
    startDate: "2019",
    endDate: "2019",
    location: "Online",
  },
];

/**
 * Función auxiliar para obtener experiencia laboral
 */
export const getWorkExperience = (): ExperienceItem[] => {
  return experience.filter((item) => item.type === "work");
};

/**
 * Función auxiliar para obtener educación
 */
export const getEducation = (): ExperienceItem[] => {
  return experience.filter((item) => item.type === "education");
};

/**
 * Función auxiliar para obtener experiencia ordenada por fecha (más reciente primero)
 */
export const getExperienceByDate = (): ExperienceItem[] => {
  return [...experience].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });
};
