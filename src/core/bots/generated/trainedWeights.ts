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
  name: "trained-bot-20260628-050730",
  trainedAt: "2026-06-28T05:07:30.915Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.0838,
    shieldDiff: 66.6658,
    drawBonusDiff: 12.7889,
    manaBonusDiff: 79.9596,
    poisonDiff: 69.545,
    controlDiff: 6.3175,
    boardStrengthDiff: 18.0969,
    boardManaDiff: 19.4027,
    stackSynergyDiff: 2.5249,
    reserveStrengthDiff: 20.9764,
    handStrengthDiff: 30.5857,
    mobilityDiff: 6.2954,
    cornerControlDiff: 22.9826,
    occupiedBoardDiff: 26.7189,
    imminentRoundDamageDiff: 49.782,
    activeTurnTempo: 5.1628,
    specialCardValue: 14.5147,
    deckTrimValue: 0,
    eliteRouteBias: -7.7482,
    restRouteBias: 10.2594,
    forgeRouteBias: 5.5803,
    treasureRouteBias: 12,
    branchingRouteBias: 0,
    riskTolerance: 7.0949,
    aggressionPlanBias: 5.0235,
    controlPlanBias: 10.2738,
    tempoPlanBias: 4.1795,
    fusionPlanBias: 10.8442,
    precisionPlanBias: 1.1288,
    uncommonCardBias: 7.4906,
    rareCardBias: 7.3043,
    charmSynergyBias: 10.3849,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.9944,
  },
};
