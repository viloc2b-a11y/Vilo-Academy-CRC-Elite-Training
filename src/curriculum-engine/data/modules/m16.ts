// src/curriculum-engine/data/modules/m16.ts

import type { Module } from "../../types";
import { CAPSTONE_STATION_IDS, CAPSTONE_STATIONS_BY_ID } from "../capstone";

const STATION_REVIEW_KEYPOINTS = CAPSTONE_STATION_IDS.map((id) => {
  const station = CAPSTONE_STATIONS_BY_ID[id];
  return {
    en: `${id} — ${station.title.en}: ${station.scenario.title.en}`,
    es: `${id} — ${station.title.es}: ${station.scenario.title.es}`,
  };
});

export const MODULE_M16: Module = {
  id: "M16",
  slug: "mock-study-capstone-osce",
  internalName: "mod_16_capstone_osce",
  category: "capstone",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "C", "Q"],
  title: {
    en: "Mock study capstone — OSCE integrated assessment",
    es: "Capstone simulado — evaluación integrada OSCE",
  },
  objective: {
    en: "Demonstrate integrated R/O/C/Q competence across multi-station simulation; scored attempts feed the same certification path as data/capstone.ts stations. M9 (pre-capstone) covers investigational product—not ALCOA+ as a standalone topic. Cross-cutting ALCOA+ is grounded in M4 and re-tested under time pressure at OSCE.S5 (source documentation & ALCOA+ repair).",
    es: "Demostrar competencia integrada R/O/C/Q en simulación multi-estación; los intentos puntuados alimentan el mismo camino de certificación que las estaciones en data/capstone.ts. M9 (pre-capstone) cubre producto investigacional—no ALCOA+ como tema aislado. El ALCOA+ transversal se basa en M4 y se reevalúa bajo presión temporal en OSCE.S5 (documentación fuente y reparación ALCOA+).",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Writes down, for OSCE.S1–S5, the primary seeded defect, the station’s mappedDimensions, and the one fail trigger key that would hard-stop the station.",
          es: "Escribe, para OSCE.S1–S5, el defecto sembrado principal, mappedDimensions de la estación y el triggerKey de fallo que pararía duro la estación.",
        },
        {
          en: "Locates each station’s dimensionFloor values and states which dimension is tightest for that scenario.",
          es: "Ubica los dimensionFloor de cada estación e indica qué dimensión es más estricta en ese escenario.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Completes all five stations in registry order with time-boxed outputs: each station yields a rubric row per criterionId and a one-paragraph handoff to the next station.",
          es: "Completa las cinco estaciones en orden de registro con entregas acotadas en tiempo: cada estación produce fila de rúbrica por criterionId y un párrafo de traspaso a la siguiente.",
        },
        {
          en: "Keeps subject identifiers, consent version, AE classification, log rows, and source repair language consistent across handoffs (no silent rewrites).",
          es: "Mantiene identificadores, versión de consentimiento, clasificación AE, filas de log y lenguaje de reparación en fuente consistentes entre traspasos (sin reescrituras silenciosas).",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Prioritizes stopping unsafe pathways (randomization, dosing, incomplete expedited notification) over ‘finishing the station’ when facts conflict.",
          es: "Prioriza detener vías inseguras (aleatorización, dosificación, notificación expedita incompleta) sobre ‘terminar la estación’ cuando los hechos chocan.",
        },
        {
          en: "Chooses remediation that addresses the station fail trigger explicitly (e.g., eligibility_trace_break, pd_concealment) rather than generic apologies.",
          es: "Elige remediación que aborda explícitamente el disparador (p. ej., eligibility_trace_break, pd_concealment) en lugar de disculpas genéricas.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M16.L1",
      title: {
        en: "OSCE mechanics: clocks, materials, and what evaluators may not answer",
        es: "Mecánica OSCE: tiempos, materiales y qué no deben responder evaluadores",
      },
      lessonType: "reading",
      objective: {
        en: "Treat each station as a closed book except the inputs listed in data/capstone.ts.",
        es: "Tratar cada estación como libro cerrado salvo insumos listados en data/capstone.ts.",
      },
      keyPoints: [
        {
          en: "No coaching between stations; each station uses its own rubric in data/capstone.ts.",
          es: "Sin coaching entre estaciones; cada estación usa su rúbrica en data/capstone.ts.",
        },
        {
          en: "Certification blends pre-capstone module rubrics—M4 (logs/traceability & ALCOA+ anchor), M8 (pre-screen vs regulatory screening boundaries; visit-window integrity; randomization and near-miss control; deviation recognition and escalation; timing impact on critical data and primary endpoints), M9 (investigational product: receipt-to-disposition; pharmacy/CRC ownership; cold chain & excursions; audit-grade quantity accountability)—with the OSCE aggregate via CAPSTONE_WEIGHT. M9 is IP/pharmacy accountability, not the ALCOA+ home. ALCOA+ stays cross-cutting: flagship depth in M4, then OSCE.S5 specifically re-validates source documentation & ALCOA+ repair.",
          es: "La certificación mezcla rúbricas de módulos pre-capstone—M4 (logs/trazabilidad y ancla ALCOA+), M8 (límites pre-screen vs screening regulatorio; integridad de ventanas de visita; control de randomización y near-miss; reconocimiento y escalamiento de desviaciones; impacto de tiempos en datos críticos y endpoints primarios), M9 (producto investigacional: recepción a disposición; propiedad farmacia/CRC; cadena de frío y excursiones; contabilidad de cantidades nivel auditoría)—con el agregado OSCE vía CAPSTONE_WEIGHT. M9 es contabilidad IP/farmacia, no el hogar de ALCOA+. ALCOA+ permanece transversal: profundidad flagship en M4, y OSCE.S5 revalida específicamente documentación fuente y reparación ALCOA+.",
        },
        {
          en: "If you exceed station time, submit partial work with explicit ‘still open’ risks—silent omissions fail harder than honest incompletes.",
          es: "Si excedes tiempo, entrega trabajo parcial con riesgos ‘aún abiertos’ explícitos—omisiones silenciosas fallan más que incompletos honestos.",
        },
      ],
    },
    {
      lessonId: "M16.L2",
      title: { en: "Station map — scenarios in registry order", es: "Mapa de estaciones — escenarios en orden del registro" },
      lessonType: "recap",
      objective: {
        en: "Map each registry station to its scenario title, primary defect, and dimensions.",
        es: "Mapear cada estación del registro a título de escenario, defecto principal y dimensiones.",
      },
      keyPoints: STATION_REVIEW_KEYPOINTS,
    },
  ],
  errorLibrary: [
    {
      errorId: "M16.E1",
      description: {
        en: "Learner averages rubric scores across stations and marks ‘pass’ despite one stationFail on eligibility_trace_break.",
        es: "Promedia puntajes entre estaciones y marca ‘pass’ pese a stationFail por eligibility_trace_break.",
      },
      risk: {
        en: "Invalid certification state; safety gate bypass.",
        es: "Estado de certificación inválido; bypass de barrera de seguridad.",
      },
      expectedLearnerResponse: {
        en: "Hold certification; open remediation ticket keyed to trigger; re-attempt failed station.",
        es: "Retener certificación; ticket de remediación con trigger; reintento de estación fallida.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M16.E2",
      description: {
        en: "Handoff paragraph changes subject initials between S2 and S3 to ‘make the chart read cleaner’.",
        es: "Párrafo de traspaso cambia iniciales del sujeto entre S2 y S3 para ‘que el chart lea más limpio’.",
      },
      risk: {
        en: "Traceability break; automatic OSCE fail at integration criterion.",
        es: "Ruptura de trazabilidad; fallo OSCE automático en criterio de integración.",
      },
      expectedLearnerResponse: {
        en: "Restore consistent identifiers; document erratum; notify proctor per rules.",
        es: "Restaurar identificadores consistentes; documentar errata; notificar según reglas.",
      },
      relatedDimensions: ["Q", "O"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M16.EX.OSCE",
      name: { en: "Full OSCE attempt", es: "Intento OSCE completo" },
      scenario: {
        en: `Execute stations in order: ${CAPSTONE_STATION_IDS.join(" → ")}; each station injects defects described in data/capstone.ts.`,
        es: `Ejecutar estaciones en orden: ${CAPSTONE_STATION_IDS.join(" → ")}; cada estación inyecta defectos descritos en data/capstone.ts.`,
      },
      inputs: [
        {
          inputId: "M16.IN1",
          label: { en: "Capstone station bundle", es: "Paquete de estaciones" },
          inputKind: "bundle",
          assetRef: "capstone.bundle.v1",
        },
      ],
      learnerTask: {
        en: "Submit per-station rubric scoresheets keyed by criterionIds from each station rubric; aggregate fails; draft remediation list if any stationFail.",
        es: "Entregar hojas por estación con criterionIds de cada rúbrica; agregar fallos; lista de remediación si stationFail.",
      },
      deliverables: [
        { deliverableId: "M16.D1", label: { en: "OSCE score export (JSON)", es: "Export de puntajes OSCE (JSON)" }, formatHint: "json" },
      ],
    },
    {
      exerciseId: "M16.EX.CRISIS",
      name: { en: "Final crisis simulation — post-OSCE integration", es: "Simulación final de crisis — integración post-OSCE" },
      scenario: {
        en: "Immediately after completing OSCE.S1–S6, you enter a 15–20 minute integrated crisis: concurrent inspector/monitor pressure, cross-station consistency checks, and a final ‘what is still open’ risk register. This phase exists to simulate real inspection day: time-boxed, incomplete facts, and irreversible integrity constraints.",
        es: "Inmediatamente después de completar OSCE.S1–S6, entras a una crisis integrada de 15–20 minutos: presión concurrente inspector/monitor, chequeos de consistencia entre estaciones y un registro final de riesgos ‘aún abiertos’. Esta fase simula un día real de inspección: acotado en tiempo, hechos incompletos y restricciones de integridad irreversibles.",
      },
      inputs: [
        { inputId: "M16.IN2", label: { en: "Your OSCE artifacts (score sheets + handoffs)", es: "Tus artefactos OSCE (hojas + handoffs)" }, inputKind: "export" },
      ],
      learnerTask: {
        en: "In 15–20 minutes: (1) list the top 5 open risks across stations (patient/data/compliance), (2) write one 5–7 sentence audit-facing summary that stays consistent with your prior station outputs, and (3) state one immediate containment action and one system CAPA theme. Do not invent facts to ‘make things consistent’; if facts are uncertain, label known vs unknown.",
        es: "En 15–20 minutos: (1) listar top 5 riesgos abiertos entre estaciones (paciente/datos/cumplimiento), (2) escribir un resumen orientado a auditoría de 5–7 oraciones consistente con tus salidas previas, y (3) declarar una contención inmediata y un tema de CAPA sistémica. No inventar hechos para ‘hacer consistente’; si hay incertidumbre, separar conocido vs desconocido.",
      },
      deliverables: [
        { deliverableId: "M16.D2", label: { en: "Open-risk register (top 5)", es: "Registro de riesgos abiertos (top 5)" }, formatHint: "table" },
        { deliverableId: "M16.D3", label: { en: "Audit-facing final summary", es: "Resumen final orientado a auditoría" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M16.RUB.AGG",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M16.C1",
        description: {
          en: "Every station meets its dimensionFloor; no critical failConditions in data/capstone.ts fire; stationFail flags are honestly reflected in the aggregate.",
          es: "Cada estación cumple su dimensionFloor; no se disparan failConditions críticas en data/capstone.ts; flags stationFail reflejados con honestidad en agregado.",
        },
        points: 50,
        mapsToDimensions: ["R", "O", "C", "Q"],
        failCondition: {
          en: "Any station scored ‘pass’ while omitting a seeded defect that station’s rubric weights ≥20 points, or any critical triggerKey is met.",
          es: "Cualquier estación en ‘pass’ omitiendo defecto sembrado con peso ≥20 puntos en su rúbrica, o cualquier triggerKey crítico activado.",
        },
      },
      {
        criterionId: "M16.C2",
        description: {
          en: "Cross-station integration: same subject, consent version, AE class, log rows, and source repair narrative align without contradiction.",
          es: "Integración entre estaciones: mismo sujeto, versión de consentimiento, clase AE, filas de log y narrativa de reparación en fuente alineadas sin contradicción.",
        },
        points: 30,
        mapsToDimensions: ["Q", "C"],
        failCondition: {
          en: "Handoff introduces new facts, dates, or IDs not authorized by prior stations’ artifacts.",
          es: "El traspaso introduce hechos, fechas o IDs no autorizados por artefactos de estaciones previas.",
        },
      },
      {
        criterionId: "M16.C3",
        description: {
          en: "Audit-facing communication: factual, cites logs/source positions, separates known vs inferred, names open risks.",
          es: "Comunicación orientada a auditoría: factual, cita posiciones en logs/fuente, separa conocido vs inferido, nombra riesgos abiertos.",
        },
        points: 20,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Uses blame language, speculative certainty, or omits a discrepancy already visible in the station packet.",
          es: "Usa lenguaje de culpa, certeza especulativa u omite discrepancia ya visible en el paquete de estación.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.25,
      aggregationKey: "osce_integrated_regulatory_judgment_and_escalation",
    },
    {
      dimension: "O",
      weight: 0.25,
      aggregationKey: "osce_workflow_execution_and_cross_station_handoffs",
    },
    {
      dimension: "C",
      weight: 0.25,
      aggregationKey: "osce_patient_safety_first_clinical_calls",
    },
    {
      dimension: "Q",
      weight: 0.25,
      aggregationKey: "osce_data_source_and_traceability_defense",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "Terminal module: stationIds mirror CAPSTONE_STATION_IDS from data/capstone.ts (single registry).",
      es: "Módulo terminal: stationIds reflejan CAPSTONE_STATION_IDS en data/capstone.ts (registro único).",
    },
    stationIds: [...CAPSTONE_STATION_IDS],
  },
  tags: ["capstone_related", "audit_readiness", "clinical_judgment", "flagship", "bilingual"],
  bilingualNotes: {
    en: "OSCE remains standard term; expand once as ‘objective structured clinical examination’. Narrative: M9 rubric = IP; ALCOA+ capstone stress = OSCE.S5; ALCOA+ pre-capstone anchor = M4.",
    es: "OSCE permanece; expandir una vez como examen clínico estructurado objetivo. Narrativa: rúbrica M9 = IP; estrés ALCOA+ en capstone = OSCE.S5; ancla ALCOA+ pre-capstone = M4.",
  },
};
