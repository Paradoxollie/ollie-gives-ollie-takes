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
  name: "trained-bot-20260919-154642",
  trainedAt: "2026-09-19T15:46:42.211Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.6536,
    shieldDiff: 110.5566,
    drawBonusDiff: 33.32,
    manaBonusDiff: 93.7396,
    poisonDiff: 50.9766,
    controlDiff: 58.6209,
    boardStrengthDiff: 22.7404,
    boardManaDiff: 49.0175,
    stackSynergyDiff: 49.5437,
    reserveStrengthDiff: 24.5047,
    handStrengthDiff: -8.6456,
    mobilityDiff: 21.7477,
    cornerControlDiff: 26.0084,
    occupiedBoardDiff: -20.7343,
    imminentRoundDamageDiff: 55.3412,
    activeTurnTempo: 20.4306,
    specialCardValue: 11.3699,
    deckTrimValue: 4.721,
    eliteRouteBias: -5.8687,
    restRouteBias: 0,
    forgeRouteBias: 5.605,
    treasureRouteBias: 0,
    branchingRouteBias: 3.6194,
    riskTolerance: 0.2897,
    aggressionPlanBias: -5.324,
    controlPlanBias: 10.8337,
    tempoPlanBias: -10.6168,
    fusionPlanBias: -9.1977,
    precisionPlanBias: 8.3291,
    uncommonCardBias: 10,
    rareCardBias: -4,
    charmSynergyBias: 13.3206,
    duplicateCardPenalty: 8.235,
    enemyProfileRespect: 8.4748,
  },
};
