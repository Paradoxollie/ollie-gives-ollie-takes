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
  name: "trained-bot-20260625-023111",
  trainedAt: "2026-06-25T02:31:11.585Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 97.20195000000001,
    shieldDiff: 45.16545,
    drawBonusDiff: 4.8267,
    manaBonusDiff: 80.10525000000001,
    poisonDiff: 91.16725,
    controlDiff: 3.7075,
    boardStrengthDiff: 27.73,
    boardManaDiff: 13.44195,
    stackSynergyDiff: 6.77695,
    reserveStrengthDiff: 20.6968,
    handStrengthDiff: 47.699600000000004,
    mobilityDiff: 13.8061,
    cornerControlDiff: 37.806,
    occupiedBoardDiff: 13.05045,
    imminentRoundDamageDiff: 65.16565,
    activeTurnTempo: 5.9155,
    specialCardValue: 16.348300000000002,
    deckTrimValue: 8.73675,
    eliteRouteBias: 3.2994000000000003,
    restRouteBias: 6.1567,
    forgeRouteBias: 10.0039,
    treasureRouteBias: 6.6373999999999995,
    branchingRouteBias: 3.69245,
    riskTolerance: 6.5878499999999995,
    aggressionPlanBias: -10.7785,
    controlPlanBias: 16.477800000000002,
    tempoPlanBias: 14.03885,
    fusionPlanBias: 2.60225,
    precisionPlanBias: 3.0892500000000003,
    uncommonCardBias: 4.1713000000000005,
    rareCardBias: -1.3808500000000001,
    charmSynergyBias: 5.8529,
    duplicateCardPenalty: 5.9963,
    enemyProfileRespect: 2.02425,
  },
};
