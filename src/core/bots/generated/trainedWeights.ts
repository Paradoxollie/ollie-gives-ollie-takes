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
  name: "trained-bot-20261001-003448",
  trainedAt: "2026-10-01T00:34:48.015Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 61.5951,
    shieldDiff: 86.5787,
    drawBonusDiff: 20.343,
    manaBonusDiff: 60.1358,
    poisonDiff: 64.5088,
    controlDiff: 35.8988,
    boardStrengthDiff: 21.7015,
    boardManaDiff: 59.4507,
    stackSynergyDiff: 53.7126,
    reserveStrengthDiff: 22.3322,
    handStrengthDiff: -5.4046,
    mobilityDiff: -5.0339,
    cornerControlDiff: 1.9005,
    occupiedBoardDiff: -8.6053,
    imminentRoundDamageDiff: 42.0653,
    activeTurnTempo: 5.1477,
    specialCardValue: 1.6169,
    deckTrimValue: 5.5794,
    eliteRouteBias: 3.9356,
    restRouteBias: 9.968,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 0.3944,
    riskTolerance: 3.2836,
    aggressionPlanBias: 4.9974,
    controlPlanBias: -12,
    tempoPlanBias: -7.2428,
    fusionPlanBias: -1.5448,
    precisionPlanBias: 0.2203,
    uncommonCardBias: -3.9501,
    rareCardBias: 12,
    charmSynergyBias: -4,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 5.7963,
  },
};
