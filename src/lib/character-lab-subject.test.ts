import { describe, expect, it } from "vitest";

import { sanitizeCharacterLabSubjectPrompt } from "@/lib/character-lab-subject";

describe("sanitizeCharacterLabSubjectPrompt", () => {
  it("drops legacy render-style and environment clauses while keeping the character description", () => {
    const result = sanitizeCharacterLabSubjectPrompt(`
      masterpiece, best quality, stylized 3D render,
      cute anthropomorphic Venus flytrap character, round green face, big glowing purple kawaii anime eyes,
      standing on a circular stone pedestal with small lit braziers,
      magical enchanted forest background, glowing mushrooms, floating fireflies,
      Unreal Engine 5 style, Octane Render, volumetric lighting, ray tracing
    `);

    expect(result.subjectPrompt).toBe(
      "cute anthropomorphic Venus flytrap character, round green face, big glowing purple eyes",
    );
    expect(result.removedSegments).toEqual(
      expect.arrayContaining([
        "masterpiece",
        "best quality",
        "stylized 3D render",
        "magical enchanted forest background",
        "glowing mushrooms",
        "floating fireflies",
      ]),
    );
  });

  it("recovers pose wording when the segment also contains a pedestal clause", () => {
    const result = sanitizeCharacterLabSubjectPrompt(
      "small rune-carved pony guardian, standing proud on a ritual pedestal, carved antler charms",
    );

    expect(result.subjectPrompt).toBe("small rune-carved pony guardian, standing proud, carved antler charms");
  });
});
