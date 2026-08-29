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
  name: "trained-bot-20260829-031117",
  trainedAt: "2026-08-29T03:11:17.588Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.9789,
    shieldDiff: 110.7732,
    drawBonusDiff: 24.3612,
    manaBonusDiff: 100.0691,
    poisonDiff: 72.4386,
    controlDiff: 83.3741,
    boardStrengthDiff: 29.752,
    boardManaDiff: 31.6444,
    stackSynergyDiff: 21.9141,
    reserveStrengthDiff: 16.7455,
    handStrengthDiff: 24.0993,
    mobilityDiff: 15.094,
    cornerControlDiff: 17.278,
    occupiedBoardDiff: -26.4843,
    imminentRoundDamageDiff: 67.816,
    activeTurnTempo: 44.3834,
    specialCardValue: 14.42,
    deckTrimValue: 2.3263,
    eliteRouteBias: 4.1302,
    restRouteBias: 10.9311,
    forgeRouteBias: 4.8671,
    treasureRouteBias: 0.542,
    branchingRouteBias: 6.2122,
    riskTolerance: 4.7334,
    aggressionPlanBias: 16.3636,
    controlPlanBias: 4.9006,
    tempoPlanBias: 5.6372,
    fusionPlanBias: 3.3052,
    precisionPlanBias: 5.9219,
    uncommonCardBias: 0.0099,
    rareCardBias: -2.0319,
    charmSynergyBias: 10.0456,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 10,
  },
};
