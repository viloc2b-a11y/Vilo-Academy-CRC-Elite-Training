import type { AssessmentRubric, ScorecardContribution, CompetencyDimension } from "@/curriculum-engine";
import { resolveBilingual } from "@/curriculum-engine";
import type { LocaleCode } from "@/curriculum-engine/types/common";

type Props = {
  rubric: AssessmentRubric;
  scorecard: readonly ScorecardContribution[];
  locale: LocaleCode;
};

const DIMENSION_COLORS: Record<CompetencyDimension, string> = {
  R: "bg-red-50 text-red-700 border-red-200",
  O: "bg-blue-50 text-blue-700 border-blue-200",
  C: "bg-purple-50 text-purple-700 border-purple-200",
  Q: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function AssessmentPreview({ rubric, scorecard, locale }: Props) {
  if (!rubric || rubric.criteria.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="mb-5 font-serif text-2xl font-bold text-navy">
        {locale === "es" ? "Rúbrica de evaluación" : "Assessment rubric"}
      </h2>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        {/* Summary row */}
        <div className="mb-5 flex flex-wrap items-center gap-4 text-sm">
          <span className="text-slate-500">
            {locale === "es" ? "Puntaje total" : "Total points"}:{" "}
            <span className="font-semibold text-slate-800">{rubric.totalPoints}</span>
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500">
            {locale === "es" ? "Aprobación" : "Passing"}:{" "}
            <span className="font-semibold text-emerald-600">{rubric.passingPoints}</span>
          </span>
        </div>

        {/* Scorecard dimensions */}
        {scorecard.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {scorecard.map((sc) => (
              <span
                key={sc.dimension}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${DIMENSION_COLORS[sc.dimension]}`}
              >
                <span className="font-mono">{sc.dimension}</span>
                <span>{Math.round(sc.weight * 100)}%</span>
              </span>
            ))}
          </div>
        )}

        {/* Criteria list */}
        <div className="space-y-3">
          {rubric.criteria.map((criterion) => (
            <div
              key={criterion.criterionId}
              className="rounded-lg border border-slate-100 bg-slate-50/50 p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">
                    {resolveBilingual(criterion.description, locale)}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="rounded-full bg-navy px-2.5 py-0.5 text-xs font-semibold text-white">
                    {criterion.points}
                  </span>
                  {criterion.mapsToDimensions.length > 0 && (
                    <div className="flex gap-1">
                      {criterion.mapsToDimensions.map((dim) => (
                        <span
                          key={dim}
                          className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-mono font-semibold text-slate-600"
                        >
                          {dim}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {criterion.failCondition && (
                <div className="mt-2 flex items-start gap-2 rounded-md bg-rose-50 px-3 py-2">
                  <span className="mt-0.5 text-xs text-rose-400">⚠</span>
                  <p className="text-xs leading-5 text-rose-700">
                    {resolveBilingual(criterion.failCondition, locale)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read-only notice */}
        <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-xs leading-5 text-amber-700">
            {locale === "es"
              ? "Vista previa de rúbrica — la evaluación y el envío de puntajes se habilitarán en una próxima actualización."
              : "Rubric preview — assessment and score submission will be enabled in a future update."}
          </p>
        </div>
      </div>
    </section>
  );
}
