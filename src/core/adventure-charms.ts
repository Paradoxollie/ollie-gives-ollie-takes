import { LUCKY_CHARM_POOL_BY_RARITY, STARTER_LUCKY_CHARM_POOL, getLuckyCharmDefinition } from "@/core/config/luckyCharms";
import { ADVENTURE_CHARM_CONFIG } from "@/core/config/gameConfig";
import { addCardToAdventureDeck } from "@/core/adventure-rewards";
import { createLuckyCharmPenaltyCard } from "@/core/cards";
import { nextRandom, pickWithSeed, shuffleWithSeed } from "@/core/utils/rng";
import type {
  AdventureCharmOfferSource,
  AdventureCharmOfferState,
  AdventureCharmProgress,
  AdventureRunState,
  LuckyCharmId,
  LuckyCharmRarity,
} from "@/core/types";

function createSourceCopy(source: AdventureCharmOfferSource): Pick<AdventureCharmOfferState, "title" | "subtitle" | "canSkip"> {
  switch (source) {
    case "start":
      return {
        title: "Choisis ton porte-bonheur",
        subtitle: "Le debut de run impose un choix. Ce porte-bonheur definira deja une vraie direction de build.",
        canSkip: false,
      };
    case "chest":
      return {
        title: "Porte-bonheur de coffre",
        subtitle: "Le coffre renferme un nouvel objet de run. Choisis celui qui sert le mieux ton deck.",
        canSkip: true,
      };
    case "elite":
      return {
        title: "Trophee d'elite",
        subtitle: "Une presence rare est tombee. Tu peux repartir avec un porte-bonheur supplementaire.",
        canSkip: true,
      };
  }
}

function listEligibleCharmIds(ownedCharmIds: LuckyCharmId[], source: AdventureCharmOfferSource): LuckyCharmId[] {
  const owned = new Set(ownedCharmIds);
  const pool = source === "start"
    ? STARTER_LUCKY_CHARM_POOL
    : [...LUCKY_CHARM_POOL_BY_RARITY.common, ...LUCKY_CHARM_POOL_BY_RARITY.rare, ...LUCKY_CHARM_POOL_BY_RARITY.legendary];
  return pool.filter((charmId) => !owned.has(charmId));
}

function createEmptyOffer(source: AdventureCharmOfferSource, sourceNodeId: string | null): AdventureCharmOfferState {
  const copy = createSourceCopy(source);
  return {
    source,
    sourceNodeId,
    title: copy.title,
    subtitle: copy.subtitle,
    canSkip: copy.canSkip,
    options: [],
  };
}

function pickWeightedCharmRarity(
  eligibleCharmIds: LuckyCharmId[],
  weights: Record<LuckyCharmRarity, number>,
  seed: number,
): { rarity: LuckyCharmRarity; seed: number } {
  const weightsByRarity: Array<{ rarity: LuckyCharmRarity; weight: number }> = [
    {
      rarity: "common",
      weight: eligibleCharmIds.some((charmId) => getLuckyCharmDefinition(charmId).rarity === "common") ? weights.common : 0,
    },
    {
      rarity: "rare",
      weight: eligibleCharmIds.some((charmId) => getLuckyCharmDefinition(charmId).rarity === "rare") ? weights.rare : 0,
    },
    {
      rarity: "legendary",
      weight: eligibleCharmIds.some((charmId) => getLuckyCharmDefinition(charmId).rarity === "legendary") ? weights.legendary : 0,
    },
  ];
  const totalWeight = weightsByRarity.reduce((sum, entry) => sum + entry.weight, 0);
  if (totalWeight <= 0) {
    throw new Error("Lucky charm rarity weights must be positive.");
  }

  const weightedPool = weightsByRarity.flatMap((entry) => Array.from({ length: entry.weight }, () => entry.rarity));
  const picked = pickWithSeed(weightedPool, seed);
  return {
    rarity: picked.item,
    seed: picked.seed,
  };
}

export function createInitialAdventureCharmProgress(): AdventureCharmProgress {
  return {
    eliteCharmOffersSeen: 0,
    normalVictoriesSinceHazelnutTrim: 0,
  };
}

export function hasLuckyCharm(charmIds: LuckyCharmId[], charmId: LuckyCharmId): boolean {
  return charmIds.includes(charmId);
}

export function createAdventureCharmOffer(options: {
  source: AdventureCharmOfferSource;
  sourceNodeId: string | null;
  ownedCharmIds: LuckyCharmId[];
  seed: number;
}): { offer: AdventureCharmOfferState | null; seed: number } {
  const eligibleCharmIds = listEligibleCharmIds(options.ownedCharmIds, options.source);
  if (eligibleCharmIds.length === 0) {
    return {
      offer: null,
      seed: options.seed,
    };
  }

  const copy = createSourceCopy(options.source);
  if (options.source === "start") {
    const shuffled = shuffleWithSeed(eligibleCharmIds, options.seed);
    return {
      offer: {
        source: options.source,
        sourceNodeId: options.sourceNodeId,
        title: copy.title,
        subtitle: copy.subtitle,
        canSkip: copy.canSkip,
        options: shuffled.items.slice(0, Math.min(ADVENTURE_CHARM_CONFIG.starterOfferSize, shuffled.items.length)).map((charmId) => ({
          charmId,
        })),
      },
      seed: shuffled.seed,
    };
  }

  const offerSize =
    options.source === "chest" ? ADVENTURE_CHARM_CONFIG.chestOfferSize : ADVENTURE_CHARM_CONFIG.eliteOfferSize;
  const weights =
    options.source === "chest"
      ? {
          common: ADVENTURE_CHARM_CONFIG.chestCommonWeight,
          rare: ADVENTURE_CHARM_CONFIG.chestRareWeight,
          legendary: ADVENTURE_CHARM_CONFIG.chestLegendaryWeight,
        }
      : {
          common: ADVENTURE_CHARM_CONFIG.eliteCommonWeight,
          rare: ADVENTURE_CHARM_CONFIG.eliteRareWeight,
          legendary: ADVENTURE_CHARM_CONFIG.eliteLegendaryWeight,
        };

  const pickedOptions: LuckyCharmId[] = [];
  const used = new Set<LuckyCharmId>();
  let nextSeed = options.seed;

  while (pickedOptions.length < offerSize && used.size < eligibleCharmIds.length) {
    const available = eligibleCharmIds.filter((charmId) => !used.has(charmId));
    const pickedRarity = pickWeightedCharmRarity(available, weights, nextSeed);
    nextSeed = pickedRarity.seed;
    const availableByRarity = available.filter((charmId) => getLuckyCharmDefinition(charmId).rarity === pickedRarity.rarity);
    const pickedCharm = pickWithSeed(availableByRarity, nextSeed);
    pickedOptions.push(pickedCharm.item);
    used.add(pickedCharm.item);
    nextSeed = pickedCharm.seed;
  }

  return {
    offer: {
      source: options.source,
      sourceNodeId: options.sourceNodeId,
      title: copy.title,
      subtitle: copy.subtitle,
      canSkip: copy.canSkip,
      options: pickedOptions.map((charmId) => ({ charmId })),
    },
    seed: nextSeed,
  };
}

export function maybeCreateEliteCharmOffer(options: {
  sourceNodeId: string;
  ownedCharmIds: LuckyCharmId[];
  progress: AdventureCharmProgress;
  seed: number;
}): { offer: AdventureCharmOfferState | null; progress: AdventureCharmProgress; seed: number } {
  if (listEligibleCharmIds(options.ownedCharmIds, "elite").length === 0) {
    return {
      offer: null,
      progress: options.progress,
      seed: options.seed,
    };
  }

  const rolled = nextRandom(options.seed);
  if (rolled.value >= ADVENTURE_CHARM_CONFIG.eliteDropChance) {
    return {
      offer: null,
      progress: options.progress,
      seed: rolled.seed,
    };
  }

  const created = createAdventureCharmOffer({
    source: "elite",
    sourceNodeId: options.sourceNodeId,
    ownedCharmIds: options.ownedCharmIds,
    seed: rolled.seed,
  });

  return {
    offer: created.offer,
    progress: {
      ...options.progress,
      eliteCharmOffersSeen: options.progress.eliteCharmOffersSeen + (created.offer ? 1 : 0),
    },
    seed: created.seed,
  };
}

export function claimAdventureCharm(run: AdventureRunState, charmId: LuckyCharmId): AdventureRunState {
  if (run.charms.includes(charmId)) {
    return run;
  }

  let nextRun: AdventureRunState = {
    ...run,
    charms: [...run.charms, charmId],
  };

  if (charmId === "split-hazelnut") {
    const added = addCardToAdventureDeck(
      nextRun.deck,
      createLuckyCharmPenaltyCard(`generated-${run.seed}-${run.deck.nextGeneratedCardSequence}`),
    );
    nextRun = {
      ...nextRun,
      deck: added.deck,
    };
  }

  return nextRun;
}
