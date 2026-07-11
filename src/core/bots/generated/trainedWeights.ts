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
  name: "trained-bot-20260711-165946",
  trainedAt: "2026-07-11T16:59:46.476Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.4849,
    shieldDiff: 57.432,
    drawBonusDiff: 7.3363,
    manaBonusDiff: 69.7126,
    poisonDiff: 62.2513,
    controlDiff: 20.1412,
    boardStrengthDiff: 37.2614,
    boardManaDiff: 6.0078,
    stackSynergyDiff: 9.0719,
    reserveStrengthDiff: 19.743,
    handStrengthDiff: 11.4249,
    mobilityDiff: 23.9087,
    cornerControlDiff: 0.163,
    occupiedBoardDiff: 50,
    imminentRoundDamageDiff: 81.7413,
    activeTurnTempo: 21.9185,
    specialCardValue: 16.0568,
    deckTrimValue: 6.6892,
    eliteRouteBias: -5.5765,
    restRouteBias: 0.4514,
    forgeRouteBias: 7.4974,
    treasureRouteBias: 8.1036,
    branchingRouteBias: 4.2198,
    riskTolerance: 1.5082,
    aggressionPlanBias: -6.8205,
    controlPlanBias: 12.8069,
    tempoPlanBias: -7.8385,
    fusionPlanBias: 0.6232,
    precisionPlanBias: 8.1975,
    uncommonCardBias: 10,
    rareCardBias: 7.5696,
    charmSynergyBias: 14,
    duplicateCardPenalty: 1.5532,
    enemyProfileRespect: 3.4178,
  },
};
