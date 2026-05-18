# CRC Elite Operating Academy

This program is designed as a VILO OS module, not a standalone course. Its purpose is to train clinical research coordinators to operate a site with evidence, judgment, and inspection readiness.

## Product Position

**Promise:** train CRCs to protect participants, preserve data integrity, escalate early, and defend decisions with audit-ready evidence.

**Primary users:**

- New CRC
- Operational CRC
- Lead CRC / site operations

**Core simulation:** `VILO-ONC-301`, an oncology Phase III site-operations mock study with longitudinal artifacts, subject threads, sponsor pressure, IP accountability, EDC/source tension, and inspection-day escalation.

## Premium Learning Model

1. Learn: concise bilingual lessons tied to site work.
2. Practice: document-based exercises using realistic artifacts.
3. Perform: timed OSCE and crisis command scenarios.
4. Prove: scored evidence package, digital attestation, and certification tier.

## Role Pathways

### New CRC Readiness

Focus: safe execution under supervision.

Operational gates:

- Stop work when consent, eligibility, delegation, or participant protection is at risk.
- Reconcile a visit packet across source, EDC, AE/deviation logs, and visit windows.

### Operational CRC Excellence

Focus: subject command and monitor readiness.

Operational gates:

- Build a defensible subject timeline.
- Prepare a monitor-facing fact sheet with corrected, pending, blocked, and escalated items.

### Lead CRC / Site Operations

Focus: site-level risk, sponsor pressure, CAPA, and inspection defense.

Operational gates:

- Recommend accept/defer/renegotiate using patient funnel, staffing, budget, and GCP risk evidence.
- Lead inspection-day crisis response with priority order, owner map, sponsor escalation, and integrity-shortcut refusal.

## Certification Levels

- Completion Certificate
- Operational Readiness Certificate
- Elite CRC Certificate
- Lead CRC Site Operations Endorsement

Certification should be evidence-based. A premium certificate must point to artifacts, OSCE results, critical-fail status, and digital attestation.

## VILO OS Integration

The academy module should feed:

- training dashboard
- progress and signatures
- n8n completion webhooks
- future eTMF / CTMS artifact export
- sponsor-readiness reporting

The source of truth lives in `src/curriculum-engine/data/premium.ts`.

## Operational Templates

The first premium template set lives in `src/curriculum-engine/data/artifactTemplates.ts`.

Templates are not static handouts. In VILO OS they should behave as structured operating artifacts:

1. The learner opens a mock-study artifact.
2. VILO OS renders the linked template sections and fields.
3. The learner completes the artifact using only provided evidence.
4. The reviewer checks completion standards, escalation triggers, and checklist items.
5. Passing artifacts become evidence for certification level decisions.

Operational templates now cover all 18 mock-study artifacts:

- Delegation of Authority Gap Review
- Training Matrix Currency Review
- Feasibility and Adequate Resources Memo
- ICF Version-Control Log
- Screening and Enrollment Log Review
- Source Note ALCOA+ Repair
- IP Accountability Reconciliation
- Eligibility Traceability Packet
- IP Temperature Excursion Assessment
- AE / SAE Assessment Log
- EDC Query Response Defense
- Sponsor SAE Awareness Email
- Monitor-Facing Fact Sheet
- Systemic CAPA Plan
- PI Escalation Brief
- Sponsor Escalation Package
- OSCE Score Export and Debrief
- Integrated Inspection Defense Package

Premium standard: every completed template must be evidence-bound, role-owned, escalation-aware, and free of invented facts.

## Certification Evidence Manifest

`GET /api/certification-evidence` returns a structured manifest built from saved artifact submissions.

The manifest includes:

- study ID
- generated timestamp
- total/submitted/reviewed/draft artifact counts
- readiness for each certification level
- artifact-by-artifact status
- checklist completion totals

This is the packet VILO OS can later render into a PDF, attach to a learner profile, or use for reviewer sign-off before issuing a certificate.
