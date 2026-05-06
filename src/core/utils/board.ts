import type { BoardCard, ControlTotals, Direction, Position } from "@/core/types";

const OFFSETS: Record<Direction, { row: number; col: number }> = {
  top: { row: -1, col: 0 },
  right: { row: 0, col: 1 },
  bottom: { row: 1, col: 0 },
  left: { row: 0, col: -1 }
};

export const OPPOSITE_DIRECTION: Record<Direction, Direction> = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};

/**
 * Returns true when the target position is inside the square board.
 */
export function isInsideBoard(position: Position, boardSize: number): boolean {
  return (
    position.row >= 0 &&
    position.row < boardSize &&
    position.col >= 0 &&
    position.col < boardSize
  );
}

/**
 * Returns all orthogonally adjacent coordinates that fit inside the board.
 */
export function getAdjacentPositions(position: Position, boardSize: number): Array<{ direction: Direction; position: Position }> {
  return (Object.keys(OFFSETS) as Direction[])
    .map((direction) => ({
      direction,
      position: {
        row: position.row + OFFSETS[direction].row,
        col: position.col + OFFSETS[direction].col
      }
    }))
    .filter((entry) => isInsideBoard(entry.position, boardSize));
}

/**
 * Returns whether every board cell is occupied.
 */
export function isBoardFull(board: Array<Array<BoardCard | null>>): boolean {
  return board.every((row) => row.every((cell) => cell !== null));
}

/**
 * Counts occupied cells on the board.
 */
export function countOccupiedCells(board: Array<Array<BoardCard | null>>): number {
  return board.flat().filter((cell) => cell !== null).length;
}

/**
 * Counts control totals for both sides on the current board.
 */
export function calculateControl(board: Array<Array<BoardCard | null>>): ControlTotals {
  return board.flat().reduce<ControlTotals>(
    (totals, card) => {
      if (!card) {
        return totals;
      }

      totals[card.owner] += 1;
      return totals;
    },
    { player: 0, enemy: 0 },
  );
}

/**
 * Returns every empty coordinate on the board in reading order.
 */
export function listEmptyPositions(board: Array<Array<BoardCard | null>>): Position[] {
  const positions: Position[] = [];

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      if (!board[row][col]) {
        positions.push({ row, col });
      }
    }
  }

  return positions;
}
