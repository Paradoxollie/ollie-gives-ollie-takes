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
  name: "trained-bot-20260820-130940",
  trainedAt: "2026-08-20T13:09:40.895Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.2383,
    shieldDiff: 109.4361,
    drawBonusDiff: 51.5398,
    manaBonusDiff: 92.1253,
    poisonDiff: 78.89,
    controlDiff: 83.3408,
    boardStrengthDiff: 17.585,
    boardManaDiff: 41.5008,
    stackSynergyDiff: 8.991,
    reserveStrengthDiff: -9.1662,
    handStrengthDiff: 48.0909,
    mobilityDiff: 4.6164,
    cornerControlDiff: 19.3428,
    occupiedBoardDiff: -1.3111,
    imminentRoundDamageDiff: 66.8203,
    activeTurnTempo: 30.4625,
    specialCardValue: 6.0051,
    deckTrimValue: 0,
    eliteRouteBias: -5.2357,
    restRouteBias: 4.7212,
    forgeRouteBias: 5.8526,
    treasureRouteBias: 7.332,
    branchingRouteBias: 10,
    riskTolerance: -4,
    aggressionPlanBias: -12,
    controlPlanBias: 13.0195,
    tempoPlanBias: 12.7065,
    fusionPlanBias: -5.4167,
    precisionPlanBias: -9.393,
    uncommonCardBias: 2.562,
    rareCardBias: -4,
    charmSynergyBias: 6.5784,
    duplicateCardPenalty: 9.1677,
    enemyProfileRespect: 9.298,
  },
};
