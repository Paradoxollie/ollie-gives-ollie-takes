import { BattleClient } from "@/components/battle-client";
import { isLabSurfaceEnabled } from "@/lib/deployment-mode";

export const dynamic = "force-dynamic";

export default async function GamePage() {
  const liveChampionProfile = isLabSurfaceEnabled()
    ? await import("@/lib/live-champion").then(({ loadResolvedLiveChampionProfile }) => loadResolvedLiveChampionProfile())
    : null;

  return <BattleClient initialLiveChampionProfile={liveChampionProfile} />;
}
