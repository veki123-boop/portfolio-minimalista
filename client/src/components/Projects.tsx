/**
 * PROJECTS SECTION - Portfolio Minimalista
 * 
 * Sección de proyectos destacados
 */

import { projects } from "@/data/projects";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Badge from "./Badge";
import ScrollReveal from "./ScrollReveal";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            title="Proyectos Destacados"
            subtitle="Mis trabajos más recientes y relevantes"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project: any) => (
              <Card key={project.id} hover className="overflow-hidden">
                {/* Project Image */}
                {project.image && (
                  <div className="w-full h-48 bg-muted mb-6 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Project Info */}
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {project.titleEs}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.descriptionEs}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech: string) => (
                    <Badge key={tech} text={tech} variant="accent" />
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-200 font-medium text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}

                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-200 font-medium text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
