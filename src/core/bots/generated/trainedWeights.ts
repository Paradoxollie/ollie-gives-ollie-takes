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
  name: "trained-bot-20260722-040547",
  trainedAt: "2026-07-22T04:05:47.384Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 105.3413,
    shieldDiff: 74.4443,
    drawBonusDiff: 39.1379,
    manaBonusDiff: 60.6586,
    poisonDiff: 66.5871,
    controlDiff: 65.1745,
    boardStrengthDiff: 44.0803,
    boardManaDiff: 6.5519,
    stackSynergyDiff: 11.9965,
    reserveStrengthDiff: 26.2965,
    handStrengthDiff: 6.8364,
    mobilityDiff: 29.5582,
    cornerControlDiff: 4.7027,
    occupiedBoardDiff: -7.3529,
    imminentRoundDamageDiff: 43.3389,
    activeTurnTempo: 22.1492,
    specialCardValue: 15.1589,
    deckTrimValue: 2.8056,
    eliteRouteBias: 2.0167,
    restRouteBias: 7.9448,
    forgeRouteBias: 12,
    treasureRouteBias: 2.134,
    branchingRouteBias: 5.5698,
    riskTolerance: -3.7797,
    aggressionPlanBias: 8.9067,
    controlPlanBias: 13.7114,
    tempoPlanBias: -7.5557,
    fusionPlanBias: 1.9098,
    precisionPlanBias: 0.7108,
    uncommonCardBias: 4.057,
    rareCardBias: 6.4016,
    charmSynergyBias: 3.6024,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
  },
};
