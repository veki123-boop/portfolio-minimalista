/**
 * FOOTER COMPONENT - Portfolio Minimalista
 * 
 * Pie de página con información y enlaces
 */

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-muted">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Sobre Este Portfolio
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Portfolio minimalista construido con Next.js, React, TypeScript y
              Tailwind CSS. Diseñado para ser rápido, responsive y fácil de
              mantener.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "#" },
                { label: "Proyectos", href: "#projects" },
                { label: "Contacto", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Conecta Conmigo
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 rounded-lg bg-card border border-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-muted mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Juan García. Todos los derechos reservados.
          </p>

          <p className="text-muted-foreground text-sm">
            Construido con{" "}
            <span className="text-accent">❤️</span> usando Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
