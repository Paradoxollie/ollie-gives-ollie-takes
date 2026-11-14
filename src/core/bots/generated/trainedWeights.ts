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
  name: "trained-bot-20261114-160927",
  trainedAt: "2026-11-14T16:09:27.585Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 52.7071,
    shieldDiff: 86.44534999999999,
    drawBonusDiff: 7.6259,
    manaBonusDiff: 14.85105,
    poisonDiff: 76.79464999999999,
    controlDiff: 122.10275,
    boardStrengthDiff: 9.78485,
    boardManaDiff: 27.82045,
    stackSynergyDiff: 115.66185,
    reserveStrengthDiff: 30,
    handStrengthDiff: 10.9247,
    mobilityDiff: 26.698500000000003,
    cornerControlDiff: 17.147399999999998,
    occupiedBoardDiff: -26.9588,
    imminentRoundDamageDiff: 96.54814999999999,
    activeTurnTempo: 17.5465,
    specialCardValue: 14.80315,
    deckTrimValue: 0.8642,
    eliteRouteBias: 2.98975,
    restRouteBias: 9.89415,
    forgeRouteBias: 7.9942,
    treasureRouteBias: 7.145,
    branchingRouteBias: 7.004849999999999,
    riskTolerance: 0.4302,
    aggressionPlanBias: -12,
    controlPlanBias: -0.6575500000000001,
    tempoPlanBias: -9.78555,
    fusionPlanBias: -5.3363,
    precisionPlanBias: 5.55195,
    uncommonCardBias: -1.6193,
    rareCardBias: 9.8362,
    charmSynergyBias: 12.427,
    duplicateCardPenalty: 2.0202,
    enemyProfileRespect: 0.32395,
  },
};
