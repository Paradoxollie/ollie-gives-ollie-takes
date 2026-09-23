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
  name: "trained-bot-20260922-215936",
  trainedAt: "2026-09-22T21:59:36.792Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 74.1737,
    shieldDiff: 98.2487,
    drawBonusDiff: 29.7143,
    manaBonusDiff: 67.8432,
    poisonDiff: 43.095,
    controlDiff: 51.9655,
    boardStrengthDiff: 26.587,
    boardManaDiff: 61.7123,
    stackSynergyDiff: 47.2523,
    reserveStrengthDiff: 17.8468,
    handStrengthDiff: -10,
    mobilityDiff: 30,
    cornerControlDiff: 26.9197,
    occupiedBoardDiff: -21.7739,
    imminentRoundDamageDiff: 45.9708,
    activeTurnTempo: 17.922,
    specialCardValue: 18,
    deckTrimValue: 2.6598,
    eliteRouteBias: -3.3142,
    restRouteBias: 6.093,
    forgeRouteBias: 4.486,
    treasureRouteBias: 12,
    branchingRouteBias: 0.7785,
    riskTolerance: 0.6512,
    aggressionPlanBias: 5.6452,
    controlPlanBias: 12.508,
    tempoPlanBias: -11.2292,
    fusionPlanBias: -1.1507,
    precisionPlanBias: -8.8984,
    uncommonCardBias: 8.902,
    rareCardBias: 8.0893,
    charmSynergyBias: -1.2081,
    duplicateCardPenalty: 4.8666,
    enemyProfileRespect: 0,
  },
};
