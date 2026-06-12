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
  name: "trained-bot-20260612-113231",
  trainedAt: "2026-06-12T11:32:31.159Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.0161,
    shieldDiff: 49.7083,
    drawBonusDiff: 59.4752,
    manaBonusDiff: 99.3372,
    poisonDiff: 96.9688,
    controlDiff: 11.8801,
    boardStrengthDiff: 62.9107,
    boardManaDiff: 4.4763,
    stackSynergyDiff: 5.5064,
    reserveStrengthDiff: 29.5982,
    handStrengthDiff: 20.4005,
    mobilityDiff: 4.3982,
    cornerControlDiff: 58.8656,
    occupiedBoardDiff: 42.271,
    imminentRoundDamageDiff: 17.1774,
    activeTurnTempo: -1.9323,
    specialCardValue: 15.3769,
    deckTrimValue: 2.0732,
    eliteRouteBias: 5.0753,
    restRouteBias: 11.6781,
    forgeRouteBias: 9.0416,
    treasureRouteBias: 7.7041,
    branchingRouteBias: 4.9705,
    riskTolerance: 2.3422,
    aggressionPlanBias: 12.154,
    controlPlanBias: 14.0194,
    tempoPlanBias: -3.7632,
    fusionPlanBias: 15.7602,
    precisionPlanBias: -2.6812,
    uncommonCardBias: 3.4832,
    rareCardBias: -1.3531,
    charmSynergyBias: 2.77,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 10,
  },
};
