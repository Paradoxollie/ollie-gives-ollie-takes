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
  name: "trained-bot-20260825-094804",
  trainedAt: "2026-08-25T09:48:04.451Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 89.4866,
    shieldDiff: 100.1702,
    drawBonusDiff: 51.3207,
    manaBonusDiff: 97.7707,
    poisonDiff: 68.2797,
    controlDiff: 88.271,
    boardStrengthDiff: 32.4017,
    boardManaDiff: 54.7412,
    stackSynergyDiff: 10.1904,
    reserveStrengthDiff: 7.764,
    handStrengthDiff: 23.9394,
    mobilityDiff: 13.1507,
    cornerControlDiff: 7.4535,
    occupiedBoardDiff: -0.6956,
    imminentRoundDamageDiff: 66.7808,
    activeTurnTempo: 33.3349,
    specialCardValue: 4.7229,
    deckTrimValue: 5.6573,
    eliteRouteBias: 4.0195,
    restRouteBias: 5.3537,
    forgeRouteBias: 1.182,
    treasureRouteBias: 1.9801,
    branchingRouteBias: 7.7943,
    riskTolerance: -3.7581,
    aggressionPlanBias: 18,
    controlPlanBias: 8.6198,
    tempoPlanBias: 16.3412,
    fusionPlanBias: -7.9715,
    precisionPlanBias: 13.4957,
    uncommonCardBias: 5.0285,
    rareCardBias: -4,
    charmSynergyBias: 1.8129,
    duplicateCardPenalty: 0.3146,
    enemyProfileRespect: 0.581,
  },
};
