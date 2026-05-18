// src/curriculum-engine/data/modules/m17.ts

import type { Module } from "../../types";

/**
 * Module 17 — Crisis / Integration: cross-station command under concurrent FDA, CRO, and sponsor pressure.
 *
 * Crisis / Integration standard: prioritization, ≥3 cross-station linkages tied to Modules M11–M16, integrated defense,
 * and escalation (internal QA/compliance + sponsor escalation plan). Anchors: ACRP Certification, ASHP Competency.
 *
 * Rubric: totalPoints = sum(criteria.points); passingPoints 94.
 */
export const MODULE_M17: Module = {
  id: "M17",
  slug: "crisis-integration-cross-station-command",
  internalName: "mod_17_crisis_integration_acrp_ashp_m11_m16",
  category: "capstone",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "Q", "C"],
  title: {
    en: "Module 17 — Crisis / Integration: Cross-Station Command Under Inspection Pressure",
    es: "Módulo 17 — Crisis / Integración: mando multi-estación bajo presión de inspección",
  },
  objective: {
    en: "CRC can prioritize competing inspection-day risks in explicit priority order; document ≥3 cross-station linkages that each tie to at least one anchor module among M11, M12, M13, M14, M15, and M16; deliver one integrated defense statement that cites ACRP Certification and ASHP Competency where substantive; and produce a combined escalation package with (A) QA/compliance containment and (B) a sponsor escalation plan (contacts, timelines, decision rights, artifacts)—without integrity shortcuts, contradictions, or invented facts.",
    es: "El CRC puede priorizar riesgos competidores en día de inspección con orden de prioridad explícito; documentar ≥3 vínculos multi-estación que cada uno ate al menos un módulo ancla entre M11, M12, M13, M14, M15 y M16; entregar una defensa integrada única que cite ACRP Certification y ASHP Competency donde sea sustantivo; y producir paquete de escalamiento combinado con (A) contención QA/cumplimiento y (B) plan de escalamiento al patrocinador (contactos, plazos, derechos de decisión, artefactos)—sin atajos de integridad, contradicciones ni hechos inventados.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States the crisis rule: integrity and patient safety outrank speed, revenue, and convenience—especially under audit pressure; names ACRP Certification as the professional competence frame and ASHP Competency as the pharmacy–CRC interface frame when IP facts appear.",
          es: "Enuncia regla de crisis: integridad y seguridad del paciente superan velocidad, ingresos y conveniencia—especialmente bajo presión de auditoría; nombra ACRP Certification como marco de competencia profesional y ASHP Competency como marco interfaz farmacia–CRC cuando aparezcan hechos IP.",
        },
        {
          en: "Names cross-station failure patterns and maps them to Modules M11–M16 (e.g., source/EDC tension M11–M12; monitoring narrative M13; budget pressure M14; recruitment integrity M15; OSCE artifacts M16).",
          es: "Nombra patrones de falla multi-estación y los mapea a Módulos M11–M16 (p. ej., tensión fuente/EDC M11–M12; narrativa monitoría M13; presión presupuesto M14; integridad reclutamiento M15; artefactos OSCE M16).",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Builds priority order (1–5) tied to patient/data/compliance/revenue impacts and a linkage map where each linkage names two OSCE stations (or artifact streams) plus one module anchor M11–M16.",
          es: "Construye orden de prioridades (1–5) ligado a impactos paciente/datos/cumplimiento/ingresos y mapa de vínculos donde cada vínculo nombre dos estaciones OSCE (o flujos de artefacto) más un ancla de módulo M11–M16.",
        },
        {
          en: "Drafts audit-facing outputs for FDA and sponsor/CRO that share the same core facts, open risks, and ACRP Certification / ASHP Competency-aligned boundaries on claims.",
          es: "Redacta salidas orientadas a auditoría para FDA y patrocinador/CRO que compartan mismos hechos núcleo, riesgos abiertos y límites alineados ACRP Certification / ASHP Competency en afirmaciones.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects integrity traps (backdate, false-close, rewrite source, hide deviations) and escalates with documented trail; refuses pharmacy/IP speculation inconsistent with ASHP Competency.",
          es: "Detecta trampas de integridad (retrofechar, cierre falso, reescribir fuente, ocultar desviaciones) y escala con trazo documentado; rechaza especulación farmacia/IP inconsistente con ASHP Competency.",
        },
        {
          en: "Maintains cross-station consistency and explains how M11–M16 pre-capstone disciplines constrain crisis options without inventing artifacts.",
          es: "Mantiene consistencia multi-estación y explica cómo disciplinas pre-capstone M11–M16 restringen opciones de crisis sin inventar artefactos.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M17.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Define crisis success: explicit priority order, module-anchored linkages (M11–M16), integrated defense citing ACRP Certification and ASHP Competency, plus sponsor escalation plan—under time pressure.",
        es: "Definir éxito en crisis: orden de prioridad explícito, vínculos anclados a módulos (M11–M16), defensa integrada citando ACRP Certification y ASHP Competency, más plan escalamiento patrocinador—bajo presión temporal.",
      },
      keyPoints: [
        {
          en: "Graded on: no contradiction drift; ≥3 linkages each tied to M11–M16; D3 cites ACRP Certification and ASHP Competency; D4 includes sponsor escalation plan section.",
          es: "Se califica: sin deriva de contradicciones; ≥3 vínculos cada uno atado a M11–M16; D3 cita ACRP Certification y ASHP Competency; D4 incluye sección plan escalamiento patrocinador.",
        },
        {
          en: "Tokens stay EN where industry-standard (ACRP Certification, ASHP Competency, OSCE, CAPA, EDC, SAE, FDA 483).",
          es: "Tokens permanecen EN donde es estándar industria (ACRP Certification, ASHP Competency, OSCE, CAPA, EDC, SAE, FDA 483).",
        },
      ],
    },
    {
      lessonId: "M17.S2",
      title: { en: "2) Core concepts (crisis rules)", es: "2) Conceptos núcleo (reglas de crisis)" },
      lessonType: "reading",
      durationMinutes: 18,
      objective: {
        en: "Govern decisions under inspection-day concurrency using ACRP Certification integrity norms and ASHP Competency boundaries on IP statements.",
        es: "Gobernar decisiones bajo concurrencia de inspección usando normas integridad ACRP Certification y límites ASHP Competency en afirmaciones IP.",
      },
      keyPoints: [
        {
          en: "ACRP Certification lens: competence = truthful, artifact-backed coordination under pressure—not rhetorical confidence.",
          es: "Lente ACRP Certification: competencia = coordinación veraz respaldada por artefactos bajo presión—no confianza retórica.",
        },
        {
          en: "ASHP Competency lens: CRC does not invent pharmacy facts; align statements to accountability rows and temperature/quantity evidence.",
          es: "Lente ASHP Competency: CRC no inventa hechos farmacia; alinear afirmaciones a filas contabilidad y evidencia temperatura/cantidad.",
        },
        {
          en: "Rule: one story across artifacts; FDA-facing and sponsor-facing narratives share core facts and open risks.",
          es: "Regla: una sola historia entre artefactos; narrativas FDA y patrocinador comparten hechos núcleo y riesgos abiertos.",
        },
        {
          en: "Rule: integrity traps = global fail (backdating, false closure, source rewrite, invented facts, deviation misclassification).",
          es: "Regla: trampas integridad = fallo global (retrofechar, cierre falso, reescribir fuente, hechos inventados, mala clasificación desviación).",
        },
        {
          en: "Error-prone 1 — Budget-first reply while SAE or eligibility thread is open.",
          es: "Propensa 1 — Responder presupuesto primero mientras hilo SAE o elegibilidad está abierto.",
        },
        {
          en: "Error-prone 2 — Linkage map that lists stations without M11–M16 module anchors.",
          es: "Propensa 2 — Mapa de vínculos que lista estaciones sin anclas de módulo M11–M16.",
        },
        {
          en: "Error-prone 3 — Sponsor escalation plan that names only ‘email BD’ with no timeline or artifacts.",
          es: "Propensa 3 — Plan escalamiento patrocinador que solo nombra ‘correo BD’ sin plazo ni artefactos.",
        },
        {
          en: "Error-prone 4 — Integrated defense that omits ACRP Certification or ASHP Competency when claims touch professional conduct or IP.",
          es: "Propensa 4 — Defensa integrada que omite ACRP Certification o ASHP Competency cuando afirmaciones tocan conducta profesional o IP.",
        },
        {
          en: "Error-prone 5 — Escalation package missing sponsor decision-rights (who can halt enrollment, hold payments, approve CAPA).",
          es: "Propensa 5 — Paquete escalamiento sin derechos de decisión patrocinador (quién puede detener inclusión, retener pagos, aprobar CAPA).",
        },
      ],
    },
    {
      lessonId: "M17.S3",
      title: { en: "3) Cross-module links (M11–M16)", es: "3) Enlaces entre módulos (M11–M16)" },
      lessonType: "reading",
      durationMinutes: 20,
      objective: {
        en: "Force explicit module anchors M11 through M16 so crisis linkages are traceable to flagship training—not generic ‘quality’ talk.",
        es: "Forzar anclas de módulo M11 a M16 para que vínculos de crisis sean trazables al entrenamiento flagship—no charla genérica de ‘calidad’.",
      },
      keyPoints: [
        {
          en: "M11 — Source + ALCOA+: governs truthful claims; preserve originals; no backdating.",
          es: "M11 — Fuente + ALCOA+: gobierna afirmaciones veraces; preservar originales; sin retrofechar.",
        },
        {
          en: "M12 — EDC + query discipline: false closure is integrity breakdown; field history is evidence.",
          es: "M12 — EDC + disciplina queries: cierre falso es quiebre integridad; historial de campo es evidencia.",
        },
        {
          en: "M13 — Monitoring defense: walkthrough must match artifacts; pressure resistance documented.",
          es: "M13 — Defensa monitoría: walkthrough debe coincidir artefactos; resistencia a presión documentada.",
        },
        {
          en: "M14 — Site budgeting & negotiation: revenue protection real—cannot override compliance; budget emails must not contradict inspection narrative.",
          es: "M14 — Presupuesto y negociación sitio: protección ingresos real—no anula cumplimiento; correos presupuesto no deben contradecir narrativa inspección.",
        },
        {
          en: "M15 — Recruitment & retention: milestone pressure must not hide screen-fail drivers or FDA Diversity Action Plan / NIH Recruitment documentation truthfulness.",
          es: "M15 — Reclutamiento y retención: presión hitos no debe ocultar drivers screen-fail ni veracidad documental FDA Diversity Action Plan / NIH Recruitment.",
        },
        {
          en: "M16 — Capstone OSCE: station outputs are controlling artifacts; crisis integration keeps station-to-station decisions aligned with ACRP Certification and ASHP Competency.",
          es: "M16 — Capstone OSCE: salidas de estación son artefactos controladores; integración crisis mantiene decisiones alineadas ACRP Certification y ASHP Competency.",
        },
      ],
    },
    {
      lessonId: "M17.S4.GP1",
      title: { en: "4) Guided practice — Scenario 1 (wrong prioritization trap)", es: "4) Práctica guiada — Escenario 1 (trampa priorización incorrecta)" },
      lessonType: "case",
      durationMinutes: 12,
      objective: {
        en: "Detect budget-first prioritization and restate top-3 order with ACRP Certification–aligned rationale (subject protection and integrity first).",
        es: "Detectar priorización presupuesto primero y re-enunciar top-3 con racional alineado ACRP Certification (protección sujeto e integridad primero).",
      },
      keyPoints: [
        {
          en: "Simultaneous inputs: (1) Sponsor BD: accept $52K or move today. (2) CRO: deviation log blank for window miss. (3) FDA: SAE timeline for Subject 167.",
          es: "Entradas simultáneas: (1) BD patrocinador: aceptar $52K o mover hoy. (2) CRO: log desviaciones en blanco por ventana. (3) FDA: línea tiempo SAE Sujeto 167.",
        },
        {
          en: "Correct: contain safety/integrity (M8/M10/M4 themes via stations), document, then bounded budget reply—cite ASHP Competency only if IP facts are in play.",
          es: "Correcto: contener seguridad/integridad (temas M8/M10/M4 vía estaciones), documentar, luego respuesta presupuesto acotada—citar ASHP Competency solo si hay hechos IP.",
        },
      ],
    },
    {
      lessonId: "M17.S4.GP2",
      title: { en: "4) Guided practice — Scenario 2 (cross-station inconsistency)", es: "4) Práctica guiada — Escenario 2 (inconsistencia entre estaciones)" },
      lessonType: "case",
      durationMinutes: 12,
      objective: {
        en: "Resolve contradiction between station outputs using controlling artifacts and M11/M12 traceability—no silent rewrites.",
        es: "Resolver contradicción entre salidas de estación usando artefactos controladores y trazabilidad M11/M12—sin reescrituras silenciosas.",
      },
      keyPoints: [
        {
          en: "S1 says eligibility failure stopped randomization; S2 says randomized per schedule—both cannot be true; disclose open risk and escalate per M16 integration rules.",
          es: "S1 dice falla elegibilidad detuvo aleatorización; S2 dice aleatorizado según agenda—no pueden ambas ser verdad; declarar riesgo abierto y escalar según reglas integración M16.",
        },
      ],
    },
    {
      lessonId: "M17.S4.GP3",
      title: { en: "4) Guided practice — Scenario 3 (ambiguous multi-pressure)", es: "4) Práctica guiada — Escenario 3 (multi-presión ambigua)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Handle AE onset vs unsigned source under DB-lock pressure without false closure; ACRP Certification favors explicit unknowns.",
        es: "Manejar inicio AE vs fuente sin firma bajo presión DB lock sin cierre falso; ACRP Certification favorece desconocidos explícitos.",
      },
      keyPoints: [
        {
          en: "Monitor says ‘close it, fix source later’—integrity trap; refuse; document pressure; sponsor escalation plan includes CRO medical writer + QA, not silent agreement.",
          es: "Monitor dice ‘cierra, arregla fuente después’—trampa integridad; rechazar; documentar presión; plan escalamiento patrocinador incluye escritor médico CRO + QA, no acuerdo silencioso.",
        },
      ],
    },
    {
      lessonId: "M17.S5",
      title: { en: "5) Integrated crisis scenario (inspection-day concurrency)", es: "5) Escenario de crisis integrado (concurrencia día inspección)" },
      lessonType: "simulation",
      durationMinutes: 14,
      objective: {
        en: "Tie safety, source/EDC, deviations, budget, and recruitment pressures into one timeline with M11–M16 anchors.",
        es: "Atar seguridad, fuente/EDC, desviaciones, presupuesto y reclutamiento en una línea de tiempo con anclas M11–M16.",
      },
      keyPoints: [
        {
          en: "Concurrent roles: FDA (integrity), CRO (queries/deviations), sponsor (budget/payment)—single integrated defense must serve all three without contradiction.",
          es: "Roles concurrentes: FDA (integridad), CRO (queries/desviaciones), patrocinador (presupuesto/pago)—defensa integrada única debe servir a los tres sin contradicción.",
        },
      ],
    },
    {
      lessonId: "M17.S6",
      title: { en: "6) Crisis workflow (outputs required)", es: "6) Flujo de crisis (salidas requeridas)" },
      lessonType: "worksheet",
      durationMinutes: 12,
      objective: {
        en: "Lock deliverable order: D1 priority, D2 linkages (≥3 + M11–M16), D3 defense + ACRP Certification + ASHP Competency, D4 escalation + sponsor escalation plan.",
        es: "Fijar orden entregables: D1 prioridad, D2 vínculos (≥3 + M11–M16), D3 defensa + ACRP Certification + ASHP Competency, D4 escalamiento + plan patrocinador.",
      },
      keyPoints: [
        {
          en: "D4 must include Table A (internal/QA/compliance) and Table B (sponsor escalation plan: contacts, 24–72h actions, artifacts, decision rights).",
          es: "D4 debe incluir Tabla A (interno/QA/cumplimiento) y Tabla B (plan escalamiento patrocinador: contactos, acciones 24–72h, artefactos, derechos decisión).",
        },
      ],
    },
    {
      lessonId: "M17.S7",
      title: { en: "7) Scoring matrix (contradictions + global fail)", es: "7) Matriz de puntuación (contradicciones + fallo global)" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Align to M17.RUB1: contradiction penalties and integrity global-fail triggers.",
        es: "Alinear a M17.RUB1: penalizaciones por contradicción y disparadores fallo global integridad.",
      },
      keyPoints: [
        {
          en: "Pass threshold: ≥94/100; critical pathway on hidden contradictions, missing sponsor escalation plan, or missing ACRP Certification / ASHP Competency citations in D3 when claims warrant.",
          es: "Umbral aprobar: ≥94/100; vía crítica en contradicciones ocultas, plan escalamiento patrocinador faltante o citas ACRP Certification / ASHP Competency faltantes en D3 cuando afirmaciones lo exijan.",
        },
      ],
    },
    {
      lessonId: "M17.S8",
      title: { en: "8) Practical exercise (live simulation)", es: "8) Ejercicio práctico (simulación en vivo)" },
      lessonType: "simulation",
      durationMinutes: 10,
      objective: {
        en: "Rehearse 20-minute time box: all four output types complete before clock stops.",
        es: "Ensayar caja 20 minutos: los cuatro tipos de salida completos antes del reloj.",
      },
      keyPoints: [
        {
          en: "Document at least one integrity trap refusal and one QA/compliance escalation in D4 Table A.",
          es: "Documentar al menos un rechazo trampa integridad y un escalamiento QA/cumplimiento en Tabla A de D4.",
        },
      ],
    },
    {
      lessonId: "M17.S9",
      title: { en: "9) Answer framework (integrated defense)", es: "9) Marco de respuesta (defensa integrada)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Elite defense template: situation, risks, known/unknown, containment, CAPA theme, escalation—including sponsor path.",
        es: "Plantilla defensa élite: situación, riesgos, conocido/desconocido, contención, tema CAPA, escalamiento—incluyendo vía patrocinador.",
      },
      keyPoints: [
        {
          en: "Sample framing (adapt to facts): actions align with ACRP Certification expectations for GCP-coordinated conduct under inspection pressure; IP-adjacent statements stay within ASHP Competency evidence limits.",
          es: "Marco muestra (adaptar a hechos): acciones alinean expectativas ACRP Certification para conducta coordinada GCP bajo presión inspección; afirmaciones adyacentes IP permanecen dentro límites evidencia ASHP Competency.",
        },
        {
          en: "No blame-shifting; no claims without artifact support; label open queries explicitly.",
          es: "Sin culpar; sin afirmar sin soporte artefacto; etiquetar queries abiertas explícitamente.",
        },
      ],
    },
    {
      lessonId: "M17.S10",
      title: { en: "10) Certification outcome", es: "10) Resultado de certificación" },
      lessonType: "reading",
      durationMinutes: 8,
      objective: {
        en: "State how crisis performance and M17 rubric interact with flagship pass rules and remediation.",
        es: "Declarar cómo desempeño crisis y rúbrica M17 interactúan con reglas pass flagship y remediación.",
      },
      keyPoints: [
        {
          en: "GLOBAL FAIL integrity triggers require remediation and re-demonstration regardless of numeric score.",
          es: "Disparadores GLOBAL FAIL integridad exigen remediación y re-demostración sin importar puntaje numérico.",
        },
      ],
    },
    {
      lessonId: "M17.S11",
      title: { en: "11) Failure impact", es: "11) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 8,
      objective: {
        en: "Consequences: systemic 483 risk, sponsor termination, payment loss, credibility collapse—and loss of trust in ACRP Certification signal if integrity fails.",
        es: "Consecuencias: riesgo 483 sistémico, terminación patrocinador, pérdida pago, colapso credibilidad—y pérdida confianza en señal ACRP Certification si falla integridad.",
      },
      keyPoints: [
        {
          en: "Sponsor escalation mishandling (late, vague, contradictory) converts technical issues into portfolio-level distrust.",
          es: "Mal manejo escalamiento patrocinador (tardío, vago, contradictorio) convierte temas técnicos en desconfianza a nivel portafolio.",
        },
      ],
    },
    {
      lessonId: "M17.REF",
      title: { en: "12) References & audit posture", es: "12) Referencias y postura auditoría" },
      lessonType: "reading",
      durationMinutes: 8,
      objective: {
        en: "Anchor crisis execution to ACRP Certification and ASHP Competency as external competence frames—supplement with ICH GCP and site SOPs as applicable.",
        es: "Anclar ejecución de crisis a ACRP Certification y ASHP Competency como marcos externos de competencia—suplementar con ICH GCP y SOPs del sitio según aplique.",
      },
      keyPoints: [
        {
          en: "ACRP Certification: use as the CRC professional standard for judgment, documentation, and escalation under pressure (verify current program requirements at acrpnet.org when preparing for live exam).",
          es: "ACRP Certification: usar como estándar profesional CRC para juicio, documentación y escalamiento bajo presión (verificar requisitos vigentes del programa en acrpnet.org al preparar examen en vivo).",
        },
        {
          en: "ASHP Competency: use as the competency model boundary for pharmacy–clinical coordination—CRC statements must not exceed what pharmacy records support.",
          es: "ASHP Competency: usar como límite del modelo de competencia para coordinación farmacia–clínica—afirmaciones CRC no deben exceder lo que respaldan registros farmacia.",
        },
        {
          en: "Audit posture: loss-of-control narratives (inconsistent stories, integrity shortcuts) map to inspection patterns where audit trails cannot support critical decisions.",
          es: "Postura auditoría: narrativas pérdida de control (historias inconsistentes, atajos integridad) mapean a patrones inspección donde audit trails no sustentan decisiones críticas.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M17.E1",
      description: {
        en: "Obvious: crisis leader answers sponsor budget email first while FDA SAE thread and CRO deviation gap remain open.",
        es: "Obvia: líder crisis responde correo presupuesto patrocinador primero mientras hilo SAE FDA y brecha desviación CRO siguen abiertos.",
      },
      risk: {
        en: "Misaligned priorities; audit heat; violates ACRP Certification sequencing norms.",
        es: "Prioridades desalineadas; calor auditoría; viola normas secuencia ACRP Certification.",
      },
      expectedLearnerResponse: {
        en: "Reorder priority list; contain safety/integrity; attach artifacts; then sponsor reply with explicit dependencies.",
        es: "Reordenar lista prioridad; contener seguridad/integridad; adjuntar artefactos; luego respuesta patrocinador con dependencias explícitas.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M17.E2",
      description: {
        en: "Subtle: linkage map lists OSCE stations but never cites M11–M16 module anchors—looks thorough but fails traceability to training system.",
        es: "Sutil: mapa vínculos lista estaciones OSCE pero nunca cita anclas módulo M11–M16—luce exhaustivo pero falla trazabilidad al sistema de entrenamiento.",
      },
      risk: {
        en: "Generic integration; cannot defend why a control exists; sponsor challenges ‘so what?’.",
        es: "Integración genérica; no defiende por qué existe un control; patrocinador desafía ‘¿y qué?’.",
      },
      expectedLearnerResponse: {
        en: "Rewrite each linkage as ‘Station X artifact ↔ Station Y artifact ↔ Module M## skill’.",
        es: "Reescribir cada vínculo como ‘artefacto estación X ↔ artefacto estación Y ↔ habilidad Módulo M##’.",
      },
      relatedDimensions: ["Q", "O"],
    },
    {
      errorId: "M17.E3",
      description: {
        en: "Looks correct but wrong: sponsor escalation plan that is polite prose only—no named roles, timestamps, or attachment list.",
        es: "Parece correcto pero está mal: plan escalamiento patrocinador que es solo prosa cortés—sin roles nombrados, marcas tiempo ni lista adjuntos.",
      },
      risk: {
        en: "Non-operational plan; fails under monitor challenge; payment hold conversations stall.",
        es: "Plan no operacional; falla bajo desafío monitor; conversaciones retención pago se estancan.",
      },
      expectedLearnerResponse: {
        en: "Table B: owner, 24h action, 72h action, artifact bundle, escalation recipient with backup contact.",
        es: "Tabla B: responsable, acción 24h, acción 72h, paquete artefactos, destinatario escalamiento con contacto respaldo.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M17.E4",
      description: {
        en: "Ambiguous: IP quantity narrative ‘confirmed by pharmacy voice’ without row-level match—ASHP Competency boundary crossed into speculation.",
        es: "Ambigua: narrativa cantidad IP ‘confirmada por voz farmacia’ sin coincidencia a nivel fila—se cruza límite ASHP Competency hacia especulación.",
      },
      risk: {
        en: "Data integrity finding; credibility loss with pharmacy and regulators.",
        es: "Hallazgo integridad datos; pérdida credibilidad con farmacia y reguladores.",
      },
      expectedLearnerResponse: {
        en: "Quote packet rows only; open query; state unknown; escalate with written pharmacy follow-up.",
        es: "Citar solo filas del paquete; abrir query; declarar desconocido; escalar con seguimiento farmacia escrito.",
      },
      relatedDimensions: ["Q", "C"],
    },
    {
      errorId: "M17.E5",
      description: {
        en: "Integration failure: integrated defense cites ACRP Certification but omits ASHP Competency while making IP storage or accountability claims.",
        es: "Falla integración: defensa integrada cita ACRP Certification pero omite ASHP Competency mientras hace afirmaciones almacenamiento o contabilidad IP.",
      },
      risk: {
        en: "Incomplete professional framing; monitor flags inconsistent competence story.",
        es: "Marco profesional incompleto; monitor señala historia competencia inconsistente.",
      },
      expectedLearnerResponse: {
        en: "Add explicit ASHP Competency sentence limiting claims to verified pharmacy evidence or remove IP claims.",
        es: "Añadir oración explícita ASHP Competency limitando afirmaciones a evidencia farmacia verificada o retirar afirmaciones IP.",
      },
      relatedDimensions: ["R", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M17.EX1",
      name: { en: "Live crisis integration (20 minutes)", es: "Integración de crisis en vivo (20 minutos)" },
      scenario: {
        en: "Immediately after a six-station OSCE, you enter an integrated inspection-day crisis: simultaneous FDA, CRO, and sponsor inputs. Artifacts include screening/eligibility tension (M8/M16), EDC query pressure (M12), monitoring walkthrough notes (M13), budget/payment threat (M14), recruitment recovery email (M15), and source/ALCOA+ repair threads (M11). You must integrate without integrity shortcuts.",
        es: "Inmediatamente tras OSCE de seis estaciones, entras a crisis integrada día inspección: entradas simultáneas FDA, CRO y patrocinador. Artefactos incluyen tensión screening/elegibilidad (M8/M16), presión queries EDC (M12), notas walkthrough monitoría (M13), amenaza presupuesto/pago (M14), correo recuperación reclutamiento (M15) e hilos reparación fuente/ALCOA+ (M11). Debes integrar sin atajos integridad.",
      },
      inputs: [
        { inputId: "M17.IN1", label: { en: "FDA inspector question set (3 prompts)", es: "Preguntas inspector FDA (3 prompts)" }, inputKind: "free_text" },
        { inputId: "M17.IN2", label: { en: "CRO monitor findings + query list", es: "Hallazgos monitor CRO + lista queries" }, inputKind: "table" },
        { inputId: "M17.IN3", label: { en: "Sponsor email thread (budget + payment pressure)", es: "Hilo correos patrocinador (presupuesto + pago)" }, inputKind: "table" },
        { inputId: "M17.IN4", label: { en: "OSCE station artifacts (S1–S6 outputs) + M11–M16 skill tags", es: "Artefactos OSCE (S1–S6) + etiquetas habilidad M11–M16" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "In 20 minutes produce:\n(1) **Priority order 1–5** (table): each row = rank, risk item, impact tag (patient/data/compliance/revenue), one-line rationale.\n(2) **Cross-station linkage map** with **≥3 explicit linkages**; **each linkage must name two OSCE stations or artifact streams AND at least one module among M11, M12, M13, M14, M15, or M16** explaining the constraint (no generic ‘everything connects’).\n(3) **Integrated defense statement** (6–8 sentences max) usable for FDA and sponsor without contradiction; must include **one sentence that explicitly references ACRP Certification** and **one sentence that explicitly references ASHP Competency** (ASHP sentence may state ‘not applicable’ only if no IP/pharmacy facts are in play—justify in one clause).\n(4) **Escalation package (D4)** with two sections: **Table A** internal/QA/compliance (who/when/artifacts; include at least one integrity-trap refusal); **Table B sponsor escalation plan** (primary/backup contacts, 24h and 72h actions, decision rights such as enrollment hold/payment hold, artifact bundle to attach, and escalation trigger thresholds).\n\nIntegrity constraint: refuse at least one specified shortcut (e.g., false close, backdate, rewrite source) in writing within Table A or B.\n\nFail if: priority order missing; fewer than three qualified linkages; any linkage missing M11–M16 anchor; D3 omits **ACRP Certification** or **ASHP Competency**; sponsor escalation plan (Table B) missing; contradictions hidden; or invented facts.",
        es: "En 20 minutos produce:\n(1) **Orden de prioridad 1–5** (tabla): cada fila = rango, ítem riesgo, etiqueta impacto (paciente/datos/cumplimiento/ingresos), racional una línea.\n(2) **Mapa vínculos multi-estación** con **≥3 vínculos explícitos**; **cada vínculo debe nombrar dos estaciones OSCE o flujos de artefacto Y al menos un módulo entre M11, M12, M13, M14, M15 o M16** explicando la restricción (no ‘todo conecta’ genérico).\n(3) **Defensa integrada** (máx 6–8 oraciones) usable para FDA y patrocinador sin contradicción; debe incluir **una oración que referencie explícitamente ACRP Certification** y **una oración que referencie explícitamente ASHP Competency** (oración ASHP puede decir ‘no aplica’ solo si no hay hechos IP/farmacia—justificar en una cláusula).\n(4) **Paquete escalamiento (D4)** con dos secciones: **Tabla A** interno/QA/cumplimiento (quién/cuándo/artefactos; incluir al menos un rechazo trampa integridad); **Tabla B plan escalamiento patrocinador** (contactos primario/respaldo, acciones 24h y 72h, derechos decisión como hold inclusión/pago, paquete artefactos a adjuntar y umbrales disparador escalamiento).\n\nRestricción integridad: rechazar por escrito al menos un atajo especificado (p. ej., cierre falso, retrofechar, reescribir fuente) en Tabla A o B.\n\nFallo si: falta orden prioridad; menos de tres vínculos calificados; vínculo sin ancla M11–M16; D3 omite **ACRP Certification** o **ASHP Competency**; falta plan escalamiento patrocinador (Tabla B); contradicciones ocultas; o hechos inventados.",
      },
      deliverables: [
        { deliverableId: "M17.D1", label: { en: "Priority order (1–5)", es: "Orden de prioridades (1–5)" }, formatHint: "table" },
        { deliverableId: "M17.D2", label: { en: "Cross-station linkage map (≥3 + M11–M16 anchors)", es: "Mapa vínculos multi-estación (≥3 + anclas M11–M16)" }, formatHint: "table" },
        { deliverableId: "M17.D3", label: { en: "Integrated defense (ACRP Certification + ASHP Competency)", es: "Defensa integrada (ACRP Certification + ASHP Competency)" }, formatHint: "short_memo" },
        { deliverableId: "M17.D4", label: { en: "Escalation package: QA/compliance (A) + sponsor escalation plan (B)", es: "Paquete escalamiento: QA/cumplimiento (A) + plan patrocinador (B)" }, formatHint: "table" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M17.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M17.C1_PRIORITY_ORDER",
        description: {
          en: "Priority order (1–5) is defensible; safety/integrity/compliance precede revenue urgency; impacts tagged.",
          es: "Orden prioridades (1–5) defendible; seguridad/integridad/cumplimiento preceden urgencia ingresos; impactos etiquetados.",
        },
        points: 15,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Critical fail: budget/revenue actions ranked before containment of open safety or integrity risks.",
          es: "Fallo crítico: acciones presupuesto/ingresos rankeadas antes de contener riesgos abiertos seguridad o integridad.",
        },
      },
      {
        criterionId: "M17.C2_LINKAGES",
        description: {
          en: "≥3 explicit cross-station linkages; each names two stations/streams AND at least one anchor among M11–M16 with constraint explanation.",
          es: "≥3 vínculos multi-estación explícitos; cada uno nombra dos estaciones/flujos Y al menos un ancla entre M11–M16 con explicación restricción.",
        },
        points: 20,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Critical fail: fewer than three qualified linkages, vague ‘all related’ language, or any linkage missing M11–M16 anchor.",
          es: "Fallo crítico: menos de tres vínculos calificados, lenguaje vago ‘todo relacionado’ o vínculo sin ancla M11–M16.",
        },
      },
      {
        criterionId: "M17.C3_DEFENSE_CONSISTENCY",
        description: {
          en: "Integrated defense (D3) is internally consistent with OSCE artifacts; contradictions disclosed as open risks; includes explicit **ACRP Certification** and **ASHP Competency** sentences per learnerTask.",
          es: "Defensa integrada (D3) consistente internamente con artefactos OSCE; contradicciones declaradas como riesgos abiertos; incluye oraciones explícitas **ACRP Certification** y **ASHP Competency** según learnerTask.",
        },
        points: 22,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Critical fail: D3 omits ACRP Certification or ASHP Competency; hidden contradictions; or fact changes to force consistency.",
          es: "Fallo crítico: D3 omite ACRP Certification o ASHP Competency; contradicciones ocultas; o cambios de hechos para forzar consistencia.",
        },
      },
      {
        criterionId: "M17.C4_ESCALATION_PACKAGE",
        description: {
          en: "D4 includes Table A (QA/compliance with owners, times, artifacts, integrity-trap refusal) and Table B sponsor escalation plan with contacts, 24–72h actions, decision rights, triggers, attachment list.",
          es: "D4 incluye Tabla A (QA/cumplimiento con responsables, tiempos, artefactos, rechazo trampa) y Tabla B plan escalamiento patrocinador con contactos, acciones 24–72h, derechos decisión, disparadores, lista adjuntos.",
        },
        points: 18,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Critical fail: sponsor escalation plan (Table B) missing or non-operational (‘email sponsor later’ only); or Table A missing QA/compliance path.",
          es: "Fallo crítico: falta plan escalamiento patrocinador (Tabla B) o es no operacional (‘correo patrocinador después’ solo); o falta vía QA/cumplimiento en Tabla A.",
        },
      },
      {
        criterionId: "M17.C5_INTEGRITY_REFUSAL",
        description: {
          en: "At least one explicit integrity-trap refusal documented (false closure, backdating, source rewrite, invented facts, deviation misclassification).",
          es: "Al menos un rechazo explícito trampa integridad documentado (cierre falso, retrofechar, reescribir fuente, hechos inventados, mala clasificación desviación).",
        },
        points: 10,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "GLOBAL FAIL: learner endorses any integrity trap action.",
          es: "GLOBAL FAIL: aprendiz avala cualquier acción trampa integridad.",
        },
      },
      {
        criterionId: "M17.C6_TIMEBOX",
        description: {
          en: "All required deliverables D1–D4 present and structured at time expiration.",
          es: "Todos entregables D1–D4 presentes y estructurados al vencer tiempo.",
        },
        points: 10,
        mapsToDimensions: ["O"],
        failCondition: {
          en: "Fail if any deliverable missing or unstructured.",
          es: "Fallo si falta entregable o sin estructura.",
        },
      },
      {
        criterionId: "M17.C7_DEFENSE_TONE",
        description: {
          en: "Audit-grade tone: factual, no minimization, no blame-shifting; ASHP Competency respected on IP claims.",
          es: "Tono nivel auditoría: factual, sin minimizar, sin culpar; ASHP Competency respetado en afirmaciones IP.",
        },
        points: 5,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Fail if excuse-led narrative or speculative pharmacy facts.",
          es: "Fallo si narrativa basada excusas o hechos farmacia especulativos.",
        },
      },
    ],
  },
  scorecardContribution: [
    { dimension: "R", weight: 0.3, aggregationKey: "crisis_governance_acrp_certification_escalation_and_sponsor_plan" },
    { dimension: "Q", weight: 0.3, aggregationKey: "cross_station_linkage_m11_m16_consistency_and_defense" },
    { dimension: "O", weight: 0.25, aggregationKey: "timeboxed_priority_execution_and_operational_escalation_tables" },
    { dimension: "C", weight: 0.15, aggregationKey: "patient_safety_first_under_multi_pressure" },
  ],
  capstoneConnection: {
    summary: {
      en: "Post-OSCE integration across OSCE.S1–S6: crisis command stress-tests consistency with ACRP Certification conduct and ASHP Competency limits while explicitly recycling skills from Modules M11 through M16.",
      es: "Integración post-OSCE en OSCE.S1–S6: mando crisis prueba consistencia con conducta ACRP Certification y límites ASHP Competency reciclando explícitamente habilidades de Módulos M11 a M16.",
    },
    stationIds: ["OSCE.S1", "OSCE.S2", "OSCE.S3", "OSCE.S4", "OSCE.S5", "OSCE.S6"],
  },
  tags: ["audit_readiness", "data_integrity", "traceability", "regulatory", "operational", "capstone_related", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Anchors: ACRP Certification (CRC professional standard) and ASHP Competency (pharmacy–CRC interface). Crisis outputs must include priority order, ≥3 linkages with M11–M16 anchors, integrated defense, and sponsor escalation plan (D4 Table B).",
    es: "Anclajes: ACRP Certification (estándar profesional CRC) y ASHP Competency (interfaz farmacia–CRC). Salidas crisis deben incluir orden prioridad, ≥3 vínculos con anclas M11–M16, defensa integrada y plan escalamiento patrocinador (Tabla B de D4).",
  },
};
