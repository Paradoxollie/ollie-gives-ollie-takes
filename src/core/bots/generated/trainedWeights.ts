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
  name: "trained-bot-20260616-173012",
  trainedAt: "2026-06-16T17:30:12.413Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 108.5635,
    shieldDiff: 84.5488,
    drawBonusDiff: 33.1819,
    manaBonusDiff: 78.922,
    poisonDiff: 101.1231,
    controlDiff: 14.8777,
    boardStrengthDiff: 42.0036,
    boardManaDiff: 16.7621,
    stackSynergyDiff: 3.2701,
    reserveStrengthDiff: 9.0184,
    handStrengthDiff: 42.3506,
    mobilityDiff: -5.4094,
    cornerControlDiff: 70.5232,
    occupiedBoardDiff: 27.3408,
    imminentRoundDamageDiff: 31.6645,
    activeTurnTempo: 4.9923,
    specialCardValue: 11.7824,
    deckTrimValue: 14,
    eliteRouteBias: -6.1665,
    restRouteBias: 8.9177,
    forgeRouteBias: 10.4387,
    treasureRouteBias: 11.1546,
    branchingRouteBias: 10,
    riskTolerance: 4.4096,
    aggressionPlanBias: -8.1851,
    controlPlanBias: 18,
    tempoPlanBias: 10.5772,
    fusionPlanBias: -2.1002,
    precisionPlanBias: -6.1088,
    uncommonCardBias: 10,
    rareCardBias: 3.2507,
    charmSynergyBias: 10.5907,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
