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
  name: "trained-bot-20260525-153108",
  trainedAt: "2026-05-25T15:31:08.720Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 48.5724,
    controlDiff: 21.0673,
    boardStrengthDiff: 26.3187,
    reserveStrengthDiff: 28.6234,
    handStrengthDiff: 17.2586,
    mobilityDiff: 6.5077,
    cornerControlDiff: 28.6824,
    occupiedBoardDiff: 17.3751,
    imminentRoundDamageDiff: -19.3235,
    activeTurnTempo: -29.5099,
    specialCardValue: 2.8707,
    deckTrimValue: -39.0843,
    eliteRouteBias: -62.6866,
    restRouteBias: -7.674,
    forgeRouteBias: 10.7115,
    treasureRouteBias: 18.3147,
    branchingRouteBias: 23.8591,
    riskTolerance: 44.2415,
    aggressionPlanBias: 11.9188,
    controlPlanBias: 14.3854,
    tempoPlanBias: -5.2796,
    fusionPlanBias: 9.8832,
    precisionPlanBias: 7.2506,
    uncommonCardBias: 12.1981,
    rareCardBias: 15.196,
    charmSynergyBias: 29.3158,
    duplicateCardPenalty: -18.0612,
    enemyProfileRespect: 25.1019,
  },
};
