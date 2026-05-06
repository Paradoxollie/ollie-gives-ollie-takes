import { CARD_FAMILIES } from "@/core/types";
import { calculateControl, getAdjacentPositions } from "@/core/utils/board";
import type { BoardCard, CardFamily, Direction, PlayerId, Position } from "@/core/types";

export type FamilyCounts = Record<CardFamily, number>;

export interface TraitBattleModifiers {
  attackBonus: number;
  defenseBonus: number;
}

function createFamilyCounts(): FamilyCounts {
  return Object.fromEntries(CARD_FAMILIES.map((family) => [family, 0])) as FamilyCounts;
}

function isCorner(position: Position, boardSize: number): boolean {
  return (
    (position.row === 0 || position.row === boardSize - 1) &&
    (position.col === 0 || position.col === boardSize - 1)
  );
}

function isControlledBy(card: BoardCard | null, owner: PlayerId): card is BoardCard {
  return Boolean(card && card.owner === owner);
}

/**
 * Returns whether a board card currently counts as a family for its controller.
 */
export function cardCountsAsFamily(card: BoardCard, owner: PlayerId, family: CardFamily): boolean {
  if (card.owner !== owner) {
    return false;
  }

  return card.family === family || (family === "demon" && card.corruptedBy === owner);
}

/**
 * Counts active family traits from cards currently controlled on the board.
 */
export function countBoardFamilies(board: Array<Array<BoardCard | null>>, owner: PlayerId): FamilyCounts {
  const counts = createFamilyCounts();

  for (const row of board) {
    for (const card of row) {
      if (!card || card.owner !== owner) {
        continue;
      }

      counts[card.family] += 1;
      if (card.corruptedBy === owner && card.family !== "demon") {
        counts.demon += 1;
      }
    }
  }

  return counts;
}

function hasTrait(board: Array<Array<BoardCard | null>>, owner: PlayerId, family: CardFamily, threshold: number): boolean {
  return countBoardFamilies(board, owner)[family] >= threshold;
}

function countAdjacentAllies(
  board: Array<Array<BoardCard | null>>,
  position: Position,
  owner: PlayerId,
  family?: CardFamily,
): number {
  return getAdjacentPositions(position, board.length).filter((entry) => {
    const card = board[entry.position.row]?.[entry.position.col] ?? null;
    return isControlledBy(card, owner) && (!family || cardCountsAsFamily(card, owner, family));
  }).length;
}

function hasLineOrColumnAlly(
  board: Array<Array<BoardCard | null>>,
  position: Position,
  owner: PlayerId,
  family: CardFamily,
): boolean {
  for (let index = 0; index < board.length; index += 1) {
    const rowCard = board[position.row]?.[index] ?? null;
    const colCard = board[index]?.[position.col] ?? null;
    if (
      index !== position.col &&
      isControlledBy(rowCard, owner) &&
      cardCountsAsFamily(rowCard, owner, family)
    ) {
      return true;
    }

    if (
      index !== position.row &&
      isControlledBy(colCard, owner) &&
      cardCountsAsFamily(colCard, owner, family)
    ) {
      return true;
    }
  }

  return false;
}

function isIsolatedFromOwner(board: Array<Array<BoardCard | null>>, position: Position, owner: PlayerId): boolean {
  return countAdjacentAllies(board, position, owner) === 0;
}

function isBehindOnBoard(board: Array<Array<BoardCard | null>>, owner: PlayerId): boolean {
  const control = calculateControl(board);
  const opponent = owner === "player" ? "enemy" : "player";
  return control[owner] <= control[opponent];
}

function clampTotalBonus(value: number): number {
  return Math.max(0, Math.min(2, value));
}

/**
 * Computes the small deterministic trait bonuses used for one adjacent comparison.
 */
export function getTraitBattleModifiers(options: {
  board: Array<Array<BoardCard | null>>;
  attacker: BoardCard;
  defender: BoardCard;
  direction: Direction;
  baseAttackerValue: number;
  baseDefenderValue: number;
}): TraitBattleModifiers {
  const { board, attacker, defender, baseAttackerValue, baseDefenderValue } = options;
  let attackBonus = 0;
  let defenseBonus = 0;

  if (
    hasTrait(board, attacker.owner, "familiar", 2) &&
    cardCountsAsFamily(attacker, attacker.owner, "familiar") &&
    countAdjacentAllies(board, attacker, attacker.owner, "familiar") > 0
  ) {
    attackBonus += 1;
  }

  if (
    hasTrait(board, defender.owner, "familiar", 3) &&
    cardCountsAsFamily(defender, defender.owner, "familiar") &&
    countAdjacentAllies(board, defender, defender.owner, "familiar") > 0
  ) {
    defenseBonus += 1;
  }

  if (
    hasTrait(board, attacker.owner, "demon", 3) &&
    cardCountsAsFamily(attacker, attacker.owner, "demon") &&
    (defender.corruptedBy === attacker.owner || isIsolatedFromOwner(board, defender, defender.owner))
  ) {
    attackBonus += 1;
  }

  if (
    hasTrait(board, attacker.owner, "human", 2) &&
    cardCountsAsFamily(attacker, attacker.owner, "human") &&
    hasLineOrColumnAlly(board, attacker, attacker.owner, "human")
  ) {
    attackBonus += 1;
  }

  if (
    hasTrait(board, defender.owner, "human", 3) &&
    cardCountsAsFamily(defender, defender.owner, "human") &&
    hasLineOrColumnAlly(board, defender, defender.owner, "human")
  ) {
    defenseBonus += 1;
  }

  if (
    hasTrait(board, defender.owner, "automaton", 2) &&
    cardCountsAsFamily(defender, defender.owner, "automaton") &&
    isCorner(defender, board.length)
  ) {
    defenseBonus += 1;
  }

  if (
    hasTrait(board, defender.owner, "automaton", 3) &&
    countAdjacentAllies(board, defender, defender.owner, "automaton") > 0
  ) {
    defenseBonus += 1;
  }

  if (
    hasTrait(board, attacker.owner, "revenant", 2) &&
    cardCountsAsFamily(attacker, attacker.owner, "revenant") &&
    isBehindOnBoard(board, attacker.owner)
  ) {
    attackBonus += 1;
  }

  if (
    hasTrait(board, defender.owner, "revenant", 3) &&
    cardCountsAsFamily(defender, defender.owner, "revenant") &&
    isBehindOnBoard(board, defender.owner)
  ) {
    defenseBonus += 1;
  }

  if (
    hasTrait(board, attacker.owner, "arcane", 2) &&
    cardCountsAsFamily(attacker, attacker.owner, "arcane") &&
    baseAttackerValue === baseDefenderValue
  ) {
    attackBonus += 1;
  }

  return {
    attackBonus: clampTotalBonus(attackBonus),
    defenseBonus: clampTotalBonus(defenseBonus),
  };
}

/**
 * Returns small end-of-round control bonuses from high board-commitment traits.
 */
export function getTraitControlBonus(board: Array<Array<BoardCard | null>>, owner: PlayerId): number {
  const counts = countBoardFamilies(board, owner);
  let bonus = 0;

  if (counts.familiar >= 4) {
    bonus += 1;
  }

  if (counts.demon >= 5 && board.flat().filter((card) => card?.owner === owner && card.corruptedBy === owner).length >= 2) {
    bonus += 1;
  }

  if (counts.human >= 5) {
    for (let index = 0; index < board.length; index += 1) {
      const row = board[index];
      const rowOwned = row.every((card) => card?.owner === owner);
      const rowHumans = row.filter((card) => card && cardCountsAsFamily(card, owner, "human")).length;
      if (rowOwned && rowHumans >= 2) {
        bonus += 1;
        break;
      }

      const column = board.map((rowEntry) => rowEntry[index]);
      const columnOwned = column.every((card) => card?.owner === owner);
      const columnHumans = column.filter((card) => card && cardCountsAsFamily(card, owner, "human")).length;
      if (columnOwned && columnHumans >= 2) {
        bonus += 1;
        break;
      }
    }
  }

  if (
    counts.automaton >= 4 &&
    board.some((row, rowIndex) =>
      row.some(
        (card, colIndex) =>
          card &&
          cardCountsAsFamily(card, owner, "automaton") &&
          isCorner({ row: rowIndex, col: colIndex }, board.length),
      ),
    )
  ) {
    bonus += 1;
  }

  if (counts.revenant >= 4 && isBehindOnBoard(board, owner)) {
    bonus += 1;
  }

  if (counts.arcane >= 4) {
    const center = Math.floor(board.length / 2);
    const centerCard = board[center]?.[center] ?? null;
    if (centerCard && cardCountsAsFamily(centerCard, owner, "arcane")) {
      bonus += 1;
    }
  }

  return Math.min(2, bonus);
}
