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
    "C++",
    "VMware",
    "Linux",
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            title="Sobre Mí"
            subtitle="Técnico motivado con pasión por la tecnología"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Descripción */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tengo 17 años y estoy muy motivado para aprender y crecer en el campo de la tecnología. Me interesan especialmente áreas como la programación, la inteligencia artificial y los sistemas informáticos.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Me apasiona comprender cómo funciona la tecnología. Todo lo que tenga que ver con aprender de cosas con tecnología me parece interesante. Actualmente estoy cursando el Grado Medio en Sistemas Microinformáticos y Redes.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                En mis tiempos libres dedico parte de mi tiempo a seguir aprendiendo y mejorando mis conocimientos en el ámbito de la tecnología.
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
                  <p className="text-4xl font-bold text-accent mb-2">4</p>
                  <p className="text-muted-foreground">Proyectos Personales</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-accent mb-2">1</p>
                  <p className="text-muted-foreground">En Desarrollo</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-accent mb-2">17</p>
                  <p className="text-muted-foreground">Años</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
