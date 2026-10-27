import type { TrainedBotWeights } from "@/core/types";

export interface TrainedBotProfile {
  name: string;
  trainedAt: string;
  iterations: number;
  matchesPerOpponent: number;
  searchDepth: number;
  beamWidth: number;
  weights: TrainedBotWeights;
}

export const TRAINED_BOT_PROFILE: TrainedBotProfile = {
  name: "trained-bot-20261027-182924",
  trainedAt: "2026-10-27T18:29:24.918Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 103.371,
    shieldDiff: 74.2358,
    drawBonusDiff: 20.3694,
    manaBonusDiff: 51.1319,
    poisonDiff: 86.5674,
    controlDiff: 87.2649,
    boardStrengthDiff: 8.1631,
    boardManaDiff: 25.4437,
    stackSynergyDiff: 112.4842,
    reserveStrengthDiff: 16.5564,
    handStrengthDiff: 4.2697,
    mobilityDiff: 19.1442,
    cornerControlDiff: 12.3624,
    occupiedBoardDiff: -12.7306,
    imminentRoundDamageDiff: 96.2713,
    activeTurnTempo: 25.4137,
    specialCardValue: 4.9146,
    deckTrimValue: 6.2257,
    eliteRouteBias: -1.7104,
    restRouteBias: 0,
    forgeRouteBias: 2.2411,
    treasureRouteBias: 6.2118,
    branchingRouteBias: 0.7439,
    riskTolerance: 0.107,
    aggressionPlanBias: -12,
    controlPlanBias: -1.51,
    tempoPlanBias: -8.6091,
    fusionPlanBias: 15.7484,
    precisionPlanBias: 0.4791,
    uncommonCardBias: 2.8198,
    rareCardBias: -0.6762,
    charmSynergyBias: 7.1025,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 5.0293,
  },
};
