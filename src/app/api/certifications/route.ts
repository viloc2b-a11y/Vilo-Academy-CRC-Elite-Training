import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserProfile } from "@/lib/progress/helpers";
import {
  evaluateCertificationEligibility,
  issueCertification,
  getUserCertifications,
  buildCertificationCenterData,
} from "@/lib/certifications/helpers";

// ---------------------------------------------------------------------------
// GET /api/certifications
// GET /api/certifications?center=true  — full center data
// GET /api/certifications?verify=VACRC-2026-XXXXX  — public verification
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const verifyId = searchParams.get("verify");
  const centerData = searchParams.get("center") === "true";

  // Public verification endpoint — no auth required
  if (verifyId) {
    const { verifyCertification } = await import("@/lib/certifications/helpers");
    const result = await verifyCertification(verifyId);
    return NextResponse.json(result);
  }

  // Authenticated-only from here
  const user = await getCurrentUserProfile();
  if (!user) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  if (centerData) {
    const data = await buildCertificationCenterData(user.id);
    return NextResponse.json(data);
  }

  // Default: user's certifications
  const certs = await getUserCertifications(user.id);
  const eligibility = await evaluateCertificationEligibility(user.id);

  return NextResponse.json({ certifications: certs, eligibility });
}

// ---------------------------------------------------------------------------
// POST /api/certifications
// Body: { action: "issue", levelId }
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  const user = await getCurrentUserProfile();
  if (!user) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  let body: { action?: string; levelId?: string };
  try {
    body = (await request.json()) as { action?: string; levelId?: string };
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { action, levelId } = body;

  if (action === "issue") {
    if (!levelId) {
      return NextResponse.json({ error: "levelId is required" }, { status: 400 });
    }

    // Re-check eligibility before issuing
    const eligibility = await evaluateCertificationEligibility(user.id);
    const levelResult = eligibility.find((r) => r.levelId === levelId);
    if (!levelResult) {
      return NextResponse.json({ error: "Unknown certification level" }, { status: 400 });
    }
    if (!levelResult.eligible) {
      return NextResponse.json({
        error: "Not eligible",
        reasons: levelResult.reasons,
      }, { status: 400 });
    }

    const result = await issueCertification(
      user.id,
      levelId,
      levelResult.modulesCompleted / Math.max(levelResult.modulesRequired, 1),
      levelResult.modulesCompleted,
      levelResult.assessmentsPassed,
    );

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ certification: result.certification });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
