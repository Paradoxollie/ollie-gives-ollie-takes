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
  name: "trained-bot-20261124-222941",
  trainedAt: "2026-11-24T22:29:41.476Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 41.365,
    shieldDiff: 29.1906,
    drawBonusDiff: 49.4645,
    manaBonusDiff: 10.3061,
    poisonDiff: 67.7805,
    controlDiff: 112.2655,
    boardStrengthDiff: 8.7714,
    boardManaDiff: 28.0997,
    stackSynergyDiff: 104.0571,
    reserveStrengthDiff: 16.5865,
    handStrengthDiff: 6.6926,
    mobilityDiff: 26.1817,
    cornerControlDiff: 10.1574,
    occupiedBoardDiff: -17.0165,
    imminentRoundDamageDiff: 85.9333,
    activeTurnTempo: 45.6129,
    specialCardValue: 12.4651,
    deckTrimValue: 0,
    eliteRouteBias: 2.2043,
    restRouteBias: 3.6903,
    forgeRouteBias: 2.6671,
    treasureRouteBias: 4.3693,
    branchingRouteBias: 10,
    riskTolerance: -0.4319,
    aggressionPlanBias: -4.2787,
    controlPlanBias: 1.2743,
    tempoPlanBias: -7.9834,
    fusionPlanBias: 13.7588,
    precisionPlanBias: -6.9465,
    uncommonCardBias: 0.6733,
    rareCardBias: 5.8046,
    charmSynergyBias: 7.6389,
    duplicateCardPenalty: 9.0332,
    enemyProfileRespect: 0,
  },
};
