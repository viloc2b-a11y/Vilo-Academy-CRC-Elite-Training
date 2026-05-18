import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  type ArtifactSubmissionPayload,
  validateArtifactSubmissionPayload,
} from "@/lib/artifacts/submissions";

export const runtime = "nodejs";

function configurationResponse() {
  return NextResponse.json(
    { error: "Supabase is not configured for artifact submissions" },
    { status: 503 },
  );
}

async function getAuthenticatedClient() {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return { error: configurationResponse() };
  }

  const supabase = createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return {
      error: NextResponse.json({ error: "unauthorized" }, { status: 401 }),
    };
  }

  return { supabase, user };
}

export async function GET() {
  const auth = await getAuthenticatedClient();
  if (auth.error) return auth.error;

  const { data, error } = await auth.supabase
    .from("artifact_submissions")
    .select(
      "id, study_id, artifact_id, template_id, status, field_values, checklist_state, submitted_at, reviewed_at, updated_at",
    )
    .eq("user_id", auth.user.id)
    .order("updated_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ submissions: data ?? [] });
}

export async function POST(request: Request) {
  const auth = await getAuthenticatedClient();
  if (auth.error) return auth.error;

  let body: ArtifactSubmissionPayload;
  try {
    body = (await request.json()) as ArtifactSubmissionPayload;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const parsed = validateArtifactSubmissionPayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const submission = parsed.value;
  const { data, error } = await auth.supabase
    .from("artifact_submissions")
    .upsert(
      {
        user_id: auth.user.id,
        study_id: submission.studyId,
        artifact_id: submission.artifactId,
        template_id: submission.templateId,
        status: submission.status,
        field_values: submission.fieldValues,
        checklist_state: submission.checklistState,
      },
      { onConflict: "user_id,template_id" },
    )
    .select("id, status, updated_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await auth.supabase.rpc("append_audit", {
    p_action: "artifact_submission_saved",
    p_entity_type: "artifact_submissions",
    p_entity_id: data?.id ?? null,
    p_payload: {
      templateId: submission.templateId,
      artifactId: submission.artifactId,
      status: submission.status,
    },
    p_ip: null,
    p_user_agent: request.headers.get("user-agent"),
  });

  return NextResponse.json({ ok: true, submission: data });
}
