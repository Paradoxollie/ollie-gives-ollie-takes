import { summarizeBoardControl } from "@/core";
import type {
  BattleResult,
  ChampionState,
  ControlTotals,
  LastMoveSummary,
  MatchOutcome,
  MatchState,
  PlayerId,
} from "@/core/types";

export interface BattleResolutionRecap {
  id: string;
  phase: "round" | "battle";
  resolvedBy: PlayerId | null;
  roundNumber: number;
  control: ControlTotals | null;
  controlDifference: number | null;
  boardOccupancy: number | null;
  damageApplied: Record<PlayerId, number>;
  championsBefore: Record<PlayerId, ChampionState>;
  championsAfter: Record<PlayerId, ChampionState>;
  roundWinner: MatchOutcome | null;
  result: BattleResult | null;
}

function cloneChampion(champion: ChampionState): ChampionState {
  return {
    health: champion.health,
    maxHealth: champion.maxHealth,
  };
}

function cloneChampions(champions: Record<PlayerId, ChampionState>): Record<PlayerId, ChampionState> {
  return {
    player: cloneChampion(champions.player),
    enemy: cloneChampion(champions.enemy),
  };
}

function createDamageRecord(player = 0, enemy = 0): Record<PlayerId, number> {
  return {
    player,
    enemy,
  };
}

function deriveChampionsBeforeDamage(
  championsAfter: Record<PlayerId, ChampionState>,
  damageApplied: Record<PlayerId, number>,
): Record<PlayerId, ChampionState> {
  return {
    player: {
      health: championsAfter.player.health + damageApplied.player,
      maxHealth: championsAfter.player.maxHealth,
    },
    enemy: {
      health: championsAfter.enemy.health + damageApplied.enemy,
      maxHealth: championsAfter.enemy.maxHealth,
    },
  };
}

function deriveDirectEffectDamage(lastMove: LastMoveSummary | null): Record<PlayerId, number> {
  const damage = createDamageRecord();
  if (!lastMove) {
    return damage;
  }

  for (const event of lastMove.effectEvents) {
    if (event.kind !== "deal-damage" || event.amount <= 0) {
      continue;
    }

    const target = event.playerId === "player" ? "enemy" : "player";
    damage[target] += event.amount;
  }

  return damage;
}

/**
 * Creates a UI recap payload whenever a round or a full battle resolves.
 */
export function createBattleResolutionRecap(match: MatchState): BattleResolutionRecap | null {
  const summary = match.lastMove?.roundEndSummary ?? null;
  if (!summary && !match.result) {
    return null;
  }

  const control = summary
    ? {
        player: summary.control.player,
        enemy: summary.control.enemy,
      }
    : match.lastMove
      ? {
          player: match.lastMove.controlAfterCombat.player,
          enemy: match.lastMove.controlAfterCombat.enemy,
        }
      : summarizeBoardControl(match.board);
  const boardOccupancy =
    summary?.boardOccupancy ??
    match.lastMove?.boardOccupancyAfterCombat ??
    (control ? control.player + control.enemy : null);
  const damageApplied = summary
    ? createDamageRecord(summary.damageApplied.player, summary.damageApplied.enemy)
    : deriveDirectEffectDamage(match.lastMove);
  const championsAfter = summary
    ? cloneChampions(summary.championsAfterDamage)
    : cloneChampions(match.result?.champions ?? match.champions);
  const championsBefore = deriveChampionsBeforeDamage(championsAfter, damageApplied);
  const phase = match.result ? "battle" : "round";
  const roundNumber = summary?.roundNumber ?? match.round.number;
  const roundWinner = summary?.roundWinner ?? match.result?.winner ?? null;
  const controlDifference = summary?.controlDifference ?? (control ? Math.abs(control.player - control.enemy) : null);
  const moveSignature = match.lastMove
    ? `${match.lastMove.playerId}:${match.lastMove.cardInstanceId}:${match.lastMove.position.row}-${match.lastMove.position.col}`
    : "no-move";
  const resultSignature = match.result ? `${match.result.reason}:${match.result.winner}` : "in-progress";

  return {
    id: `${phase}:${roundNumber}:${moveSignature}:${resultSignature}:${championsAfter.player.health}-${championsAfter.enemy.health}`,
    phase,
    resolvedBy: match.lastMove?.playerId ?? null,
    roundNumber,
    control,
    controlDifference,
    boardOccupancy,
    damageApplied,
    championsBefore,
    championsAfter,
    roundWinner,
    result: match.result
      ? {
          ...match.result,
          champions: cloneChampions(match.result.champions),
        }
      : null,
  };
}

/**
 * Returns true while a battle or round resolution still needs to be shown to the player.
 */
export function hasUndismissedBattleResolutionRecap(
  match: MatchState | null,
  dismissedRecapId: string | null,
): boolean {
  if (!match) {
    return false;
  }

  const recap = createBattleResolutionRecap(match);
  return Boolean(recap && recap.id !== dismissedRecapId);
}
