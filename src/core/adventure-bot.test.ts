import { describe, expect, it } from "vitest";

import {
  getAdventureCharmOptions,
  chooseAdventureCampForBot,
  chooseAdventureCharmForBot,
  chooseAdventureForgeForBot,
  chooseAdventureNodeForBot,
  chooseAdventureRewardForBot,
  createAdventureDeckCard,
  createAdventureRun,
  enterAdventureNode,
  getCardArchetype,
  resolveAdventureCharm,
  resolveAdventureDraft,
} from "@/core";
import type { TrainedBotWeights } from "@/core/types";

function startRun(seed: number) {
  const initialRun = createAdventureRun({ seed });
  if (!initialRun.draft) {
    throw new Error("Missing opening draft.");
  }

  const run = resolveAdventureDraft(initialRun, initialRun.draft.offerCardIds.slice(0, initialRun.draft.pickCount));
  const openingCharm = getAdventureCharmOptions(run)[0];
  if (!openingCharm) {
    throw new Error("Missing opening charm.");
  }

  return resolveAdventureCharm(run, openingCharm.charmId);
}

function createWeights(overrides: Partial<TrainedBotWeights> = {}): TrainedBotWeights {
  return {
    hpDiff: 0,
    controlDiff: 0,
    boardStrengthDiff: 0,
    reserveStrengthDiff: 0,
    handStrengthDiff: 0,
    mobilityDiff: 0,
    cornerControlDiff: 0,
    occupiedBoardDiff: 0,
    imminentRoundDamageDiff: 0,
    activeTurnTempo: 0,
    specialCardValue: 0,
    deckTrimValue: 0,
    eliteRouteBias: 0,
    restRouteBias: 0,
    forgeRouteBias: 0,
    treasureRouteBias: 0,
    branchingRouteBias: 0,
    riskTolerance: 0,
    aggressionPlanBias: 0,
    controlPlanBias: 0,
    tempoPlanBias: 0,
    fusionPlanBias: 0,
    precisionPlanBias: 0,
    uncommonCardBias: 0,
    rareCardBias: 0,
    charmSynergyBias: 0,
    duplicateCardPenalty: 0,
    enemyProfileRespect: 0,
    ...overrides,
  };
}

describe("adventure bot helpers", () => {
  it("prefers reward-bearing combats over placeholder nodes on the opening map", () => {
    const run = startRun(77);

    const pickedNode = chooseAdventureNodeForBot(run);

    expect(pickedNode).not.toBeNull();
    expect(pickedNode?.kind).toBe("combat");
  });

  it("prefers the strongest available reward option", () => {
    let run = startRun(101);
    const firstNode = chooseAdventureNodeForBot(run);
    if (!firstNode) {
      throw new Error("Expected an opening node.");
    }

    run = enterAdventureNode(run, firstNode.id);
    run = {
      ...run,
      phase: "reward",
      rewardOffer: {
        sourceNodeId: firstNode.id,
        sourceNodeKind: "combat",
        options: [
          { rewardId: "one", archetypeId: "reward-common-01", rarity: "common" },
          { rewardId: "two", archetypeId: "reward-uncommon-01", rarity: "uncommon" },
          { rewardId: "three", archetypeId: "reward-rare-01", rarity: "rare" },
        ],
      },
    };

    const pickedReward = chooseAdventureRewardForBot(run);

    expect(pickedReward?.rewardId).toBe("three");
  });

  it("removes the weakest draft card at camp instead of burning a stronger upgrade", () => {
    const run = startRun(14);
    const weakDraftCard = {
      ...getCardArchetype("sapling"),
      id: "weak-draft",
      name: "Weak Draft",
      sides: { top: 1, right: 1, bottom: 1, left: 1 },
      sourceType: "draft" as const,
    };
    const strongUpgrade = {
      ...getCardArchetype("reward-rare-01"),
      id: "strong-upgrade",
      name: "Strong Upgrade",
      sourceType: "reward" as const,
    };
    const campRun = {
      ...run,
      phase: "site" as const,
      deck: {
        ...run.deck,
        cards: [
          createAdventureDeckCard("deck-weak", weakDraftCard),
          createAdventureDeckCard("deck-strong", strongUpgrade),
        ],
      },
      siteState: {
        kind: "camp" as const,
        sourceNodeId: "camp-node",
        selectedMode: "remove" as const,
      },
    };

    const pickedCard = chooseAdventureCampForBot(campRun);

    expect(pickedCard?.deckCardId).toBe("deck-weak");
  });

  it("locks onto the best fusion pair instead of mixing in a dead card", () => {
    const run = startRun(28);
    const fusionTopRight = {
      ...getCardArchetype("badger"),
      id: "fusion-top-right",
      name: "Fusion TR",
      sides: { top: 6, right: 6, bottom: 1, left: 1 },
      sourceType: "draft" as const,
    };
    const fusionBottomLeft = {
      ...getCardArchetype("heron"),
      id: "fusion-bottom-left",
      name: "Fusion BL",
      sides: { top: 1, right: 1, bottom: 6, left: 6 },
      sourceType: "draft" as const,
    };
    const deadCard = {
      ...getCardArchetype("sapling"),
      id: "dead-card",
      name: "Dead Card",
      sides: { top: 2, right: 2, bottom: 2, left: 2 },
      sourceType: "draft" as const,
    };
    const forgeRun = {
      ...run,
      phase: "site" as const,
      deck: {
        ...run.deck,
        cards: [
          createAdventureDeckCard("deck-a", fusionTopRight),
          createAdventureDeckCard("deck-b", fusionBottomLeft),
          createAdventureDeckCard("deck-c", deadCard),
        ],
      },
      siteState: {
        kind: "forge" as const,
        sourceNodeId: "forge-node",
        selectedCardIds: [],
        previewCard: null,
      },
    };

    const firstPick = chooseAdventureForgeForBot(forgeRun);
    const secondPick = chooseAdventureForgeForBot({
      ...forgeRun,
      siteState: {
        ...forgeRun.siteState,
        selectedCardIds: firstPick ? [firstPick.deckCardId] : [],
      },
    });

    expect(new Set([firstPick?.deckCardId, secondPick?.deckCardId])).toEqual(new Set(["deck-a", "deck-b"]));
  });

  it("leans into fusion charms when the learned build plan favors fusion", () => {
    const run = startRun(64);
    const charmRun = {
      ...run,
      phase: "charm" as const,
      charmOffer: {
        source: "chest" as const,
        sourceNodeId: "chest-node",
        title: "Choix",
        subtitle: "Trois reliques",
        canSkip: true,
        options: [
          { charmId: "watcher-stone" as const },
          { charmId: "double-knot-rune" as const },
          { charmId: "spring-tear" as const },
        ],
      },
      deck: {
        ...run.deck,
        cards: [
          createAdventureDeckCard("deck-a", {
            ...getCardArchetype("badger"),
            id: "fusion-a",
            sides: { top: 6, right: 6, bottom: 1, left: 1 },
            sourceType: "draft",
          }),
          createAdventureDeckCard("deck-b", {
            ...getCardArchetype("heron"),
            id: "fusion-b",
            sides: { top: 1, right: 1, bottom: 6, left: 6 },
            sourceType: "draft",
          }),
          ...run.deck.cards,
        ],
      },
    };

    const pickedCharm = chooseAdventureCharmForBot(
      charmRun,
      createWeights({
        fusionPlanBias: 15,
        forgeRouteBias: 10,
        charmSynergyBias: 8,
      }),
    );

    expect(pickedCharm?.charmId).toBe("double-knot-rune");
  });
});
