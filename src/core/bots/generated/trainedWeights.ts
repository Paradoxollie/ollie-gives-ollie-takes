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
  name: "trained-bot-20260901-132952",
  trainedAt: "2026-09-01T13:29:52.193Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 85.5016,
    shieldDiff: 116.1415,
    drawBonusDiff: 26.3506,
    manaBonusDiff: 89.6018,
    poisonDiff: 63.2589,
    controlDiff: 69.4219,
    boardStrengthDiff: 30.5103,
    boardManaDiff: 70.6979,
    stackSynergyDiff: 16.9572,
    reserveStrengthDiff: 18.6273,
    handStrengthDiff: 21.4374,
    mobilityDiff: 20.2613,
    cornerControlDiff: 11.045,
    occupiedBoardDiff: -7.3839,
    imminentRoundDamageDiff: 67.5265,
    activeTurnTempo: 51.2984,
    specialCardValue: 18,
    deckTrimValue: 2.2101,
    eliteRouteBias: -8,
    restRouteBias: 0,
    forgeRouteBias: 6.1492,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: -1.8421,
    aggressionPlanBias: 12.8422,
    controlPlanBias: -7.8735,
    tempoPlanBias: 5.5808,
    fusionPlanBias: -5.2639,
    precisionPlanBias: -5.6227,
    uncommonCardBias: 10,
    rareCardBias: -4,
    charmSynergyBias: 5.898,
    duplicateCardPenalty: 7.9244,
    enemyProfileRespect: 6.9561,
  },
};
