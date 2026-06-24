import type { ModuleRegistryItem } from "@/curriculum-engine";
import { resolveBilingual } from "@/curriculum-engine";
import type { LocaleCode } from "@/curriculum-engine/types/common";

type Props = {
  registry: readonly ModuleRegistryItem[];
  currentIndex: number;
  locale: LocaleCode;
};

export function NextModule({ registry, currentIndex, locale }: Props) {
  const prev = currentIndex > 0 ? registry[currentIndex - 1] : null;
  const next = currentIndex < registry.length - 1 ? registry[currentIndex + 1] : null;

  return (
    <section className="mb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        {/* Previous module */}
        {prev ? (
          <a
            href={`/${locale}/academy/module/${prev.id}`}
            className="group flex flex-1 items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-accent/30 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition group-hover:bg-emerald-accent/10 group-hover:text-emerald-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div className="flex-1 text-right">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {locale === "es" ? "Anterior" : "Previous"}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-slate-800 transition group-hover:text-emerald-700">
                {resolveBilingual(prev.title, locale)}
              </p>
            </div>
          </a>
        ) : (
          <div className="flex-1" />
        )}

        {/* Back to dashboard */}
        <a
          href={`/${locale}/dashboard`}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
          {locale === "es" ? "Dashboard" : "Dashboard"}
        </a>

        {/* Next module */}
        {next ? (
          <a
            href={`/${locale}/academy/module/${next.id}`}
            className="group flex flex-1 items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-accent/30 hover:shadow-md"
          >
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {locale === "es" ? "Siguiente" : "Next"}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-slate-800 transition group-hover:text-emerald-700">
                {resolveBilingual(next.title, locale)}
              </p>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition group-hover:bg-emerald-accent/10 group-hover:text-emerald-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </a>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </section>
  );
}
