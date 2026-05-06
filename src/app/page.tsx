import { isPlaytestBuild } from "@/lib/playtest-mode";

export default async function HomePage() {
  if (isPlaytestBuild()) {
    const { PlaytestExperience } = await import("@/components/playtest-experience");
    return <PlaytestExperience />;
  }

  const [{ HomeExperience }, { loadResolvedLiveChampionProfile }] = await Promise.all([
    import("@/components/home-experience"),
    import("@/lib/live-champion"),
  ]);
  const liveChampionProfile = await loadResolvedLiveChampionProfile();

  return <HomeExperience initialLiveChampionProfile={liveChampionProfile} />;
}
