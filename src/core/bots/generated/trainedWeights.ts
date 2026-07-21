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
  name: "trained-bot-20260721-121019",
  trainedAt: "2026-07-21T12:10:19.032Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 122.0682,
    shieldDiff: 66.6787,
    drawBonusDiff: 44.8502,
    manaBonusDiff: 61.0114,
    poisonDiff: 64.2964,
    controlDiff: 49.7748,
    boardStrengthDiff: 46.0975,
    boardManaDiff: 10.1854,
    stackSynergyDiff: 19.4411,
    reserveStrengthDiff: 23.639,
    handStrengthDiff: 7.1458,
    mobilityDiff: 27.6926,
    cornerControlDiff: 8.2116,
    occupiedBoardDiff: 1.4742,
    imminentRoundDamageDiff: 48.7422,
    activeTurnTempo: 25.9183,
    specialCardValue: 10.1122,
    deckTrimValue: 11.9243,
    eliteRouteBias: 4.6367,
    restRouteBias: 12,
    forgeRouteBias: 1.3601,
    treasureRouteBias: 0.7978,
    branchingRouteBias: 0,
    riskTolerance: 8,
    aggressionPlanBias: 4.5517,
    controlPlanBias: 14.5814,
    tempoPlanBias: -12,
    fusionPlanBias: 6.4313,
    precisionPlanBias: -0.5348,
    uncommonCardBias: 10,
    rareCardBias: 2.1719,
    charmSynergyBias: 6.0791,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 5.933,
  },
};
