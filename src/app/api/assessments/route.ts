import { NextRequest, NextResponse } from "next/server";
import {
  getCurrentUserProfile,
  isValidModuleId,
} from "@/lib/progress/helpers";
import {
  getAssessmentRubric,
  getLatestAssessmentAttempt,
  getAssessmentAttempts,
  submitAssessmentAttempt,
  buildAssessmentSummary,
  type SelfEvaluationMap,
} from "@/lib/assessments/helpers";

// ---------------------------------------------------------------------------
// GET /api/assessments?moduleId=M1
// GET /api/assessments?summary=true
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  const user = await getCurrentUserProfile();
  if (!user) {
    return NextResponse.json({
      attempts: [],
      summary: buildAssessmentSummary([]),
      latest: null,
      authenticated: false,
    });
  }

  const { searchParams } = new URL(request.url);
  const moduleId = searchParams.get("moduleId");
  const summaryOnly = searchParams.get("summary") === "true";

  if (summaryOnly) {
    const all = await getAssessmentAttempts(user.id);
    return NextResponse.json({
      summary: buildAssessmentSummary(all),
      authenticated: true,
    });
  }

  if (moduleId) {
    if (!isValidModuleId(moduleId)) {
      return NextResponse.json(
        { error: "Invalid moduleId" },
        { status: 400 },
      );
    }

    const latest = await getLatestAssessmentAttempt(user.id, moduleId);
    const rubricData = getAssessmentRubric(moduleId);

    return NextResponse.json({
      latest,
      rubric: rubricData?.rubric ?? null,
      authenticated: true,
    });
  }

  return NextResponse.json({ attempts: [], summary: buildAssessmentSummary([]), authenticated: true });
}

// ---------------------------------------------------------------------------
// POST /api/assessments
// Body: { moduleId, responses, selfEvaluation }
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  const user = await getCurrentUserProfile();
  if (!user) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  let body: {
    moduleId?: string;
    responses?: Record<string, string>;
    selfEvaluation?: SelfEvaluationMap;
  };
  try {
    body = (await request.json()) as {
      moduleId?: string;
      responses?: Record<string, string>;
      selfEvaluation?: SelfEvaluationMap;
    };
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { moduleId, responses, selfEvaluation } = body;

  if (!moduleId || !isValidModuleId(moduleId)) {
    return NextResponse.json({ error: "Invalid or missing moduleId" }, { status: 400 });
  }

  if (!responses || Object.keys(responses).length === 0) {
    return NextResponse.json({ error: "Responses are required" }, { status: 400 });
  }

  if (!selfEvaluation || Object.keys(selfEvaluation).length === 0) {
    return NextResponse.json({ error: "Self-evaluation is required" }, { status: 400 });
  }

  const result = await submitAssessmentAttempt(
    user.id,
    moduleId,
    responses,
    selfEvaluation,
  );

  if (!result.success) {
    return NextResponse.json(
      { error: result.error ?? "Failed to submit assessment" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    attempt: result.attempt,
    authenticated: true,
  });
}
