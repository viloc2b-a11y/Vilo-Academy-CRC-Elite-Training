import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const PHRASES: Record<string, string> = {
  en: "I attest that I personally completed this training.",
  es: "Declaro que completé personalmente esta capacitación.",
};

type Body = {
  locale?: string;
  printedName?: string;
  title?: string;
  phrase?: string;
  kind?: string;
  moduloId?: string | null;
  moduleSlug?: string | null;
};

const KINDS = [
  "attestation",
  "certificate_ich_gcp",
  "certificate_iata",
  "certificate_dot",
  "other",
] as const;

type FirmaKind = (typeof KINDS)[number];

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function parseKind(value: unknown): FirmaKind {
  if (typeof value === "string" && (KINDS as readonly string[]).includes(value)) {
    return value as FirmaKind;
  }
  return "other";
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const raw =
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    null;
  if (!raw || raw.length > 64) return null;
  return raw;
}

export async function POST(request: Request) {
  let json: Body;
  try {
    json = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const locale = json.locale === "es" ? "es" : "en";
  const expectedPhrase = PHRASES[locale];
  const phrase = (json.phrase ?? "").trim();
  const printedName = (json.printedName ?? "").trim();
  const title = (json.title ?? "").trim() || null;

  if (!printedName) {
    return NextResponse.json({ error: "printedName required" }, { status: 400 });
  }

  if (phrase !== expectedPhrase) {
    return NextResponse.json({ error: "phrase mismatch" }, { status: 400 });
  }

  const supabase = createServerSupabaseClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const ip = clientIp(request);
  const userAgent = request.headers.get("user-agent");

  const phraseHash = createHash("sha256").update(phrase, "utf8").digest("hex");
  const kind = parseKind(json.kind);
  let moduloId: string | null = null;

  if (json.moduloId) {
    if (!UUID_RE.test(json.moduloId)) {
      return NextResponse.json(
        { error: "moduloId must be a Supabase module UUID; use moduleSlug for curriculum slugs" },
        { status: 400 },
      );
    }
    moduloId = json.moduloId;
  } else if (json.moduleSlug) {
    const slug = json.moduleSlug.trim();
    if (!slug || slug.length > 160) {
      return NextResponse.json({ error: "invalid moduleSlug" }, { status: 400 });
    }

    const { data: mod, error: moduleError } = await supabase
      .from("modulos")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (moduleError) {
      return NextResponse.json({ error: moduleError.message }, { status: 500 });
    }

    if (!mod?.id) {
      return NextResponse.json({ error: "moduleSlug not found" }, { status: 400 });
    }

    moduloId = mod.id as string;
  }

  const { data: firma, error: insertError } = await supabase
    .from("firmas_digitales")
    .insert({
      user_id: user.id,
      modulo_id: moduloId,
      kind,
      signer_printed_name: printedName,
      signer_title: title,
      confirmation_phrase_hash: phraseHash,
      ip,
      user_agent: userAgent,
      payload: { locale, clientSubmittedAt: new Date().toISOString() },
    })
    .select("id")
    .single();

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  const { error: auditError } = await supabase.rpc("append_audit", {
    p_action: "digital_signature",
    p_entity_type: "firmas_digitales",
    p_entity_id: firma?.id ?? null,
    p_payload: { kind, locale },
    p_ip: ip,
    p_user_agent: userAgent,
  });

  if (auditError) {
    return NextResponse.json({ error: auditError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: firma?.id });
}
