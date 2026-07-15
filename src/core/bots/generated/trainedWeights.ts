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
  name: "trained-bot-20260715-000145",
  trainedAt: "2026-07-15T00:01:45.509Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 128.4663,
    shieldDiff: 69.9966,
    drawBonusDiff: 11.0227,
    manaBonusDiff: 61.525,
    poisonDiff: 61.8599,
    controlDiff: 38.9601,
    boardStrengthDiff: 38.8922,
    boardManaDiff: 0.9233,
    stackSynergyDiff: 34.2765,
    reserveStrengthDiff: 15.4623,
    handStrengthDiff: 8.5143,
    mobilityDiff: 25.4164,
    cornerControlDiff: 8.1919,
    occupiedBoardDiff: 12.0023,
    imminentRoundDamageDiff: 77.5173,
    activeTurnTempo: 22.2321,
    specialCardValue: 9.5749,
    deckTrimValue: 2.5545,
    eliteRouteBias: 5.4506,
    restRouteBias: 7.646,
    forgeRouteBias: 2.1974,
    treasureRouteBias: 5.626,
    branchingRouteBias: 5.579,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: -3.5595,
    tempoPlanBias: 0.5733,
    fusionPlanBias: 5.2249,
    precisionPlanBias: -5.42,
    uncommonCardBias: 0.6611,
    rareCardBias: 1.9464,
    charmSynergyBias: 3.6391,
    duplicateCardPenalty: 9.6677,
    enemyProfileRespect: 7.2021,
  },
};
