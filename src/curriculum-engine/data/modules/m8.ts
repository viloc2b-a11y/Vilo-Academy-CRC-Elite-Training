// src/curriculum-engine/data/modules/m8.ts

import type { Module } from "../../types";

/**
 * Module 8 — Screening & study visits: patient flow, visit windows, randomization & deviation control.
 * Guided practice: five cases (GP1–GP5) — distinct failure modes (pre-screen creep, randomization near-miss, safety vs window, systemic windows, primary endpoint timing); see IMPLEMENTATION_NOTES.moduleAuthoring.guidedPracticeCaseCount.
 */
export const MODULE_M8: Module = {
  id: "M8",
  slug: "screening-study-visits-windows-randomization",
  internalName: "mod_08_screening_study_visits",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["O", "Q", "R", "C"],
  title: {
    en: "Module 8 — Screening & Study Visits: Patient Flow, Visit Windows, Randomization & Deviation Control",
    es: "Módulo 8 — Visitas de tamizaje y estudio: flujo del paciente, ventanas, randomización y control de desviaciones",
  },
  objective: {
    en: "Clearly separate pre-screening from regulatory screening; conduct screening and follow-up visits respecting consent, I/E criteria, and visit windows; detect and manage randomization near-misses, window-vs-patient-safety conflicts, and systemic deviation patterns; explain how timing errors affect primary endpoints and study integrity.",
    es: "Separar claramente pre-screening de screening regulatorio; conducir visitas de tamizaje y seguimiento respetando consentimiento, criterios I/E y ventanas; detectar y manejar near-miss de randomización, conflictos ventana vs seguridad del paciente y patrones sistémicos de desviaciones; explicar cómo errores de tiempo afectan endpoints primarios e integridad del estudio.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines pre-screening (existing data, basic questions before consent—no protocol-defined eligibility tests) vs screening (protocol SoA procedures after valid consent).",
          es: "Define pre-screening (datos existentes, preguntas básicas antes del consentimiento—sin pruebas de elegibilidad definidas en protocolo) vs screening (procedimientos SoA tras consentimiento válido).",
        },
        {
          en: "States that randomization must occur only when eligibility is confirmed and documented; incomplete or borderline data before randomize-click is a critical near-miss signal.",
          es: "Afirma que la randomización solo debe ocurrir cuando la elegibilidad está confirmada y documentada; datos incompletos o límite antes del clic de randomizar es señal crítica de near-miss.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes screening visit: correct ICF version, consent before any research procedure, full SoA screening battery, eligibility checklist with source evidence, PI review before randomization.",
          es: "Ejecuta visita screening: ICF correcto, consentimiento antes de procedimiento investigación, batería screening SoA completa, checklist elegibilidad con evidencia en fuente, revisión PI antes de randomización.",
        },
        {
          en: "Plans study visits using SoA windows; documents in source and EDC; logs deviations including out-of-window visits; distinguishes one-off human error from repeated systemic pattern.",
          es: "Planifica visitas de estudio con ventanas SoA; documenta en fuente y EDC; registra desviaciones incluidas visitas fuera de ventana; distingue error humano aislado de patrón sistémico repetido.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Prioritizes participant safety over rigid window compliance when clinically necessary; documents clinical rationale, deviation impact on CtQ endpoints, and sponsor/IRB notification per protocol.",
          es: "Prioriza seguridad del participante sobre cumplimiento rígido de ventana cuando es clínicamente necesario; documenta justificación clínica, impacto de desviación en endpoints CtQ y notificación patrocinador/CEI según protocolo.",
        },
        {
          en: "Flags primary-endpoint visits out of window as major data-integrity risks; designs CAPA (scheduling QA, pre-randomization checklist, quality committee review of deviation trends) linking to M2/M4/M6/M16.",
          es: "Señala visitas de endpoint primario fuera de ventana como riesgos mayores de integridad de datos; diseña CAPA (QA de agenda, checklist pre-randomización, revisión en comité de calidad de tendencias de desviación) vinculada a M2/M4/M6/M16.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M8.L1",
      title: { en: "Core concepts — screening line, SoA, randomization", es: "Conceptos núcleo — línea screening, SoA, randomización" },
      lessonType: "reading",
      objective: {
        en: "Anchor pre-screen vs screening, screening visit purpose, windows, randomization rules, individual vs systemic deviations, endpoint impact.",
        es: "Anclar pre-screen vs screening, propósito visita screening, ventanas, reglas de randomización, desviaciones individuales vs sistémicas, impacto en endpoint.",
      },
      keyPoints: [
        {
          en: "Screening visit: valid consent (M6), apply I/E with source evidence, clear decision—screen fail vs eligible toward baseline/randomization.",
          es: "Visita screening: consentimiento válido (M6), aplicar I/E con evidencia en fuente, decisión clara—screen fail vs elegible hacia baseline/aleatorización.",
        },
        {
          en: "SoA defines visit content and day ranges; wrong order, missed procedures, or out-of-window visits are common deviations.",
          es: "SoA define contenido y rangos de días de visita; orden incorrecto, procedimientos omitidos o visitas fuera de ventana son desviaciones frecuentes.",
        },
        {
          en: "Repeated same failure mode (e.g., always 3–5 days late) signals system design failure—not only individual mistakes.",
          es: "Mismo modo de falla repetido (p. ej., siempre 3–5 días tarde) señala falla de diseño del sistema—no solo errores individuales.",
        },
        {
          en: "Timing errors on primary-endpoint visits may exclude data, reduce power, or bias results.",
          es: "Errores de tiempo en visitas de endpoint primario pueden excluir datos, reducir potencia o sesgar resultados.",
        },
      ],
    },
    {
      lessonId: "M8.L2",
      title: { en: "Real-world workflow — site execution", es: "Flujo real — ejecución en el sitio" },
      lessonType: "reading",
      objective: {
        en: "Follow pre-screen, screening visit, study visits, deviation handling from CRC operations perspective.",
        es: "Seguir pre-screen, visita screening, visitas de estudio, manejo de desviaciones desde operación CRC.",
      },
      keyPoints: [
        {
          en: "Pre-screen: EMR/clinic lists; basic permitted questions only—do not order protocol eligibility tests pre-consent.",
          es: "Pre-screen: listas EMR/clínica; solo preguntas básicas permitidas—no ordenar pruebas de elegibilidad del protocolo pre-consentimiento.",
        },
        {
          en: "Screening: consent first; run full screening SoA; PI sign-off on eligibility before randomization.",
          es: "Screening: consentimiento primero; ejecutar SoA screening completo; visto bueno PI en elegibilidad antes de randomizar.",
        },
        {
          en: "Study visits: plan around window (e.g., Day 56 ± 7); document source, EDC, logs; capture deviations promptly.",
          es: "Visitas estudio: planear en torno a ventana (p. ej., Día 56 ± 7); documentar fuente, EDC, logs; capturar desviaciones pronto.",
        },
        {
          en: "Periodic review: trend deviations; CAPA when patterns appear.",
          es: "Revisión periódica: tendencia de desviaciones; CAPA cuando aparezcan patrones.",
        },
      ],
    },
    {
      lessonId: "M8.L3",
      title: { en: "Common inspection themes — visits & randomization", es: "Temas frecuentes de inspección — visitas y randomización" },
      lessonType: "reading",
      objective: {
        en: "Recognize FDA/monitor patterns: screening prior to consent, near-randomization errors, window drift, log mismatch.",
        es: "Reconocer patrones FDA/monitor: screening previo a consentimiento, errores cercanos a randomización, deriva de ventana, desajuste de logs.",
      },
      keyPoints: [
        {
          en: "‘Screening tests prior to consent’ remains a frequent citation.",
          es: "‘Pruebas de screening previas al consentimiento’ sigue siendo citación frecuente.",
        },
        {
          en: "Randomization without complete imaging/labs is a high-severity eligibility breach.",
          es: "Randomización sin imagen/labs completos es brecha de elegibilidad de alta severidad.",
        },
        {
          en: "Sites applying ±X days ‘by habit’ instead of protocol window = systemic non-compliance.",
          es: "Sitios que aplican ±X días ‘por costumbre’ en vez de ventana del protocolo = incumplimiento sistémico.",
        },
      ],
    },
    {
      lessonId: "M8.GP1",
      title: { en: "Guided practice — GP-8.1: pre-screen vs screening (spirometry)", es: "Práctica guiada — GP-8.1: pre-screen vs screening (espirometría)" },
      lessonType: "case",
      objective: {
        en: "COPD clinic: nurse proposes protocol spirometry before consent to see if subject qualifies.",
        es: "Clínica EPOC: enfermera propone espirometría de protocolo antes del consentimiento para ver si califica.",
      },
      keyPoints: [
        {
          en: "Protocol-defined screening spirometry requires consent first; optional use of recent SOC spirometry in chart for pre-screen if protocol allows.",
          es: "Espirometría screening definida por protocolo exige consentimiento primero; uso opcional de espirometría SOC reciente en historia para pre-screen si protocolo permite.",
        },
        {
          en: "Decision: schedule screening visit with ICF then SoA tests.",
          es: "Decisión: programar visita screening con ICF luego pruebas SoA.",
        },
      ],
    },
    {
      lessonId: "M8.GP2",
      title: { en: "Guided practice — GP-8.2: randomization near-miss (HbA1c)", es: "Práctica guiada — GP-8.2: near-miss randomización (HbA1c)" },
      lessonType: "case",
      objective: {
        en: "Criterion HbA1c 7.0–10.0%; today 10.1%; four days ago 9.8%; PI says randomize now, clarify later.",
        es: "Criterio HbA1c 7,0–10,0%; hoy 10,1%; hace 4 días 9,8%; PI dice randomizar ahora, aclarar después.",
      },
      keyPoints: [
        {
          en: "Do not randomize until protocol window for labs, repeat testing, or sponsor/medical monitor written path is satisfied.",
          es: "No randomizar hasta cumplir ventana de labs del protocolo, repetición de prueba o vía escrita patrocinador/monitor médico.",
        },
        {
          en: "Near-miss prevented still warrants CAPA on ‘favorable interpretation’ culture.",
          es: "Near-miss evitado aún exige CAPA sobre cultura de ‘interpretación favorable’.",
        },
      ],
    },
    {
      lessonId: "M8.GP3",
      title: { en: "Guided practice — GP-8.3: window vs patient safety (ICU)", es: "Práctica guiada — GP-8.3: ventana vs seguridad (UCI)" },
      lessonType: "case",
      objective: {
        en: "Visit 4 Day 56 ± 7 with critical safety labs; subject in ICU until ~Day 75–80; sponsor wants windows maintained.",
        es: "Visita 4 Día 56 ± 7 con labs seguridad críticos; sujeto en UCI hasta ~Día 75–80; patrocinador quiere mantener ventanas.",
      },
      keyPoints: [
        {
          en: "GCP: do not force unsafe transport; consider hospital-based assessments or out-of-window visit with clinical documentation.",
          es: "GCP: no forzar traslado inseguro; considerar evaluaciones en hospital o visita fuera de ventana con documentación clínica.",
        },
        {
          en: "Deviation with impact on endpoints and safety; notify sponsor/IRB per protocol.",
          es: "Desviación con impacto en endpoints y seguridad; notificar patrocinador/CEI según protocolo.",
        },
      ],
    },
    {
      lessonId: "M8.GP4",
      title: { en: "Guided practice — GP-8.4: systemic out-of-window pattern", es: "Práctica guiada — GP-8.4: patrón sistémico fuera de ventana" },
      lessonType: "case",
      objective: {
        en: "8/15 subjects late 3–5 days; reasons ‘scheduling’; many deviations not on deviation log.",
        es: "8/15 sujetos tarde 3–5 días; razones ‘agenda’; muchas desviaciones no en log de desviaciones.",
      },
      keyPoints: [
        {
          en: "System CAPA: window check at scheduling, negotiate realistic windows, log back-capture, quality committee.",
          es: "CAPA sistema: chequeo de ventana al agendar, negociar ventanas realistas, recuperación en log, comité de calidad.",
        },
      ],
    },
    {
      lessonId: "M8.GP5",
      title: { en: "Guided practice — GP-8.5: primary endpoint visit out of window (FEV1)", es: "Práctica guiada — GP-8.5: visita endpoint primario fuera de ventana (FEV1)" },
      lessonType: "case",
      objective: {
        en: "Primary: FEV1 change baseline → Day 84 ± 5; visit Day 92; spirometry done correctly but out of window.",
        es: "Primario: cambio FEV1 baseline → Día 84 ± 5; visita Día 92; espirometría correcta pero fuera de ventana.",
      },
      keyPoints: [
        {
          en: "Major deviation; sponsor/statistician may exclude from primary analysis; sensitivity analysis; prevent recurrence on CtQ visits.",
          es: "Desviación mayor; estadístico/patrocinador puede excluir del análisis primario; análisis de sensibilidad; prevenir recurrencia en visitas CtQ.",
        },
      ],
    },
    {
      lessonId: "M8.L4",
      title: { en: "Monitor / inspector perspective", es: "Perspectiva monitor / inspector" },
      lessonType: "reading",
      objective: {
        en: "Anticipate scrutiny of consent timing, eligibility documentation, randomization clicks, and endpoint visit adherence.",
        es: "Anticipar escrutinio de tiempo de consentimiento, documentación elegibilidad, clics de randomización y adherencia visitas endpoint.",
      },
      keyPoints: [
        {
          en: "Inspectors reconstruct funnel: pre-screen → consent → screening → randomization → on-study visits.",
          es: "Inspectores reconstruyen embudo: pre-screen → consentimiento → screening → randomización → visitas en estudio.",
        },
      ],
    },
    {
      lessonId: "M8.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate near-miss seriousness, safety-first window exceptions, systemic thinking, endpoint statistics, M2/M4/M6/M5/M3 links.",
        es: "Consolidar seriedad del near-miss, excepciones ventana por seguridad primero, pensamiento sistémico, estadística de endpoint, vínculos M2/M4/M6/M5/M3.",
      },
      keyPoints: [
        {
          en: "Fail if: randomization near-miss treated as trivial; primary endpoint out-of-window minimized; pattern ignored; no justification for safety vs window trade-off.",
          es: "Fallo si: near-miss randomización tratado como trivial; endpoint primario fuera de ventana minimizado; patrón ignorado; sin justificación de equilibrio seguridad vs ventana.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M8.E1",
      description: {
        en: "Pre-screen phone script orders protocol labs ‘to see if they qualify’ before consent.",
        es: "Guión telefónico pre-screen ordena labs de protocolo ‘para ver si califican’ antes del consentimiento.",
      },
      risk: {
        en: "Research procedures without consent; critical finding.",
        es: "Procedimientos de investigación sin consentimiento; hallazgo crítico.",
      },
      expectedLearnerResponse: {
        en: "Stop practice; IRB notice; retrain; consent-first workflow.",
        es: "Detener práctica; aviso CEI; reentrenar; flujo consentimiento primero.",
      },
      relatedDimensions: ["R", "C"],
    },
    {
      errorId: "M8.E2",
      description: {
        en: "Subject randomized without mandatory imaging result; later imaging shows exclusion criterion.",
        es: "Sujeto randomizado sin resultado de imagen obligatoria; imagen posterior muestra criterio de exclusión.",
      },
      risk: {
        en: "Ineligible randomized subject; safety and analysis risk.",
        es: "Sujeto inelegible aleatorizado; riesgo seguridad y análisis.",
      },
      expectedLearnerResponse: {
        en: "Deviation package; sponsor/medical; assess ongoing participation; pre-rand checklist CAPA.",
        es: "Paquete desviación; médico/patrocinador; evaluar participación en curso; CAPA checklist pre-rand.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M8.E3",
      description: {
        en: "Coordinators apply ±10-day windows ‘site habit’ though protocol says ±3.",
        es: "Coordinadores aplican ventanas ±10 días ‘costumbre del sitio’ aunque protocolo dice ±3.",
      },
      risk: {
        en: "Systematic deviation pattern on CtQ visits.",
        es: "Patrón sistemático de desviación en visitas CtQ.",
      },
      expectedLearnerResponse: {
        en: "SoA retraining; scheduling rules; deviation back-capture; monitor disclosure.",
        es: "Reentrenamiento SoA; reglas de agenda; recuperación en log de desviaciones; divulgación al monitor.",
      },
      relatedDimensions: ["O", "R"],
    },
    {
      errorId: "M8.E4",
      description: {
        en: "Five subjects screened in EMR/source but never entered on screening log.",
        es: "Cinco sujetos screening en EMR/fuente pero nunca ingresados en log de screening.",
      },
      risk: {
        en: "Cannot reconstruct selection funnel; justice/traceability compromised.",
        es: "No se reconstruye embudo de selección; justicia/trazabilidad comprometidas.",
      },
      expectedLearnerResponse: {
        en: "Reconcile logs with ALCOA+ late entry; process owner; real-time logging SOP.",
        es: "Reconciliar logs con entrada tardía ALCOA+; dueño de proceso; SOP registro en tiempo real.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M8.E5",
      description: {
        en: "Monitor repeatedly flags out-of-window visits; site fixes individual cases only; no process change—pattern continues.",
        es: "Monitor señala repetidamente visitas fuera de ventana; sitio solo corrige casos; sin cambio de proceso—patrón continúa.",
      },
      risk: {
        en: "Quality system failure; major audit theme.",
        es: "Falla del sistema de calidad; tema mayor de auditoría.",
      },
      expectedLearnerResponse: {
        en: "Root-cause; scheduling CAPA; quality committee metrics; sponsor alignment.",
        es: "Causa raíz; CAPA de agenda; métricas comité calidad; alineación patrocinador.",
      },
      relatedDimensions: ["O", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M8.EX1",
      name: {
        en: "Visit & Randomization Lab — screening boundaries, windows, safety vs protocol",
        es: "Laboratorio visitas y randomización — límites screening, ventanas, seguridad vs protocolo",
      },
      scenario: {
        en: "40 minutes before monitoring focused on screening/randomization deviations and key visits. Inspection mindset. Subjects A/B/C: SoA with windows; ICFs, source, labs/imaging with timestamps; eligibility checklists (some incomplete/unsigned); EDC randomization timestamps; deviation log + monitor comments showing out-of-window pattern including primary-endpoint visit.",
        es: "40 minutos antes de monitoría centrada en desviaciones screening/randomización y visitas clave. Mentalidad inspección. Sujetos A/B/C: SoA con ventanas; ICF, fuente, labs/imagen con marcas; checklists elegibilidad (algunos incompletos/sin firma); marcas randomización EDC; log desviaciones + comentarios monitor con patrón fuera de ventana incluida visita endpoint primario.",
      },
      inputs: [
        { inputId: "M8.IN1", label: { en: "SoA + window summary", es: "SoA + resumen ventanas" }, inputKind: "pdf" },
        { inputId: "M8.IN2", label: { en: "ICF + source + eligibility checklist", es: "ICF + fuente + checklist elegibilidad" }, inputKind: "mock_ehr" },
        { inputId: "M8.IN3", label: { en: "EDC randomization + visit dates", es: "Randomización EDC + fechas visita" }, inputKind: "table" },
        { inputId: "M8.IN4", label: { en: "Deviation log + monitor letter excerpt", es: "Log desviaciones + extracto carta monitor" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "Per subject: pre-screen creep? eligibility complete before randomize? critical/primary visits in window and deviations documented? List: near-misses, safety vs window conflicts, systemic lateness, primary-endpoint impact. Severity + patient/data/compliance. Corrective + system CAPA (pre-rand checklist, scheduling window review, safety-first policy, quality committee trends). Brief monitor/inspector summary: risks, mitigation, structural fixes.",
        es: "Por sujeto: ¿pre-screen creep? ¿elegibilidad completa antes de randomizar? ¿visitas críticas/primarias en ventana y desviaciones documentadas? Listar: near-misses, conflictos seguridad vs ventana, retraso sistémico, impacto endpoint primario. Severidad + paciente/datos/cumplimiento. Correctiva + CAPA sistema (checklist pre-rand, revisión ventana al agendar, política seguridad primero, tendencias comité calidad). Resumen breve monitor/inspector: riesgos, mitigación, arreglos estructurales.",
      },
      deliverables: [
        { deliverableId: "M8.D1", label: { en: "Per-subject assessment matrix", es: "Matriz evaluación por sujeto" }, formatHint: "table" },
        { deliverableId: "M8.D2", label: { en: "Issue register + CAPA", es: "Registro hallazgos + CAPA" }, formatHint: "pdf" },
        { deliverableId: "M8.D3", label: { en: "Monitor/inspector summary", es: "Resumen monitor/inspector" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M8.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M8.C1",
        description: {
          en: "Detects pre-screen creep, consent-before-procedure violations, and randomization near-misses; halts or escalates per protocol before irreversible steps.",
          es: "Detecta pre-screen creep, violaciones consentimiento-antes-procedimiento y near-miss de randomización; detiene o escala según protocolo antes de pasos irreversibles.",
        },
        points: 35,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Treats randomization near-miss as non-critical or approves randomize-click with borderline eligibility unresolved.",
          es: "Trata near-miss de randomización como no crítico o aprueba clic de randomizar con elegibilidad límite sin resolver.",
        },
      },
      {
        criterionId: "M8.C2",
        description: {
          en: "Resolves window vs patient-safety conflicts with GCP-first reasoning, documented clinical rationale, and appropriate deviation/IRB/sponsor paths.",
          es: "Resuelve conflictos ventana vs seguridad del paciente con razonamiento GCP primero, justificación clínica documentada y vías desviación/CEI/patrocinador apropiadas.",
        },
        points: 25,
        mapsToDimensions: ["C", "R"],
        failCondition: {
          en: "Forces unsafe on-site visit to preserve window without exploring alternatives or documentation.",
          es: "Fuerza visita presencial insegura para preservar ventana sin explorar alternativas o documentación.",
        },
      },
      {
        criterionId: "M8.C3",
        description: {
          en: "Identifies systemic out-of-window patterns and primary-endpoint timing risk; links to statistical interpretability (exclusion, sensitivity analyses, power loss).",
          es: "Identifica patrones sistémicos fuera de ventana y riesgo de tiempo de endpoint primario; vincula a interpretabilidad estadística (exclusión, análisis de sensibilidad, pérdida de potencia).",
        },
        points: 25,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Minimizes primary-endpoint visit out of window or fails to connect repeated similar deviations to system failure.",
          es: "Minimiza visita de endpoint primario fuera de ventana o no conecta desviaciones similares repetidas a falla del sistema.",
        },
      },
      {
        criterionId: "M8.C4",
        description: {
          en: "CAPA and monitor memo integrate M6 consent timing, M4 logs, M2 protocol adherence, M5 capacity reality; proportional corrective actions.",
          es: "CAPA y memo monitor integran tiempo de consentimiento M6, logs M4, adherencia protocolo M2, realidad de capacidad M5; acciones correctivas proporcionadas.",
        },
        points: 15,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Only case-by-case fixes with no scheduling/process changes; memo omits endpoint data-integrity impact.",
          es: "Solo arreglos caso por caso sin cambios de agenda/proceso; memo omite impacto en integridad de datos del endpoint.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "O",
      weight: 0.34,
      aggregationKey: "soa_visit_execution_scheduling_window_discipline",
    },
    {
      dimension: "Q",
      weight: 0.28,
      aggregationKey: "randomization_eligibility_logs_endpoint_timing_integrity",
    },
    {
      dimension: "R",
      weight: 0.22,
      aggregationKey: "gcp_screening_consent_irb_protocol_adherence",
    },
    {
      dimension: "C",
      weight: 0.16,
      aggregationKey: "patient_safety_vs_protocol_window_clinical_judgment",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S1 stresses eligibility and screening traceability before randomization; OSCE.S4 stresses visit-window and deviation discipline under monitoring pressure—the same moves as this module.",
      es: "OSCE.S1 ejercita elegibilidad y trazabilidad de screening antes de randomización; OSCE.S4 ejercita ventanas de visita y disciplina de desviaciones bajo presión de monitoría—los mismos movimientos que este módulo.",
    },
    stationIds: ["OSCE.S1", "OSCE.S4"],
  },
  tags: ["operational", "regulatory", "audit_readiness", "bilingual", "flagship", "traceability", "data_integrity", "clinical_judgment"],
  bilingualNotes: {
    en: "Keep SoA, FEV1, HbA1c, ICU, GCP, IRB, EDC, CtQ as EN clinical/regulatory tokens.",
    es: "Mantener SoA, FEV1, HbA1c, UCI, GCP, CEI, EDC, CtQ como tokens clínicos/regulatorios EN.",
  },
};
