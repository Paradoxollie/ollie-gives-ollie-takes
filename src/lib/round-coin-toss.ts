import type { MatchState, PlayerId, RoundCoinFace } from "@/core/types";

export interface RoundCoinTossRecap {
  id: string;
  roundNumber: number;
  startingPlayer: PlayerId;
  coinFace: RoundCoinFace;
}

/**
 * Builds the round-opening coin toss payload from the deterministic match state.
 */
export function createRoundCoinTossRecap(match: MatchState): RoundCoinTossRecap | null {
  if (match.result || match.turn.roundTurn !== 1) {
    return null;
  }

  return {
    id: `round-start:${match.round.number}:${match.round.startingPlayer}:${match.round.coinFace}`,
    roundNumber: match.round.number,
    startingPlayer: match.round.startingPlayer,
    coinFace: match.round.coinFace,
  };
}
