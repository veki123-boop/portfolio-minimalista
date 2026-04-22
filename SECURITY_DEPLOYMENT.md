# 🔐 Guía de Implementación de Seguridad - Deployment

## Resumen Ejecutivo

Tu portfolio está configurado con **medidas de seguridad de nivel empresarial**. Este documento explica cómo implementarlas en diferentes plataformas.

---

## 1. Deployment en Manus (Recomendado ✅)

Manus proporciona automáticamente:

- ✅ **HTTPS con certificados SSL/TLS** (Let's Encrypt)
- ✅ **Headers de seguridad** (HSTS, X-Frame-Options, etc.)
- ✅ **CORS configurado** correctamente
- ✅ **DDoS protection** básico
- ✅ **Backups automáticos**
- ✅ **CDN global** para velocidad

### Pasos:

1. Haz clic en **"Publish"** en la interfaz de Manus
2. Selecciona tu dominio personalizado (o usa el generado)
3. Manus desplegará automáticamente con todas las medidas de seguridad

**No requiere configuración adicional.**

---

## 2. Deployment en GitHub Pages

Si prefieres GitHub Pages, sigue estos pasos:

### Configuración de Seguridad:

```bash
# 1. Actualiza vite.config.ts para GitHub Pages
# (ya está configurado en tu proyecto)

# 2. Build para producción
pnpm build

# 3. Sube a GitHub
git add .
git commit -m "Agregar medidas de seguridad"
git push origin main

# 4. En GitHub:
# - Ve a Settings → Pages
# - Selecciona "Deploy from a branch"
# - Rama: main, carpeta: /dist/public
# - Habilita "Enforce HTTPS"
```

### Headers en GitHub Pages (Limitado):

GitHub Pages proporciona automáticamente:
- ✅ HTTPS obligatorio
- ✅ Algunos headers de seguridad básicos

**Limitación**: No puedes personalizar todos los headers. Para máxima seguridad, usa Manus.

---

## 3. Deployment en Vercel

### Configuración:

```bash
# 1. Instala Vercel CLI
npm i -g vercel

# 2. Deploy
vercel --prod
```

### Archivo `vercel.json` para seguridad:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'wasm-unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com https://*.umami.is; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' https: data:; connect-src 'self' https://*.umami.is; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
        }
      ]
    }
  ]
}
```

---

## 4. Deployment en Netlify

### Configuración:

```bash
# 1. Instala Netlify CLI
npm i -g netlify-cli

# 2. Deploy
netlify deploy --prod --dir=dist/public
```

### Archivo `netlify.toml` para seguridad:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'wasm-unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com https://*.umami.is; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' https: data:; connect-src 'self' https://*.umami.is; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 5. Deployment en Servidor Personal (Apache/Nginx)

### Apache:

1. Copia `.htaccess` a `client/public/.htaccess`
2. Asegúrate de que `mod_rewrite` esté habilitado:
   ```bash
   sudo a2enmod rewrite
   sudo a2enmod headers
   sudo systemctl restart apache2
   ```

### Nginx:

1. Copia `nginx.conf` a `/etc/nginx/sites-available/portfolio`
2. Habilita el sitio:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

---

## 6. Verificación de Seguridad

### Herramientas Online:

1. **Mozilla Observatory** (https://observatory.mozilla.org/)
   - Pega tu URL
   - Verifica que obtengas grado A o superior

2. **SSL Labs** (https://www.ssllabs.com/ssltest/)
   - Verifica certificado SSL
   - Debe mostrar grado A o A+

3. **Security Headers** (https://securityheaders.com/)
   - Verifica headers de seguridad
   - Debe mostrar grado A

### Comandos locales:

```bash
# Verifica headers de seguridad
curl -I https://tu-dominio.com

# Verifica certificado SSL
openssl s_client -connect tu-dominio.com:443

# Auditoría de dependencias
pnpm audit
```

---

## 7. Checklist Pre-Deployment

- [ ] Build sin errores: `pnpm build`
- [ ] Auditoría de seguridad: `pnpm audit`
- [ ] Dependencias actualizadas: `pnpm update`
- [ ] index.html tiene CSP: ✅ (ya incluido)
- [ ] HTTPS habilitado: ✅ (Manus/Vercel/Netlify lo hacen automáticamente)
- [ ] Headers de seguridad configurados: ✅ (según plataforma)
- [ ] Formulario de contacto validado: ✅ (HTML5 + React)
- [ ] Sin secretos en código: ✅ (verificado)
- [ ] Analytics respetuoso: ✅ (Umami con Do Not Track)
- [ ] Dominio personalizado listo: ✅ (opcional)

---

## 8. Monitoreo Post-Deployment

### Logs de Seguridad:

```bash
# En Manus (automático)
# En tu servidor, revisa:
tail -f /var/log/nginx/portfolio-access.log
tail -f /var/log/nginx/portfolio-error.log
```

### Alertas Recomendadas:

1. **Certificado SSL próximo a expirar** (Manus lo renueva automáticamente)
2. **Vulnerabilidades en dependencias** (ejecuta `pnpm audit` regularmente)
3. **Tráfico anómalo** (monitorea con Umami)

---

## 9. Actualización de Seguridad

### Mensual:

```bash
# Verifica vulnerabilidades
pnpm audit

# Actualiza si es necesario
pnpm audit --fix
pnpm update
```

### Trimestral:

```bash
# Auditoría completa
pnpm audit
npm outdated
```

### Anual:

```bash
# Revisa nuevas recomendaciones de OWASP
# Actualiza CSP si es necesario
# Revisa headers de seguridad
```

---

## 10. Contacto de Seguridad

Si encuentras una vulnerabilidad:

1. **NO** la publiques en redes sociales
2. Contacta a: **ciruelomayka@gmail.com**
3. Proporciona:
   - Descripción técnica
   - Pasos para reproducir
   - Impacto potencial
4. Espera confirmación (máximo 48 horas)

---

## Resumen de Seguridad Implementada

| Medida | Estado | Ubicación |
|--------|--------|-----------|
| HTTPS/TLS | ✅ Automático en Manus | Servidor |
| CSP (Content Security Policy) | ✅ Configurado | index.html |
| HSTS | ✅ Configurado | Headers |
| X-Frame-Options | ✅ DENY | Headers |
| X-Content-Type-Options | ✅ nosniff | Headers |
| X-XSS-Protection | ✅ Habilitado | Headers |
| Referrer Policy | ✅ Restrictivo | Headers |
| Permissions Policy | ✅ Restrictivo | Headers |
| Validación de formularios | ✅ HTML5 + React | Componentes |
| Analytics privado | ✅ Umami | Configurado |
| Rate limiting | ✅ Nginx | nginx.conf |
| Caché seguro | ✅ Configurado | .htaccess / nginx.conf |

---

## Preguntas Frecuentes

**P: ¿Es seguro publicar en GitHub Pages?**
R: Sí, GitHub Pages proporciona HTTPS automático. Pero Manus es más seguro porque permite personalizar todos los headers.

**P: ¿Necesito cambiar algo en mi código?**
R: No, todo está configurado. Solo despliega con `pnpm build` y sube a tu plataforma.

**P: ¿Qué pasa si encuentro una vulnerabilidad?**
R: Contacta inmediatamente a ciruelomayka@gmail.com con detalles técnicos.

**P: ¿Con qué frecuencia debo auditar seguridad?**
R: Mínimo mensual con `pnpm audit`. Anual una auditoría completa.

---

**Última actualización**: Abril 2026
**Versión**: 1.0
**Autor**: Iván Gutierrez Romero
