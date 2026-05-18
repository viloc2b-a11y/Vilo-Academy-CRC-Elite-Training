// src/curriculum-engine/data/modules/m1.ts

import type { Module } from "../../types";

/**
 * Module 1 — Ethics, Human Subjects Protection & HIPAA (Operational / Core CRC Skills)
 *
 * PROMPT 1 — BASE OPERATIVO (Modules 1–10) mapping:
 * - The required 8 sections are enforced via ordered lesson titles.
 * - Guided Practice is split into 3 scenario lessons (clear / incorrect / ambiguous) under section 3.
 * - Practical Exercise produces real outputs (log entry + escalation email + sponsor/monitor message) under time pressure.
 * - Scoring rubric uses objective/binary criteria and explicit critical fails.
 *
 * CRC Elite audit-grade: real-world workflow + error-prone depth, monitor/audit lens, rubric totals aligned to 100,
 * exercise requires severity/CAPA/defense framing; errorLibrary covers obvious / subtle / false-correct patterns.
 */
export const MODULE_M1: Module = {
  id: "M1",
  slug: "ethics-human-subjects-hipaa",
  internalName: "mod_01_ethics_hipaa_crc_practice",
  category: "foundations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "C", "Q"],
  title: {
    en: "Module 1 — Ethics, Human Subjects Protection & HIPAA in CRC Practice",
    es: "Módulo 1 — Ética, protección de participantes e HIPAA en la práctica del CRC",
  },

  // SMART objective (MANDATORY format)
  objective: {
    en: "CRC can stop a consent/privacy defect in a real screening visit and produce a compliant escalation email and an audit-ready log entry.",
    es: "El CRC puede detener un defecto de consentimiento/privacidad en una visita real de tamizaje y producir un correo de escalamiento conforme y una entrada de log lista para auditoría.",
  },

  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States the CRC stop-rules: no research procedures before legally effective consent; correct IRB-approved ICF version; confidentiality by minimum necessary.",
          es: "Enuncia reglas de paro CRC: sin procedimientos de investigación antes de consentimiento legalmente efectivo; versión correcta de ICF aprobada por CEI; confidencialidad por minimum necessary.",
        },
        {
          en: "Identifies what requires IRB approval (ICF versions, recruitment language, amendments affecting participants) and what counts as PHI (identifiers + health information).",
          es: "Identifica qué requiere aprobación del CEI (versiones ICF, lenguaje de reclutamiento, enmiendas que afectan participantes) y qué cuenta como PHI (identificadores + información de salud).",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes a consent visit that can be audited: version control, timing proof (consent before procedures), teach-back, copy given, and interpreter documentation when required.",
          es: "Ejecuta una visita de consentimiento audit-able: control de versión, prueba de tiempo (consentimiento antes de procedimientos), teach-back, copia entregada y documentación de intérprete cuando aplique.",
        },
        {
          en: "Routes PHI through approved channels and documents a defensible escalation when policy is unclear (no improvisation).",
          es: "Canaliza PHI por canales aprobados y documenta un escalamiento defendible cuando la política no es clara (sin improvisar).",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects and classifies consent integrity failures (wrong version, timing gaps, capacity/language failure) and escalates when PI instructions conflict with IRB requirements.",
          es: "Detecta y clasifica fallas de integridad del consentimiento (versión incorrecta, brechas de tiempo, falla de capacidad/idioma) y escala cuando instrucciones del PI chocan con requisitos del CEI.",
        },
        {
          en: "Produces audit-grade outputs under time pressure without inventing facts: issue log entry, escalation email, and prevention step that changes workflow (not “retraining only”).",
          es: "Produce salidas nivel auditoría bajo presión de tiempo sin inventar hechos: entrada de log, correo de escalamiento y paso preventivo que cambia el flujo (no “solo reentrenar”).",
        },
      ],
    },
  ],

  lessons: [
    // 1) Module Overview
    {
      lessonId: "M1.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the operational bar: stop-rule decisions + audit-ready outputs.",
        es: "Establecer la barra operativa: decisiones de paro + salidas listas para auditoría.",
      },
      keyPoints: [
        {
          en: "You are graded on execution: what you stop, what you document, and who you notify.",
          es: "Se te califica por ejecución: qué detienes, qué documentas y a quién notificas.",
        },
        {
          en: "Non-negotiables: (1) no research procedures before consent, (2) correct IRB-stamped ICF, (3) PHI handled by minimum necessary and approved channels.",
          es: "No negociables: (1) sin procedimientos de investigación antes del consentimiento, (2) ICF correcto sellado por CEI, (3) PHI manejado con minimum necessary y canales aprobados.",
        },
        {
          en: "Outputs required in this module: log entry + escalation email + sponsor/monitor message (short, truthful).",
          es: "Salidas requeridas en este módulo: entrada de log + correo de escalamiento + mensaje a patrocinador/monitor (corto, veraz).",
        },
        {
          en: "Regulatory tokens remain in EN in both locales (IRB, ICF, PHI, HIPAA, 45 CFR 46, 21 CFR 50).",
          es: "Tokens regulatorios permanecen en inglés en ambos idiomas (IRB, ICF, PHI, HIPAA, 45 CFR 46, 21 CFR 50).",
        },
      ],
    },

    // 2) Core Concepts (only actionable rules)
    {
      lessonId: "M1.S2",
      title: { en: "2) Core concepts (actionable rules only)", es: "2) Conceptos núcleo (solo reglas accionables)" },
      lessonType: "reading",
      durationMinutes: 22,
      objective: {
        en: "Use these rules during any consent/PHI workflow.",
        es: "Usar estas reglas en cualquier flujo con consentimiento/PHI.",
      },
      keyPoints: [
        {
          en: "Real-world workflow — CRC: verify ICF version against IRB approval packet; run consent sequence (disclosure → questions → teach-back); block research procedures until consent is legally effective; route PHI only through approved channels; document conflicts and stops contemporaneously.",
          es: "Flujo real — CRC: verificar versión ICF contra paquete de aprobación CEI; ejecutar secuencia de consentimiento (divulgación → preguntas → teach-back); bloquear procedimientos de investigación hasta consentimiento legalmente efectivo; canalizar PHI solo por vías aprobadas; documentar conflictos y paros de forma contemporánea.",
        },
        {
          en: "Real-world workflow — PI: confirms capacity and voluntary participation for high-stakes decisions; resolves medical eligibility questions; signs attestations when required; does not override IRB-approved consent/privacy requirements.",
          es: "Flujo real — PI: confirma capacidad y participación voluntaria en decisiones de alto riesgo; resuelve elegibilidad médica; firma atestaciones cuando aplica; no anula requisitos de consentimiento/privacidad aprobados por CEI.",
        },
        {
          en: "Real-world workflow — Sponsor/monitor: expects traceable consent/version artifacts and HIPAA-minimum handling; may issue queries on timing, witnesses, interpreter use, and channel controls; corrective plans must be operational (workflow), not narrative only.",
          es: "Flujo real — Patrocinador/monitor: espera artefactos trazables de consentimiento/versión y manejo HIPAA minimum necessary; puede emitir queries sobre tiempos, testigos, intérprete y controles de canal; planes correctivos deben ser operativos (flujo), no solo narrativa.",
        },
        {
          en: "Real-world workflow — IRB/Compliance/Privacy: approves ICF versions and recruitment amendments; investigates privacy channel deviations; may require re-consent, enrollment hold, or CAPA when systemic consent/PHI failures appear.",
          es: "Flujo real — CEI/Cumplimiento/Privacidad: aprueba versiones ICF y enmiendas de reclutamiento; investiga desviaciones de canal de privacidad; puede exigir re-consentimiento, hold de inclusión o CAPA ante fallas sistémicas de consentimiento/PHI.",
        },
        {
          en: "Error-prone area 1 — “We already printed v1.0”: using superseded ICF because stock is convenient. Why: weak version segregation + supply habit; creates uninformed consent after amendments.",
          es: "Área propensa 1 — “Ya imprimimos v1.0”: usar ICF sustituido por conveniencia de stock. Por qué: segregación débil + hábito de suministro; genera consentimiento no informado tras enmiendas.",
        },
        {
          en: "Error-prone area 2 — “Draw labs now, consent after”: research procedures before legally effective consent. Why: throughput pressure; invalid enrollment and integrity failure.",
          es: "Área propensa 2 — “Labs ahora, consent después”: procedimientos de investigación antes de consentimiento legalmente efectivo. Por qué: presión de throughput; inclusión inválida y falla de integridad.",
        },
        {
          en: "Error-prone area 3 — Consumer messaging “because everyone texts”: PHI in non-approved apps. Why: SOP silence + social norm; becomes breach/repeat finding risk.",
          es: "Área propensa 3 — Mensajería de consumo “porque todos textean”: PHI en apps no aprobadas. Por qué: silencio de SOP + norma social; riesgo de brecha/hallazgo repetido.",
        },
        {
          en: "Error-prone area 4 — Family member as “interpreter”: ad hoc language support. Why: speed + mistaken equivalence; autonomy and comprehension not demonstrated.",
          es: "Área propensa 4 — Familiar como “intérprete”: soporte de idioma improvisado. Por qué: velocidad + equivalencia errónea; no se demuestra autonomía ni comprensión.",
        },
        {
          en: "Error-prone area 5 — “Clean up signatures later”: witness/PI lines completed non-contemporaneously. Why: appearance management; creates back-dating pattern and unprovable sequence of events.",
          es: "Área propensa 5 — “Arreglamos firmas después”: líneas testigo/PI completadas no contemporáneamente. Por qué: gestión de apariencia; patrón de retrofechado y secuencia no demostrable.",
        },
        {
          en: "Rule: If consent is not complete and legally effective, no research procedure starts (stop the workflow).",
          es: "Regla: si el consentimiento no está completo y es legalmente efectivo, no comienza ningún procedimiento de investigación (detén el flujo).",
        },
        {
          en: "Rule: Only the current IRB-stamped ICF can be used; superseded versions must be segregated from active use.",
          es: "Regla: solo se usa el ICF vigente sellado por CEI; versiones sustituidas deben segregarse del uso activo.",
        },
        {
          en: "Rule: If comprehension is uncertain, use teach-back; if language support is needed, use qualified interpreter support and document it.",
          es: "Regla: si la comprensión es incierta, usa teach-back; si se requiere soporte de idioma, usa intérprete calificado y documéntalo.",
        },
        {
          en: "Rule: PHI is identifiers + health information. Use minimum necessary and approved channels. When policy is unclear, escalate—don’t improvise.",
          es: "Regla: PHI = identificadores + información de salud. Usa minimum necessary y canales aprobados. Si la política no está clara, escala—no improvises.",
        },
        {
          en: "Rule: If PI instruction conflicts with IRB/consent/privacy requirements, document the conflict and escalate per SOP (not optional).",
          es: "Regla: si la instrucción del PI choca con requisitos de CEI/consentimiento/privacidad, documenta el conflicto y escala según SOP (no es opcional).",
        },
      ],
    },

    // 3) Guided Practice (3 scenarios)
    {
      lessonId: "M1.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Choose the correct ICF version and document a single audit-ready line that proves version control.",
        es: "Elegir la versión correcta de ICF y documentar una sola línea lista para auditoría que pruebe control de versión.",
      },
      keyPoints: [
        {
          en: "Scenario: Amendment approved May 10. Consent scheduled May 15. Two versions are in the room: ICF v2.0 stamped May 10; ICF v1.0 stamped Jan 1.",
          es: "Escenario: enmienda aprobada 10 mayo. Consentimiento 15 mayo. Hay dos versiones: ICF v2.0 sellado 10 mayo; ICF v1.0 sellado 1 enero.",
        },
        {
          en: "Decision (forced): Use v2.0 now. Segregate v1.0 as “Superseded — Do Not Use”.",
          es: "Decisión (forzada): usar v2.0 ahora. Segregar v1.0 como “Sustituido — No usar”.",
        },
        {
          en: "Required output: one-line note with ICF version + stamp date + copy given.",
          es: "Salida obligatoria: nota de una línea con versión ICF + fecha del sello + copia entregada.",
        },
        {
          en: "Stop rule: if you cannot confirm the current version, pause and verify with the IRB letter/binder control.",
          es: "Regla de paro: si no puedes confirmar versión vigente, pausa y verifica con carta del CEI/control del binder.",
        },
      ],
    },
    {
      lessonId: "M1.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect action)", es: "3) Práctica guiada — Escenario 2 (acción incorrecta)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Refuse procedures-before-consent and produce a compliant escalation message.",
        es: "Rechazar procedimientos antes del consentimiento y producir un mensaje de escalamiento conforme.",
      },
      keyPoints: [
        {
          en: "Scenario: PI instructs you to draw research screening labs + ECG before consent “to save time”. Protocol defines them as research procedures (not SOC). No ICF signed.",
          es: "Escenario: el PI te instruye tomar labs + ECG de screening de investigación antes del consentimiento “para ahorrar tiempo”. El protocolo los define como investigación (no SOC). Sin ICF firmado.",
        },
        {
          en: "Decision (forced): NO. Stop. Consent first (or explicit IRB waiver).",
          es: "Decisión (forzada): NO. Detén. Primero consentimiento (o waiver explícito del CEI).",
        },
        {
          en: "Required output: escalation language that documents the conflict (PI instruction vs IRB/consent requirement).",
          es: "Salida obligatoria: lenguaje de escalamiento que documente el conflicto (instrucción del PI vs requisito CEI/consentimiento).",
        },
        {
          en: "Critical fail pattern: “Do it now, fix paperwork later.” That is an integrity failure, not a documentation issue.",
          es: "Patrón de falla crítica: “hazlo ahora y arregla el papel luego”. Eso es falla de integridad, no un tema de papeleo.",
        },
      ],
    },
    {
      lessonId: "M1.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Handle PHI in a gray-zone channel without inventing policy; move to an approved route and escalate.",
        es: "Manejar PHI en un canal gris sin inventar política; migrar a una ruta aprobada y escalar.",
      },
      keyPoints: [
        {
          en: "Scenario: Spanish-speaking participant sends WhatsApp with full name + DOB + prescription photo asking about a new medication with IMP. SOP is silent; team “normally uses WhatsApp”.",
          es: "Escenario: participante hispanohablante envía WhatsApp con nombre + fecha nac. + foto de receta preguntando por nueva medicación con PI. SOP es silencioso; el equipo “normalmente usa WhatsApp”.",
        },
        {
          en: "Decision (forced): acknowledge briefly, then move to an approved channel; minimize identifiers; document clinically in source; escalate to privacy/compliance to clarify policy and Spanish-access workflow.",
          es: "Decisión (forzada): acusar recibo breve y migrar a canal aprobado; minimizar identificadores; documentar clínicamente en fuente; escalar a privacidad/cumplimiento para aclarar política y flujo de acceso en español.",
        },
        {
          en: "Required output: escalation note that separates known vs unknown and requests an approved messaging workflow (do not invent a policy).",
          es: "Salida obligatoria: nota de escalamiento que separe conocido vs desconocido y solicite un flujo aprobado de mensajería (no inventes política).",
        },
        {
          en: "Critical fail pattern: recommending continued PHI via consumer messaging for convenience.",
          es: "Patrón de falla crítica: recomendar continuar PHI en mensajería de consumo por conveniencia.",
        },
      ],
    },

    // 4) Practical Exercise
    {
      lessonId: "M1.S4",
      title: { en: "4) Practical exercise (time pressure + real output)", es: "4) Ejercicio práctico (presión de tiempo + salida real)" },
      lessonType: "worksheet",
      durationMinutes: 15,
      objective: {
        en: "Execute the exercise exactly once under the 15-minute time box and produce the required outputs.",
        es: "Ejecutar el ejercicio una sola vez bajo el límite de 15 minutos y producir las salidas requeridas.",
      },
      keyPoints: [
        {
          en: "Time box: 15 minutes. If you cannot produce a clear, structured response in time, performance is incomplete.",
          es: "Límite: 15 minutos. Si no puedes producir una respuesta clara y estructurada a tiempo, el desempeño es incompleto.",
        },
        {
          en: "Outputs must include: a log entry + an escalation email + a sponsor/monitor message.",
          es: "Salidas obligatorias: entrada de log + correo de escalamiento + mensaje a patrocinador/monitor.",
        },
      ],
    },

    // 5) Scoring Matrix
    {
      lessonId: "M1.S5",
      title: { en: "5) Scoring matrix (objective pass/fail + critical fails)", es: "5) Matriz de puntuación (aprobado/reprobado objetivo + fallas críticas)" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Make pass/fail transparent: binary criteria and critical fails.",
        es: "Hacer transparente aprobado/reprobado: criterios binarios y fallas críticas.",
      },
      keyPoints: [
        {
          en: "Binary grading: each rubric criterion is met/not met. Points represent completion, not “partial effort”.",
          es: "Calificación binaria: cada criterio se cumple/no se cumple. Los puntos representan cumplimiento, no “esfuerzo parcial”.",
        },
        {
          en: "Critical fails override score: research procedures pre-consent; knowingly using a superseded ICF; continuing PHI in consumer messaging; back-dating/rewriting/inventing facts.",
          es: "Fallas críticas anulan el puntaje: procedimientos de investigación pre-consentimiento; usar conscientemente ICF sustituido; continuar PHI en mensajería de consumo; retrofechar/reescribir/inventar hechos.",
        },
        {
          en: "Audit/monitor perspective — likely questions: “Prove consent preceded first research procedure.” “Show IRB-stamped current ICF and segregation control for superseded versions.” “How is PHI text/email workflow approved and monitored?”",
          es: "Perspectiva auditoría/monitor — preguntas probables: “Demuestre que el consentimiento precedió el primer procedimiento de investigación.” “Muestre ICF vigente sellado por CEI y control de segregación de versiones sustituidas.” “¿Cómo está aprobado y monitoreado el flujo de texto/correo con PHI?”",
        },
        {
          en: "Audit/monitor perspective — finding classes: missing proof of legally effective consent (major/critical depending on exposure); unauthorized PHI channel (often major if repeat); version control failure after amendment (major); coercion/understanding failures (critical autonomy issue).",
          es: "Perspectiva auditoría/monitor — clases de hallazgos: falta de prueba de consentimiento legalmente efectivo (mayor/crítico según exposición); canal PHI no autorizado (a menudo mayor si es repetido); falla de control de versión tras enmienda (mayor); coerción/comprensión (tema crítico de autonomía).",
        },
      ],
    },

    // 6) Answer Framework
    {
      lessonId: "M1.S6",
      title: { en: "6) Answer framework (elite output + fail patterns)", es: "6) Marco de respuesta (salida élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Use a repeatable output format that stays audit-facing and concise.",
        es: "Usar un formato repetible que sea orientado a auditoría y conciso.",
      },
      keyPoints: [
        {
          en: "Elite format (3 lines): (1) Stop rule + immediate action, (2) Known vs unknown facts, (3) Escalation + prevention theme.",
          es: "Formato élite (3 líneas): (1) Regla de paro + acción inmediata, (2) Hechos conocidos vs desconocidos, (3) Escalamiento + tema preventivo.",
        },
        {
          en: "Fail patterns: “paperwork later”; “we always do it this way”; “verbal consent is enough”; “I fixed it by changing the date”.",
          es: "Patrones de falla: “papel luego”; “siempre se hace así”; “consentimiento verbal basta”; “lo arreglé cambiando la fecha”.",
        },
      ],
    },

    // 7) Cross-Module Links
    {
      lessonId: "M1.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect consent/PHI stop rules to downstream documentation, visits, and safety reporting.",
        es: "Conectar reglas de paro de consentimiento/PHI con documentación, visitas y reporte de seguridad posteriores.",
      },
      keyPoints: [
        {
          en: "M4 (Master Control Logs & ALCOA+): your consent/version decisions must be traceable and contemporaneous in logs and source-aligned corrections.",
          es: "M4 (Logs maestros & ALCOA+): tus decisiones de consentimiento/versión deben ser trazables y contemporáneas en logs y correcciones alineadas a fuente.",
        },
        {
          en: "M8 (Screening & Study Visits): consent timing vs screening procedures; the visit workflow starts with correct sequencing (eligibility → consent → research procedures).",
          es: "M8 (Visitas): tiempo de consentimiento vs procedimientos de tamizaje; el flujo de visita inicia con secuencia correcta (elegibilidad → consentimiento → procedimientos).",
        },
        {
          en: "M10 (AE/SAE): beneficence in practice—do not hide safety signals to protect enrollment; integrity beats speed.",
          es: "M10 (AE/SAE): beneficencia en práctica—no ocultar señales de seguridad para proteger enrolamiento; integridad > velocidad.",
        },
      ],
    },

    // 8) Failure Impact
    {
      lessonId: "M1.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit across safety, data, compliance, and revenue/trust.",
        es: "Hacer explícitas consecuencias en seguridad, datos, cumplimiento e ingresos/confianza.",
      },
      keyPoints: [
        {
          en: "Patient safety: consent defects mean subjects may accept risks they never received; coercion or misunderstanding increases harm.",
          es: "Seguridad del paciente: defectos de consentimiento implican aceptar riesgos no divulgados; coerción o mala comprensión aumenta daño.",
        },
        {
          en: "Data integrity: procedures-before-consent or back-dating creates unusable/contestable data and undermines source credibility.",
          es: "Integridad de datos: procedimientos antes del consentimiento o retrofechado crea datos impugnables/inutilizables y destruye credibilidad de la fuente.",
        },
        {
          en: "Compliance (483 risk): systematic consent/version or PHI failures are inspection-grade findings (FDA 483 / warning letter patterns).",
          es: "Cumplimiento (riesgo 483): fallas sistemáticas de consentimiento/versión o PHI son hallazgos de inspección (patrones FDA 483 / warning letter).",
        },
        {
          en: "Revenue / sponsor trust: repeat integrity failures trigger enrollment holds, monitoring intensity, payment holds, and site deactivation.",
          es: "Ingresos / confianza patrocinador: fallas repetidas de integridad disparan holds de enrolamiento, mayor monitoreo, retención de pagos y desactivación del sitio.",
        },
      ],
    },
  ],

  errorLibrary: [
    {
      errorId: "M1.E1",
      description: {
        en: "Site uses ICF v1.0 after major safety amendment; subjects enrolled with outdated ICF after IRB approved v2.0.",
        es: "El sitio usa ICF v1.0 tras enmienda mayor de seguridad; sujetos incluidos con ICF desactualizado tras aprobación CEI de v2.0.",
      },
      risk: {
        en: "Patient: uninformed of new risks. Compliance: major finding; re-consent and data impact assessment required.",
        es: "Paciente: sin información de nuevos riesgos. Cumplimiento: hallazgo mayor; re-consentimiento y evaluación de impacto de datos.",
      },
      expectedLearnerResponse: {
        en: "Stop enrollment per SOP; notify IRB/sponsor; execute re-consent plan; implement version segregation control; document timeline.",
        es: "Detener inclusión según SOP; notificar CEI/patrocinador; ejecutar plan de re-consentimiento; implementar control de segregación de versiones; documentar línea temporal.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M1.E2",
      description: {
        en: "ICF signature dates do not match consent discussion note; first research procedure date is unclear—appearance of back-dating.",
        es: "Fechas de firma ICF no coinciden con nota de discusión; fecha del primer procedimiento de investigación es incierta—apariencia de retrofechado.",
      },
      risk: {
        en: "Cannot prove consent preceded procedures; integrity failure; audit escalations likely.",
        es: "No se prueba consentimiento antes de procedimientos; falla de integridad; escalamiento en auditoría probable.",
      },
      expectedLearnerResponse: {
        en: "Reconcile facts transparently; document known vs unknown; corrective note per policy; PI attestation; do not alter source to “fix”.",
        es: "Conciliar hechos con transparencia; documentar conocido vs desconocido; nota correctiva según política; atestación PI; no alterar fuente para “arreglar”.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M1.E3",
      description: {
        en: "Non-English/low-literacy subject consented with ad hoc interpreter; no qualified interpreter documentation.",
        es: "Participante no anglófono/baja alfabetización consentido con intérprete improvisado; sin documentación de intérprete calificado.",
      },
      risk: {
        en: "Autonomy compromised; serious consent violation; re-consent may be required.",
        es: "Autonomía comprometida; violación grave del consentimiento; puede requerir re-consentimiento.",
      },
      expectedLearnerResponse: {
        en: "Stop and correct: qualified interpreter + documented teach-back; consult IRB/compliance if already occurred.",
        es: "Detener y corregir: intérprete calificado + teach-back documentado; consultar CEI/cumplimiento si ya ocurrió.",
      },
      relatedDimensions: ["C", "R"],
    },
    {
      errorId: "M1.E4",
      description: {
        en: "PHI handled in consumer messaging (e.g., WhatsApp) with full identifiers because “that’s what we do”.",
        es: "PHI manejado por mensajería de consumo (p. ej., WhatsApp) con identificadores completos porque “así se hace”.",
      },
      risk: {
        en: "Privacy breach risk; repeat pattern becomes reportable and inspection-grade.",
        es: "Riesgo de brecha de privacidad; patrón repetido se vuelve reportable y de inspección.",
      },
      expectedLearnerResponse: {
        en: "Move to approved channel; minimum necessary; document and escalate to privacy/compliance; implement a managed workflow.",
        es: "Migrar a canal aprobado; minimum necessary; documentar y escalar a privacidad/cumplimiento; implementar flujo gestionado.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M1.E5",
      description: {
        en: "False-correct pattern: participant signature and dates “look complete,” but witness line is blank for a consent policy that requires an impartial witness—CRC treats the packet as acceptable to proceed.",
        es: "Patrón ‘parece correcto’: firma y fechas ‘se ven completas’, pero la línea de testigo está en blanco cuando la política exige testigo imparcial—el CRC trata el paquete como aceptable para continuar.",
      },
      risk: {
        en: "Consent may be procedurally invalid; monitor flags as major integrity finding; enrollment and data become contestable.",
        es: "Consentimiento puede ser inválido proceduralmente; monitor lo marca como hallazgo mayor de integridad; inclusión y datos se vuelven impugnables.",
      },
      expectedLearnerResponse: {
        en: "Stop enrollment activities that depend on that consent; obtain compliant witness per SOP/IRB; document gap transparently; do not backfill signatures; escalate if pattern suggests training or template failure.",
        es: "Detener actividades de inclusión que dependan de ese consentimiento; obtener testigo conforme según SOP/CEI; documentar brecha con transparencia; no rellenar firmas a posteriori; escalar si el patrón sugiere falla de capacitación o plantilla.",
      },
      relatedDimensions: ["R", "Q"],
    },
  ],

  practicalExercises: [
    {
      exerciseId: "M1.EX1",
      name: {
        en: "Consent integrity under pressure (15 minutes) — stop, log, escalate",
        es: "Integridad de consentimiento bajo presión (15 minutos) — detener, registrar, escalar",
      },
      scenario: {
        en: "You are 15 minutes from a monitor arriving to review consent + privacy controls. Three subjects (011, 020, 025) have defects by design with intentional cross-source inconsistency: Subject 011 — IRB letter shows v2.1 effective 08-Jun, but the scanned ICF in the eISF footer reads v2.0; Subject 020 — EDC shows a research lab draw timestamp 09:40, while the consent note says discussion ended 10:05 (no waiver); Subject 025 — coordinator exchanged medication photos with identifiers via SMS “to be helpful.” Sources disagree by design—do not reconcile by inventing facts.",
        es: "Faltan 15 minutos para que llegue el monitor a revisar controles de consentimiento + privacidad. Tres sujetos (011, 020, 025) tienen defectos a propósito con inconsistencia intencional entre fuentes: Sujeto 011 — carta CEI muestra v2.1 efectivo 08-jun, pero el ICF escaneado en eISF muestra pie v2.0; Sujeto 020 — EDC muestra toma de lab investigación 09:40, mientras la nota de consentimiento dice que la discusión terminó 10:05 (sin waiver); Sujeto 025 — coordinador intercambió fotos de medicación con identificadores por SMS ‘para ayudar’. Las fuentes discrepan a propósito—no concilies inventando hechos.",
      },
      inputs: [
        { inputId: "M1.IN1", label: { en: "ICF packet (011, 020, 025)", es: "Paquete ICF (011, 020, 025)" }, inputKind: "pdf" },
        { inputId: "M1.IN2", label: { en: "IRB approval letters + amendment dates", es: "Cartas CEI + fechas de enmienda" }, inputKind: "pdf" },
        { inputId: "M1.IN3", label: { en: "Source consent note + procedure log excerpts", es: "Nota fuente de consentimiento + extractos de log" }, inputKind: "mock_ehr" },
        { inputId: "M1.IN4", label: { en: "PI–sponsor email thread (safety update)", es: "Hilo de correo PI–patrocinador (seguridad)" }, inputKind: "table" },
        { inputId: "M1.IN5", label: { en: "HIPAA forms per subject", es: "Formularios HIPAA por sujeto" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "In 15 minutes produce exactly three outputs:\n(1) A single log/tracker entry for the top defect (what happened + severity class minor/major/critical + impact domain patient/data/compliance).\n(2) An escalation email to PI + IRB/Compliance (short, factual, stop-rule based; known vs unknown) that includes one corrective action and one preventive CAPA theme (workflow change, not “retraining only”).\n(3) A sponsor/monitor-facing message (2–3 lines) stating the corrective next step without minimizing, plus one sentence of defensible monitor-response framing (what you controlled, what requires sponsor/IRB decision).\n\nDo not invent facts. If sources conflict, name the conflict and label what is unknown plus the verification step (e.g., compare stamped ICF to IRB approval packet; reconcile timestamps across source, EDC audit trail, and consent note).",
        es: "En 15 minutos produce exactamente tres salidas:\n(1) Una sola entrada en log/tracker del defecto principal (qué pasó + clase de severidad menor/mayor/crítica + dominio de impacto paciente/datos/cumplimiento).\n(2) Un correo de escalamiento a PI + CEI/Cumplimiento (corto, factual, basado en regla de paro; conocido vs desconocido) que incluya una acción correctiva y un tema CAPA preventivo (cambio de flujo, no ‘solo reentrenar’).\n(3) Un mensaje a patrocinador/monitor (2–3 líneas) declarando el siguiente paso correctivo sin minimizar, más una oración de marco de respuesta al monitor (qué controlaste, qué requiere decisión sponsor/CEI).\n\nNo inventes hechos. Si las fuentes chocan, nombra el conflicto y marca lo desconocido más el paso de verificación (p. ej., comparar ICF sellado vs paquete de aprobación CEI; conciliar marcas entre fuente, audit trail EDC y nota de consentimiento).",
      },
      deliverables: [
        { deliverableId: "M1.D1", label: { en: "Consent/PHI issue log entry", es: "Entrada de log de consentimiento/PHI" }, formatHint: "table_row" },
        { deliverableId: "M1.D2", label: { en: "Escalation email (PI + IRB/Compliance)", es: "Correo de escalamiento (PI + CEI/Cumplimiento)" }, formatHint: "email" },
        { deliverableId: "M1.D3", label: { en: "Sponsor/monitor message (2–3 lines)", es: "Mensaje a patrocinador/monitor (2–3 líneas)" }, formatHint: "chat|email_snippet" },
      ],
    },
  ],

  // Scoring Matrix: objective/binary criteria + critical fails
  assessmentRubric: {
    rubricId: "M1.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M1.C1_STOP_RULE",
        description: {
          en: "Stop rule executed: learner refuses research procedures pre-consent and documents the stop decision.",
          es: "Regla de paro ejecutada: rechaza procedimientos de investigación pre-consentimiento y documenta la decisión de paro.",
        },
        points: 15,
        mapsToDimensions: ["R", "C"],
        failCondition: {
          en: "Critical fail if learner proceeds with research procedures pre-consent or endorses a workaround.",
          es: "Falla crítica si procede con procedimientos pre-consentimiento o avala un atajo.",
        },
      },
      {
        criterionId: "M1.C2_VERSION_CONTROL",
        description: {
          en: "Version control is correct: current IRB-stamped ICF selected; superseded versions are segregated from active use.",
          es: "Control de versión correcto: selecciona ICF vigente sellado por CEI; segrega versiones sustituidas del uso activo.",
        },
        points: 15,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Critical fail if learner uses a superseded ICF after identifying it as superseded.",
          es: "Falla crítica si usa un ICF sustituido tras identificarlo como sustituido.",
        },
      },
      {
        criterionId: "M1.C3_PHI_CHANNEL",
        description: {
          en: "PHI handling is defensible: identifies PHI risk and routes the interaction to an approved channel using minimum necessary.",
          es: "Manejo de PHI defendible: identifica riesgo PHI y canaliza a un canal aprobado usando minimum necessary.",
        },
        points: 15,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Critical fail if learner recommends continuing PHI in consumer messaging as normal workflow.",
          es: "Falla crítica si recomienda continuar PHI en mensajería de consumo como flujo normal.",
        },
      },
      {
        criterionId: "M1.C4_LOG_ENTRY",
        description: {
          en: "Log entry is audit-grade: what happened + timing/version facts + severity + impact domain; no speculation.",
          es: "Entrada de log nivel auditoría: qué pasó + hechos de tiempo/versión + severidad + dominio de impacto; sin especulación.",
        },
        points: 10,
        mapsToDimensions: ["Q"],
        failCondition: {
          en: "Fail if log is missing timing/version facts or alters facts to appear compliant.",
          es: "Falla si falta tiempo/versión o altera hechos para aparentar cumplimiento.",
        },
      },
      {
        criterionId: "M1.C5_ESCALATION_EMAIL",
        description: {
          en: "Escalation email is compliant: cites stop rule, separates known vs unknown, requests next-step authorization, and preserves an audit trail (PI + IRB/Compliance).",
          es: "Correo de escalamiento conforme: cita regla de paro, separa conocido vs desconocido, solicita autorización del siguiente paso y preserva pista (PI + CEI/Cumplimiento).",
        },
        points: 10,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Fail if escalation avoids the issue (“FYI only”) or omits compliance recipient when required.",
          es: "Falla si evita el tema (“solo FYI”) u omite a Cumplimiento/CEI cuando se requiere.",
        },
      },
      {
        criterionId: "M1.C6_SPONSOR_MESSAGE",
        description: {
          en: "Sponsor/monitor message is truthful and concise: states corrective next step; does not minimize; does not claim compliance without evidence.",
          es: "Mensaje a patrocinador/monitor veraz y conciso: declara siguiente paso correctivo; no minimiza; no afirma cumplimiento sin evidencia.",
        },
        points: 10,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Fail if message claims compliance without evidence or suggests retroactive fixes (back-dating, rewriting source).",
          es: "Falla si afirma cumplimiento sin evidencia o sugiere arreglos retroactivos (retrofechar, reescribir fuente).",
        },
      },
      {
        criterionId: "M1.C7_PREVENTION",
        description: {
          en: "Prevention theme changes workflow (version segregation/checklist/escalation routing), not “retraining only”.",
          es: "Tema preventivo cambia el flujo (segregación/checklist/ruta de escalamiento), no “solo reentrenar”.",
        },
        points: 10,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Fail if prevention is only “remind staff” with no workflow control.",
          es: "Falla si la prevención es solo “recordar al personal” sin control del flujo.",
        },
      },
      {
        criterionId: "M1.C8_INTERPRETER_CAPACITY",
        description: {
          en: "If language/capacity is implicated, learner requires qualified interpreter support and documents teach-back/interpreter presence.",
          es: "Si idioma/capacidad aplica, exige intérprete calificado y documenta teach-back/presencia del intérprete.",
        },
        points: 5,
        mapsToDimensions: ["C", "R"],
        failCondition: {
          en: "Fail if learner endorses ad hoc interpreter when comprehension is uncertain.",
          es: "Falla si avala intérprete improvisado cuando la comprensión es incierta.",
        },
      },
      {
        criterionId: "M1.C9_NO_FACT_INVENTION",
        description: {
          en: "Integrity: separates known vs unknown; does not invent facts to align dates/signatures/procedures.",
          es: "Integridad: separa conocido vs desconocido; no inventa hechos para alinear fechas/firmas/procedimientos.",
        },
        points: 5,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Critical fail if learner proposes back-dating, rewriting source, or undocumented “verbal consent” to cover gaps.",
          es: "Falla crítica si propone retrofechar, reescribir fuente o “consentimiento verbal” sin documentación para cubrir brechas.",
        },
      },
      {
        criterionId: "M1.C10_AUDIT_MONITOR_DEFENSE",
        description: {
          en: "Audit-ready framing: classifies likely monitor concern; states defensible boundary (what site controls vs what needs IRB/sponsor decision); avoids minimizing language.",
          es: "Marco listo para auditoría: clasifica preocupación probable del monitor; declara límite defendible (qué controla el sitio vs qué requiere decisión CEI/sponsor); evita lenguaje minimizador.",
        },
        points: 5,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Fail if outputs dismiss PHI/consent issues as “minor admin” without severity/impact classification or omit sponsor/IRB decision boundary when required.",
          es: "Falla si las salidas tratan temas PHI/consentimiento como ‘admin menor’ sin clasificación de severidad/impacto u omiten el límite de decisión sponsor/CEI cuando aplica.",
        },
      },
    ],
  },

  scorecardContribution: [
    { dimension: "R", weight: 0.4, aggregationKey: "human_subjects_regs_irb_consent_effectiveness" },
    { dimension: "Q", weight: 0.35, aggregationKey: "hipaa_phi_documentation_and_breach_prevention" },
    { dimension: "C", weight: 0.25, aggregationKey: "respect_autonomy_vulnerable_subjects_therapeutic_misconception" },
  ],

  capstoneConnection: {
    summary: {
      en: "Consent/version stop-rules and PHI channel control here are re-tested under pressure in OSCE stations (especially OSCE.S5: source + ALCOA+ repair honesty).",
      es: "Las reglas de paro de consentimiento/versión y el control de canales PHI aquí se re-evalúan bajo presión en estaciones OSCE (especialmente OSCE.S5: fuente + honestidad en reparación ALCOA+).",
    },
    stationIds: ["OSCE.S2", "OSCE.S5"],
  },

  tags: ["regulatory", "documentation", "clinical_judgment", "audit_readiness", "bilingual", "flagship", "safety"],
  bilingualNotes: {
    en: "Keep regulatory tokens in EN (IRB, ICF, PHI, HIPAA, 45 CFR 46, 21 CFR 50). Spanish should translate operational meaning, not the tokens.",
    es: "Mantener tokens regulatorios en inglés (IRB, ICF, PHI, HIPAA, 45 CFR 46, 21 CFR 50). El español traduce el significado operativo, no los tokens.",
  },
};
