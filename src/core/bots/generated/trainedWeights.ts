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
  name: "trained-bot-20260830-140337",
  trainedAt: "2026-08-30T14:03:37.716Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 84.5925,
    shieldDiff: 110.4737,
    drawBonusDiff: 17.1113,
    manaBonusDiff: 98.4805,
    poisonDiff: 60.7216,
    controlDiff: 73.8697,
    boardStrengthDiff: 29.8004,
    boardManaDiff: 44.1228,
    stackSynergyDiff: 19.064,
    reserveStrengthDiff: 16.2193,
    handStrengthDiff: 25.9275,
    mobilityDiff: 30,
    cornerControlDiff: 17.3861,
    occupiedBoardDiff: -26.5927,
    imminentRoundDamageDiff: 74.948,
    activeTurnTempo: 45.7634,
    specialCardValue: 14.4789,
    deckTrimValue: 3.1321,
    eliteRouteBias: 0.7646,
    restRouteBias: 7.9774,
    forgeRouteBias: 12,
    treasureRouteBias: 1.4604,
    branchingRouteBias: 7.1624,
    riskTolerance: -1.8516,
    aggressionPlanBias: 14.1964,
    controlPlanBias: 1.9441,
    tempoPlanBias: 7.0152,
    fusionPlanBias: -5.0681,
    precisionPlanBias: 13.3366,
    uncommonCardBias: -2.649,
    rareCardBias: -3.8588,
    charmSynergyBias: 6.1961,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 1.1285,
  },
};
