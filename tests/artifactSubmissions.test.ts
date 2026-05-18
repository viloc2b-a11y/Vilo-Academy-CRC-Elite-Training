import { describe, expect, it } from "vitest";
import {
  buildCertificationEvidenceManifest,
  evaluateCertificationEvidenceReadiness,
  validateArtifactSubmissionPayload,
} from "@/lib/artifacts/submissions";
import { OPERATIONAL_ARTIFACT_TEMPLATES } from "@/curriculum-engine";

describe("artifact submission validation", () => {
  it("accepts a valid template submission and normalizes study metadata", () => {
    const parsed = validateArtifactSubmissionPayload({
      templateId: "TPL.FEASIBILITY_MEMO",
      artifactId: "ART.FEASIBILITY_MEMO",
      status: "submitted",
      fieldValues: { recommendation: "Renegotiate", ignored: 123 },
      checklistState: { "TPL.FEASIBILITY_MEMO.0": true, bad: "yes" },
    });

    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(parsed.value.studyId).toBe("VILO-ONC-301");
    expect(parsed.value.status).toBe("submitted");
    expect(parsed.value.fieldValues).toEqual({ recommendation: "Renegotiate" });
    expect(parsed.value.checklistState).toEqual({
      "TPL.FEASIBILITY_MEMO.0": true,
    });
  });

  it("rejects mismatched artifact and template pairs", () => {
    const parsed = validateArtifactSubmissionPayload({
      templateId: "TPL.FEASIBILITY_MEMO",
      artifactId: "ART.AE_LOG",
    });

    expect(parsed).toEqual({
      ok: false,
      error: "artifactId does not match template",
    });
  });

  it("rejects unknown templates", () => {
    const parsed = validateArtifactSubmissionPayload({
      templateId: "TPL.UNKNOWN",
    });

    expect(parsed).toEqual({ ok: false, error: "templateId not found" });
  });
});

describe("certification evidence readiness", () => {
  it("marks completion ready when required submitted artifacts have complete checklists", () => {
    const readiness = evaluateCertificationEvidenceReadiness([
      {
        template_id: "TPL.FEASIBILITY_MEMO",
        artifact_id: "ART.FEASIBILITY_MEMO",
        status: "submitted",
        checklist_state: {
          "TPL.FEASIBILITY_MEMO.0": true,
          "TPL.FEASIBILITY_MEMO.1": true,
          "TPL.FEASIBILITY_MEMO.2": true,
        },
      },
      {
        template_id: "TPL.ICF_VERSION_LOG",
        artifact_id: "ART.ICF_VERSION_LOG",
        status: "submitted",
        checklist_state: {
          "TPL.ICF_VERSION_LOG.0": true,
          "TPL.ICF_VERSION_LOG.1": true,
          "TPL.ICF_VERSION_LOG.2": true,
        },
      },
      {
        template_id: "TPL.ELIGIBILITY_PACKET",
        artifact_id: "ART.ELIGIBILITY_PACKET",
        status: "submitted",
        checklist_state: {
          "TPL.ELIGIBILITY_PACKET.0": true,
          "TPL.ELIGIBILITY_PACKET.1": true,
          "TPL.ELIGIBILITY_PACKET.2": true,
        },
      },
      {
        template_id: "TPL.IP_EXCURSION",
        artifact_id: "ART.TEMP_EXCURSION",
        status: "submitted",
        checklist_state: {
          "TPL.IP_EXCURSION.0": true,
          "TPL.IP_EXCURSION.1": true,
          "TPL.IP_EXCURSION.2": true,
        },
      },
    ]);

    const completion = readiness.find((level) => level.levelId === "completion");
    expect(completion?.ready).toBe(true);
  });

  it("allows lead endorsement readiness when every template is submitted with complete checklist", () => {
    const readiness = evaluateCertificationEvidenceReadiness(
      OPERATIONAL_ARTIFACT_TEMPLATES.map((template) => ({
        template_id: template.templateId,
        artifact_id: template.artifactId,
        status: "submitted",
        checklist_state: Object.fromEntries(
          template.reviewerChecklist.map((_, idx) => [
            `${template.templateId}.${idx}`,
            true,
          ]),
        ),
      })),
    );
    const lead = readiness.find((level) => level.levelId === "lead_crc_endorsement");

    expect(lead?.blockedByTemplateCoverage).toBe(false);
    expect(lead?.ready).toBe(true);
  });
});

describe("certification evidence manifest", () => {
  it("builds a packet-level manifest with artifact counters", () => {
    const manifest = buildCertificationEvidenceManifest(
      [
        {
          template_id: "TPL.FEASIBILITY_MEMO",
          artifact_id: "ART.FEASIBILITY_MEMO",
          status: "submitted",
          checklist_state: {
            "TPL.FEASIBILITY_MEMO.0": true,
            "TPL.FEASIBILITY_MEMO.1": true,
            "TPL.FEASIBILITY_MEMO.2": true,
          },
          submitted_at: "2026-05-17T00:00:00.000Z",
          updated_at: "2026-05-17T00:00:00.000Z",
        },
      ],
      "2026-05-17T01:00:00.000Z",
    );

    expect(manifest.studyId).toBe("VILO-ONC-301");
    expect(manifest.totalArtifacts).toBe(18);
    expect(manifest.submittedArtifacts).toBe(1);
    expect(manifest.draftArtifacts).toBe(0);
    expect(manifest.generatedAtIso).toBe("2026-05-17T01:00:00.000Z");
    expect(manifest.artifacts.find((a) => a.artifactId === "ART.FEASIBILITY_MEMO")).toMatchObject({
      status: "submitted",
      checklistComplete: 3,
      checklistTotal: 3,
    });
  });
});
