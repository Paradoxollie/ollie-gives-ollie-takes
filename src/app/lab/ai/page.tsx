import { notFound } from "next/navigation";

import { AiLabDashboard } from "@/components/ai-lab-dashboard";
import { isLabSurfaceEnabled } from "@/lib/deployment-mode";

export const dynamic = "force-dynamic";

export default async function AiLabPage() {
  if (!isLabSurfaceEnabled()) {
    notFound();
  }

  const [{ loadAiLabReport }, { loadResolvedLiveChampionProfile }, { loadTrainingStatus }] = await Promise.all([
    import("@/lib/ai-lab-report"),
    import("@/lib/live-champion"),
    import("@/lib/training-status"),
  ]);
  const [report, liveChampion, trainingStatus] = await Promise.all([
    loadAiLabReport(),
    loadResolvedLiveChampionProfile(),
    loadTrainingStatus().catch(() => null),
  ]);

  return (
    <AiLabDashboard
      report={report}
      trainingStatus={trainingStatus}
      liveChampion={liveChampion}
      canControlTraining={process.env.NODE_ENV !== "production" && process.platform === "win32"}
    />
  );
}
