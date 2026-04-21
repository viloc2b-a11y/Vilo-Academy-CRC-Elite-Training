// src/curriculum-engine/data/modules/m4.ts

import type { Module } from "../../types";

/**
 * Module 4 — Master control logs: traceability, time consistency & audit defense.
 * Program role: primary home for ALCOA+ on site logs and source-aligned corrections; the same standard is reinforced
 * in other documentation-heavy modules and again in the OSCE capstone (e.g. source/ALCOA repair stations).
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
    en: "Serve as the curriculum’s anchor for ALCOA+ on critical site logs and log–source–EDC alignment: maintain and reconcile DOA, Training, Screening, Enrollment, Subject ID, AE, and Deviation logs so they stay attributable, traceable, and inspection-defensible over time; detect subtle multi-source and temporal inconsistencies under inspection-level scrutiny; define clear process ownership and system-level CAPA. (ALCOA+ expectations also apply in other documentation-heavy modules and are retested in the OSCE capstone.)",
    es: "Actuar como ancla del currículo en ALCOA+ para logs críticos del sitio y alineación log–fuente–EDC: mantener y reconciliar logs de DOA, capacitación, screening, inclusión, ID sujeto, EA y desviación para que permanezcan atribuibles, trazables y defendibles en inspección; detectar inconsistencias temporales y multi-fuente bajo escrutinio de inspección; definir propiedad de proceso y CAPA a nivel sistema. (Las expectativas ALCOA+ también aplican en otros módulos con fuerte carga documental y se reevalúan en el capstone OSCE.)",
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
          en: "Maps ALCOA+ (including Complete, Consistent, Enduring, Available) to log entries and corrections: attributable, traceable, no overwriting without single-line strike, date, initial, and rationale when needed.",
          es: "Mapea ALCOA+ (incl. Complete, Consistent, Enduring, Available) a entradas y correcciones en logs: atribuible, trazable, sin sobrescribir sin tachado en una línea, fecha, iniciales y justificación cuando corresponda.",
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
          en: "Under inspection pressure, spots temporal traps (matching narratives, mismatched onset/resolution dates), DOA vs audit-trail reality, missing subjects in screening funnel, and ALCOA+ violations; prioritizes risks that suggest eligibility/AE obscuring or data reconstruction.",
          es: "Bajo presión de inspección, detecta trampas temporales (narrativas coincidentes, fechas inicio/resolución discordantes), realidad DOA vs audit trail, sujetos faltantes en embudo de screening y violaciones ALCOA+; prioriza riesgos que sugieren ocultamiento elegibilidad/AE o reconstrucción de datos.",
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
      lessonId: "M4.L1",
      title: { en: "Core concepts — logs as live traceability", es: "Conceptos núcleo — logs como trazabilidad viva" },
      lessonType: "reading",
      objective: {
        en: "Anchor critical logs, ALCOA+ for logs, time consistency as data integrity, ownership, and cross-module links (M2/M3/M8 visit execution; M9 IP chain).",
        es: "Anclar logs críticos, ALCOA+ en logs, coherencia temporal como integridad de datos, propiedad y vínculos entre módulos (M2/M3/M8 ejecución visitas; cadena IP M9).",
      },
      keyPoints: [
        {
          en: "Logs reconstruct who/what/when for auditors—not administrative extras.",
          es: "Los logs reconstruyen quién/qué/cuándo para auditores—no son extras administrativos.",
        },
        {
          en: "Standard set: DOA/Staff Signature, Training, Screening, Enrollment, Subject ID List, AE/SAE, Deviation/Non-compliance.",
          es: "Conjunto estándar: DOA/firmas, capacitación, screening, inclusión, lista ID sujeto, AE/SAE, desviación/no conformidad.",
        },
        {
          en: "Time consistency: values may match while date sequences break traceability and raise suspicion.",
          es: "Coherencia temporal: los valores pueden coincidir mientras las secuencias de fechas rompen trazabilidad y generan sospecha.",
        },
        {
          en: "Each log needs a defined owner by role—‘I thought you updated it’ is systemic failure.",
          es: "Cada log necesita dueño definido por rol—‘pensé que tú lo actualizabas’ es falla sistémica.",
        },
        {
          en: "Links: DOA/Training ↔ M3; Screening/Enrollment ↔ M2; visit windows/randomization & deviation logs ↔ M8; ALCOA+ log corrections ↔ M4 discipline; IP logs & temperature accountability ↔ M9.",
          es: "Vínculos: DOA/capacitación ↔ M3; screening/inclusión ↔ M2; ventanas visita/randomización y logs desviación ↔ M8; correcciones ALCOA+ en logs ↔ disciplina M4; logs IP y contabilidad térmica ↔ M9.",
        },
      ],
    },
    {
      lessonId: "M4.L2",
      title: { en: "Real-world workflow — setup through inspection", es: "Flujo real — configuración hasta inspección" },
      lessonType: "reading",
      objective: {
        en: "Follow ownership assignment, recruitment/enrollment logging, conduct, reconciliation, and inspection readiness.",
        es: "Seguir asignación de propiedad, registro en reclutamiento/inclusión, conducta, reconciliación y preparación a inspección.",
      },
      keyPoints: [
        {
          en: "Setup: DOA + Training populated; PI signs delegation; document who owns each log (e.g., CRC operational logs; Regulatory DOA/Training; PI reviews).",
          es: "Configuración: DOA + capacitación poblados; PI firma delegación; documentar quién posee cada log (p. ej., CRC logs operativos; Regulatorio DOA/capacitación; PI revisa).",
        },
        {
          en: "Every screened subject in Screening Log with outcome/reason; enrolled in Enrollment Log + Subject ID List; IDs/dates match source and EDC.",
          es: "Cada sujeto screening en log con resultado/motivo; incluidos en log inclusión + lista ID; IDs/fechas coinciden fuente y EDC.",
        },
        {
          en: "Conduct: AEs in source → AE Log → EDC; deviations in source + Deviation Log.",
          es: "Conducta: EA en fuente → log AE → EDC; desviaciones en fuente + log desviaciones.",
        },
        {
          en: "Reconciliation cadence: monthly, pre-monitor, or pre-inspection—values and chronological order.",
          es: "Cadencia de reconciliación: mensual, pre-monitor o pre-inspección—valores y orden cronológico.",
        },
        {
          en: "Inspectors often start with logs and ISF to test the quality system.",
          es: "Inspectores suelen empezar por logs e ISF para probar el sistema de calidad.",
        },
      ],
    },
    {
      lessonId: "M4.L3",
      title: { en: "Common findings — logs & traceability", es: "Hallazgos frecuentes — logs y trazabilidad" },
      lessonType: "reading",
      objective: {
        en: "Recognize recurring inspection themes from guidance and QA reports.",
        es: "Reconocer temas recurrentes de inspección en guías e informes QA.",
      },
      keyPoints: [
        {
          en: "Incomplete or inaccurate DOA and Training Logs.",
          es: "DOA y logs de capacitación incompletos o inexactos.",
        },
        {
          en: "Screening/Enrollment logs not matching source/EDC or omitting subjects.",
          es: "Logs screening/inclusión sin coincidir con fuente/EDC u omitiendo sujetos.",
        },
        {
          en: "AE and Deviation Logs missing events evident in source.",
          es: "Logs AE y desviación sin eventos evidentes en fuente.",
        },
        {
          en: "Temporal inconsistencies in AE and visit dates across sources.",
          es: "Inconsistencias temporales en fechas de EA y visitas entre fuentes.",
        },
        {
          en: "Incorrect corrections (overwriting, no initials/dates); no ownership or reconciliation process.",
          es: "Correcciones incorrectas (sobrescritura, sin iniciales/fechas); sin propiedad ni proceso de reconciliación.",
        },
      ],
    },
    {
      lessonId: "M4.GP1",
      title: { en: "Guided practice — GP-4.1: DOA must match actual tasks", es: "Práctica guiada — GP-4.1: DOA acorde a tareas reales" },
      lessonType: "case",
      objective: {
        en: "New CRC John performs consent and EDC; DOA lists only vitals and visit scheduling assistance.",
        es: "CRC nuevo John hace consentimiento y EDC; DOA solo lista signos y asistencia en agenda de visitas.",
      },
      keyPoints: [
        {
          en: "Inspectors cross-check ICF signatures and EDC audit trails against DOA.",
          es: "Inspectores cruzan firmas ICF y audit trails EDC contra DOA.",
        },
        {
          en: "Pause consent/EDC until training documented and PI updates signed DOA with explicit tasks.",
          es: "Pausar consentimiento/EDC hasta capacitación documentada y PI actualice DOA firmado con tareas explícitas.",
        },
        {
          en: "If prior activity occurred undocumentedly: transparent late correction in logs/source with rationale.",
          es: "Si hubo actividad previa sin delegación documentada: corrección tardía transparente en logs/fuente con justificación.",
        },
        {
          en: "Why it matters: consent competency; EDC attribution; misaligned DOA = standard finding.",
          es: "Por qué importa: competencia en consentimiento; atribución EDC; DOA desalineado = hallazgo típico.",
        },
      ],
    },
    {
      lessonId: "M4.GP2",
      title: {
        en: "Guided practice — GP-4.2: ‘we’ll update logs later’ (incorrect)",
        es: "Práctica guiada — GP-4.2: ‘actualizamos logs después’ (incorrecto)",
      },
      lessonType: "case",
      objective: {
        en: "CRC tracks screening/enrollment in personal spreadsheet for weeks; official logs empty until pre-monitor.",
        es: "CRC lleva screening/inclusión en hoja personal semanas; logs oficiales vacíos hasta pre-monitor.",
      },
      keyPoints: [
        {
          en: "Official logs are the primary record; shadow systems risk transcription gaps and non-contemporaneity.",
          es: "Logs oficiales son registro primario; sistemas sombra arriesgan brechas de transcripción y no contemporaneidad.",
        },
        {
          en: "Bring official logs up to date with dated, initialed late entries and reason; real-time official logs going forward.",
          es: "Poner al día logs oficiales con entradas tardías fechadas, iniciales y motivo; logs oficiales en tiempo real en adelante.",
        },
        {
          en: "Inspector test: can screening/enrollment be reconstructed from official logs alone today?",
          es: "Prueba inspector: ¿se puede reconstruir screening/inclusión solo con logs oficiales hoy?",
        },
      ],
    },
    {
      lessonId: "M4.GP3",
      title: {
        en: "Guided practice — GP-4.3: AE in source, not in AE Log (ambiguous)",
        es: "Práctica guiada — GP-4.3: EA en fuente, no en log (ambiguo)",
      },
      lessonType: "case",
      objective: {
        en: "Visit 3 source: mild intermittent headaches, OTC analgesic, no dose hold. AE Log blank; PI: ‘only log clinically significant AEs.’ Protocol: all AEs from first IMP dose.",
        es: "Fuente Visita 3: cefalea intermitente leve, analgésico OTC, sin hold de dosis. Log EA vacío; PI: ‘solo EA clínicamente significativas.’ Protocolo: todas las EA desde primera dosis IMP.",
      },
      keyPoints: [
        {
          en: "Distinguish protocol/GCP requirements from local shortcuts; recurrent mild events can signal patterns.",
          es: "Distinguir requisitos protocolo/GCP de atajos locales; eventos leves recurrentes pueden marcar patrones.",
        },
        {
          en: "Log in AE Log and EDC; document PI assessment (non-serious, relationship) in source and entry.",
          es: "Registrar en log EA y EDC; documentar valoración PI (no grave, relación) en fuente y entrada.",
        },
        {
          en: "Align PI with protocol; confirm IMP/IP handling expectations with sponsor if needed (M9); safety via sponsor/OSCE.S3.",
          es: "Alinear PI con protocolo; confirmar expectativas de manejo IMP/IP con patrocinador si aplica (M9); seguridad vía patrocinador/OSCE.S3.",
        },
      ],
    },
    {
      lessonId: "M4.L4",
      title: { en: "Audit / inspection perspective", es: "Perspectiva de auditoría / inspección" },
      lessonType: "reading",
      objective: {
        en: "Anticipate how inspectors use logs, ISF, source, and EDC; what they probe on time and corrections.",
        es: "Anticipar cómo inspectores usan logs, ISF, fuente y EDC; qué exploran en tiempo y correcciones.",
      },
      keyPoints: [
        {
          en: "Start with logs and ISF; cross-check source and EDC.",
          es: "Empezar por logs e ISF; cruzar fuente y EDC.",
        },
        {
          en: "Focus: temporal consistency, audit trail integrity, correction methods, clear responsibilities, evidence the system works.",
          es: "Foco: coherencia temporal, integridad de audit trail, métodos de corrección, responsabilidades claras, evidencia de que el sistema funciona.",
        },
        {
          en: "Expect demonstration of log control as part of quality system—not ‘filled forms’ only.",
          es: "Se espera demostrar control de logs como parte del sistema de calidad—no solo ‘formularios llenos’.",
        },
      ],
    },
    {
      lessonId: "M4.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate temporal detective work, ALCOA+, ownership, prioritization, and cross-module CAPA.",
        es: "Consolidar trabajo detective temporal, ALCOA+, propiedad, priorización y CAPA entre módulos.",
      },
      keyPoints: [
        {
          en: "Strong answers: reconstruct plausible timelines; flag overwrite violations; define owners in SOPs; structural reconciliation.",
          es: "Respuestas sólidas: reconstruir líneas temporales plausibles; señalar violaciones por sobrescritura; definir dueños en SOPs; reconciliación estructural.",
        },
        {
          en: "Fail if: miss AE date mismatches; no ALCOA+ violation identified when present; ownership gap ‘fixed’ with reminders only.",
          es: "Fallo si: no detecta discordancias de fechas EA; no identifica violación ALCOA+ cuando existe; brecha de propiedad ‘arreglada’ solo con recordatorios.",
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
        en: "False compliance; inspectors cross-check logs, interviews, and audit trails—major misalignment finding.",
        es: "Cumplimiento ficticio; inspectores cruzan logs, entrevistas y audit trails—hallazgo mayor de desalineación.",
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
        en: "Eligibility opaque; protocol adherence unverifiable; non-transparent reversal finding risk.",
        es: "Elegibilidad opaca; adherencia al protocolo no verificable; riesgo de hallazgo por reversión no transparente.",
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
        en: "Cannot reconstruct recruitment funnel; selection/documentation and justice concerns in ISF audits.",
        es: "No se reconstruye embudo de reclutamiento; preocupaciones de selección/documentación y justicia en auditorías ISF.",
      },
      expectedLearnerResponse: {
        en: "Investigate missing row; restore screening narrative; document correction; CAPA on ID issuance vs screening sequence.",
        es: "Investigar fila faltante; restaurar narrativa de screening; documentar corrección; CAPA en emisión ID vs secuencia screening.",
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
        en: "No functioning deviation process; inspectors read as poor protocol control.",
        es: "Sin proceso funcional de desviaciones; inspectores interpretan como pobre control de protocolo.",
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
        en: "Logs exist but no designated owner per log; no reconciliation schedule; discrepancies found only by monitor.",
        es: "Logs existen pero sin dueño designado por log; sin calendario de reconciliación; discrepancias solo las halla el monitor.",
      },
      risk: {
        en: "Traceability accidental not managed; quality system failure in inspection readiness.",
        es: "Trazabilidad accidental no gestionada; falla del sistema de calidad en preparación a inspección.",
      },
      expectedLearnerResponse: {
        en: "Publish ownership matrix; recurring reconciliation with sign-off; escalate internal QA triggers before external monitor.",
        es: "Publicar matriz de propiedad; reconciliación recurrente con firma; escalar disparadores QA internos antes del monitor externo.",
      },
      relatedDimensions: ["O", "Q", "R"],
    },
    {
      errorId: "M4.E6",
      description: {
        en: "AE Log: nausea onset 10 May, resolved 12 May. Source 12 May: ‘began 11 May, ongoing.’ EDC AE: onset 9 May, resolved 11 May—all same event, dates differ.",
        es: "Log EA: náuseas inicio 10 may, resuelto 12 may. Fuente 12 may: ‘inicio 11 may, en curso.’ EDC EA: inicio 9 may, resuelto 11 may—mismo evento, fechas distintas.",
      },
      risk: {
        en: "True timeline unknown; duration/relationship unclear; red flag for back-dating or sloppy GDP.",
        es: "Línea temporal verdadera desconocida; duración/relación poco claras; bandera roja de fechado retroactivo o GDP descuidado.",
      },
      expectedLearnerResponse: {
        en: "Reconstruct best timeline from contemporaneous evidence; align source/log/EDC with late entry memos; query if ambiguity remains.",
        es: "Reconstruir mejor línea temporal desde evidencia contemporánea; alinear fuente/log/EDC con memos de entrada tardía; query si persiste ambigüedad.",
      },
      relatedDimensions: ["Q", "C", "R"],
    },
    {
      errorId: "M4.E7",
      description: {
        en: "AE Log entry for dose overwritten from ‘50 mg’ to ‘25 mg’ with original value not visible; no initials, date, or explanation.",
        es: "Entrada log EA de dosis sobrescrita de ‘50 mg’ a ‘25 mg’ sin ver valor original; sin iniciales, fecha ni explicación.",
      },
      risk: {
        en: "ALCOA+ breach; potential data falsification or serious GDP finding.",
        es: "Incumplimiento ALCOA+; posible falsificación de datos o hallazgo GDP grave.",
      },
      expectedLearnerResponse: {
        en: "Flag violation; single-line strike-through, initialed dated correction, reason; retraining; system controls preventing overwrite.",
        es: "Señalar violación; tachado en una línea, corrección fechada con iniciales, motivo; reentrenamiento; controles de sistema que eviten sobrescritura.",
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
        en: "30 minutes before inspection-readiness meeting. Regulatory inspector may review in depth. Subjects A, B, C: DOA and Training excerpts; Screening and Enrollment logs; Subject ID List; AE Log (including temporal inconsistency); Deviation Log; source PDFs; EDC AE and visit summaries. Email thread: CRA asks who owns Deviation Log—CRC says ‘PI,’ PI says ‘CRC handles that.’ Packet incomplete/conflicting by design.",
        es: "30 minutos antes de reunión de preparación a inspección. Inspector regulatorio puede revisar en profundidad. Sujetos A, B, C: extractos DOA y capacitación; logs screening e inclusión; lista ID sujeto; log EA (incl. inconsistencia temporal); log desviaciones; fuentes PDF; resúmenes EDC EA y visita. Hilo correo: CRA pregunta dueño del log desviaciones—CRC dice ‘PI,’ PI dice ‘lo maneja CRC.’ Paquete incompleto/conflictivo a propósito.",
      },
      inputs: [
        { inputId: "M4.IN1", label: { en: "DOA + Training Log excerpts", es: "Extractos DOA + log capacitación" }, inputKind: "pdf" },
        { inputId: "M4.IN2", label: { en: "Screening + Enrollment logs", es: "Logs screening + inclusión" }, inputKind: "table" },
        { inputId: "M4.IN3", label: { en: "Subject ID List + Deviation Log", es: "Lista ID sujeto + log desviaciones" }, inputKind: "table" },
        { inputId: "M4.IN4", label: { en: "AE Log + source + EDC AE/visit", es: "Log EA + fuente + EDC EA/visita" }, inputKind: "bundle" },
        { inputId: "M4.IN5", label: { en: "CRA email — ownership ambiguity", es: "Correo CRA — ambigüedad de propiedad" }, inputKind: "export" },
      ],
      learnerTask: {
        en: "Per A/B/C: timeline screening → enrollment → visits → AEs/deviations; flag date/time consistency across source, logs, EDC. List: DOA vs activity; screening/enrollment/ID gaps; AEs in source not in log or date/relationship mismatch; deviations in source missing from log; temporal inconsistencies; ALCOA+ correction violations; log ownership ambiguity. Prioritize top 3–4 inspection concerns with severity (minor/major/critical) and impact (patient/data/compliance). Corrective actions (logs, source, EDC, late entries) + system CAPA (ownership matrix, reconciliation schedule, ALCOA+ retraining, temporal checks). One defense memo for a complex issue (temporal AE or ALCOA+): what you found, transparent correction, structural prevention.",
        es: "Por A/B/C: línea temporal screening → inclusión → visitas → EA/desviaciones; señalar coherencia fecha/hora entre fuente, logs, EDC. Listar: DOA vs actividad; brechas screening/inclusión/ID; EA en fuente no en log o discordancia fechas/relación; desviaciones en fuente ausentes en log; inconsistencias temporales; violaciones corrección ALCOA+; ambigüedad propiedad logs. Priorizar 3–4 preocupaciones de inspección con severidad e impacto. Acciones correctivas + CAPA sistema (matriz propiedad, calendario reconciliación, reentrenamiento ALCOA+, chequeos temporales). Un memo de defensa para tema complejo (EA temporal o ALCOA+): hallazgo, corrección transparente, prevención estructural.",
      },
      deliverables: [
        { deliverableId: "M4.D1", label: { en: "Per-subject timelines + issue register", es: "Líneas temporales por sujeto + registro de hallazgos" }, formatHint: "table" },
        { deliverableId: "M4.D2", label: { en: "Top 3–4 + CAPA (corrective + system)", es: "Top 3–4 + CAPA (correctiva + sistema)" }, formatHint: "pdf" },
        { deliverableId: "M4.D3", label: { en: "Inspector defense memo (one complex issue)", es: "Memo defensa inspector (un tema complejo)" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M4.RUB1",
    totalPoints: 100,
    passingPoints: 78,
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
          en: "Misses temporal mismatch that changes AE narrative or visit sequence when evidence is in the packet.",
          es: "No detecta discordancia temporal que cambia narrativa EA o secuencia de visita cuando la evidencia está en el paquete.",
        },
      },
      {
        criterionId: "M4.C2",
        description: {
          en: "Recognizes ALCOA+ / audit-trail violations (overwriting, missing initials/dates); prescribes proper GDP correction and systemic controls.",
          es: "Reconoce violaciones ALCOA+ / audit trail (sobrescritura, faltan iniciales/fechas); prescribe corrección GDP adecuada y controles sistémicos.",
        },
        points: 25,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Fails to flag any ALCOA+ violation present in the exercise materials.",
          es: "No señala ninguna violación ALCOA+ presente en los materiales del ejercicio.",
        },
      },
      {
        criterionId: "M4.C3",
        description: {
          en: "Clarifies log ownership gaps (not ‘remind staff’ only); proposes written ownership, reconciliation schedule, oversight agendas with log review, job aids.",
          es: "Aclara brechas de propiedad de logs (no solo ‘recordar al personal’); propone propiedad escrita, calendario de reconciliación, agendas con revisión de logs, ayudas.",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Accepts CRA/PI ownership contradiction with only verbal reminders and no SOP or RACI update.",
          es: "Acepta contradicción de propiedad CRA/PI solo con recordatorios verbales y sin SOP o actualización RACI.",
        },
      },
      {
        criterionId: "M4.C4",
        description: {
          en: "Prioritizes inspection-relevant risks (eligibility/AE obscuring, manipulation signals, weak system control); ties CAPA to M3 delegation, M8 visit/randomization integrity, M9 IP accountability; defense memo is transparent and structural.",
          es: "Prioriza riesgos relevantes para inspección (ocultamiento elegibilidad/AE, señales de manipulación, control débil); vincula CAPA a delegación M3, integridad visita/randomización M8, contabilidad IP M9; memo de defensa es transparente y estructural.",
        },
        points: 15,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Defense memo minimizes overwrite or timeline gaps or recommends concealing discrepancies from inspectors.",
          es: "Memo de defensa minimiza sobrescritura o brechas de línea temporal o recomienda ocultar discrepancias a inspectores.",
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
      en: "OSCE.S1 and OSCE.S4 stress eligibility and visit/PD trace—the same log discipline and time-order checks this module teaches.",
      es: "OSCE.S1 y OSCE.S4 ejercitan elegibilidad y trazabilidad visita/PD—la misma disciplina de logs y verificaciones de orden temporal que enseña este módulo.",
    },
    stationIds: ["OSCE.S1", "OSCE.S4"],
  },
  tags: ["traceability", "documentation", "operational", "audit_readiness", "flagship", "bilingual", "data_integrity"],
  bilingualNotes: {
    en: "Keep DOA, ALCOA+, GDP, AE, SAE, EDC, ISF, CRA, CAPA, PD as EN operational tokens; expand once in ES if needed. Messaging: M4 is the flagship log/ALCOA lane; learners still encounter ALCOA+ in cross-module scenarios and in capstone OSCE stations (e.g. S5).",
    es: "Mantener DOA, ALCOA+, GDP, AE, SAE, EDC, ISF, CRA, CAPA, PD como tokens operativos EN; expandir una vez en ES si hace falta. Mensaje: M4 es el carril flagship de logs/ALCOA; el alumno sigue viendo ALCOA+ en escenarios entre módulos y en estaciones capstone OSCE (p. ej. S5).",
  },
};
