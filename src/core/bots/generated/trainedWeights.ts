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
  name: "trained-bot-20260613-131231",
  trainedAt: "2026-06-13T13:12:31.722Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.7267,
    shieldDiff: 52.3508,
    drawBonusDiff: 65.5672,
    manaBonusDiff: 96.2718,
    poisonDiff: 98.5399,
    controlDiff: 8.8293,
    boardStrengthDiff: 55.3026,
    boardManaDiff: 11.0901,
    stackSynergyDiff: 15.6429,
    reserveStrengthDiff: 30,
    handStrengthDiff: 24.2993,
    mobilityDiff: 4.5403,
    cornerControlDiff: 57.2552,
    occupiedBoardDiff: 44.836,
    imminentRoundDamageDiff: 8.6026,
    activeTurnTempo: 9.7092,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: 0.3757,
    restRouteBias: 0,
    forgeRouteBias: 5.9631,
    treasureRouteBias: 0,
    branchingRouteBias: 7.2703,
    riskTolerance: 3.5567,
    aggressionPlanBias: 6.5518,
    controlPlanBias: 8.0355,
    tempoPlanBias: -8.3492,
    fusionPlanBias: 8.995,
    precisionPlanBias: -1.7329,
    uncommonCardBias: 9.8803,
    rareCardBias: 4.4457,
    charmSynergyBias: 0.3015,
    duplicateCardPenalty: 5.9104,
    enemyProfileRespect: 5.1667,
  },
};
