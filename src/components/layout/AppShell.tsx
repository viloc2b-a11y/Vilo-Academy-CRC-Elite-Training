import type { ReactNode } from "react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { LocaleSwitcher } from "./LocaleSwitcher";

type Props = {
  children: ReactNode;
  locale: string;
};

/** Paths that use the app navigation (compact, module/dashboard style). */
const APP_PATH_PREFIXES = [
  "/dashboard",
  "/modules",
  "/academy",
  "/certificates",
  "/documents",
] as const;

function isAppPath(pathname: string): boolean {
  return APP_PATH_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}

export async function AppShell({ children, locale }: Props) {
  const t = await getTranslations("nav");
  const tFooter = await getTranslations("footer");

  // Detect current path for nav variant
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";

  const appMode = isAppPath(pathname);

  // ── App nav ──────────────────────────────────────────────────────────
  if (appMode) {
    const appLinks = [
      { href: "/dashboard", label: t("dashboard") },
      { href: "/modules", label: t("modules") },
      { href: "/academy/certifications", label: t("certifications") },
      { href: "/pricing", label: t("pricing") },
    ] as const;

    return (
      <div className="flex min-h-screen flex-col">
        {/* App header — compact sticky bar */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-accent"
              >
                Vilo Academy
              </Link>
              <nav className="hidden items-center gap-1 sm:flex">
                {appLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-navy"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <LocaleSwitcher currentLocale={locale} />
            </div>
          </div>
        </header>

        {/* Content — full width, no extra wrapper */}
        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
          {tFooter("tagline")}
        </footer>
      </div>
    );
  }

  // ── Marketing nav ────────────────────────────────────────────────────
  const marketingLinks = [
    { href: "/", label: t("home") },
    { href: "/pricing", label: t("pricing") },
    { href: "/dashboard", label: t("dashboard") },
    { href: "/academy/certifications", label: t("certifications") },
  ] as const;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-6">
          <Link
            href="/"
            className="text-lg font-semibold text-[#0D1B2A]"
          >
            Vilo Academy
          </Link>
          <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 md:order-none md:w-auto md:flex-1">
            {marketingLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-emerald-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-semibold text-[#0D1B2A] underline-offset-4 hover:text-emerald-accent hover:underline"
            >
              {t("login")}
            </Link>
          </nav>
          <LocaleSwitcher currentLocale={locale} />
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6 md:py-10">
        {children}
      </main>
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        {tFooter("tagline")}
      </footer>
    </div>
  );
}
