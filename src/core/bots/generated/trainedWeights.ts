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
  name: "trained-bot-20260824-133742",
  trainedAt: "2026-08-24T13:37:42.977Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 87.1505,
    shieldDiff: 103.4223,
    drawBonusDiff: 52.3754,
    manaBonusDiff: 104.3544,
    poisonDiff: 70.8644,
    controlDiff: 84.369,
    boardStrengthDiff: 18.5586,
    boardManaDiff: 64.0046,
    stackSynergyDiff: 12.5232,
    reserveStrengthDiff: 7.5674,
    handStrengthDiff: 26.1323,
    mobilityDiff: 4.4298,
    cornerControlDiff: 1.9466,
    occupiedBoardDiff: -1.6063,
    imminentRoundDamageDiff: 76.2123,
    activeTurnTempo: 45.2329,
    specialCardValue: 11.4895,
    deckTrimValue: 5.828,
    eliteRouteBias: 6.1037,
    restRouteBias: 7.4777,
    forgeRouteBias: 1.5138,
    treasureRouteBias: 1.6462,
    branchingRouteBias: 0,
    riskTolerance: 1.5691,
    aggressionPlanBias: 17.1433,
    controlPlanBias: 6.7881,
    tempoPlanBias: 9.0287,
    fusionPlanBias: -8.4137,
    precisionPlanBias: 7.1637,
    uncommonCardBias: -4,
    rareCardBias: 4.4503,
    charmSynergyBias: 3.2211,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 2.367,
  },
};
