# Portfolio Minimalista - Iván Gutierrez

Un portfolio personal ultra minimalista, moderno y seguro, construido con **HTML puro** y **JavaScript vanilla**.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-2.0.0-orange)
![Languages](https://img.shields.io/badge/Languages-HTML%20%7C%20CSS%20%7C%20JS-blue)

---

## ✨ Características

- **🎯 Minimalista**: Diseño limpio con mucho espacio negativo
- **🔴 Acentos en Rojo**: Punto rojo (#ff4d4d) estratégicamente colocado
- **📱 Responsive**: Funciona perfectamente en móvil, tablet y desktop
- **⚡ Rápido**: HTML puro, carga instantánea (48 KB)
- **🎬 Animaciones Suaves**: Transiciones y fade-in al scroll
- **🌐 Multiidioma**: Español, Inglés, Catalán
- **🔍 SEO Optimizado**: Meta tags, Open Graph, schema.org
- **🔒 Seguro**: CSP, X-Frame-Options, protección XSS
- **📧 Formulario Funcional**: Integrado con Formspree
- **🚀 Listo para Deploy**: GitHub Pages, Manus, cualquier servidor

---

## 🏗️ Estructura del Proyecto

```
portfolio-minimalista/
├── index.html                 # Archivo principal (HTML + CSS + JS)
├── minecraft.png              # Imagen del proyecto Minecraft
├── README.md                  # Este archivo
├── DEPLOY.md                  # Guía de deployment
├── SECURITY.md                # Documentación de seguridad
├── SECURITY_DEPLOYMENT.md     # Guías de deployment seguro
├── nginx.conf                 # Configuración Nginx
└── .htaccess                  # Configuración Apache
```

---

## 🚀 Inicio Rápido

### Opción 1: GitHub Pages (Recomendado)

1. **Habilitar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Selecciona "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
   - Guarda

2. **Tu portfolio estará en línea en**: `https://veki123-boop.github.io/portfolio-minimalista`

### Opción 2: Usar Localmente

```bash
# Solo descarga el archivo index.html
# Abre en tu navegador (doble clic)
# ¡Funciona sin servidor!
```

### Opción 3: Servidor Local

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx http-server

# Abre en http://localhost:8000
```

---

## 📝 Personalización

### 1. Cambiar Información Personal

Edita `index.html` y busca:

```html
<!-- Cambiar nombre -->
<h1>Iván <span class="accent">Gutierrez</span></h1>

<!-- Cambiar email -->
ciruelomayka@gmail.com

<!-- Cambiar teléfono -->
+34 635 074 516

<!-- Cambiar GitHub -->
https://github.com/veki123-boop
```

### 2. Agregar Proyectos

Busca la sección `<!-- Proyectos -->` y duplica una tarjeta:

```html
<div class="project-card">
    <div class="project-image">
        <img src="tu-imagen.png" alt="Descripción">
    </div>
    <div class="project-content">
        <h3 class="project-title" data-es="Tu Proyecto" data-en="Your Project" data-ca="El Teu Projecte">Tu Proyecto</h3>
        <p class="project-description" data-es="Descripción ES" data-en="Description EN" data-ca="Descripció CA">Descripción</p>
        <div class="project-tech">
            <span class="tech-tag">Tecnología</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/..." target="_blank">GitHub →</a>
        </div>
    </div>
</div>
```

### 3. Cambiar Colores

Busca en la sección `<style>`:

```css
/* Color principal (rojo) */
#ff4d4d → Tu color

/* Color de fondo (negro) */
#0a0a0a → Tu color

/* Color de texto */
#e5e5e5 → Tu color
```

### 4. Actualizar Formulario de Contacto

Busca en `index.html`:

```html
<form action="https://formspree.io/f/xyzpqwer" method="POST">
```

Reemplaza `xyzpqwer` con tu ID de Formspree (obtenlo en formspree.io)

---

## 🎨 Sistema de Diseño

### Colores

| Variable | Color | Uso |
|----------|-------|-----|
| Fondo | `#0a0a0a` | Fondo principal |
| Texto | `#e5e5e5` | Texto principal |
| Acento | `#ff4d4d` | Rojo principal |
| Muted | `#999` | Texto secundario |
| Border | `rgba(255, 77, 77, 0.2)` | Bordes |

### Tipografía

- **Font**: Geist (Google Fonts)
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

## 🌐 Multiidioma

El portfolio soporta:
- 🇪🇸 **Español** (por defecto)
- 🇬🇧 **Inglés**
- 🇨🇦 **Catalán**

Selecciona tu idioma con los botones en la navegación. Tu preferencia se guarda en localStorage.

### Agregar Traducciones

Usa los atributos `data-es`, `data-en`, `data-ca`:

```html
<h1 data-es="Hola" data-en="Hello" data-ca="Hola">Hola</h1>
```

---

## 📧 Formulario de Contacto

El formulario está integrado con **Formspree** y envía los mensajes a: **ciruelomayka@gmail.com**

### Pasos para configurar:

1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta
3. Crea un nuevo formulario
4. Copia el ID del formulario
5. Reemplaza en `index.html`: `<form action="https://formspree.io/f/TU_ID"`

---

## 🔒 Seguridad

El portfolio incluye:
- ✅ Content Security Policy (CSP)
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ Strict-Transport-Security (HSTS)
- ✅ Protección contra XSS
- ✅ Validación de formularios
- ✅ HTTPS enforcement

Ver `SECURITY.md` para más detalles.

---

## 📱 Responsive

- **Móvil**: Optimizado para pantallas pequeñas (320px+)
- **Tablet**: Diseño adaptativo (640px+)
- **Desktop**: Experiencia completa (1024px+)

---

## ⚡ Rendimiento

- **Tamaño**: 48 KB (ultra ligero)
- **Carga**: Instantánea (sin build)
- **Compatibilidad**: Todos los navegadores modernos
- **Lighthouse**: A+ en rendimiento

---

## 📊 Lenguajes Utilizados

- **HTML**: 70%
- **CSS**: 20%
- **JavaScript**: 10%

---

## 🎯 Contenido Incluido

### Secciones

1. **Hero**: Presentación principal con CTAs
2. **Sobre Mí**: Descripción personal y stack tecnológico
3. **Habilidades**: 4 categorías de skills con niveles
4. **Proyectos**: 4 proyectos con imágenes y enlaces
5. **Experiencia**: Timeline de trabajo y educación
6. **Currículum**: CV completo en 3 idiomas
7. **Contacto**: Formulario funcional + enlaces

### Proyectos Incluidos

- **Administración de Servidores Minecraft**: Configuración, plugins, backups, SFTP
- **Máquinas Virtuales**: VMware, VirtualBox, Linux, Windows
- **Creador de Páginas Web con IA**: HTML, CSS, AI
- **Scripts C++**: Automatización y detección

### Stack Tecnológico

- HTML
- C++
- Linux
- VMware
- SFTP
- Minecraft
- Windows
- Redes

---

## 📦 Deploy

Consulta [DEPLOY.md](./DEPLOY.md) para instrucciones completas de deploy en:

- ✅ **GitHub Pages** (Recomendado)
- ✅ **Manus**
- ✅ **Vercel**
- ✅ **Netlify**
- ✅ **Apache/Nginx**
- ✅ **Cualquier servidor estático**

---

## 🔧 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive, animaciones
- **JavaScript Vanilla**: Sin dependencias
- **Formspree**: Formulario de contacto funcional
- **Google Fonts**: Tipografía Geist

---

## 🎯 Checklist de Personalización

- [ ] Actualizar nombre y rol en Hero
- [ ] Cambiar email y teléfono
- [ ] Agregar tus proyectos
- [ ] Actualizar experiencia laboral
- [ ] Personalizar habilidades
- [ ] Cambiar colores (opcional)
- [ ] Actualizar links de redes sociales
- [ ] Configurar formulario de contacto (Formspree)
- [ ] Agregar favicon personalizado
- [ ] Revisar SEO meta tags

---

## 🐛 Troubleshooting

### El formulario no envía emails

- Verifica que hayas configurado Formspree correctamente
- Comprueba que el ID del formulario sea correcto
- Revisa la consola del navegador para errores

### Las imágenes no se cargan

- Verifica que las rutas sean correctas
- Usa URLs absolutas o relativas desde la raíz
- Comprueba que los archivos existan

### Multiidioma no funciona

- Abre la consola del navegador (F12)
- Verifica que no haya errores de JavaScript
- Comprueba que los atributos `data-es`, `data-en`, `data-ca` estén presentes

---

## 📚 Recursos

- [MDN Web Docs](https://developer.mozilla.org)
- [HTML5 Spec](https://html.spec.whatwg.org)
- [CSS3 Spec](https://www.w3.org/Style/CSS)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Formspree Docs](https://formspree.io)

---

## 📄 Licencia

MIT © 2026 Iván Gutierrez

---

## 🤝 Contacto

- 📧 Email: [ciruelomayka@gmail.com](mailto:ciruelomayka@gmail.com)
- 🐙 GitHub: [veki123-boop](https://github.com/veki123-boop)
- 📱 Teléfono: +34 635 074 516

---

**¡Gracias por usar Portfolio Minimalista! 🚀**

Hecho con ❤️ usando HTML, CSS y JavaScript vanilla
