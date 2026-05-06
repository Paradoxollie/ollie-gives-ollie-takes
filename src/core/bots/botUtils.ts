import { getCardSides, listLegalMoves, previewMove } from "@/core/engine";
import { getAdjacentPositions } from "@/core/utils/board";
import type { BoardCard, Direction, MatchOutcome, MatchState, MoveInput, PlayerId, Position, PreviewMove } from "@/core/types";

export function opponentFor(playerId: PlayerId): PlayerId {
  return playerId === "player" ? "enemy" : "player";
}

export function compareMoveCoordinates(left: MoveInput, right: MoveInput): number {
  if (left.position.row !== right.position.row) {
    return left.position.row - right.position.row;
  }

  if (left.position.col !== right.position.col) {
    return left.position.col - right.position.col;
  }

  return left.cardInstanceId.localeCompare(right.cardInstanceId);
}

export function sumCardStrengthByInstanceId(state: MatchState, instanceId: string): number {
  const card = state.turn.choices.find((choice) => choice.instanceId === instanceId);
  return card ? Object.values(getCardSides(card)).reduce((sum, value) => sum + value, 0) : 0;
}

export function getOutcomePriority(outcome: MatchOutcome | null, activePlayer: PlayerId): number {
  if (outcome === activePlayer) {
    return 2;
  }

  if (outcome === "draw") {
    return 1;
  }

  return 0;
}

export function getRoundEndDamageAdvantage(preview: PreviewMove, activePlayer: PlayerId): number {
  if (!preview.roundEndSummary) {
    return 0;
  }

  const opponent = opponentFor(activePlayer);
  return preview.roundEndSummary.damageApplied[opponent] - preview.roundEndSummary.damageApplied[activePlayer];
}

export function getRoundEndControlAdvantage(preview: PreviewMove, activePlayer: PlayerId): number {
  if (!preview.roundEndSummary) {
    return 0;
  }

  const opponent = opponentFor(activePlayer);
  return preview.roundEndSummary.control[activePlayer] - preview.roundEndSummary.control[opponent];
}

export function getControlDelta(preview: PreviewMove, activePlayer: PlayerId): number {
  const opponent = opponentFor(activePlayer);
  return preview.control[activePlayer] - preview.control[opponent];
}

export function comparePreviewMoves(left: PreviewMove, right: PreviewMove, state: MatchState): number {
  const activePlayer = state.turn.activePlayer;
  const leftOutcomePriority = getOutcomePriority(left.resultingWinner, activePlayer);
  const rightOutcomePriority = getOutcomePriority(right.resultingWinner, activePlayer);
  if (leftOutcomePriority !== rightOutcomePriority) {
    return rightOutcomePriority - leftOutcomePriority;
  }

  const leftRoundDamageAdvantage = getRoundEndDamageAdvantage(left, activePlayer);
  const rightRoundDamageAdvantage = getRoundEndDamageAdvantage(right, activePlayer);
  if (leftRoundDamageAdvantage !== rightRoundDamageAdvantage) {
    return rightRoundDamageAdvantage - leftRoundDamageAdvantage;
  }

  if (left.flippedCount !== right.flippedCount) {
    return right.flippedCount - left.flippedCount;
  }

  const leftControlDelta = getControlDelta(left, activePlayer);
  const rightControlDelta = getControlDelta(right, activePlayer);
  if (leftControlDelta !== rightControlDelta) {
    return rightControlDelta - leftControlDelta;
  }

  const leftRoundControlAdvantage = getRoundEndControlAdvantage(left, activePlayer);
  const rightRoundControlAdvantage = getRoundEndControlAdvantage(right, activePlayer);
  if (leftRoundControlAdvantage !== rightRoundControlAdvantage) {
    return rightRoundControlAdvantage - leftRoundControlAdvantage;
  }

  if (left.positionWeight !== right.positionWeight) {
    return right.positionWeight - left.positionWeight;
  }

  const leftStrength = sumCardStrengthByInstanceId(state, left.move.cardInstanceId);
  const rightStrength = sumCardStrengthByInstanceId(state, right.move.cardInstanceId);
  if (leftStrength !== rightStrength) {
    return rightStrength - leftStrength;
  }

  return compareMoveCoordinates(left.move, right.move);
}

export function buildMovePreviewTable(state: MatchState): PreviewMove[] {
  return listLegalMoves(state)
    .map((move) => previewMove(state, move))
    .sort((left, right) => comparePreviewMoves(left, right, state));
}

export function getBoardCard(board: Array<Array<BoardCard | null>>, position: Position): BoardCard | null {
  return board[position.row]?.[position.col] ?? null;
}

export function getAdjacentCards(board: Array<Array<BoardCard | null>>, position: Position) {
  return getAdjacentPositions(position, board.length).map((adjacent) => ({
    ...adjacent,
    card: getBoardCard(board, adjacent.position),
  }));
}

export function getEmptyAdjacentDirections(board: Array<Array<BoardCard | null>>, position: Position): Direction[] {
  return getAdjacentCards(board, position)
    .filter((adjacent) => !adjacent.card)
    .map((adjacent) => adjacent.direction);
}

export function countFriendlyAdjacency(board: Array<Array<BoardCard | null>>, position: Position, owner: PlayerId): number {
  return getAdjacentCards(board, position).filter((adjacent) => adjacent.card?.owner === owner).length;
}

export function countEnemyAdjacency(board: Array<Array<BoardCard | null>>, position: Position, owner: PlayerId): number {
  return getAdjacentCards(board, position).filter((adjacent) => adjacent.card && adjacent.card.owner !== owner).length;
}
