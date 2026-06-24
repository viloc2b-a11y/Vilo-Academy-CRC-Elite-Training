import { describe, expect, it } from "vitest";
import {
  CRC_ELITE_COURSE,
  CRC_ELITE_MODULES_BY_ID,
  evaluateRubricBreakdown,
} from "@/curriculum-engine";
import {
  getAssessmentRubric,
  validateSelfEvaluation,
  buildAssessmentSummary,
} from "@/lib/assessments/helpers";
import type { AssessmentAttemptRow, SelfEvaluationMap } from "@/lib/assessments/helpers";

/**
 * Assessment Runtime — unit tests for server-side helpers.
 * Scoring engine tests use the existing curriculum rubrics directly.
 */
describe("Assessment Runtime", () => {
  // -----------------------------------------------------------------------
  // getAssessmentRubric
  // -----------------------------------------------------------------------
  describe("getAssessmentRubric", () => {
    it("returns rubric for a valid module ID", () => {
      const result = getAssessmentRubric("M1");
      expect(result).not.toBeNull();
      expect(result!.mod.id).toBe("M1");
      expect(result!.rubric.rubricId).toBe("M1.RUB1");
      expect(result!.rubric.criteria.length).toBeGreaterThan(0);
    });

    it("returns null for an invalid module ID", () => {
      expect(getAssessmentRubric("M99")).toBeNull();
      expect(getAssessmentRubric("")).toBeNull();
    });

    it("returns valid rubrics for all 17 modules", () => {
      for (const item of CRC_ELITE_COURSE.registry) {
        const result = getAssessmentRubric(item.id);
        expect(result).not.toBeNull();
        expect(result!.rubric.totalPoints).toBeGreaterThan(0);
        expect(result!.rubric.passingPoints).toBeGreaterThan(0);
      }
    });
  });

  // -----------------------------------------------------------------------
  // validateSelfEvaluation
  // -----------------------------------------------------------------------
  describe("validateSelfEvaluation", () => {
    const rubric = getAssessmentRubric("M1")!.rubric;

    it("accepts a valid self-evaluation covering all criteria", () => {
      const selfEval: SelfEvaluationMap = {};
      for (const c of rubric.criteria) {
        selfEval[c.criterionId] = { points: c.points, failed: false };
      }
      const result = validateSelfEvaluation(rubric, selfEval);
      expect(result.valid).toBe(true);
      expect(result.errors).toEqual([]);
    });

    it("rejects empty self-evaluation", () => {
      const result = validateSelfEvaluation(rubric, {});
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it("rejects negative points", () => {
      const selfEval: SelfEvaluationMap = {};
      for (const c of rubric.criteria) {
        selfEval[c.criterionId] = { points: -1, failed: false };
      }
      const result = validateSelfEvaluation(rubric, selfEval);
      expect(result.valid).toBe(false);
    });

    it("rejects points exceeding max", () => {
      const selfEval: SelfEvaluationMap = {};
      for (const c of rubric.criteria) {
        selfEval[c.criterionId] = { points: c.points + 1, failed: false };
      }
      const result = validateSelfEvaluation(rubric, selfEval);
      expect(result.valid).toBe(false);
    });

    it("rejects invalid failed flag type", () => {
      const selfEval: Record<string, { points: number; failed: string }> = {};
      for (const c of rubric.criteria) {
        (selfEval as Record<string, { points: number; failed: string }>)[c.criterionId] = {
          points: c.points,
          failed: "yes",
        };
      }
      const result = validateSelfEvaluation(
        rubric,
        selfEval as unknown as SelfEvaluationMap,
      );
      expect(result.valid).toBe(false);
    });

    it("detects missing criteria", () => {
      const selfEval: SelfEvaluationMap = {};
      // Only include first criterion
      selfEval[rubric.criteria[0].criterionId] = {
        points: rubric.criteria[0].points,
        failed: false,
      };
      const result = validateSelfEvaluation(rubric, selfEval);
      expect(result.valid).toBe(false);
      expect(result.errors.length).toBe(rubric.criteria.length - 1);
    });
  });

  // -----------------------------------------------------------------------
  // buildAssessmentSummary
  // -----------------------------------------------------------------------
  describe("buildAssessmentSummary", () => {
    const now = new Date().toISOString();

    it("returns empty summary when no attempts exist", () => {
      const summary = buildAssessmentSummary([]);
      expect(summary.totalAttempted).toBe(0);
      expect(summary.totalPassed).toBe(0);
      expect(summary.totalFailed).toBe(0);
      expect(summary.averagePercentage).toBe(0);
    });

    it("counts passed and failed attempts", () => {
      const attempts: AssessmentAttemptRow[] = [
        makeAttempt("M1", 90, 100, true, now, []),
        makeAttempt("M2", 70, 100, false, now, ["M2.C1"]),
        makeAttempt("M3", 85, 100, true, now, []),
      ];

      const summary = buildAssessmentSummary(attempts);
      expect(summary.totalAttempted).toBe(3);
      expect(summary.totalPassed).toBe(2);
      expect(summary.totalFailed).toBe(1);
    });

    it("calculates average percentage", () => {
      const attempts: AssessmentAttemptRow[] = [
        makeAttempt("M1", 90, 100, true, now, []),
        makeAttempt("M2", 80, 100, true, now, []),
        makeAttempt("M3", 70, 100, false, now, ["M3.C1"]),
      ];

      const summary = buildAssessmentSummary(attempts);
      expect(summary.averagePercentage).toBe(80); // (90 + 80 + 70) / 3
    });

    it("picks latest attempt per module when multiple exist", () => {
      const earlier = new Date(Date.now() - 86400000).toISOString(); // 1 day ago
      const later = now;

      const attempts: AssessmentAttemptRow[] = [
        makeAttempt("M1", 50, 100, false, earlier, ["M1.C1"]),
        makeAttempt("M1", 95, 100, true, later, []), // Latest
      ];

      const summary = buildAssessmentSummary(attempts);
      expect(summary.totalAttempted).toBe(1);
      expect(summary.totalPassed).toBe(1);
      expect(summary.attemptsPerModule["M1"].percentage).toBe(95);
    });

    it("builds per-module map correctly", () => {
      const attempts: AssessmentAttemptRow[] = [
        makeAttempt("M1", 85, 100, true, now, []),
        makeAttempt("M4", 60, 100, false, now, ["M4.C1"]),
      ];

      const summary = buildAssessmentSummary(attempts);
      expect(summary.attemptsPerModule["M1"]).toBeDefined();
      expect(summary.attemptsPerModule["M1"].passed).toBe(true);
      expect(summary.attemptsPerModule["M1"].percentage).toBe(85);
      expect(summary.attemptsPerModule["M4"].passed).toBe(false);
      expect(summary.attemptsPerModule["M4"].percentage).toBe(60);
    });

    it("handles duplicate attempts for same module gracefully", () => {
      const attempts: AssessmentAttemptRow[] = [
        makeAttempt("M1", 90, 100, true, now, []),
        makeAttempt("M1", 90, 100, true, now, []), // Same timestamp
      ];

      const summary = buildAssessmentSummary(attempts);
      expect(summary.totalAttempted).toBe(1); // Only counts latest per module
    });

    it("returns 0 average when no attempts exist", () => {
      const summary = buildAssessmentSummary([]);
      expect(summary.averagePercentage).toBe(0);
    });
  });

  // -----------------------------------------------------------------------
  // Scoring integration
  // -----------------------------------------------------------------------
  describe("scoring integration", () => {

    it("produces correct score from full points", () => {
      const result = getAssessmentRubric("M1")!;
      const awarded: Record<string, number> = {};
      for (const c of result.rubric.criteria) {
        awarded[c.criterionId] = c.points;
      }

      const breakdown = evaluateRubricBreakdown(result.rubric, {
        awardedByCriterionId: awarded,
      });

      expect(breakdown.earned).toBe(breakdown.max);
      expect(breakdown.passed).toBe(true);
      expect(breakdown.failFlag).toBe(false);
    });

    it("produces lower score from partial points", () => {
      const result = getAssessmentRubric("M1")!;
      const awarded: Record<string, number> = {};
      for (const c of result.rubric.criteria) {
        awarded[c.criterionId] = Math.floor(c.points / 2);
      }

      const breakdown = evaluateRubricBreakdown(result.rubric, {
        awardedByCriterionId: awarded,
      });

      expect(breakdown.earned).toBeLessThan(breakdown.max);
    });

    it("preserves fail flags from self-evaluation", () => {
      const result = getAssessmentRubric("M1")!;
      const awarded: Record<string, number> = {};
      for (const c of result.rubric.criteria) {
        awarded[c.criterionId] = c.points;
      }

      const failedId = result.rubric.criteria[0].criterionId;
      const breakdown = evaluateRubricBreakdown(result.rubric, {
        awardedByCriterionId: awarded,
        failedCriterionIds: new Set([failedId]),
      });

      expect(breakdown.failFlag).toBe(true);
      expect(breakdown.passed).toBe(false);
    });

    it("calculates percentage from earned vs max", () => {
      const result = getAssessmentRubric("M4")!;
      const awarded: Record<string, number> = {};
      for (const c of result.rubric.criteria) {
        awarded[c.criterionId] = Math.floor(c.points * 0.85);
      }

      const breakdown = evaluateRubricBreakdown(result.rubric, {
        awardedByCriterionId: awarded,
      });

      const pct = Math.round((breakdown.earned / breakdown.max) * 100);
      expect(pct).toBeGreaterThanOrEqual(80);
      expect(pct).toBeLessThanOrEqual(90);
    });
  });
});

// -----------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------
function makeAttempt(
  moduleId: string,
  score: number,
  maxScore: number,
  passed: boolean,
  submittedAt: string,
  failFlags: string[],
): AssessmentAttemptRow {
  return {
    id: crypto.randomUUID(),
    user_id: crypto.randomUUID(),
    module_id: moduleId,
    responses: { del1: "test response" },
    self_evaluation: {},
    rubric_breakdown: {
      earned: score,
      max: maxScore,
      passed,
      failFlag: failFlags.length > 0,
      byDimension: {} as any,
      rubricNormalizedByDimension: {} as any,
    },
    score,
    max_score: maxScore,
    percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
    passed,
    fail_flags: failFlags,
    certification_tier: passed
      ? score / maxScore >= 0.9
        ? "honors"
        : "standard"
      : null,
    submitted_at: submittedAt,
    created_at: submittedAt,
  };
}
