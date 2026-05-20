import { BOT_TRAINING_CONFIG } from "@/core/config/gameConfig";
import { createConfiguredTrainedBot } from "@/core/bots/trainedBot";
import { greedyBot, heuristicBot } from "@/core/bots";
import { benchmarkAdventureAgainstOpponents } from "@/core/training/adventure-benchmark";
import { benchmarkBotAgainstOpponents } from "@/core/training/benchmark";
import { nextRandom, mixSeed } from "@/core/utils/rng";
import type { TrainedBotWeights } from "@/core/types";

export interface WeightCandidateScore {
  weights: TrainedBotWeights;
  score: number;
  wins: number;
  draws: number;
  losses: number;
  averageHpEdge: number;
  campaignAverageScore: number;
  campaignBossReachRate: number;
  campaignVictoryRate: number;
}

export interface TrainingIterationSummary {
  iteration: number;
  sigma: number;
  best: WeightCandidateScore;
  meanWeights: TrainedBotWeights;
}

export interface TrainedBotRunSummary {
  best: WeightCandidateScore;
  history: TrainingIterationSummary[];
  finalMeanWeights: TrainedBotWeights;
}

export interface TrainTrainedBotOptions {
  seed: number;
  iterations?: number;
  populationSize?: number;
  eliteCount?: number;
  matchesPerOpponent?: number;
  campaignRunsPerOpponent?: number;
  searchDepth?: number;
  beamWidth?: number;
  onIterationComplete?: (summary: TrainingIterationSummary) => void;
  onProgress?: (snapshot: TrainingProgressSnapshot) => void;
}

export interface TrainingProgressSnapshot {
  phase: "candidate" | "promotion";
  phaseLabel: string;
  iteration: number | null;
  totalIterations: number;
  candidateIndex: number | null;
  populationSize: number | null;
  startedUnits: number;
  completedUnits: number;
  totalUnits: number;
  bestScore: number | null;
  wins: number | null;
  draws: number | null;
  losses: number | null;
  averageHpEdge: number | null;
  campaignAverageScore: number | null;
  campaignBossReachRate: number | null;
  campaignVictoryRate: number | null;
}

const WEIGHT_KEYS: Array<keyof TrainedBotWeights> = [
  "hpDiff",
  "controlDiff",
  "boardStrengthDiff",
  "reserveStrengthDiff",
  "handStrengthDiff",
  "mobilityDiff",
  "cornerControlDiff",
  "occupiedBoardDiff",
  "imminentRoundDamageDiff",
  "activeTurnTempo",
  "specialCardValue",
  "deckTrimValue",
  "eliteRouteBias",
  "restRouteBias",
  "forgeRouteBias",
  "treasureRouteBias",
  "branchingRouteBias",
  "riskTolerance",
  "aggressionPlanBias",
  "controlPlanBias",
  "tempoPlanBias",
  "fusionPlanBias",
  "precisionPlanBias",
  "uncommonCardBias",
  "rareCardBias",
  "charmSynergyBias",
  "duplicateCardPenalty",
  "enemyProfileRespect",
];

function createZeroWeights(): TrainedBotWeights {
  return {
    hpDiff: 0,
    controlDiff: 0,
    boardStrengthDiff: 0,
    reserveStrengthDiff: 0,
    handStrengthDiff: 0,
    mobilityDiff: 0,
    cornerControlDiff: 0,
    occupiedBoardDiff: 0,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: 0,
    specialCardValue: 0,
    deckTrimValue: 0,
    eliteRouteBias: 0,
    restRouteBias: 0,
    forgeRouteBias: 0,
    treasureRouteBias: 0,
    branchingRouteBias: 0,
    riskTolerance: 0,
    aggressionPlanBias: 0,
    controlPlanBias: 0,
    tempoPlanBias: 0,
    fusionPlanBias: 0,
    precisionPlanBias: 0,
    uncommonCardBias: 0,
    rareCardBias: 0,
    charmSynergyBias: 0,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
  };
}

function cloneWeights(weights: TrainedBotWeights): TrainedBotWeights {
  return { ...weights };
}

function averageWeights(weightsList: TrainedBotWeights[]): TrainedBotWeights {
  const sums = createZeroWeights();

  for (const weights of weightsList) {
    for (const key of WEIGHT_KEYS) {
      sums[key] += weights[key];
    }
  }

  const count = weightsList.length || 1;
  return {
    hpDiff: sums.hpDiff / count,
    controlDiff: sums.controlDiff / count,
    boardStrengthDiff: sums.boardStrengthDiff / count,
    reserveStrengthDiff: sums.reserveStrengthDiff / count,
    handStrengthDiff: sums.handStrengthDiff / count,
    mobilityDiff: sums.mobilityDiff / count,
    cornerControlDiff: sums.cornerControlDiff / count,
    occupiedBoardDiff: sums.occupiedBoardDiff / count,
    imminentRoundDamageDiff: sums.imminentRoundDamageDiff / count,
    activeTurnTempo: sums.activeTurnTempo / count,
    specialCardValue: sums.specialCardValue / count,
    deckTrimValue: sums.deckTrimValue / count,
    eliteRouteBias: sums.eliteRouteBias / count,
    restRouteBias: sums.restRouteBias / count,
    forgeRouteBias: sums.forgeRouteBias / count,
    treasureRouteBias: sums.treasureRouteBias / count,
    branchingRouteBias: sums.branchingRouteBias / count,
    riskTolerance: sums.riskTolerance / count,
    aggressionPlanBias: sums.aggressionPlanBias / count,
    controlPlanBias: sums.controlPlanBias / count,
    tempoPlanBias: sums.tempoPlanBias / count,
    fusionPlanBias: sums.fusionPlanBias / count,
    precisionPlanBias: sums.precisionPlanBias / count,
    uncommonCardBias: sums.uncommonCardBias / count,
    rareCardBias: sums.rareCardBias / count,
    charmSynergyBias: sums.charmSynergyBias / count,
    duplicateCardPenalty: sums.duplicateCardPenalty / count,
    enemyProfileRespect: sums.enemyProfileRespect / count,
  };
}

function sampleNormal(seed: number): { value: number; seed: number } {
  const first = nextRandom(seed);
  const second = nextRandom(first.seed);
  const u1 = Math.max(first.value, 1e-7);
  const u2 = second.value;
  const radius = Math.sqrt(-2 * Math.log(u1));
  const angle = 2 * Math.PI * u2;

  return {
    value: radius * Math.cos(angle),
    seed: second.seed,
  };
}

function mutateWeights(meanWeights: TrainedBotWeights, sigma: number, seed: number): { weights: TrainedBotWeights; seed: number } {
  const nextWeights = cloneWeights(meanWeights);
  let nextSeed = seed;

  for (const key of WEIGHT_KEYS) {
    const sample = sampleNormal(nextSeed);
    nextWeights[key] = Number((meanWeights[key] + sample.value * sigma).toFixed(4));
    nextSeed = sample.seed;
  }

  return {
    weights: nextWeights,
    seed: nextSeed,
  };
}

function evaluateCandidate(options: {
  candidateWeights: TrainedBotWeights;
  championWeights: TrainedBotWeights;
  seed: number;
  iteration: number;
  candidateIndex: number;
  matchesPerOpponent: number;
  campaignRunsPerOpponent: number;
  searchDepth: number;
  beamWidth: number;
}): WeightCandidateScore {
  const benchmark = benchmarkBotAgainstOpponents({
    seed: mixSeed(options.seed, `iter:${options.iteration}:candidate:${options.candidateIndex}`),
    candidate: {
      id: "candidate",
      label: "candidate",
      bot: createConfiguredTrainedBot(options.candidateWeights, options.searchDepth, options.beamWidth),
      searchDepth: options.searchDepth,
      beamWidth: options.beamWidth,
    },
    opponents: [
      {
        id: greedyBot.id,
        label: greedyBot.label,
        bot: greedyBot,
        searchDepth: 1,
        beamWidth: 12,
      },
      {
        id: heuristicBot.id,
        label: heuristicBot.label,
        bot: heuristicBot,
        searchDepth: options.searchDepth,
        beamWidth: options.beamWidth,
      },
      {
        id: "champion",
        label: "champion",
        bot: createConfiguredTrainedBot(options.championWeights, options.searchDepth, options.beamWidth),
        searchDepth: options.searchDepth,
        beamWidth: options.beamWidth,
      },
    ],
    matchesPerOpponent: options.matchesPerOpponent,
  });
  const adventureBenchmark = benchmarkAdventureAgainstOpponents({
    seed: mixSeed(options.seed, `adventure-iter:${options.iteration}:candidate:${options.candidateIndex}`),
    candidate: {
      id: "candidate",
      label: "candidate",
      bot: createConfiguredTrainedBot(options.candidateWeights, options.searchDepth, options.beamWidth),
      searchDepth: options.searchDepth,
      beamWidth: options.beamWidth,
      weights: options.candidateWeights,
    },
    opponents: [
      {
        id: "heuristic",
        label: "heuristic",
        bot: heuristicBot,
        searchDepth: options.searchDepth,
        beamWidth: options.beamWidth,
      },
      {
        id: "champion",
        label: "champion",
        bot: createConfiguredTrainedBot(options.championWeights, options.searchDepth, options.beamWidth),
        searchDepth: options.searchDepth,
        beamWidth: options.beamWidth,
      },
    ],
    runsPerOpponent: options.campaignRunsPerOpponent,
  });

  const score =
    benchmark.totalWins +
    benchmark.totalDraws * 0.5 +
    benchmark.averageHpEdge * 0.015 +
    adventureBenchmark.averageScore * BOT_TRAINING_CONFIG.campaignScoreWeight +
    adventureBenchmark.averageLocationsCleared * 0.8 +
    adventureBenchmark.totalBossReached * 0.9 +
    adventureBenchmark.totalVictories * 1.35;

  return {
    weights: cloneWeights(options.candidateWeights),
    score,
    wins: benchmark.totalWins,
    draws: benchmark.totalDraws,
    losses: benchmark.totalLosses,
    averageHpEdge: benchmark.averageHpEdge,
    campaignAverageScore: adventureBenchmark.averageScore,
    campaignBossReachRate: adventureBenchmark.overallBossReachRate,
    campaignVictoryRate: adventureBenchmark.overallVictoryRate,
  };
}

export function formatTrainedBotProfileModule(options: {
  name: string;
  trainedAt: string;
  iterations: number;
  matchesPerOpponent: number;
  searchDepth: number;
  beamWidth: number;
  weights: TrainedBotWeights;
}): string {
  const weightLines = WEIGHT_KEYS.map((key) => `    ${key}: ${options.weights[key]},`).join("\n");

  return [
    "import type { TrainedBotWeights } from \"@/core/types\";",
    "",
    "export interface TrainedBotProfile {",
    "  name: string;",
    "  trainedAt: string;",
    "  iterations: number;",
    "  matchesPerOpponent: number;",
    "  searchDepth: number;",
    "  beamWidth: number;",
    "  weights: TrainedBotWeights;",
    "}",
    "",
    "export const TRAINED_BOT_PROFILE: TrainedBotProfile = {",
    `  name: ${JSON.stringify(options.name)},`,
    `  trainedAt: ${JSON.stringify(options.trainedAt)},`,
    `  iterations: ${options.iterations},`,
    `  matchesPerOpponent: ${options.matchesPerOpponent},`,
    `  searchDepth: ${options.searchDepth},`,
    `  beamWidth: ${options.beamWidth},`,
    "  weights: {",
    weightLines,
    "  },",
    "};",
    "",
  ].join("\n");
}

export function trainTrainedBotWeights(
  initialWeights: TrainedBotWeights,
  options: TrainTrainedBotOptions,
): TrainedBotRunSummary {
  const iterations = options.iterations ?? BOT_TRAINING_CONFIG.iterations;
  const populationSize = options.populationSize ?? BOT_TRAINING_CONFIG.populationSize;
  const eliteCount = Math.min(options.eliteCount ?? BOT_TRAINING_CONFIG.eliteCount, populationSize);
  const matchesPerOpponent = options.matchesPerOpponent ?? BOT_TRAINING_CONFIG.matchesPerOpponent;
  const campaignRunsPerOpponent =
    options.campaignRunsPerOpponent ?? BOT_TRAINING_CONFIG.campaignTrainingRunsPerOpponent;
  const searchDepth = options.searchDepth ?? BOT_TRAINING_CONFIG.defaultSearchDepth;
  const beamWidth = options.beamWidth ?? BOT_TRAINING_CONFIG.defaultBeamWidth;

  let meanWeights = cloneWeights(initialWeights);
  let championWeights = cloneWeights(initialWeights);
  let sigma = BOT_TRAINING_CONFIG.initialSigma;
  let best: WeightCandidateScore = {
    weights: cloneWeights(initialWeights),
    score: Number.NEGATIVE_INFINITY,
    wins: 0,
    draws: 0,
    losses: 0,
    averageHpEdge: 0,
    campaignAverageScore: 0,
    campaignBossReachRate: 0,
    campaignVictoryRate: 0,
  };
  let seed = options.seed;
  const history: TrainingIterationSummary[] = [];
  const totalUnits = iterations * populationSize + 1;

  const emitProgress = (snapshot: Omit<TrainingProgressSnapshot, "totalIterations" | "totalUnits">) => {
    options.onProgress?.({
      ...snapshot,
      totalIterations: iterations,
      totalUnits,
    });
  };

  for (let iteration = 1; iteration <= iterations; iteration += 1) {
    const candidates: WeightCandidateScore[] = [];

    for (let candidateIndex = 0; candidateIndex < populationSize; candidateIndex += 1) {
      const unitIndex = (iteration - 1) * populationSize + candidateIndex + 1;
      const mutated =
        candidateIndex === 0
          ? { weights: cloneWeights(meanWeights), seed }
          : mutateWeights(meanWeights, sigma, seed);
      seed = mutated.seed;

      emitProgress({
        phase: "candidate",
        phaseLabel: `Iteration ${iteration}/${iterations} - candidat ${candidateIndex + 1}/${populationSize}`,
        iteration,
        candidateIndex: candidateIndex + 1,
        populationSize,
        startedUnits: unitIndex,
        completedUnits: unitIndex - 1,
        bestScore: Number.isFinite(best.score) ? best.score : null,
        wins: Number.isFinite(best.score) ? best.wins : null,
        draws: Number.isFinite(best.score) ? best.draws : null,
        losses: Number.isFinite(best.score) ? best.losses : null,
        averageHpEdge: Number.isFinite(best.score) ? best.averageHpEdge : null,
        campaignAverageScore: Number.isFinite(best.score) ? best.campaignAverageScore : null,
        campaignBossReachRate: Number.isFinite(best.score) ? best.campaignBossReachRate : null,
        campaignVictoryRate: Number.isFinite(best.score) ? best.campaignVictoryRate : null,
      });

      const candidateScore = evaluateCandidate({
        candidateWeights: mutated.weights,
        championWeights,
        seed: options.seed,
        iteration,
        candidateIndex,
        matchesPerOpponent,
        campaignRunsPerOpponent,
        searchDepth,
        beamWidth,
      });
      candidates.push(candidateScore);
      const runningBest =
        candidateScore.score > best.score
          ? candidateScore
          : candidates.reduce<WeightCandidateScore>(
              (currentBest, entry) => (entry.score > currentBest.score ? entry : currentBest),
              best,
            );

      emitProgress({
        phase: "candidate",
        phaseLabel: `Iteration ${iteration}/${iterations} - candidat ${candidateIndex + 1}/${populationSize}`,
        iteration,
        candidateIndex: candidateIndex + 1,
        populationSize,
        startedUnits: unitIndex,
        completedUnits: unitIndex,
        bestScore: Number.isFinite(runningBest.score) ? runningBest.score : null,
        wins: Number.isFinite(runningBest.score) ? runningBest.wins : null,
        draws: Number.isFinite(runningBest.score) ? runningBest.draws : null,
        losses: Number.isFinite(runningBest.score) ? runningBest.losses : null,
        averageHpEdge: Number.isFinite(runningBest.score) ? runningBest.averageHpEdge : null,
        campaignAverageScore: Number.isFinite(runningBest.score) ? runningBest.campaignAverageScore : null,
        campaignBossReachRate: Number.isFinite(runningBest.score) ? runningBest.campaignBossReachRate : null,
        campaignVictoryRate: Number.isFinite(runningBest.score) ? runningBest.campaignVictoryRate : null,
      });
    }

    candidates.sort((left, right) => right.score - left.score);
    const elites = candidates.slice(0, eliteCount);
    meanWeights = averageWeights(elites.map((entry) => entry.weights));
    sigma = Math.max(BOT_TRAINING_CONFIG.minSigma, sigma * BOT_TRAINING_CONFIG.sigmaDecay);

    if (candidates[0] && candidates[0].score > best.score) {
      best = candidates[0];
      championWeights = cloneWeights(candidates[0].weights);
    }

    history.push({
      iteration,
      sigma,
      best: candidates[0],
      meanWeights: cloneWeights(meanWeights),
    });

    options.onIterationComplete?.(history[history.length - 1]);
  }

  emitProgress({
    phase: "promotion",
    phaseLabel: "Benchmark final et promotion",
    iteration: null,
    candidateIndex: null,
    populationSize: null,
    startedUnits: totalUnits,
    completedUnits: totalUnits - 1,
    bestScore: Number.isFinite(best.score) ? best.score : null,
    wins: Number.isFinite(best.score) ? best.wins : null,
    draws: Number.isFinite(best.score) ? best.draws : null,
    losses: Number.isFinite(best.score) ? best.losses : null,
    averageHpEdge: Number.isFinite(best.score) ? best.averageHpEdge : null,
    campaignAverageScore: Number.isFinite(best.score) ? best.campaignAverageScore : null,
    campaignBossReachRate: Number.isFinite(best.score) ? best.campaignBossReachRate : null,
    campaignVictoryRate: Number.isFinite(best.score) ? best.campaignVictoryRate : null,
  });

  return {
    best,
    history,
    finalMeanWeights: meanWeights,
  };
}
