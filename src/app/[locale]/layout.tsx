import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import { AppShell } from "@/components/layout/AppShell";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("meta");
  const titles: Record<string, string> = {
    en: "Vilo Academy — CRC Elite Training",
    es: "Vilo Academy — Entrenamiento CRC Elite",
  };
  return {
    title: titles[locale] ?? titles.en,
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen font-sans">
        <NextIntlClientProvider messages={messages}>
          <AppShell locale={locale}>{children}</AppShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
