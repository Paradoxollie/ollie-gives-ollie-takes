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
  name: "trained-bot-20260809-231529",
  trainedAt: "2026-08-09T23:15:29.995Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.2377,
    shieldDiff: 95.8264,
    drawBonusDiff: 32.7727,
    manaBonusDiff: 87.2905,
    poisonDiff: 41.5258,
    controlDiff: 72.6719,
    boardStrengthDiff: 6.7887,
    boardManaDiff: 34.6568,
    stackSynergyDiff: 28.4199,
    reserveStrengthDiff: 2.9767,
    handStrengthDiff: 48.1664,
    mobilityDiff: 5.0473,
    cornerControlDiff: 5.151,
    occupiedBoardDiff: 22.5755,
    imminentRoundDamageDiff: 37.0621,
    activeTurnTempo: 27.644,
    specialCardValue: 11.3061,
    deckTrimValue: 14,
    eliteRouteBias: -8,
    restRouteBias: 12,
    forgeRouteBias: 11.6633,
    treasureRouteBias: 4.7739,
    branchingRouteBias: 5.6553,
    riskTolerance: 3.3694,
    aggressionPlanBias: 4.0035,
    controlPlanBias: 15.1555,
    tempoPlanBias: -12,
    fusionPlanBias: 14.0342,
    precisionPlanBias: 8.6166,
    uncommonCardBias: 2.0799,
    rareCardBias: 2.2035,
    charmSynergyBias: -0.0211,
    duplicateCardPenalty: 7.0817,
    enemyProfileRespect: 0.3382,
  },
};
