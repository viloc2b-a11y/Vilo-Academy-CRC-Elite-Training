# STATE

> CURRENT VERIFIED STATE only. Desired behavior belongs in an approved feature `SPEC.md`.

## Baseline

- Last reconstructed: 2026-08-20
- Repository: `viloc2b-a11y/Vilo-Academy-CRC-Elite-Training`
- Verified base: `main` at `d0f27b8fd3d82733a2300613550f366938376363`
- Evidence used: repository inspection, GitHub commit/deployment status, and unauthenticated public smoke checks
- Evidence limitation: dependencies are not installed locally. Unit tests, typecheck, lint, and a local production build were not executed because the repository is npm-managed and pnpm migration has not been approved.

## Capabilities

### SDD control plane
- State: IMPLEMENTED
- Last verified: 2026-08-20 via repository inspection
- Evidence: `PROJECT.md`, `AGENTS.md`, and this `STATE.md` exist on the SDD baseline branch and define canonical context, invariants, workflow, evidence rules, and current state; `.gitignore` now covers the sensitive development and test env variants required before publication.
- Notes: No product code, dependency, runtime configuration, or database migration changed during baseline adoption. The only non-document change hardens secret-file exclusion.

### Public deployment
- State: IMPLEMENTED
- Last verified: 2026-08-20 via GitHub deployment status and public HTTP smoke check
- Evidence: commit `d0f27b8fd3d82733a2300613550f366938376363` has two successful Vercel statuses; `https://academy.viloresearchgroup.com/en` returned the CRC Elite landing page with 17-module program content.
- Notes: Protected `/en/pricing` and `/en/dashboard` requests redirected unauthenticated traffic to `/en/login` as implemented by middleware. Authenticated end-to-end behavior was not tested.

### Bilingual curriculum engine
- State: PARTIAL
- Last verified: 2026-08-20 via source inspection and successful Vercel status
- Evidence: 17 module source files; 17 published registry entries; typed course metadata at schema `1.0.1` and course version `2026.04.24`; English and Spanish message catalogs each contain 158 leaf values.
- Notes: Static structure is present and the deployed build succeeds, but the 99 declared unit-test cases were not executed in this environment.

### Learner authentication and session routing
- State: PARTIAL
- Last verified: 2026-08-20 via source inspection and unauthenticated runtime smoke check
- Evidence: Supabase browser/server clients, login/register/reset flows, localized middleware protection, and login redirects exist; unauthenticated protected-route redirects were observed on the public deployment.
- Notes: Registration, session refresh, password recovery, authenticated navigation, and user isolation were not exercised with a test account.

### Progress, dashboard, and assessments
- State: PARTIAL
- Last verified: 2026-08-20 via source and test inventory inspection
- Evidence: progress and assessment route handlers, persistence helpers, dashboard/module components, module-progress and assessment-attempt migrations, and focused test files exist.
- Notes: No current runtime or executed-test evidence verifies persistence, scoring, duplicate handling, authorization, or the full learner flow.

### Operational artifacts and certification evidence
- State: PARTIAL
- Last verified: 2026-08-20 via source and migration inspection
- Evidence: 18 artifact templates, artifact submission validation/storage, certification-evidence manifest generation, UI workspace components, migration/RLS definitions, and focused tests exist.
- Notes: Submission, review, evidence-packet generation, and reviewer workflow were not verified against a live Supabase project.

### Certification and public verification
- State: PARTIAL
- Last verified: 2026-08-20 via source and migration inspection
- Evidence: four certification levels, eligibility and issuance helpers, public verification route/page, print-oriented certificate HTML, unique verification IDs, migration/RLS policies, and focused tests exist.
- Notes: Issuance, revocation/expiration, authorization, certificate rendering, and the no-PII public response contract were not exercised end to end.

### Monetization and enrollment
- State: PARTIAL
- Last verified: 2026-08-20 via source inspection and public landing smoke check
- Evidence: three internal plan definitions (`$299`, `$599`, `$999`), pricing/enrollment UI and API, order persistence, pilot-cohort path, and monetization tests exist. The public landing page advertises a separate `$249` one-time offer.
- Notes: No payment-provider checkout or settlement integration was found. The relationship between the public `$249` offer and the three persisted plans is unresolved product drift, not an implementation fact to normalize silently.

### Supabase persistence and authorization model
- State: PARTIAL
- Last verified: 2026-08-20 via migration and server-code inspection
- Evidence: 8 SQL migrations define learner, module, progress, assessment, artifact, certification, order, audit, signature, retention, and n8n-event structures; relevant tables enable RLS and declare ownership/public-read policies.
- Notes: Migration application state, production schema parity, policy behavior, and service-role automation were not verified against the deployed database.

### Security controls and secret hygiene
- State: PARTIAL
- Last verified: 2026-08-20 via repository scan
- Evidence: tracked env content is limited to `.env.local.example`; example values are placeholders; sensitive `.env*` files are ignored; service-role access is isolated in a server module; n8n uses HMAC with timing-safe comparison; no private-key or provider-secret pattern was found in tracked application content.
- Notes: Rate limiting is process-local memory and is not a distributed production control. No dynamic security, dependency, RLS, or authenticated authorization test was executed.

### Automated validation
- State: BLOCKED
- Last verified: 2026-08-20 via package/config inspection
- Evidence: the repository declares 99 test cases across 12 test files plus typecheck, lint, and build scripts; Vercel reports successful builds for the base commit. Local `node_modules` is absent.
- Notes: `package-lock.json`, npm commands in `README.md`/`vercel.json`, and `npx lint-staged` in `.husky/pre-commit` conflict with the mandatory pnpm-only policy. A coordinated package-manager migration requires explicit human approval before dependency installation or local suite execution.

## Drift Register

### DRIFT-001 — `/academy` route status
- Type: State drift
- State: OPEN
- Evidence: `docs/ux-audit-tickets.md` marks the critical blank `/academy` route fixed by a redirect page, but no `src/app/[locale]/academy/page.tsx` or equivalent redirect exists in the verified tree; middleware only applies auth/localization redirects.
- Impact: An authenticated request to the root academy route has no verified application destination.
- Next transition: LITE — add the intended localized redirect using existing Next.js APIs, validate routing/build, and correct the stale ticket evidence.

### DRIFT-002 — Quality-count documentation
- Type: State drift
- State: OPEN
- Evidence: `README.md` states 95 tests in 11 files, 7 migrations, and 133 localization keys; repository inventory contains 99 test cases in 12 files, 8 migrations, and 158 leaf values in each locale catalog.
- Impact: Onboarding and release evidence are inaccurate.
- Next transition: LITE — update verified counts only after the validation toolchain is reproducible.

### DRIFT-003 — Package-manager policy
- Type: Architecture/process drift
- State: BLOCKED
- Evidence: current repository artifacts use npm and npx while the approved agent safety policy requires pnpm only.
- Impact: local reproducible validation cannot proceed under the approved rules.
- Next transition: STANDARD with human gate — approve and plan a coordinated pnpm lockfile, scripts, Vercel, Husky, README, and clean-install validation migration.

### DRIFT-004 — Offer and enrollment model
- Type: Specification drift candidate
- State: BLOCKED
- Evidence: the public bilingual landing copy promises a `$249` one-time purchase, while the authenticated pricing implementation and database seeds define `$299`, `$599`, and `$999` tiers plus a pilot path.
- Impact: price, entitlement, and enrollment expectations are ambiguous.
- Next transition: Human product decision required before changing copy, plans, checkout, or entitlements.

### DRIFT-005 — Remaining module UX findings
- Type: Known implementation gap
- State: OPEN
- Evidence: UX audit tickets 4–6 remain pending: persistent module navigation, a table of contents for long modules, and stronger state-indicator contrast.
- Impact: learner orientation and accessibility degrade on long and mobile module views.
- Next transition: STANDARD after the critical route drift and validation-toolchain decision; create an approved feature spec with keyboard, mobile, bilingual, and contrast acceptance criteria.

## Next SDD Decision

The smallest product transition is `DRIFT-001` (LITE), but reliable local validation remains constrained by `DRIFT-003`. Stop before implementation until the SDD baseline is reviewed and the package-manager gate is resolved or an explicitly approved alternative evidence path is selected.

## Baseline Adoption Evidence

- `git diff --cached --check` — PASS (exit 0).
- Required-file check for `PROJECT.md`, `AGENTS.md`, and `STATE.md` — PASS; every file is non-empty and contains its canonical top-level section.
- Scope check — PASS; staged paths are limited to the three SDD control-plane documents plus the required `.gitignore` hardening.
- Secret-file exclusion check — PASS; `.env`, `.env.local`, `.env.development`, `.env.production`, and `.env.test` resolve to ignore rules while `.env.local.example` remains trackable.
- Changed-content secret-pattern scan — PASS; no private-key, provider-secret, or JWT-like credential pattern was detected.
- Product validation suite — NOT RUN for this documentation/security-baseline iteration; see the package-manager blocker under Automated validation.
