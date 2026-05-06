/**
 * Generates the next deterministic pseudo-random float in the range [0, 1).
 */
export function nextRandom(seed: number): { value: number; seed: number } {
  const nextSeed = (seed * 1664525 + 1013904223) >>> 0;
  return {
    value: nextSeed / 0x100000000,
    seed: nextSeed
  };
}

/**
 * Shuffles an array without mutating the input, returning the next seed alongside the shuffled copy.
 */
export function shuffleWithSeed<T>(items: ReadonlyArray<T>, seed: number): { items: T[]; seed: number } {
  const result = [...items];
  let nextSeed = seed;

  for (let index = result.length - 1; index > 0; index -= 1) {
    const roll = nextRandom(nextSeed);
    nextSeed = roll.seed;
    const swapIndex = Math.floor(roll.value * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return {
    items: result,
    seed: nextSeed
  };
}

/**
 * Picks one value from a non-empty list using deterministic seeded randomness.
 */
export function pickWithSeed<T>(items: readonly T[], seed: number): { item: T; seed: number; index: number } {
  if (items.length === 0) {
    throw new Error("Cannot pick from an empty list.");
  }

  const roll = nextRandom(seed);
  const index = Math.floor(roll.value * items.length);
  return {
    item: items[index],
    seed: roll.seed,
    index
  };
}

/**
 * Mixes an integer seed with a string salt so separate simulation series remain deterministic but distinct.
 */
export function mixSeed(seed: number, salt: string): number {
  let mixed = seed >>> 0;

  for (let index = 0; index < salt.length; index += 1) {
    mixed ^= salt.charCodeAt(index);
    mixed = Math.imul(mixed, 16777619) >>> 0;
  }

  return mixed >>> 0;
}
