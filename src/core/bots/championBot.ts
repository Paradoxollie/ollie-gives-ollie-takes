import { heuristicBot } from "@/core/bots/heuristicBot";
import { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
import { createConfiguredTrainedBot } from "@/core/bots/trainedBot";
import type { Bot } from "@/core/bots/types";

function resolveChampionDelegate(searchDepth?: number, beamWidth?: number): Bot {
  const resolvedSearchDepth = searchDepth ?? LIVE_CHAMPION_PROFILE.searchDepth;
  const resolvedBeamWidth = beamWidth ?? LIVE_CHAMPION_PROFILE.beamWidth;

  if (LIVE_CHAMPION_PROFILE.source !== "trained" || !LIVE_CHAMPION_PROFILE.weights) {
    return {
      ...heuristicBot,
      chooseMove(state, context) {
        return heuristicBot.chooseMove(state, {
          ...context,
          searchDepth: resolvedSearchDepth,
          beamWidth: resolvedBeamWidth,
        });
      },
    };
  }

  return createConfiguredTrainedBot(
    LIVE_CHAMPION_PROFILE.weights,
    resolvedSearchDepth,
    resolvedBeamWidth,
  );
}

/**
 * Live production bot. Falls back to the tuned heuristic until a trained profile
 * has actually passed promotion benchmarks and been approved.
 */
export const championBot: Bot = {
  id: "champion",
  label: "Champion Bot",
  description:
    "Bot live du jeu: utilise le meilleur profil promu automatiquement, sinon retombe sur l'heuristique approfondie.",
  chooseMove(state, context) {
    return resolveChampionDelegate(context.searchDepth, context.beamWidth).chooseMove(state, context);
  },
};
