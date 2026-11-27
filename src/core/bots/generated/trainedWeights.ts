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
  name: "trained-bot-20261127-165657",
  trainedAt: "2026-11-27T16:56:57.147Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 53.0352,
    shieldDiff: 24.4973,
    drawBonusDiff: 41.1032,
    manaBonusDiff: 3.3721,
    poisonDiff: 76.5591,
    controlDiff: 120.137,
    boardStrengthDiff: 21.8344,
    boardManaDiff: 17.0698,
    stackSynergyDiff: 109.0974,
    reserveStrengthDiff: 21.9161,
    handStrengthDiff: -10,
    mobilityDiff: 24.1435,
    cornerControlDiff: 1.9498,
    occupiedBoardDiff: -13.5432,
    imminentRoundDamageDiff: 83.6439,
    activeTurnTempo: 36.7816,
    specialCardValue: 14.1784,
    deckTrimValue: 0,
    eliteRouteBias: -2.5972,
    restRouteBias: 0,
    forgeRouteBias: 7.959,
    treasureRouteBias: 4.5155,
    branchingRouteBias: 10,
    riskTolerance: 5.3275,
    aggressionPlanBias: -7.8631,
    controlPlanBias: 7.445,
    tempoPlanBias: -3.3678,
    fusionPlanBias: 10.4748,
    precisionPlanBias: -11.5667,
    uncommonCardBias: -4,
    rareCardBias: 6.854,
    charmSynergyBias: 3.6381,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 7.6586,
  },
};
