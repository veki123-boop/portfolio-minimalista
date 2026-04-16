/**
 * EXPERIENCE SECTION - Portfolio Minimalista
 * 
 * Sección de experiencia laboral y educación con timeline
 */

import SectionTitle from "./SectionTitle";
import Badge from "./Badge";
import ScrollReveal from "./ScrollReveal";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const workExperience = [
    {
      id: "app-caldes",
      title: "Ayudante de Informática",
      company: "APP Caldes",
      location: "Caldes de Montbui",
      startDate: "Febrero 2025",
      endDate: "Junio 2025",
      description: "Configuración de sistemas operativos, mantenimiento de equipos informáticos, formateo e instalación de ordenadores, instalación y configuración de programas básicos, montaje y sustitución de componentes de hardware.",
      technologies: ["Windows", "Hardware", "Troubleshooting", "Networking"],
    },
  ];

  const education = [
    {
      id: "pfi-informatica",
      title: "Ayudante de Mantenimiento de Equipos Informáticos",
      school: "La Ferreria",
      startDate: "Septiembre 2024",
      endDate: "Junio 2025",
      status: "Completado",
    },
    {
      id: "smx",
      title: "Técnico en Sistemas Microinformáticos y Redes (SMX)",
      school: "La Ferreria",
      startDate: "Septiembre 2025",
      endDate: "Presente",
      status: "En curso",
    },
  ];

  return (
    <section className="section bg-secondary/30" id="experience">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            title="Experiencia"
            subtitle="Mi trayectoria profesional y educación"
          />
        </ScrollReveal>

        {/* Experiencia Laboral */}
        <ScrollReveal delay={100}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-accent" />
              Experiencia Laboral
            </h3>

            <div className="space-y-6">
              {workExperience.map((item) => (
                <div key={item.id} className="border border-muted rounded-lg p-6 hover:border-accent/50 transition-colors duration-200">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-accent font-medium mb-2">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.startDate} - {item.endDate} • {item.location}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} text={tech} variant="muted" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Educación */}
        <ScrollReveal delay={200}>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent" />
              Educación
            </h3>

            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.id} className="border border-muted rounded-lg p-6 hover:border-accent/50 transition-colors duration-200">
                  <div className="flex gap-4 justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-accent font-medium mb-2">
                        {item.school}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.startDate} - {item.endDate}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        item.status === "Completado"
                          ? "bg-accent/20 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
