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
  name: "trained-bot-20260730-141212",
  trainedAt: "2026-07-30T14:12:12.011Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 135.2711,
    shieldDiff: 63.1829,
    drawBonusDiff: 41.7995,
    manaBonusDiff: 56.9371,
    poisonDiff: 51.2443,
    controlDiff: 81.2224,
    boardStrengthDiff: 33.5739,
    boardManaDiff: 31.9759,
    stackSynergyDiff: 8.5248,
    reserveStrengthDiff: 10.3446,
    handStrengthDiff: 24.0194,
    mobilityDiff: 28.1936,
    cornerControlDiff: 0,
    occupiedBoardDiff: -0.0205,
    imminentRoundDamageDiff: 33.0383,
    activeTurnTempo: 22.0692,
    specialCardValue: 12.2707,
    deckTrimValue: 2.5063,
    eliteRouteBias: -0.8238,
    restRouteBias: 9.1828,
    forgeRouteBias: 0,
    treasureRouteBias: 10.1779,
    branchingRouteBias: 8.1957,
    riskTolerance: 8,
    aggressionPlanBias: -4.3243,
    controlPlanBias: 12.8464,
    tempoPlanBias: 1.7943,
    fusionPlanBias: 16.1936,
    precisionPlanBias: 16.0827,
    uncommonCardBias: -4,
    rareCardBias: -2.3816,
    charmSynergyBias: 5.1464,
    duplicateCardPenalty: 1.5589,
    enemyProfileRespect: 5.6019,
  },
};
