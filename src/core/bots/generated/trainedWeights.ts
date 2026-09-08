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
  name: "trained-bot-20260908-053206",
  trainedAt: "2026-09-08T05:32:06.339Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.6353,
    shieldDiff: 103.9384,
    drawBonusDiff: 65.6829,
    manaBonusDiff: 87.774,
    poisonDiff: 50.2191,
    controlDiff: 69.2844,
    boardStrengthDiff: 0.6499,
    boardManaDiff: 60.4681,
    stackSynergyDiff: 36.2468,
    reserveStrengthDiff: 30,
    handStrengthDiff: -10,
    mobilityDiff: 20.0782,
    cornerControlDiff: 23.889,
    occupiedBoardDiff: -17.7294,
    imminentRoundDamageDiff: 80.7904,
    activeTurnTempo: 24.9034,
    specialCardValue: 13.5174,
    deckTrimValue: 1.7123,
    eliteRouteBias: 8,
    restRouteBias: 7.9324,
    forgeRouteBias: 0.7489,
    treasureRouteBias: 11.7271,
    branchingRouteBias: 0,
    riskTolerance: -0.9696,
    aggressionPlanBias: -7.0432,
    controlPlanBias: 11.8124,
    tempoPlanBias: 2.761,
    fusionPlanBias: 0.5036,
    precisionPlanBias: 0.9435,
    uncommonCardBias: 1.7746,
    rareCardBias: 11.6501,
    charmSynergyBias: 13.546,
    duplicateCardPenalty: 8.0911,
    enemyProfileRespect: 3.5751,
  },
};
