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
  name: "trained-bot-20261019-045302",
  trainedAt: "2026-10-19T04:53:02.068Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.321,
    shieldDiff: 94.65180000000001,
    drawBonusDiff: 1.3332,
    manaBonusDiff: 81.8295,
    poisonDiff: 60.733000000000004,
    controlDiff: 68.577,
    boardStrengthDiff: 17.33445,
    boardManaDiff: 55.43835,
    stackSynergyDiff: 91.8527,
    reserveStrengthDiff: 18.11625,
    handStrengthDiff: 8.6516,
    mobilityDiff: 19.49665,
    cornerControlDiff: 8.90465,
    occupiedBoardDiff: -23.8053,
    imminentRoundDamageDiff: 77.57595,
    activeTurnTempo: 32.4402,
    specialCardValue: 17.1747,
    deckTrimValue: 7.560700000000001,
    eliteRouteBias: -0.08005000000000018,
    restRouteBias: 7.04435,
    forgeRouteBias: 2.33575,
    treasureRouteBias: 7.267950000000001,
    branchingRouteBias: 4.93945,
    riskTolerance: 4.6212,
    aggressionPlanBias: 3.23405,
    controlPlanBias: -3.40135,
    tempoPlanBias: -12,
    fusionPlanBias: 13.6415,
    precisionPlanBias: -7.65815,
    uncommonCardBias: 1.1190999999999998,
    rareCardBias: 11.947700000000001,
    charmSynergyBias: 3.67,
    duplicateCardPenalty: 6.88035,
    enemyProfileRespect: 9.569849999999999,
  },
};
