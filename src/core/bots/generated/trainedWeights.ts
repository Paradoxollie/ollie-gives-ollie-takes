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
  name: "trained-bot-20261103-151342",
  trainedAt: "2026-11-03T15:13:42.100Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 83.1689,
    shieldDiff: 68.2639,
    drawBonusDiff: 10.4919,
    manaBonusDiff: 34.6,
    poisonDiff: 64.6551,
    controlDiff: 100.4718,
    boardStrengthDiff: 23.1144,
    boardManaDiff: 13.0555,
    stackSynergyDiff: 118.3886,
    reserveStrengthDiff: 25.0074,
    handStrengthDiff: -2.8009,
    mobilityDiff: 24.2662,
    cornerControlDiff: 19.382,
    occupiedBoardDiff: -30.7089,
    imminentRoundDamageDiff: 101.6679,
    activeTurnTempo: 17.4683,
    specialCardValue: 13.7716,
    deckTrimValue: 4.1139,
    eliteRouteBias: 3.3793,
    restRouteBias: 2.775,
    forgeRouteBias: 0,
    treasureRouteBias: 10.5063,
    branchingRouteBias: 3.5933,
    riskTolerance: 2.246,
    aggressionPlanBias: -12,
    controlPlanBias: 12.5624,
    tempoPlanBias: -12,
    fusionPlanBias: 9.1467,
    precisionPlanBias: -7.8537,
    uncommonCardBias: -1.0403,
    rareCardBias: 5.0442,
    charmSynergyBias: 13.6631,
    duplicateCardPenalty: 9.6772,
    enemyProfileRespect: 4.4955,
  },
};
