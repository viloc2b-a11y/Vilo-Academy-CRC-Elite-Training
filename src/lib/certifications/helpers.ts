/**
 * Certification helpers — eligibility engine, credential management, verification.
 */

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isValidModuleId } from "@/lib/progress/helpers";
import {
  CRC_CERTIFICATION_LEVELS,
  CRC_ELITE_MODULE_REGISTRY,
  type CertificationLevel,
} from "@/curriculum-engine";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CertificationStatus = "eligible" | "issued" | "revoked" | "expired";
export type CertificationLevelId = "completion" | "operational_readiness" | "elite_crc" | "lead_crc_endorsement";

export interface CertificationRow {
  id: string;
  user_id: string;
  certification_level: string;
  overall_score: number;
  modules_completed: number;
  assessments_passed: number;
  issued_at: string | null;
  verification_id: string;
  certificate_version: string;
  status: CertificationStatus;
  created_at: string;
  updated_at: string;
}

export interface EligibilityResult {
  levelId: string;
  title: { en: string; es: string };
  eligible: boolean;
  reasons: string[];
  modulesCompleted: number;
  modulesRequired: number;
  assessmentsPassed: number;
  assessmentsRequired: number;
}

export interface CertificationCenterData {
  allLevels: EligibilityResult[];
  issuedCertifications: CertificationRow[];
  pendingCertifications: CertificationRow[];
  overallProgress: {
    modulesCompleted: number;
    totalModules: number;
    assessmentsPassed: number;
    totalAssessments: number;
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

/**
 * Generate a verification ID: VACRC-YYYY-8CHARHEX
 */
export function generateVerificationId(): string {
  const year = new Date().getFullYear();
  const hex = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 16).toString(16).toUpperCase(),
  ).join("");
  return `VACRC-${year}-${hex}`;
}

/**
 * Get certification level metadata by ID.
 */
export function getCertificationLevel(levelId: string): CertificationLevel | undefined {
  return CRC_CERTIFICATION_LEVELS.find((l) => l.levelId === levelId);
}

/**
 * Get all certification levels with display info.
 */
export function getCertificationLevels(): CertificationLevel[] {
  return [...CRC_CERTIFICATION_LEVELS];
}

/**
 * Evaluate eligibility for ALL certification levels based on learner data.
 * Returns results for each level with pass/fail and reasons.
 */
export async function evaluateCertificationEligibility(
  userId: string,
): Promise<EligibilityResult[]> {
  if (!isSupabaseConfigured()) {
    return getCertificationLevels().map((l) => ({
      levelId: l.levelId,
      title: l.title,
      eligible: false,
      reasons: ["Database not configured"],
      modulesCompleted: 0,
      modulesRequired: l.minimumSignals.modulesRequired?.length ?? 0,
      assessmentsPassed: 0,
      assessmentsRequired: l.minimumSignals.modulesRequired?.length ?? 0,
    }));
  }

  const supabase = createServerSupabaseClient();

  // Fetch progress and assessment data
  const [progressRes, assessmentRes] = await Promise.all([
    supabase.from("module_progress").select("*").eq("user_id", userId),
    supabase.from("assessment_attempts").select("*").eq("user_id", userId),
  ]);

  const progressRows = (progressRes.data ?? []) as Array<{
    module_id: string;
    status: string;
  }>;
  const attemptRows = (assessmentRes.data ?? []) as Array<{
    module_id: string;
    passed: boolean;
    submitted_at: string;
  }>;

  // Build maps
  const completedModules = new Set(
    progressRows.filter((r) => r.status === "completed").map((r) => r.module_id),
  );

  // Latest attempt per module
  const latestPassed = new Map<string, boolean>();
  for (const attempt of attemptRows) {
    const existing = latestPassed.get(attempt.module_id);
    if (!existing || attempt.submitted_at > existing.toString()) {
      latestPassed.set(attempt.module_id, attempt.passed);
    }
  }

  const totalModules = CRC_ELITE_MODULE_REGISTRY.length;
  const modulesCompletedCount = completedModules.size;
  const assessmentsPassedCount = Array.from(latestPassed.values()).filter(Boolean).length;
  const totalAssessable = CRC_ELITE_MODULE_REGISTRY.filter(
    (r) => r.category !== "capstone",
  ).length;

  // Evaluate each level
  return getCertificationLevels().map((level) => {
    const reasons: string[] = [];
    const minSignals = level.minimumSignals;

    // Check required modules
    const requiredModules = minSignals.modulesRequired ?? [];
    const completedRequired = requiredModules.filter((m) => completedModules.has(m)).length;
    const allModulesComplete = completedRequired === requiredModules.length;
    if (!allModulesComplete) {
      reasons.push(
        `Modules: ${completedRequired}/${requiredModules.length} completed`,
      );
    }

    // Check assessments passed for required modules
    const assessmentsRequired = requiredModules.length;
    const passedRequired = requiredModules.filter((m) => latestPassed.get(m) === true).length;
    const allAssessmentsPassed = passedRequired === assessmentsRequired;
    if (!allAssessmentsPassed) {
      reasons.push(
        `Assessments: ${passedRequired}/${assessmentsRequired} passed`,
      );
    }

    // Check dimension thresholds (approximate: we check if they have at least completed the modules)
    // For a full dimension check we'd need the scoring engine — simplified for MVP

    // Overall eligibility
    const eligible = allModulesComplete && allAssessmentsPassed;

    return {
      levelId: level.levelId,
      title: level.title,
      eligible,
      reasons,
      modulesCompleted: completedRequired,
      modulesRequired: requiredModules.length,
      assessmentsPassed: passedRequired,
      assessmentsRequired,
    };
  });
}

/**
 * Issue a certification for a specific level.
 */
export async function issueCertification(
  userId: string,
  levelId: string,
  overallScore: number,
  modulesCompleted: number,
  assessmentsPassed: number,
): Promise<{ success: boolean; certification?: CertificationRow; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: "Database not configured" };
  }

  const level = getCertificationLevel(levelId);
  if (!level) {
    return { success: false, error: `Unknown certification level: ${levelId}` };
  }

  // Check if already issued
  const supabase = createServerSupabaseClient();
  const { data: existing } = await supabase
    .from("certifications")
    .select("id, status")
    .eq("user_id", userId)
    .eq("certification_level", levelId)
    .maybeSingle();

  if (existing && existing.status === "issued") {
    return { success: false, error: "Certification already issued for this level" };
  }

  if (existing && existing.status === "eligible") {
    // Update to issued
    const { data, error } = await supabase
      .from("certifications")
      .update({
        status: "issued",
        issued_at: new Date().toISOString(),
        overall_score: overallScore,
        modules_completed: modulesCompleted,
        assessments_passed: assessmentsPassed,
      })
      .eq("id", existing.id)
      .select()
      .single();

    if (error) return { success: false, error: error.message };
    return { success: true, certification: data as unknown as CertificationRow };
  }

  // Create new
  const verificationId = generateVerificationId();

  const { data, error } = await supabase
    .from("certifications")
    .insert({
      user_id: userId,
      certification_level: levelId,
      overall_score: overallScore,
      modules_completed: modulesCompleted,
      assessments_passed: assessmentsPassed,
      verification_id: verificationId,
      status: "issued",
      issued_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) return { success: false, error: error.message };
  return { success: true, certification: data as unknown as CertificationRow };
}

/**
 * Get all certifications for a user.
 */
export async function getUserCertifications(
  userId: string,
): Promise<CertificationRow[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("certifications")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    return (data ?? []) as CertificationRow[];
  } catch {
    return [];
  }
}

/**
 * Verify a certification by verification ID (public).
 */
export async function verifyCertification(
  verificationId: string,
): Promise<{
  valid: boolean;
  certification?: {
    level: string;
    status: string;
    issued_at: string | null;
    version: string;
  };
  error?: string;
}> {
  if (!isSupabaseConfigured()) {
    return { valid: false, error: "Verification unavailable" };
  }

  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("certifications")
      .select("certification_level, status, issued_at, certificate_version")
      .eq("verification_id", verificationId)
      .maybeSingle();

    if (!data) {
      return { valid: false, error: "Invalid verification ID" };
    }

    const valid = data.status === "issued" || data.status === "expired";
    const levelMeta = getCertificationLevel(data.certification_level);

    return {
      valid,
      certification: {
        level: levelMeta?.title.en ?? data.certification_level,
        status: data.status,
        issued_at: data.issued_at,
        version: data.certificate_version,
      },
    };
  } catch {
    return { valid: false, error: "Verification service error" };
  }
}

/**
 * Build certification center data for the dashboard/center page.
 */
export async function buildCertificationCenterData(
  userId: string,
): Promise<CertificationCenterData> {
  const [eligibilityResults, userCerts] = await Promise.all([
    evaluateCertificationEligibility(userId),
    getUserCertifications(userId),
  ]);

  const issuedCertifications = userCerts.filter(
    (c) => c.status === "issued",
  );
  const pendingCertifications = userCerts.filter(
    (c) => c.status === "eligible",
  );

  // Overall progress
  const supabase = createServerSupabaseClient();
  const { data: progressRows } = await supabase
    .from("module_progress")
    .select("module_id, status")
    .eq("user_id", userId);

  const modulesCompleted =
    progressRows?.filter((r) => r.status === "completed").length ?? 0;
  const totalModules = CRC_ELITE_MODULE_REGISTRY.length;

  const { data: attemptRows } = await supabase
    .from("assessment_attempts")
    .select("module_id, passed, submitted_at")
    .eq("user_id", userId);

  // Latest per module
  const latestPassed = new Map<string, boolean>();
  for (const a of attemptRows ?? []) {
    latestPassed.set(a.module_id, a.passed);
  }
  const assessmentsPassed = Array.from(latestPassed.values()).filter(Boolean).length;
  const totalAssessable = CRC_ELITE_MODULE_REGISTRY.filter(
    (r) => r.id !== "M16" && r.id !== "M17",
  ).length;

  return {
    allLevels: eligibilityResults,
    issuedCertifications,
    pendingCertifications,
    overallProgress: {
      modulesCompleted,
      totalModules,
      assessmentsPassed,
      totalAssessments: totalAssessable,
    },
  };
}
