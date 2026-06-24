"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Award,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { CRC_CERTIFICATION_LEVELS, resolveBilingual } from "@/curriculum-engine";
import type { EligibilityResult, CertificationRow, CertificationCenterData } from "@/lib/certifications/helpers";

type Props = {
  locale: string;
};

const LEVEL_COLORS: Record<string, { bg: string; badge: string; ring: string }> = {
  completion: { bg: "from-slate-100 to-slate-50", badge: "bg-slate-500", ring: "ring-slate-300" },
  operational_readiness: { bg: "from-blue-100 to-blue-50", badge: "bg-blue-600", ring: "ring-blue-300" },
  elite_crc: { bg: "from-emerald-100 to-emerald-50", badge: "bg-emerald-600", ring: "ring-emerald-300" },
  lead_crc_endorsement: { bg: "from-amber-100 to-amber-50", badge: "bg-amber-600", ring: "ring-amber-300" },
};

export function CertificationCenter({ locale }: Props) {
  const lang = locale === "es" ? "es" : "en";
  const [data, setData] = useState<CertificationCenterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [issuing, setIssuing] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/certifications?center=true")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setError("Failed to load"))
      .finally(() => setLoading(false));
  }, []);

  const handleIssue = useCallback(async (levelId: string) => {
    setIssuing(levelId);
    setError(null);
    try {
      const res = await fetch("/api/certifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "issue", levelId }),
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error ?? "Failed to issue");
      } else {
        // Refresh
        const d = await fetch("/api/certifications?center=true").then((r) => r.json());
        setData(d);
      }
    } catch {
      setError(lang === "es" ? "Error al emitir" : "Failed to issue");
    } finally {
      setIssuing(null);
    }
  }, [lang]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="h-8 w-48 animate-pulse rounded bg-slate-100" />
        <div className="mt-8 space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 animate-pulse rounded-xl bg-slate-100" />
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-red-700">{error ?? "Could not load certification data"}</p>
        </div>
      </div>
    );
  }

  const { allLevels, issuedCertifications, pendingCertifications, overallProgress } = data;

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-accent">
          {lang === "es" ? "Credenciales" : "Credentials"}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-navy">
          {lang === "es" ? "Centro de certificación" : "Certification center"}
        </h1>
      </div>

      {/* Overall progress */}
      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-slate-500">
            {lang === "es" ? "Módulos completados" : "Modules completed"}
          </p>
          <p className="mt-1 font-serif text-2xl font-bold text-navy">
            {overallProgress.modulesCompleted}
            <span className="text-lg text-slate-400">/{overallProgress.totalModules}</span>
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-slate-500">
            {lang === "es" ? "Evaluaciones aprobadas" : "Assessments passed"}
          </p>
          <p className="mt-1 font-serif text-2xl font-bold text-navy">
            {overallProgress.assessmentsPassed}
            <span className="text-lg text-slate-400">/{overallProgress.totalAssessments}</span>
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-slate-500">
            {lang === "es" ? "Certificaciones" : "Certifications"}
          </p>
          <p className="mt-1 font-serif text-2xl font-bold text-navy">
            {issuedCertifications.length}
          </p>
        </div>
      </section>

      {/* Level cards */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl font-bold text-navy">
          {lang === "es" ? "Niveles de certificación" : "Certification levels"}
        </h2>

        {allLevels.map((level) => {
          const colors = LEVEL_COLORS[level.levelId] ?? LEVEL_COLORS.completion;
          const issued = issuedCertifications.find(
            (c) => c.certification_level === level.levelId,
          );
          const isIssued = !!issued;
          const isEligible = level.eligible && !isIssued;

          return (
            <div
              key={level.levelId}
              className={`rounded-xl border bg-gradient-to-br p-6 shadow-sm transition ${
                isIssued
                  ? "border-emerald-200 from-emerald-50 to-white"
                  : isEligible
                    ? "border-emerald-200 from-emerald-50/50 to-white"
                    : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${colors.badge} ring-2 ${colors.ring}`}
                  >
                    <Award className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">
                      {resolveBilingual(level.title, lang)}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm">
                      <span className="text-slate-500">
                        {lang === "es" ? "Módulos" : "Modules"}: {level.modulesCompleted}/{level.modulesRequired}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">
                        {lang === "es" ? "Evaluaciones" : "Assessments"}: {level.assessmentsPassed}/{level.assessmentsRequired}
                      </span>
                    </div>

                    {/* Reasons (if not eligible) */}
                    {!level.eligible && !isIssued && level.reasons.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {level.reasons.map((r, i) => (
                          <p key={i} className="flex items-center gap-2 text-xs text-amber-600">
                            <AlertTriangle size={12} />
                            {r}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Issued certification info */}
                    {isIssued && issued && (
                      <div className="mt-3 space-y-1">
                        <p className="flex items-center gap-2 text-sm text-emerald-600">
                          <CheckCircle2 size={14} />
                          {lang === "es" ? "Emitido" : "Issued"}:{" "}
                          {new Date(issued.issued_at ?? issued.created_at).toLocaleDateString(
                            locale === "es" ? "es-AR" : "en-US",
                            { year: "numeric", month: "short", day: "numeric" },
                          )}
                        </p>
                        <p className="text-xs text-slate-400">
                          ID: {issued.verification_id}
                        </p>
                        <a
                          href={`/${locale}/certification/verify/${issued.verification_id}`}
                          className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700"
                        >
                          <ExternalLink size={12} />
                          {lang === "es" ? "Verificar credencial" : "Verify credential"}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action */}
                <div className="shrink-0">
                  {isIssued ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 size={12} />
                      {lang === "es" ? "Emitido" : "Issued"}
                    </span>
                  ) : level.eligible ? (
                    <button
                      type="button"
                      disabled={issuing === level.levelId}
                      onClick={() => handleIssue(level.levelId)}
                      className="rounded-xl bg-emerald-accent px-5 py-2 text-sm font-bold text-navy shadow-sm transition hover:brightness-110 disabled:opacity-50"
                    >
                      {issuing === level.levelId
                        ? lang === "es" ? "Emitiendo..." : "Issuing..."
                        : lang === "es" ? "Emitir certificado" : "Issue certificate"}
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-400">
                      {lang === "es" ? "Bloqueado" : "Locked"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Error */}
      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
}
