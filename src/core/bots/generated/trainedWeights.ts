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
  name: "trained-bot-20260908-162559",
  trainedAt: "2026-09-08T16:25:59.363Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 63.2502,
    shieldDiff: 104.8937,
    drawBonusDiff: 65.1506,
    manaBonusDiff: 84.0514,
    poisonDiff: 47.0237,
    controlDiff: 65.7181,
    boardStrengthDiff: 0,
    boardManaDiff: 58.5347,
    stackSynergyDiff: 33.1167,
    reserveStrengthDiff: 30,
    handStrengthDiff: -8.8671,
    mobilityDiff: 17.4528,
    cornerControlDiff: 24.1514,
    occupiedBoardDiff: -14.4319,
    imminentRoundDamageDiff: 83.095,
    activeTurnTempo: 26.0912,
    specialCardValue: 9.6068,
    deckTrimValue: 0,
    eliteRouteBias: 8,
    restRouteBias: 5.5637,
    forgeRouteBias: 0,
    treasureRouteBias: 9.6482,
    branchingRouteBias: 6.0956,
    riskTolerance: -0.7112,
    aggressionPlanBias: -8.617,
    controlPlanBias: 13.5014,
    tempoPlanBias: 4.3365,
    fusionPlanBias: 4.6492,
    precisionPlanBias: 4.213,
    uncommonCardBias: 5.5972,
    rareCardBias: 11.1919,
    charmSynergyBias: 13.4922,
    duplicateCardPenalty: 6.4391,
    enemyProfileRespect: 2.9205,
  },
};
