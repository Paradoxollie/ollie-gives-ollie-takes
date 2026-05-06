import { describe, expect, it } from "vitest";

import { summarizeSeries } from "@/core/sim/aggregate";
import type { SimulatedMatchResult } from "@/core/sim/types";

function makeResult(overrides: Partial<SimulatedMatchResult> = {}): SimulatedMatchResult {
  return {
    matchIndex: 0,
    deckPresetId: "starter10",
    matchup: ["random", "greedy"],
    boardSize: 3,
    botBySeat: { player: "random", enemy: "greedy" },
    startingPlayer: "player",
    winnerSeat: "enemy",
    winnerBotId: "greedy",
    reason: "champion-ko",
    endingSource: "round-end-control",
    turns: 18,
    rounds: 2,
    roundsCompleted: 2,
    totalFlips: 6,
    totalRoundEndControlDifference: 4,
    totalRoundEndDamage: 4,
    totalControlledCardsBySide: { player: 7, enemy: 11 },
    totalReshuffles: 1,
    totalRoundEndOccupancy: 18,
    averageRoundEndOccupancy: 9,
    deadTurns: 0,
    finalChampionHealth: { player: 10, enemy: 15 },
    finalHpDifference: 5,
    moveHistory: [
      {
        turn: 1,
        round: 1,
        roundTurn: 1,
        botId: "random",
        playerId: "player",
        row: 0,
        col: 0,
        flippedCount: 1,
        roundEnded: false,
        roundEndControl: { player: 0, enemy: 0 },
        roundEndDamage: { player: 0, enemy: 0 },
        lethal: false,
      },
      {
        turn: 2,
        round: 1,
        roundTurn: 2,
        botId: "greedy",
        playerId: "enemy",
        row: 2,
        col: 2,
        flippedCount: 2,
        roundEnded: true,
        roundEndControl: { player: 4, enemy: 5 },
        roundEndDamage: { player: 1, enemy: 0 },
        lethal: false,
      },
    ],
    matchSeed: 1,
    decisionSeed: 2,
    ...overrides,
  };
}

describe("summarizeSeries", () => {
  it("aggregates flip, control, round damage, and move heatmap metrics", () => {
    const summary = summarizeSeries([
      makeResult(),
      makeResult({
        matchIndex: 1,
        startingPlayer: "enemy",
        winnerSeat: "draw",
        winnerBotId: "draw",
        reason: "stalemate",
        endingSource: "stalemate",
        turns: 9,
        rounds: 1,
        roundsCompleted: 1,
        totalFlips: 3,
        totalRoundEndControlDifference: 0,
        totalRoundEndDamage: 0,
        totalControlledCardsBySide: { player: 4, enemy: 5 },
        totalReshuffles: 0,
        totalRoundEndOccupancy: 9,
        averageRoundEndOccupancy: 9,
        deadTurns: 2,
        finalChampionHealth: { player: 11, enemy: 11 },
        finalHpDifference: 0,
        moveHistory: [
          {
            turn: 1,
            round: 1,
            roundTurn: 1,
            botId: "greedy",
            playerId: "player",
            row: 1,
            col: 1,
            flippedCount: 0,
            roundEnded: false,
            roundEndControl: { player: 0, enemy: 0 },
            roundEndDamage: { player: 0, enemy: 0 },
            lethal: false,
          },
        ],
      }),
    ]);

    expect(summary.boardSize).toBe(3);
    expect(summary.totalGames).toBe(2);
    expect(summary.drawRate).toBe(0.5);
    expect(summary.averages.turns).toBe(13.5);
    expect(summary.averages.rounds).toBe(1.5);
    expect(summary.averages.flipsPerMatch).toBe(4.5);
    expect(summary.averages.flipsPerTurn).toBeCloseTo(9 / 27, 6);
    expect(summary.averages.roundEndControlDifference).toBeCloseTo(4 / 3, 6);
    expect(summary.averages.roundEndDamage).toBeCloseTo(4 / 3, 6);
    expect(summary.averages.controlledCardsPerRoundBySide).toEqual({
      player: 11 / 3,
      enemy: 16 / 3,
    });
    expect(summary.averages.finalHpDifference).toBe(2.5);
    expect(summary.startingPlayer.player.games).toBe(1);
    expect(summary.startingPlayer.enemy.games).toBe(1);
    expect(summary.resultReasons["champion-ko"]).toBe(1);
    expect(summary.resultReasons.stalemate).toBe(1);
    expect(summary.endingSources["round-end-control"]).toBe(1);
    expect(summary.endingSources.stalemate).toBe(1);
    expect(summary.moveDistribution.overall[0][0]).toBe(1);
    expect(summary.moveDistribution.overall[1][1]).toBe(1);
  });

  it("fails loudly on empty input", () => {
    expect(() => summarizeSeries([])).toThrowError("Cannot summarize an empty simulation result set.");
  });
});
