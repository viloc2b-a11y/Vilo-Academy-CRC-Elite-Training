# Vilo Academy — CRC Elite Training

Bilingual (English / Spanish) competency-based **Clinical Research Coordinator (CRC)** training platform with verifiable credentials. Content is structured for **audit-defensible** learning outcomes, rubrics, and capstone (OSCE) alignment.

**Repository:** [github.com/viloc2b-a11y/Vilo-Academy-CRC-Elite-Training](https://github.com/viloc2b-a11y/Vilo-Academy-CRC-Elite-Training)

---

## Product — End-to-End Flow

```
Module → Progress → Assessment → Score → Certification → Payment
```

| Step | Route | What happens |
|------|-------|-------------|
| **Learn** | `/academy/module/[id]` | 17 bilingual modules with objectives, lessons, guided practice, exercises |
| **Track** | `/dashboard` | Real-time progress per module, completion percentage, next recommended |
| **Evaluate** | `/academy/module/[id]/assessment` | Self-evaluation via rubric sliders, scoring engine computes pass/fail |
| **Credential** | `/academy/certifications` | 4 certification levels, eligibility engine, issue with verification ID |
| **Verify** | `/certification/verify/[id]` | Public credential lookup — no auth required, no PII exposed |
| **Enroll** | `/pricing` | 3 plan tiers ($299/$599/$999) or free pilot cohort |

## Stack

- **Next.js 14** (App Router)
- **TypeScript** — curriculum as typed modules (`Module`, `BilingualText`, rubrics, exercises)
- **next-intl** — UI and metadata localization (EN/ES, 133 keys each)
- **Tailwind CSS** — navy/emerald design system
- **Supabase** — auth, profiles, module_progress, assessment_attempts, certifications, orders
- **Vitest** — 95 tests across 11 test suites

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en` or `http://localhost:3000/es`.

> **Note:** Supabase features (auth, progress persistence, assessments, certifications, orders) require a `.env.local` file with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Everything falls back to read-only/demo mode when Supabase is not configured.

## Curriculum

### 17 modules (M1–M17)

| # | Module | Category |
|---|--------|----------|
| M1 | Ethics, Human Subjects Protection & HIPAA | Foundations |
| M2 | Protocol Mastery & Risk Analysis | Foundations |
| M3 | ICH-GCP E6(R3), Roles, Oversight & Quality | Foundations |
| M4 | Master Control Logs & Traceability | Operations |
| M5 | Feasibility, Budgeting & Site Viability | Operations |
| M6 | Informed Consent, Ethics & Documentation | Foundations |
| M7 | Recruitment, Retention & Diversity | Operations |
| M8 | Screening, Study Visits, Windows & Randomization | Operations |
| M9 | Investigational Product, Pharmacy & Cold Chain | Operations |
| M10 | Adverse Events, Safety Reporting & AE/SAE Timelines | Quality |
| M11 | Source Documentation & ALCOA Audit-Proof Records | Quality |
| M12 | EDC, Tech Stack, Queries & Data Integrity | Quality |
| M13 | Monitoring Visits & Real-Time Defense | Operations |
| M14 | Site Budgeting, Contract Negotiation & Revenue Protection | Operations |
| M15 | Patient Recruitment & Retention: FDA Diversity Action Plan | Operations |
| M16 | Mock Study Capstone OSCE (6 stations) | Capstone |
| M17 | Crisis Integration & Cross-Station Command | Capstone |

Each module includes: SMART objective, L1/L2/L3 outcomes, 8+ structured lessons, guided practice (3–5 scenarios), practical exercises with deliverables, error library, and a 100-point assessment rubric.

### Capstone / OSCE (M16)

6 stations with real-world scenarios, seeded defects, mock inputs, and rubrics:

| Station | Focus | Passing |
|---------|-------|--------|
| OSCE.S1 | Eligibility & screening traceability | 82% |
| OSCE.S2 | Consent execution & visit documentation | 80% |
| OSCE.S3 | AE / SAE gray-zone escalation | 80% |
| OSCE.S4 | Logs, PD & monitoring readiness | 82% |
| OSCE.S5 | Source documentation & ALCOA repair | 78% |
| OSCE.S6 | Feasibility, resources & sponsor-pressure commitment | 78% |

### Competency Model

**4 dimensions:** Regulatory (R), Operational (O), Clinical (C), Quality/Data (Q)
**3 levels:** Understand (L1), Execute (L2), Detect errors / Exercise judgment (L3)

### Certification Levels

| Level | Requirements | Verification |
|-------|-------------|-------------|
| Completion Certificate | All lessons viewed, digital attestation | VACRC-YYYY-XXXXXX |
| Operational Readiness | 8 modules completed, 8 artifacts | VACRC-YYYY-XXXXXX |
| Elite CRC | 14 modules, capstone ≥0.78, no fail flags | VACRC-YYYY-XXXXXX |
| Lead CRC Endorsement | 6 advanced modules, capstone ≥0.82, 18 artifacts | VACRC-YYYY-XXXXXX |

## Project layout

```
src/
├── app/
│   ├── [locale]/                    # Localized routes (en/es)
│   │   ├── academy/
│   │   │   ├── certifications/      # Certification center
│   │   │   └── module/[id]/         # Module viewer + assessment
│   │   ├── certification/verify/    # Public credential verification
│   │   ├── dashboard/               # Student dashboard
│   │   ├── login/                   # Auth
│   │   ├── pricing/                 # Plan tiers + enrollment
│   │   └── page.tsx                 # Landing page
│   ├── api/                         # API routes (9 endpoints)
│   └── layout.tsx
├── components/
│   ├── academy/                     # Module viewer (7 components)
│   ├── auth/                        # Login form
│   ├── certifications/              # Certification center + verification
│   ├── dashboard/                   # Student dashboard
│   ├── layout/                      # AppShell, LocaleSwitcher
│   ├── marketing/                   # Landing page
│   ├── monetization/                # Pricing page
│   └── signature/                   # Digital signature panel
├── curriculum-engine/               # Types, course registry, 17 modules, capstone, scoring
│   ├── data/
│   │   ├── modules/                 # M1–M17 module data (~9,800 lines)
│   │   ├── capstone.ts              # 6 OSCE stations
│   │   ├── course.ts                # Registry + metadata
│   │   ├── premium.ts               # VILO OS premium layer
│   │   ├── scorecard.ts             # Certification rules
│   │   └── artifactTemplates.ts     # Operational artifact templates
│   ├── types/                       # All curriculum types
│   └── utils/scoring.ts             # Rubric evaluation + certification math
├── lib/
│   ├── assessments/                 # Assessment submission + scoring
│   ├── certifications/              # Eligibility engine + credential runtime
│   ├── monetization/                # Pricing plans + enrollment
│   ├── progress/                    # Module progress helpers
│   └── supabase/                    # Server/browser/service clients
└── i18n/routing.ts                  # next-intl routing config

supabase/migrations/                  # 7 migration files
tests/                                # 95 tests (11 test files)
messages/                             # 133 EN + 133 ES i18n keys
```

## Routes

### App routes

| Path | Type | Description |
|------|------|-------------|
| `/` | SSG | Landing page |
| `/dashboard` | SSG | Student dashboard with real progress data |
| `/pricing` | SSG | 3 plan tiers + pilot cohort registration |
| `/academy/module/[id]` | Dynamic | Module viewer with progress bar |
| `/academy/module/[id]/assessment` | Dynamic | Assessment wizard (4 steps) |
| `/academy/certifications` | SSG | Certification center with eligibility engine |
| `/certification/verify/[id]` | Dynamic | Public credential verification |
| `/login` | SSG | Login / sign-up |

### API routes

| Endpoint | Methods | Auth | Description |
|----------|---------|------|-------------|
| `/api/progress` | GET, POST | Required | Module progress CRUD |
| `/api/assessments` | GET, POST | Required | Assessment submission + scoring |
| `/api/certifications` | GET, POST | Mixed | Issue + verify certifications |
| `/api/certifications/pdf` | GET | Optional | HTML certificate (print-to-PDF) |
| `/api/monetization` | GET, POST | Mixed | Pricing plans + enrollment |
| `/api/artifact-submissions` | GET, POST | Required | VILO OS artifact workspace |
| `/api/certification-evidence` | GET | Required | Evidence manifest |
| `/api/signature` | POST | Required | Digital attestation |
| `/api/webhooks/n8n` | POST | HMAC | n8n automation webhook |

## Quality checks

```bash
npm run typecheck    # TypeScript type checking (noEmit)
npm run lint         # ESLint
npm test             # Vitest — 95 tests
npm run build        # Production build (28 pages)
```

## Database (Supabase)

7 migrations in `supabase/migrations/`:

| Migration | Purpose |
|-----------|---------|
| `20260420000000` | Initial schema: profiles, modules, progress, signatures, audit |
| `20260420000001` | VILO core alignment: column renames, training progress, seeds |
| `20260420000002` | Artifact submissions for VILO OS workspace |
| `20260423000000` | Module progress for learner tracking |
| `20260423000001` | Assessment attempts with rubric scoring |
| `20260423000002` | Certifications with public verification IDs |
| `20260423000003` | Monetization: pricing plans + orders |

## Compliance mapping (audit-grade)

- **[ICH E6(R3) & data integrity integration](docs/compliance/ICH-E6R3-Data-Integrity-Integration.md)** — E6(R3) checklist tied to modules, ALCOA+ execution framework, 483-oriented patterns, and public FDA/ICH links for sponsor reviews.

## Contributing

1. Fork the repo or create a branch from `main`.
2. Run `npm run typecheck` and `npm run lint`.
3. Open a **pull request** with a short description of curriculum vs. code changes.

For breaking changes to shared TypeScript shapes, bump `schemaVersion` in course metadata per `src/curriculum-engine/implementation-notes.ts`.

## License

Private — Vilo Research Group. All rights reserved.
