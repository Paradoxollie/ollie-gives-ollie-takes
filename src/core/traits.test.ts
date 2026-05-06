import { describe, expect, it } from "vitest";

import { getTraitBattleModifiers, getTraitControlBonus } from "@/core/traits";
import type { BoardCard, CardFamily, PlayerId } from "@/core/types";

function card(options: {
  id: string;
  owner: PlayerId;
  family: CardFamily;
  row: number;
  col: number;
  corruptedBy?: PlayerId | null;
}): BoardCard {
  return {
    instanceId: options.id,
    archetypeId: options.id,
    owner: options.owner,
    name: options.id,
    sides: { top: 3, right: 3, bottom: 3, left: 3 },
    family: options.family,
    accent: "test",
    artSrc: "/images/cards-hd/placeholder-card.png",
    rarity: "common",
    sourceType: "draft",
    baseArchetypeId: null,
    temporaryScope: null,
    createdByCharmId: null,
    corruptedBy: options.corruptedBy ?? null,
    row: options.row,
    col: options.col,
  };
}

function emptyBoard(): Array<Array<BoardCard | null>> {
  return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));
}

describe("family trait bonuses", () => {
  it("gives humans attack from same row or column formations", () => {
    const board = emptyBoard();
    const attacker = card({ id: "human-a", owner: "player", family: "human", row: 1, col: 1 });
    const ally = card({ id: "human-b", owner: "player", family: "human", row: 1, col: 0 });
    const defender = card({ id: "enemy", owner: "enemy", family: "demon", row: 1, col: 2 });
    board[1][1] = attacker;
    board[1][0] = ally;
    board[1][2] = defender;

    const modifiers = getTraitBattleModifiers({
      board,
      attacker,
      defender,
      direction: "right",
      baseAttackerValue: 3,
      baseDefenderValue: 4,
    });

    expect(modifiers.attackBonus).toBe(1);
    expect(modifiers.defenseBonus).toBe(0);
  });

  it("stacks automaton corner and adjacent defense up to the cap", () => {
    const board = emptyBoard();
    const attacker = card({ id: "enemy", owner: "enemy", family: "human", row: 1, col: 0 });
    const defender = card({ id: "auto-a", owner: "player", family: "automaton", row: 0, col: 0 });
    board[1][0] = attacker;
    board[0][0] = defender;
    board[0][1] = card({ id: "auto-b", owner: "player", family: "automaton", row: 0, col: 1 });
    board[2][2] = card({ id: "auto-c", owner: "player", family: "automaton", row: 2, col: 2 });

    const modifiers = getTraitBattleModifiers({
      board,
      attacker,
      defender,
      direction: "top",
      baseAttackerValue: 5,
      baseDefenderValue: 3,
    });

    expect(modifiers.defenseBonus).toBe(2);
  });

  it("activates revenant attack while its controller is not ahead", () => {
    const board = emptyBoard();
    const attacker = card({ id: "rev-a", owner: "player", family: "revenant", row: 1, col: 1 });
    const defender = card({ id: "enemy-a", owner: "enemy", family: "human", row: 1, col: 2 });
    board[1][1] = attacker;
    board[0][0] = card({ id: "rev-b", owner: "player", family: "revenant", row: 0, col: 0 });
    board[1][2] = defender;
    board[2][2] = card({ id: "enemy-b", owner: "enemy", family: "human", row: 2, col: 2 });

    const modifiers = getTraitBattleModifiers({
      board,
      attacker,
      defender,
      direction: "right",
      baseAttackerValue: 3,
      baseDefenderValue: 4,
    });

    expect(modifiers.attackBonus).toBe(1);
  });

  it("lets arcane cards break equal-value attacks", () => {
    const board = emptyBoard();
    const attacker = card({ id: "arcane-a", owner: "player", family: "arcane", row: 1, col: 1 });
    const defender = card({ id: "enemy", owner: "enemy", family: "automaton", row: 1, col: 2 });
    board[1][1] = attacker;
    board[0][0] = card({ id: "arcane-b", owner: "player", family: "arcane", row: 0, col: 0 });
    board[1][2] = defender;

    const modifiers = getTraitBattleModifiers({
      board,
      attacker,
      defender,
      direction: "right",
      baseAttackerValue: 4,
      baseDefenderValue: 4,
    });

    expect(modifiers.attackBonus).toBe(1);
  });

  it("caps combined end-of-round family control bonuses", () => {
    const board = emptyBoard();
    board[0][0] = card({ id: "auto-a", owner: "player", family: "automaton", row: 0, col: 0 });
    board[0][1] = card({ id: "auto-b", owner: "player", family: "automaton", row: 0, col: 1 });
    board[1][1] = card({ id: "arcane-a", owner: "player", family: "arcane", row: 1, col: 1 });
    board[2][0] = card({ id: "arcane-b", owner: "player", family: "arcane", row: 2, col: 0 });
    board[2][1] = card({ id: "arcane-c", owner: "player", family: "arcane", row: 2, col: 1 });
    board[2][2] = card({ id: "arcane-d", owner: "player", family: "arcane", row: 2, col: 2 });
    board[1][0] = card({ id: "auto-c", owner: "player", family: "automaton", row: 1, col: 0 });
    board[0][2] = card({ id: "auto-d", owner: "player", family: "automaton", row: 0, col: 2 });

    expect(getTraitControlBonus(board, "player")).toBe(2);
  });
});
