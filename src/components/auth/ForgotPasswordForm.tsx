"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/routing";

export function ForgotPasswordForm() {
  const t = useTranslations("auth");
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      email.trim(),
      {
        redirectTo: `${window.location.origin}/en/reset-password`,
      },
    );

    setLoading(false);

    if (resetError) {
      setError(resetError.message);
      return;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <div className="mx-auto w-full max-w-md rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center shadow-xl backdrop-blur-md">
        <div className="text-4xl mb-4">✉️</div>
        <p className="text-lg font-semibold text-white">{t("forgotSent")}</p>
        <Link
          href="/login"
          className="mt-6 inline-block text-sm text-emerald-accent hover:underline"
        >
          {t("backToLogin")}
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-md space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md sm:p-8"
    >
      <div className="space-y-1 text-center sm:text-left">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          {t("forgotTitle")}
        </h1>
        <p className="text-sm text-slate-300">{t("forgotSubtitle")}</p>
      </div>

      <div>
        <label
          htmlFor="reset-email"
          className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-400"
        >
          {t("emailLabel")}
        </label>
        <input
          id="reset-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-navy-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-accent focus:outline-none focus:ring-2 focus:ring-emerald-accent/30"
        />
      </div>

      {error ? (
        <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-200">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-emerald-accent py-3 text-sm font-semibold text-navy shadow-lg transition hover:brightness-110 disabled:opacity-60"
      >
        {loading ? "…" : t("submitReset")}
      </button>

      <p className="text-center text-xs text-slate-400">
        <Link href="/login" className="text-emerald-accent hover:underline">
          {t("backToLogin")}
        </Link>
      </p>
    </form>
  );
}
