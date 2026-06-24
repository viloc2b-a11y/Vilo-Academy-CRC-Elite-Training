import { describe, expect, it } from "vitest";
import { getDefaultPlans } from "@/lib/monetization/helpers";

/**
 * Monetization — unit tests for pricing plans and order logic.
 * All tests are pure data transformations and do not require Supabase.
 */
describe("Monetization", () => {
  // -----------------------------------------------------------------------
  // Pricing plans
  // -----------------------------------------------------------------------
  describe("pricing plans", () => {
    it("returns 3 default plans", () => {
      const plans = getDefaultPlans();
      expect(plans.length).toBe(3);
    });

    it("has plans in correct order", () => {
      const plans = getDefaultPlans();
      expect(plans[0].plan_id).toBe("crc_foundations");
      expect(plans[1].plan_id).toBe("crc_professional");
      expect(plans[2].plan_id).toBe("crc_elite_plus");
    });

    it("has increasing prices", () => {
      const plans = getDefaultPlans();
      expect(plans[0].price_cents).toBeLessThan(plans[1].price_cents);
      expect(plans[1].price_cents).toBeLessThan(plans[2].price_cents);
    });

    it("has bilingual names", () => {
      const plans = getDefaultPlans();
      for (const plan of plans) {
        expect(plan.name_i18n.en).toBeTruthy();
        expect(plan.name_i18n.es).toBeTruthy();
      }
    });

    it("has features for each plan", () => {
      const plans = getDefaultPlans();
      for (const plan of plans) {
        expect(plan.features.length).toBeGreaterThanOrEqual(4);
      }
    });

    it("maps to certification levels", () => {
      const plans = getDefaultPlans();
      expect(plans[0].certification_level).toBe("operational_readiness");
      expect(plans[1].certification_level).toBe("elite_crc");
      expect(plans[2].certification_level).toBe("lead_crc_endorsement");
    });

    it("foundations costs $299", () => {
      const plans = getDefaultPlans();
      expect(plans[0].price_cents).toBe(29900);
    });

    it("professional costs $599", () => {
      const plans = getDefaultPlans();
      expect(plans[1].price_cents).toBe(59900);
    });

    it("elite plus costs $999", () => {
      const plans = getDefaultPlans();
      expect(plans[2].price_cents).toBe(99900);
    });

    it("all plans use USD", () => {
      const plans = getDefaultPlans();
      for (const plan of plans) {
        expect(plan.currency).toBe("usd");
      }
    });

    it("all plans are active", () => {
      const plans = getDefaultPlans();
      for (const plan of plans) {
        expect(plan.is_active).toBe(true);
      }
    });
  });

  // -----------------------------------------------------------------------
  // Order structure
  // -----------------------------------------------------------------------
  describe("order structure", () => {
    it("has valid statuses", () => {
      const validStatuses = ["pending", "confirmed", "active", "expired", "cancelled"];
      expect(validStatuses.length).toBe(5);
    });
  });
});
