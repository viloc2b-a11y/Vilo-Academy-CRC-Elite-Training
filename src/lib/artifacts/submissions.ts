import {
  CRC_CERTIFICATION_LEVELS,
  ONCOLOGY_OSCE_MOCK_STUDY,
  OPERATIONAL_ARTIFACT_TEMPLATE_BY_ARTIFACT_ID,
  OPERATIONAL_ARTIFACT_TEMPLATES_BY_ID,
} from "@/curriculum-engine";
import type { CertificationLevelId } from "@/curriculum-engine";

export const ARTIFACT_SUBMISSION_STATUSES = [
  "draft",
  "submitted",
  "reviewed",
  "needs_revision",
] as const;

export type ArtifactSubmissionStatus =
  (typeof ARTIFACT_SUBMISSION_STATUSES)[number];

export type ArtifactSubmissionPayload = {
  templateId?: unknown;
  artifactId?: unknown;
  status?: unknown;
  fieldValues?: unknown;
  checklistState?: unknown;
};

export type ValidArtifactSubmission = {
  templateId: string;
  artifactId: string;
  studyId: string;
  status: ArtifactSubmissionStatus;
  fieldValues: Record<string, string>;
  checklistState: Record<string, boolean>;
};

export type ArtifactSubmissionSummary = {
  id?: string;
  template_id: string;
  artifact_id: string;
  status: ArtifactSubmissionStatus;
  field_values?: Record<string, string>;
  checklist_state?: Record<string, boolean>;
  submitted_at?: string | null;
  updated_at?: string | null;
};

export type CertificationEvidenceReadiness = {
  levelId: CertificationLevelId;
  title: { en: string; es: string };
  requiredArtifactCount: number;
  submittedArtifactCount: number;
  completedChecklistCount: number;
  totalChecklistCount: number;
  availableTemplateCount: number;
  ready: boolean;
  blockedByTemplateCoverage: boolean;
  missingArtifactIds: readonly string[];
};

type ManifestArtifactStatus = ArtifactSubmissionStatus | "not_started";

export type CertificationEvidenceManifest = {
  studyId: string;
  generatedAtIso: string;
  totalArtifacts: number;
  submittedArtifacts: number;
  reviewedArtifacts: number;
  draftArtifacts: number;
  readiness: readonly CertificationEvidenceReadiness[];
  artifacts: readonly {
    artifactId: string;
    templateId: string;
    title: { en: string; es: string };
    status: ManifestArtifactStatus;
    checklistComplete: number;
    checklistTotal: number;
    submittedAt?: string | null;
    updatedAt?: string | null;
  }[];
};

export function validateArtifactSubmissionPayload(
  payload: ArtifactSubmissionPayload,
): { ok: true; value: ValidArtifactSubmission } | { ok: false; error: string } {
  if (typeof payload.templateId !== "string" || !payload.templateId) {
    return { ok: false, error: "templateId required" };
  }

  const template = OPERATIONAL_ARTIFACT_TEMPLATES_BY_ID[payload.templateId];
  if (!template) return { ok: false, error: "templateId not found" };

  const artifactId =
    typeof payload.artifactId === "string" && payload.artifactId
      ? payload.artifactId
      : template.artifactId;

  if (artifactId !== template.artifactId) {
    return { ok: false, error: "artifactId does not match template" };
  }

  if (!OPERATIONAL_ARTIFACT_TEMPLATE_BY_ARTIFACT_ID[artifactId]) {
    return { ok: false, error: "artifact template not found" };
  }

  const artifact = ONCOLOGY_OSCE_MOCK_STUDY.artifacts.find(
    (item) => item.artifactId === artifactId,
  );
  if (!artifact) return { ok: false, error: "artifactId not found" };

  const status =
    typeof payload.status === "string" &&
    (ARTIFACT_SUBMISSION_STATUSES as readonly string[]).includes(payload.status)
      ? (payload.status as ArtifactSubmissionStatus)
      : "draft";

  const fieldValues = stringRecord(payload.fieldValues);
  const checklistState = booleanRecord(payload.checklistState);

  return {
    ok: true,
    value: {
      templateId: template.templateId,
      artifactId,
      studyId: ONCOLOGY_OSCE_MOCK_STUDY.studyId,
      status,
      fieldValues,
      checklistState,
    },
  };
}

function stringRecord(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const out: Record<string, string> = {};
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === "string") out[key] = entry.slice(0, 10000);
  }
  return out;
}

function booleanRecord(value: unknown): Record<string, boolean> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const out: Record<string, boolean> = {};
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry === "boolean") out[key] = entry;
  }
  return out;
}

export function evaluateCertificationEvidenceReadiness(
  submissions: readonly ArtifactSubmissionSummary[],
): readonly CertificationEvidenceReadiness[] {
  const submittedByArtifactId = new Map<string, ArtifactSubmissionSummary>();
  for (const submission of submissions) {
    if (submission.status === "submitted" || submission.status === "reviewed") {
      submittedByArtifactId.set(submission.artifact_id, submission);
    }
  }

  const templatedArtifactIds = Object.keys(OPERATIONAL_ARTIFACT_TEMPLATE_BY_ARTIFACT_ID);

  return CRC_CERTIFICATION_LEVELS.map((level) => {
    const requiredArtifactCount = level.minimumSignals.artifactCount ?? 0;
    const requiredArtifactIds = templatedArtifactIds.slice(0, requiredArtifactCount);
    const blockedByTemplateCoverage = requiredArtifactCount > templatedArtifactIds.length;
    const missingArtifactIds = requiredArtifactIds.filter(
      (artifactId) => !submittedByArtifactId.has(artifactId),
    );

    let completedChecklistCount = 0;
    let totalChecklistCount = 0;
    for (const artifactId of requiredArtifactIds) {
      const template = OPERATIONAL_ARTIFACT_TEMPLATE_BY_ARTIFACT_ID[artifactId];
      if (!template) continue;
      totalChecklistCount += template.reviewerChecklist.length;
      const submission = submittedByArtifactId.get(artifactId);
      const checklist = submission?.checklist_state ?? {};
      for (let idx = 0; idx < template.reviewerChecklist.length; idx += 1) {
        if (checklist[`${template.templateId}.${idx}`]) {
          completedChecklistCount += 1;
        }
      }
    }

    const submittedArtifactCount = requiredArtifactIds.length - missingArtifactIds.length;

    return {
      levelId: level.levelId,
      title: level.title,
      requiredArtifactCount,
      submittedArtifactCount,
      completedChecklistCount,
      totalChecklistCount,
      availableTemplateCount: templatedArtifactIds.length,
      ready:
        requiredArtifactCount > 0 &&
        !blockedByTemplateCoverage &&
        missingArtifactIds.length === 0 &&
        (totalChecklistCount === 0 || completedChecklistCount === totalChecklistCount),
      blockedByTemplateCoverage,
      missingArtifactIds,
    };
  });
}

export function buildCertificationEvidenceManifest(
  submissions: readonly ArtifactSubmissionSummary[],
  generatedAtIso = new Date().toISOString(),
): CertificationEvidenceManifest {
  const submissionByArtifactId = new Map<string, ArtifactSubmissionSummary>();
  for (const submission of submissions) {
    submissionByArtifactId.set(submission.artifact_id, submission);
  }

  const artifacts = ONCOLOGY_OSCE_MOCK_STUDY.artifacts.map((artifact) => {
    const template = OPERATIONAL_ARTIFACT_TEMPLATE_BY_ARTIFACT_ID[artifact.artifactId];
    const submission = submissionByArtifactId.get(artifact.artifactId);
    let checklistComplete = 0;
    const checklistTotal = template?.reviewerChecklist.length ?? 0;
    for (let idx = 0; idx < checklistTotal; idx += 1) {
      if (submission?.checklist_state?.[`${template?.templateId}.${idx}`]) {
        checklistComplete += 1;
      }
    }

    const status: ManifestArtifactStatus = submission?.status ?? "not_started";

    return {
      artifactId: artifact.artifactId,
      templateId: template?.templateId ?? "",
      title: artifact.title,
      status,
      checklistComplete,
      checklistTotal,
      submittedAt: submission?.submitted_at ?? null,
      updatedAt: submission?.updated_at ?? null,
    };
  });

  return {
    studyId: ONCOLOGY_OSCE_MOCK_STUDY.studyId,
    generatedAtIso,
    totalArtifacts: artifacts.length,
    submittedArtifacts: artifacts.filter(
      (artifact) => artifact.status === "submitted" || artifact.status === "reviewed",
    ).length,
    reviewedArtifacts: artifacts.filter((artifact) => artifact.status === "reviewed").length,
    draftArtifacts: artifacts.filter((artifact) => artifact.status === "draft").length,
    readiness: evaluateCertificationEvidenceReadiness(submissions),
    artifacts,
  };
}
