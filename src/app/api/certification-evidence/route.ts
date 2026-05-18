import { NextResponse } from "next/server";
import { buildCertificationEvidenceManifest } from "@/lib/artifacts/submissions";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function GET() {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return NextResponse.json(
      { error: "Supabase is not configured for certification evidence" },
      { status: 503 },
    );
  }

  const supabase = createServerSupabaseClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("artifact_submissions")
    .select(
      "id, artifact_id, template_id, status, field_values, checklist_state, submitted_at, updated_at",
    )
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    manifest: buildCertificationEvidenceManifest(data ?? []),
  });
}
