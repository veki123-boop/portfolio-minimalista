/**
 * SECTION TITLE COMPONENT - Portfolio Minimalista
 * 
 * Título de sección con línea divisora sutil
 */

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="h-px bg-muted mt-6 w-12 md:w-16"></div>
    </div>
  );
}
