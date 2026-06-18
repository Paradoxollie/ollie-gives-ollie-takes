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
  name: "trained-bot-20260617-195646",
  trainedAt: "2026-06-17T19:56:46.208Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.4429,
    shieldDiff: 88.4241,
    drawBonusDiff: 27.4866,
    manaBonusDiff: 82.0087,
    poisonDiff: 106.7825,
    controlDiff: 18.6377,
    boardStrengthDiff: 37.3923,
    boardManaDiff: 21.7652,
    stackSynergyDiff: 0.1384,
    reserveStrengthDiff: 19.8401,
    handStrengthDiff: 45.9911,
    mobilityDiff: -5.2017,
    cornerControlDiff: 64.3764,
    occupiedBoardDiff: 21.6614,
    imminentRoundDamageDiff: 25.5749,
    activeTurnTempo: 6.5013,
    specialCardValue: 15.0373,
    deckTrimValue: 2.5457,
    eliteRouteBias: -8,
    restRouteBias: 11.7094,
    forgeRouteBias: 12,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: -0.4001,
    aggressionPlanBias: -1.1398,
    controlPlanBias: 9.0158,
    tempoPlanBias: -4.8514,
    fusionPlanBias: -2.5231,
    precisionPlanBias: 6.1302,
    uncommonCardBias: 3.0291,
    rareCardBias: 7.0976,
    charmSynergyBias: 6.4665,
    duplicateCardPenalty: 6.8048,
    enemyProfileRespect: 1.6393,
  },
};
