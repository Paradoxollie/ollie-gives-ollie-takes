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
  name: "trained-bot-20261022-152134",
  trainedAt: "2026-10-22T15:21:34.788Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 86.8558,
    shieldDiff: 78.2854,
    drawBonusDiff: 18.4279,
    manaBonusDiff: 62.322,
    poisonDiff: 87.4051,
    controlDiff: 75.504,
    boardStrengthDiff: 17.6251,
    boardManaDiff: 31.5079,
    stackSynergyDiff: 88.4923,
    reserveStrengthDiff: 11.0453,
    handStrengthDiff: 1.2355,
    mobilityDiff: 27.4706,
    cornerControlDiff: 18.1251,
    occupiedBoardDiff: -15.4026,
    imminentRoundDamageDiff: 92.1573,
    activeTurnTempo: 18.6618,
    specialCardValue: 18,
    deckTrimValue: 0.9677,
    eliteRouteBias: -6.3052,
    restRouteBias: 4.2749,
    forgeRouteBias: 7.9208,
    treasureRouteBias: 2.3568,
    branchingRouteBias: 3.4752,
    riskTolerance: 0.7461,
    aggressionPlanBias: -7.2244,
    controlPlanBias: -5.9485,
    tempoPlanBias: -10.9764,
    fusionPlanBias: -12,
    precisionPlanBias: -3.1815,
    uncommonCardBias: 0.2042,
    rareCardBias: 4.3717,
    charmSynergyBias: 13.1827,
    duplicateCardPenalty: 7.1506,
    enemyProfileRespect: 4.9272,
  },
};
