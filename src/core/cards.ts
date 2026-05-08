import { CARD_ARCHETYPE_LOOKUP } from "@/core/config/cardArchetypes";
import { ADVENTURE_REWARD_POOLS } from "@/core/config/adventureRewards";
import { getNeutralCardArtSrc } from "@/core/config/cardArt";
import { STARTER_DECK_PRESETS } from "@/core/config/decks";
import { cloneCardEffects } from "@/core/card-effects";
import { pickWithSeed } from "@/core/utils/rng";
import type {
  AdventureDeckCard,
  AdventureDeckState,
  CardArchetype,
  CardInstance,
  CardRarity,
  CardSides,
  CardSourceType,
  Direction,
  LuckyCharmId,
  PlayerId,
  TemporaryCardScope,
} from "@/core/types";

const RARITY_RANK: Record<CardRarity, number> = {
  common: 0,
  uncommon: 1,
  rare: 2,
};

function cloneSides(sides: CardSides): CardSides {
  return {
    top: sides.top,
    right: sides.right,
    bottom: sides.bottom,
    left: sides.left,
  };
}

export function createRarityRecord(amount = 0): Record<CardRarity, number> {
  return {
    common: amount,
    uncommon: amount,
    rare: amount,
  };
}

export function getCardArchetype(cardId: string): CardArchetype {
  const card = CARD_ARCHETYPE_LOOKUP[cardId];
  if (!card) {
    throw new Error(`Unknown card archetype: ${cardId}`);
  }

  return {
    ...card,
    sides: cloneSides(card.sides),
    temporaryScope: card.temporaryScope ?? null,
    createdByCharmId: card.createdByCharmId ?? null,
    effects: cloneCardEffects(card.effects),
  };
}

export function createCardInstance(owner: PlayerId, archetype: CardArchetype, index: number): CardInstance {
  return {
    instanceId: `${owner}-${archetype.id}-${index}`,
    archetypeId: archetype.id,
    owner,
    name: archetype.name,
    sides: cloneSides(archetype.sides),
    family: archetype.family,
    accent: archetype.accent,
    artSrc: archetype.artSrc,
    rarity: archetype.rarity,
    sourceType: archetype.sourceType,
    baseArchetypeId: archetype.baseArchetypeId,
    temporaryScope: archetype.temporaryScope ?? null,
    createdByCharmId: archetype.createdByCharmId ?? null,
    corruptedBy: null,
    effects: cloneCardEffects(archetype.effects),
  };
}

export function createAdventureDeckCard(deckCardId: string, card: CardArchetype): AdventureDeckCard {
  return {
    deckCardId,
    card: {
      ...card,
      sides: cloneSides(card.sides),
      temporaryScope: card.temporaryScope ?? null,
      createdByCharmId: card.createdByCharmId ?? null,
      effects: cloneCardEffects(card.effects),
    },
  };
}

export function cloneAdventureDeckState(deck: AdventureDeckState): AdventureDeckState {
  return {
    cards: deck.cards.map((entry) => createAdventureDeckCard(entry.deckCardId, entry.card)),
    nextDeckCardSequence: deck.nextDeckCardSequence,
    nextGeneratedCardSequence: deck.nextGeneratedCardSequence,
  };
}

export function createEmptyAdventureDeck(): AdventureDeckState {
  return {
    cards: [],
    nextDeckCardSequence: 1,
    nextGeneratedCardSequence: 1,
  };
}

export function createInitialAdventureDeck(): AdventureDeckState {
  const draftCards = STARTER_DECK_PRESETS.starter12.cardIds.slice(0, STARTER_DECK_PRESETS.starter12.cardsPerPlayer).map((cardId, index) =>
    createAdventureDeckCard(`deck-${index + 1}`, getCardArchetype(cardId)),
  );

  return {
    cards: draftCards,
    nextDeckCardSequence: draftCards.length + 1,
    nextGeneratedCardSequence: 1,
  };
}

export function listAdventureDeckArchetypes(deck: AdventureDeckState): CardArchetype[] {
  return deck.cards.map((entry) => ({
    ...entry.card,
    sides: cloneSides(entry.card.sides),
    effects: cloneCardEffects(entry.card.effects),
  }));
}

export function getAdventureDeckCard(deck: AdventureDeckState, deckCardId: string): AdventureDeckCard {
  const card = deck.cards.find((entry) => entry.deckCardId === deckCardId);
  if (!card) {
    throw new Error(`Unknown adventure deck card: ${deckCardId}`);
  }

  return createAdventureDeckCard(card.deckCardId, card.card);
}

export function countAdventureDeckByRarity(deck: AdventureDeckState): Record<CardRarity, number> {
  return deck.cards.reduce((counts, entry) => {
    counts[entry.card.rarity] += 1;
    return counts;
  }, createRarityRecord());
}

export function countAdventureDeckBySource(deck: AdventureDeckState): Record<CardSourceType, number> {
  return deck.cards.reduce(
    (counts, entry) => {
      counts[entry.card.sourceType] += 1;
      return counts;
    },
    {
      draft: 0,
      reward: 0,
      treasure: 0,
      upgrade: 0,
      fusion: 0,
      "enemy-upgrade": 0,
      charm: 0,
    } satisfies Record<CardSourceType, number>,
  );
}

export function getCardStrength(card: Pick<CardArchetype | CardInstance, "sides">): number {
  return Object.values(card.sides).reduce((sum, value) => sum + value, 0);
}

export function getHigherRarity(left: CardRarity, right: CardRarity): CardRarity {
  return RARITY_RANK[left] >= RARITY_RANK[right] ? left : right;
}

export function createUpgradedAdventureCard(
  card: CardArchetype,
  generatedCardId: string,
  boostedDirection: Direction,
): CardArchetype {
  return {
    ...card,
    id: generatedCardId,
    name: `${card.name} +`,
    sides: {
      ...card.sides,
      [boostedDirection]: card.sides[boostedDirection] + 1,
    },
    sourceType: "upgrade",
    baseArchetypeId: card.baseArchetypeId ?? card.id,
    temporaryScope: null,
    createdByCharmId: null,
    effects: cloneCardEffects(card.effects),
  };
}

export function createFusionAdventureCard(options: {
  left: CardArchetype;
  right: CardArchetype;
  generatedCardId: string;
  leftDirections: Direction[];
  rightDirections: Direction[];
}): CardArchetype {
  const { left, right, generatedCardId, leftDirections, rightDirections } = options;
  const sides: CardSides = {
    top: leftDirections.includes("top") ? left.sides.top : right.sides.top,
    right: leftDirections.includes("right") ? left.sides.right : right.sides.right,
    bottom: leftDirections.includes("bottom") ? left.sides.bottom : right.sides.bottom,
    left: leftDirections.includes("left") ? left.sides.left : right.sides.left,
  };

  return {
    id: generatedCardId,
    name: "Fusion sylvestre",
    sides,
    family: left.family,
    accent: left.accent,
    artSrc: left.artSrc,
    rarity: getHigherRarity(left.rarity, right.rarity),
    sourceType: "fusion",
    baseArchetypeId: left.baseArchetypeId ?? left.id,
    temporaryScope: null,
    createdByCharmId: null,
    effects: [...cloneCardEffects(left.effects).slice(0, 1), ...cloneCardEffects(right.effects).slice(0, 1)],
  };
}

export function createLuckyCharmPenaltyCard(generatedCardId: string): CardArchetype {
  return {
    id: generatedCardId,
    name: "Brindille fragile",
    sides: {
      top: 1,
      right: 1,
      bottom: 2,
      left: 1,
    },
    family: "familiar",
    accent: "ember",
    artSrc: getNeutralCardArtSrc("familiar"),
    rarity: "common",
    sourceType: "charm",
    baseArchetypeId: null,
    temporaryScope: null,
    createdByCharmId: "split-hazelnut",
    effects: [],
  };
}

export function createTemporaryLuckyCharmCard(
  card: CardArchetype,
  generatedCardId: string,
  charmId: LuckyCharmId,
  scope: TemporaryCardScope,
): CardArchetype {
  return {
    ...card,
    id: generatedCardId,
    sourceType: "charm",
    baseArchetypeId: card.baseArchetypeId ?? card.id,
    temporaryScope: scope,
    createdByCharmId: charmId,
    effects: cloneCardEffects(card.effects),
  };
}

export function createRandomRareLuckyCharmCard(
  seed: number,
  generatedCardId: string,
  charmId: LuckyCharmId,
  scope: TemporaryCardScope,
): { card: CardArchetype; seed: number } {
  const picked = pickWithSeed(ADVENTURE_REWARD_POOLS.rare, seed);
  return {
    card: createTemporaryLuckyCharmCard(getCardArchetype(picked.item), generatedCardId, charmId, scope),
    seed: picked.seed,
  };
}
