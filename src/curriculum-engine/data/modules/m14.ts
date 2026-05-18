// src/curriculum-engine/data/modules/m14.ts

import type { Module } from "../../types";

/**
 * Module 14 — Site budgeting & contract negotiation: revenue protection under sponsor pressure.
 *
 * Technical / Regulatory Execution: eight ordered sections; three guided cases (clear / incorrect / ambiguous);
 * time-boxed practical exercise; rubric 100 = sum(criteria.points); passing 94.
 *
 * Anchors: NIH Contracts (federal cost principles, allowability, indirects, and contract discipline that shape what
 * academic/CTU sites can absorb) and Tufts Cost Analysis (industry cost benchmarks used to justify market-rate gaps
 * and procedure pricing in sponsor negotiations).
 */
export const MODULE_M14: Module = {
  id: "M14",
  slug: "site-budgeting-contract-negotiation-revenue-protection",
  internalName: "mod_14_budgeting_contracts_revenue_protection",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["O", "R", "Q", "C"],
  title: {
    en: "Module 14 — Site Budgeting & Contract Negotiation: Revenue Protection",
    es: "Módulo 14 — Presupuestos y negociación contractual del sitio: protección de ingresos",
  },
  objective: {
    en: "CRC or site finance lead can lock pass-through under NIH Contracts–consistent allowability rules where applicable, counter underpriced procedures with Tufts Cost Analysis–style benchmark math and contract evidence, restructure milestones to protect cash-flow survival, capture earned items (screening, protocol-driven PK), and send closing negotiation emails that cite NIH Contracts and Tufts Cost Analysis when defending gaps—without subsidizing sponsor shortfalls or accepting irreversible under-budget execution risk.",
    es: "El CRC o líder financiero del sitio puede blindar pass-through bajo reglas de elegibilidad alineadas NIH Contracts donde aplique, contrarrestar procedimientos sub-valorados con matemática benchmark estilo Tufts Cost Analysis y evidencia contractual, reestructurar hitos para supervivencia de flujo de caja, capturar ítems ganados (screening, PK por protocolo) y enviar correos de cierre que citen NIH Contracts y Tufts Cost Analysis al defender gaps—sin subsidiar faltantes del patrocinador ni aceptar riesgo irreversible de ejecución sub-presupuestada.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines pass-through and explains when NIH Contracts cost principles constrain what a site may absorb versus re-bill to sponsor.",
          es: "Define pass-through y explica cuándo principios de costo NIH Contracts limitan qué puede absorber el sitio vs refacturar al patrocinador.",
        },
        {
          en: "States how Tufts Cost Analysis benchmarks support gap narratives for procedure bundles (imaging, PK, cardiac monitoring) without emotional pricing arguments.",
          es: "Afirma cómo benchmarks Tufts Cost Analysis apoyan narrativas de gap para paquetes de procedimientos (imagen, PK, monitorización cardiaca) sin argumentos emocionales de precio.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Builds gap-based counteroffers using vendor contracts, Tufts Cost Analysis ranges, and protocol volume; writes sponsor-ready 2–3 line justification per gap.",
          es: "Construye contraofertas basadas en gaps usando contratos proveedor, rangos Tufts Cost Analysis y volumen protocolo; redacta justificación 2–3 líneas por gap lista patrocinador.",
        },
        {
          en: "Restructures milestones or invoicing cadence to prevent slow financial death while preserving total budget optics and NIH Contracts–compliant cost treatment where federal funds touch the workflow.",
          es: "Reestructura hitos o cadencia facturación para evitar muerte financiera lenta preservando optics de presupuesto total y tratamiento costo conforme NIH Contracts donde fondos federales toquen el flujo.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Negotiates under deadline pressure using execution-risk framing, NIH Contracts guardrails, and Tufts Cost Analysis evidence—avoiding concessions that signal ‘we absorb the difference’.",
          es: "Negocia bajo presión de deadline usando marco riesgo-ejecución, guardarraíles NIH Contracts y evidencia Tufts Cost Analysis—evitando concesiones que señalen ‘absorbemos la diferencia’.",
        },
        {
          en: "Designs site-level CAPA when repeated underpricing patterns appear: budgeting playbooks, minimum floors, pass-through checklist, milestone standards.",
          es: "Diseña CAPA a nivel sitio cuando aparecen patrones repetidos sub-precio: playbooks presupuesto, pisos mínimos, checklist pass-through, estándares hitos.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M14.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the bar: revenue protection with NIH Contracts discipline and Tufts Cost Analysis–backed market math—not hope pricing.",
        es: "Establecer la barra: protección ingresos con disciplina NIH Contracts y matemática mercado respaldada Tufts Cost Analysis—no precios por esperanza.",
      },
      keyPoints: [
        {
          en: "Graded on pass-through lock, evidence per gap, milestone survival, and professional closing—not relationship pleading.",
          es: "Se te califica por blindaje pass-through, evidencia por gap, supervivencia hitos y cierre profesional—no súplica relacional.",
        },
        {
          en: "Outputs: gap memo (D1), milestone table (D2), closing email (D3) citing NIH Contracts and Tufts Cost Analysis where substantive.",
          es: "Salidas: memo gaps (D1), tabla hitos (D2), correo cierre (D3) citando NIH Contracts y Tufts Cost Analysis donde sea sustantivo.",
        },
        {
          en: "Technical tokens stay EN (NIH Contracts, Tufts Cost Analysis, pass-through, milestone, CTA, BD, CAPA).",
          es: "Tokens técnicos permanecen en inglés (NIH Contracts, Tufts Cost Analysis, pass-through, milestone, CTA, BD, CAPA).",
        },
      ],
    },
    {
      lessonId: "M14.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 28,
      objective: {
        en: "Anchor pass-through lock, Tufts Cost Analysis benchmarking, NIH Contracts allowability context, negotiation workflow, and failure modes.",
        es: "Anclar blindaje pass-through, benchmarking Tufts Cost Analysis, contexto elegibilidad NIH Contracts, flujo negociación y modos de falla.",
      },
      keyPoints: [
        {
          en: "Tufts Cost Analysis: use published trial cost drivers as external anchors for procedure bundles—pair with your vendor quotes, not alone.",
          es: "Tufts Cost Analysis: usar drivers de costo publicados como anclas externas para paquetes procedimiento—emparejar con cotizaciones proveedor, no solos.",
        },
        {
          en: "NIH Contracts: when federal funds or institutional policies apply, allowability and indirect rules can forbid silent cross-subsidy—document sponsor bill-back paths.",
          es: "NIH Contracts: cuando aplican fondos federales o políticas institucionales, reglas de elegibilidad e indirectos pueden prohibir subsidio cruzado silencioso—documentar vías refacturación patrocinador.",
        },
        {
          en: "Pass-through = contract cost; site absorbs zero markup and zero vendor shortfall.",
          es: "Pass-through = costo contrato; sitio absorbe cero markup y cero faltante proveedor.",
        },
        {
          en: "Standard sponsor budget is a starting anchor, not gospel—counter with Tufts Cost Analysis + volume + protocol change deltas.",
          es: "Presupuesto estándar patrocinador es ancla inicial, no evangelio—contraofertar con Tufts Cost Analysis + volumen + deltas cambio protocolo.",
        },
        {
          en: "Milestones = execution survival: front-load or per-subject invoices when startup burn is real.",
          es: "Hitos = supervivencia ejecución: adelantar o facturas por sujeto cuando quema startup es real.",
        },
        {
          en: "Real-world workflow — Gap review: line items vs vendor contracts vs Tufts Cost Analysis bands.",
          es: "Flujo real — Revisión gaps: partidas vs contratos proveedor vs bandas Tufts Cost Analysis.",
        },
        {
          en: "Real-world workflow — NIH overlay: flag costs that must be direct-charged or excluded per institutional policy.",
          es: "Flujo real — Capa NIH: marcar costos que deben cargarse directo o excluirse según política institucional.",
        },
        {
          en: "Real-world workflow — Close: numbers + evidence + one strategic concession + ready-to-proceed.",
          es: "Flujo real — Cerrar: números + evidencia + una concesión estratégica + listos para proceder.",
        },
        {
          en: "Error-prone 1 — Accept standard budget without gap review.",
          es: "Propensa 1 — Aceptar presupuesto estándar sin revisión gaps.",
        },
        {
          en: "Error-prone 2 — Use sponsor lab rate instead of contracted pass-through.",
          es: "Propensa 2 — Usar tarifa labs patrocinador en vez pass-through contratado.",
        },
        {
          en: "Error-prone 3 — ‘We absorb the difference’ to win study.",
          es: "Propensa 3 — ‘Absorbemos la diferencia’ para ganar estudio.",
        },
        {
          en: "Error-prone 4 — No closing email; negotiation drifts past leverage window.",
          es: "Propensa 4 — Sin correo cierre; negociación deriva más allá ventana palanca.",
        },
        {
          en: "Error-prone 5 — Benchmark salad: cite Tufts Cost Analysis without tying to your protocol volume and vendor quotes.",
          es: "Propensa 5 — ‘Benchmark ensalada’: citar Tufts Cost Analysis sin atar a volumen protocolo y cotizaciones proveedor.",
        },
        {
          en: "Cross-links: M5 feasibility; M7 recruitment ops cost; M16 audit posture when under-resourced.",
          es: "Vínculos: M5 viabilidad; M7 costo ops reclutamiento; M16 postura auditoría cuando sub-recursos.",
        },
      ],
    },
    {
      lessonId: "M14.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Sponsor budget $8K labs; site central lab contract $12.5K; sponsor cites other sites at $8K. Draft two-line pass-through defense referencing NIH Contracts posture where applicable.",
        es: "Patrocinador $8K labs; contrato lab central sitio $12.5K; patrocinador cita otros sitios $8K. Redactar defensa pass-through dos líneas referenciando postura NIH Contracts donde aplique.",
      },
      keyPoints: [
        {
          en: "Correct: ‘Pass-through per executed vendor agreement ($12.5K); site cannot subsidize external contract; request budget line adjustment per NIH Contracts allowability if institutional policy requires pass-through fidelity.’",
          es: "Correcto: ‘Pass-through según acuerdo proveedor ejecutado ($12.5K); sitio no subsidia contrato externo; solicitar ajuste línea presupuesto según elegibilidad NIH Contracts si política institucional exige fidelidad pass-through.’",
        },
        {
          en: "Tufts Cost Analysis can support narrative that sponsor standard is below market band—secondary to contract amount.",
          es: "Tufts Cost Analysis puede apoyar narrativa de que estándar patrocinador está bajo banda mercado—secundario a monto contrato.",
        },
      ],
    },
    {
      lessonId: "M14.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "BD says: ‘If you absorb $4K on imaging, you lock the award today.’ Site is NIH-funded on partial effort.",
        es: "BD dice: ‘Si absorben $4K en imagen, cierran el award hoy.’ Sitio tiene financiamiento NIH en esfuerzo parcial.",
      },
      keyPoints: [
        {
          en: "Incorrect move: accept silent absorption—may violate NIH Contracts allowability and sets exploitable precedent.",
          es: "Movimiento incorrecto: aceptar absorción silenciosa—puede violar elegibilidad NIH Contracts y fija precedente explotable.",
        },
        {
          en: "Correct move: refuse cross-subsidy; propose sponsor-funded imaging line or protocol amendment budget; cite Tufts Cost Analysis band + vendor quote.",
          es: "Movimiento correcto: rechazar subsidio cruzado; proponer línea imagen patrocinador o presupuesto enmienda protocolo; citar banda Tufts Cost Analysis + cotización proveedor.",
        },
        {
          en: "Why it matters: ‘absorb’ language destroys negotiation credibility and quality runway.",
          es: "Por qué importa: lenguaje ‘absorber’ destruye credibilidad negociación y carril calidad.",
        },
      ],
    },
    {
      lessonId: "M14.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Sponsor offers 25/50/30 milestones; finance says total fixed and milestones immovable; startup burn threatens first-in-patient date.",
        es: "Patrocinador ofrece hitos 25/50/30; finanzas dice total fijo e hitos inamovibles; quema startup amenaza primera inclusión.",
      },
      keyPoints: [
        {
          en: "What CRC sees: real constraint vs sponsor optics—need creative structure without lying about total.",
          es: "Qué ve el CRC: restricción real vs optics patrocinador—necesita estructura creativa sin mentir sobre total.",
        },
        {
          en: "How to think: Tufts Cost Analysis supports ‘execution risk’ narrative; NIH Contracts may require clear direct-charge mapping for any accelerated invoices.",
          es: "Cómo pensar: Tufts Cost Analysis apoya narrativa ‘riesgo ejecución’; NIH Contracts puede exigir mapeo claro cargo directo para facturas aceleradas.",
        },
        {
          en: "Decision: e.g., 30% startup + monthly per-subject invoices for six months + unchanged total; document finance approval trail.",
          es: "Decisión: p. ej., 30% startup + facturas mensuales por sujeto seis meses + total sin cambio; documentar trazo aprobación finanzas.",
        },
      ],
    },
    {
      lessonId: "M14.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 40,
      objective: {
        en: "Close a sponsor selection budget under 40 minutes; cite NIH Contracts and Tufts Cost Analysis in the closing email (D3) where substantive.",
        es: "Cerrar presupuesto selección patrocinador bajo 40 minutos; citar NIH Contracts y Tufts Cost Analysis en correo cierre (D3) donde sea sustantivo.",
      },
      keyPoints: [
        {
          en: "Time box: 40 minutes. Counter below evidence-backed floor or missing pass-through lock = incomplete.",
          es: "Límite: 40 minutos. Contra bajo piso respaldado evidencia o sin blindaje pass-through = incompleto.",
        },
        {
          en: "Deliverables: gap memo (D1), milestones (D2), email (D3).",
          es: "Entregables: memo gaps (D1), hitos (D2), correo (D3).",
        },
      ],
    },
    {
      lessonId: "M14.S5",
      title: { en: "5) Scoring matrix & audit perspective", es: "5) Matriz de puntuación y perspectiva auditoría" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M14.RUB1; connect underbudgeting to execution and compliance risk visible to monitors.",
        es: "Alinear calificación con M14.RUB1; conectar sub-presupuesto a riesgo ejecución y cumplimiento visible a monitores.",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; critical pathway on pass-through, evidence math, and irreversible under-accept risk.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; vía crítica en pass-through, matemática evidencia y riesgo sub-aceptación irreversible.",
        },
        {
          en: "NIH Contracts lens: auditors ask whether costs were allowable, allocable, reasonable.",
          es: "Lente NIH Contracts: auditores preguntan si costos fueron elegibles, asignables, razonables.",
        },
        {
          en: "Tufts Cost Analysis lens: monitors challenge fantasy pricing with industry cost reality.",
          es: "Lente Tufts Cost Analysis: monitores desafían precios fantasía con realidad costo industria.",
        },
      ],
    },
    {
      lessonId: "M14.S6",
      title: { en: "6) Answer framework (elite outputs + fail patterns)", es: "6) Marco de respuesta (salidas élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Produce closing packages that weave NIH Contracts guardrails with Tufts Cost Analysis benchmarks.",
        es: "Producir paquetes cierre que entrelacen guardarraíles NIH Contracts con benchmarks Tufts Cost Analysis.",
      },
      keyPoints: [
        {
          en: "Elite closing email: gap table row + vendor/tufts anchor + requested line change + milestone tweak + ready-to-proceed.",
          es: "Correo cierre élite: fila tabla gap + ancla vendor/tufts + cambio línea solicitado + ajuste hito + listos para proceder.",
        },
        {
          en: "Fail patterns: emotional complaints; benchmark paste without volume; absorbing to ‘save relationship’.",
          es: "Patrones falla: quejas emocionales; pegar benchmark sin volumen; absorber para ‘salvar relación’.",
        },
      ],
    },
    {
      lessonId: "M14.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect budget reality to feasibility, recruitment, and inspection posture.",
        es: "Conectar realidad presupuesto a viabilidad, reclutamiento y postura inspección.",
      },
      keyPoints: [
        {
          en: "M5: underfunded milestones undermine feasibility promises.",
          es: "M5: hitos sub-financiados socavan promesas viabilidad.",
        },
        {
          en: "M7: diversity and outreach plans need funded operations.",
          es: "M7: planes diversidad y alcance necesitan operaciones financiadas.",
        },
        {
          en: "M16: monitors correlate thin staffing with data quality findings.",
          es: "M16: monitores correlacionan personal delgado con hallazgos calidad datos.",
        },
      ],
    },
    {
      lessonId: "M14.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit for NIH compliance, sponsor trust, and trial execution.",
        es: "Hacer explícitas consecuencias para cumplimiento NIH, confianza patrocinador y ejecución ensayo.",
      },
      keyPoints: [
        {
          en: "NIH Contracts: unallowable absorption can become institutional audit findings—not only sponsor economics.",
          es: "NIH Contracts: absorción no elegible puede volverse hallazgos auditoría institucional—no solo economía patrocinador.",
        },
        {
          en: "Execution: under-budget sites cut corners; Tufts Cost Analysis gaps ignored become protocol deviations.",
          es: "Ejecución: sitios sub-presupuesto cortan esquinas; gaps Tufts Cost Analysis ignorados se vuelven desviaciones protocolo.",
        },
        {
          en: "Reputation: sponsor learns anchor price; future studies inherit weak baseline.",
          es: "Reputación: patrocinador aprende precio ancla; estudios futuros heredan línea base débil.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M14.E1",
      description: {
        en: "Accepts sponsor standard budget without gap review—no Tufts Cost Analysis cross-check.",
        es: "Acepta presupuesto estándar patrocinador sin revisión gaps—sin cruce Tufts Cost Analysis.",
      },
      risk: {
        en: "20–40% revenue loss; quality erosion.",
        es: "Pérdida ingresos 20–40%; erosión calidad.",
      },
      expectedLearnerResponse: {
        en: "Line-item gaps; vendor quotes; Tufts Cost Analysis band citation per major driver.",
        es: "Gaps por partida; cotizaciones; cita banda Tufts Cost Analysis por driver mayor.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M14.E2",
      description: {
        en: "Uses sponsor lab rate instead of contracted pass-through—ignores NIH Contracts pass-through fidelity when policy applies.",
        es: "Usa tarifa labs patrocinador en vez pass-through contratado—ignora fidelidad pass-through NIH Contracts cuando política aplica.",
      },
      risk: {
        en: "Site subsidizes vendor; allowability risk.",
        es: "Sitio subsidia proveedor; riesgo elegibilidad.",
      },
      expectedLearnerResponse: {
        en: "Lock contract amount; separate line item; institutional sign-off if NIH-funded.",
        es: "Bloquear monto contrato; partida separada; visto bueno institucional si financiado NIH.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M14.E3",
      description: {
        en: "Commits to absorb imaging gap to win award while PI effort is NIH-funded—NIH Contracts red flag.",
        es: "Se compromete absorber brecha imagen para ganar award mientras esfuerzo PI es financiado NIH—bandera roja NIH Contracts.",
      },
      risk: {
        en: "Cross-subsidy; institutional compliance escalation.",
        es: "Subsidio cruzado; escalamiento cumplimiento institucional.",
      },
      expectedLearnerResponse: {
        en: "Sponsor-funded line; documented disallowance rationale; no silent subsidy.",
        es: "Línea patrocinador; racional disallowance documentado; sin subsidio silencioso.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M14.E4",
      description: {
        en: "No closing email; loses leverage—failed Tufts Cost Analysis opportunity to anchor final numbers.",
        es: "Sin correo cierre; pierde palanca—oportunidad fallida Tufts Cost Analysis para anclar números finales.",
      },
      risk: {
        en: "Sponsor sets future anchors.",
        es: "Patrocinador fija anclas futuras.",
      },
      expectedLearnerResponse: {
        en: "Time-stamped counter with evidence table and milestone ask.",
        es: "Contra fechado con tabla evidencia y pedido hitos.",
      },
      relatedDimensions: ["O", "R"],
    },
    {
      errorId: "M14.E5",
      description: {
        en: "False-correct pattern: cites Tufts Cost Analysis headline numbers but line items still below vendor quotes—looks benchmarked but is underfunded.",
        es: "Patrón ‘parece correcto’: cita números titular Tufts Cost Analysis pero partidas siguen bajo cotizaciones proveedor—luce benchmarked pero sub-financiado.",
      },
      risk: {
        en: "Hidden execution deficit; monitor distrust.",
        es: "Déficit ejecución oculto; desconfianza monitor.",
      },
      expectedLearnerResponse: {
        en: "Reconcile each line: tufts band + vendor + volume + inflation factor.",
        es: "Reconciliar cada línea: banda tufts + proveedor + volumen + factor inflación.",
      },
      relatedDimensions: ["Q", "O"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M14.EX1",
      name: {
        en: "Budget close — NIH Contracts & Tufts Cost Analysis defense",
        es: "Cierre presupuesto — defensa NIH Contracts y Tufts Cost Analysis",
      },
      scenario: {
        en: "Sponsor BD: three backup sites at $52K; respond today. Gap review shows pass-through labs, underpriced ECG, unbudgeted PK (protocol change), earned screening credit, and milestone cash-flow risk. Institution flags NIH Contracts review for any cross-subsidy. Sources support counter above sponsor anchor.",
        es: "BD patrocinador: tres sitios backup a $52K; responder hoy. Revisión gaps muestra labs pass-through, ECG sub-valorado, PK no presupuestado (cambio protocolo), crédito screening ganado y riesgo flujo hitos. Institución marca revisión NIH Contracts para subsidio cruzado. Fuentes apoyan contra sobre ancla patrocinador.",
      },
      inputs: [
        { inputId: "M14.IN1", label: { en: "Sponsor budget + BD deadline email", es: "Presupuesto patrocinador + correo deadline BD" }, inputKind: "bundle" },
        { inputId: "M14.IN2", label: { en: "Vendor contracts (labs/imaging) pass-through", es: "Contratos proveedores (labs/imagen) pass-through" }, inputKind: "pdf" },
        { inputId: "M14.IN3", label: { en: "Tufts Cost Analysis excerpt + benchmark table", es: "Extracto Tufts Cost Analysis + tabla benchmark" }, inputKind: "table" },
        { inputId: "M14.IN4", label: { en: "Milestone terms (current vs proposed)", es: "Términos hitos (actual vs propuesto)" }, inputKind: "table" },
        { inputId: "M14.IN5", label: { en: "NIH Contracts / institutional allowability excerpt", es: "Extracto NIH Contracts / elegibilidad institucional" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "Produce: final counter-total ($) with evidence-backed floor; three-line gap defense (pass-through + procedure pricing using Tufts Cost Analysis + protocol change); milestone counterproposal; ready-to-send closing email (D3) that explicitly names NIH Contracts and Tufts Cost Analysis at least once each and ties each citation to a concrete line item, policy constraint, or benchmark row in the packet. Fail if counter is below defensible evidence floor, pass-through unlocked, or earned screening/PK omitted.",
        es: "Producir: total contra ($) con piso respaldado evidencia; defensa gaps tres líneas (pass-through + pricing procedimiento usando Tufts Cost Analysis + cambio protocolo); contra-propuesta hitos; correo cierre listo (D3) que nombre explícitamente NIH Contracts y Tufts Cost Analysis al menos una vez cada uno y enlace cada cita a partida concreta, restricción política o fila benchmark del paquete. Fallo si contra está bajo piso evidencia, pass-through sin blindar u omite screening/PK ganados.",
      },
      deliverables: [
        { deliverableId: "M14.D1", label: { en: "Final number + gap defense", es: "Número final + defensa gaps" }, formatHint: "short_memo" },
        { deliverableId: "M14.D2", label: { en: "Milestone counterproposal", es: "Contra-propuesta hitos" }, formatHint: "table" },
        {
          deliverableId: "M14.D3",
          label: {
            en: "Negotiation email (cite NIH Contracts + Tufts Cost Analysis)",
            es: "Correo negociación (citar NIH Contracts + Tufts Cost Analysis)",
          },
          formatHint: "email",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M14.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M14.C1",
        description: {
          en: "Locks pass-through with contract evidence; refuses sponsor shortfall and silent absorption; references NIH Contracts allowability where institutional policy requires.",
          es: "Blinda pass-through con evidencia contractual; rechaza faltante patrocinador y absorción silenciosa; referencia elegibilidad NIH Contracts donde política institucional requiera.",
        },
        points: 35,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Critical fail if accepts pass-through subsidy, offers to absorb vendor deltas, or ignores NIH Contracts constraint when scenario flags federal/institutional overlay.",
          es: "Falla crítica si acepta subsidio pass-through, ofrece absorber deltas proveedor u omite restricción NIH Contracts cuando escenario marca capa federal/institucional.",
        },
      },
      {
        criterionId: "M14.C2",
        description: {
          en: "Procedure and change-order pricing uses Tufts Cost Analysis bands plus vendor quotes and protocol volume; captures earned screening and PK items.",
          es: "Pricing procedimiento y orden cambio usa bandas Tufts Cost Analysis más cotizaciones proveedor y volumen protocolo; captura screening ganado e ítems PK.",
        },
        points: 25,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Critical fail if omits evidence math, cites Tufts Cost Analysis without tying to line items/volume, or ignores earned items.",
          es: "Falla crítica si omite matemática evidencia, cita Tufts Cost Analysis sin atar a partidas/volumen u omite ítems ganados.",
        },
      },
      {
        criterionId: "M14.C3",
        description: {
          en: "Milestone strategy protects cash-flow survival with feasible invoicing; preserves total budget honesty.",
          es: "Estrategia hitos protege supervivencia flujo con facturación factible; preserva honestidad presupuesto total.",
        },
        points: 25,
        mapsToDimensions: ["O"],
        failCondition: {
          en: "Fail if leaves milestones unchanged despite stated cash-flow risk or proposes infeasible invoicing.",
          es: "Falla si deja hitos sin cambio pese riesgo flujo declarado o propone facturación inviable.",
        },
      },
      {
        criterionId: "M14.C4",
        description: {
          en: "Closing email is concise, number-explicit, professionally framed; states irreversibility of under-accepting; D3 cites NIH Contracts and Tufts Cost Analysis as required.",
          es: "Correo cierre es conciso, explícito en números, marco profesional; declara irreversibilidad sub-aceptar; D3 cita NIH Contracts y Tufts Cost Analysis como se exige.",
        },
        points: 15,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Critical fail if emotional framing replaces evidence, lacks explicit numbers, makes revenue-destructive concessions, or omits required NIH Contracts / Tufts Cost Analysis citations in D3.",
          es: "Falla crítica si marco emocional reemplaza evidencia, carece números explícitos, hace concesiones destructoras ingresos u omite citas requeridas NIH Contracts / Tufts Cost Analysis en D3.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "O",
      weight: 0.34,
      aggregationKey: "nih_contracts_tufts_cost_analysis_budget_milestone_execution_sustainability",
    },
    {
      dimension: "R",
      weight: 0.28,
      aggregationKey: "contract_pass_through_allowability_and_professional_negotiation_defense",
    },
    {
      dimension: "Q",
      weight: 0.24,
      aggregationKey: "market_rate_math_procedure_pricing_and_earned_item_capture",
    },
    {
      dimension: "C",
      weight: 0.14,
      aggregationKey: "clinical_execution_risk_linked_to_underbudgeting_quality_erosion",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S6 tests feasibility and sponsor-pressure commitment: defending resource reality with evidence—the same NIH Contracts guardrails and Tufts Cost Analysis benchmark discipline as this module.",
      es: "OSCE.S6 prueba viabilidad y compromiso bajo presión patrocinador: defender realidad de recursos con evidencia—los mismos guardarraíles NIH Contracts y disciplina benchmark Tufts Cost Analysis que este módulo.",
    },
    stationIds: ["OSCE.S6"],
  },
  tags: ["operational", "audit_readiness", "regulatory", "advanced", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Module anchors: NIH Contracts (allowability, pass-through fidelity, institutional overlays) and Tufts Cost Analysis (industry trial cost benchmarks). Keep BD, CTA, pass-through, milestone, invoice, CAPA as EN tokens where common.",
    es: "Anclajes del módulo: NIH Contracts (elegibilidad, fidelidad pass-through, capas institucionales) y Tufts Cost Analysis (benchmarks costo ensayos industria). Mantener BD, CTA, pass-through, milestone, invoice, CAPA como tokens EN donde sea habitual.",
  },
};
