import { NextRequest, NextResponse } from "next/server";
import {
  getCurrentUserProfile,
  getModuleProgress,
  getProgressForModule,
  markModuleStarted,
  markModuleComplete,
  buildDashboardSummary,
  isValidModuleId,
} from "@/lib/progress/helpers";

// ---------------------------------------------------------------------------
// GET /api/progress
// Returns: full dashboard summary for the current user
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  const user = await getCurrentUserProfile();
  if (!user) {
    // Return empty summary for unauthenticated requests (read-only mode)
    return NextResponse.json({
      summary: buildDashboardSummary([]),
      authenticated: false,
    });
  }

  const { searchParams } = new URL(request.url);
  const moduleId = searchParams.get("moduleId");

  if (moduleId) {
    // Single module progress
    const progress = await getProgressForModule(user.id, moduleId);
    return NextResponse.json({ progress, authenticated: true });
  }

  // Full dashboard summary
  const rows = await getModuleProgress(user.id);
  const summary = buildDashboardSummary(rows);
  return NextResponse.json({ summary, authenticated: true });
}

// ---------------------------------------------------------------------------
// POST /api/progress
// Body: { action: "start" | "complete", moduleId: string }
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  const user = await getCurrentUserProfile();
  if (!user) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 },
    );
  }

  let body: { action?: string; moduleId?: string };
  try {
    body = (await request.json()) as {
      action?: string;
      moduleId?: string;
    };
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const { action, moduleId } = body;

  if (!moduleId || !isValidModuleId(moduleId)) {
    return NextResponse.json(
      { error: "Invalid or missing moduleId" },
      { status: 400 },
    );
  }

  let success = false;

  switch (action) {
    case "start":
      success = await markModuleStarted(user.id, moduleId);
      break;
    case "complete":
      success = await markModuleComplete(user.id, moduleId);
      break;
    default:
      return NextResponse.json(
        { error: "Action must be 'start' or 'complete'" },
        { status: 400 },
      );
  }

  if (!success) {
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 },
    );
  }

  // Return updated progress
  const progress = await getProgressForModule(user.id, moduleId);
  return NextResponse.json({ progress, authenticated: true });
}
