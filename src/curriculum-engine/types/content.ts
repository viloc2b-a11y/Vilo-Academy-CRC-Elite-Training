// src/curriculum-engine/types/content.ts

import type { BilingualText, CompetencyDimension, LearningLevel } from "./common";

export const LESSON_TYPES = [
  "video",
  "reading",
  "case",
  "quiz",
  "worksheet",
  "simulation",
  "recap",
  "osce_station",
] as const;
export type LessonType = (typeof LESSON_TYPES)[number];

export const EXERCISE_INPUT_KINDS = [
  "table",
  "mock_ehr",
  "pdf",
  "bundle",
  "export",
  "url",
  "free_text",
] as const;
export type ExerciseInputKind = (typeof EXERCISE_INPUT_KINDS)[number];

export interface LearningOutcome {
  readonly level: LearningLevel;
  readonly statements: readonly BilingualText[];
}

export interface Lesson {
  readonly lessonId: string;
  readonly title: BilingualText;
  readonly lessonType: LessonType;
  readonly objective: BilingualText;
  readonly keyPoints: readonly BilingualText[];
  readonly durationMinutes?: number;
  readonly assetRef?: string;
}

export interface ErrorCase {
  readonly errorId: string;
  readonly description: BilingualText;
  readonly risk: BilingualText;
  readonly expectedLearnerResponse: BilingualText;
  readonly relatedDimensions: readonly CompetencyDimension[];
}

export interface ExerciseInput {
  readonly inputId: string;
  readonly label: BilingualText;
  readonly inputKind: ExerciseInputKind | string;
  readonly assetRef?: string;
}

export interface ExerciseDeliverable {
  readonly deliverableId: string;
  readonly label: BilingualText;
  readonly formatHint: string;
}

export interface PracticalExercise {
  readonly exerciseId: string;
  readonly name: BilingualText;
  readonly scenario: BilingualText;
  readonly inputs: readonly ExerciseInput[];
  readonly learnerTask: BilingualText;
  readonly deliverables: readonly ExerciseDeliverable[];
}

export interface ResourceReference {
  readonly refId: string;
  readonly kind: "pdf" | "url" | "cms_asset" | "lms_sco";
  readonly uri: string;
  readonly label?: BilingualText;
}

/** One row in a scored rubric (module or OSCE station). */
export interface RubricCriterionScore {
  readonly criterionId: string;
  readonly pointsAwarded: number;
  readonly failed: boolean;
}

export interface RubricCriterion {
  readonly criterionId: string;
  readonly description: BilingualText;
  readonly points: number;
  readonly mapsToDimensions: readonly CompetencyDimension[];
  /** Human-readable fail rule; LMS sets `failed` on RubricCriterionScore when triggered. */
  readonly failCondition?: BilingualText;
}

export interface AssessmentRubric {
  readonly rubricId: string;
  readonly criteria: readonly RubricCriterion[];
  /** Should equal sum(criteria.points); use validateRubricTotals in utils/scoring. */
  readonly totalPoints: number;
  readonly passingPoints: number;
}

export interface ScorecardContribution {
  readonly dimension: CompetencyDimension;
  /** Weights for one module must sum to 1.0 */
  readonly weight: number;
  readonly aggregationKey: string;
}

export interface CapstoneConnection {
  readonly summary: BilingualText;
  readonly stationIds: readonly string[];
}
