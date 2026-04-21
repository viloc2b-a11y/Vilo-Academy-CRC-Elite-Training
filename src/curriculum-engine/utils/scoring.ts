// src/curriculum-engine/utils/scoring.ts

import type {
  AssessmentRubric,
  CapstoneResult,
  CertificationDecision,
  CompetencyDimension,
  Course,
  CourseScorecardModel,
  LearnerModuleResult,
  Module,
  RubricCriterion,
  ScorecardContribution,
} from "../types";
import { CERTIFICATION_TIER_THRESHOLDS, type CertificationTier } from "../data/scorecard";

const ALL_DIMENSIONS: readonly CompetencyDimension[] = ["R", "O", "C", "Q"];

export interface RubricTotalsValidation {
  readonly ok: boolean;
  readonly sumCriteriaPoints: number;
  readonly totalPointsDeclared: number;
  readonly errors: readonly string[];
}

/** Aligns `AssessmentRubric.totalPoints` with sum of criterion points (single source for max score). */
export function validateRubricTotals(rubric: AssessmentRubric, tolerance = 0.001): RubricTotalsValidation {
  const sumCriteriaPoints = rubric.criteria.reduce((acc, c) => acc + c.points, 0);
  const errors: string[] = [];
  if (Math.abs(sumCriteriaPoints - rubric.totalPoints) > tolerance) {
    errors.push(
      `rubricId ${rubric.rubricId}: totalPoints ${rubric.totalPoints} !== sum(criteria.points) ${sumCriteriaPoints}`,
    );
  }
  if (rubric.passingPoints > rubric.totalPoints) {
    errors.push(
      `rubricId ${rubric.rubricId}: passingPoints ${rubric.passingPoints} exceeds totalPoints ${rubric.totalPoints}`,
    );
  }
  return {
    ok: errors.length === 0,
    sumCriteriaPoints,
    totalPointsDeclared: rubric.totalPoints,
    errors,
  };
}

export function assertScorecardContributionWeights(contributions: readonly ScorecardContribution[]): void {
  const sum = contributions.reduce((a, c) => a + c.weight, 0);
  if (Math.abs(sum - 1) > 0.001) {
    throw new Error(
      `scorecardContribution weights must sum to 1.0 (got ${sum.toFixed(4)}; keys: ${contributions
        .map((c) => c.aggregationKey)
        .join(", ")})`,
    );
  }
}

export function rubricMaxFromCriteria(rubric: AssessmentRubric): number {
  const sum = rubric.criteria.reduce((acc, c) => acc + c.points, 0);
  return sum > 0 ? sum : rubric.totalPoints;
}

export function sumAwardedPoints(
  rubric: AssessmentRubric,
  awardedByCriterionId: Readonly<Record<string, number>>,
): number {
  let total = 0;
  for (const c of rubric.criteria) {
    const v = awardedByCriterionId[c.criterionId];
    if (typeof v === "number" && !Number.isNaN(v)) {
      total += Math.max(0, Math.min(c.points, v));
    }
  }
  return total;
}

export function moduleRubricNormalized(
  rubric: AssessmentRubric,
  awardedByCriterionId: Readonly<Record<string, number>>,
): number {
  const max = rubricMaxFromCriteria(rubric);
  if (max <= 0) return 0;
  return sumAwardedPoints(rubric, awardedByCriterionId) / max;
}

/** Split criterion points evenly across mapped dimensions (earned and max). */
export function allocateCriterionToDimensions(
  criterion: RubricCriterion,
  pointsEarned: number,
): Readonly<Partial<Record<CompetencyDimension, { earned: number; max: number }>>> {
  const maps = criterion.mapsToDimensions;
  if (maps.length === 0) return {};
  const shareEarned = pointsEarned / maps.length;
  const shareMax = criterion.points / maps.length;
  const out: Partial<Record<CompetencyDimension, { earned: number; max: number }>> = {};
  for (const d of maps) {
    out[d] = { earned: shareEarned, max: shareMax };
  }
  return out;
}

export function dimensionSlicesFromRubric(
  rubric: AssessmentRubric,
  awardedByCriterionId: Readonly<Record<string, number>>,
): Readonly<Record<CompetencyDimension, { raw: number; max: number }>> {
  const acc = emptyDimensionRawMax();
  for (const c of rubric.criteria) {
    const earned = awardedByCriterionId[c.criterionId];
    const clamped =
      typeof earned === "number" && !Number.isNaN(earned)
        ? Math.max(0, Math.min(c.points, earned))
        : 0;
    const partial = allocateCriterionToDimensions(c, clamped);
    for (const d of ALL_DIMENSIONS) {
      const slice = partial[d];
      if (slice) {
        acc[d].raw += slice.earned;
        acc[d].max += slice.max;
      }
    }
  }
  return acc;
}

export function normalizeDimensionSlices(
  slices: Readonly<Record<CompetencyDimension, { raw: number; max: number }>>,
): Readonly<Record<CompetencyDimension, number>> {
  const out = {} as Record<CompetencyDimension, number>;
  for (const d of ALL_DIMENSIONS) {
    const { raw, max } = slices[d];
    out[d] = max > 0 ? raw / max : 0;
  }
  return out;
}

function contributionWeightRecord(
  contributions: readonly ScorecardContribution[],
): Readonly<Record<CompetencyDimension, number>> {
  const acc: Record<CompetencyDimension, number> = { R: 0, O: 0, C: 0, Q: 0 };
  for (const c of contributions) {
    acc[c.dimension] += c.weight;
  }
  return acc;
}

export function scorecardWeightedDimensionVector(
  rubricNormByDim: Readonly<Record<CompetencyDimension, number>>,
  contributions: readonly ScorecardContribution[],
): Readonly<Record<CompetencyDimension, number>> {
  const w = contributionWeightRecord(contributions);
  const out = {} as Record<CompetencyDimension, number>;
  for (const d of ALL_DIMENSIONS) {
    out[d] = rubricNormByDim[d] * (w[d] ?? 0);
  }
  return out;
}

export interface RubricEvaluationInput {
  readonly awardedByCriterionId: Readonly<Record<string, number>>;
  readonly failedCriterionIds?: ReadonlySet<string>;
}

export interface RubricEvaluationBreakdown {
  readonly earned: number;
  readonly max: number;
  readonly passed: boolean;
  readonly failFlag: boolean;
  readonly byDimension: Readonly<Record<CompetencyDimension, { raw: number; max: number }>>;
  readonly rubricNormalizedByDimension: Readonly<Record<CompetencyDimension, number>>;
}

/** Core rubric math shared by module rubrics and OSCE station rubrics (same AssessmentRubric shape). */
export function evaluateRubricBreakdown(
  rubric: AssessmentRubric,
  input: RubricEvaluationInput,
): RubricEvaluationBreakdown {
  const max = rubricMaxFromCriteria(rubric);
  const earned = sumAwardedPoints(rubric, input.awardedByCriterionId);
  const failed = input.failedCriterionIds ?? new Set<string>();
  let criterionFail = false;
  for (const c of rubric.criteria) {
    if (failed.has(c.criterionId)) criterionFail = true;
  }
  const passed = earned >= rubric.passingPoints && !criterionFail;
  const byDim = dimensionSlicesFromRubric(rubric, input.awardedByCriterionId);
  const rubricNormalizedByDimension = normalizeDimensionSlices(byDim);
  return {
    earned,
    max,
    passed,
    failFlag: criterionFail || earned < rubric.passingPoints,
    byDimension: byDim,
    rubricNormalizedByDimension,
  };
}

export function evaluateModuleRubric(mod: Module, input: RubricEvaluationInput): LearnerModuleResult {
  assertScorecardContributionWeights(mod.scorecardContribution);
  const breakdown = evaluateRubricBreakdown(mod.assessmentRubric, input);
  const scorecardWeightedByDimension = scorecardWeightedDimensionVector(
    breakdown.rubricNormalizedByDimension,
    mod.scorecardContribution,
  );
  return {
    moduleId: mod.id,
    rubricScore: breakdown.earned,
    rubricMax: breakdown.max,
    passed: breakdown.passed,
    failFlag: breakdown.failFlag,
    byDimension: breakdown.byDimension,
    scorecardContribution: mod.scorecardContribution,
    rubricNormalizedByDimension: breakdown.rubricNormalizedByDimension,
    scorecardWeightedByDimension,
  };
}

export function weightedModuleDimensionVector(
  results: ReadonlyArray<LearnerModuleResult>,
  moduleWeights: Readonly<Record<string, number>>,
): Readonly<Record<CompetencyDimension, number>> {
  const acc = { R: 0, O: 0, C: 0, Q: 0 } as Record<CompetencyDimension, number>;
  let weightSum = 0;
  for (const r of results) {
    const w = moduleWeights[r.moduleId];
    if (w == null || w <= 0) continue;
    const norm = r.rubricNormalizedByDimension;
    for (const d of ALL_DIMENSIONS) {
      acc[d] += norm[d] * w;
    }
    weightSum += w;
  }
  if (weightSum <= 0) return acc;
  for (const d of ALL_DIMENSIONS) {
    acc[d] /= weightSum;
  }
  return acc;
}

export function blendModuleAndCapstoneDimensions(
  moduleVector: Readonly<Record<CompetencyDimension, number>>,
  capstoneVector: Readonly<Record<CompetencyDimension, number>>,
  model: CourseScorecardModel,
): Readonly<Record<CompetencyDimension, number>> {
  const cw = Math.max(0, Math.min(1, model.capstoneWeight));
  const mw = 1 - cw;
  const out = {} as Record<CompetencyDimension, number>;
  for (const d of ALL_DIMENSIONS) {
    out[d] = mw * moduleVector[d] + cw * capstoneVector[d];
  }
  return out;
}

export function capstoneVectorFromResult(result: CapstoneResult): Readonly<Record<CompetencyDimension, number>> {
  return { ...result.crossedDimensions };
}

export function anyFailFlag(
  moduleResults: ReadonlyArray<LearnerModuleResult>,
  capstone: CapstoneResult,
): boolean {
  if (capstone.overallFail) return true;
  return moduleResults.some((m) => m.failFlag);
}

export function evaluateCertificationDecision(input: {
  readonly course: Course;
  readonly moduleResults: ReadonlyArray<LearnerModuleResult>;
  readonly capstone: CapstoneResult;
  readonly evaluatedAtIso: string;
}): CertificationDecision {
  const { course, moduleResults, capstone, evaluatedAtIso } = input;
  const rule = course.certificationRule;
  const model = course.scorecardModel;

  const preCapResults = moduleResults.filter((r) => model.moduleWeightsExcludingCapstone[r.moduleId] != null);
  const modVec = weightedModuleDimensionVector(preCapResults, model.moduleWeightsExcludingCapstone);
  const capVec = capstoneVectorFromResult(capstone);
  const finalVec = blendModuleAndCapstoneDimensions(modVec, capVec, model);

  const reasons: { en: string; es: string }[] = [];
  const dimSnapshots = ALL_DIMENSIONS.map((dimension) => {
    const normalized = finalVec[dimension];
    const threshold = rule.dimensionPassThreshold[dimension];
    const failFlag = normalized < threshold;
    if (failFlag) {
      reasons.push({
        en: `Dimension ${dimension} below threshold (${normalized.toFixed(3)} < ${threshold}).`,
        es: `Dimensión ${dimension} bajo umbral (${normalized.toFixed(3)} < ${threshold}).`,
      });
    }
    return { dimension, normalized, failFlag };
  });

  const capstoneFail = capstone.aggregateNormalized < rule.capstoneMinNormalized;
  if (capstoneFail) {
    reasons.push({
      en: `Capstone aggregate below minimum (${capstone.aggregateNormalized.toFixed(3)} < ${rule.capstoneMinNormalized}).`,
      es: `Capstone agregado bajo mínimo (${capstone.aggregateNormalized.toFixed(3)} < ${rule.capstoneMinNormalized}).`,
    });
  }

  let rubricGateFail = false;
  if (rule.requireFlagshipPass) {
    for (const id of rule.modulesRequiringRubricPass) {
      const res = moduleResults.find((m) => m.moduleId === id);
      if (res && !res.passed) {
        rubricGateFail = true;
        reasons.push({
          en: `Module ${id} rubric did not pass.`,
          es: `La rúbrica del módulo ${id} no se aprobó.`,
        });
      }
    }
  }

  const rubricOrStationFailFlag = anyFailFlag(moduleResults, capstone);
  const dimensionFail = dimSnapshots.some((d) => d.failFlag);
  const hardBlock = rule.blockCertificationIfAnyFailFlag && rubricOrStationFailFlag;

  let status: CertificationDecision["status"] = "certified";
  if (hardBlock) {
    status = "blocked_fail_flag";
  } else if (capstoneFail || rubricGateFail || dimensionFail) {
    status = "not_certified";
  } else {
    const overall = ALL_DIMENSIONS.reduce(
      (acc, d) => acc + finalVec[d] * (model.dimensionWeights[d] ?? 0.25),
      0,
    );
    if (overall < CERTIFICATION_TIER_THRESHOLDS.standard.minOverall) {
      status = "conditional_review";
    }
  }

  return {
    status,
    dimensionScores: dimSnapshots,
    capstoneNormalized: capstone.aggregateNormalized,
    reasons,
    evaluatedAtIso,
  };
}

export function certificationTierFromOverall(overall: number): CertificationTier {
  if (overall >= CERTIFICATION_TIER_THRESHOLDS.honors.minOverall) return "honors";
  if (overall >= CERTIFICATION_TIER_THRESHOLDS.standard.minOverall) return "standard";
  if (overall >= CERTIFICATION_TIER_THRESHOLDS.marginal.minOverall) return "marginal";
  return "fail";
}

export function summarizeLearnerReadiness(input: {
  readonly decision: CertificationDecision;
  readonly model: CourseScorecardModel;
}): {
  readonly overallNormalized: number;
  readonly tier: CertificationTier;
  readonly dimensionHeadline: Readonly<Record<CompetencyDimension, number>>;
} {
  const { decision, model } = input;
  const dimensionHeadline = {} as Record<CompetencyDimension, number>;
  let overall = 0;
  for (const d of ALL_DIMENSIONS) {
    const snap = decision.dimensionScores.find((s) => s.dimension === d);
    const n = snap?.normalized ?? 0;
    dimensionHeadline[d] = n;
    overall += n * (model.dimensionWeights[d] ?? 0.25);
  }
  return {
    overallNormalized: overall,
    tier: certificationTierFromOverall(overall),
    dimensionHeadline,
  };
}

function emptyDimensionRawMax(): Record<CompetencyDimension, { raw: number; max: number }> {
  return {
    R: { raw: 0, max: 0 },
    O: { raw: 0, max: 0 },
    C: { raw: 0, max: 0 },
    Q: { raw: 0, max: 0 },
  };
}
