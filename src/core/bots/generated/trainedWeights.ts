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
  name: "trained-bot-20260727-110239",
  trainedAt: "2026-07-27T11:02:39.645Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 135.56,
    shieldDiff: 72.3209,
    drawBonusDiff: 41.931,
    manaBonusDiff: 63.2885,
    poisonDiff: 64.3514,
    controlDiff: 76.3156,
    boardStrengthDiff: 41.3588,
    boardManaDiff: 20.269,
    stackSynergyDiff: 3.8714,
    reserveStrengthDiff: 21.9743,
    handStrengthDiff: 12.9838,
    mobilityDiff: 30,
    cornerControlDiff: 4.8788,
    occupiedBoardDiff: -11.7915,
    imminentRoundDamageDiff: 42.5319,
    activeTurnTempo: 25.2507,
    specialCardValue: 13.705,
    deckTrimValue: 12.1209,
    eliteRouteBias: 4.2436,
    restRouteBias: 12,
    forgeRouteBias: 0,
    treasureRouteBias: 4.787,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: 0.1844,
    controlPlanBias: 18,
    tempoPlanBias: -5.6119,
    fusionPlanBias: 14.4156,
    precisionPlanBias: 11.7878,
    uncommonCardBias: -0.1072,
    rareCardBias: 11.1314,
    charmSynergyBias: 3.0467,
    duplicateCardPenalty: 7.5732,
    enemyProfileRespect: 9.5636,
  },
};
