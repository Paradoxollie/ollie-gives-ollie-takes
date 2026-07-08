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
  name: "trained-bot-20260707-215825",
  trainedAt: "2026-07-07T21:58:25.847Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.4457,
    shieldDiff: 59.7517,
    drawBonusDiff: 14.3633,
    manaBonusDiff: 73.9669,
    poisonDiff: 60.5157,
    controlDiff: 15.0831,
    boardStrengthDiff: 34.2609,
    boardManaDiff: 10.0376,
    stackSynergyDiff: 4.6895,
    reserveStrengthDiff: 23.9773,
    handStrengthDiff: 11.3186,
    mobilityDiff: 29.1399,
    cornerControlDiff: 6.5635,
    occupiedBoardDiff: 47.0906,
    imminentRoundDamageDiff: 69.0885,
    activeTurnTempo: 25.6169,
    specialCardValue: 12.0289,
    deckTrimValue: 10.8242,
    eliteRouteBias: -0.3949,
    restRouteBias: 0,
    forgeRouteBias: 0.2794,
    treasureRouteBias: 6.411,
    branchingRouteBias: 10,
    riskTolerance: 7.9184,
    aggressionPlanBias: 1.7178,
    controlPlanBias: 4.2119,
    tempoPlanBias: -5.3164,
    fusionPlanBias: 3.9771,
    precisionPlanBias: 7.4043,
    uncommonCardBias: -4,
    rareCardBias: 1.6422,
    charmSynergyBias: 13.7411,
    duplicateCardPenalty: 5.224,
    enemyProfileRespect: 1.2164,
  },
};
