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
  name: "trained-bot-20260611-015820",
  trainedAt: "2026-06-11T01:58:20.956Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.7201,
    shieldDiff: 47.0652,
    drawBonusDiff: 73.6902,
    manaBonusDiff: 112.1955,
    poisonDiff: 107.1413,
    controlDiff: 0.9925,
    boardStrengthDiff: 45.1652,
    boardManaDiff: 5.9782,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 27.786,
    handStrengthDiff: 17.998,
    mobilityDiff: 10.3562,
    cornerControlDiff: 51.1324,
    occupiedBoardDiff: 44.4661,
    imminentRoundDamageDiff: 2.9476,
    activeTurnTempo: 10.6673,
    specialCardValue: 6.3114,
    deckTrimValue: 0.6236,
    eliteRouteBias: 4.6947,
    restRouteBias: 12,
    forgeRouteBias: 10.4354,
    treasureRouteBias: 0,
    branchingRouteBias: 10,
    riskTolerance: -1.289,
    aggressionPlanBias: 10.6771,
    controlPlanBias: 13.1954,
    tempoPlanBias: -6.7735,
    fusionPlanBias: 2.3833,
    precisionPlanBias: 1.7405,
    uncommonCardBias: 10,
    rareCardBias: 12,
    charmSynergyBias: -4,
    duplicateCardPenalty: 5.834,
    enemyProfileRespect: 6.7891,
  },
};
