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
  name: "trained-bot-20260607-170850",
  trainedAt: "2026-06-07T17:08:50.285Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.3733,
    shieldDiff: 52.326,
    drawBonusDiff: 64.8755,
    manaBonusDiff: 95.7451,
    poisonDiff: 109.7001,
    controlDiff: 0,
    boardStrengthDiff: 56.1983,
    boardManaDiff: 0,
    stackSynergyDiff: 5.0401,
    reserveStrengthDiff: 25.9957,
    handStrengthDiff: 13.826,
    mobilityDiff: 9.7486,
    cornerControlDiff: 54.7756,
    occupiedBoardDiff: 26.1172,
    imminentRoundDamageDiff: 10.6518,
    activeTurnTempo: -9.5688,
    specialCardValue: 14.6364,
    deckTrimValue: 9.3086,
    eliteRouteBias: 4.8466,
    restRouteBias: 11.2522,
    forgeRouteBias: 12,
    treasureRouteBias: 12,
    branchingRouteBias: 4.6721,
    riskTolerance: 6.9066,
    aggressionPlanBias: 2.1008,
    controlPlanBias: 3.8152,
    tempoPlanBias: -12,
    fusionPlanBias: 4.8307,
    precisionPlanBias: 13.1262,
    uncommonCardBias: 3.9446,
    rareCardBias: 12,
    charmSynergyBias: 11.5117,
    duplicateCardPenalty: 9.8322,
    enemyProfileRespect: 0,
  },
};
