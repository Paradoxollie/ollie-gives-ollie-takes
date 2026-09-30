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
  name: "trained-bot-20260930-003005",
  trainedAt: "2026-09-30T00:30:05.141Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 59.6104,
    shieldDiff: 110.7076,
    drawBonusDiff: 23.3463,
    manaBonusDiff: 67.4804,
    poisonDiff: 63.7608,
    controlDiff: 40.7471,
    boardStrengthDiff: 10.2179,
    boardManaDiff: 58.6306,
    stackSynergyDiff: 64.4788,
    reserveStrengthDiff: 11.3748,
    handStrengthDiff: -2.0774,
    mobilityDiff: -2.1106,
    cornerControlDiff: 4.3076,
    occupiedBoardDiff: -13.9833,
    imminentRoundDamageDiff: 40.1475,
    activeTurnTempo: 11.6469,
    specialCardValue: 6.5108,
    deckTrimValue: 7.8542,
    eliteRouteBias: 0.6259,
    restRouteBias: 12,
    forgeRouteBias: 0.6994,
    treasureRouteBias: 10.8165,
    branchingRouteBias: 2.0594,
    riskTolerance: -0.4002,
    aggressionPlanBias: 1.146,
    controlPlanBias: -12,
    tempoPlanBias: 1.485,
    fusionPlanBias: -3.9674,
    precisionPlanBias: 0.8932,
    uncommonCardBias: 2.5828,
    rareCardBias: 12,
    charmSynergyBias: 0.4673,
    duplicateCardPenalty: 4.5174,
    enemyProfileRespect: 2.0968,
  },
};
