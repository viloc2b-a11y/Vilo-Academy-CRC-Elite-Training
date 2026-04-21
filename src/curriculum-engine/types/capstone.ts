// src/curriculum-engine/types/capstone.ts

import type { BilingualText, CompetencyDimension, RiskLevel } from "./common";
import type { AssessmentRubric, ExerciseInput, PracticalExercise, RubricCriterionScore } from "./content";

export const STATION_TYPES = [
  "eligibility_screening",
  "consent_visit",
  "safety_ae",
  "logs_traceability",
  "source_alcoa",
  "monitoring_readiness",
  /** Study-level go/no-go: accrual math, adequate resources (E6), sponsor pressure vs GCP */
  "feasibility_commitment",
] as const;
export type StationType = (typeof STATION_TYPES)[number];

export interface FailCondition {
  readonly failId: string;
  readonly description: BilingualText;
  /** Stable key for analytics / scoring overrides */
  readonly triggerKey: string;
  readonly severity: RiskLevel;
}

export interface CapstoneScenario {
  readonly scenarioId: string;
  readonly title: BilingualText;
  readonly narrative: BilingualText;
  readonly seededDefects: readonly BilingualText[];
}

export interface CapstoneStation {
  readonly stationId: string;
  readonly stationType: StationType;
  readonly title: BilingualText;
  /** Same semantics as Module.mappedDimensions — dimensions explicitly scored at this station. */
  readonly mappedDimensions: readonly CompetencyDimension[];
  readonly scenario: CapstoneScenario;
  readonly inputs: readonly ExerciseInput[];
  readonly tasks: readonly BilingualText[];
  readonly exercise?: PracticalExercise;
  readonly rubric: AssessmentRubric;
  readonly failConditions: readonly FailCondition[];
  readonly dimensionFloor: Readonly<Partial<Record<CompetencyDimension, number>>>;
}

export interface CapstoneEvaluation {
  readonly stationId: string;
  readonly criterionScores: readonly RubricCriterionScore[];
  readonly stationNormalized: number;
  readonly stationFail: boolean;
}

export type CertificationDecisionStatus =
  | "certified"
  | "not_certified"
  | "conditional_review"
  | "blocked_fail_flag";

export interface DimensionScoreSnapshot {
  readonly dimension: CompetencyDimension;
  readonly normalized: number;
  readonly failFlag: boolean;
}

export interface CertificationDecision {
  readonly status: CertificationDecisionStatus;
  readonly dimensionScores: readonly DimensionScoreSnapshot[];
  readonly capstoneNormalized: number;
  readonly reasons: readonly BilingualText[];
  readonly evaluatedAtIso: string;
}

export interface CapstoneResult {
  readonly attemptId: string;
  readonly stationEvaluations: readonly CapstoneEvaluation[];
  readonly aggregateNormalized: number;
  readonly overallFail: boolean;
  readonly crossedDimensions: Readonly<Record<CompetencyDimension, number>>;
}
