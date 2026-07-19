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
  name: "trained-bot-20260719-141528",
  trainedAt: "2026-07-19T14:15:28.236Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 130.7008,
    shieldDiff: 62.0744,
    drawBonusDiff: 47.5025,
    manaBonusDiff: 51.6558,
    poisonDiff: 66.703,
    controlDiff: 41.8755,
    boardStrengthDiff: 45.6728,
    boardManaDiff: 13.0023,
    stackSynergyDiff: 35.0707,
    reserveStrengthDiff: 25.6754,
    handStrengthDiff: 4.7608,
    mobilityDiff: 30,
    cornerControlDiff: 6.7738,
    occupiedBoardDiff: 12.5075,
    imminentRoundDamageDiff: 60.8091,
    activeTurnTempo: 28.3553,
    specialCardValue: 14.1127,
    deckTrimValue: 3.394,
    eliteRouteBias: 5.5223,
    restRouteBias: 12,
    forgeRouteBias: 4.4578,
    treasureRouteBias: 11.2096,
    branchingRouteBias: 7.2191,
    riskTolerance: -3.0937,
    aggressionPlanBias: 6.39,
    controlPlanBias: -2.5146,
    tempoPlanBias: -8.741,
    fusionPlanBias: 2.3455,
    precisionPlanBias: -7.261,
    uncommonCardBias: 3.2266,
    rareCardBias: -2.4768,
    charmSynergyBias: 1.8842,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 4.281,
  },
};
