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
  name: "trained-bot-20261021-193121",
  trainedAt: "2026-10-21T19:31:21.818Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 81.1275,
    shieldDiff: 80.9053,
    drawBonusDiff: 6.0871,
    manaBonusDiff: 72.0867,
    poisonDiff: 82.9608,
    controlDiff: 72.133,
    boardStrengthDiff: 19.5544,
    boardManaDiff: 37.6442,
    stackSynergyDiff: 96.9504,
    reserveStrengthDiff: 10.8937,
    handStrengthDiff: 9.5329,
    mobilityDiff: 25.2889,
    cornerControlDiff: 18.7263,
    occupiedBoardDiff: -17.1182,
    imminentRoundDamageDiff: 91.5345,
    activeTurnTempo: 22.1998,
    specialCardValue: 11.622,
    deckTrimValue: 0,
    eliteRouteBias: -4.6044,
    restRouteBias: 0,
    forgeRouteBias: 12,
    treasureRouteBias: 11.042,
    branchingRouteBias: 8.4482,
    riskTolerance: -3.4695,
    aggressionPlanBias: -7.1922,
    controlPlanBias: 4.9549,
    tempoPlanBias: -6.5048,
    fusionPlanBias: -6.2217,
    precisionPlanBias: -4.5437,
    uncommonCardBias: -4,
    rareCardBias: 11.6739,
    charmSynergyBias: 11.6454,
    duplicateCardPenalty: 6.9007,
    enemyProfileRespect: 5.817,
  },
};
