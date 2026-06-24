import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ModulesPage({ params }: Props) {
  const { locale } = await params;
  redirect(`/${locale}/academy/module/M1`);
}
