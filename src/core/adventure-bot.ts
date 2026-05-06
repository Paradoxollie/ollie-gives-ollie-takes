import { getAdventureCharmOptions, getAdventureNode, getAdventureRewardOptions, listAvailableAdventureNodes } from "@/core/adventure";
import { getLuckyCharmDefinition } from "@/core/config/luckyCharms";
import { buildAdventureEnemyLoadout } from "@/core/adventure-enemy";
import { getCardArchetype, getCardStrength } from "@/core/cards";
import {
  analyzeAdventureDeck,
  analyzeAdventureDeckBuildProfile,
  analyzeDeck,
  getCardBalanceScore,
  getCardCornerValue,
  getCardEdgeValue,
  getCardFusionValue,
  getCardSpikeValue,
} from "@/core/deck-analysis";
import type {
  AdventureDeckCard,
  AdventureCharmOfferOption,
  AdventureNode,
  AdventureRewardOption,
  AdventureRunState,
  CardFamily,
  TrainedBotWeights,
} from "@/core/types";

const DEFAULT_ADVENTURE_WEIGHTS = {
  specialCardValue: 6,
  deckTrimValue: 3,
  eliteRouteBias: 2,
  restRouteBias: 2,
  forgeRouteBias: 2,
  treasureRouteBias: 2,
  branchingRouteBias: 1,
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
} satisfies Pick<
  TrainedBotWeights,
  | "specialCardValue"
  | "deckTrimValue"
  | "eliteRouteBias"
  | "restRouteBias"
  | "forgeRouteBias"
  | "treasureRouteBias"
  | "branchingRouteBias"
  | "riskTolerance"
  | "aggressionPlanBias"
  | "controlPlanBias"
  | "tempoPlanBias"
  | "fusionPlanBias"
  | "precisionPlanBias"
  | "uncommonCardBias"
  | "rareCardBias"
  | "charmSynergyBias"
  | "duplicateCardPenalty"
  | "enemyProfileRespect"
>;

function resolveAdventureWeight<Key extends keyof typeof DEFAULT_ADVENTURE_WEIGHTS>(
  weights: TrainedBotWeights | null | undefined,
  key: Key,
): number {
  return weights?.[key] ?? DEFAULT_ADVENTURE_WEIGHTS[key];
}

interface BuildIntentProfile {
  aggression: number;
  control: number;
  tempo: number;
  fusion: number;
  precision: number;
}

function createBuildIntentProfile(run: AdventureRunState, weights?: TrainedBotWeights | null): BuildIntentProfile {
  const ownedCharmBiases = run.charms
    .map((charmId) => getLuckyCharmDefinition(charmId).biases)
    .reduce(
      (sum, biases) => ({
        aggression: sum.aggression + biases.aggression,
        control: sum.control + biases.control,
        tempo: sum.tempo + biases.tempo,
        fusion: sum.fusion + biases.fusion,
        precision: sum.precision + biases.precision,
      }),
      {
        aggression: 0,
        control: 0,
        tempo: 0,
        fusion: 0,
        precision: 0,
      },
    );

  return {
    aggression: resolveAdventureWeight(weights, "aggressionPlanBias") + ownedCharmBiases.aggression * 0.9,
    control: resolveAdventureWeight(weights, "controlPlanBias") + ownedCharmBiases.control * 0.9,
    tempo: resolveAdventureWeight(weights, "tempoPlanBias") + ownedCharmBiases.tempo * 0.9,
    fusion: resolveAdventureWeight(weights, "fusionPlanBias") + ownedCharmBiases.fusion * 0.95,
    precision: resolveAdventureWeight(weights, "precisionPlanBias") + ownedCharmBiases.precision * 0.95,
  };
}

function scoreIntentAlignment(
  intent: BuildIntentProfile,
  option: BuildIntentProfile,
): number {
  return (
    intent.aggression * option.aggression +
    intent.control * option.control +
    intent.tempo * option.tempo +
    intent.fusion * option.fusion +
    intent.precision * option.precision
  );
}

function cardBuildIntent(card: AdventureDeckCard["card"]): BuildIntentProfile {
  return {
    aggression: getCardSpikeValue(card) * 0.9 + getCardStrength(card) * 0.18,
    control: getCardCornerValue(card) * 0.48 + getCardEdgeValue(card) * 0.42 + getCardBalanceScore(card) * 0.12,
    tempo: getCardBalanceScore(card) * 0.36 + Math.min(...Object.values(card.sides)) * 0.85,
    fusion: getCardFusionValue(card) * 0.16,
    precision: getCardBalanceScore(card) * 0.42 + Math.min(...Object.values(card.sides)) * 0.65,
  };
}

function countDuplicateBaseIds(run: AdventureRunState, baseArchetypeId: string | null): number {
  if (!baseArchetypeId) {
    return 0;
  }

  return run.deck.cards.filter((entry) => (entry.card.baseArchetypeId ?? entry.card.id) === baseArchetypeId).length;
}

function rarityBonus(option: { rarity: AdventureRewardOption["rarity"] }, weights?: TrainedBotWeights | null): number {
  const specialCardValue = resolveAdventureWeight(weights, "specialCardValue");
  return option.rarity === "rare" ? specialCardValue * 3.4 : option.rarity === "uncommon" ? specialCardValue * 1.8 : 0;
}

function scoreDeckFit(card: AdventureDeckCard["card"], run: AdventureRunState, weights?: TrainedBotWeights | null): number {
  const currentDeck = analyzeAdventureDeck(run.deck.cards);
  const currentBuild = analyzeAdventureDeckBuildProfile(run.deck.cards);
  const nextDeck = analyzeDeck([...run.deck.cards.map((entry) => entry.card), card]);
  const specialCardValue = resolveAdventureWeight(weights, "specialCardValue");
  const intent = createBuildIntentProfile(run, weights);
  const duplicatePenalty =
    Math.max(0, countDuplicateBaseIds(run, card.baseArchetypeId ?? card.id) - 1) *
    resolveAdventureWeight(weights, "duplicateCardPenalty");
  const rarityBias =
    card.rarity === "rare"
      ? resolveAdventureWeight(weights, "rareCardBias")
      : card.rarity === "uncommon"
        ? resolveAdventureWeight(weights, "uncommonCardBias")
        : 0;
  const trimPressureRelief = Math.max(0, currentBuild.trimPressure - analyzeAdventureDeckBuildProfile([
    ...run.deck.cards,
    { deckCardId: "virtual", card },
  ]).trimPressure);

  return (
    (nextDeck.weakestDirectionValue - currentDeck.weakestDirectionValue) * 1.35 +
    (nextDeck.fusionPotential - currentDeck.fusionPotential) * 0.15 +
    (nextDeck.averageCornerValue - currentDeck.averageCornerValue) * 0.45 +
    (nextDeck.averageEdgeValue - currentDeck.averageEdgeValue) * 0.3 +
    getCardBalanceScore(card) * 0.4 +
    getCardSpikeValue(card) * 0.55 +
    getCardFusionValue(card) * 0.35 +
    specialCardValue * 0.18 +
    scoreIntentAlignment(intent, cardBuildIntent(card)) * 0.05 +
    rarityBias * 1.1 +
    trimPressureRelief * resolveAdventureWeight(weights, "deckTrimValue") * 0.22 -
    duplicatePenalty
  );
}

function scoreDeckCard(card: AdventureDeckCard, weights?: TrainedBotWeights | null): number {
  const totalSides = getCardStrength(card.card);
  const specialCardValue = resolveAdventureWeight(weights, "specialCardValue");
  const rarityBias =
    card.card.rarity === "rare"
      ? resolveAdventureWeight(weights, "rareCardBias")
      : card.card.rarity === "uncommon"
        ? resolveAdventureWeight(weights, "uncommonCardBias")
        : 0;
  const rarityScore = card.card.rarity === "rare" ? specialCardValue * 2.4 : card.card.rarity === "uncommon" ? specialCardValue * 1.2 : 0;
  const sourceScore =
    card.card.sourceType === "fusion"
      ? specialCardValue * 1.9
      : card.card.sourceType === "upgrade"
        ? specialCardValue * 1.25
      : card.card.sourceType === "treasure"
          ? specialCardValue
          : card.card.sourceType === "reward"
            ? specialCardValue * 0.75
            : 0;

  return (
    totalSides +
    rarityScore +
    rarityBias * 1.2 +
    sourceScore +
    getCardBalanceScore(card.card) * 0.35 +
    getCardCornerValue(card.card) * 0.25 +
    getCardEdgeValue(card.card) * 0.2
  );
}

function countWeakDraftCards(run: AdventureRunState): number {
  return run.deck.cards.filter((entry) => entry.card.sourceType === "draft" && getCardStrength(entry.card) <= 11).length;
}

function countSpecialCards(run: AdventureRunState): number {
  return run.deck.cards.filter((entry) => entry.card.sourceType !== "draft").length;
}

function deckBloat(run: AdventureRunState): number {
  return Math.max(0, run.deck.cards.length - 14);
}

function enemyCounterProfile(profileId: string): BuildIntentProfile {
  switch (profileId) {
    case "aggro":
    case "executioner":
    case "ravager":
      return { aggression: -0.35, control: 1.2, tempo: 0.35, fusion: 0.15, precision: 1.1 };
    case "fortress":
    case "bastion":
    case "warden":
      return { aggression: 1.1, control: 0.2, tempo: 0.2, fusion: 0.8, precision: 0.4 };
    case "swarm":
      return { aggression: 0.25, control: 0.55, tempo: 1, fusion: 0.25, precision: 0.8 };
    case "trickster":
      return { aggression: 0.35, control: 0.95, tempo: 0.45, fusion: 0.25, precision: 1.05 };
    case "builder":
    case "shaper":
      return { aggression: 1.15, control: 0.35, tempo: 0.55, fusion: 0.7, precision: 0.55 };
    default:
      return { aggression: 0.45, control: 0.45, tempo: 0.45, fusion: 0.45, precision: 0.45 };
  }
}

function scoreEnemyMatchup(run: AdventureRunState, profileId: string, weights?: TrainedBotWeights | null): number {
  const build = analyzeAdventureDeckBuildProfile(run.deck.cards);
  const intent = createBuildIntentProfile(run, weights);
  return scoreIntentAlignment(
    {
      aggression: build.aggression * 0.08 + intent.aggression,
      control: build.control * 0.08 + intent.control,
      tempo: build.tempo * 0.08 + intent.tempo,
      fusion: build.fusion * 0.08 + intent.fusion,
      precision: build.precision * 0.08 + intent.precision,
    },
    enemyCounterProfile(profileId),
  );
}

function scoreEncounterThreat(run: AdventureRunState, node: AdventureNode, weights?: TrainedBotWeights | null): number {
  if (node.kind !== "combat" && node.kind !== "elite" && node.kind !== "boss") {
    return 0;
  }

  const loadout = buildAdventureEnemyLoadout(run, node);
  const playerDeck = analyzeAdventureDeck(run.deck.cards);
  const enemyDeck = analyzeDeck(loadout.cards);
  const rarityPressure = loadout.rarityCounts.uncommon * 1.7 + loadout.rarityCounts.rare * 3.6;
  const searchPressure = loadout.searchDepth * 2.8 + Math.max(0, 12 - loadout.beamWidth) * 0.12;
  const profilePressure =
    loadout.profile.biases.aggression * 1.3 +
    loadout.profile.biases.trick * 1.1 +
    loadout.profile.biases.fusion * 0.95 +
    loadout.profile.biases.corner * 0.55 +
    loadout.profile.biases.edge * 0.4;
  const deckGapPressure =
    Math.max(0, enemyDeck.averageStrength - playerDeck.averageStrength) * 2.4 +
    Math.max(0, enemyDeck.weakestDirectionValue - playerDeck.weakestDirectionValue) * 1.4;
  const tierPressure = node.kind === "boss" ? 18 : node.kind === "elite" ? 7 : 0;
  const matchupRelief =
    scoreEnemyMatchup(run, loadout.profile.id, weights) *
    (0.12 + resolveAdventureWeight(weights, "enemyProfileRespect") * 0.014);

  return rarityPressure + searchPressure + profilePressure + deckGapPressure + tierPressure - matchupRelief;
}

function scoreNodeKind(run: AdventureRunState, node: AdventureNode, weights?: TrainedBotWeights | null): number {
  const deckTrimValue = resolveAdventureWeight(weights, "deckTrimValue");
  const eliteRouteBias = resolveAdventureWeight(weights, "eliteRouteBias");
  const restRouteBias = resolveAdventureWeight(weights, "restRouteBias");
  const forgeRouteBias = resolveAdventureWeight(weights, "forgeRouteBias");
  const treasureRouteBias = resolveAdventureWeight(weights, "treasureRouteBias");
  const riskTolerance = resolveAdventureWeight(weights, "riskTolerance");
  const weakDraftCount = countWeakDraftCards(run);
  const specialCount = countSpecialCards(run);
  const clearedLocations = run.history.length;
  const extraCards = deckBloat(run);
  const deckSummary = analyzeAdventureDeck(run.deck.cards);
  const buildProfile = analyzeAdventureDeckBuildProfile(run.deck.cards);
  const intent = createBuildIntentProfile(run, weights);
  const encounterThreat = scoreEncounterThreat(run, node, weights);
  const threatPenaltyScale = Math.max(0.38, 1 - riskTolerance * 0.08);

  switch (node.kind) {
    case "boss":
      return 10_000;
    case "elite":
      return (
        23 +
        eliteRouteBias * 2.8 +
        specialCount * 1.1 +
        clearedLocations * 0.75 +
        riskTolerance * 0.7 +
        deckSummary.averageStrength * 0.18 +
        deckSummary.weakestDirectionValue * 0.75 -
        encounterThreat * threatPenaltyScale * 0.92
      );
    case "combat": {
      const rewardNeed =
        Math.max(0, 3 - specialCount) * 1.9 +
        Math.max(0, 7 - deckSummary.weakestDirectionValue) * 0.55;
      return (
        25 +
        rewardNeed +
        specialCount * 0.4 +
        clearedLocations * 0.3 +
        deckSummary.averageBalance * 0.12 -
        encounterThreat * threatPenaltyScale * 0.44
      );
    }
    case "chest":
      return (
        20 +
        treasureRouteBias * 3 +
        Math.max(0, 3 - run.charms.length) * 2.2 +
        specialCount * 0.3 +
        riskTolerance * 0.15 +
        deckSummary.weakestDirectionValue * 0.45 +
        scoreIntentAlignment(intent, {
          aggression: 0.18,
          control: 0.18,
          tempo: 0.22,
          fusion: 0.22,
          precision: 0.18,
        }) *
          0.03
      );
    case "rest":
      return (
        14 +
        restRouteBias * 2.5 +
        weakDraftCount * 1.75 +
        extraCards * (0.7 + deckTrimValue * 0.08) +
        Math.max(0, 12 - deckSummary.averageStrength) * 0.4 +
        buildProfile.trimPressure * 0.38 +
        intent.precision * 0.08
      );
    case "shop":
      return (
        15 +
        forgeRouteBias * 2.35 +
        weakDraftCount * 1.15 +
        extraCards * (0.8 + deckTrimValue * 0.06) +
        deckSummary.fusionPotential * 0.12 +
        intent.fusion * 0.16
      );
  }
}

function scoreFutureBranching(run: AdventureRunState, node: AdventureNode, weights?: TrainedBotWeights | null): number {
  const branchingRouteBias = resolveAdventureWeight(weights, "branchingRouteBias");
  return node.nextNodeIds.reduce((sum, nextNodeId) => sum + getAdventureNode(run, nextNodeId).nextNodeIds.length, 0) * branchingRouteBias;
}

function scoreLaneCentrality(run: AdventureRunState, node: AdventureNode): number {
  const centerLane = (run.map.laneCount - 1) / 2;
  return run.map.laneCount - Math.abs(node.lane - centerLane);
}

function compareNodes(
  run: AdventureRunState,
  left: AdventureNode,
  right: AdventureNode,
  weights?: TrainedBotWeights | null,
): number {
  const scoreDiff =
    scoreNodeKind(run, right, weights) +
      scoreFutureBranching(run, right, weights) * 0.55 +
      scoreLaneCentrality(run, right) * 0.12 -
    (scoreNodeKind(run, left, weights) +
      scoreFutureBranching(run, left, weights) * 0.55 +
      scoreLaneCentrality(run, left) * 0.12);

  if (scoreDiff !== 0) {
    return scoreDiff;
  }

  if (left.depth !== right.depth) {
    return left.depth - right.depth;
  }

  if (left.lane !== right.lane) {
    return left.lane - right.lane;
  }

  return left.id.localeCompare(right.id);
}

function familyDraftCount(cardIds: string[], family: CardFamily): number {
  return cardIds.filter((cardId) => getCardArchetype(cardId).family === family).length;
}

function scoreDraftCard(cardId: string, pickedCardIds: string[], weights?: TrainedBotWeights | null): number {
  const card = getCardArchetype(cardId);
  const rarityScore = card.rarity === "rare" ? 8 : card.rarity === "uncommon" ? 4 : 0;
  const familyCount = familyDraftCount(pickedCardIds, card.family);
  const familyScore = familyCount === 0 ? 2.8 : familyCount === 1 ? 1.2 : familyCount === 2 ? 0.25 : -1.4;
  const intent = {
    aggression: resolveAdventureWeight(weights, "aggressionPlanBias"),
    control: resolveAdventureWeight(weights, "controlPlanBias"),
    tempo: resolveAdventureWeight(weights, "tempoPlanBias"),
    fusion: resolveAdventureWeight(weights, "fusionPlanBias"),
    precision: resolveAdventureWeight(weights, "precisionPlanBias"),
  };
  const intentScore = scoreIntentAlignment(intent, cardBuildIntent(card)) * 0.02;

  return getCardStrength(card) + rarityScore + familyScore + intentScore;
}

export function chooseAdventureDraftCardsForBot(
  run: AdventureRunState,
  weights?: TrainedBotWeights | null,
): string[] {
  if (run.phase !== "draft" || !run.draft) {
    return [];
  }

  const picked: string[] = [];
  const remaining = [...run.draft.offerCardIds];

  while (picked.length < run.draft.pickCount && remaining.length > 0) {
    const nextCardId = [...remaining].sort((left, right) => {
      const scoreDiff = scoreDraftCard(right, picked, weights) - scoreDraftCard(left, picked, weights);
      if (scoreDiff !== 0) {
        return scoreDiff;
      }

      return left.localeCompare(right);
    })[0];

    if (!nextCardId) {
      break;
    }

    picked.push(nextCardId);
    remaining.splice(remaining.indexOf(nextCardId), 1);
  }

  return picked;
}

function scoreReward(option: AdventureRewardOption, weights?: TrainedBotWeights | null): number {
  const archetype = getCardArchetype(option.archetypeId);
  const rarityBias =
    option.rarity === "rare"
      ? resolveAdventureWeight(weights, "rareCardBias") * 1.2
      : option.rarity === "uncommon"
        ? resolveAdventureWeight(weights, "uncommonCardBias")
        : 0;
  return getCardStrength(archetype) + rarityBonus(option, weights) + rarityBias;
}

function scoreOwnedCharmSynergy(run: AdventureRunState, charmId: AdventureCharmOfferOption["charmId"]): number {
  return run.charms.includes(charmId) ? -10_000 : 0;
}

function scoreCharmOption(
  run: AdventureRunState,
  option: AdventureCharmOfferOption,
  weights?: TrainedBotWeights | null,
): number {
  const charm = getLuckyCharmDefinition(option.charmId);
  const deckSummary = analyzeAdventureDeck(run.deck.cards);
  const weakDraftCount = countWeakDraftCards(run);
  const specialCount = countSpecialCards(run);
  const deckTrimValue = resolveAdventureWeight(weights, "deckTrimValue");
  const specialCardValue = resolveAdventureWeight(weights, "specialCardValue");
  const intent = createBuildIntentProfile(run, weights);
  const synergyScore = scoreIntentAlignment(intent, {
    aggression: charm.biases.aggression,
    control: charm.biases.control,
    tempo: charm.biases.tempo,
    fusion: charm.biases.fusion,
    precision: charm.biases.precision,
  });

  return (
    scoreOwnedCharmSynergy(run, option.charmId) +
    (charm.rarity === "legendary" ? specialCardValue * 4.2 : charm.rarity === "rare" ? specialCardValue * 2.35 : specialCardValue * 0.9) +
    synergyScore * (0.22 + resolveAdventureWeight(weights, "charmSynergyBias") * 0.03) +
    charm.biases.aggression * (deckSummary.averageSpikeValue * 0.55 + deckSummary.averageStrength * 0.08) +
    charm.biases.control * (deckSummary.averageCornerValue * 0.6 + deckSummary.averageEdgeValue * 0.55) +
    charm.biases.tempo * (Math.max(0, 7 - deckSummary.weakestDirectionValue) * 0.8 + specialCount * 0.35) +
    charm.biases.fusion * (deckSummary.fusionPotential * 0.11 + resolveAdventureWeight(weights, "forgeRouteBias") * 2) +
    charm.biases.trim * (weakDraftCount * 1.5 + deckBloat(run) * 1.3 + deckTrimValue * 0.95) +
    charm.biases.precision * (deckSummary.averageBalance * 0.45 + deckSummary.weakestDirectionValue * 0.55)
  );
}

function compareCardScore(left: AdventureDeckCard, right: AdventureDeckCard, weights?: TrainedBotWeights | null): number {
  const scoreDiff = scoreDeckCard(right, weights) - scoreDeckCard(left, weights);
  if (scoreDiff !== 0) {
    return scoreDiff;
  }

  return left.deckCardId.localeCompare(right.deckCardId);
}

function compareRemovalScore(left: AdventureDeckCard, right: AdventureDeckCard, weights?: TrainedBotWeights | null): number {
  const deckTrimValue = resolveAdventureWeight(weights, "deckTrimValue");
  const duplicatePenalty = resolveAdventureWeight(weights, "duplicateCardPenalty");
  const leftPenalty =
    scoreDeckCard(left, weights) +
    (left.card.sourceType === "draft" ? -4 - deckTrimValue : 6) -
    getCardFusionValue(left.card) * 0.22 +
    (left.card.baseArchetypeId ? duplicatePenalty : 0);
  const rightPenalty =
    scoreDeckCard(right, weights) +
    (right.card.sourceType === "draft" ? -4 - deckTrimValue : 6) -
    getCardFusionValue(right.card) * 0.22 +
    (right.card.baseArchetypeId ? duplicatePenalty : 0);
  if (leftPenalty !== rightPenalty) {
    return leftPenalty - rightPenalty;
  }

  return left.deckCardId.localeCompare(right.deckCardId);
}

function scoreFusionPair(left: AdventureDeckCard, right: AdventureDeckCard, weights?: TrainedBotWeights | null): number {
  const specialCardValue = resolveAdventureWeight(weights, "specialCardValue");
  const forgeRouteBias = resolveAdventureWeight(weights, "forgeRouteBias");
  const leftSides = Object.values(left.card.sides).sort((a, b) => b - a);
  const rightSides = Object.values(right.card.sides).sort((a, b) => b - a);
  const fusedStrength = leftSides[0] + leftSides[1] + rightSides[0] + rightSides[1];
  const consumeBonus =
    (left.card.sourceType === "draft" ? 3 : -1) +
    (right.card.sourceType === "draft" ? 3 : -1) +
    (left.card.rarity === "common" ? 2 : 0) +
    (right.card.rarity === "common" ? 2 : 0);
  const fusionIntent = {
    aggression: getCardSpikeValue(left.card) * 0.3 + getCardSpikeValue(right.card) * 0.3,
    control: getCardCornerValue(left.card) * 0.14 + getCardEdgeValue(right.card) * 0.14,
    tempo: getCardBalanceScore(left.card) * 0.08 + getCardBalanceScore(right.card) * 0.08,
    fusion: getCardFusionValue(left.card) * 0.22 + getCardFusionValue(right.card) * 0.22,
    precision: Math.min(...Object.values(left.card.sides)) * 0.2 + Math.min(...Object.values(right.card.sides)) * 0.2,
  };
  const planBoost = scoreIntentAlignment(
    {
      aggression: resolveAdventureWeight(weights, "aggressionPlanBias"),
      control: resolveAdventureWeight(weights, "controlPlanBias"),
      tempo: resolveAdventureWeight(weights, "tempoPlanBias"),
      fusion: resolveAdventureWeight(weights, "fusionPlanBias"),
      precision: resolveAdventureWeight(weights, "precisionPlanBias"),
    },
    fusionIntent,
  );

  return (
    fusedStrength +
    consumeBonus +
    forgeRouteBias * 2 +
    specialCardValue * 0.45 +
    getCardFusionValue(left.card) * 0.35 +
    getCardFusionValue(right.card) * 0.35 +
    planBoost * 0.05
  );
}

function scoreFusionDeckImpact(run: AdventureRunState, left: AdventureDeckCard, right: AdventureDeckCard, weights?: TrainedBotWeights | null): number {
  const remaining = run.deck.cards
    .filter((entry) => entry.deckCardId !== left.deckCardId && entry.deckCardId !== right.deckCardId)
    .map((entry) => entry.card);
  const fusedSides = {
    top: left.card.sides.top >= right.card.sides.top ? left.card.sides.top : right.card.sides.top,
    right: left.card.sides.right >= right.card.sides.right ? left.card.sides.right : right.card.sides.right,
    bottom: left.card.sides.bottom >= right.card.sides.bottom ? left.card.sides.bottom : right.card.sides.bottom,
    left: left.card.sides.left >= right.card.sides.left ? left.card.sides.left : right.card.sides.left,
  };
  const fusedCard = {
    ...left.card,
    id: `virtual-fusion-${left.deckCardId}-${right.deckCardId}`,
    sides: fusedSides,
    sourceType: "fusion" as const,
  };

  const before = analyzeAdventureDeck(run.deck.cards);
  const after = analyzeDeck([...remaining, fusedCard]);
  const specialCardValue = resolveAdventureWeight(weights, "specialCardValue");
  const intent = createBuildIntentProfile(run, weights);

  return (
    (after.fusionPotential - before.fusionPotential) * 0.12 +
    (after.weakestDirectionValue - before.weakestDirectionValue) * 0.95 +
    (after.averageCornerValue - before.averageCornerValue) * 0.3 +
    specialCardValue * 0.3 +
    scoreIntentAlignment(intent, cardBuildIntent(fusedCard)) * 0.04
  );
}

function bestFusionPair(run: AdventureRunState, weights?: TrainedBotWeights | null): [AdventureDeckCard, AdventureDeckCard] | null {
  const cards = run.deck.cards;
  let bestPair: [AdventureDeckCard, AdventureDeckCard] | null = null;
  let bestScore = Number.NEGATIVE_INFINITY;

  for (let leftIndex = 0; leftIndex < cards.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < cards.length; rightIndex += 1) {
      const candidate: [AdventureDeckCard, AdventureDeckCard] = [cards[leftIndex], cards[rightIndex]];
      const score = scoreFusionPair(candidate[0], candidate[1], weights) + scoreFusionDeckImpact(run, candidate[0], candidate[1], weights);
      if (score > bestScore) {
        bestScore = score;
        bestPair = candidate;
      }
    }
  }

  return bestPair;
}

export function chooseAdventureNodeForBot(run: AdventureRunState, weights?: TrainedBotWeights | null): AdventureNode | null {
  const availableNodes = listAvailableAdventureNodes(run);
  if (availableNodes.length === 0) {
    return null;
  }

  return [...availableNodes].sort((left, right) => compareNodes(run, left, right, weights))[0] ?? null;
}

export function chooseAdventureRewardForBot(
  run: AdventureRunState,
  weights?: TrainedBotWeights | null,
): AdventureRewardOption | null {
  const options = getAdventureRewardOptions(run);
  if (options.length === 0) {
    return null;
  }

  return [...options].sort((left, right) => {
    const rightCard = getCardArchetype(right.archetypeId);
    const leftCard = getCardArchetype(left.archetypeId);
    const rightDuplicatePenalty =
      Math.max(0, countDuplicateBaseIds(run, rightCard.baseArchetypeId ?? rightCard.id) - 1) *
      resolveAdventureWeight(weights, "duplicateCardPenalty");
    const leftDuplicatePenalty =
      Math.max(0, countDuplicateBaseIds(run, leftCard.baseArchetypeId ?? leftCard.id) - 1) *
      resolveAdventureWeight(weights, "duplicateCardPenalty");
    const scoreDiff =
      scoreReward(right, weights) +
      scoreDeckFit(rightCard, run, weights) -
      rightDuplicatePenalty -
      (scoreReward(left, weights) + scoreDeckFit(leftCard, run, weights) - leftDuplicatePenalty);
    if (scoreDiff !== 0) {
      return scoreDiff;
    }

    return left.rewardId.localeCompare(right.rewardId);
  })[0] ?? null;
}

export function chooseAdventureCharmForBot(
  run: AdventureRunState,
  weights?: TrainedBotWeights | null,
): AdventureCharmOfferOption | null {
  const options = getAdventureCharmOptions(run);
  if (options.length === 0) {
    return null;
  }

  return [...options].sort((left, right) => {
    const scoreDiff = scoreCharmOption(run, right, weights) - scoreCharmOption(run, left, weights);
    if (scoreDiff !== 0) {
      return scoreDiff;
    }

    return left.charmId.localeCompare(right.charmId);
  })[0] ?? null;
}

export function chooseAdventureSiteModeForBot(
  run: AdventureRunState,
  weights?: TrainedBotWeights | null,
): "remove" | "upgrade" {
  const weakDraftCount = countWeakDraftCards(run);
  const deckSummary = analyzeAdventureDeck(run.deck.cards);
  const buildProfile = analyzeAdventureDeckBuildProfile(run.deck.cards);
  const trimScore =
    weakDraftCount * 1.6 +
    deckBloat(run) * 1.4 +
    resolveAdventureWeight(weights, "deckTrimValue") * 0.9 +
    buildProfile.trimPressure * 0.8;
  const upgradeScore =
    resolveAdventureWeight(weights, "specialCardValue") * 1.2 +
    resolveAdventureWeight(weights, "restRouteBias") * 0.8 +
    countSpecialCards(run) * 0.45 +
    Math.max(0, 6 - deckSummary.weakestDirectionValue) * 0.9 +
    scoreIntentAlignment(createBuildIntentProfile(run, weights), {
      aggression: buildProfile.aggression * 0.1,
      control: buildProfile.control * 0.1,
      tempo: buildProfile.tempo * 0.1,
      fusion: buildProfile.fusion * 0.1,
      precision: buildProfile.precision * 0.1,
    }) * 0.02;

  return trimScore > upgradeScore ? "remove" : "upgrade";
}

export function chooseAdventureCampForBot(
  run: AdventureRunState,
  weights?: TrainedBotWeights | null,
): AdventureDeckCard | null {
  if (run.siteState?.kind !== "camp") {
    return null;
  }

  const sorted =
    run.siteState.selectedMode === "remove"
      ? [...run.deck.cards].sort((left, right) => compareRemovalScore(left, right, weights))
      : [...run.deck.cards].sort((left, right) => compareCardScore(left, right, weights));

  return sorted[0] ?? null;
}

export function chooseAdventureForgeForBot(
  run: AdventureRunState,
  weights?: TrainedBotWeights | null,
): AdventureDeckCard | null {
  if (run.siteState?.kind !== "forge") {
    return null;
  }

  const pair = bestFusionPair(run, weights);
  if (!pair) {
    return null;
  }

  const [left, right] = pair;
  if (run.siteState.selectedCardIds.length === 0) {
    return left;
  }

  if (run.siteState.selectedCardIds.includes(left.deckCardId)) {
    return right;
  }

  return left;
}

export function chooseAdventureSiteContinueForBot(run: AdventureRunState): boolean {
  return run.phase === "site";
}
