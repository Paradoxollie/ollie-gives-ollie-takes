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
  name: "trained-bot-20260612-060854",
  trainedAt: "2026-06-12T06:08:54.774Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.9565,
    shieldDiff: 46.2354,
    drawBonusDiff: 63.0489,
    manaBonusDiff: 99.5254,
    poisonDiff: 94.4435,
    controlDiff: 12.4443,
    boardStrengthDiff: 51.5978,
    boardManaDiff: 5.551,
    stackSynergyDiff: 6.899,
    reserveStrengthDiff: 30,
    handStrengthDiff: 22.2021,
    mobilityDiff: 5.4021,
    cornerControlDiff: 56.5581,
    occupiedBoardDiff: 36.9793,
    imminentRoundDamageDiff: 11.8351,
    activeTurnTempo: 2.9693,
    specialCardValue: 14.4107,
    deckTrimValue: 0,
    eliteRouteBias: 5.238,
    restRouteBias: 8.0386,
    forgeRouteBias: 8.8762,
    treasureRouteBias: 6.8797,
    branchingRouteBias: 0.5154,
    riskTolerance: 2.4693,
    aggressionPlanBias: 17.03,
    controlPlanBias: 12.4694,
    tempoPlanBias: -2.7344,
    fusionPlanBias: 18,
    precisionPlanBias: -4.0621,
    uncommonCardBias: 10,
    rareCardBias: 0.9292,
    charmSynergyBias: 2.7085,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 2.3649,
  },
};
