import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

import { LATEST_AI_LAB_REPORT } from "@/core/ai-lab/generated/latestAiLabReport";
import type { AiLabReport } from "@/core/ai-lab/types";

const AI_LAB_REPORT_PATH = path.join(
  /* turbopackIgnore: true */ process.cwd(),
  "reports",
  "ai-lab",
  "latest-ai-lab-report.json",
);

function isAiLabReport(value: unknown): value is AiLabReport {
  if (!value || typeof value !== "object") {
    return false;
  }

  const report = value as Partial<AiLabReport>;
  return Boolean(
    typeof report.reportId === "string" &&
      typeof report.generatedAt === "string" &&
      report.config &&
      typeof report.config.matchesPerPairing === "number" &&
      Array.isArray(report.config.scenarioIds) &&
      Array.isArray(report.playerModels) &&
      Array.isArray(report.skillSummaries) &&
      Array.isArray(report.deckSummaries) &&
      Array.isArray(report.ladderPairings) &&
      Array.isArray(report.insights),
  );
}

async function loadRuntimeReport(): Promise<AiLabReport | null> {
  try {
    const raw = await readFile(/* turbopackIgnore: true */ AI_LAB_REPORT_PATH, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return isAiLabReport(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/**
 * Reads the latest local AI-lab report, falling back to the committed snapshot
 * so deployed builds can still display the last benchmark.
 */
export async function loadAiLabReport(): Promise<AiLabReport | null> {
  return (await loadRuntimeReport()) ?? LATEST_AI_LAB_REPORT;
}
