import {
  CRC_CERTIFICATION_LEVELS,
  CRC_ROLE_PATHWAYS,
  ONCOLOGY_OSCE_MOCK_STUDY,
  OPERATIONAL_ARTIFACT_TEMPLATES,
  VILO_OS_CRC_ACADEMY_MODULE,
  resolveBilingual,
} from "@/curriculum-engine";

type Props = {
  locale: string;
};

export function PremiumAcademyPanel({ locale }: Props) {
  const lang = locale === "es" ? "es" : "en";
  const artifactCount = ONCOLOGY_OSCE_MOCK_STUDY.artifacts.length;
  const templateCount = OPERATIONAL_ARTIFACT_TEMPLATES.length;
  const weekCount = ONCOLOGY_OSCE_MOCK_STUDY.weeks.length;

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-navy px-6 py-5 text-white">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-accent">
          VILO OS Module
        </p>
        <h2 className="mt-2 font-serif text-2xl font-bold">
          {resolveBilingual(VILO_OS_CRC_ACADEMY_MODULE.productName, lang)}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
          {resolveBilingual(VILO_OS_CRC_ACADEMY_MODULE.operatingPromise, lang)}
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <Metric label={lang === "es" ? "Rutas" : "Pathways"} value={CRC_ROLE_PATHWAYS.length} />
            <Metric label={lang === "es" ? "Semanas simuladas" : "Simulation weeks"} value={weekCount} />
            <Metric label={lang === "es" ? "Plantillas" : "Templates"} value={templateCount} />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {lang === "es" ? "Rutas operativas" : "Operating pathways"}
            </h3>
            <div className="mt-3 grid gap-3">
              {CRC_ROLE_PATHWAYS.map((pathway) => (
                <article
                  key={pathway.pathwayId}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="font-semibold text-navy">
                        {resolveBilingual(pathway.title, lang)}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {resolveBilingual(pathway.readinessOutcome, lang)}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-emerald-accent/10 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      {pathway.modules.length} modules
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="border-t border-slate-200 bg-slate-50 p-6 lg:border-l lg:border-t-0">
          <h3 className="font-semibold text-navy">
            {resolveBilingual(ONCOLOGY_OSCE_MOCK_STUDY.title, lang)}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {resolveBilingual(ONCOLOGY_OSCE_MOCK_STUDY.protocolSynopsis, lang)}
          </p>
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-emerald-accent/30 bg-emerald-accent/10 p-3">
              <p className="text-sm font-semibold text-navy">
                {templateCount} / {artifactCount}{" "}
                {lang === "es" ? "artefactos tienen plantilla operativa" : "artifacts have operational templates"}
              </p>
              <p className="mt-1 text-xs text-slate-600">
                {lang === "es"
                  ? "Prioridad: documentos que sostienen decisión, escalamiento y defensa."
                  : "Priority: documents that support decisions, escalation, and defense."}
              </p>
            </div>
            {CRC_CERTIFICATION_LEVELS.map((level) => (
              <div
                key={level.levelId}
                className="rounded-xl border border-slate-200 bg-white p-3"
              >
                <p className="text-sm font-semibold text-navy">
                  {resolveBilingual(level.title, lang)}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {level.minimumSignals.artifactCount ?? 0}+ artifacts
                  {level.minimumSignals.capstoneNormalized
                    ? ` • OSCE ${Math.round(level.minimumSignals.capstoneNormalized * 100)}%`
                    : ""}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-2 font-serif text-3xl font-bold text-navy">{value}</p>
    </div>
  );
}
