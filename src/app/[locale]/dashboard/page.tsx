import { getTranslations } from "next-intl/server";
import { DigitalSignaturePanel } from "@/components/signature/DigitalSignaturePanel";
import { StudentDashboard } from "@/components/dashboard/StudentDashboard";

export default async function DashboardPage() {
  const t = await getTranslations("dashboard");

  return (
    <div className="space-y-10">
      <StudentDashboard />

      <section className="grid gap-6 lg:grid-cols-2">
        <DigitalSignaturePanel />
        <aside className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 text-sm text-slate-600 shadow-sm">
          <p className="font-medium text-slate-800">{t("shellNote")}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t("integrationTitle")}
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>{t("integrationN8n")}</li>
            <li>
              {t("integrationAudit")}{" "}
              <code className="rounded bg-slate-100 px-1">append_audit</code>
            </li>
            <li>
              {t("integrationRetention")}{" "}
              <code className="rounded bg-slate-100 px-1">
                register_lab_transport_retention
              </code>
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
