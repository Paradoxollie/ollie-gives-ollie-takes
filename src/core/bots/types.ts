import type { MatchState, MoveInput, PlayerId } from "@/core/types";

export const BOT_IDS = ["random", "greedy", "heuristic", "trained", "champion"] as const;

export type BotId = (typeof BOT_IDS)[number];

export interface BotContext {
  playerId: PlayerId;
  seed: number;
  searchDepth?: number;
  beamWidth?: number;
}

export interface BotDecision {
  move: MoveInput | null;
  nextSeed: number;
}

export interface Bot {
  id: BotId;
  label: string;
  description: string;
  chooseMove: (state: MatchState, context: BotContext) => BotDecision;
}
