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
  name: "trained-bot-20260830-192032",
  trainedAt: "2026-08-30T19:20:32.942Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 83.4137,
    shieldDiff: 111.9719,
    drawBonusDiff: 17.31135,
    manaBonusDiff: 104.11275,
    poisonDiff: 62.9358,
    controlDiff: 77.0402,
    boardStrengthDiff: 24.2335,
    boardManaDiff: 44.41685,
    stackSynergyDiff: 16.424,
    reserveStrengthDiff: 18.36305,
    handStrengthDiff: 27.73585,
    mobilityDiff: 30,
    cornerControlDiff: 19.066200000000002,
    occupiedBoardDiff: -25.67385,
    imminentRoundDamageDiff: 74.19825,
    activeTurnTempo: 47.55145,
    specialCardValue: 17.65415,
    deckTrimValue: 7.033849999999999,
    eliteRouteBias: -2.2758000000000003,
    restRouteBias: 5.42775,
    forgeRouteBias: 10.2668,
    treasureRouteBias: 2.65715,
    branchingRouteBias: 7.866149999999999,
    riskTolerance: -2.75875,
    aggressionPlanBias: 14.7376,
    controlPlanBias: 5.0892,
    tempoPlanBias: 5.8186,
    fusionPlanBias: -3.92835,
    precisionPlanBias: 8.5756,
    uncommonCardBias: -3.7372,
    rareCardBias: -4,
    charmSynergyBias: 3.75575,
    duplicateCardPenalty: 7.614,
    enemyProfileRespect: 0.79,
  },
};
