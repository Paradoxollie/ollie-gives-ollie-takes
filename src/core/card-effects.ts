import type { CardEffect, CardEffectCondition, CardEffectKind } from "@/core/types";

const CONDITION_COPY: Record<CardEffectCondition, string> = {
  always: "",
  "adjacent-ally": "si un allie est adjacent",
  "adjacent-enemy": "si un ennemi est adjacent",
  corner: "dans un coin",
  center: "au centre",
  "behind-on-board": "si tu n'es pas devant",
};

const KIND_COPY: Record<CardEffectKind, string> = {
  "gain-shield": "Bouclier",
  "deal-damage": "Attaque",
  "draw-next-turn": "Pioche",
  "boost-self": "Canalise",
};

const ICON_LABELS: Record<CardEffectKind, string> = {
  "gain-shield": "Bouclier",
  "deal-damage": "Attaque",
  "draw-next-turn": "Pioche",
  "boost-self": "Canalisation",
};

function effectAmountText(effect: CardEffect): string {
  if (effect.kind === "boost-self") {
    const target = effect.directions === "all" ? "tous ses cotes" : effect.directions === "weakest" ? "son cote faible" : "son cote fort";
    return `+${effect.amount} sur ${target}`;
  }

  if (effect.kind === "gain-shield") {
    return `+${effect.amount} bouclier`;
  }

  if (effect.kind === "deal-damage") {
    return `${effect.amount} degat${effect.amount > 1 ? "s" : ""}`;
  }

  return `+${effect.amount} pioche`;
}

/**
 * Returns an immutable copy of card effects so deck mutations cannot share arrays.
 */
export function cloneCardEffects(effects: CardEffect[] | undefined): CardEffect[] {
  return (effects ?? []).map((effect) => ({ ...effect }));
}

/**
 * Formats a card effect as short card rules text.
 */
export function formatCardEffect(effect: CardEffect): string {
  const trigger = effect.trigger === "on-play" ? "Pose" : `Flip${effect.minFlips ? ` ${effect.minFlips}+` : ""}`;
  const condition = effect.condition && effect.condition !== "always" ? ` ${CONDITION_COPY[effect.condition]}` : "";
  const combo = effect.requiredFamilyCount ? ` Combo ${effect.requiredFamilyCount}${effect.scaleWithFamilyCount ? "+" : ""}` : "";
  const scale = effect.scaleWithFamilyCount ? `, cumule avec la famille${effect.maxScale ? ` jusqu'a x${effect.maxScale}` : ""}` : "";
  return `${trigger}${condition}${combo}: ${KIND_COPY[effect.kind]} ${effectAmountText(effect)}${scale}.`;
}

/**
 * Formats all card effects for compact UI display.
 */
export function formatCardEffects(card: { effects?: CardEffect[] }): string {
  return cloneCardEffects(card.effects).map(formatCardEffect).join(" ");
}

/**
 * Returns the short icon label for a card effect.
 */
export function getCardEffectIconLabel(effect: CardEffect): string {
  return ICON_LABELS[effect.kind];
}
