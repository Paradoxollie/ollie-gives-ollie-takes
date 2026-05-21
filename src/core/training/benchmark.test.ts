import { describe, expect, it } from "vitest";

import { greedyBot } from "@/core/bots";
import { FAMILY_STARTER_DECK_CARD_COUNT } from "@/core/config/decks";
import { benchmarkAdventureAgainstOpponents } from "@/core/training/adventure-benchmark";
import { benchmarkBotAgainstOpponents } from "@/core/training/benchmark";
import { getBotTrainingScenarios } from "@/core/training/scenarios";

describe("training benchmark", () => {
  it("builds a deterministic curriculum with stronger late scenarios", () => {
    const scenarios = getBotTrainingScenarios();

    expect(scenarios.length).toBeGreaterThanOrEqual(10);
    expect(scenarios[0].playerCardIds).toHaveLength(FAMILY_STARTER_DECK_CARD_COUNT);
    expect(scenarios[0].enemyCardIds).toHaveLength(FAMILY_STARTER_DECK_CARD_COUNT);
    expect(scenarios.some((scenario) => scenario.enemyCardIds.length > scenarios[0].enemyCardIds.length)).toBe(true);
    expect(scenarios.some((scenario) => scenario.playerCharmIds?.length)).toBe(true);
    expect(scenarios.some((scenario) => scenario.enemyProfileId)).toBe(true);
  });

  it("keeps benchmark summaries deterministic", { timeout: 20_000 }, () => {
    const fastScenarios = getBotTrainingScenarios().slice(0, 2);
    const left = benchmarkBotAgainstOpponents({
      seed: 909,
      candidate: {
        id: "candidate",
        label: "candidate",
        bot: greedyBot,
        searchDepth: 1,
        beamWidth: 6,
      },
      opponents: [
        {
          id: "greedy",
          label: "greedy",
          bot: greedyBot,
          searchDepth: 1,
          beamWidth: 12,
        },
      ],
      matchesPerOpponent: 1,
      scenarios: fastScenarios,
    });

    const right = benchmarkBotAgainstOpponents({
      seed: 909,
      candidate: {
        id: "candidate",
        label: "candidate",
        bot: greedyBot,
        searchDepth: 1,
        beamWidth: 6,
      },
      opponents: [
        {
          id: "greedy",
          label: "greedy",
          bot: greedyBot,
          searchDepth: 1,
          beamWidth: 12,
        },
      ],
      matchesPerOpponent: 1,
      scenarios: fastScenarios,
    });

    expect(left).toEqual(right);
  });

  it("keeps adventure benchmark summaries deterministic", { timeout: 20_000 }, () => {
    const left = benchmarkAdventureAgainstOpponents({
      seed: 909,
      candidate: {
        id: "candidate",
        label: "candidate",
        bot: greedyBot,
        searchDepth: 1,
        beamWidth: 6,
      },
      opponents: [
        {
          id: "greedy",
          label: "greedy",
          bot: greedyBot,
          searchDepth: 1,
          beamWidth: 12,
        },
      ],
      runsPerOpponent: 1,
    });

    const right = benchmarkAdventureAgainstOpponents({
      seed: 909,
      candidate: {
        id: "candidate",
        label: "candidate",
        bot: greedyBot,
        searchDepth: 1,
        beamWidth: 6,
      },
      opponents: [
        {
          id: "greedy",
          label: "greedy",
          bot: greedyBot,
          searchDepth: 1,
          beamWidth: 12,
        },
      ],
      runsPerOpponent: 1,
    });

    expect(left).toEqual(right);
    expect(left.totalRuns).toBe(1);
    expect(left.averageLocationsCleared).toBeGreaterThanOrEqual(0);
  });
});
