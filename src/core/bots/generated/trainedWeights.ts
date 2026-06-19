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
  name: "trained-bot-20260619-063016",
  trainedAt: "2026-06-19T06:30:16.590Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.978,
    shieldDiff: 80.5984,
    drawBonusDiff: 13.4751,
    manaBonusDiff: 80.1384,
    poisonDiff: 97.5153,
    controlDiff: 15.0181,
    boardStrengthDiff: 46.09,
    boardManaDiff: 26.9998,
    stackSynergyDiff: 1.9053,
    reserveStrengthDiff: 21.2162,
    handStrengthDiff: 41.5068,
    mobilityDiff: 0.4312,
    cornerControlDiff: 68.0408,
    occupiedBoardDiff: 10.4875,
    imminentRoundDamageDiff: 43.689,
    activeTurnTempo: 1.5298,
    specialCardValue: 12.868,
    deckTrimValue: 4.1569,
    eliteRouteBias: 3.0034,
    restRouteBias: 7.5916,
    forgeRouteBias: 4.5269,
    treasureRouteBias: 9.848,
    branchingRouteBias: 5.4442,
    riskTolerance: 4.577,
    aggressionPlanBias: -5.3639,
    controlPlanBias: 6.2561,
    tempoPlanBias: -6.5387,
    fusionPlanBias: -1.5701,
    precisionPlanBias: 7.1714,
    uncommonCardBias: -4,
    rareCardBias: -2.0021,
    charmSynergyBias: -2.4112,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
