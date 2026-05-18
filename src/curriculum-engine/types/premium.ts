import type { BilingualText, CompetencyDimension, LearningLevel } from "./common";

export const VILO_OS_MODULE_STATUSES = ["pilot", "active", "retired"] as const;
export type ViloOsModuleStatus = (typeof VILO_OS_MODULE_STATUSES)[number];

export const CRC_ROLE_PATHWAY_IDS = [
  "new_crc",
  "operational_crc",
  "lead_crc",
] as const;
export type CrcRolePathwayId = (typeof CRC_ROLE_PATHWAY_IDS)[number];

export const CERTIFICATION_LEVEL_IDS = [
  "completion",
  "operational_readiness",
  "elite_crc",
  "lead_crc_endorsement",
] as const;
export type CertificationLevelId = (typeof CERTIFICATION_LEVEL_IDS)[number];

export const MOCK_STUDY_ARTIFACT_KINDS = [
  "protocol",
  "source",
  "edc",
  "log",
  "email",
  "worksheet",
  "regulatory",
  "budget",
  "ip_accountability",
] as const;
export type MockStudyArtifactKind = (typeof MOCK_STUDY_ARTIFACT_KINDS)[number];

export interface ViloOsTrainingModule {
  readonly moduleId: string;
  readonly productName: BilingualText;
  readonly operatingPromise: BilingualText;
  readonly status: ViloOsModuleStatus;
  readonly ownerFunction: string;
  readonly primaryUsers: readonly CrcRolePathwayId[];
  readonly integrationSurfaces: readonly string[];
  readonly successMetrics: readonly BilingualText[];
}

export interface RolePathwayMilestone {
  readonly milestoneId: string;
  readonly title: BilingualText;
  readonly moduleIds: readonly string[];
  readonly minimumLevel: LearningLevel;
  readonly operationalGate: BilingualText;
}

export interface RolePathway {
  readonly pathwayId: CrcRolePathwayId;
  readonly title: BilingualText;
  readonly targetLearner: BilingualText;
  readonly readinessOutcome: BilingualText;
  readonly modules: readonly string[];
  readonly milestones: readonly RolePathwayMilestone[];
}

export interface MockStudyArtifact {
  readonly artifactId: string;
  readonly kind: MockStudyArtifactKind;
  readonly title: BilingualText;
  readonly moduleIds: readonly string[];
  readonly ownerRole: string;
  readonly operationalUse: BilingualText;
  readonly premiumDeliverable: BilingualText;
}

export interface MockStudySubject {
  readonly subjectId: string;
  readonly status: "screening" | "randomized" | "active" | "discontinued" | "screen_failed";
  readonly riskThread: BilingualText;
  readonly artifactIds: readonly string[];
}

export interface LongitudinalMockStudy {
  readonly studyId: string;
  readonly title: BilingualText;
  readonly therapeuticArea: BilingualText;
  readonly phase: string;
  readonly protocolSynopsis: BilingualText;
  readonly sponsorPressure: BilingualText;
  readonly weeks: readonly {
    readonly week: number;
    readonly theme: BilingualText;
    readonly moduleIds: readonly string[];
    readonly decisionPoint: BilingualText;
    readonly artifactsDue: readonly string[];
  }[];
  readonly subjects: readonly MockStudySubject[];
  readonly artifacts: readonly MockStudyArtifact[];
}

export interface CertificationLevel {
  readonly levelId: CertificationLevelId;
  readonly title: BilingualText;
  readonly eligiblePathways: readonly CrcRolePathwayId[];
  readonly evidenceRequired: readonly BilingualText[];
  readonly minimumSignals: Readonly<{
    readonly capstoneNormalized?: number;
    readonly modulesRequired?: readonly string[];
    readonly artifactCount?: number;
    readonly dimensions?: Readonly<Partial<Record<CompetencyDimension, number>>>;
  }>;
}

export const OPERATIONAL_TEMPLATE_FIELD_TYPES = [
  "short_text",
  "long_text",
  "date",
  "datetime",
  "select",
  "number",
  "checkbox",
  "table",
] as const;
export type OperationalTemplateFieldType =
  (typeof OPERATIONAL_TEMPLATE_FIELD_TYPES)[number];

export interface OperationalTemplateField {
  readonly fieldId: string;
  readonly label: BilingualText;
  readonly fieldType: OperationalTemplateFieldType;
  readonly required: boolean;
  readonly placeholder?: BilingualText;
  readonly options?: readonly BilingualText[];
}

export interface OperationalTemplateSection {
  readonly sectionId: string;
  readonly title: BilingualText;
  readonly purpose: BilingualText;
  readonly fields: readonly OperationalTemplateField[];
}

export interface OperationalArtifactTemplate {
  readonly templateId: string;
  readonly artifactId: string;
  readonly title: BilingualText;
  readonly ownerRole: string;
  readonly completionStandard: BilingualText;
  readonly escalationTriggers: readonly BilingualText[];
  readonly sections: readonly OperationalTemplateSection[];
  readonly reviewerChecklist: readonly BilingualText[];
}
