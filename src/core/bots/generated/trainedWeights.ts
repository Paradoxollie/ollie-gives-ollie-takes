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
  name: "trained-bot-20261031-142512",
  trainedAt: "2026-10-31T14:25:12.521Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.2115,
    shieldDiff: 76.4902,
    drawBonusDiff: 24.1153,
    manaBonusDiff: 38.9455,
    poisonDiff: 78.9293,
    controlDiff: 92.6776,
    boardStrengthDiff: 17.2815,
    boardManaDiff: 11.8525,
    stackSynergyDiff: 108.8755,
    reserveStrengthDiff: 30,
    handStrengthDiff: 9.3498,
    mobilityDiff: 21.7177,
    cornerControlDiff: 11.3619,
    occupiedBoardDiff: -22.2126,
    imminentRoundDamageDiff: 91.3033,
    activeTurnTempo: 19.1813,
    specialCardValue: 18,
    deckTrimValue: 4.984,
    eliteRouteBias: -1.3139,
    restRouteBias: 12,
    forgeRouteBias: 0,
    treasureRouteBias: 6.688,
    branchingRouteBias: 7.9121,
    riskTolerance: 4.6903,
    aggressionPlanBias: -6.5942,
    controlPlanBias: -11.8541,
    tempoPlanBias: -12,
    fusionPlanBias: 5.8063,
    precisionPlanBias: -12,
    uncommonCardBias: 2.7583,
    rareCardBias: 7.5907,
    charmSynergyBias: 11.823,
    duplicateCardPenalty: 9.9123,
    enemyProfileRespect: 4.6769,
  },
};
