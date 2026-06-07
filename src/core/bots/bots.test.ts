import { describe, expect, it } from "vitest";

import {
  championBot,
  createConfiguredChampionBot,
  getBot,
  greedyBot,
  heuristicBot,
  randomBot,
  trainedBot,
} from "@/core/bots";
import { rankHeuristicMoves } from "@/core/bots/heuristicBot";
import { evaluateMatchStateForBot } from "@/core/bots/trainedBot";
import { TRAINED_BOT_PROFILE } from "@/core/bots/generated/trainedWeights";
import { BOT_TRAINING_CONFIG } from "@/core/config/gameConfig";
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
    effects: [],
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
        searchDepth: 1,
        beamWidth: 6,
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
      searchDepth: 1,
      beamWidth: 6,
    });
    const right = trainedBot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: 777,
      searchDepth: 1,
      beamWidth: 6,
    });

    expect(left).toEqual(right);
  });

  it("keeps deterministic seeded behavior for the champion bot", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 404 });

    const left = championBot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: 777,
      searchDepth: 1,
      beamWidth: 6,
    });
    const right = championBot.chooseMove(state, {
      playerId: state.turn.activePlayer,
      seed: 777,
      searchDepth: 1,
      beamWidth: 6,
    });

    expect(left).toEqual(right);
  });

  it("keeps learned champion choices inside the deep heuristic safety band", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 404 });
    const context = {
      playerId: state.turn.activePlayer,
      seed: 777,
      searchDepth: 2,
      beamWidth: 8,
    };
    const rankedMoves = rankHeuristicMoves(state, context);
    const decision = createConfiguredChampionBot(
      {
        ...TRAINED_BOT_PROFILE.weights,
        reserveStrengthDiff: 1_000_000,
      },
      context.searchDepth,
      context.beamWidth,
    ).chooseMove(state, context);
    const chosen = rankedMoves.find((entry) => entry.move.cardInstanceId === decision.move?.cardInstanceId &&
      entry.move.position.row === decision.move?.position.row &&
      entry.move.position.col === decision.move?.position.col);

    expect(chosen).toBeDefined();
    expect(chosen?.score).toBeGreaterThanOrEqual(
      (rankedMoves[0]?.score ?? 0) - BOT_TRAINING_CONFIG.championHeuristicScoreTolerance,
    );
  });

  it("values shield and future draw in the trained state evaluation", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 404 });
    const baseScore = evaluateMatchStateForBot(state, "player", TRAINED_BOT_PROFILE.weights);
    const improvedState = {
      ...state,
      combat: {
        ...state.combat,
        player: {
          ...state.combat.player,
          shield: state.combat.player.shield + 2,
          nextTurnDrawBonus: state.combat.player.nextTurnDrawBonus + 1,
        },
      },
    };

    expect(evaluateMatchStateForBot(improvedState, "player", TRAINED_BOT_PROFILE.weights)).toBeGreaterThan(baseScore);
  });

  it("fails loudly when resolving an unknown bot id", () => {
    expect(() => getBot("missing" as never)).toThrowError("Unknown bot id");
  });

  it("lets strategic bots choose a flip that only exists because of a family bonus", () => {
    const humanAttacker = testArchetype("trait-human-attacker", "human", { top: 1, right: 3, bottom: 1, left: 1 });
    const demonAttacker = testArchetype("trait-demon-attacker", "demon", { top: 1, right: 4, bottom: 1, left: 1 });
    const humanSupport = testArchetype("trait-human-support", "human", { top: 1, right: 1, bottom: 1, left: 1 });
    const target = testArchetype("trait-target", "automaton", { top: 6, right: 6, bottom: 6, left: 6 });
    const humanChoice = { ...testCard("player", humanAttacker, "human-choice"), manaCost: 1 };
    const humanStackChoiceA = { ...testCard("player", humanSupport, "human-stack-a"), manaCost: 1 };
    const humanStackChoiceB = { ...testCard("player", humanSupport, "human-stack-b"), manaCost: 1 };
    const demonChoice = { ...testCard("player", demonAttacker, "demon-choice"), manaCost: 4 };
    const board = emptyBoard();
    board[1][2] = testBoardCard("enemy", target, "target", 1, 2);
    const baseState = createMatch({
      seed: 19,
      startingPlayer: "player",
      playerCards: [humanAttacker, demonAttacker, humanSupport, humanSupport],
      enemyCards: [target],
    });
    const state = {
      ...baseState,
      board,
      turn: {
        ...baseState.turn,
        activePlayer: "player" as const,
        choices: [demonChoice, humanChoice, humanStackChoiceA, humanStackChoiceB],
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
        cardInstanceIds: [humanChoice.instanceId, humanStackChoiceA.instanceId, humanStackChoiceB.instanceId],
        position: { row: 1, col: 1 },
      });
    }
  });
});
