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
    <section className="section bg-secondary/30" id="skills">
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

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <p className="text-sm text-muted-foreground mb-2">
                        {skill.name}
                      </p>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{
                            width:
                              skill.level === "expert"
                                ? "100%"
                                : skill.level === "advanced"
                                  ? "85%"
                                  : "70%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
