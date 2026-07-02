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
  name: "trained-bot-20260702-052529",
  trainedAt: "2026-07-02T05:25:29.041Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 108.74625,
    shieldDiff: 65.45987500000001,
    drawBonusDiff: 3.264075,
    manaBonusDiff: 80.676625,
    poisonDiff: 51.407,
    controlDiff: 16.542324999999998,
    boardStrengthDiff: 29.82525,
    boardManaDiff: 7.7806,
    stackSynergyDiff: 3.454075,
    reserveStrengthDiff: 12.03305,
    handStrengthDiff: 32.549875,
    mobilityDiff: 15.321674999999999,
    cornerControlDiff: 5.4007249999999996,
    occupiedBoardDiff: 42.8488,
    imminentRoundDamageDiff: 41.300574999999995,
    activeTurnTempo: 10.437425000000001,
    specialCardValue: 15.368924999999999,
    deckTrimValue: 2.941675,
    eliteRouteBias: 6.414775,
    restRouteBias: 3.75185,
    forgeRouteBias: 7.5016,
    treasureRouteBias: 2.8827,
    branchingRouteBias: 9.41555,
    riskTolerance: -1.08755,
    aggressionPlanBias: -3.0574500000000002,
    controlPlanBias: 10.6026,
    tempoPlanBias: 3.2672250000000003,
    fusionPlanBias: 11.2843,
    precisionPlanBias: 8.08175,
    uncommonCardBias: 3.8461999999999996,
    rareCardBias: 9.837875,
    charmSynergyBias: 4.837925,
    duplicateCardPenalty: 1.358,
    enemyProfileRespect: 8.999600000000001,
  },
};
