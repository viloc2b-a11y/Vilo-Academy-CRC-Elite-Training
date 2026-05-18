// src/curriculum-engine/index.ts

export * from "./types";

export {
  CRC_ELITE_COURSE,
  CRC_ELITE_METADATA,
  CRC_ELITE_MODULE_REGISTRY,
  CRC_ELITE_MODULES_BY_ID,
  getModuleById,
  getRegistryItem,
} from "./data/course";

export {
  CAPSTONE_STATION_IDS,
  CAPSTONE_STATION_REGISTRY,
  CAPSTONE_STATIONS_BY_ID,
} from "./data/capstone";

export {
  OPERATIONAL_ARTIFACT_TEMPLATE_BY_ARTIFACT_ID,
  OPERATIONAL_ARTIFACT_TEMPLATES,
  OPERATIONAL_ARTIFACT_TEMPLATES_BY_ID,
} from "./data/artifactTemplates";

export {
  CRC_CERTIFICATION_LEVELS,
  CRC_ROLE_PATHWAYS,
  ONCOLOGY_OSCE_MOCK_STUDY,
  VILO_OS_CRC_ACADEMY_MODULE,
} from "./data/premium";

export {
  CAPSTONE_MIN_NORMALIZED,
  CAPSTONE_WEIGHT,
  CERTIFICATION_RULE_V1,
  CERTIFICATION_TIER_THRESHOLDS,
  COURSE_SCORECARD_MODEL,
  DIMENSION_PASS_THRESHOLD,
  FAIL_OVERRIDE_STRICT,
  FLAGSHIP_MODULE_IDS,
  GRADED_PRE_CAPSTONE_MODULE_IDS,
  MODULE_AGGREGATE_WEIGHTS,
  type CertificationTier,
} from "./data/scorecard";

export { MODULE_M1 } from "./data/modules/m1";
export { MODULE_M2 } from "./data/modules/m2";
export { MODULE_M3 } from "./data/modules/m3";
export { MODULE_M4 } from "./data/modules/m4";
export { MODULE_M5 } from "./data/modules/m5";
export { MODULE_M6 } from "./data/modules/m6";
export { MODULE_M7 } from "./data/modules/m7";
export { MODULE_M8 } from "./data/modules/m8";
export { MODULE_M9 } from "./data/modules/m9";
export { MODULE_M10 } from "./data/modules/m10";
export { MODULE_M11 } from "./data/modules/m11";
export { MODULE_M12 } from "./data/modules/m12";
export { MODULE_M13 } from "./data/modules/m13";
export { MODULE_M14 } from "./data/modules/m14";
export { MODULE_M15 } from "./data/modules/m15";
export { MODULE_M16 } from "./data/modules/m16";
export { MODULE_M17 } from "./data/modules/m17";

export * from "./utils/scoring";

export { IMPLEMENTATION_NOTES } from "./implementation-notes";
