// src/curriculum-engine/data/modules/m15.ts

import type { Module } from "../../types";

/**
 * Module 15 — Patient recruitment & retention: real conversion funnels and milestone protection.
 * Guided practice: three cases (GP1–GP3) — screen-fail intervention, retention protocol, channel optimization.
 */
export const MODULE_M15: Module = {
  id: "M15",
  slug: "patient-recruitment-retention-real-conversion-funnels",
  internalName: "mod_15_recruitment_retention_funnels",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["O", "Q", "R", "C"],
  title: {
    en: "Module 15 — Patient Recruitment & Retention: Real Conversion Funnels",
    es: "Módulo 15 — Reclutamiento y retención: embudos reales de conversión",
  },
  objective: {
    en: "Execute screen-fail interventions to raise yield (target ≥35%); deploy retention protocols before withdrawal; optimize recruitment channels for speed and ROI; track daily KPIs (yield, fail mix, time-to-randomization, dropout flags); and deliver sponsor-facing recovery plans that protect milestones and revenue under time pressure—without crossing pre-screening/regulatory screening boundaries.",
    es: "Ejecutar intervenciones de screen-fail para elevar yield (meta ≥35%); desplegar protocolos de retención antes del retiro; optimizar canales por velocidad y ROI; trackear KPIs diarios (yield, mix de fallas, tiempo a randomización, banderas de abandono); y entregar planes de recuperación al sponsor que protejan hitos e ingresos bajo presión—sin cruzar límites de pre-screening vs screening regulatorio.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Explains yield as a conversion and revenue driver (screened → randomized) and why ‘screen more’ without yield control burns budget and time.",
          es: "Explica yield como motor de conversión e ingresos (screened → randomized) y por qué ‘screenear más’ sin control de yield quema presupuesto y tiempo.",
        },
        {
          en: "States that retention is milestone protection: burden reduction and early dropout flags prevent missing primary endpoints and sponsor payment holds.",
          es: "Afirma que retención es protección de hitos: reducción de carga y banderas tempranas evitan perder endpoints primarios y retenciones de pago del sponsor.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Implements funnel controls: pre-screen labs when allowed, PI eligibility gate before consent, and channel allocation based on speed + ROI; tracks daily KPIs and reports trend changes.",
          es: "Implementa controles del embudo: labs de pre-screen cuando se permite, gate de elegibilidad del PI antes de consentimiento y asignación de canal por velocidad + ROI; trackea KPIs diarios y reporta cambios de tendencia.",
        },
        {
          en: "Deploys a retention protocol when withdrawal risk appears: burden reduction, scheduling efficiency, and patient-centered language with documented follow-up.",
          es: "Despliega protocolo de retención cuando aparece riesgo de retiro: reducción de carga, eficiencia de agenda y lenguaje centrado en el paciente con seguimiento documentado.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Under sponsor milestone pressure, produces a recovery plan with immediate (<2 week) actions, a single daily KPI, budget reallocation, and defensible yield target—without inventing accrual.",
          es: "Bajo presión de hitos del sponsor, produce plan de recuperación con acciones inmediatas (<2 semanas), un KPI diario, reasignación de presupuesto y meta defendible de yield—sin inventar reclutamiento.",
        },
        {
          en: "Detects systemic screen-fail patterns (labs vs eligibility vs consent) and converts them into process CAPA (job aids, pre-visit checks, scripts, and owner cadence).",
          es: "Detecta patrones sistémicos de screen-fail (labs vs elegibilidad vs consentimiento) y los convierte en CAPA de proceso (ayudas, checks pre-visita, scripts y cadencia con responsables).",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M15.L1",
      title: { en: "Core concepts — yield, funnel control, retention as milestone protection", es: "Conceptos núcleo — yield, control de embudo, retención como protección de hitos" },
      lessonType: "reading",
      objective: {
        en: "Anchor the conversion funnel model (screened → randomized → endpoint) and why daily tracking prevents compounding milestone lag.",
        es: "Anclar el modelo de embudo (screened → randomized → endpoint) y por qué el tracking diario previene rezago acumulativo de hitos.",
      },
      keyPoints: [
        {
          en: "Yield is not vanity: it determines how many screens and dollars are required to hit randomization milestones.",
          es: "Yield no es vanity: determina cuántos screenings y dólares se requieren para cumplir hitos de randomización.",
        },
        {
          en: "Pre-screening controls the funnel—but must respect regulatory boundaries (no protocol eligibility tests before consent unless allowed by protocol/SOC).",
          es: "Pre-screen controla el embudo—pero debe respetar límites regulatorios (sin pruebas de elegibilidad del protocolo antes de consentimiento salvo permitido por protocolo/SOC).",
        },
        {
          en: "Retention is milestone protection: burden reduction first; dropout flags are acted on before the next visit is missed.",
          es: "Retención es protección de hitos: primero reducir carga; banderas de abandono se atienden antes de perder la próxima visita.",
        },
        {
          en: "Regulatory consequence: missed enrollment milestones can trigger payment holds, enrollment caps, or site replacement—often irreversible once reallocation begins.",
          es: "Consecuencia regulatoria/contractual: fallar hitos puede activar retención de pago, caps de inclusión o reemplazo del sitio—frecuentemente irreversible cuando empieza la reasignación.",
        },
      ],
    },
    {
      lessonId: "M15.GP1",
      title: { en: "Guided practice — GP-15.1: screen-fail intervention (yield recovery)", es: "Práctica guiada — GP-15.1: intervención screen-fail (recuperación yield)" },
      lessonType: "case",
      objective: {
        en: "28 screened, 6 randomized (21%). Fails: labs 9, eligibility 7. Sponsor demands ≥30% yield in 2 weeks. Provide a 2-line plan + 1 daily metric.",
        es: "28 screened, 6 randomized (21%). Fallas: labs 9, elegibilidad 7. Sponsor exige ≥30% yield en 2 semanas. Dar plan 2 líneas + 1 métrica diaria.",
      },
      keyPoints: [
        {
          en: "Use immediate controls: pre-lab 24h (if allowed) + PI eligibility gate pre-consent; daily metric should be trackable (e.g., % lab fails/day).",
          es: "Usar controles inmediatos: pre-lab 24h (si permitido) + gate de elegibilidad PI pre-consentimiento; métrica diaria trackeable (p. ej., % fallas de lab/día).",
        },
      ],
    },
    {
      lessonId: "M15.GP2",
      title: { en: "Guided practice — GP-15.2: retention protocol (withdrawal risk)", es: "Práctica guiada — GP-15.2: protocolo de retención (riesgo retiro)" },
      lessonType: "case",
      objective: {
        en: "Subject 091 says too many blood draws and considers withdrawal. Provide 1 intervention + 1 exact patient phrase.",
        es: "Sujeto 091 dice demasiadas extracciones y considera retiro. Dar 1 intervención + 1 frase exacta al paciente.",
      },
      keyPoints: [
        {
          en: "Burden reduction: coordinate phlebotomy and a draw calendar; use patient-centered language and document follow-up plan.",
          es: "Reducción de carga: coordinar flebotomía y calendario de extracciones; usar lenguaje centrado en paciente y documentar plan de seguimiento.",
        },
      ],
    },
    {
      lessonId: "M15.GP3",
      title: { en: "Guided practice — GP-15.3: channel optimization ($5K allocation)", es: "Práctica guiada — GP-15.3: optimización de canal (asignación $5K)" },
      lessonType: "case",
      objective: {
        en: "Facebook: 3 randomized ($4.2K); Community: 7 ($2.5K); Referrals: 4 ($1.3K). Allocate $5K prioritizing ROI + speed.",
        es: "Facebook: 3 randomizados ($4.2K); Comunidad: 7 ($2.5K); Referidos: 4 ($1.3K). Asignar $5K priorizando ROI + velocidad.",
      },
      keyPoints: [
        {
          en: "Allocate to the channels with best conversion cost and fastest screen→randomize time; justify with simple math and cycle-time evidence.",
          es: "Asignar a canales con mejor costo por conversión y tiempo más rápido screen→randomize; justificar con matemática simple y evidencia de ciclo.",
        },
      ],
    },
    {
      lessonId: "M15.L2",
      title: { en: "Answer framework — sponsor recovery plans & daily control dashboard", es: "Marco de respuesta — planes de recuperación al sponsor y dashboard diario" },
      lessonType: "recap",
      objective: {
        en: "Consolidate the 5-move recovery model, daily KPIs, and a sponsor-ready email that links actions to milestones and revenue protection.",
        es: "Consolidar el modelo de 5 movimientos, KPIs diarios y correo listo para sponsor que vincule acciones con hitos y protección de ingresos.",
      },
      keyPoints: [
        {
          en: "Elite CRC = 5 moves: pre-screen labs; PI eligibility gate; channel speed+ROI optimization; retention triggers (burden reduction); daily KPIs (yield %, lab fail %, time-to-randomize, dropout flags).",
          es: "CRC elite = 5 movimientos: labs pre-screen; gate de elegibilidad PI; optimización de canal por velocidad+ROI; triggers de retención (reducir carga); KPIs diarios (yield %, % falla lab, tiempo a randomizar, banderas de abandono).",
        },
        {
          en: "Communication control: data + immediate actions only; explicitly tie to the threatened milestone and what changes within ≤2 weeks.",
          es: "Control de comunicación: datos + acciones inmediatas; vincular explícitamente al hito en riesgo y qué cambia en ≤2 semanas.",
        },
        {
          en: "Irreversibility awareness: missed milestones compound; without daily tracking, lag becomes permanent and sponsor reallocation becomes hard to reverse.",
          es: "Conciencia de irreversibilidad: hitos fallados se acumulan; sin tracking diario, el rezago se vuelve permanente y la reasignación del sponsor es difícil de revertir.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M15.E1",
      description: { en: "Screens without pre-lab or pre-screen controls; lab failures dominate the funnel.", es: "Screenear sin pre-lab o controles de pre-screen; fallas de lab dominan el embudo." },
      risk: { en: "High lab screen-fail rate; slow conversion; missed milestones.", es: "Alta tasa de fallas de lab; conversión lenta; hitos fallidos." },
      expectedLearnerResponse: {
        en: "Implement allowed pre-screen lab checks and scheduling rules; track % lab fails daily; adjust scripts and eligibility gating.",
        es: "Implementar pre-screen de labs permitido y reglas de agenda; trackear % fallas de lab diario; ajustar scripts y gate de elegibilidad.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M15.E2",
      description: { en: "Response to low yield is ‘we’ll just screen more patients’.", es: "Respuesta a bajo yield es ‘solo screenear más pacientes’." },
      risk: { en: "Volume without yield burns budget and staff; quality erosion.", es: "Volumen sin yield quema presupuesto y personal; erosión de calidad." },
      expectedLearnerResponse: {
        en: "Target fail drivers and conversion steps; redesign funnel controls; allocate budget to high-ROI channels; deploy retention triggers.",
        es: "Atacar drivers de falla y pasos de conversión; rediseñar controles; asignar presupuesto a canales ROI; desplegar retención.",
      },
      relatedDimensions: ["O", "R"],
    },
    {
      errorId: "M15.E3",
      description: { en: "No time-to-randomization tracking; site cannot explain slow conversion to sponsor.", es: "Sin tracking de tiempo a randomización; sitio no puede explicar conversión lenta al sponsor." },
      risk: { en: "Milestone timing slips with no control loop; sponsor reallocates.", es: "Deriva de tiempo de hitos sin loop de control; sponsor reasigna." },
      expectedLearnerResponse: {
        en: "Track screen→randomize days and bottlenecks; implement scheduling and pre-visit readiness checks; report daily KPI.",
        es: "Trackear días screen→randomize y cuellos; implementar agenda y checks de readiness; reportar KPI diario.",
      },
      relatedDimensions: ["Q", "O"],
    },
    {
      errorId: "M15.E4",
      description: { en: "Ignores screen-fail patterns (same eligibility fails weekly) and keeps repeating the same screening steps.", es: "Ignora patrones de screen-fail (mismas fallas de elegibilidad) y repite los mismos pasos." },
      risk: { en: "Predictable failures; wasted screening and sponsor frustration.", es: "Fallas previsibles; screening desperdiciado y frustración del sponsor." },
      expectedLearnerResponse: {
        en: "Run pattern review; adjust pre-screen questions and PI gate; update scripts; align team on exclusion hot-spots.",
        es: "Revisar patrón; ajustar preguntas pre-screen y gate PI; actualizar scripts; alinear equipo en hotspots de exclusión.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M15.E5",
      description: { en: "Retention risk signs (burden complaints) are not acted on until the subject withdraws.", es: "Señales de riesgo de retención (quejas de carga) no se atienden hasta que el sujeto se retira." },
      risk: { en: "Dropouts before endpoint visits; missing primary data; milestone loss.", es: "Abandonos antes de visitas endpoint; datos primarios faltantes; pérdida de hitos." },
      expectedLearnerResponse: {
        en: "Deploy retention protocol immediately; reduce burden and schedule efficiently; document plan and follow-up; escalate if safety/AE driven.",
        es: "Desplegar protocolo de retención de inmediato; reducir carga y agendar eficientemente; documentar plan y seguimiento; escalar si está impulsado por seguridad/AE.",
      },
      relatedDimensions: ["C", "O"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M15.EX1",
      name: { en: "Milestone recovery — payment at risk", es: "Recuperación de hito — pago en riesgo" },
      scenario: {
        en: "Sponsor email: ‘Q1: 12 randomized by EOW. Current 6/12. Miss milestone = 25% payment withheld + enrollment cap reduced.’ Week 5 status shows low yield and high lab/eligibility/consent failures plus two retention dropouts.",
        es: "Correo del sponsor: ‘Q1: 12 randomizados para fin de semana. Van 6/12. Si fallan: retención de pago 25% + reducción de cupo.’ Semana 5 muestra bajo yield y altas fallas de lab/elegibilidad/consentimiento más dos abandonos por carga.",
      },
      inputs: [
        { inputId: "M15.IN1", label: { en: "Recruitment funnel snapshot (Week 5)", es: "Snapshot embudo reclutamiento (Semana 5)" }, inputKind: "table" },
        { inputId: "M15.IN2", label: { en: "Screen-fail breakdown + reasons", es: "Desglose de screen-fail + razones" }, inputKind: "table" },
        { inputId: "M15.IN3", label: { en: "Budget remaining + channel performance", es: "Presupuesto restante + desempeño por canal" }, inputKind: "table" },
        { inputId: "M15.IN4", label: { en: "Retention flags + dropout notes", es: "Banderas de retención + notas de abandono" }, inputKind: "mock_ehr" },
      ],
      learnerTask: {
        en: "OSCE output required: choose a yield target (%), write a 3-line fail-reduction plan, allocate remaining budget ($), pick one daily KPI metric, and draft a ready-to-send sponsor recovery email explicitly linked to the threatened milestone. Fail if: no daily KPI, ignores labs, no milestone link, or actions won’t change performance within 2 weeks.",
        es: "Salida tipo OSCE: elegir meta de yield (%), escribir plan de reducción de fallas en 3 líneas, asignar presupuesto ($), escoger 1 KPI diario y redactar correo de recuperación al sponsor vinculado al hito en riesgo. Fallo si: no hay KPI diario, ignora labs, no vincula hito o acciones no cambian desempeño en 2 semanas.",
      },
      deliverables: [
        { deliverableId: "M15.D1", label: { en: "Yield target + daily KPI", es: "Meta de yield + KPI diario" }, formatHint: "short_memo" },
        { deliverableId: "M15.D2", label: { en: "Budget allocation plan", es: "Plan de asignación de presupuesto" }, formatHint: "table" },
        { deliverableId: "M15.D3", label: { en: "Sponsor recovery email", es: "Correo de recuperación al sponsor" }, formatHint: "email" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M15.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M15.C1",
        description: {
          en: "Diagnoses funnel loss drivers (labs vs eligibility vs consent) and proposes immediate yield interventions with a single daily KPI.",
          es: "Diagnostica drivers de pérdida (labs vs elegibilidad vs consentimiento) y propone intervenciones inmediatas con un KPI diario.",
        },
        points: 30,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Proposes only ‘screen more’ without targeting fail drivers or without any daily KPI.",
          es: "Propone solo ‘screenear más’ sin atacar drivers o sin KPI diario.",
        },
      },
      {
        criterionId: "M15.C2",
        description: {
          en: "Optimizes channel allocation for ROI + speed using simple math and cycle-time logic; links to milestone timing.",
          es: "Optimiza asignación de canal por ROI + velocidad con matemática simple y lógica de ciclo; vincula a tiempos de hitos.",
        },
        points: 20,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Allocates budget without evidence or ignores time-to-randomization impact on milestones.",
          es: "Asigna presupuesto sin evidencia o ignora impacto de tiempo a randomización en hitos.",
        },
      },
      {
        criterionId: "M15.C3",
        description: {
          en: "Deploys retention trigger protocol before withdrawal; uses burden reduction and patient-centered language with documented follow-up.",
          es: "Despliega protocolo de retención antes del retiro; reduce carga y usa lenguaje centrado en paciente con seguimiento documentado.",
        },
        points: 20,
        mapsToDimensions: ["C", "O"],
        failCondition: {
          en: "Treats dropout risk as unavoidable or waits for withdrawal with no intervention plan.",
          es: "Trata el riesgo de abandono como inevitable o espera el retiro sin plan de intervención.",
        },
      },
      {
        criterionId: "M15.C4",
        description: {
          en: "Sponsor recovery email is concise and data-driven: current status, immediate actions, KPI tracking, budget reallocation, and milestone commitment—no overpromising.",
          es: "Correo al sponsor es conciso y basado en datos: estado actual, acciones inmediatas, tracking KPI, reasignación y compromiso de hito—sin prometer de más.",
        },
        points: 30,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Email lacks milestone linkage, omits labs as a primary loss driver, or proposes actions that cannot change performance within 2 weeks.",
          es: "Correo no vincula hito, omite labs como driver principal o propone acciones que no cambian desempeño en 2 semanas.",
        },
      },
    ],
  },
  scorecardContribution: [
    { dimension: "O", weight: 0.34, aggregationKey: "recruitment_funnel_execution_screen_fail_interventions_and_daily_control" },
    { dimension: "Q", weight: 0.28, aggregationKey: "yield_kpi_math_channel_roi_speed_and_time_to_randomization_tracking" },
    { dimension: "R", weight: 0.2, aggregationKey: "sponsor_recovery_communication_milestone_defense_and_realistic_commitments" },
    { dimension: "C", weight: 0.18, aggregationKey: "retention_burden_reduction_dropout_prevention_and_endpoint_protection" },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S6 is the sponsor-pressure commitment station; it stresses feasibility reality, targets, and resource honesty—the same milestone-defense behaviors as this recruitment/retention module.",
      es: "OSCE.S6 es la estación de presión del patrocinador; enfatiza viabilidad, metas y honestidad de recursos—las mismas conductas de defensa de hitos que este módulo.",
    },
    stationIds: ["OSCE.S6"],
  },
  tags: ["operational", "audit_readiness", "data_integrity", "clinical_judgment", "regulatory", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Keep KPI, ROI, funnel, screen-fail, time-to-randomize, EOW as EN operational tokens; expand once in ES if needed.",
    es: "Mantener KPI, ROI, funnel, screen-fail, time-to-randomize, EOW como tokens operativos EN; expandir una vez en ES si hace falta.",
  },
};

