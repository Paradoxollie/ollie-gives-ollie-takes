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
  name: "trained-bot-20260725-001633",
  trainedAt: "2026-07-25T00:16:33.857Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 122.4503,
    shieldDiff: 76.9814,
    drawBonusDiff: 46.5551,
    manaBonusDiff: 60.3524,
    poisonDiff: 71.5848,
    controlDiff: 70.291,
    boardStrengthDiff: 33.8841,
    boardManaDiff: 11.3136,
    stackSynergyDiff: 3.8258,
    reserveStrengthDiff: 14.8778,
    handStrengthDiff: 9.9271,
    mobilityDiff: 21.2942,
    cornerControlDiff: 0.7502,
    occupiedBoardDiff: -2.6754,
    imminentRoundDamageDiff: 40.9102,
    activeTurnTempo: 28.935,
    specialCardValue: 13.4797,
    deckTrimValue: 11.6443,
    eliteRouteBias: -2.1022,
    restRouteBias: 6.1177,
    forgeRouteBias: 3.4302,
    treasureRouteBias: 6.8151,
    branchingRouteBias: 10,
    riskTolerance: 4.2454,
    aggressionPlanBias: 0.9836,
    controlPlanBias: 17.6059,
    tempoPlanBias: -9.0958,
    fusionPlanBias: 12.9017,
    precisionPlanBias: 9.8841,
    uncommonCardBias: -4,
    rareCardBias: 12,
    charmSynergyBias: 0.9355,
    duplicateCardPenalty: 5.0429,
    enemyProfileRespect: 6.1611,
  },
};
