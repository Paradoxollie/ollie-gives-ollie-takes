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
  name: "trained-bot-20261025-024545",
  trainedAt: "2026-10-25T02:45:45.858Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.4716,
    shieldDiff: 85.0579,
    drawBonusDiff: 9.3846,
    manaBonusDiff: 59.276,
    poisonDiff: 85.0756,
    controlDiff: 78.9902,
    boardStrengthDiff: 12.9409,
    boardManaDiff: 23.6137,
    stackSynergyDiff: 93.0768,
    reserveStrengthDiff: 10.5164,
    handStrengthDiff: -1.4617,
    mobilityDiff: 30,
    cornerControlDiff: 9.2435,
    occupiedBoardDiff: -18.1027,
    imminentRoundDamageDiff: 96.7459,
    activeTurnTempo: 24.8667,
    specialCardValue: 11.0723,
    deckTrimValue: 6.0433,
    eliteRouteBias: 6.2154,
    restRouteBias: 6.1483,
    forgeRouteBias: 11.8294,
    treasureRouteBias: 5.9247,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: -11.8235,
    controlPlanBias: -8.52,
    tempoPlanBias: -6.4676,
    fusionPlanBias: -3.0219,
    precisionPlanBias: -12,
    uncommonCardBias: 10,
    rareCardBias: 0.9761,
    charmSynergyBias: 8.2336,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 9.5958,
  },
};
