import type { CurriculumModule } from "../types";

export const MODULES_PART_A: CurriculumModule[] = [
  {
    module_id: "0",
    title: {
      en: "Introduction and the CRC professional path",
      es: "Introducción y ruta del CRC",
    },
    internal_name: "bloque_0_intro_crc",
    module_objective: {
      en: "Orient the learner to the CRC role across settings, study types, and credible certification pathways—without reducing the role to task lists.",
      es: "Orientar al aprendiz sobre el rol del CRC en distintos entornos, tipos de estudio y rutas creíbles de certificación—sin reducir el rol a listas de tareas.",
    },
    mapped_dimensions: ["O", "C", "R"],
    level_outcomes: {
      L1: [
        "Identifies where CRCs add value (site, CRO-supported site, academic, hybrid models).",
        "Names phase I–IV, observational, and decentralized/distributed trial characteristics that change CRC workload.",
        "Lists ACRP/SOCRA-style credentials and what they signal vs. what they do not guarantee.",
      ],
      L2: [
        "Explains to a new colleague how study phase and design reshape visit intensity, documentation burden, and escalation paths.",
        "Maps a hypothetical job posting to likely competency demands (Regulatory vs Operational emphasis).",
        "Drafts a personal development plan that includes portfolio evidence, not only exam prep.",
      ],
      L3: [
        "Flags when a site advertises ‘CRC’ responsibilities that blur unlicensed practice or PI-delegation gaps.",
        "Anticipates operational risks when a DCT model shifts source and monitoring touchpoints.",
        "Challenges oversimplified narratives that equate ‘certified’ with ‘competent for this protocol.’",
      ],
    },
    lesson_plan: [
      {
        lesson_id: "0.1",
        lesson_title: "What is a CRC and where can they work?",
        lesson_type: "video",
        lesson_objective: "Define CRC scope, delegation, and site archetypes.",
        key_teaching_points: [
          "CRC as integrator, not clerical appendage",
          "Delegation log and supervised tasks",
          "Academic vs high-enrolling community sites",
        ],
      },
      {
        lesson_id: "0.2",
        lesson_title: "Study types: phase I–IV, observational, decentralized",
        lesson_type: "case",
        lesson_objective: "Contrast operational and ethical implications by design.",
        key_teaching_points: [
          "First-in-human vs pragmatic trials",
          "Observational registries vs interventional",
          "DCT: what moves, what stays at site",
        ],
      },
      {
        lesson_id: "0.3",
        lesson_title: "Professional path and certifications",
        lesson_type: "worksheet",
        lesson_objective: "Build a defensible competence narrative.",
        key_teaching_points: [
          "ACRP / SOCRA exam domains vs this curriculum",
          "Portfolio artifacts monitors recognize",
          "Ethics of claiming competence",
        ],
      },
    ],
    error_library: [
      {
        error_or_finding:
          "Learner describes CRC as ‘data entry for CRA’ without patient safety or regulatory duties.",
        risk_generated: "Underestimates accountability; poor delegation boundaries.",
        expected_learner_response:
          "Reframe CRC as coordinated execution under PI oversight with GCP accountability.",
      },
      {
        error_or_finding:
          "Assumes decentralized = ‘less documentation at site.’",
        risk_generated: "Source integrity and monitoring gaps.",
        expected_learner_response:
          "Identify which sources remain local, remote, or hybrid; traceability still required.",
      },
      {
        error_or_finding:
          "Treats certification as endpoint rather than evidence maintenance.",
        risk_generated: "Stale competence claims; audit weakness.",
        expected_learner_response:
          "Pair credential with ongoing logs, training, and protocol-specific evidence.",
      },
    ],
    practical_exercise: {
      name: "Role landscape map",
      scenario:
        "Three fictional postings: Phase I unit, oncology phase III, registry with minimal IP.",
      inputs: ["Posting excerpts", "ICH E6 glossary excerpt (CRC-adjacent duties)"],
      learner_task:
        "Annotate each posting for dominant R/O/C/Q load and one latent risk if understaffed.",
      required_deliverables: [
        "1-page matrix (posting × dimensions)",
        "Two interview questions to probe gray-zone delegation",
      ],
    },
    assessment_rubric: {
      criteria: [
        {
          criterion_id: "0-DIM",
          description: "Dimension tagging is nuanced (not all O).",
          points: 30,
        },
        {
          criterion_id: "0-RISK",
          description: "Identifies non-obvious risk per site type.",
          points: 40,
        },
        {
          criterion_id: "0-PROBE",
          description: "Interview questions target judgment, not trivia.",
          points: 30,
        },
      ],
      total_points: 100,
      passing_score: 75,
    },
    scorecard_mapping: [
      { dimension: "O", weight_in_module: 0.4, aggregation_hint: "Site ops literacy" },
      { dimension: "C", weight_in_module: 0.35, aggregation_hint: "Patient pathway awareness" },
      { dimension: "R", weight_in_module: 0.25, aggregation_hint: "Regulatory framing of role" },
    ],
    capstone_connection: {
      en: "Capstone assigns site archetype; learner must justify staffing and escalation consistent with Block 0 framing.",
      es: "El capstone asigna arquetipo de sitio; el aprendiz debe justificar dotación y escalamiento acorde al Bloque 0.",
    },
    bilingual_notes: {
      keep_in_english: ["CRC", "ACRP", "SOCRA", "DCT", "PI", "GCP"],
      display_handling:
        "Show EN acronyms first time with ES gloss; keep regulatory acronyms in EN in both locales.",
    },
    nivel_label: "Bloque 0",
    flagship_priority: "standard",
  },

  {
    module_id: "1",
    title: {
      en: "Ethics, human subjects, HIPAA, and privacy",
      es: "Ética, sujetos humanos, HIPAA y privacidad",
    },
    internal_name: "mod_01_ethics_privacy_irb",
    module_objective: {
      en: "Execute consent-adjacent workflows and privacy controls that withstand IEC/IRB and monitor scrutiny.",
      es: "Ejecutar flujos adyacentes al consentimiento y controles de privacidad que resistan escrutinio del IEC/IRB y del monitor.",
    },
    mapped_dimensions: ["R", "C", "Q"],
    level_outcomes: {
      L1: [
        "Summarizes Belmont principles and their operational markers at site.",
        "Defines PHI, limited data sets, and common digital leakage vectors.",
        "States IEC/IRB approval dependencies before enrollment actions.",
      ],
      L2: [
        "Screens recruitment materials for unapproved claims vs IRB-stamped versions.",
        "Applies minimum-necessary sharing in sponsor queries without breaking traceability.",
        "Documents vulnerable population safeguards per protocol and local policy.",
      ],
      L3: [
        "Resolves tension between sponsor urgency and autonomy risks in reluctant participants.",
        "Detects coercive scheduling or compensation structures in real scenarios.",
        "Escalates probable serious noncompliance paths without guessing legal outcomes.",
      ],
    },
    lesson_plan: [
      {
        lesson_id: "1.1",
        lesson_title: "Belmont, Nuremberg, Helsinki → daily CRC decisions",
        lesson_type: "case",
        lesson_objective: "Translate principles to visit-room and chart actions.",
        key_teaching_points: ["Risk/benefit documentation", "Justice in recruitment logs"],
      },
      {
        lesson_id: "1.2",
        lesson_title: "PHI, confidentiality, digital hygiene",
        lesson_type: "video",
        lesson_objective: "Close common privacy gaps.",
        key_teaching_points: ["Device policies", "Email attachments", "Screens in open clinics"],
      },
      {
        lesson_id: "1.3",
        lesson_title: "IRB/IEC package and approvals",
        lesson_type: "worksheet",
        lesson_objective: "Trace approval lineage to subject files.",
        key_teaching_points: ["Version control", "Amendment ripple effects"],
      },
      {
        lesson_id: "1.4",
        lesson_title: "Recap: ethics ambiguity drills",
        lesson_type: "recap",
        lesson_objective: "Stabilize judgment under pressure.",
        key_teaching_points: ["When to pause enrollment", "PI notification thresholds"],
      },
    ],
    error_library: [
      {
        error_or_finding: "Using draft consent before IRB approval date in regulatory binder.",
        risk_generated: "Protocol deviation / serious noncompliance risk.",
        expected_learner_response: "Halt; verify effective version and date; document containment.",
      },
      {
        error_or_finding: "Sharing screen with PHI visible to unauthorized staff.",
        risk_generated: "Privacy breach; monitor finding.",
        expected_learner_response: "Stop share; incident pathway per site SOP; retrain log entry.",
      },
      {
        error_or_finding: "Recruitment flyer promises ‘free cure’ language.",
        risk_generated: "Undue influence; IEC concern.",
        expected_learner_response: "Withdraw material; submit corrective amendment package.",
      },
    ],
    practical_exercise: {
      name: "IRB version reconciliation",
      scenario: "Two consent versions overlap during amendment window.",
      inputs: ["IRB letters (mock)", "Enrollment dates (mock)"],
      learner_task: "Build decision tree: who may sign which version when.",
      required_deliverables: ["Decision tree", "Subject communication script (bilingual outline)"],
    },
    assessment_rubric: {
      criteria: [
        { criterion_id: "1-PRIN", description: "Principles tied to observable behaviors.", points: 35 },
        { criterion_id: "1-PHI", description: "PHI controls concrete and complete.", points: 35 },
        { criterion_id: "1-IRB", description: "Approval lineage correct under ambiguity.", points: 30, fail_condition: "Uses wrong effective date" },
      ],
      total_points: 100,
      passing_score: 80,
    },
    scorecard_mapping: [
      { dimension: "R", weight_in_module: 0.45, aggregation_hint: "IRB/consent compliance" },
      { dimension: "C", weight_in_module: 0.35, aggregation_hint: "Participant protection" },
      { dimension: "Q", weight_in_module: 0.2, aggregation_hint: "Document integrity" },
    ],
    capstone_connection: {
      en: "Capstone consent encounter must show version control and autonomy risk handling.",
      es: "El encuentro de consentimiento del capstone debe mostrar control de versiones y manejo de riesgo a la autonomía.",
    },
    bilingual_notes: {
      keep_in_english: ["IRB", "IEC", "PHI", "HIPAA", "PI", "GCP"],
      display_handling: "ES body; retain HIPAA as proper noun in EN.",
    },
    nivel_label: "Nivel 1",
    flagship_priority: "standard",
  },

  {
    module_id: "2",
    title: {
      en: "Protocol, study design, and risk analysis",
      es: "Protocolo, diseño del estudio y análisis de riesgos",
    },
    internal_name: "mod_02_protocol_design_risk",
    module_objective: {
      en: "Read a protocol as an operational and safety contract—linking eligibility, endpoints, SoA, and site feasibility.",
      es: "Leer un protocolo como contrato operativo y de seguridad—vinculando elegibilidad, endpoints, SoA y factibilidad del sitio.",
    },
    mapped_dimensions: ["R", "O", "C", "Q"],
    level_outcomes: {
      L1: [
        "Locates I/E criteria, SoA, endpoints, and prohibited con meds.",
        "Defines operational critical path for first subject in.",
        "Names budget-feasibility levers tied to visit intensity.",
      ],
      L2: [
        "Maps each visit window to source locations and who captures what.",
        "Flags recruitment traps (narrow I/E + competitive enrollment).",
        "Prepares PI with protocol risks relevant to local population.",
      ],
      L3: [
        "Detects internal inconsistencies (SoA vs IP section vs lab manual).",
        "Proposes mitigation before first patient when lab turnaround exceeds window.",
        "Challenges underpowered feasibility assumptions from sponsor grid.",
      ],
    },
    lesson_plan: [
      {
        lesson_id: "2.1",
        lesson_title: "Protocol anatomy beyond the synopsis",
        lesson_type: "video",
        lesson_objective: "Navigate full protocol for CRC tasks.",
        key_teaching_points: ["Objectives vs endpoints", "Operational appendices"],
      },
      {
        lesson_id: "2.2",
        lesson_title: "I/E and edge cases",
        lesson_type: "case",
        lesson_objective: "Apply judgment near boundaries.",
        key_teaching_points: ["Waivers", "Protocol-defined conditions"],
      },
      {
        lesson_id: "2.3",
        lesson_title: "SoA → site playbook",
        lesson_type: "worksheet",
        lesson_objective: "Convert schedule to checklists.",
        key_teaching_points: ["Window math", "Dependencies"],
      },
      {
        lesson_id: "2.4",
        lesson_title: "Protocol ↔ budget ↔ feasibility",
        lesson_type: "simulation",
        lesson_objective: "Negotiate tradeoffs transparently.",
        key_teaching_points: ["Visit caps", "Unfunded tasks"],
      },
    ],
    error_library: [
      {
        error_or_finding: "CRC uses synopsis only for eligibility decisions.",
        risk_generated: "Wrong inclusion; monitor major finding.",
        expected_learner_response: "Return to full I/E and lab manual; document query path.",
      },
      {
        error_or_finding: "Misses prohibited medication buried in appendix.",
        risk_generated: "Patient safety + data validity threat.",
        expected_learner_response: "Build con med crosswalk; pharmacist verification.",
      },
    ],
    practical_exercise: {
      name: "SoA gap hunt",
      scenario: "Intentionally inconsistent mock protocol.",
      inputs: ["Mock protocol PDF", "Lab turnaround table"],
      learner_task: "List 5 inconsistencies with patient-risk rating.",
      required_deliverables: ["Issue log", "Mitigation memo to PI"],
    },
    assessment_rubric: {
      criteria: [
        { criterion_id: "2-READ", description: "Deep read evidenced by citations.", points: 40 },
        { criterion_id: "2-RISK", description: "Risk ratings plausible.", points: 35 },
        { criterion_id: "2-MEMO", description: "Mitigation actionable.", points: 25 },
      ],
      total_points: 100,
      passing_score: 75,
    },
    scorecard_mapping: [
      { dimension: "C", weight_in_module: 0.35, aggregation_hint: "Eligibility judgment" },
      { dimension: "O", weight_in_module: 0.35, aggregation_hint: "Visit execution design" },
      { dimension: "Q", weight_in_module: 0.2, aggregation_hint: "Consistency detection" },
      { dimension: "R", weight_in_module: 0.1, aggregation_hint: "Regulatory structure literacy" },
    ],
    capstone_connection: {
      en: "Capstone protocol drives inclusion, visit flow, and deviation handling.",
      es: "El protocolo del capstone gobierna inclusión, flujo de visitas y manejo de desviaciones.",
    },
    bilingual_notes: {
      keep_in_english: ["SoA", "I/E", "PI", "IP", "EDC"],
      display_handling: "Keep SoA acronym; expand once as ‘schedule of assessments / calendario de evaluaciones’.",
    },
    nivel_label: "Nivel 1",
    flagship_priority: "standard",
  },

  {
    module_id: "3",
    title: {
      en: "Regulatory binder and ICH-GCP essential documents",
      es: "Regulatory binder y documentos esenciales ICH-GCP",
    },
    internal_name: "mod_03_isf_essential_docs",
    module_objective: {
      en: "Build and maintain an audit-ready investigator site file with correct versioning and traceability across study lifecycle.",
      es: "Construir y mantener un archivo del investigador listo para auditoría con versionado y trazabilidad correctos en el ciclo de vida.",
    },
    mapped_dimensions: ["R", "Q"],
    level_outcomes: {
      L1: [
        "Lists essential document categories start-up/ongoing/close-out.",
        "Explains ISF vs sponsor TMF responsibilities at site.",
        "Identifies ICH E6(R3) expectations affecting filing discipline.",
      ],
      L2: [
        "Files approvals, labels, and training proofs with consistent naming.",
        "Prepares monitor visit pull-list in minutes using index discipline.",
        "Executes amendment filing without orphan versions.",
      ],
      L3: [
        "Detects missing linkage between delegation and tasks observed in SDV.",
        "Anticipates inspection focus based on study risk drivers.",
        "Reconstructs timeline from ISF alone after staff turnover.",
      ],
    },
    lesson_plan: [
      {
        lesson_id: "3.1",
        lesson_title: "Essential documents in practice",
        lesson_type: "video",
        lesson_objective: "Map ICH list to drawers/digital folders.",
        key_teaching_points: ["Regulatory vs study-specific", "Signatures"],
      },
      {
        lesson_id: "3.2",
        lesson_title: "Start-up completeness vs ongoing drift",
        lesson_type: "case",
        lesson_objective: "Prevent filing decay.",
        key_teaching_points: ["Change logs", "QC sampling"],
      },
      {
        lesson_id: "3.3",
        lesson_title: "Audit readiness drill",
        lesson_type: "simulation",
        lesson_objective: "Pull 10 documents under time pressure.",
        key_teaching_points: ["Index truth", "Metadata"],
      },
    ],
    error_library: [
      {
        error_or_finding: "Only final CV on file; missing dated version active at study start.",
        risk_generated: "Personnel qualification gap.",
        expected_learner_response: "Obtain retroactive CV or qualification evidence per policy; document rationale.",
      },
      {
        error_or_finding: "Lab certifications expired but screening continued.",
        risk_generated: "Invalid lab data; major deviation.",
        expected_learner_response: "Stop pending qualification refresh; impact assessment.",
      },
    ],
    practical_exercise: {
      name: "ISF reconstruction",
      scenario: "Chaotic mock binder after monitor prep failure.",
      inputs: ["Scattered PDFs", "Enrollment log"],
      learner_task: "Rebuild index + flag top 5 inspection risks.",
      required_deliverables: ["ISF index sheet", "Risk memo"],
    },
    assessment_rubric: {
      criteria: [
        { criterion_id: "3-IDX", description: "Index completeness and logic.", points: 45 },
        { criterion_id: "3-RISK", description: "Inspection risks realistic.", points: 35 },
        { criterion_id: "3-ICH", description: "ICH framing accurate.", points: 20 },
      ],
      total_points: 100,
      passing_score: 78,
    },
    scorecard_mapping: [
      { dimension: "R", weight_in_module: 0.55, aggregation_hint: "GCP filing compliance" },
      { dimension: "Q", weight_in_module: 0.45, aggregation_hint: "ALCOA-adjacent filing" },
    ],
    capstone_connection: {
      en: "Capstone requires live ISF pull for simulated inspection queries.",
      es: "El capstone exige extracción viva del ISF para consultas de inspección simulada.",
    },
    bilingual_notes: {
      keep_in_english: ["ISF", "TMF", "ICH", "GCP", "EDC"],
      display_handling: "Regulatory binder may display as ‘Regulatory binder / Carpeta regulatoria’.",
    },
    nivel_label: "Nivel 1",
    flagship_priority: "standard",
  },

  {
    module_id: "4",
    title: {
      en: "Master control log system",
      es: "Sistema de logs de control maestro",
    },
    internal_name: "mod_04_master_logs_flagship",
    module_objective: {
      en: "The CRC maintains complete study traceability and detects inconsistencies before the monitor or auditor.",
      es: "El CRC mantiene trazabilidad completa del estudio y detecta inconsistencias antes del monitor o auditor.",
    },
    mapped_dimensions: ["O", "Q", "R"],
    level_outcomes: {
      L1: [
        "Defines purpose, owner, and update rules for DOA, training log, master staff list, essential document receipt log, screening/enrollment logs, subject ID list, visit/status log, PD log, monitoring visit log, signature log.",
        "States basic crosswalk: screening log ↔ eligibility source ↔ EDC.",
        "Lists minimum AE log integration points for subject status.",
      ],
      L2: [
        "Updates logs within protocol windows; preserves version history where required.",
        "Runs cross-log reconciliation weekly on a busy study.",
        "Drafts mini-CAPA when mismatch found (screening ID vs randomization ID).",
      ],
      L3: [
        "Reconstructs subject timeline from logs + source when monitor alleges gap.",
        "Detects subtle duplication or ID collision risks before database lock.",
        "Prioritizes which log discrepancy is safety-critical vs administrative.",
      ],
    },
    lesson_plan: [
      {
        lesson_id: "4.1",
        lesson_title: "DOA + staff qualification traceability",
        lesson_type: "video",
        lesson_objective: "Link delegation to tasks and training currency.",
        key_teaching_points: ["Task-level delegation", "Signature authority"],
      },
      {
        lesson_id: "4.2",
        lesson_title: "Screening, enrollment, ID list coherence",
        lesson_type: "case",
        lesson_objective: "Prevent identifier drift.",
        key_teaching_points: ["Screen failures", "Re-screen rules", "ID issuance"],
      },
      {
        lesson_id: "4.3",
        lesson_title: "AE log basics + visit/status log",
        lesson_type: "worksheet",
        lesson_objective: "Integrate safety signals into operational logs.",
        key_teaching_points: ["Hold rules", "Visit discontinuations"],
      },
      {
        lesson_id: "4.4",
        lesson_title: "Protocol deviation log discipline",
        lesson_type: "case",
        lesson_objective: "Classify, narrate, and date deviations with proportionality.",
        key_teaching_points: ["Root cause", "CAPA linkage"],
      },
      {
        lesson_id: "4.5",
        lesson_title: "Monitoring log + signature log audit trail",
        lesson_type: "simulation",
        lesson_objective: "Prepare for MV and FDA-style trace requests.",
        key_teaching_points: ["MV attendance", "Signature capture"],
      },
      {
        lesson_id: "4.6",
        lesson_title: "IP accountability + temperature + shipping logs (integration map)",
        lesson_type: "recap",
        lesson_objective: "Map ancillary logs to master narrative.",
        key_teaching_points: ["Chain linking", "Escalation"],
      },
    ],
    error_library: [
      {
        error_or_finding:
          "Enrollment log shows randomized subject without corresponding screening log entry date.",
        risk_generated: "Eligibility trace broken; potential protocol violation.",
        expected_learner_response:
          "Freeze randomization actions; reconstruct screening; notify PI/sponsor per plan; open deviation with containment.",
      },
      {
        error_or_finding:
          "Subject ID list uses initials that match two active participants.",
        risk_generated: "Data mix-up risk across labs and IP labels.",
        expected_learner_response:
          "Immediate ID collision check; quarantine pending relabel per pharmacy SOP; risk assessment.",
      },
      {
        error_or_finding:
          "Protocol deviation logged late; visit already occurred with wrong visit window.",
        risk_generated: "Masking temporal relationship; inspection distrust.",
        expected_learner_response:
          "Backdated narrative prohibited; honest timeline; corrective plan; training.",
      },
      {
        error_or_finding:
          "DOA lists task performed by staff without GCP training currency.",
        risk_generated: "Human subject protection + data reliability issue.",
        expected_learner_response:
          "Suspend task; refresh training; document; notify sponsor if impact on data.",
      },
      {
        error_or_finding:
          "Monitoring visit log missing attendance for remote monitoring session.",
        risk_generated: "Cannot prove oversight occurred as claimed.",
        expected_learner_response:
          "Reconcile calendar artifacts; amend log with verifiable records; SOP fix.",
      },
    ],
    practical_exercise: {
      name: "Cross-log reconciliation + mini-CAPA",
      scenario:
        "Mock study: screening failure mis-keyed as screen pass; AE onset date disagrees between source and log.",
      inputs: [
        "Screening log extract",
        "Visit log",
        "Mock source note",
        "EDC screenshot",
        "DOA excerpt",
      ],
      learner_task:
        "Build reconciliation worksheet, classify root causes, draft mini-CAPA with owners/dates, and state monitor communication order.",
      required_deliverables: [
        "Reconciliation matrix",
        "Mini-CAPA (1 page)",
        "Draft monitor email (bullet facts only)",
      ],
    },
    assessment_rubric: {
      criteria: [
        {
          criterion_id: "4-TRACE",
          description: "Timeline reconstruction accurate and complete.",
          points: 35,
          fail_condition: "Misses safety-critical mismatch",
        },
        {
          criterion_id: "4-CAPA",
          description: "Mini-CAPA proportional, assigned, dated.",
          points: 30,
        },
        {
          criterion_id: "4-COMM",
          description: "Monitor communication factual, no blame language.",
          points: 20,
        },
        {
          criterion_id: "4-REG",
          description: "Regulatory proportionality (ICH-aware).",
          points: 15,
        },
      ],
      total_points: 100,
      passing_score: 82,
    },
    scorecard_mapping: [
      { dimension: "Q", weight_in_module: 0.45, aggregation_hint: "Traceability + error detection" },
      { dimension: "O", weight_in_module: 0.35, aggregation_hint: "Operational log discipline" },
      { dimension: "R", weight_in_module: 0.2, aggregation_hint: "GCP evidence packages" },
    ],
    capstone_connection: {
      en: "Capstone visit sequence requires log-consistent subject story; deliberate seeded inconsistencies must be caught.",
      es: "La secuencia de visitas del capstone exige historia de sujeto coherente con logs; inconsistencias sembradas deben detectarse.",
    },
    bilingual_notes: {
      keep_in_english: ["DOA", "CAPA", "PD", "AE", "SAE", "EDC", "CRF"],
      display_handling: "Teach ‘log’ as ‘registro’ but keep PD/AE abbreviations in EN in data fields.",
    },
    nivel_label: "Nivel 2",
    flagship_priority: "flagship",
  },

  {
    module_id: "5",
    title: {
      en: "Recruitment, pre-screening, retention, and navigation",
      es: "Reclutamiento, pre-screening, retención y navegación",
    },
    internal_name: "mod_05_recruitment_retention",
    module_objective: {
      en: "Design ethical, IRB-aligned recruitment and retention workflows—including culturally competent navigation for Hispanic populations.",
      es: "Diseñar flujos éticos de reclutamiento y retención alineados al IRB—incluyendo navegación culturalmente competente para población hispana.",
    },
    mapped_dimensions: ["O", "C", "R"],
    level_outcomes: {
      L1: [
        "Differentiates IRB-approved vs draft recruitment assets.",
        "Lists pre-screening data handling boundaries.",
        "Names retention tactics that are ethics-safe.",
      ],
      L2: [
        "Runs scheduling workflows that reduce no-shows without coercion.",
        "Documents recruitment sources for monitor transparency.",
        "Applies language-accessible consent support processes.",
      ],
      L3: [
        "Detects subtle undue influence in stipend structures.",
        "Handles community mistrust scenarios without overpromising benefit.",
        "Balances sponsor enrollment pressure vs participant burden.",
      ],
    },
    lesson_plan: [
      {
        lesson_id: "5.1",
        lesson_title: "IRB-approved materials and fair representation",
        lesson_type: "video",
        lesson_objective: "Align messaging to ethics.",
        key_teaching_points: ["Claims discipline", "Literacy"],
      },
      {
        lesson_id: "5.2",
        lesson_title: "Pre-screening and chart abstraction ethics",
        lesson_type: "case",
        lesson_objective: "Boundaries before consent.",
        key_teaching_points: ["Honest broker models", "Notes hygiene"],
      },
      {
        lesson_id: "5.3",
        lesson_title: "Hispanic population focus",
        lesson_type: "case",
        lesson_objective: "Operationalize cultural competence.",
        key_teaching_points: ["Family involvement norms", "Interpreter quality"],
      },
      {
        lesson_id: "5.4",
        lesson_title: "No-shows and retention planning",
        lesson_type: "worksheet",
        lesson_objective: "Build retention plan with metrics.",
        key_teaching_points: ["Burden reduction", "Transport barriers"],
      },
    ],
    error_library: [
      {
        error_or_finding: "Using social media ad not yet IRB-approved.",
        risk_generated: "Noncompliant recruitment.",
        expected_learner_response: "Pull ad; submit amendment; document outreach freeze.",
      },
      {
        error_or_finding: "Guarantees stipend as ‘payment for trial participation’ framed as wage.",
        risk_generated: "Undue influence allegation.",
        expected_learner_response: "Revise scripts; IRB consult; corrective education.",
      },
    ],
    practical_exercise: {
      name: "Recruitment package QC",
      scenario: "Mixed English/Spanish flyers with inconsistent risk language.",
      inputs: ["Flyers", "Protocol SoA excerpt"],
      learner_task: "Redline to IRB-safe state; add process QC checklist.",
      required_deliverables: ["Redlined pack", "QC checklist"],
    },
    assessment_rubric: {
      criteria: [
        { criterion_id: "5-ETH", description: "Ethics fixes are substantive.", points: 40 },
        { criterion_id: "5-CULT", description: "Cultural competence evidenced.", points: 35 },
        { criterion_id: "5-QC", description: "QC checklist operational.", points: 25 },
      ],
      total_points: 100,
      passing_score: 76,
    },
    scorecard_mapping: [
      { dimension: "C", weight_in_module: 0.4, aggregation_hint: "Participant navigation" },
      { dimension: "O", weight_in_module: 0.35, aggregation_hint: "Enrollment operations" },
      { dimension: "R", weight_in_module: 0.25, aggregation_hint: "IRB alignment" },
    ],
    capstone_connection: {
      en: "Capstone includes recruitment touch and retention barrier on visit 2.",
      es: "El capstone incluye contacto de reclutamiento y barrera de retención en visita 2.",
    },
    bilingual_notes: {
      keep_in_english: ["IRB", "HIPAA", "PI"],
      display_handling: "Provide ES/EN paired snippets where community-facing.",
    },
    nivel_label: "Nivel 2",
    flagship_priority: "standard",
  },
];
