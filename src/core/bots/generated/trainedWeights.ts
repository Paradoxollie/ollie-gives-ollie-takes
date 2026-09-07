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
  name: "trained-bot-20260907-062250",
  trainedAt: "2026-09-07T06:22:50.967Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.9754,
    shieldDiff: 113.0099,
    drawBonusDiff: 56.9653,
    manaBonusDiff: 88.1772,
    poisonDiff: 53.7132,
    controlDiff: 66.1632,
    boardStrengthDiff: 0,
    boardManaDiff: 64.9011,
    stackSynergyDiff: 43.0977,
    reserveStrengthDiff: 30,
    handStrengthDiff: -2.7863,
    mobilityDiff: 23.6334,
    cornerControlDiff: 22.9754,
    occupiedBoardDiff: -26.2252,
    imminentRoundDamageDiff: 79.8828,
    activeTurnTempo: 37.3406,
    specialCardValue: 11.4865,
    deckTrimValue: 2.2355,
    eliteRouteBias: 6.6958,
    restRouteBias: 8.3031,
    forgeRouteBias: 9.6805,
    treasureRouteBias: 5.9725,
    branchingRouteBias: 3.17,
    riskTolerance: -4,
    aggressionPlanBias: -5.4158,
    controlPlanBias: 11.3738,
    tempoPlanBias: 5.4073,
    fusionPlanBias: 3.1433,
    precisionPlanBias: 4.9549,
    uncommonCardBias: 5.4008,
    rareCardBias: 7.5573,
    charmSynergyBias: 9.9886,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0.7508,
  },
};
