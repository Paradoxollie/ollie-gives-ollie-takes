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
  name: "trained-bot-20260903-181010",
  trainedAt: "2026-09-03T18:10:10.577Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 76.2061,
    shieldDiff: 115.6901,
    drawBonusDiff: 31.6629,
    manaBonusDiff: 88.8243,
    poisonDiff: 64.4548,
    controlDiff: 78.2695,
    boardStrengthDiff: 2.9602,
    boardManaDiff: 70.6938,
    stackSynergyDiff: 3.6644,
    reserveStrengthDiff: 17.054,
    handStrengthDiff: 12.2958,
    mobilityDiff: 22.066,
    cornerControlDiff: 18.1444,
    occupiedBoardDiff: -11.3526,
    imminentRoundDamageDiff: 73.1919,
    activeTurnTempo: 55.2153,
    specialCardValue: 18,
    deckTrimValue: 7.5546,
    eliteRouteBias: -1.8659,
    restRouteBias: 0,
    forgeRouteBias: 0,
    treasureRouteBias: 10.5741,
    branchingRouteBias: 0,
    riskTolerance: 3.6658,
    aggressionPlanBias: 13.6573,
    controlPlanBias: 14.6422,
    tempoPlanBias: -10.0928,
    fusionPlanBias: -4.6634,
    precisionPlanBias: 14.6831,
    uncommonCardBias: 7.1195,
    rareCardBias: 4.9744,
    charmSynergyBias: 7.573,
    duplicateCardPenalty: 3.4303,
    enemyProfileRespect: 5.4903,
  },
};
