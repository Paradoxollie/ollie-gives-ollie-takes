import type { CardFamily } from "@/core/types";

export const NEUTRAL_CARD_ART_BY_FAMILY: Record<CardFamily, string> = {
  familiar: "/images/cards-hd/family-card-familiar.png",
  demon: "/images/cards-hd/family-card-demon.png",
  human: "/images/cards-hd/family-card-human.png",
  automaton: "/images/cards-hd/family-card-automaton.png",
  revenant: "/images/cards-hd/family-card-revenant.png",
  arcane: "/images/cards-hd/family-card-arcane.png",
  dragon: "/images/cards-hd/neutral-card-dragon.png",
  renegade: "/images/cards-hd/neutral-card-renegade.png",
};

export const FAMILY_CREST_ART_BY_FAMILY: Record<CardFamily, string> = {
  familiar: "/images/ui/family-crests/familiar.png",
  demon: "/images/ui/family-crests/demon.png",
  human: "/images/ui/family-crests/human.png",
  automaton: "/images/ui/family-crests/automaton.png",
  revenant: "/images/ui/family-crests/revenant.png",
  arcane: "/images/ui/family-crests/arcane.png",
  dragon: "/images/ui/family-crests/arcane.png",
  renegade: "/images/ui/family-crests/arcane.png",
};

export const FAMILY_BADGE_ART_BY_FAMILY: Record<CardFamily, string> = {
  familiar: "/images/ui/family-badges/familiar.png",
  demon: "/images/ui/family-badges/demon.png",
  human: "/images/ui/family-badges/human.png",
  automaton: "/images/ui/family-badges/automaton.png",
  revenant: "/images/ui/family-badges/revenant.png",
  arcane: "/images/ui/family-badges/arcane.png",
  dragon: "/images/ui/family-badges/arcane.png",
  renegade: "/images/ui/family-badges/arcane.png",
};

/**
 * Returns family template card art for archetypes without finished character art.
 */
export function getNeutralCardArtSrc(family: CardFamily): string {
  return NEUTRAL_CARD_ART_BY_FAMILY[family];
}

/**
 * Returns the crest used when a board unit does not have a character animation yet.
 */
export function getFamilyCrestArtSrc(family: CardFamily): string {
  return FAMILY_CREST_ART_BY_FAMILY[family];
}

/**
 * Returns the larger family badge used in ornate side panels.
 */
export function getFamilyBadgeArtSrc(family: CardFamily): string {
  return FAMILY_BADGE_ART_BY_FAMILY[family];
}
