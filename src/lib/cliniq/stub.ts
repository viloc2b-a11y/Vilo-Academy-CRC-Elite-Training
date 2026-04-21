/**
 * ClinIQ / revenue-protection integration boundary (stub).
 * Add API client, webhooks, and entitlements here without coupling auth UI.
 */
export type ClinIQStub = {
  enabled: boolean;
};

export function getCliniqConfig(): ClinIQStub {
  return { enabled: false };
}
