import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  BOT_TRAINING_CONFIG,
  evaluatePromotionCandidate,
  formatLiveChampionProfileModule,
  TRAINED_BOT_PROFILE,
  formatTrainedBotProfileModule,
  trainTrainedBotWeights,
} from "@/core";

interface CliArgs {
  seed: number;
  iterations: number;
  populationSize: number;
  eliteCount: number;
  matchesPerOpponent: number;
  promotionMatchesPerOpponent: number;
  campaignTrainingRunsPerOpponent: number;
  campaignPromotionRunsPerOpponent: number;
  searchDepth: number;
  beamWidth: number;
  apply: boolean;
  promote: boolean;
}

function emitStructuredLog(kind: "TRAINING_META" | "TRAINING_PROGRESS" | "TRAINING_FINISHED", payload: object) {
  process.stdout.write(`${kind} ${JSON.stringify(payload)}\n`);
}

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    seed: 101,
    iterations: BOT_TRAINING_CONFIG.iterations,
    populationSize: BOT_TRAINING_CONFIG.populationSize,
    eliteCount: BOT_TRAINING_CONFIG.eliteCount,
    matchesPerOpponent: BOT_TRAINING_CONFIG.matchesPerOpponent,
    promotionMatchesPerOpponent: BOT_TRAINING_CONFIG.promotionMatchesPerOpponent,
    campaignTrainingRunsPerOpponent: BOT_TRAINING_CONFIG.campaignTrainingRunsPerOpponent,
    campaignPromotionRunsPerOpponent: BOT_TRAINING_CONFIG.campaignPromotionRunsPerOpponent,
    searchDepth: TRAINED_BOT_PROFILE.searchDepth,
    beamWidth: TRAINED_BOT_PROFILE.beamWidth,
    apply: false,
    promote: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const value = argv[index + 1];

    if (arg === "--seed" && value) {
      args.seed = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--iterations" && value) {
      args.iterations = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--population" && value) {
      args.populationSize = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--elite-count" && value) {
      args.eliteCount = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--matches-per-opponent" && value) {
      args.matchesPerOpponent = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--promotion-matches-per-opponent" && value) {
      args.promotionMatchesPerOpponent = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if ((arg === "--campaign-training-runs" || arg === "--campaign-runs-per-opponent") && value) {
      args.campaignTrainingRunsPerOpponent = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--campaign-promotion-runs" && value) {
      args.campaignPromotionRunsPerOpponent = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--search-depth" && value) {
      args.searchDepth = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--beam-width" && value) {
      args.beamWidth = Number.parseInt(value, 10);
      index += 1;
      continue;
    }

    if (arg === "--apply") {
      args.apply = true;
    }

    if (arg === "--promote") {
      args.promote = true;
    }
  }

  if (!Number.isFinite(args.campaignTrainingRunsPerOpponent) || args.campaignTrainingRunsPerOpponent <= 0) {
    throw new Error("Campaign training run count must be a positive integer.");
  }

  if (!Number.isFinite(args.campaignPromotionRunsPerOpponent) || args.campaignPromotionRunsPerOpponent <= 0) {
    throw new Error("Campaign promotion run count must be a positive integer.");
  }

  return args;
}

function trainingReportId(args: CliArgs): string {
  const now = new Date();
  const timestamp = [
    now.getUTCFullYear(),
    String(now.getUTCMonth() + 1).padStart(2, "0"),
    String(now.getUTCDate()).padStart(2, "0"),
    "-",
    String(now.getUTCHours()).padStart(2, "0"),
    String(now.getUTCMinutes()).padStart(2, "0"),
    String(now.getUTCSeconds()).padStart(2, "0"),
  ].join("");

  return `trained-bot-${timestamp}`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const reportId = trainingReportId(args);
  const trainedAt = new Date().toISOString();
  emitStructuredLog("TRAINING_META", {
    reportId,
    startedAt: trainedAt,
    config: args,
  });
  const summary = trainTrainedBotWeights(TRAINED_BOT_PROFILE.weights, {
    seed: args.seed,
    iterations: args.iterations,
    populationSize: args.populationSize,
    eliteCount: args.eliteCount,
    matchesPerOpponent: args.matchesPerOpponent,
    campaignRunsPerOpponent: args.campaignTrainingRunsPerOpponent,
    searchDepth: args.searchDepth,
    beamWidth: args.beamWidth,
    onProgress(progress) {
      emitStructuredLog("TRAINING_PROGRESS", {
        reportId,
        phase: progress.phase,
        phaseLabel: progress.phaseLabel,
        iteration: progress.iteration,
        totalIterations: progress.totalIterations,
        candidateIndex: progress.candidateIndex,
        populationSize: progress.populationSize,
        startedUnits: progress.startedUnits,
        completedUnits: progress.completedUnits,
        totalUnits: progress.totalUnits,
        bestScore: progress.bestScore,
        wins: progress.wins,
        draws: progress.draws,
        losses: progress.losses,
        averageHpEdge: progress.averageHpEdge,
        campaignAverageScore: progress.campaignAverageScore,
        campaignBossReachRate: progress.campaignBossReachRate,
        campaignVictoryRate: progress.campaignVictoryRate,
        loggedAt: new Date().toISOString(),
      });
    },
    onIterationComplete(iterationSummary) {
      emitStructuredLog("TRAINING_PROGRESS", {
        reportId,
        phase: "candidate",
        phaseLabel: `Iteration ${iterationSummary.iteration}/${args.iterations} terminee`,
        iteration: iterationSummary.iteration,
        totalIterations: args.iterations,
        candidateIndex: args.populationSize,
        populationSize: args.populationSize,
        startedUnits: iterationSummary.iteration * args.populationSize,
        completedUnits: iterationSummary.iteration * args.populationSize,
        totalUnits: args.iterations * args.populationSize + 1,
        sigma: iterationSummary.sigma,
        bestScore: iterationSummary.best.score,
        wins: iterationSummary.best.wins,
        draws: iterationSummary.best.draws,
        losses: iterationSummary.best.losses,
        averageHpEdge: iterationSummary.best.averageHpEdge,
        campaignAverageScore: iterationSummary.best.campaignAverageScore,
        campaignBossReachRate: iterationSummary.best.campaignBossReachRate,
        campaignVictoryRate: iterationSummary.best.campaignVictoryRate,
        loggedAt: new Date().toISOString(),
      });
    },
  });

  const reportsDirectory = path.join(process.cwd(), "reports", "training");
  await mkdir(reportsDirectory, { recursive: true });

  const reportPayload = {
    reportId,
    trainedAt,
    config: args,
    best: summary.best,
    history: summary.history,
    finalMeanWeights: summary.finalMeanWeights,
  };

  const reportJsonPath = path.join(reportsDirectory, `${reportId}.json`);
  const latestJsonPath = path.join(reportsDirectory, "latest-trained-bot.json");
  await writeFile(reportJsonPath, `${JSON.stringify(reportPayload, null, 2)}\n`, "utf8");
  await writeFile(latestJsonPath, `${JSON.stringify(reportPayload, null, 2)}\n`, "utf8");

  const promotionEvaluation = evaluatePromotionCandidate({
    seed: args.seed + 17,
    weights: summary.best.weights,
    searchDepth: args.searchDepth,
    beamWidth: args.beamWidth,
    matchesPerOpponent: args.promotionMatchesPerOpponent,
    campaignRunsPerOpponent: args.campaignPromotionRunsPerOpponent,
  });
  const promotionPayload = {
    reportId,
    trainedAt,
    approved: promotionEvaluation.approved,
    reasons: promotionEvaluation.reasons,
    config: {
      matchesPerOpponent: args.promotionMatchesPerOpponent,
      campaignRunsPerOpponent: args.campaignPromotionRunsPerOpponent,
      searchDepth: args.searchDepth,
      beamWidth: args.beamWidth,
    },
    benchmark: promotionEvaluation.benchmark,
    campaignBenchmark: promotionEvaluation.campaignBenchmark,
  };
  const promotionJsonPath = path.join(reportsDirectory, `${reportId}-promotion.json`);
  const latestPromotionJsonPath = path.join(reportsDirectory, "latest-promotion-report.json");
  await writeFile(promotionJsonPath, `${JSON.stringify(promotionPayload, null, 2)}\n`, "utf8");
  await writeFile(latestPromotionJsonPath, `${JSON.stringify(promotionPayload, null, 2)}\n`, "utf8");

  if (args.apply) {
    const moduleText = formatTrainedBotProfileModule({
      name: reportId,
      trainedAt,
      iterations: args.iterations,
      matchesPerOpponent: args.matchesPerOpponent,
      searchDepth: args.searchDepth,
      beamWidth: args.beamWidth,
      weights: summary.best.weights,
    });

    await writeFile(
      path.join(process.cwd(), "src", "core", "bots", "generated", "trainedWeights.ts"),
      moduleText,
      "utf8",
    );
  }

  if (args.promote && promotionEvaluation.approved) {
    const liveChampionModule = formatLiveChampionProfileModule({
      name: reportId,
      promotedAt: trainedAt,
      searchDepth: args.searchDepth,
      beamWidth: args.beamWidth,
      weights: summary.best.weights,
      evaluation: promotionEvaluation,
    });

    await writeFile(
      path.join(process.cwd(), "src", "core", "bots", "generated", "liveChampion.ts"),
      liveChampionModule,
      "utf8",
    );
  }

  emitStructuredLog("TRAINING_FINISHED", {
    reportId,
    finishedAt: new Date().toISOString(),
    approved: promotionEvaluation.approved,
    reasons: promotionEvaluation.reasons,
    bestScore: summary.best.score,
    wins: summary.best.wins,
    draws: summary.best.draws,
    losses: summary.best.losses,
    averageHpEdge: summary.best.averageHpEdge,
    campaignAverageScore: summary.best.campaignAverageScore,
    campaignBossReachRate: summary.best.campaignBossReachRate,
    campaignVictoryRate: summary.best.campaignVictoryRate,
  });

  process.stdout.write(
    [
      `Training finished: ${reportId}`,
      `Best score: ${summary.best.score.toFixed(3)}`,
      `Record: ${summary.best.wins}W / ${summary.best.draws}D / ${summary.best.losses}L`,
      `Average HP edge: ${summary.best.averageHpEdge.toFixed(3)}`,
      `Campaign score: ${summary.best.campaignAverageScore.toFixed(3)}`,
      `Campaign boss reach: ${(summary.best.campaignBossReachRate * 100).toFixed(1)}%`,
      args.apply ? "Applied best weights to src/core/bots/generated/trainedWeights.ts" : "Weights not applied.",
      promotionEvaluation.approved
        ? `Promotion benchmark passed (${(promotionEvaluation.benchmark.overallWinRate * 100).toFixed(1)}% overall).`
        : `Promotion benchmark failed: ${promotionEvaluation.reasons.join(" ")}`,
      args.promote
        ? promotionEvaluation.approved
          ? "Promoted live champion profile."
          : "Live champion profile unchanged."
        : "Promotion disabled.",
      "",
      JSON.stringify(summary.best.weights, null, 2),
      "",
    ].join("\n"),
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
