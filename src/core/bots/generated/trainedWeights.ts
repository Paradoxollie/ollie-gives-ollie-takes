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
  name: "trained-bot-20260604-051003",
  trainedAt: "2026-06-04T05:10:03.705Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.2116,
    shieldDiff: 44.52565,
    drawBonusDiff: 86.35915,
    controlDiff: 5.51365,
    boardStrengthDiff: 42.0864,
    boardManaDiff: 15.10115,
    stackSynergyDiff: 35.47225,
    reserveStrengthDiff: 26.558549999999997,
    handStrengthDiff: 23.282,
    mobilityDiff: 11.228200000000001,
    cornerControlDiff: 32.13505,
    occupiedBoardDiff: 26.63095,
    imminentRoundDamageDiff: 4.61385,
    activeTurnTempo: -16.107599999999998,
    specialCardValue: 17.076999999999998,
    deckTrimValue: 3.537,
    eliteRouteBias: -1.943,
    restRouteBias: 0,
    forgeRouteBias: 10.80655,
    treasureRouteBias: 1.38775,
    branchingRouteBias: 0.36745,
    riskTolerance: 6.2497,
    aggressionPlanBias: 14.4466,
    controlPlanBias: 9.5069,
    tempoPlanBias: -11.4262,
    fusionPlanBias: -1.12365,
    precisionPlanBias: 2.11175,
    uncommonCardBias: 1.1915,
    rareCardBias: 10.315750000000001,
    charmSynergyBias: 12.22765,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 5.0752500000000005,
  },
};
