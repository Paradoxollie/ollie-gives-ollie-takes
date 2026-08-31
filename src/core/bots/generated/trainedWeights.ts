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
  name: "trained-bot-20260831-154055",
  trainedAt: "2026-08-31T15:40:55.448Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 88.4221,
    shieldDiff: 113.7068,
    drawBonusDiff: 21.837,
    manaBonusDiff: 102.359,
    poisonDiff: 70.1246,
    controlDiff: 71.9613,
    boardStrengthDiff: 29.3987,
    boardManaDiff: 56.6237,
    stackSynergyDiff: 13.6778,
    reserveStrengthDiff: 20.1692,
    handStrengthDiff: 28.2096,
    mobilityDiff: 25.2958,
    cornerControlDiff: 10.6441,
    occupiedBoardDiff: -22.4377,
    imminentRoundDamageDiff: 67.0752,
    activeTurnTempo: 40.561,
    specialCardValue: 17.2036,
    deckTrimValue: 3.2535,
    eliteRouteBias: -7.4293,
    restRouteBias: 3.2307,
    forgeRouteBias: 10.3184,
    treasureRouteBias: 10.635,
    branchingRouteBias: 4.799,
    riskTolerance: -0.6257,
    aggressionPlanBias: 14.4061,
    controlPlanBias: -7.7274,
    tempoPlanBias: 10.1737,
    fusionPlanBias: 4.105,
    precisionPlanBias: -0.5795,
    uncommonCardBias: -1.0936,
    rareCardBias: 0.3632,
    charmSynergyBias: 0.7428,
    duplicateCardPenalty: 8.0577,
    enemyProfileRespect: 6.0862,
  },
};
