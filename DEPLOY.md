# 📦 Guía de Deploy - Portfolio Minimalista

Este documento contiene las instrucciones para desplegar tu portfolio en GitHub Pages y conectar un dominio personalizado.

---

## 🚀 Opción 1: Deploy en Manus (Recomendado)

Manus proporciona hosting integrado con soporte para dominios personalizados. Es la forma más rápida y fácil.

### Pasos:

1. **Crear un checkpoint** (si no lo has hecho):
   ```bash
   # El checkpoint se crea automáticamente en la interfaz de Manus
   ```

2. **Publicar**:
   - Haz clic en el botón **"Publish"** en la esquina superior derecha
   - Selecciona la versión que deseas publicar
   - Tu sitio estará disponible en: `https://tu-portfolio.manus.space`

3. **Conectar dominio personalizado**:
   - Ve a **Settings → Domains**
   - Compra un nuevo dominio o conecta uno existente
   - Sigue las instrucciones para configurar los DNS
   - Tu portfolio estará disponible en tu dominio personalizado

---

## 🐙 Opción 2: Deploy en GitHub Pages

Si prefieres usar GitHub Pages, sigue estos pasos:

### Requisitos:

- Cuenta de GitHub
- Git instalado en tu máquina local
- Node.js y pnpm

### Pasos:

#### 1. Crear un repositorio en GitHub

```bash
# Ve a https://github.com/new y crea un nuevo repositorio
# Nombre recomendado: portfolio-minimalista
# Descripción: "Portfolio personal ultra minimalista"
```

#### 2. Clonar y configurar el proyecto

```bash
# Clonar el repositorio (reemplaza TU_USUARIO y TU_REPO)
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO

# Copiar los archivos del portfolio
# (Asume que tienes el proyecto en /home/ubuntu/portfolio-minimalista)
cp -r /home/ubuntu/portfolio-minimalista/* .

# Instalar dependencias
pnpm install
```

#### 3. Configurar para GitHub Pages

Edita `package.json` y actualiza el script de build:

```json
{
  "scripts": {
    "build": "vite build && echo 'portfolio-minimalista.github.io' > dist/public/CNAME"
  }
}
```

O si tu repositorio se llama diferente:

```json
{
  "scripts": {
    "build": "vite build && echo 'TU_USUARIO.github.io/TU_REPO' > dist/public/CNAME"
  }
}
```

#### 4. Crear rama `gh-pages`

```bash
# Crear rama gh-pages
git checkout --orphan gh-pages

# Limpiar la rama
git rm -rf .

# Crear un archivo placeholder
echo "# GitHub Pages" > README.md
git add README.md
git commit -m "Initial gh-pages commit"
git push origin gh-pages

# Volver a main
git checkout -b main
```

#### 5. Configurar GitHub Actions para deploy automático

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
          cname: tu-dominio.com  # Reemplaza con tu dominio
```

#### 6. Hacer push del proyecto

```bash
# Agregar archivos
git add .

# Commit
git commit -m "Initial portfolio commit"

# Push a main
git push origin main
```

#### 7. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings → Pages**
3. Selecciona `gh-pages` como rama de source
4. Haz clic en **Save**

Tu portfolio estará disponible en: `https://TU_USUARIO.github.io/TU_REPO`

---

## 🌐 Conectar Dominio Personalizado

### En GitHub Pages:

1. Ve a **Settings → Pages**
2. En "Custom domain", ingresa tu dominio (ej: `portfolio.tudominio.com`)
3. Configura los DNS de tu dominio:
   - **Opción A**: Apunta a `TU_USUARIO.github.io`
   - **Opción B**: Configura estos registros A:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

### En Manus:

1. Ve a **Settings → Domains**
2. Compra o conecta tu dominio
3. Sigue las instrucciones de configuración de DNS
4. ¡Listo! Tu portfolio estará disponible en tu dominio

---

## 📋 Checklist Pre-Deploy

Antes de desplegar, verifica:

- [ ] Todos los links funcionan correctamente
- [ ] Las imágenes se cargan sin errores
- [ ] El formulario de contacto funciona
- [ ] El diseño se ve bien en móvil
- [ ] No hay errores en la consola del navegador
- [ ] El SEO está configurado (meta tags, favicon, etc.)
- [ ] La navegación funciona correctamente

---

## 🔧 Troubleshooting

### El sitio no se carga después del deploy

- Verifica que el archivo `CNAME` existe en `dist/public/`
- Comprueba los DNS de tu dominio
- Espera 24 horas para que los DNS se propaguen

### Las imágenes no se cargan

- Verifica que las URLs de las imágenes son absolutas (comienzan con `http://` o `https://`)
- No uses rutas relativas para imágenes

### El formulario de contacto no funciona

- En GitHub Pages estático, necesitas usar un servicio externo como:
  - Formspree (https://formspree.io/)
  - Netlify Forms
  - EmailJS

---

## 📚 Recursos Útiles

- [GitHub Pages Documentation](https://pages.github.com/)
- [Manus Documentation](https://manus.im/docs)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [Next.js Static Export](https://nextjs.org/docs/advanced-features/static-html-export)

---

## 💡 Tips

1. **Actualizar el portfolio**: Simplemente haz push a `main` y GitHub Actions se encargará del deploy automático
2. **Versiones anteriores**: Todas las versiones están guardadas en el historial de GitHub
3. **Dominio personalizado**: Cambiar de dominio es fácil, solo actualiza la configuración de DNS
4. **HTTPS**: GitHub Pages proporciona HTTPS automáticamente

---

¡Tu portfolio está listo para el mundo! 🎉
