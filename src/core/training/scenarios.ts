import { ADVENTURE_REWARD_POOLS } from "@/core/config/adventureRewards";
import { getFamilyStarterCardIds, STARTER_DECK_FAMILIES } from "@/core/config/decks";
import type { CardFamily, EnemyProfileId, LuckyCharmId } from "@/core/types";

export interface BotTrainingScenario {
  id: string;
  label: string;
  playerCardIds: string[];
  enemyCardIds: string[];
  playerCharmIds?: LuckyCharmId[];
  enemyProfileId?: EnemyProfileId;
}

function rewardSlice(pool: string[], count: number, offset: number): string[] {
  return Array.from({ length: count }, (_, index) => pool[(offset + index) % pool.length]);
}

function familyDeck(family: CardFamily): string[] {
  return getFamilyStarterCardIds(family);
}

function buildDeck(options: {
  family: CardFamily;
  common?: [number, number];
  uncommon?: [number, number];
  rare?: [number, number];
}): string[] {
  const common = options.common ? rewardSlice(ADVENTURE_REWARD_POOLS.common, options.common[1], options.common[0]) : [];
  const uncommon = options.uncommon
    ? rewardSlice(ADVENTURE_REWARD_POOLS.uncommon, options.uncommon[1], options.uncommon[0])
    : [];
  const rare = options.rare ? rewardSlice(ADVENTURE_REWARD_POOLS.rare, options.rare[1], options.rare[0]) : [];

  return [...familyDeck(options.family), ...common, ...uncommon, ...rare];
}

export const BOT_TRAINING_SCENARIOS: ReadonlyArray<BotTrainingScenario> = [
  ...STARTER_DECK_FAMILIES.map((family, index) => ({
    id: `family-start-${family}`,
    label: `Depart actuel ${family}`,
    playerCardIds: familyDeck(family),
    enemyCardIds: familyDeck(STARTER_DECK_FAMILIES[(index + 1) % STARTER_DECK_FAMILIES.length]),
  })),
  {
    id: "opening-balance",
    label: "Ouverture actuelle miroir",
    playerCardIds: familyDeck("human"),
    enemyCardIds: familyDeck("human"),
  },
  {
    id: "common-pressure",
    label: "Pression communes",
    playerCardIds: buildDeck({ family: "demon", common: [0, 2] }),
    enemyCardIds: buildDeck({ family: "familiar", common: [2, 2] }),
  },
  {
    id: "mid-canopy",
    label: "Milieu de run equilibre",
    playerCardIds: buildDeck({ family: "familiar", common: [4, 2], uncommon: [0, 1] }),
    enemyCardIds: buildDeck({ family: "human", common: [6, 2], uncommon: [1, 1] }),
  },
  {
    id: "elite-ambush",
    label: "Asymetrie elite",
    playerCardIds: buildDeck({ family: "automaton", common: [8, 2], uncommon: [2, 1] }),
    enemyCardIds: buildDeck({ family: "demon", common: [10, 2], uncommon: [3, 2] }),
  },
  {
    id: "late-duel",
    label: "Fin de run tendue",
    playerCardIds: buildDeck({ family: "revenant", common: [1, 1], uncommon: [5, 2] }),
    enemyCardIds: buildDeck({ family: "arcane", common: [3, 1], uncommon: [7, 2], rare: [0, 1] }),
  },
  {
    id: "boss-gauntlet",
    label: "Boss gauntlet",
    playerCardIds: buildDeck({ family: "arcane", common: [5, 2], uncommon: [9, 1], rare: [1, 1] }),
    enemyCardIds: buildDeck({ family: "automaton", common: [7, 3], uncommon: [10, 2], rare: [2, 2] }),
  },
  {
    id: "corner-watch",
    label: "Coins sous pression",
    playerCardIds: buildDeck({ family: "automaton", common: [2, 2], uncommon: [0, 1] }),
    enemyCardIds: buildDeck({ family: "human", common: [6, 2], uncommon: [1, 1] }),
    playerCharmIds: ["watcher-stone"],
    enemyProfileId: "fortress",
  },
  {
    id: "spring-surge",
    label: "Tempo luciole",
    playerCardIds: buildDeck({ family: "familiar", common: [3, 2], uncommon: [2, 1] }),
    enemyCardIds: buildDeck({ family: "demon", common: [7, 2], uncommon: [4, 1] }),
    playerCharmIds: ["spring-tear"],
    enemyProfileId: "swarm",
  },
  {
    id: "moss-trick",
    label: "Precision contre ruse",
    playerCardIds: buildDeck({ family: "human", common: [0, 2], uncommon: [5, 1] }),
    enemyCardIds: buildDeck({ family: "revenant", common: [5, 2], uncommon: [7, 1] }),
    playerCharmIds: ["moss-dust"],
    enemyProfileId: "trickster",
  },
  {
    id: "rune-shaper",
    label: "Fusion canalisee",
    playerCardIds: buildDeck({ family: "arcane", common: [8, 2], uncommon: [1, 2] }),
    enemyCardIds: buildDeck({ family: "automaton", common: [10, 2], uncommon: [3, 2] }),
    playerCharmIds: ["double-knot-rune"],
    enemyProfileId: "shaper",
  },
];

export function getBotTrainingScenarios(): BotTrainingScenario[] {
  return BOT_TRAINING_SCENARIOS.map((scenario) => ({
    ...scenario,
    playerCardIds: [...scenario.playerCardIds],
    enemyCardIds: [...scenario.enemyCardIds],
    playerCharmIds: scenario.playerCharmIds ? [...scenario.playerCharmIds] : undefined,
  }));
}
