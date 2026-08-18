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
  name: "trained-bot-20260818-020516",
  trainedAt: "2026-08-18T02:05:16.282Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.569,
    shieldDiff: 111.2548,
    drawBonusDiff: 40.8713,
    manaBonusDiff: 103.169,
    poisonDiff: 65.951,
    controlDiff: 82.8213,
    boardStrengthDiff: 12.728,
    boardManaDiff: 43.6338,
    stackSynergyDiff: 22.8873,
    reserveStrengthDiff: -9.9246,
    handStrengthDiff: 41.6496,
    mobilityDiff: -10,
    cornerControlDiff: 8.689,
    occupiedBoardDiff: 5.078,
    imminentRoundDamageDiff: 69.2146,
    activeTurnTempo: 41.9756,
    specialCardValue: 13.4221,
    deckTrimValue: 0,
    eliteRouteBias: -2.7817,
    restRouteBias: 5.0752,
    forgeRouteBias: 6.7311,
    treasureRouteBias: 10.9486,
    branchingRouteBias: 1.6212,
    riskTolerance: -3.0154,
    aggressionPlanBias: 2.2799,
    controlPlanBias: 17.3387,
    tempoPlanBias: 3.2273,
    fusionPlanBias: 3.4679,
    precisionPlanBias: 7.882,
    uncommonCardBias: -1.693,
    rareCardBias: 4.4216,
    charmSynergyBias: 14,
    duplicateCardPenalty: 4.4919,
    enemyProfileRespect: 10,
  },
};
