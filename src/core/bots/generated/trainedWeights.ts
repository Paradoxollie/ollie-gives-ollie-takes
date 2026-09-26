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
  name: "trained-bot-20260926-024800",
  trainedAt: "2026-09-26T02:48:00.568Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.0907,
    shieldDiff: 108.0359,
    drawBonusDiff: 28.9854,
    manaBonusDiff: 75.3531,
    poisonDiff: 43.7386,
    controlDiff: 43.7681,
    boardStrengthDiff: 29.8891,
    boardManaDiff: 66.4477,
    stackSynergyDiff: 68.3778,
    reserveStrengthDiff: 11.9855,
    handStrengthDiff: 2.2576,
    mobilityDiff: 19.6718,
    cornerControlDiff: 18.0152,
    occupiedBoardDiff: -23.1998,
    imminentRoundDamageDiff: 30.7318,
    activeTurnTempo: 36.2485,
    specialCardValue: 18,
    deckTrimValue: 5.2929,
    eliteRouteBias: 0.0532,
    restRouteBias: 5.7167,
    forgeRouteBias: 1.3427,
    treasureRouteBias: 3.1046,
    branchingRouteBias: 10,
    riskTolerance: -0.9284,
    aggressionPlanBias: 1.1375,
    controlPlanBias: 3.4795,
    tempoPlanBias: -6.2656,
    fusionPlanBias: 0.9631,
    precisionPlanBias: -0.8916,
    uncommonCardBias: 6.2606,
    rareCardBias: -2.5519,
    charmSynergyBias: -2.3351,
    duplicateCardPenalty: 4.8914,
    enemyProfileRespect: 0.6856,
  },
};
