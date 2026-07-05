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
  name: "trained-bot-20260705-015356",
  trainedAt: "2026-07-05T01:53:56.188Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.5891,
    shieldDiff: 56.2626,
    drawBonusDiff: 2.6806,
    manaBonusDiff: 84.6859,
    poisonDiff: 49.4684,
    controlDiff: 9.9328,
    boardStrengthDiff: 26.8826,
    boardManaDiff: 8.7281,
    stackSynergyDiff: 12.0909,
    reserveStrengthDiff: 11.5859,
    handStrengthDiff: 23.5804,
    mobilityDiff: 13.4792,
    cornerControlDiff: 3.1366,
    occupiedBoardDiff: 47.8591,
    imminentRoundDamageDiff: 52.1247,
    activeTurnTempo: 19.3635,
    specialCardValue: 18,
    deckTrimValue: 13.3375,
    eliteRouteBias: -7.4511,
    restRouteBias: 7.6967,
    forgeRouteBias: 11.0436,
    treasureRouteBias: 8.1642,
    branchingRouteBias: 10,
    riskTolerance: 7.5015,
    aggressionPlanBias: -9.1467,
    controlPlanBias: 18,
    tempoPlanBias: -9.7191,
    fusionPlanBias: 11.08,
    precisionPlanBias: 8.4832,
    uncommonCardBias: 4.0007,
    rareCardBias: 2.4571,
    charmSynergyBias: 12.4884,
    duplicateCardPenalty: 6.5037,
    enemyProfileRespect: 8.5149,
  },
};
