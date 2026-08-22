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
  name: "trained-bot-20260822-083709",
  trainedAt: "2026-08-22T08:37:09.486Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 92.098,
    shieldDiff: 101.7381,
    drawBonusDiff: 60.2381,
    manaBonusDiff: 88.5393,
    poisonDiff: 73.9958,
    controlDiff: 87.1734,
    boardStrengthDiff: 9.3371,
    boardManaDiff: 56.1228,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 3.3306,
    handStrengthDiff: 38.8661,
    mobilityDiff: 2.6168,
    cornerControlDiff: 12.1392,
    occupiedBoardDiff: 6.6448,
    imminentRoundDamageDiff: 78.0279,
    activeTurnTempo: 60,
    specialCardValue: 12.7533,
    deckTrimValue: 12.026,
    eliteRouteBias: -7.4171,
    restRouteBias: 0.998,
    forgeRouteBias: 12,
    treasureRouteBias: 2.6895,
    branchingRouteBias: 7.3638,
    riskTolerance: 4.7939,
    aggressionPlanBias: 4.956,
    controlPlanBias: 15.5709,
    tempoPlanBias: 4.9673,
    fusionPlanBias: 0.7033,
    precisionPlanBias: -5.3468,
    uncommonCardBias: 1.5858,
    rareCardBias: -0.76,
    charmSynergyBias: 1.9165,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 4.3124,
  },
};
