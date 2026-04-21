// src/curriculum-engine/data/modules/m2.ts

import type { Module } from "../../types";

/**
 * Module 2 — Protocol mastery & risk analysis (ICH E6(R3) QbD / CtQ, RBQM-ready).
 */
export const MODULE_M2: Module = {
  id: "M2",
  slug: "protocol-mastery-risk-analysis",
  internalName: "mod_02_protocol_mastery_risk",
  category: "foundations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "C", "Q"],
  title: {
    en: "Module 2 — Clinical Trial Protocol: Reading, Interpreting & Managing Risk at Site Level",
    es: "Módulo 2 — Protocolo de ensayo clínico: lectura, interpretación y gestión de riesgo en el sitio",
  },
  objective: {
    en: "Extract critical operational requirements from a protocol; interpret ambiguous wording; resolve conflicts between sections; apply multiple rules under time pressure while keeping eligibility, visits, deviations, logs, AE reporting, and source documentation compliant and audit-defensible.",
    es: "Extraer requisitos operativos críticos del protocolo; interpretar redacción ambigua; resolver conflictos entre secciones; aplicar reglas múltiples bajo presión temporal manteniendo elegibilidad, visitas, desviaciones, logs, reporte de EA y documentación de fuente conformes y defendibles ante auditoría.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Maps protocol sections (I/E, schedule of assessments, treatment, safety reporting, amendments) to site tools: eligibility checklist, visit flow, prohibited meds list, safety focus list.",
          es: "Mapea secciones del protocolo (I/E, calendario de evaluaciones, tratamiento, reporte de seguridad, enmiendas) a herramientas del sitio: checklist de elegibilidad, flujo de visitas, lista de medicamentos prohibidos, lista foco seguridad.",
        },
        {
          en: "Defines deviation vs important deviation/violation in operational terms and names CtQ factors (eligibility, primary endpoint, key safety measures) per ICH E6(R3) expectations.",
          es: "Define desviación vs desviación importante/violación en términos operativos y nombra factores CtQ (elegibilidad, endpoint primario, medidas clave de seguridad) según ICH E6(R3).",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Runs pre-enrollment risk walk-through, documents grey zones, escalates to sponsor/medical monitor when wording is ambiguous; implements day-to-day visit checklists within windows.",
          es: "Ejecuta revisión de riesgo pre-inclusión, documenta zonas grises, escala a patrocinador/monitor médico cuando la redacción es ambigua; implementa checklists de visita dentro de ventanas.",
        },
        {
          en: "Records deviations with impact on subject/data, informs PI and sponsor per SOP, aligns Screening/Enrollment logs, Deviation Log, source, and EDC after clarifications.",
          es: "Registra desviaciones con impacto en sujeto/datos, informa PI y patrocinador según SOP, alinea logs screening/inclusión, log de desviaciones, fuente y EDC tras aclaraciones.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Resolves multi-section conflicts (e.g., inclusion vs prohibited meds) by halting enrollment, formal query, and documented interim plan—not by choosing the convenient section.",
          es: "Resuelve conflictos multi-sección (p. ej., inclusión vs medicamentos prohibidos) deteniendo inclusión, query formal y plan interino documentado—no eligiendo la sección conveniente.",
        },
        {
          en: "Prioritizes under RBQM time pressure: ineligible enrollment, missing CtQ/primary endpoint assessments, unimplemented amendments; defends escalation when PI preference contradicts explicit protocol or ‘no waivers’ language.",
          es: "Prioriza bajo presión RBQM: inclusión inelegible, evaluaciones CtQ/endpoint primario faltantes, enmiendas no implementadas; defiende escalamiento cuando preferencia del PI contradice protocolo explícito o cláusula ‘sin excepciones’.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M2.L1",
      title: { en: "Core concepts — protocol as binding rulebook", es: "Conceptos núcleo — protocolo como reglamento vinculante" },
      lessonType: "reading",
      objective: {
        en: "Anchor sections CRCs must master, deviations vs important deviations, QbD/CtQ, ambiguity, and propagation to logs/AE/ALCOA.",
        es: "Anclar secciones que el CRC debe dominar, desviaciones vs desviaciones importantes, QbD/CtQ, ambigüedad y propagación a logs/AE/ALCOA.",
      },
      keyPoints: [
        {
          en: "Protocol = legal + operational rulebook once IRB/authorities approve.",
          es: "Protocolo = reglamento legal y operacional una vez aprobado por CEI/autoridades.",
        },
        {
          en: "Master I/E, schedule of assessments, treatment (doses, windows, prohibited meds), safety/AE rules, amendments/FAQs.",
          es: "Dominar I/E, calendario de evaluaciones, tratamiento (dosis, ventanas, prohibidos), reglas AE/seguridad, enmiendas/FAQs.",
        },
        {
          en: "Important deviation: affects rights/safety or data integrity (e.g., ineligible enrollment, missing primary endpoint, unreported SAE).",
          es: "Desviación importante: afecta derechos/seguridad o integridad de datos (p. ej., inclusión inelegible, endpoint primario faltante, SAE no reportada).",
        },
        {
          en: "ICH E6(R3): CtQ factors managed proactively (QbD/RBQM), not only reactive monitoring.",
          es: "ICH E6(R3): factores CtQ gestionados de forma proactiva (QbD/RBQM), no solo monitoría reactiva.",
        },
        {
          en: "Ambiguous terms (‘clinically significant’, ‘in investigator opinion’) require structured thinking + documented rationale.",
          es: "Términos ambiguos (‘clínicamente significativo’, ‘en opinión del investigador’) exigen razonamiento estructurado + justificación documentada.",
        },
        {
          en: "Protocol decisions flow to Screening/Enrollment logs, Deviation Log, visit/randomization execution (M8), sponsor safety/AE workflows (OSCE.S3), source/EDC ALCOA+ (M4), IP custody & accountability (M9).",
          es: "Decisiones del protocolo fluyen a logs screening/inclusión, log de desviaciones, ejecución visita/randomización (M8), flujos seguridad/EA patrocinador (OSCE.S3), fuente/EDC ALCOA+ (M4), custodia y contabilidad IP (M9).",
        },
      ],
    },
    {
      lessonId: "M2.L2",
      title: { en: "Real-world workflow — CRC + PI + sponsor + monitor", es: "Flujo real — CRC + PI + patrocinador + monitor" },
      lessonType: "reading",
      objective: {
        en: "Follow protocol hand-off, deep read extraction, pre-enrollment risk review, recruitment/visits, deviation handling, continuous risk review.",
        es: "Seguir entrega de protocolo, extracción lectura profunda, revisión riesgo pre-inclusión, reclutamiento/visitas, manejo de desviaciones, revisión continua de riesgo.",
      },
      keyPoints: [
        {
          en: "Hand-off: sponsor/CRO training; PI signs; CRC receives final protocol + amendments + clarifications.",
          es: "Entrega: capacitación patrocinador/CRO; firma PI; CRC recibe protocolo final + enmiendas + aclaraciones.",
        },
        {
          en: "Extract: eligibility line-by-line, visit charts from SoA, prohibited/allowed meds, safety focus list.",
          es: "Extraer: elegibilidad línea por línea, gráficos de visita desde SoA, medicamentos prohibidos/permitidos, lista foco seguridad.",
        },
        {
          en: "Pre-enrollment: hypothetical subject walk; capture grey zones; escalate for written clarification.",
          es: "Pre-inclusión: recorrido con sujeto hipotético; capturar zonas grises; escalar para aclaración escrita.",
        },
        {
          en: "Each visit: CtQ procedures in window; deviations in source + Deviation Log; formal query if sections conflict.",
          es: "Cada visita: procedimientos CtQ en ventana; desviaciones en fuente + log de desviaciones; query formal si secciones chocan.",
        },
        {
          en: "Continuous: PI + CRC review deviation patterns for design/training gaps (RBQM).",
          es: "Continuo: PI + CRC revisan patrones de desviación por brechas de diseño/capacitación (RBQM).",
        },
      ],
    },
    {
      lessonId: "M2.L3",
      title: { en: "Error-prone areas — audit patterns", es: "Zonas propensas a error — patrones de auditoría" },
      lessonType: "reading",
      objective: {
        en: "Recognize recurring protocol-use failures from QA and inspections.",
        es: "Reconocer fallas recurrentes de uso de protocolo en QA e inspecciones.",
      },
      keyPoints: [
        {
          en: "Ineligible enrollment: ignored criteria, missing data, ‘close enough’ numeric bending.",
          es: "Inclusión inelegible: criterios ignorados, datos faltantes, flexión numérica ‘casi’.",
        },
        {
          en: "Missing/out-of-window primary endpoint and key safety assessments.",
          es: "Endpoint primario faltante o fuera de ventana y evaluaciones clave de seguridad.",
        },
        {
          en: "Amendments not implemented consistently across subjects.",
          es: "Enmiendas no implementadas de forma consistente entre sujetos.",
        },
        {
          en: "Under-documented deviations and informal ‘exceptions’ without protocol text.",
          es: "Desviaciones poco documentadas y ‘excepciones’ informales sin texto en protocolo.",
        },
        {
          en: "Decisions not traceable to protocol wording or filed sponsor clarifications.",
          es: "Decisiones no trazables al texto del protocolo o aclaraciones archivadas del patrocinador.",
        },
        {
          en: "Multi-version studies: wrong SoA applied to wrong enrollment cohort.",
          es: "Estudios multi-versión: SoA incorrecto aplicado a cohorte de inclusión equivocada.",
        },
      ],
    },
    {
      lessonId: "M2.GP1",
      title: { en: "Guided practice — GP-2.1: hard inclusion (age)", es: "Práctica guiada — GP-2.1: inclusión dura (edad)" },
      lessonType: "case",
      objective: {
        en: "Hypertension trial: age 18–65 inclusive; SBP ≥140 and <180 at baseline with two separate readings. Candidate is 67, SBP 160/95, referred by cardiologist friend of PI.",
        es: "Ensayo hipertensión: edad 18–65 inclusive; TAS ≥140 y <180 en línea base con dos lecturas separadas. Candidato 67 años, TAS 160/95, referido por cardiólogo amigo del PI.",
      },
      keyPoints: [
        {
          en: "What CRC sees: DOB → 67; BP meets criterion; pressure to enroll.",
          es: "Qué ve el CRC: fecha nacimiento → 67; TA cumple criterio; presión para incluir.",
        },
        {
          en: "How to think: numeric I/E are CtQ; no investigator discretion for age unless protocol says so.",
          es: "Cómo pensar: I/E numéricos son CtQ; sin discreción del investigador para edad salvo que el protocolo lo diga.",
        },
        {
          en: "Decision: Do not enroll; screen fail age >65 in Screening Log and source.",
          es: "Decisión: No incluir; screen fail edad >65 en log de screening y fuente.",
        },
        {
          en: "Why it matters: safety population; data validity; major audit finding if enrolled.",
          es: "Por qué importa: población de seguridad; validez de datos; hallazgo mayor en auditoría si se incluye.",
        },
      ],
    },
    {
      lessonId: "M2.GP2",
      title: { en: "Guided practice — GP-2.2: ‘close enough’ creatinine (incorrect)", es: "Práctica guiada — GP-2.2: creatinina ‘casi’ (incorrecto)" },
      lessonType: "case",
      objective: {
        en: "Creatinine ≤1.5× ULN at screening; ULN 1.2 mg/dL; result 1.9 (1.58×). PI: ‘He’s close—lab variation.’",
        es: "Creatinina ≤1.5× LSN en screening; LSN 1,2 mg/dL; resultado 1,9 (1,58×). PI: ‘Está cerca—variación de lab’.",
      },
      keyPoints: [
        {
          en: "What CRC sees: explicit numeric threshold; no ± tolerance in protocol text.",
          es: "Qué ve el CRC: umbral numérico explícito; sin tolerancia ± en texto del protocolo.",
        },
        {
          en: "How to think: ‘close’ is not a protocol category; check repeat-lab window if allowed—not silent waiver.",
          es: "Cómo pensar: ‘casi’ no es categoría del protocolo; revisar ventana de repetición de lab si aplica—no exención silenciosa.",
        },
        {
          en: "Why mistakes happen: recruitment pressure, PI instinct, culture of bending numbers.",
          es: "Por qué ocurre: presión de reclutamiento, instinto del PI, cultura de flexar números.",
        },
        {
          en: "Decision: Not eligible on 1.9; repeat if protocol allows; else no enrollment without documented sponsor/IRB exception path if any.",
          es: "Decisión: No elegible con 1,9; repetir si protocolo permite; si no, sin inclusión sin vía documentada de excepción patrocinador/CEI si existe.",
        },
        {
          en: "Why it matters: clearance/toxicity risk; analysis integrity; unapproved waivers = major findings.",
          es: "Por qué importa: riesgo depuración/toxicidad; integridad analítica; exenciones no aprobadas = hallazgos mayores.",
        },
      ],
    },
    {
      lessonId: "M2.GP3",
      title: {
        en: "Guided practice — GP-2.3: ‘clinically significant’ LFTs (ambiguous)",
        es: "Práctica guiada — GP-2.3: LFT ‘clínicamente significativas’ (ambiguo)",
      },
      lessonType: "case",
      objective: {
        en: "Exclusion: ‘Any clinically significant LFT abnormality at screening, in investigator opinion.’ ALT 1.6× ULN, AST 1.4× ULN, bilirubin normal, asymptomatic. IB notes DILI risk but no numeric I/E thresholds.",
        es: "Exclusión: ‘Cualquier alteración LFT clínicamente significativa en screening, en opinión del investigador.’ ALT 1,6× LSN, AST 1,4× LSN, bilirrubina normal, asintomático. IB menciona riesgo DILI sin umbrales numéricos en I/E.",
      },
      keyPoints: [
        {
          en: "How to think: cross-check stopping rules/AE criteria; link future hepatic events to this documented judgment; query sponsor if silent.",
          es: "Cómo pensar: cruzar reglas de parada/criterios AE; vincular eventos hepáticos futuros a este juicio documentado; consultar patrocinador si hay silencio.",
        },
        {
          en: "Decision: Document PI rationale in source; file clarification response; ensure AE/Deviation logs continuity if thresholds later breached.",
          es: "Decisión: Documentar razonamiento PI en fuente; archivar respuesta de aclaración; asegurar continuidad en logs AE/desviación si luego se superan umbrales.",
        },
        {
          en: "Why it matters: patient risk on IMP; scrutiny of future AEs; regulators accept judgment if consistent, documented, IB-aligned.",
          es: "Por qué importa: riesgo al paciente con IMP; escrutinio de EA futuros; reguladores aceptan juicio si es consistente, documentado y alineado al IB.",
        },
      ],
    },
    {
      lessonId: "M2.L4",
      title: { en: "Audit / monitor perspective", es: "Perspectiva de auditoría / monitor" },
      lessonType: "reading",
      objective: {
        en: "Anticipate RBQM/monitor questions, typical findings, and CAPA beyond slides.",
        es: "Anticipar preguntas RBQM/monitor, hallazgos típicos y CAPA más allá de diapositivas.",
      },
      keyPoints: [
        {
          en: "Questions: eligibility checklist; amendment roll-out; deviation reportability and log.",
          es: "Preguntas: checklist de elegibilidad; despliegue de enmiendas; reportabilidad de desviaciones y log.",
        },
        {
          en: "Findings: ineligible subjects; missing primary endpoint/window; inconsistent amendments; systematic under-reporting.",
          es: "Hallazgos: sujetos inelegibles; endpoint primario/ventana faltante; enmiendas inconsistentes; sub-reporte sistemático.",
        },
        {
          en: "CAPA: version-specific checklists, deviation SOP, amendment communication, risk-based oversight integration.",
          es: "CAPA: checklists por versión, SOP de desviaciones, comunicación de enmiendas, integración de supervisión basada en riesgo.",
        },
      ],
    },
    {
      lessonId: "M2.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate conflict resolution, RBQM prioritization, PI vs protocol escalation, and integration with M4/M8/M9.",
        es: "Consolidar resolución de conflictos, priorización RBQM, escalamiento PI vs protocolo e integración con M4/M8/M9.",
      },
      keyPoints: [
        {
          en: "Strong work: seeks clarification on multi-section conflict; never enrolls on ‘convenient’ reading alone.",
          es: "Trabajo sólido: busca aclaración ante conflicto multi-sección; nunca incluye solo con lectura ‘conveniente’.",
        },
        {
          en: "Fail if: accepts clear ineligible enrollment; treats missing primary as minor only; ignores version-specific rules per cohort; finds no high-risk issues in RBQM drill.",
          es: "Fallo si: acepta inclusión inelegible clara; trata endpoint primario faltante como solo menor; ignora reglas por versión por cohorte; no halla riesgos altos en ejercicio RBQM.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M2.E1",
      description: {
        en: "Subject with NYHA Class III HF—explicit exclusion. Eligibility checklist leaves HF blank; PI notes ‘stable, controlled’ and enrolls. No waiver or sponsor/IRB approval.",
        es: "Sujeto con IC NYHA III—exclusión explícita. Checklist de elegibilidad deja IC en blanco; PI anota ‘estable, controlada’ e incluye. Sin excepción ni aprobación patrocinador/CEI.",
      },
      risk: {
        en: "Patient IMP risk; data validity; major/critical audit citation.",
        es: "Riesgo con IMP; validez de datos; cita mayor/crítica en auditoría.",
      },
      expectedLearnerResponse: {
        en: "Halt enrollment; notify sponsor/IRB; deviation package; assess data impact; never complete eligibility as ‘met’ when exclusion documented.",
        es: "Detener inclusión; notificar patrocinador/CEI; paquete de desviación; evaluar impacto en datos; nunca completar elegibilidad como ‘cumple’ con exclusión documentada.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M2.E2",
      description: {
        en: "Primary endpoint FEV1 Week 12 spirometry missed in multiple subjects; machine broken/scheduling. Source says ‘not performed’; Deviation Log empty; no reschedule trail.",
        es: "Endpoint primario FEV1 semana 12 espirometría omitida en múltiples sujetos; equipo roto/agenda. Fuente dice ‘no realizado’; log de desviaciones vacío; sin rastro de reprogramación.",
      },
      risk: {
        en: "Data: missing endpoint may drop subjects or force imputation; compliance: CtQ failure + under-reported deviations.",
        es: "Datos: endpoint faltante puede excluir sujetos o forzar imputación; cumplimiento: falla CtQ + desviaciones sub-reportadas.",
      },
      expectedLearnerResponse: {
        en: "Enter deviations with impact; rescue plan for data; sponsor notification; CAPA on equipment and visit windows.",
        es: "Ingresar desviaciones con impacto; plan de rescate de datos; notificación patrocinador; CAPA en equipo y ventanas de visita.",
      },
      relatedDimensions: ["Q", "O", "R"],
    },
    {
      errorId: "M2.E3",
      description: {
        en: "Amendment 1 makes Visit 3 imaging required for new safety signal. IRB approves; site treats imaging as optional for months; inconsistent across subjects.",
        es: "Enmienda 1 hace obligatoria imagen en Visita 3 por nueva señal de seguridad. CEI aprueba; sitio trata imagen como opcional durante meses; inconsistente entre sujetos.",
      },
      risk: {
        en: "Patient missed safety detection; data heterogeneity; amendment non-implementation finding.",
        es: "Paciente sin detección de seguridad; heterogeneidad de datos; hallazgo de no implementación de enmienda.",
      },
      expectedLearnerResponse: {
        en: "Gap analysis by subject version; catch-up imaging plan per medical monitor; deviation where applicable; retrain on SoA changes.",
        es: "Análisis de brechas por versión de sujeto; plan de imágenes de recuperación según monitor médico; desviación si aplica; reentrenar en cambios de SoA.",
      },
      relatedDimensions: ["R", "O", "Q"],
    },
    {
      errorId: "M2.E4",
      description: {
        en: "PI allows prohibited concomitant meds and far out-of-window visits; CRC labels ‘clinical judgement’ without deviation logs or sponsor notice despite no protocol allowance.",
        es: "PI permite medicamentos concomitantes prohibidos y visitas muy fuera de ventana; CRC etiqueta ‘juicio clínico’ sin logs de desviación ni aviso al patrocinador sin permiso en protocolo.",
      },
      risk: {
        en: "Cumulative untracked risk; protocol drift; systemic non-compliance perception.",
        es: "Riesgo acumulado no rastreado; deriva del protocolo; percepción de incumplimiento sistémico.",
      },
      expectedLearnerResponse: {
        en: "Restore deviation reporting; PI attestation; sponsor disclosure; CAPA on ‘no informal exceptions’ policy.",
        es: "Restaurar reporte de desviaciones; atestación PI; divulgación al patrocinador; CAPA de política ‘sin excepciones informales’.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M2.E5",
      description: {
        en: "Protocol: ‘No waivers of I/E permitted.’ Subject on prohibited med; PI orders CRC to mark eligibility ‘meets all’ and hide discontinuation from sponsor.",
        es: "Protocolo: ‘No se permiten excepciones de I/E.’ Sujeto con medicamento prohibido; PI ordena marcar elegibilidad ‘cumple todo’ y ocultar suspensión al patrocinador.",
      },
      risk: {
        en: "Patient safety unknowns; data integrity collapse; serious GCP/ethics breach.",
        es: "Incógnitas de seguridad al paciente; colapso de integridad de datos; brecha grave GCP/ética.",
      },
      expectedLearnerResponse: {
        en: "Refuse falsification; escalate to compliance; document instruction conflict; do not enroll.",
        es: "Rechazar falsificación; escalar a cumplimiento; documentar conflicto de instrucciones; no incluir.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M2.E6",
      description: {
        en: "Conflict: Inclusion allows stable SSRI ≥3 months; prohibited meds section bans SSRIs 14 days pre-baseline through EOT. Subject on sertraline 6 months. PI says inclusion trumps prohibited list.",
        es: "Conflicto: Inclusión permite ISRS estable ≥3 meses; sección de prohibidos prohíbe ISRS desde 14 días pre-baseline hasta FinT. Sujeto con sertralina 6 meses. PI dice que inclusión prima sobre lista prohibida.",
      },
      risk: {
        en: "Stopping SSRI vs continuing interaction risk; cross-site inconsistency; audit of unresolved section conflict.",
        es: "Riesgo al suspender ISRS vs continuar interacción; inconsistencia entre sitios; auditoría de conflicto de sección sin resolver.",
      },
      expectedLearnerResponse: {
        en: "Stop enrollment; formal written clarification; document query and response; interim Deviation Log entry if enrollment paused; no silent pick of one section.",
        es: "Detener inclusión; aclaración escrita formal; documentar query y respuesta; entrada interina en log de desviaciones si se pausa inclusión; no elegir en silencio una sección.",
      },
      relatedDimensions: ["R", "C", "O", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M2.EX1",
      name: {
        en: "Protocol Risk Lab — multiple cohorts under time pressure",
        es: "Laboratorio de riesgo de protocolo — múltiples cohortes bajo presión",
      },
      scenario: {
        en: "35 minutes before remote sponsor RBQM review (eligibility, primary endpoints, deviations). Subjects A, B, C enrolled under v1.0, post-Amendment 1, post-Amendment 2 respectively—different windows, imaging, and safety labs. Inputs: protocol v1.0–v3.0 with effective dates; per subject: PI signature date, eligibility checklist, labs/imaging, source at baseline and primary endpoint visit, EDC summaries, incomplete Deviation Log, sponsor email on ambiguous LFT rule (may or may not apply). Incomplete/conflicting by design.",
        es: "35 minutos antes de revisión RBQM remota del patrocinador (elegibilidad, endpoints primarios, desviaciones). Sujetos A, B, C incluidos bajo v1.0, post-enmienda 1 y post-enmienda 2 respectivamente—distintas ventanas, imagen y labs de seguridad. Insumos: protocolo v1.0–v3.0 con fechas efectivas; por sujeto: fecha firma PI, checklist de elegibilidad, labs/imagen, fuente en baseline y visita de endpoint primario, resúmenes EDC, log de desviaciones incompleto, correo patrocinador sobre regla LFT ambigua (puede o no aplicar). Incompleto/conflictivo a propósito.",
      },
      inputs: [
        { inputId: "M2.IN1", label: { en: "Protocol + amendments packet", es: "Paquete protocolo + enmiendas" }, inputKind: "pdf" },
        { inputId: "M2.IN2", label: { en: "Per-subject version & enrollment artifacts", es: "Versión por sujeto y artefactos de inclusión" }, inputKind: "table" },
        { inputId: "M2.IN3", label: { en: "Source + EDC excerpts", es: "Extractos fuente + EDC" }, inputKind: "mock_ehr" },
        { inputId: "M2.IN4", label: { en: "Deviation log + sponsor email", es: "Log desviaciones + correo patrocinador" }, inputKind: "table" },
      ],
      learnerTask: {
        en: "Per A/B/C: identify applicable protocol version at enrollment; verify eligibility against that version; confirm CtQ assessments (primary endpoint, required imaging/labs) in window; list all protocol issues including unlogged deviations. Prioritize top 3 for RBQM; classify minor/major/critical and impact (patient/data/compliance); CAPA corrective + preventive; draft defense for one PI-vs-protocol or multi-section conflict scenario (identify conflict, escalation, GCP/IRB/E6(R3) alignment).",
        es: "Por A/B/C: identificar versión de protocolo aplicable al inclusión; verificar elegibilidad contra esa versión; confirmar evaluaciones CtQ (endpoint primario, imagen/labs requeridos) en ventana; listar todos los problemas de protocolo incluidas desviaciones no registradas. Priorizar 3 principales para RBQM; clasificar menor/mayor/crítico e impacto (paciente/datos/cumplimiento); CAPA correctiva + preventiva; borrador de defensa para un escenario conflicto PI-vs-protocolo o multi-sección (identificar conflicto, escalamiento, alineación GCP/CEI/E6(R3)).",
      },
      deliverables: [
        { deliverableId: "M2.D1", label: { en: "Version-cohort issue matrix", es: "Matriz de hallazgos por versión/cohorte" }, formatHint: "table" },
        { deliverableId: "M2.D2", label: { en: "Top-3 CAPA + severity", es: "CAPA top-3 + severidad" }, formatHint: "pdf" },
        { deliverableId: "M2.D3", label: { en: "Defense memo (conflict case)", es: "Memo de defensa (caso conflicto)" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M2.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M2.C1",
        description: {
          en: "Correctly applies protocol version per subject cohort; flags ineligible enrollment, missing CtQ/primary data, and amendment implementation gaps.",
          es: "Aplica correctamente versión de protocolo por cohorte; señala inclusión inelegible, datos CtQ/endpoint primario faltantes y brechas de implementación de enmiendas.",
        },
        points: 35,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Misses version-specific rules or treats clear I/E violation as acceptable.",
          es: "Omite reglas por versión o trata violación clara de I/E como aceptable.",
        },
      },
      {
        criterionId: "M2.C2",
        description: {
          en: "Prioritizes RBQM risks: ineligible subjects, missing primary/safety assessments, unlogged deviations—over cosmetic documentation.",
          es: "Prioriza riesgos RBQM: sujetos inelegibles, evaluaciones primarias/seguridad faltantes, desviaciones no registradas—sobre documentación cosmética.",
        },
        points: 25,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "No high-risk issues identified in the exercise packet or all labeled minor without justification.",
          es: "No identifica hallazgos de alto riesgo en el paquete o todo etiquetado menor sin justificación.",
        },
      },
      {
        criterionId: "M2.C3",
        description: {
          en: "CAPA: concrete corrective (logs, sponsor/IRB notice, data flags) and preventive (version checklists, Q&A repo, second reviewer on CtQ).",
          es: "CAPA: correctiva concreta (logs, aviso patrocinador/CEI, banderas de datos) y preventiva (checklists por versión, repositorio Q&A, segundo revisor en CtQ).",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "CAPA is generic retraining without workflow or amendment-rollout fixes.",
          es: "CAPA es reentrenamiento genérico sin arreglos de flujo o despliegue de enmiendas.",
        },
      },
      {
        criterionId: "M2.C4",
        description: {
          en: "Defense memo: names conflict, escalation path, aligns with GCP/IRB and E6(R3) risk-based quality; no concealment language.",
          es: "Memo de defensa: nombra conflicto, vía de escalamiento, alinea con GCP/CEI y calidad basada en riesgo E6(R3); sin lenguaje de ocultamiento.",
        },
        points: 15,
        mapsToDimensions: ["R", "C"],
        failCondition: {
          en: "Advises enrolling or continuing while explicit ‘no waivers’ or unresolved section conflict remains undocumented to sponsor.",
          es: "Aconseja incluir o continuar con ‘sin excepciones’ explícito o conflicto de sección sin resolver sin documentar al patrocinador.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.28,
      aggregationKey: "protocol_regulatory_binding_amendment_compliance",
    },
    {
      dimension: "O",
      weight: 0.32,
      aggregationKey: "schedule_windows_ctq_operational_execution",
    },
    {
      dimension: "Q",
      weight: 0.24,
      aggregationKey: "endpoint_integrity_deviation_reporting_rbqm",
    },
    {
      dimension: "C",
      weight: 0.16,
      aggregationKey: "investigator_judgment_documented_clinical_rationale",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S1 stresses eligibility traceability; OSCE.S4 stresses visit-window/PD/log discipline driven by protocol SoA—same CtQ moves as this module.",
      es: "OSCE.S1 ejercita trazabilidad de elegibilidad; OSCE.S4 ejercita ventanas/PD/logs impulsados por SoA del protocolo—mismos movimientos CtQ que este módulo.",
    },
    stationIds: ["OSCE.S1", "OSCE.S4"],
  },
  tags: ["regulatory", "documentation", "operational", "audit_readiness", "bilingual", "flagship", "clinical_judgment"],
  bilingualNotes: {
    en: "Keep ICH E6(R3), RBQM, CtQ, SoA, FEV1 as EN technical tokens; expand once in ES if needed.",
    es: "Mantener ICH E6(R3), RBQM, CtQ, SoA, FEV1 como tokens técnicos EN; expandir una vez en ES si hace falta.",
  },
};
