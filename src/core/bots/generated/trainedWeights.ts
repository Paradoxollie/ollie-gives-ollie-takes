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
  name: "trained-bot-20260724-185950",
  trainedAt: "2026-07-24T18:59:50.396Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 120.5725,
    shieldDiff: 76.1581,
    drawBonusDiff: 41.5009,
    manaBonusDiff: 56.8938,
    poisonDiff: 68.7787,
    controlDiff: 66.9367,
    boardStrengthDiff: 34.8709,
    boardManaDiff: 8.8535,
    stackSynergyDiff: 6.0124,
    reserveStrengthDiff: 17.5977,
    handStrengthDiff: 12.0091,
    mobilityDiff: 27.4703,
    cornerControlDiff: 5.0512,
    occupiedBoardDiff: -4.5024,
    imminentRoundDamageDiff: 42.6352,
    activeTurnTempo: 29.774,
    specialCardValue: 18,
    deckTrimValue: 8.2776,
    eliteRouteBias: -6.8023,
    restRouteBias: 6.4258,
    forgeRouteBias: 0.6838,
    treasureRouteBias: 0,
    branchingRouteBias: 10,
    riskTolerance: 3.2632,
    aggressionPlanBias: -0.2208,
    controlPlanBias: 18,
    tempoPlanBias: -3.3753,
    fusionPlanBias: 18,
    precisionPlanBias: 11.4235,
    uncommonCardBias: -3.9972,
    rareCardBias: 4.631,
    charmSynergyBias: 0.7396,
    duplicateCardPenalty: 8.4408,
    enemyProfileRespect: 6.2486,
  },
};
