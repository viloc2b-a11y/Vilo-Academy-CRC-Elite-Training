"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  Lock,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { CRC_ELITE_MODULE_REGISTRY, resolveBilingual } from "@/curriculum-engine";
import type { ProgressStatus } from "@/lib/progress/helpers";

type DashboardData = {
  totalModules: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  percentComplete: number;
  nextRecommended: string | null;
  moduleStatuses: Record<string, ProgressStatus>;
};

type AssessmentSummaryData = {
  totalAttempted: number;
  totalPassed: number;
  totalFailed: number;
  averagePercentage: number;
  attemptsPerModule: Record<string, { latestScore: number; passed: boolean; percentage: number }>;
};

type ConnectionState = "loading" | "connected" | "demo";

const EMPTY_SUMMARY: DashboardData = {
  totalModules: CRC_ELITE_MODULE_REGISTRY.length,
  completed: 0,
  inProgress: 0,
  notStarted: CRC_ELITE_MODULE_REGISTRY.length,
  percentComplete: 0,
  nextRecommended: CRC_ELITE_MODULE_REGISTRY[0]?.id ?? null,
  moduleStatuses: {},
};

const EMPTY_ASSESSMENT_SUMMARY: AssessmentSummaryData = {
  totalAttempted: 0,
  totalPassed: 0,
  totalFailed: 0,
  averagePercentage: 0,
  attemptsPerModule: {},
};

export function StudentDashboard() {
  const locale = useLocale();
  const t = useTranslations("studentDashboard");
  const lang = locale === "es" ? "es" : "en";

  const [summary, setSummary] = useState<DashboardData>(EMPTY_SUMMARY);
  const [assessmentSummary, setAssessmentSummary] =
    useState<AssessmentSummaryData>(EMPTY_ASSESSMENT_SUMMARY);
  const [connection, setConnection] = useState<ConnectionState>("loading");

  useEffect(() => {
    let canceled = false;

    async function load() {
      try {
        const [progressRes, assessmentRes] = await Promise.all([
          fetch("/api/progress"),
          fetch("/api/assessments?summary=true"),
        ]);

        if (canceled) return;

        const progressData = (await progressRes.json()) as {
          summary?: DashboardData;
          authenticated?: boolean;
        };

        const assessmentData = (await assessmentRes.json()) as {
          summary?: AssessmentSummaryData;
          authenticated?: boolean;
        };

        if (progressData.authenticated && progressData.summary) {
          setSummary(progressData.summary);
          if (assessmentData.summary) {
            setAssessmentSummary(assessmentData.summary);
          }
          setConnection("connected");
        } else {
          setSummary(EMPTY_SUMMARY);
          setConnection("demo");
        }
      } catch {
        if (!canceled) {
          setSummary(EMPTY_SUMMARY);
          setConnection("demo");
        }
      }
    }

    load();
    return () => {
      canceled = true;
    };
  }, []);

  const modules = useMemo(() => {
    return CRC_ELITE_MODULE_REGISTRY.map((m) => {
      const status: ProgressStatus =
        summary.moduleStatuses[m.id] ?? "not_started";

      return {
        id: m.id,
        title: resolveBilingual(m.title, lang),
        status,
        category: m.category,
        slug: m.slug,
      };
    });
  }, [summary.moduleStatuses, lang]);

  const statusIcon = (status: ProgressStatus) => {
    switch (status) {
      case "completed":
        return (
          <CheckCircle2
            className="mt-0.5 shrink-0 text-emerald-accent"
            size={22}
            strokeWidth={2}
            aria-label={t("a11yCompleted")}
          />
        );
      case "in_progress":
        return (
          <Circle
            className="mt-0.5 shrink-0 animate-pulse text-emerald-accent"
            size={22}
            strokeWidth={2}
            aria-label={t("a11yCurrent")}
          />
        );
      default:
        return (
          <Lock
            className="mt-0.5 shrink-0 text-slate-300"
            size={22}
            strokeWidth={1.75}
            aria-label={t("a11yLocked")}
          />
        );
    }
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-[1400px] flex-col rounded-2xl border border-slate-200/80 bg-slate-50 shadow-sm lg:flex-row lg:overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden w-full shrink-0 border-b border-white/10 bg-navy p-6 text-white lg:block lg:w-64 lg:border-b-0 lg:border-r lg:border-white/10">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-accent">
          {t("brandMark")}
        </p>
        <h2 className="font-serif text-xl font-bold tracking-tight text-white">
          Vilo Academy
        </h2>
        <p className="mt-1 text-xs text-slate-400">{t("crcTagline")}</p>
        <nav className="mt-8 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5 text-sm font-medium text-emerald-accent"
          >
            <BookOpen size={20} strokeWidth={1.75} aria-hidden />
            <span>{t("navCourses")}</span>
          </Link>
          <Link
            href="/academy/certifications"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            <Award size={20} strokeWidth={1.75} aria-hidden />
            <span>{t("navCerts")}</span>
          </Link>
          <Link
            href="/documents"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            <Clock size={20} strokeWidth={1.75} aria-hidden />
            <span>{t("navActivity")}</span>
          </Link>
        </nav>
        <div className="mt-10 rounded-xl border border-white/10 bg-navy-950/50 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-accent/90">
            {t("trustBadge")}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            {t("trustBody")}
          </p>
        </div>
      </aside>

      {/* Mobile nav strip */}
      <div className="flex gap-2 border-b border-slate-200 bg-navy p-3 lg:hidden">
        <Link
          href="/dashboard"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/10 py-2 text-xs font-medium text-emerald-accent"
        >
          <BookOpen size={16} aria-hidden />
          {t("navCourses")}
        </Link>
        <Link
          href="/academy/certifications"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-medium text-slate-300"
        >
          <Award size={16} aria-hidden />
          {t("navCerts")}
        </Link>
        <Link
          href="/documents"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-medium text-slate-300"
        >
          <Clock size={16} aria-hidden />
          {t("navActivity")}
        </Link>
      </div>

      <main className="flex-1 overflow-y-auto p-5 sm:p-8">
        <header className="mb-8 flex flex-col gap-6 border-b border-slate-200/80 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-accent">
                {t("kicker")}
              </p>
              {connection === "demo" && (
                <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                  {t("demoDataLabel")}
                </span>
              )}
              {connection === "loading" && (
                <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                  {lang === "es" ? "Cargando..." : "Loading..."}
                </span>
              )}
            </div>
            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-2 max-w-xl text-slate-600">{t("subtitle")}</p>
          </div>
          <div className="flex items-center gap-4 sm:text-right">
            <div>
              <p className="text-sm font-semibold text-navy">{t("studentId")}</p>
              <p className="text-xs italic text-slate-500">
                {connection === "connected"
                  ? t("sessionLabel")
                  : lang === "es"
                    ? "Vista previa"
                    : "Preview mode"}
              </p>
            </div>
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-accent to-emerald-600 text-sm font-bold text-navy shadow-md ring-2 ring-white"
              aria-hidden
            >
              {connection === "connected" ? "VL" : "?"}
            </div>
          </div>
        </header>

        {/* Stats cards */}
        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500">
              {t("cardProgress")}
            </h3>
            <div className="mt-2 flex items-end justify-between gap-2">
              <span className="font-serif text-3xl font-bold text-navy">
                {summary.percentComplete}%
              </span>
              <span className="text-sm font-semibold text-emerald-accent">
                {summary.completed} / {summary.totalModules} {t("modulesWord")}
              </span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-accent to-emerald-600 transition-[width] duration-500"
                style={{ width: `${summary.percentComplete}%` }}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500">
              {t("cardMilestone")}
            </h3>
            <p className="mt-2 font-serif text-lg font-bold text-navy">
              {summary.inProgress > 0
                ? `${summary.inProgress} ${lang === "es" ? "en progreso" : "in progress"}`
                : lang === "es"
                  ? "Listo para comenzar"
                  : "Ready to start"}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {summary.notStarted > 0
                ? `${summary.notStarted} ${lang === "es" ? "módulos sin comenzar" : "modules not started"}`
                : lang === "es"
                  ? "Todos los módulos completados"
                  : "All modules completed"}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500">
              {lang === "es" ? "Evaluaciones" : "Assessments"}
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <Award
                className={assessmentSummary.totalPassed > 0 ? "text-emerald-500" : "text-slate-300"}
                size={26}
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="font-serif text-2xl font-bold text-navy">
                {assessmentSummary.totalPassed}/{assessmentSummary.totalAttempted}
              </span>
            </div>
            {assessmentSummary.totalAttempted > 0 && (
              <p className="mt-2 text-xs text-slate-500">
                {lang === "es"
                  ? `${assessmentSummary.averagePercentage}% promedio`
                  : `${assessmentSummary.averagePercentage}% average`}
              </p>
            )}
            {connection === "demo" && (
              <p className="mt-2 text-xs text-slate-400">
                {lang === "es" ? "—" : "—"}
              </p>
            )}
          </div>
          <a
            href="/academy/certifications"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-accent/30 transition-colors block"
          >
            <h3 className="text-sm font-medium text-slate-500">
              {t("cardCerts")}
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <Award
                className="text-amber-500"
                size={26}
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="font-serif text-2xl font-bold text-navy">
                {connection === "connected" ? assessmentSummary.totalPassed : "1"}
              </span>
            </div>
          </a>
        </section>

        {/* Module list */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-navy/5 to-emerald-accent/5 px-6 py-5">
            <h2 className="font-serif text-xl font-bold text-navy">
              {t("planTitle")}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{t("planSubtitle")}</p>
          </div>
          <div className="divide-y divide-slate-100">
            {modules.map((mod) => (
              <div
                key={mod.id}
                className="flex flex-col gap-4 p-5 transition-colors hover:bg-slate-50/80 sm:flex-row sm:items-center sm:justify-between sm:p-6"
              >
                <div className="flex min-w-0 items-start gap-4">
                  {statusIcon(mod.status)}
                  <div className="min-w-0">
                    <Link
                      href={`/${locale}/academy/module/${mod.id}`}
                      className={`font-medium leading-snug hover:text-emerald-700 transition-colors ${
                        mod.status === "completed"
                          ? "text-emerald-700"
                          : mod.status === "in_progress"
                            ? "text-navy"
                            : "text-slate-400"
                      }`}
                    >
                      {mod.id}. {mod.title}
                    </Link>
                    <p className="mt-1 text-xs text-slate-400">
                      {mod.status === "completed"
                        ? lang === "es"
                          ? "Completado"
                          : "Completed"
                        : mod.status === "in_progress"
                          ? lang === "es"
                            ? "En progreso"
                            : "In progress"
                          : lang === "es"
                            ? "No comenzado"
                            : "Not started"}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/${locale}/academy/module/${mod.id}`}
                  className={`shrink-0 rounded-xl px-4 py-2 text-center text-sm font-bold transition ${
                    mod.status === "completed"
                      ? "border border-emerald-accent/30 bg-emerald-accent/10 text-navy hover:bg-emerald-accent/20"
                      : mod.status === "in_progress"
                        ? "bg-emerald-accent text-navy shadow-sm hover:brightness-110"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700"
                  }`}
                >
                  {mod.status === "completed"
                    ? lang === "es"
                      ? "Revisar"
                      : "Review"
                    : mod.status === "in_progress"
                      ? lang === "es"
                        ? "Continuar"
                        : "Continue"
                      : lang === "es"
                        ? "Comenzar"
                        : "Start"}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Login CTA for unauthenticated users */}
        {connection === "demo" && (
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-center">
            <p className="text-sm text-amber-700">
              {lang === "es"
                ? "Vista previa del dashboard. Inicia sesión para guardar tu progreso."
                : "Dashboard preview. Sign in to save your progress."}
            </p>
            <Link
              href={`/${locale}/login`}
              className="mt-3 inline-block rounded-xl bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
            >
              {lang === "es" ? "Iniciar sesión" : "Sign in"}
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
