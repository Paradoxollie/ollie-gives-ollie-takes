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
  name: "trained-bot-20260721-173321",
  trainedAt: "2026-07-21T17:33:21.044Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 111.2844,
    shieldDiff: 72.6776,
    drawBonusDiff: 44.4124,
    manaBonusDiff: 57.9288,
    poisonDiff: 65.2026,
    controlDiff: 52.9168,
    boardStrengthDiff: 47.67,
    boardManaDiff: 10.8404,
    stackSynergyDiff: 19.5787,
    reserveStrengthDiff: 20.799,
    handStrengthDiff: 3.0796,
    mobilityDiff: 22.9948,
    cornerControlDiff: 7.7353,
    occupiedBoardDiff: 1.5725,
    imminentRoundDamageDiff: 49.9414,
    activeTurnTempo: 22.718,
    specialCardValue: 9.4274,
    deckTrimValue: 8.2616,
    eliteRouteBias: 6.7126,
    restRouteBias: 8.451,
    forgeRouteBias: 1.7853,
    treasureRouteBias: 0,
    branchingRouteBias: 0,
    riskTolerance: 6.7328,
    aggressionPlanBias: 7.5613,
    controlPlanBias: 17.6607,
    tempoPlanBias: -12,
    fusionPlanBias: 1.3835,
    precisionPlanBias: -0.5142,
    uncommonCardBias: 10,
    rareCardBias: 3.7583,
    charmSynergyBias: 6.7419,
    duplicateCardPenalty: 6.3674,
    enemyProfileRespect: 0,
  },
};
