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
  name: "trained-bot-20261029-013725",
  trainedAt: "2026-10-29T01:37:25.946Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 99.1513,
    shieldDiff: 81.8614,
    drawBonusDiff: 25.3909,
    manaBonusDiff: 52.2942,
    poisonDiff: 86.3613,
    controlDiff: 89.0488,
    boardStrengthDiff: 16.2809,
    boardManaDiff: 20.2998,
    stackSynergyDiff: 114.122,
    reserveStrengthDiff: 26.1743,
    handStrengthDiff: 1.376,
    mobilityDiff: 15.3515,
    cornerControlDiff: 14.3812,
    occupiedBoardDiff: -17.1565,
    imminentRoundDamageDiff: 86.7899,
    activeTurnTempo: 16.6515,
    specialCardValue: 8.5426,
    deckTrimValue: 2.6354,
    eliteRouteBias: -7.4343,
    restRouteBias: 5.3558,
    forgeRouteBias: 0.1123,
    treasureRouteBias: 6.324,
    branchingRouteBias: 5.3813,
    riskTolerance: -4,
    aggressionPlanBias: -9.5808,
    controlPlanBias: -3.433,
    tempoPlanBias: -10.3667,
    fusionPlanBias: 7.627,
    precisionPlanBias: -3.5527,
    uncommonCardBias: 8.4345,
    rareCardBias: -1.2703,
    charmSynergyBias: 3.3407,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 10,
  },
};
