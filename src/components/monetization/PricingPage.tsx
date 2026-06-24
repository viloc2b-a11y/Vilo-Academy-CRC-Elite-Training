"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { PricingPlan, OrderRow } from "@/lib/monetization/helpers";

type Props = {
  locale: string;
};

function formatPrice(cents: number, currency: string): string {
  const dollars = cents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
  }).format(dollars);
}

export function PricingPage({ locale }: Props) {
  const lang = locale === "es" ? "es" : "en";
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [enrollment, setEnrollment] = useState<OrderRow | null>(null);
  const [authState, setAuthState] = useState<"loading" | "authenticated" | "guest">("loading");
  const [enrolling, setEnrolling] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    async function load() {
      const [plansRes, userRes] = await Promise.all([
        fetch("/api/monetization?plans=true"),
        fetch("/api/monetization"),
      ]);

      const plansData = (await plansRes.json()) as { plans: PricingPlan[] };
      setPlans(plansData.plans ?? []);

      const userData = (await userRes.json()) as {
        authenticated: boolean;
        enrollment: OrderRow | null;
      };
      setAuthState(userData.authenticated ? "authenticated" : "guest");
      if (userData.enrollment) setEnrollment(userData.enrollment);
    }
    load();
  }, []);

  const handleEnroll = useCallback(
    async (planId: string, pilot = false) => {
      if (authState !== "authenticated") {
        window.location.href = `/${locale}/login`;
        return;
      }
      setEnrolling(planId);
      setMessage(null);

      try {
        const res = await fetch("/api/monetization", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "enroll", planId, pilotCohort: pilot }),
        });
        const data = await res.json();
        if (res.ok) {
          setEnrollment(data.order);
          setMessage({
            type: "success",
            text:
              lang === "es"
                ? "¡Inscripción exitosa! Comienza tu formación."
                : "Enrollment successful! Start your training.",
          });
        } else {
          setMessage({ type: "error", text: data.error ?? "Failed to enroll" });
        }
      } catch {
        setMessage({
          type: "error",
          text: lang === "es" ? "Error al inscribirse" : "Failed to enroll",
        });
      } finally {
        setEnrolling(null);
      }
    },
    [authState, lang, locale],
  );

  const handlePilotSignup = useCallback(async () => {
    if (authState !== "authenticated") {
      window.location.href = `/${locale}/login`;
      return;
    }
    setEnrolling("pilot");
    setMessage(null);

    try {
      const res = await fetch("/api/monetization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "pilot-signup" }),
      });
      const data = await res.json();
      if (res.ok) {
        setEnrollment(data.order);
        setMessage({
          type: "success",
          text:
            lang === "es"
              ? "¡Registrado en el cohorte piloto! Te contactaremos pronto."
              : "Registered for the pilot cohort! We'll be in touch soon.",
        });
      } else {
        setMessage({ type: "error", text: data.error ?? "Failed to register" });
      }
    } catch {
      setMessage({
        type: "error",
        text: lang === "es" ? "Error al registrarse" : "Failed to register",
      });
    } finally {
      setEnrolling(null);
    }
  }, [authState, lang, locale]);

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-accent">
          {lang === "es" ? "Planes" : "Plans"}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-navy">
          {lang === "es"
            ? "Invierte en tu carrera como CRC"
            : "Invest in your CRC career"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          {lang === "es"
            ? "Formación bilingüe basada en competencias con certificación verificable."
            : "Bilingual competency-based training with verifiable certification."}
        </p>
      </div>

      {/* Message */}
      {message && (
        <div
          className={`mb-8 mx-auto max-w-2xl rounded-xl border p-4 text-center ${
            message.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Plans grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const isActive = enrollment?.plan_id === plan.plan_id;
          const isPopular = plan.plan_id === "crc_professional";

          return (
            <div
              key={plan.plan_id}
              className={`relative flex flex-col rounded-2xl border-2 p-6 shadow-sm transition ${
                isActive
                  ? "border-emerald-accent bg-emerald-50/30"
                  : isPopular
                    ? "border-navy bg-white"
                    : "border-slate-200 bg-white"
              }`}
            >
              {/* Popular badge */}
              {isPopular && !isActive && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-navy px-4 py-1 text-xs font-semibold text-white">
                    {lang === "es" ? "Más popular" : "Most popular"}
                  </span>
                </div>
              )}

              {/* Active badge */}
              {isActive && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-emerald-accent px-4 py-1 text-xs font-semibold text-navy">
                    {lang === "es" ? "Inscrito" : "Enrolled"}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-navy">
                  {lang === "es" ? plan.name_i18n.es : plan.name_i18n.en}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {lang === "es" ? plan.description_i18n.es : plan.description_i18n.en}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="font-serif text-4xl font-bold text-navy">
                  {formatPrice(plan.price_cents, plan.currency)}
                </span>
                <span className="text-sm text-slate-400">
                  /{lang === "es" ? "único" : "one-time"}
                </span>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {(plan.features as string[]).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-accent" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {isActive ? (
                <a
                  href={`/${locale}/dashboard`}
                  className="block w-full rounded-xl bg-emerald-accent py-3 text-center text-sm font-bold text-navy shadow-sm transition hover:brightness-110"
                >
                  {lang === "es" ? "Ir al dashboard" : "Go to dashboard"}
                </a>
              ) : (
                <button
                  type="button"
                  disabled={enrolling === plan.plan_id}
                  onClick={() => handleEnroll(plan.plan_id)}
                  className={`w-full rounded-xl py-3 text-sm font-bold shadow-sm transition ${
                    isPopular
                      ? "bg-navy text-white hover:brightness-125"
                      : "border-2 border-slate-200 bg-white text-navy hover:border-navy"
                  } disabled:opacity-50`}
                >
                  {enrolling === plan.plan_id
                    ? lang === "es"
                      ? "Procesando..."
                      : "Processing..."
                    : lang === "es"
                      ? "Inscribirse ahora"
                      : "Enroll now"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Pilot cohort */}
      <section className="mt-16 rounded-2xl border border-amber-200 bg-amber-50/50 p-8 text-center">
        <h2 className="font-serif text-2xl font-bold text-navy">
          {lang === "es" ? "Cohorte piloto — acceso gratuito" : "Pilot cohort — free access"}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          {lang === "es"
            ? "Sé de los primeros en probar Vilo Academy CRC Elite Training. Acceso completo durante el piloto. Cupos limitados."
            : "Be among the first to try Vilo Academy CRC Elite Training. Full access during the pilot. Limited spots."}
        </p>
        {enrollment?.pilot_cohort ? (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            <CheckCircle2 size={16} />
            {lang === "es" ? "Registrado en el piloto" : "Registered for pilot"}
          </div>
        ) : (
          <button
            type="button"
            disabled={enrolling === "pilot"}
            onClick={handlePilotSignup}
            className="mt-6 inline-block rounded-xl bg-amber-600 px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-700 disabled:opacity-50"
          >
            {enrolling === "pilot"
              ? lang === "es"
                ? "Registrando..."
                : "Registering..."
              : lang === "es"
                ? "Registrarse para el piloto"
                : "Register for pilot"}
          </button>
        )}
        <p className="mt-4 text-xs text-slate-400">
          {lang === "es"
            ? "Sin compromiso. Sin pago. Acceso completo durante el piloto."
            : "No commitment. No payment. Full access during pilot."}
        </p>
      </section>

      {/* Login CTA for guests */}
      {authState === "guest" && (
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            {lang === "es"
              ? "¿Ya tienes una cuenta?"
              : "Already have an account?"}
          </p>
          <a
            href={`/${locale}/login`}
            className="mt-2 inline-block text-sm font-semibold text-emerald-accent hover:text-emerald-700"
          >
            {lang === "es" ? "Iniciar sesión" : "Sign in"}
          </a>
        </div>
      )}
    </div>
  );
}
