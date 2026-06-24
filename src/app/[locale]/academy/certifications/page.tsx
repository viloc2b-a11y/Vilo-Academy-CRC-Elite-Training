import { setRequestLocale } from "next-intl/server";
import { CertificationCenter } from "@/components/certifications/CertificationCenter";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CertificationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CertificationCenter locale={locale} />;
}
