// src/curriculum-engine/data/modules/m1.ts

import type { Module } from "../../types";

/**
 * Module 1 — Ethics, Human Subjects Protection & HIPAA
 * Pedagogical structure maps: Core Concepts + Workflow + Error-Prone Areas + 3 Guided Practice cases + Audit + Answer Framework → lessons;
 * Error Library + hierarchical conflict → errorLibrary; Practical Exercise + Rubric → assessment.
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
  objective: {
    en: "Apply Belmont principles, informed consent regulations, IRB requirements, and HIPAA privacy rules to day-to-day site operations; identify ethical and privacy risks; document and escalate concerns appropriately.",
    es: "Aplicar principios de Belmont, normativa de consentimiento informado, requisitos del CEI y reglas de privacidad HIPAA a la operación diaria del sitio; identificar riesgos éticos y de privacidad; documentar y escalar inquietudes apropiadamente.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States how respect for persons, beneficence, and justice translate into concrete CRC behaviors (consent before research procedures, fair recruitment, safety transparency).",
          es: "Enuncia cómo respeto a las personas, beneficencia y justicia se traducen en conductas concretas del CRC (consentimiento antes de procedimientos de investigación, reclutamiento justo, transparencia de seguridad).",
        },
        {
          en: "Lists which items typically require IRB approval (ICF changes, amendments affecting participants) and what qualifies as PHI under HIPAA at a research site.",
          es: "Lista qué elementos suelen requerir aprobación del CEI (cambios en ICF, enmiendas que afectan participantes) y qué califica como PHI bajo HIPAA en un sitio de investigación.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes site workflow checkpoints: IRB-stamped ICF version, HIPAA forms, approved recruitment channels, consent documentation package, and secure PHI handling before and during the study.",
          es: "Ejecuta puntos de control del flujo del sitio: versión de ICF sellada por CEI, formularios HIPAA, canales de reclutamiento aprobados, paquete documental de consentimiento y manejo seguro de PHI antes y durante el estudio.",
        },
        {
          en: "Uses teach-back and documented process steps to confirm comprehension, copies given, and presence of qualified interpreters when required.",
          es: "Usa teach-back y pasos documentados para confirmar comprensión, copias entregadas y presencia de intérpretes calificados cuando corresponde.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects consent timing/version defects, vulnerable-subject coercion patterns, IRB non-compliance signals, and informal PHI channels; escalates per SOP when PI instructions conflict with IRB or sponsor letters.",
          es: "Detecta defectos de tiempo/versión de consentimiento, patrones de coerción en sujetos vulnerables, señales de incumplimiento del CEI y canales informales de PHI; escala según SOP cuando instrucciones del PI chocan con cartas del CEI o patrocinador.",
        },
        {
          en: "Prioritizes issues that invalidate legally effective consent or breach HIPAA before cosmetic documentation fixes; drafts monitor-defensible CAPA and defense statements without minimizing harm.",
          es: "Prioriza problemas que invalidan consentimiento legalmente efectivo o violan HIPAA antes que arreglos documentales cosméticos; redacta CAPA y declaraciones de defensa defendibles ante monitor sin minimizar el daño.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M1.L1",
      title: { en: "Core concepts — teaching (10–15 min)", es: "Conceptos núcleo — enseñanza (10–15 min)" },
      lessonType: "reading",
      objective: {
        en: "Anchor Belmont, consent-as-process, IRB role, HIPAA minimum necessary, and the CRC as early-warning system.",
        es: "Anclar Belmont, consentimiento como proceso, rol del CEI, HIPAA minimum necessary y el CRC como sistema de alerta temprana.",
      },
      keyPoints: [
        {
          en: "Respect for persons: autonomy + extra safeguards for diminished autonomy (children, cognitive impairment, economic vulnerability).",
          es: "Respeto a las personas: autonomía + salvaguardas extra ante autonomía disminuida (menores, deterioro cognitivo, vulnerabilidad económica).",
        },
        {
          en: "Beneficence: no harm; maximize benefit, minimize risk → eligibility rigor, safety reporting, transparent consent.",
          es: "Beneficencia: no dañar; maximizar beneficio, minimizar riesgo → rigor de elegibilidad, reporte de seguridad, consentimiento transparente.",
        },
        {
          en: "Justice: fair selection; avoid exploiting ‘easy’ populations; include those who may benefit.",
          es: "Justicia: selección justa; evitar explotar poblaciones ‘fáciles’; incluir a quienes puedan beneficiarse.",
        },
        {
          en: "Consent: 45 CFR 46, 21 CFR 50; IRB-approved ICF; understandable language; CRC ensures consent before any research procedure and documents copy given.",
          es: "Consentimiento: 45 CFR 46, 21 CFR 50; ICF aprobado por CEI; lenguaje comprensible; CRC asegura consentimiento antes de cualquier procedimiento de investigación y documenta copia entregada.",
        },
        {
          en: "IRB: approves/modifies/disapproves; CRC knows what changes need IRB and what unanticipated problems must be reported.",
          es: "CEI: aprueba/modifica/desaprueba; CRC sabe qué cambios requieren CEI y qué problemas no anticipados deben reportarse.",
        },
        {
          en: "HIPAA: PHI = identifiable health info; minimum necessary; no unencrypted email or casual WhatsApp with full identifiers; workforce training refreshed regularly.",
          es: "HIPAA: PHI = información de salud identificable; mínimo necesario; sin correo sin cifrar ni WhatsApp informal con identificadores completos; capacitación del personal renovada periódicamente.",
        },
        {
          en: "CRC escalates pressured consent, unreported AEs, PDs, PHI misuse to PI, IRB, compliance.",
          es: "CRC escala consentimiento presionado, EA no reportados, desviaciones y mal uso de PHI a PI, CEI, cumplimiento.",
        },
      ],
    },
    {
      lessonId: "M1.L2",
      title: { en: "Real-world workflow at the site", es: "Flujo real en el sitio" },
      lessonType: "reading",
      objective: {
        en: "Walk through first subject, recruitment, consent visit, ongoing study, and closure with CRC / PI / IRB / sponsor roles.",
        es: "Recorrer primer sujeto, reclutamiento, visita de consentimiento, estudio en curso y cierre con roles CRC / PI / CEI / patrocinador.",
      },
      keyPoints: [
        {
          en: "Before first subject: IRB-approved protocol, ICF, recruitment, HIPAA auth; CRC uses IRB-stamped current ICF.",
          es: "Antes del primer sujeto: protocolo aprobado por CEI, ICF, reclutamiento, autorización HIPAA; CRC usa ICF vigente sellado por CEI.",
        },
        {
          en: "Recruitment: only IRB-approved channels/scripts; minimal PHI for pre-screening, stored per approval.",
          es: "Reclutamiento: solo canales/guiones aprobados por CEI; PHI mínimo en pre-screening, almacenado según aprobación.",
        },
        {
          en: "Consent visit: correct version, capacity, language; no procedures before consent; teach-back; document who/when/where/version/presence/copy.",
          es: "Visita de consentimiento: versión correcta, capacidad, idioma; sin procedimientos antes del consentimiento; teach-back; documentar quién/cuándo/dónde/versión/presencia/copia.",
        },
        {
          en: "During study: honor withdrawal; avoid undue influence; PHI only as allowed; escalate ethical concerns.",
          es: "Durante el estudio: respetar retiro; evitar influencia indebida; PHI solo según lo permitido; escalar inquietudes éticas.",
        },
        {
          en: "Closure: ICF and HIPAA auth archived; retention met. CRC: process integrity; PI: accountable; IRB: oversight; sponsor/CRO: monitoring.",
          es: "Cierre: ICF y autorización HIPAA archivados; retención cumplida. CRC: integridad de proceso; PI: responsable; CEI: supervisión; patrocinador/CRO: monitoría.",
        },
      ],
    },
    {
      lessonId: "M1.L3",
      title: { en: "Error-prone areas (≥5 mistakes + why)", es: "Zonas propensas a error (≥5 errores + por qué)" },
      lessonType: "reading",
      objective: {
        en: "Recognize predictable failure modes that drive IRB findings and HIPAA breaches.",
        es: "Reconocer modos de falla predecibles que generan hallazgos del CEI y brechas HIPAA.",
      },
      keyPoints: [
        {
          en: "Mistake 1: Wrong ICF version after amendment — rushed clinics, poor version segregation, sponsor packet lag.",
          es: "Error 1: Versión incorrecta de ICF tras enmienda — clínicas apuradas, mala segregación de versiones, retraso del paquete del patrocinador.",
        },
        {
          en: "Mistake 2: Procedures before consent — schedule pressure, ‘efficiency’ culture, blurred standard-of-care vs research.",
          es: "Error 2: Procedimientos antes del consentimiento — presión de agenda, cultura de ‘eficiencia’, mezcla entre estándar de atención e investigación.",
        },
        {
          en: "Mistake 3: Vulnerable subjects + ad hoc interpreter — convenience, cost avoidance, therapeutic misconception.",
          es: "Error 3: Sujetos vulnerables + intérprete improvisado — conveniencia, evitar costo, falsa creencia terapéutica.",
        },
        {
          en: "Mistake 4: PHI on open counters or consumer apps — habit, understaffing, ‘just quick messaging’.",
          es: "Error 4: PHI en mostradores abiertos o apps de consumo — hábito, falta de personal, ‘solo un mensaje rápido’.",
        },
        {
          en: "Mistake 5: Silence when PI diverges from IRB — hierarchy fear, unclear escalation SOP.",
          es: "Error 5: Silencio cuando el PI se aparta del CEI — miedo a jerarquía, SOP de escalamiento poco clara.",
        },
        {
          en: "Mistake 6: Back-dating or mismatched consent vs procedure dates — poor same-day documentation discipline.",
          es: "Error 6: Retrofechado o fechas de consentimiento vs procedimiento incoherentes — mala disciplina documental el mismo día.",
        },
      ],
    },
    {
      lessonId: "M1.GP1",
      title: { en: "Guided practice — Case GP-1: correct ICF version", es: "Práctica guiada — Caso GP-1: versión correcta de ICF" },
      lessonType: "case",
      objective: {
        en: "Scenario: Amendment approved May 10; consent May 15. Binder has v2.0 stamped May 10 and v1.0 Jan 1. IRB letter: v2.0 for all new subjects from May 10.",
        es: "Escenario: Enmienda aprobada 10 may; consentimiento 15 may. Carpeta con v2.0 sellado 10 may y v1.0 1 ene. Carta CEI: v2.0 para nuevos sujetos desde 10 may.",
      },
      keyPoints: [
        {
          en: "What CRC sees: two ICF versions in active folder.",
          es: "Qué ve el CRC: dos versiones de ICF en carpeta activa.",
        },
        {
          en: "How to think: match stamp to IRB letter; segregate superseded forms.",
          es: "Cómo pensar: cruzar sello con carta CEI; segregar formularios sustituidos.",
        },
        {
          en: "Decision: Use v2.0; mark/remove v1.0 ‘Superseded — Do Not Use’.",
          es: "Decisión: Usar v2.0; marcar/retirar v1.0 ‘Sustituido — No usar’.",
        },
        {
          en: "Why it matters: patient risk disclosure; valid consent; avoids major audit finding.",
          es: "Por qué importa: divulgación de riesgo al paciente; consentimiento válido; evita hallazgo mayor en auditoría.",
        },
      ],
    },
    {
      lessonId: "M1.GP2",
      title: {
        en: "Guided practice — Case GP-2: procedures before consent (incorrect)",
        es: "Práctica guiada — Caso GP-2: procedimientos antes del consentimiento (incorrecto)",
      },
      lessonType: "case",
      objective: {
        en: "Scenario: PI asks to draw screening labs and ECG before consent visit to save time. Protocol defines them as research screening, not SOC. No ICF signed.",
        es: "Escenario: PI pide extracción de labs de screening y ECG antes de visita de consentimiento para ganar tiempo. Protocolo los define como screening de investigación, no SOC. Sin ICF firmado.",
      },
      keyPoints: [
        {
          en: "What CRC sees: tight schedule; research-only procedures queued pre-consent.",
          es: "Qué ve el CRC: agenda ajustada; procedimientos solo-investigación antes del consentimiento.",
        },
        {
          en: "How to think: research vs clinical care; legally effective consent required unless IRB waiver explicitly covers these steps.",
          es: "Cómo pensar: investigación vs atención clínica; consentimiento legalmente efectivo salvo waiver del CEI que cubra explícitamente estos pasos.",
        },
        {
          en: "Decision: Do not perform; escalate need for waiver or reschedule; consent first.",
          es: "Decisión: No realizar; escalar necesidad de waiver o reprogramar; consentimiento primero.",
        },
        {
          en: "Why it matters: autonomy; data may be unusable; major compliance finding.",
          es: "Por qué importa: autonomía; datos pueden ser inutilizables; hallazgo mayor de cumplimiento.",
        },
        {
          en: "Why this happens: PI time pressure, full clinics, CRC desire to appear ‘efficient’, culture of ‘we do first, fix paper later’ — recognize pressure, hold ethical standard.",
          es: "Por qué ocurre: presión de tiempo del PI, clínicas llenas, deseo del CRC de parecer ‘eficiente’, cultura de ‘hacemos primero, corregimos el papel después’ — reconocer presión, mantener estándar ético.",
        },
      ],
    },
    {
      lessonId: "M1.GP3",
      title: { en: "Guided practice — Case GP-3: WhatsApp and PHI (ambiguous)", es: "Práctica guiada — Caso GP-3: WhatsApp y PHI (ambiguo)" },
      lessonType: "case",
      objective: {
        en: "Scenario: Spanish-speaking participant sends full name, DOB, Rx photo via WhatsApp asking about new medication with IMP. Informal team use; SOP silent.",
        es: "Escenario: Participante hispanohablante envía nombre completo, DOB, foto de receta por WhatsApp preguntando nuevo medicamento con IMP. Uso informal del equipo; SOP silencioso.",
      },
      keyPoints: [
        {
          en: "What CRC sees: helpful intent; PHI in chat/photo; unclear institutional policy.",
          es: "Qué ve el CRC: intención útil; PHI en chat/foto; política institucional poco clara.",
        },
        {
          en: "How to think: HIPAA + archiving + device loss risk vs accessibility/justice for Spanish speakers.",
          es: "Cómo pensar: HIPAA + archivo + riesgo de pérdida de dispositivo vs accesibilidad/justicia para hispanohablantes.",
        },
        {
          en: "Decision: Defensible options — move to secure channel + document clinically in source + delete per policy; OR follow org managed-messaging policy if it exists; always escalate privacy/compliance.",
          es: "Decisión: Opciones defendibles — pasar a canal seguro + documentar clínicamente en fuente + borrar según política; O seguir política de mensajería gestionada si existe; siempre escalar privacidad/cumplimiento.",
        },
        {
          en: "Why it matters: confidentiality; safety record consistency; HIPAA and policy investigations if repeated.",
          es: "Por qué importa: confidencialidad; consistencia del registro de seguridad; HIPAA e investigaciones por política si se repite.",
        },
      ],
    },
    {
      lessonId: "M1.L4",
      title: { en: "Audit / monitor perspective", es: "Perspectiva de auditoría / monitor" },
      lessonType: "reading",
      objective: {
        en: "Anticipate QA, IRB, and regulator questions; typical findings; CAPA expectations beyond ‘retraining’.",
        es: "Anticipar preguntas de QA, CEI y regulador; hallazgos típicos; expectativas de CAPA más allá de ‘reentrenamiento’.",
      },
      keyPoints: [
        {
          en: "Questions: How do you ensure current ICF? How are non-English/low-literacy subjects consented? Re-consent after new safety info? PHI in electronic comms?",
          es: "Preguntas: ¿Cómo aseguran ICF vigente? ¿Cómo consienten sujetos no inglés/baja alfabetización? ¿Re-consentimiento tras nueva información de seguridad? ¿PHI en comunicación electrónica?",
        },
        {
          en: "Findings: wrong ICF version; missing re-consent; procedures before consent; poor interpreter documentation; HIPAA exposure; insecure messaging.",
          es: "Hallazgos: versión ICF errónea; falta de re-consentimiento; procedimientos antes del consentimiento; documentación deficiente de intérprete; exposición HIPAA; mensajería insegura.",
        },
        {
          en: "CAPA expected: version-control workflow, consent checklist, interpreter policy, technical/physical safeguards, not slides only.",
          es: "CAPA esperada: flujo de control de versiones, checklist de consentimiento, política de intérprete, salvaguardas técnicas/físicas, no solo diapositivas.",
        },
      ],
    },
    {
      lessonId: "M1.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate prioritization (autonomy/safety, legally effective consent, regulatory exposure), CAPA rigor, and defensible monitor language.",
        es: "Consolidar priorización (autonomía/seguridad, consentimiento legalmente efectivo, exposición regulatoria), rigor de CAPA y lenguaje defendible ante monitor.",
      },
      keyPoints: [
        {
          en: "Strong work: flags outdated ICF post-amendment as major/critical; treats date/signature mismatches as high-risk; never minimizes vulnerable consent or PHI breach.",
          es: "Trabajo sólido: marca ICF desactualizado post-enmienda como mayor/crítico; trata discrepancias fecha/firma como alto riesgo; nunca minimiza consentimiento vulnerable ni brecha PHI.",
        },
        {
          en: "Defense: admit issue, remedial steps, prevention aligned with Belmont + GCP; no blame-shifting.",
          es: "Defensa: admitir problema, medidas correctivas, prevención alineada con Belmont + GCP; sin culpar a otros.",
        },
        {
          en: "Learner fails if: accepts pre-consent research procedures; misses wrong ICF after amendment; ignores date/procedure gaps; labels vulnerable consent or PHI breach as minor only.",
          es: "El estudiante falla si: acepta procedimientos de investigación pre-consentimiento; no detecta ICF incorrecto tras enmienda; ignora brechas fecha/procedimiento; etiqueta consentimiento vulnerable o brecha PHI como solo menor.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M1.E1",
      description: {
        en: "Site uses ICF v1.0 after major safety amendment; subjects 011–013 enrolled with outdated form after IRB approved v2.0. Subjects 005–006 never re-consented with updated risks.",
        es: "Sitio usa ICF v1.0 tras enmienda mayor de seguridad; sujetos 011–013 incluidos con formulario desactualizado tras aprobación CEI de v2.0. Sujetos 005–006 nunca re-consentidos con riesgos actualizados.",
      },
      risk: {
        en: "Patient: uninformed of new risks. Compliance: major finding; may require re-consent and data impact assessment.",
        es: "Paciente: sin información de nuevos riesgos. Cumplimiento: hallazgo mayor; puede exigir re-consentimiento y evaluación de impacto en datos.",
      },
      expectedLearnerResponse: {
        en: "Stop enrollment in affected cohort per SOP; notify IRB/sponsor; re-consent plan; version-control CAPA; document timeline.",
        es: "Detener inclusión en cohorte afectada según SOP; notificar CEI/patrocinador; plan de re-consentimiento; CAPA de control de versiones; documentar línea temporal.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M1.E2",
      description: {
        en: "Subject 020: ICF signatures dated 14 June; source note says consent discussion 15 June; first research procedure 15 June — appearance of back-dating.",
        es: "Sujeto 020: firmas ICF fechadas 14 jun; nota fuente indica discusión de consentimiento 15 jun; primer procedimiento de investigación 15 jun — apariencia de retrofechado.",
      },
      risk: {
        en: "Cannot prove consent preceded procedures; integrity and GCP credibility.",
        es: "No se prueba que el consentimiento precedió procedimientos; credibilidad de integridad y GCP.",
      },
      expectedLearnerResponse: {
        en: "Factual reconciliation; transparent late entry or correction per policy; PI attestation; query resolution with audit trail.",
        es: "Conciliación factual; asiento tardío o corrección transparente según política; atestación PI; resolución de query con audit trail.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M1.E3",
      description: {
        en: "Non-English subject with limited literacy; adult child used as ad hoc interpreter; no certified interpreter or translated ICF despite availability. Family states study will ‘get better treatment’.",
        es: "Sujeto no anglófono con alfabetización limitada; hijo adulto como intérprete improvisado; sin intérprete certificado ni ICF traducido pese a disponibilidad. Familia dice que el estudio ‘dará mejor tratamiento’.",
      },
      risk: {
        en: "Autonomy and understanding compromised; serious consent violation.",
        es: "Autonomía y comprensión comprometidas; violación grave del consentimiento.",
      },
      expectedLearnerResponse: {
        en: "Halt consent process; qualified interpreter + translated ICF; assess undue influence; IRB/compliance consult.",
        es: "Detener proceso de consentimiento; intérprete calificado + ICF traducido; evaluar influencia indebida; consulta CEI/cumplimiento.",
      },
      relatedDimensions: ["C", "R"],
    },
    {
      errorId: "M1.E4",
      description: {
        en: "PI continues enrolling despite IRB suspension pending safety review, stating IRB is ‘overreacting’.",
        es: "PI continúa incluyendo pese a suspensión del CEI pendiente de revisión de seguridad, afirmando que el CEI ‘sobrerreacciona’.",
      },
      risk: {
        en: "Subjects exposed without independent oversight; catastrophic regulatory exposure.",
        es: "Sujetos expuestos sin supervisión independiente; exposición regulatoria catastrófica.",
      },
      expectedLearnerResponse: {
        en: "Immediate escalation to compliance/IRB; document instruction conflict; do not enroll; sponsor notification per SOP.",
        es: "Escalamiento inmediato a cumplimiento/CEI; documentar conflicto de instrucciones; no incluir; notificación al patrocinador según SOP.",
      },
      relatedDimensions: ["R", "C"],
    },
    {
      errorId: "M1.E5",
      description: {
        en: "Paper ICFs and screening logs with full identifiers left on open counter; family member of another patient photographs names.",
        es: "ICF en papel y logs de screening con identificadores completos en mostrador abierto; familiar de otro paciente fotografía nombres.",
      },
      risk: {
        en: "Privacy breach; reportable HIPAA incident; remediation and notification may be required.",
        es: "Brecha de privacidad; incidente HIPAA reportable; remediación y notificación pueden ser obligatorias.",
      },
      expectedLearnerResponse: {
        en: "Incident report; risk assessment; containment; training; physical safeguards; monitor/Q notification per policy.",
        es: "Reporte de incidente; evaluación de riesgo; contención; capacitación; salvaguardas físicas; notificación a monitor/Q según política.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M1.E6",
      description: {
        en: "IRB requires re-consent all enrolled with ICF v3.0 ‘at earliest opportunity’ after new serious risk. Two weeks later half remain without re-consent. PI refuses proactive outreach, waits months for visits.",
        es: "CEI exige re-consentir a todos los incluidos con ICF v3.0 ‘a la primera oportunidad’ tras nuevo riesgo serio. Dos semanas después la mitad sigue sin re-consentimiento. PI rechaza contacto proactivo y espera meses a visitas.",
      },
      risk: {
        en: "Subjects continue IMP without material risk disclosure; autonomy and safety compromised; IRB directive unmet.",
        es: "Sujetos continúan IMP sin divulgación material de riesgo; autonomía y seguridad comprometidas; directiva del CEI incumplida.",
      },
      expectedLearnerResponse: {
        en: "Document conflict; meet PI with IRB letter; propose compliant plan (tele-consent, prioritized calls); if unresolved, escalate to compliance/IRB office with email trail.",
        es: "Documentar conflicto; reunión con PI con carta CEI; plan conforme (tele-consent, llamadas priorizadas); sin resolución, escalar a cumplimiento/oficina CEI con hilo de correos.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M1.EX1",
      name: {
        en: "Ethics & consent under pressure — protect the subject, protect the site",
        es: "Ética y consentimiento bajo presión — proteger al participante y al sitio",
      },
      scenario: {
        en: "30 minutes before internal QA review. Pre-review consent and ethics documentation for subjects 011, 020, and 025. Inputs: signed ICFs with stamps/signatures/dates; IRB letters including ICF version effective dates; source notes on consent discussions, attendees, first study procedures; email chain PI–sponsor on safety update (possible distractor / missing re-consent); HIPAA acknowledgments. Incomplete and conflicting data by design.",
        es: "30 minutos antes de revisión interna de QA. Pre-revisar documentación de consentimiento y ética de sujetos 011, 020 y 025. Insumos: ICF firmados con sellos/firmas/fechas; cartas CEI con fechas efectivas de versión; notas fuente sobre discusiones de consentimiento, asistentes, primeros procedimientos; cadena de correo PI–patrocinador sobre actualización de seguridad (posible distractor / re-consentimiento faltante); reconocimientos HIPAA. Datos incompletos y conflictivos a propósito.",
      },
      inputs: [
        { inputId: "M1.IN1", label: { en: "ICF packet (011, 020, 025)", es: "Paquete ICF (011, 020, 025)" }, inputKind: "pdf" },
        { inputId: "M1.IN2", label: { en: "IRB approval letters + amendment dates", es: "Cartas de aprobación CEI + fechas de enmienda" }, inputKind: "pdf" },
        { inputId: "M1.IN3", label: { en: "Source consent notes + procedure log excerpts", es: "Notas fuente de consentimiento + extractos log procedimientos" }, inputKind: "mock_ehr" },
        { inputId: "M1.IN4", label: { en: "PI–sponsor email thread (safety update)", es: "Hilo correo PI–patrocinador (actualización seguridad)" }, inputKind: "table" },
        { inputId: "M1.IN5", label: { en: "HIPAA forms per subject", es: "Formularios HIPAA por sujeto" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "List all ethical/consent/privacy issues (wrong ICF version, timing/documentation gaps, vulnerable-population communication, PHI risks). Prioritize top 3 before QA; for each classify minor/major/critical and impact (patient/data/compliance, ≥1 each). Propose immediate corrective + preventive CAPA. Draft a short defense statement for one major/critical issue (what went wrong, fix, prevention).",
        es: "Listar todos los problemas éticos/consentimiento/privacidad (versión ICF errónea, brechas tiempo/documentación, comunicación población vulnerable, riesgos PHI). Priorizar 3 principales antes de QA; clasificar cada uno menor/mayor/crítico e impacto (paciente/datos/cumplimiento, ≥1 cada uno). Proponer CAPA correctiva + preventiva inmediata. Redactar declaración breve de defensa para un tema mayor/crítico (qué falló, corrección, prevención).",
      },
      deliverables: [
        { deliverableId: "M1.D1", label: { en: "Issue register + severity/impact matrix", es: "Registro de hallazgos + matriz severidad/impacto" }, formatHint: "table" },
        { deliverableId: "M1.D2", label: { en: "Top-3 CAPA (corrective + preventive)", es: "CAPA top-3 (correctiva + preventiva)" }, formatHint: "pdf|docx" },
        { deliverableId: "M1.D3", label: { en: "Defense statement to QA/monitor", es: "Declaración de defensa a QA/monitor" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M1.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M1.C1",
        description: {
          en: "Identifies wrong ICF version use, consent timing gaps, vulnerable-subject process defects, and PHI exposure; prioritizes autonomy/safety and legally effective consent over cosmetic fixes.",
          es: "Identifica uso de versión ICF incorrecta, brechas de tiempo de consentimiento, defectos en sujetos vulnerables y exposición PHI; prioriza autonomía/seguridad y consentimiento legalmente efectivo sobre arreglos cosméticos.",
        },
        points: 35,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Misses outdated ICF after amendment or treats procedures-before-consent as acceptable.",
          es: "Omite ICF desactualizado tras enmienda o trata procedimientos antes del consentimiento como aceptables.",
        },
      },
      {
        criterionId: "M1.C2",
        description: {
          en: "Classifies each top issue minor/major/critical with defensible rationale; maps impact to patient, data, and compliance domains.",
          es: "Clasifica cada tema principal menor/mayor/crítico con justificación defendible; mapea impacto a paciente, datos y cumplimiento.",
        },
        points: 25,
        mapsToDimensions: ["C", "R"],
        failCondition: {
          en: "Labels major ethical, consent, or PHI breach patterns as uniformly minor without justification.",
          es: "Etiqueta patrones mayores éticos, de consentimiento o PHI como uniformemente menores sin justificación.",
        },
      },
      {
        criterionId: "M1.C3",
        description: {
          en: "CAPA: concrete immediate corrections (re-consent, breach report, IRB notification) and preventive systems (version control, interpreter policy, clean desk, escalation SOP).",
          es: "CAPA: correcciones inmediatas concretas (re-consentimiento, reporte de brecha, notificación CEI) y sistemas preventivos (control de versiones, política de intérprete, escritorio limpio, SOP de escalamiento).",
        },
        points: 25,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "CAPA is retraining-only with no workflow or safeguard changes for critical risks.",
          es: "CAPA es solo reentrenamiento sin cambios de flujo o salvaguardas para riesgos críticos.",
        },
      },
      {
        criterionId: "M1.C4",
        description: {
          en: "Defense statement: accurate, non-minimizing, Belmont/GCP-aligned; admits issue, remedial steps, prevention.",
          es: "Declaración de defensa: precisa, sin minimizar, alineada Belmont/GCP; admite problema, medidas correctivas, prevención.",
        },
        points: 15,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Blames participants/staff only or conceals known discrepancies from QA/monitor narrative.",
          es: "Culpa solo a participantes/personal u oculta discrepancias conocidas en narrativa a QA/monitor.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.4,
      aggregationKey: "human_subjects_regs_irb_consent_effectiveness",
    },
    {
      dimension: "Q",
      weight: 0.35,
      aggregationKey: "hipaa_phi_documentation_and_breach_prevention",
    },
    {
      dimension: "C",
      weight: 0.25,
      aggregationKey: "respect_autonomy_vulnerable_subjects_therapeutic_misconception",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S2 (ICD version / consent execution under defects) and OSCE.S5 (source/ALCOA + audit-trail honesty) mirror consent integrity and privacy discipline taught here.",
      es: "OSCE.S2 (versión ICD / ejecución de consentimiento con defectos) y OSCE.S5 (fuente/ALCOA + honestidad de audit trail) reflejan integridad de consentimiento y disciplina de privacidad de este módulo.",
    },
    stationIds: ["OSCE.S2", "OSCE.S5"],
  },
  tags: ["regulatory", "documentation", "clinical_judgment", "audit_readiness", "bilingual", "flagship", "safety"],
  bilingualNotes: {
    en: "Regulatory citations (45 CFR 46, 21 CFR 50, HIPAA) stay in English; expand acronyms once in ES if needed for learners.",
    es: "Citas regulatorias (45 CFR 46, 21 CFR 50, HIPAA) permanecen en inglés; expandir siglas una vez en ES si el perfil del grupo lo requiere.",
  },
};
