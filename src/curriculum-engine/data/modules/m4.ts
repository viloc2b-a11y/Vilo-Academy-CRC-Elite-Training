// src/curriculum-engine/data/modules/m4.ts

import type { Module } from "../../types";

/**
 * Module 4 — Master control logs: traceability, time consistency & audit defense.
 *
 * Technical / Regulatory Execution (flagship documentation lane): eight ordered sections—executable GDP on logs,
 * inspection-defensible traceability, explicit regulatory anchors:
 * - FDA ALCOA+ (Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available)
 *   as applied to critical site logs, source-aligned corrections, and audit trails (paper + electronic).
 * - WHO data integrity expectations (governance, risk-based controls, ALCOA principles, contemporaneous recording,
 *   audit trail / review of data changes) as the global complement to FDA inspection focus on reconstructable records.
 *
 * Program role: primary home for log-level ALCOA+; reinforced cross-module and in OSCE (S1/S4/S5).
 *
 * CRC Elite checklist (this file): SMART module objective; 3 Guided Practice cases (clear/incorrect/ambiguous);
 * Practical Exercise (30 min) with real deliverables; named Integrity traps; Audit defense output (D3);
 * Scoring matrix (S5 + rubric); cross-module links (S7); failure impact (S8).
 */
export const MODULE_M4: Module = {
  id: "M4",
  slug: "master-control-logs-traceability",
  internalName: "mod_04_master_control_logs",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["O", "Q", "R", "C"],
  title: {
    en: "Module 4 — Master Control Logs: Traceability, Time Consistency & Audit Defense",
    es: "Módulo 4 — Logs maestros de control: trazabilidad, coherencia temporal y defensa ante auditoría",
  },
  objective: {
    en: "SMART — By finishing this module and its 30-minute Log Challenge, the CRC will: (S) keep master control logs (DOA through Deviation) aligned to source and EDC under FDA ALCOA+ and WHO data-integrity expectations; (M) produce a per-subject issue register, a top 3–4 inspection-priority + CAPA package, and one Audit defense output scored against the module rubric; (A) using GDP-compliant corrections, RACI ownership, and sponsor/IRB paths when required—not concealment; (R) so monitors and regulators can reconstruct who did what, when, and why for CtQ subjects; (T) under the timed exercise for drill, and contemporaneously during real study conduct. (Expectations also apply in other documentation-heavy modules and are retested in OSCE.)",
    es: "SMART — Al completar este módulo y su Desafío de logs de 30 minutos, el CRC: (S) mantendrá logs maestros (DOA hasta desviación) alineados a fuente y EDC bajo ALCOA+ FDA e integridad de datos OMS; (M) producirá registro por sujeto, paquete top 3–4 prioridades inspección + CAPA y una Salida de defensa ante auditoría calificada con la rúbrica; (A) usando correcciones conformes a GDP, propiedad RACI y vías patrocinador/CEI cuando aplique—no ocultamiento; (R) para que monitores y reguladores reconstruyan quién hizo qué, cuándo y por qué en sujetos CtQ; (T) en el ejercicio cronometrado y de forma contemporánea durante la conducta real del estudio. (Las expectativas también aplican en otros módulos documentales y se reevalúan en OSCE.)",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Names critical logs (DOA/Staff Signature, Training, Screening, Enrollment, Subject Identification Code List, AE/SAE Tracking, Deviation) and states that they are primary—not optional—records to reconstruct who did what, for which subject, and when.",
          es: "Nombra logs críticos (DOA/firmas, capacitación, screening, inclusión, lista códigos ID sujeto, seguimiento AE/SAE, desviación) y afirma que son registros primarios—no opcionales—para reconstruir quién hizo qué, para qué sujeto y cuándo.",
        },
        {
          en: "Maps FDA ALCOA+ and WHO data-integrity principles to log entries and corrections: attributable, legible, contemporaneous, accurate; complete/consistent/enduring/available; no overwriting without single-line strike, date, initial, and rationale when needed; electronic systems preserve audit trail.",
          es: "Mapea ALCOA+ (FDA) y principios OMS de integridad de datos a entradas y correcciones en logs: atribuible, legible, contemporáneo, preciso; completo/consistente/perdurable/disponible; sin sobrescritura sin tachado en una línea, fecha, iniciales y justificación cuando corresponda; sistemas electrónicos preservan audit trail.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Assigns log ownership by role (not person), keeps official logs contemporaneous during recruitment and conduct, and runs reconciliation cadence (log vs source vs EDC) checking values and date/time order before monitoring or inspection.",
          es: "Asigna propiedad de logs por rol (no persona), mantiene logs oficiales contemporáneos en reclutamiento y conducta, y ejecuta cadencia de reconciliación (log vs fuente vs EDC) verificando valores y orden fecha/hora antes de monitoría o inspección.",
        },
        {
          en: "Ensures screening outcomes, enrollment, and Subject ID List align with source and EDC; routes AEs from source to AE Log and EDC; captures deviations in source and Deviation Log per protocol.",
          es: "Asegura que resultados de screening, inclusión y lista ID sujeto alineen con fuente y EDC; enruta EA desde fuente a log AE y EDC; captura desviaciones en fuente y log de desviación según protocolo.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Under inspection pressure, spots temporal traps (matching narratives, mismatched onset/resolution dates), DOA vs audit-trail reality, missing subjects in screening funnel, and ALCOA+ / data-integrity violations; prioritizes risks that suggest eligibility/AE obscuring or data reconstruction.",
          es: "Bajo presión de inspección, detecta trampas temporales (narrativas coincidentes, fechas inicio/resolución discordantes), realidad DOA vs audit trail, sujetos faltantes en embudo de screening y violaciones ALCOA+ / integridad de datos; prioriza riesgos que sugieren ocultamiento elegibilidad/AE o reconstrucción de datos.",
        },
        {
          en: "Proposes structural CAPA: written ownership matrix, reconciliation schedule, oversight agendas with log review, ALCOA+ job aids—explicitly linking fixes to M3 (GCP/delegation), M8 (screening logs, randomization line, visit-window traceability), and M9 (IP accountability, cold chain & excursions).",
          es: "Propone CAPA estructural: matriz escrita de propiedad, calendario de reconciliación, agendas de supervisión con revisión de logs, ayudas ALCOA+—vinculando explícitamente arreglos a M3 (GCP/delegación), M8 (logs screening, línea randomización, trazabilidad ventanas visita) y M9 (contabilidad IP, cadena de frío y excursiones).",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M4.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the regulatory bar: logs must reconstruct the trial under FDA and WHO expectations—not shadow spreadsheets.",
        es: "Establecer la barra regulatoria: los logs deben reconstruir el ensayo bajo expectativas FDA y OMS—no hojas sombra.",
      },
      keyPoints: [
        {
          en: "Graded on traceability engineering: time order, ALCOA+, ownership, and honest defense—not checklist theater.",
          es: "Se te califica por ingeniería de trazabilidad: orden temporal, ALCOA+, propiedad y defensa honesta—no teatro de listas.",
        },
        {
          en: "Outputs: per-subject timelines + issue register; top 3–4 inspection priorities + system CAPA; one Audit defense output (Deliverable D3) for a complex temporal, ownership, or GDP/ALCOA+ issue—FDA ALCOA+ and WHO data integrity cited explicitly.",
          es: "Salidas: líneas temporales por sujeto + registro de hallazgos; prioridades 3–4 para inspección + CAPA sistema; una Salida de defensa ante auditoría (Entregable D3) para tema temporal, de propiedad o GDP/ALCOA+ complejo—citando explícitamente ALCOA+ FDA e integridad de datos OMS.",
        },
        {
          en: "Technical tokens remain EN (DOA, ALCOA+, GDP, GDocP, AE, SAE, EDC, ISF, CRA, CAPA, PD, FDA, WHO).",
          es: "Tokens técnicos permanecen en inglés (DOA, ALCOA+, GDP, GDocP, AE, SAE, EDC, ISF, CRA, CAPA, PD, FDA, WHO).",
        },
      ],
    },
    {
      lessonId: "M4.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 30,
      objective: {
        en: "Anchor FDA ALCOA+, WHO data integrity, live logs, time consistency, ownership, and inspection use of ISF/logs.",
        es: "Anclar ALCOA+ FDA, integridad de datos OMS, logs vivos, coherencia temporal, propiedad y uso de ISF/logs en inspección.",
      },
      keyPoints: [
        {
          en: "FDA ALCOA+: attributable (who), legible, contemporaneous, original (or certified true copy), accurate; plus complete, consistent, enduring, available—applied to master logs and to corrections (strike-single-line, date, initials, reason).",
          es: "ALCOA+ FDA: atribuible (quién), legible, contemporáneo, original (o copia certificada), preciso; más completo, consistente, perdurable, disponible—aplicado a logs maestros y a correcciones (tachado en una línea, fecha, iniciales, motivo).",
        },
        {
          en: "WHO data integrity: governance and quality culture; risk-based controls; ALCOA principles; contemporaneous recording; controlled changes with audit trail/review; investigators and sponsors must be able to reconstruct decisions—logs are primary evidence.",
          es: "Integridad de datos OMS: gobierno y cultura de calidad; controles basados en riesgo; principios ALCOA; registro contemporáneo; cambios controlados con audit trail/revisión; investigadores y patrocinadores deben reconstruir decisiones—los logs son evidencia primaria.",
        },
        {
          en: "Logs reconstruct who/what/when for auditors—not administrative extras. Standard set: DOA/Staff Signature, Training, Screening, Enrollment, Subject ID List, AE/SAE, Deviation/Non-compliance.",
          es: "Los logs reconstruyen quién/qué/cuándo para auditores—no son extras administrativos. Conjunto: DOA/firmas, capacitación, screening, inclusión, lista ID sujeto, AE/SAE, desviación/no conformidad.",
        },
        {
          en: "Time consistency: values may match while date sequences break traceability (WHO/FDA concern: data not consistent across lifecycle).",
          es: "Coherencia temporal: valores pueden coincidir mientras secuencias de fecha rompen trazabilidad (preocupación OMS/FDA: datos no consistentes en el ciclo de vida).",
        },
        {
          en: "Each log needs a defined owner by role—‘I thought you updated it’ is systemic failure (governance gap).",
          es: "Cada log necesita dueño por rol—‘pensé que tú lo actualizabas’ es falla sistémica (brecha de gobierno).",
        },
        {
          en: "Real-world workflow — Setup: DOA + Training populated; PI signs delegation; RACI/ownership matrix published (WHO: clear accountability).",
          es: "Flujo real — Configuración: DOA + capacitación poblados; PI firma delegación; matriz RACI/propiedad publicada (OMS: responsabilidad clara).",
        },
        {
          en: "Real-world workflow — Conduct: every screened subject in Screening Log; enrolled in Enrollment + Subject ID List; AEs source → AE Log → EDC; deviations in source + Deviation Log.",
          es: "Flujo real — Conducta: cada sujeto screening en log; incluidos en inclusión + lista ID; EA fuente → log EA → EDC; desviaciones en fuente + log desviaciones.",
        },
        {
          en: "Real-world workflow — Reconciliation: pre-monitor/pre-inspection—values and chronological order vs FDA/WHO expectation of complete, attributable trail.",
          es: "Flujo real — Reconciliación: pre-monitor/pre-inspección—valores y orden cronológico vs expectativa FDA/OMS de pista completa y atribuible.",
        },
        {
          en: "Error-prone 1 — DOA/Training look perfect; interviews and audit trails show undocumented tasks.",
          es: "Propensa 1 — DOA/capacitación lucen perfectos; entrevistas y audit trails muestran tareas no documentadas.",
        },
        {
          en: "Error-prone 2 — Screening/Enrollment/ID lists disagree with source/EDC or omit subjects.",
          es: "Propensa 2 — Logs screening/inclusión/ID discrepan con fuente/EDC u omiten sujetos.",
        },
        {
          en: "Error-prone 3 — AEs/deviations evident in source missing from logs (integrity by obscurity).",
          es: "Propensa 3 — EA/desviaciones evidentes en fuente ausentes en logs (integridad por oscuridad).",
        },
        {
          en: "Error-prone 4 — Temporal mismatches across source, log, EDC for same event (duration, causality, window logic).",
          es: "Propensa 4 — Desajustes temporales entre fuente, log, EDC para el mismo evento (duración, causalidad, lógica de ventana).",
        },
        {
          en: "Error-prone 5 — GDP violations: overwrite, white-out, missing initials/date/reason; uncontrolled shadow spreadsheets.",
          es: "Propensa 5 — Violaciones GDP: sobrescritura, corrector opaco, faltan iniciales/fecha/motivo; hojas sombra no controladas.",
        },
        {
          en: "Integrity traps (refuse + escalate): (1) ‘Make the logs match EDC’ by silent back-fill without discovery date, author, and reason. (2) PI/sponsor pressure to overwrite, scrape, or conceal log lines instead of GDP strike–initial–date–reason. (3) Treating uncontrolled shadow spreadsheets as the system of record. (4) Documenting eligibility reversals only in informal email/addenda while Screening/Enrollment logs stay contradictory. (5) Deferring all log ownership and CAPA to the CRA as substitute for site data governance (WHO: accountability stays with the investigator/site).",
          es: "Trampas de integridad (rechazar + escalar): (1) ‘Haz que los logs cuadren con EDC’ con relleno silencioso sin fecha de descubrimiento, autor y motivo. (2) Presión PI/patrocinador para sobrescribir, raspaduras u ocultar líneas de log en vez de GDP tachado–iniciales–fecha–motivo. (3) Tratar hojas sombra no controladas como registro oficial. (4) Documentar reversión de elegibilidad solo en correo/adenda informal mientras logs screening/inclusión siguen contradictorios. (5) Diferir toda propiedad de logs y CAPA al CRA como sustituto del gobierno de datos del sitio (OMS: la responsabilidad permanece en investigador/sitio).",
        },
        {
          en: "Cross-links: M2 protocol windows; M3 delegation matches DOA; M8 screening funnel & visits; M9 IP accountability in logs.",
          es: "Vínculos: M2 ventanas protocolo; M3 delegación alineada a DOA; M8 embudo screening y visitas; M9 contabilidad IP en logs.",
        },
      ],
    },
    {
      lessonId: "M4.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "New CRC John performs consent and EDC; DOA lists only vitals and visit scheduling assistance.",
        es: "CRC nuevo John hace consentimiento y EDC; DOA solo lista signos y asistencia en agenda de visitas.",
      },
      keyPoints: [
        {
          en: "What CRC sees: task scope exceeds signed DOA; attribution breaks ALCOA+ ‘Attributable’.",
          es: "Qué ve el CRC: alcance de tareas excede DOA firmado; se rompe ‘Attributable’ de ALCOA+.",
        },
        {
          en: "How to think: inspectors cross-check ICF signatures and EDC audit trails against DOA (FDA site model).",
          es: "Cómo pensar: inspectores cruzan firmas ICF y audit trails EDC contra DOA (modelo de inspección FDA).",
        },
        {
          en: "Decision: pause consent/EDC until training documented and PI updates signed DOA with explicit tasks.",
          es: "Decisión: pausar consentimiento/EDC hasta capacitación documentada y PI actualice DOA firmado con tareas explícitas.",
        },
        {
          en: "If prior activity occurred: transparent late correction in logs/source with rationale (WHO: controlled change, documented).",
          es: "Si hubo actividad previa: corrección tardía transparente en logs/fuente con justificación (OMS: cambio controlado, documentado).",
        },
        {
          en: "Why it matters: consent competency; EDC attribution; misaligned DOA = standard finding.",
          es: "Por qué importa: competencia en consentimiento; atribución EDC; DOA desalineado = hallazgo típico.",
        },
      ],
    },
    {
      lessonId: "M4.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "CRC tracks screening/enrollment in personal spreadsheet for weeks; official logs empty until pre-monitor.",
        es: "CRC lleva screening/inclusión en hoja personal semanas; logs oficiales vacíos hasta pre-monitor.",
      },
      keyPoints: [
        {
          en: "Incorrect move: continue shadow system; backfill logs without discovery dates or narrative of delay.",
          es: "Movimiento incorrecto: continuar sistema sombra; rellenar logs sin fechas de descubrimiento ni narrativa del retraso.",
        },
        {
          en: "Correct move: official logs are the contemporaneous primary record; bring them current with dated, initialed entries and reason; ban uncontrolled parallel trackers per data governance (WHO).",
          es: "Movimiento correcto: logs oficiales son registro primario contemporáneo; ponerlos al día con entradas fechadas, iniciales y motivo; prohibir trackers paralelos no controlados según gobierno de datos (OMS).",
        },
        {
          en: "Why it matters: transcription gaps break ‘Contemporaneous’ and ‘Consistent’ under ALCOA+.",
          es: "Por qué importa: brechas de transcripción rompen ‘Contemporaneous’ y ‘Consistent’ bajo ALCOA+.",
        },
        {
          en: "Inspector test: can screening/enrollment be reconstructed from official logs alone today?",
          es: "Prueba inspector: ¿se puede reconstruir screening/inclusión solo con logs oficiales hoy?",
        },
      ],
    },
    {
      lessonId: "M4.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Visit 3 source: mild intermittent headaches, OTC analgesic, no dose hold. AE Log blank; PI: ‘only log clinically significant AEs.’ Protocol: all AEs from first IMP dose.",
        es: "Fuente Visita 3: cefalea intermitente leve, analgésico OTC, sin hold de dosis. Log EA vacío; PI: ‘solo EA clínicamente significativas.’ Protocolo: todas las EA desde primera dosis IMP.",
      },
      keyPoints: [
        {
          en: "What CRC sees: protocol-defined capture vs local filter; risk of under-reporting and pattern blindness.",
          es: "Qué ve el CRC: captura definida por protocolo vs filtro local; riesgo de sub-reporte y ceguera a patrones.",
        },
        {
          en: "How to think: distinguish protocol/GCP obligations from convenience; recurrent mild events may signal toxicity patterns (data integrity across sources).",
          es: "Cómo pensar: distinguir obligaciones protocolo/GCP de conveniencia; eventos leves recurrentes pueden marcar patrones de toxicidad (integridad entre fuentes).",
        },
        {
          en: "Decision: log in AE Log and EDC; document PI assessment (non-serious, relationship) in source and entry; align sponsor/M9 if IMP handling touched.",
          es: "Decisión: registrar en log EA y EDC; documentar valoración PI (no grave, relación) en fuente y entrada; alinear patrocinador/M9 si tocó manejo IMP.",
        },
        {
          en: "Why it matters: missing AEs destroy traceability between clinical observation and regulatory datasets (FDA/WHO concern).",
          es: "Por qué importa: EA faltantes destruyen trazabilidad entre observación clínica y bases regulatorias (preocupación FDA/OMS).",
        },
      ],
    },
    {
      lessonId: "M4.S4",
      title: {
        en: "4) Practical exercise — time pressure, real outputs & audit defense",
        es: "4) Ejercicio práctico — presión temporal, salidas reales y defensa ante auditoría",
      },
      lessonType: "worksheet",
      durationMinutes: 30,
      objective: {
        en: "Run the Log Challenge once under the 30-minute time box and produce all deliverables.",
        es: "Ejecutar el Desafío de logs una vez bajo 30 minutos y producir todas las salidas.",
      },
      keyPoints: [
        {
          en: "Time box: 30 minutes. Missing FDA ALCOA+ / WHO integrity framing in CAPA or defense = incomplete.",
          es: "Límite: 30 minutos. CAPA o defensa sin marco ALCOA+ FDA / integridad OMS = incompleto.",
        },
        {
          en: "Deliverables: (D1) timelines + register; (D2) top 3–4 + system CAPA; (D3) Audit defense output—short memo citing FDA ALCOA+ and WHO data integrity, honest gap statement, corrective path, structural prevention; refuse integrity traps.",
          es: "Entregables: (D1) líneas temporales + registro; (D2) top 3–4 + CAPA sistema; (D3) Salida de defensa ante auditoría—memo breve citando ALCOA+ FDA e integridad OMS, brecha honesta, ruta correctiva, prevención estructural; rechazar trampas de integridad.",
        },
      ],
    },
    {
      lessonId: "M4.S5",
      title: { en: "5) Scoring matrix (rubric) & audit/inspection perspective", es: "5) Matriz de puntuación (rúbrica) y perspectiva auditoría/inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Make pass/fail transparent; align with FDA log review and WHO reconstructability tests.",
        es: "Hacer transparente aprobado/reprobado; alinear con revisión de logs FDA y pruebas de reconstrucción OMS.",
      },
      keyPoints: [
        {
          en: "Scoring matrix: module rubric M4.RUB1 (100 points, pass ≥94); each criterion is binary met/not met for grading; accepting an integrity trap (e.g., concealment, unauthorized overwrite) is a critical fail pathway.",
          es: "Matriz de puntuación: rúbrica M4.RUB1 (100 puntos, aprobar ≥94); cada criterio se cumple/no para calificación; aceptar una trampa de integridad (p. ej., ocultamiento, sobrescritura no autorizada) es vía de falla crítica.",
        },
        {
          en: "Binary grading: criteria met/not met; critical integrity failures (overwrite, concealment) override partial credit.",
          es: "Calificación binaria: criterio cumplido/no; fallas críticas de integridad (sobrescritura, ocultamiento) anulan crédito parcial.",
        },
        {
          en: "FDA-style probes: ‘Show the contemporaneous screening narrative for subject X.’ ‘Explain this audit trail change.’ ‘Who owned the Deviation Log on date Y?’",
          es: "Preguntas estilo FDA: ‘Muestre narrativa contemporánea de screening del sujeto X.’ ‘Explique este cambio en audit trail.’ ‘¿Quién era dueño del log de desviaciones en fecha Y?’",
        },
        {
          en: "WHO-style probes: ‘How do you prevent and detect unauthorized changes?’ ‘How is ALCOA demonstrated across paper and electronic systems?’",
          es: "Preguntas estilo OMS: ‘¿Cómo previenen y detectan cambios no autorizados?’ ‘¿Cómo demuestran ALCOA en papel y sistemas electrónicos?’",
        },
      ],
    },
    {
      lessonId: "M4.S6",
      title: { en: "6) Answer framework & fail conditions", es: "6) Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Consolidate temporal detective work, ALCOA+ corrections, ownership, and cross-module CAPA.",
        es: "Consolidar detective temporal, correcciones ALCOA+, propiedad y CAPA entre módulos.",
      },
      keyPoints: [
        {
          en: "Elite format: (1) Timeline + sources, (2) ALCOA+/integrity violations named, (3) System CAPA + RACI + link to M3/M8/M9.",
          es: "Formato élite: (1) Línea temporal + fuentes, (2) Violaciones ALCOA+/integridad nombradas, (3) CAPA sistema + RACI + vínculo M3/M8/M9.",
        },
        {
          en: "Strong answers: reconstruct plausible timelines; flag overwrite violations; define owners in SOPs; structural reconciliation.",
          es: "Respuestas sólidas: reconstruir líneas temporales plausibles; señalar sobrescritura; definir dueños en SOPs; reconciliación estructural.",
        },
        {
          en: "Refuse integrity traps in your Audit defense output: no ‘sync logs to story,’ no undocumented overwrites, no blaming-only CAPA.",
          es: "Rechaza trampas de integridad en tu Salida de defensa ante auditoría: no ‘sincronizar logs al relato’, no sobrescrituras sin documentar, no CAPA que solo culpa.",
        },
        {
          en: "Fail if: miss AE date mismatches; no ALCOA+ violation identified when present; recommend concealing discrepancies from inspectors.",
          es: "Fallo si: no detecta discordancias de fechas EA; no identifica violación ALCOA+ cuando existe; recomienda ocultar discrepancias a inspectores.",
        },
      ],
    },
    {
      lessonId: "M4.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Tie log discipline to protocol, GCP oversight, visits, IP, and capstone stations.",
        es: "Vincular disciplina de logs a protocolo, supervisión GCP, visitas, IP y estaciones capstone.",
      },
      keyPoints: [
        {
          en: "M1/M2: consent and protocol rules must appear in logs and source with matching versions and timing.",
          es: "M1/M2: consentimiento y reglas de protocolo deben aparecer en logs y fuente con versiones y tiempos coincidentes.",
        },
        {
          en: "M3: DOA and training logs must reflect real delegation (FDA investigator focus).",
          es: "M3: DOA y logs de capacitación deben reflejar delegación real (foco inspector FDA).",
        },
        {
          en: "M8: screening funnel, randomization line, visit windows—log entries are the reconstruction backbone.",
          es: "M8: embudo screening, línea randomización, ventanas visita—entradas de logs son el espinazo de reconstrucción.",
        },
        {
          en: "M9: IP receipt, accountability, excursions—often separate logs; must align with subject records.",
          es: "M9: recepción IP, contabilidad, excursiones—a menudo logs separados; deben alinear con expedientes de sujeto.",
        },
        {
          en: "Capstone: OSCE.S1 eligibility trace; OSCE.S4 visit/PD discipline; OSCE.S5 source documentation & ALCOA+ repair.",
          es: "Capstone: OSCE.S1 trazabilidad elegibilidad; OSCE.S4 disciplina visita/PD; OSCE.S5 documentación fuente y reparación ALCOA+.",
        },
      ],
    },
    {
      lessonId: "M4.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit: patient safety, data reliability, regulatory action, sponsor trust.",
        es: "Hacer explícitas consecuencias: seguridad del paciente, confiabilidad de datos, acción regulatoria, confianza patrocinador.",
      },
      keyPoints: [
        {
          en: "Patient safety: missed AEs, wrong eligibility state, inadequate follow-up when logs lie or lag.",
          es: "Seguridad del paciente: EA omitidas, estado de elegibilidad erróneo, seguimiento inadecuado cuando logs mienten o van atrasados.",
        },
        {
          en: "Data reliability: cannot trust endpoints or safety signals; undermines FDA/WHO expectations for complete, consistent records.",
          es: "Confiabilidad de datos: no se confían endpoints o señales de seguridad; socava expectativas FDA/OMS de registros completos y consistentes.",
        },
        {
          en: "Regulatory: Form 483 observations, warning letter patterns on documentation/GDP; data integrity investigations.",
          es: "Regulatorio: observaciones Form 483, patrones warning letter en documentación/GDP; investigaciones de integridad de datos.",
        },
        {
          en: "Operational: for-cause audits, enrollment holds, loss of sponsor confidence.",
          es: "Operacional: auditorías for-cause, holds de inclusión, pérdida de confianza del patrocinador.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M4.E1",
      description: {
        en: "DOA and Training Logs perfect on paper; interviews show receptionist sometimes ‘helps with consent’ and MA enters data when CRC away—undocumented.",
        es: "DOA y logs de capacitación perfectos en papel; entrevistas muestran recepcionista a veces ‘ayuda con consentimiento’ y MA ingresa datos cuando CRC ausente—sin documentar.",
      },
      risk: {
        en: "False compliance; FDA/WHO reconstructability fails when tasks are invisible in delegation and training records.",
        es: "Cumplimiento ficticio; reconstrucción FDA/OMS falla cuando tareas son invisibles en delegación y capacitación.",
      },
      expectedLearnerResponse: {
        en: "Stop undocumented tasks; update DOA/training; competency verification; process map aligned to actual workflow.",
        es: "Detener tareas no documentadas; actualizar DOA/capacitación; verificación de competencia; mapa de proceso alineado al flujo real.",
      },
      relatedDimensions: ["R", "Q", "O"],
    },
    {
      errorId: "M4.E2",
      description: {
        en: "Screening Log: subject 025 screen fail HbA1c too low. Enrollment Log: 025 enrolled 5 days later. EDC: randomized with baseline. Source addendum: ‘Sponsor said lab OK’—no Screening Log update; no Deviation Log.",
        es: "Log screening: sujeto 025 screen fail HbA1c bajo. Log inclusión: 025 incluido 5 días después. EDC: aleatorizado con baseline. Adenda fuente: ‘Patrocinador dijo lab OK’—sin actualizar log screening; sin log desviación.",
      },
      risk: {
        en: "Eligibility opaque; ALCOA+ ‘Consistent’ and ‘Accurate’ fail across systems; non-transparent reversal.",
        es: "Elegibilidad opaca; fallan ‘Consistent’ y ‘Accurate’ de ALCOA+ entre sistemas; reversión no transparente.",
      },
      expectedLearnerResponse: {
        en: "Reconcile all sources; enter deviation/sponsor correspondence; correct logs with ALCOA+; sponsor/IRB path per protocol.",
        es: "Reconciliar todas las fuentes; ingresar desviación/correspondencia patrocinador; corregir logs con ALCOA+; vía patrocinador/CEI según protocolo.",
      },
      relatedDimensions: ["Q", "R", "C"],
    },
    {
      errorId: "M4.E3",
      description: {
        en: "Subject 033 in Enrollment Log, Subject ID List, AE Log, and EDC; Screening Log jumps 032→034 with no note.",
        es: "Sujeto 033 en log inclusión, lista ID, log EA y EDC; log screening salta 032→034 sin nota.",
      },
      risk: {
        en: "Cannot reconstruct recruitment funnel; justice and selection bias concerns in FDA/ISF audits.",
        es: "No se reconstruye embudo de reclutamiento; preocupaciones de justicia y sesgo de selección en auditorías FDA/ISF.",
      },
      expectedLearnerResponse: {
        en: "Investigate missing row; restore screening narrative; document correction with GDP; CAPA on ID issuance vs screening sequence.",
        es: "Investigar fila faltante; restaurar narrativa de screening; documentar corrección con GDP; CAPA en emisión ID vs secuencia screening.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M4.E4",
      description: {
        en: "Source shows repeated out-of-window visits and missed labs; Deviation Log has only one administrative deviation.",
        es: "Fuente muestra visitas repetidas fuera de ventana y labs omitidos; log desviaciones solo tiene una desviación administrativa.",
      },
      risk: {
        en: "Data integrity: incomplete record of protocol departures; inspectors infer poor control and selective logging.",
        es: "Integridad de datos: registro incompleto de desviaciones de protocolo; inspectores infieren control pobre y registro selectivo.",
      },
      expectedLearnerResponse: {
        en: "Back-capture deviations with discovery dates; root-cause; PI oversight; SOP threshold for mandatory log entry.",
        es: "Recuperar desviaciones con fechas de descubrimiento; causa raíz; supervisión PI; umbral SOP para entrada obligatoria en log.",
      },
      relatedDimensions: ["O", "Q", "R"],
    },
    {
      errorId: "M4.E5",
      description: {
        en: "False-correct pattern: AE Log entry for dose overwritten from ‘50 mg’ to ‘25 mg’ with original value not visible; no initials, date, or explanation—breaks FDA ALCOA+ and WHO expectations for attributable, documented changes.",
        es: "Patrón ‘parece correcto’: entrada log EA de dosis sobrescrita de ‘50 mg’ a ‘25 mg’ sin ver valor original; sin iniciales, fecha ni explicación—rompe ALCOA+ FDA y expectativas OMS de cambios atribuibles y documentados.",
      },
      risk: {
        en: "Serious GDP / potential falsification signal; critical inspection finding.",
        es: "Señal grave GDP / posible falsificación; hallazgo crítico de inspección.",
      },
      expectedLearnerResponse: {
        en: "Flag violation; single-line strike-through, initialed dated correction, reason; retraining; system controls preventing overwrite; QA notification per SOP.",
        es: "Señalar violación; tachado en una línea, corrección fechada con iniciales, motivo; reentrenamiento; controles que eviten sobrescritura; notificación QA según SOP.",
      },
      relatedDimensions: ["Q", "R"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M4.EX1",
      name: {
        en: "Log Challenge — multi-subject traceability, temporal consistency & ownership under inspection pressure",
        es: "Desafío de logs — trazabilidad multi-sujeto, coherencia temporal y propiedad bajo presión de inspección",
      },
      scenario: {
        en: "30 minutes before inspection-readiness meeting. Regulatory inspector may review in depth. Subjects A, B, C: DOA and Training excerpts; Screening and Enrollment logs; Subject ID List; AE Log (including intentional onset/resolution mismatch vs source/EDC); Deviation Log; source PDFs; EDC AE and visit summaries. Email thread: CRA asks who owns Deviation Log—CRC says ‘PI,’ PI says ‘CRC handles that.’ Packet incomplete/conflicting by design. Frame findings using FDA ALCOA+ and WHO data integrity (governance, contemporaneous records, attributable changes).",
        es: "30 minutos antes de reunión de preparación a inspección. Inspector regulatorio puede revisar en profundidad. Sujetos A, B, C: extractos DOA y capacitación; logs screening e inclusión; lista ID sujeto; log EA (incl. desajuste intencional inicio/resolución vs fuente/EDC); log desviaciones; fuentes PDF; resúmenes EDC EA y visita. Hilo correo: CRA pregunta dueño del log desviaciones—CRC dice ‘PI,’ PI dice ‘lo maneja CRC.’ Paquete incompleto/conflictivo a propósito. Enmarque hallazgos con ALCOA+ FDA e integridad de datos OMS (gobierno, registros contemporáneos, cambios atribuibles).",
      },
      inputs: [
        { inputId: "M4.IN1", label: { en: "DOA + Training Log excerpts", es: "Extractos DOA + log capacitación" }, inputKind: "pdf" },
        { inputId: "M4.IN2", label: { en: "Screening + Enrollment logs", es: "Logs screening + inclusión" }, inputKind: "table" },
        { inputId: "M4.IN3", label: { en: "Subject ID List + Deviation Log", es: "Lista ID sujeto + log desviaciones" }, inputKind: "table" },
        { inputId: "M4.IN4", label: { en: "AE Log + source + EDC AE/visit", es: "Log EA + fuente + EDC EA/visita" }, inputKind: "bundle" },
        { inputId: "M4.IN5", label: { en: "CRA email — ownership ambiguity", es: "Correo CRA — ambigüedad de propiedad" }, inputKind: "export" },
      ],
      learnerTask: {
        en: "Per A/B/C: timeline screening → enrollment → visits → AEs/deviations; flag date/time consistency across source, logs, EDC. List: DOA vs activity; screening/enrollment/ID gaps; AEs in source not in log or date/relationship mismatch; deviations in source missing from log; temporal inconsistencies; FDA ALCOA+ violations (e.g., overwrite, missing attribution); WHO data integrity gaps (governance, contemporaneousness, audit trail). Prioritize top 3–4 inspection concerns with severity (minor/major/critical) and impact (patient/data/compliance). Corrective actions + system CAPA (ownership matrix, reconciliation schedule, ALCOA+ retraining, temporal checks, controlled electronic/paper change processes). Audit defense output (D3): 1-page max, transparent correction path, cite FDA ALCOA+ and WHO data integrity principles by name, name any integrity trap you refused, no concealment or e-signature workaround language.",
        es: "Por A/B/C: línea temporal screening → inclusión → visitas → EA/desviaciones; señalar coherencia fecha/hora entre fuente, logs, EDC. Listar: DOA vs actividad; brechas screening/inclusión/ID; EA en fuente no en log o discordancia fechas/relación; desviaciones en fuente ausentes en log; inconsistencias temporales; violaciones ALCOA+ FDA (p. ej., sobrescritura, falta atribución); brechas integridad OMS (gobierno, contemporaneidad, audit trail). Priorizar 3–4 preocupaciones de inspección con severidad e impacto. Acciones correctivas + CAPA sistema (matriz propiedad, calendario reconciliación, reentrenamiento ALCOA+, chequeos temporales, procesos de cambio controlado papel/electrónico). Salida de defensa ante auditoría (D3): máx 1 página, ruta de corrección transparente, citar por nombre ALCOA+ FDA y principios OMS de integridad de datos, nombrar trampa de integridad rechazada, sin ocultamiento ni lenguaje de atajo e-firma.",
      },
      deliverables: [
        { deliverableId: "M4.D1", label: { en: "Per-subject timelines + issue register", es: "Líneas temporales por sujeto + registro de hallazgos" }, formatHint: "table" },
        { deliverableId: "M4.D2", label: { en: "Top 3–4 + CAPA (corrective + system)", es: "Top 3–4 + CAPA (correctiva + sistema)" }, formatHint: "pdf" },
        {
          deliverableId: "M4.D3",
          label: {
            en: "Audit defense output — FDA ALCOA+ & WHO data integrity memo (one complex issue)",
            es: "Salida de defensa ante auditoría — memo ALCOA+ FDA e integridad de datos OMS (un tema complejo)",
          },
          formatHint: "short_memo",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M4.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M4.C1",
        description: {
          en: "Detects subtle temporal inconsistencies (e.g., AE onset/resolution mismatched across source, logs, EDC); reconstructs most plausible timeline and proposes aligned corrections with discovery dates.",
          es: "Detecta inconsistencias temporales sutiles (p. ej., inicio/resolución EA discordantes entre fuente, logs, EDC); reconstruye línea temporal más plausible y propone correcciones alineadas con fechas de descubrimiento.",
        },
        points: 35,
        mapsToDimensions: ["Q", "C"],
        failCondition: {
          en: "Critical fail if misses temporal mismatch that changes AE narrative or visit sequence when evidence is in the packet.",
          es: "Falla crítica si no detecta discordancia temporal que cambia narrativa EA o secuencia de visita cuando la evidencia está en el paquete.",
        },
      },
      {
        criterionId: "M4.C2",
        description: {
          en: "Recognizes FDA ALCOA+ and WHO-aligned data integrity violations (overwriting, missing initials/dates, broken audit trail); prescribes proper GDP correction and systemic controls.",
          es: "Reconoce violaciones ALCOA+ FDA y de integridad de datos alineadas a OMS (sobrescritura, faltan iniciales/fechas, audit trail roto); prescribe corrección GDP y controles sistémicos.",
        },
        points: 25,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Critical fail if fails to flag any ALCOA+ / GDP violation present in the exercise materials.",
          es: "Falla crítica si no señala ninguna violación ALCOA+ / GDP presente en los materiales del ejercicio.",
        },
      },
      {
        criterionId: "M4.C3",
        description: {
          en: "Clarifies log ownership gaps (not ‘remind staff’ only); proposes written ownership, reconciliation schedule, oversight agendas with log review, job aids—data governance per WHO expectations.",
          es: "Aclara brechas de propiedad de logs (no solo ‘recordar al personal’); propone propiedad escrita, calendario de reconciliación, agendas con revisión de logs, ayudas—gobierno de datos según expectativas OMS.",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Fail if accepts CRA/PI ownership contradiction with only verbal reminders and no SOP or RACI update.",
          es: "Falla si acepta contradicción de propiedad CRA/PI solo con recordatorios verbales y sin SOP o actualización RACI.",
        },
      },
      {
        criterionId: "M4.C4",
        description: {
          en: "Audit defense output (D3): prioritizes inspection-relevant risks (eligibility/AE obscuring, manipulation signals, weak system control); ties CAPA to M3 delegation, M8 visit/randomization integrity, M9 IP accountability; explicitly names FDA ALCOA+ and WHO data integrity; transparent, no concealment.",
          es: "Salida de defensa ante auditoría (D3): prioriza riesgos relevantes para inspección (ocultamiento elegibilidad/AE, señales de manipulación, control débil); vincula CAPA a delegación M3, integridad visita/randomización M8, contabilidad IP M9; nombra explícitamente ALCOA+ FDA e integridad de datos OMS; transparente, sin ocultamiento.",
        },
        points: 15,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Critical fail if Audit defense output (D3) minimizes overwrite or timeline gaps, recommends concealing discrepancies from inspectors, omits explicit FDA ALCOA+ and WHO data integrity references when required, or endorses an integrity trap.",
          es: "Falla crítica si la Salida de defensa (D3) minimiza sobrescritura o brechas temporales, recomienda ocultar discrepancias a inspectores, omite referencias explícitas a ALCOA+ FDA e integridad de datos OMS cuando se exigen, o avala una trampa de integridad.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "Q",
      weight: 0.38,
      aggregationKey: "log_source_edc_temporal_alcoa_reconciliation",
    },
    {
      dimension: "O",
      weight: 0.28,
      aggregationKey: "log_ownership_cadence_operational_control",
    },
    {
      dimension: "R",
      weight: 0.22,
      aggregationKey: "gcp_traceability_inspection_readiness_gdp",
    },
    {
      dimension: "C",
      weight: 0.12,
      aggregationKey: "ae_eligibility_narrative_integrity_across_logs",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S1 and OSCE.S4 stress eligibility and visit/PD trace; OSCE.S5 stresses source documentation & ALCOA+ repair—the same log discipline and time-order checks this module teaches.",
      es: "OSCE.S1 y OSCE.S4 ejercitan elegibilidad y trazabilidad visita/PD; OSCE.S5 ejercita documentación fuente y reparación ALCOA+—la misma disciplina de logs y orden temporal que enseña este módulo.",
    },
    stationIds: ["OSCE.S1", "OSCE.S4", "OSCE.S5"],
  },
  tags: ["traceability", "documentation", "operational", "audit_readiness", "flagship", "bilingual", "data_integrity"],
  bilingualNotes: {
    en: "Keep DOA, ALCOA+, GDP, GDocP, AE, SAE, EDC, ISF, CRA, CAPA, PD, FDA, WHO as EN operational tokens; expand once in ES if needed. M4 is the flagship log/ALCOA lane aligned to FDA ALCOA+ and WHO data integrity guidance themes; capstone OSCE S1/S4/S5 re-validate.",
    es: "Mantener DOA, ALCOA+, GDP, GDocP, AE, SAE, EDC, ISF, CRA, CAPA, PD, FDA, WHO como tokens operativos EN; expandir una vez en ES si hace falta. M4 es el carril flagship logs/ALCOA alineado a ALCOA+ FDA y temas de guía OMS sobre integridad de datos; capstone OSCE S1/S4/S5 re-validan.",
  },
};
