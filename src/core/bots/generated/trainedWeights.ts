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
  name: "trained-bot-20260712-193620",
  trainedAt: "2026-07-12T19:36:20.429Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 105.2912,
    shieldDiff: 70.3596,
    drawBonusDiff: 0,
    manaBonusDiff: 53.5726,
    poisonDiff: 62.5132,
    controlDiff: 31.8044,
    boardStrengthDiff: 29.5081,
    boardManaDiff: 3.8273,
    stackSynergyDiff: 19.5231,
    reserveStrengthDiff: 19.4782,
    handStrengthDiff: 20.0956,
    mobilityDiff: 20.582,
    cornerControlDiff: 9.2471,
    occupiedBoardDiff: 35.6208,
    imminentRoundDamageDiff: 76.4011,
    activeTurnTempo: 17.0621,
    specialCardValue: 15.8158,
    deckTrimValue: 7.1433,
    eliteRouteBias: -1.2182,
    restRouteBias: 6.5314,
    forgeRouteBias: 4.9184,
    treasureRouteBias: 12,
    branchingRouteBias: 6.2072,
    riskTolerance: -2.3025,
    aggressionPlanBias: -12,
    controlPlanBias: 6.6823,
    tempoPlanBias: -6.9509,
    fusionPlanBias: -11.1145,
    precisionPlanBias: 0.175,
    uncommonCardBias: -4,
    rareCardBias: -4,
    charmSynergyBias: 12.8401,
    duplicateCardPenalty: 2.2572,
    enemyProfileRespect: 10,
  },
};
