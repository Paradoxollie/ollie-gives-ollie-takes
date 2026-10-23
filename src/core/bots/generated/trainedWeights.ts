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
  name: "trained-bot-20261023-061149",
  trainedAt: "2026-10-23T06:11:49.447Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 89.8195,
    shieldDiff: 77.1806,
    drawBonusDiff: 15.6301,
    manaBonusDiff: 68.0263,
    poisonDiff: 83.0395,
    controlDiff: 75.2901,
    boardStrengthDiff: 14.1838,
    boardManaDiff: 32.6948,
    stackSynergyDiff: 89.286,
    reserveStrengthDiff: 15.1843,
    handStrengthDiff: 3.8079,
    mobilityDiff: 30,
    cornerControlDiff: 16.9925,
    occupiedBoardDiff: -15.0382,
    imminentRoundDamageDiff: 91.5413,
    activeTurnTempo: 15.2096,
    specialCardValue: 17.9099,
    deckTrimValue: 8.8089,
    eliteRouteBias: -5.3939,
    restRouteBias: 3.6334,
    forgeRouteBias: 3.4654,
    treasureRouteBias: 7.0399,
    branchingRouteBias: 2.649,
    riskTolerance: -4,
    aggressionPlanBias: -11.3214,
    controlPlanBias: -3.7733,
    tempoPlanBias: -8.9529,
    fusionPlanBias: -12,
    precisionPlanBias: -4.6794,
    uncommonCardBias: -4,
    rareCardBias: 6.1534,
    charmSynergyBias: 13.9733,
    duplicateCardPenalty: 6.3092,
    enemyProfileRespect: 3.3155,
  },
};
