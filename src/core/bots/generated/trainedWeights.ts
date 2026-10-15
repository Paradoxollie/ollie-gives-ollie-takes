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
  name: "trained-bot-20261014-190420",
  trainedAt: "2026-10-14T19:04:20.179Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 79.5839,
    shieldDiff: 73.3165,
    drawBonusDiff: 5.391,
    manaBonusDiff: 75.6059,
    poisonDiff: 66.1441,
    controlDiff: 58.0019,
    boardStrengthDiff: 25.4182,
    boardManaDiff: 58.2495,
    stackSynergyDiff: 83.833,
    reserveStrengthDiff: 27.1051,
    handStrengthDiff: 10.0836,
    mobilityDiff: 18.9934,
    cornerControlDiff: 5.486,
    occupiedBoardDiff: -5.5841,
    imminentRoundDamageDiff: 50.5146,
    activeTurnTempo: 23.6709,
    specialCardValue: 18,
    deckTrimValue: 7.5722,
    eliteRouteBias: 7.5479,
    restRouteBias: 3.2928,
    forgeRouteBias: 4.9665,
    treasureRouteBias: 2.1892,
    branchingRouteBias: 1.8095,
    riskTolerance: 0.3117,
    aggressionPlanBias: -2.645,
    controlPlanBias: 1.3533,
    tempoPlanBias: -2.514,
    fusionPlanBias: 16.225,
    precisionPlanBias: -6.7443,
    uncommonCardBias: 9.6754,
    rareCardBias: 3.2482,
    charmSynergyBias: 1.6807,
    duplicateCardPenalty: 4.0231,
    enemyProfileRespect: 9.133,
  },
};
