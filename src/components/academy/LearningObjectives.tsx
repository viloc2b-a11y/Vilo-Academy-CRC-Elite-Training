import type { LearningOutcome, LearningLevel } from "@/curriculum-engine";
import { CRC_ELITE_COURSE, resolveBilingual } from "@/curriculum-engine";
import type { LocaleCode } from "@/curriculum-engine/types/common";

type Props = {
  outcomes: readonly LearningOutcome[];
  locale: LocaleCode;
};

const LEVEL_ORDER: readonly LearningLevel[] = ["L1", "L2", "L3"];

export function LearningObjectives({ outcomes, locale }: Props) {
  if (!outcomes || outcomes.length === 0) return null;

  const levelLabels = CRC_ELITE_COURSE.metadata.instructionalModel.levelLabels;

  return (
    <section className="mb-10">
      <h2 className="mb-5 font-serif text-2xl font-bold text-navy">
        {locale === "es" ? "Objetivos de aprendizaje" : "Learning objectives"}
      </h2>

      <div className="space-y-4">
        {LEVEL_ORDER.map((level) => {
          const outcome = outcomes.find((o) => o.level === level);
          if (!outcome || outcome.statements.length === 0) return null;

          return (
            <div
              key={level}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {level.replace("L", "")}
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  {resolveBilingual(levelLabels[level], locale)}
                </span>
              </div>
              <ul className="space-y-2">
                {outcome.statements.map((statement, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-accent" />
                    <span>{resolveBilingual(statement, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
