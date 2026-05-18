// src/curriculum-engine/data/modules/m9.ts

import type { Module } from "../../types";

/**
 * Module 9 — Investigational product: receipt, storage, dispensing, cold chain, excursions & audit-grade accountability.
 *
 * Technical / Regulatory Execution: eight ordered sections; three guided cases (clear / incorrect / ambiguous);
 * practical exercise under time pressure; rubric 100 = sum(criteria.points); passing 94.
 *
 * Regulatory anchors: ICH E2A (clinical safety data management and expedited reporting expectations that depend on
 * clean product accountability and credible timelines) and WHO Good Distribution Practices (storage, transport,
 * documentation, and quarantine discipline for pharmaceutical product distribution integrity).
 */
export const MODULE_M9: Module = {
  id: "M9",
  slug: "investigational-product-pharmacy-cold-chain-accountability",
  internalName: "mod_09_investigational_product",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["O", "Q", "R", "C"],
  title: {
    en: "Module 9 — Investigational Product: Receipt, Storage, Dispensing, Excursions & Audit-Grade Accountability",
    es: "Módulo 9 — Producto investigacional (IP): recepción, almacenamiento, dispensación, excursiones y responsabilidad nivel auditoría",
  },
  objective: {
    en: "CRC can govern the full IP lifecycle under WHO Good Distribution Practices discipline (receipt, segregated storage, monitored transport, quarantine, documentation) and defend how accountability gaps and temperature excursions affect safety narratives and expedited reporting quality under ICH E2A—never dispensing uncleared stock or accepting polished logs over contemporaneous evidence.",
    es: "El CRC puede gobernar el ciclo completo del IP bajo disciplina WHO Good Distribution Practices (recepción, almacenamiento segregado, transporte monitorizado, cuarentena, documentación) y defender cómo brechas de contabilidad y excursiones térmicas afectan narrativas de seguridad y calidad de reporte acelerado bajo ICH E2A—sin dispensar stock sin liberación ni aceptar logs pulidos sobre evidencia contemporánea.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States that WHO Good Distribution Practices require demonstrable control of storage conditions, segregation, and shipment verification from receipt through final disposition.",
          es: "Afirma que WHO Good Distribution Practices exigen control demostrable de condiciones de almacenamiento, segregación y verificación de envío desde recepción hasta disposición final.",
        },
        {
          en: "Explains that ICH E2A expedited safety reporting depends on accurate exposure, lot, timing, and IP integrity facts—small reconciliation gaps can corrupt causality assessment.",
          es: "Explica que el reporte acelerado de seguridad ICH E2A depende de hechos exactos de exposición, lote, tiempo e integridad del IP—pequeñas brechas de reconciliación pueden corromper evaluación causal.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes receipt verification per WHO Good Distribution Practices (shipper, logger, count, lot/expiry), immediate logging, and quarantine of discrepancies pending sponsor direction.",
          es: "Ejecuta verificación de recepción según WHO Good Distribution Practices (transporte, logger, conteo, lote/cad), registro inmediato y cuarentena de discrepancias pendiente patrocinador.",
        },
        {
          en: "On storage deviation: quarantines IP, documents, notifies sponsor, and blocks dispensing until written stability clearance—aligning excursion handling with ICH E2A patient-safety reporting expectations when clinical events intersect product quality questions.",
          es: "Ante desviación de almacenamiento: cuarentena IP, documenta, notifica patrocinador y bloquea dispensación hasta liberación escrita de estabilidad—alineando manejo de excursiones con expectativas ICH E2A de reporte de seguridad cuando eventos clínicos intersectan calidad de producto.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Resolves pharmacy vs CRC ownership voids with RACI-backed SOP updates and GDP-correct record amendments when logs contradict emails or temperature traces.",
          es: "Resuelve vacíos de propiedad farmacia vs CRC con actualizaciones SOP respaldadas en RACI y enmiendas de registro GDP-correctas cuando logs contradicen correos o trazas de temperatura.",
        },
        {
          en: "Reconstructs timelines for inspection defense and flags when IP integrity issues may trigger ICH E2A reportability questions (unexpected serious events with product quality uncertainty).",
          es: "Reconstruye líneas de tiempo para defensa en inspección y señala cuando temas de integridad IP pueden disparar preguntas de reportabilidad ICH E2A (eventos graves inesperados con incertidumbre de calidad de producto).",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M9.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the regulatory bar: WHO Good Distribution Practices for physical product control; ICH E2A for credible safety data when IP facts are contested.",
        es: "Establecer la barra regulatoria: WHO Good Distribution Practices para control físico del producto; ICH E2A para datos de seguridad creíbles cuando los hechos del IP se disputan.",
      },
      keyPoints: [
        {
          en: "Graded on chain-of-custody math, temperature narrative truthfulness, and stop-work on uncleared quarantine—not speed of visit completion.",
          es: "Se te califica por matemática de cadena de custodia, veracidad narrativa de temperatura y alto el fuego en cuarentena sin liberación—no por velocidad de completar visita.",
        },
        {
          en: "Outputs: per-subject IP matrix; issue register + CAPA; audit summary citing ICH E2A and WHO Good Distribution Practices where substantive.",
          es: "Salidas: matriz IP por sujeto; registro + CAPA; resumen auditoría citando ICH E2A y WHO Good Distribution Practices donde sea sustantivo.",
        },
        {
          en: "Technical tokens stay EN (ICH E2A, WHO Good Distribution Practices, IP, IMP, GDP, GMP, CAPA, RACI, SOP, CRA, ALCOA+).",
          es: "Tokens técnicos permanecen en inglés (ICH E2A, WHO Good Distribution Practices, IP, IMP, GDP, GMP, CAPA, RACI, SOP, CRA, ALCOA+).",
        },
      ],
    },
    {
      lessonId: "M9.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 30,
      objective: {
        en: "Anchor WHO Good Distribution Practices custody steps, ICH E2A implications for safety reporting quality, pharmacy/CRC boundaries, and excursion governance.",
        es: "Anclar pasos de custodia WHO Good Distribution Practices, implicaciones ICH E2A para calidad de reporte de seguridad, límites farmacia/CRC y gobierno de excursiones.",
      },
      keyPoints: [
        {
          en: "WHO Good Distribution Practices: qualified storage, mapped temperature monitoring, alarm response, documented handoffs, and quarantine until release—site must prove the product path, not only the paperwork.",
          es: "WHO Good Distribution Practices: almacenamiento calificado, monitorización de temperatura mapeada, respuesta a alarmas, traspasos documentados y cuarentena hasta liberación—el sitio debe probar el camino del producto, no solo el papeleo.",
        },
        {
          en: "ICH E2A: expedited reporting standards assume traceable exposure windows, identifiable lots/kits, and defensible narratives—IP log fiction directly undermines safety surveillance.",
          es: "ICH E2A: estándares de reporte acelerado asumen ventanas de exposición trazables, lotes/kits identificables y narrativas defendibles—ficción en log de IP socava directamente vigilancia de seguridad.",
        },
        {
          en: "Full chain: receipt → segregated labeled storage → dispense → subject-use evidence → return/destruction with reconciliation each step.",
          es: "Cadena completa: recepción → almacenamiento segregado etiquetado → dispensación → evidencia de uso en sujeto → devolución/destrucción con reconciliación en cada paso.",
        },
        {
          en: "Real-world workflow — Receipt: verify shipper, logger, count, lot/expiry; log immediately; GDP-correct discrepancy handling.",
          es: "Flujo real — Recepción: verificar transporte, logger, conteo, lote/cad; registrar de inmediato; manejo discrepancias GDP-correcto.",
        },
        {
          en: "Real-world workflow — Storage/distribution: continuous monitoring, released vs quarantined segregation, documented transport between pharmacy and clinic per WHO Good Distribution Practices.",
          es: "Flujo real — Almacenamiento/distribución: monitorización continua, segregación liberado vs cuarentena, transporte documentado entre farmacia y clínica según WHO Good Distribution Practices.",
        },
        {
          en: "Real-world workflow — Dispense/return: eligibility + kit–subject linkage; same-day investigation on unit gaps; destruction witness where required.",
          es: "Flujo real — Dispensar/devolver: elegibilidad + vínculo kit–sujeto; investigación mismo día en brechas de unidades; testigo de destrucción cuando aplique.",
        },
        {
          en: "Error-prone 1 — Partial mismatch: 1–3 tablets ‘unexplained’ dismissed as rounding.",
          es: "Propensa 1 — Desajuste parcial: 1–3 comprimidos ‘sin explicar’ descartados como redondeo.",
        },
        {
          en: "Error-prone 2 — Pharmacy vs CRC silence in SOP on who owns logger review and alarm response.",
          es: "Propensa 2 — Silencio farmacia vs CRC en SOP sobre quién posee revisión de logger y respuesta a alarmas.",
        },
        {
          en: "Error-prone 3 — Polished IP log contradicts email/temperature trace (integrity failure).",
          es: "Propensa 3 — Log IP pulido contradice correo/traza de temperatura (falla de integridad).",
        },
        {
          en: "Error-prone 4 — Informal ‘minor’ excursion; product dispensed before sponsor stability clearance (WHO Good Distribution Practices breach).",
          es: "Propensa 4 — Excursión ‘menor’ informal; producto dispensado antes de liberación estabilidad patrocinador (brecha WHO Good Distribution Practices).",
        },
        {
          en: "Error-prone 5 — Borderline shipment temperature + sponsor silence; team dispenses quarantined stock to keep visit (ICH E2A safety and accountability risk).",
          es: "Propensa 5 — Temperatura de envío límite + silencio patrocinador; equipo dispensa stock en cuarentena para salvar visita (riesgo ICH E2A seguridad y contabilidad).",
        },
        {
          en: "Cross-links: M4 ALCOA+; M6 consent before research procedures; M10 SAE narrative quality; M16 inspection discipline.",
          es: "Vínculos: M4 ALCOA+; M6 consentimiento antes procedimientos investigación; M10 calidad narrativa SAE; M16 disciplina inspección.",
        },
      ],
    },
    {
      lessonId: "M9.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Oral IP: dispensed 30, returned 8, diary 20 taken—2 tablets unexplained; paperwork otherwise perfect.",
        es: "IP oral: dispensados 30, devueltos 8, diario 20 tomados—2 comprimidos sin explicar; papeleo por lo demás perfecto.",
      },
      keyPoints: [
        {
          en: "What CRC sees: small gap that could hide diversion, diary error, or dispensing miscount—inspectors treat as accountability signal.",
          es: "Qué ve el CRC: brecha pequeña que podría ocultar desvío, error de diario o error de conteo en dispensación—inspectores lo tratan como señal de contabilidad.",
        },
        {
          en: "How to think: WHO Good Distribution Practices expect explainable quantity math; ICH E2A downstream depends on knowing what the subject actually received.",
          es: "Cómo pensar: WHO Good Distribution Practices esperan matemática de cantidades explicable; aguas abajo ICH E2A depende de saber qué recibió realmente el sujeto.",
        },
        {
          en: "Decision: same-day investigation (patient interview, notes, recount); document resolution or log deviation with sponsor path if unresolved.",
          es: "Decisión: investigación mismo día (entrevista paciente, notas, reconteo); documentar resolución o registrar desviación con vía patrocinador si queda sin resolver.",
        },
        {
          en: "Why it matters: small unexplained gaps are recurrent GDP audit findings.",
          es: "Por qué importa: brechas pequeñas sin explicar son hallazgos recurrentes de auditoría GDP.",
        },
      ],
    },
    {
      lessonId: "M9.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Fridge excursion Friday; sponsor stability email due Monday; Saturday visit needs IMP; pharmacist says ‘use this vial, we will backfill paperwork’.",
        es: "Excursión nevera viernes; correo estabilidad patrocinador para lunes; visita sábado necesita IMP; farmacéutico dice ‘usa este frasco, luego rellenamos papeles’.",
      },
      keyPoints: [
        {
          en: "Incorrect move: dispense quarantined/uncleared vial to preserve schedule—violates WHO Good Distribution Practices and poisons ICH E2A-defensible exposure facts if an SAE occurs.",
          es: "Movimiento incorrecto: dispensar frasco en cuarentena/sin liberar para preservar agenda—viola WHO Good Distribution Practices y envenena hechos de exposición defendibles ICH E2A si ocurre un SAE.",
        },
        {
          en: "Correct move: hold uncleared stock; PI clinical alternatives (alternate lot, SOC, defer) with documented rationale; urgent sponsor/medical notification.",
          es: "Movimiento correcto: retener stock sin liberar; alternativas clínicas PI (lote alternativo, SOC, aplazar) con justificación documentada; notificación urgente patrocinador/médico.",
        },
        {
          en: "Why it matters: self-clearing excursions are critical compliance and potential safety failures.",
          es: "Por qué importa: excursiones auto-liberadas son incumplimientos críticos y posibles fallas de seguridad.",
        },
      ],
    },
    {
      lessonId: "M9.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Log shows clean dispense 3/15 and return 3/29; emails show kit in quarantine until 3/22; dispensing timestamp 3/20; both pharmacy and CRC insist their entry is ‘official’.",
        es: "Log muestra dispensación limpia 15/3 y devolución 29/3; correos muestran kit en cuarentena hasta 22/3; marca dispensación 20/3; farmacia y CRC insisten que su entrada es ‘oficial’.",
      },
      keyPoints: [
        {
          en: "What CRC sees: conflicting artifacts—truth requires reconstruction, not authority claims.",
          es: "Qué ve el CRC: artefactos conflictivos—la verdad exige reconstrucción, no reclamos de autoridad.",
        },
        {
          en: "How to think: WHO Good Distribution Practices demand one coherent custody story; ICH E2A cannot defend safety if exposure dates/lots are false.",
          es: "Cómo pensar: WHO Good Distribution Practices exigen una sola historia coherente de custodia; ICH E2A no puede defender seguridad si fechas/lotes de exposición son falsos.",
        },
        {
          en: "Decision: forensic timeline; GDP-correct ALCOA+ amendments with late-entry justification; deviation + sponsor transparency; joint CAPA on who may sign dispense.",
          es: "Decisión: línea de tiempo forense; enmiendas ALCOA+ GDP-correctas con justificación entrada tardía; desviación + transparencia patrocinador; CAPA conjunta sobre quién puede firmar dispensación.",
        },
        {
          en: "Why it matters: polished logs over correspondence is an inspection credibility collapse pattern.",
          es: "Por qué importa: logs pulidos sobre correspondencia es patrón de colapso de credibilidad en inspección.",
        },
      ],
    },
    {
      lessonId: "M9.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 40,
      objective: {
        en: "Run the IP Audit Stress Test once under the 40-minute time box; cite ICH E2A and WHO Good Distribution Practices in the audit summary where substantive.",
        es: "Ejecutar la Prueba de Estrés una vez bajo 40 minutos; citar ICH E2A y WHO Good Distribution Practices en resumen auditoría donde sea sustantivo.",
      },
      keyPoints: [
        {
          en: "Time box: 40 minutes. Missing a quarantine breach or trusting a tidy log without triangulation = incomplete.",
          es: "Límite: 40 minutos. Omitir brecha de cuarentena o confiar en log pulido sin triangulación = incompleto.",
        },
        {
          en: "Deliverables: matrix (D1), register + CAPA (D2), audit summary (D3) with severity and structural fixes.",
          es: "Entregables: matriz (D1), registro + CAPA (D2), resumen auditoría (D3) con severidad y arreglos estructurales.",
        },
      ],
    },
    {
      lessonId: "M9.S5",
      title: { en: "5) Scoring matrix & inspection perspective", es: "5) Matriz de puntuación y perspectiva inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M9.RUB1; connect monitor drills to WHO Good Distribution Practices quantity trails and ICH E2A-ready facts.",
        es: "Alinear calificación con M9.RUB1; conectar ejercicios monitor a rastros de cantidad WHO Good Distribution Practices y hechos listos ICH E2A.",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; binary criteria; critical pathway on quarantine breaches and log-vs-evidence fiction.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; criterios binarios; vía crítica en brechas de cuarentena y ficción log vs evidencia.",
        },
        {
          en: "Inspectors drill: lot → kit → subject → visit → return count; temperature narrative must match logger and emails.",
          es: "Inspectores cavan: lote → kit → sujeto → visita → conteo devolución; narrativa temperatura debe coincidir con logger y correos.",
        },
        {
          en: "ICH E2A angle: when SAEs occur, regulators test whether IP exposure facts are trustworthy—GDP failures become safety-reporting failures.",
          es: "Ángulo ICH E2A: cuando ocurren SAEs, reguladores prueban si hechos de exposición IP son confiables—fallas GDP se vuelven fallas de reporte de seguridad.",
        },
      ],
    },
    {
      lessonId: "M9.S6",
      title: { en: "6) Answer framework (elite outputs + fail patterns)", es: "6) Marco de respuesta (salidas élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Produce GDP-defensible IP responses that keep ICH E2A safety narratives honest.",
        es: "Producir respuestas IP defendibles GDP que mantengan honestas narrativas de seguridad ICH E2A.",
      },
      keyPoints: [
        {
          en: "Elite format: (1) Quantity math with pointers, (2) Temperature/custody timeline, (3) Stop/release decision + sponsor notification + CAPA theme.",
          es: "Formato élite: (1) Matemática cantidades con punteros, (2) Línea tiempo temperatura/custodia, (3) Decisión paro/liberación + notificación patrocinador + tema CAPA.",
        },
        {
          en: "Fail patterns: ‘minor excursion’ without assessment; ‘pharmacy said OK’ without written release; reconciling by editing the log.",
          es: "Patrones de falla: ‘excursión menor’ sin evaluación; ‘farmacia dijo OK’ sin liberación escrita; reconciliar editando el log.",
        },
      ],
    },
    {
      lessonId: "M9.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect IP governance to logs, safety reporting, and inspection posture.",
        es: "Conectar gobierno IP a logs, reporte de seguridad y postura de inspección.",
      },
      keyPoints: [
        {
          en: "M10: IP facts feed SAE narratives; ICH E2A reportability decisions fail when lot or dose history is uncertain.",
          es: "M10: hechos IP alimentan narrativas SAE; decisiones de reportabilidad ICH E2A fallan cuando historia de lote o dosis es incierta.",
        },
        {
          en: "M4/M16: temperature logs, accountability forms, and query responses must triangulate under WHO Good Distribution Practices.",
          es: "M4/M16: logs temperatura, formularios contabilidad y respuestas a queries deben triangulizar bajo WHO Good Distribution Practices.",
        },
        {
          en: "M8: visit windows do not override GDP quarantine rules for dispensing.",
          es: "M8: ventanas de visita no anulan reglas de cuarentena GDP para dispensación.",
        },
      ],
    },
    {
      lessonId: "M9.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit for patients, safety surveillance, and GDP credibility.",
        es: "Hacer explícitas consecuencias para pacientes, vigilancia de seguridad y credibilidad GDP.",
      },
      keyPoints: [
        {
          en: "Patient: wrong lot, degraded product, or unknown exposure after accountability fiction.",
          es: "Paciente: lote equivocado, producto degradado o exposición desconocida tras ficción de contabilidad.",
        },
        {
          en: "Regulatory: WHO Good Distribution Practices non-conformance can trigger serious findings; ICH E2A datasets become non-credible for causality.",
          es: "Regulatorio: no conformidad WHO Good Distribution Practices puede disparar hallazgos graves; conjuntos ICH E2A pierden credibilidad causal.",
        },
        {
          en: "Site: enrollment holds, pharmacy suspension from IP duties, sponsor termination risk.",
          es: "Sitio: holds de inclusión, suspensión farmacia de funciones IP, riesgo terminación patrocinador.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M9.E1",
      description: {
        en: "Dispensed 30, returned 8, diary shows 20 taken—2 tablets missing with no investigation narrative—breaks WHO Good Distribution Practices reconciliation expectations.",
        es: "Dispensados 30, devueltos 8, diario muestra 20 tomados—2 comprimidos faltantes sin narrativa de investigación—rompe expectativas de reconciliación WHO Good Distribution Practices.",
      },
      risk: {
        en: "Accountability failure; diversion suspicion; ICH E2A exposure timeline unreliable.",
        es: "Falla de contabilidad; sospecha desvío; línea tiempo exposición ICH E2A no confiable.",
      },
      expectedLearnerResponse: {
        en: "Immediate reconciliation workup; patient contact; documented explanation or deviation; CAPA on counting/diary coaching.",
        es: "Trabajo inmediato reconciliación; contacto paciente; explicación documentada o desviación; CAPA en conteo/coaching diario.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M9.E2",
      description: {
        en: "Ambiguous SOP on temperature monitoring leads to pharmacy vs CRC dispute during CRA review—no RACI, no GDP-aligned governance.",
        es: "SOP ambigua en monitorización de temperatura genera disputa farmacia vs CRC en revisión CRA—sin RACI, sin gobierno alineado GDP.",
      },
      risk: {
        en: "Systemic quality failure; inspector sees dysfunctional IP oversight.",
        es: "Falla calidad sistémica; inspector ve supervisión IP disfuncional.",
      },
      expectedLearnerResponse: {
        en: "SOP revision with RACI, training, signed acknowledgment, completed excursion documentation per WHO Good Distribution Practices.",
        es: "Revisión SOP con RACI, capacitación, acuse firmado, documentación excursión completada según WHO Good Distribution Practices.",
      },
      relatedDimensions: ["O", "R"],
    },
    {
      errorId: "M9.E3",
      description: {
        en: "IP log shows perfect reconciliation while email trail proves kit was in quarantine during recorded dispense time—data integrity collapse affecting ICH E2A-defensible facts.",
        es: "Log IP muestra reconciliación perfecta mientras correos prueban kit en cuarentena en hora registrada de dispensación—colapso integridad datos afectando hechos defendibles ICH E2A.",
      },
      risk: {
        en: "Credibility collapse; potential serious breach; sponsor escalation.",
        es: "Colapso credibilidad; posible incumplimiento grave; escalamiento patrocinador.",
      },
      expectedLearnerResponse: {
        en: "Forensic timeline; GDP-correct amendments; deviation; sponsor transparency; never defend the false log.",
        es: "Línea de tiempo forense; enmiendas GDP-correctas; desviación; transparencia patrocinador; nunca defender el log falso.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M9.E4",
      description: {
        en: "Minor excursion logged informally but product dispensed before sponsor stability clearance—WHO Good Distribution Practices release rules ignored.",
        es: "Excursión menor registrada informalmente pero producto dispensado antes de liberación estabilidad patrocinador—reglas de liberación WHO Good Distribution Practices ignoradas.",
      },
      risk: {
        en: "Subject may receive compromised IMP; regulatory non-compliance; ICH E2A safety assessment corrupted if event occurs.",
        es: "Sujeto puede recibir IMP comprometido; incumplimiento regulatorio; evaluación seguridad ICH E2A corrompida si ocurre evento.",
      },
      expectedLearnerResponse: {
        en: "Stop/quarantine remaining units; notify sponsor and PI; patient safety assessment; deviation package with GDP references.",
        es: "Detener/cuarentenar unidades restantes; notificar patrocinador y PI; evaluación seguridad paciente; paquete desviación con referencias GDP.",
      },
      relatedDimensions: ["C", "R"],
    },
    {
      errorId: "M9.E5",
      description: {
        en: "False-correct pattern: reconciliation totals tie on paper because returns from one subject were silently swapped into another subject’s accountability line—looks ‘balanced’ until lot/kit IDs are traced.",
        es: "Patrón ‘parece correcto’: totales de reconciliación cuadran en papel porque devoluciones de un sujeto se intercambiaron silenciosamente a línea de contabilidad de otro—‘balanceado’ hasta trazar IDs lote/kit.",
      },
      risk: {
        en: "Kit–subject linkage error; major GDP integrity finding; invalid ICH E2A exposure attribution if adverse events reviewed.",
        es: "Error vínculo kit–sujeto; hallazgo mayor integridad GDP; atribución exposición ICH E2A inválida si se revisan eventos adversos.",
      },
      expectedLearnerResponse: {
        en: "Halt further dispensing pending recount; reconstruct kit-level ledger; sponsor notification; CAPA on barcode/witness steps for handoffs.",
        es: "Detener más dispensación pendiente reconteo; reconstruir libro a nivel kit; notificación patrocinador; CAPA en pasos código de barras/testigo para traspasos.",
      },
      relatedDimensions: ["Q", "O", "R"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M9.EX1",
      name: {
        en: "IP Audit Stress Test — ICH E2A safety narrative + WHO Good Distribution Practices custody",
        es: "Prueba estrés auditoría IP — narrativa seguridad ICH E2A + custodia WHO Good Distribution Practices",
      },
      scenario: {
        en: "40 minutes before monitoring: IP logs, temperature records, sponsor emails, and pharmacy notes for three subjects. Partial unit gaps, ownership dispute on logger review, polished log vs email contradiction on quarantine dates, and borderline shipment excursion with uncleared vial pressure to dispense. Sources conflict by design.",
        es: "40 minutos antes de monitoría: logs IP, registros temperatura, correos patrocinador y notas farmacia para tres sujetos. Brechas parciales de unidades, disputa propiedad revisión logger, log pulido vs correo en fechas cuarentena y excursión envío límite con presión de dispensar frasco sin liberación. Fuentes chocan a propósito.",
      },
      inputs: [
        { inputId: "M9.IN1", label: { en: "IP accountability logs (3 subjects)", es: "Logs contabilidad IP (3 sujetos)" }, inputKind: "table" },
        { inputId: "M9.IN2", label: { en: "Temperature monitoring + excursion forms", es: "Monitorización térmica + formularios excursión" }, inputKind: "bundle" },
        { inputId: "M9.IN3", label: { en: "Sponsor/pharmacy email thread excerpts", es: "Extractos hilo correo patrocinador/farmacia" }, inputKind: "bundle" },
        { inputId: "M9.IN4", label: { en: "Dispensing & return pharmacy notes", es: "Notas farmacia dispensación y devolución" }, inputKind: "mock_ehr" },
        { inputId: "M9.IN5", label: { en: "ICH E2A excerpt (expedited reporting / data integrity expectations)", es: "Extracto ICH E2A (reporte acelerado / expectativas integridad datos)" }, inputKind: "pdf" },
        { inputId: "M9.IN6", label: { en: "WHO Good Distribution Practices excerpt", es: "Extracto WHO Good Distribution Practices" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "Per subject: reconstruct IP chain; flag partial mismatches and log-vs-evidence gaps; resolve ownership with RACI-style fixes; state quarantine/release decision under WHO Good Distribution Practices (no dispensing uncleared stock). Note where issues could distort ICH E2A-relevant exposure facts if an SAE occurred. Classify issues minor/major/critical with patient/data/compliance impact. CAPA must include structural fixes (reconciliation SOP, joint pharmacy–CRC review cadence, excursion decision tree, witness/barcode controls)—not reminders only. Draft audit/monitor summary (D3) with explicit ICH E2A and WHO Good Distribution Practices citations in at least one substantive paragraph each tied to packet facts.",
        es: "Por sujeto: reconstruir cadena IP; señalar desajustes parciales y brechas log vs evidencia; resolver propiedad con arreglos estilo RACI; indicar decisión cuarentena/liberación bajo WHO Good Distribution Practices (sin dispensar stock sin liberación). Señalar dónde temas podrían distorsionar hechos de exposición relevantes ICH E2A si ocurriera un SAE. Clasificar hallazgos menor/mayor/crítico con impacto paciente/datos/cumplimiento. CAPA debe incluir arreglos estructurales (SOP reconciliación, cadencia revisión conjunta farmacia–CRC, árbol decisión excursiones, controles testigo/código de barras)—no solo recordatorios. Redactar resumen auditoría/monitor (D3) con citas explícitas ICH E2A y WHO Good Distribution Practices en al menos un párrafo sustantivo cada uno vinculado a hechos del paquete.",
      },
      deliverables: [
        { deliverableId: "M9.D1", label: { en: "Per-subject IP chain matrix", es: "Matriz cadena IP por sujeto" }, formatHint: "table" },
        { deliverableId: "M9.D2", label: { en: "Issue register + CAPA", es: "Registro de hallazgos + CAPA" }, formatHint: "pdf" },
        {
          deliverableId: "M9.D3",
          label: {
            en: "Audit / monitor summary (cite ICH E2A + WHO Good Distribution Practices)",
            es: "Resumen auditoría/monitor (citar ICH E2A + WHO Good Distribution Practices)",
          },
          formatHint: "short_memo",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M9.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M9.C1",
        description: {
          en: "Treats partial quantity mismatches as stop-work: investigates, documents patient/staff explanations, closes math or logs proportional deviation—aligned with WHO Good Distribution Practices reconciliation discipline.",
          es: "Trata desajustes parciales de cantidad como alto el fuego: investiga, documenta explicaciones paciente/personal, cierra matemática o registra desviación proporcional—alineado a disciplina reconciliación WHO Good Distribution Practices.",
        },
        points: 35,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Critical fail if dismisses 1–3 unit gaps as immaterial without investigation or CAPA, or authorizes dispensing with unresolved kit–subject linkage errors.",
          es: "Falla crítica si descarta brechas de 1–3 unidades como inmateriales sin investigación ni CAPA, o autoriza dispensación con errores de vínculo kit–sujeto sin resolver.",
        },
      },
      {
        criterionId: "M9.C2",
        description: {
          en: "Resolves pharmacy/CRC ownership gaps with concrete SOP/RACI updates, training evidence, and GDP-correct excursion documentation—not prolonged blame exchange.",
          es: "Resuelve brechas de propiedad farmacia/CRC con actualizaciones SOP/RACI concretas, evidencia de capacitación y documentación excursión GDP-correcta—no intercambio prolongado de culpas.",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Critical fail if leaves primary monitoring/logger ownership undefined or recommends only a reminder email without SOP/RACI change.",
          es: "Falla crítica si deja indefinida propiedad primaria de monitorización/logger o recomienda solo correo recordatorio sin cambio SOP/RACI.",
        },
      },
      {
        criterionId: "M9.C3",
        description: {
          en: "Reconciles polished IP logs against emails/timestamps; prescribes GDP-correct amendments and sponsor transparency; flags ICH E2A exposure-integrity risks when narratives conflict.",
          es: "Reconcilia logs pulidos IP contra correos/marcas; prescribe enmiendas GDP-correctas y transparencia patrocinador; señala riesgos integridad exposición ICH E2A cuando narrativas chocan.",
        },
        points: 25,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Fail if trusts the tidy log over contemporaneous correspondence without triangulation or proposes back-dating to ‘fix’ reconciliation.",
          es: "Falla si confía en log pulido sobre correspondencia contemporánea sin triangulación o propone retrofechar para ‘arreglar’ reconciliación.",
        },
      },
      {
        criterionId: "M9.C4",
        description: {
          en: "Under delayed sponsor guidance, prioritizes patient safety: no dispense of quarantined/uncleared IP; documents clinical rationale and notifications; D3 meets citation requirement for ICH E2A and WHO Good Distribution Practices.",
          es: "Con orientación tardía patrocinador, prioriza seguridad del paciente: no dispensar IP en cuarentena/sin liberar; documenta justificación clínica y notificaciones; D3 cumple requisito citar ICH E2A y WHO Good Distribution Practices.",
        },
        points: 15,
        mapsToDimensions: ["C", "R"],
        failCondition: {
          en: "Critical fail if authorizes use of excursion-affected or quarantined stock to keep the visit without written clearance, or omits required ICH E2A / WHO Good Distribution Practices citations in D3.",
          es: "Falla crítica si autoriza uso de stock afectado por excursión o en cuarentena para salvar visita sin liberación escrita u omite citas requeridas ICH E2A / WHO Good Distribution Practices en D3.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "O",
      weight: 0.28,
      aggregationKey: "ip_workflow_pharmacy_crc_handoffs_and_reconciliation_cadence",
    },
    {
      dimension: "Q",
      weight: 0.3,
      aggregationKey: "ip_accountability_temperature_and_quantity_trace_integrity",
    },
    {
      dimension: "R",
      weight: 0.24,
      aggregationKey: "ich_e2a_who_gdp_governance_and_inspection_defense",
    },
    {
      dimension: "C",
      weight: 0.18,
      aggregationKey: "patient_safety_first_ip_quarantine_and_alternate_supply_decisions",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S4 stresses monitor-facing traceability and truthful narratives under IMV pressure—the same GDP-grade reconstruction and ICH E2A-relevant fact discipline as IP logs, temperature stories, and sponsor correspondence.",
      es: "OSCE.S4 ejercita trazabilidad cara al monitor y narrativas veraces bajo presión IMV—la misma disciplina de reconstrucción grado GDP y hechos relevantes ICH E2A que logs IP, historias de temperatura y correspondencia patrocinador.",
    },
    stationIds: ["OSCE.S4"],
  },
  tags: ["operational", "traceability", "data_integrity", "audit_readiness", "regulatory", "bilingual", "flagship"],
  bilingualNotes: {
    en: "Module anchors: ICH E2A (clinical safety data management and expedited reporting expectations) and WHO Good Distribution Practices (distribution/storage integrity). Keep IP, IMP, GDP, CAPA, RACI, SOP, CRA, IMV as EN tokens where common.",
    es: "Anclajes del módulo: ICH E2A (gestión datos clínicos de seguridad y expectativas de reporte acelerado) y WHO Good Distribution Practices (integridad distribución/almacenamiento). Mantener IP, IMP, GDP, CAPA, RACI, SOP, CRA, IMV como tokens EN donde sea habitual.",
  },
};
