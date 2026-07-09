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
  name: "trained-bot-20260708-190739",
  trainedAt: "2026-07-08T19:07:39.257Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.2927,
    shieldDiff: 62.1099,
    drawBonusDiff: 24.5917,
    manaBonusDiff: 63.1748,
    poisonDiff: 68.2298,
    controlDiff: 16.1612,
    boardStrengthDiff: 21.44,
    boardManaDiff: 7.0192,
    stackSynergyDiff: 8.5127,
    reserveStrengthDiff: 23.2575,
    handStrengthDiff: 8.0557,
    mobilityDiff: 26.9537,
    cornerControlDiff: 5.7364,
    occupiedBoardDiff: 43.693,
    imminentRoundDamageDiff: 70.6255,
    activeTurnTempo: 13.3766,
    specialCardValue: 13.7041,
    deckTrimValue: 14,
    eliteRouteBias: -3.185,
    restRouteBias: 0,
    forgeRouteBias: 1.4217,
    treasureRouteBias: 10.3333,
    branchingRouteBias: 9.5347,
    riskTolerance: 4.6755,
    aggressionPlanBias: -0.7356,
    controlPlanBias: 9.3383,
    tempoPlanBias: -9.2409,
    fusionPlanBias: 4.0334,
    precisionPlanBias: 6.3568,
    uncommonCardBias: 9.4125,
    rareCardBias: 1.0602,
    charmSynergyBias: 12.1148,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 1.1198,
  },
};
