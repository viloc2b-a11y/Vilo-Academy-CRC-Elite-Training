// src/curriculum-engine/data/modules/m15.ts

import type { Module } from "../../types";

/**
 * Module 15 — Patient recruitment & retention under FDA Diversity Action Plan commitments
 * and NIH Recruitment documentation discipline.
 *
 * Technical / Regulatory Execution: eight ordered sections; three guided cases (clear / incorrect / ambiguous);
 * audit-level practical exercise; rubric 100 = sum(criteria.points); passing 94.
 *
 * Anchors: FDA Diversity Action Plan (enrollment goals, subgroup accountability, ethical accrual design) and
 * NIH Recruitment (source documentation, integrity of outreach and screening narratives, traceable eligibility path).
 */
export const MODULE_M15: Module = {
  id: "M15",
  slug: "patient-recruitment-retention-real-conversion-funnels",
  internalName: "mod_15_recruitment_retention_fda_dap_nih_recruitment",
  category: "operations",
  status: "published",
  isOptional: false,
  isFlagship: true,
  mappedDimensions: ["O", "Q", "R", "C"],
  title: {
    en: "Module 15 — Patient Recruitment & Retention: FDA Diversity Action Plan & NIH Recruitment Execution",
    es: "Módulo 15 — Reclutamiento y retención: ejecución FDA Diversity Action Plan y NIH Recruitment",
  },
  objective: {
    en: "Execute conversion funnels (screened → randomized → endpoint) with daily KPI control while meeting FDA Diversity Action Plan enrollment commitments through ethical channel design, subgroup tracking, and corrective outreach—not cosmetic relabeling. Align prescreening vs regulatory screening boundaries, source registers, and monitor-ready narratives to NIH Recruitment expectations. Deploy retention as milestone protection; under sponsor pressure, deliver recovery plans that cite FDA Diversity Action Plan gaps and NIH Recruitment evidence without coercive tactics, undisclosed payments, or protocol violations.",
    es: "Ejecutar embudos de conversión (screened → randomized → endpoint) con control KPI diario cumpliendo compromisos FDA Diversity Action Plan mediante diseño ético de canales, seguimiento por subgrupo y alcance correctivo—no reetiquetado cosmético. Alinear límites pre-screening vs screening regulatorio, registros de fuente y narrativas listas monitor con expectativas NIH Recruitment. Desplegar retención como protección de hitos; bajo presión del patrocinador, entregar planes de recuperación que citen brechas FDA Diversity Action Plan y evidencia NIH Recruitment sin tácticas coercitivas, pagos no revelados ni violaciones de protocolo.",
  },
  outcomes: [
    {
      level: "L1",
      statements: [
        {
          en: "Explains how FDA Diversity Action Plan metrics connect to real enrollment operations (who is approached, how sources are documented, what is measured weekly).",
          es: "Explica cómo métricas FDA Diversity Action Plan conectan con operaciones reales de reclutamiento (a quién se aborda, cómo se documentan fuentes, qué se mide semanalmente).",
        },
        {
          en: "States NIH Recruitment expectations for traceable sources, honest pre-screen boundaries, and sponsor-facing narratives that match logs.",
          es: "Afirma expectativas NIH Recruitment para fuentes trazables, límites honestos de pre-screen y narrativas al patrocinador coherentes con registros.",
        },
      ],
    },
    {
      level: "L2",
      statements: [
        {
          en: "Implements funnel controls (pre-screen labs when allowed, PI eligibility gate, channel ROI) and a FDA Diversity Action Plan dashboard: subgroup accrual vs targets with owner actions.",
          es: "Implementa controles de embudo (labs pre-screen si permitido, gate elegibilidad PI, ROI canal) y tablero FDA Diversity Action Plan: seguimiento de captación por subgrupo vs metas con acciones con responsable.",
        },
        {
          en: "Corrects NIH Recruitment documentation defects (missing sources, inconsistent dates, inflated ‘community’ labels) before sponsor reporting.",
          es: "Corrige defectos documentales NIH Recruitment (fuentes faltantes, fechas inconsistentes, etiquetas ‘comunidad’ infladas) antes de reportar al patrocinador.",
        },
      ],
    },
    {
      level: "L3",
      statements: [
        {
          en: "Under milestone threat, produces a recovery plan that pairs immediate yield moves with FDA Diversity Action Plan integrity (no eligibility loosening disguised as diversity) and NIH Recruitment log updates.",
          es: "Bajo amenaza de hito, produce plan de recuperación que empareja movimientos inmediatos de yield con integridad FDA Diversity Action Plan (sin aflojar elegibilidad disfrazada de diversidad) y actualizaciones de registro NIH Recruitment.",
        },
        {
          en: "Classifies recruitment failures by severity (minor / major / critical), assigns impact (patient / data / compliance), and drafts CAPA plus a monitor-defensible statement.",
          es: "Clasifica fallas de reclutamiento por severidad (menor / mayor / crítica), asigna impacto (paciente / datos / cumplimiento) y redacta CAPA más declaración defendible ante monitor.",
        },
      ],
    },
  ],
  lessons: [
    {
      lessonId: "M15.S1",
      title: { en: "1) Module overview", es: "1) Resumen del módulo" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Set the bar: speed with FDA Diversity Action Plan accountability and NIH Recruitment traceability—not volume theater.",
        es: "Establecer la barra: velocidad con responsabilidad FDA Diversity Action Plan y trazabilidad NIH Recruitment—no teatro de volumen.",
      },
      keyPoints: [
        {
          en: "Graded on yield math, FDA Diversity Action Plan gap honesty, NIH Recruitment log discipline, retention triggers, and sponsor email quality.",
          es: "Se califica por matemática yield, honestidad brechas FDA Diversity Action Plan, disciplina registro NIH Recruitment, triggers retención y calidad correo patrocinador.",
        },
        {
          en: "Outputs: funnel memo + KPI (D1), budget table (D2), recovery email (D3) citing FDA Diversity Action Plan and NIH Recruitment where substantive.",
          es: "Salidas: memo embudo + KPI (D1), tabla presupuesto (D2), correo recuperación (D3) citando FDA Diversity Action Plan y NIH Recruitment donde sea sustantivo.",
        },
        {
          en: "Technical tokens stay EN (FDA Diversity Action Plan, NIH Recruitment, KPI, ROI, funnel, screen-fail, CAPA, OSCE).",
          es: "Tokens técnicos permanecen en inglés (FDA Diversity Action Plan, NIH Recruitment, KPI, ROI, funnel, screen-fail, CAPA, OSCE).",
        },
      ],
    },
    {
      lessonId: "M15.S2",
      title: { en: "2) Core concepts, workflow & error-prone areas", es: "2) Conceptos, flujo y zonas propensas a error" },
      lessonType: "reading",
      durationMinutes: 28,
      objective: {
        en: "Anchor yield, FDA Diversity Action Plan operations, NIH Recruitment documentation, real-world roles, and common failure modes.",
        es: "Anclar yield, operaciones FDA Diversity Action Plan, documentación NIH Recruitment, roles reales y modos de falla comunes.",
      },
      keyPoints: [
        {
          en: "FDA Diversity Action Plan: translate sponsor commitments into weekly subgroup tracking and funded outreach—not a slide deck stored in BD.",
          es: "FDA Diversity Action Plan: traducir compromisos patrocinador a seguimiento semanal por subgrupo y alcance financiado—no deck guardado en BD.",
        },
        {
          en: "NIH Recruitment: source registers and truthful recruitment narratives support audit; mismatches become major/critical findings fast.",
          es: "NIH Recruitment: registros de fuente y narrativas honestas de reclutamiento soportan auditoría; discrepancias se vuelven hallazgos mayor/crítico rápido.",
        },
        {
          en: "Yield = screened → randomized efficiency; ‘screen more’ without driver control burns FDA Diversity Action Plan credibility and budget.",
          es: "Yield = eficiencia screened → randomized; ‘screenear más’ sin control de drivers quema credibilidad FDA Diversity Action Plan y presupuesto.",
        },
        {
          en: "Real-world workflow — CRC: daily funnel KPI + retention flags + source log hygiene.",
          es: "Flujo real — CRC: KPI embudo diario + banderas retención + higiene registro fuentes.",
        },
        {
          en: "Real-world workflow — PI: eligibility gate before consent; no informal ‘trial eligibility’ tests outside protocol/SOC.",
          es: "Flujo real — PI: gate elegibilidad antes consentimiento; sin pruebas informales elegibilidad ensayo fuera protocolo/SOC.",
        },
        {
          en: "Real-world workflow — Sponsor: milestone pressure vs FDA Diversity Action Plan metrics; negotiate timelines with documented tradeoffs.",
          es: "Flujo real — Patrocinador: presión hitos vs métricas FDA Diversity Action Plan; negociar plazos con tradeoffs documentados.",
        },
        {
          en: "Real-world workflow — Monitor: cross-check claims vs NIH Recruitment logs and IRB-approved materials.",
          es: "Flujo real — Monitor: contrastar afirmaciones vs registros NIH Recruitment y materiales aprobados CEI.",
        },
        {
          en: "Error-prone 1 — Treat FDA Diversity Action Plan as marketing language only; no funded community partners or metrics owners.",
          es: "Propensa 1 — Tratar FDA Diversity Action Plan solo como lenguaje marketing; sin socios comunidad financiados ni dueños de métricas.",
        },
        {
          en: "Error-prone 2 — NIH Recruitment logs lag reality; sponsor reports show enrollment that charts cannot support.",
          es: "Propensa 2 — Registros NIH Recruitment van atrasados vs realidad; reportes patrocinador muestran inclusión que gráficos no soportan.",
        },
        {
          en: "Error-prone 3 — Loosen inclusion criteria or ‘interpret’ labs to hit subgroup numbers (compliance-critical).",
          es: "Propensa 3 — Aflojar criterios inclusión o ‘interpretar’ labs para pegar números subgrupo (crítico cumplimiento).",
        },
        {
          en: "Error-prone 4 — Retention ignored until withdrawal; burden complaints treated as personality issues.",
          es: "Propensa 4 — Retención ignorada hasta retiro; quejas de carga tratadas como tema de personalidad.",
        },
        {
          en: "Error-prone 5 — Channel spend without ROI + cycle-time; FDA Diversity Action Plan outreach starved while paid ads inflate screens.",
          es: "Propensa 5 — Gasto canal sin ROI + ciclo; alcance FDA Diversity Action Plan hambreado mientras anuncios pagan inflan screens.",
        },
        {
          en: "Cross-links: M7 funnel ops; M5 feasibility promises; M14 budget reality for outreach staffing.",
          es: "Vínculos: M7 ops embudo; M5 promesas viabilidad; M14 realidad presupuesto para personal alcance.",
        },
      ],
    },
    {
      lessonId: "M15.S3.GP1",
      title: { en: "3) Guided practice — Scenario 1 (clear)", es: "3) Práctica guiada — Escenario 1 (claro)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Black women enrollment is 6% vs FDA Diversity Action Plan target 12%. Screen-fails are mostly labs. Sponsor asks for ‘more screens.’ What CRC sees: yield problem masked as volume problem. Decision: pre-lab + PI gate + targeted community outreach with documented NIH Recruitment sources.",
        es: "Inclusión mujeres negras 6% vs meta FDA Diversity Action Plan 12%. Screen-fails mayormente labs. Patrocinador pide ‘más screens’. Qué ve el CRC: problema yield enmascarado como volumen. Decisión: pre-lab + gate PI + alcance comunitario dirigido con fuentes NIH Recruitment documentadas.",
      },
      keyPoints: [
        {
          en: "How to think: separate subgroup gap (FDA Diversity Action Plan) from conversion loss (labs); each needs different owners and metrics.",
          es: "Cómo pensar: separar brecha subgrupo (FDA Diversity Action Plan) de pérdida conversión (labs); cada una necesita responsables y métricas distintos.",
        },
        {
          en: "Correct move: weekly dashboard row for subgroup + lab-fail rate + source list updates in NIH Recruitment register.",
          es: "Movimiento correcto: fila tablero semanal subgrupo + tasa falla lab + actualizaciones lista fuentes en registro NIH Recruitment.",
        },
        {
          en: "Why it matters: protects patients from unnecessary screening and protects the site from misrepresentation findings.",
          es: "Por qué importa: protege pacientes de screening innecesario y protege el sitio de hallazgos por tergiversación.",
        },
      ],
    },
    {
      lessonId: "M15.S3.GP2",
      title: { en: "3) Guided practice — Scenario 2 (incorrect)", es: "3) Práctica guiada — Escenario 2 (incorrecto)" },
      lessonType: "case",
      durationMinutes: 14,
      objective: {
        en: "Coordinator posts: ‘Earn $500 for referring a friend into our trial today.’ BD says it will fix accrual overnight. What CRC sees: incentive-driven referral language. This is an incorrect ‘shortcut’.",
        es: "Coordinador publica: ‘Gana $500 por referir amigo a nuestro ensayo hoy.’ BD dice que arreglará la captación de la noche a la mañana. Qué ve el CRC: lenguaje incentivo referidos. Es atajo incorrecto.",
      },
      keyPoints: [
        {
          en: "Incorrect: undisclosed or coercive incentives; destroys NIH Recruitment integrity and triggers IRB/legal escalation paths.",
          es: "Incorrecto: incentivos no revelados o coercitivos; destruye integridad NIH Recruitment y dispara escalamiento CEI/legal.",
        },
        {
          en: "Correct: IRB-approved recruitment materials, transparent stipend rules if any, documented sources, no predatory social tactics.",
          es: "Correcto: materiales reclutamiento aprobados CEI, reglas transparentes estipendio si aplica, fuentes documentadas, sin tácticas sociales predatorias.",
        },
        {
          en: "FDA Diversity Action Plan is not permission to buy demographics; it requires ethical design and measurement.",
          es: "FDA Diversity Action Plan no es permiso para comprar demografía; exige diseño ético y medición.",
        },
      ],
    },
    {
      lessonId: "M15.S3.GP3",
      title: { en: "3) Guided practice — Scenario 3 (ambiguous)", es: "3) Práctica guiada — Escenario 3 (ambiguo)" },
      lessonType: "case",
      durationMinutes: 16,
      objective: {
        en: "Sponsor cuts community outreach budget 40% to fund more digital ads that randomize faster for Q1 milestone. FDA Diversity Action Plan relies on community partners. No single clean answer.",
        es: "Patrocinador recorta presupuesto alcance comunitario 40% para financiar más anuncios digitales que randomizan más rápido para hito Q1. FDA Diversity Action Plan depende de socios comunidad. No hay respuesta única limpia.",
      },
      keyPoints: [
        {
          en: "How to think: quantify tradeoff—subgroup trajectory vs milestone; propose phased split + written sponsor acknowledgment of FDA Diversity Action Plan risk.",
          es: "Cómo pensar: cuantificar tradeoff—trayectoria subgrupo vs hito; proponer reparto faseado + reconocimiento escrito patrocinador de riesgo FDA Diversity Action Plan.",
        },
        {
          en: "NIH Recruitment angle: document budget change and recruitment strategy amendment pathway; do not silently keep old narrative.",
          es: "Ángulo NIH Recruitment: documentar cambio presupuesto y vía enmienda estrategia reclutamiento; no mantener en silencio narrativa vieja.",
        },
        {
          en: "Safe default: preserve minimum viable community touchpoints + measurable subgroup tracking; escalate if DAP becomes performative.",
          es: "Default seguro: preservar puntos mínimos viables comunidad + seguimiento subgrupo medible; escalar si DAP se vuelve performativo.",
        },
      ],
    },
    {
      lessonId: "M15.S4",
      title: { en: "4) Practical exercise (time pressure + real outputs)", es: "4) Ejercicio práctico (presión + salidas reales)" },
      lessonType: "worksheet",
      durationMinutes: 40,
      objective: {
        en: "In 40 minutes, stabilize a Week-5 milestone crisis while preserving FDA Diversity Action Plan credibility and NIH Recruitment defensibility.",
        es: "En 40 minutos, estabilizar crisis hito Semana 5 preservando credibilidad FDA Diversity Action Plan y defendibilidad NIH Recruitment.",
      },
      keyPoints: [
        {
          en: "Deliverables: D1 memo (yield + KPI + subgroup gap + one NIH Recruitment log fix), D2 budget table, D3 email citing FDA Diversity Action Plan and NIH Recruitment.",
          es: "Entregables: D1 memo (yield + KPI + brecha subgrupo + una corrección registro NIH Recruitment), D2 tabla presupuesto, D3 correo citando FDA Diversity Action Plan y NIH Recruitment.",
        },
        {
          en: "Fail if you loosen eligibility, invent sources, omit daily KPI, or promise accrual without drivers.",
          es: "Fallo si aflojas elegibilidad, inventas fuentes, omites KPI diario o prometes aumentar la captación sin drivers.",
        },
      ],
    },
    {
      lessonId: "M15.S5",
      title: { en: "5) Scoring matrix & audit perspective", es: "5) Matriz de puntuación y perspectiva auditoría" },
      lessonType: "reading",
      durationMinutes: 12,
      objective: {
        en: "Align grading with M15.RUB1; connect recruitment shortcuts to major/critical monitor findings.",
        es: "Alinear calificación con M15.RUB1; conectar atajos reclutamiento a hallazgos monitor mayor/crítico.",
      },
      keyPoints: [
        {
          en: "Rubric: 100 points, pass ≥94; critical pathway on eligibility integrity, NIH Recruitment truthfulness, and coercive incentive patterns.",
          es: "Rúbrica: 100 puntos, aprobar ≥94; vía crítica en integridad elegibilidad, veracidad NIH Recruitment y patrones incentivo coercitivo.",
        },
        {
          en: "Monitor questions: ‘Show source register entries for last 20 consents’; ‘Show FDA Diversity Action Plan tracking sheet vs actuals’.",
          es: "Preguntas monitor: ‘Mostrar entradas registro fuentes últimos 20 consentimientos’; ‘Mostrar hoja seguimiento FDA Diversity Action Plan vs reales’.",
        },
        {
          en: "CAPA expectation: owner, date, metric, and evidence of NIH Recruitment log correction when documentation drifted.",
          es: "Expectativa CAPA: responsable, fecha, métrica y evidencia corrección registro NIH Recruitment cuando documentación derivó.",
        },
      ],
    },
    {
      lessonId: "M15.S6",
      title: { en: "6) Answer framework (elite outputs + fail patterns)", es: "6) Marco de respuesta (salidas élite + patrones de falla)" },
      lessonType: "recap",
      durationMinutes: 12,
      objective: {
        en: "Consolidate elite sponsor emails that pair milestone recovery with FDA Diversity Action Plan and NIH Recruitment accountability.",
        es: "Consolidar correos élite al patrocinador que emparejan recuperación de hito con responsabilidad FDA Diversity Action Plan y NIH Recruitment.",
      },
      keyPoints: [
        {
          en: "Elite email: current yield + lab/eligibility split + subgroup row + 3 immediate actions + daily KPI + budget move + FDA Diversity Action Plan / NIH Recruitment citations where substantive.",
          es: "Correo élite: yield actual + split lab/elegibilidad + fila subgrupo + 3 acciones inmediatas + KPI diario + movimiento presupuesto + citas FDA Diversity Action Plan / NIH Recruitment donde sea sustantivo.",
        },
        {
          en: "Fail patterns: ‘screen more’ only; DAP slides without operations; log backfill the night before monitor visit.",
          es: "Patrones falla: solo ‘screenear más’; slides DAP sin operaciones; rellenar registro noche antes visita monitor.",
        },
      ],
    },
    {
      lessonId: "M15.S7",
      title: { en: "7) Cross-module links", es: "7) Enlaces entre módulos" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Connect recruitment integrity to feasibility, budgeting, and inspection posture.",
        es: "Conectar integridad reclutamiento a viabilidad, presupuesto y postura inspección.",
      },
      keyPoints: [
        {
          en: "M5: OSCE.S6 sponsor pressure meets M15 execution—do not promise accrual the budget cannot staff.",
          es: "M5: presión patrocinador OSCE.S6 encuentra ejecución M15—no prometer captación que presupuesto no puede dotar.",
        },
        {
          en: "M7: adjacent funnel discipline; M15 adds FDA Diversity Action Plan + NIH Recruitment regulatory framing.",
          es: "M7: disciplina embudo adyacente; M15 añade marco regulatorio FDA Diversity Action Plan + NIH Recruitment.",
        },
        {
          en: "M14: outreach and community staffing require negotiated dollars—silent cuts undermine FDA Diversity Action Plan execution.",
          es: "M14: personal alcance y comunidad requieren dólares negociados—recortes silenciosos socavan ejecución FDA Diversity Action Plan.",
        },
      ],
    },
    {
      lessonId: "M15.S8",
      title: { en: "8) Failure impact", es: "8) Impacto de fallas" },
      lessonType: "reading",
      durationMinutes: 10,
      objective: {
        en: "Make consequences explicit for patients, FDA Diversity Action Plan credibility, and NIH Recruitment enforcement risk.",
        es: "Hacer explícitas consecuencias para pacientes, credibilidad FDA Diversity Action Plan y riesgo NIH Recruitment.",
      },
      keyPoints: [
        {
          en: "Patients: unnecessary screens, coercive messaging, or lost trust increase dropout and safety reporting noise.",
          es: "Pacientes: screens innecesarios, mensajes coercitivos o pérdida confianza aumentan abandono y ruido reporte seguridad.",
        },
        {
          en: "Compliance: NIH Recruitment misrepresentation can become institutional reputational damage beyond one trial.",
          es: "Cumplimiento: tergiversación NIH Recruitment puede volverse daño reputacional institucional más allá de un ensayo.",
        },
        {
          en: "Sponsor relationship: FDA Diversity Action Plan failures at site level can trigger central oversight and enrollment caps.",
          es: "Relación patrocinador: fallas FDA Diversity Action Plan a nivel sitio pueden disparar supervisión central y cupos inclusión.",
        },
      ],
    },
  ],
  errorLibrary: [
    {
      errorId: "M15.E1",
      description: {
        en: "Obvious: ‘Screen more’ response to low yield while FDA Diversity Action Plan subgroup gaps widen and NIH Recruitment sources stay generic.",
        es: "Obvia: respuesta ‘screenear más’ ante bajo yield mientras brechas subgrupo FDA Diversity Action Plan se ensanchan y fuentes NIH Recruitment permanecen genéricas.",
      },
      risk: {
        en: "Burned budget, milestone slip, and monitor-ready evidence that diversity commitments were not operationalized.",
        es: "Presupuesto quemado, rezago hito y evidencia lista monitor de que compromisos diversidad no se operacionalizaron.",
      },
      expectedLearnerResponse: {
        en: "Target fail drivers; publish weekly FDA Diversity Action Plan actual vs target; fix NIH Recruitment log granularity (named program/partner, dates).",
        es: "Atacar drivers de falla; publicar semanal FDA Diversity Action Plan real vs meta; corregir granularidad registro NIH Recruitment (programa/socio nombrado, fechas).",
      },
      relatedDimensions: ["O", "Q"],
    },
    {
      errorId: "M15.E2",
      description: {
        en: "Subtle: NIH Recruitment register updated only at month-end while daily sponsor calls claim real-time accrual leadership.",
        es: "Sutil: registro NIH Recruitment actualizado solo a fin de mes mientras llamadas diarias patrocinador afirman liderazgo de captación en tiempo real.",
      },
      risk: {
        en: "Traceability gap; sponsor/IRB narrative contradicts contemporaneous records.",
        es: "Brecha trazabilidad; narrativa patrocinador/CEI contradice registros contemporáneos.",
      },
      expectedLearnerResponse: {
        en: "Move to weekly log reconciliation; align talking points to verifiable NIH Recruitment entries before external updates.",
        es: "Mover a conciliación semanal registro; alinear puntos de discurso a entradas NIH Recruitment verificables antes de actualizaciones externas.",
      },
      relatedDimensions: ["R", "Q"],
    },
    {
      errorId: "M15.E3",
      description: {
        en: "Looks correct but wrong: aggregate FDA Diversity Action Plan charts look ‘green’ because denominators exclude screen-fails from subgroup math.",
        es: "Parece correcto pero está mal: gráficos agregados FDA Diversity Action Plan lucen ‘verdes’ porque denominadores excluyen screen-fails de matemática subgrupo.",
      },
      risk: {
        en: "False assurance to sponsor; ethical and statistical integrity failure if discovered.",
        es: "Falsa seguridad al patrocinador; falla integridad ética y estadística si se descubre.",
      },
      expectedLearnerResponse: {
        en: "Define transparent denominators; show funnel + subgroup jointly; correct charts and disclose methodology change.",
        es: "Definir denominadores transparentes; mostrar embudo + subgrupo juntos; corregir gráficos y divulgar cambio metodología.",
      },
      relatedDimensions: ["Q", "R"],
    },
    {
      errorId: "M15.E4",
      description: {
        en: "Ambiguous: sponsor requests faster randomization by narrowing outreach to historically fastest zip codes—FDA Diversity Action Plan community arm starved.",
        es: "Ambigua: patrocinador pide randomización más rápida estrechando alcance a códigos postales históricamente más rápidos—brazo comunidad FDA Diversity Action Plan hambreado.",
      },
      risk: {
        en: "Accrual speed today vs enrollment equity commitments tomorrow; possible protocol amendment or written risk acceptance needed.",
        es: "Velocidad de captación hoy vs compromisos de equidad e inclusión mañana; posible enmienda protocolo o aceptación escrita riesgo necesaria.",
      },
      expectedLearnerResponse: {
        en: "Quantify subgroup impact; propose phased budget; document sponsor decision on FDA Diversity Action Plan risk; update NIH Recruitment strategy notes.",
        es: "Cuantificar impacto subgrupo; proponer presupuesto faseado; documentar decisión patrocinador sobre riesgo FDA Diversity Action Plan; actualizar notas estrategia NIH Recruitment.",
      },
      relatedDimensions: ["O", "C"],
    },
    {
      errorId: "M15.E5",
      description: {
        en: "Retention failure pattern: burden complaints logged as ‘patient noncompliance’ with no NIH Recruitment-consistent follow-up documentation.",
        es: "Patrón falla retención: quejas de carga registradas como ‘incumplimiento paciente’ sin documentación seguimiento consistente NIH Recruitment.",
      },
      risk: {
        en: "Dropouts before endpoints; sponsor payment holds; GCP credibility loss.",
        es: "Abandonos antes endpoints; retenciones pago patrocinador; pérdida credibilidad GCP.",
      },
      expectedLearnerResponse: {
        en: "Deploy burden reduction protocol; document patient-centered plan; escalate if safety-driven; tie retention KPI to milestone protection.",
        es: "Desplegar protocolo reducción carga; documentar plan centrado paciente; escalar si impulsado por seguridad; atar KPI retención a protección hitos.",
      },
      relatedDimensions: ["C", "O"],
    },
  ],
  practicalExercises: [
    {
      exerciseId: "M15.EX1",
      name: { en: "Milestone recovery with FDA Diversity Action Plan + NIH Recruitment defense", es: "Recuperación hito con defensa FDA Diversity Action Plan + NIH Recruitment" },
      scenario: {
        en: "Week 5: randomized 6/12 for Q1 milestone EOW. Sponsor email threatens 25% payment hold + enrollment cap. Funnel shows low yield; lab and eligibility fails dominate; two retention dropouts for burden. FDA Diversity Action Plan tracker shows Black/Hispanic enrollment below trajectory. NIH Recruitment source register has 9 missing source fields across last 14 consents. Sponsor BD suggests ‘double screens this weekend’ and asks you to ‘smooth the tracker’ for Monday governance call.",
        es: "Semana 5: 6/12 randomizados para hito Q1 fin de semana. Correo patrocinador amenaza retención pago 25% + cupo. Embudo muestra bajo yield; fallas lab y elegibilidad dominan; dos abandonos retención por carga. Tablero FDA Diversity Action Plan muestra inclusión Black/Hispanic bajo trayectoria. Registro fuentes NIH Recruitment tiene 9 campos fuente faltantes en últimos 14 consentimientos. BD patrocinador sugiere ‘doblar screens este fin de semana’ y pide ‘alisar tablero’ para llamada gobernanza lunes.",
      },
      inputs: [
        { inputId: "M15.IN1", label: { en: "Recruitment funnel snapshot + yield math", es: "Snapshot embudo reclutamiento + matemática yield" }, inputKind: "table" },
        { inputId: "M15.IN2", label: { en: "FDA Diversity Action Plan enrollment tracker (targets vs actuals)", es: "Tablero inclusión FDA Diversity Action Plan (metas vs reales)" }, inputKind: "table" },
        { inputId: "M15.IN3", label: { en: "NIH Recruitment source register excerpt (last consents)", es: "Extracto registro fuentes NIH Recruitment (últimos consentimientos)" }, inputKind: "table" },
        { inputId: "M15.IN4", label: { en: "Budget remaining + channel ROI + cycle time", es: "Presupuesto restante + ROI canal + tiempo ciclo" }, inputKind: "table" },
        { inputId: "M15.IN5", label: { en: "Retention flags + dropout notes", es: "Banderas retención + notas abandono" }, inputKind: "mock_ehr" },
      ],
      learnerTask: {
        en: "OSCE-level output: (1) Classify sponsor ‘smooth the tracker’ request as minor/major/critical risk with impact (patient/data/compliance). (2) Write yield target (%), one daily KPI, and a 3-line fail-reduction plan that addresses labs/eligibility without loosening criteria. (3) Allocate remaining budget with ROI + cycle-time justification. (4) List one NIH Recruitment log CAPA item with owner + due date. (5) Draft sponsor recovery email (D3) that explicitly cites FDA Diversity Action Plan and NIH Recruitment where substantive, links actions to the threatened milestone, and refuses documentation gaming. Fail if: no severity/impact, no daily KPI, no FDA Diversity Action Plan reference in D3, no NIH Recruitment reference in D3, proposes eligibility loosening, or silent tracker edits.",
        es: "Salida tipo OSCE: (1) Clasificar petición patrocinador ‘alisar tablero’ como riesgo menor/mayor/crítico con impacto (paciente/datos/cumplimiento). (2) Escribir meta yield (%), un KPI diario y plan 3 líneas reducción fallas que ataque labs/elegibilidad sin aflojar criterios. (3) Asignar presupuesto restante con justificación ROI + tiempo ciclo. (4) Listar un ítem CAPA registro NIH Recruitment con responsable + fecha límite. (5) Redactar correo recuperación patrocinador (D3) citando explícitamente FDA Diversity Action Plan y NIH Recruitment donde sea sustantivo, vinculando acciones al hito amenazado y rechazando juego documental. Fallo si: no hay severidad/impacto, no hay KPI diario, no hay referencia FDA Diversity Action Plan en D3, no hay referencia NIH Recruitment en D3, propone aflojar criterios o ediciones silenciosas del tablero.",
      },
      deliverables: [
        { deliverableId: "M15.D1", label: { en: "Risk classification + yield/KPI memo + NIH Recruitment CAPA line", es: "Clasificación riesgo + memo yield/KPI + línea CAPA NIH Recruitment" }, formatHint: "short_memo" },
        { deliverableId: "M15.D2", label: { en: "Budget allocation table", es: "Tabla asignación presupuesto" }, formatHint: "table" },
        { deliverableId: "M15.D3", label: { en: "Sponsor recovery email (FDA Diversity Action Plan + NIH Recruitment)", es: "Correo recuperación patrocinador (FDA Diversity Action Plan + NIH Recruitment)" }, formatHint: "email" },
      ],
    },
  ],
  assessmentRubric: {
    rubricId: "M15.RUB1",
    totalPoints: 100,
    passingPoints: 94,
    criteria: [
      {
        criterionId: "M15.C1",
        description: {
          en: "Diagnoses funnel loss drivers (labs vs eligibility vs consent), sets a defensible yield target, and defines one daily KPI tied to FDA Diversity Action Plan subgroup trajectory—not volume alone.",
          es: "Diagnostica drivers pérdida embudo (labs vs elegibilidad vs consentimiento), fija meta yield defendible y define un KPI diario atado a trayectoria subgrupo FDA Diversity Action Plan—no solo volumen.",
        },
        points: 35,
        mapsToDimensions: ["O", "Q"],
        failCondition: {
          en: "Critical fail: proposes only ‘screen more’, omits daily KPI, or loosens eligibility/consent pathways to hit accrual.",
          es: "Fallo crítico: propone solo ‘screenear más’, omite KPI diario o afloja vías elegibilidad/consentimiento para inflar la captación.",
        },
      },
      {
        criterionId: "M15.C2",
        description: {
          en: "Defends NIH Recruitment integrity: rejects tracker smoothing / backfill games; specifies log CAPA with accountable owner and evidence-based fields.",
          es: "Defiende integridad NIH Recruitment: rechaza alisado tablero / juegos relleno; especifica CAPA registro con responsable y campos basados evidencia.",
        },
        points: 25,
        mapsToDimensions: ["R", "Q"],
        failCondition: {
          en: "Critical fail: agrees to undisclosed log edits, omits NIH Recruitment CAPA, or misrepresents sources to match sponsor slides.",
          es: "Fallo crítico: acepta ediciones registro no reveladas, omite CAPA NIH Recruitment o tergiversa fuentes para coincidir slides patrocinador.",
        },
      },
      {
        criterionId: "M15.C3",
        description: {
          en: "Deploys retention intervention before withdrawal; documents burden reduction with patient-centered follow-up; links to endpoint protection.",
          es: "Despliega intervención retención antes del retiro; documenta reducción carga con seguimiento centrado paciente; vincula a protección endpoint.",
        },
        points: 25,
        mapsToDimensions: ["C", "O"],
        failCondition: {
          en: "Fail if: treats dropout risk as ‘noncompliance’ only with no intervention plan or waits until withdrawal.",
          es: "Fallo si: trata riesgo abandono solo como ‘incumplimiento’ sin plan intervención o espera hasta el retiro.",
        },
      },
      {
        criterionId: "M15.C4",
        description: {
          en: "Sponsor email is concise, data-driven, milestone-linked, and explicitly references FDA Diversity Action Plan and NIH Recruitment where substantive—no overpromising.",
          es: "Correo al patrocinador es conciso, basado en datos, vinculado a hito y referencia explícitamente FDA Diversity Action Plan y NIH Recruitment donde sea sustantivo—sin prometer de más.",
        },
        points: 15,
        mapsToDimensions: ["R", "O"],
        failCondition: {
          en: "Fail if: D3 omits FDA Diversity Action Plan or NIH Recruitment, lacks milestone linkage, or proposes actions that cannot move KPIs within two weeks.",
          es: "Fallo si: D3 omite FDA Diversity Action Plan o NIH Recruitment, carece vínculo hito o propone acciones que no mueven KPIs en dos semanas.",
        },
      },
    ],
  },
  scorecardContribution: [
    {
      dimension: "O",
      weight: 0.34,
      aggregationKey: "fda_dap_nih_recruitment_funnel_execution_subgroup_tracking_and_daily_control",
    },
    {
      dimension: "Q",
      weight: 0.28,
      aggregationKey: "yield_kpi_math_channel_roi_cycle_time_and_denominator_integrity",
    },
    {
      dimension: "R",
      weight: 0.2,
      aggregationKey: "sponsor_governance_defense_truthful_nih_recruitment_narratives_and_dap_accountability",
    },
    {
      dimension: "C",
      weight: 0.18,
      aggregationKey: "retention_burden_reduction_dropout_prevention_and_endpoint_protection",
    },
  ],
  capstoneConnection: {
    summary: {
      en: "OSCE.S6 pressures milestone realism; OSCE.S1 tests traceable eligibility—pair them with this module’s FDA Diversity Action Plan metrics and NIH Recruitment log discipline when accrual is on the line.",
      es: "OSCE.S6 presiona realismo de hitos; OSCE.S1 prueba elegibilidad trazable—emparejarlos con métricas FDA Diversity Action Plan y disciplina registro NIH Recruitment de este módulo cuando la captación está en juego.",
    },
    stationIds: ["OSCE.S6", "OSCE.S1"],
  },
  tags: ["operational", "audit_readiness", "data_integrity", "clinical_judgment", "regulatory", "flagship", "bilingual"],
  bilingualNotes: {
    en: "Module anchors: FDA Diversity Action Plan (enrollment equity commitments and operational metrics) and NIH Recruitment (source documentation and truthful recruitment narratives). Keep KPI, ROI, funnel, screen-fail, CAPA, OSCE as EN tokens; gloss once in ES if needed.",
    es: "Anclajes del módulo: FDA Diversity Action Plan (compromisos equidad inclusión y métricas operativas) y NIH Recruitment (documentación de fuentes y narrativas honestas de reclutamiento). Mantener KPI, ROI, funnel, screen-fail, CAPA, OSCE como tokens EN; glosar una vez en ES si hace falta.",
  },
};
