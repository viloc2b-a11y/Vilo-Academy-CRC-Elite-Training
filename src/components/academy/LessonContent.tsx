import type { Lesson } from "@/curriculum-engine";
import { resolveBilingual } from "@/curriculum-engine";
import type { LocaleCode } from "@/curriculum-engine/types/common";

type Props = {
  lessons: readonly Lesson[];
  locale: LocaleCode;
};

const LESSON_TYPE_BADGES: Record<string, { en: string; es: string; color: string }> = {
  reading: { en: "Reading", es: "Lectura", color: "bg-sky-100 text-sky-700 ring-sky-300/40" },
  video: { en: "Video", es: "Video", color: "bg-rose-100 text-rose-700 ring-rose-300/40" },
  case: { en: "Case", es: "Caso", color: "bg-amber-100 text-amber-700 ring-amber-300/40" },
  quiz: { en: "Quiz", es: "Cuestionario", color: "bg-violet-100 text-violet-700 ring-violet-300/40" },
  worksheet: { en: "Worksheet", es: "Taller", color: "bg-indigo-100 text-indigo-700 ring-indigo-300/40" },
  simulation: { en: "Simulation", es: "Simulación", color: "bg-orange-100 text-orange-700 ring-orange-300/40" },
  recap: { en: "Recap", es: "Resumen", color: "bg-teal-100 text-teal-700 ring-teal-300/40" },
  osce_station: { en: "OSCE", es: "OSCE", color: "bg-red-100 text-red-700 ring-red-300/40" },
};

function typeBadge(lessonType: string, locale: LocaleCode) {
  const t = LESSON_TYPE_BADGES[lessonType];
  if (!t) {
    return (
      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
        {lessonType}
      </span>
    );
  }
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${t.color}`}
    >
      {locale === "es" ? t.es : t.en}
    </span>
  );
}

function formatDuration(minutes: number, locale: LocaleCode): string {
  if (locale === "es") {
    return `${minutes} min`;
  }
  return `${minutes} min`;
}

export function LessonContent({ lessons, locale }: Props) {
  if (!lessons || lessons.length === 0) return null;

  // Group lessons: core lessons vs guided practice lessons
  const coreLessons = lessons.filter((l) => !l.lessonId.includes(".GP"));
  const guidedPractice = lessons.filter((l) => l.lessonId.includes(".GP"));

  return (
    <section className="mb-10">
      <h2 className="mb-5 font-serif text-2xl font-bold text-navy">
        {locale === "es" ? "Plan de lecciones" : "Lesson plan"}
      </h2>

      {/* Core lessons */}
      <div className="space-y-4">
        {coreLessons.map((lesson) => (
          <LessonCard key={lesson.lessonId} lesson={lesson} locale={locale} />
        ))}
      </div>

      {/* Guided practice */}
      {guidedPractice.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-navy">
            {locale === "es" ? "Práctica guiada" : "Guided practice"}
          </h3>
          <div className="space-y-4">
            {guidedPractice.map((lesson) => (
              <LessonCard key={lesson.lessonId} lesson={lesson} locale={locale} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function LessonCard({ lesson, locale }: { lesson: Lesson; locale: LocaleCode }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {typeBadge(lesson.lessonType, locale)}
            {lesson.durationMinutes != null && lesson.durationMinutes > 0 && (
              <span className="text-xs text-slate-400">
                {formatDuration(lesson.durationMinutes, locale)}
              </span>
            )}
          </div>
          <h4 className="mt-2 text-base font-semibold text-slate-900">
            {resolveBilingual(lesson.title, locale)}
          </h4>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {resolveBilingual(lesson.objective, locale)}
          </p>
        </div>
      </div>

      {lesson.keyPoints && lesson.keyPoints.length > 0 && (
        <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
          {lesson.keyPoints.map((kp, idx) => (
            <p key={idx} className="text-sm leading-6 text-slate-600">
              <span className="mr-2 text-emerald-accent">•</span>
              {resolveBilingual(kp, locale)}
            </p>
          ))}
        </div>
      )}
    </article>
  );
}
