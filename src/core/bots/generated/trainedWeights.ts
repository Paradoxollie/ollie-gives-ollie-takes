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
  name: "trained-bot-20260630-205548",
  trainedAt: "2026-06-30T20:55:48.506Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 107.0777,
    shieldDiff: 62.623,
    drawBonusDiff: 4.2371,
    manaBonusDiff: 83.6893,
    poisonDiff: 54.3007,
    controlDiff: 15.5188,
    boardStrengthDiff: 26.8253,
    boardManaDiff: 12.7327,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 7.9659,
    handStrengthDiff: 33.4859,
    mobilityDiff: 12.2445,
    cornerControlDiff: 3.8611,
    occupiedBoardDiff: 39.6802,
    imminentRoundDamageDiff: 43.7812,
    activeTurnTempo: 8.9985,
    specialCardValue: 13.2547,
    deckTrimValue: 8.9558,
    eliteRouteBias: -2.0538,
    restRouteBias: 1.9585,
    forgeRouteBias: 5.5333,
    treasureRouteBias: 5.1316,
    branchingRouteBias: 8.8381,
    riskTolerance: -0.4026,
    aggressionPlanBias: -6.2798,
    controlPlanBias: 9.0737,
    tempoPlanBias: -3.5697,
    fusionPlanBias: 4.0784,
    precisionPlanBias: 9.796,
    uncommonCardBias: 6.2329,
    rareCardBias: 12,
    charmSynergyBias: 6.8762,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 7.5141,
  },
};
