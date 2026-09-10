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
  name: "trained-bot-20260910-002110",
  trainedAt: "2026-09-10T00:21:10.979Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 63.8737,
    shieldDiff: 108.4535,
    drawBonusDiff: 56.1465,
    manaBonusDiff: 93.858,
    poisonDiff: 55.3135,
    controlDiff: 73.6975,
    boardStrengthDiff: 0,
    boardManaDiff: 67.8781,
    stackSynergyDiff: 32.7968,
    reserveStrengthDiff: 28.3394,
    handStrengthDiff: -6.9166,
    mobilityDiff: 19.1139,
    cornerControlDiff: 18.8575,
    occupiedBoardDiff: -17.0247,
    imminentRoundDamageDiff: 72.4764,
    activeTurnTempo: 46.914,
    specialCardValue: 6.6873,
    deckTrimValue: 1.78,
    eliteRouteBias: 7.3458,
    restRouteBias: 7.9421,
    forgeRouteBias: 0,
    treasureRouteBias: 10.5309,
    branchingRouteBias: 0,
    riskTolerance: -0.0343,
    aggressionPlanBias: -7.8917,
    controlPlanBias: 15.0984,
    tempoPlanBias: 5.2142,
    fusionPlanBias: 3.5313,
    precisionPlanBias: -0.0671,
    uncommonCardBias: 8.5722,
    rareCardBias: 12,
    charmSynergyBias: 0.6478,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
  },
};
