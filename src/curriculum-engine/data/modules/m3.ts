// src/curriculum-engine/data/modules/m3.ts

import type { Module } from "../../types";

/**
 * Module 3 — ICH-GCP E6(R3): roles, oversight & quality system for CRCs.
 *
 * PROMPT 1 — BASE OPERATIVO (Modules 1–10): eight ordered lesson sections (overview → core →
 * three guided cases → practical exercise → scoring → answer framework → cross-links → failure impact).
 *
 * CRC Elite audit-grade: system vs individual failure, false compliance, inspector lens, structural CAPA
 * with M4/M8/M9 linkage; rubric 100 = sum(criteria.points); passing 94; errorLibrary 3–5 entries.
 */
export const MODULE_M3: Module = {
  id: "M3",
  slug: "ich-gcp-e6r3-roles-oversight-quality",
  internalName: "mod_03_ich_gcp_e6r3_crc",
  category: "foundations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "C", "Q"],
  title: {
    en: "Module 3 — ICH-GCP E6(R3): Roles, Oversight & Quality System for CRCs",
    es: "Módulo 3 — ICH-GCP E6(R3): roles, supervisión y sistema de calidad para CRC",
  },
  objective: {
    en: "Distinguish individual vs system-level GCP failures; spot weak or paper-only oversight; anticipate FDA/authority inspector concerns; propose structural CAPA linking delegation, safety oversight (sponsor/OSCE.S3), visit and screening execution (M8), logs & ALCOA+ (M4), and IP accountability (M9).",
    es: "Distinguir fallas GCP individuales vs a nivel de sistema; detectar supervisión débil o solo ‘en papel’; anticipar preocupaciones de inspectores FDA/autoridad; proponer CAPA estructural que vincule delegación, supervisión de seguridad (patrocinador/OSCE.S3), ejecución visitas y screening (M8), logs y ALCOA+ (M4) y contabilidad IP (M9).",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States investigator vs CRC vs sponsor/monitor roles under GCP and why delegation documents tasks but not ultimate investigator responsibility.",
          es: "Enuncia roles investigador vs CRC vs patrocinador/monitor bajo GCP y por qué la delegación documenta tareas pero no la responsabilidad última del investigador.",
        },
        {
          en: "Defines E6(R3) quality-system additions: QbD mindset, RBQM loop (identify CtQ, assess/control, monitor/adapt), and CtQ examples for sites (eligibility, consent, primary endpoints, AE/SAE, ALCOA+).",
          es: "Define adiciones del sistema de calidad E6(R3): mentalidad QbD, ciclo RBQM (identificar CtQ, evaluar/controlar, monitorizar/adaptar) y ejemplos CtQ en sitio (elegibilidad, consentimiento, endpoints primarios, AE/SAE, ALCOA+).",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Operates site quality alignment: SOPs, DOA, training records, logs, and E6(R3) expectations—not binders alone; runs PI–CRC cadence on CtQ topics with outputs to logs and source.",
          es: "Opera alineación de calidad del sitio: SOPs, DOA, registros de capacitación, logs y expectativas E6(R3)—no solo carpetas; ejecuta cadencia PI–CRC sobre temas CtQ con salidas a logs y fuente.",
        },
        {
          en: "Uses monitoring letters and repeat findings as signals of system weakness; documents oversight decisions so monitors/inspectors can reconstruct the quality system.",
          es: "Usa cartas de monitoría y hallazgos repetidos como señales de debilidad sistémica; documenta decisiones de supervisión para que monitores/inspectores reconstruyan el sistema de calidad.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects false compliance (perfect DOA/training but staff cannot explain CtQ or AE flow); differentiates ‘PI doesn’t supervise’ from ‘site never designed supervision’.",
          es: "Detecta cumplimiento ficticio (DOA/capacitación perfectos pero personal no explica CtQ o flujo EA); diferencia ‘PI no supervisa’ de ‘sitio nunca diseñó la supervisión’.",
        },
        {
          en: "Proposes structural CAPA: written oversight plan, triggers, meeting templates, mandatory linkage from decisions to M4 logs, M8 visit-window and randomization discipline, sponsor AE timelines (OSCE.S3), M4 ALCOA+ documentation trail, and M9 IP custody—defensible in inspection interviews.",
          es: "Propone CAPA estructural: plan escrito de supervisión, disparadores, plantillas de reunión, vínculo obligatorio desde decisiones a logs M4, disciplina M8 ventanas/randomización, plazos EA patrocinador (OSCE.S3), rastro documental ALCOA+ M4 y custodia IP M9—defendible en entrevistas de inspección.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M3.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the operational bar: GCP is lived through oversight systems, not binders; CRC is operator + sensor.",
        es: "Establecer la barra operativa: GCP se vive con sistemas de supervisión, no carpetas; CRC es operador + sensor.",
      },
      keyPoints: [
        {
          en: "Graded on whether you can reconstruct oversight (who decided what, when, with what evidence) and propose fixes that change workflows and logs—not slogans.",
          es: "Se te califica si puedes reconstruir la supervisión (quién decidió qué, cuándo, con qué evidencia) y proponer arreglos que cambien flujos y logs—no eslóganes.",
        },
        {
          en: "Outputs: issue register + top-3 inspector priorities; system CAPA mapped to M4/M8/M9 (+ sponsor AE lane); one honest FDA-style defense for a major gap.",
          es: "Salidas: registro de hallazgos + prioridades top-3 para inspector; CAPA sistémica mapeada a M4/M8/M9 (+ carril EA patrocinador); una defensa estilo FDA honesta para brecha mayor.",
        },
        {
          en: "Technical tokens remain EN in both locales (ICH E6(R3), GCP, RBQM, CtQ, QbD, DOA, FDA, CRA, ALCOA+).",
          es: "Tokens técnicos permanecen en inglés en ambos idiomas (ICH E6(R3), GCP, RBQM, CtQ, QbD, DOA, FDA, CRA, ALCOA+).",
        },
      ],
    },
    {
      lessonId: "M3.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 28,
      objective: {
        en: "Anchor E6(R3) quality system, real site workflow, and recurring inspection themes in one layer.",
        es: "Anclar sistema de calidad E6(R3), flujo real del sitio y temas recurrentes de inspección en una capa.",
      },
      keyPoints: [
        {
          en: "E6(R3) adds QbD, RBQM, and fit-for-purpose systems—not checklist-only compliance; proportionate oversight must be demonstrable.",
          es: "E6(R3) añade QbD, RBQM y sistemas adecuados al propósito—no solo cumplimiento por lista; supervisión proporcional debe ser demostrable.",
        },
        {
          en: "Investigator: qualified, resourced; may delegate tasks not responsibility; must supervise GCP. CRC: delegated execution—protocol, consent, AE, documentation, sponsor comms—with boundaries.",
          es: "Investigador: calificado, con recursos; puede delegar tareas no responsabilidad; debe supervisar GCP. CRC: ejecución delegada—protocolo, consentimiento, EA, documentación, comunicación patrocinador—con límites.",
        },
        {
          en: "RBQM for sites: CtQ = eligibility, IC, primary endpoints, AE/SAE handling, ALCOA+ documentation; triggers and trend review beat vague ‘we supervise’ statements.",
          es: "RBQM en sitio: CtQ = elegibilidad, CI, endpoints primarios, AE/SAE, ALCOA+; disparadores y revisión de tendencias vencen frases vagas de ‘supervisamos’.",
        },
        {
          en: "Individual error: one person skips a step. System failure: no SOP cadence, no triggers, DOA ≠ reality—inspectors concentrate here.",
          es: "Error individual: alguien omite un paso. Falla de sistema: sin cadencia SOP, sin disparadores, DOA ≠ realidad—inspectores se concentran aquí.",
        },
        {
          en: "False compliance: perfect files but interviews fail; bulk signatures substitute for ongoing review; CRA expected to be the quality system.",
          es: "Cumplimiento ficticio: archivos perfectos pero entrevistas fallan; firmas masivas sustituyen revisión continua; se espera que el CRA sea el sistema de calidad.",
        },
        {
          en: "Real-world workflow — PI + institution: SOPs for delegation, AE management, monitoring follow-up; CRC aligns DOA, logs, training with SOPs and E6(R3).",
          es: "Flujo real — PI + institución: SOPs para delegación, gestión EA, seguimiento monitoría; CRC alinea DOA, logs, capacitación con SOPs y E6(R3).",
        },
        {
          en: "Real-world workflow — Cadence: PI–CRC meetings on enrollments/eligibility, key AEs/SAEs, primary endpoints, major deviations—outputs to DOA updates, logs, PI notes in source.",
          es: "Flujo real — Cadencia: reuniones PI–CRC sobre inclusiones/elegibilidad, EA/SAE clave, endpoints primarios, desviaciones mayores—salidas a actualizaciones DOA, logs, notas PI en fuente.",
        },
        {
          en: "Real-world workflow — Sponsor/monitor: tests staff and system; repeat findings signal design gaps, not ‘bad luck’.",
          es: "Flujo real — Patrocinador/monitor: prueba personal y sistema; hallazgos repetidos señalan brechas de diseño, no ‘mala suerte’.",
        },
        {
          en: "Real-world workflow — Inspector: asks for proof the quality system runs in practice (notes, decisions, actions), not certificates alone.",
          es: "Flujo real — Inspector: pide prueba de que el sistema corre en práctica (notas, decisiones, acciones), no solo certificados.",
        },
        {
          en: "Error-prone 1 — Inadequate PI oversight (episodic bulk sign, no CtQ review cadence).",
          es: "Propensa 1 — Supervisión PI inadecuada (firma masiva episódica, sin cadencia de revisión CtQ).",
        },
        {
          en: "Error-prone 2 — DOA misaligned with tasks actually performed (false delegation).",
          es: "Propensa 2 — DOA desalineada con tareas realmente ejecutadas (delegación ficticia).",
        },
        {
          en: "Error-prone 3 — Checkbox GCP training without demonstrated competency in interviews.",
          es: "Propensa 3 — Capacitación GCP de casilla sin competencia demostrada en entrevistas.",
        },
        {
          en: "Error-prone 4 — RBQM/CtQ not operationalized—vague plans, no triggers, no monitoring-trend review.",
          es: "Propensa 4 — RBQM/CtQ no operativizado—planes vagos, sin disparadores, sin revisión de tendencias de monitoría.",
        },
        {
          en: "Error-prone 5 — No traceable record of quality/safety decisions (informal hallway decisions).",
          es: "Propensa 5 — Sin registro trazable de decisiones de calidad/seguridad (decisiones informales en pasillo).",
        },
        {
          en: "Links: DOA/logs ALCOA+ (M4); visit/screening & windows (M8); investigator AE decisions & timelines (OSCE.S3); IP custody (M9); protocol binding (M2); consent/privacy stops (M1).",
          es: "Vínculos: DOA/logs ALCOA+ (M4); visita/screening y ventanas (M8); decisiones EA investigador y plazos (OSCE.S3); custodia IP (M9); protocolo vinculante (M2); paros consentimiento/privacidad (M1).",
        },
      ],
    },
    {
      lessonId: "M3.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "PI wants untrained medical assistant to enter EDC and call subjects about AEs; DOA lists them only as ‘Clinic Assistant – vitals only’.",
        es: "PI quiere asistente médico sin capacitar para ingresar EDC y llamar sujetos sobre EA; DOA solo los lista como ‘Asistente clínico – solo signos’.",
      },
      keyPoints: [
        {
          en: "What CRC sees: scope mismatch; higher-risk tasks than DOA; no documented training.",
          es: "Qué ve el CRC: desajuste de alcance; tareas de mayor riesgo que DOA; sin capacitación documentada.",
        },
        {
          en: "How to think: E6(R3) + SOP require qualified, trained staff; separate clinical judgment from mechanical tasks.",
          es: "Cómo pensar: E6(R3) + SOP exigen personal calificado y capacitado; separar juicio clínico de tareas mecánicas.",
        },
        {
          en: "Decision: block new tasks until trained; PI updates signed DOA with explicit roles; onboarding checklist documented.",
          es: "Decisión: bloquear nuevas tareas hasta capacitar; PI actualiza DOA firmado con roles explícitos; checklist de incorporación documentada.",
        },
        {
          en: "Why it matters: patient safety on AE calls; EDC integrity; inadequate delegation = common inspection finding.",
          es: "Por qué importa: seguridad en llamadas EA; integridad EDC; delegación inadecuada = hallazgo frecuente en inspección.",
        },
      ],
    },
    {
      lessonId: "M3.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "PI bulk-signs CRFs day before monitoring; no routine eligibility/AE/deviation review; ‘CRA will flag errors.’",
        es: "PI firma en bloque CRFs el día antes de monitoría; sin revisión rutinaria de elegibilidad/EA/desviaciones; ‘el CRA señalará errores’.",
      },
      keyPoints: [
        {
          en: "What CRC sees: episodic signatures; monitoring approaching; no evidence of ongoing CtQ supervision.",
          es: "Qué ve el CRC: firmas episódicas; monitoría próxima; sin evidencia de supervisión CtQ continua.",
        },
        {
          en: "Incorrect move: treat CRA as substitute PI oversight; continue bulk sign without cadence or source notes.",
          es: "Movimiento incorrecto: tratar al CRA como sustituto de supervisión PI; continuar firma masiva sin cadencia ni notas en fuente.",
        },
        {
          en: "Correct move: structured cadence (e.g., weekly: new enrolments, AEs/SAEs, major PDs); PI oversight note in ISF/source; bulk sign only as final verification after review.",
          es: "Movimiento correcto: cadencia estructurada (p. ej., semanal: inclusiones, EA/SAE, PD mayores); nota de supervisión PI en ISF/fuente; firma masiva solo como verificación final tras revisión.",
        },
        {
          en: "Why mistakes happen: time pressure, culture of outsourcing oversight to CRA.",
          es: "Por qué ocurre: presión temporal, cultura de externalizar supervisión al CRA.",
        },
        {
          en: "Why it matters: GCP expects ongoing PI supervision; repeat findings + bulk pattern = inadequate oversight signal.",
          es: "Por qué importa: GCP espera supervisión PI continua; hallazgos repetidos + patrón masivo = señal de supervisión inadecuada.",
        },
      ],
    },
    {
      lessonId: "M3.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "No written plan for PI data-review frequency or topics; meetings ad hoc; GCP/DOA technically complete.",
        es: "Sin plan escrito de frecuencia o temas de revisión de datos por PI; reuniones ad hoc; GCP/DOA técnicamente completos.",
      },
      keyPoints: [
        {
          en: "What CRC sees: polite chaos—good intent, no reconstructable system; inspectors will ask ‘show me the plan’.",
          es: "Qué ve el CRC: caos educado—buena intención, sistema no reconstruible; inspectores pedirán ‘muéstrame el plan’.",
        },
        {
          en: "How to think: E6(R3) expects proportionate, risk-based oversight; absence of defined system is system-level failure.",
          es: "Cómo pensar: E6(R3) espera supervisión proporcional basada en riesgo; ausencia de sistema definido es falla sistémica.",
        },
        {
          en: "Decision: simple signed site oversight plan—fixed monthly + ad hoc triggers (SAE spike, deviation threshold); agenda: eligibility, AEs, deviations, endpoints; memo/SOP addendum.",
          es: "Decisión: plan simple firmado—mensual fijo + disparadores ad hoc (pico SAE, umbral desviaciones); agenda: elegibilidad, EA, desviaciones, endpoints; memo/anexo SOP.",
        },
        {
          en: "Why it matters: without triggers and documentation, RBQM cannot be defended; CRC cannot prove PI supervision existed.",
          es: "Por qué importa: sin disparadores y documentación, RBQM no se defiende; CRC no prueba que existió supervisión PI.",
        },
      ],
    },
    {
      lessonId: "M3.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 30,
      objective: {
        en: "Run the Oversight Lab once under the 30-minute time box and produce all deliverables.",
        es: "Ejecutar el Laboratorio de supervisión una vez bajo 30 minutos y producir todas las salidas.",
      },
      keyPoints: [
        {
          en: "Time box: 30 minutes. Missing severity/impact or M4/M8/M9 linkage in CAPA = incomplete.",
          es: "Límite: 30 minutos. CAPA sin severidad/impacto o sin vínculo M4/M8/M9 = incompleto.",
        },
        {
          en: "Deliverables: issue register + top-3; system CAPA map; FDA defense memo—no concealment or blame-shifting.",
          es: "Entregables: registro + top-3; mapa CAPA sistémica; memo defensa FDA—sin ocultamiento ni culpar a terceros.",
        },
      ],
    },
    {
      lessonId: "M3.S5",
      title: { en: "5) Scoring matrix & audit/inspection perspective", es: "5) Matriz de puntuación y perspectiva auditoría/inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Make pass/fail transparent; anticipate inspector stress-tests.",
        es: "Hacer transparente aprobado/reprobado; anticipar pruebas de estrés del inspector.",
      },
      keyPoints: [
        {
          en: "Binary grading: criteria met/not met; critical integrity failures override partial narratives.",
          es: "Calificación binaria: criterio cumplido/no; fallas críticas de integridad anulan narrativa parcial.",
        },
        {
          en: "Inspector prompts: ‘Walk me from SAE receipt to PI medical assessment.’ ‘Show DOA vs actual tasks last 90 days.’ ‘How do monitoring findings change your SOPs?’",
          es: "Prompts inspector: ‘Recorrido desde recepción SAE a valoración médica PI.’ ‘Muestre DOA vs tareas reales últimos 90 días.’ ‘¿Cómo cambian sus SOPs los hallazgos de monitoría?’",
        },
        {
          en: "Typical findings: inadequate PI oversight; unqualified delegated staff; ineffective training; quality system deficiencies with repeat issues.",
          es: "Hallazgos típicos: supervisión PI inadecuada; personal delegado no calificado; capacitación ineficaz; deficiencias del sistema de calidad con repetición.",
        },
        {
          en: "CAPA bar: redesign oversight + documentation links (same-day log updates, templates)—not apologies-only.",
          es: "Barra CAPA: rediseñar supervisión + vínculos documentales (actualización de logs mismo día, plantillas)—no solo disculpas.",
        },
      ],
    },
    {
      lessonId: "M3.S6",
      title: { en: "6) Answer framework & fail conditions", es: "6) Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Consolidate system diagnosis, false-compliance exposure, structural CAPA, and cross-module integration.",
        es: "Consolidar diagnóstico sistémico, exposición de cumplimiento ficticio, CAPA estructural e integración entre módulos.",
      },
      keyPoints: [
        {
          en: "Elite format: (1) System vs individual diagnosis, (2) Top risks with severity/impact, (3) Structural CAPA + explicit M4/M8/M9 (+ AE) hooks + what remains for leadership/sponsor.",
          es: "Formato élite: (1) Diagnóstico sistema vs individual, (2) Riesgos top con severidad/impacto, (3) CAPA estructural + ganchos M4/M8/M9 (+ EA) + qué queda para dirección/patrocinador.",
        },
        {
          en: "Strong learners: blame system design gaps; propose written cadence, CtQ register, templates, log/source linkage.",
          es: "Aprendices sólidos: atribuyen brechas al diseño; proponen cadencia escrita, registro CtQ, plantillas, vínculo log/fuente.",
        },
        {
          en: "Fail if: only ‘train more’; accept vague oversight plans; cannot name fixes improving M4, M8, or M9; advise hiding SAE handling gaps.",
          es: "Fallo si: solo ‘capacitar más’; acepta planes vagos; no nombra arreglos que mejoren M4, M8 o M9; aconseja ocultar brechas SAE.",
        },
      ],
    },
    {
      lessonId: "M3.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Tie GCP oversight to protocol, consent, documentation, visits, safety, and IP.",
        es: "Vincular supervisión GCP a protocolo, consentimiento, documentación, visitas, seguridad e IP.",
      },
      keyPoints: [
        {
          en: "M1 (Ethics/HIPAA): consent and PHI controls require investigator accountability—not CRC improvisation.",
          es: "M1 (Ética/HIPAA): consentimiento y PHI exigen responsabilidad del investigador—no improvisación CRC.",
        },
        {
          en: "M2 (Protocol): binding rules and amendment discipline feed what PI must supervise.",
          es: "M2 (Protocolo): reglas vinculantes y disciplina de enmienda alimentan lo que el PI debe supervisar.",
        },
        {
          en: "M4 (ALCOA+): oversight decisions must land in attributable, contemporaneous logs and source.",
          es: "M4 (ALCOA+): decisiones de supervisión deben caer en logs y fuente atribuibles y contemporáneos.",
        },
        {
          en: "M8 (Visits): window and screening execution are CtQ—supervision proves they were managed, not just documented late.",
          es: "M8 (Visitas): ventanas y screening son CtQ—la supervisión prueba que se gestionaron, no solo documentaron tarde.",
        },
        {
          en: "OSCE.S3 / sponsor AE: investigator assessment and timelines—DOA and cadence must match reality.",
          es: "OSCE.S3 / EA patrocinador: valoración investigador y plazas—DOA y cadencia deben coincidir con la realidad.",
        },
        {
          en: "M9 (IP): custody and accountability require supervised delegation aligned to protocol.",
          es: "M9 (IP): custodia y contabilidad requieren delegación supervisada alineada al protocolo.",
        },
        {
          en: "Capstone: OSCE.S2 consent/visit documentation under oversight; OSCE.S3 AE/SAE escalation.",
          es: "Capstone: OSCE.S2 documentación consentimiento/visita bajo supervisión; OSCE.S3 escalamiento AE/SAE.",
        },
      ],
    },
    {
      lessonId: "M3.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit: safety, data, compliance, inspection outcomes.",
        es: "Hacer explícitas consecuencias: seguridad, datos, cumplimiento, resultados de inspección.",
      },
      keyPoints: [
        {
          en: "Patient safety: missed or misclassified SAEs; eligibility errors; inadequate follow-up when oversight is theatrical.",
          es: "Seguridad del paciente: SAE omitidas o mal clasificadas; errores de elegibilidad; seguimiento inadecuado cuando la supervisión es teatral.",
        },
        {
          en: "Data integrity: CRF sign-off without review; uncorrected systemic deviations; unusable evidence for benefit-risk.",
          es: "Integridad de datos: firma CRF sin revisión; desviaciones sistémicas sin corregir; evidencia inútil para beneficio-riesgo.",
        },
        {
          en: "Compliance: FDA 483 / EMA inspection findings on supervision, delegation, training effectiveness; for-cause escalation risk.",
          es: "Cumplimiento: hallazgos FDA 483 / inspección EMA por supervisión, delegación, eficacia de capacitación; riesgo de escalamiento for-cause.",
        },
        {
          en: "Site viability: sponsor distrust, enrollment holds, contract termination when quality system is not credible.",
          es: "Viabilidad del sitio: desconfianza patrocinador, holds de inclusión, terminación contractual cuando el sistema de calidad no es creíble.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M3.E1",
      description: {
        en: "Site has GCP certs, DOA log, generic SOPs—but no defined oversight schedule, no written RBQM plan or CtQ list, no process to review monitoring findings or trends.",
        es: "Sitio tiene certificados GCP, log DOA, SOPs genéricos—pero sin calendario de supervisión definido, sin plan RBQM escrito ni lista CtQ, sin proceso para revisar hallazgos o tendencias de monitoría.",
      },
      risk: {
        en: "System depends on individuals; oversight collapses if CRC leaves; regulators see failure to implement E6(R3) quality principles.",
        es: "Sistema depende de individuos; supervisión colapsa si sale el CRC; reguladores ven incumplimiento de principios de calidad E6(R3).",
      },
      expectedLearnerResponse: {
        en: "Classify as system-level CAPA: oversight plan, CtQ register, monitoring-trend review, accountable owners, documented meetings feeding logs.",
        es: "Clasificar como CAPA sistémica: plan de supervisión, registro CtQ, revisión de tendencias de monitoría, responsables, reuniones documentadas que alimenten logs.",
      },
      relatedDimensions: ["R", "O", "Q"],
    },
    {
      errorId: "M3.E2",
      description: {
        en: "DOA and training logs perfect; mock inspection interviews show CRC cannot explain CtQ; sub-I cannot describe AE reporting; inconsistent answers on who assesses eligibility.",
        es: "DOA y logs de capacitación perfectos; entrevistas simuladas muestran CRC sin explicar CtQ; sub-I no describe reporte EA; respuestas inconsistentes sobre quién valora elegibilidad.",
      },
      risk: {
        en: "Staff may fail under pressure; inspectors rely on interviews—major findings on training effectiveness and oversight.",
        es: "Personal puede fallar bajo presión; inspectores confían en entrevistas—hallazgos mayores en eficacia de capacitación y supervisión.",
      },
      expectedLearnerResponse: {
        en: "Flag false compliance; competency-based training; supervised practice; documented role clarity; interview-ready process maps.",
        es: "Señalar cumplimiento ficticio; capacitación basada en competencia; práctica supervisada; claridad de roles documentada; mapas de proceso listos para entrevista.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M3.E3",
      description: {
        en: "DOA states PI responsible for all SAE review/sign-off; in practice CRC drafts and assesses SAE narratives with PI e-signature auto-applied without substantive review.",
        es: "DOA indica PI responsable de revisión/firma de todas las SAE; en práctica CRC redacta y valora narrativas SAE con e-firma PI auto-aplicada sin revisión sustantiva.",
      },
      risk: {
        en: "Serious events may lack true investigator assessment; causality/seriousness misclassification; DOA vs reality finding.",
        es: "Eventos graves pueden carecer de valoración real del investigador; error en causalidad/gravedad; hallazgo DOA vs realidad.",
      },
      expectedLearnerResponse: {
        en: "Stop auto-workflow; restore documented PI review; update DOA or process to match; QA sample of SAE packets.",
        es: "Detener flujo automático; restaurar revisión PI documentada; actualizar DOA o proceso para que coincida; muestreo QA de paquetes SAE.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M3.E4",
      description: {
        en: "PI and CRC discuss AEs informally but AE Logs lag; Deviation Log not updated when oversight finds issues; source lacks PI decisions/rationale.",
        es: "PI y CRC discuten EA informalmente pero logs EA van atrasados; log de desviaciones no se actualiza cuando supervisión halla problemas; fuente sin decisiones/justificación PI.",
      },
      risk: {
        en: "Oversight leaves no audit trail; M4/M8/M9 appear weak because the quality engine is disconnected from documentation.",
        es: "Supervisión no deja rastro de auditoría; M4/M8/M9 lucen débiles porque motor de calidad está desconectado de la documentación.",
      },
      expectedLearnerResponse: {
        en: "Mandate same-day log updates after oversight; template linking meeting minutes to log entries and source notes; QA spot-check.",
        es: "Exigir actualización de logs el mismo día tras supervisión; plantilla que vincule minutas a entradas de log y notas en fuente; control QA puntual.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M3.E5",
      description: {
        en: "SOP/IRB require PI sign-off on SAEs and major deviations; PI tells CRC to use e-signature and skip personal review—‘sponsor cares about data, not who signs.’",
        es: "SOP/CEI exigen firma PI en SAE y desviaciones mayores; PI dice al CRC usar e-firma sin revisión personal—‘al patrocinador le importan los datos, no quién firma’.",
      },
      risk: {
        en: "Investigator duties bypassed; serious GCP breach if uncovered; patient safety judgments not actually applied.",
        es: "Deberes del investigador eludidos; brecha GCP grave si se descubre; juicios de seguridad no aplicados realmente.",
      },
      expectedLearnerResponse: {
        en: "Refuse; escalate to compliance/QA; cite investigator obligations; document; do not falsify attestations.",
        es: "Rechazar; escalar a cumplimiento/QA; citar obligaciones del investigador; documentar; no falsificar atestaciones.",
      },
      relatedDimensions: ["R", "C"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M3.EX1",
      name: {
        en: "GCP Oversight & Quality System Lab — inspection readiness stress test",
        es: "Laboratorio de supervisión GCP y sistema de calidad — prueba de estrés de inspección",
      },
      scenario: {
        en: "30 minutes before simulated FDA inspection debrief. Inputs conflict by design: monitoring report cites repeat AE documentation and consent process findings; DOA and training records look complete; institutional oversight SOP references GCP/E6(R3); a polished 2-page ‘quality plan’ says only ‘PI reviews data regularly’ with no triggers; SAE case files show CRC-authored narratives with PI e-sign timestamps minutes later on busy clinic days; meeting calendar shows few formal oversight slots. Inspection mindset—omissions will be challenged.",
        es: "30 minutos antes de debrief simulado FDA. Insumos chocan a propósito: informe de monitoría cita hallazgos repetidos en documentación EA y proceso de consentimiento; DOA y capacitación lucen completos; SOP institucional cita GCP/E6(R3); ‘plan de calidad’ de 2 páginas solo dice ‘PI revisa datos regularmente’ sin disparadores; expedientes SAE muestran narrativas del CRC con e-firma PI minutos después en días de clínica ocupada; calendario muestra pocos espacios formales de supervisión. Mentalidad de inspección—las omisiones serán cuestionadas.",
      },
      inputs: [
        { inputId: "M3.IN1", label: { en: "Monitoring report + follow-up letter", es: "Informe de monitoría + carta de seguimiento" }, inputKind: "pdf" },
        { inputId: "M3.IN2", label: { en: "DOA + training records", es: "DOA + registros de capacitación" }, inputKind: "table" },
        { inputId: "M3.IN3", label: { en: "Institutional oversight SOP", es: "SOP institucional de supervisión" }, inputKind: "pdf" },
        { inputId: "M3.IN4", label: { en: "Site quality plan + SAE case files", es: "Plan de calidad del sitio + expedientes SAE" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "List issues: system design (oversight cadence, RBQM, CtQ), individual behavior (PI/CRC boundaries), false compliance (documents vs interviews). Pick top 3 for an inspector; classify minor/major/critical and impact (patient/data/compliance). For each, propose system-level CAPA (schedule, CtQ register, documented PI case review, mandatory same-day linkage to M4 logs, M8 visit/randomization discipline, investigator-level AE assessment per sponsor/OSCE.S3, M4 ALCOA+ discipline, M9 IP custody)—corrective + preventive, not retraining-only. Draft FDA defense for one major system gap: honest prior state, specific implemented changes, known vs unknown, alignment with E6(R3) and institutional RBQM—no concealment or e-signature workarounds.",
        es: "Listar problemas: diseño del sistema (cadencia RBQM, CtQ), conducta individual (límites PI/CRC), cumplimiento ficticio (documentos vs entrevistas). Elegir 3 principales para inspector; clasificar menor/mayor/crítico e impacto (paciente/datos/cumplimiento). Para cada uno, CAPA sistémica (calendario, registro CtQ, revisión documentada de casos por PI, vínculo obligatorio mismo día a logs M4, disciplina M8 visita/randomización, valoración EA a nivel investigador según patrocinador/OSCE.S3, disciplina ALCOA+ M4, custodia IP M9)—correctiva + preventiva, no solo reentrenar. Redactar defensa FDA para brecha sistémica mayor: estado previo honesto, cambios específicos implementados, conocido vs desconocido, alineación con E6(R3) y RBQM institucional—sin ocultamiento ni atajos de e-firma.",
      },
      deliverables: [
        { deliverableId: "M3.D1", label: { en: "Issue register + top-3 matrix", es: "Registro de hallazgos + matriz top-3" }, formatHint: "table" },
        { deliverableId: "M3.D2", label: { en: "System CAPA + M4/M8/M9 map", es: "CAPA sistémica + mapa M4/M8/M9" }, formatHint: "pdf" },
        { deliverableId: "M3.D3", label: { en: "FDA defense statement (one gap)", es: "Declaración de defensa FDA (una brecha)" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M3.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M3.C1",
        description: {
          en: "Separates system-level failures (no oversight design, no RBQM/CtQ) from individual slips; exposes false compliance when documents outpace competency.",
          es: "Separa fallas sistémicas (sin diseño de supervisión, sin RBQM/CtQ) de errores individuales; expone cumplimiento ficticio cuando documentos superan competencia.",
        },
        points: 35,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Critical fail if frames problems only as ‘need more training’ with no system redesign, or accepts vague quality plan without critique of triggers, cadence, or DOA-reality match.",
          es: "Falla crítica si enmarca solo como ‘más capacitación’ sin rediseño de sistema, o acepta plan de calidad vago sin crítica de disparadores, cadencia o ajuste DOA–realidad.",
        },
      },
      {
        criterionId: "M3.C2",
        description: {
          en: "Inspector-style prioritization: reconstructable oversight, who makes safety decisions, risk-based evidence; top-3 with consistent severity/impact.",
          es: "Priorización estilo inspector: supervisión reconstruible, quién toma decisiones de seguridad, evidencia basada en riesgo; top-3 con severidad/impacto consistentes.",
        },
        points: 25,
        mapsToDimensions: ["O", "C"],
        failCondition: {
          en: "Critical fail if no high-risk issue identified from the packet, or labels inadequate PI oversight on SAE handling as minor without justification.",
          es: "Falla crítica si no identifica hallazgo de alto riesgo del paquete, o etiqueta supervisión PI inadecuada en manejo SAE como menor sin justificación.",
        },
      },
      {
        criterionId: "M3.C3",
        description: {
          en: "Structural CAPA: written cadence, triggers, competency expectations, meeting templates; explicit cross-module improvements to M4 (DOA/logs, ALCOA+), M8 (screening & visit-window control), sponsor/OSCE.S3 (timely investigator AE review), M9 (IP receipt-to-disposition & excursion governance).",
          es: "CAPA estructural: cadencia escrita, disparadores, expectativas de competencia, plantillas de reunión; mejoras explícitas entre módulos a M4 (DOA/logs, ALCOA+), M8 (control screening y ventanas visita), patrocinador/OSCE.S3 (revisión EA oportuna por investigador), M9 (IP recepción a disposición y gobierno de excursiones).",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Fail if CAPA is only slide deck or one-off meeting with no SOP/process change, log linkage, or accountable triggers.",
          es: "Falla si CAPA es solo diapositivas o reunión puntual sin cambio de SOP/proceso, vínculo a logs o disparadores con responsable.",
        },
      },
      {
        criterionId: "M3.C4",
        description: {
          en: "FDA defense: honest gap description, implemented system changes, alignment with E6(R3) and institutional risk-based oversight—no concealment or blame-shifting.",
          es: "Defensa FDA: descripción honesta de brecha, cambios de sistema implementados, alineación con E6(R3) y supervisión institucional basada en riesgo—sin ocultamiento ni culpar a terceros.",
        },
        points: 15,
        mapsToDimensions: ["R", "C"],
        failCondition: {
          en: "Critical fail if advises continuing PI e-signature workaround, hiding SAE handling gaps from inspectors, or falsifying attestations.",
          es: "Falla crítica si aconseja continuar atajo de e-firma PI, ocultar brechas de manejo SAE a inspectores o falsificar atestaciones.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.32,
      aggregationKey: "gcp_e6r3_investigator_delegation_regulatory_duties",
    },
    {
      dimension: "O",
      weight: 0.28,
      aggregationKey: "oversight_cadence_rbqm_site_quality_system",
    },
    {
      dimension: "Q",
      weight: 0.22,
      aggregationKey: "traceable_oversight_logs_alcoa_documentation_integrity",
    },
    {
      dimension: "C",
      weight: 0.18,
      aggregationKey: "crc_boundaries_pi_supervision_safety_decisions",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S2 stresses consent and visit documentation under investigator oversight; OSCE.S3 stresses AE/SAE escalation—both depend on the live quality system this module describes.",
      es: "OSCE.S2 ejercita consentimiento y documentación de visita bajo supervisión del investigador; OSCE.S3 ejercita escalamiento AE/SAE—ambos dependen del sistema de calidad vivo que describe este módulo.",
    },
    stationIds: ["OSCE.S2", "OSCE.S3"],
  },
  tags: ["regulatory", "documentation", "operational", "audit_readiness", "bilingual", "flagship", "safety"],
  bilingualNotes: {
    en: "Keep ICH E6(R3), GCP, RBQM, CtQ, QbD, DOA, FDA, EMA, ALCOA+ as EN technical tokens.",
    es: "Mantener ICH E6(R3), GCP, RBQM, CtQ, QbD, DOA, FDA, EMA, ALCOA+ como tokens técnicos EN.",
  },
};
