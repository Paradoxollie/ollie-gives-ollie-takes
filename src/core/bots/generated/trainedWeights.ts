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
  name: "trained-bot-20261002-090142",
  trainedAt: "2026-10-02T09:01:42.539Z",
  iterations: 4,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 56.23595,
    shieldDiff: 100.0934,
    drawBonusDiff: 19.921300000000002,
    manaBonusDiff: 52.58245,
    poisonDiff: 63.88495,
    controlDiff: 36.473749999999995,
    boardStrengthDiff: 22.147550000000003,
    boardManaDiff: 50.2996,
    stackSynergyDiff: 64.29835,
    reserveStrengthDiff: 19.7246,
    handStrengthDiff: -2.16795,
    mobilityDiff: -8.11085,
    cornerControlDiff: 0.65185,
    occupiedBoardDiff: -12.1765,
    imminentRoundDamageDiff: 34.85525,
    activeTurnTempo: 20.0788,
    specialCardValue: 4.52275,
    deckTrimValue: 1.03615,
    eliteRouteBias: 8,
    restRouteBias: 8.491050000000001,
    forgeRouteBias: 1.00915,
    treasureRouteBias: 8.737649999999999,
    branchingRouteBias: 0.3875,
    riskTolerance: 0.9727999999999999,
    aggressionPlanBias: -5.791650000000001,
    controlPlanBias: -9.8629,
    tempoPlanBias: -5.6471,
    fusionPlanBias: -10.134699999999999,
    precisionPlanBias: -5.44325,
    uncommonCardBias: -3.2866,
    rareCardBias: 4.89005,
    charmSynergyBias: -3.05815,
    duplicateCardPenalty: 1.5764,
    enemyProfileRespect: 3.68235,
  },
};
