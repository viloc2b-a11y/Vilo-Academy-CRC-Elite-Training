// src/curriculum-engine/data/modules/m12.ts

import type { Module } from "../../types";

/**
 * Module 12 — EDC & tech stack: query gaming, lock pressure, and multi-system data integrity.
 *
 * Technical / Regulatory Execution: eight ordered sections; three guided cases (clear / incorrect / ambiguous);
 * time-boxed practical exercise; rubric 100 = sum(criteria.points); passing 94.
 *
 * Regulatory anchors: 21 CFR Part 11 (electronic records/signatures, audit trails, system controls) and
 * CDISC Standards (SDTM/CDASH-aligned capture discipline so EDC fields remain analysis-ready and traceable).
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
    en: "CRC can run EDC as a 21 CFR Part 11–aware quality system: defensible audit trails, attributable changes, and honest query closure; reconcile EDC/CTMS/ePRO using source-first truth; prioritize analysis-critical work under database lock pressure; and keep capture CDISC Standards–consistent so downstream SDTM mapping and regulatory review are not poisoned by gaming or source inversion.",
    es: "El CRC puede operar EDC como sistema de calidad consciente 21 CFR Part 11: audit trails defendibles, cambios atribuibles y cierre honesto de queries; reconciliar EDC/CTMS/ePRO con verdad fuente-primero; priorizar trabajo crítico para análisis bajo presión de lock; y mantener captura consistente CDISC Standards para que mapeo SDTM aguas abajo y revisión regulatoria no se envenenen por gaming o inversión de fuente.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines query gaming and states why it violates 21 CFR Part 11 expectations for trustworthy electronic records and attributable corrections.",
          es: "Define query gaming y afirma por qué viola expectativas 21 CFR Part 11 de registros electrónicos confiables y correcciones atribuibles.",
        },
        {
          en: "Explains how undisciplined EDC fields break CDISC Standards intent: inconsistent dates, missing qualifiers, and narrative drift complicate CDASH/SDTM and sponsor validation.",
          es: "Explica cómo campos EDC indisciplinados rompen intención CDISC Standards: fechas inconsistentes, calificadores faltantes y deriva narrativa complican CDASH/SDTM y validación patrocinador.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Runs query triage with source verification before closure; documents audit trail–visible rationales aligned to 21 CFR Part 11.",
          es: "Ejecuta triage de queries con verificación en fuente antes de cierre; documenta razones visibles en audit trail alineadas a 21 CFR Part 11.",
        },
        {
          en: "Reconciles source ↔ EDC ↔ CTMS ↔ ePRO weekly; resolves contradictions without letting EDC dictate source; flags CDISC Standards gaps (e.g., missing units, ambiguous verbatim).",
          es: "Reconcilia semanalmente fuente ↔ EDC ↔ CTMS ↔ ePRO; resuelve contradicciones sin dejar que EDC dicte fuente; señala brechas CDISC Standards (p. ej., unidades faltantes, verbatim ambiguo).",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Under lock pressure, produces sponsor-facing summaries that separate resolved vs residual risk without false closure—inspectable under 21 CFR Part 11 and credible for CDISC Standards traceability.",
          es: "Bajo presión de lock, produce resúmenes cara patrocinador que separan riesgo resuelto vs residual sin cierre falso—inspeccionables bajo 21 CFR Part 11 y creíbles para trazabilidad CDISC Standards.",
        },
        {
          en: "Detects systemic capture failures from query patterns and designs CAPA (pre-EDC source checklist, query-type dashboards, governance) rather than case-by-case rewording.",
          es: "Detecta fallas sistémicas de captura desde patrones de queries y diseña CAPA (checklist fuente pre-EDC, tableros tipo query, gobierno) en vez de rewording caso por caso.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M12.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the regulatory bar: Part 11–credible electronic records and CDISC Standards–ready capture—not query-count vanity metrics.",
        es: "Establecer la barra regulatoria: registros electrónicos creíbles Part 11 y captura lista CDISC Standards—no vanidad de conteo de queries.",
      },
      keyPoints: [
        {
          en: "Graded on audit trail honesty, source hierarchy, and lock judgment—not how fast queries disappear from dashboards.",
          es: "Se te califica por honestidad audit trail, jerarquía fuente y juicio de lock—no por qué tan rápido desaparecen queries de tableros.",
        },
        {
          en: "Outputs: triage table (D1), resolution pack (D2), sponsor memo + CAPA (D3) citing 21 CFR Part 11 and CDISC Standards where substantive.",
          es: "Salidas: tabla triage (D1), paquete resolución (D2), memo patrocinador + CAPA (D3) citando 21 CFR Part 11 y CDISC Standards donde sea sustantivo.",
        },
        {
          en: "Technical tokens stay EN (21 CFR Part 11, CDISC Standards, CDASH, SDTM, EDC, CTMS, ePRO, DM, ALCOA+, audit trail).",
          es: "Tokens técnicos permanecen en inglés (21 CFR Part 11, CDISC Standards, CDASH, SDTM, EDC, CTMS, ePRO, DM, ALCOA+, audit trail).",
        },
      ],
    },
    {
      lessonId: "M12.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 28,
      objective: {
        en: "Anchor 21 CFR Part 11 controls, CDISC Standards capture discipline, truth hierarchy, and common EDC failure modes.",
        es: "Anclar controles 21 CFR Part 11, disciplina captura CDISC Standards, jerarquía de verdad y modos de falla EDC comunes.",
      },
      keyPoints: [
        {
          en: "21 CFR Part 11: closed systems require valid electronic signatures where used, time-stamped audit trails, and authority checks—query closure is an electronic record decision.",
          es: "21 CFR Part 11: sistemas cerrados requieren firmas electrónicas válidas donde se usen, audit trails con marca de tiempo y controles de autoridad—cierre de query es decisión de registro electrónico.",
        },
        {
          en: "CDISC Standards: CDASH field conventions and SDTM traceability expect consistent domains (e.g., dates, units, AE verbatim)—EDC shortcuts create mapping debt.",
          es: "CDISC Standards: convenciones CDASH y trazabilidad SDTM esperan dominios consistentes (p. ej., fechas, unidades, verbatim AE)—atajos EDC crean deuda de mapeo.",
        },
        {
          en: "Truth hierarchy: source (medical record) is gold; EDC transcribes; CTMS/ePRO operational—never change source to satisfy EDC.",
          es: "Jerarquía verdad: fuente (historia clínica) es oro; EDC transcribe; CTMS/ePRO operativos—nunca cambiar fuente para satisfacer EDC.",
        },
        {
          en: "Query lifecycle: open → source verified → attributable correction → closed; closed with wrong truth fails 21 CFR Part 11 credibility.",
          es: "Ciclo query: abierta → fuente verificada → corrección atribuible → cerrada; cerrada con verdad incorrecta falla credibilidad 21 CFR Part 11.",
        },
        {
          en: "Real-world workflow — Daily triage: critical (eligibility, endpoints, SAE), high (safety), routine (format)—close only with artifacts.",
          es: "Flujo real — Triage diario: crítico (elegibilidad, endpoints, SAE), alto (seguridad), rutinario (formato)—cerrar solo con artefactos.",
        },
        {
          en: "Real-world workflow — Weekly reconciliation: log sync delays, late ePRO, outages; update EDC from source, not reverse.",
          es: "Flujo real — Reconciliación semanal: registrar retrasos sync, ePRO tardío, outages; actualizar EDC desde fuente, no al revés.",
        },
        {
          en: "Real-world workflow — Lock prep: document residual open items with impact; resist closure-count targets that force gaming.",
          es: "Flujo real — Prep lock: documentar pendientes abiertos con impacto; resistir metas de conteo cierre que fuerzan gaming.",
        },
        {
          en: "Error-prone 1 — Query gaming: reword or technical-edit to close without source truth fix.",
          es: "Propensa 1 — Query gaming: reword o edición técnica para cerrar sin arreglar verdad en fuente.",
        },
        {
          en: "Error-prone 2 — Source inversion: EDC changed, source untouched.",
          es: "Propensa 2 — Inversión fuente: EDC cambiado, fuente intacta.",
        },
        {
          en: "Error-prone 3 — False closure: ‘per discussion’ with no verification artifact.",
          es: "Propensa 3 — Cierre falso: ‘per discussion’ sin artefacto verificación.",
        },
        {
          en: "Error-prone 4 — CDISC Standards drift: missing units, ambiguous AE text, non-standard date components.",
          es: "Propensa 4 — Deriva CDISC Standards: unidades faltantes, texto AE ambiguo, componentes fecha no estándar.",
        },
        {
          en: "Error-prone 5 — Lock pressure: mass ‘cannot be determined’ to clear dashboards.",
          es: "Propensa 5 — Presión lock: ‘cannot be determined’ masivo para limpiar tableros.",
        },
        {
          en: "Cross-links: M11 source/ALCOA+; M4 logs; M10 SAE narratives; M8 visit windows.",
          es: "Vínculos: M11 fuente/ALCOA+; M4 logs; M10 narrativas SAE; M8 ventanas visita.",
        },
      ],
    },
    {
      lessonId: "M12.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Subject 134: EDC Visit 5 completed 4/18; CTMS scheduled; ePRO dose 4/19—reconcile with source and CDISC Standards–consistent dates.",
        es: "Sujeto 134: EDC Visita 5 completada 18/4; CTMS programada; ePRO dosis 19/4—reconciliar con fuente y fechas consistentes CDISC Standards.",
      },
      keyPoints: [
        {
          en: "What CRC sees: three timestamps disagree; lock narrative risk if left inconsistent.",
          es: "Qué ve el CRC: tres marcas discrepan; riesgo narrativa lock si queda inconsistente.",
        },
        {
          en: "How to think: source progress note governs; align EDC/CTMS; ePRO late entry only if source supports—preserves 21 CFR Part 11 traceability.",
          es: "Cómo pensar: nota progreso fuente manda; alinear EDC/CTMS; ePRO entrada tardía solo si fuente apoya—preserva trazabilidad 21 CFR Part 11.",
        },
        {
          en: "Decision: one attributable correction path with audit trail comment citing source artifact IDs.",
          es: "Decisión: una vía corrección atribuible con comentario audit trail citando IDs artefacto fuente.",
        },
      ],
    },
    {
      lessonId: "M12.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Query: AE onset date missing. CRC changes ‘onset unknown’ to ‘chronic’ to close query while source still says ‘new’.",
        es: "Query: falta fecha inicio AE. CRC cambia ‘inicio desconocido’ a ‘crónico’ para cerrar query mientras fuente dice ‘nuevo’.",
      },
      keyPoints: [
        {
          en: "Incorrect move: fabricate onset category to clear dashboard—breaks 21 CFR Part 11 and corrupts CDISC Standards AE domain.",
          es: "Movimiento incorrecto: fabricar categoría inicio para limpiar tablero—rompe 21 CFR Part 11 y corrompe dominio AE CDISC Standards.",
        },
        {
          en: "Correct move: keep query open or document justified ‘unknown’ with source quote + DM agreement; never rewrite source to match EDC.",
          es: "Movimiento correcto: mantener query abierta o documentar ‘desconocido’ justificado con cita fuente + acuerdo DM; nunca reescribir fuente para coincidir EDC.",
        },
        {
          en: "Why it matters: audit trail will show cosmetic closure without clinical truth.",
          es: "Por qué importa: audit trail mostrará cierre cosmético sin verdad clínica.",
        },
      ],
    },
    {
      lessonId: "M12.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Lock Friday: 18 queries Wednesday (4 endpoint labs, 12 AE verbatims, 2 eligibility). Sponsor: ‘Close what you can’ and DM hints at accepting ‘source pending’ for verbatims.",
        es: "Lock viernes: 18 queries miércoles (4 labs endpoint, 12 verbatim AE, 2 elegibilidad). Patrocinador: ‘Cierra lo que puedas’ y DM insinúa aceptar ‘fuente pendiente’ para verbatims.",
      },
      keyPoints: [
        {
          en: "What CRC sees: legitimate prioritization tension vs pressure to misrepresent readiness.",
          es: "Qué ve el CRC: tensión legítima priorización vs presión por tergiversar preparación.",
        },
        {
          en: "How to think: endpoints/eligibility first; verbatims only if source-complete or explicitly documented as incomplete with analysis impact—CDISC Standards verbatim integrity matters.",
          es: "Cómo pensar: endpoints/elegibilidad primero; verbatims solo si fuente completa o explícitamente incompleta con impacto análisis—integridad verbatim CDISC Standards importa.",
        },
        {
          en: "Decision: truthful sponsor table: resolved, in progress, blocked—with Part 11–visible rationale for any ‘pending’.",
          es: "Decisión: tabla veraz patrocinador: resuelto, en progreso, bloqueado, con racional visible bajo 21 CFR Part 11 para cualquier ‘pendiente’.",
        },
      ],
    },
    {
      lessonId: "M12.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 40,
      objective: {
        en: "Run the EDC lock crisis drill once under the 40-minute time box; cite 21 CFR Part 11 and CDISC Standards in D3 where substantive.",
        es: "Ejecutar el simulacro crisis lock una vez bajo 40 minutos; citar 21 CFR Part 11 y CDISC Standards en D3 donde sea sustantivo.",
      },
      keyPoints: [
        {
          en: "Time box: 40 minutes. Chasing closure percentage without source truth = incomplete.",
          es: "Límite: 40 minutos. Perseguir porcentaje cierre sin verdad en fuente = incompleto.",
        },
        {
          en: "Deliverables: triage (D1), resolution pack (D2), sponsor memo + CAPA (D3) with regulatory anchors.",
          es: "Entregables: triage (D1), paquete resolución (D2), memo patrocinador + CAPA (D3) con anclajes regulatorios.",
        },
      ],
    },
    {
      lessonId: "M12.S5",
      title: { en: "5) Scoring matrix & inspection perspective", es: "5) Matriz de puntuación y perspectiva inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M12.RUB1; map monitor drills to 21 CFR Part 11 audit trails and CDISC Standards mapping risk.",
        es: "Alinear calificación con M12.RUB1; mapear ejercicios monitor a audit trails 21 CFR Part 11 y riesgo mapeo CDISC Standards.",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; critical pathway on gaming, source inversion, and false closure.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; vía crítica en gaming, inversión fuente y cierre falso.",
        },
        {
          en: "21 CFR Part 11: inspectors correlate user actions, timestamps, and signature meaning.",
          es: "21 CFR Part 11: inspectores correlacionan acciones usuario, marcas y significado de firma.",
        },
        {
          en: "CDISC Standards: sponsors trace EDC → SDTM; inconsistent capture becomes finding in validation.",
          es: "CDISC Standards: patrocinadores trazan EDC → SDTM; captura inconsistente se vuelve hallazgo en validación.",
        },
      ],
    },
    {
      lessonId: "M12.S6",
      title: { en: "6) Answer framework (elite outputs + fail patterns)", es: "6) Marco de respuesta (salidas élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Produce lock-ready narratives that stay Part 11–credible and CDISC Standards–traceable.",
        es: "Producir narrativas listas lock que permanezcan creíbles Part 11 y trazables CDISC Standards.",
      },
      keyPoints: [
        {
          en: "Elite format: (1) Source pointer, (2) Attributable EDC change with audit trail note, (3) Residual risk + sponsor path.",
          es: "Formato élite: (1) Puntero fuente, (2) Cambio EDC atribuible con nota audit trail, (3) Riesgo residual + vía patrocinador.",
        },
        {
          en: "Fail patterns: ‘DM said OK’ without artifact; bulk ‘cannot be determined’; editing source after EDC error.",
          es: "Patrones falla: ‘DM dijo OK’ sin artefacto; ‘cannot be determined’ masivo; editar fuente tras error EDC.",
        },
      ],
    },
    {
      lessonId: "M12.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect EDC integrity to source docs, safety, and monitoring.",
        es: "Conectar integridad EDC a fuente, seguridad y monitoría.",
      },
      keyPoints: [
        {
          en: "M11: paper/source discipline is prerequisite for valid 21 CFR Part 11 electronic records.",
          es: "M11: disciplina papel/fuente es prerrequisito para registros electrónicos válidos 21 CFR Part 11.",
        },
        {
          en: "M10: AE fields must stay CDISC Standards–honest for safety datasets.",
          es: "M10: campos AE deben permanecer honestos CDISC Standards para conjuntos seguridad.",
        },
        {
          en: "M13/M16: monitoring and inspection narratives must match EDC audit trails.",
          es: "M13/M16: narrativas monitoría e inspección deben coincidir audit trails EDC.",
        },
      ],
    },
    {
      lessonId: "M12.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit for Part 11 credibility, CDISC mapping, and trial datasets.",
        es: "Hacer explícitas consecuencias para credibilidad Part 11, mapeo CDISC y conjuntos de ensayo.",
      },
      keyPoints: [
        {
          en: "Regulatory: 21 CFR Part 11 observations on audit trails/signatures; CDISC validation failures blocking database use.",
          es: "Regulatorio: observaciones 21 CFR Part 11 en audit trails/firmas; fallas validación CDISC bloqueando uso base.",
        },
        {
          en: "Scientific: gaming distorts endpoints and pooled safety signals.",
          es: "Científico: gaming distorsiona endpoints y señales seguridad agrupadas.",
        },
        {
          en: "Operational: lock delays, sponsor distrust, repeat monitoring cycles.",
          es: "Operacional: retrasos lock, desconfianza patrocinador, ciclos monitoría repetidos.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M12.E1",
      description: {
        en: "EDC vitals changed but source unmodified—source inversion incompatible with 21 CFR Part 11 truth expectations.",
        es: "Signos EDC cambiados pero fuente sin modificar—inversión fuente incompatible con expectativas verdad 21 CFR Part 11.",
      },
      risk: {
        en: "Data integrity breach; Part 11 credibility loss; possible exclusion.",
        es: "Brecha integridad; pérdida credibilidad Part 11; posible exclusión.",
      },
      expectedLearnerResponse: {
        en: "Verify source; correct EDC with attributable note; governance reinforcement.",
        es: "Verificar fuente; corregir EDC con nota atribuible; refuerzo gobierno.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M12.E2",
      description: {
        en: "Queries closed ‘per discussion’ without source artifacts—weak 21 CFR Part 11 audit trail story.",
        es: "Queries cerradas ‘per discussion’ sin artefactos fuente—historia audit trail débil 21 CFR Part 11.",
      },
      risk: {
        en: "False resolutions; inspection escalation.",
        es: "Resoluciones falsas; escalamiento inspección.",
      },
      expectedLearnerResponse: {
        en: "Reopen until source-supported; document discussions with evidence.",
        es: "Reabrir hasta soporte fuente; documentar discusiones con evidencia.",
      },
      relatedDimensions: ["Q", "O"],
    },
    {
      errorId: "M12.E3",
      description: {
        en: "Query closed ‘data acceptable as is’ while source contradicts value—gaming pattern harming CDISC Standards traceability.",
        es: "Query cerrada ‘dato aceptable’ mientras fuente contradice valor—patrón gaming dañando trazabilidad CDISC Standards.",
      },
      risk: {
        en: "SDTM mapping errors; sponsor findings.",
        es: "Errores mapeo SDTM; hallazgos patrocinador.",
      },
      expectedLearnerResponse: {
        en: "Reconcile; correct EDC or justified uncertainty; inform DM if analysis-impacting.",
        es: "Reconciliar; corregir EDC o incertidumbre justificada; informar DM si impacta análisis.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M12.E4",
      description: {
        en: "Same AE fields queried monthly across subjects—systemic capture failure; CDISC Standards checklist not enforced pre-EDC.",
        es: "Mismos campos AE query mensualmente entre sujetos—falla captura sistémica; checklist CDISC Standards no aplicada pre-EDC.",
      },
      risk: {
        en: "Chronic quality defects; repeated monitor findings.",
        es: "Defectos crónicos calidad; hallazgos monitor repetidos.",
      },
      expectedLearnerResponse: {
        en: "Trend by field; CAPA: training + checklist + QA sampling upstream.",
        es: "Tendencia por campo; CAPA: capacitación + checklist + muestreo QA upstream.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M12.E5",
      description: {
        en: "Sponsor pressure to mass ‘cannot be determined’ before lock without source justification—21 CFR Part 11 and GCP integrity risk.",
        es: "Presión patrocinador a marcar masivamente ‘cannot be determined’ antes lock sin justificación fuente—riesgo integridad 21 CFR Part 11 y GCP.",
      },
      risk: {
        en: "Premature closure; misconduct appearance.",
        es: "Cierre prematuro; apariencia mala conducta.",
      },
      expectedLearnerResponse: {
        en: "Classify by impact; truthful residual list; escalate if coercive.",
        es: "Clasificar por impacto; lista residual veraz; escalar si coercitivo.",
      },
      relatedDimensions: ["R", "O"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M12.EX1",
      name: {
        en: "EDC lock crisis — 21 CFR Part 11 & CDISC Standards defense",
        es: "Crisis lock EDC — defensa 21 CFR Part 11 y CDISC Standards",
      },
      scenario: {
        en: "Database lock Friday. Thursday 10:00: 42 queries across five subjects; sponsor pressure to close 80% today. Multi-system conflicts, one outage window, and AE verbatim formatting debt appear. You must protect the analysis set and produce an inspectable narrative.",
        es: "Lock viernes. Jueves 10:00: 42 queries en cinco sujetos; presión de cerrar 80% hoy. Aparecen conflictos multi-sistema, una ventana de outage y deuda de formato verbatim AE. Debes proteger set de análisis y producir narrativa inspeccionable.",
      },
      inputs: [
        { inputId: "M12.IN1", label: { en: "EDC query list export (5 subjects)", es: "Export lista queries EDC (5 sujetos)" }, inputKind: "export" },
        { inputId: "M12.IN2", label: { en: "Source packet + endpoint evidence", es: "Paquete fuente + evidencia endpoints" }, inputKind: "mock_ehr" },
        { inputId: "M12.IN3", label: { en: "CTMS + ePRO extracts", es: "Extractos CTMS + ePRO" }, inputKind: "bundle" },
        { inputId: "M12.IN4", label: { en: "Sponsor/monitor pressure thread", es: "Hilo presión patrocinador/monitor" }, inputKind: "bundle" },
        { inputId: "M12.IN5", label: { en: "21 CFR Part 11 excerpt (audit trail / signatures)", es: "Extracto 21 CFR Part 11 (audit trail / firmas)" }, inputKind: "pdf" },
        { inputId: "M12.IN6", label: { en: "CDISC Standards excerpt (CDASH/SDTM expectations)", es: "Extracto CDISC Standards (expectativas CDASH/SDTM)" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "Rank top four risks to the analysis set. Resolve the two most critical with source pointers and attributable EDC correction notes (21 CFR Part 11–visible rationale). Draft sponsor response (D3) resisting closure-count pressure while reporting truthful progress, residual risk, and blocked items. Identify one systemic query pattern and propose structural CAPA. D3 must explicitly name 21 CFR Part 11 and CDISC Standards at least once each and tie each citation to a concrete control or risk in the packet.",
        es: "Rankear top cuatro riesgos al set de análisis. Resolver los dos más críticos con punteros fuente y notas corrección EDC atribuibles (racional visible 21 CFR Part 11). Redactar respuesta patrocinador (D3) resistiendo presión de conteo cierre reportando progreso veraz, riesgo residual e ítems bloqueados. Identificar un patrón sistémico de queries y proponer CAPA estructural. D3 debe nombrar explícitamente 21 CFR Part 11 y CDISC Standards al menos una vez cada uno y enlazar cada cita a un control o riesgo concreto del paquete.",
      },
      deliverables: [
        { deliverableId: "M12.D1", label: { en: "Query triage & risk ranking", es: "Triage de queries y ranking de riesgo" }, formatHint: "table" },
        { deliverableId: "M12.D2", label: { en: "Resolution pack (2 critical issues)", es: "Paquete de resolución (2 críticos)" }, formatHint: "pdf" },
        {
          deliverableId: "M12.D3",
          label: {
            en: "Sponsor response + CAPA (cite 21 CFR Part 11 + CDISC Standards)",
            es: "Respuesta patrocinador + CAPA (citar 21 CFR Part 11 + CDISC Standards)",
          },
          formatHint: "short_memo",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M12.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M12.C1",
        description: {
          en: "Prevents query gaming: closes queries only with source verification, attributable audit trail notes, and no source inversion—aligned with 21 CFR Part 11.",
          es: "Previene query gaming: cierra queries solo con verificación fuente, notas audit trail atribuibles y sin inversión fuente—alineado a 21 CFR Part 11.",
        },
        points: 35,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Critical fail if closes by rewording without truth fix, changes source to match EDC, or closes with ‘per discussion’ without artifacts.",
          es: "Falla crítica si cierra por rewording sin arreglo verdad, cambia fuente para coincidir EDC o cierra con ‘per discussion’ sin artefactos.",
        },
      },
      {
        criterionId: "M12.C2",
        description: {
          en: "Resolves multi-system conflicts using source-first hierarchy; documents sync/outage/late-entry reasons; preserves CDISC Standards–friendly field consistency where applicable.",
          es: "Resuelve conflictos multi-sistema con jerarquía fuente-primero; documenta razones sync/outage/entrada tardía; preserva consistencia campos amigable CDISC Standards donde aplique.",
        },
        points: 25,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Critical fail if treats CTMS/ePRO/EDC as truth over source without evidence or leaves contradictions unaddressed.",
          es: "Falla crítica si trata CTMS/ePRO/EDC como verdad sobre fuente sin evidencia o deja contradicciones sin abordar.",
        },
      },
      {
        criterionId: "M12.C3",
        description: {
          en: "Lock-pressure judgment: prioritizes eligibility/endpoints/SAE integrity over closure percentage; documents residual risk transparently.",
          es: "Juicio presión lock: prioriza integridad elegibilidad/endpoints/SAE sobre porcentaje cierre; documenta riesgo residual transparentemente.",
        },
        points: 25,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Fail if prioritizes sponsor closure targets over analysis-critical truth or hides unresolvable queries without impact statement.",
          es: "Falla si prioriza metas cierre patrocinador sobre verdad crítica análisis u oculta queries no resolubles sin declaración impacto.",
        },
      },
      {
        criterionId: "M12.C4",
        description: {
          en: "Pattern-to-CAPA with structural controls; D3 meets citation requirement for 21 CFR Part 11 and CDISC Standards.",
          es: "Patrón→CAPA con controles estructurales; D3 cumple requisito citar 21 CFR Part 11 y CDISC Standards.",
        },
        points: 15,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Critical fail if treats repeated query patterns as isolated incidents only, proposes retraining-only CAPA, or omits required 21 CFR Part 11 / CDISC Standards citations in D3.",
          es: "Falla crítica si trata patrones repetidos solo como incidentes aislados, propone CAPA solo reentrenar u omite citas requeridas 21 CFR Part 11 / CDISC Standards en D3.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "Q",
      weight: 0.38,
      aggregationKey: "cfr_part_11_cdisc_standards_edc_integrity_reconciliation",
    },
    {
      dimension: "R",
      weight: 0.26,
      aggregationKey: "lock_deadline_judgment_pressure_resistance_and_regulatory_defense",
    },
    {
      dimension: "O",
      weight: 0.24,
      aggregationKey: "query_triage_workflow_system_reconciliation_and_issue_tracking",
    },
    {
      dimension: "C",
      weight: 0.12,
      aggregationKey: "clinical_plausibility_when_edc_and_source_conflict",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S4 includes an EDC query thread under time pressure: truthful handling, multi-source reconciliation, and communication that must remain 21 CFR Part 11–credible and CDISC Standards–traceable—the same integrity as this module.",
      es: "OSCE.S4 incluye hilo queries EDC bajo presión: manejo veraz, reconciliación multi-fuente y comunicación que debe permanecer creíble 21 CFR Part 11 y trazable CDISC Standards—la misma integridad que este módulo.",
    },
    stationIds: ["OSCE.S4"],
  },
  tags: ["documentation", "data_integrity", "audit_readiness", "operational", "regulatory", "traceability", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Module anchors: 21 CFR Part 11 (electronic records/signatures, audit trails) and CDISC Standards (CDASH/SDTM-aligned capture). Keep EDC, CTMS, ePRO, CRA, DM, lock, query, SAE, SDTM, CDASH as EN tokens where common.",
    es: "Anclajes del módulo: 21 CFR Part 11 (registros/firmas electrónicos, audit trails) y CDISC Standards (captura alineada CDASH/SDTM). Mantener EDC, CTMS, ePRO, CRA, DM, lock, query, SAE, SDTM, CDASH como tokens EN donde sea habitual.",
  },
};
