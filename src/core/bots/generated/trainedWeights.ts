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
  name: "trained-bot-20261107-060209",
  trainedAt: "2026-11-07T06:02:09.539Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 67.3105,
    shieldDiff: 92.6531,
    drawBonusDiff: 2.1374,
    manaBonusDiff: 25.6066,
    poisonDiff: 66.7368,
    controlDiff: 132.0725,
    boardStrengthDiff: 22.3992,
    boardManaDiff: 5.9987,
    stackSynergyDiff: 114.6546,
    reserveStrengthDiff: 16.7952,
    handStrengthDiff: -8.243,
    mobilityDiff: 28.7169,
    cornerControlDiff: 13.9178,
    occupiedBoardDiff: -29.0349,
    imminentRoundDamageDiff: 100.9755,
    activeTurnTempo: 22.9234,
    specialCardValue: 13.7475,
    deckTrimValue: 6.8033,
    eliteRouteBias: -6.3763,
    restRouteBias: 4.7298,
    forgeRouteBias: 9.4721,
    treasureRouteBias: 10.1139,
    branchingRouteBias: 6.6386,
    riskTolerance: 7.8436,
    aggressionPlanBias: -5.2588,
    controlPlanBias: 16.0298,
    tempoPlanBias: -7.5701,
    fusionPlanBias: 4.2714,
    precisionPlanBias: -4.6821,
    uncommonCardBias: -4,
    rareCardBias: 8.3413,
    charmSynergyBias: 5.7105,
    duplicateCardPenalty: 7.8538,
    enemyProfileRespect: 10,
  },
};
