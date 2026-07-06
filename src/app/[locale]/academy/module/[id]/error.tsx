"use client";

import { useEffect } from "react";

export default function ModuleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Module error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-xl font-semibold text-white">
        Something went wrong loading this module
      </h2>
      <p className="max-w-md text-sm text-slate-400">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={reset}
        className="rounded-xl bg-emerald-accent px-6 py-2 text-sm font-semibold text-navy shadow transition hover:brightness-110"
      >
        Try again
      </button>
    </div>
  );
}
