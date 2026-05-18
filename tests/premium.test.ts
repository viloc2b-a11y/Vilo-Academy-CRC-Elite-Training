import { describe, expect, it } from "vitest";
import {
  CRC_CERTIFICATION_LEVELS,
  CRC_ELITE_MODULES_BY_ID,
  CRC_ROLE_PATHWAYS,
  ONCOLOGY_OSCE_MOCK_STUDY,
  VILO_OS_CRC_ACADEMY_MODULE,
} from "@/curriculum-engine";

describe("premium VILO OS academy layer", () => {
  it("defines the academy as an active VILO OS module", () => {
    expect(VILO_OS_CRC_ACADEMY_MODULE.moduleId).toBe(
      "vilo-os.crc-elite-operating-academy",
    );
    expect(VILO_OS_CRC_ACADEMY_MODULE.status).toBe("active");
    expect(VILO_OS_CRC_ACADEMY_MODULE.primaryUsers).toEqual([
      "new_crc",
      "operational_crc",
      "lead_crc",
    ]);
  });

  it("keeps role pathways mapped to real curriculum modules", () => {
    const moduleIds = new Set(Object.keys(CRC_ELITE_MODULES_BY_ID));

    for (const pathway of CRC_ROLE_PATHWAYS) {
      expect(pathway.modules.length).toBeGreaterThan(0);
      for (const moduleId of pathway.modules) {
        expect(moduleIds.has(moduleId)).toBe(true);
      }
      for (const milestone of pathway.milestones) {
        for (const moduleId of milestone.moduleIds) {
          expect(moduleIds.has(moduleId)).toBe(true);
        }
      }
    }
  });

  it("anchors every mock-study artifact to real modules and every week to existing artifacts", () => {
    const moduleIds = new Set(Object.keys(CRC_ELITE_MODULES_BY_ID));
    const artifactIds = new Set(ONCOLOGY_OSCE_MOCK_STUDY.artifacts.map((a) => a.artifactId));

    expect(ONCOLOGY_OSCE_MOCK_STUDY.studyId).toBe("VILO-ONC-301");
    expect(ONCOLOGY_OSCE_MOCK_STUDY.weeks).toHaveLength(6);
    expect(ONCOLOGY_OSCE_MOCK_STUDY.artifacts.length).toBeGreaterThanOrEqual(18);

    for (const artifact of ONCOLOGY_OSCE_MOCK_STUDY.artifacts) {
      expect(artifact.moduleIds.length).toBeGreaterThan(0);
      for (const moduleId of artifact.moduleIds) {
        expect(moduleIds.has(moduleId)).toBe(true);
      }
    }

    for (const week of ONCOLOGY_OSCE_MOCK_STUDY.weeks) {
      for (const artifactId of week.artifactsDue) {
        expect(artifactIds.has(artifactId)).toBe(true);
      }
    }
  });

  it("orders certification levels from completion to lead endorsement", () => {
    expect(CRC_CERTIFICATION_LEVELS.map((level) => level.levelId)).toEqual([
      "completion",
      "operational_readiness",
      "elite_crc",
      "lead_crc_endorsement",
    ]);
  });
});
