/**
 * CONTACT SECTION - Portfolio Minimalista
 * 
 * Sección de contacto con formulario simple
 */

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import ScrollReveal from "./ScrollReveal";
import { Mail, Github, ExternalLink } from "lucide-react";

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
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="section" id="contact">
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
            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-muted rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-muted rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-muted rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Enviar Mensaje
              </button>

              {submitted && (
                <div className="p-4 bg-accent/20 border border-accent rounded-lg text-accent text-center font-medium">
                  ¡Mensaje enviado correctamente!
                </div>
              )}
            </form>

            {/* Contacto Directo */}
            <div className="border-t border-muted pt-12">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                O conecta conmigo directamente
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email */}
                <a
                  href="mailto:ciruelomayka@gmail.com"
                  className="flex flex-col items-center gap-3 p-6 border border-muted rounded-lg hover:border-accent hover:bg-secondary/50 transition-all duration-200"
                >
                  <Mail className="w-8 h-8 text-accent" />
                  <span className="font-medium text-foreground">Email</span>
                  <span className="text-sm text-muted-foreground text-center">
                    ciruelomayka@gmail.com
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/veki123-boop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 border border-muted rounded-lg hover:border-accent hover:bg-secondary/50 transition-all duration-200"
                >
                  <Github className="w-8 h-8 text-accent" />
                  <span className="font-medium text-foreground">GitHub</span>
                  <span className="text-sm text-muted-foreground">veki123-boop</span>
                </a>

                {/* Teléfono */}
                <a
                  href="tel:+34635074516"
                  className="flex flex-col items-center gap-3 p-6 border border-muted rounded-lg hover:border-accent hover:bg-secondary/50 transition-all duration-200"
                >
                  <ExternalLink className="w-8 h-8 text-accent" />
                  <span className="font-medium text-foreground">Teléfono</span>
                  <span className="text-sm text-muted-foreground">+34 635 074 516</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
