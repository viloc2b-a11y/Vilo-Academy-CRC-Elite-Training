"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const SIGNATURE_KINDS = [
  "certificate_iata",
  "certificate_dot",
  "certificate_ich_gcp",
  "attestation",
  "other",
] as const;

type SignatureKind = (typeof SIGNATURE_KINDS)[number];

function isSignatureKind(value: string): value is SignatureKind {
  return (SIGNATURE_KINDS as readonly string[]).includes(value);
}

export function DigitalSignaturePanel() {
  const t = useTranslations("signature");
  const locale = useLocale();
  const phraseTarget = t("phraseTarget");

  const [printedName, setPrintedName] = useState("");
  const [title, setTitle] = useState("");
  const [phrase, setPhrase] = useState("");
  const [training, setTraining] = useState(false);
  const [identity, setIdentity] = useState(false);
  const [kind, setKind] = useState<SignatureKind>("certificate_iata");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!printedName.trim()) {
      setStatus("error");
      setMessage(t("errors.name"));
      return;
    }

    if (phrase.trim() !== phraseTarget) {
      setStatus("error");
      setMessage(t("errors.phrase"));
      return;
    }

    if (!training || !identity) {
      setStatus("error");
      setMessage(t("errors.checks"));
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          printedName: printedName.trim(),
          title: title.trim(),
          phrase: phrase.trim(),
          kind,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "request failed");
      }

      setStatus("success");
      setMessage(t("success"));
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : t("errors.generic"));
    }
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{t("title")}</h2>
      <p className="mt-2 text-sm text-slate-600">{t("description")}</p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            {t("printedName")}
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            value={printedName}
            onChange={(e) => setPrintedName(e.target.value)}
            autoComplete="name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            {t("titleField")}
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            {t("certType")}
          </label>
          <select
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            value={kind}
            onChange={(e) =>
              setKind(
                isSignatureKind(e.target.value) ? e.target.value : "other",
              )
            }
          >
            <option value="certificate_iata">{t("certIata")}</option>
            <option value="certificate_dot">{t("certDot")}</option>
            <option value="certificate_ich_gcp">{t("certIchGcp")}</option>
            <option value="attestation">{t("certAttestation")}</option>
            <option value="other">{t("certOther")}</option>
          </select>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-700">{t("phraseLabel")}</p>
          <p className="mt-1 rounded-lg bg-slate-50 px-3 py-2 font-mono text-xs text-slate-800 ring-1 ring-slate-200">
            {phraseTarget}
          </p>
          <input
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder={phraseTarget}
          />
        </div>

        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={training}
            onChange={(e) => setTraining(e.target.checked)}
            className="mt-1"
          />
          <span>{t("checkboxTraining")}</span>
        </label>

        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={identity}
            onChange={(e) => setIdentity(e.target.checked)}
            className="mt-1"
          />
          <span>{t("checkboxIdentity")}</span>
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {t("submit")}
        </button>
      </form>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-700" : "text-red-600"
          }`}
        >
          {status === "success" ? t("success") : message}
        </p>
      ) : null}
    </section>
  );
}
