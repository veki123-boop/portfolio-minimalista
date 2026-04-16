/**
 * SKILLS SECTION - Portfolio Minimalista
 * 
 * Sección de habilidades organizadas por categoría
 */

import { skillsData } from "@/data/skills";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Badge from "./Badge";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section className="section bg-secondary/30">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            title="Habilidades"
            subtitle="Tecnologías y herramientas que domino"
            centered
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category) => (
            <Card key={category.id} hover={false} className="h-full">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    text={skill.name}
                    variant={
                      skill.level === "expert"
                        ? "accent"
                        : skill.level === "advanced"
                          ? "default"
                          : "muted"
                    }
                  />
                ))}
              </div>

              {/* Skill Level Indicator */}
              <div className="mt-6 pt-6 border-t border-muted space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Experto</span>
                  <span className="text-accent font-semibold">
                    {
                      category.skills.filter((s) => s.level === "expert")
                        .length
                    }
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avanzado</span>
                  <span className="text-accent font-semibold">
                    {
                      category.skills.filter((s) => s.level === "advanced")
                        .length
                    }
                  </span>
                </div>
              </div>
            </Card>
          ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
