import { describe, expect, it } from "vitest";
import {
  CRC_ELITE_COURSE,
  CRC_ELITE_MODULES_BY_ID,
  resolveBilingual,
} from "@/curriculum-engine";
import type { LocaleCode } from "@/curriculum-engine/types/common";

/**
 * Validate that every module in the registry is renderable by the
 * Module Viewer components.  This test exercises the same data paths
 * the page component uses — no rendering library required, since all
 * Viewer components are server-side and data-driven.
 */
describe("Module Viewer MVP", () => {
  const course = CRC_ELITE_COURSE;
  const registry = course.registry;
  const locales: LocaleCode[] = ["en", "es"];

  it("renders every registered module without data errors", () => {
    for (const item of registry) {
      const mod = course.modulesById[item.id];
      expect(mod).toBeDefined();
      expect(mod.id).toBe(item.id);
      expect(mod.slug).toBe(item.slug);
    }
  });

  it("has a matching registry item for every modulesById entry", () => {
    for (const [id] of Object.entries(CRC_ELITE_MODULES_BY_ID)) {
      expect(registry.find((r) => r.id === id)).toBeDefined();
    }
  });

  it("provides bilingual titles and objectives for every module", () => {
    for (const item of registry) {
      const mod = course.modulesById[item.id];
      for (const locale of locales) {
        const title = resolveBilingual(mod.title, locale);
        expect(title).toBeTruthy();
        expect(title.length).toBeGreaterThan(0);

        const objective = resolveBilingual(mod.objective, locale);
        expect(objective).toBeTruthy();
        expect(objective.length).toBeGreaterThan(0);
      }
    }
  });

  it("has lessons in every module", () => {
    for (const item of registry) {
      const mod = course.modulesById[item.id];
      expect(mod.lessons.length).toBeGreaterThan(0);
      for (const lesson of mod.lessons) {
        expect(lesson.lessonId).toBeTruthy();
        expect(lesson.title.en).toBeTruthy();
        expect(lesson.title.es).toBeTruthy();
      }
    }
  });

  it("has an assessment rubric in every module", () => {
    for (const item of registry) {
      const mod = course.modulesById[item.id];
      expect(mod.assessmentRubric).toBeDefined();
      expect(mod.assessmentRubric.rubricId).toBeTruthy();
      expect(mod.assessmentRubric.criteria.length).toBeGreaterThan(0);
      expect(mod.assessmentRubric.totalPoints).toBe(
        mod.assessmentRubric.criteria.reduce((acc, c) => acc + c.points, 0),
      );
    }
  });

  it("has scorecard contribution for every module", () => {
    for (const item of registry) {
      const mod = course.modulesById[item.id];
      expect(mod.scorecardContribution.length).toBeGreaterThan(0);
      const sum = mod.scorecardContribution.reduce((acc, sc) => acc + sc.weight, 0);
      expect(sum).toBeCloseTo(1, 5);
    }
  });

  it("has bilingual key points for every lesson", () => {
    for (const item of registry) {
      const mod = course.modulesById[item.id];
      for (const lesson of mod.lessons) {
        for (const kp of lesson.keyPoints) {
          expect(kp.en).toBeTruthy();
          expect(kp.es).toBeTruthy();
        }
      }
    }
  });

  it("handles optional fields gracefully across all 17 modules", () => {
    const allModuleIds = registry.map((r) => r.id);

    // Every module must have these top-level fields
    for (const id of allModuleIds) {
      const mod = course.modulesById[id];
      expect(mod.mappedDimensions.length).toBeGreaterThan(0);
      expect(mod.outcomes.length).toBeGreaterThan(0);
      expect(mod.capstoneConnection).toBeDefined();
      expect(mod.capstoneConnection.summary.en).toBeTruthy();
      expect(mod.tags.length).toBeGreaterThan(0);
    }

    // Practical exercises and error library may be empty but must be arrays
    for (const id of allModuleIds) {
      const mod = course.modulesById[id];
      expect(Array.isArray(mod.practicalExercises)).toBe(true);
      expect(Array.isArray(mod.errorLibrary)).toBe(true);
    }
  });

  it("reports the correct total number of modules", () => {
    expect(registry.length).toBe(17);
    expect(Object.keys(CRC_ELITE_MODULES_BY_ID).length).toBe(17);
  });
});
