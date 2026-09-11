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
  name: "trained-bot-20260911-011218",
  trainedAt: "2026-09-11T01:12:18.633Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 65.979,
    shieldDiff: 111.7262,
    drawBonusDiff: 58.3956,
    manaBonusDiff: 92.425,
    poisonDiff: 52.5464,
    controlDiff: 66.0237,
    boardStrengthDiff: 0,
    boardManaDiff: 54.3827,
    stackSynergyDiff: 29.2168,
    reserveStrengthDiff: 30,
    handStrengthDiff: -10,
    mobilityDiff: 30,
    cornerControlDiff: 18.5423,
    occupiedBoardDiff: -13.9175,
    imminentRoundDamageDiff: 63.2399,
    activeTurnTempo: 55.44,
    specialCardValue: 6.7627,
    deckTrimValue: 0.822,
    eliteRouteBias: -0.0673,
    restRouteBias: 5.3938,
    forgeRouteBias: 4.9438,
    treasureRouteBias: 12,
    branchingRouteBias: 6.2805,
    riskTolerance: 0.214,
    aggressionPlanBias: -3.8929,
    controlPlanBias: 15.6857,
    tempoPlanBias: 4.2897,
    fusionPlanBias: 11.292,
    precisionPlanBias: 5.4311,
    uncommonCardBias: 3.4048,
    rareCardBias: 2.3334,
    charmSynergyBias: 4.3762,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 6.1629,
  },
};
