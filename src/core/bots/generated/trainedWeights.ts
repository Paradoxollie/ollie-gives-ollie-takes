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
  name: "trained-bot-20260720-103147",
  trainedAt: "2026-07-20T10:31:47.955Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 125.7187,
    shieldDiff: 58.9732,
    drawBonusDiff: 39.5401,
    manaBonusDiff: 61.1451,
    poisonDiff: 68.9634,
    controlDiff: 48.2177,
    boardStrengthDiff: 42.8047,
    boardManaDiff: 8.7562,
    stackSynergyDiff: 30.0248,
    reserveStrengthDiff: 21.7635,
    handStrengthDiff: 10.349,
    mobilityDiff: 23.1727,
    cornerControlDiff: 7.1814,
    occupiedBoardDiff: 2.066,
    imminentRoundDamageDiff: 50.5382,
    activeTurnTempo: 35.8795,
    specialCardValue: 12.4945,
    deckTrimValue: 7.4329,
    eliteRouteBias: 5.9696,
    restRouteBias: 12,
    forgeRouteBias: 2.9151,
    treasureRouteBias: 8.2288,
    branchingRouteBias: 8.2234,
    riskTolerance: 8,
    aggressionPlanBias: 3.3419,
    controlPlanBias: 9.0302,
    tempoPlanBias: -5.3908,
    fusionPlanBias: 9.8118,
    precisionPlanBias: -11.1079,
    uncommonCardBias: 6.161,
    rareCardBias: 3.4979,
    charmSynergyBias: 0.7568,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 8.3998,
  },
};
