/**
 * Server-side helpers for assessment submission and scoring.
 * Uses the existing curriculum scoring engine for rubric evaluation.
 */

import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  CRC_ELITE_COURSE,
  CRC_ELITE_MODULES_BY_ID,
  evaluateRubricBreakdown,
  type RubricEvaluationInput,
  type RubricEvaluationBreakdown,
} from "@/curriculum-engine";
import type { AssessmentRubric, Module } from "@/curriculum-engine";
import { isValidModuleId } from "@/lib/progress/helpers";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SelfEvaluationEntry {
  points: number;
  failed: boolean;
}

export type SelfEvaluationMap = Record<string, SelfEvaluationEntry>;

export interface AssessmentAttemptRow {
  id: string;
  user_id: string;
  module_id: string;
  responses: Record<string, string>;
  self_evaluation: SelfEvaluationMap;
  rubric_breakdown: RubricEvaluationBreakdown;
  score: number;
  max_score: number;
  percentage: number;
  passed: boolean;
  fail_flags: string[];
  certification_tier: string | null;
  submitted_at: string;
  created_at: string;
}

export interface AssessmentSummary {
  totalAttempted: number;
  totalPassed: number;
  totalFailed: number;
  averagePercentage: number;
  attemptsPerModule: Record<string, { latestScore: number; passed: boolean; percentage: number }>;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

/**
 * Get the assessment rubric for a module.
 */
export function getAssessmentRubric(moduleId: string): {
  mod: Module;
  rubric: AssessmentRubric;
} | null {
  if (!isValidModuleId(moduleId)) return null;
  const mod = CRC_ELITE_MODULES_BY_ID[moduleId];
  if (!mod) return null;
  return { mod, rubric: mod.assessmentRubric };
}

/**
 * Validate that self-evaluation covers all criteria.
 */
export function validateSelfEvaluation(
  rubric: AssessmentRubric,
  selfEval: SelfEvaluationMap,
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check that all criteria have an entry
  for (const criterion of rubric.criteria) {
    const entry = selfEval[criterion.criterionId];
    if (!entry) {
      errors.push(`Missing evaluation for criterion ${criterion.criterionId}`);
      continue;
    }
    if (typeof entry.points !== "number" || entry.points < 0 || entry.points > criterion.points) {
      errors.push(
        `Invalid points for ${criterion.criterionId}: must be 0–${criterion.points}`,
      );
    }
    if (typeof entry.failed !== "boolean") {
      errors.push(`Invalid failed flag for ${criterion.criterionId}`);
    }
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Submit an assessment attempt: run the scoring engine and persist.
 */
export async function submitAssessmentAttempt(
  userId: string,
  moduleId: string,
  responses: Record<string, string>,
  selfEvaluation: SelfEvaluationMap,
): Promise<{
  success: boolean;
  attempt?: AssessmentAttemptRow;
  error?: string;
}> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: "Supabase is not configured" };
  }

  // Validate module
  const rubricData = getAssessmentRubric(moduleId);
  if (!rubricData) {
    return { success: false, error: "Invalid module ID" };
  }

  const { mod, rubric } = rubricData;

  // Validate responses
  if (!responses || Object.keys(responses).length === 0) {
    return { success: false, error: "Responses cannot be empty" };
  }

  // Validate self-evaluation
  const validation = validateSelfEvaluation(rubric, selfEvaluation);
  if (!validation.valid) {
    return { success: false, error: validation.errors.join("; ") };
  }

  // Build input for scoring engine
  const awardedByCriterionId: Record<string, number> = {};
  const failedCriterionIds: string[] = [];
  for (const criterion of rubric.criteria) {
    const entry = selfEvaluation[criterion.criterionId];
    awardedByCriterionId[criterion.criterionId] = entry.points;
    if (entry.failed) {
      failedCriterionIds.push(criterion.criterionId);
    }
  }

  const scoringInput: RubricEvaluationInput = {
    awardedByCriterionId,
    failedCriterionIds:
      failedCriterionIds.length > 0 ? new Set(failedCriterionIds) : undefined,
  };

  // Run the scoring engine
  const breakdown = evaluateRubricBreakdown(rubric, scoringInput);

  // Determine certification tier
  let certificationTier: string | null = null;
  if (breakdown.passed) {
    const pct = (breakdown.earned / breakdown.max) * 100;
    if (pct >= 90) certificationTier = "honors";
    else if (pct >= 78) certificationTier = "standard";
    else certificationTier = "marginal";
  }

  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("assessment_attempts")
      .insert({
        user_id: userId,
        module_id: moduleId,
        responses,
        self_evaluation: selfEvaluation,
        rubric_breakdown: breakdown,
        score: breakdown.earned,
        max_score: breakdown.max,
        percentage: breakdown.max > 0
          ? Math.round((breakdown.earned / breakdown.max) * 100)
          : 0,
        passed: breakdown.passed,
        fail_flags:
          failedCriterionIds.length > 0 ? failedCriterionIds : [],
        certification_tier: certificationTier,
      })
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, attempt: data as unknown as AssessmentAttemptRow };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to submit assessment",
    };
  }
}

/**
 * Get the latest assessment attempt for a module.
 */
export async function getLatestAssessmentAttempt(
  userId: string,
  moduleId: string,
): Promise<AssessmentAttemptRow | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("assessment_attempts")
      .select("*")
      .eq("user_id", userId)
      .eq("module_id", moduleId)
      .order("submitted_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    return (data ?? null) as unknown as AssessmentAttemptRow | null;
  } catch {
    return null;
  }
}

/**
 * Get all assessment attempts for a user.
 */
export async function getAssessmentAttempts(
  userId: string,
): Promise<AssessmentAttemptRow[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("assessment_attempts")
      .select("*")
      .eq("user_id", userId)
      .order("submitted_at", { ascending: false });

    return (data ?? []) as unknown as AssessmentAttemptRow[];
  } catch {
    return [];
  }
}

/**
 * Build an assessment summary from all attempts.
 */
export function buildAssessmentSummary(
  attempts: AssessmentAttemptRow[],
): AssessmentSummary {
  // Only consider the latest attempt per module
  const latestByModule = new Map<string, AssessmentAttemptRow>();
  for (const attempt of attempts) {
    const existing = latestByModule.get(attempt.module_id);
    if (!existing || attempt.submitted_at > existing.submitted_at) {
      latestByModule.set(attempt.module_id, attempt);
    }
  }

  const latestAttempts = Array.from(latestByModule.values());
  const totalAttempted = latestAttempts.length;
  const totalPassed = latestAttempts.filter((a) => a.passed).length;
  const totalFailed = totalAttempted - totalPassed;
  const averagePercentage =
    totalAttempted > 0
      ? Math.round(
          latestAttempts.reduce((acc, a) => acc + a.percentage, 0) /
            totalAttempted,
        )
      : 0;

  const attemptsPerModule: Record<
    string,
    { latestScore: number; passed: boolean; percentage: number }
  > = {};
  for (const attempt of latestAttempts) {
    attemptsPerModule[attempt.module_id] = {
      latestScore: attempt.score,
      passed: attempt.passed,
      percentage: attempt.percentage,
    };
  }

  return {
    totalAttempted,
    totalPassed,
    totalFailed,
    averagePercentage,
    attemptsPerModule,
  };
}
