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
  name: "trained-bot-20261007-144949",
  trainedAt: "2026-10-07T14:49:49.632Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 57.4713,
    shieldDiff: 79.91685,
    drawBonusDiff: 13.5429,
    manaBonusDiff: 75.9844,
    poisonDiff: 64.63385,
    controlDiff: 27.63595,
    boardStrengthDiff: 21.8181,
    boardManaDiff: 68.53965,
    stackSynergyDiff: 73.08539999999999,
    reserveStrengthDiff: 18.05965,
    handStrengthDiff: 10.241,
    mobilityDiff: -8.4175,
    cornerControlDiff: 6.6080000000000005,
    occupiedBoardDiff: -17.219900000000003,
    imminentRoundDamageDiff: 40.57615,
    activeTurnTempo: 14.39315,
    specialCardValue: 15.692250000000001,
    deckTrimValue: 2.46845,
    eliteRouteBias: -8,
    restRouteBias: 0.1656,
    forgeRouteBias: 11.9362,
    treasureRouteBias: 2.6525,
    branchingRouteBias: 8.39465,
    riskTolerance: 0.8165500000000003,
    aggressionPlanBias: -3.5,
    controlPlanBias: 14.177200000000001,
    tempoPlanBias: -11.081050000000001,
    fusionPlanBias: -3.52495,
    precisionPlanBias: -4.85975,
    uncommonCardBias: 4.2067499999999995,
    rareCardBias: 4.2703,
    charmSynergyBias: 8.466899999999999,
    duplicateCardPenalty: 9.452950000000001,
    enemyProfileRespect: 0.2929,
  },
};
