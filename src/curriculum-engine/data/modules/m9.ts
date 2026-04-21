// src/curriculum-engine/data/modules/m9.ts

import type { Module } from "../../types";

/**
 * Module 9 — Investigational product: receipt, storage, dispensing, cold chain, excursions, audit-grade accountability.
 * Guided practice: four cases (GP1–GP4) — partial mismatch, pharmacy/CRC ownership, log vs evidence, safety under uncertainty.
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
    en: "Manage the full IP lifecycle (receipt → storage → dispensing → return → destruction) with complete traceability; handle temperature excursions under uncertainty; resolve partial accountability mismatches; clarify pharmacy vs CRC responsibilities; spot documentation–reality gaps—all defensible in inspection, with patient safety overriding trial speed when sponsor guidance lags.",
    es: "Gestionar el ciclo completo del IP (recepción → almacenamiento → dispensación → devolución → destrucción) con trazabilidad total; manejar excursiones térmicas bajo incertidumbre; resolver desajustes parciales de contabilidad; aclarar responsabilidades farmacia vs CRC; detectar brechas documentación–realidad—todo defendible en inspección, con seguridad del paciente por encima de la velocidad del ensayo cuando el patrocinador tarda en orientar.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States that under ICH E6(R3) the site must demonstrate full control of IP from receipt through final disposition, including reconciliation, temperature monitoring, and immediate action on excursions.",
          es: "Afirma que bajo ICH E6(R3) el sitio debe demostrar control total del IP desde recepción hasta disposición final, incluida reconciliación, monitorización de temperatura y acción inmediata ante excursiones.",
        },
        {
          en: "Recognizes the ‘partial mismatch’ trap: small unreconciled unit gaps (e.g., 2–3 tablets) are frequent audit findings despite otherwise clean paperwork.",
          es: "Reconoce la trampa del ‘desajuste parcial’: pequeñas brechas de unidades sin reconciliar (p. ej., 2–3 comprimidos) son hallazgos frecuentes de auditoría pese a papeleo limpio.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes receipt verification (shipment, temperature data, quantities, lot), segregated storage with continuous monitoring and daily review, eligibility-ready dispensing with precise kit–subject linkage, and return/reconciliation against diary and dispensed records.",
          es: "Ejecuta verificación de recepción (envío, datos de temperatura, cantidades, lote), almacenamiento segregado con monitorización continua y revisión diaria, dispensación con elegibilidad lista y vínculo kit–sujeto preciso, y devolución/reconciliación contra diario y registros dispensados.",
        },
        {
          en: "On any storage deviation: quarantines IP, documents, notifies sponsor, and does not dispense until formal clearance—treating uncertain stability as stop-work until resolved.",
          es: "Ante cualquier desviación de almacenamiento: cuarentena del IP, documentación, notificación al patrocinador y sin dispensar hasta autorización formal—tratando estabilidad incierta como alto el fuego hasta resolver.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Resolves pharmacy vs CRC ‘not my job’ disputes by pointing to SOP ownership, updating role clarity, and documenting excursion resolution without letting blame delay patient-safe product disposition.",
          es: "Resuelve disputas farmacia vs CRC ‘no es mi trabajo’ apuntando a propiedad en SOP, actualizando claridad de roles y documentando resolución de excursión sin dejar que la culpa retrase disposición segura del producto.",
        },
        {
          en: "Reconstructs timelines from emails, timestamps, and witness statements when the IP log looks perfect but contradicts the evidence trail; escalates documentation integrity issues proportionally.",
          es: "Reconstruye líneas de tiempo desde correos, marcas y testimonios cuando el log de IP luce perfecto pero contradice la cadena probatoria; escala problemas de integridad documental en proporción.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M9.L1",
      title: { en: "Core concepts — IP accountability & risk patterns", es: "Conceptos núcleo — contabilidad IP y patrones de riesgo" },
      lessonType: "reading",
      objective: {
        en: "Anchor E6(R3) IP control, partial mismatches, excursion quarantine, pharmacy/CRC boundaries, documentation vs reality, and safety-over-timeline judgment.",
        es: "Anclar control de IP E6(R3), desajustes parciales, cuarentena por excursión, límites farmacia/CRC, documentación vs realidad y juicio seguridad sobre cronograma.",
      },
      keyPoints: [
        {
          en: "Full chain of custody: receipt → labeled storage → dispense → subject use evidence → return/destruction with reconciliation at each step.",
          es: "Cadena de custodia completa: recepción → almacenamiento etiquetado → dispensación → evidencia de uso en sujeto → devolución/destrucción con reconciliación en cada paso.",
        },
        {
          en: "Temperature excursion = quarantine + sponsor assessment before release; ‘minor’ or uncertain does not mean informal use.",
          es: "Excursión térmica = cuarentena + evaluación del patrocinador antes de liberar; ‘menor’ o incierto no autoriza uso informal.",
        },
        {
          en: "Inspectors probe whether the IP system works as one team; siloed blame and ambiguous SOPs are systemic red flags.",
          es: "Inspectores exploran si el sistema IP funciona como un equipo; culpas en silos y SOPs ambiguos son banderas rojas sistémicas.",
        },
        {
          en: "When sponsor response is delayed, default is do not dispense quarantined IP; use protocol-allowed alternatives, standard of care, or clinically safe deferral with documentation.",
          es: "Si el patrocinador tarda en responder, por defecto no dispensar IP en cuarentena; usar alternativas permitidas por protocolo, estándar de care o aplazamiento clínicamente seguro con documentación.",
        },
      ],
    },
    {
      lessonId: "M9.L2",
      title: { en: "Site workflow — receipt through destruction", es: "Flujo en sitio — recepción hasta destrucción" },
      lessonType: "reading",
      objective: {
        en: "Walk the operational cadence CRCs and pharmacy run together for compliant IP management.",
        es: "Recorrer la cadencia operativa que CRC y farmacia ejecutan juntos para gestión conforme del IP.",
      },
      keyPoints: [
        {
          en: "Receipt: verify shipper, logger data, count, lot/expiry; log immediately; flag and quarantine discrepancies pending sponsor direction.",
          es: "Recepción: verificar transporte, datos de logger, conteo, lote/cad; registrar de inmediato; marcar y cuarentenar discrepancias pendientes de patrocinador.",
        },
        {
          en: "Storage: continuous monitoring, alarm response, daily review, released vs quarantined segregation.",
          es: "Almacenamiento: monitorización continua, respuesta a alarmas, revisión diaria, segregación liberado vs cuarentena.",
        },
        {
          en: "Dispensing: confirm visit/eligibility/randomization per protocol; witness and document kit number, quantity, and patient education on return expectations.",
          es: "Dispensación: confirmar visita/elegibilidad/randomización según protocolo; testigo y documentar número de kit, cantidad y educación al paciente sobre devolución.",
        },
        {
          en: "Return/reconciliation: tablets/units counted vs diary vs dispensed; any gap triggers investigation same day, not ‘next monitor visit’.",
          es: "Devolución/reconciliación: comprimidos/unidades contados vs diario vs dispensado; cualquier brecha dispara investigación el mismo día, no ‘en la próxima monitoría’.",
        },
      ],
    },
    {
      lessonId: "M9.L3",
      title: { en: "Inspection themes — what breaks IP credibility", es: "Temas de inspección — qué rompe la credibilidad del IP" },
      lessonType: "reading",
      objective: {
        en: "Anticipate monitor and inspector focus on small accountability gaps, ownership voids, and polished logs that contradict contemporaneous records.",
        es: "Anticipar foco de monitor e inspector en brechas pequeñas de contabilidad, vacíos de propiedad y logs pulidos que contradicen registros contemporáneos.",
      },
      keyPoints: [
        {
          en: "Auditors reconstruct quantity math: dispensed − returned − consumed must equal zero unexplained variance.",
          es: "Auditores reconstruyen matemática de cantidades: dispensado − devuelto − consumido debe dar varianza no explicada cero.",
        },
        {
          en: "Self-clearing excursions (product used before sponsor review) are critical compliance and potential safety failures.",
          es: "Excursiones ‘auto-liberadas’ (producto usado antes de revisión del patrocinador) son incumplimientos críticos y posibles fallas de seguridad.",
        },
        {
          en: "CAPA for IP should harden process: joint pharmacy–CRC huddles, pre-dispense checklists, excursion decision tree, reconciliation sign-off.",
          es: "CAPA para IP debe endurecer proceso: reuniones conjuntas farmacia–CRC, checklists pre-dispensación, árbol de decisión de excursiones, firma de reconciliación.",
        },
      ],
    },
    {
      lessonId: "M9.GP1",
      title: { en: "Guided practice — GP-9.1: partial accountability mismatch", es: "Práctica guiada — GP-9.1: desajuste parcial de contabilidad" },
      lessonType: "case",
      objective: {
        en: "Oral IP: dispensed 30, returned 8, diary 20 taken—2 tablets unexplained; paperwork otherwise perfect.",
        es: "IP oral: dispensados 30, devueltos 8, diario 20 tomados—2 comprimidos sin explicar; papeleo por lo demás perfecto.",
      },
      keyPoints: [
        {
          en: "Investigate immediately: patient interview, dispensing notes, diary gaps; document resolution or log minor deviation with impact if unresolved.",
          es: "Investigar de inmediato: entrevista al paciente, notas de dispensación, huecos en diario; documentar resolución o registrar desviación menor con impacto si queda sin resolver.",
        },
        {
          en: "Small gaps signal systemic weakness; inspectors expect explainable reconciliation, not dismissal as rounding.",
          es: "Brechas pequeñas señalan debilidad sistémica; inspectores esperan reconciliación explicable, no descarte como redondeo.",
        },
      ],
    },
    {
      lessonId: "M9.GP2",
      title: { en: "Guided practice — GP-9.2: pharmacy vs CRC blame shifting", es: "Práctica guiada — GP-9.2: culpas farmacia vs CRC" },
      lessonType: "case",
      objective: {
        en: "Fridge excursion: pharmacy says CRC should check logs daily; CRC says pharmacy owns monitoring; SOP is silent.",
        es: "Excursión de nevera: farmacia dice que CRC debe revisar logs diarios; CRC dice que farmacia posee monitorización; SOP silencioso.",
      },
      keyPoints: [
        {
          en: "Fix the system: SOP with named primary/secondary owners, escalation path, and joint review cadence—then document excursion outcome.",
          es: "Arreglar el sistema: SOP con dueños primario/secundario nombrados, vía de escalamiento y cadencia de revisión conjunta—luego documentar resultado de excursión.",
        },
        {
          en: "Finger-pointing during monitoring mirrors inspection failure mode; CAPA must prevent recurrence, not assign winners.",
          es: "Señalar culpas en monitoría refleja modo de fallo en inspección; CAPA debe prevenir recurrencia, no asignar ganadores.",
        },
      ],
    },
    {
      lessonId: "M9.GP3",
      title: { en: "Guided practice — GP-9.3: documentation vs reality", es: "Práctica guiada — GP-9.3: documentación vs realidad" },
      lessonType: "case",
      objective: {
        en: "Log shows clean dispense 3/15 and return 3/29; emails show kit in quarantine until 3/22; dispensing timestamp 3/20.",
        es: "Log muestra dispensación limpia 15/3 y devolución 29/3; correos muestran kit en cuarentena hasta 22/3; marca de dispensación 20/3.",
      },
      keyPoints: [
        {
          en: "Reconstruct actual sequence from source artifacts; amend records with ALCOA+ discipline and late-entry rationale; ensure excursion is captured if missing.",
          es: "Reconstruir secuencia real desde artefactos en fuente; enmendar registros con disciplina ALCOA+ y justificación de entrada tardía; asegurar que la excursión conste si faltaba.",
        },
        {
          en: "Credibility requires log, email, and temperature narrative to tell one truthful story.",
          es: "La credibilidad exige que log, correo y narrativa de temperatura cuenten una sola historia veraz.",
        },
      ],
    },
    {
      lessonId: "M9.GP4",
      title: { en: "Guided practice — GP-9.4: patient safety under uncertainty", es: "Práctica guiada — GP-9.4: seguridad del paciente bajo incertidumbre" },
      lessonType: "case",
      objective: {
        en: "Shipment borderline excursion (e.g., 9 °C ~45 min); sponsor silent until Monday; subject needs dose Saturday.",
        es: "Envío con excursión límite (p. ej., 9 °C ~45 min); patrocinador en silencio hasta lunes; sujeto necesita dosis sábado.",
      },
      keyPoints: [
        {
          en: "Do not dispense quarantined stock; use alternate batch, SOC, or defer with PI judgment and documented clinical rationale + sponsor notification.",
          es: "No dispensar stock en cuarentena; usar lote alternativo, SOC o aplazar con juicio del PI y justificación clínica documentada + notificación al patrocinador.",
        },
        {
          en: "Trial timelines are secondary when stability or accountability is unresolved.",
          es: "Los plazos del ensayo son secundarios cuando estabilidad o contabilidad siguen sin resolver.",
        },
      ],
    },
    {
      lessonId: "M9.L4",
      title: { en: "Monitor / inspector perspective on IP", es: "Perspectiva monitor / inspector sobre IP" },
      lessonType: "reading",
      objective: {
        en: "Prepare for scrutiny of quantity trails, temperature narratives, delegation logs, and sponsor correspondence.",
        es: "Prepararse para escrutinio de rastros de cantidades, narrativas de temperatura, logs de delegación y correspondencia con patrocinador.",
      },
      keyPoints: [
        {
          en: "Expect drill-down: lot → kit → subject → visit date → return count; any break triggers deeper GDP review.",
          es: "Espere profundización: lote → kit → sujeto → fecha visita → conteo devolución; cualquier ruptura dispara revisión GDP más profunda.",
        },
      ],
    },
    {
      lessonId: "M9.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate elite IP behaviors and explicit failure modes for assessment.",
        es: "Consolidar comportamientos elite en IP y modos de fallo explícitos para evaluación.",
      },
      keyPoints: [
        {
          en: "Strong: zero tolerance for unexplained units; clear cross-functional ownership; source-over-log reconstruction; never dispense uncleared quarantined IP.",
          es: "Fuerte: tolerancia cero a unidades sin explicar; propiedad interfuncional clara; reconstrucción fuente sobre log; nunca dispensar IP en cuarentena sin liberación.",
        },
        {
          en: "Fail if: ignores small discrepancies, accepts blame games, or prioritizes visit speed over safety and formal excursion clearance.",
          es: "Fallo si: ignora discrepancias pequeñas, acepta juegos de culpa o prioriza velocidad de visita sobre seguridad y liberación formal de excursión.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M9.E1",
      description: {
        en: "Dispensed 30, returned 8, diary shows 20 taken—2 tablets missing with no investigation narrative.",
        es: "Dispensados 30, devueltos 8, diario muestra 20 tomados—2 comprimidos faltantes sin narrativa de investigación.",
      },
      risk: {
        en: "Accountability failure; exposure and diversion questions on inspection.",
        es: "Falla de contabilidad; preguntas de exposición y desvío en inspección.",
      },
      expectedLearnerResponse: {
        en: "Immediate reconciliation workup; patient contact; documented explanation or deviation; CAPA on counting/diary coaching.",
        es: "Trabajo inmediato de reconciliación; contacto al paciente; explicación documentada o desviación; CAPA en conteo/coaching de diario.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M9.E2",
      description: {
        en: "Ambiguous SOP on temperature monitoring leads to pharmacy vs CRC dispute during CRA review.",
        es: "SOP ambigua en monitorización de temperatura genera disputa farmacia vs CRC durante revisión del CRA.",
      },
      risk: {
        en: "Systemic quality failure; inspector sees dysfunctional governance.",
        es: "Falla de calidad sistémica; inspector ve gobierno disfuncional.",
      },
      expectedLearnerResponse: {
        en: "SOP revision with RACI, training, signed acknowledgment, and completed excursion documentation.",
        es: "Revisión SOP con RACI, capacitación, acuse firmado y documentación completada de excursión.",
      },
      relatedDimensions: ["O", "R"],
    },
    {
      errorId: "M9.E3",
      description: {
        en: "IP log shows perfect reconciliation while email trail proves kit was in quarantine during recorded dispense time.",
        es: "Log de IP muestra reconciliación perfecta mientras correos prueban kit en cuarentena en hora registrada de dispensación.",
      },
      risk: {
        en: "Data integrity and credibility collapse; potential serious breach.",
        es: "Colapso de integridad y credibilidad de datos; posible incumplimiento grave.",
      },
      expectedLearnerResponse: {
        en: "Forensic timeline; GDP-correct amendments; deviation; sponsor transparency.",
        es: "Línea de tiempo forense; enmiendas GDP-correctas; desviación; transparencia al patrocinador.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M9.E4",
      description: {
        en: "Minor excursion logged informally but product dispensed before sponsor stability clearance.",
        es: "Excursión menor registrada informalmente pero producto dispensado antes de liberación de estabilidad del patrocinador.",
      },
      risk: {
        en: "Subject may receive compromised IMP; regulatory non-compliance.",
        es: "Sujeto podría recibir IMP comprometido; incumplimiento regulatorio.",
      },
      expectedLearnerResponse: {
        en: "Stop/quarantine remaining units; notify sponsor and PI; patient safety assessment; deviation package.",
        es: "Detener/cuarentenar unidades restantes; notificar patrocinador y PI; evaluación de seguridad del paciente; paquete de desviación.",
      },
      relatedDimensions: ["C", "R"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M9.EX1",
      name: {
        en: "IP Audit Stress Test — partial mismatches, ownership, gaps & uncertainty",
        es: "Prueba de estrés auditoría IP — desajustes parciales, propiedad, brechas e incertidumbre",
      },
      scenario: {
        en: "40 minutes before a monitoring visit: IP logs, temperature records, sponsor emails, and pharmacy notes for three subjects. Reconstruct chains, spot partial mismatches, ownership gaps, documentation contradictions, and an excursion pending sponsor word.",
        es: "40 minutos antes de monitoría: logs de IP, registros de temperatura, correos del patrocinador y notas de farmacia para tres sujetos. Reconstruir cadenas, detectar desajustes parciales, brechas de propiedad, contradicciones documentales y excursión pendiente de respuesta del patrocinador.",
      },
      inputs: [
        { inputId: "M9.IN1", label: { en: "IP accountability logs (3 subjects)", es: "Logs contabilidad IP (3 sujetos)" }, inputKind: "table" },
        { inputId: "M9.IN2", label: { en: "Temperature monitoring + excursion forms", es: "Monitorización térmica + formularios excursión" }, inputKind: "bundle" },
        { inputId: "M9.IN3", label: { en: "Sponsor/pharmacy email thread excerpts", es: "Extractos hilo correo patrocinador/farmacia" }, inputKind: "bundle" },
        { inputId: "M9.IN4", label: { en: "Dispensing & return pharmacy notes", es: "Notas farmacia dispensación y devolución" }, inputKind: "mock_ehr" },
      ],
      learnerTask: {
        en: "Per subject: reconstruct IP chain; flag partial mismatches and log-vs-evidence gaps; resolve ownership issues; state quarantine/safety decision under uncertainty. Classify issues minor/major/critical with patient/data/compliance impact. Propose corrective actions plus system CAPA (reconciliation SOP, RACI, scheduling of joint reviews, excursion decision tree). Draft a concise audit-response summary for the monitor.",
        es: "Por sujeto: reconstruir cadena IP; señalar desajustes parciales y brechas log vs evidencia; resolver propiedad; indicar decisión cuarentena/seguridad bajo incertidumbre. Clasificar hallazgos menor/mayor/crítico con impacto paciente/datos/cumplimiento. Proponer acciones correctivas más CAPA sistema (SOP reconciliación, RACI, agenda revisiones conjuntas, árbol decisión excursiones). Redactar resumen breve de respuesta a auditoría para el monitor.",
      },
      deliverables: [
        { deliverableId: "M9.D1", label: { en: "Per-subject IP chain matrix", es: "Matriz cadena IP por sujeto" }, formatHint: "table" },
        { deliverableId: "M9.D2", label: { en: "Issue register + CAPA", es: "Registro de hallazgos + CAPA" }, formatHint: "pdf" },
        { deliverableId: "M9.D3", label: { en: "Audit / monitor summary", es: "Resumen auditoría / monitor" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M9.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M9.C1",
        description: {
          en: "Treats partial quantity mismatches as stop-work: investigates, documents patient/staff explanations, and closes the math or logs proportional deviation—no hand-waving.",
          es: "Trata desajustes parciales de cantidad como alto el fuego: investiga, documenta explicaciones paciente/personal y cierra la matemática o registra desviación proporcional—sin minimizar.",
        },
        points: 35,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Dismisses 1–3 unit gaps as immaterial without investigation or CAPA.",
          es: "Descarta brechas de 1–3 unidades como inmateriales sin investigación ni CAPA.",
        },
      },
      {
        criterionId: "M9.C2",
        description: {
          en: "Resolves pharmacy/CRC ownership gaps with concrete SOP/RACI updates, training evidence, and documented excursion handling—not prolonged blame exchange.",
          es: "Resuelve brechas de propiedad farmacia/CRC con actualizaciones concretas SOP/RACI, evidencia de capacitación y manejo documentado de excursión—no intercambio prolongado de culpas.",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Leaves ‘who checks the fridge’ undefined or recommends only a reminder email.",
          es: "Deja ‘quién revisa la nevera’ indefinido o recomienda solo correo recordatorio.",
        },
      },
      {
        criterionId: "M9.C3",
        description: {
          en: "Reconciles polished IP logs against emails/timestamps; prescribes GDP-correct amendments and sponsor transparency when narratives conflict.",
          es: "Reconcilia logs pulidos de IP contra correos/marcas; prescribe enmiendas GDP-correctas y transparencia al patrocinador cuando las narrativas chocan.",
        },
        points: 25,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Trusts the tidy log over contemporaneous correspondence without triangulation.",
          es: "Confía en el log pulido sobre correspondencia contemporánea sin triangulación.",
        },
      },
      {
        criterionId: "M9.C4",
        description: {
          en: "Under delayed sponsor guidance, prioritizes patient safety: no dispense of quarantined/uncleared IP; documents clinical rationale and notifications.",
          es: "Con orientación tardía del patrocinador, prioriza seguridad del paciente: no dispensar IP en cuarentena/sin liberar; documenta justificación clínica y notificaciones.",
        },
        points: 15,
        mapsToDimensions: ["C", "R"],
        failCondition: {
          en: "Authorizes use of excursion-affected stock to ‘keep the visit’ without written clearance.",
          es: "Autoriza uso de stock afectado por excursión para ‘salvar la visita’ sin liberación escrita.",
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
      aggregationKey: "ich_gcp_ip_custody_excursion_governance_and_inspection_defense",
    },
    {
      dimension: "C",
      weight: 0.18,
      aggregationKey: "patient_safety_first_ip_quarantine_and_alternate_supply_decisions",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S4 stresses monitor-facing traceability, truthful query/PD narratives, and governance gaps under IMV pressure—the same reconstruction and accountability discipline as IP logs, temperature stories, and sponsor correspondence.",
      es: "OSCE.S4 ejercita trazabilidad cara al monitor, narrativas veraces de query/PD y brechas de gobierno bajo presión de IMV—la misma disciplina de reconstrucción y contabilidad que logs de IP, historias de temperatura y correspondencia con patrocinador.",
    },
    stationIds: ["OSCE.S4"],
  },
  tags: ["operational", "traceability", "data_integrity", "audit_readiness", "regulatory", "bilingual", "flagship"],
  bilingualNotes: {
    en: "Keep IP, IMP, GDP, CAPA, RACI, SOP, CRA, IMV as EN operational tokens; expand cold chain / quarantine once in ES if needed.",
    es: "Mantener IP, IMP, GDP, CAPA, RACI, SOP, CRA, IMV como tokens operativos EN; expandir cadena de frío / cuarentena una vez en ES si hace falta.",
  },
};
