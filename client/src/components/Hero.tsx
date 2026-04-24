/**
 * HERO SECTION - Portfolio Minimalista
 * 
 * Diseño: Minimalismo tech-focused con red de nodos
 * - Imagen isométrica de servidores/red en la derecha (fondo oscuro)
 * - Tipografía mejorada: blanco puro para nombre, gris platino para descripción
 * - Espaciado generoso entre elementos (breathing room)
 * - Botones con glow effect coral/rojo
 * - Iconos de contacto agrupados en card glassmorphism
 */

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between pt-20 md:pt-0 pb-20 relative overflow-hidden">
      {/* Tech Network Background - SVG Decorative */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
          {/* Central Server Rack */}
          <g>
            <rect x="150" y="150" width="100" height="200" fill="#1a1a2e" stroke="#ff4d4d" strokeWidth="2" rx="4" />
            <circle cx="200" cy="200" r="8" fill="#00d4ff" opacity="0.8" />
            <circle cx="200" cy="250" r="8" fill="#ff4d4d" opacity="0.8" />
            <circle cx="200" cy="300" r="8" fill="#00d4ff" opacity="0.8" />
          </g>
          {/* Left Server */}
          <g>
            <rect x="50" y="200" width="70" height="120" fill="#1a1a2e" stroke="#00d4ff" strokeWidth="1.5" rx="3" />
            <circle cx="85" cy="230" r="5" fill="#00d4ff" opacity="0.7" />
          </g>
          {/* Right Server */}
          <g>
            <rect x="280" y="200" width="70" height="120" fill="#1a1a2e" stroke="#00d4ff" strokeWidth="1.5" rx="3" />
            <circle cx="315" cy="230" r="5" fill="#00d4ff" opacity="0.7" />
          </g>
          {/* Connection Lines */}
          <line x1="120" y1="260" x2="150" y2="250" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
          <line x1="250" y1="250" x2="280" y2="260" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
          {/* Floating nodes */}
          <circle cx="100" cy="100" r="4" fill="#00d4ff" opacity="0.6" />
          <circle cx="300" cy="120" r="4" fill="#00d4ff" opacity="0.6" />
          <circle cx="80" cy="400" r="4" fill="#ff4d4d" opacity="0.5" />
          <circle cx="320" cy="420" r="4" fill="#ff4d4d" opacity="0.5" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Nombre Principal - Pure White */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Iván <span className="text-accent">Gutierrez</span>
          </h1>

          {/* Rol - Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 font-medium tracking-wide">
            Técnico en Sistemas & Desarrollador
          </p>

          {/* Descripción Corta - Light Grey/Platinum */}
          <p className="text-lg text-gray-300 mb-16 max-w-xl leading-relaxed font-light">
            Apasionado por la tecnología, administración de sistemas y desarrollo. Especializado en configuración de servidores, máquinas virtuales y creación de soluciones web innovadoras.
          </p>

          {/* CTAs with Glow Effect */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button variant="primary" size="lg" className="shadow-lg shadow-accent/50 hover:shadow-accent/70 transition-shadow duration-300">
              Ver Proyectos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" className="hover:shadow-lg hover:shadow-accent/30 transition-shadow duration-300">
              Contacto
            </Button>
          </div>

          {/* Social Links - Glassmorphism Card */}
          <div className="inline-flex gap-4 p-4 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
            <a
              href="https://github.com/veki123-boop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ciruelomayka@gmail.com"
              className="text-gray-400 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
