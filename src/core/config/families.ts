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
    identity: "Jeu de meute, solide quand plusieurs familiers partagent la meme case.",
    thresholds: [
      { count: 2, label: "Meute", effect: "+1 attaque et +1 defense dans cette pile." },
      { count: 3, label: "Terrier", effect: "Pile tres stable, parfaite pour tenir une case cle." },
    ],
  },
  demon: {
    id: "demon",
    label: "Demons",
    shortLabel: "Demon",
    identity: "Pression agressive, forte quand plusieurs demons sont joues ensemble.",
    thresholds: [
      { count: 2, label: "Pacte", effect: "+1 attaque et les flips marquent la cible." },
      { count: 3, label: "Brulure", effect: "+1 attaque supplementaire, soit +2 attaque au total." },
    ],
  },
  human: {
    id: "human",
    label: "Humains",
    shortLabel: "Humain",
    identity: "Formation lisible aux roles distincts: deux humains tiennent la ligne, trois passent a l'offensive.",
    thresholds: [
      { count: 2, label: "Escouade", effect: "+1 defense dans cette pile." },
      { count: 3, label: "Bastion", effect: "+1 attaque en plus de la defense de l'escouade." },
    ],
  },
  automaton: {
    id: "automaton",
    label: "Automates",
    shortLabel: "Automate",
    identity: "Ancrage defensif qui devient une machine de riposte une fois complet.",
    thresholds: [
      { count: 2, label: "Blindage", effect: "+1 defense dans cette pile." },
      { count: 3, label: "Module", effect: "+1 attaque, et +1 defense supplementaire dans un coin." },
    ],
  },
  revenant: {
    id: "revenant",
    label: "Revenants",
    shortLabel: "Revenant",
    identity: "Retour de retard, meilleur quand plusieurs revenants se rassemblent sous pression.",
    thresholds: [
      { count: 2, label: "Rappel", effect: "+1 attaque et +1 defense quand tu n'es pas devant." },
      { count: 3, label: "Linceul", effect: "Pile de comeback tres difficile a ignorer." },
    ],
  },
  arcane: {
    id: "arcane",
    label: "Arcanes",
    shortLabel: "Arcane",
    identity: "Precision et egalites: le centre lance un reseau qui se prolonge vers un noyau complet.",
    thresholds: [
      { count: 2, label: "Parite", effect: "+1 attaque quand les deux valeurs comparees sont egales." },
      { count: 3, label: "Noyau", effect: "+1 defense pour conserver une case cle et alimenter les payoffs de pioche." },
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
