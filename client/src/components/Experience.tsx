/**
 * EXPERIENCE SECTION - Portfolio Minimalista
 * 
 * Sección de experiencia laboral y educación con timeline
 */

import { experience } from "@/data/experience";
import SectionTitle from "./SectionTitle";
import Badge from "./Badge";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section className="section bg-secondary/30">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            title="Experiencia"
            subtitle="Mi trayectoria profesional y educación"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-muted md:-translate-x-1/2"></div>

            {/* Items */}
            <div className="space-y-12">
              {experience.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2"
                  }`}
                >
                  {/* Punto en la línea */}
                  <div
                    className={`absolute left-0 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 ${
                      item.type === "work" ? "bg-accent" : "bg-muted"
                    }`}
                  ></div>

                  {/* Contenido */}
                  <div
                    className={`md:px-8 ${
                      index % 2 === 0 ? "" : ""
                    }`}
                  >
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-accent font-medium">
                        {item.company || item.institution}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                      {item.startDate} — {item.endDate}
                    </p>

                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    {/* Tecnologías */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            text={tech}
                            variant="muted"
                          />
                        ))}
                      </div>
                    )}

                    {/* Ubicación */}
                    {item.location && (
                      <p className="text-sm text-muted-foreground mt-3">
                        📍 {item.location}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
