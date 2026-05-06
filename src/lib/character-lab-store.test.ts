import { describe, expect, it } from "vitest";

import { DEFAULT_CHARACTER_LAB_SETTINGS, mergeCharacterLabSettings } from "@/lib/character-lab-store";

describe("mergeCharacterLabSettings", () => {
  it("applies defaults when local settings are missing", () => {
    expect(mergeCharacterLabSettings()).toEqual(DEFAULT_CHARACTER_LAB_SETTINGS);
  });

  it("clamps unsafe numeric values from local settings", () => {
    expect(
      mergeCharacterLabSettings({
        width: 20,
        height: 40,
        referenceStrength: 4,
        batchSize: 99,
        steps: 2,
        guidanceScale: 400,
      }),
    ).toMatchObject({
      width: 256,
      height: 256,
      referenceStrength: 0.85,
      batchSize: 8,
      steps: 4,
      guidanceScale: 20,
    });
  });
});
