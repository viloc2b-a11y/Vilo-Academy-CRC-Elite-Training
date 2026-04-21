// src/curriculum-engine/data/modules/m13.ts

import type { Module } from "../../types";

/**
 * Module 13 — Monitoring visits: real-time defense and inspector mindset.
 * Guided practice: three cases (GP1–GP3) — source walkthrough defense, resist off-the-record suggestions, pattern hunting → CAPA.
 */
export const MODULE_M13: Module = {
  id: "M13",
  slug: "monitoring-visits-real-time-defense-inspector-mindset",
  internalName: "mod_13_monitoring_visits_defense",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "Q", "O", "C"],
  title: {
    en: "Module 13 — Monitoring Visits: Real-Time Defense & Inspector Mindset",
    es: "Módulo 13 — Visitas de monitoría: defensa en tiempo real y mentalidad de inspector",
  },
  objective: {
    en: "Conduct source-to-EDC walkthroughs that survive scrutiny; defend query resolutions with a clear evidence chain; identify inspector-style pattern hunting; handle concurrent source data requests; resist ‘off-the-record’ monitor suggestions that push source inversion or backdating; convert monitoring findings into system CAPA; and maintain communication control under inspection pressure.",
    es: "Conducir walkthroughs fuente→EDC que resistan escrutinio; defender resoluciones de queries con cadena probatoria clara; identificar ‘pattern hunting’ tipo inspector; manejar solicitudes concurrentes de datos fuente; resistir sugerencias del monitor ‘off-the-record’ que empujen inversión de fuente o backdating; convertir hallazgos en CAPA de sistema; y mantener control de comunicación bajo presión de inspección.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States monitor reality: monitors represent sponsor/CRO interests and will report patterns; ‘friendly’ does not change compliance standards.",
          es: "Describe la realidad del monitor: representa intereses de patrocinador/CRO y reporta patrones; ‘amigable’ no cambia estándares de cumplimiento.",
        },
        {
          en: "Explains inspector triggers: bulk signatures, repeated query types across subjects, missing contemporaneous oversight, and pre-visit ‘cleaning’ behaviors as major audit magnets with potential regulatory consequences (e.g., FDA 483, warning letters).",
          es: "Explica disparadores de inspector: firmas en lote, tipos de queries repetidos entre sujetos, falta de supervisión contemporánea y ‘limpieza’ antes de visitas como imanes de auditoría con consecuencias regulatorias (p. ej., FDA 483, warning letters).",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes monitoring visit workflow: pre-visit subject prioritization, tabbed source and bookmarked EDC, PI availability plan, and a structured walkthrough (source → EDC → query) that answers ‘why’ with artifacts.",
          es: "Ejecuta flujo de monitoría: priorización de sujetos pre-visita, fuente tabulada y EDC marcado, plan de disponibilidad del PI y walkthrough estructurado (fuente → EDC → query) que responde el ‘por qué’ con artefactos.",
        },
        {
          en: "Maintains communication discipline: answers only what is asked, does not speculate, does not volunteer undocumented issues, and uses ‘I will verify in source and follow up’ when unsure.",
          es: "Mantiene disciplina de comunicación: responde solo lo preguntado, no especula, no ofrece problemas no documentados y usa ‘verificaré en fuente y daré seguimiento’ cuando no está seguro.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects pattern hunting signals (≥3 similar issues) and shifts from case fixes to system CAPA; documents monitor findings as quality opportunities with accountable owners and dates.",
          es: "Detecta señales de pattern hunting (≥3 problemas similares) y cambia de arreglos por caso a CAPA de sistema; documenta hallazgos como oportunidades de calidad con responsables y fechas.",
        },
        {
          en: "Resists ‘off-the-record’ suggestions (e.g., rewrite source to match EDC) and documents pressure appropriately; preserves source primacy and avoids irreversible integrity breaches.",
          es: "Resiste sugerencias ‘off-the-record’ (p. ej., reescribir fuente para que coincida con EDC) y documenta la presión adecuadamente; preserva primacía de fuente y evita brechas irreversibles de integridad.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M13.L1",
      title: { en: "Core concepts — monitor reality & inspector triggers", es: "Conceptos núcleo — realidad del monitor y disparadores del inspector" },
      lessonType: "reading",
      objective: {
        en: "Anchor source primacy, pattern hunting, and behaviors that escalate monitoring issues into inspection findings.",
        es: "Anclar primacía de fuente, pattern hunting y conductas que escalan hallazgos de monitoría a hallazgos de inspección.",
      },
      keyPoints: [
        {
          en: "Source primacy: EDC is a transcription layer; starting defense with EDC instead of source weakens credibility.",
          es: "Primacía de fuente: EDC es capa de transcripción; iniciar defensa con EDC en vez de fuente debilita credibilidad.",
        },
        {
          en: "Pattern hunting: three similar issues is treated as systemic failure; CAPA must change process, not just close queries.",
          es: "Pattern hunting: tres problemas similares se tratan como falla sistémica; CAPA debe cambiar proceso, no solo cerrar queries.",
        },
        {
          en: "Regulatory consequence awareness: repeated findings and source discrepancies can lead to FDA 483 observations, warning letters, or site disqualification.",
          es: "Conciencia de consecuencia regulatoria: hallazgos repetidos y discrepancias de fuente pueden llevar a FDA 483, warning letters o descalificación del sitio.",
        },
      ],
    },
    {
      lessonId: "M13.L2",
      title: { en: "Real-world workflow — pre-visit, during, and post-visit", es: "Flujo real — pre-visita, durante y post-visita" },
      lessonType: "reading",
      objective: {
        en: "Run monitoring visits as a controlled process with preparation, disciplined walkthroughs, and CAPA conversion after the visit.",
        es: "Operar visitas de monitoría como proceso controlado con preparación, walkthroughs disciplinados y conversión a CAPA después.",
      },
      keyPoints: [
        {
          en: "Pre-visit (24h): prioritize top subjects by enrollment/query volume; tab source binders; bookmark key EDC forms; confirm PI availability or escalation plan.",
          es: "Pre-visita (24h): priorizar sujetos por enrolamiento/volumen de queries; tabular fuente; marcar formularios EDC; confirmar disponibilidad PI o plan de escalamiento.",
        },
        {
          en: "During visit: walkthrough source → EDC → query; answer with evidence; avoid volunteering undocumented issues; manage concurrent requests with a queue and timestamps.",
          es: "Durante: walkthrough fuente → EDC → query; responder con evidencia; evitar ofrecer temas no documentados; manejar solicitudes concurrentes con cola y marcas de tiempo.",
        },
        {
          en: "Post-visit (≤48h): document findings as quality opportunities; review LFE (letter of findings); convert repeated patterns into system CAPA with owners and dates.",
          es: "Post-visita (≤48h): documentar hallazgos como oportunidades de calidad; revisar LFE; convertir patrones repetidos en CAPA de sistema con responsables y fechas.",
        },
      ],
    },
    {
      lessonId: "M13.GP1",
      title: { en: "Guided practice — GP-13.1: source walkthrough defense (AE onset)", es: "Práctica guiada — GP-13.1: defensa walkthrough fuente (inicio AE)" },
      lessonType: "case",
      objective: {
        en: "Monitor requests: ‘Walk me through Subject 091 Visit 8 AE onset.’ Source says new headache x1 day; EDC shows onset prior day; query closed ‘per source’.",
        es: "Monitor pide: ‘Walk me through Sujeto 091 Visita 8 inicio AE.’ Fuente dice cefalea nueva x1 día; EDC muestra inicio día previo; query cerrada ‘per source’.",
      },
      keyPoints: [
        {
          en: "Start with source note and timestamp; show how ‘x1 day’ supports the onset date; then show EDC value and the query closure note with evidence pointer.",
          es: "Empezar con nota fuente y marca; mostrar cómo ‘x1 día’ soporta fecha de inicio; luego mostrar valor EDC y nota de cierre de query con puntero de evidencia.",
        },
      ],
    },
    {
      lessonId: "M13.GP2",
      title: { en: "Guided practice — GP-13.2: resist an off-the-record suggestion", es: "Práctica guiada — GP-13.2: resistir sugerencia off-the-record" },
      lessonType: "case",
      objective: {
        en: "Monitor suggests ‘reword source to match EDC’ before the report to make eligibility queries look cleaner.",
        es: "Monitor sugiere ‘reword la fuente para que coincida con EDC’ antes del reporte para que queries de elegibilidad se vean más limpias.",
      },
      keyPoints: [
        {
          en: "Decline without debate: ‘We’ll review with PI per our source verification SOP.’ Document the suggestion as pressure for QA review; do not modify source to match EDC.",
          es: "Rechazar sin debatir: ‘Revisaremos con PI según SOP de verificación de fuente.’ Documentar la sugerencia como presión para QA; no modificar fuente para que coincida con EDC.",
        },
      ],
    },
    {
      lessonId: "M13.GP3",
      title: { en: "Guided practice — GP-13.3: pattern identification and CAPA conversion", es: "Práctica guiada — GP-13.3: identificación de patrón y conversión a CAPA" },
      lessonType: "case",
      objective: {
        en: "Monitor flags three subjects with the same Visit 4 BP query pattern; suggests systemic capture issue.",
        es: "Monitor señala tres sujetos con el mismo patrón de query de PA en Visita 4; sugiere falla sistémica de captura.",
      },
      keyPoints: [
        {
          en: "Acknowledge pattern; propose immediate containment (vitals source checklist + real-time EDC entry) and system CAPA with governance and metrics.",
          es: "Reconocer patrón; proponer contención inmediata (checklist de signos + entrada EDC en tiempo real) y CAPA de sistema con gobierno y métricas.",
        },
      ],
    },
    {
      lessonId: "M13.L3",
      title: { en: "Answer framework — real-time defense under pressure", es: "Marco de respuesta — defensa en tiempo real bajo presión" },
      lessonType: "recap",
      objective: {
        en: "Consolidate communication control, evidence-first defense, pressure resistance, and pattern-to-CAPA thinking.",
        es: "Consolidar control de comunicación, defensa por evidencia, resistencia a presión y patrón→CAPA.",
      },
      keyPoints: [
        {
          en: "Strong: start with source; explain ‘why’ with artifacts; answer only what’s asked; avoid speculation; identify patterns; convert to CAPA; document monitor pressure when it pushes integrity breaches.",
          es: "Fuerte: iniciar con fuente; explicar ‘por qué’ con artefactos; responder solo lo preguntado; evitar especulación; identificar patrones; convertir a CAPA; documentar presión del monitor si empuja brechas de integridad.",
        },
        {
          en: "Irreversibility awareness: some integrity problems cannot be ‘fixed’ before a visit (e.g., bulk signatures, prior backdating patterns). The correct approach is transparent acknowledgment, documenting what is known vs unknown, and forward-looking CAPA—because consequences can include FDA 483 observations, warning letters, data exclusion, and operational restrictions.",
          es: "Conciencia de irreversibilidad: algunos problemas de integridad no se pueden ‘arreglar’ antes de una visita (p. ej., firmas en lote, patrones previos de backdating). El enfoque correcto es reconocerlo con transparencia, documentar qué se sabe vs qué no se sabe y CAPA hacia adelante—porque las consecuencias pueden incluir FDA 483, warning letters, exclusión de datos y restricciones operativas.",
        },
        {
          en: "Fail if: starts walkthrough with EDC, modifies source per monitor suggestion, defends cases without pattern recognition, or produces no CAPA conversion from findings.",
          es: "Fallo si: inicia walkthrough con EDC, modifica fuente por sugerencia del monitor, defiende casos sin reconocer patrones o no convierte hallazgos en CAPA.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M13.E1",
      description: { en: "Blank or missing source pages during a live walkthrough.", es: "Páginas de fuente en blanco o faltantes durante walkthrough en vivo." },
      risk: { en: "Missing contemporaneous records; escalates scrutiny and delays monitoring.", es: "Registros contemporáneos faltantes; aumenta escrutinio y retrasa monitoría." },
      expectedLearnerResponse: {
        en: "Do not invent. Locate original sources, document what is missing, open a deviation if required, and provide a follow-up timeline with QA oversight.",
        es: "No inventar. Ubicar fuentes originales, documentar lo faltante, abrir desviación si corresponde y dar cronograma de seguimiento con QA.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M13.E2",
      description: { en: "EDC narrative looks cleaner than source with identical phrasing across subjects (‘backfilling’ signal).", es: "EDC luce más ‘limpio’ que la fuente con frases idénticas entre sujetos (señal de backfilling)." },
      risk: { en: "Backdating suspicion; credibility collapse in inspection interviews.", es: "Sospecha de backdating; colapso de credibilidad en entrevistas." },
      expectedLearnerResponse: {
        en: "Freeze cosmetic edits; reconcile to source; document truthful sequence; escalate to QA; implement CAPA on templates and correction governance.",
        es: "Detener ediciones cosméticas; reconciliar con fuente; documentar secuencia veraz; escalar a QA; CAPA en plantillas y gobierno de correcciones.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M13.E3",
      description: { en: "PI signs today for last week’s oversight during monitoring (‘batch signature’ pattern).", es: "PI firma hoy por supervisión de la semana pasada durante monitoría (patrón firma en lote)." },
      risk: { en: "Appears non-contemporaneous; triggers inspector pattern hunting.", es: "Apariencia no contemporánea; dispara pattern hunting del inspector." },
      expectedLearnerResponse: {
        en: "Document timing honestly; avoid claiming contemporaneous oversight; implement same-day PI review triggers; QA sampling for recurrence.",
        es: "Documentar tiempo con honestidad; no afirmar supervisión contemporánea; implementar disparadores de revisión PI el mismo día; muestreo QA para recurrencia.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M13.E4",
      description: { en: "Same three query types recur across 5+ subjects without any systemic CAPA response.", es: "Los mismos tres tipos de query se repiten en 5+ sujetos sin CAPA sistémica." },
      risk: { en: "Systemic capture failure; escalates to major monitoring finding.", es: "Falla sistémica de captura; escala a hallazgo mayor." },
      expectedLearnerResponse: {
        en: "Trend and classify; implement process change; document CAPA with owners/dates; show monitor objective prevention steps.",
        es: "Tendenciar y clasificar; implementar cambio de proceso; documentar CAPA con responsables/fechas; mostrar prevención objetiva al monitor.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M13.E5",
      description: { en: "Pressure trap: monitor says ‘just sign these now’ or ‘rewrite source to match EDC’.", es: "Trampa de presión: monitor dice ‘firma ahora’ o ‘reescribe fuente para que coincida con EDC’." },
      risk: { en: "Backdating/source inversion; potential misconduct escalation.", es: "Backdating/inversión de fuente; potencial escalamiento por conducta." },
      expectedLearnerResponse: {
        en: "Decline; document suggestion; escalate to QA; follow SOP; preserve source primacy and truthful audit trail.",
        es: "Rechazar; documentar sugerencia; escalar a QA; seguir SOP; preservar primacía de fuente y audit trail veraz.",
      },
      relatedDimensions: ["R", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M13.EX1",
      name: { en: "Monitoring defense — inspector walkthrough in progress", es: "Defensa en monitoría — walkthrough de inspector en curso" },
      scenario: {
        en: "Concurrent FDA inspector + CRO monitor visit. You must defend Subject 091 in real time while managing red flags: bulk signatures, BP discrepancy with a falsely closed query, repeated eligibility query pattern across subjects, CTMS vs EDC date conflict, PI unavailable for 2 hours, and monitor pressure to ‘fix sources’ before the report.",
        es: "Visita concurrente inspector FDA + monitor CRO. Debes defender Sujeto 091 en tiempo real con banderas rojas: firmas en lote, discrepancia de PA con query cerrada falsamente, patrón de queries de elegibilidad entre sujetos, conflicto de fechas CTMS vs EDC, PI no disponible por 2 horas y presión del monitor para ‘arreglar fuentes’ antes del reporte.",
      },
      inputs: [
        { inputId: "M13.IN1", label: { en: "Subject 091 source + vitals bundle", es: "Bundle fuente + signos Sujeto 091" }, inputKind: "mock_ehr" },
        { inputId: "M13.IN2", label: { en: "EDC query thread + closure notes", es: "Hilo queries EDC + notas de cierre" }, inputKind: "export" },
        { inputId: "M13.IN3", label: { en: "CTMS enrollment/date extract", es: "Extracto CTMS inclusión/fechas" }, inputKind: "table" },
        { inputId: "M13.IN4", label: { en: "Monitor pressure email excerpt + LFE draft", es: "Extracto correo presión monitor + borrador LFE" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "Rank 4 highest audit risks; deliver a 2-minute BP discrepancy defense starting from source; document monitor pressure appropriately; identify the systemic eligibility-query pattern; propose immediate containment + long-term CAPA; and draft a PI communication plan while PI is unavailable.",
        es: "Rankear 4 riesgos principales; dar defensa de 2 minutos sobre discrepancia de PA empezando por fuente; documentar presión del monitor; identificar patrón sistémico de queries de elegibilidad; proponer contención inmediata + CAPA a largo plazo; y plan de comunicación al PI mientras no está disponible.",
      },
      deliverables: [
        { deliverableId: "M13.D1", label: { en: "Audit-risk ranking + rationale", es: "Ranking de riesgo + justificación" }, formatHint: "table" },
        { deliverableId: "M13.D2", label: { en: "Two-minute walkthrough script (BP defense)", es: "Guion walkthrough 2 minutos (defensa PA)" }, formatHint: "short_memo" },
        { deliverableId: "M13.D3", label: { en: "CAPA + communication control plan", es: "CAPA + plan de control de comunicación" }, formatHint: "pdf" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M13.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M13.C1",
        description: {
          en: "Walkthrough defense starts with source and preserves a coherent evidence chain to EDC and query closure notes; answers ‘why’ with artifacts.",
          es: "Defensa de walkthrough inicia con fuente y preserva cadena probatoria coherente hacia EDC y notas de cierre; responde ‘por qué’ con artefactos.",
        },
        points: 30,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Starts with EDC or provides unsupported explanations without source artifacts.",
          es: "Empieza con EDC o entrega explicaciones sin soporte en artefactos de fuente.",
        },
      },
      {
        criterionId: "M13.C2",
        description: {
          en: "Communication control under scrutiny: answers only what is asked, does not speculate, does not volunteer undocumented issues, and uses verify-and-follow-up appropriately.",
          es: "Control de comunicación bajo escrutinio: responde solo lo preguntado, no especula, no ofrece temas no documentados y usa verificación/seguimiento apropiadamente.",
        },
        points: 20,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Speculates, introduces new undocumented facts, or volunteers problems not requested.",
          es: "Especula, introduce hechos nuevos no documentados u ofrece problemas no solicitados.",
        },
      },
      {
        criterionId: "M13.C3",
        description: {
          en: "Integrity under pressure: resists off-the-record suggestions that imply source inversion/backdating and documents pressure via QA/compliance pathways.",
          es: "Integridad bajo presión: resiste sugerencias off-the-record que impliquen inversión de fuente/backdating y documenta presión vía QA/cumplimiento.",
        },
        points: 25,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Agrees to modify source to match EDC, endorses bulk signatures, or hides the pressure dynamic from governance.",
          es: "Acepta modificar fuente para coincidir con EDC, avala firmas en lote u oculta la presión al gobierno.",
        },
      },
      {
        criterionId: "M13.C4",
        description: {
          en: "Pattern hunting → CAPA: identifies systemic patterns and proposes immediate containment plus long-term process change with owners and dates.",
          es: "Pattern hunting → CAPA: identifica patrones sistémicos y propone contención inmediata más cambio de proceso a largo plazo con responsables y fechas.",
        },
        points: 25,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Treats repeated issues as isolated or proposes only case-by-case fixes without system controls.",
          es: "Trata problemas repetidos como aislados o propone solo arreglos caso por caso sin controles de sistema.",
        },
      },
    ],
  },
  scorecardContribution: [
    { dimension: "Q", weight: 0.32, aggregationKey: "monitor_walkthrough_evidence_chain_query_defense_and_source_primacy" },
    { dimension: "R", weight: 0.28, aggregationKey: "inspection_facing_communication_control_pressure_resistance_and_governance" },
    { dimension: "O", weight: 0.28, aggregationKey: "monitoring_visit_execution_triage_and_pattern_to_capa_conversion" },
    { dimension: "C", weight: 0.12, aggregationKey: "clinical_plausibility_when_source_and_edc_conflict_in_walkthroughs" },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S4 is the monitoring-readiness station: PD/query truthfulness, multi-source reconciliation, and monitor-facing communication under time pressure—the same real-time defense behaviors as this module.",
      es: "OSCE.S4 es la estación de preparación para monitoría: veracidad en PD/queries, reconciliación multi-fuente y comunicación al monitor bajo presión de tiempo—las mismas conductas de defensa en tiempo real que este módulo.",
    },
    stationIds: ["OSCE.S4"],
  },
  tags: ["audit_readiness", "traceability", "data_integrity", "operational", "regulatory", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Keep CRA, CRO, FDA 483, LFE, EDC, CTMS, ePRO, CAPA, PD, ALCOA+ as EN operational tokens; expand once in ES if needed.",
    es: "Mantener CRA, CRO, FDA 483, LFE, EDC, CTMS, ePRO, CAPA, PD, ALCOA+ como tokens operativos EN; expandir una vez en ES si hace falta.",
  },
};

