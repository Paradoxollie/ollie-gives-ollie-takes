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
  name: "trained-bot-20260725-170924",
  trainedAt: "2026-07-25T17:09:24.277Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 123.45235,
    shieldDiff: 78.45814999999999,
    drawBonusDiff: 51.4435,
    manaBonusDiff: 59.749849999999995,
    poisonDiff: 67.65119999999999,
    controlDiff: 69.49225,
    boardStrengthDiff: 41.855199999999996,
    boardManaDiff: 9.01,
    stackSynergyDiff: 4.01015,
    reserveStrengthDiff: 21.4821,
    handStrengthDiff: 2.27215,
    mobilityDiff: 23.087400000000002,
    cornerControlDiff: 0.4383,
    occupiedBoardDiff: -3.37255,
    imminentRoundDamageDiff: 36.3407,
    activeTurnTempo: 27.4553,
    specialCardValue: 14.224699999999999,
    deckTrimValue: 6.8744499999999995,
    eliteRouteBias: -2.3061499999999997,
    restRouteBias: 6.2502,
    forgeRouteBias: 2.4849,
    treasureRouteBias: 4.124099999999999,
    branchingRouteBias: 9.28315,
    riskTolerance: 4.49895,
    aggressionPlanBias: 6.6079,
    controlPlanBias: 18,
    tempoPlanBias: -3.9565,
    fusionPlanBias: 9.07005,
    precisionPlanBias: 7.200749999999999,
    uncommonCardBias: -3.4737,
    rareCardBias: 11.162700000000001,
    charmSynergyBias: 2.9119,
    duplicateCardPenalty: 0.89635,
    enemyProfileRespect: 7.5724,
  },
};
