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
  name: "trained-bot-20260711-221612",
  trainedAt: "2026-07-11T22:16:12.288Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 101.37,
    shieldDiff: 58.3992,
    drawBonusDiff: 9.6391,
    manaBonusDiff: 66.19015,
    poisonDiff: 60.272850000000005,
    controlDiff: 21.106250000000003,
    boardStrengthDiff: 37.603300000000004,
    boardManaDiff: 4.96915,
    stackSynergyDiff: 9.46595,
    reserveStrengthDiff: 19.76055,
    handStrengthDiff: 11.11585,
    mobilityDiff: 18.711199999999998,
    cornerControlDiff: 0.36865000000000003,
    occupiedBoardDiff: 50,
    imminentRoundDamageDiff: 80.54365,
    activeTurnTempo: 23.57215,
    specialCardValue: 17.028399999999998,
    deckTrimValue: 4.946949999999999,
    eliteRouteBias: -4.52025,
    restRouteBias: 0.2257,
    forgeRouteBias: 8.5565,
    treasureRouteBias: 7.7679,
    branchingRouteBias: 2.4996,
    riskTolerance: 2.8904500000000004,
    aggressionPlanBias: -8.40175,
    controlPlanBias: 13.2427,
    tempoPlanBias: -6.15175,
    fusionPlanBias: 1.0178,
    precisionPlanBias: 6.2756,
    uncommonCardBias: 8.91745,
    rareCardBias: 7.9239,
    charmSynergyBias: 13.9769,
    duplicateCardPenalty: 0.9291499999999999,
    enemyProfileRespect: 4.1671000000000005,
  },
};
