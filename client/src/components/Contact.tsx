/**
 * CONTACT SECTION - Portfolio Minimalista
 * 
 * Sección de contacto con formulario simple
 */

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import ScrollReveal from "./ScrollReveal";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            title="Contacto"
            subtitle="¿Tienes un proyecto en mente? Hablemos"
            centered
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-muted rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-muted rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-muted rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 resize-none"
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {submitted ? "¡Mensaje enviado!" : "Enviar Mensaje"}
                </Button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Otras formas de contacto
                </h3>
                <p className="text-muted-foreground mb-6">
                  Puedes encontrarme en estas plataformas o enviarme un correo
                  directamente.
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-muted hover:border-accent hover:bg-secondary/50 transition-all duration-200"
              >
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">
                    contact@example.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-muted hover:border-accent hover:bg-secondary/50 transition-all duration-200"
              >
                <Linkedin className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground font-medium">
                    linkedin.com/in/juangarcia
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-muted hover:border-accent hover:bg-secondary/50 transition-all duration-200"
              >
                <Github className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-foreground font-medium">
                    github.com/juangarcia
                  </p>
                </div>
              </a>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
