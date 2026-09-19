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
  name: "trained-bot-20260919-050008",
  trainedAt: "2026-09-19T05:00:08.207Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.0088,
    shieldDiff: 110.0557,
    drawBonusDiff: 33.6959,
    manaBonusDiff: 89.9417,
    poisonDiff: 53.5705,
    controlDiff: 58.1149,
    boardStrengthDiff: 26.5918,
    boardManaDiff: 48.6746,
    stackSynergyDiff: 50.2363,
    reserveStrengthDiff: 25.3839,
    handStrengthDiff: -9.0888,
    mobilityDiff: 24.5058,
    cornerControlDiff: 29.2495,
    occupiedBoardDiff: -23.7582,
    imminentRoundDamageDiff: 53.3678,
    activeTurnTempo: 19.8291,
    specialCardValue: 13.7794,
    deckTrimValue: 1.8408,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 11.6557,
    treasureRouteBias: 0,
    branchingRouteBias: 0,
    riskTolerance: 1.3261,
    aggressionPlanBias: -5.3,
    controlPlanBias: 7.4213,
    tempoPlanBias: -5.299,
    fusionPlanBias: -6.5659,
    precisionPlanBias: 11.2027,
    uncommonCardBias: 9.1356,
    rareCardBias: -3.3319,
    charmSynergyBias: 7.8628,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 7.9277,
  },
};
