"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Link, useRouter } from "@/i18n/routing";
import { safeInternalRedirectPath } from "@/lib/navigation/safeRedirect";

export function LoginForm() {
  const t = useTranslations("login");
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: signError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (signError) {
      setError(
        signError.message.toLowerCase().includes("invalid")
          ? t("errors.invalid")
          : t("errors.generic"),
      );
      return;
    }

    const next = safeInternalRedirectPath(searchParams.get("next"));
    if (next) {
      window.location.assign(next);
      return;
    }
    router.replace("/dashboard");
    router.refresh();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-md space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md sm:p-8"
    >
      <div className="space-y-1 text-center sm:text-left">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          {t("title")}
        </h1>
        <p className="text-sm text-slate-300">{t("subtitle")}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400"
          >
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-navy-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-accent focus:outline-none focus:ring-2 focus:ring-emerald-accent/30"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400"
          >
            {t("password")}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-navy-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-accent focus:outline-none focus:ring-2 focus:ring-emerald-accent/30"
          />
        </div>
      </div>

      {error ? (
        <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-emerald-accent py-3 text-sm font-semibold text-navy shadow-lg transition hover:brightness-110 disabled:opacity-60"
      >
        {loading ? "…" : t("submit")}
      </button>

      <p className="text-center text-xs text-slate-400">
        <Link href="/" className="text-emerald-accent hover:underline">
          {t("backHome")}
        </Link>
      </p>
    </form>
  );
}
