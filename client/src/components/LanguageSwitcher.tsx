/**
 * LANGUAGE SWITCHER - Selector de Idioma
 * 
 * Componente para cambiar entre idiomas (ES, EN, CA)
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  let language: "es" | "en" | "ca" = "es";
  let setLanguage: (lang: "es" | "en" | "ca") => void = () => {};

  try {
    const ctx = useLanguage();
    language = ctx.language;
    setLanguage = ctx.setLanguage;
  } catch (error) {
    // Si no está dentro del provider, usar valores por defecto
    console.warn("LanguageSwitcher: No LanguageProvider found, using defaults");
  }

  const languages = [
    { code: "es", label: "ES", name: "Español" },
    { code: "en", label: "EN", name: "English" },
    { code: "ca", label: "CA", name: "Català" },
  ];

  return (
    <div className="flex items-center gap-1 bg-card border border-muted rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code as "es" | "en" | "ca")}
          title={lang.name}
          className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
            language === lang.code
              ? "bg-accent text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
