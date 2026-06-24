import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  CRC_ELITE_COURSE,
} from "@/curriculum-engine";
import type { LocaleCode } from "@/curriculum-engine/types/common";
import { ModuleHeader } from "@/components/academy/ModuleHeader";
import { LearningObjectives } from "@/components/academy/LearningObjectives";
import { LessonContent } from "@/components/academy/LessonContent";
import { Exercises } from "@/components/academy/Exercises";
import { AssessmentPreview } from "@/components/academy/AssessmentPreview";
import { NextModule } from "@/components/academy/NextModule";
import { ModuleProgressBar } from "@/components/academy/ModuleProgressBar";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function AcademyModulePage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const lang = locale as LocaleCode;

  const course = CRC_ELITE_COURSE;
  const mod = course.modulesById[id];

  // 404 for unknown module IDs
  if (!mod) {
    notFound();
  }

  const registryItem = course.registry.find((r) => r.id === id);
  if (!registryItem) {
    notFound();
  }

  const moduleIndex = course.registry.findIndex((r) => r.id === id);
  const totalModules = course.registry.length;

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <ModuleProgressBar moduleId={id} locale={locale} />

      <ModuleHeader
        mod={mod}
        registryItem={registryItem}
        locale={lang}
        moduleIndex={moduleIndex}
        totalModules={totalModules}
      />

      <LearningObjectives outcomes={mod.outcomes} locale={lang} />

      <LessonContent lessons={mod.lessons} locale={lang} />

      <Exercises
        exercises={mod.practicalExercises}
        errorLibrary={mod.errorLibrary}
        locale={lang}
      />

      <AssessmentPreview
        rubric={mod.assessmentRubric}
        scorecard={mod.scorecardContribution}
        locale={lang}
      />

      <NextModule
        registry={course.registry}
        currentIndex={moduleIndex}
        locale={lang}
      />
    </div>
  );
}
