import type {
  CertificationLevel,
  LongitudinalMockStudy,
  RolePathway,
  ViloOsTrainingModule,
} from "../types";

export const VILO_OS_CRC_ACADEMY_MODULE: ViloOsTrainingModule = {
  moduleId: "vilo-os.crc-elite-operating-academy",
  productName: {
    en: "CRC Elite Operating Academy",
    es: "CRC Elite Operating Academy",
  },
  operatingPromise: {
    en: "Train coordinators to run study operations with audit-ready judgment: protect participants, preserve data integrity, escalate early, and defend decisions with evidence.",
    es: "Entrenar coordinadores para operar estudios con juicio listo para auditoría: proteger participantes, preservar integridad de datos, escalar temprano y defender decisiones con evidencia.",
  },
  status: "active",
  ownerFunction: "VILO Research Operations",
  primaryUsers: ["new_crc", "operational_crc", "lead_crc"],
  integrationSurfaces: [
    "VILO OS training dashboard",
    "Supabase progress and signatures",
    "n8n completion webhooks",
    "Future eTMF / CTMS artifact export",
    "Future sponsor-readiness reporting",
  ],
  successMetrics: [
    {
      en: "CRC can reconstruct a subject timeline from source, EDC, logs, and sponsor correspondence without inventing facts.",
      es: "El CRC puede reconstruir una línea de tiempo de sujeto desde fuente, EDC, logs y correspondencia del patrocinador sin inventar hechos.",
    },
    {
      en: "CRC escalates consent, safety, eligibility, IP, and data-integrity risks before they become monitoring findings.",
      es: "El CRC escala riesgos de consentimiento, seguridad, elegibilidad, IP e integridad de datos antes de que se vuelvan hallazgos de monitoría.",
    },
    {
      en: "Lead CRC can produce CAPA, feasibility, budget, and sponsor-escalation artifacts that a site director can use immediately.",
      es: "El Lead CRC puede producir CAPA, factibilidad, presupuesto y escalamiento al patrocinador que un director de sitio puede usar de inmediato.",
    },
  ],
};

export const CRC_ROLE_PATHWAYS: readonly RolePathway[] = [
  {
    pathwayId: "new_crc",
    title: { en: "New CRC Readiness", es: "Preparación de CRC nuevo" },
    targetLearner: {
      en: "New coordinators who must become safe on core site workflows before independent task ownership.",
      es: "Coordinadores nuevos que deben operar flujos esenciales con seguridad antes de asumir tareas independientes.",
    },
    readinessOutcome: {
      en: "Can execute consent-adjacent workflows, logs, visit windows, source basics, and escalation triggers under supervision.",
      es: "Puede ejecutar flujos cercanos al consentimiento, logs, ventanas de visita, fuente básica y disparadores de escalamiento bajo supervisión.",
    },
    modules: ["M1", "M2", "M3", "M4", "M6", "M8", "M10", "M11"],
    milestones: [
      {
        milestoneId: "new-crc.safe-start",
        title: { en: "Safe start gate", es: "Puerta de inicio seguro" },
        moduleIds: ["M1", "M2", "M3", "M6"],
        minimumLevel: "L2",
        operationalGate: {
          en: "Explains when work must stop for consent, eligibility, delegation, or participant-protection risk.",
          es: "Explica cuándo detener trabajo por riesgo de consentimiento, elegibilidad, delegación o protección del participante.",
        },
      },
      {
        milestoneId: "new-crc.source-log-discipline",
        title: { en: "Source and log discipline", es: "Disciplina de fuente y logs" },
        moduleIds: ["M4", "M8", "M10", "M11"],
        minimumLevel: "L2",
        operationalGate: {
          en: "Reconciles one visit packet against source, EDC, AE, deviation, and visit-window evidence.",
          es: "Reconcilia un paquete de visita contra evidencia de fuente, EDC, AE, desviación y ventana de visita.",
        },
      },
    ],
  },
  {
    pathwayId: "operational_crc",
    title: { en: "Operational CRC Excellence", es: "Excelencia operacional CRC" },
    targetLearner: {
      en: "Working CRCs who own subject flow, EDC, IP handoffs, monitor readiness, and daily issue triage.",
      es: "CRC activos que manejan flujo de sujetos, EDC, traspasos IP, preparación de monitoría y triage diario.",
    },
    readinessOutcome: {
      en: "Can run a subject from screening through monitoring with clean evidence, timely escalation, and no integrity shortcuts.",
      es: "Puede operar un sujeto desde screening hasta monitoría con evidencia limpia, escalamiento oportuno y sin atajos de integridad.",
    },
    modules: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M16"],
    milestones: [
      {
        milestoneId: "operational-crc.subject-command",
        title: { en: "Subject command", es: "Mando del sujeto" },
        moduleIds: ["M6", "M8", "M9", "M10", "M11", "M12"],
        minimumLevel: "L3",
        operationalGate: {
          en: "Builds a defensible subject timeline and names open risk without hiding contradictions.",
          es: "Construye una línea de tiempo defendible y nombra riesgos abiertos sin ocultar contradicciones.",
        },
      },
      {
        milestoneId: "operational-crc.monitor-ready",
        title: { en: "Monitor-ready operations", es: "Operación lista para monitoría" },
        moduleIds: ["M4", "M12", "M13", "M16"],
        minimumLevel: "L3",
        operationalGate: {
          en: "Prepares a monitor-facing fact sheet with corrected, pending, and escalated items.",
          es: "Prepara una hoja de hechos para monitor con ítems corregidos, pendientes y escalados.",
        },
      },
    ],
  },
  {
    pathwayId: "lead_crc",
    title: { en: "Lead CRC / Site Operations", es: "Lead CRC / Operaciones del sitio" },
    targetLearner: {
      en: "Senior coordinators and site leads responsible for feasibility, CAPA, sponsor pressure, and team performance.",
      es: "Coordinadores senior y líderes de sitio responsables de factibilidad, CAPA, presión del patrocinador y desempeño del equipo.",
    },
    readinessOutcome: {
      en: "Can protect the site from overcommitment, underfunding, inspection drift, and recurring quality failures.",
      es: "Puede proteger al sitio de sobrecompromiso, subfinanciamiento, deriva de inspección y fallas recurrentes de calidad.",
    },
    modules: ["M3", "M4", "M5", "M7", "M12", "M13", "M14", "M15", "M16", "M17"],
    milestones: [
      {
        milestoneId: "lead-crc.site-risk-command",
        title: { en: "Site risk command", es: "Mando de riesgo del sitio" },
        moduleIds: ["M5", "M13", "M14", "M15"],
        minimumLevel: "L3",
        operationalGate: {
          en: "Produces a go/no-go or renegotiate recommendation using patient funnel, staffing, budget, and GCP risk evidence.",
          es: "Produce recomendación aceptar/no aceptar/renegociar usando embudo de pacientes, personal, presupuesto y riesgo GCP.",
        },
      },
      {
        milestoneId: "lead-crc.inspection-defense",
        title: { en: "Inspection defense", es: "Defensa de inspección" },
        moduleIds: ["M12", "M13", "M16", "M17"],
        minimumLevel: "L3",
        operationalGate: {
          en: "Leads a cross-station crisis brief with priority order, owner map, sponsor escalation, and integrity-trap refusal.",
          es: "Lidera un brief de crisis multi-estación con prioridad, mapa de dueños, escalamiento al patrocinador y rechazo de atajos de integridad.",
        },
      },
    ],
  },
];

export const ONCOLOGY_OSCE_MOCK_STUDY: LongitudinalMockStudy = {
  studyId: "VILO-ONC-301",
  title: {
    en: "VILO-ONC-301: Oncology Phase III Site Operations Simulation",
    es: "VILO-ONC-301: Simulación operacional de sitio oncológico fase III",
  },
  therapeuticArea: { en: "Oncology", es: "Oncología" },
  phase: "Phase III",
  protocolSynopsis: {
    en: "Randomized oncology study with screening labs, imaging eligibility, central pharmacy IP, safety follow-up, PRO capture, and tight visit windows.",
    es: "Estudio oncológico aleatorizado con labs de screening, elegibilidad por imágenes, IP de farmacia central, seguimiento de seguridad, PRO y ventanas estrictas.",
  },
  sponsorPressure: {
    en: "Sponsor is pushing rapid activation, aggressive accrual, clean EDC before month-end, and minimal budget changes despite site workload evidence.",
    es: "El patrocinador presiona activación rápida, reclutamiento agresivo, EDC limpio antes de fin de mes y mínimos cambios presupuestarios pese a evidencia de carga del sitio.",
  },
  weeks: [
    {
      week: 1,
      theme: { en: "Activation and delegation", es: "Activación y delegación" },
      moduleIds: ["M3", "M4", "M5"],
      decisionPoint: {
        en: "Decide whether activation can proceed when the training matrix, DOA, and pharmacy readiness are not aligned.",
        es: "Decidir si la activación puede avanzar cuando matriz de entrenamiento, DOA y farmacia no están alineadas.",
      },
      artifactsDue: ["ART.DOA", "ART.TRAINING_MATRIX", "ART.FEASIBILITY_MEMO"],
    },
    {
      week: 2,
      theme: { en: "Screening and consent control", es: "Control de screening y consentimiento" },
      moduleIds: ["M1", "M6", "M8"],
      decisionPoint: {
        en: "Stop or continue when screening-only procedures appear before valid consent version evidence.",
        es: "Detener o continuar cuando procedimientos de screening aparecen antes de evidencia de consentimiento válido.",
      },
      artifactsDue: ["ART.ICF_VERSION_LOG", "ART.SCREENING_LOG", "ART.SOURCE_NOTE"],
    },
    {
      week: 3,
      theme: { en: "Randomization, IP, and visit execution", es: "Aleatorización, IP y ejecución de visita" },
      moduleIds: ["M8", "M9", "M10"],
      decisionPoint: {
        en: "Determine whether dosing can proceed after a temperature excursion and an unresolved eligibility discrepancy.",
        es: "Determinar si la dosificación puede proceder tras excursión de temperatura y discrepancia de elegibilidad no resuelta.",
      },
      artifactsDue: ["ART.IP_ACCOUNTABILITY", "ART.TEMP_EXCURSION", "ART.ELIGIBILITY_PACKET"],
    },
    {
      week: 4,
      theme: { en: "Safety and EDC pressure", es: "Seguridad y presión EDC" },
      moduleIds: ["M10", "M11", "M12"],
      decisionPoint: {
        en: "Classify a hospitalization ambiguity and decide what EDC, SAE, and source corrections must happen before lock pressure.",
        es: "Clasificar ambigüedad de hospitalización y decidir correcciones EDC, SAE y fuente antes de presión de cierre.",
      },
      artifactsDue: ["ART.AE_LOG", "ART.EDC_QUERY_THREAD", "ART.SAE_AWARENESS_EMAIL"],
    },
    {
      week: 5,
      theme: { en: "Monitoring visit and CAPA", es: "Visita de monitoría y CAPA" },
      moduleIds: ["M4", "M12", "M13"],
      decisionPoint: {
        en: "Prepare a monitor-facing fact sheet that separates corrected facts, open risk, and systemic CAPA.",
        es: "Preparar hoja de hechos para monitor que separe hechos corregidos, riesgo abierto y CAPA sistémico.",
      },
      artifactsDue: ["ART.MONITOR_FACT_SHEET", "ART.CAPA_PLAN", "ART.PI_ESCALATION"],
    },
    {
      week: 6,
      theme: { en: "Sponsor escalation and inspection day", es: "Escalamiento al patrocinador y día de inspección" },
      moduleIds: ["M14", "M15", "M16", "M17"],
      decisionPoint: {
        en: "Defend the site position when sponsor payment pressure conflicts with patient safety, data integrity, and documented resources.",
        es: "Defender la posición del sitio cuando presión de pago del patrocinador choca con seguridad del paciente, integridad de datos y recursos documentados.",
      },
      artifactsDue: ["ART.SPONSOR_ESCALATION", "ART.OSCE_SCORE_EXPORT", "ART.INSPECTION_DEFENSE"],
    },
  ],
  subjects: [
    {
      subjectId: "V301-001",
      status: "active",
      riskThread: {
        en: "Consent version is correct, but visit window and PRO timestamp require reconciliation before monitor review.",
        es: "La versión de consentimiento es correcta, pero ventana de visita y timestamp PRO requieren reconciliación antes de monitoría.",
      },
      artifactIds: ["ART.SOURCE_NOTE", "ART.EDC_QUERY_THREAD"],
    },
    {
      subjectId: "V301-002",
      status: "randomized",
      riskThread: {
        en: "Eligibility lab and randomization timestamp conflict; learner must stop downstream assumptions until PI/sponsor awareness is documented.",
        es: "Lab de elegibilidad y timestamp de aleatorización entran en conflicto; el alumno debe detener supuestos hasta documentar conciencia PI/patrocinador.",
      },
      artifactIds: ["ART.SCREENING_LOG", "ART.ELIGIBILITY_PACKET", "ART.PI_ESCALATION"],
    },
    {
      subjectId: "V301-003",
      status: "screen_failed",
      riskThread: {
        en: "Screen-fail fee, diversity plan, and source support must be reconciled without inflating conversion metrics.",
        es: "Screen-fail fee, plan de diversidad y soporte fuente deben reconciliarse sin inflar métricas de conversión.",
      },
      artifactIds: ["ART.FEASIBILITY_MEMO", "ART.SPONSOR_ESCALATION"],
    },
  ],
  artifacts: [
    {
      artifactId: "ART.DOA",
      kind: "log",
      title: { en: "Delegation of authority log", es: "Log de delegación de autoridad" },
      moduleIds: ["M3", "M13"],
      ownerRole: "PI / Lead CRC",
      operationalUse: {
        en: "Confirms who may consent, perform study tasks, process IP-adjacent workflows, and answer monitor questions.",
        es: "Confirma quién puede consentir, ejecutar tareas, procesar flujos cercanos a IP y responder al monitor.",
      },
      premiumDeliverable: {
        en: "Learner marks delegation gaps and writes an escalation line for PI sign-off.",
        es: "El alumno marca brechas de delegación y escribe línea de escalamiento para firma PI.",
      },
    },
    {
      artifactId: "ART.TRAINING_MATRIX",
      kind: "log",
      title: { en: "Training matrix", es: "Matriz de entrenamiento" },
      moduleIds: ["M3", "M9", "M13"],
      ownerRole: "Lead CRC",
      operationalUse: {
        en: "Shows whether delegated staff are qualified before study activity occurs.",
        es: "Muestra si el personal delegado está calificado antes de actividad del estudio.",
      },
      premiumDeliverable: {
        en: "Learner identifies expired training and maps affected study tasks.",
        es: "El alumno identifica entrenamientos vencidos y mapea tareas afectadas.",
      },
    },
    {
      artifactId: "ART.FEASIBILITY_MEMO",
      kind: "budget",
      title: { en: "Feasibility and adequate-resources memo", es: "Memo de factibilidad y recursos adecuados" },
      moduleIds: ["M5", "M14", "M15"],
      ownerRole: "Site director / Lead CRC",
      operationalUse: {
        en: "Defends accrual, staffing, budget, and patient funnel assumptions before activation or renegotiation.",
        es: "Defiende supuestos de reclutamiento, personal, presupuesto y embudo de pacientes antes de activación o renegociación.",
      },
      premiumDeliverable: {
        en: "Learner produces accept/defer/renegotiate recommendation with evidence.",
        es: "El alumno produce recomendación aceptar/diferir/renegociar con evidencia.",
      },
    },
    {
      artifactId: "ART.ICF_VERSION_LOG",
      kind: "regulatory",
      title: { en: "ICF version-control log", es: "Log de control de versiones ICF" },
      moduleIds: ["M1", "M6", "M11"],
      ownerRole: "CRC / Regulatory",
      operationalUse: {
        en: "Prevents research procedures under wrong or expired consent versions.",
        es: "Previene procedimientos de investigación bajo versiones incorrectas o vencidas de consentimiento.",
      },
      premiumDeliverable: {
        en: "Learner decides stop/continue and drafts transparent re-consent documentation.",
        es: "El alumno decide detener/continuar y redacta documentación transparente de re-consentimiento.",
      },
    },
    {
      artifactId: "ART.SCREENING_LOG",
      kind: "log",
      title: { en: "Screening and enrollment log", es: "Log de screening e inclusión" },
      moduleIds: ["M7", "M8", "M15"],
      ownerRole: "CRC",
      operationalUse: {
        en: "Tracks pre-screening, screen-fails, enrollment decisions, and diversity funnel truthfulness.",
        es: "Rastrea pre-screening, screen-fails, decisiones de inclusión y veracidad del embudo de diversidad.",
      },
      premiumDeliverable: {
        en: "Learner reconciles screen-fail drivers against sponsor reporting.",
        es: "El alumno reconcilia causas de screen-fail contra reporte al patrocinador.",
      },
    },
    {
      artifactId: "ART.SOURCE_NOTE",
      kind: "source",
      title: { en: "Source visit note", es: "Nota fuente de visita" },
      moduleIds: ["M4", "M8", "M10", "M11"],
      ownerRole: "CRC / Provider",
      operationalUse: {
        en: "Anchors what actually happened before EDC, query response, or audit defense language is written.",
        es: "Ancla lo que realmente ocurrió antes de redactar EDC, query o defensa de auditoría.",
      },
      premiumDeliverable: {
        en: "Learner creates an ALCOA+ compliant addendum without rewriting history.",
        es: "El alumno crea una adenda ALCOA+ sin reescribir la historia.",
      },
    },
    {
      artifactId: "ART.IP_ACCOUNTABILITY",
      kind: "ip_accountability",
      title: { en: "IP accountability record", es: "Registro de contabilidad IP" },
      moduleIds: ["M9", "M16"],
      ownerRole: "Pharmacy / CRC",
      operationalUse: {
        en: "Supports dose traceability, handoff precision, and quantity reconciliation.",
        es: "Soporta trazabilidad de dosis, precisión de traspasos y reconciliación de cantidades.",
      },
      premiumDeliverable: {
        en: "Learner reconciles dispense, return, and excursion impact before dosing decision.",
        es: "El alumno reconcilia dispensación, retorno e impacto de excursión antes de decisión de dosificación.",
      },
    },
    {
      artifactId: "ART.TEMP_EXCURSION",
      kind: "ip_accountability",
      title: { en: "Temperature excursion report", es: "Reporte de excursión de temperatura" },
      moduleIds: ["M9", "M10", "M16"],
      ownerRole: "Pharmacy / Sponsor",
      operationalUse: {
        en: "Determines quarantine, sponsor medical/product-quality contact, and dosing hold decisions.",
        es: "Determina cuarentena, contacto médico/calidad del patrocinador y decisiones de hold de dosificación.",
      },
      premiumDeliverable: {
        en: "Learner refuses dosing until documented disposition is obtained.",
        es: "El alumno rechaza dosificar hasta obtener disposición documentada.",
      },
    },
    {
      artifactId: "ART.ELIGIBILITY_PACKET",
      kind: "worksheet",
      title: { en: "Eligibility packet", es: "Paquete de elegibilidad" },
      moduleIds: ["M2", "M8", "M16"],
      ownerRole: "CRC / PI",
      operationalUse: {
        en: "Connects protocol criteria, source evidence, PI assessment, and randomization decision.",
        es: "Conecta criterios del protocolo, evidencia fuente, evaluación PI y decisión de aleatorización.",
      },
      premiumDeliverable: {
        en: "Learner reconstructs eligibility minute-by-minute and names whether randomization must stop.",
        es: "El alumno reconstruye elegibilidad minuto a minuto y nombra si debe detenerse aleatorización.",
      },
    },
    {
      artifactId: "ART.AE_LOG",
      kind: "log",
      title: { en: "AE / SAE log", es: "Log AE / SAE" },
      moduleIds: ["M10", "M12"],
      ownerRole: "CRC / PI",
      operationalUse: {
        en: "Ensures symptoms in source are captured, classified, followed, and reported with defensible timing.",
        es: "Asegura que síntomas en fuente sean capturados, clasificados, seguidos y reportados con tiempos defendibles.",
      },
      premiumDeliverable: {
        en: "Learner classifies ambiguous hospitalization and drafts awareness timeline.",
        es: "El alumno clasifica hospitalización ambigua y redacta línea de tiempo de conciencia.",
      },
    },
    {
      artifactId: "ART.EDC_QUERY_THREAD",
      kind: "edc",
      title: { en: "EDC query thread", es: "Hilo de queries EDC" },
      moduleIds: ["M11", "M12", "M13"],
      ownerRole: "CRC / Data manager",
      operationalUse: {
        en: "Shows pressure points where source truth, lock timelines, and query language collide.",
        es: "Muestra puntos de presión donde fuente, cierre y lenguaje de query chocan.",
      },
      premiumDeliverable: {
        en: "Learner answers queries using supported facts and preserves audit trail.",
        es: "El alumno responde queries usando hechos soportados y preserva audit trail.",
      },
    },
    {
      artifactId: "ART.SAE_AWARENESS_EMAIL",
      kind: "email",
      title: { en: "Sponsor SAE awareness email", es: "Correo de conciencia SAE al patrocinador" },
      moduleIds: ["M10", "M13"],
      ownerRole: "CRC / PI",
      operationalUse: {
        en: "Documents what the site knew, when it knew it, and what remains clinically unresolved.",
        es: "Documenta qué sabía el sitio, cuándo lo sabía y qué sigue clínicamente sin resolver.",
      },
      premiumDeliverable: {
        en: "Learner writes a transparent notification without minimizing seriousness.",
        es: "El alumno escribe notificación transparente sin minimizar gravedad.",
      },
    },
    {
      artifactId: "ART.MONITOR_FACT_SHEET",
      kind: "worksheet",
      title: { en: "Monitor-facing fact sheet", es: "Hoja de hechos para monitor" },
      moduleIds: ["M4", "M12", "M13"],
      ownerRole: "Lead CRC",
      operationalUse: {
        en: "Prepares the site for IMV with corrected, pending, blocked, and escalated items.",
        es: "Prepara al sitio para IMV con ítems corregidos, pendientes, bloqueados y escalados.",
      },
      premiumDeliverable: {
        en: "Learner produces a one-page monitor brief with no unsupported claims.",
        es: "El alumno produce brief de una página sin afirmaciones sin soporte.",
      },
    },
    {
      artifactId: "ART.CAPA_PLAN",
      kind: "worksheet",
      title: { en: "Systemic CAPA plan", es: "Plan CAPA sistémico" },
      moduleIds: ["M4", "M5", "M13", "M17"],
      ownerRole: "QA / Lead CRC",
      operationalUse: {
        en: "Turns recurring issue patterns into owner/date/control actions instead of one-off retraining.",
        es: "Convierte patrones recurrentes en acciones con dueño/fecha/control en vez de reentrenamiento aislado.",
      },
      premiumDeliverable: {
        en: "Learner writes immediate containment plus long-term preventive control.",
        es: "El alumno escribe contención inmediata y control preventivo de largo plazo.",
      },
    },
    {
      artifactId: "ART.PI_ESCALATION",
      kind: "email",
      title: { en: "PI escalation brief", es: "Brief de escalamiento al PI" },
      moduleIds: ["M3", "M6", "M10", "M13"],
      ownerRole: "CRC",
      operationalUse: {
        en: "Gets investigator judgment documented when risk exceeds coordinator authority.",
        es: "Documenta juicio del investigador cuando el riesgo excede autoridad del coordinador.",
      },
      premiumDeliverable: {
        en: "Learner drafts concise PI escalation with decision needed and evidence attached.",
        es: "El alumno redacta escalamiento conciso al PI con decisión requerida y evidencia adjunta.",
      },
    },
    {
      artifactId: "ART.SPONSOR_ESCALATION",
      kind: "email",
      title: { en: "Sponsor escalation package", es: "Paquete de escalamiento al patrocinador" },
      moduleIds: ["M5", "M14", "M15", "M17"],
      ownerRole: "Site director / Lead CRC",
      operationalUse: {
        en: "Defends staffing, budget, accrual, safety, and data-integrity constraints against sponsor pressure.",
        es: "Defiende restricciones de personal, presupuesto, reclutamiento, seguridad e integridad contra presión del patrocinador.",
      },
      premiumDeliverable: {
        en: "Learner writes 24h/72h sponsor plan with decision rights and artifact bundle.",
        es: "El alumno escribe plan patrocinador 24h/72h con derechos de decisión y paquete de artefactos.",
      },
    },
    {
      artifactId: "ART.OSCE_SCORE_EXPORT",
      kind: "worksheet",
      title: { en: "OSCE score export", es: "Export de puntaje OSCE" },
      moduleIds: ["M16"],
      ownerRole: "Evaluator",
      operationalUse: {
        en: "Captures station performance, critical triggers, remediation, and certification readiness.",
        es: "Captura desempeño por estación, disparadores críticos, remediación y preparación para certificación.",
      },
      premiumDeliverable: {
        en: "Learner submits station score JSON plus self-debrief.",
        es: "El alumno entrega JSON de puntajes por estación más auto-debrief.",
      },
    },
    {
      artifactId: "ART.INSPECTION_DEFENSE",
      kind: "worksheet",
      title: { en: "Integrated inspection defense", es: "Defensa integrada de inspección" },
      moduleIds: ["M13", "M16", "M17"],
      ownerRole: "Lead CRC / Site director",
      operationalUse: {
        en: "Combines priority order, cross-station linkages, QA containment, and sponsor escalation into one defensible narrative.",
        es: "Combina prioridad, vínculos multi-estación, contención QA y escalamiento al patrocinador en una narrativa defendible.",
      },
      premiumDeliverable: {
        en: "Learner produces final inspection-day command package.",
        es: "El alumno produce paquete final de mando para día de inspección.",
      },
    },
  ],
};

export const CRC_CERTIFICATION_LEVELS: readonly CertificationLevel[] = [
  {
    levelId: "completion",
    title: { en: "Completion Certificate", es: "Certificado de finalización" },
    eligiblePathways: ["new_crc", "operational_crc", "lead_crc"],
    evidenceRequired: [
      { en: "All assigned lessons viewed or acknowledged.", es: "Todas las lecciones asignadas vistas o reconocidas." },
      { en: "Digital attestation completed.", es: "Declaración digital completada." },
    ],
    minimumSignals: { artifactCount: 4 },
  },
  {
    levelId: "operational_readiness",
    title: { en: "Operational Readiness Certificate", es: "Certificado de preparación operacional" },
    eligiblePathways: ["new_crc", "operational_crc"],
    evidenceRequired: [
      { en: "Passes safe-start and source/log discipline gates.", es: "Aprueba puertas de inicio seguro y disciplina fuente/logs." },
      { en: "Produces at least eight site-ready artifacts.", es: "Produce al menos ocho artefactos listos para sitio." },
    ],
    minimumSignals: {
      modulesRequired: ["M1", "M2", "M3", "M4", "M6", "M8", "M10", "M11"],
      artifactCount: 8,
      dimensions: { R: 0.72, O: 0.72, C: 0.72, Q: 0.76 },
    },
  },
  {
    levelId: "elite_crc",
    title: { en: "Elite CRC Certificate", es: "Certificado Elite CRC" },
    eligiblePathways: ["operational_crc", "lead_crc"],
    evidenceRequired: [
      { en: "Passes multi-station OSCE without critical integrity or participant-protection fail.", es: "Aprueba OSCE multi-estación sin fallo crítico de integridad o protección del participante." },
      { en: "Defends eligibility, consent, safety, IP, EDC, and source decisions under time pressure.", es: "Defiende decisiones de elegibilidad, consentimiento, seguridad, IP, EDC y fuente bajo presión." },
    ],
    minimumSignals: {
      capstoneNormalized: 0.78,
      modulesRequired: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M16"],
      artifactCount: 14,
      dimensions: { R: 0.74, O: 0.74, C: 0.74, Q: 0.78 },
    },
  },
  {
    levelId: "lead_crc_endorsement",
    title: { en: "Lead CRC Site Operations Endorsement", es: "Endoso Lead CRC de operaciones del sitio" },
    eligiblePathways: ["lead_crc"],
    evidenceRequired: [
      { en: "Produces feasibility, CAPA, sponsor escalation, and inspection defense package.", es: "Produce paquete de factibilidad, CAPA, escalamiento al patrocinador y defensa de inspección." },
      { en: "Shows ability to refuse overcommitment and integrity shortcuts while preserving site revenue strategy.", es: "Demuestra capacidad de rechazar sobrecompromiso y atajos de integridad preservando estrategia de ingresos del sitio." },
    ],
    minimumSignals: {
      capstoneNormalized: 0.82,
      modulesRequired: ["M5", "M13", "M14", "M15", "M16", "M17"],
      artifactCount: 18,
      dimensions: { R: 0.78, O: 0.78, C: 0.76, Q: 0.8 },
    },
  },
];
