/**
 * Vilo Academy — CRC Elite Training
 * Competency-based curriculum schema (R/O/C/Q × L1/L2/L3).
 */

export type CompetencyDimension = "R" | "O" | "C" | "Q";

export type LearningLevel = "L1" | "L2" | "L3";

export type LessonType =
  | "video"
  | "case"
  | "quiz"
  | "worksheet"
  | "simulation"
  | "recap";

export interface LevelOutcomes {
  L1: string[];
  L2: string[];
  L3: string[];
}

export interface LessonPlanItem {
  lesson_id: string;
  lesson_title: string;
  lesson_type: LessonType;
  lesson_objective: string;
  key_teaching_points: string[];
}

export interface ErrorLibraryItem {
  error_or_finding: string;
  risk_generated: string;
  expected_learner_response: string;
}

export interface PracticalExercise {
  name: string;
  scenario: string;
  inputs: string[];
  learner_task: string;
  required_deliverables: string[];
}

export interface RubricCriterion {
  criterion_id: string;
  description: string;
  points: number;
  fail_condition?: string;
}

export interface AssessmentRubric {
  criteria: RubricCriterion[];
  total_points: number;
  passing_score?: number;
}

export interface ScorecardContribution {
  dimension: CompetencyDimension;
  weight_in_module: number;
  aggregation_hint: string;
}

export interface BilingualNotes {
  keep_in_english: string[];
  display_handling: string;
}

export interface CurriculumModule {
  module_id: string;
  title: { en: string; es: string };
  internal_name: string;
  module_objective: { en: string; es: string };
  mapped_dimensions: CompetencyDimension[];
  level_outcomes: LevelOutcomes;
  lesson_plan: LessonPlanItem[];
  error_library: ErrorLibraryItem[];
  practical_exercise: PracticalExercise;
  assessment_rubric: AssessmentRubric;
  scorecard_mapping: ScorecardContribution[];
  capstone_connection: { en: string; es: string };
  bilingual_notes: BilingualNotes;
  /** Optional / specialization — affects LMS filtering and learner paths */
  optional_track?: boolean;
  nivel_label: string;
  flagship_priority?: "standard" | "flagship" | "capstone";
}

export interface CourseBlueprintEntry {
  module_id: string;
  title: { en: string; es: string };
  objective: { en: string; es: string };
  mapped_dimensions: CompetencyDimension[];
  main_practical_focus: { en: string; es: string };
  optional_track?: boolean;
  flagship_priority?: CurriculumModule["flagship_priority"];
}

export interface Course {
  course_id: string;
  course_name: { en: string; es: string };
  instructional_model: {
    dimensions: CompetencyDimension[];
    levels: LearningLevel[];
    dimension_labels: Record<CompetencyDimension, { en: string; es: string }>;
  };
  blueprint: CourseBlueprintEntry[];
  modules: CurriculumModule[];
}
