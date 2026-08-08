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
  name: "trained-bot-20260808-121659",
  trainedAt: "2026-08-08T12:16:59.365Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 92.2803,
    shieldDiff: 89.8024,
    drawBonusDiff: 26.2982,
    manaBonusDiff: 87.7256,
    poisonDiff: 35.7772,
    controlDiff: 68.3478,
    boardStrengthDiff: 6.9999,
    boardManaDiff: 43.2763,
    stackSynergyDiff: 28.9647,
    reserveStrengthDiff: 16.6664,
    handStrengthDiff: 43.7602,
    mobilityDiff: 9.1813,
    cornerControlDiff: 0,
    occupiedBoardDiff: 0.9579,
    imminentRoundDamageDiff: 31.1177,
    activeTurnTempo: 17.2859,
    specialCardValue: 12.6806,
    deckTrimValue: 6.9227,
    eliteRouteBias: -2.955,
    restRouteBias: 8.8844,
    forgeRouteBias: 8.0739,
    treasureRouteBias: 12,
    branchingRouteBias: 9.3943,
    riskTolerance: -1.0444,
    aggressionPlanBias: 15.406,
    controlPlanBias: 11.0827,
    tempoPlanBias: -3.2708,
    fusionPlanBias: 18,
    precisionPlanBias: 9.365,
    uncommonCardBias: 9.7372,
    rareCardBias: 8.6418,
    charmSynergyBias: 8.8429,
    duplicateCardPenalty: 7.0051,
    enemyProfileRespect: 4.028,
  },
};
