import { createHmac, timingSafeEqual } from "crypto";

/**
 * Verifies `x-n8n-signature: sha256=<hex>` HMAC of the raw request body.
 * Configure the same secret in n8n (Crypto or Function node) and in N8N_WEBHOOK_SECRET.
 */
export function verifyN8nSignature(rawBody: string, signatureHeader: string | null) {
  const secret = process.env.N8N_WEBHOOK_SECRET;
  if (!secret) return false;
  if (!signatureHeader?.startsWith("sha256=")) return false;

  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const received = signatureHeader.slice("sha256=".length);

  try {
    return timingSafeEqual(Buffer.from(expected, "hex"), Buffer.from(received, "hex"));
  } catch {
    return false;
  }
}
