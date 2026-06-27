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
  name: "trained-bot-20260627-133554",
  trainedAt: "2026-06-27T13:35:54.553Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 98.4419,
    shieldDiff: 60.9537,
    drawBonusDiff: 9.2015,
    manaBonusDiff: 78.5687,
    poisonDiff: 74.7661,
    controlDiff: 7.619,
    boardStrengthDiff: 19.0727,
    boardManaDiff: 10.1216,
    stackSynergyDiff: 7.423,
    reserveStrengthDiff: 25.3142,
    handStrengthDiff: 39.4118,
    mobilityDiff: 12.4286,
    cornerControlDiff: 31.446,
    occupiedBoardDiff: 23.8379,
    imminentRoundDamageDiff: 47.8831,
    activeTurnTempo: 5.1753,
    specialCardValue: 15.4496,
    deckTrimValue: 0,
    eliteRouteBias: 8,
    restRouteBias: 9.2581,
    forgeRouteBias: 7.3411,
    treasureRouteBias: 10.6703,
    branchingRouteBias: 6.8335,
    riskTolerance: -0.1527,
    aggressionPlanBias: 11.0474,
    controlPlanBias: 16.9518,
    tempoPlanBias: 0.3911,
    fusionPlanBias: 5.006,
    precisionPlanBias: 2.4599,
    uncommonCardBias: 10,
    rareCardBias: 12,
    charmSynergyBias: 9.1493,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 0,
  },
};
