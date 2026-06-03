import { CARD_FAMILIES } from "@/core/types";
import { calculateControl } from "@/core/utils/board";
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

/**
 * Counts the families represented by a single board stack.
 */
export function countCardFamilies(card: BoardCard): FamilyCounts {
  const counts = createFamilyCounts();

  if (card.stackFamilyCounts && Object.keys(card.stackFamilyCounts).length > 0) {
    for (const family of CARD_FAMILIES) {
      counts[family] = card.stackFamilyCounts[family] ?? 0;
    }
  } else {
    counts[card.family] = 1;
  }

  if (card.corruptedBy === card.owner && counts.demon === 0) {
    counts.demon = 1;
  }

  return counts;
}

/**
 * Returns how many cards inside a board stack count as a family for its controller.
 */
export function getCardFamilyCount(card: BoardCard, owner: PlayerId, family: CardFamily): number {
  if (card.owner !== owner) {
    return 0;
  }

  const counts = countCardFamilies(card);
  if (family === "demon" && card.corruptedBy === owner) {
    return Math.max(1, counts.demon);
  }

  return counts[family];
}

/**
 * Returns whether a board card stack currently counts as a family for its controller.
 */
export function cardCountsAsFamily(card: BoardCard, owner: PlayerId, family: CardFamily): boolean {
  return getCardFamilyCount(card, owner, family) > 0;
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

      const cardCounts = countCardFamilies(card);
      for (const family of CARD_FAMILIES) {
        counts[family] += cardCounts[family];
      }
    }
  }

  return counts;
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

  if (getCardFamilyCount(attacker, attacker.owner, "familiar") >= 2) {
    attackBonus += 1;
  }

  if (getCardFamilyCount(defender, defender.owner, "familiar") >= 2) {
    defenseBonus += 1;
  }

  const attackerDemonCount = getCardFamilyCount(attacker, attacker.owner, "demon");
  if (attackerDemonCount >= 2) {
    attackBonus += 1;
  }

  if (attackerDemonCount >= 3) {
    attackBonus += 1;
  }

  if (getCardFamilyCount(attacker, attacker.owner, "human") >= 3) {
    attackBonus += 1;
  }

  if (getCardFamilyCount(defender, defender.owner, "human") >= 2) {
    defenseBonus += 1;
  }

  if (getCardFamilyCount(defender, defender.owner, "automaton") >= 2) {
    defenseBonus += 1;
  }

  if (getCardFamilyCount(attacker, attacker.owner, "automaton") >= 3) {
    attackBonus += 1;
  }

  if (getCardFamilyCount(defender, defender.owner, "automaton") >= 3 && isCorner(defender, board.length)) {
    defenseBonus += 1;
  }

  if (
    getCardFamilyCount(attacker, attacker.owner, "revenant") >= 2 &&
    isBehindOnBoard(board, attacker.owner)
  ) {
    attackBonus += 1;
  }

  if (
    getCardFamilyCount(defender, defender.owner, "revenant") >= 2 &&
    isBehindOnBoard(board, defender.owner)
  ) {
    defenseBonus += 1;
  }

  if (
    getCardFamilyCount(attacker, attacker.owner, "arcane") >= 2 &&
    baseAttackerValue === baseDefenderValue
  ) {
    attackBonus += 1;
  }

  if (getCardFamilyCount(defender, defender.owner, "arcane") >= 3) {
    defenseBonus += 1;
  }

  return {
    attackBonus: clampTotalBonus(attackBonus),
    defenseBonus: clampTotalBonus(defenseBonus),
  };
}

/**
 * Board-wide family control bonuses are disabled in the stack system.
 */
export function getTraitControlBonus(_board: Array<Array<BoardCard | null>>, _owner: PlayerId): number {
  return 0;
}
