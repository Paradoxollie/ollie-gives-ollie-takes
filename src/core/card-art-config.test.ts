import { describe, expect, it } from "vitest";

import { getCardArchetype } from "@/core/cards";
import { ADVENTURE_REWARD_ARCHETYPES } from "@/core/config/adventureRewards";
import { getFamilyBadgeArtSrc, getFamilyCrestArtSrc, getNeutralCardArtSrc } from "@/core/config/cardArt";

describe("card art config", () => {
  it("uses the familiar family card template for starter familiars", () => {
    expect(getCardArchetype("sapling").artSrc).toBe(getNeutralCardArtSrc("familiar"));
  });

  it("uses neutral family art for archetypes without finished card art", () => {
    expect(getCardArchetype("ember-imp").artSrc).toBe(getNeutralCardArtSrc("demon"));
    expect(getCardArchetype("field-knight").artSrc).toBe(getNeutralCardArtSrc("human"));
  });

  it("uses neutral family art for generated reward cards", () => {
    const demonReward = ADVENTURE_REWARD_ARCHETYPES.find((card) => card.family === "demon");

    expect(demonReward?.artSrc).toBe(getNeutralCardArtSrc("demon"));
  });

  it("exposes family crest assets for neutral board units", () => {
    expect(getFamilyCrestArtSrc("arcane")).toBe("/images/ui/family-crests/arcane.png");
  });

  it("exposes family badge assets for side panels", () => {
    expect(getFamilyBadgeArtSrc("familiar")).toBe("/images/ui/family-badges/familiar.png");
  });
});
