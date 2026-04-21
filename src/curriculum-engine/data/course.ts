// src/curriculum-engine/data/course.ts

import type { Course, CourseMetadata, Module, ModuleRegistryItem } from "../types";
import { COMPETENCY_DIMENSIONS } from "../types";
import { CERTIFICATION_RULE_V1, COURSE_SCORECARD_MODEL } from "./scorecard";
import { MODULE_M1 } from "./modules/m1";
import { MODULE_M2 } from "./modules/m2";
import { MODULE_M3 } from "./modules/m3";
import { MODULE_M4 } from "./modules/m4";
import { MODULE_M5 } from "./modules/m5";
import { MODULE_M6 } from "./modules/m6";
import { MODULE_M7 } from "./modules/m7";
import { MODULE_M8 } from "./modules/m8";
import { MODULE_M9 } from "./modules/m9";
import { MODULE_M10 } from "./modules/m10";
import { MODULE_M11 } from "./modules/m11";
import { MODULE_M12 } from "./modules/m12";
import { MODULE_M13 } from "./modules/m13";
import { MODULE_M14 } from "./modules/m14";
import { MODULE_M15 } from "./modules/m15";
import { MODULE_M16 } from "./modules/m16";

export const CRC_ELITE_METADATA: CourseMetadata = {
  courseId: "vilo_crc_elite",
  schemaVersion: "1.0.1",
  courseVersion: "2026.04.14",
  title: {
    en: "Vilo Academy: CRC Elite Training",
    es: "Vilo Academy: Formación élite para CRC",
  },
  subtitle: {
    en: "Competency-based curriculum engine (R/O/C/Q × L1–L3) for clinical research coordinators.",
    es: "Motor de currículo por competencias (R/O/C/Q × L1–L3) para coordinadores de investigación clínica.",
  },
  description: {
    en: "M9 is the investigational-product lane—pharmacy handoffs, cold chain, excursions, and audit-grade quantity accountability. ALCOA+ is cross-cutting documentation discipline: anchored in M4 (master control logs & source-aligned corrections) and assessed under pressure at capstone station OSCE.S5 (source documentation & ALCOA+ repair)—not a separate ‘ALCOA-only’ pre-capstone module.",
    es: "M9 es el carril de producto investigacional—traspasos con farmacia, cadena de frío, excursiones y contabilidad de cantidades nivel auditoría. ALCOA+ es disciplina documental transversal: anclada en M4 (logs maestros de control y correcciones alineadas a fuente) y evaluada bajo presión en la estación capstone OSCE.S5 (documentación fuente y reparación ALCOA+)—no es un módulo pre-capstone exclusivo de ‘solo ALCOA’.",
  },
  defaultLocales: ["en", "es"],
  instructionalModel: {
    dimensions: [...COMPETENCY_DIMENSIONS],
    dimensionLabels: {
      R: { en: "Regulatory", es: "Regulatorio" },
      O: { en: "Operational", es: "Operacional" },
      C: { en: "Clinical", es: "Clínico" },
      Q: { en: "Quality / Data", es: "Calidad / Datos" },
    },
    levelLabels: {
      L1: { en: "Understand", es: "Comprender" },
      L2: { en: "Execute", es: "Ejecutar" },
      L3: {
        en: "Detect errors / Exercise judgment",
        es: "Detectar errores / Ejercer juicio clínico-operativo",
      },
    },
  },
  tags: ["bilingual", "audit_readiness", "clinical_judgment", "regulatory", "documentation", "safety"],
};

export const CRC_ELITE_MODULE_REGISTRY: readonly ModuleRegistryItem[] = [
  {
    id: "M1",
    slug: MODULE_M1.slug,
    title: MODULE_M1.title,
    category: "foundations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M1.mappedDimensions],
    sortOrder: 1,
  },
  {
    id: "M2",
    slug: MODULE_M2.slug,
    title: MODULE_M2.title,
    category: "foundations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M2.mappedDimensions],
    sortOrder: 2,
  },
  {
    id: "M3",
    slug: MODULE_M3.slug,
    title: MODULE_M3.title,
    category: "foundations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M3.mappedDimensions],
    sortOrder: 3,
  },
  {
    id: "M4",
    slug: MODULE_M4.slug,
    title: MODULE_M4.title,
    category: "operations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M4.mappedDimensions],
    sortOrder: 4,
  },
  {
    id: "M5",
    slug: MODULE_M5.slug,
    title: MODULE_M5.title,
    category: "operations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M5.mappedDimensions],
    sortOrder: 5,
  },
  {
    id: "M6",
    slug: MODULE_M6.slug,
    title: MODULE_M6.title,
    category: "foundations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M6.mappedDimensions],
    sortOrder: 6,
  },
  {
    id: "M7",
    slug: MODULE_M7.slug,
    title: MODULE_M7.title,
    category: "operations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M7.mappedDimensions],
    sortOrder: 7,
  },
  {
    id: "M8",
    slug: MODULE_M8.slug,
    title: MODULE_M8.title,
    category: "operations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M8.mappedDimensions],
    sortOrder: 8,
  },
  {
    id: "M9",
    slug: MODULE_M9.slug,
    title: MODULE_M9.title,
    category: "operations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M9.mappedDimensions],
    sortOrder: 9,
  },
  {
    id: "M10",
    slug: MODULE_M10.slug,
    title: MODULE_M10.title,
    category: "quality",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M10.mappedDimensions],
    sortOrder: 10,
  },
  {
    id: "M11",
    slug: MODULE_M11.slug,
    title: MODULE_M11.title,
    category: "quality",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M11.mappedDimensions],
    sortOrder: 11,
  },
  {
    id: "M12",
    slug: MODULE_M12.slug,
    title: MODULE_M12.title,
    category: "quality",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M12.mappedDimensions],
    sortOrder: 12,
  },
  {
    id: "M13",
    slug: MODULE_M13.slug,
    title: MODULE_M13.title,
    category: "operations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M13.mappedDimensions],
    sortOrder: 13,
  },
  {
    id: "M14",
    slug: MODULE_M14.slug,
    title: MODULE_M14.title,
    category: "operations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M14.mappedDimensions],
    sortOrder: 14,
  },
  {
    id: "M15",
    slug: MODULE_M15.slug,
    title: MODULE_M15.title,
    category: "operations",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M15.mappedDimensions],
    sortOrder: 15,
  },
  {
    id: "M16",
    slug: MODULE_M16.slug,
    title: MODULE_M16.title,
    category: "capstone",
    status: "published",
    isOptional: false,
    isFlagship: true,
    mappedDimensions: [...MODULE_M16.mappedDimensions],
    sortOrder: 16,
  },
];

export const CRC_ELITE_MODULES_BY_ID: Readonly<Record<string, Module>> = {
  M1: MODULE_M1,
  M2: MODULE_M2,
  M3: MODULE_M3,
  M4: MODULE_M4,
  M5: MODULE_M5,
  M6: MODULE_M6,
  M7: MODULE_M7,
  M8: MODULE_M8,
  M9: MODULE_M9,
  M10: MODULE_M10,
  M11: MODULE_M11,
  M12: MODULE_M12,
  M13: MODULE_M13,
  M14: MODULE_M14,
  M15: MODULE_M15,
  M16: MODULE_M16,
};

export const CRC_ELITE_COURSE: Course = {
  metadata: CRC_ELITE_METADATA,
  registry: CRC_ELITE_MODULE_REGISTRY,
  modulesById: CRC_ELITE_MODULES_BY_ID,
  scorecardModel: COURSE_SCORECARD_MODEL,
  certificationRule: CERTIFICATION_RULE_V1,
};

export function getModuleById(course: Course, id: string) {
  return course.modulesById[id];
}

export function getRegistryItem(course: Course, id: string) {
  return course.registry.find((r) => r.id === id);
}
