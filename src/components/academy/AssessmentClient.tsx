"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Award } from "lucide-react";
import type { RubricEvaluationBreakdown } from "@/curriculum-engine";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type CriterionInfo = {
  criterionId: string;
  description: string;
  points: number;
  mapsToDimensions: string[];
  failCondition: string | null;
};

type RubricInfo = {
  rubricId: string;
  totalPoints: number;
  passingPoints: number;
  criteria: CriterionInfo[];
};

type ExerciseInfo = {
  exerciseId: string;
  name: string;
  scenario: string;
  learnerTask: string;
  inputs: string[];
  deliverables: { deliverableId: string; label: string; formatHint: string }[];
};

type ModuleData = {
  id: string;
  title: string;
  objective: string;
  exercises: ExerciseInfo[];
  rubric: RubricInfo;
};

type AttemptResult = {
  attempt: {
    score: number;
    max_score: number;
    percentage: number;
    passed: boolean;
    fail_flags: string[];
    certification_tier: string | null;
    rubric_breakdown: RubricEvaluationBreakdown;
    submitted_at: string;
  };
};

type Step = "instructions" | "responses" | "evaluate" | "results";

const DIMENSION_COLORS: Record<string, string> = {
  R: "bg-red-100 text-red-700",
  O: "bg-blue-100 text-blue-700",
  C: "bg-purple-100 text-purple-700",
  Q: "bg-emerald-100 text-emerald-700",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function AssessmentClient({
  moduleData,
  locale,
}: {
  moduleData: ModuleData;
  locale: string;
}) {
  const lang = locale === "es" ? "es" : "en";
  const [step, setStep] = useState<Step>("instructions");
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [selfEval, setSelfEval] = useState<
    Record<string, { points: number; failed: boolean }>
  >({});
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authState, setAuthState] = useState<
    "loading" | "authenticated" | "guest"
  >("loading");

  // Check auth on mount
  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        setAuthState(data.authenticated ? "authenticated" : "guest");
      })
      .catch(() => setAuthState("guest"));
  }, []);

  // Initialize self-evaluation defaults
  useEffect(() => {
    const defaults: Record<string, { points: number; failed: boolean }> = {};
    for (const c of moduleData.rubric.criteria) {
      defaults[c.criterionId] = { points: c.points, failed: false };
    }
    setSelfEval(defaults);
  }, [moduleData.rubric.criteria]);

  const handleResponseChange = useCallback(
    (deliverableId: string, value: string) => {
      setResponses((prev) => ({ ...prev, [deliverableId]: value }));
    },
    [],
  );

  const handleScoreChange = useCallback(
    (criterionId: string, value: number) => {
      setSelfEval((prev) => ({
        ...prev,
        [criterionId]: { ...prev[criterionId], points: value },
      }));
    },
    [],
  );

  const handleFailToggle = useCallback(
    (criterionId: string) => {
      setSelfEval((prev) => ({
        ...prev,
        [criterionId]: {
          ...prev[criterionId],
          failed: !prev[criterionId]?.failed,
        },
      }));
    },
    [],
  );

  const allResponsesFilled = useMemo(() => {
    if (moduleData.exercises.length === 0) return true;
    return moduleData.exercises.every((ex) =>
      ex.deliverables.every((d) => {
        const val = responses[d.deliverableId];
        return val && val.trim().length > 0;
      }),
    );
  }, [moduleData.exercises, responses]);

  const handleSubmit = useCallback(async () => {
    if (authState !== "authenticated") {
      setError(
        lang === "es"
          ? "Debes iniciar sesión para enviar una evaluación."
          : "You must sign in to submit an assessment.",
      );
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/assessments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleId: moduleData.id,
          responses,
          selfEvaluation: selfEval,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to submit");
        setSubmitting(false);
        return;
      }

      setResult(data as AttemptResult);
      setStep("results");
    } catch {
      setError(
        lang === "es"
          ? "Error de conexión al enviar la evaluación."
          : "Connection error submitting assessment.",
      );
    } finally {
      setSubmitting(false);
    }
  }, [authState, moduleData.id, responses, selfEval, lang]);

  const ex = moduleData.exercises[0];

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------
  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-slate-500">
        <a
          href={`/${locale}/academy/module/${moduleData.id}`}
          className="hover:text-emerald-accent transition-colors"
        >
          {moduleData.title}
        </a>
        <span className="mx-2">/</span>
        <span className="text-slate-800 font-medium">
          {lang === "es" ? "Evaluación" : "Assessment"}
        </span>
      </nav>

      {/* Guest banner */}
      {authState === "guest" && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-700">
            {lang === "es"
              ? "Vista previa de solo lectura. Inicia sesión para enviar tu evaluación."
              : "Read-only preview. Sign in to submit your assessment."}
          </p>
          <a
            href={`/${locale}/login`}
            className="mt-2 inline-block rounded-lg bg-amber-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-700"
          >
            {lang === "es" ? "Iniciar sesión" : "Sign in"}
          </a>
        </div>
      )}

      {/* Step indicator */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        {(
          [
            ["instructions", lang === "es" ? "Instrucciones" : "Instructions"],
            ["responses", lang === "es" ? "Respuestas" : "Responses"],
            ["evaluate", lang === "es" ? "Auto-evaluación" : "Self-evaluation"],
            ["results", lang === "es" ? "Resultados" : "Results"],
          ] as [Step, string][]
        ).map(([s, label], idx) => {
          const isActive = step === s;
          const isDone =
            ["instructions", "responses", "evaluate", "results"].indexOf(step) >
            idx;
          return (
            <div key={s} className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  isDone
                    ? "bg-emerald-accent text-navy"
                    : isActive
                      ? "bg-navy text-white"
                      : "bg-slate-200 text-slate-400"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 size={14} />
                ) : (
                  idx + 1
                )}
              </span>
              <span
                className={`hidden sm:inline ${
                  isActive
                    ? "font-semibold text-navy"
                    : isDone
                      ? "text-emerald-600"
                      : "text-slate-400"
                }`}
              >
                {label}
              </span>
              {idx < 3 && <span className="text-slate-300">→</span>}
            </div>
          );
        })}
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* ================================================================ */}
      {/* STEP: Instructions */}
      {/* ================================================================ */}
      {step === "instructions" && (
        <section>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-navy">
            {lang === "es"
              ? `Evaluación: ${moduleData.title}`
              : `Assessment: ${moduleData.title}`}
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {moduleData.objective}
          </p>

          {ex && (
            <div className="mt-8 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-navy">{ex.name}</h2>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {lang === "es" ? "Escenario" : "Scenario"}
                  </p>
                  <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                    {ex.scenario}
                  </p>
                </div>
                {ex.inputs.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {lang === "es" ? "Materiales" : "Inputs"}
                    </p>
                    <ul className="mt-1 space-y-1">
                      {ex.inputs.map((input, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <span className="h-1 w-1 rounded-full bg-slate-400" />
                          {input}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {lang === "es" ? "Tarea" : "Task"}
                  </p>
                  <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                    {ex.learnerTask}
                  </p>
                </div>
              </div>

              {/* Deliverables overview */}
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/30 p-5">
                <h3 className="font-semibold text-navy">
                  {lang === "es" ? "Entregables" : "Deliverables"}
                </h3>
                <ul className="mt-3 space-y-2">
                  {ex.deliverables.map((d) => (
                    <li
                      key={d.deliverableId}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-accent" />
                      <span className="font-medium">{d.label}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                        {d.formatHint}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rubric overview */}
              <div className="rounded-xl border border-amber-100 bg-amber-50/30 p-5">
                <h3 className="font-semibold text-navy">
                  {lang === "es" ? "Criterios de evaluación" : "Evaluation criteria"}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {lang === "es"
                    ? `${moduleData.rubric.criteria.length} criterios · ${moduleData.rubric.totalPoints} puntos totales · Aprobación: ${moduleData.rubric.passingPoints} pts`
                    : `${moduleData.rubric.criteria.length} criteria · ${moduleData.rubric.totalPoints} total points · Passing: ${moduleData.rubric.passingPoints} pts`}
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => setStep("responses")}
              className="rounded-xl bg-emerald-accent px-6 py-3 text-sm font-bold text-navy shadow-sm transition hover:brightness-110"
            >
              {lang === "es" ? "Comenzar evaluación" : "Start assessment"}
            </button>
          </div>
        </section>
      )}

      {/* ================================================================ */}
      {/* STEP: Responses */}
      {/* ================================================================ */}
      {step === "responses" && ex && (
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">
            {lang === "es" ? "Tus respuestas" : "Your responses"}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {lang === "es"
              ? "Escribe tus respuestas para cada entregable basándote en el escenario."
              : "Write your responses for each deliverable based on the scenario."}
          </p>

          <div className="mt-6 space-y-6">
            {ex.deliverables.map((d) => (
              <div key={d.deliverableId}>
                <label className="block text-sm font-semibold text-navy">
                  {d.label}
                  <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-normal text-slate-500">
                    {d.formatHint}
                  </span>
                </label>
                <textarea
                  value={responses[d.deliverableId] ?? ""}
                  onChange={(e) =>
                    handleResponseChange(d.deliverableId, e.target.value)
                  }
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-emerald-accent focus:outline-none focus:ring-2 focus:ring-emerald-accent/20"
                  placeholder={
                    lang === "es"
                      ? "Escribe tu respuesta aquí..."
                      : "Write your response here..."
                  }
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep("instructions")}
              className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              {lang === "es" ? "Volver" : "Back"}
            </button>
            <button
              type="button"
              disabled={!allResponsesFilled}
              onClick={() => setStep("evaluate")}
              className="rounded-xl bg-emerald-accent px-6 py-2.5 text-sm font-bold text-navy shadow-sm transition hover:brightness-110 disabled:opacity-50"
            >
              {lang === "es" ? "Auto-evaluar" : "Self-evaluate"}
            </button>
          </div>
        </section>
      )}

      {/* ================================================================ */}
      {/* STEP: Self-evaluation */}
      {/* ================================================================ */}
      {step === "evaluate" && (
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">
            {lang === "es"
              ? "Auto-evaluación según rúbrica"
              : "Self-evaluation by rubric"}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {lang === "es"
              ? "Evalúa tu propio desempeño para cada criterio. Marca 'Fallo crítico' si crees que aplica una condición de fallo."
              : "Evaluate your own performance for each criterion. Check 'Critical fail' if you believe a fail condition applies."}
          </p>

          <div className="mt-6 space-y-4">
            {moduleData.rubric.criteria.map((c) => {
              const evalEntry = selfEval[c.criterionId] ?? {
                points: c.points,
                failed: false,
              };
              return (
                <div
                  key={c.criterionId}
                  className={`rounded-xl border p-5 shadow-sm transition ${
                    evalEntry.failed
                      ? "border-red-200 bg-red-50/50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <p className="flex-1 text-sm font-medium text-slate-900">
                      {c.description}
                    </p>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="rounded-full bg-navy px-2.5 py-0.5 text-xs font-semibold text-white">
                        {c.points}
                      </span>
                      {c.mapsToDimensions.map((dim) => (
                        <span
                          key={dim}
                          className={`rounded-full px-2 py-0.5 text-xs font-mono font-semibold ${
                            DIMENSION_COLORS[dim] ?? "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {dim}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Score slider */}
                  <div className="mt-4 flex items-center gap-4">
                    <label className="text-xs font-medium text-slate-500">
                      {lang === "es" ? "Puntaje" : "Score"}:
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={c.points}
                      value={evalEntry.points}
                      onChange={(e) =>
                        handleScoreChange(c.criterionId, Number(e.target.value))
                      }
                      className="flex-1 h-2 rounded-full appearance-none bg-slate-200 accent-emerald-accent cursor-pointer"
                    />
                    <span className="w-12 text-right text-sm font-mono font-semibold text-navy">
                      {evalEntry.points}/{c.points}
                    </span>
                  </div>

                  {/* Fail toggle */}
                  <div className="mt-3 flex items-center gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={evalEntry.failed}
                        onChange={() => handleFailToggle(c.criterionId)}
                        className="h-4 w-4 rounded border-slate-300 text-red-500 focus:ring-red-400"
                      />
                      <span className="text-xs font-medium text-red-600">
                        {lang === "es" ? "Fallo crítico" : "Critical fail"}
                      </span>
                    </label>
                    {c.failCondition && (
                      <span className="text-xs text-slate-400 italic">
                        {c.failCondition.length > 80
                          ? c.failCondition.slice(0, 80) + "..."
                          : c.failCondition}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep("responses")}
              className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              {lang === "es" ? "Volver a respuestas" : "Back to responses"}
            </button>
            <button
              type="button"
              disabled={submitting}
              onClick={handleSubmit}
              className="rounded-xl bg-emerald-accent px-6 py-2.5 text-sm font-bold text-navy shadow-sm transition hover:brightness-110 disabled:opacity-50"
            >
              {submitting
                ? lang === "es"
                  ? "Enviando..."
                  : "Submitting..."
                : lang === "es"
                  ? "Enviar evaluación"
                  : "Submit assessment"}
            </button>
          </div>
        </section>
      )}

      {/* ================================================================ */}
      {/* STEP: Results */}
      {/* ================================================================ */}
      {step === "results" && result && (
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">
            {lang === "es" ? "Resultados" : "Results"}
          </h2>

          {/* Score card */}
          <div
            className={`mt-6 rounded-xl border-2 p-6 shadow-sm ${
              result.attempt.passed
                ? "border-emerald-300 bg-emerald-50"
                : "border-red-200 bg-red-50"
            }`}
          >
            <div className="flex items-center gap-4">
              {result.attempt.passed ? (
                <CheckCircle2 className="shrink-0 text-emerald-500" size={40} />
              ) : (
                <XCircle className="shrink-0 text-red-500" size={40} />
              )}
              <div>
                <p
                  className={`text-lg font-bold ${
                    result.attempt.passed
                      ? "text-emerald-800"
                      : "text-red-800"
                  }`}
                >
                  {result.attempt.passed
                    ? lang === "es"
                      ? "Aprobado"
                      : "Passed"
                    : lang === "es"
                      ? "No aprobado"
                      : "Not passed"}
                </p>
                <p className="text-sm text-slate-600">
                  {lang === "es"
                    ? `Puntaje: ${result.attempt.score} / ${result.attempt.max_score} (${result.attempt.percentage}%)`
                    : `Score: ${result.attempt.score} / ${result.attempt.max_score} (${result.attempt.percentage}%)`}
                </p>
              </div>
            </div>

            {/* Score bar */}
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className={`h-full rounded-full transition-[width] duration-700 ${
                  result.attempt.passed
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-600"
                    : "bg-gradient-to-r from-red-400 to-red-600"
                }`}
                style={{ width: `${result.attempt.percentage}%` }}
              />
            </div>

            {/* Certification tier */}
            {result.attempt.certification_tier && (
              <div className="mt-4 flex items-center gap-2">
                <Award
                  size={18}
                  className={
                    result.attempt.certification_tier === "honors"
                      ? "text-amber-500"
                      : "text-slate-500"
                  }
                />
                <span className="text-sm font-semibold text-slate-700">
                  {result.attempt.certification_tier === "honors"
                    ? lang === "es"
                      ? "Honores"
                      : "Honors"
                    : result.attempt.certification_tier === "standard"
                      ? lang === "es"
                        ? "Estándar"
                        : "Standard"
                      : lang === "es"
                        ? "Marginal"
                        : "Marginal"}
                </span>
              </div>
            )}

            {/* Fail flags */}
            {result.attempt.fail_flags.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-2 text-sm font-semibold text-red-700">
                  <AlertTriangle size={16} />
                  {lang === "es"
                    ? "Fallos críticos detectados"
                    : "Critical fails detected"}
                </p>
                {result.attempt.fail_flags.map((flag) => (
                  <p
                    key={flag}
                    className="rounded-lg bg-red-100/80 px-3 py-2 text-xs text-red-700"
                  >
                    {flag}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Rubric breakdown */}
          <div className="mt-6">
            <h3 className="mb-4 text-lg font-semibold text-navy">
              {lang === "es"
                ? "Desglose por criterio"
                : "Rubric breakdown"}
            </h3>
            <div className="space-y-3">
              {moduleData.rubric.criteria.map((c) => {
                const evalEntry = selfEval[c.criterionId];
                const points = evalEntry?.points ?? 0;
                const failed = evalEntry?.failed ?? false;
                return (
                  <div
                    key={c.criterionId}
                    className={`rounded-xl border p-4 ${
                      failed
                        ? "border-red-200 bg-red-50/50"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="flex-1 text-sm text-slate-700">
                        {c.description}
                      </p>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          failed
                            ? "bg-red-100 text-red-700"
                            : points >= c.points * 0.8
                              ? "bg-emerald-100 text-emerald-700"
                              : points >= c.points * 0.5
                                ? "bg-amber-100 text-amber-700"
                                : "bg-red-100 text-red-700"
                        }`}
                      >
                        {points}/{c.points}
                      </span>
                    </div>
                    {failed && c.failCondition && (
                      <p className="mt-2 text-xs text-red-600">
                        ⚠ {c.failCondition}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Remediation hint */}
          {!result.attempt.passed && (
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h4 className="font-semibold text-amber-800">
                {lang === "es"
                  ? "Sugerencia de remediación"
                  : "Remediation suggestion"}
              </h4>
              <p className="mt-1 text-sm text-amber-700">
                {lang === "es"
                  ? "Revisa los criterios donde obtuviste menor puntaje o marcaste fallo crítico. Vuelve a estudiar el módulo y los ejercicios prácticos antes de intentar la evaluación nuevamente."
                  : "Review the criteria where you scored lower or marked critical fails. Re-study the module and practical exercises before retaking the assessment."}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`/${locale}/academy/module/${moduleData.id}`}
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50"
            >
              {lang === "es" ? "Volver al módulo" : "Back to module"}
            </a>
            <a
              href={`/${locale}/dashboard`}
              className="rounded-xl border border-emerald-accent/30 bg-emerald-accent/10 px-6 py-3 text-sm font-semibold text-navy shadow-sm transition hover:bg-emerald-accent/20"
            >
              {lang === "es" ? "Ir al dashboard" : "Go to dashboard"}
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
