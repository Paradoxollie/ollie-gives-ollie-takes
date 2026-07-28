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
  name: "trained-bot-20260727-201439",
  trainedAt: "2026-07-27T20:14:39.755Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 138.5872,
    shieldDiff: 65.9038,
    drawBonusDiff: 44.0123,
    manaBonusDiff: 55.3388,
    poisonDiff: 56.7694,
    controlDiff: 77.5374,
    boardStrengthDiff: 44.5589,
    boardManaDiff: 24.7663,
    stackSynergyDiff: 0.705,
    reserveStrengthDiff: 16.1249,
    handStrengthDiff: 14.8481,
    mobilityDiff: 24.1993,
    cornerControlDiff: 5.0587,
    occupiedBoardDiff: -7.901,
    imminentRoundDamageDiff: 34.9381,
    activeTurnTempo: 21.9291,
    specialCardValue: 16.2886,
    deckTrimValue: 11.9357,
    eliteRouteBias: 3.8263,
    restRouteBias: 5.6725,
    forgeRouteBias: 0,
    treasureRouteBias: 4.8608,
    branchingRouteBias: 7.4787,
    riskTolerance: -0.3795,
    aggressionPlanBias: 7.0047,
    controlPlanBias: 17.2781,
    tempoPlanBias: 0.0594,
    fusionPlanBias: 16.6773,
    precisionPlanBias: 16.4622,
    uncommonCardBias: -4,
    rareCardBias: 10.336,
    charmSynergyBias: 6.8309,
    duplicateCardPenalty: 2.9948,
    enemyProfileRespect: 5.04,
  },
};
