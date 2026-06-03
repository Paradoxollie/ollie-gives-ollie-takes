import { describe, expect, it } from "vitest";

import { getTraitBattleModifiers, getTraitControlBonus } from "@/core/traits";
import type { BoardCard, CardFamily, PlayerId } from "@/core/types";

function card(options: {
  id: string;
  owner: PlayerId;
  family: CardFamily;
  row: number;
  col: number;
  stackFamilies?: CardFamily[];
  corruptedBy?: PlayerId | null;
}): BoardCard {
  const stackFamilies = options.stackFamilies ?? [options.family];
  const stackFamilyCounts = stackFamilies.reduce(
    (counts, family) => ({
      ...counts,
      [family]: (counts[family] ?? 0) + 1,
    }),
    {} as Partial<Record<CardFamily, number>>,
  );

  return {
    instanceId: options.id,
    archetypeId: options.id,
    owner: options.owner,
    name: options.id,
    sides: { top: 3, right: 3, bottom: 3, left: 3 },
    manaCost: 1,
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
    stackSize: stackFamilies.length,
    stackManaCost: stackFamilies.length,
    stackFamilyCounts,
  };
}

function emptyBoard(): Array<Array<BoardCard | null>> {
  return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));
}

describe("family trait bonuses", () => {
  it("lets a two-card human squad defend without receiving the attack bonus", () => {
    const board = emptyBoard();
    const attacker = card({ id: "enemy", owner: "enemy", family: "demon", row: 1, col: 0 });
    const defender = card({ id: "human-a", owner: "player", family: "human", row: 1, col: 1, stackFamilies: ["human", "human"] });
    board[1][0] = attacker;
    board[1][1] = defender;

    const modifiers = getTraitBattleModifiers({
      board,
      attacker,
      defender,
      direction: "right",
      baseAttackerValue: 4,
      baseDefenderValue: 3,
    });

    expect(modifiers.attackBonus).toBe(0);
    expect(modifiers.defenseBonus).toBe(1);
  });

  it("gives humans attack only after completing a three-card formation", () => {
    const board = emptyBoard();
    const attacker = card({ id: "human-a", owner: "player", family: "human", row: 1, col: 1, stackFamilies: ["human", "human", "human"] });
    const defender = card({ id: "enemy", owner: "enemy", family: "demon", row: 1, col: 2 });
    board[1][1] = attacker;
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

  it("lets a completed automaton machine attack as well as defend", () => {
    const board = emptyBoard();
    const attacker = card({ id: "auto-a", owner: "player", family: "automaton", row: 1, col: 1, stackFamilies: ["automaton", "automaton", "automaton"] });
    const defender = card({ id: "enemy", owner: "enemy", family: "human", row: 1, col: 2 });
    board[1][1] = attacker;
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

  it("rewards a completed demon assault with a second attack bonus", () => {
    const board = emptyBoard();
    const attacker = card({ id: "demon-a", owner: "player", family: "demon", row: 1, col: 1, stackFamilies: ["demon", "demon", "demon"] });
    const defender = card({ id: "enemy", owner: "enemy", family: "human", row: 1, col: 2 });
    board[1][1] = attacker;
    board[1][2] = defender;

    const modifiers = getTraitBattleModifiers({
      board,
      attacker,
      defender,
      direction: "right",
      baseAttackerValue: 3,
      baseDefenderValue: 5,
    });

    expect(modifiers.attackBonus).toBe(2);
    expect(modifiers.defenseBonus).toBe(0);
  });

  it("stacks automaton local defense up to the cap", () => {
    const board = emptyBoard();
    const attacker = card({ id: "enemy", owner: "enemy", family: "human", row: 1, col: 0 });
    const defender = card({ id: "auto-a", owner: "player", family: "automaton", row: 0, col: 0, stackFamilies: ["automaton", "automaton", "automaton"] });
    board[1][0] = attacker;
    board[0][0] = defender;

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
    const attacker = card({ id: "rev-a", owner: "player", family: "revenant", row: 1, col: 1, stackFamilies: ["revenant", "revenant"] });
    const defender = card({ id: "enemy-a", owner: "enemy", family: "human", row: 1, col: 2 });
    board[1][1] = attacker;
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
    const attacker = card({ id: "arcane-a", owner: "player", family: "arcane", row: 1, col: 1, stackFamilies: ["arcane", "arcane"] });
    const defender = card({ id: "enemy", owner: "enemy", family: "automaton", row: 1, col: 2 });
    board[1][1] = attacker;
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

  it("gives a completed arcane core a defensive bonus", () => {
    const board = emptyBoard();
    const attacker = card({ id: "enemy", owner: "enemy", family: "demon", row: 1, col: 0 });
    const defender = card({ id: "arcane-a", owner: "player", family: "arcane", row: 1, col: 1, stackFamilies: ["arcane", "arcane", "arcane"] });
    board[1][0] = attacker;
    board[1][1] = defender;

    const modifiers = getTraitBattleModifiers({
      board,
      attacker,
      defender,
      direction: "right",
      baseAttackerValue: 4,
      baseDefenderValue: 3,
    });

    expect(modifiers.attackBonus).toBe(0);
    expect(modifiers.defenseBonus).toBe(1);
  });

  it("does not add board-wide family control bonuses", () => {
    const board = emptyBoard();
    board[0][0] = card({ id: "auto-a", owner: "player", family: "automaton", row: 0, col: 0 });
    board[0][1] = card({ id: "auto-b", owner: "player", family: "automaton", row: 0, col: 1 });
    board[1][1] = card({ id: "arcane-a", owner: "player", family: "arcane", row: 1, col: 1 });
    board[2][0] = card({ id: "arcane-b", owner: "player", family: "arcane", row: 2, col: 0 });
    board[2][1] = card({ id: "arcane-c", owner: "player", family: "arcane", row: 2, col: 1 });
    board[2][2] = card({ id: "arcane-d", owner: "player", family: "arcane", row: 2, col: 2 });
    board[1][0] = card({ id: "auto-c", owner: "player", family: "automaton", row: 1, col: 0 });
    board[0][2] = card({ id: "auto-d", owner: "player", family: "automaton", row: 0, col: 2 });

    expect(getTraitControlBonus(board, "player")).toBe(0);
  });
});
