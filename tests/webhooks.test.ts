import { createHmac } from "crypto";
import { afterEach, describe, expect, it } from "vitest";
import { verifyN8nSignature } from "@/lib/webhooks/n8n";

describe("verifyN8nSignature", () => {
  afterEach(() => {
    delete process.env.N8N_WEBHOOK_SECRET;
  });

  it("accepts matching sha256 HMAC signatures", () => {
    const raw = JSON.stringify({ event_type: "completion" });
    process.env.N8N_WEBHOOK_SECRET = "test-secret";
    const digest = createHmac("sha256", "test-secret").update(raw).digest("hex");

    expect(verifyN8nSignature(raw, `sha256=${digest}`)).toBe(true);
  });

  it("rejects missing, malformed, or mismatched signatures", () => {
    process.env.N8N_WEBHOOK_SECRET = "test-secret";

    expect(verifyN8nSignature("{}", null)).toBe(false);
    expect(verifyN8nSignature("{}", "sha1=abc")).toBe(false);
    expect(verifyN8nSignature("{}", "sha256=abc")).toBe(false);
  });
});
