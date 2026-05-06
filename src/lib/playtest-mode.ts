export function isPlaytestBuild(): boolean {
  return process.env.NEXT_PUBLIC_PLAYTEST_BUILD === "1" || process.env.PLAYTEST_BUILD === "1";
}
