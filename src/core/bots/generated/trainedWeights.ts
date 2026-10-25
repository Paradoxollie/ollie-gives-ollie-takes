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
  name: "trained-bot-20261025-133322",
  trainedAt: "2026-10-25T13:33:22.834Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 93.6967,
    shieldDiff: 90.0797,
    drawBonusDiff: 12.3269,
    manaBonusDiff: 51.6097,
    poisonDiff: 81.6088,
    controlDiff: 75.2884,
    boardStrengthDiff: 17.1234,
    boardManaDiff: 21.8245,
    stackSynergyDiff: 88.9271,
    reserveStrengthDiff: 14.1158,
    handStrengthDiff: -3.1037,
    mobilityDiff: 30,
    cornerControlDiff: 4.6117,
    occupiedBoardDiff: -21.247,
    imminentRoundDamageDiff: 95.6391,
    activeTurnTempo: 20.1609,
    specialCardValue: 10.4294,
    deckTrimValue: 6.9961,
    eliteRouteBias: -1.9542,
    restRouteBias: 5.5244,
    forgeRouteBias: 12,
    treasureRouteBias: 9.2528,
    branchingRouteBias: 8.5826,
    riskTolerance: 2.1405,
    aggressionPlanBias: -10.6476,
    controlPlanBias: -8.0654,
    tempoPlanBias: -2.1469,
    fusionPlanBias: -3.3855,
    precisionPlanBias: -8.4761,
    uncommonCardBias: 10,
    rareCardBias: 1.211,
    charmSynergyBias: 9.5108,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 3.7989,
  },
};
