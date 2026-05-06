import type { CardFamily } from "@/core/types";

export interface CardFamilyThreshold {
  count: number;
  label: string;
  effect: string;
}

export interface CardFamilyDefinition {
  id: CardFamily;
  label: string;
  shortLabel: string;
  identity: string;
  thresholds: CardFamilyThreshold[];
}

export const CARD_FAMILY_DEFINITIONS: Record<CardFamily, CardFamilyDefinition> = {
  familiar: {
    id: "familiar",
    label: "Familiers",
    shortLabel: "Familier",
    identity: "Jeu de meute, solide quand les cartes restent proches.",
    thresholds: [
      { count: 2, label: "Meute", effect: "+1 attaque si un familier allie touche l'attaquant." },
      { count: 3, label: "Terrier", effect: "+1 defense si un familier allie touche le defenseur." },
      { count: 4, label: "Famille", effect: "+1 controle en fin de manche." },
    ],
  },
  demon: {
    id: "demon",
    label: "Demons",
    shortLabel: "Demon",
    identity: "Pression agressive, punit les cibles isolees et les cartes marquees.",
    thresholds: [
      { count: 2, label: "Pacte", effect: "Les flips marquent la cible comme demoniaque pour ton camp." },
      { count: 3, label: "Brulure", effect: "+1 attaque contre une cible marquee ou isolee." },
      { count: 5, label: "Abyme", effect: "+1 controle si au moins deux cartes marquees sont sous ton controle." },
    ],
  },
  human: {
    id: "human",
    label: "Humains",
    shortLabel: "Humain",
    identity: "Formation lisible, forte sur les lignes et les colonnes.",
    thresholds: [
      { count: 2, label: "Escouade", effect: "+1 attaque avec un humain dans la meme ligne ou colonne." },
      { count: 3, label: "Bouclier", effect: "+1 defense avec un humain dans la meme ligne ou colonne." },
      { count: 5, label: "Bastion", effect: "+1 controle si une ligne ou colonne t'appartient avec deux humains." },
    ],
  },
  automaton: {
    id: "automaton",
    label: "Automates",
    shortLabel: "Automate",
    identity: "Ancrage defensif, excellent sur les coins et les plateaux bloques.",
    thresholds: [
      { count: 2, label: "Blindage", effect: "+1 defense sur les coins." },
      { count: 3, label: "Module", effect: "+1 defense si un automate allie est adjacent." },
      { count: 4, label: "Fortin", effect: "+1 controle si un automate tient un coin." },
    ],
  },
  revenant: {
    id: "revenant",
    label: "Revenants",
    shortLabel: "Revenant",
    identity: "Retour de retard, meilleur quand tu es sous pression.",
    thresholds: [
      { count: 2, label: "Rappel", effect: "+1 attaque quand tu n'es pas devant au controle." },
      { count: 3, label: "Linceul", effect: "+1 defense quand tu n'es pas devant au controle." },
      { count: 4, label: "Rechute", effect: "+1 controle en fin de manche si tu es encore derriere." },
    ],
  },
  arcane: {
    id: "arcane",
    label: "Arcanes",
    shortLabel: "Arcane",
    identity: "Precision et egalites, fort autour du centre.",
    thresholds: [
      { count: 2, label: "Parite", effect: "+1 attaque quand les deux valeurs comparees sont egales." },
      { count: 4, label: "Noyau", effect: "+1 controle si une carte arcane tient le centre." },
    ],
  },
  dragon: {
    id: "dragon",
    label: "Dragons",
    shortLabel: "Dragon",
    identity: "Cartes rares de puissance brute prevues pour les extensions.",
    thresholds: [
      { count: 2, label: "Souffle", effect: "Reserve extension: pression de ligne courte." },
      { count: 3, label: "Ancien", effect: "Reserve extension: controle de fin de manche." },
    ],
  },
  renegade: {
    id: "renegade",
    label: "Renegats",
    shortLabel: "Renegat",
    identity: "Cartes de contre et de tempo prevues pour les extensions.",
    thresholds: [
      { count: 2, label: "Embuscade", effect: "Reserve extension: bonus contre les familles dominantes." },
      { count: 3, label: "Coup bas", effect: "Reserve extension: reaction apres flip adverse." },
    ],
  },
};

export function getCardFamilyDefinition(family: CardFamily): CardFamilyDefinition {
  return CARD_FAMILY_DEFINITIONS[family];
}
