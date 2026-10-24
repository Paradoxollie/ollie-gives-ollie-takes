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
  name: "trained-bot-20261024-073640",
  trainedAt: "2026-10-24T07:36:40.444Z",
  iterations: 4,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 91.6963,
    shieldDiff: 80.5615,
    drawBonusDiff: 8.7195,
    manaBonusDiff: 67.1884,
    poisonDiff: 77.5754,
    controlDiff: 78.123,
    boardStrengthDiff: 15.1764,
    boardManaDiff: 30.713,
    stackSynergyDiff: 89.3577,
    reserveStrengthDiff: 19.7966,
    handStrengthDiff: -3.1116,
    mobilityDiff: 24.4628,
    cornerControlDiff: 15.5578,
    occupiedBoardDiff: -10.9009,
    imminentRoundDamageDiff: 90.7335,
    activeTurnTempo: 21.4706,
    specialCardValue: 12.3656,
    deckTrimValue: 3.6635,
    eliteRouteBias: -2.4363,
    restRouteBias: 1.7448,
    forgeRouteBias: 0.2507,
    treasureRouteBias: 0.361,
    branchingRouteBias: 3.8037,
    riskTolerance: -4,
    aggressionPlanBias: -11.5414,
    controlPlanBias: -5.2806,
    tempoPlanBias: -8.504,
    fusionPlanBias: -10.1634,
    precisionPlanBias: -4.6208,
    uncommonCardBias: -3.0905,
    rareCardBias: 3.422,
    charmSynergyBias: 13.0284,
    duplicateCardPenalty: 1.6579,
    enemyProfileRespect: 0,
  },
};
