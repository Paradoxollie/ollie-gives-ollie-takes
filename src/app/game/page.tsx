import { BattleClient } from "@/components/battle-client";
import { loadResolvedLiveChampionProfile } from "@/lib/live-champion";

export const dynamic = "force-dynamic";

export default async function GamePage() {
  const liveChampionProfile = await loadResolvedLiveChampionProfile();

  return <BattleClient initialLiveChampionProfile={liveChampionProfile} />;
}
