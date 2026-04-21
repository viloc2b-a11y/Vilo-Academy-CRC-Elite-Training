"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type Props = {
  currentLocale: string;
};

export function LocaleSwitcher({ currentLocale }: Props) {
  const t = useTranslations("locale");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <label className="flex items-center gap-2 text-sm text-slate-600">
      <span className="sr-only">{t("label")}</span>
      <select
        className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 font-medium text-slate-800 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        value={currentLocale}
        onChange={(e) =>
          router.replace(pathname, { locale: e.target.value as "en" | "es" })
        }
      >
        <option value="en">{t("en")}</option>
        <option value="es">{t("es")}</option>
      </select>
    </label>
  );
}
