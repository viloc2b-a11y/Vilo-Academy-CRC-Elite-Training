import type { Module, ModuleRegistryItem, CompetencyDimension } from "@/curriculum-engine";
import { CRC_ELITE_COURSE, resolveBilingual } from "@/curriculum-engine";
import type { LocaleCode } from "@/curriculum-engine/types/common";

const DIMENSION_COLORS: Record<CompetencyDimension, string> = {
  R: "bg-red-100 text-red-700 ring-red-300/40",
  O: "bg-blue-100 text-blue-700 ring-blue-300/40",
  C: "bg-purple-100 text-purple-700 ring-purple-300/40",
  Q: "bg-emerald-100 text-emerald-700 ring-emerald-300/40",
};

const CATEGORY_LABELS: Record<string, BilingualFallback> = {
  foundations: { en: "Foundations", es: "Fundamentos" },
  operations: { en: "Operations", es: "Operaciones" },
  quality: { en: "Quality", es: "Calidad" },
  capstone: { en: "Capstone", es: "Capstone" },
  intro: { en: "Introduction", es: "Introducción" },
  advanced: { en: "Advanced", es: "Avanzado" },
};

type BilingualFallback = { en: string; es: string };

function categoryLabel(category: string, locale: LocaleCode): string {
  return CATEGORY_LABELS[category]?.[locale] ?? category;
}

type Props = {
  mod: Module;
  registryItem: ModuleRegistryItem;
  locale: LocaleCode;
  moduleIndex: number;
  totalModules: number;
};

export function ModuleHeader({ mod, registryItem, locale, moduleIndex, totalModules }: Props) {
  const lang = locale;
  const course = CRC_ELITE_COURSE;

  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-slate-500">
        <a href={`/${locale}/dashboard`} className="hover:text-emerald-accent transition-colors">
          {lang === "es" ? "Dashboard" : "Dashboard"}
        </a>
        <span className="mx-2">/</span>
        <span className="text-slate-800 font-medium">
          {registryItem.id}
        </span>
      </nav>

      {/* Module number and badges row */}
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
          {lang === "es" ? `Módulo ${moduleIndex + 1}` : `Module ${moduleIndex + 1}`}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
          {categoryLabel(registryItem.category, locale)}
        </span>
        {registryItem.isFlagship && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-300/40">
            {lang === "es" ? "Insignia" : "Flagship"}
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="font-serif text-3xl font-bold tracking-tight text-navy">
        {resolveBilingual(mod.title, locale)}
      </h1>

      {/* Objective */}
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
        {resolveBilingual(mod.objective, locale)}
      </p>

      {/* Dimension badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {mod.mappedDimensions.map((dim) => (
          <span
            key={dim}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${DIMENSION_COLORS[dim]}`}
          >
            <span className="font-mono text-sm">{dim}</span>
            <span>
              {resolveBilingual(course.metadata.instructionalModel.dimensionLabels[dim], locale)}
            </span>
          </span>
        ))}
      </div>

      {/* Scorecard contribution hint */}
      {mod.scorecardContribution.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500">
          {mod.scorecardContribution.map((sc) => (
            <span key={sc.dimension}>
              <span className="font-mono text-xs font-semibold text-slate-400">{sc.dimension}</span>{" "}
              {Math.round(sc.weight * 100)}
              {"%"}
            </span>
          ))}
          <span className="text-slate-300">·</span>
          <span className="text-xs text-slate-400">
            {totalModules > 0 && (
              <>
                {Math.round(
                  (CRC_ELITE_COURSE.scorecardModel.moduleWeightsExcludingCapstone[mod.id] ?? 0) * 100
                )}
                {"%"}{" "}
                {lang === "es" ? "del peso total del curso" : "of total course weight"}
              </>
            )}
          </span>
        </div>
      )}
    </div>
  );
}
