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
  name: "trained-bot-20261030-195711",
  trainedAt: "2026-10-30T19:57:11.536Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.9168,
    shieldDiff: 74.0926,
    drawBonusDiff: 24.1269,
    manaBonusDiff: 43.9737,
    poisonDiff: 81.9921,
    controlDiff: 88.3937,
    boardStrengthDiff: 18.9082,
    boardManaDiff: 16.682,
    stackSynergyDiff: 112.7367,
    reserveStrengthDiff: 30,
    handStrengthDiff: 9.4341,
    mobilityDiff: 21.281,
    cornerControlDiff: 13.7645,
    occupiedBoardDiff: -23.5507,
    imminentRoundDamageDiff: 87.2461,
    activeTurnTempo: 13.9995,
    specialCardValue: 14.8601,
    deckTrimValue: 1.5822,
    eliteRouteBias: -1.5034,
    restRouteBias: 10.2196,
    forgeRouteBias: 0,
    treasureRouteBias: 6.8618,
    branchingRouteBias: 6.2452,
    riskTolerance: 1.0495,
    aggressionPlanBias: -7.3385,
    controlPlanBias: -12,
    tempoPlanBias: -11.5525,
    fusionPlanBias: 9.9057,
    precisionPlanBias: -4.3884,
    uncommonCardBias: 3.3203,
    rareCardBias: 8.2174,
    charmSynergyBias: 10.188,
    duplicateCardPenalty: 5.8988,
    enemyProfileRespect: 8.7215,
  },
};
