/**
 * PROJECTS SECTION - Portfolio Minimalista
 * 
 * Sección de proyectos con cards reutilizables
 * Datos manejados desde projects.ts para fácil extensión
 */

import { projects } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Badge from "./Badge";
import ScrollReveal from "./ScrollReveal";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            title="Proyectos Destacados"
            subtitle="Una selección de mis trabajos más recientes"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} hover className="flex flex-col h-full">
              {/* Imagen del Proyecto */}
              <div className="mb-6 -mx-6 -mt-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} text={tech} variant="muted" />
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      text={`+${project.technologies.length - 3}`}
                      variant="muted"
                    />
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-muted">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Código</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
          </div>
        </ScrollReveal>

        {/* Ver Todos los Proyectos */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent hover:text-red-600 font-medium transition-colors duration-200"
          >
            Ver todos los proyectos
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
