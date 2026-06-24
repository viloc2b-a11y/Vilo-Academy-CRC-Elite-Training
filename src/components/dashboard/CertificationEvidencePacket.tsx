"use client";

import { useEffect, useMemo, useState } from "react";
import {
  type CertificationEvidenceManifest,
  buildCertificationEvidenceManifest,
} from "@/lib/artifacts/submissions";

type Props = {
  locale: string;
};

export function CertificationEvidencePacket({ locale }: Props) {
  const lang = locale === "es" ? "es" : "en";
  const [manifest, setManifest] = useState<CertificationEvidenceManifest>(() =>
    buildCertificationEvidenceManifest([], "pending"),
  );
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">(
    "loading",
  );

  useEffect(() => {
    let canceled = false;
    async function load() {
      try {
        const res = await fetch("/api/certification-evidence");
        if (!res.ok) {
          setStatus("unavailable");
          return;
        }
        const data = (await res.json()) as {
          manifest?: CertificationEvidenceManifest;
        };
        if (canceled) return;
        setManifest(data.manifest ?? buildCertificationEvidenceManifest([], "pending"));
        setStatus("ready");
      } catch {
        if (!canceled) setStatus("unavailable");
      }
    }
    load();
    return () => {
      canceled = true;
    };
  }, []);

  const readiness = useMemo(() => manifest.readiness, [manifest]);

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-accent">
          {lang === "es" ? "Paquete de certificación" : "Certification packet"}
        </p>
        <h2 className="mt-2 font-serif text-2xl font-bold text-navy">
          {lang === "es" ? "Evidencia y readiness" : "Evidence and readiness"}
        </h2>
        <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
          {lang === "es"
            ? "Agrega artefactos enviados y muestra qué falta para cada nivel de certificación."
            : "Aggregates submitted artifacts and shows what remains for each certification level."}
        </p>
        {status === "unavailable" ? (
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
            {lang === "es"
              ? "Conecta Supabase e inicia sesión para ver evidencia guardada."
              : "Connect Supabase and sign in to view saved evidence."}
          </p>
        ) : null}
        {status !== "unavailable" ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            <PacketMetric
              label={lang === "es" ? "Artefactos" : "Artifacts"}
              value={`${manifest.submittedArtifacts}/${manifest.totalArtifacts}`}
            />
            <PacketMetric
              label={lang === "es" ? "Borradores" : "Drafts"}
              value={manifest.draftArtifacts}
            />
            <PacketMetric
              label={lang === "es" ? "Revisados" : "Reviewed"}
              value={manifest.reviewedArtifacts}
            />
            <PacketMetric
              label={lang === "es" ? "Estado" : "Status"}
              value={
                manifest.generatedAtIso === "pending"
                  ? "..."
                  : lang === "es"
                    ? "En vivo"
                    : "Live"
              }
            />
          </div>
        ) : null}
      </div>

      <div className="grid gap-4 p-6 lg:grid-cols-2">
        {readiness.map((level) => {
          const artifactPct =
            level.requiredArtifactCount > 0
              ? Math.round(
                  (level.submittedArtifactCount / level.requiredArtifactCount) * 100,
                )
              : 0;
          const checklistPct =
            level.totalChecklistCount > 0
              ? Math.round(
                  (level.completedChecklistCount / level.totalChecklistCount) * 100,
                )
              : 0;

          return (
            <article
              key={level.levelId}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-navy">{level.title[lang]}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                    {level.ready
                      ? lang === "es"
                        ? "Listo para revisión"
                        : "Ready for review"
                      : lang === "es"
                        ? "En progreso"
                        : "In progress"}
                  </p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    level.ready
                      ? "bg-emerald-accent/10 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {artifactPct}%
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <ProgressBar
                  label={lang === "es" ? "Artefactos enviados" : "Submitted artifacts"}
                  value={`${level.submittedArtifactCount}/${level.requiredArtifactCount}`}
                  pct={artifactPct}
                />
                <ProgressBar
                  label={lang === "es" ? "Checklist completado" : "Checklist complete"}
                  value={`${level.completedChecklistCount}/${level.totalChecklistCount}`}
                  pct={checklistPct}
                />
              </div>

              {level.blockedByTemplateCoverage ? (
                <p className="mt-4 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs leading-5 text-slate-600">
                  {lang === "es"
                    ? `Faltan plantillas para cubrir este nivel: disponibles ${level.availableTemplateCount}, requeridas ${level.requiredArtifactCount}.`
                    : `Template coverage is still being built: ${level.availableTemplateCount} available, ${level.requiredArtifactCount} required.`}
                </p>
              ) : level.missingArtifactIds.length > 0 ? (
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  {lang === "es" ? "Faltan: " : "Missing: "}
                  {level.missingArtifactIds.join(", ")}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProgressBar({
  label,
  value,
  pct,
}: {
  label: string;
  value: string;
  pct: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="font-medium text-slate-600">{label}</span>
        <span className="font-semibold text-navy">{value}</span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-emerald-accent"
          style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
        />
      </div>
    </div>
  );
}

function PacketMetric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 font-serif text-xl font-bold text-navy">{value}</p>
    </div>
  );
}
