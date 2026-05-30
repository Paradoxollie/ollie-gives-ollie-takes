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
  name: "trained-bot-20260529-224436",
  trainedAt: "2026-05-29T22:44:36.911Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 56.5029,
    controlDiff: 12.0754,
    boardStrengthDiff: 38.8042,
    reserveStrengthDiff: 62.067,
    handStrengthDiff: -17.1475,
    mobilityDiff: -5.7501,
    cornerControlDiff: 44.493,
    occupiedBoardDiff: 18.2053,
    imminentRoundDamageDiff: -21.6238,
    activeTurnTempo: -22.1873,
    specialCardValue: -1.5584,
    deckTrimValue: -17.7173,
    eliteRouteBias: -68.7166,
    restRouteBias: -7.9493,
    forgeRouteBias: 21.8472,
    treasureRouteBias: 24.5371,
    branchingRouteBias: 14.6975,
    riskTolerance: 44.0491,
    aggressionPlanBias: 10.0935,
    controlPlanBias: 38.8885,
    tempoPlanBias: -10.0963,
    fusionPlanBias: -1.9393,
    precisionPlanBias: 2.296,
    uncommonCardBias: 24.1066,
    rareCardBias: 49.5068,
    charmSynergyBias: 36.9636,
    duplicateCardPenalty: 0.2888,
    enemyProfileRespect: 4.3204,
  },
};
