# 🎨 Portfolio Minimalista

Un portfolio personal ultra minimalista construido con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. Diseño premium con fondo negro profundo, acentos en rojo y mucho espacio vacío.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)

---

## ✨ Características

- **🎯 Minimalista**: Diseño limpio con mucho espacio negativo
- **🔴 Acentos en Rojo**: Punto rojo (#ff4d4d) estratégicamente colocado
- **📱 Responsive**: Funciona perfectamente en móvil, tablet y desktop
- **⚡ Rápido**: Optimizado para máximo rendimiento
- **🎬 Animaciones Suaves**: Transiciones y fade-in al scroll
- **♿ Accesible**: Cumple con estándares WCAG AA
- **🔍 SEO Optimizado**: Meta tags, Open Graph, schema.org
- **📊 Modular**: Estructura escalable y fácil de mantener
- **🎨 Personalizable**: Sistema de diseño con variables CSS
- **🚀 Listo para Deploy**: GitHub Pages, Manus, Vercel, Netlify

---

## 🏗️ Estructura del Proyecto

```
portfolio-minimalista/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   └── ScrollReveal.tsx
│   │   ├── data/
│   │   │   ├── projects.ts
│   │   │   ├── experience.ts
│   │   │   └── skills.ts
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── shared/
│   └── const.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── DEPLOY.md
└── README.md
```

---

## 🚀 Inicio Rápido

### Requisitos

- Node.js 18+
- pnpm 10+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio-minimalista.git
cd portfolio-minimalista

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El portfolio estará disponible en `http://localhost:3000`

---

## 📝 Personalización

### 1. Actualizar Información Personal

Edita `client/src/components/Hero.tsx`:

```tsx
<h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
  Tu Nombre <span className="text-accent">Aquí</span>
</h1>

<p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
  Tu Rol Profesional
</p>
```

### 2. Agregar Proyectos

Edita `client/src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "proyecto-nuevo",
    title: "Mi Nuevo Proyecto",
    description: "Descripción del proyecto",
    image: "https://images.unsplash.com/...",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/...",
      demo: "https://ejemplo.com",
    },
    featured: true,
    year: 2024,
  },
  // ... más proyectos
];
```

### 3. Actualizar Experiencia

Edita `client/src/data/experience.ts`:

```typescript
export const experience: ExperienceItem[] = [
  {
    id: "trabajo-1",
    type: "work",
    title: "Mi Puesto",
    company: "Mi Empresa",
    description: "Descripción del trabajo",
    startDate: "Ene 2024",
    endDate: "Present",
    technologies: ["React", "Node.js"],
    location: "Remoto",
  },
  // ... más experiencia
];
```

### 4. Actualizar Habilidades

Edita `client/src/data/skills.ts`:

```typescript
export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    skills: [
      { name: "React", level: "expert" },
      { name: "Vue.js", level: "advanced" },
      // ... más habilidades
    ],
  },
  // ... más categorías
];
```

### 5. Personalizar Colores

Edita `client/src/index.css` en la sección `:root`:

```css
:root {
  /* Cambiar color primario */
  --primary: #tu-color;
  --accent: #tu-acento;
  
  /* Cambiar colores de fondo */
  --background: #tu-fondo;
  --foreground: #tu-texto;
}
```

---

## 🎨 Sistema de Diseño

### Colores

| Variable | Color | Uso |
|----------|-------|-----|
| `--background` | `#0a0a0a` | Fondo principal |
| `--foreground` | `#f5f5f5` | Texto principal |
| `--card` | `#1a1a1a` | Fondo de cards |
| `--accent` | `#ff4d4d` | Acento rojo |
| `--muted` | `#333333` | Bordes y divisores |

### Tipografía

- **Font**: Geist
- **Tamaños**: 
  - Hero: 72px (desktop), 48px (mobile)
  - Títulos: 48px (desktop), 32px (mobile)
  - Cuerpo: 16px
  - Pequeño: 14px

### Espaciado

- **Desktop**: 120px top/bottom, 80px left/right
- **Tablet**: 80px top/bottom, 40px left/right
- **Mobile**: 40px top/bottom, 20px left/right

---

## 📦 Build y Deploy

### Build para Producción

```bash
# Crear build optimizado
pnpm build

# Previsualizar build
pnpm preview
```

### Deploy

Consulta [DEPLOY.md](./DEPLOY.md) para instrucciones completas de deploy en:

- ✅ **Manus** (Recomendado)
- ✅ **GitHub Pages**
- ✅ **Vercel**
- ✅ **Netlify**
- ✅ **Cualquier servidor estático**

---

## 🔧 Tecnologías

- **Framework**: React 19
- **Lenguaje**: TypeScript 5.6
- **Bundler**: Vite 7
- **Estilos**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Iconos**: Lucide React
- **Router**: Wouter
- **Animaciones**: Framer Motion (opcional)

---

## 📊 Optimizaciones

- ✅ Code splitting automático
- ✅ Lazy loading de imágenes
- ✅ Minificación de CSS/JS
- ✅ Compresión Gzip
- ✅ Caché de navegador
- ✅ SEO optimizado
- ✅ Lighthouse Score: 95+

---

## 🎯 Checklist de Personalización

- [ ] Actualizar nombre y rol en Hero
- [ ] Cambiar foto/avatar
- [ ] Agregar tus proyectos
- [ ] Actualizar experiencia laboral
- [ ] Personalizar habilidades
- [ ] Cambiar colores (opcional)
- [ ] Actualizar links de redes sociales
- [ ] Configurar formulario de contacto
- [ ] Agregar favicon personalizado
- [ ] Revisar SEO meta tags

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## ♿ Accesibilidad

- ✅ Contraste WCAA AA
- ✅ Focus rings visibles
- ✅ Navegación por teclado
- ✅ ARIA labels
- ✅ Semántica HTML correcta

---

## 🐛 Troubleshooting

### El servidor no inicia

```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Las imágenes no se cargan

- Verifica que las URLs sean absolutas
- Usa URLs HTTPS
- Comprueba que las imágenes existan

### El build falla

```bash
# Verificar errores de TypeScript
pnpm check

# Limpiar caché de Vite
rm -rf .vite
pnpm build
```

---

## 📚 Recursos

- [Documentación de React](https://react.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de TypeScript](https://www.typescriptlang.org)

---

## 📄 Licencia

MIT © 2024

---

## 🤝 Contribuir

¿Encontraste un bug? ¿Tienes una sugerencia?

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Añadir mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

---

## 💬 Contacto

- 📧 Email: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
- 🔗 LinkedIn: [tu-perfil](https://linkedin.com)
- 🐙 GitHub: [tu-usuario](https://github.com)

---

## 🙏 Agradecimientos

- Diseño inspirado en portfolios minimalistas modernos
- Iconos de [Lucide React](https://lucide.dev)
- Componentes de [shadcn/ui](https://ui.shadcn.com)
- Tipografía [Geist](https://vercel.com/font)

---

**¡Gracias por usar Portfolio Minimalista! 🚀**

Hecho con ❤️ usando React, TypeScript y Tailwind CSS
