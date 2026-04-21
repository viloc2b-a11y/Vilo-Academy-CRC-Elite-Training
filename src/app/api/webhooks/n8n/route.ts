import { NextResponse } from "next/server";
import { createServiceSupabaseClient } from "@/lib/supabase/admin";
import { verifyN8nSignature } from "@/lib/webhooks/n8n";

export const runtime = "nodejs";

type N8nPayload = {
  event_type?: string;
  [key: string]: unknown;
};

export async function POST(request: Request) {
  const raw = await request.text();
  const sig = request.headers.get("x-n8n-signature");

  if (!verifyN8nSignature(raw, sig)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  let body: N8nPayload;
  try {
    body = JSON.parse(raw) as N8nPayload;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const eventType =
    typeof body.event_type === "string" && body.event_type.length > 0
      ? body.event_type
      : "unknown";

  try {
    const admin = createServiceSupabaseClient();
    const { error } = await admin.from("eventos_n8n").insert({
      event_type: eventType,
      source: "n8n",
      payload: body,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } catch (e) {
    const message = e instanceof Error ? e.message : "configuration error";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
