// src/curriculum-engine/data/modules/m5.ts

import type { Module } from "../../types";

/**
 * Module 5 — Study feasibility & budgeting: site viability, sponsor pressure, long-term reputation.
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
    en: "Critically assess feasibility (patients, staff, facilities, time); surface hidden operational costs; resist sponsor pressure that threatens quality; balance financial incentives against GCP and patient safety; defend budget and feasibility decisions to protect long-term site reputation and compliance.",
    es: "Valorar críticamente la viabilidad (pacientes, personal, instalaciones, tiempo); revelar costos operativos ocultos; resistir presión del patrocinador que amenace la calidad; equilibrar incentivos financieros con GCP y seguridad del paciente; defender decisiones de presupuesto y viabilidad para proteger reputación y cumplimiento del sitio a largo plazo.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines true feasibility as whether the site can safely and reliably execute the protocol—not merely whether it can be activated or sign a CTA.",
          es: "Define viabilidad real como si el sitio puede ejecutar el protocolo de forma segura y fiable—no solo si puede activarse o firmar un CTA.",
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
          en: "Runs feasibility triage: EMR/chart-based patient volume, staff CRC:trial load and PI time, facilities, competing trials; builds time-and-motion estimates per visit and reconciles sponsor offer to internal costs and FMV benchmarks.",
          es: "Ejecuta triage de viabilidad: volumen de pacientes vía EMR/historia, carga CRC:ensayos y tiempo PI, instalaciones, ensayos competidores; construye estimaciones tiempo-movimiento por visita y concilia oferta patrocinador con costos internos y benchmarks FMV.",
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
          en: "Proposes system-level improvements: standard feasibility checklist, mandatory EMR analysis, budget review including hidden costs, actual-vs-budget learning loop—linked to strain on M2/M3/M4/M8/M9 when under-resourced.",
          es: "Propone mejoras a nivel sistema: checklist estándar de viabilidad, análisis EMR obligatorio, revisión de presupuesto con costos ocultos, ciclo real vs presupuesto—vinculado a tensión en M2/M3/M4/M8/M9 cuando hay sub-financiamiento.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M5.L1",
      title: { en: "Core concepts — feasibility vs signing", es: "Conceptos núcleo — viabilidad vs firmar" },
      lessonType: "reading",
      objective: {
        en: "Anchor E6(R3) adequate resources, budget anatomy, FMV, sponsor pressure, and reputation.",
        es: "Anclar recursos adecuados E6(R3), anatomía del presupuesto, FMV, presión del patrocinador y reputación.",
      },
      keyPoints: [
        {
          en: "Feasibility answers ‘should we?’—patients, staff, facilities, time—not only ‘can we sign?’",
          es: "La viabilidad responde ‘¿debemos?’—pacientes, personal, instalaciones, tiempo—no solo ‘¿podemos firmar?’",
        },
        {
          en: "E6(R3): investigators need sufficient time, qualified staff, adequate facilities—under-resourcing is GCP failure.",
          es: "E6(R3): investigadores necesitan tiempo suficiente, personal calificado, instalaciones adecuadas—falta de recursos es falla GCP.",
        },
        {
          en: "Hidden costs: query resolution, PRO/EDC workload, safety calls, re-consent, amendments, inspection prep.",
          es: "Costos ocultos: resolución queries, carga PRO/EDC, llamadas seguridad, re-consentimiento, enmiendas, prep inspección.",
        },
        {
          en: "FMV frames negotiation; budgets must still cover real effort within reasonable ranges.",
          es: "FMV enmarca negociación; presupuestos deben cubrir esfuerzo real en rangos razonables.",
        },
        {
          en: "Pressure lines: fast-start, commit by Friday, others agreed—require structured response, not rushed yes.",
          es: "Líneas de presión: arranque rápido, compromiso para viernes, otros aceptaron—exigen respuesta estructurada, no sí apresurado.",
        },
        {
          en: "Best sites decline non-viable studies; repeat under-delivery burns sponsor trust and teams.",
          es: "Los mejores sitios declinan estudios no viables; el incumplimiento repetido quema confianza del patrocinador y equipos.",
        },
      ],
    },
    {
      lessonId: "M5.L2",
      title: { en: "Real-world workflow — triage through post-activation", es: "Flujo real — triage hasta post-activación" },
      lessonType: "reading",
      objective: {
        en: "Follow synopsis to negotiation, activation, and effort tracking with cross-module risk links.",
        es: "Seguir desde sinopsis a negociación, activación y seguimiento de esfuerzo con riesgos entre módulos.",
      },
      keyPoints: [
        {
          en: "Initial triage: indication fit, patient pool, complexity, portfolio overlap; EMR queries and chart review.",
          es: "Triage inicial: indicación, pool de pacientes, complejidad, solapamiento cartera; consultas EMR y revisión de historias.",
        },
        {
          en: "Budget: time-and-motion per activity; start-up, re-consent, follow-up, data cleaning, audit prep lines; compare to offer and FMV.",
          es: "Presupuesto: tiempo-movimiento por actividad; partidas arranque, re-consentimiento, seguimiento, limpieza datos, prep auditoría; comparar con oferta y FMV.",
        },
        {
          en: "Negotiation: resist unsustainable terms; document positions; escalate when pressure conflicts with adequate resources.",
          es: "Negociación: resistir términos insostenibles; documentar posiciones; escalar cuando presión choca con recursos adecuados.",
        },
        {
          en: "Post-activation: actual effort vs budget; early detection of query/safety cost explosions; renegotiate when justified.",
          es: "Post-activación: esfuerzo real vs presupuesto; detección temprana de explosión costos queries/seguridad; renegociar cuando proceda.",
        },
        {
          en: "Under-resourced trials strain M3 oversight, M2 deviations, M4 log/ALCOA+ work, M9 IP operations, and M8 visit-window execution.",
          es: "Ensayos sub-financiados tensionan supervisión M3, desviaciones M2, trabajo logs/ALCOA+ M4, operación IP M9 y ejecución de ventanas de visita M8.",
        },
      ],
    },
    {
      lessonId: "M5.L3",
      title: { en: "Common pitfalls — feasibility & budgets", es: "Trampas frecuentes — viabilidad y presupuestos" },
      lessonType: "reading",
      objective: {
        en: "Recognize recurring patterns that damage finances, quality, and sponsor relationships.",
        es: "Reconocer patrones recurrentes que dañan finanzas, calidad y relación con patrocinador.",
      },
      keyPoints: [
        {
          en: "Optimism-based feasibility without EMR or capacity math.",
          es: "Viabilidad por optimismo sin EMR o matemática de capacidad.",
        },
        {
          en: "CTAs missing start-up, close-out, amendment, or re-consent compensation.",
          es: "CTA sin compensación por arranque, cierre, enmienda o re-consentimiento.",
        },
        {
          en: "Scope creep: new EDC, query storms, unpaid reconciliation meetings.",
          es: "Creep de alcance: nuevo EDC, tormentas de queries, reuniones reconciliación no pagadas.",
        },
        {
          en: "Revenue-driven acceptance with unsafe scheduling or observation shortcuts.",
          es: "Aceptación por ingresos con agenda insegura o atajos en observación.",
        },
        {
          en: "No actual-vs-budget review—chronic negative margins normalized.",
          es: "Sin revisión real vs presupuesto—márgenes negativos crónicos normalizados.",
        },
        {
          en: "Reputation spiral: under-recruit, late data, repeated urgent budget asks.",
          es: "Espiral reputacional: bajo reclutamiento, datos tardíos, pedidos urgentes repetidos de presupuesto.",
        },
      ],
    },
    {
      lessonId: "M5.GP1",
      title: {
        en: "Guided practice — GP-5.1: say ‘no’ despite sponsor enthusiasm",
        es: "Práctica guiada — GP-5.1: decir ‘no’ pese al entusiasmo del patrocinador",
      },
      lessonType: "case",
      objective: {
        en: "Phase III oncology: 30 subjects / 18 months; EMR ~4 eligible/year; fast-start pressure; others committed.",
        es: "Oncología fase III: 30 sujetos / 18 meses; EMR ~4 elegibles/año; presión fast-start; otros comprometidos.",
      },
      keyPoints: [
        {
          en: "Accrual math vs optimism; E6(R3) adequate patient/resource base.",
          es: "Matemática de reclutamiento vs optimismo; base adecuada de pacientes/recursos E6(R3).",
        },
        {
          en: "Decision: EMR-backed estimate; realistic capped target or decline; document internal analysis.",
          es: "Decisión: estimación respaldada en EMR; objetivo realista limitado o declinar; documentar análisis interno.",
        },
        {
          en: "Inspector test: what evidence supports the commitment?",
          es: "Prueba inspector: ¿qué evidencia respalda el compromiso?",
        },
      ],
    },
    {
      lessonId: "M5.GP2",
      title: {
        en: "Guided practice — GP-5.2: hidden costs in a ‘simple’ trial (incorrect pattern)",
        es: "Práctica guiada — GP-5.2: costos ocultos en ensayo ‘simple’ (patrón incorrecto)",
      },
      lessonType: "case",
      objective: {
        en: "Cardiology: $250/visit, no DM line, $0 screen-fails; heavy PRO/EDC, high query risk, unbudgeted phone follow-up.",
        es: "Cardiología: 250 USD/visita, sin partida DM, 0 screen-fails; PRO/EDC pesado, alto riesgo queries, seguimiento telefónico no presupuestado.",
      },
      keyPoints: [
        {
          en: "Map downstream data work—not only on-site procedures.",
          es: "Mapear trabajo de datos aguas abajo—no solo procedimientos en sitio.",
        },
        {
          en: "Request DM fee, higher per-visit, follow-up line; or reassess viability.",
          es: "Solicitar tarifa DM, mayor por visita, partida seguimiento; o reevaluar viabilidad.",
        },
        {
          en: "Risk: overburdened CRCs, missed queries, integrity and deviation pressure.",
          es: "Riesgo: CRCs sobrecargados, queries omitidas, presión sobre integridad y desviaciones.",
        },
      ],
    },
    {
      lessonId: "M5.GP3",
      title: {
        en: "Guided practice — GP-5.3: high pay, stretched team (ambiguous)",
        es: "Práctica guiada — GP-5.3: alto pago, equipo al límite (ambiguo)",
      },
      lessonType: "case",
      objective: {
        en: "Dermatology: generous fees; restrictive I/E; long visits; CRC near capacity; PI: hire later.",
        es: "Dermatología: honorarios generosos; I/E restrictivas; visitas largas; CRC cerca del límite; PI: contratar después.",
      },
      keyPoints: [
        {
          en: "Weigh recruitment uncertainty vs burnout and deviation risk from rushing.",
          es: "Pesar incertidumbre de reclutamiento vs burnout y riesgo de desviación por apuro.",
        },
        {
          en: "Defensible paths: decline/defer; accept only with pre-activation hires, lower target, or extended timeline in writing.",
          es: "Vías defendibles: declinar/diferir; aceptar solo con contrataciones pre-activación, objetivo menor o cronograma extendido por escrito.",
        },
        {
          en: "Money cannot replace adequate resources before patients are enrolled.",
          es: "El dinero no sustituye recursos adecuados antes de incluir pacientes.",
        },
      ],
    },
    {
      lessonId: "M5.L4",
      title: { en: "QA / inspection lens — adequate resources", es: "Lente QA / inspección — recursos adecuados" },
      lessonType: "reading",
      objective: {
        en: "Anticipate how QA and regulators test whether commitments had a rational, documented basis.",
        es: "Anticipar cómo QA y reguladores prueban si los compromisos tuvieron base racional y documentada.",
      },
      keyPoints: [
        {
          en: "Document feasibility memos, EMR methodology, and leadership sign-off where required.",
          es: "Documentar memos de viabilidad, metodología EMR y visto bueno de dirección cuando corresponda.",
        },
        {
          en: "Underfunded trials increase deviation and documentation findings—not only ‘business’ problems.",
          es: "Ensayos sub-financiados aumentan hallazgos de desviación y documentación—no solo problemas ‘de negocio’.",
        },
        {
          en: "Financial incentives that drive unsafe throughput are inspection-sensitive.",
          es: "Incentivos financieros que impulsan flujo inseguro son sensibles en inspección.",
        },
      ],
    },
    {
      lessonId: "M5.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate pressure resistance, hidden costs, ethics over revenue, reputation, and cross-module impacts.",
        es: "Consolidar resistencia a presión, costos ocultos, ética sobre ingresos, reputación e impactos entre módulos.",
      },
      keyPoints: [
        {
          en: "Strong answers: name pressure tactics; quantify hidden work; propose process CAPA; link to M2–M4, M8, M9.",
          es: "Respuestas sólidas: nombrar tácticas de presión; cuantificar trabajo oculto; proponer CAPA de proceso; vincular a M2–M4, M8, M9.",
        },
        {
          en: "Fail if: accept clearly non-feasible study for money or pressure alone; ignore obvious hidden costs; omit reputation/quality consequences.",
          es: "Fallo si: acepta estudio claramente no viable solo por dinero o presión; ignora costos ocultos obvios; omite consecuencias reputación/calidad.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M5.E1",
      description: {
        en: "Sponsor names site ‘key fast-start partner’; 48-hour commitment demand. Site agrees without EMR analysis or staff capacity assessment.",
        es: "Patrocinador nombra sitio ‘socio clave fast-start’; exige compromiso en 48 h. Sitio acepta sin análisis EMR ni evaluación de capacidad.",
      },
      risk: {
        en: "Over-promise, under-deliver; under-recruitment, quality issues, reputational damage.",
        es: "Sobre-promiso, bajo cumplimiento; bajo reclutamiento, problemas de calidad, daño reputacional.",
      },
      expectedLearnerResponse: {
        en: "Pause; complete feasibility packet; negotiate timeline; decline or cap enrollment if math fails; document decision.",
        es: "Pausa; completar paquete de viabilidad; negociar plazo; declinar o limitar inclusión si la matemática falla; documentar decisión.",
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
        en: "Site repeatedly ends trials negative margin and exhausted staff; no formal actual-vs-budget or feasibility lessons-learned process.",
        es: "Sitio termina ensayos repetidamente con margen negativo y personal agotado; sin proceso formal real vs presupuesto o lecciones de viabilidad.",
      },
      risk: {
        en: "Chronic underfunding normalized; burnout and persistent quality issues.",
        es: "Sub-financiamiento crónico normalizado; burnout y problemas de calidad persistentes.",
      },
      expectedLearnerResponse: {
        en: "Institute post-trial financial review; update feasibility templates; executive dashboard on CRC FTE vs portfolio.",
        es: "Instituir revisión financiera post-estudio; actualizar plantillas de viabilidad; tablero ejecutivo FTE CRC vs cartera.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M5.E6",
      description: {
        en: "Over years: consistent under-recruit vs targets, late data, repeated urgent budget adjustments; sponsors label site high-maintenance/low-performance.",
        es: "Años: reclutamiento bajo vs metas, datos tardíos, ajustes urgentes repetidos de presupuesto; patrocinadores etiquetan sitio alto mantenimiento/bajo rendimiento.",
      },
      risk: {
        en: "Shrinking pipeline; weak negotiation leverage; morale damage.",
        es: "Tubería que se encoge; palanca de negociación débil; daño moral.",
      },
      expectedLearnerResponse: {
        en: "Credibility recovery plan: realistic targets only, delivery SLAs, single point sponsor communication, under-promise discipline.",
        es: "Plan recuperación credibilidad: solo metas realistas, SLAs de entrega, comunicación única con patrocinador, disciplina de sub-promesa.",
      },
      relatedDimensions: ["O", "R", "Q"],
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
        en: "40 minutes before joint meeting with PI and site leadership. Study X: complex oncology—high fees, strict I/E, low eligible volume, intensive procedures, high AE/SAE workload. Study Y: moderate cardiology—moderate fees, PROs and high expected queries, long-term follow-up calls not budgeted. Inputs: EMR feasibility and historical accrual for both; draft sponsor budgets (per-visit, start-up, screen-fail, no explicit DM); internal cost rates and overhead. Email: fast-start priority, others agreed, commitment by Friday with minimal changes. QA/inspector may later ask if adequate resources and rational basis existed.",
        es: "40 minutos antes de reunión con PI y dirección. Estudio X: oncología compleja—honorarios altos, I/E estrictas, bajo volumen elegible, procedimientos intensos, alta carga AE/SAE. Estudio Y: cardiología moderada—honorarios moderados, PROs y queries esperadas altas, llamadas seguimiento largo plazo no presupuestadas. Insumos: viabilidad EMR y reclutamiento histórico; borradores patrocinador (por visita, arranque, screen-fail, sin DM explícito); tarifas internas y overhead. Correo: prioridad fast-start, otros acordaron, compromiso viernes con cambios mínimos. QA/inspector podría preguntar después si hubo recursos adecuados y base racional.",
      },
      inputs: [
        { inputId: "M5.IN1", label: { en: "Study X & Y synopsis + SoA complexity notes", es: "Sinopsis X e Y + notas complejidad SoA" }, inputKind: "pdf" },
        { inputId: "M5.IN2", label: { en: "EMR feasibility + historical accrual", es: "Viabilidad EMR + reclutamiento histórico" }, inputKind: "table" },
        { inputId: "M5.IN3", label: { en: "Draft budgets + internal cost model", es: "Presupuestos borrador + modelo costo interno" }, inputKind: "table" },
        { inputId: "M5.IN4", label: { en: "Fast-start sponsor email", es: "Correo fast-start patrocinador" }, inputKind: "export" },
        { inputId: "M5.IN5", label: { en: "Site portfolio / CRC FTE summary", es: "Resumen cartera sitio / FTE CRC" }, inputKind: "table" },
      ],
      learnerTask: {
        en: "Per X and Y: feasibility (patients, staff, complexity, overlap); hidden costs (queries, re-consent, AE follow-up, audit prep); gap analysis vs sponsor budget (start-up, screen-fails, DM, follow-up, amendments). Recommend accept/decline/defer with conditions; address fast-start email (time for analysis, negotiation, documentation). For at least one study: sponsor pressure vs quality; financial vs safety conflict; long-term reputation. Draft feasibility & budget decision memo defensible under E6(R3) adequate resources and risk-based thinking.",
        es: "Por X e Y: viabilidad (pacientes, personal, complejidad, solapamiento); costos ocultos (queries, re-consentimiento, seguimiento EA, prep auditoría); análisis de brecha vs presupuesto (arranque, screen-fails, DM, seguimiento, enmiendas). Recomendar aceptar/declinar/diferir con condiciones; responder correo fast-start (tiempo para análisis, negociación, documentación). En al menos un estudio: presión vs calidad; conflicto financiero vs seguridad; reputación. Redactar memo de decisión defendible bajo recursos adecuados E6(R3) y pensamiento basado en riesgo.",
      },
      deliverables: [
        { deliverableId: "M5.D1", label: { en: "Per-study feasibility + cost gap matrix", es: "Viabilidad por estudio + matriz brecha costos" }, formatHint: "table" },
        { deliverableId: "M5.D2", label: { en: "Recommendations + negotiation talking points", es: "Recomendaciones + puntos de negociación" }, formatHint: "pdf" },
        { deliverableId: "M5.D3", label: { en: "Leadership / QA decision memo", es: "Memo decisión dirección / QA" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M5.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M5.C1",
        description: {
          en: "Feasibility and E6(R3) adequate resources: EMR/accrual logic, staff/facility reality, portfolio overlap; refuses or caps enrollment when math is non-viable despite pressure.",
          es: "Viabilidad y recursos adecuados E6(R3): lógica EMR/reclutamiento, realidad personal/instalaciones, solapamiento cartera; rechaza o limita inclusión cuando la matemática no es viable pese a presión.",
        },
        points: 35,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Accepts clearly non-feasible accrual or capacity solely because sponsor pays well or uses fast-start pressure.",
          es: "Acepta reclutamiento o capacidad claramente no viable solo porque el patrocinador paga bien o usa presión fast-start.",
        },
      },
      {
        criterionId: "M5.C2",
        description: {
          en: "Surfaces hidden costs: queries, PRO/EDC, follow-up calls, SAE workload, re-consent, amendments, inspection prep; adjusts budget ask or go/no-go accordingly.",
          es: "Revela costos ocultos: queries, PRO/EDC, llamadas seguimiento, carga SAE, re-consentimiento, enmiendas, prep inspección; ajusta petición presupuestaria o sí/no en consecuencia.",
        },
        points: 25,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Ignores obvious hidden workload in the packet and leaves sponsor budget unchallenged.",
          es: "Ignora carga de trabajo oculta obvia en el paquete y deja presupuesto patrocinador sin cuestionar.",
        },
      },
      {
        criterionId: "M5.C3",
        description: {
          en: "Negotiation discipline: names pressure tactics; requests analysis time; proposes concrete line items or scope conditions; system CAPA (checklists, mandatory EMR review).",
          es: "Disciplina de negociación: nombra tácticas de presión; pide tiempo de análisis; propone partidas concretas o condiciones de alcance; CAPA sistema (listas, revisión EMR obligatoria).",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "Commits to Friday deadline with minimal changes when evidence requires renegotiation or decline.",
          es: "Se compromete a plazo viernes con cambios mínimos cuando la evidencia exige renegociación o declinar.",
        },
      },
      {
        criterionId: "M5.C4",
        description: {
          en: "Balances revenue vs GCP/patient safety; addresses long-term reputation and monitoring intensity; memo ties to strain on M2/M3/M4/M8/M9 when under-resourced.",
          es: "Equilibra ingresos vs GCP/seguridad del paciente; aborda reputación a largo plazo e intensidad de monitoría; memo vincula tensión en M2/M3/M4/M8/M9 cuando hay sub-recursos.",
        },
        points: 15,
        mapsToDimensions: ["C", "Q"],
        failCondition: {
          en: "Omits reputation, quality, or cross-module consequences; recommends chasing high fees without safeguards.",
          es: "Omite reputación, calidad o consecuencias entre módulos; recomienda perseguir honorarios altos sin salvaguardas.",
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
      en: "OSCE.S6 is the capstone anchor for M5: study-level feasibility, E6(R3) adequate resources, hidden budget gaps, and sponsor-pressure vs GCP/reputation tradeoffs. OSCE.S1 remains subject-level eligibility/traceability (stop-the-line when lab evidence conflicts with ‘pass’)—adjacent discipline, not a substitute for feasibility judgment.",
      es: "OSCE.S6 es el ancla de capstone para M5: viabilidad a nivel estudio, recursos adecuados E6(R3), brechas presupuestarias ocultas y presión del patrocinador vs equilibrios GCP/reputación. OSCE.S1 sigue siendo elegibilidad/trazabilidad a nivel sujeto (parar la línea cuando evidencia de lab choca con ‘pass’)—disciplina vecina, no sustituto del juicio de viabilidad.",
    },
    stationIds: ["OSCE.S6"],
  },
  tags: ["operational", "regulatory", "clinical_judgment", "audit_readiness", "bilingual", "flagship", "data_integrity"],
  bilingualNotes: {
    en: "Keep E6(R3), GCP, FMV, CTA, EMR, PRO, EDC, SAE, DM (data management), QA as EN tokens.",
    es: "Mantener E6(R3), GCP, FMV, CTA, EMR, PRO, EDC, SAE, DM (gestión de datos), QA como tokens EN.",
  },
};
