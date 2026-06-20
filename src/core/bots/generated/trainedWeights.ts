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
  name: "trained-bot-20260620-182542",
  trainedAt: "2026-06-20T18:25:42.361Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.4507,
    shieldDiff: 79.5711,
    drawBonusDiff: 21.7468,
    manaBonusDiff: 73.7521,
    poisonDiff: 87.4509,
    controlDiff: 6.8168,
    boardStrengthDiff: 48.3422,
    boardManaDiff: 26.9073,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 14.0529,
    handStrengthDiff: 38.7184,
    mobilityDiff: 7.6511,
    cornerControlDiff: 57.3054,
    occupiedBoardDiff: 8.7058,
    imminentRoundDamageDiff: 54.9387,
    activeTurnTempo: 10.6116,
    specialCardValue: 0,
    deckTrimValue: 8.574,
    eliteRouteBias: 7.5493,
    restRouteBias: 6.0747,
    forgeRouteBias: 5.5581,
    treasureRouteBias: 0,
    branchingRouteBias: 3.7876,
    riskTolerance: 3.5063,
    aggressionPlanBias: -6.4167,
    controlPlanBias: 8.5305,
    tempoPlanBias: -1.3395,
    fusionPlanBias: -10.0102,
    precisionPlanBias: -7.5029,
    uncommonCardBias: 4.5838,
    rareCardBias: 1.0657,
    charmSynergyBias: -0.7181,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
  },
};
