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
  name: "trained-bot-20260916-161359",
  trainedAt: "2026-09-16T16:13:59.200Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.8978,
    shieldDiff: 102.5073,
    drawBonusDiff: 38.2891,
    manaBonusDiff: 97.9982,
    poisonDiff: 35.0457,
    controlDiff: 57.0125,
    boardStrengthDiff: 6.1748,
    boardManaDiff: 45.9278,
    stackSynergyDiff: 36.121,
    reserveStrengthDiff: 22.5398,
    handStrengthDiff: -3.8568,
    mobilityDiff: 24.1774,
    cornerControlDiff: 19.1124,
    occupiedBoardDiff: -27.8488,
    imminentRoundDamageDiff: 53.399,
    activeTurnTempo: 37.1186,
    specialCardValue: 18,
    deckTrimValue: 14,
    eliteRouteBias: 7.586,
    restRouteBias: 2.1848,
    forgeRouteBias: 2.828,
    treasureRouteBias: 5.3177,
    branchingRouteBias: 7.5298,
    riskTolerance: 1.2189,
    aggressionPlanBias: -2.7993,
    controlPlanBias: 3.7458,
    tempoPlanBias: 4.1056,
    fusionPlanBias: 0.1628,
    precisionPlanBias: -3.7599,
    uncommonCardBias: 10,
    rareCardBias: -4,
    charmSynergyBias: -4,
    duplicateCardPenalty: 5.0475,
    enemyProfileRespect: 0,
  },
};
