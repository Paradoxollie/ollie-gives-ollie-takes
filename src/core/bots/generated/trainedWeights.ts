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
  name: "trained-bot-20260917-021748",
  trainedAt: "2026-09-17T02:17:48.524Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 80.2724,
    shieldDiff: 96.7624,
    drawBonusDiff: 34.6708,
    manaBonusDiff: 91.9327,
    poisonDiff: 32.8916,
    controlDiff: 57.3816,
    boardStrengthDiff: 11.8289,
    boardManaDiff: 47.2394,
    stackSynergyDiff: 40.0661,
    reserveStrengthDiff: 12.4042,
    handStrengthDiff: -10,
    mobilityDiff: 28.0298,
    cornerControlDiff: 22.8069,
    occupiedBoardDiff: -33.5283,
    imminentRoundDamageDiff: 44.3746,
    activeTurnTempo: 34.1177,
    specialCardValue: 18,
    deckTrimValue: 12.1126,
    eliteRouteBias: 8,
    restRouteBias: 6.5839,
    forgeRouteBias: 5.5524,
    treasureRouteBias: 5.7867,
    branchingRouteBias: 3.9867,
    riskTolerance: -3.9114,
    aggressionPlanBias: -4.1034,
    controlPlanBias: 4.0511,
    tempoPlanBias: -1.3274,
    fusionPlanBias: 2.7633,
    precisionPlanBias: -7.1854,
    uncommonCardBias: 8.6896,
    rareCardBias: 4.8441,
    charmSynergyBias: 0.4285,
    duplicateCardPenalty: 5.3881,
    enemyProfileRespect: 6.382,
  },
};
