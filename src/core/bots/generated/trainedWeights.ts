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
  name: "trained-bot-20261128-012831",
  trainedAt: "2026-11-28T01:28:31.194Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 55.9649,
    shieldDiff: 30.6313,
    drawBonusDiff: 34.6022,
    manaBonusDiff: 4.7193,
    poisonDiff: 77.1804,
    controlDiff: 118.0021,
    boardStrengthDiff: 21.0675,
    boardManaDiff: 18.4198,
    stackSynergyDiff: 111.6505,
    reserveStrengthDiff: 27.2075,
    handStrengthDiff: -8.2521,
    mobilityDiff: 23.7865,
    cornerControlDiff: 0,
    occupiedBoardDiff: -17.1037,
    imminentRoundDamageDiff: 83.7589,
    activeTurnTempo: 34.718,
    specialCardValue: 13.7589,
    deckTrimValue: 2.3715,
    eliteRouteBias: -5.7072,
    restRouteBias: 0,
    forgeRouteBias: 4.7696,
    treasureRouteBias: 2.6357,
    branchingRouteBias: 10,
    riskTolerance: 4.0795,
    aggressionPlanBias: -8.628,
    controlPlanBias: 1.9351,
    tempoPlanBias: -0.4354,
    fusionPlanBias: 11.0452,
    precisionPlanBias: -12,
    uncommonCardBias: 1.1234,
    rareCardBias: 0.6347,
    charmSynergyBias: -1.269,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 1.4731,
  },
};
