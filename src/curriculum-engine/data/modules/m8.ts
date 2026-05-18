// src/curriculum-engine/data/modules/m8.ts

import type { Module } from "../../types";

/**
 * Module 8 — Screening & study visits: patient flow, visit windows, randomization & deviation control.
 *
 * Base Operativo (Modules 1–10): eight ordered sections; three guided cases (clear / incorrect / ambiguous);
 * practical exercise under time pressure; rubric 100 = sum(criteria.points); passing 94.
 *
 * Anchors for this module: ICH E3 (clinical study report structure and integrity of how assessments and
 * visit timing feed the reported analysis) and ACRP Standards (CRC professional conduct, protocol adherence,
 * and documentation discipline in visit execution).
 */
export const MODULE_M8: Module = {
  id: "M8",
  slug: "screening-study-visits-windows-randomization",
  internalName: "mod_08_screening_study_visits",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["O", "Q", "R", "C"],
  title: {
    en: "Module 8 — Screening & Study Visits: Patient Flow, Visit Windows, Randomization & Deviation Control",
    es: "Módulo 8 — Visitas de tamizaje y estudio: flujo del paciente, ventanas, randomización y control de desviaciones",
  },
  objective: {
    en: "CRC can separate pre-screening from regulatory screening, run SoA-aligned visits with window discipline and consent-first sequencing, stop randomization near-misses, resolve safety-vs-window conflicts per GCP, and explain how timing errors cascade to analysis sets and CSR narrative under ICH E3 expectations while meeting ACRP Standards for professional documentation and escalation.",
    es: "El CRC puede separar pre-screening de screening regulatorio, ejecutar visitas alineadas a SoA con disciplina de ventana y secuencia consentimiento primero, detener near-miss de randomización, resolver conflictos seguridad vs ventana según GCP y explicar cómo errores de tiempo se propagan a conjuntos de análisis y narrativa del informe bajo expectativas ICH E3 cumpliendo ACRP Standards en documentación profesional y escalamiento.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Defines pre-screening vs protocol screening; states that randomization requires complete, source-supported eligibility consistent with ICH E3-relevant analysis integrity and ACRP Standards for protocol adherence.",
          es: "Define pre-screening vs screening de protocolo; afirma que randomización requiere elegibilidad completa con respaldo en fuente consistente con integridad de análisis relevante ICH E3 y ACRP Standards de adherencia al protocolo.",
        },
        {
          en: "Names why primary-endpoint visit windows matter for interpretable outcomes and defensible CSR tables under ICH E3.",
          es: "Enuncia por qué ventanas de visita de endpoint primario importan para resultados interpretables y tablas CSR defendibles bajo ICH E3.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Executes screening visits: correct ICF, consent before research procedures, full screening SoA, PI attestation before randomize-click; documents contemporaneously per ACRP Standards.",
          es: "Ejecuta visitas screening: ICF correcto, consentimiento antes de procedimientos investigación, SoA screening completo, atestación PI antes del clic randomizar; documenta contemporáneamente según ACRP Standards.",
        },
        {
          en: "Plans on-study visits using protocol windows; captures deviations with enough detail for monitor review and ICH E3-consistent study conduct reconstruction.",
          es: "Planifica visitas en estudio con ventanas del protocolo; captura desviaciones con detalle suficiente para revisión monitor y reconstrucción de conducta del estudio consistente con ICH E3.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Prioritizes participant safety over rigid windows when clinically necessary; documents rationale and deviation impact so CSR and statistical analysis plans can be defended per ICH E3.",
          es: "Prioriza seguridad del participante sobre ventanas rígidas cuando es clínicamente necesario; documenta justificación e impacto de desviación para que CSR y planes estadísticos puedan defenderse según ICH E3.",
        },
        {
          en: "Flags systemic window drift and primary-endpoint timing failures; designs CAPA aligned with ACRP Standards (quality culture, escalation) linking M2/M4/M6/M16.",
          es: "Señala deriva sistémica de ventana y fallas de tiempo de endpoint primario; diseña CAPA alineada a ACRP Standards (cultura de calidad, escalamiento) vinculando M2/M4/M6/M16.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M8.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the operational bar: consent-first screening, clean randomization, window discipline, and documentation that survives ICH E3 CSR scrutiny and reflects ACRP Standards.",
        es: "Establecer la barra operativa: screening consentimiento primero, randomización limpia, disciplina de ventana y documentación que sobreviva escrutinio CSR ICH E3 y refleje ACRP Standards.",
      },
      keyPoints: [
        {
          en: "Graded on stop-rules before randomize-click, honest deviation capture, and endpoint-timing literacy—not calendar optimism.",
          es: "Se te califica por reglas de paro antes del clic randomizar, captura honesta de desviaciones y alfabetización de tiempo de endpoint—no optimismo de calendario.",
        },
        {
          en: "Outputs: per-subject matrix; issue register + CAPA; monitor summary citing ICH E3 and ACRP Standards where substantive.",
          es: "Salidas: matriz por sujeto; registro + CAPA; resumen monitor citando ICH E3 y ACRP Standards donde sea sustantivo.",
        },
        {
          en: "Technical tokens stay EN (ICH E3, ACRP Standards, SoA, GCP, IRB, EDC, CtQ, FEV1, HbA1c).",
          es: "Tokens técnicos permanecen en inglés (ICH E3, ACRP Standards, SoA, GCP, IRB/CEI, EDC, CtQ, FEV1, HbA1c).",
        },
      ],
    },
    {
      lessonId: "M8.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 30,
      objective: {
        en: "Anchor pre-screen vs screening, SoA windows, randomization gates, ICH E3 implications for reported assessments, and ACRP Standards for CRC conduct.",
        es: "Anclar pre-screen vs screening, ventanas SoA, compuertas de randomización, implicaciones ICH E3 para evaluaciones reportadas y ACRP Standards para conducta CRC.",
      },
      keyPoints: [
        {
          en: "ICH E3 lens: CSRs summarize study conduct and results; visit timing and protocol deviations influence analysis populations and endpoint interpretability—site documentation is upstream of defensible reporting.",
          es: "Lente ICH E3: los CSR resumen conducta y resultados; tiempo de visita y desviaciones de protocolo influyen poblaciones de análisis e interpretabilidad de endpoint—documentación del sitio está aguas arriba del reporte defendible.",
        },
        {
          en: "ACRP Standards lens: CRCs maintain integrity, follow approved protocols, document accurately, escalate conflicts—randomization pressure and window ‘habits’ are professional ethics issues.",
          es: "Lente ACRP Standards: los CRC mantienen integridad, siguen protocolos aprobados, documentan con precisión, escalan conflictos—presión de randomización y ‘costumbres’ de ventana son temas de ética profesional.",
        },
        {
          en: "Screening visit: valid consent (M6), apply I/E with source evidence, explicit screen-fail vs eligible decision before randomization.",
          es: "Visita screening: consentimiento válido (M6), aplicar I/E con evidencia en fuente, decisión explícita screen-fail vs elegible antes de randomización.",
        },
        {
          en: "Real-world workflow — Pre-screen: EMR lists and permitted questions only; no protocol eligibility tests pre-consent unless protocol explicitly allows chart-only criteria.",
          es: "Flujo real — Pre-screen: listas EMR y preguntas permitidas solamente; sin pruebas elegibilidad protocolo pre-consentimiento salvo que protocolo permita explícitamente criterios solo en historia.",
        },
        {
          en: "Real-world workflow — Screening: consent first; full screening SoA; PI sign-off; randomize only when checklist complete.",
          es: "Flujo real — Screening: consentimiento primero; SoA screening completo; visto bueno PI; randomizar solo cuando checklist completo.",
        },
        {
          en: "Real-world workflow — On-study: schedule to target day within window; source + EDC + logs aligned; deviations contemporaneous.",
          es: "Flujo real — En estudio: agendar a día objetivo dentro de ventana; fuente + EDC + logs alineados; desviaciones contemporáneas.",
        },
        {
          en: "Error-prone 1 — Pre-screen creep: protocol labs or imaging ordered ‘to see if they qualify’ before consent.",
          es: "Propensa 1 — Pre-screen creep: labs o imagen de protocolo ordenados ‘para ver si califican’ antes del consentimiento.",
        },
        {
          en: "Error-prone 2 — Randomization near-miss: borderline labs/imaging; ‘randomize now, clarify later’ culture.",
          es: "Propensa 2 — Near-miss randomización: labs/imagen límite; cultura ‘randomizar ahora, aclarar después’.",
        },
        {
          en: "Error-prone 3 — Site habit windows: team applies ±10 days when protocol says ±3—systematic ICH E3 analysis risk.",
          es: "Propensa 3 — Ventanas por costumbre: equipo aplica ±10 días cuando protocolo dice ±3—riesgo sistemático de análisis ICH E3.",
        },
        {
          en: "Error-prone 4 — Primary-endpoint visit late but ‘good data’: FEV1 done Day 92 vs Day 84 ± 5—minimization invites major deviation classification.",
          es: "Propensa 4 — Visita endpoint primario tarde pero ‘buenos datos’: FEV1 día 92 vs día 84 ± 5—minimizar invita clasificación desviación mayor.",
        },
        {
          en: "Error-prone 5 — Repeated scheduling lateness without CAPA; deviation log incomplete—breaks ACRP traceability expectations.",
          es: "Propensa 5 — Repetición de retrasos en agenda sin CAPA; log de desviaciones incompleto—rompe expectativas de trazabilidad ACRP.",
        },
        {
          en: "Cross-links: M6 consent timing; M4 ALCOA+ logs; M2 protocol adherence; M5 capacity vs window promises.",
          es: "Vínculos: M6 tiempo de consentimiento; M4 logs ALCOA+; M2 adherencia protocolo; M5 capacidad vs promesas de ventana.",
        },
      ],
    },
    {
      lessonId: "M8.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "COPD clinic: nurse proposes protocol screening spirometry before consent to see if subject qualifies.",
        es: "Clínica EPOC: enfermera propone espirometría screening de protocolo antes del consentimiento para ver si califica.",
      },
      keyPoints: [
        {
          en: "What CRC sees: efficiency pressure vs consent-first rule; protocol-defined tests are research screening, not casual pre-screen.",
          es: "Qué ve el CRC: presión de eficiencia vs regla consentimiento primero; pruebas definidas por protocolo son screening investigación, no pre-screen casual.",
        },
        {
          en: "How to think: ACRP Standards require protocol compliance; ICH E3 depends on clean eligibility narrative—pre-consent protocol tests corrupt the funnel.",
          es: "Cómo pensar: ACRP Standards exigen cumplimiento protocolo; ICH E3 depende de narrativa de elegibilidad limpia—pruebas protocolo pre-consentimiento corrompen el embudo.",
        },
        {
          en: "Decision: no protocol spirometry pre-ICF; optional chart SOC per protocol; schedule screening visit with consent then SoA.",
          es: "Decisión: sin espirometría protocolo pre-ICF; SOC en historia opcional según protocolo; programar visita screening con consentimiento luego SoA.",
        },
        {
          en: "Why it matters: ‘screening before consent’ remains a top inspection citation.",
          es: "Por qué importa: ‘screening antes del consentimiento’ sigue siendo citación top en inspección.",
        },
      ],
    },
    {
      lessonId: "M8.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Criterion HbA1c 7.0–10.0%; today 10.1%; four days ago 9.8%; PI says randomize now, clarify later.",
        es: "Criterio HbA1c 7,0–10,0%; hoy 10,1%; hace 4 días 9,8%; PI dice randomizar ahora, aclarar después.",
      },
      keyPoints: [
        {
          en: "Incorrect move: randomize-click while eligibility is unresolved—violates ACRP Standards and poisons ICH E3-eligible analysis sets.",
          es: "Movimiento incorrecto: clic randomizar mientras elegibilidad está sin resolver—viola ACRP Standards y envenena conjuntos de análisis elegibles ICH E3.",
        },
        {
          en: "Correct move: hold randomization; apply protocol window/repeat testing/sponsor-medical written path; document near-miss and CAPA on interpretation culture.",
          es: "Movimiento correcto: retener randomización; aplicar ventana/repetición/sponsor-médico por escrito según protocolo; documentar near-miss y CAPA sobre cultura de interpretación.",
        },
        {
          en: "Why it matters: ineligible randomized subjects are safety and integrity failures, not paperwork fixes.",
          es: "Por qué importa: sujetos inelegibles aleatorizados son fallas de seguridad e integridad, no arreglos de papeleo.",
        },
      ],
    },
    {
      lessonId: "M8.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Primary endpoint: FEV1 change baseline → Day 84 ± 5; visit occurs Day 92 after ICU stay; spirometry quality excellent; statistician email asks whether to ‘treat as protocol deviation only’ to preserve power.",
        es: "Endpoint primario: cambio FEV1 baseline → Día 84 ± 5; visita ocurre día 92 tras estancia UCI; calidad espirometría excelente; correo estadístico pregunta si ‘tratar solo como desviación protocolo’ para preservar potencia.",
      },
      keyPoints: [
        {
          en: "What CRC sees: patient safety delayed the visit; data look ‘scientifically good’; pressure to minimize endpoint-timing issue.",
          es: "Qué ve el CRC: seguridad del paciente retrasó la visita; datos se ven ‘científicamente buenos’; presión por minimizar tema de tiempo de endpoint.",
        },
        {
          en: "How to think: ICH E3 CSR must honestly represent protocol-specified assessment timing; ACRP Standards require transparent deviation capture—not negotiated silence.",
          es: "Cómo pensar: CSR ICH E3 debe representar honestamente tiempo de evaluación especificado en protocolo; ACRP Standards exigen captura transparente de desviaciones—no silencio negociado.",
        },
        {
          en: "Decision: document major deviation with clinical timeline; sponsor/statistician determine analysis handling; site CAPA on scheduling + ICU routing; do not under-report to ‘help’ the analysis.",
          es: "Decisión: documentar desviación mayor con línea clínica; patrocinador/estadístico determina manejo analítico; CAPA sitio en agenda + ruta UCI; no sub-reportar para ‘ayudar’ el análisis.",
        },
        {
          en: "Why it matters: endpoint window errors can change primary analysis conclusions—integrity beats convenience.",
          es: "Por qué importa: errores de ventana de endpoint pueden cambiar conclusiones del análisis primario—integridad > conveniencia.",
        },
      ],
    },
    {
      lessonId: "M8.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 40,
      objective: {
        en: "Run the Visit & Randomization Lab once under the 40-minute time box; cite ICH E3 and ACRP Standards in the monitor summary where substantive.",
        es: "Ejecutar el Laboratorio una vez bajo 40 minutos; citar ICH E3 y ACRP Standards en resumen monitor donde sea sustantivo.",
      },
      keyPoints: [
        {
          en: "Time box: 40 minutes. Missing a randomization near-miss or minimizing primary-endpoint window failure = incomplete.",
          es: "Límite: 40 minutos. Omitir near-miss de randomización o minimizar falla de ventana de endpoint primario = incompleto.",
        },
        {
          en: "Deliverables: matrix (D1), register + CAPA (D2), monitor summary (D3) with severity and structural fixes.",
          es: "Entregables: matriz (D1), registro + CAPA (D2), resumen monitor (D3) con severidad y arreglos estructurales.",
        },
      ],
    },
    {
      lessonId: "M8.S5",
      title: { en: "5) Scoring matrix & inspection perspective", es: "5) Matriz de puntuación y perspectiva inspección" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M8.RUB1; connect monitor questions to ICH E3 reconstruction and ACRP professionalism.",
        es: "Alinear calificación con M8.RUB1; conectar preguntas monitor a reconstrucción ICH E3 y profesionalismo ACRP.",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; binary criteria; critical pathway on randomization gates and endpoint timing honesty.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; criterios binarios; vía crítica en compuertas de randomización y honestidad de tiempo de endpoint.",
        },
        {
          en: "Monitor/inspector: reconstruct pre-screen → consent → screening → randomization → on-study visits; correlate logs, EDC timestamps, eligibility worksheets.",
          es: "Monitor/inspector: reconstruir pre-screen → consentimiento → screening → randomización → visitas en estudio; correlacionar logs, marcas EDC, hojas elegibilidad.",
        },
        {
          en: "ICH E3 relevance: inconsistent visit timing documentation undermines CSR endpoint narrative; ACRP relevance: pattern deviations without CAPA signal professionalism failure.",
          es: "Relevancia ICH E3: documentación inconsistente de tiempo de visita socava narrativa de endpoint CSR; relevancia ACRP: desviaciones patrón sin CAPA señalan falla de profesionalismo.",
        },
      ],
    },
    {
      lessonId: "M8.S6",
      title: { en: "6) Answer framework (elite outputs + fail patterns)", es: "6) Marco de respuesta (salidas élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Produce audit-facing visit summaries that tie facts to ICH E3 reporting risk and ACRP Standards escalation norms.",
        es: "Producir resúmenes de visita orientados a auditoría que enlacen hechos a riesgo de reporte ICH E3 y normas de escalamiento ACRP Standards.",
      },
      keyPoints: [
        {
          en: "Elite format: (1) Sequencing facts (consent, tests, randomize-click), (2) Window/deviation facts with source pointers, (3) CAPA + sponsor path + one-sentence defense citing ICH E3 / ACRP when useful.",
          es: "Formato élite: (1) Hechos de secuencia (consentimiento, pruebas, clic randomizar), (2) Hechos ventana/desviación con punteros a fuente, (3) CAPA + vía patrocinador + defensa en una oración citando ICH E3 / ACRP cuando útil.",
        },
        {
          en: "Fail patterns: ‘PI said hurry’; ‘we always use ±7’; ‘stats can handle it’ without deviation; blaming participants for systemic scheduling.",
          es: "Patrones de falla: ‘el PI dijo apurar’; ‘siempre usamos ±7’; ‘estadística lo resuelve’ sin desviación; culpar participantes por agenda sistémica.",
        },
      ],
    },
    {
      lessonId: "M8.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect visit execution to consent, logs, protocol, and inspection readiness.",
        es: "Conectar ejecución de visitas a consentimiento, logs, protocolo y preparación inspección.",
      },
      keyPoints: [
        {
          en: "M6: consent before any protocol screening procedure—non-negotiable for ACRP-aligned conduct.",
          es: "M6: consentimiento antes de procedimiento screening protocolo—no negociable para conducta alineada ACRP.",
        },
        {
          en: "M4/M16: screening logs, deviation logs, and randomization audit trails must support ICH E3 study conduct reconstruction.",
          es: "M4/M16: logs screening, logs desviaciones y audit trails randomización deben soportar reconstrucción conducta estudio ICH E3.",
        },
        {
          en: "M7/M5: enrollment pressure is common; ACRP Standards require resisting shortcuts that corrupt eligibility.",
          es: "M7/M5: presión de inclusión es común; ACRP Standards exigen resistir atajos que corrompen elegibilidad.",
        },
      ],
    },
    {
      lessonId: "M8.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit for patients, analysis integrity, and CSR credibility under ICH E3.",
        es: "Hacer explícitas consecuencias para pacientes, integridad analítica y credibilidad CSR bajo ICH E3.",
      },
      keyPoints: [
        {
          en: "Patient safety: near-miss randomization and forced window visits can enroll wrong participants or delay needed care.",
          es: "Seguridad del paciente: near-miss randomización y visitas forzadas por ventana pueden incluir participantes equivocados o retrasar atención necesaria.",
        },
        {
          en: "Data integrity: endpoint out-of-window and hidden deviations distort primary analysis and ICH E3 tables/appendices credibility.",
          es: "Integridad de datos: endpoint fuera de ventana y desviaciones ocultas distorsionan análisis primario y credibilidad tablas/apéndices ICH E3.",
        },
        {
          en: "Professional standing: ACRP Standards violations (coercion to randomize, log suppression) escalate to sponsor actions and regulatory scrutiny.",
          es: "Posición profesional: violaciones ACRP Standards (coerción a randomizar, supresión de logs) escalan a acciones patrocinador y escrutinio regulatorio.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M8.E1",
      description: {
        en: "Pre-screen phone script orders protocol labs ‘to see if they qualify’ before consent—breaks consent-first sequencing expected under ACRP Standards.",
        es: "Guión telefónico pre-screen ordena labs de protocolo ‘para ver si califican’ antes del consentimiento—rompe secuencia consentimiento primero esperada bajo ACRP Standards.",
      },
      risk: {
        en: "Research procedures without consent; critical finding; ICH E3 eligibility narrative unreconstructable.",
        es: "Procedimientos investigación sin consentimiento; hallazgo crítico; narrativa elegibilidad ICH E3 irreconstruible.",
      },
      expectedLearnerResponse: {
        en: "Stop practice; IRB notice; retrain; consent-first workflow documented for monitors.",
        es: "Detener práctica; aviso CEI; reentrenar; flujo consentimiento primero documentado para monitores.",
      },
      relatedDimensions: ["R", "C"],
    },
    {
      errorId: "M8.E2",
      description: {
        en: "Subject randomized without mandatory imaging result; later imaging shows exclusion criterion—ineligible participant in analysis set per ICH E3 integrity rules.",
        es: "Sujeto randomizado sin resultado de imagen obligatoria; imagen posterior muestra criterio de exclusión—participante inelegible en conjunto análisis según reglas integridad ICH E3.",
      },
      risk: {
        en: "Safety and validity failure; major deviation package; possible data exclusion.",
        es: "Falla de seguridad y validez; paquete desviación mayor; posible exclusión de datos.",
      },
      expectedLearnerResponse: {
        en: "Immediate sponsor/medical; deviation documentation; pre-randomization checklist CAPA per ACRP quality expectations.",
        es: "Inmediato médico/patrocinador; documentación desviación; CAPA checklist pre-randomización según expectativas calidad ACRP.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M8.E3",
      description: {
        en: "Coordinators apply ±10-day windows ‘site habit’ though protocol says ±3—systematic non-compliance threatening ICH E3 endpoint comparability.",
        es: "Coordinadores aplican ventanas ±10 días ‘costumbre del sitio’ aunque protocolo dice ±3—incumplimiento sistemático que amenaza comparabilidad de endpoint ICH E3.",
      },
      risk: {
        en: "Repeated CtQ visit deviations; analysis bias; inspection major theme.",
        es: "Desviaciones repetidas visitas CtQ; sesgo análisis; tema mayor inspección.",
      },
      expectedLearnerResponse: {
        en: "SoA retraining; enforced scheduling rules; back-capture deviations; transparent monitor disclosure.",
        es: "Reentrenamiento SoA; reglas de agenda forzadas; recuperación desviaciones; divulgación transparente al monitor.",
      },
      relatedDimensions: ["O", "R"],
    },
    {
      errorId: "M8.E4",
      description: {
        en: "Five subjects screened in EMR/source but never entered on screening log—traceability gap violating ACRP Standards and monitor reconstruction.",
        es: "Cinco sujetos screening en EMR/fuente pero nunca ingresados en log de screening—brecha trazabilidad violando ACRP Standards y reconstrucción monitor.",
      },
      risk: {
        en: "Cannot reconstruct selection funnel; justice and integrity compromised.",
        es: "No se reconstruye embudo de selección; justicia e integridad comprometidas.",
      },
      expectedLearnerResponse: {
        en: "Reconcile with ALCOA+ late entry justification; real-time logging SOP; QA spot checks.",
        es: "Reconciliar con justificación entrada tardía ALCOA+; SOP registro en tiempo real; controles QA puntuales.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M8.E5",
      description: {
        en: "False-correct pattern: 8/15 subjects late 3–5 days ‘scheduling’; many deviations not logged; monitor flags pattern but site only fixes individual visits—no systemic CAPA, inconsistent with ACRP Standards leadership expectations.",
        es: "Patrón ‘parece correcto’: 8/15 sujetos tarde 3–5 días ‘agenda’; muchas desviaciones no registradas; monitor señala patrón pero sitio solo arregla visitas individuales—sin CAPA sistémica, inconsistente con expectativas de liderazgo ACRP Standards.",
      },
      risk: {
        en: "Quality system failure; ICH E3 study conduct narrative cannot be defended; audit escalation.",
        es: "Falla sistema calidad; narrativa conducta estudio ICH E3 indefendible; escalamiento auditoría.",
      },
      expectedLearnerResponse: {
        en: "Root-cause analysis; scheduling CAPA; quality committee metrics; sponsor alignment on endpoint protection.",
        es: "Análisis causa raíz; CAPA agenda; métricas comité calidad; alineación patrocinador en protección endpoint.",
      },
      relatedDimensions: ["O", "Q"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M8.EX1",
      name: {
        en: "Visit & Randomization Lab — ICH E3 integrity + ACRP Standards execution",
        es: "Laboratorio visitas y randomización — integridad ICH E3 + ejecución ACRP Standards",
      },
      scenario: {
        en: "40 minutes before monitoring on screening/randomization deviations and key visits. Subjects A/B/C: SoA with windows; ICFs, source, labs/imaging with timestamps; eligibility checklists (some incomplete/unsigned); EDC randomization timestamps; deviation log + monitor letter showing systemic lateness and a primary-endpoint visit out of window. Sponsor email minimizes endpoint timing as ‘minor’. Sources conflict by design.",
        es: "40 minutos antes de monitoría en desviaciones screening/randomización y visitas clave. Sujetos A/B/C: SoA con ventanas; ICF, fuente, labs/imagen con marcas; checklists elegibilidad (algunos incompletos/sin firma); marcas randomización EDC; log desviaciones + carta monitor con retraso sistémico y visita endpoint primario fuera de ventana. Correo patrocinador minimiza tiempo de endpoint como ‘menor’. Fuentes chocan a propósito.",
      },
      inputs: [
        { inputId: "M8.IN1", label: { en: "SoA + window summary", es: "SoA + resumen ventanas" }, inputKind: "pdf" },
        { inputId: "M8.IN2", label: { en: "ICF + source + eligibility checklist", es: "ICF + fuente + checklist elegibilidad" }, inputKind: "mock_ehr" },
        { inputId: "M8.IN3", label: { en: "EDC randomization + visit dates", es: "Randomización EDC + fechas visita" }, inputKind: "table" },
        { inputId: "M8.IN4", label: { en: "Deviation log + monitor letter excerpt", es: "Log desviaciones + extracto carta monitor" }, inputKind: "bundle" },
        { inputId: "M8.IN5", label: { en: "ICH E3 excerpt (CSR timing/assessment expectations)", es: "Extracto ICH E3 (expectativas tiempo/evaluación CSR)" }, inputKind: "pdf" },
        { inputId: "M8.IN6", label: { en: "ACRP Standards excerpt (CRC conduct)", es: "Extracto ACRP Standards (conducta CRC)" }, inputKind: "pdf" },
      ],
      learnerTask: {
        en: "Per subject: pre-screen creep? eligibility complete and documented before randomize-click? critical/primary visits in window with honest deviation capture? List near-misses, safety-vs-window conflicts, systemic lateness, primary-endpoint impact on analysis interpretability (ICH E3 framing). Classify severity (minor/major/critical) and impact (patient/data/compliance). CAPA must include structural fixes (pre-rand checklist, scheduling QA, deviation log discipline) consistent with ACRP Standards—not only case edits. Draft monitor/inspector summary (D3): risks, mitigation, and explicit reference to ICH E3 and ACRP Standards in at least one substantive paragraph each tied to issues in the packet.",
        es: "Por sujeto: ¿pre-screen creep? ¿elegibilidad completa y documentada antes del clic randomizar? ¿visitas críticas/primarias en ventana con captura honesta de desviaciones? Listar near-misses, conflictos seguridad vs ventana, retraso sistémico, impacto endpoint primario en interpretabilidad analítica (marco ICH E3). Clasificar severidad (menor/mayor/crítica) e impacto (paciente/datos/cumplimiento). CAPA debe incluir arreglos estructurales (checklist pre-rand, QA agenda, disciplina log desviaciones) consistente con ACRP Standards—no solo ediciones de caso. Borrador resumen monitor/inspector (D3): riesgos, mitigación y referencia explícita a ICH E3 y ACRP Standards en al menos un párrafo sustantivo cada uno vinculado a temas del paquete.",
      },
      deliverables: [
        { deliverableId: "M8.D1", label: { en: "Per-subject assessment matrix", es: "Matriz evaluación por sujeto" }, formatHint: "table" },
        { deliverableId: "M8.D2", label: { en: "Issue register + CAPA", es: "Registro hallazgos + CAPA" }, formatHint: "pdf" },
        {
          deliverableId: "M8.D3",
          label: {
            en: "Monitor/inspector summary (cite ICH E3 + ACRP Standards)",
            es: "Resumen monitor/inspector (citar ICH E3 + ACRP Standards)",
          },
          formatHint: "short_memo",
        },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M8.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M8.C1",
        description: {
          en: "Detects pre-screen creep, consent-before-procedure violations, and randomization near-misses; halts or escalates per protocol before irreversible steps; references ACRP Standards for protocol integrity.",
          es: "Detecta pre-screen creep, violaciones consentimiento-antes-procedimiento y near-miss de randomización; detiene o escala según protocolo antes de pasos irreversibles; referencia ACRP Standards para integridad del protocolo.",
        },
        points: 35,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Critical fail if treats randomization near-miss as non-critical, approves randomize-click with borderline eligibility unresolved, or ignores clear pre-consent protocol testing.",
          es: "Falla crítica si trata near-miss de randomización como no crítico, aprueba clic randomizar con elegibilidad límite sin resolver o ignora pruebas protocolo pre-consentimiento claras.",
        },
      },
      {
        criterionId: "M8.C2",
        description: {
          en: "Resolves window vs patient-safety conflicts with GCP-first reasoning, documented clinical rationale, and appropriate deviation/IRB/sponsor paths; avoids unsafe transport solely to preserve windows.",
          es: "Resuelve conflictos ventana vs seguridad del paciente con razonamiento GCP primero, justificación clínica documentada y vías desviación/CEI/patrocinador apropiadas; evita traslado inseguro solo para preservar ventanas.",
        },
        points: 25,
        mapsToDimensions: ["C", "R"],
        failCondition: {
          en: "Critical fail if forces unsafe on-site visit to preserve window without exploring alternatives or documentation.",
          es: "Falla crítica si fuerza visita presencial insegura para preservar ventana sin explorar alternativas o documentación.",
        },
      },
      {
        criterionId: "M8.C3",
        description: {
          en: "Identifies systemic out-of-window patterns and primary-endpoint timing risk; connects to ICH E3 analysis interpretability (exclusions, sensitivity analyses, power loss); rejects minimizing sponsor ‘minor’ framing without evidence.",
          es: "Identifica patrones sistémicos fuera de ventana y riesgo de tiempo de endpoint primario; conecta a interpretabilidad analítica ICH E3 (exclusiones, análisis sensibilidad, pérdida potencia); rechaza minimizar encuadre patrocinador ‘menor’ sin evidencia.",
        },
        points: 25,
        mapsToDimensions: ["Q", "O"],
        failCondition: {
          en: "Fail if minimizes primary-endpoint visit out of window or fails to connect repeated similar deviations to system failure.",
          es: "Falla si minimiza visita de endpoint primario fuera de ventana o no conecta desviaciones similares repetidas a falla del sistema.",
        },
      },
      {
        criterionId: "M8.C4",
        description: {
          en: "CAPA and monitor memo integrate M6/M4/M2/M5; proportional structural corrective actions; D3 meets citation requirement for ICH E3 and ACRP Standards.",
          es: "CAPA y memo monitor integran M6/M4/M2/M5; acciones correctivas estructurales proporcionadas; D3 cumple requisito de citar ICH E3 y ACRP Standards.",
        },
        points: 15,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Critical fail if only case-by-case fixes with no scheduling/process changes, memo omits endpoint data-integrity impact, or omits required ICH E3 / ACRP Standards citations in D3.",
          es: "Falla crítica si solo arreglos caso por caso sin cambios de agenda/proceso, memo omite impacto integridad datos del endpoint u omite citas requeridas ICH E3 / ACRP Standards en D3.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "O",
      weight: 0.34,
      aggregationKey: "soa_visit_execution_scheduling_window_discipline",
    },
    {
      dimension: "Q",
      weight: 0.28,
      aggregationKey: "randomization_eligibility_logs_endpoint_timing_integrity",
    },
    {
      dimension: "R",
      weight: 0.22,
      aggregationKey: "gcp_screening_consent_ich_e3_reporting_alignment",
    },
    {
      dimension: "C",
      weight: 0.16,
      aggregationKey: "patient_safety_acrp_standards_professional_conduct",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S1 stresses eligibility and screening traceability before randomization—documentation that must remain ICH E3-consistent. OSCE.S4 stresses visit-window and deviation discipline under monitoring pressure—the same ACRP Standards-aligned moves as this module.",
      es: "OSCE.S1 ejercita elegibilidad y trazabilidad de screening antes de randomización—documentación que debe permanecer consistente con ICH E3. OSCE.S4 ejercita ventanas de visita y disciplina de desviaciones bajo presión de monitoría—los mismos movimientos alineados ACRP Standards que este módulo.",
    },
    stationIds: ["OSCE.S1", "OSCE.S4"],
  },
  tags: ["operational", "regulatory", "audit_readiness", "bilingual", "flagship", "traceability", "data_integrity", "clinical_judgment"],
  bilingualNotes: {
    en: "Module anchors: ICH E3 (CSR structure and integrity of reported assessments/timing) and ACRP Standards (CRC professional conduct). Keep SoA, CSR, GCP, IRB, EDC, CtQ as EN tokens where common.",
    es: "Anclajes del módulo: ICH E3 (estructura CSR e integridad de evaluaciones/tiempos reportados) y ACRP Standards (conducta profesional CRC). Mantener SoA, CSR, GCP, IRB/CEI, EDC, CtQ como tokens EN donde sea habitual.",
  },
};
