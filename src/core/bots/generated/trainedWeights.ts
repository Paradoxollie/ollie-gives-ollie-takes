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
  name: "trained-bot-20261102-160018",
  trainedAt: "2026-11-02T16:00:18.954Z",
  iterations: 3,
  matchesPerOpponent: 4,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 87.62725,
    shieldDiff: 71.20939999999999,
    drawBonusDiff: 21.897350000000003,
    manaBonusDiff: 42.60065,
    poisonDiff: 72.46615,
    controlDiff: 93.6482,
    boardStrengthDiff: 19.49675,
    boardManaDiff: 14.3604,
    stackSynergyDiff: 107.57095,
    reserveStrengthDiff: 23.45025,
    handStrengthDiff: -0.06540000000000001,
    mobilityDiff: 20.79215,
    cornerControlDiff: 14.1164,
    occupiedBoardDiff: -35.899100000000004,
    imminentRoundDamageDiff: 97.65445,
    activeTurnTempo: 24.82565,
    specialCardValue: 11.139600000000002,
    deckTrimValue: 0.2612,
    eliteRouteBias: -5.87135,
    restRouteBias: 3.8587499999999997,
    forgeRouteBias: 3.08715,
    treasureRouteBias: 11.3758,
    branchingRouteBias: 7.87655,
    riskTolerance: 6.0859000000000005,
    aggressionPlanBias: -7.262449999999999,
    controlPlanBias: 2.2295999999999996,
    tempoPlanBias: -8.1053,
    fusionPlanBias: 2.2587,
    precisionPlanBias: -6.9997,
    uncommonCardBias: -0.0414000000000001,
    rareCardBias: 4.93685,
    charmSynergyBias: 10.82315,
    duplicateCardPenalty: 3.0296000000000003,
    enemyProfileRespect: 2.5282,
  },
};
