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
  name: "trained-bot-20261009-150945",
  trainedAt: "2026-10-09T15:09:45.484Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 70.2379,
    shieldDiff: 71.5427,
    drawBonusDiff: 26.1102,
    manaBonusDiff: 76.20335,
    poisonDiff: 59.573949999999996,
    controlDiff: 35.3788,
    boardStrengthDiff: 24.0229,
    boardManaDiff: 72.7493,
    stackSynergyDiff: 67.7495,
    reserveStrengthDiff: 30,
    handStrengthDiff: 8.9924,
    mobilityDiff: 4.7179,
    cornerControlDiff: 2.26935,
    occupiedBoardDiff: -3.3743,
    imminentRoundDamageDiff: 45.70095,
    activeTurnTempo: 14.932,
    specialCardValue: 15.0744,
    deckTrimValue: 1.6234,
    eliteRouteBias: -3.47165,
    restRouteBias: 1.1904,
    forgeRouteBias: 12,
    treasureRouteBias: 2.6106,
    branchingRouteBias: 9.65835,
    riskTolerance: -3.08185,
    aggressionPlanBias: -4.1584,
    controlPlanBias: 5.1483,
    tempoPlanBias: -7.37845,
    fusionPlanBias: 6.67065,
    precisionPlanBias: 3.2365500000000003,
    uncommonCardBias: 10,
    rareCardBias: 5.3664000000000005,
    charmSynergyBias: -3.68335,
    duplicateCardPenalty: 8.2964,
    enemyProfileRespect: 10,
  },
};
