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
  name: "trained-bot-20260903-210440",
  trainedAt: "2026-09-03T21:04:40.666Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 81.0757,
    shieldDiff: 115.5135,
    drawBonusDiff: 28.9619,
    manaBonusDiff: 92.737,
    poisonDiff: 66.8292,
    controlDiff: 71.9372,
    boardStrengthDiff: 0,
    boardManaDiff: 73.6774,
    stackSynergyDiff: 5.3994,
    reserveStrengthDiff: 23.31,
    handStrengthDiff: 16.7018,
    mobilityDiff: 20.7266,
    cornerControlDiff: 18.2149,
    occupiedBoardDiff: -13.8683,
    imminentRoundDamageDiff: 77.1507,
    activeTurnTempo: 55.9388,
    specialCardValue: 15.9759,
    deckTrimValue: 9.2469,
    eliteRouteBias: 1.7389,
    restRouteBias: 1.8498,
    forgeRouteBias: 0.038,
    treasureRouteBias: 5.8165,
    branchingRouteBias: 1.8071,
    riskTolerance: 3.9816,
    aggressionPlanBias: 12.3781,
    controlPlanBias: 13.3138,
    tempoPlanBias: -6.0206,
    fusionPlanBias: -3.6436,
    precisionPlanBias: 11.3872,
    uncommonCardBias: 2.9068,
    rareCardBias: 3.1138,
    charmSynergyBias: 9.2582,
    duplicateCardPenalty: 3.3638,
    enemyProfileRespect: 1.8718,
  },
};
