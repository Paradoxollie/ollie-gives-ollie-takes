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
  name: "trained-bot-20261026-140909",
  trainedAt: "2026-10-26T14:09:09.112Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.9833,
    shieldDiff: 79.20235,
    drawBonusDiff: 19.2658,
    manaBonusDiff: 57.4854,
    poisonDiff: 88.2539,
    controlDiff: 79.3809,
    boardStrengthDiff: 9.6735,
    boardManaDiff: 22.9529,
    stackSynergyDiff: 96.9521,
    reserveStrengthDiff: 13.696100000000001,
    handStrengthDiff: 7.330350000000001,
    mobilityDiff: 21.926000000000002,
    cornerControlDiff: 6.2995,
    occupiedBoardDiff: -18.51755,
    imminentRoundDamageDiff: 91.95095,
    activeTurnTempo: 24.161,
    specialCardValue: 8.3328,
    deckTrimValue: 0.87855,
    eliteRouteBias: -2.2462,
    restRouteBias: 3.2349,
    forgeRouteBias: 8.7506,
    treasureRouteBias: 11.6374,
    branchingRouteBias: 4.8747,
    riskTolerance: 6.67365,
    aggressionPlanBias: -4.5145,
    controlPlanBias: -6.32575,
    tempoPlanBias: -8.568200000000001,
    fusionPlanBias: 5.100899999999999,
    precisionPlanBias: -2.4945,
    uncommonCardBias: -0.34624999999999995,
    rareCardBias: 1.6145,
    charmSynergyBias: -1.9589500000000002,
    duplicateCardPenalty: 5.2534,
    enemyProfileRespect: 3.9864499999999996,
  },
};
