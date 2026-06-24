import { StudentDashboard } from "@/components/dashboard/StudentDashboard";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <StudentDashboard />;
}
