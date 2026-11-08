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
  name: "trained-bot-20261108-150032",
  trainedAt: "2026-11-08T15:00:32.190Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 68.0288,
    shieldDiff: 86.9272,
    drawBonusDiff: 0,
    manaBonusDiff: 26.1392,
    poisonDiff: 72.6294,
    controlDiff: 131.9898,
    boardStrengthDiff: 24.6897,
    boardManaDiff: 14.2818,
    stackSynergyDiff: 103.6272,
    reserveStrengthDiff: 30,
    handStrengthDiff: -3.8223,
    mobilityDiff: 30,
    cornerControlDiff: 4.8127,
    occupiedBoardDiff: -21.6871,
    imminentRoundDamageDiff: 96.1557,
    activeTurnTempo: 16.2689,
    specialCardValue: 11.0786,
    deckTrimValue: 0.0305,
    eliteRouteBias: -0.4943,
    restRouteBias: 12,
    forgeRouteBias: 5.7155,
    treasureRouteBias: 9.2309,
    branchingRouteBias: 7.7877,
    riskTolerance: 1.9808,
    aggressionPlanBias: -4.2506,
    controlPlanBias: 16.5925,
    tempoPlanBias: -5.2549,
    fusionPlanBias: 3.453,
    precisionPlanBias: -3.4666,
    uncommonCardBias: -0.5566,
    rareCardBias: 2.5155,
    charmSynergyBias: 11.192,
    duplicateCardPenalty: 6.1484,
    enemyProfileRespect: 0,
  },
};
