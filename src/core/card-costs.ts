import type { CardEffect, CardRarity, CardRole, CardSides } from "@/core/types";

const RARITY_COST_FLOOR: Record<CardRarity, number> = {
  common: 1,
  uncommon: 2,
  rare: 3,
};

function sumSides(sides: CardSides): number {
  return sides.top + sides.right + sides.bottom + sides.left;
}

function hasHeavyEffect(effects: CardEffect[] | undefined): boolean {
  return (effects ?? []).some((effect) => {
    if (effect.kind === "deal-damage") {
      return effect.amount >= 2;
    }

    if (effect.kind === "draw-next-turn") {
      return effect.amount >= 2;
    }

    if (effect.kind === "gain-mana-next-turn" || effect.kind === "apply-poison") {
      return effect.amount >= 2;
    }

    if (effect.kind === "gain-shield") {
      return effect.amount >= 2 && !effect.condition;
    }

    return effect.kind === "boost-self" && effect.directions === "all";
  });
}

/**
 * Infers a Slay-like mana cost from card strength, rarity and effect weight.
 */
export function inferCardManaCost(options: {
  sides: CardSides;
  rarity?: CardRarity;
  role?: CardRole;
  effects?: CardEffect[];
}): number {
  const sideTotal = sumSides(options.sides);
  const strongestSide = Math.max(options.sides.top, options.sides.right, options.sides.bottom, options.sides.left);
  const rarityFloor = options.rarity ? RARITY_COST_FLOOR[options.rarity] : 1;
  let cost = rarityFloor;

  if (sideTotal >= 15 || strongestSide >= 6 || hasHeavyEffect(options.effects)) {
    cost = Math.max(cost, 2);
  }

  if (options.role === "attacker" || options.role === "payoff") {
    cost = Math.max(cost, 2);
  }

  if (sideTotal >= 20 || options.role === "finisher") {
    cost = Math.max(cost, 3);
  }

  if (options.role === "connector" && sideTotal <= 11 && !hasHeavyEffect(options.effects)) {
    cost = Math.min(cost, 1);
  }

  return Math.max(0, Math.min(3, cost));
}
