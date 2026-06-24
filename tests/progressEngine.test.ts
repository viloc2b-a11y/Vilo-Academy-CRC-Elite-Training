import { describe, expect, it } from "vitest";
import {
  CRC_ELITE_COURSE,
  CRC_ELITE_MODULE_REGISTRY,
} from "@/curriculum-engine";
import {
  buildDashboardSummary,
  isValidModuleId,
  VALID_MODULE_IDS,
} from "@/lib/progress/helpers";
import type { ModuleProgressRow, ProgressStatus } from "@/lib/progress/helpers";

/**
 * Progress Engine — unit tests for server-side helpers and dashboard logic.
 * All tests are pure data transformations and do not require Supabase.
 */
describe("Progress Engine", () => {
  // -----------------------------------------------------------------------
  // Validation
  // -----------------------------------------------------------------------
  describe("module ID validation", () => {
    it("accepts all CRC_ELITE_COURSE module IDs", () => {
      for (const item of CRC_ELITE_MODULE_REGISTRY) {
        expect(isValidModuleId(item.id)).toBe(true);
      }
    });

    it("rejects invalid module IDs", () => {
      expect(isValidModuleId("M99")).toBe(false);
      expect(isValidModuleId("")).toBe(false);
      expect(isValidModuleId("m1")).toBe(false);
      expect(isValidModuleId("module-1")).toBe(false);
      expect(isValidModuleId("INVALID")).toBe(false);
    });

    it("has the same count as the curriculum registry", () => {
      expect(VALID_MODULE_IDS.length).toBe(CRC_ELITE_MODULE_REGISTRY.length);
      expect(VALID_MODULE_IDS.length).toBe(17);
    });
  });

  // -----------------------------------------------------------------------
  // buildDashboardSummary
  // -----------------------------------------------------------------------
  describe("buildDashboardSummary", () => {
    it("returns all-not-started when no progress rows exist", () => {
      const summary = buildDashboardSummary([]);

      expect(summary.totalModules).toBe(17);
      expect(summary.completed).toBe(0);
      expect(summary.inProgress).toBe(0);
      expect(summary.notStarted).toBe(17);
      expect(summary.percentComplete).toBe(0);
      // First module is next recommended
      expect(summary.nextRecommended).toBe(CRC_ELITE_MODULE_REGISTRY[0]?.id);
    });

    it("counts completed modules", () => {
      const rows: ModuleProgressRow[] = [
        makeRow("M1", "completed", 100),
        makeRow("M2", "completed", 100),
        makeRow("M3", "completed", 100),
      ];
      const summary = buildDashboardSummary(rows);

      expect(summary.completed).toBe(3);
      expect(summary.inProgress).toBe(0);
      expect(summary.notStarted).toBe(14);
      expect(summary.percentComplete).toBe(18); // 3/17 ≈ 18%
    });

    it("counts in-progress modules", () => {
      const rows: ModuleProgressRow[] = [
        makeRow("M1", "completed", 100),
        makeRow("M2", "in_progress", 50),
        makeRow("M4", "in_progress", 30),
      ];
      const summary = buildDashboardSummary(rows);

      expect(summary.completed).toBe(1);
      expect(summary.inProgress).toBe(2);
      expect(summary.notStarted).toBe(14);
    });

    it("reports mixed progress", () => {
      const rows: ModuleProgressRow[] = [
        makeRow("M1", "completed", 100),
        makeRow("M2", "completed", 100),
        makeRow("M3", "completed", 100),
        makeRow("M4", "completed", 100),
        makeRow("M5", "completed", 100),
        makeRow("M6", "completed", 100),
        makeRow("M7", "in_progress", 70),
        makeRow("M8", "not_started", 0),
      ];
      const summary = buildDashboardSummary(rows);

      expect(summary.completed).toBe(6);
      expect(summary.inProgress).toBe(1);
      expect(summary.notStarted).toBe(10);
      expect(summary.percentComplete).toBe(35); // 6/17 ≈ 35%
    });

    it("identifies first in-progress as next recommended", () => {
      const rows: ModuleProgressRow[] = [
        makeRow("M1", "completed", 100),
        makeRow("M4", "in_progress", 50), // Should be next recommended (first in_progress in order)
      ];
      const summary = buildDashboardSummary(rows);

      expect(summary.nextRecommended).toBe("M4");
    });

    it("falls back to first not_started when nothing is in_progress", () => {
      const rows: ModuleProgressRow[] = [
        makeRow("M1", "completed", 100),
        makeRow("M2", "completed", 100),
      ];
      const summary = buildDashboardSummary(rows);

      expect(summary.nextRecommended).toBe("M3"); // First not_started
    });

    it("returns null nextRecommended when all are completed", () => {
      const rows: ModuleProgressRow[] = CRC_ELITE_MODULE_REGISTRY.map((r) =>
        makeRow(r.id, "completed", 100),
      );
      const summary = buildDashboardSummary(rows);

      expect(summary.completed).toBe(17);
      expect(summary.percentComplete).toBe(100);
      expect(summary.nextRecommended).toBeNull();
    });

    it("correctly maps module statuses by ID", () => {
      const rows: ModuleProgressRow[] = [
        makeRow("M1", "completed", 100),
        makeRow("M2", "in_progress", 60),
      ];
      const summary = buildDashboardSummary(rows);

      expect(summary.moduleStatuses["M1"]).toBe("completed");
      expect(summary.moduleStatuses["M2"]).toBe("in_progress");
      expect(summary.moduleStatuses["M3"]).toBe("not_started");
      expect(summary.moduleStatuses["M17"]).toBe("not_started");
    });

    it("handles rows for modules that no longer exist in registry gracefully", () => {
      const rows: ModuleProgressRow[] = [
        makeRow("M1", "completed", 100),
        makeRow("M99", "completed", 100), // unknown module
      ];
      const summary = buildDashboardSummary(rows);

      // M99 should be ignored; only M1 counts
      expect(summary.completed).toBe(1);
      expect(summary.notStarted).toBe(16);
    });
  });

  // -----------------------------------------------------------------------
  // Percent calculation precision
  // -----------------------------------------------------------------------
  describe("progress percentage calculation", () => {
    it("returns 0% for zero completed", () => {
      expect(buildDashboardSummary([]).percentComplete).toBe(0);
    });

    it("returns 100% for all completed", () => {
      const rows = CRC_ELITE_MODULE_REGISTRY.map((r) =>
        makeRow(r.id, "completed", 100),
      );
      expect(buildDashboardSummary(rows).percentComplete).toBe(100);
    });

    it("rounds to nearest integer", () => {
      // 1/17 ≈ 5.88% → 6%
      const rows = [makeRow("M1", "completed", 100)];
      expect(buildDashboardSummary(rows).percentComplete).toBe(6);

      // 8/17 ≈ 47.06% → 47%
      const eightRows = CRC_ELITE_MODULE_REGISTRY.slice(0, 8).map((r) =>
        makeRow(r.id, "completed", 100),
      );
      expect(buildDashboardSummary(eightRows).percentComplete).toBe(47);
    });
  });

  // -----------------------------------------------------------------------
  // Status validation
  // -----------------------------------------------------------------------
  describe("status enum", () => {
    const VALID_STATUSES: ProgressStatus[] = [
      "not_started",
      "in_progress",
      "completed",
    ];

    it("accepts valid status values", () => {
      for (const status of VALID_STATUSES) {
        const row = makeRow("M1", status, 0);
        expect(row.status).toBe(status);
      }
    });

    it("dashboard summary works with all valid statuses", () => {
      const rows = [
        makeRow("M1", "not_started", 0),
        makeRow("M2", "in_progress", 30),
        makeRow("M3", "completed", 100),
      ];
      const summary = buildDashboardSummary(rows);
      expect(summary.completed).toBe(1);
      expect(summary.inProgress).toBe(1);
      expect(summary.notStarted).toBe(15); // M1 is among the not_started
    });
  });

  // -----------------------------------------------------------------------
  // Edge cases
  // -----------------------------------------------------------------------
  describe("edge cases", () => {
    it("handles duplicate rows for same module (last wins in merge)", () => {
      // This simulates what would happen if upsert creates duplicates;
      // buildDashboardSummary aggregates from an array, so duplicates inflate counts.
      // In practice, the DB enforces unique(user_id, module_id), so this
      // shouldn't happen — but we verify the helper is at least well-behaved.
      const rows = [
        makeRow("M1", "completed", 100),
        makeRow("M1", "completed", 100), // duplicate
      ];
      const summary = buildDashboardSummary(rows);
      // Both rows map M1 to completed, so count is still 1
      expect(summary.completed).toBe(1);
    });

    it("handles rows with not_started status explicitly", () => {
      const rows = [makeRow("M1", "not_started", 0)];
      const summary = buildDashboardSummary(rows);
      expect(summary.completed).toBe(0);
      expect(summary.notStarted).toBe(17); // M1 is still not_started
    });
  });
});

// -----------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------
function makeRow(
  moduleId: string,
  status: ProgressStatus,
  progressPercent: number,
): ModuleProgressRow {
  return {
    id: crypto.randomUUID(),
    user_id: crypto.randomUUID(),
    module_id: moduleId,
    status,
    started_at: status === "not_started" ? null : "2026-04-23T12:00:00Z",
    completed_at: status === "completed" ? "2026-04-23T12:00:00Z" : null,
    last_viewed_at: "2026-04-23T12:00:00Z",
    progress_percent: progressPercent,
  };
}
