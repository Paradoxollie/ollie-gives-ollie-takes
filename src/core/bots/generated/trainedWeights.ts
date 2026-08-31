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
  name: "trained-bot-20260831-054127",
  trainedAt: "2026-08-31T05:41:27.825Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 86.2932,
    shieldDiff: 109.3877,
    drawBonusDiff: 18.4285,
    manaBonusDiff: 103.2866,
    poisonDiff: 68.1088,
    controlDiff: 74.1245,
    boardStrengthDiff: 27.8901,
    boardManaDiff: 55.5532,
    stackSynergyDiff: 18.7101,
    reserveStrengthDiff: 13.7079,
    handStrengthDiff: 25.5832,
    mobilityDiff: 30,
    cornerControlDiff: 12.8627,
    occupiedBoardDiff: -20.1537,
    imminentRoundDamageDiff: 65.8171,
    activeTurnTempo: 39.5101,
    specialCardValue: 18,
    deckTrimValue: 8.0442,
    eliteRouteBias: -0.6558,
    restRouteBias: 12,
    forgeRouteBias: 12,
    treasureRouteBias: 1.5142,
    branchingRouteBias: 0.9779,
    riskTolerance: -2.176,
    aggressionPlanBias: 13.0734,
    controlPlanBias: -3.5378,
    tempoPlanBias: 10.1423,
    fusionPlanBias: 3.6164,
    precisionPlanBias: 0.6723,
    uncommonCardBias: -4,
    rareCardBias: -2.2924,
    charmSynergyBias: -1.0184,
    duplicateCardPenalty: 7.8877,
    enemyProfileRespect: 0,
  },
};
