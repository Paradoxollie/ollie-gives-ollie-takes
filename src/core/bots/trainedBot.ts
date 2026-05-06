import { buildMovePreviewTable, compareMoveCoordinates, opponentFor } from "@/core/bots/botUtils";
import { evaluateHeuristicState } from "@/core/bots/heuristicBot";
import { BOT_TRAINING_CONFIG } from "@/core/config/gameConfig";
import { TRAINED_BOT_PROFILE } from "@/core/bots/generated/trainedWeights";
import { applyMove, getCardSides, getControlTotals, listLegalMoves, passTurn } from "@/core/engine";
import { countOccupiedCells } from "@/core/utils/board";
import type { Bot } from "@/core/bots/types";
import type { BoardCard, CardInstance, MatchState, PlayerId, TrainedBotWeights } from "@/core/types";

function sumCardListStrength(cards: CardInstance[]): number {
  return cards.reduce(
    (sum, card) => sum + Object.values(getCardSides(card)).reduce((sideTotal, sideValue) => sideTotal + sideValue, 0),
    0,
  );
}

function sumBoardStrength(board: Array<Array<BoardCard | null>>, owner: PlayerId): number {
  return board.reduce(
    (total, row) =>
      total +
      row.reduce((rowTotal, card) => {
        if (!card || card.owner !== owner) {
          return rowTotal;
        }

        return rowTotal + Object.values(getCardSides(card)).reduce((sum, value) => sum + value, 0);
      }, 0),
    0,
  );
}

function getCornerControl(board: Array<Array<BoardCard | null>>, owner: PlayerId): number {
  const maxIndex = board.length - 1;
  const corners = [
    board[0]?.[0],
    board[0]?.[maxIndex],
    board[maxIndex]?.[0],
    board[maxIndex]?.[maxIndex],
  ];

  return corners.filter((card) => card?.owner === owner).length;
}

function getReserveStrength(state: MatchState, owner: PlayerId): number {
  const playerState = state.players[owner];
  const visibleHandStrength =
    state.turn.activePlayer === owner ? sumCardListStrength(state.turn.choices) : 0;

  return sumCardListStrength(playerState.drawPile) + sumCardListStrength(playerState.discardPile) + visibleHandStrength;
}

function getMobilityScore(state: MatchState, owner: PlayerId): number {
  const legalMoves = listLegalMoves(state).length;
  return state.turn.activePlayer === owner ? legalMoves : -legalMoves;
}

function getImminentRoundDamageDiff(state: MatchState, owner: PlayerId): number {
  const opponent = opponentFor(owner);
  const control = getControlTotals(state);
  const occupiedRatio = countOccupiedCells(state.board) / (state.config.boardSize * state.config.boardSize);
  return (control[owner] - control[opponent]) * occupiedRatio;
}

export function evaluateMatchStateForBot(
  state: MatchState,
  perspective: PlayerId,
  weights: TrainedBotWeights,
): number {
  const opponent = opponentFor(perspective);

  if (state.result) {
    if (state.result.winner === perspective) {
      return 100_000 + state.champions[perspective].health * 100;
    }

    if (state.result.winner === "draw") {
      return 0;
    }

    return -100_000 - state.champions[opponent].health * 100;
  }

  const control = getControlTotals(state);
  const hpDiff = state.champions[perspective].health - state.champions[opponent].health;
  const controlDiff = control[perspective] - control[opponent];
  const boardStrengthDiff = sumBoardStrength(state.board, perspective) - sumBoardStrength(state.board, opponent);
  const reserveStrengthDiff = getReserveStrength(state, perspective) - getReserveStrength(state, opponent);
  const handStrengthDiff =
    (state.turn.activePlayer === perspective ? sumCardListStrength(state.turn.choices) : 0) -
    (state.turn.activePlayer === opponent ? sumCardListStrength(state.turn.choices) : 0);
  const mobilityDiff = getMobilityScore(state, perspective);
  const cornerControlDiff = getCornerControl(state.board, perspective) - getCornerControl(state.board, opponent);
  const occupiedBoardDiff = countOccupiedCells(state.board);
  const imminentRoundDamageDiff = getImminentRoundDamageDiff(state, perspective);
  const activeTurnTempo = state.turn.activePlayer === perspective ? 1 : -1;

  return (
    hpDiff * weights.hpDiff +
    controlDiff * weights.controlDiff +
    boardStrengthDiff * weights.boardStrengthDiff +
    reserveStrengthDiff * weights.reserveStrengthDiff +
    handStrengthDiff * weights.handStrengthDiff +
    mobilityDiff * weights.mobilityDiff +
    cornerControlDiff * weights.cornerControlDiff +
    occupiedBoardDiff * weights.occupiedBoardDiff +
    imminentRoundDamageDiff * weights.imminentRoundDamageDiff +
    activeTurnTempo * weights.activeTurnTempo +
    evaluateHeuristicState(state, perspective) * BOT_TRAINING_CONFIG.heuristicBaselineBlend
  );
}

function getOrderedMoves(state: MatchState, beamWidth: number) {
  return buildMovePreviewTable(state)
    .slice(0, Math.max(1, beamWidth))
    .map((preview) => preview.move);
}

function searchScore(
  state: MatchState,
  perspective: PlayerId,
  depth: number,
  beamWidth: number,
  weights: TrainedBotWeights,
  alpha: number,
  beta: number,
): number {
  if (depth <= 0 || state.result) {
    return evaluateMatchStateForBot(state, perspective, weights);
  }

  if (state.turn.choices.length === 0) {
    return searchScore(passTurn(state), perspective, depth - 1, beamWidth, weights, alpha, beta);
  }

  const maximizing = state.turn.activePlayer === perspective;
  const candidateMoves = getOrderedMoves(state, beamWidth);

  if (candidateMoves.length === 0) {
    return evaluateMatchStateForBot(state, perspective, weights);
  }

  if (maximizing) {
    let bestScore = Number.NEGATIVE_INFINITY;

    for (const move of candidateMoves) {
      const score = searchScore(
        applyMove(state, move),
        perspective,
        depth - 1,
        beamWidth,
        weights,
        alpha,
        beta,
      );
      bestScore = Math.max(bestScore, score);
      alpha = Math.max(alpha, score);
      if (beta <= alpha) {
        break;
      }
    }

    return bestScore;
  }

  let bestScore = Number.POSITIVE_INFINITY;

  for (const move of candidateMoves) {
    const score = searchScore(
      applyMove(state, move),
      perspective,
      depth - 1,
      beamWidth,
      weights,
      alpha,
      beta,
    );
    bestScore = Math.min(bestScore, score);
    beta = Math.min(beta, score);
    if (beta <= alpha) {
      break;
    }
  }

  return bestScore;
}

export function chooseTrainedBotMove(
  state: MatchState,
  perspective: PlayerId,
  weights: TrainedBotWeights,
  searchDepth = BOT_TRAINING_CONFIG.defaultSearchDepth,
  beamWidth = BOT_TRAINING_CONFIG.defaultBeamWidth,
) {
  const legalMoves = getOrderedMoves(state, beamWidth);
  if (legalMoves.length === 0) {
    return null;
  }

  const scoredMoves = legalMoves.map((move) => ({
    move,
    score: searchScore(
      applyMove(state, move),
      perspective,
      Math.max(0, searchDepth - 1),
      beamWidth,
      weights,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY,
    ),
  }));

  scoredMoves.sort((left, right) => {
    if (left.score !== right.score) {
      return right.score - left.score;
    }

    return compareMoveCoordinates(left.move, right.move);
  });

  return scoredMoves[0]?.move ?? null;
}

export function createConfiguredTrainedBot(
  weights: TrainedBotWeights,
  searchDepth = TRAINED_BOT_PROFILE.searchDepth,
  beamWidth = TRAINED_BOT_PROFILE.beamWidth,
): Bot {
  return {
    id: "trained",
    label: "Configured Trained Bot",
    description:
      "Instance parametree du bot de recherche pour les scripts de training et d'evaluation.",
    chooseMove(state, context) {
      return {
        move: chooseTrainedBotMove(
          state,
          context.playerId,
          weights,
          context.searchDepth ?? searchDepth,
          context.beamWidth ?? beamWidth,
        ),
        nextSeed: context.seed,
      };
    },
  };
}

/**
 * A deeper deterministic bot that searches ahead with a trainable state evaluation function.
 */
export const trainedBot: Bot = {
  id: "trained",
  label: "Trained Bot",
  description:
    "Recherche quelques coups a l'avance avec une evaluation de plateau entrainable en self-play.",
  chooseMove(state, context) {
    return {
      move: createConfiguredTrainedBot(
        TRAINED_BOT_PROFILE.weights,
        TRAINED_BOT_PROFILE.searchDepth,
        TRAINED_BOT_PROFILE.beamWidth,
      ).chooseMove(state, context).move,
      nextSeed: context.seed,
    };
  },
};
