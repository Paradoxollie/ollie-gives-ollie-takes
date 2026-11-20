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
  name: "trained-bot-20261120-160312",
  trainedAt: "2026-11-20T16:03:12.497Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 51.7082,
    shieldDiff: 69.5239,
    drawBonusDiff: 33.9604,
    manaBonusDiff: 0.611,
    poisonDiff: 81.5612,
    controlDiff: 123.5548,
    boardStrengthDiff: 21.9288,
    boardManaDiff: 21.2815,
    stackSynergyDiff: 113.6473,
    reserveStrengthDiff: 23.9542,
    handStrengthDiff: 0.4045,
    mobilityDiff: 29.3004,
    cornerControlDiff: 6.1635,
    occupiedBoardDiff: -16.2569,
    imminentRoundDamageDiff: 80.3439,
    activeTurnTempo: 27.132,
    specialCardValue: 0,
    deckTrimValue: 0,
    eliteRouteBias: -8,
    restRouteBias: 10.933,
    forgeRouteBias: 3.1436,
    treasureRouteBias: 11.9456,
    branchingRouteBias: 7.5506,
    riskTolerance: 7.4282,
    aggressionPlanBias: -10.9933,
    controlPlanBias: -12,
    tempoPlanBias: -7.7108,
    fusionPlanBias: -1.9136,
    precisionPlanBias: -12,
    uncommonCardBias: 6.7793,
    rareCardBias: 1.0355,
    charmSynergyBias: 14,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
  },
};
