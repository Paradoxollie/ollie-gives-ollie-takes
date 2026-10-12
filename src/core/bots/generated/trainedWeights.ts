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
  name: "trained-bot-20261012-020230",
  trainedAt: "2026-10-12T02:02:30.894Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 72.5608,
    shieldDiff: 58.6952,
    drawBonusDiff: 14.014,
    manaBonusDiff: 81.6011,
    poisonDiff: 75.9959,
    controlDiff: 46.0737,
    boardStrengthDiff: 26.24,
    boardManaDiff: 62.8968,
    stackSynergyDiff: 78.2312,
    reserveStrengthDiff: 30,
    handStrengthDiff: 14.0363,
    mobilityDiff: 12.8588,
    cornerControlDiff: 12.3792,
    occupiedBoardDiff: -4.7487,
    imminentRoundDamageDiff: 48.7336,
    activeTurnTempo: 21.5886,
    specialCardValue: 16.1465,
    deckTrimValue: 0,
    eliteRouteBias: 4.3664,
    restRouteBias: 2.034,
    forgeRouteBias: 12,
    treasureRouteBias: 2.2721,
    branchingRouteBias: 0,
    riskTolerance: -1.25,
    aggressionPlanBias: -6.591,
    controlPlanBias: -0.5148,
    tempoPlanBias: 3.7674,
    fusionPlanBias: 18,
    precisionPlanBias: -6.4532,
    uncommonCardBias: 6.9215,
    rareCardBias: 12,
    charmSynergyBias: -4,
    duplicateCardPenalty: 4.7363,
    enemyProfileRespect: 10,
  },
};
