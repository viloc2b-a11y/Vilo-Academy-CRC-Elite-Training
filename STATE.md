# STATE

> CURRENT VERIFIED STATE only. Desired behavior belongs in an approved feature `SPEC.md`.

## Baseline

- Last reconstructed: 2026-08-20
- Repository: `viloc2b-a11y/Vilo-Academy-CRC-Elite-Training`
- Verified base: `main` at `823a2fd6cd2e7f4490ca7441f1fbda307c8b1b2d`
- Evidence used: repository inspection, GitHub commit/deployment status, unauthenticated public smoke checks, and current official ACRP, SOCRA, HCCA, ICH, and TransCelerate sources
- Evidence limitation: dependencies are not installed locally. Unit tests, typecheck, lint, and a local production build were not executed because the repository is npm-managed and pnpm migration has not been approved.

## Capabilities

### SDD control plane
- State: IMPLEMENTED
- Last verified: 2026-08-20 via repository inspection
- Evidence: `PROJECT.md`, `AGENTS.md`, and this `STATE.md` exist on `main` and define canonical context, invariants, workflow, evidence rules, and current state; `.gitignore` covers the sensitive development and test env variants required before publication.
- Notes: No product code, dependency, runtime configuration, or database migration changed during baseline adoption. The only non-document change hardens secret-file exclusion.

### Public deployment
- State: IMPLEMENTED
- Last verified: 2026-08-20 via GitHub deployment status and public HTTP smoke check
- Evidence: commit `823a2fd6cd2e7f4490ca7441f1fbda307c8b1b2d` has two successful Vercel statuses; `https://academy.viloresearchgroup.com/en` returned HTTP 200 with the CRC Elite landing page and 17-module program copy.
- Notes: `/en/pricing`, `/en/dashboard`, and `/en/academy` redirect unauthenticated traffic to `/en/login` as implemented by middleware. `/en/curriculum`, `/en/faq`, and `/en/modulos` return HTTP 404. Authenticated end-to-end behavior was not tested.

### Bilingual curriculum engine
- State: PARTIAL
- Last verified: 2026-08-20 via source inspection and successful Vercel status
- Evidence: 17 module source files; 17 published registry entries; 174 lesson records declaring 2,790 minutes (46.5 hours); typed course metadata at schema `1.0.1` and course version `2026.04.24`; English and Spanish message catalogs each contain 158 leaf values.
- Notes: Static structure is present and the deployed build succeeds, but the 99 declared unit-test cases were not executed in this environment. No IATA, DOT, biospecimen, specimen-handling, or laboratory-shipping lesson content exists in `src/curriculum-engine`.

### Learner authentication and session routing
- State: PARTIAL
- Last verified: 2026-08-20 via source inspection and unauthenticated runtime smoke check
- Evidence: Supabase browser/server clients, login/register/reset flows, localized middleware protection, and login redirects exist; unauthenticated protected-route redirects were observed on the public deployment.
- Notes: Registration, session refresh, password recovery, authenticated navigation, and user isolation were not exercised with a test account.

### Progress, dashboard, and assessments
- State: PARTIAL
- Last verified: 2026-08-20 via source and test inventory inspection
- Evidence: progress and assessment route handlers, persistence helpers, dashboard/module components, module-progress and assessment-attempt migrations, and focused test files exist.
- Notes: No current runtime or executed-test evidence verifies persistence, scoring, duplicate handling, authorization, or the full learner flow. Current module and OSCE assessment scoring is learner-entered self-evaluation; criterion sliders initialize at full points and learner-selected fail flags drive the stored score.

### Operational artifacts and certification evidence
- State: PARTIAL
- Last verified: 2026-08-20 via source and migration inspection
- Evidence: 18 artifact templates, artifact submission validation/storage, certification-evidence manifest generation, UI workspace components, migration/RLS definitions, and focused tests exist.
- Notes: Submission, review, evidence-packet generation, and reviewer workflow were not verified against a live Supabase project.

### Certification and public verification
- State: PARTIAL
- Last verified: 2026-08-20 via source and migration inspection
- Evidence: four certification levels, eligibility and issuance helpers, public verification route/page, print-oriented certificate HTML, unique verification IDs, migration/RLS policies, and focused tests exist.
- Notes: Issuance, revocation/expiration, authorization, certificate rendering, and the no-PII public response contract were not exercised end to end. Runtime eligibility currently enforces only required-module completion and assessment pass state; it does not enforce declared artifact counts, dimension thresholds, capstone thresholds, critical-fail state, independent review, or digital attestation. The completion level has no required module list, so the current helper evaluates it eligible without enforcing its four-artifact or attestation requirements.

### Monetization and enrollment
- State: PARTIAL
- Last verified: 2026-08-20 via source inspection and public landing smoke check
- Evidence: three internal plan definitions (`$299`, `$599`, `$999`), pricing/enrollment UI and API, order persistence, pilot-cohort path, and monetization tests exist. The public landing page advertises a separate `$249` one-time offer.
- Notes: No payment-provider checkout or settlement integration was found. The public pricing route is protected by authentication, so the `$299`/`$599`/`$999` plans are not publicly inspectable before login. The relationship between the public `$249` offer and the three persisted plans is unresolved product drift, not an implementation fact to normalize silently.

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

## External Course Audit Reconciliation — 2026-08-20

The supplied external review is treated as audit input, not as canonical fact. Each load-bearing statement below was rechecked against `main`, the public deployment, and current official sources.

| Supplied finding | Classification | Verified reconciliation |
|---|---|---|
| Landing is available | CONFIRMED | `/` redirects to `/en`; `/en` returns HTTP 200 and renders the public program page. |
| `/pricing` is unavailable publicly | CONFIRMED, CAUSE CORRECTED | `/en/pricing` exists, but middleware classifies it as protected and redirects a guest to `/en/login?next=%2Fen%2Fpricing`; this is not evidence of a paywall crawler failure. |
| `/curriculum`, `/faq`, and `/modulos` could not be crawled | CONFIRMED, CAUSE CORRECTED | Locale middleware redirects them to `/en/*`, where all three return HTTP 404. No corresponding route files exist; there is no evidence that these routes are restricted or paywalled. |
| Only six curriculum labels are public | CONFIRMED | The landing exposes six broad labels rather than the 17 registered module titles, detailed durations, artifacts, retake policy, or certification rules. |
| Program is 60–80 hours and includes biospecimens/IATA | CONTRADICTED | The executable curriculum declares 2,790 minutes (46.5 hours). No IATA, DOT, biospecimen, specimen-handling, or lab-shipping lesson exists. IATA/DOT appear only in marketing/dashboard strings, database signature kinds, and an unmounted signature component. |
| ICH E6(R3) alignment | SUPPORTED INTERNALLY, NOT EXTERNALLY VALIDATED | The curriculum repeatedly anchors content to ICH E6(R3), whose final Step 4 guideline was adopted on 2025-01-06. No independent alignment audit or approval is evidenced. |
| TransCelerate-aligned claim | UNKNOWN / UNVERIFIED | TransCelerate describes its Minimum Criteria as part of a voluntary GCP-training mutual-recognition program. The repository and public-source search contain no evidence that this course is listed, accepted, or recognized by that program. Alignment wording must not imply recognition or endorsement. |
| “A certificate you can use” | AMBIGUOUS AND HIGH RISK | The site issues Vilo-defined course credentials. It does not state prominently that these are not ACRP CCRC® or SOCRA CCRP® credentials, and the runtime does not yet enforce all of its own declared evidence gates. |
| ACRP CCRC requires professional experience and an exam | CONFIRMED WITH NUANCE | ACRP currently states 3,000 verifiable work hours plus its standardized exam. A possible 1,500-hour waiver requires a qualifying education program with valid third-party accreditation and remains subject to ACRP discretion; no such accreditation is evidenced here. |
| SOCRA CCRP generally requires one year / 1,750 hours | INACCURATE GENERALIZATION | SOCRA Category 1 currently requires two years full-time or 3,500 part-time hours in the last five years. One year / 1,750 hours applies only to Categories 2 or 3 together with specified degree or academic-certificate conditions. |
| “HCC” from HCCA is a comparable CRC credential | OUT OF SCOPE AND MISLABELED | HCCA's credential is CHC (Certified in Healthcare Compliance), not “HCC.” It addresses healthcare-compliance practice rather than CRC certification and should not appear as a peer credential in the CRC positioning table. |
| OSCE capstone establishes credible competency | PARTIAL | Six OSCE stations and rubrics exist in source, but the current assessment is learner self-scored and certification issuance does not enforce the declared capstone, dimensions, artifacts, critical-fail, or attestation gates. |
| Instructor, testimonials, public FAQ, refund policy, and free sample are absent | CONFIRMED FOR THE PUBLIC IMPLEMENTATION | No public route or landing section provides those trust and purchase-decision elements. Any future bio, testimonial, outcome, or approval claim must use verified evidence; it must not be fabricated. |
| English is the default | IMPLEMENTED; PRODUCT DECISION OPEN | `defaultLocale` is `en` and `/` redirects to `/en`. This is not a code defect without an approved market/language strategy; switching the default requires a product decision and bilingual regression validation. |
| Display ACRP/SOCRA/TransCelerate seals if “aligned” | REJECTED WITHOUT EVIDENCE | No endorsement, accreditation, listing, trademark permission, or logo license is evidenced. No seal or approval language may be added until written authority is verified. |

Official-source anchors checked on 2026-08-20:

- [ACRP CCRC certification and eligibility](https://acrpnet.org/certification/crc-certification)
- [SOCRA CCRP candidate eligibility](https://www.socra.org/certification/ccrp-certification-exam/candidate-eligibility/)
- [HCCA CHC credential](https://www.hcca-info.org/certification/become-certified/chc)
- [TransCelerate Site Qualification and Training solutions](https://www.transceleratebiopharmainc.com/assets/site-qualification-and-training/)
- [ICH E6(R3) Step 4 final guideline](https://database.ich.org/sites/default/files/ICH_E6%28R3%29_Step4_FinalGuideline_2025_0106.pdf)

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
- Evidence: the public bilingual landing copy promises a `$249` one-time purchase, while the authenticated pricing implementation and database seeds define `$299`, `$599`, and `$999` tiers plus a pilot path. Guests clicking the public pricing/enrollment path are redirected to login before they can inspect those plans; no public refund/cancellation policy or purchase FAQ is implemented.
- Impact: price, entitlement, enrollment, and pre-purchase expectations are ambiguous.
- Next transition: DEEP with human gate — decide the canonical offer, public plan visibility, entitlement mapping, checkout behavior, and refund/cancellation policy before changing copy, auth protection, plans, or payment semantics.

### DRIFT-005 — Remaining module UX findings
- Type: Known implementation gap
- State: OPEN
- Evidence: UX audit tickets 4–6 remain pending: persistent module navigation, a table of contents for long modules, and stronger state-indicator contrast.
- Impact: learner orientation and accessibility degrade on long and mobile module views.
- Next transition: STANDARD after the critical route drift and validation-toolchain decision; create an approved feature spec with keyboard, mobile, bilingual, and contrast acceptance criteria.

### DRIFT-006 — Public curriculum scope and duration claims
- Type: Specification/implementation drift candidate
- State: BLOCKED
- Evidence: bilingual landing copy claims 60–80 hours, IATA logistics, specimen handling, and a “Biospecimens & IATA” curriculum item. The registered curriculum contains 174 lessons totaling 2,790 declared minutes (46.5 hours) and no IATA, DOT, biospecimen, specimen-handling, or laboratory-shipping lesson. The visible six-item curriculum summary does not map faithfully to the 17 registered module titles.
- Impact: prospective learners may purchase based on unsupported duration and scope claims; transport-training language can also be misconstrued as an IATA/DOT qualification.
- Next transition: Human product/compliance decision required — either remove/reframe unsupported claims to match the current course or approve a separately specified and independently validated IATA/biospecimen training expansion. Do not issue an IATA/DOT training certificate from the current curriculum.

### DRIFT-007 — Course certificate versus external professional credentials
- Type: Public-contract/compliance drift candidate
- State: BLOCKED
- Evidence: public copy says “A certificate you can use,” “Certificate included,” and “Aligned with TransCelerate minimum criteria”; internal product names include “Elite CRC Certificate” and “Lead CRC Site Operations Endorsement.” No prominent disclaimer distinguishes Vilo course credentials from ACRP CCRC® or SOCRA CCRP®, and no external accreditation, endorsement, mutual-recognition listing, or logo permission is evidenced.
- Impact: learners or employers may infer an external certification, experience waiver, sponsor recognition, or professional endorsement that the repository and public evidence do not support.
- Next transition: DEEP with human approval — define certificate semantics and naming, add an explicit non-equivalence/non-endorsement disclosure, document any standards mapping with evidence, and prohibit third-party seals or marks until written authorization is verified.

### DRIFT-008 — Certification eligibility and assessment independence
- Type: Architecture/invariant drift
- State: BLOCKED
- Evidence: `PROJECT.md` requires premium credentials to trace to progress, assessment results, artifacts, critical-fail state, and attestation. `AssessmentClient` initializes learner-controlled rubric scores at full points and submits learner-selected fail flags. `evaluateCertificationEligibility` checks only module completion and assessment pass booleans; it ignores artifact counts, competency dimensions, capstone thresholds, critical-fail state, pathway restrictions, and attestation. The completion level therefore evaluates eligible with zero required modules/assessments despite declaring four artifacts and an attestation. Its “latest attempt” map also stores only a boolean and compares an ISO timestamp to that boolean's string form, so a later failure can be ignored after an earlier pass.
- Impact: a learner can obtain a Vilo credential without the evidence gates advertised by the course model; a public verification ID proves database issuance, not independently verified competency.
- Next transition: DEEP with human approval — define the authoritative evaluator and assessment workflow, join all declared evidence gates into server-side eligibility, correct latest-attempt ordering, add negative and end-to-end issuance tests, and decide whether issuance must remain disabled until those controls pass.

### DRIFT-009 — Public trust and purchase information
- Type: Known product/content gap
- State: OPEN
- Evidence: no public instructor identity/credentials, verified learner outcomes/testimonials, detailed 17-module curriculum, retake policy, certificate-validity policy, refund/cancellation policy, FAQ route, or sample lesson is implemented. `/en/curriculum` and `/en/faq` return 404.
- Impact: buyers cannot independently assess instructor authority, exact deliverables, assessment rules, or purchase terms before creating an account.
- Next transition: STANDARD for evidence-backed public content after DRIFT-004/006/007 decisions. Never fabricate credentials, testimonials, employment outcomes, approvals, or accreditation.

## Next SDD Decision

The highest-risk next transition is no longer the local `/academy` redirect. `DRIFT-006`, `DRIFT-007`, and `DRIFT-008` affect public compliance claims and the certification contract, so they form a DEEP decision gate. Before implementation, the human owner must decide:

1. Whether to remove the unsupported IATA/biospecimen and 60–80-hour claims or fund a separately validated curriculum expansion.
2. The exact semantics and public name of every Vilo-issued certificate, including the non-equivalence disclosure for ACRP CCRC® and SOCRA CCRP®.
3. Whether credential issuance should be disabled until independent assessment and every declared evidence gate are enforced server-side.
4. The canonical price/plan model, public pricing visibility, and refund/cancellation terms.
5. Whether English or Spanish should be the default locale for the approved target market.

`DRIFT-003` remains a separate package-manager approval gate. No product implementation or local dependency-based validation may begin until the applicable DEEP spec/plan and the coordinated pnpm migration are explicitly approved.

## Course Audit Reconciliation Evidence

- Public HTTP smoke output — `/` 307 to `/en`; `/en` 200; `/en/pricing` 307 to login; localized `/curriculum`, `/faq`, and `/modulos` final status 404; `/en/academy` 307 to login.
- Curriculum duration inventory — `rg -n "durationMinutes:" src/curriculum-engine/data/modules` found 174 records summing to 2,790 minutes (46.5 hours).
- Curriculum scope search — no IATA, DOT, biospecimen, specimen-handling, or shipping lesson match under `src/curriculum-engine`; matches are limited to marketing/dashboard copy, signature/data scaffolding, and unrelated words containing the same letter sequence.
- Certification source inspection — learner-controlled self-evaluation is submitted by `AssessmentClient`; server eligibility omits declared artifact, dimension, capstone, critical-fail, pathway, and attestation gates; focused certification tests assert metadata but do not exercise database-backed eligibility or issuance.
- External credential verification — official ACRP, SOCRA, HCCA, TransCelerate, and ICH sources linked above were checked against the supplied audit claims.
- GitHub deployment status — both Vercel contexts report success for `823a2fd6cd2e7f4490ca7441f1fbda307c8b1b2d`.
- Product validation suite — NOT RUN; the npm-to-pnpm migration remains unapproved and `node_modules` is absent.

## Baseline Adoption Evidence

- `git diff --cached --check` — PASS (exit 0).
- Required-file check for `PROJECT.md`, `AGENTS.md`, and `STATE.md` — PASS; every file is non-empty and contains its canonical top-level section.
- Scope check — PASS; staged paths are limited to the three SDD control-plane documents plus the required `.gitignore` hardening.
- Secret-file exclusion check — PASS; `.env`, `.env.local`, `.env.development`, `.env.production`, and `.env.test` resolve to ignore rules while `.env.local.example` remains trackable.
- Changed-content secret-pattern scan — PASS; no private-key, provider-secret, or JWT-like credential pattern was detected.
- Product validation suite — NOT RUN for this documentation/security-baseline iteration; see the package-manager blocker under Automated validation.
