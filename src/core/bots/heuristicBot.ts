import { applyMove, getCardSides, getControlTotals, listLegalMoves, previewMove } from "@/core/engine";
import { countOccupiedCells } from "@/core/utils/board";
import {
  buildMovePreviewTable,
  compareMoveCoordinates,
  countEnemyAdjacency,
  countFriendlyAdjacency,
  getBoardCard,
  getControlDelta,
  getEmptyAdjacentDirections,
  getOutcomePriority,
  getRoundEndControlAdvantage,
  getRoundEndDamageAdvantage,
  opponentFor,
} from "@/core/bots/botUtils";
import type { Bot, BotContext } from "@/core/bots/types";
import type { BoardCard, CardInstance, MatchState, MoveInput, PlayerId, Position, PreviewMove } from "@/core/types";

function getPositionSafetyBonus(position: Position, boardSize: number): number {
  const isTopOrBottom = position.row === 0 || position.row === boardSize - 1;
  const isLeftOrRight = position.col === 0 || position.col === boardSize - 1;

  if (isTopOrBottom && isLeftOrRight) {
    return 12;
  }

  if (isTopOrBottom || isLeftOrRight) {
    return 7;
  }

  return 3;
}

function getPlacedCardStabilityScore(currentState: MatchState, nextState: MatchState, move: MoveInput): number {
  if (nextState.result) {
    return 0;
  }

  const card = currentState.turn.choices.find((choice) => choice.instanceId === move.cardInstanceId);
  if (!card) {
    throw new Error(`Cannot score unknown move card ${move.cardInstanceId}.`);
  }

  const placedCard = getBoardCard(nextState.board, move.position);
  if (!placedCard) {
    return 0;
  }

  const sides = getCardSides(card);
  const emptyDirections = getEmptyAdjacentDirections(nextState.board, move.position);
  const exposurePenalty = emptyDirections.reduce((sum, direction) => sum + Math.max(0, 6 - sides[direction]), 0);
  const friendlySupportBonus = countFriendlyAdjacency(nextState.board, move.position, card.owner) * 6;
  const enemyPressurePenalty = countEnemyAdjacency(nextState.board, move.position, card.owner) * 5;
  const safetyBonus = getPositionSafetyBonus(move.position, nextState.board.length);

  return safetyBonus * 4 + friendlySupportBonus - exposurePenalty - enemyPressurePenalty;
}

function estimateOpponentThreat(nextState: MatchState, activePlayer: PlayerId): number {
  if (nextState.result || nextState.turn.activePlayer !== opponentFor(activePlayer)) {
    return 0;
  }

  const previews = listLegalMoves(nextState).map((move) => previewMove(nextState, move));
  if (previews.length === 0) {
    return 0;
  }

  const opponent = nextState.turn.activePlayer;

  return previews.reduce((best, candidate) => {
    const threatScore =
      getOutcomePriority(candidate.resultingWinner, opponent) * 1200 +
      getRoundEndDamageAdvantage(candidate, opponent) * 180 +
      getRoundEndControlAdvantage(candidate, opponent) * 55 +
      candidate.flippedCount * 90 +
      getControlDelta(candidate, opponent) * 30 +
      candidate.positionWeight * 5;

    return Math.max(best, threatScore);
  }, 0);
}

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
  const visibleHandStrength = state.turn.activePlayer === owner ? sumCardListStrength(state.turn.choices) : 0;

  return sumCardListStrength(playerState.drawPile) + sumCardListStrength(playerState.discardPile) + visibleHandStrength;
}

function scoreMove(state: MatchState, preview: PreviewMove): number {
  const activePlayer = state.turn.activePlayer;
  const opponent = opponentFor(activePlayer);
  const nextState = applyMove(state, preview.move);
  const controlDelta = getControlDelta(preview, activePlayer);
  const roundDamageAdvantage = getRoundEndDamageAdvantage(preview, activePlayer);
  const roundControlAdvantage = getRoundEndControlAdvantage(preview, activePlayer);
  const stabilityScore = getPlacedCardStabilityScore(state, nextState, preview.move);
  const opponentThreatPenalty = estimateOpponentThreat(nextState, activePlayer);
  const outcomeBonus = getOutcomePriority(preview.resultingWinner, activePlayer) * 4000;
  const roundClosingBonus = preview.roundEnds ? roundDamageAdvantage * 120 + roundControlAdvantage * 50 : 0;
  const boardProgressBonus = (preview.boardOccupancyAfterCombat / (state.config.boardSize * state.config.boardSize)) * 22;
  const directFlipValue = preview.flippedCount * 125;
  const controlValue = controlDelta * 42;
  const drawPenalty = preview.resultingWinner === "draw" ? 160 : 0;
  const exposedEnemyBonus = preview.impacts.filter((impact) => impact.result === "no-flip" && impact.targetOwnerBeforeImpact === opponent).length * 4;

  return (
    outcomeBonus +
    directFlipValue +
    controlValue +
    roundClosingBonus +
    stabilityScore * 5 +
    boardProgressBonus +
    preview.positionWeight * 9 +
    exposedEnemyBonus -
    opponentThreatPenalty * 4 -
    drawPenalty
  );
}

export function evaluateHeuristicState(state: MatchState, perspective: PlayerId): number {
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
  const cornerControlDiff = getCornerControl(state.board, perspective) - getCornerControl(state.board, opponent);
  const occupancy = countOccupiedCells(state.board);

  return (
    hpDiff * 520 +
    controlDiff * 210 +
    boardStrengthDiff * 18 +
    reserveStrengthDiff * 7 +
    cornerControlDiff * 85 +
    occupancy * (state.turn.activePlayer === perspective ? 6 : -6)
  );
}

function orderCandidatePreviews(state: MatchState, beamWidth: number): Array<{ preview: PreviewMove; score: number }> {
  return buildMovePreviewTable(state)
    .map((preview) => ({
      preview,
      score: scoreMove(state, preview),
    }))
    .sort((left, right) => {
      if (left.score !== right.score) {
        return right.score - left.score;
      }

      const leftPriority = getOutcomePriority(left.preview.resultingWinner, state.turn.activePlayer);
      const rightPriority = getOutcomePriority(right.preview.resultingWinner, state.turn.activePlayer);
      if (leftPriority !== rightPriority) {
        return rightPriority - leftPriority;
      }

      const leftRoundDamageAdvantage = getRoundEndDamageAdvantage(left.preview, state.turn.activePlayer);
      const rightRoundDamageAdvantage = getRoundEndDamageAdvantage(right.preview, state.turn.activePlayer);
      if (leftRoundDamageAdvantage !== rightRoundDamageAdvantage) {
        return rightRoundDamageAdvantage - leftRoundDamageAdvantage;
      }

      if (left.preview.flippedCount !== right.preview.flippedCount) {
        return right.preview.flippedCount - left.preview.flippedCount;
      }

      return compareMoveCoordinates(left.preview.move, right.preview.move);
    })
    .slice(0, Math.max(1, beamWidth));
}

function getSignedImmediateScore(
  state: MatchState,
  scoredPreview: { preview: PreviewMove; score: number },
  perspective: PlayerId,
): number {
  return state.turn.activePlayer === perspective ? scoredPreview.score : -scoredPreview.score;
}

function searchScore(
  state: MatchState,
  perspective: PlayerId,
  depth: number,
  beamWidth: number,
  alpha: number,
  beta: number,
): number {
  if (depth <= 0 || state.result) {
    return evaluateHeuristicState(state, perspective);
  }

  const candidatePreviews = orderCandidatePreviews(state, beamWidth);
  if (candidatePreviews.length === 0) {
    return evaluateHeuristicState(state, perspective);
  }

  const maximizing = state.turn.activePlayer === perspective;

  if (maximizing) {
    let bestScore = Number.NEGATIVE_INFINITY;

    for (const scoredPreview of candidatePreviews) {
      const nextState = applyMove(state, scoredPreview.preview.move);
      const score =
        getSignedImmediateScore(state, scoredPreview, perspective) * 0.18 +
        searchScore(nextState, perspective, depth - 1, beamWidth, alpha, beta);
      bestScore = Math.max(bestScore, score);
      alpha = Math.max(alpha, bestScore);
      if (beta <= alpha) {
        break;
      }
    }

    return bestScore;
  }

  let bestScore = Number.POSITIVE_INFINITY;

  for (const scoredPreview of candidatePreviews) {
    const nextState = applyMove(state, scoredPreview.preview.move);
    const score =
      getSignedImmediateScore(state, scoredPreview, perspective) * 0.18 +
      searchScore(nextState, perspective, depth - 1, beamWidth, alpha, beta);
    bestScore = Math.min(bestScore, score);
    beta = Math.min(beta, bestScore);
    if (beta <= alpha) {
      break;
    }
  }

  return bestScore;
}

function pickBestMove(state: MatchState, context: BotContext): MoveInput | null {
  const searchDepth = Math.max(1, context.searchDepth ?? 1);
  const beamWidth = Math.max(1, context.beamWidth ?? 12);
  const scoredMoves = orderCandidatePreviews(state, beamWidth);

  if (scoredMoves.length === 0) {
    return null;
  }

  if (searchDepth <= 1) {
    return scoredMoves[0].preview.move;
  }

  const resolvedMoves = scoredMoves
    .map((scoredPreview) => ({
      move: scoredPreview.preview.move,
      score:
        scoredPreview.score * 0.22 +
        searchScore(
          applyMove(state, scoredPreview.preview.move),
          context.playerId,
          searchDepth - 1,
          beamWidth,
          Number.NEGATIVE_INFINITY,
          Number.POSITIVE_INFINITY,
        ),
    }))
    .sort((left, right) => {
      if (left.score !== right.score) {
        return right.score - left.score;
      }

      return compareMoveCoordinates(left.move, right.move);
    });

  return resolvedMoves[0]?.move ?? null;
}

/**
 * Scores moves around control swings, safe structures, corner value, and denial of the best enemy counter-flip.
 */
export const heuristicBot: Bot = {
  id: "heuristic",
  label: "Heuristic Bot",
  description:
    "Equilibre flips immediats, controle futur, valeur des coins et peut chercher plusieurs coups a l'avance.",
  chooseMove(state, context) {
    return {
      move: pickBestMove(state, context),
      nextSeed: context.seed,
    };
  },
};
