import { DEFAULT_DECK_PRESET_ID, STARTER_DECK_PRESETS } from "@/core/config/decks";
import { GAME_CONFIG, POSITION_WEIGHTS } from "@/core/config/gameConfig";
import { createCardInstance, getCardArchetype } from "@/core/cards";
import { cloneCardEffects } from "@/core/card-effects";
import {
  applyCombatStartPlayerCharmSetup,
  createInitialPlayerCharmState,
  isRoundTemporaryCard,
} from "@/core/player-charms";
import {
  OPPOSITE_DIRECTION,
  calculateControl,
  countOccupiedCells,
  getAdjacentPositions,
  isInsideBoard,
  listEmptyPositions,
} from "@/core/utils/board";
import {
  cardCountsAsFamily,
  countBoardFamilies,
  getCardFamilyCount,
  getTraitBattleModifiers,
  getTraitControlBonus,
} from "@/core/traits";
import { mixSeed, nextRandom, shuffleWithSeed, pickWithSeed } from "@/core/utils/rng";
import { CARD_FAMILIES, DIRECTIONS } from "@/core/types";
import type {
  BattleResult,
  BoardCard,
  CardEffect,
  CardEffectEvent,
  CardArchetype,
  CardInstance,
  ChampionState,
  CombatImpact,
  ControlTotals,
  DeckPresetId,
  Direction,
  EnemyPowerState,
  LastMoveSummary,
  MatchEnemyProfile,
  MatchSettings,
  MatchState,
  MoveInput,
  PlayerId,
  PlayerCombatState,
  Position,
  PreviewMove,
  RoundEndSummary,
  TurnState,
} from "@/core/types";

function cloneBoard(board: Array<Array<BoardCard | null>>): Array<Array<BoardCard | null>> {
  return board.map((row) =>
    row.map((cell) =>
      cell
        ? {
            ...cell,
            sides: { ...cell.sides },
            effects: cloneCardEffects(cell.effects),
            stack: (cell.stack ?? []).map((stackCard) => ({
              ...stackCard,
              sides: { ...stackCard.sides },
              effects: cloneCardEffects(stackCard.effects),
              buildTags: stackCard.buildTags ? [...stackCard.buildTags] : undefined,
              preferredPositions: stackCard.preferredPositions ? [...stackCard.preferredPositions] : undefined,
              hybridLinks: stackCard.hybridLinks ? [...stackCard.hybridLinks] : undefined,
            })),
            stackFamilyCounts: { ...cell.stackFamilyCounts },
          }
        : null,
    ),
  );
}

function createBoard(boardSize: number): Array<Array<BoardCard | null>> {
  return Array.from({ length: boardSize }, () => Array.from({ length: boardSize }, () => null));
}

function cloneChampions(champions: Record<PlayerId, ChampionState>): Record<PlayerId, ChampionState> {
  return {
    player: { ...champions.player },
    enemy: { ...champions.enemy },
  };
}

function createInitialCombatState(): Record<PlayerId, PlayerCombatState> {
  return {
    player: { shield: 0, nextTurnDrawBonus: 0 },
    enemy: { shield: 0, nextTurnDrawBonus: 0 },
  };
}

function cloneCombatState(combat: Record<PlayerId, PlayerCombatState>): Record<PlayerId, PlayerCombatState> {
  return {
    player: { ...combat.player },
    enemy: { ...combat.enemy },
  };
}

function resetRoundCombatState(combat: Record<PlayerId, PlayerCombatState>): Record<PlayerId, PlayerCombatState> {
  return {
    player: { ...combat.player, shield: 0 },
    enemy: { ...combat.enemy, shield: 0 },
  };
}

function cloneEnemyProfile(profile: MatchEnemyProfile | null): MatchEnemyProfile | null {
  return profile
    ? {
        ...profile,
        biases: { ...profile.biases },
      }
    : null;
}

function cloneEnemyPowerState(powerState: EnemyPowerState | null): EnemyPowerState | null {
  return powerState ? { ...powerState } : null;
}

function cloneCardInstance(card: CardInstance): CardInstance {
  return {
    ...card,
    sides: { ...card.sides },
    effects: cloneCardEffects(card.effects),
    buildTags: card.buildTags ? [...card.buildTags] : undefined,
    preferredPositions: card.preferredPositions ? [...card.preferredPositions] : undefined,
    hybridLinks: card.hybridLinks ? [...card.hybridLinks] : undefined,
    temporaryScope: card.temporaryScope ?? null,
    createdByCharmId: card.createdByCharmId ?? null,
    corruptedBy: card.corruptedBy ?? null,
  };
}

function cloneBoostableCard<T extends CardInstance>(card: T): T {
  return {
    ...card,
    sides: { ...card.sides },
    effects: cloneCardEffects(card.effects),
    buildTags: card.buildTags ? [...card.buildTags] : undefined,
    preferredPositions: card.preferredPositions ? [...card.preferredPositions] : undefined,
    hybridLinks: card.hybridLinks ? [...card.hybridLinks] : undefined,
    temporaryScope: card.temporaryScope ?? null,
    createdByCharmId: card.createdByCharmId ?? null,
    corruptedBy: card.corruptedBy ?? null,
  };
}

function applyDirectionalBoost<T extends CardInstance>(card: T, direction: Direction, amount: number): T {
  return {
    ...cloneBoostableCard(card),
    sides: {
      ...card.sides,
      [direction]: Math.max(1, card.sides[direction] + amount),
    },
  };
}

function applyUniversalBoost<T extends CardInstance>(card: T, amount: number): T {
  return {
    ...cloneBoostableCard(card),
    sides: {
      top: card.sides.top + amount,
      right: card.sides.right + amount,
      bottom: card.sides.bottom + amount,
      left: card.sides.left + amount,
    },
  };
}

function getStrongestDirection(card: Pick<CardInstance | BoardCard, "sides">): Direction {
  return [...DIRECTIONS].sort((left, right) => {
    if (card.sides[left] !== card.sides[right]) {
      return card.sides[right] - card.sides[left];
    }

    return left.localeCompare(right);
  })[0];
}

function getWeakestDirection(card: Pick<CardInstance | BoardCard, "sides">): Direction {
  return [...DIRECTIONS].sort((left, right) => {
    if (card.sides[left] !== card.sides[right]) {
      return card.sides[left] - card.sides[right];
    }

    return left.localeCompare(right);
  })[0];
}

function hasPlayerCharm(state: MatchState, charmId: "first-breath" | "watcher-stone" | "spring-tear" | "lantern-mushroom" | "refuge-bark" | "firefly-wing" | "split-hazelnut" | "double-knot-rune" | "moss-dust" | "old-bridge-stone" | "balance-feather" | "ancient-sap" | "reflection-ring" | "broken-bell" | "clearing-eye"): boolean {
  return state.playerCharms.includes(charmId);
}

function hasAtLeastTwoEqualSides(card: Pick<CardInstance | BoardCard, "sides">): boolean {
  const counts = new Map<number, number>();
  for (const value of Object.values(card.sides)) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return [...counts.values()].some((count) => count >= 2);
}

function isPolarizedCard(card: Pick<CardInstance | BoardCard, "sides">): boolean {
  const values = Object.values(card.sides);
  return values.some((value) => value >= 6) && values.filter((value) => value <= 1).length >= 2;
}

function hasAtLeastTwoVeryLowSides(card: Pick<CardInstance | BoardCard, "sides">): boolean {
  return Object.values(card.sides).filter((value) => value <= 1).length >= 2;
}

function isCenterPosition(position: Position, boardSize: number): boolean {
  const center = Math.floor(boardSize / 2);
  return position.row === center && position.col === center;
}

function isEdgePosition(position: Position, boardSize: number): boolean {
  return (
    position.row === 0 ||
    position.row === boardSize - 1 ||
    position.col === 0 ||
    position.col === boardSize - 1
  );
}

function isCornerPosition(position: Position, boardSize: number): boolean {
  return (
    (position.row === 0 || position.row === boardSize - 1) &&
    (position.col === 0 || position.col === boardSize - 1)
  );
}

function clampValue(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function clampSideValueForState(state: MatchState, value: number): number {
  return clampValue(value, 1, state.config.maxCardSideValue);
}

function createEmptyFamilyCounts(): Partial<Record<CardInstance["family"], number>> {
  return Object.fromEntries(CARD_FAMILIES.map((family) => [family, 0])) as Partial<Record<CardInstance["family"], number>>;
}

export function getMoveCardInstanceIds(move: MoveInput): string[] {
  const rawIds = move.cardInstanceIds && move.cardInstanceIds.length > 0
    ? move.cardInstanceIds
    : move.cardInstanceId
      ? [move.cardInstanceId]
      : [];
  return rawIds.filter((id, index) => rawIds.indexOf(id) === index);
}

function getMovePrimaryCardId(move: MoveInput): string {
  const ids = getMoveCardInstanceIds(move);
  if (ids.length === 0) {
    throw new Error("Move must contain at least one card.");
  }

  return ids[0];
}

function getMoveCards(state: MatchState, move: MoveInput): CardInstance[] {
  const ids = getMoveCardInstanceIds(move);
  if (ids.length === 0) {
    throw new Error("Move must contain at least one card.");
  }

  if (ids.length > state.config.maxCardsPerMove) {
    throw new Error(`Move uses ${ids.length} cards, but the limit is ${state.config.maxCardsPerMove}.`);
  }

  return ids.map((instanceId) => {
    const card = state.turn.choices.find((choice) => choice.instanceId === instanceId);
    if (!card) {
      throw new Error(`Card ${instanceId} is not available this turn.`);
    }

    return card;
  });
}

export function getMoveManaCost(state: MatchState, move: MoveInput): number {
  return getMoveCards(state, move).reduce((sum, card) => sum + card.manaCost, 0);
}

function validateMoveMana(state: MatchState, cards: CardInstance[]): void {
  const manaCost = cards.reduce((sum, card) => sum + card.manaCost, 0);
  if (manaCost > state.config.turnMana) {
    throw new Error(`Move costs ${manaCost} mana, but only ${state.config.turnMana} is available.`);
  }
}

function combineBuildTags(cards: CardInstance[]): string[] | undefined {
  const tags = new Set(cards.flatMap((card) => card.buildTags ?? []));
  return tags.size > 0 ? [...tags].sort() : undefined;
}

function combinePreferredPositions(cards: CardInstance[]): CardInstance["preferredPositions"] {
  const positions = new Set(cards.flatMap((card) => card.preferredPositions ?? []));
  return positions.size > 0 ? [...positions].sort() as CardInstance["preferredPositions"] : undefined;
}

function combineHybridLinks(cards: CardInstance[]): CardInstance["hybridLinks"] {
  const links = new Set(cards.flatMap((card) => card.hybridLinks ?? []));
  return links.size > 0 ? [...links].sort() as CardInstance["hybridLinks"] : undefined;
}

function createStackFamilyCounts(cards: CardInstance[]): Partial<Record<CardInstance["family"], number>> {
  const counts = createEmptyFamilyCounts();
  for (const card of cards) {
    counts[card.family] = (counts[card.family] ?? 0) + 1;
  }

  return counts;
}

function aggregateStackSides(state: MatchState, cards: CardInstance[]): CardInstance["sides"] {
  return {
    top: clampSideValueForState(state, cards.reduce((sum, card) => sum + card.sides.top, 0)),
    right: clampSideValueForState(state, cards.reduce((sum, card) => sum + card.sides.right, 0)),
    bottom: clampSideValueForState(state, cards.reduce((sum, card) => sum + card.sides.bottom, 0)),
    left: clampSideValueForState(state, cards.reduce((sum, card) => sum + card.sides.left, 0)),
  };
}

function createStackAggregateCard(state: MatchState, cards: CardInstance[], position: Position): BoardCard {
  const leadCard = cards[0];
  const stackManaCost = cards.reduce((sum, card) => sum + card.manaCost, 0);
  const aggregateId = cards.length === 1
    ? leadCard.instanceId
    : `stack:${cards.map((card) => card.instanceId).join("+")}`;

  return {
    ...cloneCardInstance(leadCard),
    instanceId: aggregateId,
    name: cards.length === 1 ? leadCard.name : `${leadCard.name} +${cards.length - 1}`,
    sides: aggregateStackSides(state, cards),
    manaCost: stackManaCost,
    effects: cards.flatMap((card) => cloneCardEffects(card.effects)),
    buildTags: combineBuildTags(cards),
    preferredPositions: combinePreferredPositions(cards),
    hybridLinks: combineHybridLinks(cards),
    row: position.row,
    col: position.col,
    corruptedBy: null,
    stack: cards.map((card, index) => ({
      ...cloneCardInstance(card),
      stackIndex: index,
    })),
    stackSize: cards.length,
    stackManaCost,
    stackFamilyCounts: createStackFamilyCounts(cards),
  };
}

function hasAdjacentOwner(
  board: Array<Array<BoardCard | null>>,
  position: Position,
  owner: PlayerId,
): boolean {
  return getAdjacentPositions(position, board.length).some((adjacent) => {
    const card = board[adjacent.position.row][adjacent.position.col];
    return card?.owner === owner;
  });
}

function hasAdjacentEnemy(
  board: Array<Array<BoardCard | null>>,
  position: Position,
  owner: PlayerId,
): boolean {
  return getAdjacentPositions(position, board.length).some((adjacent) => {
    const card = board[adjacent.position.row][adjacent.position.col];
    return Boolean(card && card.owner !== owner);
  });
}

function isBehindOnBoard(board: Array<Array<BoardCard | null>>, owner: PlayerId): boolean {
  const control = calculateControl(board);
  return control[owner] <= control[getNextPlayer(owner)];
}

function countEffectFamilySetup(
  board: Array<Array<BoardCard | null>>,
  sourceCard: Pick<CardInstance, "owner" | "family" | "instanceId"> & Partial<Pick<BoardCard, "stackFamilyCounts">>,
  position: Position,
): number {
  const localFamilyCount = sourceCard.stackFamilyCounts?.[sourceCard.family];
  if (localFamilyCount !== undefined) {
    return localFamilyCount;
  }

  const baseCount = countBoardFamilies(board, sourceCard.owner)[sourceCard.family];
  const boardCard = board[position.row]?.[position.col] ?? null;
  return boardCard?.instanceId === sourceCard.instanceId ? baseCount : baseCount + 1;
}

function getEffectFamilyScale(
  effect: CardEffect,
  state: MatchState,
  sourceCard: Pick<CardInstance, "owner" | "family" | "instanceId"> & Partial<Pick<BoardCard, "stackFamilyCounts">>,
  position: Position,
): number {
  const familyCount = countEffectFamilySetup(state.board, sourceCard, position);
  const requiredCount = effect.requiredFamilyCount ?? 0;
  if (requiredCount > 0 && familyCount < requiredCount) {
    return 0;
  }

  if (!effect.scaleWithFamilyCount) {
    return 1;
  }

  const uncappedScale = requiredCount > 0 ? familyCount - requiredCount + 1 : familyCount;
  return clampValue(uncappedScale, 1, effect.maxScale ?? 3);
}

function cardEffectConditionMet(
  effect: CardEffect,
  state: MatchState,
  position: Position,
  owner: PlayerId,
  sourceCard: Pick<CardInstance, "owner" | "family" | "instanceId"> & Partial<Pick<BoardCard, "stackFamilyCounts">>,
): boolean {
  if (getEffectFamilyScale(effect, state, sourceCard, position) <= 0) {
    return false;
  }

  switch (effect.condition ?? "always") {
    case "always":
      return true;
    case "adjacent-ally":
      return hasAdjacentOwner(state.board, position, owner);
    case "adjacent-enemy":
      return hasAdjacentEnemy(state.board, position, owner);
    case "corner":
      return isCornerPosition(position, state.config.boardSize);
    case "center":
      return isCenterPosition(position, state.config.boardSize);
    case "behind-on-board":
      return isBehindOnBoard(state.board, owner);
  }
}

function getBoostDirections(card: CardInstance, effect: Extract<CardEffect, { kind: "boost-self" }>): Direction[] {
  if (effect.directions === "all") {
    return [...DIRECTIONS];
  }

  return [effect.directions === "strongest" ? getStrongestDirection(card) : getWeakestDirection(card)];
}

function describeBoostDirections(effect: Extract<CardEffect, { kind: "boost-self" }>): string {
  if (effect.directions === "all") {
    return "tous les cotes";
  }

  return effect.directions === "strongest" ? "le cote fort" : "le cote faible";
}

function createCardEffectEvent(
  playerId: PlayerId,
  sourceCard: Pick<CardInstance, "instanceId">,
  kind: CardEffectEvent["kind"],
  amount: number,
  description: string,
): CardEffectEvent {
  return {
    playerId,
    sourceCardInstanceId: sourceCard.instanceId,
    kind,
    amount,
    description,
  };
}

function applyCardBoostEffects<T extends CardInstance>(
  state: MatchState,
  card: T,
  position: Position,
): {
  card: T;
  effectEvents: CardEffectEvent[];
} {
  let nextCard = cloneBoostableCard(card);
  const effectEvents: CardEffectEvent[] = [];

  for (const effect of cloneCardEffects(nextCard.effects)) {
    if (effect.kind !== "boost-self" || !cardEffectConditionMet(effect, state, position, nextCard.owner, nextCard)) {
      continue;
    }

    const effectScale = getEffectFamilyScale(effect, state, nextCard, position);
    const directions = getBoostDirections(nextCard, effect);
    let totalIncrease = 0;
    const nextSides = { ...nextCard.sides };

    for (const direction of directions) {
      const previousValue = nextSides[direction];
      nextSides[direction] = clampValue(previousValue + effect.amount * effectScale, 1, state.config.maxCardSideValue);
      totalIncrease += nextSides[direction] - previousValue;
    }

    if (totalIncrease <= 0) {
      continue;
    }

    nextCard = {
      ...nextCard,
      sides: nextSides,
    } as T;
    effectEvents.push(
      createCardEffectEvent(
        nextCard.owner,
        nextCard,
        effect.kind,
        totalIncrease,
        `${nextCard.name}: +${totalIncrease} sur ${describeBoostDirections(effect)}${effectScale > 1 ? ` (combo x${effectScale})` : ""}.`,
      ),
    );
  }

  return {
    card: nextCard,
    effectEvents,
  };
}

function applyDirectDamageToChampion(
  champions: Record<PlayerId, ChampionState>,
  combat: Record<PlayerId, PlayerCombatState>,
  target: PlayerId,
  amount: number,
): {
  champions: Record<PlayerId, ChampionState>;
  combat: Record<PlayerId, PlayerCombatState>;
  damageApplied: number;
  blocked: number;
} {
  const nextChampions = cloneChampions(champions);
  const nextCombat = cloneCombatState(combat);
  const blocked = Math.min(nextCombat[target].shield, amount);
  const damageApplied = amount - blocked;

  nextCombat[target].shield -= blocked;
  nextChampions[target].health -= damageApplied;

  return {
    champions: nextChampions,
    combat: nextCombat,
    damageApplied,
    blocked,
  };
}

function resolveCardResourceEffects(options: {
  state: MatchState;
  sourceCard: BoardCard;
  flippedCount: number;
  champions: Record<PlayerId, ChampionState>;
  combat: Record<PlayerId, PlayerCombatState>;
}): {
  champions: Record<PlayerId, ChampionState>;
  combat: Record<PlayerId, PlayerCombatState>;
  effectEvents: CardEffectEvent[];
} {
  const { state, sourceCard, flippedCount } = options;
  let champions = cloneChampions(options.champions);
  let combat = cloneCombatState(options.combat);
  const effectEvents: CardEffectEvent[] = [];
  let directDamageBudget = state.config.maxDirectDamagePerMove;

  for (const effect of cloneCardEffects(sourceCard.effects)) {
    if (effect.kind === "boost-self") {
      continue;
    }

    if (effect.trigger === "on-flip" && flippedCount < (effect.minFlips ?? 1)) {
      continue;
    }

    if (!cardEffectConditionMet(effect, state, sourceCard, sourceCard.owner, sourceCard)) {
      continue;
    }

    const effectScale = getEffectFamilyScale(effect, state, sourceCard, sourceCard);
    const rawAmount = Math.max(0, effect.amount * (effect.trigger === "on-flip" ? flippedCount : 1) * effectScale);
    if (rawAmount <= 0) {
      continue;
    }

    if (effect.kind === "gain-shield") {
      const shieldRoom = Math.max(0, state.config.maxShieldPerPlayer - combat[sourceCard.owner].shield);
      const applied = Math.min(rawAmount, shieldRoom);
      if (applied <= 0) {
        continue;
      }

      combat = {
        ...combat,
        [sourceCard.owner]: {
          ...combat[sourceCard.owner],
          shield: combat[sourceCard.owner].shield + applied,
        },
      };
      effectEvents.push(
        createCardEffectEvent(
          sourceCard.owner,
          sourceCard,
          effect.kind,
          applied,
          `${sourceCard.name}: +${applied} bouclier${effectScale > 1 ? ` (combo x${effectScale})` : ""}.`,
        ),
      );
      continue;
    }

    if (effect.kind === "draw-next-turn") {
      const drawRoom = Math.max(0, state.config.maxNextTurnDrawBonus - combat[sourceCard.owner].nextTurnDrawBonus);
      const applied = Math.min(rawAmount, drawRoom);
      if (applied <= 0) {
        continue;
      }

      combat = {
        ...combat,
        [sourceCard.owner]: {
          ...combat[sourceCard.owner],
          nextTurnDrawBonus: combat[sourceCard.owner].nextTurnDrawBonus + applied,
        },
      };
      effectEvents.push(
        createCardEffectEvent(
          sourceCard.owner,
          sourceCard,
          effect.kind,
          applied,
          `${sourceCard.name}: +${applied} pioche au prochain tour${effectScale > 1 ? ` (combo x${effectScale})` : ""}.`,
        ),
      );
      continue;
    }

    const cappedDamage = Math.min(rawAmount, directDamageBudget);
    if (cappedDamage <= 0) {
      continue;
    }

    directDamageBudget -= cappedDamage;
    const target = getNextPlayer(sourceCard.owner);
    const damage = applyDirectDamageToChampion(champions, combat, target, cappedDamage);
    champions = damage.champions;
    combat = damage.combat;
    const blockedText = damage.blocked > 0 ? ` (${damage.blocked} bloque${damage.blocked > 1 ? "s" : ""})` : "";
    effectEvents.push(
      createCardEffectEvent(
        sourceCard.owner,
        sourceCard,
        effect.kind,
        damage.damageApplied,
        `${sourceCard.name}: ${damage.damageApplied} degat${damage.damageApplied > 1 ? "s" : ""} direct${damage.damageApplied > 1 ? "s" : ""}${blockedText}${effectScale > 1 ? ` (combo x${effectScale})` : ""}.`,
      ),
    );
  }

  return {
    champions,
    combat,
    effectEvents,
  };
}

function resolveImmediateDamageResult(options: {
  champions: Record<PlayerId, ChampionState>;
  board: Array<Array<BoardCard | null>>;
  fallbackWinner: PlayerId;
}): BattleResult | null {
  const { champions, board, fallbackWinner } = options;
  const playerDead = champions.player.health <= 0;
  const enemyDead = champions.enemy.health <= 0;

  if (!playerDead && !enemyDead) {
    return null;
  }

  if (playerDead && enemyDead) {
    const winner = resolveNoDrawWinner({
      champions,
      control: calculateControl(board),
      board,
      fallbackWinner,
    });
    return createBattleResult(winner, "double-ko", champions, "direct-damage");
  }

  return createBattleResult(playerDead ? "enemy" : "player", "champion-ko", champions, "direct-damage");
}

function createValueRecord(amount = 0): Record<PlayerId, number> {
  return {
    player: amount,
    enemy: amount,
  };
}

function createInitialEnemyPowerState(profile: MatchEnemyProfile | null): EnemyPowerState | null {
  if (!profile) {
    return null;
  }

  return {
    battleCryReady: profile.id === "aggro" || profile.id === "executioner",
    secondChanceReady: profile.id === "trickster",
    roarReady: profile.id === "ravager",
    refineReady: profile.id === "shaper",
    relentlessControlBonus: 0,
    lastRenewRound: null,
  };
}

function resetEnemyRoundPowerState(state: MatchState): EnemyPowerState | null {
  if (!state.enemyProfile) {
    return null;
  }

  const previous = state.enemyPowerState ?? createInitialEnemyPowerState(state.enemyProfile);
  return {
    battleCryReady: state.enemyProfile.id === "aggro" || state.enemyProfile.id === "executioner",
    secondChanceReady: state.enemyProfile.id === "trickster",
    roarReady: state.enemyProfile.id === "ravager",
    refineReady: previous?.refineReady ?? (state.enemyProfile.id === "shaper"),
    relentlessControlBonus: 0,
    lastRenewRound: previous?.lastRenewRound ?? null,
  };
}

function createDeckInstances(
  owner: PlayerId,
  presetId: DeckPresetId,
  cardIds?: string[],
  cards?: CardArchetype[],
): CardInstance[] {
  const preset = STARTER_DECK_PRESETS[presetId];
  if (!preset) {
    throw new Error(`Unknown deck preset: ${presetId}`);
  }

  if (cards && cards.length > 0) {
    return cards.map((card, index) => createCardInstance(owner, card, index));
  }

  const sourceCardIds = cardIds ?? preset.cardIds;
  return sourceCardIds.map((archetypeId, index) => createCardInstance(owner, getCardArchetype(archetypeId), index));
}

function createSharedPresetDecks(
  presetId: DeckPresetId,
  seed: number,
): {
  playerDeck: CardInstance[];
  enemyDeck: CardInstance[];
  seed: number;
} {
  const preset = STARTER_DECK_PRESETS[presetId];
  if (!preset) {
    throw new Error(`Unknown deck preset: ${presetId}`);
  }

  const requiredCardCount = preset.cardsPerPlayer * 2;
  if (preset.sharedPoolCardIds.length < requiredCardCount) {
    throw new Error(`Deck preset ${presetId} needs ${requiredCardCount} unique cards in its shared pool.`);
  }

  const shuffledPool = shuffleWithSeed([...preset.sharedPoolCardIds], seed);
  const playerCardIds = shuffledPool.items.slice(0, preset.cardsPerPlayer);
  const enemyCardIds = shuffledPool.items.slice(preset.cardsPerPlayer, requiredCardCount);

  return {
    playerDeck: playerCardIds.map((archetypeId, index) => createCardInstance("player", getCardArchetype(archetypeId), index)),
    enemyDeck: enemyCardIds.map((archetypeId, index) => createCardInstance("enemy", getCardArchetype(archetypeId), index)),
    seed: shuffledPool.seed,
  };
}

function drawCardsForTurn(state: MatchState, playerId: PlayerId, roundTurn: number): {
  drawPile: CardInstance[];
  discardPile: CardInstance[];
  choices: CardInstance[];
  seed: number;
  reshuffles: number;
  consumeFireflyReshufflePenalty: boolean;
} {
  let drawPile = [...state.players[playerId].drawPile];
  let discardPile = [...state.players[playerId].discardPile];
  let seed = state.rngState;
  let reshuffles = 0;
  let consumeFireflyReshufflePenalty = false;
  const extraDraw =
    playerId === "enemy" && state.enemyProfile?.id === "swarm" ? 1 : 0;
  const combatDrawBonus = state.combat[playerId].nextTurnDrawBonus;
  const responseDrawBonus =
    roundTurn === 2 && playerId !== state.round.startingPlayer ? state.config.secondPlayerFirstTurnDrawBonus : 0;
  const isPlayerFirstTurnOfRound = playerId === "player" && state.playerCharmState.playerTurnsTakenThisRound === 0;
  let cardsToDraw = state.config.cardsPerTurn + extraDraw + combatDrawBonus + responseDrawBonus;

  if (playerId === "player" && hasPlayerCharm(state, "spring-tear") && isPlayerFirstTurnOfRound) {
    cardsToDraw += 1;
  }

  if (playerId === "player" && hasPlayerCharm(state, "clearing-eye") && state.round.number === 4 && isPlayerFirstTurnOfRound) {
    cardsToDraw = Math.max(1, cardsToDraw - 1);
  }

  if (drawPile.length < cardsToDraw && discardPile.length > 0) {
    drawPile = [...drawPile, ...discardPile];
    discardPile = [];
    reshuffles += 1;
    if (playerId === "player" && state.playerCharmState.fireflyReshufflePenaltyPending) {
      cardsToDraw = Math.max(1, cardsToDraw - 1);
      consumeFireflyReshufflePenalty = true;
    }
  }

  if (drawPile.length > 1) {
    const shuffled = shuffleWithSeed(drawPile, seed);
    drawPile = shuffled.items;
    seed = shuffled.seed;
  }

  let choices = drawPile.slice(0, cardsToDraw);
  drawPile = drawPile.slice(choices.length);

  if (playerId === "player" && hasPlayerCharm(state, "spring-tear") && isPlayerFirstTurnOfRound && choices.length > 0) {
    const trimmed = pickWeakestChoice(choices);
    if (trimmed) {
      choices = choices.filter((card) => card.instanceId !== trimmed.instanceId);
      discardPile = [...discardPile, trimmed];
    }
  }

  return {
    drawPile,
    discardPile,
    choices,
    seed,
    reshuffles,
    consumeFireflyReshufflePenalty,
  };
}

function isOpeningResponseTurn(state: MatchState, playerId: PlayerId, roundTurn: number): boolean {
  return roundTurn === 2 && playerId !== state.round.startingPlayer;
}

function getNextPlayer(playerId: PlayerId): PlayerId {
  return playerId === "player" ? "enemy" : "player";
}

function getCoinFaceForPlayer(playerId: PlayerId) {
  return playerId === "player" ? "sun" : "moon";
}

function pickWeakestChoice(choices: CardInstance[]): CardInstance | null {
  if (choices.length === 0) {
    return null;
  }

  return [...choices].sort((left, right) => {
    const leftTotal = Object.values(left.sides).reduce((sum, value) => sum + value, 0);
    const rightTotal = Object.values(right.sides).reduce((sum, value) => sum + value, 0);
    if (leftTotal !== rightTotal) {
      return leftTotal - rightTotal;
    }

    return left.instanceId.localeCompare(right.instanceId);
  })[0];
}

function applyQuickDrawTrim(state: MatchState): MatchState {
  if (state.turn.activePlayer !== "enemy" || state.enemyProfile?.id !== "swarm" || state.turn.choices.length <= state.config.cardsPerTurn) {
    return state;
  }

  const discarded = pickWeakestChoice(state.turn.choices);
  if (!discarded) {
    return state;
  }

  return {
    ...state,
    turn: {
      ...state.turn,
      choices: state.turn.choices.filter((card) => card.instanceId !== discarded.instanceId),
    },
    players: {
      ...state.players,
      enemy: {
        ...state.players.enemy,
        discardPile: [...state.players.enemy.discardPile, discarded],
      },
    },
  };
}

function applyRefinePower(state: MatchState): MatchState {
  if (state.turn.activePlayer !== "enemy" || state.enemyProfile?.id !== "shaper" || !state.enemyPowerState?.refineReady) {
    return state;
  }

  if (state.turn.choices.length === 0) {
    return state;
  }

  const refinedTarget = [...state.turn.choices].sort((left, right) => {
    const leftScore = Object.values(left.sides).reduce((sum, value) => sum + value, 0) + (6 - left.sides[getWeakestDirection(left)]);
    const rightScore = Object.values(right.sides).reduce((sum, value) => sum + value, 0) + (6 - right.sides[getWeakestDirection(right)]);
    if (leftScore !== rightScore) {
      return rightScore - leftScore;
    }

    return left.instanceId.localeCompare(right.instanceId);
  })[0];

  const refined = applyDirectionalBoost(refinedTarget, getWeakestDirection(refinedTarget), 1);

  return {
    ...state,
    turn: {
      ...state.turn,
      choices: state.turn.choices.map((card) => (card.instanceId === refined.instanceId ? refined : card)),
    },
    enemyPowerState: {
      ...state.enemyPowerState!,
      refineReady: false,
    },
  };
}

function shouldUseSecondChance(state: MatchState): boolean {
  if (state.turn.activePlayer !== "enemy" || state.enemyProfile?.id !== "trickster" || !state.enemyPowerState?.secondChanceReady) {
    return false;
  }

  if (state.turn.choices.length === 0) {
    return false;
  }

  const legalMoves = listLegalMoves(state);
  if (legalMoves.length === 0) {
    return false;
  }

  const bestImmediateFlip = legalMoves.reduce((best, move) => {
    const preview = previewMove(state, move);
    return Math.max(best, preview.flippedCount);
  }, 0);

  return bestImmediateFlip === 0;
}

function rerollEnemyChoices(state: MatchState): MatchState {
  if (state.turn.activePlayer !== "enemy" || !state.enemyPowerState?.secondChanceReady) {
    return state;
  }

  const mergedPool = [...state.players.enemy.drawPile, ...state.turn.choices];
  const shuffled = mergedPool.length > 1 ? shuffleWithSeed(mergedPool, state.rngState) : { items: mergedPool, seed: state.rngState };
  const nextChoices = shuffled.items.slice(0, state.config.cardsPerTurn);
  const nextDrawPile = shuffled.items.slice(nextChoices.length);

  return {
    ...state,
    rngState: shuffled.seed,
    players: {
      ...state.players,
      enemy: {
        ...state.players.enemy,
        drawPile: nextDrawPile,
      },
    },
    turn: {
      ...state.turn,
      choices: nextChoices,
    },
    enemyPowerState: {
      ...state.enemyPowerState,
      secondChanceReady: false,
    },
  };
}

function rollRoundStarter(seed: number, forcedStarter?: PlayerId): {
  startingPlayer: PlayerId;
  coinFace: "sun" | "moon";
  seed: number;
} {
  if (forcedStarter) {
    return {
      startingPlayer: forcedStarter,
      coinFace: getCoinFaceForPlayer(forcedStarter),
      seed,
    };
  }

  const roll = nextRandom(seed);
  const startingPlayer = roll.value < 0.5 ? "player" : "enemy";

  return {
    startingPlayer,
    coinFace: getCoinFaceForPlayer(startingPlayer),
    seed: roll.seed,
  };
}

function applyEnemyRenew(state: MatchState, roundNumber: number): MatchState {
  if (state.enemyProfile?.id !== "warden" || roundNumber % 2 !== 0) {
    return state;
  }

  if (state.enemyPowerState?.lastRenewRound === roundNumber || state.players.enemy.discardPile.length === 0) {
    return state;
  }

  const sortedDiscard = [...state.players.enemy.discardPile].sort((left, right) => {
    const leftTotal = Object.values(left.sides).reduce((sum, value) => sum + value, 0);
    const rightTotal = Object.values(right.sides).reduce((sum, value) => sum + value, 0);
    if (leftTotal !== rightTotal) {
      return rightTotal - leftTotal;
    }

    return left.instanceId.localeCompare(right.instanceId);
  });
  const recovered = sortedDiscard[0];
  if (!recovered) {
    return state;
  }

  return {
    ...state,
    players: {
      ...state.players,
      enemy: {
        ...state.players.enemy,
        drawPile: [recovered, ...state.players.enemy.drawPile],
        discardPile: state.players.enemy.discardPile.filter((card) => card.instanceId !== recovered.instanceId),
      },
    },
    enemyPowerState: {
      ...state.enemyPowerState!,
      lastRenewRound: roundNumber,
    },
  };
}

function createBattleResult(
  winner: BattleResult["winner"],
  reason: BattleResult["reason"],
  champions: Record<PlayerId, ChampionState>,
  endingSource: BattleResult["endingSource"],
): BattleResult {
  return {
    winner,
    reason,
    endingSource,
    champions: cloneChampions(champions),
  };
}

function sumControlledBoardStrength(
  board: Array<Array<BoardCard | null>>,
  owner: PlayerId,
): number {
  return board.reduce(
    (total, row) =>
      total +
      row.reduce((rowTotal, card) => {
        if (!card || card.owner !== owner) {
          return rowTotal;
        }

        return rowTotal + Object.values(card.sides).reduce((sum, value) => sum + value, 0);
      }, 0),
    0,
  );
}

function resolveNoDrawWinner(options: {
  champions: Record<PlayerId, ChampionState>;
  control: ControlTotals;
  board: Array<Array<BoardCard | null>>;
  fallbackWinner: PlayerId;
}): PlayerId {
  if (options.champions.player.health !== options.champions.enemy.health) {
    return options.champions.player.health > options.champions.enemy.health ? "player" : "enemy";
  }

  if (options.control.player !== options.control.enemy) {
    return options.control.player > options.control.enemy ? "player" : "enemy";
  }

  const playerStrength = sumControlledBoardStrength(options.board, "player");
  const enemyStrength = sumControlledBoardStrength(options.board, "enemy");
  if (playerStrength !== enemyStrength) {
    return playerStrength > enemyStrength ? "player" : "enemy";
  }

  return options.fallbackWinner;
}

function startTurn(
  state: MatchState,
  activePlayer: PlayerId,
  index: number,
  roundTurn: number,
  emptyTurnStreak: number,
): MatchState {
  if (state.result) {
    return state;
  }

  const draw = drawCardsForTurn(state, activePlayer, roundTurn);
  const nextEmptyTurnStreak = draw.choices.length === 0 ? emptyTurnStreak + 1 : 0;
  const responseShieldBonus = isOpeningResponseTurn(state, activePlayer, roundTurn)
    ? state.config.secondPlayerFirstTurnShieldBonus
    : 0;
  const activeCombat: PlayerCombatState = {
    ...state.combat[activePlayer],
    shield: Math.min(state.config.maxShieldPerPlayer, state.combat[activePlayer].shield + responseShieldBonus),
    nextTurnDrawBonus: 0,
  };
  let nextState: MatchState = {
    ...state,
    rngState: draw.seed,
    players: {
      ...state.players,
      [activePlayer]: {
        ...state.players[activePlayer],
        drawPile: draw.drawPile,
        discardPile: draw.discardPile,
        reshuffles: state.players[activePlayer].reshuffles + draw.reshuffles,
      },
    },
    turn: {
      index,
      roundTurn,
      activePlayer,
      choices: draw.choices,
    },
    combat: {
      ...cloneCombatState(state.combat),
      [activePlayer]: activeCombat,
    },
    emptyTurnStreak: nextEmptyTurnStreak,
    playerCharmState:
      activePlayer === "player"
        ? {
            ...state.playerCharmState,
            playerTurnsTakenThisRound: state.playerCharmState.playerTurnsTakenThisRound + 1,
            fireflyReshufflePenaltyPending: draw.consumeFireflyReshufflePenalty
              ? false
              : state.playerCharmState.fireflyReshufflePenaltyPending,
          }
        : {
            ...state.playerCharmState,
            fireflyReshufflePenaltyPending: draw.consumeFireflyReshufflePenalty
              ? false
              : state.playerCharmState.fireflyReshufflePenaltyPending,
          },
    metrics: {
      ...state.metrics,
      deadTurns: state.metrics.deadTurns + (draw.choices.length === 0 ? 1 : 0),
    },
  };

  if (activePlayer === "enemy") {
    nextState = applyQuickDrawTrim(nextState);
    nextState = applyRefinePower(nextState);
    if (shouldUseSecondChance(nextState)) {
      nextState = rerollEnemyChoices(nextState);
    }
  }

  if (nextEmptyTurnStreak >= 2) {
    const control = calculateControl(nextState.board);
    const winner = resolveNoDrawWinner({
      champions: nextState.champions,
      control,
      board: nextState.board,
      fallbackWinner: nextState.round.startingPlayer,
    });

    return {
      ...nextState,
      result: createBattleResult(winner, "stalemate", nextState.champions, "stalemate"),
    };
  }

  return nextState;
}

function startRound(
  state: MatchState,
  roundNumber: number,
  turnIndex: number,
  forcedStarter?: PlayerId,
): MatchState {
  const rolledStarter = rollRoundStarter(state.rngState, forcedStarter);
  const roundPreparedState = applyEnemyRenew(
    {
      ...state,
      rngState: rolledStarter.seed,
      enemyPowerState: resetEnemyRoundPowerState(state),
    },
    roundNumber,
  );

  return startTurn(
    {
      ...roundPreparedState,
      round: {
        number: roundNumber,
        startingPlayer: rolledStarter.startingPlayer,
        coinFace: rolledStarter.coinFace,
      },
      playerCharmState: {
        ...roundPreparedState.playerCharmState,
        cardsPlayedThisRound: 0,
        playerTurnsTakenThisRound: 0,
        fireflyRerollUsedThisRound: false,
        roundDamageBonus: 0,
        enemyVirtualControlBonus: 0,
      },
      combat: resetRoundCombatState(roundPreparedState.combat),
      emptyTurnStreak: 0,
    },
    rolledStarter.startingPlayer,
    turnIndex,
    1,
    0,
  );
}

function discardBoardCards(
  board: Array<Array<BoardCard | null>>,
  players: MatchState["players"],
): MatchState["players"] {
  const nextPlayers = {
    player: { ...players.player, discardPile: [...players.player.discardPile] },
    enemy: { ...players.enemy, discardPile: [...players.enemy.discardPile] },
  };

  for (const row of board) {
    for (const card of row) {
      if (!card) {
        continue;
      }

      const stackCards = card.stack && card.stack.length > 0 ? card.stack : [card];
      for (const stackedCard of stackCards) {
        if (isRoundTemporaryCard(stackedCard)) {
          continue;
        }

        nextPlayers[card.owner].discardPile.push({
          ...cloneCardInstance(stackedCard),
          owner: card.owner,
          corruptedBy: null,
        });
      }
    }
  }

  return nextPlayers;
}

function createPlacedCard(state: MatchState, card: CardInstance, position: Position): BoardCard {
  return createStackAggregateCard(state, [card], position);
}

function getEnemyControlBonus(state: MatchState, board: Array<Array<BoardCard | null>>, enemyPowerState?: EnemyPowerState | null): number {
  if (!state.enemyProfile) {
    return state.playerCharmState.enemyVirtualControlBonus;
  }

  const profileId = state.enemyProfile.id;
  const boardSize = board.length;
  const center = Math.floor(boardSize / 2);
  let bonus = 0;

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      const card = board[row][col];
      if (!card || card.owner !== "enemy") {
        continue;
      }

      const isCorner = (row === 0 || row === boardSize - 1) && (col === 0 || col === boardSize - 1);
      const isEdge = row === 0 || row === boardSize - 1 || col === 0 || col === boardSize - 1;
      const isCenter = row === center && col === center;

      if (profileId === "fortress" && isCorner) {
        bonus += 1;
      }

      if (profileId === "bastion" && isEdge) {
        bonus += 1;
      }

      if (profileId === "warden" && (isCorner || isCenter)) {
        bonus += 1;
      }
    }
  }

  if (profileId === "executioner") {
    bonus += enemyPowerState?.relentlessControlBonus ?? 0;
  }

  return bonus + state.playerCharmState.enemyVirtualControlBonus;
}

function getPlayerControlBonus(state: MatchState, board: Array<Array<BoardCard | null>>): number {
  const boardSize = board.length;
  const center = Math.floor(boardSize / 2);
  let bonus = 0;
  let bottomRowPlayerCards = 0;

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      const card = board[row][col];
      if (!card || card.owner !== "player") {
        continue;
      }

      const isCorner = (row === 0 || row === boardSize - 1) && (col === 0 || col === boardSize - 1);
      if (hasPlayerCharm(state, "watcher-stone") && isCorner) {
        bonus += 1;
      }

      if (hasPlayerCharm(state, "old-bridge-stone") && row === center) {
        bonus += 1;
      }

      if (hasPlayerCharm(state, "refuge-bark") && row === center && col === center) {
        bonus -= 1;
      }

      if (row === boardSize - 1) {
        bottomRowPlayerCards += 1;
      }
    }
  }

  if (hasPlayerCharm(state, "old-bridge-stone") && bottomRowPlayerCards === 1) {
    bonus -= 1;
  }

  return bonus;
}

function preparePlacedCardForMove(
  state: MatchState,
  cards: CardInstance[],
  position: Position,
): {
  placedCard: BoardCard;
  attackerWinsTies: boolean;
  enemyPowerState: EnemyPowerState | null;
  effectEvents: CardEffectEvent[];
} {
  let nextCard = createStackAggregateCard(state, cards, position);
  const leadCard = cards[0];
  let attackerWinsTies = false;
  const nextEnemyPowerState = cloneEnemyPowerState(state.enemyPowerState);

  if (state.turn.activePlayer === "player") {
    if (hasPlayerCharm(state, "first-breath")) {
      if (state.playerCharmState.cardsPlayedThisRound === 0) {
        nextCard = applyUniversalBoost(nextCard, 1);
      } else if (state.playerCharmState.cardsPlayedThisRound === 1) {
        nextCard = applyDirectionalBoost(nextCard, getStrongestDirection(nextCard), -1);
      }
    }

    if (hasPlayerCharm(state, "watcher-stone") && isCenterPosition(position, state.config.boardSize)) {
      nextCard = applyDirectionalBoost(nextCard, getWeakestDirection(nextCard), -1);
    }

    if (hasPlayerCharm(state, "balance-feather") && hasAtLeastTwoEqualSides(nextCard) && !isPolarizedCard(nextCard)) {
      const pickedDirection = pickWithSeed(
        [...DIRECTIONS],
        mixSeed(state.rngState, `balance:${state.round.number}:${state.turn.index}:${leadCard.instanceId}:${position.row}:${position.col}`),
      );
      nextCard = applyDirectionalBoost(nextCard, pickedDirection.item, 1);
    }

    if (hasPlayerCharm(state, "double-knot-rune") && nextCard.sourceType !== "fusion" && hasAtLeastTwoVeryLowSides(nextCard)) {
      nextCard = applyDirectionalBoost(nextCard, getStrongestDirection(nextCard), -1);
    }
  }

  if (state.turn.activePlayer === "enemy" && state.enemyProfile && nextEnemyPowerState) {
    if (nextEnemyPowerState.battleCryReady && (state.enemyProfile.id === "aggro" || state.enemyProfile.id === "executioner")) {
      nextCard = applyUniversalBoost(nextCard, 1);
      nextEnemyPowerState.battleCryReady = false;
    }

    if (state.enemyProfile.id === "ravager") {
      if (nextEnemyPowerState.roarReady) {
        attackerWinsTies = true;
        nextEnemyPowerState.roarReady = false;
      }

      if (isCenterPosition(position, state.config.boardSize)) {
        nextCard = applyDirectionalBoost(nextCard, getStrongestDirection(nextCard), 1);
      }
    }
  }

  const boostEffects = applyCardBoostEffects(state, nextCard, position);
  nextCard = boostEffects.card;

  return {
    placedCard: {
      ...nextCard,
      row: position.row,
      col: position.col,
      stack: (nextCard.stack ?? []).map((stackCard) => ({ ...stackCard })),
      stackFamilyCounts: { ...nextCard.stackFamilyCounts },
    },
    attackerWinsTies,
    enemyPowerState: nextEnemyPowerState,
    effectEvents: boostEffects.effectEvents,
  };
}

function clonePlayerState(players: MatchState["players"]): MatchState["players"] {
  return {
    player: { ...players.player, discardPile: [...players.player.discardPile] },
    enemy: { ...players.enemy, discardPile: [...players.enemy.discardPile] },
  };
}

function resolvePlacementCombat(
  state: MatchState,
  placedCard: BoardCard,
  options: {
    attackerWinsTies?: boolean;
  } = {},
): {
  board: Array<Array<BoardCard | null>>;
  impacts: CombatImpact[];
  flippedCount: number;
  boardOccupancyAfterCombat: number;
  controlAfterCombat: ControlTotals;
} {
  const nextBoard = cloneBoard(state.board);
  nextBoard[placedCard.row][placedCard.col] = placedCard;
  const impacts: CombatImpact[] = [];
  let flippedCount = 0;

  for (const adjacent of getAdjacentPositions(placedCard, nextBoard.length)) {
    const target = nextBoard[adjacent.position.row][adjacent.position.col];
    if (!target || target.owner === placedCard.owner) {
      continue;
    }

    const attackerSides = placedCard.sides;
    const defenderSides = target.sides;
    const baseAttackerValue = attackerSides[adjacent.direction];
    const baseDefenderValue = defenderSides[OPPOSITE_DIRECTION[adjacent.direction]];
    const traitModifiers = getTraitBattleModifiers({
      board: nextBoard,
      attacker: placedCard,
      defender: target,
      direction: adjacent.direction,
      baseAttackerValue,
      baseDefenderValue,
    });
    const attackerValue = baseAttackerValue + traitModifiers.attackBonus;
    const defenderValue = baseDefenderValue + traitModifiers.defenseBonus;
    const margin = attackerValue - defenderValue;

    let attackerWins = options.attackerWinsTies ? attackerValue >= defenderValue : attackerValue > defenderValue;
    if (
      attackerWins &&
      options.attackerWinsTies &&
      attackerValue === defenderValue &&
      target.owner === "player" &&
      hasPlayerCharm(state, "refuge-bark") &&
      isEdgePosition(target, nextBoard.length)
    ) {
      attackerWins = false;
    }

    if (!attackerWins) {
      impacts.push({
        direction: adjacent.direction,
        position: adjacent.position,
        targetCardInstanceId: target.instanceId,
        targetOwnerBeforeImpact: target.owner,
        targetOwnerAfterImpact: target.owner,
        attackerValue,
        defenderValue,
        margin,
        result: "no-flip",
      });
      continue;
    }

    const flippedCard: BoardCard = {
      ...target,
      owner: placedCard.owner,
      corruptedBy:
        getCardFamilyCount(placedCard, placedCard.owner, "demon") >= 2 &&
        cardCountsAsFamily(placedCard, placedCard.owner, "demon")
          ? placedCard.owner
          : target.corruptedBy ?? null,
    };
    nextBoard[adjacent.position.row][adjacent.position.col] = flippedCard;
    flippedCount += 1;
    impacts.push({
      direction: adjacent.direction,
      position: adjacent.position,
      targetCardInstanceId: target.instanceId,
      targetOwnerBeforeImpact: target.owner,
      targetOwnerAfterImpact: placedCard.owner,
      attackerValue,
      defenderValue,
      margin,
      result: "flipped",
    });
  }

  return {
    board: nextBoard,
    impacts,
    flippedCount,
    boardOccupancyAfterCombat: countOccupiedCells(nextBoard),
    controlAfterCombat: calculateControl(nextBoard),
  };
}

function didPlacementFillBoard(state: MatchState): boolean {
  const maxCells = state.config.boardSize * state.config.boardSize;
  return countOccupiedCells(state.board) === maxCells - 1;
}

export function summarizeBoardControl(board: Array<Array<BoardCard | null>>): ControlTotals {
  return calculateControl(board);
}

function resolveRoundEnd(
  state: MatchState,
  board: Array<Array<BoardCard | null>>,
  champions: Record<PlayerId, ChampionState>,
  enemyPowerState: EnemyPowerState | null = state.enemyPowerState,
): {
  summary: RoundEndSummary;
  champions: Record<PlayerId, ChampionState>;
  result: BattleResult | null;
} {
  const expectedOccupancy = state.config.boardSize * state.config.boardSize;
  const boardOccupancy = countOccupiedCells(board);
  if (boardOccupancy !== expectedOccupancy) {
    throw new Error(`Cannot resolve round end on a non-full board: ${boardOccupancy}/${expectedOccupancy}.`);
  }

  const rawControl = calculateControl(board);
  const playerControlBonus = getPlayerControlBonus(state, board) + getTraitControlBonus(board, "player");
  const enemyControlBonus = getEnemyControlBonus(state, board, enemyPowerState) + getTraitControlBonus(board, "enemy");
  const control = {
    player: rawControl.player + playerControlBonus,
    enemy: rawControl.enemy + enemyControlBonus,
  };
  const controlDifference = Math.abs(control.player - control.enemy);
  const damageApplied = createValueRecord();

  damageApplied.enemy = control.player * state.config.roundDamagePerControlledCard;
  damageApplied.player = control.enemy * state.config.roundDamagePerControlledCard;

  if (hasPlayerCharm(state, "lantern-mushroom")) {
    damageApplied.enemy += state.playerCharmState.roundDamageBonus;
  }

  if (hasPlayerCharm(state, "moss-dust")) {
    const playerLead = control.player - control.enemy;
    if (playerLead === 1) {
      damageApplied.enemy += 2;
    }

    if (playerLead <= -3) {
      damageApplied.player += 1;
    }
  }

  damageApplied.player = Math.max(0, damageApplied.player - state.combat.player.shield);
  damageApplied.enemy = Math.max(0, damageApplied.enemy - state.combat.enemy.shield);

  const nextChampions = cloneChampions(champions);
  nextChampions.player.health -= damageApplied.player;
  nextChampions.enemy.health -= damageApplied.enemy;
  const roundWinner = resolveNoDrawWinner({
    champions: nextChampions,
    control,
    board,
    fallbackWinner: state.round.startingPlayer,
  });

  if (hasPlayerCharm(state, "ancient-sap")) {
    if (roundWinner === "player") {
      nextChampions.player.health = Math.min(nextChampions.player.maxHealth, nextChampions.player.health + 1);
    } else if (roundWinner === "enemy") {
      nextChampions.player.health -= 1;
      damageApplied.player += 1;
    }
  }

  const summary: RoundEndSummary = {
    roundNumber: state.round.number,
    boardOccupancy,
    control,
    controlDifference,
    roundWinner,
    damageApplied,
    championsAfterDamage: cloneChampions(nextChampions),
  };

  const playerDead = nextChampions.player.health <= 0;
  const enemyDead = nextChampions.enemy.health <= 0;

  if (!playerDead && !enemyDead) {
    return {
      summary,
      champions: nextChampions,
      result: null,
    };
  }

  if (playerDead && enemyDead) {
    const winner = resolveNoDrawWinner({
      champions: nextChampions,
      control: summary.control,
      board,
      fallbackWinner: roundWinner,
    });

    return {
      summary,
      champions: nextChampions,
      result: createBattleResult(winner, "double-ko", nextChampions, "round-end-control"),
    };
  }

  return {
    summary,
    champions: nextChampions,
    result: createBattleResult(playerDead ? "enemy" : "player", "champion-ko", nextChampions, "round-end-control"),
  };
}

/**
 * Creates a new deterministic match from config, deck preset, and seed.
 */
export function createMatch(settings: Partial<MatchSettings> = {}): MatchState {
  const deckPresetId = settings.deckPresetId ?? DEFAULT_DECK_PRESET_ID;
  const seed = settings.seed ?? GAME_CONFIG.defaultSeed;
  const enemyProfile = cloneEnemyProfile(settings.enemyProfile ?? null);
  const playerCharms = [...(settings.playerCharmIds ?? [])];
  const hasExplicitDecks = Boolean(
    settings.playerCardIds ||
      settings.enemyCardIds ||
      settings.playerCards ||
      settings.enemyCards,
  );
  const presetDecks = hasExplicitDecks
    ? {
        playerDeck: createDeckInstances("player", deckPresetId, settings.playerCardIds, settings.playerCards),
        enemyDeck: createDeckInstances("enemy", deckPresetId, settings.enemyCardIds, settings.enemyCards),
        seed,
      }
    : createSharedPresetDecks(deckPresetId, seed);
  const shuffledPlayerDeck = shuffleWithSeed(presetDecks.playerDeck, presetDecks.seed);
  const shuffledEnemyDeck = shuffleWithSeed(presetDecks.enemyDeck, shuffledPlayerDeck.seed);

  const initialState: MatchState = {
    config: GAME_CONFIG,
    deckPresetId,
    seed,
    rngState: shuffledEnemyDeck.seed,
    board: createBoard(GAME_CONFIG.boardSize),
    players: {
      player: {
        id: "player",
        drawPile: shuffledPlayerDeck.items,
        discardPile: [],
        reshuffles: 0,
      },
      enemy: {
        id: "enemy",
        drawPile: shuffledEnemyDeck.items,
        discardPile: [],
        reshuffles: 0,
      },
    },
    champions: {
      player: {
        health: GAME_CONFIG.championStartingHealth,
        maxHealth: GAME_CONFIG.championStartingHealth,
      },
      enemy: {
        health: GAME_CONFIG.championStartingHealth,
        maxHealth: GAME_CONFIG.championStartingHealth,
      },
    },
    combat: createInitialCombatState(),
    round: {
      number: 1,
      startingPlayer: settings.startingPlayer ?? GAME_CONFIG.startingPlayer,
      coinFace: getCoinFaceForPlayer(settings.startingPlayer ?? GAME_CONFIG.startingPlayer),
    },
    turn: {
      index: 0,
      roundTurn: 0,
      activePlayer: settings.startingPlayer ?? GAME_CONFIG.startingPlayer,
      choices: [],
    },
    playerCharms,
    playerCharmState: createInitialPlayerCharmState(playerCharms),
    enemyProfile,
    enemyPowerState: createInitialEnemyPowerState(enemyProfile),
    result: null,
    metrics: {
      totalFlips: 0,
      totalRoundEndControlDifference: 0,
      totalRoundEndDamage: 0,
      totalControlledCardsBySide: createValueRecord(),
      deadTurns: 0,
      roundsCompleted: 0,
      totalRoundEndOccupancy: 0,
    },
    lastMove: null,
    emptyTurnStreak: 0,
  };

  return startRound(applyCombatStartPlayerCharmSetup(initialState), 1, 1, settings.startingPlayer);
}

/**
 * Returns whether a position is currently legal for placement.
 */
export function canPlaceCard(state: MatchState, position: Position): boolean {
  return !state.result && isInsideBoard(position, state.config.boardSize) && state.board[position.row][position.col] === null;
}

/**
 * Returns every legal move for the active player's current turn choices.
 */
function buildLegalCardStacks(state: MatchState): CardInstance[][] {
  const stacks: CardInstance[][] = [];

  function visit(startIndex: number, current: CardInstance[], manaCost: number): void {
    if (current.length > 0) {
      stacks.push([...current]);
    }

    if (current.length >= state.config.maxCardsPerMove) {
      return;
    }

    for (let index = startIndex; index < state.turn.choices.length; index += 1) {
      const card = state.turn.choices[index];
      const nextManaCost = manaCost + card.manaCost;
      if (nextManaCost > state.config.turnMana) {
        continue;
      }

      current.push(card);
      visit(index + 1, current, nextManaCost);
      current.pop();
    }
  }

  visit(0, [], 0);
  return stacks;
}

export function listLegalMoves(state: MatchState): MoveInput[] {
  if (state.result) {
    return [];
  }

  const emptyPositions = listEmptyPositions(state.board);
  const stacks = buildLegalCardStacks(state);
  return stacks.flatMap((stack) =>
    emptyPositions.map((position) => ({
      cardInstanceId: stack[0].instanceId,
      cardInstanceIds: stack.map((card) => card.instanceId),
      position,
    })),
  );
}

/**
 * Applies a legal move and advances the match to the next turn or next round.
 */
export function applyMove(state: MatchState, move: MoveInput): MatchState {
  if (state.result) {
    throw new Error("Cannot apply a move after the battle has finished.");
  }

  const chosenCards = getMoveCards(state, move);
  validateMoveMana(state, chosenCards);

  if (!canPlaceCard(state, move.position)) {
    throw new Error(`Illegal placement at (${move.position.row}, ${move.position.col}).`);
  }

  const roundTriggered = didPlacementFillBoard(state);
  const preparedMove = preparePlacedCardForMove(state, chosenCards, move.position);
  const resolution = resolvePlacementCombat(state, preparedMove.placedCard, {
    attackerWinsTies: preparedMove.attackerWinsTies,
  });
  const playedIds = new Set(chosenCards.map((card) => card.instanceId));
  const unplayedCards = state.turn.choices.filter(
    (card) => !playedIds.has(card.instanceId) && !isRoundTemporaryCard(card),
  );
  let nextPlayers = {
    ...clonePlayerState(state.players),
    [state.turn.activePlayer]: {
      ...state.players[state.turn.activePlayer],
      discardPile: [...state.players[state.turn.activePlayer].discardPile],
      drawPile: [...state.players[state.turn.activePlayer].drawPile, ...unplayedCards],
      reshuffles: state.players[state.turn.activePlayer].reshuffles,
    },
  };
  let nextBoard = resolution.board;
  let nextChampions = cloneChampions(state.champions);
  let nextCombat = cloneCombatState(state.combat);
  let nextRoundNumber = state.round.number;
  let roundEndSummary: RoundEndSummary | null = null;
  let result: BattleResult | null = null;
  let nextEnemyPowerState = preparedMove.enemyPowerState;
  let nextPlayerCharmState = { ...state.playerCharmState };
  const effectEvents = [...preparedMove.effectEvents];

  let nextMetrics = {
    ...state.metrics,
    totalFlips: state.metrics.totalFlips + resolution.flippedCount,
  };

  if (state.turn.activePlayer === "player") {
    nextPlayerCharmState = {
      ...nextPlayerCharmState,
      cardsPlayedThisRound: nextPlayerCharmState.cardsPlayedThisRound + 1,
    };

    if (hasPlayerCharm(state, "lantern-mushroom")) {
      if (resolution.flippedCount >= 2) {
        nextPlayerCharmState.roundDamageBonus += 1;
      } else if (resolution.flippedCount === 0) {
        nextPlayerCharmState.enemyVirtualControlBonus += 1;
      }
    }
  }

  if (
    state.turn.activePlayer === "enemy" &&
    state.enemyProfile?.id === "executioner" &&
    nextEnemyPowerState &&
    resolution.flippedCount >= 2
  ) {
    nextEnemyPowerState = {
      ...nextEnemyPowerState,
      relentlessControlBonus: Math.max(nextEnemyPowerState.relentlessControlBonus, 1),
    };
  }

  const resourceEffects = resolveCardResourceEffects({
    state,
    sourceCard: preparedMove.placedCard,
    flippedCount: resolution.flippedCount,
    champions: nextChampions,
    combat: nextCombat,
  });
  nextChampions = resourceEffects.champions;
  nextCombat = resourceEffects.combat;
  effectEvents.push(...resourceEffects.effectEvents);
  result = resolveImmediateDamageResult({
    champions: nextChampions,
    board: nextBoard,
    fallbackWinner: state.turn.activePlayer,
  });

  if (roundTriggered && !result) {
    const roundEndState = {
      ...state,
      playerCharmState: nextPlayerCharmState,
      combat: nextCombat,
    };
    const roundEnd = resolveRoundEnd(roundEndState, nextBoard, nextChampions, nextEnemyPowerState);
    nextChampions = roundEnd.champions;
    roundEndSummary = roundEnd.summary;
    result = roundEnd.result;
    nextMetrics = {
      ...nextMetrics,
      totalRoundEndControlDifference:
        nextMetrics.totalRoundEndControlDifference + roundEnd.summary.controlDifference,
      totalRoundEndDamage:
        nextMetrics.totalRoundEndDamage +
        roundEnd.summary.damageApplied.player +
        roundEnd.summary.damageApplied.enemy,
      totalControlledCardsBySide: {
        player: nextMetrics.totalControlledCardsBySide.player + roundEnd.summary.control.player,
        enemy: nextMetrics.totalControlledCardsBySide.enemy + roundEnd.summary.control.enemy,
      },
      roundsCompleted: nextMetrics.roundsCompleted + 1,
      totalRoundEndOccupancy: nextMetrics.totalRoundEndOccupancy + roundEnd.summary.boardOccupancy,
    };
    nextPlayers = discardBoardCards(nextBoard, nextPlayers);
    nextBoard = createBoard(state.config.boardSize);
    if (!result) {
      nextRoundNumber += 1;
    }
  }

  const nextStateBase: MatchState = {
    ...state,
    board: nextBoard,
    players: nextPlayers,
    champions: nextChampions,
    combat: nextCombat,
    round: {
      ...state.round,
      number: nextRoundNumber,
    },
    enemyProfile: cloneEnemyProfile(state.enemyProfile),
    enemyPowerState: cloneEnemyPowerState(nextEnemyPowerState),
    playerCharmState: nextPlayerCharmState,
    metrics: nextMetrics,
    lastMove: {
      playerId: state.turn.activePlayer,
      cardInstanceId: preparedMove.placedCard.instanceId,
      cardInstanceIds: chosenCards.map((card) => card.instanceId),
      position: move.position,
      impacts: resolution.impacts,
      effectEvents,
      championsAfterMove: cloneChampions(nextChampions),
      controlAfterCombat: resolution.controlAfterCombat,
      boardOccupancyAfterCombat: resolution.boardOccupancyAfterCombat,
      roundEnded: roundTriggered && roundEndSummary !== null,
      roundNumberAfterMove: result ? state.round.number : nextRoundNumber,
      roundEndSummary,
    } satisfies LastMoveSummary,
    emptyTurnStreak: 0,
  };

  if (result) {
    return {
      ...nextStateBase,
      result,
      turn: {
        ...state.turn,
        choices: [],
      },
      round: {
        ...state.round,
        number: state.round.number,
      },
    };
  }

  if (roundTriggered) {
    return startRound(nextStateBase, nextRoundNumber, state.turn.index + 1);
  }

  return startTurn(
    nextStateBase,
    getNextPlayer(state.turn.activePlayer),
    state.turn.index + 1,
    state.turn.roundTurn + 1,
    0,
  );
}

/**
 * Passes a turn with no available cards and prepares the opponent turn.
 */
export function passTurn(state: MatchState): MatchState {
  if (state.result) {
    return state;
  }

  if (state.turn.choices.length > 0) {
    throw new Error("Cannot pass while legal card choices remain.");
  }

  return startTurn(
    state,
    getNextPlayer(state.turn.activePlayer),
    state.turn.index + 1,
    state.turn.roundTurn + 1,
    state.emptyTurnStreak,
  );
}

/**
 * Returns the current board control totals.
 */
export function getControlTotals(state: MatchState): ControlTotals {
  return calculateControl(state.board);
}

/**
 * Previews the immediate outcome of a legal move for bots or UI previews.
 */
export function previewMove(state: MatchState, move: MoveInput): PreviewMove {
  if (!canPlaceCard(state, move.position)) {
    throw new Error("Cannot preview an illegal move.");
  }

  const chosenCards = getMoveCards(state, move);
  validateMoveMana(state, chosenCards);

  const preparedMove = preparePlacedCardForMove(state, chosenCards, move.position);
  const resolution = resolvePlacementCombat(state, preparedMove.placedCard, {
    attackerWinsTies: preparedMove.attackerWinsTies,
  });
  const roundEnds = didPlacementFillBoard(state);
  const previewEnemyPowerState =
    state.turn.activePlayer === "enemy" &&
    state.enemyProfile?.id === "executioner" &&
    preparedMove.enemyPowerState &&
    resolution.flippedCount >= 2
      ? {
          ...preparedMove.enemyPowerState,
          relentlessControlBonus: Math.max(preparedMove.enemyPowerState.relentlessControlBonus, 1),
        }
      : preparedMove.enemyPowerState;
  const previewPlayerCharmState =
    state.turn.activePlayer === "player"
      ? {
          ...state.playerCharmState,
          cardsPlayedThisRound: state.playerCharmState.cardsPlayedThisRound + 1,
          roundDamageBonus:
            hasPlayerCharm(state, "lantern-mushroom") && resolution.flippedCount >= 2
              ? state.playerCharmState.roundDamageBonus + 1
              : state.playerCharmState.roundDamageBonus,
          enemyVirtualControlBonus:
            hasPlayerCharm(state, "lantern-mushroom") && resolution.flippedCount === 0
              ? state.playerCharmState.enemyVirtualControlBonus + 1
              : state.playerCharmState.enemyVirtualControlBonus,
        }
      : state.playerCharmState;
  const resourceEffects = resolveCardResourceEffects({
    state,
    sourceCard: preparedMove.placedCard,
    flippedCount: resolution.flippedCount,
    champions: state.champions,
    combat: state.combat,
  });
  const directResult = resolveImmediateDamageResult({
    champions: resourceEffects.champions,
    board: resolution.board,
    fallbackWinner: state.turn.activePlayer,
  });
  const previewState = {
    ...state,
    champions: resourceEffects.champions,
    combat: resourceEffects.combat,
    playerCharmState: previewPlayerCharmState,
  };
  const roundEnd = roundEnds && !directResult
    ? resolveRoundEnd(previewState, resolution.board, resourceEffects.champions, previewEnemyPowerState)
    : null;

  return {
    move,
    flippedCount: resolution.flippedCount,
    control: resolution.controlAfterCombat,
    positionWeight: POSITION_WEIGHTS[move.position.row]?.[move.position.col] ?? 0,
    boardOccupancyAfterCombat: resolution.boardOccupancyAfterCombat,
    roundEnds: roundEnds && roundEnd !== null,
    impacts: resolution.impacts,
    effectEvents: [...preparedMove.effectEvents, ...resourceEffects.effectEvents],
    roundEndSummary: roundEnd?.summary ?? null,
    resultingWinner: directResult?.winner ?? roundEnd?.result?.winner ?? null,
  };
}

/**
 * Returns a readable name for a board or hand card instance.
 */
export function getCardName(card: Pick<CardInstance, "archetypeId"> & Partial<CardInstance>): string {
  return card.name ? card.name : getCardArchetype(card.archetypeId).name;
}

/**
 * Returns the side values for a card instance.
 */
export function getCardSides(card: Pick<CardInstance, "archetypeId"> & Partial<CardInstance>): CardInstance["sides"] {
  return card.sides ? card.sides : getCardArchetype(card.archetypeId).sides;
}

/**
 * Returns the image source bound to a card archetype.
 */
export function getCardArtSrc(card: Pick<CardInstance, "archetypeId"> & Partial<CardInstance>): string {
  return card.artSrc ? card.artSrc : getCardArchetype(card.archetypeId).artSrc;
}

/**
 * Returns the active player's temporary hand for the current turn.
 */
export function getCurrentChoices(state: MatchState): TurnState["choices"] {
  return state.turn.choices;
}
