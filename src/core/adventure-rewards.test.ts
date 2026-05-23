import { describe, expect, it } from "vitest";

import { chooseAdventureFamily, createAdventureRun } from "@/core/adventure";
import {
  createAdventureRewardOffer,
  createAdventureStealRewardOffer,
  createInitialAdventureDeckState,
  createInitialAdventureDeckCardIds,
  createInitialAdventureRewardProgress,
} from "@/core/adventure-rewards";
import { getCardArchetype } from "@/core/cards";

describe("adventure reward generation", () => {
  it("uses draft-pool cards in the legacy initial deck helper", () => {
    const deck = createInitialAdventureDeckState();
    const deckCardIds = createInitialAdventureDeckCardIds();

    expect(deckCardIds).toHaveLength(12);
    expect(new Set(deckCardIds).size).toBe(12);
    expect(deck.cards.every((entry) => entry.card.sourceType === "draft")).toBe(true);
  });

  it("creates the same reward offer for the same seed and progress", () => {
    const progress = createInitialAdventureRewardProgress();
    const first = createAdventureRewardOffer({
      sourceNodeId: "depth-0-lane-1",
      sourceNodeKind: "chest",
      progress,
      seed: 101,
    });
    const second = createAdventureRewardOffer({
      sourceNodeId: "depth-0-lane-1",
      sourceNodeKind: "chest",
      progress,
      seed: 101,
    });

    expect(first).toEqual(second);
  });

  it("offers enemy cards as post-victory steal rewards, including owned duplicates", () => {
    const deck = createInitialAdventureDeckState();
    const stealOffer = createAdventureStealRewardOffer({
      sourceNodeId: "combat-1",
      sourceNodeKind: "combat",
      enemyCards: [
        getCardArchetype("sapling"),
        getCardArchetype("clock-sentinel"),
        getCardArchetype("grave-child"),
        getCardArchetype("star-witch"),
      ],
      playerDeck: deck,
      seed: 77,
    });

    expect(stealOffer.rewardOffer?.options).toHaveLength(4);
    expect(stealOffer.rewardOffer?.options.some((option) => option.archetypeId === "sapling")).toBe(true);
    expect(stealOffer.rewardOffer?.options.find((option) => option.archetypeId === "sapling")?.alreadyOwnedCount).toBeGreaterThan(0);
  });

  it("never offers more than two rare and more than five uncommon cards across a run sample", () => {
    let progress = createInitialAdventureRewardProgress();
    let seed = 17;

    for (let index = 0; index < 12; index += 1) {
      const nextOffer = createAdventureRewardOffer({
        sourceNodeId: `depth-${index}-lane-1`,
        sourceNodeKind: index % 4 === 0 ? "elite" : "chest",
        progress,
        seed,
      });
      progress = nextOffer.progress;
      seed = nextOffer.seed;
    }

    expect(progress.offeredByRarity.rare).toBeLessThanOrEqual(2);
    expect(progress.offeredByRarity.uncommon).toBeLessThanOrEqual(5);
  });

  it("biases generated rewards toward the selected family and playable synergies", () => {
    const run = chooseAdventureFamily(createAdventureRun({ seed: 42 }), "familiar");
    const offer = createAdventureRewardOffer({
      sourceNodeId: "depth-0-lane-1",
      sourceNodeKind: "chest",
      progress: createInitialAdventureRewardProgress(),
      playerDeck: run.deck,
      seed: 5,
    });
    const offeredCards = offer.rewardOffer.options.map((option) => getCardArchetype(option.archetypeId));

    expect(offer.rewardOffer.options).toHaveLength(4);
    expect(offeredCards.filter((card) => card.family === "familiar").length).toBeGreaterThanOrEqual(2);
    expect(offeredCards.some((card) => card.role === "attacker" || card.role === "payoff")).toBe(true);
  });

  it("injects guaranteed uncommon cards when a long run has seen none yet", () => {
    const forcedOffer = createAdventureRewardOffer({
      sourceNodeId: "depth-6-lane-2",
      sourceNodeKind: "chest",
      progress: {
        offersSeen: 6,
        offeredByRarity: {
          common: 18,
          uncommon: 0,
          rare: 0,
        },
        claimedByRarity: {
          common: 0,
          uncommon: 0,
          rare: 0,
        },
      },
      seed: 9,
    });

    const uncommonCount = forcedOffer.rewardOffer.options.filter((option) => option.rarity === "uncommon").length;
    expect(uncommonCount).toBeGreaterThanOrEqual(2);
  });
});
