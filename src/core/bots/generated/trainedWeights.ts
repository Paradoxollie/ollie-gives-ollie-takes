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
  name: "trained-bot-20260625-113808",
  trainedAt: "2026-06-25T11:38:08.892Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 91.36487500000001,
    shieldDiff: 47.613200000000006,
    drawBonusDiff: 1.9551500000000002,
    manaBonusDiff: 77.549425,
    poisonDiff: 83.6397,
    controlDiff: 8.740549999999999,
    boardStrengthDiff: 21.17525,
    boardManaDiff: 16.206975,
    stackSynergyDiff: 3.98255,
    reserveStrengthDiff: 21.23035,
    handStrengthDiff: 39.419025,
    mobilityDiff: 5.91025,
    cornerControlDiff: 36.49335,
    occupiedBoardDiff: 19.54675,
    imminentRoundDamageDiff: 66.8332,
    activeTurnTempo: 4.406924999999999,
    specialCardValue: 12.205400000000001,
    deckTrimValue: 5.886475,
    eliteRouteBias: -0.765725,
    restRouteBias: 6.9894750000000005,
    forgeRouteBias: 8.694749999999999,
    treasureRouteBias: 8.0333,
    branchingRouteBias: 5.15765,
    riskTolerance: 6.34495,
    aggressionPlanBias: -2.9779,
    controlPlanBias: 16.991300000000003,
    tempoPlanBias: -0.54495,
    fusionPlanBias: 4.480425,
    precisionPlanBias: 5.36375,
    uncommonCardBias: 1.543425,
    rareCardBias: 1.3776,
    charmSynergyBias: 12.50705,
    duplicateCardPenalty: 9.89125,
    enemyProfileRespect: 0,
  },
};
