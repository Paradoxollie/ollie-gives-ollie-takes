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
  name: "trained-bot-20260721-223743",
  trainedAt: "2026-07-21T22:37:43.769Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 106.9307,
    shieldDiff: 73.9912,
    drawBonusDiff: 38.8422,
    manaBonusDiff: 61.1775,
    poisonDiff: 65.7804,
    controlDiff: 58.6456,
    boardStrengthDiff: 45.0734,
    boardManaDiff: 9.297,
    stackSynergyDiff: 11.8027,
    reserveStrengthDiff: 22.1698,
    handStrengthDiff: 4.8384,
    mobilityDiff: 24.8952,
    cornerControlDiff: 2.5288,
    occupiedBoardDiff: -0.4139,
    imminentRoundDamageDiff: 48.9523,
    activeTurnTempo: 20.4851,
    specialCardValue: 10.2363,
    deckTrimValue: 6.7132,
    eliteRouteBias: 3.0309,
    restRouteBias: 7.2528,
    forgeRouteBias: 7.8922,
    treasureRouteBias: 4.5868,
    branchingRouteBias: 3.4936,
    riskTolerance: 7.3574,
    aggressionPlanBias: 7.1948,
    controlPlanBias: 11.6685,
    tempoPlanBias: -12,
    fusionPlanBias: 2.5583,
    precisionPlanBias: 2.565,
    uncommonCardBias: 8.9161,
    rareCardBias: 1.9677,
    charmSynergyBias: 1.5962,
    duplicateCardPenalty: 2.7068,
    enemyProfileRespect: 0,
  },
};
