import { getAdventureLocationsCleared, isCombatAdventureNode } from "@/core/adventure";
import { ADVENTURE_ENEMY_CONFIG } from "@/core/config/gameConfig";
import { listEnemyProfilesByTier } from "@/core/config/enemyProfiles";
import { ADVENTURE_REWARD_POOLS } from "@/core/config/adventureRewards";
import { DRAFT_POOL_CARD_IDS } from "@/core/config/decks";
import {
  createFusionAdventureCard,
  createRarityRecord,
  getCardArchetype,
  getCardStrength,
} from "@/core/cards";
import {
  analyzeDeck,
  getCardBalanceScore,
  getCardCornerValue,
  getCardEdgeValue,
  getCardFusionValue,
  getCardSpikeValue,
  getCardTrapValue,
} from "@/core/deck-analysis";
import { mixSeed, pickWithSeed } from "@/core/utils/rng";
import type {
  AdventureNode,
  AdventureRunState,
  CardArchetype,
  CardRarity,
  EnemyTier,
  MatchEnemyProfile,
} from "@/core/types";

export interface AdventureEnemyLoadout {
  botId: "greedy" | "heuristic" | "champion";
  profile: MatchEnemyProfile;
  cards: CardArchetype[];
  cardIds: string[];
  replacements: number;
  additions: number;
  rarityCounts: Record<CardRarity, number>;
  searchDepth: number;
  beamWidth: number;
  threatLabel: string;
  signatureCardIds: string[];
}

function pickWeightedRarity(
  weightedRarities: Array<{ rarity: CardRarity; weight: number }>,
  seed: number,
): { rarity: CardRarity; seed: number } {
  const positiveWeights = weightedRarities.filter((entry) => entry.weight > 0);
  if (positiveWeights.length === 0) {
    return {
      rarity: "common",
      seed,
    };
  }

  const pickedWeight = pickWithSeed(
    positiveWeights.flatMap((entry) => Array.from({ length: entry.weight }, () => entry.rarity)),
    seed,
  );

  return {
    rarity: pickedWeight.item,
    seed: pickedWeight.seed,
  };
}

function getClearedLocationsBeforeNode(run: AdventureRunState, node: AdventureNode): number {
  if (node.kind === "boss") {
    return run.config.depthCount;
  }

  return Math.max(0, getAdventureLocationsCleared(run) - 1);
}

/** Count how many combat/elite encounters the player has already completed (not counting the current one). */
function getCombatsCompleted(run: AdventureRunState): number {
  return run.history.filter((nodeId) => {
    const node = run.map.nodes.find((n) => n.id === nodeId);
    return node != null && isCombatAdventureNode(node.kind);
  }).length;
}

function getPlayerPressureScore(run: AdventureRunState): number {
  const playerUpgradeCount = Math.max(0, run.deck.cards.filter((entry) => entry.card.sourceType !== "draft").length);
  const playerUncommonCount = run.deck.cards.filter((entry) => entry.card.rarity === "uncommon").length;
  const playerRareCount = run.deck.cards.filter((entry) => entry.card.rarity === "rare").length;

  return (
    playerUpgradeCount * ADVENTURE_ENEMY_CONFIG.playerUpgradePressure +
    playerUncommonCount * ADVENTURE_ENEMY_CONFIG.playerUncommonPressure +
    playerRareCount * ADVENTURE_ENEMY_CONFIG.playerRarePressure
  );
}

function getUpgradeBudget(run: AdventureRunState, node: AdventureNode): { replacements: number; additions: number } {
  const clearedBeforeNode = getClearedLocationsBeforeNode(run, node);
  const playerPressure = getPlayerPressureScore(run);
  const stageScore = clearedBeforeNode + playerPressure;

  if (node.kind === "boss") {
    return {
      replacements: ADVENTURE_ENEMY_CONFIG.bossReplacementCount,
      additions: ADVENTURE_ENEMY_CONFIG.bossAddCount,
    };
  }

  let replacements = Math.min(
    ADVENTURE_ENEMY_CONFIG.normalMaxReplacements,
    Math.floor(stageScore / 3.1),
  );
  let additions = Math.min(
    ADVENTURE_ENEMY_CONFIG.normalMaxAdds,
    Math.floor(stageScore / 7.2),
  );

  if (node.kind === "elite") {
    replacements += ADVENTURE_ENEMY_CONFIG.eliteReplacementBonus;
    additions += ADVENTURE_ENEMY_CONFIG.eliteAddBonus;
  }

  return {
    replacements,
    additions,
  };
}

function getRarityWeights(run: AdventureRunState, node: AdventureNode): Record<CardRarity, number> {
  const clearedBeforeNode = getClearedLocationsBeforeNode(run, node);

  if (node.kind === "boss") {
    return {
      common: ADVENTURE_ENEMY_CONFIG.bossCommonWeight,
      uncommon: ADVENTURE_ENEMY_CONFIG.bossUncommonWeight,
      rare:
        clearedBeforeNode >= ADVENTURE_ENEMY_CONFIG.bossRareUnlockLocation
          ? ADVENTURE_ENEMY_CONFIG.bossRareWeight
          : 0,
    };
  }

  if (node.kind === "elite") {
    if (clearedBeforeNode < 5) {
      return {
        common: ADVENTURE_ENEMY_CONFIG.earlyEliteCommonWeight,
        uncommon:
          clearedBeforeNode >= ADVENTURE_ENEMY_CONFIG.uncommonUnlockLocation
            ? ADVENTURE_ENEMY_CONFIG.earlyEliteUncommonWeight
            : 0,
        rare:
          clearedBeforeNode >= ADVENTURE_ENEMY_CONFIG.eliteRareUnlockLocation
            ? ADVENTURE_ENEMY_CONFIG.earlyEliteRareWeight
            : 0,
      };
    }

    return {
      common: ADVENTURE_ENEMY_CONFIG.lateEliteCommonWeight,
      uncommon: ADVENTURE_ENEMY_CONFIG.lateEliteUncommonWeight,
      rare:
        clearedBeforeNode >= ADVENTURE_ENEMY_CONFIG.eliteRareUnlockLocation
          ? ADVENTURE_ENEMY_CONFIG.lateEliteRareWeight
          : 0,
    };
  }

  if (clearedBeforeNode < ADVENTURE_ENEMY_CONFIG.uncommonUnlockLocation) {
    return {
      common: ADVENTURE_ENEMY_CONFIG.earlyNormalCommonWeight,
      uncommon: ADVENTURE_ENEMY_CONFIG.earlyNormalUncommonWeight,
      rare: ADVENTURE_ENEMY_CONFIG.earlyNormalRareWeight,
    };
  }

  if (clearedBeforeNode < ADVENTURE_ENEMY_CONFIG.rareUnlockLocation) {
    return {
      common: ADVENTURE_ENEMY_CONFIG.midNormalCommonWeight,
      uncommon: ADVENTURE_ENEMY_CONFIG.midNormalUncommonWeight,
      rare: ADVENTURE_ENEMY_CONFIG.midNormalRareWeight,
    };
  }

  return {
    common: ADVENTURE_ENEMY_CONFIG.lateNormalCommonWeight,
    uncommon: ADVENTURE_ENEMY_CONFIG.lateNormalUncommonWeight,
    rare: ADVENTURE_ENEMY_CONFIG.lateNormalRareWeight,
  };
}

function getEnemyTier(node: AdventureNode): EnemyTier {
  if (node.kind === "boss") {
    return "boss";
  }

  if (node.kind === "elite") {
    return "elite";
  }

  return "normal";
}

function pickEnemyProfileForNode(run: AdventureRunState, node: AdventureNode): MatchEnemyProfile {
  const profiles = listEnemyProfilesByTier(getEnemyTier(node));
  const picked = pickWithSeed(profiles, mixSeed(run.seed, `enemy-profile:${node.id}:${run.history.length}`));
  return picked.item;
}

function cloneEnemyUpgradeCard(card: CardArchetype): CardArchetype {
  return {
    ...card,
    sides: { ...card.sides },
    sourceType: "enemy-upgrade",
  };
}

function scoreCardForProfile(card: CardArchetype, profile: MatchEnemyProfile): number {
  const summary = analyzeDeck([card]);
  return (
    getCardStrength(card) * 0.8 +
    getCardSpikeValue(card) * profile.biases.aggression +
    getCardBalanceScore(card) * profile.biases.balance +
    getCardCornerValue(card) * profile.biases.corner +
    getCardEdgeValue(card) * profile.biases.edge +
    getCardTrapValue(card) * profile.biases.trick +
    getCardFusionValue(card) * profile.biases.fusion +
    summary.averageBalance * profile.biases.consistency +
    summary.averageSpikeValue * profile.biases.risk * 0.3
  );
}

function topDirections(card: CardArchetype, count: number): string[] {
  return Object.entries(card.sides)
    .sort((left, right) => {
      if (left[1] !== right[1]) {
        return right[1] - left[1];
      }

      return left[0].localeCompare(right[0]);
    })
    .slice(0, count)
    .map(([direction]) => direction);
}

function scoreFusionForProfile(left: CardArchetype, right: CardArchetype, profile: MatchEnemyProfile): number {
  const candidate = createFusionAdventureCard({
    left,
    right,
    generatedCardId: `preview-${left.id}-${right.id}`,
    leftDirections: topDirections(left, 2) as Array<"top" | "right" | "bottom" | "left">,
    rightDirections: topDirections(right, 2) as Array<"top" | "right" | "bottom" | "left">,
  });

  return scoreCardForProfile(candidate, profile) + analyzeDeck([left, right, candidate]).fusionPotential * 0.12;
}

function createSignatureCards(
  run: AdventureRunState,
  node: AdventureNode,
  profile: MatchEnemyProfile,
  desiredCount: number,
  usedCardIds: Set<string>,
  seed: number,
): { cards: CardArchetype[]; signatureCardIds: string[]; seed: number } {
  if (desiredCount <= 0) {
    return {
      cards: [],
      signatureCardIds: [],
      seed,
    };
  }

  const allRewardCards = [
    ...ADVENTURE_REWARD_POOLS.common,
    ...ADVENTURE_REWARD_POOLS.uncommon,
    ...ADVENTURE_REWARD_POOLS.rare,
  ]
    .filter((cardId) => !usedCardIds.has(cardId))
    .map((cardId) => getCardArchetype(cardId))
    .sort((left, right) => scoreCardForProfile(right, profile) - scoreCardForProfile(left, profile));

  const cards: CardArchetype[] = [];
  const signatureCardIds: string[] = [];
  let nextSeed = seed;

  if ((profile.id === "builder" || profile.id === "shaper") && allRewardCards.length >= 2) {
    const fusionLeft = allRewardCards[0];
    const fusionRight = [...allRewardCards.slice(1)].sort(
      (left, right) =>
        scoreFusionForProfile(right, fusionLeft, profile) - scoreFusionForProfile(left, fusionLeft, profile),
    )[0];

    if (fusionRight) {
      const fusionCard = createFusionAdventureCard({
        left: fusionLeft,
        right: fusionRight,
        generatedCardId: `enemy-fusion-${node.id}-${profile.id}`,
        leftDirections: topDirections(fusionLeft, 2) as Array<"top" | "right" | "bottom" | "left">,
        rightDirections: topDirections(fusionRight, 2) as Array<"top" | "right" | "bottom" | "left">,
      });

      cards.push(fusionCard);
      signatureCardIds.push(fusionCard.id);
      usedCardIds.add(fusionLeft.id);
      usedCardIds.add(fusionRight.id);
    }
  }

  while (cards.length < desiredCount) {
    const candidates = allRewardCards.filter((card) => !usedCardIds.has(card.id));
    if (candidates.length === 0) {
      break;
    }

    const topSlice = candidates.slice(0, Math.min(4, candidates.length));
    const picked = pickWithSeed(topSlice, nextSeed);
    const nextCard = cloneEnemyUpgradeCard(picked.item);
    cards.push(nextCard);
    signatureCardIds.push(nextCard.id);
    usedCardIds.add(nextCard.id);
    nextSeed = picked.seed;
  }

  return {
    cards,
    signatureCardIds,
    seed: nextSeed,
  };
}

function createSignaturePlan(
  run: AdventureRunState,
  node: AdventureNode,
  profile: MatchEnemyProfile,
  totalUpgradeCards: number,
  usedCardIds: Set<string>,
  seed: number,
) {
  const desiredCount =
    totalUpgradeCards <= 0
      ? 0
      : node.kind === "boss"
        ? 3
        : node.kind === "elite"
          ? 2
          : totalUpgradeCards >= 3
            ? 1
            : 0;

  return createSignatureCards(run, node, profile, Math.min(desiredCount, totalUpgradeCards), usedCardIds, seed);
}

function pickUpgradeCards(
  count: number,
  run: AdventureRunState,
  node: AdventureNode,
  profile: MatchEnemyProfile,
): { cards: CardArchetype[]; rarityCounts: Record<CardRarity, number>; signatureCardIds: string[] } {
  if (count <= 0) {
    return {
      cards: [],
      rarityCounts: createRarityRecord(),
      signatureCardIds: [],
    };
  }

  const weights = getRarityWeights(run, node);
  const usedCardIds = new Set<string>();
  const rarityCounts = createRarityRecord();
  const chosenCards: CardArchetype[] = [];
  let seed = mixSeed(
    run.seed,
    `enemy:${node.id}:profile:${profile.id}:deck:${run.deck.cards.length}:u${run.rewardProgress.claimedByRarity.uncommon}:r${run.rewardProgress.claimedByRarity.rare}`,
  );

  const signaturePlan = createSignaturePlan(run, node, profile, count, usedCardIds, seed);
  signaturePlan.cards.forEach((card) => {
    chosenCards.push(card);
    rarityCounts[card.rarity] += 1;
  });
  seed = signaturePlan.seed;

  while (chosenCards.length < count) {
    const pickedRarity = pickWeightedRarity(
      [
        { rarity: "common", weight: weights.common },
        { rarity: "uncommon", weight: weights.uncommon },
        { rarity: "rare", weight: weights.rare },
      ],
      seed,
    );

    const availableCards = ADVENTURE_REWARD_POOLS[pickedRarity.rarity]
      .filter((cardId) => !usedCardIds.has(cardId))
      .map((cardId) => getCardArchetype(cardId))
      .sort((left, right) => {
        const scoreDiff = scoreCardForProfile(right, profile) - scoreCardForProfile(left, profile);
        if (scoreDiff !== 0) {
          return scoreDiff;
        }

        return left.id.localeCompare(right.id);
      });

    const fallbackCards =
      availableCards.length > 0
        ? availableCards
        : ADVENTURE_REWARD_POOLS.common
            .filter((cardId) => !usedCardIds.has(cardId))
            .map((cardId) => getCardArchetype(cardId));
    const pickedCard = pickWithSeed(fallbackCards.slice(0, Math.min(4, fallbackCards.length)), pickedRarity.seed);
    const nextCard = cloneEnemyUpgradeCard(pickedCard.item);

    chosenCards.push(nextCard);
    usedCardIds.add(nextCard.id);
    rarityCounts[nextCard.rarity] += 1;
    seed = pickedCard.seed;
  }

  return {
    cards: chosenCards,
    rarityCounts,
    signatureCardIds: signaturePlan.signatureCardIds,
  };
}

function buildBaseDeckWithReplacements(
  baseDeck: CardArchetype[],
  replacements: number,
  replacementCards: CardArchetype[],
): CardArchetype[] {
  if (replacements <= 0 || replacementCards.length === 0) {
    return baseDeck.map((card) => ({ ...card, sides: { ...card.sides } }));
  }

  const weakestIndexes = baseDeck
    .map((card, index) => ({
      index,
      strength: getCardStrength(card),
      cardId: card.id,
    }))
    .sort((left, right) => {
      if (left.strength !== right.strength) {
        return left.strength - right.strength;
      }

      if (left.cardId !== right.cardId) {
        return left.cardId.localeCompare(right.cardId);
      }

      return left.index - right.index;
    })
    .slice(0, replacements)
    .map((entry) => entry.index);

  const nextDeck = [...baseDeck];
  weakestIndexes.forEach((deckIndex, replacementIndex) => {
    nextDeck[deckIndex] = replacementCards[replacementIndex];
  });
  return nextDeck;
}

function getPlayerOwnedBaseIds(run: AdventureRunState): Set<string> {
  return new Set(run.deck.cards.map((entry) => entry.card.baseArchetypeId ?? entry.card.id));
}

function buildEnemyDraftDeck(run: AdventureRunState): CardArchetype[] {
  const ownedBaseIds = getPlayerOwnedBaseIds(run);
  const availableDraftIds = DRAFT_POOL_CARD_IDS.filter((cardId) => !ownedBaseIds.has(cardId));
  const cardsToDraft = Math.max(run.config.draftPickCount, run.deck.cards.length);

  if (availableDraftIds.length < cardsToDraft) {
    throw new Error("Not enough shared draft cards remain to build the enemy deck.");
  }

  return availableDraftIds.slice(0, cardsToDraft).map((cardId) => getCardArchetype(cardId));
}

function getSearchDepth(run: AdventureRunState, node: AdventureNode, profile: MatchEnemyProfile): number {
  const clearedBeforeNode = getClearedLocationsBeforeNode(run, node);
  const combatsDone = getCombatsCompleted(run);

  let depth: number;
  if (node.kind === "boss") {
    depth = 3;
  } else if (node.kind === "elite") {
    depth = clearedBeforeNode >= 6 ? 3 : 2;
  } else {
    // Progressive: first 2 combats depth 1, then ramp up
    depth = combatsDone <= 1 ? 1 : clearedBeforeNode >= 5 ? 2 : 1;
  }

  if (profile.id === "trickster" || profile.id === "warden" || profile.id === "shaper") {
    depth = Math.min(3, depth + 1);
  }

  return depth;
}

function getBeamWidth(run: AdventureRunState, node: AdventureNode, profile: MatchEnemyProfile, searchDepth: number): number {
  if (node.kind === "boss") {
    return profile.id === "warden" ? 8 : searchDepth >= 3 ? 8 : 10;
  }

  if (node.kind === "elite") {
    return profile.id === "executioner" ? 9 : searchDepth >= 3 ? 9 : 10;
  }

  if (profile.id === "swarm") {
    return 11;
  }

  // Early combats: larger beam = more random-feeling (greedy bot picks from wider pool)
  const combatsDone = getCombatsCompleted(run);
  if (combatsDone <= 1) return 14; // very wide beam → more variation, less optimal
  if (combatsDone <= 3) return 12;

  return searchDepth >= 2 ? 10 : 12;
}

function getEnemyBotId(run: AdventureRunState, node: AdventureNode, profile: MatchEnemyProfile): AdventureEnemyLoadout["botId"] {
  const clearedBeforeNode = getClearedLocationsBeforeNode(run, node);
  const combatsDone = getCombatsCompleted(run);

  if (node.kind === "boss") {
    return "champion";
  }

  if (node.kind === "elite") {
    // Early elites use heuristic, late elites use champion
    return clearedBeforeNode >= 7 || profile.id === "executioner" || profile.id === "shaper"
      ? "champion"
      : "heuristic";
  }

  // Progressive normal combat difficulty:
  // First 2 combats: greedy (weakest AI)
  // Combats 3-4: heuristic (medium AI)
  // Combats 5+: champion (strongest AI)
  if (combatsDone <= 1) {
    return "greedy";
  }

  if (combatsDone <= 3) {
    return "heuristic";
  }

  return clearedBeforeNode >= 5 ? "champion" : "heuristic";
}

/**
 * Builds the deterministic enemy deck, search profile, and playstyle for one adventure encounter.
 */
export function buildAdventureEnemyLoadout(run: AdventureRunState, node: AdventureNode): AdventureEnemyLoadout {
  const draftDeck = buildEnemyDraftDeck(run);
  const budget = getUpgradeBudget(run, node);
  const totalUpgradeCards = budget.replacements + budget.additions;
  const profile = pickEnemyProfileForNode(run, node);
  const upgradeCards = pickUpgradeCards(totalUpgradeCards, run, node, profile);
  const replacementCards = upgradeCards.cards.slice(0, budget.replacements);
  const addedCards = upgradeCards.cards.slice(budget.replacements);
  const rawCards =
    node.kind === "boss"
      ? upgradeCards.cards.slice(0, draftDeck.length)
      : [...buildBaseDeckWithReplacements(draftDeck, budget.replacements, replacementCards), ...addedCards];
  const cards = rawCards;
  const searchDepth = getSearchDepth(run, node, profile);
  return {
    botId: getEnemyBotId(run, node, profile),
    profile,
    cards,
    cardIds: cards.map((card) => card.id),
    replacements: budget.replacements,
    additions: budget.additions,
    rarityCounts: upgradeCards.rarityCounts,
    searchDepth,
    beamWidth: getBeamWidth(run, node, profile, searchDepth),
    threatLabel: `${profile.name} - ${profile.playstyle}`,
    signatureCardIds: upgradeCards.signatureCardIds.filter((cardId) => cards.some((card) => card.id === cardId)),
  };
}
