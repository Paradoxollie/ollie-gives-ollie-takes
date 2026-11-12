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
  name: "trained-bot-20261112-004614",
  trainedAt: "2026-11-12T00:46:14.627Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 63.298,
    shieldDiff: 84.4384,
    drawBonusDiff: 0,
    manaBonusDiff: 17.0085,
    poisonDiff: 80.2324,
    controlDiff: 136.7447,
    boardStrengthDiff: 14.5239,
    boardManaDiff: 12.1465,
    stackSynergyDiff: 104.2619,
    reserveStrengthDiff: 26.0897,
    handStrengthDiff: -7.8393,
    mobilityDiff: 27.7601,
    cornerControlDiff: 21.3172,
    occupiedBoardDiff: -23.7339,
    imminentRoundDamageDiff: 95.5957,
    activeTurnTempo: 18.4725,
    specialCardValue: 6.2314,
    deckTrimValue: 2.1924,
    eliteRouteBias: 4.6821,
    restRouteBias: 7.4267,
    forgeRouteBias: 9.2777,
    treasureRouteBias: 11.3383,
    branchingRouteBias: 0.3939,
    riskTolerance: 1.1513,
    aggressionPlanBias: -10.9938,
    controlPlanBias: 3.0812,
    tempoPlanBias: -6.0629,
    fusionPlanBias: 1.8405,
    precisionPlanBias: -4.1019,
    uncommonCardBias: -0.0018,
    rareCardBias: 10.1077,
    charmSynergyBias: 8.4024,
    duplicateCardPenalty: 8.1214,
    enemyProfileRespect: 3.952,
  },
};
