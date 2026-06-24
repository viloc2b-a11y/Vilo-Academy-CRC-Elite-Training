# Vilo Academy — Deploy Checklist (Vercel + Cloudflare)
# academy.viloresearchgroup.com

## Fase 1 — Preparar el repo

- [✅] vercel.json creado (framework nextjs, build npm run build)
- [✅] .gitignore actualizado (incluye .vercel)
- [✅] Todo commiteado y pusheado a GitHub

## Fase 2 — Vercel (desde el browser, ~10 min)

1. Andá a https://vercel.com
2. Sign up con GitHub (o logueate)
3. "Add New → Project"
4. Importá: `viloc2b-a11y/Vilo-Academy-CRC-Elite-Training`
5. Framework: Next.js (detecta automático)
6. Build: `npm run build`
7. Environment Variables (3):

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://[tu-proyecto].supabase.co` |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `[anon-key]` |
   | `SUPABASE_SERVICE_ROLE_KEY` | `[service-role-key]` |

8. Deploy → primer deploy exitoso ✅
9. Te da una URL tipo: `vilo-academy-crc-elite-training.vercel.app`
10. Probala: `/en`, `/es/pricing`, `/en/academy/module/M4`

## Fase 3 — Cloudflare DNS (~5 min)

1. Andá a Cloudflare Dashboard → tu dominio
2. DNS → Add Record:

   | Type | Name | Content |
   |------|------|---------|
   | CNAME | `academy` | `cname.vercel-dns.com` |

   Proxy status: **DNS Only** (gris) primero. Después de verificar, podés cambiarlo a Proxied (naranja).

## Fase 4 — Conectar dominio en Vercel (~5 min)

1. Vercel Dashboard → tu proyecto → Settings → Domains
2. Add: `academy.viloresearchgroup.com`
3. Vercel verifica el CNAME automáticamente ✅
4. SSL se genera solo (certificado automático)

## Fase 5 — Supabase Auth config (~2 min)

1. Supabase Dashboard → Authentication → URL Configuration
2. Site URL: `https://academy.viloresearchgroup.com`
3. Redirect URLs:
   ```
   https://academy.viloresearchgroup.com/**
   https://vilo-academy-crc-elite-training.vercel.app/**
   ```

## Fase 6 — Verificación

```
✓ https://academy.viloresearchgroup.com/en          → Landing page
✓ https://academy.viloresearchgroup.com/en/pricing   → Pricing plans
✓ https://academy.viloresearchgroup.com/en/academy/module/M4  → Module viewer
✓ https://academy.viloresearchgroup.com/en/login     → Auth
```

## Troubleshooting

| Problema | Causa | Fix |
|----------|-------|-----|
| Build fails | Missing env vars | Verificar que las 3 variables estén en Vercel Dashboard |
| Blank page on custom domain | DNS propagation | Esperar 5-10 min. Probar con vercel.app primero |
| Auth redirect loop | Wrong Site URL en Supabase | Verificar URL configuration en Supabase Auth |
| 404 en rutas | next.config mal | Verificar next.config.mjs |
