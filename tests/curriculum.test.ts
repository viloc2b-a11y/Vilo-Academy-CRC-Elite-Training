import { describe, expect, it } from "vitest";
import {
  CRC_ELITE_COURSE,
  CRC_ELITE_MODULE_REGISTRY,
  CRC_ELITE_MODULES_BY_ID,
  MODULE_AGGREGATE_WEIGHTS,
  validateRubricTotals,
} from "@/curriculum-engine";

describe("curriculum registry", () => {
  it("keeps every module in modulesById visible in the registry", () => {
    const registeredIds = new Set(CRC_ELITE_MODULE_REGISTRY.map((m) => m.id));

    expect(Object.keys(CRC_ELITE_MODULES_BY_ID).sort()).toEqual(
      [...registeredIds].sort(),
    );
    expect(CRC_ELITE_COURSE.registry.find((m) => m.id === "M17")).toBeDefined();
  });

  it("keeps pre-capstone aggregate weights normalized", () => {
    const sum = Object.values(MODULE_AGGREGATE_WEIGHTS).reduce(
      (acc, weight) => acc + weight,
      0,
    );

    expect(sum).toBeCloseTo(1, 6);
  });

  it("keeps module rubric declared totals aligned with criteria", () => {
    const errors = Object.values(CRC_ELITE_MODULES_BY_ID).flatMap((mod) =>
      validateRubricTotals(mod.assessmentRubric).errors,
    );

    expect(errors).toEqual([]);
  });
});
