import type { DeckPresetId } from "@/core/types";

export interface DeckPreset {
  id: DeckPresetId;
  label: string;
  cardsPerPlayer: number;
  sharedPoolCardIds: string[];
  cardIds: string[];
}

export const DEFAULT_DECK_PRESET_ID: DeckPresetId = "starter12";

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
