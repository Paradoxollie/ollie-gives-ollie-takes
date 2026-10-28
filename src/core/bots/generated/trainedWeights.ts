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
  name: "trained-bot-20261027-233019",
  trainedAt: "2026-10-27T23:30:19.022Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 101.58705,
    shieldDiff: 70.74485,
    drawBonusDiff: 20.9525,
    manaBonusDiff: 53.917550000000006,
    poisonDiff: 89.21615,
    controlDiff: 84.11609999999999,
    boardStrengthDiff: 10.6833,
    boardManaDiff: 22.5253,
    stackSynergyDiff: 115.22745,
    reserveStrengthDiff: 19.57045,
    handStrengthDiff: 5.6156500000000005,
    mobilityDiff: 17.369500000000002,
    cornerControlDiff: 11.3335,
    occupiedBoardDiff: -12.2079,
    imminentRoundDamageDiff: 93.8017,
    activeTurnTempo: 23.9155,
    specialCardValue: 2.4573,
    deckTrimValue: 7.1099,
    eliteRouteBias: -3.31135,
    restRouteBias: 3.12305,
    forgeRouteBias: 3.944,
    treasureRouteBias: 4.38685,
    branchingRouteBias: 0.49745,
    riskTolerance: 0.42785,
    aggressionPlanBias: -10.522400000000001,
    controlPlanBias: -5.954,
    tempoPlanBias: -8.9729,
    fusionPlanBias: 13.334299999999999,
    precisionPlanBias: -1.6762000000000001,
    uncommonCardBias: 2.29555,
    rareCardBias: 1.3656,
    charmSynergyBias: 4.01755,
    duplicateCardPenalty: 10,
    enemyProfileRespect: 4.47605,
  },
};
