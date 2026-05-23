import { describe, expect, it } from "vitest";

import {
  chooseAdventureFamily,
  chooseAdventureCampMode,
  completeAdventureEncounter,
  createAdventureRun,
  enterAdventureNode,
  getAdventureCharmOptions,
  getAdventureLocationsCleared,
  getAdventureDeckCards,
  getAdventureNode,
  getAdventureRewardOptions,
  getAdventureNodeStatus,
  isCombatAdventureNode,
  leaveAdventureSite,
  listAvailableAdventureNodes,
  resolveAdventureCharm,
  resolveAdventureReward,
  resolveAdventureCamp,
  resolveAdventureForge,
  resolveAdventureTreasure,
  toggleAdventureForgeSelection,
} from "@/core/adventure";
import { getCardArchetype } from "@/core/cards";
import { FAMILY_STARTER_DECK_CARD_COUNT, FAMILY_STARTER_DECKS } from "@/core/config/decks";
import type { AdventureRunState, BattleResult, MatchOutcome } from "@/core/types";

function makeBattleResult(winner: MatchOutcome): BattleResult {
  return {
    winner,
    reason: winner === "draw" ? "stalemate" : "champion-ko",
    endingSource: "round-end-control",
    champions: {
      player: { health: winner === "enemy" ? 0 : 8, maxHealth: 20 },
      enemy: { health: winner === "player" ? 0 : 8, maxHealth: 20 },
    },
  };
}

function mapSignature(run: AdventureRunState) {
  return run.map.nodes.map((node) => ({
    id: node.id,
    depth: node.depth,
    lane: node.lane,
    kind: node.kind,
    title: node.title,
    nextNodeIds: node.nextNodeIds,
  }));
}

function mapStructureSignature(run: AdventureRunState): string {
  return JSON.stringify(
    run.map.nodes.map((node) => ({
      depth: node.depth,
      lane: node.lane,
      kind: node.kind,
      next: node.nextNodeIds.map((nextNodeId) => getAdventureNode(run, nextNodeId).lane),
    })),
  );
}

function startRun(seed: number): AdventureRunState {
  const run = resolveOpeningFamily(createAdventureRun({ seed }));
  const openingCharm = getAdventureCharmOptions(run)[0];
  if (!openingCharm) {
    throw new Error("Missing opening charm.");
  }

  return resolveAdventureCharm(run, openingCharm.charmId);
}

function resolveOpeningFamily(run: AdventureRunState): AdventureRunState {
  if (run.phase !== "family") {
    throw new Error("Missing opening family choice.");
  }

  return chooseAdventureFamily(run, "familiar");
}

function countCrossings(run: AdventureRunState): number {
  let total = 0;

  for (let depth = 0; depth < run.config.depthCount - 1; depth += 1) {
    const edges = run.map.nodes
      .filter((node) => node.depth === depth)
      .flatMap((node) =>
        node.nextNodeIds.map((nextNodeId) => {
          const nextNode = getAdventureNode(run, nextNodeId);
          return {
            fromLane: node.lane,
            toLane: nextNode.lane,
            fromId: node.id,
            toId: nextNode.id,
          };
        }),
      );

    for (let index = 0; index < edges.length; index += 1) {
      for (let candidateIndex = index + 1; candidateIndex < edges.length; candidateIndex += 1) {
        const edge = edges[index];
        const candidate = edges[candidateIndex];
        if (edge.fromId === candidate.fromId || edge.toId === candidate.toId) {
          continue;
        }

        if ((edge.fromLane - candidate.fromLane) * (edge.toLane - candidate.toLane) < 0) {
          total += 1;
        }
      }
    }
  }

  return total;
}

describe("adventure map generation", () => {
  it("builds the same branching map for the same seed and changes for a different seed", () => {
    const first = startRun(77);
    const second = startRun(77);
    const third = startRun(78);

    expect(mapSignature(first)).toEqual(mapSignature(second));
    expect(mapSignature(first)).not.toEqual(mapSignature(third));
  });

  it("keeps the boss fixed after the configured route length and ensures every node is connected forward", () => {
    const run = startRun(17);
    const bossNode = getAdventureNode(run, run.map.bossNodeId);

    expect(bossNode.kind).toBe("boss");
    expect(bossNode.depth).toBe(run.config.depthCount);

    for (const node of run.map.nodes) {
      if (node.kind === "boss") {
        expect(node.nextNodeIds).toEqual([]);
        continue;
      }

      expect(node.depth).toBeLessThan(run.config.depthCount);
      expect(node.nextNodeIds.length).toBeGreaterThan(0);

      if (node.depth === run.config.depthCount - 1) {
        expect(node.nextNodeIds).toEqual([bossNode.id]);
        continue;
      }

      for (const nextNodeId of node.nextNodeIds) {
        expect(getAdventureNode(run, nextNodeId).depth).toBe(node.depth + 1);
      }
    }

    for (let depth = 1; depth < run.config.depthCount; depth += 1) {
      const row = run.map.nodes.filter((node) => node.depth === depth);
      for (const node of row) {
        const hasIncoming = run.map.nodes.some(
          (candidate) => candidate.depth === depth - 1 && candidate.nextNodeIds.includes(node.id),
        );
        expect(hasIncoming).toBe(true);
      }
    }
  });

  it("keeps crossings rare and produces strongly different layouts across runs", () => {
    const runs = Array.from({ length: 18 }, (_, index) => startRun(index + 1));
    const uniqueStructures = new Set(runs.map((run) => mapStructureSignature(run)));
    const crossingCounts = runs.map((run) => countCrossings(run));

    expect(uniqueStructures.size).toBeGreaterThanOrEqual(15);
    expect(Math.max(...crossingCounts)).toBeLessThanOrEqual(2);
  });
});

describe("adventure progression", () => {
  it("starts on the map and presents a steal offer before unlocking the next branch after a combat win", () => {
    const run = startRun(33);
    const firstNode = listAvailableAdventureNodes(run)[0];
    const entered = enterAdventureNode(run, firstNode.id);

    expect(entered.phase).toBe("encounter");
    expect(entered.history).toEqual([firstNode.id]);
    expect(getAdventureNodeStatus(entered, firstNode.id)).toBe("active");

    const resolved = completeAdventureEncounter(entered, makeBattleResult("player"), [
      getCardArchetype("ember-imp"),
      getCardArchetype("field-knight"),
      getCardArchetype("clock-sentinel"),
    ]);
    const rewardOptions = getAdventureRewardOptions(resolved);

    expect(resolved.phase).toBe("reward");
    expect(resolved.activeNodeId).toBe(firstNode.id);
    expect(rewardOptions).toHaveLength(3);
    expect(getAdventureNodeStatus(resolved, firstNode.id)).toBe("active");

    const afterReward = resolveAdventureReward(resolved, rewardOptions[0]?.rewardId);

    expect(afterReward.phase).toBe("map");
    expect(afterReward.activeNodeId).toBe(firstNode.id);
    expect(afterReward.availableNodeIds).toEqual(firstNode.nextNodeIds);
    expect(getAdventureNodeStatus(afterReward, firstNode.id)).toBe("completed");
    expect(afterReward.deck.cards).toHaveLength(run.deck.cards.length + 1);
    expect(afterReward.deck.cards.at(-1)?.card.sourceType).toBe("draft");
    expect(afterReward.rewardProgress.claimedByRarity[rewardOptions[0]?.rarity ?? "common"]).toBe(1);
  });

  it("lets the player skip a reward and continue with the same deck size", () => {
    const run = startRun(61);
    const firstNode = listAvailableAdventureNodes(run)[0];
    const entered = enterAdventureNode(run, firstNode.id);
    const resolved = completeAdventureEncounter(entered, makeBattleResult("player"), [
      getCardArchetype("ember-imp"),
      getCardArchetype("field-knight"),
      getCardArchetype("clock-sentinel"),
    ]);
    const skipped = resolveAdventureReward(resolved);

    expect(skipped.phase).toBe("map");
    expect(skipped.deck.cards).toHaveLength(run.deck.cards.length);
    expect(skipped.rewardProgress.claimedByRarity).toEqual({
      common: 0,
      uncommon: 0,
      rare: 0,
    });
  });

  it("ends the run immediately on a lost combat", () => {
    const run = startRun(41);
    const firstNode = listAvailableAdventureNodes(run)[0];
    const entered = enterAdventureNode(run, firstNode.id);
    const resolved = completeAdventureEncounter(entered, makeBattleResult("enemy"));

    expect(resolved.phase).toBe("finished");
    expect(resolved.outcome).toBe("defeat");
    expect(resolved.encounter?.status).toBe("failed");
  });

  it("resolves camp, forge, and chest card sites through real deck mutations", () => {
    const run = Array.from({ length: 48 }, (_, index) => startRun(index + 1)).find(
      (candidate) =>
        candidate.map.nodes.some((node) => node.kind === "rest") &&
        candidate.map.nodes.some((node) => node.kind === "shop") &&
        candidate.map.nodes.some((node) => node.kind === "chest"),
    );
    if (!run) {
      throw new Error("Missing a seed with camp, forge, and treasure nodes.");
    }
    const campNode = run.map.nodes.find((node) => node.kind === "rest");
    const forgeNode = run.map.nodes.find((node) => node.kind === "shop");
    const treasureNode = run.map.nodes.find((node) => node.kind === "chest");
    if (!campNode || !forgeNode || !treasureNode) {
      throw new Error("Missing site nodes.");
    }

    const campRun = {
      ...run,
      phase: "map" as const,
      availableNodeIds: [campNode.id],
      history: [],
      activeNodeId: null,
    };
    const enteredCamp = enterAdventureNode(campRun, campNode.id);
    expect(enteredCamp.phase).toBe("site");
    expect(enteredCamp.siteState?.kind).toBe("camp");
    const campChoice = chooseAdventureCampMode(enteredCamp, "upgrade");
    const upgradedCamp = resolveAdventureCamp(campChoice, getAdventureDeckCards(campChoice)[0].deckCardId);
    expect(upgradedCamp.phase).toBe("map");
    expect(upgradedCamp.deck.cards[0]?.card.sourceType).toBe("upgrade");

    const forgeRun = {
      ...upgradedCamp,
      phase: "map" as const,
      availableNodeIds: [forgeNode.id],
      activeNodeId: null,
    };
    const enteredForge = enterAdventureNode(forgeRun, forgeNode.id);
    expect(enteredForge.siteState?.kind).toBe("forge");
    const forgeCards = getAdventureDeckCards(enteredForge);
    const withFirstSelection = toggleAdventureForgeSelection(enteredForge, forgeCards[0].deckCardId);
    const withSecondSelection = toggleAdventureForgeSelection(withFirstSelection, forgeCards[1].deckCardId);
    const forged = resolveAdventureForge(withSecondSelection);
    expect(forged.phase).toBe("map");
    expect(forged.deck.cards.length).toBe(upgradedCamp.deck.cards.length - 1);
    expect(forged.deck.cards.some((entry) => entry.card.sourceType === "fusion")).toBe(true);

    const chestRun = {
      ...forged,
      phase: "map" as const,
      availableNodeIds: [treasureNode.id],
      activeNodeId: null,
    };
    const enteredChest = enterAdventureNode(chestRun, treasureNode.id);
    expect(enteredChest.phase).toBe("reward");
    expect(getAdventureRewardOptions(enteredChest).length).toBeGreaterThan(0);
    const afterChest = resolveAdventureReward(enteredChest, getAdventureRewardOptions(enteredChest)[0]?.rewardId);
    expect(afterChest.phase).toBe("map");
    expect(afterChest.deck.cards).toHaveLength(chestRun.deck.cards.length + 1);
  });

  it("starts every run with a family choice before the mandatory opening charm choice", () => {
    const run = createAdventureRun({ seed: 12 });

    expect(run.phase).toBe("family");
    expect(run.deck.cards).toHaveLength(0);
    expect(run.draft).toBeNull();
    expect(run.selectedFamily).toBeNull();
    expect(Object.keys(FAMILY_STARTER_DECKS)).toEqual([
      "familiar",
      "demon",
      "human",
      "automaton",
      "revenant",
      "arcane",
    ]);

    const familyRun = chooseAdventureFamily(run, "familiar");
    const copyCounts = familyRun.deck.cards.reduce<Record<string, number>>((counts, entry) => {
      counts[entry.card.id] = (counts[entry.card.id] ?? 0) + 1;
      return counts;
    }, {});

    expect(familyRun.phase).toBe("charm");
    expect(familyRun.selectedFamily).toBe("familiar");
    expect(familyRun.deck.cards).toHaveLength(FAMILY_STARTER_DECK_CARD_COUNT);
    expect(Object.values(copyCounts).sort()).toEqual([3, 3, 3, 3]);
    expect(new Set(familyRun.deck.cards.map((entry) => entry.card.id)).size).toBe(4);
    expect(familyRun.deck.cards.every((entry) => entry.card.effects?.length === 1)).toBe(true);
    expect(run.charms).toHaveLength(0);
    expect(familyRun.charmOffer?.canSkip).toBe(false);
    expect(getAdventureCharmOptions(familyRun)).toHaveLength(3);

    const resolved = resolveAdventureCharm(familyRun, getAdventureCharmOptions(familyRun)[0]?.charmId);
    expect(resolved.phase).toBe("map");
    expect(resolved.charms).toHaveLength(1);
  });

  it("reaches the fixed boss only after 12 cleared locations and wins the run", () => {
    let run = startRun(9);
    let guard = 0;

    while (run.phase !== "finished" && guard < 20) {
      const nextNode = listAvailableAdventureNodes(run)[0];
      run = enterAdventureNode(run, nextNode.id);
      const activeNode = getAdventureNode(run, nextNode.id);
      if (isCombatAdventureNode(activeNode.kind)) {
        run = completeAdventureEncounter(run, makeBattleResult("player"));
      } else if (activeNode.kind === "chest") {
        run = resolveAdventureReward(run, getAdventureRewardOptions(run)[0]?.rewardId);
      } else {
        run = leaveAdventureSite(run);
      }
      if (run.phase === "reward") {
        run = resolveAdventureReward(run);
      }
      if (run.phase === "charm") {
        run = resolveAdventureCharm(run, getAdventureCharmOptions(run)[0]?.charmId);
      }
      guard += 1;
    }

    expect(guard).toBe(run.config.depthCount + 1);
    expect(run.phase).toBe("finished");
    expect(run.outcome).toBe("victory");
    expect(run.activeNodeId).toBe(run.map.bossNodeId);
    expect(getAdventureLocationsCleared(run)).toBe(run.config.depthCount);
    expect(run.history).toHaveLength(run.config.depthCount + 1);
  });
});
