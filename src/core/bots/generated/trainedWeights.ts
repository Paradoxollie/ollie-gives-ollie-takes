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
  name: "trained-bot-20261016-051538",
  trainedAt: "2026-10-16T05:15:38.141Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.6404,
    shieldDiff: 76.5204,
    drawBonusDiff: 0,
    manaBonusDiff: 84.6897,
    poisonDiff: 54.4796,
    controlDiff: 59.4142,
    boardStrengthDiff: 27.3759,
    boardManaDiff: 60.048,
    stackSynergyDiff: 86.4382,
    reserveStrengthDiff: 30,
    handStrengthDiff: 20.3487,
    mobilityDiff: 22.7362,
    cornerControlDiff: 4.7985,
    occupiedBoardDiff: -23.6508,
    imminentRoundDamageDiff: 62.7043,
    activeTurnTempo: 23.6458,
    specialCardValue: 10.3826,
    deckTrimValue: 6.9344,
    eliteRouteBias: -2.8371,
    restRouteBias: 3.7116,
    forgeRouteBias: 5.37,
    treasureRouteBias: 4.6943,
    branchingRouteBias: 3.3979,
    riskTolerance: 3.5058,
    aggressionPlanBias: 0.0885,
    controlPlanBias: -2.9648,
    tempoPlanBias: 1.0639,
    fusionPlanBias: 13.5825,
    precisionPlanBias: -7.7065,
    uncommonCardBias: 3.9545,
    rareCardBias: 11.3133,
    charmSynergyBias: 4.8185,
    duplicateCardPenalty: 9.7014,
    enemyProfileRespect: 2.2639,
  },
};
