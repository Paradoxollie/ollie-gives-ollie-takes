"use client";

import { useEffect, useEffectEvent, useMemo, useRef, useState } from "react";

import type { BattleResolutionRecap } from "@/lib/battle-resolution";
import { createBattleResolutionRecap, hasUndismissedBattleResolutionRecap } from "@/lib/battle-resolution";
import type { RoundCoinTossRecap } from "@/lib/round-coin-toss";
import { createRoundCoinTossRecap } from "@/lib/round-coin-toss";
import {
  applyMove,
  canPlaceCard,
  createMatch,
  getControlTotals,
  getCurrentChoices,
  passTurn,
  previewMove,
  serializeMatchState,
  applyAutomatedPlayerCharmActions,
  useFireflyReroll,
  useReflectionCopy,
} from "@/core";
import { championBot } from "@/core/bots";
import type { Bot } from "@/core/bots";
import { DEFAULT_DECK_PRESET_ID } from "@/core/config/decks";
import type {
  CardArchetype,
  CardInstance,
  ControlTotals,
  LuckyCharmId,
  MatchEnemyProfile,
  MatchState,
  Position,
  PreviewMove,
  TrainedBotWeights,
} from "@/core/types";

interface UseBattleControllerOptions {
  seed: number;
  enabled?: boolean;
  playerCardIds?: string[];
  enemyCardIds?: string[];
  playerCards?: CardArchetype[];
  enemyCards?: CardArchetype[];
  enemyProfile?: MatchEnemyProfile | null;
  playerCharmIds?: LuckyCharmId[];
  playerBot?: Bot | null;
  playerWeights?: TrainedBotWeights | null;
  enemyBot?: Bot;
  playerSearchDepth?: number;
  playerBeamWidth?: number;
  enemySearchDepth?: number;
  enemyBeamWidth?: number;
}

interface BattleController {
  match: MatchState | null;
  hand: CardInstance[];
  selectedCardId: string | null;
  selectedCardIds: string[];
  selectedCard: CardInstance | null;
  selectedCards: CardInstance[];
  selectedManaCost: number;
  availableMana: number;
  targetPosition: Position | null;
  canConfirmPlacement: boolean;
  hoveredPosition: Position | null;
  hoverPreview: PreviewMove | null;
  canHumanInteract: boolean;
  control: ControlTotals;
  debugState: string;
  resolutionRecap: BattleResolutionRecap | null;
  roundCoinTossRecap: RoundCoinTossRecap | null;
  roundCoinTossCanConfirm: boolean;
  restart: () => void;
  dismissResolutionRecap: () => void;
  dismissRoundCoinTossRecap: () => void;
  triggerFireflyReroll: () => void;
  triggerReflectionCopy: (cardInstanceId: string) => void;
  selectCard: (cardInstanceId: string) => void;
  selectTargetCell: (position: Position) => void;
  confirmPlacement: () => void;
  hoverCell: (position: Position | null) => void;
  advanceTime: (ms: number) => void;
  renderText: () => string;
}

const EMPTY_CONTROL: ControlTotals = {
  player: 0,
  enemy: 0,
};

const POST_AI_RESOLUTION_LOCK_MS = 720;
const PLAYER_RECAP_REVEAL_DELAY_MS = 420;
const ENEMY_RECAP_REVEAL_DELAY_MS = 980;
const ROUND_COIN_TOSS_CONFIRM_DELAY_MS = 1_950;

function createFreshMatch(
  seed: number,
  playerCardIds?: string[],
  enemyCardIds?: string[],
  playerCards?: CardArchetype[],
  enemyCards?: CardArchetype[],
  enemyProfile?: MatchEnemyProfile | null,
  playerCharmIds?: LuckyCharmId[],
): MatchState {
  return createMatch({
    deckPresetId: DEFAULT_DECK_PRESET_ID,
    seed,
    playerCardIds,
    enemyCardIds,
    playerCards,
    enemyCards,
    enemyProfile,
    playerCharmIds,
  });
}

export function useBattleController({
  seed,
  enabled = true,
  playerCardIds,
  enemyCardIds,
  playerCards,
  enemyCards,
  enemyProfile = null,
  playerCharmIds,
  playerBot = null,
  playerWeights = null,
  enemyBot = championBot,
  playerSearchDepth,
  playerBeamWidth,
  enemySearchDepth,
  enemyBeamWidth,
}: UseBattleControllerOptions): BattleController {
  const playerDeckKey = playerCardIds?.join("|") ?? "";
  const enemyDeckKey = enemyCardIds?.join("|") ?? "";
  const playerCardsKey = playerCards?.map((card) => `${card.id}:${card.rarity}:${card.sourceType}`).join("|") ?? "";
  const enemyCardsKey = enemyCards?.map((card) => `${card.id}:${card.rarity}:${card.sourceType}`).join("|") ?? "";
  const playerCharmsKey = playerCharmIds?.join("|") ?? "";
  const enemyProfileKey = enemyProfile ? `${enemyProfile.id}:${enemyProfile.tier}` : "none";
  const playerBotKey = playerBot ? `${playerBot.id}:${playerBot.label}` : "human";
  const enemyBotKey = `${enemyBot.id}:${enemyBot.label}`;
  const [match, setMatch] = useState<MatchState | null>(() =>
    enabled ? createFreshMatch(seed, playerCardIds, enemyCardIds, playerCards, enemyCards, enemyProfile, playerCharmIds) : null,
  );
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);
  const [targetPosition, setTargetPosition] = useState<Position | null>(null);
  const [hoveredPosition, setHoveredPosition] = useState<Position | null>(null);
  const [interactionLocked, setInteractionLocked] = useState(false);
  const [resolutionRecap, setResolutionRecap] = useState<BattleResolutionRecap | null>(null);
  const [roundCoinTossRecap, setRoundCoinTossRecap] = useState<RoundCoinTossRecap | null>(null);
  const [roundCoinTossCanConfirm, setRoundCoinTossCanConfirm] = useState(false);
  const virtualTimeBufferMs = useRef(0);
  const roundCoinTossVirtualBufferMs = useRef(0);
  const interactionUnlockTimerRef = useRef<number | null>(null);
  const resolutionRevealTimerRef = useRef<number | null>(null);
  const roundCoinTossReadyTimerRef = useRef<number | null>(null);
  const roundCoinTossCanConfirmRef = useRef(false);
  const seenResolutionRecapIdRef = useRef<string | null>(null);
  const dismissedResolutionRecapIdRef = useRef<string | null>(null);
  const seenRoundCoinTossIdRef = useRef<string | null>(null);

  function clearInteractionLockTimer() {
    if (interactionUnlockTimerRef.current !== null) {
      window.clearTimeout(interactionUnlockTimerRef.current);
      interactionUnlockTimerRef.current = null;
    }
  }

  function scheduleInteractionUnlock(delayMs: number) {
    clearInteractionLockTimer();
    setInteractionLocked(true);
    interactionUnlockTimerRef.current = window.setTimeout(() => {
      setInteractionLocked(false);
      interactionUnlockTimerRef.current = null;
    }, delayMs);
  }

  function setRoundCoinTossConfirmState(value: boolean) {
    roundCoinTossCanConfirmRef.current = value;
    setRoundCoinTossCanConfirm(value);
  }

  function clearResolutionRevealTimer() {
    if (resolutionRevealTimerRef.current !== null) {
      window.clearTimeout(resolutionRevealTimerRef.current);
      resolutionRevealTimerRef.current = null;
    }
  }

  function clearRoundCoinTossReadyTimer() {
    if (roundCoinTossReadyTimerRef.current !== null) {
      window.clearTimeout(roundCoinTossReadyTimerRef.current);
      roundCoinTossReadyTimerRef.current = null;
    }
  }

  const pendingResolutionRecapId = useMemo(() => {
    const pendingRecap = match ? createBattleResolutionRecap(match) : null;
    if (!pendingRecap || dismissedResolutionRecapIdRef.current === pendingRecap.id) {
      return null;
    }

    return pendingRecap.id;
  }, [match, resolutionRecap]);
  const hasBlockingResolutionRecap = Boolean(resolutionRecap || pendingResolutionRecapId);

  const dismissRoundCoinTossRecap = useEffectEvent(() => {
    if (!roundCoinTossCanConfirmRef.current) {
      return;
    }

    clearRoundCoinTossReadyTimer();
    roundCoinTossVirtualBufferMs.current = 0;
    setRoundCoinTossConfirmState(false);
    setRoundCoinTossRecap(null);
    setInteractionLocked(false);
  });

  function scheduleRoundCoinTossConfirmation(delayMs: number) {
    clearRoundCoinTossReadyTimer();
    roundCoinTossVirtualBufferMs.current = 0;
    setRoundCoinTossConfirmState(false);
    setInteractionLocked(true);
    roundCoinTossReadyTimerRef.current = window.setTimeout(() => {
      setRoundCoinTossConfirmState(true);
      roundCoinTossReadyTimerRef.current = null;
    }, delayMs);
  }

  const performAutomatedTurn = useEffectEvent(() => {
    if (hasBlockingResolutionRecap) {
      return;
    }

    setMatch((current) => {
      if (
        !current ||
        current.result ||
        hasUndismissedBattleResolutionRecap(current, dismissedResolutionRecapIdRef.current)
      ) {
        return current;
      }

      const preparedState =
        current.turn.activePlayer === "player" ? applyAutomatedPlayerCharmActions(current, playerWeights) : current;

      const activeBot = preparedState.turn.activePlayer === "player" ? playerBot : enemyBot;
      if (!activeBot) {
        return preparedState;
      }

      const decision = activeBot.chooseMove(preparedState, {
        playerId: preparedState.turn.activePlayer,
        seed: preparedState.rngState,
        searchDepth: preparedState.turn.activePlayer === "player" ? playerSearchDepth : enemySearchDepth,
        beamWidth: preparedState.turn.activePlayer === "player" ? playerBeamWidth : enemyBeamWidth,
      });
      return decision.move ? applyMove(preparedState, decision.move) : passTurn(preparedState);
    });
    scheduleInteractionUnlock(POST_AI_RESOLUTION_LOCK_MS);
    setSelectedCardIds([]);
    setTargetPosition(null);
    setHoveredPosition(null);
  });

  const restart = useEffectEvent(() => {
    setMatch(
      enabled ? createFreshMatch(seed, playerCardIds, enemyCardIds, playerCards, enemyCards, enemyProfile, playerCharmIds) : null,
    );
    setSelectedCardIds([]);
    setTargetPosition(null);
    setHoveredPosition(null);
    setInteractionLocked(false);
    setResolutionRecap(null);
    setRoundCoinTossRecap(null);
    setRoundCoinTossConfirmState(false);
    clearInteractionLockTimer();
    clearResolutionRevealTimer();
    clearRoundCoinTossReadyTimer();
    virtualTimeBufferMs.current = 0;
    roundCoinTossVirtualBufferMs.current = 0;
    seenResolutionRecapIdRef.current = null;
    dismissedResolutionRecapIdRef.current = null;
    seenRoundCoinTossIdRef.current = null;
  });

  const dismissResolutionRecap = useEffectEvent(() => {
    if (resolutionRecap) {
      dismissedResolutionRecapIdRef.current = resolutionRecap.id;
    }
    clearResolutionRevealTimer();
    setResolutionRecap(null);
    clearInteractionLockTimer();
    setInteractionLocked(false);
  });

  const triggerFireflyReroll = useEffectEvent(() => {
    if (hasBlockingResolutionRecap) {
      return;
    }

    setMatch((current) =>
      !current || hasUndismissedBattleResolutionRecap(current, dismissedResolutionRecapIdRef.current)
        ? current
        : useFireflyReroll(current),
    );
    setSelectedCardIds([]);
    setTargetPosition(null);
    setHoveredPosition(null);
  });

  const triggerReflectionCopy = useEffectEvent((cardInstanceId: string) => {
    if (hasBlockingResolutionRecap) {
      return;
    }

    setMatch((current) =>
      !current || hasUndismissedBattleResolutionRecap(current, dismissedResolutionRecapIdRef.current)
        ? current
        : useReflectionCopy(current, cardInstanceId),
    );
  });

  useEffect(() => {
    setMatch(
      enabled ? createFreshMatch(seed, playerCardIds, enemyCardIds, playerCards, enemyCards, enemyProfile, playerCharmIds) : null,
    );
    setSelectedCardIds([]);
    setTargetPosition(null);
    setHoveredPosition(null);
    setInteractionLocked(false);
    setResolutionRecap(null);
    setRoundCoinTossRecap(null);
    setRoundCoinTossConfirmState(false);
    clearInteractionLockTimer();
    clearResolutionRevealTimer();
    clearRoundCoinTossReadyTimer();
    virtualTimeBufferMs.current = 0;
    roundCoinTossVirtualBufferMs.current = 0;
    seenResolutionRecapIdRef.current = null;
    dismissedResolutionRecapIdRef.current = null;
    seenRoundCoinTossIdRef.current = null;
  }, [
    enabled,
    enemyBeamWidth,
    enemyBotKey,
    enemyDeckKey,
    enemyCardsKey,
    enemyProfileKey,
    enemySearchDepth,
    playerBeamWidth,
    playerBotKey,
    playerCharmsKey,
    playerDeckKey,
    playerCardsKey,
    playerSearchDepth,
    seed,
  ]);

  useEffect(() => {
    if (!match || hasBlockingResolutionRecap || roundCoinTossRecap || match.result || match.turn.choices.length > 0) {
      return;
    }

    setSelectedCardIds([]);
    setTargetPosition(null);
    setHoveredPosition(null);
    setInteractionLocked(false);
    clearInteractionLockTimer();
    virtualTimeBufferMs.current = 0;
    setMatch((current) =>
      !current || current.result || current.turn.choices.length > 0 ? current : passTurn(current),
    );
  }, [hasBlockingResolutionRecap, match, roundCoinTossRecap]);

  useEffect(() => {
    if (
      !match ||
      hasBlockingResolutionRecap ||
      roundCoinTossRecap ||
      match.result ||
      (match.turn.activePlayer === "player" && !playerBot) ||
      (match.turn.activePlayer === "enemy" && !enemyBot)
    ) {
      virtualTimeBufferMs.current = 0;
    }
  }, [enemyBot, hasBlockingResolutionRecap, match, playerBot, roundCoinTossRecap]);

  useEffect(() => {
    if (hasBlockingResolutionRecap) {
      return;
    }

    if (!match || match.result || match.turn.activePlayer !== "player" || playerBot) {
      setInteractionLocked(false);
      clearInteractionLockTimer();
    }
  }, [hasBlockingResolutionRecap, match, playerBot]);

  useEffect(() => {
    return () => {
      clearInteractionLockTimer();
      clearResolutionRevealTimer();
      clearRoundCoinTossReadyTimer();
    };
  }, []);

  useEffect(() => {
    if (
      !match ||
      hasBlockingResolutionRecap ||
      match.result ||
      match.turn.choices.length === 0 ||
      (match.turn.activePlayer === "player" && !playerBot) ||
      (match.turn.activePlayer === "enemy" && !enemyBot)
    ) {
      return;
    }

    if (roundCoinTossRecap) {
      return;
    }

    const timer = window.setTimeout(() => {
      performAutomatedTurn();
    }, match.config.aiDelayMs);

    return () => window.clearTimeout(timer);
  }, [enemyBot, hasBlockingResolutionRecap, match, performAutomatedTurn, playerBot, roundCoinTossRecap]);

  useEffect(() => {
    if (!match) {
      clearResolutionRevealTimer();
      setResolutionRecap(null);
      setRoundCoinTossConfirmState(false);
      seenResolutionRecapIdRef.current = null;
      dismissedResolutionRecapIdRef.current = null;
      return;
    }

    clearResolutionRevealTimer();
    const nextRecap = createBattleResolutionRecap(match);
    if (!nextRecap) {
      return;
    }

    if (seenResolutionRecapIdRef.current === nextRecap.id) {
      return;
    }

    seenResolutionRecapIdRef.current = nextRecap.id;
    clearInteractionLockTimer();
    clearResolutionRevealTimer();
    setInteractionLocked(true);
    setSelectedCardIds([]);
    setTargetPosition(null);
    setHoveredPosition(null);
    resolutionRevealTimerRef.current = window.setTimeout(() => {
      setResolutionRecap(nextRecap);
      resolutionRevealTimerRef.current = null;
    }, match.lastMove?.playerId === "enemy" ? ENEMY_RECAP_REVEAL_DELAY_MS : PLAYER_RECAP_REVEAL_DELAY_MS);
  }, [match]);

  useEffect(() => {
    if (!match || hasBlockingResolutionRecap) {
      return;
    }

    const nextRecap = createRoundCoinTossRecap(match);
    if (!nextRecap) {
      return;
    }

    if (seenRoundCoinTossIdRef.current === nextRecap.id) {
      return;
    }

    seenRoundCoinTossIdRef.current = nextRecap.id;
    clearInteractionLockTimer();
    setSelectedCardIds([]);
    setTargetPosition(null);
    setHoveredPosition(null);
    setRoundCoinTossRecap(nextRecap);
    scheduleRoundCoinTossConfirmation(ROUND_COIN_TOSS_CONFIRM_DELAY_MS);
  }, [hasBlockingResolutionRecap, match]);

  const hand = match && match.turn.activePlayer === "player" ? getCurrentChoices(match) : [];
  const selectedCards = selectedCardIds
    .map((instanceId) => hand.find((card) => card.instanceId === instanceId) ?? null)
    .filter((card): card is CardInstance => card !== null);
  const selectedCard = selectedCards[0] ?? null;
  const selectedCardId = selectedCard?.instanceId ?? null;
  const selectedManaCost = selectedCards.reduce((sum, card) => sum + card.manaCost, 0);
  const turnMana = match?.turn.availableMana ?? match?.config.turnMana ?? 0;
  const availableMana = Math.max(0, turnMana - selectedManaCost);
  const canHumanInteract = Boolean(
    match &&
      !match.result &&
      !hasBlockingResolutionRecap &&
      !roundCoinTossRecap &&
      match.turn.activePlayer === "player" &&
      !playerBot &&
      !interactionLocked,
  );
  const control = useMemo(() => (match ? getControlTotals(match) : EMPTY_CONTROL), [match]);
  const canConfirmPlacement = Boolean(
    match &&
      canHumanInteract &&
      targetPosition &&
      selectedCards.length > 0 &&
      canPlaceCard(match, targetPosition),
  );

  const hoverPreview = useMemo(() => {
    const previewPosition = targetPosition ?? hoveredPosition;
    if (!match || !canHumanInteract || selectedCards.length === 0 || !previewPosition || !canPlaceCard(match, previewPosition)) {
      return null;
    }

    return previewMove(match, {
      cardInstanceId: selectedCards[0].instanceId,
      cardInstanceIds: selectedCards.map((card) => card.instanceId),
      position: previewPosition,
    });
  }, [canHumanInteract, hoveredPosition, match, selectedCards, targetPosition]);

  const debugState = useMemo(
    () =>
      match
        ? JSON.stringify(
            {
              ...serializeMatchState(match),
              ui: {
                targetPosition,
                selectedCardIds,
                selectedManaCost,
                availableMana,
                resolutionRecap: resolutionRecap ? { id: resolutionRecap.id, phase: resolutionRecap.phase } : null,
                pendingResolutionRecapId,
                roundCoinToss: roundCoinTossRecap
                  ? {
                      id: roundCoinTossRecap.id,
                      roundNumber: roundCoinTossRecap.roundNumber,
                      startingPlayer: roundCoinTossRecap.startingPlayer,
                      canConfirm: roundCoinTossCanConfirm,
                    }
                  : null,
              },
            },
            null,
            2,
          )
        : JSON.stringify({ mode: "idle" }, null, 2),
    [
      availableMana,
      match,
      pendingResolutionRecapId,
      resolutionRecap,
      roundCoinTossCanConfirm,
      roundCoinTossRecap,
      selectedCardIds,
      selectedManaCost,
      targetPosition,
    ],
  );

  useEffect(() => {
    if (!match || resolutionRecap || !canHumanInteract || hand.length === 0 || playerBot) {
      setHoveredPosition(null);
      return;
    }

    setSelectedCardIds((current) => {
      const next = current.filter((instanceId) => hand.some((card) => card.instanceId === instanceId));
      return next.length === current.length ? current : next;
    });

    if (targetPosition && !canPlaceCard(match, targetPosition)) {
      setTargetPosition(null);
    }
  }, [canHumanInteract, hand, match, playerBot, resolutionRecap, targetPosition]);

  return {
    match,
    hand,
    selectedCardId,
    selectedCardIds,
    selectedCard,
    selectedCards,
    selectedManaCost,
    availableMana,
    targetPosition,
    canConfirmPlacement,
    hoveredPosition,
    hoverPreview,
    canHumanInteract,
    control,
    debugState,
    resolutionRecap,
    roundCoinTossRecap,
    roundCoinTossCanConfirm,
    restart,
    dismissResolutionRecap,
    dismissRoundCoinTossRecap,
    triggerFireflyReroll,
    triggerReflectionCopy,
    selectCard(cardInstanceId) {
      if (!canHumanInteract) {
        return;
      }

      setSelectedCardIds((current) => {
        const clickedCard = hand.find((card) => card.instanceId === cardInstanceId);
        if (!clickedCard || !match) {
          return current;
        }

        if (current.includes(cardInstanceId)) {
          return current.filter((entry) => entry !== cardInstanceId);
        }

        if (current.length >= match.config.maxCardsPerMove) {
          return current;
        }

        const nextCost = current.reduce((sum, instanceId) => {
          const card = hand.find((entry) => entry.instanceId === instanceId);
          return sum + (card?.manaCost ?? 0);
        }, clickedCard.manaCost);

        if (nextCost > match.turn.availableMana) {
          return current;
        }

        return [...current, cardInstanceId];
      });
      setHoveredPosition(null);
    },
    selectTargetCell(position) {
      if (!canHumanInteract || !match || !canPlaceCard(match, position)) {
        return;
      }

      setTargetPosition(position);
      setHoveredPosition(position);
    },
    confirmPlacement() {
      if (!canConfirmPlacement || !match || !targetPosition || selectedCards.length === 0) {
        return;
      }

      const cardInstanceIds = selectedCards.map((card) => card.instanceId);
      setMatch((current) => {
        if (!current) {
          return current;
        }

        return applyMove(current, {
          cardInstanceId: cardInstanceIds[0],
          cardInstanceIds,
          position: targetPosition,
        });
      });
      setSelectedCardIds([]);
      setTargetPosition(null);
      setHoveredPosition(null);
    },
    hoverCell(position) {
      if (!canHumanInteract) {
        setHoveredPosition(null);
        return;
      }

      setHoveredPosition(position);
    },
    advanceTime(ms) {
      if (roundCoinTossRecap) {
        roundCoinTossVirtualBufferMs.current += ms;
        if (
          !roundCoinTossCanConfirmRef.current &&
          roundCoinTossVirtualBufferMs.current >= ROUND_COIN_TOSS_CONFIRM_DELAY_MS
        ) {
          clearRoundCoinTossReadyTimer();
          setRoundCoinTossConfirmState(true);
        }
        return;
      }

      if (
        !match ||
        hasBlockingResolutionRecap ||
        match.result ||
        (match.turn.activePlayer === "player" && !playerBot) ||
        (match.turn.activePlayer === "enemy" && !enemyBot)
      ) {
        virtualTimeBufferMs.current = 0;
        return;
      }

      virtualTimeBufferMs.current += ms;
      if (virtualTimeBufferMs.current >= match.config.aiDelayMs) {
        virtualTimeBufferMs.current = 0;
        performAutomatedTurn();
      }
    },
    renderText() {
      return match
        ? JSON.stringify({
            ...serializeMatchState(match),
            ui: {
              targetPosition,
              selectedCardIds,
              selectedManaCost,
              availableMana,
              resolutionRecap: resolutionRecap ? { id: resolutionRecap.id, phase: resolutionRecap.phase } : null,
              pendingResolutionRecapId,
              roundCoinToss: roundCoinTossRecap
                ? {
                    id: roundCoinTossRecap.id,
                    roundNumber: roundCoinTossRecap.roundNumber,
                    startingPlayer: roundCoinTossRecap.startingPlayer,
                    canConfirm: roundCoinTossCanConfirm,
                  }
                : null,
              spectator: Boolean(playerBot),
            },
          })
        : JSON.stringify({ mode: "idle" });
    },
  };
}
