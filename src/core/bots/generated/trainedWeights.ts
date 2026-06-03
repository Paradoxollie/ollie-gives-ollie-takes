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
  name: "trained-bot-20260603-115830",
  trainedAt: "2026-06-03T11:58:30.662Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 88.7846,
    shieldDiff: 45.8764,
    drawBonusDiff: 93.6326,
    controlDiff: 1.2981,
    boardStrengthDiff: 35.4588,
    boardManaDiff: 16.5093,
    stackSynergyDiff: 42.7582,
    reserveStrengthDiff: 26.3167,
    handStrengthDiff: 11.6773,
    mobilityDiff: 13.1944,
    cornerControlDiff: 25.684,
    occupiedBoardDiff: 17.1541,
    imminentRoundDamageDiff: 3.8546,
    activeTurnTempo: -19.3461,
    specialCardValue: 9.0989,
    deckTrimValue: 0.825,
    eliteRouteBias: -7.6111,
    restRouteBias: 9.1024,
    forgeRouteBias: 11.1327,
    treasureRouteBias: 12,
    branchingRouteBias: 9.8146,
    riskTolerance: 8,
    aggressionPlanBias: 18,
    controlPlanBias: 18,
    tempoPlanBias: 0.6985,
    fusionPlanBias: 4.7763,
    precisionPlanBias: -1.8334,
    uncommonCardBias: 10,
    rareCardBias: 9.5092,
    charmSynergyBias: 9.1837,
    duplicateCardPenalty: 4.8698,
    enemyProfileRespect: 2.6842,
  },
};
