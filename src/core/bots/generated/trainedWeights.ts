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
  name: "trained-bot-20260916-070138",
  trainedAt: "2026-09-16T07:01:38.407Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.6253,
    shieldDiff: 102.8293,
    drawBonusDiff: 37.505,
    manaBonusDiff: 92.8656,
    poisonDiff: 39.4917,
    controlDiff: 60.3133,
    boardStrengthDiff: 4.4104,
    boardManaDiff: 39.5682,
    stackSynergyDiff: 28.9074,
    reserveStrengthDiff: 24.3299,
    handStrengthDiff: -3.1056,
    mobilityDiff: 25.2831,
    cornerControlDiff: 21.2246,
    occupiedBoardDiff: -28.0433,
    imminentRoundDamageDiff: 53.5519,
    activeTurnTempo: 39.2201,
    specialCardValue: 18,
    deckTrimValue: 10.3141,
    eliteRouteBias: 4.2495,
    restRouteBias: 6.0147,
    forgeRouteBias: 4.9393,
    treasureRouteBias: 12,
    branchingRouteBias: 2.2282,
    riskTolerance: 3.0782,
    aggressionPlanBias: -2.4833,
    controlPlanBias: 1.9466,
    tempoPlanBias: 3.8307,
    fusionPlanBias: 3.1884,
    precisionPlanBias: -4.5647,
    uncommonCardBias: 6.6636,
    rareCardBias: -4,
    charmSynergyBias: -4,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0.1548,
  },
};
