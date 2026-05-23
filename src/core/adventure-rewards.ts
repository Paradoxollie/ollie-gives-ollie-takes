import { ADVENTURE_REWARD_POOLS } from "@/core/config/adventureRewards";
import { ADVENTURE_REWARD_CONFIG, ADVENTURE_REWARD_FIT_CONFIG } from "@/core/config/gameConfig";
import {
  createAdventureDeckCard,
  createInitialAdventureDeck,
  createRarityRecord,
  getCardArchetype,
} from "@/core/cards";
import { analyzeAdventureDeckBuildProfileV4, explainRewardFit } from "@/core/deck-building";
import { pickWithSeed } from "@/core/utils/rng";
import type {
  AdventureDeckCard,
  AdventureDeckState,
  AdventureNodeType,
  AdventureRewardOption,
  AdventureRewardProgress,
  AdventureRewardState,
  CardArchetype,
  CardRarity,
  CardRole,
} from "@/core/types";

function pickWeightedRarity(
  weightedRarities: Array<{ rarity: CardRarity; weight: number }>,
  seed: number,
): { rarity: CardRarity; seed: number } {
  const totalWeight = weightedRarities.reduce((sum, entry) => sum + entry.weight, 0);
  if (totalWeight <= 0) {
    throw new Error("Reward rarity weights must sum to a positive number.");
  }

  const weightedPool = weightedRarities.flatMap((entry) =>
    Array.from({ length: entry.weight }, () => entry.rarity),
  );
  const picked = pickWithSeed(weightedPool, seed);
  return {
    rarity: picked.item,
    seed: picked.seed,
  };
}

function getBaseWeights(sourceNodeKind: AdventureNodeType): Record<CardRarity, number> {
  if (sourceNodeKind === "chest") {
    return {
      common: ADVENTURE_REWARD_CONFIG.treasureCommonWeight,
      uncommon: ADVENTURE_REWARD_CONFIG.treasureUncommonWeight,
      rare: ADVENTURE_REWARD_CONFIG.treasureRareWeight,
    };
  }

  if (sourceNodeKind === "elite") {
    return {
      common: ADVENTURE_REWARD_CONFIG.eliteCommonWeight,
      uncommon: ADVENTURE_REWARD_CONFIG.eliteUncommonWeight,
      rare: ADVENTURE_REWARD_CONFIG.eliteRareWeight,
    };
  }

  return {
    common: ADVENTURE_REWARD_CONFIG.normalCommonWeight,
    uncommon: ADVENTURE_REWARD_CONFIG.normalUncommonWeight,
    rare: ADVENTURE_REWARD_CONFIG.normalRareWeight,
  };
}

function getTreasureWeights(): Record<CardRarity, number> {
  return {
    common: ADVENTURE_REWARD_CONFIG.treasureCommonWeight,
    uncommon: ADVENTURE_REWARD_CONFIG.treasureUncommonWeight,
    rare: ADVENTURE_REWARD_CONFIG.treasureRareWeight,
  };
}

function getGuaranteedUncommonCount(progress: AdventureRewardProgress): number {
  const offerIndex = progress.offersSeen + 1;
  let guaranteedCount = 0;

  if (
    offerIndex >= ADVENTURE_REWARD_CONFIG.firstGuaranteedUncommonOfferIndex &&
    progress.offeredByRarity.uncommon < 1
  ) {
    guaranteedCount += 1;
  }

  if (
    offerIndex >= ADVENTURE_REWARD_CONFIG.secondGuaranteedUncommonOfferIndex &&
    progress.offeredByRarity.uncommon + guaranteedCount < 2
  ) {
    guaranteedCount += 1;
  }

  return Math.min(
    guaranteedCount,
    ADVENTURE_REWARD_CONFIG.offerSize,
    ADVENTURE_REWARD_CONFIG.maxUncommonOffersPerRun - progress.offeredByRarity.uncommon,
  );
}

function listAvailableRewardIds(
  rarity: CardRarity,
  usedArchetypeIds: Set<string>,
): string[] {
  return ADVENTURE_REWARD_POOLS[rarity].filter((archetypeId) => {
    return !usedArchetypeIds.has(archetypeId);
  });
}

function rewardCardBaseId(card: Pick<CardArchetype, "id" | "baseArchetypeId">): string {
  return card.baseArchetypeId ?? card.id;
}

function cardRole(card: Pick<CardArchetype, "role">): CardRole {
  return card.role ?? "engine";
}

function scoreRewardEffectFit(card: CardArchetype, playerDeck: AdventureDeckState): number {
  const profile = analyzeAdventureDeckBuildProfileV4(playerDeck);
  const familyCount = profile.familyCounts[card.family] ?? 0;

  return (card.effects ?? []).reduce((score, effect) => {
    let nextScore = score;

    if (effect.requiredFamilyCount) {
      nextScore +=
        familyCount >= effect.requiredFamilyCount
          ? ADVENTURE_REWARD_FIT_CONFIG.activeFamilyConditionScore
          : -ADVENTURE_REWARD_FIT_CONFIG.inactiveFamilyConditionPenalty;
    }

    if (effect.condition === "adjacent-ally" || effect.condition === "adjacent-enemy") {
      nextScore += ADVENTURE_REWARD_FIT_CONFIG.adjacentSetupScore;
    }

    if (effect.condition === "corner" || effect.condition === "center" || effect.condition === "behind-on-board") {
      nextScore += ADVENTURE_REWARD_FIT_CONFIG.positionSetupScore;
    }

    if (effect.trigger === "on-flip" && (card.role === "attacker" || card.role === "payoff")) {
      nextScore += ADVENTURE_REWARD_FIT_CONFIG.onFlipAttackerScore;
    }

    if (effect.kind === "draw-next-turn") {
      nextScore += ADVENTURE_REWARD_FIT_CONFIG.drawScore;
    }

    if (effect.kind === "gain-shield") {
      nextScore += ADVENTURE_REWARD_FIT_CONFIG.shieldScore;
    }

    if (effect.kind === "boost-self") {
      nextScore += ADVENTURE_REWARD_FIT_CONFIG.boostScore;
    }

    return nextScore;
  }, 0);
}

function scoreRewardDeckFit(card: CardArchetype, playerDeck: AdventureDeckState | undefined): number {
  if (!playerDeck) {
    return 0;
  }

  const profile = analyzeAdventureDeckBuildProfileV4(playerDeck);
  const role = cardRole(card);
  const familyCount = profile.familyCounts[card.family] ?? 0;
  const copies = profile.copyCountsByBaseId[rewardCardBaseId(card)] ?? 0;
  let score = 0;

  if (profile.dominantFamily === card.family) {
    score += ADVENTURE_REWARD_FIT_CONFIG.sameFamilyScore;
  } else if (profile.dominantFamily && card.hybridLinks?.includes(profile.dominantFamily)) {
    score += ADVENTURE_REWARD_FIT_CONFIG.hybridFamilyScore;
  }

  if (familyCount > 0) {
    score += ADVENTURE_REWARD_FIT_CONFIG.familyPresenceScore;
    score += Math.min(
      ADVENTURE_REWARD_FIT_CONFIG.maxFamilyCardScore,
      familyCount * ADVENTURE_REWARD_FIT_CONFIG.familyCardScore,
    );
  }

  if (profile.hybridFamilies.includes(card.family)) {
    score += ADVENTURE_REWARD_FIT_CONFIG.hybridFamilyScore;
  }

  if (profile.missingRoles.includes(role)) {
    score += ADVENTURE_REWARD_FIT_CONFIG.missingRoleScore;
  }

  if (role === "attacker") {
    score += ADVENTURE_REWARD_FIT_CONFIG.attackerScore;
    if (profile.roleCounts.anchor >= 3) {
      score += ADVENTURE_REWARD_FIT_CONFIG.attackerAnchorScore;
    }
  }

  if (role === "payoff") {
    score += ADVENTURE_REWARD_FIT_CONFIG.payoffScore;
    if (profile.roleCounts.connector >= 3) {
      score += ADVENTURE_REWARD_FIT_CONFIG.payoffConnectorScore;
    }
  }

  if (copies === 1) {
    score += ADVENTURE_REWARD_FIT_CONFIG.firstCopyScore;
  } else if (copies >= 3) {
    score -= ADVENTURE_REWARD_FIT_CONFIG.duplicatePenalty;
  }

  if (card.rarity === "uncommon") {
    score += ADVENTURE_REWARD_FIT_CONFIG.uncommonScore;
  } else if (card.rarity === "rare") {
    score += ADVENTURE_REWARD_FIT_CONFIG.rareScore;
  }

  return score + scoreRewardEffectFit(card, playerDeck);
}

function pickRewardArchetypeId(
  availableRewardIds: string[],
  playerDeck: AdventureDeckState | undefined,
  seed: number,
): { archetypeId: string; seed: number } {
  if (!playerDeck) {
    const picked = pickWithSeed(availableRewardIds, seed);
    return {
      archetypeId: picked.item,
      seed: picked.seed,
    };
  }

  const rankedRewardIds = availableRewardIds
    .map((archetypeId) => ({
      archetypeId,
      score: scoreRewardDeckFit(getCardArchetype(archetypeId), playerDeck),
    }))
    .sort((left, right) => {
      if (left.score !== right.score) {
        return right.score - left.score;
      }

      return left.archetypeId.localeCompare(right.archetypeId);
    })
    .map((entry) => entry.archetypeId);
  const finalistCount = Math.min(ADVENTURE_REWARD_FIT_CONFIG.finalistCount, rankedRewardIds.length);
  const picked = pickWithSeed(rankedRewardIds.slice(0, finalistCount), seed);

  return {
    archetypeId: picked.item,
    seed: picked.seed,
  };
}

function pickRewardRarity(
  sourceNodeKind: AdventureNodeType,
  progress: AdventureRewardProgress,
  offeredByRarity: Record<CardRarity, number>,
  usedArchetypeIds: Set<string>,
  seed: number,
): { rarity: CardRarity; seed: number } {
  const baseWeights = getBaseWeights(sourceNodeKind);
  const offerIndex = progress.offersSeen + 1;

  return pickWeightedRarity(
    [
      {
        rarity: "common",
        weight: listAvailableRewardIds("common", usedArchetypeIds).length > 0 ? baseWeights.common : 0,
      },
      {
        rarity: "uncommon",
        weight:
          offeredByRarity.uncommon >= ADVENTURE_REWARD_CONFIG.maxUncommonOffersPerRun ||
          listAvailableRewardIds("uncommon", usedArchetypeIds).length === 0
            ? 0
            : baseWeights.uncommon,
      },
      {
        rarity: "rare",
        weight:
          offerIndex < ADVENTURE_REWARD_CONFIG.rareUnlockOfferIndex ||
          offeredByRarity.rare >= ADVENTURE_REWARD_CONFIG.maxRareOffersPerRun ||
          listAvailableRewardIds("rare", usedArchetypeIds).length === 0
            ? 0
            : baseWeights.rare,
      },
    ],
    seed,
  );
}

function pickRewardOption(
  rarity: CardRarity,
  usedArchetypeIds: Set<string>,
  playerDeck: AdventureDeckState | undefined,
  seed: number,
  rewardIndex: number,
  slotIndex: number,
): { option: AdventureRewardOption; seed: number } {
  const availableRewardIds = listAvailableRewardIds(rarity, usedArchetypeIds);
  if (availableRewardIds.length === 0) {
    throw new Error(`No reward cards remain for rarity ${rarity}.`);
  }

  const pickedReward = pickRewardArchetypeId(availableRewardIds, playerDeck, seed);
  const archetypeId = pickedReward.archetypeId;
  const card = getCardArchetype(archetypeId);
  usedArchetypeIds.add(archetypeId);
  const ownedCount =
    playerDeck?.cards.filter((entry) => rewardCardBaseId(entry.card) === rewardCardBaseId(card)).length ?? 0;

  return {
    option: {
      rewardId: `offer-${rewardIndex}-slot-${slotIndex + 1}-${archetypeId}`,
      archetypeId,
      rarity,
      rewardType: "generated",
      alreadyOwnedCount: ownedCount,
      sourceDeckCount: 0,
      reason: playerDeck ? explainRewardFit(card, playerDeck) : card.deckbuildingObjective,
    },
    seed: pickedReward.seed,
  };
}

function pickSingleRewardCard(weights: Record<CardRarity, number>, seed: number): { card: CardArchetype; seed: number } {
  const pickedRarity = pickWeightedRarity(
    [
      { rarity: "common", weight: weights.common },
      { rarity: "uncommon", weight: weights.uncommon },
      { rarity: "rare", weight: weights.rare },
    ],
    seed,
  );
  const pickedCardId = pickWithSeed(ADVENTURE_REWARD_POOLS[pickedRarity.rarity], pickedRarity.seed);
  return {
    card: getCardArchetype(pickedCardId.item),
    seed: pickedCardId.seed,
  };
}

export function createInitialAdventureDeckState(): AdventureDeckState {
  return createInitialAdventureDeck();
}

export function createInitialAdventureDeckCardIds(): string[] {
  return createInitialAdventureDeck().cards.map((entry) => entry.card.id);
}

export function createInitialAdventureRewardProgress(): AdventureRewardProgress {
  return {
    offersSeen: 0,
    offeredByRarity: createRarityRecord(),
    claimedByRarity: createRarityRecord(),
  };
}

export function shouldOfferAdventureReward(sourceNodeKind: AdventureNodeType): boolean {
  return sourceNodeKind === "combat" || sourceNodeKind === "elite" || sourceNodeKind === "chest";
}

export function addCardToAdventureDeck(
  deck: AdventureDeckState,
  card: CardArchetype,
): { deck: AdventureDeckState; deckCard: AdventureDeckCard } {
  const deckCard = createAdventureDeckCard(`deck-${deck.nextDeckCardSequence}`, card);

  return {
    deck: {
      cards: [...deck.cards, deckCard],
      nextDeckCardSequence: deck.nextDeckCardSequence + 1,
      nextGeneratedCardSequence: deck.nextGeneratedCardSequence,
    },
    deckCard,
  };
}

export function removeCardFromAdventureDeck(deck: AdventureDeckState, deckCardId: string): AdventureDeckState {
  return {
    cards: deck.cards.filter((entry) => entry.deckCardId !== deckCardId),
    nextDeckCardSequence: deck.nextDeckCardSequence,
    nextGeneratedCardSequence: deck.nextGeneratedCardSequence,
  };
}

export function replaceAdventureDeckCard(
  deck: AdventureDeckState,
  deckCardId: string,
  nextCard: CardArchetype,
): AdventureDeckState {
  return {
    cards: deck.cards.map((entry) =>
      entry.deckCardId === deckCardId ? createAdventureDeckCard(entry.deckCardId, nextCard) : entry,
    ),
    nextDeckCardSequence: deck.nextDeckCardSequence,
    nextGeneratedCardSequence: deck.nextGeneratedCardSequence + 1,
  };
}

export function createAdventureRewardOffer(options: {
  sourceNodeId: string;
  sourceNodeKind: AdventureNodeType;
  progress: AdventureRewardProgress;
  playerDeck?: AdventureDeckState;
  seed: number;
}): { rewardOffer: AdventureRewardState; progress: AdventureRewardProgress; seed: number } {
  if (!shouldOfferAdventureReward(options.sourceNodeKind)) {
    throw new Error(`Node kind ${options.sourceNodeKind} does not produce a card reward.`);
  }

  const offerIndex = options.progress.offersSeen + 1;
  const nextOfferedByRarity = {
    ...options.progress.offeredByRarity,
  };
  const usedArchetypeIds = new Set<string>();
  const forcedUncommonCount = Math.min(
    getGuaranteedUncommonCount(options.progress),
    listAvailableRewardIds("uncommon", usedArchetypeIds).length,
  );
  const rewardOptions: AdventureRewardOption[] = [];
  let nextSeed = options.seed;

  for (let slotIndex = 0; slotIndex < ADVENTURE_REWARD_CONFIG.offerSize; slotIndex += 1) {
    let rarity: CardRarity = "uncommon";

    if (slotIndex >= forcedUncommonCount) {
      const pickedRarity = pickRewardRarity(
        options.sourceNodeKind,
        options.progress,
        nextOfferedByRarity,
        usedArchetypeIds,
        nextSeed,
      );
      rarity = pickedRarity.rarity;
      nextSeed = pickedRarity.seed;
    }

    const pickedOption = pickRewardOption(rarity, usedArchetypeIds, options.playerDeck, nextSeed, offerIndex, slotIndex);
    rewardOptions.push(pickedOption.option);
    nextOfferedByRarity[rarity] += 1;
    nextSeed = pickedOption.seed;
  }

  return {
    rewardOffer: {
      sourceNodeId: options.sourceNodeId,
      sourceNodeKind: options.sourceNodeKind,
      options: rewardOptions,
    },
    progress: {
      offersSeen: offerIndex,
      offeredByRarity: nextOfferedByRarity,
      claimedByRarity: { ...options.progress.claimedByRarity },
    },
    seed: nextSeed,
  };
}

export function createAdventureStealRewardOffer(options: {
  sourceNodeId: string;
  sourceNodeKind: AdventureNodeType;
  enemyCards: CardArchetype[];
  playerDeck: AdventureDeckState;
  seed: number;
}): { rewardOffer: AdventureRewardState | null; seed: number } {
  const candidates = [...options.enemyCards].filter((card) => card.temporaryScope !== "combat");
  if (candidates.length === 0) {
    return {
      rewardOffer: null,
      seed: options.seed,
    };
  }

  let nextSeed = options.seed;
  const pickedOptions: AdventureRewardOption[] = [];
  const remaining = [...candidates];
  const optionCount = Math.min(ADVENTURE_REWARD_CONFIG.offerSize, remaining.length);
  const sourceDeckCounts = candidates.reduce<Record<string, number>>((counts, card) => {
    const baseId = card.baseArchetypeId ?? card.id;
    counts[baseId] = (counts[baseId] ?? 0) + 1;
    return counts;
  }, {});

  for (let index = 0; index < optionCount; index += 1) {
    const picked = pickWithSeed(remaining, nextSeed);
    nextSeed = picked.seed;
    const baseId = picked.item.baseArchetypeId ?? picked.item.id;
    const alreadyOwnedCount = options.playerDeck.cards.filter(
      (entry) => (entry.card.baseArchetypeId ?? entry.card.id) === baseId,
    ).length;
    pickedOptions.push({
      rewardId: `steal-${options.sourceNodeId}-slot-${index + 1}-${picked.item.id}-${alreadyOwnedCount + 1}`,
      archetypeId: picked.item.id,
      card: picked.item,
      rarity: picked.item.rarity,
      rewardType: "steal",
      alreadyOwnedCount,
      sourceDeckCount: sourceDeckCounts[baseId] ?? 1,
      reason:
        alreadyOwnedCount > 0
          ? `Copie volee: tu possedes deja ${alreadyOwnedCount} exemplaire(s), celle-ci rend le plan plus regulier.`
          : explainRewardFit(picked.item, options.playerDeck),
    });
    remaining.splice(remaining.indexOf(picked.item), 1);
  }

  return {
    rewardOffer: {
      sourceNodeId: options.sourceNodeId,
      sourceNodeKind: options.sourceNodeKind,
      options: pickedOptions,
    },
    seed: nextSeed,
  };
}

export function createAdventureTreasureCard(seed: number): { card: CardArchetype; seed: number } {
  return pickSingleRewardCard(getTreasureWeights(), seed);
}

export function claimAdventureRewardOption(progress: AdventureRewardProgress, rarity: CardRarity): AdventureRewardProgress {
  return {
    ...progress,
    claimedByRarity: {
      ...progress.claimedByRarity,
      [rarity]: progress.claimedByRarity[rarity] + 1,
    },
  };
}
