import {
  getAdventureLocationsCleared,
  getAdventureNode,
  getAdventureNodeStatus,
  isCombatAdventureNode,
} from "@/core/adventure";
import { buildAdventureEnemyLoadout } from "@/core/adventure-enemy";
import { cloneCardEffects } from "@/core/card-effects";
import { countAdventureDeckByRarity, countAdventureDeckBySource, getCardArchetype } from "@/core/cards";
import { countCardCopiesByBaseId } from "@/core/deck-building";
import { getCardName, getCardSides, summarizeBoardControl } from "@/core/engine";
import { getLuckyCharmDefinition } from "@/core/config/luckyCharms";
import { getPlayerNextDrawPreview, listPlayerCharmActions } from "@/core/player-charms";
import { countBoardFamilies } from "@/core/traits";
import type {
  AdventureRunState,
  MatchState,
  SerializedAdventureRunState,
  SerializedMatchState,
} from "@/core/types";

/**
 * Converts the current match state into a compact, automation-friendly payload.
 */
export function serializeMatchState(state: MatchState): SerializedMatchState {
  return {
    mode: state.result ? "finished" : "playing",
    coordinateSystem: "Board coordinates are zero-indexed with row 0 at the top and col 0 at the left.",
    activePlayer: state.result ? null : state.turn.activePlayer,
    turn: state.turn.index,
    roundTurn: state.turn.roundTurn,
    availableMana: state.turn.availableMana,
    round: state.round.number,
    roundStarter: state.round.startingPlayer,
    roundCoinFace: state.round.coinFace,
    enemyProfile: state.enemyProfile
      ? {
          id: state.enemyProfile.id,
          tier: state.enemyProfile.tier,
          name: state.enemyProfile.name,
          playstyle: state.enemyProfile.playstyle,
          passivePowerName: state.enemyProfile.passivePowerName,
          passivePowerDescription: state.enemyProfile.passivePowerDescription,
          activePowerName: state.enemyProfile.activePowerName,
          activePowerDescription: state.enemyProfile.activePowerDescription,
        }
      : null,
    enemyPowerState: state.enemyPowerState ? { ...state.enemyPowerState } : null,
    playerCharms: state.playerCharms.map((charmId) => {
      const charm = getLuckyCharmDefinition(charmId);
      return {
        id: charm.id,
        rarity: charm.rarity,
        name: charm.name,
        shortLabel: charm.shortLabel,
        description: charm.description,
        drawback: charm.drawback,
      };
    }),
    playerCharmState: { ...state.playerCharmState },
    playerCharmActions: listPlayerCharmActions(state),
    nextDrawPreview: getPlayerNextDrawPreview(state).map((card) => ({
      name: getCardName(card),
      sides: getCardSides(card),
      manaCost: card.manaCost,
      family: card.family,
      rarity: card.rarity,
      sourceType: card.sourceType,
      effects: cloneCardEffects(card.effects),
    })),
    champions: {
      player: { ...state.champions.player },
      enemy: { ...state.champions.enemy },
    },
    combat: {
      player: { ...state.combat.player },
      enemy: { ...state.combat.enemy },
    },
    boardControl: summarizeBoardControl(state.board),
    boardFamilies: {
      player: countBoardFamilies(state.board, "player"),
      enemy: countBoardFamilies(state.board, "enemy"),
    },
    board: state.board.map((row) =>
      row.map((card) =>
        card
          ? {
              owner: card.owner,
              cardName: getCardName(card),
              sides: getCardSides(card),
              manaCost: card.manaCost,
              family: card.family,
              stackSize: card.stackSize ?? 1,
              stackManaCost: card.stackManaCost ?? card.manaCost,
              stackFamilies: { ...(card.stackFamilyCounts ?? { [card.family]: 1 }) },
              stack: (card.stack ?? [card]).map((stackCard) => ({
                instanceId: stackCard.instanceId,
                name: getCardName(stackCard),
                manaCost: stackCard.manaCost,
                family: stackCard.family,
                sides: getCardSides(stackCard),
              })),
              corruptedBy: card.corruptedBy ?? null,
              rarity: card.rarity,
              sourceType: card.sourceType,
              effects: cloneCardEffects(card.effects),
            }
          : null,
      ),
    ),
    hand:
      state.turn.activePlayer === "player"
        ? state.turn.choices.map((card) => ({
            instanceId: card.instanceId,
            name: getCardName(card),
            sides: getCardSides(card),
            manaCost: card.manaCost,
            family: card.family,
            rarity: card.rarity,
            sourceType: card.sourceType,
            effects: cloneCardEffects(card.effects),
          }))
        : [],
    piles: {
      player: {
        draw: state.players.player.drawPile.length,
        discard: state.players.player.discardPile.length,
        reshuffles: state.players.player.reshuffles,
      },
      enemy: {
        draw: state.players.enemy.drawPile.length,
        discard: state.players.enemy.discardPile.length,
        reshuffles: state.players.enemy.reshuffles,
      },
    },
    result: state.result
      ? {
          ...state.result,
          champions: {
            player: { ...state.result.champions.player },
            enemy: { ...state.result.champions.enemy },
          },
        }
      : null,
    lastMove: state.lastMove
      ? {
          ...state.lastMove,
          impacts: state.lastMove.impacts.map((impact) => ({ ...impact })),
          effectEvents: state.lastMove.effectEvents.map((event) => ({ ...event })),
          controlAfterCombat: {
            player: state.lastMove.controlAfterCombat.player,
            enemy: state.lastMove.controlAfterCombat.enemy,
          },
          championsAfterMove: {
            player: { ...state.lastMove.championsAfterMove.player },
            enemy: { ...state.lastMove.championsAfterMove.enemy },
          },
          roundEndSummary: state.lastMove.roundEndSummary
            ? {
                ...state.lastMove.roundEndSummary,
                control: {
                  player: state.lastMove.roundEndSummary.control.player,
                  enemy: state.lastMove.roundEndSummary.control.enemy,
                },
                damageApplied: {
                  player: state.lastMove.roundEndSummary.damageApplied.player,
                  enemy: state.lastMove.roundEndSummary.damageApplied.enemy,
                },
                championsAfterDamage: {
                  player: { ...state.lastMove.roundEndSummary.championsAfterDamage.player },
                  enemy: { ...state.lastMove.roundEndSummary.championsAfterDamage.enemy },
                },
              }
            : null,
        }
      : null,
  };
}

/**
 * Converts the current adventure run plus the optional live battle into a compact map payload.
 */
export function serializeAdventureState(
  run: AdventureRunState,
  battle: MatchState | null = null,
): SerializedAdventureRunState {
  const currentNode = run.activeNodeId ? getAdventureNode(run, run.activeNodeId) : null;
  const includeBattle = run.encounter && isCombatAdventureNode(run.encounter.kind) ? battle : null;
  const enemyPlan = currentNode && run.encounter && isCombatAdventureNode(run.encounter.kind)
    ? buildAdventureEnemyLoadout(run, currentNode)
    : null;
  const deckByRarity = countAdventureDeckByRarity(run.deck);
  const deckBySource = countAdventureDeckBySource(run.deck);
  const deckCopyCounts = countCardCopiesByBaseId(run.deck.cards.map((entry) => entry.card));
  const deckCopyRepresentatives = new Map(
    run.deck.cards.map((entry) => [entry.card.baseArchetypeId ?? entry.card.id, entry.card] as const),
  );

  return {
    mode: run.phase,
    seed: run.seed,
    outcome: run.outcome,
    selectedFamily: run.selectedFamily,
    locationsCleared: getAdventureLocationsCleared(run),
    totalLocationsBeforeBoss: run.config.depthCount,
    activeNodeId: run.activeNodeId,
    availableNodeIds: [...run.availableNodeIds],
    currentNode: currentNode
      ? {
          id: currentNode.id,
          kind: currentNode.kind,
          title: currentNode.title,
          description: currentNode.description,
        }
      : null,
    map: {
      depthCount: run.map.depthCount,
      laneCount: run.map.laneCount,
      bossNodeId: run.map.bossNodeId,
      nodes: run.map.nodes.map((node) => ({
        id: node.id,
        depth: node.depth,
        lane: node.lane,
        kind: node.kind,
        title: node.title,
        description: node.description,
        nextNodeIds: [...node.nextNodeIds],
        status: getAdventureNodeStatus(run, node.id),
      })),
    },
    deck: {
      size: run.deck.cards.length,
      draftCount: deckBySource.draft,
      specialCount:
        deckBySource.reward +
        deckBySource.treasure +
        deckBySource.upgrade +
        deckBySource.fusion +
        deckBySource["enemy-upgrade"] +
        deckBySource.charm,
      copyCounts: Object.entries(deckCopyCounts)
        .map(([archetypeId, count]) => {
          const card = deckCopyRepresentatives.get(archetypeId) ?? getCardArchetype(archetypeId);
          return {
            archetypeId,
            name: card.name,
            count,
            family: card.family,
            role: card.role ?? null,
          };
        })
        .sort((left, right) => {
          if (left.family !== right.family) {
            return left.family.localeCompare(right.family);
          }

          return left.name.localeCompare(right.name);
        }),
      byRarity: deckByRarity,
      offeredByRarity: {
        common: run.rewardProgress.offeredByRarity.common,
        uncommon: run.rewardProgress.offeredByRarity.uncommon,
        rare: run.rewardProgress.offeredByRarity.rare,
      },
      claimedByRarity: {
        common: run.rewardProgress.claimedByRarity.common,
        uncommon: run.rewardProgress.claimedByRarity.uncommon,
        rare: run.rewardProgress.claimedByRarity.rare,
      },
    },
    draft: run.draft
      ? {
          pickCount: run.draft.pickCount,
          selectedCardIds: [...run.draft.selectedCardIds],
          offer: run.draft.offerCardIds.map((cardId) => {
            const card = getCardArchetype(cardId);
            return {
              archetypeId: card.id,
              name: card.name,
              family: card.family,
              rarity: card.rarity,
              sides: { ...card.sides },
              manaCost: card.manaCost,
              effects: cloneCardEffects(card.effects),
            };
          }),
        }
      : null,
    charms: run.charms.map((charmId) => {
      const charm = getLuckyCharmDefinition(charmId);
      return {
        id: charm.id,
        rarity: charm.rarity,
        name: charm.name,
        shortLabel: charm.shortLabel,
        description: charm.description,
        drawback: charm.drawback,
      };
    }),
    encounter: run.encounter
      ? {
          nodeId: run.encounter.nodeId,
          kind: run.encounter.kind,
          status: run.encounter.status,
          battle: includeBattle ? serializeMatchState(includeBattle) : null,
          enemyPlan: enemyPlan
            ? {
                profile: {
                  id: enemyPlan.profile.id,
                  tier: enemyPlan.profile.tier,
                  name: enemyPlan.profile.name,
                  playstyle: enemyPlan.profile.playstyle,
                  passivePowerName: enemyPlan.profile.passivePowerName,
                  passivePowerDescription: enemyPlan.profile.passivePowerDescription,
                  activePowerName: enemyPlan.profile.activePowerName,
                  activePowerDescription: enemyPlan.profile.activePowerDescription,
                },
                botId: enemyPlan.botId,
                deckSize: enemyPlan.cardIds.length,
                replacements: enemyPlan.replacements,
                additions: enemyPlan.additions,
                searchDepth: enemyPlan.searchDepth,
                rarityCounts: {
                  common: enemyPlan.rarityCounts.common,
                  uncommon: enemyPlan.rarityCounts.uncommon,
                  rare: enemyPlan.rarityCounts.rare,
                },
                mainFamily: enemyPlan.mainFamily,
                splashFamilies: [...enemyPlan.splashFamilies],
                deckPlan: enemyPlan.deckPlan,
                preferredBoardShapes: [...enemyPlan.preferredBoardShapes],
                keyPayoffCardIds: [...enemyPlan.keyPayoffCardIds],
                counterplayHint: enemyPlan.counterplayHint,
              }
            : null,
        }
      : null,
    rewardOffer: run.rewardOffer
      ? {
          sourceNodeId: run.rewardOffer.sourceNodeId,
          sourceNodeKind: run.rewardOffer.sourceNodeKind,
          options: run.rewardOffer.options.map((option) => {
            const card = option.card ?? getCardArchetype(option.archetypeId);
            return {
              rewardId: option.rewardId,
              archetypeId: option.archetypeId,
              name: card.name,
              rarity: option.rarity,
              sides: { ...card.sides },
              manaCost: card.manaCost,
              effects: cloneCardEffects(card.effects),
              reason: option.reason ?? null,
              rewardType: option.rewardType ?? null,
              alreadyOwnedCount: option.alreadyOwnedCount ?? 0,
              sourceDeckCount: option.sourceDeckCount ?? 0,
            };
          }),
        }
      : null,
    charmOffer: run.charmOffer
      ? {
          source: run.charmOffer.source,
          sourceNodeId: run.charmOffer.sourceNodeId,
          title: run.charmOffer.title,
          subtitle: run.charmOffer.subtitle,
          canSkip: run.charmOffer.canSkip,
          options: run.charmOffer.options.map((option) => ({
            charmId: option.charmId,
          })),
        }
      : null,
    siteState: run.siteState
      ? run.siteState.kind === "camp"
        ? {
            kind: "camp",
            sourceNodeId: run.siteState.sourceNodeId,
            selectedMode: run.siteState.selectedMode,
            origin: run.siteState.origin,
          }
        : run.siteState.kind === "forge"
          ? {
              kind: "forge",
              sourceNodeId: run.siteState.sourceNodeId,
              selectedCardIds: [...run.siteState.selectedCardIds],
              preview: run.siteState.previewCard
                ? {
                    sides: { ...run.siteState.previewCard.sides },
                    manaCost: run.siteState.previewCard.manaCost,
                    rarity: run.siteState.previewCard.rarity,
                    effects: cloneCardEffects(run.siteState.previewCard.effects),
                  }
                : null,
            }
          : {
              kind: "treasure",
              sourceNodeId: run.siteState.sourceNodeId,
              grantedCard: {
                rarity: run.siteState.grantedCard.card.rarity,
                sides: { ...run.siteState.grantedCard.card.sides },
                manaCost: run.siteState.grantedCard.card.manaCost,
                sourceType: run.siteState.grantedCard.card.sourceType,
                effects: cloneCardEffects(run.siteState.grantedCard.card.effects),
              },
            }
      : null,
  };
}
