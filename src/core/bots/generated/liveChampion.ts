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
  name: "trained-bot-20260521-233902",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-21T23:39:02.008Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.625,
  winRateVsChampion: 0.5625,
  averageHpEdge: 8.625,
  campaignScoreVsHeuristic: 91,
  campaignScoreVsChampion: 67.333333,
  campaignBossReachVsHeuristic: 0.166667,
  campaignBossReachVsChampion: 0.166667,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 33.6538,
    controlDiff: 14.9952,
    boardStrengthDiff: 22.5221,
    reserveStrengthDiff: 43.7255,
    handStrengthDiff: -3.1361,
    mobilityDiff: 12.9295,
    cornerControlDiff: 32.6949,
    occupiedBoardDiff: 4.5609,
    imminentRoundDamageDiff: -8.6968,
    activeTurnTempo: -22.6773,
    specialCardValue: -22.5114,
    deckTrimValue: -18.4499,
    eliteRouteBias: -40.2523,
    restRouteBias: 3.8126,
    forgeRouteBias: -11.9826,
    treasureRouteBias: 12.4019,
    branchingRouteBias: 24.4015,
    riskTolerance: 16.2117,
    aggressionPlanBias: 32.8786,
    controlPlanBias: 13.1976,
    tempoPlanBias: 1.9737,
    fusionPlanBias: 22.2502,
    precisionPlanBias: 5.5337,
    uncommonCardBias: 1.0877,
    rareCardBias: 10.9366,
    charmSynergyBias: 39.548,
    duplicateCardPenalty: -9.7303,
    enemyProfileRespect: 31.2669,
  },
};
