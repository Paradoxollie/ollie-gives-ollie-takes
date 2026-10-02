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
  name: "trained-bot-20261002-010558",
  trainedAt: "2026-10-02T01:05:58.822Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 54.2219,
    shieldDiff: 99.6572,
    drawBonusDiff: 20.9053,
    manaBonusDiff: 54.7438,
    poisonDiff: 70.0749,
    controlDiff: 38.0971,
    boardStrengthDiff: 27.608,
    boardManaDiff: 47.5439,
    stackSynergyDiff: 63.123,
    reserveStrengthDiff: 22.219,
    handStrengthDiff: -2.5398,
    mobilityDiff: -10,
    cornerControlDiff: 0,
    occupiedBoardDiff: -12.3031,
    imminentRoundDamageDiff: 41.3191,
    activeTurnTempo: 16.2745,
    specialCardValue: 2.1814,
    deckTrimValue: 0.0557,
    eliteRouteBias: 8,
    restRouteBias: 12,
    forgeRouteBias: 2.5644,
    treasureRouteBias: 3.8867,
    branchingRouteBias: 0,
    riskTolerance: 2.982,
    aggressionPlanBias: -5.231,
    controlPlanBias: -10.9803,
    tempoPlanBias: -6.8605,
    fusionPlanBias: -11.7967,
    precisionPlanBias: -0.4641,
    uncommonCardBias: -4,
    rareCardBias: 5.2461,
    charmSynergyBias: -2.9265,
    duplicateCardPenalty: 5.1866,
    enemyProfileRespect: 0,
  },
};
