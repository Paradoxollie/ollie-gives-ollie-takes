import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

import type { SimulationReport } from "@/core/sim/types";

const REPORTS_DIRECTORY = path.join(process.cwd(), "reports");

function isSimulationReport(value: unknown): value is SimulationReport {
  if (!value || typeof value !== "object") {
    return false;
  }

  const report = value as Partial<SimulationReport>;
  return Boolean(
    typeof report.reportId === "string" &&
      typeof report.generatedAt === "string" &&
      report.config &&
      typeof report.config.matchesPerSeries === "number" &&
      report.primarySummary &&
      typeof report.primarySummary.totalGames === "number" &&
      typeof report.primarySummary.drawRate === "number" &&
      typeof report.primarySummary.boardSize === "number" &&
      report.primarySummary.averages &&
      typeof report.primarySummary.averages.flipsPerMatch === "number" &&
      typeof report.primarySummary.averages.roundEndControlDifference === "number" &&
      typeof report.primarySummary.averages.controlledCardsPerRoundBySide?.player === "number" &&
      Array.isArray(report.deckComparison) &&
      Array.isArray(report.interpretation),
  );
}

async function readReportFile(filename: string): Promise<SimulationReport | null> {
  try {
    const raw = await readFile(path.join(REPORTS_DIRECTORY, filename), "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return isSimulationReport(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/**
 * Reads the latest generated simulation report plus a list of recent archived reports.
 */
export async function loadSimulationReports(): Promise<{
  latestReport: SimulationReport | null;
  recentReports: SimulationReport[];
}> {
  let files: string[] = [];

  try {
    files = await readdir(REPORTS_DIRECTORY);
  } catch {
    return {
      latestReport: null,
      recentReports: [],
    };
  }

  const recentJsonFiles = files
    .filter((file) => file.endsWith(".json") && file.startsWith("sim-"))
    .sort((left, right) => right.localeCompare(left))
    .slice(0, 8);

  const [latestReport, recentReports] = await Promise.all([
    readReportFile("latest-simulation-report.json"),
    Promise.all(recentJsonFiles.map((file) => readReportFile(file))),
  ]);

  return {
    latestReport,
    recentReports: recentReports.filter((report): report is SimulationReport => report !== null),
  };
}
