import { getLuckyCharmDefinition } from "@/core/config/luckyCharms";
import { createCardInstance, createRandomRareLuckyCharmCard } from "@/core/cards";
import {
  getCardBalanceScore,
  getCardCornerValue,
  getCardEdgeValue,
  getCardFusionValue,
  getCardSpikeValue,
} from "@/core/deck-analysis";
import { pickWithSeed, shuffleWithSeed } from "@/core/utils/rng";
import { DIRECTIONS } from "@/core/types";
import type {
  CardInstance,
  MatchState,
  PlayerCharmActionAvailability,
  PlayerCharmState,
  LuckyCharmId,
  TrainedBotWeights,
} from "@/core/types";

function cloneCardInstance(card: CardInstance): CardInstance {
  return {
    ...card,
    sides: { ...card.sides },
    temporaryScope: card.temporaryScope ?? null,
    createdByCharmId: card.createdByCharmId ?? null,
    corruptedBy: card.corruptedBy ?? null,
  };
}

function hasPlayerCharm(state: MatchState, charmId: LuckyCharmId): boolean {
  return state.playerCharms.includes(charmId);
}

function getStrongestDirection(card: Pick<CardInstance, "sides">) {
  return [...DIRECTIONS].sort((left, right) => {
    if (card.sides[left] !== card.sides[right]) {
      return card.sides[right] - card.sides[left];
    }

    return left.localeCompare(right);
  })[0];
}

export function createInitialPlayerCharmState(charmIds: LuckyCharmId[]): PlayerCharmState {
  return {
    cardsPlayedThisRound: 0,
    playerTurnsTakenThisRound: 0,
    firstCombatDrawPenaltyApplied: false,
    fireflyRerollUsedThisRound: false,
    fireflyReshufflePenaltyPending: charmIds.includes("firefly-wing"),
    reflectionCopyUsedThisCombat: false,
    roundDamageBonus: 0,
    enemyVirtualControlBonus: 0,
  };
}

export function listPlayerCharmDefinitions(charmIds: LuckyCharmId[]) {
  return charmIds.map((charmId) => getLuckyCharmDefinition(charmId));
}

export function listPlayerCharmActions(state: MatchState): PlayerCharmActionAvailability[] {
  const actions: PlayerCharmActionAvailability[] = [];

  if (hasPlayerCharm(state, "firefly-wing")) {
    actions.push({
      id: "firefly-reroll",
      label: "Aile de luciole",
      description: "Reroll la main une fois cette manche.",
      available:
        !state.result &&
        state.turn.activePlayer === "player" &&
        state.turn.choices.length > 0 &&
        !state.playerCharmState.fireflyRerollUsedThisRound,
      requiresSelectedCard: false,
    });
  }

  if (hasPlayerCharm(state, "reflection-ring")) {
    actions.push({
      id: "reflection-copy",
      label: "Anneau des reflets",
      description: "Copie la carte choisie une fois pendant ce combat.",
      available:
        !state.result &&
        state.turn.activePlayer === "player" &&
        state.turn.choices.length > 0 &&
        !state.playerCharmState.reflectionCopyUsedThisCombat,
      requiresSelectedCard: true,
    });
  }

  return actions;
}

export function getPlayerNextDrawPreview(state: MatchState): CardInstance[] {
  if (!hasPlayerCharm(state, "clearing-eye") || state.round.number > 3) {
    return [];
  }

  return state.players.player.drawPile.slice(0, 2).map((card) => cloneCardInstance(card));
}

export function applyCombatStartPlayerCharmSetup(state: MatchState): MatchState {
  let nextState = state;

  if (hasPlayerCharm(nextState, "broken-bell")) {
    const rareCard = createRandomRareLuckyCharmCard(
      nextState.rngState,
      `player-broken-bell-${nextState.seed}`,
      "broken-bell",
      "combat",
    );
    nextState = {
      ...nextState,
      rngState: rareCard.seed,
      champions: {
        ...nextState.champions,
        player: {
          ...nextState.champions.player,
          health: nextState.champions.player.health - 1,
        },
      },
      players: {
        ...nextState.players,
        player: {
          ...nextState.players.player,
          drawPile: [createCardInstance("player", rareCard.card, 0), ...nextState.players.player.drawPile],
        },
      },
    };
  }

  if (hasPlayerCharm(nextState, "spring-tear") && nextState.players.player.drawPile.length > 0) {
    const picked = pickWithSeed(nextState.players.player.drawPile, nextState.rngState);
    nextState = {
      ...nextState,
      rngState: picked.seed,
      players: {
        ...nextState.players,
        player: {
          ...nextState.players.player,
          drawPile: nextState.players.player.drawPile.filter((card) => card.instanceId !== picked.item.instanceId),
          discardPile: [...nextState.players.player.discardPile, cloneCardInstance(picked.item)],
        },
      },
      playerCharmState: {
        ...nextState.playerCharmState,
        firstCombatDrawPenaltyApplied: true,
      },
    };
  }

  return nextState;
}

export function useFireflyReroll(state: MatchState): MatchState {
  if (
    state.result ||
    state.turn.activePlayer !== "player" ||
    state.turn.choices.length === 0 ||
    !hasPlayerCharm(state, "firefly-wing") ||
    state.playerCharmState.fireflyRerollUsedThisRound
  ) {
    return state;
  }

  const mergedPool = [...state.players.player.drawPile, ...state.turn.choices];
  const shuffled = mergedPool.length > 1 ? shuffleWithSeed(mergedPool, state.rngState) : { items: mergedPool, seed: state.rngState };
  const nextChoices = shuffled.items.slice(0, state.config.cardsPerTurn);
  const nextDrawPile = shuffled.items.slice(nextChoices.length);

  return {
    ...state,
    rngState: shuffled.seed,
    players: {
      ...state.players,
      player: {
        ...state.players.player,
        drawPile: nextDrawPile,
      },
    },
    turn: {
      ...state.turn,
      choices: nextChoices,
    },
    playerCharmState: {
      ...state.playerCharmState,
      fireflyRerollUsedThisRound: true,
    },
  };
}

export function useReflectionCopy(state: MatchState, cardInstanceId: string): MatchState {
  if (
    state.result ||
    state.turn.activePlayer !== "player" ||
    !hasPlayerCharm(state, "reflection-ring") ||
    state.playerCharmState.reflectionCopyUsedThisCombat
  ) {
    return state;
  }

  const sourceCard = state.turn.choices.find((card) => card.instanceId === cardInstanceId);
  if (!sourceCard) {
    return state;
  }

  const copyCard = cloneCardInstance(sourceCard);
  const strongestDirection = getStrongestDirection(copyCard);
  copyCard.instanceId = `${sourceCard.instanceId}-reflection`;
  copyCard.temporaryScope = "round";
  copyCard.createdByCharmId = "reflection-ring";
  copyCard.sourceType = "charm";
  copyCard.sides = {
    ...copyCard.sides,
    [strongestDirection]: Math.max(1, copyCard.sides[strongestDirection] - 1),
  };

  return {
    ...state,
    turn: {
      ...state.turn,
      choices: [...state.turn.choices, copyCard],
    },
    playerCharmState: {
      ...state.playerCharmState,
      reflectionCopyUsedThisCombat: true,
    },
  };
}

function sumSides(card: Pick<CardInstance, "sides">): number {
  return Object.values(card.sides).reduce((sum, value) => sum + value, 0);
}

function resolvePlanWeight(weights: TrainedBotWeights | null | undefined, key: keyof Pick<
  TrainedBotWeights,
  "aggressionPlanBias" | "controlPlanBias" | "tempoPlanBias" | "fusionPlanBias" | "precisionPlanBias"
>): number {
  return weights?.[key] ?? 0;
}

function scoreCardForAutomatedCharmUse(
  card: CardInstance,
  weights: TrainedBotWeights | null | undefined,
): number {
  return (
    sumSides(card) +
    getCardSpikeValue(card) * (0.42 + resolvePlanWeight(weights, "aggressionPlanBias") * 0.028) +
    (getCardCornerValue(card) + getCardEdgeValue(card)) * (0.14 + resolvePlanWeight(weights, "controlPlanBias") * 0.016) +
    getCardBalanceScore(card) * (0.15 + resolvePlanWeight(weights, "tempoPlanBias") * 0.014) +
    getCardFusionValue(card) * (0.1 + resolvePlanWeight(weights, "fusionPlanBias") * 0.01) +
    Math.min(...Object.values(card.sides)) * (0.32 + resolvePlanWeight(weights, "precisionPlanBias") * 0.02)
  );
}

export function applyAutomatedPlayerCharmActions(
  state: MatchState,
  weights?: TrainedBotWeights | null,
): MatchState {
  if (state.result || state.turn.activePlayer !== "player") {
    return state;
  }

  let nextState = state;

  if (
    hasPlayerCharm(nextState, "reflection-ring") &&
    !nextState.playerCharmState.reflectionCopyUsedThisCombat &&
    nextState.turn.choices.length > 0
  ) {
    const strongestCard = [...nextState.turn.choices].sort((left, right) => {
      const leftScore = scoreCardForAutomatedCharmUse(left, weights);
      const rightScore = scoreCardForAutomatedCharmUse(right, weights);
      if (leftScore !== rightScore) {
        return rightScore - leftScore;
      }

      return left.instanceId.localeCompare(right.instanceId);
    })[0];

    if (strongestCard && scoreCardForAutomatedCharmUse(strongestCard, weights) >= 14.5) {
      nextState = useReflectionCopy(nextState, strongestCard.instanceId);
    }
  }

  if (
    hasPlayerCharm(nextState, "firefly-wing") &&
    !nextState.playerCharmState.fireflyRerollUsedThisRound &&
    nextState.turn.choices.length > 0
  ) {
    const averageHandScore =
      nextState.turn.choices.reduce((sum, card) => sum + scoreCardForAutomatedCharmUse(card, weights), 0) /
      nextState.turn.choices.length;
    const targetThreshold =
      14.4 +
      resolvePlanWeight(weights, "tempoPlanBias") * 0.18 +
      resolvePlanWeight(weights, "precisionPlanBias") * 0.12 -
      resolvePlanWeight(weights, "aggressionPlanBias") * 0.08;
    if (averageHandScore <= targetThreshold) {
      nextState = useFireflyReroll(nextState);
    }
  }

  return nextState;
}

export function isRoundTemporaryCard(card: Pick<CardInstance, "temporaryScope">): boolean {
  return card.temporaryScope === "round";
}

export function isCombatTemporaryCard(card: Pick<CardInstance, "temporaryScope">): boolean {
  return card.temporaryScope === "combat";
}
