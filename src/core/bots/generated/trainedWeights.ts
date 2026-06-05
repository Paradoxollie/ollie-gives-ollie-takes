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
  name: "trained-bot-20260605-105144",
  trainedAt: "2026-06-05T10:51:44.654Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 104.6745,
    shieldDiff: 52.9649,
    drawBonusDiff: 79.4363,
    controlDiff: 0,
    boardStrengthDiff: 50.7814,
    boardManaDiff: 19.8598,
    stackSynergyDiff: 23.5199,
    reserveStrengthDiff: 28.5777,
    handStrengthDiff: 23.0806,
    mobilityDiff: 9.7945,
    cornerControlDiff: 39.1172,
    occupiedBoardDiff: 24.6613,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: -9.6678,
    specialCardValue: 18,
    deckTrimValue: 9.3363,
    eliteRouteBias: 5.2271,
    restRouteBias: 0,
    forgeRouteBias: 5.9252,
    treasureRouteBias: 1.6423,
    branchingRouteBias: 3.1647,
    riskTolerance: 3.8673,
    aggressionPlanBias: 9.8028,
    controlPlanBias: 11.3673,
    tempoPlanBias: -9.5822,
    fusionPlanBias: 5.4886,
    precisionPlanBias: 1.2721,
    uncommonCardBias: -1.5188,
    rareCardBias: 8.9175,
    charmSynergyBias: 13.1433,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 7.6926,
  },
};
