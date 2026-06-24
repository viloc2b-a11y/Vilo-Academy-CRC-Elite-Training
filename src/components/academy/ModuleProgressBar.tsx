"use client";

import { useCallback, useEffect, useState } from "react";
import type { ProgressStatus } from "@/lib/progress/helpers";

type Props = {
  moduleId: string;
  locale: string;
};

type ModuleProgress = {
  status: ProgressStatus;
  progress_percent: number;
  completed_at: string | null;
};

export function ModuleProgressBar({ moduleId, locale }: Props) {
  const lang = locale === "es" ? "es" : "en";
  const [progress, setProgress] = useState<ModuleProgress | null>(null);
  const [authState, setAuthState] = useState<"loading" | "authenticated" | "guest">(
    "loading",
  );
  const [submitting, setSubmitting] = useState(false);

  // Fetch current progress + auto-mark as started
  useEffect(() => {
    let canceled = false;

    async function init() {
      try {
        // Fetch current progress
        const res = await fetch(`/api/progress?moduleId=${moduleId}`);
        const data = (await res.json()) as {
          progress?: ModuleProgress | null;
          authenticated?: boolean;
        };

        if (canceled) return;

        if (data.authenticated) {
          setAuthState("authenticated");

          if (data.progress) {
            setProgress(data.progress);
          } else {
            // Auto-mark as started
            const startRes = await fetch("/api/progress", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ action: "start", moduleId }),
            });
            if (startRes.ok) {
              const startData = (await startRes.json()) as {
                progress?: ModuleProgress;
              };
              if (startData.progress) {
                setProgress(startData.progress);
              } else {
                setProgress({
                  status: "in_progress",
                  progress_percent: 0,
                  completed_at: null,
                });
              }
            }
          }
        } else {
          setAuthState("guest");
        }
      } catch {
        if (!canceled) setAuthState("guest");
      }
    }

    init();
    return () => {
      canceled = true;
    };
  }, [moduleId]);

  const handleMarkComplete = useCallback(async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "complete", moduleId }),
      });
      if (res.ok) {
        setProgress({
          status: "completed",
          progress_percent: 100,
          completed_at: new Date().toISOString(),
        });
      }
    } catch {
      /* silent */
    } finally {
      setSubmitting(false);
    }
  }, [moduleId]);

  if (authState === "loading") {
    return (
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="h-5 w-32 animate-pulse rounded bg-slate-100" />
      </div>
    );
  }

  if (authState === "guest") {
    return (
      <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-700">
          {lang === "es"
            ? "Vista de solo lectura. Inicia sesión para guardar tu progreso."
            : "Read-only view. Sign in to save your progress."}
        </p>
        <a
          href={`/${locale}/login`}
          className="mt-2 inline-block rounded-lg bg-amber-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-700"
        >
          {lang === "es" ? "Iniciar sesión" : "Sign in"}
        </a>
      </div>
    );
  }

  // Authenticated — show progress
  const status = progress?.status ?? "not_started";

  return (
    <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Status badge */}
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              status === "completed"
                ? "bg-emerald-100 text-emerald-700"
                : status === "in_progress"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-slate-100 text-slate-500"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                status === "completed"
                  ? "bg-emerald-500"
                  : status === "in_progress"
                    ? "bg-blue-500"
                    : "bg-slate-300"
              }`}
            />
            {status === "completed"
              ? lang === "es"
                ? "Completado"
                : "Completed"
              : status === "in_progress"
                ? lang === "es"
                  ? "En progreso"
                  : "In progress"
                : lang === "es"
                  ? "No comenzado"
                  : "Not started"}
          </span>

          {/* Progress percent */}
          {progress && (
            <span className="text-sm font-mono font-semibold text-slate-500">
              {progress.progress_percent}%
            </span>
          )}

          {/* Completion date */}
          {progress?.completed_at && (
            <span className="text-xs text-slate-400">
              {lang === "es" ? "Completado" : "Completed"}{" "}
              {new Date(progress.completed_at).toLocaleDateString(
                locale === "es" ? "es-AR" : "en-US",
                { year: "numeric", month: "short", day: "numeric" },
              )}
            </span>
          )}
        </div>

        {/* Actions */}
        {status !== "completed" && (
          <button
            type="button"
            disabled={submitting}
            onClick={handleMarkComplete}
            className="rounded-xl bg-emerald-accent px-5 py-2 text-sm font-bold text-navy shadow-sm transition hover:brightness-110 disabled:opacity-50"
          >
            {submitting
              ? lang === "es"
                ? "Guardando..."
                : "Saving..."
              : lang === "es"
                ? "Marcar como completado"
                : "Mark as complete"}
          </button>
        )}
      </div>
    </div>
  );
}
