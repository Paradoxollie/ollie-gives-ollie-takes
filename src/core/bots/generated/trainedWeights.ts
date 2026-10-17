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
  name: "trained-bot-20261017-201927",
  trainedAt: "2026-10-17T20:19:27.119Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 73.6409,
    shieldDiff: 79.3458,
    drawBonusDiff: 4.1249,
    manaBonusDiff: 91.7828,
    poisonDiff: 58.6733,
    controlDiff: 63.8554,
    boardStrengthDiff: 29.236,
    boardManaDiff: 54.5736,
    stackSynergyDiff: 98.7411,
    reserveStrengthDiff: 24.9157,
    handStrengthDiff: 19.5827,
    mobilityDiff: 18.3,
    cornerControlDiff: 9.615,
    occupiedBoardDiff: -20.936,
    imminentRoundDamageDiff: 78.3431,
    activeTurnTempo: 31.1298,
    specialCardValue: 12.8653,
    deckTrimValue: 0,
    eliteRouteBias: 8,
    restRouteBias: 3.8586,
    forgeRouteBias: 5.8305,
    treasureRouteBias: 0,
    branchingRouteBias: 5.946,
    riskTolerance: 0.8928,
    aggressionPlanBias: -4.4585,
    controlPlanBias: -2.8878,
    tempoPlanBias: -11.4788,
    fusionPlanBias: 16.8637,
    precisionPlanBias: -3.9961,
    uncommonCardBias: 3.0114,
    rareCardBias: -3.4287,
    charmSynergyBias: -4,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 2.6142,
  },
};
