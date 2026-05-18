// src/curriculum-engine/data/modules/m2.ts

import type { Module } from "../../types";

/**
 * Module 2 — Protocol mastery & risk analysis (ICH E6(R3) QbD / CtQ, RBQM-ready).
 *
 * PROMPT 1 — BASE OPERATIVO (Modules 1–10): eight ordered lesson sections (overview → core →
 * three guided cases → practical exercise → scoring → answer framework → cross-links → failure impact).
 *
 * CRC Elite audit-grade: multi-source ambiguity, explicit monitor/audit lens, CAPA + defense outputs,
 * rubric totals aligned (100), passing 94; errorLibrary sized 3–5 with obvious/subtle/ambiguous coverage.
 */
export const MODULE_M2: Module = {
  id: "M2",
  slug: "protocol-mastery-risk-analysis",
  internalName: "mod_02_protocol_mastery_risk",
  category: "foundations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "C", "Q"],
  title: {
    en: "Module 2 — Clinical Trial Protocol: Reading, Interpreting & Managing Risk at Site Level",
    es: "Módulo 2 — Protocolo de ensayo clínico: lectura, interpretación y gestión de riesgo en el sitio",
  },
  objective: {
    en: "Extract critical operational requirements from a protocol; interpret ambiguous wording; resolve conflicts between sections; apply multiple rules under time pressure while keeping eligibility, visits, deviations, logs, AE reporting, and source documentation compliant and audit-defensible.",
    es: "Extraer requisitos operativos críticos del protocolo; interpretar redacción ambigua; resolver conflictos entre secciones; aplicar reglas múltiples bajo presión temporal manteniendo elegibilidad, visitas, desviaciones, logs, reporte de EA y documentación de fuente conformes y defendibles ante auditoría.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Maps protocol sections (I/E, schedule of assessments, treatment, safety reporting, amendments) to site tools: eligibility checklist, visit flow, prohibited meds list, safety focus list.",
          es: "Mapea secciones del protocolo (I/E, calendario de evaluaciones, tratamiento, reporte de seguridad, enmiendas) a herramientas del sitio: checklist de elegibilidad, flujo de visitas, lista de medicamentos prohibidos, lista foco seguridad.",
        },
        {
          en: "Defines deviation vs important deviation/violation in operational terms and names CtQ factors (eligibility, primary endpoint, key safety measures) per ICH E6(R3) expectations.",
          es: "Define desviación vs desviación importante/violación en términos operativos y nombra factores CtQ (elegibilidad, endpoint primario, medidas clave de seguridad) según ICH E6(R3).",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Runs pre-enrollment risk walk-through, documents grey zones, escalates to sponsor/medical monitor when wording is ambiguous; implements day-to-day visit checklists within windows.",
          es: "Ejecuta revisión de riesgo pre-inclusión, documenta zonas grises, escala a patrocinador/monitor médico cuando la redacción es ambigua; implementa checklists de visita dentro de ventanas.",
        },
        {
          en: "Records deviations with impact on subject/data, informs PI and sponsor per SOP, aligns Screening/Enrollment logs, Deviation Log, source, and EDC after clarifications.",
          es: "Registra desviaciones con impacto en sujeto/datos, informa PI y patrocinador según SOP, alinea logs screening/inclusión, log de desviaciones, fuente y EDC tras aclaraciones.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Resolves multi-section conflicts (e.g., inclusion vs prohibited meds) by halting enrollment, formal query, and documented interim plan—not by choosing the convenient section.",
          es: "Resuelve conflictos multi-sección (p. ej., inclusión vs medicamentos prohibidos) deteniendo inclusión, query formal y plan interino documentado—no eligiendo la sección conveniente.",
        },
        {
          en: "Prioritizes under RBQM time pressure: ineligible enrollment, missing CtQ/primary endpoint assessments, unimplemented amendments; defends escalation when PI preference contradicts explicit protocol or ‘no waivers’ language.",
          es: "Prioriza bajo presión RBQM: inclusión inelegible, evaluaciones CtQ/endpoint primario faltantes, enmiendas no implementadas; defiende escalamiento cuando preferencia del PI contradice protocolo explícito o cláusula ‘sin excepciones’.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M2.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the bar: protocol text is binding; CtQ and version control drive site execution; conflicts stop silent enrollment.",
        es: "Establecer la barra: el texto del protocolo es vinculante; CtQ y control de versión gobiernan la ejecución en sitio; los conflictos detienen la inclusión silenciosa.",
      },
      keyPoints: [
        {
          en: "You are graded on traceability: every eligibility decision, window, and amendment roll-out must point to protocol version + documented clarification—not habit.",
          es: "Se te califica por trazabilidad: cada decisión de elegibilidad, ventana y despliegue de enmienda debe anclarse a versión de protocolo + aclaración documentada—no al hábito.",
        },
        {
          en: "Outputs in this module: version–cohort issue matrix, top-3 RBQM priorities with severity/impact, CAPA (corrective + preventive), and a defense memo for a real conflict case.",
          es: "Salidas en este módulo: matriz versión–cohorte, prioridades RBQM top-3 con severidad/impacto, CAPA (correctiva + preventiva) y memo de defensa para un caso de conflicto real.",
        },
        {
          en: "Technical tokens stay in EN in both locales (ICH E6(R3), RBQM, CtQ, SoA, GCP, IRB).",
          es: "Tokens técnicos permanecen en inglés en ambos idiomas (ICH E6(R3), RBQM, CtQ, SoA, GCP, IRB/CEI).",
        },
      ],
    },
    {
      lessonId: "M2.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 28,
      objective: {
        en: "Anchor binding protocol use, real hand-offs, and recurring inspection failures in one operational layer.",
        es: "Anclar uso vinculante del protocolo, entregas reales y fallas recurrentes de inspección en una capa operativa.",
      },
      keyPoints: [
        {
          en: "Protocol = legal + operational rulebook once IRB/authorities approve; ambiguity requires structured rationale + sponsor clarification—not silent waiver.",
          es: "Protocolo = reglamento legal y operacional una vez aprobado por CEI/autoridades; la ambigüedad exige justificación estructurada + aclaración al patrocinador—no exención silenciosa.",
        },
        {
          en: "Master I/E, SoA, treatment (doses, windows, prohibited meds), safety/AE rules, amendments/FAQs; important deviation affects rights/safety or data integrity (ineligible enrollment, missing primary, unreported SAE).",
          es: "Dominar I/E, SoA, tratamiento (dosis, ventanas, prohibidos), reglas AE/seguridad, enmiendas/FAQs; desviación importante afecta derechos/seguridad o integridad (inclusión inelegible, primario faltante, SAE no reportada).",
        },
        {
          en: "Real-world workflow — CRC: build version-specific checklists; refuse ‘close enough’ I/E; log deviations contemporaneously; escalate multi-section conflicts before enrollment commits.",
          es: "Flujo real — CRC: checklists por versión; rechazar I/E ‘casi’; registrar desviaciones de forma contemporánea; escalar conflictos multi-sección antes de comprometer inclusión.",
        },
        {
          en: "Real-world workflow — PI: signs protocol adherence; documents clinical judgment calls per IB/protocol; does not override explicit I/E or ‘no waivers’ clauses without filed pathway.",
          es: "Flujo real — PI: adhiere al protocolo; documenta juicios clínicos según IB/protocolo; no anula I/E explícitos ni cláusulas ‘sin excepciones’ sin vía archivada.",
        },
        {
          en: "Real-world workflow — Sponsor/monitor: expects cohort-correct SoA; traces amendments; RBQM focuses on CtQ misses and under-reported deviations; CAPA must change workflows, not slides only.",
          es: "Flujo real — Patrocinador/monitor: espera SoA correcto por cohorte; traza enmiendas; RBQM enfoca fallas CtQ y desviaciones sub-reportadas; CAPA debe cambiar flujos, no solo diapositivas.",
        },
        {
          en: "Real-world workflow — IRB/Compliance: amendment approvals; may require re-consent; investigates systematic protocol drift and concealment patterns.",
          es: "Flujo real — CEI/Cumplimiento: aprobaciones de enmienda; puede exigir re-consentimiento; investiga deriva sistemática del protocolo y patrones de ocultamiento.",
        },
        {
          en: "Error-prone 1 — Ineligible enrollment: ignored criteria, ‘close enough’ numerics, unchecked lists.",
          es: "Propensa 1 — Inclusión inelegible: criterios ignorados, numéricos ‘casi’, listas sin verificación.",
        },
        {
          en: "Error-prone 2 — Missing/out-of-window primary endpoint and key safety assessments without deviation discipline.",
          es: "Propensa 2 — Endpoint primario faltante/fuera de ventana y evaluaciones clave de seguridad sin disciplina de desviación.",
        },
        {
          en: "Error-prone 3 — Amendments not implemented consistently across subjects/cohorts.",
          es: "Propensa 3 — Enmiendas no implementadas de forma consistente entre sujetos/cohortes.",
        },
        {
          en: "Error-prone 4 — Informal PI ‘exceptions’ without protocol text, sponsor notice, or Deviation Log.",
          es: "Propensa 4 — ‘Excepciones’ informales del PI sin texto en protocolo, aviso al patrocinador o log de desviaciones.",
        },
        {
          en: "Error-prone 5 — Decisions not traceable to protocol wording or filed clarifications; wrong SoA version applied to wrong cohort.",
          es: "Propensa 5 — Decisiones no trazables al texto o aclaraciones archivadas; SoA de versión incorrecta aplicada a cohorte equivocada.",
        },
        {
          en: "Propagation: Screening/Enrollment logs, Deviation Log, visits/randomization (M8), safety/AE (OSCE.S3), source/EDC ALCOA+ (M4), IP accountability (M9).",
          es: "Propagación: logs screening/inclusión, log de desviaciones, visitas/randomización (M8), seguridad/EA (OSCE.S3), fuente/EDC ALCOA+ (M4), contabilidad IP (M9).",
        },
      ],
    },
    {
      lessonId: "M2.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Hypertension trial: age 18–65 inclusive; SBP ≥140 and <180 at baseline with two separate readings. Candidate is 67, SBP 160/95, referred by cardiologist friend of PI.",
        es: "Ensayo hipertensión: edad 18–65 inclusive; TAS ≥140 y <180 en línea base con dos lecturas separadas. Candidato 67 años, TAS 160/95, referido por cardiólogo amigo del PI.",
      },
      keyPoints: [
        {
          en: "What CRC sees: DOB → 67; BP meets criterion; pressure to enroll.",
          es: "Qué ve el CRC: fecha nacimiento → 67; TA cumple criterio; presión para incluir.",
        },
        {
          en: "How to think: numeric I/E are CtQ; no investigator discretion for age unless protocol says so.",
          es: "Cómo pensar: I/E numéricos son CtQ; sin discreción del investigador para edad salvo que el protocolo lo diga.",
        },
        {
          en: "Decision: Do not enroll; screen fail age >65 in Screening Log and source.",
          es: "Decisión: No incluir; screen fail edad >65 en log de screening y fuente.",
        },
        {
          en: "Why it matters: safety population; data validity; major audit finding if enrolled.",
          es: "Por qué importa: población de seguridad; validez de datos; hallazgo mayor en auditoría si se incluye.",
        },
      ],
    },
    {
      lessonId: "M2.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Creatinine ≤1.5× ULN at screening; ULN 1.2 mg/dL; result 1.9 (1.58×). PI: ‘He’s close—lab variation.’",
        es: "Creatinina ≤1,5× ULN en screening; ULN 1,2 mg/dL; resultado 1,9 (1,58×). PI: ‘Está cerca—variación de lab’.",
      },
      keyPoints: [
        {
          en: "What CRC sees: explicit numeric threshold; no ± tolerance in protocol text.",
          es: "Qué ve el CRC: umbral numérico explícito; sin tolerancia ± en texto del protocolo.",
        },
        {
          en: "Incorrect move: waive threshold verbally as ‘close enough’ without repeat window or sponsor/IRB pathway.",
          es: "Movimiento incorrecto: eximir el umbral verbalmente como ‘casi’ sin ventana de repetición o vía patrocinador/CEI.",
        },
        {
          en: "Correct move: not eligible on 1.9; repeat if protocol allows; else no enrollment without documented exception path.",
          es: "Movimiento correcto: no elegible con 1,9; repetir si el protocolo permite; si no, sin inclusión sin vía documentada de excepción.",
        },
        {
          en: "How to think: ‘close’ is not a protocol category; check repeat-lab window if allowed—not silent waiver.",
          es: "Cómo pensar: ‘casi’ no es categoría del protocolo; revisar ventana de repetición de lab si aplica—no exención silenciosa.",
        },
        {
          en: "Why mistakes happen: recruitment pressure, PI instinct, culture of bending numbers.",
          es: "Por qué ocurre: presión de reclutamiento, instinto del PI, cultura de flexar números.",
        },
        {
          en: "Why it matters: clearance/toxicity risk; analysis integrity; unapproved waivers = major findings.",
          es: "Por qué importa: riesgo depuración/toxicidad; integridad analítica; exenciones no aprobadas = hallazgos mayores.",
        },
      ],
    },
    {
      lessonId: "M2.S3.GP3",
      title: {
        en: "3) Guided practice — Scenario 3 (ambiguous)",
        es: "3) Práctica guiada — Escenario 3 (ambiguo)",
      },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Exclusion: ‘Any clinically significant LFT abnormality at screening, in investigator opinion.’ ALT 1.6× ULN, AST 1.4× ULN, bilirubin normal, asymptomatic. IB notes DILI risk but no numeric I/E thresholds.",
        es: "Exclusión: ‘Cualquier alteración LFT clínicamente significativa en screening, en opinión del investigador.’ ALT 1,6× ULN, AST 1,4× ULN, bilirrubina normal, asintomático. IB menciona riesgo DILI sin umbrales numéricos en I/E.",
      },
      keyPoints: [
        {
          en: "How to think: cross-check stopping rules/AE criteria; link future hepatic events to this documented judgment; query sponsor if silent—safe default is document, don’t invent numeric cutoffs.",
          es: "Cómo pensar: cruzar reglas de parada/criterios AE; vincular eventos hepáticos futuros a este juicio documentado; consultar patrocinador si hay silencio—por defecto seguro: documentar, no inventar cortes numéricos.",
        },
        {
          en: "Decision: Document PI rationale in source; file clarification response; ensure AE/Deviation logs continuity if thresholds later breached.",
          es: "Decisión: Documentar razonamiento PI en fuente; archivar respuesta de aclaración; asegurar continuidad en logs AE/desviación si luego se superan umbrales.",
        },
        {
          en: "Why it matters: patient risk on IMP; scrutiny of future AEs; regulators accept judgment if consistent, documented, IB-aligned.",
          es: "Por qué importa: riesgo al paciente con IMP; escrutinio de EA futuros; reguladores aceptan juicio si es consistente, documentado y alineado al IB.",
        },
      ],
    },
    {
      lessonId: "M2.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 35,
      objective: {
        en: "Run the Protocol Risk Lab once under the 35-minute time box and produce the three deliverables.",
        es: "Ejecutar el Laboratorio de riesgo de protocolo una vez bajo 35 minutos y producir las tres salidas.",
      },
      keyPoints: [
        {
          en: "Time box: 35 minutes. Incomplete matrices or missing severity/impact classification = incomplete performance.",
          es: "Límite: 35 minutos. Matrices incompletas o sin clasificación severidad/impacto = desempeño incompleto.",
        },
        {
          en: "Deliverables: version–cohort issue table; top-3 CAPA with corrective + preventive themes; defense memo for one conflict (no concealment language).",
          es: "Entregables: tabla hallazgos versión–cohorte; CAPA top-3 con temas correctivo + preventivo; memo de defensa para un conflicto (sin lenguaje de ocultamiento).",
        },
      ],
    },
    {
      lessonId: "M2.S5",
      title: { en: "5) Scoring matrix & audit/monitor perspective", es: "5) Matriz de puntuación y perspectiva auditoría/monitor" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Make pass/fail transparent and anticipate inspection-grade questions.",
        es: "Hacer transparente aprobado/reprobado y anticipar preguntas grado inspección.",
      },
      keyPoints: [
        {
          en: "Binary grading: each rubric criterion is met/not met; critical fails on integrity items override partial credit.",
          es: "Calificación binaria: cada criterio se cumple/no se cumple; fallas críticas en integridad anulan crédito parcial.",
        },
        {
          en: "Monitor questions: show version at consent/enrollment; prove I/E against that version; trace amendment emails/training; reconcile primary endpoint windows vs source timestamps.",
          es: "Preguntas monitor: versión al consentimiento/inclusión; probar I/E contra esa versión; trazar correos/capacitación de enmienda; conciliar ventanas de endpoint primario vs marcas en fuente.",
        },
        {
          en: "Typical findings: ineligible subjects enrolled; CtQ assessments missing; deviations absent from log; cohort mixed SoA after amendment.",
          es: "Hallazgos típicos: inelegibles incluidos; evaluaciones CtQ faltantes; desviaciones ausentes del log; SoA mezclado por cohorte tras enmienda.",
        },
        {
          en: "CAPA themes: version-specific checklists, second reviewer on eligibility, equipment/visit rescue plans, Q&A repository with filed sponsor answers.",
          es: "Temas CAPA: checklists por versión, segundo revisor en elegibilidad, planes de rescate equipo/visita, repositorio Q&A con respuestas archivadas del patrocinador.",
        },
      ],
    },
    {
      lessonId: "M2.S6",
      title: { en: "6) Answer framework & fail conditions", es: "6) Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Consolidate conflict resolution, RBQM prioritization, PI vs protocol escalation, and integration with M4/M8/M9.",
        es: "Consolidar resolución de conflictos, priorización RBQM, escalamiento PI vs protocolo e integración con M4/M8/M9.",
      },
      keyPoints: [
        {
          en: "Elite format: (1) State applicable protocol version + facts, (2) List issues with severity/impact, (3) CAPA + escalation + what remains for sponsor/IRB decision.",
          es: "Formato élite: (1) Declarar versión aplicable + hechos, (2) Listar problemas con severidad/impacto, (3) CAPA + escalamiento + qué queda para decisión patrocinador/CEI.",
        },
        {
          en: "Strong work: seeks clarification on multi-section conflict; never enrolls on ‘convenient’ reading alone.",
          es: "Trabajo sólido: busca aclaración ante conflicto multi-sección; nunca incluye solo con lectura ‘conveniente’.",
        },
        {
          en: "Fail if: accepts clear ineligible enrollment; treats missing primary as cosmetic; ignores version-specific rules; advises concealment or enrolling under unresolved ‘no waivers’ conflict.",
          es: "Fallo si: acepta inclusión inelegible clara; trata primario faltante como cosmético; ignora reglas por versión; aconseja ocultar o incluir con conflicto ‘sin excepciones’ sin resolver.",
        },
      ],
    },
    {
      lessonId: "M2.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect protocol discipline to documentation, visits, IP, and capstone stations.",
        es: "Conectar disciplina de protocolo con documentación, visitas, IP y estaciones capstone.",
      },
      keyPoints: [
        {
          en: "M4 (ALCOA+): protocol-driven facts in source; deviations and clarifications contemporaneous and attributable.",
          es: "M4 (ALCOA+): hechos del protocolo en fuente; desviaciones y aclaraciones contemporáneas y atribuibles.",
        },
        {
          en: "M8 (Visits): SoA windows, consent-before-procedures sequencing, eligibility evidence before randomization.",
          es: "M8 (Visitas): ventanas SoA, secuencia consentimiento-antes-procedimientos, evidencia elegibilidad antes de randomización.",
        },
        {
          en: "M9 (IP): protocol-defined dosing holds, prohibited meds interactions, accountability tied to eligibility status.",
          es: "M9 (IP): retenciones de dosis definidas en protocolo, interacciones con prohibidos, contabilidad ligada a estado de elegibilidad.",
        },
        {
          en: "M10 (Safety): reporting windows and unscheduled visits driven by protocol safety section—not convenience.",
          es: "M10 (Seguridad): ventanas de reporte y visitas no programadas gobernadas por sección de seguridad del protocolo—no por conveniencia.",
        },
        {
          en: "Capstone: OSCE.S1 eligibility traceability; OSCE.S4 visit-window/PD/log discipline from SoA.",
          es: "Capstone: OSCE.S1 trazabilidad elegibilidad; OSCE.S4 ventanas/PD/logs desde SoA.",
        },
      ],
    },
    {
      lessonId: "M2.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit across safety, data, compliance, and sponsor trust.",
        es: "Hacer explícitas consecuencias en seguridad, datos, cumplimiento y confianza del patrocinador.",
      },
      keyPoints: [
        {
          en: "Patient safety: wrong cohort rules → missed contraindications, inadequate monitoring, IMP exposure without proper eligibility.",
          es: "Seguridad del paciente: reglas de cohorte incorrectas → contraindicaciones omitidas, monitorización inadecuada, exposición a IMP sin elegibilidad apropiada.",
        },
        {
          en: "Data integrity: primary endpoint gaps and version chaos invalidate analyses and trigger data queries across the database.",
          es: "Integridad de datos: brechas de endpoint primario y caos de versión invalidan análisis y disparan queries en toda la base.",
        },
        {
          en: "Compliance: systematic deviation under-reporting and amendment drift are inspection-grade; FDA 483 / warning letter patterns.",
          es: "Cumplimiento: sub-reporte sistemático de desviaciones y deriva de enmienda son grado inspección; patrones FDA 483 / warning letter.",
        },
        {
          en: "Sponsor trust / site viability: enrollment holds, for-cause visits, contract termination risk.",
          es: "Confianza patrocinador / viabilidad del sitio: holds de inclusión, visitas for-cause, riesgo de terminación contractual.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M2.E1",
      description: {
        en: "Subject with NYHA Class III HF—explicit exclusion. Eligibility checklist leaves HF blank; PI notes ‘stable, controlled’ and enrolls. No waiver or sponsor/IRB approval.",
        es: "Sujeto con IC NYHA III—exclusión explícita. Checklist de elegibilidad deja IC en blanco; PI anota ‘estable, controlada’ e incluye. Sin excepción ni aprobación patrocinador/CEI.",
      },
      risk: {
        en: "Patient IMP risk; data validity; major/critical audit citation.",
        es: "Riesgo con IMP; validez de datos; cita mayor/crítica en auditoría.",
      },
      expectedLearnerResponse: {
        en: "Halt enrollment; notify sponsor/IRB; deviation package; assess data impact; never complete eligibility as ‘met’ when exclusion documented.",
        es: "Detener inclusión; notificar patrocinador/CEI; paquete de desviación; evaluar impacto en datos; nunca completar elegibilidad como ‘cumple’ con exclusión documentada.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M2.E2",
      description: {
        en: "Primary endpoint FEV1 Week 12 spirometry missed in multiple subjects; machine broken/scheduling. Source says ‘not performed’; Deviation Log empty; no reschedule trail.",
        es: "Endpoint primario FEV1 semana 12 espirometría omitida en múltiples sujetos; equipo roto/agenda. Fuente dice ‘no realizado’; log de desviaciones vacío; sin rastro de reprogramación.",
      },
      risk: {
        en: "Data: missing endpoint may drop subjects or force imputation; compliance: CtQ failure + under-reported deviations.",
        es: "Datos: endpoint faltante puede excluir sujetos o forzar imputación; cumplimiento: falla CtQ + desviaciones sub-reportadas.",
      },
      expectedLearnerResponse: {
        en: "Enter deviations with impact; rescue plan for data; sponsor notification; CAPA on equipment and visit windows.",
        es: "Ingresar desviaciones con impacto; plan de rescate de datos; notificación patrocinador; CAPA en equipo y ventanas de visita.",
      },
      relatedDimensions: ["Q", "O", "R"],
    },
    {
      errorId: "M2.E3",
      description: {
        en: "Amendment 1 makes Visit 3 imaging required for new safety signal. IRB approves; site treats imaging as optional for months; inconsistent across subjects.",
        es: "Enmienda 1 hace obligatoria imagen en Visita 3 por nueva señal de seguridad. CEI aprueba; sitio trata imagen como opcional durante meses; inconsistente entre sujetos.",
      },
      risk: {
        en: "Patient missed safety detection; data heterogeneity; amendment non-implementation finding.",
        es: "Paciente sin detección de seguridad; heterogeneidad de datos; hallazgo de no implementación de enmienda.",
      },
      expectedLearnerResponse: {
        en: "Gap analysis by subject version; catch-up imaging plan per medical monitor; deviation where applicable; retrain on SoA changes.",
        es: "Análisis de brechas por versión de sujeto; plan de imágenes de recuperación según monitor médico; desviación si aplica; reentrenar en cambios de SoA.",
      },
      relatedDimensions: ["R", "O", "Q"],
    },
    {
      errorId: "M2.E4",
      description: {
        en: "Protocol: ‘No waivers of I/E permitted.’ Subject on prohibited med; PI orders CRC to mark eligibility ‘meets all’ and hide discontinuation from sponsor.",
        es: "Protocolo: ‘No se permiten excepciones de I/E.’ Sujeto con medicamento prohibido; PI ordena marcar elegibilidad ‘cumple todo’ y ocultar suspensión al patrocinador.",
      },
      risk: {
        en: "Patient safety unknowns; data integrity collapse; serious GCP/ethics breach.",
        es: "Incógnitas de seguridad al paciente; colapso de integridad de datos; brecha grave GCP/ética.",
      },
      expectedLearnerResponse: {
        en: "Refuse falsification; escalate to compliance; document instruction conflict; do not enroll.",
        es: "Rechazar falsificación; escalar a cumplimiento; documentar conflicto de instrucciones; no incluir.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M2.E5",
      description: {
        en: "Subtle ‘looks compliant’ pattern: Inclusion allows stable SSRI ≥3 months; prohibited meds bans SSRIs 14 days pre-baseline through EOT. Subject on sertraline 6 months. CRC picks inclusion section silently and enrolls without sponsor query.",
        es: "Patrón sutil ‘parece conforme’: Inclusión permite ISRS estable ≥3 meses; prohibidos prohíbe ISRS desde 14 días pre-baseline hasta FinT. Sujeto con sertralina 6 meses. CRC elige sección de inclusión en silencio e incluye sin query al patrocinador.",
      },
      risk: {
        en: "Unresolved section conflict; cross-site inconsistency; stopping vs interaction risk mishandled; audit of silent protocol pick.",
        es: "Conflicto de sección sin resolver; inconsistencia entre sitios; riesgo al suspender vs interacción mal manejado; auditoría de elección silenciosa del protocolo.",
      },
      expectedLearnerResponse: {
        en: "Stop enrollment; formal written clarification; document query and response; interim Deviation Log if paused; never enroll on one section without filed resolution.",
        es: "Detener inclusión; aclaración escrita formal; documentar query y respuesta; log interino de desviación si hay pausa; nunca incluir con una sección sin resolución archivada.",
      },
      relatedDimensions: ["R", "C", "O", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M2.EX1",
      name: {
        en: "Protocol Risk Lab — multiple cohorts under time pressure",
        es: "Laboratorio de riesgo de protocolo — múltiples cohortes bajo presión",
      },
      scenario: {
        en: "35 minutes before remote sponsor RBQM review (eligibility, primary endpoints, deviations). Subjects A, B, C enrolled under v1.0, post-Amendment 1, post-Amendment 2 respectively—different windows, imaging, and safety labs. Inputs: protocol v1.0–v3.0 with effective dates; per subject: PI signature date, eligibility checklist, labs/imaging, source at baseline and primary endpoint visit, EDC summaries, incomplete Deviation Log, sponsor email on ambiguous LFT rule (may or may not apply). Cross-source conflicts by design (e.g., checklist ‘eligible’ vs SoA imaging not performed; EDC visit date outside window in source).",
        es: "35 minutos antes de revisión RBQM remota del patrocinador (elegibilidad, endpoints primarios, desviaciones). Sujetos A, B, C incluidos bajo v1.0, post-enmienda 1 y post-enmienda 2 respectivamente—distintas ventanas, imagen y labs de seguridad. Insumos: protocolo v1.0–v3.0 con fechas efectivas; por sujeto: fecha firma PI, checklist de elegibilidad, labs/imagen, fuente en baseline y visita de endpoint primario, resúmenes EDC, log de desviaciones incompleto, correo patrocinador sobre regla LFT ambigua (puede o no aplicar). Conflictos entre fuentes a propósito (p. ej., checklist ‘elegible’ vs imagen SoA no realizada; fecha EDC fuera de ventana en fuente).",
      },
      inputs: [
        { inputId: "M2.IN1", label: { en: "Protocol + amendments packet", es: "Paquete protocolo + enmiendas" }, inputKind: "pdf" },
        { inputId: "M2.IN2", label: { en: "Per-subject version & enrollment artifacts", es: "Versión por sujeto y artefactos de inclusión" }, inputKind: "table" },
        { inputId: "M2.IN3", label: { en: "Source + EDC excerpts", es: "Extractos fuente + EDC" }, inputKind: "mock_ehr" },
        { inputId: "M2.IN4", label: { en: "Deviation log + sponsor email", es: "Log desviaciones + correo patrocinador" }, inputKind: "table" },
      ],
      learnerTask: {
        en: "Per A/B/C: identify applicable protocol version at enrollment; verify eligibility against that version; confirm CtQ assessments (primary endpoint, required imaging/labs) in window; list all protocol issues including unlogged deviations. Prioritize top 3 for RBQM; classify minor/major/critical and impact (patient/data/compliance); CAPA corrective + preventive (workflow change, not retraining-only). Draft defense memo for one PI-vs-protocol or multi-section conflict: name the conflict, escalation path, known vs unknown facts, and alignment with GCP/IRB and ICH E6(R3) risk-based quality—no concealment language.",
        es: "Por A/B/C: identificar versión de protocolo aplicable al inclusión; verificar elegibilidad contra esa versión; confirmar evaluaciones CtQ (endpoint primario, imagen/labs requeridos) en ventana; listar todos los problemas de protocolo incluidas desviaciones no registradas. Priorizar 3 principales para RBQM; clasificar menor/mayor/crítico e impacto (paciente/datos/cumplimiento); CAPA correctiva + preventiva (cambio de flujo, no solo reentrenar). Borrador de memo de defensa para conflicto PI-vs-protocolo o multi-sección: nombrar conflicto, vía de escalamiento, hechos conocidos vs desconocidos y alineación con GCP/CEI y calidad basada en riesgo ICH E6(R3)—sin lenguaje de ocultamiento.",
      },
      deliverables: [
        { deliverableId: "M2.D1", label: { en: "Version-cohort issue matrix", es: "Matriz de hallazgos por versión/cohorte" }, formatHint: "table" },
        { deliverableId: "M2.D2", label: { en: "Top-3 CAPA + severity", es: "CAPA top-3 + severidad" }, formatHint: "pdf" },
        { deliverableId: "M2.D3", label: { en: "Defense memo (conflict case)", es: "Memo de defensa (caso conflicto)" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M2.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M2.C1",
        description: {
          en: "Correctly applies protocol version per subject cohort; flags ineligible enrollment, missing CtQ/primary data, and amendment implementation gaps.",
          es: "Aplica correctamente versión de protocolo por cohorte; señala inclusión inelegible, datos CtQ/endpoint primario faltantes y brechas de implementación de enmiendas.",
        },
        points: 35,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Critical fail if learner misses version-specific rules, treats clear I/E violation as acceptable, or endorses enrolling on ambiguous conflict without sponsor/IRB resolution.",
          es: "Falla crítica si omite reglas por versión, trata violación clara de I/E como aceptable o avala inclusión con conflicto ambiguo sin resolución patrocinador/CEI.",
        },
      },
      {
        criterionId: "M2.C2",
        description: {
          en: "Prioritizes RBQM risks: ineligible subjects, missing primary/safety assessments, unlogged deviations—over cosmetic documentation.",
          es: "Prioriza riesgos RBQM: sujetos inelegibles, evaluaciones primarias/seguridad faltantes, desviaciones no registradas—sobre documentación cosmética.",
        },
        points: 25,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Critical fail if no high-risk issues identified in the exercise packet or all labeled minor without justification.",
          es: "Falla crítica si no identifica hallazgos de alto riesgo en el paquete o todo etiquetado menor sin justificación.",
        },
      },
      {
        criterionId: "M2.C3",
        description: {
          en: "CAPA: concrete corrective (logs, sponsor/IRB notice, data flags) and preventive (version checklists, Q&A repo, second reviewer on CtQ).",
          es: "CAPA: correctiva concreta (logs, aviso patrocinador/CEI, banderas de datos) y preventiva (checklists por versión, repositorio Q&A, segundo revisor en CtQ).",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Fail if CAPA is generic retraining without workflow or amendment-rollout fixes.",
          es: "Falla si CAPA es reentrenamiento genérico sin arreglos de flujo o despliegue de enmiendas.",
        },
      },
      {
        criterionId: "M2.C4",
        description: {
          en: "Defense memo: names conflict, escalation path, aligns with GCP/IRB and E6(R3) risk-based quality; no concealment language.",
          es: "Memo de defensa: nombra conflicto, vía de escalamiento, alinea con GCP/CEI y calidad basada en riesgo E6(R3); sin lenguaje de ocultamiento.",
        },
        points: 15,
        mapsToDimensions: ["R", "C"],
        failCondition: {
          en: "Critical fail if advises enrolling or continuing while explicit ‘no waivers’ or unresolved section conflict remains undocumented to sponsor, or recommends hiding deviations.",
          es: "Falla crítica si aconseja incluir o continuar con ‘sin excepciones’ explícito o conflicto de sección sin resolver sin documentar al patrocinador, o recomienda ocultar desviaciones.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.28,
      aggregationKey: "protocol_regulatory_binding_amendment_compliance",
    },
    {
      dimension: "O",
      weight: 0.32,
      aggregationKey: "schedule_windows_ctq_operational_execution",
    },
    {
      dimension: "Q",
      weight: 0.24,
      aggregationKey: "endpoint_integrity_deviation_reporting_rbqm",
    },
    {
      dimension: "C",
      weight: 0.16,
      aggregationKey: "investigator_judgment_documented_clinical_rationale",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S1 stresses eligibility traceability; OSCE.S4 stresses visit-window/PD/log discipline driven by protocol SoA—same CtQ moves as this module.",
      es: "OSCE.S1 ejercita trazabilidad de elegibilidad; OSCE.S4 ejercita ventanas/PD/logs impulsados por SoA del protocolo—mismos movimientos CtQ que este módulo.",
    },
    stationIds: ["OSCE.S1", "OSCE.S4"],
  },
  tags: ["regulatory", "documentation", "operational", "audit_readiness", "bilingual", "flagship", "clinical_judgment"],
  bilingualNotes: {
    en: "Keep ICH E6(R3), RBQM, CtQ, SoA, FEV1 as EN technical tokens; expand once in ES if needed.",
    es: "Mantener ICH E6(R3), RBQM, CtQ, SoA, FEV1 como tokens técnicos EN; expandir una vez en ES si hace falta.",
  },
};
