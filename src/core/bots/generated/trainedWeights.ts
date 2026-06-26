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
  name: "trained-bot-20260626-023351",
  trainedAt: "2026-06-26T02:33:51.294Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.8747,
    shieldDiff: 44.8138,
    drawBonusDiff: 0,
    manaBonusDiff: 84.5625,
    poisonDiff: 80.582,
    controlDiff: 17.0177,
    boardStrengthDiff: 24.4842,
    boardManaDiff: 16.712,
    stackSynergyDiff: 10.7795,
    reserveStrengthDiff: 26.9947,
    handStrengthDiff: 40.4894,
    mobilityDiff: 16.6069,
    cornerControlDiff: 24.5665,
    occupiedBoardDiff: 35.5762,
    imminentRoundDamageDiff: 59.1089,
    activeTurnTempo: 6.8354,
    specialCardValue: 15.9382,
    deckTrimValue: 0,
    eliteRouteBias: 1.2692,
    restRouteBias: 2.844,
    forgeRouteBias: 11.1317,
    treasureRouteBias: 9.3278,
    branchingRouteBias: 10,
    riskTolerance: 5.2424,
    aggressionPlanBias: -2.5677,
    controlPlanBias: 13.1976,
    tempoPlanBias: -10.1166,
    fusionPlanBias: -0.4509,
    precisionPlanBias: 6.6664,
    uncommonCardBias: 8.8196,
    rareCardBias: -1.4528,
    charmSynergyBias: 14,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
