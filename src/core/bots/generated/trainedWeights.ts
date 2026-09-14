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
  name: "trained-bot-20260914-071741",
  trainedAt: "2026-09-14T07:17:41.152Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 69.6743,
    shieldDiff: 105.4786,
    drawBonusDiff: 41.0544,
    manaBonusDiff: 87.0139,
    poisonDiff: 35.5985,
    controlDiff: 54.8063,
    boardStrengthDiff: 5.229,
    boardManaDiff: 43.2446,
    stackSynergyDiff: 22.2245,
    reserveStrengthDiff: 22.9979,
    handStrengthDiff: 2.3784,
    mobilityDiff: 28.0452,
    cornerControlDiff: 15.5344,
    occupiedBoardDiff: -25.0219,
    imminentRoundDamageDiff: 50.6586,
    activeTurnTempo: 41.2858,
    specialCardValue: 11.4254,
    deckTrimValue: 5.1845,
    eliteRouteBias: 4.1867,
    restRouteBias: 5.838,
    forgeRouteBias: 10.3544,
    treasureRouteBias: 9.2233,
    branchingRouteBias: 6.224,
    riskTolerance: -1.9808,
    aggressionPlanBias: -3.8141,
    controlPlanBias: 9.5769,
    tempoPlanBias: -3.5827,
    fusionPlanBias: -1.2912,
    precisionPlanBias: -2.3514,
    uncommonCardBias: 8.9991,
    rareCardBias: -0.6399,
    charmSynergyBias: -0.565,
    duplicateCardPenalty: 7.3105,
    enemyProfileRespect: 3.93,
  },
};
