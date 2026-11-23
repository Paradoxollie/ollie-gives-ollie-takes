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
  name: "trained-bot-20261123-074340",
  trainedAt: "2026-11-23T07:43:40.471Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 33.6606,
    shieldDiff: 38.8983,
    drawBonusDiff: 48.4795,
    manaBonusDiff: 7.8596,
    poisonDiff: 67.2369,
    controlDiff: 107.7597,
    boardStrengthDiff: 6.5887,
    boardManaDiff: 27.9522,
    stackSynergyDiff: 101.9134,
    reserveStrengthDiff: 10.1984,
    handStrengthDiff: 5.7906,
    mobilityDiff: 25.2001,
    cornerControlDiff: 7.5174,
    occupiedBoardDiff: -15.5906,
    imminentRoundDamageDiff: 84.7979,
    activeTurnTempo: 45.7314,
    specialCardValue: 10.1444,
    deckTrimValue: 0,
    eliteRouteBias: -0.384,
    restRouteBias: 9.0818,
    forgeRouteBias: 1.0091,
    treasureRouteBias: 6.5936,
    branchingRouteBias: 10,
    riskTolerance: 4.7637,
    aggressionPlanBias: -2.3004,
    controlPlanBias: -1.2887,
    tempoPlanBias: -7.5687,
    fusionPlanBias: 3.5569,
    precisionPlanBias: -10.5665,
    uncommonCardBias: 3.6183,
    rareCardBias: 11.1619,
    charmSynergyBias: 9.0098,
    duplicateCardPenalty: 5.5036,
    enemyProfileRespect: 4.5412,
  },
};
