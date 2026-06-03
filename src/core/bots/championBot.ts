import { rankHeuristicMoves, heuristicBot } from "@/core/bots/heuristicBot";
import { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
import { evaluateMatchStateForBot } from "@/core/bots/trainedBot";
import { BOT_TRAINING_CONFIG, normalizeTrainedBotWeights } from "@/core/config/gameConfig";
import { applyMove } from "@/core/engine";
import type { Bot } from "@/core/bots/types";
import type { TrainedBotWeights } from "@/core/types";

function createHeuristicDelegate(searchDepth: number, beamWidth: number): Bot {
  return {
    ...heuristicBot,
    chooseMove(state, context) {
      return heuristicBot.chooseMove(state, {
        ...context,
        searchDepth,
        beamWidth,
      });
    },
  };
}

/**
 * Creates the exact guarded behavior used by training, promotion, and the live Champion.
 * Learned weights only break ties between moves the deep heuristic considers equivalent.
 */
export function createConfiguredChampionBot(
  weights: TrainedBotWeights,
  searchDepth = LIVE_CHAMPION_PROFILE.searchDepth,
  beamWidth = LIVE_CHAMPION_PROFILE.beamWidth,
): Bot {
  const normalizedWeights = normalizeTrainedBotWeights(weights);

  return {
    id: "champion",
    label: "Configured Champion Bot",
    description: "Heuristique profonde avec departage appris sur les coups tactiquement equivalents.",
    chooseMove(state, context) {
      const resolvedSearchDepth = context.searchDepth ?? searchDepth;
      const resolvedBeamWidth = context.beamWidth ?? beamWidth;
      const rankedMoves = rankHeuristicMoves(state, {
        ...context,
        searchDepth: resolvedSearchDepth,
        beamWidth: resolvedBeamWidth,
      });
      const bestHeuristicScore = rankedMoves[0]?.score;
      if (bestHeuristicScore === undefined) {
        return {
          move: null,
          nextSeed: context.seed,
        };
      }

      const candidates = rankedMoves
        .filter(
          (entry) =>
            entry.score >= bestHeuristicScore - BOT_TRAINING_CONFIG.championHeuristicScoreTolerance,
        )
        .slice(0, BOT_TRAINING_CONFIG.championCandidateLimit)
        .map((entry) => ({
          ...entry,
          trainedScore: evaluateMatchStateForBot(applyMove(state, entry.move), context.playerId, normalizedWeights),
        }))
        .sort((left, right) => {
          if (left.trainedScore !== right.trainedScore) {
            return right.trainedScore - left.trainedScore;
          }

          return right.score - left.score;
        });

      return {
        move: candidates[0]?.move ?? rankedMoves[0].move,
        nextSeed: context.seed,
      };
    },
  };
}

/**
 * Live production bot. Uses the exact guarded profile that passed promotion,
 * or falls back to the tuned heuristic when no profile is approved.
 */
export const championBot: Bot = {
  id: "champion",
  label: "Champion Bot",
  description:
    "Bot live du jeu: recherche profonde stable, puis departage appris entre les meilleurs coups.",
  chooseMove(state, context) {
    const resolvedSearchDepth = context.searchDepth ?? LIVE_CHAMPION_PROFILE.searchDepth;
    const resolvedBeamWidth = context.beamWidth ?? LIVE_CHAMPION_PROFILE.beamWidth;
    const delegate =
      LIVE_CHAMPION_PROFILE.source === "trained" &&
      LIVE_CHAMPION_PROFILE.approved &&
      LIVE_CHAMPION_PROFILE.weights
        ? createConfiguredChampionBot(
            LIVE_CHAMPION_PROFILE.weights,
            resolvedSearchDepth,
            resolvedBeamWidth,
          )
        : createHeuristicDelegate(resolvedSearchDepth, resolvedBeamWidth);

    return delegate.chooseMove(state, context);
  },
};
