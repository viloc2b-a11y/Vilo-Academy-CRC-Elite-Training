// src/curriculum-engine/data/modules/m11.ts

import type { Module } from "../../types";

/**
 * Module 11 — Source documentation & ALCOA+: audit-proof records under pressure.
 * Guided practice: three cases (GP1–GP3) — source conflict resolution, pre-monitoring cleanup trap, suspected backdating pattern.
 */
export const MODULE_M11: Module = {
  id: "M11",
  slug: "source-documentation-alcoa-audit-proof-records",
  internalName: "mod_11_source_alcoa_audit_proof",
  category: "quality",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["Q", "R", "O", "C"],
  title: {
    en: "Module 11 — Source Documentation & ALCOA+: Audit-Proof Records Under Pressure",
    es: "Módulo 11 — Documentación fuente y ALCOA+: registros a prueba de auditoría bajo presión",
  },
  objective: {
    en: "Identify backdating red flags and source conflicts; resolve source-vs-source inconsistencies using defensible hierarchy and audit trails; manage delayed PI signature patterns; resist pre-monitoring ‘documentation fixes’; and implement system-level CAPA for structural documentation failures.",
    es: "Identificar banderas rojas de backdating y conflictos entre fuentes; resolver inconsistencias fuente-vs-fuente con jerarquía defendible y audit trail; manejar patrones de firmas tardías del PI; resistir ‘arreglos’ de documentación antes de monitoría; e implementar CAPA a nivel sistema para fallas estructurales de documentación.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Names ALCOA+ red flags: bulk backdating signals (same pen/ink across multiple days, identical phrasing), batch PI signatures, and coordinated corrections dated the same day shortly before monitoring.",
          es: "Nombra banderas rojas ALCOA+: señales de backdating masivo (misma tinta/bolígrafo por varios días, frases idénticas), firmas PI en lote y correcciones coordinadas con la misma fecha justo antes de monitoría.",
        },
        {
          en: "Explains source conflicts (progress note vs vitals vs lab worksheet vs CRF) and why ‘busy clinic’ is not a compliance excuse; records must tell one coherent story an auditor can reconstruct.",
          es: "Explica conflictos de fuente (nota de evolución vs signos vitales vs hoja de laboratorio vs CRF) y por qué ‘clínica ocupada’ no es excusa; los registros deben contar una historia coherente que un auditor pueda reconstruir.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes real-time capture and reconciliation: documents during/immediately after interaction, records exact times and staff, and runs daily source ↔ CRF/EDC ↔ logs consistency checks before inconsistencies compound.",
          es: "Ejecuta captura y reconciliación en tiempo real: documenta durante/inmediatamente después de la interacción, registra horas exactas y personal, y realiza chequeos diarios de consistencia fuente ↔ CRF/EDC ↔ logs antes de que las inconsistencias se acumulen.",
        },
        {
          en: "Handles late oversight evidence correctly: uses transparent late-entry/addendum paths with attribution and rationale, without bulk-signing blanks or rewriting vitals to match summaries.",
          es: "Maneja evidencia tardía de supervisión correctamente: usa vías transparentes de entrada tardía/adenda con atribución y razón, sin firmar en lote campos en blanco ni cambiar signos para que coincidan con resúmenes.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects systemic patterns (batch signatures, repeated ‘cleanup’ behavior, recurring conflicts) and proposes CAPA: same-day PI review cadence, signature triggers, documentation SOP, QA sampling, and pressure-resistance escalation.",
          es: "Detecta patrones sistémicos (firmas en lote, ‘cleanup’ repetido, conflictos recurrentes) y propone CAPA: cadencia de revisión PI el mismo día, disparadores de firma, SOP de documentación, muestreo QA y escalamiento ante presión.",
        },
        {
          en: "Prepares audit-facing defense: prioritizes top risks, preserves original evidence, and explains corrections in a coherent 60–90 second narrative with artifact pointers.",
          es: "Prepara defensa orientada a auditoría: prioriza riesgos principales, preserva evidencia original y explica correcciones en una narrativa coherente de 60–90 segundos con punteros de artefactos.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M11.L1",
      title: { en: "Core concepts — ALCOA+ red flags & source conflicts", es: "Conceptos núcleo — banderas rojas ALCOA+ y conflictos de fuente" },
      lessonType: "reading",
      objective: {
        en: "Anchor backdating risk patterns, source hierarchy, and why pre-monitoring cleanup is a fraud risk.",
        es: "Anclar patrones de riesgo de backdating, jerarquía de fuentes y por qué ‘cleanup’ pre-monitoría es riesgo de fraude.",
      },
      keyPoints: [
        {
          en: "Reality check: a busy clinic does not justify incoherent or retroactively ‘cleaned’ source.",
          es: "Reality check: una clínica ocupada no justifica fuente incoherente o ‘limpia’ retroactivamente.",
        },
        {
          en: "Source conflicts must be resolved using most contemporaneous objective data (e.g., vitals) and an audit trail—not by making everything ‘match’ after the fact.",
          es: "Conflictos de fuente se resuelven con el dato objetivo más contemporáneo (p. ej., signos vitales) y audit trail—no haciendo que todo ‘cuadre’ después.",
        },
        {
          en: "Bulk signatures and identical phrasing across days are inspection magnets; treat as system issues, not isolated ‘paperwork’ problems.",
          es: "Firmas en lote y frases idénticas entre días atraen inspección; tratar como problema sistémico, no ‘papeleo’ aislado.",
        },
      ],
    },
    {
      lessonId: "M11.L2",
      title: { en: "Real-world workflow — capture, reconciliation, and governance", es: "Flujo real — captura, reconciliación y gobierno" },
      lessonType: "reading",
      objective: {
        en: "Execute daily documentation discipline and weekly pattern review with PI/QA to prevent systemic drift.",
        es: "Ejecutar disciplina diaria de documentación y revisión semanal de patrones con PI/QA para prevenir deriva sistémica.",
      },
      keyPoints: [
        {
          en: "Real-time capture: write during/immediately after interaction; note exact times and staff present; never destroy originals.",
          es: "Captura en tiempo real: escribir durante/inmediatamente después; anotar horas exactas y personal presente; nunca destruir originales.",
        },
        {
          en: "PI oversight: same-day review for eligibility/safety decisions; sign worksheets when decisions are made (not in bulk at week’s end).",
          es: "Supervisión PI: revisión el mismo día para decisiones de elegibilidad/seguridad; firmar hojas cuando se decide (no en lote al final).",
        },
        {
          en: "Reconciliation cadence: source vs CRF/EDC vs logs; fix inconsistencies via addendum/late entry with rationale; trend late entries and batch signatures weekly.",
          es: "Cadencia de reconciliación: fuente vs CRF/EDC vs logs; corregir con adenda/entrada tardía con razón; revisar tendencias de entradas tardías y firmas en lote semanalmente.",
        },
      ],
    },
    {
      lessonId: "M11.GP1",
      title: { en: "Guided practice — GP-11.1: resolve a source conflict (BP)", es: "Práctica guiada — GP-11.1: resolver conflicto de fuente (PA)" },
      lessonType: "case",
      objective: {
        en: "Subject 028: progress note says BP stable 120/80; vitals sheet shows 152/92; lab worksheet says HTN controlled.",
        es: "Sujeto 028: nota dice PA estable 120/80; hoja de signos 152/92; hoja de lab dice HTA controlada.",
      },
      keyPoints: [
        {
          en: "Use the most contemporaneous objective record (vitals) as the source of truth; document why summaries differ; ensure CRF reflects 152/92 with an audit trail.",
          es: "Usar el registro objetivo más contemporáneo (signos) como verdad fuente; documentar por qué difieren resúmenes; asegurar CRF refleje 152/92 con audit trail.",
        },
      ],
    },
    {
      lessonId: "M11.GP2",
      title: { en: "Guided practice — GP-11.2: pre-monitoring ‘cleanup’ trap", es: "Práctica guiada — GP-11.2: trampa de ‘cleanup’ pre-monitoría" },
      lessonType: "case",
      objective: {
        en: "Monitor arrives tomorrow; 5 charts have blank eligibility signature fields; team suggests PI sign them all now.",
        es: "Monitor llega mañana; 5 charts con firmas de elegibilidad en blanco; equipo sugiere que PI firme todo ahora.",
      },
      keyPoints: [
        {
          en: "Do not bulk-sign blanks. Use transparent late-entry documentation explaining oversight occurred but signature was delayed; implement a real-time signature trigger going forward.",
          es: "No firmar en lote campos en blanco. Usar documentación transparente de entrada tardía explicando supervisión ocurrió pero firma se retrasó; implementar disparador de firma en tiempo real.",
        },
      ],
    },
    {
      lessonId: "M11.GP3",
      title: { en: "Guided practice — GP-11.3: suspected backdating pattern", es: "Práctica guiada — GP-11.3: patrón sospechoso de backdating" },
      lessonType: "case",
      objective: {
        en: "Five consecutive notes (4/15–4/19) use identical blue pen/handwriting and PI signs them all on 4/22.",
        es: "Cinco notas consecutivas (15–19/4) con misma tinta azul/estilo y PI firma todo el 22/4.",
      },
      keyPoints: [
        {
          en: "Treat as a quality-system issue: document the pattern, implement daily documentation/signature SOP, and avoid claiming you can retroactively ‘validate’ timing that is uncertain.",
          es: "Tratar como tema de sistema de calidad: documentar patrón, implementar SOP diario de documentación/firma y evitar afirmar que se puede ‘validar’ retroactivamente un tiempo incierto.",
        },
      ],
    },
    {
      lessonId: "M11.L3",
      title: { en: "Answer framework — audit-proof corrections under pressure", es: "Marco de respuesta — correcciones a prueba de auditoría bajo presión" },
      lessonType: "recap",
      objective: {
        en: "Consolidate how to prioritize risks, preserve evidence, resist pressure, and propose system CAPA.",
        es: "Consolidar cómo priorizar riesgos, preservar evidencia, resistir presión y proponer CAPA de sistema.",
      },
      keyPoints: [
        {
          en: "Strong: sees patterns first; uses source hierarchy; preserves evidence; refuses ‘cleanup’; prepares a coherent defense narrative with CAPA.",
          es: "Fuerte: ve patrones primero; usa jerarquía de fuente; preserva evidencia; rechaza ‘cleanup’; prepara narrativa defendible con CAPA.",
        },
        {
          en: "Irreversibility awareness: some documentation issues cannot be retroactively corrected (e.g., backdating patterns, missing contemporaneous signatures). The correct approach is transparent acknowledgment, documenting what is known vs unknown, and implementing CAPA to prevent recurrence—because regulatory consequences can include warning letters, data exclusion, and operational restrictions.",
          es: "Conciencia de irreversibilidad: algunos problemas de documentación no se pueden corregir retroactivamente (p. ej., patrones de backdating, firmas contemporáneas faltantes). El enfoque correcto es reconocerlo con transparencia, documentar qué se sabe vs qué no se sabe e implementar CAPA para prevenir recurrencia—porque las consecuencias regulatorias pueden incluir warning letters, exclusión de datos y restricciones operativas.",
        },
        {
          en: "Fail if: accepts bulk signatures, changes vitals to match notes, or proposes ‘PI will sign now’ as the solution without system fixes.",
          es: "Fallo si: acepta firmas en lote, cambia signos para que coincidan, o propone ‘PI firma ahora’ como solución sin arreglos de sistema.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M11.E1",
      description: { en: "White-out used on source records to ‘fix’ mistakes.", es: "Se usa corrector líquido en registros fuente para ‘arreglar’ errores." },
      risk: { en: "Original data destroyed; high inspection risk.", es: "Datos originales destruidos; alto riesgo en inspección." },
      expectedLearnerResponse: {
        en: "Stop and replace per GDP/SOP; preserve originals; document correction path transparently and retrain staff.",
        es: "Detener y reemplazar según GDP/SOP; preservar originales; documentar corrección de forma transparente y reentrenar.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M11.E2",
      description: { en: "Progress note says ‘BP normal’ while vitals show 160/100; CRF uses the ‘normal’ summary.", es: "Nota dice ‘PA normal’ mientras signos muestran 160/100; CRF usa el resumen ‘normal’." },
      risk: { en: "Objective vs subjective conflict; safety/data integrity risk.", es: "Conflicto objetivo vs subjetivo; riesgo de seguridad/integridad." },
      expectedLearnerResponse: {
        en: "Use vitals as source of truth; addendum explaining discrepancy; correct CRF; trend-review similar conflicts.",
        es: "Usar signos como verdad fuente; adenda explicando discrepancia; corregir CRF; revisar tendencia de conflictos similares.",
      },
      relatedDimensions: ["Q", "C"],
    },
    {
      errorId: "M11.E3",
      description: { en: "PI signs 12 worksheets on Friday for the entire prior week’s work.", es: "PI firma 12 hojas el viernes por todo el trabajo de la semana previa." },
      risk: { en: "Batch oversight appears non-contemporaneous; major audit theme.", es: "Supervisión en lote parece no contemporánea; tema mayor de auditoría." },
      expectedLearnerResponse: {
        en: "Implement same-day PI sign triggers; document late signatures honestly; QA sampling to prevent recurrence.",
        es: "Implementar disparadores de firma PI el mismo día; documentar firmas tardías con honestidad; muestreo QA para prevenir recurrencia.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M11.E4",
      description: { en: "All corrections across subjects use the same Friday date/initials shortly before monitoring.", es: "Todas las correcciones entre sujetos usan la misma fecha/iniciales del viernes antes de monitoría." },
      risk: { en: "Bulk backfilling signal; potential misconduct escalation.", es: "Señal de backfilling masivo; posible escalamiento por conducta." },
      expectedLearnerResponse: {
        en: "Freeze ‘cleanup’; route to QA/compliance; document what is known vs unknown; implement governance and training.",
        es: "Detener ‘cleanup’; escalar a QA/cumplimiento; documentar conocido vs desconocido; implementar gobierno y capacitación.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M11.E5",
      description: { en: "Team pressure: ‘Fix charts before the monitor comes.’", es: "Presión del equipo: ‘Arregla charts antes de que llegue el monitor.’" },
      risk: { en: "Fraud risk; credibility collapse in inspection.", es: "Riesgo de fraude; colapso de credibilidad en inspección." },
      expectedLearnerResponse: {
        en: "Refuse backdating; document pressure; notify QA; prepare truthful monitor narrative and CAPA instead of cosmetic edits.",
        es: "Rechazar backdating; documentar presión; notificar QA; preparar narrativa veraz al monitor y CAPA en vez de ediciones cosméticas.",
      },
      relatedDimensions: ["R", "O"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M11.EX1",
      name: { en: "ALCOA+ crisis — monitoring visit in 40 minutes", es: "Crisis ALCOA+ — monitor llega en 40 minutos" },
      scenario: {
        en: "Monitor arrives to review Subject 041. Red flags: consecutive notes with identical blue pen and bulk PI signature; vitals vs progress note BP conflict; unsigned eligibility; CRF uses ‘stable’ summary; team pressure to ‘just sign now’.",
        es: "Monitor llega a revisar Sujeto 041. Banderas rojas: notas consecutivas con misma tinta azul y firma PI en lote; conflicto PA signos vs nota; elegibilidad sin firma; CRF usa resumen ‘estable’; presión del equipo para ‘solo firmar ahora’.",
      },
      inputs: [
        { inputId: "M11.IN1", label: { en: "Subject 041 source bundle", es: "Bundle de fuente Sujeto 041" }, inputKind: "mock_ehr" },
        { inputId: "M11.IN2", label: { en: "Vitals + worksheet excerpts", es: "Extractos de signos + hojas" }, inputKind: "bundle" },
        { inputId: "M11.IN3", label: { en: "Eligibility checklist + PI signature log", es: "Checklist elegibilidad + log firmas PI" }, inputKind: "table" },
        { inputId: "M11.IN4", label: { en: "CRF/EDC snapshot for the visit", es: "Snapshot CRF/EDC de la visita" }, inputKind: "export" },
      ],
      learnerTask: {
        en: "In 40 minutes: identify the 4 highest audit risks; draft compliant corrections for the 2 most critical (preserving originals and explaining timing); prepare a 90-second monitor explanation; propose 1 immediate action and 1 system CAPA; document pressure resistance (QA notification).",
        es: "En 40 minutos: identificar 4 riesgos principales de auditoría; redactar correcciones conformes para los 2 más críticos (preservando originales y explicando tiempos); preparar explicación al monitor de 90 segundos; proponer 1 acción inmediata y 1 CAPA de sistema; documentar resistencia a presión (notificación QA).",
      },
      deliverables: [
        { deliverableId: "M11.D1", label: { en: "Audit risk prioritization (top 4)", es: "Priorización de riesgos (top 4)" }, formatHint: "table" },
        { deliverableId: "M11.D2", label: { en: "Correction/addendum drafts (2 items)", es: "Borradores corrección/adenda (2 ítems)" }, formatHint: "pdf" },
        { deliverableId: "M11.D3", label: { en: "Monitor explanation + CAPA summary", es: "Explicación al monitor + resumen CAPA" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M11.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M11.C1",
        description: {
          en: "Detects ALCOA+ red flags (backdating, bulk signatures, coordinated cleanup) and prioritizes audit risk correctly under time pressure.",
          es: "Detecta banderas rojas ALCOA+ (backdating, firmas en lote, cleanup coordinado) y prioriza riesgo de auditoría correctamente bajo presión.",
        },
        points: 30,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Treats bulk signatures/backdating signals as ‘admin only’ or fails to identify pressure-driven cleanup as fraud risk.",
          es: "Trata señales de firmas/backdating como ‘solo admin’ o no identifica cleanup por presión como riesgo de fraude.",
        },
      },
      {
        criterionId: "M11.C2",
        description: {
          en: "Resolves source conflicts using defensible hierarchy (objective contemporaneous data first) and produces audit-trail corrections without destroying originals.",
          es: "Resuelve conflictos de fuente con jerarquía defendible (dato objetivo contemporáneo primero) y produce correcciones con audit trail sin destruir originales.",
        },
        points: 30,
        mapsToDimensions: ["Q", "C"],
        failCondition: {
          en: "Edits vitals or other objective source to match a summary note, or ‘fixes’ by overwriting without an audit trail.",
          es: "Edita signos u otra fuente objetiva para que coincida con una nota resumen, o ‘arregla’ sobreescribiendo sin audit trail.",
        },
      },
      {
        criterionId: "M11.C3",
        description: {
          en: "Handles delayed PI signatures and missing oversight evidence compliantly: transparent late-entry rationale, correct escalation, and no bulk signing of blanks.",
          es: "Maneja firmas tardías PI y evidencia de supervisión faltante de forma conforme: razón transparente de entrada tardía, escalamiento correcto y sin firma en lote de campos en blanco.",
        },
        points: 20,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Recommends ‘PI sign everything now’ as the main fix or claims contemporaneous oversight without support.",
          es: "Recomienda ‘PI firme todo ahora’ como arreglo principal o afirma supervisión contemporánea sin soporte.",
        },
      },
      {
        criterionId: "M11.C4",
        description: {
          en: "Proposes system CAPA that prevents repeat failures: real-time documentation workflow, signature triggers, QA sampling, and pressure-resistance governance.",
          es: "Propone CAPA de sistema que previene recurrencias: flujo de documentación en tiempo real, disparadores de firma, muestreo QA y gobierno anti-presión.",
        },
        points: 20,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Only case-by-case fixes; no system controls or governance changes.",
          es: "Solo arreglos caso por caso; sin controles de sistema ni cambios de gobierno.",
        },
      },
    ],
  },
  scorecardContribution: [
    { dimension: "Q", weight: 0.4, aggregationKey: "alcoa_plus_source_coherence_conflict_resolution_and_audit_trail" },
    { dimension: "R", weight: 0.28, aggregationKey: "documentation_integrity_pressure_resistance_and_inspection_defense" },
    { dimension: "O", weight: 0.22, aggregationKey: "documentation_workflow_governance_pi_oversight_and_signature_cadence" },
    { dimension: "C", weight: 0.1, aggregationKey: "clinical_plausibility_of_source_when_records_conflict" },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S5 is the source documentation & ALCOA+ repair station: audit-trail truthfulness under monitor pressure—the same core behaviors as this module.",
      es: "OSCE.S5 es la estación de documentación fuente y reparación ALCOA+: veracidad del audit trail bajo presión de monitoría—las mismas conductas núcleo que este módulo.",
    },
    stationIds: ["OSCE.S5"],
  },
  tags: ["documentation", "data_integrity", "audit_readiness", "regulatory", "traceability", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Keep ALCOA+, GDP, EMR/EHR, PI, CRA, EDC, ISF as EN operational tokens; expand once in ES if needed.",
    es: "Mantener ALCOA+, GDP, EMR/EHR, PI, CRA, EDC, ISF como tokens operativos EN; expandir una vez en ES si hace falta.",
  },
};

