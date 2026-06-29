import type { TrainedBotWeights } from "@/core/types";

export interface LiveChampionProfile {
  name: string;
  source: "heuristic" | "trained";
  approved: boolean;
  promotedAt: string;
  benchmarkMatchesPerOpponent: number;
  winRateVsHeuristic: number;
  winRateVsChampion: number;
  averageHpEdge: number;
  campaignScoreVsHeuristic: number;
  campaignScoreVsChampion: number;
  campaignBossReachVsHeuristic: number;
  campaignBossReachVsChampion: number;
  searchDepth: number;
  beamWidth: number;
  weights: TrainedBotWeights | null;
}

export const LIVE_CHAMPION_PROFILE: LiveChampionProfile = {
  name: "trained-bot-20260628-201637",
  source: "trained",
  approved: true,
  promotedAt: "2026-06-28T20:16:37.652Z",
  benchmarkMatchesPerOpponent: 28,
  winRateVsHeuristic: 0.607143,
  winRateVsChampion: 0.607143,
  averageHpEdge: 6.47619,
  campaignScoreVsHeuristic: 198,
  campaignScoreVsChampion: 170.25,
  campaignBossReachVsHeuristic: 1,
  campaignBossReachVsChampion: 0.75,
  searchDepth: 3,
  beamWidth: 12,
  weights: {
    hpDiff: 102.2817,
    shieldDiff: 62.2269,
    drawBonusDiff: 6.92,
    manaBonusDiff: 80.9144,
    poisonDiff: 64.1935,
    controlDiff: 12.4528,
    boardStrengthDiff: 21.1092,
    boardManaDiff: 15.2906,
    stackSynergyDiff: 5.8604,
    reserveStrengthDiff: 16.8137,
    handStrengthDiff: 31.2829,
    mobilityDiff: 8.8605,
    cornerControlDiff: 11.1877,
    occupiedBoardDiff: 34.5169,
    imminentRoundDamageDiff: 47.7402,
    activeTurnTempo: 12.7008,
    specialCardValue: 12.1012,
    deckTrimValue: 2.9298,
    eliteRouteBias: -4.4605,
    restRouteBias: 6.3675,
    forgeRouteBias: 1.5259,
    treasureRouteBias: 4.2087,
    branchingRouteBias: 4.8468,
    riskTolerance: 6.3588,
    aggressionPlanBias: 0.8097,
    controlPlanBias: 18,
    tempoPlanBias: -12,
    fusionPlanBias: 6.7282,
    precisionPlanBias: 2.7772,
    uncommonCardBias: 10,
    rareCardBias: 6.9259,
    charmSynergyBias: 4.84,
    duplicateCardPenalty: 0.0889,
    enemyProfileRespect: 4.2177,
  },
};
