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
  name: "trained-bot-20260623-145457",
  trainedAt: "2026-06-23T14:54:57.703Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 105.4874,
    shieldDiff: 63.1455,
    drawBonusDiff: 12.279,
    manaBonusDiff: 83.2396,
    poisonDiff: 97.3444,
    controlDiff: 14.1217,
    boardStrengthDiff: 36.2829,
    boardManaDiff: 9.0219,
    stackSynergyDiff: 0.3272,
    reserveStrengthDiff: 30,
    handStrengthDiff: 50,
    mobilityDiff: 9.2292,
    cornerControlDiff: 47.4775,
    occupiedBoardDiff: 4.9442,
    imminentRoundDamageDiff: 64.936,
    activeTurnTempo: 11.1016,
    specialCardValue: 15.6442,
    deckTrimValue: 14,
    eliteRouteBias: 7.8086,
    restRouteBias: 1.9001,
    forgeRouteBias: 6.55,
    treasureRouteBias: 1.8738,
    branchingRouteBias: 5.0221,
    riskTolerance: 6.2757,
    aggressionPlanBias: -2.3288,
    controlPlanBias: 17.602,
    tempoPlanBias: 15.7684,
    fusionPlanBias: -8.2639,
    precisionPlanBias: -5.3658,
    uncommonCardBias: 1.7272,
    rareCardBias: -2.2872,
    charmSynergyBias: 1.589,
    duplicateCardPenalty: 0.5322,
    enemyProfileRespect: 0,
  },
};
