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
  name: "trained-bot-20260809-080446",
  trainedAt: "2026-08-09T08:04:46.232Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 95.837,
    shieldDiff: 90.944,
    drawBonusDiff: 26.8558,
    manaBonusDiff: 82.7009,
    poisonDiff: 30.328,
    controlDiff: 65.7571,
    boardStrengthDiff: 13.3999,
    boardManaDiff: 27.958,
    stackSynergyDiff: 34.5432,
    reserveStrengthDiff: 2.855,
    handStrengthDiff: 33.4085,
    mobilityDiff: 12.3339,
    cornerControlDiff: 7.4111,
    occupiedBoardDiff: 18.2303,
    imminentRoundDamageDiff: 34.0641,
    activeTurnTempo: 29.4533,
    specialCardValue: 14.9153,
    deckTrimValue: 10.4467,
    eliteRouteBias: -2.9392,
    restRouteBias: 9.185,
    forgeRouteBias: 10.13,
    treasureRouteBias: 6.0876,
    branchingRouteBias: 7.264,
    riskTolerance: 4.1891,
    aggressionPlanBias: 9.7859,
    controlPlanBias: 18,
    tempoPlanBias: -3.7381,
    fusionPlanBias: 14.9402,
    precisionPlanBias: 4.3071,
    uncommonCardBias: 6.5177,
    rareCardBias: 2.5994,
    charmSynergyBias: 2.8841,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 7.4586,
  },
};
