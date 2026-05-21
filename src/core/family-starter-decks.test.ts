import { describe, expect, it } from "vitest";

import { chooseAdventureFamily, createAdventureRun } from "@/core/adventure";
import {
  FAMILY_STARTER_DECK_CARD_COUNT,
  FAMILY_STARTER_DECKS,
  STARTER_DECK_FAMILIES,
  getFamilyStarterCardIds,
} from "@/core/config/decks";
import { getCardArchetype, getCardStrength } from "@/core/cards";

describe("V4 family starter decks", () => {
  it("defines one 12-card duplicate starter deck for every playable family", () => {
    for (const family of STARTER_DECK_FAMILIES) {
      const config = FAMILY_STARTER_DECKS[family];
      const cardIds = getFamilyStarterCardIds(family);
      const uniqueIds = new Set(cardIds);
      const copyCounts = [...uniqueIds].map((cardId) => cardIds.filter((entry) => entry === cardId).length).sort();

      expect(cardIds).toHaveLength(FAMILY_STARTER_DECK_CARD_COUNT);
      expect(uniqueIds.size).toBe(4);
      expect(copyCounts).toEqual([3, 3, 3, 3]);
      expect(config.cards.map((entry) => entry.role).sort()).toEqual(["anchor", "attacker", "connector", "payoff"]);
    }
  });

  it("keeps starter cards simple, common, and inside the first-pass side budget", () => {
    for (const family of STARTER_DECK_FAMILIES) {
      for (const entry of FAMILY_STARTER_DECKS[family].cards) {
        const card = getCardArchetype(entry.cardId);

        expect(card.family).toBe(family);
        expect(card.rarity).toBe("common");
        expect(card.role).toBe(entry.role);
        expect(card.effects).toHaveLength(1);
        expect(Math.max(...Object.values(card.sides))).toBeLessThanOrEqual(5);
        expect(Math.min(...Object.values(card.sides))).toBeGreaterThanOrEqual(1);
        expect(getCardStrength(card)).toBeGreaterThanOrEqual(10);
        expect(getCardStrength(card)).toBeLessThanOrEqual(12);
        expect(card.manaCost).toBeGreaterThanOrEqual(1);
        expect(card.manaCost).toBeLessThanOrEqual(2);
        if (entry.role === "attacker" || entry.role === "payoff") {
          expect(card.manaCost).toBe(2);
        }
        expect(card.buildTags?.length).toBeGreaterThan(0);
        expect(card.deckbuildingObjective?.length).toBeGreaterThan(0);
      }
    }
  });

  it("creates the selected family deck at run start without using the legacy draft", () => {
    for (const family of STARTER_DECK_FAMILIES) {
      const run = createAdventureRun({ seed: 42 });
      const started = chooseAdventureFamily(run, family);

      expect(started.phase).toBe("charm");
      expect(started.selectedFamily).toBe(family);
      expect(started.draft).toBeNull();
      expect(started.deck.cards.map((entry) => entry.card.id)).toEqual(getFamilyStarterCardIds(family));
    }
  });
});
