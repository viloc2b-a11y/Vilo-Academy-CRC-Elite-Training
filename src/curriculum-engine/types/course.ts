// src/curriculum-engine/types/course.ts

import type {
  BilingualText,
  CompetencyDimension,
  ContentTag,
  LearningLevel,
  LocaleCode,
  ModuleCategory,
  ModuleStatus,
} from "./common";
import type {
  AssessmentRubric,
  CapstoneConnection,
  ErrorCase,
  LearningOutcome,
  Lesson,
  PracticalExercise,
  ScorecardContribution,
} from "./content";

export interface CourseMetadata {
  readonly courseId: string;
  readonly schemaVersion: string;
  readonly courseVersion: string;
  readonly title: BilingualText;
  /** One-line, marketing-friendly hook (e.g. hero / catalog card). */
  readonly subtitle: BilingualText;
  /** Longer curriculum narrative (e.g. M9 vs ALCOA+ threading, capstone alignment). */
  readonly description: BilingualText;
  readonly defaultLocales: readonly LocaleCode[];
  readonly instructionalModel: {
    readonly dimensions: readonly CompetencyDimension[];
    readonly dimensionLabels: Readonly<Record<CompetencyDimension, BilingualText>>;
    readonly levelLabels: Readonly<Record<LearningLevel, BilingualText>>;
  };
  readonly tags: readonly ContentTag[];
}

/** Nav / LMS routing row */
export interface ModuleRegistryItem {
  readonly id: string;
  readonly slug: string;
  readonly title: BilingualText;
  readonly category: ModuleCategory;
  readonly status: ModuleStatus;
  readonly isOptional: boolean;
  readonly isFlagship: boolean;
  readonly mappedDimensions: readonly CompetencyDimension[];
  readonly sortOrder: number;
}

export interface ModuleSummary {
  readonly id: string;
  readonly slug: string;
  readonly title: BilingualText;
  readonly mappedDimensions: readonly CompetencyDimension[];
  readonly isFlagship: boolean;
}

export interface Module {
  readonly id: string;
  readonly slug: string;
  readonly title: BilingualText;
  readonly internalName: string;
  readonly category: ModuleCategory;
  readonly status: ModuleStatus;
  readonly isOptional: boolean;
  readonly mappedDimensions: readonly CompetencyDimension[];
  readonly objective: BilingualText;
  readonly outcomes: readonly LearningOutcome[];
  readonly lessons: readonly Lesson[];
  readonly errorLibrary: readonly ErrorCase[];
  readonly practicalExercises: readonly PracticalExercise[];
  readonly assessmentRubric: AssessmentRubric;
  readonly scorecardContribution: readonly ScorecardContribution[];
  readonly capstoneConnection: CapstoneConnection;
  readonly tags: readonly ContentTag[];
  readonly isFlagship: boolean;
  readonly bilingualNotes?: BilingualText;
}

export interface LearnerModuleResult {
  readonly moduleId: string;
  readonly rubricScore: number;
  readonly rubricMax: number;
  readonly passed: boolean;
  readonly failFlag: boolean;
  readonly byDimension: Readonly<Record<CompetencyDimension, { raw: number; max: number }>>;
  /** Snapshot of module scorecard weights at scoring time (for analytics / LMS). */
  readonly scorecardContribution: readonly ScorecardContribution[];
  /** Normalized [0,1] per dimension from rubric points only (before course-level blend). */
  readonly rubricNormalizedByDimension: Readonly<Record<CompetencyDimension, number>>;
  /** rubricNormalizedByDimension[d] × contribution weight for d; sums across d are not forced to 1. */
  readonly scorecardWeightedByDimension: Readonly<Record<CompetencyDimension, number>>;
}

export interface CourseScorecardModel {
  readonly dimensionWeights: Readonly<Record<CompetencyDimension, number>>;
  readonly moduleWeightsExcludingCapstone: Readonly<Record<string, number>>;
  readonly capstoneWeight: number;
}

export interface CertificationRule {
  readonly ruleId: string;
  readonly description: BilingualText;
  readonly dimensionPassThreshold: Readonly<Record<CompetencyDimension, number>>;
  readonly capstoneMinNormalized: number;
  /** Modules whose **module rubric** must pass (excludes capstone-only modules such as M16). */
  readonly modulesRequiringRubricPass: readonly string[];
  /** Display / marketing: flagship set may include capstone module id. */
  readonly flagshipModuleIds: readonly string[];
  readonly requireFlagshipPass: boolean;
  readonly blockCertificationIfAnyFailFlag: boolean;
}

export interface Course {
  readonly metadata: CourseMetadata;
  readonly registry: readonly ModuleRegistryItem[];
  readonly modulesById: Readonly<Record<string, Module>>;
  readonly scorecardModel: CourseScorecardModel;
  readonly certificationRule: CertificationRule;
}
