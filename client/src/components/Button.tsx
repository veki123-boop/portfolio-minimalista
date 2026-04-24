/**
 * BUTTON COMPONENT - Portfolio Minimalista
 * 
 * Diseño: Botones con glow effects mejorados
 * - Primary: Coral/rojo con sombra neon
 * - Secondary: Glassmorphism con bordes sutiles
 * - Transiciones suaves (300ms) para coherencia visual
 */

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent";

  const variantStyles = {
    primary:
      "bg-accent text-accent-foreground hover:bg-red-600 hover:shadow-xl hover:shadow-accent/50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300",
    secondary:
      "bg-card text-foreground border border-white/20 hover:bg-white/10 hover:border-white/40 hover:shadow-lg hover:shadow-accent/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
