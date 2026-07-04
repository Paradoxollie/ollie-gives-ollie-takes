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
  name: "trained-bot-20260704-150423",
  trainedAt: "2026-07-04T15:04:23.351Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.0231,
    shieldDiff: 54.3502,
    drawBonusDiff: 1.1717,
    manaBonusDiff: 80.9103,
    poisonDiff: 54.259,
    controlDiff: 14.9158,
    boardStrengthDiff: 30.9196,
    boardManaDiff: 10.2949,
    stackSynergyDiff: 11.1325,
    reserveStrengthDiff: 7.7419,
    handStrengthDiff: 24.5761,
    mobilityDiff: 13.954,
    cornerControlDiff: 3.6605,
    occupiedBoardDiff: 47.9892,
    imminentRoundDamageDiff: 50.9483,
    activeTurnTempo: 19.4172,
    specialCardValue: 13.9026,
    deckTrimValue: 6.1136,
    eliteRouteBias: 0.613,
    restRouteBias: 7.8772,
    forgeRouteBias: 2.5455,
    treasureRouteBias: 8.0339,
    branchingRouteBias: 7.8416,
    riskTolerance: 5.6984,
    aggressionPlanBias: -8.4379,
    controlPlanBias: 15.3435,
    tempoPlanBias: -6.3242,
    fusionPlanBias: 15.9053,
    precisionPlanBias: 15.846,
    uncommonCardBias: 3.5563,
    rareCardBias: 2.4797,
    charmSynergyBias: 11.0494,
    duplicateCardPenalty: 5.1772,
    enemyProfileRespect: 7.8464,
  },
};
