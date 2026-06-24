import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { VerificationPage } from "@/components/certifications/VerificationPage";

type Props = {
  params: Promise<{ locale: string; verificationId: string }>;
};

export default async function VerifyPage({ params }: Props) {
  const { locale, verificationId } = await params;
  setRequestLocale(locale);

  if (!verificationId || !verificationId.startsWith("VACRC-")) {
    notFound();
  }

  // Basic format validation
  const parts = verificationId.split("-");
  if (parts.length !== 3 || parts[0] !== "VACRC") {
    notFound();
  }

  return <VerificationPage verificationId={verificationId} locale={locale} />;
}
