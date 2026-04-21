// src/curriculum-engine/data/modules/m6.ts

import type { Module } from "../../types";

/**
 * Module 6 — Informed consent: process, ethics & documentation under pressure (21 CFR 50, GCP, eIC).
 * Guided practice: four cases (GP1–GP4) under the high-ambiguity exception — see IMPLEMENTATION_NOTES.moduleAuthoring.guidedPracticeCaseCount.
 */
export const MODULE_M6: Module = {
  id: "M6",
  slug: "informed-consent-ethics-documentation",
  internalName: "mod_06_informed_consent_crc",
  category: "foundations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "C", "Q", "O"],
  title: {
    en: "Module 6 — Informed Consent: Ethical Process, Timing Traps & Real-World Constraints",
    es: "Módulo 6 — Consentimiento informado: proceso ético, trampas de tiempo y restricciones reales",
  },
  objective: {
    en: "Conduct and document informed consent (paper or eIC) per 21 CFR 50 and GCP; detect timing inconsistencies (procedures before consent); identify coercion and undue influence; handle language and comprehension barriers including eIC UX failures; navigate ambiguous re-consent triggers; defend the consent process in inspection.",
    es: "Realizar y documentar consentimiento informado (papel o eIC) según 21 CFR 50 y GCP; detectar inconsistencias de tiempo (procedimientos antes del consentimiento); identificar coerción e influencia indebida; manejar barreras de idioma y comprensión incluidos fallos UX de eIC; navegar disparadores ambiguos de re-consentimiento; defender el proceso de consentimiento en inspección.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States that legally effective informed consent requires adequate information, comprehension, and voluntariness—and that the signed ICF is only one part of an ongoing process.",
          es: "Afirma que el consentimiento informado legalmente efectivo exige información adecuada, comprensión y voluntariedad—y que el ICF firmado es solo una parte de un proceso continuo.",
        },
        {
          en: "Lists 21 CFR 50 core elements (purpose, procedures, duration, risks, benefits, alternatives, confidentiality, injury compensation if applicable, contacts, voluntariness, withdrawal) and common findings: wrong version, pre-consent procedures, missing re-consent, signature/date gaps, no discussion note.",
          es: "Lista elementos núcleo 21 CFR 50 (propósito, procedimientos, duración, riesgos, beneficios, alternativas, confidencialidad, compensación por lesión si aplica, contactos, voluntariedad, retiro) y hallazgos frecuentes: versión incorrecta, procedimientos pre-consentimiento, falta re-consentimiento, brechas firma/fecha, sin nota de conversación.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Prepares consent with IRB-approved current versions and translations; uses teach-back; addresses therapeutic misconception; documents source note (date/time, attendees, language, key points, questions, copy provided) with consent before research procedures and same-day timestamp discipline.",
          es: "Prepara consentimiento con versiones y traducciones aprobadas por CEI vigentes; usa teach-back; aborda misconception terapéutica; documenta nota en fuente (fecha/hora, asistentes, idioma, puntos clave, preguntas, copia entregada) con consentimiento antes de procedimientos de investigación y disciplina de marca temporal el mismo día.",
        },
        {
          en: "Runs eIC with human verification: platform audit trail plus mandatory verbal review where needed; escalates ambiguous amendments to PI/IRB for re-consent decisions with written rationale.",
          es: "Ejecuta eIC con verificación humana: audit trail de plataforma más revisión verbal obligatoria donde haga falta; escala enmiendas ambiguas a PI/CEI para decisiones de re-consentimiento con justificación escrita.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Classifies same-day labs-before-ICF patterns, coercive PI language, and ‘complete’ eIC with clear subject misunderstanding as major/critical consent integrity risks—not administrative quirks.",
          es: "Clasifica patrones mismo día labs-antes-ICF, lenguaje coercitivo del PI y eIC ‘completo’ con claro malentendido del sujeto como riesgos mayor/críticos de integridad del consentimiento—no rarezas administrativas.",
        },
        {
          en: "Designs system CAPA: version control, consent scheduling SOP, coercion-free language training, eIC teach-back rules, re-consent framework with IRB consultation—mapping cascade to M2 deviations, M4 logs, M8 screening/randomization timing, M16 audit exposure.",
          es: "Diseña CAPA sistema: control de versiones, SOP agenda de consentimiento, capacitación lenguaje libre de coerción, reglas teach-back eIC, marco re-consentimiento con consulta CEI—mapeando cascada a desviaciones M2, logs M4, tiempo screening/randomización M8, exposición auditoría M16.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M6.L1",
      title: { en: "Core concepts — consent as ethical process", es: "Conceptos núcleo — consentimiento como proceso ético" },
      lessonType: "reading",
      objective: {
        en: "Anchor 21 CFR 50, voluntariness, eIC, therapeutic misconception, language barriers, re-consent triggers, cross-links M1/M3/M4/M16.",
        es: "Anclar 21 CFR 50, voluntariedad, eIC, misconception terapéutica, barreras de idioma, disparadores re-consentimiento, vínculos M1/M3/M4/M16.",
      },
      keyPoints: [
        {
          en: "Legally effective consent = information + comprehension + voluntariness; signature alone is insufficient.",
          es: "Consentimiento legalmente efectivo = información + comprensión + voluntariedad; la firma sola es insuficiente.",
        },
        {
          en: "Coercion/undue influence: care withheld if refuse, exaggerated benefit, implied obligation—invalidates consent.",
          es: "Coerción/influencia indebida: retención de atención si rechaza, beneficio exagerado, obligación implícita—invalida consentimiento.",
        },
        {
          en: "eIC must meet regulatory standards; audit trail ≠ comprehension—CRC still explains and verifies understanding.",
          es: "eIC debe cumplir estándares regulatorios; audit trail ≠ comprensión—el CRC aún explica y verifica comprensión.",
        },
        {
          en: "Re-consent: new significant risk, substantive procedure/burden changes—usually yes; minor admin—often no per IRB policy.",
          es: "Re-consentimiento: nuevo riesgo significativo, cambios sustantivos en procedimiento/carga—usualmente sí; admin menor—a menudo no según política CEI.",
        },
        {
          en: "Consent failures propagate to eligibility, logs, EDC subject status, and inspection narratives.",
          es: "Fallas de consentimiento se propagan a elegibilidad, logs, estado sujeto EDC y narrativas de inspección.",
        },
      ],
    },
    {
      lessonId: "M6.L2",
      title: { en: "Real-world workflow — preparation through eIC", es: "Flujo real — preparación hasta eIC" },
      lessonType: "reading",
      objective: {
        en: "Follow preparation, discussion, timing/documentation, re-consent, and eIC UX safeguards.",
        es: "Seguir preparación, discusión, tiempo/documentación, re-consentimiento y salvaguardas UX eIC.",
      },
      keyPoints: [
        {
          en: "Prep: confirm IRB-approved ICF version and translations; retire obsolete forms from circulation.",
          es: "Prep: confirmar versión ICF y traducciones aprobadas por CEI; retirar formularios obsoletos de circulación.",
        },
        {
          en: "Discussion: understandable language; qualified interpreters; teach-back on purpose, risks, options; research vs SOC.",
          es: "Discusión: lenguaje comprensible; intérpretes calificados; teach-back sobre propósito, riesgos, opciones; investigación vs SOC.",
        },
        {
          en: "Timing: consent before any research procedure unless IRB-approved narrow exception documented.",
          es: "Tiempo: consentimiento antes de cualquier procedimiento de investigación salvo excepción estrecha aprobada por CEI documentada.",
        },
        {
          en: "Source note: who, when, language, questions, copy—especially same-day sequencing vs procedure timestamps.",
          es: "Nota en fuente: quién, cuándo, idioma, preguntas, copia—especialmente secuencia vs marcas de procedimiento el mismo día.",
        },
        {
          en: "eIC: avoid click-through-only; mandatory section review + teach-back for vulnerable or low digital literacy when policy requires.",
          es: "eIC: evitar solo clic; revisión obligatoria de secciones + teach-back para baja alfabetización digital o vulnerables cuando la política lo exija.",
        },
      ],
    },
    {
      lessonId: "M6.L3",
      title: { en: "Common inspection findings — consent", es: "Hallazgos frecuentes de inspección — consentimiento" },
      lessonType: "reading",
      objective: {
        en: "Recognize patterns cited in FDA/IRB oversight and sponsor audits.",
        es: "Reconocer patrones citados en supervisión FDA/CEI y auditorías patrocinador.",
      },
      keyPoints: [
        {
          en: "Wrong or outdated ICF version; enrolled after approval of newer version.",
          es: "Versión ICF incorrecta u obsoleta; inclusión tras aprobación de versión más nueva.",
        },
        {
          en: "Research procedures before consent; same-day timing traps visible only via EMR timestamps.",
          es: "Procedimientos de investigación antes del consentimiento; trampas de tiempo mismo día visibles solo por marcas EMR.",
        },
        {
          en: "Missing re-consent after material risk/benefit change.",
          es: "Falta re-consentimiento tras cambio material riesgo/beneficio.",
        },
        {
          en: "Incomplete signatures/LAR; unexplained retroactive signatures.",
          es: "Firmas/LAR incompletas; firmas retroactivas sin explicación.",
        },
        {
          en: "No documentation of consent conversation; eIC logs without staff identity aligned to DOA.",
          es: "Sin documentación de conversación de consentimiento; logs eIC sin identidad de personal alineada a DOA.",
        },
      ],
    },
    {
      lessonId: "M6.GP1",
      title: { en: "Guided practice — GP-6.1: version control & re-consent", es: "Práctica guiada — GP-6.1: control de versiones y re-consentimiento" },
      lessonType: "case",
      objective: {
        en: "Amendment 2 adds significant cardiac risk + extra ECG. IRB approves v3.0 1 June. Subject 010 screened 10 June; subject 004 enrolled on treatment.",
        es: "Enmienda 2 añade riesgo cardíaco significativo + ECG extra. CEI aprueba v3.0 1 jun. Sujeto 010 screening 10 jun; sujeto 004 incluido en tratamiento.",
      },
      keyPoints: [
        {
          en: "New subjects: v3.0 only from IRB effective date.",
          es: "Sujetos nuevos: solo v3.0 desde fecha efectiva CEI.",
        },
        {
          en: "Ongoing subjects: re-consent before next visit where new risk/procedures apply; document discussion and copy.",
          es: "Sujetos en curso: re-consentimiento antes de próxima visita donde apliquen nuevos riesgos/procedimientos; documentar discusión y copia.",
        },
      ],
    },
    {
      lessonId: "M6.GP2",
      title: { en: "Guided practice — GP-6.2: same-day timing trap", es: "Práctica guiada — GP-6.2: trampa de tiempo mismo día" },
      lessonType: "case",
      objective: {
        en: "Subject 022: research screening labs 09:45; ICF signed 10:30 same day. Labs not SOC.",
        es: "Sujeto 022: labs screening investigación 09:45; ICF firmado 10:30 mismo día. Labs no son SOC.",
      },
      keyPoints: [
        {
          en: "Timestamp inversion = procedures before legally effective consent unless narrow documented IRB exception.",
          es: "Inversión de marca temporal = procedimientos antes de consentimiento legalmente efectivo salvo excepción CEI documentada estrecha.",
        },
        {
          en: "Major/critical deviation; PI/sponsor; IRB per SOP; CAPA on scheduling and time-stamp QA.",
          es: "Desviación mayor/crítica; PI/patrocinador; CEI según SOP; CAPA en agenda y QA de marcas temporales.",
        },
      ],
    },
    {
      lessonId: "M6.GP3",
      title: { en: "Guided practice — GP-6.3: coercion / undue influence", es: "Práctica guiada — GP-6.3: coerción / influencia indebida" },
      lessonType: "case",
      objective: {
        en: "Advanced disease; PI: ‘If you don’t join this study, I don’t see any other good options.’ Subject hesitant then signs.",
        es: "Enfermedad avanzada; PI: ‘Si no entra a este estudio, no veo otras buenas opciones.’ Sujeto hesitante y luego firma.",
      },
      keyPoints: [
        {
          en: "Reframe: trial as one option; standard care, supportive care, other trials; refusal does not forfeit clinical care.",
          es: "Reencuadrar: ensayo como una opción; atención estándar, cuidados de soporte, otros ensayos; rechazar no pierde atención clínica.",
        },
        {
          en: "Re-discuss consent; document voluntariness; PI coaching on language.",
          es: "Re-discutir consentimiento; documentar voluntariedad; coaching al PI en lenguaje.",
        },
      ],
    },
    {
      lessonId: "M6.GP4",
      title: { en: "Guided practice — GP-6.4: eIC UX vs understanding", es: "Práctica guiada — GP-6.4: UX eIC vs comprensión" },
      lessonType: "case",
      objective: {
        en: "Older subject rapid-taps eIC; audit trail complete; later says thought study was one-time test, not long study.",
        es: "Sujeto mayor avanza rápido eIC; audit trail completo; luego dice que pensó que era prueba única, no estudio largo.",
      },
      keyPoints: [
        {
          en: "Technical completeness ≠ ethical validity; re-explain; continue vs withdraw with documented understanding.",
          es: "Completitud técnica ≠ validez ética; re-explicar; continuar vs retirar con comprensión documentada.",
        },
        {
          en: "System: mandatory CRC review of purpose/duration/schedule; teach-back; UX pacing if configurable.",
          es: "Sistema: revisión CRC obligatoria de propósito/duración/calendario; teach-back; ritmo UX si configurable.",
        },
      ],
    },
    {
      lessonId: "M6.L4",
      title: { en: "Inspection / monitor perspective", es: "Perspectiva de inspección / monitor" },
      lessonType: "reading",
      objective: {
        en: "Anticipate subject interviews, timestamp drills, and ICF version audits.",
        es: "Anticipar entrevistas a sujetos, ejercicios de marcas temporales y auditorías de versión ICF.",
      },
      keyPoints: [
        {
          en: "Inspectors correlate EMR procedure times, ICF versions against IRB approval dates, and discussion notes.",
          es: "Inspectores correlacionan tiempos de procedimiento EMR, versiones ICF vs fechas aprobación CEI y notas de discusión.",
        },
        {
          en: "Voluntariness and comprehension may be probed directly with participants.",
          es: "Voluntariedad y comprensión pueden explorarse directamente con participantes.",
        },
      ],
    },
    {
      lessonId: "M6.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate timing traps, coercion, eIC, re-consent ambiguity, and systemic CAPA.",
        es: "Consolidar trampas temporales, coerción, eIC, ambigüedad re-consentimiento y CAPA sistémica.",
      },
      keyPoints: [
        {
          en: "Strong work: severity on pre-consent research procedures; never dismiss eIC misunderstanding as ‘user error’ only.",
          es: "Trabajo sólido: severidad en procedimientos investigación pre-consentimiento; no despachar malentendido eIC como solo ‘error de usuario’.",
        },
        {
          en: "Fail if: miss clear timing inversion; ignore coercion or eIC non-comprehension; treat re-consent and process notes as minor only.",
          es: "Fallo si: no detecta inversión clara de tiempo; ignora coerción o no-comprensión eIC; trata re-consentimiento y notas de proceso como solo menores.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M6.E1",
      description: {
        en: "EMR shows research-only imaging and labs two days before any ICF signature; protocol does not allow pre-consent research procedures.",
        es: "EMR muestra imagen y labs solo investigación dos días antes de firma ICF; protocolo no permite procedimientos investigación pre-consentimiento.",
      },
      risk: {
        en: "Serious consent violation; possible exclusion from analysis and regulatory reporting.",
        es: "Violación grave de consentimiento; posible exclusión del análisis y reporte regulatorio.",
      },
      expectedLearnerResponse: {
        en: "Halt research steps; deviation package; IRB/sponsor; assess subject options; CAPA on screening workflow.",
        es: "Detener pasos investigación; paquete desviación; CEI/patrocinador; evaluar opciones del sujeto; CAPA en flujo screening.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M6.E2",
      description: {
        en: "Amendment 3 changes visit q8w→q12w and simplifies questionnaires; no new risks. PI assumes no re-consent; IRB position not documented.",
        es: "Enmienda 3 cambia visita q8w→q12w y simplifica cuestionarios; sin riesgos nuevos. PI asume sin re-consentimiento; posición CEI no documentada.",
      },
      risk: {
        en: "Ambiguous: burden reduced but some subjects may want disclosure; inconsistent site practice risk.",
        es: "Ambiguo: carga reducida pero algunos sujetos pueden querer divulgación; riesgo práctica inconsistente del sitio.",
      },
      expectedLearnerResponse: {
        en: "Query IRB; document rationale; policy for similar amendments; consider informational update or re-consent per determination.",
        es: "Consultar CEI; documentar justificación; política para enmiendas similares; considerar actualización informativa o re-consentimiento según determinación.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M6.E3",
      description: {
        en: "Binder holds v1.0–v3.0; subject enrolled months after v3.0 IRB approval using v1.0.",
        es: "Carpeta tiene v1.0–v3.0; sujeto incluido meses tras aprobación CEI v3.0 usando v1.0.",
      },
      risk: {
        en: "Subject lacked current disclosures; corrective re-consent; deviation; version control CAPA.",
        es: "Sujeto sin divulgaciones actuales; re-consentimiento correctivo; desviación; CAPA control de versiones.",
      },
      expectedLearnerResponse: {
        en: "Immediate re-consent on approved version; root cause on distribution; CTMS/version gate before enrollment.",
        es: "Re-consentimiento inmediato en versión aprobada; causa raíz en distribución; control versión CTMS antes inclusión.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M6.E4",
      description: {
        en: "Minor ICF lacks parent/LAR signature; staff adds LAR later same date without late-entry explanation or initials.",
        es: "ICF menor falta firma padre/LAR; personal añade LAR después misma fecha sin explicación de entrada tardía ni iniciales.",
      },
      risk: {
        en: "Authenticity and timing questioned; process integrity finding.",
        es: "Autenticidad y tiempo cuestionados; hallazgo de integridad de proceso.",
      },
      expectedLearnerResponse: {
        en: "GDP-compliant correction; attestations; never back-date; QA review of LAR workflow.",
        es: "Corrección GDP conforme; atestaciones; no retrofechar; revisión QA flujo LAR.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M6.E5",
      description: {
        en: "eIC logs show ‘study staff’ assisted subject but no named individual; DOA does not delegate consent to generic ‘all staff.’",
        es: "Logs eIC muestran ‘personal del estudio’ asistió al sujeto sin individuo nombrado; DOA no delega consentimiento a ‘todo el personal’ genérico.",
      },
      risk: {
        en: "Accountability gap; GCP delegation misalignment.",
        es: "Brecha de rendición de cuentas; desalineación delegación GCP.",
      },
      expectedLearnerResponse: {
        en: "Map eIC roles to named qualified staff; update DOA; SOP on eIC witness documentation.",
        es: "Mapear roles eIC a personal calificado nombrado; actualizar DOA; SOP en documentación testigo eIC.",
      },
      relatedDimensions: ["R", "O", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M6.EX1",
      name: {
        en: "Informed Consent Lab — timing, voluntariness, eIC UX & re-consent",
        es: "Laboratorio consentimiento informado — tiempo, voluntariedad, UX eIC y re-consentimiento",
      },
      scenario: {
        en: "35 minutes before inspection-readiness review on consent for subjects A, B, C. FDA-style scrutiny; subject interviews possible. Packet: signed ICFs (mixed versions), IRB letters, source/EMR with timestamps, eIC logs for one subject, short-form/interpreter packet for one non-English subject, one ambiguous amendment (schedule simplification vs substantive change).",
        es: "35 minutos antes de revisión preparación inspección sobre consentimiento para sujetos A, B, C. Escrutinio estilo FDA; posibles entrevistas. Paquete: ICF firmados (versiones mixtas), cartas CEI, fuente/EMR con marcas, logs eIC para un sujeto, paquete formulario corto/intérprete para un sujeto no anglófono, una enmienda ambigua (simplificación de calendario vs cambio sustantivo).",
      },
      inputs: [
        { inputId: "M6.IN1", label: { en: "ICF copies + IRB approval timeline", es: "Copias ICF + línea temporal aprobación CEI" }, inputKind: "pdf" },
        { inputId: "M6.IN2", label: { en: "Source/EMR + procedure timestamps", es: "Fuente/EMR + marcas de procedimiento" }, inputKind: "mock_ehr" },
        { inputId: "M6.IN3", label: { en: "eIC audit export", es: "Export audit eIC" }, inputKind: "export" },
        { inputId: "M6.IN4", label: { en: "Interpreter / short-form documentation", es: "Documentación intérprete / formulario corto" }, inputKind: "pdf" },
        { inputId: "M6.IN5", label: { en: "Ambiguous amendment + consent template note", es: "Enmienda ambigua + nota plantilla consentimiento" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "Per A/B/C: correct ICF version at consent? Consent before all research procedures including same-day traps? Signatures/dates complete? Adequate process documentation? eIC: documentation vs real understanding? List: wrong versions, timing, coercion language in notes, re-consent gaps, language/eIC UX. Top 3–4: severity + patient/data/compliance; corrective + system CAPA (scheduling, training, eIC teach-back, re-consent framework with IRB). Draft inspection-ready explanation for one severe issue (timing or coercion) with remediation and structural prevention.",
        es: "Por A/B/C: ¿versión ICF correcta al consentir? ¿Consentimiento antes de procedimientos incluidas trampas mismo día? ¿Firmas/fechas completas? ¿Documentación adecuada del proceso? eIC: ¿documentación vs comprensión real? Listar: versiones incorrectas, tiempo, lenguaje coercitivo en notas, brechas re-consentimiento, idioma/UX eIC. Top 3–4: severidad + paciente/datos/cumplimiento; correctiva + CAPA sistema (agenda, capacitación, teach-back eIC, marco re-consentimiento con CEI). Redactar explicación lista para inspección para un tema grave (tiempo o coerción) con remediación y prevención estructural.",
      },
      deliverables: [
        { deliverableId: "M6.D1", label: { en: "Per-subject consent integrity matrix", es: "Matriz integridad consentimiento por sujeto" }, formatHint: "table" },
        { deliverableId: "M6.D2", label: { en: "Issue register + CAPA", es: "Registro hallazgos + CAPA" }, formatHint: "pdf" },
        { deliverableId: "M6.D3", label: { en: "Inspection explanation (one severe issue)", es: "Explicación inspección (un tema grave)" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M6.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M6.C1",
        description: {
          en: "Flags wrong ICF versions vs IRB dates; detects research procedures before consent including same-day timestamp inversions; classifies severity appropriately.",
          es: "Señala versiones ICF incorrectas vs fechas CEI; detecta procedimientos investigación antes del consentimiento incluidas inversiones de marca el mismo día; clasifica severidad apropiadamente.",
        },
        points: 35,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Misses a clear timing trap where research procedures precede consent when timestamps are in the packet.",
          es: "No detecta trampa clara de tiempo donde procedimientos investigación preceden al consentimiento cuando las marcas están en el paquete.",
        },
      },
      {
        criterionId: "M6.C2",
        description: {
          en: "Identifies coercion/undue influence in source notes; distinguishes clean eIC logs from demonstrated non-comprehension; proposes language and process fixes.",
          es: "Identifica coerción/influencia indebida en notas fuente; distingue logs eIC limpios de no-comprensión demostrada; propone arreglos de lenguaje y proceso.",
        },
        points: 25,
        mapsToDimensions: ["C", "R"],
        failCondition: {
          en: "Ignores explicit coercive framing or obvious subject misunderstanding despite eIC completeness.",
          es: "Ignora encuadre coercitivo explícito u obvio malentendido del sujeto pese a completitud del eIC.",
        },
      },
      {
        criterionId: "M6.C3",
        description: {
          en: "Handles ambiguous re-consent triggers with IRB consultation plan, documented rationale, and proportionate subject communication—not dismissed as minor paperwork.",
          es: "Maneja disparadores ambiguos de re-consentimiento con plan de consulta CEI, justificación documentada y comunicación proporcionada al sujeto—no desestimado como papeleo menor.",
        },
        points: 25,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Treats all re-consent and consent-note gaps as minor without escalation path or treats borderline amendments as obviously non-reportable without IRB input.",
          es: "Trata todas las brechas de re-consentimiento y notas como menores sin vía de escalamiento o enmiendas límite como obviamente no reportables sin aporte del CEI.",
        },
      },
      {
        criterionId: "M6.C4",
        description: {
          en: "Systemic CAPA plus inspection memo: scheduling/time-stamp QA, voluntariness training, eIC teach-back SOP; links cascade to M2/M4/M8 (visit & screening line)/M16.",
          es: "CAPA sistémica más memo inspección: QA agenda/marcas, capacitación voluntariedad, SOP teach-back eIC; vínculo cascada M2/M4/M8 (línea visita y screening)/M16.",
        },
        points: 15,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "CAPA is only ‘retrain CRC’ with no workflow or version-control changes; memo minimizes pre-consent procedure facts.",
          es: "CAPA es solo ‘reentrenar CRC’ sin cambios de flujo o control de versiones; memo minimiza hechos de procedimientos pre-consentimiento.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.32,
      aggregationKey: "cfr50_gcp_icf_version_voluntariness_reconsent",
    },
    {
      dimension: "C",
      weight: 0.28,
      aggregationKey: "comprehension_therapeutic_misconception_coercion_free_discussion",
    },
    {
      dimension: "Q",
      weight: 0.24,
      aggregationKey: "consent_documentation_timestamps_eic_audit_alcoa",
    },
    {
      dimension: "O",
      weight: 0.16,
      aggregationKey: "consent_workflow_interpreter_teachback_scheduling",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S2 centers wrong ICF version and visit started before corrected consent—same timing and documentation moves as this module. OSCE.S5 stresses ALCOA+ repair when consent-related source and audit trails conflict.",
      es: "OSCE.S2 centra versión ICF incorrecta y visita iniciada antes del consentimiento corregido—los mismos movimientos de tiempo y documentación que este módulo. OSCE.S5 ejerce reparación ALCOA+ cuando fuente y audit trails relacionados con consentimiento chocan.",
    },
    stationIds: ["OSCE.S2", "OSCE.S5"],
  },
  tags: ["regulatory", "documentation", "operational", "audit_readiness", "bilingual", "flagship", "clinical_judgment"],
  bilingualNotes: {
    en: "Keep 21 CFR 50, ICF, IRB, eIC, EMR, LAR, SOC, PRO, GCP as EN tokens.",
    es: "Mantener 21 CFR 50, ICF, CEI, eIC, EMR, LAR, SOC, PRO, GCP como tokens EN.",
  },
};
