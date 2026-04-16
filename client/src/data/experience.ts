/**
 * EXPERIENCE DATA - Portfolio Iván Gutierrez
 * 
 * Datos de experiencia laboral y educación
 */

export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  titleEs: string;
  titleEn: string;
  titleCa: string;
  companyEs?: string;
  companyEn?: string;
  companyCa?: string;
  descriptionEs: string;
  descriptionEn: string;
  descriptionCa: string;
  startDate: string;
  endDate: string;
  technologies?: string[];
  location: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "education-smx",
    type: "education",
    titleEs: "Grado Medio en Sistemas Microinformáticos y Redes",
    titleEn: "Degree in Microcomputer Systems and Networks",
    titleCa: "Grau Mitjà en Sistemes Microinformàtics i Xarxes",
    companyEs: "La Ferreria",
    companyEn: "La Ferreria",
    companyCa: "La Ferreria",
    descriptionEs:
      "Estudiando Grado Medio en Sistemas Microinformáticos y Redes. Aprendiendo administración de sistemas, redes, virtualización y soporte técnico.",
    descriptionEn:
      "Studying Degree in Microcomputer Systems and Networks. Learning systems administration, networking, virtualization and technical support.",
    descriptionCa:
      "Estudiant de Grau Mitjà en Sistemes Microinformàtics i Xarxes. Aprenent administració de sistemes, xarxes, virtualització i suport tècnic.",
    startDate: "Sep 2025",
    endDate: "Jun 2027",
    location: "Caldes de Montbui",
  },
  {
    id: "education-pfi",
    type: "education",
    titleEs: "Ayudante de Mantenimiento de Equipos Informáticos",
    titleEn: "Assistant in Computer Equipment Maintenance",
    titleCa: "Ajudant de Manteniment d'Equips Informàtics",
    companyEs: "La Ferreria",
    companyEn: "La Ferreria",
    companyCa: "La Ferreria",
    descriptionEs:
      "PFI completado en 2024-2025. Formación en mantenimiento de equipos, instalación de componentes y resolución de problemas técnicos.",
    descriptionEn:
      "PFI completed in 2024-2025. Training in equipment maintenance, component installation and technical troubleshooting.",
    descriptionCa:
      "PFI completat en 2024-2025. Formació en manteniment d'equips, instal·lació de components i resolució de problemes tècnics.",
    startDate: "Sep 2024",
    endDate: "Jun 2025",
    location: "Caldes de Montbui",
  },
  {
    id: "work-app-caldes",
    type: "work",
    titleEs: "Ayudante de Informática",
    titleEn: "IT Assistant",
    titleCa: "Ajudant d'Informàtica",
    companyEs: "APP Caldes",
    companyEn: "APP Caldes",
    companyCa: "APP Caldes",
    descriptionEs:
      "Configuración de sistemas operativos, instalación de drivers y actualizaciones. Mantenimiento de equipos informáticos, formateo e instalación. Instalación y configuración de programas básicos. Montaje y sustitución de componentes de hardware. Resolución de problemas técnicos avanzados.",
    descriptionEn:
      "Operating system configuration, driver installation and updates. Computer equipment maintenance, formatting and installation. Installation and configuration of basic programs. Assembly and replacement of hardware components. Advanced technical troubleshooting.",
    descriptionCa:
      "Configuració de sistemes operatius, instal·lació de controladors i actualitzacions. Manteniment d'equips informàtics, formatejament i instal·lació. Instal·lació i configuració de programes bàsics. Muntatge i substitució de components de maquinari. Resolució de problemes tècnics avançats.",
    startDate: "Feb 2025",
    endDate: "Jun 2025",
    technologies: ["Windows", "Linux", "Hardware", "SFTP"],
    location: "Caldes de Montbui",
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
