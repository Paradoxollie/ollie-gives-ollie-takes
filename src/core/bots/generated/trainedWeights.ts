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
  name: "trained-bot-20261010-141701",
  trainedAt: "2026-10-10T14:17:01.697Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.2545,
    shieldDiff: 61.7347,
    drawBonusDiff: 15.0437,
    manaBonusDiff: 78.6151,
    poisonDiff: 60.0776,
    controlDiff: 34.6105,
    boardStrengthDiff: 22.1562,
    boardManaDiff: 62.4629,
    stackSynergyDiff: 63.7707,
    reserveStrengthDiff: 28.0279,
    handStrengthDiff: 24.4136,
    mobilityDiff: 5.2047,
    cornerControlDiff: 1.5732,
    occupiedBoardDiff: -4.0859,
    imminentRoundDamageDiff: 50.7565,
    activeTurnTempo: 18.4377,
    specialCardValue: 17.4959,
    deckTrimValue: 0,
    eliteRouteBias: -2.9151,
    restRouteBias: 3.086,
    forgeRouteBias: 3.1034,
    treasureRouteBias: 1.2984,
    branchingRouteBias: 7.9542,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: 0.412,
    tempoPlanBias: -6.8636,
    fusionPlanBias: 4.5751,
    precisionPlanBias: -6.128,
    uncommonCardBias: 4.5453,
    rareCardBias: 3.3893,
    charmSynergyBias: 3.431,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 9.8447,
  },
};
