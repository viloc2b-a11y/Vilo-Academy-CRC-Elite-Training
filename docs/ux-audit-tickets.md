# Vilo Academy — UX Audit Tickets

> Generated 2026-07-07 | Deploy: `07420c6`

## Status Legend
- ✅ Fixed & deployed
- 🔧 In progress
- 🔲 Pending

---

## TICKET 1 — [Crítico] Ruta `/academy` no tiene página (pantalla en blanco)

**Ruta**: `/en/academy` | **Estado**: ✅ Fixed

No existe `page.tsx` en `src/app/[locale]/academy/`. Next.js renderiza un fallback vacío dentro del AppShell. La navbar ya no apunta a esta ruta (cambiada a `/modules`), pero si alguien accede directamente, ve blanco.

**Fix**: Creada página `/academy` que redirige a `/modules`.

---

## TICKET 2 — [Crítico] Certifications: error inconsistente (404 vs "Failed to load")

**Ruta**: `/en/academy/certifications` | **Estado**: ✅ Fixed

`CertificationCenter` no chequeaba `response.ok` — trataba respuestas 401/500 como datos válidos y crasheaba en `data.allLevels`. Ahora valida `r.ok` y `d.error` antes de renderizar. Muestra "Back to dashboard" cuando no está autenticado.

---

## TICKET 3 — [Alto] Header no determinista (doble nav, elementos que desaparecen)

**Rutas**: `/en/dashboard`, `/en/academy/module/*` | **Estado**: ✅ Fixed

`AppShell` envolvía todo con header de marketing. `StudentDashboard` tenía su propio header interno. Resultado: dos headers en dashboard, cero headers internos en módulos.

**Fix**: AppShell ahora detecta rutas "app" vs "marketing" vía header `x-pathname` inyectado por el middleware. Muestra nav compacta única en páginas app, nav marketing en landing/pricing. El header interno de StudentDashboard fue eliminado.

---

## TICKET 4 — [Alto] Pérdida de navegación dentro del módulo

**Rutas**: `/en/academy/module/M1`, `M2`, etc. | **Estado**: 🔲 Pendiente

El breadcrumb "Dashboard / M1" es el único elemento de navegación dentro de un módulo. En móvil o en scroll largo, el usuario pierde orientación.

**Recomendación**: Agregar sticky top bar con: botón volver, nombre del módulo, indicador de progreso, y enlace a siguiente/anterior.

---

## TICKET 5 — [Medio] Sin tabla de contenido en páginas largas de módulo

**Rutas**: `/en/academy/module/*` | **Estado**: 🔲 Pendiente

Cada módulo tiene 7+ secciones (lecturas, casos, rúbrica, ejercicios) en una sola página sin índice ni anclas.

**Recomendación**: Sidebar o toc flotante con enlaces de salto a cada sección.

---

## TICKET 6 — [Medio] Indicadores de estado con bajo contraste

**Rutas**: Dashboard, módulos | **Estado**: 🔲 Pendiente

"PREVIEW MODE", "NOT STARTED", "Read-only view", porcentajes R/O/Q/C usan texto gris claro indistinguible del texto decorativo.

**Recomendación**: Subir contraste y peso tipográfico (ej. `text-amber-700 font-semibold` en vez de `text-slate-400`).

---

## TICKET 7 — [Bajo] Nombres inconsistentes: "Certificates" vs "Certifications"

**Rutas**: Nav marketing vs nav app | **Estado**: ✅ Fixed

Unificado a "Certifications" / "Certificaciones" en ambos headers y en archivos i18n.
