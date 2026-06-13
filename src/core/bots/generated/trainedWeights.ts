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
  name: "trained-bot-20260613-023454",
  trainedAt: "2026-06-13T02:34:54.298Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 94.9405,
    shieldDiff: 50.323,
    drawBonusDiff: 65.6901,
    manaBonusDiff: 101.0007,
    poisonDiff: 96.9458,
    controlDiff: 5.3826,
    boardStrengthDiff: 53.4614,
    boardManaDiff: 11.7291,
    stackSynergyDiff: 16.254,
    reserveStrengthDiff: 30,
    handStrengthDiff: 22.8422,
    mobilityDiff: 7.6135,
    cornerControlDiff: 54.6654,
    occupiedBoardDiff: 40.5658,
    imminentRoundDamageDiff: 9.9314,
    activeTurnTempo: 7.1742,
    specialCardValue: 16.6106,
    deckTrimValue: 1.286,
    eliteRouteBias: 5.9749,
    restRouteBias: 2.6299,
    forgeRouteBias: 6.2288,
    treasureRouteBias: 0.5137,
    branchingRouteBias: 10,
    riskTolerance: 1.2679,
    aggressionPlanBias: 10.115,
    controlPlanBias: 9.8592,
    tempoPlanBias: -5.2483,
    fusionPlanBias: 11.0031,
    precisionPlanBias: 2.1914,
    uncommonCardBias: 8.6122,
    rareCardBias: -0.374,
    charmSynergyBias: 3.1501,
    duplicateCardPenalty: 8.3969,
    enemyProfileRespect: 6.5648,
  },
};
