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
  name: "trained-bot-20260615-212122",
  trainedAt: "2026-06-15T21:21:22.841Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 105.9788,
    shieldDiff: 76.5246,
    drawBonusDiff: 45.3122,
    manaBonusDiff: 78.9613,
    poisonDiff: 103.6563,
    controlDiff: 10.9818,
    boardStrengthDiff: 48.6047,
    boardManaDiff: 15.8512,
    stackSynergyDiff: 1.2247,
    reserveStrengthDiff: 12.2116,
    handStrengthDiff: 44.9956,
    mobilityDiff: 0.3611,
    cornerControlDiff: 61.6553,
    occupiedBoardDiff: 32.1362,
    imminentRoundDamageDiff: 28.0778,
    activeTurnTempo: -4.7967,
    specialCardValue: 15.5402,
    deckTrimValue: 2.2323,
    eliteRouteBias: -5.9448,
    restRouteBias: 11.0108,
    forgeRouteBias: 11.7863,
    treasureRouteBias: 12,
    branchingRouteBias: 10,
    riskTolerance: 3.3835,
    aggressionPlanBias: 2.959,
    controlPlanBias: 16.1838,
    tempoPlanBias: 6.0041,
    fusionPlanBias: -3.0852,
    precisionPlanBias: -8.6504,
    uncommonCardBias: -0.7821,
    rareCardBias: 4.4647,
    charmSynergyBias: 4.177,
    duplicateCardPenalty: 8.3391,
    enemyProfileRespect: 9.5355,
  },
};
