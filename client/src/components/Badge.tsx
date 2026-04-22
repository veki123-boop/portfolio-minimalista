/**
 * BADGE COMPONENT - Portfolio Minimalista
 * 
 * Badge para mostrar tecnologías y etiquetas
 */

interface BadgeProps {
  text: string;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

export default function Badge({
  text,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "bg-secondary text-foreground border border-muted",
    accent: "bg-accent/10 text-accent border border-accent/30",
    muted: "bg-muted text-muted-foreground border border-muted",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${variantStyles[variant]} ${className}`}
    >
      {text}
    </span>
  );
}
