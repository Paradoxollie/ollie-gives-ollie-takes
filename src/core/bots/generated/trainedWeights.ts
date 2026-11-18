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
  name: "trained-bot-20261118-005845",
  trainedAt: "2026-11-18T00:58:45.403Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 50.0395,
    shieldDiff: 67.1878,
    drawBonusDiff: 23.3837,
    manaBonusDiff: 9.1649,
    poisonDiff: 83.1354,
    controlDiff: 116.6593,
    boardStrengthDiff: 17.4676,
    boardManaDiff: 24.1748,
    stackSynergyDiff: 118.6744,
    reserveStrengthDiff: 18.7676,
    handStrengthDiff: -2.9755,
    mobilityDiff: 26.4951,
    cornerControlDiff: 10.621,
    occupiedBoardDiff: -33.0656,
    imminentRoundDamageDiff: 70.8537,
    activeTurnTempo: 18.5734,
    specialCardValue: 13.1309,
    deckTrimValue: 10.354,
    eliteRouteBias: -3.4343,
    restRouteBias: 11.0944,
    forgeRouteBias: 4.8399,
    treasureRouteBias: 8.8325,
    branchingRouteBias: 9.8778,
    riskTolerance: 2.7377,
    aggressionPlanBias: -6.6843,
    controlPlanBias: -9.8294,
    tempoPlanBias: -12,
    fusionPlanBias: -10.116,
    precisionPlanBias: -10.0434,
    uncommonCardBias: -2.3991,
    rareCardBias: 8.3857,
    charmSynergyBias: 8.7096,
    duplicateCardPenalty: 5.9093,
    enemyProfileRespect: 0.893,
  },
};
