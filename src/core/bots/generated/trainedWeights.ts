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
  name: "trained-bot-20261122-172051",
  trainedAt: "2026-11-22T17:20:51.546Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 44.747,
    shieldDiff: 38.0875,
    drawBonusDiff: 46.0686,
    manaBonusDiff: 0,
    poisonDiff: 76.1187,
    controlDiff: 117.3528,
    boardStrengthDiff: 11.9823,
    boardManaDiff: 27.4299,
    stackSynergyDiff: 103.4085,
    reserveStrengthDiff: 16.4471,
    handStrengthDiff: -0.4052,
    mobilityDiff: 24.9767,
    cornerControlDiff: 8.7174,
    occupiedBoardDiff: -18.9166,
    imminentRoundDamageDiff: 86.8439,
    activeTurnTempo: 36.9007,
    specialCardValue: 6.2507,
    deckTrimValue: 4.6489,
    eliteRouteBias: 6.0422,
    restRouteBias: 8.876,
    forgeRouteBias: 4.1632,
    treasureRouteBias: 10.6021,
    branchingRouteBias: 5.264,
    riskTolerance: 7.3402,
    aggressionPlanBias: -7.8357,
    controlPlanBias: 2.8967,
    tempoPlanBias: -8.537,
    fusionPlanBias: 0.5327,
    precisionPlanBias: -2.6583,
    uncommonCardBias: 5.8047,
    rareCardBias: 8.2542,
    charmSynergyBias: 7.7441,
    duplicateCardPenalty: 4.6562,
    enemyProfileRespect: 3.896,
  },
};
