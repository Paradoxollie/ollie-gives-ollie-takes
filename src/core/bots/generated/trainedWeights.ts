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
  name: "trained-bot-20260827-183731",
  trainedAt: "2026-08-27T18:37:31.087Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 77.81954999999999,
    shieldDiff: 117.917775,
    drawBonusDiff: 22.97345,
    manaBonusDiff: 101.46385000000001,
    poisonDiff: 68.66342499999999,
    controlDiff: 84.6516,
    boardStrengthDiff: 26.247725,
    boardManaDiff: 44.711,
    stackSynergyDiff: 10.731625000000001,
    reserveStrengthDiff: 17.898725,
    handStrengthDiff: 14.990625000000001,
    mobilityDiff: 15.270275,
    cornerControlDiff: 18.4012,
    occupiedBoardDiff: -18.960575,
    imminentRoundDamageDiff: 67.48525000000001,
    activeTurnTempo: 40.674549999999996,
    specialCardValue: 15.608025,
    deckTrimValue: 5.7376,
    eliteRouteBias: 3.5653500000000005,
    restRouteBias: 12,
    forgeRouteBias: 1.3367,
    treasureRouteBias: 5.519875000000001,
    branchingRouteBias: 1.1151499999999999,
    riskTolerance: -0.06447499999999995,
    aggressionPlanBias: 16.1295,
    controlPlanBias: 2.7968,
    tempoPlanBias: 13.780075,
    fusionPlanBias: 0.8712749999999999,
    precisionPlanBias: -2.4192,
    uncommonCardBias: -3.6515750000000002,
    rareCardBias: -2.2523999999999997,
    charmSynergyBias: 0.8415250000000001,
    duplicateCardPenalty: 0.7696,
    enemyProfileRespect: 8.652875000000002,
  },
};
