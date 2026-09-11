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
  name: "trained-bot-20260910-211347",
  trainedAt: "2026-09-10T21:13:47.686Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 65.7865,
    shieldDiff: 115.1173,
    drawBonusDiff: 54.3595,
    manaBonusDiff: 97.2911,
    poisonDiff: 50.078,
    controlDiff: 62.5951,
    boardStrengthDiff: 0.8978,
    boardManaDiff: 56.5968,
    stackSynergyDiff: 28.5101,
    reserveStrengthDiff: 28.0178,
    handStrengthDiff: -5.3899,
    mobilityDiff: 30,
    cornerControlDiff: 20.5889,
    occupiedBoardDiff: -14.122,
    imminentRoundDamageDiff: 59.2205,
    activeTurnTempo: 54.5786,
    specialCardValue: 10.0801,
    deckTrimValue: 0,
    eliteRouteBias: 8,
    restRouteBias: 8.573,
    forgeRouteBias: 7.2126,
    treasureRouteBias: 12,
    branchingRouteBias: 0,
    riskTolerance: 6.6782,
    aggressionPlanBias: -7.4938,
    controlPlanBias: 18,
    tempoPlanBias: 2.2421,
    fusionPlanBias: 7.568,
    precisionPlanBias: 4.111,
    uncommonCardBias: 8.3598,
    rareCardBias: 4.3233,
    charmSynergyBias: 4.8235,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.6929,
  },
};
