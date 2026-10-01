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
  name: "trained-bot-20261001-145715",
  trainedAt: "2026-10-01T14:57:15.044Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 62.9424,
    shieldDiff: 93.7626,
    drawBonusDiff: 20.1475,
    manaBonusDiff: 64.5014,
    poisonDiff: 66.0261,
    controlDiff: 41.2501,
    boardStrengthDiff: 24.8968,
    boardManaDiff: 54.3823,
    stackSynergyDiff: 56.5555,
    reserveStrengthDiff: 23.1245,
    handStrengthDiff: -2.6555,
    mobilityDiff: -9.6312,
    cornerControlDiff: 0,
    occupiedBoardDiff: -11.7296,
    imminentRoundDamageDiff: 42.2011,
    activeTurnTempo: 6.6026,
    specialCardValue: 2.0344,
    deckTrimValue: 7.2782,
    eliteRouteBias: 7.7423,
    restRouteBias: 10.9101,
    forgeRouteBias: 3.0481,
    treasureRouteBias: 7.0385,
    branchingRouteBias: 1.1703,
    riskTolerance: 4.3325,
    aggressionPlanBias: 8.9067,
    controlPlanBias: -6.6727,
    tempoPlanBias: -10.3654,
    fusionPlanBias: -2.5265,
    precisionPlanBias: -5.515,
    uncommonCardBias: -2.5426,
    rareCardBias: 10.4968,
    charmSynergyBias: 0.2894,
    duplicateCardPenalty: 7.6551,
    enemyProfileRespect: 3.2283,
  },
};
