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
  name: "trained-bot-20260610-161018",
  trainedAt: "2026-06-10T16:10:18.233Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.7719,
    shieldDiff: 49.2983,
    drawBonusDiff: 71.2606,
    manaBonusDiff: 112.8679,
    poisonDiff: 108.1085,
    controlDiff: 3.494,
    boardStrengthDiff: 54.0037,
    boardManaDiff: 10.777,
    stackSynergyDiff: 2.8073,
    reserveStrengthDiff: 27.7893,
    handStrengthDiff: 16.052,
    mobilityDiff: 8.2749,
    cornerControlDiff: 48.4363,
    occupiedBoardDiff: 37.1903,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: 7.9646,
    specialCardValue: 7.4735,
    deckTrimValue: 5.1138,
    eliteRouteBias: 3.5713,
    restRouteBias: 12,
    forgeRouteBias: 8.1805,
    treasureRouteBias: 0,
    branchingRouteBias: 3.7388,
    riskTolerance: 2.5531,
    aggressionPlanBias: 0.2192,
    controlPlanBias: 12.3263,
    tempoPlanBias: -7.9754,
    fusionPlanBias: -5.9054,
    precisionPlanBias: 7.353,
    uncommonCardBias: 10,
    rareCardBias: 10.5845,
    charmSynergyBias: -4,
    duplicateCardPenalty: 8.7257,
    enemyProfileRespect: 0,
  },
};
