// src/curriculum-engine/data/modules/m11.ts

import type { Module } from "../../types";

/**
 * Module 11 — Source documentation & ALCOA+ (Technical / Regulatory Execution)
 *
 * PROMPT 2 — TÉCNICO / REGULATORIO (Modules 11–16):
 * - Exact 8-section structure enforced via lesson titles (1–8).
 * - Guided Practice includes: (1) clear correct vs incorrect, (2) integrity violation detection, (3) ambiguous timing/conflict.
 * - Integrity traps are explicit: backdating, false closure, missing source, deviation misclassification.
 * - Scoring is objective/binary and includes explicit GLOBAL FAIL integrity triggers (via failCondition).
 * - Practical Exercise requires written audit defense (2–4 sentences) for FDA inspector + sponsor monitor.
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

  // SMART objective (exact action + exact output + audit scenario)
  objective: {
    en: "CRC can reconcile a source-vs-EDC conflict during a monitoring visit and produce (1) an audit-trail correction plan and (2) a 2–4 sentence FDA/monitor defense statement that separates known vs unknown.",
    es: "El CRC puede reconciliar un conflicto fuente-vs-EDC durante una monitoría y producir (1) un plan de corrección con audit trail y (2) una defensa de 2–4 oraciones para FDA/monitor que separe conocido vs desconocido.",
  },

  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Flags integrity traps by name: backdating, false closure, missing source, and protocol deviation misclassification.",
          es: "Marca trampas de integridad por nombre: backdating, cierre falso, fuente faltante y mala clasificación de desviación de protocolo.",
        },
        {
          en: "Recognizes audit magnets: bulk PI signatures, coordinated ‘cleanup’ right before monitoring, and objective-source edits made to match narrative summaries.",
          es: "Reconoce imanes de auditoría: firmas PI en lote, ‘cleanup’ coordinado justo antes de monitoría y edición de fuente objetiva para que coincida con resúmenes narrativos.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes reconciliation using real artifacts (source note, vitals flowsheet, EDC field history, deviation log) and documents a correction that preserves originals and attribution.",
          es: "Ejecuta reconciliación usando artefactos reales (nota fuente, flujo de signos, historial de campos EDC, log de desviaciones) y documenta una corrección que preserve originales y atribución.",
        },
        {
          en: "Produces an audit-facing explanation that is truthful, time-bounded, and does not claim facts that are not supported by artifacts.",
          es: "Produce una explicación orientada a auditoría que sea veraz, acotada en tiempo y que no afirme hechos no soportados por artefactos.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects integrity violations under pressure (e.g., ‘close the query with no source’, ‘PI sign blanks now’, ‘change vitals to match note’) and escalates to QA/compliance.",
          es: "Detecta violaciones de integridad bajo presión (p. ej., ‘cierra el query sin fuente’, ‘PI firme blancos ahora’, ‘cambia signos para que cuadre’) y escala a QA/cumplimiento.",
        },
        {
          en: "Builds a defensible CAPA theme that changes workflow (signature triggers, same-day documentation cadence, sampling) rather than ‘retraining only’.",
          es: "Construye un tema CAPA defendible que cambie el flujo (disparadores de firma, cadencia de documentación el mismo día, muestreo) y no sea ‘solo reentrenar’.",
        },
      ],
    },
  ],

  lessons: [
    // 1) Module Overview
    {
      lessonId: "M11.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      objective: {
        en: "Define the audit-grade bar: reconcile conflicts with evidence and produce short, defensible outputs under time pressure.",
        es: "Definir la barra nivel auditoría: reconciliar conflictos con evidencia y producir salidas cortas y defendibles bajo presión de tiempo.",
      },
      keyPoints: [
        {
          en: "This is execution, not theory: you will be judged on what you change, what you refuse to change, and what you escalate.",
          es: "Esto es ejecución, no teoría: se te juzga por qué cambias, qué te niegas a cambiar y qué escalas.",
        },
        {
          en: "Audit pressure standard: separate known vs unknown; preserve originals; never ‘make the story match’ by editing objective source.",
          es: "Estándar bajo presión: separar conocido vs desconocido; preservar originales; nunca “hacer que cuadre” editando fuente objetiva.",
        },
      ],
    },

    // 2) Core Concepts (rules only)
    {
      lessonId: "M11.S2",
      title: { en: "2) Core concepts (rules only)", es: "2) Conceptos núcleo (solo reglas)" },
      lessonType: "reading",
      objective: {
        en: "Use these as rules during any monitoring/inspection walkthrough.",
        es: "Usar estas reglas en cualquier walkthrough de monitoría/inspección.",
      },
      keyPoints: [
        {
          en: "Rule: Objective contemporaneous source (e.g., vitals flowsheet) outranks narrative summaries for numeric fields; reconcile via addendum + audit trail, not by overwriting.",
          es: "Regla: fuente objetiva contemporánea (p. ej., flujo de signos) supera resúmenes narrativos para campos numéricos; reconciliar con adenda + audit trail, no sobreescribiendo.",
        },
        {
          en: "Rule: Late entries/addenda must be attributed (who/when) and state why; they cannot pretend to be contemporaneous.",
          es: "Regla: entradas tardías/adendas deben atribuir (quién/cuándo) y decir por qué; no pueden fingir ser contemporáneas.",
        },
        {
          en: "Rule: Never backdate, never false-close queries, never create ‘missing source’ after the fact. If missing, label missing and escalate.",
          es: "Regla: nunca backdate, nunca cierres queries en falso, nunca crees ‘fuente faltante’ después. Si falta, etiqueta como faltante y escala.",
        },
        {
          en: "Rule: Deviation classification must match protocol window/requirement. Misclassification to reduce heat is an integrity defect.",
          es: "Regla: clasificación de desviación debe coincidir con ventana/requisito del protocolo. Reclasificar para reducir presión es defecto de integridad.",
        },
        {
          en: "Rule: Bulk PI signatures and pre-monitoring ‘cleanup’ are system signals—treat as QA/compliance events, not admin tasks.",
          es: "Regla: firmas PI en lote y ‘cleanup’ pre-monitoría son señales sistémicas—trátalo como evento QA/cumplimiento, no tarea administrativa.",
        },
      ],
    },

    // 3) Guided Practice (3 scenarios)
    {
      lessonId: "M11.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear: correct vs incorrect)", es: "3) Práctica guiada — Escenario 1 (claro: correcto vs incorrecto)" },
      lessonType: "case",
      objective: {
        en: "Choose the correct reconciliation action and the incorrect one (you must label both).",
        es: "Elegir la acción correcta de reconciliación y la incorrecta (debes etiquetar ambas).",
      },
      keyPoints: [
        {
          en: "Inputs: Subject 091 Visit 4. Vitals flowsheet: BP 148/90 at 10:02. Progress note: “BP stable” at 14:00. EDC field BP_SYSTOLIC: 120 entered 14:12 → query opened → corrected to 148 at 16:30 (field history available).",
          es: "Insumos: Sujeto 091 Visita 4. Flujograma de signos: PA 148/90 a las 10:02. Nota: “PA estable” a las 14:00. Campo EDC BP_SYSTOLIC: 120 a las 14:12 → query abierto → corregido a 148 a las 16:30 (historial disponible).",
        },
        {
          en: "Correct: keep vitals as source-of-truth; add an addendum clarifying ‘stable’ is qualitative; ensure EDC reflects 148/90 with audit trail reference.",
          es: "Correcto: mantener signos como verdad fuente; adenda aclarando que ‘estable’ es cualitativo; asegurar EDC refleje 148/90 con referencia al audit trail.",
        },
        {
          en: "Incorrect: edit vitals to 120/80 so the narrative/EDC “match” (integrity violation).",
          es: "Incorrecto: editar signos a 120/80 para que “cuadre” narrativa/EDC (violación de integridad).",
        },
      ],
    },
    {
      lessonId: "M11.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (integrity violation: must detect)", es: "3) Práctica guiada — Escenario 2 (violación de integridad: debes detectar)" },
      lessonType: "case",
      objective: {
        en: "Detect false-closure pressure and choose the escalation output.",
        es: "Detectar presión de cierre falso y elegir la salida de escalamiento.",
      },
      keyPoints: [
        {
          en: "Inputs: EDC query: “AE verbatim inconsistent with source.” Source shows “fatigue”; EDC changed to “tiredness” with note “per discussion with DM”; query closed 17:05. Sponsor email 16:40: “Close 80% queries today or DB lock slips.”",
          es: "Insumos: query EDC: “AE verbatim inconsistent with source.” Fuente muestra “fatigue”; EDC cambió a “tiredness” con nota “per discussion with DM”; query cerrado 17:05. Correo patrocinador 16:40: “Cierra 80% queries hoy o se atrasa DB lock.”",
        },
        {
          en: "Integrity trap: false closure (closing without source alignment or documented rationale supported by source).",
          es: "Trampa de integridad: cierre falso (cerrar sin alinear con fuente o sin razón documentada soportada por fuente).",
        },
        {
          en: "Required decision: reopen or document as non-compliant closure + escalate to DM/QA; do not ‘paper over’ sponsor pressure.",
          es: "Decisión requerida: reabrir o documentar cierre no conforme + escalar a DM/QA; no “tapar” la presión del patrocinador.",
        },
      ],
    },
    {
      lessonId: "M11.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous timing/conflict)", es: "3) Práctica guiada — Escenario 3 (ambigüedad de tiempo/conflicto)" },
      lessonType: "case",
      objective: {
        en: "Handle a timing conflict without inventing facts; classify deviation correctly and document known vs unknown.",
        es: "Manejar conflicto de tiempo sin inventar hechos; clasificar desviación correctamente y documentar conocido vs desconocido.",
      },
      keyPoints: [
        {
          en: "Inputs: Protocol Visit 5 window ±3 days. Scheduled 4/20; completed 4/24 (4 days late). Deviation log is blank. PI note: “patient no-show rescheduled” with no date/time. IP dispensing log shows dose given 4/24.",
          es: "Insumos: ventana Visita 5 ±3 días. Programada 20/4; completada 24/4 (4 días tarde). Log de desviaciones en blanco. Nota PI: “no-show reprogramado” sin fecha/hora. Log de IP muestra dosis 24/4.",
        },
        {
          en: "Integrity traps: missing source (no dated rationale), deviation misclassification (calling it ‘minor’ to reduce heat), backdating the deviation log entry.",
          es: "Trampas de integridad: fuente faltante (sin razón fechada), mala clasificación de desviación (llamarla ‘menor’ para bajar presión), retrofechar el log de desviaciones.",
        },
        {
          en: "Required decision: classify as window violation; document a contemporaneous entry now (late entry labeled as late); state known vs unknown; escalate for PI attestation and CAPA to prevent repeats.",
          es: "Decisión requerida: clasificar como violación de ventana; documentar entrada contemporánea ahora (entrada tardía marcada como tardía); separar conocido vs desconocido; escalar para atestación PI y CAPA.",
        },
      ],
    },

    // 4) Practical Exercise (real correction/defense)
    {
      lessonId: "M11.S4",
      title: { en: "4) Practical exercise (real correction/defense)", es: "4) Ejercicio práctico (corrección/defensa real)" },
      lessonType: "simulation",
      objective: {
        en: "Produce a correction plan + two short defenses suitable for an FDA inspector and a sponsor monitor.",
        es: "Producir un plan de corrección + dos defensas cortas aptas para inspector FDA y monitor de patrocinador.",
      },
      keyPoints: [
        {
          en: "Time box: 12 minutes to produce deliverables. Incomplete output within time is incomplete performance.",
          es: "Límite: 12 minutos para producir entregables. Salida incompleta a tiempo = desempeño incompleto.",
        },
        {
          en: "You must include at least one explicit integrity trap refusal (e.g., ‘I will not backdate / I will not false-close’).",
          es: "Debes incluir al menos un rechazo explícito de trampa de integridad (p. ej., ‘no retrofecharé / no cerraré en falso’).",
        },
      ],
    },

    // 5) Scoring Matrix
    {
      lessonId: "M11.S5",
      title: { en: "5) Scoring matrix (binary + GLOBAL FAIL)", es: "5) Matriz de puntuación (binaria + GLOBAL FAIL)" },
      lessonType: "reading",
      objective: {
        en: "Clarify objective grading and integrity global-fail conditions.",
        es: "Aclarar calificación objetiva y condiciones de global-fail por integridad.",
      },
      keyPoints: [
        {
          en: "Binary: each criterion is met/not met. Passing requires meeting all non-global-fail criteria AND no integrity global fail.",
          es: "Binario: cada criterio se cumple/no se cumple. Aprobar requiere cumplir criterios y no incurrir en global fail de integridad.",
        },
        {
          en: "GLOBAL FAIL triggers: backdating, editing objective source to ‘match’, false query closure, inventing missing source, or deviation misclassification to hide a window violation.",
          es: "Disparadores GLOBAL FAIL: backdating, editar fuente objetiva para ‘cuadrar’, cierre falso de query, inventar fuente faltante o reclasificar desviación para ocultar violación de ventana.",
        },
      ],
    },

    // 6) Answer Framework
    {
      lessonId: "M11.S6",
      title: { en: "6) Answer framework (audit defense outputs)", es: "6) Marco de respuesta (salidas de defensa)" },
      lessonType: "recap",
      objective: {
        en: "Provide a repeatable format for inspector/monitor responses and correction documentation.",
        es: "Dar un formato repetible para respuestas a inspector/monitor y documentación de corrección.",
      },
      keyPoints: [
        {
          en: "Audit defense format (2–4 sentences): (1) what the artifact shows, (2) what is corrected and how, (3) what is unknown + verification step, (4) CAPA theme.",
          es: "Formato defensa (2–4 oraciones): (1) qué muestra el artefacto, (2) qué se corrige y cómo, (3) qué es desconocido + paso de verificación, (4) tema CAPA.",
        },
        {
          en: "FDA inspector response must be factual and integrity-forward (no excuses). Sponsor/monitor response must include the next operational step + ETA.",
          es: "Respuesta a inspector FDA: factual y orientada a integridad (sin excusas). Respuesta a sponsor/monitor: incluir siguiente paso operativo + ETA.",
        },
      ],
    },

    // 7) Cross-Module Links
    {
      lessonId: "M11.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      objective: {
        en: "Connect source integrity behaviors to EDC, monitoring defense, deviations, and capstone station outputs.",
        es: "Conectar integridad de fuente con EDC, defensa en monitoría, desviaciones y outputs de capstone.",
      },
      keyPoints: [
        {
          en: "M4: master logs + ALCOA+ discipline (audit trail honesty and contemporaneous logging).",
          es: "M4: logs maestros + disciplina ALCOA+ (honestidad del audit trail y registro contemporáneo).",
        },
        {
          en: "M12: EDC query lifecycle (false closure is an integrity fail).",
          es: "M12: ciclo de vida de queries EDC (cierre falso = falla de integridad).",
        },
        {
          en: "M13: monitoring visits defense (walkthrough narrative must align with artifacts).",
          es: "M13: defensa en monitoría (narrativa del walkthrough debe alinear con artefactos).",
        },
        {
          en: "M8: visit windows + deviation logging (misclassification escalates under audit).",
          es: "M8: ventanas de visita + log de desviaciones (mala clasificación escala en auditoría).",
        },
        {
          en: "M16 / OSCE.S5: source + ALCOA+ repair under pressure (truthful correction narrative).",
          es: "M16 / OSCE.S5: reparación de fuente + ALCOA+ bajo presión (narrativa veraz de corrección).",
        },
      ],
    },

    // 8) Failure Impact
    {
      lessonId: "M11.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      objective: {
        en: "Tie execution failures to 483 risk, data invalidation, and escalation pathways.",
        es: "Vincular fallas de ejecución a riesgo 483, invalidación de datos y rutas de escalamiento.",
      },
      keyPoints: [
        {
          en: "483 findings: backdating patterns, false closures, missing source, and bulk signatures are classic integrity themes that trigger inspection escalation.",
          es: "Hallazgos 483: patrones de backdating, cierres falsos, fuente faltante y firmas en lote son temas clásicos de integridad que disparan escalamiento en inspección.",
        },
        {
          en: "Data invalidation: conflicting source/EDC with no audit-trail correction can lead to data exclusion and unreliable endpoint assessment.",
          es: "Invalidación de datos: conflicto fuente/EDC sin corrección con audit trail puede llevar a exclusión de datos y evaluación poco confiable de endpoints.",
        },
        {
          en: "Audit escalation: integrity violations shift the conversation from ‘training gap’ to ‘misconduct risk’ (QA, compliance, sponsor oversight).",
          es: "Escalamiento: violaciones de integridad cambian de ‘brecha de capacitación’ a ‘riesgo de mala conducta’ (QA, cumplimiento, oversight del sponsor).",
        },
      ],
    },
  ],

  // Error library (kept concise, integrity-forward)
  errorLibrary: [
    {
      errorId: "M11.E_BACKDATING",
      description: { en: "Late entry is written but dated as if it occurred on the visit day (backdating).", es: "Se escribe entrada tardía pero se fecha como si fuera del día de la visita (backdating)." },
      risk: { en: "Integrity violation; inspection escalation theme (483 / warning letter patterns).", es: "Violación de integridad; tema de escalamiento en inspección (patrones 483 / warning letter)." },
      expectedLearnerResponse: { en: "Label as late entry with true entry date/time; document known vs unknown; escalate to QA/compliance if pattern exists.", es: "Marcar como entrada tardía con fecha/hora reales; documentar conocido vs desconocido; escalar a QA/cumplimiento si hay patrón." },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M11.E_FALSE_CLOSURE",
      description: { en: "EDC query is closed with “per discussion” while source remains unchanged and no source-supported rationale exists.", es: "Se cierra query EDC con “per discussion” mientras la fuente no cambia y no hay razón soportada por fuente." },
      risk: { en: "Data integrity failure; sponsor escalation; potential data exclusion.", es: "Falla de integridad de datos; escalamiento del sponsor; posible exclusión de datos." },
      expectedLearnerResponse: { en: "Reopen/rectify with source-supported documentation; document sponsor pressure; escalate to DM/QA.", es: "Reabrir/corregir con documentación soportada por fuente; documentar presión; escalar a DM/QA." },
      relatedDimensions: ["Q", "O", "R"],
    },
    {
      errorId: "M11.E_MISSING_SOURCE",
      description: { en: "A key safety/eligibility decision has no dated source note; team proposes to ‘write it in now’ as if it happened then.", es: "Decisión clave de seguridad/elegibilidad no tiene nota fuente fechada; el equipo propone ‘escribirla ahora’ como si hubiera ocurrido entonces." },
      risk: { en: "Cannot reconstruct decision-making; inspection risk; credibility loss.", es: "No se puede reconstruir toma de decisión; riesgo de inspección; pérdida de credibilidad." },
      expectedLearnerResponse: { en: "Do not invent; document the gap; obtain PI attestation with true dates; implement workflow trigger to prevent recurrence.", es: "No inventar; documentar brecha; obtener atestación PI con fechas reales; implementar disparador de flujo para prevenir recurrencia." },
      relatedDimensions: ["R", "Q", "O"],
    },
    {
      errorId: "M11.E_DEVIATION_MISCLASS",
      description: { en: "Visit window violation is labeled ‘minor/no deviation’ to reduce scrutiny; deviation log remains blank.", es: "Violación de ventana se etiqueta ‘menor/sin desviación’ para reducir escrutinio; log de desviaciones queda en blanco." },
      risk: { en: "Protocol compliance failure; audit escalation; downstream endpoint risk.", es: "Falla de cumplimiento de protocolo; escalamiento; riesgo a endpoints." },
      expectedLearnerResponse: { en: "Classify per protocol; document late entry transparently; notify sponsor/monitor as required; CAPA for scheduling controls.", es: "Clasificar según protocolo; documentar entrada tardía con transparencia; notificar sponsor/monitor según corresponda; CAPA de controles de agenda." },
      relatedDimensions: ["R", "O", "Q"],
    },
  ],

  practicalExercises: [
    {
      exerciseId: "M11.EX1",
      name: { en: "Monitoring-room reconciliation + defense (12 minutes)", es: "Reconciliación + defensa en sala de monitoría (12 minutos)" },
      scenario: {
        en: "Monitoring visit, Subject 091 Visit 4. The monitor has three artifacts open: (A) vitals flowsheet, (B) progress note, (C) EDC field history. A deviation window question emerges (Visit 5 occurred 4 days late) and the deviation log is blank. You are pressured to ‘clean it up’ before the monitor documents a finding.",
        es: "Monitoría, Sujeto 091 Visita 4. El monitor tiene tres artefactos abiertos: (A) flujo de signos, (B) nota de evolución, (C) historial de campos EDC. Surge una pregunta de ventana/desviación (Visita 5 4 días tarde) y el log de desviaciones está en blanco. Hay presión para ‘limpiarlo’ antes de que el monitor documente un hallazgo.",
      },
      inputs: [
        { inputId: "M11.IN1", label: { en: "Vitals flowsheet (timestamped)", es: "Flujo de signos (con timestamps)" }, inputKind: "mock_ehr" },
        { inputId: "M11.IN2", label: { en: "Progress note text + author/time", es: "Texto de nota + autor/hora" }, inputKind: "mock_ehr" },
        { inputId: "M11.IN3", label: { en: "EDC field history (BP_SYSTOLIC)", es: "Historial de campo EDC (BP_SYSTOLIC)" }, inputKind: "export" },
        { inputId: "M11.IN4", label: { en: "Visit schedule + protocol window (±3 days)", es: "Agenda + ventana de protocolo (±3 días)" }, inputKind: "table" },
        { inputId: "M11.IN5", label: { en: "Deviation log (current = blank)", es: "Log de desviaciones (actual = en blanco)" }, inputKind: "table" },
      ],
      learnerTask: {
        en: "In 12 minutes produce:\n(1) Correction plan (bullets) for BP conflict and deviation log gap (no backdating; preserve originals; known vs unknown).\n(2) FDA inspector defense (2–4 sentences) explaining what happened + how you corrected + how you prevent recurrence.\n(3) Sponsor monitor defense (2–4 sentences) with next step + ETA + attached artifacts.\n\nIntegrity requirement: include one explicit refusal of an integrity trap (e.g., ‘We will not backdate or overwrite objective source’).",
        es: "En 12 minutos produce:\n(1) Plan de corrección (bullets) para conflicto PA y brecha de log de desviación (sin backdating; preservar originales; conocido vs desconocido).\n(2) Defensa a inspector FDA (2–4 oraciones) explicando qué pasó + cómo se corrigió + cómo se previene recurrencia.\n(3) Defensa a monitor del sponsor (2–4 oraciones) con siguiente paso + ETA + artefactos adjuntos.\n\nRequisito de integridad: incluir un rechazo explícito de una trampa (p. ej., ‘No retrofecharemos ni sobreescribiremos fuente objetiva’).",
      },
      deliverables: [
        { deliverableId: "M11.D1", label: { en: "Correction plan (bullets)", es: "Plan de corrección (bullets)" }, formatHint: "short_memo" },
        { deliverableId: "M11.D2", label: { en: "FDA inspector defense (2–4 sentences)", es: "Defensa a inspector FDA (2–4 oraciones)" }, formatHint: "short_memo" },
        { deliverableId: "M11.D3", label: { en: "Sponsor monitor defense (2–4 sentences)", es: "Defensa a monitor sponsor (2–4 oraciones)" }, formatHint: "short_memo" },
      ],
    },
  ],

  assessmentRubric: {
    rubricId: "M11.RUB2",
    totalPoints: 100,
    passingPoints: 95,
    criteria: [
      {
        criterionId: "M11.C1_RECONCILE_NUMERIC",
        description: {
          en: "Reconciliation is correct: objective source (vitals) remains the numeric truth; narrative summary is clarified via addendum/audit trail rather than overwriting.",
          es: "Reconciliación correcta: fuente objetiva (signos) permanece como verdad numérica; resumen narrativo se aclara con adenda/audit trail, no sobreescritura.",
        },
        points: 20,
        mapsToDimensions: ["Q", "C"],
        failCondition: {
          en: "GLOBAL FAIL if learner proposes editing objective source to match narrative/EDC (‘make it match’).",
          es: "GLOBAL FAIL si propone editar fuente objetiva para que cuadre con narrativa/EDC (‘que cuadre’).",
        },
      },
      {
        criterionId: "M11.C2_TIMELINE_KNOWN_UNKNOWN",
        description: {
          en: "Separates known vs unknown and states how unknown will be verified (artifact-based), without inventing facts.",
          es: "Separa conocido vs desconocido y declara cómo se verificará lo desconocido (por artefactos), sin inventar hechos.",
        },
        points: 15,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "GLOBAL FAIL if learner invents dates, claims ‘verbal oversight’, or recommends backdating to cover a gap.",
          es: "GLOBAL FAIL si inventa fechas, afirma ‘supervisión verbal’ o recomienda retrofechar para cubrir brecha.",
        },
      },
      {
        criterionId: "M11.C3_FALSE_CLOSURE_DETECT",
        description: {
          en: "Detects false closure pressure and selects compliant path (reopen/rectify with source-supported rationale + QA/DM escalation when pressured).",
          es: "Detecta presión de cierre falso y elige ruta conforme (reabrir/corregir con razón soportada por fuente + escalamiento a QA/DM bajo presión).",
        },
        points: 15,
        mapsToDimensions: ["Q", "O", "R"],
        failCondition: {
          en: "GLOBAL FAIL if learner endorses closing a query with ‘per discussion’ while source remains unaligned or missing.",
          es: "GLOBAL FAIL si avala cerrar query con ‘per discussion’ con fuente no alineada o faltante.",
        },
      },
      {
        criterionId: "M11.C4_DEVIATION_CLASSIFY",
        description: {
          en: "Classifies the visit window violation correctly and documents a transparent late entry for the deviation log gap (no backdating).",
          es: "Clasifica correctamente la violación de ventana y documenta entrada tardía transparente para la brecha del log (sin backdating).",
        },
        points: 15,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "GLOBAL FAIL if learner misclassifies a window violation to hide scrutiny or backdates the deviation log entry.",
          es: "GLOBAL FAIL si reclasifica la violación para ocultar escrutinio o retrofecha el log de desviación.",
        },
      },
      {
        criterionId: "M11.C5_FDA_DEFENSE",
        description: {
          en: "FDA defense (2–4 sentences) is factual, integrity-forward, and artifact-referenced (what happened, what corrected, prevention).",
          es: "Defensa FDA (2–4 oraciones) factual, orientada a integridad y con referencia a artefactos (qué pasó, qué se corrigió, prevención).",
        },
        points: 15,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Fail if defense minimizes, blames, or claims compliance without evidence.",
          es: "Falla si minimiza, culpa o afirma cumplimiento sin evidencia.",
        },
      },
      {
        criterionId: "M11.C6_MONITOR_DEFENSE",
        description: {
          en: "Sponsor monitor defense (2–4 sentences) includes next step + ETA + attached artifacts; no minimization.",
          es: "Defensa a monitor (2–4 oraciones) incluye siguiente paso + ETA + artefactos adjuntos; sin minimizar.",
        },
        points: 10,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Fail if defense hides the issue or proposes cosmetic ‘cleanup’ instead of compliant correction.",
          es: "Falla si oculta el tema o propone ‘cleanup’ cosmético en vez de corrección conforme.",
        },
      },
      {
        criterionId: "M11.C7_CAPA_WORKFLOW",
        description: {
          en: "CAPA theme changes workflow (same-day documentation cadence, signature triggers, QA sampling) rather than ‘retraining only’.",
          es: "Tema CAPA cambia el flujo (cadencia el mismo día, disparadores de firma, muestreo QA) y no es ‘solo reentrenar’.",
        },
        points: 10,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Fail if CAPA is only ‘remind staff’ with no control mechanism.",
          es: "Falla si CAPA es solo ‘recordar al personal’ sin mecanismo de control.",
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
      en: "OSCE.S5 is the source documentation & ALCOA+ repair station: audit-trail truthfulness under monitor pressure—the same global-fail integrity constraints as this module.",
      es: "OSCE.S5 es la estación de documentación fuente y reparación ALCOA+: veracidad del audit trail bajo presión—las mismas restricciones de integridad (global fail) que este módulo.",
    },
    stationIds: ["OSCE.S5"],
  },

  tags: ["documentation", "data_integrity", "audit_readiness", "regulatory", "traceability", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Keep ALCOA+, GDP, PI, CRA, EDC, EHR/EMR as EN operational tokens; translate the operational meaning, not the tokens.",
    es: "Mantener ALCOA+, GDP, PI, CRA, EDC, EHR/EMR como tokens operativos EN; traducir el significado operativo, no los tokens.",
  },
};

