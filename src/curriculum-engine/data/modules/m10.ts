// src/curriculum-engine/data/modules/m10.ts

import type { Module } from "../../types";

/**
 * Module 10 — Adverse events & safety reporting: hidden AEs, SAE timelines, bias resistance, system fixes.
 * Guided practice: six cases (GP1–GP6) — hidden AE, causality bias, awareness timeline, retention/endpoint impact,
 * under-reporting pressure, and systemic miss patterns.
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
    en: "Detect hidden AEs in source data; classify AE vs SAE with PI input; reconstruct awareness timelines and meet reporting windows; resist under-reporting pressure; recognize causality bias and systemic patterns; and defend the end-to-end AE/SAE process in monitoring or inspection.",
    es: "Detectar AE ocultos en datos fuente; clasificar AE vs SAE con input del PI; reconstruir líneas de tiempo de conciencia y cumplir ventanas de reporte; resistir presión de sub-reporte; reconocer sesgo de causalidad y patrones sistémicos; y defender el proceso completo AE/SAE en monitoría o inspección.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines AE as any unfavorable medical occurrence temporally associated with trial participation (no causality required).",
          es: "Define AE como cualquier ocurrencia médica desfavorable temporalmente asociada con participación en el ensayo (sin requerir causalidad).",
        },
        {
          en: "Defines SAE by outcome (death, life-threatening, hospitalization/prolongation, disability, congenital anomaly, other important medical event) and states that SAE ≠ relatedness.",
          es: "Define SAE por desenlace (muerte, amenaza vital, hospitalización/prolongación, discapacidad, anomalía congénita u otro evento médico importante) y afirma que SAE ≠ relación causal.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes AE/SAE workflow: active symptom inquiry, lab/EMR review, source capture with key elements, PI seriousness/relatedness assessment, CRF/EDC entry, and SAE initial notification within sponsor-required timeline with follow-up.",
          es: "Ejecuta flujo AE/SAE: indagación activa, revisión de labs/EMR, captura en fuente con elementos clave, valoración PI de seriedad/relación, captura en CRF/EDC y notificación inicial SAE dentro de la ventana requerida por patrocinador con seguimiento.",
        },
        {
          en: "Reconstructs the site ‘awareness timestamp’ from calls, EMR events, and subject reports; documents late reporting as a deviation with clear root cause and corrective actions.",
          es: "Reconstruye la marca de ‘conciencia del sitio’ a partir de llamadas, eventos EMR y reportes del sujeto; documenta reporte tardío como desviación con causa raíz y acciones correctivas claras.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects under-reporting pressure and causality bias patterns (e.g., consistent ‘not related’ despite temporal clustering) and escalates through QA/sponsor pathways without fabricating or overriding PI attribution.",
          es: "Detecta presión de sub-reporte y patrones de sesgo de causalidad (p. ej., ‘no relacionado’ consistente pese a agrupamiento temporal) y escala por vías QA/patrocinador sin inventar ni sobreescribir atribución del PI.",
        },
        {
          en: "Links safety events to operational and data risk: dropout and missing primary endpoints; designs system CAPA (per-visit AE checklist, PI review cadence, no-pressure policy) to stop repeat patterns.",
          es: "Vincula eventos de seguridad a riesgo operacional y de datos: abandono y endpoints primarios faltantes; diseña CAPA de sistema (checklist AE por visita, cadencia de revisión PI, política anti-presión) para detener patrones repetidos.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M10.L1",
      title: { en: "Core concepts — AE/SAE definitions, elements, and red flags", es: "Conceptos núcleo — definiciones AE/SAE, elementos y banderas rojas" },
      lessonType: "reading",
      objective: {
        en: "Anchor AE vs SAE, required data elements, sponsor timelines, and audit red flags (hidden AEs, mismatches, awareness gaps, causality bias).",
        es: "Anclar AE vs SAE, elementos requeridos, tiempos del patrocinador y banderas rojas de auditoría (AE ocultos, desajustes, brechas de conciencia, sesgo de causalidad).",
      },
      keyPoints: [
        {
          en: "AE = any unfavorable sign/symptom/lab abnormality temporally associated with trial; causality is assessed later and separately.",
          es: "AE = cualquier signo/síntoma/anormalidad de lab desfavorable temporalmente asociada al ensayo; causalidad se valora después y aparte.",
        },
        {
          en: "SAE is defined by seriousness outcomes; ‘not related’ does not change SAE seriousness or timeline obligations.",
          es: "SAE se define por desenlaces de seriedad; ‘no relacionado’ no cambia seriedad SAE ni obligaciones de tiempo.",
        },
        {
          en: "Audit red flags: symptoms in source not in AE log/EDC; awareness vs report timing gaps; causality always ‘not related’; incomplete follow-up.",
          es: "Banderas rojas: síntomas en fuente no en log AE/EDC; brechas de tiempo conciencia vs reporte; causalidad siempre ‘no relacionado’; seguimiento incompleto.",
        },
      ],
    },
    {
      lessonId: "M10.L2",
      title: { en: "Real-world workflow — detection through follow-up", es: "Flujo real — detección hasta seguimiento" },
      lessonType: "reading",
      objective: {
        en: "Execute the end-to-end AE/SAE process at the site: detection, documentation, reporting, follow-up, and trend review.",
        es: "Ejecutar proceso AE/SAE de punta a punta en el sitio: detección, documentación, reporte, seguimiento y revisión de tendencias.",
      },
      keyPoints: [
        {
          en: "Detection is active: ask every visit; review vitals, labs, EMR notes, outside visits, and hospitalizations.",
          es: "Detección es activa: preguntar en cada visita; revisar signos, labs, notas EMR, visitas externas y hospitalizaciones.",
        },
        {
          en: "Documentation must include verbatim description, onset, severity/grade, outcome, PI seriousness/relatedness, actions, and concomitant meds.",
          es: "Documentación debe incluir descripción literal, inicio, severidad/grado, desenlace, seriedad/relación PI, acciones y concomitantes.",
        },
        {
          en: "SAE reporting clock starts at site awareness; capture how awareness occurred (call/EMR/subject) and keep artifacts.",
          es: "Reloj SAE inicia en conciencia del sitio; capturar cómo se conoció (llamada/EMR/sujeto) y conservar artefactos.",
        },
        {
          en: "Follow-up is part of compliance: update outcome, diagnostics, and narrative; trend review detects systemic misses and bias.",
          es: "Seguimiento es parte del cumplimiento: actualizar desenlace, diagnósticos y narrativa; revisión de tendencias detecta fallas sistémicas y sesgos.",
        },
      ],
    },
    {
      lessonId: "M10.L3",
      title: { en: "Inspection themes — timelines, bias, and system failures", es: "Temas de inspección — tiempos, sesgo y fallas sistémicas" },
      lessonType: "reading",
      objective: {
        en: "Anticipate monitor/inspector probes: hidden AEs, source vs CRF mismatch, awareness timeline gaps, under-reporting pressure, and coordinated patterns.",
        es: "Anticipar exploración de monitor/inspector: AE ocultos, desajuste fuente vs CRF, brechas de tiempo de conciencia, presión de sub-reporte y patrones coordinados.",
      },
      keyPoints: [
        {
          en: "Inspectors triangulate: source narrative, EMR timestamp, AE log/EDC entries, sponsor email timestamps; contradictions escalate scrutiny.",
          es: "Inspectores triangulan: narrativa fuente, marcas EMR, entradas en log AE/EDC, marcas de correos al patrocinador; contradicciones aumentan escrutinio.",
        },
        {
          en: "Causality bias is not fixed by rewriting—address via PI discussion, IB awareness, and governance cadence.",
          es: "Sesgo de causalidad no se arregla reescribiendo—se aborda con discusión PI, señales del IB y cadencia de gobierno.",
        },
        {
          en: "Repeated missed mild AEs is a system failure: per-visit AE checklist and reconciliation step becomes CtQ.",
          es: "Falta repetida de AE leves es falla de sistema: checklist AE por visita y reconciliación se vuelve CtQ.",
        },
      ],
    },
    {
      lessonId: "M10.GP1",
      title: { en: "Guided practice — GP-10.1: hidden AE in plain sight (fatigue)", es: "Práctica guiada — GP-10.1: AE oculto a la vista (fatiga)" },
      lessonType: "case",
      objective: {
        en: "Progress note: ‘more tired than usual ×5 days’ with no AE captured in CRF.",
        es: "Nota: ‘más cansado de lo usual ×5 días’ sin AE capturado en CRF.",
      },
      keyPoints: [
        {
          en: "Any unfavorable symptom temporally associated with trial = AE; capture verbatim, onset, severity, outcome, and PI assessment; enter in EDC/CRF.",
          es: "Cualquier síntoma desfavorable temporalmente asociado = AE; capturar literal, inicio, severidad, desenlace y valoración PI; ingresar en EDC/CRF.",
        },
      ],
    },
    {
      lessonId: "M10.GP2",
      title: { en: "Guided practice — GP-10.2: causality bias pattern", es: "Práctica guiada — GP-10.2: patrón de sesgo de causalidad" },
      lessonType: "case",
      objective: {
        en: "PI marks 6/7 AEs as ‘not related’ despite clustering within 24h of dosing and known IB signals.",
        es: "PI marca 6/7 AE como ‘no relacionado’ pese a agrupamiento <24h post-dosis y señales del IB.",
      },
      keyPoints: [
        {
          en: "Document PI causality as given; flag pattern privately; align with IB and protocol; escalate if persistent as a system risk, not a single disagreement.",
          es: "Documentar causalidad PI; señalar patrón en privado; alinear con IB y protocolo; escalar si persiste como riesgo de sistema, no desacuerdo aislado.",
        },
      ],
    },
    {
      lessonId: "M10.GP3",
      title: { en: "Guided practice — GP-10.3: SAE timeline reconstruction", es: "Práctica guiada — GP-10.3: reconstrucción de tiempo SAE" },
      lessonType: "case",
      objective: {
        en: "Hospitalization Day 1; CRC notes Day 4; sponsor notified Day 5; awareness date is unclear.",
        es: "Hospitalización Día 1; CRC lo nota Día 4; patrocinador notificado Día 5; fecha de conciencia no está clara.",
      },
      keyPoints: [
        {
          en: "Clock starts at first site awareness (call/EMR/subject); reconstruct with artifacts; document late notification as deviation and CAPA.",
          es: "Reloj inicia en primera conciencia del sitio (llamada/EMR/sujeto); reconstruir con artefactos; documentar notificación tardía como desviación y CAPA.",
        },
      ],
    },
    {
      lessonId: "M10.GP4",
      title: { en: "Guided practice — GP-10.4: AE impacts endpoint & retention", es: "Práctica guiada — GP-10.4: AE impacta endpoint y retención" },
      lessonType: "case",
      objective: {
        en: "Subject drops out after severe nausea (AE) before primary endpoint visit; missing endpoint data risk.",
        es: "Sujeto abandona tras náusea severa (AE) antes de visita de endpoint primario; riesgo por dato faltante.",
      },
      keyPoints: [
        {
          en: "Document AE fully and capture dropout reason and last observations; connect to missing primary endpoint in a defensible narrative.",
          es: "Documentar AE completo y razón de abandono y última observación; conectar con endpoint primario faltante en narrativa defendible.",
        },
      ],
    },
    {
      lessonId: "M10.GP5",
      title: { en: "Guided practice — GP-10.5: under-reporting pressure", es: "Práctica guiada — GP-10.5: presión para sub-reportar" },
      lessonType: "case",
      objective: {
        en: "PI says: ‘Don’t report every little headache; sponsor will think our site has more AEs.’",
        es: "PI dice: ‘No reportes cada dolor de cabeza; patrocinador pensará que tenemos más AE.’",
      },
      keyPoints: [
        {
          en: "All protocol-required AEs must be captured; resist pressure; document per SOP; escalate pressure concern to QA/compliance and sponsor if needed.",
          es: "Todos los AE requeridos por protocolo se capturan; resistir presión; documentar según SOP; escalar preocupación a QA/cumplimiento y patrocinador si aplica.",
        },
      ],
    },
    {
      lessonId: "M10.GP6",
      title: { en: "Guided practice — GP-10.6: systemic miss pattern", es: "Práctica guiada — GP-10.6: patrón sistémico de omisiones" },
      lessonType: "case",
      objective: {
        en: "8/15 subjects show mild AEs in source (fatigue/nausea) but not in CRF; pattern suggests missing AE review step.",
        es: "8/15 sujetos con AE leves en fuente (fatiga/náusea) pero no en CRF; patrón sugiere falta de revisión AE.",
      },
      keyPoints: [
        {
          en: "Treat as system failure: implement per-visit AE review checklist and reconciliation; retrain; back-capture missing AEs with honest timing.",
          es: "Tratar como falla de sistema: checklist AE por visita y reconciliación; reentrenar; recuperar AE faltantes con tiempo honesto.",
        },
      ],
    },
    {
      lessonId: "M10.L4",
      title: { en: "Practical setup — what evidence you must keep", es: "Preparación práctica — qué evidencia debes conservar" },
      lessonType: "reading",
      objective: {
        en: "Prepare an inspection-ready evidence chain for AE/SAE: awareness artifacts, timelines, communications, and reconciled logs/EDC entries.",
        es: "Preparar cadena probatoria lista para inspección en AE/SAE: artefactos de conciencia, líneas de tiempo, comunicaciones y logs/EDC reconciliados.",
      },
      keyPoints: [
        {
          en: "Keep awareness evidence: EMR encounter timestamps, call logs, triage notes, emails, SAE form submission receipts.",
          es: "Conservar evidencia de conciencia: marcas de encuentro EMR, logs de llamadas, notas de triaje, correos, acuses de envío de SAE.",
        },
        {
          en: "Cross-check: source narrative ↔ AE log ↔ EDC ↔ sponsor timestamp; resolve mismatches with transparent addenda and deviations.",
          es: "Cruzar: narrativa fuente ↔ log AE ↔ EDC ↔ marca patrocinador; resolver desajustes con adendas transparentes y desviaciones.",
        },
      ],
    },
    {
      lessonId: "M10.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate elite behaviors: find hidden AEs, timeline precision, bias resistance, and system CAPA.",
        es: "Consolidar comportamientos elite: encontrar AE ocultos, precisión temporal, resistencia a sesgos y CAPA de sistema.",
      },
      keyPoints: [
        {
          en: "Strong: treats symptoms as AEs until proven otherwise; reconstructs awareness precisely; documents PI input; escalates pressure and patterns; fixes the system.",
          es: "Fuerte: trata síntomas como AE hasta demostrar lo contrario; reconstruye conciencia con precisión; documenta input PI; escala presión y patrones; arregla el sistema.",
        },
        {
          en: "Fail if: misses hidden AEs, accepts bias/pressure, minimizes late SAE reporting, or ignores repeated mismatch patterns.",
          es: "Fallo si: no ve AE ocultos, acepta sesgo/presión, minimiza reporte SAE tardío o ignora patrones repetidos de desajuste.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M10.E1",
      description: {
        en: "Symptoms in source (fatigue, nausea, headache) are never entered as AEs in EDC/CRF (‘hidden AEs’).",
        es: "Síntomas en fuente (fatiga, náusea, cefalea) nunca se ingresan como AE en EDC/CRF (‘AE ocultos’).",
      },
      risk: {
        en: "Under-reporting distorts safety profile; audit finding for incomplete safety data.",
        es: "Sub-reporte distorsiona perfil de seguridad; hallazgo por datos de seguridad incompletos.",
      },
      expectedLearnerResponse: {
        en: "Back-capture AEs with honest timing; implement per-visit AE review; reconcile source ↔ AE log ↔ EDC.",
        es: "Recuperar AE con tiempos honestos; implementar revisión AE por visita; reconciliar fuente ↔ log AE ↔ EDC.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M10.E2",
      description: {
        en: "PI marks nearly all AEs as ‘not related’ without rationale while temporal patterns align with known risks (causality bias).",
        es: "PI marca casi todos los AE como ‘no relacionado’ sin justificación mientras patrones temporales alinean con riesgos conocidos (sesgo causalidad).",
      },
      risk: {
        en: "Safety signal attenuation; inspection scrutiny of governance and IB awareness.",
        es: "Atenuación de señal de seguridad; escrutinio de gobierno y conocimiento del IB.",
      },
      expectedLearnerResponse: {
        en: "Document PI attribution; trend-review and discuss pattern; implement governance cadence; sponsor escalation if persistent.",
        es: "Documentar atribución PI; revisar tendencia y discutir patrón; implementar cadencia de gobierno; escalar a patrocinador si persiste.",
      },
      relatedDimensions: ["R", "C"],
    },
    {
      errorId: "M10.E3",
      description: {
        en: "SAE awareness date is recorded as the day the CRC noticed it, not the day the site first became aware; sponsor notification misses the 24h window.",
        es: "Fecha de conciencia SAE se registra como el día que el CRC lo notó, no cuando el sitio se enteró por primera vez; notificación al patrocinador fuera de 24h.",
      },
      risk: {
        en: "Late SAE reporting; major compliance finding.",
        es: "Reporte tardío de SAE; hallazgo mayor de cumplimiento.",
      },
      expectedLearnerResponse: {
        en: "Reconstruct awareness with artifacts; deviation with root cause; CAPA on detection and escalation triggers.",
        es: "Reconstruir conciencia con artefactos; desviación con causa raíz; CAPA en disparadores de detección/escalamiento.",
      },
      relatedDimensions: ["R", "O"],
    },
    {
      errorId: "M10.E4",
      description: {
        en: "Pressure to under-report (‘don’t report every headache’) leads to selective AE capture in CRF/EDC.",
        es: "Presión para sub-reportar (‘no reportes cada cefalea’) lleva a captura selectiva de AE en CRF/EDC.",
      },
      risk: {
        en: "GCP non-compliance; potential misconduct allegations.",
        es: "Incumplimiento GCP; potencial alegación de mala conducta.",
      },
      expectedLearnerResponse: {
        en: "Follow SOP/protocol; escalate pressure; document governance decisions; retrain and monitor adherence.",
        es: "Seguir SOP/protocolo; escalar presión; documentar decisiones; reentrenar y monitorear adherencia.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M10.E5",
      description: {
        en: "Source vs CRF mismatch persists (AEs in one but not the other) and follow-up outcomes are left stale across visits.",
        es: "Desajuste fuente vs CRF persiste (AE en uno pero no en otro) y desenlaces de seguimiento quedan desactualizados entre visitas.",
      },
      risk: {
        en: "Inconsistent safety dataset; weak inspection defense.",
        es: "Dataset de seguridad inconsistente; defensa débil en inspección.",
      },
      expectedLearnerResponse: {
        en: "Run reconciliation cadence; update outcomes; log deviations where needed; quality trend review with PI.",
        es: "Ejecutar cadencia de reconciliación; actualizar desenlaces; registrar desviaciones; revisión de tendencias con PI.",
      },
      relatedDimensions: ["Q", "O"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M10.EX1",
      name: { en: "AE/SAE Audit Stress Test — hidden AEs, bias, timelines & patterns", es: "Prueba de estrés AE/SAE — AE ocultos, sesgo, tiempos y patrones" },
      scenario: {
        en: "40 minutes before monitoring: source notes and CRFs for 5 subjects show hidden AEs, causality patterns, and at least one SAE with unclear awareness vs reporting timeline. Pressure cues and repeated miss patterns appear across subjects.",
        es: "40 minutos antes de monitoría: notas fuente y CRFs para 5 sujetos muestran AE ocultos, patrones de causalidad y al menos un SAE con línea de tiempo conciencia vs reporte no clara. Hay señales de presión y patrones repetidos entre sujetos.",
      },
      inputs: [
        { inputId: "M10.IN1", label: { en: "Source notes packet (5 subjects)", es: "Paquete de notas fuente (5 sujetos)" }, inputKind: "mock_ehr" },
        { inputId: "M10.IN2", label: { en: "CRF/EDC AE forms export", es: "Export de formularios AE en CRF/EDC" }, inputKind: "export" },
        { inputId: "M10.IN3", label: { en: "Sponsor notification timestamps + SAE form receipts", es: "Marcas notificación patrocinador + acuses SAE" }, inputKind: "table" },
        { inputId: "M10.IN4", label: { en: "PI causality notes + IB excerpt", es: "Notas causalidad PI + extracto IB" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "Identify hidden AEs, source↔CRF mismatches, and follow-up gaps. For SAEs: reconstruct site awareness → sponsor notification timeline; classify late reporting and document deviation rationale. Flag causality bias and under-reporting pressure signals; propose system CAPA (per-visit AE checklist, PI review cadence, no-pressure policy). Draft a monitor-ready defense summary with evidence pointers.",
        es: "Identificar AE ocultos, desajustes fuente↔CRF y brechas de seguimiento. Para SAE: reconstruir conciencia del sitio → notificación al patrocinador; clasificar reporte tardío y documentar desviación. Señalar sesgo de causalidad y presión de sub-reporte; proponer CAPA de sistema (checklist AE por visita, cadencia revisión PI, política anti-presión). Redactar resumen defendible para monitor con punteros de evidencia.",
      },
      deliverables: [
        { deliverableId: "M10.D1", label: { en: "Per-subject AE/SAE discrepancy log", es: "Log discrepancias AE/SAE por sujeto" }, formatHint: "table" },
        { deliverableId: "M10.D2", label: { en: "Awareness-to-reporting timeline reconstruction", es: "Reconstrucción línea tiempo conciencia→reporte" }, formatHint: "table" },
        { deliverableId: "M10.D3", label: { en: "CAPA + monitoring defense memo", es: "CAPA + memo defensa para monitoría" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M10.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M10.C1",
        description: {
          en: "Detects hidden AEs and reconciles source ↔ AE log ↔ CRF/EDC with complete key elements and honest timing.",
          es: "Detecta AE ocultos y reconcilia fuente ↔ log AE ↔ CRF/EDC con elementos completos y tiempos honestos.",
        },
        points: 30,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Misses clear symptoms in source that should be captured as AEs or ‘cleans’ records without transparent late-entry rationale.",
          es: "No detecta síntomas claros en fuente que deben capturarse como AE o ‘limpia’ registros sin justificación transparente de entrada tardía.",
        },
      },
      {
        criterionId: "M10.C2",
        description: {
          en: "Correctly classifies AE vs SAE and documents PI seriousness/relatedness input; preserves PI attribution while ensuring protocol-required capture.",
          es: "Clasifica correctamente AE vs SAE y documenta input PI de seriedad/relación; preserva atribución PI asegurando captura requerida por protocolo.",
        },
        points: 25,
        mapsToDimensions: ["R", "C"],
        failCondition: {
          en: "Treats SAE seriousness as optional based on causality or fails to document PI assessment where required.",
          es: "Trata seriedad SAE como opcional según causalidad o no documenta valoración PI cuando corresponde.",
        },
      },
      {
        criterionId: "M10.C3",
        description: {
          en: "Reconstructs awareness timelines precisely and applies reporting windows; documents late SAE reporting as deviation with evidence and CAPA.",
          es: "Reconstruye tiempos de conciencia con precisión y aplica ventanas de reporte; documenta SAE tardío como desviación con evidencia y CAPA.",
        },
        points: 25,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Uses a convenient awareness date to excuse a missed 24h SAE window or omits deviation documentation when late.",
          es: "Usa fecha de conciencia conveniente para excusar ventana SAE 24h o omite documentación de desviación cuando hay tardanza.",
        },
      },
      {
        criterionId: "M10.C4",
        description: {
          en: "Detects causality bias and under-reporting pressure; proposes system CAPA and escalation pathways; links safety issues to retention/endpoint data risk.",
          es: "Detecta sesgo de causalidad y presión de sub-reporte; propone CAPA de sistema y vías de escalamiento; vincula seguridad con riesgo de datos de retención/endpoint.",
        },
        points: 20,
        mapsToDimensions: ["Q", "R"],
        failCondition: {
          en: "Accepts pressure or recurring bias patterns without escalation or proposes only case-by-case fixes without system controls.",
          es: "Acepta presión o patrones repetidos de sesgo sin escalar o propone solo arreglos caso por caso sin controles de sistema.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.32,
      aggregationKey: "ae_sae_reporting_timelines_escalation_and_inspection_defense",
    },
    {
      dimension: "Q",
      weight: 0.28,
      aggregationKey: "ae_dataset_completeness_hidden_ae_detection_and_reconciliation",
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
      en: "OSCE.S3 is the expedited SAE reporting station: awareness timeline reconstruction, reporting timeliness, and sponsor notification defense—the same core decisions and audit-critical behaviors as this module.",
      es: "OSCE.S3 es la estación de reporte SAE expedito: reconstrucción de la línea de tiempo de conciencia, oportunidad del reporte y defensa de la notificación al patrocinador—las mismas decisiones núcleo y conductas críticas para auditoría que este módulo.",
    },
    stationIds: ["OSCE.S3"],
  },
  tags: ["safety", "regulatory", "audit_readiness", "data_integrity", "traceability", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Keep AE, SAE, SUSAR, MedDRA, IB, PI, CRA, EDC, GCP, CtQ as EN safety/regulatory tokens; expand once in ES if needed.",
    es: "Mantener AE, SAE, SUSAR, MedDRA, IB, PI, CRA, EDC, GCP, CtQ como tokens de seguridad/regulatorio EN; expandir una vez en ES si hace falta.",
  },
};

