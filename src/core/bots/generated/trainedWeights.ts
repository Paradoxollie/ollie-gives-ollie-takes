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
  name: "trained-bot-20260904-164508",
  trainedAt: "2026-09-04T16:45:08.984Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 85.4514,
    shieldDiff: 117.9955,
    drawBonusDiff: 35.298,
    manaBonusDiff: 92.8426,
    poisonDiff: 55.8146,
    controlDiff: 62.1393,
    boardStrengthDiff: 3.1436,
    boardManaDiff: 68.4444,
    stackSynergyDiff: 9.4997,
    reserveStrengthDiff: 22.3665,
    handStrengthDiff: 12.546,
    mobilityDiff: 22.1513,
    cornerControlDiff: 27.6435,
    occupiedBoardDiff: -25.6239,
    imminentRoundDamageDiff: 83.6977,
    activeTurnTempo: 54.9448,
    specialCardValue: 12.3778,
    deckTrimValue: 7.5626,
    eliteRouteBias: -0.3174,
    restRouteBias: 1.563,
    forgeRouteBias: 6.6373,
    treasureRouteBias: 10.0233,
    branchingRouteBias: 6.1773,
    riskTolerance: 2.2869,
    aggressionPlanBias: -0.5256,
    controlPlanBias: 11.3453,
    tempoPlanBias: -0.4726,
    fusionPlanBias: 3.0178,
    precisionPlanBias: -0.972,
    uncommonCardBias: 8.6952,
    rareCardBias: -1.4872,
    charmSynergyBias: 14,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
