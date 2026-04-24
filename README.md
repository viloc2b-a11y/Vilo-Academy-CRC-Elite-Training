# Vilo Academy — CRC Elite Training

Bilingual (English / Spanish) curriculum engine and demo UI for a competency-based **Clinical Research Coordinator (CRC)** training program. Content is structured for **audit-defensible** learning outcomes, rubrics, and capstone (OSCE) alignment.

**Repository:** [github.com/viloc2b-a11y/Vilo-Academy-CRC-Elite-Training](https://github.com/viloc2b-a11y/Vilo-Academy-CRC-Elite-Training)

## Stack

- **Next.js** (App Router)
- **TypeScript** — curriculum as typed modules (`Module`, `BilingualText`, rubrics, exercises)
- **next-intl** — UI and metadata localization
- **Tailwind CSS**

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en` or `http://localhost:3000/es`.

## Curriculum (high level)

- **Pre-capstone modules** (M1–M15): ethics, GCP, logs, feasibility, consent, recruitment, visits, IP, safety, source/EDC, monitoring, budget, and related operations.
- **Capstone**: M16 (OSCE stations) and **M17** (crisis / cross-station integration under inspection pressure).
- **Source of truth in code**: `src/curriculum-engine/data/modules/*.ts`, registry in `src/curriculum-engine/data/course.ts`, capstone in `src/curriculum-engine/data/capstone.ts`, scorecard in `src/curriculum-engine/data/scorecard.ts`.

## Project layout

| Path | Purpose |
|------|---------|
| `src/curriculum-engine/` | Types, course registry, modules, capstone, scorecard |
| `src/app/[locale]/` | Localized routes and layouts |
| `messages/en.json`, `messages/es.json` | UI strings |
| `docs/compliance/` | Sponsor/FDA-citable compliance mapping (see below) |

## Quality checks

- **Typecheck** (recommended before PR):

```bash
npm run typecheck
```

- **Lint**:

```bash
npm run lint
```

- **Production build**:

```bash
npm run build
```

- **Tests**: This repository does not yet ship an automated test suite. `npm test` exits with a deliberate message until a runner is added (see `package.json`).

## Compliance mapping (audit-grade)

- **[ICH E6(R3) & data integrity integration](docs/compliance/ICH-E6R3-Data-Integrity-Integration.md)** — E6(R3) checklist tied to modules, ALCOA+ execution framework, 483-oriented patterns, and public FDA/ICH links for sponsor reviews.

Module-level bibliographic references are embedded in each module’s `## REFERENCES` lesson block where applicable (e.g. M17 crisis command).

## Contributing via GitHub

1. Fork the repo or create a branch from `main`.
2. Run `npm run typecheck` and `npm run lint`.
3. Open a **pull request** with a short description of curriculum vs. code changes.

For breaking changes to shared TypeScript shapes, bump `schemaVersion` in course metadata per `src/curriculum-engine/implementation-notes.ts`.
