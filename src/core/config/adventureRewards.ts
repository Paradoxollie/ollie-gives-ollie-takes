import type { BoardPositionTag, CardArchetype, CardEffect, CardFamily, CardRarity, CardRole, CardSides } from "@/core/types";
import { getNeutralCardArtSrc } from "@/core/config/cardArt";

export interface AdventureRewardArchetype extends CardArchetype {
  rarity: CardRarity;
}

interface RewardTemplate {
  rarity: CardRarity;
  index: number;
  sides: CardSides;
  family: CardFamily;
}

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

function rewardRole(rarity: CardRarity, family: CardFamily, index: number): CardRole {
  if (rarity === "rare") {
    return "finisher";
  }

  if (index % 4 === 0) {
    return "payoff";
  }

  if (family === "human" || family === "automaton") {
    return index % 2 === 0 ? "stabilizer" : "connector";
  }

  if (family === "demon") {
    return "attacker";
  }

  return index % 2 === 0 ? "connector" : "engine";
}

function rewardPreferredPositions(family: CardFamily, index: number): BoardPositionTag[] {
  if (family === "automaton") {
    return ["corner"];
  }

  if (family === "arcane") {
    return ["center"];
  }

  if (family === "human") {
    return ["line"];
  }

  if (family === "revenant") {
    return ["behind"];
  }

  if (family === "familiar") {
    return ["adjacent"];
  }

  return index % 2 === 0 ? ["adjacent"] : [];
}

function rewardBuildTags(options: {
  rarity: CardRarity;
  family: CardFamily;
  role: CardRole;
  effects: CardEffect[];
}): string[] {
  const tags = new Set<string>([options.rarity, options.family, options.role]);
  for (const effect of options.effects) {
    tags.add(effect.kind);
    if (effect.condition && effect.condition !== "always") {
      tags.add(effect.condition);
    }
    if (effect.requiredFamilyCount) {
      tags.add(`combo-${effect.requiredFamilyCount}`);
    }
  }
  return [...tags];
}

function rewardObjective(rarity: CardRarity, family: CardFamily, role: CardRole): string {
  const rarityText =
    rarity === "rare"
      ? "Run-defining card: commit to setup before taking it."
      : rarity === "uncommon"
        ? "Bridge card: adds a stronger condition or supports a hybrid."
        : "Consistency card: improves the current engine without demanding a full pivot.";
  return `${rarityText} Role ${role} for ${family} decks.`;
}

function rewardComboSetup(rarity: CardRarity): Pick<CardEffect, "requiredFamilyCount" | "scaleWithFamilyCount" | "maxScale"> {
  if (rarity === "common") {
    return {};
  }

  return {
    requiredFamilyCount: rarity === "rare" ? 3 : 2,
    scaleWithFamilyCount: true,
    maxScale: rarity === "rare" ? 3 : 2,
  };
}

function rewardEffects(rarity: CardRarity, family: CardFamily, index: number): CardEffect[] {
  const amount = rarity === "rare" ? 2 : 1;
  const combo = rewardComboSetup(rarity);

  switch (family) {
    case "familiar":
      return index % 2 === 0
        ? [{ trigger: "on-play", kind: "gain-shield", amount, condition: "adjacent-ally", ...combo }]
        : [{ trigger: "on-flip", kind: "draw-next-turn", amount: 1, minFlips: 1, ...combo }];
    case "demon":
      return [{ trigger: "on-flip", kind: "deal-damage", amount, minFlips: 1, ...combo }];
    case "human":
      return index % 2 === 0
        ? [{ trigger: "on-play", kind: "gain-shield", amount: amount + 1, ...combo }]
        : [{ trigger: "on-play", kind: "draw-next-turn", amount: 1, ...combo }];
    case "automaton":
      return index % 2 === 0
        ? [{ trigger: "on-play", kind: "gain-shield", amount: amount + 1, condition: "corner", ...combo }]
        : [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "weakest", condition: "corner", ...combo }];
    case "revenant":
      return index % 2 === 0
        ? [{ trigger: "on-play", kind: "draw-next-turn", amount: 1, condition: "behind-on-board", ...combo }]
        : [{ trigger: "on-play", kind: "gain-shield", amount: amount + 1, condition: "behind-on-board", ...combo }];
    case "arcane":
      return index % 2 === 0
        ? [{ trigger: "on-play", kind: "boost-self", amount: 1, directions: "weakest", condition: "center", ...combo }]
        : [{ trigger: "on-play", kind: "draw-next-turn", amount: 1, condition: "center", ...combo }];
    default:
      return [];
  }
}

const REWARD_TEMPLATES: RewardTemplate[] = [
  ...createRewardTemplates("common", COMMON_REWARD_TEMPLATES),
  ...createRewardTemplates("uncommon", UNCOMMON_REWARD_TEMPLATES),
  ...createRewardTemplates("rare", RARE_REWARD_TEMPLATES),
];

export const ADVENTURE_REWARD_ARCHETYPES: ReadonlyArray<AdventureRewardArchetype> = REWARD_TEMPLATES.map(
  ({ rarity, index, sides, family }) => {
    const effects = rewardEffects(rarity, family, index);
    const role = rewardRole(rarity, family, index);
    return {
      id: rewardId(rarity, index),
      name: rewardName(rarity, index),
      sides,
      family,
      accent: rewardAccent(rarity),
      artSrc: getNeutralCardArtSrc(family),
      rarity,
      role,
      buildTags: rewardBuildTags({ rarity, family, role, effects }),
      preferredPositions: rewardPreferredPositions(family, index),
      hybridLinks:
        family === "familiar"
          ? ["human", "automaton", "arcane"]
          : family === "demon"
            ? ["revenant", "arcane", "human"]
            : family === "human"
              ? ["familiar", "automaton", "arcane"]
              : family === "automaton"
                ? ["familiar", "human", "arcane"]
                : family === "revenant"
                  ? ["demon", "human", "arcane"]
                  : ["familiar", "demon", "automaton"],
      deckbuildingObjective: rewardObjective(rarity, family, role),
      counterplay: "Deny its setup condition or force it onto a weak side before the payoff turn.",
      sourceType: "reward",
      baseArchetypeId: null,
      effects,
    };
  },
);

export const ADVENTURE_REWARD_POOLS: Record<CardRarity, string[]> = {
  common: ADVENTURE_REWARD_ARCHETYPES.filter((card) => card.rarity === "common").map((card) => card.id),
  uncommon: ADVENTURE_REWARD_ARCHETYPES.filter((card) => card.rarity === "uncommon").map((card) => card.id),
  rare: ADVENTURE_REWARD_ARCHETYPES.filter((card) => card.rarity === "rare").map((card) => card.id),
};
