import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export async function LandingPage() {
  const t = await getTranslations("landing");

  const modules = [
    t("mod1"),
    t("mod2"),
    t("mod3"),
    t("mod4"),
    t("mod5"),
    t("mod6"),
  ];

  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden rounded-3xl bg-navy text-white">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,27,42,1) 0%, rgba(10,20,32,1) 50%, rgba(13,27,42,0.95) 100%)",
          }}
        />
        <div className="relative grid gap-10 px-4 py-14 md:grid-cols-2 md:px-10 md:py-20">
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-accent">
              {t("brand")}
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="max-w-xl text-lg text-slate-300">{t("heroSubtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-accent px-6 py-3 text-sm font-semibold text-navy shadow-lg transition hover:brightness-110"
              >
                {t("ctaPrimary")}
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 text-center sm:max-w-md sm:gap-4 sm:text-left">
              <div>
                <p className="text-lg font-semibold text-white">{t("statHours")}</p>
                <p className="text-xs text-slate-400">{t("statHoursSub")}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{t("statModules")}</p>
                <p className="text-xs text-slate-400">{t("statModulesSub")}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{t("statCert")}</p>
                <p className="text-xs text-slate-400">{t("statCertSub")}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            {[t("badgeTranscelerate"), t("badgeIch"), t("badgeCert")].map((badge) => (
              <div
                key={badge}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 backdrop-blur"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-4 py-14 md:grid-cols-3 md:px-6">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 h-10 w-10 rounded-lg bg-emerald-accent/15 text-center text-xl leading-10 text-emerald-600">
            ✓
          </div>
          <h2 className="font-semibold text-navy">{t("value1Title")}</h2>
          <p className="mt-2 text-sm text-slate-600">{t("value1Body")}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 h-10 w-10 rounded-lg bg-emerald-accent/15 text-center text-xl leading-10 text-emerald-600">
            ◆
          </div>
          <h2 className="font-semibold text-navy">{t("value2Title")}</h2>
          <p className="mt-2 text-sm text-slate-600">{t("value2Body")}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 h-10 w-10 rounded-lg bg-emerald-accent/15 text-center text-xl leading-10 text-emerald-600">
            ★
          </div>
          <h2 className="font-semibold text-navy">{t("value3Title")}</h2>
          <p className="mt-2 text-sm text-slate-600">{t("value3Body")}</p>
        </article>
      </section>

      <section className="grid gap-10 px-4 py-14 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
            {t("whyTitle")}
          </h2>
        </div>
        <ol className="list-decimal space-y-4 pl-5 text-slate-700">
          <li>{t("why1")}</li>
          <li>{t("why2")}</li>
          <li>{t("why3")}</li>
        </ol>
      </section>

      <section className="bg-slate-50 px-4 py-14 md:px-10">
        <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
          {t("curriculumTitle")}
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">{t("curriculumSubtitle")}</p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {modules.map((m) => (
            <li
              key={m}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
            >
              {m}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 py-10 md:px-10">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
          {t("standardsTitle")}
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[t("statHours"), t("statModules"), t("badgeIch"), t("badgeTranscelerate")].map(
            (label) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center text-xs font-medium text-slate-700"
              >
                {label}
              </div>
            ),
          )}
        </div>
      </section>

      <section className="px-4 pb-14 md:px-10">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-medium text-slate-500">{t("enrollTitle")}</p>
          <p className="mt-2 font-serif text-4xl font-semibold text-navy">{t("enrollPrice")}</p>
          <p className="mt-4 text-slate-600">{t("enrollIncludes")}</p>
        </div>
      </section>

      <section className="rounded-2xl bg-navy px-4 py-10 text-white md:mx-10 md:px-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm text-slate-300">{t("enrolledCta")}</p>
          <Link
            href="/login"
            className="inline-flex shrink-0 items-center rounded-xl bg-emerald-accent px-5 py-2.5 text-sm font-semibold text-navy hover:brightness-110"
          >
            {t("enrolledButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
