"use client";

import { CARD_ARCHETYPE_LOOKUP } from "@/core/config/cardArchetypes";
import type { AdventureRewardState } from "@/core/types";

import { CardView } from "@/components/card-view";

interface AdventureRewardOverlayProps {
  rewardOffer: AdventureRewardState;
  deckSize: number;
  onChooseReward: (rewardId: string) => void;
  onSkip: () => void;
}

function rarityLabel(rarity: AdventureRewardState["options"][number]["rarity"]): string {
  switch (rarity) {
    case "common":
      return "Commune";
    case "uncommon":
      return "Inhabituelle";
    case "rare":
      return "Rare";
  }
}

function rewardSourceLabel(kind: AdventureRewardState["sourceNodeKind"]): string {
  switch (kind) {
    case "combat":
      return "Carte volee";
    case "elite":
      return "Prise d'elite";
    case "shop":
      return "Trouvaille de forge";
    case "chest":
      return "Carte du coffre";
    case "rest":
      return "Souvenir du camp";
    case "boss":
      return "Trophee du boss";
  }
}

function isStealReward(kind: AdventureRewardState["sourceNodeKind"]): boolean {
  return kind === "combat" || kind === "elite";
}

function rewardPreviewCard(archetypeId: string) {
  const card = CARD_ARCHETYPE_LOOKUP[archetypeId];

  return {
    instanceId: `reward-${card.id}`,
    archetypeId: card.id,
    owner: "player" as const,
    name: card.name,
    sides: card.sides,
    family: card.family,
    accent: card.accent,
    artSrc: card.artSrc,
    rarity: card.rarity,
    sourceType: card.sourceType,
    baseArchetypeId: card.baseArchetypeId,
    corruptedBy: null,
  };
}

function rewardFlavor(kind: AdventureRewardState["sourceNodeKind"]): string {
  switch (kind) {
    case "combat":
      return "Victoire nette. Tu peux prendre une carte unique dans le deck adverse.";
    case "elite":
      return "L'adversaire garde des cartes plus dangereuses. Une seule peut rejoindre ton deck.";
    case "shop":
      return "La forge murmure encore. Quel outil veux-tu emporter ?";
    case "chest":
      return "Le coffre ne s'ouvre jamais pour rien. Prends ce qui vaut le risque.";
    case "rest":
      return "Entre deux souffles, le jeu revele un nouvel atout.";
    case "boss":
      return "Celle-ci ressemble presque a une clef.";
  }
}

export function AdventureRewardOverlay({
  rewardOffer,
  deckSize,
  onChooseReward,
  onSkip,
}: AdventureRewardOverlayProps) {
  const stealReward = isStealReward(rewardOffer.sourceNodeKind);

  return (
    <div className="relative flex h-full min-h-0 flex-col justify-center overflow-hidden px-2 py-3 sm:px-3 sm:py-5">
      <div className="ogot-vignette -z-10" />

      <div className="mx-auto flex h-full min-h-0 w-full max-w-[94rem] flex-col">
        <div className="ogot-ornate-panel relative flex h-full min-h-0 flex-col rounded-[2.4rem] px-4 py-5 text-white sm:px-6 sm:py-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(125,247,255,0.1),rgba(125,247,255,0)_18%),radial-gradient(circle_at_82%_18%,rgba(79,195,247,0.1),rgba(79,195,247,0)_18%)]" />

          <div className="relative flex flex-col items-center text-center">
            <div className="ogot-title-banner px-6 py-4 sm:px-10">
              <div>
                <p className="text-[0.52rem] uppercase tracking-[0.34em] text-cyan-200/60">
                  {rewardSourceLabel(rewardOffer.sourceNodeKind)}
                </p>
                <h2 className="mt-1 font-serif text-[1.6rem] leading-none sm:text-[3rem]">
                  {stealReward ? "Vole une carte" : "Choisis une carte"}
                </h2>
              </div>
            </div>

            <div className="ogot-sheet-note mt-4 max-w-[42rem] rounded-[1.25rem] px-5 py-3">
              <p className="text-sm leading-7">{rewardFlavor(rewardOffer.sourceNodeKind)}</p>
            </div>
          </div>

          <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="rounded-[1.15rem] border border-white/10 bg-black/28 px-4 py-3">
              <p className="text-[0.48rem] uppercase tracking-[0.24em] text-white/42">Deck actuel</p>
              <p className="mt-1 text-[1.7rem] font-semibold leading-none text-white">
                {deckSize}
                <span className="ml-1 text-[0.76rem] font-medium text-white/42">cartes</span>
              </p>
            </div>

            <button type="button" onClick={onSkip} className="ogot-secondary-button rounded-[1rem] px-5 text-[0.72rem]">
              {stealReward ? "Continuer sans voler" : "Continuer sans carte"}
            </button>
          </div>

          <div className="ogot-scroll relative mt-6 grid min-h-0 flex-1 gap-4 overflow-y-auto pr-1 lg:grid-cols-3">
            {rewardOffer.options.map((option) => {
              const card = CARD_ARCHETYPE_LOOKUP[option.archetypeId];
              return (
                <section key={option.rewardId} className="ogot-choice-card rounded-[1.9rem] p-4 sm:p-5">
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.5rem] uppercase tracking-[0.26em] text-white/40">Carte proposee</p>
                        <h3 className="mt-2 font-serif text-[1.55rem] leading-tight text-white">{card.name}</h3>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/7 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-white/74">
                        {rarityLabel(option.rarity)}
                      </span>
                    </div>

                    <div className="mx-auto mt-5 aspect-[234/333] w-full max-w-[12.4rem] sm:max-w-[13rem]">
                      <CardView card={rewardPreviewCard(option.archetypeId)} layout="hand" className="h-full w-full" />
                    </div>

                    <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-black/28 px-4 py-3">
                      <p className="text-[0.5rem] uppercase tracking-[0.22em] text-white/42">Pourquoi la prendre</p>
                      <p className="mt-2 text-[0.86rem] leading-7 text-white/74">
                        {stealReward
                          ? "Cette carte quitte le pool adverse et devient une vraie option de ta run."
                          : "Cette carte rejoint le deck fixe de la run pour les prochains combats."}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onChooseReward(option.rewardId)}
                      className="ogot-red-button mt-5 w-full rounded-[1.1rem] text-[0.74rem]"
                    >
                      {stealReward ? "Voler" : "Prendre"}
                    </button>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
