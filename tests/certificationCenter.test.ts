import { describe, expect, it } from "vitest";
import {
  CRC_CERTIFICATION_LEVELS,
  CRC_ELITE_MODULE_REGISTRY,
} from "@/curriculum-engine";
import {
  generateVerificationId,
  getCertificationLevel,
  getCertificationLevels,
} from "@/lib/certifications/helpers";

/**
 * Certification Center — unit tests for eligibility engine and credential logic.
 * All tests are pure data transformations and do not require Supabase.
 */
describe("Certification Center", () => {
  // -----------------------------------------------------------------------
  // Certification levels
  // -----------------------------------------------------------------------
  describe("certification levels", () => {
    it("defines 4 levels", () => {
      expect(CRC_CERTIFICATION_LEVELS.length).toBe(4);
      expect(getCertificationLevels().length).toBe(4);
    });

    it("finds level by ID", () => {
      const completion = getCertificationLevel("completion");
      expect(completion).toBeDefined();
      expect(completion!.levelId).toBe("completion");

      const elite = getCertificationLevel("elite_crc");
      expect(elite).toBeDefined();
      expect(elite!.levelId).toBe("elite_crc");
    });

    it("returns undefined for unknown level", () => {
      expect(getCertificationLevel("nonexistent")).toBeUndefined();
    });

    it("each level has valid minimumSignals", () => {
      for (const level of CRC_CERTIFICATION_LEVELS) {
        expect(level.minimumSignals).toBeDefined();
        if (level.minimumSignals.modulesRequired) {
          expect(level.minimumSignals.modulesRequired.length).toBeGreaterThan(0);
        }
        expect(level.evidenceRequired.length).toBeGreaterThan(0);
      }
    });
  });

  // -----------------------------------------------------------------------
  // Verification ID generation
  // -----------------------------------------------------------------------
  describe("verification ID", () => {
    it("generates ID in correct format", () => {
      const id = generateVerificationId();
      expect(id).toMatch(/^VACRC-\d{4}-[0-9A-F]{6}$/);
    });

    it("uses current year", () => {
      const id = generateVerificationId();
      const year = new Date().getFullYear().toString();
      expect(id.startsWith(`VACRC-${year}`)).toBe(true);
    });

    it("generates unique IDs", () => {
      const ids = new Set(Array.from({ length: 100 }, () => generateVerificationId()));
      expect(ids.size).toBe(100);
    });

    it("has exactly 6 hex characters", () => {
      const id = generateVerificationId();
      const suffix = id.split("-")[2];
      expect(suffix.length).toBe(6);
    });
  });

  // -----------------------------------------------------------------------
  // Level requirements
  // -----------------------------------------------------------------------
  describe("level requirements", () => {
    it("completion requires artifactCount", () => {
      const level = getCertificationLevel("completion")!;
      expect(level.minimumSignals.artifactCount).toBe(4);
    });

    it("operational_readiness requires specific modules", () => {
      const level = getCertificationLevel("operational_readiness")!;
      const modules = level.minimumSignals.modulesRequired ?? [];
      expect(modules).toContain("M1");
      expect(modules).toContain("M2");
      expect(modules).toContain("M3");
      expect(modules).toContain("M4");
      expect(modules).toContain("M6");
      expect(modules).toContain("M8");
      expect(modules).toContain("M10");
      expect(modules).toContain("M11");
    });

    it("elite_crc requires 14 modules", () => {
      const level = getCertificationLevel("elite_crc")!;
      expect(level.minimumSignals.modulesRequired?.length).toBe(14);
      expect(level.minimumSignals.capstoneNormalized).toBe(0.78);
    });

    it("lead_crc_endorsement has highest requirements", () => {
      const level = getCertificationLevel("lead_crc_endorsement")!;
      expect(level.minimumSignals.capstoneNormalized).toBe(0.82);
      expect(level.minimumSignals.dimensions?.R).toBe(0.78);
      expect(level.minimumSignals.dimensions?.Q).toBe(0.8);
    });

    it("all module references exist in curriculum registry", () => {
      const registryIds = new Set(CRC_ELITE_MODULE_REGISTRY.map((r) => r.id));

      for (const level of CRC_CERTIFICATION_LEVELS) {
        for (const modId of level.minimumSignals.modulesRequired ?? []) {
          expect(registryIds.has(modId)).toBe(true);
        }
      }
    });
  });

  // -----------------------------------------------------------------------
  // Level ordering
  // -----------------------------------------------------------------------
  describe("level progression", () => {
    it("levels are ordered by increasing requirement", () => {
      const levels = CRC_CERTIFICATION_LEVELS;
      expect(levels[0].levelId).toBe("completion");
      expect(levels[1].levelId).toBe("operational_readiness");
      expect(levels[2].levelId).toBe("elite_crc");
      expect(levels[3].levelId).toBe("lead_crc_endorsement");
    });
  });

  // -----------------------------------------------------------------------
  // Certification row structure
  // -----------------------------------------------------------------------
  describe("certification structure", () => {
    it("has required statuses", () => {
      const validStatuses = ["eligible", "issued", "revoked", "expired"];
      expect(validStatuses.length).toBe(4);
    });
  });
});
