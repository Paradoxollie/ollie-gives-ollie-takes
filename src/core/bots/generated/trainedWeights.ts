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
  name: "trained-bot-20260528-203928",
  trainedAt: "2026-05-28T20:39:28.838Z",
  iterations: 4,
  matchesPerOpponent: 6,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 54.6424,
    controlDiff: 25.8615,
    boardStrengthDiff: 40.1885,
    reserveStrengthDiff: 51.2005,
    handStrengthDiff: -8.3419,
    mobilityDiff: -9.3222,
    cornerControlDiff: 41.1341,
    occupiedBoardDiff: 24.8979,
    imminentRoundDamageDiff: -20.4251,
    activeTurnTempo: -23.0923,
    specialCardValue: 10.1303,
    deckTrimValue: -26.7795,
    eliteRouteBias: -57.3221,
    restRouteBias: -13.3513,
    forgeRouteBias: 27.9537,
    treasureRouteBias: 21.5942,
    branchingRouteBias: 20.4706,
    riskTolerance: 37.8145,
    aggressionPlanBias: 4.0034,
    controlPlanBias: 33.2767,
    tempoPlanBias: -4.754,
    fusionPlanBias: 3.6049,
    precisionPlanBias: -5.982,
    uncommonCardBias: 13.2912,
    rareCardBias: 31.572,
    charmSynergyBias: 33.5077,
    duplicateCardPenalty: -8.8462,
    enemyProfileRespect: 18.5575,
  },
};
