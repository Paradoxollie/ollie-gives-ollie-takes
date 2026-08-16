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
  name: "trained-bot-20260816-014846",
  trainedAt: "2026-08-16T01:48:46.029Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.6604,
    shieldDiff: 117.962,
    drawBonusDiff: 45.3866,
    manaBonusDiff: 99.1357,
    poisonDiff: 55.0287,
    controlDiff: 72.1647,
    boardStrengthDiff: 9.1766,
    boardManaDiff: 44.0939,
    stackSynergyDiff: 23.0863,
    reserveStrengthDiff: 2.1335,
    handStrengthDiff: 36.28,
    mobilityDiff: -4.1924,
    cornerControlDiff: 8.7293,
    occupiedBoardDiff: 6.9956,
    imminentRoundDamageDiff: 62.2955,
    activeTurnTempo: 32.7059,
    specialCardValue: 12.1389,
    deckTrimValue: 5.4604,
    eliteRouteBias: 1.1222,
    restRouteBias: 10.3385,
    forgeRouteBias: 1.2619,
    treasureRouteBias: 12,
    branchingRouteBias: 2.9207,
    riskTolerance: 2.3916,
    aggressionPlanBias: 13.3386,
    controlPlanBias: 14.6905,
    tempoPlanBias: -1.6098,
    fusionPlanBias: 15.3028,
    precisionPlanBias: 4.2955,
    uncommonCardBias: 4.7326,
    rareCardBias: 4.4103,
    charmSynergyBias: 7.6614,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.48,
  },
};
