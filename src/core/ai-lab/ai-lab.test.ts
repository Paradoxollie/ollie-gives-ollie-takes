import { describe, expect, it } from "vitest";

import { AI_PLAYER_MODELS } from "@/core/ai-lab/models";
import { buildAiLabReport, createAiLabInsights } from "@/core/ai-lab/report";
import type { AiLabDeckSummary } from "@/core/ai-lab/types";

function makeDeckSummary(overrides: Partial<AiLabDeckSummary> = {}): AiLabDeckSummary {
  return {
    deckPresetId: "starter10",
    mirrorModelId: "regular",
    totalGames: 20,
    drawRate: 0.25,
    startingPlayerWinRate: 0.7,
    averages: {
      turns: 18,
      rounds: 2,
      flipsPerMatch: 5,
      flipsPerTurn: 0.28,
      reshuffles: 1,
      deadTurns: 2,
      finalHpDifference: 4,
    },
    deadTurnFrequency: 0.13,
    status: "problem",
    notes: ["Avantage premier joueur tres marque.", "Tours morts frequents."],
    ...overrides,
  };
}

describe("AI lab report", () => {
  it("builds deterministic model and deck summaries", { timeout: 20_000 }, () => {
    const options = {
      seed: 404,
      matchesPerPairing: 1,
      deckPresetIds: ["starter10" as const],
      generatedAt: "2026-05-18T00:00:00.000Z",
      reportId: "ai-lab-test",
    };

    const left = buildAiLabReport(options);
    const right = buildAiLabReport(options);

    expect(left).toEqual(right);
    expect(left.playerModels.map((model) => model.id)).toEqual(AI_PLAYER_MODELS.map((model) => model.id));
    expect(left.deckSummaries).toHaveLength(1);
    expect(left.ladderPairings).toHaveLength(AI_PLAYER_MODELS.length - 1);
    expect(left.skillSummaries.find((summary) => summary.modelId === "beginner")?.games).toBeGreaterThan(0);
  });

  it("creates actionable insights for unhealthy deck summaries", () => {
    const insights = createAiLabInsights({
      deckSummaries: [makeDeckSummary()],
      ladderPairings: [],
    });

    expect(insights[0]).toMatchObject({
      severity: "problem",
      id: "deck-starter10-problem",
    });
  });
});
