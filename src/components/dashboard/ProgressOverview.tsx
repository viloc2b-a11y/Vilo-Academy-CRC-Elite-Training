import { getTranslations } from "next-intl/server";

/** Placeholder metrics — replace with Supabase aggregates per user. */
const DEMO_STATS = {
  modulesCompleted: 4,
  examsPending: 2,
  certificates: 1,
  ichDocsTracked: 18,
};

export async function ProgressOverview() {
  const t = await getTranslations("dashboard");

  const cards = [
    {
      label: t("statModules"),
      value: DEMO_STATS.modulesCompleted,
      hint: t("modulesHint"),
      accent: "from-brand-500/15 to-brand-600/5",
    },
    {
      label: t("statExams"),
      value: DEMO_STATS.examsPending,
      hint: t("examsHint"),
      accent: "from-amber-400/20 to-amber-500/5",
    },
    {
      label: t("statCerts"),
      value: DEMO_STATS.certificates,
      hint: t("certsHint"),
      accent: "from-emerald-400/20 to-emerald-600/5",
    },
    {
      label: t("statDocs"),
      value: DEMO_STATS.ichDocsTracked,
      hint: t("statDocsHint"),
      accent: "from-slate-400/15 to-slate-500/5",
    },
  ] as const;

  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.label}
            className={`rounded-2xl border border-slate-200 bg-gradient-to-br ${card.accent} p-5 shadow-sm`}
          >
            <p className="text-sm font-medium text-slate-600">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold tabular-nums text-slate-900">
              {card.value}
            </p>
            {card.hint ? (
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                {card.hint}
              </p>
            ) : null}
          </article>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">
            {t("modulesTitle")}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{t("modulesHint")}</p>
          <div className="mt-6 h-40 rounded-xl border border-dashed border-slate-200 bg-slate-50/80" />
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {t("examsTitle")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{t("examsHint")}</p>
            <div className="mt-4 h-28 rounded-xl border border-dashed border-slate-200 bg-slate-50/80" />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {t("certsTitle")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{t("certsHint")}</p>
            <div className="mt-4 h-28 rounded-xl border border-dashed border-slate-200 bg-slate-50/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
