/**
 * LANGUAGE CONTEXT - Portfolio Multiidioma
 * 
 * Contexto para gestionar el idioma global (ES, EN, CA)
 */

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "es" | "en" | "ca";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones inline
const translations: Record<Language, Record<string, any>> = {
  es: {
    nav: {
      inicio: "Inicio",
      sobreMi: "Sobre Mí",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      contacto: "Contacto",
      cv: "CV",
    },
    hero: {
      nombre: "Iván Gutierrez",
      apellido: "Romero",
      rol: "Técnico en Sistemas & Desarrollador",
      descripcion: "Apasionado por la tecnología, administración de sistemas y desarrollo. Especializado en configuración de servidores, máquinas virtuales y creación de soluciones web innovadoras.",
      verProyectos: "Ver Proyectos",
      contactame: "Contacto",
    },
    about: {
      titulo: "Sobre Mí",
      subtitulo: "Técnico motivado con pasión por la tecnología",
      descripcion1: "Tengo 17 años y estoy muy motivado para aprender y crecer en el campo de la tecnología. Me interesan especialmente áreas como la programación, la inteligencia artificial y los sistemas informáticos.",
      descripcion2: "Me apasiona comprender cómo funciona la tecnología. Todo lo que tenga que ver con aprender de cosas con tecnología me parece interesante. Actualmente estoy cursando el Grado Medio en Sistemas Microinformáticos y Redes.",
      descripcion3: "En mis tiempos libres dedico parte de mi tiempo a seguir aprendiendo y mejorando mis conocimientos en el ámbito de la tecnología.",
      stackTecnico: "Stack Tecnológico",
      proyectosCompletados: "Proyectos Personales",
      aniosExperiencia: "En Desarrollo",
    },
    skills: {
      titulo: "Habilidades",
      subtitulo: "Tecnologías y herramientas que domino",
      administracion: "Administración",
      desarrollo: "Desarrollo",
      sistemas: "Sistemas",
    },
    projects: {
      titulo: "Proyectos Destacados",
      subtitulo: "Mis trabajos más recientes y relevantes",
      verTodos: "Ver todos los proyectos",
      demo: "Demo",
    },
    experience: {
      titulo: "Experiencia",
      subtitulo: "Mi trayectoria profesional y educación",
    },
    contact: {
      titulo: "Contacto",
      subtitulo: "¿Tienes un proyecto en mente? Hablemos",
      nombre: "Nombre",
      email: "Email",
      mensaje: "Mensaje",
      enviar: "Enviar",
      enviado: "¡Mensaje enviado correctamente!",
      conecta: "Conecta Conmigo",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      sobreMi: "About Me",
      proyectos: "Projects",
      experiencia: "Experience",
      contacto: "Contact",
      cv: "CV",
    },
    hero: {
      nombre: "Iván Gutierrez",
      apellido: "Romero",
      rol: "Systems Technician & Developer",
      descripcion: "Passionate about technology, systems administration and development. Specialized in server configuration, virtual machines and creating innovative web solutions.",
      verProyectos: "View Projects",
      contactame: "Contact",
    },
    about: {
      titulo: "About Me",
      subtitulo: "Motivated technician with a passion for technology",
      descripcion1: "I'm 17 years old and very motivated to learn and grow in the technology field. I'm especially interested in programming, artificial intelligence and computer systems.",
      descripcion2: "I'm passionate about understanding how technology works. Anything related to learning about technology interests me. I'm currently studying the Degree in Microcomputer Systems and Networks.",
      descripcion3: "In my free time, I dedicate part of my time to continue learning and improving my knowledge in the field of technology.",
      stackTecnico: "Technology Stack",
      proyectosCompletados: "Personal Projects",
      aniosExperiencia: "In Development",
    },
    skills: {
      titulo: "Skills",
      subtitulo: "Technologies and tools I master",
      administracion: "Administration",
      desarrollo: "Development",
      sistemas: "Systems",
    },
    projects: {
      titulo: "Featured Projects",
      subtitulo: "My most recent and relevant work",
      verTodos: "View all projects",
      demo: "Demo",
    },
    experience: {
      titulo: "Experience",
      subtitulo: "My professional trajectory and education",
    },
    contact: {
      titulo: "Contact",
      subtitulo: "Do you have a project in mind? Let's talk",
      nombre: "Name",
      email: "Email",
      mensaje: "Message",
      enviar: "Send",
      enviado: "Message sent successfully!",
      conecta: "Connect With Me",
    },
  },
  ca: {
    nav: {
      inicio: "Inici",
      sobreMi: "Sobre Mi",
      proyectos: "Projectes",
      experiencia: "Experiència",
      contacto: "Contacte",
      cv: "CV",
    },
    hero: {
      nombre: "Iván Gutierrez",
      apellido: "Romero",
      rol: "Tècnic en Sistemes & Desenvolupador",
      descripcion: "Apasionat per la tecnologia, administració de sistemes i desenvolupament. Especialitzat en configuració de servidors, màquines virtuals i creació de solucions web innovadores.",
      verProyectos: "Veure Projectes",
      contactame: "Contacte",
    },
    about: {
      titulo: "Sobre Mi",
      subtitulo: "Tècnic motivat amb passió per la tecnologia",
      descripcion1: "Tinc 17 anys i estic molt motivat per aprendre i créixer en el camp de la tecnologia. M'interessen especialment àrees com la programació, la intel·ligència artificial i els sistemes informàtics.",
      descripcion2: "M'appassiona entendre com funciona la tecnologia. Tot allò relacionat amb aprendre sobre tecnologia m'interessa. Actualment estic cursant el Grau Mitjà en Sistemes Microinformàtics i Xarxes.",
      descripcion3: "En els meus temps lliures dedico part del meu temps a continuar aprenent i millorant els meus coneixements en l'àmbit de la tecnologia.",
      stackTecnico: "Stack Tecnològic",
      proyectosCompletados: "Projectes Personals",
      aniosExperiencia: "En Desenvolupament",
    },
    skills: {
      titulo: "Habilitats",
      subtitulo: "Tecnologies i eines que domino",
      administracion: "Administració",
      desarrollo: "Desenvolupament",
      sistemas: "Sistemes",
    },
    projects: {
      titulo: "Projectes Destacats",
      subtitulo: "Els meus treballs més recents i rellevants",
      verTodos: "Veure tots els projectes",
      demo: "Demo",
    },
    experience: {
      titulo: "Experiència",
      subtitulo: "La meva trajectòria professional i educació",
    },
    contact: {
      titulo: "Contacte",
      subtitulo: "Tens un projecte en ment? Parlem",
      nombre: "Nom",
      email: "Correu",
      mensaje: "Missatge",
      enviar: "Enviar",
      enviado: "Missatge enviat correctament!",
      conecta: "Connecta Amb Mi",
    },
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  // Cargar idioma guardado del localStorage
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && ["es", "en", "ca"].includes(saved)) {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // Función para traducir
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Retornar la clave si no encuentra la traducción
      }
    }

    return typeof value === "string" ? value : key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return context;
}
