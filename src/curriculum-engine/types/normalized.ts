// src/curriculum-engine/types/normalized.ts

import type {
  AssessmentRubric,
  CapstoneConnection,
  ErrorCase,
  PracticalExercise,
  ScorecardContribution,
} from "./content";
import type { CourseMetadata, Module, ModuleRegistryItem } from "./course";
import type { CapstoneStation } from "./capstone";

/** Keyed by module id */
export type ModuleContentMap = Readonly<Record<string, Module>>;

export type RubricMap = Readonly<Record<string, AssessmentRubric>>;

export type ExerciseMap = Readonly<Record<string, PracticalExercise>>;

export type ErrorLibraryMap = Readonly<Record<string, readonly ErrorCase[]>>;

export type CapstoneStationMap = Readonly<Record<string, CapstoneStation>>;

export type ScorecardIndex = Readonly<Record<string, readonly ScorecardContribution[]>>;

export type CapstoneLinkIndex = Readonly<Record<string, CapstoneConnection>>;

/**
 * Normalized persistence / CMS sync layer: split metadata, heavy content,
 * and cross-cutting indices for scorecard + capstone without duplicating module bodies.
 */
export interface NormalizedCourseData {
  readonly metadata: CourseMetadata;
  readonly registry: readonly ModuleRegistryItem[];
  readonly modules: ModuleContentMap;
  readonly rubricsById?: RubricMap;
  readonly exercisesById?: ExerciseMap;
  readonly errorLibrariesByModuleId?: ErrorLibraryMap;
  readonly capstoneStations: CapstoneStationMap;
  readonly scorecardIndex: ScorecardIndex;
  readonly capstoneLinkIndex: CapstoneLinkIndex;
}
