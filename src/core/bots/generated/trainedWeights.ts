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
  name: "trained-bot-20261021-045309",
  trainedAt: "2026-10-21T04:53:09.064Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 77.2335,
    shieldDiff: 85.6111,
    drawBonusDiff: 9.0672,
    manaBonusDiff: 81.6355,
    poisonDiff: 65.5555,
    controlDiff: 70.7985,
    boardStrengthDiff: 22.5404,
    boardManaDiff: 49.0951,
    stackSynergyDiff: 91.4053,
    reserveStrengthDiff: 16.194,
    handStrengthDiff: 7.6418,
    mobilityDiff: 24.4135,
    cornerControlDiff: 16.8524,
    occupiedBoardDiff: -25.0482,
    imminentRoundDamageDiff: 87.6114,
    activeTurnTempo: 12.5759,
    specialCardValue: 18,
    deckTrimValue: 1.0756,
    eliteRouteBias: -6.216,
    restRouteBias: 7.7571,
    forgeRouteBias: 7.3638,
    treasureRouteBias: 7.2354,
    branchingRouteBias: 1.5902,
    riskTolerance: 3.25,
    aggressionPlanBias: 1.885,
    controlPlanBias: -3.0691,
    tempoPlanBias: -8.6683,
    fusionPlanBias: 6.12,
    precisionPlanBias: -8.2745,
    uncommonCardBias: 1.2392,
    rareCardBias: 12,
    charmSynergyBias: 9.6407,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 7.8542,
  },
};
