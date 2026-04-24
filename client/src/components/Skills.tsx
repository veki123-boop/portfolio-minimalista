/**
 * SKILLS SECTION - Portfolio Minimalista
 * 
 * Diseño: Grid de skill cards con glassmorphism
 * - Fondo gris muy oscuro con bordes sutiles
 * - Esquinas redondeadas para modernidad
 * - Efecto glassmorphism (backdrop-blur)
 * - Iconos integrados para cada tecnología
 * - Hover effects con elevación y glow
 */

import { skillsData } from "@/data/skills";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section className="section bg-background" id="skills">
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
              <div
                key={category.id}
                className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:translate-y-[-4px]"
              >
                <h3 className="text-lg font-semibold text-white mb-6 group-hover:text-accent transition-colors duration-300">
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <p className="text-sm text-gray-300 mb-2 font-medium">
                        {skill.name}
                      </p>
                      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                        <div
                          className="bg-gradient-to-r from-accent to-accent/70 h-2 rounded-full transition-all duration-500 group-hover/skill:shadow-lg group-hover/skill:shadow-accent/50"
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
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
