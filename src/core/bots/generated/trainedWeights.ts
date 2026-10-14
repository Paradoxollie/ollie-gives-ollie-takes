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
  name: "trained-bot-20261014-021158",
  trainedAt: "2026-10-14T02:11:58.596Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.2951,
    shieldDiff: 71.6428,
    drawBonusDiff: 1.1674,
    manaBonusDiff: 75.9726,
    poisonDiff: 64.7093,
    controlDiff: 53.7088,
    boardStrengthDiff: 23.5715,
    boardManaDiff: 60.2144,
    stackSynergyDiff: 87.0213,
    reserveStrengthDiff: 30,
    handStrengthDiff: 13.2978,
    mobilityDiff: 17.3724,
    cornerControlDiff: 2.7368,
    occupiedBoardDiff: -6.9152,
    imminentRoundDamageDiff: 47.13,
    activeTurnTempo: 19.5558,
    specialCardValue: 15.9257,
    deckTrimValue: 6.1479,
    eliteRouteBias: 2.4997,
    restRouteBias: 7.6514,
    forgeRouteBias: 1.9469,
    treasureRouteBias: 0,
    branchingRouteBias: 2.7107,
    riskTolerance: -4,
    aggressionPlanBias: -7.7431,
    controlPlanBias: 2.2954,
    tempoPlanBias: -8.2196,
    fusionPlanBias: 10.2833,
    precisionPlanBias: -5.0224,
    uncommonCardBias: 7.2497,
    rareCardBias: -0.64,
    charmSynergyBias: -4,
    duplicateCardPenalty: 2.9792,
    enemyProfileRespect: 10,
  },
};
