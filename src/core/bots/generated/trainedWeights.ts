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
  name: "trained-bot-20260818-073024",
  trainedAt: "2026-08-18T07:30:24.421Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 111.533,
    shieldDiff: 107.1169,
    drawBonusDiff: 40.0015,
    manaBonusDiff: 104.7752,
    poisonDiff: 70.5463,
    controlDiff: 87.49,
    boardStrengthDiff: 5.1326,
    boardManaDiff: 38.991,
    stackSynergyDiff: 23.3641,
    reserveStrengthDiff: -10,
    handStrengthDiff: 44.1512,
    mobilityDiff: -10,
    cornerControlDiff: 3.5132,
    occupiedBoardDiff: 7.5188,
    imminentRoundDamageDiff: 63.0881,
    activeTurnTempo: 41.9841,
    specialCardValue: 10.5256,
    deckTrimValue: 0,
    eliteRouteBias: -0.816,
    restRouteBias: 5.3488,
    forgeRouteBias: 7.1748,
    treasureRouteBias: 8.9459,
    branchingRouteBias: 4.4589,
    riskTolerance: 5.9396,
    aggressionPlanBias: 4.2724,
    controlPlanBias: 14.7437,
    tempoPlanBias: 8.6451,
    fusionPlanBias: 7.6642,
    precisionPlanBias: 5.785,
    uncommonCardBias: -3.0687,
    rareCardBias: 1.354,
    charmSynergyBias: 13.6684,
    duplicateCardPenalty: 3.7663,
    enemyProfileRespect: 10,
  },
};
