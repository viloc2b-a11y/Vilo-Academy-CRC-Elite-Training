// src/curriculum-engine/data/modules/m17.ts

import type { Module } from "../../types";

/**
 * Module 17 — Crisis / Integration (Cross-station command)
 *
 * PROMPT 3 — CRISIS / INTEGRATION (Module 17)
 * - Structure enforced via ordered lesson titles (1–11).
 * - Cross-module links explicitly reference Modules 11–16.
 * - Scoring penalizes contradictions across stations and includes a global integrity fail.
 */
export const MODULE_M17: Module = {
  id: "M17",
  slug: "crisis-integration-cross-station-command",
  internalName: "mod_17_crisis_integration_cross_station_command",
  category: "capstone",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "Q", "C"],
  title: {
    en: "Module 17 — Crisis / Integration: Cross-Station Command Under Inspection Pressure",
    es: "Módulo 17 — Crisis / Integración: mando multi-estación bajo presión de inspección",
  },

  // SMART objective (prioritization + linkage identification + integrated defense output)
  objective: {
    en: "CRC can prioritize competing inspection-day risks, identify ≥3 cross-station linkages, and deliver a single integrated defense statement with an escalation plan that stays consistent across stations.",
    es: "El CRC puede priorizar riesgos competidores en día de inspección, identificar ≥3 vínculos entre estaciones y entregar una defensa integrada única con un plan de escalamiento consistente entre estaciones.",
  },

  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States the crisis rule: integrity and patient safety outrank speed, revenue, and convenience—especially under audit pressure.",
          es: "Enuncia la regla de crisis: integridad y seguridad del paciente superan velocidad, ingresos y conveniencia—especialmente bajo presión de auditoría.",
        },
        {
          en: "Names cross-station failure patterns: contradiction drift, false closure, backdating, missing source, and deviation misclassification.",
          es: "Nombra patrones de falla multi-estación: contradicciones, cierre falso, backdating, fuente faltante y mala clasificación de desviaciones.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Builds a priority order (1–5) tied to patient/data/compliance impacts and produces a linkage map connecting decisions across stations.",
          es: "Construye un orden de prioridades (1–5) ligado a impactos paciente/datos/cumplimiento y produce un mapa de vínculos entre decisiones de estaciones.",
        },
        {
          en: "Drafts two audit-facing outputs: one FDA-inspector response and one sponsor/CRO monitor response that do not contradict each other.",
          es: "Redacta dos salidas orientadas a auditoría: una respuesta a inspector FDA y una a sponsor/monitor CRO sin contradicciones entre sí.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects integrity traps during crisis (pressure to backdate, false-close, rewrite source, hide deviations) and escalates to QA/compliance with a documented trail.",
          es: "Detecta trampas de integridad en crisis (presión para retrofechar, cerrar en falso, reescribir fuente, ocultar desviaciones) y escala a QA/cumplimiento con rastro documentado.",
        },
        {
          en: "Maintains cross-station consistency: can explain why decisions in one station constrain options in others without inventing facts.",
          es: "Mantiene consistencia multi-estación: puede explicar por qué decisiones de una estación restringen opciones en otras sin inventar hechos.",
        },
      ],
    },
  ],

  lessons: [
    // 1) Module Overview
    {
      lessonId: "M17.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      objective: {
        en: "Define crisis success: fast prioritization, cross-station consistency, and audit-grade integrated defense.",
        es: "Definir éxito en crisis: priorización rápida, consistencia multi-estación y defensa integrada lista para auditoría.",
      },
      keyPoints: [
        {
          en: "You are graded on consistency: contradictions across stations reduce score even if each single answer sounds plausible.",
          es: "Se califica consistencia: contradicciones entre estaciones bajan el puntaje aunque cada respuesta aislada suene plausible.",
        },
        {
          en: "Time pressure is part of performance: incomplete outputs inside the time box are incomplete performance.",
          es: "La presión de tiempo es parte del desempeño: entregables incompletos dentro del tiempo = desempeño incompleto.",
        },
        {
          en: "Crisis bar: do not invent facts to ‘make it consistent’. Label known vs unknown and escalate.",
          es: "Barra de crisis: no inventes hechos para ‘hacer consistente’. Separa conocido vs desconocido y escala.",
        },
      ],
    },

    // 2) Core Concepts
    {
      lessonId: "M17.S2",
      title: { en: "2) Core concepts (crisis rules)", es: "2) Conceptos núcleo (reglas de crisis)" },
      lessonType: "reading",
      objective: {
        en: "Provide rules that govern decisions under inspection-day concurrency.",
        es: "Proveer reglas que gobiernan decisiones bajo concurrencia de inspección.",
      },
      keyPoints: [
        {
          en: "Rule: Patient safety + data integrity + compliance outrank budget/revenue urgency (revenue pressure never justifies integrity shortcuts).",
          es: "Regla: seguridad del paciente + integridad de datos + cumplimiento superan urgencia de presupuesto/ingresos (presión de ingresos nunca justifica atajos).",
        },
        {
          en: "Rule: One story across artifacts. Your FDA response and sponsor response must share the same core facts and open risks.",
          es: "Regla: una sola historia entre artefactos. Respuesta a FDA y a sponsor deben compartir hechos núcleo y riesgos abiertos.",
        },
        {
          en: "Rule: Integrity traps are global fails: backdating, false closure, rewriting source, inventing missing source, deviation misclassification to reduce heat.",
          es: "Regla: trampas de integridad = global fail: backdating, cierre falso, reescribir fuente, inventar fuente faltante, reclasificar desviación para bajar presión.",
        },
        {
          en: "Rule: Escalate early with artifacts attached (what, when, who, impact, next step) instead of narrative-only explanations.",
          es: "Regla: escalar temprano con artefactos adjuntos (qué, cuándo, quién, impacto, siguiente paso) en lugar de explicaciones sin evidencia.",
        },
      ],
    },

    // 3) Cross-Module Links (Modules 11–16 mandatory)
    {
      lessonId: "M17.S3",
      title: { en: "3) Cross-module links (M11–M16)", es: "3) Enlaces entre módulos (M11–M16)" },
      lessonType: "reading",
      objective: {
        en: "Force cross-station linkage identification using the technical/regulatory modules that feed the capstone.",
        es: "Forzar identificación de vínculos multi-estación usando módulos técnicos/regulatorios que alimentan el capstone.",
      },
      keyPoints: [
        {
          en: "M11 (Source + ALCOA+): governs what you can truthfully claim; fixes must preserve originals; no backdating.",
          es: "M11 (Fuente + ALCOA+): gobierna lo que puedes afirmar con verdad; correcciones preservan originales; sin backdating.",
        },
        {
          en: "M12 (EDC + query gaming): false closure is an integrity breakdown; field history is evidence.",
          es: "M12 (EDC + query gaming): cierre falso = quiebre de integridad; historial de campos es evidencia.",
        },
        {
          en: "M13 (Monitoring defense): walkthrough narrative must match artifacts; pressure resistance must be documented.",
          es: "M13 (Defensa en monitoría): narrativa debe coincidir con artefactos; resistencia a presión debe documentarse.",
        },
        {
          en: "M14 (Budget): revenue protection is real—but cannot override compliance and integrity; budget emails must not conflict with inspection narrative.",
          es: "M14 (Presupuesto): proteger ingresos es real—pero no puede anular cumplimiento e integridad; correos de presupuesto no deben contradecir narrativa de inspección.",
        },
        {
          en: "M15 (Recruitment): milestone pressure changes behavior—your plan must not hide yields, screen-fails, or protocol friction.",
          es: "M15 (Reclutamiento): presión de metas cambia conducta—tu plan no debe ocultar yields, screen-fails o fricción de protocolo.",
        },
        {
          en: "M16 (Capstone OSCE): station outputs are artifacts; crisis integration is about keeping station-to-station decisions consistent and defensible.",
          es: "M16 (Capstone OSCE): salidas de estaciones son artefactos; integración de crisis es mantener decisiones consistentes y defendibles entre estaciones.",
        },
      ],
    },

    // 4) Guided Practice (3 crisis scenarios)
    {
      lessonId: "M17.S4.GPA",
      title: { en: "4) Guided practice — Scenario A (wrong prioritization trap)", es: "4) Práctica guiada — Escenario A (trampa de priorización incorrecta)" },
      lessonType: "case",
      objective: {
        en: "Detect wrong prioritization (budget first) and restate the correct top-3 order with rationale.",
        es: "Detectar priorización incorrecta (presupuesto primero) y re-enunciar top-3 correcto con justificación.",
      },
      keyPoints: [
        {
          en: "Simultaneous inputs (all within 10 minutes): (1) Sponsor BD email: ‘Accept $52K or we move today.’ (2) CRO monitor: ‘Deviation log blank for window miss.’ (3) FDA inspector: ‘Show SAE timeline for Subject 167.’",
          es: "Entradas simultáneas (todas en 10 minutos): (1) Correo Sponsor BD: ‘Acepta $52K o nos movemos hoy.’ (2) Monitor CRO: ‘Log de desviaciones en blanco para ventana.’ (3) Inspector FDA: ‘Muéstrame línea de tiempo SAE del Sujeto 167.’",
        },
        {
          en: "Wrong prioritization (trap): answering budget first while safety/integrity questions remain open.",
          es: "Priorización incorrecta (trampa): responder presupuesto primero mientras seguridad/integridad quedan abiertas.",
        },
        {
          en: "Correct action: prioritize safety/integrity first; respond to budget only after containment/escalation actions are set and documented.",
          es: "Acción correcta: priorizar seguridad/integridad primero; responder presupuesto solo después de contención/escalamiento documentados.",
        },
      ],
    },
    {
      lessonId: "M17.S4.GPB",
      title: { en: "4) Guided practice — Scenario B (cross-station inconsistency)", es: "4) Práctica guiada — Escenario B (inconsistencia entre estaciones)" },
      lessonType: "case",
      objective: {
        en: "Identify a contradiction between S1 and S2 outputs and resolve it without inventing facts.",
        es: "Identificar contradicción entre salidas S1 y S2 y resolverla sin inventar hechos.",
      },
      keyPoints: [
        {
          en: "Inputs: In S1 you stated ‘eligibility failure stopped randomization.’ In S2 you wrote ‘subject randomized per schedule’ to keep flow moving. Both cannot be true.",
          es: "Insumos: En S1 declaraste ‘falla de elegibilidad detuvo aleatorización.’ En S2 escribiste ‘sujeto aleatorizado según agenda’ para mantener flujo. Ambas no pueden ser verdad.",
        },
        {
          en: "Integrity trap: rewriting prior station output or claiming new facts without artifacts.",
          es: "Trampa de integridad: reescribir salida previa o afirmar hechos nuevos sin artefactos.",
        },
        {
          en: "Correct action: declare the inconsistency as an open risk; identify which artifact controls (lab result/CTMS log/EDC history); escalate and correct with audit trail.",
          es: "Acción correcta: declarar inconsistencia como riesgo abierto; identificar qué artefacto manda (lab/CTMS/historial EDC); escalar y corregir con audit trail.",
        },
      ],
    },
    {
      lessonId: "M17.S4.GPC",
      title: { en: "4) Guided practice — Scenario C (ambiguous multi-pressure)", es: "4) Práctica guiada — Escenario C (multi-presión ambigua)" },
      lessonType: "case",
      objective: {
        en: "Handle ambiguous timing/documentation conflict under competing pressures without global-fail actions.",
        es: "Manejar conflicto ambiguo de tiempo/documentación bajo presiones competidoras sin acciones de global fail.",
      },
      keyPoints: [
        {
          en: "Inputs: EDC shows AE onset 4/19; source note is unsigned and timestamp is missing; sponsor demands DB lock readiness; monitor suggests ‘close it, we can fix source later.’",
          es: "Insumos: EDC muestra inicio AE 19/4; nota fuente sin firma y sin timestamp; sponsor exige DB lock; monitor sugiere ‘ciérralo, luego arreglamos fuente.’",
        },
        {
          en: "Integrity traps: false closure + missing source invention + backdating signature/time.",
          es: "Trampas: cierre falso + inventar fuente faltante + retrofechar firma/tiempo.",
        },
        {
          en: "Correct action: label unknowns; keep query open or reopen; document pressure; escalate; produce a short defense that is truthful about uncertainty.",
          es: "Acción correcta: marcar desconocidos; mantener query abierto o reabrir; documentar presión; escalar; producir defensa breve veraz sobre incertidumbre.",
        },
      ],
    },

    // 5) Integrated Crisis Scenario
    {
      lessonId: "M17.S5",
      title: { en: "5) Integrated crisis scenario (inspection-day concurrency)", es: "5) Escenario de crisis integrado (concurrencia día de inspección)" },
      lessonType: "simulation",
      objective: {
        en: "Present the single integrated crisis that ties safety, source/EDC integrity, deviations, budget pressure, and recruitment recovery in one timeline.",
        es: "Presentar una sola crisis integrada que conecte seguridad, integridad fuente/EDC, desviaciones, presión de presupuesto y recuperación de reclutamiento en una línea de tiempo.",
      },
      keyPoints: [
        {
          en: "Simultaneous roles: FDA inspector (integrity), CRO monitor (queries/deviations), sponsor rep (budget/payment). Your outputs must stay consistent across all three audiences.",
          es: "Roles simultáneos: inspector FDA (integridad), monitor CRO (queries/desviaciones), sponsor (presupuesto/pago). Tus salidas deben ser consistentes entre las tres audiencias.",
        },
        {
          en: "Interdependencies: what you claim about timing in one station constrains what you can claim about safety, deviations, and recruitment in another.",
          es: "Interdependencias: lo que afirmas sobre tiempos en una estación limita lo que puedes afirmar sobre seguridad, desviaciones y reclutamiento en otra.",
        },
      ],
    },

    // 6) Crisis Workflow (outputs required)
    {
      lessonId: "M17.S6",
      title: { en: "6) Crisis workflow (outputs required)", es: "6) Flujo de crisis (salidas requeridas)" },
      lessonType: "worksheet",
      objective: {
        en: "Define the exact outputs the learner must produce, in order, within the time box.",
        es: "Definir las salidas exactas que el alumno debe producir, en orden, dentro del tiempo.",
      },
      keyPoints: [
        {
          en: "Output 1: Priority order (1–5) with a one-line rationale per item tied to patient/data/compliance/revenue.",
          es: "Salida 1: orden de prioridades (1–5) con razón de una línea por ítem ligada a paciente/datos/cumplimiento/ingresos.",
        },
        {
          en: "Output 2: Cross-station linkages (≥3) explicitly named (e.g., ‘S1 eligibility timeline → S2 consent narrative’, ‘S3 deviation log gap → S6 SAE pressure response’).",
          es: "Salida 2: vínculos entre estaciones (≥3) nombrados explícitamente (p. ej., ‘S1 línea elegibilidad → S2 narrativa consentimiento’, ‘S3 brecha log desviación → S6 respuesta presión SAE’).",
        },
        {
          en: "Output 3: Integrated defense statement (6–8 sentences max) that can be spoken to FDA and shared with sponsor without contradiction.",
          es: "Salida 3: defensa integrada (máx 6–8 oraciones) que se pueda decir a FDA y compartir con sponsor sin contradicción.",
        },
        {
          en: "Output 4: Escalation plan (who/when/what artifacts) including QA/compliance escalation for integrity traps.",
          es: "Salida 4: plan de escalamiento (quién/cuándo/qué artefactos) incluyendo escalamiento a QA/cumplimiento por trampas de integridad.",
        },
      ],
    },

    // 7) Scoring Matrix
    {
      lessonId: "M17.S7",
      title: { en: "7) Scoring matrix (contradiction penalties + global fail)", es: "7) Matriz de puntuación (penaliza contradicciones + global fail)" },
      lessonType: "reading",
      objective: {
        en: "Make contradiction penalties and integrity global-fail triggers explicit.",
        es: "Hacer explícitas penalizaciones por contradicción y global fail por integridad.",
      },
      keyPoints: [
        {
          en: "Contradiction penalty: any claim that conflicts with earlier station outputs reduces score and requires an ‘open risk’ disclosure to recover partial credit.",
          es: "Penalización: cualquier afirmación que contradiga salidas previas reduce puntaje y requiere declarar ‘riesgo abierto’ para recuperar crédito parcial.",
        },
        {
          en: "GLOBAL FAIL: multi-station integrity breakdown (backdating, false closure, source rewriting, invented facts, deviation misclassification).",
          es: "GLOBAL FAIL: quiebre de integridad multi-estación (backdating, cierre falso, reescritura de fuente, hechos inventados, mala clasificación de desviación).",
        },
      ],
    },

    // 8) Practical Exercise (live simulation)
    {
      lessonId: "M17.S8",
      title: { en: "8) Practical exercise (live simulation)", es: "8) Ejercicio práctico (simulación en vivo)" },
      lessonType: "simulation",
      objective: {
        en: "Execute the crisis workflow end-to-end and produce all outputs under enforced time pressure.",
        es: "Ejecutar el flujo de crisis de punta a punta y producir todas las salidas bajo presión de tiempo.",
      },
      keyPoints: [
        {
          en: "Time box: 20 minutes. Deliverables must be complete, structured, and consistent across audiences.",
          es: "Límite: 20 minutos. Entregables completos, estructurados y consistentes entre audiencias.",
        },
        {
          en: "You must explicitly document at least one integrity trap refusal and one QA/compliance escalation action.",
          es: "Debes documentar explícitamente al menos un rechazo de trampa y una acción de escalamiento a QA/cumplimiento.",
        },
      ],
    },

    // 9) Answer Framework
    {
      lessonId: "M17.S9",
      title: { en: "9) Answer framework (integrated defense)", es: "9) Marco de respuesta (defensa integrada)" },
      lessonType: "recap",
      objective: {
        en: "Provide an elite, repeatable integrated defense structure that prevents contradiction drift.",
        es: "Proveer estructura élite y repetible de defensa integrada que prevenga contradicciones.",
      },
      keyPoints: [
        {
          en: "Elite structure: (1) one-sentence situation summary, (2) top 3 risks + why, (3) known vs unknown + verification, (4) immediate containment, (5) CAPA theme, (6) escalation recipients + artifacts.",
          es: "Estructura élite: (1) resumen de 1 oración, (2) top 3 riesgos + por qué, (3) conocido vs desconocido + verificación, (4) contención inmediata, (5) tema CAPA, (6) a quién se escala + artefactos.",
        },
        {
          en: "Defense Language (short): “This response aligns with ACRP CCRC expectations for GCP-aligned coordination under inspection pressure: we prioritized subject protection and data integrity, preserved originals, and documented corrections with an audit trail. Per ICH E6(R3) GCP principles, our statements are limited to what can be supported by artifacts; open risks are disclosed with an escalation plan (owners, timelines, and attached evidence).”",
          es: "Lenguaje de defensa (corto): “Esta respuesta se alinea con expectativas ACRP CCRC para coordinación conforme a GCP bajo presión de inspección: priorizamos protección del sujeto e integridad de datos, preservamos originales y documentamos correcciones con audit trail. Según principios de ICH E6(R3) GCP, nuestras afirmaciones se limitan a lo sustentado por artefactos; los riesgos abiertos se declaran con un plan de escalamiento (responsables, tiempos y evidencia adjunta).”",
        },
        {
          en: "Language rule: no excuses; no blame-shifting; no claims without artifact support.",
          es: "Regla de lenguaje: sin excusas; sin culpar; sin afirmar sin soporte de artefactos.",
        },
      ],
    },

    // 10) Certification Outcome
    {
      lessonId: "M17.S10",
      title: { en: "10) Certification outcome", es: "10) Resultado de certificación" },
      lessonType: "reading",
      objective: {
        en: "State how crisis performance affects certification decisions and remediation.",
        es: "Declarar cómo desempeño en crisis afecta certificación y remediación.",
      },
      keyPoints: [
        {
          en: "Pass requires: complete outputs inside time box, no contradictions left unaddressed, and no GLOBAL FAIL integrity triggers.",
          es: "Aprobar requiere: salidas completas dentro del tiempo, sin contradicciones sin abordar y sin GLOBAL FAIL por integridad.",
        },
        {
          en: "Any integrity GLOBAL FAIL triggers remediation + full re-demonstration regardless of score.",
          es: "Cualquier GLOBAL FAIL de integridad exige remediación + re-demostración completa sin importar puntaje.",
        },
      ],
    },

    // 11) Failure Impact
    {
      lessonId: "M17.S11",
      title: { en: "11) Failure impact", es: "11) Impacto de fallas" },
      lessonType: "reading",
      objective: {
        en: "Make crisis consequences explicit: systemic 483 risk, sponsor termination, payment loss, credibility collapse.",
        es: "Hacer explícitas consecuencias: riesgo 483 sistémico, terminación del sponsor, pérdida de pago y colapso de credibilidad.",
      },
      keyPoints: [
        {
          en: "Systemic 483 risk: multi-station contradictions and integrity shortcuts indicate loss of control of quality system.",
          es: "Riesgo 483 sistémico: contradicciones multi-estación y atajos de integridad indican pérdida de control del sistema de calidad.",
        },
        {
          en: "Sponsor termination: integrity breakdowns (false closure, backdating, missing source invention) can trigger site deactivation.",
          es: "Terminación sponsor: quiebres de integridad (cierre falso, backdating, inventar fuente faltante) pueden disparar desactivación del sitio.",
        },
        {
          en: "Payment loss: budget concessions made under pressure without defensible gaps + compliance holds can lead to withheld payments.",
          es: "Pérdida de pago: concesiones de presupuesto sin defensa + holds por cumplimiento pueden llevar a retención de pagos.",
        },
        {
          en: "Credibility collapse: once an inspector believes the record is curated, every future statement is discounted—recovery is slow and expensive.",
          es: "Colapso de credibilidad: si el inspector cree que el registro fue ‘curado’, toda afirmación futura pierde valor—recuperación es lenta y costosa.",
        },
      ],
    },
    {
      lessonId: "M17.REF",
      title: { en: "## REFERENCES", es: "## REFERENCES" },
      lessonType: "reading",
      objective: {
        en: "Anchor crisis execution to defensible regulatory and industry expectations.",
        es: "Anclar la ejecución de crisis a expectativas regulatorias e industriales defendibles.",
      },
      keyPoints: [
        {
          en: "1. [Primary FDA/ICH Guidance – ACRP Certification Standards + link: https://acrpnet.org/certifications/crc/]\n2. [Industry Standard – ASHP Competency Assessment Toolkit + link: https://www.ashp.org/Pharmacy-Practice/Resource-Centers/Competency-Assessment]",
          es: "1. [Primary FDA/ICH Guidance – ACRP Certification Standards + link: https://acrpnet.org/certifications/crc/]\n2. [Industry Standard – ASHP Competency Assessment Toolkit + link: https://www.ashp.org/Pharmacy-Practice/Resource-Centers/Competency-Assessment]",
        },
        {
          en: "## AUDIT NOTE\n- Addresses inspection-day loss-of-control risk: inconsistent narratives, integrity shortcuts, and weak oversight signals.\n- Maps to 483 patterns where records/audit trails cannot support critical decisions (safety reporting, deviations, and data changes under pressure).",
          es: "## AUDIT NOTE\n- Mitiga riesgo de ‘loss of control’ en inspección: narrativas inconsistentes, atajos de integridad y señales de supervisión débil.\n- Se alinea a patrones tipo 483 cuando los registros/audit trails no sustentan decisiones críticas (seguridad, desviaciones, cambios de datos bajo presión).",
        },
        {
          en: "## HOW THIS IS USED IN PRACTICE\n- When: during concurrent FDA/CRO/sponsor escalation moments—especially when asked to ‘close it now’ or ‘just say X’.\n- Where it shows up: monitoring visit walkthroughs, FDA inspection interviews, EDC query decisions, deviation classifications/logs, SAE reporting timelines.\n- What you do: cite risk-based oversight focus (critical data/processes), preserve originals, document correction rationale, and escalate with owners + artifacts.",
          es: "## HOW THIS IS USED IN PRACTICE\n- Cuándo: en escalaciones concurrentes FDA/CRO/sponsor—especialmente ante ‘ciérralo ya’ o ‘solo di X’.\n- Dónde aparece: walkthroughs de monitoría, entrevistas de inspección FDA, decisiones de queries en EDC, clasificación/log de desviaciones, líneas de tiempo SAE.\n- Qué haces: citar el enfoque de supervisión basada en riesgo (datos/procesos críticos), preservar originales, documentar racional de corrección y escalar con responsables + artefactos.",
        },
      ],
    },
  ],

  errorLibrary: [
    {
      errorId: "M17.E1",
      description: { en: "Crisis leader prioritizes budget negotiation first while safety/integrity items are open.", es: "El líder prioriza presupuesto primero mientras seguridad/integridad están abiertas." },
      risk: { en: "Signals misaligned priorities; increases audit heat; can escalate to sponsor hold/inspection escalation.", es: "Señal de prioridades erróneas; aumenta calor de auditoría; puede escalar a hold del sponsor/inspección." },
      expectedLearnerResponse: { en: "Reorder priorities; contain safety/integrity first; document escalation and next steps before budget reply.", es: "Reordenar prioridades; contener seguridad/integridad primero; documentar escalamiento y pasos antes de responder presupuesto." },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M17.E2",
      description: { en: "Contradictory claims across stations (‘stopped randomization’ vs ‘randomized per schedule’) with no open-risk disclosure.", es: "Afirmaciones contradictorias entre estaciones (‘detuvo aleatorización’ vs ‘aleatorizado’) sin declarar riesgo abierto." },
      risk: { en: "Credibility collapse; triggers inspector skepticism across all topics.", es: "Colapso de credibilidad; dispara escepticismo del inspector en todo." },
      expectedLearnerResponse: { en: "Declare inconsistency; anchor to controlling artifacts; correct with audit trail; escalate to QA/compliance as needed.", es: "Declarar inconsistencia; anclar a artefactos; corregir con audit trail; escalar a QA/cumplimiento." },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M17.E3",
      description: { en: "Integrity trap triggered: backdating, false closure, missing-source invention, or deviation misclassification.", es: "Trampa de integridad: backdating, cierre falso, inventar fuente faltante o mala clasificación de desviación." },
      risk: { en: "GLOBAL FAIL: multi-station integrity breakdown; systemic 483 risk; sponsor termination risk.", es: "GLOBAL FAIL: quiebre de integridad multi-estación; riesgo 483 sistémico; riesgo de terminación del sponsor." },
      expectedLearnerResponse: { en: "Refuse the trap; document pressure; escalate to QA/compliance; produce truthful defense with known vs unknown.", es: "Rechazar trampa; documentar presión; escalar a QA/cumplimiento; defensa veraz con conocido vs desconocido." },
      relatedDimensions: ["R", "Q", "O"],
    },
  ],

  practicalExercises: [
    {
      exerciseId: "M17.EX1",
      name: { en: "Live crisis integration (20 minutes)", es: "Integración de crisis en vivo (20 minutos)" },
      scenario: {
        en: "Immediately after a 6-station OSCE, you enter an integrated inspection-day crisis with simultaneous FDA, CRO, and sponsor inputs. Your goal is to produce a single consistent story, prioritize risks, map cross-station dependencies, and escalate appropriately without integrity shortcuts.",
        es: "Inmediatamente después de un OSCE de 6 estaciones, entras a una crisis integrada de día de inspección con entradas simultáneas de FDA, CRO y sponsor. Tu meta es producir una historia consistente, priorizar riesgos, mapear dependencias entre estaciones y escalar apropiadamente sin atajos de integridad.",
      },
      inputs: [
        { inputId: "M17.IN1", label: { en: "FDA inspector question set (3 prompts)", es: "Preguntas del inspector FDA (3 prompts)" }, inputKind: "free_text" },
        { inputId: "M17.IN2", label: { en: "CRO monitor findings note + query list", es: "Nota de hallazgos monitor CRO + lista de queries" }, inputKind: "table" },
        { inputId: "M17.IN3", label: { en: "Sponsor email thread (budget + payment pressure)", es: "Hilo de emails del sponsor (presupuesto + presión de pago)" }, inputKind: "table" },
        { inputId: "M17.IN4", label: { en: "OSCE station artifacts (S1–S6 outputs)", es: "Artefactos OSCE (salidas S1–S6)" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "In 20 minutes produce:\n(1) Priority order 1–5.\n(2) Cross-station linkage map with ≥3 explicit linkages.\n(3) Integrated defense statement (6–8 sentences max) usable for FDA + sponsor with no contradictions.\n(4) Escalation plan (who/when/what artifacts).\n\nReference requirement (operational): in your integrated defense, include one sentence that explicitly ties your actions to ACRP Certification Standards and one sentence that aligns with the ASHP Competency Assessment Toolkit (competency-based, evidence-backed execution).\n\nIntegrity constraint: you must explicitly refuse at least one integrity trap and document a QA/compliance escalation.",
        es: "En 20 minutos produce:\n(1) Orden de prioridades 1–5.\n(2) Mapa de vínculos multi-estación con ≥3 vínculos explícitos.\n(3) Defensa integrada (máx 6–8 oraciones) usable para FDA + sponsor sin contradicciones.\n(4) Plan de escalamiento (quién/cuándo/qué artefactos).\n\nRequisito de referencia (operacional): en tu defensa integrada, incluye una oración que vincule tus acciones a ACRP Certification Standards y una oración alineada al ASHP Competency Assessment Toolkit (ejecución basada en competencias y evidencia).\n\nRestricción de integridad: debes rechazar explícitamente al menos una trampa y documentar un escalamiento a QA/cumplimiento.",
      },
      deliverables: [
        { deliverableId: "M17.D1", label: { en: "Priority order (1–5)", es: "Orden de prioridades (1–5)" }, formatHint: "table" },
        { deliverableId: "M17.D2", label: { en: "Cross-station linkage map (≥3)", es: "Mapa de vínculos multi-estación (≥3)" }, formatHint: "table" },
        { deliverableId: "M17.D3", label: { en: "Integrated defense statement", es: "Defensa integrada" }, formatHint: "short_memo" },
        { deliverableId: "M17.D4", label: { en: "Escalation plan (roles + artifacts)", es: "Plan de escalamiento (roles + artefactos)" }, formatHint: "table" },
      ],
    },
  ],

  assessmentRubric: {
    rubricId: "M17.RUB1",
    totalPoints: 100,
    passingPoints: 95,
    criteria: [
      {
        criterionId: "M17.C1_PRIORITY_ORDER",
        description: {
          en: "Priority order (1–5) is defensible and places safety/integrity/compliance above revenue urgency.",
          es: "Orden de prioridades (1–5) defendible y coloca seguridad/integridad/cumplimiento por encima de urgencia de ingresos.",
        },
        points: 15,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Fail if budget/revenue is prioritized before safety/integrity containment actions are defined.",
          es: "Falla si presupuesto/ingresos se priorizan antes de definir contención de seguridad/integridad.",
        },
      },
      {
        criterionId: "M17.C2_LINKAGES",
        description: {
          en: "Identifies ≥3 explicit cross-station linkages and explains why they constrain decisions.",
          es: "Identifica ≥3 vínculos explícitos multi-estación y explica por qué restringen decisiones.",
        },
        points: 15,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Fail if linkages are vague (‘everything is related’) with no explicit station-to-station constraints.",
          es: "Falla si vínculos son vagos (‘todo se relaciona’) sin restricciones explícitas estación-a-estación.",
        },
      },
      {
        criterionId: "M17.C3_CONSISTENCY",
        description: {
          en: "Integrated defense is internally consistent and does not contradict earlier station artifacts; unresolved contradictions are disclosed as open risks.",
          es: "Defensa integrada es consistente internamente y no contradice artefactos previos; contradicciones no resueltas se declaran como riesgos abiertos.",
        },
        points: 20,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Fail if contradictions are hidden or the defense changes facts to ‘make it consistent’.",
          es: "Falla si se ocultan contradicciones o se cambian hechos para ‘hacer consistente’.",
        },
      },
      {
        criterionId: "M17.C4_ESCALATION_PLAN",
        description: {
          en: "Escalation plan is specific (who/when/what artifacts) and includes QA/compliance escalation for integrity traps.",
          es: "Plan de escalamiento específico (quién/cuándo/qué artefactos) e incluye escalamiento a QA/cumplimiento por trampas de integridad.",
        },
        points: 15,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Fail if escalation is ‘tell someone’ with no owners, timestamps, or artifacts attached.",
          es: "Falla si escalamiento es ‘decirle a alguien’ sin responsables, tiempos o artefactos adjuntos.",
        },
      },
      {
        criterionId: "M17.C5_INTEGRITY_REFUSAL",
        description: {
          en: "Explicitly refuses at least one integrity trap and documents pressure resistance.",
          es: "Rechaza explícitamente al menos una trampa de integridad y documenta resistencia a presión.",
        },
        points: 10,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "GLOBAL FAIL if learner endorses backdating, false closure, rewriting source, inventing missing source, or deviation misclassification.",
          es: "GLOBAL FAIL si avala backdating, cierre falso, reescribir fuente, inventar fuente faltante o mala clasificación de desviación.",
        },
      },
      {
        criterionId: "M17.C6_TIMEBOX_COMPLETION",
        description: {
          en: "All required outputs are produced within the time box in a structured format.",
          es: "Todas las salidas requeridas se producen dentro del tiempo en formato estructurado.",
        },
        points: 10,
        mapsToDimensions: ["O"],
        failCondition: {
          en: "Fail if outputs are incomplete or unstructured at time expiration.",
          es: "Falla si salidas están incompletas o sin estructura al terminar el tiempo.",
        },
      },
      {
        criterionId: "M17.C7_DEFENSE_TONE",
        description: {
          en: "Audit-grade tone: factual, integrity-forward, no minimization, no blame-shifting, no claims without artifacts.",
          es: "Tono nivel auditoría: factual, orientado a integridad, sin minimizar, sin culpar, sin afirmar sin artefactos.",
        },
        points: 15,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Fail if the defense relies on excuses (‘busy clinic’) or contradicts artifact evidence.",
          es: "Falla si la defensa se basa en excusas (‘clínica ocupada’) o contradice evidencia de artefactos.",
        },
      },
    ],
  },

  scorecardContribution: [
    { dimension: "R", weight: 0.3, aggregationKey: "crisis_governance_integrity_escalation_and_inspection_defense" },
    { dimension: "Q", weight: 0.3, aggregationKey: "cross_station_consistency_artifact_linkage_and_open_risk_honesty" },
    { dimension: "O", weight: 0.25, aggregationKey: "time_boxed_execution_priority_order_and_crisis_workflow_outputs" },
    { dimension: "C", weight: 0.15, aggregationKey: "patient_safety_prioritization_under_multi_pressure" },
  ],

  capstoneConnection: {
    summary: {
      en: "Post-OSCE integration: this module stress-tests cross-station consistency and integrity under concurrent FDA/CRO/sponsor pressure.",
      es: "Integración post-OSCE: este módulo prueba consistencia multi-estación e integridad bajo presión concurrente FDA/CRO/sponsor.",
    },
    stationIds: ["OSCE.S1", "OSCE.S2", "OSCE.S3", "OSCE.S4", "OSCE.S5", "OSCE.S6"],
  },

  tags: ["audit_readiness", "data_integrity", "traceability", "regulatory", "operational", "capstone_related", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Keep operational tokens in EN (FDA 483, CAPA, PI, CRA, EDC, SAE, OSCE). Translate intent, not tokens.",
    es: "Mantener tokens operativos en inglés (FDA 483, CAPA, PI, CRA, EDC, SAE, OSCE). Traducir intención, no tokens.",
  },
};

