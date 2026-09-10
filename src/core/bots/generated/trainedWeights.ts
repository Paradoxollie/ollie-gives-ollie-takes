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
  name: "trained-bot-20260910-044646",
  trainedAt: "2026-09-10T04:46:46.032Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 58.7113,
    shieldDiff: 107.9899,
    drawBonusDiff: 55.463,
    manaBonusDiff: 95.7107,
    poisonDiff: 55.0992,
    controlDiff: 64.6463,
    boardStrengthDiff: 0,
    boardManaDiff: 61.4067,
    stackSynergyDiff: 34.7029,
    reserveStrengthDiff: 30,
    handStrengthDiff: -4.6046,
    mobilityDiff: 24.2189,
    cornerControlDiff: 20.4734,
    occupiedBoardDiff: -11.2694,
    imminentRoundDamageDiff: 68.5109,
    activeTurnTempo: 50.9698,
    specialCardValue: 7.1747,
    deckTrimValue: 1.5618,
    eliteRouteBias: 8,
    restRouteBias: 7.8211,
    forgeRouteBias: 1.2177,
    treasureRouteBias: 12,
    branchingRouteBias: 0,
    riskTolerance: 2.6131,
    aggressionPlanBias: -3.9631,
    controlPlanBias: 18,
    tempoPlanBias: 7.9921,
    fusionPlanBias: 2.5529,
    precisionPlanBias: -1.1372,
    uncommonCardBias: 3.4233,
    rareCardBias: 10.4422,
    charmSynergyBias: 4.4914,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 2.1921,
  },
};
