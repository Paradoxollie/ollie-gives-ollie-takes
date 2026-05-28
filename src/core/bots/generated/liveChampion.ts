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
  name: "trained-bot-20260528-121047",
  source: "trained",
  approved: true,
  promotedAt: "2026-05-28T12:10:47.253Z",
  benchmarkMatchesPerOpponent: 16,
  winRateVsHeuristic: 0.5625,
  winRateVsChampion: 0.625,
  averageHpEdge: 5.229167,
  campaignScoreVsHeuristic: 64.666667,
  campaignScoreVsChampion: 79.666667,
  campaignBossReachVsHeuristic: 0.166667,
  campaignBossReachVsChampion: 0.333333,
  searchDepth: 3,
  beamWidth: 8,
  weights: {
    hpDiff: 58.7717,
    controlDiff: 20.9943,
    boardStrengthDiff: 35.193,
    reserveStrengthDiff: 44.5304,
    handStrengthDiff: 5.4743,
    mobilityDiff: -5.5146,
    cornerControlDiff: 36.8659,
    occupiedBoardDiff: 25.0857,
    imminentRoundDamageDiff: -19.4942,
    activeTurnTempo: -31.8567,
    specialCardValue: 11.3696,
    deckTrimValue: -25.8912,
    eliteRouteBias: -63.1891,
    restRouteBias: -11.1125,
    forgeRouteBias: 17.0516,
    treasureRouteBias: 19.0612,
    branchingRouteBias: 26.3647,
    riskTolerance: 39.8776,
    aggressionPlanBias: 6.9056,
    controlPlanBias: 35.9944,
    tempoPlanBias: -0.5745,
    fusionPlanBias: 17.5144,
    precisionPlanBias: 0.1313,
    uncommonCardBias: 10.6461,
    rareCardBias: 37.0453,
    charmSynergyBias: 39.0916,
    duplicateCardPenalty: -18.3988,
    enemyProfileRespect: 13.1601,
  },
};
