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
  name: "trained-bot-20260608-162959",
  trainedAt: "2026-06-08T16:29:59.108Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.6155,
    shieldDiff: 51.7435,
    drawBonusDiff: 69.5803,
    manaBonusDiff: 101.4244,
    poisonDiff: 103.0381,
    controlDiff: 6.3764,
    boardStrengthDiff: 52.4536,
    boardManaDiff: 4.0563,
    stackSynergyDiff: 8.9303,
    reserveStrengthDiff: 20.1083,
    handStrengthDiff: 15.5233,
    mobilityDiff: 16.2269,
    cornerControlDiff: 46.1586,
    occupiedBoardDiff: 29.7385,
    imminentRoundDamageDiff: 11.9148,
    activeTurnTempo: -5.5732,
    specialCardValue: 0.6702,
    deckTrimValue: 5.7644,
    eliteRouteBias: -0.1198,
    restRouteBias: 7.6353,
    forgeRouteBias: 3.1366,
    treasureRouteBias: 7.7277,
    branchingRouteBias: 4.7425,
    riskTolerance: 4.9584,
    aggressionPlanBias: 0.7454,
    controlPlanBias: 8.1421,
    tempoPlanBias: -8.7279,
    fusionPlanBias: 1.1469,
    precisionPlanBias: 9.5969,
    uncommonCardBias: 3.6395,
    rareCardBias: 8.4173,
    charmSynergyBias: 8.6856,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 5.2074,
  },
};
