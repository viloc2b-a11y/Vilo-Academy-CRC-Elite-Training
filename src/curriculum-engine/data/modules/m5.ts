// src/curriculum-engine/data/modules/m5.ts

import type { Module } from "../../types";

/**
 * Module 5 — Study feasibility & budgeting: site viability, sponsor pressure, long-term reputation.
 *
 * PROMPT 1 — BASE OPERATIVO (Modules 1–10): eight ordered lesson sections (overview → core →
 * three guided cases → practical exercise → scoring → answer framework → cross-links → failure impact).
 *
 * Operational / Core CRC Skills + CRC Elite: dual feasibility anchors for this module—
 * MHRA Feasibility (UK regulatory lens: documented site assessment, proportionate controls, GCP-adequate
 * resources before commitment) and ACRP Feasibility (operational/site readiness: patient pool, staffing,
 * budget realism, portfolio discipline). Rubric 100 = sum(criteria.points); passing 94.
 */
export const MODULE_M5: Module = {
  id: "M5",
  slug: "feasibility-budgeting-site-viability",
  internalName: "mod_05_feasibility_budget_crc",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "C", "Q"],
  title: {
    en: "Module 5 — Study Feasibility & Budgeting: Site Viability, Sponsor Pressure & Long-Term Reputation",
    es: "Módulo 5 — Viabilidad y presupuesto del estudio: viabilidad del sitio, presión del patrocinador y reputación a largo plazo",
  },
  objective: {
    en: "Critically assess feasibility (patients, staff, facilities, time) using MHRA Feasibility expectations (documented rationale, GCP-adequate resources, proportionate quality before commitment) and ACRP Feasibility operational discipline (patient pool, CRC capacity, realistic budgets); surface hidden operational costs; resist sponsor pressure that threatens quality; balance financial incentives against GCP and patient safety; defend budget and go/no-go decisions to protect long-term site reputation and compliance.",
    es: "Valorar críticamente la viabilidad (pacientes, personal, instalaciones, tiempo) con expectativas de MHRA Feasibility (justificación documentada, recursos adecuados GCP, calidad proporcionada antes del compromiso) y disciplina operativa de ACRP Feasibility (pool de pacientes, capacidad CRC, presupuestos realistas); revelar costos operativos ocultos; resistir presión del patrocinador que amenace la calidad; equilibrar incentivos financieros con GCP y seguridad del paciente; defender presupuesto y decisiones sí/no para proteger reputación y cumplimiento del sitio a largo plazo.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines true feasibility as whether the site can safely and reliably execute the protocol—not merely activation or CTA signature; aligns triage with MHRA Feasibility (evidence-backed assessment) and ACRP Feasibility (operational readiness checklist mindset).",
          es: "Define viabilidad real como si el sitio puede ejecutar el protocolo de forma segura y fiable—no solo activación o firma de CTA; alinea triage con MHRA Feasibility (evaluación con evidencia) y ACRP Feasibility (mentalidad de checklist de preparación operativa).",
        },
        {
          en: "Lists budget building blocks (start-up, per-visit, screen-fail, pass-throughs, overhead) and common hidden cost centers (queries, data cleaning, safety follow-up, re-consent, audit/inspection prep).",
          es: "Lista bloques de presupuesto (arranque, por visita, screen-fail, reembolsos, overhead) y centros de costo ocultos frecuentes (queries, limpieza de datos, seguimiento seguridad, re-consentimiento, prep auditoría/inspección).",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Runs feasibility triage: EMR/chart-based patient volume, staff CRC:trial load and PI time, facilities, competing trials; builds time-and-motion estimates per visit; reconciles sponsor offer to internal costs and FMV benchmarks—documenting the analysis as MHRA Feasibility would expect and ACRP Feasibility operational standards support.",
          es: "Ejecuta triage de viabilidad: volumen vía EMR/historia, carga CRC:ensayos y tiempo PI, instalaciones, competencia; construye tiempo-movimiento por visita; concilia oferta patrocinador con costos internos y FMV—documentando el análisis como espera MHRA Feasibility y apoyan estándares operativos ACRP Feasibility.",
        },
        {
          en: "Recognizes fast-start and deadline pressure tactics; maintains data-driven negotiation positions and documents go/no-go rationale for leadership and QA.",
          es: "Reconoce tácticas de arranque rápido y plazos; mantiene posiciones de negociación basadas en datos y documenta razonamiento sí/no para dirección y QA.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Chooses GCP, adequate resources (ICH E6(R3)), and patient safety over revenue when they conflict; articulates reputational and monitoring-intensity risks of chronic over-promise.",
          es: "Elige GCP, recursos adecuados (ICH E6(R3)) y seguridad del paciente sobre ingresos cuando chocan; articula riesgos reputacionales y de intensidad de monitoría del sobre-promiso crónico.",
        },
        {
          en: "Proposes system-level improvements: standard feasibility checklist (MHRA + ACRP themes), mandatory EMR analysis, budget review including hidden costs, actual-vs-budget learning loop—linked to strain on M2/M3/M4/M8/M9 when under-resourced.",
          es: "Propone mejoras a nivel sistema: checklist estándar de viabilidad (temas MHRA + ACRP), análisis EMR obligatorio, revisión de presupuesto con costos ocultos, ciclo real vs presupuesto—vinculado a tensión en M2/M3/M4/M8/M9 cuando hay sub-financiamiento.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M5.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the bar: feasibility is a GCP and business integrity decision—grounded in MHRA Feasibility and ACRP Feasibility, not optimism alone.",
        es: "Establecer la barra: la viabilidad es decisión de GCP e integridad de negocio—fundada en MHRA Feasibility y ACRP Feasibility, no solo optimismo.",
      },
      keyPoints: [
        {
          en: "Graded on evidence-backed go/no-go, hidden-cost honesty, pressure resistance, and memo quality that leadership/QA could file.",
          es: "Se te califica por sí/no basado en evidencia, honestidad en costos ocultos, resistencia a presión y calidad de memo que dirección/QA podría archivar.",
        },
        {
          en: "Outputs: per-study feasibility + cost-gap matrix; recommendations + negotiation talking points; leadership/QA decision memo citing MHRA Feasibility and ACRP Feasibility where applicable.",
          es: "Salidas: viabilidad por estudio + matriz brecha costos; recomendaciones + puntos de negociación; memo dirección/QA citando MHRA Feasibility y ACRP Feasibility cuando aplique.",
        },
        {
          en: "Technical tokens remain EN (E6(R3), GCP, FMV, CTA, EMR, PRO, EDC, SAE, DM, QA, MHRA, ACRP).",
          es: "Tokens técnicos permanecen en inglés (E6(R3), GCP, FMV, CTA, EMR, PRO, EDC, SAE, DM, QA, MHRA, ACRP).",
        },
      ],
    },
    {
      lessonId: "M5.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 28,
      objective: {
        en: "Anchor MHRA Feasibility, ACRP Feasibility, E6(R3) adequate resources, budget anatomy, FMV, sponsor pressure, and reputation.",
        es: "Anclar MHRA Feasibility, ACRP Feasibility, recursos adecuados E6(R3), anatomía del presupuesto, FMV, presión del patrocinador y reputación.",
      },
      keyPoints: [
        {
          en: "MHRA Feasibility: treat feasibility as part of proportionate, risk-based GCP—document how the site can meet protocol demands before committing; inadequate resourcing is a compliance risk, not only a business risk.",
          es: "MHRA Feasibility: tratar la viabilidad como parte de GCP proporcional y basado en riesgo—documentar cómo el sitio puede cumplir demandas del protocolo antes de comprometerse; sub-recursos es riesgo de cumplimiento, no solo de negocio.",
        },
        {
          en: "ACRP Feasibility: operational readiness—patient pool verification, CRC/staff capacity, realistic visit workflows, budget lines for data work and follow-up; decline or renegotiate when readiness gaps are structural.",
          es: "ACRP Feasibility: preparación operativa—verificación de pool, capacidad CRC/personal, flujos de visita realistas, partidas presupuestarias para trabajo de datos y seguimiento; declinar o renegociar cuando las brechas son estructurales.",
        },
        {
          en: "Feasibility answers ‘should we?’—patients, staff, facilities, time—not only ‘can we sign?’",
          es: "La viabilidad responde ‘¿debemos?’—pacientes, personal, instalaciones, tiempo—no solo ‘¿podemos firmar?’",
        },
        {
          en: "E6(R3): investigators need sufficient time, qualified staff, adequate facilities—under-resourcing is GCP failure.",
          es: "E6(R3): investigadores necesitan tiempo suficiente, personal calificado, instalaciones adecuadas—falta de recursos es falla GCP.",
        },
        {
          en: "Hidden costs: query resolution, PRO/EDC workload, safety calls, re-consent, amendments, inspection prep—ACRP Feasibility budgets must include them; MHRA Feasibility documentation should show they were considered.",
          es: "Costos ocultos: queries, carga PRO/EDC, llamadas seguridad, re-consentimiento, enmiendas, prep inspección—presupuestos ACRP Feasibility deben incluirlos; documentación MHRA Feasibility debe mostrar que se consideraron.",
        },
        {
          en: "Real-world workflow — Triage: indication fit, patient pool, complexity, portfolio overlap; EMR queries and chart review (both frameworks).",
          es: "Flujo real — Triage: indicación, pool, complejidad, solapamiento cartera; consultas EMR y revisión de historias (ambos marcos).",
        },
        {
          en: "Real-world workflow — Budget: time-and-motion; start-up, re-consent, follow-up, data cleaning, audit prep; compare to offer and FMV.",
          es: "Flujo real — Presupuesto: tiempo-movimiento; arranque, re-consentimiento, seguimiento, limpieza datos, prep auditoría; comparar con oferta y FMV.",
        },
        {
          en: "Real-world workflow — Negotiation: resist unsustainable terms; document positions; escalate when pressure conflicts with adequate resources.",
          es: "Flujo real — Negociación: resistir términos insostenibles; documentar posiciones; escalar cuando presión choca con recursos adecuados.",
        },
        {
          en: "Real-world workflow — Post-activation: actual effort vs budget; early detection of query/safety cost explosions; renegotiate when justified.",
          es: "Flujo real — Post-activación: esfuerzo real vs presupuesto; detección temprana de explosión costos queries/seguridad; renegociar cuando proceda.",
        },
        {
          en: "Error-prone 1 — Optimism-based feasibility without EMR or capacity math.",
          es: "Propensa 1 — Viabilidad por optimismo sin EMR o matemática de capacidad.",
        },
        {
          en: "Error-prone 2 — CTA missing start-up, close-out, amendment, or re-consent compensation.",
          es: "Propensa 2 — CTA sin compensación por arranque, cierre, enmienda o re-consentimiento.",
        },
        {
          en: "Error-prone 3 — Scope creep: new EDC, query storms, unpaid reconciliation meetings.",
          es: "Propensa 3 — Creep de alcance: nuevo EDC, tormentas queries, reuniones reconciliación no pagadas.",
        },
        {
          en: "Error-prone 4 — Revenue-driven acceptance with unsafe scheduling or observation shortcuts.",
          es: "Propensa 4 — Aceptación por ingresos con agenda insegura o atajos en observación.",
        },
        {
          en: "Error-prone 5 — No actual-vs-budget review—chronic negative margins normalized.",
          es: "Propensa 5 — Sin revisión real vs presupuesto—márgenes negativos crónicos normalizados.",
        },
        {
          en: "Under-resourced trials strain M3 oversight, M2 deviations, M4 logs/ALCOA+, M9 IP, M8 visit windows.",
          es: "Ensayos sub-financiados tensionan supervisión M3, desviaciones M2, logs/ALCOA+ M4, IP M9, ventanas M8.",
        },
      ],
    },
    {
      lessonId: "M5.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Phase III oncology: 30 subjects / 18 months; EMR ~4 eligible/year; fast-start pressure; others committed.",
        es: "Oncología fase III: 30 sujetos / 18 meses; EMR ~4 elegibles/año; presión fast-start; otros comprometidos.",
      },
      keyPoints: [
        {
          en: "What CRC sees: sponsor accrual target vs EMR math; deadline pressure.",
          es: "Qué ve el CRC: meta patrocinador vs matemática EMR; presión de plazo.",
        },
        {
          en: "How to think: MHRA Feasibility demands rational basis; ACRP Feasibility requires capacity-grounded enrollment planning.",
          es: "Cómo pensar: MHRA Feasibility exige base racional; ACRP Feasibility requiere plan de inclusión anclado en capacidad.",
        },
        {
          en: "Decision: EMR-backed estimate; realistic capped target or decline; document internal analysis for leadership.",
          es: "Decisión: estimación respaldada en EMR; objetivo limitado realista o declinar; documentar análisis interno para dirección.",
        },
        {
          en: "Why it matters: over-commitment destroys sponsor trust and invites inspection questions on adequate resources.",
          es: "Por qué importa: sobre-compromiso destruye confianza patrocinador e invita preguntas de inspección sobre recursos adecuados.",
        },
      ],
    },
    {
      lessonId: "M5.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Cardiology: $250/visit, no DM line, $0 screen-fails; heavy PRO/EDC, high query risk, unbudgeted phone follow-up.",
        es: "Cardiología: 250 USD/visita, sin partida DM, 0 screen-fails; PRO/EDC pesado, alto riesgo queries, seguimiento telefónico no presupuestado.",
      },
      keyPoints: [
        {
          en: "Incorrect move: sign CTA as-is to ‘keep sponsor happy’; assume CRC will absorb unpaid data work.",
          es: "Movimiento incorrecto: firmar CTA tal cual para ‘mantener feliz al patrocinador’; asumir que CRC absorberá trabajo de datos no pagado.",
        },
        {
          en: "Correct move: map downstream data work; negotiate DM fee, screen-fail, follow-up line, or decline—document ACRP Feasibility cost realism and MHRA Feasibility resourcing rationale.",
          es: "Movimiento correcto: mapear trabajo de datos aguas abajo; negociar tarifa DM, screen-fail, partida seguimiento o declinar—documentar realismo de costos ACRP Feasibility y justificación de recursos MHRA Feasibility.",
        },
        {
          en: "Why mistakes happen: fear of losing portfolio slot; underestimating query/PRO load.",
          es: "Por qué ocurre: miedo a perder cupo en cartera; subestimar carga PRO/query.",
        },
        {
          en: "Why it matters: overburdened CRCs drive M4/M8/M2 integrity and deviation pressure.",
          es: "Por qué importa: CRCs sobrecargados disparan presión de integridad y desviaciones M4/M8/M2.",
        },
      ],
    },
    {
      lessonId: "M5.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Dermatology: generous fees; restrictive I/E; long visits; CRC near capacity; PI: hire later.",
        es: "Dermatología: honorarios generosos; I/E restrictivas; visitas largas; CRC cerca del límite; PI: contratar después.",
      },
      keyPoints: [
        {
          en: "What CRC sees: attractive revenue vs structural staffing gap; ‘hire later’ is post-hoc resourcing.",
          es: "Qué ve el CRC: ingreso atractivo vs brecha estructural de personal; ‘contratar después’ es recurso a posteriori.",
        },
        {
          en: "How to think: MHRA Feasibility—adequate resources must exist before patients enter; ACRP Feasibility—burnout is a predictable operational failure mode.",
          es: "Cómo pensar: MHRA Feasibility—recursos adecuados antes de que entren pacientes; ACRP Feasibility—burnout es modo de falla operativa predecible.",
        },
        {
          en: "Decision: decline/defer; or accept only with pre-activation hires, lower target, or extended timeline in writing.",
          es: "Decisión: declinar/diferir; o aceptar solo con contrataciones pre-activación, objetivo menor o cronograma extendido por escrito.",
        },
        {
          en: "Why it matters: money cannot replace adequate resources before enrollment; shortcuts become patient-safety and data-quality risk.",
          es: "Por qué importa: el dinero no sustituye recursos antes de inclusión; atajos se vuelven riesgo de seguridad y calidad de datos.",
        },
      ],
    },
    {
      lessonId: "M5.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 40,
      objective: {
        en: "Run the Feasibility & Budget Lab once under the 40-minute time box and produce all deliverables.",
        es: "Ejecutar el Laboratorio una vez bajo 40 minutos y producir todas las salidas.",
      },
      keyPoints: [
        {
          en: "Time box: 40 minutes. Memo must explicitly tie recommendations to MHRA Feasibility and ACRP Feasibility themes (documented rationale + operational readiness).",
          es: "Límite: 40 minutos. El memo debe vincular explícitamente recomendaciones a temas MHRA Feasibility y ACRP Feasibility (justificación documentada + preparación operativa).",
        },
        {
          en: "Deliverables: matrix (D1), talking points (D2), leadership/QA memo (D3).",
          es: "Entregables: matriz (D1), puntos de negociación (D2), memo dirección/QA (D3).",
        },
      ],
    },
    {
      lessonId: "M5.S5",
      title: { en: "5) Scoring matrix & QA / inspection lens", es: "5) Matriz de puntuación y lente QA/inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Make pass/fail transparent; link feasibility documentation to regulator and QA scrutiny.",
        es: "Hacer transparente aprobado/reprobado; vincular documentación de viabilidad a escrutinio regulador y QA.",
      },
      keyPoints: [
        {
          en: "Binary grading: rubric M5.RUB1 (100 points, pass ≥94); critical fails on accepting non-viable studies for pressure/revenue alone.",
          es: "Calificación binaria: rúbrica M5.RUB1 (100 puntos, aprobar ≥94); fallas críticas al aceptar estudios no viables solo por presión/ingreso.",
        },
        {
          en: "MHRA Feasibility lens: can you show documented assessment and proportionate controls before commitment?",
          es: "Lente MHRA Feasibility: ¿puedes mostrar evaluación documentada y controles proporcionados antes del compromiso?",
        },
        {
          en: "ACRP Feasibility lens: are staffing, patient pool, and budget lines credible to an experienced CRC manager?",
          es: "Lente ACRP Feasibility: ¿son creíbles personal, pool y partidas para un gestor CRC experimentado?",
        },
        {
          en: "Financial incentives that drive unsafe throughput are inspection- and QA-sensitive.",
          es: "Incentivos que impulsan flujo inseguro son sensibles en inspección y QA.",
        },
      ],
    },
    {
      lessonId: "M5.S6",
      title: { en: "6) Answer framework & fail conditions", es: "6) Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Consolidate pressure resistance, hidden costs, ethics over revenue, reputation, and cross-module impacts.",
        es: "Consolidar resistencia a presión, costos ocultos, ética sobre ingresos, reputación e impactos entre módulos.",
      },
      keyPoints: [
        {
          en: "Elite format: (1) Feasibility facts + MHRA Feasibility / ACRP Feasibility hooks, (2) Cost gaps + hidden work, (3) Negotiation position + system CAPA + M2–M9 strain link.",
          es: "Formato élite: (1) Hechos viabilidad + ganchos MHRA Feasibility / ACRP Feasibility, (2) Brechas costo + trabajo oculto, (3) Posición negociación + CAPA sistema + vínculo tensión M2–M9.",
        },
        {
          en: "Strong answers: name pressure tactics; quantify hidden work; propose process CAPA; link to M2–M4, M8, M9.",
          es: "Respuestas sólidas: nombrar tácticas de presión; cuantificar trabajo oculto; proponer CAPA de proceso; vincular a M2–M4, M8, M9.",
        },
        {
          en: "Fail if: accept clearly non-feasible study for money or pressure alone; ignore obvious hidden costs; omit MHRA Feasibility / ACRP Feasibility basis when the memo required it.",
          es: "Fallo si: acepta estudio claramente no viable solo por dinero o presión; ignora costos ocultos obvios; omite base MHRA Feasibility / ACRP Feasibility cuando el memo lo exigía.",
        },
      ],
    },
    {
      lessonId: "M5.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect under-resourced feasibility decisions to execution modules.",
        es: "Conectar decisiones de viabilidad sub-financiadas con módulos de ejecución.",
      },
      keyPoints: [
        {
          en: "M2: protocol complexity and amendment load must be funded in feasibility—not discovered at activation.",
          es: "M2: complejidad de protocolo y carga de enmiendas deben financiarse en viabilidad—no descubrirse en activación.",
        },
        {
          en: "M3: adequate PI/CRC oversight time is a feasibility input, not a post-hoc wish.",
          es: "M3: tiempo adecuado de supervisión PI/CRC es insumo de viabilidad, no deseo a posteriori.",
        },
        {
          en: "M4: log and ALCOA+ workload scales with study intensity—budget it.",
          es: "M4: carga de logs y ALCOA+ escala con intensidad del estudio—presupuestarla.",
        },
        {
          en: "M8/M9: visit windows, screening funnel, IP operations—feasibility must prove capacity.",
          es: "M8/M9: ventanas visita, embudo screening, operación IP—viabilidad debe probar capacidad.",
        },
        {
          en: "Capstone: OSCE.S6 anchors study-level feasibility vs OSCE.S1 subject-level eligibility trace.",
          es: "Capstone: OSCE.S6 ancla viabilidad a nivel estudio vs OSCE.S1 trazabilidad elegibilidad a nivel sujeto.",
        },
      ],
    },
    {
      lessonId: "M5.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit: finances, quality, patients, reputation, pipeline.",
        es: "Hacer explícitas consecuencias: finanzas, calidad, pacientes, reputación, tubería.",
      },
      keyPoints: [
        {
          en: "Financial: negative margins, unfunded amendments, scope creep subsidies.",
          es: "Financiero: márgenes negativos, enmiendas no financiadas, subsidio de creep de alcance.",
        },
        {
          en: "Quality & patient: rushed visits, missed assessments, under-reported deviations when teams are stretched.",
          es: "Calidad y paciente: visitas apuradas, evaluaciones omitidas, desviaciones sub-reportadas con equipos estirados.",
        },
        {
          en: "Regulatory/QA: inadequate resources narrative; incentive structures that reward unsafe throughput.",
          es: "Regulatorio/QA: narrativa de recursos inadecuados; incentivos que premian flujo inseguro.",
        },
        {
          en: "Reputation: under-recruit, late data, ‘high-maintenance site’ labels—lost MHRA Feasibility / ACRP Feasibility credibility with sponsors.",
          es: "Reputación: bajo reclutamiento, datos tardíos, etiquetas ‘sitio alto mantenimiento’—pérdida de credibilidad MHRA Feasibility / ACRP Feasibility con patrocinadores.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M5.E1",
      description: {
        en: "Sponsor names site ‘key fast-start partner’; 48-hour commitment demand. Site agrees without EMR analysis or staff capacity assessment—violates MHRA Feasibility documented-basis and ACRP Feasibility readiness.",
        es: "Patrocinador nombra sitio ‘socio clave fast-start’; exige compromiso en 48 h. Sitio acepta sin análisis EMR ni capacidad—viola base documentada MHRA Feasibility y preparación ACRP Feasibility.",
      },
      risk: {
        en: "Over-promise, under-deliver; under-recruitment, quality issues, reputational damage.",
        es: "Sobre-promiso, bajo cumplimiento; bajo reclutamiento, problemas de calidad, daño reputacional.",
      },
      expectedLearnerResponse: {
        en: "Pause; complete feasibility packet; negotiate timeline; decline or cap enrollment if math fails; document decision with MHRA Feasibility / ACRP Feasibility alignment.",
        es: "Pausa; completar paquete; negociar plazo; declinar o limitar inclusión si falla la matemática; documentar decisión alineada a MHRA Feasibility / ACRP Feasibility.",
      },
      relatedDimensions: ["R", "O", "Q"],
    },
    {
      errorId: "M5.E2",
      description: {
        en: "CTA signed without start-up, close-out, or amendment/re-consent lines; later amendments force heavy uncompensated re-consent and retraining.",
        es: "CTA firmado sin partidas arranque, cierre o enmienda/re-consentimiento; enmiendas posteriores imponen re-consentimiento y reentrenamiento pesados sin compensar.",
      },
      risk: {
        en: "Financial loss; pressure to skip quality steps; reduced appetite for future trials.",
        es: "Pérdida financiera; presión para omitir pasos de calidad; menor apetito por ensayos futuros.",
      },
      expectedLearnerResponse: {
        en: "Negotiate amendment budgets; SOP for CTA minimums; never assume ‘we’ll fix in amendment’ without fees.",
        es: "Negociar presupuestos de enmienda; SOP de mínimos en CTA; no asumir ‘arreglamos en enmienda’ sin honorarios.",
      },
      relatedDimensions: ["O", "R"],
    },
    {
      errorId: "M5.E3",
      description: {
        en: "‘Simple’ observational study; mid-trial new EDC; query volume 4×; unpaid clean-up calls and reconciliation meetings.",
        es: "Estudio observacional ‘simple’; nuevo EDC a mitad; volumen de queries ×4; llamadas de limpieza y reuniones reconciliación no pagadas.",
      },
      risk: {
        en: "CRC time diverted; error risk; site subsidizes sponsor complexity.",
        es: "Tiempo CRC desviado; riesgo de error; sitio subsidia complejidad del patrocinador.",
      },
      expectedLearnerResponse: {
        en: "Change-order or budget amendment; scope letter; CAPA on capacity; sponsor pays for system-induced workload.",
        es: "Orden de cambio o enmienda presupuestaria; carta de alcance; CAPA de capacidad; patrocinador paga carga inducida por sistema.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M5.E4",
      description: {
        en: "High-paying rare disease trial; complex procedures; site underestimates staffing; double-booked visits and shortened observations to hit targets.",
        es: "Ensayo raro bien pagado; procedimientos complejos; sitio subestima personal; visitas doble agendadas y observaciones acortadas para cumplir metas.",
      },
      risk: {
        en: "Patient safety shortcuts; incomplete assessments; under-reported deviations; incentive scrutiny.",
        es: "Atajos de seguridad; evaluaciones incompletas; desviaciones sub-reportadas; escrutinio de incentivos.",
      },
      expectedLearnerResponse: {
        en: "Stop unsafe scheduling; real capacity plan; disclose risk to leadership; adjust targets or decline revenue-at-risk design.",
        es: "Detener agenda insegura; plan real de capacidad; divulgar riesgo a dirección; ajustar metas o declinar diseño ingreso-a-riesgo.",
      },
      relatedDimensions: ["C", "R", "Q"],
    },
    {
      errorId: "M5.E5",
      description: {
        en: "Site repeatedly ends trials negative margin and exhausted staff; no formal actual-vs-budget or ACRP Feasibility lessons-learned loop; leadership cannot demonstrate proportionate improvement consistent with MHRA Feasibility expectations.",
        es: "Sitio termina ensayos repetidamente con margen negativo y personal agotado; sin ciclo formal real vs presupuesto o lecciones aprendidas ACRP Feasibility; dirección no puede demostrar mejora proporcionada alineada a expectativas MHRA Feasibility.",
      },
      risk: {
        en: "Chronic underfunding normalized; burnout and persistent quality issues.",
        es: "Sub-financiamiento crónico normalizado; burnout y problemas de calidad persistentes.",
      },
      expectedLearnerResponse: {
        en: "Institute post-trial financial review; update feasibility templates (MHRA + ACRP themes); executive dashboard on CRC FTE vs portfolio.",
        es: "Instituir revisión financiera post-estudio; actualizar plantillas de viabilidad (temas MHRA + ACRP); tablero ejecutivo FTE CRC vs cartera.",
      },
      relatedDimensions: ["O", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M5.EX1",
      name: {
        en: "Feasibility & Budget Lab — sponsor pressure, hidden costs, reputation",
        es: "Laboratorio viabilidad y presupuesto — presión, costos ocultos, reputación",
      },
      scenario: {
        en: "40 minutes before joint meeting with PI and site leadership. Study X: complex oncology—high fees, strict I/E, low eligible volume, intensive procedures, high AE/SAE workload. Study Y: moderate cardiology—moderate fees, PROs and high expected queries, long-term follow-up calls not budgeted. Inputs: EMR feasibility and historical accrual for both; draft sponsor budgets (per-visit, start-up, screen-fail, no explicit DM); internal cost rates and overhead. Email: fast-start priority, others agreed, commitment by Friday with minimal changes. QA/inspector may later ask if adequate resources and rational basis existed—frame using MHRA Feasibility (documented, proportionate GCP basis) and ACRP Feasibility (operational readiness and credible budget).",
        es: "40 minutos antes de reunión con PI y dirección. Estudio X: oncología compleja—honorarios altos, I/E estrictas, bajo volumen elegible, procedimientos intensos, alta carga AE/SAE. Estudio Y: cardiología moderada—honorarios moderados, PROs y queries esperadas altas, llamadas seguimiento largo plazo no presupuestadas. Insumos: viabilidad EMR y reclutamiento histórico; borradores patrocinador (por visita, arranque, screen-fail, sin DM explícito); tarifas internas y overhead. Correo: prioridad fast-start, otros acordaron, compromiso viernes con cambios mínimos. QA/inspector podría preguntar si hubo recursos adecuados y base racional—enmarcar con MHRA Feasibility (base GCP documentada y proporcionada) y ACRP Feasibility (preparación operativa y presupuesto creíble).",
      },
      inputs: [
        { inputId: "M5.IN1", label: { en: "Study X & Y synopsis + SoA complexity notes", es: "Sinopsis X e Y + notas complejidad SoA" }, inputKind: "pdf" },
        { inputId: "M5.IN2", label: { en: "EMR feasibility + historical accrual", es: "Viabilidad EMR + reclutamiento histórico" }, inputKind: "table" },
        { inputId: "M5.IN3", label: { en: "Draft budgets + internal cost model", es: "Presupuestos borrador + modelo costo interno" }, inputKind: "table" },
        { inputId: "M5.IN4", label: { en: "Fast-start sponsor email", es: "Correo fast-start patrocinador" }, inputKind: "export" },
        { inputId: "M5.IN5", label: { en: "Site portfolio / CRC FTE summary", es: "Resumen cartera sitio / FTE CRC" }, inputKind: "table" },
      ],
      learnerTask: {
        en: "Per X and Y: feasibility (patients, staff, complexity, overlap); hidden costs (queries, re-consent, AE follow-up, audit prep); gap analysis vs sponsor budget (start-up, screen-fails, DM, follow-up, amendments). Recommend accept/decline/defer with conditions; address fast-start email (time for analysis, negotiation, documentation). For at least one study: sponsor pressure vs quality; financial vs safety conflict; long-term reputation. Draft leadership/QA decision memo defensible under E6(R3) adequate resources—explicitly name MHRA Feasibility (documented rationale, proportionate controls, resourcing before commitment) and ACRP Feasibility (patient pool, staffing, budget lines for data work) in at least two substantive sentences each (EN body for EN memo; ES body for ES memo).",
        es: "Por X e Y: viabilidad (pacientes, personal, complejidad, solapamiento); costos ocultos (queries, re-consentimiento, seguimiento EA, prep auditoría); análisis de brecha vs presupuesto (arranque, screen-fails, DM, seguimiento, enmiendas). Recomendar aceptar/declinar/diferir con condiciones; responder correo fast-start (tiempo para análisis, negociación, documentación). En al menos un estudio: presión vs calidad; conflicto financiero vs seguridad; reputación. Redactar memo dirección/QA defendible bajo recursos adecuados E6(R3)—nombrar explícitamente MHRA Feasibility (justificación documentada, controles proporcionados, recursos antes del compromiso) y ACRP Feasibility (pool, personal, partidas para trabajo de datos) en al menos dos oraciones sustantivas cada uno en el idioma del memo.",
      },
      deliverables: [
        { deliverableId: "M5.D1", label: { en: "Per-study feasibility + cost gap matrix", es: "Viabilidad por estudio + matriz brecha costos" }, formatHint: "table" },
        { deliverableId: "M5.D2", label: { en: "Recommendations + negotiation talking points", es: "Recomendaciones + puntos de negociación" }, formatHint: "pdf" },
        {
          deliverableId: "M5.D3",
          label: {
            en: "Leadership / QA memo (MHRA Feasibility + ACRP Feasibility)",
            es: "Memo dirección / QA (MHRA Feasibility + ACRP Feasibility)",
          },
          formatHint: "short_memo",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M5.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M5.C1",
        description: {
          en: "Feasibility and E6(R3) adequate resources: EMR/accrual logic, staff/facility reality, portfolio overlap; refuses or caps enrollment when math is non-viable despite pressure—consistent with MHRA Feasibility and ACRP Feasibility.",
          es: "Viabilidad y recursos adecuados E6(R3): lógica EMR/reclutamiento, realidad personal/instalaciones, solapamiento cartera; rechaza o limita inclusión cuando la matemática no es viable pese a presión—coherente con MHRA Feasibility y ACRP Feasibility.",
        },
        points: 35,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Critical fail if accepts clearly non-feasible accrual or capacity solely because sponsor pays well or uses fast-start pressure.",
          es: "Falla crítica si acepta reclutamiento o capacidad claramente no viable solo porque el patrocinador paga bien o usa presión fast-start.",
        },
      },
      {
        criterionId: "M5.C2",
        description: {
          en: "Surfaces hidden costs: queries, PRO/EDC, follow-up calls, SAE workload, re-consent, amendments, inspection prep; adjusts budget ask or go/no-go accordingly—ACRP Feasibility realism.",
          es: "Revela costos ocultos: queries, PRO/EDC, llamadas seguimiento, carga SAE, re-consentimiento, enmiendas, prep inspección; ajusta petición presupuestaria o sí/no—realismo ACRP Feasibility.",
        },
        points: 25,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Critical fail if ignores obvious hidden workload in the packet and leaves sponsor budget unchallenged.",
          es: "Falla crítica si ignora carga de trabajo oculta obvia en el paquete y deja presupuesto patrocinador sin cuestionar.",
        },
      },
      {
        criterionId: "M5.C3",
        description: {
          en: "Negotiation discipline: names pressure tactics; requests analysis time; proposes concrete line items or scope conditions; system CAPA (checklists, mandatory EMR review) aligned to MHRA Feasibility / ACRP Feasibility.",
          es: "Disciplina de negociación: nombra tácticas de presión; pide tiempo de análisis; propone partidas concretas o condiciones de alcance; CAPA sistema alineada a MHRA Feasibility / ACRP Feasibility.",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Fail if commits to Friday deadline with minimal changes when evidence requires renegotiation or decline.",
          es: "Falla si se compromete a plazo viernes con cambios mínimos cuando la evidencia exige renegociación o declinar.",
        },
      },
      {
        criterionId: "M5.C4",
        description: {
          en: "Balances revenue vs GCP/patient safety; addresses long-term reputation and monitoring intensity; memo ties to strain on M2/M3/M4/M8/M9 when under-resourced and explicitly references MHRA Feasibility and ACRP Feasibility as required in the exercise.",
          es: "Equilibra ingresos vs GCP/seguridad del paciente; aborda reputación a largo plazo e intensidad de monitoría; memo vincula tensión en M2/M3/M4/M8/M9 cuando hay sub-recursos y referencia explícitamente MHRA Feasibility y ACRP Feasibility como exige el ejercicio.",
        },
        points: 15,
        mapsToDimensions: ["C", "Q"],
        failCondition: {
          en: "Critical fail if omits reputation, quality, or cross-module consequences; recommends chasing high fees without safeguards; or memo omits required MHRA Feasibility / ACRP Feasibility substantive references.",
          es: "Falla crítica si omite reputación, calidad o consecuencias entre módulos; recomienda perseguir honorarios altos sin salvaguardas; o el memo omite referencias sustantivas requeridas a MHRA Feasibility / ACRP Feasibility.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "O",
      weight: 0.34,
      aggregationKey: "feasibility_capacity_portfolio_time_motion_budget",
    },
    {
      dimension: "R",
      weight: 0.26,
      aggregationKey: "e6r3_adequate_resources_fmv_negotiation_gcp_basis",
    },
    {
      dimension: "Q",
      weight: 0.22,
      aggregationKey: "hidden_data_costs_query_integrity_scope_creep",
    },
    {
      dimension: "C",
      weight: 0.18,
      aggregationKey: "patient_safety_vs_financial_incentive_judgment",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S6 is the capstone anchor for M5: study-level feasibility, E6(R3) adequate resources, hidden budget gaps, and sponsor-pressure vs GCP/reputation tradeoffs—consistent with MHRA Feasibility and ACRP Feasibility themes. OSCE.S1 remains subject-level eligibility/traceability (adjacent discipline, not a substitute for feasibility judgment).",
      es: "OSCE.S6 es ancla de capstone para M5: viabilidad a nivel estudio, recursos adecuados E6(R3), brechas presupuestarias ocultas y equilibrios presión/GCP/reputación—coherente con temas MHRA Feasibility y ACRP Feasibility. OSCE.S1 sigue siendo elegibilidad/trazabilidad a nivel sujeto (disciplina vecina, no sustituto del juicio de viabilidad).",
    },
    stationIds: ["OSCE.S6"],
  },
  tags: ["operational", "regulatory", "clinical_judgment", "audit_readiness", "bilingual", "flagship", "data_integrity"],
  bilingualNotes: {
    en: "Keep E6(R3), GCP, FMV, CTA, EMR, PRO, EDC, SAE, DM (data management), QA, MHRA, ACRP as EN tokens. Module anchors: MHRA Feasibility (UK regulatory / GCP proportionate assessment) and ACRP Feasibility (site operational readiness and budget realism).",
    es: "Mantener E6(R3), GCP, FMV, CTA, EMR, PRO, EDC, SAE, DM (gestión de datos), QA, MHRA, ACRP como tokens EN. Anclas del módulo: MHRA Feasibility (evaluación GCP proporcional / regulatoria UK) y ACRP Feasibility (preparación operativa del sitio y realismo presupuestario).",
  },
};
