/**
 * CARD COMPONENT - Portfolio Minimalista
 * 
 * Card reutilizable con estilos minimalistas
 * Soporta hover effects y variantes mejoradas
 * 
 * DESIGN PHILOSOPHY:
 * - Transiciones suaves (300ms) para no distraer
 * - Sombra roja sutil al hover (no agresiva)
 * - Elevación discreta (-6px) para sensación de profundidad
 * - Glow rojo suave para mantener minimalismo
 */

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = true,
  onClick,
}: CardProps) {
  const baseStyles =
    "bg-card border border-muted rounded-lg p-6 transition-all duration-300";

  const hoverStyles = hover
    ? "hover:border-accent hover:shadow-[0_0_20px_rgba(255,77,77,0.15)] hover:translate-y-[-6px] hover:bg-card/80 cursor-pointer group"
    : "";

  const combinedClassName = `${baseStyles} ${hoverStyles} ${className}`;

  return (
    <div onClick={onClick} className={combinedClassName}>
      {children}
    </div>
  );
}
