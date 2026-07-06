import { describe, expect, it } from "vitest";
import { checkRateLimit, rateLimitKey } from "@/lib/rate-limit";

describe("rate limiter", () => {
  it("allows requests within the limit", () => {
    const key = "test:allow";
    for (let i = 0; i < 5; i++) {
      const result = checkRateLimit(key, { maxRequests: 10, windowMs: 60_000 });
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(10 - (i + 1));
    }
  });

  it("blocks requests exceeding the limit", () => {
    const key = "test:block";
    for (let i = 0; i < 5; i++) {
      checkRateLimit(key, { maxRequests: 3, windowMs: 60_000 });
    }
    const result = checkRateLimit(key, { maxRequests: 3, windowMs: 60_000 });
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it("returns user-prefixed key when userId is provided", () => {
    const req = new Request("http://localhost", {
      headers: { "x-forwarded-for": "192.168.1.1" },
    });
    expect(rateLimitKey(req, "user-123")).toBe("user:user-123");
  });

  it("falls back to IP-based key when no userId", () => {
    const req = new Request("http://localhost", {
      headers: { "x-forwarded-for": "10.0.0.1" },
    });
    expect(rateLimitKey(req)).toBe("ip:10.0.0.1");
  });
});
