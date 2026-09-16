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
  name: "trained-bot-20260915-201359",
  trainedAt: "2026-09-15T20:13:59.734Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 70.6642,
    shieldDiff: 104.6049,
    drawBonusDiff: 40.1043,
    manaBonusDiff: 92.2919,
    poisonDiff: 33.9248,
    controlDiff: 57.7067,
    boardStrengthDiff: 0.0976,
    boardManaDiff: 41.5965,
    stackSynergyDiff: 27.0057,
    reserveStrengthDiff: 19.639,
    handStrengthDiff: -1.1918,
    mobilityDiff: 30,
    cornerControlDiff: 15.5477,
    occupiedBoardDiff: -26.5688,
    imminentRoundDamageDiff: 47.058,
    activeTurnTempo: 35.683,
    specialCardValue: 18,
    deckTrimValue: 11.5598,
    eliteRouteBias: 7.0923,
    restRouteBias: 7.2911,
    forgeRouteBias: 9.3873,
    treasureRouteBias: 7.4451,
    branchingRouteBias: 2.9912,
    riskTolerance: -3.8278,
    aggressionPlanBias: -4.2315,
    controlPlanBias: 5.9004,
    tempoPlanBias: -0.1482,
    fusionPlanBias: -3.3843,
    precisionPlanBias: -7.3549,
    uncommonCardBias: 4.2905,
    rareCardBias: -2.1701,
    charmSynergyBias: -4,
    duplicateCardPenalty: 6.2609,
    enemyProfileRespect: 1.4493,
  },
};
