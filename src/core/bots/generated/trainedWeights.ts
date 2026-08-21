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
  name: "trained-bot-20260820-231639",
  trainedAt: "2026-08-20T23:16:39.857Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 100.2766,
    shieldDiff: 105.2802,
    drawBonusDiff: 54.7791,
    manaBonusDiff: 87.5086,
    poisonDiff: 83.2143,
    controlDiff: 81.4837,
    boardStrengthDiff: 7.526,
    boardManaDiff: 38.5295,
    stackSynergyDiff: 0,
    reserveStrengthDiff: -6.024,
    handStrengthDiff: 50,
    mobilityDiff: 5.6782,
    cornerControlDiff: 15.8824,
    occupiedBoardDiff: 1.8858,
    imminentRoundDamageDiff: 74.781,
    activeTurnTempo: 35.4064,
    specialCardValue: 2.0551,
    deckTrimValue: 1.65,
    eliteRouteBias: -0.7377,
    restRouteBias: 8.5963,
    forgeRouteBias: 3.9584,
    treasureRouteBias: 12,
    branchingRouteBias: 4.1008,
    riskTolerance: -1.7819,
    aggressionPlanBias: -6.9018,
    controlPlanBias: 18,
    tempoPlanBias: 8.5684,
    fusionPlanBias: -7.0947,
    precisionPlanBias: -11.2567,
    uncommonCardBias: 1.2571,
    rareCardBias: -0.9252,
    charmSynergyBias: 1.4399,
    duplicateCardPenalty: 3.3032,
    enemyProfileRespect: 10,
  },
};
