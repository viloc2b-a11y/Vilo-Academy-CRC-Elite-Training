# PROJECT

> Canonical project context and invariants. This file describes what remains stable across features; it does not describe desired feature scope or claim implementation status.

## Purpose

Vilo Academy — CRC Elite Training is a bilingual, competency-based learning application for clinical research coordinators. It combines practical CRC curriculum, operational exercises, assessments, evidence artifacts, progress tracking, and verifiable certification.

The product is intended to help new, operational, and lead CRCs protect participants, preserve data integrity, escalate risk early, and support decisions with audit-defensible evidence.

## Verified Architecture

- A single Next.js 14 App Router application serves localized English and Spanish routes under `src/app/[locale]`.
- Learner-facing curriculum is a typed, source-controlled TypeScript dataset under `src/curriculum-engine`.
- Server route handlers under `src/app/api` implement progress, assessment, certification, artifact, signature, monetization, and n8n webhook operations.
- Supabase supplies authentication and persistence. Browser, server-session, and service-role clients are separated under `src/lib/supabase`.
- SQL migrations under `supabase/migrations` define the persisted model, row-level security, policies, functions, and seed data.
- Vercel is the declared deployment target; the public application is served at `academy.viloresearchgroup.com`.

## Stack

- Language: TypeScript
- Web runtime: Next.js 14 and React 18
- Localization: next-intl with `en` and `es`
- UI: Tailwind CSS and lucide-react
- Data and authentication: Supabase PostgreSQL/Auth
- Tests: Vitest
- Deployment: Vercel, with Cloudflare DNS documented for the custom domain

## Product Invariants

- Learner-facing product content remains bilingual in English and Spanish.
- Module IDs and registered slugs are stable identifiers; UI state and deep links must not depend on array indexes.
- The registered curriculum contains the pre-capstone sequence plus M16 OSCE and M17 crisis integration.
- Assessment and certification outcomes remain evidence-based. A premium credential must trace to required progress, assessment results, artifacts, critical-fail state, and attestation as applicable.
- Operational and compliance content must not invent facts or represent an unsupported action, approval, or compliance conclusion as verified.
- Public credential verification must not expose learner PII.
- Breaking changes to shared curriculum TypeScript shapes or required fields require a `schemaVersion` change. Content-only releases require a `courseVersion` change.
- Pre-capstone aggregate weights must remain exactly normalized as documented in `src/curriculum-engine/implementation-notes.ts`.

## Data and Security Invariants

- Authorization is enforced server-side and in Supabase row-level security; client UI state is never an authorization boundary.
- `SUPABASE_SERVICE_ROLE_KEY` and `N8N_WEBHOOK_SECRET` are server-only secrets.
- The Supabase service-role client must never be imported into a client component or browser bundle.
- `.env`, `.env.local`, `.env.production`, and `.env.development` must remain outside Git. Example files contain placeholders only.
- Webhook signatures are verified against the raw request body before trusted automation writes occur.
- Database changes are append-only migrations. Do not rewrite an applied migration without an explicit recovery decision.

## Delivery Constraints

- `main` is the default branch. Work must be proposed from a feature branch and validated before merge.
- The repository currently contains `package-lock.json`, npm commands in `README.md` and `vercel.json`, and an `npx` Husky hook. This is verified current state, not an approved operating rule.
- Agent-driven package operations use pnpm only. Migrating the repository lockfile, deployment commands, or hook commands requires explicit human approval and coordinated validation; never perform that migration silently.
- No dependency may be added without explicit human approval after documenting its exact purpose and why existing code or platform APIs are insufficient.

## Change Authority

Stop and obtain human approval before changing product scope, architecture, a public API or shared data contract, authentication, payments, certification semantics, compliance claims, package-manager state, or any invariant in this file.
