// src/curriculum-engine/types/common.ts

export const LOCALE_CODES = ["en", "es"] as const;
export type LocaleCode = (typeof LOCALE_CODES)[number];

export type BilingualText = Readonly<{
  en: string;
  es: string;
}>;

/** Single locale string for UI; falls back to EN if locale is unknown. */
export function resolveBilingual(text: BilingualText, locale: LocaleCode): string {
  return locale === "es" ? text.es : text.en;
}

export const COMPETENCY_DIMENSIONS = ["R", "O", "C", "Q"] as const;
export type CompetencyDimension = (typeof COMPETENCY_DIMENSIONS)[number];

export const LEARNING_LEVELS = ["L1", "L2", "L3"] as const;
export type LearningLevel = (typeof LEARNING_LEVELS)[number];

export const CONTENT_TAGS = [
  "regulatory",
  "safety",
  "documentation",
  "operational",
  "clinical_judgment",
  "audit_readiness",
  "advanced",
  "optional",
  "bilingual",
  "capstone_related",
  "flagship",
  "traceability",
  "data_integrity",
] as const;
export type ContentTag = (typeof CONTENT_TAGS)[number];

export const MODULE_STATUSES = ["draft", "review", "published", "deprecated"] as const;
export type ModuleStatus = (typeof MODULE_STATUSES)[number];

export const MODULE_CATEGORIES = [
  "intro",
  "foundations",
  "operations",
  "quality",
  "advanced",
  "capstone",
] as const;
export type ModuleCategory = (typeof MODULE_CATEGORIES)[number];

/** Clinical / safety classification helpers (OSCE scenarios, case scaffolding) */
export const SEVERITY_LEVELS = ["mild", "moderate", "severe", "life_threatening", "fatal", "unknown"] as const;
export type SeverityLevel = (typeof SEVERITY_LEVELS)[number];

export const RELATIONSHIP_LEVELS = [
  "related",
  "possibly_related",
  "probably_related",
  "not_related",
  "unknown",
] as const;
export type RelationshipLevel = (typeof RELATIONSHIP_LEVELS)[number];

export const RISK_LEVELS = ["low", "moderate", "high", "critical"] as const;
export type RiskLevel = (typeof RISK_LEVELS)[number];

/** How the UI renders regulatory acronyms vs translated gloss */
export const LANGUAGE_DISPLAY_MODES = [
  "acronym_primary",
  "locale_primary",
  "side_by_side",
] as const;
export type LanguageDisplayMode = (typeof LANGUAGE_DISPLAY_MODES)[number];
