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
  name: "trained-bot-20260907-014415",
  trainedAt: "2026-09-07T01:44:15.300Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.9903,
    shieldDiff: 115.362,
    drawBonusDiff: 48.7431,
    manaBonusDiff: 84.1458,
    poisonDiff: 49.7075,
    controlDiff: 62.0945,
    boardStrengthDiff: 0.5613,
    boardManaDiff: 63.8599,
    stackSynergyDiff: 36.6577,
    reserveStrengthDiff: 29.5537,
    handStrengthDiff: -1.9103,
    mobilityDiff: 27.5816,
    cornerControlDiff: 24.3027,
    occupiedBoardDiff: -29.1904,
    imminentRoundDamageDiff: 80.0544,
    activeTurnTempo: 34.8078,
    specialCardValue: 10.0471,
    deckTrimValue: 0,
    eliteRouteBias: 6.7644,
    restRouteBias: 9.0689,
    forgeRouteBias: 7.2668,
    treasureRouteBias: 11.1281,
    branchingRouteBias: 3.6557,
    riskTolerance: -4,
    aggressionPlanBias: -6.9895,
    controlPlanBias: 11.473,
    tempoPlanBias: 4.5281,
    fusionPlanBias: -1.0431,
    precisionPlanBias: 0.5249,
    uncommonCardBias: -0.8494,
    rareCardBias: 4.9659,
    charmSynergyBias: 14,
    duplicateCardPenalty: 6.0617,
    enemyProfileRespect: 4.3225,
  },
};
