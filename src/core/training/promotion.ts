import { championBot, greedyBot, heuristicBot } from "@/core/bots";
import { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
import { createConfiguredTrainedBot } from "@/core/bots/trainedBot";
import { BOT_TRAINING_CONFIG } from "@/core/config/gameConfig";
import { benchmarkAdventureAgainstOpponents } from "@/core/training/adventure-benchmark";
import { benchmarkBotAgainstOpponents } from "@/core/training/benchmark";
import type { AdventureBenchmarkSummary, AdventureCampaignSummary } from "@/core/training/adventure-benchmark";
import type { BotBenchmarkSummary, ConfiguredBotSpec, HeadToHeadSummary } from "@/core/training/benchmark";
import type { LiveChampionProfile } from "@/core/bots/generated/liveChampion";
import type { TrainedBotWeights } from "@/core/types";

export interface PromotionEvaluationSummary {
  approved: boolean;
  reasons: string[];
  benchmark: BotBenchmarkSummary;
  campaignBenchmark: AdventureBenchmarkSummary;
  againstHeuristic: HeadToHeadSummary | null;
  againstChampion: HeadToHeadSummary | null;
  campaignAgainstHeuristic: AdventureCampaignSummary | null;
  campaignAgainstChampion: AdventureCampaignSummary | null;
}

function findOpponentSummary(summary: BotBenchmarkSummary, opponentId: string): HeadToHeadSummary | null {
  return summary.opponents.find((entry) => entry.opponentId === opponentId) ?? null;
}

function findAdventureOpponentSummary(
  summary: AdventureBenchmarkSummary,
  opponentId: string,
): AdventureCampaignSummary | null {
  return summary.opponents.find((entry) => entry.opponentId === opponentId) ?? null;
}

export function evaluatePromotionCandidate(options: {
  seed: number;
  weights: TrainedBotWeights;
  searchDepth: number;
  beamWidth: number;
  matchesPerOpponent?: number;
}): PromotionEvaluationSummary {
  const matchesPerOpponent = options.matchesPerOpponent ?? BOT_TRAINING_CONFIG.promotionMatchesPerOpponent;
  const candidate: ConfiguredBotSpec = {
    id: "candidate",
    label: "Candidate",
    bot: createConfiguredTrainedBot(options.weights, options.searchDepth, options.beamWidth),
    searchDepth: options.searchDepth,
    beamWidth: options.beamWidth,
  };
  const opponents: ConfiguredBotSpec[] = [
    {
      id: "greedy",
      label: "Greedy",
      bot: greedyBot,
      searchDepth: 1,
      beamWidth: 12,
    },
    {
      id: "heuristic",
      label: "Heuristic",
      bot: heuristicBot,
      searchDepth: options.searchDepth,
      beamWidth: options.beamWidth,
    },
    {
      id: "champion",
      label: "Champion",
      bot: championBot,
      searchDepth: options.searchDepth,
      beamWidth: options.beamWidth,
    },
  ];

  const benchmark = benchmarkBotAgainstOpponents({
    seed: options.seed,
    candidate,
    opponents,
    matchesPerOpponent,
  });
  const campaignBenchmark = benchmarkAdventureAgainstOpponents({
    seed: options.seed + 101,
    candidate: {
      ...candidate,
      weights: options.weights,
    },
    opponents: [
      {
        id: "heuristic",
        label: "Heuristic",
        bot: heuristicBot,
        searchDepth: options.searchDepth,
        beamWidth: options.beamWidth,
      },
      {
        id: "champion",
        label: "Champion",
        bot: championBot,
        searchDepth: options.searchDepth,
        beamWidth: options.beamWidth,
      },
    ],
    runsPerOpponent: BOT_TRAINING_CONFIG.campaignPromotionRunsPerOpponent,
  });

  const againstHeuristic = findOpponentSummary(benchmark, "heuristic");
  const againstChampion = findOpponentSummary(benchmark, "champion");
  const campaignAgainstHeuristic = findAdventureOpponentSummary(campaignBenchmark, "heuristic");
  const campaignAgainstChampion = findAdventureOpponentSummary(campaignBenchmark, "champion");
  const reasons: string[] = [];

  if (!againstHeuristic) {
    reasons.push("Benchmark incomplet: heuristic non evalue.");
  } else {
    if (againstHeuristic.winRate < BOT_TRAINING_CONFIG.promotionMinimumWinRateVsHeuristic) {
      reasons.push(
        `Win rate vs heuristic trop faible (${(againstHeuristic.winRate * 100).toFixed(1)}% < ${(BOT_TRAINING_CONFIG.promotionMinimumWinRateVsHeuristic * 100).toFixed(1)}%).`,
      );
    }

    if (againstHeuristic.averageHpEdge < BOT_TRAINING_CONFIG.promotionMinimumAverageHpEdge) {
      reasons.push(
        `Avance PV trop faible vs heuristic (${againstHeuristic.averageHpEdge.toFixed(2)} < ${BOT_TRAINING_CONFIG.promotionMinimumAverageHpEdge.toFixed(2)}).`,
      );
    }
  }

  if (!againstChampion) {
    reasons.push("Benchmark incomplet: champion live non evalue.");
  } else if (againstChampion.winRate < BOT_TRAINING_CONFIG.promotionMinimumWinRateVsChampion) {
    reasons.push(
      `Win rate vs champion trop faible (${(againstChampion.winRate * 100).toFixed(1)}% < ${(BOT_TRAINING_CONFIG.promotionMinimumWinRateVsChampion * 100).toFixed(1)}%).`,
    );
  }

  if (!campaignAgainstHeuristic) {
    reasons.push("Benchmark campagne incomplet: heuristic non evalue.");
  } else {
    if (campaignAgainstHeuristic.averageScore < BOT_TRAINING_CONFIG.promotionMinimumCampaignScoreVsHeuristic) {
      reasons.push(
        `Score campagne trop faible vs heuristic (${campaignAgainstHeuristic.averageScore.toFixed(1)} < ${BOT_TRAINING_CONFIG.promotionMinimumCampaignScoreVsHeuristic.toFixed(1)}).`,
      );
    }

    if (campaignAgainstHeuristic.bossReachRate < BOT_TRAINING_CONFIG.promotionMinimumBossReachRateVsHeuristic) {
      reasons.push(
        `Boss trop rarement atteint vs heuristic (${(campaignAgainstHeuristic.bossReachRate * 100).toFixed(1)}% < ${(BOT_TRAINING_CONFIG.promotionMinimumBossReachRateVsHeuristic * 100).toFixed(1)}%).`,
      );
    }
  }

  if (!campaignAgainstChampion) {
    reasons.push("Benchmark campagne incomplet: champion live non evalue.");
  } else {
    if (campaignAgainstChampion.averageScore < BOT_TRAINING_CONFIG.promotionMinimumCampaignScoreVsChampion) {
      reasons.push(
        `Score campagne trop faible vs champion (${campaignAgainstChampion.averageScore.toFixed(1)} < ${BOT_TRAINING_CONFIG.promotionMinimumCampaignScoreVsChampion.toFixed(1)}).`,
      );
    }

    if (campaignAgainstChampion.bossReachRate < BOT_TRAINING_CONFIG.promotionMinimumBossReachRateVsChampion) {
      reasons.push(
        `Boss trop rarement atteint vs champion (${(campaignAgainstChampion.bossReachRate * 100).toFixed(1)}% < ${(BOT_TRAINING_CONFIG.promotionMinimumBossReachRateVsChampion * 100).toFixed(1)}%).`,
      );
    }
  }

  return {
    approved: reasons.length === 0,
    reasons,
    benchmark,
    campaignBenchmark,
    againstHeuristic,
    againstChampion,
    campaignAgainstHeuristic,
    campaignAgainstChampion,
  };
}

export function formatLiveChampionProfileModule(options: {
  name: string;
  promotedAt: string;
  searchDepth: number;
  beamWidth: number;
  weights: TrainedBotWeights;
  evaluation: PromotionEvaluationSummary;
}): string {
  const heuristicWinRate = options.evaluation.againstHeuristic?.winRate ?? 0;
  const championWinRate = options.evaluation.againstChampion?.winRate ?? 0;
  const averageHpEdge = options.evaluation.benchmark.averageHpEdge;
  const campaignScoreVsHeuristic = options.evaluation.campaignAgainstHeuristic?.averageScore ?? 0;
  const campaignScoreVsChampion = options.evaluation.campaignAgainstChampion?.averageScore ?? 0;
  const campaignBossReachVsHeuristic = options.evaluation.campaignAgainstHeuristic?.bossReachRate ?? 0;
  const campaignBossReachVsChampion = options.evaluation.campaignAgainstChampion?.bossReachRate ?? 0;

  return [
    "import type { TrainedBotWeights } from \"@/core/types\";",
    "",
    "export interface LiveChampionProfile {",
    "  name: string;",
    "  source: \"heuristic\" | \"trained\";",
    "  approved: boolean;",
    "  promotedAt: string;",
    "  benchmarkMatchesPerOpponent: number;",
    "  winRateVsHeuristic: number;",
    "  winRateVsChampion: number;",
    "  averageHpEdge: number;",
    "  campaignScoreVsHeuristic: number;",
    "  campaignScoreVsChampion: number;",
    "  campaignBossReachVsHeuristic: number;",
    "  campaignBossReachVsChampion: number;",
    "  searchDepth: number;",
    "  beamWidth: number;",
    "  weights: TrainedBotWeights | null;",
    "}",
    "",
    "export const LIVE_CHAMPION_PROFILE: LiveChampionProfile = {",
    `  name: ${JSON.stringify(options.name)},`,
    "  source: \"trained\",",
    "  approved: true,",
    `  promotedAt: ${JSON.stringify(options.promotedAt)},`,
    `  benchmarkMatchesPerOpponent: ${options.evaluation.againstHeuristic?.matches ?? 0},`,
    `  winRateVsHeuristic: ${Number(heuristicWinRate.toFixed(6))},`,
    `  winRateVsChampion: ${Number(championWinRate.toFixed(6))},`,
    `  averageHpEdge: ${Number(averageHpEdge.toFixed(6))},`,
    `  campaignScoreVsHeuristic: ${Number(campaignScoreVsHeuristic.toFixed(6))},`,
    `  campaignScoreVsChampion: ${Number(campaignScoreVsChampion.toFixed(6))},`,
    `  campaignBossReachVsHeuristic: ${Number(campaignBossReachVsHeuristic.toFixed(6))},`,
    `  campaignBossReachVsChampion: ${Number(campaignBossReachVsChampion.toFixed(6))},`,
    `  searchDepth: ${options.searchDepth},`,
    `  beamWidth: ${options.beamWidth},`,
    "  weights: {",
    `    hpDiff: ${options.weights.hpDiff},`,
    `    controlDiff: ${options.weights.controlDiff},`,
    `    boardStrengthDiff: ${options.weights.boardStrengthDiff},`,
    `    reserveStrengthDiff: ${options.weights.reserveStrengthDiff},`,
    `    handStrengthDiff: ${options.weights.handStrengthDiff},`,
    `    mobilityDiff: ${options.weights.mobilityDiff},`,
    `    cornerControlDiff: ${options.weights.cornerControlDiff},`,
    `    occupiedBoardDiff: ${options.weights.occupiedBoardDiff},`,
    `    imminentRoundDamageDiff: ${options.weights.imminentRoundDamageDiff},`,
    `    activeTurnTempo: ${options.weights.activeTurnTempo},`,
    `    specialCardValue: ${options.weights.specialCardValue},`,
    `    deckTrimValue: ${options.weights.deckTrimValue},`,
    `    eliteRouteBias: ${options.weights.eliteRouteBias},`,
    `    restRouteBias: ${options.weights.restRouteBias},`,
    `    forgeRouteBias: ${options.weights.forgeRouteBias},`,
    `    treasureRouteBias: ${options.weights.treasureRouteBias},`,
    `    branchingRouteBias: ${options.weights.branchingRouteBias},`,
    `    riskTolerance: ${options.weights.riskTolerance},`,
    `    aggressionPlanBias: ${options.weights.aggressionPlanBias},`,
    `    controlPlanBias: ${options.weights.controlPlanBias},`,
    `    tempoPlanBias: ${options.weights.tempoPlanBias},`,
    `    fusionPlanBias: ${options.weights.fusionPlanBias},`,
    `    precisionPlanBias: ${options.weights.precisionPlanBias},`,
    `    uncommonCardBias: ${options.weights.uncommonCardBias},`,
    `    rareCardBias: ${options.weights.rareCardBias},`,
    `    charmSynergyBias: ${options.weights.charmSynergyBias},`,
    `    duplicateCardPenalty: ${options.weights.duplicateCardPenalty},`,
    `    enemyProfileRespect: ${options.weights.enemyProfileRespect},`,
    "  },",
    "};",
    "",
  ].join("\n");
}

export function createFallbackLiveChampionProfile(): LiveChampionProfile {
  return LIVE_CHAMPION_PROFILE;
}
