import type { CardArchetype, CardFamily, CardRarity, CardSides } from "@/core/types";

export interface AdventureRewardArchetype extends CardArchetype {
  rarity: CardRarity;
}

interface RewardTemplate {
  rarity: CardRarity;
  index: number;
  sides: CardSides;
  family: CardFamily;
}

const REWARD_ART_SRC = "/images/cards-hd/placeholder-card.png";

const COMMON_REWARD_TEMPLATES: CardSides[] = [
  { top: 2, right: 5, bottom: 3, left: 2 },
  { top: 4, right: 2, bottom: 2, left: 4 },
  { top: 3, right: 4, bottom: 2, left: 3 },
  { top: 2, right: 3, bottom: 5, left: 2 },
  { top: 5, right: 2, bottom: 2, left: 2 },
  { top: 2, right: 2, bottom: 4, left: 4 },
  { top: 3, right: 2, bottom: 4, left: 3 },
  { top: 4, right: 3, bottom: 1, left: 4 },
  { top: 1, right: 4, bottom: 4, left: 3 },
  { top: 3, right: 5, bottom: 2, left: 1 },
  { top: 4, right: 1, bottom: 3, left: 4 },
  { top: 2, right: 4, bottom: 3, left: 3 },
];

const UNCOMMON_REWARD_TEMPLATES: CardSides[] = [
  { top: 6, right: 2, bottom: 2, left: 3 },
  { top: 3, right: 6, bottom: 2, left: 2 },
  { top: 2, right: 3, bottom: 6, left: 2 },
  { top: 2, right: 2, bottom: 3, left: 6 },
  { top: 5, right: 4, bottom: 1, left: 3 },
  { top: 3, right: 1, bottom: 4, left: 5 },
  { top: 4, right: 5, bottom: 2, left: 1 },
  { top: 1, right: 4, bottom: 5, left: 3 },
  { top: 5, right: 3, bottom: 3, left: 2 },
  { top: 2, right: 5, bottom: 3, left: 3 },
  { top: 3, right: 2, bottom: 5, left: 3 },
  { top: 3, right: 3, bottom: 2, left: 5 },
];

const RARE_REWARD_TEMPLATES: CardSides[] = [
  { top: 6, right: 4, bottom: 2, left: 2 },
  { top: 2, right: 6, bottom: 4, left: 2 },
  { top: 2, right: 2, bottom: 6, left: 4 },
  { top: 4, right: 2, bottom: 2, left: 6 },
  { top: 5, right: 5, bottom: 1, left: 3 },
  { top: 3, right: 1, bottom: 5, left: 5 },
];

const REWARD_FAMILY_ROTATION: CardFamily[] = ["familiar", "demon", "human", "automaton", "revenant", "arcane"];

function createRewardTemplates(rarity: CardRarity, templates: CardSides[]): RewardTemplate[] {
  return templates.map((sides, index) => ({
    rarity,
    index: index + 1,
    sides,
    family: REWARD_FAMILY_ROTATION[index % REWARD_FAMILY_ROTATION.length],
  }));
}

function rewardId(rarity: CardRarity, index: number): string {
  return `reward-${rarity}-${String(index).padStart(2, "0")}`;
}

function rewardName(rarity: CardRarity, index: number): string {
  switch (rarity) {
    case "common":
      return `Carte commune ${String(index).padStart(2, "0")}`;
    case "uncommon":
      return `Carte inhabituelle ${String(index).padStart(2, "0")}`;
    case "rare":
      return `Carte rare ${String(index).padStart(2, "0")}`;
  }
}

function rewardAccent(rarity: CardRarity): string {
  switch (rarity) {
    case "common":
      return "reward-common";
    case "uncommon":
      return "reward-uncommon";
    case "rare":
      return "reward-rare";
  }
}

const REWARD_TEMPLATES: RewardTemplate[] = [
  ...createRewardTemplates("common", COMMON_REWARD_TEMPLATES),
  ...createRewardTemplates("uncommon", UNCOMMON_REWARD_TEMPLATES),
  ...createRewardTemplates("rare", RARE_REWARD_TEMPLATES),
];

export const ADVENTURE_REWARD_ARCHETYPES: ReadonlyArray<AdventureRewardArchetype> = REWARD_TEMPLATES.map(
  ({ rarity, index, sides, family }) => ({
    id: rewardId(rarity, index),
    name: rewardName(rarity, index),
    sides,
    family,
    accent: rewardAccent(rarity),
    artSrc: REWARD_ART_SRC,
    rarity,
    sourceType: "reward",
    baseArchetypeId: null,
  }),
);

export const ADVENTURE_REWARD_POOLS: Record<CardRarity, string[]> = {
  common: ADVENTURE_REWARD_ARCHETYPES.filter((card) => card.rarity === "common").map((card) => card.id),
  uncommon: ADVENTURE_REWARD_ARCHETYPES.filter((card) => card.rarity === "uncommon").map((card) => card.id),
  rare: ADVENTURE_REWARD_ARCHETYPES.filter((card) => card.rarity === "rare").map((card) => card.id),
};
