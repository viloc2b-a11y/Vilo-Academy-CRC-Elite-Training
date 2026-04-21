"use client";

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

export type ModuleStatus = "completed" | "current" | "locked";

export interface ModuleItem {
  id: string;
  title: string;
  status: ModuleStatus;
  version_sop: string;
}

function buildModules(locale: string): ModuleItem[] {
  // Demo dashboard: statuses are placeholders (no persistence yet).
  return CRC_ELITE_MODULE_REGISTRY.filter((m) => m.category !== "capstone").map(
    (m, idx): ModuleItem => {
      const moduleNumber = idx + 1;
      const status: ModuleStatus =
        moduleNumber === 1 ? "completed" : moduleNumber === 2 ? "current" : "locked";

      return {
        id: m.id,
        title: resolveBilingual(m.title, locale === "es" ? "es" : "en"),
        status,
        version_sop: `SOP-${String(moduleNumber).padStart(2, "0")}-2026`,
      };
    },
  );
}

export function StudentDashboard() {
  const locale = useLocale();
  const t = useTranslations("studentDashboard");
  const modules = buildModules(locale);

  const completedCount = modules.filter((m) => m.status === "completed").length;
  const totalCount = modules.length;
  const progress =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-[1400px] flex-col rounded-2xl border border-slate-200/80 bg-slate-50 shadow-sm lg:flex-row lg:overflow-hidden">
      {/* Sidebar — deep navy + emerald accents (Vilo brand) */}
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
            href="/certificates"
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
          href="/certificates"
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
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-accent">
              {t("kicker")}
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-navy md:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-2 max-w-xl text-slate-600">{t("subtitle")}</p>
          </div>
          <div className="flex items-center gap-4 sm:text-right">
            <div>
              <p className="text-sm font-semibold text-navy">{t("studentId")}</p>
              <p className="text-xs italic text-slate-500">{t("sessionLabel")}</p>
            </div>
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-accent to-emerald-600 text-sm font-bold text-navy shadow-md ring-2 ring-white"
              aria-hidden
            >
              JM
            </div>
          </div>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500">
              {t("cardProgress")}
            </h3>
            <div className="mt-2 flex items-end justify-between gap-2">
              <span className="font-serif text-3xl font-bold text-navy">
                {progress}%
              </span>
              <span className="text-sm font-semibold text-emerald-accent">
                {completedCount} / {totalCount} {t("modulesWord")}
              </span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-accent to-emerald-600 transition-[width] duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500">
              {t("cardMilestone")}
            </h3>
            <p className="mt-2 font-serif text-lg font-bold text-navy">
              {t("milestoneTitle")}
            </p>
            <p className="mt-1 text-xs text-slate-500">{t("milestoneHint")}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
              <span className="font-serif text-2xl font-bold text-navy">1</span>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-navy/5 to-emerald-accent/5 px-6 py-5">
            <h2 className="font-serif text-xl font-bold text-navy">
              {t("planTitle")}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{t("planSubtitle")}</p>
          </div>
          <div className="divide-y divide-slate-100">
            {modules.map((module) => (
              <div
                key={module.id}
                className="flex flex-col gap-4 p-5 transition-colors hover:bg-slate-50/80 sm:flex-row sm:items-center sm:justify-between sm:p-6"
              >
                <div className="flex min-w-0 items-start gap-4">
                  {module.status === "completed" && (
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-emerald-accent"
                      size={22}
                      strokeWidth={2}
                      aria-label={t("a11yCompleted")}
                    />
                  )}
                  {module.status === "current" && (
                    <Circle
                      className="mt-0.5 shrink-0 animate-pulse text-emerald-accent"
                      size={22}
                      strokeWidth={2}
                      aria-label={t("a11yCurrent")}
                    />
                  )}
                  {module.status === "locked" && (
                    <Lock
                      className="mt-0.5 shrink-0 text-slate-300"
                      size={22}
                      strokeWidth={1.75}
                      aria-label={t("a11yLocked")}
                    />
                  )}
                  <div className="min-w-0">
                    <h4
                      className={`font-medium leading-snug ${
                        module.status === "locked"
                          ? "text-slate-400"
                          : "text-navy"
                      }`}
                    >
                      {module.id}. {module.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400">
                      {t("versionLabel")} {module.version_sop}
                    </p>
                  </div>
                </div>
                {module.status !== "locked" && (
                  <button
                    type="button"
                    className="shrink-0 rounded-xl border border-emerald-accent/30 bg-emerald-accent/10 px-4 py-2 text-sm font-bold text-navy transition hover:bg-emerald-accent/20"
                  >
                    {module.status === "completed"
                      ? t("btnReview")
                      : t("btnContinue")}
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
