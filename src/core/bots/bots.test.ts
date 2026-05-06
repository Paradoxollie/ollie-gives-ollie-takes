import { describe, expect, it } from "vitest";

import { championBot, getBot, greedyBot, heuristicBot, randomBot, trainedBot } from "@/core/bots";
import { createCardInstance, getCardArchetype } from "@/core/cards";
import { createMatch, listLegalMoves } from "@/core/engine";
import type { BoardCard, CardArchetype, CardFamily, CardInstance, CardSides, PlayerId } from "@/core/types";

function testArchetype(id: string, family: CardFamily, sides: CardSides): CardArchetype {
  return {
    ...getCardArchetype("field-knight"),
    id,
    name: id,
    family,
    sides,
    sourceType: "draft",
    rarity: "common",
    baseArchetypeId: null,
  };
}

function testCard(owner: PlayerId, archetype: CardArchetype, suffix: string): CardInstance {
  return {
    ...createCardInstance(owner, archetype, 1),
    instanceId: `${owner}-${suffix}`,
  };
}

function testBoardCard(
  owner: PlayerId,
  archetype: CardArchetype,
  suffix: string,
  row: number,
  col: number,
): BoardCard {
  return {
    ...testCard(owner, archetype, suffix),
    row,
    col,
  };
}

function emptyBoard(): Array<Array<BoardCard | null>> {
  return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));
}

describe("bot legality", () => {
  it("only returns legal moves when choices are available", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 404 });
    const legalMoves = listLegalMoves(state);

    for (const bot of [randomBot, greedyBot, heuristicBot, trainedBot, championBot]) {
      const decision = bot.chooseMove(state, {
        playerId: state.turn.activePlayer,
        seed: 777,
      });

      expect(decision.move).not.toBeNull();
      expect(legalMoves).toContainEqual(decision.move);
    }
  });

  it("keeps deterministic seeded behavior for the random bot", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 404 });

    const left = randomBot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: 777,
    });
    const right = randomBot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: 777,
    });

    expect(left).toEqual(right);
  });

  it("keeps deterministic seeded behavior for the trained bot", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 404 });

    const left = trainedBot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: 777,
      searchDepth: 2,
      beamWidth: 8,
    });
    const right = trainedBot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: 777,
      searchDepth: 2,
      beamWidth: 8,
    });

    expect(left).toEqual(right);
  });

  it("keeps deterministic seeded behavior for the champion bot", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 404 });

    const left = championBot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: 777,
      searchDepth: 2,
      beamWidth: 8,
    });
    const right = championBot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: 777,
      searchDepth: 2,
      beamWidth: 8,
    });

    expect(left).toEqual(right);
  });

  it("fails loudly when resolving an unknown bot id", () => {
    expect(() => getBot("missing" as never)).toThrowError("Unknown bot id");
  });

  it("lets strategic bots choose a flip that only exists because of a family bonus", () => {
    const humanAttacker = testArchetype("trait-human-attacker", "human", { top: 1, right: 4, bottom: 1, left: 1 });
    const demonAttacker = testArchetype("trait-demon-attacker", "demon", { top: 1, right: 4, bottom: 1, left: 1 });
    const humanSupport = testArchetype("trait-human-support", "human", { top: 1, right: 1, bottom: 1, left: 1 });
    const target = testArchetype("trait-target", "automaton", { top: 1, right: 1, bottom: 1, left: 4 });
    const humanChoice = testCard("player", humanAttacker, "human-choice");
    const demonChoice = testCard("player", demonAttacker, "demon-choice");
    const board = emptyBoard();
    board[1][0] = testBoardCard("player", humanSupport, "human-support", 1, 0);
    board[1][2] = testBoardCard("enemy", target, "target", 1, 2);
    const baseState = createMatch({
      seed: 19,
      startingPlayer: "player",
      playerCards: [humanAttacker, demonAttacker, humanSupport],
      enemyCards: [target],
    });
    const state = {
      ...baseState,
      board,
      turn: {
        ...baseState.turn,
        activePlayer: "player" as const,
        choices: [demonChoice, humanChoice],
      },
    };

    for (const bot of [greedyBot, heuristicBot, trainedBot, championBot]) {
      const decision = bot.chooseMove(state, {
        playerId: "player",
        seed: 91,
        searchDepth: 2,
        beamWidth: 20,
      });

      expect(decision.move).toEqual({
        cardInstanceId: humanChoice.instanceId,
        position: { row: 1, col: 1 },
      });
    }
  });
});
