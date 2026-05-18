// src/curriculum-engine/data/modules/m13.ts

import type { Module } from "../../types";

/**
 * Module 13 — Monitoring visits: real-time defense and inspector mindset.
 *
 * Technical / Regulatory Execution: eight ordered sections; three guided cases (clear / incorrect / ambiguous);
 * time-boxed practical exercise; rubric 100 = sum(criteria.points); passing 94.
 *
 * Regulatory anchors: FDA Inspection Guides (BIMO/ORO expectations for how FDA staff review records, walk sites,
 * and escalate patterns) and ICH E6(R3) Section 5 (trial management and quality system expectations relevant to
 * monitoring, oversight, and sponsor/site cooperation).
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
    en: "CRC can conduct source-to-EDC walkthroughs that align with FDA Inspection Guides pattern-hunting behaviors; defend query resolutions with artifact chains consistent with ICH E6(R3) Section 5 quality expectations; resist off-the-record pressure that would break source primacy; convert monitoring findings into system CAPA; and keep communication control under concurrent sponsor and regulatory scrutiny.",
    es: "El CRC puede conducir walkthroughs fuente→EDC alineados a patrones de búsqueda FDA Inspection Guides; defender resoluciones de queries con cadenas de artefactos consistentes con expectativas de calidad ICH E6(R3) Section 5; resistir presión off-the-record que rompa primacía de fuente; convertir hallazgos de monitoría en CAPA de sistema; y mantener control de comunicación bajo escrutinio concurrente patrocinador y regulatorio.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Explains how FDA Inspection Guides inform what inspectors look for during record review and interviews (patterns, contemporaneity, credibility of explanations).",
          es: "Explica cómo FDA Inspection Guides informan qué buscan inspectores en revisión de registros y entrevistas (patrones, contemporaneidad, credibilidad de explicaciones).",
        },
        {
          en: "States that ICH E6(R3) Section 5 frames trial management and quality activities that monitoring is meant to verify—walkthroughs must show those systems working, not performative tidiness.",
          es: "Afirma que ICH E6(R3) Section 5 enmarca gestión del ensayo y actividades de calidad que la monitoría debe verificar—los walkthroughs deben mostrar esos sistemas funcionando, no orden performativo.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes monitoring workflow: pre-visit prioritization, structured source → EDC → query walkthrough, and responses that map to FDA Inspection Guides documentation tests.",
          es: "Ejecuta flujo monitoría: priorización pre-visita, walkthrough estructurado fuente → EDC → query y respuestas que mapean a pruebas documentación FDA Inspection Guides.",
        },
        {
          en: "Maintains communication discipline and ties CAPA proposals to ICH E6(R3) Section 5 expectations for corrective/preventive action when systemic issues appear.",
          es: "Mantiene disciplina de comunicación y enlaza propuestas CAPA a expectativas ICH E6(R3) Section 5 para acción correctiva/preventiva cuando aparecen temas sistémicos.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects pattern-hunting signals (≥3 similar issues) and shifts from case fixes to system CAPA defensible under FDA Inspection Guides scrutiny.",
          es: "Detecta señales pattern-hunting (≥3 problemas similares) y cambia de arreglos por caso a CAPA sistema defendible bajo escrutinio FDA Inspection Guides.",
        },
        {
          en: "Documents monitor pressure that pushes integrity breaches and escalates per ICH E6(R3) Section 5 governance without improvising facts.",
          es: "Documenta presión monitor que empuja brechas de integridad y escala según gobierno ICH E6(R3) Section 5 sin improvisar hechos.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M13.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the bar: evidence-first walkthroughs, FDA Inspection Guides–aware pattern defense, and ICH E6(R3) Section 5–aligned quality behavior under pressure.",
        es: "Establecer la barra: walkthroughs primero evidencia, defensa de patrones consciente FDA Inspection Guides y conducta de calidad alineada ICH E6(R3) Section 5 bajo presión.",
      },
      keyPoints: [
        {
          en: "Graded on artifacts, refusal of integrity shortcuts, and CAPA substance—not charm.",
          es: "Se te califica por artefactos, rechazo a atajos de integridad y sustancia CAPA—no por carisma.",
        },
        {
          en: "Outputs: risk ranking (D1), walkthrough script (D2), CAPA + communication plan (D3) citing FDA Inspection Guides and ICH E6(R3) Section 5 where substantive.",
          es: "Salidas: ranking riesgo (D1), guion walkthrough (D2), CAPA + plan comunicación (D3) citando FDA Inspection Guides e ICH E6(R3) Section 5 donde sea sustantivo.",
        },
        {
          en: "Technical tokens stay EN (FDA Inspection Guides, ICH E6(R3) Section 5, CRA, CRO, LFE, EDC, CTMS, CAPA, ALCOA+).",
          es: "Tokens técnicos permanecen en inglés (FDA Inspection Guides, ICH E6(R3) Section 5, CRA, CRO, LFE, EDC, CTMS, CAPA, ALCOA+).",
        },
      ],
    },
    {
      lessonId: "M13.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 28,
      objective: {
        en: "Anchor monitor/inspector reality, FDA Inspection Guides review tactics, ICH E6(R3) Section 5 trial-management expectations, and failure modes.",
        es: "Anclar realidad monitor/inspector, tácticas revisión FDA Inspection Guides, expectativas gestión ensayo ICH E6(R3) Section 5 y modos de falla.",
      },
      keyPoints: [
        {
          en: "FDA Inspection Guides: emphasize contemporaneous records, traceability, and credible reconstruction—inspectors drill until the story matches artifacts.",
          es: "FDA Inspection Guides: enfatizan registros contemporáneos, trazabilidad y reconstrucción creíble—inspectores cavan hasta que la historia coincida con artefactos.",
        },
        {
          en: "ICH E6(R3) Section 5: quality system and trial-management controls should make monitoring effective; if walkthroughs start with EDC, you signal weak oversight.",
          es: "ICH E6(R3) Section 5: sistema de calidad y controles de gestión del ensayo deben hacer efectiva la monitoría; si walkthroughs inician con EDC, señalizas supervisión débil.",
        },
        {
          en: "Source primacy: EDC transcribes source; defending from EDC first invites source-inversion pressure.",
          es: "Primacía fuente: EDC transcribe fuente; defender desde EDC primero invita presión inversión fuente.",
        },
        {
          en: "Pattern hunting: three similar issues → systemic CAPA expectation per FDA Inspection Guides pattern themes.",
          es: "Pattern hunting: tres problemas similares → expectativa CAPA sistémica según temas patrón FDA Inspection Guides.",
        },
        {
          en: "Real-world workflow — Pre-visit (24h): prioritize subjects; tab source; bookmark EDC; PI availability or escalation.",
          es: "Flujo real — Pre-visita (24h): priorizar sujetos; tabular fuente; marcar EDC; disponibilidad PI o escalamiento.",
        },
        {
          en: "Real-world workflow — During: source → EDC → query; answer only what is asked; queue concurrent requests with timestamps.",
          es: "Flujo real — Durante: fuente → EDC → query; responder solo lo preguntado; cola solicitudes concurrentes con marcas.",
        },
        {
          en: "Real-world workflow — Post-visit (≤48h): LFE review; CAPA with owners/dates aligned to ICH E6(R3) Section 5 follow-through.",
          es: "Flujo real — Post-visita (≤48h): revisión LFE; CAPA con responsables/fechas alineadas seguimiento ICH E6(R3) Section 5.",
        },
        {
          en: "Error-prone 1 — Blank/missing source pages during live walkthrough.",
          es: "Propensa 1 — Páginas fuente en blanco/faltantes en walkthrough en vivo.",
        },
        {
          en: "Error-prone 2 — EDC narratives cleaner than source with identical phrasing across subjects.",
          es: "Propensa 2 — Narrativas EDC más limpias que fuente con frases idénticas entre sujetos.",
        },
        {
          en: "Error-prone 3 — Batch PI signatures for past oversight during visit week.",
          es: "Propensa 3 — Firmas PI en lote por supervisión pasada en semana visita.",
        },
        {
          en: "Error-prone 4 — Same query types recurring across many subjects with no systemic CAPA.",
          es: "Propensa 4 — Mismos tipos query recurrentes en muchos sujetos sin CAPA sistémica.",
        },
        {
          en: "Error-prone 5 — Off-the-record ‘fix the source’ suggestions before LFE.",
          es: "Propensa 5 — Sugerencias off-the-record ‘arregla la fuente’ antes del LFE.",
        },
        {
          en: "Cross-links: M11/M12 source and EDC integrity; M4 logs; M16 inspection.",
          es: "Vínculos: M11/M12 integridad fuente y EDC; M4 logs; M16 inspección.",
        },
      ],
    },
    {
      lessonId: "M13.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Monitor requests walkthrough of Subject 091 Visit 8 AE onset; align explanation to FDA Inspection Guides evidence style.",
        es: "Monitor pide walkthrough inicio AE Sujeto 091 Visita 8; alinear explicación a estilo evidencia FDA Inspection Guides.",
      },
      keyPoints: [
        {
          en: "Inputs: source ‘new headache x1 day’; EDC onset prior day; query closed ‘per source’.",
          es: "Insumos: fuente ‘cefalea nueva x1 día’; EDC inicio día previo; query cerrada ‘per source’.",
        },
        {
          en: "How to think: start with dated source note; show how text supports onset; then EDC history and closure rationale—ICH E6(R3) Section 5 expects coherent oversight trail.",
          es: "Cómo pensar: iniciar nota fuente fechada; mostrar cómo texto soporta inicio; luego historial EDC y racional cierre—ICH E6(R3) Section 5 espera trazo coherente supervisión.",
        },
        {
          en: "Decision: if mismatch real, reopen query with attributable correction plan—never bluff.",
          es: "Decisión: si desajuste real, reabrir query con plan corrección atribuible—nunca farolear.",
        },
      ],
    },
    {
      lessonId: "M13.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Monitor suggests rewording source to match EDC before the LFE to ‘clean’ eligibility queries.",
        es: "Monitor sugiere reword fuente para coincidir EDC antes del LFE para ‘limpiar’ queries elegibilidad.",
      },
      keyPoints: [
        {
          en: "Incorrect move: edit source narrative to match EDC—violates source primacy and FDA Inspection Guides credibility tests.",
          es: "Movimiento incorrecto: editar narrativa fuente para coincidir EDC—viola primacía fuente y pruebas credibilidad FDA Inspection Guides.",
        },
        {
          en: "Correct move: decline; offer PI + QA review per SOP; document suggestion; correct EDC from source if wrong—ICH E6(R3) Section 5 expects documented quality decisions.",
          es: "Movimiento correcto: rechazar; ofrecer revisión PI + QA según SOP; documentar sugerencia; corregir EDC desde fuente si está mal—ICH E6(R3) Section 5 espera decisiones calidad documentadas.",
        },
        {
          en: "Why it matters: off-the-record integrity pressure is a misconduct-risk theme in inspections.",
          es: "Por qué importa: presión integridad off-the-record es tema riesgo mala conducta en inspecciones.",
        },
      ],
    },
    {
      lessonId: "M13.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "PI unavailable two hours; monitor pushes immediate BP pattern CAPA; concurrent CTMS vs EDC date conflict unresolved.",
        es: "PI no disponible dos horas; monitor empuja CAPA inmediata patrón PA; conflicto fechas CTMS vs EDC sin resolver.",
      },
      keyPoints: [
        {
          en: "What CRC sees: legitimate urgency vs pressure to commit without PI input.",
          es: "Qué ve el CRC: urgencia legítima vs presión a comprometer sin aporte PI.",
        },
        {
          en: "How to think: contain with interim facts (source-first triage), document unknowns, schedule PI attestation—FDA Inspection Guides reward transparent handling over bluffing.",
          es: "Cómo pensar: contener con hechos interinos (triage fuente-primero), documentar desconocidos, programar atestación PI—FDA Inspection Guides premian manejo transparente sobre farolear.",
        },
        {
          en: "Decision: partial containment checklist now + dated CAPA charter after PI—per ICH E6(R3) Section 5 accountability.",
          es: "Decisión: checklist contención parcial ahora + carta CAPA fechada tras PI—según rendición de cuentas ICH E6(R3) Section 5.",
        },
      ],
    },
    {
      lessonId: "M13.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 40,
      objective: {
        en: "Run the concurrent monitoring + inspection defense drill once under 40 minutes; cite FDA Inspection Guides and ICH E6(R3) Section 5 in D3 where substantive.",
        es: "Ejecutar simulacro defensa monitoría + inspección concurrente una vez bajo 40 minutos; citar FDA Inspection Guides e ICH E6(R3) Section 5 en D3 donde sea sustantivo.",
      },
      keyPoints: [
        {
          en: "Time box: 40 minutes. Speculation or source edits to please monitor = incomplete.",
          es: "Límite: 40 minutos. Especulación o ediciones fuente para complacer monitor = incompleto.",
        },
        {
          en: "Deliverables: risk table (D1), script (D2), CAPA + comms (D3) with regulatory anchors.",
          es: "Entregables: tabla riesgo (D1), guion (D2), CAPA + comunicación (D3) con anclajes regulatorios.",
        },
      ],
    },
    {
      lessonId: "M13.S5",
      title: { en: "5) Scoring matrix & inspection perspective", es: "5) Matriz de puntuación y perspectiva inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M13.RUB1; map behaviors to FDA Inspection Guides and ICH E6(R3) Section 5 review themes.",
        es: "Alinear calificación con M13.RUB1; mapear conductas a FDA Inspection Guides e ICH E6(R3) Section 5 temas revisión.",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; critical pathway on source primacy, integrity pressure, and systemic CAPA.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; vía crítica en primacía fuente, presión integridad y CAPA sistémica.",
        },
        {
          en: "FDA Inspection Guides: look for coordinated cleanup, batch signatures, and inconsistent timelines.",
          es: "FDA Inspection Guides: buscan limpieza coordinada, firmas en lote y líneas tiempo inconsistentes.",
        },
        {
          en: "ICH E6(R3) Section 5: quality management should make monitoring findings actionable with accountable owners.",
          es: "ICH E6(R3) Section 5: gestión calidad debe hacer hallazgos monitoría accionables con responsables.",
        },
      ],
    },
    {
      lessonId: "M13.S6",
      title: { en: "6) Answer framework (elite outputs + fail patterns)", es: "6) Marco de respuesta (salidas élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Produce walkthrough scripts and CAPA narratives that satisfy FDA Inspection Guides and ICH E6(R3) Section 5 tests.",
        es: "Producir guiones walkthrough y narrativas CAPA que cumplan pruebas FDA Inspection Guides e ICH E6(R3) Section 5.",
      },
      keyPoints: [
        {
          en: "Elite script: source pointer → fact → EDC/query link → unknown + follow-up → CAPA hook.",
          es: "Guion élite: puntero fuente → hecho → vínculo EDC/query → desconocido + seguimiento → gancho CAPA.",
        },
        {
          en: "Fail patterns: volunteering problems; debating off-record suggestions; promising PI statements you cannot support.",
          es: "Patrones falla: ofrecer problemas; debatir sugerencias off-record; prometer declaraciones PI no soportables.",
        },
      ],
    },
    {
      lessonId: "M13.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect monitoring defense to source, EDC, and inspection readiness.",
        es: "Conectar defensa monitoría a fuente, EDC y preparación inspección.",
      },
      keyPoints: [
        {
          en: "M11/M12: walkthrough credibility depends on upstream ALCOA+ and Part 11–visible EDC discipline.",
          es: "M11/M12: credibilidad walkthrough depende de ALCOA+ aguas arriba y disciplina EDC visible Part 11.",
        },
        {
          en: "M8/M10: visit and safety narratives must survive the same artifact tests.",
          es: "M8/M10: narrativas visita y seguridad deben sobrevivir mismas pruebas artefacto.",
        },
        {
          en: "OSCE.S4: consolidates monitor-facing performance under time pressure.",
          es: "OSCE.S4: consolida desempeño cara monitor bajo presión tiempo.",
        },
      ],
    },
    {
      lessonId: "M13.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit when walkthroughs fail FDA Inspection Guides or ICH E6(R3) Section 5 expectations.",
        es: "Hacer explícitas consecuencias cuando walkthroughs fallan expectativas FDA Inspection Guides o ICH E6(R3) Section 5.",
      },
      keyPoints: [
        {
          en: "Regulatory: 483 observations, warning letters, disqualification risk when patterns show data unreliability.",
          es: "Regulatorio: observaciones 483, warning letters, riesgo descalificación cuando patrones muestran datos no confiables.",
        },
        {
          en: "Sponsor: monitoring escalation, enrollment holds, for-cause inspection triggers.",
          es: "Patrocinador: escalamiento monitoría, holds inclusión, disparadores inspección for-cause.",
        },
        {
          en: "Site: loss of trust, repeat visits, CAPA overload without process change.",
          es: "Sitio: pérdida confianza, visitas repetidas, sobrecarga CAPA sin cambio proceso.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M13.E1",
      description: {
        en: "Missing source during live walkthrough—cannot meet FDA Inspection Guides reconstruction expectations.",
        es: "Fuente faltante durante walkthrough en vivo—no se cumplen expectativas reconstrucción FDA Inspection Guides.",
      },
      risk: {
        en: "Major scrutiny; delayed close; data credibility questioned.",
        es: "Escrutinio mayor; cierre retrasado; credibilidad datos cuestionada.",
      },
      expectedLearnerResponse: {
        en: "No invention; locate originals; deviation; follow-up timeline with QA.",
        es: "Sin invención; ubicar originales; desviación; cronograma seguimiento con QA.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M13.E2",
      description: {
        en: "EDC cleaner than source with duplicated phrasing—pattern FDA Inspection Guides flag as backfill suspicion.",
        es: "EDC más limpio que fuente con frases duplicadas—patrón FDA Inspection Guides marca como sospecha relleno.",
      },
      risk: {
        en: "Integrity interview escalation.",
        es: "Escalamiento entrevista integridad.",
      },
      expectedLearnerResponse: {
        en: "Freeze edits; reconcile to source; truthful timeline; QA CAPA on templates.",
        es: "Congelar ediciones; reconciliar con fuente; línea tiempo veraz; CAPA QA en plantillas.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M13.E3",
      description: {
        en: "Batch PI signatures for past dates during monitoring week—contradicts ICH E6(R3) Section 5 contemporaneous oversight narrative.",
        es: "Firmas PI en lote por fechas pasadas en semana monitoría—contradice narrativa supervisión contemporánea ICH E6(R3) Section 5.",
      },
      risk: {
        en: "Non-contemporaneous oversight appearance.",
        es: "Apariencia supervisión no contemporánea.",
      },
      expectedLearnerResponse: {
        en: "Honest documentation; same-day review SOP; QA sampling.",
        es: "Documentación honesta; SOP revisión mismo día; muestreo QA.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M13.E4",
      description: {
        en: "Recurring query types across many subjects without systemic CAPA—fails ICH E6(R3) Section 5 preventive quality expectation.",
        es: "Tipos query recurrentes en muchos sujetos sin CAPA sistémica—falla expectativa calidad preventiva ICH E6(R3) Section 5.",
      },
      risk: {
        en: "Major monitoring finding; inspection magnet.",
        es: "Hallazgo mayor monitoría; imán inspección.",
      },
      expectedLearnerResponse: {
        en: "Trend; owners; dates; metrics; show monitor prevention.",
        es: "Tendencia; responsables; fechas; métricas; mostrar prevención monitor.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M13.E5",
      description: {
        en: "Off-record pressure to alter source before LFE—integrity breach path under FDA Inspection Guides.",
        es: "Presión off-record para alterar fuente antes LFE—vía brecha integridad bajo FDA Inspection Guides.",
      },
      risk: {
        en: "Misconduct risk; sponsor escalation.",
        es: "Riesgo mala conducta; escalamiento patrocinador.",
      },
      expectedLearnerResponse: {
        en: "Decline; document; QA; preserve source; EDC correction only from source truth.",
        es: "Rechazar; documentar; QA; preservar fuente; corrección EDC solo desde verdad fuente.",
      },
      relatedDimensions: ["R", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M13.EX1",
      name: {
        en: "Monitoring + inspection defense — FDA Inspection Guides & ICH E6(R3) Section 5",
        es: "Defensa monitoría + inspección — FDA Inspection Guides e ICH E6(R3) Section 5",
      },
      scenario: {
        en: "Concurrent FDA inspector + CRO monitor visit. Defend Subject 091 in real time: bulk signatures flagged; BP discrepancy with falsely closed query; repeated eligibility query pattern; CTMS vs EDC date conflict; PI unavailable two hours; pressure to fix sources before report. Sources conflict by design.",
        es: "Visita concurrente inspector FDA + monitor CRO. Defender Sujeto 091 en tiempo real: firmas en lote señaladas; discrepancia PA con query cerrada falsamente; patrón repetido queries elegibilidad; conflicto fechas CTMS vs EDC; PI no disponible dos horas; presión arreglar fuentes antes reporte. Fuentes chocan a propósito.",
      },
      inputs: [
        { inputId: "M13.IN1", label: { en: "Subject 091 source + vitals bundle", es: "Bundle fuente + signos Sujeto 091" }, inputKind: "mock_ehr" },
        { inputId: "M13.IN2", label: { en: "EDC query thread + closure notes", es: "Hilo queries EDC + notas cierre" }, inputKind: "export" },
        { inputId: "M13.IN3", label: { en: "CTMS enrollment/date extract", es: "Extracto CTMS inclusión/fechas" }, inputKind: "table" },
        { inputId: "M13.IN4", label: { en: "Monitor pressure email + LFE draft", es: "Correo presión monitor + borrador LFE" }, inputKind: "bundle" },
        { inputId: "M13.IN5", label: { en: "FDA Inspection Guides excerpt (records / walkthrough conduct)", es: "Extracto FDA Inspection Guides (registros / conducta walkthrough)" }, inputKind: "pdf" },
        { inputId: "M13.IN6", label: { en: "ICH E6(R3) Section 5 excerpt (trial mgmt / quality)", es: "Extracto ICH E6(R3) Section 5 (gestión ensayo / calidad)" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "Rank four highest audit risks with FDA Inspection Guides–style rationale (pattern, contemporaneity, or traceability). Deliver a two-minute BP walkthrough script (D2) that starts in source and ends with query/EDC linkage. Document monitor pressure and refuse any integrity-shortcut path. Identify systemic eligibility-query pattern; propose immediate containment plus long-term CAPA with owners/dates grounded in ICH E6(R3) Section 5. Draft PI communication plan for unavailability window. D3 must explicitly name FDA Inspection Guides and ICH E6(R3) Section 5 at least once each and tie each citation to a concrete control, risk, or CAPA element in the packet.",
        es: "Rankear cuatro riesgos auditoría mayores con racional estilo FDA Inspection Guides (patrón, contemporaneidad o trazabilidad). Entregar guion walkthrough PA dos minutos (D2) que inicia en fuente y termina con vínculo query/EDC. Documentar presión monitor y rechazar cualquier atajo integridad. Identificar patrón sistémico queries elegibilidad; proponer contención inmediata más CAPA largo plazo con responsables/fechas fundamentados ICH E6(R3) Section 5. Redactar plan comunicación PI para ventana no disponibilidad. D3 debe nombrar explícitamente FDA Inspection Guides e ICH E6(R3) Section 5 al menos una vez cada uno y enlazar cada cita a un control, riesgo o elemento CAPA concreto del paquete.",
      },
      deliverables: [
        { deliverableId: "M13.D1", label: { en: "Audit-risk ranking + rationale", es: "Ranking riesgo auditoría + justificación" }, formatHint: "table" },
        { deliverableId: "M13.D2", label: { en: "Two-minute walkthrough script (BP defense)", es: "Guion walkthrough 2 minutos (defensa PA)" }, formatHint: "short_memo" },
        {
          deliverableId: "M13.D3",
          label: {
            en: "CAPA + communication plan (cite FDA Inspection Guides + ICH E6(R3) Section 5)",
            es: "CAPA + plan comunicación (citar FDA Inspection Guides + ICH E6(R3) Section 5)",
          },
          formatHint: "pdf",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M13.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M13.C1",
        description: {
          en: "Walkthrough defense starts with source and preserves coherent evidence chain to EDC/query; artifact-first style consistent with FDA Inspection Guides review expectations.",
          es: "Defensa walkthrough inicia en fuente y preserva cadena evidencia coherente a EDC/query; estilo primero artefacto consistente expectativas revisión FDA Inspection Guides.",
        },
        points: 35,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Critical fail if starts with EDC, gives unsupported explanations, or fabricates facts to satisfy monitor/inspector.",
          es: "Falla crítica si inicia con EDC, da explicaciones sin soporte o fabrica hechos para satisfacer monitor/inspector.",
        },
      },
      {
        criterionId: "M13.C2",
        description: {
          en: "Communication control: answers only what is asked; no speculation; no undocumented volunteering; verify-and-follow-up when uncertain—aligned with professional conduct under FDA Inspection Guides interviews.",
          es: "Control comunicación: responde solo lo preguntado; sin especulación; sin ofrecer no documentado; verificar y seguir cuando incierto—alineado conducta profesional entrevistas FDA Inspection Guides.",
        },
        points: 25,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Critical fail if speculates, introduces new undocumented facts, or volunteers unfounded issues.",
          es: "Falla crítica si especula, introduce hechos nuevos no documentados u ofrece temas infundados.",
        },
      },
      {
        criterionId: "M13.C3",
        description: {
          en: "Resists off-the-record source inversion/backdating pressure; documents suggestion and escalates via QA—ICH E6(R3) Section 5 governance path.",
          es: "Resiste presión off-record inversión fuente/backdating; documenta sugerencia y escala vía QA—vía gobierno ICH E6(R3) Section 5.",
        },
        points: 25,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Fail if agrees to modify source to match EDC, endorses batch signatures to clear findings, or hides pressure from governance.",
          es: "Falla si acepta modificar fuente para coincidir EDC, avala firmas en lote para limpiar hallazgos u oculta presión del gobierno.",
        },
      },
      {
        criterionId: "M13.C4",
        description: {
          en: "Pattern hunting → systemic CAPA with owners/dates/metrics; D3 cites FDA Inspection Guides and ICH E6(R3) Section 5 as required; PI communication plan for gap window.",
          es: "Pattern hunting → CAPA sistémica con responsables/fechas/métricas; D3 cita FDA Inspection Guides e ICH E6(R3) Section 5 como se exige; plan comunicación PI para ventana brecha.",
        },
        points: 15,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Critical fail if treats repeated issues as isolated only, proposes case-only fixes without controls, or omits required FDA Inspection Guides / ICH E6(R3) Section 5 citations in D3.",
          es: "Falla crítica si trata problemas repetidos solo como aislados, propone arreglos solo caso sin controles u omite citas requeridas FDA Inspection Guides / ICH E6(R3) Section 5 en D3.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.28,
      aggregationKey: "fda_inspection_guides_ich_e6_r3_section5_monitoring_defense_governance",
    },
    {
      dimension: "Q",
      weight: 0.32,
      aggregationKey: "monitor_walkthrough_evidence_chain_query_defense_and_source_primacy",
    },
    {
      dimension: "O",
      weight: 0.28,
      aggregationKey: "monitoring_visit_execution_triage_and_pattern_to_capa_conversion",
    },
    {
      dimension: "C",
      weight: 0.12,
      aggregationKey: "clinical_plausibility_when_source_and_edc_conflict_in_walkthroughs",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S4 is the monitoring-readiness station: PD/query truthfulness and sponsor-facing communication under time pressure—the same FDA Inspection Guides–style evidence discipline and ICH E6(R3) Section 5 quality behaviors as this module.",
      es: "OSCE.S4 es la estación preparación monitoría: veracidad PD/query y comunicación cara patrocinador bajo presión—la misma disciplina evidencia estilo FDA Inspection Guides y conductas calidad ICH E6(R3) Section 5 que este módulo.",
    },
    stationIds: ["OSCE.S4"],
  },
  tags: ["audit_readiness", "traceability", "data_integrity", "operational", "regulatory", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Module anchors: FDA Inspection Guides (inspection/review conduct and documentation expectations) and ICH E6(R3) Section 5 (trial management and quality system themes tied to monitoring). Keep CRA, CRO, LFE, EDC, CTMS, CAPA, ALCOA+ as EN tokens where common.",
    es: "Anclajes del módulo: FDA Inspection Guides (conducta inspección/revisión y expectativas documentación) e ICH E6(R3) Section 5 (temas gestión ensayo y sistema calidad ligados a monitoría). Mantener CRA, CRO, LFE, EDC, CTMS, CAPA, ALCOA+ como tokens EN donde sea habitual.",
  },
};
