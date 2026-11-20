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
  name: "trained-bot-20261120-003900",
  trainedAt: "2026-11-20T00:39:00.607Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 47.2909,
    shieldDiff: 70.3487,
    drawBonusDiff: 30.1144,
    manaBonusDiff: 3.6684,
    poisonDiff: 77.4025,
    controlDiff: 121.4882,
    boardStrengthDiff: 15.7286,
    boardManaDiff: 25.7106,
    stackSynergyDiff: 113.8221,
    reserveStrengthDiff: 26.4567,
    handStrengthDiff: 3.0706,
    mobilityDiff: 30,
    cornerControlDiff: 9.0999,
    occupiedBoardDiff: -23.3199,
    imminentRoundDamageDiff: 80.4007,
    activeTurnTempo: 20.4879,
    specialCardValue: 0.8073,
    deckTrimValue: 7.3011,
    eliteRouteBias: -8,
    restRouteBias: 11.2166,
    forgeRouteBias: 3.5894,
    treasureRouteBias: 7.7318,
    branchingRouteBias: 5.7406,
    riskTolerance: 6.0784,
    aggressionPlanBias: -12,
    controlPlanBias: -12,
    tempoPlanBias: -8.5529,
    fusionPlanBias: -2.5424,
    precisionPlanBias: -12,
    uncommonCardBias: 6.2556,
    rareCardBias: -3.4175,
    charmSynergyBias: 14,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0.019,
  },
};
