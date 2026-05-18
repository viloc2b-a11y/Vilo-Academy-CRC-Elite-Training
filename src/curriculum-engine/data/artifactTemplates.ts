import type { OperationalArtifactTemplate } from "../types";

const subjectTimelineFields = [
  {
    fieldId: "subject_id",
    label: { en: "Subject ID", es: "ID de sujeto" },
    fieldType: "short_text",
    required: true,
  },
  {
    fieldId: "event_datetime",
    label: { en: "Event date/time", es: "Fecha/hora del evento" },
    fieldType: "datetime",
    required: true,
  },
  {
    fieldId: "source_evidence",
    label: { en: "Source evidence", es: "Evidencia fuente" },
    fieldType: "long_text",
    required: true,
    placeholder: {
      en: "Name document, page/field, timestamp, author, or system record.",
      es: "Nombre documento, página/campo, timestamp, autor o registro del sistema.",
    },
  },
] as const;

export const OPERATIONAL_ARTIFACT_TEMPLATES: readonly OperationalArtifactTemplate[] = [
  {
    templateId: "TPL.FEASIBILITY_MEMO",
    artifactId: "ART.FEASIBILITY_MEMO",
    title: { en: "Feasibility and Adequate Resources Memo", es: "Memo de factibilidad y recursos adecuados" },
    ownerRole: "Site director / Lead CRC",
    completionStandard: {
      en: "Decision is defensible only if accrual math, staffing, budget gaps, and GCP risk are all explicitly tied to evidence.",
      es: "La decisión solo es defendible si reclutamiento, personal, brechas presupuestarias y riesgo GCP están atados a evidencia.",
    },
    escalationTriggers: [
      { en: "Sponsor target exceeds documented patient funnel.", es: "La meta del patrocinador excede el embudo documentado de pacientes." },
      { en: "Budget omits workload that creates data-quality or safety risk.", es: "El presupuesto omite carga que crea riesgo de calidad de datos o seguridad." },
      { en: "PI or sponsor requests activation before adequate resources are documented.", es: "PI o patrocinador pide activación antes de documentar recursos adecuados." },
    ],
    sections: [
      {
        sectionId: "decision",
        title: { en: "Decision", es: "Decisión" },
        purpose: { en: "State accept, defer, decline, or renegotiate.", es: "Indicar aceptar, diferir, declinar o renegociar." },
        fields: [
          {
            fieldId: "recommendation",
            label: { en: "Recommendation", es: "Recomendación" },
            fieldType: "select",
            required: true,
            options: [
              { en: "Accept with conditions", es: "Aceptar con condiciones" },
              { en: "Defer activation", es: "Diferir activación" },
              { en: "Renegotiate", es: "Renegociar" },
              { en: "Decline", es: "Declinar" },
            ],
          },
          {
            fieldId: "rationale",
            label: { en: "One-paragraph rationale", es: "Racional en un párrafo" },
            fieldType: "long_text",
            required: true,
          },
        ],
      },
      {
        sectionId: "evidence",
        title: { en: "Evidence", es: "Evidencia" },
        purpose: { en: "Document patient funnel, staffing, and cost assumptions.", es: "Documentar embudo de pacientes, personal y supuestos de costo." },
        fields: [
          {
            fieldId: "eligible_patients_per_year",
            label: { en: "Estimated eligible patients/year", es: "Pacientes elegibles/año estimados" },
            fieldType: "number",
            required: true,
          },
          {
            fieldId: "required_staffing",
            label: { en: "Required staffing or coverage", es: "Personal o cobertura requerida" },
            fieldType: "long_text",
            required: true,
          },
          {
            fieldId: "budget_gaps",
            label: { en: "Budget gaps", es: "Brechas presupuestarias" },
            fieldType: "table",
            required: true,
          },
        ],
      },
      {
        sectionId: "conditions",
        title: { en: "Activation Conditions", es: "Condiciones de activación" },
        purpose: { en: "Name the conditions that must exist before signature or first subject.", es: "Nombrar condiciones antes de firma o primer sujeto." },
        fields: [
          {
            fieldId: "conditions_before_signature",
            label: { en: "Conditions before signature", es: "Condiciones antes de firma" },
            fieldType: "long_text",
            required: true,
          },
          {
            fieldId: "owner_due_dates",
            label: { en: "Owners and due dates", es: "Dueños y fechas límite" },
            fieldType: "table",
            required: true,
          },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Recommendation is not based on revenue alone.", es: "La recomendación no se basa solo en ingresos." },
      { en: "Patient funnel math is explicit.", es: "La matemática del embudo de pacientes es explícita." },
      { en: "Budget gaps are tied to operational or safety risk.", es: "Brechas de presupuesto están ligadas a riesgo operacional o de seguridad." },
    ],
  },
  {
    templateId: "TPL.ICF_VERSION_LOG",
    artifactId: "ART.ICF_VERSION_LOG",
    title: { en: "ICF Version-Control Log", es: "Log de control de versiones ICF" },
    ownerRole: "CRC / Regulatory",
    completionStandard: {
      en: "Every consent event is traceable to the IRB-approved version effective at the time of consent and before any research procedure.",
      es: "Cada evento de consentimiento es trazable a la versión aprobada por IRB vigente al momento del consentimiento y antes de procedimientos de investigación.",
    },
    escalationTriggers: [
      { en: "Procedure occurred before valid consent evidence.", es: "Procedimiento ocurrió antes de evidencia de consentimiento válido." },
      { en: "Signed ICF version differs from current IRB-approved version.", es: "Versión ICF firmada difiere de la versión vigente aprobada por IRB." },
      { en: "Participant-facing language or required addendum is missing.", es: "Falta lenguaje para participante o adenda requerida." },
    ],
    sections: [
      {
        sectionId: "consent_event",
        title: { en: "Consent Event", es: "Evento de consentimiento" },
        purpose: { en: "Capture version, timing, and participant evidence.", es: "Capturar versión, tiempo y evidencia del participante." },
        fields: [
          ...subjectTimelineFields,
          {
            fieldId: "icf_version",
            label: { en: "ICF version signed", es: "Versión ICF firmada" },
            fieldType: "short_text",
            required: true,
          },
          {
            fieldId: "irb_effective_date",
            label: { en: "IRB approval effective date", es: "Fecha efectiva de aprobación IRB" },
            fieldType: "date",
            required: true,
          },
        ],
      },
      {
        sectionId: "decision",
        title: { en: "Stop / Continue Decision", es: "Decisión detener / continuar" },
        purpose: { en: "State whether procedures may continue.", es: "Indicar si procedimientos pueden continuar." },
        fields: [
          {
            fieldId: "decision",
            label: { en: "Decision", es: "Decisión" },
            fieldType: "select",
            required: true,
            options: [
              { en: "Continue", es: "Continuar" },
              { en: "Hold further procedures", es: "Detener procedimientos posteriores" },
              { en: "Escalate to PI/IRB/sponsor", es: "Escalar a PI/IRB/patrocinador" },
            ],
          },
          {
            fieldId: "participant_protection_note",
            label: { en: "Participant-protection note", es: "Nota de protección del participante" },
            fieldType: "long_text",
            required: true,
          },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Consent timing precedes research procedures.", es: "Consentimiento precede procedimientos de investigación." },
      { en: "No retroactive consent language is used.", es: "No se usa lenguaje de consentimiento retroactivo." },
      { en: "PI/IRB/sponsor escalation is named when required.", es: "PI/IRB/patrocinador se nombran cuando aplica." },
    ],
  },
  {
    templateId: "TPL.ELIGIBILITY_PACKET",
    artifactId: "ART.ELIGIBILITY_PACKET",
    title: { en: "Eligibility Traceability Packet", es: "Paquete de trazabilidad de elegibilidad" },
    ownerRole: "CRC / PI",
    completionStandard: {
      en: "Randomization cannot proceed unless every inclusion/exclusion decision is supported by source and PI assessment.",
      es: "La aleatorización no puede proceder salvo que cada criterio inclusión/exclusión tenga soporte fuente y evaluación PI.",
    },
    escalationTriggers: [
      { en: "Lab or imaging value conflicts with eligibility worksheet.", es: "Valor de lab o imagen contradice hoja de elegibilidad." },
      { en: "PI assessment is missing before randomization.", es: "Falta evaluación PI antes de aleatorización." },
      { en: "Subject ID issued before eligibility evidence is complete.", es: "ID de sujeto emitido antes de completar evidencia de elegibilidad." },
    ],
    sections: [
      {
        sectionId: "timeline",
        title: { en: "Minute-by-Minute Timeline", es: "Línea de tiempo minuto a minuto" },
        purpose: { en: "Reconstruct screening decision and randomization exposure.", es: "Reconstruir decisión de screening y exposición a aleatorización." },
        fields: [
          ...subjectTimelineFields,
          {
            fieldId: "eligibility_decision",
            label: { en: "Eligibility decision", es: "Decisión de elegibilidad" },
            fieldType: "select",
            required: true,
            options: [
              { en: "Eligible", es: "Elegible" },
              { en: "Not eligible", es: "No elegible" },
              { en: "Unresolved", es: "Sin resolver" },
            ],
          },
        ],
      },
      {
        sectionId: "criteria_review",
        title: { en: "Criteria Review", es: "Revisión de criterios" },
        purpose: { en: "Document criteria, evidence, and open discrepancies.", es: "Documentar criterios, evidencia y discrepancias abiertas." },
        fields: [
          {
            fieldId: "criteria_table",
            label: { en: "Inclusion/exclusion table", es: "Tabla inclusión/exclusión" },
            fieldType: "table",
            required: true,
          },
          {
            fieldId: "pi_assessment",
            label: { en: "PI assessment", es: "Evaluación PI" },
            fieldType: "long_text",
            required: true,
          },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "No CTMS/pass row is treated as more authoritative than source.", es: "Ninguna fila CTMS/pass pesa más que la fuente." },
      { en: "Randomization hold is explicit when eligibility is unresolved.", es: "Hold de aleatorización es explícito si elegibilidad no está resuelta." },
      { en: "PI decision is documented.", es: "Decisión PI está documentada." },
    ],
  },
  {
    templateId: "TPL.IP_EXCURSION",
    artifactId: "ART.TEMP_EXCURSION",
    title: { en: "IP Temperature Excursion Assessment", es: "Evaluación de excursión de temperatura IP" },
    ownerRole: "Pharmacy / CRC",
    completionStandard: {
      en: "No affected IP is dispensed or dosed until quarantine, sponsor/product-quality disposition, and subject-impact assessment are documented.",
      es: "Ningún IP afectado se dispensa o dosifica hasta documentar cuarentena, disposición del patrocinador/calidad e impacto al sujeto.",
    },
    escalationTriggers: [
      { en: "Excursion affects assigned kit or available replacement stock.", es: "Excursión afecta kit asignado o stock de reemplazo." },
      { en: "Temperature duration or range is unknown.", es: "Duración o rango de temperatura desconocidos." },
      { en: "Dose visit is same day or already in progress.", es: "Visita de dosis es el mismo día o ya está en progreso." },
    ],
    sections: [
      {
        sectionId: "excursion_facts",
        title: { en: "Excursion Facts", es: "Hechos de excursión" },
        purpose: { en: "Capture objective temperature and inventory facts.", es: "Capturar hechos objetivos de temperatura e inventario." },
        fields: [
          {
            fieldId: "kit_numbers",
            label: { en: "Affected kit/lot numbers", es: "Kits/lotes afectados" },
            fieldType: "long_text",
            required: true,
          },
          {
            fieldId: "temperature_range",
            label: { en: "Temperature range", es: "Rango de temperatura" },
            fieldType: "short_text",
            required: true,
          },
          {
            fieldId: "duration",
            label: { en: "Duration", es: "Duración" },
            fieldType: "short_text",
            required: true,
          },
        ],
      },
      {
        sectionId: "disposition",
        title: { en: "Disposition and Dosing Decision", es: "Disposición y decisión de dosificación" },
        purpose: { en: "Document quarantine, sponsor response, and subject impact.", es: "Documentar cuarentena, respuesta del patrocinador e impacto al sujeto." },
        fields: [
          {
            fieldId: "quarantine_status",
            label: { en: "Quarantine status", es: "Estado de cuarentena" },
            fieldType: "select",
            required: true,
            options: [
              { en: "Quarantined", es: "En cuarentena" },
              { en: "Released by sponsor", es: "Liberado por patrocinador" },
              { en: "Destroyed/returned", es: "Destruido/devuelto" },
            ],
          },
          {
            fieldId: "dosing_decision",
            label: { en: "Dosing decision", es: "Decisión de dosificación" },
            fieldType: "select",
            required: true,
            options: [
              { en: "Hold dose", es: "Detener dosis" },
              { en: "Use unaffected replacement", es: "Usar reemplazo no afectado" },
              { en: "Proceed with documented release", es: "Proceder con liberación documentada" },
            ],
          },
          {
            fieldId: "sponsor_disposition",
            label: { en: "Sponsor/product-quality disposition", es: "Disposición patrocinador/calidad" },
            fieldType: "long_text",
            required: true,
          },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Affected IP is not used without documented release.", es: "IP afectado no se usa sin liberación documentada." },
      { en: "Subject impact is assessed.", es: "Impacto al sujeto está evaluado." },
      { en: "Accountability record is updated.", es: "Registro de contabilidad está actualizado." },
    ],
  },
  {
    templateId: "TPL.AE_SAE_LOG",
    artifactId: "ART.AE_LOG",
    title: { en: "AE / SAE Assessment Log", es: "Log de evaluación AE / SAE" },
    ownerRole: "CRC / PI",
    completionStandard: {
      en: "All symptoms in source are captured, classified, followed, and escalated with an awareness timeline that can survive audit.",
      es: "Todos los síntomas en fuente son capturados, clasificados, seguidos y escalados con línea de conciencia defendible en auditoría.",
    },
    escalationTriggers: [
      { en: "Hospitalization, life-threatening event, death, disability, congenital anomaly, or important medical event may apply.", es: "Puede aplicar hospitalización, amenaza de vida, muerte, discapacidad, anomalía congénita o evento médico importante." },
      { en: "Source mentions symptom absent from EDC/AE log.", es: "Fuente menciona síntoma ausente de EDC/log AE." },
      { en: "Sponsor reporting clock may have started.", es: "Reloj de reporte al patrocinador pudo haber iniciado." },
    ],
    sections: [
      {
        sectionId: "event_capture",
        title: { en: "Event Capture", es: "Captura del evento" },
        purpose: { en: "Capture what happened and where it appears in source.", es: "Capturar qué ocurrió y dónde aparece en fuente." },
        fields: [
          ...subjectTimelineFields,
          {
            fieldId: "event_term",
            label: { en: "AE/SAE term", es: "Término AE/SAE" },
            fieldType: "short_text",
            required: true,
          },
          {
            fieldId: "seriousness",
            label: { en: "Seriousness assessment", es: "Evaluación de seriedad" },
            fieldType: "select",
            required: true,
            options: [
              { en: "Non-serious AE", es: "AE no serio" },
              { en: "Potential SAE", es: "SAE potencial" },
              { en: "Confirmed SAE", es: "SAE confirmado" },
              { en: "Unresolved", es: "Sin resolver" },
            ],
          },
        ],
      },
      {
        sectionId: "awareness",
        title: { en: "Awareness Timeline", es: "Línea de conciencia" },
        purpose: { en: "Show who knew what and when.", es: "Mostrar quién sabía qué y cuándo." },
        fields: [
          {
            fieldId: "site_awareness",
            label: { en: "Site awareness timestamp", es: "Timestamp conciencia del sitio" },
            fieldType: "datetime",
            required: true,
          },
          {
            fieldId: "pi_awareness",
            label: { en: "PI awareness timestamp", es: "Timestamp conciencia PI" },
            fieldType: "datetime",
            required: true,
          },
          {
            fieldId: "sponsor_notification",
            label: { en: "Sponsor notification timestamp", es: "Timestamp notificación patrocinador" },
            fieldType: "datetime",
            required: true,
          },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Source and AE log agree.", es: "Fuente y log AE coinciden." },
      { en: "Seriousness is not minimized to avoid workload.", es: "Seriedad no se minimiza para evitar carga." },
      { en: "Follow-up plan is documented.", es: "Plan de seguimiento está documentado." },
    ],
  },
  {
    templateId: "TPL.MONITOR_FACT_SHEET",
    artifactId: "ART.MONITOR_FACT_SHEET",
    title: { en: "Monitor-Facing Fact Sheet", es: "Hoja de hechos para monitor" },
    ownerRole: "Lead CRC",
    completionStandard: {
      en: "The monitor can see corrected facts, pending items, blocked items, and escalations without unsupported sponsor or CRA approval claims.",
      es: "El monitor puede ver hechos corregidos, pendientes, bloqueados y escalados sin afirmaciones no soportadas de aprobación CRA/patrocinador.",
    },
    escalationTriggers: [
      { en: "Recurring query pattern or deviation trend.", es: "Patrón recurrente de queries o desviaciones." },
      { en: "Training/delegation gap affects study tasks.", es: "Brecha de entrenamiento/delegación afecta tareas del estudio." },
      { en: "Any item could become major/critical finding.", es: "Cualquier ítem podría volverse hallazgo mayor/crítico." },
    ],
    sections: [
      {
        sectionId: "status_table",
        title: { en: "Status Table", es: "Tabla de estado" },
        purpose: { en: "Sort items by corrected, pending, blocked, and escalated.", es: "Ordenar ítems por corregidos, pendientes, bloqueados y escalados." },
        fields: [
          {
            fieldId: "status_rows",
            label: { en: "Status rows", es: "Filas de estado" },
            fieldType: "table",
            required: true,
          },
        ],
      },
      {
        sectionId: "monitor_script",
        title: { en: "Two-Minute Monitor Walkthrough", es: "Recorrido de dos minutos para monitor" },
        purpose: { en: "Prepare concise, factual verbal defense.", es: "Preparar defensa verbal concisa y factual." },
        fields: [
          {
            fieldId: "walkthrough_script",
            label: { en: "Walkthrough script", es: "Guion de recorrido" },
            fieldType: "long_text",
            required: true,
          },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "No fabricated approvals.", es: "Sin aprobaciones inventadas." },
      { en: "Open risks are visible.", es: "Riesgos abiertos son visibles." },
      { en: "Each claim ties to an artifact.", es: "Cada afirmación se ata a un artefacto." },
    ],
  },
  {
    templateId: "TPL.CAPA_PLAN",
    artifactId: "ART.CAPA_PLAN",
    title: { en: "Systemic CAPA Plan", es: "Plan CAPA sistémico" },
    ownerRole: "QA / Lead CRC",
    completionStandard: {
      en: "CAPA addresses root system weakness with containment, corrective action, preventive control, owner, due date, and effectiveness check.",
      es: "CAPA aborda debilidad raíz del sistema con contención, acción correctiva, control preventivo, dueño, fecha y verificación de efectividad.",
    },
    escalationTriggers: [
      { en: "Same error occurs across multiple subjects or visits.", es: "Mismo error ocurre en múltiples sujetos o visitas." },
      { en: "Issue affects participant safety, primary endpoint, eligibility, or data integrity.", es: "Ítem afecta seguridad, endpoint primario, elegibilidad o integridad de datos." },
      { en: "One-off retraining would not prevent recurrence.", es: "Reentrenamiento aislado no previene recurrencia." },
    ],
    sections: [
      {
        sectionId: "root_cause",
        title: { en: "Root Cause", es: "Causa raíz" },
        purpose: { en: "Name the system failure, not only the individual error.", es: "Nombrar falla del sistema, no solo error individual." },
        fields: [
          {
            fieldId: "problem_statement",
            label: { en: "Problem statement", es: "Declaración del problema" },
            fieldType: "long_text",
            required: true,
          },
          {
            fieldId: "root_cause",
            label: { en: "Root cause", es: "Causa raíz" },
            fieldType: "long_text",
            required: true,
          },
        ],
      },
      {
        sectionId: "actions",
        title: { en: "Actions", es: "Acciones" },
        purpose: { en: "Separate containment, correction, prevention, and effectiveness.", es: "Separar contención, corrección, prevención y efectividad." },
        fields: [
          {
            fieldId: "action_table",
            label: { en: "CAPA action table", es: "Tabla de acciones CAPA" },
            fieldType: "table",
            required: true,
          },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "CAPA is not only retraining.", es: "CAPA no es solo reentrenamiento." },
      { en: "Owner and due date exist for every action.", es: "Cada acción tiene dueño y fecha." },
      { en: "Effectiveness check is measurable.", es: "Verificación de efectividad es medible." },
    ],
  },
  {
    templateId: "TPL.SPONSOR_ESCALATION",
    artifactId: "ART.SPONSOR_ESCALATION",
    title: { en: "Sponsor Escalation Package", es: "Paquete de escalamiento al patrocinador" },
    ownerRole: "Site director / Lead CRC",
    completionStandard: {
      en: "Escalation names decision rights, 24h/72h actions, artifacts attached, and non-negotiable integrity or participant-protection boundaries.",
      es: "El escalamiento nombra derechos de decisión, acciones 24h/72h, artefactos adjuntos y límites no negociables de integridad o protección.",
    },
    escalationTriggers: [
      { en: "Sponsor requests unsupported close, backdate, or rewrite.", es: "Patrocinador pide cierre sin soporte, retrofechar o reescribir." },
      { en: "Payment or enrollment pressure conflicts with GCP.", es: "Presión de pago o inclusión choca con GCP." },
      { en: "Site resources cannot support sponsor target.", es: "Recursos del sitio no soportan meta del patrocinador." },
    ],
    sections: [
      {
        sectionId: "summary",
        title: { en: "Executive Summary", es: "Resumen ejecutivo" },
        purpose: { en: "State issue, decision needed, and site position.", es: "Indicar asunto, decisión requerida y posición del sitio." },
        fields: [
          {
            fieldId: "issue_summary",
            label: { en: "Issue summary", es: "Resumen del asunto" },
            fieldType: "long_text",
            required: true,
          },
          {
            fieldId: "decision_needed",
            label: { en: "Decision needed", es: "Decisión requerida" },
            fieldType: "long_text",
            required: true,
          },
        ],
      },
      {
        sectionId: "plan",
        title: { en: "24h / 72h Plan", es: "Plan 24h / 72h" },
        purpose: { en: "Document immediate and near-term escalation actions.", es: "Documentar acciones inmediatas y de corto plazo." },
        fields: [
          {
            fieldId: "twenty_four_hour_actions",
            label: { en: "24-hour actions", es: "Acciones 24 horas" },
            fieldType: "table",
            required: true,
          },
          {
            fieldId: "seventy_two_hour_actions",
            label: { en: "72-hour actions", es: "Acciones 72 horas" },
            fieldType: "table",
            required: true,
          },
          {
            fieldId: "integrity_boundary",
            label: { en: "Integrity boundary / refused shortcut", es: "Límite de integridad / atajo rechazado" },
            fieldType: "long_text",
            required: true,
          },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Integrity trap refusal is explicit.", es: "Rechazo de atajo de integridad es explícito." },
      { en: "Artifacts attached are named.", es: "Artefactos adjuntos están nombrados." },
      { en: "Decision rights are clear.", es: "Derechos de decisión son claros." },
    ],
  },
  {
    templateId: "TPL.INSPECTION_DEFENSE",
    artifactId: "ART.INSPECTION_DEFENSE",
    title: { en: "Integrated Inspection Defense Package", es: "Paquete integrado de defensa de inspección" },
    ownerRole: "Lead CRC / Site director",
    completionStandard: {
      en: "Package gives FDA/sponsor/QA one consistent story: priority order, evidence map, open risks, containment, escalation, and no invented facts.",
      es: "El paquete da a FDA/patrocinador/QA una historia consistente: prioridades, mapa de evidencia, riesgos abiertos, contención, escalamiento y cero hechos inventados.",
    },
    escalationTriggers: [
      { en: "Multiple artifact streams contradict each other.", es: "Múltiples flujos de artefactos se contradicen." },
      { en: "Inspection, CRO, and sponsor questions arrive concurrently.", es: "Preguntas de inspección, CRO y patrocinador llegan a la vez." },
      { en: "Shortcut would hide contradiction or rewrite source.", es: "Un atajo ocultaría contradicción o reescribiría fuente." },
    ],
    sections: [
      {
        sectionId: "priority_order",
        title: { en: "Priority Order", es: "Orden de prioridad" },
        purpose: { en: "Rank risks by patient, data, compliance, and revenue impact.", es: "Priorizar riesgos por impacto paciente, datos, cumplimiento e ingresos." },
        fields: [
          {
            fieldId: "priority_table",
            label: { en: "Priority table 1-5", es: "Tabla de prioridades 1-5" },
            fieldType: "table",
            required: true,
          },
        ],
      },
      {
        sectionId: "linkages",
        title: { en: "Cross-Station Linkage Map", es: "Mapa de vínculos multi-estación" },
        purpose: { en: "Connect OSCE stations/artifacts to module anchors and constraints.", es: "Conectar estaciones/artefactos OSCE con módulos ancla y restricciones." },
        fields: [
          {
            fieldId: "linkage_map",
            label: { en: "At least three linkages", es: "Al menos tres vínculos" },
            fieldType: "table",
            required: true,
          },
        ],
      },
      {
        sectionId: "defense_statement",
        title: { en: "Integrated Defense Statement", es: "Declaración de defensa integrada" },
        purpose: { en: "Produce one consistent narrative usable for FDA and sponsor.", es: "Producir narrativa consistente usable para FDA y patrocinador." },
        fields: [
          {
            fieldId: "defense_statement",
            label: { en: "6-8 sentence statement", es: "Declaración de 6-8 oraciones" },
            fieldType: "long_text",
            required: true,
          },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "At least three qualified linkages are present.", es: "Hay al menos tres vínculos calificados." },
      { en: "No contradiction is hidden.", es: "No se oculta contradicción." },
      { en: "ACRP Certification and ASHP Competency references are substantively tied to facts when required.", es: "Referencias ACRP Certification y ASHP Competency se atan a hechos cuando aplica." },
    ],
  },
  {
    templateId: "TPL.DOA",
    artifactId: "ART.DOA",
    title: { en: "Delegation of Authority Gap Review", es: "Revisión de brechas DOA" },
    ownerRole: "PI / Lead CRC",
    completionStandard: {
      en: "Every delegated study task is matched to a qualified person, current training, PI authorization, and a clear escalation path for gaps.",
      es: "Cada tarea delegada se asigna a persona calificada, entrenamiento vigente, autorización PI y ruta clara de escalamiento ante brechas.",
    },
    escalationTriggers: [
      { en: "Staff performed task before delegation was signed.", es: "Personal ejecutó tarea antes de firma de delegación." },
      { en: "Delegation exists but training is expired or missing.", es: "Existe delegación pero entrenamiento está vencido o falta." },
      { en: "PI oversight decision is needed before subject-facing work.", es: "Se requiere decisión PI antes de trabajo frente al sujeto." },
    ],
    sections: [
      {
        sectionId: "gap_table",
        title: { en: "Delegation Gap Table", es: "Tabla de brechas de delegación" },
        purpose: { en: "Map task, staff, training, authorization, and affected subject risk.", es: "Mapear tarea, personal, entrenamiento, autorización y riesgo por sujeto." },
        fields: [
          { fieldId: "delegation_rows", label: { en: "Delegation rows", es: "Filas de delegación" }, fieldType: "table", required: true },
          { fieldId: "pi_decision_needed", label: { en: "PI decision needed", es: "Decisión PI requerida" }, fieldType: "long_text", required: true },
        ],
      },
      {
        sectionId: "containment",
        title: { en: "Containment", es: "Contención" },
        purpose: { en: "State what work stops until delegation is repaired.", es: "Indicar qué trabajo se detiene hasta reparar delegación." },
        fields: [
          { fieldId: "held_tasks", label: { en: "Held tasks", es: "Tareas detenidas" }, fieldType: "long_text", required: true },
          { fieldId: "owner_due_date", label: { en: "Owner and due date", es: "Dueño y fecha límite" }, fieldType: "short_text", required: true },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Every gap has an owner.", es: "Cada brecha tiene dueño." },
      { en: "Participant-facing task holds are explicit.", es: "Holds de tareas frente al participante son explícitos." },
      { en: "PI oversight is documented.", es: "Supervisión PI está documentada." },
    ],
  },
  {
    templateId: "TPL.TRAINING_MATRIX",
    artifactId: "ART.TRAINING_MATRIX",
    title: { en: "Training Matrix Currency Review", es: "Revisión de vigencia de matriz de entrenamiento" },
    ownerRole: "Lead CRC",
    completionStandard: {
      en: "Training status is traceable to role, protocol version, delegated tasks, and any work performed while training was missing or expired.",
      es: "La vigencia de entrenamiento es trazable a rol, versión de protocolo, tareas delegadas y trabajo ejecutado con entrenamiento ausente o vencido.",
    },
    escalationTriggers: [
      { en: "Training expired before study task occurred.", es: "Entrenamiento venció antes de ejecutar tarea." },
      { en: "Protocol amendment training is missing.", es: "Falta entrenamiento de enmienda de protocolo." },
      { en: "Matrix in TMF differs from CTMS record.", es: "Matriz en TMF difiere del registro CTMS." },
    ],
    sections: [
      {
        sectionId: "currency",
        title: { en: "Training Currency", es: "Vigencia de entrenamiento" },
        purpose: { en: "Identify expired, missing, stale, or mismatched training.", es: "Identificar entrenamiento vencido, faltante, desactualizado o discordante." },
        fields: [
          { fieldId: "training_table", label: { en: "Training status table", es: "Tabla de estado de entrenamiento" }, fieldType: "table", required: true },
          { fieldId: "affected_tasks", label: { en: "Affected delegated tasks", es: "Tareas delegadas afectadas" }, fieldType: "long_text", required: true },
        ],
      },
      {
        sectionId: "repair",
        title: { en: "Repair Plan", es: "Plan de reparación" },
        purpose: { en: "Name immediate retraining, documentation correction, and task hold.", es: "Nombrar reentrenamiento inmediato, corrección documental y task hold." },
        fields: [
          { fieldId: "repair_actions", label: { en: "Repair actions", es: "Acciones de reparación" }, fieldType: "table", required: true },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Matrix source is named.", es: "Fuente de matriz está nombrada." },
      { en: "Affected tasks are connected to delegation.", es: "Tareas afectadas se conectan a delegación." },
      { en: "Repair includes prevention of recurrence.", es: "Reparación incluye prevención de recurrencia." },
    ],
  },
  {
    templateId: "TPL.SCREENING_LOG",
    artifactId: "ART.SCREENING_LOG",
    title: { en: "Screening and Enrollment Log Review", es: "Revisión de log de screening e inclusión" },
    ownerRole: "CRC",
    completionStandard: {
      en: "Screening, screen-fail, enrollment, and diversity funnel entries match source evidence without inflating conversion metrics.",
      es: "Screening, screen-fail, inclusión y embudo de diversidad coinciden con fuente sin inflar métricas de conversión.",
    },
    escalationTriggers: [
      { en: "Screen-fail reason is vague or unsupported.", es: "Razón de screen-fail es vaga o sin soporte." },
      { en: "Enrollment status conflicts with eligibility evidence.", es: "Estado de inclusión contradice evidencia de elegibilidad." },
      { en: "Sponsor funnel report omits documented failures.", es: "Reporte de embudo al patrocinador omite fallas documentadas." },
    ],
    sections: [
      {
        sectionId: "funnel",
        title: { en: "Funnel Reconciliation", es: "Reconciliación de embudo" },
        purpose: { en: "Compare pre-screen, screen, fail, enroll, and randomization states.", es: "Comparar pre-screen, screen, fallo, inclusión y aleatorización." },
        fields: [
          { fieldId: "funnel_table", label: { en: "Funnel table", es: "Tabla de embudo" }, fieldType: "table", required: true },
          { fieldId: "source_support", label: { en: "Source support summary", es: "Resumen de soporte fuente" }, fieldType: "long_text", required: true },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Every screen-fail has source support.", es: "Cada screen-fail tiene soporte fuente." },
      { en: "Diversity metrics are not overstated.", es: "Métricas de diversidad no se exageran." },
      { en: "Enrollment status matches eligibility.", es: "Estado de inclusión coincide con elegibilidad." },
    ],
  },
  {
    templateId: "TPL.SOURCE_NOTE",
    artifactId: "ART.SOURCE_NOTE",
    title: { en: "Source Note ALCOA+ Repair", es: "Reparación ALCOA+ de nota fuente" },
    ownerRole: "CRC / Provider",
    completionStandard: {
      en: "Corrections preserve original source truth, identify late entries or addenda, and avoid unsupported clinical facts.",
      es: "Correcciones preservan verdad de fuente, identifican entradas tardías/adendas y evitan hechos clínicos sin soporte.",
    },
    escalationTriggers: [
      { en: "Audit trail conflicts with note timestamp.", es: "Audit trail contradice timestamp de nota." },
      { en: "Correction changes clinical meaning.", es: "Corrección cambia significado clínico." },
      { en: "Query tempts invented assessment or symptom narrative.", es: "Query tienta inventar evaluación o narrativa de síntomas." },
    ],
    sections: [
      {
        sectionId: "defect",
        title: { en: "Source Defect", es: "Defecto de fuente" },
        purpose: { en: "Describe what is wrong and how it was detected.", es: "Describir qué está mal y cómo se detectó." },
        fields: [
          ...subjectTimelineFields,
          { fieldId: "defect_description", label: { en: "Defect description", es: "Descripción del defecto" }, fieldType: "long_text", required: true },
        ],
      },
      {
        sectionId: "repair",
        title: { en: "ALCOA+ Repair", es: "Reparación ALCOA+" },
        purpose: { en: "Draft addendum or correction language.", es: "Redactar lenguaje de adenda o corrección." },
        fields: [
          { fieldId: "repair_text", label: { en: "Repair text", es: "Texto de reparación" }, fieldType: "long_text", required: true },
          { fieldId: "audit_trail_note", label: { en: "Audit trail note", es: "Nota de audit trail" }, fieldType: "long_text", required: true },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "No original fact is hidden.", es: "No se oculta hecho original." },
      { en: "Late entry/addendum status is clear.", es: "Estado de entrada tardía/adenda está claro." },
      { en: "No unsupported clinical fact is added.", es: "No se añade hecho clínico sin soporte." },
    ],
  },
  {
    templateId: "TPL.IP_ACCOUNTABILITY",
    artifactId: "ART.IP_ACCOUNTABILITY",
    title: { en: "IP Accountability Reconciliation", es: "Reconciliación de contabilidad IP" },
    ownerRole: "Pharmacy / CRC",
    completionStandard: {
      en: "Dispense, return, quarantine, destruction, and subject dosing records reconcile by kit, quantity, date, and responsible role.",
      es: "Dispensación, retorno, cuarentena, destrucción y dosis por sujeto reconcilian por kit, cantidad, fecha y rol responsable.",
    },
    escalationTriggers: [
      { en: "Quantity mismatch or missing kit.", es: "Diferencia de cantidad o kit faltante." },
      { en: "Dispense record conflicts with subject visit record.", es: "Registro de dispensación contradice visita del sujeto." },
      { en: "Quarantined IP appears available for dosing.", es: "IP en cuarentena aparece disponible para dosificación." },
    ],
    sections: [
      {
        sectionId: "reconciliation",
        title: { en: "IP Reconciliation", es: "Reconciliación IP" },
        purpose: { en: "Reconcile all movement and disposition of IP.", es: "Reconciliar todo movimiento y disposición de IP." },
        fields: [
          { fieldId: "ip_table", label: { en: "IP accountability table", es: "Tabla de contabilidad IP" }, fieldType: "table", required: true },
          { fieldId: "variance_explanation", label: { en: "Variance explanation", es: "Explicación de variancia" }, fieldType: "long_text", required: true },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Kit-level traceability is complete.", es: "Trazabilidad por kit está completa." },
      { en: "Quarantine/disposition is reflected.", es: "Cuarentena/disposición está reflejada." },
      { en: "Subject dosing record matches accountability.", es: "Registro de dosificación coincide con contabilidad." },
    ],
  },
  {
    templateId: "TPL.EDC_QUERY_THREAD",
    artifactId: "ART.EDC_QUERY_THREAD",
    title: { en: "EDC Query Response Defense", es: "Defensa de respuesta a query EDC" },
    ownerRole: "CRC / Data manager",
    completionStandard: {
      en: "Query response is limited to supported source facts, preserves audit trail, and names unresolved data-integrity risk.",
      es: "Respuesta a query se limita a hechos soportados, preserva audit trail y nombra riesgo de integridad no resuelto.",
    },
    escalationTriggers: [
      { en: "Query pressure requests unsupported close.", es: "Presión de query pide cierre sin soporte." },
      { en: "Source and EDC conflict.", es: "Fuente y EDC contradicen." },
      { en: "Recurring query type suggests systemic CAPA.", es: "Tipo recurrente de query sugiere CAPA sistémico." },
    ],
    sections: [
      {
        sectionId: "query_facts",
        title: { en: "Query Facts", es: "Hechos de query" },
        purpose: { en: "Capture query request, source basis, and response boundary.", es: "Capturar solicitud, base fuente y límite de respuesta." },
        fields: [
          { fieldId: "query_text", label: { en: "Original query text", es: "Texto original de query" }, fieldType: "long_text", required: true },
          { fieldId: "source_basis", label: { en: "Source basis", es: "Base fuente" }, fieldType: "long_text", required: true },
          { fieldId: "response_text", label: { en: "Response text", es: "Texto de respuesta" }, fieldType: "long_text", required: true },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Response does not exceed source.", es: "Respuesta no excede fuente." },
      { en: "Audit trail remains visible.", es: "Audit trail sigue visible." },
      { en: "Systemic patterns are escalated.", es: "Patrones sistémicos son escalados." },
    ],
  },
  {
    templateId: "TPL.SAE_AWARENESS_EMAIL",
    artifactId: "ART.SAE_AWARENESS_EMAIL",
    title: { en: "Sponsor SAE Awareness Email", es: "Correo de conciencia SAE al patrocinador" },
    ownerRole: "CRC / PI",
    completionStandard: {
      en: "Email states what is known, what is unresolved, awareness timestamps, PI involvement, and next follow-up without minimizing seriousness.",
      es: "Correo indica lo conocido, no resuelto, timestamps de conciencia, participación PI y seguimiento sin minimizar seriedad.",
    },
    escalationTriggers: [
      { en: "Hospitalization status is unclear.", es: "Estado de hospitalización no está claro." },
      { en: "Sponsor reporting window may be running.", es: "Ventana de reporte al patrocinador puede estar corriendo." },
      { en: "PI has not assessed seriousness/causality.", es: "PI no ha evaluado seriedad/causalidad." },
    ],
    sections: [
      {
        sectionId: "email",
        title: { en: "Awareness Email", es: "Correo de conciencia" },
        purpose: { en: "Draft sponsor-facing notification.", es: "Redactar notificación al patrocinador." },
        fields: [
          { fieldId: "subject_line", label: { en: "Subject line", es: "Asunto" }, fieldType: "short_text", required: true },
          { fieldId: "email_body", label: { en: "Email body", es: "Cuerpo del correo" }, fieldType: "long_text", required: true },
          { fieldId: "open_questions", label: { en: "Open questions", es: "Preguntas abiertas" }, fieldType: "long_text", required: true },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Awareness timestamps are included.", es: "Timestamps de conciencia incluidos." },
      { en: "PI role is clear.", es: "Rol PI está claro." },
      { en: "Uncertainty is disclosed, not hidden.", es: "Incertidumbre se revela, no se oculta." },
    ],
  },
  {
    templateId: "TPL.PI_ESCALATION",
    artifactId: "ART.PI_ESCALATION",
    title: { en: "PI Escalation Brief", es: "Brief de escalamiento al PI" },
    ownerRole: "CRC",
    completionStandard: {
      en: "Brief gives the PI the decision needed, evidence attached, risk framing, and deadline without substituting coordinator judgment for investigator judgment.",
      es: "Brief da al PI decisión requerida, evidencia adjunta, marco de riesgo y fecha límite sin sustituir juicio del investigador.",
    },
    escalationTriggers: [
      { en: "Subject safety or eligibility requires investigator judgment.", es: "Seguridad o elegibilidad requiere juicio del investigador." },
      { en: "Protocol deviation may be major/critical.", es: "Desviación de protocolo puede ser mayor/crítica." },
      { en: "Sponsor/CRA asks for unsupported action.", es: "Sponsor/CRA pide acción sin soporte." },
    ],
    sections: [
      {
        sectionId: "brief",
        title: { en: "PI Brief", es: "Brief PI" },
        purpose: { en: "Summarize decision needed and evidence.", es: "Resumir decisión requerida y evidencia." },
        fields: [
          { fieldId: "decision_needed", label: { en: "Decision needed", es: "Decisión requerida" }, fieldType: "long_text", required: true },
          { fieldId: "evidence_attached", label: { en: "Evidence attached", es: "Evidencia adjunta" }, fieldType: "table", required: true },
          { fieldId: "deadline", label: { en: "Decision deadline", es: "Fecha límite de decisión" }, fieldType: "datetime", required: true },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "PI decision is not pre-decided by CRC.", es: "Decisión PI no está predeterminada por CRC." },
      { en: "Evidence attached is specific.", es: "Evidencia adjunta es específica." },
      { en: "Risk framing includes patient/data/compliance impact.", es: "Marco de riesgo incluye paciente/datos/cumplimiento." },
    ],
  },
  {
    templateId: "TPL.OSCE_SCORE_EXPORT",
    artifactId: "ART.OSCE_SCORE_EXPORT",
    title: { en: "OSCE Score Export and Debrief", es: "Export de puntaje OSCE y debrief" },
    ownerRole: "Evaluator",
    completionStandard: {
      en: "Score export captures station scores, critical triggers, remediation needs, and learner self-debrief tied to professional standards.",
      es: "Export captura puntajes por estación, disparadores críticos, remediación y auto-debrief atado a estándares profesionales.",
    },
    escalationTriggers: [
      { en: "Any station critical fail is triggered.", es: "Se activa fallo crítico en cualquier estación." },
      { en: "Learner passes average while missing seeded defect.", es: "Alumno aprueba promedio omitiendo defecto sembrado." },
      { en: "Self-debrief omits remediation for open risk.", es: "Auto-debrief omite remediación de riesgo abierto." },
    ],
    sections: [
      {
        sectionId: "scores",
        title: { en: "Station Scores", es: "Puntajes por estación" },
        purpose: { en: "Capture structured station result export.", es: "Capturar export estructurado de estaciones." },
        fields: [
          { fieldId: "score_json", label: { en: "Score JSON", es: "JSON de puntajes" }, fieldType: "long_text", required: true },
          { fieldId: "critical_triggers", label: { en: "Critical triggers", es: "Disparadores críticos" }, fieldType: "table", required: true },
        ],
      },
      {
        sectionId: "debrief",
        title: { en: "Self-Debrief", es: "Auto-debrief" },
        purpose: { en: "Reflect on judgment, protection, and documentation discipline.", es: "Reflexionar sobre juicio, protección y disciplina documental." },
        fields: [
          { fieldId: "self_debrief", label: { en: "Self-debrief paragraph", es: "Párrafo de auto-debrief" }, fieldType: "long_text", required: true },
        ],
      },
    ],
    reviewerChecklist: [
      { en: "Critical triggers are not averaged away.", es: "Disparadores críticos no se diluyen por promedio." },
      { en: "Remediation needs are named.", es: "Necesidades de remediación están nombradas." },
      { en: "Debrief ties to professional judgment and subject protection.", es: "Debrief se ata a juicio profesional y protección del sujeto." },
    ],
  },
] as const;

export const OPERATIONAL_ARTIFACT_TEMPLATES_BY_ID: Readonly<
  Record<string, OperationalArtifactTemplate>
> = Object.fromEntries(
  OPERATIONAL_ARTIFACT_TEMPLATES.map((template) => [template.templateId, template]),
);

export const OPERATIONAL_ARTIFACT_TEMPLATE_BY_ARTIFACT_ID: Readonly<
  Record<string, OperationalArtifactTemplate>
> = Object.fromEntries(
  OPERATIONAL_ARTIFACT_TEMPLATES.map((template) => [template.artifactId, template]),
);
