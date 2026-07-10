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
  name: "trained-bot-20260710-033455",
  trainedAt: "2026-07-10T03:34:55.634Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 92.94565,
    shieldDiff: 58.078599999999994,
    drawBonusDiff: 16.397550000000003,
    manaBonusDiff: 60.8158,
    poisonDiff: 66.40305000000001,
    controlDiff: 15.14055,
    boardStrengthDiff: 27.6394,
    boardManaDiff: 7.9026,
    stackSynergyDiff: 9.36,
    reserveStrengthDiff: 21.6692,
    handStrengthDiff: 8.1716,
    mobilityDiff: 30,
    cornerControlDiff: 3.05655,
    occupiedBoardDiff: 43.815349999999995,
    imminentRoundDamageDiff: 76.09805,
    activeTurnTempo: 8.567400000000001,
    specialCardValue: 12.5156,
    deckTrimValue: 11.4816,
    eliteRouteBias: 0.15255000000000002,
    restRouteBias: 0.3289,
    forgeRouteBias: 1.8103,
    treasureRouteBias: 6.6720500000000005,
    branchingRouteBias: 3.76795,
    riskTolerance: 4.07695,
    aggressionPlanBias: -0.9311,
    controlPlanBias: 12.515699999999999,
    tempoPlanBias: -1.6097000000000001,
    fusionPlanBias: 6.3952,
    precisionPlanBias: 6.29955,
    uncommonCardBias: 10,
    rareCardBias: 7.7954,
    charmSynergyBias: 14,
    duplicateCardPenalty: 1.0791,
    enemyProfileRespect: 1.29725,
  },
};
