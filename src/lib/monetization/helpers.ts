/**
 * Monetization helpers — pricing plans, enrollment, pilot cohort.
 */

import { createServerSupabaseClient } from "@/lib/supabase/server";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PricingPlan {
  id: string;
  plan_id: string;
  name_i18n: { en: string; es: string };
  description_i18n: { en: string; es: string };
  price_cents: number;
  currency: string;
  certification_level: string | null;
  features: string[];
  is_active: boolean;
  sort_order: number;
}

export interface OrderRow {
  id: string;
  user_id: string;
  plan_id: string;
  status: "pending" | "confirmed" | "active" | "expired" | "cancelled";
  amount_cents: number;
  currency: string;
  payment_method: string | null;
  payment_ref: string | null;
  pilot_cohort: boolean;
  enrolled_at: string | null;
  activated_at: string | null;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface PilotCohortSignup {
  fullName: string;
  email: string;
  role: string;
  organization: string;
  experience: string;
  goals: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

/**
 * Get all active pricing plans.
 */
export async function getPricingPlans(): Promise<PricingPlan[]> {
  if (!isSupabaseConfigured()) {
    return getDefaultPlans();
  }

  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("pricing_plans")
      .select("*")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    return (data ?? []) as PricingPlan[];
  } catch {
    return getDefaultPlans();
  }
}

/**
 * Fallback plans when DB is unavailable.
 */
export function getDefaultPlans(): PricingPlan[] {
  return [
    {
      id: "crc_foundations",
      plan_id: "crc_foundations",
      name_i18n: { en: "CRC Foundations", es: "Fundamentos CRC" },
      description_i18n: {
        en: "Core CRC training for new coordinators.",
        es: "Formación CRC esencial para coordinadores nuevos.",
      },
      price_cents: 29900,
      currency: "usd",
      certification_level: "operational_readiness",
      features: [
        "8 core modules (M1-M8)",
        "Bilingual (EN/ES)",
        "Self-paced learning",
        "Module assessments",
        "Completion certificate",
        "Verification ID",
      ],
      is_active: true,
      sort_order: 1,
    },
    {
      id: "crc_professional",
      plan_id: "crc_professional",
      name_i18n: { en: "CRC Professional", es: "CRC Profesional" },
      description_i18n: {
        en: "Full CRC Elite training. All 15 modules, capstone OSCE.",
        es: "Formación CRC Elite completa. Los 15 módulos, capstone OSCE.",
      },
      price_cents: 59900,
      currency: "usd",
      certification_level: "elite_crc",
      features: [
        "All 15 modules (M1-M15)",
        "Capstone OSCE (6 stations)",
        "Bilingual (EN/ES)",
        "Self-paced learning",
        "Module assessments",
        "Elite CRC certificate",
        "Verification ID",
        "Employer verification",
      ],
      is_active: true,
      sort_order: 2,
    },
    {
      id: "crc_elite_plus",
      plan_id: "crc_elite_plus",
      name_i18n: { en: "CRC Elite Plus", es: "CRC Elite Plus" },
      description_i18n: {
        en: "Full CRC Elite + lead endorsement.",
        es: "CRC Elite completo + endoso lead.",
      },
      price_cents: 99900,
      currency: "usd",
      certification_level: "lead_crc_endorsement",
      features: [
        "All 17 modules (M1-M17)",
        "Capstone OSCE + crisis command",
        "Bilingual (EN/ES)",
        "Self-paced learning",
        "All assessments",
        "Elite CRC certificate",
        "Lead CRC endorsement",
        "Verification ID",
        "Employer verification",
        "Priority support",
      ],
      is_active: true,
      sort_order: 3,
    },
  ];
}

/**
 * Create an enrollment order.
 */
export async function createOrder(
  userId: string,
  planId: string,
  amountCents: number,
  currency: string,
  pilotCohort: boolean,
): Promise<{ success: boolean; order?: OrderRow; error?: string }> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: "Database not configured" };
  }

  // Check existing active enrollment for same plan
  try {
    const supabase = createServerSupabaseClient();
    const { data: existing } = await supabase
      .from("orders")
      .select("id, status")
      .eq("user_id", userId)
      .eq("plan_id", planId)
      .in("status", ["pending", "confirmed", "active"])
      .maybeSingle();

    if (existing) {
      return { success: false, error: "Already enrolled in this plan" };
    }

    const status = pilotCohort ? "pending" : "pending";

    const { data, error } = await supabase
      .from("orders")
      .insert({
        user_id: userId,
        plan_id: planId,
        status,
        amount_cents: amountCents,
        currency,
        pilot_cohort: pilotCohort,
      })
      .select()
      .single();

    if (error) return { success: false, error: error.message };
    return { success: true, order: data as unknown as OrderRow };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to create order",
    };
  }
}

/**
 * Get user's active enrollment.
 */
export async function getUserEnrollment(
  userId: string,
): Promise<OrderRow | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userId)
      .in("status", ["confirmed", "active"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    return (data ?? null) as OrderRow | null;
  } catch {
    return null;
  }
}

/**
 * Get user's orders.
 */
export async function getUserOrders(
  userId: string,
): Promise<OrderRow[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    return (data ?? []) as OrderRow[];
  } catch {
    return [];
  }
}

/**
 * Activate a pilot cohort order (admin function, simplified for MVP).
 */
export async function activateOrder(
  orderId: string,
): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;

  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase
      .from("orders")
      .update({
        status: "active",
        activated_at: new Date().toISOString(),
      })
      .eq("id", orderId);

    return !error;
  } catch {
    return false;
  }
}
