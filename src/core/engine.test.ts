import { describe, expect, it } from "vitest";

import { createCardInstance, getCardArchetype } from "@/core/cards";
import { GAME_CONFIG } from "@/core/config/gameConfig";
import { getEnemyProfile } from "@/core/config/enemyProfiles";
import { applyMove, canPlaceCard, createMatch, getControlTotals, passTurn } from "@/core/engine";
import { useFireflyReroll, useReflectionCopy } from "@/core/player-charms";
import { countBoardFamilies } from "@/core/traits";
import { shuffleWithSeed } from "@/core/utils/rng";
import type { BoardCard, CardInstance, CardSides, MatchState, PlayerId } from "@/core/types";

function makeCard(owner: PlayerId, archetypeId: string, suffix: string): CardInstance {
  return {
    ...createCardInstance(owner, getCardArchetype(archetypeId), 0),
    instanceId: `${owner}-${archetypeId}-${suffix}`,
    effects: [],
  };
}

function makeBoardCard(owner: PlayerId, archetypeId: string, suffix: string, row: number, col: number): BoardCard {
  return {
    ...makeCard(owner, archetypeId, suffix),
    row,
    col,
  };
}

function makeBoard(size = 3): Array<Array<BoardCard | null>> {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => null));
}

function withSides<T extends { sides: CardSides }>(card: T, sides: CardSides): T {
  return {
    ...card,
    sides: { ...sides },
  };
}

interface MatchStateOverrides extends Partial<Omit<MatchState, "round" | "turn">> {
  round?: Partial<MatchState["round"]>;
  turn?: Partial<MatchState["turn"]>;
}

function makeState(overrides: MatchStateOverrides = {}): MatchState {
  const state = createMatch({ deckPresetId: "starter10", seed: 7 });

  return {
    ...state,
    config: overrides.config ?? state.config,
    board: overrides.board ?? state.board,
    players: overrides.players ?? state.players,
    champions: overrides.champions ?? state.champions,
    combat: overrides.combat ?? {
      player: { shield: 0, nextTurnDrawBonus: 0 },
      enemy: { shield: 0, nextTurnDrawBonus: 0 },
    },
    round: {
      ...state.round,
      ...overrides.round,
    },
    turn: {
      ...state.turn,
      ...overrides.turn,
    },
    playerCharms: overrides.playerCharms ?? state.playerCharms,
    playerCharmState: overrides.playerCharmState ?? state.playerCharmState,
    result: overrides.result ?? state.result,
    metrics: overrides.metrics ?? state.metrics,
    lastMove: overrides.lastMove ?? state.lastMove,
    emptyTurnStreak: overrides.emptyTurnStreak ?? state.emptyTurnStreak,
    enemyProfile: overrides.enemyProfile ?? state.enemyProfile,
    enemyPowerState: overrides.enemyPowerState ?? state.enemyPowerState,
    rngState: overrides.rngState ?? state.rngState,
    seed: overrides.seed ?? state.seed,
    deckPresetId: overrides.deckPresetId ?? state.deckPresetId,
  };
}

describe("placement rules", () => {
  it("deals unique cards from a shared 10-card pool and draws 5", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 5 });
    const playerVisibleCards =
      state.turn.activePlayer === "player" ? [...state.turn.choices, ...state.players.player.drawPile] : state.players.player.drawPile;
    const enemyVisibleCards =
      state.turn.activePlayer === "enemy" ? [...state.turn.choices, ...state.players.enemy.drawPile] : state.players.enemy.drawPile;
    const expectedPlayerDrawPile = state.turn.activePlayer === "player" ? 5 : 10;
    const uniqueArchetypes = new Set(playerVisibleCards.map((card) => card.archetypeId));
    const enemyArchetypes = new Set(enemyVisibleCards.map((card) => card.archetypeId));

    expect(playerVisibleCards).toHaveLength(10);
    expect(enemyVisibleCards).toHaveLength(10);
    expect(uniqueArchetypes.size).toBe(10);
    expect([...uniqueArchetypes].some((cardId) => enemyArchetypes.has(cardId))).toBe(false);
    expect(state.turn.choices).toHaveLength(5);
    expect(state.players.player.drawPile).toHaveLength(expectedPlayerDrawPile);
  });

  it("supports a custom player deck for adventure progression without changing the enemy deck", () => {
    const playerCardIds = [
      "sapling",
      "sapling",
      "badger",
      "badger",
      "reward-common-01",
      "reward-common-02",
      "reward-uncommon-01",
      "reward-rare-01",
    ];
    const state = createMatch({
      deckPresetId: "starter10",
      seed: 12,
      playerCardIds,
    });
    const playerVisibleCards =
      state.turn.activePlayer === "player" ? [...state.turn.choices, ...state.players.player.drawPile] : state.players.player.drawPile;
    const enemyVisibleCards =
      state.turn.activePlayer === "enemy" ? [...state.turn.choices, ...state.players.enemy.drawPile] : state.players.enemy.drawPile;

    expect(playerVisibleCards).toHaveLength(playerCardIds.length);
    expect(playerVisibleCards.some((card) => card.archetypeId === "reward-rare-01")).toBe(true);
    expect(enemyVisibleCards).toHaveLength(10);
    expect(enemyVisibleCards.some((card) => card.archetypeId === "reward-rare-01")).toBe(false);
  });

  it("rolls a deterministic random starter for the opening round", () => {
    const first = createMatch({ deckPresetId: "starter10", seed: 5 });
    const second = createMatch({ deckPresetId: "starter10", seed: 5 });
    const sample = Array.from({ length: 16 }, (_, index) => createMatch({ deckPresetId: "starter10", seed: index + 1 }));
    const starters = new Set(sample.map((state) => state.round.startingPlayer));

    expect(first.round).toEqual(second.round);
    expect(first.turn.activePlayer).toBe(first.round.startingPlayer);
    expect(first.round.coinFace).toBe(first.round.startingPlayer === "player" ? "sun" : "moon");
    expect(starters).toEqual(new Set(["player", "enemy"]));
  });

  it("uses configured opening resources for the starter and responding player", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 5, startingPlayer: "player" });

    expect(state.turn.activePlayer).toBe("player");
    expect(state.turn.choices).toHaveLength(state.config.cardsPerTurn);
    expect(state.combat.player.shield).toBe(state.config.firstPlayerFirstTurnShieldBonus);

    const responseTurn = applyMove(state, {
      cardInstanceId: state.turn.choices[0]?.instanceId ?? "",
      position: { row: 1, col: 1 },
    });

    expect(responseTurn.turn.activePlayer).toBe("enemy");
    expect(responseTurn.turn.choices).toHaveLength(
      state.config.cardsPerTurn + state.config.secondPlayerFirstTurnDrawBonus,
    );
    expect(responseTurn.combat.enemy.shield).toBe(state.config.secondPlayerFirstTurnShieldBonus);
  });

  it("creates a 3x3 board and allows valid placements inside it", () => {
    const state = createMatch({ deckPresetId: "starter10", seed: 5 });

    expect(state.board).toHaveLength(3);
    expect(state.board[0]).toHaveLength(3);
    expect(canPlaceCard(state, { row: 2, col: 2 })).toBe(true);
  });

  it("rejects out-of-bounds and occupied cells", () => {
    const board = makeBoard();
    board[0][0] = makeBoardCard("player", "sapling", "board", 0, 0);

    const state = makeState({ board });

    expect(canPlaceCard(state, { row: -1, col: 0 })).toBe(false);
    expect(canPlaceCard(state, { row: 0, col: 3 })).toBe(false);
    expect(canPlaceCard(state, { row: 0, col: 0 })).toBe(false);
  });
});

describe("player charms", () => {
  it("applies the first-breath boost on the first card and the penalty on the second", () => {
    const firstCard = withSides(makeCard("player", "sapling", "breath-1"), {
      top: 2,
      right: 3,
      bottom: 2,
      left: 1,
    });
    const firstState = makeState({
      playerCharms: ["first-breath"],
      playerCharmState: {
        ...createMatch({ seed: 3 }).playerCharmState,
        cardsPlayedThisRound: 0,
      },
      turn: {
        activePlayer: "player",
        choices: [firstCard],
      },
    });

    const afterFirst = applyMove(firstState, {
      cardInstanceId: firstCard.instanceId,
      position: { row: 0, col: 0 },
    });
    expect(afterFirst.board[0][0]?.sides).toEqual({
      top: 3,
      right: 4,
      bottom: 3,
      left: 2,
    });

    const secondCard = withSides(makeCard("player", "sapling", "breath-2"), {
      top: 2,
      right: 5,
      bottom: 2,
      left: 3,
    });
    const secondState = makeState({
      playerCharms: ["first-breath"],
      playerCharmState: {
        ...createMatch({ seed: 3 }).playerCharmState,
        cardsPlayedThisRound: 1,
      },
      turn: {
        activePlayer: "player",
        choices: [secondCard],
      },
    });

    const afterSecond = applyMove(secondState, {
      cardInstanceId: secondCard.instanceId,
      position: { row: 0, col: 0 },
    });
    expect(afterSecond.board[0][0]?.sides).toEqual({
      top: 2,
      right: 4,
      bottom: 2,
      left: 3,
    });
  });

  it("adds the broken-bell rare and costs 1 hp at combat start", () => {
    const state = createMatch({
      deckPresetId: "starter10",
      seed: 19,
      startingPlayer: "player",
      playerCharmIds: ["broken-bell"],
    });
    const visibleCards = [...state.turn.choices, ...state.players.player.drawPile];

    expect(state.champions.player.health).toBe(GAME_CONFIG.championStartingHealth - 1);
    expect(visibleCards.some((card) => card.sourceType === "charm" && card.temporaryScope === "combat")).toBe(true);
  });

  it("rerolls the hand once per round with firefly-wing", () => {
    const state = createMatch({
      deckPresetId: "starter10",
      seed: 27,
      startingPlayer: "player",
      playerCharmIds: ["firefly-wing"],
    });
    const before = state.turn.choices.map((card) => card.instanceId);
    const rerolled = useFireflyReroll(state);
    const after = rerolled.turn.choices.map((card) => card.instanceId);

    expect(rerolled.playerCharmState.fireflyRerollUsedThisRound).toBe(true);
    expect(after).not.toEqual(before);
  });

  it("copies the selected card once per combat with reflection-ring", () => {
    const state = createMatch({
      deckPresetId: "starter10",
      seed: 29,
      startingPlayer: "player",
      playerCharmIds: ["reflection-ring"],
    });
    const sourceCard = state.turn.choices[0];
    const copied = useReflectionCopy(state, sourceCard.instanceId);
    const duplicate = copied.turn.choices.find((card) => card.instanceId.endsWith("-reflection"));

    expect(copied.playerCharmState.reflectionCopyUsedThisCombat).toBe(true);
    expect(duplicate).toBeTruthy();
    expect(duplicate?.sourceType).toBe("charm");
    expect(duplicate?.temporaryScope).toBe("round");
  });
});

describe("flip combat resolution", () => {
  it("applies the familiar 2-piece attack bonus from a local stack", () => {
    const board = makeBoard();
    board[1][2] = withSides(makeBoardCard("enemy", "owl", "target", 1, 2), {
      top: 1,
      right: 1,
      bottom: 1,
      left: 4,
    });
    const playerCard = { ...withSides(makeCard("player", "owl", "hand"), { top: 1, right: 2, bottom: 1, left: 1 }), manaCost: 1 };
    const stackSupport = { ...withSides(makeCard("player", "sapling", "stack"), { top: 1, right: 2, bottom: 1, left: 1 }), manaCost: 1 };

    const state = makeState({
      board,
      turn: {
        activePlayer: "player",
        choices: [playerCard, stackSupport],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      cardInstanceIds: [playerCard.instanceId, stackSupport.instanceId],
      position: { row: 1, col: 1 },
    });

    expect(nextState.lastMove?.impacts[0]).toMatchObject({
      attackerValue: 5,
      defenderValue: 4,
      result: "flipped",
    });
    expect(nextState.board[1][2]?.owner).toBe("player");
  });

  it("marks cards flipped by an active demon pair as corrupted demon support", () => {
    const board = makeBoard();
    board[1][2] = withSides(makeBoardCard("enemy", "owl", "target", 1, 2), {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1,
    });
    const playerCard = { ...makeCard("player", "pact-sprite", "hand"), manaCost: 1 };
    const demonSupport = { ...makeCard("player", "hornling", "stack"), manaCost: 1 };

    const state = makeState({
      board,
      turn: {
        activePlayer: "player",
        choices: [playerCard, demonSupport],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      cardInstanceIds: [playerCard.instanceId, demonSupport.instanceId],
      position: { row: 1, col: 1 },
    });

    expect(nextState.board[1][2]?.owner).toBe("player");
    expect(nextState.board[1][2]?.corruptedBy).toBe("player");
    expect(countBoardFamilies(nextState.board, "player").demon).toBe(3);
  });

  it("flips an adjacent enemy card immediately on strict superiority", () => {
    const board = makeBoard();
    board[1][1] = makeBoardCard("enemy", "sapling", "target", 1, 1);
    const playerCard = makeCard("player", "badger", "hand");

    const state = makeState({
      board,
      turn: {
        index: 3,
        roundTurn: 3,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 1, col: 0 },
    });

    expect(nextState.board[1][1]?.owner).toBe("player");
    expect(nextState.metrics.totalFlips).toBe(1);
  });

  it("does not flip when touching values are equal", () => {
    const board = makeBoard();
    board[1][1] = makeBoardCard("enemy", "badger", "target", 1, 1);
    const playerCard = makeCard("player", "foxfire", "hand");

    const state = makeState({
      board,
      turn: {
        index: 3,
        roundTurn: 3,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 1, col: 0 },
    });

    expect(nextState.board[1][1]?.owner).toBe("enemy");
    expect(nextState.metrics.totalFlips).toBe(0);
  });

  it("does not flip when the placed side is lower", () => {
    const board = makeBoard();
    board[1][1] = makeBoardCard("enemy", "mole", "target", 1, 1);
    const playerCard = makeCard("player", "sapling", "hand");

    const state = makeState({
      board,
      turn: {
        index: 3,
        roundTurn: 3,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 0, col: 1 },
    });

    expect(nextState.board[1][1]?.owner).toBe("enemy");
    expect(nextState.metrics.totalFlips).toBe(0);
  });

  it("can flip multiple adjacent enemy cards from one placement", () => {
    const board = makeBoard();
    board[0][1] = makeBoardCard("enemy", "badger", "top", 0, 1);
    board[1][2] = makeBoardCard("enemy", "foxfire", "right", 1, 2);
    board[2][1] = makeBoardCard("enemy", "stag", "bottom", 2, 1);
    const playerCard = withSides(makeCard("player", "hornling", "hand"), {
      top: 4,
      right: 4,
      bottom: 4,
      left: 1,
    });

    const state = makeState({
      board,
      turn: {
        index: 4,
        roundTurn: 4,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 1, col: 1 },
    });

    expect(nextState.board[0][1]?.owner).toBe("player");
    expect(nextState.board[1][2]?.owner).toBe("player");
    expect(nextState.board[2][1]?.owner).toBe("player");
    expect(nextState.metrics.totalFlips).toBe(3);
  });

  it("never fights allied cards", () => {
    const board = makeBoard();
    board[1][1] = makeBoardCard("player", "sapling", "ally", 1, 1);
    const playerCard = makeCard("player", "badger", "hand");

    const state = makeState({
      board,
      turn: {
        index: 2,
        roundTurn: 2,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 1, col: 0 },
    });

    expect(nextState.board[1][1]?.owner).toBe("player");
    expect(nextState.metrics.totalFlips).toBe(0);
  });

  it("does not deal champion damage during placement combat", () => {
    const board = makeBoard();
    board[1][1] = makeBoardCard("enemy", "sapling", "target", 1, 1);
    const playerCard = makeCard("player", "badger", "hand");

    const state = makeState({
      board,
      champions: {
        player: { health: 20, maxHealth: 20 },
        enemy: { health: 20, maxHealth: 20 },
      },
      turn: {
        index: 5,
        roundTurn: 5,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 1, col: 0 },
    });

    expect(nextState.champions.player.health).toBe(20);
    expect(nextState.champions.enemy.health).toBe(20);
  });
});

describe("card effects", () => {
  it("deals real direct champion damage after a flip effect", () => {
    const board = makeBoard();
    board[1][1] = withSides(makeBoardCard("enemy", "sapling", "target", 1, 1), {
      top: 1,
      right: 1,
      bottom: 1,
      left: 2,
    });
    const playerCard = {
      ...withSides(makeCard("player", "badger", "direct"), {
        top: 1,
        right: 4,
        bottom: 1,
        left: 1,
      }),
      effects: [{ trigger: "on-flip", kind: "deal-damage", amount: 1, minFlips: 1 } as const],
    };
    const state = makeState({
      board,
      champions: {
        player: { health: 20, maxHealth: 20 },
        enemy: { health: 20, maxHealth: 20 },
      },
      turn: {
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 1, col: 0 },
    });

    expect(nextState.board[1][1]?.owner).toBe("player");
    expect(nextState.champions.enemy.health).toBe(19);
    expect(nextState.lastMove?.effectEvents).toContainEqual(
      expect.objectContaining({
        kind: "deal-damage",
        amount: 1,
      }),
    );
  });

  it("uses shield as a real defensive resource against round-end damage", () => {
    const board = [
      [null, makeBoardCard("player", "sapling", "p01", 0, 1), makeBoardCard("enemy", "owl", "e02", 0, 2)],
      [makeBoardCard("player", "sapling", "p10", 1, 0), makeBoardCard("player", "badger", "p11", 1, 1), makeBoardCard("enemy", "owl", "e12", 1, 2)],
      [makeBoardCard("player", "sapling", "p20", 2, 0), makeBoardCard("enemy", "owl", "e21", 2, 1), makeBoardCard("player", "badger", "p22", 2, 2)],
    ] satisfies Array<Array<BoardCard | null>>;
    const playerCard = {
      ...makeCard("player", "sapling", "shield"),
      effects: [{ trigger: "on-play", kind: "gain-shield", amount: 2 } as const],
    };
    const state = makeState({
      board,
      turn: {
        index: 9,
        roundTurn: 9,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 0, col: 0 },
    });

    expect(nextState.lastMove?.roundEnded).toBe(true);
    expect(nextState.lastMove?.roundEndSummary?.damageApplied).toEqual({
      player: 3 * GAME_CONFIG.roundDamagePerControlledCard - 2,
      enemy: 6 * GAME_CONFIG.roundDamagePerControlledCard,
    });
    expect(nextState.champions.player.health).toBe(
      GAME_CONFIG.championStartingHealth - (3 * GAME_CONFIG.roundDamagePerControlledCard - 2),
    );
    expect(nextState.lastMove?.effectEvents).toContainEqual(
      expect.objectContaining({
        kind: "gain-shield",
        amount: 2,
      }),
    );
  });

  it("turns a draw effect into one extra card on the next owner turn", () => {
    const playerCard = {
      ...makeCard("player", "heron", "draw"),
      effects: [{ trigger: "on-play", kind: "draw-next-turn", amount: 1 } as const],
    };
    const playerReserve = [
      makeCard("player", "sapling", "d1"),
      makeCard("player", "badger", "d2"),
      makeCard("player", "heron", "d3"),
      makeCard("player", "foxfire", "d4"),
      makeCard("player", "mole", "d5"),
    ];
    const state = makeState({
      players: {
        player: {
          id: "player",
          drawPile: playerReserve,
          discardPile: [],
          reshuffles: 0,
        },
        enemy: {
          id: "enemy",
          drawPile: [],
          discardPile: [],
          reshuffles: 0,
        },
      },
      turn: {
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const afterPlayerMove = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 0, col: 0 },
    });
    const nextPlayerTurn = passTurn(afterPlayerMove);

    expect(afterPlayerMove.combat.player.nextTurnDrawBonus).toBe(1);
    expect(nextPlayerTurn.turn.activePlayer).toBe("player");
    expect(nextPlayerTurn.turn.choices).toHaveLength(5);
    expect(nextPlayerTurn.combat.player.nextTurnDrawBonus).toBe(0);
  });

  it("applies self-boost effects before flip comparison", () => {
    const board = makeBoard();
    board[1][1] = withSides(makeBoardCard("enemy", "sapling", "target", 1, 1), {
      top: 1,
      right: 1,
      bottom: 1,
      left: 3,
    });
    const playerCard = {
      ...withSides(makeCard("player", "sapling", "boost"), {
        top: 1,
        right: 3,
        bottom: 1,
        left: 1,
      }),
      effects: [
        {
          trigger: "on-play",
          kind: "boost-self",
          amount: 1,
          directions: "strongest",
          condition: "adjacent-enemy",
        } as const,
      ],
    };
    const state = makeState({
      board,
      turn: {
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 1, col: 0 },
    });

    expect(nextState.board[1][0]?.sides.right).toBe(4);
    expect(nextState.board[1][1]?.owner).toBe("player");
    expect(nextState.lastMove?.effectEvents).toContainEqual(
      expect.objectContaining({
        kind: "boost-self",
        amount: 1,
      }),
    );
  });

  it("only triggers edge-conditioned effects on an edge cell", () => {
    const edgeCard = {
      ...withSides(makeCard("player", "path-ranger", "edge"), {
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
      }),
      effects: [
        {
          trigger: "on-play",
          kind: "boost-self",
          amount: 1,
          directions: "all",
          condition: "edge",
        } as const,
      ],
    };
    const centerCard = {
      ...edgeCard,
      instanceId: "player-path-ranger-center",
    };

    const edgeState = makeState({
      turn: {
        activePlayer: "player",
        choices: [edgeCard],
      },
    });
    const centerState = makeState({
      turn: {
        activePlayer: "player",
        choices: [centerCard],
      },
    });

    const afterEdge = applyMove(edgeState, {
      cardInstanceId: edgeCard.instanceId,
      position: { row: 0, col: 1 },
    });
    const afterCenter = applyMove(centerState, {
      cardInstanceId: centerCard.instanceId,
      position: { row: 1, col: 1 },
    });

    expect(afterEdge.board[0][1]?.sides).toEqual({ top: 3, right: 3, bottom: 3, left: 3 });
    expect(afterEdge.lastMove?.effectEvents).toHaveLength(1);
    expect(afterCenter.board[1][1]?.sides).toEqual({ top: 2, right: 2, bottom: 2, left: 2 });
    expect(afterCenter.lastMove?.effectEvents).toHaveLength(0);
  });

  it("requires family setup before combo effects scale", () => {
    const comboEffect = {
      trigger: "on-play",
      kind: "gain-shield",
      amount: 1,
      requiredFamilyCount: 2,
      scaleWithFamilyCount: true,
      maxScale: 2,
    } as const;
    const underbuiltBoard = makeBoard();
    underbuiltBoard[0][0] = makeBoardCard("player", "field-knight", "support", 0, 0);
    const underbuiltCard = {
      ...makeCard("player", "field-knight", "underbuilt"),
      effects: [comboEffect],
    };
    const underbuiltState = makeState({
      board: underbuiltBoard,
      turn: {
        activePlayer: "player",
        choices: [underbuiltCard],
      },
    });

    const afterUnderbuilt = applyMove(underbuiltState, {
      cardInstanceId: underbuiltCard.instanceId,
      position: { row: 1, col: 1 },
    });

    expect(afterUnderbuilt.combat.player.shield).toBe(0);
    expect(afterUnderbuilt.lastMove?.effectEvents).toHaveLength(0);

    const builtBoard = makeBoard();
    const builtCard = {
      ...makeCard("player", "field-knight", "built"),
      manaCost: 1,
      effects: [comboEffect],
    };
    const builtSupportA = { ...makeCard("player", "field-knight", "built-a"), manaCost: 1 };
    const builtSupportB = { ...makeCard("player", "field-knight", "built-b"), manaCost: 1 };
    const builtState = makeState({
      board: builtBoard,
      turn: {
        activePlayer: "player",
        choices: [builtCard, builtSupportA, builtSupportB],
      },
    });

    const afterBuilt = applyMove(builtState, {
      cardInstanceId: builtCard.instanceId,
      cardInstanceIds: [builtCard.instanceId, builtSupportA.instanceId, builtSupportB.instanceId],
      position: { row: 1, col: 1 },
    });

    expect(afterBuilt.combat.player.shield).toBe(2);
    expect(afterBuilt.lastMove?.effectEvents).toContainEqual(
      expect.objectContaining({
        kind: "gain-shield",
        amount: 2,
        description: expect.stringContaining("combo x2"),
      }),
    );
  });
});

describe("round end on a full 3x3 board", () => {
  it("counts control correctly and applies damage from each controlled card", () => {
    const board = [
      [null, makeBoardCard("player", "sapling", "p01", 0, 1), makeBoardCard("enemy", "owl", "e02", 0, 2)],
      [makeBoardCard("player", "sapling", "p10", 1, 0), makeBoardCard("player", "badger", "p11", 1, 1), makeBoardCard("enemy", "owl", "e12", 1, 2)],
      [makeBoardCard("player", "sapling", "p20", 2, 0), makeBoardCard("enemy", "owl", "e21", 2, 1), makeBoardCard("player", "badger", "p22", 2, 2)],
    ] satisfies Array<Array<BoardCard | null>>;
    const playerCard = makeCard("player", "sapling", "last");
    const state = makeState({
      board,
      turn: {
        index: 9,
        roundTurn: 9,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 0, col: 0 },
    });

    expect(nextState.lastMove?.roundEnded).toBe(true);
    expect(nextState.lastMove?.roundEndSummary?.control).toEqual({ player: 6, enemy: 3 });
    expect(nextState.lastMove?.roundEndSummary?.controlDifference).toBe(3);
    expect(nextState.lastMove?.roundEndSummary?.damageApplied).toEqual({
      player: 3 * GAME_CONFIG.roundDamagePerControlledCard,
      enemy: 6 * GAME_CONFIG.roundDamagePerControlledCard,
    });
    expect(nextState.champions.player.health).toBe(
      GAME_CONFIG.championStartingHealth - 3 * GAME_CONFIG.roundDamagePerControlledCard,
    );
    expect(nextState.champions.enemy.health).toBe(
      GAME_CONFIG.championStartingHealth - 6 * GAME_CONFIG.roundDamagePerControlledCard,
    );
  });

  it("clears the board after round end and moves all board cards to discard by current owner", () => {
    const board = [
      [makeBoardCard("enemy", "owl", "e00", 0, 0), makeBoardCard("enemy", "owl", "e01", 0, 1), makeBoardCard("enemy", "owl", "e02", 0, 2)],
      [makeBoardCard("enemy", "owl", "e10", 1, 0), null, makeBoardCard("enemy", "sapling", "target", 1, 2)],
      [makeBoardCard("player", "sapling", "p20", 2, 0), makeBoardCard("player", "badger", "p21", 2, 1), makeBoardCard("player", "badger", "p22", 2, 2)],
    ] satisfies Array<Array<BoardCard | null>>;
    const playerCard = makeCard("player", "badger", "last");
    const state = makeState({
      board,
      turn: {
        index: 9,
        roundTurn: 9,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const playerDiscardBefore = state.players.player.discardPile.length;
    const enemyDiscardBefore = state.players.enemy.discardPile.length;
    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 1, col: 1 },
    });

    expect(nextState.board.flat().every((cell) => cell === null)).toBe(true);
    expect(nextState.players.player.discardPile.length + nextState.players.enemy.discardPile.length).toBe(
      playerDiscardBefore + enemyDiscardBefore + 9,
    );
    expect(
      nextState.players.player.discardPile.some(
        (card) => card.instanceId === "enemy-sapling-target" && card.owner === "player",
      ),
    ).toBe(true);
  });

  it("ends the match immediately when a champion reaches zero at round end", () => {
    const board = [
      [null, makeBoardCard("player", "sapling", "p01", 0, 1), makeBoardCard("enemy", "owl", "e02", 0, 2)],
      [makeBoardCard("player", "sapling", "p10", 1, 0), makeBoardCard("player", "badger", "p11", 1, 1), makeBoardCard("enemy", "owl", "e12", 1, 2)],
      [makeBoardCard("player", "sapling", "p20", 2, 0), makeBoardCard("enemy", "owl", "e21", 2, 1), makeBoardCard("player", "badger", "p22", 2, 2)],
    ] satisfies Array<Array<BoardCard | null>>;
    const playerCard = makeCard("player", "sapling", "last");
    const state = makeState({
      board,
      champions: {
        player: { health: 10, maxHealth: 20 },
        enemy: { health: 3, maxHealth: 20 },
      },
      turn: {
        index: 9,
        roundTurn: 9,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 0, col: 0 },
    });

    expect(nextState.result?.winner).toBe("player");
    expect(nextState.result?.reason).toBe("champion-ko");
  });

  it("rerolls a fresh random starter at the beginning of the next round", () => {
    const board = [
      [null, makeBoardCard("player", "sapling", "p01", 0, 1), makeBoardCard("enemy", "owl", "e02", 0, 2)],
      [makeBoardCard("player", "sapling", "p10", 1, 0), makeBoardCard("player", "badger", "p11", 1, 1), makeBoardCard("enemy", "owl", "e12", 1, 2)],
      [makeBoardCard("player", "sapling", "p20", 2, 0), makeBoardCard("enemy", "owl", "e21", 2, 1), makeBoardCard("player", "badger", "p22", 2, 2)],
    ] satisfies Array<Array<BoardCard | null>>;
    const playerCard = makeCard("player", "sapling", "last");
    const state = makeState({
      seed: 19,
      rngState: 19,
      board,
      turn: {
        index: 9,
        roundTurn: 9,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 0, col: 0 },
    });

    expect(nextState.result).toBeNull();
    expect(nextState.round.number).toBe(2);
    expect(nextState.turn.roundTurn).toBe(1);
    expect(nextState.turn.activePlayer).toBe(nextState.round.startingPlayer);
    expect(nextState.round.coinFace).toBe(nextState.round.startingPlayer === "player" ? "sun" : "moon");
  });

  it("breaks a simultaneous zero-zero knockout with board advantage instead of a draw", () => {
    const board = [
      [null, makeBoardCard("player", "sapling", "p01", 0, 1), makeBoardCard("enemy", "owl", "e02", 0, 2)],
      [makeBoardCard("player", "sapling", "p10", 1, 0), makeBoardCard("player", "badger", "p11", 1, 1), makeBoardCard("enemy", "owl", "e12", 1, 2)],
      [makeBoardCard("player", "sapling", "p20", 2, 0), makeBoardCard("enemy", "owl", "e21", 2, 1), makeBoardCard("player", "badger", "p22", 2, 2)],
    ] satisfies Array<Array<BoardCard | null>>;
    const playerCard = makeCard("player", "sapling", "last");
    const state = makeState({
      board,
      champions: {
        player: { health: 3 * GAME_CONFIG.roundDamagePerControlledCard, maxHealth: 20 },
        enemy: { health: 6 * GAME_CONFIG.roundDamagePerControlledCard, maxHealth: 20 },
      },
      turn: {
        index: 9,
        roundTurn: 9,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 0, col: 0 },
    });

    expect(nextState.result?.winner).toBe("player");
    expect(nextState.result?.reason).toBe("double-ko");
    expect(nextState.champions.player.health).toBe(0);
    expect(nextState.champions.enemy.health).toBe(0);
  });

  it("makes the side with the lower final health lose on a simultaneous knockout", () => {
    const board = [
      [null, makeBoardCard("player", "sapling", "p01", 0, 1), makeBoardCard("enemy", "owl", "e02", 0, 2)],
      [makeBoardCard("player", "sapling", "p10", 1, 0), makeBoardCard("player", "badger", "p11", 1, 1), makeBoardCard("enemy", "owl", "e12", 1, 2)],
      [makeBoardCard("player", "sapling", "p20", 2, 0), makeBoardCard("enemy", "owl", "e21", 2, 1), makeBoardCard("player", "badger", "p22", 2, 2)],
    ] satisfies Array<Array<BoardCard | null>>;
    const playerCard = makeCard("player", "sapling", "last");
    const state = makeState({
      board,
      champions: {
        player: { health: 5, maxHealth: 20 },
        enemy: { health: 10, maxHealth: 20 },
      },
      turn: {
        index: 9,
        roundTurn: 9,
        activePlayer: "player",
        choices: [playerCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 0, col: 0 },
    });

    expect(nextState.result?.winner).toBe("player");
    expect(nextState.result?.reason).toBe("double-ko");
    expect(nextState.champions.player.health).toBe(-1);
    expect(nextState.champions.enemy.health).toBe(-2);
  });
});

describe("control and persistence", () => {
  it("reports current control on the live board", () => {
    const board = makeBoard();
    board[0][0] = makeBoardCard("player", "sapling", "p00", 0, 0);
    board[0][1] = makeBoardCard("enemy", "sapling", "e01", 0, 1);
    board[2][2] = makeBoardCard("player", "badger", "p22", 2, 2);

    const state = makeState({ board });

    expect(getControlTotals(state)).toEqual({ player: 2, enemy: 1 });
  });

  it("reshuffles discard back into draw on a later turn", () => {
    const enemyCard = makeCard("enemy", "sapling", "hand");
    const playerDiscard = [
      makeCard("player", "sapling", "r1"),
      makeCard("player", "badger", "r2"),
      makeCard("player", "heron", "r3"),
      makeCard("player", "foxfire", "r4"),
    ];
    const state = makeState({
      round: { number: 3 },
      players: {
        player: {
          id: "player",
          drawPile: [],
          discardPile: playerDiscard,
          reshuffles: 0,
        },
        enemy: {
          id: "enemy",
          drawPile: [],
          discardPile: [],
          reshuffles: 0,
        },
      },
      turn: {
        index: 9,
        roundTurn: 2,
        activePlayer: "enemy",
        choices: [enemyCard],
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: enemyCard.instanceId,
      position: { row: 0, col: 0 },
    });

    expect(nextState.turn.activePlayer).toBe("player");
    expect(nextState.turn.choices).toHaveLength(4);
    expect(nextState.players.player.reshuffles).toBe(1);
  });

  it("re-randomizes each new hand from the full available draw pile", () => {
    const enemyCard = makeCard("enemy", "sapling", "hand");
    const playerDrawPile = [
      makeCard("player", "sapling", "d1"),
      makeCard("player", "badger", "d2"),
      makeCard("player", "heron", "d3"),
      makeCard("player", "foxfire", "d4"),
      makeCard("player", "mole", "d5"),
    ];
    const state = makeState({
      rngState: 12345,
      players: {
        player: {
          id: "player",
          drawPile: playerDrawPile,
          discardPile: [],
          reshuffles: 0,
        },
        enemy: {
          id: "enemy",
          drawPile: [],
          discardPile: [],
          reshuffles: 0,
        },
      },
      turn: {
        index: 9,
        roundTurn: 2,
        activePlayer: "enemy",
        choices: [enemyCard],
      },
    });

    const expected = shuffleWithSeed(playerDrawPile, state.rngState);
    const nextState = applyMove(state, {
      cardInstanceId: enemyCard.instanceId,
      position: { row: 0, col: 0 },
    });

    expect(nextState.turn.activePlayer).toBe("player");
    expect(nextState.turn.choices.map((card) => card.instanceId)).toEqual(
      expected.items.slice(0, 5).map((card) => card.instanceId),
    );
    expect(nextState.players.player.drawPile.map((card) => card.instanceId)).toEqual(
      expected.items.slice(5).map((card) => card.instanceId),
    );
  });

  it("puts unplayed hand cards back into the next random pool while used cards stay unavailable on the board", () => {
    const playedCard = makeCard("player", "sapling", "hand-a");
    const handB = makeCard("player", "badger", "hand-b");
    const handC = makeCard("player", "heron", "hand-c");
    const handD = makeCard("player", "foxfire", "hand-d");
    const reserveCard = makeCard("player", "mole", "reserve");
    const state = makeState({
      rngState: 6789,
      players: {
        player: {
          id: "player",
          drawPile: [reserveCard],
          discardPile: [],
          reshuffles: 0,
        },
        enemy: {
          id: "enemy",
          drawPile: [],
          discardPile: [],
          reshuffles: 0,
        },
      },
      turn: {
        index: 1,
        roundTurn: 1,
        activePlayer: "player",
        choices: [playedCard, handB, handC, handD],
      },
    });

    const afterPlayerMove = applyMove(state, {
      cardInstanceId: playedCard.instanceId,
      position: { row: 0, col: 0 },
    });
    const expectedPool = [reserveCard, handB, handC, handD];
    const expected = shuffleWithSeed(expectedPool, afterPlayerMove.rngState);

    expect(afterPlayerMove.turn.activePlayer).toBe("enemy");
    expect(afterPlayerMove.turn.choices).toHaveLength(0);

    const nextPlayerState = passTurn(afterPlayerMove);

    expect(nextPlayerState.turn.activePlayer).toBe("player");
    expect(nextPlayerState.turn.choices.map((card) => card.instanceId)).toEqual(
      expected.items.map((card) => card.instanceId),
    );
    expect(nextPlayerState.turn.choices.some((card) => card.instanceId === playedCard.instanceId)).toBe(false);
  });

  it("resolves repeated dead turns with the no-draw tiebreakers", () => {
    const state = makeState({
      champions: {
        player: { health: 12, maxHealth: 20 },
        enemy: { health: 9, maxHealth: 20 },
      },
      players: {
        player: { id: "player", drawPile: [], discardPile: [], reshuffles: 0 },
        enemy: { id: "enemy", drawPile: [], discardPile: [], reshuffles: 0 },
      },
      turn: {
        index: 1,
        roundTurn: 1,
        activePlayer: "player",
        choices: [],
      },
      emptyTurnStreak: 0,
    });

    const afterFirstPass = passTurn(state);

    expect(afterFirstPass.result?.winner).toBe("player");
    expect(afterFirstPass.result?.reason).toBe("stalemate");
  });

  it("ends the current round instead of the whole match when repeated dead turns have board state", () => {
    const board = makeBoard();
    board[0][0] = makeBoardCard("player", "sapling", "leader", 0, 0);
    board[0][1] = makeBoardCard("player", "badger", "support", 0, 1);
    board[1][1] = makeBoardCard("enemy", "ember-imp", "threat", 1, 1);

    const state = makeState({
      board,
      champions: {
        player: { health: 12, maxHealth: 20 },
        enemy: { health: 12, maxHealth: 20 },
      },
      players: {
        player: { id: "player", drawPile: [], discardPile: [], reshuffles: 0 },
        enemy: { id: "enemy", drawPile: [], discardPile: [], reshuffles: 0 },
      },
      turn: {
        index: 4,
        roundTurn: 4,
        activePlayer: "player",
        choices: [],
      },
      emptyTurnStreak: 0,
    });

    const afterFirstPass = passTurn(state);

    expect(afterFirstPass.result).toBeNull();
    expect(afterFirstPass.round.number).toBe(state.round.number + 1);
    expect(afterFirstPass.metrics.roundsCompleted).toBe(state.metrics.roundsCompleted + 1);
    expect(afterFirstPass.metrics.totalRoundEndOccupancy).toBe(3);
    expect(afterFirstPass.champions.player.health).toBe(12 - GAME_CONFIG.roundDamagePerControlledCard);
    expect(afterFirstPass.champions.enemy.health).toBe(12 - 2 * GAME_CONFIG.roundDamagePerControlledCard);
    expect(afterFirstPass.board.flat().every((cell) => cell === null)).toBe(true);
  });
});

describe("enemy profiles and powers", () => {
  it("applies battle cry on the first aggro move of the round", () => {
    const board = makeBoard();
    board[1][1] = withSides(makeBoardCard("player", "sapling", "target", 1, 1), {
      top: 1,
      right: 1,
      bottom: 1,
      left: 4,
    });
    const enemyCard = withSides(makeCard("enemy", "sapling", "hand"), {
      top: 1,
      right: 4,
      bottom: 1,
      left: 1,
    });
    const state = makeState({
      board,
      turn: {
        index: 3,
        roundTurn: 3,
        activePlayer: "enemy",
        choices: [enemyCard],
      },
      enemyProfile: getEnemyProfile("aggro"),
      enemyPowerState: {
        battleCryReady: true,
        secondChanceReady: false,
        roarReady: false,
        refineReady: false,
        relentlessControlBonus: 0,
        lastRenewRound: null,
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: enemyCard.instanceId,
      position: { row: 1, col: 0 },
    });

    expect(nextState.board[1][1]?.owner).toBe("enemy");
    expect(nextState.lastMove?.impacts[0]?.attackerValue).toBe(5);
    expect(nextState.enemyPowerState?.battleCryReady).toBe(false);
  });

  it("lets the ravager flip on equality from the center thanks to roar and the center buff", () => {
    const board = makeBoard();
    board[1][2] = withSides(makeBoardCard("player", "sapling", "target", 1, 2), {
      top: 1,
      right: 1,
      bottom: 1,
      left: 5,
    });
    const enemyCard = withSides(makeCard("enemy", "sapling", "hand"), {
      top: 1,
      right: 4,
      bottom: 1,
      left: 1,
    });
    const state = makeState({
      board,
      turn: {
        index: 3,
        roundTurn: 3,
        activePlayer: "enemy",
        choices: [enemyCard],
      },
      enemyProfile: getEnemyProfile("ravager"),
      enemyPowerState: {
        battleCryReady: false,
        secondChanceReady: false,
        roarReady: true,
        refineReady: false,
        relentlessControlBonus: 0,
        lastRenewRound: null,
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: enemyCard.instanceId,
      position: { row: 1, col: 1 },
    });

    expect(nextState.board[1][2]?.owner).toBe("enemy");
    expect(nextState.lastMove?.impacts[0]?.attackerValue).toBe(5);
    expect(nextState.lastMove?.impacts[0]?.defenderValue).toBe(5);
    expect(nextState.enemyPowerState?.roarReady).toBe(false);
  });

  it("gives swarm an extra draw and trims the weakest option before the enemy acts", () => {
    const weakEnemyCard = {
      ...getCardArchetype("sapling"),
      id: "swarm-weak",
      name: "Swarm Weak",
      sides: { top: 1, right: 1, bottom: 1, left: 1 },
    };
    const strongEnemyCards = Array.from({ length: 5 }, (_, index) => ({
      ...getCardArchetype("badger"),
      id: `swarm-strong-${index + 1}`,
      name: `Swarm Strong ${index + 1}`,
      sides: { top: 4, right: 4, bottom: 4, left: 4 },
    }));

    const state = createMatch({
      deckPresetId: "starter10",
      seed: 21,
      startingPlayer: "enemy",
      enemyProfile: getEnemyProfile("swarm"),
      enemyCards: [weakEnemyCard, ...strongEnemyCards],
    });

    expect(state.turn.activePlayer).toBe("enemy");
    expect(state.turn.choices).toHaveLength(5);
    expect(state.players.enemy.discardPile).toHaveLength(1);
    expect(state.players.enemy.discardPile[0]?.archetypeId).toBe("swarm-weak");
    expect(state.turn.choices.some((card) => card.archetypeId === "swarm-weak")).toBe(false);
  });

  it("adds fortress control bonus from corners at round end", () => {
    const board = [
      [
        withSides(makeBoardCard("enemy", "sapling", "e00", 0, 0), { top: 5, right: 5, bottom: 5, left: 5 }),
        withSides(makeBoardCard("player", "sapling", "p01", 0, 1), { top: 5, right: 5, bottom: 5, left: 5 }),
        withSides(makeBoardCard("enemy", "sapling", "e02", 0, 2), { top: 5, right: 5, bottom: 5, left: 5 }),
      ],
      [
        withSides(makeBoardCard("player", "sapling", "p10", 1, 0), { top: 5, right: 5, bottom: 5, left: 5 }),
        withSides(makeBoardCard("player", "sapling", "p11", 1, 1), { top: 5, right: 5, bottom: 5, left: 5 }),
        withSides(makeBoardCard("enemy", "sapling", "e12", 1, 2), { top: 5, right: 5, bottom: 5, left: 5 }),
      ],
      [
        withSides(makeBoardCard("enemy", "sapling", "e20", 2, 0), { top: 5, right: 5, bottom: 5, left: 5 }),
        withSides(makeBoardCard("enemy", "sapling", "e21", 2, 1), { top: 5, right: 5, bottom: 5, left: 5 }),
        null,
      ],
    ] satisfies Array<Array<BoardCard | null>>;
    const playerCard = withSides(makeCard("player", "sapling", "last"), {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1,
    });
    const state = makeState({
      board,
      turn: {
        index: 9,
        roundTurn: 9,
        activePlayer: "player",
        choices: [playerCard],
      },
      enemyProfile: getEnemyProfile("fortress"),
      enemyPowerState: {
        battleCryReady: false,
        secondChanceReady: false,
        roarReady: false,
        refineReady: false,
        relentlessControlBonus: 0,
        lastRenewRound: null,
      },
    });

    const nextState = applyMove(state, {
      cardInstanceId: playerCard.instanceId,
      position: { row: 2, col: 2 },
    });

    expect(nextState.lastMove?.roundEnded).toBe(true);
    expect(nextState.lastMove?.roundEndSummary?.control).toEqual({ player: 4, enemy: 8 });
    expect(nextState.lastMove?.roundEndSummary?.damageApplied).toEqual({
      player: 8 * GAME_CONFIG.roundDamagePerControlledCard,
      enemy: 4 * GAME_CONFIG.roundDamagePerControlledCard,
    });
  });
});
