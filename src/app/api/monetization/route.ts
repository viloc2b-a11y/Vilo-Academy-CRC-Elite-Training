import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserProfile } from "@/lib/progress/helpers";
import {
  getPricingPlans,
  createOrder,
  getUserEnrollment,
  getUserOrders,
} from "@/lib/monetization/helpers";

// ---------------------------------------------------------------------------
// GET /api/monetization?plans=true  — pricing plans
// GET /api/monetization             — user enrollment info
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Public: pricing plans
  if (searchParams.get("plans") === "true") {
    const plans = await getPricingPlans();
    return NextResponse.json({ plans });
  }

  // Authenticated: user enrollment
  const user = await getCurrentUserProfile();
  if (!user) {
    return NextResponse.json({ authenticated: false, enrollment: null, orders: [] });
  }

  const [enrollment, orders] = await Promise.all([
    getUserEnrollment(user.id),
    getUserOrders(user.id),
  ]);

  return NextResponse.json({
    authenticated: true,
    enrollment,
    orders,
  });
}

// ---------------------------------------------------------------------------
// POST /api/monetization
// Body: { action: "enroll", planId, pilotCohort?: boolean }
// Body: { action: "pilot-signup", ...PilotCohortSignup }
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  const user = await getCurrentUserProfile();
  if (!user) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { action } = body;

  if (action === "enroll") {
    const planId = body.planId as string | undefined;
    const pilotCohort = body.pilotCohort === true;

    if (!planId) {
      return NextResponse.json({ error: "planId is required" }, { status: 400 });
    }

    // Get plan price
    const plans = await getPricingPlans();
    const plan = plans.find((p) => p.plan_id === planId);
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const result = await createOrder(
      user.id,
      planId,
      pilotCohort ? 0 : plan.price_cents,
      plan.currency,
      pilotCohort,
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error ?? "Failed to enroll" },
        { status: 500 },
      );
    }

    return NextResponse.json({ order: result.order });
  }

  if (action === "pilot-signup") {
    // Pilot cohort signup — just record intent, no payment
    const planId = "crc_professional"; // Default to full program for pilot

    const result = await createOrder(user.id, planId, 0, "usd", true);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error ?? "Failed to register for pilot" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Registered for pilot cohort",
      order: result.order,
    });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
