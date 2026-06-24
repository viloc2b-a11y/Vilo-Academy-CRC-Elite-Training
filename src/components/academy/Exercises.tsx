import type { PracticalExercise, ErrorCase } from "@/curriculum-engine";
import { resolveBilingual } from "@/curriculum-engine";
import type { LocaleCode } from "@/curriculum-engine/types/common";

type Props = {
  exercises: readonly PracticalExercise[];
  errorLibrary: readonly ErrorCase[];
  locale: LocaleCode;
};

export function Exercises({ exercises, errorLibrary, locale }: Props) {
  const hasExercises = exercises && exercises.length > 0;
  const hasErrors = errorLibrary && errorLibrary.length > 0;

  if (!hasExercises && !hasErrors) return null;

  return (
    <section className="mb-10">
      <h2 className="mb-5 font-serif text-2xl font-bold text-navy">
        {locale === "es" ? "Ejercicios y errores comunes" : "Exercises & common errors"}
      </h2>

      {/* Practical exercises */}
      {hasExercises && (
        <div className="mb-8 space-y-5">
          <h3 className="text-lg font-semibold text-navy">
            {locale === "es" ? "Ejercicios prácticos" : "Practical exercises"}
          </h3>
          {exercises.map((ex) => (
            <article
              key={ex.exerciseId}
              className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5 shadow-sm"
            >
              <h4 className="text-base font-bold text-navy">
                {resolveBilingual(ex.name, locale)}
              </h4>

              {/* Scenario */}
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {locale === "es" ? "Escenario" : "Scenario"}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {resolveBilingual(ex.scenario, locale)}
                </p>
              </div>

              {/* Inputs */}
              {ex.inputs && ex.inputs.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {locale === "es" ? "Materiales" : "Inputs"}
                  </p>
                  <ul className="mt-1 space-y-1">
                    {ex.inputs.map((input) => (
                      <li key={input.inputId} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="h-1 w-1 rounded-full bg-slate-400" />
                        <span>{resolveBilingual(input.label, locale)}</span>
                        <span className="text-xs text-slate-400">({input.inputKind})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learner task */}
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {locale === "es" ? "Tarea" : "Task"}
                </p>
                <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                  {resolveBilingual(ex.learnerTask, locale)}
                </p>
              </div>

              {/* Deliverables */}
              {ex.deliverables && ex.deliverables.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {locale === "es" ? "Entregables" : "Deliverables"}
                  </p>
                  <ul className="mt-1 space-y-1">
                    {ex.deliverables.map((del) => (
                      <li key={del.deliverableId} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="h-1 w-1 rounded-full bg-emerald-accent" />
                        <span>{resolveBilingual(del.label, locale)}</span>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                          {del.formatHint}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {/* Error library */}
      {hasErrors && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-navy">
            {locale === "es" ? "Errores comunes y biblioteca de hallazgos" : "Common errors & findings"}
          </h3>
          <div className="space-y-3">
            {errorLibrary.map((err) => (
              <ErrorCard key={err.errorId} error={err} locale={locale} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function ErrorCard({ error, locale }: { error: ErrorCase; locale: LocaleCode }) {
  return (
    <article className="rounded-xl border border-rose-100 bg-rose-50/30 p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="flex-1 text-sm font-semibold text-rose-800">
          {resolveBilingual(error.description, locale)}
        </p>
        <div className="flex flex-wrap gap-1">
          {error.relatedDimensions.map((dim) => (
            <span
              key={dim}
              className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-mono font-semibold text-rose-600"
            >
              {dim}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
            {locale === "es" ? "Riesgo generado" : "Risk generated"}
          </p>
          <p className="mt-1 text-sm leading-5 text-rose-700">
            {resolveBilingual(error.risk, locale)}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            {locale === "es" ? "Respuesta esperada" : "Expected response"}
          </p>
          <p className="mt-1 text-sm leading-5 text-slate-700">
            {resolveBilingual(error.expectedLearnerResponse, locale)}
          </p>
        </div>
      </div>
    </article>
  );
}
