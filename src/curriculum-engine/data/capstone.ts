// src/curriculum-engine/data/capstone.ts
//
// Time enforcement (real inspection realism):
// Stations are intentionally time-boxed. If a learner cannot produce a clear, structured response within the allotted
// station time, performance is considered incomplete. Inspectors and monitors evaluate speed of reconstruction and
// decision-making—not only correctness—so partial work with explicit open risks is preferred over silent omissions.

import type { CapstoneStation } from "../types";

export const CAPSTONE_STATION_REGISTRY: readonly CapstoneStation[] = [
  {
    stationId: "OSCE.S1",
    stationType: "eligibility_screening",
    title: { en: "Eligibility & screening traceability", es: "Elegibilidad y trazabilidad de screening" },
    mappedDimensions: ["O", "Q", "R"],
    scenario: {
      scenarioId: "OSCE.S1.SC1",
      title: { en: "HbA1c screen-fail keyed as pass", es: "Screen-fail de HbA1c capturado como pass" },
      narrative: {
        en: "Outpatient visit: lab interface shows HbA1c 8.2% at screening; inclusion requires ≤7.5%. Screening worksheet in CTMS shows ‘pass’. Subject ID-204 was issued same afternoon; randomization slot is booked for Tuesday.",
        es: "Visita ambulatoria: interfaz de lab muestra HbA1c 8,2% en screening; inclusión exige ≤7,5%. Hoja de screening en CTMS muestra ‘pass’. Se emitió ID-204 esa tarde; cupo de aleatorización reservado para martes.",
      },
      seededDefects: [
        {
          en: "Screening log row ‘pass’ vs lab result file timestamp 14:06",
          es: "Fila de log ‘pass’ vs archivo de resultado de lab marca 14:06",
        },
        {
          en: "Enrollment log date precedes signed eligibility checklist scan in eISF",
          es: "Fecha de log de inclusión precede escaneo firmado de checklist de elegibilidad en eISF",
        },
        {
          en: "Coordinator note: ‘PI verbally ok to proceed’ without documented assessment",
          es: "Nota de coordinación: ‘PI verbal ok para continuar’ sin valoración documentada",
        },
      ],
    },
    inputs: [
      { inputId: "S1.IN1", label: { en: "CTMS screening worksheet + amendment footnote", es: "Hoja CTMS + nota de enmienda" }, inputKind: "table" },
      { inputId: "S1.IN2", label: { en: "Lab flowsheet + interface exception queue", es: "Flujo de lab + cola de excepciones" }, inputKind: "mock_ehr" },
      { inputId: "S1.IN3", label: { en: "Subject ID list + enrollment pending report", es: "Lista IDs + reporte inclusión pendiente" }, inputKind: "table" },
    ],
    tasks: [
      {
        en: "Reconstruct minute-by-minute sequence; classify discrepancy as eligibility break vs documentation-only.",
        es: "Reconstruir secuencia minuto a minuto; clasificar como brecha de elegibilidad vs solo documentación.",
      },
      {
        en: "Draft mini-CAPA: stop randomization steps, owner, date, sponsor notification line.",
        es: "Mini-CAPA: detener aleatorización, responsable, fecha, línea de notificación al patrocinador.",
      },
    ],
    rubric: {
      rubricId: "OSCE.R1",
      totalPoints: 100,
      passingPoints: 82,
      criteria: [
        {
          criterionId: "OSCE.S1.C1",
          description: {
            en: "Timeline ties lab result → screening decision → ID issuance; flags that randomization cannot proceed on facts given.",
            es: "Línea temporal une resultado lab → decisión screening → emisión ID; señala que aleatorización no puede proceder con estos hechos.",
          },
          points: 45,
          mapsToDimensions: ["Q", "O"],
          failCondition: {
            en: "Treats CTMS ‘pass’ as authoritative over wet-lab evidence or misses that inclusion criterion is failed.",
            es: "Trata ‘pass’ del CTMS como autoridad sobre evidencia de lab o no ve que el criterio de inclusión no se cumple.",
          },
        },
        {
          criterionId: "OSCE.S1.C2",
          description: {
            en: "Mini-CAPA stops the line, assigns accountable owner, dated actions, proportional to eligibility risk.",
            es: "Mini-CAPA detiene línea, asigna responsable, acciones fechadas, proporcional a riesgo de elegibilidad.",
          },
          points: 35,
          mapsToDimensions: ["O", "R"],
          failCondition: {
            en: "CAPA is ‘retrain screening’ only without halting ID/randomization exposure.",
            es: "CAPA es solo ‘reentrenar screening’ sin detener exposición ID/aleatorización.",
          },
        },
        {
          criterionId: "OSCE.S1.C3",
          description: {
            en: "Regulatory escalation: who is informed, by when, and with what artifacts attached.",
            es: "Escalamiento regulatorio: quién, para cuándo y con qué artefactos adjuntos.",
          },
          points: 20,
          mapsToDimensions: ["R", "Q"],
          failCondition: {
            en: "Suggests fixing logs quietly without sponsor/PI awareness appropriate to a potential randomized-ineligible subject.",
            es: "Sugiere arreglar logs en silencio sin conciencia patrocinador/PI apropiada ante posible sujeto inelegible aleatorizado.",
          },
        },
      ],
    },
    failConditions: [
      {
        failId: "OSCE.S1.F1",
        description: {
          en: "Randomization or dosing proceeds while HbA1c failure vs ‘pass’ row is unresolved.",
          es: "Aleatorización o dosificación avanza sin resolver fallo HbA1c vs fila ‘pass’.",
        },
        triggerKey: "eligibility_trace_break",
        severity: "critical",
      },
    ],
    dimensionFloor: { Q: 0.78, O: 0.74, R: 0.72 },
  },
  {
    stationId: "OSCE.S2",
    stationType: "consent_visit",
    title: { en: "Consent execution & visit documentation", es: "Consentimiento y documentación de visita" },
    mappedDimensions: ["R", "C", "Q"],
    scenario: {
      scenarioId: "OSCE.S2.SC1",
      title: { en: "Wrong ICD version + D1 visit already started", es: "Versión ICD incorrecta + visita D1 ya iniciada" },
      narrative: {
        en: "Participant presents for Day 1. Signed consent on file is v1.2; IRB letter in eISF shows v1.3 effective 4 days ago with new pregnancy counseling paragraph. Vitals and PK tube already drawn; CRC started visit packet before PI signed corrected consent.",
        es: "Participante acude a D1. Consentimiento archivado es v1.2; carta CEI en eISF muestra v1.3 vigente hace 4 días con nuevo párrafo de embarazo. Ya se tomaron signos y tubo PK; CRC inició paquete de visita antes de firma de consentimiento corregido del PI.",
      },
      seededDefects: [
        { en: "eISF missing stamped v1.3 in local language", es: "eISF sin v1.3 sellada en idioma local" },
        { en: "Visit checklist ticked ‘ICD verified’ with v1.2 barcode only", es: "Checklist marca ‘ICD verificado’ solo con código v1.2" },
      ],
    },
    inputs: [
      { inputId: "S2.IN1", label: { en: "Signed ICD (scanned)", es: "ICD firmado (escaneo)" }, inputKind: "pdf" },
      { inputId: "S2.IN2", label: { en: "IRB approval + version history", es: "Aprobación CEI + historial de versiones" }, inputKind: "pdf" },
      { inputId: "S2.IN3", label: { en: "Visit procedure start log", es: "Log de inicio de procedimientos" }, inputKind: "table" },
    ],
    tasks: [
      {
        en: "Decide stop/hold vs continue with containment; justify with participant-risk framing.",
        es: "Decidir parada/en contención vs continuar; justificar con enfoque de riesgo al participante.",
      },
      {
        en: "List corrective documentation actions and who signs what today vs retroactively.",
        es: "Listar acciones correctivas y quién firma hoy vs retroactivamente.",
      },
    ],
    rubric: {
      rubricId: "OSCE.R2",
      totalPoints: 100,
      passingPoints: 80,
      criteria: [
        {
          criterionId: "OSCE.S2.C1",
          description: {
            en: "Version control decision is correct: identifies wrong ICD, halts or contains further procedures per facts, cites IRB effective date.",
            es: "Decisión de control de versiones correcta: identifica ICD erróneo, detiene o contiene procedimientos según hechos, cita fecha efectiva CEI.",
          },
          points: 55,
          mapsToDimensions: ["R", "Q"],
          failCondition: {
            en: "Authorizes continuing PK/lab or protocol procedures as if v1.2 were still effective.",
            es: "Autoriza continuar PK/lab o procedimientos como si v1.2 siguiera vigente.",
          },
        },
        {
          criterionId: "OSCE.S2.C2",
          description: {
            en: "Participant protection narrative: what was explained, what was stopped, PI involvement, transparent re-consent path.",
            es: "Narrativa de protección: qué se explicó, qué se detuvo, involucramiento PI, vía transparente de re-consentimiento.",
          },
          points: 45,
          mapsToDimensions: ["C", "R"],
          failCondition: {
            en: "Blames participant or uses ‘retroactive consent’ language to paper over started procedures.",
            es: "Culpa al participante o usa ‘consentimiento retroactivo’ para cubrir procedimientos ya iniciados.",
          },
        },
      ],
    },
    failConditions: [
      {
        failId: "OSCE.S2.F1",
        description: {
          en: "PI unaware while invasive or PK procedures continue under invalid ICD version.",
          es: "PI sin conocimiento mientras procedimientos invasivos o PK continúan bajo ICD inválida.",
        },
        triggerKey: "icd_version_unresolved",
        severity: "high",
      },
    ],
    dimensionFloor: { R: 0.76, C: 0.74, Q: 0.75 },
  },
  {
    stationId: "OSCE.S3",
    stationType: "safety_ae",
    title: { en: "AE / SAE gray-zone escalation", es: "Zona gris AE / SAE" },
    mappedDimensions: ["R", "C", "Q"],
    scenario: {
      scenarioId: "OSCE.S3.SC1",
      title: { en: "ED observation overnight — admission status unclear", es: "Observación en ED toda la noche — estatus de ingreso poco claro" },
      narrative: {
        en: "Subject reports chest pressure; troponins negative; kept in ED observation unit overnight on monitor. Attending documents ‘observation status, not admitted’; nursing notes write ‘admitted to observation bay’. EDC serious hospitalization field still ‘No’; sponsor 24h awareness clock email template is open.",
        es: "Sujeto reporta opresión en pecho; troponinas negativas; permanece en unidad de observación del ED con monitor toda la noche. Médico documenta ‘estatus observación, no ingreso’; enfermería escribe ‘ingresado a bahía de observación’. EDC mantiene hospitalización seria en ‘No’; plantilla de correo 24h de conciencia patrocinador está abierta.",
      },
      seededDefects: [
        { en: "Discharge summary header vs body disagree on ‘admitted’", es: "Encabezado vs cuerpo de alta discrepan en ‘ingresado’" },
        { en: "Case report narrative copied from prior visit (same text)", es: "Narrativa de reporte copiada de visita previa (mismo texto)" },
      ],
    },
    inputs: [
      { inputId: "S3.IN1", label: { en: "ED provider + nursing bundle", es: "Paquete médico ED + enfermería" }, inputKind: "mock_ehr" },
      { inputId: "S3.IN2", label: { en: "Protocol SAE definitions + IB excerpt", es: "Definiciones SAE del protocolo + extracto IB" }, inputKind: "pdf" },
      { inputId: "S3.IN3", label: { en: "Blank sponsor awareness email + EDC snapshot", es: "Correo plantilla conciencia + captura EDC" }, inputKind: "table" },
    ],
    tasks: [
      {
        en: "Classify AE vs SAE with explicit criteria quotes; state uncertainty where chart conflicts.",
        es: "Clasificar AE vs SAE con citas explícitas de criterios; declarar incertidumbre ante conflictos.",
      },
      {
        en: "Draft escalation timeline: PI awareness, sponsor medical, IRB if required by site SOP.",
        es: "Borrar línea de tiempo: conciencia PI, médico patrocinador, CEI si SOP lo exige.",
      },
    ],
    rubric: {
      rubricId: "OSCE.R3",
      totalPoints: 100,
      passingPoints: 80,
      criteria: [
        {
          criterionId: "OSCE.S3.C1",
          description: {
            en: "Classification and reporting posture are defensible: does not close ‘non-serious’ while hospitalization criteria may be met; involves PI appropriately.",
            es: "Clasificación y postura de reporte defendibles: no cierra ‘no grave’ si podría cumplirse hospitalización; involucra PI apropiadamente.",
          },
          points: 50,
          mapsToDimensions: ["R", "C"],
          failCondition: {
            en: "Selects ‘not serious’ or delays awareness to avoid expedited workload when admission status is unresolved.",
            es: "Elige ‘no grave’ o retrasa conciencia para evitar carga expedita con ingreso no resuelto.",
          },
        },
        {
          criterionId: "OSCE.S3.C2",
          description: {
            en: "Source/EDC alignment plan: fix duplicate narrative, align serious field, preserve audit trail.",
            es: "Plan fuente/EDC: corregir narrativa duplicada, alinear campo serio, preservar audit trail.",
          },
          points: 30,
          mapsToDimensions: ["Q"],
          failCondition: {
            en: "Proposes silent delete of conflicting nursing note reference.",
            es: "Propone borrar silenciosamente referencia conflictiva de nota de enfermería.",
          },
        },
        {
          criterionId: "OSCE.S3.C3",
          description: {
            en: "Deviation documented if protocol-driven follow-up or reporting window was missed.",
            es: "Desviación documentada si se perdió ventana de seguimiento o reporte del protocolo.",
          },
          points: 20,
          mapsToDimensions: ["Q", "R"],
          failCondition: {
            en: "Omits PD when site already exceeded local SOP for safety follow-up draw.",
            es: "Omite PD cuando sitio ya excedió SOP local para extracción de seguimiento de seguridad.",
          },
        },
      ],
    },
    failConditions: [
      {
        failId: "OSCE.S3.F1",
        description: {
          en: "Confirmed SAE pathway triggered but sponsor awareness timestamp is after expedited window in scenario facts.",
          es: "Vía SAE confirmada disparada pero marca de conciencia patrocinador es posterior a ventana expedita según hechos.",
        },
        triggerKey: "sae_reporting_missed",
        severity: "critical",
      },
    ],
    dimensionFloor: { R: 0.78, C: 0.78, Q: 0.74 },
  },
  {
    stationId: "OSCE.S4",
    stationType: "logs_traceability",
    title: { en: "Logs, PD, and monitoring readiness", es: "Logs, PD y preparación de monitoría" },
    mappedDimensions: ["O", "Q", "R"],
    scenario: {
      scenarioId: "OSCE.S4.SC1",
      title: { en: "IMV in 48h — query shows window slip PD log empty", es: "IMV en 48h — query muestra ventana PD log vacío" },
      narrative: {
        en: "Interim monitoring visit Friday. Open EDC query shows Visit 3 outside window since Monday. PD log has no row. DOA lists CRC performing PK processing; GCP refresher for that CRC is due in 8 days per CTMS. Training matrix PDF attached to TMF is 6 months stale.",
        es: "Monitoría interina viernes. Query EDC abierta muestra Visita 3 fuera de ventana desde lunes. Log PD sin fila. DOA lista CRC en procesamiento PK; refresher GCP de ese CRC vence en 8 días según CTMS. PDF de matriz de capacitación en TMF tiene 6 meses de desactualización.",
      },
      seededDefects: [
        { en: "Query response draft says ‘monitor approved’ but no email artifact", es: "Borrador de respuesta a query dice ‘monitor aprobó’ sin artefacto de correo" },
        { en: "PK processing date on lab requisition ≠ visit date", es: "Fecha procesamiento PK en requisición lab ≠ fecha visita" },
      ],
    },
    inputs: [
      { inputId: "S4.IN1", label: { en: "PD log + deviation SOP excerpt", es: "Log PD + extracto SOP desviaciones" }, inputKind: "table" },
      { inputId: "S4.IN2", label: { en: "DOA + CTMS training + matrix PDF", es: "DOA + CTMS capacitación + PDF matriz" }, inputKind: "table" },
      { inputId: "S4.IN3", label: { en: "EDC query thread + visit schedule", es: "Hilo query EDC + agenda visitas" }, inputKind: "export" },
    ],
    tasks: [
      {
        en: "Reconcile PD + query; separate true window violation from documentation lag.",
        es: "Reconciliar PD + query; separar violación real de ventana de retraso documental.",
      },
      {
        en: "Prepare monitor-facing fact sheet: what happened, what is corrected, what is still at risk.",
        es: "Ficha para monitor: qué pasó, qué se corrige, qué sigue en riesgo.",
      },
    ],
    rubric: {
      rubricId: "OSCE.R4",
      totalPoints: 100,
      passingPoints: 82,
      criteria: [
        {
          criterionId: "OSCE.S4.C1",
          description: {
            en: "Traceability reconstruction includes training currency gap and its impact on delegated PK tasks.",
            es: "Reconstrucción incluye brecha de capacitación y su impacto en tareas PK delegadas.",
          },
          points: 45,
          mapsToDimensions: ["Q", "O"],
          failCondition: {
            en: "Dismisses DOA/CTMS mismatch as ‘admin only’ while PK was processed under questionable delegation.",
            es: "Descarta desajuste DOA/CTMS como ‘solo admin’ mientras PK se procesó bajo delegación dudosa.",
          },
        },
        {
          criterionId: "OSCE.S4.C2",
          description: {
            en: "CAPA proportional: addresses late PD capture, query truthfulness, and training matrix governance.",
            es: "CAPA proporcional: captura tardía PD, veracidad en queries y gobierno de matriz de capacitación.",
          },
          points: 35,
          mapsToDimensions: ["O", "R"],
          failCondition: {
            en: "CAPA is only ‘close the query’ without fixing root governance.",
            es: "CAPA es solo ‘cerrar query’ sin corregir gobierno raíz.",
          },
        },
        {
          criterionId: "OSCE.S4.C3",
          description: {
            en: "Monitor communication is factual; no fabricated sponsor approvals.",
            es: "Comunicación factual al monitor; sin aprobaciones inventadas del patrocinador.",
          },
          points: 20,
          mapsToDimensions: ["Q", "R"],
          failCondition: {
            en: "States monitor approval or sponsor direction not supported by artifacts.",
            es: "Afirma aprobación del monitor o dirección del patrocinador sin soporte en artefactos.",
          },
        },
      ],
    },
    failConditions: [
      {
        failId: "OSCE.S4.F1",
        description: {
          en: "PD or training delegation gap omitted from narrative sent to CRA while IMV proceeds.",
          es: "Brecha de PD o delegación omitida en narrativa al CRA mientras avanza IMV.",
        },
        triggerKey: "pd_concealment",
        severity: "critical",
      },
    ],
    dimensionFloor: { Q: 0.8, O: 0.75, R: 0.72 },
  },
  {
    stationId: "OSCE.S5",
    stationType: "source_alcoa",
    title: { en: "Source documentation & ALCOA repair", es: "Documentación fuente y reparación ALCOA" },
    mappedDimensions: ["Q", "R", "C"],
    scenario: {
      scenarioId: "OSCE.S5.SC1",
      title: { en: "Same-day note stack + audit trail mismatch", es: "Pila de notas mismo día + discrepancia audit trail" },
      narrative: {
        en: "Progress note for oncology visit shows assessment time 09:10; EMR audit trail shows create/edit events at 16:45 after CRA email. White-space squeeze correction without initials. Pain score changed from 6 to 2 with no clinician re-evaluation documented.",
        es: "Nota de oncología muestra hora 09:10; audit trail EMR muestra creación/edición a las 16:45 tras correo del CRA. Corrección en espacio en blanco sin iniciales. Escala de dolor 6→2 sin reevaluación clínica documentada.",
      },
      seededDefects: [
        { en: "Cosigned template still lists prior day’s performance status", es: "Plantilla co-firmada aún lista estado funcional del día previo" },
        { en: "Monitor query asks for ‘clarify pain trend’ — learner tempted to invent exam", es: "Query pide ‘aclarar tendencia dolor’ — tentación de inventar examen" },
      ],
    },
    inputs: [
      { inputId: "S5.IN1", label: { en: "Defective note + full audit trail PDF", es: "Nota defectuosa + PDF audit trail completo" }, inputKind: "mock_ehr" },
      { inputId: "S5.IN2", label: { en: "Site correction SOP one-pager", es: "SOP de correcciones del sitio (una página)" }, inputKind: "pdf" },
    ],
    tasks: [
      {
        en: "Rewrite or addendum per SOP; draft monitor response that quotes audit events honestly.",
        es: "Reescritura o adenda según SOP; borrador al monitor citando eventos de auditoría con honestidad.",
      },
    ],
    rubric: {
      rubricId: "OSCE.R5",
      totalPoints: 100,
      passingPoints: 78,
      criteria: [
        {
          criterionId: "OSCE.S5.C1",
          description: {
            en: "ALCOA+ compliant repair: attributable, legible, contemporaneous discipline; timing of awareness of error is explicit.",
            es: "Reparación ALCOA+: atribuible, legible, contemporánea; momento de conciencia del error explícito.",
          },
          points: 60,
          mapsToDimensions: ["Q"],
          failCondition: {
            en: "Masks late entry as original visit time or hides audit trail events in monitor-facing text.",
            es: "Enmascara entrada tardía como hora original de visita u oculta eventos de audit trail al monitor.",
          },
        },
        {
          criterionId: "OSCE.S5.C2",
          description: {
            en: "Clinical coherence: pain change or assessment lines match what source can support; no fabricated exam.",
            es: "Coherencia clínica: cambio de dolor o líneas de valoración coinciden con lo que la fuente soporta; sin examen inventado.",
          },
          points: 40,
          mapsToDimensions: ["C", "Q"],
          failCondition: {
            en: "Adds new physical exam or timeline facts not in the chart packet to satisfy query.",
            es: "Añade examen físico o hechos temporales nuevos no en el paquete para satisfacer query.",
          },
        },
      ],
    },
    failConditions: [
      {
        failId: "OSCE.S5.F1",
        description: {
          en: "Introduces assessment or symptom narrative unsupported by contemporaneous provider documentation.",
          es: "Introduce valoración o narrativa de síntomas sin soporte contemporáneo del proveedor.",
        },
        triggerKey: "source_fabrication",
        severity: "critical",
      },
    ],
    dimensionFloor: { Q: 0.78, R: 0.74, C: 0.72 },
  },
  {
    stationId: "OSCE.S6",
    stationType: "feasibility_commitment",
    title: {
      en: "Feasibility, resources & sponsor-pressure commitment",
      es: "Viabilidad, recursos y compromiso bajo presión del patrocinador",
    },
    mappedDimensions: ["R", "O", "Q", "C"],
    scenario: {
      scenarioId: "OSCE.S6.SC1",
      title: {
        en: "Fast-start Friday vs EMR accrual reality",
        es: "Arranque rápido viernes vs realidad de reclutamiento en EMR",
      },
      narrative: {
        en: "Sponsor emails Phase III oncology synopsis: 30 subjects in 18 months (~20/year). Your EMR query and historical accrual for the indication show ~4 evaluable patients/year at full criteria. Draft budget omits a data-management line; screen-fail fees are $0. Sponsor: ‘Fast-start partner—we need commitment by Friday; other sites already agreed to targets and budget.’ PI wants to sign to secure revenue and ‘figure out referrals later.’",
        es: "Patrocinador envía sinopsis oncología fase III: 30 sujetos en 18 meses (~20/año). Consulta EMR y reclutamiento histórico para la indicación muestran ~4 pacientes evaluables/año con criterios completos. Borrador de presupuesto omite partida de gestión de datos; screen-fail en 0 USD. Patrocinador: ‘Socio fast-start—necesitamos compromiso para viernes; otros sitios ya acordaron metas y presupuesto.’ PI quiere firmar por ingresos y ‘ver referidos después.’",
      },
      seededDefects: [
        {
          en: "Accrual target vs documented patient funnel is an order-of-magnitude mismatch",
          es: "Meta de reclutamiento vs embudo documentado de pacientes difiere por orden de magnitud",
        },
        {
          en: "No budget line for expected query/PRO workload or safety follow-up intensity",
          es: "Sin partida presupuestaria para carga esperada de queries/PRO o intensidad de seguimiento de seguridad",
        },
        {
          en: "Artificial deadline pressures agreement without documented adequate-resources analysis",
          es: "Plazo artificial presiona acuerdo sin análisis documentado de recursos adecuados",
        },
      ],
    },
    inputs: [
      { inputId: "S6.IN1", label: { en: "Synopsis + SoA complexity summary", es: "Sinopsis + resumen complejidad SoA" }, inputKind: "pdf" },
      { inputId: "S6.IN2", label: { en: "EMR feasibility memo + historical accrual table", es: "Memo viabilidad EMR + tabla reclutamiento histórico" }, inputKind: "table" },
      { inputId: "S6.IN3", label: { en: "Draft sponsor budget + internal cost assumptions", es: "Presupuesto borrador patrocinador + supuestos costo interno" }, inputKind: "table" },
      { inputId: "S6.IN4", label: { en: "Fast-start / ‘commit by Friday’ email thread", es: "Hilo correo fast-start / ‘compromiso para viernes’" }, inputKind: "export" },
    ],
    tasks: [
      {
        en: "Recommend accept, defer, or decline with EMR-backed accrual math; if accept, define capped enrollment, timeline, or pre-activation staffing conditions—not ‘sign now, fix later.’",
        es: "Recomendar aceptar, diferir o declinar con matemática de reclutamiento respaldada en EMR; si acepta, definir inclusión limitada, cronograma o condiciones de personal pre-activación—no ‘firmar ahora, arreglar después.’",
      },
      {
        en: "List underfunded budget elements (DM, screen-fails, follow-up) and negotiation asks tied to ICH E6(R3) adequate time, staff, and facilities.",
        es: "Listar elementos presupuestarios sub-financiados (DM, screen-fails, seguimiento) y peticiones de negociación ligadas a tiempo, personal e instalaciones adecuados ICH E6(R3).",
      },
      {
        en: "Draft a one-page leadership memo: decision, GCP/patient-safety rationale, reputational risk of over-promise, and what documentation must exist before signature.",
        es: "Redactar memo de una página para dirección: decisión, justificación GCP/seguridad del paciente, riesgo reputacional de sobre-promiso y documentación requerida antes de firma.",
      },
    ],
    rubric: {
      rubricId: "OSCE.R6",
      totalPoints: 100,
      passingPoints: 78,
      criteria: [
        {
          criterionId: "OSCE.S6.C1",
          description: {
            en: "Uses EMR/historical evidence to show accrual is non-viable at sponsor target—or defines a defensible capped target with timeline/staffing preconditions; cites adequate resources (E6(R3)) explicitly.",
            es: "Usa evidencia EMR/histórica para mostrar reclutamiento no viable a la meta del patrocinador—o define objetivo limitado defendible con precondiciones de plazo/personal; cita recursos adecuados (E6(R3)) explícitamente.",
          },
          points: 40,
          mapsToDimensions: ["R", "O"],
          failCondition: {
            en: "Commits to full sponsor accrual or signs ‘we will meet 30’ without documented funnel math or mitigation.",
            es: "Se compromete al reclutamiento completo del patrocinador o firma ‘cumpliremos 30’ sin matemática documentada del embudo o mitigación.",
          },
        },
        {
          criterionId: "OSCE.S6.C2",
          description: {
            en: "Names sponsor pressure tactics (fast-start, FOMO, deadline) and refuses rushed yes; requests analysis/negotiation time with concrete budget line items (DM, screen-fails, safety follow-up).",
            es: "Nombra tácticas de presión (fast-start, FOMO, plazo) y rechaza sí apresurado; pide tiempo de análisis/negociación con partidas concretas (DM, screen-fails, seguimiento seguridad).",
          },
          points: 35,
          mapsToDimensions: ["O", "Q"],
          failCondition: {
            en: "Agrees to Friday commitment with minimal changes while hidden costs and accrual gap remain unaddressed.",
            es: "Acepta compromiso del viernes con cambios mínimos sin abordar costos ocultos y brecha de reclutamiento.",
          },
        },
        {
          criterionId: "OSCE.S6.C3",
          description: {
            en: "When revenue conflicts with viability, chooses patient safety, GCP, and long-term site reputation over ‘PI wants the contract’; memo is inspector/QA-defensible.",
            es: "Cuando ingresos chocan con viabilidad, elige seguridad del paciente, GCP y reputación a largo plazo sobre ‘el PI quiere el contrato’; memo es defendible ante inspector/QA.",
          },
          points: 25,
          mapsToDimensions: ["C", "R"],
          failCondition: {
            en: "Prioritizes fees alone; no discussion of monitoring intensity, deviation risk, or under-resourcing effects on safety/documentation.",
            es: "Prioriza solo honorarios; sin discusión de intensidad de monitoría, riesgo de desviación o efectos del sub-recurso en seguridad/documentación.",
          },
        },
      ],
    },
    failConditions: [
      {
        failId: "OSCE.S6.F1",
        description: {
          en: "Site commits to activation or full accrual target while documented patient funnel and staffing cannot support it, solely due to sponsor deadline or payment.",
          es: "Sitio se compromete a activación o meta completa de reclutamiento cuando embudo documentado y personal no lo soportan, solo por plazo o pago del patrocinador.",
        },
        triggerKey: "infeasible_commitment_under_pressure",
        severity: "critical",
      },
    ],
    dimensionFloor: { R: 0.74, O: 0.72, Q: 0.72, C: 0.72 },
  },
] as const satisfies readonly CapstoneStation[];

/** Canonical OSCE order — derived from the registry so M16 and exports stay aligned. */
export const CAPSTONE_STATION_IDS: readonly string[] = CAPSTONE_STATION_REGISTRY.map((s) => s.stationId);

export const CAPSTONE_STATIONS_BY_ID: Readonly<Record<string, CapstoneStation>> = Object.fromEntries(
  CAPSTONE_STATION_REGISTRY.map((s) => [s.stationId, s]),
);
