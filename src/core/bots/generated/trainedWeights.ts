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
  name: "trained-bot-20260627-235311",
  trainedAt: "2026-06-27T23:53:11.531Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.0269,
    shieldDiff: 63.8227,
    drawBonusDiff: 11.9667,
    manaBonusDiff: 78.8485,
    poisonDiff: 67.0538,
    controlDiff: 6.6582,
    boardStrengthDiff: 23.909,
    boardManaDiff: 13.983,
    stackSynergyDiff: 1.9896,
    reserveStrengthDiff: 21.9854,
    handStrengthDiff: 35.9655,
    mobilityDiff: 8.7974,
    cornerControlDiff: 30.3618,
    occupiedBoardDiff: 32.0571,
    imminentRoundDamageDiff: 49.4776,
    activeTurnTempo: 3.881,
    specialCardValue: 16.4568,
    deckTrimValue: 0.9747,
    eliteRouteBias: -0.7833,
    restRouteBias: 7.1838,
    forgeRouteBias: 4.9936,
    treasureRouteBias: 4.5507,
    branchingRouteBias: 0.3232,
    riskTolerance: 4.2459,
    aggressionPlanBias: 7.2657,
    controlPlanBias: 14.5279,
    tempoPlanBias: -1.3793,
    fusionPlanBias: 6.9277,
    precisionPlanBias: -0.732,
    uncommonCardBias: 10,
    rareCardBias: 5.5984,
    charmSynergyBias: 10.2646,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 3.0236,
  },
};
