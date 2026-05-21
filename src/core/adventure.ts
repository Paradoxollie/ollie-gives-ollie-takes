import { ADVENTURE_CONFIG, GAME_CONFIG } from "@/core/config/gameConfig";
import {
  claimAdventureCharm,
  createAdventureCharmOffer,
  createInitialAdventureCharmProgress,
  hasLuckyCharm,
  maybeCreateEliteCharmOffer,
} from "@/core/adventure-charms";
import {
  addCardToAdventureDeck,
  claimAdventureRewardOption,
  createAdventureRewardOffer,
  createAdventureStealRewardOffer,
  createInitialAdventureRewardProgress,
  removeCardFromAdventureDeck,
  replaceAdventureDeckCard,
  shouldOfferAdventureReward,
} from "@/core/adventure-rewards";
import {
  createAdventureDeckCard,
  createEmptyAdventureDeck,
  createFusionAdventureCard,
  createUpgradedAdventureCard,
  getAdventureDeckCard,
  getCardArchetype,
} from "@/core/cards";
import { DRAFT_POOL_CARD_IDS } from "@/core/config/decks";
import {
  FAMILY_STARTER_DECKS,
  STARTER_DECK_FAMILIES,
  getFamilyStarterCardIds,
  getFamilyStarterDeckConfig,
  type FamilyStarterDeckConfig,
} from "@/core/config/decks";
import { mixSeed, nextRandom, pickWithSeed, shuffleWithSeed } from "@/core/utils/rng";
import type {
  AdventureCampMode,
  AdventureCharmOfferState,
  AdventureConfig,
  AdventureDraftState,
  AdventureNode,
  AdventureNodeStatus,
  AdventureNodeType,
  AdventureRewardOption,
  AdventureRunState,
  AdventureSettings,
  BattleResult,
  CardArchetype,
  CardFamily,
  Direction,
} from "@/core/types";
import { DIRECTIONS } from "@/core/types";

type WeightedEncounterKind = Exclude<AdventureNodeType, "boss">;

interface EncounterCopy {
  titles: string[];
  descriptions: string[];
}

const NODE_COPY: Record<WeightedEncounterKind, EncounterCopy> = {
  combat: {
    titles: ["Escarmouche de mousse", "Sentier des griffes", "Route des brindilles", "Duel des fougeres"],
    descriptions: [
      "Un affrontement direct barre la route. Une victoire peut ouvrir un choix de carte a voler.",
      "Des silhouettes hostiles s'avancent. Gagne ici pour prendre une carte unique au deck adverse.",
      "Le chemin se resserre et force une bataille. Ce sont les rencontres les plus frequentes de la run.",
    ],
  },
  elite: {
    titles: ["Traqueur ancien", "Veilleur creux", "Predateur runique", "Champion des lianes"],
    descriptions: [
      "Un duel d'elite se prepare ici. L'ennemi y arrive avec un deck plus affute et une carte plus tentante a voler.",
      "Une presence plus lourde attend ici. Les elites montent plus vite en rarete et en coherence de deck.",
      "Ces combats sont plus dangereux qu'un noeud normal mais peuvent vraiment accelerer une run.",
    ],
  },
  shop: {
    titles: ["Echoppe de brindilles", "Marche aux lucioles", "Comptoir des runes", "Bazaar des souches"],
    descriptions: [
      "La forge permet de fusionner 2 cartes pour en creer une nouvelle a partir de leurs meilleurs cotes.",
      "Ici, tu combines 2 cartes de ton deck pour pousser un build fusion ou condenser ta puissance.",
      "Un bon noeud si tu veux transformer le deck plutot que l'agrandir.",
    ],
  },
  chest: {
    titles: ["Coffre noueux", "Cache de spores", "Malle de clairiere", "Tresor des racines"],
    descriptions: [
      "Un coffre attend ici. Il propose une carte unique a ajouter au deck fixe de la run.",
      "Ce noeud ouvre un choix de carte hors combat afin de pousser un style de jeu different.",
      "Le coffre agit comme une vraie source de cartes et non comme un simple loot placeholder.",
    ],
  },
  rest: {
    titles: ["Clairiere des songes", "Feu de canopee", "Repos du sous-bois", "Halte aux fougeres"],
    descriptions: [
      "Au camp, tu choisis entre retirer une carte du deck ou en ameliorer une pour gagner +1 sur un cote aleatoire.",
      "Une pause tactique pour tailler le deck ou renforcer une carte cle avant les prochains combats.",
      "Ce feu de camp sert deja a epurer ou ameliorer le deck selon l'etat de ta run.",
    ],
  },
};

const FIXED_BOSS_NODE = {
  title: "Le Collecteur final",
  description: "Boss final fixe du run. Il n'apparait qu'apres 12 lieux franchis.",
};

function toSortedLanes(lanes: number[]): number[] {
  return [...lanes].sort((left, right) => left - right);
}

function rollInteger(seed: number, min: number, max: number): { value: number; seed: number } {
  if (max < min) {
    throw new Error(`Invalid integer range ${min}-${max}.`);
  }

  const roll = nextRandom(seed);
  return {
    value: min + Math.floor(roll.value * (max - min + 1)),
    seed: roll.seed,
  };
}

function pickUniqueLanes(laneCount: number, desiredCount: number, seed: number): { lanes: number[]; seed: number } {
  const allLanes = Array.from({ length: laneCount }, (_, lane) => lane);
  const shuffled = shuffleWithSeed(allLanes, seed);
  return {
    lanes: toSortedLanes(shuffled.items.slice(0, desiredCount)),
    seed: shuffled.seed,
  };
}

function pickWeightedKind(
  weightedKinds: Array<{ kind: WeightedEncounterKind; weight: number }>,
  seed: number,
): { kind: WeightedEncounterKind; seed: number } {
  const totalWeight = weightedKinds.reduce((sum, entry) => sum + entry.weight, 0);
  if (totalWeight <= 0) {
    throw new Error("Encounter weights must sum to a positive number.");
  }

  const roll = nextRandom(seed);
  const threshold = roll.value * totalWeight;
  let cursor = 0;

  for (const entry of weightedKinds) {
    cursor += entry.weight;
    if (threshold < cursor) {
      return {
        kind: entry.kind,
        seed: roll.seed,
      };
    }
  }

  return {
    kind: weightedKinds[weightedKinds.length - 1].kind,
    seed: roll.seed,
  };
}

function pickWeightedLane(weightedLanes: Array<{ lane: number; weight: number }>, seed: number): { lane: number; seed: number } {
  const totalWeight = weightedLanes.reduce((sum, entry) => sum + entry.weight, 0);
  if (totalWeight <= 0) {
    throw new Error("Lane weights must sum to a positive number.");
  }

  const roll = nextRandom(seed);
  const threshold = roll.value * totalWeight;
  let cursor = 0;

  for (const entry of weightedLanes) {
    cursor += entry.weight;
    if (threshold < cursor) {
      return {
        lane: entry.lane,
        seed: roll.seed,
      };
    }
  }

  return {
    lane: weightedLanes[weightedLanes.length - 1].lane,
    seed: roll.seed,
  };
}

function pickNodeKind(
  depth: number,
  config: AdventureConfig,
  seed: number,
): { kind: WeightedEncounterKind; seed: number } {
  if (depth === 0) {
    return {
      kind: "combat",
      seed,
    };
  }

  const usePreBossWeights = depth === config.depthCount - 1;
  return pickWeightedKind(
    usePreBossWeights
      ? [
          { kind: "combat", weight: config.preBossCombatWeight },
          { kind: "elite", weight: config.preBossEliteWeight },
          { kind: "shop", weight: config.preBossShopWeight },
          { kind: "chest", weight: config.preBossChestWeight },
          { kind: "rest", weight: config.preBossRestWeight },
        ]
      : [
          { kind: "combat", weight: config.combatWeight },
          { kind: "elite", weight: config.eliteWeight },
          { kind: "shop", weight: config.shopWeight },
          { kind: "chest", weight: config.chestWeight },
          { kind: "rest", weight: config.restWeight },
        ],
    seed,
  );
}

function pickEncounterCopy(kind: WeightedEncounterKind, seed: number): { title: string; description: string; seed: number } {
  const copy = NODE_COPY[kind];
  const pickedTitle = pickWithSeed(copy.titles, seed);
  const pickedDescription = pickWithSeed(copy.descriptions, pickedTitle.seed);

  return {
    title: pickedTitle.item,
    description: pickedDescription.item,
    seed: pickedDescription.seed,
  };
}

function getPositivePartition(total: number, groupCount: number, seed: number): { sizes: number[]; seed: number } {
  if (groupCount < 1 || total < groupCount) {
    throw new Error(`Cannot partition ${total} values into ${groupCount} positive groups.`);
  }

  const sizes = Array.from({ length: groupCount }, () => 1);
  let nextSeed = seed;
  let remaining = total - groupCount;

  while (remaining > 0) {
    const pickedGroup = rollInteger(nextSeed, 0, groupCount - 1);
    sizes[pickedGroup.value] += 1;
    nextSeed = pickedGroup.seed;
    remaining -= 1;
  }

  return {
    sizes,
    seed: nextSeed,
  };
}

function pickBiasedLanes(
  laneCount: number,
  desiredCount: number,
  previousLanes: number[],
  maxLaneDrift: number,
  seed: number,
): { lanes: number[]; seed: number } {
  const chosenLanes = new Set<number>();
  let nextSeed = seed;

  while (chosenLanes.size < desiredCount) {
    const weightedLanes = Array.from({ length: laneCount }, (_, lane) => lane)
      .filter((lane) => !chosenLanes.has(lane))
      .map((lane) => {
        const nearestDistance = Math.min(...previousLanes.map((previousLane) => Math.abs(previousLane - lane)));
        return {
          lane,
          weight: Math.max(1, maxLaneDrift + 2 - nearestDistance),
        };
      });

    const picked = pickWeightedLane(weightedLanes, nextSeed);
    chosenLanes.add(picked.lane);
    nextSeed = picked.seed;
  }

  return {
    lanes: toSortedLanes([...chosenLanes]),
    seed: nextSeed,
  };
}

function addOptionalLocalBranch(
  currentRow: AdventureNode[],
  nextRow: AdventureNode[],
  outgoing: Map<string, Set<string>>,
  config: AdventureConfig,
  seed: number,
): number {
  if (config.extraConnectionChance <= 0) {
    return seed;
  }

  const nextIndexById = new Map(nextRow.map((node, index) => [node.id, index]));
  const candidates: Array<{ sourceId: string; targetId: string }> = [];

  for (const currentNode of currentRow) {
    const connectedTargetIndexes = [...(outgoing.get(currentNode.id) ?? [])]
      .map((nodeId) => nextIndexById.get(nodeId))
      .filter((index): index is number => index !== undefined)
      .sort((left, right) => left - right);

    if (connectedTargetIndexes.length === 0) {
      continue;
    }

    const candidateIndexes = [
      connectedTargetIndexes[0] - 1,
      connectedTargetIndexes[connectedTargetIndexes.length - 1] + 1,
    ].filter((index) => index >= 0 && index < nextRow.length);

    for (const candidateIndex of candidateIndexes) {
      const candidateNode = nextRow[candidateIndex];
      if ((outgoing.get(currentNode.id)?.has(candidateNode.id) ?? false) === true) {
        continue;
      }

      if (Math.abs(currentNode.lane - candidateNode.lane) > config.maxLaneDrift + 1) {
        continue;
      }

      candidates.push({
        sourceId: currentNode.id,
        targetId: candidateNode.id,
      });
    }
  }

  if (candidates.length === 0) {
    return seed;
  }

  const extraRoll = nextRandom(seed);
  if (extraRoll.value > config.extraConnectionChance) {
    return extraRoll.seed;
  }

  const picked = pickWithSeed(candidates, extraRoll.seed);
  outgoing.get(picked.item.sourceId)?.add(picked.item.targetId);
  return picked.seed;
}

function connectRows(
  currentRow: AdventureNode[],
  nextRow: AdventureNode[],
  config: AdventureConfig,
  seed: number,
): number {
  const sortedCurrentRow = [...currentRow].sort((left, right) => left.lane - right.lane);
  const sortedNextRow = [...nextRow].sort((left, right) => left.lane - right.lane);
  const outgoing = new Map(sortedCurrentRow.map((node) => [node.id, new Set<string>()]));
  let nextSeed = seed;

  if (sortedCurrentRow.length <= sortedNextRow.length) {
    const partition = getPositivePartition(sortedNextRow.length, sortedCurrentRow.length, nextSeed);
    nextSeed = partition.seed;
    let nextIndex = 0;

    for (let currentIndex = 0; currentIndex < sortedCurrentRow.length; currentIndex += 1) {
      const currentNode = sortedCurrentRow[currentIndex];
      const groupSize = partition.sizes[currentIndex];

      for (let offset = 0; offset < groupSize; offset += 1) {
        outgoing.get(currentNode.id)?.add(sortedNextRow[nextIndex + offset].id);
      }

      nextIndex += groupSize;
    }
  } else {
    const partition = getPositivePartition(sortedCurrentRow.length, sortedNextRow.length, nextSeed);
    nextSeed = partition.seed;
    let currentIndex = 0;

    for (let nextIndex = 0; nextIndex < sortedNextRow.length; nextIndex += 1) {
      const nextNode = sortedNextRow[nextIndex];
      const groupSize = partition.sizes[nextIndex];

      for (let offset = 0; offset < groupSize; offset += 1) {
        outgoing.get(sortedCurrentRow[currentIndex + offset].id)?.add(nextNode.id);
      }

      currentIndex += groupSize;
    }
  }

  nextSeed = addOptionalLocalBranch(sortedCurrentRow, sortedNextRow, outgoing, config, nextSeed);

  const nextOrder = new Map(sortedNextRow.map((node, index) => [node.id, index]));
  for (const currentNode of currentRow) {
    currentNode.nextNodeIds = [...(outgoing.get(currentNode.id) ?? [])].sort(
      (left, right) => (nextOrder.get(left) ?? 0) - (nextOrder.get(right) ?? 0),
    );
  }

  return nextSeed;
}

function createRow(
  depth: number,
  config: AdventureConfig,
  seed: number,
  previousRow: AdventureNode[] | null,
): { nodes: AdventureNode[]; seed: number } {
  let nextSeed = seed;
  let nodeCount = config.minStartingNodes;

  if (depth === 0) {
    const countRoll = rollInteger(nextSeed, config.minStartingNodes, config.maxStartingNodes);
    nodeCount = countRoll.value;
    nextSeed = countRoll.seed;
  } else {
    const countRoll = rollInteger(nextSeed, config.minNodesPerDepth, config.maxNodesPerDepth);
    nodeCount = countRoll.value;
    nextSeed = countRoll.seed;
  }

  const pickedLanes = previousRow
    ? pickBiasedLanes(
        config.laneCount,
        nodeCount,
        previousRow.map((node) => node.lane),
        config.maxLaneDrift,
        nextSeed,
      )
    : pickUniqueLanes(config.laneCount, nodeCount, nextSeed);
  nextSeed = pickedLanes.seed;

  const nodes: AdventureNode[] = [];

  for (const lane of pickedLanes.lanes) {
    const pickedKind = pickNodeKind(depth, config, nextSeed);
    nextSeed = pickedKind.seed;
    const pickedCopy = pickEncounterCopy(pickedKind.kind, nextSeed);
    nextSeed = pickedCopy.seed;

    nodes.push({
      id: `depth-${depth}-lane-${lane}`,
      depth,
      lane,
      kind: pickedKind.kind,
      title: pickedCopy.title,
      description: pickedCopy.description,
      nextNodeIds: [],
    });
  }

  if (!nodes.some((node) => node.kind === "combat" || node.kind === "elite")) {
    nodes[0] = {
      ...nodes[0],
      kind: depth === config.depthCount - 1 ? "elite" : "combat",
      title: NODE_COPY[depth === config.depthCount - 1 ? "elite" : "combat"].titles[0],
      description: NODE_COPY[depth === config.depthCount - 1 ? "elite" : "combat"].descriptions[0],
    };
  }

  return {
    nodes,
    seed: nextSeed,
  };
}

function buildAdventureMap(seed: number, config: AdventureConfig): { map: AdventureRunState["map"]; seed: number } {
  const rows: AdventureNode[][] = [];
  let nextSeed = seed;

  for (let depth = 0; depth < config.depthCount; depth += 1) {
    const row = createRow(depth, config, nextSeed, depth === 0 ? null : rows[depth - 1]);
    rows.push(row.nodes);
    nextSeed = row.seed;
  }

  for (let depth = 0; depth < rows.length - 1; depth += 1) {
    nextSeed = connectRows(rows[depth], rows[depth + 1], config, nextSeed);
  }

  const bossNode: AdventureNode = {
    id: "boss-final",
    depth: config.depthCount,
    lane: Math.floor(config.laneCount / 2),
    kind: "boss",
    title: FIXED_BOSS_NODE.title,
    description: FIXED_BOSS_NODE.description,
    nextNodeIds: [],
  };

  for (const node of rows[rows.length - 1]) {
    node.nextNodeIds = [bossNode.id];
  }

  return {
    map: {
      depthCount: config.depthCount,
      laneCount: config.laneCount,
      bossNodeId: bossNode.id,
      nodes: [...rows.flat(), bossNode],
    },
    seed: nextSeed,
  };
}

function createAdventureDraft(seed: number, config: AdventureConfig): { draft: AdventureDraftState; seed: number } {
  if (config.draftPickCount > config.draftOfferSize) {
    throw new Error("Draft pick count cannot be greater than draft offer size.");
  }

  const draftPool = [...DRAFT_POOL_CARD_IDS];
  const familiarCardIds = draftPool.filter((cardId) => getCardArchetype(cardId).family === "familiar");
  const nonFamiliarCardIds = draftPool.filter((cardId) => !familiarCardIds.includes(cardId));
  const shuffledNonFamiliars = shuffleWithSeed(nonFamiliarCardIds, seed);
  const fixedFamiliarCount = Math.min(familiarCardIds.length, config.draftOfferSize);
  const randomSlotCount = Math.max(0, config.draftOfferSize - fixedFamiliarCount);
  const offerCardIds = [
    ...familiarCardIds.slice(0, fixedFamiliarCount),
    ...shuffledNonFamiliars.items.slice(0, randomSlotCount),
  ];
  const shuffledOffer = shuffleWithSeed(offerCardIds, shuffledNonFamiliars.seed);

  return {
    draft: {
      offerCardIds: shuffledOffer.items,
      selectedCardIds: [],
      pickCount: config.draftPickCount,
    },
    seed: shuffledOffer.seed,
  };
}

function validateDraftSelection(draft: AdventureDraftState, selectedCardIds: string[]): string[] {
  const selected = [...selectedCardIds];
  const uniqueSelected = new Set(selected);
  const offered = new Set(draft.offerCardIds);

  if (selected.length !== uniqueSelected.size) {
    throw new Error("Draft selection cannot contain duplicate cards.");
  }

  if (selected.length !== draft.pickCount) {
    throw new Error(`Draft requires exactly ${draft.pickCount} cards.`);
  }

  for (const cardId of selected) {
    if (!offered.has(cardId)) {
      throw new Error(`Draft card ${cardId} is not in the current offer.`);
    }
  }

  return selected;
}

function createDeckFromDraftSelection(selectedCardIds: string[]): AdventureRunState["deck"] {
  const cards = selectedCardIds.map((cardId, index) =>
    createAdventureDeckCard(`deck-${index + 1}`, getCardArchetype(cardId)),
  );

  return {
    cards,
    nextDeckCardSequence: cards.length + 1,
    nextGeneratedCardSequence: 1,
  };
}

function createDeckFromStarterFamily(family: CardFamily): AdventureRunState["deck"] {
  const cardIds = getFamilyStarterCardIds(family);
  const cards = cardIds.map((cardId, index) =>
    createAdventureDeckCard(`deck-${index + 1}`, getCardArchetype(cardId)),
  );

  return {
    cards,
    nextDeckCardSequence: cards.length + 1,
    nextGeneratedCardSequence: 1,
  };
}

function getEncounterCompletion(run: AdventureRunState, battleResult?: BattleResult): "completed" | "failed" {
  if (!run.encounter) {
    throw new Error("No active encounter to resolve.");
  }

  if (!isCombatAdventureNode(run.encounter.kind)) {
    return "completed";
  }

  if (!battleResult) {
    throw new Error("Combat encounters require a battle result before they can be resolved.");
  }

  return battleResult.winner === "player" ? "completed" : "failed";
}

function resolveNodeToMap(run: AdventureRunState, node: AdventureNode): AdventureRunState {
  return {
    ...run,
    phase: "map",
    availableNodeIds: [...node.nextNodeIds],
    encounter: null,
    rewardOffer: null,
    charmOffer: null,
    siteState: null,
    queuedCharmOffer: null,
    queuedSiteState: null,
  };
}

function createHazelnutTrimSiteState(nodeId: string): AdventureRunState["siteState"] {
  return {
    kind: "camp",
    sourceNodeId: nodeId,
    selectedMode: "remove",
    origin: "hazelnut",
  };
}

function continueAfterActiveNodeChoice(run: AdventureRunState, node: AdventureNode): AdventureRunState {
  if (run.queuedCharmOffer) {
    return {
      ...run,
      phase: "charm",
      rewardOffer: null,
      charmOffer: run.queuedCharmOffer,
      siteState: null,
      queuedCharmOffer: null,
    };
  }

  if (run.queuedSiteState) {
    return {
      ...run,
      phase: "site",
      rewardOffer: null,
      charmOffer: null,
      siteState: run.queuedSiteState,
      queuedSiteState: null,
    };
  }

  return resolveNodeToMap(run, node);
}

function resolveRewardedEncounter(
  run: AdventureRunState,
  node: AdventureNode,
  queuedCharmOffer: AdventureCharmOfferState | null,
  queuedSiteState: AdventureRunState["siteState"] | null,
  stealCards: CardArchetype[] = [],
): AdventureRunState {
  const generatedStealReward =
    stealCards.length > 0
      ? createAdventureStealRewardOffer({
          sourceNodeId: node.id,
          sourceNodeKind: node.kind,
          enemyCards: stealCards,
          playerDeck: run.deck,
          seed: run.rngState,
        })
      : { rewardOffer: null, seed: run.rngState };

  const completedRun: AdventureRunState = {
    ...run,
    rngState: generatedStealReward.seed,
    encounter: {
      ...run.encounter!,
      status: "completed",
    },
    rewardOffer: null,
    charmOffer: null,
    availableNodeIds: [],
    queuedCharmOffer,
    queuedSiteState,
  };

  if (!generatedStealReward.rewardOffer) {
    const generatedReward = createAdventureRewardOffer({
      sourceNodeId: node.id,
      sourceNodeKind: node.kind,
      progress: run.rewardProgress,
      playerDeck: run.deck,
      seed: completedRun.rngState,
    });

    return {
      ...completedRun,
      phase: "reward",
      rngState: generatedReward.seed,
      rewardProgress: generatedReward.progress,
      rewardOffer: generatedReward.rewardOffer,
    };
  }

  return {
    ...completedRun,
    phase: "reward",
    rewardOffer: generatedStealReward.rewardOffer,
  };
}

function resolveSiteNodeToMap(run: AdventureRunState, node: AdventureNode): AdventureRunState {
  return {
    ...run,
    phase: "map",
    availableNodeIds: [...node.nextNodeIds],
    rewardOffer: null,
    charmOffer: null,
    encounter: null,
    siteState: null,
    queuedCharmOffer: null,
    queuedSiteState: null,
  };
}

function createCampSiteState(nodeId: string): AdventureRunState["siteState"] {
  return {
    kind: "camp",
    sourceNodeId: nodeId,
    selectedMode: null,
    origin: "node",
  };
}

function createForgePreview(
  left: CardArchetype,
  right: CardArchetype,
  generatedCardId: string,
  seed: number,
  hasRuneBonus = false,
): { previewCard: CardArchetype; seed: number } {
  const shuffledDirections = shuffleWithSeed([...DIRECTIONS], seed);
  const leftDirections = shuffledDirections.items.slice(0, 2);
  const rightDirections = DIRECTIONS.filter((direction) => !leftDirections.includes(direction));
  let previewCard = createFusionAdventureCard({
    left,
    right,
    generatedCardId,
    leftDirections,
    rightDirections,
  });
  let nextSeed = shuffledDirections.seed;

  if (hasRuneBonus) {
    const bonusDirection = pickWithSeed([...DIRECTIONS], nextSeed);
    previewCard = {
      ...previewCard,
      sides: {
        ...previewCard.sides,
        [bonusDirection.item]: previewCard.sides[bonusDirection.item] + 1,
      },
      createdByCharmId: "double-knot-rune",
    };
    nextSeed = bonusDirection.seed;
  }

  return {
    previewCard,
    seed: nextSeed,
  };
}

function createForgeSiteState(run: AdventureRunState, nodeId: string): AdventureRunState["siteState"] {
  return {
    kind: "forge",
    sourceNodeId: nodeId,
    selectedCardIds: [],
    previewCard: null,
  };
}

function createSiteStateForNode(
  run: AdventureRunState,
  node: AdventureNode,
): { siteState: AdventureRunState["siteState"]; deck: AdventureRunState["deck"]; seed: number } {
  if (node.kind === "rest") {
    return {
      siteState: createCampSiteState(node.id),
      deck: run.deck,
      seed: run.rngState,
    };
  }

  if (node.kind === "shop") {
    return {
      siteState: createForgeSiteState(run, node.id),
      deck: run.deck,
      seed: run.rngState,
    };
  }

  throw new Error(`Node kind ${node.kind} does not create a site state.`);
}

/**
 * Returns true when a map node should launch the existing combat prototype.
 */
export function isCombatAdventureNode(kind: AdventureNodeType): boolean {
  return kind === "combat" || kind === "elite" || kind === "boss";
}

/**
 * Creates a new deterministic adventure run with a fresh branching map.
 */
export function createAdventureRun(settings: Partial<AdventureSettings> = {}): AdventureRunState {
  const seed = settings.seed ?? GAME_CONFIG.defaultSeed;
  const builtMap = buildAdventureMap(seed, ADVENTURE_CONFIG);
  const openingCharmOffer = createAdventureCharmOffer({
    source: "start",
    sourceNodeId: null,
    ownedCharmIds: [],
    seed: builtMap.seed,
  });
  const startingNodes = builtMap.map.nodes
    .filter((node) => node.depth === 0)
    .map((node) => node.id)
    .sort();

  const run: AdventureRunState = {
    config: ADVENTURE_CONFIG,
    seed,
    rngState: openingCharmOffer.seed,
    map: builtMap.map,
    phase: "family",
    selectedFamily: null,
    outcome: "in-progress",
    history: [],
    activeNodeId: null,
    availableNodeIds: startingNodes,
    encounter: null,
    draft: null,
    deck: createEmptyAdventureDeck(),
    charms: [],
    charmProgress: createInitialAdventureCharmProgress(),
    rewardProgress: createInitialAdventureRewardProgress(),
    rewardOffer: null,
    charmOffer: openingCharmOffer.offer,
    siteState: null,
    queuedCharmOffer: null,
    queuedSiteState: null,
  };

  return settings.selectedFamily ? chooseAdventureFamily(run, settings.selectedFamily) : run;
}

/**
 * Returns the six V4 family starter choices shown at the start of a run.
 */
export function listAdventureFamilyStarterDecks(): FamilyStarterDeckConfig[] {
  return STARTER_DECK_FAMILIES.map((family) => getFamilyStarterDeckConfig(family));
}

/**
 * Chooses the run family and creates its fixed family starter deck with duplicates.
 */
export function chooseAdventureFamily(run: AdventureRunState, family: CardFamily): AdventureRunState {
  if (run.phase !== "family") {
    throw new Error("Cannot choose a family after the run has already started.");
  }

  if (!FAMILY_STARTER_DECKS[family as keyof typeof FAMILY_STARTER_DECKS]) {
    throw new Error(`Family ${family} is not available as a starter family.`);
  }

  return {
    ...run,
    phase: run.charmOffer ? "charm" : "map",
    selectedFamily: family,
    deck: createDeckFromStarterFamily(family),
    draft: null,
  };
}

/**
 * Toggles one card in the opening draft selection.
 */
export function toggleAdventureDraftCard(run: AdventureRunState, cardId: string): AdventureRunState {
  if (run.phase !== "draft" || !run.draft) {
    throw new Error("Cannot change draft selection outside of the draft phase.");
  }

  if (!run.draft.offerCardIds.includes(cardId)) {
    throw new Error(`Draft card ${cardId} is not in the current offer.`);
  }

  const selected = run.draft.selectedCardIds.includes(cardId)
    ? run.draft.selectedCardIds.filter((entry) => entry !== cardId)
    : run.draft.selectedCardIds.length >= run.draft.pickCount
      ? run.draft.selectedCardIds
      : [...run.draft.selectedCardIds, cardId];

  return {
    ...run,
    draft: {
      ...run.draft,
      selectedCardIds: selected,
    },
  };
}

/**
 * Commits the opening draft and creates the fixed deck used for the run.
 */
export function resolveAdventureDraft(run: AdventureRunState, selectedCardIds?: string[]): AdventureRunState {
  if (run.phase !== "draft" || !run.draft) {
    throw new Error("Cannot resolve the draft outside of the draft phase.");
  }

  const selected = validateDraftSelection(run.draft, selectedCardIds ?? run.draft.selectedCardIds);

  return {
    ...run,
    phase: run.charmOffer ? "charm" : "map",
    draft: null,
    deck: createDeckFromDraftSelection(selected),
  };
}

/**
 * Returns the draft offer as immutable archetypes for UI and automation.
 */
export function getAdventureDraftCards(run: AdventureRunState): CardArchetype[] {
  return run.draft ? run.draft.offerCardIds.map((cardId) => getCardArchetype(cardId)) : [];
}

/**
 * Resolves one adventure node by id and returns its immutable definition.
 */
export function getAdventureNode(run: AdventureRunState, nodeId: string): AdventureNode {
  const node = run.map.nodes.find((entry) => entry.id === nodeId);
  if (!node) {
    throw new Error(`Unknown adventure node: ${nodeId}`);
  }

  return node;
}

/**
 * Returns the currently available map nodes in lane order.
 */
export function listAvailableAdventureNodes(run: AdventureRunState): AdventureNode[] {
  return run.availableNodeIds.map((nodeId) => getAdventureNode(run, nodeId)).sort((left, right) => left.lane - right.lane);
}

/**
 * Returns the display status of a node for map rendering.
 */
export function getAdventureNodeStatus(run: AdventureRunState, nodeId: string): AdventureNodeStatus {
  if (
    (run.phase === "encounter" || run.phase === "reward" || run.phase === "charm" || run.phase === "site") &&
    run.activeNodeId === nodeId
  ) {
    return "active";
  }

  if (run.history.includes(nodeId)) {
    return "completed";
  }

  if (run.availableNodeIds.includes(nodeId)) {
    return "available";
  }

  return "locked";
}

/**
 * Commits the player to one of the currently available branches.
 */
export function enterAdventureNode(run: AdventureRunState, nodeId: string): AdventureRunState {
  if (run.phase !== "map" || run.outcome !== "in-progress") {
    throw new Error("Cannot enter a node unless the run is waiting on the map.");
  }

  if (!run.availableNodeIds.includes(nodeId)) {
    throw new Error(`Node ${nodeId} is not reachable from the current path.`);
  }

  const node = getAdventureNode(run, nodeId);
  if (node.kind === "chest") {
    const generatedReward = createAdventureRewardOffer({
      sourceNodeId: node.id,
      sourceNodeKind: node.kind,
      progress: run.rewardProgress,
      playerDeck: run.deck,
      seed: run.rngState,
    });

    return {
      ...run,
      phase: "reward",
      history: [...run.history, node.id],
      activeNodeId: node.id,
      availableNodeIds: [],
      rngState: generatedReward.seed,
      encounter: null,
      rewardProgress: generatedReward.progress,
      rewardOffer: generatedReward.rewardOffer,
      charmOffer: null,
      siteState: null,
      queuedCharmOffer: null,
      queuedSiteState: null,
    };
  }

  if (!isCombatAdventureNode(node.kind)) {
    const site = createSiteStateForNode(run, node);
    return {
      ...run,
      phase: "site",
      history: [...run.history, node.id],
      activeNodeId: node.id,
      availableNodeIds: [],
      encounter: null,
      rewardOffer: null,
      charmOffer: null,
      deck: site.deck,
      rngState: site.seed,
      siteState: site.siteState,
      queuedCharmOffer: null,
      queuedSiteState: null,
    };
  }

  return {
    ...run,
    phase: "encounter",
    history: [...run.history, node.id],
    activeNodeId: node.id,
    availableNodeIds: [],
    encounter: {
      nodeId: node.id,
      kind: node.kind,
      status: "active",
      battleSeed: isCombatAdventureNode(node.kind) ? mixSeed(run.seed, `encounter:${node.id}`) : null,
    },
    rewardOffer: null,
    charmOffer: null,
    siteState: null,
    queuedCharmOffer: null,
    queuedSiteState: null,
  };
}

/**
 * Resolves the current encounter and either returns to the map, ends in defeat, or finishes the boss run.
 */
export function completeAdventureEncounter(
  run: AdventureRunState,
  battleResult?: BattleResult,
  stealCards: CardArchetype[] = [],
): AdventureRunState {
  if (run.phase !== "encounter" || !run.encounter || !run.activeNodeId) {
    throw new Error("Cannot complete an encounter when no node is active.");
  }

  const node = getAdventureNode(run, run.activeNodeId);
  const completion = getEncounterCompletion(run, battleResult);

  if (completion === "failed") {
    return {
      ...run,
      phase: "finished",
      outcome: "defeat",
      availableNodeIds: [],
      encounter: {
        ...run.encounter,
        status: "failed",
      },
      siteState: null,
    };
  }

  if (node.kind === "boss") {
    return {
      ...run,
      phase: "finished",
      outcome: "victory",
      availableNodeIds: [],
      encounter: {
        ...run.encounter,
        status: "completed",
      },
      rewardOffer: null,
      charmOffer: null,
      siteState: null,
      queuedCharmOffer: null,
      queuedSiteState: null,
    };
  }

  let nextCharmProgress = { ...run.charmProgress };
  let queuedSiteState: AdventureRunState["siteState"] | null = null;
  if (node.kind === "combat" && hasLuckyCharm(run.charms, "split-hazelnut")) {
    nextCharmProgress.normalVictoriesSinceHazelnutTrim += 1;
    if (nextCharmProgress.normalVictoriesSinceHazelnutTrim >= 2) {
      queuedSiteState = createHazelnutTrimSiteState(node.id);
      nextCharmProgress.normalVictoriesSinceHazelnutTrim = 0;
    }
  }

  let queuedCharmOffer: AdventureCharmOfferState | null = null;
  let nextSeed = run.rngState;
  if (node.kind === "elite") {
    const eliteCharm = maybeCreateEliteCharmOffer({
      sourceNodeId: node.id,
      ownedCharmIds: run.charms,
      progress: nextCharmProgress,
      seed: nextSeed,
    });
    queuedCharmOffer = eliteCharm.offer;
    nextCharmProgress = eliteCharm.progress;
    nextSeed = eliteCharm.seed;
  }

  if (shouldOfferAdventureReward(node.kind)) {
    return resolveRewardedEncounter(
      {
        ...run,
        rngState: nextSeed,
        charmProgress: nextCharmProgress,
      },
      node,
      queuedCharmOffer,
      queuedSiteState,
      battleResult?.winner === "player" ? stealCards : [],
    );
  }

  const nextRun = {
    ...run,
    rngState: nextSeed,
    charmProgress: nextCharmProgress,
    queuedCharmOffer,
    queuedSiteState,
    rewardOffer: null,
  };
  return queuedCharmOffer || queuedSiteState ? continueAfterActiveNodeChoice(nextRun, node) : resolveNodeToMap(nextRun, node);
}

/**
 * Resolves the current post-combat reward offer, optionally adding one selected card to the run deck.
 */
export function resolveAdventureReward(run: AdventureRunState, rewardId?: string): AdventureRunState {
  if (run.phase !== "reward" || !run.rewardOffer || !run.activeNodeId) {
    throw new Error("Cannot resolve a reward when no reward offer is active.");
  }

  const node = getAdventureNode(run, run.activeNodeId);
  if (!shouldOfferAdventureReward(node.kind)) {
    throw new Error(`Node kind ${node.kind} does not support reward resolution.`);
  }

  if (!rewardId) {
    return continueAfterActiveNodeChoice(
      {
        ...run,
        rewardOffer: null,
      },
      node,
    );
  }

  const selectedOption = run.rewardOffer.options.find((option) => option.rewardId === rewardId);
  if (!selectedOption) {
    throw new Error(`Unknown reward option: ${rewardId}`);
  }

  return continueAfterActiveNodeChoice(
    {
      ...run,
      deck: addCardToAdventureDeck(run.deck, selectedOption.card ?? getCardArchetype(selectedOption.archetypeId)).deck,
      rewardProgress: claimAdventureRewardOption(run.rewardProgress, selectedOption.rarity),
      rewardOffer: null,
    },
    node,
  );
}

/**
 * Returns the active reward option when the run is waiting on a card choice.
 */
export function getAdventureRewardOptions(run: AdventureRunState): AdventureRewardOption[] {
  return run.rewardOffer ? [...run.rewardOffer.options] : [];
}

export function getAdventureCharmOptions(run: AdventureRunState) {
  return run.charmOffer ? [...run.charmOffer.options] : [];
}

export function resolveAdventureCharm(run: AdventureRunState, charmId?: string): AdventureRunState {
  if (run.phase !== "charm" || !run.charmOffer) {
    throw new Error("Cannot resolve a charm when no charm offer is active.");
  }

  if (!charmId) {
    if (!run.charmOffer.canSkip) {
      throw new Error("This charm offer requires a choice.");
    }

    if (!run.activeNodeId) {
      return {
        ...run,
        phase: "map",
        charmOffer: null,
        queuedCharmOffer: null,
        queuedSiteState: null,
      };
    }

    return continueAfterActiveNodeChoice(
      {
        ...run,
        charmOffer: null,
      },
      getAdventureNode(run, run.activeNodeId),
    );
  }

  const selectedOption = run.charmOffer.options.find((option) => option.charmId === charmId);
  if (!selectedOption) {
    throw new Error(`Unknown charm option: ${charmId}`);
  }

  const claimedRun = claimAdventureCharm(
    {
      ...run,
      charmOffer: null,
    },
    selectedOption.charmId,
  );

  if (!claimedRun.activeNodeId) {
    return {
      ...claimedRun,
      phase: "map",
      queuedCharmOffer: null,
      queuedSiteState: null,
    };
  }

  return continueAfterActiveNodeChoice(claimedRun, getAdventureNode(claimedRun, claimedRun.activeNodeId));
}

export function getAdventureDeckCards(run: AdventureRunState) {
  return run.deck.cards.map((entry) => ({
    deckCardId: entry.deckCardId,
    card: {
      ...entry.card,
      sides: { ...entry.card.sides },
    },
  }));
}

export function chooseAdventureCampMode(run: AdventureRunState, mode: AdventureCampMode): AdventureRunState {
  if (run.phase !== "site" || run.siteState?.kind !== "camp") {
    throw new Error("Cannot choose a camp mode outside of camp resolution.");
  }

  return {
    ...run,
    siteState: {
      ...run.siteState,
      selectedMode: mode,
    },
  };
}

function createGeneratedCardId(run: AdventureRunState): string {
  return `generated-${run.seed}-${run.deck.nextGeneratedCardSequence}`;
}

function pickUpgradeDirection(seed: number): { direction: Direction; seed: number } {
  const picked = pickWithSeed([...DIRECTIONS], seed);
  return {
    direction: picked.item,
    seed: picked.seed,
  };
}

export function resolveAdventureCamp(run: AdventureRunState, deckCardId: string): AdventureRunState {
  if (run.phase !== "site" || run.siteState?.kind !== "camp" || !run.activeNodeId) {
    throw new Error("Cannot resolve camp without an active camp node.");
  }

  const node = getAdventureNode(run, run.activeNodeId);
  const selectedCard = getAdventureDeckCard(run.deck, deckCardId);

  if (run.siteState.selectedMode === "remove") {
    return resolveSiteNodeToMap(
      {
        ...run,
        deck: removeCardFromAdventureDeck(run.deck, selectedCard.deckCardId),
      },
      node,
    );
  }

  if (run.siteState.selectedMode !== "upgrade") {
    throw new Error("Camp upgrade requires choosing remove or upgrade first.");
  }

  const rolledDirection = pickUpgradeDirection(run.rngState);
  return resolveSiteNodeToMap(
    {
      ...run,
      rngState: rolledDirection.seed,
      deck: replaceAdventureDeckCard(
        run.deck,
        selectedCard.deckCardId,
        createUpgradedAdventureCard(selectedCard.card, createGeneratedCardId(run), rolledDirection.direction),
      ),
    },
    node,
  );
}

export function toggleAdventureForgeSelection(run: AdventureRunState, deckCardId: string): AdventureRunState {
  if (run.phase !== "site" || run.siteState?.kind !== "forge") {
    throw new Error("Cannot change forge selection outside of a forge node.");
  }

  const current = run.siteState.selectedCardIds;
  const nextSelected = current.includes(deckCardId)
    ? current.filter((entry) => entry !== deckCardId)
    : current.length >= 2
      ? [current[1], deckCardId]
      : [...current, deckCardId];

  let previewCard: CardArchetype | null = null;
  if (nextSelected.length === 2) {
    const left = getAdventureDeckCard(run.deck, nextSelected[0]);
    const right = getAdventureDeckCard(run.deck, nextSelected[1]);
    const previewSeed = mixSeed(run.seed, `forge:${run.activeNodeId ?? "none"}:${nextSelected.join("|")}`);
    const preview = createForgePreview(
      left.card,
      right.card,
      createGeneratedCardId(run),
      previewSeed,
      hasLuckyCharm(run.charms, "double-knot-rune"),
    );
    previewCard = preview.previewCard;
  }

  return {
    ...run,
    siteState: {
      ...run.siteState,
      selectedCardIds: nextSelected,
      previewCard,
    },
  };
}

export function resolveAdventureForge(run: AdventureRunState): AdventureRunState {
  if (run.phase !== "site" || run.siteState?.kind !== "forge" || !run.activeNodeId) {
    throw new Error("Cannot resolve forge without an active forge node.");
  }

  const forgeState = run.siteState;
  if (forgeState.selectedCardIds.length !== 2 || !forgeState.previewCard) {
    throw new Error("Forge resolution requires exactly two selected cards.");
  }

  const node = getAdventureNode(run, run.activeNodeId);
  const remainingCards = run.deck.cards.filter(
    (entry) => !forgeState.selectedCardIds.includes(entry.deckCardId),
  );
  const added = addCardToAdventureDeck(
    {
      cards: remainingCards,
      nextDeckCardSequence: run.deck.nextDeckCardSequence,
      nextGeneratedCardSequence: run.deck.nextGeneratedCardSequence + 1,
    },
    forgeState.previewCard,
  );

  return resolveSiteNodeToMap(
    {
      ...run,
      deck: added.deck,
    },
    node,
  );
}

export function resolveAdventureTreasure(run: AdventureRunState): AdventureRunState {
  if (run.phase !== "site" || run.siteState?.kind !== "treasure" || !run.activeNodeId) {
    throw new Error("Cannot resolve treasure without an active treasure node.");
  }

  return resolveSiteNodeToMap(run, getAdventureNode(run, run.activeNodeId));
}

export function leaveAdventureSite(run: AdventureRunState): AdventureRunState {
  if (run.phase !== "site" || !run.activeNodeId) {
    throw new Error("Cannot leave a site outside of site resolution.");
  }

  return resolveSiteNodeToMap(run, getAdventureNode(run, run.activeNodeId));
}

/**
 * Counts how many pre-boss locations have been cleared so far.
 */
export function getAdventureLocationsCleared(run: AdventureRunState): number {
  return run.history.filter((nodeId) => getAdventureNode(run, nodeId).kind !== "boss").length;
}
