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

/**
 * Module 16 — Mock study capstone (OSCE): integrated R/O/C/Q assessment.
 *
 * Technical / Regulatory Execution: eight ordered sections; three guided cases (clear / incorrect / ambiguous);
 * dual practical exercises; rubric 100 = sum(criteria.points); passing 94.
 *
 * Anchors: ACRP Certification (CRC professional competence, ethics, and inspection-ready conduct) and
 * ASHP Competency (pharmacy–clinical interface expectations for investigational product handling and communication).
 */
export const MODULE_M16: Module = {
  id: "M16",
  slug: "mock-study-capstone-osce",
  internalName: "mod_16_capstone_osce_acrp_ashp",
  category: "capstone",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "C", "Q"],
  title: {
    en: "Module 16 — Mock study capstone: OSCE integrated assessment",
    es: "Módulo 16 — Capstone simulado: evaluación integrada OSCE",
  },
  objective: {
    en: "Demonstrate integrated R/O/C/Q competence across the multi-station OSCE in `data/capstone.ts`, scored against each station rubric and this module aggregate. Self-assess and communicate performance using ACRP Certification expectations (professional judgment, subject protection, documentation integrity) and ASHP Competency framing for pharmacy–CRC interfaces (IP accountability, cold chain facts, handoff precision). M9 covers investigational product depth—not ALCOA+ in isolation; cross-cutting ALCOA+ is anchored in M4 and re-tested under time pressure at OSCE.S5. Terminal outputs must stay consistent with ACRP Certification ethics boundaries and ASHP Competency-aligned IP narratives—no silent rewrites, no averaged ‘pass’ across stations when a critical trigger fires.",
    es: "Demostrar competencia integrada R/O/C/Q en el OSCE multi-estación en `data/capstone.ts`, puntuado contra cada rúbrica de estación y el agregado de este módulo. Auto-evaluar y comunicar desempeño usando expectativas ACRP Certification (juicio profesional, protección del sujeto, integridad documental) y marco ASHP Competency para interfaz farmacia–CRC (contabilidad IP, hechos cadena de frío, precisión en traspasos). M9 cubre profundidad de producto investigacional—no ALCOA+ aislado; ALCOA+ transversal anclado en M4 y reevaluado bajo presión temporal en OSCE.S5. Salidas terminales deben permanecer coherentes con límites éticos ACRP Certification y narrativas IP alineadas ASHP Competency—sin reescrituras silenciosas ni ‘pass’ promediado entre estaciones cuando dispara un trigger crítico.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "For each registry station, states the primary seeded defect, mappedDimensions, and the fail trigger concept that would hard-stop unsafe progression—framed as ACRP Certification-level professional responsibility.",
          es: "Para cada estación del registro, declara el defecto sembrado principal, mappedDimensions y el concepto de trigger de fallo que detendría progresión insegura—enmarcado como responsabilidad profesional nivel ACRP Certification.",
        },
        {
          en: "Explains when ASHP Competency expectations apply to IP/study-drug facts (quantities, storage, pharmacy handoffs) versus CRC-only documentation tasks.",
          es: "Explica cuándo aplican expectativas ASHP Competency a hechos IP/medicamento ensayo (cantidades, almacenamiento, traspasos farmacia) vs tareas documentación solo CRC.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Completes stations in registry order with time-boxed outputs: rubric row per criterionId and a one-paragraph handoff that preserves identifiers, consent version, AE class, and source positions—meeting ACRP Certification traceability discipline.",
          es: "Completa estaciones en orden de registro con salidas acotadas en tiempo: fila de rúbrica por criterionId y párrafo de traspaso que preserva identificadores, versión de consentimiento, clase AE y posiciones en fuente—cumpliendo disciplina trazabilidad ACRP Certification.",
        },
        {
          en: "Coordinates pharmacy-facing facts in OSCE packets using ASHP Competency language boundaries (no invented lot times, no speculative storage states).",
          es: "Coordina hechos frente a farmacia en paquetes OSCE usando límites de lenguaje ASHP Competency (sin horarios de lote inventados, sin estados de almacenamiento especulativos).",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Prioritizes stopping unsafe pathways over ‘finishing the station’ when facts conflict; chooses remediation keyed to explicit triggerKeys rather than generic apologies—inspector-defensible under ACRP Certification standards.",
          es: "Prioriza detener vías inseguras sobre ‘terminar la estación’ cuando los hechos chocan; elige remediación ligada a triggerKeys explícitos en lugar de disculpas genéricas—defendible ante inspector bajo estándares ACRP Certification.",
        },
        {
          en: "After OSCE, produces an integrated crisis summary that separates known vs unknown, cites logs, and explicitly references ACRP Certification and ASHP Competency where substantive.",
          es: "Tras el OSCE, produce resumen integrado de crisis que separa conocido vs desconocido, cita logs y referencia explícitamente ACRP Certification y ASHP Competency donde sea sustantivo.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M16.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the bar: OSCE as certification gate, evaluated against station rubrics and ACRP Certification / ASHP Competency professional lenses.",
        es: "Establecer la barra: OSCE como compuerta de certificación, evaluado contra rúbricas de estación y lentes profesionales ACRP Certification / ASHP Competency.",
      },
      keyPoints: [
        {
          en: "Outputs: OSCE score export (D1), crisis risk table (D2), audit summary (D3) citing ACRP Certification and ASHP Competency where substantive.",
          es: "Salidas: export puntajes OSCE (D1), tabla riesgos crisis (D2), resumen auditoría (D3) citando ACRP Certification y ASHP Competency donde sea sustantivo.",
        },
        {
          en: "Technical tokens stay EN (ACRP Certification, ASHP Competency, OSCE, CAPA, ALCOA+, IP, triggerKey).",
          es: "Tokens técnicos permanecen en inglés (ACRP Certification, ASHP Competency, OSCE, CAPA, ALCOA+, IP, triggerKey).",
        },
        {
          en: "stationIds in this module mirror CAPSTONE_STATION_IDS from `data/capstone.ts`—single registry source of truth.",
          es: "stationIds en este módulo reflejan CAPSTONE_STATION_IDS de `data/capstone.ts`—registro único fuente de verdad.",
        },
      ],
    },
    {
      lessonId: "M16.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 26,
      objective: {
        en: "Anchor closed-book OSCE mechanics, ACRP Certification conduct expectations, ASHP Competency at the pharmacy interface, and station map.",
        es: "Anclar mecánica OSCE libro cerrado, conducta esperada ACRP Certification, ASHP Competency en interfaz farmacia y mapa de estaciones.",
      },
      keyPoints: [
        {
          en: "ACRP Certification lens: subject protection first; documentation that reconstructs study conduct; no coaching between stations.",
          es: "Lente ACRP Certification: protección del sujeto primero; documentación que reconstruye conducta del ensayo; sin coaching entre estaciones.",
        },
        {
          en: "ASHP Competency lens: CRC statements about IP must match pharmacy records; never smooth quantity or temperature narratives for convenience.",
          es: "Lente ASHP Competency: afirmaciones CRC sobre IP deben coincidir registros farmacia; nunca alisar narrativas de cantidad o temperatura por conveniencia.",
        },
        {
          en: "Certification blends pre-capstone module rubrics—M4 (logs/traceability & ALCOA+ anchor), M8 (pre-screen vs regulatory screening; visit windows; randomization control; deviations), M9 (IP receipt-to-disposition; cold chain; accountability)—with OSCE aggregate via CAPSTONE_WEIGHT. ALCOA+ stress at OSCE.S5 re-validates source repair after M4.",
          es: "La certificación mezcla rúbricas pre-capstone—M4 (logs/trazabilidad y ancla ALCOA+), M8 (pre-screen vs screening regulatorio; ventanas; control randomización; desviaciones), M9 (IP recepción a disposición; cadena frío; contabilidad)—con agregado OSCE vía CAPSTONE_WEIGHT. Estrés ALCOA+ en OSCE.S5 revalida reparación en fuente tras M4.",
        },
        {
          en: "If station time expires, submit partial work with explicit ‘still open’ risks—silent omissions fail harder than honest incompletes (ACRP Certification integrity norm).",
          es: "Si vence tiempo de estación, entregar trabajo parcial con riesgos ‘aún abiertos’ explícitos—omisiones silenciosas fallan más que incompletos honestos (norma integridad ACRP Certification).",
        },
        {
          en: "Error-prone 1 — Averaging station scores to ‘pass’ while ignoring a critical stationFail.",
          es: "Propensa 1 — Promediar puntajes de estación para ‘pass’ ignorando stationFail crítico.",
        },
        {
          en: "Error-prone 2 — Handoff rewrites subject IDs or dates to ‘make the packet read cleaner’.",
          es: "Propensa 2 — Traspaso reescribe IDs sujeto o fechas para ‘que el paquete lea más limpio’.",
        },
        {
          en: "Error-prone 3 — Inventing pharmacy/IP facts not present in the station packet (violates ASHP Competency boundary).",
          es: "Propensa 3 — Inventar hechos farmacia/IP no presentes en paquete estación (viola límite ASHP Competency).",
        },
        {
          en: "Error-prone 4 — Generic ‘retrain staff’ CAPA with no stop-line action when eligibility_trace_break is visible.",
          es: "Propensa 4 — CAPA genérica ‘reentrenar personal’ sin acción detener línea cuando eligibility_trace_break es visible.",
        },
        {
          en: "Error-prone 5 — Crisis summary blames individuals instead of systems; omits known discrepancies already in artifacts.",
          es: "Propensa 5 — Resumen crisis culpa a individuos en vez de sistemas; omite discrepancias ya visibles en artefactos.",
        },
        ...STATION_REVIEW_KEYPOINTS,
      ],
    },
    {
      lessonId: "M16.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 12,
      objective: {
        en: "OSCE.S1 packet: wet-lab fails inclusion but CTMS shows ‘pass’; randomization is booked Tuesday. What CRC sees: eligibility break with forward exposure. Decision: stop ID/randomization pathway; draft mini-CAPA with owner and dated containment—consistent with ACRP Certification duty to protect subjects.",
        es: "Paquete OSCE.S1: lab clínico falla inclusión pero CTMS muestra ‘pass’; aleatorización reservada martes. Qué ve el CRC: brecha elegibilidad con exposición futura. Decisión: detener vía ID/aleatorización; mini-CAPA con responsable y contención fechada—coherente con deber ACRP Certification de proteger sujetos.",
      },
      keyPoints: [
        {
          en: "Correct: halt progression; cite lab row vs CTMS row; notify per station rubric expectations—not optimism.",
          es: "Correcto: detener progresión; citar fila lab vs fila CTMS; notificar según expectativas rúbrica estación—no optimismo.",
        },
        {
          en: "ASHP Competency note: if this scenario later touches IP, do not proceed dispensing narratives until eligibility chain is clean.",
          es: "Nota ASHP Competency: si este escenario luego toca IP, no avanzar narrativas dispensación hasta que cadena elegibilidad esté limpia.",
        },
      ],
    },
    {
      lessonId: "M16.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 12,
      objective: {
        en: "Learner averages four ‘strong’ station scores with one borderline fail and marks overall OSCE pass ‘because mean is high.’ This is incorrect certification logic.",
        es: "Aprendiz promedia cuatro puntajes ‘fuertes’ con un fallo límite y marca pass OSCE global ‘porque la media es alta’. Es lógica de certificación incorrecta.",
      },
      keyPoints: [
        {
          en: "Incorrect: mean-score rationalization across stations; hides critical triggers and violates ACRP Certification integrity expectations for gatekeeping.",
          es: "Incorrecto: racionalización por media entre estaciones; oculta triggers críticos y viola expectativas integridad ACRP Certification para compuertas.",
        },
        {
          en: "Correct: honor per-station failConditions and capstone stationFail flags; remediate failed station before claiming competence.",
          es: "Correcto: respetar failConditions por estación y flags stationFail; remediar estación fallida antes de reclamar competencia.",
        },
      ],
    },
    {
      lessonId: "M16.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "90 seconds left on OSCE.S5: ALCOA+ repair paragraph is half-written; one more sentence could ‘close’ the narrative but requires inferring a fax timestamp not shown. No clean answer.",
        es: "Quedan 90 segundos en OSCE.S5: párrafo reparación ALCOA+ medio escrito; una oración más podría ‘cerrar’ narrativa pero requiere inferir marca temporal fax no mostrada. Sin respuesta limpia.",
      },
      keyPoints: [
        {
          en: "How to think: ACRP Certification favors explicit ‘unknown’ over speculative certainty; ASHP Competency similarly forbids inventing chain-of-custody facts.",
          es: "Cómo pensar: ACRP Certification favorece ‘desconocido’ explícito sobre certeza especulativa; ASHP Competency asimismo prohíbe inventar hechos cadena de custodia.",
        },
        {
          en: "Safe default: submit partial repair + list open queries needed; do not fabricate timestamp.",
          es: "Default seguro: entregar reparación parcial + listar queries abiertas necesarias; no fabricar marca temporal.",
        },
      ],
    },
    {
      lessonId: "M16.S4",
      title: { en: "4) Practical exercises (OSCE attempt + crisis integration)", es: "4) Ejercicios prácticos (intento OSCE + integración crisis)" },
      lessonType: "worksheet",
      durationMinutes: 45,
      objective: {
        en: "Execute the two linked exercises: full station attempt then post-OSCE crisis integration; keep ACRP Certification and ASHP Competency citations where substantive.",
        es: "Ejecutar los dos ejercicios vinculados: intento completo de estaciones luego integración crisis post-OSCE; mantener citas ACRP Certification y ASHP Competency donde sea sustantivo.",
      },
      keyPoints: [
        {
          en: "Exercise A: per-station rubric export keyed by criterionIds from `data/capstone.ts`.",
          es: "Ejercicio A: export rúbrica por estación con criterionIds de `data/capstone.ts`.",
        },
        {
          en: "Exercise B: 15–20 minute crisis—top risks, containment, system CAPA theme; D3 must reference ACRP Certification and ASHP Competency.",
          es: "Ejercicio B: crisis 15–20 minutos—riesgos top, contención, tema CAPA sistémica; D3 debe referenciar ACRP Certification y ASHP Competency.",
        },
      ],
    },
    {
      lessonId: "M16.S5",
      title: { en: "5) Scoring matrix & audit perspective", es: "5) Matriz de puntuación y perspectiva auditoría" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Align module aggregate M16.RUB1 with station rubrics; connect evaluators’ questions to ACRP Certification and ASHP Competency language.",
        es: "Alinear agregado módulo M16.RUB1 con rúbricas de estación; conectar preguntas evaluadores a lenguaje ACRP Certification y ASHP Competency.",
      },
      keyPoints: [
        {
          en: "Module rubric: 100 points, pass ≥94; station rubrics remain authoritative per station in `data/capstone.ts`.",
          es: "Rúbrica módulo: 100 puntos, aprobar ≥94; rúbricas de estación siguen autoritarias por estación en `data/capstone.ts`.",
        },
        {
          en: "Monitor pattern: cross-read OSCE handoff vs pharmacy accountability worksheet—ASHP Competency mismatch is a major finding risk.",
          es: "Patrón monitor: lectura cruzada traspaso OSCE vs hoja contabilidad farmacia—descuadre ASHP Competency es riesgo hallazgo mayor.",
        },
      ],
    },
    {
      lessonId: "M16.S6",
      title: { en: "6) Answer framework (elite handoffs + fail patterns)", es: "6) Marco de respuesta (traspasos élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Consolidate handoff paragraphs and crisis summaries that an ACRP Certification–minded auditor would accept.",
        es: "Consolidar párrafos de traspaso y resúmenes de crisis que un auditor con mentalidad ACRP Certification aceptaría.",
      },
      keyPoints: [
        {
          en: "Elite handoff: same subject line, consent version, AE class, log row citations, and explicit open risks carried forward.",
          es: "Traspaso élite: misma línea sujeto, versión consentimiento, clase AE, citas filas log y riesgos abiertos explícitos arrastrados.",
        },
        {
          en: "Fail patterns: score averaging; ID drift; speculative pharmacy facts; blame-only crisis tone.",
          es: "Patrones falla: promediar puntajes; deriva ID; hechos farmacia especulativos; tono crisis solo culpa.",
        },
      ],
    },
    {
      lessonId: "M16.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 8,
      objective: {
        en: "Connect capstone performance to M4, M8, M9, and inspection posture.",
        es: "Conectar desempeño capstone a M4, M8, M9 y postura inspección.",
      },
      keyPoints: [
        {
          en: "M4: ALCOA+ home; M16/OSCE.S5 re-stresses repair under clock pressure.",
          es: "M4: hogar ALCOA+; M16/OSCE.S5 re-estresa reparación bajo reloj.",
        },
        {
          en: "M8/M9: timing and IP facts feed OSCE stations; ASHP Competency is the bridge language for pharmacy questions.",
          es: "M8/M9: tiempos y hechos IP alimentan estaciones OSCE; ASHP Competency es lenguaje puente para preguntas farmacia.",
        },
        {
          en: "ACRP Certification: treat OSCE as professional gate—same ethical bar as live trial conduct.",
          es: "ACRP Certification: tratar OSCE como compuerta profesional—misma barra ética que conducta ensayo en vivo.",
        },
      ],
    },
    {
      lessonId: "M16.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 8,
      objective: {
        en: "Make consequences explicit for certification integrity, subjects, and sponsor trust.",
        es: "Hacer explícitas consecuencias para integridad de certificación, sujetos y confianza patrocinador.",
      },
      keyPoints: [
        {
          en: "False pass on OSCE corrupts downstream site reputation and erodes ACRP Certification meaning as a competence signal.",
          es: "Falso pass en OSCE corrompe reputación sitio aguas abajo y erosiona significado ACRP Certification como señal de competencia.",
        },
        {
          en: "IP narrative errors aligned with ASHP Competency gaps can become pharmacy board–visible serious quality events at integrated sites.",
          es: "Errores narrativa IP alineados con brechas ASHP Competency pueden volverse eventos calidad graves visibles ante junta farmacia en sitios integrados.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M16.E1",
      description: {
        en: "Obvious: averages rubric scores across stations and marks pass despite critical stationFail (e.g., eligibility_trace_break).",
        es: "Obvia: promedia puntajes entre estaciones y marca pass pese a stationFail crítico (p. ej., eligibility_trace_break).",
      },
      risk: {
        en: "Invalid certification state; safety gate bypass; violates ACRP Certification gatekeeping norms.",
        es: "Estado certificación inválido; bypass barrera seguridad; viola normas compuerta ACRP Certification.",
      },
      expectedLearnerResponse: {
        en: "Hold certification; open remediation keyed to triggerKey; re-attempt failed station with honest aggregate reporting.",
        es: "Retener certificación; abrir remediación ligada a triggerKey; reintentar estación fallida con reporte agregado honesto.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M16.E2",
      description: {
        en: "Subtle: handoff paragraph tweaks subject initials between stations to ‘make the chart read cleaner’.",
        es: "Sutil: párrafo de traspaso retoca iniciales del sujeto entre estaciones para ‘que el chart lea más limpio’.",
      },
      risk: {
        en: "Traceability break; automatic integration fail; destroys ACRP Certification documentation story.",
        es: "Ruptura trazabilidad; fallo integración automático; destruye narrativa documentación ACRP Certification.",
      },
      expectedLearnerResponse: {
        en: "Restore consistent identifiers; document erratum; notify proctor per rules; never silent cosmetic edits.",
        es: "Restaurar identificadores consistentes; documentar errata; notificar según reglas; nunca ediciones cosméticas silenciosas.",
      },
      relatedDimensions: ["Q", "O"],
    },
    {
      errorId: "M16.E3",
      description: {
        en: "Looks correct but wrong: ‘pharmacy confirmed verbally’ IP quantity narrative without matching accountability worksheet row (invents ASHP Competency evidence).",
        es: "Parece correcto pero está mal: narrativa cantidad IP ‘farmacia confirmó verbalmente’ sin fila coincidente de hoja contabilidad (inventa evidencia ASHP Competency).",
      },
      risk: {
        en: "Data integrity / serious breach risk at inspection; pharmacy–CRC credibility collapse.",
        es: "Riesgo integridad datos / brecha grave en inspepción; colapso credibilidad farmacia–CRC.",
      },
      expectedLearnerResponse: {
        en: "Quote only what is in packet; open query to pharmacy; state unknowns explicitly per ASHP Competency-aligned practice.",
        es: "Citar solo lo del paquete; abrir query a farmacia; declarar desconocidos explícitamente según práctica alineada ASHP Competency.",
      },
      relatedDimensions: ["Q", "C"],
    },
    {
      errorId: "M16.E4",
      description: {
        en: "Ambiguous: crisis summary must sound confident for sponsor call in 10 minutes, but two station facts still conflict in your artifacts.",
        es: "Ambigua: resumen crisis debe sonar confiado para llamada patrocinador en 10 minutos, pero dos hechos de estación aún chocan en tus artefactos.",
      },
      risk: {
        en: "Over-certainty creates false regulatory record; under-communication triggers sponsor escalation.",
        es: "Sobre-certidumbre crea registro regulatorio falso; sub-comunicación dispara escalamiento patrocinador.",
      },
      expectedLearnerResponse: {
        en: "Name conflict explicitly; choose containment that stops patient exposure first; schedule measured follow-up—ACRP Certification-aligned transparency.",
        es: "Nombrar conflicto explícitamente; elegir contención que detenga exposición paciente primero; programar seguimiento medido—transparencia alineada ACRP Certification.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M16.E5",
      description: {
        en: "Integration failure: crisis memo uses blame language and omits a discrepancy already visible in OSCE artifacts—fails audit tone despite ‘confident’ prose.",
        es: "Falla integración: memo crisis usa lenguaje de culpa y omite discrepancia ya visible en artefactos OSCE—falla tono auditoría pese a prosa ‘confiada’.",
      },
      risk: {
        en: "Inspector documents poor quality culture; repeats across sponsor portfolio.",
        es: "Inspector documenta cultura calidad pobre; se repite en portafolio patrocinador.",
      },
      expectedLearnerResponse: {
        en: "Factual tone; cite artifact positions; separate known vs inferred; system CAPA theme; cite ACRP Certification / ASHP Competency in D3 where substantive.",
        es: "Tono factual; citar posiciones en artefactos; separar conocido vs inferido; tema CAPA sistémica; citar ACRP Certification / ASHP Competency en D3 donde sea sustantivo.",
      },
      relatedDimensions: ["R", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M16.EX.OSCE",
      name: { en: "Full OSCE attempt", es: "Intento OSCE completo" },
      scenario: {
        en: `Execute stations in order: ${CAPSTONE_STATION_IDS.join(" → ")}; each station injects defects described in data/capstone.ts. Debrief in one paragraph: name one ACRP Certification strength and one ASHP Competency risk you observed in the station bundle (IP-related stations only for the ASHP element).`,
        es: `Ejecutar estaciones en orden: ${CAPSTONE_STATION_IDS.join(" → ")}; cada estación inyecta defectos descritos en data/capstone.ts. Debrief en un párrafo: nombrar una fortaleza ACRP Certification y un riesgo ASHP Competency observado en el paquete (solo estaciones relacionadas IP para el elemento ASHP).`,
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
        en: "Submit per-station rubric scoresheets keyed by criterionIds from each station rubric in data/capstone.ts; aggregate fails honestly; draft remediation list if any stationFail. Append a 5–8 sentence self-debrief that explicitly references ACRP Certification (professional judgment / subject protection) and ASHP Competency (pharmacy–CRC IP interface) with at least one concrete station example each—no generic praise.",
        es: "Entregar hojas por estación con criterionIds de cada rúbrica en data/capstone.ts; agregar fallos con honestidad; lista remediación si stationFail. Anexar auto-debrief 5–8 oraciones que referencie explícitamente ACRP Certification (juicio profesional / protección sujeto) y ASHP Competency (interfaz farmacia–CRC IP) con al menos un ejemplo concreto de estación cada uno—sin elogio genérico.",
      },
      deliverables: [
        { deliverableId: "M16.D1", label: { en: "OSCE score export (JSON) + debrief paragraph", es: "Export puntajes OSCE (JSON) + párrafo debrief" }, formatHint: "json" },
      ],
    },
    {
      exerciseId: "M16.EX.CRISIS",
      name: { en: "Final crisis simulation — post-OSCE integration", es: "Simulación final de crisis — integración post-OSCE" },
      scenario: {
        en: "Immediately after completing all registry stations, you enter a 15–20 minute integrated crisis: concurrent inspector/monitor pressure, cross-station consistency checks, and a final ‘what is still open’ risk register. Simulates inspection day: time-boxed, incomplete facts, irreversible integrity constraints. Evaluators may probe ACRP Certification conduct and ASHP Competency-aligned IP facts explicitly.",
        es: "Inmediatamente después de completar todas las estaciones del registro, entras a crisis integrada 15–20 minutos: presión concurrente inspector/monitor, chequeos consistencia entre estaciones y registro final riesgos ‘aún abiertos’. Simula día inspección: tiempo acotado, hechos incompletos, restricciones integridad irreversibles. Evaluadores pueden sondear conducta ACRP Certification y hechos IP alineados ASHP Competency explícitamente.",
      },
      inputs: [
        { inputId: "M16.IN2", label: { en: "Your OSCE artifacts (score sheets + handoffs)", es: "Tus artefactos OSCE (hojas + handoffs)" }, inputKind: "export" },
      ],
      learnerTask: {
        en: "In 15–20 minutes: (1) list the top 5 open risks across stations (patient/data/compliance) with severity tags; (2) write one 5–7 sentence audit-facing summary (D3) that stays consistent with prior station outputs, explicitly cites ACRP Certification and ASHP Competency where substantive, and separates known vs unknown; (3) state one immediate containment action and one system CAPA theme. Fail if: D3 omits ACRP Certification or ASHP Competency, invents facts to force consistency, uses blame-only tone, or hides a visible discrepancy.",
        es: "En 15–20 minutos: (1) listar top 5 riesgos abiertos entre estaciones (paciente/datos/cumplimiento) con etiquetas severidad; (2) escribir resumen 5–7 oraciones orientado a auditoría (D3) consistente con salidas previas, citando explícitamente ACRP Certification y ASHP Competency donde sea sustantivo, separando conocido vs desconocido; (3) declarar una contención inmediata y un tema CAPA sistémica. Fallo si: D3 omite ACRP Certification o ASHP Competency, inventa hechos para forzar consistencia, usa tono solo culpa u oculta discrepancia visible.",
      },
      deliverables: [
        { deliverableId: "M16.D2", label: { en: "Open-risk register (top 5)", es: "Registro de riesgos abiertos (top 5)" }, formatHint: "table" },
        { deliverableId: "M16.D3", label: { en: "Audit-facing final summary (ACRP Certification + ASHP Competency)", es: "Resumen final auditoría (ACRP Certification + ASHP Competency)" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M16.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M16.C1",
        description: {
          en: "Every station meets its dimensionFloor in data/capstone.ts; no critical failConditions fire; stationFail flags are honestly reflected in the aggregate—consistent with ACRP Certification gatekeeping.",
          es: "Cada estación cumple su dimensionFloor en data/capstone.ts; no se disparan failConditions críticas; flags stationFail reflejados con honestidad en agregado—coherente con compuerta ACRP Certification.",
        },
        points: 35,
        mapsToDimensions: ["R", "O", "C", "Q"],
        failCondition: {
          en: "Critical fail: any station scored pass while omitting a seeded defect weighted ≥20 points in that station rubric, any critical triggerKey met, or dishonest aggregation.",
          es: "Fallo crítico: cualquier estación en pass omitiendo defecto sembrado con peso ≥20 en su rúbrica, cualquier triggerKey crítico activado o agregación deshonesta.",
        },
      },
      {
        criterionId: "M16.C2",
        description: {
          en: "Cross-station integration: same subject, consent version, AE class, log rows, and source repair narrative align; pharmacy/IP statements match packet facts (ASHP Competency boundary).",
          es: "Integración entre estaciones: mismo sujeto, versión consentimiento, clase AE, filas log y narrativa reparación alineadas; afirmaciones farmacia/IP coinciden hechos del paquete (límite ASHP Competency).",
        },
        points: 30,
        mapsToDimensions: ["Q", "C"],
        failCondition: {
          en: "Critical fail: handoff introduces unauthorized facts, dates, or IDs; or invents IP/pharmacy evidence not in artifacts.",
          es: "Fallo crítico: traspaso introduce hechos, fechas o IDs no autorizados; o inventa evidencia IP/farmacia no en artefactos.",
        },
      },
      {
        criterionId: "M16.C3",
        description: {
          en: "Crisis phase: top risks are severity-tagged; containment stops exposure first; system CAPA theme is concrete (owners, metrics, triggers)—not slogans.",
          es: "Fase crisis: riesgos top etiquetados por severidad; contención detiene exposición primero; tema CAPA sistémico es concreto (responsables, métricas, triggers)—no eslóganes.",
        },
        points: 20,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Fail if: no containment, generic CAPA only, or risks omit patient/data/compliance classification.",
          es: "Fallo si: sin contención, solo CAPA genérica o riesgos omiten clasificación paciente/datos/cumplimiento.",
        },
      },
      {
        criterionId: "M16.C4",
        description: {
          en: "Audit-facing summary (D3) is factual, cites artifact positions, separates known vs inferred, and explicitly references ACRP Certification and ASHP Competency where substantive.",
          es: "Resumen orientado a auditoría (D3) es factual, cita posiciones en artefactos, separa conocido vs inferido y referencia explícitamente ACRP Certification y ASHP Competency donde sea sustantivo.",
        },
        points: 15,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Fail if: blame-only/speculative certainty tone, omits ACRP Certification or ASHP Competency in D3, or omits a discrepancy already visible in the packet.",
          es: "Fallo si: tono solo culpa/certeza especulativa, omite ACRP Certification o ASHP Competency en D3 u omite discrepancia ya visible en el paquete.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.25,
      aggregationKey: "osce_acrp_certification_regulatory_judgment_and_audit_communication",
    },
    {
      dimension: "O",
      weight: 0.25,
      aggregationKey: "osce_workflow_execution_cross_station_handoffs_and_crisis_containment",
    },
    {
      dimension: "C",
      weight: 0.25,
      aggregationKey: "osce_patient_safety_first_and_ashp_competency_ip_interface_discipline",
    },
    {
      dimension: "Q",
      weight: 0.25,
      aggregationKey: "osce_data_source_traceability_and_honest_aggregate_scoring",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "Terminal module: stationIds mirror CAPSTONE_STATION_IDS from data/capstone.ts (single registry). Integrated performance is judged against station rubrics and this module’s ACRP Certification / ASHP Competency framing.",
      es: "Módulo terminal: stationIds reflejan CAPSTONE_STATION_IDS de data/capstone.ts (registro único). El desempeño integrado se juzga contra rúbricas de estación y el marco ACRP Certification / ASHP Competency de este módulo.",
    },
    stationIds: [...CAPSTONE_STATION_IDS],
  },
  tags: ["capstone_related", "audit_readiness", "clinical_judgment", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Module anchors: ACRP Certification (CRC professional competence, ethics, inspection-ready conduct) and ASHP Competency (pharmacy–clinical coordination for IP facts). OSCE remains standard EN token; expand once in ES as needed. Narrative: M9 rubric = IP depth; ALCOA+ capstone stress = OSCE.S5; ALCOA+ pre-capstone anchor = M4.",
    es: "Anclajes del módulo: ACRP Certification (competencia profesional CRC, ética, conducta lista inspección) y ASHP Competency (coordinación farmacia–clínica para hechos IP). OSCE permanece token EN estándar; expandir una vez en ES si hace falta. Narrativa: rúbrica M9 = profundidad IP; estrés ALCOA+ capstone = OSCE.S5; ancla ALCOA+ pre-capstone = M4.",
  },
};
