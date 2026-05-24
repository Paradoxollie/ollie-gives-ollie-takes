import { CARD_FAMILIES, CARD_ROLES } from "@/core/types";
import type { AdventureDeckState, CardArchetype, CardFamily, CardRole } from "@/core/types";

export interface DeckBuildProfileV4 {
  familyCounts: Record<CardFamily, number>;
  roleCounts: Record<CardRole, number>;
  copyCountsByBaseId: Record<string, number>;
  dominantFamily: CardFamily | null;
  missingRoles: CardRole[];
  hybridFamilies: CardFamily[];
}

function emptyFamilyCounts(): Record<CardFamily, number> {
  return Object.fromEntries(CARD_FAMILIES.map((family) => [family, 0])) as Record<CardFamily, number>;
}

function emptyRoleCounts(): Record<CardRole, number> {
  return Object.fromEntries(CARD_ROLES.map((role) => [role, 0])) as Record<CardRole, number>;
}

function baseId(card: Pick<CardArchetype, "id" | "baseArchetypeId">): string {
  return card.baseArchetypeId ?? card.id;
}

/**
 * Counts copies by stable base card id so duplicates, upgrades, and steals can be reasoned about together.
 */
export function countCardCopiesByBaseId(cards: ReadonlyArray<CardArchetype>): Record<string, number> {
  return cards.reduce<Record<string, number>>((counts, card) => {
    const id = baseId(card);
    counts[id] = (counts[id] ?? 0) + 1;
    return counts;
  }, {});
}

/**
 * Builds a deterministic deckbuilding summary used by reward, enemy, and UI helpers.
 */
export function analyzeDeckBuildProfileFromCards(cards: ReadonlyArray<CardArchetype>): DeckBuildProfileV4 {
  const familyCounts = emptyFamilyCounts();
  const roleCounts = emptyRoleCounts();

  for (const card of cards) {
    familyCounts[card.family] += 1;
    if (card.role) {
      roleCounts[card.role] += 1;
    }
  }

  const dominantFamily = [...CARD_FAMILIES]
    .filter((family) => familyCounts[family] > 0)
    .sort((left, right) => {
      if (familyCounts[left] !== familyCounts[right]) {
        return familyCounts[right] - familyCounts[left];
      }

      return left.localeCompare(right);
    })[0] ?? null;
  const missingRoles = CARD_ROLES.filter((role) => {
    if (role === "engine" || role === "stabilizer" || role === "finisher") {
      return false;
    }

    return roleCounts[role] === 0;
  });
  const hybridFamilies = CARD_FAMILIES.filter(
    (family) => family !== dominantFamily && familyCounts[family] >= 3,
  );

  return {
    familyCounts,
    roleCounts,
    copyCountsByBaseId: countCardCopiesByBaseId(cards),
    dominantFamily,
    missingRoles,
    hybridFamilies,
  };
}

/**
 * Returns the same build profile for an adventure deck state.
 */
export function analyzeAdventureDeckBuildProfileV4(deck: AdventureDeckState): DeckBuildProfileV4 {
  return analyzeDeckBuildProfileFromCards(deck.cards.map((entry) => entry.card));
}

/**
 * Produces a short player-facing reason for why a reward helps the current deck.
 */
export function explainRewardFit(card: CardArchetype, deck: AdventureDeckState): string {
  const profile = analyzeAdventureDeckBuildProfileV4(deck);
  const copies = profile.copyCountsByBaseId[baseId(card)] ?? 0;

  if (copies > 0) {
    return `Copie ${copies + 1}: rend ${card.name} plus regulier dans le deck.`;
  }

  if (profile.missingRoles.includes(card.role ?? "engine")) {
    return `Role manquant: ajoute un ${card.role ?? "moteur"} au plan actuel.`;
  }

  if (profile.dominantFamily === card.family) {
    return `Plan principal: renforce les seuils ${card.family}.`;
  }

  if (profile.hybridFamilies.includes(card.family) || (profile.familyCounts[card.family] >= 2 && card.role !== "finisher")) {
    return `Pivot hybride: ton deck a deja ${profile.familyCounts[card.family]} carte(s) ${card.family}.`;
  }

  if (card.rarity === "rare") {
    return "Rare: peut devenir un objectif de build si tu trouves son setup.";
  }

  return card.deckbuildingObjective ?? "Ajoute une nouvelle option de deckbuilding.";
}
