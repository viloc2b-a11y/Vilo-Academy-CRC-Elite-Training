// src/curriculum-engine/data/modules/m7.ts

import type { Module } from "../../types";

/**
 * Module 7 — Recruitment & retention: diversity, ethics & data integrity at site level.
 *
 * Base Operativo (Modules 1–10): eight ordered sections; three guided cases (clear / incorrect / ambiguous);
 * practical exercise under time pressure; rubric 100 = sum(criteria.points); passing 94.
 *
 * Regulatory / policy anchors for this module: FDA Diversity Action Plan (site execution of sponsor DAP
 * expectations and meaningful inclusion metrics) and NIH Recruitment (inclusive practices, outreach
 * documentation, and accountability for accrual that supports generalizable science).
 */
export const MODULE_M7: Module = {
  id: "M7",
  slug: "recruitment-retention-diversity-site",
  internalName: "mod_07_recruitment_retention_crc",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "C", "Q"],
  title: {
    en: "Module 7 — Recruitment & Retention: Diversity, Ethics & Data Integrity at Site Level",
    es: "Módulo 7 — Reclutamiento y retención: diversidad, ética e integridad de datos en el sitio",
  },
  objective: {
    en: "CRC can run a site recruitment and retention funnel that matches feasibility (M5), satisfies IRB controls, aligns with FDA Diversity Action Plan enrollment intent, documents outreach the way NIH Recruitment accountability expects, and defends accrual/dropout patterns against endpoint bias and coercion critiques.",
    es: "El CRC puede operar un embudo de reclutamiento y retención en sitio que coincida con viabilidad (M5), cumpla controles CEI, se alinee con la intención de inclusión del FDA Diversity Action Plan, documente alcance como espera la rendición de cuentas de NIH Recruitment y defienda patrones de inclusión/deserción frente a sesgo de endpoint y críticas de coerción.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Explains how recruitment operationalizes M5 feasibility assumptions (channels, scripts, pools) and how dropout—especially non-random—affects power and generalizability under FDA Diversity Action Plan and NIH Recruitment lenses.",
          es: "Explica cómo el reclutamiento operativiza supuestos de viabilidad M5 (canales, guiones, pools) y cómo la deserción—especialmente no aleatoria—afecta potencia y generalizabilidad bajo lentes FDA Diversity Action Plan y NIH Recruitment.",
        },
        {
          en: "Names why headline race/ethnicity counts alone do not prove meaningful inclusion for FDA Diversity Action Plan reviewers or NIH Recruitment reporting expectations.",
          es: "Enuncia por qué conteos de raza/etnia de cabecera solos no prueban inclusión significativa ante revisores FDA Diversity Action Plan ni expectativas de reporte NIH Recruitment.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Maps language, trust, logistics, and literacy barriers into IRB-approved materials, qualified interpretation, community partnerships, and channel metrics that sponsors can compare to FDA Diversity Action Plan goals.",
          es: "Mapea barreras de idioma, confianza, logística y alfabetización a materiales aprobados por CEI, interpretación calificada, alianzas comunitarias y métricas de canal que el patrocinador pueda comparar con metas FDA Diversity Action Plan.",
        },
        {
          en: "Distinguishes ethical retention supports from completion-contingent incentives that impair free withdrawal; documents retention decisions for NIH Recruitment-style traceability.",
          es: "Distingue apoyos éticos de retención de incentivos contingentes a finalización que menoscaban retiro libre; documenta decisiones de retención para trazabilidad estilo NIH Recruitment.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Flags false diversity compliance (narrow SES/language/geography behind a diversity percentage) and proposes corrective metrics, sites, and CAPA that restore credibility for FDA Diversity Action Plan and NIH Recruitment narratives.",
          es: "Señala cumplimiento de diversidad ficticio (NSE/idioma/geografía estrechos detrás de un porcentaje) y propone métricas, sitios y CAPA correctivas que restauren credibilidad para narrativas FDA Diversity Action Plan y NIH Recruitment.",
        },
        {
          en: "Detects plan-vs-reality gaps in recruitment SOPs; resists sponsor pressure to relax pre-screening without protocol change; links skewed accrual to M2/M6/M16 risk.",
          es: "Detecta brechas plan vs realidad en SOPs de reclutamiento; resiste presión del patrocinador de relajar pre-screening sin cambio de protocolo; vincula reclutamiento sesgado a riesgo M2/M6/M16.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M7.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the operational bar: execution evidence, meaningful inclusion (FDA Diversity Action Plan), documented outreach (NIH Recruitment), and data-integrity defense of accrual/dropout.",
        es: "Establecer la barra operativa: evidencia de ejecución, inclusión significativa (FDA Diversity Action Plan), alcance documentado (NIH Recruitment) y defensa de integridad de datos de inclusión/deserción.",
      },
      keyPoints: [
        {
          en: "Graded on whether you can show real channels, IRB-controlled materials, subgroup metrics, and retention that preserves voluntariness—not slogans.",
          es: "Se te califica si puedes mostrar canales reales, materiales controlados por CEI, métricas por subgrupo y retención que preserve voluntariedad—no eslóganes.",
        },
        {
          en: "Outputs: Trial A/B issue matrices; IRB fix outline; Recruitment & Retention Summary memo citing FDA Diversity Action Plan and NIH Recruitment where substantive.",
          es: "Salidas: matrices ensayo A/B; esquema arreglos CEI; memo resumen reclutamiento y retención citando FDA Diversity Action Plan y NIH Recruitment donde sea sustantivo.",
        },
        {
          en: "Technical tokens stay EN in both locales (FDA Diversity Action Plan, NIH Recruitment, IRB, EMR, SOC, CBO, FQHC, SES, DAP, EDC).",
          es: "Tokens técnicos permanecen en inglés en ambos idiomas (FDA Diversity Action Plan, NIH Recruitment, IRB/CEI, EMR, SOC, CBO, FQHC, SES, DAP, EDC).",
        },
      ],
    },
    {
      lessonId: "M7.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 30,
      objective: {
        en: "Anchor retention-as-validity, meaningful inclusion under FDA Diversity Action Plan, outreach documentation aligned with NIH Recruitment, IRB material control, and coercion boundaries.",
        es: "Anclar retención como validez, inclusión significativa bajo FDA Diversity Action Plan, documentación de alcance alineada a NIH Recruitment, control de materiales CEI y límites de coerción.",
      },
      keyPoints: [
        {
          en: "FDA Diversity Action Plan context: sponsors set enrollment goals for underrepresented populations; sites must operationalize tactics and metrics that show those populations were actually reached—not only that totals climbed.",
          es: "Contexto FDA Diversity Action Plan: patrocinadores fijan metas de inclusión para poblaciones subrepresentadas; los sitios deben operativizar tácticas y métricas que muestren que esas poblaciones fueron alcanzadas de verdad—no solo que subieron totales.",
        },
        {
          en: "NIH Recruitment accountability: outreach, consent-adjacent recruitment copy, and accrual records should be contemporaneous and auditable; ‘planned’ community work needs attendance/contact logs.",
          es: "Rendición de cuentas NIH Recruitment: alcance, copys de reclutamiento colindantes al consentimiento y registros de inclusión deben ser contemporáneos y auditables; trabajo comunitario ‘planificado’ necesita logs de asistencia/contacto.",
        },
        {
          en: "Retention protects endpoints: differential dropout by SES, language, or disease severity biases conclusions—state that explicitly in monitor defense.",
          es: "La retención protege endpoints: deserción diferencial por NSE, idioma o gravedad sesga conclusiones—decláralo explícitamente en defensa ante monitor.",
        },
        {
          en: "Real-world workflow — Design: map catchment burden vs protocol eligibility; align channel plan to FDA Diversity Action Plan sub-goals where applicable.",
          es: "Flujo real — Diseño: mapear carga de captación vs elegibilidad del protocolo; alinear plan de canal a sub-metas FDA Diversity Action Plan cuando aplique.",
        },
        {
          en: "Real-world workflow — Execute: bilingual staff, qualified interpreters for discussions, IRB-approved ads/scripts, EMR flags, referral tracking by source.",
          es: "Flujo real — Ejecutar: personal bilingüe, intérpretes calificados para discusiones, anuncios/guiones aprobados CEI, banderas EMR, seguimiento referencias por fuente.",
        },
        {
          en: "Real-world workflow — Document: version control for translated materials; store sponsor DAP excerpts and site dashboards NIH monitors may request analogs of.",
          es: "Flujo real — Documentar: control de versiones para materiales traducidos; guardar extractos DAP patrocinador y tableros sitio que análogos puedan pedir monitores NIH.",
        },
        {
          en: "Real-world workflow — Retain: logistics (transport, scheduling), reasonable reimbursement per IRB, monitor dropout by subgroup; escalate disproportionate loss.",
          es: "Flujo real — Retener: logística (transporte, agenda), reembolso razonable según CEI, monitorizar deserción por subgrupo; escalar pérdida desproporcionada.",
        },
        {
          en: "Error-prone 1 — Single-channel reliance on overburdened physicians only; no EMR alerts or structured pre-screen lists.",
          es: "Propensa 1 — Dependencia de un solo canal en médicos sobrecargados; sin alertas EMR ni listas pre-screen estructuradas.",
        },
        {
          en: "Error-prone 2 — Community outreach in SOPs with zero attendance or contact logs (NIH Recruitment credibility gap).",
          es: "Propensa 2 — Alcance comunitario en SOPs con cero registros de asistencia o contacto (brecha credibilidad NIH Recruitment).",
        },
        {
          en: "Error-prone 3 — Unapproved translations or social posts diverging from IRB English master.",
          es: "Propensa 3 — Traducciones o publicaciones en redes no aprobadas divergentes del máster inglés CEI.",
        },
        {
          en: "Error-prone 4 — False diversity compliance: headline race/ethnicity target met while language/SES/geography stay narrow (FDA Diversity Action Plan scrutiny).",
          es: "Propensa 4 — Cumplimiento diversidad ficticio: meta raza/etnia cumplida mientras idioma/NSE/geografía siguen estrechos (escrutinio FDA Diversity Action Plan).",
        },
        {
          en: "Error-prone 5 — Completion bonuses described by subjects as ‘cannot afford to stop’; sponsor push to loosen pre-screening without amendment.",
          es: "Propensa 5 — Bonos por finalización que sujetos describen como ‘no puedo permitirme parar’; empuje patrocinador de aflojar pre-screening sin enmienda.",
        },
        {
          en: "Cross-links: M5 feasibility math; M6 consent ecosystem for recruitment copy; M3 delegation for who may consent/recruit; M16 inspection readiness.",
          es: "Vínculos: M5 matemática viabilidad; M6 ecosistema consentimiento para copy reclutamiento; M3 delegación de quién consiente/recluta; M16 preparación inspección.",
        },
      ],
    },
    {
      lessonId: "M7.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Type 2 diabetes trial in high Hispanic-prevalence community; historically low trial enrollment despite clinic volume; sponsor DAP cites language access gap.",
        es: "Ensayo diabetes tipo 2 en comunidad alta prevalencia hispana; históricamente baja inclusión pese a volumen clínico; DAP patrocinador cita brecha de acceso lingüístico.",
      },
      keyPoints: [
        {
          en: "What CRC sees: eligible patients funnel through primary care; English-only scripts under-reach monolingual Spanish speakers.",
          es: "Qué ve el CRC: pacientes elegibles pasan por atención primaria; guiones solo inglés sub-alcanzan hispanohablantes monolingües.",
        },
        {
          en: "How to think: FDA Diversity Action Plan goals require operational access tactics; NIH Recruitment expects documented outreach, not intentions.",
          es: "Cómo pensar: metas FDA Diversity Action Plan requieren tácticas de acceso operativas; NIH Recruitment espera alcance documentado, no intenciones.",
        },
        {
          en: "Decision: bilingual CRC coverage; IRB-approved Spanish materials; CBO/faith partnerships; EMR opt-in conversations; track enrollment by language.",
          es: "Decisión: cobertura CRC bilingüe; materiales español aprobados CEI; alianzas OCB/fe; conversaciones opt-in EMR; rastrear inclusión por idioma.",
        },
        {
          en: "Why it matters: improves generalizable science and audit defense when reviewers test whether underrepresented groups were actually engaged.",
          es: "Por qué importa: mejora ciencia generalizable y defensa en auditoría cuando revisores prueban si grupos subrepresentados fueron realmente enganchados.",
        },
      ],
    },
    {
      lessonId: "M7.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "WhatsApp draft (Spanish) claims cutting-edge treatment may cure cancer and best care free; sponsor wants post before IRB.",
        es: "Borrador WhatsApp (español) afirma tratamiento de vanguardia puede curar cáncer y mejor atención gratis; patrocinador quiere publicar antes del CEI.",
      },
      keyPoints: [
        {
          en: "Incorrect move: publish or forward as drafted to ‘hit FDA Diversity Action Plan visibility’ without IRB review.",
          es: "Movimiento incorrecto: publicar o reenviar como está para ‘visibilidad FDA Diversity Action Plan’ sin revisión CEI.",
        },
        {
          en: "Correct move: stop dissemination; rewrite to balanced investigational language; submit as new recruitment material; log version control for NIH Recruitment traceability.",
          es: "Movimiento correcto: detener difusión; reescribir a lenguaje investigacional balanceado; enviar como material nuevo de reclutamiento; registrar control de versiones para trazabilidad NIH Recruitment.",
        },
        {
          en: "Why it matters: recruitment copy is part of the consent ecosystem; therapeutic misconception undermines both ethics and FDA Diversity Action Plan integrity.",
          es: "Por qué importa: el copy de reclutamiento es parte del ecosistema de consentimiento; misconception terapéutica socava ética e integridad FDA Diversity Action Plan.",
        },
      ],
    },
    {
      lessonId: "M7.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Oncology: 30% Hispanic enrolled but nearly all English-proficient, college-educated, single suburban clinic; broader Hispanic population includes monolingual Spanish, lower education—not enrolling. Sponsor reports DAP metric ‘green’.",
        es: "Oncología: 30% hispanos incluidos pero casi todos inglés proficiente, universitarios, una clínica suburbana; población hispana amplia incluye español monolingüe, menor escolaridad—no incluyen. Patrocinador reporta métrica DAP ‘en verde’.",
      },
      keyPoints: [
        {
          en: "What CRC sees: headline diversity percentage aligns with FDA Diversity Action Plan counts while representativeness of burden populations does not.",
          es: "Qué ve el CRC: porcentaje diversidad de cabecera alinea con conteos FDA Diversity Action Plan mientras la representatividad de poblaciones con carga no.",
        },
        {
          en: "How to think: NIH Recruitment reviewers ask who was reached, where, and in what language; SES and geography are part of the story.",
          es: "Cómo pensar: revisores NIH Recruitment preguntan a quién se alcanzó, dónde y en qué idioma; NSE y geografía son parte de la historia.",
        },
        {
          en: "Decision: transparent dashboard (language, education, ZIP/FQHC partners); propose expansion sites and IRB-approved materials; escalate false compliance risk to sponsor/compliance—not a celebratory email.",
          es: "Decisión: tablero transparente (idioma, educación, ZIP/alianzas FQHC); proponer sitios expansión y materiales CEI; escalar riesgo cumplimiento ficticio a patrocinador/cumplimiento—no un correo celebratorio.",
        },
        {
          en: "Why it matters: endpoint generalizability and equity claims collapse if accrual is narrow beneath a diversity label.",
          es: "Por qué importa: generalizabilidad de endpoint y alegatos de equidad colapsan si la inclusión es estrecha bajo una etiqueta de diversidad.",
        },
      ],
    },
    {
      lessonId: "M7.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 40,
      objective: {
        en: "Run the Recruitment & Retention Lab once under the 40-minute time box; cite FDA Diversity Action Plan and NIH Recruitment in the summary memo where substantive.",
        es: "Ejecutar el Laboratorio una vez bajo 40 minutos; citar FDA Diversity Action Plan y NIH Recruitment en el memo resumen donde sea sustantivo.",
      },
      keyPoints: [
        {
          en: "Time box: 40 minutes. Ignoring coercion, false diversity, or plan-execution gaps when the packet shows them = incomplete.",
          es: "Límite: 40 minutos. Ignorar coerción, diversidad ficticia o brechas plan-ejecución cuando el paquete las muestra = incompleto.",
        },
        {
          en: "Deliverables: matrices (D1), IRB outline (D2), summary memo (D3) with severity, CAPA, and defense framing.",
          es: "Entregables: matrices (D1), esquema CEI (D2), memo resumen (D3) con severidad, CAPA y marco de defensa.",
        },
      ],
    },
    {
      lessonId: "M7.S5",
      title: { en: "5) Scoring matrix & inspection perspective", es: "5) Matriz de puntuación y perspectiva inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M7.RUB1; make FDA Diversity Action Plan and NIH Recruitment expectations examinable.",
        es: "Alinear calificación con M7.RUB1; hacer examinables expectativas FDA Diversity Action Plan y NIH Recruitment.",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; binary criteria; critical pathway on false diversity, documentation gaps, and coercive retention.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; criterios binarios; vía crítica en diversidad ficticia, brechas documentación y retención coercitiva.",
        },
        {
          en: "Monitor questions: ‘Show outreach logs versus DAP sub-goals.’ ‘Stratify dropout by language and SES—what bias does that introduce?’",
          es: "Preguntas monitor: ‘Muestre logs de alcance vs sub-metas DAP.’ ‘Estratifique deserción por idioma y NSE—qué sesgo introduce?’",
        },
        {
          en: "Finding classes: unapproved recruitment materials (major/critical); false diversity narrative (major integrity); completion-contingent undue influence (critical autonomy).",
          es: "Clases de hallazgos: materiales reclutamiento no aprobados (mayor/crítico); narrativa diversidad ficticia (integridad mayor); influencia indebida contingente a finalización (autonomía crítica).",
        },
      ],
    },
    {
      lessonId: "M7.S6",
      title: { en: "6) Answer framework (elite outputs + fail patterns)", es: "6) Marco de respuesta (salidas élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Produce audit-facing recruitment summaries that tie tactics to FDA Diversity Action Plan intent and NIH Recruitment evidence rules.",
        es: "Producir resúmenes de reclutamiento orientados a auditoría que enlacen tácticas a intención FDA Diversity Action Plan y reglas de evidencia NIH Recruitment.",
      },
      keyPoints: [
        {
          en: "Elite format: (1) Accrual/dropout facts by subgroup, (2) Plan vs execution evidence, (3) CAPA + sponsor/IRB path + one-sentence defense.",
          es: "Formato élite: (1) Hechos inclusión/deserción por subgrupo, (2) Evidencia plan vs ejecución, (3) CAPA + vía patrocinador/CEI + defensa en una oración.",
        },
        {
          en: "Fail patterns: celebrating DAP ‘green’ without language/SES spread; ‘we posted on social’ with no IRB packet; agreeing to loosen screening via email.",
          es: "Patrones de falla: celebrar DAP ‘en verde’ sin dispersión idioma/NSE; ‘publicamos en redes’ sin paquete CEI; aceptar aflojar screening por correo.",
        },
      ],
    },
    {
      lessonId: "M7.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect recruitment execution to eligibility, consent quality, logs, and inspection posture.",
        es: "Conectar ejecución de reclutamiento a elegibilidad, calidad de consentimiento, logs y postura de inspección.",
      },
      keyPoints: [
        {
          en: "M5: if channels do not match feasibility assumptions, enrollment shortfalls are predictable—say so early with FDA Diversity Action Plan implications.",
          es: "M5: si canales no coinciden con supuestos de viabilidad, déficits de inclusión son predecibles—dígalo temprano con implicaciones FDA Diversity Action Plan.",
        },
        {
          en: "M6: recruitment language must match consent ethics; misleading ads invalidate the NIH Recruitment documentation story.",
          es: "M6: lenguaje reclutamiento debe coincidir con ética de consentimiento; anuncios engañosos invalidan la historia documental NIH Recruitment.",
        },
        {
          en: "M4/M16: sourceable logs for outreach events, versions, and referrals—ALCOA+ discipline supports both NIH and sponsor audits.",
          es: "M4/M16: logs en fuente para eventos de alcance, versiones y referencias—disciplina ALCOA+ apoya auditorías NIH y patrocinador.",
        },
      ],
    },
    {
      lessonId: "M7.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit when recruitment/retention fails FDA Diversity Action Plan credibility or NIH Recruitment documentation tests.",
        es: "Hacer explícitas consecuencias cuando reclutamiento/retención falla credibilidad FDA Diversity Action Plan o pruebas documentación NIH Recruitment.",
      },
      keyPoints: [
        {
          en: "Science impact: biased accrual/dropout undermines primary endpoints and external validity; regulators question generalizable benefit-risk.",
          es: "Impacto científico: inclusión/deserción sesgada socava endpoints primarios y validez externa; reguladores cuestionan beneficio-riesgo generalizable.",
        },
        {
          en: "Participant impact: coercive retention or misleading recruitment harms autonomy and trust—especially in communities historically underrepresented.",
          es: "Impacto participante: retención coercitiva o reclutamiento engañoso daña autonomía y confianza—especialmente en comunidades históricamente subrepresentadas.",
        },
        {
          en: "Site impact: enrollment holds, monitoring intensity, payment holds, and DAP remediation plans when inclusion narratives fail evidence review.",
          es: "Impacto sitio: holds de inclusión, intensidad de monitoreo, retención de pagos y planes remediación DAP cuando narrativas de inclusión fallan revisión de evidencia.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M7.E1",
      description: {
        en: "Recruitment depends only on busy physicians mentioning trials; no EMR alerts, outreach, or structured process—DAP sub-goals cannot be met operationally.",
        es: "Reclutamiento depende solo de médicos ocupados mencionando ensayos; sin alertas EMR, alcance o proceso estructurado—sub-metas DAP no pueden cumplirse operativamente.",
      },
      risk: {
        en: "Under-recruitment; FDA Diversity Action Plan and NIH Recruitment credibility gap; selection bias.",
        es: "Sub-reclutamiento; brecha credibilidad FDA Diversity Action Plan y NIH Recruitment; sesgo de selección.",
      },
      expectedLearnerResponse: {
        en: "Multi-channel plan with owners; pre-screen lists; track referrals; protect physician time; document for NIH Recruitment review.",
        es: "Plan multi-canal con responsables; listas pre-screen; rastrear referencias; proteger tiempo médico; documentar para revisión NIH Recruitment.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M7.E2",
      description: {
        en: "SOP describes community outreach and bilingual sessions; no events, attendance, or contact documentation exists—classic NIH Recruitment execution gap.",
        es: "SOP describe alcance comunitario y sesiones bilingües; no hay eventos, asistencia ni documentación de contacto—brecha clásica de ejecución NIH Recruitment.",
      },
      risk: {
        en: "Documentation vs reality; FDA Diversity Action Plan scrutiny on whether communities were actually engaged.",
        es: "Documentación vs realidad; escrutinio FDA Diversity Action Plan sobre si comunidades fueron realmente enganchadas.",
      },
      expectedLearnerResponse: {
        en: "Execute or amend SOP; log activities; QA spot-check; transparent sponsor update with CAPA metrics.",
        es: "Ejecutar o enmendar SOP; registrar actividades; control QA puntual; actualización transparente patrocinador con métricas CAPA.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M7.E3",
      description: {
        en: "Protocol stresses inclusion of specific under-represented groups; site has no tailored tactics or subgroup metrics aligned to FDA Diversity Action Plan intent.",
        es: "Protocolo enfatiza inclusión de grupos sub-representados específicos; sitio sin tácticas ni métricas por subgrupo alineadas a intención FDA Diversity Action Plan.",
      },
      risk: {
        en: "Homogeneous samples despite diverse catchment; failed inclusion objectives.",
        es: "Muestras homogéneas pese a captación diversa; objetivos de inclusión incumplidos.",
      },
      expectedLearnerResponse: {
        en: "Diversity workstream: barriers map, partners, language access, dashboard by subgroup for sponsor DAP reporting.",
        es: "Flujo diversidad: mapa barreras, socios, acceso idioma, tablero por subgrupo para reporte DAP patrocinador.",
      },
      relatedDimensions: ["O", "C"],
    },
    {
      errorId: "M7.E4",
      description: {
        en: "Staff distribute local-language flyers and WhatsApp blasts not aligned with IRB-approved English master; never submitted—breaks both IRB rules and NIH Recruitment traceability.",
        es: "Personal distribuye volantes en idioma local y masivos WhatsApp no alineados con máster inglés aprobado CEI; nunca enviados—rompe reglas CEI y trazabilidad NIH Recruitment.",
      },
      risk: {
        en: "Non-compliance; misleading or coercive phrasing possible; monitor major finding.",
        es: "Incumplimiento; posible redacción engañosa o coercitiva; hallazgo mayor monitor.",
      },
      expectedLearnerResponse: {
        en: "Halt unapproved materials; submit translations; single version control; retrain on FDA Diversity Action Plan ethics of outreach.",
        es: "Detener materiales no aprobados; enviar traducciones; control de versión único; reentrenar en ética FDA Diversity Action Plan del alcance.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M7.E5",
      description: {
        en: "False-correct pattern: long-term trial with no retention supports; dropout concentrated in low-income participants; sponsor simultaneously emails ‘double enrollment next quarter—be less strict in pre-screening’ with no protocol change.",
        es: "Patrón ‘parece correcto’: ensayo largo plazo sin apoyos de retención; deserción concentrada en participantes de bajos ingresos; patrocinador simultáneamente correo ‘duplicar inclusión próximo trimestre—ser menos estrictos en pre-screening’ sin cambio de protocolo.",
      },
      risk: {
        en: "Endpoint bias correlated with SES; GCP pressure; integrity failure if site complies with informal screening dilution.",
        es: "Sesgo de endpoint correlacionado con NSE; presión GCP; falla integridad si sitio cumple dilución informal de screening.",
      },
      expectedLearnerResponse: {
        en: "Transport/stipend policy per IRB; SES-stratified retention monitoring; refuse screening dilution; document sponsor pressure; escalate to PI/compliance; cite NIH Recruitment fairness obligations in memo.",
        es: "Política transporte/estipendio según CEI; monitorización retención estratificada NSE; rechazar dilución screening; documentar presión patrocinador; escalar a PI/cumplimiento; citar obligaciones equidad NIH Recruitment en memo.",
      },
      relatedDimensions: ["Q", "C", "O", "R"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M7.EX1",
      name: {
        en: "Recruitment & Retention Lab — DAP, NIH Recruitment, ethics, execution",
        es: "Laboratorio reclutamiento y retención — DAP, NIH Recruitment, ética, ejecución",
      },
      scenario: {
        en: "40 minutes before joint sponsor + internal QA review. Trial A: diabetes, high Hispanic population—EMR eligible estimates by language/neighborhood; enrollment by race/ethnicity, language, education; written DAP-aligned plan vs sparse outreach logs. Trial B: oncology—FDA Diversity Action Plan targets nearly met but skew to English-proficient, highly educated; dropout higher in low-income/older subgroup; draft ads and phone scripts. Sponsor email thread pressures faster accrual via ‘flexible’ pre-screening without amendment. Sources conflict by design.",
        es: "40 minutos antes de revisión conjunta patrocinador + QA interna. Ensayo A: diabetes, alta población hispana—estimados EMR por idioma/barrio; inclusión por raza/etnia, idioma, educación; plan alineado DAP vs logs de alcance escasos. Ensayo B: oncología—metas FDA Diversity Action Plan casi cumplidas pero sesgo a proficientes inglés, alta educación; mayor deserción subgrupo bajos ingresos/mayores; borradores anuncios y guiones. Hilo correo patrocinador presiona acelerar inclusión vía pre-screening ‘flexible’ sin enmienda. Fuentes chocan a propósito.",
      },
      inputs: [
        { inputId: "M7.IN1", label: { en: "Trial A: EMR + enrollment stratification + outreach logs", es: "Ensayo A: EMR + estratificación inclusión + logs alcance" }, inputKind: "table" },
        { inputId: "M7.IN2", label: { en: "Trial B: DAP metrics + dropout analysis", es: "Ensayo B: métricas DAP + análisis deserción" }, inputKind: "table" },
        { inputId: "M7.IN3", label: { en: "Recruitment materials & scripts (EN + translated)", es: "Materiales y guiones reclutamiento (EN + traducción)" }, inputKind: "bundle" },
        { inputId: "M7.IN4", label: { en: "Sponsor FDA Diversity Action Plan excerpt", es: "Extracto FDA Diversity Action Plan patrocinador" }, inputKind: "pdf" },
        { inputId: "M7.IN5", label: { en: "NIH Recruitment policy excerpt (site obligations analog)", es: "Extracto política NIH Recruitment (análogo obligaciones sitio)" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "Trial A: plan vs execution gaps; adequacy for Spanish-speaking access; how missing logs undermine NIH Recruitment accountability. Trial B: false diversity diagnosis; how differential dropout may bias endpoints; link to FDA Diversity Action Plan representativeness. Both: flag misleading/coercive/unapproved content; IRB revision plan. Address sponsor pre-screen pressure with GCP-consistent response. Top 3–4 risks with severity (minor/major/critical) and impact (patient/data/compliance). CAPA: channels, language/UX, retention supports, subgroup dashboards. Draft Recruitment & Retention Summary (D3): status vs goals, execution fixes, equity + data integrity impact—and explicitly name FDA Diversity Action Plan and NIH Recruitment in at least one substantive paragraph each (where applicable, tie citations to specific issues in the packet).",
        es: "Ensayo A: brechas plan vs ejecución; adecuación acceso hispanohablante; cómo logs faltantes socavan rendición de cuentas NIH Recruitment. Ensayo B: diagnóstico diversidad ficticia; cómo deserción diferencial puede sesgar endpoints; vínculo a representatividad FDA Diversity Action Plan. Ambos: señalar contenido engañoso/coercitivo/no aprobado; plan revisión CEI. Abordar presión pre-screen patrocinador con respuesta consistente GCP. Top 3–4 riesgos con severidad (menor/mayor/crítica) e impacto (paciente/datos/cumplimiento). CAPA: canales, idioma/UX, apoyos retención, tableros subgrupo. Borrador resumen reclutamiento y retención (D3): estado vs metas, arreglos ejecución, impacto equidad + integridad datos—y nombrar explícitamente FDA Diversity Action Plan y NIH Recruitment en al menos un párrafo sustantivo cada uno (donde aplique, enlazar citas a temas específicos del paquete).",
      },
      deliverables: [
        { deliverableId: "M7.D1", label: { en: "Trial A/B issue matrices", es: "Matrices hallazgos ensayo A/B" }, formatHint: "table" },
        { deliverableId: "M7.D2", label: { en: "Material fixes + IRB submission outline", es: "Arreglos materiales + esquema envío CEI" }, formatHint: "pdf" },
        {
          deliverableId: "M7.D3",
          label: {
            en: "Recruitment & Retention Summary memo (cite FDA Diversity Action Plan + NIH Recruitment)",
            es: "Memo resumen reclutamiento y retención (citar FDA Diversity Action Plan + NIH Recruitment)",
          },
          formatHint: "short_memo",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M7.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M7.C1",
        description: {
          en: "Differentiates headline diversity metrics from representativeness (language, SES, geography); links skewed accrual or differential dropout to endpoint bias; uses FDA Diversity Action Plan and NIH Recruitment framing when classifying issues.",
          es: "Diferencia métricas de diversidad de cabecera de representatividad (idioma, NSE, geografía); vincula reclutamiento sesgado o deserción diferencial a sesgo de endpoint; usa marco FDA Diversity Action Plan y NIH Recruitment al clasificar hallazgos.",
        },
        points: 35,
        mapsToDimensions: ["Q", "C"],
        failCondition: {
          en: "Critical fail if accepts superficial diversity percentages without examining subgroup spread, endpoint impact, or contradictions in the DAP narrative.",
          es: "Falla crítica si acepta porcentajes superficiales de diversidad sin examinar dispersión por subgrupo, impacto en endpoint o contradicciones en narrativa DAP.",
        },
      },
      {
        criterionId: "M7.C2",
        description: {
          en: "Exposes plan-execution gaps with evidence expectations (logs, events, partnerships) aligned to NIH Recruitment documentation; rejects passive physician-only recruitment when performance data show under-enrollment.",
          es: "Expone brechas plan-ejecución con expectativas de evidencia (logs, eventos, alianzas) alineadas a documentación NIH Recruitment; rechaza reclutamiento solo médico pasivo cuando datos muestran sub-inclusión.",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Critical fail if ignores clear documentation-vs-reality gaps (e.g., empty outreach logs vs written DAP tactics) or proposes only generic reminders.",
          es: "Falla crítica si ignora brechas claras documentación vs realidad (p. ej., logs alcance vacíos vs tácticas DAP escritas) o propone solo recordatorios genéricos.",
        },
      },
      {
        criterionId: "M7.C3",
        description: {
          en: "Flags unapproved/misleading recruitment content; balances retention supports with voluntariness—rejects excessive completion-contingent payments; defines IRB consultation path.",
          es: "Señala contenido de reclutamiento no aprobado/engañoso; equilibra apoyos de retención con voluntariedad—rechaza pagos contingentes excesivos a finalización; define vía consulta CEI.",
        },
        points: 25,
        mapsToDimensions: ["R", "C"],
        failCondition: {
          en: "Fail if proposes or endorses retention tactics that clearly compromise free withdrawal or bypass IRB for patient-facing copy.",
          es: "Falla si propone o respalda tácticas de retención que comprometen claramente retiro libre o evitan CEI para copia hacia paciente.",
        },
      },
      {
        criterionId: "M7.C4",
        description: {
          en: "Systemic CAPA + meeting summary: subgroup dashboards, documented response to sponsor screening pressure, ties to M5/M6/M3/M16; memo meets D3 citation requirement for FDA Diversity Action Plan and NIH Recruitment.",
          es: "CAPA sistémica + resumen reunión: tableros subgrupo, respuesta documentada a presión screening patrocinador, vínculos M5/M6/M3/M16; memo cumple requisito D3 de citar FDA Diversity Action Plan y NIH Recruitment.",
        },
        points: 15,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Critical fail if summary omits data-integrity consequences of accrual/dropout patterns, agrees to loosen screening without protocol basis, or omits required FDA Diversity Action Plan / NIH Recruitment citations in D3.",
          es: "Falla crítica si resumen omite consecuencias en integridad de datos de patrones inclusión/deserción, acepta aflojar screening sin base en protocolo u omite citas requeridas FDA Diversity Action Plan / NIH Recruitment en D3.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "O",
      weight: 0.32,
      aggregationKey: "recruitment_channels_execution_retention_operations",
    },
    {
      dimension: "Q",
      weight: 0.28,
      aggregationKey: "accrual_dropout_endpoint_bias_generalizability",
    },
    {
      dimension: "R",
      weight: 0.24,
      aggregationKey: "irb_approved_materials_fda_diversity_action_plan_compliance",
    },
    {
      dimension: "C",
      weight: 0.16,
      aggregationKey: "equity_voluntariness_nih_recruitment_fairness",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S1 tests traceable eligibility at screening—downstream of honest recruitment design under FDA Diversity Action Plan and NIH Recruitment documentation discipline. OSCE.S6 tests study-level commitment (M5); M7 executes the funnel so those commitments are not undermined by skewed accrual or coercive retention.",
      es: "OSCE.S1 prueba elegibilidad trazable en screening—aguas abajo de diseño honesto de reclutamiento bajo FDA Diversity Action Plan y disciplina documental NIH Recruitment. OSCE.S6 prueba compromiso a nivel estudio (M5); M7 ejecuta el embudo para que esos compromisos no se socaven por reclutamiento sesgado o retención coercitiva.",
    },
    stationIds: ["OSCE.S1", "OSCE.S6"],
  },
  tags: ["operational", "regulatory", "clinical_judgment", "audit_readiness", "bilingual", "flagship", "data_integrity"],
  bilingualNotes: {
    en: "Module anchors: FDA Diversity Action Plan (sponsor goals + site execution) and NIH Recruitment (inclusive outreach + auditable accrual narrative). Keep IRB, FDA, EMR, SOC, CBO, FQHC, SES, DAP as EN tokens where common.",
    es: "Anclajes del módulo: FDA Diversity Action Plan (metas patrocinador + ejecución sitio) y NIH Recruitment (alcance inclusivo + narrativa de inclusión auditable). Mantener IRB, FDA, EMR, SOC, CBO, FQHC, SES, DAP como tokens EN donde sea habitual.",
  },
};
