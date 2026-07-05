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
  name: "trained-bot-20260705-112808",
  trainedAt: "2026-07-05T11:28:08.883Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.89,
    shieldDiff: 55.6972,
    drawBonusDiff: 0.0379,
    manaBonusDiff: 83.5382,
    poisonDiff: 45.2009,
    controlDiff: 10.596,
    boardStrengthDiff: 27.0694,
    boardManaDiff: 10.728,
    stackSynergyDiff: 14.117,
    reserveStrengthDiff: 17.3605,
    handStrengthDiff: 23.0843,
    mobilityDiff: 13.6515,
    cornerControlDiff: 4.9418,
    occupiedBoardDiff: 41.3831,
    imminentRoundDamageDiff: 54.7498,
    activeTurnTempo: 19.1209,
    specialCardValue: 18,
    deckTrimValue: 11.6084,
    eliteRouteBias: -8,
    restRouteBias: 0.7567,
    forgeRouteBias: 5.6413,
    treasureRouteBias: 3.4097,
    branchingRouteBias: 10,
    riskTolerance: 5.3212,
    aggressionPlanBias: -9.8038,
    controlPlanBias: 18,
    tempoPlanBias: -7.6947,
    fusionPlanBias: 10.8581,
    precisionPlanBias: 8.3858,
    uncommonCardBias: 4.8085,
    rareCardBias: 1.4986,
    charmSynergyBias: 13.6323,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 10,
  },
};
