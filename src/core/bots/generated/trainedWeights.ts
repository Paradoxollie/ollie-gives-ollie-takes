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
  name: "trained-bot-20260520-120606",
  trainedAt: "2026-05-20T12:06:06.882Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 19.781844444444445,
    controlDiff: 16.929466666666666,
    boardStrengthDiff: 20.426166666666663,
    reserveStrengthDiff: 31.0393,
    handStrengthDiff: -6.9199222222222225,
    mobilityDiff: 11.958633333333333,
    cornerControlDiff: 12.883111111111113,
    occupiedBoardDiff: 0.4793,
    imminentRoundDamageDiff: -9.911633333333333,
    activeTurnTempo: -27.851133333333337,
    specialCardValue: -9.213822222222221,
    deckTrimValue: -14.395388888888888,
    eliteRouteBias: -35.743944444444445,
    restRouteBias: 4.3715222222222225,
    forgeRouteBias: -13.04168888888889,
    treasureRouteBias: 23.54262222222222,
    branchingRouteBias: 28.935188888888888,
    riskTolerance: 9.316855555555556,
    aggressionPlanBias: 22.548055555555553,
    controlPlanBias: 23.96653333333333,
    tempoPlanBias: -2.998366666666667,
    fusionPlanBias: 25.216255555555552,
    precisionPlanBias: 2.6039999999999996,
    uncommonCardBias: -11.15468888888889,
    rareCardBias: -1.3008,
    charmSynergyBias: 35.13968888888889,
    duplicateCardPenalty: 0.9047666666666667,
    enemyProfileRespect: 21.743644444444442,
  },
};
