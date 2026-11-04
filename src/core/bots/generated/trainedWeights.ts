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
  name: "trained-bot-20261104-152452",
  trainedAt: "2026-11-04T15:24:52.660Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 81.3379,
    shieldDiff: 69.9853,
    drawBonusDiff: 10.1055,
    manaBonusDiff: 29.8214,
    poisonDiff: 56.8677,
    controlDiff: 115.7307,
    boardStrengthDiff: 26.5071,
    boardManaDiff: 7.7998,
    stackSynergyDiff: 120,
    reserveStrengthDiff: 20.9368,
    handStrengthDiff: -7.847,
    mobilityDiff: 30,
    cornerControlDiff: 18.243,
    occupiedBoardDiff: -25.5988,
    imminentRoundDamageDiff: 94.4835,
    activeTurnTempo: 24.8384,
    specialCardValue: 13.9525,
    deckTrimValue: 0,
    eliteRouteBias: 2.0594,
    restRouteBias: 1.3657,
    forgeRouteBias: 6.5307,
    treasureRouteBias: 9.8335,
    branchingRouteBias: 4.806,
    riskTolerance: 5.1275,
    aggressionPlanBias: -2.3464,
    controlPlanBias: 18,
    tempoPlanBias: -8.2996,
    fusionPlanBias: 9.3634,
    precisionPlanBias: -1.0465,
    uncommonCardBias: -4,
    rareCardBias: 10.0793,
    charmSynergyBias: 11.2577,
    duplicateCardPenalty: 6.714,
    enemyProfileRespect: 5.4548,
  },
};
