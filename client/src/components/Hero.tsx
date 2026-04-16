/**
 * HERO SECTION - Portfolio Minimalista
 * 
 * Sección principal con nombre, rol y CTAs
 * Diseño minimalista con mucho espacio vacío
 */

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-start pt-20 md:pt-0 pb-20">
      <div className="container">
        <div className="max-w-2xl">
          {/* Nombre Principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Juan <span className="text-accent">García</span>
          </h1>

          {/* Rol */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Full Stack Developer & Designer
          </p>

          {/* Descripción Corta */}
          <p className="text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed">
            Creo experiencias digitales minimalistas y de alto rendimiento. Especializado en
            React, Next.js y diseño de interfaces limpias.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="primary" size="lg">
              Ver Proyectos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg">
              Contacto
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Red Dot */}
      <div className="hidden lg:block fixed right-20 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full opacity-60 animate-pulse"></div>
    </section>
  );
}
