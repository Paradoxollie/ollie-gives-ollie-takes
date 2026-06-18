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
  name: "trained-bot-20260618-004940",
  trainedAt: "2026-06-18T00:49:40.553Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.14,
    shieldDiff: 88.3906,
    drawBonusDiff: 26.05825,
    manaBonusDiff: 80.184,
    poisonDiff: 102.88669999999999,
    controlDiff: 17.98885,
    boardStrengthDiff: 38.107,
    boardManaDiff: 21.368949999999998,
    stackSynergyDiff: 0,
    reserveStrengthDiff: 20.28645,
    handStrengthDiff: 44.938900000000004,
    mobilityDiff: -4.816050000000001,
    cornerControlDiff: 63.40275,
    occupiedBoardDiff: 23.9041,
    imminentRoundDamageDiff: 25.70915,
    activeTurnTempo: 7.0901,
    specialCardValue: 16.58935,
    deckTrimValue: 3.30095,
    eliteRouteBias: -7.309200000000001,
    restRouteBias: 12,
    forgeRouteBias: 7.6029,
    treasureRouteBias: 10.8584,
    branchingRouteBias: 9.2396,
    riskTolerance: 1.6549,
    aggressionPlanBias: 1.163,
    controlPlanBias: 8.9588,
    tempoPlanBias: -4.4248,
    fusionPlanBias: -8.47945,
    precisionPlanBias: 4.0041,
    uncommonCardBias: 0.1504,
    rareCardBias: 5.9239999999999995,
    charmSynergyBias: 4.4687,
    duplicateCardPenalty: 5.2875,
    enemyProfileRespect: 4.5818,
  },
};
