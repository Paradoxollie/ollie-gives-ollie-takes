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
  name: "trained-bot-20260718-120435",
  trainedAt: "2026-07-18T12:04:35.109Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 133.5636,
    shieldDiff: 62.2552,
    drawBonusDiff: 37.0852,
    manaBonusDiff: 45.4104,
    poisonDiff: 67.6232,
    controlDiff: 39.1724,
    boardStrengthDiff: 50.7985,
    boardManaDiff: 9.3505,
    stackSynergyDiff: 27.6666,
    reserveStrengthDiff: 27.1787,
    handStrengthDiff: 11.1335,
    mobilityDiff: 24.5844,
    cornerControlDiff: 5.4943,
    occupiedBoardDiff: 14.8431,
    imminentRoundDamageDiff: 64.1312,
    activeTurnTempo: 25.0409,
    specialCardValue: 18,
    deckTrimValue: 2.7031,
    eliteRouteBias: 3.637,
    restRouteBias: 12,
    forgeRouteBias: 0,
    treasureRouteBias: 2.5532,
    branchingRouteBias: 6.9223,
    riskTolerance: 0.3906,
    aggressionPlanBias: 2.5488,
    controlPlanBias: 7.845,
    tempoPlanBias: -6.1976,
    fusionPlanBias: -1.145,
    precisionPlanBias: -12,
    uncommonCardBias: 3.6252,
    rareCardBias: -3.6502,
    charmSynergyBias: 3.5579,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
