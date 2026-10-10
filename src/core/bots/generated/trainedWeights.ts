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
  name: "trained-bot-20261010-191838",
  trainedAt: "2026-10-10T19:18:38.202Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.8519,
    shieldDiff: 60.7106,
    drawBonusDiff: 13.9156,
    manaBonusDiff: 78.9368,
    poisonDiff: 65.7905,
    controlDiff: 34.4846,
    boardStrengthDiff: 22.0376,
    boardManaDiff: 67.4508,
    stackSynergyDiff: 63.0433,
    reserveStrengthDiff: 21.8602,
    handStrengthDiff: 23.8097,
    mobilityDiff: 9.2946,
    cornerControlDiff: 0,
    occupiedBoardDiff: -0.3164,
    imminentRoundDamageDiff: 50.0966,
    activeTurnTempo: 20.4849,
    specialCardValue: 15.1914,
    deckTrimValue: 0,
    eliteRouteBias: -4.8134,
    restRouteBias: 2.1487,
    forgeRouteBias: 1.6544,
    treasureRouteBias: 4.3138,
    branchingRouteBias: 3.1549,
    riskTolerance: 4.2125,
    aggressionPlanBias: -9.4103,
    controlPlanBias: -4.4879,
    tempoPlanBias: -8.5568,
    fusionPlanBias: 7.0855,
    precisionPlanBias: -2.4332,
    uncommonCardBias: -0.1816,
    rareCardBias: 5.0531,
    charmSynergyBias: 0.8913,
    duplicateCardPenalty: 8.7794,
    enemyProfileRespect: 10,
  },
};
