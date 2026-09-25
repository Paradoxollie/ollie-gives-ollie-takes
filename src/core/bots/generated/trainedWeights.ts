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
  name: "trained-bot-20260925-160158",
  trainedAt: "2026-09-25T16:01:58.913Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.5696,
    shieldDiff: 107.3562,
    drawBonusDiff: 22.4338,
    manaBonusDiff: 68.5855,
    poisonDiff: 52.4645,
    controlDiff: 47.2724,
    boardStrengthDiff: 22.9713,
    boardManaDiff: 65.5955,
    stackSynergyDiff: 65.6786,
    reserveStrengthDiff: 7.7713,
    handStrengthDiff: 6.4969,
    mobilityDiff: 16.0898,
    cornerControlDiff: 17.2743,
    occupiedBoardDiff: -19.3016,
    imminentRoundDamageDiff: 35.2327,
    activeTurnTempo: 35.346,
    specialCardValue: 15.0001,
    deckTrimValue: 5.1679,
    eliteRouteBias: -2.7273,
    restRouteBias: 8.5807,
    forgeRouteBias: 7.583,
    treasureRouteBias: 3.5694,
    branchingRouteBias: 6.3106,
    riskTolerance: -3.7582,
    aggressionPlanBias: 1.0102,
    controlPlanBias: 3.6302,
    tempoPlanBias: -3.9786,
    fusionPlanBias: 5.403,
    precisionPlanBias: -4.8882,
    uncommonCardBias: 7.5213,
    rareCardBias: -3.2362,
    charmSynergyBias: -3.2724,
    duplicateCardPenalty: 5.963,
    enemyProfileRespect: 4.4206,
  },
};
