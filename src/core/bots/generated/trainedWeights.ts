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
  name: "trained-bot-20260715-162251",
  trainedAt: "2026-07-15T16:22:51.020Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 128.1507,
    shieldDiff: 69.7525,
    drawBonusDiff: 14.452,
    manaBonusDiff: 59.4032,
    poisonDiff: 63.7162,
    controlDiff: 42.0056,
    boardStrengthDiff: 37.4384,
    boardManaDiff: 8.7125,
    stackSynergyDiff: 32.7173,
    reserveStrengthDiff: 11.1772,
    handStrengthDiff: 11.5397,
    mobilityDiff: 30,
    cornerControlDiff: 8.7646,
    occupiedBoardDiff: 7.6448,
    imminentRoundDamageDiff: 74.2467,
    activeTurnTempo: 22.2739,
    specialCardValue: 8.3411,
    deckTrimValue: 0.3177,
    eliteRouteBias: 8,
    restRouteBias: 8.4995,
    forgeRouteBias: 2.6215,
    treasureRouteBias: 4.6403,
    branchingRouteBias: 6.6571,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: -3.498,
    tempoPlanBias: 1.5269,
    fusionPlanBias: 3.21,
    precisionPlanBias: -10.6557,
    uncommonCardBias: -0.4799,
    rareCardBias: 2.2894,
    charmSynergyBias: 0.7832,
    duplicateCardPenalty: 7.6178,
    enemyProfileRespect: 10,
  },
};
