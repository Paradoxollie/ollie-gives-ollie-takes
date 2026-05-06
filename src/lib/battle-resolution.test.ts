import { describe, expect, it } from "vitest";

import { applyMove, createMatch, passTurn } from "@/core";
import type { MatchState, Position } from "@/core/types";
import { createBattleResolutionRecap, hasUndismissedBattleResolutionRecap } from "@/lib/battle-resolution";

function firstEmptyPosition(state: MatchState): Position {
  for (let row = 0; row < state.board.length; row += 1) {
    for (let col = 0; col < state.board[row].length; col += 1) {
      if (!state.board[row][col]) {
        return { row, col };
      }
    }
  }

  throw new Error("Expected at least one empty board cell.");
}

function advanceToRoundEnd(): MatchState {
  let state = createMatch({ deckPresetId: "starter10", seed: 12 });

  for (let turn = 0; turn < 30; turn += 1) {
    if (state.lastMove?.roundEndSummary) {
      return state;
    }

    const card = state.turn.choices[0] ?? null;
    state = card
      ? applyMove(state, {
          cardInstanceId: card.instanceId,
          position: firstEmptyPosition(state),
        })
      : passTurn(state);
  }

  throw new Error("Expected deterministic match to reach a round end.");
}

describe("battle resolution recap", () => {
  it("keeps a new-round state blocked until its round-end recap is dismissed", () => {
    const state = advanceToRoundEnd();
    const recap = createBattleResolutionRecap(state);

    expect(state.lastMove?.roundEndSummary).not.toBeNull();
    expect(state.turn.roundTurn).toBe(1);
    expect(recap?.phase).toBe("round");
    expect(hasUndismissedBattleResolutionRecap(state, null)).toBe(true);

    if (!recap) {
      throw new Error("Expected a round recap.");
    }

    expect(hasUndismissedBattleResolutionRecap(state, recap.id)).toBe(false);
  });
});
