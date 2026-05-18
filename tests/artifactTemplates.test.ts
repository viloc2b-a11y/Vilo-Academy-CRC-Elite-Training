import { describe, expect, it } from "vitest";
import {
  ONCOLOGY_OSCE_MOCK_STUDY,
  OPERATIONAL_ARTIFACT_TEMPLATE_BY_ARTIFACT_ID,
  OPERATIONAL_ARTIFACT_TEMPLATES,
} from "@/curriculum-engine";

describe("operational artifact templates", () => {
  it("anchors every template to a real mock-study artifact", () => {
    const artifactIds = new Set(
      ONCOLOGY_OSCE_MOCK_STUDY.artifacts.map((artifact) => artifact.artifactId),
    );
    const templatedArtifactIds = new Set(
      OPERATIONAL_ARTIFACT_TEMPLATES.map((template) => template.artifactId),
    );

    expect(templatedArtifactIds).toEqual(artifactIds);

    for (const template of OPERATIONAL_ARTIFACT_TEMPLATES) {
      expect(artifactIds.has(template.artifactId)).toBe(true);
      expect(template.sections.length).toBeGreaterThan(0);
      expect(template.reviewerChecklist.length).toBeGreaterThan(0);
      expect(template.escalationTriggers.length).toBeGreaterThan(0);
    }
  });

  it("requires at least one required field in every template section", () => {
    for (const template of OPERATIONAL_ARTIFACT_TEMPLATES) {
      for (const section of template.sections) {
        expect(section.fields.some((field) => field.required)).toBe(true);
      }
    }
  });

  it("covers the highest-value decision and defense artifacts", () => {
    const covered = new Set(Object.keys(OPERATIONAL_ARTIFACT_TEMPLATE_BY_ARTIFACT_ID));

    for (const artifactId of [
      "ART.FEASIBILITY_MEMO",
      "ART.ICF_VERSION_LOG",
      "ART.ELIGIBILITY_PACKET",
      "ART.TEMP_EXCURSION",
      "ART.AE_LOG",
      "ART.MONITOR_FACT_SHEET",
      "ART.CAPA_PLAN",
      "ART.SPONSOR_ESCALATION",
      "ART.INSPECTION_DEFENSE",
    ]) {
      expect(covered.has(artifactId)).toBe(true);
    }
  });
});
