import { describe, expect, it } from "vitest";
import { safeInternalRedirectPath } from "@/lib/navigation/safeRedirect";

describe("safeInternalRedirectPath", () => {
  it("allows relative app paths with query and hash", () => {
    expect(safeInternalRedirectPath("/en/dashboard?tab=modules#top")).toBe(
      "/en/dashboard?tab=modules#top",
    );
  });

  it("rejects external or protocol-relative redirects", () => {
    expect(safeInternalRedirectPath("https://example.com")).toBeNull();
    expect(safeInternalRedirectPath("//example.com")).toBeNull();
    expect(safeInternalRedirectPath("/\\example.com")).toBeNull();
  });
});
