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

export function ArtifactWorkspace({ locale }: Props) {
  const lang = locale === "es" ? "es" : "en";
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    OPERATIONAL_ARTIFACT_TEMPLATES[0]?.templateId ?? "",
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [savedByTemplate, setSavedByTemplate] = useState<
    Record<string, { fieldValues: Record<string, string>; checklistState: Record<string, boolean>; status: string }>
  >({});
  const [saveState, setSaveState] = useState<"idle" | "loading" | "saved" | "error">(
    "idle",
  );
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
        if (!res.ok) return;
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
      } catch {
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
        error instanceof Error
          ? error.message
          : lang === "es"
            ? "No se pudo guardar."
            : "Could not save.",
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
                {resolveBilingual(template.title, lang)}
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
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={saveState === "loading"}
                onClick={() => saveSubmission("draft")}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm transition hover:bg-slate-50 disabled:opacity-60"
              >
                {lang === "es" ? "Guardar borrador" : "Save draft"}
              </button>
              <button
                type="button"
                disabled={saveState === "loading"}
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
                            {lang === "es" ? "Req" : "Req"}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                        {field.fieldType.replace("_", " ")}
                      </p>
                      <TemplateInput
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

function TemplateInput({
  fieldType,
  value,
  options,
  placeholder,
  onChange,
}: {
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
        <option value="">Select...</option>
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
        <span>Confirmed</span>
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
