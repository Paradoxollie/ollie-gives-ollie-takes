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
  name: "trained-bot-20260907-211005",
  trainedAt: "2026-09-07T21:10:05.260Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.388,
    shieldDiff: 107.8212,
    drawBonusDiff: 53.5443,
    manaBonusDiff: 90.8079,
    poisonDiff: 50.1917,
    controlDiff: 67.5138,
    boardStrengthDiff: 1.8524,
    boardManaDiff: 64.9877,
    stackSynergyDiff: 40.4074,
    reserveStrengthDiff: 30,
    handStrengthDiff: -9.6391,
    mobilityDiff: 18.9293,
    cornerControlDiff: 24.7404,
    occupiedBoardDiff: -21.4022,
    imminentRoundDamageDiff: 75.3434,
    activeTurnTempo: 32.2858,
    specialCardValue: 14.0203,
    deckTrimValue: 0,
    eliteRouteBias: 8,
    restRouteBias: 3.9475,
    forgeRouteBias: 5.6821,
    treasureRouteBias: 5.271,
    branchingRouteBias: 0,
    riskTolerance: -1.5495,
    aggressionPlanBias: -7.6287,
    controlPlanBias: 12.9816,
    tempoPlanBias: 8.5188,
    fusionPlanBias: 2.2351,
    precisionPlanBias: 5.5547,
    uncommonCardBias: 9.1765,
    rareCardBias: 9.1834,
    charmSynergyBias: 14,
    duplicateCardPenalty: 5.4854,
    enemyProfileRespect: 1.2999,
  },
};
