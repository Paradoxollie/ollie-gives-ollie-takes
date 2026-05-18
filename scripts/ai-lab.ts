import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  buildAiLabReport,
  createAiLabMarkdownReport,
  DECK_PRESET_IDS,
  formatAiLabReportModule,
} from "@/core";
import type { DeckPresetId } from "@/core/types";

interface CliArgs {
  matchesPerPairing: number;
  seed: number;
  deckPresetIds: DeckPresetId[];
  apply: boolean;
}

function parseDeckPresetId(value: string): DeckPresetId {
  if (!DECK_PRESET_IDS.includes(value as DeckPresetId)) {
    throw new Error(`Unknown deck preset "${value}". Expected one of: ${DECK_PRESET_IDS.join(", ")}`);
  }

  return value as DeckPresetId;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    matchesPerPairing: 40,
    seed: 1701,
    deckPresetIds: [...DECK_PRESET_IDS],
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

    if (arg === "--seed" && value) {
      args.seed = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--deck" && value) {
      args.deckPresetIds = [parseDeckPresetId(value)];
      index += 1;
      continue;
    }

    if (arg === "--apply") {
      args.apply = true;
    }
  }

  if (!Number.isFinite(args.matchesPerPairing) || args.matchesPerPairing <= 0) {
    throw new Error("Match count must be a positive integer.");
  }

  if (!Number.isFinite(args.seed)) {
    throw new Error("Seed must be a finite integer.");
  }

  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = buildAiLabReport({
    matchesPerPairing: args.matchesPerPairing,
    seed: args.seed,
    deckPresetIds: args.deckPresetIds,
  });
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
      `Decks: ${report.config.deckPresetIds.join(", ")}`,
      `Matches per pairing: ${report.config.matchesPerPairing}`,
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
