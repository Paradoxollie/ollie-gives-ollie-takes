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
  name: "trained-bot-20260926-133544",
  trainedAt: "2026-09-26T13:35:44.103Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.3473,
    shieldDiff: 109.3693,
    drawBonusDiff: 26.0488,
    manaBonusDiff: 70.6103,
    poisonDiff: 48.6686,
    controlDiff: 43.2974,
    boardStrengthDiff: 28.4492,
    boardManaDiff: 62.094,
    stackSynergyDiff: 71.6457,
    reserveStrengthDiff: 11.4843,
    handStrengthDiff: 3.1008,
    mobilityDiff: 14.2784,
    cornerControlDiff: 15.6522,
    occupiedBoardDiff: -21.8167,
    imminentRoundDamageDiff: 26.6132,
    activeTurnTempo: 40.4371,
    specialCardValue: 8.7039,
    deckTrimValue: 5.5979,
    eliteRouteBias: 1.9171,
    restRouteBias: 3.3148,
    forgeRouteBias: 0,
    treasureRouteBias: 3.8282,
    branchingRouteBias: 10,
    riskTolerance: -0.149,
    aggressionPlanBias: 3.5377,
    controlPlanBias: -4.3747,
    tempoPlanBias: -8.0657,
    fusionPlanBias: -2.0054,
    precisionPlanBias: -6.5633,
    uncommonCardBias: 9.0753,
    rareCardBias: 5.1122,
    charmSynergyBias: -2.8916,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 4.819,
  },
};
