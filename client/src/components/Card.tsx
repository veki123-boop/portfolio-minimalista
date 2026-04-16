/**
 * CARD COMPONENT - Portfolio Minimalista
 * 
 * Card reutilizable con estilos minimalistas
 * Soporta hover effects y variantes
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
    ? "hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:translate-y-[-4px] cursor-pointer"
    : "";

  const combinedClassName = `${baseStyles} ${hoverStyles} ${className}`;

  return (
    <div onClick={onClick} className={combinedClassName}>
      {children}
    </div>
  );
}
