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
  name: "trained-bot-20260818-123853",
  trainedAt: "2026-08-18T12:38:53.528Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 117.8407,
    shieldDiff: 112.8582,
    drawBonusDiff: 37.557,
    manaBonusDiff: 102.4472,
    poisonDiff: 75.769,
    controlDiff: 91.6935,
    boardStrengthDiff: 9.478,
    boardManaDiff: 41.4558,
    stackSynergyDiff: 18.7162,
    reserveStrengthDiff: -4.5701,
    handStrengthDiff: 43.8195,
    mobilityDiff: -10,
    cornerControlDiff: 6.6546,
    occupiedBoardDiff: 5.4122,
    imminentRoundDamageDiff: 65.2282,
    activeTurnTempo: 41.8022,
    specialCardValue: 16.0945,
    deckTrimValue: 4.0842,
    eliteRouteBias: 8,
    restRouteBias: 4.105,
    forgeRouteBias: 5.2535,
    treasureRouteBias: 12,
    branchingRouteBias: 3.4555,
    riskTolerance: 0.677,
    aggressionPlanBias: -1.4989,
    controlPlanBias: 15.7699,
    tempoPlanBias: 8.745,
    fusionPlanBias: 12.6793,
    precisionPlanBias: 1.551,
    uncommonCardBias: -4,
    rareCardBias: 0.7555,
    charmSynergyBias: 11.0596,
    duplicateCardPenalty: 1.9859,
    enemyProfileRespect: 10,
  },
};
