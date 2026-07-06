import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

/**
 * Singleton browser Supabase client for client components.
 *
 * Must be a single instance — recreating on every render tears down the internal
 * auth state listener and causes session loss, especially with @supabase/ssr's
 * chunked cookie format (sb-*-auth-token.0, .1, ...).
 *
 * Usage in client components:
 *   const supabase = createClient();
 */
export function createClient(): SupabaseClient {
  if (browserClient) return browserClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anon) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  }

  browserClient = createBrowserClient(url, anon);
  return browserClient;
}
