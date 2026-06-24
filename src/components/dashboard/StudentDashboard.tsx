"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  GraduationCap,
  FileText,
  Shield,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { CRC_ELITE_MODULE_REGISTRY, resolveBilingual } from "@/curriculum-engine";
import type { ProgressStatus } from "@/lib/progress/helpers";

// ── Types ────────────────────────────────────────────────────────────────────

type DashboardData = {
  totalModules: number;
  completed: number;
  inProgress: number;
  notStarted: number;
  percentComplete: number;
  nextRecommended: string | null;
  moduleStatuses: Record<string, ProgressStatus>;
  authenticated?: boolean;
};

type AssessmentSummaryData = {
  totalAttempted: number;
  totalPassed: number;
  totalFailed: number;
  averagePercentage: number;
  attemptsPerModule: Record<string, { latestScore: number; passed: boolean; percentage: number }>;
};

type ConnectionState = "loading" | "connected" | "guest" | "error";

type ModuleCategory = "foundations" | "operations" | "quality" | "capstone" | string;

// ── Constants ─────────────────────────────────────────────────────────────────

const EMPTY_SUMMARY: DashboardData = {
  totalModules: CRC_ELITE_MODULE_REGISTRY.length,
  completed: 0,
  inProgress: 0,
  notStarted: CRC_ELITE_MODULE_REGISTRY.length,
  percentComplete: 0,
  nextRecommended: CRC_ELITE_MODULE_REGISTRY[0]?.id ?? null,
  moduleStatuses: {},
};

const EMPTY_ASSESSMENT: AssessmentSummaryData = {
  totalAttempted: 0,
  totalPassed: 0,
  totalFailed: 0,
  averagePercentage: 0,
  attemptsPerModule: {},
};

const CATEGORY_ORDER: ModuleCategory[] = ["foundations", "operations", "quality", "capstone"];

const CATEGORY_LABELS: Record<string, { en: string; es: string }> = {
  foundations: { en: "Foundations", es: "Fundamentos" },
  operations: { en: "Operations", es: "Operaciones" },
  quality: { en: "Quality & Data", es: "Calidad y Datos" },
  capstone: { en: "Capstone", es: "Capstone" },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function getGreeting(lang: string): string {
  const hour = new Date().getHours();
  if (lang === "es") {
    if (hour < 12) return "Buenos días";
    if (hour < 18) return "Buenas tardes";
    return "Buenas noches";
  }
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="h-3 w-24 rounded bg-slate-100" />
      <div className="mt-4 h-8 w-16 rounded bg-slate-100" />
      <div className="mt-4 h-2 w-full rounded-full bg-slate-100" />
    </div>
  );
}

function ProgressRing({ percent }: { percent: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden>
      <circle cx="70" cy="70" r={r} fill="none" stroke="#f1f5f9" strokeWidth="12" />
      <circle
        cx="70"
        cy="70"
        r={r}
        fill="none"
        stroke="#10B981"
        strokeWidth="12"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 70 70)"
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />
      <text x="70" y="65" textAnchor="middle" className="font-serif" style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, fill: "#0D1B2A" }}>
        {percent}%
      </text>
      <text x="70" y="85" textAnchor="middle" style={{ fontSize: 11, fill: "#64748b" }}>
        complete
      </text>
    </svg>
  );
}

function StatusBadge({ status }: { status: ProgressStatus }) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
        <CheckCircle2 size={10} /> Completed
      </span>
    );
  }
  if (status === "in_progress") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
        In Progress
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
      Not Started
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    foundations: "bg-violet-50 text-violet-700",
    operations: "bg-sky-50 text-sky-700",
    quality: "bg-amber-50 text-amber-700",
    capstone: "bg-rose-50 text-rose-700",
  };
  const label = CATEGORY_LABELS[category]?.en ?? category;
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${colors[category] ?? "bg-slate-100 text-slate-500"}`}>
      {label}
    </span>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function StudentDashboard() {
  const locale = useLocale();
  const t = useTranslations("studentDashboard");
  const lang = locale === "es" ? "es" : "en";

  const [summary, setSummary] = useState<DashboardData>(EMPTY_SUMMARY);
  const [assessmentSummary, setAssessmentSummary] = useState<AssessmentSummaryData>(EMPTY_ASSESSMENT);
  const [connection, setConnection] = useState<ConnectionState>("loading");

  useEffect(() => {
    let canceled = false;

    async function load() {
      try {
        const [progressRes, assessmentRes] = await Promise.all([
          fetch("/api/progress?summary=true"),
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
          if (assessmentData.summary) setAssessmentSummary(assessmentData.summary);
          setConnection("connected");
        } else {
          setSummary(EMPTY_SUMMARY);
          setConnection("guest");
        }
      } catch {
        if (!canceled) {
          setSummary(EMPTY_SUMMARY);
          setConnection("error");
        }
      }
    }

    load();
    return () => { canceled = true; };
  }, []);

  const modules = useMemo(() => {
    return CRC_ELITE_MODULE_REGISTRY.map((m) => ({
      id: m.id,
      title: resolveBilingual(m.title, lang),
      status: (summary.moduleStatuses[m.id] ?? "not_started") as ProgressStatus,
      category: m.category as ModuleCategory,
      slug: m.slug,
    }));
  }, [summary.moduleStatuses, lang]);

  // Group modules by category in order
  const groupedModules = useMemo(() => {
    const groups: Record<string, typeof modules> = {};
    for (const cat of CATEGORY_ORDER) groups[cat] = [];
    for (const mod of modules) {
      const key = CATEGORY_ORDER.includes(mod.category) ? mod.category : "foundations";
      groups[key].push(mod);
    }
    return groups;
  }, [modules]);

  const nextModule = useMemo(() => {
    if (summary.nextRecommended) {
      return modules.find((m) => m.id === summary.nextRecommended) ?? null;
    }
    return modules.find((m) => m.status !== "completed") ?? null;
  }, [summary.nextRecommended, modules]);

  const allComplete = summary.completed === summary.totalModules && summary.totalModules > 0;
  const isGuest = connection === "guest" || connection === "error";
  const isLoading = connection === "loading";

  const greeting = getGreeting(lang);

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Top nav */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-accent">
              Vilo Academy
            </span>
            <div className="hidden items-center gap-1 sm:flex">
              {[
                { href: "/dashboard", label: "Dashboard" },
                { href: "/academy", label: "Academy" },
                { href: "/academy/certifications", label: "Certifications" },
                { href: "/pricing", label: "Pricing" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href as Parameters<typeof Link>[0]["href"]}
                  className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-navy"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Connection indicator */}
            <div className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${
                  connection === "connected" ? "bg-emerald-accent animate-none" :
                  connection === "loading" ? "bg-amber-400 animate-pulse" :
                  "bg-amber-400"
                }`}
              />
              <span className="text-[11px] font-medium text-slate-500">
                {connection === "connected" ? "Live" : connection === "loading" ? "Connecting…" : "Preview"}
              </span>
            </div>
            {/* Avatar */}
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-accent to-emerald-600 text-xs font-bold text-navy ring-2 ring-white shadow-sm"
              aria-hidden
            >
              {connection === "connected" ? "VL" : "?"}
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* 1 — Welcome Hero */}
        <section className="mb-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{greeting},</p>
                <h1 className="mt-0.5 font-serif text-3xl font-bold tracking-tight text-navy md:text-4xl">
                  CRC Candidate
                </h1>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-600">CRC Elite Training</span>
                  <span className="rounded-full border border-emerald-accent/30 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                    Pilot
                  </span>
                  {isGuest && (
                    <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                      Preview Mode
                    </span>
                  )}
                </div>
              </div>
              <div className="hidden sm:block text-right">
                <p className="text-xs text-slate-400 uppercase tracking-wider">Program</p>
                <p className="font-serif text-lg font-bold text-navy">ACRP · CRC</p>
                <p className="text-xs text-slate-500">17 Modules · Bilingual</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2 — Stats Row */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              {/* Overall Progress */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <BarChart3 size={18} className="text-emerald-accent" strokeWidth={1.75} aria-hidden />
                  <h3 className="text-sm font-medium text-slate-500">Overall Progress</h3>
                </div>
                <p className="mt-3 font-serif text-3xl font-bold text-navy">{summary.percentComplete}%</p>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-accent to-emerald-600 transition-[width] duration-700"
                    style={{ width: `${summary.percentComplete}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  {summary.completed} / {summary.totalModules} modules
                </p>
              </div>

              {/* In Progress */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-blue-500" strokeWidth={1.75} aria-hidden />
                  <h3 className="text-sm font-medium text-slate-500">In Progress</h3>
                </div>
                <p className="mt-3 font-serif text-3xl font-bold text-navy">{summary.inProgress}</p>
                <p className="mt-2 text-xs text-slate-500">
                  {summary.inProgress === 1 ? "1 active" : `${summary.inProgress} active`}
                </p>
                <p className="mt-1 text-xs text-slate-400">{summary.notStarted} not started</p>
              </div>

              {/* Assessment Score */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-violet-500" strokeWidth={1.75} aria-hidden />
                  <h3 className="text-sm font-medium text-slate-500">Assessment Score</h3>
                </div>
                <p className="mt-3 font-serif text-3xl font-bold text-navy">
                  {assessmentSummary.totalAttempted > 0
                    ? `${assessmentSummary.averagePercentage}%`
                    : "—"}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  {assessmentSummary.totalPassed} passed / {assessmentSummary.totalAttempted} total
                </p>
              </div>

              {/* Certifications */}
              <Link
                href="/academy/certifications"
                className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-accent/40 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-amber-500" strokeWidth={1.75} aria-hidden />
                  <h3 className="text-sm font-medium text-slate-500">Certifications</h3>
                </div>
                <p className="mt-3 font-serif text-3xl font-bold text-navy">
                  {connection === "connected" ? assessmentSummary.totalPassed : "0"}
                </p>
                <p className="mt-2 flex items-center gap-1 text-xs text-emerald-accent">
                  View certifications <ExternalLink size={10} />
                </p>
              </Link>
            </>
          )}
        </section>

        {/* 3 — Progress Ring + Next Milestone */}
        <section className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Ring */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white py-10 shadow-sm">
            <ProgressRing percent={isLoading ? 0 : summary.percentComplete} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Overall Progress
            </p>
          </div>

          {/* Next Milestone */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Next Milestone</p>
            {isLoading ? (
              <div className="mt-4 animate-pulse space-y-3">
                <div className="h-4 w-3/4 rounded bg-slate-100" />
                <div className="h-3 w-1/2 rounded bg-slate-100" />
              </div>
            ) : allComplete ? (
              <div className="mt-4">
                <p className="font-serif text-2xl font-bold text-navy">
                  🎉 All modules complete!
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  You&apos;re ready to receive your certification.
                </p>
                <Link
                  href="/academy/certifications"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-accent px-5 py-2.5 text-sm font-bold text-navy shadow-sm transition hover:brightness-105"
                >
                  View certifications <ArrowRight size={14} />
                </Link>
              </div>
            ) : nextModule ? (
              <div className="mt-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-lg bg-navy/5 px-2 py-1 font-mono text-xs font-bold text-navy">
                    {nextModule.id}
                  </span>
                  <div className="min-w-0">
                    <p className="font-serif text-lg font-bold leading-snug text-navy">
                      {nextModule.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <StatusBadge status={nextModule.status} />
                      <CategoryBadge category={nextModule.category} />
                    </div>
                  </div>
                </div>
                <Link
                  href={`/${locale}/academy/module/${nextModule.id}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-navy/90"
                >
                  {nextModule.status === "in_progress" ? "Continue" : "Start"} module
                  <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <p className="mt-4 text-sm text-slate-500">No modules available.</p>
            )}
          </div>
        </section>

        {/* 4 — Module Timeline */}
        <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-navy/5 to-emerald-accent/5 px-6 py-5">
            <h2 className="font-serif text-xl font-bold text-navy">
              {t("planTitle")}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{t("planSubtitle")}</p>
          </div>

          {CATEGORY_ORDER.map((cat) => {
            const catModules = groupedModules[cat];
            if (!catModules || catModules.length === 0) return null;
            const catLabel = CATEGORY_LABELS[cat]?.[lang] ?? cat;
            return (
              <div key={cat}>
                {/* Category header */}
                <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/70 px-6 py-3">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    cat === "foundations" ? "bg-violet-400" :
                    cat === "operations" ? "bg-sky-400" :
                    cat === "quality" ? "bg-amber-400" : "bg-rose-400"
                  }`} />
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {catLabel}
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {catModules.map((mod) => {
                    const isComplete = mod.status === "completed";
                    const isActive = mod.status === "in_progress";
                    return (
                      <div
                        key={mod.id}
                        className={`flex flex-col gap-4 p-5 transition-colors hover:bg-slate-50/80 sm:flex-row sm:items-center sm:p-5 ${
                          isComplete ? "opacity-70" : ""
                        }`}
                      >
                        {/* Status icon */}
                        <div className="shrink-0">
                          {isComplete ? (
                            <CheckCircle2 size={22} className="text-emerald-accent" strokeWidth={2} aria-hidden />
                          ) : isActive ? (
                            <Circle size={22} className="animate-pulse text-blue-500" strokeWidth={2} aria-hidden />
                          ) : (
                            <Circle size={22} className="text-slate-200" strokeWidth={1.5} aria-hidden />
                          )}
                        </div>

                        {/* Module info */}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-bold text-slate-400">{mod.id}</span>
                            <StatusBadge status={mod.status} />
                            <CategoryBadge category={mod.category} />
                          </div>
                          <Link
                            href={`/${locale}/academy/module/${mod.id}`}
                            className={`mt-1 block font-medium leading-snug transition-colors hover:text-emerald-700 ${
                              isComplete ? "text-slate-500" :
                              isActive ? "text-navy" :
                              "text-slate-400"
                            }`}
                          >
                            {mod.title}
                          </Link>
                        </div>

                        {/* CTA button */}
                        <Link
                          href={`/${locale}/academy/module/${mod.id}`}
                          className={`shrink-0 rounded-xl px-4 py-2 text-center text-sm font-bold transition ${
                            isComplete
                              ? "border border-emerald-accent/30 bg-emerald-accent/10 text-navy hover:bg-emerald-accent/20"
                              : isActive
                                ? "bg-emerald-accent text-navy shadow-sm hover:brightness-110"
                                : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700"
                          }`}
                        >
                          {isComplete
                            ? lang === "es" ? "Revisar" : "Review"
                            : isActive
                              ? lang === "es" ? "Continuar" : "Continue"
                              : lang === "es" ? "Comenzar" : "Start"}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* 5 — Quick Actions */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {nextModule && !allComplete && (
            <Link
              href={`/${locale}/academy/module/${nextModule.id}`}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-accent/40 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                <FileText size={20} className="text-emerald-accent" strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                <p className="font-semibold text-navy">Take Assessment</p>
                <p className="text-xs text-slate-500">{nextModule.id} — pending</p>
              </div>
              <ArrowRight size={16} className="ml-auto text-slate-300 transition group-hover:text-emerald-accent" aria-hidden />
            </Link>
          )}
          <Link
            href="/academy/certifications"
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-accent/40 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
              <GraduationCap size={20} className="text-amber-500" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <p className="font-semibold text-navy">View Certification</p>
              <p className="text-xs text-slate-500">CRC Elite credential</p>
            </div>
            <ArrowRight size={16} className="ml-auto text-slate-300 transition group-hover:text-amber-400" aria-hidden />
          </Link>
          <Link
            href="/pricing"
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-accent/40 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50">
              <Shield size={20} className="text-violet-500" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <p className="font-semibold text-navy">Browse Pricing</p>
              <p className="text-xs text-slate-500">Plans & access tiers</p>
            </div>
            <ArrowRight size={16} className="ml-auto text-slate-300 transition group-hover:text-violet-400" aria-hidden />
          </Link>
        </section>

        {/* 6 — Login CTA */}
        {isGuest && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-center">
            <p className="text-sm text-amber-700">
              {lang === "es"
                ? "Vista previa del dashboard. Iniciá sesión para guardar tu progreso."
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

      </div>
    </div>
  );
}
