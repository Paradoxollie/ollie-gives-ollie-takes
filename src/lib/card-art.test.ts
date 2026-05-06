import { describe, expect, it } from "vitest";

import {
  buildCandidateFilename,
  getCharacterLabPublicDir,
  isSupportedGeneratedImage,
} from "@/lib/card-art";

describe("card art helpers", () => {
  it("builds the public directory for one card", () => {
    expect(getCharacterLabPublicDir("stag")).toBe("/images/cards-generated/stag");
  });

  it("detects supported generated image extensions", () => {
    expect(isSupportedGeneratedImage("candidate.png")).toBe(true);
    expect(isSupportedGeneratedImage("candidate.webp")).toBe(true);
    expect(isSupportedGeneratedImage("candidate.gif")).toBe(false);
  });

  it("creates stable candidate filenames", () => {
    expect(buildCandidateFilename("stag", "2026-04-03T12:34:56.000Z", 2)).toBe(
      "candidate-stag-20260403123456-03.png",
    );
  });
});
