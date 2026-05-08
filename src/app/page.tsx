import { isPlaytestBuild } from "@/lib/playtest-mode";
import { isLabSurfaceEnabled } from "@/lib/deployment-mode";

export default async function HomePage() {
  if (isPlaytestBuild()) {
    const { PlaytestExperience } = await import("@/components/playtest-experience");
    return <PlaytestExperience />;
  }

  const { HomeExperience } = await import("@/components/home-experience");
  const liveChampionProfile = isLabSurfaceEnabled()
    ? await import("@/lib/live-champion").then(({ loadResolvedLiveChampionProfile }) => loadResolvedLiveChampionProfile())
    : null;

  return <HomeExperience initialLiveChampionProfile={liveChampionProfile} />;
}
