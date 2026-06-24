import { Suspense } from "react";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden rounded-3xl bg-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(16,185,129,0.25), transparent 55%), radial-gradient(ellipse 60% 50% at 90% 80%, rgba(59,130,246,0.15), transparent 50%)",
        }}
      />
      <div className="relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-12">
        <Suspense fallback={<div className="h-40 w-full max-w-md animate-pulse rounded-2xl bg-white/5" />}>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
