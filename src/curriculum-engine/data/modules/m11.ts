// src/curriculum-engine/data/modules/m11.ts

import type { Module } from "../../types";

/**
 * Module 11 — Source documentation & ALCOA+: audit-proof records under pressure.
 *
 * Technical / Regulatory Execution: eight ordered sections; three guided cases (clear / incorrect-detect / ambiguous);
 * time-boxed practical exercise; rubric 100 = sum(criteria.points); passing 94.
 *
 * Regulatory anchors: FDA Data Integrity (ALCOA+ expectations, contemporaneous records, attributable changes, inspection
 * defense) and MHRA Data Integrity (GxP data expectations, governance, and credible reconstruction under challenge).
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
    en: "CRC can reconcile a source-vs-EDC conflict during a monitoring visit and produce (1) an audit-trail correction plan and (2) short FDA and sponsor defenses that satisfy FDA Data Integrity and MHRA Data Integrity expectations—separating known vs unknown, refusing backdating and false closure, and escalating integrity pressure without inventing facts.",
    es: "El CRC puede reconciliar un conflicto fuente-vs-EDC durante una monitoría y producir (1) un plan de corrección con audit trail y (2) defensas cortas FDA y patrocinador que cumplan expectativas FDA Data Integrity y MHRA Data Integrity—separando conocido vs desconocido, rechazando backdating y cierre falso y escalando presión de integridad sin inventar hechos.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Names integrity traps (backdating, false closure, missing source, deviation misclassification) using FDA Data Integrity and MHRA Data Integrity vocabulary inspectors expect.",
          es: "Nombra trampas de integridad (backdating, cierre falso, fuente faltante, mala clasificación de desviación) con vocabulario que inspectores esperan de FDA Data Integrity y MHRA Data Integrity.",
        },
        {
          en: "Recognizes audit magnets: bulk PI signatures, coordinated pre-monitoring cleanup, and edits to objective source to match narrative—each contradicts FDA Data Integrity and MHRA Data Integrity norms.",
          es: "Reconoce imanes de auditoría: firmas PI en lote, limpieza coordinada pre-monitoría y ediciones a fuente objetiva para coincidir con narrativa—cada uno contradice normas FDA Data Integrity y MHRA Data Integrity.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes reconciliation with vitals/notes/EDC history and documents corrections that preserve originals, attribution, and MHRA Data Integrity–style contemporaneous explanation.",
          es: "Ejecuta reconciliación con signos/notas/historial EDC y documenta correcciones que preservan originales, atribución y explicación contemporánea estilo MHRA Data Integrity.",
        },
        {
          en: "Produces audit-facing language that is truthful, artifact-referenced, and aligned to FDA Data Integrity guidance themes (complete, consistent, enduring records).",
          es: "Produce lenguaje orientado a auditoría veraz, referenciado a artefactos y alineado a temas guía FDA Data Integrity (registros completos, consistentes, duraderos).",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects integrity violations under pressure and escalates to QA/compliance with CAPA that changes controls—not narrative-only fixes—consistent with MHRA Data Integrity governance expectations.",
          es: "Detecta violaciones de integridad bajo presión y escala a QA/cumplimiento con CAPA que cambia controles—no solo arreglos narrativos—consistente con expectativas de gobierno MHRA Data Integrity.",
        },
        {
          en: "Builds inspection-ready reconstruction when sources conflict: timeline triangulation, late-entry discipline, and sponsor transparency.",
          es: "Construye reconstrucción lista para inspección cuando fuentes chocan: triangulación temporal, disciplina entrada tardía y transparencia patrocinador.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M11.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the audit bar: evidence-first reconciliation and defenses that cite FDA Data Integrity and MHRA Data Integrity principles under pressure.",
        es: "Establecer la barra de auditoría: reconciliación primero evidencia y defensas que citen principios FDA Data Integrity y MHRA Data Integrity bajo presión.",
      },
      keyPoints: [
        {
          en: "Graded on what you change, refuse to change, and escalate—execution, not theory.",
          es: "Se te califica por qué cambias, qué te niegas a cambiar y qué escalas—ejecución, no teoría.",
        },
        {
          en: "Outputs: correction plan (D1), FDA-facing defense with regulatory anchors (D2), sponsor monitor defense (D3).",
          es: "Salidas: plan corrección (D1), defensa FDA con anclajes regulatorios (D2), defensa monitor patrocinador (D3).",
        },
        {
          en: "Technical tokens stay EN (FDA Data Integrity, MHRA Data Integrity, ALCOA+, GDP, PI, CRA, EDC, EMR, audit trail).",
          es: "Tokens técnicos permanecen en inglés (FDA Data Integrity, MHRA Data Integrity, ALCOA+, GDP, PI, CRA, EDC, EMR, audit trail).",
        },
      ],
    },
    {
      lessonId: "M11.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 28,
      objective: {
        en: "Anchor ALCOA+ rules, FDA Data Integrity and MHRA Data Integrity expectations, visit documentation workflow, and common failure modes.",
        es: "Anclar reglas ALCOA+, expectativas FDA Data Integrity y MHRA Data Integrity, flujo documentación visita y modos de falla comunes.",
      },
      keyPoints: [
        {
          en: "FDA Data Integrity: complete, consistent, and attributable data; contemporaneous recording; audit trails for changes—inspectors test whether the story matches artifacts.",
          es: "FDA Data Integrity: datos completos, consistentes y atribuibles; registro contemporáneo; audit trails para cambios—inspectores prueban si la historia coincide con artefactos.",
        },
        {
          en: "MHRA Data Integrity: governance, culture, and ability to reconstruct decisions; ‘looks tidy’ documentation that contradicts EMR/EDC history is a red flag.",
          es: "MHRA Data Integrity: gobierno, cultura y capacidad de reconstruir decisiones; documentación ‘linda’ que contradice historia EMR/EDC es bandera roja.",
        },
        {
          en: "Rule: Objective contemporaneous source (e.g., vitals flowsheet) outranks narrative for numerics; reconcile via addendum + audit trail, never overwrite to match.",
          es: "Regla: fuente objetiva contemporánea (p. ej., flujo signos) supera narrativa para numéricos; reconciliar con adenda + audit trail, nunca sobreescribir para coincidir.",
        },
        {
          en: "Rule: Late entries must state true date/time of entry, author, and reason; cannot impersonate contemporaneous documentation.",
          es: "Regla: entradas tardías deben declarar fecha/hora reales de entrada, autor y motivo; no pueden fingir documentación contemporánea.",
        },
        {
          en: "Real-world workflow — Pre-visit: pull source, EDC history, deviation log; identify conflicts before monitor arrives.",
          es: "Flujo real — Pre-visita: extraer fuente, historial EDC, log desviaciones; identificar conflictos antes de que llegue monitor.",
        },
        {
          en: "Real-world workflow — During visit: narrate artifacts; do not improvise facts; time-stamp new entries.",
          es: "Flujo real — Durante visita: narrar artefactos; no improvisar hechos; marcar tiempo en nuevas entradas.",
        },
        {
          en: "Real-world workflow — Post-visit: CAPA with workflow controls (signature triggers, same-day cadence, QA sampling).",
          es: "Flujo real — Post-visita: CAPA con controles de flujo (disparadores firma, cadencia mismo día, muestreo QA).",
        },
        {
          en: "Error-prone 1 — Backdating late entries to visit day.",
          es: "Propensa 1 — Retrofechar entradas tardías al día de visita.",
        },
        {
          en: "Error-prone 2 — False query closure under DB-lock pressure without source alignment.",
          es: "Propensa 2 — Cierre falso de query bajo presión DB lock sin alinear fuente.",
        },
        {
          en: "Error-prone 3 — Missing source for eligibility/safety decisions with retroactive narrative.",
          es: "Propensa 3 — Fuente faltante para decisiones elegibilidad/seguridad con narrativa retroactiva.",
        },
        {
          en: "Error-prone 4 — Deviation misclassification to shrink scrutiny (window violation labeled minor).",
          es: "Propensa 4 — Mala clasificación desviación para reducir escrutinio (violación ventana etiquetada menor).",
        },
        {
          en: "Error-prone 5 — Bulk PI signatures and pre-monitoring ‘cleanup’ sessions.",
          es: "Propensa 5 — Firmas PI en lote y sesiones de ‘limpieza’ pre-monitoría.",
        },
        {
          en: "Cross-links: M4 logs; M8 deviations; M12 queries; M13 monitoring; M16/OSCE.S5 repair.",
          es: "Vínculos: M4 logs; M8 desviaciones; M12 queries; M13 monitoría; M16/OSCE.S5 reparación.",
        },
      ],
    },
    {
      lessonId: "M11.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear: correct vs incorrect)", es: "3) Práctica guiada — Escenario 1 (claro: correcto vs incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Choose correct reconciliation and label the integrity-violation option for FDA Data Integrity and MHRA Data Integrity review.",
        es: "Elegir reconciliación correcta y etiquetar la opción violación integridad para revisión FDA Data Integrity y MHRA Data Integrity.",
      },
      keyPoints: [
        {
          en: "Inputs: Subject 091 Visit 4. Vitals flowsheet: BP 148/90 at 10:02. Progress note: ‘BP stable’ at 14:00. EDC BP_SYSTOLIC: 120 at 14:12 → query → corrected to 148 at 16:30 (field history available).",
          es: "Insumos: Sujeto 091 Visita 4. Flujo signos: PA 148/90 a 10:02. Nota: ‘PA estable’ a 14:00. EDC PA sistólica: 120 a 14:12 → query → corregido a 148 a 16:30 (historial disponible).",
        },
        {
          en: "Correct: vitals as numeric truth; addendum clarifying qualitative ‘stable’; EDC reflects 148 with audit trail—meets FDA Data Integrity attributable correction pattern.",
          es: "Correcto: signos como verdad numérica; adenda cualitativa ‘estable’; EDC refleja 148 con audit trail—cumple patrón corrección atribuible FDA Data Integrity.",
        },
        {
          en: "Incorrect: edit vitals to 120/80 so narrative/EDC match—MHRA Data Integrity would classify as data manipulation risk.",
          es: "Incorrecto: editar signos a 120/80 para coincidir narrativa/EDC—MHRA Data Integrity clasificaría riesgo manipulación de datos.",
        },
      ],
    },
    {
      lessonId: "M11.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (integrity violation: must detect)", es: "3) Práctica guiada — Escenario 2 (violación de integridad: detectar)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Detect false-closure pressure and select the FDA Data Integrity / MHRA Data Integrity–compliant escalation path.",
        es: "Detectar presión de cierre falso y seleccionar vía escalamiento conforme FDA Data Integrity / MHRA Data Integrity.",
      },
      keyPoints: [
        {
          en: "Inputs: EDC query ‘AE verbatim inconsistent with source.’ Source ‘fatigue’; EDC ‘tiredness’ with ‘per discussion with DM’; query closed 17:05. Sponsor email 16:40: close 80% queries today or DB lock slips.",
          es: "Insumos: query EDC ‘verbatim AE inconsistente con fuente.’ Fuente ‘fatigue’; EDC ‘tiredness’ con ‘per discussion with DM’; query cerrado 17:05. Correo 16:40: cerrar 80% queries hoy o se retrasa DB lock.",
        },
        {
          en: "Integrity trap: false closure without source-supported rationale—violates FDA Data Integrity completeness and MHRA Data Integrity governance.",
          es: "Trampa: cierre falso sin razón soportada en fuente—viola completitud FDA Data Integrity y gobierno MHRA Data Integrity.",
        },
        {
          en: "Required decision: reopen or document non-compliant closure + escalate to DM/QA; preserve pressure evidence.",
          es: "Decisión requerida: reabrir o documentar cierre no conforme + escalar a DM/QA; preservar evidencia de presión.",
        },
      ],
    },
    {
      lessonId: "M11.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous timing/conflict)", es: "3) Práctica guiada — Escenario 3 (ambigüedad tiempo/conflicto)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Resolve timing conflict without inventing facts; document transparently for FDA Data Integrity and MHRA Data Integrity reviewers.",
        es: "Resolver conflicto de tiempo sin inventar hechos; documentar transparentemente para revisores FDA Data Integrity y MHRA Data Integrity.",
      },
      keyPoints: [
        {
          en: "Inputs: Visit 5 window ±3 days; scheduled 4/20; completed 4/24; deviation log blank; PI note ‘no-show rescheduled’ undated; IP log shows dose 4/24.",
          es: "Insumos: ventana Visita 5 ±3 días; programada 20/4; completada 24/4; log desviaciones en blanco; nota PI ‘no-show reprogramado’ sin fecha; log IP muestra dosis 24/4.",
        },
        {
          en: "How to think: classify window violation honestly; late entry now labeled late; known vs unknown—both agencies penalize cosmetic reclassification.",
          es: "Cómo pensar: clasificar violación ventana con honestidad; entrada tardía ahora marcada tardía; conocido vs desconocido—ambas agencias penalizan reclasificación cosmética.",
        },
        {
          en: "Decision: deviation entry with true entry timestamp; PI attestation for unknowns; CAPA on scheduling—not backdated log.",
          es: "Decisión: entrada desviación con marca verdadera de entrada; atestación PI para desconocidos; CAPA en agenda—no log retrofechado.",
        },
      ],
    },
    {
      lessonId: "M11.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 30,
      objective: {
        en: "Produce correction plan and defenses under 30 minutes; cite FDA Data Integrity and MHRA Data Integrity in the FDA-facing memo (D2).",
        es: "Producir plan de corrección y defensas bajo 30 minutos; citar FDA Data Integrity y MHRA Data Integrity en memo cara FDA (D2).",
      },
      keyPoints: [
        {
          en: "Time box: 30 minutes. Missing explicit integrity-trap refusal or regulatory citations in D2 = incomplete.",
          es: "Límite: 30 minutos. Falta rechazo explícito trampa integridad o citas regulatorias en D2 = incompleto.",
        },
        {
          en: "Include at least one explicit refusal (e.g., will not backdate, will not false-close, will not overwrite objective source).",
          es: "Incluir al menos un rechazo explícito (p. ej., no retrofechar, no cerrar en falso, no sobreescribir fuente objetiva).",
        },
      ],
    },
    {
      lessonId: "M11.S5",
      title: { en: "5) Scoring matrix & inspection perspective", es: "5) Matriz de puntuación y perspectiva inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M11.RUB1; map global integrity fails to FDA Data Integrity and MHRA Data Integrity enforcement themes.",
        es: "Alinear calificación con M11.RUB1; mapear fallas globales integridad a temas de aplicación FDA Data Integrity y MHRA Data Integrity.",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; binary criteria; critical pathway on objective-source tampering, false closure, and backdating.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; criterios binarios; vía crítica en manipulación fuente objetiva, cierre falso y backdating.",
        },
        {
          en: "FDA Data Integrity: triangulate EMR, paper, EDC; suspicious patterns trigger deeper record review.",
          es: "FDA Data Integrity: triangular EMR, papel, EDC; patrones sospechosos disparan revisión más profunda.",
        },
        {
          en: "MHRA Data Integrity: governance and culture questions when coordinated cleanup appears before inspections.",
          es: "MHRA Data Integrity: preguntas de gobierno y cultura cuando aparece limpieza coordinada antes de inspecciones.",
        },
      ],
    },
    {
      lessonId: "M11.S6",
      title: { en: "6) Answer framework (audit defense outputs)", es: "6) Marco de respuesta (salidas de defensa)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Use a repeatable format that satisfies FDA Data Integrity and MHRA Data Integrity documentation tests.",
        es: "Usar formato repetible que cumpla pruebas documentación FDA Data Integrity y MHRA Data Integrity.",
      },
      keyPoints: [
        {
          en: "FDA defense (2–4 sentences): artifact fact → attributable correction → unknown + verification → CAPA control.",
          es: "Defensa FDA (2–4 oraciones): hecho artefacto → corrección atribuible → desconocido + verificación → control CAPA.",
        },
        {
          en: "Sponsor defense: next step + ETA + attachments; no minimization; cite pressure if it drove risk.",
          es: "Defensa patrocinador: siguiente paso + ETA + adjuntos; sin minimizar; citar presión si impulsó riesgo.",
        },
      ],
    },
    {
      lessonId: "M11.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect source integrity to logs, queries, monitoring, and capstone.",
        es: "Conectar integridad fuente a logs, queries, monitoría y capstone.",
      },
      keyPoints: [
        {
          en: "M4: master logs must align with source-first discipline under FDA Data Integrity.",
          es: "M4: logs maestros deben alinearse con disciplina fuente primero bajo FDA Data Integrity.",
        },
        {
          en: "M12: query lifecycle false closure is the same integrity class as this module.",
          es: "M12: cierre falso de query es la misma clase integridad que este módulo.",
        },
        {
          en: "M16 / OSCE.S5: repair narratives must stay MHRA Data Integrity–credible under pressure.",
          es: "M16 / OSCE.S5: narrativas reparación deben permanecer MHRA Data Integrity–creíbles bajo presión.",
        },
      ],
    },
    {
      lessonId: "M11.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Tie failures to 483 risk, data invalidation, and FDA Data Integrity / MHRA Data Integrity escalation.",
        es: "Vincular fallas a riesgo 483, invalidación datos y escalamiento FDA Data Integrity / MHRA Data Integrity.",
      },
      keyPoints: [
        {
          en: "483 / warning-letter patterns: backdating, false closure, missing source, bulk signatures—FDA Data Integrity program focus areas.",
          es: "Patrones 483 / warning letter: backdating, cierre falso, fuente faltante, firmas en lote—áreas foco programa FDA Data Integrity.",
        },
        {
          en: "MHRA: governance failures shift review from documentation errors to systemic data integrity investigations.",
          es: "MHRA: fallas de gobierno cambian revisión de errores documentación a investigaciones sistémicas integridad datos.",
        },
        {
          en: "Data exclusion and unreliable endpoints follow when audit trails cannot be defended.",
          es: "Exclusión datos y endpoints no confiables siguen cuando audit trails no pueden defenderse.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M11.E1",
      description: {
        en: "Late entry written but dated as if on visit day (backdating)—direct conflict with FDA Data Integrity and MHRA Data Integrity contemporaneous expectations.",
        es: "Entrada tardía escrita pero fechada como si fuera día de visita (backdating)—conflicto directo con expectativas contemporáneas FDA Data Integrity y MHRA Data Integrity.",
      },
      risk: {
        en: "Integrity violation; inspection escalation; possible misconduct review.",
        es: "Violación integridad; escalamiento inspección; posible revisión mala conducta.",
      },
      expectedLearnerResponse: {
        en: "True entry date/time; late-entry label; known vs unknown; QA escalation if pattern.",
        es: "Fecha/hora entrada verdadera; etiqueta entrada tardía; conocido vs desconocido; escalamiento QA si patrón.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M11.E2",
      description: {
        en: "EDC query closed ‘per discussion’ while source unchanged—false closure undermining FDA Data Integrity completeness.",
        es: "Query EDC cerrado ‘per discussion’ con fuente sin cambiar—cierre falso que socava completitud FDA Data Integrity.",
      },
      risk: {
        en: "Data integrity failure; sponsor escalation; exclusion risk.",
        es: "Falla integridad datos; escalamiento patrocinador; riesgo exclusión.",
      },
      expectedLearnerResponse: {
        en: "Reopen with source-supported fix; document pressure; DM/QA path.",
        es: "Reabrir con arreglo soportado fuente; documentar presión; vía DM/QA.",
      },
      relatedDimensions: ["Q", "O", "R"],
    },
    {
      errorId: "M11.E3",
      description: {
        en: "Key safety/eligibility decision lacks dated source; team proposes to write it retroactively—MHRA Data Integrity reconstruction failure.",
        es: "Decisión seguridad/elegibilidad carece fuente fechada; equipo propone escribir retroactivamente—falla reconstrucción MHRA Data Integrity.",
      },
      risk: {
        en: "Cannot defend decision path; credibility collapse.",
        es: "No se puede defender camino decisión; colapso credibilidad.",
      },
      expectedLearnerResponse: {
        en: "No invention; gap documentation; PI attestation with true dates; workflow trigger.",
        es: "Sin invención; documentar brecha; atestación PI con fechas reales; disparador flujo.",
      },
      relatedDimensions: ["R", "Q", "O"],
    },
    {
      errorId: "M11.E4",
      description: {
        en: "Visit window violation labeled minor with blank deviation log—misclassification to reduce heat.",
        es: "Violación ventana visita etiquetada menor con log desviaciones en blanco—mala clasificación para reducir calor.",
      },
      risk: {
        en: "Protocol compliance failure; FDA Data Integrity scrutiny on deviation truthfulness.",
        es: "Falla cumplimiento protocolo; escrutinio FDA Data Integrity sobre veracidad desviaciones.",
      },
      expectedLearnerResponse: {
        en: "Classify per protocol; transparent late deviation entry; sponsor notify as required; scheduling CAPA.",
        es: "Clasificar según protocolo; entrada desviación tardía transparente; notificar patrocinador según requerido; CAPA agenda.",
      },
      relatedDimensions: ["R", "O", "Q"],
    },
    {
      errorId: "M11.E5",
      description: {
        en: "False-correct pattern: charts look ALCOA+-clean because PI signed twenty progress notes same day before monitor—bulk attestation without contemporaneous review.",
        es: "Patrón ‘parece correcto’: gráficas lucen ALCOA+-limpias porque PI firmó veinte notas el mismo día antes del monitor—atestación masiva sin revisión contemporánea.",
      },
      risk: {
        en: "MHRA Data Integrity culture finding; FDA inspection theme on oversight authenticity.",
        es: "Hallazgo cultura MHRA Data Integrity; tema inspección FDA sobre autenticidad supervisión.",
      },
      expectedLearnerResponse: {
        en: "Stop bulk signing; QA investigation; revised signature SOP with attestation rules; sponsor transparency.",
        es: "Detener firmas masivas; investigación QA; SOP firma revisada con reglas atestación; transparencia patrocinador.",
      },
      relatedDimensions: ["O", "R", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M11.EX1",
      name: {
        en: "Monitoring-room reconciliation + defense — FDA Data Integrity & MHRA Data Integrity",
        es: "Reconciliación en monitoría + defensa — FDA Data Integrity y MHRA Data Integrity",
      },
      scenario: {
        en: "Monitoring visit, Subject 091 Visit 4. Monitor has vitals flowsheet, progress note, and EDC BP field history. Visit 5 occurred four days late; deviation log is blank. Pressure to ‘clean it up’ before the monitor documents a finding. You must defend corrections under FDA Data Integrity and MHRA Data Integrity expectations.",
        es: "Monitoría, Sujeto 091 Visita 4. Monitor tiene flujo signos, nota e historial EDC PA. Visita 5 ocurrió cuatro días tarde; log desviaciones en blanco. Presión para ‘limpiar’ antes de que monitor documente hallazgo. Debes defender correcciones bajo expectativas FDA Data Integrity y MHRA Data Integrity.",
      },
      inputs: [
        { inputId: "M11.IN1", label: { en: "Vitals flowsheet (timestamped)", es: "Flujo signos (con timestamps)" }, inputKind: "mock_ehr" },
        { inputId: "M11.IN2", label: { en: "Progress note + author/time", es: "Nota + autor/hora" }, inputKind: "mock_ehr" },
        { inputId: "M11.IN3", label: { en: "EDC field history (BP_SYSTOLIC)", es: "Historial campo EDC (BP_SYSTOLIC)" }, inputKind: "export" },
        { inputId: "M11.IN4", label: { en: "Visit schedule + protocol window (±3 days)", es: "Agenda + ventana protocolo (±3 días)" }, inputKind: "table" },
        { inputId: "M11.IN5", label: { en: "Deviation log (blank)", es: "Log desviaciones (en blanco)" }, inputKind: "table" },
        { inputId: "M11.IN6", label: { en: "FDA Data Integrity excerpt (ALCOA+ / audit trail)", es: "Extracto FDA Data Integrity (ALCOA+ / audit trail)" }, inputKind: "pdf" },
        { inputId: "M11.IN7", label: { en: "MHRA Data Integrity excerpt (governance / contemporaneous records)", es: "Extracto MHRA Data Integrity (gobierno / registros contemporáneos)" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "In 30 minutes produce:\n(1) D1 — Correction plan (bullets): BP conflict resolution; deviation log gap; no backdating; preserve originals; known vs unknown.\n(2) D2 — FDA inspector defense (2–4 sentences): must explicitly name FDA Data Integrity and MHRA Data Integrity at least once each and tie each citation to a concrete issue or control in the packet.\n(3) D3 — Sponsor monitor defense (2–4 sentences): next step + ETA + artifacts; reference at least one of FDA Data Integrity or MHRA Data Integrity where it strengthens the operational control story.\n\nIntegrity requirement: include one explicit refusal of an integrity trap (e.g., will not backdate, will not false-close, will not overwrite objective source).",
        es: "En 30 minutos produce:\n(1) D1 — Plan corrección (bullets): resolución conflicto PA; brecha log desviaciones; sin backdating; preservar originales; conocido vs desconocido.\n(2) D2 — Defensa inspector FDA (2–4 oraciones): debe nombrar explícitamente FDA Data Integrity y MHRA Data Integrity al menos una vez cada uno y enlazar cada cita a un tema o control concreto del paquete.\n(3) D3 — Defensa monitor patrocinador (2–4 oraciones): siguiente paso + ETA + artefactos; referenciar al menos uno de FDA Data Integrity o MHRA Data Integrity donde fortalezca historia de control operativo.\n\nRequisito integridad: incluir un rechazo explícito de trampa (p. ej., no retrofechar, no cerrar en falso, no sobreescribir fuente objetiva).",
      },
      deliverables: [
        { deliverableId: "M11.D1", label: { en: "Correction plan (bullets)", es: "Plan de corrección (bullets)" }, formatHint: "short_memo" },
        {
          deliverableId: "M11.D2",
          label: {
            en: "FDA inspector defense (cite FDA Data Integrity + MHRA Data Integrity)",
            es: "Defensa inspector FDA (citar FDA Data Integrity + MHRA Data Integrity)",
          },
          formatHint: "short_memo",
        },
        { deliverableId: "M11.D3", label: { en: "Sponsor monitor defense (2–4 sentences)", es: "Defensa monitor patrocinador (2–4 oraciones)" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M11.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M11.C1",
        description: {
          en: "Reconciliation is correct: objective source remains numeric truth; narrative clarified via addendum/audit trail; no overwrite to match EDC—FDA Data Integrity attributable change pattern.",
          es: "Reconciliación correcta: fuente objetiva permanece verdad numérica; narrativa aclarada vía adenda/audit trail; sin sobreescribir para coincidir EDC—patrón cambio atribuible FDA Data Integrity.",
        },
        points: 35,
        mapsToDimensions: ["Q", "C"],
        failCondition: {
          en: "Critical fail if proposes editing objective source to match narrative/EDC, or invents facts/dates to close gaps.",
          es: "Falla crítica si propone editar fuente objetiva para coincidir narrativa/EDC o inventa hechos/fechas para cerrar brechas.",
        },
      },
      {
        criterionId: "M11.C2",
        description: {
          en: "Separates known vs unknown with verification steps; classifies visit window violation honestly; documents transparent late deviation entry—no backdating—aligned with MHRA Data Integrity reconstruction expectations.",
          es: "Separa conocido vs desconocido con pasos verificación; clasifica violación ventana con honestidad; documenta entrada desviación tardía transparente—sin backdating—alineado a expectativas reconstrucción MHRA Data Integrity.",
        },
        points: 25,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Critical fail if misclassifies window violation to reduce scrutiny, backdates deviation log, or claims ‘verbal only’ oversight without artifact path.",
          es: "Falla crítica si reclasifica violación ventana para reducir escrutinio, retrofecha log desviaciones o alega supervisión ‘solo verbal’ sin ruta de artefacto.",
        },
      },
      {
        criterionId: "M11.C3",
        description: {
          en: "Detects false closure pressure; selects compliant path (reopen/rectify with source-supported rationale + QA/DM escalation); documents sponsor pressure when present.",
          es: "Detecta presión cierre falso; elige ruta conforme (reabrir/corregir con razón soportada fuente + escalamiento QA/DM); documenta presión patrocinador cuando esté presente.",
        },
        points: 25,
        mapsToDimensions: ["Q", "O", "R"],
        failCondition: {
          en: "Fail if endorses closing a query with ‘per discussion’ while source remains unaligned or missing.",
          es: "Falla si avala cerrar query con ‘per discussion’ con fuente no alineada o faltante.",
        },
      },
      {
        criterionId: "M11.C4",
        description: {
          en: "D2 cites FDA Data Integrity and MHRA Data Integrity as required; D3 includes next step + ETA + artifacts; CAPA changes workflow (signature triggers, same-day cadence, QA sampling)—not retraining only.",
          es: "D2 cita FDA Data Integrity y MHRA Data Integrity como se exige; D3 incluye siguiente paso + ETA + artefactos; CAPA cambia flujo (disparadores firma, cadencia mismo día, muestreo QA)—no solo reentrenar.",
        },
        points: 15,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Critical fail if D2 omits required FDA Data Integrity / MHRA Data Integrity citations, defenses minimize or hide issues, or CAPA is only reminders without controls.",
          es: "Falla crítica si D2 omite citas requeridas FDA Data Integrity / MHRA Data Integrity, defensas minimizan u ocultan temas o CAPA es solo recordatorios sin controles.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "Q",
      weight: 0.4,
      aggregationKey: "fda_mhra_data_integrity_alcoa_source_edc_reconciliation_audit_trail",
    },
    {
      dimension: "R",
      weight: 0.28,
      aggregationKey: "documentation_integrity_pressure_resistance_and_inspection_defense",
    },
    {
      dimension: "O",
      weight: 0.22,
      aggregationKey: "documentation_workflow_governance_pi_oversight_and_signature_cadence",
    },
    {
      dimension: "C",
      weight: 0.1,
      aggregationKey: "clinical_plausibility_of_source_when_records_conflict",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S5 is the source documentation & ALCOA+ repair station: audit-trail truthfulness under monitor pressure—the same FDA Data Integrity and MHRA Data Integrity global-fail constraints as this module.",
      es: "OSCE.S5 es la estación de documentación fuente y reparación ALCOA+: veracidad del audit trail bajo presión—las mismas restricciones global-fail FDA Data Integrity y MHRA Data Integrity que este módulo.",
    },
    stationIds: ["OSCE.S5"],
  },
  tags: ["documentation", "data_integrity", "audit_readiness", "regulatory", "traceability", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Module anchors: FDA Data Integrity and MHRA Data Integrity (GxP record expectations, governance, audit trails). Keep ALCOA+, GDP, PI, CRA, EDC, EMR as EN operational tokens.",
    es: "Anclajes del módulo: FDA Data Integrity y MHRA Data Integrity (expectativas de registros GxP, gobierno, audit trails). Mantener ALCOA+, GDP, PI, CRA, EDC, EMR como tokens operativos EN.",
  },
};
