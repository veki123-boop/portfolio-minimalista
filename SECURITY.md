# 🔒 Guía de Seguridad - Portfolio Minimalista

## Medidas de Seguridad Implementadas

### 1. **Content Security Policy (CSP)**
- **Ubicación**: `client/index.html` (meta tag)
- **Función**: Previene inyección de código malicioso (XSS)
- **Configuración**:
  - `default-src 'self'`: Solo permite recursos del mismo origen
  - `script-src`: Solo scripts de origen propio y servicios confiables
  - `style-src`: Solo estilos internos y Google Fonts
  - `frame-ancestors 'none'`: Previene clickjacking
  - `form-action 'self'`: Solo envía formularios al mismo origen

### 2. **Protección contra Clickjacking**
- **Header**: `X-Frame-Options: DENY`
- **Función**: Impide que el sitio sea embebido en iframes maliciosos
- **Ubicación**: `client/index.html` (meta tag)

### 3. **MIME Sniffing Protection**
- **Header**: `X-Content-Type-Options: nosniff`
- **Función**: Fuerza al navegador a respetar el tipo de contenido declarado
- **Previene**: Ataques basados en malinterpretación de tipos de archivo

### 4. **Referrer Policy**
- **Política**: `strict-origin-when-cross-origin`
- **Función**: Protege privacidad del usuario
- **Comportamiento**: Solo envía origen en solicitudes cross-origin

### 5. **Permissions Policy (Feature Policy)**
- **Ubicación**: `client/index.html` (meta tag)
- **Restricciones**:
  - ❌ Cámara deshabilitada
  - ❌ Micrófono deshabilitado
  - ❌ Ubicación deshabilitada
  - ❌ Acelerómetro deshabilitado
  - ❌ Giroscopio deshabilitado
  - ✅ Fullscreen permitido (solo en contexto seguro)

### 6. **Validación de Integridad (SRI)**
- **Aplicable a**: Recursos de terceros en producción
- **Próximos pasos**: Agregar hashes SRI a Google Fonts

### 7. **Protección contra XSS**
- `X-XSS-Protection: 1; mode=block` (navegadores antiguos)
- CSP como defensa principal
- Sanitización de entrada en formularios

### 8. **HTTPS Enforcement**
- Recomendación: Configurar redirección HTTP → HTTPS en servidor
- Manus proporciona certificados SSL automáticos

### 9. **Validación de Formularios**
- Validación HTML5 (`required`, `type="email"`)
- Validación JavaScript adicional en componentes React
- Sanitización de datos antes de envío

### 10. **Analytics Seguro (Umami)**
- Respeta `Do Not Track`
- No usa cookies de terceros
- Datos anónimos y GDPR compliant
- Configuración: `data-do-not-track="true"`

---

## Checklist de Seguridad para Producción

- [ ] **HTTPS habilitado** en dominio personalizado
- [ ] **Headers de seguridad** configurados en servidor
- [ ] **CORS configurado** correctamente
- [ ] **Validación de entrada** en todos los formularios
- [ ] **Sanitización de salida** en componentes React
- [ ] **Dependencias actualizadas** (`pnpm update`)
- [ ] **Auditoría de seguridad** (`npm audit`)
- [ ] **Certificados SSL** válidos y actualizados
- [ ] **Backups regulares** de datos
- [ ] **Monitoreo de seguridad** activo

---

## Configuración de Servidor (Manus)

### Headers de Seguridad Automáticos en Manus:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### CORS Configurado:
- Origen: Tu dominio personalizado
- Métodos: GET, POST, PUT, DELETE
- Headers: Content-Type, Authorization

---

## Vulnerabilidades Comunes Prevenidas

| Vulnerabilidad | Prevención | Estado |
|---|---|---|
| **XSS (Cross-Site Scripting)** | CSP + Sanitización React | ✅ Protegido |
| **Clickjacking** | X-Frame-Options: DENY | ✅ Protegido |
| **MIME Sniffing** | X-Content-Type-Options | ✅ Protegido |
| **CSRF** | SameSite cookies (Manus) | ✅ Protegido |
| **Inyección SQL** | N/A (frontend estático) | ✅ N/A |
| **Man-in-the-Middle** | HTTPS + HSTS | ✅ Protegido |
| **Información sensible** | No se almacena localmente | ✅ Seguro |

---

## Recomendaciones Adicionales

### 1. **Para Formularios de Contacto**
Si integras un servicio como Formspree o EmailJS:
- Usa HTTPS obligatorio
- Valida email en backend
- Implementa rate limiting
- Agrega CAPTCHA si es necesario

### 2. **Para Datos Sensibles**
- Nunca almacenes tokens en localStorage
- Usa sessionStorage para datos temporales
- Implementa CORS restrictivo

### 3. **Monitoreo Continuo**
- Usa herramientas como:
  - Mozilla Observatory (seguridad)
  - Google PageSpeed Insights (performance)
  - OWASP ZAP (testing)

### 4. **Actualizaciones Regulares**
```bash
# Auditoría de seguridad
pnpm audit

# Actualizar dependencias
pnpm update

# Verificar vulnerabilidades
pnpm audit --fix
```

---

## Contacto de Seguridad

Si encuentras una vulnerabilidad de seguridad:
1. **NO** la publiques públicamente
2. Contacta a: ciruelomayka@gmail.com
3. Proporciona detalles técnicos
4. Espera confirmación antes de divulgar

---

## Referencias

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Mozilla Observatory](https://observatory.mozilla.org/)
