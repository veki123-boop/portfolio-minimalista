# Ideas de Diseño - Portfolio Minimalista

## Enfoque Seleccionado: **Minimalismo Contemporáneo Premium**

### Filosofía de Diseño
**Elegancia a través de la restricción**: Cada elemento tiene un propósito. El espacio vacío es tan importante como el contenido. La sofisticación surge de la claridad, no de la complejidad.

---

## Principios Fundamentales

1. **Espacio Negativo Intencional**: El fondo negro profundo no es un contenedor pasivo, sino un lienzo que respeta el contenido. Mínimo 60% de la pantalla es espacio vacío.

2. **Tipografía Jerárquica Fuerte**: Contraste dramático entre tamaños. Títulos monumentales (hasta 72px) contra cuerpo limpio (16px). Esto crea ritmo visual sin necesidad de colores.

3. **Punto Rojo como Brújula Visual**: El rojo (#ff4d4d) aparece estratégicamente:
   - Botones de CTA primarios
   - Indicadores de scroll activo
   - Acentos en cards de proyectos
   - Líneas divisoras sutiles
   - Nunca más del 5% del espacio visual

4. **Movimiento Sutil**: Las animaciones son casi imperceptibles (200-300ms). El scroll revela contenido gradualmente. Los botones responden con micro-interacciones.

---

## Paleta de Colores

| Rol | Color | Uso |
|-----|-------|-----|
| Fondo Principal | `#0a0a0a` | Fondo base, máxima profundidad |
| Fondo Secundario | `#1a1a1a` | Cards, secciones |
| Texto Principal | `#f5f5f5` | Cuerpo, legibilidad |
| Texto Secundario | `#a0a0a0` | Descripciones, metadata |
| Acento Primario | `#ff4d4d` | CTAs, highlights |
| Acento Suave | `#333333` | Bordes, divisores |

---

## Paradigma de Layout

**Asimetría Controlada**:
- Hero: Nombre a la izquierda, espacio vacío a la derecha
- Proyectos: Grid 2 columnas en desktop, pero con offset visual
- Timeline: Línea vertical a la izquierda, contenido fluye a la derecha
- Contacto: Formulario centrado pero con máximo 500px de ancho

**Márgenes Generosos**: 
- Desktop: 120px top/bottom, 80px left/right
- Tablet: 80px top/bottom, 40px left/right
- Mobile: 40px top/bottom, 20px left/right

---

## Elementos Distintivos

1. **Punto Rojo Animado**: Pequeño círculo rojo que aparece al hacer scroll, indicando posición en la página. Suave y no invasivo.

2. **Líneas Divisoras Minimalistas**: Líneas horizontales muy sutiles (`1px`, `rgba(255,255,255,0.1)`) entre secciones.

3. **Cards Flotantes**: Proyectos en cards con borde sutil, hover levanta la card ligeramente (transform: translateY(-4px)).

4. **Tipografía Variable**: Usa diferentes pesos de la misma familia para crear contraste sin cambiar fuentes.

---

## Filosofía de Interacción

- **Hover States**: Cambio de color del acento rojo, transición suave (200ms)
- **Focus States**: Anillo rojo sutil alrededor de elementos interactivos
- **Scroll Behavior**: Fade-in de elementos conforme entran en viewport
- **Transiciones**: Todas las transiciones usan easing `cubic-bezier(0.4, 0, 0.2, 1)` (material design)

---

## Animaciones

- **Entrance**: Fade-in + slight translateY(20px) al entrar en viewport (300ms)
- **Hover**: Scale(1.02) + color change en cards (200ms)
- **Scroll Indicator**: Punto rojo que sigue la posición de scroll (suave)
- **Button Feedback**: Pulse suave al hacer hover, scale(0.98) al click

---

## Sistema Tipográfico

| Elemento | Font | Peso | Tamaño |
|----------|------|------|--------|
| Nombre (Hero) | Geist | 700 | 72px (desktop), 48px (mobile) |
| Títulos Sección | Geist | 600 | 48px (desktop), 32px (mobile) |
| Subtítulos | Geist | 500 | 24px |
| Cuerpo | Geist | 400 | 16px |
| Metadata | Geist | 400 | 14px |
| Etiquetas | Geist | 500 | 12px |

**Estrategia**: Una sola familia (Geist) con variación de peso. Esto mantiene coherencia mientras permite jerarquía clara.

---

## Estructura de Componentes

```
Hero
├── Nombre (Geist 700, 72px)
├── Rol (Geist 500, 24px, gris)
└── CTA Buttons (Rojo primario)

About
├── Descripción
├── Stack (badges)
└── Skills (cards con hover)

Projects
├── Project Card (reutilizable)
│   ├── Imagen
│   ├── Título
│   ├── Descripción
│   ├── Tech Stack
│   └── Links (GitHub, Demo)
└── JSON-driven (fácil de extender)

Experience
├── Timeline (línea vertical)
└── Timeline Items (offset alternado)

Contact
├── Formulario
└── Social Links
```

---

## Notas de Implementación

- **CSS Variables**: Todos los colores y espacios en variables CSS para fácil mantenimiento
- **Responsive**: Mobile-first, breakpoints en 640px, 1024px
- **Performance**: Lazy load de imágenes, animaciones con GPU (transform, opacity)
- **Accesibilidad**: Contraste WCAA AA, focus rings visibles, navegación por teclado

