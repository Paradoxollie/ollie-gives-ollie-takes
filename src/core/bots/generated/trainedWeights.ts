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
  name: "trained-bot-20261003-004439",
  trainedAt: "2026-10-03T00:44:39.640Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 65.4023,
    shieldDiff: 90.2317,
    drawBonusDiff: 21.4347,
    manaBonusDiff: 51.4082,
    poisonDiff: 73.3328,
    controlDiff: 39.6486,
    boardStrengthDiff: 23.8861,
    boardManaDiff: 59.0768,
    stackSynergyDiff: 75.5707,
    reserveStrengthDiff: 17.698,
    handStrengthDiff: 1.4181,
    mobilityDiff: -6.7361,
    cornerControlDiff: 11.7707,
    occupiedBoardDiff: -8.4708,
    imminentRoundDamageDiff: 33.4217,
    activeTurnTempo: 13.5205,
    specialCardValue: 0,
    deckTrimValue: 0.1586,
    eliteRouteBias: 4.5608,
    restRouteBias: 5.755,
    forgeRouteBias: 3.2448,
    treasureRouteBias: 5.2472,
    branchingRouteBias: 7.3606,
    riskTolerance: -1.6106,
    aggressionPlanBias: -7.393,
    controlPlanBias: -9.2951,
    tempoPlanBias: -10.7826,
    fusionPlanBias: -9.3897,
    precisionPlanBias: -5.4585,
    uncommonCardBias: 7.0071,
    rareCardBias: -0.5717,
    charmSynergyBias: 3.3033,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
  },
};
