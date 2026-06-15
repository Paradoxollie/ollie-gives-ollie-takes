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
  name: "trained-bot-20260615-160014",
  trainedAt: "2026-06-15T16:00:14.937Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.9015,
    shieldDiff: 76.0422,
    drawBonusDiff: 41.1402,
    manaBonusDiff: 77.5447,
    poisonDiff: 102.8028,
    controlDiff: 9.8611,
    boardStrengthDiff: 49.3715,
    boardManaDiff: 15.1183,
    stackSynergyDiff: 0.9006,
    reserveStrengthDiff: 10.2462,
    handStrengthDiff: 38.8604,
    mobilityDiff: -1.3534,
    cornerControlDiff: 58.0694,
    occupiedBoardDiff: 34.8624,
    imminentRoundDamageDiff: 26.9453,
    activeTurnTempo: -3.4602,
    specialCardValue: 10.5923,
    deckTrimValue: 5.2742,
    eliteRouteBias: -1.9411,
    restRouteBias: 12,
    forgeRouteBias: 10.6137,
    treasureRouteBias: 12,
    branchingRouteBias: 7.7803,
    riskTolerance: -0.0596,
    aggressionPlanBias: 3.8641,
    controlPlanBias: 15.1259,
    tempoPlanBias: 6.28,
    fusionPlanBias: -5.5541,
    precisionPlanBias: -9.4023,
    uncommonCardBias: -1.7334,
    rareCardBias: 3.0303,
    charmSynergyBias: 6.3634,
    duplicateCardPenalty: 8.3919,
    enemyProfileRespect: 7.8742,
  },
};
