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
  name: "trained-bot-20260625-221224",
  trainedAt: "2026-06-25T22:12:24.616Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.01724999999999,
    shieldDiff: 44.3639,
    drawBonusDiff: 0,
    manaBonusDiff: 82.50695,
    poisonDiff: 79.67705000000001,
    controlDiff: 15.605799999999999,
    boardStrengthDiff: 22.8734,
    boardManaDiff: 19.711799999999997,
    stackSynergyDiff: 7.20795,
    reserveStrengthDiff: 30,
    handStrengthDiff: 46.11805,
    mobilityDiff: 15.497800000000002,
    cornerControlDiff: 32.89925,
    occupiedBoardDiff: 26.8355,
    imminentRoundDamageDiff: 62.3498,
    activeTurnTempo: 9.0441,
    specialCardValue: 12.9451,
    deckTrimValue: 2.13915,
    eliteRouteBias: -0.4638,
    restRouteBias: 2.79515,
    forgeRouteBias: 8.10815,
    treasureRouteBias: 9.86335,
    branchingRouteBias: 5.63785,
    riskTolerance: 7.6315,
    aggressionPlanBias: -4.416449999999999,
    controlPlanBias: 16.41015,
    tempoPlanBias: -5.1263,
    fusionPlanBias: -1.4510999999999998,
    precisionPlanBias: 4.69395,
    uncommonCardBias: 6.65075,
    rareCardBias: -1.9292,
    charmSynergyBias: 12.48795,
    duplicateCardPenalty: 9.7279,
    enemyProfileRespect: 1.7281,
  },
};
