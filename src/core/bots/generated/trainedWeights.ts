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
  name: "trained-bot-20261025-215440",
  trainedAt: "2026-10-25T21:54:40.840Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.9391,
    shieldDiff: 84.0061,
    drawBonusDiff: 14.8278,
    manaBonusDiff: 56.5004,
    poisonDiff: 81.055,
    controlDiff: 82.5016,
    boardStrengthDiff: 14.1218,
    boardManaDiff: 23.0373,
    stackSynergyDiff: 88.9053,
    reserveStrengthDiff: 18.3758,
    handStrengthDiff: 3.2532,
    mobilityDiff: 21.1724,
    cornerControlDiff: 3.2545,
    occupiedBoardDiff: -17.3675,
    imminentRoundDamageDiff: 96.4556,
    activeTurnTempo: 27.0452,
    specialCardValue: 9.5396,
    deckTrimValue: 5.634,
    eliteRouteBias: -8,
    restRouteBias: 8.4475,
    forgeRouteBias: 11.1869,
    treasureRouteBias: 9.4766,
    branchingRouteBias: 10,
    riskTolerance: 8,
    aggressionPlanBias: -12,
    controlPlanBias: -5.3551,
    tempoPlanBias: -7.2629,
    fusionPlanBias: 3.461,
    precisionPlanBias: -10.5741,
    uncommonCardBias: 2.0552,
    rareCardBias: 0.4474,
    charmSynergyBias: 7.1534,
    duplicateCardPenalty: 7.4508,
    enemyProfileRespect: 4.8941,
  },
};
