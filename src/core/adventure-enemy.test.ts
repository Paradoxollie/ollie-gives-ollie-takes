import { describe, expect, it } from "vitest";

import { buildAdventureEnemyLoadout } from "@/core/adventure-enemy";
import { chooseAdventureFamily, createAdventureRun, getAdventureNode } from "@/core/adventure";
import { createAdventureDeckCard, getCardArchetype } from "@/core/cards";
import { ADVENTURE_ENEMY_CONFIG } from "@/core/config/gameConfig";

function createRunAtDepth(seed: number, activeNodeId: string, historyLength: number) {
  const run = createFamilyRun(seed);
  const nonBossNodeIds = run.map.nodes.filter((node) => node.kind !== "boss").map((node) => node.id);

  return {
    ...run,
    activeNodeId,
    history: nonBossNodeIds.slice(0, historyLength),
  };
}

function createFamilyRun(seed: number) {
  const run = createAdventureRun({ seed });
  if (run.phase !== "family") {
    throw new Error("Missing opening family choice.");
  }

  return chooseAdventureFamily(run, "familiar");
}

describe("adventure enemy scaling", () => {
  it("keeps the first normal combat on a readable light mono-family starter deck", () => {
    const run = createFamilyRun(5);
    const firstCombat = run.map.nodes.find((node) => node.depth === 0 && node.kind === "combat");
    if (!firstCombat) {
      throw new Error("Missing first combat node.");
    }

    const enteredRun = {
      ...run,
      activeNodeId: firstCombat.id,
      history: [firstCombat.id],
    };
    const loadout = buildAdventureEnemyLoadout(enteredRun, firstCombat);

    expect(loadout.replacements).toBe(0);
    expect(loadout.additions).toBe(0);
    expect(loadout.cardIds).toHaveLength(ADVENTURE_ENEMY_CONFIG.earlyNormalStarterCardCount);
    expect(loadout.splashFamilies).toEqual([]);
    expect(loadout.deckPlan).toContain(`Mono-${loadout.mainFamily}`);
    expect(new Set(["greedy", "heuristic"]).has(loadout.botId)).toBe(true);
    expect(loadout.rarityCounts).toEqual({
      common: 0,
      uncommon: 0,
      rare: 0,
    });
  });

  it("builds readable enemy family plans without relying on the player draft pool", () => {
    const run = createFamilyRun(12);
    const firstCombat = run.map.nodes.find((node) => node.depth === 0 && node.kind === "combat");
    if (!firstCombat) {
      throw new Error("Missing first combat node.");
    }

    const loadout = buildAdventureEnemyLoadout(
      {
        ...run,
        activeNodeId: firstCombat.id,
        history: [firstCombat.id],
      },
      firstCombat,
    );
    expect(loadout.mainFamily).not.toBe("dragon");
    expect(loadout.mainFamily).not.toBe("renegade");
    expect(loadout.preferredBoardShapes.length).toBeGreaterThan(0);
    expect(loadout.counterplayHint.length).toBeGreaterThan(0);
  });

  it("adds stronger cards as the run progresses and makes elites stronger than normals", () => {
    const seed = Array.from({ length: 80 }, (_, index) => index + 1).find((candidateSeed) => {
      const candidateRun = createFamilyRun(candidateSeed);
      return (
        candidateRun.map.nodes.some((node) => node.depth >= 3 && node.kind === "combat") &&
        candidateRun.map.nodes.some((node) => node.depth >= 3 && node.kind === "elite")
      );
    });
    if (!seed) {
      throw new Error("Missing a seed with normal and elite comparison nodes.");
    }
    const run = createFamilyRun(seed);
    const normalNode = run.map.nodes.find((node) => node.depth >= 3 && node.kind === "combat");
    const eliteNode = run.map.nodes.find((node) => node.depth >= 3 && node.kind === "elite");
    if (!normalNode || !eliteNode) {
      throw new Error("Missing comparison nodes.");
    }

    const progressedRun = {
      ...createRunAtDepth(seed, normalNode.id, 6),
      deck: {
        cards: [
          ...run.deck.cards,
          createAdventureDeckCard("deck-bonus-1", getCardArchetype("reward-common-01")),
          createAdventureDeckCard("deck-bonus-2", getCardArchetype("reward-uncommon-01")),
        ],
        nextDeckCardSequence: run.deck.nextDeckCardSequence + 2,
        nextGeneratedCardSequence: run.deck.nextGeneratedCardSequence,
      },
      rewardProgress: {
        ...run.rewardProgress,
        claimedByRarity: {
          common: 1,
          uncommon: 1,
          rare: 0,
        },
      },
    };

    const normalLoadout = buildAdventureEnemyLoadout(progressedRun, normalNode);
    const eliteLoadout = buildAdventureEnemyLoadout(
      {
        ...progressedRun,
        activeNodeId: eliteNode.id,
      },
      eliteNode,
    );

    expect(normalLoadout.replacements + normalLoadout.additions).toBeGreaterThan(0);
    expect(eliteLoadout.replacements + eliteLoadout.additions).toBeGreaterThan(
      normalLoadout.replacements + normalLoadout.additions,
    );
    expect(eliteLoadout.searchDepth).toBeGreaterThanOrEqual(normalLoadout.searchDepth);
  });

  it("pushes the boss to the maximum upgrade budget with higher rarity pressure", () => {
    const run = createFamilyRun(11);
    const bossNode = getAdventureNode(run, run.map.bossNodeId);
    const bossRun = {
      ...createRunAtDepth(11, bossNode.id, run.config.depthCount),
      activeNodeId: bossNode.id,
      deck: {
        cards: [
          ...run.deck.cards,
          createAdventureDeckCard("deck-bonus-1", getCardArchetype("reward-common-01")),
          createAdventureDeckCard("deck-bonus-2", getCardArchetype("reward-uncommon-01")),
          createAdventureDeckCard("deck-bonus-3", getCardArchetype("reward-rare-01")),
        ],
        nextDeckCardSequence: run.deck.nextDeckCardSequence + 3,
        nextGeneratedCardSequence: run.deck.nextGeneratedCardSequence,
      },
      rewardProgress: {
        ...run.rewardProgress,
        claimedByRarity: {
          common: 1,
          uncommon: 1,
          rare: 1,
        },
      },
    };

    const bossLoadout = buildAdventureEnemyLoadout(bossRun, bossNode);

    expect(bossLoadout.replacements).toBeGreaterThan(0);
    expect(bossLoadout.replacements).toBeLessThanOrEqual(4);
    expect(bossLoadout.additions).toBe(0);
    expect(bossLoadout.botId).toBe("champion");
    expect(bossLoadout.searchDepth).toBe(3);
    expect(bossLoadout.cardIds).toHaveLength(14);
    expect(bossLoadout.splashFamilies.length).toBeGreaterThan(0);
    expect(bossLoadout.deckPlan).toContain("Hybride");
    expect(bossLoadout.rarityCounts.uncommon + bossLoadout.rarityCounts.rare).toBeGreaterThan(0);
  });

  it("covers the full enemy profile roster across normal, elite, and boss encounters", () => {
    const normalProfiles = new Set<string>();
    const eliteProfiles = new Set<string>();
    const bossProfiles = new Set<string>();

    for (let seed = 1; seed <= 80; seed += 1) {
      const run = createFamilyRun(seed);
      const normalNode = run.map.nodes.find((node) => node.kind === "combat");
      const eliteNode = run.map.nodes.find((node) => node.kind === "elite");
      const bossNode = getAdventureNode(run, run.map.bossNodeId);

      if (normalNode) {
        normalProfiles.add(buildAdventureEnemyLoadout(run, normalNode).profile.id);
      }

      if (eliteNode) {
        eliteProfiles.add(buildAdventureEnemyLoadout(run, eliteNode).profile.id);
      }

      bossProfiles.add(buildAdventureEnemyLoadout(run, bossNode).profile.id);
    }

    expect(normalProfiles).toEqual(new Set(["aggro", "fortress", "swarm", "trickster", "builder"]));
    expect(eliteProfiles).toEqual(new Set(["executioner", "bastion", "shaper"]));
    expect(bossProfiles).toEqual(new Set(["ravager", "warden"]));
  });

  it("can generate fusion signature cards for builder and shaper style enemies", () => {
    let builderFound = false;
    let shaperFound = false;

    for (let seed = 1; seed <= 120; seed += 1) {
      const run = createFamilyRun(seed);
      const deepNormalNode = run.map.nodes.find((node) => node.kind === "combat" && node.depth >= 5);
      const eliteNode = run.map.nodes.find((node) => node.kind === "elite" && node.depth >= 4);

      if (deepNormalNode && !builderFound) {
        const progressedRun = {
          ...createRunAtDepth(seed, deepNormalNode.id, 9),
          deck: {
            cards: [
              ...run.deck.cards,
              createAdventureDeckCard("deck-bonus-1", getCardArchetype("reward-common-01")),
              createAdventureDeckCard("deck-bonus-2", getCardArchetype("reward-uncommon-01")),
              createAdventureDeckCard("deck-bonus-3", getCardArchetype("reward-rare-01")),
            ],
            nextDeckCardSequence: run.deck.nextDeckCardSequence + 3,
            nextGeneratedCardSequence: run.deck.nextGeneratedCardSequence,
          },
          rewardProgress: {
            ...run.rewardProgress,
            claimedByRarity: {
              common: 1,
              uncommon: 1,
              rare: 1,
            },
          },
        };
        const loadout = buildAdventureEnemyLoadout(progressedRun, deepNormalNode);
        if (loadout.profile.id === "builder") {
          expect(loadout.signatureCardIds.length).toBeGreaterThan(0);
          expect(
            loadout.cards.some(
              (card) => loadout.signatureCardIds.includes(card.id) && card.sourceType === "fusion",
            ),
          ).toBe(true);
          builderFound = true;
        }
      }

      if (eliteNode && !shaperFound) {
        const progressedRun = {
          ...createRunAtDepth(seed, eliteNode.id, 10),
          deck: {
            cards: [
              ...run.deck.cards,
              createAdventureDeckCard("deck-bonus-1", getCardArchetype("reward-common-01")),
              createAdventureDeckCard("deck-bonus-2", getCardArchetype("reward-uncommon-01")),
              createAdventureDeckCard("deck-bonus-3", getCardArchetype("reward-rare-01")),
            ],
            nextDeckCardSequence: run.deck.nextDeckCardSequence + 3,
            nextGeneratedCardSequence: run.deck.nextGeneratedCardSequence,
          },
          rewardProgress: {
            ...run.rewardProgress,
            claimedByRarity: {
              common: 1,
              uncommon: 1,
              rare: 1,
            },
          },
        };
        const loadout = buildAdventureEnemyLoadout(progressedRun, eliteNode);
        if (loadout.profile.id === "shaper") {
          expect(loadout.signatureCardIds.length).toBeGreaterThan(0);
          expect(
            loadout.cards.some(
              (card) => loadout.signatureCardIds.includes(card.id) && card.sourceType === "fusion",
            ),
          ).toBe(true);
          shaperFound = true;
        }
      }

      if (builderFound && shaperFound) {
        break;
      }
    }

    expect(builderFound).toBe(true);
    expect(shaperFound).toBe(true);
  });
});
