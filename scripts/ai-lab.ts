import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  attachAiLabTrend,
  buildAiLabReport,
  createAiLabMarkdownReport,
  formatAiLabReportModule,
  getAiLabScenario,
} from "@/core";
import { LATEST_AI_LAB_REPORT } from "@/core/ai-lab/generated/latestAiLabReport";

interface CliArgs {
  matchesPerPairing: number;
  adventureRunsPerModel: number;
  seed: number;
  apply: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    matchesPerPairing: 40,
    adventureRunsPerModel: 3,
    seed: 1701,
    apply: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const value = argv[index + 1];

    if ((arg === "--matches" || arg === "--matches-per-pairing") && value) {
      args.matchesPerPairing = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if ((arg === "--adventure-runs" || arg === "--runs-per-model") && value) {
      args.adventureRunsPerModel = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--seed" && value) {
      args.seed = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--deck" || arg === "--preset") {
      throw new Error("AI lab uses the current live start only. Legacy 10/12/14 preset comparison has been removed from this runner.");
    }

    if (arg === "--apply") {
      args.apply = true;
    }
  }

  if (
    !Number.isInteger(args.matchesPerPairing) ||
    args.matchesPerPairing <= 0 ||
    args.matchesPerPairing % 4 !== 0
  ) {
    throw new Error("Match count must be a positive multiple of 4.");
  }

  if (!Number.isFinite(args.adventureRunsPerModel) || args.adventureRunsPerModel <= 0) {
    throw new Error("Adventure run count must be a positive integer.");
  }

  if (!Number.isFinite(args.seed)) {
    throw new Error("Seed must be a finite integer.");
  }

  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  process.stdout.write(
    `Starting AI lab: ${args.matchesPerPairing} matches per pairing, ${args.adventureRunsPerModel} adventure runs per model, seed ${args.seed}.\n`,
  );
  const report = attachAiLabTrend(
    buildAiLabReport({
      matchesPerPairing: args.matchesPerPairing,
      adventureRunsPerModel: args.adventureRunsPerModel,
      seed: args.seed,
      onProgress: (message) => process.stdout.write(`${message}\n`),
    }),
    [LATEST_AI_LAB_REPORT],
  );
  const reportsDirectory = path.join(process.cwd(), "reports", "ai-lab");
  await mkdir(reportsDirectory, { recursive: true });

  const reportJsonPath = path.join(reportsDirectory, `${report.reportId}.json`);
  const reportMarkdownPath = path.join(reportsDirectory, `${report.reportId}.md`);
  const latestJsonPath = path.join(reportsDirectory, "latest-ai-lab-report.json");
  const latestMarkdownPath = path.join(reportsDirectory, "latest-ai-lab-report.md");

  await writeFile(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(reportMarkdownPath, createAiLabMarkdownReport(report), "utf8");
  await writeFile(latestJsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(latestMarkdownPath, createAiLabMarkdownReport(report), "utf8");

  if (args.apply) {
    const generatedPath = path.join(
      process.cwd(),
      "src",
      "core",
      "ai-lab",
      "generated",
      "latestAiLabReport.ts",
    );
    await writeFile(generatedPath, formatAiLabReportModule(report), "utf8");
  }

  const problemCount = report.insights.filter((insight) => insight.severity === "problem").length;
  const watchCount = report.insights.filter((insight) => insight.severity === "watch").length;
  process.stdout.write(
    [
      `Generated ${report.reportId}`,
      `Scenarios: ${report.config.scenarioIds.map((scenarioId) => getAiLabScenario(scenarioId).label).join(", ")}`,
      `Matches per pairing: ${report.config.matchesPerPairing}`,
      `Adventure runs per model: ${report.config.adventureRunsPerModel}`,
      `Signals: ${problemCount} problem(s), ${watchCount} watch item(s)`,
      args.apply
        ? "Applied snapshot to src/core/ai-lab/generated/latestAiLabReport.ts"
        : "Snapshot not applied. Re-run with --apply to update the deployed lab view.",
      "",
      createAiLabMarkdownReport(report),
    ].join("\n"),
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
