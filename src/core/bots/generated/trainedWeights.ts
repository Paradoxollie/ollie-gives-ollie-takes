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
  name: "trained-bot-20261116-063530",
  trainedAt: "2026-11-16T06:35:30.750Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 47.7388,
    shieldDiff: 85.6717,
    drawBonusDiff: 12.2449,
    manaBonusDiff: 17.8791,
    poisonDiff: 83.5527,
    controlDiff: 115.6698,
    boardStrengthDiff: 16.2135,
    boardManaDiff: 27.8128,
    stackSynergyDiff: 113.2543,
    reserveStrengthDiff: 30,
    handStrengthDiff: 7.5279,
    mobilityDiff: 24.4616,
    cornerControlDiff: 11.1357,
    occupiedBoardDiff: -26.0963,
    imminentRoundDamageDiff: 89.5219,
    activeTurnTempo: 13.2432,
    specialCardValue: 18,
    deckTrimValue: 9.3255,
    eliteRouteBias: -5.4804,
    restRouteBias: 12,
    forgeRouteBias: 5.6519,
    treasureRouteBias: 11.5458,
    branchingRouteBias: 6.4846,
    riskTolerance: -4,
    aggressionPlanBias: -8.0773,
    controlPlanBias: -3.9587,
    tempoPlanBias: -11.2225,
    fusionPlanBias: -6.3757,
    precisionPlanBias: -3.3251,
    uncommonCardBias: -4,
    rareCardBias: 4.3207,
    charmSynergyBias: 9.8177,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
