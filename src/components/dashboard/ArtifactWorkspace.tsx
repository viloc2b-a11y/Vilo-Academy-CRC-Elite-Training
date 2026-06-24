"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ONCOLOGY_OSCE_MOCK_STUDY,
  OPERATIONAL_ARTIFACT_TEMPLATES,
  resolveBilingual,
} from "@/curriculum-engine";

type Props = {
  locale: string;
};

type PersistedSubmission = {
  fieldValues: Record<string, string>;
  checklistState: Record<string, boolean>;
  status: string;
};

export function ArtifactWorkspace({ locale }: Props) {
  const lang = locale === "es" ? "es" : "en";
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    OPERATIONAL_ARTIFACT_TEMPLATES[0]?.templateId ?? "",
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [savedByTemplate, setSavedByTemplate] = useState<Record<string, PersistedSubmission>>(
    {},
  );
  const [saveState, setSaveState] = useState<"idle" | "loading" | "saved" | "error">(
    "idle",
  );
  const [persistenceStatus, setPersistenceStatus] = useState<
    "checking" | "available" | "unavailable"
  >("checking");
  const [message, setMessage] = useState<string | null>(null);

  const selectedTemplate = useMemo(
    () =>
      OPERATIONAL_ARTIFACT_TEMPLATES.find(
        (template) => template.templateId === selectedTemplateId,
      ) ?? OPERATIONAL_ARTIFACT_TEMPLATES[0],
    [selectedTemplateId],
  );

  const artifact = ONCOLOGY_OSCE_MOCK_STUDY.artifacts.find(
    (item) => item.artifactId === selectedTemplate?.artifactId,
  );

  useEffect(() => {
    let canceled = false;
    async function loadSubmissions() {
      try {
        const res = await fetch("/api/artifact-submissions");
        if (!res.ok) {
          if (!canceled) setPersistenceStatus("unavailable");
          return;
        }
        const data = (await res.json()) as {
          submissions?: Array<{
            template_id: string;
            field_values?: Record<string, string>;
            checklist_state?: Record<string, boolean>;
            status?: string;
          }>;
        };
        if (canceled) return;
        const next: typeof savedByTemplate = {};
        for (const item of data.submissions ?? []) {
          next[item.template_id] = {
            fieldValues: item.field_values ?? {},
            checklistState: item.checklist_state ?? {},
            status: item.status ?? "draft",
          };
        }
        setSavedByTemplate(next);
        setPersistenceStatus("available");
      } catch {
        if (!canceled) setPersistenceStatus("unavailable");
        /* Workspace still works as an unsaved local draft. */
      }
    }
    loadSubmissions();
    return () => {
      canceled = true;
    };
  }, []);

  useEffect(() => {
    const saved = savedByTemplate[selectedTemplateId];
    setFieldValues(saved?.fieldValues ?? {});
    setChecked(saved?.checklistState ?? {});
    setSaveState("idle");
    setMessage(null);
  }, [savedByTemplate, selectedTemplateId]);

  if (!selectedTemplate || !artifact) return null;

  const requiredFieldCount = selectedTemplate.sections.reduce(
    (acc, section) => acc + section.fields.filter((field) => field.required).length,
    0,
  );
  const checklistComplete = selectedTemplate.reviewerChecklist.filter(
    (_, idx) => checked[checklistKey(selectedTemplate.templateId, idx)],
  ).length;

  async function saveSubmission(status: "draft" | "submitted") {
    if (persistenceStatus !== "available") {
      setSaveState("error");
      setMessage(
        lang === "es"
          ? "Activa Supabase e inicia sesión para guardar evidencia en VILO OS."
          : "Connect Supabase and sign in to save evidence in VILO OS.",
      );
      return;
    }

    setSaveState("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/artifact-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateId: selectedTemplate.templateId,
          artifactId: selectedTemplate.artifactId,
          status,
          fieldValues,
          checklistState: checked,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "save failed");
      }

      setSavedByTemplate((current) => ({
        ...current,
        [selectedTemplate.templateId]: {
          fieldValues,
          checklistState: checked,
          status,
        },
      }));
      setSaveState("saved");
      setMessage(
        status === "submitted"
          ? lang === "es"
            ? "Evidencia enviada."
            : "Evidence submitted."
          : lang === "es"
            ? "Borrador guardado."
            : "Draft saved.",
      );
    } catch (error) {
      setSaveState("error");
      setMessage(
        readableSaveError(error, lang),
      );
    }
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-accent">
          {lang === "es" ? "Espacio de artefactos" : "Artifact workspace"}
        </p>
        <div className="mt-2 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">
              {lang === "es" ? "Plantillas operativas" : "Operational templates"}
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
              {lang === "es"
                ? "Selecciona un artefacto, revisa el estándar y prepara evidencia para certificación."
                : "Select an artifact, review the standard, and prepare evidence for certification."}
            </p>
          </div>
          <select
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-navy shadow-sm focus:border-emerald-accent focus:outline-none focus:ring-2 focus:ring-emerald-accent/20 lg:max-w-md"
            value={selectedTemplate.templateId}
            onChange={(event) => {
              setSelectedTemplateId(event.target.value);
            }}
          >
            {OPERATIONAL_ARTIFACT_TEMPLATES.map((template) => (
              <option key={template.templateId} value={template.templateId}>
                {template.artifactId} - {resolveBilingual(template.title, lang)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-0 xl:grid-cols-[0.95fr_1.05fr]">
        <aside className="border-b border-slate-200 bg-slate-50 p-6 xl:border-b-0 xl:border-r">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {artifact.artifactId}
            </p>
            <h3 className="mt-2 font-semibold text-navy">
              {resolveBilingual(selectedTemplate.title, lang)}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {resolveBilingual(artifact.operationalUse, lang)}
            </p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            <WorkspaceMetric
              label={lang === "es" ? "Secciones" : "Sections"}
              value={selectedTemplate.sections.length}
            />
            <WorkspaceMetric
              label={lang === "es" ? "Campos requeridos" : "Required fields"}
              value={requiredFieldCount}
            />
            <WorkspaceMetric
              label={lang === "es" ? "Checklist" : "Checklist"}
              value={`${checklistComplete}/${selectedTemplate.reviewerChecklist.length}`}
            />
          </div>

          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h4 className="text-sm font-semibold text-amber-900">
              {lang === "es" ? "Disparadores de escalamiento" : "Escalation triggers"}
            </h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-900">
              {selectedTemplate.escalationTriggers.map((trigger) => (
                <li key={resolveBilingual(trigger, "en")} className="flex gap-2">
                  <span aria-hidden>•</span>
                  <span>{resolveBilingual(trigger, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="p-6">
          <div className="mb-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-navy">
                {lang === "es" ? "Evidencia del alumno" : "Learner evidence"}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {lang === "es"
                  ? "Guardar requiere sesión activa y Supabase configurado."
                  : "Saving requires an active session and configured Supabase."}
              </p>
              {message ? (
                <p
                  className={`mt-2 text-xs ${
                    saveState === "error" ? "text-red-600" : "text-emerald-700"
                  }`}
                >
                  {message}
                </p>
              ) : null}
              {persistenceStatus === "unavailable" ? (
                <p className="mt-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">
                  {lang === "es"
                    ? "Modo práctica local: puedes trabajar la plantilla, pero el guardado se habilita al conectar sesión y base de datos."
                    : "Local practice mode: you can work through the template, and saving unlocks once session and database are connected."}
                </p>
              ) : null}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={saveState === "loading" || persistenceStatus !== "available"}
                onClick={() => saveSubmission("draft")}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm transition hover:bg-slate-50 disabled:opacity-60"
              >
                {lang === "es" ? "Guardar borrador" : "Save draft"}
              </button>
              <button
                type="button"
                disabled={saveState === "loading" || persistenceStatus !== "available"}
                onClick={() => saveSubmission("submitted")}
                className="rounded-xl bg-emerald-accent px-4 py-2 text-sm font-semibold text-navy shadow-sm transition hover:brightness-110 disabled:opacity-60"
              >
                {lang === "es" ? "Enviar evidencia" : "Submit evidence"}
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-accent/30 bg-emerald-accent/10 p-4">
            <h4 className="text-sm font-semibold text-navy">
              {lang === "es" ? "Estándar de completitud" : "Completion standard"}
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {resolveBilingual(selectedTemplate.completionStandard, lang)}
            </p>
          </div>

          <div className="mt-5 space-y-4">
            {selectedTemplate.sections.map((section) => (
              <article
                key={section.sectionId}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <h4 className="font-semibold text-navy">
                  {resolveBilingual(section.title, lang)}
                </h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {resolveBilingual(section.purpose, lang)}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {section.fields.map((field) => (
                    <div
                      key={field.fieldId}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-navy">
                          {resolveBilingual(field.label, lang)}
                        </p>
                        {field.required ? (
                          <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-600">
                            {lang === "es" ? "Requerido" : "Required"}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                        {fieldTypeLabel(field.fieldType, lang)}
                      </p>
                      <TemplateInput
                        lang={lang}
                        fieldType={field.fieldType}
                        value={fieldValues[field.fieldId] ?? ""}
                        options={field.options?.map((option) => resolveBilingual(option, lang))}
                        placeholder={
                          field.placeholder
                            ? resolveBilingual(field.placeholder, lang)
                            : undefined
                        }
                        onChange={(value) =>
                          setFieldValues((current) => ({
                            ...current,
                            [field.fieldId]: value,
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="text-sm font-semibold text-navy">
              {lang === "es" ? "Checklist del revisor" : "Reviewer checklist"}
            </h4>
            <div className="mt-3 space-y-2">
              {selectedTemplate.reviewerChecklist.map((item, idx) => {
                const key = checklistKey(selectedTemplate.templateId, idx);
                return (
                  <label
                    key={resolveBilingual(item, "en")}
                    className="flex cursor-pointer items-start gap-3 rounded-lg bg-white p-3 text-sm text-slate-700 ring-1 ring-slate-200"
                  >
                    <input
                      type="checkbox"
                      checked={Boolean(checked[key])}
                      onChange={(event) =>
                        setChecked((current) => ({
                          ...current,
                          [key]: event.target.checked,
                        }))
                      }
                      className="mt-1"
                    />
                    <span>{resolveBilingual(item, lang)}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function checklistKey(templateId: string, idx: number) {
  return `${templateId}.${idx}`;
}

function readableSaveError(error: unknown, lang: "en" | "es") {
  const raw = error instanceof Error ? error.message.toLowerCase() : "";

  if (
    raw.includes("supabase") ||
    raw.includes("unauthorized") ||
    raw.includes("configured")
  ) {
    return lang === "es"
      ? "No hay una sesión activa o Supabase no está configurado para guardar evidencia."
      : "There is no active session or Supabase is not configured for evidence saving.";
  }

  return lang === "es" ? "No se pudo guardar la evidencia." : "Could not save evidence.";
}

function fieldTypeLabel(fieldType: string, lang: "en" | "es") {
  const labels: Record<string, { en: string; es: string }> = {
    checkbox: { en: "Confirmation", es: "Confirmación" },
    date: { en: "Date", es: "Fecha" },
    datetime: { en: "Date and time", es: "Fecha y hora" },
    long_text: { en: "Long response", es: "Respuesta larga" },
    number: { en: "Number", es: "Número" },
    select: { en: "Selection", es: "Selección" },
    table: { en: "Structured table", es: "Tabla estructurada" },
    text: { en: "Short response", es: "Respuesta corta" },
  };

  return labels[fieldType]?.[lang] ?? fieldType.replace(/_/g, " ");
}

function TemplateInput({
  lang,
  fieldType,
  value,
  options,
  placeholder,
  onChange,
}: {
  lang: "en" | "es";
  fieldType: string;
  value: string;
  options?: string[];
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  const base =
    "mt-3 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-emerald-accent focus:outline-none focus:ring-2 focus:ring-emerald-accent/20";

  if (fieldType === "long_text" || fieldType === "table") {
    return (
      <textarea
        className={`${base} min-h-24 resize-y`}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  }

  if (fieldType === "select") {
    return (
      <select
        className={base}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">{lang === "es" ? "Seleccionar..." : "Select..."}</option>
        {(options ?? []).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  if (fieldType === "checkbox") {
    return (
      <label className="mt-3 flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={value === "true"}
          onChange={(event) => onChange(String(event.target.checked))}
        />
        <span>{lang === "es" ? "Confirmado" : "Confirmed"}</span>
      </label>
    );
  }

  const inputType =
    fieldType === "date" ? "date" : fieldType === "datetime" ? "datetime-local" : fieldType === "number" ? "number" : "text";

  return (
    <input
      className={base}
      type={inputType}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

function WorkspaceMetric({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-2 font-serif text-2xl font-bold text-navy">{value}</p>
    </div>
  );
}
