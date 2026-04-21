// src/curriculum-engine/data/modules/m14.ts

import type { Module } from "../../types";

/**
 * Module 14 — Site budgeting & contract negotiation: revenue protection under sponsor pressure.
 * Guided practice: three cases (GP1–GP3) — pass-through defense, procedure pricing closure, milestone acceleration.
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
    en: "Lock pass-through costs; counter underpriced procedures with market/contract evidence; restructure milestones to protect cash-flow survival; capture earned items (e.g., screening fees); and deliver concise closing negotiation emails that protect revenue without losing the study—while recognizing that under-accepted budgets are often irreversible mid-study.",
    es: "Blindar costos pass-through; contrarrestar procedimientos sub-presupuestados con evidencia de mercado/contrato; reestructurar hitos para supervivencia de flujo de caja; capturar ingresos ganados (p. ej., screening); y enviar correos de cierre de negociación concisos que protejan ingresos sin perder el estudio—reconociendo que presupuestos sub-aceptados suelen ser irreversibles a mitad de estudio.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines pass-through as non-negotiable costs dictated by external contracts (labs/imaging/vendors) and states the site should not subsidize sponsor shortfalls.",
          es: "Define pass-through como costos no negociables dictados por contratos externos (labs/imagen/proveedores) y afirma que el sitio no debe subsidiar faltantes del patrocinador.",
        },
        {
          en: "Explains why sponsor ‘standard budgets’ are commonly underpriced and why cash-flow milestones are operational survival—not a nice-to-have.",
          es: "Explica por qué los ‘standard budgets’ suelen venir bajos y por qué los hitos de flujo de caja son supervivencia operativa—no un extra.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Builds a gap-based counteroffer using contract/market data for procedures (e.g., ECG, PK, imaging) and writes a sponsor-ready 2–3 line justification per gap.",
          es: "Construye contraoferta basada en gaps usando datos de contrato/mercado para procedimientos (p. ej., ECG, PK, imagen) y redacta justificación de 2–3 líneas por gap lista para patrocinador.",
        },
        {
          en: "Restructures milestones or invoicing cadence to prevent slow financial death while preserving total budget and sponsor optics (startup %, per-subject monthly invoices, screening credits).",
          es: "Reestructura hitos o cadencia de facturación para evitar ‘muerte lenta’ financiera preservando total y optics del patrocinador (%, facturación mensual por sujeto, créditos de screening).",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Negotiates under time pressure without emotional framing: uses contract language, market math, and ‘execution risk’ framing; avoids concessions that signal weakness (e.g., ‘we’ll absorb the difference’).",
          es: "Negocia bajo presión de tiempo sin marco emocional: usa lenguaje contractual, matemática de mercado y marco de ‘riesgo de ejecución’; evita concesiones que señalan debilidad (p. ej., ‘absorbemos la diferencia’).",
        },
        {
          en: "Recognizes systemic underbudgeting risk: repeated underpricing across studies erodes quality and triggers sponsor expectations; proposes a site-level CAPA for budgeting governance and playbooks.",
          es: "Reconoce riesgo sistémico de sub-presupuestación: repetición erosiona calidad y crea expectativas del patrocinador; propone CAPA a nivel sitio para gobierno/playbooks de presupuestos.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M14.L1",
      title: { en: "Core concepts — pass-through lock, market rate math, milestone survival", es: "Conceptos núcleo — lock pass-through, matemática de mercado, supervivencia por hitos" },
      lessonType: "reading",
      objective: {
        en: "Anchor negotiation posture: pass-through is non-negotiable, standard budgets are starting points, and milestone structure is survival.",
        es: "Anclar postura de negociación: pass-through no se negocia, budgets estándar son punto de partida y estructura de hitos es supervivencia.",
      },
      keyPoints: [
        {
          en: "Pass-through = contract cost; site absorbs zero markup and zero shortfall.",
          es: "Pass-through = costo por contrato; sitio absorbe cero markup y cero faltante.",
        },
        {
          en: "Standard budget is a starting point; counter with market data and protocol-required volume math.",
          es: "Presupuesto estándar es punto de partida; contraofertar con datos de mercado y matemática de volumen requerido por protocolo.",
        },
        {
          en: "Milestones = cash-flow survival: front-load or structure invoices so execution is sustainable.",
          es: "Hitos = supervivencia de flujo: adelantar o estructurar facturas para sostener ejecución.",
        },
        {
          en: "Regulatory/quality consequence: chronic underbudgeting leads to instability, quality erosion, and potential sponsor blacklisting.",
          es: "Consecuencia regulatoria/calidad: sub-presupuestación crónica lleva a inestabilidad, erosión de calidad y posible ‘blacklisting’ del patrocinador.",
        },
      ],
    },
    {
      lessonId: "M14.GP1",
      title: { en: "Guided practice — GP-14.1: pass-through defense (2-line email)", es: "Práctica guiada — GP-14.1: defensa pass-through (correo 2 líneas)" },
      lessonType: "case",
      objective: {
        en: "Sponsor budget: $8K labs; site contract: $12.5K; sponsor says other sites accepted $8K. Draft a 2-line response defending $12.5K.",
        es: "Sponsor: $8K labs; contrato del sitio: $12.5K; sponsor dice que otros aceptaron $8K. Redactar respuesta de 2 líneas defendiendo $12.5K.",
      },
      keyPoints: [
        {
          en: "Pass-through language: ‘Labs are pass-through per central lab contract ($12.5K), non-negotiable. Site absorbs zero markup.’",
          es: "Lenguaje pass-through: ‘Labs son pass-through por contrato de lab central ($12.5K), no negociable. Sitio absorbe cero markup.’",
        },
      ],
    },
    {
      lessonId: "M14.GP2",
      title: { en: "Guided practice — GP-14.2: procedure pricing closure (one shot)", es: "Práctica guiada — GP-14.2: cierre de pricing de procedimiento (una oportunidad)" },
      lessonType: "case",
      objective: {
        en: "Sponsor total $45K includes underpriced ECGs. Provide final number, 2-line defense, and 1 strategic concession.",
        es: "Sponsor total $45K incluye ECG sub-presupuestado. Dar número final, defensa 2 líneas y 1 concesión estratégica.",
      },
      keyPoints: [
        {
          en: "Use market math and volume; concession should preserve revenue (e.g., defer screening revenue to enrollment milestone) rather than absorb costs.",
          es: "Usar matemática de mercado y volumen; concesión debe preservar ingresos (p. ej., diferir screening a hito de inclusión) y no absorber costos.",
        },
      ],
    },
    {
      lessonId: "M14.GP3",
      title: { en: "Guided practice — GP-14.3: milestone acceleration (cash-flow survival)", es: "Práctica guiada — GP-14.3: aceleración de hitos (supervivencia flujo de caja)" },
      lessonType: "case",
      objective: {
        en: "Sponsor offers 25/50/30 milestones; finance says budget fixed and milestones cannot move. Propose a creative alternative that preserves total but accelerates cash flow.",
        es: "Sponsor ofrece hitos 25/50/30; finanzas dice presupuesto fijo y no se mueven hitos. Proponer alternativa creativa que preserve total y acelere flujo.",
      },
      keyPoints: [
        {
          en: "Use alternatives: 30% startup + per-subject monthly invoices for first 6 months + 25% closeout; protects execution without changing total.",
          es: "Usar alternativas: 30% startup + facturación mensual por sujeto primeros 6 meses + 25% closeout; protege ejecución sin cambiar total.",
        },
      ],
    },
    {
      lessonId: "M14.L2",
      title: { en: "Answer framework — audit-facing negotiation under pressure", es: "Marco de respuesta — negociación audit-facing bajo presión" },
      lessonType: "recap",
      objective: {
        en: "Consolidate elite negotiation moves and irreversible-risk awareness for sponsor selection deadlines.",
        es: "Consolidar movimientos elite de negociación y conciencia de irreversibilidad ante deadlines de selección.",
      },
      keyPoints: [
        {
          en: "Elite CRC = 4 moves: lock pass-through; fix procedure pricing with market data; protect cash flow via milestones/invoicing; capture earned items (screening, protocol changes like PK).",
          es: "CRC elite = 4 movimientos: blindar pass-through; corregir pricing con datos de mercado; proteger flujo con hitos/facturación; capturar ganados (screening, cambios de protocolo como PK).",
        },
        {
          en: "Communication control: gap analysis + contract/market evidence only—no complaints. Close with a ready-to-proceed line once aligned.",
          es: "Control de comunicación: análisis de gaps + evidencia de contrato/mercado—sin quejas. Cerrar con ‘listos para proceder’ al alinear.",
        },
        {
          en: "Irreversibility awareness: under-accepted budgets typically cannot be recovered mid-study. If you lock the wrong number, you pay for it in quality and staff burnout—so protect execution upfront.",
          es: "Conciencia de irreversibilidad: presupuestos sub-aceptados casi nunca se recuperan a mitad de estudio. Si fijas el número mal, lo pagas en calidad y burnout—protege ejecución desde el inicio.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M14.E1",
      description: { en: "Accepts sponsor ‘standard budget’ without gap review.", es: "Acepta ‘standard budget’ del sponsor sin revisión de gaps." },
      risk: { en: "Instant 20–40% loss; quality erosion via under-resourcing.", es: "Pérdida instantánea 20–40%; erosión de calidad por sub-recursos." },
      expectedLearnerResponse: {
        en: "Run a line-item gap analysis; counter with contract/market evidence and required volume math.",
        es: "Hacer gap analysis por partida; contraofertar con evidencia de contrato/mercado y matemática de volumen requerido.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M14.E2",
      description: { en: "Uses sponsor lab rate instead of contracted pass-through cost.", es: "Usa tarifa de labs del sponsor en vez del costo pass-through por contrato." },
      risk: { en: "Pass-through death: site subsidizes external vendor costs.", es: "Muerte por pass-through: el sitio subsidia costos de proveedor externo." },
      expectedLearnerResponse: {
        en: "Lock pass-through with contract amount; show ‘no markup’ posture; request budget update or separate pass-through line item.",
        es: "Blindar pass-through con monto contractual; mostrar ‘sin markup’; pedir ajuste o partida separada de pass-through.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M14.E3",
      description: { en: "Commits ‘we’ll absorb the difference’ to win the study.", es: "Se compromete a ‘absorber la diferencia’ para ganar el estudio." },
      risk: { en: "Signals weak site; invites future exploitation and quality failures.", es: "Señala sitio débil; invita explotación futura y fallas de calidad." },
      expectedLearnerResponse: {
        en: "Refuse subsidization; reframe as execution risk; propose budget/milestone alternatives that preserve sustainability.",
        es: "Rechazar subsidio; enmarcar como riesgo de ejecución; proponer alternativas de presupuesto/hitos sostenibles.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M14.E4",
      description: { en: "No pushback on first offer and no closing email; negotiation drifts until site loses leverage.", es: "No hay pushback a primera oferta ni correo de cierre; la negociación deriva y el sitio pierde palanca." },
      risk: { en: "Lost leverage; sponsor sets the anchor for future studies.", es: "Palanca perdida; el sponsor fija ancla para futuros estudios." },
      expectedLearnerResponse: {
        en: "Respond quickly with a gap-based counter and a closing email with numbers, evidence, milestones, and readiness-to-proceed.",
        es: "Responder rápido con contra basada en gaps y correo de cierre con números, evidencia, hitos y ‘listos para proceder’.",
      },
      relatedDimensions: ["O", "R"],
    },
    {
      errorId: "M14.E5",
      description: { en: "Pattern: three studies in a row accept the same underpricing; sponsor learns the site will work for free.", es: "Patrón: tres estudios seguidos aceptan el mismo subprecio; sponsor aprende que el sitio trabaja gratis." },
      risk: { en: "Systemic revenue loss → staffing instability → quality findings; sponsor blacklisting risk if performance drops.", es: "Pérdida sistémica de ingresos → inestabilidad de personal → hallazgos de calidad; riesgo de blacklisting si baja desempeño." },
      expectedLearnerResponse: {
        en: "Site-level CAPA: budgeting playbook, minimum price floors, pass-through lock checklist, milestone standards, and retrospective review of missed gaps.",
        es: "CAPA a nivel sitio: playbook de presupuestos, pisos mínimos, checklist de pass-through, estándar de hitos y revisión retrospectiva de gaps omitidos.",
      },
      relatedDimensions: ["O", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M14.EX1",
      name: { en: "Budget close — site selection deadline", es: "Cierre de presupuesto — deadline de selección" },
      scenario: {
        en: "Sponsor BD email: ‘We have 3 backup sites at $52K. Let us know today if you accept.’ Your gap review shows pass-through labs, underpriced ECG, unbudgeted PK samples (protocol change), screening credit earned, and required milestones for cash-flow survival.",
        es: "Correo BD del sponsor: ‘Tenemos 3 sitios backup a $52K. Confirmen hoy si aceptan.’ Tu revisión de gaps muestra labs pass-through, ECG sub-presupuestado, PK no presupuestado (cambio de protocolo), crédito de screening ganado y hitos requeridos para supervivencia de flujo.",
      },
      inputs: [
        { inputId: "M14.IN1", label: { en: "Sponsor budget + BD deadline email", es: "Presupuesto sponsor + correo deadline BD" }, inputKind: "bundle" },
        { inputId: "M14.IN2", label: { en: "Vendor contracts (labs/imaging) pass-through rates", es: "Contratos de proveedores (labs/imagen) tasas pass-through" }, inputKind: "pdf" },
        { inputId: "M14.IN3", label: { en: "Market rate sheet (ECG/PK) + volume assumptions", es: "Hoja de tarifas de mercado (ECG/PK) + supuestos de volumen" }, inputKind: "table" },
        { inputId: "M14.IN4", label: { en: "Milestone terms + invoice rules (current vs proposed)", es: "Términos de hitos + reglas de factura (actual vs propuesto)" }, inputKind: "table" },
      ],
      learnerTask: {
        en: "Produce OSCE-style output: final total ($); 3-line gap defense (pass-through + procedure pricing + protocol change); counter milestones (e.g., 40/40/20); and a ready-to-send closing email. Fail if: counter is < $60K, no pass-through lock, or ignores screening/PK earned items.",
        es: "Entregar salida tipo OSCE: total final ($); defensa de gaps en 3 líneas (pass-through + pricing procedimiento + cambio de protocolo); contra de hitos (p. ej., 40/40/20); y correo de cierre listo para enviar. Fallo si: contra < $60K, no blinda pass-through o ignora screening/PK ganados.",
      },
      deliverables: [
        { deliverableId: "M14.D1", label: { en: "Final number + gap defense", es: "Número final + defensa de gaps" }, formatHint: "short_memo" },
        { deliverableId: "M14.D2", label: { en: "Milestone counterproposal", es: "Contra-propuesta de hitos" }, formatHint: "table" },
        { deliverableId: "M14.D3", label: { en: "Ready-to-send negotiation email", es: "Correo de negociación listo para enviar" }, formatHint: "email" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M14.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M14.C1",
        description: {
          en: "Locks pass-through costs with contract evidence; refuses subsidization and states no-markup posture clearly.",
          es: "Blinda costos pass-through con evidencia contractual; rechaza subsidio y declara postura sin markup con claridad.",
        },
        points: 30,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Accepts sponsor pass-through shortfall or offers to absorb vendor cost differences.",
          es: "Acepta faltante de pass-through del sponsor u ofrece absorber diferencias de costo del proveedor.",
        },
      },
      {
        criterionId: "M14.C2",
        description: {
          en: "Procedure pricing correction uses market math and protocol volume; captures unbudgeted protocol changes (e.g., PK) and earned screening credits.",
          es: "Corrección de pricing usa matemática de mercado y volumen; captura cambios de protocolo no presupuestados (p. ej., PK) y créditos de screening ganados.",
        },
        points: 30,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Counters without evidence math, omits key required cost drivers, or ignores earned items already performed.",
          es: "Contraoferta sin matemática de evidencia, omite motores de costo requeridos o ignora items ganados ya ejecutados.",
        },
      },
      {
        criterionId: "M14.C3",
        description: {
          en: "Milestone strategy protects cash flow and execution sustainability without creating misleading commitments; proposes a sponsor-palatable structure.",
          es: "Estrategia de hitos protege flujo de caja y sostenibilidad sin compromisos engañosos; propone estructura aceptable para sponsor.",
        },
        points: 20,
        mapsToDimensions: ["O"],
        failCondition: {
          en: "Leaves milestones unchanged despite clear cash-flow risk or proposes terms that are operationally infeasible.",
          es: "Deja hitos sin cambios pese a riesgo claro de flujo o propone términos operativamente inviables.",
        },
      },
      {
        criterionId: "M14.C4",
        description: {
          en: "Closing communication is concise and professional: gap-based, numbers explicit, one strategic concession if needed, and a clear ‘ready to proceed’ line; states irreversibility of under-accepting budgets.",
          es: "Comunicación de cierre es concisa y profesional: basada en gaps, números explícitos, una concesión estratégica si aplica y ‘listos para proceder’; declara irreversibilidad de sub-aceptar presupuestos.",
        },
        points: 20,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Uses emotional framing/complaints, lacks explicit numbers, or makes concessions that undermine revenue protection.",
          es: "Usa quejas/emoción, carece de números explícitos o hace concesiones que socavan protección de ingresos.",
        },
      },
    ],
  },
  scorecardContribution: [
    { dimension: "O", weight: 0.34, aggregationKey: "budget_gap_analysis_milestone_design_and_execution_sustainability" },
    { dimension: "R", weight: 0.28, aggregationKey: "contract_pass_through_lock_and_professional_negotiation_defense" },
    { dimension: "Q", weight: 0.24, aggregationKey: "market_rate_math_procedure_pricing_and_earned_item_capture" },
    { dimension: "C", weight: 0.14, aggregationKey: "clinical_execution_risk_linked_to_underbudgeting_quality_erosion" },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S6 is the feasibility and sponsor-pressure commitment station: it tests resisting unrealistic targets and defending resource reality—the same survival mindset and revenue-protection logic as this module.",
      es: "OSCE.S6 es la estación de viabilidad y presión del patrocinador: evalúa resistir metas irreales y defender realidad de recursos—la misma mentalidad de supervivencia y lógica de protección de ingresos que este módulo.",
    },
    stationIds: ["OSCE.S6"],
  },
  tags: ["operational", "audit_readiness", "regulatory", "advanced", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Keep BD, CTA, pass-through, milestone, invoice, CAPA as EN operational tokens; expand once in ES if needed.",
    es: "Mantener BD, CTA, pass-through, milestone, invoice, CAPA como tokens operativos EN; expandir una vez en ES si hace falta.",
  },
};

