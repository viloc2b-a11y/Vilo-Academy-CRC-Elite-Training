// src/curriculum-engine/implementation-notes.ts

export const IMPLEMENTATION_NOTES = {
  bilingualContent: {
    pattern:
      "Use BilingualText for learner-facing strings; resolve with resolveBilingual(text, locale). Keep operational tokens (DOA, SUSAR, MedDRA, OSCE) in EN in UI with a one-time glossary tooltip in ES.",
    courseTitles:
      "Course metadata: title; subtitle (one-line marketing hook); description (full narrative, e.g. M9 vs ALCOA+). Do not copy EN into ES verbatim—localize meaning (see CRC_ELITE_METADATA).",
    localeSelection:
      "metadata.defaultLocales drives available locales; LanguageDisplayMode toggles side-by-side vs primary + secondary in LMS shells.",
  },
  lmsRendering: {
    moduleRoute: "registry[].slug + id stable for deep links; never key UI state on array index.",
    rubricUi:
      "Use evaluateRubricBreakdown for any AssessmentRubric (module or OSCE). Surface failCondition when RubricCriterionScore.failed is true.",
    scorecardUi:
      "LearnerModuleResult.rubricNormalizedByDimension feeds certification blend; scorecardWeightedByDimension is emphasis for dashboards (norm × module weight).",
    capstone:
      "CAPSTONE_STATION_IDS is derived from CAPSTONE_STATION_REGISTRY; M16.capstoneConnection.stationIds must stay equal to that list.",
  },
  analyticsHooks: {
    aggregationKeys:
      "LearnerModuleResult.scorecardContribution[].aggregationKey matches seed data for warehouse rollups.",
    triggerKeys:
      "Capstone FailCondition.triggerKey and rubric fail paths should emit events with those keys (no PII in payloads).",
  },
  versioning: {
    schemaVersion: "Bump metadata.schemaVersion when breaking TypeScript shapes or required fields.",
    courseVersion: "Bump metadata.courseVersion for content-only releases; migrations can map old attempt IDs.",
  },
  normalizedLayer: {
    rationale:
      "types/normalized.ts supports splitting metadata, rubrics, exercises, and stations for lazy loading; seed phase keeps everything in Module for simplicity.",
    nextStep:
      "Optional build step: emit NormalizedCourseData JSON; run validateRubricTotals on every AssessmentRubric at build time.",
  },
  moduleAuthoring: {
    aggregateWeightsInvariant:
      "MODULE_AGGREGATE_WEIGHTS values for all keys in GRADED_PRE_CAPSTONE_MODULE_IDS must sum to 1.0 exactly; floating-point drift is not acceptable for certification blend—recompute by hand after adding or rebalancing modules.",
    guidedPracticeCaseCount:
      "Default: three Guided Practice lessons per module (lessonType \"case\", ids *.GP1–*.GP3). High-ambiguity modules may use four (*.GP1–*.GP4) when ethics, consent, voluntariness, or recruitment integrity need an extra scenario; document the exception in the module file header comment. M8 may use five (*.GP1–*.GP5) when screening, randomization, windows, systemic deviations, and primary-endpoint timing need separate drills. As of current seed: M6 and M7 use four; M8 uses five.",
  },
  extensibility: {
    newModules:
      "Add Module under data/modules/, register in data/course.ts, extend MODULE_AGGREGATE_WEIGHTS and GRADED_PRE_CAPSTONE_MODULE_IDS if the module is pre-capstone and rubric-gated.",
    certification:
      "M16 is flagship for catalog but excluded from modulesRequiringRubricPass; OSCE aggregate enforces capstone competence.",
  },
} as const;
