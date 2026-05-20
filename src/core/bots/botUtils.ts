import { getCardSides, getMoveCardInstanceIds, listLegalMoves, previewMove } from "@/core/engine";
import { POSITION_WEIGHTS } from "@/core/config/gameConfig";
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

  return getMoveCardInstanceIds(left).join("|").localeCompare(getMoveCardInstanceIds(right).join("|"));
}

export function sumCardStrengthByInstanceId(state: MatchState, instanceId: string): number {
  const card = state.turn.choices.find((choice) => choice.instanceId === instanceId);
  return card ? Object.values(getCardSides(card)).reduce((sum, value) => sum + value, 0) : 0;
}

export function sumMoveCardStrength(state: MatchState, move: MoveInput): number {
  return getMoveCardInstanceIds(move).reduce((sum, instanceId) => sum + sumCardStrengthByInstanceId(state, instanceId), 0);
}

function getMoveCards(state: MatchState, move: MoveInput) {
  const ids = getMoveCardInstanceIds(move);
  return ids
    .map((instanceId) => state.turn.choices.find((choice) => choice.instanceId === instanceId) ?? null)
    .filter((card): card is MatchState["turn"]["choices"][number] => card !== null);
}

function getMovePrePreviewScore(state: MatchState, move: MoveInput): number {
  const cards = getMoveCards(state, move);
  const familyCounts = new Map<string, number>();
  for (const card of cards) {
    familyCounts.set(card.family, (familyCounts.get(card.family) ?? 0) + 1);
  }
  const localFamilySynergy = [...familyCounts.values()].reduce((best, count) => Math.max(best, count), 0);
  const manaCost = cards.reduce((sum, card) => sum + card.manaCost, 0);
  const positionWeight = POSITION_WEIGHTS[move.position.row]?.[move.position.col] ?? 0;
  const effectCount = cards.reduce((sum, card) => sum + (card.effects?.length ?? 0), 0);

  return (
    positionWeight * 14 +
    sumMoveCardStrength(state, move) * 2 +
    localFamilySynergy * 22 +
    cards.length * 8 +
    effectCount * 5 -
    manaCost * 3
  );
}

export function listBotCandidateMoves(state: MatchState, cap = 36): MoveInput[] {
  return listLegalMoves(state)
    .sort((left, right) => {
      const leftScore = getMovePrePreviewScore(state, left);
      const rightScore = getMovePrePreviewScore(state, right);
      if (leftScore !== rightScore) {
        return rightScore - leftScore;
      }

      return compareMoveCoordinates(left, right);
    })
    .slice(0, Math.max(1, cap));
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

export function getEffectTempoValue(preview: PreviewMove, activePlayer: PlayerId): number {
  return preview.effectEvents.reduce((sum, event) => {
    const sign = event.playerId === activePlayer ? 1 : -1;
    if (event.kind === "deal-damage") {
      return sum + sign * event.amount * 85;
    }

    if (event.kind === "draw-next-turn") {
      return sum + sign * event.amount * 62;
    }

    if (event.kind === "gain-shield") {
      return sum + sign * event.amount * 34;
    }

    return sum + sign * event.amount * 42;
  }, 0);
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

  const leftEffectTempo = getEffectTempoValue(left, activePlayer);
  const rightEffectTempo = getEffectTempoValue(right, activePlayer);
  if (leftEffectTempo !== rightEffectTempo) {
    return rightEffectTempo - leftEffectTempo;
  }

  if (left.positionWeight !== right.positionWeight) {
    return right.positionWeight - left.positionWeight;
  }

  const leftStrength = sumMoveCardStrength(state, left.move);
  const rightStrength = sumMoveCardStrength(state, right.move);
  if (leftStrength !== rightStrength) {
    return rightStrength - leftStrength;
  }

  return compareMoveCoordinates(left.move, right.move);
}

export function buildMovePreviewTable(state: MatchState): PreviewMove[] {
  return listBotCandidateMoves(state)
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
