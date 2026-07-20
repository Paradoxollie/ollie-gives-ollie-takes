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
  name: "trained-bot-20260720-000903",
  trainedAt: "2026-07-20T00:09:03.886Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 129.1883,
    shieldDiff: 60.2734,
    drawBonusDiff: 50.3024,
    manaBonusDiff: 58.4296,
    poisonDiff: 67.966,
    controlDiff: 42.4384,
    boardStrengthDiff: 49.6708,
    boardManaDiff: 11.0618,
    stackSynergyDiff: 34.8837,
    reserveStrengthDiff: 29.9363,
    handStrengthDiff: -1.1064,
    mobilityDiff: 23.9648,
    cornerControlDiff: 10.0396,
    occupiedBoardDiff: 6.7561,
    imminentRoundDamageDiff: 60.6408,
    activeTurnTempo: 27.4155,
    specialCardValue: 10.2205,
    deckTrimValue: 12.2,
    eliteRouteBias: 8,
    restRouteBias: 12,
    forgeRouteBias: 2.2416,
    treasureRouteBias: 10.6951,
    branchingRouteBias: 7.827,
    riskTolerance: 1.6331,
    aggressionPlanBias: 3.7186,
    controlPlanBias: 7.7241,
    tempoPlanBias: -12,
    fusionPlanBias: 7.9253,
    precisionPlanBias: -3.7704,
    uncommonCardBias: 5.0123,
    rareCardBias: -3.4861,
    charmSynergyBias: 5.5505,
    duplicateCardPenalty: 2.786,
    enemyProfileRespect: 0,
  },
};
