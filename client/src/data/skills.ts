/**
 * SKILLS DATA - Portfolio Minimalista
 * 
 * Estructura organizada de habilidades por categoría.
 * Fácil de actualizar y extender.
 */

export interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate"; // Para mostrar diferentes niveles
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    skills: [
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Next.js", level: "advanced" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Vue.js", level: "intermediate" },
      { name: "HTML/CSS", level: "expert" },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "Express", level: "advanced" },
      { name: "Python", level: "intermediate" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "REST APIs", level: "expert" },
    ],
  },
  {
    id: "tools",
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: "expert" },
      { name: "Docker", level: "advanced" },
      { name: "AWS", level: "intermediate" },
      { name: "CI/CD", level: "intermediate" },
      { name: "Webpack", level: "advanced" },
      { name: "VS Code", level: "expert" },
    ],
  },
  {
    id: "design",
    category: "Design & UX",
    skills: [
      { name: "Figma", level: "advanced" },
      { name: "UI/UX Design", level: "advanced" },
      { name: "Responsive Design", level: "expert" },
      { name: "Accessibility", level: "advanced" },
      { name: "Design Systems", level: "advanced" },
    ],
  },
];

/**
 * Función auxiliar para obtener todas las habilidades en un array plano
 */
export const getAllSkills = (): Skill[] => {
  return skillsData.flatMap((category) => category.skills);
};

/**
 * Función auxiliar para obtener habilidades por categoría
 */
export const getSkillsByCategory = (categoryId: string): Skill[] => {
  const category = skillsData.find((cat) => cat.id === categoryId);
  return category?.skills || [];
};

/**
 * Función auxiliar para obtener habilidades de nivel experto
 */
export const getExpertSkills = (): Skill[] => {
  return getAllSkills().filter((skill) => skill.level === "expert");
};
