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
  name: "trained-bot-20260821-083344",
  trainedAt: "2026-08-21T08:33:44.817Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 96.531,
    shieldDiff: 106.5571,
    drawBonusDiff: 57.7591,
    manaBonusDiff: 89.7099,
    poisonDiff: 74.0209,
    controlDiff: 83.1349,
    boardStrengthDiff: 7.4528,
    boardManaDiff: 39.1392,
    stackSynergyDiff: 7.4138,
    reserveStrengthDiff: 2.8283,
    handStrengthDiff: 40.3388,
    mobilityDiff: 3.7711,
    cornerControlDiff: 15.9082,
    occupiedBoardDiff: 4.4111,
    imminentRoundDamageDiff: 72.3815,
    activeTurnTempo: 43.1022,
    specialCardValue: 1.3136,
    deckTrimValue: 1.7621,
    eliteRouteBias: -1.952,
    restRouteBias: 4.0798,
    forgeRouteBias: 1.2804,
    treasureRouteBias: 12,
    branchingRouteBias: 5.0168,
    riskTolerance: -4,
    aggressionPlanBias: -6.6202,
    controlPlanBias: 14.2436,
    tempoPlanBias: 4.3267,
    fusionPlanBias: -7.7419,
    precisionPlanBias: -10.4393,
    uncommonCardBias: -0.046,
    rareCardBias: -0.6938,
    charmSynergyBias: 7.4291,
    duplicateCardPenalty: 0.5597,
    enemyProfileRespect: 9.6495,
  },
};
