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
  name: "trained-bot-20260611-064947",
  trainedAt: "2026-06-11T06:49:47.173Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.0589,
    shieldDiff: 47.7762,
    drawBonusDiff: 71.2999,
    manaBonusDiff: 111.4585,
    poisonDiff: 99.5215,
    controlDiff: 0.7622,
    boardStrengthDiff: 43.3539,
    boardManaDiff: 0,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 30,
    handStrengthDiff: 20.8125,
    mobilityDiff: 2.8375,
    cornerControlDiff: 51.2973,
    occupiedBoardDiff: 41.6223,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: 13.1344,
    specialCardValue: 11.8733,
    deckTrimValue: 2.7613,
    eliteRouteBias: 1.0639,
    restRouteBias: 8.2665,
    forgeRouteBias: 12,
    treasureRouteBias: 4.2339,
    branchingRouteBias: 9.4546,
    riskTolerance: -0.4819,
    aggressionPlanBias: 9.2644,
    controlPlanBias: 14.8054,
    tempoPlanBias: -2.8492,
    fusionPlanBias: 4.6803,
    precisionPlanBias: 3.8528,
    uncommonCardBias: 8.457,
    rareCardBias: 6.5803,
    charmSynergyBias: -4,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 7.8765,
  },
};
