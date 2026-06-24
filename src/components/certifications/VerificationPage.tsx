"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, Award, ExternalLink } from "lucide-react";

type VerificationResult = {
  valid: boolean;
  certification?: {
    level: string;
    status: string;
    issued_at: string | null;
    version: string;
  };
  error?: string;
};

type Props = {
  verificationId: string;
  locale: string;
};

export function VerificationPage({ verificationId, locale }: Props) {
  const lang = locale === "es" ? "es" : "en";
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/certifications?verify=${verificationId}`)
      .then((r) => r.json())
      .then((d) => setResult(d))
      .catch(() =>
        setResult({
          valid: false,
          error: lang === "es" ? "Error de verificación" : "Verification error",
        }),
      )
      .finally(() => setLoading(false));
  }, [verificationId, lang]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-48 animate-pulse rounded bg-slate-100" />
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-[60vh] max-w-lg px-4 py-16">
      <div
        className={`rounded-2xl border-2 p-8 shadow-lg text-center ${
          result?.valid
            ? "border-emerald-300 bg-emerald-50/50"
            : "border-red-200 bg-red-50/50"
        }`}
      >
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full ${
              result?.valid
                ? "bg-emerald-100 text-emerald-600"
                : "bg-red-100 text-red-500"
            }`}
          >
            {result?.valid ? (
              <CheckCircle2 size={48} />
            ) : (
              <XCircle size={48} />
            )}
          </div>
        </div>

        {/* Status */}
        <h1
          className={`text-2xl font-bold ${
            result?.valid ? "text-emerald-800" : "text-red-800"
          }`}
        >
          {result?.valid
            ? lang === "es"
              ? "Credencial válida"
              : "Valid credential"
            : lang === "es"
              ? "Credencial no encontrada"
              : "Credential not found"}
        </h1>

        {/* Details */}
        {result?.valid && result.certification && (
          <div className="mt-8 space-y-4 text-left">
            <div className="rounded-xl border border-emerald-200 bg-white p-5">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-emerald-600" size={24} />
                <h2 className="text-lg font-bold text-navy">
                  {result.certification.level}
                </h2>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">
                    {lang === "es" ? "ID de verificación" : "Verification ID"}
                  </span>
                  <span className="font-mono font-semibold text-navy">
                    {verificationId}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">
                    {lang === "es" ? "Estado" : "Status"}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 size={10} />
                    {result.certification.status}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">
                    {lang === "es" ? "Fecha de emisión" : "Issue date"}
                  </span>
                  <span className="font-semibold text-navy">
                    {result.certification.issued_at
                      ? new Date(result.certification.issued_at).toLocaleDateString(
                          locale === "es" ? "es-AR" : "en-US",
                          { year: "numeric", month: "long", day: "numeric" },
                        )
                      : "—"}
                  </span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-slate-500">
                    {lang === "es" ? "Versión" : "Version"}
                  </span>
                  <span className="font-mono font-semibold text-navy">
                    {result.certification.version}
                  </span>
                </div>
              </div>
            </div>

            {/* Verify another */}
            <div className="text-center">
              <a
                href={`/${locale}/academy/certifications`}
                className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                <ExternalLink size={14} />
                {lang === "es"
                  ? "Ir al centro de certificación"
                  : "Go to certification center"}
              </a>
            </div>
          </div>
        )}

        {/* Error */}
        {!result?.valid && result?.error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-100/50 p-4">
            <p className="text-sm text-red-700">{result.error}</p>
          </div>
        )}

        {/* Not found */}
        {!result?.valid && !result?.error && (
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">
              {lang === "es"
                ? "Esta credencial no existe o ha sido revocada. Verifica que el ID sea correcto."
                : "This credential does not exist or has been revoked. Verify the ID is correct."}
            </p>
            <p className="mt-3 text-xs font-mono text-slate-400">
              {verificationId}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-400">
            {lang === "es"
              ? "Verificado por Vilo Academy · CRC Elite Training"
              : "Verified by Vilo Academy · CRC Elite Training"}
          </p>
        </div>
      </div>
    </div>
  );
}
