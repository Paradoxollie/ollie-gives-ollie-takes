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
  name: "trained-bot-20260613-183327",
  trainedAt: "2026-06-13T18:33:27.560Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.3558,
    shieldDiff: 54.484,
    drawBonusDiff: 64.5102,
    manaBonusDiff: 93.9546,
    poisonDiff: 98.5413,
    controlDiff: 8.2064,
    boardStrengthDiff: 55.4563,
    boardManaDiff: 4.1139,
    stackSynergyDiff: 16.0193,
    reserveStrengthDiff: 30,
    handStrengthDiff: 19.5624,
    mobilityDiff: 4.2778,
    cornerControlDiff: 58.0852,
    occupiedBoardDiff: 49.1383,
    imminentRoundDamageDiff: 11.4013,
    activeTurnTempo: 8.568,
    specialCardValue: 17.684,
    deckTrimValue: 3.7438,
    eliteRouteBias: -0.1018,
    restRouteBias: 5.0319,
    forgeRouteBias: 3.9483,
    treasureRouteBias: 0,
    branchingRouteBias: 10,
    riskTolerance: 3.5223,
    aggressionPlanBias: 3.9682,
    controlPlanBias: 8.221,
    tempoPlanBias: -7.5079,
    fusionPlanBias: 7.9228,
    precisionPlanBias: -7.2437,
    uncommonCardBias: 10,
    rareCardBias: 3.2725,
    charmSynergyBias: 6.9727,
    duplicateCardPenalty: 5.6157,
    enemyProfileRespect: 6.5858,
  },
};
