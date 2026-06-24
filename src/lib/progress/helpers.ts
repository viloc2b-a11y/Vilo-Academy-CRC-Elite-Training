/**
 * Server-side helpers for learner progress.
 * All functions gracefully return fallback values when Supabase is not configured
 * (e.g. during development or when no .env.local exists).
 */

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { CRC_ELITE_MODULE_REGISTRY } from "@/curriculum-engine";

export type ProgressStatus = "not_started" | "in_progress" | "completed";

export interface ModuleProgressRow {
  id: string;
  user_id: string;
  module_id: string;
  status: ProgressStatus;
  started_at: string | null;
  completed_at: string | null;
  last_viewed_at: string | null;
  progress_percent: number;
}

export interface DashboardSummary {
  totalModules: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  percentComplete: number;
  nextRecommended: string | null;
  moduleStatuses: Record<string, ProgressStatus>;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

// ---------------------------------------------------------------------------
// getCurrentUserProfile
// ---------------------------------------------------------------------------
export async function getCurrentUserProfile(): Promise<{
  id: string;
  email: string | null;
  fullName: string | null;
} | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const supabase = createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return null;

    return {
      id: user.id,
      email: user.email ?? null,
      fullName: user.user_metadata?.full_name ?? null,
    };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// getModuleProgress — all progress rows for a user
// ---------------------------------------------------------------------------
export async function getModuleProgress(
  userId: string,
): Promise<ModuleProgressRow[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("module_progress")
      .select("*")
      .eq("user_id", userId);

    return (data ?? []) as ModuleProgressRow[];
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// getProgressForModule — single module progress row
// ---------------------------------------------------------------------------
export async function getProgressForModule(
  userId: string,
  moduleId: string,
): Promise<ModuleProgressRow | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("module_progress")
      .select("*")
      .eq("user_id", userId)
      .eq("module_id", moduleId)
      .maybeSingle();

    return (data ?? null) as ModuleProgressRow | null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// upsertModuleProgress — upsert status and progress_percent
// ---------------------------------------------------------------------------
export async function upsertModuleProgress(
  userId: string,
  moduleId: string,
  status: ProgressStatus,
  progressPercent: number,
  startedAt?: string | null,
  completedAt?: string | null,
): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;

  // Validate module_id against curriculum
  const validModules = CRC_ELITE_MODULE_REGISTRY.map((r) => r.id);
  if (!validModules.includes(moduleId)) return false;

  try {
    const supabase = createServerSupabaseClient();
    const now = new Date().toISOString();

    const { error } = await supabase.from("module_progress").upsert(
      {
        user_id: userId,
        module_id: moduleId,
        status,
        progress_percent: progressPercent,
        last_viewed_at: now,
        started_at: startedAt ?? (status === "in_progress" ? now : null),
        completed_at: completedAt ?? (status === "completed" ? now : null),
      },
      { onConflict: "user_id, module_id" },
    );

    return !error;
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// markModuleStarted — set status to in_progress if not already started
// ---------------------------------------------------------------------------
export async function markModuleStarted(
  userId: string,
  moduleId: string,
): Promise<boolean> {
  const current = await getProgressForModule(userId, moduleId);
  if (current && current.status !== "not_started") return true;

  return upsertModuleProgress(userId, moduleId, "in_progress", 0, new Date().toISOString(), null);
}

// ---------------------------------------------------------------------------
// markModuleComplete — set status to completed with full percent
// ---------------------------------------------------------------------------
export async function markModuleComplete(
  userId: string,
  moduleId: string,
): Promise<boolean> {
  return upsertModuleProgress(
    userId,
    moduleId,
    "completed",
    100,
    undefined,
    new Date().toISOString(),
  );
}

// ---------------------------------------------------------------------------
// buildDashboardSummary — aggregate progress into a dashboard snapshot
// ---------------------------------------------------------------------------
export function buildDashboardSummary(
  progressRows: ModuleProgressRow[],
): DashboardSummary {
  const totalModules = CRC_ELITE_MODULE_REGISTRY.length;
  const registryIds = CRC_ELITE_MODULE_REGISTRY.map((r) => r.id);

  const progressByModule: Record<string, ProgressStatus> = {};
  for (const id of registryIds) {
    progressByModule[id] = "not_started";
  }
  for (const row of progressRows) {
    if (progressByModule[row.module_id] !== undefined) {
      progressByModule[row.module_id] = row.status;
    }
  }

  const completed = Object.values(progressByModule).filter(
    (s) => s === "completed",
  ).length;
  const inProgress = Object.values(progressByModule).filter(
    (s) => s === "in_progress",
  ).length;
  const notStarted = Object.values(progressByModule).filter(
    (s) => s === "not_started",
  ).length;
  const percentComplete =
    totalModules > 0 ? Math.round((completed / totalModules) * 100) : 0;

  // Find the first in-progress module as recommended next
  let nextRecommended: string | null = null;
  for (const id of registryIds) {
    if (progressByModule[id] === "in_progress") {
      nextRecommended = id;
      break;
    }
  }
  // If nothing in progress, pick first not_started
  if (!nextRecommended) {
    for (const id of registryIds) {
      if (progressByModule[id] === "not_started") {
        nextRecommended = id;
        break;
      }
    }
  }

  return {
    totalModules,
    completed,
    inProgress,
    notStarted,
    percentComplete,
    nextRecommended,
    moduleStatuses: progressByModule,
  };
}

// ---------------------------------------------------------------------------
// Valid module IDs
// ---------------------------------------------------------------------------
export const VALID_MODULE_IDS: readonly string[] = CRC_ELITE_MODULE_REGISTRY.map(
  (r) => r.id,
);

export function isValidModuleId(id: string): boolean {
  return VALID_MODULE_IDS.includes(id);
}
