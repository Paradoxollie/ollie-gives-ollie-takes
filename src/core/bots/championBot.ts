import { evaluateHeuristicState, heuristicBot } from "@/core/bots/heuristicBot";
import { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
import { createConfiguredTrainedBot } from "@/core/bots/trainedBot";
import { applyMove } from "@/core/engine";
import type { Bot } from "@/core/bots/types";
import type { MatchState, MoveInput, PlayerId } from "@/core/types";

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

function resolveChampionDelegate(searchDepth?: number, beamWidth?: number): {
  trained: Bot | null;
  heuristic: Bot;
} {
  const resolvedSearchDepth = searchDepth ?? LIVE_CHAMPION_PROFILE.searchDepth;
  const resolvedBeamWidth = beamWidth ?? LIVE_CHAMPION_PROFILE.beamWidth;
  const heuristic = createHeuristicDelegate(resolvedSearchDepth, resolvedBeamWidth);

  if (LIVE_CHAMPION_PROFILE.source !== "trained" || !LIVE_CHAMPION_PROFILE.weights) {
    return { trained: null, heuristic };
  }

  return {
    trained: createConfiguredTrainedBot(
      LIVE_CHAMPION_PROFILE.weights,
      resolvedSearchDepth,
      resolvedBeamWidth,
    ),
    heuristic,
  };
}

function scoreMoveByHeuristicState(state: MatchState, move: MoveInput, playerId: PlayerId): number {
  return evaluateHeuristicState(applyMove(state, move), playerId);
}

function chooseStrongerMove(options: {
  state: MatchState;
  playerId: PlayerId;
  heuristicMove: MoveInput | null;
  trainedMove: MoveInput | null;
}): MoveInput | null {
  const { state, playerId, heuristicMove, trainedMove } = options;
  if (!heuristicMove) {
    return trainedMove;
  }

  if (!trainedMove) {
    return heuristicMove;
  }

  const heuristicScore = scoreMoveByHeuristicState(state, heuristicMove, playerId);
  const trainedScore = scoreMoveByHeuristicState(state, trainedMove, playerId);

  if (trainedScore > heuristicScore + 5000) {
    return trainedMove;
  }

  return heuristicMove;
}

/**
 * Live production bot. Falls back to the tuned heuristic until a trained profile
 * has actually passed promotion benchmarks and been approved.
 */
export const championBot: Bot = {
  id: "champion",
  label: "Champion Bot",
  description:
    "Bot live du jeu: garde l'heuristique profonde comme garde-fou et n'utilise le profil entraine que lorsqu'il ameliore le coup.",
  chooseMove(state, context) {
    const delegates = resolveChampionDelegate(context.searchDepth, context.beamWidth);
    const heuristicDecision = delegates.heuristic.chooseMove(state, context);
    const trainedDecision = delegates.trained?.chooseMove(state, context) ?? {
      move: null,
      nextSeed: context.seed,
    };

    return {
      move: chooseStrongerMove({
        state,
        playerId: context.playerId,
        heuristicMove: heuristicDecision.move,
        trainedMove: trainedDecision.move,
      }),
      nextSeed: trainedDecision.nextSeed,
    };
  },
};
