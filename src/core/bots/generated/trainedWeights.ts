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
  name: "trained-bot-20261018-203507",
  trainedAt: "2026-10-18T20:35:07.950Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 75.57,
    shieldDiff: 88.13745,
    drawBonusDiff: 1.30575,
    manaBonusDiff: 80.3848,
    poisonDiff: 65.58975,
    controlDiff: 64.2589,
    boardStrengthDiff: 24.05575,
    boardManaDiff: 57.959450000000004,
    stackSynergyDiff: 91.48384999999999,
    reserveStrengthDiff: 25.889049999999997,
    handStrengthDiff: 14.46755,
    mobilityDiff: 23.7603,
    cornerControlDiff: 5.59335,
    occupiedBoardDiff: -24.50135,
    imminentRoundDamageDiff: 81.14525,
    activeTurnTempo: 37.10795,
    specialCardValue: 14.26025,
    deckTrimValue: 4.2114,
    eliteRouteBias: 5.4701,
    restRouteBias: 0.44085,
    forgeRouteBias: 0.71415,
    treasureRouteBias: 0.73925,
    branchingRouteBias: 4.1357,
    riskTolerance: 5.5157,
    aggressionPlanBias: 2.39755,
    controlPlanBias: -2.3314,
    tempoPlanBias: -11.4657,
    fusionPlanBias: 16.99015,
    precisionPlanBias: -4.34635,
    uncommonCardBias: 4.1653,
    rareCardBias: 12,
    charmSynergyBias: -3.0909500000000003,
    duplicateCardPenalty: 6.58335,
    enemyProfileRespect: 0,
  },
};
