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
  name: "trained-bot-20261121-232104",
  trainedAt: "2026-11-21T23:21:04.770Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 48.5752,
    shieldDiff: 48.291,
    drawBonusDiff: 41.8351,
    manaBonusDiff: 5.5709,
    poisonDiff: 74.8287,
    controlDiff: 123.7045,
    boardStrengthDiff: 13.9219,
    boardManaDiff: 25.4703,
    stackSynergyDiff: 106.8726,
    reserveStrengthDiff: 24.7507,
    handStrengthDiff: -8.9459,
    mobilityDiff: 29.6921,
    cornerControlDiff: 5.6663,
    occupiedBoardDiff: -20.6922,
    imminentRoundDamageDiff: 85.347,
    activeTurnTempo: 29.257,
    specialCardValue: 5.4082,
    deckTrimValue: 0,
    eliteRouteBias: -3.8262,
    restRouteBias: 4.7628,
    forgeRouteBias: 6.168,
    treasureRouteBias: 9.7591,
    branchingRouteBias: 4.3999,
    riskTolerance: 4.149,
    aggressionPlanBias: -7.0351,
    controlPlanBias: -8.3452,
    tempoPlanBias: -10.8203,
    fusionPlanBias: 2.6375,
    precisionPlanBias: -9.6382,
    uncommonCardBias: 0.8083,
    rareCardBias: 7.369,
    charmSynergyBias: 8.7941,
    duplicateCardPenalty: 7.1748,
    enemyProfileRespect: 5.0089,
  },
};
