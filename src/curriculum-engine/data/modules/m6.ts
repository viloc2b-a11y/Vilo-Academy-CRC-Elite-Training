// src/curriculum-engine/data/modules/m6.ts

import type { Module } from "../../types";

/**
 * Module 6 — Informed consent: process, ethics & documentation under pressure.
 *
 * Technical / Regulatory Execution: eight ordered sections; primary US regulatory anchor is
 * 21 CFR Part 50 (informed consent of human subjects) read together with FDA Informed Consent
 * expectations in inspections (adequate information, comprehension, voluntariness, legally effective consent
 * before research procedures, ICF version control, documentation of the consent process).
 * Rubric 100 = sum(criteria.points); passing 94.
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
    en: "Conduct and document informed consent (paper or eIC) consistent with 21 CFR Part 50 and FDA Informed Consent inspection expectations: legally effective consent before research procedures (unless narrow IRB-approved exception), adequate elements and disclosure, comprehension and voluntariness verifiable in source; detect timing inversions, coercion/undue influence, language and eIC UX failures; navigate ambiguous re-consent; produce inspection-defensible CAPA.",
    es: "Realizar y documentar consentimiento informado (papel o eIC) alineado a 21 CFR Part 50 y expectativas de inspección de FDA Informed Consent: consentimiento legalmente efectivo antes de procedimientos de investigación (salvo excepción estrecha aprobada por CEI), elementos y divulgación adecuados, comprensión y voluntariedad verificables en fuente; detectar inversiones temporales, coerción/influencia indebida, fallas de idioma y UX eIC; navegar re-consentimiento ambiguo; producir CAPA defendible en inspección.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States that legally effective informed consent under 21 CFR Part 50 requires information sufficient for a reasonable decision, opportunity to discuss, no exculpatory language, and elements in §50.25 where applicable—and that FDA Informed Consent reviews test whether the process matched those requirements in practice, not only whether a form was signed.",
          es: "Afirma que el consentimiento legalmente efectivo bajo 21 CFR Part 50 exige información suficiente para decisión razonable, oportunidad de discutir, sin lenguaje excluyente de responsabilidad, y elementos en §50.25 cuando aplique—y que revisiones de FDA Informed Consent prueban si el proceso cumplió en la práctica, no solo si se firmó un formulario.",
        },
        {
          en: "Lists 21 CFR Part 50 core elements and documentation expectations; common findings: wrong ICF version, research procedures before consent, missing re-consent, signature/date gaps, absent discussion note, eIC audit trail without comprehension evidence.",
          es: "Lista elementos núcleo y expectativas de documentación de 21 CFR Part 50; hallazgos frecuentes: versión ICF incorrecta, procedimientos investigación antes del consentimiento, falta re-consentimiento, brechas firma/fecha, sin nota de discusión, audit trail eIC sin evidencia de comprensión.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Prepares consent with IRB-approved current ICF versions and translations; uses teach-back; documents source note (date/time, attendees, language, key points, questions, copy provided) with consent before research procedures—consistent with FDA Informed Consent traceability expectations and 21 CFR Part 50 timing rules.",
          es: "Prepara consentimiento con versiones y traducciones ICF aprobadas por CEI; usa teach-back; documenta nota en fuente (fecha/hora, asistentes, idioma, puntos clave, preguntas, copia entregada) con consentimiento antes de procedimientos de investigación—coherente con trazabilidad FDA Informed Consent y reglas de tiempo 21 CFR Part 50.",
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
          en: "Classifies same-day labs-before-ICF patterns, coercive PI language, and ‘complete’ eIC with clear subject misunderstanding as major/critical consent integrity risks under FDA Informed Consent scrutiny—not administrative quirks.",
          es: "Clasifica patrones mismo día labs-antes-ICF, lenguaje coercitivo del PI y eIC ‘completo’ con claro malentendido del sujeto como riesgos mayor/críticos bajo escrutinio FDA Informed Consent—no rarezas administrativas.",
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
      lessonId: "M6.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the regulatory bar: 21 CFR Part 50 + FDA Informed Consent require a documented, ethically valid process—not only a signature.",
        es: "Establecer la barra regulatoria: 21 CFR Part 50 + FDA Informed Consent exigen un proceso documentado y éticamente válido—no solo una firma.",
      },
      keyPoints: [
        {
          en: "Graded on whether you can defend consent timing, voluntariness, comprehension, and version control against FDA-style evidence review.",
          es: "Se te califica si puedes defender tiempo de consentimiento, voluntariedad, comprensión y control de versión ante revisión de evidencia estilo FDA.",
        },
        {
          en: "Outputs: per-subject consent integrity matrix; issue register + CAPA; inspection explanation memo citing 21 CFR Part 50 and FDA Informed Consent where relevant.",
          es: "Salidas: matriz integridad consentimiento por sujeto; registro + CAPA; memo explicación inspección citando 21 CFR Part 50 y FDA Informed Consent cuando aplique.",
        },
        {
          en: "Technical tokens remain EN (21 CFR Part 50, FDA, ICF, IRB, eIC, EMR, LAR, GCP, ALCOA+).",
          es: "Tokens técnicos permanecen en inglés (21 CFR Part 50, FDA, ICF, IRB/CEI, eIC, EMR, LAR, GCP, ALCOA+).",
        },
      ],
    },
    {
      lessonId: "M6.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 30,
      objective: {
        en: "Anchor 21 CFR Part 50, FDA Informed Consent, voluntariness, eIC, therapeutic misconception, language barriers, re-consent triggers.",
        es: "Anclar 21 CFR Part 50, FDA Informed Consent, voluntariedad, eIC, misconception terapéutica, barreras de idioma, disparadores re-consentimiento.",
      },
      keyPoints: [
        {
          en: "21 CFR Part 50 (Subpart B): informed consent elements, general requirements for documentation, and prohibitions (e.g., exculpatory language)—the regulatory text CRCs must operationalize in visit workflow.",
          es: "21 CFR Part 50 (Subpart B): elementos de consentimiento informado, requisitos generales de documentación y prohibiciones (p. ej., lenguaje excluyente de responsabilidad)—texto regulatorio que el CRC debe operativizar en flujo de visita.",
        },
        {
          en: "FDA Informed Consent (inspection/oversight lens): FDA assesses whether subjects were given adequate opportunity to understand and voluntarily agree before participating; reviewers correlate ICF versions, IRB approval dates, EMR timestamps, and staff notes.",
          es: "FDA Informed Consent (lente inspección/supervisión): FDA evalúa si los sujetos tuvieron oportunidad adecuada de comprender y acordar voluntariamente antes de participar; revisores correlacionan versiones ICF, fechas aprobación CEI, marcas EMR y notas del personal.",
        },
        {
          en: "Legally effective consent = information + comprehension + voluntariness per 21 CFR Part 50; signature alone is insufficient for FDA Informed Consent defense.",
          es: "Consentimiento legalmente efectivo = información + comprensión + voluntariedad según 21 CFR Part 50; la firma sola es insuficiente para defensa FDA Informed Consent.",
        },
        {
          en: "Coercion/undue influence: care withheld if refuse, exaggerated benefit, implied obligation—invalidates consent and is a primary FDA Informed Consent interview theme.",
          es: "Coerción/influencia indebida: retención de atención si rechaza, beneficio exagerado, obligación implícita—invalida consentimiento y es tema principal en entrevistas FDA Informed Consent.",
        },
        {
          en: "eIC must meet the same substantive standards; audit trail ≠ comprehension—CRC still explains and verifies understanding (FDA Informed Consent ‘process’ expectation).",
          es: "eIC debe cumplir los mismos estándares sustantivos; audit trail ≠ comprensión—el CRC aún explica y verifica comprensión (expectativa de ‘proceso’ FDA Informed Consent).",
        },
        {
          en: "Re-consent: new significant risk or substantive procedure/burden changes—usually require IRB-determined path; document consultation when ambiguous.",
          es: "Re-consentimiento: nuevo riesgo significativo o cambios sustantivos en procedimiento/carga—usualmente requieren vía determinada por CEI; documentar consulta cuando sea ambiguo.",
        },
        {
          en: "Real-world workflow — Prep: IRB-approved ICF version and translations; retire obsolete forms.",
          es: "Flujo real — Prep: versión ICF y traducciones aprobadas por CEI; retirar formularios obsoletos.",
        },
        {
          en: "Real-world workflow — Discussion: understandable language; qualified interpreters; teach-back; research vs SOC.",
          es: "Flujo real — Discusión: lenguaje comprensible; intérpretes calificados; teach-back; investigación vs SOC.",
        },
        {
          en: "Real-world workflow — Timing: consent before any research procedure unless narrow IRB-approved exception documented (21 CFR Part 50 alignment).",
          es: "Flujo real — Tiempo: consentimiento antes de procedimiento investigación salvo excepción estrecha CEI documentada (alineación 21 CFR Part 50).",
        },
        {
          en: "Real-world workflow — Source note: who, when, language, questions, copy—especially same-day sequencing vs procedure timestamps for FDA Informed Consent drills.",
          es: "Flujo real — Nota fuente: quién, cuándo, idioma, preguntas, copia—especialmente secuencia vs marcas procedimiento el mismo día para ejercicios FDA Informed Consent.",
        },
        {
          en: "Error-prone 1 — Wrong or outdated ICF vs IRB approval dates.",
          es: "Propensa 1 — ICF incorrecto u obsoleto vs fechas aprobación CEI.",
        },
        {
          en: "Error-prone 2 — Research procedures before consent; same-day traps visible only via EMR.",
          es: "Propensa 2 — Procedimientos investigación antes del consentimiento; trampas mismo día visibles solo vía EMR.",
        },
        {
          en: "Error-prone 3 — Missing re-consent after material risk/benefit change.",
          es: "Propensa 3 — Falta re-consentimiento tras cambio material riesgo/beneficio.",
        },
        {
          en: "Error-prone 4 — eIC ‘complete’ but subject cannot restate purpose, risks, or duration.",
          es: "Propensa 4 — eIC ‘completo’ pero sujeto no puede reexpresar propósito, riesgos o duración.",
        },
        {
          en: "Error-prone 5 — Coercive framing in notes; refusal portrayed as forfeiting clinical care.",
          es: "Propensa 5 — Encuadre coercitivo en notas; rechazo presentado como perder atención clínica.",
        },
        {
          en: "Cross-links: M1 ethics/HIPAA; M3 delegation for who may obtain consent; M4 logs; M8 screening timing; M16 certification context.",
          es: "Vínculos: M1 ética/HIPAA; M3 delegación de quién obtiene consentimiento; M4 logs; M8 tiempo screening; M16 contexto certificación.",
        },
      ],
    },
    {
      lessonId: "M6.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Amendment 2 adds significant cardiac risk + extra ECG. IRB approves v3.0 1 June. Subject 010 screened 10 June; subject 004 enrolled on treatment.",
        es: "Enmienda 2 añade riesgo cardíaco significativo + ECG extra. CEI aprueba v3.0 1 jun. Sujeto 010 screening 10 jun; sujeto 004 incluido en tratamiento.",
      },
      keyPoints: [
        {
          en: "What CRC sees: new approved version; mixed cohort (screening vs on-treatment).",
          es: "Qué ve el CRC: nueva versión aprobada; cohorte mixta (screening vs en tratamiento).",
        },
        {
          en: "How to think: 21 CFR Part 50 requires current disclosures; FDA Informed Consent audits version-to-subject matching.",
          es: "Cómo pensar: 21 CFR Part 50 exige divulgaciones vigentes; FDA Informed Consent audita coincidencia versión-sujeto.",
        },
        {
          en: "Decision: new subjects—v3.0 only from IRB effective date; ongoing—re-consent before next visit where new risk/procedures apply; document discussion and copy.",
          es: "Decisión: sujetos nuevos—solo v3.0 desde fecha efectiva CEI; en curso—re-consentimiento antes de próxima visita donde apliquen nuevos riesgos/procedimientos; documentar discusión y copia.",
        },
        {
          en: "Why it matters: outdated ICF is a recurrent FDA inspection finding.",
          es: "Por qué importa: ICF desactualizado es hallazgo frecuente en inspección FDA.",
        },
      ],
    },
    {
      lessonId: "M6.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Subject 022: research screening labs 09:45; ICF signed 10:30 same day. Labs not SOC.",
        es: "Sujeto 022: labs screening investigación 09:45; ICF firmado 10:30 mismo día. Labs no son SOC.",
      },
      keyPoints: [
        {
          en: "Incorrect move: file as ‘same-day consent OK’ without IRB-approved narrow exception and documented sequence.",
          es: "Movimiento incorrecto: archivar como ‘consentimiento mismo día OK’ sin excepción estrecha aprobada por CEI y secuencia documentada.",
        },
        {
          en: "Correct move: treat timestamp inversion as research procedures before legally effective consent under 21 CFR Part 50; stop-line, deviation, IRB/sponsor, CAPA on scheduling/timestamp QA.",
          es: "Movimiento correcto: tratar inversión como procedimientos investigación antes de consentimiento legalmente efectivo bajo 21 CFR Part 50; línea de paro, desviación, CEI/patrocinador, CAPA en agenda/QA marcas.",
        },
        {
          en: "Why it matters: FDA Informed Consent reviews routinely drill EMR vs ICF time order.",
          es: "Por qué importa: revisiones FDA Informed Consent rutinariamente cavan orden EMR vs ICF.",
        },
      ],
    },
    {
      lessonId: "M6.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Older subject rapid-taps eIC; audit trail complete; later says thought study was one-time test, not long study.",
        es: "Sujeto mayor avanza rápido eIC; audit trail completo; luego dice que pensó que era prueba única, no estudio largo.",
      },
      keyPoints: [
        {
          en: "What CRC sees: technical eIC completeness vs demonstrated misunderstanding of duration and visit burden.",
          es: "Qué ve el CRC: completitud técnica eIC vs malentendido demostrado de duración y carga de visitas.",
        },
        {
          en: "How to think: FDA Informed Consent focuses on whether consent was truly informed and voluntary—not only checkbox compliance.",
          es: "Cómo pensar: FDA Informed Consent enfoca si el consentimiento fue realmente informado y voluntario—no solo cumplimiento de casillas.",
        },
        {
          en: "Decision: re-explain purpose, duration, schedule; teach-back; document; continue vs withdraw only with verified understanding; CAPA: mandatory CRC review sections, UX pacing if configurable.",
          es: "Decisión: re-explicar propósito, duración, calendario; teach-back; documentar; continuar vs retirar solo con comprensión verificada; CAPA: revisión CRC obligatoria de secciones, ritmo UX si configurable.",
        },
        {
          en: "Why it matters: 21 CFR Part 50 requires adequate understanding; eIC logs alone may not prove it.",
          es: "Por qué importa: 21 CFR Part 50 exige comprensión adecuada; logs eIC solos pueden no probarla.",
        },
      ],
    },
    {
      lessonId: "M6.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 35,
      objective: {
        en: "Run the Informed Consent Lab once under the 35-minute time box; cite 21 CFR Part 50 and FDA Informed Consent in the inspection memo where substantive.",
        es: "Ejecutar el Laboratorio una vez bajo 35 minutos; citar 21 CFR Part 50 y FDA Informed Consent en memo de inspección donde sea sustantivo.",
      },
      keyPoints: [
        {
          en: "Time box: 35 minutes. Omission of coercion or timing issues when present = incomplete.",
          es: "Límite: 35 minutos. Omitir coerción o temas de tiempo cuando están presentes = incompleto.",
        },
        {
          en: "Deliverables: matrix (D1), register + CAPA (D2), inspection explanation (D3).",
          es: "Entregables: matriz (D1), registro + CAPA (D2), explicación inspección (D3).",
        },
      ],
    },
    {
      lessonId: "M6.S5",
      title: { en: "5) Scoring matrix & inspection perspective", es: "5) Matriz de puntuación y perspectiva inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M6.RUB1 and FDA Informed Consent review tactics.",
        es: "Alinear calificación con M6.RUB1 y tácticas de revisión FDA Informed Consent.",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; binary criteria; critical pathway on pre-consent procedures and overlooked coercion.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; criterios binarios; vía crítica en procedimientos pre-consentimiento y coerción pasada por alto.",
        },
        {
          en: "FDA correlates EMR procedure times, ICF versions vs IRB approval dates, and consent discussion notes.",
          es: "FDA correlaciona tiempos procedimiento EMR, versiones ICF vs fechas aprobación CEI y notas de discusión del consentimiento.",
        },
        {
          en: "Subject interviews may probe voluntariness and comprehension directly—consistent with 21 CFR Part 50 principles.",
          es: "Entrevistas a sujetos pueden explorar voluntariedad y comprensión directamente—coherente con principios 21 CFR Part 50.",
        },
      ],
    },
    {
      lessonId: "M6.S6",
      title: { en: "6) Answer framework & fail conditions", es: "6) Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Consolidate timing traps, eIC comprehension, re-consent ambiguity, and systemic CAPA under 21 CFR Part 50 / FDA Informed Consent.",
        es: "Consolidar trampas temporales, comprensión eIC, ambigüedad re-consentimiento y CAPA bajo 21 CFR Part 50 / FDA Informed Consent.",
      },
      keyPoints: [
        {
          en: "Elite format: (1) 21 CFR Part 50 element/timing issue named, (2) FDA Informed Consent inspection narrative you would defend, (3) CAPA + M2/M4/M8 links.",
          es: "Formato élite: (1) tema elemento/tiempo 21 CFR Part 50 nombrado, (2) narrativa inspección FDA Informed Consent que defenderías, (3) CAPA + vínculos M2/M4/M8.",
        },
        {
          en: "Strong work: severity on pre-consent research procedures; never dismiss eIC misunderstanding as ‘user error’ only.",
          es: "Trabajo sólido: severidad en procedimientos investigación pre-consentimiento; no despachar malentendido eIC como solo ‘error de usuario’.",
        },
        {
          en: "Fail if: miss clear timing inversion; ignore coercion or eIC non-comprehension; memo omits 21 CFR Part 50 / FDA Informed Consent basis when required.",
          es: "Fallo si: no detecta inversión clara de tiempo; ignora coerción o no-comprensión eIC; memo omite base 21 CFR Part 50 / FDA Informed Consent cuando se exige.",
        },
      ],
    },
    {
      lessonId: "M6.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Tie consent execution to protocol, logs, visits, and capstone.",
        es: "Vincular ejecución del consentimiento a protocolo, logs, visitas y capstone.",
      },
      keyPoints: [
        {
          en: "M1/M2: consent timing and ICF version must match protocol amendments and eligibility narrative.",
          es: "M1/M2: tiempo de consentimiento y versión ICF deben coincidir con enmiendas de protocolo y narrativa de elegibilidad.",
        },
        {
          en: "M3: only delegated, qualified staff obtain consent per DOA—FDA Informed Consent accountability.",
          es: "M3: solo personal delegado y calificado obtiene consentimiento según DOA—rendición de cuentas FDA Informed Consent.",
        },
        {
          en: "M4: consent-related logs and corrections must be ALCOA+.",
          es: "M4: logs y correcciones relacionados con consentimiento deben ser ALCOA+.",
        },
        {
          en: "M8: screening and first-procedure sequencing is where 21 CFR Part 50 timing traps appear.",
          es: "M8: secuencia screening y primer procedimiento es donde aparecen trampas de tiempo 21 CFR Part 50.",
        },
        {
          en: "Capstone: OSCE.S2 (ICF version + visit before corrected consent); OSCE.S5 (ALCOA+ repair when consent records conflict).",
          es: "Capstone: OSCE.S2 (versión ICF + visita antes de consentimiento corregido); OSCE.S5 (reparación ALCOA+ cuando registros de consentimiento chocan).",
        },
      ],
    },
    {
      lessonId: "M6.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit: subjects, data, regulatory findings, site reputation.",
        es: "Hacer explícitas consecuencias: sujetos, datos, hallazgos regulatorios, reputación del sitio.",
      },
      keyPoints: [
        {
          en: "Subject harm: uninformed risk acceptance; autonomy violated by coercion or misunderstanding.",
          es: "Daño al sujeto: aceptación de riesgo no informada; autonomía violada por coerción o malentendido.",
        },
        {
          en: "Data/regulatory: protocol deviations, possible exclusion from analysis, Form 483 observations on FDA Informed Consent / 21 CFR Part 50.",
          es: "Datos/regulatorio: desviaciones de protocolo, posible exclusión del análisis, observaciones Form 483 sobre FDA Informed Consent / 21 CFR Part 50.",
        },
        {
          en: "Operational: enrollment holds, re-consent campaigns, sponsor loss of confidence.",
          es: "Operacional: holds de inclusión, campañas de re-consentimiento, pérdida de confianza del patrocinador.",
        },
        {
          en: "Reputation: site labeled high-risk for consent process integrity.",
          es: "Reputación: sitio etiquetado alto riesgo por integridad del proceso de consentimiento.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M6.E1",
      description: {
        en: "EMR shows research-only imaging and labs two days before any ICF signature; protocol does not allow pre-consent research procedures—breach of 21 CFR Part 50 legally effective consent timing and FDA Informed Consent expectations.",
        es: "EMR muestra imagen y labs solo investigación dos días antes de firma ICF; protocolo no permite procedimientos pre-consentimiento—incumplimiento de tiempo de consentimiento legalmente efectivo 21 CFR Part 50 y expectativas FDA Informed Consent.",
      },
      risk: {
        en: "Serious consent violation; possible exclusion from analysis and regulatory reporting.",
        es: "Violación grave de consentimiento; posible exclusión del análisis y reporte regulatorio.",
      },
      expectedLearnerResponse: {
        en: "Halt research steps; deviation package; IRB/sponsor; assess subject options; CAPA on screening workflow with 21 CFR Part 50 controls.",
        es: "Detener pasos investigación; paquete desviación; CEI/patrocinador; evaluar opciones del sujeto; CAPA en flujo screening con controles 21 CFR Part 50.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M6.E2",
      description: {
        en: "Amendment 3 changes visit q8w→q12w and simplifies questionnaires; no new risks. PI assumes no re-consent; IRB position not documented—ambiguous under FDA Informed Consent proportionate disclosure.",
        es: "Enmienda 3 cambia visita q8w→q12w y simplifica cuestionarios; sin riesgos nuevos. PI asume sin re-consentimiento; posición CEI no documentada—ambiguo bajo divulgación proporcionada FDA Informed Consent.",
      },
      risk: {
        en: "Inconsistent site practice; subjects may lack material information; inspection variability.",
        es: "Práctica inconsistente del sitio; sujetos pueden carecer de información material; variabilidad en inspección.",
      },
      expectedLearnerResponse: {
        en: "Query IRB; document rationale; policy for similar amendments; informational update or re-consent per determination.",
        es: "Consultar CEI; documentar justificación; política para enmiendas similares; actualización informativa o re-consentimiento según determinación.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M6.E3",
      description: {
        en: "Binder holds v1.0–v3.0; subject enrolled months after v3.0 IRB approval using v1.0—FDA Informed Consent version audit failure.",
        es: "Carpeta tiene v1.0–v3.0; sujeto incluido meses tras aprobación CEI v3.0 usando v1.0—falla de auditoría de versión FDA Informed Consent.",
      },
      risk: {
        en: "Subject lacked current 21 CFR Part 50 disclosures; corrective re-consent; deviation.",
        es: "Sujeto sin divulgaciones vigentes 21 CFR Part 50; re-consentimiento correctivo; desviación.",
      },
      expectedLearnerResponse: {
        en: "Immediate re-consent on approved version; root cause on distribution; version gate before enrollment.",
        es: "Re-consentimiento inmediato en versión aprobada; causa raíz en distribución; control de versión antes de inclusión.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M6.E4",
      description: {
        en: "Minor ICF lacks parent/LAR signature; staff adds LAR later same date without late-entry explanation or initials—documentation integrity under FDA Informed Consent review.",
        es: "ICF menor falta firma padre/LAR; personal añade LAR después misma fecha sin explicación de entrada tardía ni iniciales—integridad documental bajo revisión FDA Informed Consent.",
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
        en: "eIC logs show ‘study staff’ assisted subject but no named individual; DOA does not delegate consent to generic ‘all staff’—breaks attributable consent process expected under 21 CFR Part 50 / GCP delegation.",
        es: "Logs eIC muestran ‘personal del estudio’ asistió sin individuo nombrado; DOA no delega consentimiento a ‘todo el personal’ genérico—rompe proceso de consentimiento atribuible esperado bajo 21 CFR Part 50 / delegación GCP.",
      },
      risk: {
        en: "Accountability gap; FDA may challenge who obtained consent and whether qualifications were met.",
        es: "Brecha de rendición de cuentas; FDA puede cuestionar quién obtuvo el consentimiento y si se cumplieron calificaciones.",
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
        en: "35 minutes before inspection-readiness review on consent for subjects A, B, C. FDA Informed Consent scrutiny; subject interviews possible. Packet: signed ICFs (mixed versions), IRB letters, source/EMR with timestamps, eIC logs for one subject, short-form/interpreter packet for one non-English subject, one ambiguous amendment. Include at least one note with coercive-adjacent language for triage. Frame findings using 21 CFR Part 50 (elements, legally effective consent, documentation) and FDA Informed Consent (process quality, voluntariness, comprehension evidence).",
        es: "35 minutos antes de revisión preparación inspección sobre consentimiento para sujetos A, B, C. Escrutinio FDA Informed Consent; posibles entrevistas. Paquete: ICF firmados (versiones mixtas), cartas CEI, fuente/EMR con marcas, logs eIC, paquete formulario corto/intérprete, una enmienda ambigua. Incluir al menos una nota con lenguaje adyacente a coerción para triage. Enmarcar hallazgos con 21 CFR Part 50 (elementos, consentimiento legalmente efectivo, documentación) y FDA Informed Consent (calidad del proceso, voluntariedad, evidencia de comprensión).",
      },
      inputs: [
        { inputId: "M6.IN1", label: { en: "ICF copies + IRB approval timeline", es: "Copias ICF + línea temporal aprobación CEI" }, inputKind: "pdf" },
        { inputId: "M6.IN2", label: { en: "Source/EMR + procedure timestamps", es: "Fuente/EMR + marcas de procedimiento" }, inputKind: "mock_ehr" },
        { inputId: "M6.IN3", label: { en: "eIC audit export", es: "Export audit eIC" }, inputKind: "export" },
        { inputId: "M6.IN4", label: { en: "Interpreter / short-form documentation", es: "Documentación intérprete / formulario corto" }, inputKind: "pdf" },
        { inputId: "M6.IN5", label: { en: "Ambiguous amendment + consent template note", es: "Enmienda ambigua + nota plantilla consentimiento" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "Per A/B/C: correct ICF version at consent? Consent before all research procedures including same-day traps? Signatures/dates complete? Process documentation adequate for 21 CFR Part 50? eIC: logs vs demonstrated understanding per FDA Informed Consent? List: wrong versions, timing, coercion/undue influence language in notes, re-consent gaps, language/eIC UX. Top 3–4: severity + patient/data/compliance; corrective + system CAPA. Draft inspection-ready explanation (D3) for one severe issue—explicitly cite 21 CFR Part 50 and FDA Informed Consent (by name) in at least two substantive sentences each.",
        es: "Por A/B/C: ¿versión ICF correcta al consentir? ¿Consentimiento antes de procedimientos incluidas trampas mismo día? ¿Firmas/fechas completas? ¿Documentación adecuada del proceso para 21 CFR Part 50? eIC: ¿logs vs comprensión demostrada según FDA Informed Consent? Listar: versiones incorrectas, tiempo, lenguaje coerción/influencia indebida en notas, brechas re-consentimiento, idioma/UX eIC. Top 3–4: severidad + paciente/datos/cumplimiento; correctiva + CAPA sistema. Redactar explicación lista para inspección (D3) para un tema grave—citar explícitamente 21 CFR Part 50 y FDA Informed Consent (por nombre) en al menos dos oraciones sustantivas cada uno.",
      },
      deliverables: [
        { deliverableId: "M6.D1", label: { en: "Per-subject consent integrity matrix", es: "Matriz integridad consentimiento por sujeto" }, formatHint: "table" },
        { deliverableId: "M6.D2", label: { en: "Issue register + CAPA", es: "Registro hallazgos + CAPA" }, formatHint: "pdf" },
        {
          deliverableId: "M6.D3",
          label: {
            en: "Inspection explanation — 21 CFR Part 50 & FDA Informed Consent (one severe issue)",
            es: "Explicación inspección — 21 CFR Part 50 y FDA Informed Consent (un tema grave)",
          },
          formatHint: "short_memo",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M6.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M6.C1",
        description: {
          en: "Flags wrong ICF versions vs IRB dates; detects research procedures before consent including same-day timestamp inversions; classifies severity using 21 CFR Part 50 / FDA Informed Consent framing.",
          es: "Señala versiones ICF incorrectas vs fechas CEI; detecta procedimientos investigación antes del consentimiento incluidas inversiones mismo día; clasifica severidad con marco 21 CFR Part 50 / FDA Informed Consent.",
        },
        points: 35,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Critical fail if misses a clear timing trap where research procedures precede consent when timestamps are in the packet.",
          es: "Falla crítica si no detecta trampa clara de tiempo donde procedimientos investigación preceden al consentimiento cuando las marcas están en el paquete.",
        },
      },
      {
        criterionId: "M6.C2",
        description: {
          en: "Identifies coercion/undue influence in source notes; distinguishes clean eIC logs from demonstrated non-comprehension; proposes language and process fixes aligned with FDA Informed Consent.",
          es: "Identifica coerción/influencia indebida en notas fuente; distingue logs eIC limpios de no-comprensión demostrada; propone arreglos alineados a FDA Informed Consent.",
        },
        points: 25,
        mapsToDimensions: ["C", "R"],
        failCondition: {
          en: "Critical fail if ignores explicit coercive framing or obvious subject misunderstanding despite eIC completeness.",
          es: "Falla crítica si ignora encuadre coercitivo explícito u obvio malentendido del sujeto pese a completitud del eIC.",
        },
      },
      {
        criterionId: "M6.C3",
        description: {
          en: "Handles ambiguous re-consent triggers with IRB consultation plan, documented rationale, and proportionate subject communication per 21 CFR Part 50 disclosure expectations.",
          es: "Maneja disparadores ambiguos de re-consentimiento con plan de consulta CEI, justificación documentada y comunicación proporcionada al sujeto según expectativas de divulgación 21 CFR Part 50.",
        },
        points: 25,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Fail if treats all re-consent and consent-note gaps as minor without escalation path or treats borderline amendments as obviously non-reportable without IRB input.",
          es: "Falla si trata todas las brechas de re-consentimiento y notas como menores sin vía de escalamiento o enmiendas límite como obviamente no reportables sin aporte del CEI.",
        },
      },
      {
        criterionId: "M6.C4",
        description: {
          en: "Systemic CAPA plus inspection memo: scheduling/time-stamp QA, voluntariness training, eIC teach-back SOP; links cascade to M2/M4/M8/M16; memo explicitly cites 21 CFR Part 50 and FDA Informed Consent as required in the exercise.",
          es: "CAPA sistémica más memo inspección: QA agenda/marcas, capacitación voluntariedad, SOP teach-back eIC; vínculo cascada M2/M4/M8/M16; memo cita explícitamente 21 CFR Part 50 y FDA Informed Consent como exige el ejercicio.",
        },
        points: 15,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Critical fail if CAPA is only ‘retrain CRC’ with no workflow or version-control changes; memo minimizes pre-consent procedure facts; or omits required 21 CFR Part 50 / FDA Informed Consent citations.",
          es: "Falla crítica si CAPA es solo ‘reentrenar CRC’ sin cambios de flujo o control de versiones; memo minimiza hechos pre-consentimiento; u omite citas requeridas a 21 CFR Part 50 / FDA Informed Consent.",
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
      en: "OSCE.S2 centers wrong ICF version and visit started before corrected consent—same 21 CFR Part 50 / FDA Informed Consent timing and documentation moves as this module. OSCE.S5 stresses ALCOA+ repair when consent-related source and audit trails conflict.",
      es: "OSCE.S2 centra versión ICF incorrecta y visita iniciada antes del consentimiento corregido—los mismos movimientos de tiempo y documentación 21 CFR Part 50 / FDA Informed Consent que este módulo. OSCE.S5 ejerce reparación ALCOA+ cuando fuente y audit trails de consentimiento chocan.",
    },
    stationIds: ["OSCE.S2", "OSCE.S5"],
  },
  tags: ["regulatory", "documentation", "operational", "audit_readiness", "bilingual", "flagship", "clinical_judgment"],
  bilingualNotes: {
    en: "Keep 21 CFR Part 50, FDA Informed Consent, ICF, IRB, eIC, EMR, LAR, SOC, PRO, GCP as EN tokens. Module anchors: 21 CFR Part 50 (regulatory text) and FDA Informed Consent (FDA inspection/oversight of the consent process).",
    es: "Mantener 21 CFR Part 50, FDA Informed Consent, ICF, IRB/CEI, eIC, EMR, LAR, SOC, PRO, GCP como tokens EN. Anclas: 21 CFR Part 50 (texto regulatorio) y FDA Informed Consent (inspección/supervisión FDA del proceso de consentimiento).",
  },
};
