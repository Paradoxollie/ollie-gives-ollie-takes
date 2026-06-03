import type { CardFamily, CardRole, DeckPresetId } from "@/core/types";

export interface DeckPreset {
  id: DeckPresetId;
  label: string;
  cardsPerPlayer: number;
  sharedPoolCardIds: string[];
  cardIds: string[];
}

export interface FamilyStarterDeckCard {
  cardId: string;
  copies: number;
  role: Extract<CardRole, "anchor" | "attacker" | "connector" | "payoff">;
}

export interface FamilyStarterDeckConfig {
  family: StarterDeckFamily;
  label: string;
  objective: string;
  weakness: string;
  cards: FamilyStarterDeckCard[];
}

export const DEFAULT_DECK_PRESET_ID: DeckPresetId = "starter12";

export const STARTER_DECK_FAMILIES = [
  "familiar",
  "demon",
  "human",
  "automaton",
  "revenant",
  "arcane",
] as const satisfies ReadonlyArray<CardFamily>;

export type StarterDeckFamily = (typeof STARTER_DECK_FAMILIES)[number];
export const FAMILY_STARTER_DECK_CARD_COUNT = 12;

export const FAMILY_STARTER_DECKS: Record<StarterDeckFamily, FamilyStarterDeckConfig> = {
  familiar: {
    family: "familiar",
    label: "Familiers",
    objective: "Construire une meute compacte qui protege ses pieces clefs avant de convertir les flips en pioche ou bouclier.",
    weakness: "Souffre quand les cartes sont forcees loin les unes des autres ou quand les degats directs ignorent le plateau.",
    cards: [
      { cardId: "sapling", copies: 3, role: "anchor" },
      { cardId: "badger", copies: 3, role: "attacker" },
      { cardId: "heron", copies: 3, role: "connector" },
      { cardId: "foxfire", copies: 3, role: "payoff" },
    ],
  },
  demon: {
    family: "demon",
    label: "Demons",
    objective: "Chercher des flips agressifs, corrompre le plateau et transformer les multi-flips en degats directs.",
    weakness: "Expose des cotes faibles et peut s'essouffler contre les boucliers ou les formations defensives.",
    cards: [
      { cardId: "hornling", copies: 3, role: "anchor" },
      { cardId: "ember-imp", copies: 3, role: "attacker" },
      { cardId: "pact-sprite", copies: 3, role: "connector" },
      { cardId: "cinder-grin", copies: 3, role: "payoff" },
    ],
  },
  human: {
    family: "human",
    label: "Humains",
    objective: "Former des lignes fiables avec un ancrage, une menace et un moteur de pioche clairement distincts.",
    weakness: "Ses cartes sont moins efficaces seules et chaque role ne couvre plus toutes les directions a la fois.",
    cards: [
      { cardId: "quiet-monk", copies: 3, role: "anchor" },
      { cardId: "path-ranger", copies: 3, role: "attacker" },
      { cardId: "rune-mage", copies: 3, role: "connector" },
      { cardId: "field-knight", copies: 3, role: "payoff" },
    ],
  },
  automaton: {
    family: "automaton",
    label: "Automates",
    objective: "Prendre les coins, utiliser les cartes peu couteuses et completer des machines de trois cartes capables d'attaquer.",
    weakness: "Plan previsible: les piles incompletes manquent de pression et un adversaire qui nie les coins ralentit la forteresse.",
    cards: [
      { cardId: "clock-sentinel", copies: 3, role: "anchor" },
      { cardId: "brass-rook", copies: 3, role: "attacker" },
      { cardId: "gear-monk", copies: 3, role: "connector" },
      { cardId: "tin-oracle", copies: 3, role: "payoff" },
    ],
  },
  revenant: {
    family: "revenant",
    label: "Revenants",
    objective: "Rester proche au score, declencher les effets de retard et renverser la manche au bon moment.",
    weakness: "Ses meilleures cartes sont moins efficaces quand il mene deja ou quand il tombe trop loin derriere.",
    cards: [
      { cardId: "lantern-shade", copies: 3, role: "anchor" },
      { cardId: "widow-knight", copies: 3, role: "attacker" },
      { cardId: "grave-child", copies: 3, role: "connector" },
      { cardId: "moth-ghost", copies: 3, role: "payoff" },
    ],
  },
  arcane: {
    family: "arcane",
    label: "Arcanes",
    objective: "Ancrer le centre, prolonger le reseau vers les allies puis completer un noyau de trois cartes.",
    weakness: "Le deck demande un ordre de placement precis et son payoff reste faible tant que le noyau n'est pas complet.",
    cards: [
      { cardId: "wandering-glyph", copies: 3, role: "anchor" },
      { cardId: "moon-scribe", copies: 3, role: "attacker" },
      { cardId: "rune-adept", copies: 3, role: "connector" },
      { cardId: "star-witch", copies: 3, role: "payoff" },
    ],
  },
};

export function isStarterDeckFamily(family: CardFamily): family is StarterDeckFamily {
  return (STARTER_DECK_FAMILIES as ReadonlyArray<CardFamily>).includes(family);
}

export function getFamilyStarterDeckConfig(family: CardFamily): FamilyStarterDeckConfig {
  if (!isStarterDeckFamily(family)) {
    throw new Error(`Family ${family} does not have a V4 starter deck.`);
  }

  return FAMILY_STARTER_DECKS[family];
}

export function getFamilyStarterCardIds(family: CardFamily): string[] {
  return getFamilyStarterDeckConfig(family).cards.flatMap((entry) =>
    Array.from({ length: entry.copies }, () => entry.cardId),
  );
}

export function getFamilyStarterUniqueCardIds(family: CardFamily): string[] {
  return getFamilyStarterDeckConfig(family).cards.map((entry) => entry.cardId);
}

export const DRAFT_POOL_CARD_IDS = [
  "sapling",
  "badger",
  "heron",
  "foxfire",
  "mole",
  "stag",
  "owl",
  "ember-imp",
  "hornling",
  "ash-whisper",
  "pact-sprite",
  "little-abyss",
  "cinder-grin",
  "brimstone-tot",
  "field-knight",
  "rune-mage",
  "path-ranger",
  "quiet-monk",
  "gate-thief",
  "banner-squire",
  "hearth-archer",
  "clock-sentinel",
  "brass-rook",
  "gear-monk",
  "tin-oracle",
  "copper-beetle",
  "glass-warden",
  "spring-knave",
  "grave-child",
  "lantern-shade",
  "bone-choir",
  "widow-knight",
  "moth-ghost",
  "hollow-page",
  "veil-duelist",
  "star-witch",
  "rune-adept",
  "mirror-novice",
  "moon-scribe",
  "glass-oracle",
  "wandering-glyph",
  "blue-comet",
] as const;

function createPreset(id: DeckPresetId, cardsPerPlayer: number): DeckPreset {
  return {
    id,
    label: `Pool de draft ${cardsPerPlayer} cartes`,
    cardsPerPlayer,
    sharedPoolCardIds: DRAFT_POOL_CARD_IDS.slice(0, cardsPerPlayer * 2),
    cardIds: DRAFT_POOL_CARD_IDS.slice(0, cardsPerPlayer),
  };
}

export const STARTER_DECK_PRESETS: Record<DeckPresetId, DeckPreset> = {
  starter10: createPreset("starter10", 10),
  starter12: createPreset("starter12", 12),
  starter14: createPreset("starter14", 14),
};
