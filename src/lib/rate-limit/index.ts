/**
 * Lightweight in-memory rate limiter.
 *
 * Sliding-window counters keyed by IP (x-forwarded-for) or user ID.
 * Production should swap this for Redis/Upstash rate-limit.
 */

interface WindowEntry {
  timestamps: number[];
}

const store = new Map<string, WindowEntry>();

/** Purge entries older than `windowMs` to bound memory. */
function prune(key: string, windowMs: number): void {
  const entry = store.get(key);
  if (!entry) return;
  const cutoff = Date.now() - windowMs;
  entry.timestamps = entry.timestamps.filter((t) => t > cutoff);
  if (entry.timestamps.length === 0) store.delete(key);
}

/** Periodically purge all stale entries (every 60s). */
let pruneTimer: ReturnType<typeof setInterval> | null = null;
function ensurePruneTimer(): void {
  if (pruneTimer) return;
  pruneTimer = setInterval(() => {
    for (const key of store.keys()) {
      prune(key, 60_000); // default window fallback; actual prune uses caller's window
    }
  }, 60_000);
  if (pruneTimer.unref) pruneTimer.unref(); // don't block process exit
}

export interface RateLimitConfig {
  /** Max requests allowed within the window. */
  maxRequests: number;
  /** Window duration in milliseconds. */
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number; // Unix ms when the earliest request in window expires
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxRequests: 30,
  windowMs: 60_000, // 30 req / 60s
};

/**
 * Check if a request identified by `key` exceeds the rate limit.
 * Returns the result and sets the `X-RateLimit-*` headers on the response.
 */
export function checkRateLimit(
  key: string,
  config: Partial<RateLimitConfig> = {},
): RateLimitResult {
  ensurePruneTimer();

  const { maxRequests, windowMs } = { ...DEFAULT_CONFIG, ...config };
  const now = Date.now();
  const cutoff = now - windowMs;

  let entry = store.get(key);
  if (!entry) {
    entry = { timestamps: [] };
    store.set(key, entry);
  }

  // Remove expired timestamps
  entry.timestamps = entry.timestamps.filter((t) => t > cutoff);

  const current = entry.timestamps.length;
  const allowed = current < maxRequests;

  if (allowed) {
    entry.timestamps.push(now);
  }

  const remaining = Math.max(0, maxRequests - (allowed ? current + 1 : current));
  const oldest = entry.timestamps[0] ?? now;
  const resetAt = oldest + windowMs;

  return { allowed, remaining, resetAt };
}

/**
 * Extract a rate-limit key from a Next.js request.
 * Prefers authenticated user ID; falls back to IP.
 */
export function rateLimitKey(request: Request, userId?: string | null): string {
  if (userId) return `user:${userId}`;
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "anon";
  return `ip:${ip}`;
}

/**
 * Apply rate-limit headers to a NextResponse.
 */
export function setRateLimitHeaders(
  response: Response,
  result: RateLimitResult,
): void {
  response.headers.set("X-RateLimit-Remaining", String(result.remaining));
  response.headers.set("X-RateLimit-Reset", String(result.resetAt));
}
