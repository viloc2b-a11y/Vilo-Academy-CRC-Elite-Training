// src/curriculum-engine/data/modules/m12.ts

import type { Module } from "../../types";

/**
 * Module 12 — EDC & tech stack: query gaming, lock pressure, and multi-system data integrity.
 * Guided practice: three cases (GP1–GP3) — multi-system reconciliation, false query closure, lock-pressure tradeoff.
 */
export const MODULE_M12: Module = {
  id: "M12",
  slug: "edc-tech-stack-query-gaming-lock-pressure-data-integrity",
  internalName: "mod_12_edc_tech_stack_data_integrity",
  category: "quality",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["Q", "R", "O", "C"],
  title: {
    en: "Module 12 — EDC & Tech Stack: Query Gaming, Lock Pressure & Data Integrity",
    es: "Módulo 12 — EDC y stack tecnológico: juegos de queries, presión de lock e integridad de datos",
  },
  objective: {
    en: "Detect query gaming/false resolutions; prevent source-to-EDC inversion; prioritize unresolvable queries before database lock; resolve multi-system inconsistencies (EDC/CTMS/ePRO) using a defensible truth hierarchy; resist sponsor pressure for premature closure; and identify systemic capture failures from query patterns—defensible in monitoring or inspection.",
    es: "Detectar query gaming/cierres falsos; prevenir inversión fuente→EDC; priorizar queries no resolubles antes del lock; resolver inconsistencias multi-sistema (EDC/CTMS/ePRO) usando jerarquía defendible de verdad; resistir presión del patrocinador para cierre prematuro; e identificar fallas sistémicas de captura desde patrones de queries—defendible en monitoría o inspección.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines query gaming as closing queries by rewording or technical edits without verifying or correcting the underlying source truth.",
          es: "Define query gaming como cerrar queries con rewording/ediciones técnicas sin verificar o corregir la verdad subyacente en la fuente.",
        },
        {
          en: "States the multi-system truth hierarchy: source (medical record) is the gold standard; EDC transcribes source; CTMS/ePRO are operational systems—EDC must never dictate source changes.",
          es: "Afirma la jerarquía de verdad multi-sistema: fuente (historia clínica) es estándar oro; EDC transcribe fuente; CTMS/ePRO son sistemas operativos—EDC nunca debe dictar cambios en fuente.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Runs daily query triage by impact and urgency (eligibility/endpoints/SAEs first), closes only after source verification, and documents ‘cannot be determined’ with evidence—not sponsor pressure.",
          es: "Ejecuta triage diario de queries por impacto/urgencia (elegibilidad/endpoints/SAE primero), cierra solo tras verificación en fuente y documenta ‘cannot be determined’ con evidencia—no por presión del patrocinador.",
        },
        {
          en: "Performs weekly reconciliation across source ↔ EDC ↔ CTMS ↔ ePRO; resolves contradictions by anchoring to source and tracking why other systems differ (sync delay, late ePRO entry, outage).",
          es: "Realiza reconciliación semanal entre fuente ↔ EDC ↔ CTMS ↔ ePRO; resuelve contradicciones anclando a fuente y registrando por qué difieren otros sistemas (retraso sync, entrada ePRO tardía, outage).",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Under database-lock pressure, prioritizes analysis-critical queries over query count and creates an audit-facing narrative of what is resolved vs unresolved, with impact statements and artifacts.",
          es: "Bajo presión de lock, prioriza queries críticas para análisis sobre conteo de queries y crea narrativa orientada a auditoría de lo resuelto vs no resuelto, con impacto y artefactos.",
        },
        {
          en: "Detects systemic capture failures from query patterns (same fields failing across subjects) and designs CAPA (source verification checklist before EDC entry, query-type tracking, training, and governance).",
          es: "Detecta fallas sistémicas de captura desde patrones de queries (mismos campos fallando en múltiples sujetos) y diseña CAPA (checklist de verificación en fuente antes de entrar a EDC, tracking por tipo de query, capacitación y gobierno).",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M12.L1",
      title: { en: "Core concepts — query reality traps & truth hierarchy", es: "Conceptos núcleo — trampas de queries y jerarquía de verdad" },
      lessonType: "reading",
      objective: {
        en: "Anchor query gaming, source inversion, lock reality, and cross-system truth hierarchy plus regulatory consequences.",
        es: "Anclar query gaming, inversión de fuente, realidad de lock y jerarquía de verdad multi-sistema más consecuencias regulatorias.",
      },
      keyPoints: [
        {
          en: "Query lifecycle: open → source verified → corrected/justified → closed; ‘closed’ is not success if the underlying truth remains wrong.",
          es: "Ciclo de query: abierta → fuente verificada → corregida/justificada → cerrada; ‘cerrada’ no es éxito si la verdad subyacente sigue incorrecta.",
        },
        {
          en: "Source inversion is a critical integrity failure: changing source to match EDC is never acceptable; resolve contradictions with addenda and evidence, not rewriting reality.",
          es: "Inversión de fuente es falla crítica: cambiar fuente para que coincida con EDC nunca es aceptable; resolver con adendas y evidencia, no reescribir realidad.",
        },
        {
          en: "Regulatory consequence awareness: repeated query gaming or source inversion can trigger inspection findings, data exclusion, or loss of site credibility.",
          es: "Conciencia de consecuencias regulatorias: query gaming o inversión de fuente repetidos pueden causar hallazgos, exclusión de datos o pérdida de credibilidad del sitio.",
        },
      ],
    },
    {
      lessonId: "M12.L2",
      title: { en: "Real-world workflow — daily triage, weekly reconciliation, lock prep", es: "Flujo real — triage diario, reconciliación semanal, preparación lock" },
      lessonType: "reading",
      objective: {
        en: "Operate EDC work as a quality system: triage by risk, reconcile systems, and prepare lock with transparent residual-risk documentation.",
        es: "Operar el trabajo EDC como sistema de calidad: triage por riesgo, reconciliar sistemas y preparar lock con documentación transparente de riesgo residual.",
      },
      keyPoints: [
        {
          en: "Daily triage categories: critical (eligibility, endpoints, SAEs), high (safety data), routine (formatting/verbatim).",
          es: "Categorías triage diarias: crítico (elegibilidad, endpoints, SAE), alto (datos seguridad), rutinario (formato/verbatim).",
        },
        {
          en: "Weekly reconciliation: source vs EDC vs CTMS vs ePRO; log why systems differ and ensure the source-supported truth is what drives EDC/analysis fields.",
          es: "Reconciliación semanal: fuente vs EDC vs CTMS vs ePRO; registrar por qué difieren sistemas y asegurar que la verdad soportada por fuente guía EDC/campos de análisis.",
        },
        {
          en: "Lock preparation: prioritize what keeps subjects in the analysis set; document unresolvable queries with source justification and impact statement.",
          es: "Preparación lock: priorizar lo que mantiene sujetos en set de análisis; documentar queries no resolubles con justificación en fuente e impacto.",
        },
      ],
    },
    {
      lessonId: "M12.GP1",
      title: { en: "Guided practice — GP-12.1: multi-system reconciliation (EDC/CTMS/ePRO)", es: "Práctica guiada — GP-12.1: reconciliación multi-sistema (EDC/CTMS/ePRO)" },
      lessonType: "case",
      objective: {
        en: "Subject 134: EDC shows Visit 5 completed 4/18; CTMS shows scheduled; ePRO shows dose taken 4/19.",
        es: "Sujeto 134: EDC muestra Visita 5 completada 18/4; CTMS muestra programada; ePRO muestra dosis 19/4.",
      },
      keyPoints: [
        {
          en: "Anchor to source: verify visit completion time in progress note; update EDC/CTMS accordingly; interpret ePRO as late entry when supported.",
          es: "Anclar a fuente: verificar hora de visita en nota; actualizar EDC/CTMS; interpretar ePRO como entrada tardía si está soportado.",
        },
      ],
    },
    {
      lessonId: "M12.GP2",
      title: { en: "Guided practice — GP-12.2: query gaming / false closure", es: "Práctica guiada — GP-12.2: query gaming / cierre falso" },
      lessonType: "case",
      objective: {
        en: "Query: AE onset date missing. CRC changes ‘onset unknown’ to ‘chronic’ to close query while source still says ‘new’.",
        es: "Query: falta fecha inicio AE. CRC cambia ‘inicio desconocido’ a ‘crónico’ para cerrar query mientras la fuente dice ‘nuevo’.",
      },
      keyPoints: [
        {
          en: "Do not fabricate to close queries. If onset truly cannot be obtained, document source justification and keep query honest; never rewrite source to satisfy EDC.",
          es: "No fabricar para cerrar queries. Si el inicio no se puede obtener, documentar justificación en fuente y mantener query honesta; nunca reescribir fuente para satisfacer EDC.",
        },
      ],
    },
    {
      lessonId: "M12.GP3",
      title: { en: "Guided practice — GP-12.3: lock-pressure tradeoff", es: "Práctica guiada — GP-12.3: tradeoff bajo presión de lock" },
      lessonType: "case",
      objective: {
        en: "Lock Friday: 18 queries remain Wednesday (4 endpoint labs, 12 AE verbatims, 2 eligibility). Sponsor: ‘Close what you can.’",
        es: "Lock viernes: 18 queries el miércoles (4 labs endpoint, 12 verbatim AE, 2 elegibilidad). Patrocinador: ‘Cierra lo que puedas.’",
      },
      keyPoints: [
        {
          en: "Prioritize analysis impact: endpoints/eligibility first; document verbatims as source-complete with formatting pending and no analysis impact; prepare sponsor-facing summary.",
          es: "Priorizar impacto en análisis: endpoints/elegibilidad primero; documentar verbatims como fuente completa con formato pendiente y sin impacto; preparar resumen al patrocinador.",
        },
      ],
    },
    {
      lessonId: "M12.L3",
      title: { en: "Answer framework — lock-ready integrity under pressure", es: "Marco de respuesta — integridad lista para lock bajo presión" },
      lessonType: "recap",
      objective: {
        en: "Consolidate elite behaviors: source-first truth, honest query closure, lock prioritization, pattern-to-CAPA thinking, and irreversibility awareness.",
        es: "Consolidar conductas elite: verdad fuente-primero, cierres honestos, priorización para lock, patrón→CAPA y conciencia de irreversibilidad.",
      },
      keyPoints: [
        {
          en: "Strong: source is sacred; EDC serves source; closes queries only after source verification; reconciles systems with artifacts; escalates pressure and patterns.",
          es: "Fuerte: fuente es sagrada; EDC sirve a fuente; cierra queries solo tras verificación; reconcilia sistemas con artefactos; escala presión y patrones.",
        },
        {
          en: "Irreversibility awareness: some data gaps cannot be fabricated post-lock. Better transparent ‘source complete, closure pending’ documentation than false resolution that risks inspection findings and data exclusion.",
          es: "Conciencia de irreversibilidad: algunas brechas no se pueden fabricar post-lock. Mejor documentación transparente ‘fuente completa, cierre pendiente’ que un cierre falso que arriesga hallazgos y exclusión de datos.",
        },
        {
          en: "Fail if: closes queries by rewording, modifies source to match EDC, prioritizes sponsor query count over analysis impact, or ignores multi-system contradictions.",
          es: "Fallo si: cierra queries con rewording, modifica fuente para que coincida con EDC, prioriza conteo del patrocinador sobre impacto en análisis o ignora contradicciones multi-sistema.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M12.E1",
      description: { en: "EDC vitals are changed but source remains unmodified (‘source inversion’).", es: "Se cambian signos en EDC pero la fuente no cambia (‘inversión de fuente’)." },
      risk: { en: "Data integrity breach; inspection finding risk and credibility loss.", es: "Brecha de integridad; riesgo de hallazgo y pérdida de credibilidad." },
      expectedLearnerResponse: {
        en: "Restore source-driven truth: verify source, correct EDC, document correction rationale; reinforce ‘EDC never dictates source’ governance.",
        es: "Restaurar verdad por fuente: verificar fuente, corregir EDC, documentar razón; reforzar gobierno ‘EDC no dicta fuente’.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M12.E2",
      description: { en: "Queries are closed ‘per discussion’ with no source verification or update artifacts.", es: "Queries se cierran ‘según discusión’ sin verificación en fuente ni artefactos de actualización." },
      risk: { en: "False resolutions; audit trail does not support closure decisions.", es: "Cierres falsos; audit trail no soporta decisiones de cierre." },
      expectedLearnerResponse: {
        en: "Require source evidence for closure; document discussions with artifacts; keep queries open when truth is unresolved.",
        es: "Exigir evidencia en fuente para cerrar; documentar discusiones con artefactos; mantener queries abiertas si no se resuelve la verdad.",
      },
      relatedDimensions: ["Q", "O"],
    },
    {
      errorId: "M12.E3",
      description: { en: "Query closed ‘data acceptable as is’ while source contradicts the value.", es: "Query cerrada ‘dato aceptable’ mientras la fuente contradice el valor." },
      risk: { en: "Gaming detection; potential data exclusion and inspection escalation.", es: "Detección de gaming; potencial exclusión y escalamiento en inspección." },
      expectedLearnerResponse: {
        en: "Reconcile contradiction; correct EDC or document justified uncertainty; ensure sponsor/DM is informed if analysis-impacting.",
        es: "Reconciliar contradicción; corregir EDC o documentar incertidumbre justificada; informar a patrocinador/DM si impacta análisis.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M12.E4",
      description: { en: "Same 5 AE fields are queried monthly across subjects (systemic capture failure) with no CAPA.", es: "Los mismos 5 campos AE se queryean mensualmente en múltiples sujetos (falla sistémica) sin CAPA." },
      risk: { en: "Chronic data quality defects; repeated monitor findings; inspection risk.", es: "Defectos crónicos de calidad; hallazgos repetidos; riesgo de inspección." },
      expectedLearnerResponse: {
        en: "Trend queries by type/field; implement training and checklist; add QA sampling; fix upstream capture process.",
        es: "Tendenciar queries por tipo/campo; implementar capacitación y checklist; muestreo QA; arreglar captura upstream.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M12.E5",
      description: { en: "Sponsor pressure: ‘Just mark queries cannot be determined’ to close volume before lock.", es: "Presión patrocinador: ‘marca cannot be determined’ para cerrar volumen antes de lock." },
      risk: { en: "Premature closure; integrity breach; potential finding if pattern is visible.", es: "Cierre prematuro; brecha de integridad; potencial hallazgo si el patrón es visible." },
      expectedLearnerResponse: {
        en: "Resist pressure; classify by analysis/safety impact; document residual open items; provide sponsor a truthful closure plan and timeline.",
        es: "Resistir presión; clasificar por impacto análisis/seguridad; documentar pendientes; dar al patrocinador plan veraz de cierre y cronograma.",
      },
      relatedDimensions: ["R", "O"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M12.EX1",
      name: { en: "EDC lock crisis — 48 hours remaining", es: "Crisis de lock EDC — quedan 48 horas" },
      scenario: {
        en: "Database lock Friday. Thursday 10AM: 42 queries across 5 subjects; sponsor pressure: ‘Close 80% today.’ Multi-system conflicts and an outage appear. You must protect the analysis set and defend your choices in monitoring.",
        es: "Lock viernes. Jueves 10AM: 42 queries en 5 sujetos; presión: ‘cierra 80% hoy’. Hay conflictos multi-sistema y un outage. Debes proteger el set de análisis y defender decisiones en monitoría.",
      },
      inputs: [
        { inputId: "M12.IN1", label: { en: "EDC query list export (5 subjects)", es: "Export lista de queries EDC (5 sujetos)" }, inputKind: "export" },
        { inputId: "M12.IN2", label: { en: "Source packet + key endpoints evidence", es: "Paquete de fuente + evidencia de endpoints" }, inputKind: "mock_ehr" },
        { inputId: "M12.IN3", label: { en: "CTMS + ePRO extracts", es: "Extractos CTMS + ePRO" }, inputKind: "bundle" },
        { inputId: "M12.IN4", label: { en: "Sponsor/monitor email pressure thread", es: "Hilo correos presión patrocinador/monitor" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "Rank top 4 risks to the analysis set; document resolutions for 2 most critical with source pointers; draft sponsor response resisting pressure while reporting progress and residual risk; identify one systemic pattern from the query list and propose CAPA for next study.",
        es: "Rankear top 4 riesgos al set de análisis; documentar resoluciones de 2 más críticos con punteros a fuente; redactar respuesta al patrocinador resistiendo presión y reportando progreso/riesgo residual; identificar un patrón sistémico desde queries y proponer CAPA para el próximo estudio.",
      },
      deliverables: [
        { deliverableId: "M12.D1", label: { en: "Query triage & risk ranking", es: "Triage de queries y ranking de riesgo" }, formatHint: "table" },
        { deliverableId: "M12.D2", label: { en: "Resolution pack (2 critical issues)", es: "Paquete de resolución (2 críticos)" }, formatHint: "pdf" },
        { deliverableId: "M12.D3", label: { en: "Sponsor response + CAPA summary", es: "Respuesta al patrocinador + resumen CAPA" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M12.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M12.C1",
        description: {
          en: "Prevents query gaming: closes queries only with source verification, transparent justification, and no source inversion.",
          es: "Previene query gaming: cierra queries solo con verificación en fuente, justificación transparente y sin inversión de fuente.",
        },
        points: 30,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Closes by rewording or changes source to match EDC to ‘get to green’.",
          es: "Cierra por rewording o cambia la fuente para que coincida con EDC para ‘ponerse en verde’.",
        },
      },
      {
        criterionId: "M12.C2",
        description: {
          en: "Resolves multi-system conflicts using defensible truth hierarchy and documents why systems differ (sync delay, late ePRO entry, outage).",
          es: "Resuelve conflictos multi-sistema con jerarquía defendible y documenta por qué difieren sistemas (sync, ePRO tardío, outage).",
        },
        points: 25,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Treats CTMS/ePRO or EDC as the ‘truth’ over source without evidence, or leaves contradictions unaddressed.",
          es: "Trata CTMS/ePRO o EDC como ‘verdad’ sobre fuente sin evidencia, o deja contradicciones sin abordar.",
        },
      },
      {
        criterionId: "M12.C3",
        description: {
          en: "Lock-pressure judgment: prioritizes analysis/safety-critical items and produces an audit-facing residual-risk summary rather than chasing closure count.",
          es: "Juicio bajo presión de lock: prioriza críticos de análisis/seguridad y produce resumen de riesgo residual orientado a auditoría en vez de perseguir conteo.",
        },
        points: 25,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Prioritizes sponsor closure percentage over eligibility/endpoints/SAE integrity or hides unresolvable queries.",
          es: "Prioriza porcentaje de cierre del patrocinador sobre integridad de elegibilidad/endpoints/SAE u oculta queries no resolubles.",
        },
      },
      {
        criterionId: "M12.C4",
        description: {
          en: "Pattern-to-CAPA: identifies systemic capture failures from query trends and proposes structural prevention.",
          es: "Patrón→CAPA: identifica fallas sistémicas desde tendencias de queries y propone prevención estructural.",
        },
        points: 20,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Treats repeated query patterns as isolated incidents; no CAPA or governance change proposed.",
          es: "Trata patrones repetidos como incidentes aislados; no propone CAPA ni cambio de gobierno.",
        },
      },
    ],
  },
  scorecardContribution: [
    { dimension: "Q", weight: 0.38, aggregationKey: "edc_query_integrity_source_truth_hierarchy_and_multi_system_reconciliation" },
    { dimension: "R", weight: 0.26, aggregationKey: "lock_deadline_judgment_pressure_resistance_and_regulatory_defense" },
    { dimension: "O", weight: 0.24, aggregationKey: "query_triage_workflow_system_reconciliation_and_issue_tracking" },
    { dimension: "C", weight: 0.12, aggregationKey: "clinical_plausibility_when_edc_and_source_conflict" },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S4 includes an EDC query thread under time pressure; it tests truthful query handling, multi-source reconciliation, and audit-facing communication—the same operational integrity as this module.",
      es: "OSCE.S4 incluye hilo de queries EDC bajo presión de tiempo; evalúa manejo veraz de queries, reconciliación multi-fuente y comunicación orientada a auditoría—la misma integridad operativa que este módulo.",
    },
    stationIds: ["OSCE.S4"],
  },
  tags: ["documentation", "data_integrity", "audit_readiness", "operational", "regulatory", "traceability", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Keep EDC, CTMS, ePRO, CRA, DM, lock, query, SAE, CtQ, GDP, ALCOA+ as EN operational tokens; expand once in ES if needed.",
    es: "Mantener EDC, CTMS, ePRO, CRA, DM, lock, query, SAE, CtQ, GDP, ALCOA+ como tokens operativos EN; expandir una vez en ES si hace falta.",
  },
};

