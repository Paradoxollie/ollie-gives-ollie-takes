import { heuristicBot } from "@/core/bots";
import { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
import { createConfiguredTrainedBot } from "@/core/bots/trainedBot";
import type { Bot } from "@/core/bots";
import type { RuntimeLiveChampionProfile } from "@/lib/live-champion-types";

export function getStaticLiveChampionProfile(): RuntimeLiveChampionProfile {
  return {
    name: LIVE_CHAMPION_PROFILE.name,
    source: LIVE_CHAMPION_PROFILE.source,
    approved: LIVE_CHAMPION_PROFILE.approved,
    promotedAt: LIVE_CHAMPION_PROFILE.promotedAt,
    benchmarkMatchesPerOpponent: LIVE_CHAMPION_PROFILE.benchmarkMatchesPerOpponent,
    winRateVsHeuristic: LIVE_CHAMPION_PROFILE.winRateVsHeuristic,
    winRateVsChampion: LIVE_CHAMPION_PROFILE.winRateVsChampion,
    averageHpEdge: LIVE_CHAMPION_PROFILE.averageHpEdge,
    campaignScoreVsHeuristic: LIVE_CHAMPION_PROFILE.campaignScoreVsHeuristic,
    campaignScoreVsChampion: LIVE_CHAMPION_PROFILE.campaignScoreVsChampion,
    campaignBossReachVsHeuristic: LIVE_CHAMPION_PROFILE.campaignBossReachVsHeuristic,
    campaignBossReachVsChampion: LIVE_CHAMPION_PROFILE.campaignBossReachVsChampion,
    searchDepth: LIVE_CHAMPION_PROFILE.searchDepth,
    beamWidth: LIVE_CHAMPION_PROFILE.beamWidth,
    weights: LIVE_CHAMPION_PROFILE.weights,
    selectionReason:
      LIVE_CHAMPION_PROFILE.source === "trained" && LIVE_CHAMPION_PROFILE.approved
        ? "Profil promu integre au build courant."
        : "Fallback heuristique local.",
  };
}

export function createChampionBotFromProfile(profile: RuntimeLiveChampionProfile): Bot {
  if (profile.source === "trained" && profile.weights) {
    const trainedDelegate = createConfiguredTrainedBot(profile.weights, profile.searchDepth, profile.beamWidth);

    return {
      id: "champion",
      label: `Champion ${profile.name}`,
      description: `Profil live ${profile.source} (${profile.name})`,
      chooseMove: trainedDelegate.chooseMove,
    };
  }

  return {
    id: "champion",
    label: `Champion ${profile.name}`,
    description: `Fallback live ${profile.source} (${profile.name})`,
    chooseMove(state, context) {
      return heuristicBot.chooseMove(state, {
        ...context,
        searchDepth: context.searchDepth ?? profile.searchDepth,
        beamWidth: context.beamWidth ?? profile.beamWidth,
      });
    },
  };
}
