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
  name: "trained-bot-20260614-203404",
  trainedAt: "2026-06-14T20:34:04.788Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 90.9507,
    shieldDiff: 65.9166,
    drawBonusDiff: 54.3822,
    manaBonusDiff: 78.5571,
    poisonDiff: 92.0408,
    controlDiff: 9.9368,
    boardStrengthDiff: 51.1867,
    boardManaDiff: 10.3669,
    stackSynergyDiff: 6.9571,
    reserveStrengthDiff: 20.3382,
    handStrengthDiff: 21.3652,
    mobilityDiff: 2.1684,
    cornerControlDiff: 60.1051,
    occupiedBoardDiff: 40.697,
    imminentRoundDamageDiff: 22.4698,
    activeTurnTempo: 1.8332,
    specialCardValue: 15.1563,
    deckTrimValue: 4.0788,
    eliteRouteBias: -2.0623,
    restRouteBias: 12,
    forgeRouteBias: 9.2599,
    treasureRouteBias: 9.0961,
    branchingRouteBias: 0,
    riskTolerance: -2.7142,
    aggressionPlanBias: 9.5086,
    controlPlanBias: 16.9471,
    tempoPlanBias: -3.8573,
    fusionPlanBias: 5.3775,
    precisionPlanBias: -10.7821,
    uncommonCardBias: 0.8315,
    rareCardBias: -1.2626,
    charmSynergyBias: 8.2418,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 7.2299,
  },
};
