import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  CRC_ELITE_COURSE,
  resolveBilingual,
} from "@/curriculum-engine";
import type { LocaleCode } from "@/curriculum-engine/types/common";
import { AssessmentClient } from "@/components/academy/AssessmentClient";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function AssessmentPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const lang = locale as LocaleCode;

  const course = CRC_ELITE_COURSE;
  const mod = course.modulesById[id];

  if (!mod) notFound();

  const registryItem = course.registry.find((r) => r.id === id);
  if (!registryItem) notFound();

  // Serialize the module data for the client
  const moduleData = {
    id: mod.id,
    title: resolveBilingual(mod.title, lang),
    objective: resolveBilingual(mod.objective, lang),
    exercises: mod.practicalExercises.map((ex) => ({
      exerciseId: ex.exerciseId,
      name: resolveBilingual(ex.name, lang),
      scenario: resolveBilingual(ex.scenario, lang),
      learnerTask: resolveBilingual(ex.learnerTask, lang),
      inputs: ex.inputs.map((i) => resolveBilingual(i.label, lang)),
      deliverables: ex.deliverables.map((d) => ({
        deliverableId: d.deliverableId,
        label: resolveBilingual(d.label, lang),
        formatHint: d.formatHint,
      })),
    })),
    rubric: {
      rubricId: mod.assessmentRubric.rubricId,
      totalPoints: mod.assessmentRubric.totalPoints,
      passingPoints: mod.assessmentRubric.passingPoints,
      criteria: mod.assessmentRubric.criteria.map((c) => ({
        criterionId: c.criterionId,
        description: resolveBilingual(c.description, lang),
        points: c.points,
        mapsToDimensions: [...c.mapsToDimensions],
        failCondition: c.failCondition
          ? resolveBilingual(c.failCondition, lang)
          : null,
      })),
    },
  };

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <AssessmentClient
        moduleData={moduleData}
        locale={locale}
      />
    </div>
  );
}
