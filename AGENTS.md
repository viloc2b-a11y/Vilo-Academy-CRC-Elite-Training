# AGENTS

## Required Reading Order

Before implementation, read:

1. `PROJECT.md`
2. `STATE.md`
3. The active feature's `features/<feature>/SPEC.md`
4. The active feature's `features/<feature>/PLAN.md`
5. The source, tests, migrations, and runtime evidence relevant to the selected iteration

If no feature is active, reconstruct current state and identify the smallest next verifiable transition before writing product code.

## Canonical SDD Semantics

```text
PROJECT.md = context and invariants
SPEC.md    = approved desired state
STATE.md   = current verified state
PLAN.md    = transition from current to desired state
EVIDENCE   = proof that a transition occurred
```

The repository and runtime determine only what exists today. They do not silently redefine an approved desired state. Classify contradictions as specification, implementation, architecture, or state drift.

## Operating Loop

For every iteration:

1. Read and verify current state.
2. Compare it with the active `SPEC.md`.
3. Select the smallest verifiable iteration from `PLAN.md`.
4. Implement only that scope.
5. Validate with real commands or runtime checks.
6. Capture actual evidence.
7. Update `STATE.md`, including blocked outcomes.
8. Continue, close, or block.

Never mark work `IMPLEMENTED` without test, typecheck, build, smoke-test, or runtime evidence. If evidence is unavailable, use `PARTIAL` or `BLOCKED` and name what is missing.

## Change Classification

- **LITE:** one iteration; no public contract, auth, payments, multi-tenancy, or shared schema. Implement, validate, capture evidence, and update `STATE.md`; do not create feature spec/plan files.
- **STANDARD:** multiple iterations without a foundational contract change. Create `features/<feature>/SPEC.md` and `PLAN.md`, then execute autonomously until complete or blocked.
- **DEEP:** auth, payment/billing, shared schema, multi-tenancy, certification contract, or a foundational architectural decision. Human approval of both `SPEC.md` and `PLAN.md` is required before implementation.

Choose the higher level when uncertain.

## Security and Package Management

- Use pnpm only. Never run or recommend `npm install`, `npm i`, or `npx`.
- The current repository is npm-managed (`package-lock.json`, npm Vercel commands, and an `npx` pre-commit hook). Do not install dependencies or alter package-manager metadata until the human explicitly approves a coordinated pnpm migration.
- Do not add a dependency, plugin, CLI, SDK, or remote package without explicit approval for that exact dependency.
- Prefer existing code, installed dependencies, and native APIs.
- Do not expose, print, log, or commit secrets. Verify presence without displaying values.
- Keep service credentials and signing secrets server-side. Public `NEXT_PUBLIC_*` values must be intentionally public.
- Before a Git/GitHub write, confirm sensitive env files remain ignored and scan changed content for secret-looking values.

## Product and Data Guardrails

- Preserve English/Spanish behavior for learner-facing changes.
- Preserve stable module IDs, slugs, curriculum schema/version rules, score normalization, and certification fail gates.
- Do not change authentication, RLS policies, public verification behavior, payment semantics, certification eligibility, or shared database shapes outside an approved DEEP spec and plan.
- Add database changes as new migrations; do not edit applied migration history without explicit approval.
- Never use client-side checks as the only authorization control.
- Do not introduce PII into public verification responses, logs, analytics, webhooks, or test fixtures.

## Validation

The repository declares `test`, `typecheck`, `lint`, and `build` scripts. After package-manager alignment is approved and reproducible dependencies are available, invoke them through pnpm:

```text
pnpm test
pnpm typecheck
pnpm lint
pnpm build
```

Use focused checks first, then the broadest applicable suite. For documentation-only iterations, at minimum run `git diff --check`, verify required file paths, and inspect the rendered Markdown structure. Record exact commands and results in `STATE.md` or the iteration report.

## Stop Conditions

Stop for material ambiguity, scope change, architecture change, public-contract change, auth/payment/schema/certification changes, security or compliance risk, package-manager migration, a new dependency, unresolved material drift, or missing evidence needed to claim completion.

Local naming and equivalent internal implementation choices do not require a human gate when the approved spec and invariants already determine the outcome.

## Completion Discipline

- Stage or publish only files belonging to the active iteration.
- Do not mix opportunistic cleanup with feature work.
- Update `STATE.md` even when an iteration is blocked.
- Close a STANDARD or DEEP feature only when every acceptance criterion has evidence; then archive its `SPEC.md` and `PLAN.md` under `features/_archive/<feature>/`.
