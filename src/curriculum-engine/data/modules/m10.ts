// src/curriculum-engine/data/modules/m10.ts

import type { Module } from "../../types";

/**
 * Module 10 — Adverse events & safety reporting: hidden AEs, SAE timelines, bias resistance, system fixes.
 *
 * Technical / Regulatory Execution: eight ordered sections; three guided cases (clear / incorrect / ambiguous);
 * practical exercise under time pressure; rubric 100 = sum(criteria.points); passing 94.
 *
 * Regulatory anchors: FDA Safety Reporting (expedited IND/IDE safety reporting expectations and site-to-sponsor
 * notification discipline) and ICH E2B(R3) (ICSR data elements and electronic transmission quality that downstream
 * reporting depends on).
 */
export const MODULE_M10: Module = {
  id: "M10",
  slug: "adverse-events-safety-reporting-ae-sae-timelines",
  internalName: "mod_10_ae_sae_safety_reporting",
  category: "quality",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "Q", "C", "O"],
  title: {
    en: "Module 10 — Adverse Events & Safety Reporting: AE/SAE Detection, Timelines & Audit-Grade Defense",
    es: "Módulo 10 — Eventos adversos y reporte de seguridad: detección AE/SAE, tiempos y defensa nivel auditoría",
  },
  objective: {
    en: "CRC can surface hidden AEs from source, preserve PI seriousness and relatedness documentation, reconstruct site-awareness timelines that satisfy FDA Safety Reporting obligations to the sponsor, and supply ICH E2B(R3)-quality case facts (identifiable elements, narrative, timing) while resisting under-reporting pressure and designing system CAPA that stops repeat dataset failures.",
    es: "El CRC puede sacar a la luz AE ocultos desde fuente, preservar documentación de seriedad y relación del PI, reconstruir líneas de tiempo de conciencia del sitio que cumplan obligaciones FDA Safety Reporting hacia el patrocinador y aportar hechos de caso calidad ICH E2B(R3) (elementos identificables, narrativa, tiempo) resistiendo presión de sub-reporte y diseñando CAPA de sistema que detenga fallas repetidas del conjunto de datos.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines AE and SAE; states that FDA Safety Reporting pathways for investigational products depend on timely, complete site notification to sponsor so expedited reports can be assessed and submitted as required.",
          es: "Define AE y SAE; afirma que las vías FDA Safety Reporting para productos investigacionales dependen de notificación oportuna y completa del sitio al patrocinador para evaluar y enviar reportes acelerados según corresponda.",
        },
        {
          en: "Explains that ICH E2B(R3) ICSRs require coherent narratives and structured data elements—garbage or missing site facts propagate into regulatory transmissions.",
          es: "Explica que los ICSR ICH E2B(R3) requieren narrativas coherentes y elementos de datos estructurados—hechos de sitio basura o faltantes se propagan en transmisiones regulatorias.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes AE/SAE workflow aligned to FDA Safety Reporting expectations: capture, PI assessment, sponsor notification artifacts, and follow-up that preserves timeline traceability.",
          es: "Ejecuta flujo AE/SAE alineado a expectativas FDA Safety Reporting: captura, valoración PI, artefactos notificación patrocinador y seguimiento que preserve trazabilidad temporal.",
        },
        {
          en: "Documents case facts at a level suitable for ICH E2B(R3) mapping (onset, outcomes, concomitants, seriousness criteria, reporter) without inventing medical judgment.",
          es: "Documenta hechos de caso a nivel apto para mapeo ICH E2B(R3) (inicio, desenlaces, concomitantes, criterios seriedad, reportero) sin inventar juicio médico.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects causality-bias and under-reporting pressure; escalates through governance without overriding PI; links dataset gaps to FDA Safety Reporting risk and ICH E2B(R3) data-quality findings.",
          es: "Detecta sesgo de causalidad y presión de sub-reporte; escala por gobierno sin sobreescribir al PI; vincula brechas del conjunto de datos a riesgo FDA Safety Reporting y hallazgos calidad datos ICH E2B(R3).",
        },
        {
          en: "Designs system CAPA (per-visit AE reconciliation, awareness timestamp SOP, no-pressure policy) traceable in inspection.",
          es: "Diseña CAPA de sistema (reconciliación AE por visita, SOP marca conciencia, política anti-presión) trazable en inspección.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M10.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the regulatory bar: FDA Safety Reporting timeliness starts with site awareness; ICH E2B(R3) quality starts with correct source capture.",
        es: "Establecer la barra regulatoria: oportunidad FDA Safety Reporting inicia con conciencia del sitio; calidad ICH E2B(R3) inicia con captura correcta en fuente.",
      },
      keyPoints: [
        {
          en: "Graded on finding hidden AEs, honest awareness timestamps, and defensible narratives—not minimizing sponsor workload.",
          es: "Se te califica por encontrar AE ocultos, marcas de conciencia honestas y narrativas defendibles—no por minimizar carga del patrocinador.",
        },
        {
          en: "Outputs: discrepancy log, awareness-to-reporting timeline, CAPA + monitoring memo citing FDA Safety Reporting and ICH E2B(R3) where substantive.",
          es: "Salidas: log discrepancias, línea tiempo conciencia→reporte, CAPA + memo monitor citando FDA Safety Reporting e ICH E2B(R3) donde sea sustantivo.",
        },
        {
          en: "Technical tokens stay EN (FDA Safety Reporting, ICH E2B(R3), AE, SAE, ICSR, MedDRA, IB, IND, IDE, EDC, GCP).",
          es: "Tokens técnicos permanecen en inglés (FDA Safety Reporting, ICH E2B(R3), AE, SAE, ICSR, MedDRA, IB, IND, IDE, EDC, GCP).",
        },
      ],
    },
    {
      lessonId: "M10.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 30,
      objective: {
        en: "Anchor AE/SAE definitions, FDA Safety Reporting cadence at the site, ICH E2B(R3) ICSR element discipline, and inspection red flags.",
        es: "Anclar definiciones AE/SAE, cadencia FDA Safety Reporting en sitio, disciplina elementos ICSR ICH E2B(R3) y banderas rojas de inspección.",
      },
      keyPoints: [
        {
          en: "FDA Safety Reporting: sites must notify sponsor per protocol and applicable regulations so sponsor can meet expedited reporting obligations; ‘we emailed later’ without artifacts fails inspection.",
          es: "FDA Safety Reporting: sitios deben notificar patrocinador según protocolo y regulaciones aplicables para que patrocinador cumpla obligaciones de reporte acelerado; ‘enviamos correo después’ sin artefactos falla inspección.",
        },
        {
          en: "ICH E2B(R3): structured ICSR fields and narrative coherence—missing onset, outcome, or seriousness criteria degrades regulatory database quality.",
          es: "ICH E2B(R3): campos ICSR estructurados y coherencia narrativa—falta inicio, desenlace o criterios seriedad degrada calidad de base regulatoria.",
        },
        {
          en: "AE = unfavorable occurrence temporally associated with trial; causality assessed separately; SAE by seriousness outcomes—relatedness does not undo seriousness.",
          es: "AE = ocurrencia desfavorable temporalmente asociada al ensayo; causalidad aparte; SAE por desenlaces de seriedad—relación no anula seriedad.",
        },
        {
          en: "Real-world workflow — Detection: active inquiry every visit; labs/EMR/hospitalization sweep.",
          es: "Flujo real — Detección: indagación activa cada visita; barrido labs/EMR/hospitalización.",
        },
        {
          en: "Real-world workflow — Documentation: verbatim description, onset, severity, outcome, concomitants, PI assessment, artifacts for awareness.",
          es: "Flujo real — Documentación: descripción literal, inicio, severidad, desenlace, concomitantes, valoración PI, artefactos de conciencia.",
        },
        {
          en: "Real-world workflow — Reporting: clock at first site awareness; sponsor notification with receipts; follow-up until resolution.",
          es: "Flujo real — Reporte: reloj en primera conciencia del sitio; notificación patrocinador con acuses; seguimiento hasta resolución.",
        },
        {
          en: "Error-prone 1 — Symptoms in progress notes never become AEs in EDC (‘hidden AEs’).",
          es: "Propensa 1 — Síntomas en notas nunca se vuelven AE en EDC (‘AE ocultos’).",
        },
        {
          en: "Error-prone 2 — Causality bias: repeated ‘not related’ despite temporal clustering and IB signals.",
          es: "Propensa 2 — Sesgo causalidad: ‘no relacionado’ repetido pese a agrupamiento temporal y señales IB.",
        },
        {
          en: "Error-prone 3 — Awareness date chosen as ‘when CRC saw it’ vs first site knowledge—breaks FDA Safety Reporting timeline defense.",
          es: "Propensa 3 — Fecha conciencia elegida como ‘cuando CRC lo vio’ vs primer conocimiento del sitio—rompe defensa temporal FDA Safety Reporting.",
        },
        {
          en: "Error-prone 4 — Under-reporting pressure (‘don’t log every headache’) produces selective CRF.",
          es: "Propensa 4 — Presión sub-reporte (‘no registres cada cefalea’) produce CRF selectivo.",
        },
        {
          en: "Error-prone 5 — Systemic pattern: many subjects mild AEs in source but absent in CRF; no reconciliation CtQ step.",
          es: "Propensa 5 — Patrón sistémico: muchos sujetos AE leves en fuente ausentes en CRF; sin paso CtQ reconciliación.",
        },
        {
          en: "Cross-links: M8 visit documentation; M9 IP exposure facts; M4 ALCOA+; M16 inspection.",
          es: "Vínculos: M8 documentación visita; M9 hechos exposición IP; M4 ALCOA+; M16 inspección.",
        },
      ],
    },
    {
      lessonId: "M10.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Progress note: ‘more tired than usual ×5 days’ with no AE captured in CRF.",
        es: "Nota: ‘más cansado de lo usual ×5 días’ sin AE capturado en CRF.",
      },
      keyPoints: [
        {
          en: "What CRC sees: subjective symptom in source with null EDC—classic hidden AE.",
          es: "Qué ve el CRC: síntoma subjetivo en fuente con EDC nulo—AE oculto clásico.",
        },
        {
          en: "How to think: any unfavorable symptom temporally associated = AE; FDA Safety Reporting and ICH E2B(R3) chains start with complete capture.",
          es: "Cómo pensar: síntoma desfavorable temporalmente asociado = AE; cadenas FDA Safety Reporting e ICH E2B(R3) inician con captura completa.",
        },
        {
          en: "Decision: capture verbatim, onset, severity, outcome; PI assessment; enter EDC; retain source linkage.",
          es: "Decisión: capturar literal, inicio, severidad, desenlace; valoración PI; ingresar EDC; conservar vínculo fuente.",
        },
        {
          en: "Why it matters: incomplete AE datasets distort pooled safety signals.",
          es: "Por qué importa: conjuntos AE incompletos distorsionan señales de seguridad agrupadas.",
        },
      ],
    },
    {
      lessonId: "M10.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "PI says: ‘Don’t report every little headache; sponsor will think our site has more AEs.’",
        es: "PI dice: ‘No reportes cada dolor de cabeza; patrocinador pensará que tenemos más AE.’",
      },
      keyPoints: [
        {
          en: "Incorrect move: selective capture to manage site image—violates GCP and corrupts FDA Safety Reporting inputs.",
          es: "Movimiento incorrecto: captura selectiva para gestionar imagen del sitio—viola GCP y corrompe insumos FDA Safety Reporting.",
        },
        {
          en: "Correct move: capture protocol-required AEs; document pressure concern; escalate per SOP to QA/compliance; preserve ICH E2B(R3)-ready facts.",
          es: "Movimiento correcto: capturar AE requeridos por protocolo; documentar preocupación por presión; escalar según SOP a QA/cumplimiento; preservar hechos listos ICH E2B(R3).",
        },
        {
          en: "Why it matters: under-reporting is a misconduct-risk pattern in inspections.",
          es: "Por qué importa: sub-reporte es patrón de riesgo de mala conducta en inspecciones.",
        },
      ],
    },
    {
      lessonId: "M10.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Hospitalization Day 1 per EMR admission; CRC learns Day 4 from patient call; sponsor notified Day 5; PI argues awareness should be Day 4 for reporting purposes.",
        es: "Hospitalización Día 1 según admisión EMR; CRC se entera Día 4 por llamada paciente; patrocinador notificado Día 5; PI argumenta conciencia debería ser Día 4 para fines de reporte.",
      },
      keyPoints: [
        {
          en: "What CRC sees: tension between EMR evidence of site health-system awareness and CRC’s first trial-team knowledge.",
          es: "Qué ve el CRC: tensión entre evidencia EMR de conciencia del sistema salud del sitio y primer conocimiento del equipo del ensayo.",
        },
        {
          en: "How to think: FDA Safety Reporting timelines hinge on defensible ‘site became aware’—do not pick the latest convenient date; triangulate EMR, calls, and roles per SOP.",
          es: "Cómo pensar: tiempos FDA Safety Reporting dependen de ‘sitio se enteró’ defendible—no elegir la fecha tardía conveniente; triangular EMR, llamadas y roles según SOP.",
        },
        {
          en: "Decision: document earliest supportable awareness with artifacts; if earlier awareness existed, late notification is deviation + CAPA; sponsor informed transparently.",
          es: "Decisión: documentar conciencia más temprana sostenible con artefactos; si hubo conciencia antes, notificación tardía es desviación + CAPA; patrocinador informado con transparencia.",
        },
        {
          en: "Why it matters: ambiguous awareness drives late expedited reporting allegations.",
          es: "Por qué importa: conciencia ambigua impulsa alegaciones de reporte acelerado tardío.",
        },
      ],
    },
    {
      lessonId: "M10.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 40,
      objective: {
        en: "Run the AE/SAE Audit Stress Test once under the 40-minute time box; cite FDA Safety Reporting and ICH E2B(R3) in the defense memo where substantive.",
        es: "Ejecutar la Prueba de Estrés una vez bajo 40 minutos; citar FDA Safety Reporting e ICH E2B(R3) en memo defensa donde sea sustantivo.",
      },
      keyPoints: [
        {
          en: "Time box: 40 minutes. Skipping hidden AEs or ‘rounding’ awareness dates = incomplete.",
          es: "Límite: 40 minutos. Omitir AE ocultos o ‘redondear’ fechas conciencia = incompleto.",
        },
        {
          en: "Deliverables: discrepancy log (D1), timeline table (D2), CAPA + memo (D3).",
          es: "Entregables: log discrepancias (D1), tabla línea tiempo (D2), CAPA + memo (D3).",
        },
      ],
    },
    {
      lessonId: "M10.S5",
      title: { en: "5) Scoring matrix & inspection perspective", es: "5) Matriz de puntuación y perspectiva inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M10.RUB1; map monitor questions to FDA Safety Reporting and ICH E2B(R3) evidence.",
        es: "Alinear calificación con M10.RUB1; mapear preguntas monitor a evidencia FDA Safety Reporting e ICH E2B(R3).",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; critical pathway on hidden AEs, timeline honesty, and pressure resistance.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; vía crítica en AE ocultos, honestidad temporal y resistencia a presión.",
        },
        {
          en: "Inspectors triangulate: source ↔ AE log ↔ EDC ↔ sponsor receipts; contradictions trigger FDA Safety Reporting scrutiny.",
          es: "Inspectores triangulan: fuente ↔ log AE ↔ EDC ↔ acuses patrocinador; contradicciones disparan escrutinio FDA Safety Reporting.",
        },
        {
          en: "ICH E2B(R3): weak narratives and missing elements become sponsor findings in transmission validation.",
          es: "ICH E2B(R3): narrativas débiles y elementos faltantes se vuelven hallazgos patrocinador en validación de transmisión.",
        },
      ],
    },
    {
      lessonId: "M10.S6",
      title: { en: "6) Answer framework (elite outputs + fail patterns)", es: "6) Marco de respuesta (salidas élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Produce monitor-ready safety summaries that stay FDA Safety Reporting–honest and ICH E2B(R3)–complete.",
        es: "Producir resúmenes de seguridad listos para monitor que permanezcan honestos FDA Safety Reporting y completos ICH E2B(R3).",
      },
      keyPoints: [
        {
          en: "Elite format: (1) AE list with source pointers, (2) Awareness timeline with artifacts, (3) CAPA + escalation + one regulatory citation sentence when useful.",
          es: "Formato élite: (1) Lista AE con punteros fuente, (2) Línea tiempo conciencia con artefactos, (3) CAPA + escalamiento + oración cita regulatoria cuando útil.",
        },
        {
          en: "Fail patterns: ‘PI said not serious’ without assessment; hiding symptoms to help enrollment; changing awareness date to fit the window.",
          es: "Patrones de falla: ‘PI dijo no serio’ sin valoración; ocultar síntomas para ayudar inclusión; cambiar fecha conciencia para encajar ventana.",
        },
      ],
    },
    {
      lessonId: "M10.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect safety reporting to visits, IP accountability, and datasets.",
        es: "Conectar reporte de seguridad a visitas, contabilidad IP y conjuntos de datos.",
      },
      keyPoints: [
        {
          en: "M9: exposure and lot facts in SAE narratives must match IP accountability—ICH E2B(R3) identifiers depend on it.",
          es: "M9: exposición y hechos de lote en narrativas SAE deben coincidir contabilidad IP—identificadores ICH E2B(R3) dependen de ello.",
        },
        {
          en: "M8: visit timing affects symptom detection and follow-up completeness.",
          es: "M8: tiempo de visita afecta detección de síntomas y completitud de seguimiento.",
        },
        {
          en: "M7/M5: enrollment pressure often correlates with under-reporting—FDA Safety Reporting culture must resist it.",
          es: "M7/M5: presión de inclusión a menudo correlaciona con sub-reporte—cultura FDA Safety Reporting debe resistirla.",
        },
      ],
    },
    {
      lessonId: "M10.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit for participants, regulators, and datasets.",
        es: "Hacer explícitas consecuencias para participantes, reguladores y conjuntos de datos.",
      },
      keyPoints: [
        {
          en: "Participant harm: missed AEs delay risk mitigation; late SAE reporting slows sponsor safety actions.",
          es: "Daño participante: AE omitidos retrasan mitigación de riesgo; SAE tardío enlentece acciones de seguridad del patrocinador.",
        },
        {
          en: "Regulatory: FDA Safety Reporting failures can yield serious inspection findings; bad ICSR hygiene breaks ICH E2B(R3) reliance.",
          es: "Regulatorio: fallas FDA Safety Reporting pueden producir hallazgos serios inspección; mala higiene ICSR rompe confianza ICH E2B(R3).",
        },
        {
          en: "Trial integrity: hidden AEs bias benefit-risk conclusions and endpoint interpretability.",
          es: "Integridad del ensayo: AE ocultos sesgan conclusiones beneficio-riesgo e interpretabilidad de endpoint.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M10.E1",
      description: {
        en: "Symptoms in source never entered as AEs in EDC—undermines pooled safety and FDA Safety Reporting traceability.",
        es: "Síntomas en fuente nunca ingresados como AE en EDC—socava seguridad agrupada y trazabilidad FDA Safety Reporting.",
      },
      risk: {
        en: "Incomplete safety dataset; audit finding; flawed ICH E2B(R3) inputs if events later surface.",
        es: "Conjunto seguridad incompleto; hallazgo auditoría; insumos ICH E2B(R3) defectuosos si eventos aparecen después.",
      },
      expectedLearnerResponse: {
        en: "Back-capture with honest timing; per-visit AE reconciliation; source↔EDC QA.",
        es: "Recuperar con tiempos honestos; reconciliación AE por visita; QA fuente↔EDC.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M10.E2",
      description: {
        en: "PI marks nearly all AEs ‘not related’ without rationale while temporal clustering matches IB—bias pattern risking attenuated FDA Safety Reporting review.",
        es: "PI marca casi todos AE ‘no relacionado’ sin justificación mientras agrupamiento temporal coincide IB—patrón sesgo riesgo revisión FDA Safety Reporting atenuada.",
      },
      risk: {
        en: "Safety signal masking; governance escalation required.",
        es: "Enmascaramiento señal seguridad; escalamiento gobierno requerido.",
      },
      expectedLearnerResponse: {
        en: "Document PI attribution; trend review; sponsor/medical governance; never unilaterally rewrite relatedness.",
        es: "Documentar atribución PI; revisión tendencia; gobierno médico/patrocinador; nunca reescribir relación unilateralmente.",
      },
      relatedDimensions: ["R", "C"],
    },
    {
      errorId: "M10.E3",
      description: {
        en: "SAE awareness recorded as CRC notice date though EMR shows earlier site encounter—late expedited notification risk under FDA Safety Reporting.",
        es: "Conciencia SAE registrada como fecha aviso CRC aunque EMR muestra encuentro sitio antes—riesgo notificación acelerada tardía bajo FDA Safety Reporting.",
      },
      risk: {
        en: "Major compliance finding; deviation package required.",
        es: "Hallazgo mayor cumplimiento; paquete desviación requerido.",
      },
      expectedLearnerResponse: {
        en: "Reconstruct with EMR/call artifacts; transparent sponsor update; CAPA on awareness SOP.",
        es: "Reconstruir con artefactos EMR/llamada; actualización transparente patrocinador; CAPA en SOP conciencia.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M10.E4",
      description: {
        en: "Selective AE capture after PI pressure—ICH E2B(R3) narratives become non-representative of site experience.",
        es: "Captura selectiva de AE tras presión PI—narrativas ICH E2B(R3) dejan de ser representativas de experiencia del sitio.",
      },
      risk: {
        en: "GCP non-compliance; misconduct risk.",
        es: "Incumplimiento GCP; riesgo mala conducta.",
      },
      expectedLearnerResponse: {
        en: "Restore complete capture; escalate pressure; QA monitoring of AE rates vs source.",
        es: "Restaurar captura completa; escalar presión; monitoreo QA tasas AE vs fuente.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M10.E5",
      description: {
        en: "False-correct pattern: SAE form submitted on time but narrative omits concomitant meds and dose changes—looks ‘filed’ yet fails ICH E2B(R3) data-quality review at sponsor.",
        es: "Patrón ‘parece correcto’: formulario SAE enviado a tiempo pero narrativa omite concomitantes y cambios de dosis—luce ‘archivado’ pero falla revisión calidad datos ICH E2B(R3) en patrocinador.",
      },
      risk: {
        en: "Rejected/reworked ICSR; inspection query cascade.",
        es: "ICSR rechazado/rehecho; cascada queries inspección.",
      },
      expectedLearnerResponse: {
        en: "Amend with ALCOA+ rationale; PI sign-off on narrative completeness; template fix for future cases.",
        es: "Enmendar con justificación ALCOA+; visto bueno PI en completitud narrativa; arreglo plantilla para casos futuros.",
      },
      relatedDimensions: ["Q", "O", "R"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M10.EX1",
      name: {
        en: "AE/SAE Audit Stress Test — FDA Safety Reporting + ICH E2B(R3) data quality",
        es: "Prueba estrés AE/SAE — FDA Safety Reporting + calidad datos ICH E2B(R3)",
      },
      scenario: {
        en: "40 minutes before monitoring: source notes and CRFs for five subjects show hidden AEs, causality clustering, systemic source↔EDC gaps, and one SAE with conflicting EMR vs call-log awareness cues. Sponsor receipt timestamps suggest borderline late notification. Pressure language appears in PI notes. Sources conflict by design.",
        es: "40 minutos antes de monitoría: notas fuente y CRFs para cinco sujetos muestran AE ocultos, agrupamiento causalidad, brechas sistémicas fuente↔EDC y un SAE con señales conflictivas conciencia EMR vs log llamadas. Marcas recepción patrocinador sugieren notificación límite tardía. Lenguaje de presión aparece en notas PI. Fuentes chocan a propósito.",
      },
      inputs: [
        { inputId: "M10.IN1", label: { en: "Source notes packet (5 subjects)", es: "Paquete notas fuente (5 sujetos)" }, inputKind: "mock_ehr" },
        { inputId: "M10.IN2", label: { en: "CRF/EDC AE export", es: "Export AE CRF/EDC" }, inputKind: "export" },
        { inputId: "M10.IN3", label: { en: "Sponsor notification timestamps + SAE receipts", es: "Marcas notificación patrocinador + acuses SAE" }, inputKind: "table" },
        { inputId: "M10.IN4", label: { en: "PI causality notes + IB excerpt", es: "Notas causalidad PI + extracto IB" }, inputKind: "bundle" },
        { inputId: "M10.IN5", label: { en: "FDA Safety Reporting excerpt (expedited expectations)", es: "Extracto FDA Safety Reporting (expectativas aceleradas)" }, inputKind: "pdf" },
        { inputId: "M10.IN6", label: { en: "ICH E2B(R3) excerpt (ICSR elements / quality)", es: "Extracto ICH E2B(R3) (elementos ICSR / calidad)" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "Identify hidden AEs, source↔CRF mismatches, follow-up gaps, and causality-bias signals. For SAEs: reconstruct site awareness → sponsor notification using artifacts; assess FDA Safety Reporting timeliness risk and document deviations with CAPA (not excuses). Propose system fixes: per-visit AE reconciliation, awareness timestamp SOP, governance for bias patterns. Draft defense memo (D3) with explicit FDA Safety Reporting and ICH E2B(R3) citations in at least one substantive paragraph each tied to packet facts; note any ICSR element gaps that would fail sponsor E2B validation.",
        es: "Identificar AE ocultos, desajustes fuente↔CRF, brechas seguimiento y señales sesgo causalidad. Para SAE: reconstruir conciencia sitio → notificación patrocinador usando artefactos; evaluar riesgo oportunidad FDA Safety Reporting y documentar desviaciones con CAPA (no excusas). Proponer arreglos sistema: reconciliación AE por visita, SOP marca conciencia, gobierno para patrones sesgo. Redactar memo defensa (D3) con citas explícitas FDA Safety Reporting e ICH E2B(R3) en al menos un párrafo sustantivo cada uno vinculado a hechos del paquete; señalar brechas elemento ICSR que fallarían validación E2B patrocinador.",
      },
      deliverables: [
        { deliverableId: "M10.D1", label: { en: "Per-subject AE/SAE discrepancy log", es: "Log discrepancias AE/SAE por sujeto" }, formatHint: "table" },
        { deliverableId: "M10.D2", label: { en: "Awareness-to-reporting timeline reconstruction", es: "Reconstrucción línea tiempo conciencia→reporte" }, formatHint: "table" },
        {
          deliverableId: "M10.D3",
          label: {
            en: "CAPA + monitoring defense memo (cite FDA Safety Reporting + ICH E2B(R3))",
            es: "Memo CAPA + defensa monitoría (citar FDA Safety Reporting + ICH E2B(R3))",
          },
          formatHint: "short_memo",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M10.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M10.C1",
        description: {
          en: "Detects hidden AEs and reconciles source ↔ AE log ↔ CRF/EDC with complete key elements, honest timing, and FDA Safety Reporting–aware capture discipline.",
          es: "Detecta AE ocultos y reconcilia fuente ↔ log AE ↔ CRF/EDC con elementos completos, tiempos honestos y disciplina captura consciente FDA Safety Reporting.",
        },
        points: 35,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Critical fail if misses clear source symptoms that must be AEs, ‘cleans’ records without transparent late-entry rationale, or ignores systemic source↔EDC gaps.",
          es: "Falla crítica si no detecta síntomas fuente claros que deben ser AE, ‘limpia’ registros sin justificación transparente entrada tardía o ignora brechas sistémicas fuente↔EDC.",
        },
      },
      {
        criterionId: "M10.C2",
        description: {
          en: "Correctly classifies AE vs SAE; documents PI seriousness/relatedness; preserves PI attribution; ensures narratives remain ICH E2B(R3)–complete (no omitted concomitants/doses when present in source).",
          es: "Clasifica correctamente AE vs SAE; documenta seriedad/relación PI; preserva atribución PI; asegura narrativas ICH E2B(R3)–completas (sin omitir concomitantes/dosis cuando están en fuente).",
        },
        points: 25,
        mapsToDimensions: ["R", "C"],
        failCondition: {
          en: "Critical fail if treats SAE seriousness as optional based on causality, overrides PI medical assessment without documented pathway, or files ‘minimal’ narratives that omit source facts.",
          es: "Falla crítica si trata seriedad SAE como opcional según causalidad, sobreescribe valoración médica PI sin vía documentada o archiva narrativas ‘mínimas’ que omiten hechos fuente.",
        },
      },
      {
        criterionId: "M10.C3",
        description: {
          en: "Reconstructs awareness timelines with artifact discipline; applies reporting windows; documents late notification as deviation with CAPA—no convenient awareness dating.",
          es: "Reconstruye líneas tiempo conciencia con disciplina de artefactos; aplica ventanas reporte; documenta notificación tardía como desviación con CAPA—sin fechas conciencia convenientes.",
        },
        points: 25,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Fail if uses a convenient awareness date to excuse a missed expedited window or omits deviation documentation when reporting is late.",
          es: "Falla si usa fecha conciencia conveniente para excusar ventana acelerada omitida u omite documentación desviación cuando reporte es tardío.",
        },
      },
      {
        criterionId: "M10.C4",
        description: {
          en: "Detects causality bias and under-reporting pressure with escalation; proposes system CAPA; links safety to retention/endpoint risk; D3 cites FDA Safety Reporting and ICH E2B(R3) as required.",
          es: "Detecta sesgo causalidad y presión sub-reporte con escalamiento; propone CAPA sistema; vincula seguridad a riesgo retención/endpoint; D3 cita FDA Safety Reporting e ICH E2B(R3) como se exige.",
        },
        points: 15,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Critical fail if accepts pressure or recurring bias without escalation, proposes only case fixes without system controls, or omits required FDA Safety Reporting / ICH E2B(R3) citations in D3.",
          es: "Falla crítica si acepta presión o sesgo recurrente sin escalamiento, propone solo arreglos de caso sin controles sistema u omite citas requeridas FDA Safety Reporting / ICH E2B(R3) en D3.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.32,
      aggregationKey: "fda_safety_reporting_ich_e2b_r3_timelines_escalation_defense",
    },
    {
      dimension: "Q",
      weight: 0.28,
      aggregationKey: "ae_dataset_completeness_hidden_ae_detection_and_icsr_quality",
    },
    {
      dimension: "C",
      weight: 0.22,
      aggregationKey: "pi_clinical_assessment_seriousness_relatedness_and_follow_up_discipline",
    },
    {
      dimension: "O",
      weight: 0.18,
      aggregationKey: "site_workflow_ae_inquiry_follow_up_and_system_capa_execution",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S3 is the expedited SAE reporting station: awareness reconstruction, FDA Safety Reporting timeliness, and sponsor notification defense with ICH E2B(R3)–grade case facts—the same audit-critical behaviors as this module.",
      es: "OSCE.S3 es la estación de reporte SAE expedito: reconstrucción de conciencia, oportunidad FDA Safety Reporting y defensa de notificación al patrocinador con hechos de caso grado ICH E2B(R3)—las mismas conductas críticas auditoría que este módulo.",
    },
    stationIds: ["OSCE.S3"],
  },
  tags: ["safety", "regulatory", "audit_readiness", "data_integrity", "traceability", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Module anchors: FDA Safety Reporting (expedited site-to-sponsor discipline) and ICH E2B(R3) (ICSR structure and electronic transmission quality). Keep AE, SAE, ICSR, MedDRA, IB, IND, IDE, EDC, GCP, CtQ as EN tokens where common.",
    es: "Anclajes del módulo: FDA Safety Reporting (disciplina sitio→patrocinador acelerada) e ICH E2B(R3) (estructura ICSR y calidad transmisión electrónica). Mantener AE, SAE, ICSR, MedDRA, IB, IND, IDE, EDC, GCP, CtQ como tokens EN donde sea habitual.",
  },
};
