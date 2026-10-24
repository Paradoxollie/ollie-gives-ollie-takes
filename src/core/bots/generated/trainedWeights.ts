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
  name: "trained-bot-20261024-163148",
  trainedAt: "2026-10-24T16:31:48.110Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.7041,
    shieldDiff: 82.844,
    drawBonusDiff: 10.8133,
    manaBonusDiff: 62.472,
    poisonDiff: 83.4909,
    controlDiff: 80.624,
    boardStrengthDiff: 10.3693,
    boardManaDiff: 24.1471,
    stackSynergyDiff: 94.3902,
    reserveStrengthDiff: 14.8285,
    handStrengthDiff: -3.1595,
    mobilityDiff: 22.6823,
    cornerControlDiff: 16.8256,
    occupiedBoardDiff: -15.9347,
    imminentRoundDamageDiff: 91.9902,
    activeTurnTempo: 25.6579,
    specialCardValue: 16.3256,
    deckTrimValue: 9.3602,
    eliteRouteBias: 1.4975,
    restRouteBias: 1.7467,
    forgeRouteBias: 9.2346,
    treasureRouteBias: 4.6513,
    branchingRouteBias: 7.7041,
    riskTolerance: 1.7878,
    aggressionPlanBias: -9.7289,
    controlPlanBias: -7.7557,
    tempoPlanBias: -8.2338,
    fusionPlanBias: -3.3252,
    precisionPlanBias: -11.8803,
    uncommonCardBias: 2.8038,
    rareCardBias: -0.2289,
    charmSynergyBias: 14,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 5.7101,
  },
};
