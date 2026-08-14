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
  name: "trained-bot-20260814-182618",
  trainedAt: "2026-08-14T18:26:18.390Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.3012,
    shieldDiff: 102.856,
    drawBonusDiff: 44.1321,
    manaBonusDiff: 95.2452,
    poisonDiff: 49.6239,
    controlDiff: 74.0678,
    boardStrengthDiff: 25.0942,
    boardManaDiff: 42.3065,
    stackSynergyDiff: 18.0798,
    reserveStrengthDiff: 0.9469,
    handStrengthDiff: 33.796,
    mobilityDiff: 4.4671,
    cornerControlDiff: 0,
    occupiedBoardDiff: 12.3567,
    imminentRoundDamageDiff: 52.0204,
    activeTurnTempo: 26.9909,
    specialCardValue: 18,
    deckTrimValue: 0,
    eliteRouteBias: 4.0217,
    restRouteBias: 12,
    forgeRouteBias: 0,
    treasureRouteBias: 12,
    branchingRouteBias: 4.1492,
    riskTolerance: 1.2833,
    aggressionPlanBias: 12.152,
    controlPlanBias: 11.6691,
    tempoPlanBias: -11.6678,
    fusionPlanBias: 10.7041,
    precisionPlanBias: 12.7375,
    uncommonCardBias: 7.8829,
    rareCardBias: 5.0992,
    charmSynergyBias: 8.9398,
    duplicateCardPenalty: 6.7785,
    enemyProfileRespect: 10,
  },
};
