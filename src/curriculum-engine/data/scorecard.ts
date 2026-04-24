// src/curriculum-engine/data/scorecard.ts
//
// MODULE_AGGREGATE_WEIGHTS: nine pre-capstone modules (M1–M7, M8 visits/windows/randomization, M9 IP/pharmacy/cold chain)
// sum to 1.0; M4 retains highest single weight. M16 excluded — OSCE aggregate (CAPSTONE_WEIGHT).
//
// ALCOA+ visibility: cross-cutting documentation discipline — not a separate module weight line. Flagship pre-capstone
// anchor = M4; capstone ALCOA+ / source repair station = OSCE.S5. M9 weights = investigational product (pharmacy, cold
// chain, accountability), not ALCOA+. Certification copy below states the split for clarity.

import type { CompetencyDimension, CourseScorecardModel, CertificationRule } from "../types";

export const DIMENSION_PASS_THRESHOLD: Readonly<Record<CompetencyDimension, number>> = {
  R: 0.72,
  O: 0.72,
  C: 0.72,
  Q: 0.76,
};

export const CAPSTONE_MIN_NORMALIZED = 0.78;

/** Catalog flagship set (includes M16); module rubric pass enforced for GRADED_PRE_CAPSTONE_MODULE_IDS only. */
export const FLAGSHIP_MODULE_IDS = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M16", "M17"] as const;

/**
 * Pre-capstone blend weights — must sum to 1.0 exactly (verify after any edit).
 * 0.07 + 5×0.09 + 0.24 + 2×0.12 = 1.00 — M4 remains the single heaviest pre-capstone module.
 */
export const MODULE_AGGREGATE_WEIGHTS: Readonly<Record<string, number>> = {
  M1: 0.07,
  M2: 0.09,
  M3: 0.09,
  M4: 0.24,
  M5: 0.09,
  M6: 0.09,
  M7: 0.09,
  M8: 0.12,
  M9: 0.12,
};

/** Pre-capstone modules whose module rubric must pass (excludes M16 — OSCE aggregate). */
export const GRADED_PRE_CAPSTONE_MODULE_IDS = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9"] as const;

export const CAPSTONE_WEIGHT = 0.35;

export const COURSE_SCORECARD_MODEL: CourseScorecardModel = {
  dimensionWeights: { R: 0.25, O: 0.25, C: 0.25, Q: 0.25 },
  moduleWeightsExcludingCapstone: { ...MODULE_AGGREGATE_WEIGHTS },
  capstoneWeight: CAPSTONE_WEIGHT,
};

export const CERTIFICATION_RULE_V1: CertificationRule = {
  ruleId: "crc_elite_cert_v1",
  description: {
    en: "Certify when blended dimension scores meet floors, OSCE aggregate meets capstone minimum, M1/M2/M3/M4/M5/M6/M7/M8/M9 module rubrics pass, and no fail-flag override applies. M9 certifies investigational-product competence (pharmacy, cold chain, IP accountability). ALCOA+ is cross-cutting: weighted especially through M4 (logs & source-aligned discipline) and tested again under pressure at OSCE.S5 in the capstone.",
    es: "Certificar cuando puntajes por dimensión mezclados cumplan pisos, el agregado OSCE cumpla mínimo de capstone, las rúbricas M1/M2/M3/M4/M5/M6/M7/M8/M9 aprueben y no aplique anulación por fail-flag. M9 certifica competencia en producto investigacional (farmacia, cadena de frío, contabilidad IP). ALCOA+ es transversal: ponderada sobre todo a través de M4 (logs y disciplina alineada a fuente) y probada de nuevo bajo presión en OSCE.S5 del capstone.",
  },
  dimensionPassThreshold: DIMENSION_PASS_THRESHOLD,
  capstoneMinNormalized: CAPSTONE_MIN_NORMALIZED,
  modulesRequiringRubricPass: [...GRADED_PRE_CAPSTONE_MODULE_IDS] as string[],
  flagshipModuleIds: [...FLAGSHIP_MODULE_IDS],
  requireFlagshipPass: true,
  blockCertificationIfAnyFailFlag: true,
};

export type CertificationTier = "honors" | "standard" | "marginal" | "fail";

export const CERTIFICATION_TIER_THRESHOLDS: Readonly<
  Record<CertificationTier, { minOverall: number }>
> = {
  honors: { minOverall: 0.9 },
  standard: { minOverall: 0.78 },
  marginal: { minOverall: 0.72 },
  fail: { minOverall: 0 },
};

/** If true, any rubric fail_condition met or criterion failed blocks cert regardless of points */
export const FAIL_OVERRIDE_STRICT = true;
