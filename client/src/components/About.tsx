/**
 * ABOUT SECTION - Portfolio Minimalista
 * 
 * Sección sobre mí con descripción y stack tecnológico
 */

import SectionTitle from "./SectionTitle";
import Badge from "./Badge";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];

  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            title="Sobre Mí"
            subtitle="Desarrollador apasionado por crear soluciones elegantes y escalables"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Descripción */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tengo más de 5 años de experiencia desarrollando aplicaciones web modernas.
                Me especializo en crear interfaces limpias y funcionales que ofrecen
                excelentes experiencias de usuario.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi enfoque se centra en escribir código limpio, mantenible y escalable.
                Creo en la importancia del diseño minimalista y la optimización del
                rendimiento en cada proyecto.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Cuando no estoy codificando, disfruto contribuyendo a proyectos open source,
                escribiendo sobre desarrollo web y explorando nuevas tecnologías.
              </p>
            </div>

            {/* Stack Tecnológico */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Stack Tecnológico
              </h3>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <Badge key={tech} text={tech} variant="default" />
                ))}
              </div>

              {/* Stats */}
              <div className="mt-12 space-y-6">
                <div>
                  <p className="text-4xl font-bold text-accent mb-2">50+</p>
                  <p className="text-muted-foreground">Proyectos Completados</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-accent mb-2">30+</p>
                  <p className="text-muted-foreground">Clientes Satisfechos</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-accent mb-2">5+</p>
                  <p className="text-muted-foreground">Años de Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
