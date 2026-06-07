import { describe, expect, it } from "vitest";

import { chooseAdventureFamily, createAdventureRun } from "@/core/adventure";
import {
  FAMILY_STARTER_DECK_CARD_COUNT,
  FAMILY_STARTER_DECKS,
  STARTER_DECK_FAMILIES,
  getFamilyStarterCardIds,
} from "@/core/config/decks";
import { getCardArchetype, getCardStrength } from "@/core/cards";

describe("family starter decks", () => {
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
        expect(card.effects?.length).toBeGreaterThanOrEqual(1);
        expect(card.effects?.length).toBeLessThanOrEqual(2);
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

  it("gives starter engines real stack requirements instead of free solo value", () => {
    const sapling = getCardArchetype("sapling");
    const cinderGrin = getCardArchetype("cinder-grin");
    const sentinel = getCardArchetype("clock-sentinel");
    const monk = getCardArchetype("gear-monk");
    const oracle = getCardArchetype("tin-oracle");
    const quietMonk = getCardArchetype("quiet-monk");
    const ranger = getCardArchetype("path-ranger");
    const mage = getCardArchetype("rune-mage");
    const knight = getCardArchetype("field-knight");
    const widowKnight = getCardArchetype("widow-knight");
    const mothGhost = getCardArchetype("moth-ghost");
    const starWitch = getCardArchetype("star-witch");
    const runeAdept = getCardArchetype("rune-adept");
    const moonScribe = getCardArchetype("moon-scribe");

    expect(
      sapling.effects?.some((effect) => effect.kind === "gain-shield" && effect.requiredFamilyCount === 2),
    ).toBe(true);
    expect(
      sapling.effects?.some(
        (effect) =>
          effect.kind === "apply-poison" &&
          effect.condition === "adjacent-ally" &&
          effect.requiredFamilyCount === 2,
      ),
    ).toBe(true);
    expect(
      cinderGrin.effects?.some((effect) => effect.kind === "deal-damage" && effect.requiredFamilyCount === 2),
    ).toBe(true);
    expect(sentinel.preferredPositions).toContain("corner");
    expect(
      sentinel.effects?.some((effect) => effect.kind === "gain-shield" && effect.condition === "corner"),
    ).toBe(true);
    expect(monk.manaCost).toBe(1);
    expect(
      monk.effects?.some(
        (effect) =>
          effect.kind === "boost-self" &&
          effect.requiredFamilyCount === 2 &&
          effect.scaleWithFamilyCount,
      ),
    ).toBe(true);
    expect(
      oracle.effects?.some(
        (effect) =>
          effect.kind === "gain-mana-next-turn" &&
          effect.condition === "corner" &&
          effect.requiredFamilyCount === 2,
      ),
    ).toBe(true);
    expect(
      quietMonk.effects?.some(
        (effect) =>
          effect.kind === "boost-self" &&
          effect.requiredFamilyCount === 2 &&
          effect.directions === "weakest",
      ),
    ).toBe(true);
    expect(
      ranger.effects?.some(
        (effect) =>
          effect.kind === "boost-self" &&
          effect.requiredFamilyCount === 2 &&
          effect.directions === "strongest" &&
          !effect.scaleWithFamilyCount,
      ),
    ).toBe(true);
    expect(
      mage.effects?.some((effect) => effect.kind === "draw-next-turn" && effect.requiredFamilyCount === 2),
    ).toBe(true);
    expect(
      mage.effects?.some(
        (effect) =>
          effect.kind === "boost-self" &&
          effect.requiredFamilyCount === 2 &&
          !effect.scaleWithFamilyCount,
      ),
    ).toBe(true);
    expect(
      knight.effects?.some((effect) => effect.kind === "gain-shield" && effect.requiredFamilyCount === 2),
    ).toBe(true);
    expect(
      widowKnight.effects?.some(
        (effect) => effect.kind === "deal-damage" && effect.requiredFamilyCount === 2,
      ),
    ).toBe(true);
    expect(
      mothGhost.effects?.some(
        (effect) =>
          effect.kind === "draw-next-turn" &&
          effect.condition === "behind-on-board" &&
          effect.requiredFamilyCount === 2,
      ),
    ).toBe(true);
    expect(
      starWitch.effects?.some(
        (effect) =>
          effect.kind === "boost-self" &&
          effect.amount === 2 &&
          effect.requiredFamilyCount === 3 &&
          !effect.condition &&
          !effect.scaleWithFamilyCount,
      ),
    ).toBe(true);
    expect(
      starWitch.effects?.some(
        (effect) => effect.kind === "draw-next-turn" && effect.requiredFamilyCount === 3,
      ),
    ).toBe(true);
    expect(
      runeAdept.effects?.some(
        (effect) => effect.kind === "draw-next-turn" && effect.condition === "adjacent-ally",
      ),
    ).toBe(true);
    expect(
      moonScribe.effects?.some(
        (effect) => effect.kind === "boost-self" && effect.condition === "adjacent-enemy",
      ),
    ).toBe(true);
  });
});
