// src/curriculum-engine/data/modules/m7.ts

import type { Module } from "../../types";

/**
 * Module 7 — Recruitment & retention: diversity, ethics & data integrity at site level.
 * Guided practice: four cases (GP1–GP4) under the high-ambiguity exception — see IMPLEMENTATION_NOTES.moduleAuthoring.guidedPracticeCaseCount.
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
    en: "Design and execute a site-level recruitment and retention plan that is realistic and compliant (IRB/FDA), genuinely advances diversity beyond surface metrics, avoids coercive tactics, and explains how recruitment and retention patterns affect endpoints and data integrity.",
    es: "Diseñar y ejecutar un plan de reclutamiento y retención a nivel sitio realista y conforme (CEI/FDA), que avance diversidad genuina más allá de métricas superficiales, evite tácticas coercitivas y explique cómo patrones de reclutamiento y retención afectan endpoints e integridad de datos.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Explains that recruitment operationalizes feasibility (M5): channels, scripts, and workflows must match assumed patient pools or under-enrollment follows.",
          es: "Explica que el reclutamiento operativiza la viabilidad (M5): canales, guiones y flujos deben coincidir con pools de pacientes asumidos o sigue sub-reclutamiento.",
        },
        {
          en: "Describes how dropout—especially non-random and subgroup-patterned—can reduce power, bias primary endpoints, and harm generalizability.",
          es: "Describe cómo la deserción—especialmente no aleatoria y por subgrupos—puede reducir potencia, sesgar endpoints primarios y dañar generalizabilidad.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Maps barriers and facilitators for under-represented groups (language, trust, logistics, literacy) into IRB-approved materials, bilingual staff, community partnerships, and measurable channel tracking.",
          es: "Mapea barreras y facilitadores para grupos sub-representados (idioma, confianza, logística, alfabetización) hacia materiales aprobados por CEI, personal bilingüe, alianzas comunitarias y seguimiento medible por canal.",
        },
        {
          en: "Distinguishes ethical retention supports (flexibility, reminders, reasonable reimbursement) from coercive completion-contingent incentives that impair free withdrawal.",
          es: "Distingue apoyos éticos de retención (flexibilidad, recordatorios, reembolso razonable) de incentivos coercitivos contingentes a finalización que menoscaban retiro libre.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Flags ‘false diversity compliance’ when headline race/ethnicity targets mask narrow language, SES, or geography; proposes metrics and outreach that match disease burden in the catchment.",
          es: "Señala ‘cumplimiento de diversidad ficticio’ cuando metas de raza/etnia ocultan idioma, NSE o geografía estrechos; propone métricas y alcance alineados a carga de morbilidad en la zona de captación.",
        },
        {
          en: "Detects plan-vs-reality gaps in recruitment SOPs; resists sponsor pressure to relax pre-screening without protocol change; links skewed accrual or differential dropout to M2/M6/M16 risk.",
          es: "Detecta brechas plan vs realidad en SOPs de reclutamiento; resiste presión del patrocinador de relajar pre-screening sin cambio de protocolo; vincula reclutamiento sesgado o deserción diferencial a riesgo M2/M6/M16.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M7.L1",
      title: { en: "Core concepts — recruitment, retention, diversity", es: "Conceptos núcleo — reclutamiento, retención, diversidad" },
      lessonType: "reading",
      objective: {
        en: "Anchor feasibility execution, retention and validity, barriers/facilitators, numeric vs representativeness, IRB materials, coercion line, documentation reality.",
        es: "Anclar ejecución de viabilidad, retención y validez, barreras/facilitadores, numérico vs representatividad, materiales CEI, límite de coerción, realidad documentada.",
      },
      keyPoints: [
        {
          en: "Retention protects endpoints: non-random loss can bias conclusions, especially if socio-economic or severity subgroups drop out differentially.",
          es: "La retención protege endpoints: pérdida no aleatoria puede sesgar conclusiones, especialmente si subgrupos socioeconómicos o de gravedad desertan diferencialmente.",
        },
        {
          en: "Diversity targets without linguistic/SES/geographic spread can be misleading; representativeness matches catchment burden.",
          es: "Metas de diversidad sin dispersión lingüística/NSE/geográfica pueden engañar; la representatividad coincide con carga en la captación.",
        },
        {
          en: "All patient-facing ads and scripts need IRB approval; no cure promises or undue payment emphasis.",
          es: "Todos los anuncios y guiones hacia pacientes requieren aprobación CEI; sin promesas de cura ni énfasis indebido en pago.",
        },
        {
          en: "Plans on paper must show evidence of execution—events, contacts, metrics—or inspectors/sponsors find credibility gaps.",
          es: "Planes en papel deben mostrar evidencia de ejecución—eventos, contactos, métricas—o inspectores/patrocinadores hallan brechas de credibilidad.",
        },
      ],
    },
    {
      lessonId: "M7.L2",
      title: { en: "Real-world workflow — design through monitoring", es: "Flujo real — diseño hasta monitorización" },
      lessonType: "reading",
      objective: {
        en: "Follow feasibility-linked design, diversity integration, IRB materials, execution monitoring, retention, cross-module links.",
        es: "Seguir diseño ligado a viabilidad, integración diversidad, materiales CEI, monitorización de ejecución, retención, vínculos entre módulos.",
      },
      keyPoints: [
        {
          en: "Channels: in-clinic ID, EMR alerts, referrals, community clinics, social media, CBOs—track which yield enrolled subjects.",
          es: "Canales: ID en clínica, alertas EMR, referencias, clínicas comunitarias, redes, OCB—rastrear cuáles producen sujetos incluidos.",
        },
        {
          en: "Train staff: scripts, no therapeutic misconception in ads, research vs SOC clarity.",
          es: "Capacitar personal: guiones, sin misconception terapéutica en anuncios, claridad investigación vs SOC.",
        },
        {
          en: "Retention: patient-centric logistics; monitor dropout by subgroup; escalate disproportionate loss.",
          es: "Retención: logística centrada en paciente; monitorizar deserción por subgrupo; escalar pérdida desproporcionada.",
        },
        {
          en: "Mis-recruitment/mis-retention strains protocol adherence (M2), consent context (M6), feasibility math (M5), audits (M16).",
          es: "Reclutamiento/retención inadecuados tensionan adherencia al protocolo (M2), contexto de consentimiento (M6), matemática de viabilidad (M5), auditorías (M16).",
        },
      ],
    },
    {
      lessonId: "M7.L3",
      title: { en: "Red flags — recruitment & retention oversight", es: "Banderas rojas — supervisión reclutamiento y retención" },
      lessonType: "reading",
      objective: {
        en: "Recognize patterns that trigger sponsor, IRB, and FDA scrutiny.",
        es: "Reconocer patrones que disparan escrutinio patrocinador, CEI y FDA.",
      },
      keyPoints: [
        {
          en: "Passive single-channel reliance on overburdened physicians only.",
          es: "Dependencia pasiva de un solo canal en médicos sobrecargados.",
        },
        {
          en: "Community outreach described in SOPs with zero attendance or contact logs.",
          es: "Alcance comunitario descrito en SOPs con cero registros de asistencia o contacto.",
        },
        {
          en: "Unapproved translated or social posts diverging from IRB English master.",
          es: "Publicaciones traducidas o en redes no aprobadas divergentes del máster en inglés del CEI.",
        },
        {
          en: "Completion bonuses that subjects describe as ‘cannot afford to stop.’",
          es: "Bonos por finalización que sujetos describen como ‘no puedo permitirme parar’.",
        },
        {
          en: "Sponsor push to ‘loosen’ pre-screening without protocol amendment.",
          es: "Empuje del patrocinador para ‘aflojar’ pre-screening sin enmienda de protocolo.",
        },
      ],
    },
    {
      lessonId: "M7.GP1",
      title: {
        en: "Guided practice — GP-7.1: Hispanic/Latino patient-centric outreach (correct)",
        es: "Práctica guiada — GP-7.1: alcance centrado en paciente hispano/latino (correcto)",
      },
      lessonType: "case",
      objective: {
        en: "Type 2 diabetes trial in high Hispanic-prevalence community; historically low trial enrollment despite clinic volume.",
        es: "Ensayo diabetes tipo 2 en comunidad alta prevalencia hispana; históricamente baja inclusión en ensayos pese a volumen clínico.",
      },
      keyPoints: [
        {
          en: "Bilingual CRC at clinics; IRB-approved Spanish materials; CBO/faith/media partnerships; EMR flags with opt-in conversations.",
          es: "CRC bilingüe en clínicas; materiales español aprobados CEI; alianzas OCB/fe/medios; banderas EMR con conversaciones opt-in.",
        },
        {
          en: "Improves access, generalizability, alignment with FDA diversity expectations.",
          es: "Mejora acceso, generalizabilidad, alineación con expectativas FDA de diversidad.",
        },
      ],
    },
    {
      lessonId: "M7.GP2",
      title: {
        en: "Guided practice — GP-7.2: over-promising & unapproved ads (incorrect)",
        es: "Práctica guiada — GP-7.2: sobre-promesa y anuncios no aprobados (incorrecto)",
      },
      lessonType: "case",
      objective: {
        en: "WhatsApp draft (Spanish) claims cutting-edge treatment may cure cancer and best care free; sponsor wants post before IRB.",
        es: "Borrador WhatsApp (español) afirma tratamiento de vanguardia puede curar cáncer y mejor atención gratis; patrocinador quiere publicar antes del CEI.",
      },
      keyPoints: [
        {
          en: "Recruitment copy is part of consent ecosystem—IRB prior review required.",
          es: "Texto de reclutamiento es parte del ecosistema de consentimiento—revisión previa CEI requerida.",
        },
        {
          en: "Revise to balanced investigational language; submit for approval—do not disseminate as drafted.",
          es: "Revisar a lenguaje investigacional balanceado; enviar a aprobación—no difundir como está redactado.",
        },
      ],
    },
    {
      lessonId: "M7.GP3",
      title: {
        en: "Guided practice — GP-7.3: retention incentives vs coercion (ambiguous)",
        es: "Práctica guiada — GP-7.3: incentivos de retención vs coerción (ambiguo)",
      },
      lessonType: "case",
      objective: {
        en: "Neurology trial: sponsor proposes large bump in visit pay + completion bonus; low-income subjects say they cannot afford to stop.",
        es: "Ensayo neurología: patrocinador propone gran aumento pago por visita + bono finalización; sujetos de bajos ingresos dicen no poder permitirse parar.",
      },
      keyPoints: [
        {
          en: "Prefer per-visit time/burden reimbursement; avoid heavy completion contingency; IRB consult; reaffirm right to withdraw without forfeiting completed visits.",
          es: "Preferir reembolso por visita tiempo/carga; evitar contingencia fuerte a finalización; consulta CEI; reafirmar derecho a retirarse sin perder visitas completadas.",
        },
      ],
    },
    {
      lessonId: "M7.GP4",
      title: {
        en: "Guided practice — GP-7.4: false diversity compliance",
        es: "Práctica guiada — GP-7.4: cumplimiento de diversidad ficticio",
      },
      lessonType: "case",
      objective: {
        en: "Oncology: 30% Hispanic enrolled but nearly all English-proficient, college-educated, single suburban clinic; broader Hispanic population includes monolingual Spanish, lower education—not enrolling.",
        es: "Oncología: 30% hispanos incluidos pero casi todos inglés proficiente, universitarios, una clínica suburbana; población hispana amplia incluye español monolingüe, menor escolaridad—no incluyen.",
      },
      keyPoints: [
        {
          en: "Track language, education, geography—not ethnicity % alone; expand to FQHCs/community sites; flag sponsor as false compliance.",
          es: "Rastrear idioma, educación, geografía—no solo % etnia; expandir a FQHCs/sitios comunitarios; marcar al patrocinador cumplimiento ficticio.",
        },
      ],
    },
    {
      lessonId: "M7.L4",
      title: { en: "FDA / IRB / sponsor expectations", es: "Expectativas FDA / CEI / patrocinador" },
      lessonType: "reading",
      objective: {
        en: "Frame diversity action plans, material consistency, and documentation of real outreach.",
        es: "Enmarcar planes de acción de diversidad, consistencia de materiales y documentación de alcance real.",
      },
      keyPoints: [
        {
          en: "Expect probing of whether tactics reached intended populations, not only enrollment counts.",
          es: "Se espera explorar si tácticas alcanzaron poblaciones previstas, no solo conteos de inclusión.",
        },
        {
          en: "Differential dropout triggers questions on endpoint interpretability and equity.",
          es: "Deserción diferencial dispara preguntas sobre interpretabilidad del endpoint y equidad.",
        },
      ],
    },
    {
      lessonId: "M7.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate representativeness, execution evidence, voluntariness, endpoint bias, cross-module integration.",
        es: "Consolidar representatividad, evidencia de ejecución, voluntariedad, sesgo de endpoint, integración entre módulos.",
      },
      keyPoints: [
        {
          en: "Strong answers: name endpoint bias from accrual/dropout; IRB path for materials; CAPA with metrics by subgroup.",
          es: "Respuestas sólidas: nombrar sesgo de endpoint por reclutamiento/deserción; vía CEI para materiales; CAPA con métricas por subgrupo.",
        },
        {
          en: "Fail if: celebrate diversity % only; ignore plan-execution gap; accept coercive retention; silent on data integrity.",
          es: "Fallo si: celebrar solo % diversidad; ignorar brecha plan-ejecución; aceptar retención coercitiva; silencio sobre integridad de datos.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M7.E1",
      description: {
        en: "Recruitment depends only on busy physicians mentioning trials; no EMR alerts, outreach, or structured process.",
        es: "Reclutamiento depende solo de médicos ocupados mencionando ensayos; sin alertas EMR, alcance o proceso estructurado.",
      },
      risk: {
        en: "Under-recruitment; selection bias toward patients with more access or advocacy.",
        es: "Sub-reclutamiento; sesgo de selección hacia pacientes con más acceso o defensa.",
      },
      expectedLearnerResponse: {
        en: "Multi-channel plan with owners; EMR pre-screen lists; track referrals by source; physician time protected.",
        es: "Plan multi-canal con responsables; listas pre-screen EMR; rastrear referencias por fuente; tiempo médico protegido.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M7.E2",
      description: {
        en: "SOP describes community outreach and bilingual sessions; no events, attendance, or contact documentation exists.",
        es: "SOP describe alcance comunitario y sesiones bilingües; no hay eventos, asistencia ni documentación de contacto.",
      },
      risk: {
        en: "Documentation vs reality gap; diversity credibility loss.",
        es: "Brecha documentación vs realidad; pérdida credibilidad de diversidad.",
      },
      expectedLearnerResponse: {
        en: "Execute or amend SOP; log activities; QA spot-check; sponsor transparency.",
        es: "Ejecutar o enmendar SOP; registrar actividades; control QA puntual; transparencia patrocinador.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M7.E3",
      description: {
        en: "Protocol/sponsor stresses inclusion of specific under-represented groups; site has no tailored tactics or subgroup metrics.",
        es: "Protocolo/patrocinador enfatiza inclusión de grupos sub-representados específicos; sitio sin tácticas ni métricas por subgrupo.",
      },
      risk: {
        en: "Homogeneous samples despite diverse catchment; failed diversity objectives.",
        es: "Muestras homogéneas pese a captación diversa; objetivos de diversidad incumplidos.",
      },
      expectedLearnerResponse: {
        en: "Diversity workstream with barriers map, partners, language access, dashboard.",
        es: "Flujo de trabajo diversidad con mapa de barreras, socios, acceso idioma, tablero.",
      },
      relatedDimensions: ["O", "C"],
    },
    {
      errorId: "M7.E4",
      description: {
        en: "Staff distribute local-language flyers and WhatsApp blasts not aligned with IRB-approved English master; never submitted.",
        es: "Personal distribuye volantes en idioma local y masivos WhatsApp no alineados con máster inglés aprobado CEI; nunca enviados.",
      },
      risk: {
        en: "IRB non-compliance; misleading or coercive phrasing possible.",
        es: "Incumplimiento CEI; posible redacción engañosa o coercitiva.",
      },
      expectedLearnerResponse: {
        en: "Halt unapproved materials; submit translations; single version control.",
        es: "Detener materiales no aprobados; enviar traducciones; control de versión único.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M7.E5",
      description: {
        en: "Long-term trial: no retention supports; dropout concentrated in low-income participants lacking transport and time off.",
        es: "Ensayo largo plazo: sin apoyos de retención; deserción concentrada en participantes de bajos ingresos sin transporte y tiempo libre.",
      },
      risk: {
        en: "Endpoint bias if outcomes correlate with SES; external validity loss.",
        es: "Sesgo de endpoint si resultados correlacionan con NSE; pérdida validez externa.",
      },
      expectedLearnerResponse: {
        en: "Transport/stipend policy per IRB; flexible visits; monitor SES-stratified retention; statistical sensitivity planning with sponsor.",
        es: "Política transporte/estipendio según CEI; visitas flexibles; monitorizar retención estratificada NSE; planificación sensibilidad estadística con patrocinador.",
      },
      relatedDimensions: ["Q", "C", "O"],
    },
    {
      errorId: "M7.E6",
      description: {
        en: "Sponsor: ‘Double enrollment next quarter; be less strict in pre-screening; bring borderline patients.’ No protocol change.",
        es: "Patrocinador: ‘Duplicar inclusión próximo trimestre; ser menos estrictos en pre-screening; traer pacientes límite.’ Sin cambio de protocolo.",
      },
      risk: {
        en: "Screen-fail surge; ineligible enrollment risk; data integrity and GCP pressure.",
        es: "Ola screen-fail; riesgo inclusión inelegible; presión integridad datos y GCP.",
      },
      expectedLearnerResponse: {
        en: "Refuse to dilute criteria; document pressure; escalate to PI/compliance; sponsor amendment if eligibility truly changes.",
        es: "Rechazar diluir criterios; documentar presión; escalar a PI/cumplimiento; enmienda patrocinador si elegibilidad cambia de verdad.",
      },
      relatedDimensions: ["R", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M7.EX1",
      name: {
        en: "Recruitment & Retention Lab — diversity, ethics, data integrity, execution",
        es: "Laboratorio reclutamiento y retención — diversidad, ética, integridad, ejecución",
      },
      scenario: {
        en: "40 minutes before joint sponsor + internal QA review. Trial A: diabetes, high Hispanic population—EMR eligible estimates by language/neighborhood; enrollment by race/ethnicity, language, education; written plan vs evidence of execution. Trial B: oncology diversity action plan—targets nearly met but skew to English-proficient, highly educated; dropout higher in low-income/older subgroup; draft ads and phone scripts. FDA diversity and inspection mindset.",
        es: "40 minutos antes de revisión conjunta patrocinador + QA interna. Ensayo A: diabetes, alta población hispana—estimados EMR por idioma/barrio; inclusión por raza/etnia, idioma, educación; plan escrito vs evidencia ejecución. Ensayo B: oncología plan diversidad—metas casi cumplidas pero sesgo a proficientes inglés, alta educación; mayor deserción subgrupo bajos ingresos/mayores; borradores anuncios y guiones telefónicos. Mentalidad FDA diversidad e inspección.",
      },
      inputs: [
        { inputId: "M7.IN1", label: { en: "Trial A: EMR + enrollment stratification + plan evidence", es: "Ensayo A: EMR + estratificación inclusión + evidencia plan" }, inputKind: "table" },
        { inputId: "M7.IN2", label: { en: "Trial B: diversity metrics + dropout analysis", es: "Ensayo B: métricas diversidad + análisis deserción" }, inputKind: "table" },
        { inputId: "M7.IN3", label: { en: "Recruitment materials & scripts (EN + translated)", es: "Materiales y guiones reclutamiento (EN + traducción)" }, inputKind: "bundle" },
        { inputId: "M7.IN4", label: { en: "Sponsor diversity plan excerpt", es: "Extracto plan diversidad patrocinador" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "Trial A: plan vs execution gaps; adequacy for Spanish-speaking/Hispanic access. Trial B: false diversity diagnosis; how dropout may bias primary/secondary endpoints. Both: flag misleading/coercive/unapproved content; IRB revision plan. Top 3–4 risks with severity and patient/data/compliance. CAPA: channels, language/UX, retention supports, oversight metrics. Draft Recruitment & Retention Summary: status vs goals, false diversity and execution fixes, equity + data integrity impact.",
        es: "Ensayo A: brechas plan vs ejecución; adecuación acceso hispano/hablantes español. Ensayo B: diagnóstico diversidad ficticia; cómo deserción puede sesgar endpoints primarios/secundarios. Ambos: señalar contenido engañoso/coercitivo/no aprobado; plan revisión CEI. Top 3–4 riesgos con severidad y paciente/datos/cumplimiento. CAPA: canales, idioma/UX, apoyos retención, métricas supervisión. Borrador resumen reclutamiento y retención: estado vs metas, arreglos diversidad ficticia y ejecución, impacto equidad + integridad datos.",
      },
      deliverables: [
        { deliverableId: "M7.D1", label: { en: "Trial A/B issue matrices", es: "Matrices hallazgos ensayo A/B" }, formatHint: "table" },
        { deliverableId: "M7.D2", label: { en: "Material fixes + IRB submission outline", es: "Arreglos materiales + esquema envío CEI" }, formatHint: "pdf" },
        { deliverableId: "M7.D3", label: { en: "Recruitment & Retention Summary memo", es: "Memo resumen reclutamiento y retención" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M7.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M7.C1",
        description: {
          en: "Differentiates headline diversity metrics from representativeness (language, SES, geography); links skewed accrual or differential dropout to endpoint bias and generalizability.",
          es: "Diferencia métricas de diversidad de cabecera de representatividad (idioma, NSE, geografía); vincula reclutamiento sesgado o deserción diferencial a sesgo de endpoint y generalizabilidad.",
        },
        points: 35,
        mapsToDimensions: ["Q", "C"],
        failCondition: {
          en: "Accepts superficial diversity percentages without examining subgroup spread or endpoint impact.",
          es: "Acepta porcentajes superficiales de diversidad sin examinar dispersión por subgrupo o impacto en endpoint.",
        },
      },
      {
        criterionId: "M7.C2",
        description: {
          en: "Exposes plan-execution gaps with evidence expectations (logs, events, partnerships); rejects passive physician-only recruitment as sole strategy when packet shows under-performance.",
          es: "Expone brechas plan-ejecución con expectativas de evidencia (logs, eventos, alianzas); rechaza reclutamiento solo médico pasivo como única estrategia cuando el paquete muestra bajo rendimiento.",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Ignores clear documentation-vs-reality gaps or proposes only generic reminders with no channel/metric changes.",
          es: "Ignora brechas claras documentación vs realidad o propone solo recordatorios genéricos sin cambios de canal/métrica.",
        },
      },
      {
        criterionId: "M7.C3",
        description: {
          en: "Flags unapproved/misleading recruitment content; balances retention supports with voluntariness—rejects excessive completion-contingent payments; IRB consultation path.",
          es: "Señala contenido de reclutamiento no aprobado/engañoso; equilibra apoyos de retención con voluntariedad—rechaza pagos contingentes excesivos a finalización; vía consulta CEI.",
        },
        points: 25,
        mapsToDimensions: ["R", "C"],
        failCondition: {
          en: "Proposes or endorses retention tactics that clearly compromise free withdrawal or bypass IRB for patient-facing copy.",
          es: "Propone o respalda tácticas de retención que comprometen claramente retiro libre o evitan CEI para copia hacia paciente.",
        },
      },
      {
        criterionId: "M7.C4",
        description: {
          en: "System CAPA + meeting summary: subgroup dashboards, sponsor pressure response, ties to M5/M6/M3/M16; resists pre-screen dilution without amendment.",
          es: "CAPA sistema + resumen reunión: tableros subgrupo, respuesta presión patrocinador, vínculos M5/M6/M3/M16; resiste diluir pre-screen sin enmienda.",
        },
        points: 15,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Summary omits data-integrity consequences of accrual/dropout patterns or agrees to loosen screening per sponsor email without protocol basis.",
          es: "Resumen omite consecuencias en integridad de datos de patrones reclutamiento/deserción o acepta aflojar screening por correo patrocinador sin base en protocolo.",
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
      aggregationKey: "irb_approved_materials_fda_diversity_compliance",
    },
    {
      dimension: "C",
      weight: 0.16,
      aggregationKey: "equity_voluntariness_therapeutic_misconception_avoidance",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S1 tests who reaches screening with traceable eligibility decisions—downstream of honest recruitment channel design. OSCE.S6 tests study-level commitment (M5); M7 executes the funnel with diversity and integrity so those commitments are not undermined by skewed accrual or coercive retention.",
      es: "OSCE.S1 prueba quién llega a screening con decisiones de elegibilidad trazables—aguas abajo de un diseño honesto de canales de reclutamiento. OSCE.S6 prueba compromiso a nivel estudio (M5); M7 ejecuta el embudo con diversidad e integridad para que esos compromisos no se socaven por reclutamiento sesgado o retención coercitiva.",
    },
    stationIds: ["OSCE.S1", "OSCE.S6"],
  },
  tags: ["operational", "regulatory", "clinical_judgment", "audit_readiness", "bilingual", "flagship", "data_integrity"],
  bilingualNotes: {
    en: "Keep IRB, FDA, EMR, SOC, CBO, FQHC, SES, WhatsApp as EN tokens where common in site practice.",
    es: "Mantener IRB, FDA, EMR, SOC, CBO, FQHC, SES, WhatsApp como tokens EN donde sea habitual en práctica del sitio.",
  },
};
