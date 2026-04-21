import type { ReactNode } from "react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "./LocaleSwitcher";

type Props = {
  children: ReactNode;
  locale: string;
};

export async function AppShell({ children, locale }: Props) {
  const t = await getTranslations("nav");

  const links = [
    { href: "/dashboard", label: t("dashboard") },
    { href: "/modules", label: t("modules") },
    { href: "/documents", label: t("documents") },
    { href: "/certificates", label: t("certificates") },
  ] as const;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link
            href="/dashboard"
            className="text-lg font-semibold text-brand-800"
          >
            Vilo Academy
          </Link>
          <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-brand-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LocaleSwitcher currentLocale={locale} />
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6 md:py-10">
        {children}
      </main>
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        CRC Elite Training — FDA / ICH-GCP audit-ready learning shell
      </footer>
    </div>
  );
}
