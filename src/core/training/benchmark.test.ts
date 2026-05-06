import { describe, expect, it } from "vitest";

import { greedyBot, heuristicBot } from "@/core/bots";
import { benchmarkAdventureAgainstOpponents } from "@/core/training/adventure-benchmark";
import { benchmarkBotAgainstOpponents } from "@/core/training/benchmark";
import { getBotTrainingScenarios } from "@/core/training/scenarios";

describe("training benchmark", () => {
  it("builds a deterministic curriculum with stronger late scenarios", () => {
    const scenarios = getBotTrainingScenarios();

    expect(scenarios.length).toBeGreaterThanOrEqual(10);
    expect(scenarios[0].playerCardIds).toHaveLength(12);
    expect(scenarios[0].enemyCardIds).toHaveLength(12);
    expect(scenarios[5].enemyCardIds.length).toBeGreaterThan(scenarios[0].enemyCardIds.length);
    expect(scenarios.some((scenario) => scenario.playerCharmIds?.length)).toBe(true);
    expect(scenarios.some((scenario) => scenario.enemyProfileId)).toBe(true);
  });

  it("keeps benchmark summaries deterministic", { timeout: 15_000 }, () => {
    const left = benchmarkBotAgainstOpponents({
      seed: 909,
      candidate: {
        id: "candidate",
        label: "candidate",
        bot: heuristicBot,
        searchDepth: 2,
        beamWidth: 8,
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
      matchesPerOpponent: 4,
    });

    const right = benchmarkBotAgainstOpponents({
      seed: 909,
      candidate: {
        id: "candidate",
        label: "candidate",
        bot: heuristicBot,
        searchDepth: 2,
        beamWidth: 8,
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
      matchesPerOpponent: 4,
    });

    expect(left).toEqual(right);
  });

  it("keeps adventure benchmark summaries deterministic", { timeout: 20_000 }, () => {
    const left = benchmarkAdventureAgainstOpponents({
      seed: 909,
      candidate: {
        id: "candidate",
        label: "candidate",
        bot: heuristicBot,
        searchDepth: 2,
        beamWidth: 8,
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
      runsPerOpponent: 2,
    });

    const right = benchmarkAdventureAgainstOpponents({
      seed: 909,
      candidate: {
        id: "candidate",
        label: "candidate",
        bot: heuristicBot,
        searchDepth: 2,
        beamWidth: 8,
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
      runsPerOpponent: 2,
    });

    expect(left).toEqual(right);
    expect(left.totalRuns).toBe(2);
    expect(left.averageLocationsCleared).toBeGreaterThanOrEqual(0);
  });
});
