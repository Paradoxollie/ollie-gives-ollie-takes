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
  name: "trained-bot-20260731-212155",
  trainedAt: "2026-07-31T21:21:55.317Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 120.2343,
    shieldDiff: 57.6664,
    drawBonusDiff: 48.6957,
    manaBonusDiff: 53.3436,
    poisonDiff: 51.3391,
    controlDiff: 80.1074,
    boardStrengthDiff: 26.5897,
    boardManaDiff: 28.2653,
    stackSynergyDiff: 20.4311,
    reserveStrengthDiff: 15.7995,
    handStrengthDiff: 27.9107,
    mobilityDiff: 19.847,
    cornerControlDiff: 0,
    occupiedBoardDiff: 9.2442,
    imminentRoundDamageDiff: 48.6565,
    activeTurnTempo: 14.5504,
    specialCardValue: 17.1329,
    deckTrimValue: 0.2452,
    eliteRouteBias: 1.1158,
    restRouteBias: 7.772,
    forgeRouteBias: 12,
    treasureRouteBias: 12,
    branchingRouteBias: 0.1477,
    riskTolerance: 4.478,
    aggressionPlanBias: 3.1134,
    controlPlanBias: 18,
    tempoPlanBias: 4.5714,
    fusionPlanBias: 10.9739,
    precisionPlanBias: 16.451,
    uncommonCardBias: 2.7181,
    rareCardBias: 0.1826,
    charmSynergyBias: -1.0409,
    duplicateCardPenalty: 2.8135,
    enemyProfileRespect: 7.6361,
  },
};
