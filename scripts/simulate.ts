import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { DECK_PRESET_IDS, STARTER_DECK_PRESETS, createMarkdownReport, interpretReport, simulateSeries, summarizeSeries } from "@/core";
import { BOT_IDS, getBot, type BotId } from "@/core/bots";
import type { DeckPresetId } from "@/core/types";
import type { SimulationReport } from "@/core/sim/types";

interface CliArgs {
  matches: number;
  seed: number;
  deckPresetId: DeckPresetId;
  matchup: [BotId, BotId];
}

function parseBotId(value: string): BotId {
  if (!BOT_IDS.includes(value as BotId)) {
    throw new Error(`Unknown bot id "${value}". Expected one of: ${BOT_IDS.join(", ")}`);
  }

  return value as BotId;
}

function parseDeckPresetId(value: string): DeckPresetId {
  if (!DECK_PRESET_IDS.includes(value as DeckPresetId)) {
    throw new Error(`Unknown deck preset "${value}". Expected one of: ${DECK_PRESET_IDS.join(", ")}`);
  }

  return value as DeckPresetId;
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    matches: 100,
    seed: 101,
    deckPresetId: "starter12",
    matchup: ["greedy", "heuristic"]
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const value = argv[index + 1];

    if (arg === "--matches" && value) {
      args.matches = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--seed" && value) {
      args.seed = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--deck" && value) {
      args.deckPresetId = parseDeckPresetId(value);
      index += 1;
      continue;
    }

    if (arg === "--matchup" && value) {
      const [left, right] = value.split(":");
      if (!left || !right) {
        throw new Error('Expected matchup in the form "botA:botB".');
      }

      args.matchup = [parseBotId(left), parseBotId(right)];
      index += 1;
    }
  }

  if (!Number.isFinite(args.matches) || args.matches <= 0) {
    throw new Error("Match count must be a positive integer.");
  }

  if (!Number.isFinite(args.seed)) {
    throw new Error("Seed must be a finite integer.");
  }

  getBot(args.matchup[0]);
  getBot(args.matchup[1]);
  return args;
}

function createReportId(args: CliArgs): string {
  const now = new Date();
  const timestamp = [
    now.getUTCFullYear(),
    String(now.getUTCMonth() + 1).padStart(2, "0"),
    String(now.getUTCDate()).padStart(2, "0"),
    "-",
    String(now.getUTCHours()).padStart(2, "0"),
    String(now.getUTCMinutes()).padStart(2, "0"),
    String(now.getUTCSeconds()).padStart(2, "0")
  ].join("");

  return `sim-${timestamp}-${args.matchup[0]}-vs-${args.matchup[1]}-${args.deckPresetId}`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const reportId = createReportId(args);
  const generatedAt = new Date().toISOString();
  const reportsDirectory = path.join(process.cwd(), "reports");
  await mkdir(reportsDirectory, { recursive: true });

  const deckComparison = DECK_PRESET_IDS.map((deckPresetId) =>
    summarizeSeries(
      simulateSeries({
        matches: args.matches,
        seed: args.seed,
        deckPresetId,
        matchup: args.matchup
      }),
    ),
  );

  const primarySummary = deckComparison.find((entry) => entry.deckPresetId === args.deckPresetId);
  if (!primarySummary) {
    throw new Error(`Primary summary was not generated for deck preset ${args.deckPresetId}.`);
  }

  const report: SimulationReport = {
    reportId,
    generatedAt,
    config: {
      matchesPerSeries: args.matches,
      seed: args.seed,
      requestedDeckPreset: args.deckPresetId,
      matchup: args.matchup
    },
    primarySummary,
    deckComparison,
    interpretation: []
  };
  report.interpretation = interpretReport(report);

  const reportJsonPath = path.join(reportsDirectory, `${reportId}.json`);
  const reportMarkdownPath = path.join(reportsDirectory, `${reportId}.md`);
  const latestJsonPath = path.join(reportsDirectory, "latest-simulation-report.json");
  const latestMarkdownPath = path.join(reportsDirectory, "latest-simulation-report.md");

  await writeFile(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(reportMarkdownPath, createMarkdownReport(report), "utf8");
  await writeFile(latestJsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(latestMarkdownPath, createMarkdownReport(report), "utf8");

  const latestPreview = await readFile(latestMarkdownPath, "utf8");
  process.stdout.write(
    [
      `Generated ${reportId}`,
      `Primary deck: ${STARTER_DECK_PRESETS[args.deckPresetId].label}`,
      `Matchup: ${args.matchup[0]} vs ${args.matchup[1]}`,
      `Matches per preset: ${args.matches}`,
      "",
      latestPreview
    ].join("\n"),
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
