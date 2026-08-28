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
  name: "trained-bot-20260828-021208",
  trainedAt: "2026-08-28T02:12:08.533Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.4722,
    shieldDiff: 116.1251,
    drawBonusDiff: 25.3946,
    manaBonusDiff: 103.2626,
    poisonDiff: 68.0131,
    controlDiff: 80.9486,
    boardStrengthDiff: 23.1101,
    boardManaDiff: 41.1645,
    stackSynergyDiff: 13.6967,
    reserveStrengthDiff: 17.2049,
    handStrengthDiff: 17.6224,
    mobilityDiff: 11.1911,
    cornerControlDiff: 14.0615,
    occupiedBoardDiff: -20.9641,
    imminentRoundDamageDiff: 72.3012,
    activeTurnTempo: 40.4496,
    specialCardValue: 18,
    deckTrimValue: 5.9877,
    eliteRouteBias: 4.1019,
    restRouteBias: 12,
    forgeRouteBias: 5.4401,
    treasureRouteBias: 0.5819,
    branchingRouteBias: 1.3269,
    riskTolerance: 1.4973,
    aggressionPlanBias: 18,
    controlPlanBias: 4.4476,
    tempoPlanBias: 8.3647,
    fusionPlanBias: 3.6139,
    precisionPlanBias: 4.5006,
    uncommonCardBias: -3.8473,
    rareCardBias: -0.6684,
    charmSynergyBias: 3.2344,
    duplicateCardPenalty: 7.5487,
    enemyProfileRespect: 10,
  },
};
