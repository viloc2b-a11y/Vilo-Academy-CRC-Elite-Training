import { getTranslations } from "next-intl/server";

export default async function ModulesPage() {
  const t = await getTranslations("pages");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900">{t("modulesTitle")}</h1>
      <p className="mt-2 text-slate-600">{t("modulesBody")}</p>
    </div>
  );
}
