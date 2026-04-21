// src/curriculum-engine/data/modules/m3.ts

import type { Module } from "../../types";

/**
 * Module 3 — ICH-GCP E6(R3): roles, oversight & quality system for CRCs.
 */
export const MODULE_M3: Module = {
  id: "M3",
  slug: "ich-gcp-e6r3-roles-oversight-quality",
  internalName: "mod_03_ich_gcp_e6r3_crc",
  category: "foundations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["R", "O", "C", "Q"],
  title: {
    en: "Module 3 — ICH-GCP E6(R3): Roles, Oversight & Quality System for CRCs",
    es: "Módulo 3 — ICH-GCP E6(R3): roles, supervisión y sistema de calidad para CRC",
  },
  objective: {
    en: "Distinguish individual vs system-level GCP failures; spot weak or paper-only oversight; anticipate FDA/authority inspector concerns; propose structural CAPA linking delegation, safety oversight (sponsor/OSCE.S3), visit and screening execution (M8), logs & ALCOA+ (M4), and IP accountability (M9).",
    es: "Distinguir fallas GCP individuales vs a nivel de sistema; detectar supervisión débil o solo ‘en papel’; anticipar preocupaciones de inspectores FDA/autoridad; proponer CAPA estructural que vincule delegación, supervisión de seguridad (patrocinador/OSCE.S3), ejecución visitas y screening (M8), logs y ALCOA+ (M4) y contabilidad IP (M9).",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "States investigator vs CRC vs sponsor/monitor roles under GCP and why delegation documents tasks but not ultimate investigator responsibility.",
          es: "Enuncia roles investigador vs CRC vs patrocinador/monitor bajo GCP y por qué la delegación documenta tareas pero no la responsabilidad última del investigador.",
        },
        {
          en: "Defines E6(R3) quality-system additions: QbD mindset, RBQM loop (identify CtQ, assess/control, monitor/adapt), and CtQ examples for sites (eligibility, consent, primary endpoints, AE/SAE, ALCOA+).",
          es: "Define adiciones del sistema de calidad E6(R3): mentalidad QbD, ciclo RBQM (identificar CtQ, evaluar/controlar, monitorizar/adaptar) y ejemplos CtQ en sitio (elegibilidad, consentimiento, endpoints primarios, AE/SAE, ALCOA+).",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Operates site quality alignment: SOPs, DOA, training records, logs, and E6(R3) expectations—not binders alone; runs PI–CRC cadence on CtQ topics with outputs to logs and source.",
          es: "Opera alineación de calidad del sitio: SOPs, DOA, registros de capacitación, logs y expectativas E6(R3)—no solo carpetas; ejecuta cadencia PI–CRC sobre temas CtQ con salidas a logs y fuente.",
        },
        {
          en: "Uses monitoring letters and repeat findings as signals of system weakness; documents oversight decisions so monitors/inspectors can reconstruct the quality system.",
          es: "Usa cartas de monitoría y hallazgos repetidos como señales de debilidad sistémica; documenta decisiones de supervisión para que monitores/inspectores reconstruyan el sistema de calidad.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Detects false compliance (perfect DOA/training but staff cannot explain CtQ or AE flow); differentiates ‘PI doesn’t supervise’ from ‘site never designed supervision’.",
          es: "Detecta cumplimiento ficticio (DOA/capacitación perfectos pero personal no explica CtQ o flujo AE); diferencia ‘PI no supervisa’ de ‘sitio nunca diseñó la supervisión’.",
        },
        {
          en: "Proposes structural CAPA: written oversight plan, triggers, meeting templates, mandatory linkage from decisions to M4 logs, M8 visit-window and randomization discipline, sponsor AE timelines (OSCE.S3), M4 ALCOA+ documentation trail, and M9 IP custody—defensible in inspection interviews.",
          es: "Propone CAPA estructural: plan escrito de supervisión, disparadores, plantillas de reunión, vínculo obligatorio desde decisiones a logs M4, disciplina M8 ventanas/randomización, plazos EA patrocinador (OSCE.S3), rastro documental ALCOA+ M4 y custodia IP M9—defendible en entrevistas de inspección.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M3.L1",
      title: { en: "Core concepts — E6(R3) quality system", es: "Conceptos núcleo — sistema de calidad E6(R3)" },
      lessonType: "reading",
      objective: {
        en: "Anchor GCP + QbD/RBQM, roles, individual vs system failure, false compliance, and cross-module dependencies.",
        es: "Anclar GCP + QbD/RBQM, roles, falla individual vs sistema, cumplimiento ficticio y dependencias entre módulos.",
      },
      keyPoints: [
        {
          en: "E6(R3) adds QbD, RBQM, and fit-for-purpose systems—not rigid checklist-only compliance.",
          es: "E6(R3) añade QbD, RBQM y sistemas adecuados al propósito—no solo cumplimiento por lista rígida.",
        },
        {
          en: "Investigator: qualified, resourced, may delegate tasks not responsibility; must supervise GCP. CRC: delegated execution of protocol, consent, AE, documentation, sponsor communication.",
          es: "Investigador: calificado, con recursos, puede delegar tareas no responsabilidad; debe supervisar GCP. CRC: ejecución delegada de protocolo, consentimiento, EA, documentación, comunicación patrocinador.",
        },
        {
          en: "RBQM for CRCs: CtQ = eligibility, IC, primary endpoints, AE/SAE handling, ALCOA+ documentation.",
          es: "RBQM para CRCs: CtQ = elegibilidad, CI, endpoints primarios, manejo AE/SAE, documentación ALCOA+.",
        },
        {
          en: "Individual error: one person skips a step. System failure: no SOP, no cadence, no triggers—inspectors focus here.",
          es: "Error individual: una persona omite un paso. Falla de sistema: sin SOP, sin cadencia, sin disparadores—inspectores se enfocan aquí.",
        },
        {
          en: "False compliance: documents look perfect but staff cannot describe processes or CtQ risks; oversight not real.",
          es: "Cumplimiento ficticio: documentos lucen perfectos pero personal no describe procesos o riesgos CtQ; supervisión no es real.",
        },
        {
          en: "Links: delegation/oversight → DOA & logs (M4); visit/screening execution → M8; expedited AE → sponsor/OSCE.S3; ALCOA+ source culture → M4; IP pharmacy & cold chain → M9.",
          es: "Vínculos: delegación/supervisión → DOA y logs (M4); ejecución visita/screening → M8; EA expedita → patrocinador/OSCE.S3; cultura ALCOA+ en fuente → M4; farmacia IP y cadena de frío → M9.",
        },
      ],
    },
    {
      lessonId: "M3.L2",
      title: { en: "Real-world workflow — site quality system", es: "Flujo real — sistema de calidad del sitio" },
      lessonType: "reading",
      objective: {
        en: "Follow SOP setup, operational oversight cadence, monitor/inspector stress-tests, and CRC as system sensor.",
        es: "Seguir configuración SOP, cadencia operativa de supervisión, pruebas de estrés monitor/inspector y CRC como sensor del sistema.",
      },
      keyPoints: [
        {
          en: "PI + institution: SOPs for delegation, AE management, monitoring follow-up, documentation; CRC aligns processes, DOA, logs, training with SOPs and E6(R3).",
          es: "PI + institución: SOPs para delegación, gestión EA, seguimiento monitoría, documentación; CRC alinea procesos, DOA, logs, capacitación con SOPs y E6(R3).",
        },
        {
          en: "Cadence: regular PI–CRC meetings on new enrolments/eligibility, key AEs/SAEs, primary endpoints, major deviations—feeding DOA updates, Deviation/AE logs, PI decision notes in source.",
          es: "Cadencia: reuniones PI–CRC regulares sobre nuevas inclusiones/elegibilidad, EA/SAE clave, endpoints primarios, desviaciones mayores—alimentando actualizaciones DOA, logs desviación/EA, notas de decisión PI en fuente.",
        },
        {
          en: "Monitors test individual performance and system robustness; repeat findings suggest system design gaps.",
          es: "Monitores prueban desempeño individual y robustez del sistema; hallazgos repetidos sugieren brechas de diseño.",
        },
        {
          en: "Inspectors seek proof the quality system works in practice, not certificates alone.",
          es: "Inspectores buscan prueba de que el sistema de calidad funciona en la práctica, no solo certificados.",
        },
        {
          en: "CRC: operator + sensor—flags process failures, patterns, proposes structural CAPA (checklists, cadence, triggers).",
          es: "CRC: operador + sensor—señala fallas de proceso, patrones, propone CAPA estructural (checklists, cadencia, disparadores).",
        },
      ],
    },
    {
      lessonId: "M3.L3",
      title: { en: "Common findings — GCP inspections & QA", es: "Hallazgos frecuentes — inspecciones GCP y QA" },
      lessonType: "reading",
      objective: {
        en: "Recognize recurring GCP/E6(R3) inspection themes tied to oversight and documentation.",
        es: "Reconocer temas recurrentes de inspección GCP/E6(R3) ligados a supervisión y documentación.",
      },
      keyPoints: [
        {
          en: "Inadequate PI oversight and supervision (ongoing, not bulk signature days).",
          es: "Supervisión del PI inadecuada (continua, no solo días de firma masiva).",
        },
        {
          en: "DOA misaligned with actual tasks performed (false delegation).",
          es: "DOA desalineada con tareas reales ejecutadas (delegación ficticia).",
        },
        {
          en: "Checkbox GCP training without demonstrated competency in interviews.",
          es: "Capacitación GCP de casilla sin competencia demostrada en entrevistas.",
        },
        {
          en: "RBQM/CtQ not operationalized at site—vague plans, no triggers, no trend review of monitoring findings.",
          es: "RBQM/CtQ no operativizado en sitio—planes vagos, sin disparadores, sin revisión de tendencias de hallazgos de monitoría.",
        },
        {
          en: "No traceable record of how quality and safety decisions were made.",
          es: "Sin registro trazable de cómo se tomaron decisiones de calidad y seguridad.",
        },
      ],
    },
    {
      lessonId: "M3.GP1",
      title: { en: "Guided practice — GP-3.1: delegation must match tasks", es: "Práctica guiada — GP-3.1: delegación acorde a tareas" },
      lessonType: "case",
      objective: {
        en: "PI wants untrained medical assistant to enter EDC and call subjects about AEs; DOA lists them only as ‘Clinic Assistant – vitals only’.",
        es: "PI quiere asistente médico sin capacitar para ingresar EDC y llamar sujetos sobre EA; DOA solo los lista como ‘Asistente clínico – solo signos’.",
      },
      keyPoints: [
        {
          en: "E6(R3) + SOP: qualified, trained staff; delegation must document scope.",
          es: "E6(R3) + SOP: personal calificado y capacitado; delegación debe documentar alcance.",
        },
        {
          en: "Separate clinical judgment (AE assessment, eligibility) from mechanical tasks; check GCP + protocol + system training.",
          es: "Separar juicio clínico (valoración EA, elegibilidad) de tareas mecánicas; verificar capacitación GCP + protocolo + sistemas.",
        },
        {
          en: "Decision: block new tasks until trained; PI updates signed DOA with explicit roles; document onboarding checklist.",
          es: "Decisión: bloquear nuevas tareas hasta capacitar; PI actualiza DOA firmado con roles explícitos; documentar checklist de incorporación.",
        },
        {
          en: "Why it matters: patient safety on AE calls; EDC error risk; inadequate delegation = common inspection finding.",
          es: "Por qué importa: seguridad en llamadas EA; riesgo errores EDC; delegación inadecuada = hallazgo frecuente en inspección.",
        },
      ],
    },
    {
      lessonId: "M3.GP2",
      title: {
        en: "Guided practice — GP-3.2: ‘sign everything before the monitor’ (incorrect)",
        es: "Práctica guiada — GP-3.2: ‘firmar todo antes del monitor’ (incorrecto)",
      },
      lessonType: "case",
      objective: {
        en: "PI bulk-signs CRFs day before monitoring; no routine eligibility/AE/deviation review; ‘CRA will flag errors.’",
        es: "PI firma en bloque CRFs el día antes de monitoría; sin revisión rutinaria de elegibilidad/EA/desviaciones; ‘el CRA señalará errores’.",
      },
      keyPoints: [
        {
          en: "GCP expects ongoing PI supervision of CtQ—not episodic signatures delegated to monitors.",
          es: "GCP espera supervisión PI continua de CtQ—no firmas episódicas delegadas en monitores.",
        },
        {
          en: "Repeat monitoring findings + bulk sign-off pattern signals inadequate oversight.",
          es: "Hallazgos repetidos de monitoría + firma masiva señalan supervisión inadecuada.",
        },
        {
          en: "Decision: structured cadence (e.g., weekly 30 min: new enrolments, AEs/SAEs, major PDs); PI oversight note in ISF/source; bulk sign only final verification.",
          es: "Decisión: cadencia estructurada (p. ej., 30 min semanal: nuevas inclusiones, EA/SAE, PD mayores); nota de supervisión PI en ISF/fuente; firma masiva solo verificación final.",
        },
        {
          en: "Why mistakes happen: time pressure, culture of outsourcing oversight to CRA.",
          es: "Por qué ocurre: presión temporal, cultura de externalizar supervisión al CRA.",
        },
      ],
    },
    {
      lessonId: "M3.GP3",
      title: {
        en: "Guided practice — GP-3.3: ambiguous oversight design",
        es: "Práctica guiada — GP-3.3: diseño ambiguo de supervisión",
      },
      lessonType: "case",
      objective: {
        en: "No written plan for PI data-review frequency or topics; meetings ad hoc; GCP/DOA technically complete.",
        es: "Sin plan escrito de frecuencia o temas de revisión de datos por PI; reuniones ad hoc; GCP/DOA técnicamente completos.",
      },
      keyPoints: [
        {
          en: "E6(R3) expects proportionate, risk-based oversight—absence of defined system is system-level failure despite good intent.",
          es: "E6(R3) espera supervisión proporcional basada en riesgo—ausencia de sistema definido es falla sistémica pese a buena intención.",
        },
        {
          en: "Ask: what would you show an inspector proving oversight adequacy? Define triggers (e.g., SAE spike, deviation threshold).",
          es: "Pregunta: ¿qué mostraría a un inspector probando adecuación de supervisión? Definir disparadores (p. ej., pico SAE, umbral desviaciones).",
        },
        {
          en: "Decision: simple signed site oversight plan—fixed monthly + ad hoc; agenda: eligibility, AEs, deviations, endpoints; document in memo/SOP addendum.",
          es: "Decisión: plan simple firmado de supervisión—mensual fijo + ad hoc; agenda: elegibilidad, EA, desviaciones, endpoints; documentar en memo/anexo SOP.",
        },
      ],
    },
    {
      lessonId: "M3.L4",
      title: { en: "Audit / inspection perspective", es: "Perspectiva de auditoría / inspección" },
      lessonType: "reading",
      objective: {
        en: "Anticipate inspector focus: real oversight evidence, DOA vs reality, functional quality system, CAPA redesign not only apologies.",
        es: "Anticipar foco del inspector: evidencia real de supervisión, DOA vs realidad, sistema de calidad funcional, rediseño CAPA no solo disculpas.",
      },
      keyPoints: [
        {
          en: "Inspectors seek: meeting notes, decisions, actions—not just SOP binders.",
          es: "Inspectores buscan: notas de reunión, decisiones, acciones—no solo carpetas SOP.",
        },
        {
          en: "Typical findings: inadequate PI oversight; unqualified delegated staff; ineffective training; quality system deficiencies with repeat issues.",
          es: "Hallazgos típicos: supervisión PI inadecuada; personal delegado no calificado; capacitación ineficaz; deficiencias del sistema de calidad con problemas repetidos.",
        },
        {
          en: "CAPA must redesign oversight and quality system per E6(R3) and institutional SOP—not only retrain one person.",
          es: "CAPA debe rediseñar supervisión y sistema de calidad según E6(R3) y SOP institucional—no solo reentrenar a una persona.",
        },
      ],
    },
    {
      lessonId: "M3.L5",
      title: { en: "Answer framework & fail conditions", es: "Marco de respuesta y condiciones de fallo" },
      lessonType: "recap",
      objective: {
        en: "Consolidate system-level diagnosis, false-compliance exposure, structural CAPA, and M4/M8/M9 integration—logs & ALCOA+, visits/randomization, IP accountability (plus sponsor safety/OSCE.S3 for AE).",
        es: "Consolidar diagnóstico sistémico, exposición de cumplimiento ficticio, CAPA estructural e integración M4/M8/M9—logs y ALCOA+, visitas/randomización, contabilidad IP (más seguridad patrocinador/OSCE.S3 para EA).",
      },
      keyPoints: [
        {
          en: "Strong learners: blame system design gaps; propose written cadence, CtQ/RBQM plan, templates, log/source linkage.",
          es: "Aprendices sólidos: atribuyen brechas al diseño del sistema; proponen cadencia escrita, plan CtQ/RBQM, plantillas, vínculo log/fuente.",
        },
        {
          en: "Fail if: only ‘train PI/CRC more’; accept vague oversight plans at face value; cannot name at least one fix improving M4 (logs/ALCOA+), M8 (visits/randomization), or M9 (IP).",
          es: "Fallo si: solo ‘capacitar más al PI/CRC’; acepta planes vagos de supervisión sin crítica; no nombra al menos un arreglo que mejore M4 (logs/ALCOA+), M8 (visitas/randomización) o M9 (IP).",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M3.E1",
      description: {
        en: "Site has GCP certs, DOA log, generic SOPs—but no defined oversight schedule, no written RBQM plan or CtQ list, no process to review monitoring findings or trends.",
        es: "Sitio tiene certificados GCP, log DOA, SOPs genéricos—pero sin calendario de supervisión definido, sin plan RBQM escrito ni lista CtQ, sin proceso para revisar hallazgos o tendencias de monitoría.",
      },
      risk: {
        en: "System depends on individuals; oversight collapses if CRC leaves; regulators see failure to implement E6(R3) quality principles.",
        es: "Sistema depende de individuos; supervisión colapsa si sale el CRC; reguladores ven incumplimiento de principios de calidad E6(R3).",
      },
      expectedLearnerResponse: {
        en: "Classify as system-level CAPA: oversight plan, CtQ register, monitoring-trend review, accountable owners, documented meetings feeding logs.",
        es: "Clasificar como CAPA sistémica: plan de supervisión, registro CtQ, revisión de tendencias de monitoría, responsables, reuniones documentadas que alimenten logs.",
      },
      relatedDimensions: ["R", "O", "Q"],
    },
    {
      errorId: "M3.E2",
      description: {
        en: "DOA and training logs perfect; mock inspection interviews show CRC cannot explain CtQ; sub-I cannot describe AE reporting; inconsistent answers on who assesses eligibility.",
        es: "DOA y logs de capacitación perfectos; entrevistas simuladas muestran CRC sin explicar CtQ; sub-I no describe reporte EA; respuestas inconsistentes sobre quién valora elegibilidad.",
      },
      risk: {
        en: "Staff may fail under pressure; inspectors rely on interviews—major findings on training effectiveness and oversight.",
        es: "Personal puede fallar bajo presión; inspectores confían en entrevistas—hallazgos mayores en eficacia de capacitación y supervisión.",
      },
      expectedLearnerResponse: {
        en: "Flag false compliance; competency-based training; supervised practice; documented role clarity; interview-ready process maps.",
        es: "Señalar cumplimiento ficticio; capacitación basada en competencia; práctica supervisada; claridad de roles documentada; mapas de proceso listos para entrevista.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M3.E3",
      description: {
        en: "DOA states PI responsible for all SAE review/sign-off; in practice CRC drafts and assesses SAE narratives with PI e-signature auto-applied without substantive review.",
        es: "DOA indica PI responsable de revisión/firma de todas las SAE; en práctica CRC redacta y valora narrativas SAE con e-firma PI auto-aplicada sin revisión sustantiva.",
      },
      risk: {
        en: "Serious events may lack true investigator assessment; causality/seriousness misclassification; DOA vs reality finding.",
        es: "Eventos graves pueden carecer de valoración real del investigador; error en causalidad/gravedad; hallazgo DOA vs realidad.",
      },
      expectedLearnerResponse: {
        en: "Stop auto-workflow; restore documented PI review; update DOA or process to match; QA sample of SAE packets.",
        es: "Detener flujo automático; restaurar revisión PI documentada; actualizar DOA o proceso para que coincida; muestreo QA de paquetes SAE.",
      },
      relatedDimensions: ["R", "C", "Q"],
    },
    {
      errorId: "M3.E4",
      description: {
        en: "PI and CRC discuss AEs informally but AE Logs lag; Deviation Log not updated when oversight finds issues; source lacks PI decisions/rationale.",
        es: "PI y CRC discuten EA informalmente pero logs EA van atrasados; log de desviaciones no se actualiza cuando supervisión halla problemas; fuente sin decisiones/justificación PI.",
      },
      risk: {
        en: "Oversight leaves no audit trail; M4/M8/M9 all appear weak because quality engine is disconnected from documentation (visit/screening records, logs, and IP chain).",
        es: "Supervisión no deja rastro de auditoría; M4/M8/M9 lucen débiles porque motor de calidad está desconectado de la documentación (registros visita/screening, logs y cadena IP).",
      },
      expectedLearnerResponse: {
        en: "Mandate same-day log updates after oversight; template linking meeting minutes to log entries and source notes; QA spot-check.",
        es: "Exigir actualización de logs el mismo día tras supervisión; plantilla que vincule minutas a entradas de log y notas en fuente; control QA puntual.",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M3.E5",
      description: {
        en: "SOP/IRB require PI sign-off on SAEs and major deviations; PI tells CRC to use e-signature and skip personal review—‘sponsor cares about data, not who signs.’",
        es: "SOP/CEI exigen firma PI en SAE y desviaciones mayores; PI dice al CRC usar e-firma sin revisión personal—‘al patrocinador le importan los datos, no quién firma’.",
      },
      risk: {
        en: "Investigator duties bypassed; serious GCP breach if uncovered; patient safety judgments not actually applied.",
        es: "Deberes del investigador eludidos; brecha GCP grave si se descubre; juicios de seguridad no aplicados realmente.",
      },
      expectedLearnerResponse: {
        en: "Refuse; escalate to compliance/QA; cite investigator obligations; document; do not falsify attestations.",
        es: "Rechazar; escalar a cumplimiento/QA; citar obligaciones del investigador; documentar; no falsificar atestaciones.",
      },
      relatedDimensions: ["R", "C"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M3.EX1",
      name: {
        en: "GCP Oversight & Quality System Lab — inspection readiness stress test",
        es: "Laboratorio de supervisión GCP y sistema de calidad — prueba de estrés de inspección",
      },
      scenario: {
        en: "30 minutes before simulated FDA inspection debrief. Inputs: latest monitoring report with repeat AE and consent findings; DOA and training records; institutional investigator-oversight SOP referencing GCP/E6; 2-page ‘quality plan’ that is polished but vague (‘PI reviews data regularly’); two recent SAE cases handled mostly by CRC with minimal PI documentation. Assume inspection mindset—missed issues will be challenged.",
        es: "30 minutos antes de debrief simulado FDA. Insumos: último informe de monitoría con hallazgos repetidos en EA y consentimiento; DOA y registros de capacitación; SOP institucional de responsabilidades del investigador citando GCP/E6; ‘plan de calidad’ de 2 páginas vago pero pulido (‘PI revisa datos regularmente’); dos SAE recientes manejadas sobre todo por CRC con mínima documentación PI. Mentalidad de inspección—lo omitido será cuestionado.",
      },
      inputs: [
        { inputId: "M3.IN1", label: { en: "Monitoring report + follow-up letter", es: "Informe de monitoría + carta de seguimiento" }, inputKind: "pdf" },
        { inputId: "M3.IN2", label: { en: "DOA + training records", es: "DOA + registros de capacitación" }, inputKind: "table" },
        { inputId: "M3.IN3", label: { en: "Institutional oversight SOP", es: "SOP institucional de supervisión" }, inputKind: "pdf" },
        { inputId: "M3.IN4", label: { en: "Site quality plan + SAE case files", es: "Plan de calidad del sitio + expedientes SAE" }, inputKind: "bundle" },
      ],
      learnerTask: {
        en: "List issues: system design (oversight cadence, RBQM, CtQ), individual behavior (PI/CRC boundaries), false compliance. Pick top 3 for an inspector; minor/major/critical + patient/data/compliance. For each, propose system-level CAPA (schedule, CtQ plan, documented PI case review, mandatory linkage to M4 logs, M8 visit/randomization discipline, investigator-level AE decisions via sponsor/OSCE.S3, M4 ALCOA+ discipline, M9 IP custody). Draft FDA defense for one major system gap: honest prior state, specific changes, alignment with E6(R3) and institutional RBQM expectations.",
        es: "Listar problemas: diseño del sistema (cadencia RBQM, CtQ), conducta individual (límites PI/CRC), cumplimiento ficticio. Elegir 3 principales para inspector; menor/mayor/crítico + paciente/datos/cumplimiento. Para cada uno, CAPA a nivel sistema (calendario, plan CtQ, revisión documentada de casos por PI, vínculo obligatorio a logs M4, disciplina M8 visita/randomización, decisiones EA nivel investigador vía patrocinador/OSCE.S3, disciplina ALCOA+ M4, custodia IP M9). Redactar defensa FDA para una brecha sistémica mayor: estado previo honesto, cambios específicos, alineación con E6(R3) y expectativas RBQM institucionales.",
      },
      deliverables: [
        { deliverableId: "M3.D1", label: { en: "Issue register + top-3 matrix", es: "Registro de hallazgos + matriz top-3" }, formatHint: "table" },
        { deliverableId: "M3.D2", label: { en: "System CAPA + M4/M8/M9 map", es: "CAPA sistémica + mapa M4/M8/M9" }, formatHint: "pdf" },
        { deliverableId: "M3.D3", label: { en: "FDA defense statement (one gap)", es: "Declaración de defensa FDA (una brecha)" }, formatHint: "short_memo" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M3.RUB1",
    totalPoints: 100,
    passingPoints: 78,
    criteria: [
      {
        criterionId: "M3.C1",
        description: {
          en: "Separates system-level failures (no oversight design, no RBQM/CtQ) from individual slips; exposes false compliance when documents outpace competency.",
          es: "Separa fallas sistémicas (sin diseño de supervisión, sin RBQM/CtQ) de errores individuales; expone cumplimiento ficticio cuando documentos superan competencia.",
        },
        points: 35,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Frames problems only as ‘need more training’ with no system redesign, or accepts vague quality plan without critique.",
          es: "Enmarca problemas solo como ‘más capacitación’ sin rediseño de sistema, o acepta plan de calidad vago sin crítica.",
        },
      },
      {
        criterionId: "M3.C2",
        description: {
          en: "Inspector-style prioritization: reconstructable oversight, who makes safety decisions, risk-based evidence; top-3 with consistent severity/impact.",
          es: "Priorización estilo inspector: supervisión reconstruible, quién toma decisiones de seguridad, evidencia basada en riesgo; top-3 con severidad/impacto consistentes.",
        },
        points: 25,
        mapsToDimensions: ["O", "C"],
        failCondition: {
          en: "No high-risk issue identified from the packet, or labels inadequate PI oversight on SAEs as minor without justification.",
          es: "No identifica hallazgo de alto riesgo del paquete, o etiqueta supervisión PI inadecuada en SAE como menor sin justificación.",
        },
      },
      {
        criterionId: "M3.C3",
        description: {
          en: "Structural CAPA: written cadence, triggers, competency expectations, meeting templates; explicit cross-module improvements to M4 (DOA/logs, ALCOA+), M8 (screening & visit-window control), sponsor/OSCE.S3 (timely investigator AE review), M9 (IP receipt-to-disposition & excursion governance).",
          es: "CAPA estructural: cadencia escrita, disparadores, expectativas de competencia, plantillas de reunión; mejoras explícitas entre módulos a M4 (DOA/logs, ALCOA+), M8 (control screening y ventanas visita), patrocinador/OSCE.S3 (revisión EA oportuna por investigador), M9 (IP recepción a disposición y gobierno de excursiones).",
        },
        points: 25,
        mapsToDimensions: ["O", "R"],
        failCondition: {
          en: "CAPA is only slide deck or one-off meeting with no SOP/process change or log linkage.",
          es: "CAPA es solo diapositivas o reunión puntual sin cambio de SOP/proceso o vínculo a logs.",
        },
      },
      {
        criterionId: "M3.C4",
        description: {
          en: "FDA defense: honest gap description, implemented system changes, alignment with E6(R3) and institutional risk-based oversight—no concealment or blame-shifting.",
          es: "Defensa FDA: descripción honesta de brecha, cambios de sistema implementados, alineación con E6(R3) y supervisión institucional basada en riesgo—sin ocultamiento ni culpar a terceros.",
        },
        points: 15,
        mapsToDimensions: ["R", "C"],
        failCondition: {
          en: "Advises continuing PI e-signature workaround or hiding SAE handling gaps from inspectors.",
          es: "Aconseja continuar atajo de e-firma PI u ocultar brechas de manejo SAE a inspectores.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "R",
      weight: 0.32,
      aggregationKey: "gcp_e6r3_investigator_delegation_regulatory_duties",
    },
    {
      dimension: "O",
      weight: 0.28,
      aggregationKey: "oversight_cadence_rbqm_site_quality_system",
    },
    {
      dimension: "Q",
      weight: 0.22,
      aggregationKey: "traceable_oversight_logs_alcoa_documentation_integrity",
    },
    {
      dimension: "C",
      weight: 0.18,
      aggregationKey: "crc_boundaries_pi_supervision_safety_decisions",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S2 stresses consent and visit documentation under investigator oversight; OSCE.S3 stresses AE/SAE escalation—both depend on the live quality system this module describes.",
      es: "OSCE.S2 ejercita consentimiento y documentación de visita bajo supervisión del investigador; OSCE.S3 ejercita escalamiento AE/SAE—ambos dependen del sistema de calidad vivo que describe este módulo.",
    },
    stationIds: ["OSCE.S2", "OSCE.S3"],
  },
  tags: ["regulatory", "documentation", "operational", "audit_readiness", "bilingual", "flagship", "safety"],
  bilingualNotes: {
    en: "Keep ICH E6(R3), GCP, RBQM, CtQ, QbD, DOA, FDA, EMA, ALCOA+ as EN technical tokens.",
    es: "Mantener ICH E6(R3), GCP, RBQM, CtQ, QbD, DOA, FDA, EMA, ALCOA+ como tokens técnicos EN.",
  },
};
